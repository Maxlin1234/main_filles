import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, unref, onUnmounted } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-29ef7f45.mjs';
import { d as data$3 } from './app-data-475c97b4.mjs';

const _imports_0$1 = "" + publicAssetsURL("dark/assets/imgs/svg-assets/claw.svg");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/header/c1.jpg");
const _imports_2 = "" + publicAssetsURL("dark/assets/imgs/header/c2.jpg");
const _sfc_main$d = {
  __name: "Header",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-creative" }, _attrs))}><div class="container ontop"><div class="row justify-content-center full-height"><div class="col-lg-3 d-flex align-items-end"><div class="img md-hide"><div class="img-assets1 parallax" data-speed="-0.01"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><img${ssrRenderAttr("src", _imports_1)} alt="" data-speed="0.01" class="parallax"></div></div><div class="col-lg-6 valign"><div class="caption text-center full-width md-mb50"><div class="mb-30"><svg class="svg-animation star" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke" stroke="currentColor" style="${ssrRenderStyle({ "--index": "1, --transform: 30deg" })}"></line><line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke" stroke="currentColor" style="${ssrRenderStyle({ "--index": "2, --transform: 60deg" })}"></line><line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke" stroke="currentColor" style="${ssrRenderStyle({ "--index": "3, --transform: 90deg" })}"></line><line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke" stroke="currentColor" style="${ssrRenderStyle({ "--index": "4, --transform: 120deg" })}"></line><line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke" stroke="currentColor" style="${ssrRenderStyle({ "--index": "5, --transform: 150deg" })}"></line><line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke" stroke="currentColor" style="${ssrRenderStyle({ "--index": "6, --transform: 180deg" })}"></line></svg></div><h4 class="fw-300 mb-15">Digital agency studio</h4><h1 class="fw-600 d-rotate wow"><span class="rotate-text">a creative digital</span><span class="rotate-text">design studio</span></h1></div></div><div class="col-lg-3"><div class="img parallax" data-speed="0.01"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="mt-30 md-hide"><div class="text-center hover-this"><div class="circle-button hover-anim"><div class="rotate-circle fz-30 text-u"><svg class="textcircle" viewBox="0 0 500 500"><defs><path id="textcircle1" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs><text><textPath xlink:href="#textcircle1" textLength="900">Creative - Agency - Winner -</textPath></text></svg></div><div class="in-circle text-center"><h3>A <span class="fw-300 fz-30">+</span></h3></div></div></div><div class="text-center"><h6>500k <span class="fz-14">Customers</span></h6><p class="fz-13">Avg rating 4.8 makes us world best.</p></div></div></div></div></div><div class="bg-pattern bg-img"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/graph.png`)}></div></header>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Header.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$d;
const _sfc_main$c = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-marq main-colorbg2" }, _attrs))}><div class="container-fluid ontop sub-bg rest pt-20 pb-20"><div class="row"><div class="col-12"><div class="main-marq light-text"><div class="slide-har st1"><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Marq.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$b = {
  __name: "Intro",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about section-padding main-bg" }, _attrs))}><div class="container ontop"><div class="row"><div class="col-lg-5 valign"><div class="about-circle-crev md-hide"><div class="circle-button"><div class="rotate-circle fz-16 ls1 text-u"><svg class="textcircle" viewBox="0 0 500 500"><defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs><text><textPath xlink:href="#textcircle" textLength="900"> Creative Branding Agency - Creative Branding Agency - </textPath></text></svg></div></div><div class="half-circle-img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/about/1.jpg`)} alt=""></div></div></div><div class="col-lg-7 valign"><div class="cont sec-lg-head"><h6 class="dot-titl mb-20">About Agency</h6><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">We\u2019re sharp brands creators</span></span><span class="sideup-text"><span class="up-text">open for any new collabs</span></span></h2><div class="row"><div class="col-lg-12"><div class="text mt-20"><p>Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support and envisioning the future arts.</p></div><div class="underline">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-about",
        class: "mt-30 ls1 sub-title"
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
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="row md-marg mt-100 justify-content-center"><div class="col-lg-4 col-md-6"><div class="item-serv md-mb50"><div class="d-flex align-items-center pb-20 mb-30 bord-thin-bottom"><div class="mr-30"><div class="icon-img-50"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/0.png`)} alt=""></div></div><div><h6>Digital Product Design</h6></div></div><p class="fz-14">new ways to showcase user content on digital support and envisioning the future arts.</p></div></div><div class="col-lg-4 col-md-6"><div class="item-serv md-mb50"><div class="d-flex align-items-center pb-20 mb-30 bord-thin-bottom"><div class="mr-30"><div class="icon-img-50"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/1.png`)} alt=""></div></div><div><h6>Branding &amp; Design</h6></div></div><p class="fz-14">new ways to showcase user content on digital support and envisioning the future arts.</p></div></div><div class="col-lg-4 col-md-6"><div class="item-serv"><div class="d-flex align-items-center pb-20 mb-30 bord-thin-bottom"><div class="mr-30"><div class="icon-img-50"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/2.png`)} alt=""></div></div><div><h6>Web Development</h6></div></div><p class="fz-14">new ways to showcase user content on digital support and envisioning the future arts.</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Intro.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$b;
const _sfc_main$a = {
  __name: "SectionImage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "back-image bg-img parallaxie",
        "data-background": "/dark/assets/imgs/background/17.jpg",
        "data-overlay-dark": "5"
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/SectionImage.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$a;
const data$2 = [
  {
    id: 1,
    image: "/assets/imgs/serv-icons/0.png",
    title: "Marketing Strategy",
    text: "Praesent faucibus nisl sit amet nulla pretium a sed purus."
  },
  {
    id: 2,
    image: "/assets/imgs/serv-icons/1.png",
    title: "Product Design",
    text: "Praesent faucibus nisl sit amet nulla pretium a sed purus."
  },
  {
    id: 3,
    image: "/assets/imgs/serv-icons/2.png",
    title: "Website Design",
    text: "Praesent faucibus nisl sit amet nulla pretium a sed purus."
  },
  {
    id: 4,
    image: "/assets/imgs/serv-icons/0.png",
    title: "Marketing Strategy",
    text: "Praesent faucibus nisl sit amet nulla pretium a sed purus."
  }
];
const _sfc_main$9 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services main-bg ontop bord-thin-top bord-thin-bottom" }, _attrs))}><div class="container-fluid"><div class="row"><!--[-->`);
      ssrRenderList(unref(data$2), (item) => {
        _push(`<div class="item-bord col-lg-3 col-md-6"><div class="icon-img-70 mb-40"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}${item.image}`)} alt=""></div><h6 class="mb-15">${ssrInterpolate(item.title)}</h6><p>${ssrInterpolate(item.text)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/page-services",
          class: "arrow mt-40"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="circle"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span><span class="fz-12 text-u ml-10"${_scopeId}>Read More</span>`);
            } else {
              return [
                createVNode("span", { class: "circle" }, [
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
                createVNode("span", { class: "fz-12 text-u ml-10" }, "Read More")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Services.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$9;
const data$1 = [
  {
    id: 1,
    image: "/dark/assets/imgs/portfolio/2/1.jpg",
    year: "2023",
    type: "Branding",
    width: 5
  },
  {
    id: 2,
    image: "/dark/assets/imgs/portfolio/2/3.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  },
  {
    id: 3,
    image: "/dark/assets/imgs/portfolio/2/2.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  },
  {
    id: 4,
    image: "/dark/assets/imgs/portfolio/2/4.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  }
];
const _sfc_main$8 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio section-padding" }, _attrs))}><div class="container ontop"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl mb-10">Selected Projects</h6><h2 class="fz-70 fw-700">Featured Works</h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="text"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div></div></div></div><div class="row justify-content-center"><div class="col-lg-5"><div class="item md-mb80"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$1)[0].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">From our gallery</h6><p>${ssrInterpolate(unref(data$1)[0].type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(unref(data$1)[0].year)}</p></div></div></div></div><div class="col-lg-6 valign"><div class="item full-width"><div class="row justify-content-center"><div class="col-lg-8"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$1)[1].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">From our gallery</h6><p>${ssrInterpolate(unref(data$1)[1].type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(unref(data$1)[1].year)}</p></div></div></div></div></div></div><div class="col-lg-6 valign"><div class="item mt-80 full-width"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$1)[2].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">From our gallery</h6><p>${ssrInterpolate(unref(data$1)[2].type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(unref(data$1)[2].year)}</p></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$1)[3].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">From our gallery</h6><p>${ssrInterpolate(unref(data$1)[3].type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(unref(data$1)[3].year)}</p></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Portfolio.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testim-creative sub-bg o-hidden" }, _attrs))}><div class="container"><div class="sec-lg-head section-padding pb-80 bord-thin-bottom o-hidden"><div class="row"><div class="col-lg-8"><div class="position-re inline"><h6 class="dot-titl mb-10">What&#39;s People Says?</h6><h2 class="fz-70 fw-700">Our Clients</h2></div></div><div class="col-lg-4 d-flex align-items-end"><div class="arrows-carsouel testim-controls"><div class="swiper-controls"><div class="swiper-button-prev"><span class="left"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/arrow-right-top.svg`)} alt=""></span></div><div class="swiper-button-next"><span class="right"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/arrow-right-top.svg`)} alt=""></span></div></div></div></div></div></div><div class="row"><div class="col-lg-3"><div class="mt-80 md-hide" id="sticky_item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-contact",
        class: "butn butn-md butn-bg main-colorbg2 radius-30 mb-80"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Become a Client</span><span class="icon ml-10"${_scopeId}><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/arrow-right-top.svg`)} alt=""${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", null, "Become a Client"),
              createVNode("span", { class: "icon ml-10" }, [
                createVNode("img", {
                  src: `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/arrow-right-top.svg`,
                  alt: ""
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-lg-9"><div class="testim-items section-padding"><div class="testim-swiper">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Testimonials.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$7;
const data = [
  {
    id: 1,
    picture: "/dark/assets/imgs/team/1.jpg",
    name: "Matt Smith",
    position: "Co-Founder"
  },
  {
    id: 2,
    picture: "/dark/assets/imgs/team/2.jpg",
    name: "Matt Smith",
    position: "Co-Founder"
  },
  {
    id: 3,
    picture: "/dark/assets/imgs/team/3.jpg",
    name: "Matt Smith",
    position: "Co-Founder"
  }
];
const _sfc_main$6 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-box section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl mb-10">Selected Projects</h6><h2 class="fz-70 fw-700">Featured Works</h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="text"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div></div></div></div><div class="row md-marg"><!--[-->`);
      ssrRenderList(unref(data), (member, index) => {
        _push(`<div class="col-lg-4"><div class="${ssrRenderClass(`item ${index !== unref(data).length - 1 ? "md-mb50" : ""}`)}"><div class="img"><img${ssrRenderAttr("src", member.picture)} alt=""></div><div class="info d-flex align-items-center"><div><div class="circle-50"><img${ssrRenderAttr("src", member.picture)} alt="" class="circle-img"></div></div><div class="cont ml-20"><span class="fz-12 opacity-8">${ssrInterpolate(member.position)}</span><h6 class="fz-16">${ssrInterpolate(member.name)}</h6></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Team.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$6;
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "panel o-hidden intro-pan sub-bg" }, _attrs))}><div class="container o-hidden rest mt-60"><div class="row mb-80 rest"><div class="col-lg-7 rest valign"><div class="main-marq lrg"><div class="slide-har st1"><div class="box pb-20"><div class="item"><h4>Awards &amp;</h4></div><div class="item"><h4>Recognition</h4></div><div class="item"><h4>Awards &amp;</h4></div><div class="item"><h4>Recognition</h4></div><div class="item"><h4>Awards &amp;</h4></div></div><div class="box pb-20"><div class="item"><h4>Awards &amp;</h4></div><div class="item"><h4>Recognition</h4></div><div class="item"><h4>Awards &amp;</h4></div><div class="item"><h4>Recognition</h4></div><div class="item"><h4>Awards &amp;</h4></div></div></div></div></div><div class="col-lg-5 rest"><div class="text valign"><p class="fz-14">Our area of practice is quite wide: design, development. The experts who work at our web design studio know exactly how to make your project unique, fresh, and profitable.</p></div></div></div><div class="container numbers"><div class="row md-marg"><div class="col-lg-3 col-md-6"><div class="item md-mb50"><h2 class="fw-800 stroke">28</h2><h6>Years of Experience</h6></div></div><div class="col-lg-3 col-md-6"><div class="item md-mb50"><h2 class="fw-800">4k</h2><h6>Projects Complated</h6></div></div><div class="col-lg-3 col-md-6"><div class="item sm-mb50"><h2 class="fw-800 stroke">12k</h2><h6>Happy Customers</h6></div></div><div class="col-lg-3 col-md-6"><div class="item"><h2 class="fw-800">17</h2><h6>Awards Winning</h6></div></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/HzIntro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/svg-assets/star.png");
const _sfc_main$4 = {
  __name: "HzAwards",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "panel awards-list main-bg" }, _attrs))}><div class="container mt-60"><div class="row"><div class="col-lg-5"><div class="sec-lg-head mb-80"><div class="position-re"><div class="fz-80"><h6 class="dot-titl mb-10">ACHIEVEMENTS</h6><h2 class="fz-70 fw-700">Our Awards</h2></div><div class="text mt-15"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div><div class="exp-box sub-bg mt-50 inline"><div class="d-flex align-items-center"><div class="numb"><h2 class="fz-60">20</h2></div><div class="cont ml-30"><h6 class="sub-title">Years of <br> Experience</h6></div></div><div class="img-icon"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div></div></div><div class="col-lg-6 offset-lg-1"><div class="cont"><ul class="rest"><li class="d-flex"><div><h6>Independent of the year nomination</h6><span class="fz-14 opacity-8"><span class="date">2020</span> Awwwards</span></div><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-about",
        class: "arrow-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"${ssrRenderAttr("fill", __props.lightMode ? "#fff" : "#000")}${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 9 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                  fill: __props.lightMode ? "#fff" : "#000"
                }, null, 8, ["fill"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="d-flex"><div><h6>Awwwards Site of the Day</h6><span class="fz-14 opacity-8"><span class="date">2020</span> Awwwards</span></div><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-about",
        class: "arrow-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"${ssrRenderAttr("fill", __props.lightMode ? "#fff" : "#000")}${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 9 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                  fill: __props.lightMode ? "#fff" : "#000"
                }, null, 8, ["fill"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="d-flex"><div><h6>CSSDA Website of the Day</h6><span class="fz-14 opacity-8"><span class="date">2020</span> Awwwards</span></div><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-about",
        class: "arrow-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"${ssrRenderAttr("fill", __props.lightMode ? "#fff" : "#000")}${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 9 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                  fill: __props.lightMode ? "#fff" : "#000"
                }, null, 8, ["fill"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="d-flex"><div><h6>Sydney Design Awards \u2013 Silver</h6><span class="fz-14 opacity-8"><span class="date">2020</span> Awwwards</span></div><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-about",
        class: "arrow-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"${ssrRenderAttr("fill", __props.lightMode ? "#fff" : "#000")}${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 9 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                  fill: __props.lightMode ? "#fff" : "#000"
                }, null, 8, ["fill"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/HzAwards.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "HzCallToAction",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "panel call-action-center sub-bg" }, _attrs))}><div class="container mt-60"><div class="row justify-content-center"><div class="col-lg-10"><div class="sec-lg-head text-center"><h6 class="dot-titl mb-10">Call to Action</h6><h2 class="fz-70 fw-700"><span>Have a project in mind?</span><br><span>Let\u2019s get to work.</span></h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-contact`,
        class: "butn-circle colorbg-2 d-flex align-items-center text-center mt-50 m-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="full-width"${_scopeId}><span${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span><span class="full-width"${_scopeId}>Get In Touch</span></div><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/circle-star.svg`)} alt="" class="circle-star"${_scopeId}>`);
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
                createVNode("span", { class: "full-width" }, "Get In Touch")
              ]),
              createVNode("img", {
                src: `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/circle-star.svg`,
                alt: "",
                class: "circle-star"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="bg-pattern bg-img"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/graph.png`)}></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/HzCallToAction.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "HzScroll",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    function handleResize() {
      if (window.innerWidth < 991 && document.querySelector(".thecontainer").style.maxHeight) {
        location.reload();
      } else if (window.innerWidth > 991 && !document.querySelector(".thecontainer").style.maxHeight) {
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".thecontainer",
            pin: true,
            scrub: 1,
            end: () => {
              var _a;
              return "+=" + ((_a = document.querySelector(".thecontainer")) == null ? void 0 : _a.offsetWidth);
            }
          }
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "thecontainer ontop" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Intro), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), { lightMode: __props.lightMode }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), { lightMode: __props.lightMode }, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/HzScroll.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-modern section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl mb-10">Selected Projects</h6><h2 class="fz-70 fw-700">Featured Works</h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="text"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div></div></div></div><div class="blog-carsouel">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main$1;
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>Address</h6></div><div class="text"><p>Germany \u2014 785 15h Street, Office 478 Berlin, De 81566</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>Say Hello</h6></div><div class="text"><p class="mb-10"><a href="#0">hello@design.com</a></p><h5><a href="#">+1 840 841 25 69</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>Social</h6></div><ul class="rest social-text"><li><a href="#0">Facebook</a></li><li><a href="#0">Twitter</a></li><li><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"><h6>Newsletter</h6></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top ontop"><div class="container"><div class="row"><div class="col-lg-4"><div class="logo"><a href="#0"><img${ssrRenderAttr("src", `/dark/assets/imgs/logo-${__props.lightMode ? "dark" : "light"}.png`)} alt=""></a></div></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13">\xA9 2023 Geekfolio is Proudly Powered by <span class="underline"><a${ssrRenderAttr("href", unref(data$3).author_link)} target="_blank">${ssrInterpolate(unref(data$3).author)}</a></span></p></div></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_11 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, __nuxt_component_4 as c, __nuxt_component_5 as d, __nuxt_component_6 as e, __nuxt_component_7 as f, __nuxt_component_8 as g, __nuxt_component_9 as h, __nuxt_component_10 as i, __nuxt_component_11 as j };
//# sourceMappingURL=Footer-0455f186.mjs.map
