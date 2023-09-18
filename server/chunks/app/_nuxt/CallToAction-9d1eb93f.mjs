import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { _ as _imports_0$1 } from './circle-star-379b5691.mjs';

const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "proj-header1" }, _attrs))}><div class="container mb-50"><div class="row"><div class="col-lg-6"><div class="caption md-mb50"><h2>\u79FB\u52D5\u6545\u4E8B\u5C4B\u300A\u6708\u7403\u5EA6\u5047\u6751\u300B</h2></div></div><div class="col-lg-6 d-flex justify-content-end align-items-end"><div class="info row"><div class="col-sm-6"><div class="item mb-30"><h6 class="fz-16">\u5206\u985E</h6><span class="sub-title ls1">\u300CTAICCA Spotlight\u300D\u55AE\u5143</span></div></div><div class="col-sm-6"><div class="item mb-30"><h6 class="fz-16">\u6642\u9593</h6><span class="sub-title ls1">09.22(\u4E94) ____ 10.01(\u65E5) <br> 2023 .</span></div></div><div class="col-sm-6"><div class="item mb-30"><h6 class="fz-16">Date</h6><span class="sub-title ls1">August 6, 2020</span></div></div><div class="col-sm-6"><div class="item mb-30"><h6 class="fz-16">\u5730\u9EDE</h6><span class="sub-title ls1">\u6771\u8349\u576A</span></div></div></div></div></div></div><div class="bg-img" data-background="/dark/assets/imgs/works/projects/1/1.jpg"></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/ProjectDetails/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/works/projects/1/2.jpg");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/works/projects/1/3.jpg");
const _imports_2 = "" + publicAssetsURL("dark/assets/imgs/works/projects/1/4.jpg");
const _sfc_main$1 = {
  __name: "Content",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="text"><h3>\u64AD\u6620\u4F5C\u54C1\u7C21\u4ECB</h3></div></div><div class="col-lg-7 offset-lg-1"><div class="text"><p class="mb-50">\u795E\u5947\u52D5\u7269\u7814\u7A76\u6240\u56DE\u4F86\u4E86\uFF01\u7D50\u5408\u4E2D\u79CB\u7BC0\u3001\u4E16\u754C\u5404\u5730\u6708\u4EAE\u5143\u7D20\u7684\u89AA\u5B50\u5287\u76EE\uFF0C\u4E2D\u79CB\u9650\u5B9A\u6F14\u51FA\uFF1A\u6708\u7403\u5EA6\u5047\u6751\u3002<br>\u4E0D\u60F3\u4E2D\u79CB\u9023\u5047\u52A0\u73ED\u7684\u8C93\u8C93\u8CB7\u4E86\u53BB\u6708\u7403\u5EA6\u5047\u6751\u7684\u7968\u9001\u7D66\u535A\u58EB\uFF0C\u5E0C\u671B\u535A\u58EB\u98DB\u5F97\u8D8A\u9060\u8D8A\u597D\uFF0C\u6C92\u60F3\u5230\u53CD\u5012\u88AB\u535A\u58EB\u9080\u8ACB\u4E00\u540C\u524D\u5F80\u300C\u6708\u7403\u5EA6\u5047\u6751\u300D\uFF01 \u5728\u524D\u5F80\u5EA6\u5047\u6751\u7684\u80E1\u863F\u8514\u592A\u7A7A\u68AD\u4E0A\uFF0C\u7389\u5154\u822A\u7A7A\u7684\u7A7A\u670D\u54E1\u5011\u7D30\u5FC3\u5730\u4ECB\u7D39\u6708\u7403\u5EA6\u5047\u6751\u6CE8\u610F\u4E8B\u9805\u4E26\u56DE\u7B54\u5927\u5BB6\u7684\u7591\u554F\u3002\u5728\u7F8E\u9E97\u7684\u6708\u7403\u4E0A\u5206\u6563\u8457\u4E0D\u540C\u7684\u5EA6\u5047\u5340\u57DF\u63D0\u4F9B\u4E0D\u540C\u9700\u6C42\u7684\u65C5\u5BA2\uFF0C\u8F1D\u591C\u59EC\u3001\u5AE6\u5A25\u3001\u963F\u63D0\u7C73\u65AF\u4F86\u81EA\u4E0D\u540C\u6587\u5316\u7684\u6708\u4EAE\u50B3\u8AAA\u90FD\u6709\u5404\u81EA\u6709\u8DA3\u4E14\u597D\u73A9\u7684\u5EA6\u5047\u8A2D\u65BD\u3002 \u773E\u4EBA\u5728\u4EAB\u53D7\u5EA6\u5047\u6751\u5947\u7279\u7684\u9AD4\u9A57\u5F8C\u9010\u6F38\u767C\u73FE\u2026\u6708\u7403\u4E0A\u597D\u50CF\u6709\u8457\u5947\u602A\u7684\u4E8B\u60C5\u2026\u4E0D\u6642\u9583\u720D\u7684\u9ED1\u5F71\u662F\u4EC0\u9EBC\uFF1F\u5169\u4EBA\u6700\u5BB3\u6015\u7684\u6771\u897F\u90FD\u4E00\u4E00\u88AB\u5BE6\u9AD4\u5316\uFF1F\uFF01\u7389\u5154\u5011\u4E0D\u6642\u5462\u5583\u7684\u300C\u6708\u4EAE\u5E36\u7D66\u4F60\u529B\u91CF\u300D\u53C8\u662F\u4EC0\u9EBD\u610F\u601D\u5462\uFF1F</p><div class="row"><div class="col-md-6"></div><div class="col-md-6"></div></div></div></div></div><div class="row md-marg mt-50"><div class="col-lg-4"><div class="img mb-50"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-4"><div class="img mb-50"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="col-lg-4"><div class="img mb-50"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div><div class="back-image bg-img parallaxie" data-background="/dark/assets/imgs/works/projects/1/5.jpg"></div> s <div class="row justify-content-center"><div class="col-lg-8"><div class="text-center mt-50"><h5 class="fw-200">\u8B1D\u723E\u84CB\xB7\u666E\u7F85\u79D1\u83F2\u8036\u592B\uFF08Sergey Prokofyev\uFF09\uFF0C\u4F86\u81EA\u5EFA\u7BC9\u5DE5\u7A0B\u9818\u57DF\uFF0C\u73FE\u70BA\u5FB7\u570B Studio Schwitalla \u5EFA\u7BC9\u5E2B\u517C.</h5></div></div></div><div class="row mt-100"><div class="col-lg-4"><div class="img md-mb50"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="col-lg-7 offset-lg-1 valign"><div class="text"><h6 class="fw-200">Frances Adair McKenzie, THE ORCHID AND THE BEE<br> \u5927\u81EA\u7136\u662F\u5947\u5999\u800C\u8070\u660E\u7684\u3002\u6B63\u5982\u9054\u723E\u6587\u6559\u5C0E\u7684\uFF0C\u80FD\u6709\u6548\u5730\u5373\u8208\u767C\u63EE\u624D\u80FD\u81F4\u52DD\u3002 \u6709\u4E9B\u7269\u7A2E\u5728\u53D7\u5230\u5A01\u8105\u6642\uFF0C\u6703\u6062\u5FA9\u5230\u65E9\u671F\u7684\u5F62\u614B\uFF0C\u6709\u4E9B\u7269\u7A2E\u5247\u6703\u8207\u9130\u8FD1\u7684\u751F\u7269\u5EFA\u7ACB\u5BC4\u751F\u95DC\u4FC2\uFF0C\u800C\u6700\u5177\u5275\u9020\u529B\u7684\u7269\u7A2E\u6703\u6539\u8B8A\u81EA\u5DF1\u7684\u8EAB\u9AD4\u4F86\u6A21\u4EFF\u548C\u5F15\u8A98\u6BEB\u7121\u6212\u5FC3\u7684\u5925\u4F34\u3002\u300A\u862D\u82B1\u8207\u871C\u8702\u300B\u662F\u4E00\u9996\u8868\u73FE\u4E3B\u7FA9\u7684 VR \u980C\u8A5E\uFF0C\u900F\u904E\u4E00\u7CFB\u5217\u57FA\u56E0\u611B\u60C5\u6545\u4E8B\u9032\u884C\u63A2\u7D22\uFF0C\u6B4C\u980C\u751F\u547D\u70BA\u4E86\u751F\u5B58\u7684\u640F\u9B25\u7CBE\u795E\u3002</h6><ul class="rest list-arrow mt-50"><li><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-18">Amazing communication.</h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-18">Best trendinf designing experience.</h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-18">Email &amp; Live chat.</h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-18">Amazing communication.</h6></li></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/ProjectDetails/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "CallToAction",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "call-action-img" }, _attrs))}><div class="container"><div class="sec-bg-img bg-img parallaxie" data-background="/dark/assets/imgs/works/projects/2/1.jpg"></div><div class="sec-lg-head section-padding"><div class="row ontop"><div class="col-11 d-flex align-items-center"><div><h6 class="sub-title">Next Project</h6><h2 class="fz-50 d-rotate wow"><div class="rotate-text">Sinzere The Mission.</div></h2></div><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/project-details2",
        class: "butn-circle d-flex align-items-center text-center m-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="full-width"${_scopeId}><span${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span><span class="full-width"${_scopeId}>Next Project</span></div><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="circle-star"${_scopeId}>`);
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
                src: _imports_0$1,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/ProjectDetails/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b };
//# sourceMappingURL=CallToAction-9d1eb93f.mjs.map
