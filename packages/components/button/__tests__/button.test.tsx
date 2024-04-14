import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";

describe("测试Button组件", () => {
  it("渲染按钮默认type", () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain("pxui-button");
    expect(wrapper.classes()).toContain("pxui-button-default");
  });
  it("渲染primary类型的按钮", () => {
    const wrapper = mount(Button, { props: { type: "primary" } });
    expect(wrapper.classes()).toContain("pxui-button-primary");
  });
  it("渲染plain类型的按钮", () => {
    const wrapper = mount(Button, { props: { plain: true } });
    expect(wrapper.classes()).toContain("is-plain");
  });
  it("渲染round类型的按钮", () => {
    const wrapper = mount(Button, { props: { round: true } });
    expect(wrapper.classes()).toContain("is-round");
  });

  it("渲染circle类型的按钮", () => {
    const wrapper = mount(Button, { props: { circle: true } });
    expect(wrapper.classes()).toContain("is-circle");
  });
  it("渲染disabled类型的按钮", () => {
    const wrapper = mount(Button, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.attributes()).toHaveProperty("disabled");
  });
  it("渲染icon类型的按钮", () => {
    const wrapper = mount(Button, { props: { icon: "home" } });
    expect(wrapper.find("i").classes()).toContain("pxui-icon-home");
  });
  it("测试slot插槽是否正常工作", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "按钮",
      },
    });
    expect(wrapper.text()).toContain("按钮");
    expect(wrapper.find("span").text()).toContain("按钮");
  });
  // 测试按钮事件
  it("测试按钮事件", async () => {
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
