import{_ as p}from"./nuxt-link.0172061d.js";import{h as v,o as n,b as r,f as s,e as l,w as d,j as c,H as f,l as g,i as b,u as m,t as k}from"./entry.503b46b5.js";import{i as w}from"./isInView.af5ef8ec.js";import{d as u}from"./app-data.c5e7f44e.js";function x(a,t=.8,o){document.querySelectorAll(a).forEach(i=>{if(i){let _=i.getAttribute("data-background");_||(_=window.getComputedStyle(i).backgroundImage);let h=i.getBoundingClientRect().top*t;i.style.backgroundImage=`url("${_}")`,i.style.backgroundSize="cover",i.style.backgroundRepeat="no-repeat",i.style.backgroundAttachment="fixed",i.style.backgroundPosition=`center ${o!==void 0?o:h}px`,window.addEventListener("scroll",()=>{h=i.getBoundingClientRect().top*t,i.style.backgroundPosition=`center ${h}px`})}})}const $={class:"parallax-show"},y={class:"bg-img inner parallaxie valign","data-background":"/dark/assets/imgs/works/full/1.jpg","data-overlay-dark":"3"},C={class:"container"},j={class:"row justify-content-center"},S={class:"col-lg-10"},A={class:"caption text-center"},E=s("h6",{class:"sub-title mb-30","data-swiper-parallax":"-1000"},"© 2023 Branding",-1),M={class:"bg-img inner parallaxie valign","data-background":"/dark/assets/imgs/works/full/2.jpg","data-overlay-dark":"3"},V={class:"container"},z={class:"row justify-content-center"},L={class:"col-lg-10"},P={class:"caption text-center"},H=s("h6",{class:"sub-title mb-30","data-swiper-parallax":"-1000"},"© 2023 Branding",-1),I={class:"bg-img inner parallaxie valign","data-background":"/dark/assets/imgs/works/full/3.jpg","data-overlay-dark":"3"},N={class:"container"},D={class:"row justify-content-center"},T={class:"col-lg-10"},U={class:"caption text-center"},q=s("h6",{class:"sub-title mb-30","data-swiper-parallax":"-1000"},"© 2023 Branding",-1),F={class:"bg-img inner parallaxie valign","data-background":"/dark/assets/imgs/works/full/4.jpg","data-overlay-dark":"3"},R={class:"container"},W={class:"row justify-content-center"},B={class:"col-lg-10"},G={class:"caption text-center"},O=s("h6",{class:"sub-title mb-30","data-swiper-parallax":"-1000"},"© 2023 Branding",-1),Ls={__name:"index",setup(a){return v(()=>{x(".bg-img.parallaxie",.2)}),(t,o)=>{const e=p;return n(),r("section",$,[s("div",y,[s("div",C,[s("div",j,[s("div",S,[s("div",A,[E,s("h1",null,[l(e,{to:"/project-details1"},{default:d(()=>[c("Snack Midnight")]),_:1})])])])])])]),s("div",M,[s("div",V,[s("div",z,[s("div",L,[s("div",P,[H,s("h1",null,[l(e,{to:"/project-details1"},{default:d(()=>[c("Fisherman Portrait")]),_:1})])])])])])]),s("div",I,[s("div",N,[s("div",D,[s("div",T,[s("div",U,[q,s("h1",null,[l(e,{to:"/project-details1"},{default:d(()=>[c("Tribos Urbanas")]),_:1})])])])])])]),s("div",F,[s("div",R,[s("div",W,[s("div",B,[s("div",G,[O,s("h1",null,[l(e,{to:"/project-details1"},{default:d(()=>[c("Monsoon in the city")]),_:1})])])])])])])])}}},Y={},X={class:"numbers section-padding"},Z=g('<div class="container"><div class="row"><div class="col-lg-3 col-md-6"><div class="item md-mb50"><h2 class="fw-800 stroke">16</h2><h6>Years of Experience</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item md-mb50"><h2 class="fw-800">4<span class="fz-80 fw-600">k</span></h2><h6>Projects Complated</h6></div></div><div class="col-lg-3 col-md-6 d-flex justify-content-around"><div class="item sm-mb50"><h2 class="fw-800 stroke">9<span class="fz-80 fw-600">k</span></h2><h6>Happy Customers</h6></div></div><div class="col-lg-3 col-md-6 d-flex"><div class="item ml-auto"><h2 class="fw-800">12</h2><h6>Awards Winning</h6></div></div></div></div>',1),J=[Z];function K(a,t){return n(),r("section",X,J)}const Ps=f(Y,[["render",K]]),Q={class:"block-sec section-padding pt-0"},ss={class:"container"},ts={class:"row lg-marg"},is={class:"col-lg-6 valign"},as={class:"md-mb50"},os={class:"item-flex d-flex align-items-center mb-50"},es={class:"icon-img-60"},cs=["src"],ls=s("div",{class:"cont ml-50"},[s("h6",null,"High Standerd"),s("p",{class:"fz-15"},"Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")],-1),ds={class:"item-flex d-flex align-items-center"},ns={class:"icon-img-60"},rs=["src"],_s=s("div",{class:"cont ml-50"},[s("h6",null,"Ease of Communication"),s("p",{class:"fz-15"},"Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")],-1),hs=g('<div class="col-lg-6"><div class="cont"><h6 class="sub-title mb-15">Our Value</h6><h3 class="mb-15">Watch the creative process behind our <span class="stroke fw-700 opacity-7">digital marketing</span>.</h3><div class="skills mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="fz-14 mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="fz-14 mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div>',1),Hs={__name:"Block",props:["lightMode"],setup(a){v(()=>{window.addEventListener("scroll",t)}),b(()=>{window.removeEventListener("scroll",t)});function t(){w({selector:".skill-progress .progres",isElements:!0,callback:o=>{o.style.width=o.getAttribute("data-value")}})}return(o,e)=>(n(),r("section",Q,[s("div",ss,[s("div",ts,[s("div",is,[s("div",as,[s("div",os,[s("div",null,[s("div",es,[s("img",{src:`/${a.lightMode?"light":"dark"}/assets/imgs/serv-icons/0.png`,alt:""},null,8,cs)])]),ls]),s("div",ds,[s("div",null,[s("div",ns,[s("img",{src:`/${a.lightMode?"light":"dark"}/assets/imgs/serv-icons/1.png`,alt:""},null,8,rs)])]),_s])])]),hs])])]))}},vs={class:"sub-bg"},gs={class:"footer-container"},ms=g('<div class="container pb-80 pt-80 ontop"><div class="call-box text-center mb-80"><h2><a href="#0">Let&#39;s <span class="stroke"> Discuss</span></a><span class="arrow main-color"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span></h2></div><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>Address</h6></div><div class="text"><p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>Say Hello</h6></div><div class="text"><p class="mb-10"><a href="#0">hello@design.com</a></p><h5><a href="#">+1 840 841 25 69</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>Social</h6></div><ul class="rest social-text"><li><a href="#0">Facebook</a></li><li><a href="#0">Twitter</a></li><li><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"><h6>Newsletter</h6></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div>',1),us={class:"sub-footer pt-40 pb-40 bord-thin-top ontop"},ps={class:"container"},fs={class:"row"},bs={class:"col-lg-4"},ks={class:"logo"},ws={href:"#0"},xs=["src"],$s={class:"col-lg-8"},ys={class:"copyright d-flex"},Cs={class:"ml-auto"},js={class:"fz-13"},Ss={class:"underline"},As=["href"],Is={__name:"Footer",props:["lightMode"],setup(a){return v(()=>{if(window.innerWidth>991){gsap.set(".footer-container",{yPercent:-50});const t=gsap.timeline({paused:!0});t.to(".footer-container",{yPercent:0,ease:"none"}),ScrollTrigger.create({trigger:"main",start:"bottom bottom",end:"+=50%",animation:t,scrub:!0})}}),(t,o)=>(n(),r("footer",vs,[s("div",gs,[ms,s("div",us,[s("div",ps,[s("div",fs,[s("div",bs,[s("div",ks,[s("a",ws,[s("img",{src:`/dark/assets/imgs/logo-${a.lightMode?"dark":"light"}.png`,alt:""},null,8,xs)])])]),s("div",$s,[s("div",ys,[s("div",Cs,[s("p",js,[c("© 2023 Geekfolio is Proudly Powered by "),s("span",Ss,[s("a",{href:m(u).author_link,target:"_blank"},k(m(u).author),9,As)])])])])])])])])])]))}};export{Ls as _,Ps as a,Hs as b,Is as c};
