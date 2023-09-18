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
    title: "TAICCA Spotlight",
    filter: ".brand",
    count: "03"
  },
  {
    id: 3,
    title: "\u5FB5\u4EF6\u4F5C\u54C1",
    filter: ".app",
    count: "02"
  },
  {
    id: 4,
    title: "SET Fest",
    filter: ".web",
    count: "03"
  },
  {
    id: 5,
    title: "\u7B56\u5283\u9080\u8ACB",
    filter: ".invite",
    count: "03"
  }
];
const gallery = [
  {
    id: 1,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid2/1.jpg",
    type: "TAICCA Spotlight",
    year: "2023",
    title: "\u25C9 \u79FB\u52D5\u6545\u4E8B\u5C4B\u300A\u6708\u7403\u5EA6\u5047\u6751\u300B\u25C9 "
  },
  {
    id: 2,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid2/2.jpg",
    type: "TAICCA Spotlight",
    year: "2023",
    title: "\u25C9 \u5922\u60F3\u52D5\u756B\u300A\u690D\u7269\u60C5\u4EBA\u300B\u25C9 "
  },
  {
    id: 3,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid2/3.jpg",
    type: "TAICCA Spotlight",
    year: "2023",
    title: "\u25C9 \u8B1D\u6587\u6BC5\u300A\u5F7C\u5CB8 in DOME\u300B\u25C9 "
  },
  {
    id: 4,
    filter: "brand",
    image: "/dark/assets/imgs/works/grid2/4.jpg",
    type: "TAICCA Spotlight",
    year: "2023",
    title: "\u25C9 \u8E8D\u754C\u65B0\u5A92\u9AD4 \u300A\u5F9E\u5FC3\u58A8\u97FB\u300B\u25C9 "
  },
  {
    id: 5,
    filter: "app",
    image: "/dark/assets/imgs/works/grid2/5.jpg",
    type: "\u5FB5\u4EF6\u4F5C\u54C1",
    year: "2023",
    title: "\u25C9 Jeremy Oury\u300AEXO CORTEX 2.0\u300B\u25C9"
  },
  {
    id: 6,
    filter: "app",
    image: "/dark/assets/imgs/works/grid2/6.jpg",
    type: "\u5FB5\u4EF6\u4F5C\u54C1",
    year: "2023",
    title: "\u25C9 \u5433\u79C9\u8056\u300A\u9748\u9B42\u7684\u526F\u7FFC\uFF1A\u7A79\u4E18\u300B\u25C9"
  },
  {
    id: 7,
    filter: "app",
    image: "/dark/assets/imgs/works/grid2/7.jpg",
    type: "\u5FB5\u4EF6\u4F5C\u54C1",
    year: "2023",
    title: "\u25C9 Yan Breuleux\u300AMati\xE8re Premi\xE8re/Raw Materia\u300B\u25C9"
  },
  {
    id: 8,
    filter: "web",
    image: "/dark/assets/imgs/works/grid2/8.jpg",
    type: "SAT Fest",
    year: "2023",
    title: "\u25C9 \u8B1D\u723E\u84CB\u30FB\u666E\u7F85\u79D1\u83F2\u8036\u592B\u300A\u8FF7\u5BAE\u300B\uFF08\u5FB7\u570B\uFF09\u25C9 "
  },
  {
    id: 9,
    filter: "web",
    image: "/dark/assets/imgs/works/grid2/9.jpg",
    type: "SAT Fest",
    year: "2023",
    title: "\u25C9 \u5F17\u6717\u897F\u65AF\u30FB\u963F\u4EE3\u723E\u30FB\u9EA5\u80AF\u932B\u300A\u862D\u82B1\u8207\u871C\u8702\u300B\uFF08\u52A0\u62FF\u5927\uFF09\u25C9"
  },
  {
    id: 10,
    filter: "web",
    image: "/dark/assets/imgs/works/grid2/10.jpg",
    type: "SAT Fest",
    year: "2023",
    title: "\u25C9 \u99AC\u723E\u6ED5\u30FB\u827E\u85A9\u514B\u30FB\u5FB7\u5E0C\u723E\u300A\u8702\u6E67\u300B (\u5FB7\u570B) \u25C9"
  },
  {
    id: 11,
    filter: "web",
    image: "/dark/assets/imgs/works/grid2/11.jpg",
    type: "SAT Fest",
    year: "2023",
    title: "\u25C9 \u5927\u885B\u30FB\u52A0\u5FB7\u7D0D\u300A\u5976\u5976\u7684\u623F\u5B50\u300B\uFF08\u52A0\u62FF\u5927\uFF09\u25C9 "
  },
  {
    id: 12,
    filter: "web",
    image: "/dark/assets/imgs/works/grid2/12.jpg",
    type: "SAT Fest",
    year: "2023",
    title: "\u25C9 \u5F35\u5473\u8FEA\u3001\u6208\u7DAD\u7490\u3001\u8607\u5C11\u79B9\u300A\u661F\u969B\u300B\uFF08\u7F8E\u570B\uFF09\u25C9  "
  },
  {
    id: 13,
    filter: "web",
    image: "/dark/assets/imgs/works/grid2/13.jpg",
    type: "SAT Fest",
    year: "2023",
    title: "\u25C9 \u585E\u5DF4\u65AF\u8482\u5B89\u30FB\u62C9\u5E03\u5C3C\u3001\u514B\u840A\u9580\u30FB\u666E\u7279\u6D85\u300A\u98A8\u4FE1\u5B50 XYZ\u300B\uFF08\u6CD5\u570B\uFF09\u25C9"
  },
  {
    id: 14,
    filter: "web",
    image: "/dark/assets/imgs/works/grid2/14.jpg",
    type: "SAT Fest",
    year: "2023",
    title: "\u25C9 \u8389\u8FEA\u4E9E\u30FB\u96C5\u79D1\u8AFE\u592B\u65AF\u57FA\u300A\u5C0E\u8AD6\uFF1A\u8A08\u91CF\u7D93\u6FDF\u5B78\u300B\uFF08\u52A0\u62FF\u5927\uFF09\u25C9 "
  },
  {
    id: 15,
    filter: "invite",
    image: "/dark/assets/imgs/works/grid2/15.jpg",
    type: "\u7B56\u5283\u9080\u8ACB",
    year: "2023",
    title: "\u25C9 \u7396\u683C\u8A2D\u8A08\u300A\u7E41\u300B\u25C9"
  },
  {
    id: 16,
    filter: "invite",
    image: "/dark/assets/imgs/works/grid2/16.jpg",
    type: "\u7B56\u5283\u9080\u8ACB",
    year: "2023",
    title: "\u25C9 NANONANO\u300Anarrative of landscape\u300B\u25C9"
  },
  {
    id: 17,
    filter: "invite",
    image: "/dark/assets/imgs/works/grid2/17.jpg",
    type: "\u7B56\u5283\u9080\u8ACB",
    year: "2023",
    title: "\u25C9 XTRUX x \u665FSHENG\u300A\u89C0\u300B\u25C9"
  },
  {
    id: 18,
    filter: "invite",
    image: "/dark/assets/imgs/works/grid2/18.jpg",
    type: "\u7B56\u5283\u9080\u8ACB",
    year: "2023",
    title: "\u25C9 \u9B4F\u5EF7\u5B87\u300A\u6C89\u6D78\u5834\u57DF\u4F5C\u54C1\u7CBE\u9078\uFF1A20-23\u300B\u25C9"
  },
  {
    id: 19,
    filter: "invite",
    image: "/dark/assets/imgs/works/grid2/19.jpg",
    type: "\u7B56\u5283\u9080\u8ACB",
    year: "2023",
    title: "\u25C9 \u838A\u79BE\u300A\u591C\u904A 2023\u300B\u25C9"
  },
  {
    id: 20,
    filter: "invite",
    image: "/dark/assets/imgs/works/grid2/20.jpg",
    type: "\u7B56\u5283\u9080\u8ACB",
    year: "2023",
    title: "\u25C9 \u9EC3\u5049\uFF38\u912D\u9053\u5143\u300AINNERSTAR 01 : Reddening\u300B\u25C9"
  },
  {
    id: 21,
    filter: "invite",
    image: "/dark/assets/imgs/works/grid2/21.jpg",
    type: "\u7B56\u5283\u9080\u8ACB",
    year: "2023",
    title: "\u25C9 \u8521\u5947\u5B8F\u300A\u5C01\u5305\u5C0D\u649E\u6A5F\u300B\u25C9"
  }
];
const data = {
  filters,
  gallery
};
const _sfc_main = {
  __name: "2Col",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio section-padding pb-40" }, _attrs))}><div class="container-xxl"><div class="row"><div class="filtering col-12 mb-80 text-center"><div class="filter"><span class="text">Filter By :</span><!--[-->`);
      ssrRenderList(unref(data).filters, (item, index) => {
        _push(`<span${ssrRenderAttr("data-filter", item.filter)} class="${ssrRenderClass(index === 0 ? "active" : "")}"${ssrRenderAttr("data-count", item.count)}>${ssrInterpolate(item.title)}</span>`);
      });
      _push(`<!--]--></div></div></div><div class="gallery"><div class="row grid max-margin"><!--[-->`);
      ssrRenderList(unref(data).gallery, (item) => {
        _push(`<div class="${ssrRenderClass(`col-md-6 items ${item.filter} info-overlay mb-80`)}"><div class="item-img o-hidden">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/ClassicGrid/2Col.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=2Col-3d077510.mjs.map
