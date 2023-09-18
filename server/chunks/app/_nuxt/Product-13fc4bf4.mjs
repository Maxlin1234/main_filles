import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { b as useState } from '../server.mjs';

const _sfc_main$3 = {
  __name: "ProductInfo",
  __ssrInlineRender: true,
  setup(__props) {
    useState("galleryThumbs", () => null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row justify-content-center" }, _attrs))}><div class="col-lg-4"><div class="img-preview md-mb50"><div class="gallery-top">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="gallery-thumb mt-10">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div><div class="col-lg-6 offset-lg-1"><div class="product-info"><div class="top-info"><h6 class="main-color4">$130.00</h6><div class="d-flex align-items-center"><div><h4 class="line-height-1">Men Hooded</h4></div><div class="ml-auto"><div class="d-flex align-items-center"><div><div class="rate fz-12 opacity-7"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div></div><div class="ml-10"><p class="fz-13">(1 Review)</p></div></div></div></div><div class="text mt-30"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut pellentesque ante. Quisque at viver neque. Duis consectetur nisl at vehicular.</p></div><div class="dot-list mt-30"><ul class="rest"><li class="mb-15">Adjustable drawstrings at the hood</li><li>Welt pockets at waist</li></ul></div></div><div class="prod-order pt-30 pb-30 mt-50 bord-thin-top bord-thin-bottom"><div class="d-flex align-items-center"><div><div class="counter"><span class="down">-</span><input type="text" value="1"><span class="up">+</span></div></div><div class="ml-auto"><a href="#0" class="butn butn-md butn-bord"><span class="text-u fz-13">Add To Cart</span></a></div></div></div><div class="mt-40"><ul class="rest"><li class="d-flex align-items-center mb-15"><strong>SKU :</strong><span class="ml-10">8552635</span></li><li class="d-flex align-items-center mb-15"><strong>CATEGORY :</strong><span class="ml-10"><a href="#0">Clothes</a></span></li><li class="d-flex align-items-center"><strong>TAG :</strong><span class="ml-10"><a href="#0">Men</a> , <a href="#0">Women</a> , <a href="#0">Jacket</a></span></li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/testim/1.jpg");
const _sfc_main$2 = {
  __name: "ProductDetails",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row justify-content-center mt-100" }, _attrs))}><div class="col-lg-11"><div class="overview" id="tabs"><ul class="rest tab-links mb-30"><li class="item-link current" data-tab="tabs-1"><h6>Description</h6></li><li class="item-link" data-tab="tabs-2"><h6>Information</h6></li><li class="item-link" data-tab="tabs-3"><h6>Reviews (1)</h6></li></ul><div class="tab-cont"><div class="tab-content current" id="tabs-1"><div class="item"><div class="text"><p class="mb-15">Percentage off promotions, discounts, or sale markdowns are most customarily based on our own opinion of the value of this product, which is not intended to reflect a former price at which this product has sold in the recent past.</p><p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eget neque eu ipsum laoreet molestie nec vel nulla. Aenean iaculis, neque ultricies efficitur ultricies, risus sapien dapibus ante, ac venenatis nisi est nec sem. Vestibulum blandit tincidunt felis a cursus. Donec eu tortor vitae metus scelerisque sollicitudin ut congue est.</p></div></div></div><div class="tab-content" id="tabs-2"><div class="item info"><ul class="rest"><li class="d-flex align-items-center mb-15"><span class="text-u fw-500">Color</span><span class="line"></span><span class="ml-auto">Blue, Gray, Green, Red</span></li><li class="d-flex align-items-center mb-15"><span class="text-u fw-500">Size</span><span class="line"></span><span class="ml-auto">Large, Medium, Small</span></li><li class="d-flex align-items-center mb-15"><span class="text-u fw-500">Material</span><span class="line"></span><span class="ml-auto">Cotton, Lather, Silk</span></li></ul></div></div><div class="tab-content" id="tabs-3"><div class="item reviews"><div class="reviews-area"><div class="d-flex"><div><div class="img circle-100"><img${ssrRenderAttr("src", _imports_0)} alt="" class="circle-img"></div></div><div class="cont ml-30"><div class="rate fz-12 opacity-7 mb-10"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><h6 class="fz-17 fw-400">Evie Howarth \u2013 <span class="fz-14 opacity-7">February 10, 2023</span></h6><p>Aenean iaculis, neque ultricies efficitur ultricies, risus sapien dapibus ante, ac venenatis nisi est nec sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut pellentesque ante.</p></div></div></div><div class="add-review mt-50"><div><h6>Add a review</h6><p class="fz-14">Your email address will not be published. Required fields are marked *</p></div><div class="d-flex align-items-center mt-30"><div><p class="fz-13">Your Rating</p></div><div><div class="star-rating ml-10"><input id="star-5" type="radio" name="rating" value="star-5"><label for="star-5" title="5 stars"><i class="active fas fa-star" aria-hidden="true"></i></label><input id="star-4" type="radio" name="rating" value="star-4"><label for="star-4" title="4 stars"><i class="active fas fa-star" aria-hidden="true"></i></label><input id="star-3" type="radio" name="rating" value="star-3"><label for="star-3" title="3 stars"><i class="active fas fa-star" aria-hidden="true"></i></label><input id="star-2" type="radio" name="rating" value="star-2"><label for="star-2" title="2 stars"><i class="active fas fa-star" aria-hidden="true"></i></label><input id="star-1" type="radio" name="rating" value="star-1"><label for="star-1" title="1 star"><i class="active fas fa-star" aria-hidden="true"></i></label></div></div></div><div class="form mt-50"><form action="contact.php"><div class="row"><div class="col-lg-6"><div class="form-group mb-30"><input type="text" name="name" placeholder="Your Name*" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input type="email" name="email" placeholder="Your Email*" required></div></div><div class="col-12"><div class="form-group"><textarea name="comment" placeholder="Your Review*"></textarea></div></div><div class="col-12"><div class="checkbox mt-10"><input type="checkbox" id="saveInfo" name="userinfo" value="userinfo"><label for="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label></div></div><div class="col-12"><div class="text-center mt-40"><button type="submit" class="butn butn-md butn-bord"><span>Submit</span></button></div></div></div></form></div></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const data = [
  {
    id: 1,
    image: "/dark/assets/imgs/shop/5.jpg",
    stars: 5,
    name: "Men Hooded",
    price: "130.00"
  },
  {
    id: 2,
    image: "/dark/assets/imgs/shop/4.jpg",
    stars: 4,
    name: "Men Hooded",
    price: "130.00"
  },
  {
    id: 3,
    image: "/dark/assets/imgs/shop/8.jpg",
    stars: 5,
    name: "Men Hooded",
    price: "130.00"
  },
  {
    id: 4,
    image: "/dark/assets/imgs/shop/2.jpg",
    stars: 4,
    name: "Men Hooded",
    price: "130.00"
  }
];
const _sfc_main$1 = {
  __name: "RelatedProducts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row justify-content-center mt-100" }, _attrs))}><div class="col-lg-11"><div class="main-shop"><div class="shop-products"><div><h4>Related products</h4></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-lg-3 col-md-6"><div class="item mt-50"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""><a href="#0" class="add-cart">Add to Cart</a><span class="fav"><i class="far fa-heart"></i></span></div><div class="cont"><div class="rate"><!--[-->`);
        ssrRenderList(new Array(item.stars).fill(), (_, i) => {
          _push(`<i class="fas fa-star"></i>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(new Array(5 - item.stars).fill(), (_, i) => {
          _push(`<i class="far fa-star"></i>`);
        });
        _push(`<!--]--></div><h6>${ssrInterpolate(item.name)}</h6><h5>$${ssrInterpolate(item.price)}</h5></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/RelatedProducts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-details section-padding" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Product-13fc4bf4.mjs.map
