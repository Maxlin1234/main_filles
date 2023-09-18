import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, unref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$a } from './StatementSplitter-e87ceb66.mjs';
import { _ as _export_sfc, b as useState } from '../server.mjs';
import { _ as _sfc_main$b } from './ModalVideo-2460fa41.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-29ef7f45.mjs';
import { d as data$2 } from './app-data-475c97b4.mjs';

const _sfc_main$9 = {
  __name: "Header",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-digital full-height valign bord-thin-bottom" }, _attrs))}><div class="container ontop"><div class="row"><div class="col-lg-6"><div class="caption"><h1>Better design for your digital products.</h1><div class="text mt-30"><p>We are a creative studio specializing in UI/UX design, <br> development and strategy.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-services",
        class: "butn butn-md butn-bg main-colorbg2 text-dark radius-30 mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Explore More</span>`);
          } else {
            return [
              createVNode("span", null, "Explore More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="half-img-right bg-img ontop md-hide"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/header1.png`)}></div><div class="bg-pattern bg-img"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/graph.png`)}></div></header>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$9;
const data$1 = [
  {
    id: 1,
    image: "assets/imgs/serv-icons/0.png",
    title: "Brand Strategy & <BR> Art Direction",
    features: [
      "User friendly interface",
      "Nothing distracts from work",
      "Easy to start chatting"
    ]
  },
  {
    id: 3,
    image: "assets/imgs/serv-icons/1.png",
    title: "UX/UI Design & <BR> Website/App Design",
    features: [
      "User friendly interface",
      "Nothing distracts from work",
      "Easy to start chatting"
    ]
  },
  {
    id: 2,
    image: "assets/imgs/serv-icons/2.png",
    title: "Engage your <BR> customers dramatically.",
    features: [
      "User friendly interface",
      "Nothing distracts from work",
      "Easy to start chatting"
    ]
  }
];
const _sfc_main$8 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-6"><h6 class="dot-titl-non mb-15">Features</h6><h3 class="d-slideup wow"><span class="sideup-text"><span class="up-text">We help you to go online &amp;</span></span><span class="sideup-text"><span class="up-text">increase your conversion rate.</span></span></h3></div><div class="col-lg-6 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/page-services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All Services <span${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span>`);
          } else {
            return [
              createTextVNode("View All Services "),
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$1), (item, index) => {
        _push(`<div class="col-lg-4"><div class="${ssrRenderClass(`item-bord2 radius-10 wow fadeIn ${index !== unref(data$1).length - 1 ? "md-mb50" : ""}`)}" data-wow-delay=".5s"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", `${__props.lightMode ? "/light/" : "/dark/"}${item.image}`)} alt=""></div><h6 class="mb-30">`);
        _push(ssrRenderComponent(unref(_sfc_main$a), {
          statement: item.title
        }, null, _parent));
        _push(`</h6><ul class="check-list rest opacity-8"><!--[-->`);
        ssrRenderList(item.features, (feature, idx) => {
          _push(`<li class="mb-10"><span class="fz-12 mr-5"><i class="fas fa-check"></i></span> ${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Services.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "Block",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    const isOpen = useState("isOpen", () => false);
    function closeVideo() {
      isOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="block-img sub-bg"><div class="container section-padding position-re"><div class="half-img-left bg-img md-hide"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/a1.svg`)}></div><div class="row justify-content-around"><div class="col-lg-5 offset-lg-6"><div class="cont"><div class="vid-circle main-bg mb-40"><a href="https://youtu.be/AzwC6umvd1s" class="vid"><span class="icon"><svg class="default" width="13" height="20" viewBox="0 0 13 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20L13 10L0 0V20Z"></path></svg></span></a></div><div class="text"><h3>We grow brands through bold &amp; strategic creative</h3></div><div class="accordion bord mt-40"><div class="item mb-15 wow fadeInUp" data-wow-delay=".1s"><div class="title"><h6 class="fz-18">Website &amp; Mobile App Design</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div><div class="item mb-15 active wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6 class="fz-18">Motion Graphics &amp; Animation</h6><span class="ico"></span></div><div class="accordion-info active"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6 class="fz-18">User Experience</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div></div></div></div></div></div><div class="shap1 opacity-4"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/shap1.png`)} alt=""></div><div class="shap2 opacity-4"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/shap2.png`)} alt=""></div></section>`);
      _push(ssrRenderComponent(unref(_sfc_main$b), {
        channel: "youtube",
        videoId: "AzwC6umvd1s",
        isOpen: unref(isOpen),
        onClose: closeVideo
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Block.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-carsouel section-padding position-re o-hidden" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-6"><h6 class="dot-titl-non mb-15">Portfolio</h6><h3>Recent Projects.</h3></div><div class="col-lg-6 d-flex align-items-center"><div class="full-width"><div class="d-flex justify-content-end justify-end"><div class="swiper-controls arrow-out d-flex"><div class="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div><div class="swiper-button-next ml-50" tabIndex="0" role="button" aria-label="Next slide"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div></div></div></div></div></div></div></div><div class="container-fluid rest"><div class="row"><div class="col-12"><div class="work-crus work-crus3 out">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Portfolio.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$6;
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "price-hr" }, _attrs))}><div class="container section-padding pt-20 bord-thin-bottom"><div class="row"><div class="col-lg-5 valign"><div class="cont full-width md-mb50"><div><h6 class="sub-title mb-15">Over 150.000+ Clients</h6><h3>Affordable pricing. <br> Easy scaling.</h3><div class="text mt-30 pt-30 bord-thin-top"><p>Things go wrong have questions. We\u2019ve understand. So we have people</p></div><ul class="rest list-arrow mt-30"><li><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-18">Amazing communication.</h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-18">Best trendinf designing experience.</h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-18">Email &amp; Live chat.</h6></li></ul></div></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="full-width"><div class="item sub-bg radius-10 d-flex mb-30"><div class="type"><h5 class="fw-600">Advanced</h5><h6 class="fz-14">14 days free</h6></div><div class="cont ml-30"><ul class="dot-list rest"><li class="mb-10">Guarenteed quality control</li><li class="mb-10">Top quality service</li><li>Best experts at your lease</li></ul></div><div class="mount ml-auto text-center"><h3><span class="fz-20">$</span> 19</h3><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dark/page-contact",
    class: "butn butn-md butn-bord radius-30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="fz-13"${_scopeId}>Sign Up</span>`);
      } else {
        return [
          createVNode("span", { class: "fz-13" }, "Sign Up")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="item main-colorbg2 radius-10 text-dark d-flex"><div class="type"><h5 class="fw-600">Enterprise</h5><h6 class="fz-14">7 days free</h6></div><div class="cont ml-30"><ul class="dot-list rest"><li class="mb-10">Guarenteed quality control</li><li class="mb-10">Top quality service</li><li>Best experts at your lease</li></ul></div><div class="mount ml-auto text-center"><h3><span class="fz-20">$</span> 49</h3><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dark/page-contact",
    class: "butn butn-md butn-bord text-dark radius-30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="fz-13"${_scopeId}>Sign Up</span>`);
      } else {
        return [
          createVNode("span", { class: "fz-13" }, "Sign Up")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Price.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "Clients",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "clients-carso section-padding pt-0" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-9"><div class="text-center mb-80"><h6 class="fz-14 fw-400"> More than <span class="fw-600">200+ companies</span> trusted us worldwide </h6></div></div></div><div class="swiper5"><div id="content-carousel-container-unq-clients" class="swiper-container" data-swiper="container">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Clients.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Approach",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "approach-carso section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row justify-content-center"><div class="col-lg-6 text-center"><h6 class="dot-titl-non mb-15">Approach</h6><h3>Our Approach.</h3></div></div></div><div class="swiper4">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Approach.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "CallToAction",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "call-action-center section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-10"><div class="sec-lg-head text-center"><h2 class="fz-70 fw-700"><span>Have a project in mind?</span> <br><span class="underline">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-contact",
        class: "main-color2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Let\u2019s get to work.`);
          } else {
            return [
              createTextVNode("Let\u2019s get to work.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></h2></div></div></div></div><div class="bg-pattern bg-img"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/graph.png`)}></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/CallToAction.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = _sfc_main$2;
const data = [
  {
    id: 1,
    title: "Free advertising for your online business.",
    image: "/dark/assets/imgs/sass-img/blog/1.jpg",
    date: "August 6, 2022",
    tags: [
      "Marketing",
      "Design"
    ]
  },
  {
    id: 2,
    title: "Business meeting 2023 in San Francisco.",
    image: "/dark/assets/imgs/sass-img/blog/2.jpg",
    date: "August 6, 2022",
    tags: [
      "Marketing",
      "Design"
    ]
  }
];
const _sfc_main$1 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-6"><h6 class="dot-titl-non mb-15">Our Blog</h6><h3>Latest News.</h3></div><div class="col-lg-6 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-list" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All Our News <span${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span>`);
          } else {
            return [
              createTextVNode("View All Our News "),
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-lg-6"><div class="item md-mb50"><div class="row"><div class="col-lg-6 col-md-5 img"><img${ssrRenderAttr("src", item.image)} alt=""></div><div class="col-lg-6 col-md-7 sub-bg cont valign"><div class="full-width"><span class="date fz-12 ls1 text-u opacity-7 mb-15">${ssrInterpolate(item.date)}</span><h5>`);
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
        _push(`</h5><div class="tags mt-15"><!--[-->`);
        ssrRenderList(item.tags, (tag, i) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dark/blog-list",
            class: "me-1",
            key: tag
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tag)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(tag), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = _sfc_main$1;
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "pt-80 sub-bg" }, _attrs))}><div class="container pb-80"><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>Address</h6></div><div class="text"><p>Germany \u2014 785 15h Street, Office 478 Berlin, De 81566</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>Say Hello</h6></div><div class="text"><p class="mb-10"><a href="#0">hello@design.com</a></p><h5><a href="#" class="main-color2">+1 840 841 25 69</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>Social</h6></div><ul class="rest social-text"><li><a href="#0">Facebook</a></li><li><a href="#0">Twitter</a></li><li><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"><h6>Newsletter</h6></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top"><div class="container"><div class="row"><div class="col-lg-4"><div class="logo"><a href="#0"><img${ssrRenderAttr("src", `/dark/assets/imgs/logo-${__props.lightMode ? "dark" : "light"}.png`)} alt=""></a></div></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13"> \xA9 2023 Geekfolio is Proudly Powered by <span class="underline"><a${ssrRenderAttr("href", unref(data$2).author_link)} target="_blank">${ssrInterpolate(unref(data$2).author)}</a></span></p></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_13 = _sfc_main;

export { __nuxt_component_2 as _, __nuxt_component_3 as a, __nuxt_component_4 as b, __nuxt_component_5 as c, __nuxt_component_6 as d, __nuxt_component_8 as e, __nuxt_component_10 as f, __nuxt_component_11 as g, __nuxt_component_12 as h, __nuxt_component_13 as i };
//# sourceMappingURL=Footer-fb7c5975.mjs.map
