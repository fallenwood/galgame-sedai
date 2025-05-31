var En=Object.defineProperty;var An=(t,e,n)=>e in t?En(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var M=(t,e,n)=>An(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const Tn=!1,Cn=(t,e)=>t===e,Q=Symbol("solid-proxy"),In=typeof Proxy=="function",ne=Symbol("solid-track"),Bt={equals:Cn};let ze=Ke;const ct=1,Ut=2,We={owned:null,cleanups:null,context:null,owner:null};var B=null;let Qt=null,kn=null,P=null,H=null,ot=null,Kt=0;function Dt(t,e){const n=P,i=B,o=t.length===0,r=e===void 0?i:e,a=o?We:{owned:null,cleanups:null,context:r?r.context:null,owner:r},s=o?t:()=>t(()=>at(()=>Tt(a)));B=a,P=null;try{return St(s,!0)}finally{P=n,B=i}}function F(t,e){e=e?Object.assign({},Bt,e):Bt;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=o=>(typeof o=="function"&&(o=o(n.value)),Ye(n,o));return[Ve.bind(n),i]}function q(t,e,n){const i=ge(t,e,!1,ct);$t(i)}function rt(t,e,n){ze=Pn;const i=ge(t,e,!1,ct);i.user=!0,ot?ot.push(i):$t(i)}function wt(t,e,n){n=n?Object.assign({},Bt,n):Bt;const i=ge(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,$t(i),Ve.bind(i)}function Nn(t){return St(t,!1)}function at(t){if(P===null)return t();const e=P;P=null;try{return t()}finally{P=e}}function Et(t,e,n){const i=Array.isArray(t);let o;return r=>{let a;if(i){a=Array(t.length);for(let c=0;c<t.length;c++)a[c]=t[c]()}else a=t();const s=at(()=>e(a,o,r));return o=a,s}}function At(t){rt(()=>at(t))}function ft(t){return B===null||(B.cleanups===null?B.cleanups=[t]:B.cleanups.push(t)),t}function ie(){return P}function Ve(){if(this.sources&&this.state)if(this.state===ct)$t(this);else{const t=H;H=null,St(()=>Mt(this),!1),H=t}if(P){const t=this.observers?this.observers.length:0;P.sources?(P.sources.push(this),P.sourceSlots.push(t)):(P.sources=[this],P.sourceSlots=[t]),this.observers?(this.observers.push(P),this.observerSlots.push(P.sources.length-1)):(this.observers=[P],this.observerSlots=[P.sources.length-1])}return this.value}function Ye(t,e,n){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&St(()=>{for(let o=0;o<t.observers.length;o+=1){const r=t.observers[o],a=Qt&&Qt.running;a&&Qt.disposed.has(r),(a?!r.tState:!r.state)&&(r.pure?H.push(r):ot.push(r),r.observers&&qe(r)),a||(r.state=ct)}if(H.length>1e6)throw H=[],new Error},!1)),e}function $t(t){if(!t.fn)return;Tt(t);const e=Kt;$n(t,t.value,e)}function $n(t,e,n){let i;const o=B,r=P;P=B=t;try{i=t.fn(e)}catch(a){return t.pure&&(t.state=ct,t.owned&&t.owned.forEach(Tt),t.owned=null),t.updatedAt=n+1,Ge(a)}finally{P=r,B=o}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Ye(t,i):t.value=i,t.updatedAt=n)}function ge(t,e,n,i=ct,o){const r={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:B,context:B?B.context:null,pure:n};return B===null||B!==We&&(B.owned?B.owned.push(r):B.owned=[r]),r}function Ft(t){if(t.state===0)return;if(t.state===Ut)return Mt(t);if(t.suspense&&at(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Kt);)t.state&&e.push(t);for(let n=e.length-1;n>=0;n--)if(t=e[n],t.state===ct)$t(t);else if(t.state===Ut){const i=H;H=null,St(()=>Mt(t,e[0]),!1),H=i}}function St(t,e){if(H)return t();let n=!1;e||(H=[]),ot?n=!0:ot=[],Kt++;try{const i=t();return On(n),i}catch(i){n||(ot=null),H=null,Ge(i)}}function On(t){if(H&&(Ke(H),H=null),t)return;const e=ot;ot=null,e.length&&St(()=>ze(e),!1)}function Ke(t){for(let e=0;e<t.length;e++)Ft(t[e])}function Pn(t){let e,n=0;for(e=0;e<t.length;e++){const i=t[e];i.user?t[n++]=i:Ft(i)}for(e=0;e<n;e++)Ft(t[e])}function Mt(t,e){t.state=0;for(let n=0;n<t.sources.length;n+=1){const i=t.sources[n];if(i.sources){const o=i.state;o===ct?i!==e&&(!i.updatedAt||i.updatedAt<Kt)&&Ft(i):o===Ut&&Mt(i,e)}}}function qe(t){for(let e=0;e<t.observers.length;e+=1){const n=t.observers[e];n.state||(n.state=Ut,n.pure?H.push(n):ot.push(n),n.observers&&qe(n))}}function Tt(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),o=n.observers;if(o&&o.length){const r=o.pop(),a=n.observerSlots.pop();i<o.length&&(r.sourceSlots[a]=i,o[i]=r,n.observerSlots[i]=a)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)Tt(t.tOwned[e]);delete t.tOwned}if(t.owned){for(e=t.owned.length-1;e>=0;e--)Tt(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function Rn(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function Ge(t,e=B){throw Rn(t)}const Dn=Symbol("fallback");function ke(t){for(let e=0;e<t.length;e++)t[e]()}function Ln(t,e,n={}){let i=[],o=[],r=[],a=0,s=e.length>1?[]:null;return ft(()=>ke(r)),()=>{let c=t()||[],u=c.length,l,g;return c[ne],at(()=>{let f,y,h,b,j,_,x,w,p;if(u===0)a!==0&&(ke(r),r=[],i=[],o=[],a=0,s&&(s=[])),n.fallback&&(i=[Dn],o[0]=Dt(E=>(r[0]=E,n.fallback())),a=1);else if(a===0){for(o=new Array(u),g=0;g<u;g++)i[g]=c[g],o[g]=Dt(m);a=u}else{for(h=new Array(u),b=new Array(u),s&&(j=new Array(u)),_=0,x=Math.min(a,u);_<x&&i[_]===c[_];_++);for(x=a-1,w=u-1;x>=_&&w>=_&&i[x]===c[w];x--,w--)h[w]=o[x],b[w]=r[x],s&&(j[w]=s[x]);for(f=new Map,y=new Array(w+1),g=w;g>=_;g--)p=c[g],l=f.get(p),y[g]=l===void 0?-1:l,f.set(p,g);for(l=_;l<=x;l++)p=i[l],g=f.get(p),g!==void 0&&g!==-1?(h[g]=o[l],b[g]=r[l],s&&(j[g]=s[l]),g=y[g],f.set(p,g)):r[l]();for(g=_;g<u;g++)g in h?(o[g]=h[g],r[g]=b[g],s&&(s[g]=j[g],s[g](g))):o[g]=Dt(m);o=o.slice(0,a=u),i=c.slice(0)}return o});function m(f){if(r[g]=f,s){const[y,h]=F(g);return s[g]=h,e(c[g],y)}return e(c[g])}}}function G(t,e){return at(()=>t(e||{}))}function Pt(){return!0}const Bn={get(t,e,n){return e===Q?n:t.get(e)},has(t,e){return e===Q?!0:t.has(e)},set:Pt,deleteProperty:Pt,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:Pt,deleteProperty:Pt}},ownKeys(t){return t.keys()}};function te(t){return(t=typeof t=="function"?t():t)?t:{}}function Un(){for(let t=0,e=this.length;t<e;++t){const n=this[t]();if(n!==void 0)return n}}function Xe(...t){let e=!1;for(let a=0;a<t.length;a++){const s=t[a];e=e||!!s&&Q in s,t[a]=typeof s=="function"?(e=!0,wt(s)):s}if(In&&e)return new Proxy({get(a){for(let s=t.length-1;s>=0;s--){const c=te(t[s])[a];if(c!==void 0)return c}},has(a){for(let s=t.length-1;s>=0;s--)if(a in te(t[s]))return!0;return!1},keys(){const a=[];for(let s=0;s<t.length;s++)a.push(...Object.keys(te(t[s])));return[...new Set(a)]}},Bn);const n={},i=Object.create(null);for(let a=t.length-1;a>=0;a--){const s=t[a];if(!s)continue;const c=Object.getOwnPropertyNames(s);for(let u=c.length-1;u>=0;u--){const l=c[u];if(l==="__proto__"||l==="constructor")continue;const g=Object.getOwnPropertyDescriptor(s,l);if(!i[l])i[l]=g.get?{enumerable:!0,configurable:!0,get:Un.bind(n[l]=[g.get.bind(s)])}:g.value!==void 0?g:void 0;else{const m=n[l];m&&(g.get?m.push(g.get.bind(s)):g.value!==void 0&&m.push(()=>g.value))}}}const o={},r=Object.keys(i);for(let a=r.length-1;a>=0;a--){const s=r[a],c=i[s];c&&c.get?Object.defineProperty(o,s,c):o[s]=c?c.value:void 0}return o}const Fn=t=>`Stale read from <${t}>.`;function re(t){const e="fallback"in t&&{fallback:()=>t.fallback};return wt(Ln(()=>t.each,t.children,e||void 0))}function ut(t){const e=t.keyed,n=wt(()=>t.when,void 0,void 0),i=e?n:wt(n,void 0,{equals:(o,r)=>!o==!r});return wt(()=>{const o=i();if(o){const r=t.children;return typeof r=="function"&&r.length>0?at(()=>r(e?o:()=>{if(!at(i))throw Fn("Show");return n()})):r}return t.fallback},void 0,void 0)}const oe=t=>wt(()=>t());function Mn(t,e,n){let i=n.length,o=e.length,r=i,a=0,s=0,c=e[o-1].nextSibling,u=null;for(;a<o||s<r;){if(e[a]===n[s]){a++,s++;continue}for(;e[o-1]===n[r-1];)o--,r--;if(o===a){const l=r<i?s?n[s-1].nextSibling:n[r-s]:c;for(;s<r;)t.insertBefore(n[s++],l)}else if(r===s)for(;a<o;)(!u||!u.has(e[a]))&&e[a].remove(),a++;else if(e[a]===n[r-1]&&n[s]===e[o-1]){const l=e[--o].nextSibling;t.insertBefore(n[s++],e[a++].nextSibling),t.insertBefore(n[--r],l),e[o]=n[r]}else{if(!u){u=new Map;let g=s;for(;g<r;)u.set(n[g],g++)}const l=u.get(e[a]);if(l!=null)if(s<l&&l<r){let g=a,m=1,f;for(;++g<o&&g<r&&!((f=u.get(e[g]))==null||f!==l+m);)m++;if(m>l-s){const y=e[a];for(;s<l;)t.insertBefore(n[s++],y)}else t.replaceChild(n[s++],e[a++])}else a++;else e[a++].remove()}}}const Ne="_$DX_DELEGATE";function Hn(t,e,n,i={}){let o;return Dt(r=>{o=r,e===document?t():R(e,t(),e.firstChild?null:void 0,n)},i.owner),()=>{o(),e.textContent=""}}function D(t,e,n,i){let o;const r=()=>{const s=document.createElement("template");return s.innerHTML=t,s.content.firstChild},a=()=>(o||(o=r())).cloneNode(!0);return a.cloneNode=a,a}function Ze(t,e=window.document){const n=e[Ne]||(e[Ne]=new Set);for(let i=0,o=t.length;i<o;i++){const r=t[i];n.has(r)||(n.add(r),e.addEventListener(r,Wn))}}function C(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function lt(t,e){e==null?t.removeAttribute("class"):t.className=e}function zn(t,e,n,i){Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n}function Lt(t,e,n){if(!e)return n?C(t,"style"):e;const i=t.style;if(typeof e=="string")return i.cssText=e;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),e||(e={});let o,r;for(r in n)e[r]==null&&i.removeProperty(r),delete n[r];for(r in e)o=e[r],o!==n[r]&&(i.setProperty(r,o),n[r]=o);return n}function ue(t,e,n){return at(()=>t(e,n))}function R(t,e,n,i){if(n!==void 0&&!i&&(i=[]),typeof e!="function")return Ht(t,e,i,n);q(o=>Ht(t,e(),o,n),i)}function Wn(t){let e=t.target;const n=`$$${t.type}`,i=t.target,o=t.currentTarget,r=c=>Object.defineProperty(t,"target",{configurable:!0,value:c}),a=()=>{const c=e[n];if(c&&!e.disabled){const u=e[`${n}Data`];if(u!==void 0?c.call(e,u,t):c.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&r(e.host),!0},s=()=>{for(;a()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),t.composedPath){const c=t.composedPath();r(c[0]);for(let u=0;u<c.length-2&&(e=c[u],!!a());u++){if(e._$host){e=e._$host,s();break}if(e.parentNode===o)break}}else s();r(i)}function Ht(t,e,n,i,o){for(;typeof n=="function";)n=n();if(e===n)return n;const r=typeof e,a=i!==void 0;if(t=a&&n[0]&&n[0].parentNode||t,r==="string"||r==="number"){if(r==="number"&&(e=e.toString(),e===n))return n;if(a){let s=n[0];s&&s.nodeType===3?s.data!==e&&(s.data=e):s=document.createTextNode(e),n=pt(t,n,i,s)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||r==="boolean")n=pt(t,n,i);else{if(r==="function")return q(()=>{let s=e();for(;typeof s=="function";)s=s();n=Ht(t,s,n,i)}),()=>n;if(Array.isArray(e)){const s=[],c=n&&Array.isArray(n);if(ae(s,e,n,o))return q(()=>n=Ht(t,s,n,i,!0)),()=>n;if(s.length===0){if(n=pt(t,n,i),a)return n}else c?n.length===0?$e(t,s,i):Mn(t,n,s):(n&&pt(t),$e(t,s));n=s}else if(e.nodeType){if(Array.isArray(n)){if(a)return n=pt(t,n,i,e);pt(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function ae(t,e,n,i){let o=!1;for(let r=0,a=e.length;r<a;r++){let s=e[r],c=n&&n[t.length],u;if(!(s==null||s===!0||s===!1))if((u=typeof s)=="object"&&s.nodeType)t.push(s);else if(Array.isArray(s))o=ae(t,s,c)||o;else if(u==="function")if(i){for(;typeof s=="function";)s=s();o=ae(t,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||o}else t.push(s),o=!0;else{const l=String(s);c&&c.nodeType===3&&c.data===l?t.push(c):t.push(document.createTextNode(l))}}return o}function $e(t,e,n=null){for(let i=0,o=e.length;i<o;i++)t.insertBefore(e[i],n)}function pt(t,e,n,i){if(n===void 0)return t.textContent="";const o=i||document.createTextNode("");if(e.length){let r=!1;for(let a=e.length-1;a>=0;a--){const s=e[a];if(o!==s){const c=s.parentNode===t;!r&&!a?c?t.replaceChild(o,s):t.insertBefore(o,n):c&&s.remove()}else r=!0}}else t.insertBefore(o,n);return[o]}const Rt={2004:[{title:"神树之馆",rating:7.7,img:"7400_1ofy5.jpg"},{title:"交响乐之雨",rating:8.5,img:"1143_Z54Z6.jpg"},{title:"CLANNAD",rating:8.9,img:"13_tQxwM.jpg"},{title:"Fate/stay night",rating:8.3,img:"935_dOCPc.jpg"},{title:"Forest",rating:8.6,img:"no_icon_subject.png"},{title:"逆转裁判3",rating:8.8,img:"943_Mz6H3.jpg"},{title:"狂欢节",rating:7.5,img:"no_icon_subject.png"},{title:"Remember11：无限轮回的时光",rating:8.9,img:"1127_eZ7Te.jpg"},{title:"家族计划~再开~",rating:8.7,img:"no_icon_subject.png"},{title:"星之梦",rating:8,img:"859_2s5MH.jpg"},{title:"兰斯6 - 赛斯崩坏 -",rating:7.5,img:"no_icon_subject.png"},{title:"秋之回忆：从今以后",rating:7.7,img:"1735_peMgL.jpg"},{title:"寒蝉鸣泣之时",rating:8.2,img:"17035_n33xd.jpg"},{title:"腐姬 归省～jamais vu～",rating:7.4,img:"302417_zJD39.jpg"},{title:"乐园～一如既往的我。的存在～",rating:8.1,img:"no_icon_subject.png"},{title:"加奈···欢迎回来！！",rating:7.8,img:"302984_Nzo3N.jpg"},{title:"春天的足音",rating:7.7,img:"no_icon_subject.png"},{title:"那一天，去往何方",rating:7,img:"no_icon_subject.png"},{title:"半衰期2",rating:8.5,img:"9658_TE8l6.jpg"},{title:"初音岛 P.C.",rating:6.8,img:"4044_A3U2s.jpg"},{title:"四重奏！",rating:7.4,img:"1121_E473h.jpg"}],2005:[{title:"天鹅之歌",rating:8.1,img:"no_icon_subject.png"},{title:"车轮之国、向日葵的少女",rating:8.1,img:"no_icon_subject.png"},{title:"水仙",rating:8.5,img:"1167_Yymi1.jpg"},{title:"最后的现在",rating:8.7,img:"7978_hc6iN.jpg"},{title:"女仆咖啡帕露菲",rating:8,img:"846_xUyQU.jpg"},{title:"梦见之药",rating:7.4,img:"no_icon_subject.png"},{title:"ToHeart2 XRATED",rating:7.6,img:"no_icon_subject.png"},{title:"我不是天使",rating:7.2,img:"no_icon_subject.png"},{title:"寒蝉鸣泣之时解 皆杀篇",rating:7.5,img:"309724_L5E6P.jpg"},{title:"皋月物语",rating:8.3,img:"79183_K3KIk.jpg"},{title:"娇蛮之吻",rating:7.2,img:"15887_9vBEQ.jpg"},{title:"梦幻廻廊",rating:7,img:"no_icon_subject.png"},{title:"夜明前的琉璃色",rating:6.8,img:"no_icon_subject.png"},{title:"ジオグラマトン -Dyogrammaton-",rating:6.3,img:"79104_G50B7.jpg"}],2006:[{title:"Muv-Luv Alternative",rating:8.8,img:"4828_81B8A.jpg"},{title:"青空下的约定",rating:7.8,img:"1174_DNdJr.jpg"},{title:"悠久之翼-前篇",rating:7.6,img:"1488_zY592.jpg"},{title:"I/O",rating:8.1,img:"1079_8Do9y.jpg"},{title:"战国兰斯",rating:8.3,img:"no_icon_subject.png"},{title:"遥仰凰华",rating:7.5,img:"no_icon_subject.png"},{title:"寒蝉鸣泣之时解",rating:8.4,img:"80705_6o6qH.jpg"},{title:"离开的人们",rating:7.5,img:"114304_6soSy.jpg"},{title:"四叶草",rating:6.9,img:"no_icon_subject.png"},{title:"她们的流仪",rating:7.1,img:"14357_895R0.jpg"},{title:"雪影",rating:7.5,img:"no_icon_subject.png"},{title:"Gore Screaming Show",rating:7,img:"no_icon_subject.png"},{title:"EXTRAVAGANZA ～蟲愛でる少女～",rating:7.6,img:"no_icon_subject.png"},{title:"英雄传说：空之轨迹SC",rating:8.7,img:"343_Pb22f.jpg"},{title:"PP -Pianissimo- 提线木偶之轮舞",rating:6.5,img:"no_icon_subject.png"},{title:"Fossette - Cafe au Le Ciel Bleu -",rating:7.5,img:"1459_44x04.jpg"},{title:"H2O ～FOOTPRINTS IN THE SAND～",rating:7,img:"no_icon_subject.png"},{title:"Scarlett ～スカーレット～",rating:7.4,img:"no_icon_subject.png"}],2007:[{title:"KIRA☆KIRA 煌煌舞台",rating:8.5,img:"no_icon_subject.png"},{title:"爱丽丝大游行～两位爱丽丝与不可思议的少女们",rating:6.7,img:"no_icon_subject.png"},{title:"海猫鸣泣之时",rating:8.4,img:"1020_L3HDr.jpg"},{title:"水仙2",rating:8.2,img:"1168_aY6d3.jpg"},{title:"Little Busters!",rating:8.3,img:"125131_x4hmy.jpg"},{title:"片羽",rating:7.5,img:"no_icon_subject.png"},{title:"续·杀戮之姜戈—地狱通缉犯—",rating:8.2,img:"no_icon_subject.png"},{title:"赫炎的印加诺克 ～何等美好的人们～",rating:7.5,img:"7942_VIOFi.jpg"},{title:"逆转裁判4",rating:7.7,img:"1114_PDHO3.jpg"},{title:"电塔未明",rating:7.2,img:"19291_e3COC.jpg"},{title:"终有一日愿遂彼空",rating:7.1,img:"11627_dLd5q.jpg"},{title:"车轮之国、悠久的少年少女",rating:7.7,img:"no_icon_subject.png"},{title:"ITAZULOVE 在没有人烟的公园和少女孕育爱情",rating:5.7,img:"no_icon_subject.png"},{title:"鬼畜眼镜",rating:7.6,img:"no_icon_subject.png"},{title:"盛开的钢琴之森下",rating:6.8,img:"6681_2aqBq.jpg"},{title:"亲吻那片花瓣 ～与你的恋人纽带～",rating:7,img:"no_icon_subject.png"},{title:"つくとり",rating:7.5,img:"no_icon_subject.png"},{title:"Aster",rating:7.2,img:"no_icon_subject.png"}],2008:[{title:"428 ～被封锁的涩谷～",rating:8.5,img:"955_WhyX0.jpg"},{title:"壳之少女",rating:7.6,img:"no_icon_subject.png"},{title:"G弦上的魔王",rating:7.9,img:"no_icon_subject.png"},{title:"夏空彼方",rating:7.3,img:"no_icon_subject.png"},{title:"Little Busters! EX",rating:8.5,img:"no_icon_subject.png"},{title:"Ruina 废都物语",rating:8.8,img:"51361_gWJWu.jpg"},{title:"媚肉之香",rating:7.9,img:"no_icon_subject.png"},{title:"缘之空",rating:7,img:"no_icon_subject.png"},{title:"悠久之翼-后篇",rating:8.4,img:"1089_HVvHh.jpg"},{title:"智以泪聚",rating:7.5,img:"no_icon_subject.png"},{title:"MYTH",rating:7.7,img:"99132_IiMzW.jpg"},{title:"11eyes -罪与罚与赎的少女-",rating:7.2,img:"no_icon_subject.png"},{title:"游魂-Kiss on my Deity-",rating:6.7,img:"3177_dwPD8.jpg"},{title:"FORTUNE ARTERIAL",rating:7.1,img:"no_icon_subject.png"},{title:"漆黑的夏尔诺斯 ～何等美好的明日～",rating:7.4,img:"1023_5l556.jpg"},{title:"晓之护卫",rating:7,img:"no_icon_subject.png"},{title:"雨の日と雨の日の次の日",rating:0,img:"527509_s5ph5.jpg"},{title:"霞外笼逗留记",rating:8.2,img:"no_icon_subject.png"},{title:"战女神ZERO",rating:8.2,img:"no_icon_subject.png"},{title:"混沌头",rating:7,img:"1410_ma0Xo.jpg"},{title:"彼女×彼女×彼女～三姉妹とのドキドキ共同生活～",rating:6.9,img:"no_icon_subject.png"},{title:"女神异闻录4",rating:8.4,img:"447_4juu1.jpg"}],2009:[{title:"装甲恶鬼村正",rating:8.6,img:"no_icon_subject.png"},{title:"命运石之门",rating:8.9,img:"3154_j71Z7.jpg"},{title:'BALDR SKY Dive2 "RECORDARE"',rating:8.8,img:"no_icon_subject.png"},{title:"星空的记忆 -Wish upon a shooting star",rating:7.8,img:"no_icon_subject.png"},{title:'BALDR SKY Dive1 "LostMemory"',rating:8.5,img:"no_icon_subject.png"},{title:"eden* They were only two, on the planet.",rating:7.9,img:"2288_Y3ow5.jpg"},{title:"我们没有翅膀",rating:8.4,img:"7868_RlKwS.jpg"},{title:"从晴朗的朝色泛起之际开始",rating:7.6,img:"no_icon_subject.png"},{title:"海猫鸣泣之时散",rating:8.6,img:"109118_RJUKj.jpg"},{title:"极限脱出 9小时9人9扇门",rating:8,img:"3863_5m7N3.jpg"},{title:"兰斯02~反叛的少女们~",rating:5.9,img:"no_icon_subject.png"},{title:"鬼歌。",rating:6.1,img:"14566_6eiIb.jpg"},{title:"夏之雨",rating:6.9,img:"no_icon_subject.png"},{title:"痕 ～きずあと～",rating:7.1,img:"1090_T42Zm.jpg"},{title:"白雪～七凭之祭～",rating:6,img:"16480_7jtxj.jpg"},{title:"Flyable Heart",rating:7,img:"1499_829n2.jpg"},{title:"夏梦渚",rating:7.4,img:"no_icon_subject.png"},{title:"eden* PLUS+MOSAIC",rating:7.4,img:"no_icon_subject.png"},{title:"认真和我恋爱",rating:7.9,img:"no_icon_subject.png"},{title:"纯白交响曲",rating:7.2,img:"no_icon_subject.png"},{title:"天神乱漫 -LUCKY or UNLUCKY!?-",rating:6.8,img:"no_icon_subject.png"},{title:"白光的伐鲁希亚 ～何等美好的希望～",rating:7.1,img:"13254_SoH78.jpg"},{title:"らぶでれーしょん！",rating:7.6,img:"16379_0I8Fi.jpg"}],2010:[{title:"美好的每一天 ～不连续的存在～",rating:8.8,img:"no_icon_subject.png"},{title:"弹丸论破 希望的学园和绝望高中生",rating:7.9,img:"10336_A42Iz.jpg"},{title:"海猫鸣泣之时~魔女与推理的轮舞曲~",rating:8.7,img:"11028_R8kIG.jpg"},{title:"黄昏的禁忌之药",rating:7.5,img:"no_icon_subject.png"},{title:"白色相簿2 序章",rating:8.2,img:"no_icon_subject.png"},{title:"幽灵诡计",rating:8.8,img:"4723_Kggk3.jpg"},{title:"恋爱和选举和巧克力",rating:6.6,img:"no_icon_subject.png"},{title:"星空的记忆 永恒之心",rating:7.6,img:"no_icon_subject.png"},{title:"恋色空模样",rating:6.9,img:"4389_4yYOf.jpg"},{title:"紫影的索纳尼尔 ～何等美好的记忆～",rating:7.8,img:"10957_w4z99.jpg"},{title:"白色相簿：编缀的冬日回忆",rating:7.3,img:"20957_2W7nm.jpg"},{title:"暗之部屋",rating:7.7,img:"7870_poQA1.jpg"},{title:"信天翁航海录",rating:7.6,img:"13445_caH2H.jpg"},{title:"库特wafter",rating:7,img:"no_icon_subject.png"},{title:"Noble Works",rating:6.6,img:"no_icon_subject.png"},{title:"鬼まり。",rating:6.1,img:"14567_kLbpk.jpg"},{title:"尼尔 人工生命",rating:7.7,img:"4844_HetTe.jpg"},{title:"英雄传说：零之轨迹",rating:7.9,img:"8255_4Q57x.jpg"},{title:"天使的星期日",rating:7.4,img:"no_icon_subject.png"},{title:"诡计对逻辑",rating:7.4,img:"20199_v7u0z.jpg"},{title:"智以泪聚FD-吹向明日彼岸的可视之风-",rating:7.7,img:"no_icon_subject.png"}],2011:[{title:"白色相簿2 终章",rating:9,img:"no_icon_subject.png"},{title:"秽翼的尤斯蒂娅",rating:8.3,img:"12280_lKDNi.jpg"},{title:"Rewrite",rating:8.6,img:"4022_yF2YV.jpg"},{title:"五彩斑斓的世界",rating:7.5,img:"no_icon_subject.png"},{title:"euphoria",rating:7.2,img:"no_icon_subject.png"},{title:"海猫鸣泣之时散～真实与幻想的夜想曲～",rating:8.7,img:"56363_212lV.jpg"},{title:"灰色的果实",rating:7.8,img:"10869_J54tt.jpg"},{title:"兰斯8",rating:7.4,img:"no_icon_subject.png"},{title:"美少女万华镜 -被诅咒的传说少女-",rating:6.9,img:"no_icon_subject.png"},{title:"我的女友是蓝领／她的作为，我的遭遇／巨乳妻完全捕获计划／我老婆被那家伙睡了。",rating:7.5,img:"no_icon_subject.png"},{title:"情侣热恋中",rating:7.5,img:"no_icon_subject.png"},{title:"命运石之门 比翼恋理的爱人",rating:6.8,img:"19060_p8O8I.jpg"},{title:"不要践踏天使的羽毛",rating:7,img:"15439_qECwT.jpg"},{title:"突然之间发现我已恋上你",rating:6.4,img:"14293_7fac7.jpg"},{title:"鬼哭街 泪尽铃音响",rating:7.3,img:"14295_CWNdZ.jpg"},{title:"NOeSIS-虚伪记忆的物语-",rating:7.4,img:"70981_yffxt.jpg"},{title:"狗哭",rating:5.8,img:"14144_Uu77x.jpg"},{title:"LOVELY×CATION",rating:6.7,img:"no_icon_subject.png"},{title:"触祭之都",rating:4.4,img:"122657_m8aRD.jpg"}],2012:[{title:"魔法使之夜",rating:8.6,img:"5418_VTRT4.jpg"},{title:"超级弹丸论破2 再见了绝望学园",rating:8.5,img:"42746_2hfkF.jpg"},{title:"近月少女的礼仪",rating:7.7,img:"no_icon_subject.png"},{title:"女神异闻录4 黄金版",rating:8.6,img:"22660_4bb11.jpg"},{title:"初雪樱",rating:7.6,img:"no_icon_subject.png"},{title:"海市蜃楼之馆",rating:8.4,img:"73806_cc482.jpg"},{title:"五彩斑斓的曙光",rating:7.8,img:"no_icon_subject.png"},{title:"美少女万华镜 -勿忘草与永远的少女-",rating:6.8,img:"no_icon_subject.png"},{title:"白色相簿2 幸福的彼端",rating:8.9,img:"54898_pqx6M.jpg"},{title:"DRACU-RIOT!",rating:7,img:"no_icon_subject.png"},{title:"神怒之日：为爱痴狂",rating:8.4,img:"43372_1QU1q.jpg"},{title:"夏空的英仙座",rating:6.3,img:"42554_kovLa.jpg"},{title:"おたマ！～おたく仲間はちっこいマニア～",rating:6,img:"43289_pPT6P.jpg"},{title:"幻灵镇魂曲",rating:8.2,img:"78442_Fg8PP.jpg"},{title:"Root Double -Before Crime After Days-",rating:7.8,img:"27914_YSS1y.jpg"},{title:"初音岛3",rating:7.2,img:"22228_H4jhh.jpg"},{title:"在这苍穹展翅",rating:7.4,img:"29011_co84y.jpg"},{title:"极限脱出ADV 善人死亡",rating:8,img:"23491_hJP1H.jpg"},{title:"灰色的迷宫",rating:7.7,img:"28682_BBZBE.jpg"},{title:"时钟机关的Ley-line-黄昏时刻的境界线-",rating:6.7,img:"no_icon_subject.png"},{title:"黄雷的伽克苏恩～何等闪耀的勇气～",rating:7.3,img:"53405_7HtBZ.jpg"},{title:"心跳回忆女生版3 白金版",rating:8.7,img:"29049_Bqh8h.jpg"}],2013:[{title:"フレラバ ～Friend to Lover～",rating:7.8,img:"no_icon_subject.png"},{title:"少女理论及其周边 -巴黎学院篇-",rating:8,img:"66760_Zz9v3.jpg"},{title:"大图书馆的牧羊人",rating:7.4,img:"no_icon_subject.png"},{title:"向日葵的教会与长长的暑假",rating:7.7,img:"no_icon_subject.png"},{title:"兰斯01 寻找小光",rating:7,img:"no_icon_subject.png"},{title:"忠臣藏46＋1",rating:8.2,img:"64718_Wv9I9.jpg"},{title:"虚之少女",rating:7.4,img:"no_icon_subject.png"},{title:"你和她和她的恋爱。",rating:7.4,img:"no_icon_subject.png"},{title:"LOVESICK PUPPIES -我们为了恋爱而诞生-",rating:7,img:"no_icon_subject.png"},{title:"幸福噩梦",rating:7,img:"no_icon_subject.png"},{title:"灰色的乐园",rating:7.8,img:"46868_czj7k.jpg"},{title:"献给精灵神的祭品巫女供牺姬菲娜的冒险之旅",rating:7.8,img:"no_icon_subject.png"},{title:"时钟机关的Ley-line-残影之夜将明时-",rating:7.8,img:"no_icon_subject.png"},{title:"sisters ～夏天最后一日～ Ultra Edition",rating:7.1,img:"no_icon_subject.png"},{title:"麻吕的患者是蓝领",rating:6.8,img:"no_icon_subject.png"},{title:"潜伏之赤途",rating:8.7,img:"97911_eeKW0.jpg"},{title:"逆转裁判5",rating:6.7,img:"51602_c2EaP.jpg"},{title:"因为妹妹太受欢迎了糟糕了。",rating:6.5,img:"no_icon_subject.png"},{title:"魔导巧壳",rating:7.4,img:"no_icon_subject.png"},{title:"魔卡魅恋！",rating:6.8,img:"no_icon_subject.png"},{title:"幻创的幻人 ～Oratorio Phantasm Historia～",rating:7.3,img:"58561_A9u24.jpg"},{title:"復讐の死霊魔術師 ～望むのは死の痛み～",rating:6.5,img:"no_icon_subject.png"}],2014:[{title:"苍之彼方的四重奏",rating:7.9,img:"no_icon_subject.png"},{title:"逆转裁判123成步堂精选集",rating:8.4,img:"94463_1r0Pb.jpg"},{title:"混沌子",rating:8.4,img:"88765_QF7GZ.jpg"},{title:"纸上魔法使",rating:7.9,img:"no_icon_subject.png"},{title:"近月少女的礼仪2",rating:6.8,img:"no_icon_subject.png"},{title:"幸运草的约定",rating:7.2,img:"no_icon_subject.png"},{title:"西历2236年",rating:8.4,img:"137992_fR42p.jpg"},{title:"南十字星恋歌",rating:6.2,img:"73738_ry3G5.jpg"},{title:"若能与你再次相见",rating:7.3,img:"no_icon_subject.png"},{title:"星辰恋曲的白色永恒",rating:7.2,img:"no_icon_subject.png"},{title:"随性大冒险",rating:9.3,img:"245593_lp204.jpg"},{title:"慕情之心今随君作伴",rating:7.2,img:"111553_kriIb.jpg"},{title:"冲破万里晴空之上",rating:8,img:"106509_6u9B6.jpg"},{title:"FLOWERS 春篇",rating:7.3,img:"90516_M43ct.jpg"},{title:"星織ユメミライ",rating:7.5,img:"no_icon_subject.png"},{title:"セミラミスの天秤",rating:7,img:"no_icon_subject.png"},{title:"甜蜜女友",rating:7.3,img:"no_icon_subject.png"},{title:"七色轮回",rating:7.5,img:"109758_2z2L8.jpg"},{title:"彼女が俺にくれたもの。俺が彼女にあげるもの。 ～KISS My Darling：めちゃ婚case3～",rating:6.7,img:"no_icon_subject.png"},{title:"PRIMAL×HEARTS",rating:6.9,img:"no_icon_subject.png"},{title:"魔女恋爱日记",rating:7.3,img:"no_icon_subject.png"},{title:"爱丽娅的明日盛典！",rating:6.1,img:"no_icon_subject.png"},{title:"变身！～变成那个女孩子为所欲为～",rating:7.3,img:"no_icon_subject.png"}],2015:[{title:"樱之诗 - 在樱花之森上飞舞",rating:8.8,img:"no_icon_subject.png"},{title:"人狼村之谜",rating:8.2,img:"215470_af6bA.jpg"},{title:"魔女的夜宴",rating:7.2,img:"no_icon_subject.png"},{title:"命运石之门 0",rating:7.9,img:"129820_C6k1C.jpg"},{title:"兰斯03 利萨斯陷落",rating:8.2,img:"no_icon_subject.png"},{title:"想要传达给你的爱恋",rating:7.2,img:"no_icon_subject.png"},{title:"永不落幕的前奏诗",rating:7.2,img:"107501_yfRR6.jpg"},{title:"与你心相连",rating:7.5,img:"no_icon_subject.png"},{title:"大逆转裁判 成步堂龙之介的冒险",rating:7.2,img:"102690_T7fhH.jpg"},{title:"夏娃年代记",rating:7.5,img:"no_icon_subject.png"},{title:"妹的圣域",rating:6.2,img:"no_icon_subject.png"},{title:"甜蜜女友～Second Season～",rating:7.3,img:"no_icon_subject.png"},{title:"抬头看看吧，看那天上的繁星",rating:7.4,img:"121488_WWZa2.jpg"},{title:"时钟机关的Ley-line-朝雾中飘零之花-",rating:7.9,img:"no_icon_subject.png"},{title:"花咲workspring！",rating:6.9,img:"no_icon_subject.png"},{title:"美少女万华镜 -为神所创的少女们-",rating:7.2,img:"no_icon_subject.png"},{title:"FLOWERS 夏篇",rating:8.1,img:"119895_gJ4qq.jpg"}],2016:[{title:"天津罪",rating:7.6,img:"no_icon_subject.png"},{title:"千恋＊万花",rating:6.9,img:"no_icon_subject.png"},{title:"海底",rating:8.5,img:"226956_6c4wV.jpg"},{title:"女神异闻录5",rating:8.7,img:"88868_wSSyP.jpg"},{title:"逝去的你、于馆中萌生的憎恶",rating:6.3,img:"no_icon_subject.png"},{title:"VA-11 HALL-A：赛博朋克酒保行动",rating:8.1,img:"186554_VfFt9.jpg"},{title:"伊苏VIII -丹娜的陨涕日-",rating:8.3,img:"112339_67W3w.jpg"},{title:"夏色心跳日志",rating:6.8,img:"no_icon_subject.png"},{title:"花之天使的夏日恋歌",rating:7.2,img:"no_icon_subject.png"},{title:"野良与皇女与流浪猫之心",rating:7.2,img:"no_icon_subject.png"},{title:"来自昏暗的时间尽头",rating:7.4,img:"192005_czggU.jpg"},{title:"夏之锁",rating:6.7,img:"no_icon_subject.png"},{title:"King Exit",rating:8,img:"no_icon_subject.png"},{title:"爱上火车",rating:6.8,img:"no_icon_subject.png"},{title:"Re:LieF 〜献给亲爱的你〜",rating:6.9,img:"no_icon_subject.png"},{title:"银色遥远",rating:7.2,img:"161787_dcCHd.jpg"},{title:"永不枯萎的世界与终结之花",rating:6.7,img:"no_icon_subject.png"},{title:"D.C.III With You",rating:6.8,img:"136477_14Dps.jpg"},{title:"ISLAND",rating:7.8,img:"150191_BtQpr.jpg"}],2017:[{title:"流景之海的艾佩理雅",rating:8,img:"no_icon_subject.png"},{title:"青鸟",rating:7.4,img:"no_icon_subject.png"},{title:"金辉恋曲四重奏",rating:7.6,img:"no_icon_subject.png"},{title:"BLACKSOULS -黒の童話と五魔姫-",rating:7.4,img:"no_icon_subject.png"},{title:"尼尔 自动人形",rating:8.1,img:"137588_634EA.jpg"},{title:"9-nine-九次九日九重色",rating:6.4,img:"189739_n3YFN.jpg"},{title:"水葬银货的伊斯特利亚",rating:7.3,img:"no_icon_subject.png"},{title:"まほ×ろば -Witches spiritual home-",rating:6.6,img:"no_icon_subject.png"},{title:"大逆转裁判2 成步堂龙之介的觉悟",rating:8.7,img:"192977_ZM6UN.jpg"},{title:"异度神剑2",rating:8.2,img:"205916_Uwk5y.jpg"},{title:"突然＊恋人",rating:7.5,img:"no_icon_subject.png"},{title:"苍之彼方的四重奏 EXTRA1",rating:7.2,img:"no_icon_subject.png"},{title:"天结城堡大师",rating:7.5,img:"no_icon_subject.png"},{title:"新弹丸论破V3 大家的自相残杀新学期",rating:7.2,img:"146579_388qk.jpg"},{title:"美少女万华镜 -罪与罚的少女-",rating:6.9,img:"no_icon_subject.png"},{title:"月影魅像-解放之羽-",rating:7,img:"196972_UY4uC.jpg"},{title:"7days—与你共度的七日间",rating:7.4,img:"193905_hyyFf.jpg"},{title:"你去死吧 －多数决死亡游戏－",rating:7.8,img:"224621_EsV97.jpg"}],2018:[{title:"抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？",rating:7.5,img:"no_icon_subject.png"},{title:"Summer Pockets",rating:8.3,img:"200763_s2kSG.jpg"},{title:"兰斯10 决战",rating:9.3,img:"no_icon_subject.png"},{title:"BLACKSOULSII -愛しき貴方へ贈る不思議の国-",rating:8.8,img:"no_icon_subject.png"},{title:"9-nine-天色天歌天籁音",rating:7.2,img:"222145_s4Zqm.jpg"},{title:"幽灵镇少女 第一季",rating:7.9,img:"253978_G2oyc.jpg"},{title:"美好的每一天 ～不连续的存在～全语音HD版",rating:9,img:"259061_i2Ou2.jpg"},{title:"少女与我、两纪之差",rating:6.7,img:"no_icon_subject.png"},{title:"蔚蓝",rating:8.6,img:"236561_566w2.jpg"},{title:"乌有乡",rating:7.3,img:"no_icon_subject.png"},{title:"RIDDLE JOKER",rating:6.6,img:"no_icon_subject.png"},{title:"底特律：化身为人",rating:7.2,img:"151187_hcCin.jpg"},{title:"奇异恩典·圣夜的小镇",rating:7.5,img:"254208_RgeC4.jpg"},{title:"寄宿之恋",rating:6.8,img:"no_icon_subject.png"},{title:"5分钟的邂逅！时间停止与不可避免的命运！",rating:6.5,img:"253737_RfNaC.jpg"},{title:"白色相簿2 扩展版",rating:9.2,img:"424578_ZW90U.jpg"}],2019:[{title:"樱花、萌放。-as the Night's, Reincarnation-",rating:8.3,img:"233030_422zH.jpg"},{title:"抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？2",rating:8.1,img:"no_icon_subject.png"},{title:"女神异闻录5 皇家版",rating:8.4,img:"278949_zTV4y.jpg"},{title:"MUSICUS!",rating:8.5,img:"no_icon_subject.png"},{title:"极乐迪斯科",rating:8.7,img:"291280_lMGRs.jpg"},{title:"死月妖花～四月八日～",rating:9,img:"280440_do0j5.jpg"},{title:"十三机兵防卫圈",rating:8.6,img:"146598_m2Dj6.jpg"},{title:"9-nine-春色春恋春熙风",rating:6.9,img:"256657_F446i.jpg"},{title:"金辉恋曲四重奏 -Golden Time-",rating:7.5,img:"no_icon_subject.png"},{title:"恋愛、借りちゃいました",rating:6.8,img:"no_icon_subject.png"},{title:"星光咖啡馆与死神之蝶",rating:6.4,img:"no_icon_subject.png"},{title:"青空下的加缪",rating:7.1,img:"no_icon_subject.png"},{title:"AI：梦境档案",rating:7.5,img:"252657_adMO0.jpg"},{title:"异想魅惑",rating:7.2,img:"no_icon_subject.png"},{title:"虚幻寓言：欲望的祭品",rating:7.4,img:"no_icon_subject.png"}],2020:[{title:"Summer Pockets REFLECTION BLUE",rating:8.4,img:"295957_H64uh.jpg"},{title:"甜蜜女友2",rating:7.4,img:"no_icon_subject.png"},{title:"樱色之云绯色之恋",rating:7.7,img:"no_icon_subject.png"},{title:"常轨脱离Creative",rating:6.9,img:"no_icon_subject.png"},{title:"亚托莉 -我挚爱的时光-",rating:7.2,img:"297264_Llz6w.jpg"},{title:"9-nine-雪色雪花雪之痕",rating:7.7,img:"290856_ft4cG.jpg"},{title:"星空列车与白的旅行",rating:7.5,img:"304421_HOeaY.jpg"},{title:"爱上火车-Last Run!!-",rating:7.2,img:"no_icon_subject.png"},{title:"白日梦的构想图",rating:7.5,img:"295075_ejRG6.jpg"},{title:"美少女万华镜 -理与迷宫的少女-",rating:7.4,img:"no_icon_subject.png"},{title:"恋爱X决胜战",rating:6.4,img:"no_icon_subject.png"},{title:"丸子与银河龙",rating:7.5,img:"291333_CQiz4.jpg"},{title:"保健室的老师与沉迷吹泡泡的助手",rating:7.2,img:"no_icon_subject.png"},{title:"女神异闻录5 乱战：魅影攻手",rating:7.3,img:"281281_f2Y2T.jpg"},{title:"ウウウルトラC",rating:7.7,img:"no_icon_subject.png"},{title:"Saleté",rating:7.2,img:"no_icon_subject.png"},{title:"多娜多娜 一起干坏事吧",rating:7.4,img:"no_icon_subject.png"},{title:"绽放★青春全力向前冲！",rating:6.1,img:"no_icon_subject.png"}],2021:[{title:"永恒世界",rating:8.4,img:"no_icon_subject.png"},{title:"9-nine- 新章",rating:6.1,img:"314651_DU3aM.jpg"},{title:"我们是不能延期了",rating:7.2,img:"no_icon_subject.png"},{title:"Monkeys!¡",rating:7.2,img:"no_icon_subject.png"},{title:"冬暮川滚滚",rating:7.3,img:"no_icon_subject.png"},{title:"圣骑士莉卡物语 白翼与淫翼姐妹",rating:7.7,img:"no_icon_subject.png"},{title:"创作彼女的恋爱方程式",rating:6.1,img:"no_icon_subject.png"},{title:"月姬 -A piece of blue glass moon-",rating:8.2,img:"46874_JC7Q5.jpg"},{title:"东方夜雀食堂",rating:7.4,img:"339525_d2YWK.jpg"},{title:"终焉之莉莉：骑士寂夜",rating:7.3,img:"320211_k7iHo.jpg"},{title:"海沙风云",rating:7.3,img:"295004_C82CM.jpg"},{title:"D.C.4 Plus Harmony",rating:6.5,img:"333293_91xdU.jpg"},{title:"大逆転裁判1＆2　-成歩堂龍ノ介の冒險と覺悟-",rating:8.4,img:"490291_K37Vd.jpg"},{title:"吹弹！丰盈！波涛汹涌！异世界魅魔学园！",rating:7.2,img:"no_icon_subject.png"},{title:"海猫鸣泣之时咲～猫箱和梦想的交响曲～",rating:8.8,img:"328585_yDsz4.jpg"},{title:"纯爱咖啡厅～帕露菲重制版～",rating:7.7,img:"323156_NNNZw.jpg"},{title:"星之梦 -雪圈球-",rating:6.2,img:"339372_eoy09.jpg"}],2022:[{title:"变态监狱",rating:8.7,img:"no_icon_subject.png"},{title:"废村少女 ～妖异魅惑的笼之乡～",rating:6.8,img:"no_icon_subject.png"},{title:"星之终途",rating:7.5,img:"317675_csQ2e.jpg"},{title:"苍之彼方的四重奏 EXTRA2",rating:8.3,img:"no_icon_subject.png"},{title:"ハミダシクリエイティブ凸",rating:6.8,img:"no_icon_subject.png"},{title:"神之天平 ～活着的证明～ Revision",rating:8.2,img:"405362_TLJ9L.jpg"},{title:"BLACK SHEEP TOWN",rating:8.4,img:"212376_A4HAq.jpg"},{title:"甜蜜夏日",rating:7,img:"377476_JxnJ4.jpg"},{title:"恋爱成双",rating:6.7,img:"no_icon_subject.png"},{title:"AMBITIOUS MISSION",rating:7.4,img:"no_icon_subject.png"},{title:"妹！相随 ~黑白世界的缤纷冒险~",rating:7.5,img:"no_icon_subject.png"},{title:"为主人献上圣罗的甜蜜侍奉",rating:6.4,img:"no_icon_subject.png"},{title:"ジュエリー・ハーツ・アカデミア -We will wing wonder world-",rating:7.2,img:"no_icon_subject.png"},{title:"魔法使之夜",rating:9.2,img:"540053_YkH88.jpg"},{title:"主播女孩重度依赖",rating:7,img:"328321_29l4y.jpg"}],2023:[{title:"甜蜜女友2+",rating:8.1,img:"no_icon_subject.png"},{title:"樱之刻 - 于樱花之森下漫步",rating:8.3,img:"no_icon_subject.png"},{title:"纯白交响曲 SANA EDITION",rating:7.6,img:"417463_roe96.jpg"},{title:"歧路旅人2",rating:8,img:"401184_pD9Gp.jpg"},{title:"恋狱～月狂病～ 重制版",rating:7.9,img:"no_icon_subject.png"},{title:"Hira Hira Hihiru",rating:7.8,img:"402650_13frc.jpg"},{title:"天使☆嚣嚣 RE-BOOT!",rating:6,img:"no_icon_subject.png"},{title:"纯白交响曲 Remake for FHD",rating:7.2,img:"no_icon_subject.png"},{title:"GINKA",rating:5.9,img:"402654_uo8T1.jpg"},{title:"伊苏X -北境历险-",rating:7.7,img:"390508_5jLj8.jpg"},{title:"只属于我的神秘规则！赢了女训练家的话H是理所当然的",rating:7.5,img:"no_icon_subject.png"},{title:"密语-Silver Snow Sister-",rating:6.5,img:"no_icon_subject.png"}],2024:[{title:"播种之谣",rating:7.7,img:"486165_CtccO.jpg"},{title:"女神异闻录3 Reload",rating:7.6,img:"440141_4zX6q.jpg"},{title:"圣兽之王",rating:7.8,img:"454685_j0mXu.jpg"},{title:"暗喻幻想：ReFantazio",rating:7.1,img:"203681_rKQy1.jpg"},{title:"雨夜迷醉时～A night filled with the sound of rain～",rating:6,img:"507999_000ZA.jpg"},{title:"秘密之恋（伪）",rating:6,img:"no_icon_subject.png"},{title:"最终幻想7 重生",rating:7.6,img:"388136_65Snb.jpg"},{title:"碧蓝幻想 Relink",rating:7.5,img:"233713_55t58.jpg"},{title:"D.C.5 Plus Happiness ～ダ・カーポ5～プラスハピネス",rating:7.6,img:"no_icon_subject.png"},{title:"真・女神转生V Vengeance",rating:8.1,img:"481667_Y2E2g.jpg"},{title:"逆转检察官1&2 御剑精选集",rating:7.8,img:"499873_upvwZ.jpg"},{title:"人中之龙8",rating:7.5,img:"401332_rN398.jpg"},{title:"异想魅惑2暮色廻奇谭",rating:6.5,img:"no_icon_subject.png"},{title:"美少女万华镜异闻 雪女",rating:6.2,img:"no_icon_subject.png"},{title:"旭光のマリアージュ",rating:6.8,img:"no_icon_subject.png"}]};function Vn(t,e){return t[13]=1,t[14]=e>>8,t[15]=e&255,t[16]=e>>8,t[17]=e&255,t}const Je=112,Qe=72,tn=89,en=115;let ee;function Yn(){const t=new Int32Array(256);for(let e=0;e<256;e++){let n=e;for(let i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;t[e]=n}return t}function Kn(t){let e=-1;ee||(ee=Yn());for(let n=0;n<t.length;n++)e=ee[(e^t[n])&255]^e>>>8;return e^-1}function qn(t){const e=t.length-1;for(let n=e;n>=4;n--)if(t[n-4]===9&&t[n-3]===Je&&t[n-2]===Qe&&t[n-1]===tn&&t[n]===en)return n-3;return 0}function Gn(t,e,n=!1){const i=new Uint8Array(13);e*=39.3701,i[0]=Je,i[1]=Qe,i[2]=tn,i[3]=en,i[4]=e>>>24,i[5]=e>>>16,i[6]=e>>>8,i[7]=e&255,i[8]=i[4],i[9]=i[5],i[10]=i[6],i[11]=i[7],i[12]=1;const o=Kn(i),r=new Uint8Array(4);if(r[0]=o>>>24,r[1]=o>>>16,r[2]=o>>>8,r[3]=o&255,n){const a=qn(t);return t.set(i,a),t.set(r,a+13),t}else{const a=new Uint8Array(4);a[0]=0,a[1]=0,a[2]=0,a[3]=9;const s=new Uint8Array(54);return s.set(t,0),s.set(a,33),s.set(i,37),s.set(r,50),s}}const nn="[modern-screenshot]",dt=typeof window<"u",Xn=dt&&"Worker"in window,Zn=dt&&"atob"in window;var He;const fe=dt?(He=window.navigator)==null?void 0:He.userAgent:"",rn=fe.includes("Chrome"),zt=fe.includes("AppleWebKit")&&!rn,de=fe.includes("Firefox"),Jn=t=>t&&"__CONTEXT__"in t,Qn=t=>t.constructor.name==="CSSFontFaceRule",ti=t=>t.constructor.name==="CSSImportRule",tt=t=>t.nodeType===1,Ot=t=>typeof t.className=="object",on=t=>t.tagName==="image",ei=t=>t.tagName==="use",Ct=t=>tt(t)&&typeof t.style<"u"&&!Ot(t),ni=t=>t.nodeType===8,ii=t=>t.nodeType===3,vt=t=>t.tagName==="IMG",qt=t=>t.tagName==="VIDEO",ri=t=>t.tagName==="CANVAS",oi=t=>t.tagName==="TEXTAREA",ai=t=>t.tagName==="INPUT",si=t=>t.tagName==="STYLE",li=t=>t.tagName==="SCRIPT",ci=t=>t.tagName==="SELECT",gi=t=>t.tagName==="SLOT",ui=t=>t.tagName==="IFRAME",fi=(...t)=>console.warn(nn,...t);function di(t){var n;const e=(n=t==null?void 0:t.createElement)==null?void 0:n.call(t,"canvas");return e&&(e.height=e.width=1),!!e&&"toDataURL"in e&&!!e.toDataURL("image/webp").includes("image/webp")}const se=t=>t.startsWith("data:");function an(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(dt&&t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i)||!dt)return t;const n=Gt().implementation.createHTMLDocument(),i=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(o),e&&(i.href=e),o.href=t,o.href}function Gt(t){return(t&&tt(t)?t==null?void 0:t.ownerDocument:t)??window.document}const Xt="http://www.w3.org/2000/svg";function mi(t,e,n){const i=Gt(n).createElementNS(Xt,"svg");return i.setAttributeNS(null,"width",t.toString()),i.setAttributeNS(null,"height",e.toString()),i.setAttributeNS(null,"viewBox",`0 0 ${t} ${e}`),i}function hi(t,e){let n=new XMLSerializer().serializeToString(t);return e&&(n=n.replace(/[\u0000-\u0008\v\f\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu,"")),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`}async function pi(t,e="image/png",n=1){try{return await new Promise((i,o)=>{t.toBlob(r=>{r?i(r):o(new Error("Blob is null"))},e,n)})}catch(i){if(Zn)return bi(t.toDataURL(e,n));throw i}}function bi(t){var s;const[e,n]=t.split(","),i=((s=e.match(/data:(.+);/))==null?void 0:s[1])??void 0,o=window.atob(n),r=o.length,a=new Uint8Array(r);for(let c=0;c<r;c+=1)a[c]=o.charCodeAt(c);return new Blob([a],{type:i})}function sn(t,e){return new Promise((n,i)=>{const o=new FileReader;o.onload=()=>n(o.result),o.onerror=()=>i(o.error),o.onabort=()=>i(new Error(`Failed read blob to ${e}`)),e==="dataUrl"?o.readAsDataURL(t):e==="arrayBuffer"&&o.readAsArrayBuffer(t)})}const _i=t=>sn(t,"dataUrl"),wi=t=>sn(t,"arrayBuffer");function yt(t,e){const n=Gt(e).createElement("img");return n.decoding="sync",n.loading="eager",n.src=t,n}function It(t,e){return new Promise(n=>{const{timeout:i,ownerDocument:o,onError:r,onWarn:a}=e??{},s=typeof t=="string"?yt(t,Gt(o)):t;let c=null,u=null;function l(){n(s),c&&clearTimeout(c),u==null||u()}if(i&&(c=setTimeout(l,i)),qt(s)){const g=s.currentSrc||s.src;if(!g)return s.poster?It(s.poster,e).then(n):l();if(s.readyState>=2)return l();const m=l,f=y=>{a==null||a("Failed video load",g,y),r==null||r(y),l()};u=()=>{s.removeEventListener("loadeddata",m),s.removeEventListener("error",f)},s.addEventListener("loadeddata",m,{once:!0}),s.addEventListener("error",f,{once:!0})}else{const g=on(s)?s.href.baseVal:s.currentSrc||s.src;if(!g)return l();const m=async()=>{if(vt(s)&&"decode"in s)try{await s.decode()}catch(y){a==null||a("Failed to decode image, trying to render anyway",s.dataset.originalSrc||g,y)}l()},f=y=>{a==null||a("Failed image load",s.dataset.originalSrc||g,y),l()};if(vt(s)&&s.complete)return m();u=()=>{s.removeEventListener("load",m),s.removeEventListener("error",f)},s.addEventListener("load",m,{once:!0}),s.addEventListener("error",f,{once:!0})}})}async function yi(t,e){Ct(t)&&(vt(t)||qt(t)?await It(t,e):await Promise.all(["img","video"].flatMap(n=>Array.from(t.querySelectorAll(n)).map(i=>It(i,e)))))}const ln=function(){let e=0;const n=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${n()}${e}`)}();function cn(t){return t==null?void 0:t.split(",").map(e=>e.trim().replace(/"|'/g,"").toLowerCase()).filter(Boolean)}let Oe=0;function ji(t){const e=`${nn}[#${Oe}]`;return Oe++,{time:n=>t&&console.time(`${e} ${n}`),timeEnd:n=>t&&console.timeEnd(`${e} ${n}`),warn:(...n)=>t&&fi(...n)}}function vi(t){return{cache:t?"no-cache":"force-cache"}}async function me(t,e){return Jn(t)?t:Si(t,{...e,autoDestruct:!0})}async function Si(t,e){var f,y;const{scale:n=1,workerUrl:i,workerNumber:o=1}=e||{},r=!!(e!=null&&e.debug),a=(e==null?void 0:e.features)??!0,s=t.ownerDocument??(dt?window.document:void 0),c=((f=t.ownerDocument)==null?void 0:f.defaultView)??(dt?window:void 0),u=new Map,l={width:0,height:0,quality:1,type:"image/png",scale:n,backgroundColor:null,style:null,filter:null,maximumCanvasSize:0,timeout:3e4,progress:null,debug:r,fetch:{requestInit:vi((y=e==null?void 0:e.fetch)==null?void 0:y.bypassingCache),placeholderImage:"data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",bypassingCache:!1,...e==null?void 0:e.fetch},fetchFn:null,font:{},drawImageInterval:100,workerUrl:null,workerNumber:o,onCloneNode:null,onEmbedNode:null,onCreateForeignObjectSvg:null,includeStyleProperties:null,autoDestruct:!1,...e,__CONTEXT__:!0,log:ji(r),node:t,ownerDocument:s,ownerWindow:c,dpi:n===1?null:96*n,svgStyleElement:gn(s),svgDefsElement:s==null?void 0:s.createElementNS(Xt,"defs"),svgStyles:new Map,defaultComputedStyles:new Map,workers:[...Array.from({length:Xn&&i&&o?o:0})].map(()=>{try{const h=new Worker(i);return h.onmessage=async b=>{var x,w,p,E;const{url:j,result:_}=b.data;_?(w=(x=u.get(j))==null?void 0:x.resolve)==null||w.call(x,_):(E=(p=u.get(j))==null?void 0:p.reject)==null||E.call(p,new Error(`Error receiving message from worker: ${j}`))},h.onmessageerror=b=>{var _,x;const{url:j}=b.data;(x=(_=u.get(j))==null?void 0:_.reject)==null||x.call(_,new Error(`Error receiving message from worker: ${j}`))},h}catch(h){return l.log.warn("Failed to new Worker",h),null}}).filter(Boolean),fontFamilies:new Map,fontCssTexts:new Map,acceptOfImage:`${[di(s)&&"image/webp","image/svg+xml","image/*","*/*"].filter(Boolean).join(",")};q=0.8`,requests:u,drawImageCount:0,tasks:[],features:a,isEnable:h=>h==="restoreScrollPosition"?typeof a=="boolean"?!1:a[h]??!1:typeof a=="boolean"?a:a[h]??!0};l.log.time("wait until load"),await yi(t,{timeout:l.timeout,onWarn:l.log.warn}),l.log.timeEnd("wait until load");const{width:g,height:m}=xi(t,l);return l.width=g,l.height=m,l}function gn(t){if(!t)return;const e=t.createElement("style"),n=e.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);return e.appendChild(n),e}function xi(t,e){let{width:n,height:i}=e;if(tt(t)&&(!n||!i)){const o=t.getBoundingClientRect();n=n||o.width||Number(t.getAttribute("width"))||0,i=i||o.height||Number(t.getAttribute("height"))||0}return{width:n,height:i}}async function Ei(t,e){const{log:n,timeout:i,drawImageCount:o,drawImageInterval:r}=e;n.time("image to canvas");const a=await It(t,{timeout:i,onWarn:e.log.warn}),{canvas:s,context2d:c}=Ai(t.ownerDocument,e),u=()=>{try{c==null||c.drawImage(a,0,0,s.width,s.height)}catch(l){e.log.warn("Failed to drawImage",l)}};if(u(),e.isEnable("fixSvgXmlDecode"))for(let l=0;l<o;l++)await new Promise(g=>{setTimeout(()=>{u(),g()},l+r)});return e.drawImageCount=0,n.timeEnd("image to canvas"),s}function Ai(t,e){const{width:n,height:i,scale:o,backgroundColor:r,maximumCanvasSize:a}=e,s=t.createElement("canvas");s.width=Math.floor(n*o),s.height=Math.floor(i*o),s.style.width=`${n}px`,s.style.height=`${i}px`,a&&(s.width>a||s.height>a)&&(s.width>a&&s.height>a?s.width>s.height?(s.height*=a/s.width,s.width=a):(s.width*=a/s.height,s.height=a):s.width>a?(s.height*=a/s.width,s.width=a):(s.width*=a/s.height,s.height=a));const c=s.getContext("2d");return c&&r&&(c.fillStyle=r,c.fillRect(0,0,s.width,s.height)),{canvas:s,context2d:c}}function un(t,e){if(t.ownerDocument)try{const r=t.toDataURL();if(r!=="data:,")return yt(r,t.ownerDocument)}catch(r){e.log.warn("Failed to clone canvas",r)}const n=t.cloneNode(!1),i=t.getContext("2d"),o=n.getContext("2d");try{return i&&o&&o.putImageData(i.getImageData(0,0,t.width,t.height),0,0),n}catch(r){e.log.warn("Failed to clone canvas",r)}return n}function Ti(t,e){var n;try{if((n=t==null?void 0:t.contentDocument)!=null&&n.body)return he(t.contentDocument.body,e)}catch(i){e.log.warn("Failed to clone iframe",i)}return t.cloneNode(!1)}function Ci(t){const e=t.cloneNode(!1);return t.currentSrc&&t.currentSrc!==t.src&&(e.src=t.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager"),e}async function Ii(t,e){if(t.ownerDocument&&!t.currentSrc&&t.poster)return yt(t.poster,t.ownerDocument);const n=t.cloneNode(!1);n.crossOrigin="anonymous",t.currentSrc&&t.currentSrc!==t.src&&(n.src=t.currentSrc);const i=n.ownerDocument;if(i){let o=!0;if(await It(n,{onError:()=>o=!1,onWarn:e.log.warn}),!o)return t.poster?yt(t.poster,t.ownerDocument):n;n.currentTime=t.currentTime,await new Promise(a=>{n.addEventListener("seeked",a,{once:!0})});const r=i.createElement("canvas");r.width=t.offsetWidth,r.height=t.offsetHeight;try{const a=r.getContext("2d");a&&a.drawImage(n,0,0,r.width,r.height)}catch(a){return e.log.warn("Failed to clone video",a),t.poster?yt(t.poster,t.ownerDocument):n}return un(r,e)}return n}function ki(t,e){return ri(t)?un(t,e):ui(t)?Ti(t,e):vt(t)?Ci(t):qt(t)?Ii(t,e):t.cloneNode(!1)}function Ni(t){var n;let e=t.sandbox;if(!e){const{ownerDocument:i}=t;try{i&&(e=i.createElement("iframe"),e.id=`__SANDBOX__-${ln()}`,e.width="0",e.height="0",e.style.visibility="hidden",e.style.position="fixed",i.body.appendChild(e),(n=e.contentWindow)==null||n.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'),t.sandbox=e)}catch(o){t.log.warn("Failed to getSandBox",o)}}return e}const $i=["width","height","-webkit-text-fill-color"],Oi=["stroke","fill"];function fn(t,e,n){const{defaultComputedStyles:i}=n,o=t.nodeName.toLowerCase(),r=Ot(t)&&o!=="svg",a=r?Oi.map(h=>[h,t.getAttribute(h)]).filter(([,h])=>h!==null):[],s=[r&&"svg",o,a.map((h,b)=>`${h}=${b}`).join(","),e].filter(Boolean).join(":");if(i.has(s))return i.get(s);const c=Ni(n),u=c==null?void 0:c.contentWindow;if(!u)return new Map;const l=u==null?void 0:u.document;let g,m;r?(g=l.createElementNS(Xt,"svg"),m=g.ownerDocument.createElementNS(g.namespaceURI,o),a.forEach(([h,b])=>{m.setAttributeNS(null,h,b)}),g.appendChild(m)):g=m=l.createElement(o),m.textContent=" ",l.body.appendChild(g);const f=u.getComputedStyle(m,e),y=new Map;for(let h=f.length,b=0;b<h;b++){const j=f.item(b);$i.includes(j)||y.set(j,f.getPropertyValue(j))}return l.body.removeChild(g),i.set(s,y),y}function dn(t,e,n){var s;const i=new Map,o=[],r=new Map;if(n)for(const c of n)a(c);else for(let c=t.length,u=0;u<c;u++){const l=t.item(u);a(l)}for(let c=o.length,u=0;u<c;u++)(s=r.get(o[u]))==null||s.forEach((l,g)=>i.set(g,l));function a(c){const u=t.getPropertyValue(c),l=t.getPropertyPriority(c),g=c.lastIndexOf("-"),m=g>-1?c.substring(0,g):void 0;if(m){let f=r.get(m);f||(f=new Map,r.set(m,f)),f.set(c,[u,l])}e.get(c)===u&&!l||(m?o.push(m):i.set(c,[u,l]))}return i}function Pi(t,e,n,i){var g,m,f,y;const{ownerWindow:o,includeStyleProperties:r,currentParentNodeStyle:a}=i,s=e.style,c=o.getComputedStyle(t),u=fn(t,null,i);a==null||a.forEach((h,b)=>{u.delete(b)});const l=dn(c,u,r);l.delete("transition-property"),l.delete("all"),l.delete("d"),l.delete("content"),n&&(l.delete("margin-top"),l.delete("margin-right"),l.delete("margin-bottom"),l.delete("margin-left"),l.delete("margin-block-start"),l.delete("margin-block-end"),l.delete("margin-inline-start"),l.delete("margin-inline-end"),l.set("box-sizing",["border-box",""])),((g=l.get("background-clip"))==null?void 0:g[0])==="text"&&e.classList.add("______background-clip--text"),rn&&(l.has("font-kerning")||l.set("font-kerning",["normal",""]),(((m=l.get("overflow-x"))==null?void 0:m[0])==="hidden"||((f=l.get("overflow-y"))==null?void 0:f[0])==="hidden")&&((y=l.get("text-overflow"))==null?void 0:y[0])==="ellipsis"&&t.scrollWidth===t.clientWidth&&l.set("text-overflow",["clip",""]));for(let h=s.length,b=0;b<h;b++)s.removeProperty(s.item(b));return l.forEach(([h,b],j)=>{s.setProperty(j,h,b)}),l}function Ri(t,e){(oi(t)||ai(t)||ci(t))&&e.setAttribute("value",t.value)}const Di=[":before",":after"],Li=[":-webkit-scrollbar",":-webkit-scrollbar-button",":-webkit-scrollbar-thumb",":-webkit-scrollbar-track",":-webkit-scrollbar-track-piece",":-webkit-scrollbar-corner",":-webkit-resizer"];function Bi(t,e,n,i,o){const{ownerWindow:r,svgStyleElement:a,svgStyles:s,currentNodeStyle:c}=i;if(!a||!r)return;function u(l){var x;const g=r.getComputedStyle(t,l);let m=g.getPropertyValue("content");if(!m||m==="none")return;o==null||o(m),m=m.replace(/(')|(")|(counter\(.+\))/g,"");const f=[ln()],y=fn(t,l,i);c==null||c.forEach((w,p)=>{y.delete(p)});const h=dn(g,y,i.includeStyleProperties);h.delete("content"),h.delete("-webkit-locale"),((x=h.get("background-clip"))==null?void 0:x[0])==="text"&&e.classList.add("______background-clip--text");const b=[`content: '${m}';`];if(h.forEach(([w,p],E)=>{b.push(`${E}: ${w}${p?" !important":""};`)}),b.length===1)return;try{e.className=[e.className,...f].join(" ")}catch(w){i.log.warn("Failed to copyPseudoClass",w);return}const j=b.join(`
  `);let _=s.get(j);_||(_=[],s.set(j,_)),_.push(`.${f[0]}:${l}`)}Di.forEach(u),n&&Li.forEach(u)}const Pe=new Set(["symbol"]);async function Re(t,e,n,i,o){if(tt(n)&&(si(n)||li(n))||i.filter&&!i.filter(n))return;Pe.has(e.nodeName)||Pe.has(n.nodeName)?i.currentParentNodeStyle=void 0:i.currentParentNodeStyle=i.currentNodeStyle;const r=await he(n,i,!1,o);i.isEnable("restoreScrollPosition")&&Ui(t,r),e.appendChild(r)}async function De(t,e,n,i){var r;const o=(tt(t)?(r=t.shadowRoot)==null?void 0:r.firstChild:void 0)??t.firstChild;for(let a=o;a;a=a.nextSibling)if(!ni(a))if(tt(a)&&gi(a)&&typeof a.assignedNodes=="function"){const s=a.assignedNodes();for(let c=0;c<s.length;c++)await Re(t,e,s[c],n,i)}else await Re(t,e,a,n,i)}function Ui(t,e){if(!Ct(t)||!Ct(e))return;const{scrollTop:n,scrollLeft:i}=t;if(!n&&!i)return;const{transform:o}=e.style,r=new DOMMatrix(o),{a,b:s,c,d:u}=r;r.a=1,r.b=0,r.c=0,r.d=1,r.translateSelf(-i,-n),r.a=a,r.b=s,r.c=c,r.d=u,e.style.transform=r.toString()}function Fi(t,e){const{backgroundColor:n,width:i,height:o,style:r}=e,a=t.style;if(n&&a.setProperty("background-color",n,"important"),i&&a.setProperty("width",`${i}px`,"important"),o&&a.setProperty("height",`${o}px`,"important"),r)for(const s in r)a[s]=r[s]}const Mi=/^[\w-:]+$/;async function he(t,e,n=!1,i){var c,u,l,g;const{ownerDocument:o,ownerWindow:r,fontFamilies:a}=e;if(o&&ii(t))return i&&/\S/.test(t.data)&&i(t.data),o.createTextNode(t.data);if(o&&r&&tt(t)&&(Ct(t)||Ot(t))){const m=await ki(t,e);if(e.isEnable("removeAbnormalAttributes")){const _=m.getAttributeNames();for(let x=_.length,w=0;w<x;w++){const p=_[w];Mi.test(p)||m.removeAttribute(p)}}const f=e.currentNodeStyle=Pi(t,m,n,e);n&&Fi(m,e);let y=!1;if(e.isEnable("copyScrollbar")){const _=[(c=f.get("overflow-x"))==null?void 0:c[0],(u=f.get("overflow-y"))==null?void 0:u[0]];y=_.includes("scroll")||(_.includes("auto")||_.includes("overlay"))&&(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth)}const h=(l=f.get("text-transform"))==null?void 0:l[0],b=cn((g=f.get("font-family"))==null?void 0:g[0]),j=b?_=>{h==="uppercase"?_=_.toUpperCase():h==="lowercase"?_=_.toLowerCase():h==="capitalize"&&(_=_[0].toUpperCase()+_.substring(1)),b.forEach(x=>{let w=a.get(x);w||a.set(x,w=new Set),_.split("").forEach(p=>w.add(p))})}:void 0;return Bi(t,m,y,e,j),Ri(t,m),qt(t)||await De(t,m,e,j),m}const s=t.cloneNode(!1);return await De(t,s,e),s}function Hi(t){if(t.ownerDocument=void 0,t.ownerWindow=void 0,t.svgStyleElement=void 0,t.svgDefsElement=void 0,t.svgStyles.clear(),t.defaultComputedStyles.clear(),t.sandbox){try{t.sandbox.remove()}catch(e){t.log.warn("Failed to destroyContext",e)}t.sandbox=void 0}t.workers=[],t.fontFamilies.clear(),t.fontCssTexts.clear(),t.requests.clear(),t.tasks=[]}function zi(t){const{url:e,timeout:n,responseType:i,...o}=t,r=new AbortController,a=n?setTimeout(()=>r.abort(),n):void 0;return fetch(e,{signal:r.signal,...o}).then(s=>{if(!s.ok)throw new Error("Failed fetch, not 2xx response",{cause:s});switch(i){case"arrayBuffer":return s.arrayBuffer();case"dataUrl":return s.blob().then(_i);case"text":default:return s.text()}}).finally(()=>clearTimeout(a))}function kt(t,e){const{url:n,requestType:i="text",responseType:o="text",imageDom:r}=e;let a=n;const{timeout:s,acceptOfImage:c,requests:u,fetchFn:l,fetch:{requestInit:g,bypassingCache:m,placeholderImage:f},font:y,workers:h,fontFamilies:b}=t;i==="image"&&(zt||de)&&t.drawImageCount++;let j=u.get(n);if(!j){m&&m instanceof RegExp&&m.test(a)&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());const _=i.startsWith("font")&&y&&y.minify,x=new Set;_&&i.split(";")[1].split(",").forEach($=>{b.has($)&&b.get($).forEach(V=>x.add(V))});const w=_&&x.size,p={url:a,timeout:s,responseType:w?"arrayBuffer":o,headers:i==="image"?{accept:c}:void 0,...g};j={type:i,resolve:void 0,reject:void 0,response:null},j.response=(async()=>{if(l&&i==="image"){const E=await l(n);if(E)return E}return!zt&&n.startsWith("http")&&h.length?new Promise((E,$)=>{h[u.size&h.length-1].postMessage({rawUrl:n,...p}),j.resolve=E,j.reject=$}):zi(p)})().catch(E=>{if(u.delete(n),i==="image"&&f)return t.log.warn("Failed to fetch image base64, trying to use placeholder image",a),typeof f=="string"?f:f(r);throw E}),u.set(n,j)}return j.response}async function mn(t,e,n,i){if(!hn(t))return t;for(const[o,r]of Wi(t,e))try{const a=await kt(n,{url:r,requestType:i?"image":"text",responseType:"dataUrl"});t=t.replace(Vi(o),`$1${a}$3`)}catch(a){n.log.warn("Failed to fetch css data url",o,a)}return t}function hn(t){return/url\((['"]?)([^'"]+?)\1\)/.test(t)}const pn=/url\((['"]?)([^'"]+?)\1\)/g;function Wi(t,e){const n=[];return t.replace(pn,(i,o,r)=>(n.push([r,an(r,e)]),i)),n.filter(([i])=>!se(i))}function Vi(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}const Yi=["background-image","border-image-source","-webkit-border-image","-webkit-mask-image","list-style-image"];function Ki(t,e){return Yi.map(n=>{const i=t.getPropertyValue(n);return!i||i==="none"?null:((zt||de)&&e.drawImageCount++,mn(i,null,e,!0).then(o=>{!o||i===o||t.setProperty(n,o,t.getPropertyPriority(n))}))}).filter(Boolean)}function qi(t,e){if(vt(t)){const n=t.currentSrc||t.src;if(!se(n))return[kt(e,{url:n,imageDom:t,requestType:"image",responseType:"dataUrl"}).then(i=>{i&&(t.srcset="",t.dataset.originalSrc=n,t.src=i||"")})];(zt||de)&&e.drawImageCount++}else if(Ot(t)&&!se(t.href.baseVal)){const n=t.href.baseVal;return[kt(e,{url:n,imageDom:t,requestType:"image",responseType:"dataUrl"}).then(i=>{i&&(t.dataset.originalSrc=n,t.href.baseVal=i||"")})]}return[]}function Gi(t,e){const{ownerDocument:n,svgDefsElement:i}=e,o=t.getAttribute("href")??t.getAttribute("xlink:href");if(!o)return[];const[r,a]=o.split("#");if(a){const s=`#${a}`,c=n==null?void 0:n.querySelector(`svg ${s}`);if(r&&t.setAttribute("href",s),i!=null&&i.querySelector(s))return[];if(c)return i==null||i.appendChild(c.cloneNode(!0)),[];if(r)return[kt(e,{url:r,responseType:"text"}).then(u=>{i==null||i.insertAdjacentHTML("beforeend",u)})]}return[]}function bn(t,e){const{tasks:n}=e;tt(t)&&((vt(t)||on(t))&&n.push(...qi(t,e)),ei(t)&&n.push(...Gi(t,e))),Ct(t)&&n.push(...Ki(t.style,e)),t.childNodes.forEach(i=>{bn(i,e)})}async function Xi(t,e){const{ownerDocument:n,svgStyleElement:i,fontFamilies:o,fontCssTexts:r,tasks:a,font:s}=e;if(!(!n||!i||!o.size))if(s&&s.cssText){const c=Be(s.cssText,e);i.appendChild(n.createTextNode(`${c}
`))}else{const c=Array.from(n.styleSheets).filter(l=>{try{return"cssRules"in l&&!!l.cssRules.length}catch(g){return e.log.warn(`Error while reading CSS rules from ${l.href}`,g),!1}});await Promise.all(c.flatMap(l=>Array.from(l.cssRules).map(async(g,m)=>{if(ti(g)){let f=m+1;const y=g.href;let h="";try{h=await kt(e,{url:y,requestType:"text",responseType:"text"})}catch(j){e.log.warn(`Error fetch remote css import from ${y}`,j)}const b=h.replace(pn,(j,_,x)=>j.replace(x,an(x,y)));for(const j of Ji(b))try{l.insertRule(j,j.startsWith("@import")?f+=1:l.cssRules.length)}catch(_){e.log.warn("Error inserting rule from remote css import",{rule:j,error:_})}}}))),c.flatMap(l=>Array.from(l.cssRules)).filter(l=>{var g;return Qn(l)&&hn(l.style.getPropertyValue("src"))&&((g=cn(l.style.getPropertyValue("font-family")))==null?void 0:g.some(m=>o.has(m)))}).forEach(l=>{const g=l,m=r.get(g.cssText);m?i.appendChild(n.createTextNode(`${m}
`)):a.push(mn(g.cssText,g.parentStyleSheet?g.parentStyleSheet.href:null,e).then(f=>{f=Be(f,e),r.set(g.cssText,f),i.appendChild(n.createTextNode(`${f}
`))}))})}}const Zi=/(\/\*[\s\S]*?\*\/)/g,Le=/((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;function Ji(t){if(t==null)return[];const e=[];let n=t.replace(Zi,"");for(;;){const r=Le.exec(n);if(!r)break;e.push(r[0])}n=n.replace(Le,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let r=i.exec(n);if(r)o.lastIndex=i.lastIndex;else if(r=o.exec(n),r)i.lastIndex=o.lastIndex;else break;e.push(r[0])}return e}const Qi=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,tr=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Be(t,e){const{font:n}=e,i=n?n==null?void 0:n.preferredFormat:void 0;return i?t.replace(tr,o=>{for(;;){const[r,,a]=Qi.exec(o)||[];if(!a)return"";if(a===i)return`src: ${r};`}}):t}async function er(t,e){const n=await me(t,e);if(tt(n.node)&&Ot(n.node))return n.node;const{ownerDocument:i,log:o,tasks:r,svgStyleElement:a,svgDefsElement:s,svgStyles:c,font:u,progress:l,autoDestruct:g,onCloneNode:m,onEmbedNode:f,onCreateForeignObjectSvg:y}=n;o.time("clone node");const h=await he(n.node,n,!0);if(a&&i){let w="";c.forEach((p,E)=>{w+=`${p.join(`,
`)} {
  ${E}
}
`}),a.appendChild(i.createTextNode(w))}o.timeEnd("clone node"),await(m==null?void 0:m(h)),u!==!1&&tt(h)&&(o.time("embed web font"),await Xi(h,n),o.timeEnd("embed web font")),o.time("embed node"),bn(h,n);const b=r.length;let j=0;const _=async()=>{for(;;){const w=r.pop();if(!w)break;try{await w}catch(p){n.log.warn("Failed to run task",p)}l==null||l(++j,b)}};l==null||l(j,b),await Promise.all([...Array.from({length:4})].map(_)),o.timeEnd("embed node"),await(f==null?void 0:f(h));const x=nr(h,n);return s&&x.insertBefore(s,x.children[0]),a&&x.insertBefore(a,x.children[0]),g&&Hi(n),await(y==null?void 0:y(x)),x}function nr(t,e){const{width:n,height:i}=e,o=mi(n,i,t.ownerDocument),r=o.ownerDocument.createElementNS(o.namespaceURI,"foreignObject");return r.setAttributeNS(null,"x","0%"),r.setAttributeNS(null,"y","0%"),r.setAttributeNS(null,"width","100%"),r.setAttributeNS(null,"height","100%"),r.append(t),o.appendChild(r),o}async function ir(t,e){var a;const n=await me(t,e),i=await er(n),o=hi(i,n.isEnable("removeControlCharacter"));n.autoDestruct||(n.svgStyleElement=gn(n.ownerDocument),n.svgDefsElement=(a=n.ownerDocument)==null?void 0:a.createElementNS(Xt,"defs"),n.svgStyles.clear());const r=yt(o,i.ownerDocument);return await Ei(r,n)}async function rr(t,e){const n=await me(t,e),{log:i,type:o,quality:r,dpi:a}=n,s=await ir(n);i.time("canvas to blob");const c=await pi(s,o,r);if(["image/png","image/jpeg"].includes(o)&&a){const u=await wi(c.slice(0,33));let l=new Uint8Array(u);return o==="image/png"?l=Gn(l,a):o==="image/jpeg"&&(l=Vn(l,a)),i.timeEnd("canvas to blob"),new Blob([l,c.slice(33)],{type:o})}return i.timeEnd("canvas to blob"),c}const Wt=Symbol("store-raw"),jt=Symbol("store-node"),it=Symbol("store-has"),_n=Symbol("store-self");function wn(t){let e=t[Q];if(!e&&(Object.defineProperty(t,Q,{value:e=new Proxy(t,sr)}),!Array.isArray(t))){const n=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let o=0,r=n.length;o<r;o++){const a=n[o];i[a].get&&Object.defineProperty(t,a,{enumerable:i[a].enumerable,get:i[a].get.bind(e)})}}return e}function et(t){let e;return t!=null&&typeof t=="object"&&(t[Q]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function mt(t,e=new Set){let n,i,o,r;if(n=t!=null&&t[Wt])return n;if(!et(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let a=0,s=t.length;a<s;a++)o=t[a],(i=mt(o,e))!==o&&(t[a]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const a=Object.keys(t),s=Object.getOwnPropertyDescriptors(t);for(let c=0,u=a.length;c<u;c++)r=a[c],!s[r].get&&(o=t[r],(i=mt(o,e))!==o&&(t[r]=i))}return t}function Vt(t,e){let n=t[e];return n||Object.defineProperty(t,e,{value:n=Object.create(null)}),n}function Nt(t,e,n){if(t[e])return t[e];const[i,o]=F(n,{equals:!1,internal:!0});return i.$=o,t[e]=i}function or(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);return!n||n.get||!n.configurable||e===Q||e===jt||(delete n.value,delete n.writable,n.get=()=>t[Q][e]),n}function yn(t){ie()&&Nt(Vt(t,jt),_n)()}function ar(t){return yn(t),Reflect.ownKeys(t)}const sr={get(t,e,n){if(e===Wt)return t;if(e===Q)return n;if(e===ne)return yn(t),n;const i=Vt(t,jt),o=i[e];let r=o?o():t[e];if(e===jt||e===it||e==="__proto__")return r;if(!o){const a=Object.getOwnPropertyDescriptor(t,e);ie()&&(typeof r!="function"||t.hasOwnProperty(e))&&!(a&&a.get)&&(r=Nt(i,e,r)())}return et(r)?wn(r):r},has(t,e){return e===Wt||e===Q||e===ne||e===jt||e===it||e==="__proto__"?!0:(ie()&&Nt(Vt(t,it),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:ar,getOwnPropertyDescriptor:or};function K(t,e,n,i=!1){if(!i&&t[e]===n)return;const o=t[e],r=t.length;n===void 0?(delete t[e],t[it]&&t[it][e]&&o!==void 0&&t[it][e].$()):(t[e]=n,t[it]&&t[it][e]&&o===void 0&&t[it][e].$());let a=Vt(t,jt),s;if((s=Nt(a,e,o))&&s.$(()=>n),Array.isArray(t)&&t.length!==r){for(let c=t.length;c<r;c++)(s=a[c])&&s.$();(s=Nt(a,"length",r))&&s.$(t.length)}(s=a[_n])&&s.$()}function jn(t,e){const n=Object.keys(e);for(let i=0;i<n.length;i+=1){const o=n[i];K(t,o,e[o])}}function lr(t,e){if(typeof e=="function"&&(e=e(t)),e=mt(e),Array.isArray(e)){if(t===e)return;let n=0,i=e.length;for(;n<i;n++){const o=e[n];t[n]!==o&&K(t,n,o)}K(t,"length",i)}else jn(t,e)}function xt(t,e,n=[]){let i,o=t;if(e.length>1){i=e.shift();const a=typeof i,s=Array.isArray(t);if(Array.isArray(i)){for(let c=0;c<i.length;c++)xt(t,[i[c]].concat(e),n);return}else if(s&&a==="function"){for(let c=0;c<t.length;c++)i(t[c],c)&&xt(t,[c].concat(e),n);return}else if(s&&a==="object"){const{from:c=0,to:u=t.length-1,by:l=1}=i;for(let g=c;g<=u;g+=l)xt(t,[g].concat(e),n);return}else if(e.length>1){xt(t[i],e,[i].concat(n));return}o=t[i],n=[i].concat(n)}let r=e[0];typeof r=="function"&&(r=r(o,n),r===o)||i===void 0&&r==null||(r=mt(r),i===void 0||et(o)&&et(r)&&!Array.isArray(r)?jn(o,r):K(t,i,r))}function cr(...[t,e]){const n=mt(t||{}),i=Array.isArray(n),o=wn(n);function r(...a){Nn(()=>{i&&a.length===1?lr(n,a[0]):xt(n,a)})}return[o,r]}const le=Symbol("store-root");function _t(t,e,n,i,o){const r=e[n];if(t===r)return;const a=Array.isArray(t);if(n!==le&&(!et(t)||!et(r)||a!==Array.isArray(r)||o&&t[o]!==r[o])){K(e,n,t);return}if(a){if(t.length&&r.length&&(!i||o&&t[0]&&t[0][o]!=null)){let u,l,g,m,f,y,h,b;for(g=0,m=Math.min(r.length,t.length);g<m&&(r[g]===t[g]||o&&r[g]&&t[g]&&r[g][o]===t[g][o]);g++)_t(t[g],r,g,i,o);const j=new Array(t.length),_=new Map;for(m=r.length-1,f=t.length-1;m>=g&&f>=g&&(r[m]===t[f]||o&&r[m]&&t[f]&&r[m][o]===t[f][o]);m--,f--)j[f]=r[m];if(g>f||g>m){for(l=g;l<=f;l++)K(r,l,t[l]);for(;l<t.length;l++)K(r,l,j[l]),_t(t[l],r,l,i,o);r.length>t.length&&K(r,"length",t.length);return}for(h=new Array(f+1),l=f;l>=g;l--)y=t[l],b=o&&y?y[o]:y,u=_.get(b),h[l]=u===void 0?-1:u,_.set(b,l);for(u=g;u<=m;u++)y=r[u],b=o&&y?y[o]:y,l=_.get(b),l!==void 0&&l!==-1&&(j[l]=r[u],l=h[l],_.set(b,l));for(l=g;l<t.length;l++)l in j?(K(r,l,j[l]),_t(t[l],r,l,i,o)):K(r,l,t[l])}else for(let u=0,l=t.length;u<l;u++)_t(t[u],r,u,i,o);r.length>t.length&&K(r,"length",t.length);return}const s=Object.keys(t);for(let u=0,l=s.length;u<l;u++)_t(t[s[u]],r,s[u],i,o);const c=Object.keys(r);for(let u=0,l=c.length;u<l;u++)t[c[u]]===void 0&&K(r,c[u],void 0)}function gr(t,e={}){const{merge:n,key:i="id"}=e,o=mt(t);return r=>{if(!et(r)||!et(o))return o;const a=_t(o,{[le]:r},le,n,i);return a===void 0?r:a}}const Yt=new WeakMap,vn={get(t,e){if(e===Wt)return t;const n=t[e];let i;return et(n)?Yt.get(n)||(Yt.set(n,i=new Proxy(n,vn)),i):n},set(t,e,n){return K(t,e,mt(n)),!0},deleteProperty(t,e){return K(t,e,void 0,!0),!0}};function Ue(t){return e=>{if(et(e)){let n;(n=Yt.get(e))||Yt.set(e,n=new Proxy(e,vn)),t(n)}return e}}var ur=D("<div class=sonner-loading-wrapper><div class=sonner-spinner>"),fr=D("<div class=sonner-loading-bar>"),dr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"clip-rule=evenodd>'),mr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"clip-rule=evenodd>'),hr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"clip-rule=evenodd>'),pr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"clip-rule=evenodd>'),br=D("<div class=sonner-loader>"),_r=D('<button aria-label="Close toast"data-close-button><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>'),wr=D("<li aria-atomic=true role=status tabindex=0 data-sonner-toast>"),yr=D("<div data-icon>"),jr=D("<div data-description>"),vr=D("<div data-content><div data-title>"),Sr=D("<button data-button data-cancel>"),xr=D("<button data-button>"),Er=D("<section tabindex=-1>"),Ar=D("<ol tabindex=-1 data-sonner-toaster>");function Tr(t,{insertAt:e}={}){if(typeof document>"u")return;const n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}Tr(`:where(html[dir=ltr]),
:where([data-sonner-toaster][dir=ltr]) {
  --toast-icon-margin-start: -3px;
  --toast-icon-margin-end: 4px;
  --toast-svg-margin-start: -1px;
  --toast-svg-margin-end: 0px;
  --toast-button-margin-start: auto;
  --toast-button-margin-end: 0;
  --toast-close-button-start: 0;
  --toast-close-button-end: unset;
  --toast-close-button-transform: translate(-35%, -35%);
}
:where(html[dir=rtl]),
:where([data-sonner-toaster][dir=rtl]) {
  --toast-icon-margin-start: 4px;
  --toast-icon-margin-end: -3px;
  --toast-svg-margin-start: 0px;
  --toast-svg-margin-end: -1px;
  --toast-button-margin-start: 0;
  --toast-button-margin-end: auto;
  --toast-close-button-start: unset;
  --toast-close-button-end: 0;
  --toast-close-button-transform: translate(35%, -35%);
}
:where([data-sonner-toaster]) {
  position: fixed;
  width: var(--width);
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
  --gray1: hsl(0, 0%, 99%);
  --gray2: hsl(0, 0%, 97.3%);
  --gray3: hsl(0, 0%, 95.1%);
  --gray4: hsl(0, 0%, 93%);
  --gray5: hsl(0, 0%, 90.9%);
  --gray6: hsl(0, 0%, 88.7%);
  --gray7: hsl(0, 0%, 85.8%);
  --gray8: hsl(0, 0%, 78%);
  --gray9: hsl(0, 0%, 56.1%);
  --gray10: hsl(0, 0%, 52.3%);
  --gray11: hsl(0, 0%, 43.5%);
  --gray12: hsl(0, 0%, 9%);
  --border-radius: 8px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  z-index: 999999999;
}
:where([data-sonner-toaster][data-x-position=right]) {
  right: max(var(--offset), env(safe-area-inset-right));
}
:where([data-sonner-toaster][data-x-position=left]) {
  left: max(var(--offset), env(safe-area-inset-left));
}
:where([data-sonner-toaster][data-x-position=center]) {
  left: 50%;
  transform: translateX(-50%);
}
:where([data-sonner-toaster][data-y-position=top]) {
  top: max(var(--offset), env(safe-area-inset-top));
}
:where([data-sonner-toaster][data-y-position=bottom]) {
  bottom: max(var(--offset), env(safe-area-inset-bottom));
}
:where([data-sonner-toast]) {
  --y: translateY(100%);
  --lift-amount: calc(var(--lift) * var(--gap));
  z-index: var(--z-index);
  position: absolute;
  opacity: 0;
  transform: var(--y);
  filter: blur(0);
  touch-action: none;
  transition:
    transform 400ms,
    opacity 400ms,
    height 400ms,
    box-shadow 200ms;
  box-sizing: border-box;
  outline: none;
  overflow-wrap: anywhere;
}
:where([data-sonner-toast][data-styled=true]) {
  padding: 16px;
  background: var(--normal-bg);
  border: 1px solid var(--normal-border);
  color: var(--normal-text);
  border-radius: var(--border-radius);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: var(--width);
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}
:where([data-sonner-toast]:focus-visible) {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}
:where([data-sonner-toast][data-y-position=top]) {
  top: 0;
  --y: translateY(-100%);
  --lift: 1;
  --lift-amount: calc(1 * var(--gap));
}
:where([data-sonner-toast][data-y-position=bottom]) {
  bottom: 0;
  --y: translateY(100%);
  --lift: -1;
  --lift-amount: calc(var(--lift) * var(--gap));
}
:where([data-sonner-toast]) :where([data-description]) {
  font-weight: 400;
  line-height: 1.4;
  color: inherit;
}
:where([data-sonner-toast]) :where([data-title]) {
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
}
:where([data-sonner-toast]) :where([data-icon]) {
  display: flex;
  height: 16px;
  width: 16px;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-left: var(--toast-icon-margin-start);
  margin-right: var(--toast-icon-margin-end);
}
:where([data-sonner-toast][data-promise=true]) :where([data-icon]) > svg {
  opacity: 0;
  transform: scale(0.8);
  transform-origin: center;
  animation: sonner-fade-in 300ms ease forwards;
}
:where([data-sonner-toast]) :where([data-icon]) > * {
  flex-shrink: 0;
}
:where([data-sonner-toast]) :where([data-icon]) svg {
  margin-left: var(--toast-svg-margin-start);
  margin-right: var(--toast-svg-margin-end);
}
:where([data-sonner-toast]) :where([data-content]) {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
[data-sonner-toast][data-styled=true] [data-button] {
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  height: 24px;
  font-size: 12px;
  color: var(--normal-bg);
  background: var(--normal-text);
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity 400ms, box-shadow 200ms;
}
:where([data-sonner-toast]) :where([data-button]):focus-visible {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);
}
:where([data-sonner-toast]) :where([data-button]):first-of-type {
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
}
:where([data-sonner-toast]) :where([data-cancel]) {
  color: var(--normal-text);
  background: rgba(0, 0, 0, 0.08);
}
:where([data-sonner-toast][data-theme=dark]) :where([data-cancel]) {
  background: rgba(255, 255, 255, 0.3);
}
:where([data-sonner-toast]) :where([data-close-button]) {
  position: absolute;
  left: var(--toast-close-button-start);
  right: var(--toast-close-button-end);
  top: 0;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: var(--gray1);
  color: var(--gray12);
  border: 1px solid var(--gray4);
  transform: var(--toast-close-button-transform);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition:
    opacity 100ms,
    background 200ms,
    border-color 200ms;
}
:where([data-sonner-toast]) :where([data-close-button]):focus-visible {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}
:where([data-sonner-toast]) :where([data-disabled=true]) {
  cursor: not-allowed;
}
:where([data-sonner-toast]):hover :where([data-close-button]):hover {
  background: var(--gray2);
  border-color: var(--gray5);
}
:where([data-sonner-toast][data-swiping=true])::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
}
:where([data-sonner-toast][data-y-position=top][data-swiping=true])::before {
  bottom: 50%;
  transform: scaleY(3) translateY(50%);
}
:where([data-sonner-toast][data-y-position=bottom][data-swiping=true])::before {
  top: 50%;
  transform: scaleY(3) translateY(-50%);
}
:where([data-sonner-toast][data-swiping=false][data-removed=true])::before {
  content: "";
  position: absolute;
  inset: 0;
  transform: scaleY(2);
}
:where([data-sonner-toast])::after {
  content: "";
  position: absolute;
  left: 0;
  height: calc(var(--gap) + 1px);
  bottom: 100%;
  width: 100%;
}
:where([data-sonner-toast][data-mounted=true]) {
  --y: translateY(0);
  opacity: 1;
}
:where([data-sonner-toast][data-expanded=false][data-front=false]) {
  --scale: var(--toasts-before) * 0.05 + 1;
  --y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));
  height: var(--front-toast-height);
}
:where([data-sonner-toast]) > * {
  transition: opacity 400ms;
}
:where([data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]) > * {
  opacity: 0;
}
:where([data-sonner-toast][data-visible=false]) {
  opacity: 0;
  pointer-events: none;
}
:where([data-sonner-toast][data-mounted=true][data-expanded=true]) {
  --y: translateY(calc(var(--lift) * var(--offset)));
  height: var(--initial-height);
}
:where([data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]) {
  --y: translateY(calc(var(--lift) * -100%));
  opacity: 0;
}
:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]) {
  --y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));
  opacity: 0;
}
:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]) {
  --y: translateY(40%);
  opacity: 0;
  transition: transform 500ms, opacity 200ms;
}
:where([data-sonner-toast][data-removed=true][data-front=false])::before {
  height: calc(var(--initial-height) + 20%);
}
[data-sonner-toast][data-swiping=true] {
  transform: var(--y) translateY(var(--swipe-amount, 0px));
  transition: none;
}
[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],
[data-sonner-toast][data-swipe-out=true][data-y-position=top] {
  animation: swipe-out 200ms ease-out forwards;
}
@keyframes swipe-out {
  from {
    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));
    opacity: 1;
  }
  to {
    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));
    opacity: 0;
  }
}
@media (max-width: 600px) {
  [data-sonner-toaster] {
    position: fixed;
    --mobile-offset: 16px;
    right: var(--mobile-offset);
    left: var(--mobile-offset);
    width: 100%;
  }
  [data-sonner-toaster] [data-sonner-toast] {
    left: 0;
    right: 0;
    width: calc(100% - var(--mobile-offset) * 2);
  }
  [data-sonner-toaster][data-x-position=left] {
    left: var(--mobile-offset);
  }
  [data-sonner-toaster][data-y-position=bottom] {
    bottom: 20px;
  }
  [data-sonner-toaster][data-y-position=top] {
    top: 20px;
  }
  [data-sonner-toaster][data-x-position=center] {
    left: var(--mobile-offset);
    right: var(--mobile-offset);
    transform: none;
  }
}
[data-sonner-toaster][data-theme=light] {
  --normal-bg: #fff;
  --normal-border: var(--gray4);
  --normal-text: var(--gray12);
  --success-bg: hsl(143, 85%, 96%);
  --success-border: hsl(145, 92%, 91%);
  --success-text: hsl(140, 100%, 27%);
  --info-bg: hsl(208, 100%, 97%);
  --info-border: hsl(221, 91%, 91%);
  --info-text: hsl(210, 92%, 45%);
  --warning-bg: hsl(49, 100%, 97%);
  --warning-border: hsl(49, 91%, 91%);
  --warning-text: hsl(31, 92%, 45%);
  --error-bg: hsl(359, 100%, 97%);
  --error-border: hsl(359, 100%, 94%);
  --error-text: hsl(360, 100%, 45%);
}
[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true] {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);
}
[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true] {
  --normal-bg: #fff;
  --normal-border: var(--gray3);
  --normal-text: var(--gray12);
}
[data-sonner-toaster][data-theme=dark] {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);
  --success-bg: hsl(150, 100%, 6%);
  --success-border: hsl(147, 100%, 12%);
  --success-text: hsl(150, 86%, 65%);
  --info-bg: hsl(215, 100%, 6%);
  --info-border: hsl(223, 100%, 12%);
  --info-text: hsl(216, 87%, 65%);
  --warning-bg: hsl(64, 100%, 6%);
  --warning-border: hsl(60, 100%, 12%);
  --warning-text: hsl(46, 87%, 65%);
  --error-bg: hsl(358, 76%, 10%);
  --error-border: hsl(357, 89%, 16%);
  --error-text: hsl(358, 100%, 81%);
}
[data-rich-colors=true] [data-sonner-toast][data-type=success] {
  background: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button] {
  background: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=info] {
  background: var(--info-bg);
  border-color: var(--info-border);
  color: var(--info-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button] {
  background: var(--info-bg);
  border-color: var(--info-border);
  color: var(--info-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=warning] {
  background: var(--warning-bg);
  border-color: var(--warning-border);
  color: var(--warning-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button] {
  background: var(--warning-bg);
  border-color: var(--warning-border);
  color: var(--warning-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=error] {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button] {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error-text);
}
.sonner-loading-wrapper {
  --size: 16px;
  height: var(--size);
  width: var(--size);
  position: absolute;
  inset: 0;
  z-index: 10;
}
.sonner-loading-wrapper[data-visible=false] {
  transform-origin: center;
  animation: sonner-fade-out 0.2s ease forwards;
}
.sonner-spinner {
  position: relative;
  top: 50%;
  left: 50%;
  height: var(--size);
  width: var(--size);
}
.sonner-loading-bar {
  animation: sonner-spin 1.2s linear infinite;
  background: var(--gray11);
  border-radius: 6px;
  height: 8%;
  left: -10%;
  position: absolute;
  top: -3.9%;
  width: 24%;
}
.sonner-loading-bar:nth-child(1) {
  animation-delay: -1.2s;
  transform: rotate(0.0001deg) translate(146%);
}
.sonner-loading-bar:nth-child(2) {
  animation-delay: -1.1s;
  transform: rotate(30deg) translate(146%);
}
.sonner-loading-bar:nth-child(3) {
  animation-delay: -1s;
  transform: rotate(60deg) translate(146%);
}
.sonner-loading-bar:nth-child(4) {
  animation-delay: -0.9s;
  transform: rotate(90deg) translate(146%);
}
.sonner-loading-bar:nth-child(5) {
  animation-delay: -0.8s;
  transform: rotate(120deg) translate(146%);
}
.sonner-loading-bar:nth-child(6) {
  animation-delay: -0.7s;
  transform: rotate(150deg) translate(146%);
}
.sonner-loading-bar:nth-child(7) {
  animation-delay: -0.6s;
  transform: rotate(180deg) translate(146%);
}
.sonner-loading-bar:nth-child(8) {
  animation-delay: -0.5s;
  transform: rotate(210deg) translate(146%);
}
.sonner-loading-bar:nth-child(9) {
  animation-delay: -0.4s;
  transform: rotate(240deg) translate(146%);
}
.sonner-loading-bar:nth-child(10) {
  animation-delay: -0.3s;
  transform: rotate(270deg) translate(146%);
}
.sonner-loading-bar:nth-child(11) {
  animation-delay: -0.2s;
  transform: rotate(300deg) translate(146%);
}
.sonner-loading-bar:nth-child(12) {
  animation-delay: -0.1s;
  transform: rotate(330deg) translate(146%);
}
@keyframes sonner-fade-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes sonner-fade-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes sonner-spin {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.15;
  }
}
@media (prefers-reduced-motion) {
  [data-sonner-toast],
  [data-sonner-toast] > *,
  .sonner-loading-bar {
    transition: none !important;
    animation: none !important;
  }
}
.sonner-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  transition: opacity 200ms, transform 200ms;
}
.sonner-loader[data-visible=false] {
  opacity: 0;
  transform: scale(0.8) translate(-50%, -50%);
}
`);var Cr=Array(12).fill(0);function Ir(t){return(()=>{var e=ur(),n=e.firstChild;return R(n,G(re,{each:Cr,children:()=>fr()})),q(()=>C(e,"data-visible",t.visible)),e})()}function kr(){return dr()}function Nr(){return mr()}function $r(){return hr()}function Or(){return pr()}function Pr(t){switch(t){case"success":return kr;case"info":return $r;case"warning":return Nr;case"error":return Or;default:return null}}var ce=0,Rr=class{constructor(){M(this,"subscribers");M(this,"toasts");M(this,"subscribe",t=>(this.subscribers.push(t),()=>{const e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}));M(this,"publish",t=>{this.subscribers.forEach(e=>e(t))});M(this,"addToast",t=>{this.publish(t),this.toasts=[...this.toasts,t]});M(this,"create",t=>{var r;const{message:e,...n}=t,i=typeof(t==null?void 0:t.id)=="number"||t.id&&((r=t.id)==null?void 0:r.length)>0?t.id:ce++;return this.toasts.find(a=>a.id===i)?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...t,id:i,title:e}),{...a,...t,id:i,title:e}):a):this.addToast({title:e,...n,id:i}),i});M(this,"dismiss",t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t));M(this,"message",(t,e)=>this.create({...e,message:t}));M(this,"error",(t,e)=>this.create({...e,message:t,type:"error"}));M(this,"success",(t,e)=>this.create({...e,type:"success",message:t}));M(this,"info",(t,e)=>this.create({...e,type:"info",message:t}));M(this,"warning",(t,e)=>this.create({...e,type:"warning",message:t}));M(this,"promise",(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading}));const i=t instanceof Promise?t:t();let o=n!==void 0;return i.then(r=>{if(r&&typeof r.ok=="boolean"&&!r.ok){o=!1;const a=typeof e.error=="function"?e.error(`HTTP error! status: ${r.status}`):e.error;this.create({id:n,type:"error",message:a})}else if(e.success!==void 0){o=!1;const a=typeof e.success=="function"?e.success(r):e.success;this.create({id:n,type:"success",message:a})}}).catch(r=>{if(e.error!==void 0){o=!1;const a=typeof e.error=="function"?e.error(r):e.error;this.create({id:n,type:"error",message:a})}}).finally(()=>{var r;o&&(this.dismiss(n),n=void 0),(r=e.finally)==null||r.call(e)}),n});M(this,"loading",(t,e)=>this.create({...e,type:"loading",message:t}));M(this,"custom",(t,e)=>{const n=(e==null?void 0:e.id)||ce++;return this.publish({jsx:t(n),id:n,...e}),n});this.subscribers=[],this.toasts=[]}},J=new Rr;function Dr(t,e){const n=(e==null?void 0:e.id)||ce++;return J.addToast({title:t,...e,id:n}),n}var Lr=Dr,Fe=Object.assign(Lr,{success:J.success,info:J.info,warning:J.warning,error:J.error,custom:J.custom,message:J.message,promise:J.promise,dismiss:J.dismiss,loading:J.loading});function Br(){const[t,e]=F(!1);return At(()=>{const n=()=>{e(document.hidden)};document.addEventListener("visibilitychange",n),ft(()=>{window.removeEventListener("visibilitychange",n)})}),t}var Ur=3,Fr="32px",Mr=4e3,Hr=356,Sn=14,zr=20,Wr=200;function bt(...t){return t.filter(Boolean).join(" ")}var Vr=t=>{const[e,n]=F(!1),[i,o]=F(!1),[r,a]=F(!1),[s,c]=F(!1),[u,l]=F(0),[g,m]=F(0);let f;const y=()=>t.index===0,h=()=>t.index+1<=t.visibleToasts,b=()=>t.toast.type,j=()=>t.toast.class||"",_=()=>t.toast.descriptionClass||"",x=Xe({gap:Sn},t),w=()=>t.heights.findIndex(S=>S.toastId===t.toast.id)||0,p=()=>t.toast.duration||t.duration||Mr;let E=0,$=0;const[V,N]=F(null),X=()=>t.position.split("-"),I=()=>t.heights.reduce((S,U,d)=>d>=w()?S:S+U.height,0),z=Br(),T=()=>t.toast.invert||t.invert,st=()=>b()==="loading",nt=()=>w()*x.gap+I();function Z(){var S;return(S=t.icons)!=null&&S.loading?(()=>{var U=br();return R(U,()=>t.icons.loading),q(()=>C(U,"data-visible",b()==="loading")),U})():G(Ir,{get visible(){return b()==="loading"}})}At(()=>{n(!0)}),At(()=>{const S=f,U=S.style.height;S.style.height="auto";const d=S.getBoundingClientRect().height;S.style.height=U,m(d),rt(()=>{t.setHeights(v=>v.find(k=>k.toastId===t.toast.id)?v.map(k=>k.toastId===t.toast.id?{...k,height:d}:k):[{toastId:t.toast.id,height:d,position:t.toast.position},...v])})});const Y=()=>{o(!0),l(nt()),t.setHeights(S=>S.filter(U=>U.toastId!==t.toast.id)),setTimeout(()=>{t.removeToast(t.toast)},Wr)};let ht=p();return rt(Et(()=>[t.expanded,t.interacting,t.toast,p(),t.toast.promise,b(),t.pauseWhenPageIsHidden,z()],([S,U,d,v,A,k,O,L])=>{if(A&&k==="loading"||v===Number.POSITIVE_INFINITY)return;let W;S||U||O&&L?(()=>{if($<E){const gt=new Date().getTime()-E;ht=ht-gt}$=new Date().getTime()})():(()=>{E=new Date().getTime(),W=setTimeout(()=>{var gt;(gt=d.onAutoClose)==null||gt.call(d,d),Y()},ht)})(),ft(()=>{clearTimeout(W)})})),rt(Et(()=>t.toast.id,S=>{const U=f;if(U){const d=U.getBoundingClientRect().height;m(d),t.setHeights(v=>[{toastId:S,height:d,position:t.toast.position},...v]),ft(()=>{t.setHeights(v=>v.filter(A=>A.toastId!==S))})}})),rt(Et(()=>t.toast.delete,S=>{S&&Y()})),(()=>{var S=wr();S.$$pointermove=d=>{if(!V())return;const v=d.clientY-V().y,A=d.clientX-V().x,O=(X()[0]==="top"?Math.min:Math.max)(0,v),L=d.pointerType==="touch"?10:2;Math.abs(O)>L?f==null||f.style.setProperty("--swipe-amount",`${v}px`):Math.abs(A)>L&&N(null)},S.$$pointerup=()=>{var v,A;if(s())return;N(null);const d=Number((f==null?void 0:f.style.getPropertyValue("--swipe-amount").replace("px",""))||0);if(Math.abs(d)>=zr){l(nt()),(A=(v=t.toast).onDismiss)==null||A.call(v,t.toast),Y(),c(!0);return}f==null||f.style.setProperty("--swipe-amount","0px"),a(!1)},S.$$pointerdown=d=>{st()||(l(nt()),d.target.setPointerCapture(d.pointerId),d.target.tagName!=="BUTTON"&&(a(!0),N({x:d.clientX,y:d.clientY})))};var U=f;return typeof U=="function"?ue(U,S):f=S,R(S,G(ut,{get when(){return t.closeButton&&!t.toast.jsx},get children(){var d=_r();return zn(d,"click",st()?void 0:()=>{var v,A;Y(),(A=(v=t.toast).onDismiss)==null||A.call(v,t.toast)}),q(v=>{var O,L,W;var A=st(),k=bt((O=t.classes)==null?void 0:O.closeButton,(W=(L=t.toast)==null?void 0:L.classes)==null?void 0:W.closeButton);return A!==v.e&&C(d,"data-disabled",v.e=A),k!==v.t&&lt(d,v.t=k),v},{e:void 0,t:void 0}),d}}),null),R(S,G(ut,{get when(){return t.toast.jsx||t.toast.title instanceof Element},get fallback(){return[G(ut,{get when(){return b()||t.toast.icon||t.toast.promise},get children(){var d=yr();return R(d,(()=>{var v=oe(()=>!!(t.toast.promise||t.toast.type==="loading"&&!t.toast.icon));return()=>v()?t.toast.icon||Z():null})(),null),R(d,(()=>{var v=oe(()=>t.toast.type!=="loading");return()=>{var A;return v()?t.toast.icon||((A=t.icons)==null?void 0:A[b()])||Pr(b())():null}})(),null),d}}),(()=>{var d=vr(),v=d.firstChild;return R(v,()=>t.toast.title),R(d,G(ut,{get when(){return t.toast.description},get children(){var A=jr();return R(A,()=>t.toast.description),q(()=>{var k,O,L;return lt(A,bt(t.descriptionClass,_(),(k=t.classes)==null?void 0:k.description,(L=(O=t.toast)==null?void 0:O.classes)==null?void 0:L.description))}),A}}),null),q(()=>{var A,k,O;return lt(v,bt((A=t.classes)==null?void 0:A.title,(O=(k=t.toast)==null?void 0:k.classes)==null?void 0:O.title))}),d})(),G(ut,{get when(){return t.toast.cancel},get children(){var d=Sr();return d.$$click=()=>{var v;Y(),(v=t.toast.cancel)!=null&&v.onClick&&t.toast.cancel.onClick()},R(d,()=>t.toast.cancel.label),q(v=>{var O,L,W;var A=t.toast.cancelButtonStyle||t.cancelButtonStyle,k=bt((O=t.classes)==null?void 0:O.cancelButton,(W=(L=t.toast)==null?void 0:L.classes)==null?void 0:W.cancelButton);return v.e=Lt(d,A,v.e),k!==v.t&&lt(d,v.t=k),v},{e:void 0,t:void 0}),d}}),G(ut,{get when(){return t.toast.action},get children(){var d=xr();return d.$$click=v=>{var A;(A=t.toast.action)==null||A.onClick(v),!v.defaultPrevented&&Y()},R(d,()=>t.toast.action.label),q(v=>{var O,L,W;var A=t.toast.actionButtonStyle||t.actionButtonStyle,k=bt((O=t.classes)==null?void 0:O.actionButton,(W=(L=t.toast)==null?void 0:L.classes)==null?void 0:W.actionButton);return v.e=Lt(d,A,v.e),k!==v.t&&lt(d,v.t=k),v},{e:void 0,t:void 0}),d}})]},get children(){return t.toast.jsx||t.toast.title}}),null),q(d=>{var Se,xe,Ee,Ae,Te,Ce,Ie;var v=t.toast.important?"assertive":"polite",A=bt(t.class,j(),(Se=t.classes)==null?void 0:Se.toast,(Ee=(xe=t.toast)==null?void 0:xe.classes)==null?void 0:Ee.toast,(Ae=t.classes)==null?void 0:Ae.default,(Te=t.classes)==null?void 0:Te[b()],(Ie=(Ce=t.toast)==null?void 0:Ce.classes)==null?void 0:Ie[b()]),k=!(t.toast.jsx||t.toast.unstyled||t.unstyled),O=e(),L=!!t.toast.promise,W=i(),Zt=h(),Jt=X()[0],gt=X()[1],pe=t.index,be=y(),_e=r(),we=b(),ye=T(),je=s(),ve=!!(t.expanded||t.expandByDefault&&e()),xn={"--index":t.index,"--toasts-before":t.index,"--z-index":t.toasts.length-t.index,"--offset":`${i()?u():nt()}px`,"--initial-height":t.expandByDefault?"auto":`${g()}px`,...t.style,...t.toast.style};return v!==d.e&&C(S,"aria-live",d.e=v),A!==d.t&&lt(S,d.t=A),k!==d.a&&C(S,"data-styled",d.a=k),O!==d.o&&C(S,"data-mounted",d.o=O),L!==d.i&&C(S,"data-promise",d.i=L),W!==d.n&&C(S,"data-removed",d.n=W),Zt!==d.s&&C(S,"data-visible",d.s=Zt),Jt!==d.h&&C(S,"data-y-position",d.h=Jt),gt!==d.r&&C(S,"data-x-position",d.r=gt),pe!==d.d&&C(S,"data-index",d.d=pe),be!==d.l&&C(S,"data-front",d.l=be),_e!==d.u&&C(S,"data-swiping",d.u=_e),we!==d.c&&C(S,"data-type",d.c=we),ye!==d.w&&C(S,"data-invert",d.w=ye),je!==d.m&&C(S,"data-swipe-out",d.m=je),ve!==d.f&&C(S,"data-expanded",d.f=ve),d.y=Lt(S,xn,d.y),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0}),S})()};function Me(){if(typeof window>"u"||typeof document>"u")return"ltr";const t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var Yr=t=>{const e=Xe({position:"bottom-right",hotkey:["altKey","KeyT"],theme:"light",visibleToasts:Ur,dir:Me()},t),[n,i]=cr({toasts:[]}),o=()=>Array.from(new Set([e.position].concat(n.toasts.filter(w=>w.position).map(w=>w.position)))),[r,a]=F([]),[s,c]=F(!1),[u,l]=F(!1);let g;const m=()=>e.hotkey.join("+").replace(/Key/g,"").replace(/Digit/g,""),[f,y]=F(null),[h,b]=F(!1),[j,_]=F(e.theme!=="system"?e.theme:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),x=w=>i("toasts",p=>p.filter(({id:E})=>E!==w.id));return At(()=>{const w=J.subscribe(p=>{if(p.dismiss){i("toasts",Ue($=>{$.forEach(V=>{V.id===p.id&&(V.delete=!0)})}));return}const E=n.toasts.findIndex($=>$.id===p.id);if(E!==-1){i("toasts",[E],gr(p));return}i("toasts",Ue($=>{$.unshift(p)}))});ft(()=>{w()})}),rt(Et(()=>e.theme,w=>{if(w!=="system"){_(w);return}typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:p})=>{_(p?"dark":"light")})})),rt(()=>{n.toasts.length<=1&&c(!1)}),At(()=>{const w=p=>{e.hotkey.every($=>p[$]||p.code===$)&&(c(!0),g==null||g.focus()),p.code==="Escape"&&(document.activeElement===g||g!=null&&g.contains(document.activeElement))&&c(!1)};document.addEventListener("keydown",w),ft(()=>{document.removeEventListener("keydown",w)})}),rt(Et(()=>g,w=>{w&&ft(()=>{var p;f()&&((p=f())==null||p.focus({preventScroll:!0}),y(null),b(!1))})})),G(ut,{get when(){return n.toasts.length>0},get children(){var w=Er();return R(w,G(re,{get each(){return o()},children:(p,E)=>{const[$,V]=p.split("-");return(()=>{var N=Ar();N.$$pointerup=()=>l(!1),N.$$pointerdown=()=>{l(!0)},N.addEventListener("mouseleave",()=>{u()||c(!1)}),N.$$mousemove=()=>c(!0),N.addEventListener("mouseenter",()=>c(!0)),N.addEventListener("focus",I=>{h()||(b(!0),y(I.relatedTarget))}),N.addEventListener("blur",I=>{var z;h()&&!I.currentTarget.contains(I.relatedTarget)&&(b(!1),f()&&((z=f())==null||z.focus({preventScroll:!0}),y(null)))});var X=g;return typeof X=="function"?ue(X,N):g=N,C(N,"data-y-position",$),C(N,"data-x-position",V),R(N,G(re,{get each(){return n.toasts.filter(I=>!I.position&&E()===0||I.position===p)},children:(I,z)=>G(Vr,{get index(){return z()},get icons(){return e.icons},toast:I,get duration(){var T;return((T=e.toastOptions)==null?void 0:T.duration)??t.duration},get class(){var T;return(T=e.toastOptions)==null?void 0:T.class},get classes(){var T;return(T=e.toastOptions)==null?void 0:T.classes},get cancelButtonStyle(){var T;return(T=e.toastOptions)==null?void 0:T.cancelButtonStyle},get actionButtonStyle(){var T;return(T=e.toastOptions)==null?void 0:T.actionButtonStyle},get descriptionClass(){var T;return(T=e.toastOptions)==null?void 0:T.descriptionClass},get invert(){return!!e.invert},get visibleToasts(){return e.visibleToasts},get closeButton(){return!!e.closeButton},get interacting(){return u()},get position(){return e.position},get style(){var T;return(T=e.toastOptions)==null?void 0:T.style},get unstyled(){var T;return(T=e.toastOptions)==null?void 0:T.unstyled},removeToast:x,get toasts(){return n.toasts},get heights(){return r()},setHeights:a,get expandByDefault(){return!!e.expand},get gap(){return e.gap},get expanded(){return s()},get pauseWhenPageIsHidden(){return e.pauseWhenPageIsHidden}})})),q(I=>{var Y;var z=e.dir==="auto"?Me():e.dir,T=e.class,st=j(),nt=e.richColors,Z={"--front-toast-height":`${(Y=r()[0])==null?void 0:Y.height}px`,"--offset":typeof e.offset=="number"?`${e.offset}px`:e.offset||Fr,"--width":`${Hr}px`,"--gap":`${Sn}px`,...e.style};return z!==I.e&&C(N,"dir",I.e=z),T!==I.t&&lt(N,I.t=T),st!==I.a&&C(N,"data-theme",I.a=st),nt!==I.o&&C(N,"data-rich-colors",I.o=nt),I.i=Lt(N,Z,I.i),I},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),N})()}})),q(()=>C(w,"aria-label",`Notifications ${m()}`)),w}})};/*!
 * Original code by Emil Kowalski
 * MIT Licensed, Copyright 2023 Emil Kowalski, see https://github.com/emilkowalski/sonner/blob/main/LICENSE.md for details
 *
 * Credits:
 * https://github.com/emilkowalski/sonner/blob/main/src/index.tsx
 */Ze(["pointerdown","pointerup","pointermove","click","mousemove"]);const Kr=(t,e)=>{const n=function(){const r=localStorage.getItem(t);return r!=null&&r!=="undefined"?JSON.parse(r):e}(),[i,o]=F(n);return rt(()=>{localStorage.setItem(t,JSON.stringify(i))},[i]),[i,o]};var qr=D('<div class="flex flex-col gap-4 pb-10"><div class="p-4 flex flex-col md:items-center "><div class="flex flex-col border border-b-0 bg-white w-fit"><div class="border-b justify-between p-2 text-lg font-bold flex"><h1>Galgame世代<span class=remove> - 点击选择你玩过的Galgame</span><span class="ml-2 text-zinc-400 font-medium">galgame.fallenwood.net</span></h1><span class="shrink-0 whitespace-nowrap">我玩过 <!>/<!> 部Galgame</span></div></div></div><div class="flex gap-2 justify-center"><button type=button class="border rounded-md px-4 py-2 inline-flex">全选</button><button type=button class="border rounded-md px-4 py-2 inline-flex">复制图片</button><button type=button class="border rounded-md px-4 py-2 inline-flex">下载图片</button></div><div class="mt-2 text-center">历年关注最多的Galgame和部分RPG，数据来自 bgm.tv，<a href=https://github.com/fallenwood/galgame-sedai target=_blank class=underline>查看代码'),Gr=D('<div class="flex border-b"><div class="bg-red-500 shrink-0 text-white flex items-center font-bold justify-center p-1 size-16 md:size-20 border-black"></div><div class="flex shrink-0">'),Xr=D('<button><span class="leading-tight w-full line-clamp-3"><img class="size-10 md:size-12 ml-auto mr-auto"></span><span class="leading-tight w-full line-clamp-3">'),Zr=D('<button type=button class="border rounded-md px-4 py-2 inline-flex">清除');const Jr=()=>{const[t,e]=Kr("selectedAnime",[]);let n;const i=async()=>(console.log("wrapper",n),n?await rr(n,{scale:2,filter(s){return!(s instanceof HTMLElement&&s.classList.contains("remove"))}}):void 0),o=async()=>{const a=await i();console.log(a),a&&await navigator.clipboard.write([new ClipboardItem({[a.type]:a})])},r=async()=>{if(!n)return;const a=await i();if(!a)return;const s=URL.createObjectURL(a),c=document.createElement("a");c.href=s,c.download="galgame-sedai.png",c.click(),URL.revokeObjectURL(s)};return(()=>{var a=qr(),s=a.firstChild,c=s.firstChild,u=c.firstChild,l=u.firstChild,g=l.nextSibling,m=g.firstChild,f=m.nextSibling,y=f.nextSibling,h=y.nextSibling;h.nextSibling;var b=s.nextSibling,j=b.firstChild,_=j.nextSibling,x=_.nextSibling,w=n;return typeof w=="function"?ue(w,c):n=c,R(g,()=>t.length,f),R(g,()=>Object.values(Rt).flatMap(p=>p.map(E=>E.title).slice(0,12)).length,h),R(c,()=>Object.keys(Rt).map(p=>{const E=Rt[p]||[];return(()=>{var $=Gr(),V=$.firstChild,N=V.nextSibling;return R(V,p),R(N,()=>E.slice(0,12).map(X=>{const I=t().includes(X.title);return(()=>{var z=Xr(),T=z.firstChild,st=T.firstChild,nt=T.nextSibling;return z.$$click=()=>{e(Z=>I?Z.filter(Y=>Y!==X.title):[...Z,X.title])},lt(z,`size-16 md:size-20 border-l break-all text-center shrink-0 inline-flex flex-col items-center p-1 overflow-hidden justify-center cursor-pointer text-sm  ${I?"bg-green-500":"hover:bg-zinc-100"}`),R(nt,()=>X.title),q(Z=>{var Y=X.title,ht=`/images/${X.img}`;return Y!==Z.e&&C(z,"title",Z.e=Y),ht!==Z.t&&C(st,"src",Z.t=ht),Z},{e:void 0,t:void 0}),z})()})),$})()}),null),j.$$click=()=>{e(Object.values(Rt).flatMap(p=>p.map(E=>E.title).slice(0,12)))},R(b,(()=>{var p=oe(()=>t.length>0);return()=>p()&&(()=>{var E=Zr();return E.$$click=()=>{e([])},E})()})(),_),_.$$click=()=>{console.log("copy image"),Fe.promise(o(),{success:"复制成功",loading:"复制中",error(p){return`复制失败: ${p instanceof Error?p.message:"未知错误"}`}})},x.$$click=()=>{Fe.promise(r(),{success:"下载成功",loading:"下载中",error(p){return`下载失败: ${p instanceof Error?p.message:"未知错误"}`}})},a})()};Ze(["click"]);const Qr=document.getElementById("root");Hn(()=>[G(Jr,{}),G(Yr,{})],Qr);
