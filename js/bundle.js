!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11);callBtn.addEventListener("click",(function(){callDialog.showModal()})),callBtnAside.addEventListener("click",(function(){callDialog.showModal()})),callClose.addEventListener("click",(function(){callDialog.close()})),callDialog.addEventListener("click",(function(e){var t=e.currentTarget;e.target===t&&callDialog.close()})),chatBtn.addEventListener("click",(function(){chatDialog.showModal()})),chatBtnAside.addEventListener("click",(function(){chatDialog.showModal()})),chatClose.addEventListener("click",(function(){chatDialog.close()})),chatDialog.addEventListener("click",(function(e){var t=e.currentTarget;e.target===t&&chatDialog.close()}));var i=document.querySelector("#menuBtn"),o=document.querySelector("#closeBtn"),r=document.querySelector(".aside-menu"),a=document.querySelector(".blur");i.addEventListener("click",(function(){r.classList.add("aside-menu--position"),a.classList.add("blur--active")})),o.addEventListener("click",(function(){1==r.classList.contains("aside-menu--position")&&(r.classList.remove("aside-menu--position"),a.classList.remove("blur--active"))})),a.addEventListener("click",(function(){a.classList.contains("blur--active")&&(r.classList.contains("aside-menu--position")&&r.classList.remove("aside-menu--position"),a.classList.remove("blur--active"))}));var s=document.querySelector(".blog__text:nth-of-type(2)"),l=document.querySelector(".blog__next-button");l.addEventListener("click",(function(){s.classList.toggle("blog__text--visible"),l.classList.toggle("blog__next-button--active"),l.textContent=l.classList.contains("blog__next-button--active")?"Скрыть":"Читать далее"}));var c=document.querySelector(".brands__show-all");c.addEventListener("click",(function(e){var t=document.querySelectorAll(".hidden-slide, .hidden-for-tablet");t[0].classList.contains("show-hidden")?(t.forEach((function(e){e.classList.remove("show-hidden")})),c.textContent="Показать все",c.classList.remove("brands__show-all--active")):(t.forEach((function(e){e.className+=" show-hidden"})),c.textContent="Скрыть",c.className+=" brands__show-all--active")}));var d=document.querySelector(".repair__show-all");d.addEventListener("click",(function(e){var t=document.querySelectorAll(".repair-slide-hidden");t[0].classList.contains("show-hidden-forRepair")?(t.forEach((function(e){e.classList.remove("show-hidden-forRepair")})),d.textContent="Показать все",d.classList.remove("repair__show-all--active")):(t.forEach((function(e){e.className+=" show-hidden-forRepair"})),d.textContent="Скрыть",d.className+=" repair__show-all--active")}));var u=document.querySelector(".swiper-wrapper"),p=(document.querySelectorAll(".swiper-slide"),u.querySelector(".swiper-slide:last-child")),w=u.querySelector(".swiper-slide:nth-last-of-type(2)"),f=u.querySelector(".swiper-slide:nth-last-of-type(3)");window.innerWidth<=767&&(f.remove(),w.remove(),p.remove());var b=new Swiper(".swiper-brands",{direction:"horizontal",loop:!0,grabCursor:!0,spaceBetween:20,slidesPerView:"auto",speed:500,pagination:{el:".swiper-brands__swiper-pagination",clickable:!0},keyboard:{enable:!0,onlyInViewport:!0},autoplay:{delay:2e3,disableOnInteraction:!0,stopOnLastSlide:!1}}),y=new Swiper(".swiper-repair",{direction:"horizontal",loop:!0,grabCursor:!0,spaceBetween:20,slidesPerView:"auto",speed:500,pagination:{el:".swiper-repair__swiper-pagination",clickable:!0},keyboard:{enable:!0,onlyInViewport:!0},autoplay:{delay:2e3,disableOnInteraction:!0,stopOnLastSlide:!1}}),v=new Swiper(".swiper-price",{direction:"horizontal",loop:!0,grabCursor:!0,spaceBetween:20,slidesPerView:"auto",speed:500,pagination:{el:".swiper-price__swiper-pagination",clickable:!0},keyboard:{enable:!0,onlyInViewport:!0},autoplay:{delay:2e3,disableOnInteraction:!0,stopOnLastSlide:!1}});window.innerWidth>767&&(b.destroy(),b=0,y.destroy(),y=0,v.destroy(),v=0),window.addEventListener("resize",(function(e){e.target.innerWidth>767&&b?(b.destroy(),b=0,y.destroy(),y=0,v.destroy(),v=0):e.target.innerWidth<=767&&!b&&(b=new Swiper(".swiper-brands",{direction:"horizontal",loop:!0,pagination:{el:".swiper-brands__swiper-pagination",clickable:!0},grabCursor:!0,spaceBetween:20,slidesPerView:"auto",keyboard:{enable:!0,onlyInViewport:!0},autoplay:{delay:2e3,disableOnInteraction:!0,stopOnLastSlide:!1}}),y=new Swiper(".swiper-repair",{direction:"horizontal",loop:!0,grabCursor:!0,spaceBetween:20,slidesPerView:"auto",speed:500,pagination:{el:".swiper-repair__swiper-pagination",clickable:!0},keyboard:{enable:!0,onlyInViewport:!0},autoplay:{delay:2e3,disableOnInteraction:!0,stopOnLastSlide:!1}}),v=new Swiper(".swiper-price",{direction:"horizontal",loop:!0,grabCursor:!0,spaceBetween:20,slidesPerView:"auto",speed:500,pagination:{el:".swiper-price__swiper-pagination",clickable:!0},keyboard:{enable:!0,onlyInViewport:!0},autoplay:{delay:2e3,disableOnInteraction:!0,stopOnLastSlide:!1}}))}),!0)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map