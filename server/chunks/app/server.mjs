import { version, toRef, isRef, hasInjectionContext, getCurrentInstance, inject, ref, watchEffect, watch, useSSRContext, createApp, reactive, unref, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, shallowRef, computed, isReadonly, defineAsyncComponent, isShallow, isReactive, toRaw, withCtx, nextTick, defineComponent, h, Suspense, Transition } from 'vue';
import { $fetch } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { createError as createError$1, sanitizeStatusCode } from 'h3';
import { renderSSRHead } from '@unhead/ssr';
import { getActiveHead, createServerHead as createServerHead$1 } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { createMemoryHistory, createRouter, START_LOCATION, useRoute as useRoute$1, RouterView } from 'vue-router';
import { hasProtocol, parseURL, joinURL } from 'ufo';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { defu } from 'defu';
import { a as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
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

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.5.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 !== "function") {
    return;
  }
  const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a;
  const parallels = [];
  const errors = [];
  for (const plugin2 of plugins2) {
    const promise = applyPlugin(nuxtApp, plugin2);
    if ((_a = plugin2.meta) == null ? void 0 : _a.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = [];
  for (const plugin2 of _plugins2) {
    if (typeof plugin2 !== "function") {
      continue;
    }
    let _plugin = plugin2;
    if (plugin2.length > 1) {
      _plugin = (nuxtApp) => plugin2(nuxtApp, nuxtApp.provide);
    }
    plugins2.push(_plugin);
  }
  plugins2.sort((a, b) => {
    var _a, _b;
    return (((_a = a.meta) == null ? void 0 : _a.order) || orderMap.default) - (((_b = b.meta) == null ? void 0 : _b.order) || orderMap.default);
  });
  return plugins2;
}
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function defineNuxtPlugin(plugin2, meta) {
  var _a;
  if (typeof plugin2 === "function") {
    return /* @__PURE__ */ defineNuxtPlugin({ setup: plugin2 }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin2.hooks) {
      nuxtApp.hooks.addHooks(plugin2.hooks);
    }
    if (plugin2.setup) {
      return plugin2.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: (meta == null ? void 0 : meta.name) || plugin2.name || ((_a = plugin2.setup) == null ? void 0 : _a.name),
    parallel: plugin2.parallel,
    order: (meta == null ? void 0 : meta.order) || plugin2.order || orderMap[plugin2.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin2 = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin2.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }, { "http-equiv": "X-UA-Compatible", "content": "IE=edge" }, { "name": "keywords", "content": "Vue Nuxtjs Template Geekfolio Multi-Purpose themeforest" }, { "name": "description", "content": "Geekfolio - Multi-Purpose Vue Nuxtjs Template" }, { "name": "author", "content": "themescamp" }], "link": [{ "rel": "shortcut icon", "href": "/dark/assets/imgs/favicon.ico" }, { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Epilogue:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" }, { "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" }, { "rel": "stylesheet", "href": "/dark/assets/css/plugins.css" }, { "rel": "stylesheet", "href": "/dark/assets/css/style.css" }], "style": [], "script": [{ "src": "/assets/js/plugins.js" }, { "src": "/assets/js/TweenMax.min.js" }, { "src": "/assets/js/charming.min.js" }, { "src": "/assets/js/countdown.js" }, { "src": "/assets/js/ScrollTrigger.min.js" }, { "src": "/assets/js/gsap.min.js" }, { "src": "/assets/js/splitting.min.js" }, { "src": "/assets/js/isotope.pkgd.min.js" }, { "src": "/assets/js/imgReveal/imagesloaded.pkgd.min.js" }, { "src": "/assets/js/ScrollSmoother.min.js" }, { "src": "/showcase/assets/js/anime.min.js" }, { "src": "/assets/js/scripts.js", "defer": true }], "noscript": [], "title": "Geekfolio", "htmlAttrs": { "lang": "en" } };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      async function redirect() {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return inMiddleware ? (
          /* abort route navigation */
          false
        ) : void 0;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect() : void 0);
        return to;
      }
      return redirect();
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
const __nuxt_page_meta$H = {
  layout: "showcases"
};
const __nuxt_page_meta$G = {
  layout: "showcases"
};
const __nuxt_page_meta$F = {
  layout: "showcases"
};
const __nuxt_page_meta$E = {
  layout: "showcases"
};
const __nuxt_page_meta$D = {
  layout: "showcases"
};
const __nuxt_page_meta$C = {
  layout: "preview"
};
const __nuxt_page_meta$B = {
  layout: "default-light"
};
const __nuxt_page_meta$A = {
  layout: "default-light"
};
const __nuxt_page_meta$z = {
  layout: "default-light"
};
const __nuxt_page_meta$y = {
  layout: "default-light"
};
const __nuxt_page_meta$x = {
  layout: "default-light"
};
const __nuxt_page_meta$w = {
  layout: "default-light"
};
const __nuxt_page_meta$v = {
  layout: "default-light"
};
const __nuxt_page_meta$u = {
  layout: "default-light"
};
const __nuxt_page_meta$t = {
  layout: "default-light"
};
const __nuxt_page_meta$s = {
  layout: "default-light"
};
const __nuxt_page_meta$r = {
  layout: "default-light"
};
const __nuxt_page_meta$q = {
  layout: "default-light"
};
const __nuxt_page_meta$p = {
  layout: "default-light"
};
const __nuxt_page_meta$o = {
  layout: "default-light"
};
const __nuxt_page_meta$n = {
  layout: "default-light"
};
const __nuxt_page_meta$m = {
  layout: "default-light"
};
const __nuxt_page_meta$l = {
  layout: "default-light"
};
const __nuxt_page_meta$k = {
  layout: "default-light"
};
const __nuxt_page_meta$j = {
  layout: "default-light"
};
const __nuxt_page_meta$i = {
  layout: "default-light"
};
const __nuxt_page_meta$h = {
  layout: "default-light"
};
const __nuxt_page_meta$g = {
  layout: "default-light"
};
const __nuxt_page_meta$f = {
  layout: "default-light"
};
const __nuxt_page_meta$e = {
  layout: "default-light"
};
const __nuxt_page_meta$d = {
  layout: "default-light"
};
const __nuxt_page_meta$c = {
  layout: "default-light"
};
const __nuxt_page_meta$b = {
  layout: "default-light"
};
const __nuxt_page_meta$a = {
  layout: "default-light"
};
const __nuxt_page_meta$9 = {
  layout: "default-light"
};
const __nuxt_page_meta$8 = {
  layout: "default-light"
};
const __nuxt_page_meta$7 = {
  layout: "default-light"
};
const __nuxt_page_meta$6 = {
  layout: "showcases-light"
};
const __nuxt_page_meta$5 = {
  layout: "showcases-light"
};
const __nuxt_page_meta$4 = {
  layout: "showcases-light"
};
const __nuxt_page_meta$3 = {
  layout: "showcases-light"
};
const __nuxt_page_meta$2 = {
  layout: "showcases-light"
};
const __nuxt_page_meta$1 = {
  layout: "default-light"
};
const __nuxt_page_meta = {
  layout: "showcases-light"
};
const _routes = [
  {
    name: "dark-blog-classic",
    path: "/dark/blog-classic",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-04f83fd0.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-blog-details",
    path: "/dark/blog-details",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-a80e96ae.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-blog-half-img",
    path: "/dark/blog-half-img",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-9cb735fb.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-blog-list",
    path: "/dark/blog-list",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-fc18911f.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-architecture",
    path: "/dark/home-architecture",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-9ab31fcd.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-corporate",
    path: "/dark/home-corporate",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-b5cad4a9.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-creative-agency",
    path: "/dark/home-creative-agency",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-48546ec3.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-digital-agency",
    path: "/dark/home-digital-agency",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-ef1d3f85.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-freelancer",
    path: "/dark/home-freelancer",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-78ef8088.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-main",
    path: "/dark/home-main",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-306d7ec6.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-marketing-agency",
    path: "/dark/home-marketing-agency",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-005c1146.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-onepage",
    path: "/dark/home-onepage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-79b64833.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-startup",
    path: "/dark/home-startup",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-3664a5aa.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-about",
    path: "/dark/page-about",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-89ddbf0b.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-contact",
    path: "/dark/page-contact",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-cd00e9e6.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-services",
    path: "/dark/page-services",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-d4d1cb6e.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-team",
    path: "/dark/page-team",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-549e974c.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-grid-2",
    path: "/dark/portfolio-grid-2",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-8e9a5c7b.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-grid-3",
    path: "/dark/portfolio-grid-3",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-1ed97f5f.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-grid-4",
    path: "/dark/portfolio-grid-4",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-36f390dd.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-masonry-2",
    path: "/dark/portfolio-masonry-2",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-d971aaa8.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-masonry-3",
    path: "/dark/portfolio-masonry-3",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-272caffb.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-masonry-4",
    path: "/dark/portfolio-masonry-4",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-ebed9ca3.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-metro",
    path: "/dark/portfolio-metro",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-8a66c0dc.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-modern",
    path: "/dark/portfolio-modern",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-0ded322b.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-project-details1",
    path: "/dark/project-details1",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-307c35fe.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-project-details2",
    path: "/dark/project-details2",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-275aa141.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-shop-cart",
    path: "/dark/shop-cart",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-d97a94b2.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-shop-checkout",
    path: "/dark/shop-checkout",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-6272bfc0.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-shop-list",
    path: "/dark/shop-list",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-06499c12.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-shop-product",
    path: "/dark/shop-product",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-b1d9f6a6.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.name) ?? "dark-showcase-carousel",
    path: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.path) ?? "/dark/showcase-carousel",
    meta: __nuxt_page_meta$H || {},
    alias: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.alias) || [],
    redirect: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.redirect) || void 0,
    component: () => import('./_nuxt/index-07dc6d5f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.name) ?? "dark-showcase-circle-slider",
    path: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.path) ?? "/dark/showcase-circle-slider",
    meta: __nuxt_page_meta$G || {},
    alias: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.alias) || [],
    redirect: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.redirect) || void 0,
    component: () => import('./_nuxt/index-89b030d8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.name) ?? "dark-showcase-frame-slider",
    path: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.path) ?? "/dark/showcase-frame-slider",
    meta: __nuxt_page_meta$F || {},
    alias: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.alias) || [],
    redirect: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.redirect) || void 0,
    component: () => import('./_nuxt/index-66904f61.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.name) ?? "dark-showcase-interactive-center-horizontal",
    path: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.path) ?? "/dark/showcase-interactive-center-horizontal",
    meta: __nuxt_page_meta$E || {},
    alias: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.alias) || [],
    redirect: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.redirect) || void 0,
    component: () => import('./_nuxt/index-5dd0384f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.name) ?? "dark-showcase-interactive-center",
    path: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.path) ?? "/dark/showcase-interactive-center",
    meta: __nuxt_page_meta$D || {},
    alias: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.alias) || [],
    redirect: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.redirect) || void 0,
    component: () => import('./_nuxt/index-ef3607bd.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-showcase-parallax-slider",
    path: "/dark/showcase-parallax-slider",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-d812fb07.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-showcase-parallax",
    path: "/dark/showcase-parallax",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-7a7332ba.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.name) ?? "index",
    path: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.path) ?? "/",
    meta: __nuxt_page_meta$C || {},
    alias: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.alias) || [],
    redirect: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.redirect) || void 0,
    component: () => import('./_nuxt/index-6390f2d4.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.name) ?? "light-blog-classic",
    path: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.path) ?? "/light/blog-classic",
    meta: __nuxt_page_meta$B || {},
    alias: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.alias) || [],
    redirect: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.redirect) || void 0,
    component: () => import('./_nuxt/index-9cfe1bdc.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.name) ?? "light-blog-details",
    path: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.path) ?? "/light/blog-details",
    meta: __nuxt_page_meta$A || {},
    alias: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.alias) || [],
    redirect: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.redirect) || void 0,
    component: () => import('./_nuxt/index-d9423bc1.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.name) ?? "light-blog-half-img",
    path: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.path) ?? "/light/blog-half-img",
    meta: __nuxt_page_meta$z || {},
    alias: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.alias) || [],
    redirect: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.redirect) || void 0,
    component: () => import('./_nuxt/index-615f593d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.name) ?? "light-blog-list",
    path: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.path) ?? "/light/blog-list",
    meta: __nuxt_page_meta$y || {},
    alias: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.alias) || [],
    redirect: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.redirect) || void 0,
    component: () => import('./_nuxt/index-e110dc84.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.name) ?? "light-home-architecture",
    path: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.path) ?? "/light/home-architecture",
    meta: __nuxt_page_meta$x || {},
    alias: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.alias) || [],
    redirect: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.redirect) || void 0,
    component: () => import('./_nuxt/index-274509b8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.name) ?? "light-home-corporate",
    path: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.path) ?? "/light/home-corporate",
    meta: __nuxt_page_meta$w || {},
    alias: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.alias) || [],
    redirect: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.redirect) || void 0,
    component: () => import('./_nuxt/index-682f7388.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.name) ?? "light-home-creative-agency",
    path: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.path) ?? "/light/home-creative-agency",
    meta: __nuxt_page_meta$v || {},
    alias: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.alias) || [],
    redirect: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.redirect) || void 0,
    component: () => import('./_nuxt/index-72095141.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.name) ?? "light-home-digital-agency",
    path: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.path) ?? "/light/home-digital-agency",
    meta: __nuxt_page_meta$u || {},
    alias: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.alias) || [],
    redirect: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.redirect) || void 0,
    component: () => import('./_nuxt/index-bb7f7554.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.name) ?? "light-home-freelancer",
    path: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.path) ?? "/light/home-freelancer",
    meta: __nuxt_page_meta$t || {},
    alias: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.alias) || [],
    redirect: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.redirect) || void 0,
    component: () => import('./_nuxt/index-7434dfa9.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.name) ?? "light-home-main",
    path: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.path) ?? "/light/home-main",
    meta: __nuxt_page_meta$s || {},
    alias: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.alias) || [],
    redirect: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.redirect) || void 0,
    component: () => import('./_nuxt/index-b37941e9.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.name) ?? "light-home-marketing-agency",
    path: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.path) ?? "/light/home-marketing-agency",
    meta: __nuxt_page_meta$r || {},
    alias: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.alias) || [],
    redirect: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.redirect) || void 0,
    component: () => import('./_nuxt/index-7a957981.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.name) ?? "light-home-onepage",
    path: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.path) ?? "/light/home-onepage",
    meta: __nuxt_page_meta$q || {},
    alias: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.alias) || [],
    redirect: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.redirect) || void 0,
    component: () => import('./_nuxt/index-c6bff284.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.name) ?? "light-home-startup",
    path: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.path) ?? "/light/home-startup",
    meta: __nuxt_page_meta$p || {},
    alias: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.alias) || [],
    redirect: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.redirect) || void 0,
    component: () => import('./_nuxt/index-cbf106f9.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.name) ?? "light-page-about",
    path: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.path) ?? "/light/page-about",
    meta: __nuxt_page_meta$o || {},
    alias: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.alias) || [],
    redirect: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.redirect) || void 0,
    component: () => import('./_nuxt/index-ca36b64b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.name) ?? "light-page-contact",
    path: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.path) ?? "/light/page-contact",
    meta: __nuxt_page_meta$n || {},
    alias: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.alias) || [],
    redirect: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.redirect) || void 0,
    component: () => import('./_nuxt/index-c661940d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.name) ?? "light-page-services",
    path: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.path) ?? "/light/page-services",
    meta: __nuxt_page_meta$m || {},
    alias: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.alias) || [],
    redirect: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.redirect) || void 0,
    component: () => import('./_nuxt/index-029bf3f0.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.name) ?? "light-page-team",
    path: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.path) ?? "/light/page-team",
    meta: __nuxt_page_meta$l || {},
    alias: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.alias) || [],
    redirect: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.redirect) || void 0,
    component: () => import('./_nuxt/index-eb728bc6.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.name) ?? "light-portfolio-grid-2",
    path: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.path) ?? "/light/portfolio-grid-2",
    meta: __nuxt_page_meta$k || {},
    alias: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.alias) || [],
    redirect: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.redirect) || void 0,
    component: () => import('./_nuxt/index-6760be2f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.name) ?? "light-portfolio-grid-3",
    path: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.path) ?? "/light/portfolio-grid-3",
    meta: __nuxt_page_meta$j || {},
    alias: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.alias) || [],
    redirect: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.redirect) || void 0,
    component: () => import('./_nuxt/index-eb66c34d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.name) ?? "light-portfolio-grid-4",
    path: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.path) ?? "/light/portfolio-grid-4",
    meta: __nuxt_page_meta$i || {},
    alias: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.alias) || [],
    redirect: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.redirect) || void 0,
    component: () => import('./_nuxt/index-d670b6ef.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.name) ?? "light-portfolio-masonry-2",
    path: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.path) ?? "/light/portfolio-masonry-2",
    meta: __nuxt_page_meta$h || {},
    alias: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.alias) || [],
    redirect: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.redirect) || void 0,
    component: () => import('./_nuxt/index-1c6c82c3.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.name) ?? "light-portfolio-masonry-3",
    path: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.path) ?? "/light/portfolio-masonry-3",
    meta: __nuxt_page_meta$g || {},
    alias: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.alias) || [],
    redirect: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.redirect) || void 0,
    component: () => import('./_nuxt/index-50397769.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.name) ?? "light-portfolio-masonry-4",
    path: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.path) ?? "/light/portfolio-masonry-4",
    meta: __nuxt_page_meta$f || {},
    alias: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.alias) || [],
    redirect: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.redirect) || void 0,
    component: () => import('./_nuxt/index-d065e75d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.name) ?? "light-portfolio-metro",
    path: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.path) ?? "/light/portfolio-metro",
    meta: __nuxt_page_meta$e || {},
    alias: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.alias) || [],
    redirect: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect) || void 0,
    component: () => import('./_nuxt/index-7b0581f8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.name) ?? "light-portfolio-modern",
    path: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.path) ?? "/light/portfolio-modern",
    meta: __nuxt_page_meta$d || {},
    alias: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.alias) || [],
    redirect: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect) || void 0,
    component: () => import('./_nuxt/index-1159285b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.name) ?? "light-project-details1",
    path: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.path) ?? "/light/project-details1",
    meta: __nuxt_page_meta$c || {},
    alias: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.alias) || [],
    redirect: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect) || void 0,
    component: () => import('./_nuxt/index-f47ef36c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.name) ?? "light-project-details2",
    path: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.path) ?? "/light/project-details2",
    meta: __nuxt_page_meta$b || {},
    alias: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.alias) || [],
    redirect: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect) || void 0,
    component: () => import('./_nuxt/index-a4080d34.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.name) ?? "light-shop-cart",
    path: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.path) ?? "/light/shop-cart",
    meta: __nuxt_page_meta$a || {},
    alias: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.alias) || [],
    redirect: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect) || void 0,
    component: () => import('./_nuxt/index-77b99a68.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.name) ?? "light-shop-checkout",
    path: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.path) ?? "/light/shop-checkout",
    meta: __nuxt_page_meta$9 || {},
    alias: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.alias) || [],
    redirect: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect) || void 0,
    component: () => import('./_nuxt/index-5a697d3b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.name) ?? "light-shop-list",
    path: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.path) ?? "/light/shop-list",
    meta: __nuxt_page_meta$8 || {},
    alias: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.alias) || [],
    redirect: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect) || void 0,
    component: () => import('./_nuxt/index-ac32f5e4.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.name) ?? "light-shop-product",
    path: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.path) ?? "/light/shop-product",
    meta: __nuxt_page_meta$7 || {},
    alias: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.alias) || [],
    redirect: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect) || void 0,
    component: () => import('./_nuxt/index-be2674ba.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.name) ?? "light-showcase-carousel",
    path: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.path) ?? "/light/showcase-carousel",
    meta: __nuxt_page_meta$6 || {},
    alias: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.alias) || [],
    redirect: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect) || void 0,
    component: () => import('./_nuxt/index-1b8d9cfa.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) ?? "light-showcase-circle-slider",
    path: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) ?? "/light/showcase-circle-slider",
    meta: __nuxt_page_meta$5 || {},
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect) || void 0,
    component: () => import('./_nuxt/index-bfe486fb.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) ?? "light-showcase-frame-slider",
    path: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) ?? "/light/showcase-frame-slider",
    meta: __nuxt_page_meta$4 || {},
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect) || void 0,
    component: () => import('./_nuxt/index-f5447f55.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? "light-showcase-interactive-center-horizontal",
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? "/light/showcase-interactive-center-horizontal",
    meta: __nuxt_page_meta$3 || {},
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect) || void 0,
    component: () => import('./_nuxt/index-451e503c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? "light-showcase-interactive-center",
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? "/light/showcase-interactive-center",
    meta: __nuxt_page_meta$2 || {},
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./_nuxt/index-eb396cbb.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "light-showcase-parallax-slider",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/light/showcase-parallax-slider",
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./_nuxt/index-97a97385.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "light-showcase-parallax",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/light/showcase-parallax",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/index-c3ee8d4c.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a2 = routerOptions.scrollBehavior) == null ? void 0 : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      route[key] = computed(() => _route.value[key]);
    }
    nuxtApp._route = reactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a2;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
}, 1);
const _plugins = [
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  plugin
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
const layouts = {
  "default-light": () => import('./_nuxt/default-light-8f73ceb1.mjs').then((m) => m.default || m),
  default: () => import('./_nuxt/default-5ee48ca7.mjs').then((m) => m.default || m),
  preview: () => import('./_nuxt/preview-3f720312.mjs').then((m) => m.default || m),
  "showcases-light": () => import('./_nuxt/showcases-light-071b1ba7.mjs').then((m) => m.default || m),
  showcases: () => import('./_nuxt/showcases-6d892797.mjs').then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    ...{}
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, context.attrs, context.slots);
    };
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && {
          key: layout.value,
          name: layout.value,
          ...{},
          ...context.attrs
        }, context.slots).default()
      }).default();
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-component-0ee88687.mjs').then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-c6ceb0d6.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useRouter as a, useState as b, createError as c, entry$1 as default, navigateTo as n, useHead as u };
//# sourceMappingURL=server.mjs.map
