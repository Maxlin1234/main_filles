import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, onUnmounted } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { _ as _imports_0$1 } from './sq1-e08776a9.mjs';
import { _ as _imports_1$1 } from './sq2-ad2949fc.mjs';
import { _ as _export_sfc, b as useState } from '../server.mjs';
import { _ as _sfc_main$d } from './ModalVideo-2460fa41.mjs';
import { _ as _imports_1$2 } from './1-645454db.mjs';
import { d as data$3 } from './app-data-475c97b4.mjs';
import { i as isInView } from './isInView-318b554b.mjs';

const _sfc_main$c = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "slider slider-prlx o-hidden" }, _attrs))}><div class="lines two"></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Header.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$c;
const data$2 = [
  {
    id: 1,
    image: "assets/imgs/serv-icons/0.png",
    category: "Product Design",
    title: "Digital Product Design",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 2,
    image: "assets/imgs/serv-icons/1.png",
    category: "Customs Services",
    title: "Branding & Design",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 3,
    image: "assets/imgs/serv-icons/2.png",
    category: "Product Development",
    title: "Web Development",
    text: "Creating a higher spacing and how people move through a unique."
  }
];
const _sfc_main$b = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-box section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl colorbg-3 mb-10">Featured Services</h6><h2 class="fz-60 fw-700">Our Services</h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="text"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$2), (item) => {
        _push(`<div class="col-lg-4"><div class="serv-item md-mb50 radius-5"><div class="icon-img-50 mb-40">`);
        if (__props.lightMode) {
          _push(`<img${ssrRenderAttr("src", `/light/${item.image}`)} alt="">`);
        } else {
          _push(`<img${ssrRenderAttr("src", `/dark/${item.image}`)} alt="">`);
        }
        _push(`</div><span class="mb-10 opacity-7">${ssrInterpolate(item.category)}</span><h6 class="mb-15">${ssrInterpolate(item.title)}</h6><p class="fz-14">${ssrInterpolate(item.text)}</p><div class="underline">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/page-services",
          class: "mt-30 ls1 fz-12 text-u"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Read More <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode("Read More "),
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Services.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$b;
const _sfc_main$a = {
  __name: "About",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-corp section-padding sub-bg" }, _attrs))}><div class="container"><div class="row lg-marg"><div class="col-lg-6 md-mb50"><div class="imgs mb-80"><div class="img1 main-color3"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="img2"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div></div><div class="col-lg-6 valign"><div class="cont"><h6 class="sub-title mb-15">About our good good Company</h6><h3 class="mb-15"> Watch the creative process behind our <span class="stroke fw-700 opacity-7">digital marketing</span>. </h3><p>We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike \u2013 putting passion.</p><div class="mt-50 pt-30 bord-thin-top"><div class="row"><div class="col-md-6"><ul class="rest list-arrow"><li class="mt-20"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"${ssrRenderAttr("fill", __props.lightMode ? "#000" : "#fff")}></path></svg></span><span>Marketing Strategy</span></li><li class="mt-20"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"${ssrRenderAttr("fill", __props.lightMode ? "#000" : "#fff")}></path></svg></span><span>Rebranding</span></li></ul></div><div class="col-md-6"><ul class="rest list-arrow"><li class="mt-20"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"${ssrRenderAttr("fill", __props.lightMode ? "#000" : "#fff")}></path></svg></span><span>Unique Production</span></li><li class="mt-20"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"${ssrRenderAttr("fill", __props.lightMode ? "#000" : "#fff")}></path></svg></span><span>Corporate Identity</span></li></ul></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-about",
        class: "butn butn-md butn-bord radius-30 mt-50"
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
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/About.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$a;
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-marq main-colorbg3" }, _attrs))}><div class="container-fluid rest pt-20 pb-20"><div class="row"><div class="col-12"><div class="main-marq dark-text"><div class="slide-har st1"><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Marq.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);
const data$1 = [
  {
    id: 1,
    number: "01",
    title: "Elegant Lamp",
    image: "/dark/assets/imgs/portfolio/3/1.jpg",
    details: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    marqText: "Red Package"
  },
  {
    id: 2,
    number: "02",
    title: "Wall Lamp",
    image: "/dark/assets/imgs/portfolio/3/2.jpg",
    details: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    marqText: "Wall Lamp"
  },
  {
    id: 3,
    number: "03",
    title: "Wall Lamp",
    image: "/dark/assets/imgs/portfolio/3/3.jpg",
    details: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    marqText: "Elegant Stoves"
  }
];
const _sfc_main$8 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl colorbg-3 mb-10">Selected Projects</h6><h2 class="fz-60 fw-700">Featured Works</h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="text"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div></div></div></div><div class="work-row"><!--[-->`);
      ssrRenderList(unref(data$1), (item, index) => {
        _push(`<div class="${ssrRenderClass(`item bord-thin-top ${index === unref(data$1).length - 1 ? "bord-thin-bottom" : ""}`)}"><div class="row"><div class="col-lg-3 d-flex align-items-end"><div class="title"><span class="numb">${ssrInterpolate(item.number)}.</span><h5>${ssrInterpolate(item.title)}</h5></div></div><div class="col-lg-4"><div class="img md-mb30"><img${ssrRenderAttr("src", item.image)} alt=""></div></div><div class="col-lg-5 d-flex align-items-end"><div class="cont"><p>${ssrInterpolate(item.text)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/project-details1",
          class: "mt-30 ls1 sub-title"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Project <i class="ml-5"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></i>`);
            } else {
              return [
                createTextVNode(" View Project "),
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
        _push(`</div></div></div><div class="main-marq xlrg"><div class="slide-har st1 strok"><div class="box"><!--[-->`);
        ssrRenderList(new Array(5).fill(), (_, i) => {
          _push(`<div class="item"><h4>${ssrInterpolate(item.marqText)}</h4></div>`);
        });
        _push(`<!--]--></div><div class="box"><!--[-->`);
        ssrRenderList(new Array(5).fill(), (_, i) => {
          _push(`<div class="item"><h4>${ssrInterpolate(item.marqText)}</h4></div>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Portfolio.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "Numbers",
  __ssrInlineRender: true,
  props: ["paddingTop"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `numbers section-padding ${__props.paddingTop ? "" : "pt-0"}`
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-3 col-md-6"><div class="item md-mb50"><h2 class="fw-800 stroke">16</h2><h6>Years of Experience</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item md-mb50"><h2 class="fw-800">4<span class="fz-80 fw-600">k</span></h2><h6>Projects Complated</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item sm-mb50"><h2 class="fw-800 stroke">9<span class="fz-80 fw-600">k</span></h2><h6>Happy Customers</h6></div></div><div class="col-lg-3 col-md-6 d-flex"><div class="item ml-auto"><h2 class="fw-800">12</h2><h6>Awards Winning</h6></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Numbers.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `testim-crv2 sub-bg position-re ${__props.lightMode ? "light" : ""}`
      }, _attrs))}><div class="container section-padding position-re"><div class="row"><div class="col-lg-6 offset-lg-6"><div class="testim-swiper mt-80">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="swiper-controls testim-controls arrow-out d-flex mt-50"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"${ssrRenderAttr("fill", __props.lightMode ? "#000" : "#fff")}></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"${ssrRenderAttr("fill", __props.lightMode ? "#000" : "#fff")}></path></svg></span></div></div></div></div><div class="half-img-left bg-img ontop md-hide" data-background="/dark/assets/imgs/testim/01.png"></div></div><div class="bg-pattern bg-repeat bg-img opacity-1" data-background="/dark/assets/imgs/patterns/dots.png"></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Testimonials.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "Video",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    const isOpen = useState("isOpen", () => false);
    function closeVideo() {
      isOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonModalVideo = _sfc_main$d;
      _push(`<!--[--><div class="row lg-marg"><div class="col-lg-7 valign"><div class="clients md-mb50"><div class="mb-20"><h6 class="sub-title mb-15">Check Out All</h6><h3>Successful Our Reputation</h3></div><div class="row"><div class="col-md-4 col-6"><div class="item mt-30 wow fadeIn" data-wow-delay=".6s"><div class="img"><a${ssrRenderAttr("href", unref(data$3).author_link)}><img${ssrRenderAttr("src", `${__props.lightMode ? "/light" : "/dark"}/assets/imgs/brands/01.png`)} alt=""></a></div></div></div><div class="col-md-4 col-6"><div class="item mt-30 wow fadeIn" data-wow-delay=".6s"><div class="img"><a${ssrRenderAttr("href", unref(data$3).author_link)}><img${ssrRenderAttr("src", `${__props.lightMode ? "/light" : "/dark"}/assets/imgs/brands/02.png`)} alt=""></a></div></div></div><div class="col-md-4 col-6"><div class="item mt-30 wow fadeIn" data-wow-delay=".8s"><div class="img"><a${ssrRenderAttr("href", unref(data$3).author_link)}><img${ssrRenderAttr("src", `${__props.lightMode ? "/light" : "/dark"}/assets/imgs/brands/03.png`)} alt=""></a></div></div></div><div class="col-md-4 col-6"><div class="item mt-30 wow fadeIn" data-wow-delay=".3s"><div class="img"><a${ssrRenderAttr("href", unref(data$3).author_link)}><img${ssrRenderAttr("src", `${__props.lightMode ? "/light" : "/dark"}/assets/imgs/brands/04.png`)} alt=""></a></div></div></div><div class="col-md-4 col-6"><div class="item mt-30 wow fadeIn" data-wow-delay=".4s"><div class="img"><a${ssrRenderAttr("href", unref(data$3).author_link)}><img${ssrRenderAttr("src", `${__props.lightMode ? "/light" : "/dark"}/assets/imgs/brands/05.png`)} alt=""></a></div></div></div><div class="col-md-4 col-6"><div class="item mt-30 wow fadeIn" data-wow-delay=".7s"><div class="img"><a${ssrRenderAttr("href", unref(data$3).author_link)}><img${ssrRenderAttr("src", `${__props.lightMode ? "/light" : "/dark"}/assets/imgs/brands/06.png`)} alt=""></a></div></div></div></div></div></div><div class="col-lg-5"><div class="img-vid"><img${ssrRenderAttr("src", _imports_1$2)} alt=""><div class="rota-vid"><a href="https://youtu.be/AzwC6umvd1s" class="vid"><div class="circle-button in-bord"><div class="rotate-circle fz-30 text-u"><svg class="textcircle" viewBox="0 0 500 500"><defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs><text><textPath xlinkHref="#textcircle" textLength="900">Explore More - Explore More -</textPath></text></svg></div><div class="arrow text-dark"><i class="fas fa-play"></i></div></div></a></div></div></div></div>`);
      _push(ssrRenderComponent(_component_CommonModalVideo, {
        channel: "youtube",
        videoId: "AzwC6umvd1s",
        isOpen: unref(isOpen),
        onClose: closeVideo
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Block/Video.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/serv-icons/0.png");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/serv-icons/1.png");
const _sfc_main$4 = {
  __name: "Values",
  __ssrInlineRender: true,
  setup(__props) {
    function handleShowProgressValues() {
      isInView({
        selector: ".skill-progress .progres",
        isElements: true,
        callback: (element) => {
          element.style.width = element.getAttribute("data-value");
        }
      });
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleShowProgressValues);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row lg-marg mt-80" }, _attrs))}><div class="col-lg-6 valign"><div class="md-mb50"><div class="item-flex d-flex align-items-center mb-50"><div><div class="icon-img-60"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="cont ml-50"><h6>High Standerd</h6><p class="fz-15">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div></div><div class="item-flex d-flex align-items-center"><div><div class="icon-img-60"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="cont ml-50"><h6>Ease of Communication</h6><p class="fz-15">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div></div></div><div class="col-lg-6"><div class="cont"><h6 class="sub-title mb-15">Our Value</h6><h3 class="mb-15">Watch the creative process behind our <span class="stroke fw-700 opacity-7">digital marketing</span>.</h3><div class="skills mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="fz-14 mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="fz-14 mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Block/Values.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "block-sec section-padding" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), { lightMode: __props.lightMode }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Block/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pricing section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl colorbg-3 mb-10">Featured Services</h6><h2 class="fz-60 fw-700">Our Services</h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="text"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div></div></div></div><div class="row md-marg"><div class="col-lg-4"><div class="item main-bg position-re o-hidden md-mb50"><div class="info-box pb-30 bord-thin-bottom mb-30"><h6 class="sub-title mb-15">Basic Plan</h6><div class="amount"><div><span class="main-color3 num-font fw-600 fz-50">$19</span> <span class="fz-14 fw-400">/ Mounth</span></div></div><p class="fz-13">10% taxes will include after make price.</p></div><ul class="rest"><li>10 Hours of task work</li><li>1 User included</li><li>Advertising</li><li>Web developments</li><li>24 / 7 Support</li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-contact",
        class: "butn butn-md butn-bord mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Get Started</span><i class="ml-5"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></i>`);
          } else {
            return [
              createVNode("span", null, "Get Started"),
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
        _: 1
      }, _parent));
      _push(`<div class="bg-pattern bg-img opacity-1" data-background="/dark/assets/imgs/patterns/1.svg"></div></div></div><div class="col-lg-4"><div class="item main-bg position-re o-hidden md-mb50"><div class="info-box pb-30 bord-thin-bottom mb-30"><h6 class="sub-title mb-15">Basic Plan</h6><div class="amount"><div><span class="main-color3 num-font fw-600 fz-50">$49</span> <span class="fz-14 fw-400">/ Mounth</span></div></div><p class="fz-13">10% taxes will include after make price.</p></div><ul class="rest"><li>10 Hours of task work</li><li>1 User included</li><li>Advertising</li><li>Web developments</li><li>24 / 7 Support</li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-contact",
        class: "butn butn-md butn-bg main-colorbg3 text-dark mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Get Started</span><i class="ml-5"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></i>`);
          } else {
            return [
              createVNode("span", null, "Get Started"),
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
        _: 1
      }, _parent));
      _push(`<div class="bg-pattern bg-img opacity-3" data-background="/dark/assets/imgs/patterns/abstact-BG.png"></div></div></div><div class="col-lg-4"><div class="item main-bg position-re o-hidden"><div class="info-box pb-30 bord-thin-bottom mb-30"><h6 class="sub-title mb-15">Basic Plan</h6><div class="amount"><div><span class="main-color3 num-font fw-600 fz-50">$79</span> <span class="fz-14 fw-400">/ Mounth</span></div></div><p class="fz-13">10% taxes will include after make price.</p></div><ul class="rest"><li>10 Hours of task work</li><li>1 User included</li><li>Advertising</li><li>Web developments</li><li>24 / 7 Support</li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-contact",
        class: "butn butn-md butn-bord mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Get Started</span><i class="ml-5"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></i>`);
          } else {
            return [
              createVNode("span", null, "Get Started"),
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
        _: 1
      }, _parent));
      _push(`<div class="bg-pattern bg-img opacity-1" data-background="/dark/assets/imgs/patterns/1.svg"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Pricing.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main$2;
const data = [
  {
    id: 1,
    title: "Creative advertising in our life became a info noise",
    cover: "/dark/assets/imgs/blog/b1.jpg",
    author: "Admin",
    date: "august 6, 2021"
  },
  {
    id: 3,
    title: "We create some things for your success in future growth",
    cover: "/dark/assets/imgs/blog/b3.jpg",
    author: "Admin",
    date: "august 6, 2021"
  },
  {
    id: 2,
    title: "Creative advertising in our life became a info noise",
    cover: "/dark/assets/imgs/blog/b2.jpg",
    author: "Admin",
    date: "august 6, 2021"
  }
];
const _sfc_main$1 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-crev section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl colorbg-3 mb-10">Our Blogs</h6><h2 class="fz-60 fw-700">Latest News</h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all wow fadeIn">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/dark/blog-classic" }, {
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
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="col-lg-4"><div class="${ssrRenderClass(`item ${index !== unref(data).length - 1 ? "md-mb50" : ""}`)}"><div class="cont"><h6>`);
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
        _push(`</h6><div class="info mt-20 mb-20 pt-20 bord-thin-top"><span class="by">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-classic" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="far fa-user fz-14 mr-10"${_scopeId}></i> By ${ssrInterpolate(item.author)}`);
            } else {
              return [
                createVNode("i", { class: "far fa-user fz-14 mr-10" }),
                createTextVNode(" By " + toDisplayString(item.author), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</span><span class="dot main-colorbg3"></span><span class="date">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-details" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="far fa-calendar-alt fz-14 mr-10"${_scopeId}></i>${ssrInterpolate(item.date)}`);
            } else {
              return [
                createVNode("i", { class: "far fa-calendar-alt fz-14 mr-10" }),
                createTextVNode(toDisplayString(item.date), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</span></div></div><div class="img"><img${ssrRenderAttr("src", item.cover)} alt="">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/blog-details",
          class: "main-colorbg3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg>`);
            } else {
              return [
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = _sfc_main$1;
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sub-bg" }, _attrs))}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="call-box text-center mb-80"><h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/page-contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Let&#39;s <span class="stroke"${_scopeId}> Discuss</span>`);
          } else {
            return [
              createTextVNode("Let's "),
              createVNode("span", { class: "stroke" }, " Discuss")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="arrow main-color3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span></h2></div><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>Address</h6></div><div class="text"><p>Germany \u2014 785 15h Street, Office 478 Berlin, De 81566</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>Say Hello</h6></div><div class="text"><p class="mb-10"><a href="#0">hello@design.com</a></p><h5><a href="#">+1 840 841 25 69</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>Social</h6></div><ul class="rest social-text"><li><a href="#0">Facebook</a></li><li><a href="#0">Twitter</a></li><li><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"><h6>Newsletter</h6></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top ontop"><div class="container"><div class="row"><div class="col-lg-4"><div class="logo"><a href="#"><img${ssrRenderAttr("src", `/dark/assets/imgs/logo-${__props.lightMode ? "dark" : "light"}.png`)} alt=""></a></div></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13">\xA9 2023 Geekfolio is Proudly Powered by <span class="underline"><a${ssrRenderAttr("href", unref(data$3).author_link)} target="_blank">${ssrInterpolate(unref(data$3).author)}</a></span></p></div></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Corporate/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_12 = _sfc_main;

export { __nuxt_component_2 as _, __nuxt_component_3 as a, __nuxt_component_4 as b, __nuxt_component_5 as c, __nuxt_component_6 as d, __nuxt_component_7 as e, __nuxt_component_8 as f, __nuxt_component_9 as g, __nuxt_component_10 as h, __nuxt_component_11 as i, __nuxt_component_12 as j };
//# sourceMappingURL=Footer-b69072a0.mjs.map
