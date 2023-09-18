import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ModalVideo",
  __ssrInlineRender: true,
  props: ["videoId", "channel", "isOpen", "onClose", "autoplay"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      if (__props.isOpen) {
        _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/ModalVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ModalVideo-2460fa41.mjs.map
