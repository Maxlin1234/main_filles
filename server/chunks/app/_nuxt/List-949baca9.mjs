import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as _imports_1, _ as _imports_2 } from './3-a59dc05e.mjs';

const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/shop/1.jpg");
const _sfc_main$2 = {
  __name: "SideMenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-3" }, _attrs))}><div class="sidebar md-mb80"><div class="item search mb-40"><form action="contact.php"><div class="form-group"><input type="text" name="shop_search" placeholder="Search"><button type="submit"><span class="pe-7s-search"></span></button></div></form></div><div class="item categories mb-40"><div class="title"><h6>Categories</h6></div><div class="dot-list"><ul class="rest"><li><a href="#0">Technology</a></li><li><a href="#0">Accessories</a></li><li><a href="#0">Furniture</a></li><li><a href="#0">Clothes</a></li><li><a href="#0">Jewellery</a></li></ul></div></div><div class="item price-range mb-40"><div class="title"><h6>Filter by Price</h6></div><div class="wrapper"><div class="slider-range"><div class="progress"></div></div><div class="range-input"><input type="range" class="range-min" min="10" max="10000" value="10" step="100"><input type="range" class="range-max" min="0" max="10000" value="7500" step="100"></div><div class="price-input d-flex align-items-center mt-15"><div><div class="field"><span>$</span><input type="number" class="input-min" value="10"></div></div><div class="ml-auto"><div class="field"><span>$</span><input type="number" class="input-max" value="7500"></div></div></div></div></div><div class="item best-sale mb-40"><div class="title"><h6>Best Sellers</h6></div><div class="line-list d-flex align-items-center"><div><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div><div class="cont"><div class="rate"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div><h6>Men Hooded</h6><h5>$130.00</h5></div></div><a href="#0" class="over-link"></a></div><div class="line-list d-flex align-items-center"><div><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div><div class="cont"><div class="rate"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div><h6>Men Hooded</h6><h5>$130.00</h5></div></div><a href="#0" class="over-link"></a></div><div class="line-list d-flex align-items-center"><div><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div><div><div class="cont"><div class="rate"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div><h6>Men Hooded</h6><h5>$130.00</h5></div></div><a href="#0" class="over-link"></a></div></div><div class="item tags"><div class="title"><h6>Popular Tags</h6></div><div class="tags-links"><a href="#0">Design</a><a href="#0">Development</a><a href="#0">Tech</a><a href="#0">Blog</a><a href="#0">Branding</a><a href="#0">Mobile</a><a href="#0">ThemesCamp</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/SideMenu.vue");
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
  },
  {
    id: 5,
    image: "/dark/assets/imgs/shop/3.jpg",
    stars: 5,
    name: "Men Hooded",
    price: "130.00"
  },
  {
    id: 6,
    image: "/dark/assets/imgs/shop/6.jpg",
    stars: 3,
    name: "Men Hooded",
    price: "130.00"
  },
  {
    id: 7,
    image: "/dark/assets/imgs/shop/1.jpg",
    stars: 5,
    name: "Men Hooded",
    price: "130.00"
  },
  {
    id: 8,
    image: "/dark/assets/imgs/shop/7.jpg",
    stars: 5,
    name: "Men Hooded",
    price: "130.00"
  },
  {
    id: 9,
    image: "/dark/assets/imgs/shop/9.jpg",
    stars: 4,
    name: "Men Hooded",
    price: "130.00"
  }
];
const _sfc_main$1 = {
  __name: "Products",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-9" }, _attrs))}><div class="shop-products"><div class="top-side d-flex align-items-end mb-40"><div><h6 class="fz-16 line-height-1">Showing 1\u20139 of 12 results</h6></div><div class="ml-auto"><div class="select"><select class="form-control select-hidden"><option value="Most Popular">Most Popular</option><option value="Sort by average rating">Sort by average rating</option><option value="Price [Lowest to Highest]">Price [Lowest to Highest]</option><option value="Price [Highest to Lowest]">Price [Highest to Lowest]</option></select><div class="select-styled">Most Popular</div><ul class="select-options"><li rel="Most Popular">Most Popular</li><li rel="Sort by average rating">Sort by average rating</li><li rel="Price [Lowest to Highest]">Price [Lowest to Highest]</li><li rel="Price [Highest to Lowest]">Price [Highest to Lowest]</li></ul></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-md-6 col-lg-4"><div class="item mb-50"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""><a href="#0" class="add-cart">Add to Cart</a><span class="fav"><i class="far fa-heart"></i></span></div><div class="cont"><div class="rate"><!--[-->`);
        ssrRenderList(new Array(item.stars).fill(), (_, i) => {
          _push(`<i class="fas fa-star"></i>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(new Array(5 - item.stars).fill(), (_, i) => {
          _push(`<i class="far fa-star"></i>`);
        });
        _push(`<!--]--></div><h6>${ssrInterpolate(item.name)}</h6><h5>$${ssrInterpolate(item.price)}</h5></div></div></div>`);
      });
      _push(`<!--]--></div><div class="pagination d-flex justify-content-center mt-30"><ul class="rest"><li class="active"><a href="#0">1</a></li><li><a href="#0">2</a></li><li><a href="#0"><i class="fas fa-chevron-right"></i></a></li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Products.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-shop section-padding" }, _attrs))}><div class="container"><div class="row md-marg">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=List-949baca9.mjs.map
