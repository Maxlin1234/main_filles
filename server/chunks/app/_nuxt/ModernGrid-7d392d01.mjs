import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const data = [
  {
    id: 1,
    image: "/dark/assets/imgs/portfolio/2/1.jpg",
    year: "2023",
    type: "Branding",
    style: {
      width: 5,
      isFullWidth: false,
      mb: 80
    }
  },
  {
    id: 2,
    image: "/dark/assets/imgs/portfolio/2/3.jpg",
    year: "2023",
    type: "Branding",
    style: {
      width: 6,
      align: "valign",
      isFullWidth: true,
      mt: 80,
      innerCol: "8"
    }
  },
  {
    id: 3,
    image: "/dark/assets/imgs/portfolio/2/2.jpg",
    year: "2023",
    type: "Branding",
    style: {
      width: 6,
      align: "valign",
      isFullWidth: true,
      mt: 80,
      innerCol: "9"
    }
  },
  {
    id: 4,
    image: "/dark/assets/imgs/portfolio/2/4.jpg",
    year: "2023",
    type: "Branding",
    style: {
      width: 6,
      isFullWidth: false,
      mt: 80,
      innerCol: "9"
    }
  },
  {
    id: 5,
    image: "/dark/assets/imgs/portfolio/2/5.jpg",
    year: "2023",
    type: "Branding",
    style: {
      width: 6,
      isFullWidth: false,
      mt: 80,
      innerCol: "9"
    }
  },
  {
    id: 6,
    image: "/dark/assets/imgs/portfolio/2/6.jpg",
    year: "2023",
    type: "Branding",
    style: {
      width: 6,
      align: "valign",
      isFullWidth: true,
      mt: 80,
      innerCol: "9"
    }
  }
];
const _sfc_main = {
  __name: "ModernGrid",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="${ssrRenderClass(`col-lg-${item.style.width} ${item.style.align ? item.style.align : ""}`)}"><div class="${ssrRenderClass(`item md-mb80 ${item.style.isFullWidth ? "full-width" : ""} ${item.style.mt ? "mt-" + item.style.mt : ""} ${item.style.mb ? "mb-" + item.style.mb : ""}`)}">`);
        if (item.style.innerCol) {
          _push(`<div class="row justify-content-center"><div class="${ssrRenderClass(`col-lg-${item.style.innerCol}`)}"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/project-details2" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`From our gallery`);
              } else {
                return [
                  createTextVNode("From our gallery")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h6><p>${ssrInterpolate(item.type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(item.year)}</p></div></div></div></div>`);
        } else {
          _push(`<!--[--><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/project-details2" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`From our gallery`);
              } else {
                return [
                  createTextVNode("From our gallery")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h6><p>${ssrInterpolate(item.type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(item.year)}</p></div></div><!--]-->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/ModernGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=ModernGrid-7d392d01.mjs.map
