import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Checkout",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `shop-checkout ${__props.lightMode ? "light" : ""} section-padding`
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6"><div class="order-form md-mb50"><h4 class="mb-40">Billing Details</h4><form action="contact.php"><div class="row"><div class="col-md-6"><div class="form-group"><label for="">First Name *</label><input type="text" name="first_name" required></div></div><div class="col-md-6"><div class="form-group"><label for="">last Name *</label><input type="text" name="last_name" required></div></div><div class="col-12"><div class="form-group"><label for="">Your Email *</label><input type="email" name="email" required></div></div><div class="col-12"><div class="form-group"><label for="">Country *</label><input type="text" name="country" required></div></div><div class="col-md-4"><div class="form-group"><label for="">City / Town *</label><input type="text" name="city" required></div></div><div class="col-md-4"><div class="form-group"><label for="">Area *</label><input type="text" name="area" required></div></div><div class="col-md-4"><div class="form-group"><label for="">Postal Code *</label><input type="text" name="postal_code" required></div></div><div class="col-12"><div class="form-group"><label for="">Address *</label><input type="text" name="address" required></div></div><div class="col-md-6"><div class="form-group"><label for="">Phone *</label><input type="text" name="phone" required></div></div><div class="col-md-6"><div class="form-group"><label for="">Company Name</label><input type="text" name="company_name"></div></div></div></form></div></div><div class="col-lg-5 offset-lg-1"><div class="checkout-order-info"><h4 class="mb-40">Your Order</h4><div><ul class="rest"><li class="mb-5"><div class="d-flex align-items-center"><div><p>Men Hooded</p></div><div class="ml-auto"><h5 class="fz-18">$130.00</h5></div></div></li><li class="mb-5"><div class="d-flex align-items-center"><div><p>Wooden Coffee Table</p></div><div class="ml-auto"><h5 class="fz-18">$85.00</h5></div></div></li><li class="mb-15"><div class="d-flex align-items-center"><div><p>Colored Belt Bag</p></div><div class="ml-auto"><h5 class="fz-18">$60.00</h5></div></div></li><li class="pt-10 bord-thin-top"><div class="d-flex align-items-center"><div><h6>Subtotal</h6></div><div class="ml-auto"><h5 class="main-color4 fz-20">$275.00</h5></div></div></li><li class="pt-10 bord-thin-top bord-thin-bottom"><div class="d-flex align-items-center"><div><h6>Total</h6></div><div class="ml-auto"><h5 class="main-color4 fz-20">$275.00</h5></div></div></li></ul><div class="text mt-40"><p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#0">privacy policy</a>.</p></div><div class="mt-30"><button type="submit" class="main-colorbg4 butn butn-md butn-bg text-dark"><span class="text-u fw-600">Place Order</span></button></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Checkout-ce061d3a.mjs.map
