import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, onUnmounted, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';

const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/LOGO.png");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/LOGOwhite.png");
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["lightMode", "mainBg", "subBg", "noStatic", "curve"],
  setup(__props) {
    function handleScroll() {
      const bodyScroll = window.scrollY;
      const navbar = document.querySelector(".navbar");
      if (bodyScroll > 300)
        navbar.classList.add("nav-scroll");
      else
        navbar.classList.remove("nav-scroll");
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: `navbar navbar-expand-lg ${__props.curve ? "nav-crev" : ""} ${__props.noStatic ? "" : "static"} ${__props.mainBg ? "main-bg" : ""} ${__props.subBg ? "sub-bg" : ""}`
      }, _attrs))}><div class="container"><a class="logo icon-img-100" href="#">`);
      if (__props.lightMode) {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="logo">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "160px", "height": "24px" })}" alt="logo">`);
      }
      _push(`</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">\u9996\u9801</span></a><div class="dropdown-menu mega-menu"><div class="container"><div class="row"><div class="col-lg-3"><div class="clumn"><div class="title"><h6 class="sub-title ls1">Home Dark</h6></div><div class="links">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/home-corporate"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Corporate Business`);
          } else {
            return [
              createTextVNode("Corporate Business")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/home-onepage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home One page`);
          } else {
            return [
              createTextVNode("Home One page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/home-architecture"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Architecture`);
          } else {
            return [
              createTextVNode("Architecture")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-lg-3"><div class="clumn"><div class="title"><h6 class="sub-title ls1">Showcases</h6></div><div class="links">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/showcase-parallax-slider"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Parallax Slider`);
          } else {
            return [
              createTextVNode("Parallax Slider")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/showcase-frame-slider"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Frame Slider`);
          } else {
            return [
              createTextVNode("Frame Slider")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/showcase-circle-slider"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Circle Slider`);
          } else {
            return [
              createTextVNode("Circle Slider")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/showcase-carousel"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Showcase Carousel`);
          } else {
            return [
              createTextVNode("Showcase Carousel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/showcase-interactive-center-horizontal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interactive Links1`);
          } else {
            return [
              createTextVNode("Interactive Links1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/showcase-interactive-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interactive Links2 `);
          } else {
            return [
              createTextVNode("Interactive Links2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/showcase-parallax"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Vertical Parallax`);
          } else {
            return [
              createTextVNode("Vertical Parallax")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-lg-3"><div class="clumn"><div class="title"><h6 class="sub-title ls1">Showcases Light</h6></div><div class="links">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/showcase-parallax-slider"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Parallax Slider`);
          } else {
            return [
              createTextVNode("Parallax Slider")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/showcase-carousel"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Showcase Carousel`);
          } else {
            return [
              createTextVNode("Showcase Carousel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/showcase-frame-slider"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Frame Slider`);
          } else {
            return [
              createTextVNode("Frame Slider")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/showcase-circle-slider"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Circle Slider`);
          } else {
            return [
              createTextVNode("Circle Slider")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/showcase-interactive-center-horizontal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interactive Links1`);
          } else {
            return [
              createTextVNode("Interactive Links1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/showcase-interactive-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interactive Links2 `);
          } else {
            return [
              createTextVNode("Interactive Links2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/showcase-parallax"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Vertical Parallax`);
          } else {
            return [
              createTextVNode("Vertical Parallax")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">\u95DC\u65BC\u6211\u5011</span></a><div class="dropdown-menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: `/${__props.lightMode ? "light" : "dark"}/page-about`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: `/${__props.lightMode ? "light" : "dark"}/page-contact`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: `/${__props.lightMode ? "light" : "dark"}/portfolio-grid-2`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text"${_scopeId}>\u4F5C\u54C1\u4ECB\u7D39</span>`);
          } else {
            return [
              createVNode("span", { class: "rolling-text" }, "\u4F5C\u54C1\u4ECB\u7D39")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">\u6700\u65B0\u6D88\u606F</span></a><div class="dropdown-menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: `/${__props.lightMode ? "light" : "dark"}/blog-classic`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog Standerd `);
          } else {
            return [
              createTextVNode("Blog Standerd ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: `/${__props.lightMode ? "light" : "dark"}/blog-list`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog List`);
          } else {
            return [
              createTextVNode("Blog List")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: `/${__props.lightMode ? "light" : "dark"}/blog-half-img`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Image Out Frame `);
          } else {
            return [
              createTextVNode("Image Out Frame ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: `/${__props.lightMode ? "light" : "dark"}/blog-details`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog Details `);
          } else {
            return [
              createTextVNode("Blog Details ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: `/${__props.lightMode ? "light" : "dark"}/page-contact`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text"${_scopeId}>\u806F\u7D61\u6211\u5011</span>`);
          } else {
            return [
              createVNode("span", { class: "rolling-text" }, "\u806F\u7D61\u6211\u5011")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="search-form"><div class="form-group"><input type="text" name="search" placeholder="Search"><button><span class="pe-7s-search"></span></button></div><div class="search-icon"><span class="pe-7s-search open-search"></span><span class="pe-7s-close close-search"></span></div></div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Navbar-86353f14.mjs.map
