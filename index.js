import{a as f,S as u,i}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="50363582-3c1b565cf4c5725a0a7e76bfc",y="https://pixabay.com/api/";async function g(o){return(await f.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".gallery"),d=document.querySelector(".loader");new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="info">
            <div class="info-item">
              <p class="label">Likes</p>
              <p class="value">${t.likes}</p>
            </div>
            <div class="info-item">
              <p class="label">Views</p>
              <p class="value">${t.views}</p>
            </div>
            <div class="info-item">
              <p class="label">Comments</p>
              <p class="value">${t.comments}</p>
            </div>
            <div class="info-item">
              <p class="label">Downloads</p>
              <p class="value">${t.downloads}</p>
            </div>
          </div>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",s)}function v(){p.innerHTML=""}function L(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const n=document.querySelector(".form"),b=n.querySelector('input[type="text"]'),w=new u(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",async o=>{o.preventDefault();const s=b.value.trim();if(s===""){i.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}v(),L();try{const t=await g(s);if(c(),t.hits.length===0){i.info({title:"No Results",message:"No images found. Please try another query.",position:"topRight"});return}h(t.hits),w.refresh()}catch(t){c(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}n.reset()});
//# sourceMappingURL=index.js.map
