import { _ as __nuxt_component_0 } from './Navbar-86353f14.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './Services-a87834ca.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_5 } from './FAQ-a25d8afd.mjs';
import { _ as __nuxt_component_4 } from './ServicesTab-227ade59.mjs';
import { _ as __nuxt_component_4$1 } from './CallToAction-9f22715c.mjs';
import { _ as __nuxt_component_2$1 } from './Footer-d5f7be9e.mjs';
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
import './isInView-318b554b.mjs';
import './components-bd5aef6c.mjs';
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
    const headerMetadata = {
      subTitle: "WHAT CAN WE DO ?",
      title: "We combine our passion for design and code.",
      text: "SERVICES"
    };
    useHead({
      titleTemplate: `%s - Services`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_InnerPagesHeader = __nuxt_component_1;
      const _component_InnerPagesAboutServices = __nuxt_component_2;
      const _component_InnerPagesServicesPortfolio = __nuxt_component_3;
      const _component_DigitalAgencyServicesTab = __nuxt_component_4;
      const _component_InnerPagesServicesFAQ = __nuxt_component_5;
      const _component_StartupCallToAction = __nuxt_component_4$1;
      const _component_StartupFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_InnerPagesHeader, { data: headerMetadata }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesServicesPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyServicesTab, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesServicesFAQ, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupCallToAction, { innerPageStyle: true }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/page-services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-029bf3f0.mjs.map
