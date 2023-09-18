import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, unref, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_0$3 } from './circle-star-379b5691.mjs';

const _imports_0$2 = "" + publicAssetsURL("dark/assets/imgs/blog/author1.jpg");
const _sfc_main$6 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-header blog-header section-padding pb-0" }, _attrs))}><div class="container mt-80"><div class="row justify-content-center"><div class="col-lg-10"><div class="caption"><div class="sub-title fz-12"><a href="#0"><span>Marketing</span></a><span> , </span><a href="#0"><span>Design</span></a></div><h1 class="fz-55 mt-30">Network of wormholes colonies extraordinary claims require.</h1></div><div class="info d-flex mt-40 align-items-center"><div class="left-info"><div class="d-flex"><div class="author-info"><div class="d-flex align-items-center"><a href="#0" class="circle-60"><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="circle-img"></a><a href="#0" class="ml-20"><span class="opacity-7">Author</span><h6 class="fz-16">ThemesCamp</h6></a></div></div><div class="date ml-50"><a href="#0"><span class="opacity-7">Published</span><h6 class="fz-16">August 6, 2021</h6></a></div></div></div><div class="right-info ml-auto"><div><span class="pe-7s-comment fz-18 mr-10"></span><span class="opacity-7">02 Comments</span></div></div></div></div></div></div><div class="background bg-img parallaxie mt-80" data-background="/dark/assets/imgs/blog/b2.jpg"></div></header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Details/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$1 = "" + publicAssetsURL("dark/assets/imgs/blog/b2.jpg");
const _imports_1$1 = "" + publicAssetsURL("dark/assets/imgs/blog/b3.jpg");
const _sfc_main$5 = {
  __name: "Post",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="main-post"><div class="item pb-60"><div><div class="row justify-content-center"><div class="col-lg-10"><div class="text"><div class="d-flex align-items-center"><span class="fz-60 fw-600 main-color line-height-1 mr-10">A</span><p>new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p></div><p>new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p></div></div></div><div class="row justify-content-center"><div class="col-lg-10"><div class="text"><p>However, Apple might not include it in the Air series when it launches it. As for the notebook\u2019s release date, the 15-inch MacBook isn\u2019t coming soon. It\u2019ll get a late 2023 release at best, according to the new claims.</p></div><div class="title mt-30"><h5 class="fw-600">What sizes do MacBook Airs come in?</h5></div><div class="text mt-20"><p>Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches the pre-2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company discontinued that model in 2017. </p></div></div></div></div><div class="row justify-content-center"><div class="col-lg-10"><div class="post-qoute mt-50"><h6 class="fz-20"><span class="l-block">Increase your site traffic and gain new customers with a beautiful and functional blog.</span><span class="sub-title main-color mt-20 mb-0"> - ThemesCamp Universe</span></h6></div></div></div><div class="mb-50 mt-50"><div class="row"><div class="col-sm-6"><div class="iner-img sm-mb30"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="col-sm-6"><div class="iner-img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div></div></div><div class="row justify-content-center"><div class="col-lg-10"><div class="title mb-10"><h5 class="fw-600">Apple currently sells only one MacBook Air size.</h5></div><div class="text mb-20"><p>A new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p></div><div class="unorder-list mb-30"><h6 class="mb-10">Ordered &amp; Unordered Lists.</h6><ul class="rest"><li>Yet this above sewed flirted opened ouch</li><li>Goldfinch realistic sporadic ingenuous</li><li>Abominable this abidin far successfully then like piquan</li></ul></div><div class="order-list mb-30"><h6 class="mb-10">Ordered &amp; Unordered Lists.</h6><ul class="rest"><li><span>01 -</span> Yet this above sewed flirted opened ouch</li><li><span>02 -</span> Goldfinch realistic sporadic ingenuous</li><li><span>03 -</span> Abominable this abidin far successfully then like piquan</li></ul></div><div class="text"><p>However, Apple might not include it in the Air series when it launches it. As for the notebook\u2019s release date, the 15-inch MacBook isn\u2019t coming soon. It\u2019ll get a late 2023 release at best, according to the new claims.</p></div></div></div></div><div class="info-area flex mt-20 pb-20"><div><div class="tags flex"><div class="valign"><span>Tags :</span></div><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-classic" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tech`);
          } else {
            return [
              createTextVNode("Tech")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-classic" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Geekfolio`);
          } else {
            return [
              createTextVNode("Geekfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ml-auto"><div class="share-icon flex"><div class="valign"><span>Share :</span></div><div><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a><a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a><a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></div></div></div></div><div class="author-area mt-50"><div class="flex"><div class="author-img mr-30"><div class="img"><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="circle-img"></div></div><div class="cont valign"><div class="full-width"><h6 class="fw-600 mb-10">Chris Smith</h6><p>Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.</p></div></div></div></div><div class="next-prv-post flex mt-50"><div class="thumb-post bg-img" data-background="/dark/assets/imgs/blog/b2.jpg">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fz-12 text-u ls1 main-color mb-15"${_scopeId}><i class="pe-7s-angle-left"${_scopeId}></i> Prev Post</span><h6 class="fw-600 fz-16"${_scopeId}>Ways to quickly traffic to <br${_scopeId}> your website.</h6>`);
          } else {
            return [
              createVNode("span", { class: "fz-12 text-u ls1 main-color mb-15" }, [
                createVNode("i", { class: "pe-7s-angle-left" }),
                createTextVNode(" Prev Post")
              ]),
              createVNode("h6", { class: "fw-600 fz-16" }, [
                createTextVNode("Ways to quickly traffic to "),
                createVNode("br"),
                createTextVNode(" your website.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="thumb-post ml-auto text-right bg-img" data-background="/dark/assets/imgs/blog/b3.jpg">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fz-12 text-u ls1 main-color mb-15"${_scopeId}>Next Post <i class="pe-7s-angle-right"${_scopeId}></i></span><h6 class="fw-600 fz-16"${_scopeId}>How to Handle Your Good Employee.</h6>`);
          } else {
            return [
              createVNode("span", { class: "fz-12 text-u ls1 main-color mb-15" }, [
                createTextVNode("Next Post "),
                createVNode("i", { class: "pe-7s-angle-right" })
              ]),
              createVNode("h6", { class: "fw-600 fz-16" }, "How to Handle Your Good Employee.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Details/Post.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/blog/h5.jpg");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/blog/h6.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "recent-posts blog-list-half crev sub-bg section-padding mt-100" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="mb-60"><h3>Recent Posts</h3></div></div></div><div class="row"><div class="col-lg-6 md-mb50"><div class="item mb-30"><div class="row rest"><div class="col-md-6"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-md-6 valign"><div class="cont"><span class="date fz-12 ls1 text-u opacity-7 mb-15">August 6, 2022</span><h5><a href="#0">Free advertising for your online business.</a></h5><div class="tags colorbg mt-15"><a href="#0" class="me-1">Marketing</a><a href="#0">Design</a></div></div></div></div></div></div><div class="col-lg-6"><div class="item mb-30"><div class="row rest"><div class="col-md-6"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="col-md-6 valign"><div class="cont"><span class="date fz-12 ls1 text-u opacity-7 mb-15">August 6, 2022</span><h5><a href="#0">Business meeting 2023 in San Francisco.</a></h5><div class="tags colorbg mt-15"><a href="#0" class="me-1">Marketing</a><a href="#0">Design</a></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Details/RecentPosts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const RecentPosts = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "comments-post section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="text mb-60"><h3>Comments</h3></div></div></div><div class="row justify-content-center"><div class="col-lg-11"><div class="item-box"><div class="row"><div class="col-lg-9"><div class="flex"><div class="user-img mr-30"><div class="img circle-80 line-height-1"><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="circle-img"></div></div><div class="cont"><h6 class="line-height-1">Megan fox</h6><span class="fz-12 ls1 text-u mb-15">14 sept 2021, 07:00 AM</span><p class="fz-14">Ut elementum turpis lorem, id vulputate risus consequat vitae. Morbi eget urna imperdiet, pellentesque nulla id, tempus mauris.</p></div></div></div><div class="col-lg-3 d-flex align-items-center"><div class="replay-post ml-auto"><a href="#0"><span>Replay</span></a></div></div></div></div><div class="item-box replayed"><div class="row"><div class="col-lg-9"><div class="flex"><div class="user-img mr-30"><div class="img circle-80 line-height-1"><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="circle-img"></div></div><div class="cont"><h6 class="line-height-1">Megan fox</h6><span class="fz-12 ls1 text-u mb-15">14 sept 2021, 07:00 AM</span><p class="fz-14">Ut elementum turpis lorem, id vulputate risus consequat vitae. Morbi eget urna imperdiet, pellentesque nulla id, tempus mauris.</p></div></div></div><div class="col-lg-3 d-flex align-items-center"><div class="replay-post ml-auto"><a href="#0"><span>Replay</span></a></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Details/Comments.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Comments = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "comments-from section-padding sub-bg" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="text mb-60"><h3>Leave a comment</h3></div></div></div><div class="row justify-content-center"><div class="col-lg-11"><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div></div><div class="col-12 text-center mt-20"><button type="submit" class="butn-circle"><span class="full-width"><span class="full-width">Post A <br> Comment</span></span><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="circle-star"></button></div></div></form></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Details/CommentsForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CommentsForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Content",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog section-padding pb-0" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(RecentPosts), null, null, _parent));
      _push(ssrRenderComponent(unref(Comments), null, null, _parent));
      _push(ssrRenderComponent(unref(CommentsForm), null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Details/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Details/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-ee55df85.mjs.map
