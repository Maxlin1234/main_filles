import { L as Link } from './components-bd5aef6c.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ServicesTab",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = Link;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-tab section-padding" }, _attrs))}><div class="container"><div class="row" id="tabs"><div class="col-lg-6 order2"><div class="serv-tab-cont mb-80"><div class="tab-content current" id="tabs-1"><div class="item"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/serv/1.jpg`)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/0.png`)} alt=""></div><div class="text"><p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p></div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/dark/page-services",
        class: "mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-15"${_scopeId}>Read More</span><i class="fas fa-long-arrow-alt-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "mr-15" }, "Read More"),
              createVNode("i", { class: "fas fa-long-arrow-alt-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="tab-content" id="tabs-2"><div class="item"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/serv/2.jpg`)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/1.png`)} alt=""></div><div class="text"><p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p></div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/dark/page-services",
        class: "mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-15"${_scopeId}>Read More</span><i class="fas fa-long-arrow-alt-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "mr-15" }, "Read More"),
              createVNode("i", { class: "fas fa-long-arrow-alt-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="tab-content" id="tabs-3"><div class="item"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/serv/3.jpg`)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/2.png`)} alt=""></div><div class="text"><p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p></div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/dark/page-services",
        class: "mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-15"${_scopeId}>Read More</span><i class="fas fa-long-arrow-alt-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "mr-15" }, "Read More"),
              createVNode("i", { class: "fas fa-long-arrow-alt-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="tab-content" id="tabs-4"><div class="item"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/serv/1.jpg`)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/0.png`)} alt=""></div><div class="text"><p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-services",
        class: "mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-15"${_scopeId}>Read More</span><i class="fas fa-long-arrow-alt-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "mr-15" }, "Read More"),
              createVNode("i", { class: "fas fa-long-arrow-alt-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="col-lg-5 offset-lg-1 valign order1"><div class="serv-tab-link tab-links full-width md-mb50"><div class="sec-lg-head mb-80"><h6 class="dot-titl-non mb-15">Services</h6><p>We help you to go online and increase your conversion rate Better design for your digital products. </p></div><ul class="rest"><li class="item-link current mb-15" data-tab="tabs-1"><span>01</span> UI/UX Design</li><li class="item-link mb-15" data-tab="tabs-2"><span>02</span> Branding</li><li class="item-link mb-15" data-tab="tabs-3"><span>03</span> Development</li><li class="item-link" data-tab="tabs-4"><span>04</span> Marketing</li></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/ServicesTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main;

export { __nuxt_component_4 as _ };
//# sourceMappingURL=ServicesTab-227ade59.mjs.map
