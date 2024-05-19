import{a as S,S as $,i as f}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const b="43846975-899ff2de6e56efd8caf6f887c",q="https://pixabay.com/api/",H="photo",M="horizontal";async function m({searchString:o,page:s=1,perPage:n=15}){let e;try{return e=await S.get(`${q}?key=${b}&q=${o.split(" ").join("+")}&image_type=${H}&orientation=${M}&page=${s}&per_page=${n}`),e}catch(t){throw new Error(t)}}const p=document.querySelector(".gallery"),O=new $(".gallery a");function v(o,s=!0){const n=o.map(e=>`
            <li class="gallery-item">
                <a href="${e.url}">
                    <div class="image-wrapper">
                        <img
                            src="${e.preview}"
                            alt="${e.tags}"
                        />
                    </div>
                    <div class="image-info">
                        <div class="option likes">
                            <div class="key">Likes</div>
                            <div class="value">${e.likes}</div>
                        </div>
                        <div class="option views">
                            <div class="key">Views</div>
                            <div class="value">${e.views}</div>
                        </div>
                        <div class="option comments">
                            <div class="key">Comments</div>
                            <div class="value">${e.comments}</div>
                        </div>
                        <div class="option downloads">
                            <div class="key">Downloads</div>
                            <div class="value">${e.comments}</div>
                        </div>
                    </div>
                </a>
            </li>
        `).join("");s&&y(),p.insertAdjacentHTML("beforeend",n),O.refresh()}function y(){p.innerHTML=""}function l(){document.querySelector(".more").classList.add("hide")}function g(){document.querySelector(".more").classList.remove("hide")}const k="Sorry, there are no images matching your search query. Please try again!";let i=null;const a=document.querySelector(".container"),d=a.querySelector("form.form");let u=1;const h='<span class="loader"></span>';d.addEventListener("submit",async o=>{o.preventDefault();const{search:s}=o.target.elements;if(i=s.value.trim(),!i)return!1;a.insertAdjacentHTML("beforeend",h),y(),l();try{const e=(await m({searchString:s.value.trim()})).data.hits.map(t=>w(t));e.length?(v(e),g()):f.error({title:"No item found",message:k})}catch(n){console.log(n)}d.reset(),L()});a.addEventListener("click",async o=>{if(o.target.classList.contains("more")&&i){a.insertAdjacentHTML("beforeend",h),l();let s=null;const n=parseFloat(document.querySelector(".gallery-item").getBoundingClientRect().height.toFixed(1));u+=1;try{const e=await m({searchString:i,page:u}),t=e.data.hits.map(r=>w(r));s=e.data.totalHits,g(),v(t,!1),window.scrollBy({top:n*2,behavior:"smooth"})}catch(e){console.log(e)}console.log(s),s&&s===document.querySelectorAll(".gallery-item").length&&(f.warning({title:"Oops",message:"We're sorry, but you've reached the end of search results."}),l()),L()}});function w(o){return{preview:o.webformatURL,url:o.largeImageURL,tags:o.tags,likes:o.likes,comments:o.comments,downloads:o.downloads,views:o.views}}function L(){const o=document.querySelector(".loader");o&&o.remove()}
//# sourceMappingURL=commonHelpers.js.map
