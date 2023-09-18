import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const filters = [
  {
    id: 1,
    title: "All",
    filter: "*",
    count: "08"
  },
  {
    id: 2,
    title: "Branding",
    filter: ".brand",
    count: "03"
  },
  {
    id: 3,
    title: "Mobile App",
    filter: ".app",
    count: "02"
  },
  {
    id: 4,
    title: "Creative",
    filter: ".web",
    count: "03"
  }
];
const gallery = [
  {
    id: 1,
    filter: "web",
    image: "/dark/assets/imgs/works/grid/1.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
    width: "3",
    height: "1"
  },
  {
    id: 2,
    filter: "app",
    image: "/dark/assets/imgs/works/grid/10.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
    width: "3",
    height: "2"
  },
  {
    id: 3,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid/3.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
    width: "6",
    height: "1"
  },
  {
    id: 4,
    filter: "web",
    image: "/dark/assets/imgs/works/grid/4.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
    width: "3",
    height: "2"
  },
  {
    id: 5,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid/5.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
    width: "6",
    height: "1"
  },
  {
    id: 6,
    filter: "app",
    image: "/dark/assets/imgs/works/grid/6.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
    width: "6",
    height: "2"
  },
  {
    id: 7,
    filter: "web",
    image: "/dark/assets/imgs/works/grid/7.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
    width: "3",
    height: "2"
  },
  {
    id: 8,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid/8.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
    width: "3",
    height: "2"
  }
];
const data = {
  filters,
  gallery
};
const _sfc_main = {
  __name: "Metro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio section-padding pb-100" }, _attrs))}><div class="container-xxl"><div class="row"><div class="filtering col-12 mb-80 text-center"><div class="filter"><span class="text">Filter By :</span><!--[-->`);
      ssrRenderList(unref(data).filters, (item, index) => {
        _push(`<span${ssrRenderAttr("data-filter", item.filter)} class="${ssrRenderClass(index === 0 ? "active" : "")}"${ssrRenderAttr("data-count", item.count)}>${ssrInterpolate(item.title)}</span>`);
      });
      _push(`<!--]--></div></div></div><div class="gallery metro text-center"><div class="row"><!--[-->`);
      ssrRenderList(unref(data).gallery, (item) => {
        _push(`<div class="${ssrRenderClass(`col-lg-${item.width} col-md-6 items ${item.filter} info-overlay height-${item.height} mb-30`)}"><div class="item-img o-hidden">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/project-details1",
          class: "imago wow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="inner wow"${_scopeId}><img${ssrRenderAttr("src", item.image)} alt="image"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "inner wow" }, [
                  createVNode("img", {
                    src: item.image,
                    alt: "image"
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="info"><h6>`);
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
        _push(`</h6><span class="sub-title tag">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/project-details1" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\xA9 ${ssrInterpolate(item.year)} <br${_scopeId}> ${ssrInterpolate(item.type)}`);
            } else {
              return [
                createTextVNode("\xA9 " + toDisplayString(item.year) + " ", 1),
                createVNode("br"),
                createTextVNode(" " + toDisplayString(item.type), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</span></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/Metro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Metro-e3d92abe.mjs.map
