import{S as c,i as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u="43846975-899ff2de6e56efd8caf6f887c",m="https://pixabay.com/api/",f="photo",v="horizontal";function p(r){return fetch(`${m}?key=${u}&q=${r.split(" ").join("+")}&image_type=${f}&orientation=${v}`)}const a=document.querySelector(".gallery"),y=new c(".gallery a");function g(r){a.innerHTML="";const o=r.map(t=>`
            <li class="gallery-item">
                <a href="${t.url}">
                    <div class="image-wrapper">
                        <img
                            src="${t.preview}"
                            alt="${t.tags}"
                        />
                    </div>
                    <div class="image-info">
                        <div class="option likes">
                            <div class="key">Likes</div>
                            <div class="value">${t.likes}</div>
                        </div>
                        <div class="option views">
                            <div class="key">Views</div>
                            <div class="value">${t.views}</div>
                        </div>
                        <div class="option comments">
                            <div class="key">Comments</div>
                            <div class="value">${t.comments}</div>
                        </div>
                        <div class="option downloads">
                            <div class="key">Downloads</div>
                            <div class="value">${t.comments}</div>
                        </div>
                    </div>
                </a>
            </li>
        `).join("");a.insertAdjacentHTML("beforeend",o),y.refresh()}const h="Sorry, there are no images matching your search query. Please try again!",l=document.querySelector("form.form");l.addEventListener("submit",r=>{r.preventDefault();const{search:o}=r.target.elements;if(o.value.trim().length===0)return!1;document.querySelector(".gallery").innerHTML='<span class="loader"></span>',p(o.value.trim()).then(t=>{if(t.ok)return t.json();throw new Error(`Status code: ${t.status}. Message: ${t.statusText||"Something went wrong..."}`)}).then(t=>{const i=t.hits.map(e=>({preview:e.webformatURL,url:e.largeImageURL,tags:e.tags,likes:e.likes,comments:e.comments,downloads:e.downloads,views:e.views}));i.length<1?d.error({title:"No item found",message:h}):g(i)}).catch(t=>{console.log(t)}).finally(()=>{const t=document.querySelector(".loader");t&&t.remove()}),l.reset()});
//# sourceMappingURL=commonHelpers.js.map
