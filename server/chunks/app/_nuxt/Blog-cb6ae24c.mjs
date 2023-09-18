import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, onUnmounted } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './sq1-e08776a9.mjs';
import { _ as _imports_1 } from './1-645454db.mjs';
import { _ as _export_sfc, b as useState } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { _ as _sfc_main$a } from './ModalVideo-2460fa41.mjs';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { d as data$5 } from './app-data-475c97b4.mjs';

const _sfc_main$9 = {
  __name: "Header",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-startup full-height valign bord-thin-bottom" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="caption text-center mt-50"><div class="sec-lg-head"><h6 class="dot-titl-non mb-15">Business Startup</h6></div><h1 class="fw-700 fz-80">We\u2019re <span class="img-in-text icon-img-120 radius-30 bg-img"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/about/1.jpg`)}></span> sharp brands <span class="sub-font">creators</span> open for any <span class="icon-img-60"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/star.png`)} alt=""></span> kind of <span class="stroke fw-800">new</span> works </h1></div></div></div></div><div class="arrow-down main-bg"><svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-for-tablet"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.835489 6.51022L15.5607 6.51022L10.9081 1.85764C10.5179 1.46747 10.9555 1.24491 11.3626 0.837776C11.7697 0.430646 11.9923 -0.00687319 12.3825 0.383293L18.7406 6.74141C19.1307 7.13158 19.117 7.77791 18.7099 8.18504L12.0753 14.8196C11.6682 15.2267 11.371 14.7053 11.0739 14.4081C10.7767 14.111 10.2553 13.8138 10.6624 13.4067L15.5173 8.55182L0.792051 8.55182L0.835489 6.51022Z" fill="currentColor"></path></svg></div><div class="bg-pattern-half bg-img opacity-5"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/patern-bg.png`)}></div><div class="bg-pattern-half bg-img opacity-5"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/patern-bg.png`)}></div></header>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$9;
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-imgs section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="img1 md-mb50"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-5 valign"><div class="cont md-mb50"><h6 class="mb-15"><span class="fz-14">01 . </span> Company</h6><p>We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike \u2013 putting passion, pride and plenty of elbow</p><div class="stauts d-flex align-items-center mt-80"><div><h2>20k</h2><p class="fz-14">Satisfied Clients</p></div><div class="ml-auto"><h2>500 +</h2><p class="fz-14">Projects Completed</p></div></div></div></div><div class="col-lg-3"><div class="img1 mt-30"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Intro.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-marq skew ontop" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-12"><div class="main-marq lrg opacity-4"><div class="slide-har st1 strok"><div class="box"><div class="item"><h4>UI-UX Experience</h4></div><div class="item"><h4>Web Development</h4></div><div class="item"><h4>Digital Marketing</h4></div><div class="item"><h4>Product Design</h4></div><div class="item"><h4>Mobile Solutions</h4></div></div><div class="box"><div class="item"><h4>UI-UX Experience</h4></div><div class="item"><h4>Web Development</h4></div><div class="item"><h4>Digital Marketing</h4></div><div class="item"><h4>Product Design</h4></div><div class="item"><h4>Mobile Solutions</h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Marq.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const data$4 = [
  {
    id: 1,
    number: "01",
    title: "Research",
    text: "Consectetur adipiscing elit, sed do eiusmod tempo."
  },
  {
    id: 2,
    number: "02",
    title: "Drawing",
    text: "Consectetur adipiscing elit, sed do eiusmod tempo."
  },
  {
    id: 3,
    number: "03",
    title: "Testing",
    text: "Consectetur adipiscing elit, sed do eiusmod tempo."
  },
  {
    id: 4,
    number: "04",
    title: "Working",
    text: "Consectetur adipiscing elit, sed do eiusmod tempo."
  }
];
const _sfc_main$6 = {
  __name: "Process",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = useState("isOpen", () => false);
    function closeVideo() {
      isOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CommonModalVideo = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "intro-feat section-padding ontop" }, _attrs))}><div class="container section-padding pb-0 bord-thin-top bord-dark"><div class="row justify-content-around"><div class="col-lg-6"><div class="cont md-mb50"><h6 class="mb-15"><span class="fz-14">03 . </span>Our Process</h6><h3 class="mb-30">We help you to go online and increase your <span class="sub-font">Conversion rate.</span></h3><div class="row justify-content-center"><div class="col-md-10"><div class="text"><p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.</p></div></div></div></div></div><div class="col-lg-5 offset-lg-1 valign"><div class="bg-img full-width d-flex align-items-center justify-content-center" data-background="/dark/assets/imgs/background/13.jpg"><div><div class="play-button"><a href="https://youtu.be/AzwC6umvd1s" class="btn vid"><div class="butn-ply"><svg width="80px" height="80px" viewBox="0 0 80 80" preserveAspectRatio="none"><circle class="circle" cx="40" cy="40" r="38" stroke="#c9f31d" strokeWidth="2" fill="none"></circle></svg><i class="fas fa-play"></i></div></a></div></div></div></div></div><div class="process-crev mt-100"><div class="row"><!--[-->`);
      ssrRenderList(unref(data$4), (item) => {
        _push(`<div class="item col-lg-3 col-md-6"><h6 class="mb-10">${ssrInterpolate(item.number)} .</h6><h5 class="fw-600">${ssrInterpolate(item.title)}</h5><p>${ssrInterpolate(item.text)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dark/page-services",
          class: "arrow mt-20"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="fz-12 text-u"${_scopeId}>Read More</span><span class="circle"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></span>`);
            } else {
              return [
                createVNode("span", { class: "fz-12 text-u" }, "Read More"),
                createVNode("span", { class: "circle" }, [
                  (openBlock(), createBlock("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                      fill: "currentColor"
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(_component_CommonModalVideo, {
        channel: "youtube",
        videoId: "AzwC6umvd1s",
        isOpen: unref(isOpen),
        onClose: closeVideo
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Process.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const data$3 = [
  {
    id: 1,
    image: "/assets/imgs/serv-icons/01-dark.svg",
    title: "Creative Vision",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 2,
    image: "/assets/imgs/serv-icons/02-dark.svg",
    title: "Unique Production",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 3,
    image: "/assets/imgs/serv-icons/03-dark.svg",
    title: "Rebranding",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 4,
    image: "/assets/imgs/serv-icons/04-dark.svg",
    title: "Corporate Identity",
    text: "Creating a higher spacing and how people move through a unique."
  },
  {
    id: 5,
    image: "/assets/imgs/serv-icons/01-dark.svg",
    title: "Creative Vision",
    text: "Creating a higher spacing and how people move through a unique."
  }
];
const _sfc_main$5 = {
  __name: "IntServices",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    function handleResize() {
      if (window.innerWidth < 991 && document.querySelector(".metro .items").style.transform) {
        location.reload();
      } else if (window.innerWidth > 991 && !document.querySelector(".metro .items").style.transform) {
        let gallery = document.querySelector(".metro .items");
        let wrapper = document.querySelector(".metro");
        let moveVal = 0;
        let dragging = false, mouseLocation, galleryLocation;
        const easeOutQuad = (t) => {
          return t * (2 - t);
        };
        const moveGallery = () => {
          moveVal = easeOutQuad(window.scrollY * 3e-3);
          gallery.style.transform = `translateX(${moveVal}%)`;
          requestAnimationFrame(moveGallery);
        };
        requestAnimationFrame(moveGallery);
        const dragStart = (e) => {
          dragging = true;
          mouseLocation = e.pageX;
          galleryLocation = wrapper.scrollLeft;
        };
        const dragActive = (e) => {
          if (!dragging)
            return;
          let offset = e.pageX - mouseLocation;
          wrapper.scrollLeft = galleryLocation - offset;
        };
        const dragStop = (e) => {
          dragging = false;
          mouseLocation = e.pageX;
          galleryLocation = wrapper.scrollLeft;
        };
        gallery.addEventListener("mousedown", dragStart);
        gallery.addEventListener("mousemove", dragActive);
        gallery.addEventListener("mouseup", dragStop);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container ontop"><div class="row"><div class="col-lg-4"><h6><span class="fz-14">02 . </span> Services</h6></div><div class="col-lg-6 offset-lg-1"><div class="text"><h3>We create <span class="sub-font">experiences</span> and turn ideas into reality.</h3></div><div class="row mt-40"><div class="col-md-9 offset-md-2"><p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.</p></div></div></div></div></div><div class="metro mt-80 ontop"><div class="items"><!--[-->`);
      ssrRenderList(unref(data$3), (item, index) => {
        _push(`<div class="item"><span class="${ssrRenderClass(`icon icon-img-80 ${index !== unref(data$3).length - 1 ? "mb-40" : ""}`)}"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/${item.image}`)} alt=""></span><h5 class="mb-20 fw-700">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/page-services" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h5><p>${ssrInterpolate(item.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/IntServices.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services section-padding pb-0 bg-gray1 position-re o-hidden radius-30" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), { lightMode: __props.lightMode }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), { lightMode: __props.lightMode }, null, _parent));
      _push(`<div class="bg-pattern bg-img bg-repeat"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/bg-pattern.png`)}></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$4;
const data$2 = [
  {
    id: 1,
    image: "/dark/assets/imgs/portfolio/2/1.jpg",
    year: "2023",
    type: "Branding",
    width: 5
  },
  {
    id: 2,
    image: "/dark/assets/imgs/portfolio/2/3.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  },
  {
    id: 3,
    image: "/dark/assets/imgs/portfolio/2/2.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  },
  {
    id: 4,
    image: "/dark/assets/imgs/portfolio/2/4.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  }
];
const _sfc_main$3 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio section-padding" }, _attrs))}><div class="container"><div class="sec-head md-mb80"><div class="row"><div class="col-lg-4"><h6><span class="fz-14">04 . </span> Our Portfolio</h6></div><div class="col-lg-5 offset-lg-3"><div class="text"><h3 class="lg-text text-u">Case Studies</h3></div></div></div></div><div class="row justify-content-center"><div class="col-lg-5"><div class="item md-mb80"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[0].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">From our gallery</h6><p>${ssrInterpolate(unref(data$2)[0].type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(unref(data$2)[0].year)}</p></div></div></div></div><div class="col-lg-6 valign"><div class="item full-width"><div class="row justify-content-center"><div class="col-lg-8"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[1].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">From our gallery</h6><p>${ssrInterpolate(unref(data$2)[1].type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(unref(data$2)[1].year)}</p></div></div></div></div></div></div><div class="col-lg-6 valign"><div class="item mt-80 full-width"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[2].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">From our gallery</h6><p>${ssrInterpolate(unref(data$2)[2].type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(unref(data$2)[2].year)}</p></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[3].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">From our gallery</h6><p>${ssrInterpolate(unref(data$2)[3].type)}</p></div><div class="ml-auto"><p class="fz-14">\xA9 ${ssrInterpolate(unref(data$2)[3].year)}</p></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Portfolio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `testim-clasic section-padding sub-bg ${__props.lightMode ? "light" : ""}`
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="testim"><div class="testim-swiper">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="swiper-controls"><div class="row"><div class="col-md-8 offset-md-4"><div class="arrows-carsouel testim-controls"><div class="swiper-controls"><div class="swiper-button-prev"><span class="left"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/arrow-right-top.svg`)} alt=""></span></div><div class="swiper-pagination"></div><div class="swiper-button-next"><span class="right"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/arrow-right-top.svg`)} alt=""></span></div></div></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$2;
const data$1 = [
  "/assets/imgs/brands/01.png",
  "/assets/imgs/brands/02.png",
  "/assets/imgs/brands/03.png",
  "/assets/imgs/brands/04.png",
  "/assets/imgs/brands/05.png",
  "/assets/imgs/brands/03.png"
];
const _sfc_main$1 = {
  __name: "Clients",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "clients section-padding pb-100 position-re" }, _attrs))}><div class="container"><div class="row justify-content-center mb-80"><div class="col-lg-6 text-center"><h6><span class="fz-14">06 . </span> Clients</h6><div class="text"><h3>We create <span class="sub-font">experiences</span> and turn ideas into reality.</h3></div></div></div></div><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="row md-marg"><!--[-->`);
      ssrRenderList(unref(data$1), (item) => {
        _push(`<div class="col-md-4 col-6 brand box-bg"><div class="item mb-30 wow fadeIn" data-wow-delay=".6s"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}${item}`)} alt=""></div><a${ssrRenderAttr("href", unref(data$5).author_link)} class="link" data-splitting> www.GeekFolio.com </a></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="bg-pattern patrn1 bg-img opacity-5"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/pattern.svg`)}></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Clients.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$1;
const data = [
  {
    id: 1,
    title: "Exploring our new series on overcoming adversity.",
    cover: "/dark/assets/imgs/blog/b1.jpg",
    author: "admin",
    date: "august 6, 2021",
    tag: "Wordpress"
  },
  {
    id: 2,
    title: "Booktips: eight tips for service design with expert users.",
    cover: "/dark/assets/imgs/blog/b2.jpg",
    author: "admin",
    date: "august 6, 2021",
    tag: "Design"
  },
  {
    id: 3,
    title: "Creativo Para J\xF3venes: the designer\u2019s UI/UX checklist.",
    cover: "/dark/assets/imgs/blog/b3.jpg",
    author: "admin",
    date: "august 6, 2021",
    tag: "Envato"
  }
];
const _sfc_main = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list2 section-padding" }, _attrs))}><div class="container"><div class="row mb-80"><div class="col-lg-4"><h6><span class="fz-14">08 . </span> Latest News</h6></div><div class="col-lg-6 offset-lg-1"><div class="text"><h3>We create <span class="sub-font">experiences</span> and turn ideas into reality.</h3></div></div></div></div><div class="container"><div class="row"><div class="col-12"><div class="items"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="item"><div class="row"><div class="col-lg-2 d-flex align-items-center"><div class="categ fz-13 md-mb30">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-classic" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div><div class="col-lg-5"><div class="title"><h5>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-details" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h5></div></div><div class="col-lg-2 position-re"><div class="img"><img${ssrRenderAttr("src", item.cover)} alt=""></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="info fz-13 ml-auto opacity-7"><span>${ssrInterpolate(item.date)}</span><span class="ml-15 mr-15">/</span><span>By ${ssrInterpolate(item.author)}</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Startup/Blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, __nuxt_component_4 as c, __nuxt_component_5 as d, __nuxt_component_6 as e, __nuxt_component_8 as f, __nuxt_component_9 as g };
//# sourceMappingURL=Blog-cb6ae24c.mjs.map
