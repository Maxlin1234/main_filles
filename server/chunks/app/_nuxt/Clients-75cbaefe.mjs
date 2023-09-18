import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { d as data$1 } from './app-data-475c97b4.mjs';

const _sfc_main$2 = {
  __name: "Story",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pg-about section-padding sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/sq1.jpg"></div></div><div class="col-lg-8"><div class="bg-img radius-10" data-background="/dark/assets/imgs/about/sq2.jpg"></div></div><div class="col-lg-4"><div class="sec-head mt-80"><h6 class="sub-title">FUTURE VISION LAB 2023</h6></div></div><div class="col-lg-8"><div class="cont mt-80"><h5>\u81FA\u7063\u7576\u4EE3\u6587\u5316\u5BE6\u9A57\u5834\uFF08C-LAB\uFF09\u81EA 2020 \u5E74\u6B63\u5F0F\u555F\u52D5\u300C\u79D1\u6280\u5A92\u9AD4\u5BE6\u9A57\u5E73\u53F0\u300D\uFF0C\u8457\u91CD\u65BC\u5A92\u9AD4\u5BE6\u9A57\u5275\u65B0\u8207\u793E\u6703\u93C8\u7D50\uFF0C\u4EE5\u8DE8\u57DF\u3001\u5171\u5275\u3001\u5354\u4F5C\u65B9\u5F0F\uFF0C\u6253\u9020\u6587\u5316\u8207\u79D1\u6280\u7684\u5BE6\u9A57\u5E73\u53F0\u3002 \u6574\u5408\u81FA\u7063\u6587\u5316\u8207\u79D1\u6280\u7684\u8CC7\u6E90\uFF0C\u5A92\u5408\u6587\u5316\u8207\u79D1\u6280\u9818\u57DF\u5171\u5275\uFF0C\u5176\u4E2D\u300C\u672A\u4F86\u8996\u89BA\u5BE6\u9A57\u5BA4\u300D\u63A2\u7D22\u79D1\u6280\u5A92\u9AD4\u7684\u8996\u89BA\u6975\u9650\u70BA\u5BE6\u9A57\u76EE\u6A19\uFF0C\u4EE5\u81FA\u7063\u5149\u96FB\u6280\u8853\u8207\u7522\u696D\u70BA\u57FA\u790E\uFF0C\u8F14\u4EE5\u5F71\u50CF\u7684\u904B\u7B97\u3001\u5275\u4F5C\u8207\u8EDF\u786C\u9AD4\u6574\u5408\uFF0C\u4F01\u5716\u52FE\u52D2\u51FA\u672A\u4F86\u8996\u89BA\u7684\u8DE8\u57DF\u9858\u666F\u3002<br><br> \u81EA\u8A08\u756B\u958B\u5275\uFF0C\u79D1\u6280\u5A92\u9AD4\u5BE6\u9A57\u5E73\u53F0\u4FBF\u6301\u7E8C\u63A8\u52D5\u5BE6\u9A57\u5C55\u6F14\u8A08\u756B\u300CFUTURE VISION LAB\u300D\uFF0C\u4EE5\u6578\u4F4D\u5BE6\u9A57\u5EFA\u7BC9\u8457\u624B\u6253\u9020 DOME \u578B\u614B\u5834\u57DF\uFF0C\u57F9\u80B2\u8DE8\u57DF\u5BE6\u9A57\u4EBA\u624D\uFF0C\u6253\u9020\u570B\u5167\u5E74\u8F15\u5275\u4F5C\u8005\u5C55\u6F14\u5167\u5BB9\u5275\u9020\u529B\u7684\u821E\u53F0\uFF0C\u540C\u6B65\u5F15\u4ECB\u570B\u5916\u7CBE\u5F69\u4F5C\u54C1\u3002 \u672C\u5C55\u6F14\u8A08\u756B\u4EE5\u63A2\u7D22\u79D1\u6280\u5A92\u9AD4\u7684\u8996\u89BA\u6975\u9650\u70BA\u76EE\u6A19\uFF0C\u5176\u958B\u767C\u6D89\u53CA\u7403\u5F62\u66F2\u9762\u6295\u5F71\u7684\u6821\u6B63\u3001\u878D\u63A5\u3001\u5C0D\u4F4D\u3001\u64AD\u653E\u63A7\u5236\u8207\u5F71\u50CF\u524D\u88FD\u7B49\u591A\u9805\u8907\u96DC\u6280\u8853\uFF0C\u904E\u53BB\u4E09\u5E74\u5DF2\u9032\u884C\u8FD1\u767E\u4EF6\u4F5C\u54C1\u5C55\u6F14\u3002<br><br> \u300CFUTURE VISION LAB 2023\u300D\u5BE6\u9A57\u5C55\u6F14\u8A08\u756B\uFF0C\u4ECA\u5E74\u7A81\u7834\u904E\u5F80\u5C3A\u5EA6\uFF0C\u958B\u555F\u300CDOME 2.0\u300D\u5347\u7D1A\u8A08\u756B\uFF0C\u91CD\u65B0\u6253\u9020\u5347\u7D1A\u7248\u7684\u6236\u5916\u7A79\u9802\u5287\u5834\uFF08DOME\uFF09\uFF0C\u5EF6\u7E8C\u591A\u5143\u53CA\u5BE6\u9A57\u7CBE\u795E\uFF0C\u4EE5\u6578\u4F4D\u5EFA\u7BC9\u767C\u5C55\u66F4\u5177\u6F14\u7B97\u7279\u8272\u4E4B\u5916\u578B\uFF0C\u5C3A\u5BF8\u7A81\u7834\u904E\u5F80\u76F4\u5F91 12 \u516C\u5C3A\u4E4B\u5C3A\u5EA6\uFF0C \u91CD\u65B0\u7814\u767C\u6253\u9020\u76F4\u5F91 15\u516C\u5C3A\u79FB\u52D5\u5F0F\u6236\u5916\u7A79\u9802\u5287\u5834\u53CA\u66F4\u5305\u8986\u5F0F\u8072\u5834\u914D\u7F6E\uFF0C\u4E26\u7814\u767C\u65B0\u578B\u614B\u6295\u5F71\u819C\u7247\u53CA\u8D85\u9AD8\u89E3\u6790\u6C89\u6D78\u5F71\u50CF\u74B0\u5883\uFF0C\u7E3D\u904B\u7B97\u89E3\u6790\u9054 22 K\uFF0C\u6253\u9020\u63A5\u8ECC\u570B\u969B\u898F\u683C\u7684\u5275\u4F5C\u74B0\u5883\uFF0C\u8B93\u89C0\u773E\u5168\u5929\u5019\u4EAB\u53D7\u66F4\u9AD8\u54C1\u8CEA\u7684\u6C89\u6D78\u5F0F\u611F\u5B98\u5167\u5BB9\uFF0C\u611F\u53D7\u81FA\u7063\u7684\u5275\u9020\u529B\u3002<br><br> \u300CFUTURE VISION LAB 2023\u300D\u65BC\u81FA\u7063\u6587\u535A\u6703\u5C55\u671F\u7D50\u675F\u5F8C\uFF0C\u5C07\u91CD\u65B0\u898F\u5283\u7B2C\u4E8C\u968E\u6BB5\u7684\u5C55\u6F14\uFF0C\u5C55\u671F\u70BA 10 \u6708 14 \u65E5\u81F3 12 \u6708 24 \u65E5\uFF0C\u5167\u5BB9\u9664\u6587\u535A\u6703\u671F\u9593\u5C55\u51FA\u4E4B\u7BC0\u76EE\u5167\u5BB9\uFF0C \u66F4\u5C07\u65B0\u589E\u6276\u690D\u57F9\u80B2\u5275\u4F5C\u8005\u53C3\u8207\u7684\u5BE6\u9A57\u8A08\u756B\uFF0C\u4F5C\u54C1\u7CBE\u5F69\u53EF\u671F\uFF0C\u7BC0\u76EE\u5167\u5BB9\u5C07\u65BC\u6587\u535A\u6703\u5C55\u671F\u5F8C\u516C\u5E03\uFF0C\u656C\u8ACB\u671F\u5F85\u3002 </h5></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/About/Story.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-corp section-padding pt-0" }, _attrs))}><div class="container"><div class="row justify-content-around"></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/About/Intro.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const data = [
  "/assets/imgs/brands/01.png",
  "/assets/imgs/brands/02.png",
  "/assets/imgs/brands/03.png",
  "/assets/imgs/brands/04.png",
  "/assets/imgs/brands/05.png",
  "/assets/imgs/brands/03.png"
];
const _sfc_main = {
  __name: "Clients",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "clients section-padding pb-100 position-re" }, _attrs))}><div class="container"><div class="row justify-content-center mb-80"><div class="col-lg-6 text-center"><div class="text"><h3>We create experiences and turn ideas into reality.</h3></div></div></div></div><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="row md-marg"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-md-4 col-6 brand box-bg"><div class="item mb-30 wow fadeIn" data-wow-delay=".6s"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}${item}`)} alt=""></div><a${ssrRenderAttr("href", unref(data$1).author_link)} class="link" data-splitting> www.GeekFolio.com </a></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="bg-pattern patrn1 bg-img opacity-5"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/pattern.svg`)}></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/About/Clients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main;

export { __nuxt_component_2 as _, __nuxt_component_4 as a, __nuxt_component_7 as b };
//# sourceMappingURL=Clients-75cbaefe.mjs.map
