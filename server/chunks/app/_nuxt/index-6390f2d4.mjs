import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, onUnmounted, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './logo-light-8117e658.mjs';
import { d as data$2 } from './app-data-475c97b4.mjs';
import { u as useHead, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './client-only-29ef7f45.mjs';
import { _ as _imports_0$3 } from './circle-star-379b5691.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$9 = {
  __name: "Navbar",
  __ssrInlineRender: true,
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
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg static" }, _attrs))}><div class="container"><a class="logo icon-img-100" href="#"><img${ssrRenderAttr("src", _imports_0$2)} alt="logo"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Home</span></a><div class="dropdown-menu mega-menu"><div class="container"><div class="row"><div class="col-lg-3"><div class="clumn"><div class="title"><h6 class="sub-title ls1">Home Dark</h6></div><div class="links">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/home-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Main Home`);
          } else {
            return [
              createTextVNode("Main Home")
            ];
          }
        }),
        _: 1
      }, _parent));
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
        to: "/dark/home-digital-agency"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/home-freelancer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Freelancer`);
          } else {
            return [
              createTextVNode("Freelancer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/home-marketing-agency"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/home-creative-agency"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/home-startup"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Startup Bussines`);
          } else {
            return [
              createTextVNode("Startup Bussines")
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
      _push(`</div></div></div><div class="col-lg-3"><div class="clumn"><div class="title"><h6 class="sub-title ls1">Home Light</h6></div><div class="links">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/home-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Main Home`);
          } else {
            return [
              createTextVNode("Main Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/home-corporate"
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
        to: "/light/home-onepage"
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
        to: "/light/home-digital-agency"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/home-freelancer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Freelancer`);
          } else {
            return [
              createTextVNode("Freelancer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/home-marketing-agency"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/home-creative-agency"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/home-startup"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Startup Bussines`);
          } else {
            return [
              createTextVNode("Startup Bussines")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/light/home-architecture"
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
            _push2(`Interactive NuxtLinks1`);
          } else {
            return [
              createTextVNode("Interactive NuxtLinks1")
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
            _push2(`Interactive NuxtLinks2 `);
          } else {
            return [
              createTextVNode("Interactive NuxtLinks2 ")
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
            _push2(`Parallax Slider `);
          } else {
            return [
              createTextVNode("Parallax Slider ")
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
            _push2(`Interactive NuxtLinks1`);
          } else {
            return [
              createTextVNode("Interactive NuxtLinks1")
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
            _push2(`Interactive NuxtLinks2 `);
          } else {
            return [
              createTextVNode("Interactive NuxtLinks2 ")
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
      _push(`</div></div></div></div></div></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Pages</span></a><div class="dropdown-menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/page-about"
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
        to: "/dark/page-services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services`);
          } else {
            return [
              createTextVNode("Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/page-team"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/page-contact"
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
      _push(`</div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Portfolio</span></a><ul class="dropdown-menu"><li class="dropdown-item"><a href="#0">Classic Grid <i class="fas fa-angle-right icon-arrow"></i></a><ul class="dropdown-side"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/portfolio-grid-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Grid 2 Columns`);
          } else {
            return [
              createTextVNode("Grid 2 Columns")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/portfolio-grid-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Grid 3 Columns`);
          } else {
            return [
              createTextVNode("Grid 3 Columns")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/portfolio-grid-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Grid 4 Columns`);
          } else {
            return [
              createTextVNode("Grid 4 Columns")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="dropdown-item"><a href="#0">Masonry <i class="fas fa-angle-right icon-arrow"></i></a><ul class="dropdown-side"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/portfolio-masonry-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Masonry 2 Columns`);
          } else {
            return [
              createTextVNode("Masonry 2 Columns")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/portfolio-masonry-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Masonry 3 Columns`);
          } else {
            return [
              createTextVNode("Masonry 3 Columns")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/portfolio-masonry-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Masonry 4 Columns`);
          } else {
            return [
              createTextVNode("Masonry 4 Columns")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/portfolio-metro"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfolio Metro`);
          } else {
            return [
              createTextVNode("Portfolio Metro")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/portfolio-modern"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Modern Grid`);
          } else {
            return [
              createTextVNode("Modern Grid")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/project-details1"
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
        class: "dropdown-item",
        to: "/dark/project-details2"
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
      _push(`</li></ul></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Blogs</span></a><div class="dropdown-menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/blog-classic"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog Standerd`);
          } else {
            return [
              createTextVNode("Blog Standerd")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/blog-list"
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
        to: "/dark/blog-half-img"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Image Out Frame`);
          } else {
            return [
              createTextVNode("Image Out Frame")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/blog-details"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog Details`);
          } else {
            return [
              createTextVNode("Blog Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Shop</span></a><div class="dropdown-menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/shop-list"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop List`);
          } else {
            return [
              createTextVNode("Shop List")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/shop-product"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Single Product`);
          } else {
            return [
              createTextVNode("Single Product")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/shop-cart"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cart`);
          } else {
            return [
              createTextVNode("Cart")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "dropdown-item",
        to: "/dark/shop-checkout"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Checkout`);
          } else {
            return [
              createTextVNode("Checkout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/dark/page-contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text"${_scopeId}>Contact</span>`);
          } else {
            return [
              createVNode("span", { class: "rolling-text" }, "Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="purchase"><a${ssrRenderAttr("href", unref(data$2).author_link)} class="butn butn-md butn-bord radius-30"><span>Purchase</span></a></div></div></nav>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/Navbar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$9;
const _sfc_main$8 = {
  __name: "Overlay",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "overlay bg-img",
        "data-background": "/landing-preview/img/header/overlay.webp"
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/Overlay.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$8;
const _imports_0$1 = "" + publicAssetsURL("landing-preview/img/star.svg");
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "land-header valign" }, _attrs))}><div class="container ontop"><div class="row justify-content-center"><div class="col-lg-8"><div class="caption text-center"><h6 class="sub-title"><span class="icon-img-20 mr-10"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></span> Awesome Template </h6><h1>A <span>perfect</span> Place for Your Creative <span>Portfolio</span>.</h1></div></div></div></div></header>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + publicAssetsURL("landing-preview/img/demos/more.jpg");
const data$1 = [
  {
    id: 0,
    link: "/dark/home-main",
    image: "/landing-preview/img/demos/m1.jpg",
    title: "Home Main",
    mode: "dark",
    "new": true
  },
  {
    id: 0.1,
    link: "/light/home-main",
    image: "/landing-preview/img/demos/m01.jpg",
    title: "Home Main",
    mode: "light",
    "new": true
  },
  {
    id: 1,
    link: "/dark/home-corporate",
    image: "/landing-preview/img/demos/1.jpg",
    title: "Corporate",
    mode: "dark"
  },
  {
    id: 2,
    link: "/light/home-corporate",
    image: "/landing-preview/img/demos/01.jpg",
    title: "Corporate",
    mode: "light"
  },
  {
    id: 3,
    link: "/dark/home-onepage",
    image: "/landing-preview/img/demos/2.jpg",
    title: "One page",
    mode: "dark"
  },
  {
    id: 4,
    link: "/light/home-onepage",
    image: "/landing-preview/img/demos/02.jpg",
    title: "One page",
    mode: "light"
  },
  {
    id: 5,
    link: "/dark/home-digital-agency",
    image: "/landing-preview/img/demos/3.jpg",
    title: "Digital Agency",
    mode: "dark"
  },
  {
    id: 6,
    link: "/light/home-digital-agency",
    image: "/landing-preview/img/demos/03.jpg",
    title: "Digital Agency",
    mode: "light"
  },
  {
    id: 7,
    link: "/dark/home-freelancer",
    image: "/landing-preview/img/demos/4.jpg",
    title: "Freelancer",
    mode: "dark"
  },
  {
    id: 8,
    link: "/light/home-freelancer",
    image: "/landing-preview/img/demos/04.jpg",
    title: "Freelancer",
    mode: "light"
  },
  {
    id: 9,
    link: "/dark/home-marketing-agency",
    image: "/landing-preview/img/demos/5.jpg",
    title: "Marketing",
    mode: "dark"
  },
  {
    id: 10,
    link: "/light/home-marketing-agency",
    image: "/landing-preview/img/demos/05.jpg",
    title: "Marketing",
    mode: "light"
  },
  {
    id: 11,
    link: "/dark/home-creative-agency",
    image: "/landing-preview/img/demos/6.jpg",
    title: "Creative agency",
    mode: "dark"
  },
  {
    id: 12,
    link: "/light/home-creative-agency",
    image: "/landing-preview/img/demos/06.jpg",
    title: "Creative agency",
    mode: "light"
  },
  {
    id: 13,
    link: "/dark/home-startup",
    image: "/landing-preview/img/demos/7.jpg",
    title: "Startup Business",
    mode: "dark"
  },
  {
    id: 14,
    link: "/light/home-startup",
    image: "/landing-preview/img/demos/07.jpg",
    title: "Startup Business",
    mode: "light"
  },
  {
    id: 15,
    link: "/dark/home-architecture",
    image: "/landing-preview/img/demos/8.jpg",
    title: "Architecture",
    mode: "dark"
  },
  {
    id: 16,
    link: "/light/home-architecture",
    image: "/landing-preview/img/demos/08.jpg",
    title: "Architecture",
    mode: "light"
  },
  {
    id: 17,
    link: "/dark/showcase-parallax-slider",
    image: "/landing-preview/img/demos/s1.jpg",
    title: "Parallax Full Screen",
    mode: "dark"
  },
  {
    id: 18,
    link: "/dark/showcase-carousel",
    image: "/landing-preview/img/demos/s4.jpg",
    title: "Columns Carousel",
    mode: "dark"
  },
  {
    id: 19,
    link: "/light/showcase-carousel",
    image: "/landing-preview/img/demos/s04.jpg",
    title: "Columns Carousel",
    mode: "light"
  },
  {
    id: 20,
    link: "/dark/showcase-circle-slider",
    image: "/landing-preview/img/demos/s2.jpg",
    title: "Showcase Circle",
    mode: "dark"
  },
  {
    id: 21,
    link: "/dark/showcase-frame-slider",
    image: "/landing-preview/img/demos/s3.jpg",
    title: "Showcase Frame",
    mode: "dark"
  },
  {
    id: 22,
    link: "/dark/showcase-interactive-center-horizontal",
    image: "/landing-preview/img/demos/s5.jpg",
    title: "Interactive",
    mode: "dark"
  },
  {
    id: 23,
    link: "/light/showcase-interactive-center-horizontal",
    image: "/landing-preview/img/demos/s05.jpg",
    title: "Interactive",
    mode: "light"
  }
];
const _sfc_main$6 = {
  __name: "Demos",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "demos section-padding pt-80" }, _attrs))}><div class="container-xxl"><div class="row"><!--[-->`);
      ssrRenderList(unref(data$1), (item) => {
        _push(`<div class="col-lg-4 col-md-6"><div class="item text-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="img"${_scopeId}><img${ssrRenderAttr("src", item.image)} alt=""${_scopeId}></div><h6 class="mt-15"${_scopeId}>${ssrInterpolate(item.title)} `);
              if (item.mode === "light") {
                _push2(`<span${_scopeId}>(Light)</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</h6>`);
            } else {
              return [
                createVNode("div", { class: "img" }, [
                  createVNode("img", {
                    src: item.image,
                    alt: ""
                  }, null, 8, ["src"])
                ]),
                createVNode("h6", { class: "mt-15" }, [
                  createTextVNode(toDisplayString(item.title) + " ", 1),
                  item.mode === "light" ? (openBlock(), createBlock("span", { key: 0 }, "(Light)")) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        if (item.new) {
          _push(`<span class="new">New</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--><div class="col-lg-4 col-md-6"><div class="item text-center"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><h6 class="mt-15">Coming More</h6></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/Demos.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$6;
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-marq skew ontop o-hidden" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-12"><div class="main-marq lrg opacity-4"><div class="slide-har st1 strok"><div class="box"><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div></div><div class="box"><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/Marq.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "Pages",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pages section-padding position-re ontop" }, _attrs))}><div class="container-fluid"><div class="swiper3">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/Pages.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$4;
const data = [
  {
    id: 1,
    link: "/dark/shop-list",
    image: "/landing-preview/img/shop/1.jpg",
    title: "Main Shop",
    mode: "dark",
    "new": true
  },
  {
    id: 2,
    link: "/light/shop-list",
    image: "/landing-preview/img/shop/01.jpg",
    title: "Main Shop",
    mode: "light",
    "new": true
  },
  {
    id: 3,
    link: "/dark/shop-product",
    image: "/landing-preview/img/shop/2.jpg",
    title: "Single Product",
    mode: "dark",
    "new": true
  },
  {
    id: 4,
    link: "/light/shop-product",
    image: "/landing-preview/img/shop/02.jpg",
    title: "Single Product",
    mode: "light",
    "new": true
  },
  {
    id: 5,
    link: "/dark/shop-cart",
    image: "/landing-preview/img/shop/3.jpg",
    title: "Cart",
    mode: "dark",
    "new": true
  },
  {
    id: 6,
    link: "/light/shop-cart",
    image: "/landing-preview/img/shop/03.jpg",
    title: "Cart",
    mode: "light",
    "new": true
  },
  {
    id: 7,
    link: "/dark/shop-checkout",
    image: "/landing-preview/img/shop/4.jpg",
    title: "Checkout",
    mode: "dark",
    "new": true
  },
  {
    id: 8,
    link: "/light/shop-checkout",
    image: "/landing-preview/img/shop/04.jpg",
    title: "Checkout",
    mode: "light",
    "new": true
  }
];
const _sfc_main$3 = {
  __name: "ShopDemos",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "shop-demos section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-lg-head text-center mb-50"><h2 class="fz-50 d-rotate wow"><span class="rotate-text">Carefully crafted.</span><span class="rotate-text">Woocommerce Demos.</span></h2></div></div><div class="container-fluid"><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-lg-3 col-md-6"><div class="item"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""></div><h6>${ssrInterpolate(item.title)}</h6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          target: "_blank"
        }, null, _parent));
        if (item.new) {
          _push(`<span class="new">New</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/ShopDemos.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "CallToAction",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "call-action-img sub-bg" }, _attrs))}><div class="container"><div class="sec-bg-img bg-img parallaxie" data-background="/dark/assets/imgs/background/2.jpg"></div><div class="sec-lg-head section-padding"><div class="row ontop"><div class="col-11 d-flex align-items-center"><div class="valign"><h2 class="fz-50 d-rotate wow"><span class="rotate-text">Build a stunning site today.</span><span class="rotate-text">Let\u2019s <span class="sub-font">get to work</span>.</span></h2></div><div class="ml-auto"><a${ssrRenderAttr("href", unref(data$2).author_link)} class="butn-circle d-flex align-items-center text-center m-auto"><div class="full-width"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span><span class="full-width">Purchase</span></div><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="circle-star"></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/CallToAction.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="sub-footer pt-40 pb-40 ontop sub-bg"><div class="container"><div class="row"><div class="col-lg-4"><div class="logo"><a href="#0"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></a></div></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13">\xA9 2023 Geekfolio is Proudly Powered by <span class="underline"><a${ssrRenderAttr("href", unref(data$2).author_link)} target="_blank">${ssrInterpolate(unref(data$2).author)}</a></span></p></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Preview`,
      bodyAttrs: {
        class: "sub-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PreviewNavbar = __nuxt_component_0;
      const _component_PreviewOverlay = __nuxt_component_1;
      const _component_PreviewHeader = __nuxt_component_2;
      const _component_PreviewDemos = __nuxt_component_3;
      const _component_PreviewMarq = __nuxt_component_4;
      const _component_PreviewPages = __nuxt_component_5;
      const _component_PreviewShopDemos = __nuxt_component_6;
      const _component_PreviewCallToAction = __nuxt_component_7;
      const _component_PreviewFooter = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PreviewNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_PreviewOverlay, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PreviewHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_PreviewDemos, null, null, _parent));
      _push(ssrRenderComponent(_component_PreviewMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_PreviewPages, null, null, _parent));
      _push(ssrRenderComponent(_component_PreviewShopDemos, null, null, _parent));
      _push(ssrRenderComponent(_component_PreviewCallToAction, null, null, _parent));
      _push(ssrRenderComponent(_component_PreviewFooter, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6390f2d4.mjs.map
