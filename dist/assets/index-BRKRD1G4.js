(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d=[{id:"12345",firstname:"Gaetan",lastname:"Emmanuel",cover:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",category:"family",phones:{personnal:"+509 44 26 3331",company:"+509 43 80 8524"},email:"gayetan.an@gmail.com"},{id:"12345",firstname:"Gaetan",lastname:"Emmanuel",cover:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",category:"family",phones:{personnal:"+509 44 26 3331",company:"+509 43 80 8524"},email:"gayetan.an@gmail.com"}],u=document.querySelector(".contacts"),m=d,a={position:{top:0,right:0},activeElement:{id:null,element:null}},p=n=>{const t=document.querySelector(".contacts"),i=n.map(o=>`
        <li class="flex justify-between items-center relative" data-id="${o.id}">
        <div class="flex items-center gap-4">
          <div class="w-10 rounded-full overflow-hidden">
            <img src="${o.cover}">
          </div>
          <div class="grid gap-[2px]">
            <span class="text-base font-bold">${o.firstname} ${o.lastname}</span>
            <span aria-${o.category}
              class="w-fit text-[10px] py-[2px] px-2 aria-[${o.category}]:bg-yellow-300 rounded-md">Family</span>
          </div>
        </div>
        <div>
          <button type="button" class="bg-gray-200 inline-flex p-1 rounded-full">
            <i class='bx bx-dots-vertical-rounded'></i>
          </button>
        </div>

      </li>
        `);t.innerHTML=i.join(" ")},l=n=>{const t=document.createElement("div");t.setAttribute("class","menu absolute bg-red-400"),t.innerHTML="<button>delete</button>",t.style.top=`${a.position.top+12}px`,t.style.right=`${a.position.right??0}px`,n&&n.appendChild(t)},c=()=>{document.querySelector(".menu").remove()},f=(n,t)=>{var i,o,e,r;if(!((i=a.activeElement)!=null&&i.element)){a.position={top:t},a.activeElement.element=n,l(n);return}if(((o=a.activeElement)==null?void 0:o.element)===n){a.activeElement.element=null,c();return}if((e=a.activeElement)!=null&&e.element&&((r=a.activeElement)==null?void 0:r.element)!==n){c(),a.position={top:t},a.activeElement.element=n,l(n);return}};u.addEventListener("click",n=>{var e;const t=n.target,i=(e=t==null?void 0:t.parentElement)==null?void 0:e.parentElement,o=t.getBoundingClientRect();t.tagName==="BUTTON"&&f(i,o.height)});document.addEventListener("DOMContentLoaded",()=>{p(m)});
