var En=Object.defineProperty;var An=(t,e,n)=>e in t?En(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var M=(t,e,n)=>An(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Tn=!1,Cn=(t,e)=>t===e,J=Symbol("solid-proxy"),kn=typeof Proxy=="function",ne=Symbol("solid-track"),Bt={equals:Cn};let ze=Ve;const gt=1,Ut=2,We={owned:null,cleanups:null,context:null,owner:null};var B=null;let Jt=null,In=null,$=null,H=null,at=null,Vt=0;function Dt(t,e){const n=$,i=B,a=t.length===0,r=e===void 0?i:e,o=a?We:{owned:null,cleanups:null,context:r?r.context:null,owner:r},s=a?t:()=>t(()=>ot(()=>Tt(o)));B=o,$=null;try{return St(s,!0)}finally{$=n,B=i}}function F(t,e){e=e?Object.assign({},Bt,e):Bt;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=a=>(typeof a=="function"&&(a=a(n.value)),Ke(n,a));return[Ye.bind(n),i]}function X(t,e,n){const i=ce(t,e,!1,gt);Ot(i)}function rt(t,e,n){ze=$n;const i=ce(t,e,!1,gt);i.user=!0,at?at.push(i):Ot(i)}function yt(t,e,n){n=n?Object.assign({},Bt,n):Bt;const i=ce(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Ot(i),Ye.bind(i)}function Nn(t){return St(t,!1)}function ot(t){if($===null)return t();const e=$;$=null;try{return t()}finally{$=e}}function Et(t,e,n){const i=Array.isArray(t);let a;return r=>{let o;if(i){o=Array(t.length);for(let g=0;g<t.length;g++)o[g]=t[g]()}else o=t();const s=ot(()=>e(o,a,r));return a=o,s}}function At(t){rt(()=>ot(t))}function ft(t){return B===null||(B.cleanups===null?B.cleanups=[t]:B.cleanups.push(t)),t}function ie(){return $}function Ye(){if(this.sources&&this.state)if(this.state===gt)Ot(this);else{const t=H;H=null,St(()=>Mt(this),!1),H=t}if($){const t=this.observers?this.observers.length:0;$.sources?($.sources.push(this),$.sourceSlots.push(t)):($.sources=[this],$.sourceSlots=[t]),this.observers?(this.observers.push($),this.observerSlots.push($.sources.length-1)):(this.observers=[$],this.observerSlots=[$.sources.length-1])}return this.value}function Ke(t,e,n){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&St(()=>{for(let a=0;a<t.observers.length;a+=1){const r=t.observers[a],o=Jt&&Jt.running;o&&Jt.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?H.push(r):at.push(r),r.observers&&Xe(r)),o||(r.state=gt)}if(H.length>1e6)throw H=[],new Error},!1)),e}function Ot(t){if(!t.fn)return;Tt(t);const e=Vt;On(t,t.value,e)}function On(t,e,n){let i;const a=B,r=$;$=B=t;try{i=t.fn(e)}catch(o){return t.pure&&(t.state=gt,t.owned&&t.owned.forEach(Tt),t.owned=null),t.updatedAt=n+1,qe(o)}finally{$=r,B=a}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Ke(t,i):t.value=i,t.updatedAt=n)}function ce(t,e,n,i=gt,a){const r={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:B,context:B?B.context:null,pure:n};return B===null||B!==We&&(B.owned?B.owned.push(r):B.owned=[r]),r}function Ft(t){if(t.state===0)return;if(t.state===Ut)return Mt(t);if(t.suspense&&ot(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Vt);)t.state&&e.push(t);for(let n=e.length-1;n>=0;n--)if(t=e[n],t.state===gt)Ot(t);else if(t.state===Ut){const i=H;H=null,St(()=>Mt(t,e[0]),!1),H=i}}function St(t,e){if(H)return t();let n=!1;e||(H=[]),at?n=!0:at=[],Vt++;try{const i=t();return Pn(n),i}catch(i){n||(at=null),H=null,qe(i)}}function Pn(t){if(H&&(Ve(H),H=null),t)return;const e=at;at=null,e.length&&St(()=>ze(e),!1)}function Ve(t){for(let e=0;e<t.length;e++)Ft(t[e])}function $n(t){let e,n=0;for(e=0;e<t.length;e++){const i=t[e];i.user?t[n++]=i:Ft(i)}for(e=0;e<n;e++)Ft(t[e])}function Mt(t,e){t.state=0;for(let n=0;n<t.sources.length;n+=1){const i=t.sources[n];if(i.sources){const a=i.state;a===gt?i!==e&&(!i.updatedAt||i.updatedAt<Vt)&&Ft(i):a===Ut&&Mt(i,e)}}}function Xe(t){for(let e=0;e<t.observers.length;e+=1){const n=t.observers[e];n.state||(n.state=Ut,n.pure?H.push(n):at.push(n),n.observers&&Xe(n))}}function Tt(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),a=n.observers;if(a&&a.length){const r=a.pop(),o=n.observerSlots.pop();i<a.length&&(r.sourceSlots[o]=i,a[i]=r,n.observerSlots[i]=o)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)Tt(t.tOwned[e]);delete t.tOwned}if(t.owned){for(e=t.owned.length-1;e>=0;e--)Tt(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function Rn(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function qe(t,e=B){throw Rn(t)}const Dn=Symbol("fallback");function Ie(t){for(let e=0;e<t.length;e++)t[e]()}function Ln(t,e,n={}){let i=[],a=[],r=[],o=0,s=e.length>1?[]:null;return ft(()=>Ie(r)),()=>{let g=t()||[],u=g.length,l,c;return g[ne],ot(()=>{let f,_,h,b,j,w,x,y,p;if(u===0)o!==0&&(Ie(r),r=[],i=[],a=[],o=0,s&&(s=[])),n.fallback&&(i=[Dn],a[0]=Dt(E=>(r[0]=E,n.fallback())),o=1);else if(o===0){for(a=new Array(u),c=0;c<u;c++)i[c]=g[c],a[c]=Dt(m);o=u}else{for(h=new Array(u),b=new Array(u),s&&(j=new Array(u)),w=0,x=Math.min(o,u);w<x&&i[w]===g[w];w++);for(x=o-1,y=u-1;x>=w&&y>=w&&i[x]===g[y];x--,y--)h[y]=a[x],b[y]=r[x],s&&(j[y]=s[x]);for(f=new Map,_=new Array(y+1),c=y;c>=w;c--)p=g[c],l=f.get(p),_[c]=l===void 0?-1:l,f.set(p,c);for(l=w;l<=x;l++)p=i[l],c=f.get(p),c!==void 0&&c!==-1?(h[c]=a[l],b[c]=r[l],s&&(j[c]=s[l]),c=_[c],f.set(p,c)):r[l]();for(c=w;c<u;c++)c in h?(a[c]=h[c],r[c]=b[c],s&&(s[c]=j[c],s[c](c))):a[c]=Dt(m);a=a.slice(0,o=u),i=g.slice(0)}return a});function m(f){if(r[c]=f,s){const[_,h]=F(c);return s[c]=h,e(g[c],_)}return e(g[c])}}}function q(t,e){return ot(()=>t(e||{}))}function $t(){return!0}const Bn={get(t,e,n){return e===J?n:t.get(e)},has(t,e){return e===J?!0:t.has(e)},set:$t,deleteProperty:$t,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:$t,deleteProperty:$t}},ownKeys(t){return t.keys()}};function te(t){return(t=typeof t=="function"?t():t)?t:{}}function Un(){for(let t=0,e=this.length;t<e;++t){const n=this[t]();if(n!==void 0)return n}}function Ze(...t){let e=!1;for(let o=0;o<t.length;o++){const s=t[o];e=e||!!s&&J in s,t[o]=typeof s=="function"?(e=!0,yt(s)):s}if(kn&&e)return new Proxy({get(o){for(let s=t.length-1;s>=0;s--){const g=te(t[s])[o];if(g!==void 0)return g}},has(o){for(let s=t.length-1;s>=0;s--)if(o in te(t[s]))return!0;return!1},keys(){const o=[];for(let s=0;s<t.length;s++)o.push(...Object.keys(te(t[s])));return[...new Set(o)]}},Bn);const n={},i=Object.create(null);for(let o=t.length-1;o>=0;o--){const s=t[o];if(!s)continue;const g=Object.getOwnPropertyNames(s);for(let u=g.length-1;u>=0;u--){const l=g[u];if(l==="__proto__"||l==="constructor")continue;const c=Object.getOwnPropertyDescriptor(s,l);if(!i[l])i[l]=c.get?{enumerable:!0,configurable:!0,get:Un.bind(n[l]=[c.get.bind(s)])}:c.value!==void 0?c:void 0;else{const m=n[l];m&&(c.get?m.push(c.get.bind(s)):c.value!==void 0&&m.push(()=>c.value))}}}const a={},r=Object.keys(i);for(let o=r.length-1;o>=0;o--){const s=r[o],g=i[s];g&&g.get?Object.defineProperty(a,s,g):a[s]=g?g.value:void 0}return a}const Fn=t=>`Stale read from <${t}>.`;function re(t){const e="fallback"in t&&{fallback:()=>t.fallback};return yt(Ln(()=>t.each,t.children,e||void 0))}function ut(t){const e=t.keyed,n=yt(()=>t.when,void 0,void 0),i=e?n:yt(n,void 0,{equals:(a,r)=>!a==!r});return yt(()=>{const a=i();if(a){const r=t.children;return typeof r=="function"&&r.length>0?ot(()=>r(e?a:()=>{if(!ot(i))throw Fn("Show");return n()})):r}return t.fallback},void 0,void 0)}const ae=t=>yt(()=>t());function Mn(t,e,n){let i=n.length,a=e.length,r=i,o=0,s=0,g=e[a-1].nextSibling,u=null;for(;o<a||s<r;){if(e[o]===n[s]){o++,s++;continue}for(;e[a-1]===n[r-1];)a--,r--;if(a===o){const l=r<i?s?n[s-1].nextSibling:n[r-s]:g;for(;s<r;)t.insertBefore(n[s++],l)}else if(r===s)for(;o<a;)(!u||!u.has(e[o]))&&e[o].remove(),o++;else if(e[o]===n[r-1]&&n[s]===e[a-1]){const l=e[--a].nextSibling;t.insertBefore(n[s++],e[o++].nextSibling),t.insertBefore(n[--r],l),e[a]=n[r]}else{if(!u){u=new Map;let c=s;for(;c<r;)u.set(n[c],c++)}const l=u.get(e[o]);if(l!=null)if(s<l&&l<r){let c=o,m=1,f;for(;++c<a&&c<r&&!((f=u.get(e[c]))==null||f!==l+m);)m++;if(m>l-s){const _=e[o];for(;s<l;)t.insertBefore(n[s++],_)}else t.replaceChild(n[s++],e[o++])}else o++;else e[o++].remove()}}}const Ne="_$DX_DELEGATE";function Hn(t,e,n,i={}){let a;return Dt(r=>{a=r,e===document?t():R(e,t(),e.firstChild?null:void 0,n)},i.owner),()=>{a(),e.textContent=""}}function D(t,e,n,i){let a;const r=()=>{const s=document.createElement("template");return s.innerHTML=t,s.content.firstChild},o=()=>(a||(a=r())).cloneNode(!0);return o.cloneNode=o,o}function Ge(t,e=window.document){const n=e[Ne]||(e[Ne]=new Set);for(let i=0,a=t.length;i<a;i++){const r=t[i];n.has(r)||(n.add(r),e.addEventListener(r,Wn))}}function C(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function lt(t,e){e==null?t.removeAttribute("class"):t.className=e}function zn(t,e,n,i){Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n}function Lt(t,e,n){if(!e)return n?C(t,"style"):e;const i=t.style;if(typeof e=="string")return i.cssText=e;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),e||(e={});let a,r;for(r in n)e[r]==null&&i.removeProperty(r),delete n[r];for(r in e)a=e[r],a!==n[r]&&(i.setProperty(r,a),n[r]=a);return n}function ue(t,e,n){return ot(()=>t(e,n))}function R(t,e,n,i){if(n!==void 0&&!i&&(i=[]),typeof e!="function")return Ht(t,e,i,n);X(a=>Ht(t,e(),a,n),i)}function Wn(t){let e=t.target;const n=`$$${t.type}`,i=t.target,a=t.currentTarget,r=g=>Object.defineProperty(t,"target",{configurable:!0,value:g}),o=()=>{const g=e[n];if(g&&!e.disabled){const u=e[`${n}Data`];if(u!==void 0?g.call(e,u,t):g.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&r(e.host),!0},s=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),t.composedPath){const g=t.composedPath();r(g[0]);for(let u=0;u<g.length-2&&(e=g[u],!!o());u++){if(e._$host){e=e._$host,s();break}if(e.parentNode===a)break}}else s();r(i)}function Ht(t,e,n,i,a){for(;typeof n=="function";)n=n();if(e===n)return n;const r=typeof e,o=i!==void 0;if(t=o&&n[0]&&n[0].parentNode||t,r==="string"||r==="number"){if(r==="number"&&(e=e.toString(),e===n))return n;if(o){let s=n[0];s&&s.nodeType===3?s.data!==e&&(s.data=e):s=document.createTextNode(e),n=pt(t,n,i,s)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||r==="boolean")n=pt(t,n,i);else{if(r==="function")return X(()=>{let s=e();for(;typeof s=="function";)s=s();n=Ht(t,s,n,i)}),()=>n;if(Array.isArray(e)){const s=[],g=n&&Array.isArray(n);if(oe(s,e,n,a))return X(()=>n=Ht(t,s,n,i,!0)),()=>n;if(s.length===0){if(n=pt(t,n,i),o)return n}else g?n.length===0?Oe(t,s,i):Mn(t,n,s):(n&&pt(t),Oe(t,s));n=s}else if(e.nodeType){if(Array.isArray(n)){if(o)return n=pt(t,n,i,e);pt(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function oe(t,e,n,i){let a=!1;for(let r=0,o=e.length;r<o;r++){let s=e[r],g=n&&n[t.length],u;if(!(s==null||s===!0||s===!1))if((u=typeof s)=="object"&&s.nodeType)t.push(s);else if(Array.isArray(s))a=oe(t,s,g)||a;else if(u==="function")if(i){for(;typeof s=="function";)s=s();a=oe(t,Array.isArray(s)?s:[s],Array.isArray(g)?g:[g])||a}else t.push(s),a=!0;else{const l=String(s);g&&g.nodeType===3&&g.data===l?t.push(g):t.push(document.createTextNode(l))}}return a}function Oe(t,e,n=null){for(let i=0,a=e.length;i<a;i++)t.insertBefore(e[i],n)}function pt(t,e,n,i){if(n===void 0)return t.textContent="";const a=i||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const s=e[o];if(a!==s){const g=s.parentNode===t;!r&&!o?g?t.replaceChild(a,s):t.insertBefore(a,n):g&&s.remove()}else r=!0}}else t.insertBefore(a,n);return[a]}const Rt={2004:[{title:"神树之馆",rating:7.7,img:"7400_1ofy5.jpg"},{title:"交响乐之雨",rating:8.5,img:"1143_Z54Z6.jpg"},{title:"CLANNAD",rating:8.9,img:"13_tQxwM.jpg"},{title:"Fate/stay night",rating:8.3,img:"935_dOCPc.jpg"},{title:"Forest",rating:8.6,img:"5395_swS3d.jpg"},{title:"逆转裁判3",rating:8.8,img:"943_Mz6H3.jpg"},{title:"狂欢节",rating:7.5,img:"2721_UWDqF.jpg"},{title:"Remember11：无限轮回的时光",rating:8.9,img:"1127_eZ7Te.jpg"},{title:"家族计划~再开~",rating:8.7,img:"101434_RQZCm.jpg"},{title:"星之梦",rating:8,img:"859_2s5MH.jpg"},{title:"兰斯6 - 赛斯崩坏 -",rating:7.5,img:"11168_K0dEQ.jpg"},{title:"秋之回忆：从今以后",rating:7.7,img:"1735_peMgL.jpg"},{title:"寒蝉鸣泣之时",rating:8.2,img:"17035_n33xd.jpg"},{title:"腐姬 归省～jamais vu～",rating:7.4,img:"302417_zJD39.jpg"},{title:"乐园～一如既往的我。的存在～",rating:8.1,img:"13966_R48FP.jpg"},{title:"加奈···欢迎回来！！",rating:7.8,img:"302984_Nzo3N.jpg"},{title:"春天的足音",rating:7.7,img:"1063_JMoM5.jpg"},{title:"那一天，去往何方",rating:7,img:"1191_AN7OE.jpg"},{title:"半衰期2",rating:8.5,img:"9658_TE8l6.jpg"},{title:"初音岛 P.C.",rating:6.8,img:"4044_A3U2s.jpg"},{title:"四重奏！",rating:7.4,img:"1121_E473h.jpg"}],2005:[{title:"天鹅之歌",rating:8.1,img:"2722_w40CX.jpg"},{title:"车轮之国、向日葵的少女",rating:8.1,img:"1124_2tmmT.jpg"},{title:"水仙",rating:8.5,img:"1167_Yymi1.jpg"},{title:"最后的现在",rating:8.7,img:"7978_hc6iN.jpg"},{title:"女仆咖啡帕露菲",rating:8,img:"846_xUyQU.jpg"},{title:"梦见之药",rating:7.4,img:"838_TT4X2.jpg"},{title:"ToHeart2 XRATED",rating:7.6,img:"1045_NHT2y.jpg"},{title:"我不是天使",rating:7.2,img:"42725_C1gfp.jpg"},{title:"寒蝉鸣泣之时解 皆杀篇",rating:7.5,img:"309724_L5E6P.jpg"},{title:"皋月物语",rating:8.3,img:"79183_K3KIk.jpg"},{title:"娇蛮之吻",rating:7.2,img:"15887_9vBEQ.jpg"},{title:"梦幻廻廊",rating:7,img:"28296_6Y96W.jpg"},{title:"夜明前的琉璃色",rating:6.8,img:"1766_cXjpC.jpg"},{title:"ジオグラマトン -Dyogrammaton-",rating:6.3,img:"79104_G50B7.jpg"}],2006:[{title:"Muv-Luv Alternative",rating:8.8,img:"4828_81B8A.jpg"},{title:"青空下的约定",rating:7.8,img:"1174_DNdJr.jpg"},{title:"悠久之翼-前篇",rating:7.6,img:"1488_zY592.jpg"},{title:"I/O",rating:8.1,img:"1079_8Do9y.jpg"},{title:"战国兰斯",rating:8.3,img:"1795_CgxQU.jpg"},{title:"遥仰凰华",rating:7.5,img:"1088_RhDue.jpg"},{title:"寒蝉鸣泣之时解",rating:8.4,img:"80705_6o6qH.jpg"},{title:"离开的人们",rating:7.5,img:"114304_6soSy.jpg"},{title:"四叶草",rating:6.9,img:"16866_8eTsv.jpg"},{title:"她们的流仪",rating:7.1,img:"14357_895R0.jpg"},{title:"雪影",rating:7.5,img:"882_8bGof.jpg"},{title:"Gore Screaming Show",rating:7,img:"25617_M43rM.jpg"},{title:"EXTRAVAGANZA ～蟲愛でる少女～",rating:7.6,img:"12592_U7kRq.jpg"},{title:"英雄传说：空之轨迹SC",rating:8.7,img:"343_Pb22f.jpg"},{title:"PP -Pianissimo- 提线木偶之轮舞",rating:6.5,img:"61671_UOO94.jpg"},{title:"Fossette - Cafe au Le Ciel Bleu -",rating:7.5,img:"1459_44x04.jpg"},{title:"H2O ～FOOTPRINTS IN THE SAND～",rating:7,img:"2714_KsLD0.jpg"},{title:"Scarlett ～スカーレット～",rating:7.4,img:"1327_KhtSp.jpg"}],2007:[{title:"KIRA☆KIRA 煌煌舞台",rating:8.5,img:"2723_RWt07.jpg"},{title:"爱丽丝大游行～两位爱丽丝与不可思议的少女们",rating:6.7,img:"11255_w1HT6.jpg"},{title:"海猫鸣泣之时",rating:8.4,img:"1020_L3HDr.jpg"},{title:"水仙2",rating:8.2,img:"1168_aY6d3.jpg"},{title:"Little Busters!",rating:8.3,img:"125131_x4hmy.jpg"},{title:"片羽",rating:7.5,img:"2844_4cctx.jpg"},{title:"续·杀戮之姜戈—地狱通缉犯—",rating:8.2,img:"20714_4hLmd.jpg"},{title:"赫炎的印加诺克 ～何等美好的人们～",rating:7.5,img:"7942_VIOFi.jpg"},{title:"逆转裁判4",rating:7.7,img:"1114_PDHO3.jpg"},{title:"电塔未明",rating:7.2,img:"19291_e3COC.jpg"},{title:"终有一日愿遂彼空",rating:7.1,img:"11627_dLd5q.jpg"},{title:"车轮之国、悠久的少年少女",rating:7.7,img:"16246_6noo6.jpg"},{title:"ITAZULOVE 在没有人烟的公园和少女孕育爱情",rating:5.7,img:"8215_oN9mi.jpg"},{title:"鬼畜眼镜",rating:7.6,img:"2136_Y35XY.jpg"},{title:"盛开的钢琴之森下",rating:6.8,img:"6681_2aqBq.jpg"},{title:"亲吻那片花瓣 ～与你的恋人纽带～",rating:7,img:"5358_3dETS.jpg"},{title:"つくとり",rating:7.5,img:"14439_AV9Vj.jpg"},{title:"Aster",rating:7.2,img:"12569_peaCq.jpg"}],2008:[{title:"428 ～被封锁的涩谷～",rating:8.5,img:"955_WhyX0.jpg"},{title:"壳之少女",rating:7.6,img:"1130_x9Zkk.jpg"},{title:"G弦上的魔王",rating:7.9,img:"1385_9G6wp.jpg"},{title:"夏空彼方",rating:7.3,img:"10120_2zAOl.jpg"},{title:"Little Busters! EX",rating:8.5,img:"845_u43XO.jpg"},{title:"Ruina 废都物语",rating:8.8,img:"51361_gWJWu.jpg"},{title:"媚肉之香",rating:7.9,img:"17436_iE83f.jpg"},{title:"缘之空",rating:7,img:"2388_nT8So.jpg"},{title:"悠久之翼-后篇",rating:8.4,img:"1089_HVvHh.jpg"},{title:"智以泪聚",rating:7.5,img:"10767_Spasc.jpg"},{title:"MYTH",rating:7.7,img:"99132_IiMzW.jpg"},{title:"11eyes -罪与罚与赎的少女-",rating:7.2,img:"1411_AtstS.jpg"},{title:"游魂-Kiss on my Deity-",rating:6.7,img:"3177_dwPD8.jpg"},{title:"FORTUNE ARTERIAL",rating:7.1,img:"56983_S3X0r.jpg"},{title:"漆黑的夏尔诺斯 ～何等美好的明日～",rating:7.4,img:"1023_5l556.jpg"},{title:"晓之护卫",rating:7,img:"3906_4KIUc.jpg"},{title:"雨の日と雨の日の次の日",rating:0,img:"527509_s5ph5.jpg"},{title:"霞外笼逗留记",rating:8.2,img:"1013_q91A8.jpg"},{title:"战女神ZERO",rating:8.2,img:"926_3jf2F.jpg"},{title:"混沌头",rating:7,img:"1410_ma0Xo.jpg"},{title:"彼女×彼女×彼女～三姉妹とのドキドキ共同生活～",rating:6.9,img:"61767_ZzvyY.jpg"},{title:"女神异闻录4",rating:8.4,img:"447_4juu1.jpg"}],2009:[{title:"装甲恶鬼村正",rating:8.6,img:"3243_kA5A1.jpg"},{title:"命运石之门",rating:8.9,img:"3154_j71Z7.jpg"},{title:'BALDR SKY Dive2 "RECORDARE"',rating:8.8,img:"12098_fF3m3.jpg"},{title:"星空的记忆 -Wish upon a shooting star",rating:7.8,img:"3650_g2zfR.jpg"},{title:'BALDR SKY Dive1 "LostMemory"',rating:8.5,img:"1457_5RVKR.jpg"},{title:"eden* They were only two, on the planet.",rating:7.9,img:"2288_Y3ow5.jpg"},{title:"我们没有翅膀",rating:8.4,img:"7868_RlKwS.jpg"},{title:"从晴朗的朝色泛起之际开始",rating:7.6,img:"3591_uxglf.jpg"},{title:"海猫鸣泣之时散",rating:8.6,img:"109118_RJUKj.jpg"},{title:"极限脱出 9小时9人9扇门",rating:8,img:"3863_5m7N3.jpg"},{title:"兰斯02~反叛的少女们~",rating:5.9,img:"75508_jn113.jpg"},{title:"鬼歌。",rating:6.1,img:"14566_6eiIb.jpg"},{title:"夏之雨",rating:6.9,img:"7847_5707t.jpg"},{title:"痕 ～きずあと～",rating:7.1,img:"1090_T42Zm.jpg"},{title:"白雪～七凭之祭～",rating:6,img:"16480_7jtxj.jpg"},{title:"Flyable Heart",rating:7,img:"1499_829n2.jpg"},{title:"夏梦渚",rating:7.4,img:"4529_05E08.jpg"},{title:"eden* PLUS+MOSAIC",rating:7.4,img:"491523_p6bXi.jpg"},{title:"认真和我恋爱",rating:7.9,img:"11298_Vq4dV.jpg"},{title:"纯白交响曲",rating:7.2,img:"3306_Z56g5.jpg"},{title:"天神乱漫 -LUCKY or UNLUCKY!?-",rating:6.8,img:"10119_b122j.jpg"},{title:"白光的伐鲁希亚 ～何等美好的希望～",rating:7.1,img:"13254_SoH78.jpg"},{title:"らぶでれーしょん！",rating:7.6,img:"16379_0I8Fi.jpg"}],2010:[{title:"美好的每一天 ～不连续的存在～",rating:8.8,img:"4639_kDq7d.jpg"},{title:"弹丸论破 希望的学园和绝望高中生",rating:7.9,img:"10336_A42Iz.jpg"},{title:"海猫鸣泣之时~魔女与推理的轮舞曲~",rating:8.7,img:"11028_R8kIG.jpg"},{title:"黄昏的禁忌之药",rating:7.5,img:"7700_6330h.jpg"},{title:"白色相簿2 序章",rating:8.2,img:"4066_E6YA6.jpg"},{title:"幽灵诡计",rating:8.8,img:"4723_Kggk3.jpg"},{title:"恋爱和选举和巧克力",rating:6.6,img:"10340_4Ff0Z.jpg"},{title:"星空的记忆 永恒之心",rating:7.6,img:"3651_fZOdf.jpg"},{title:"恋色空模样",rating:6.9,img:"4389_4yYOf.jpg"},{title:"紫影的索纳尼尔 ～何等美好的记忆～",rating:7.8,img:"10957_w4z99.jpg"},{title:"白色相簿：编缀的冬日回忆",rating:7.3,img:"20957_2W7nm.jpg"},{title:"暗之部屋",rating:7.7,img:"7870_poQA1.jpg"},{title:"信天翁航海录",rating:7.6,img:"13445_caH2H.jpg"},{title:"库特wafter",rating:7,img:"4502_6aFx1.jpg"},{title:"Noble Works",rating:6.6,img:"10106_L6f7p.jpg"},{title:"鬼まり。",rating:6.1,img:"14567_kLbpk.jpg"},{title:"尼尔 人工生命",rating:7.7,img:"4844_HetTe.jpg"},{title:"英雄传说：零之轨迹",rating:7.9,img:"8255_4Q57x.jpg"},{title:"天使的星期日",rating:7.4,img:"4881_6BBXx.jpg"},{title:"诡计对逻辑",rating:7.4,img:"20199_v7u0z.jpg"},{title:"智以泪聚FD-吹向明日彼岸的可视之风-",rating:7.7,img:"10768_XXxkX.jpg"}],2011:[{title:"白色相簿2 终章",rating:9,img:"22290_1L2aJ.jpg"},{title:"秽翼的尤斯蒂娅",rating:8.3,img:"12280_lKDNi.jpg"},{title:"Rewrite",rating:8.6,img:"4022_yF2YV.jpg"},{title:"五彩斑斓的世界",rating:7.5,img:"14435_nNaw3.jpg"},{title:"euphoria",rating:7.2,img:"19385_Unjr9.jpg"},{title:"海猫鸣泣之时散～真实与幻想的夜想曲～",rating:8.7,img:"56363_212lV.jpg"},{title:"灰色的果实",rating:7.8,img:"10869_J54tt.jpg"},{title:"兰斯8",rating:7.4,img:"19750_GESIl.jpg"},{title:"美少女万华镜 -被诅咒的传说少女-",rating:6.9,img:"24866_yVPxL.jpg"},{title:"我的女友是蓝领／她的作为，我的遭遇／巨乳妻完全捕获计划／我老婆被那家伙睡了。",rating:7.5,img:"28400_El07J.jpg"},{title:"情侣热恋中",rating:7.5,img:"12580_sF0E0.jpg"},{title:"命运石之门 比翼恋理的爱人",rating:6.8,img:"19060_p8O8I.jpg"},{title:"不要践踏天使的羽毛",rating:7,img:"15439_qECwT.jpg"},{title:"突然之间发现我已恋上你",rating:6.4,img:"14293_7fac7.jpg"},{title:"鬼哭街 泪尽铃音响",rating:7.3,img:"14295_CWNdZ.jpg"},{title:"NOeSIS-虚伪记忆的物语-",rating:7.4,img:"70981_yffxt.jpg"},{title:"狗哭",rating:5.8,img:"14144_Uu77x.jpg"},{title:"LOVELY×CATION",rating:6.7,img:"15213_1n27d.jpg"},{title:"触祭之都",rating:4.4,img:"122657_m8aRD.jpg"}],2012:[{title:"魔法使之夜",rating:8.6,img:"5418_VTRT4.jpg"},{title:"超级弹丸论破2 再见了绝望学园",rating:8.5,img:"42746_2hfkF.jpg"},{title:"近月少女的礼仪",rating:7.7,img:"44123_k8Rmk.jpg"},{title:"女神异闻录4 黄金版",rating:8.6,img:"22660_4bb11.jpg"},{title:"初雪樱",rating:7.6,img:"19002_nO49l.jpg"},{title:"海市蜃楼之馆",rating:8.4,img:"73806_cc482.jpg"},{title:"五彩斑斓的曙光",rating:7.8,img:"37755_fMp5n.jpg"},{title:"美少女万华镜 -勿忘草与永远的少女-",rating:6.8,img:"41128_59B99.jpg"},{title:"白色相簿2 幸福的彼端",rating:8.9,img:"54898_pqx6M.jpg"},{title:"DRACU-RIOT!",rating:7,img:"25370_x2oXr.jpg"},{title:"神怒之日：为爱痴狂",rating:8.4,img:"43372_1QU1q.jpg"},{title:"夏空的英仙座",rating:6.3,img:"42554_kovLa.jpg"},{title:"おたマ！～おたく仲間はちっこいマニア～",rating:6,img:"43289_pPT6P.jpg"},{title:"幻灵镇魂曲",rating:8.2,img:"78442_Fg8PP.jpg"},{title:"Root Double -Before Crime After Days-",rating:7.8,img:"27914_YSS1y.jpg"},{title:"初音岛3",rating:7.2,img:"22228_H4jhh.jpg"},{title:"在这苍穹展翅",rating:7.4,img:"29011_co84y.jpg"},{title:"极限脱出ADV 善人死亡",rating:8,img:"23491_hJP1H.jpg"},{title:"灰色的迷宫",rating:7.7,img:"28682_BBZBE.jpg"},{title:"时钟机关的Ley-line-黄昏时刻的境界线-",rating:6.7,img:"41155_IO30Z.jpg"},{title:"黄雷的伽克苏恩～何等闪耀的勇气～",rating:7.3,img:"53405_7HtBZ.jpg"},{title:"心跳回忆女生版3 白金版",rating:8.7,img:"29049_Bqh8h.jpg"}],2013:[{title:"フレラバ ～Friend to Lover～",rating:7.8,img:"58584_jsjR8.jpg"},{title:"少女理论及其周边 -巴黎学院篇-",rating:8,img:"66760_Zz9v3.jpg"},{title:"大图书馆的牧羊人",rating:7.4,img:"24796_m5i8U.jpg"},{title:"向日葵的教会与长长的暑假",rating:7.7,img:"41565_NOWtw.jpg"},{title:"兰斯01 寻找小光",rating:7,img:"80316_0byyY.jpg"},{title:"忠臣藏46＋1",rating:8.2,img:"64718_Wv9I9.jpg"},{title:"虚之少女",rating:7.4,img:"37311_z5tTT.jpg"},{title:"你和她和她的恋爱。",rating:7.4,img:"59842_P3N5Y.jpg"},{title:"LOVESICK PUPPIES -我们为了恋爱而诞生-",rating:7,img:"49320_6gGS9.jpg"},{title:"幸福噩梦",rating:7,img:"48010_69v9i.jpg"},{title:"灰色的乐园",rating:7.8,img:"46868_czj7k.jpg"},{title:"献给精灵神的祭品巫女供牺姬菲娜的冒险之旅",rating:7.8,img:"102714_ujX77.jpg"},{title:"时钟机关的Ley-line-残影之夜将明时-",rating:7.8,img:"49533_M91L7.jpg"},{title:"sisters ～夏天最后一日～ Ultra Edition",rating:7.1,img:"61169_66Sbb.jpg"},{title:"麻吕的患者是蓝领",rating:6.8,img:"70716_Z0uex.jpg"},{title:"潜伏之赤途",rating:8.7,img:"97911_eeKW0.jpg"},{title:"逆转裁判5",rating:6.7,img:"51602_c2EaP.jpg"},{title:"因为妹妹太受欢迎了糟糕了。",rating:6.5,img:"81488_0L4Fl.jpg"},{title:"魔导巧壳",rating:7.4,img:"54516_38rGl.jpg"},{title:"魔卡魅恋！",rating:6.8,img:"58072_0guXw.jpg"},{title:"幻创的幻人 ～Oratorio Phantasm Historia～",rating:7.3,img:"58561_A9u24.jpg"},{title:"復讐の死霊魔術師 ～望むのは死の痛み～",rating:6.5,img:"89484_AsJZY.jpg"}],2014:[{title:"苍之彼方的四重奏",rating:7.9,img:"76912_RikT2.jpg"},{title:"逆转裁判123成步堂精选集",rating:8.4,img:"94463_1r0Pb.jpg"},{title:"混沌子",rating:8.4,img:"88765_QF7GZ.jpg"},{title:"纸上魔法使",rating:7.9,img:"111552_zNOi1.jpg"},{title:"近月少女的礼仪2",rating:6.8,img:"105074_8US7Q.jpg"},{title:"幸运草的约定",rating:7.2,img:"82389_Oo6vF.jpg"},{title:"西历2236年",rating:8.4,img:"137992_fR42p.jpg"},{title:"南十字星恋歌",rating:6.2,img:"73738_ry3G5.jpg"},{title:"若能与你再次相见",rating:7.3,img:"105787_ra7tf.jpg"},{title:"星辰恋曲的白色永恒",rating:7.2,img:"78544_66wEP.jpg"},{title:"随性大冒险",rating:9.3,img:"245593_lp204.jpg"},{title:"慕情之心今随君作伴",rating:7.2,img:"111553_kriIb.jpg"},{title:"冲破万里晴空之上",rating:8,img:"106509_6u9B6.jpg"},{title:"FLOWERS 春篇",rating:7.3,img:"90516_M43ct.jpg"},{title:"星織ユメミライ",rating:7.5,img:"91166_r4HMn.jpg"},{title:"セミラミスの天秤",rating:7,img:"97551_TzXgc.jpg"},{title:"甜蜜女友",rating:7.3,img:"114735_Nggnk.jpg"},{title:"七色轮回",rating:7.5,img:"109758_2z2L8.jpg"},{title:"彼女が俺にくれたもの。俺が彼女にあげるもの。 ～KISS My Darling：めちゃ婚case3～",rating:6.7,img:"94382_xSXi6.jpg"},{title:"PRIMAL×HEARTS",rating:6.9,img:"100309_yCrCa.jpg"},{title:"魔女恋爱日记",rating:7.3,img:"88440_Wg4m1.jpg"},{title:"爱丽娅的明日盛典！",rating:6.1,img:"51517_yYtbH.jpg"},{title:"变身！～变成那个女孩子为所欲为～",rating:7.3,img:"103305_9hGF1.jpg"}],2015:[{title:"樱之诗 - 在樱花之森上飞舞",rating:8.8,img:"22423_SksK2.jpg"},{title:"人狼村之谜",rating:8.2,img:"215470_af6bA.jpg"},{title:"魔女的夜宴",rating:7.2,img:"113290_Mku0U.jpg"},{title:"命运石之门 0",rating:7.9,img:"129820_C6k1C.jpg"},{title:"兰斯03 利萨斯陷落",rating:8.2,img:"134929_f3y1M.jpg"},{title:"想要传达给你的爱恋",rating:7.2,img:"132528_rM8ym.jpg"},{title:"永不落幕的前奏诗",rating:7.2,img:"107501_yfRR6.jpg"},{title:"与你心相连",rating:7.5,img:"115976_Kk15n.jpg"},{title:"大逆转裁判 成步堂龙之介的冒险",rating:7.2,img:"102690_T7fhH.jpg"},{title:"夏娃年代记",rating:7.5,img:"122928_90kQh.jpg"},{title:"妹的圣域",rating:6.2,img:"125929_jO8jf.jpg"},{title:"甜蜜女友～Second Season～",rating:7.3,img:"137782_6RN9r.jpg"},{title:"抬头看看吧，看那天上的繁星",rating:7.4,img:"121488_WWZa2.jpg"},{title:"时钟机关的Ley-line-朝雾中飘零之花-",rating:7.9,img:"106118_z9obb.jpg"},{title:"花咲workspring！",rating:6.9,img:"113633_CjERA.jpg"},{title:"美少女万华镜 -为神所创的少女们-",rating:7.2,img:"92462_d0q4I.jpg"},{title:"FLOWERS 夏篇",rating:8.1,img:"119895_gJ4qq.jpg"}],2016:[{title:"天津罪",rating:7.6,img:"165894_CCyPX.jpg"},{title:"千恋＊万花",rating:6.9,img:"172612_sjXrE.jpg"},{title:"海底",rating:8.5,img:"226956_6c4wV.jpg"},{title:"女神异闻录5",rating:8.7,img:"88868_wSSyP.jpg"},{title:"逝去的你、于馆中萌生的憎恶",rating:6.3,img:"178431_8Mf2t.jpg"},{title:"VA-11 HALL-A：赛博朋克酒保行动",rating:8.1,img:"186554_VfFt9.jpg"},{title:"伊苏VIII -丹娜的陨涕日-",rating:8.3,img:"112339_67W3w.jpg"},{title:"夏色心跳日志",rating:6.8,img:"155705_Zh3hn.jpg"},{title:"花之天使的夏日恋歌",rating:7.2,img:"172842_lLaMl.jpg"},{title:"野良与皇女与流浪猫之心",rating:7.2,img:"144518_73Fl3.jpg"},{title:"来自昏暗的时间尽头",rating:7.4,img:"192005_czggU.jpg"},{title:"夏之锁",rating:6.7,img:"166756_WiWad.jpg"},{title:"King Exit",rating:8,img:"210177_F8U9q.jpg"},{title:"爱上火车",rating:6.8,img:"143128_vU8pT.jpg"},{title:"Re:LieF 〜献给亲爱的你〜",rating:6.9,img:"176606_BNp9C.jpg"},{title:"银色遥远",rating:7.2,img:"161787_dcCHd.jpg"},{title:"永不枯萎的世界与终结之花",rating:6.7,img:"186675_x1NXN.jpg"},{title:"D.C.III With You",rating:6.8,img:"136477_14Dps.jpg"},{title:"ISLAND",rating:7.8,img:"150191_BtQpr.jpg"}],2017:[{title:"流景之海的艾佩理雅",rating:8,img:"210068_p4P8s.jpg"},{title:"青鸟",rating:7.4,img:"220311_d7Pw7.jpg"},{title:"金辉恋曲四重奏",rating:7.6,img:"225784_uEb3Y.jpg"},{title:"BLACKSOULS -黒の童話と五魔姫-",rating:7.4,img:"247897_QiqxN.jpg"},{title:"尼尔 自动人形",rating:8.1,img:"137588_634EA.jpg"},{title:"9-nine-九次九日九重色",rating:6.4,img:"189739_n3YFN.jpg"},{title:"水葬银货的伊斯特利亚",rating:7.3,img:"202552_lwBMg.jpg"},{title:"まほ×ろば -Witches spiritual home-",rating:6.6,img:"216243_wfT8P.jpg"},{title:"大逆转裁判2 成步堂龙之介的觉悟",rating:8.7,img:"192977_ZM6UN.jpg"},{title:"异度神剑2",rating:8.2,img:"205916_Uwk5y.jpg"},{title:"突然＊恋人",rating:7.5,img:"220369_gtDAA.jpg"},{title:"苍之彼方的四重奏 EXTRA1",rating:7.2,img:"206156_8DiW8.jpg"},{title:"天结城堡大师",rating:7.5,img:"200551_dkz86.jpg"},{title:"新弹丸论破V3 大家的自相残杀新学期",rating:7.2,img:"146579_388qk.jpg"},{title:"美少女万华镜 -罪与罚的少女-",rating:6.9,img:"175467_kA9pP.jpg"},{title:"月影魅像-解放之羽-",rating:7,img:"196972_UY4uC.jpg"},{title:"7days—与你共度的七日间",rating:7.4,img:"193905_hyyFf.jpg"},{title:"你去死吧 －多数决死亡游戏－",rating:7.8,img:"224621_EsV97.jpg"}],2018:[{title:"抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？",rating:7.5,img:"243475_q93n2.jpg"},{title:"Summer Pockets",rating:8.3,img:"200763_s2kSG.jpg"},{title:"兰斯10 决战",rating:9.3,img:"226254_UNFNa.jpg"},{title:"BLACKSOULSII -愛しき貴方へ贈る不思議の国-",rating:8.8,img:"267764_hhhhN.jpg"},{title:"9-nine-天色天歌天籁音",rating:7.2,img:"222145_s4Zqm.jpg"},{title:"幽灵镇少女 第一季",rating:7.9,img:"253978_G2oyc.jpg"},{title:"美好的每一天 ～不连续的存在～全语音HD版",rating:9,img:"259061_i2Ou2.jpg"},{title:"少女与我、两纪之差",rating:6.7,img:"228216_jUNIH.jpg"},{title:"蔚蓝",rating:8.6,img:"236561_566w2.jpg"},{title:"乌有乡",rating:7.3,img:"239680_7WQKi.jpg"},{title:"RIDDLE JOKER",rating:6.6,img:"231798_ogEH5.jpg"},{title:"底特律：化身为人",rating:7.2,img:"151187_hcCin.jpg"},{title:"奇异恩典·圣夜的小镇",rating:7.5,img:"254208_RgeC4.jpg"},{title:"寄宿之恋",rating:6.8,img:"228146_ET8mr.jpg"},{title:"5分钟的邂逅！时间停止与不可避免的命运！",rating:6.5,img:"253737_RfNaC.jpg"},{title:"白色相簿2 扩展版",rating:9.2,img:"424578_ZW90U.jpg"}],2019:[{title:"樱花、萌放。-as the Night's, Reincarnation-",rating:8.3,img:"233030_422zH.jpg"},{title:"抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？2",rating:8.1,img:"273493_ZMBD7.jpg"},{title:"女神异闻录5 皇家版",rating:8.4,img:"278949_zTV4y.jpg"},{title:"MUSICUS!",rating:8.5,img:"241897_6E2XI.jpg"},{title:"极乐迪斯科",rating:8.7,img:"291280_lMGRs.jpg"},{title:"死月妖花～四月八日～",rating:9,img:"280440_do0j5.jpg"},{title:"十三机兵防卫圈",rating:8.6,img:"146598_m2Dj6.jpg"},{title:"9-nine-春色春恋春熙风",rating:6.9,img:"256657_F446i.jpg"},{title:"金辉恋曲四重奏 -Golden Time-",rating:7.5,img:"267448_Wy130.jpg"},{title:"恋愛、借りちゃいました",rating:6.8,img:"275265_69xl3.jpg"},{title:"星光咖啡馆与死神之蝶",rating:6.4,img:"289599_NLvYY.jpg"},{title:"青空下的加缪",rating:7.1,img:"257527_fJvFZ.jpg"},{title:"AI：梦境档案",rating:7.5,img:"252657_adMO0.jpg"},{title:"异想魅惑",rating:7.2,img:"285075_Qn5AA.jpg"},{title:"虚幻寓言：欲望的祭品",rating:7.4,img:"328725_KoKPp.jpg"}],2020:[{title:"Summer Pockets REFLECTION BLUE",rating:8.4,img:"295957_H64uh.jpg"},{title:"甜蜜女友2",rating:7.4,img:"295350_BTtdQ.jpg"},{title:"樱色之云绯色之恋",rating:7.7,img:"292024_ygJZj.jpg"},{title:"常轨脱离Creative",rating:6.9,img:"295364_B9XT3.jpg"},{title:"亚托莉 -我挚爱的时光-",rating:7.2,img:"297264_Llz6w.jpg"},{title:"9-nine-雪色雪花雪之痕",rating:7.7,img:"290856_ft4cG.jpg"},{title:"星空列车与白的旅行",rating:7.5,img:"304421_HOeaY.jpg"},{title:"爱上火车-Last Run!!-",rating:7.2,img:"305045_RoXrK.jpg"},{title:"白日梦的构想图",rating:7.5,img:"295075_ejRG6.jpg"},{title:"美少女万华镜 -理与迷宫的少女-",rating:7.4,img:"295320_4E6vb.jpg"},{title:"恋爱X决胜战",rating:6.4,img:"308573_JSzNX.jpg"},{title:"丸子与银河龙",rating:7.5,img:"291333_CQiz4.jpg"},{title:"保健室的老师与沉迷吹泡泡的助手",rating:7.2,img:"309233_AaYii.jpg"},{title:"女神异闻录5 乱战：魅影攻手",rating:7.3,img:"281281_f2Y2T.jpg"},{title:"ウウウルトラC",rating:7.7,img:"277373_9mr7Z.jpg"},{title:"Saleté",rating:7.2,img:"295083_pD1m1.jpg"},{title:"多娜多娜 一起干坏事吧",rating:7.4,img:"297734_LRm0a.jpg"},{title:"绽放★青春全力向前冲！",rating:6.1,img:"304375_1kZsS.jpg"}],2021:[{title:"永恒世界",rating:8.4,img:"442350_9hmWj.jpg"},{title:"9-nine- 新章",rating:6.1,img:"314651_DU3aM.jpg"},{title:"我们是不能延期了",rating:7.2,img:"322181_U2bBl.jpg"},{title:"Monkeys!¡",rating:7.2,img:"322778_b33u1.jpg"},{title:"冬暮川滚滚",rating:7.3,img:"324621_oQaq7.jpg"},{title:"圣骑士莉卡物语 白翼与淫翼姐妹",rating:7.7,img:"321956_jPsjz.jpg"},{title:"创作彼女的恋爱方程式",rating:6.1,img:"336983_tTXWc.jpg"},{title:"月姬 -A piece of blue glass moon-",rating:8.2,img:"46874_JC7Q5.jpg"},{title:"东方夜雀食堂",rating:7.4,img:"339525_d2YWK.jpg"},{title:"终焉之莉莉：骑士寂夜",rating:7.3,img:"320211_k7iHo.jpg"},{title:"海沙风云",rating:7.3,img:"295004_C82CM.jpg"},{title:"D.C.4 Plus Harmony",rating:6.5,img:"333293_91xdU.jpg"},{title:"大逆転裁判1＆2　-成歩堂龍ノ介の冒險と覺悟-",rating:8.4,img:"490291_K37Vd.jpg"},{title:"吹弹！丰盈！波涛汹涌！异世界魅魔学园！",rating:7.2,img:"322142_5bKkp.jpg"},{title:"海猫鸣泣之时咲～猫箱和梦想的交响曲～",rating:8.8,img:"328585_yDsz4.jpg"},{title:"纯爱咖啡厅～帕露菲重制版～",rating:7.7,img:"323156_NNNZw.jpg"},{title:"星之梦 -雪圈球-",rating:6.2,img:"339372_eoy09.jpg"}],2022:[{title:"变态监狱",rating:8.7,img:"347780_70gvI.jpg"},{title:"废村少女 ～妖异魅惑的笼之乡～",rating:6.8,img:"398107_5KUw5.jpg"},{title:"星之终途",rating:7.5,img:"317675_csQ2e.jpg"},{title:"苍之彼方的四重奏 EXTRA2",rating:8.3,img:"308808_zY5mM.jpg"},{title:"ハミダシクリエイティブ凸",rating:6.8,img:"364247_4mm85.jpg"},{title:"神之天平 ～活着的证明～ Revision",rating:8.2,img:"405362_TLJ9L.jpg"},{title:"BLACK SHEEP TOWN",rating:8.4,img:"212376_A4HAq.jpg"},{title:"甜蜜夏日",rating:7,img:"377476_JxnJ4.jpg"},{title:"恋爱成双",rating:6.7,img:"356907_RABa7.jpg"},{title:"AMBITIOUS MISSION",rating:7.4,img:"360498_P87BB.jpg"},{title:"妹！相随 ~黑白世界的缤纷冒险~",rating:7.5,img:"371733_tn3ff.jpg"},{title:"为主人献上圣罗的甜蜜侍奉",rating:6.4,img:"388414_BsIXQ.jpg"},{title:"ジュエリー・ハーツ・アカデミア -We will wing wonder world-",rating:7.2,img:"363763_BZvBF.jpg"},{title:"魔法使之夜",rating:9.2,img:"540053_YkH88.jpg"},{title:"主播女孩重度依赖",rating:7,img:"328321_29l4y.jpg"}],2023:[{title:"甜蜜女友2+",rating:8.1,img:"345691_0wAXf.jpg"},{title:"樱之刻 - 于樱花之森下漫步",rating:8.3,img:"220921_x17Z2.jpg"},{title:"纯白交响曲 SANA EDITION",rating:7.6,img:"417463_roe96.jpg"},{title:"歧路旅人2",rating:8,img:"401184_pD9Gp.jpg"},{title:"恋狱～月狂病～ 重制版",rating:7.9,img:"410409_UT7gV.jpg"},{title:"Hira Hira Hihiru",rating:7.8,img:"402650_13frc.jpg"},{title:"天使☆嚣嚣 RE-BOOT!",rating:6,img:"409483_BzcU5.jpg"},{title:"纯白交响曲 Remake for FHD",rating:7.2,img:"491513_UYbhW.jpg"},{title:"GINKA",rating:5.9,img:"402654_uo8T1.jpg"},{title:"超级马力欧兄弟 惊奇",rating:8.5,img:"442371_FeSUu.jpg"},{title:"伊苏X -北境历险-",rating:7.7,img:"390508_5jLj8.jpg"},{title:"只属于我的神秘规则！赢了女训练家的话H是理所当然的",rating:7.5,img:"452791_3Firu.jpg"},{title:"密语-Silver Snow Sister-",rating:6.5,img:"440323_MrcdJ.jpg"}],2024:[{title:"播种之谣",rating:7.7,img:"486165_CtccO.jpg"},{title:"女神异闻录3 Reload",rating:7.6,img:"440141_4zX6q.jpg"},{title:"圣兽之王",rating:7.8,img:"454685_j0mXu.jpg"},{title:"暗喻幻想：ReFantazio",rating:7.1,img:"203681_rKQy1.jpg"},{title:"雨夜迷醉时～A night filled with the sound of rain～",rating:6,img:"507999_000ZA.jpg"},{title:"秘密之恋（伪）",rating:6,img:"487413_PgeRG.jpg"},{title:"最终幻想7 重生",rating:7.6,img:"388136_65Snb.jpg"},{title:"碧蓝幻想 Relink",rating:7.5,img:"233713_55t58.jpg"},{title:"D.C.5 Plus Happiness ～ダ・カーポ5～プラスハピネス",rating:7.6,img:"491953_5S2Aa.jpg"},{title:"真・女神转生V Vengeance",rating:8.1,img:"481667_Y2E2g.jpg"},{title:"逆转检察官1&2 御剑精选集",rating:7.8,img:"499873_upvwZ.jpg"},{title:"女神异闻录：夜幕魅影",rating:5.6,img:"424872_fIfcS.jpg"},{title:"人中之龙8",rating:7.5,img:"401332_rN398.jpg"},{title:"异想魅惑2暮色廻奇谭",rating:6.5,img:"413366_tSuU2.jpg"},{title:"美少女万华镜异闻 雪女",rating:6.2,img:"432524_TTTJx.jpg"},{title:"旭光のマリアージュ",rating:6.8,img:"479896_Ppjxj.jpg"}]};function Yn(t,e){return t[13]=1,t[14]=e>>8,t[15]=e&255,t[16]=e>>8,t[17]=e&255,t}const Qe=112,Je=72,tn=89,en=115;let ee;function Kn(){const t=new Int32Array(256);for(let e=0;e<256;e++){let n=e;for(let i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;t[e]=n}return t}function Vn(t){let e=-1;ee||(ee=Kn());for(let n=0;n<t.length;n++)e=ee[(e^t[n])&255]^e>>>8;return e^-1}function Xn(t){const e=t.length-1;for(let n=e;n>=4;n--)if(t[n-4]===9&&t[n-3]===Qe&&t[n-2]===Je&&t[n-1]===tn&&t[n]===en)return n-3;return 0}function qn(t,e,n=!1){const i=new Uint8Array(13);e*=39.3701,i[0]=Qe,i[1]=Je,i[2]=tn,i[3]=en,i[4]=e>>>24,i[5]=e>>>16,i[6]=e>>>8,i[7]=e&255,i[8]=i[4],i[9]=i[5],i[10]=i[6],i[11]=i[7],i[12]=1;const a=Vn(i),r=new Uint8Array(4);if(r[0]=a>>>24,r[1]=a>>>16,r[2]=a>>>8,r[3]=a&255,n){const o=Xn(t);return t.set(i,o),t.set(r,o+13),t}else{const o=new Uint8Array(4);o[0]=0,o[1]=0,o[2]=0,o[3]=9;const s=new Uint8Array(54);return s.set(t,0),s.set(o,33),s.set(i,37),s.set(r,50),s}}const nn="[modern-screenshot]",dt=typeof window<"u",Zn=dt&&"Worker"in window,Gn=dt&&"atob"in window;var He;const fe=dt?(He=window.navigator)==null?void 0:He.userAgent:"",rn=fe.includes("Chrome"),zt=fe.includes("AppleWebKit")&&!rn,de=fe.includes("Firefox"),Qn=t=>t&&"__CONTEXT__"in t,Jn=t=>t.constructor.name==="CSSFontFaceRule",ti=t=>t.constructor.name==="CSSImportRule",tt=t=>t.nodeType===1,Pt=t=>typeof t.className=="object",an=t=>t.tagName==="image",ei=t=>t.tagName==="use",Ct=t=>tt(t)&&typeof t.style<"u"&&!Pt(t),ni=t=>t.nodeType===8,ii=t=>t.nodeType===3,vt=t=>t.tagName==="IMG",Xt=t=>t.tagName==="VIDEO",ri=t=>t.tagName==="CANVAS",ai=t=>t.tagName==="TEXTAREA",oi=t=>t.tagName==="INPUT",si=t=>t.tagName==="STYLE",li=t=>t.tagName==="SCRIPT",gi=t=>t.tagName==="SELECT",ci=t=>t.tagName==="SLOT",ui=t=>t.tagName==="IFRAME",fi=(...t)=>console.warn(nn,...t);function di(t){var n;const e=(n=t==null?void 0:t.createElement)==null?void 0:n.call(t,"canvas");return e&&(e.height=e.width=1),!!e&&"toDataURL"in e&&!!e.toDataURL("image/webp").includes("image/webp")}const se=t=>t.startsWith("data:");function on(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(dt&&t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i)||!dt)return t;const n=qt().implementation.createHTMLDocument(),i=n.createElement("base"),a=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(a),e&&(i.href=e),a.href=t,a.href}function qt(t){return(t&&tt(t)?t==null?void 0:t.ownerDocument:t)??window.document}const Zt="http://www.w3.org/2000/svg";function mi(t,e,n){const i=qt(n).createElementNS(Zt,"svg");return i.setAttributeNS(null,"width",t.toString()),i.setAttributeNS(null,"height",e.toString()),i.setAttributeNS(null,"viewBox",`0 0 ${t} ${e}`),i}function hi(t,e){let n=new XMLSerializer().serializeToString(t);return e&&(n=n.replace(/[\u0000-\u0008\v\f\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu,"")),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`}async function pi(t,e="image/png",n=1){try{return await new Promise((i,a)=>{t.toBlob(r=>{r?i(r):a(new Error("Blob is null"))},e,n)})}catch(i){if(Gn)return bi(t.toDataURL(e,n));throw i}}function bi(t){var s;const[e,n]=t.split(","),i=((s=e.match(/data:(.+);/))==null?void 0:s[1])??void 0,a=window.atob(n),r=a.length,o=new Uint8Array(r);for(let g=0;g<r;g+=1)o[g]=a.charCodeAt(g);return new Blob([o],{type:i})}function sn(t,e){return new Promise((n,i)=>{const a=new FileReader;a.onload=()=>n(a.result),a.onerror=()=>i(a.error),a.onabort=()=>i(new Error(`Failed read blob to ${e}`)),e==="dataUrl"?a.readAsDataURL(t):e==="arrayBuffer"&&a.readAsArrayBuffer(t)})}const wi=t=>sn(t,"dataUrl"),yi=t=>sn(t,"arrayBuffer");function _t(t,e){const n=qt(e).createElement("img");return n.decoding="sync",n.loading="eager",n.src=t,n}function kt(t,e){return new Promise(n=>{const{timeout:i,ownerDocument:a,onError:r,onWarn:o}=e??{},s=typeof t=="string"?_t(t,qt(a)):t;let g=null,u=null;function l(){n(s),g&&clearTimeout(g),u==null||u()}if(i&&(g=setTimeout(l,i)),Xt(s)){const c=s.currentSrc||s.src;if(!c)return s.poster?kt(s.poster,e).then(n):l();if(s.readyState>=2)return l();const m=l,f=_=>{o==null||o("Failed video load",c,_),r==null||r(_),l()};u=()=>{s.removeEventListener("loadeddata",m),s.removeEventListener("error",f)},s.addEventListener("loadeddata",m,{once:!0}),s.addEventListener("error",f,{once:!0})}else{const c=an(s)?s.href.baseVal:s.currentSrc||s.src;if(!c)return l();const m=async()=>{if(vt(s)&&"decode"in s)try{await s.decode()}catch(_){o==null||o("Failed to decode image, trying to render anyway",s.dataset.originalSrc||c,_)}l()},f=_=>{o==null||o("Failed image load",s.dataset.originalSrc||c,_),l()};if(vt(s)&&s.complete)return m();u=()=>{s.removeEventListener("load",m),s.removeEventListener("error",f)},s.addEventListener("load",m,{once:!0}),s.addEventListener("error",f,{once:!0})}})}async function _i(t,e){Ct(t)&&(vt(t)||Xt(t)?await kt(t,e):await Promise.all(["img","video"].flatMap(n=>Array.from(t.querySelectorAll(n)).map(i=>kt(i,e)))))}const ln=function(){let e=0;const n=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${n()}${e}`)}();function gn(t){return t==null?void 0:t.split(",").map(e=>e.trim().replace(/"|'/g,"").toLowerCase()).filter(Boolean)}let Pe=0;function ji(t){const e=`${nn}[#${Pe}]`;return Pe++,{time:n=>t&&console.time(`${e} ${n}`),timeEnd:n=>t&&console.timeEnd(`${e} ${n}`),warn:(...n)=>t&&fi(...n)}}function vi(t){return{cache:t?"no-cache":"force-cache"}}async function me(t,e){return Qn(t)?t:Si(t,{...e,autoDestruct:!0})}async function Si(t,e){var f,_;const{scale:n=1,workerUrl:i,workerNumber:a=1}=e||{},r=!!(e!=null&&e.debug),o=(e==null?void 0:e.features)??!0,s=t.ownerDocument??(dt?window.document:void 0),g=((f=t.ownerDocument)==null?void 0:f.defaultView)??(dt?window:void 0),u=new Map,l={width:0,height:0,quality:1,type:"image/png",scale:n,backgroundColor:null,style:null,filter:null,maximumCanvasSize:0,timeout:3e4,progress:null,debug:r,fetch:{requestInit:vi((_=e==null?void 0:e.fetch)==null?void 0:_.bypassingCache),placeholderImage:"data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",bypassingCache:!1,...e==null?void 0:e.fetch},fetchFn:null,font:{},drawImageInterval:100,workerUrl:null,workerNumber:a,onCloneNode:null,onEmbedNode:null,onCreateForeignObjectSvg:null,includeStyleProperties:null,autoDestruct:!1,...e,__CONTEXT__:!0,log:ji(r),node:t,ownerDocument:s,ownerWindow:g,dpi:n===1?null:96*n,svgStyleElement:cn(s),svgDefsElement:s==null?void 0:s.createElementNS(Zt,"defs"),svgStyles:new Map,defaultComputedStyles:new Map,workers:[...Array.from({length:Zn&&i&&a?a:0})].map(()=>{try{const h=new Worker(i);return h.onmessage=async b=>{var x,y,p,E;const{url:j,result:w}=b.data;w?(y=(x=u.get(j))==null?void 0:x.resolve)==null||y.call(x,w):(E=(p=u.get(j))==null?void 0:p.reject)==null||E.call(p,new Error(`Error receiving message from worker: ${j}`))},h.onmessageerror=b=>{var w,x;const{url:j}=b.data;(x=(w=u.get(j))==null?void 0:w.reject)==null||x.call(w,new Error(`Error receiving message from worker: ${j}`))},h}catch(h){return l.log.warn("Failed to new Worker",h),null}}).filter(Boolean),fontFamilies:new Map,fontCssTexts:new Map,acceptOfImage:`${[di(s)&&"image/webp","image/svg+xml","image/*","*/*"].filter(Boolean).join(",")};q=0.8`,requests:u,drawImageCount:0,tasks:[],features:o,isEnable:h=>h==="restoreScrollPosition"?typeof o=="boolean"?!1:o[h]??!1:typeof o=="boolean"?o:o[h]??!0};l.log.time("wait until load"),await _i(t,{timeout:l.timeout,onWarn:l.log.warn}),l.log.timeEnd("wait until load");const{width:c,height:m}=xi(t,l);return l.width=c,l.height=m,l}function cn(t){if(!t)return;const e=t.createElement("style"),n=e.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);return e.appendChild(n),e}function xi(t,e){let{width:n,height:i}=e;if(tt(t)&&(!n||!i)){const a=t.getBoundingClientRect();n=n||a.width||Number(t.getAttribute("width"))||0,i=i||a.height||Number(t.getAttribute("height"))||0}return{width:n,height:i}}async function Ei(t,e){const{log:n,timeout:i,drawImageCount:a,drawImageInterval:r}=e;n.time("image to canvas");const o=await kt(t,{timeout:i,onWarn:e.log.warn}),{canvas:s,context2d:g}=Ai(t.ownerDocument,e),u=()=>{try{g==null||g.drawImage(o,0,0,s.width,s.height)}catch(l){e.log.warn("Failed to drawImage",l)}};if(u(),e.isEnable("fixSvgXmlDecode"))for(let l=0;l<a;l++)await new Promise(c=>{setTimeout(()=>{u(),c()},l+r)});return e.drawImageCount=0,n.timeEnd("image to canvas"),s}function Ai(t,e){const{width:n,height:i,scale:a,backgroundColor:r,maximumCanvasSize:o}=e,s=t.createElement("canvas");s.width=Math.floor(n*a),s.height=Math.floor(i*a),s.style.width=`${n}px`,s.style.height=`${i}px`,o&&(s.width>o||s.height>o)&&(s.width>o&&s.height>o?s.width>s.height?(s.height*=o/s.width,s.width=o):(s.width*=o/s.height,s.height=o):s.width>o?(s.height*=o/s.width,s.width=o):(s.width*=o/s.height,s.height=o));const g=s.getContext("2d");return g&&r&&(g.fillStyle=r,g.fillRect(0,0,s.width,s.height)),{canvas:s,context2d:g}}function un(t,e){if(t.ownerDocument)try{const r=t.toDataURL();if(r!=="data:,")return _t(r,t.ownerDocument)}catch(r){e.log.warn("Failed to clone canvas",r)}const n=t.cloneNode(!1),i=t.getContext("2d"),a=n.getContext("2d");try{return i&&a&&a.putImageData(i.getImageData(0,0,t.width,t.height),0,0),n}catch(r){e.log.warn("Failed to clone canvas",r)}return n}function Ti(t,e){var n;try{if((n=t==null?void 0:t.contentDocument)!=null&&n.body)return he(t.contentDocument.body,e)}catch(i){e.log.warn("Failed to clone iframe",i)}return t.cloneNode(!1)}function Ci(t){const e=t.cloneNode(!1);return t.currentSrc&&t.currentSrc!==t.src&&(e.src=t.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager"),e}async function ki(t,e){if(t.ownerDocument&&!t.currentSrc&&t.poster)return _t(t.poster,t.ownerDocument);const n=t.cloneNode(!1);n.crossOrigin="anonymous",t.currentSrc&&t.currentSrc!==t.src&&(n.src=t.currentSrc);const i=n.ownerDocument;if(i){let a=!0;if(await kt(n,{onError:()=>a=!1,onWarn:e.log.warn}),!a)return t.poster?_t(t.poster,t.ownerDocument):n;n.currentTime=t.currentTime,await new Promise(o=>{n.addEventListener("seeked",o,{once:!0})});const r=i.createElement("canvas");r.width=t.offsetWidth,r.height=t.offsetHeight;try{const o=r.getContext("2d");o&&o.drawImage(n,0,0,r.width,r.height)}catch(o){return e.log.warn("Failed to clone video",o),t.poster?_t(t.poster,t.ownerDocument):n}return un(r,e)}return n}function Ii(t,e){return ri(t)?un(t,e):ui(t)?Ti(t,e):vt(t)?Ci(t):Xt(t)?ki(t,e):t.cloneNode(!1)}function Ni(t){var n;let e=t.sandbox;if(!e){const{ownerDocument:i}=t;try{i&&(e=i.createElement("iframe"),e.id=`__SANDBOX__-${ln()}`,e.width="0",e.height="0",e.style.visibility="hidden",e.style.position="fixed",i.body.appendChild(e),(n=e.contentWindow)==null||n.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'),t.sandbox=e)}catch(a){t.log.warn("Failed to getSandBox",a)}}return e}const Oi=["width","height","-webkit-text-fill-color"],Pi=["stroke","fill"];function fn(t,e,n){const{defaultComputedStyles:i}=n,a=t.nodeName.toLowerCase(),r=Pt(t)&&a!=="svg",o=r?Pi.map(h=>[h,t.getAttribute(h)]).filter(([,h])=>h!==null):[],s=[r&&"svg",a,o.map((h,b)=>`${h}=${b}`).join(","),e].filter(Boolean).join(":");if(i.has(s))return i.get(s);const g=Ni(n),u=g==null?void 0:g.contentWindow;if(!u)return new Map;const l=u==null?void 0:u.document;let c,m;r?(c=l.createElementNS(Zt,"svg"),m=c.ownerDocument.createElementNS(c.namespaceURI,a),o.forEach(([h,b])=>{m.setAttributeNS(null,h,b)}),c.appendChild(m)):c=m=l.createElement(a),m.textContent=" ",l.body.appendChild(c);const f=u.getComputedStyle(m,e),_=new Map;for(let h=f.length,b=0;b<h;b++){const j=f.item(b);Oi.includes(j)||_.set(j,f.getPropertyValue(j))}return l.body.removeChild(c),i.set(s,_),_}function dn(t,e,n){var s;const i=new Map,a=[],r=new Map;if(n)for(const g of n)o(g);else for(let g=t.length,u=0;u<g;u++){const l=t.item(u);o(l)}for(let g=a.length,u=0;u<g;u++)(s=r.get(a[u]))==null||s.forEach((l,c)=>i.set(c,l));function o(g){const u=t.getPropertyValue(g),l=t.getPropertyPriority(g),c=g.lastIndexOf("-"),m=c>-1?g.substring(0,c):void 0;if(m){let f=r.get(m);f||(f=new Map,r.set(m,f)),f.set(g,[u,l])}e.get(g)===u&&!l||(m?a.push(m):i.set(g,[u,l]))}return i}function $i(t,e,n,i){var c,m,f,_;const{ownerWindow:a,includeStyleProperties:r,currentParentNodeStyle:o}=i,s=e.style,g=a.getComputedStyle(t),u=fn(t,null,i);o==null||o.forEach((h,b)=>{u.delete(b)});const l=dn(g,u,r);l.delete("transition-property"),l.delete("all"),l.delete("d"),l.delete("content"),n&&(l.delete("margin-top"),l.delete("margin-right"),l.delete("margin-bottom"),l.delete("margin-left"),l.delete("margin-block-start"),l.delete("margin-block-end"),l.delete("margin-inline-start"),l.delete("margin-inline-end"),l.set("box-sizing",["border-box",""])),((c=l.get("background-clip"))==null?void 0:c[0])==="text"&&e.classList.add("______background-clip--text"),rn&&(l.has("font-kerning")||l.set("font-kerning",["normal",""]),(((m=l.get("overflow-x"))==null?void 0:m[0])==="hidden"||((f=l.get("overflow-y"))==null?void 0:f[0])==="hidden")&&((_=l.get("text-overflow"))==null?void 0:_[0])==="ellipsis"&&t.scrollWidth===t.clientWidth&&l.set("text-overflow",["clip",""]));for(let h=s.length,b=0;b<h;b++)s.removeProperty(s.item(b));return l.forEach(([h,b],j)=>{s.setProperty(j,h,b)}),l}function Ri(t,e){(ai(t)||oi(t)||gi(t))&&e.setAttribute("value",t.value)}const Di=[":before",":after"],Li=[":-webkit-scrollbar",":-webkit-scrollbar-button",":-webkit-scrollbar-thumb",":-webkit-scrollbar-track",":-webkit-scrollbar-track-piece",":-webkit-scrollbar-corner",":-webkit-resizer"];function Bi(t,e,n,i,a){const{ownerWindow:r,svgStyleElement:o,svgStyles:s,currentNodeStyle:g}=i;if(!o||!r)return;function u(l){var x;const c=r.getComputedStyle(t,l);let m=c.getPropertyValue("content");if(!m||m==="none")return;a==null||a(m),m=m.replace(/(')|(")|(counter\(.+\))/g,"");const f=[ln()],_=fn(t,l,i);g==null||g.forEach((y,p)=>{_.delete(p)});const h=dn(c,_,i.includeStyleProperties);h.delete("content"),h.delete("-webkit-locale"),((x=h.get("background-clip"))==null?void 0:x[0])==="text"&&e.classList.add("______background-clip--text");const b=[`content: '${m}';`];if(h.forEach(([y,p],E)=>{b.push(`${E}: ${y}${p?" !important":""};`)}),b.length===1)return;try{e.className=[e.className,...f].join(" ")}catch(y){i.log.warn("Failed to copyPseudoClass",y);return}const j=b.join(`
  `);let w=s.get(j);w||(w=[],s.set(j,w)),w.push(`.${f[0]}:${l}`)}Di.forEach(u),n&&Li.forEach(u)}const $e=new Set(["symbol"]);async function Re(t,e,n,i,a){if(tt(n)&&(si(n)||li(n))||i.filter&&!i.filter(n))return;$e.has(e.nodeName)||$e.has(n.nodeName)?i.currentParentNodeStyle=void 0:i.currentParentNodeStyle=i.currentNodeStyle;const r=await he(n,i,!1,a);i.isEnable("restoreScrollPosition")&&Ui(t,r),e.appendChild(r)}async function De(t,e,n,i){var r;const a=(tt(t)?(r=t.shadowRoot)==null?void 0:r.firstChild:void 0)??t.firstChild;for(let o=a;o;o=o.nextSibling)if(!ni(o))if(tt(o)&&ci(o)&&typeof o.assignedNodes=="function"){const s=o.assignedNodes();for(let g=0;g<s.length;g++)await Re(t,e,s[g],n,i)}else await Re(t,e,o,n,i)}function Ui(t,e){if(!Ct(t)||!Ct(e))return;const{scrollTop:n,scrollLeft:i}=t;if(!n&&!i)return;const{transform:a}=e.style,r=new DOMMatrix(a),{a:o,b:s,c:g,d:u}=r;r.a=1,r.b=0,r.c=0,r.d=1,r.translateSelf(-i,-n),r.a=o,r.b=s,r.c=g,r.d=u,e.style.transform=r.toString()}function Fi(t,e){const{backgroundColor:n,width:i,height:a,style:r}=e,o=t.style;if(n&&o.setProperty("background-color",n,"important"),i&&o.setProperty("width",`${i}px`,"important"),a&&o.setProperty("height",`${a}px`,"important"),r)for(const s in r)o[s]=r[s]}const Mi=/^[\w-:]+$/;async function he(t,e,n=!1,i){var g,u,l,c;const{ownerDocument:a,ownerWindow:r,fontFamilies:o}=e;if(a&&ii(t))return i&&/\S/.test(t.data)&&i(t.data),a.createTextNode(t.data);if(a&&r&&tt(t)&&(Ct(t)||Pt(t))){const m=await Ii(t,e);if(e.isEnable("removeAbnormalAttributes")){const w=m.getAttributeNames();for(let x=w.length,y=0;y<x;y++){const p=w[y];Mi.test(p)||m.removeAttribute(p)}}const f=e.currentNodeStyle=$i(t,m,n,e);n&&Fi(m,e);let _=!1;if(e.isEnable("copyScrollbar")){const w=[(g=f.get("overflow-x"))==null?void 0:g[0],(u=f.get("overflow-y"))==null?void 0:u[0]];_=w.includes("scroll")||(w.includes("auto")||w.includes("overlay"))&&(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth)}const h=(l=f.get("text-transform"))==null?void 0:l[0],b=gn((c=f.get("font-family"))==null?void 0:c[0]),j=b?w=>{h==="uppercase"?w=w.toUpperCase():h==="lowercase"?w=w.toLowerCase():h==="capitalize"&&(w=w[0].toUpperCase()+w.substring(1)),b.forEach(x=>{let y=o.get(x);y||o.set(x,y=new Set),w.split("").forEach(p=>y.add(p))})}:void 0;return Bi(t,m,_,e,j),Ri(t,m),Xt(t)||await De(t,m,e,j),m}const s=t.cloneNode(!1);return await De(t,s,e),s}function Hi(t){if(t.ownerDocument=void 0,t.ownerWindow=void 0,t.svgStyleElement=void 0,t.svgDefsElement=void 0,t.svgStyles.clear(),t.defaultComputedStyles.clear(),t.sandbox){try{t.sandbox.remove()}catch(e){t.log.warn("Failed to destroyContext",e)}t.sandbox=void 0}t.workers=[],t.fontFamilies.clear(),t.fontCssTexts.clear(),t.requests.clear(),t.tasks=[]}function zi(t){const{url:e,timeout:n,responseType:i,...a}=t,r=new AbortController,o=n?setTimeout(()=>r.abort(),n):void 0;return fetch(e,{signal:r.signal,...a}).then(s=>{if(!s.ok)throw new Error("Failed fetch, not 2xx response",{cause:s});switch(i){case"arrayBuffer":return s.arrayBuffer();case"dataUrl":return s.blob().then(wi);case"text":default:return s.text()}}).finally(()=>clearTimeout(o))}function It(t,e){const{url:n,requestType:i="text",responseType:a="text",imageDom:r}=e;let o=n;const{timeout:s,acceptOfImage:g,requests:u,fetchFn:l,fetch:{requestInit:c,bypassingCache:m,placeholderImage:f},font:_,workers:h,fontFamilies:b}=t;i==="image"&&(zt||de)&&t.drawImageCount++;let j=u.get(n);if(!j){m&&m instanceof RegExp&&m.test(o)&&(o+=(/\?/.test(o)?"&":"?")+new Date().getTime());const w=i.startsWith("font")&&_&&_.minify,x=new Set;w&&i.split(";")[1].split(",").forEach(O=>{b.has(O)&&b.get(O).forEach(Y=>x.add(Y))});const y=w&&x.size,p={url:o,timeout:s,responseType:y?"arrayBuffer":a,headers:i==="image"?{accept:g}:void 0,...c};j={type:i,resolve:void 0,reject:void 0,response:null},j.response=(async()=>{if(l&&i==="image"){const E=await l(n);if(E)return E}return!zt&&n.startsWith("http")&&h.length?new Promise((E,O)=>{h[u.size&h.length-1].postMessage({rawUrl:n,...p}),j.resolve=E,j.reject=O}):zi(p)})().catch(E=>{if(u.delete(n),i==="image"&&f)return t.log.warn("Failed to fetch image base64, trying to use placeholder image",o),typeof f=="string"?f:f(r);throw E}),u.set(n,j)}return j.response}async function mn(t,e,n,i){if(!hn(t))return t;for(const[a,r]of Wi(t,e))try{const o=await It(n,{url:r,requestType:i?"image":"text",responseType:"dataUrl"});t=t.replace(Yi(a),`$1${o}$3`)}catch(o){n.log.warn("Failed to fetch css data url",a,o)}return t}function hn(t){return/url\((['"]?)([^'"]+?)\1\)/.test(t)}const pn=/url\((['"]?)([^'"]+?)\1\)/g;function Wi(t,e){const n=[];return t.replace(pn,(i,a,r)=>(n.push([r,on(r,e)]),i)),n.filter(([i])=>!se(i))}function Yi(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}const Ki=["background-image","border-image-source","-webkit-border-image","-webkit-mask-image","list-style-image"];function Vi(t,e){return Ki.map(n=>{const i=t.getPropertyValue(n);return!i||i==="none"?null:((zt||de)&&e.drawImageCount++,mn(i,null,e,!0).then(a=>{!a||i===a||t.setProperty(n,a,t.getPropertyPriority(n))}))}).filter(Boolean)}function Xi(t,e){if(vt(t)){const n=t.currentSrc||t.src;if(!se(n))return[It(e,{url:n,imageDom:t,requestType:"image",responseType:"dataUrl"}).then(i=>{i&&(t.srcset="",t.dataset.originalSrc=n,t.src=i||"")})];(zt||de)&&e.drawImageCount++}else if(Pt(t)&&!se(t.href.baseVal)){const n=t.href.baseVal;return[It(e,{url:n,imageDom:t,requestType:"image",responseType:"dataUrl"}).then(i=>{i&&(t.dataset.originalSrc=n,t.href.baseVal=i||"")})]}return[]}function qi(t,e){const{ownerDocument:n,svgDefsElement:i}=e,a=t.getAttribute("href")??t.getAttribute("xlink:href");if(!a)return[];const[r,o]=a.split("#");if(o){const s=`#${o}`,g=n==null?void 0:n.querySelector(`svg ${s}`);if(r&&t.setAttribute("href",s),i!=null&&i.querySelector(s))return[];if(g)return i==null||i.appendChild(g.cloneNode(!0)),[];if(r)return[It(e,{url:r,responseType:"text"}).then(u=>{i==null||i.insertAdjacentHTML("beforeend",u)})]}return[]}function bn(t,e){const{tasks:n}=e;tt(t)&&((vt(t)||an(t))&&n.push(...Xi(t,e)),ei(t)&&n.push(...qi(t,e))),Ct(t)&&n.push(...Vi(t.style,e)),t.childNodes.forEach(i=>{bn(i,e)})}async function Zi(t,e){const{ownerDocument:n,svgStyleElement:i,fontFamilies:a,fontCssTexts:r,tasks:o,font:s}=e;if(!(!n||!i||!a.size))if(s&&s.cssText){const g=Be(s.cssText,e);i.appendChild(n.createTextNode(`${g}
`))}else{const g=Array.from(n.styleSheets).filter(l=>{try{return"cssRules"in l&&!!l.cssRules.length}catch(c){return e.log.warn(`Error while reading CSS rules from ${l.href}`,c),!1}});await Promise.all(g.flatMap(l=>Array.from(l.cssRules).map(async(c,m)=>{if(ti(c)){let f=m+1;const _=c.href;let h="";try{h=await It(e,{url:_,requestType:"text",responseType:"text"})}catch(j){e.log.warn(`Error fetch remote css import from ${_}`,j)}const b=h.replace(pn,(j,w,x)=>j.replace(x,on(x,_)));for(const j of Qi(b))try{l.insertRule(j,j.startsWith("@import")?f+=1:l.cssRules.length)}catch(w){e.log.warn("Error inserting rule from remote css import",{rule:j,error:w})}}}))),g.flatMap(l=>Array.from(l.cssRules)).filter(l=>{var c;return Jn(l)&&hn(l.style.getPropertyValue("src"))&&((c=gn(l.style.getPropertyValue("font-family")))==null?void 0:c.some(m=>a.has(m)))}).forEach(l=>{const c=l,m=r.get(c.cssText);m?i.appendChild(n.createTextNode(`${m}
`)):o.push(mn(c.cssText,c.parentStyleSheet?c.parentStyleSheet.href:null,e).then(f=>{f=Be(f,e),r.set(c.cssText,f),i.appendChild(n.createTextNode(`${f}
`))}))})}}const Gi=/(\/\*[\s\S]*?\*\/)/g,Le=/((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;function Qi(t){if(t==null)return[];const e=[];let n=t.replace(Gi,"");for(;;){const r=Le.exec(n);if(!r)break;e.push(r[0])}n=n.replace(Le,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let r=i.exec(n);if(r)a.lastIndex=i.lastIndex;else if(r=a.exec(n),r)i.lastIndex=a.lastIndex;else break;e.push(r[0])}return e}const Ji=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,tr=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Be(t,e){const{font:n}=e,i=n?n==null?void 0:n.preferredFormat:void 0;return i?t.replace(tr,a=>{for(;;){const[r,,o]=Ji.exec(a)||[];if(!o)return"";if(o===i)return`src: ${r};`}}):t}async function er(t,e){const n=await me(t,e);if(tt(n.node)&&Pt(n.node))return n.node;const{ownerDocument:i,log:a,tasks:r,svgStyleElement:o,svgDefsElement:s,svgStyles:g,font:u,progress:l,autoDestruct:c,onCloneNode:m,onEmbedNode:f,onCreateForeignObjectSvg:_}=n;a.time("clone node");const h=await he(n.node,n,!0);if(o&&i){let y="";g.forEach((p,E)=>{y+=`${p.join(`,
`)} {
  ${E}
}
`}),o.appendChild(i.createTextNode(y))}a.timeEnd("clone node"),await(m==null?void 0:m(h)),u!==!1&&tt(h)&&(a.time("embed web font"),await Zi(h,n),a.timeEnd("embed web font")),a.time("embed node"),bn(h,n);const b=r.length;let j=0;const w=async()=>{for(;;){const y=r.pop();if(!y)break;try{await y}catch(p){n.log.warn("Failed to run task",p)}l==null||l(++j,b)}};l==null||l(j,b),await Promise.all([...Array.from({length:4})].map(w)),a.timeEnd("embed node"),await(f==null?void 0:f(h));const x=nr(h,n);return s&&x.insertBefore(s,x.children[0]),o&&x.insertBefore(o,x.children[0]),c&&Hi(n),await(_==null?void 0:_(x)),x}function nr(t,e){const{width:n,height:i}=e,a=mi(n,i,t.ownerDocument),r=a.ownerDocument.createElementNS(a.namespaceURI,"foreignObject");return r.setAttributeNS(null,"x","0%"),r.setAttributeNS(null,"y","0%"),r.setAttributeNS(null,"width","100%"),r.setAttributeNS(null,"height","100%"),r.append(t),a.appendChild(r),a}async function ir(t,e){var o;const n=await me(t,e),i=await er(n),a=hi(i,n.isEnable("removeControlCharacter"));n.autoDestruct||(n.svgStyleElement=cn(n.ownerDocument),n.svgDefsElement=(o=n.ownerDocument)==null?void 0:o.createElementNS(Zt,"defs"),n.svgStyles.clear());const r=_t(a,i.ownerDocument);return await Ei(r,n)}async function rr(t,e){const n=await me(t,e),{log:i,type:a,quality:r,dpi:o}=n,s=await ir(n);i.time("canvas to blob");const g=await pi(s,a,r);if(["image/png","image/jpeg"].includes(a)&&o){const u=await yi(g.slice(0,33));let l=new Uint8Array(u);return a==="image/png"?l=qn(l,o):a==="image/jpeg"&&(l=Yn(l,o)),i.timeEnd("canvas to blob"),new Blob([l,g.slice(33)],{type:a})}return i.timeEnd("canvas to blob"),g}const Wt=Symbol("store-raw"),jt=Symbol("store-node"),it=Symbol("store-has"),wn=Symbol("store-self");function yn(t){let e=t[J];if(!e&&(Object.defineProperty(t,J,{value:e=new Proxy(t,sr)}),!Array.isArray(t))){const n=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let a=0,r=n.length;a<r;a++){const o=n[a];i[o].get&&Object.defineProperty(t,o,{enumerable:i[o].enumerable,get:i[o].get.bind(e)})}}return e}function et(t){let e;return t!=null&&typeof t=="object"&&(t[J]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function mt(t,e=new Set){let n,i,a,r;if(n=t!=null&&t[Wt])return n;if(!et(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let o=0,s=t.length;o<s;o++)a=t[o],(i=mt(a,e))!==a&&(t[o]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const o=Object.keys(t),s=Object.getOwnPropertyDescriptors(t);for(let g=0,u=o.length;g<u;g++)r=o[g],!s[r].get&&(a=t[r],(i=mt(a,e))!==a&&(t[r]=i))}return t}function Yt(t,e){let n=t[e];return n||Object.defineProperty(t,e,{value:n=Object.create(null)}),n}function Nt(t,e,n){if(t[e])return t[e];const[i,a]=F(n,{equals:!1,internal:!0});return i.$=a,t[e]=i}function ar(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);return!n||n.get||!n.configurable||e===J||e===jt||(delete n.value,delete n.writable,n.get=()=>t[J][e]),n}function _n(t){ie()&&Nt(Yt(t,jt),wn)()}function or(t){return _n(t),Reflect.ownKeys(t)}const sr={get(t,e,n){if(e===Wt)return t;if(e===J)return n;if(e===ne)return _n(t),n;const i=Yt(t,jt),a=i[e];let r=a?a():t[e];if(e===jt||e===it||e==="__proto__")return r;if(!a){const o=Object.getOwnPropertyDescriptor(t,e);ie()&&(typeof r!="function"||t.hasOwnProperty(e))&&!(o&&o.get)&&(r=Nt(i,e,r)())}return et(r)?yn(r):r},has(t,e){return e===Wt||e===J||e===ne||e===jt||e===it||e==="__proto__"?!0:(ie()&&Nt(Yt(t,it),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:or,getOwnPropertyDescriptor:ar};function V(t,e,n,i=!1){if(!i&&t[e]===n)return;const a=t[e],r=t.length;n===void 0?(delete t[e],t[it]&&t[it][e]&&a!==void 0&&t[it][e].$()):(t[e]=n,t[it]&&t[it][e]&&a===void 0&&t[it][e].$());let o=Yt(t,jt),s;if((s=Nt(o,e,a))&&s.$(()=>n),Array.isArray(t)&&t.length!==r){for(let g=t.length;g<r;g++)(s=o[g])&&s.$();(s=Nt(o,"length",r))&&s.$(t.length)}(s=o[wn])&&s.$()}function jn(t,e){const n=Object.keys(e);for(let i=0;i<n.length;i+=1){const a=n[i];V(t,a,e[a])}}function lr(t,e){if(typeof e=="function"&&(e=e(t)),e=mt(e),Array.isArray(e)){if(t===e)return;let n=0,i=e.length;for(;n<i;n++){const a=e[n];t[n]!==a&&V(t,n,a)}V(t,"length",i)}else jn(t,e)}function xt(t,e,n=[]){let i,a=t;if(e.length>1){i=e.shift();const o=typeof i,s=Array.isArray(t);if(Array.isArray(i)){for(let g=0;g<i.length;g++)xt(t,[i[g]].concat(e),n);return}else if(s&&o==="function"){for(let g=0;g<t.length;g++)i(t[g],g)&&xt(t,[g].concat(e),n);return}else if(s&&o==="object"){const{from:g=0,to:u=t.length-1,by:l=1}=i;for(let c=g;c<=u;c+=l)xt(t,[c].concat(e),n);return}else if(e.length>1){xt(t[i],e,[i].concat(n));return}a=t[i],n=[i].concat(n)}let r=e[0];typeof r=="function"&&(r=r(a,n),r===a)||i===void 0&&r==null||(r=mt(r),i===void 0||et(a)&&et(r)&&!Array.isArray(r)?jn(a,r):V(t,i,r))}function gr(...[t,e]){const n=mt(t||{}),i=Array.isArray(n),a=yn(n);function r(...o){Nn(()=>{i&&o.length===1?lr(n,o[0]):xt(n,o)})}return[a,r]}const le=Symbol("store-root");function wt(t,e,n,i,a){const r=e[n];if(t===r)return;const o=Array.isArray(t);if(n!==le&&(!et(t)||!et(r)||o!==Array.isArray(r)||a&&t[a]!==r[a])){V(e,n,t);return}if(o){if(t.length&&r.length&&(!i||a&&t[0]&&t[0][a]!=null)){let u,l,c,m,f,_,h,b;for(c=0,m=Math.min(r.length,t.length);c<m&&(r[c]===t[c]||a&&r[c]&&t[c]&&r[c][a]===t[c][a]);c++)wt(t[c],r,c,i,a);const j=new Array(t.length),w=new Map;for(m=r.length-1,f=t.length-1;m>=c&&f>=c&&(r[m]===t[f]||a&&r[m]&&t[f]&&r[m][a]===t[f][a]);m--,f--)j[f]=r[m];if(c>f||c>m){for(l=c;l<=f;l++)V(r,l,t[l]);for(;l<t.length;l++)V(r,l,j[l]),wt(t[l],r,l,i,a);r.length>t.length&&V(r,"length",t.length);return}for(h=new Array(f+1),l=f;l>=c;l--)_=t[l],b=a&&_?_[a]:_,u=w.get(b),h[l]=u===void 0?-1:u,w.set(b,l);for(u=c;u<=m;u++)_=r[u],b=a&&_?_[a]:_,l=w.get(b),l!==void 0&&l!==-1&&(j[l]=r[u],l=h[l],w.set(b,l));for(l=c;l<t.length;l++)l in j?(V(r,l,j[l]),wt(t[l],r,l,i,a)):V(r,l,t[l])}else for(let u=0,l=t.length;u<l;u++)wt(t[u],r,u,i,a);r.length>t.length&&V(r,"length",t.length);return}const s=Object.keys(t);for(let u=0,l=s.length;u<l;u++)wt(t[s[u]],r,s[u],i,a);const g=Object.keys(r);for(let u=0,l=g.length;u<l;u++)t[g[u]]===void 0&&V(r,g[u],void 0)}function cr(t,e={}){const{merge:n,key:i="id"}=e,a=mt(t);return r=>{if(!et(r)||!et(a))return a;const o=wt(a,{[le]:r},le,n,i);return o===void 0?r:o}}const Kt=new WeakMap,vn={get(t,e){if(e===Wt)return t;const n=t[e];let i;return et(n)?Kt.get(n)||(Kt.set(n,i=new Proxy(n,vn)),i):n},set(t,e,n){return V(t,e,mt(n)),!0},deleteProperty(t,e){return V(t,e,void 0,!0),!0}};function Ue(t){return e=>{if(et(e)){let n;(n=Kt.get(e))||Kt.set(e,n=new Proxy(e,vn)),t(n)}return e}}var ur=D("<div class=sonner-loading-wrapper><div class=sonner-spinner>"),fr=D("<div class=sonner-loading-bar>"),dr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"clip-rule=evenodd>'),mr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"clip-rule=evenodd>'),hr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"clip-rule=evenodd>'),pr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"clip-rule=evenodd>'),br=D("<div class=sonner-loader>"),wr=D('<button aria-label="Close toast"data-close-button><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>'),yr=D("<li aria-atomic=true role=status tabindex=0 data-sonner-toast>"),_r=D("<div data-icon>"),jr=D("<div data-description>"),vr=D("<div data-content><div data-title>"),Sr=D("<button data-button data-cancel>"),xr=D("<button data-button>"),Er=D("<section tabindex=-1>"),Ar=D("<ol tabindex=-1 data-sonner-toaster>");function Tr(t,{insertAt:e}={}){if(typeof document>"u")return;const n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}Tr(`:where(html[dir=ltr]),
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
`);var Cr=Array(12).fill(0);function kr(t){return(()=>{var e=ur(),n=e.firstChild;return R(n,q(re,{each:Cr,children:()=>fr()})),X(()=>C(e,"data-visible",t.visible)),e})()}function Ir(){return dr()}function Nr(){return mr()}function Or(){return hr()}function Pr(){return pr()}function $r(t){switch(t){case"success":return Ir;case"info":return Or;case"warning":return Nr;case"error":return Pr;default:return null}}var ge=0,Rr=class{constructor(){M(this,"subscribers");M(this,"toasts");M(this,"subscribe",t=>(this.subscribers.push(t),()=>{const e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}));M(this,"publish",t=>{this.subscribers.forEach(e=>e(t))});M(this,"addToast",t=>{this.publish(t),this.toasts=[...this.toasts,t]});M(this,"create",t=>{var r;const{message:e,...n}=t,i=typeof(t==null?void 0:t.id)=="number"||t.id&&((r=t.id)==null?void 0:r.length)>0?t.id:ge++;return this.toasts.find(o=>o.id===i)?this.toasts=this.toasts.map(o=>o.id===i?(this.publish({...o,...t,id:i,title:e}),{...o,...t,id:i,title:e}):o):this.addToast({title:e,...n,id:i}),i});M(this,"dismiss",t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t));M(this,"message",(t,e)=>this.create({...e,message:t}));M(this,"error",(t,e)=>this.create({...e,message:t,type:"error"}));M(this,"success",(t,e)=>this.create({...e,type:"success",message:t}));M(this,"info",(t,e)=>this.create({...e,type:"info",message:t}));M(this,"warning",(t,e)=>this.create({...e,type:"warning",message:t}));M(this,"promise",(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading}));const i=t instanceof Promise?t:t();let a=n!==void 0;return i.then(r=>{if(r&&typeof r.ok=="boolean"&&!r.ok){a=!1;const o=typeof e.error=="function"?e.error(`HTTP error! status: ${r.status}`):e.error;this.create({id:n,type:"error",message:o})}else if(e.success!==void 0){a=!1;const o=typeof e.success=="function"?e.success(r):e.success;this.create({id:n,type:"success",message:o})}}).catch(r=>{if(e.error!==void 0){a=!1;const o=typeof e.error=="function"?e.error(r):e.error;this.create({id:n,type:"error",message:o})}}).finally(()=>{var r;a&&(this.dismiss(n),n=void 0),(r=e.finally)==null||r.call(e)}),n});M(this,"loading",(t,e)=>this.create({...e,type:"loading",message:t}));M(this,"custom",(t,e)=>{const n=(e==null?void 0:e.id)||ge++;return this.publish({jsx:t(n),id:n,...e}),n});this.subscribers=[],this.toasts=[]}},Q=new Rr;function Dr(t,e){const n=(e==null?void 0:e.id)||ge++;return Q.addToast({title:t,...e,id:n}),n}var Lr=Dr,Fe=Object.assign(Lr,{success:Q.success,info:Q.info,warning:Q.warning,error:Q.error,custom:Q.custom,message:Q.message,promise:Q.promise,dismiss:Q.dismiss,loading:Q.loading});function Br(){const[t,e]=F(!1);return At(()=>{const n=()=>{e(document.hidden)};document.addEventListener("visibilitychange",n),ft(()=>{window.removeEventListener("visibilitychange",n)})}),t}var Ur=3,Fr="32px",Mr=4e3,Hr=356,Sn=14,zr=20,Wr=200;function bt(...t){return t.filter(Boolean).join(" ")}var Yr=t=>{const[e,n]=F(!1),[i,a]=F(!1),[r,o]=F(!1),[s,g]=F(!1),[u,l]=F(0),[c,m]=F(0);let f;const _=()=>t.index===0,h=()=>t.index+1<=t.visibleToasts,b=()=>t.toast.type,j=()=>t.toast.class||"",w=()=>t.toast.descriptionClass||"",x=Ze({gap:Sn},t),y=()=>t.heights.findIndex(S=>S.toastId===t.toast.id)||0,p=()=>t.toast.duration||t.duration||Mr;let E=0,O=0;const[Y,N]=F(null),Z=()=>t.position.split("-"),k=()=>t.heights.reduce((S,U,d)=>d>=y()?S:S+U.height,0),z=Br(),T=()=>t.toast.invert||t.invert,st=()=>b()==="loading",nt=()=>y()*x.gap+k();function G(){var S;return(S=t.icons)!=null&&S.loading?(()=>{var U=br();return R(U,()=>t.icons.loading),X(()=>C(U,"data-visible",b()==="loading")),U})():q(kr,{get visible(){return b()==="loading"}})}At(()=>{n(!0)}),At(()=>{const S=f,U=S.style.height;S.style.height="auto";const d=S.getBoundingClientRect().height;S.style.height=U,m(d),rt(()=>{t.setHeights(v=>v.find(I=>I.toastId===t.toast.id)?v.map(I=>I.toastId===t.toast.id?{...I,height:d}:I):[{toastId:t.toast.id,height:d,position:t.toast.position},...v])})});const K=()=>{a(!0),l(nt()),t.setHeights(S=>S.filter(U=>U.toastId!==t.toast.id)),setTimeout(()=>{t.removeToast(t.toast)},Wr)};let ht=p();return rt(Et(()=>[t.expanded,t.interacting,t.toast,p(),t.toast.promise,b(),t.pauseWhenPageIsHidden,z()],([S,U,d,v,A,I,P,L])=>{if(A&&I==="loading"||v===Number.POSITIVE_INFINITY)return;let W;S||U||P&&L?(()=>{if(O<E){const ct=new Date().getTime()-E;ht=ht-ct}O=new Date().getTime()})():(()=>{E=new Date().getTime(),W=setTimeout(()=>{var ct;(ct=d.onAutoClose)==null||ct.call(d,d),K()},ht)})(),ft(()=>{clearTimeout(W)})})),rt(Et(()=>t.toast.id,S=>{const U=f;if(U){const d=U.getBoundingClientRect().height;m(d),t.setHeights(v=>[{toastId:S,height:d,position:t.toast.position},...v]),ft(()=>{t.setHeights(v=>v.filter(A=>A.toastId!==S))})}})),rt(Et(()=>t.toast.delete,S=>{S&&K()})),(()=>{var S=yr();S.$$pointermove=d=>{if(!Y())return;const v=d.clientY-Y().y,A=d.clientX-Y().x,P=(Z()[0]==="top"?Math.min:Math.max)(0,v),L=d.pointerType==="touch"?10:2;Math.abs(P)>L?f==null||f.style.setProperty("--swipe-amount",`${v}px`):Math.abs(A)>L&&N(null)},S.$$pointerup=()=>{var v,A;if(s())return;N(null);const d=Number((f==null?void 0:f.style.getPropertyValue("--swipe-amount").replace("px",""))||0);if(Math.abs(d)>=zr){l(nt()),(A=(v=t.toast).onDismiss)==null||A.call(v,t.toast),K(),g(!0);return}f==null||f.style.setProperty("--swipe-amount","0px"),o(!1)},S.$$pointerdown=d=>{st()||(l(nt()),d.target.setPointerCapture(d.pointerId),d.target.tagName!=="BUTTON"&&(o(!0),N({x:d.clientX,y:d.clientY})))};var U=f;return typeof U=="function"?ue(U,S):f=S,R(S,q(ut,{get when(){return t.closeButton&&!t.toast.jsx},get children(){var d=wr();return zn(d,"click",st()?void 0:()=>{var v,A;K(),(A=(v=t.toast).onDismiss)==null||A.call(v,t.toast)}),X(v=>{var P,L,W;var A=st(),I=bt((P=t.classes)==null?void 0:P.closeButton,(W=(L=t.toast)==null?void 0:L.classes)==null?void 0:W.closeButton);return A!==v.e&&C(d,"data-disabled",v.e=A),I!==v.t&&lt(d,v.t=I),v},{e:void 0,t:void 0}),d}}),null),R(S,q(ut,{get when(){return t.toast.jsx||t.toast.title instanceof Element},get fallback(){return[q(ut,{get when(){return b()||t.toast.icon||t.toast.promise},get children(){var d=_r();return R(d,(()=>{var v=ae(()=>!!(t.toast.promise||t.toast.type==="loading"&&!t.toast.icon));return()=>v()?t.toast.icon||G():null})(),null),R(d,(()=>{var v=ae(()=>t.toast.type!=="loading");return()=>{var A;return v()?t.toast.icon||((A=t.icons)==null?void 0:A[b()])||$r(b())():null}})(),null),d}}),(()=>{var d=vr(),v=d.firstChild;return R(v,()=>t.toast.title),R(d,q(ut,{get when(){return t.toast.description},get children(){var A=jr();return R(A,()=>t.toast.description),X(()=>{var I,P,L;return lt(A,bt(t.descriptionClass,w(),(I=t.classes)==null?void 0:I.description,(L=(P=t.toast)==null?void 0:P.classes)==null?void 0:L.description))}),A}}),null),X(()=>{var A,I,P;return lt(v,bt((A=t.classes)==null?void 0:A.title,(P=(I=t.toast)==null?void 0:I.classes)==null?void 0:P.title))}),d})(),q(ut,{get when(){return t.toast.cancel},get children(){var d=Sr();return d.$$click=()=>{var v;K(),(v=t.toast.cancel)!=null&&v.onClick&&t.toast.cancel.onClick()},R(d,()=>t.toast.cancel.label),X(v=>{var P,L,W;var A=t.toast.cancelButtonStyle||t.cancelButtonStyle,I=bt((P=t.classes)==null?void 0:P.cancelButton,(W=(L=t.toast)==null?void 0:L.classes)==null?void 0:W.cancelButton);return v.e=Lt(d,A,v.e),I!==v.t&&lt(d,v.t=I),v},{e:void 0,t:void 0}),d}}),q(ut,{get when(){return t.toast.action},get children(){var d=xr();return d.$$click=v=>{var A;(A=t.toast.action)==null||A.onClick(v),!v.defaultPrevented&&K()},R(d,()=>t.toast.action.label),X(v=>{var P,L,W;var A=t.toast.actionButtonStyle||t.actionButtonStyle,I=bt((P=t.classes)==null?void 0:P.actionButton,(W=(L=t.toast)==null?void 0:L.classes)==null?void 0:W.actionButton);return v.e=Lt(d,A,v.e),I!==v.t&&lt(d,v.t=I),v},{e:void 0,t:void 0}),d}})]},get children(){return t.toast.jsx||t.toast.title}}),null),X(d=>{var Se,xe,Ee,Ae,Te,Ce,ke;var v=t.toast.important?"assertive":"polite",A=bt(t.class,j(),(Se=t.classes)==null?void 0:Se.toast,(Ee=(xe=t.toast)==null?void 0:xe.classes)==null?void 0:Ee.toast,(Ae=t.classes)==null?void 0:Ae.default,(Te=t.classes)==null?void 0:Te[b()],(ke=(Ce=t.toast)==null?void 0:Ce.classes)==null?void 0:ke[b()]),I=!(t.toast.jsx||t.toast.unstyled||t.unstyled),P=e(),L=!!t.toast.promise,W=i(),Gt=h(),Qt=Z()[0],ct=Z()[1],pe=t.index,be=_(),we=r(),ye=b(),_e=T(),je=s(),ve=!!(t.expanded||t.expandByDefault&&e()),xn={"--index":t.index,"--toasts-before":t.index,"--z-index":t.toasts.length-t.index,"--offset":`${i()?u():nt()}px`,"--initial-height":t.expandByDefault?"auto":`${c()}px`,...t.style,...t.toast.style};return v!==d.e&&C(S,"aria-live",d.e=v),A!==d.t&&lt(S,d.t=A),I!==d.a&&C(S,"data-styled",d.a=I),P!==d.o&&C(S,"data-mounted",d.o=P),L!==d.i&&C(S,"data-promise",d.i=L),W!==d.n&&C(S,"data-removed",d.n=W),Gt!==d.s&&C(S,"data-visible",d.s=Gt),Qt!==d.h&&C(S,"data-y-position",d.h=Qt),ct!==d.r&&C(S,"data-x-position",d.r=ct),pe!==d.d&&C(S,"data-index",d.d=pe),be!==d.l&&C(S,"data-front",d.l=be),we!==d.u&&C(S,"data-swiping",d.u=we),ye!==d.c&&C(S,"data-type",d.c=ye),_e!==d.w&&C(S,"data-invert",d.w=_e),je!==d.m&&C(S,"data-swipe-out",d.m=je),ve!==d.f&&C(S,"data-expanded",d.f=ve),d.y=Lt(S,xn,d.y),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0}),S})()};function Me(){if(typeof window>"u"||typeof document>"u")return"ltr";const t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var Kr=t=>{const e=Ze({position:"bottom-right",hotkey:["altKey","KeyT"],theme:"light",visibleToasts:Ur,dir:Me()},t),[n,i]=gr({toasts:[]}),a=()=>Array.from(new Set([e.position].concat(n.toasts.filter(y=>y.position).map(y=>y.position)))),[r,o]=F([]),[s,g]=F(!1),[u,l]=F(!1);let c;const m=()=>e.hotkey.join("+").replace(/Key/g,"").replace(/Digit/g,""),[f,_]=F(null),[h,b]=F(!1),[j,w]=F(e.theme!=="system"?e.theme:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),x=y=>i("toasts",p=>p.filter(({id:E})=>E!==y.id));return At(()=>{const y=Q.subscribe(p=>{if(p.dismiss){i("toasts",Ue(O=>{O.forEach(Y=>{Y.id===p.id&&(Y.delete=!0)})}));return}const E=n.toasts.findIndex(O=>O.id===p.id);if(E!==-1){i("toasts",[E],cr(p));return}i("toasts",Ue(O=>{O.unshift(p)}))});ft(()=>{y()})}),rt(Et(()=>e.theme,y=>{if(y!=="system"){w(y);return}typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:p})=>{w(p?"dark":"light")})})),rt(()=>{n.toasts.length<=1&&g(!1)}),At(()=>{const y=p=>{e.hotkey.every(O=>p[O]||p.code===O)&&(g(!0),c==null||c.focus()),p.code==="Escape"&&(document.activeElement===c||c!=null&&c.contains(document.activeElement))&&g(!1)};document.addEventListener("keydown",y),ft(()=>{document.removeEventListener("keydown",y)})}),rt(Et(()=>c,y=>{y&&ft(()=>{var p;f()&&((p=f())==null||p.focus({preventScroll:!0}),_(null),b(!1))})})),q(ut,{get when(){return n.toasts.length>0},get children(){var y=Er();return R(y,q(re,{get each(){return a()},children:(p,E)=>{const[O,Y]=p.split("-");return(()=>{var N=Ar();N.$$pointerup=()=>l(!1),N.$$pointerdown=()=>{l(!0)},N.addEventListener("mouseleave",()=>{u()||g(!1)}),N.$$mousemove=()=>g(!0),N.addEventListener("mouseenter",()=>g(!0)),N.addEventListener("focus",k=>{h()||(b(!0),_(k.relatedTarget))}),N.addEventListener("blur",k=>{var z;h()&&!k.currentTarget.contains(k.relatedTarget)&&(b(!1),f()&&((z=f())==null||z.focus({preventScroll:!0}),_(null)))});var Z=c;return typeof Z=="function"?ue(Z,N):c=N,C(N,"data-y-position",O),C(N,"data-x-position",Y),R(N,q(re,{get each(){return n.toasts.filter(k=>!k.position&&E()===0||k.position===p)},children:(k,z)=>q(Yr,{get index(){return z()},get icons(){return e.icons},toast:k,get duration(){var T;return((T=e.toastOptions)==null?void 0:T.duration)??t.duration},get class(){var T;return(T=e.toastOptions)==null?void 0:T.class},get classes(){var T;return(T=e.toastOptions)==null?void 0:T.classes},get cancelButtonStyle(){var T;return(T=e.toastOptions)==null?void 0:T.cancelButtonStyle},get actionButtonStyle(){var T;return(T=e.toastOptions)==null?void 0:T.actionButtonStyle},get descriptionClass(){var T;return(T=e.toastOptions)==null?void 0:T.descriptionClass},get invert(){return!!e.invert},get visibleToasts(){return e.visibleToasts},get closeButton(){return!!e.closeButton},get interacting(){return u()},get position(){return e.position},get style(){var T;return(T=e.toastOptions)==null?void 0:T.style},get unstyled(){var T;return(T=e.toastOptions)==null?void 0:T.unstyled},removeToast:x,get toasts(){return n.toasts},get heights(){return r()},setHeights:o,get expandByDefault(){return!!e.expand},get gap(){return e.gap},get expanded(){return s()},get pauseWhenPageIsHidden(){return e.pauseWhenPageIsHidden}})})),X(k=>{var K;var z=e.dir==="auto"?Me():e.dir,T=e.class,st=j(),nt=e.richColors,G={"--front-toast-height":`${(K=r()[0])==null?void 0:K.height}px`,"--offset":typeof e.offset=="number"?`${e.offset}px`:e.offset||Fr,"--width":`${Hr}px`,"--gap":`${Sn}px`,...e.style};return z!==k.e&&C(N,"dir",k.e=z),T!==k.t&&lt(N,k.t=T),st!==k.a&&C(N,"data-theme",k.a=st),nt!==k.o&&C(N,"data-rich-colors",k.o=nt),k.i=Lt(N,G,k.i),k},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),N})()}})),X(()=>C(y,"aria-label",`Notifications ${m()}`)),y}})};/*!
 * Original code by Emil Kowalski
 * MIT Licensed, Copyright 2023 Emil Kowalski, see https://github.com/emilkowalski/sonner/blob/main/LICENSE.md for details
 *
 * Credits:
 * https://github.com/emilkowalski/sonner/blob/main/src/index.tsx
 */Ge(["pointerdown","pointerup","pointermove","click","mousemove"]);const Vr=(t,e)=>{const n=function(){const r=localStorage.getItem(t);return r!=null&&r!=="undefined"?JSON.parse(r):e}(),[i,a]=F(n);return rt(()=>{localStorage.setItem(t,JSON.stringify(i))},[i]),[i,a]};var Xr=D('<div class="flex flex-col gap-4 pb-10"><div class="p-4 flex flex-col md:items-center "><div class="flex flex-col border border-b-0 bg-white w-fit"><div class="border-b justify-between p-2 text-lg font-bold flex"><h1>Galgame世代<span class=remove> - 点击选择你玩过的Galgame</span><span class="ml-2 text-zinc-400 font-medium">anime-sedai.egoist.dev</span></h1><span class="shrink-0 whitespace-nowrap">我玩过 <!>/<!> 部动画</span></div></div></div><div class="flex gap-2 justify-center"><button type=button class="border rounded-md px-4 py-2 inline-flex">全选</button><button type=button class="border rounded-md px-4 py-2 inline-flex">复制图片</button><button type=button class="border rounded-md px-4 py-2 inline-flex">下载图片</button></div><div class="mt-2 text-center">历年关注最多的Galgame和部分RPG，数据来自 bgm.tv，<a href=https://github.com/fallenwood/galgame-sedai target=_blank class=underline>查看代码'),qr=D('<div class="flex border-b"><div class="bg-red-500 shrink-0 text-white flex items-center font-bold justify-center p-1 size-16 md:size-20 border-black"></div><div class="flex shrink-0">'),Zr=D('<button><span class="leading-tight w-full line-clamp-3"><img class="size-10 md:size-12 ml-auto mr-auto"></span><span class="leading-tight w-full line-clamp-3">'),Gr=D('<button type=button class="border rounded-md px-4 py-2 inline-flex">清除');const Qr=()=>{const[t,e]=Vr("selectedAnime",[]);let n;const i=async()=>(console.log("wrapper",n),n?await rr(n,{scale:2,filter(s){return!(s instanceof HTMLElement&&s.classList.contains("remove"))}}):void 0),a=async()=>{const o=await i();console.log(o),o&&await navigator.clipboard.write([new ClipboardItem({[o.type]:o})])},r=async()=>{if(!n)return;const o=await i();if(!o)return;const s=URL.createObjectURL(o),g=document.createElement("a");g.href=s,g.download="galgame-sedai.png",g.click(),URL.revokeObjectURL(s)};return(()=>{var o=Xr(),s=o.firstChild,g=s.firstChild,u=g.firstChild,l=u.firstChild,c=l.nextSibling,m=c.firstChild,f=m.nextSibling,_=f.nextSibling,h=_.nextSibling;h.nextSibling;var b=s.nextSibling,j=b.firstChild,w=j.nextSibling,x=w.nextSibling,y=n;return typeof y=="function"?ue(y,g):n=g,R(c,()=>t.length,f),R(c,()=>Object.values(Rt).flatMap(p=>p.map(E=>E.title).slice(0,12)).length,h),R(g,()=>Object.keys(Rt).map(p=>{const E=Rt[p]||[];return(()=>{var O=qr(),Y=O.firstChild,N=Y.nextSibling;return R(Y,p),R(N,()=>E.slice(0,12).map(Z=>{const k=t().includes(Z.title);return(()=>{var z=Zr(),T=z.firstChild,st=T.firstChild,nt=T.nextSibling;return z.$$click=()=>{e(G=>k?G.filter(K=>K!==Z.title):[...G,Z.title])},lt(z,`size-16 md:size-20 border-l break-all text-center shrink-0 inline-flex flex-col items-center p-1 overflow-hidden justify-center cursor-pointer text-sm  ${k?"bg-green-500":"hover:bg-zinc-100"}`),R(nt,()=>Z.title),X(G=>{var K=Z.title,ht=`/images/${Z.img}`;return K!==G.e&&C(z,"title",G.e=K),ht!==G.t&&C(st,"src",G.t=ht),G},{e:void 0,t:void 0}),z})()})),O})()}),null),j.$$click=()=>{e(Object.values(Rt).flatMap(p=>p.map(E=>E.title).slice(0,12)))},R(b,(()=>{var p=ae(()=>t.length>0);return()=>p()&&(()=>{var E=Gr();return E.$$click=()=>{e([])},E})()})(),w),w.$$click=()=>{console.log("copy image"),Fe.promise(a(),{success:"复制成功",loading:"复制中",error(p){return`复制失败: ${p instanceof Error?p.message:"未知错误"}`}})},x.$$click=()=>{Fe.promise(r(),{success:"下载成功",loading:"下载中",error(p){return`下载失败: ${p instanceof Error?p.message:"未知错误"}`}})},o})()};Ge(["click"]);const Jr=document.getElementById("root");Hn(()=>[q(Qr,{}),q(Kr,{})],Jr);
