import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, withCtx, createVNode, openBlock, createBlock, unref, mergeProps, createTextVNode, toDisplayString } from 'vue';
import { _ as _export_sfc, b as useState } from '../server.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$b } from './ModalVideo-2460fa41.mjs';
import { L as Link } from './components-bd5aef6c.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-29ef7f45.mjs';
import { d as data$3 } from './app-data-475c97b4.mjs';

const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/background/14.jpg");
const _sfc_main$a = {
  __name: "Header",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    const isOpen = useState("isOpen", () => false);
    function closeVideo() {
      isOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><header class="crev-header"><div class="container mt-80"><div class="row"><div class="col-lg-9"><div class="caption"><h1>High End <br> <span class="stroke">Creative</span> Agency</h1><div class="row mt-30"><div class="col-lg-5 offset-lg-1"><div class="text"><p>Through our years of experience, we&#39;ve also learned that while each channel has its own set of advantages.</p></div><div class="crv-butn-vid mt-30"><a href="https://youtu.be/AzwC6umvd1s" class="vid"><span class="text sub-title">Watch</span><span class="icon main-colorbg4"><svg class="default" width="13" height="20" viewBox="0 0 13 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20L13 10L0 0V20Z"></path></svg></span></a></div></div></div></div></div><div class="col-lg-3"><div class="md-hide">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/page-about",
        class: "hover-this"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="circle-button in-bord hover-anim"${_scopeId}><div class="rotate-circle fz-30 text-u"${_scopeId}><svg class="textcircle" viewBox="0 0 500 500"${_scopeId}><defs${_scopeId}><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"${_scopeId}></path></defs><text${_scopeId}><textPath xlink:href="#textcircle" textLength="900"${_scopeId}>Explore More - Explore More -</textPath></text></svg></div><div class="arrow"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "circle-button in-bord hover-anim" }, [
                createVNode("div", { class: "rotate-circle fz-30 text-u" }, [
                  (openBlock(), createBlock("svg", {
                    class: "textcircle",
                    viewBox: "0 0 500 500"
                  }, [
                    createVNode("defs", null, [
                      createVNode("path", {
                        id: "textcircle",
                        d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      })
                    ]),
                    createVNode("text", null, [
                      createVNode("textPath", {
                        "xlink:href": "#textcircle",
                        textLength: "900"
                      }, "Explore More - Explore More -")
                    ])
                  ]))
                ]),
                createVNode("div", { class: "arrow" }, [
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="main-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="bg-pattern bg-img"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/graph.png`)}></div></header>`);
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$a;
const _sfc_main$9 = {
  __name: "About",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = Link;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-intro section-padding" }, _attrs))}><div class="container"><div class="row mb-80"><div class="col-lg-5"><div class="sec-lg-head md-mb30"><h6 class="dot-titl-non mb-15 wow fadeIn">OUR BENEFITS</h6><h2 class="d-rotate wow"><span class="rotate-text">Our Team of Dedicated Digital Professionals.</span></h2></div></div><div class="col-lg-5 offset-lg-2 valign"><div class="text"><p class="d-slideup wow"><span class="sideup-text"><span class="up-text">Through our years of experience, we\u2019ve also learned that while</span></span><span class="sideup-text"><span class="up-text">each channel has its own set of advantages, they all work best</span></span><span class="sideup-text"><span class="up-text">when strategically paired with other channels.</span></span></p><div class="vew-all mt-50 ml-30 wow fadeIn" data-wow-delay=".8s">`);
      _push(ssrRenderComponent(_component_Link, { href: "/dark/blog-classic" }, {
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
      _push(`</div></div></div></div><div class="row justify-content-center"><div class="col-lg-6 rest"><div class="imgs md-mb50"><div class="img1"><div class="o-hidden"><div class="imago wow"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/about/01.jpg`)} alt=""></div></div></div><div class="img2"><div class="o-hidden"><div class="imago wow"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/about/1.jpg`)} alt=""></div></div></div></div></div><div class="col-lg-5 valign rest"><div class="cont"><h2 class="d-rotate wow"><span class="rotate-text">Unlock Revenue Growth for Your Business.</span></h2><div class="feat mt-80"><div class="item-flex d-flex align-items-center mb-50 wow fadeInUp" data-wow-delay=".4s"><div><div class="icon-img-50"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/0.png`)} alt=""></div></div><div class="cont ml-30"><h6>High Standerd</h6><p class="fz-15">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div></div><div class="item-flex d-flex align-items-center wow fadeInUp" data-wow-delay=".8s"><div><div class="icon-img-50"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/1.png`)} alt=""></div></div><div class="cont ml-30"><h6>Ease of Communication</h6><p class="fz-15">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/About.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$9;
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "marquee" }, _attrs))}><div class="container-fluid rest"><div class="row"><div class="col-12"><div class="main-marq"><div class="slide-har st1"><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Marq.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {
  __name: "Clients",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "clients-carso2" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="swiper5">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Clients.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$7;
const data$2 = [
  {
    id: 1,
    image: "assets/imgs/serv-icons/0.png",
    type: "Product Design",
    title: "Digital Product Design",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 2,
    image: "assets/imgs/serv-icons/1.png",
    type: "Customs Services",
    title: "Branding & Design",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 3,
    image: "assets/imgs/serv-icons/2.png",
    type: "Product Development",
    title: "Web Development",
    text: "Creating a higher spacing and how people move through a unique."
  }
];
const _sfc_main$6 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-box section-padding pb-0" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><h6 class="dot-titl-non mb-15 wow fadeIn">Featured Services</h6><h2 class="d-rotate wow"><span class="rotate-text">Our Services</span></h2></div></div><div class="col-lg-4 d-flex align-items-center"><div class="text wow fadeIn"><p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p></div></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$2), (item) => {
        _push(`<div class="col-lg-4"><div class="serv-item lg-pad md-mb50 radius-5 wow fadeIn" data-wow-delay=".5s"><div class="icon-img-50 mb-40"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/${item.image}`)} alt=""></div><span class="mb-10 opacity-7">${ssrInterpolate(item.type)}</span><h6 class="mb-15">${ssrInterpolate(item.title)}</h6><p class="fz-14">${ssrInterpolate(item.text)}</p><div class="crv-more">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/page-services",
          class: "mt-30 ls1 fz-12 text-u"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read More <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Read More "),
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Services.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$6;
const data$1 = [
  {
    id: 1,
    image: "/dark/assets/imgs/portfolio/4/01.jpg",
    tag: "Web Design",
    title: "Color Integration",
    date: 2023
  },
  {
    id: 2,
    image: "/dark/assets/imgs/portfolio/4/02.jpg",
    tag: "Mobile Software",
    title: "Color Integration",
    date: 2023
  },
  {
    id: 3,
    image: "/dark/assets/imgs/portfolio/4/03.jpg",
    tag: "Web Design",
    title: "New Gadgets",
    date: 2023
  },
  {
    id: 4,
    image: "/dark/assets/imgs/portfolio/4/04.jpg",
    tag: "Web Design",
    title: "Digital Platform",
    date: 2023
  },
  {
    id: 5,
    image: "/dark/assets/imgs/portfolio/4/05.jpg",
    tag: "Web Design",
    title: "Branding Process",
    date: 2023
  },
  {
    id: 6,
    image: "/dark/assets/imgs/portfolio/4/06.jpg",
    tag: "Web Design",
    title: "Branding Process",
    date: 2023
  }
];
const _sfc_main$5 = {
  __name: "Works",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "works thecontainer" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(data$1), (item) => {
        _push(`<div class="panel mt-30" Vfor><div class="item"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""></div><div class="cont d-flex align-items-end"><div><span>${ssrInterpolate(item.tag)}</span><h5>${ssrInterpolate(item.title)}</h5></div><div class="ml-auto"><h6>${ssrInterpolate(item.date)}</h6></div></div><a href="#0" class="link-overlay"></a></div></div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Works.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "ServicesTabs",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-tab revers section-padding pt-0" }, _attrs))}><div class="container"><div class="row mb-80"><div class="col-lg-12"><div class="full-width"><div class="main-marq o-hidden pt-40 pb-40 bord-thin-top bord-thin-bottom"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div><div class="row justify-content-center" id="tabs"><div class="col-lg-5 valign"><div class="serv-tab-link tab-links full-width md-mb50"><div class="sec-lg-head mb-80 wow fadeIn"><h6 class="dot-titl-non mb-15">Services</h6><p>We help you to go online and increase your conversion rate Better design for your digital products. </p></div><div class="row"><div class="col-lg-10"><ul class="rest"><li class="item-link current mb-15 pb-15 bord-thin-bottom" data-tab="tabs-1"><span>01</span> UI/UX Design </li><li class="item-link mb-15 pb-15 bord-thin-bottom" data-tab="tabs-2"><span>02</span> Branding</li><li class="item-link mb-15 pb-15 bord-thin-bottom" data-tab="tabs-3"><span>03</span> Development</li><li class="item-link" data-tab="tabs-4"><span>04</span> Marketing</li></ul></div></div></div></div><div class="col-lg-6"><div class="serv-tab-cont"><div class="tab-content current" id="tabs-1"><div class="item"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/serv/4.jpg`)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/0.png`)} alt=""></div><div class="text"><p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-services`,
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
      _push(`<div class="bg-pattern bg-img"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/abstact-BG.png`)}></div></div></div></div><div class="tab-content" id="tabs-2"><div class="item"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/sass-img/serv/2.jpg`)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/1.png`)} alt=""></div><div class="text"><p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-services`,
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-services`,
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
        to: `/${__props.lightMode ? "light" : "dark"}/page-services`,
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
      _push(`</div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/ServicesTabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$4;
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "numbers mt-80 pt-80 bord-thin-top wow fadeIn",
    "data-wow-delay": ".4s"
  }, _attrs))}><div class="row"><div class="col-lg-3 col-md-6"><div class="item md-mb50"><h2 class="fw-800 stroke">16</h2><h6>Years of Experience</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item md-mb50"><h2 class="fw-800">4<span class="fz-80 fw-600">k</span></h2><h6>Projects Complated</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item sm-mb50"><h2 class="fw-800 stroke">9<span class="fz-80 fw-600">k</span></h2><h6>Happy Customers</h6></div></div><div class="col-lg-3 col-md-6 d-flex"><div class="item ml-auto"><h2 class="fw-800">12</h2><h6>Awards Winning</h6></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Numbers.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Numbers = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `testim-crv2 section-padding sub-bg ${__props.lightMode ? "light" : ""}`
      }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="sec-lg-head mb-80"><div class="position-re text-center"><h6 class="dot-titl-non mb-15 wow fadeIn">Testimonials</h6><h2 class="d-rotate wow"><span class="rotate-text">What People Says?</span></h2></div></div></div><div class="col-lg-5 position-re wow fadeInUp" data-wow-delay=".4s"><div class="bord-qoute d-flex align-items-center justify-content-center"><div class="qoute-icon main-bg"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/quote.png`)} alt=""></div></div><div class="img-qoute"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/about/sq1.jpg`)} alt=""></div></div><div class="col-lg-7 wow fadeInUp" data-wow-delay=".4s"><div class="testim-swiper">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="d-flex"><div class="swiper-controls testim-controls arrow-out d-flex ml-auto"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div></div></div></div></div>`);
      _push(ssrRenderComponent(unref(Numbers), null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$2;
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half crev section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-6"><h6 class="dot-titl-non mb-15 wow fadeIn">Our Blog</h6><h2 class="d-rotate wow"><span class="rotate-text">Latest News.</span></h2></div><div class="col-lg-6 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all">`);
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
      _push(`</div></div></div></div></div><div class="row wow fadeIn" data-wow-delay=".4s"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-lg-6"><div class="item md-mb80"><div class="row rest"><div class="col-md-6"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""></div></div><div class="col-md-6 valign"><div class="cont"><span class="date fz-12 ls1 text-u opacity-7 mb-15">${ssrInterpolate(item.date)}</span><h5>`);
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
            class: "me-1",
            key: i
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main$1;
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sub-bg" }, _attrs))}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="call-box text-center mb-80"><h2><a href="page-contact.html">Let&#39;s <span class="stroke"> Discuss</span></a><span class="arrow"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span></h2></div><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>Address</h6></div><div class="text"><p>Germany \u2014 785 15h Street, Office 478 Berlin, De 81566</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>Say Hello</h6></div><div class="text"><p class="mb-10"><a href="#0">hello@design.com</a></p><h5><a href="#">+1 840 841 25 69</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>Social</h6></div><ul class="rest social-text"><li><a href="#0">Facebook</a></li><li><a href="#0">Twitter</a></li><li><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"><h6>Newsletter</h6></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top ontop"><div class="container"><div class="row"><div class="col-lg-4"><div class="logo"><a href="#"><img${ssrRenderAttr("src", `/dark/assets/imgs/logo-${__props.lightMode ? "dark" : "light"}.png`)} alt=""></a></div></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13"> \xA9 2023 Geekfolio is Proudly Powered by <span class="underline"><a${ssrRenderAttr("href", unref(data$3).author_link)} target="_blank">${ssrInterpolate(unref(data$3).author)}</a></span></p></div></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeMain/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, __nuxt_component_4 as c, __nuxt_component_5 as d, __nuxt_component_6 as e, __nuxt_component_7 as f, __nuxt_component_8 as g, __nuxt_component_9 as h, __nuxt_component_10 as i };
//# sourceMappingURL=Footer-fe3a2770.mjs.map
