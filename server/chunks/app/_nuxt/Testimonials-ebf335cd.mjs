import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const data = [
  {
    id: 1,
    content: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "assets/imgs/testim/4.jpg",
    author: "Leonard Heiser",
    position: "CEO"
  },
  {
    id: 2,
    content: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "assets/imgs/testim/4.jpg",
    author: "Leonard Heiser",
    position: "CEO"
  },
  {
    id: 3,
    content: "I have been hiring people in this space for a number of years and I have never seen this level of professiona lism. It really feels like you are working with a team that can get the job done i have been hiring people in this space for a number of years.",
    image: "assets/imgs/testim/3.jpg",
    author: "Leonard Heiser",
    position: "CEO"
  },
  {
    id: 4,
    content: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "assets/imgs/testim/4.jpg",
    author: "Leonard Heiser",
    position: "CEO"
  }
];
const _sfc_main = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: ["mainColor"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testim-vrt sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 valign"><div class="cont"><div><h6 class="sub-title mb-15">Since From 2008</h6><h3>Keep pushing forward. We&#39;ve got your back.</h3><div class="text mt-10 pb-30 bord-thin-bottom"><p>Things go wrong have questions. We\u2019ve understand. So we have people</p></div><div class="stauts d-flex mt-20"><div class="item d-flex align-items-center mt-30"><h2 class="mr-20">12k</h2><p class="fz-14">Happy Users <br> Around World</p></div><div class="item d-flex align-items-center ml-auto mt-30"><h2 class="mr-20">150k</h2><p class="fz-14">Projects <br> Already Done</p></div></div></div></div></div><div class="col-lg-6 offset-lg-1"><div><div class="main-marqv"><div class="slide-vertical st1"><div class="box"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="item radius-30 mt-30"><div class="cont mb-40"><div class="rate-stars mb-30 fz-12"><span class="${ssrRenderClass(`rate ${__props.mainColor ? "main-color" : "main-color2"}`)}"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span></div><p class="fw-400">${ssrInterpolate(item.content)}</p></div><div class="d-flex align-items-center"><div><div class="img circle-80"><img${ssrRenderAttr("src", `/dark/${item.image}`)} alt="" class="circle-img"></div></div><div class="ml-30"><div class="info"><h6>${ssrInterpolate(item.author)}</h6><span class="${ssrRenderClass(`${__props.mainColor ? "main-color" : "main-color2"} sub-title`)}">${ssrInterpolate(item.position)}</span></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="box"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="item radius-30 mt-30"><div class="cont mb-40"><div class="rate-stars mb-30 fz-12"><span class="rate \${mainColor ? &#39;main-color&#39; : &#39;main-color2&#39;}"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span></div><p class="fw-400">{item.content}</p></div><div class="d-flex align-items-center"><div><div class="img circle-80"><img${ssrRenderAttr("src", `/dark/${item.image}`)} alt="" class="circle-img"></div></div><div class="ml-30"><div class="info"><h6>{item.author}</h6><span class="${ssrRenderClass(`${__props.mainColor ? "main-color" : "main-color2"} sub-title`)}">${ssrInterpolate(item.position)}</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DigitalAgency/Testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main;

export { __nuxt_component_5 as _ };
//# sourceMappingURL=Testimonials-ebf335cd.mjs.map
