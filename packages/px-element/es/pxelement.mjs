import { defineComponent, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot } from "vue";
const withInstall = (component) => {
  component.install = function(app) {
    app.component(component.name, component);
  };
};
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
const _sfc_main = defineComponent({
  name: "PxButton",
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
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["pxui-button", [
      `pxui-button-${_ctx.type}`,
      {
        "is-plain": _ctx.plain,
        "is-round": _ctx.round,
        "is-circle": _ctx.circle,
        "is-disabled": _ctx.disabled
      }
    ]]),
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandle && _ctx.clickHandle(...args))
  }, [
    _ctx.icon ? (openBlock(), createElementBlock("i", {
      key: 0,
      class: normalizeClass(`pxui-icon-${_ctx.icon}`)
    }, null, 2)) : createCommentVNode("", true),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true)
  ], 10, _hoisted_1);
}
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const PxButton = withInstall(Button);
export {
  PxButton,
  buttonProps
};
