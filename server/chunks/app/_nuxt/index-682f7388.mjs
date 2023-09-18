import { _ as __nuxt_component_0 } from './LinesTwo-5c84844d.mjs';
import { _ as __nuxt_component_0$1 } from './Navbar-86353f14.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4, c as __nuxt_component_5, d as __nuxt_component_6, e as __nuxt_component_7, f as __nuxt_component_8, g as __nuxt_component_9, h as __nuxt_component_10, i as __nuxt_component_11, j as __nuxt_component_12 } from './Footer-b69072a0.mjs';
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
import './sq1-e08776a9.mjs';
import './sq2-ad2949fc.mjs';
import './ModalVideo-2460fa41.mjs';
import './1-645454db.mjs';
import './app-data-475c97b4.mjs';
import './isInView-318b554b.mjs';
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
      titleTemplate: `%s - Corporate`,
      bodyAttrs: {
        class: "home-corp"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLinesTwo = __nuxt_component_0;
      const _component_CommonNavbar = __nuxt_component_0$1;
      const _component_CorporateHeader = __nuxt_component_2;
      const _component_CorporateServices = __nuxt_component_3;
      const _component_CorporateAbout = __nuxt_component_4;
      const _component_CorporateMarq = __nuxt_component_5;
      const _component_CorporatePortfolio = __nuxt_component_6;
      const _component_CorporateNumbers = __nuxt_component_7;
      const _component_CorporateTestimonials = __nuxt_component_8;
      const _component_CorporateBlock = __nuxt_component_9;
      const _component_CorporatePricing = __nuxt_component_10;
      const _component_CorporateBlog = __nuxt_component_11;
      const _component_CorporateFooter = __nuxt_component_12;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonLinesTwo, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_CorporateHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporateServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CorporateAbout, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CorporateMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporatePortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporateNumbers, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporateTestimonials, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CorporateBlock, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CorporatePricing, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporateBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_CorporateFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-corporate/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-682f7388.mjs.map
