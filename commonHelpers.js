import{a as S,S as $,i}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const b="43846975-899ff2de6e56efd8caf6f887c",q="https://pixabay.com/api/",O="photo",H="horizontal";async function f({searchString:t,page:s=1,perPage:n=15}){let r;try{return r=await S.get(`${q}?key=${b}&q=${t.split(" ").join("+")}&image_type=${O}&orientation=${H}&page=${s}&per_page=${n}`),r}catch(e){throw new Error(e)}}const p=document.querySelector(".gallery"),M=new $(".gallery a");function y(t,s=!0){const n=t.map(r=>`
            <li class="gallery-item">
                <a href="${r.url}">
                    <div class="image-wrapper">
                        <img
                            src="${r.preview}"
                            alt="${r.tags}"
                        />
                    </div>
                    <div class="image-info">
                        <div class="option likes">
                            <div class="key">Likes</div>
                            <div class="value">${r.likes}</div>
                        </div>
                        <div class="option views">
                            <div class="key">Views</div>
                            <div class="value">${r.views}</div>
                        </div>
                        <div class="option comments">
                            <div class="key">Comments</div>
                            <div class="value">${r.comments}</div>
                        </div>
                        <div class="option downloads">
                            <div class="key">Downloads</div>
                            <div class="value">${r.comments}</div>
                        </div>
                    </div>
                </a>
            </li>
        `).join("");s&&v(),p.insertAdjacentHTML("beforeend",n),M.refresh()}function v(){p.innerHTML=""}function d(){document.querySelector(".more").classList.add("hide")}function h(){document.querySelector(".more").classList.remove("hide")}const P="Sorry, there are no images matching your search query. Please try again!";let a=null;const c=document.querySelector(".container"),m=c.querySelector("form.form");let u=1;const g='<span class="loader"></span>';m.addEventListener("submit",async t=>{t.preventDefault();const{search:s}=t.target.elements;if(a=s.value.trim(),!a)return!1;c.insertAdjacentHTML("beforeend",g),v(),d(),u=1;try{const r=(await f({searchString:s.value.trim()})).data.hits.map(e=>w(e));r.length?(y(r),h()):i.error({title:"No item found",message:P})}catch{i.error({title:"Ooops",message:"Some error occured. Please, try later"})}m.reset(),L()});c.addEventListener("click",async t=>{if(t.target.classList.contains("more")&&a){c.insertAdjacentHTML("beforeend",g),d();let s=null;const n=parseFloat(document.querySelector(".gallery-item").getBoundingClientRect().height.toFixed(1));u+=1;try{const r=await f({searchString:a,page:u}),e=r.data.hits.map(o=>w(o));s=r.data.totalHits,h(),y(e,!1),window.scrollBy({top:n*2,behavior:"smooth"})}catch{i.error({title:"Ooops",message:"Some error occured. Please, try later"})}s&&s===document.querySelectorAll(".gallery-item").length&&(i.warning({title:"Oops",message:"We're sorry, but you've reached the end of search results."}),d()),L()}});function w(t){return{preview:t.webformatURL,url:t.largeImageURL,tags:t.tags,likes:t.likes,comments:t.comments,downloads:t.downloads,views:t.views}}function L(){const t=document.querySelector(".loader");t&&t.remove()}
//# sourceMappingURL=commonHelpers.js.map
