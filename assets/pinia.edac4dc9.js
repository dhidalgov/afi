import{b as A,k as w}from"./index.30038687.js";const O=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,$=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,E=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function P(r,t){if(r==="__proto__"||r==="constructor"&&t&&typeof t=="object"&&"prototype"in t){h(r);return}return t}function h(r){console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`)}function z(r,t={}){if(typeof r!="string")return r;const i=r.trim();if(r[0]==='"'&&r.endsWith('"')&&!r.includes("\\"))return i.slice(1,-1);if(i.length<=9){const e=i.toLowerCase();if(e==="true")return!0;if(e==="false")return!1;if(e==="undefined")return;if(e==="null")return null;if(e==="nan")return Number.NaN;if(e==="infinity")return Number.POSITIVE_INFINITY;if(e==="-infinity")return Number.NEGATIVE_INFINITY}if(!E.test(r)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return r}try{if(O.test(r)||$.test(r)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(r,P)}return JSON.parse(r)}catch(e){if(t.strict)throw e;return r}}function F(r,t){if(r==null)return;let i=r;for(let e=0;e<t.length;e++){if(i==null||i[t[e]]==null)return;i=i[t[e]]}return i}function d(r,t,i){if(i.length===0)return t;const e=i[0];return i.length>1&&(t=d(typeof r!="object"||r===null||!Object.prototype.hasOwnProperty.call(r,e)?Number.isInteger(Number(i[1]))?[]:{}:r[e],t,Array.prototype.slice.call(i,1))),Number.isInteger(Number(e))&&Array.isArray(r)?r.slice()[e]:Object.assign({},r,{[e]:t})}function N(r,t){if(r==null||t.length===0)return r;if(t.length===1){if(r==null)return r;if(Number.isInteger(t[0])&&Array.isArray(r))return Array.prototype.slice.call(r,0).splice(t[0],1);const i={};for(const e in r)i[e]=r[e];return delete i[t[0]],i}if(r[t[0]]==null){if(Number.isInteger(t[0])&&Array.isArray(r))return Array.prototype.concat.call([],r);const i={};for(const e in r)i[e]=r[e];return i}return d(r,N(r[t[0]],Array.prototype.slice.call(t,1)),[t[0]])}function I(r,t){return t.map(i=>i.split(".")).map(i=>[i,F(r,i)]).filter(i=>i[1]!==void 0).reduce((i,e)=>d(i,e[1],e[0]),{})}function _(r,t){return t.map(i=>i.split(".")).reduce((i,e)=>N(i,e),r)}function g(r,{storage:t,serializer:i,key:e,debug:s,pick:u,omit:l,beforeHydrate:o,afterHydrate:n},c,a=!0){try{a&&(o==null||o(c));const f=t.getItem(e);if(f){const p=i.deserialize(f),y=u?I(p,u):p,S=l?_(y,l):y;r.$patch(S)}a&&(n==null||n(c))}catch(f){s&&console.error("[pinia-plugin-persistedstate]",f)}}function m(r,{storage:t,serializer:i,key:e,debug:s,pick:u,omit:l}){try{const o=u?I(r,u):r,n=l?_(o,l):o,c=i.serialize(n);t.setItem(e,c)}catch(o){s&&console.error("[pinia-plugin-persistedstate]",o)}}function k(r,t,i){const{pinia:e,store:s,options:{persist:u=i}}=r;if(!u)return;if(!(s.$id in e.state.value)){const n=e._s.get(s.$id.replace("__hot:",""));n&&Promise.resolve().then(()=>n.$persist());return}const o=(Array.isArray(u)?u:u===!0?[{}]:[u]).map(t);s.$hydrate=({runHooks:n=!0}={})=>{o.forEach(c=>{g(s,c,r,n)})},s.$persist=()=>{o.forEach(n=>{m(s.$state,n)})},o.forEach(n=>{g(s,n,r),s.$subscribe((c,a)=>m(a,n),{detached:!0})})}function J(r={}){return function(t){var i;k(t,e=>{var s,u,l,o,n,c,a;return{key:(r.key?r.key:f=>f)((s=e.key)!=null?s:t.store.$id),debug:(l=(u=e.debug)!=null?u:r.debug)!=null?l:!1,serializer:(n=(o=e.serializer)!=null?o:r.serializer)!=null?n:{serialize:f=>JSON.stringify(f),deserialize:f=>z(f)},storage:(a=(c=e.storage)!=null?c:r.storage)!=null?a:window.localStorage,beforeHydrate:e.beforeHydrate,afterHydrate:e.afterHydrate,pick:e.pick,omit:e.omit}},(i=r.auto)!=null?i:!1)}}var T=J(),x=A(async({app:r})=>{const t=w();t.use(T),r.use(t)});export{x as default};