import { spawn } from "child_process";
import { series, src, dest, task } from "gulp";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import dartSass from "sass";
import rename from "gulp-rename";
// import cssmin from "gulp-cssmin";
const componentPath = ".";
const noElPrefixFile = /(index|base|display)/;
const run = async (command) => {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(" ");
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: componentPath, //执行命令的路径
      stdio: "inherit", //输出共享给父进程
      shell: true,
    });
    //执行完毕关闭并resolve
    app.on("close", resolve);
  });
};

// 处理样式
const buildStyle = () => {
  const sass = gulpSass(dartSass);
  return src(`${componentPath}/src/*.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest(`${componentPath}/dist/`));
};

const buildComponentStyle = () => {
  const sass = gulpSass(dartSass);
  return (
    src(`${componentPath}/src/components/*.scss`)
      .pipe(sass.sync())
      .pipe(autoprefixer({ cascade: false }))
      // .pipe(cssmin())
      .pipe(
        rename((path) => {
          if (!noElPrefixFile.test(path.basename)) {
            path.basename = `px-${path.basename}`;
          }
        })
      )
      .pipe(dest(`${componentPath}/dist/`))
  );
};

export const build = series(
  async () => run(`rm -rf ${componentPath}/dist`),
  async () => buildStyle(),
  async () => buildComponentStyle()
);
