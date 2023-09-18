import { useSSRContext, onUnmounted, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { i as isInView } from './isInView-318b554b.mjs';

const data = [
  {
    id: 1,
    image: "assets/imgs/portfolio/gallery/1.jpg",
    number: "01.",
    type: "Digital",
    title: "Luxury Glassware",
    text: "We craft premium designs for agencies and global brands around the globe."
  },
  {
    id: 2,
    image: "assets/imgs/portfolio/gallery/2.jpg",
    number: "02.",
    type: "Marketing",
    title: "Brand Identity",
    text: "We craft premium designs for agencies and global brands around the globe."
  },
  {
    id: 3,
    image: "assets/imgs/portfolio/gallery/3.jpg",
    number: "03.",
    type: "Design",
    title: "Roseville Pottery",
    text: "We craft premium designs for agencies and global brands around the globe."
  }
];
const _sfc_main$1 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    onUnmounted(() => {
      window.removeEventListener("scroll", handleShowTabs);
    });
    function handleShowTabs() {
      isInView({
        selector: ".portfolio-fixed .sub-bg .cont",
        isElements: true,
        callback(element) {
          element.classList.add("current");
          document.querySelector("#" + element.getAttribute("data-tab")).classList.add("current");
        },
        whenOutOfView(element) {
          element.classList.remove("current");
          document.querySelector("#" + element.getAttribute("data-tab")).classList.remove("current");
        }
      });
      const leftSide = document.getElementById("sticky_item");
      if (!leftSide)
        return;
      const width = leftSide.getBoundingClientRect().width;
      const portfolio = document.querySelector(".portfolio-fixed").getBoundingClientRect();
      if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom + 400) {
        leftSide.style.position = "fixed";
        leftSide.style.top = "0px";
        leftSide.style.width = width + "px";
        leftSide.classList.remove("is_stuck");
      } else if (portfolio.height / 2 > portfolio.bottom + 400) {
        leftSide.style.position = "absolute";
        leftSide.style.top = "auto";
        leftSide.style.bottom = "0";
        leftSide.style.width = width + "px";
        leftSide.classList.add("is_stuck");
      } else {
        leftSide.style.position = "relative";
        leftSide.style.top = "unset";
        leftSide.style.bottom = "unset";
        leftSide.style.width = "auto";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-fixed" }, _attrs))}><div class="container-fluid rest"><div class="row"><div class="col-lg-6 rest" style="${ssrRenderStyle({ "position": "relative" })}"><div class="left" id="sticky_item"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div${ssrRenderAttr("id", `tab-${index + 1}`)} class="img bg-img"${ssrRenderAttr("data-background", `${__props.lightMode ? "/light/" : "/dark/"}${item.image}`)}></div>`);
      });
      _push(`<!--]--></div></div><div class="col-lg-6 sub-bg right"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="${ssrRenderClass(`cont ${index === 0 ? "active" : ""}`)}"${ssrRenderAttr("data-tab", `tab-${index + 1}`)}><div class="img-hiden"><img${ssrRenderAttr("src", `${__props.lightMode ? "/light/" : "/dark/"}${item.image}`)} alt=""></div><span class="sub-title mb-15">${ssrInterpolate(item.number)} ${ssrInterpolate(item.type)}</span><h2 class="mb-15">${ssrInterpolate(item.title)}.</h2><div class="row justify-content-center"><div class="col-md-11"><p>${ssrInterpolate(item.text)}.</p><ul class="rest list-arrow mt-30"><li><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-16 fw-400">Make your business visible online.</h6></li><li class="mt-5"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-16 fw-400">Make your eCommerce business stand out.</h6></li><li class="mt-5"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-16 fw-400">Grow with your audience.</h6></li></ul><a href="#0" class="butn-circle d-flex align-items-center text-center mt-50"><div class="full-width"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span><span class="full-width">View Details</span></div><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/svg-assets/circle-star.svg`)} alt="" class="circle-star"></a></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Services/Portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-corp section-padding pt-0" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="sec-head mb-40"><h6 class="sub-title">FAQ.</h6></div></div><div class="col-lg-7"><div class="cont"><div class="text"><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">Watch the creative process</span></span><span class="sideup-text"><span class="up-text"><span>behind our digital marketing</span>.</span></span></h2></div><div class="accordion bord mt-40"><div class="item mb-15 wow fadeInUp" data-wow-delay=".1s"><div class="title"><h6 class="fz-18">The Power of Influencer Marketing</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div><div class="item mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6 class="fz-18">Unique and Influential Design</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6 class="fz-18">We Build and Activate Brands</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Services/FAQ.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main;

export { __nuxt_component_3 as _, __nuxt_component_5 as a };
//# sourceMappingURL=FAQ-a25d8afd.mjs.map
