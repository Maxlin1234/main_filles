import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const data = [
  {
    id: 1,
    background: "/dark/assets/imgs/works/full/1.jpg",
    year: "2023",
    type: "Branding",
    title: "Basket Lamp"
  },
  {
    id: 2,
    background: "/dark/assets/imgs/works/full/2.jpg",
    year: "2023",
    type: "Branding",
    title: "Moon Light"
  },
  {
    id: 3,
    background: "/dark/assets/imgs/works/full/3.jpg",
    year: "2023",
    type: "Branding",
    title: "Red Glasses"
  },
  {
    id: 4,
    background: "/dark/assets/imgs/works/full/4.jpg",
    year: "2023",
    type: "Branding",
    title: "Waffile Maker"
  },
  {
    id: 5,
    background: "/dark/assets/imgs/works/full/5.jpg",
    year: "2023",
    type: "Branding",
    title: "Headphone"
  }
];
const _sfc_main = {
  __name: "FrameSlider",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slideshow" }, _attrs))}><div class="slides slides--images"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="${ssrRenderClass(`slide ${index === 0 ? "slide--current" : ""}`)}"><div class="slide__img bg-img"${ssrRenderAttr("data-background", item.background)}></div></div>`);
      });
      _push(`<!--]--></div><div class="slides slides--titles"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="${ssrRenderClass(`slide ${index === 0 ? "slide--current" : ""}`)}"><h1 class="slide__title text-center"><span class="sub-title mb-15">\xA9 ${ssrInterpolate(item.year)} ${ssrInterpolate(item.type)}</span> <br><span>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/project-details1" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</span></h1></div>`);
      });
      _push(`<!--]--></div><nav class="slidenav"><div class="container"><button class="slidenav__item slidenav__item--prev cursor-pointer"><span><i class="fas fa-chevron-left"></i></span><span><span>Prev</span></span></button><button class="slidenav__item slidenav__item--next cursor-pointer"><span><span>Next</span></span><span><i class="fas fa-chevron-right"></i></span></button></div></nav></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/FrameSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=FrameSlider-39ddc54a.mjs.map
