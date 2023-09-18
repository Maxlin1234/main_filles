import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, onUnmounted, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, unref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$3 } from './logo-light-8117e658.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { _ as _imports_0$4 } from './circle-star-379b5691.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$b } from './StatementSplitter-e87ceb66.mjs';
import { _ as __nuxt_component_0$2 } from './client-only-29ef7f45.mjs';
import { d as data$3 } from './app-data-475c97b4.mjs';

const _imports_0$2 = "" + publicAssetsURL("dark/assets/imgs/logo-dark.png");
const _sfc_main$a = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    function handleScroll() {
      const bodyScroll = window.scrollY;
      const navbar = document.querySelector(".navbar");
      if (bodyScroll > 300)
        navbar.classList.add("nav-scroll");
      else
        navbar.classList.remove("nav-scroll");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg static main-bg" }, _attrs))}><div class="container"><a class="logo icon-img-100" href="#">`);
      if (__props.lightMode) {
        _push(`<img${ssrRenderAttr("src", _imports_0$2)} alt="logo">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0$3)} alt="logo">`);
      }
      _push(`</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="0"><span class="rolling-text">Home</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="1"><span class="rolling-text">Services</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="2"><span class="rolling-text">About</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="3"><span class="rolling-text">Portfolio</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="4"><span class="rolling-text">Resume</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="6"><span class="rolling-text">Blog</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="7"><span class="rolling-text">Contact</span></a></li></ul></div><div class="search-form"><div class="form-group"><input type="text" name="search" placeholder="Search"><button><span class="pe-7s-search"></span></button></div><div class="search-icon"><span class="pe-7s-search open-search"></span><span class="pe-7s-close close-search"></span></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Navbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$a;
const _imports_0$1 = "" + publicAssetsURL("dark/assets/imgs/svg-assets/hi.png");
const _sfc_main$9 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header-freelancer full-height bord-thin-bottom valign position-re",
        "data-overlay-dark": "5",
        "data-scroll-index": "0"
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-7"><div class="caption"><h6 class="fw-400 mb-15"> Hello <span class="icon-img-30"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></span> , I&#39;m Chadwick Boseman.</h6><h1 class="fz-60">A Visual Designer Specializing in UI &amp; UX</h1><div class="row mt-50"><div class="col-lg-3 cal-act order2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/portfolio-classic-grid",
        class: "butn-circle d-flex align-items-center text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="full-width"${_scopeId}><span${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span><span class="full-width"${_scopeId}>View Works</span></div><img${ssrRenderAttr("src", _imports_0$4)} alt="" class="circle-star"${_scopeId}>`);
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
                createVNode("span", { class: "full-width" }, "View Works")
              ]),
              createVNode("img", {
                src: _imports_0$4,
                alt: "",
                class: "circle-star"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-lg-8 offset-lg-1 valign order1 md-mb50"><p class="fz-16">We appreciate your trust greatly our clients choose us &amp; our products because they know we are the best.</p></div></div></div></div></div></div><div class="bg-img" data-background="/dark/assets/imgs/freelancer/h2.png"></div></header>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$9;
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-marq bord-thin-bottom" }, _attrs))}><div class="container-fluid ontop sub-bg rest pt-20 pb-20"><div class="row"><div class="col-12"><div class="main-marq light-text"><div class="slide-har st1"><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Marq.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const data$2 = [
  {
    id: 1,
    image: "assets/imgs/serv-icons/0.png",
    title: "Brand Strategy & <BR> Art Direction",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 2,
    image: "assets/imgs/serv-icons/1.png",
    title: "UX/UI Design & <BR> Website/App Design",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 3,
    image: "assets/imgs/serv-icons/0.png",
    title: "Brand Strategy & <BR> Art Direction",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 4,
    image: "assets/imgs/serv-icons/1.png",
    title: "UX/UI Design & <BR> Website/App Design",
    text: "Creating a higher spacing and how people move through a unique."
  }
];
const _sfc_main$7 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "serv-box section-padding",
        "data-scroll-index": "1"
      }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-7"><div class="position-re"><h6 class="dot-titl-non mb-10">Featured Services</h6><h2 class="fz-50">Our Services</h2></div></div><div class="col-lg-5 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all">`);
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
      ssrRenderList(unref(data$2), (item, index) => {
        _push(`<div class="col-lg-6"><div class="${ssrRenderClass(`serv-item d-flex ${index !== unref(data$2).length - 1 ? "mb-30" : ""} radius-10`)}"><div class="icon-img-80"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/${item.image}`)} alt=""></div><div class="ml-60"><h5 class="mb-15">`);
        _push(ssrRenderComponent(unref(_sfc_main$b), {
          statement: item.title
        }, null, _parent));
        _push(`</h5><p>${ssrInterpolate(item.text)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Services.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$7;
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/freelancer/h2.png");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/svg-assets/star-shape.png");
const _sfc_main$6 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    onUnmounted(() => {
      document.removeEventListener("mousemove", updateParallax);
    });
    function updateParallax(event) {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      const parallaxTargets = document.querySelectorAll(".parallax");
      parallaxTargets.forEach((target) => {
        let speed = target.dataset.speed;
        let x = (window.innerWidth / 2 - mouseX) * speed;
        let y = (window.innerHeight / 2 - mouseY) * speed;
        target.style.transform = `translate3d(${x / 10}rem, ${y / 10}rem, 0)`;
      });
      requestAnimationFrame(updateParallax);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "intro-img-parlx section-padding pb-0 sub-bg",
        "data-scroll-index": "2"
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-5 valign md-hide"><h2 class="max-text" data-text=" Creative UI - UX Designer."> Creative UI - UX Designer.</h2></div><div class="col-lg-3 order2"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt="" class="parallax" data-speed="0.01"><span class="star-shape"><img${ssrRenderAttr("src", _imports_1)} alt="" class="parallax" data-speed="-0.01"></span></div></div><div class="col-lg-3 valign order1"><div class="text-qoute"><span class="exp mb-30 main-bg">7+ Years Experience</span><p>I&#39;m Creative Independent Web Developer, and I&#39;m very passionate and dedicated to my work, Using year-over-year design approaches and the latest technologies.</p><div class="stauts mt-50"><div class="item d-flex align-items-center"><h2 class="mr-20">12k</h2><p class="fz-14">Happy Users <br> Around World</p></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$6;
const data$1 = [
  {
    id: 1,
    image: "/dark/assets/imgs/freelancer/works/1.jpg",
    title: "GeekFolio Architecture",
    category: "Branding",
    date: "2023"
  },
  {
    id: 2,
    image: "/dark/assets/imgs/freelancer/works/2.jpg",
    title: "Luxury Modern Chair",
    category: "Branding",
    date: "2023"
  },
  {
    id: 3,
    image: "/dark/assets/imgs/freelancer/works/3.jpg",
    title: "Partiner BPO",
    category: "Branding",
    date: "2023"
  },
  {
    id: 4,
    image: "/dark/assets/imgs/freelancer/works/4.jpg",
    title: "From our gallery",
    category: "Branding",
    date: "2023"
  },
  {
    id: 5,
    image: "/dark/assets/imgs/freelancer/works/5.jpg",
    title: "Astra Brand Identity",
    category: "Branding",
    date: "2023"
  }
];
const _sfc_main$5 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio clasic section-padding",
        "data-scroll-index": "3"
      }, _attrs))}><div class="container"><div class="sec-lg-head mb-50"><div class="row"><div class="col-lg-7"><div class="position-re"><h6 class="dot-titl-non mb-10">Portfolio</h6><h2 class="fz-50">Selected Works</h2></div></div><div class="col-lg-5 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/portfolio-classic-grid" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All Works <span${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span>`);
          } else {
            return [
              createTextVNode("View All Works "),
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
        _push(`<div class="${ssrRenderClass(`col-lg-${index > 1 ? "4" : "6"}`)}"><div class="item mt-30"><div class="img"><img${ssrRenderAttr("src", item.image)} alt="" class="radius-10">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/project-details1",
          class: "tag"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.category)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(item.category), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">`);
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
        _push(`</h6></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(item.date)}</p></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Portfolio.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Skills",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "skills-exp section-padding sub-bg",
        "data-scroll-index": "4"
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6"><div class="sec-lg-head mb-80"><div class="position-re"><h6 class="dot-titl-non mb-10">Skills &amp; Experience</h6><h2 class="fz-50">My Experience</h2></div></div><div class="skill-item d-flex justify-content-between md-mb50"><div class="item text-center"><div class="icon-img-60 m-auto"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/freelancer/skills/figma.png`)} alt=""></div><span class="mt-15">Figma</span></div><div class="item text-center"><div class="icon-img-60 m-auto"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/freelancer/skills/wordpress.png`)} alt=""></div><span class="mt-15">WordPress</span></div><div class="item text-center"><div class="icon-img-60 m-auto"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/freelancer/skills/angular.png`)} alt=""></div><span class="mt-15">Angular</span></div><div class="item text-center"><div class="icon-img-60 m-auto"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/freelancer/skills/webflow.png`)} alt=""></div><span class="mt-15">Webflow</span></div></div></div><div class="col-lg-5 offset-lg-1 valign"><div class="exp-items full-width"><div class="item d-flex pb-30 pt-30 mb-30 bord-thin-top bord-thin-bottom"><div class="title"><h6>Android Studio</h6><p class="fz-12">Junior Product Designer</p></div><div class="date ml-auto text-right"><span class="icon">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/page-about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-arrow-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><p class="fz-12">2014 - 2015</p></div></div><div class="item d-flex pb-30 mb-30 bord-thin-bottom"><div class="title"><h6>Slack</h6><p class="fz-12">UI/UX Designer &amp; Developer</p></div><div class="date ml-auto text-right"><span class="icon">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/page-about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-arrow-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><p class="fz-12">2015 - 2019</p></div></div><div class="item d-flex pb-30 bord-thin-bottom"><div class="title"><h6>Apple</h6><p class="fz-12">ios Developer</p></div><div class="date ml-auto text-right"><span class="icon">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/page-about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-arrow-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><p class="fz-12">2019 - 2021</p></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Skills.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "testim-crv section-padding",
        "data-scroll-index": "5"
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 valign"><div class="sec-lg-head md-mb80"><div class="position-re"><h6 class="dot-titl-non mb-10">What Clients Says?</h6><h2 class="fz-50">Testimonials</h2></div><div class="swiper-controls testim-controls arrow-out d-flex mt-50"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div></div></div></div><div class="col-lg-8"><div class="testim-swiper2">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Testimonials.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$3;
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
const _sfc_main$2 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "blog-list-half crev section-padding sub-bg",
        "data-scroll-index": "6"
      }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-7"><h6 class="dot-titl-non mb-10">Our Blog</h6><h2 class="fz-50">Latest News</h2></div><div class="col-lg-5 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-half-img" }, {
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
        _push(`<div class="col-lg-6"><div class="${ssrRenderClass(`item ${index !== unref(data).length - 1 ? "md-mb80" : ""}`)}"><div class="row rest"><div class="col-md-6"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""></div></div><div class="col-md-6 valign"><div class="cont"><span class="date fz-12 ls1 text-u opacity-7 mb-15">${ssrInterpolate(item.date)}</span><h5>`);
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
        _push(`</h5><div class="tags colorbg mt-15"><!--[-->`);
        ssrRenderList(item.tags, (tag, i) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dark/blog-half-img",
            key: i,
            class: "me-1"
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Blog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "contact-crev section-padding",
    "data-scroll-index": "7"
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="sec-lg-head md-mb80"><h6 class="dot-titl-non mb-10">Get In Touch</h6><h2 class="fz-50">Let&#39;s make your brand brilliant!</h2><p class="fz-15 mt-10">If you would like to work with us or just want to get in touch, we\u2019d love to hear from you!</p><div class="phone fz-30 fw-600 mt-30 underline"><a href="#0">+1 840 841 25 69</a></div><ul class="rest social-text d-flex mt-60"><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="full-width"><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-full butn-bord radius-30"><span class="text">Let&#39;s Talk</span></button></div></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sub-bg" }, _attrs))}><div class="sub-footer pt-40 pb-40 bord-thin-top"><div class="container"><div class="row"><div class="col-lg-4"><div class="logo"><a href="#0"><img${ssrRenderAttr("src", `/dark/assets/imgs/logo-${__props.lightMode ? "dark" : "light"}.png`)} alt=""></a></div></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13"> \xA9 2023 Geekfolio is Proudly Powered by <span class="underline"><a${ssrRenderAttr("href", unref(data$3).author_link)} target="_blank">${ssrInterpolate(unref(data$3).author)}</a></span></p></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Freelancer/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main;

export { __nuxt_component_0 as _, __nuxt_component_1 as a, __nuxt_component_2 as b, __nuxt_component_3 as c, __nuxt_component_4 as d, __nuxt_component_5 as e, __nuxt_component_6 as f, __nuxt_component_7 as g, __nuxt_component_8 as h, __nuxt_component_9 as i, __nuxt_component_10 as j };
//# sourceMappingURL=Footer-bf433149.mjs.map
