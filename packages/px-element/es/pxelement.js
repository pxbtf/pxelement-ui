"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const buttonProps = {
  type: {
    type: String,
    default: "default"
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const _sfc_main = vue.defineComponent({
  name: "pxButton",
  props: buttonProps,
  emits: ["click"],
  setup(_, { emit }) {
    function clickHandle(e) {
      emit("click", e);
    }
    return {
      clickHandle
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass(["pxui-button", [`pxui-button-${_ctx.type}`, { "is-plain": _ctx.plain, "is-round": _ctx.round, "is-circle": _ctx.circle, "is-disabled": _ctx.disabled }]]),
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandle && _ctx.clickHandle(...args))
  }, [
    _ctx.icon ? (vue.openBlock(), vue.createElementBlock("i", {
      key: 0,
      class: vue.normalizeClass(`pxui-icon-${_ctx.icon}`)
    }, null, 2)) : vue.createCommentVNode("", true),
    _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "default")
    ])) : vue.createCommentVNode("", true)
  ], 10, _hoisted_1);
}
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const withInstall = (component) => {
  component.install = function(app) {
    app.component(component.name, component);
  };
};
const PxButton = withInstall(Button);
exports.PxButton = PxButton;
exports.buttonProps = buttonProps;
