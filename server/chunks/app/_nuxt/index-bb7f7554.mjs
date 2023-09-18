import { _ as __nuxt_component_0 } from './LinesTwo-5c84844d.mjs';
import { _ as __nuxt_component_0$1 } from './Navbar-86353f14.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4, c as __nuxt_component_5, d as __nuxt_component_6, e as __nuxt_component_8, f as __nuxt_component_10, g as __nuxt_component_11, h as __nuxt_component_12, i as __nuxt_component_13 } from './Footer-fb7c5975.mjs';
import { _ as __nuxt_component_4$1 } from './ServicesTab-227ade59.mjs';
import { _ as __nuxt_component_5$1 } from './Testimonials-ebf335cd.mjs';
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
import './StatementSplitter-e87ceb66.mjs';
import './ModalVideo-2460fa41.mjs';
import './client-only-29ef7f45.mjs';
import './app-data-475c97b4.mjs';
import './components-bd5aef6c.mjs';
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
      titleTemplate: `%s - Digital Agency`,
      bodyAttrs: {
        class: "home-digital sub-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLinesTwo = __nuxt_component_0;
      const _component_CommonNavbar = __nuxt_component_0$1;
      const _component_DigitalAgencyHeader = __nuxt_component_2;
      const _component_DigitalAgencyServices = __nuxt_component_3;
      const _component_DigitalAgencyBlock = __nuxt_component_4;
      const _component_DigitalAgencyPortfolio = __nuxt_component_5;
      const _component_DigitalAgencyPrice = __nuxt_component_6;
      const _component_DigitalAgencyServicesTab = __nuxt_component_4$1;
      const _component_DigitalAgencyClients = __nuxt_component_8;
      const _component_DigitalAgencyTestimonials = __nuxt_component_5$1;
      const _component_DigitalAgencyApproach = __nuxt_component_10;
      const _component_DigitalAgencyCallToAction = __nuxt_component_11;
      const _component_DigitalAgencyBlog = __nuxt_component_12;
      const _component_DigitalAgencyFooter = __nuxt_component_13;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonLinesTwo, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyHeader, { lightMode: true }, null, _parent));
      _push(`<main class="position-re">`);
      _push(ssrRenderComponent(_component_DigitalAgencyServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyBlock, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyPrice, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyServicesTab, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyClients, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyApproach, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyCallToAction, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_DigitalAgencyFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-digital-agency/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bb7f7554.mjs.map
