import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode } from 'vue';
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
  __name: "CircleSlider",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `position-re ${__props.lightMode ? "bg-dark" : ""}`
      }, _attrs))}><div class="frame"><nav class="slides-nav"><div class="slide-nav-butn"><button class="slides-nav__button slides-nav__button--prev" aria-label="Previous slide"><svg><path d="M1.176 11.532a.5.5 0 00-.352.936c5.228 1.96 9.475 5.555 12.752 10.797a.5.5 0 00.848-.53c-3.39-5.424-7.81-9.163-13.248-11.203z"></path><path d="M1.176 12.468a.5.5 0 01-.352-.936C6.052 9.572 10.3 5.978 13.576.735a.5.5 0 01.848.53c-3.39 5.424-7.81 9.163-13.248 11.203z"></path><path d="M1 12.5a.5.5 0 110-1h53a.5.5 0 110 1H1z"></path></svg></button><button class="slides-nav__button slides-nav__button--next" aria-label="Next slide"><svg><path d="M53.824 11.532a.5.5 0 01.352.936c-5.228 1.96-9.475 5.555-12.752 10.797a.5.5 0 01-.848-.53c3.39-5.424 7.81-9.163 13.248-11.203z"></path><path d="M53.824 12.468a.5.5 0 00.352-.936C48.948 9.572 44.7 5.978 41.424.735a.5.5 0 00-.848.53c3.39 5.424 7.81 9.163 13.248 11.203z"></path><path d="M54 12.5a.5.5 0 100-1H1a.5.5 0 100 1h53z"></path></svg></button></div><div class="slides-nav__index"><span class="slides-nav__index-current"><span>1</span></span> \u2014 <span class="slides-nav__index-total">5</span></div></nav></div><div class="slideshow"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<figure class="${ssrRenderClass(`slide ${index === 0 ? "slide--current" : ""}`)}"><div class="slide__img-wrap"><div class="slide__img bg-img"${ssrRenderAttr("data-background", item.background)}></div></div><figcaption class="slide__caption"><h1 class="slides__caption-headline"><span class="text-row sub-title mb-15"><span>\xA9 ${ssrInterpolate(item.year)} ${ssrInterpolate(item.type)}</span></span><span class="text-row"><span>${ssrInterpolate(item.title)}</span></span></h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "slides__caption-link sub-title mt-30",
          href: "/dark/project-details1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Explore</span>`);
            } else {
              return [
                createVNode("span", null, "Explore")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</figcaption></figure>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/CircleSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=CircleSlider-53d3339d.mjs.map
