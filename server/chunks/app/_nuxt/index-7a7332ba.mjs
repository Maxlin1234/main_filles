import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Menu-300ddcd2.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4, c as __nuxt_component_5 } from './Footer-d90cbd3b.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from '../server.mjs';
import './nuxt-link-6bdec6f5.mjs';
import 'ufo';
import './isInView-318b554b.mjs';
import './app-data-475c97b4.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Parallax`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShowcasesNavigation = __nuxt_component_0;
      const _component_ShowcasesMenu = __nuxt_component_1;
      const _component_ShowcasesVerticalParallax = __nuxt_component_2;
      const _component_ShowcasesVerticalParallaxNumbers = __nuxt_component_3;
      const _component_ShowcasesVerticalParallaxBlock = __nuxt_component_4;
      const _component_ShowcasesVerticalParallaxFooter = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ShowcasesNavigation, null, null, _parent));
      _push(ssrRenderComponent(_component_ShowcasesMenu, null, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_ShowcasesVerticalParallax, null, null, _parent));
      _push(ssrRenderComponent(_component_ShowcasesVerticalParallaxNumbers, null, null, _parent));
      _push(ssrRenderComponent(_component_ShowcasesVerticalParallaxBlock, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_ShowcasesVerticalParallaxFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/showcase-parallax/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-7a7332ba.mjs.map
