import { _ as __nuxt_component_0 } from './Navbar-86353f14.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2$1 } from './Services-a87834ca.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_4, b as __nuxt_component_7 } from './Clients-75cbaefe.mjs';
import { _ as __nuxt_component_5 } from './Testimonials-ebf335cd.mjs';
import { _ as __nuxt_component_6 } from './Team-e84209ad.mjs';
import { _ as __nuxt_component_4$1 } from './CallToAction-9f22715c.mjs';
import { _ as __nuxt_component_2$2 } from './Footer-d5f7be9e.mjs';
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
import './app-data-475c97b4.mjs';
import './client-only-29ef7f45.mjs';
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
      subTitle: "About us",
      title: "\u95DC\u65BC\u6211\u5011",
      text: "About Us"
    };
    useHead({
      titleTemplate: `%s - About`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_InnerPagesHeader = __nuxt_component_1;
      const _component_InnerPagesAboutStory = __nuxt_component_2;
      const _component_InnerPagesAboutServices = __nuxt_component_2$1;
      const _component_InnerPagesAboutIntro = __nuxt_component_4;
      const _component_DigitalAgencyTestimonials = __nuxt_component_5;
      const _component_StartupTeam = __nuxt_component_6;
      const _component_InnerPagesAboutClients = __nuxt_component_7;
      const _component_StartupCallToAction = __nuxt_component_4$1;
      const _component_StartupFooter = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_InnerPagesHeader, { data: headerMetadata }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutStory, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutServices, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyTestimonials, { mainColor: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutClients, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupCallToAction, { innerPageStyle: true }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/page-about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-89ddbf0b.mjs.map
