import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_2, a as _imports_1 } from './3-a59dc05e.mjs';

const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `shop-cart ${__props.lightMode ? "light" : ""} section-padding`
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div><table><thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th>\xA0</th></tr></thead><tbody><tr><td data-column="Product"><div class="d-flex align-items-center"><div><div class="img icon-img-80"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div><div class="ml-30"><h6>Men Hooded</h6></div></div></td><td data-column="price"><h5 class="main-color4 fz-18">$130.00</h5></td><td data-column="	Quantity"><div class="counter"><span class="down">-</span><input type="text" value="1"><span class="up">+</span></div></td><td data-column="Subtotal"><h5 class="main-color4 fz-18">$130.00</h5></td><td class="remove"><a href="#0"><span class="pe-7s-close"></span></a></td></tr><tr><td data-column="Product"><div class="d-flex align-items-center"><div><div class="img icon-img-80"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="ml-30"><h6>Men Hooded</h6></div></div></td><td data-column="price"><h5 class="main-color4 fz-18">$130.00</h5></td><td data-column="	Quantity"><div class="counter"><span class="down">-</span><input type="text" value="1"><span class="up">+</span></div></td><td data-column="Subtotal"><h5 class="main-color4 fz-18">$130.00</h5></td><td class="remove"><a href="#0"><span class="pe-7s-close"></span></a></td></tr></tbody></table></div><div class="row mt-80"><div class="col-lg-6"><div class="coupon mt-40"><h4>Discount</h4><p class="fz-13">Enter your coupon code if you have one.</p><form action="contact.php"><div class="form-group d-flex mt-30"><input type="text" name="coupon_code"><button type="submit" class="butn butn-md butn-bord"><span>Apply</span></button></div><span class="fz-13 opacity-7 mt-10">Coupon code</span></form></div></div><div class="col-lg-4 offset-lg-2"><div class="total mt-40"><h4>Cart totals</h4><ul class="rest mt-30"><li class="mb-5"><h6>Subtotal : <span class="fz-16 main-color4 ml-10">$130.00</span></h6></li><li><h6>Total : <span class="fz-16 main-color4 ml-10">$260.00</span></h6></li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/shop-checkout",
        class: `${__props.lightMode ? "main-colorbg4" : "bg-white"} butn butn-md butn-bg text-dark mt-30`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-u fz-13 fw-600"${_scopeId}>Proceed to checkout</span>`);
          } else {
            return [
              createVNode("span", { class: "text-u fz-13 fw-600" }, "Proceed to checkout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Cart-55037515.mjs.map
