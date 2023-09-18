import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-header section-padding pb-0" }, _attrs))}><div class="container mt-80"><div class="row"><div class="col-lg-8"><div class="caption"><h6 class="sub-title">Our Staff</h6><h1 class="fz-80">Talented team.</h1></div><div class="row"><div class="col-lg-9 offset-lg-1"><div class="text mt-30"><p>We\u2019re a diverse team that works as fancies attention to details, enjoys beers on Friday nights and aspires to design the dent in the universe.</p></div></div></div></div><div class="col-lg-3 valign justify-end"><div class="ml-auto explore"><a href="#0"><div class="circle-button"><div class="rotate-circle fz-30 text-u"><svg class="textcircle" viewBox="0 0 500 500"><defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs><text><textPath xlink:href="#textcircle" textLength="900">Join Our Team - Join Our Team -</textPath></text></svg></div><div class="arrow"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></div></div></a></div></div></div></div><div class="main-marq xlrg section-padding pb-0"><div class="slide-har st1"><div class="box"><div class="item"><h4>Our Team</h4></div><div class="item"><h4>Our Team</h4></div><div class="item"><h4>Our Team</h4></div><div class="item"><h4>Our Team</h4></div><div class="item"><h4>Our Team</h4></div></div><div class="box"><div class="item"><h4>Our Team</h4></div><div class="item"><h4>Our Team</h4></div><div class="item"><h4>Our Team</h4></div><div class="item"><h4>Our Team</h4></div><div class="item"><h4>Our Team</h4></div></div></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Team/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const data = [
  {
    id: 1,
    image: "/dark/assets/imgs/team/1.jpg",
    name: "adrian parody",
    position: "Co-Founder"
  },
  {
    id: 2,
    image: "/dark/assets/imgs/team/2.jpg",
    name: "adrian parody",
    position: "Co-Founder"
  },
  {
    id: 3,
    image: "/dark/assets/imgs/team/3.jpg",
    name: "adrian parody",
    position: "Co-Founder"
  },
  {
    id: 4,
    image: "/dark/assets/imgs/team/4.jpg",
    name: "adrian parody",
    position: "Co-Founder"
  },
  {
    id: 5,
    image: "/dark/assets/imgs/team/1.jpg",
    name: "adrian parody",
    position: "Co-Founder"
  },
  {
    id: 6,
    image: "/dark/assets/imgs/team/2.jpg",
    name: "adrian parody",
    position: "Co-Founder"
  }
];
const _sfc_main$1 = {
  __name: "Members",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-crev section-padding sub-bg" }, _attrs))}><div class="container"><div class="row md-marg"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-lg-4"><div class="swiper-slide mb-50"><div class="item"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""></div><div class="info"><div class="main-marq team-position"><div class="slide-har st1 non-strok"><div class="box"><!--[-->`);
        ssrRenderList(new Array(5).fill(), (_, i) => {
          _push(`<div class="item"><h4>${ssrInterpolate(item.position)}</h4></div>`);
        });
        _push(`<!--]--></div><div class="box"><!--[-->`);
        ssrRenderList(new Array(5).fill(), (_, i) => {
          _push(`<div class="item"><h4>${ssrInterpolate(item.position)}</h4></div>`);
        });
        _push(`<!--]--></div></div></div><div class="main-marq team-name"><div class="slide-har st1 non-strok"><div class="box"><!--[-->`);
        ssrRenderList(new Array(5).fill(), (_, i) => {
          _push(`<div class="item"><h4>${ssrInterpolate(item.name)}</h4></div>`);
        });
        _push(`<!--]--></div><div class="box"><!--[-->`);
        ssrRenderList(new Array(5).fill(), (_, i) => {
          _push(`<div class="item"><h4>${ssrInterpolate(item.name)}</h4></div>`);
        });
        _push(`<!--]--></div></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Team/Members.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testim-crv section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 valign"><div class="sec-lg-head md-mb80"><div class="position-re"><h6 class="dot-titl-non mb-10">What Clients Says?</h6><h2 class="fz-50">Testimonials</h2></div><div class="swiper-controls testim-controls arrow-out d-flex mt-50"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div></div></div></div><div class="col-lg-8"><div class="testim-swiper2">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Team/Testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b };
//# sourceMappingURL=Testimonials-f53e4b1f.mjs.map
