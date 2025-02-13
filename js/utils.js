(()=>{var e={debounce:(o,n=0,a=!1)=>{let i;return(...e)=>{var t=a&&!i;clearTimeout(i),i=setTimeout(()=>{i=null,a||o(...e)},n),t&&o(...e)}},throttle:function(n,a,i={}){let r,l,d,s=0,m=()=>{s=!1===i.leading?0:(new Date).getTime(),r=null,n.apply(l,d),r||(l=d=null)};return(...e)=>{var t=(new Date).getTime(),o=(s||!1!==i.leading||(s=t),a-(t-s));l=this,d=e,o<=0||a<o?(r&&(clearTimeout(r),r=null),s=t,n.apply(l,d),r||(l=d=null)):r||!1===i.trailing||(r=setTimeout(m,o))}},overflowPaddingR:{add:()=>{var e,t=window.innerWidth-document.body.clientWidth;0<t&&(document.body.style.paddingRight=t+"px",document.body.style.overflow="hidden",e=document.querySelector("#page-header.nav-fixed #menus"))&&(e.style.paddingRight=t+"px")},remove:()=>{document.body.style.paddingRight="",document.body.style.overflow="";var e=document.querySelector("#page-header.nav-fixed #menus");e&&(e.style.paddingRight="")}},snackbarShow:(e,t=!1,o=2e3)=>{var{position:n,bgLight:a,bgDark:i}=GLOBAL_CONFIG.Snackbar,a="light"===document.documentElement.getAttribute("data-theme")?a:i;Snackbar.show({text:e,backgroundColor:a,showAction:t,duration:o,pos:n,customClass:"snackbar-css"})},diffDate:(e,t=!1)=>{var o=new Date,e=new Date(e),o=(o-e)/1e3/60,n=o/60,a=n/24,i=a/30,r=GLOBAL_CONFIG["dateSuffix"];return t?12<i?e.toISOString().slice(0,10):1<=i?Math.floor(i)+" "+r.month:1<=a?Math.floor(a)+" "+r.day:1<=n?Math.floor(n)+" "+r.hour:1<=o?Math.floor(o)+" "+r.min:r.just:Math.floor(a)},loadComment:(e,o)=>{if("IntersectionObserver"in window){let t=new IntersectionObserver(e=>{e[0].isIntersecting&&(o(),t.disconnect())},{threshold:[0]});t.observe(e)}else o()},scrollToDest:(n,a=500)=>{let i=window.scrollY;var e=document.getElementById("page-header").classList.contains("fixed");if((i>n||e)&&(n-=70),"scrollBehavior"in document.documentElement.style)window.scrollTo({top:n,behavior:"smooth"});else{let t=performance.now(),o=e=>{e-=t,e=Math.min(e/a,1);window.scrollTo(0,i+(n-i)*e),e<1&&requestAnimationFrame(o)};requestAnimationFrame(o)}},animateIn:(e,t)=>{e.style.display="block",e.style.animation=t},animateOut:(e,t)=>{let o=()=>{e.style.display="",e.style.animation="",e.removeEventListener("animationend",o)};e.addEventListener("animationend",o),e.style.animation=t},wrap:(e,t,o)=>{var n,a,i=document.createElement(t);for([n,a]of Object.entries(o))i.setAttribute(n,a);e.parentNode.insertBefore(i,e),i.appendChild(e)},isHidden:e=>0===e.offsetHeight&&0===e.offsetWidth,getEleTop:e=>{let t=e.offsetTop,o=e.offsetParent;for(;null!==o;)t+=o.offsetTop,o=o.offsetParent;return t},loadLightbox:e=>{var t=GLOBAL_CONFIG.lightbox;"medium_zoom"===t&&mediumZoom(e,{background:"var(--zoom-bg)"}),"fancybox"===t&&(Array.from(e).forEach(e=>{var t,o;"A"!==e.parentNode.tagName&&(t=e.dataset.lazySrc||e.src,o=e.title||e.alt||"",btf.wrap(e,"a",{href:t,"data-fancybox":"gallery","data-caption":o,"data-thumb":t}))}),window.fancyboxRun||(Fancybox.bind("[data-fancybox]",{Hash:!1,Thumbs:{showOnStart:!1},Images:{Panzoom:{maxScale:4}},Carousel:{transition:"slide"},Toolbar:{display:{left:["infobar"],middle:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY"],right:["slideshow","thumbs","close"]}}}),window.fancyboxRun=!0))},setLoading:{add:e=>{e.insertAdjacentHTML("afterend",`
        <div class="loading-container">
          <div class="loading-item">
            <div></div><div></div><div></div><div></div><div></div>
          </div>
        </div>
      `)},remove:e=>{e.nextElementSibling.remove()}},updateAnchor:e=>{var t;e!==window.location.hash&&(e=e||location.pathname,t=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:t},t,e))},getScrollPercent:(()=>{let o,n,a,i;return(e,t)=>{o&&t.clientHeight===o||(o=t.clientHeight,n=window.innerHeight,a=t.offsetTop,i=Math.max(o-n,document.documentElement.scrollHeight-n));t=(e-a)/i;return Math.max(0,Math.min(100,Math.round(100*t)))}})(),addEventListenerPjax:(e,t,o,n=!1)=>{e.addEventListener(t,o,n),btf.addGlobalFn("pjaxSendOnce",()=>{e.removeEventListener(t,o,n)})},removeGlobalFnEvent:(e,t=window)=>{t=t.globalFn||{};let o=t[e];o&&(Object.keys(o).forEach(e=>o[e]()),delete t[e])},switchComments:(o=document,n)=>{var a=o.querySelector("#switch-btn");if(a){let e=!1,t=o.querySelector("#post-comment");btf.addEventListenerPjax(a,"click",()=>{t.classList.toggle("move"),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment(o,n))})}}};window.btf={...window.btf,...e}})();