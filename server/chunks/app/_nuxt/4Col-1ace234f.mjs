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
    image: "/dark/assets/imgs/works/grid2/1.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design"
  },
  {
    id: 2,
    filter: "app",
    image: "/dark/assets/imgs/works/grid2/v1.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design"
  },
  {
    id: 3,
    filter: "web",
    image: "/dark/assets/imgs/works/grid2/2.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design"
  },
  {
    id: 4,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid2/v2.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design"
  },
  {
    id: 5,
    filter: "app",
    image: "/dark/assets/imgs/works/grid2/v3.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design"
  },
  {
    id: 6,
    filter: "app",
    image: "/dark/assets/imgs/works/grid2/v4.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design"
  },
  {
    id: 7,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid2/5.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design"
  },
  {
    id: 8,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid2/4.jpg",
    type: "Design ART",
    year: "2023",
    title: "Character Design"
  }
];
const data = {
  filters,
  gallery
};
const _sfc_main = {
  __name: "4Col",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio section-padding pb-40" }, _attrs))}><div class="container-fluid"><div class="row"><div class="filtering col-12 mb-80 text-center"><div class="filter"><span class="text">Filter By :</span><!--[-->`);
      ssrRenderList(unref(data).filters, (item, index) => {
        _push(`<span${ssrRenderAttr("data-filter", item.filter)} class="${ssrRenderClass(index === 0 ? "active" : "")}"${ssrRenderAttr("data-count", item.count)}>${ssrInterpolate(item.title)}</span>`);
      });
      _push(`<!--]--></div></div></div><div class="gallery"><div class="row masonry"><!--[-->`);
      ssrRenderList(unref(data).gallery, (item) => {
        _push(`<div class="${ssrRenderClass(`col-lg-3 col-md-6 items ${item.filter} info-overlay mb-50`)}"><div class="item-img o-hidden">`);
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
        _push(`<div class="info"><span class="mb-15"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span><h6 class="sub-title tag">`);
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
        _push(`</h6><h5>`);
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
        _push(`</h5></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/Masonry/4Col.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=4Col-1ace234f.mjs.map
