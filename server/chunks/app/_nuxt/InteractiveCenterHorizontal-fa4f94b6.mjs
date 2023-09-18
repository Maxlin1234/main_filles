import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const data = [
  {
    id: 1,
    number: "01",
    type: "Design",
    title: "Everybody sunshine",
    image: "/dark/assets/imgs/works/full/1.jpg"
  },
  {
    id: 2,
    number: "02",
    type: "Branding",
    title: "Who Dares Wins",
    image: "/dark/assets/imgs/works/full/2.jpg"
  },
  {
    id: 3,
    number: "03",
    type: "Branding",
    title: "Fountain Studio",
    image: "/dark/assets/imgs/works/full/3.jpg"
  },
  {
    id: 4,
    number: "04",
    type: "Photography",
    title: "April willow flower",
    image: "/dark/assets/imgs/works/full/4.jpg"
  },
  {
    id: 5,
    number: "05",
    type: "Design",
    title: "Step Over",
    image: "/dark/assets/imgs/works/full/1.jpg"
  },
  {
    id: 6,
    number: "06",
    type: "ART Design",
    title: "Snowy Zero",
    image: "/dark/assets/imgs/works/full/2.jpg"
  },
  {
    id: 7,
    number: "07",
    type: "Design",
    title: "Fun Bike",
    image: "/dark/assets/imgs/works/full/3.jpg"
  },
  {
    id: 8,
    number: "08",
    type: "Apps",
    title: "Mobile Apps",
    image: "/dark/assets/imgs/works/full/4.jpg"
  }
];
const _sfc_main = {
  __name: "InteractiveCenterHorizontal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inter-links-center horizontal section-padding d-flex align-items-center" }, _attrs))}><div class="container-xxl"><div class="row justify-content-center"><div class="col-lg-10"><div class="links-text d-flex justify-content-center"><ul class="rest"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<li${ssrRenderAttr("data-tab", `tab-${item.id}`)}><h2><span class="num">${ssrInterpolate(item.number)}.</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/project-details1" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="tag sub-title"${_scopeId}>${ssrInterpolate(item.type)}</span> <span class="text"${_scopeId}>${ssrInterpolate(item.title)}</span>`);
            } else {
              return [
                createVNode("span", { class: "tag sub-title" }, toDisplayString(item.type), 1),
                createTextVNode(),
                createVNode("span", { class: "text" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h2></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="links-img"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="img"${ssrRenderAttr("id", `tab-${item.id}`)}><img${ssrRenderAttr("src", item.image)} alt=""></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/InteractiveCenterHorizontal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=InteractiveCenterHorizontal-fa4f94b6.mjs.map
