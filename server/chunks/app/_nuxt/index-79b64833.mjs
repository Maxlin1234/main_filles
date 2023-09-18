import { _ as __nuxt_component_0 } from './Navbar-86353f14.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_7, g as __nuxt_component_8, h as __nuxt_component_9, i as __nuxt_component_10, j as __nuxt_component_11, k as __nuxt_component_12 } from './Footer-42458b15.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from '../server.mjs';
import '../../handlers/renderer.mjs';
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
import './nuxt-link-6bdec6f5.mjs';
import './client-only-29ef7f45.mjs';
import './isInView-318b554b.mjs';
import './sq1-e08776a9.mjs';
import './sq2-ad2949fc.mjs';
import './app-data-475c97b4.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - One Page`,
      bodyAttrs: {
        class: "sub-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_OnePageHeader = __nuxt_component_1;
      const _component_OnePageAbout = __nuxt_component_2;
      const _component_OnePageMarq = __nuxt_component_3;
      const _component_OnePageServices = __nuxt_component_4;
      const _component_OnePagePortfolio = __nuxt_component_5;
      const _component_OnePageIntro = __nuxt_component_6;
      const _component_OnePageTestimonials = __nuxt_component_7;
      const _component_OnePageImageSection = __nuxt_component_8;
      const _component_OnePageTeam = __nuxt_component_9;
      const _component_OnePageBlog = __nuxt_component_10;
      const _component_OnePageContact = __nuxt_component_11;
      const _component_OnePageFooter = __nuxt_component_12;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        curve: true,
        noStatic: true
      }, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_OnePageHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageServices, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePagePortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageImageSection, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageBlog, null, null, _parent));
      _push(ssrRenderComponent(_component_OnePageContact, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_OnePageFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-onepage/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-79b64833.mjs.map
