import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const data = [
  {
    id: 1,
    date: "\u4E00\u822C\u516C\u544A",
    title: "FUTURE VISION LAB 2023 \u958B\u653E\u5FB5\u4EF6",
    image: "/dark/assets/imgs/blog/h1.jpg"
  },
  {
    id: 2,
    date: "\u4E00\u822C\u516C\u544A",
    title: "\u300CFUTURE VISION LAB 2023\u5BE6\u9A57\u5C55\u6F14\u8A08\u756B\u300D\u516C\u958B\u5FB5\u4EF6\u7D50\u679C\u516C\u544A",
    image: "/dark/assets/imgs/blog/h2.jpg"
  },
  {
    id: 3,
    date: "\u4E00\u822C\u516C\u544A",
    title: "\u300CFUTURE VISION LAB 2023\u5BE6\u9A57\u5C55\u6F14\u8A08\u756B\u300D\u516C\u958B\u5FB5\u4EF6\u7D50\u679C\u516C\u544A",
    image: "/dark/assets/imgs/blog/h3.jpg"
  },
  {
    id: 4,
    date: "\u4E00\u822C\u516C\u544A",
    title: "\u300CFUTURE VISION LAB 2023\u5BE6\u9A57\u5C55\u6F14\u8A08\u756B\u300D\u516C\u958B\u5FB5\u4EF6\u7D50\u679C\u516C\u544A",
    image: "/dark/assets/imgs/blog/h4.jpg"
  },
  {
    id: 5,
    date: "\u4E00\u822C\u516C\u544A",
    title: "FUTURE VISION LAB 2023 \u958B\u653E\u5FB5\u4EF6",
    image: "/dark/assets/imgs/blog/h5.jpg"
  },
  {
    id: 6,
    date: "\u4E00\u822C\u516C\u544A",
    title: "FUTURE VISION LAB 2023 \u958B\u653E\u5FB5\u4EF6",
    image: "/dark/assets/imgs/blog/h6.jpg"
  }
];
const _sfc_main = {
  __name: "Classic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-modern section-padding sub-bg" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="col-lg-4 col-md-6"><div class="${ssrRenderClass(`item ${index !== unref(data).length - 1 ? "mb-50" : ""}`)}"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""><div class="date">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-details" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.date)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.date), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div><div class="cont mt-30"><h6>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-details" }, {
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
        _push(`</h6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/blog-details",
          class: "mt-20 ls1 sub-title"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Read More <i class="ml-5"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></i>`);
            } else {
              return [
                createTextVNode("Read More "),
                createVNode("i", { class: "ml-5" }, [
                  (openBlock(), createBlock("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                      fill: "currentColor"
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Classic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Classic-1075e540.mjs.map
