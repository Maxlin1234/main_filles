import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-header section-padding sub-bg" }, _attrs))}><div class="container mt-80"><div class="row"><div class="col-lg-7"><div class="caption"><h6 class="sub-title">Contact Us</h6><h1 class="fz-55">\u806F\u7D61\u6211\u5011</h1></div></div><div class="col-lg-5 valign"><div class="text"><p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p></div></div></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Contact/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-crev section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="sec-lg-head mb-80"><h6 class="dot-titl-non mb-10">Get In Touch</h6><h2 class="fz-50">Let&#39;s get in <br> touch with us.</h2><p class="fz-15 mt-10">If you would like to work with us or just want to get in touch, we\u2019d love to hear from you!</p><div class="phone fz-30 fw-600 mt-30 underline"><a href="#0">+1 840 841 25 69</a></div><ul class="rest social-text d-flex mt-60"><li class="mr-30"><a href="#0">Facebook</a></li><li class="mr-30"><a href="#0">Twitter</a></li><li class="mr-30"><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="full-width"><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-md butn-bord radius-30"><span class="text">Let&#39;s Talk</span></button></div></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Contact/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Form-7c90db9d.mjs.map
