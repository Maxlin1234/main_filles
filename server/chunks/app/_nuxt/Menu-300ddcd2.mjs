import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';

const _sfc_main$1 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  props: ["lightMode", "darkOnScroll", "alwaysDark"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "navi",
        class: `topnav ${__props.alwaysDark && "navlit"}`
      }, _attrs))}><div class="container"><div class="logo icon-img-120"><a href="#"><img${ssrRenderAttr("src", `/dark/assets/imgs/logo-${__props.alwaysDark ? "dark" : "light"}.png`)} alt=""></a></div><div class="menu-icon cursor-pointer"><span class="icon"><i></i><i></i></span><span class="text"><span class="word">Menu</span></span></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/Navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "Menu",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hamenu" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-2"><div class="menu-text"><div class="text"><h2>Menu</h2></div></div></div><div class="col-lg-7"><div class="menu-links"><ul class="main-menu rest"><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Home">Home</span> <i></i></div></div><div class="sub-menu"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-main`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home Main `);
          } else {
            return [
              createTextVNode("Home Main ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-corporate`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home Corporate `);
          } else {
            return [
              createTextVNode("Home Corporate ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-onepage`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home One page `);
          } else {
            return [
              createTextVNode("Home One page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-digital-agency`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Digital Agency`);
          } else {
            return [
              createTextVNode("Digital Agency")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-freelancer`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Freelancer `);
          } else {
            return [
              createTextVNode("Freelancer ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-marketing-agency`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Marketing Agency`);
          } else {
            return [
              createTextVNode("Marketing Agency")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-creative-agency`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Creative Agency`);
          } else {
            return [
              createTextVNode("Creative Agency")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-startup`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Startup Bussines `);
          } else {
            return [
              createTextVNode("Startup Bussines ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/home-architecture`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Architecture `);
          } else {
            return [
              createTextVNode("Architecture ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></li><li><div class="o-hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-about`,
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fill-text" data-text="About Us"${_scopeId}>About Us</span>`);
          } else {
            return [
              createVNode("span", {
                class: "fill-text",
                "data-text": "About Us"
              }, "About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Pages">Pages</span> <i></i></div></div><div class="sub-menu"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-services`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services `);
          } else {
            return [
              createTextVNode("Services ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-team`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Team`);
          } else {
            return [
              createTextVNode("Our Team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-contact`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us `);
          } else {
            return [
              createTextVNode("Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Showcases">Showcases</span><i></i></div></div><div class="sub-menu"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/showcase-parallax-slider`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Parallax Slider`);
          } else {
            return [
              createTextVNode(" Parallax Slider")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/showcase-frame-slider`,
        class: "sub-link"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/showcase-circle-slider`,
        class: "sub-link"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/showcase-carousel`,
        class: "sub-link"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/showcase-interactive-center-horizontal`,
        class: "sub-link"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/showcase-interactive-center`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Interactive Links2`);
          } else {
            return [
              createTextVNode(" Interactive Links2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/showcase-parallax`,
        class: "sub-link"
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
      _push(`</li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Portfolio">Portfolio</span><i></i></div></div><div class="sub-menu"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/portfolio-grid-2`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Classic Grid`);
          } else {
            return [
              createTextVNode("Classic Grid")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/portfolio-modern`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Modern Grid `);
          } else {
            return [
              createTextVNode("Modern Grid ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/portfolio-metro`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfolio Metro `);
          } else {
            return [
              createTextVNode("Portfolio Metro ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/project-details1`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Project Details 1`);
          } else {
            return [
              createTextVNode("Project Details 1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/project-details2`,
        class: "sub-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Project Details 2`);
          } else {
            return [
              createTextVNode("Project Details 2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Blogs">Blogs</span> <i></i></div></div><div class="sub-menu"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/blog-classic`,
        class: "sub-link"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/blog-list`,
        class: "sub-link"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/blog-half-img`,
        class: "sub-link"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/blog-details`,
        class: "sub-link"
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
      _push(`</li></ul></div></li><li><div class="o-hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${__props.lightMode ? "light" : "dark"}/page-contact`,
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fill-text" data-text="Contact"${_scopeId}>Contact</span>`);
          } else {
            return [
              createVNode("span", {
                class: "fill-text",
                "data-text": "Contact"
              }, "Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li></ul></div></div><div class="col-lg-3 d-flex align-items-end"><div class="cont-info full-width"><div class="item"><h5 class="mb-15">Get In Touch</h5><p>541 Melville Geek, Palo Alto, CA 94301</p><p class="underline main-color mt-5 mb-5"><a href="#0">+1 840 841 25 69</a></p><p><a href="#0">GeekFolio_website@gmail.com</a></p></div><div class="search-form"><div class="form-group"><input type="text" name="search" placeholder="Search"><button><span class="pe-7s-search"></span></button></div></div><ul class="rest social-text d-flex mt-50 fz-13"><li class="mr-20"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mr-20"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mr-20"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/Menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=Menu-300ddcd2.mjs.map
