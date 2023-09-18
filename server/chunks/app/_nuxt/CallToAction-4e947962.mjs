import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { _ as _imports_0 } from './circle-star-379b5691.mjs';

const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "proj-header2 bg-img valign parallaxie",
        "data-background": "/dark/assets/imgs/works/projects/2/1.jpg",
        "data-overlay-dark": "5"
      }, _attrs))}><div class="container mt-80"><div class="row justify-content-center"><div class="col-lg-8"><div class="caption text-center"><h1>Sinzere The Mission</h1><h6 class="sub-title">Digital Marketing</h6></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/ProjectDetails2/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8"><div class="cont"><h3 class="mb-15">About the Project.</h3><p>Won\u2019t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.</p><div class="info d-flex mt-50"><div class="item mr-50"><h6 class="fz-16">Category</h6><span class="sub-title ls1">Digital Design</span></div><div class="item mr-50"><h6 class="fz-16">Customer</h6><span class="sub-title ls1">ThemesCamp</span></div><div class="item"><h6 class="fz-16">Date</h6><span class="sub-title ls1">August 6, 2020</span></div></div></div></div></div></div><div class="back-image bg-img parallaxie mt-100" data-background="/dark/assets/imgs/works/projects/2/2.jpg"></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/ProjectDetails2/About.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Content",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding pt-0" }, _attrs))}><div class="container-fluid rest"><div class="swiper4">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div><div class="container mt-100"><div class="row justify-content-center"><div class="col-lg-8"><div class="text-center"><h5 class="fw-300"> Visual hierarchy is the principle of arranging elements to show their order of importance. Designers structure visual characteristics\u2014e.g., menu icons\u2014so users can understand information easily. By laying out elements logically and strategically, designers influence users\u2019 perceptions and guide them to desired actions. Users notice larger elements more easily can convert. </h5></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/ProjectDetails2/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "CallToAction",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "call-action-img" }, _attrs))}><div class="container"><div class="sec-bg-img bg-img parallaxie" data-background="/dark/assets/imgs/works/projects/1/1.jpg"></div><div class="sec-lg-head section-padding"><div class="row ontop"><div class="col-11 d-flex align-items-center"><div><h6 class="sub-title">Next Project</h6><h2 class="fz-50 d-rotate wow"><span class="rotate-text">Luxury Glassware.</span></h2></div><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/project-details1",
        class: "butn-circle d-flex align-items-center text-center m-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="full-width"${_scopeId}><span${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span><span class="full-width"${_scopeId}>Next Project</span></div><img${ssrRenderAttr("src", _imports_0)} alt="" class="circle-star"${_scopeId}>`);
          } else {
            return [
              createVNode("div", { class: "full-width" }, [
                createVNode("span", null, [
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
                ]),
                createVNode("span", { class: "full-width" }, "Next Project")
              ]),
              createVNode("img", {
                src: _imports_0,
                alt: "",
                class: "circle-star"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/ProjectDetails2/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main;

export { __nuxt_component_2 as _, __nuxt_component_3 as a, __nuxt_component_4 as b, __nuxt_component_5 as c };
//# sourceMappingURL=CallToAction-4e947962.mjs.map
