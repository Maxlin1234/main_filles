import { unref, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "StatementSplitter",
  __ssrInlineRender: true,
  props: ["statement"],
  setup(__props) {
    const { statement } = __props;
    let parts = statement.split("<BR>");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(parts), (part, i) => {
        _push(`<span style="${ssrRenderStyle({ "display": "block" })}">${ssrInterpolate(part)} `);
        if (i !== unref(parts).length - 1) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/StatementSplitter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=StatementSplitter-e87ceb66.mjs.map
