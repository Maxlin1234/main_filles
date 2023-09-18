import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, onUnmounted, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { i as isInView } from './isInView-318b554b.mjs';
import { d as data } from './app-data-475c97b4.mjs';

const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "parallax-show" }, _attrs))}><div class="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/1.jpg" data-overlay-dark="3"><div class="container"><div class="row justify-content-center"><div class="col-lg-10"><div class="caption text-center"><h6 class="sub-title mb-30" data-swiper-parallax="-1000">\xA9 2023 Branding</h6><h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/project-details1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Snack Midnight`);
          } else {
            return [
              createTextVNode("Snack Midnight")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1></div></div></div></div></div><div class="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/2.jpg" data-overlay-dark="3"><div class="container"><div class="row justify-content-center"><div class="col-lg-10"><div class="caption text-center"><h6 class="sub-title mb-30" data-swiper-parallax="-1000">\xA9 2023 Branding</h6><h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/project-details1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fisherman Portrait`);
          } else {
            return [
              createTextVNode("Fisherman Portrait")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1></div></div></div></div></div><div class="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/3.jpg" data-overlay-dark="3"><div class="container"><div class="row justify-content-center"><div class="col-lg-10"><div class="caption text-center"><h6 class="sub-title mb-30" data-swiper-parallax="-1000">\xA9 2023 Branding</h6><h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/project-details1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tribos Urbanas`);
          } else {
            return [
              createTextVNode("Tribos Urbanas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1></div></div></div></div></div><div class="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/4.jpg" data-overlay-dark="3"><div class="container"><div class="row justify-content-center"><div class="col-lg-10"><div class="caption text-center"><h6 class="sub-title mb-30" data-swiper-parallax="-1000">\xA9 2023 Branding</h6><h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/project-details1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Monsoon in the city`);
          } else {
            return [
              createTextVNode("Monsoon in the city")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/VerticalParallax/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "numbers section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-3 col-md-6"><div class="item md-mb50"><h2 class="fw-800 stroke">16</h2><h6>Years of Experience</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item md-mb50"><h2 class="fw-800">4<span class="fz-80 fw-600">k</span></h2><h6>Projects Complated</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item sm-mb50"><h2 class="fw-800 stroke">9<span class="fz-80 fw-600">k</span></h2><h6>Happy Customers</h6></div></div><div class="col-lg-3 col-md-6 d-flex"><div class="item ml-auto"><h2 class="fw-800">12</h2><h6>Awards Winning</h6></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/VerticalParallax/Numbers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Block",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    onUnmounted(() => {
      window.removeEventListener("scroll", handleShowProgressValues);
    });
    function handleShowProgressValues() {
      isInView({
        selector: ".skill-progress .progres",
        isElements: true,
        callback: (element) => {
          element.style.width = element.getAttribute("data-value");
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "block-sec section-padding pt-0" }, _attrs))}><div class="container"><div class="row lg-marg"><div class="col-lg-6 valign"><div class="md-mb50"><div class="item-flex d-flex align-items-center mb-50"><div><div class="icon-img-60"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/0.png`)} alt=""></div></div><div class="cont ml-50"><h6>High Standerd</h6><p class="fz-15">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div><div class="item-flex d-flex align-items-center"><div><div class="icon-img-60"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/serv-icons/1.png`)} alt=""></div></div><div class="cont ml-50"><h6>Ease of Communication</h6><p class="fz-15">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div></div></div><div class="col-lg-6"><div class="cont"><h6 class="sub-title mb-15">Our Value</h6><h3 class="mb-15">Watch the creative process behind our <span class="stroke fw-700 opacity-7">digital marketing</span>.</h3><div class="skills mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="fz-14 mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="fz-14 mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/VerticalParallax/Block.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sub-bg" }, _attrs))}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="call-box text-center mb-80"><h2><a href="#0">Let&#39;s <span class="stroke"> Discuss</span></a><span class="arrow main-color"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span></h2></div><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>Address</h6></div><div class="text"><p>Germany \u2014 785 15h Street, Office 478 Berlin, De 81566</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>Say Hello</h6></div><div class="text"><p class="mb-10"><a href="#0">hello@design.com</a></p><h5><a href="#">+1 840 841 25 69</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>Social</h6></div><ul class="rest social-text"><li><a href="#0">Facebook</a></li><li><a href="#0">Twitter</a></li><li><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"><h6>Newsletter</h6></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top ontop"><div class="container"><div class="row"><div class="col-lg-4"><div class="logo"><a href="#0"><img${ssrRenderAttr("src", `/dark/assets/imgs/logo-${__props.lightMode ? "dark" : "light"}.png`)} alt=""></a></div></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13">\xA9 2023 Geekfolio is Proudly Powered by <span class="underline"><a${ssrRenderAttr("href", unref(data).author_link)} target="_blank">${ssrInterpolate(unref(data).author)}</a></span></p></div></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/VerticalParallax/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main;

export { __nuxt_component_2 as _, __nuxt_component_3 as a, __nuxt_component_4 as b, __nuxt_component_5 as c };
//# sourceMappingURL=Footer-d90cbd3b.mjs.map
