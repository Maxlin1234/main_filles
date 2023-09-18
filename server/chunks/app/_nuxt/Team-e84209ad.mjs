import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { useSSRContext, onUnmounted, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    onUnmounted(() => {
      window.removeEventListener("scroll", handleStickyScroll);
    });
    function handleStickyScroll() {
      const sticky_item = document.getElementById("sticky_item");
      if (!sticky_item)
        return;
      const width = sticky_item.getBoundingClientRect().width;
      const height = sticky_item.getBoundingClientRect().height;
      const parent = document.querySelector(".team-crev").getBoundingClientRect();
      if (parent.top < -30 && parent.height / 2 < parent.bottom) {
        sticky_item.style.position = "fixed";
        sticky_item.style.top = "0px";
        sticky_item.style.width = width + "px";
        sticky_item.classList.add("is_stuck");
        if (sticky_item.nextElementSibling.id !== "placeholder") {
          const placeholderElement = document.createElement("div");
          placeholderElement.id = "placeholder";
          placeholderElement.style.height = height + "px";
          placeholderElement.style.width = width + "px";
          sticky_item.after(placeholderElement);
        }
      } else if (parent.height / 2 > parent.bottom) {
        sticky_item.style.position = "absolute";
        sticky_item.style.top = "auto";
        sticky_item.style.bottom = "0";
        sticky_item.style.width = width + "px";
      } else {
        sticky_item.style.position = "unset";
        sticky_item.style.top = "unset";
        sticky_item.style.bottom = "unset";
        sticky_item.style.width = "auto";
        sticky_item.classList.remove("is_stuck");
        if (sticky_item.nextElementSibling.id === "placeholder")
          sticky_item.nextElementSibling.remove();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-crev section-padding pb-0 bord-thin-bottom" }, _attrs))}><div class="container-fluid rest"><div class="row"><div class="col-12" style="${ssrRenderStyle({ "position": "relative" })}"><div class="sec-head-lg text-center text-u mb-80" id="sticky_item"><h2>Team</h2></div><div class="swiper4">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main;

export { __nuxt_component_6 as _ };
//# sourceMappingURL=Team-e84209ad.mjs.map
