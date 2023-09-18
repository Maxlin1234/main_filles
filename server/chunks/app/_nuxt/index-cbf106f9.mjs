import { _ as __nuxt_component_0 } from './Navbar-86353f14.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_8, g as __nuxt_component_9 } from './Blog-cb6ae24c.mjs';
import { _ as __nuxt_component_6$1 } from './Team-e84209ad.mjs';
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
import './sq1-e08776a9.mjs';
import './1-645454db.mjs';
import './ModalVideo-2460fa41.mjs';
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
      titleTemplate: `%s - Startup`,
      bodyAttrs: {
        class: "home-startup main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_StartupHeader = __nuxt_component_1;
      const _component_StartupIntro = __nuxt_component_2;
      const _component_StartupMarq = __nuxt_component_3;
      const _component_StartupServices = __nuxt_component_4;
      const _component_StartupPortfolio = __nuxt_component_5;
      const _component_StartupTestimonials = __nuxt_component_6;
      const _component_StartupTeam = __nuxt_component_6$1;
      const _component_StartupClients = __nuxt_component_8;
      const _component_StartupBlog = __nuxt_component_9;
      const _component_StartupCallToAction = __nuxt_component_4$1;
      const _component_StartupFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        mainBg: true,
        noStatic: true,
        lightMode: true
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_StartupHeader, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupServices, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupTestimonials, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupClients, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupBlog, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupCallToAction, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-startup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cbf106f9.mjs.map
