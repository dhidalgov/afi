import{L as S,M as p}from"./index.30038687.js";const P=/^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;function y({r:t,g:e,b:r,a:i}){const n=i!==void 0;if(t=Math.round(t),e=Math.round(e),r=Math.round(r),t>255||e>255||r>255||n&&i>100)throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");return i=n?(Math.round(255*i/100)|1<<8).toString(16).slice(1):"","#"+(r|e<<8|t<<16|1<<24).toString(16).slice(1)+i}function N({r:t,g:e,b:r,a:i}){return`rgb${i!==void 0?"a":""}(${t},${e},${r}${i!==void 0?","+i/100:""})`}function w(t){if(typeof t!="string")throw new TypeError("Expected a string");t=t.replace(/^#/,""),t.length===3?t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:t.length===4&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=parseInt(t,16);return t.length>6?{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:Math.round((e&255)/2.55)}:{r:e>>16,g:e>>8&255,b:e&255}}function D({h:t,s:e,v:r,a:i}){let n,s,a;e=e/100,r=r/100,t=t/360;const u=Math.floor(t*6),d=t*6-u,o=r*(1-e),f=r*(1-d*e),l=r*(1-(1-d)*e);switch(u%6){case 0:n=r,s=l,a=o;break;case 1:n=f,s=r,a=o;break;case 2:n=o,s=r,a=l;break;case 3:n=o,s=f,a=r;break;case 4:n=l,s=o,a=r;break;case 5:n=r,s=o,a=f;break}return{r:Math.round(n*255),g:Math.round(s*255),b:Math.round(a*255),a:i}}function T({r:t,g:e,b:r,a:i}){const n=Math.max(t,e,r),s=Math.min(t,e,r),a=n-s,u=n===0?0:a/n,d=n/255;let o;switch(n){case s:o=0;break;case t:o=e-r+a*(e<r?6:0),o/=6*a;break;case e:o=r-t+a*2,o/=6*a;break;case r:o=t-e+a*4,o/=6*a;break}return{h:Math.round(o*360),s:Math.round(u*100),v:Math.round(d*100),a:i}}function c(t){if(typeof t!="string")throw new TypeError("Expected a string");const e=t.replace(/ /g,""),r=P.exec(e);if(r===null)return w(e);const i={r:Math.min(255,parseInt(r[2],10)),g:Math.min(255,parseInt(r[3],10)),b:Math.min(255,parseInt(r[4],10))};if(r[1]){const n=parseFloat(r[5]);i.a=Math.min(1,isNaN(n)===!0?1:n)*100}return i}function I(t,e){if(typeof t!="string")throw new TypeError("Expected a string as color");if(typeof e!="number")throw new TypeError("Expected a numeric percent");const r=c(t),i=e<0?0:255,n=Math.abs(e)/100,s=r.r,a=r.g,u=r.b;return"#"+(16777216+(Math.round((i-s)*n)+s)*65536+(Math.round((i-a)*n)+a)*256+(Math.round((i-u)*n)+u)).toString(16).slice(1)}function L(t){if(typeof t!="string"&&(!t||t.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const e=typeof t=="string"?c(t):t,r=e.r/255,i=e.g/255,n=e.b/255,s=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),a=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4),u=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4);return .2126*s+.7152*a+.0722*u}function A(t){if(typeof t!="string"&&(!t||t.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const e=typeof t=="string"?c(t):t;return(e.r*299+e.g*587+e.b*114)/1e3}function J(t,e){if(typeof t!="string"&&(!t||t.r===void 0))throw new TypeError("Expected a string or a {r, g, b[, a]} object as fgColor");if(typeof e!="string"&&(!e||e.r===void 0))throw new TypeError("Expected a string or a {r, g, b[, a]} object as bgColor");const r=typeof t=="string"?c(t):t,i=r.r/255,n=r.g/255,s=r.b/255,a=r.a!==void 0?r.a/100:1,u=typeof e=="string"?c(e):e,d=u.r/255,o=u.g/255,f=u.b/255,l=u.a!==void 0?u.a/100:1,h=a+l*(1-a),M=Math.round((i*a+d*l*(1-a))/h*255),E=Math.round((n*a+o*l*(1-a))/h*255),v=Math.round((s*a+f*l*(1-a))/h*255),m={r:M,g:E,b:v,a:Math.round(h*100)};return typeof t=="string"?y(m):m}function k(t,e){if(typeof t!="string")throw new TypeError("Expected a string as color");if(e===void 0||e<-1||e>1)throw new TypeError("Expected offset to be between -1 and 1");const{r,g:i,b:n,a:s}=c(t),a=s!==void 0?s/100:0;return y({r,g:i,b:n,a:Math.round(Math.min(1,Math.max(0,a+e))*100)})}function $(t){if(typeof t!="string")throw new TypeError("Expected a string as color");const e=document.createElement("div");e.className=`text-${t} invisible fixed no-pointer-events`,document.body.appendChild(e);const r=getComputedStyle(e).getPropertyValue("color");return e.remove(),y(c(r))}var F={rgbToHex:y,hexToRgb:w,hsvToRgb:D,rgbToHsv:T,textToRgb:c,lighten:I,luminosity:L,brightness:A,blend:J,changeAlpha:k,getPaletteColor:$};function g(t,e=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(!(e instanceof Element))throw new TypeError("Expected a DOM element");return getComputedStyle(e).getPropertyValue(`--q-${t}`).trim()||null}const{lighten:b}=F,R=S("LayoutStore",{state:()=>({leftDrawer:!0,curLang:{value:"es-CL",label:"Espa\xF1ol (Chile)"},defaultInput:{filled:!1,outlined:!1,dense:!1,rounded:!1,square:!1,borderless:!1,"hide-bottom-space":!0},currentInput:{filled:!1,outlined:!1,dense:!1,rounded:!1,square:!1,borderless:!1,"hide-bottom-space":!0},defaultPalette:{isSet:!1,primaryLg40:b("#1976D2",40),primary:"#0063ba",warning:"#F2C037",info:"#31CCEC",positive:"#21BA45",negative:"#C10015"},currentPalette:{isSet:!0,primaryLg40:b(g("primary"),40),primary:g("primary"),warning:g("warning"),info:g("info"),positive:g("positive"),negative:g("negative")},qDateLocale:{es:{days:["Domingo","Lunes","Martes","Mi\xE9rcoles","Jueves","Viernes","S\xE1bado"],daysShort:["Dom","Lun","Mar","Mi\xE9","Jue","Vie","S\xE1b"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]},en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}}}),getters:{getDefaultPalette(){return this.defaultPalette},getDefaultCustom(){return this.currentPalette},getPalette(){return this.currentPalette.isSet?this.currentPalette:this.defaultPalette},getDefaultInput(){return this.defaultInput},getCurrentInput(){return this.currentInput}},actions:{toggleLeftDrawer(){this.leftDrawer=!this.leftDrawer},closeLeftDrawer(){this.leftDrawer=!1},openLeftDrawer(){this.leftDrawer=!0},setPalette(t){t.isSet=!0,this.currentPalette=t,this.applyPallete(t)},setInputs(t){this.currentInput=t},applyPallete(t){p("primary",t.primary),p("bg-primary",t.primary),p("warning",t.warning),p("bg-warning",t.warning),p("info",t.info),p("bg-info",t.info),p("positive",t.positive),p("bg-positive",t.positive),p("negative",t.negative),p("bg-negative",t.negative),t.primaryLg40=b(g("primary"),40),t.primary=g("primary")},initPalette(){let t=this.getPalette;this.applyPallete(t)},initInput(){this.getCurrentInput},initAll(){this.initPalette(),this.initInput(),this.curLang={value:"es-CL",label:"Espa\xF1ol (Chile)"}},resetPalette(){let t=this.getDefaultPalette;this.applyPallete(t),this.currentPalette=t},resetInput(){let t=this.getDefaultInput;this.currentInput=t},resetAll(){let t=this.getDefaultPalette;this.applyPallete(t),this.currentPalette=t;let e=this.getDefaultInput;this.currentInput=e}},persist:{enabled:!0,strategies:[{key:"LayoutStore",storage:localStorage}]}});export{R as L,N as a,T as b,w as c,D as h,L as l,y as r,c as t};
