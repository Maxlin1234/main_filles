import { _ as __nuxt_component_0 } from './Navbar-86353f14.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_7, g as __nuxt_component_8, h as __nuxt_component_9, i as __nuxt_component_10, j as __nuxt_component_11 } from './Footer-c05fab30.mjs';
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
      titleTemplate: `%s - Architecture`,
      bodyAttrs: {
        class: "home-arch main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_ArchitectureHeader = __nuxt_component_1;
      const _component_ArchitectureBgPattern = __nuxt_component_2;
      const _component_ArchitectureIntro = __nuxt_component_3;
      const _component_ArchitectureClients = __nuxt_component_4;
      const _component_ArchitectureServices = __nuxt_component_5;
      const _component_ArchitecturePortfolio = __nuxt_component_6;
      const _component_ArchitectureAbout = __nuxt_component_7;
      const _component_ArchitectureSectionImage = __nuxt_component_8;
      const _component_ArchitectureTestimonials = __nuxt_component_9;
      const _component_ArchitectureBlog = __nuxt_component_10;
      const _component_ArchitectureFooter = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        mainBg: true,
        lightMode: true
      }, null, _parent));
      _push(`<main class="position-re">`);
      _push(ssrRenderComponent(_component_ArchitectureHeader, null, null, _parent));
      _push(`<div class="block-pattern">`);
      _push(ssrRenderComponent(_component_ArchitectureBgPattern, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureClients, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureServices, { lightMode: true }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ArchitecturePortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureSectionImage, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureTestimonials, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_ArchitectureFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-architecture/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-274509b8.mjs.map
