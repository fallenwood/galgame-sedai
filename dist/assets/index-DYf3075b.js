var En=Object.defineProperty;var An=(t,e,n)=>e in t?En(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var U=(t,e,n)=>An(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Tn=!1,Cn=(t,e)=>t===e,Q=Symbol("solid-proxy"),In=typeof Proxy=="function",ne=Symbol("solid-track"),Bt={equals:Cn};let We=Ge;const gt=1,Mt=2,He={owned:null,cleanups:null,context:null,owner:null};var B=null;let Qt=null,kn=null,P=null,z=null,at=null,Gt=0;function Dt(t,e){const n=P,i=B,a=t.length===0,r=e===void 0?i:e,o=a?He:{owned:null,cleanups:null,context:r?r.context:null,owner:r},s=a?t:()=>t(()=>ot(()=>Tt(o)));B=o,P=null;try{return St(s,!0)}finally{P=n,B=i}}function F(t,e){e=e?Object.assign({},Bt,e):Bt;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=a=>(typeof a=="function"&&(a=a(n.value)),Ye(n,a));return[Ve.bind(n),i]}function K(t,e,n){const i=ce(t,e,!1,gt);Ot(i)}function rt(t,e,n){We=Pn;const i=ce(t,e,!1,gt);i.user=!0,at?at.push(i):Ot(i)}function yt(t,e,n){n=n?Object.assign({},Bt,n):Bt;const i=ce(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Ot(i),Ve.bind(i)}function Nn(t){return St(t,!1)}function ot(t){if(P===null)return t();const e=P;P=null;try{return t()}finally{P=e}}function Et(t,e,n){const i=Array.isArray(t);let a;return r=>{let o;if(i){o=Array(t.length);for(let g=0;g<t.length;g++)o[g]=t[g]()}else o=t();const s=ot(()=>e(o,a,r));return a=o,s}}function At(t){rt(()=>ot(t))}function ft(t){return B===null||(B.cleanups===null?B.cleanups=[t]:B.cleanups.push(t)),t}function ie(){return P}function Ve(){if(this.sources&&this.state)if(this.state===gt)Ot(this);else{const t=z;z=null,St(()=>Ut(this),!1),z=t}if(P){const t=this.observers?this.observers.length:0;P.sources?(P.sources.push(this),P.sourceSlots.push(t)):(P.sources=[this],P.sourceSlots=[t]),this.observers?(this.observers.push(P),this.observerSlots.push(P.sources.length-1)):(this.observers=[P],this.observerSlots=[P.sources.length-1])}return this.value}function Ye(t,e,n){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&St(()=>{for(let a=0;a<t.observers.length;a+=1){const r=t.observers[a],o=Qt&&Qt.running;o&&Qt.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?z.push(r):at.push(r),r.observers&&Ke(r)),o||(r.state=gt)}if(z.length>1e6)throw z=[],new Error},!1)),e}function Ot(t){if(!t.fn)return;Tt(t);const e=Gt;On(t,t.value,e)}function On(t,e,n){let i;const a=B,r=P;P=B=t;try{i=t.fn(e)}catch(o){return t.pure&&(t.state=gt,t.owned&&t.owned.forEach(Tt),t.owned=null),t.updatedAt=n+1,qe(o)}finally{P=r,B=a}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Ye(t,i):t.value=i,t.updatedAt=n)}function ce(t,e,n,i=gt,a){const r={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:B,context:B?B.context:null,pure:n};return B===null||B!==He&&(B.owned?B.owned.push(r):B.owned=[r]),r}function Ft(t){if(t.state===0)return;if(t.state===Mt)return Ut(t);if(t.suspense&&ot(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Gt);)t.state&&e.push(t);for(let n=e.length-1;n>=0;n--)if(t=e[n],t.state===gt)Ot(t);else if(t.state===Mt){const i=z;z=null,St(()=>Ut(t,e[0]),!1),z=i}}function St(t,e){if(z)return t();let n=!1;e||(z=[]),at?n=!0:at=[],Gt++;try{const i=t();return Rn(n),i}catch(i){n||(at=null),z=null,qe(i)}}function Rn(t){if(z&&(Ge(z),z=null),t)return;const e=at;at=null,e.length&&St(()=>We(e),!1)}function Ge(t){for(let e=0;e<t.length;e++)Ft(t[e])}function Pn(t){let e,n=0;for(e=0;e<t.length;e++){const i=t[e];i.user?t[n++]=i:Ft(i)}for(e=0;e<n;e++)Ft(t[e])}function Ut(t,e){t.state=0;for(let n=0;n<t.sources.length;n+=1){const i=t.sources[n];if(i.sources){const a=i.state;a===gt?i!==e&&(!i.updatedAt||i.updatedAt<Gt)&&Ft(i):a===Mt&&Ut(i,e)}}}function Ke(t){for(let e=0;e<t.observers.length;e+=1){const n=t.observers[e];n.state||(n.state=Mt,n.pure?z.push(n):at.push(n),n.observers&&Ke(n))}}function Tt(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),a=n.observers;if(a&&a.length){const r=a.pop(),o=n.observerSlots.pop();i<a.length&&(r.sourceSlots[o]=i,a[i]=r,n.observerSlots[i]=o)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)Tt(t.tOwned[e]);delete t.tOwned}if(t.owned){for(e=t.owned.length-1;e>=0;e--)Tt(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function $n(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function qe(t,e=B){throw $n(t)}const Dn=Symbol("fallback");function ke(t){for(let e=0;e<t.length;e++)t[e]()}function Ln(t,e,n={}){let i=[],a=[],r=[],o=0,s=e.length>1?[]:null;return ft(()=>ke(r)),()=>{let g=t()||[],u=g.length,l,c;return g[ne],ot(()=>{let f,_,h,b,j,w,x,y,p;if(u===0)o!==0&&(ke(r),r=[],i=[],a=[],o=0,s&&(s=[])),n.fallback&&(i=[Dn],a[0]=Dt(E=>(r[0]=E,n.fallback())),o=1);else if(o===0){for(a=new Array(u),c=0;c<u;c++)i[c]=g[c],a[c]=Dt(m);o=u}else{for(h=new Array(u),b=new Array(u),s&&(j=new Array(u)),w=0,x=Math.min(o,u);w<x&&i[w]===g[w];w++);for(x=o-1,y=u-1;x>=w&&y>=w&&i[x]===g[y];x--,y--)h[y]=a[x],b[y]=r[x],s&&(j[y]=s[x]);for(f=new Map,_=new Array(y+1),c=y;c>=w;c--)p=g[c],l=f.get(p),_[c]=l===void 0?-1:l,f.set(p,c);for(l=w;l<=x;l++)p=i[l],c=f.get(p),c!==void 0&&c!==-1?(h[c]=a[l],b[c]=r[l],s&&(j[c]=s[l]),c=_[c],f.set(p,c)):r[l]();for(c=w;c<u;c++)c in h?(a[c]=h[c],r[c]=b[c],s&&(s[c]=j[c],s[c](c))):a[c]=Dt(m);a=a.slice(0,o=u),i=g.slice(0)}return a});function m(f){if(r[c]=f,s){const[_,h]=F(c);return s[c]=h,e(g[c],_)}return e(g[c])}}}function q(t,e){return ot(()=>t(e||{}))}function Pt(){return!0}const Bn={get(t,e,n){return e===Q?n:t.get(e)},has(t,e){return e===Q?!0:t.has(e)},set:Pt,deleteProperty:Pt,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:Pt,deleteProperty:Pt}},ownKeys(t){return t.keys()}};function te(t){return(t=typeof t=="function"?t():t)?t:{}}function Mn(){for(let t=0,e=this.length;t<e;++t){const n=this[t]();if(n!==void 0)return n}}function Xe(...t){let e=!1;for(let o=0;o<t.length;o++){const s=t[o];e=e||!!s&&Q in s,t[o]=typeof s=="function"?(e=!0,yt(s)):s}if(In&&e)return new Proxy({get(o){for(let s=t.length-1;s>=0;s--){const g=te(t[s])[o];if(g!==void 0)return g}},has(o){for(let s=t.length-1;s>=0;s--)if(o in te(t[s]))return!0;return!1},keys(){const o=[];for(let s=0;s<t.length;s++)o.push(...Object.keys(te(t[s])));return[...new Set(o)]}},Bn);const n={},i=Object.create(null);for(let o=t.length-1;o>=0;o--){const s=t[o];if(!s)continue;const g=Object.getOwnPropertyNames(s);for(let u=g.length-1;u>=0;u--){const l=g[u];if(l==="__proto__"||l==="constructor")continue;const c=Object.getOwnPropertyDescriptor(s,l);if(!i[l])i[l]=c.get?{enumerable:!0,configurable:!0,get:Mn.bind(n[l]=[c.get.bind(s)])}:c.value!==void 0?c:void 0;else{const m=n[l];m&&(c.get?m.push(c.get.bind(s)):c.value!==void 0&&m.push(()=>c.value))}}}const a={},r=Object.keys(i);for(let o=r.length-1;o>=0;o--){const s=r[o],g=i[s];g&&g.get?Object.defineProperty(a,s,g):a[s]=g?g.value:void 0}return a}const Fn=t=>`Stale read from <${t}>.`;function re(t){const e="fallback"in t&&{fallback:()=>t.fallback};return yt(Ln(()=>t.each,t.children,e||void 0))}function ut(t){const e=t.keyed,n=yt(()=>t.when,void 0,void 0),i=e?n:yt(n,void 0,{equals:(a,r)=>!a==!r});return yt(()=>{const a=i();if(a){const r=t.children;return typeof r=="function"&&r.length>0?ot(()=>r(e?a:()=>{if(!ot(i))throw Fn("Show");return n()})):r}return t.fallback},void 0,void 0)}const ae=t=>yt(()=>t());function Un(t,e,n){let i=n.length,a=e.length,r=i,o=0,s=0,g=e[a-1].nextSibling,u=null;for(;o<a||s<r;){if(e[o]===n[s]){o++,s++;continue}for(;e[a-1]===n[r-1];)a--,r--;if(a===o){const l=r<i?s?n[s-1].nextSibling:n[r-s]:g;for(;s<r;)t.insertBefore(n[s++],l)}else if(r===s)for(;o<a;)(!u||!u.has(e[o]))&&e[o].remove(),o++;else if(e[o]===n[r-1]&&n[s]===e[a-1]){const l=e[--a].nextSibling;t.insertBefore(n[s++],e[o++].nextSibling),t.insertBefore(n[--r],l),e[a]=n[r]}else{if(!u){u=new Map;let c=s;for(;c<r;)u.set(n[c],c++)}const l=u.get(e[o]);if(l!=null)if(s<l&&l<r){let c=o,m=1,f;for(;++c<a&&c<r&&!((f=u.get(e[c]))==null||f!==l+m);)m++;if(m>l-s){const _=e[o];for(;s<l;)t.insertBefore(n[s++],_)}else t.replaceChild(n[s++],e[o++])}else o++;else e[o++].remove()}}}const Ne="_$DX_DELEGATE";function zn(t,e,n,i={}){let a;return Dt(r=>{a=r,e===document?t():$(e,t(),e.firstChild?null:void 0,n)},i.owner),()=>{a(),e.textContent=""}}function D(t,e,n,i){let a;const r=()=>{const s=document.createElement("template");return s.innerHTML=t,s.content.firstChild},o=()=>(a||(a=r())).cloneNode(!0);return o.cloneNode=o,o}function Ze(t,e=window.document){const n=e[Ne]||(e[Ne]=new Set);for(let i=0,a=t.length;i<a;i++){const r=t[i];n.has(r)||(n.add(r),e.addEventListener(r,Hn))}}function C(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function lt(t,e){e==null?t.removeAttribute("class"):t.className=e}function Wn(t,e,n,i){Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n}function Lt(t,e,n){if(!e)return n?C(t,"style"):e;const i=t.style;if(typeof e=="string")return i.cssText=e;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),e||(e={});let a,r;for(r in n)e[r]==null&&i.removeProperty(r),delete n[r];for(r in e)a=e[r],a!==n[r]&&(i.setProperty(r,a),n[r]=a);return n}function ue(t,e,n){return ot(()=>t(e,n))}function $(t,e,n,i){if(n!==void 0&&!i&&(i=[]),typeof e!="function")return zt(t,e,i,n);K(a=>zt(t,e(),a,n),i)}function Hn(t){let e=t.target;const n=`$$${t.type}`,i=t.target,a=t.currentTarget,r=g=>Object.defineProperty(t,"target",{configurable:!0,value:g}),o=()=>{const g=e[n];if(g&&!e.disabled){const u=e[`${n}Data`];if(u!==void 0?g.call(e,u,t):g.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&r(e.host),!0},s=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),t.composedPath){const g=t.composedPath();r(g[0]);for(let u=0;u<g.length-2&&(e=g[u],!!o());u++){if(e._$host){e=e._$host,s();break}if(e.parentNode===a)break}}else s();r(i)}function zt(t,e,n,i,a){for(;typeof n=="function";)n=n();if(e===n)return n;const r=typeof e,o=i!==void 0;if(t=o&&n[0]&&n[0].parentNode||t,r==="string"||r==="number"){if(r==="number"&&(e=e.toString(),e===n))return n;if(o){let s=n[0];s&&s.nodeType===3?s.data!==e&&(s.data=e):s=document.createTextNode(e),n=pt(t,n,i,s)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||r==="boolean")n=pt(t,n,i);else{if(r==="function")return K(()=>{let s=e();for(;typeof s=="function";)s=s();n=zt(t,s,n,i)}),()=>n;if(Array.isArray(e)){const s=[],g=n&&Array.isArray(n);if(oe(s,e,n,a))return K(()=>n=zt(t,s,n,i,!0)),()=>n;if(s.length===0){if(n=pt(t,n,i),o)return n}else g?n.length===0?Oe(t,s,i):Un(t,n,s):(n&&pt(t),Oe(t,s));n=s}else if(e.nodeType){if(Array.isArray(n)){if(o)return n=pt(t,n,i,e);pt(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function oe(t,e,n,i){let a=!1;for(let r=0,o=e.length;r<o;r++){let s=e[r],g=n&&n[t.length],u;if(!(s==null||s===!0||s===!1))if((u=typeof s)=="object"&&s.nodeType)t.push(s);else if(Array.isArray(s))a=oe(t,s,g)||a;else if(u==="function")if(i){for(;typeof s=="function";)s=s();a=oe(t,Array.isArray(s)?s:[s],Array.isArray(g)?g:[g])||a}else t.push(s),a=!0;else{const l=String(s);g&&g.nodeType===3&&g.data===l?t.push(g):t.push(document.createTextNode(l))}}return a}function Oe(t,e,n=null){for(let i=0,a=e.length;i<a;i++)t.insertBefore(e[i],n)}function pt(t,e,n,i){if(n===void 0)return t.textContent="";const a=i||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const s=e[o];if(a!==s){const g=s.parentNode===t;!r&&!o?g?t.replaceChild(a,s):t.insertBefore(a,n):g&&s.remove()}else r=!0}}else t.insertBefore(a,n);return[a]}const $t={2004:[{title:"CLANNAD",rating:8.9,img:"13_tQxwM.jpg"},{title:"Remember11：无限轮回的时光",rating:8.9,img:"1127_eZ7Te.jpg"},{title:"家族计划~再开~",rating:8.7,img:"101434_RQZCm.jpg"},{title:"Forest",rating:8.6,img:"5395_swS3d.jpg"},{title:"交响乐之雨",rating:8.5,img:"1143_Z54Z6.jpg"},{title:"Fate/stay night",rating:8.3,img:"935_dOCPc.jpg"},{title:"寒蝉鸣泣之时",rating:8.2,img:"17035_n33xd.jpg"},{title:"乐园～一如既往的我。的存在～",rating:8.1,img:"13966_R48FP.jpg"},{title:"星之梦",rating:8,img:"859_2s5MH.jpg"},{title:"DUEL SAVIOR",rating:7.9,img:"1115_uwUJt.jpg"},{title:"春天的足音",rating:7.7,img:"1063_JMoM5.jpg"},{title:"秋之回忆：从今以后",rating:7.7,img:"1735_peMgL.jpg"}],2005:[{title:"最后的现在",rating:8.7,img:"7978_hc6iN.jpg"},{title:"水仙",rating:8.5,img:"1167_Yymi1.jpg"},{title:"皋月物语",rating:8.3,img:"79183_K3KIk.jpg"},{title:"车轮之国、向日葵的少女",rating:8.1,img:"1124_2tmmT.jpg"},{title:"天鹅之歌",rating:8.1,img:"2722_w40CX.jpg"},{title:"女仆咖啡帕露菲",rating:8,img:"846_xUyQU.jpg"},{title:"樱花结",rating:7.9,img:"8001_dR0M2.jpg"},{title:"妖人",rating:7.6,img:"1042_oON6Q.jpg"},{title:"恋狱～月狂病～",rating:7.5,img:"1129_6uFOz.jpg"},{title:"プリンセスうぃっちぃず",rating:7.6,img:"172496_2J69j.jpg"},{title:"Sanarara",rating:7.5,img:"6233_Tvjt6.jpg"},{title:"梦见之药",rating:7.4,img:"838_TT4X2.jpg"},{title:"尘骸魔京",rating:7.4,img:"2075_GxMrB.jpg"},{title:"GALZOOアイランド",rating:7.4,img:"11171_d6505.jpg"},{title:"智代After ～It's a Wonderful Life～",rating:7.3,img:"3660_Lz7lO.jpg"},{title:"ANGEL TYPE",rating:7.4,img:"1658_F4tIU.jpg"},{title:"月姬格斗 MBAC",rating:7.3,img:"3344_Ur5J5.jpg"},{title:"真·三国无双4 猛将传",rating:7.3,img:"68108_4645v.jpg"},{title:"超执刀：神使之杖",rating:7.3,img:"262_SCx0n.jpg"},{title:"任天狗：吉娃娃与它的朋友",rating:7.3,img:"213_aus.jpg"}],2006:[{title:"Muv-Luv Alternative",rating:8.8,img:"4828_81B8A.jpg"},{title:"寒蝉鸣泣之时解",rating:8.4,img:"80705_6o6qH.jpg"},{title:"战国兰斯",rating:8.3,img:"1795_CgxQU.jpg"},{title:"I/O",rating:8.1,img:"1079_8Do9y.jpg"},{title:"心跳回忆女生版2",rating:8.2,img:"2900_LIbZJ.jpg"},{title:"B.B.ライダー",rating:8.5,img:"254796_p9XYY.jpg"},{title:"青空下的约定",rating:7.8,img:"1174_DNdJr.jpg"},{title:"遥远的时空中3 命运的迷宫",rating:7.9,img:"3939_WV26B.jpg"},{title:"EXTRAVAGANZA ～蟲愛でる少女～",rating:7.6,img:"12592_U7kRq.jpg"},{title:"機神飛翔デモンベイン",rating:7.7,img:"20128_io2fP.jpg"},{title:"悠久之翼-前篇",rating:7.6,img:"1488_zY592.jpg"},{title:"妻管严",rating:7.6,img:"11173_WnV1M.jpg"},{title:"Laughter Land",rating:7.6,img:"11778_3WOhr.jpg"},{title:"公主联盟",rating:7.6,img:"1568_gamoM.jpg"},{title:"无冬之夜2",rating:7.6,img:"759_sJPgn.jpg"},{title:"死魂曲2",rating:7.7,img:"37967_D5v0j.jpg"},{title:"发明工坊2 重现天空之城的荣光",rating:7.6,img:"16698_TMMA6.jpg"},{title:"蔷薇守则",rating:7.6,img:"999_7HobG.jpg"},{title:"Fossette - Cafe au Le Ciel Bleu -",rating:7.5,img:"1459_44x04.jpg"},{title:"雪影",rating:7.5,img:"882_8bGof.jpg"},{title:"遥仰凰华",rating:7.5,img:"1088_RhDue.jpg"},{title:"寒蝉鸣泣之时礼",rating:7.5,img:"96128_oROO1.jpg"},{title:"离开的人们",rating:7.5,img:"114304_6soSy.jpg"}],2007:[{title:"KIRA☆KIRA 煌煌舞台",rating:8.5,img:"2723_RWt07.jpg"},{title:"海猫鸣泣之时",rating:8.4,img:"1020_L3HDr.jpg"},{title:"Little Busters!",rating:8.3,img:"125131_x4hmy.jpg"},{title:"续·杀戮之姜戈—地狱通缉犯—",rating:8.2,img:"20714_4hLmd.jpg"},{title:"水仙2",rating:8.2,img:"1168_aY6d3.jpg"},{title:"向日葵",rating:8,img:"5916_bo8Pp.jpg"},{title:"心之国的爱丽丝 〜Wonderful Wonder World〜",rating:8,img:"4429_OUq75.jpg"},{title:"金色琴弦2",rating:8.1,img:"3695_63RGa.jpg"},{title:"Zwei Worter",rating:7.9,img:"79408_MATTV.jpg"},{title:"车轮之国、悠久的少年少女",rating:7.7,img:"16246_6noo6.jpg"},{title:"桃华月惮",rating:7.7,img:"17653_q0ckK.jpg"},{title:"片羽",rating:7.5,img:"2844_4cctx.jpg"},{title:"世界上最NG的恋爱",rating:7.5,img:"16245_1JIaW.jpg"},{title:"安琪拉之歌",rating:7.6,img:"5958_5zvKL.jpg"},{title:"质量效应",rating:7.5,img:"637_aus.jpg"},{title:"最高指挥官",rating:7.7,img:"4629_50L0n.jpg"},{title:"赫炎的印加诺克 ～何等美好的人们～",rating:7.5,img:"7942_VIOFi.jpg"},{title:"军团要塞2",rating:7.5,img:"6_8ht5C.jpg"},{title:"魔法门之英雄无敌5：东方部落",rating:7.5,img:"2880_fCITJ.jpg"},{title:"聖なるかな -The Spirit of Eternity Sword 2-",rating:7.5,img:"11258_SPqi2.jpg"}],2008:[{title:"428 ～被封锁的涩谷～",rating:8.5,img:"955_WhyX0.jpg"},{title:"悠久之翼-后篇",rating:8.4,img:"1089_HVvHh.jpg"},{title:"战女神ZERO",rating:8.2,img:"926_3jf2F.jpg"},{title:"霞外笼逗留记",rating:8.2,img:"1013_q91A8.jpg"},{title:"甜池",rating:8,img:"1497_63kXG.jpg"},{title:"媚肉之香",rating:7.9,img:"17436_iE83f.jpg"},{title:"G弦上的魔王",rating:7.9,img:"1385_9G6wp.jpg"},{title:"天尽风 ～傀儡阵风帖～",rating:8.3,img:"60192_LnzUT.jpg"},{title:"MYTH",rating:7.7,img:"99132_IiMzW.jpg"},{title:"Garden",rating:7.8,img:"2115_Z6nZB.jpg"},{title:"刻痕Ⅱ -The Origin of the Abyss Crime-",rating:7.7,img:"2181_Gy01m.jpg"},{title:"壳之少女",rating:7.6,img:"1130_x9Zkk.jpg"},{title:"灵刀姬樱 ～樱花之剑与惑龙章～",rating:7.7,img:"81814_0nO2L.jpg"},{title:"スマガ -STAR MINE GIRL-",rating:7.7,img:"7892_K4i4U.jpg"},{title:"粘粘世界",rating:7.6,img:"2397_2YWww.jpg"},{title:"放学后少年",rating:7.6,img:"2254_6TNKm.jpg"},{title:"怒首领蜂 大复活",rating:7.6,img:"9961_v7TME.jpg"},{title:"ウィザーズクライマー",rating:7.8,img:"33138_4jujv.jpg"}],2009:[{title:"命运石之门",rating:8.9,img:"3154_j71Z7.jpg"},{title:'BALDR SKY Dive2 "RECORDARE"',rating:8.8,img:"12098_fF3m3.jpg"},{title:"装甲恶鬼村正",rating:8.6,img:"3243_kA5A1.jpg"},{title:'BALDR SKY Dive1 "LostMemory"',rating:8.5,img:"1457_5RVKR.jpg"},{title:"我们没有翅膀",rating:8.4,img:"7868_RlKwS.jpg"},{title:"认真和我恋爱",rating:7.9,img:"11298_Vq4dV.jpg"},{title:"eden* They were only two, on the planet.",rating:7.9,img:"2288_Y3ow5.jpg"},{title:"圣诞之吻",rating:7.9,img:"13210_4FE22.jpg"},{title:"星空的记忆 -Wish upon a shooting star",rating:7.8,img:"3650_g2zfR.jpg"},{title:"刻痕Ⅲ -The Innocent LunA:Eclipsed SinnerS",rating:7.9,img:"22208_j1iwi.jpg"},{title:"小丑国的爱丽丝～ Wonderful Wonder World ～",rating:7.9,img:"5934_DbbrS.jpg"},{title:"从晴朗的朝色泛起之际开始",rating:7.6,img:"3591_uxglf.jpg"},{title:"らぶでれーしょん！",rating:7.6,img:"16379_0I8Fi.jpg"},{title:"流行之神2 警视厅怪异事件档案",rating:7.6,img:"358_ajp.jpg"},{title:"雀龙门",rating:7.6,img:"10993_SDqw2.jpg"}],2010:[{title:"美好的每一天 ～不连续的存在～",rating:8.8,img:"4639_kDq7d.jpg"},{title:"白色相簿2 序章",rating:8.2,img:"4066_E6YA6.jpg"},{title:"心跳回忆女生版3",rating:8.4,img:"8407_51oq0.jpg"},{title:"第二物语 ～少女之夏与15分钟的记忆～",rating:8.1,img:"7762_PdkyQ.jpg"},{title:"战女神VERITA",rating:8,img:"12119_OSOgV.jpg"},{title:"我们没有翅膀 AfterStory",rating:7.9,img:"7186_Ae1yt.jpg"},{title:"水仙0",rating:7.9,img:"522738_U4kgP.jpg"},{title:"纪念日之国的爱丽丝～ Wonderful Wonder World ～",rating:7.8,img:"5935_8kmKk.jpg"},{title:"DEARDROPS",rating:7.8,img:"14510_LnFyK.jpg"},{title:"金色琴弦 3",rating:7.7,img:"12106_x99yY.jpg"},{title:"暗之部屋",rating:7.7,img:"7870_poQA1.jpg"},{title:"智以泪聚FD-吹向明日彼岸的可视之风-",rating:7.7,img:"10768_XXxkX.jpg"},{title:"追忆的花束献给行将灭亡的世界",rating:7.8,img:"59883_iZ1yi.jpg"},{title:"Humanity",rating:7.8,img:"99399_reoIo.jpg"},{title:"Double Spoiler ～ 东方文花帖",rating:7.6,img:"5752_f7Mp0.jpg"},{title:"尸体派对 血色笼罩 无止境的恐惧",rating:7.6,img:"8728_1w613.jpg"},{title:"图书室的Neversista 「四月的鱼～Poisson d'avril～」",rating:7.8,img:"66433_SlJ1m.jpg"},{title:"妖精大战争 ~ 东方三月精",rating:7.6,img:"7765_GTl37.jpg"},{title:"Clannad: 光芒守护的小镇 下卷",rating:7.6,img:"7970_u9REu.jpg"},{title:"太空引擎",rating:7.8,img:"65124_AAYsv.jpg"},{title:"大神传：小小太阳",rating:7.6,img:"7332_SUUH6.jpg"},{title:"星空的记忆 永恒之心",rating:7.6,img:"3651_fZOdf.jpg"},{title:'BALDR SKY DiveX "DREAM WORLD"',rating:7.6,img:"12099_PmbDp.jpg"}],2011:[{title:"Rewrite",rating:8.6,img:"4022_yF2YV.jpg"},{title:"Ever17 重制版",rating:8.5,img:"38979_jAUh0.jpg"},{title:"秽翼的尤斯蒂娅",rating:8.3,img:"12280_lKDNi.jpg"},{title:"蝶之毒 华之锁",rating:7.8,img:"18203_76Rql.jpg"},{title:"灰色的果实",rating:7.8,img:"10869_J54tt.jpg"},{title:"纯白交响曲 六出飞花",rating:7.7,img:"13218_WoOdo.jpg"},{title:"太陽のプロミア",rating:7.9,img:"14714_7zbw0.jpg"},{title:"神咒神威神楽",rating:7.7,img:"24530_s2zDH.jpg"},{title:"无限炼奸 ~不死舞姬的凌辱轮舞曲~",rating:7.5,img:"22816_H0534.jpg"},{title:"勇者大战魔物娘! 中章～输掉就会被妖女硬上～",rating:7.5,img:"88894_f599N.jpg"},{title:"神采炼金大师",rating:7.5,img:"13003_vkEaa.jpg"},{title:"情侣热恋中",rating:7.5,img:"12580_sF0E0.jpg"},{title:"华彩煌煌，吾之一族 灯影万华镜",rating:7.6,img:"24875_2p3lz.jpg"},{title:"我的女友是蓝领／她的作为，我的遭遇／巨乳妻完全捕获计划／我老婆被那家伙睡了。",rating:7.5,img:"28400_El07J.jpg"},{title:"五彩斑斓的世界",rating:7.5,img:"14435_nNaw3.jpg"},{title:"兰斯8",rating:7.4,img:"19750_GESIl.jpg"},{title:"魔能",rating:7.5,img:"11595_ttDTk.jpg"},{title:"雾上的伊拉斯谟",rating:7.6,img:"123263_kPJGo.jpg"},{title:"アルカナ・ファミリア La storia della Arcana Famiglia",rating:7.4,img:"22685_1gX32.jpg"},{title:"纸箱战机",rating:7.5,img:"18808_FaSFr.jpg"},{title:"雀龙门3",rating:7.5,img:"35972_4MA5r.jpg"},{title:"NOeSIS-虚伪记忆的物语-",rating:7.4,img:"70981_yffxt.jpg"},{title:"梦幻之星携带版2 无限",rating:7.4,img:"11267_SLCg1.jpg"}],2012:[{title:"魔法使之夜",rating:8.6,img:"5418_VTRT4.jpg"},{title:"心跳回忆女生版3 白金版",rating:8.7,img:"29049_Bqh8h.jpg"},{title:"海市蜃楼之馆",rating:8.4,img:"73806_cc482.jpg"},{title:"幻灵镇魂曲",rating:8.2,img:"78442_Fg8PP.jpg"},{title:"五彩斑斓的曙光",rating:7.8,img:"37755_fMp5n.jpg"},{title:"Root Double -Before Crime After Days-",rating:7.8,img:"27914_YSS1y.jpg"},{title:"认真和我恋爱！S",rating:7.8,img:"22963_z1DVm.jpg"},{title:"蝶之毒 华之锁～幻想夜话～",rating:7.7,img:"36354_Y84hm.jpg"},{title:"近月少女的礼仪",rating:7.7,img:"44123_k8Rmk.jpg"},{title:"灰色的迷宫",rating:7.7,img:"28682_BBZBE.jpg"},{title:"世界终结与生日快乐",rating:7.6,img:"39142_WT2Tf.jpg"},{title:"神学校 The Gift",rating:7.7,img:"73803_u55m5.jpg"},{title:"NOeSIS02-羽化-",rating:7.6,img:"70983_Z5uTt.jpg"},{title:"初雪樱",rating:7.6,img:"19002_nO49l.jpg"},{title:"戏剧性谋杀",rating:7.5,img:"14696_KPNE2.jpg"},{title:"幸运之杖2FD 献给你的终曲",rating:7.6,img:"37071_fp9AV.jpg"},{title:"Cytus",rating:7.5,img:"31245_PpPPy.jpg"},{title:"月界金融末世录 第二章",rating:7.6,img:"77122_86QP6.jpg"},{title:"闪耀十字军PSS",rating:7.6,img:"23427_rbfKc.jpg"},{title:"Dolphin Divers",rating:7.7,img:"37476_ANMXh.jpg"},{title:"幽浮：未知敌人",rating:7.5,img:"51026_duqre.jpg"},{title:"方块国的爱丽丝～ Wonderful Wonder World ～",rating:7.6,img:"42811_X7Nq1.jpg"},{title:"同居情侣热恋中",rating:7.5,img:"25999_L72Jz.jpg"},{title:"终极军团",rating:7.6,img:"41466_uYd0I.jpg"},{title:"像素地下城",rating:7.6,img:"84298_4f7Mj.jpg"},{title:"春开，意遥遥。",rating:7.5,img:"29484_HZy39.jpg"},{title:"白衣性恋爱症候群 复诊",rating:7.5,img:"38900_xbZFr.jpg"},{title:"无主之地2",rating:7.4,img:"35764_3U3Xz.jpg"}],2013:[{title:"忠臣藏46＋1",rating:8.2,img:"64718_Wv9I9.jpg"},{title:"少女理论及其周边 -巴黎学院篇-",rating:8,img:"66760_Zz9v3.jpg"},{title:"勇者大战魔物娘! 终章～输掉就会被妖女硬上～",rating:7.8,img:"75507_iq9PM.jpg"},{title:"夏末涅槃",rating:7.9,img:"49316_O9s99.jpg"},{title:"时钟机关的Ley-line-残影之夜将明时-",rating:7.8,img:"49533_M91L7.jpg"},{title:"灰色的乐园",rating:7.8,img:"46868_czj7k.jpg"},{title:"フレラバ ～Friend to Lover～",rating:7.8,img:"58584_jsjR8.jpg"},{title:"献给精灵神的祭品巫女供牺姬菲娜的冒险之旅",rating:7.8,img:"102714_ujX77.jpg"},{title:"巨乳幻想外传2",rating:7.8,img:"83275_2XIb8.jpg"},{title:"Fate/新章 CCC",rating:7.8,img:"35862_FeC90.jpg"},{title:"向日葵的教会与长长的暑假",rating:7.7,img:"41565_NOWtw.jpg"},{title:"Muv-Luv Alternative Total Eclipse",rating:7.7,img:"51705_PLJPI.jpg"},{title:"月界金融末世录 第三章",rating:7.7,img:"82315_00117.jpg"},{title:"真剣で私に恋しなさい！A-1",rating:7.8,img:"126656_fG98L.jpg"}],2014:[{title:"混沌子",rating:8.4,img:"88765_QF7GZ.jpg"},{title:"西历2236年",rating:8.4,img:"137992_fR42p.jpg"},{title:"兰斯9 赫尔曼革命",rating:8.2,img:"88739_n4V88.jpg"},{title:"冲破万里晴空之上",rating:8,img:"106509_6u9B6.jpg"},{title:"纸上魔法使",rating:7.9,img:"111552_zNOi1.jpg"},{title:"苍之彼方的四重奏",rating:7.9,img:"76912_RikT2.jpg"},{title:"金色琴弦3 AnotherSky feat.天音学园",rating:8,img:"113850_4Z5ed.jpg"},{title:"Bradyon Veda -ブラディオン ベーダ-",rating:7.9,img:"73979_aLeaL.jpg"},{title:"NTRPG2",rating:7.8,img:"211232_wNJjb.jpg"},{title:"どうして、そんなに黒い髪が好きなの？",rating:7.7,img:"102432_WPWLw.jpg"},{title:"BALDR SKY ZERO 2",rating:7.6,img:"88700_yLsfF.jpg"},{title:"VenusBlood -HYPNO-",rating:7.6,img:"116858_0bjB4.jpg"},{title:"ChuSingura46＋1 武士の鼓動",rating:7.6,img:"106722_ZoKOy.jpg"},{title:"航迹云的彼方",rating:7.6,img:"84495_96nzh.jpg"},{title:"星織ユメミライ",rating:7.5,img:"91166_r4HMn.jpg"}],2015:[{title:"樱之诗 - 在樱花之森上飞舞",rating:8.8,img:"22423_SksK2.jpg"},{title:"海市蜃楼之馆 -A Requiem for Innocence-",rating:8.5,img:"144881_gFAFI.jpg"},{title:"兰斯03 利萨斯陷落",rating:8.2,img:"134929_f3y1M.jpg"},{title:"人狼村之谜",rating:8.2,img:"215470_af6bA.jpg"},{title:"FLOWERS 夏篇",rating:8.1,img:"119895_gJ4qq.jpg"},{title:"传颂之物-虚伪的假面-",rating:8,img:"32340_RVUlu.jpg"},{title:"宛如梦幻·织田信长传",rating:8.4,img:"325635_VQnNm.jpg"},{title:"命运石之门 0",rating:7.9,img:"129820_C6k1C.jpg"},{title:"恋痕",rating:8.5,img:"184144_z3VPh.jpg"},{title:"时钟机关的Ley-line-朝雾中飘零之花-",rating:7.9,img:"106118_z9obb.jpg"},{title:"黑之宣告 血红的纹章",rating:7.8,img:"135075_3FgHZ.jpg"},{title:"向日葵：天空鹅卵石",rating:7.8,img:"103496_3R4Z5.jpg"},{title:"D.C.II Dearest Marriage～ダ・カーポII～ディアレストマリッジ",rating:7.9,img:"126140_ro2go.jpg"},{title:"水仙 -Sumire-",rating:7.7,img:"186568_gcEVV.jpg"},{title:"すみれ",rating:7.7,img:"113573_81RVk.jpg"},{title:"结城友奈是勇者S",rating:7.7,img:"123806_NRODO.jpg"}],2016:[{title:"海底",rating:8.5,img:"226956_6c4wV.jpg"},{title:"传颂之物-二人之白皇-",rating:8.2,img:"157916_rRrRJ.jpg"},{title:"FLOWERS 秋篇",rating:8.2,img:"167531_11650.jpg"},{title:"VA-11 HALL-A：赛博朋克酒保行动",rating:8.1,img:"186554_VfFt9.jpg"},{title:"King Exit",rating:8,img:"210177_F8U9q.jpg"},{title:"黑之宣告 殉教者们",rating:8,img:"135076_1H00Z.jpg"},{title:"ISLAND",rating:7.8,img:"150191_BtQpr.jpg"},{title:"BALDR HEART",rating:7.8,img:"162783_PPY16.jpg"},{title:"真剣で私に恋しなさい！Ａ プラスディスク",rating:8,img:"204486_eGWgi.jpg"},{title:"神怒之日 ～夜访穿刺公～",rating:7.8,img:"156122_M8io8.jpg"},{title:"金色琴弦4",rating:7.8,img:"142088_ccx2M.jpg"},{title:"J.Q.V人類救済部～With love from isotope～ Lost Route エデンの証明",rating:7.9,img:"229583_ykg8W.jpg"},{title:"天津罪",rating:7.6,img:"165894_CCyPX.jpg"},{title:"END ROLL",rating:7.9,img:"211493_0IYhi.jpg"},{title:"拉比哩比",rating:7.6,img:"168122_NVfnj.jpg"},{title:"影子战术：将军之刃",rating:7.6,img:"205044_TNzTA.jpg"}],2017:[{title:"在世界尽头咏唱恋曲的少女YU-NO 重制版",rating:8,img:"121307_iP3bt.jpg"},{title:"流景之海的艾佩理雅",rating:8,img:"210068_p4P8s.jpg"},{title:"勇者大战魔物娘RPG 中章",rating:8.1,img:"222896_2vuw2.jpg"},{title:"丰裕之角 －不可思议之物居住的小镇－",rating:7.9,img:"227694_28bsb.jpg"},{title:"你去死吧 －多数决死亡游戏－",rating:7.8,img:"224621_EsV97.jpg"},{title:"プロナント・シンフォニー",rating:7.9,img:"239599_4AvIt.jpg"},{title:"蓝宝石般的被害妄想少女",rating:7.7,img:"281438_W2z1w.jpg"},{title:"金辉恋曲四重奏",rating:7.6,img:"225784_uEb3Y.jpg"},{title:"Blackish House ←sideZ",rating:7.7,img:"208460_IPYsM.jpg"},{title:"结城友奈是勇者 花结的闪光",rating:7.7,img:"211149_Ez2fr.jpg"},{title:"战国的黑百合~扶她公主与忍者少女们~",rating:7.6,img:"191779_5vN2S.jpg"},{title:"凋零余波",rating:7.6,img:"240473_I7HE1.jpg"},{title:"真情流露于五彩之时",rating:7.5,img:"203007_XKy30.jpg"},{title:"天结城堡大师",rating:7.5,img:"200551_dkz86.jpg"},{title:"突然＊恋人",rating:7.5,img:"220369_gtDAA.jpg"}],2018:[{title:"兰斯10 决战",rating:9.3,img:"226254_UNFNa.jpg"},{title:"BLACKSOULSII -愛しき貴方へ贈る不思議の国-",rating:8.8,img:"267764_hhhhN.jpg"},{title:"Summer Pockets",rating:8.3,img:"200763_s2kSG.jpg"},{title:"寒蝉鸣泣之时奉",rating:8.3,img:"259216_2Z99X.jpg"},{title:"VenusBlood:Lagoon",rating:8,img:"248499_zy2CX.jpg"},{title:"幽灵镇少女 第一季",rating:7.9,img:"253978_G2oyc.jpg"},{title:"传颂之物 致逝者的摇篮曲",rating:7.8,img:"229849_AYZN3.jpg"},{title:"カスタムオーダーメイド3D2",rating:7.8,img:"238552_3Rjwc.jpg"},{title:"最悪なる災厄人間に捧ぐ",rating:7.7,img:"247612_SQY2U.jpg"},{title:"细胞神曲　-Cell of Enpireo-",rating:7.6,img:"247845_ezW65.jpg"},{title:"奇异恩典·圣夜的小镇",rating:7.5,img:"254208_RgeC4.jpg"},{title:"抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？",rating:7.5,img:"243475_q93n2.jpg"},{title:"欲都孤儿",rating:7.5,img:"368605_Wn46n.jpg"}],2019:[{title:"死月妖花～四月八日～",rating:9,img:"280440_do0j5.jpg"},{title:"十三机兵防卫圈",rating:8.6,img:"146598_m2Dj6.jpg"},{title:"MUSICUS!",rating:8.5,img:"241897_6E2XI.jpg"},{title:"樱花、萌放。-as the Night's, Reincarnation-",rating:8.3,img:"233030_422zH.jpg"},{title:"抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？2",rating:8.1,img:"273493_ZMBD7.jpg"},{title:"AlexiA ~アレクシア~",rating:7.7,img:"289142_U6Rk5.jpg"},{title:"TS魔法少女なお!2nd!!",rating:7.6,img:"283862_A3v4A.jpg"},{title:"金辉恋曲四重奏 -Golden Time-",rating:7.5,img:"267448_Wy130.jpg"},{title:"AI：梦境档案",rating:7.5,img:"252657_adMO0.jpg"},{title:"细胞神曲-Cell of Empireo- DLC 矶井实光的记录",rating:7.6,img:"315639_tKpEy.jpg"},{title:"母烂漫",rating:7.4,img:"202143_M33u7.jpg"},{title:"いつかのメモラージョ ～ことのはアムリラート～",rating:7.4,img:"250639_6S1ph.jpg"},{title:"在月之彼岸邂逅",rating:7.4,img:"253621_WJfOB.jpg"},{title:"初めての彼女",rating:7.4,img:"268459_V0DTK.jpg"},{title:"Cytoid",rating:7.4,img:"310246_NvR58.jpg"},{title:"尘埃拉力 2.0",rating:7.4,img:"265808_u4P45.jpg"},{title:"华卡音舞",rating:7.4,img:"315120_I6vTt.jpg"},{title:"虚幻寓言：欲望的祭品",rating:7.4,img:"328725_KoKPp.jpg"},{title:"路易吉洋馆3",rating:7.3,img:"260604_Z68wJ.jpg"},{title:"乐园魔城2",rating:7.4,img:"274165_sGz4Q.jpg"},{title:"细胞迷途",rating:7.3,img:"293816_1ZLC9.jpg"},{title:"和香様の座する世界",rating:7.3,img:"269269_3aaWa.jpg"},{title:"FALL IN LABYRINTH -隶属的少女们-",rating:7.3,img:"294661_DwDOZ.jpg"},{title:"SorceressAlive!～世界末日陨落之星～",rating:7.3,img:"252050_jd88M.jpg"},{title:"纪元1800",rating:7.3,img:"280683_oj0hO.jpg"},{title:"三位一体4：梦魇王子",rating:7.3,img:"277553_oRfgl.jpg"},{title:"耀西的手工世界",rating:7.3,img:"217048_xZVAR.jpg"},{title:"凯萨琳FULL BODY",rating:7.2,img:"233243_5NN5I.jpg"},{title:"疑案追声",rating:7.2,img:"276820_Vvg59.jpg"},{title:"蕾娜莉丝传奇",rating:7.3,img:"305041_GgwM4.jpg"}],2020:[{title:"恋爱课程",rating:8.7,img:"438006_4PR0U.jpg"},{title:"阿尔特斯：超越時空",rating:8.3,img:"321358_0SkAW.jpg"},{title:"天之少女",rating:8.2,img:"163041_I5Z65.jpg"},{title:"樱色之云绯色之恋",rating:7.7,img:"292024_ygJZj.jpg"},{title:"9-nine-雪色雪花雪之痕",rating:7.7,img:"290856_ft4cG.jpg"},{title:"梅卡妮可 -兔子与水星之谣-",rating:7.7,img:"303403_ZTt72.jpg"},{title:"终之空 remake",rating:7.6,img:"314512_c21n6.jpg"},{title:"星空列车与白的旅行",rating:7.5,img:"304421_HOeaY.jpg"},{title:"僵尸×道士",rating:7.6,img:"290368_8f8R6.jpg"},{title:"丸子与银河龙",rating:7.5,img:"291333_CQiz4.jpg"},{title:"白日梦的构想图",rating:7.5,img:"295075_ejRG6.jpg"},{title:"光翼战姬 Extia 3",rating:7.5,img:"297311_smuXw.jpg"},{title:"魔法少女天穹法妮雅",rating:7.5,img:"322105_QUve6.jpg"},{title:"硝子金平糖",rating:7.6,img:"302772_Rjh7m.jpg"},{title:"Noita",rating:7.4,img:"291303_tz0h3.jpg"},{title:"There Is No Game : Wrong Dimension",rating:7.4,img:"312672_X7TR7.jpg"},{title:"多娜多娜 一起干坏事吧",rating:7.4,img:"297734_LRm0a.jpg"}],2021:[{title:"永恒世界",rating:8.4,img:"442350_9hmWj.jpg"},{title:"Demons Roots",rating:8.3,img:"254103_P8uGi.jpg"},{title:"刻痕零",rating:8.5,img:"184551_FdfXe.jpg"},{title:"月姬 -A piece of blue glass moon-",rating:8.2,img:"46874_JC7Q5.jpg"},{title:"圣骑士莉卡物语 白翼与淫翼姐妹",rating:7.7,img:"321956_jPsjz.jpg"},{title:"心跳回忆女生版4",rating:7.7,img:"287683_EOit0.jpg"},{title:"冥契的牧神节",rating:7.6,img:"316637_34696.jpg"},{title:"ブレイカーハーツ",rating:7.7,img:"336476_n8Dnv.jpg"},{title:"典狱长卡琳",rating:7.5,img:"386933_QL8QO.jpg"},{title:"为我的女王献上荣冠",rating:7.4,img:"313964_pWil9.jpg"},{title:"一个最好不要兑现的承诺",rating:7.4,img:"381636_GY49R.jpg"},{title:"一生一次",rating:7.4,img:"442351_n3pbp.jpg"}],2022:[{title:"变态监狱",rating:8.7,img:"347780_70gvI.jpg"},{title:"苍之彼方的四重奏 EXTRA2",rating:8.3,img:"308808_zY5mM.jpg"},{title:"光翼戦姫エクスティアTS パラレルエピソード3 トワイライトセイバー",rating:7.6,img:"384975_585UZ.jpg"},{title:"传述之魔女",rating:7.6,img:"356983_RqPkk.jpg"},{title:"星之终途",rating:7.5,img:"317675_csQ2e.jpg"},{title:"永恒少女~堕落庭园的少女们~",rating:7.5,img:"339900_82sD0.jpg"},{title:"前往遥远图勒的旅人",rating:7.6,img:"429824_6e5ZP.jpg"},{title:"妹！相随 ~黑白世界的缤纷冒险~",rating:7.5,img:"371733_tn3ff.jpg"},{title:"恋爱绮谭~不存在的真相~",rating:7.5,img:"364637_IXvgQ.jpg"},{title:"AMBITIOUS MISSION",rating:7.4,img:"360498_P87BB.jpg"},{title:"魔法少女消耗戦線 another record -ちいさきものたちのゆめ-",rating:7.4,img:"367589_lx3eZ.jpg"},{title:"もっと！孕ませ！炎のおっぱい異世界おっぱいメイド学園！",rating:7.4,img:"403275_xtO2X.jpg"},{title:"迷失游戏",rating:7.4,img:"387206_KKE5E.jpg"},{title:"ぐるぐる痴漢電車",rating:7.3,img:"433097_gpg7I.jpg"},{title:"放学后的灰姑娘2",rating:7.3,img:"383523_IO1g3.jpg"},{title:"战争交响曲：尼菲林传奇",rating:7.3,img:"419602_Zzx56.jpg"}],2023:[{title:"樱之刻 - 于樱花之森下漫步",rating:8.3,img:"220921_x17Z2.jpg"},{title:"甜蜜女友2+",rating:8.1,img:"345691_0wAXf.jpg"},{title:"Hira Hira Hihiru",rating:7.8,img:"402650_13frc.jpg"},{title:"ソルルイ -after mini-",rating:7.7,img:"422140_7bree.jpg"},{title:"纯白交响曲 SANA EDITION",rating:7.6,img:"417463_roe96.jpg"},{title:"无垠之心",rating:7.6,img:"313824_28z44.jpg"},{title:"冬日狂想曲",rating:7.5,img:"427028_T3TmM.jpg"},{title:"只属于我的神秘规则！赢了女训练家的话H是理所当然的",rating:7.5,img:"452791_3Firu.jpg"},{title:"魔法少女露娜的劫难",rating:7.5,img:"421948_25cwx.jpg"},{title:"WANNABE→CREATORS",rating:7.4,img:"416503_33lza.jpg"},{title:"康乃馨俱乐部",rating:7.4,img:"442469_DN9dB.jpg"},{title:"D.C.5 ～ダ・カーポ5～",rating:7.2,img:"389618_6n5qA.jpg"}],2024:[{title:"勇者大战魔物娘RPG 终章",rating:8.8,img:"515978_SYc33.jpg"},{title:"播种之谣",rating:7.7,img:"486165_CtccO.jpg"},{title:"魔王复活物语",rating:7.9,img:"503972_t3y6b.jpg"},{title:"鼓手余命十日谭",rating:7.6,img:"525092_9S43T.jpg"},{title:"茜色",rating:7.6,img:"512816_5edY0.jpg"},{title:"鉛の棍棒",rating:7.6,img:"503489_xHB6g.jpg"},{title:"Until Then",rating:7.5,img:"479600_o5pvD.jpg"},{title:"死神商館RExEX ～ カネのチカラをマシマシして女冒険者のハーレムを作るRPG",rating:7.5,img:"476585_zND5G.jpg"},{title:"星之终途后日谈：渺茫希望的日记",rating:7.4,img:"495135_0Hi0M.jpg"},{title:"D.C.5 Future Link ～ダ・カーポ5～ フューチャーリンク",rating:7.4,img:"447553_MQ9i2.jpg"},{title:"阁楼里的眠姬",rating:7.3,img:"487053_47jMM.jpg"},{title:"昼下がりのボロアパートと人妻たち 〜閉鎖空間で狂い堕ちていく〜",rating:7.2,img:"523445_ZDIdU.jpg"},{title:"大鹏 - The Roc",rating:7.1,img:"322499_xMX34.jpg"},{title:"米塔",rating:7.2,img:"445334_ooaC8.jpg"},{title:"IV?AV!!-2nd Girl- 60帧超色情AV摄影模拟SLG",rating:7.1,img:"525989_Sk0Vd.jpg"},{title:"暴食的怪兽公主：惑星美食之旅",rating:7.1,img:"526984_xpT9D.jpg"},{title:"夏色四叶草",rating:7.1,img:"447039_cFFs6.jpg"},{title:"活侠传",rating:7.1,img:"385177_zOIk7.jpg"},{title:"七龙珠 电光炸裂！ZERO",rating:7,img:"469394_c1Iz6.jpg"},{title:"缄默祸运",rating:7.1,img:"515416_3fve3.jpg"},{title:"将军对决",rating:7,img:"428015_L4JJk.jpg"},{title:"圣女不死心",rating:7.1,img:"512789_S131b.jpg"},{title:"アリアサキュズム",rating:7,img:"525423_lR5Bi.jpg"},{title:"地狱之刃2",rating:7,img:"296342_0066l.jpg"},{title:"幻耀的羽毛",rating:7,img:"492390_mXRV5.jpg"},{title:"キョウセイ支配",rating:7,img:"478672_p22br.jpg"}]};function Vn(t,e){return t[13]=1,t[14]=e>>8,t[15]=e&255,t[16]=e>>8,t[17]=e&255,t}const Je=112,Qe=72,tn=89,en=115;let ee;function Yn(){const t=new Int32Array(256);for(let e=0;e<256;e++){let n=e;for(let i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;t[e]=n}return t}function Gn(t){let e=-1;ee||(ee=Yn());for(let n=0;n<t.length;n++)e=ee[(e^t[n])&255]^e>>>8;return e^-1}function Kn(t){const e=t.length-1;for(let n=e;n>=4;n--)if(t[n-4]===9&&t[n-3]===Je&&t[n-2]===Qe&&t[n-1]===tn&&t[n]===en)return n-3;return 0}function qn(t,e,n=!1){const i=new Uint8Array(13);e*=39.3701,i[0]=Je,i[1]=Qe,i[2]=tn,i[3]=en,i[4]=e>>>24,i[5]=e>>>16,i[6]=e>>>8,i[7]=e&255,i[8]=i[4],i[9]=i[5],i[10]=i[6],i[11]=i[7],i[12]=1;const a=Gn(i),r=new Uint8Array(4);if(r[0]=a>>>24,r[1]=a>>>16,r[2]=a>>>8,r[3]=a&255,n){const o=Kn(t);return t.set(i,o),t.set(r,o+13),t}else{const o=new Uint8Array(4);o[0]=0,o[1]=0,o[2]=0,o[3]=9;const s=new Uint8Array(54);return s.set(t,0),s.set(o,33),s.set(i,37),s.set(r,50),s}}const nn="[modern-screenshot]",dt=typeof window<"u",Xn=dt&&"Worker"in window,Zn=dt&&"atob"in window;var ze;const fe=dt?(ze=window.navigator)==null?void 0:ze.userAgent:"",rn=fe.includes("Chrome"),Wt=fe.includes("AppleWebKit")&&!rn,de=fe.includes("Firefox"),Jn=t=>t&&"__CONTEXT__"in t,Qn=t=>t.constructor.name==="CSSFontFaceRule",ti=t=>t.constructor.name==="CSSImportRule",tt=t=>t.nodeType===1,Rt=t=>typeof t.className=="object",an=t=>t.tagName==="image",ei=t=>t.tagName==="use",Ct=t=>tt(t)&&typeof t.style<"u"&&!Rt(t),ni=t=>t.nodeType===8,ii=t=>t.nodeType===3,vt=t=>t.tagName==="IMG",Kt=t=>t.tagName==="VIDEO",ri=t=>t.tagName==="CANVAS",ai=t=>t.tagName==="TEXTAREA",oi=t=>t.tagName==="INPUT",si=t=>t.tagName==="STYLE",li=t=>t.tagName==="SCRIPT",gi=t=>t.tagName==="SELECT",ci=t=>t.tagName==="SLOT",ui=t=>t.tagName==="IFRAME",fi=(...t)=>console.warn(nn,...t);function di(t){var n;const e=(n=t==null?void 0:t.createElement)==null?void 0:n.call(t,"canvas");return e&&(e.height=e.width=1),!!e&&"toDataURL"in e&&!!e.toDataURL("image/webp").includes("image/webp")}const se=t=>t.startsWith("data:");function on(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(dt&&t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i)||!dt)return t;const n=qt().implementation.createHTMLDocument(),i=n.createElement("base"),a=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(a),e&&(i.href=e),a.href=t,a.href}function qt(t){return(t&&tt(t)?t==null?void 0:t.ownerDocument:t)??window.document}const Xt="http://www.w3.org/2000/svg";function mi(t,e,n){const i=qt(n).createElementNS(Xt,"svg");return i.setAttributeNS(null,"width",t.toString()),i.setAttributeNS(null,"height",e.toString()),i.setAttributeNS(null,"viewBox",`0 0 ${t} ${e}`),i}function hi(t,e){let n=new XMLSerializer().serializeToString(t);return e&&(n=n.replace(/[\u0000-\u0008\v\f\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu,"")),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`}async function pi(t,e="image/png",n=1){try{return await new Promise((i,a)=>{t.toBlob(r=>{r?i(r):a(new Error("Blob is null"))},e,n)})}catch(i){if(Zn)return bi(t.toDataURL(e,n));throw i}}function bi(t){var s;const[e,n]=t.split(","),i=((s=e.match(/data:(.+);/))==null?void 0:s[1])??void 0,a=window.atob(n),r=a.length,o=new Uint8Array(r);for(let g=0;g<r;g+=1)o[g]=a.charCodeAt(g);return new Blob([o],{type:i})}function sn(t,e){return new Promise((n,i)=>{const a=new FileReader;a.onload=()=>n(a.result),a.onerror=()=>i(a.error),a.onabort=()=>i(new Error(`Failed read blob to ${e}`)),e==="dataUrl"?a.readAsDataURL(t):e==="arrayBuffer"&&a.readAsArrayBuffer(t)})}const wi=t=>sn(t,"dataUrl"),yi=t=>sn(t,"arrayBuffer");function _t(t,e){const n=qt(e).createElement("img");return n.decoding="sync",n.loading="eager",n.src=t,n}function It(t,e){return new Promise(n=>{const{timeout:i,ownerDocument:a,onError:r,onWarn:o}=e??{},s=typeof t=="string"?_t(t,qt(a)):t;let g=null,u=null;function l(){n(s),g&&clearTimeout(g),u==null||u()}if(i&&(g=setTimeout(l,i)),Kt(s)){const c=s.currentSrc||s.src;if(!c)return s.poster?It(s.poster,e).then(n):l();if(s.readyState>=2)return l();const m=l,f=_=>{o==null||o("Failed video load",c,_),r==null||r(_),l()};u=()=>{s.removeEventListener("loadeddata",m),s.removeEventListener("error",f)},s.addEventListener("loadeddata",m,{once:!0}),s.addEventListener("error",f,{once:!0})}else{const c=an(s)?s.href.baseVal:s.currentSrc||s.src;if(!c)return l();const m=async()=>{if(vt(s)&&"decode"in s)try{await s.decode()}catch(_){o==null||o("Failed to decode image, trying to render anyway",s.dataset.originalSrc||c,_)}l()},f=_=>{o==null||o("Failed image load",s.dataset.originalSrc||c,_),l()};if(vt(s)&&s.complete)return m();u=()=>{s.removeEventListener("load",m),s.removeEventListener("error",f)},s.addEventListener("load",m,{once:!0}),s.addEventListener("error",f,{once:!0})}})}async function _i(t,e){Ct(t)&&(vt(t)||Kt(t)?await It(t,e):await Promise.all(["img","video"].flatMap(n=>Array.from(t.querySelectorAll(n)).map(i=>It(i,e)))))}const ln=function(){let e=0;const n=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${n()}${e}`)}();function gn(t){return t==null?void 0:t.split(",").map(e=>e.trim().replace(/"|'/g,"").toLowerCase()).filter(Boolean)}let Re=0;function ji(t){const e=`${nn}[#${Re}]`;return Re++,{time:n=>t&&console.time(`${e} ${n}`),timeEnd:n=>t&&console.timeEnd(`${e} ${n}`),warn:(...n)=>t&&fi(...n)}}function vi(t){return{cache:t?"no-cache":"force-cache"}}async function me(t,e){return Jn(t)?t:Si(t,{...e,autoDestruct:!0})}async function Si(t,e){var f,_;const{scale:n=1,workerUrl:i,workerNumber:a=1}=e||{},r=!!(e!=null&&e.debug),o=(e==null?void 0:e.features)??!0,s=t.ownerDocument??(dt?window.document:void 0),g=((f=t.ownerDocument)==null?void 0:f.defaultView)??(dt?window:void 0),u=new Map,l={width:0,height:0,quality:1,type:"image/png",scale:n,backgroundColor:null,style:null,filter:null,maximumCanvasSize:0,timeout:3e4,progress:null,debug:r,fetch:{requestInit:vi((_=e==null?void 0:e.fetch)==null?void 0:_.bypassingCache),placeholderImage:"data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",bypassingCache:!1,...e==null?void 0:e.fetch},fetchFn:null,font:{},drawImageInterval:100,workerUrl:null,workerNumber:a,onCloneNode:null,onEmbedNode:null,onCreateForeignObjectSvg:null,includeStyleProperties:null,autoDestruct:!1,...e,__CONTEXT__:!0,log:ji(r),node:t,ownerDocument:s,ownerWindow:g,dpi:n===1?null:96*n,svgStyleElement:cn(s),svgDefsElement:s==null?void 0:s.createElementNS(Xt,"defs"),svgStyles:new Map,defaultComputedStyles:new Map,workers:[...Array.from({length:Xn&&i&&a?a:0})].map(()=>{try{const h=new Worker(i);return h.onmessage=async b=>{var x,y,p,E;const{url:j,result:w}=b.data;w?(y=(x=u.get(j))==null?void 0:x.resolve)==null||y.call(x,w):(E=(p=u.get(j))==null?void 0:p.reject)==null||E.call(p,new Error(`Error receiving message from worker: ${j}`))},h.onmessageerror=b=>{var w,x;const{url:j}=b.data;(x=(w=u.get(j))==null?void 0:w.reject)==null||x.call(w,new Error(`Error receiving message from worker: ${j}`))},h}catch(h){return l.log.warn("Failed to new Worker",h),null}}).filter(Boolean),fontFamilies:new Map,fontCssTexts:new Map,acceptOfImage:`${[di(s)&&"image/webp","image/svg+xml","image/*","*/*"].filter(Boolean).join(",")};q=0.8`,requests:u,drawImageCount:0,tasks:[],features:o,isEnable:h=>h==="restoreScrollPosition"?typeof o=="boolean"?!1:o[h]??!1:typeof o=="boolean"?o:o[h]??!0};l.log.time("wait until load"),await _i(t,{timeout:l.timeout,onWarn:l.log.warn}),l.log.timeEnd("wait until load");const{width:c,height:m}=xi(t,l);return l.width=c,l.height=m,l}function cn(t){if(!t)return;const e=t.createElement("style"),n=e.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);return e.appendChild(n),e}function xi(t,e){let{width:n,height:i}=e;if(tt(t)&&(!n||!i)){const a=t.getBoundingClientRect();n=n||a.width||Number(t.getAttribute("width"))||0,i=i||a.height||Number(t.getAttribute("height"))||0}return{width:n,height:i}}async function Ei(t,e){const{log:n,timeout:i,drawImageCount:a,drawImageInterval:r}=e;n.time("image to canvas");const o=await It(t,{timeout:i,onWarn:e.log.warn}),{canvas:s,context2d:g}=Ai(t.ownerDocument,e),u=()=>{try{g==null||g.drawImage(o,0,0,s.width,s.height)}catch(l){e.log.warn("Failed to drawImage",l)}};if(u(),e.isEnable("fixSvgXmlDecode"))for(let l=0;l<a;l++)await new Promise(c=>{setTimeout(()=>{u(),c()},l+r)});return e.drawImageCount=0,n.timeEnd("image to canvas"),s}function Ai(t,e){const{width:n,height:i,scale:a,backgroundColor:r,maximumCanvasSize:o}=e,s=t.createElement("canvas");s.width=Math.floor(n*a),s.height=Math.floor(i*a),s.style.width=`${n}px`,s.style.height=`${i}px`,o&&(s.width>o||s.height>o)&&(s.width>o&&s.height>o?s.width>s.height?(s.height*=o/s.width,s.width=o):(s.width*=o/s.height,s.height=o):s.width>o?(s.height*=o/s.width,s.width=o):(s.width*=o/s.height,s.height=o));const g=s.getContext("2d");return g&&r&&(g.fillStyle=r,g.fillRect(0,0,s.width,s.height)),{canvas:s,context2d:g}}function un(t,e){if(t.ownerDocument)try{const r=t.toDataURL();if(r!=="data:,")return _t(r,t.ownerDocument)}catch(r){e.log.warn("Failed to clone canvas",r)}const n=t.cloneNode(!1),i=t.getContext("2d"),a=n.getContext("2d");try{return i&&a&&a.putImageData(i.getImageData(0,0,t.width,t.height),0,0),n}catch(r){e.log.warn("Failed to clone canvas",r)}return n}function Ti(t,e){var n;try{if((n=t==null?void 0:t.contentDocument)!=null&&n.body)return he(t.contentDocument.body,e)}catch(i){e.log.warn("Failed to clone iframe",i)}return t.cloneNode(!1)}function Ci(t){const e=t.cloneNode(!1);return t.currentSrc&&t.currentSrc!==t.src&&(e.src=t.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager"),e}async function Ii(t,e){if(t.ownerDocument&&!t.currentSrc&&t.poster)return _t(t.poster,t.ownerDocument);const n=t.cloneNode(!1);n.crossOrigin="anonymous",t.currentSrc&&t.currentSrc!==t.src&&(n.src=t.currentSrc);const i=n.ownerDocument;if(i){let a=!0;if(await It(n,{onError:()=>a=!1,onWarn:e.log.warn}),!a)return t.poster?_t(t.poster,t.ownerDocument):n;n.currentTime=t.currentTime,await new Promise(o=>{n.addEventListener("seeked",o,{once:!0})});const r=i.createElement("canvas");r.width=t.offsetWidth,r.height=t.offsetHeight;try{const o=r.getContext("2d");o&&o.drawImage(n,0,0,r.width,r.height)}catch(o){return e.log.warn("Failed to clone video",o),t.poster?_t(t.poster,t.ownerDocument):n}return un(r,e)}return n}function ki(t,e){return ri(t)?un(t,e):ui(t)?Ti(t,e):vt(t)?Ci(t):Kt(t)?Ii(t,e):t.cloneNode(!1)}function Ni(t){var n;let e=t.sandbox;if(!e){const{ownerDocument:i}=t;try{i&&(e=i.createElement("iframe"),e.id=`__SANDBOX__-${ln()}`,e.width="0",e.height="0",e.style.visibility="hidden",e.style.position="fixed",i.body.appendChild(e),(n=e.contentWindow)==null||n.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'),t.sandbox=e)}catch(a){t.log.warn("Failed to getSandBox",a)}}return e}const Oi=["width","height","-webkit-text-fill-color"],Ri=["stroke","fill"];function fn(t,e,n){const{defaultComputedStyles:i}=n,a=t.nodeName.toLowerCase(),r=Rt(t)&&a!=="svg",o=r?Ri.map(h=>[h,t.getAttribute(h)]).filter(([,h])=>h!==null):[],s=[r&&"svg",a,o.map((h,b)=>`${h}=${b}`).join(","),e].filter(Boolean).join(":");if(i.has(s))return i.get(s);const g=Ni(n),u=g==null?void 0:g.contentWindow;if(!u)return new Map;const l=u==null?void 0:u.document;let c,m;r?(c=l.createElementNS(Xt,"svg"),m=c.ownerDocument.createElementNS(c.namespaceURI,a),o.forEach(([h,b])=>{m.setAttributeNS(null,h,b)}),c.appendChild(m)):c=m=l.createElement(a),m.textContent=" ",l.body.appendChild(c);const f=u.getComputedStyle(m,e),_=new Map;for(let h=f.length,b=0;b<h;b++){const j=f.item(b);Oi.includes(j)||_.set(j,f.getPropertyValue(j))}return l.body.removeChild(c),i.set(s,_),_}function dn(t,e,n){var s;const i=new Map,a=[],r=new Map;if(n)for(const g of n)o(g);else for(let g=t.length,u=0;u<g;u++){const l=t.item(u);o(l)}for(let g=a.length,u=0;u<g;u++)(s=r.get(a[u]))==null||s.forEach((l,c)=>i.set(c,l));function o(g){const u=t.getPropertyValue(g),l=t.getPropertyPriority(g),c=g.lastIndexOf("-"),m=c>-1?g.substring(0,c):void 0;if(m){let f=r.get(m);f||(f=new Map,r.set(m,f)),f.set(g,[u,l])}e.get(g)===u&&!l||(m?a.push(m):i.set(g,[u,l]))}return i}function Pi(t,e,n,i){var c,m,f,_;const{ownerWindow:a,includeStyleProperties:r,currentParentNodeStyle:o}=i,s=e.style,g=a.getComputedStyle(t),u=fn(t,null,i);o==null||o.forEach((h,b)=>{u.delete(b)});const l=dn(g,u,r);l.delete("transition-property"),l.delete("all"),l.delete("d"),l.delete("content"),n&&(l.delete("margin-top"),l.delete("margin-right"),l.delete("margin-bottom"),l.delete("margin-left"),l.delete("margin-block-start"),l.delete("margin-block-end"),l.delete("margin-inline-start"),l.delete("margin-inline-end"),l.set("box-sizing",["border-box",""])),((c=l.get("background-clip"))==null?void 0:c[0])==="text"&&e.classList.add("______background-clip--text"),rn&&(l.has("font-kerning")||l.set("font-kerning",["normal",""]),(((m=l.get("overflow-x"))==null?void 0:m[0])==="hidden"||((f=l.get("overflow-y"))==null?void 0:f[0])==="hidden")&&((_=l.get("text-overflow"))==null?void 0:_[0])==="ellipsis"&&t.scrollWidth===t.clientWidth&&l.set("text-overflow",["clip",""]));for(let h=s.length,b=0;b<h;b++)s.removeProperty(s.item(b));return l.forEach(([h,b],j)=>{s.setProperty(j,h,b)}),l}function $i(t,e){(ai(t)||oi(t)||gi(t))&&e.setAttribute("value",t.value)}const Di=[":before",":after"],Li=[":-webkit-scrollbar",":-webkit-scrollbar-button",":-webkit-scrollbar-thumb",":-webkit-scrollbar-track",":-webkit-scrollbar-track-piece",":-webkit-scrollbar-corner",":-webkit-resizer"];function Bi(t,e,n,i,a){const{ownerWindow:r,svgStyleElement:o,svgStyles:s,currentNodeStyle:g}=i;if(!o||!r)return;function u(l){var x;const c=r.getComputedStyle(t,l);let m=c.getPropertyValue("content");if(!m||m==="none")return;a==null||a(m),m=m.replace(/(')|(")|(counter\(.+\))/g,"");const f=[ln()],_=fn(t,l,i);g==null||g.forEach((y,p)=>{_.delete(p)});const h=dn(c,_,i.includeStyleProperties);h.delete("content"),h.delete("-webkit-locale"),((x=h.get("background-clip"))==null?void 0:x[0])==="text"&&e.classList.add("______background-clip--text");const b=[`content: '${m}';`];if(h.forEach(([y,p],E)=>{b.push(`${E}: ${y}${p?" !important":""};`)}),b.length===1)return;try{e.className=[e.className,...f].join(" ")}catch(y){i.log.warn("Failed to copyPseudoClass",y);return}const j=b.join(`
  `);let w=s.get(j);w||(w=[],s.set(j,w)),w.push(`.${f[0]}:${l}`)}Di.forEach(u),n&&Li.forEach(u)}const Pe=new Set(["symbol"]);async function $e(t,e,n,i,a){if(tt(n)&&(si(n)||li(n))||i.filter&&!i.filter(n))return;Pe.has(e.nodeName)||Pe.has(n.nodeName)?i.currentParentNodeStyle=void 0:i.currentParentNodeStyle=i.currentNodeStyle;const r=await he(n,i,!1,a);i.isEnable("restoreScrollPosition")&&Mi(t,r),e.appendChild(r)}async function De(t,e,n,i){var r;const a=(tt(t)?(r=t.shadowRoot)==null?void 0:r.firstChild:void 0)??t.firstChild;for(let o=a;o;o=o.nextSibling)if(!ni(o))if(tt(o)&&ci(o)&&typeof o.assignedNodes=="function"){const s=o.assignedNodes();for(let g=0;g<s.length;g++)await $e(t,e,s[g],n,i)}else await $e(t,e,o,n,i)}function Mi(t,e){if(!Ct(t)||!Ct(e))return;const{scrollTop:n,scrollLeft:i}=t;if(!n&&!i)return;const{transform:a}=e.style,r=new DOMMatrix(a),{a:o,b:s,c:g,d:u}=r;r.a=1,r.b=0,r.c=0,r.d=1,r.translateSelf(-i,-n),r.a=o,r.b=s,r.c=g,r.d=u,e.style.transform=r.toString()}function Fi(t,e){const{backgroundColor:n,width:i,height:a,style:r}=e,o=t.style;if(n&&o.setProperty("background-color",n,"important"),i&&o.setProperty("width",`${i}px`,"important"),a&&o.setProperty("height",`${a}px`,"important"),r)for(const s in r)o[s]=r[s]}const Ui=/^[\w-:]+$/;async function he(t,e,n=!1,i){var g,u,l,c;const{ownerDocument:a,ownerWindow:r,fontFamilies:o}=e;if(a&&ii(t))return i&&/\S/.test(t.data)&&i(t.data),a.createTextNode(t.data);if(a&&r&&tt(t)&&(Ct(t)||Rt(t))){const m=await ki(t,e);if(e.isEnable("removeAbnormalAttributes")){const w=m.getAttributeNames();for(let x=w.length,y=0;y<x;y++){const p=w[y];Ui.test(p)||m.removeAttribute(p)}}const f=e.currentNodeStyle=Pi(t,m,n,e);n&&Fi(m,e);let _=!1;if(e.isEnable("copyScrollbar")){const w=[(g=f.get("overflow-x"))==null?void 0:g[0],(u=f.get("overflow-y"))==null?void 0:u[0]];_=w.includes("scroll")||(w.includes("auto")||w.includes("overlay"))&&(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth)}const h=(l=f.get("text-transform"))==null?void 0:l[0],b=gn((c=f.get("font-family"))==null?void 0:c[0]),j=b?w=>{h==="uppercase"?w=w.toUpperCase():h==="lowercase"?w=w.toLowerCase():h==="capitalize"&&(w=w[0].toUpperCase()+w.substring(1)),b.forEach(x=>{let y=o.get(x);y||o.set(x,y=new Set),w.split("").forEach(p=>y.add(p))})}:void 0;return Bi(t,m,_,e,j),$i(t,m),Kt(t)||await De(t,m,e,j),m}const s=t.cloneNode(!1);return await De(t,s,e),s}function zi(t){if(t.ownerDocument=void 0,t.ownerWindow=void 0,t.svgStyleElement=void 0,t.svgDefsElement=void 0,t.svgStyles.clear(),t.defaultComputedStyles.clear(),t.sandbox){try{t.sandbox.remove()}catch(e){t.log.warn("Failed to destroyContext",e)}t.sandbox=void 0}t.workers=[],t.fontFamilies.clear(),t.fontCssTexts.clear(),t.requests.clear(),t.tasks=[]}function Wi(t){const{url:e,timeout:n,responseType:i,...a}=t,r=new AbortController,o=n?setTimeout(()=>r.abort(),n):void 0;return fetch(e,{signal:r.signal,...a}).then(s=>{if(!s.ok)throw new Error("Failed fetch, not 2xx response",{cause:s});switch(i){case"arrayBuffer":return s.arrayBuffer();case"dataUrl":return s.blob().then(wi);case"text":default:return s.text()}}).finally(()=>clearTimeout(o))}function kt(t,e){const{url:n,requestType:i="text",responseType:a="text",imageDom:r}=e;let o=n;const{timeout:s,acceptOfImage:g,requests:u,fetchFn:l,fetch:{requestInit:c,bypassingCache:m,placeholderImage:f},font:_,workers:h,fontFamilies:b}=t;i==="image"&&(Wt||de)&&t.drawImageCount++;let j=u.get(n);if(!j){m&&m instanceof RegExp&&m.test(o)&&(o+=(/\?/.test(o)?"&":"?")+new Date().getTime());const w=i.startsWith("font")&&_&&_.minify,x=new Set;w&&i.split(";")[1].split(",").forEach(O=>{b.has(O)&&b.get(O).forEach(V=>x.add(V))});const y=w&&x.size,p={url:o,timeout:s,responseType:y?"arrayBuffer":a,headers:i==="image"?{accept:g}:void 0,...c};j={type:i,resolve:void 0,reject:void 0,response:null},j.response=(async()=>{if(l&&i==="image"){const E=await l(n);if(E)return E}return!Wt&&n.startsWith("http")&&h.length?new Promise((E,O)=>{h[u.size&h.length-1].postMessage({rawUrl:n,...p}),j.resolve=E,j.reject=O}):Wi(p)})().catch(E=>{if(u.delete(n),i==="image"&&f)return t.log.warn("Failed to fetch image base64, trying to use placeholder image",o),typeof f=="string"?f:f(r);throw E}),u.set(n,j)}return j.response}async function mn(t,e,n,i){if(!hn(t))return t;for(const[a,r]of Hi(t,e))try{const o=await kt(n,{url:r,requestType:i?"image":"text",responseType:"dataUrl"});t=t.replace(Vi(a),`$1${o}$3`)}catch(o){n.log.warn("Failed to fetch css data url",a,o)}return t}function hn(t){return/url\((['"]?)([^'"]+?)\1\)/.test(t)}const pn=/url\((['"]?)([^'"]+?)\1\)/g;function Hi(t,e){const n=[];return t.replace(pn,(i,a,r)=>(n.push([r,on(r,e)]),i)),n.filter(([i])=>!se(i))}function Vi(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}const Yi=["background-image","border-image-source","-webkit-border-image","-webkit-mask-image","list-style-image"];function Gi(t,e){return Yi.map(n=>{const i=t.getPropertyValue(n);return!i||i==="none"?null:((Wt||de)&&e.drawImageCount++,mn(i,null,e,!0).then(a=>{!a||i===a||t.setProperty(n,a,t.getPropertyPriority(n))}))}).filter(Boolean)}function Ki(t,e){if(vt(t)){const n=t.currentSrc||t.src;if(!se(n))return[kt(e,{url:n,imageDom:t,requestType:"image",responseType:"dataUrl"}).then(i=>{i&&(t.srcset="",t.dataset.originalSrc=n,t.src=i||"")})];(Wt||de)&&e.drawImageCount++}else if(Rt(t)&&!se(t.href.baseVal)){const n=t.href.baseVal;return[kt(e,{url:n,imageDom:t,requestType:"image",responseType:"dataUrl"}).then(i=>{i&&(t.dataset.originalSrc=n,t.href.baseVal=i||"")})]}return[]}function qi(t,e){const{ownerDocument:n,svgDefsElement:i}=e,a=t.getAttribute("href")??t.getAttribute("xlink:href");if(!a)return[];const[r,o]=a.split("#");if(o){const s=`#${o}`,g=n==null?void 0:n.querySelector(`svg ${s}`);if(r&&t.setAttribute("href",s),i!=null&&i.querySelector(s))return[];if(g)return i==null||i.appendChild(g.cloneNode(!0)),[];if(r)return[kt(e,{url:r,responseType:"text"}).then(u=>{i==null||i.insertAdjacentHTML("beforeend",u)})]}return[]}function bn(t,e){const{tasks:n}=e;tt(t)&&((vt(t)||an(t))&&n.push(...Ki(t,e)),ei(t)&&n.push(...qi(t,e))),Ct(t)&&n.push(...Gi(t.style,e)),t.childNodes.forEach(i=>{bn(i,e)})}async function Xi(t,e){const{ownerDocument:n,svgStyleElement:i,fontFamilies:a,fontCssTexts:r,tasks:o,font:s}=e;if(!(!n||!i||!a.size))if(s&&s.cssText){const g=Be(s.cssText,e);i.appendChild(n.createTextNode(`${g}
`))}else{const g=Array.from(n.styleSheets).filter(l=>{try{return"cssRules"in l&&!!l.cssRules.length}catch(c){return e.log.warn(`Error while reading CSS rules from ${l.href}`,c),!1}});await Promise.all(g.flatMap(l=>Array.from(l.cssRules).map(async(c,m)=>{if(ti(c)){let f=m+1;const _=c.href;let h="";try{h=await kt(e,{url:_,requestType:"text",responseType:"text"})}catch(j){e.log.warn(`Error fetch remote css import from ${_}`,j)}const b=h.replace(pn,(j,w,x)=>j.replace(x,on(x,_)));for(const j of Ji(b))try{l.insertRule(j,j.startsWith("@import")?f+=1:l.cssRules.length)}catch(w){e.log.warn("Error inserting rule from remote css import",{rule:j,error:w})}}}))),g.flatMap(l=>Array.from(l.cssRules)).filter(l=>{var c;return Qn(l)&&hn(l.style.getPropertyValue("src"))&&((c=gn(l.style.getPropertyValue("font-family")))==null?void 0:c.some(m=>a.has(m)))}).forEach(l=>{const c=l,m=r.get(c.cssText);m?i.appendChild(n.createTextNode(`${m}
`)):o.push(mn(c.cssText,c.parentStyleSheet?c.parentStyleSheet.href:null,e).then(f=>{f=Be(f,e),r.set(c.cssText,f),i.appendChild(n.createTextNode(`${f}
`))}))})}}const Zi=/(\/\*[\s\S]*?\*\/)/g,Le=/((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;function Ji(t){if(t==null)return[];const e=[];let n=t.replace(Zi,"");for(;;){const r=Le.exec(n);if(!r)break;e.push(r[0])}n=n.replace(Le,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let r=i.exec(n);if(r)a.lastIndex=i.lastIndex;else if(r=a.exec(n),r)i.lastIndex=a.lastIndex;else break;e.push(r[0])}return e}const Qi=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,tr=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Be(t,e){const{font:n}=e,i=n?n==null?void 0:n.preferredFormat:void 0;return i?t.replace(tr,a=>{for(;;){const[r,,o]=Qi.exec(a)||[];if(!o)return"";if(o===i)return`src: ${r};`}}):t}async function er(t,e){const n=await me(t,e);if(tt(n.node)&&Rt(n.node))return n.node;const{ownerDocument:i,log:a,tasks:r,svgStyleElement:o,svgDefsElement:s,svgStyles:g,font:u,progress:l,autoDestruct:c,onCloneNode:m,onEmbedNode:f,onCreateForeignObjectSvg:_}=n;a.time("clone node");const h=await he(n.node,n,!0);if(o&&i){let y="";g.forEach((p,E)=>{y+=`${p.join(`,
`)} {
  ${E}
}
`}),o.appendChild(i.createTextNode(y))}a.timeEnd("clone node"),await(m==null?void 0:m(h)),u!==!1&&tt(h)&&(a.time("embed web font"),await Xi(h,n),a.timeEnd("embed web font")),a.time("embed node"),bn(h,n);const b=r.length;let j=0;const w=async()=>{for(;;){const y=r.pop();if(!y)break;try{await y}catch(p){n.log.warn("Failed to run task",p)}l==null||l(++j,b)}};l==null||l(j,b),await Promise.all([...Array.from({length:4})].map(w)),a.timeEnd("embed node"),await(f==null?void 0:f(h));const x=nr(h,n);return s&&x.insertBefore(s,x.children[0]),o&&x.insertBefore(o,x.children[0]),c&&zi(n),await(_==null?void 0:_(x)),x}function nr(t,e){const{width:n,height:i}=e,a=mi(n,i,t.ownerDocument),r=a.ownerDocument.createElementNS(a.namespaceURI,"foreignObject");return r.setAttributeNS(null,"x","0%"),r.setAttributeNS(null,"y","0%"),r.setAttributeNS(null,"width","100%"),r.setAttributeNS(null,"height","100%"),r.append(t),a.appendChild(r),a}async function ir(t,e){var o;const n=await me(t,e),i=await er(n),a=hi(i,n.isEnable("removeControlCharacter"));n.autoDestruct||(n.svgStyleElement=cn(n.ownerDocument),n.svgDefsElement=(o=n.ownerDocument)==null?void 0:o.createElementNS(Xt,"defs"),n.svgStyles.clear());const r=_t(a,i.ownerDocument);return await Ei(r,n)}async function rr(t,e){const n=await me(t,e),{log:i,type:a,quality:r,dpi:o}=n,s=await ir(n);i.time("canvas to blob");const g=await pi(s,a,r);if(["image/png","image/jpeg"].includes(a)&&o){const u=await yi(g.slice(0,33));let l=new Uint8Array(u);return a==="image/png"?l=qn(l,o):a==="image/jpeg"&&(l=Vn(l,o)),i.timeEnd("canvas to blob"),new Blob([l,g.slice(33)],{type:a})}return i.timeEnd("canvas to blob"),g}const Ht=Symbol("store-raw"),jt=Symbol("store-node"),it=Symbol("store-has"),wn=Symbol("store-self");function yn(t){let e=t[Q];if(!e&&(Object.defineProperty(t,Q,{value:e=new Proxy(t,sr)}),!Array.isArray(t))){const n=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let a=0,r=n.length;a<r;a++){const o=n[a];i[o].get&&Object.defineProperty(t,o,{enumerable:i[o].enumerable,get:i[o].get.bind(e)})}}return e}function et(t){let e;return t!=null&&typeof t=="object"&&(t[Q]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function mt(t,e=new Set){let n,i,a,r;if(n=t!=null&&t[Ht])return n;if(!et(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let o=0,s=t.length;o<s;o++)a=t[o],(i=mt(a,e))!==a&&(t[o]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const o=Object.keys(t),s=Object.getOwnPropertyDescriptors(t);for(let g=0,u=o.length;g<u;g++)r=o[g],!s[r].get&&(a=t[r],(i=mt(a,e))!==a&&(t[r]=i))}return t}function Vt(t,e){let n=t[e];return n||Object.defineProperty(t,e,{value:n=Object.create(null)}),n}function Nt(t,e,n){if(t[e])return t[e];const[i,a]=F(n,{equals:!1,internal:!0});return i.$=a,t[e]=i}function ar(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);return!n||n.get||!n.configurable||e===Q||e===jt||(delete n.value,delete n.writable,n.get=()=>t[Q][e]),n}function _n(t){ie()&&Nt(Vt(t,jt),wn)()}function or(t){return _n(t),Reflect.ownKeys(t)}const sr={get(t,e,n){if(e===Ht)return t;if(e===Q)return n;if(e===ne)return _n(t),n;const i=Vt(t,jt),a=i[e];let r=a?a():t[e];if(e===jt||e===it||e==="__proto__")return r;if(!a){const o=Object.getOwnPropertyDescriptor(t,e);ie()&&(typeof r!="function"||t.hasOwnProperty(e))&&!(o&&o.get)&&(r=Nt(i,e,r)())}return et(r)?yn(r):r},has(t,e){return e===Ht||e===Q||e===ne||e===jt||e===it||e==="__proto__"?!0:(ie()&&Nt(Vt(t,it),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:or,getOwnPropertyDescriptor:ar};function G(t,e,n,i=!1){if(!i&&t[e]===n)return;const a=t[e],r=t.length;n===void 0?(delete t[e],t[it]&&t[it][e]&&a!==void 0&&t[it][e].$()):(t[e]=n,t[it]&&t[it][e]&&a===void 0&&t[it][e].$());let o=Vt(t,jt),s;if((s=Nt(o,e,a))&&s.$(()=>n),Array.isArray(t)&&t.length!==r){for(let g=t.length;g<r;g++)(s=o[g])&&s.$();(s=Nt(o,"length",r))&&s.$(t.length)}(s=o[wn])&&s.$()}function jn(t,e){const n=Object.keys(e);for(let i=0;i<n.length;i+=1){const a=n[i];G(t,a,e[a])}}function lr(t,e){if(typeof e=="function"&&(e=e(t)),e=mt(e),Array.isArray(e)){if(t===e)return;let n=0,i=e.length;for(;n<i;n++){const a=e[n];t[n]!==a&&G(t,n,a)}G(t,"length",i)}else jn(t,e)}function xt(t,e,n=[]){let i,a=t;if(e.length>1){i=e.shift();const o=typeof i,s=Array.isArray(t);if(Array.isArray(i)){for(let g=0;g<i.length;g++)xt(t,[i[g]].concat(e),n);return}else if(s&&o==="function"){for(let g=0;g<t.length;g++)i(t[g],g)&&xt(t,[g].concat(e),n);return}else if(s&&o==="object"){const{from:g=0,to:u=t.length-1,by:l=1}=i;for(let c=g;c<=u;c+=l)xt(t,[c].concat(e),n);return}else if(e.length>1){xt(t[i],e,[i].concat(n));return}a=t[i],n=[i].concat(n)}let r=e[0];typeof r=="function"&&(r=r(a,n),r===a)||i===void 0&&r==null||(r=mt(r),i===void 0||et(a)&&et(r)&&!Array.isArray(r)?jn(a,r):G(t,i,r))}function gr(...[t,e]){const n=mt(t||{}),i=Array.isArray(n),a=yn(n);function r(...o){Nn(()=>{i&&o.length===1?lr(n,o[0]):xt(n,o)})}return[a,r]}const le=Symbol("store-root");function wt(t,e,n,i,a){const r=e[n];if(t===r)return;const o=Array.isArray(t);if(n!==le&&(!et(t)||!et(r)||o!==Array.isArray(r)||a&&t[a]!==r[a])){G(e,n,t);return}if(o){if(t.length&&r.length&&(!i||a&&t[0]&&t[0][a]!=null)){let u,l,c,m,f,_,h,b;for(c=0,m=Math.min(r.length,t.length);c<m&&(r[c]===t[c]||a&&r[c]&&t[c]&&r[c][a]===t[c][a]);c++)wt(t[c],r,c,i,a);const j=new Array(t.length),w=new Map;for(m=r.length-1,f=t.length-1;m>=c&&f>=c&&(r[m]===t[f]||a&&r[m]&&t[f]&&r[m][a]===t[f][a]);m--,f--)j[f]=r[m];if(c>f||c>m){for(l=c;l<=f;l++)G(r,l,t[l]);for(;l<t.length;l++)G(r,l,j[l]),wt(t[l],r,l,i,a);r.length>t.length&&G(r,"length",t.length);return}for(h=new Array(f+1),l=f;l>=c;l--)_=t[l],b=a&&_?_[a]:_,u=w.get(b),h[l]=u===void 0?-1:u,w.set(b,l);for(u=c;u<=m;u++)_=r[u],b=a&&_?_[a]:_,l=w.get(b),l!==void 0&&l!==-1&&(j[l]=r[u],l=h[l],w.set(b,l));for(l=c;l<t.length;l++)l in j?(G(r,l,j[l]),wt(t[l],r,l,i,a)):G(r,l,t[l])}else for(let u=0,l=t.length;u<l;u++)wt(t[u],r,u,i,a);r.length>t.length&&G(r,"length",t.length);return}const s=Object.keys(t);for(let u=0,l=s.length;u<l;u++)wt(t[s[u]],r,s[u],i,a);const g=Object.keys(r);for(let u=0,l=g.length;u<l;u++)t[g[u]]===void 0&&G(r,g[u],void 0)}function cr(t,e={}){const{merge:n,key:i="id"}=e,a=mt(t);return r=>{if(!et(r)||!et(a))return a;const o=wt(a,{[le]:r},le,n,i);return o===void 0?r:o}}const Yt=new WeakMap,vn={get(t,e){if(e===Ht)return t;const n=t[e];let i;return et(n)?Yt.get(n)||(Yt.set(n,i=new Proxy(n,vn)),i):n},set(t,e,n){return G(t,e,mt(n)),!0},deleteProperty(t,e){return G(t,e,void 0,!0),!0}};function Me(t){return e=>{if(et(e)){let n;(n=Yt.get(e))||Yt.set(e,n=new Proxy(e,vn)),t(n)}return e}}var ur=D("<div class=sonner-loading-wrapper><div class=sonner-spinner>"),fr=D("<div class=sonner-loading-bar>"),dr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"clip-rule=evenodd>'),mr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"clip-rule=evenodd>'),hr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"clip-rule=evenodd>'),pr=D('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"clip-rule=evenodd>'),br=D("<div class=sonner-loader>"),wr=D('<button aria-label="Close toast"data-close-button><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>'),yr=D("<li aria-atomic=true role=status tabindex=0 data-sonner-toast>"),_r=D("<div data-icon>"),jr=D("<div data-description>"),vr=D("<div data-content><div data-title>"),Sr=D("<button data-button data-cancel>"),xr=D("<button data-button>"),Er=D("<section tabindex=-1>"),Ar=D("<ol tabindex=-1 data-sonner-toaster>");function Tr(t,{insertAt:e}={}){if(typeof document>"u")return;const n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}Tr(`:where(html[dir=ltr]),
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
`);var Cr=Array(12).fill(0);function Ir(t){return(()=>{var e=ur(),n=e.firstChild;return $(n,q(re,{each:Cr,children:()=>fr()})),K(()=>C(e,"data-visible",t.visible)),e})()}function kr(){return dr()}function Nr(){return mr()}function Or(){return hr()}function Rr(){return pr()}function Pr(t){switch(t){case"success":return kr;case"info":return Or;case"warning":return Nr;case"error":return Rr;default:return null}}var ge=0,$r=class{constructor(){U(this,"subscribers");U(this,"toasts");U(this,"subscribe",t=>(this.subscribers.push(t),()=>{const e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}));U(this,"publish",t=>{this.subscribers.forEach(e=>e(t))});U(this,"addToast",t=>{this.publish(t),this.toasts=[...this.toasts,t]});U(this,"create",t=>{var r;const{message:e,...n}=t,i=typeof(t==null?void 0:t.id)=="number"||t.id&&((r=t.id)==null?void 0:r.length)>0?t.id:ge++;return this.toasts.find(o=>o.id===i)?this.toasts=this.toasts.map(o=>o.id===i?(this.publish({...o,...t,id:i,title:e}),{...o,...t,id:i,title:e}):o):this.addToast({title:e,...n,id:i}),i});U(this,"dismiss",t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t));U(this,"message",(t,e)=>this.create({...e,message:t}));U(this,"error",(t,e)=>this.create({...e,message:t,type:"error"}));U(this,"success",(t,e)=>this.create({...e,type:"success",message:t}));U(this,"info",(t,e)=>this.create({...e,type:"info",message:t}));U(this,"warning",(t,e)=>this.create({...e,type:"warning",message:t}));U(this,"promise",(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading}));const i=t instanceof Promise?t:t();let a=n!==void 0;return i.then(r=>{if(r&&typeof r.ok=="boolean"&&!r.ok){a=!1;const o=typeof e.error=="function"?e.error(`HTTP error! status: ${r.status}`):e.error;this.create({id:n,type:"error",message:o})}else if(e.success!==void 0){a=!1;const o=typeof e.success=="function"?e.success(r):e.success;this.create({id:n,type:"success",message:o})}}).catch(r=>{if(e.error!==void 0){a=!1;const o=typeof e.error=="function"?e.error(r):e.error;this.create({id:n,type:"error",message:o})}}).finally(()=>{var r;a&&(this.dismiss(n),n=void 0),(r=e.finally)==null||r.call(e)}),n});U(this,"loading",(t,e)=>this.create({...e,type:"loading",message:t}));U(this,"custom",(t,e)=>{const n=(e==null?void 0:e.id)||ge++;return this.publish({jsx:t(n),id:n,...e}),n});this.subscribers=[],this.toasts=[]}},J=new $r;function Dr(t,e){const n=(e==null?void 0:e.id)||ge++;return J.addToast({title:t,...e,id:n}),n}var Lr=Dr,Fe=Object.assign(Lr,{success:J.success,info:J.info,warning:J.warning,error:J.error,custom:J.custom,message:J.message,promise:J.promise,dismiss:J.dismiss,loading:J.loading});function Br(){const[t,e]=F(!1);return At(()=>{const n=()=>{e(document.hidden)};document.addEventListener("visibilitychange",n),ft(()=>{window.removeEventListener("visibilitychange",n)})}),t}var Mr=3,Fr="32px",Ur=4e3,zr=356,Sn=14,Wr=20,Hr=200;function bt(...t){return t.filter(Boolean).join(" ")}var Vr=t=>{const[e,n]=F(!1),[i,a]=F(!1),[r,o]=F(!1),[s,g]=F(!1),[u,l]=F(0),[c,m]=F(0);let f;const _=()=>t.index===0,h=()=>t.index+1<=t.visibleToasts,b=()=>t.toast.type,j=()=>t.toast.class||"",w=()=>t.toast.descriptionClass||"",x=Xe({gap:Sn},t),y=()=>t.heights.findIndex(S=>S.toastId===t.toast.id)||0,p=()=>t.toast.duration||t.duration||Ur;let E=0,O=0;const[V,N]=F(null),X=()=>t.position.split("-"),I=()=>t.heights.reduce((S,M,d)=>d>=y()?S:S+M.height,0),W=Br(),T=()=>t.toast.invert||t.invert,st=()=>b()==="loading",nt=()=>y()*x.gap+I();function Z(){var S;return(S=t.icons)!=null&&S.loading?(()=>{var M=br();return $(M,()=>t.icons.loading),K(()=>C(M,"data-visible",b()==="loading")),M})():q(Ir,{get visible(){return b()==="loading"}})}At(()=>{n(!0)}),At(()=>{const S=f,M=S.style.height;S.style.height="auto";const d=S.getBoundingClientRect().height;S.style.height=M,m(d),rt(()=>{t.setHeights(v=>v.find(k=>k.toastId===t.toast.id)?v.map(k=>k.toastId===t.toast.id?{...k,height:d}:k):[{toastId:t.toast.id,height:d,position:t.toast.position},...v])})});const Y=()=>{a(!0),l(nt()),t.setHeights(S=>S.filter(M=>M.toastId!==t.toast.id)),setTimeout(()=>{t.removeToast(t.toast)},Hr)};let ht=p();return rt(Et(()=>[t.expanded,t.interacting,t.toast,p(),t.toast.promise,b(),t.pauseWhenPageIsHidden,W()],([S,M,d,v,A,k,R,L])=>{if(A&&k==="loading"||v===Number.POSITIVE_INFINITY)return;let H;S||M||R&&L?(()=>{if(O<E){const ct=new Date().getTime()-E;ht=ht-ct}O=new Date().getTime()})():(()=>{E=new Date().getTime(),H=setTimeout(()=>{var ct;(ct=d.onAutoClose)==null||ct.call(d,d),Y()},ht)})(),ft(()=>{clearTimeout(H)})})),rt(Et(()=>t.toast.id,S=>{const M=f;if(M){const d=M.getBoundingClientRect().height;m(d),t.setHeights(v=>[{toastId:S,height:d,position:t.toast.position},...v]),ft(()=>{t.setHeights(v=>v.filter(A=>A.toastId!==S))})}})),rt(Et(()=>t.toast.delete,S=>{S&&Y()})),(()=>{var S=yr();S.$$pointermove=d=>{if(!V())return;const v=d.clientY-V().y,A=d.clientX-V().x,R=(X()[0]==="top"?Math.min:Math.max)(0,v),L=d.pointerType==="touch"?10:2;Math.abs(R)>L?f==null||f.style.setProperty("--swipe-amount",`${v}px`):Math.abs(A)>L&&N(null)},S.$$pointerup=()=>{var v,A;if(s())return;N(null);const d=Number((f==null?void 0:f.style.getPropertyValue("--swipe-amount").replace("px",""))||0);if(Math.abs(d)>=Wr){l(nt()),(A=(v=t.toast).onDismiss)==null||A.call(v,t.toast),Y(),g(!0);return}f==null||f.style.setProperty("--swipe-amount","0px"),o(!1)},S.$$pointerdown=d=>{st()||(l(nt()),d.target.setPointerCapture(d.pointerId),d.target.tagName!=="BUTTON"&&(o(!0),N({x:d.clientX,y:d.clientY})))};var M=f;return typeof M=="function"?ue(M,S):f=S,$(S,q(ut,{get when(){return t.closeButton&&!t.toast.jsx},get children(){var d=wr();return Wn(d,"click",st()?void 0:()=>{var v,A;Y(),(A=(v=t.toast).onDismiss)==null||A.call(v,t.toast)}),K(v=>{var R,L,H;var A=st(),k=bt((R=t.classes)==null?void 0:R.closeButton,(H=(L=t.toast)==null?void 0:L.classes)==null?void 0:H.closeButton);return A!==v.e&&C(d,"data-disabled",v.e=A),k!==v.t&&lt(d,v.t=k),v},{e:void 0,t:void 0}),d}}),null),$(S,q(ut,{get when(){return t.toast.jsx||t.toast.title instanceof Element},get fallback(){return[q(ut,{get when(){return b()||t.toast.icon||t.toast.promise},get children(){var d=_r();return $(d,(()=>{var v=ae(()=>!!(t.toast.promise||t.toast.type==="loading"&&!t.toast.icon));return()=>v()?t.toast.icon||Z():null})(),null),$(d,(()=>{var v=ae(()=>t.toast.type!=="loading");return()=>{var A;return v()?t.toast.icon||((A=t.icons)==null?void 0:A[b()])||Pr(b())():null}})(),null),d}}),(()=>{var d=vr(),v=d.firstChild;return $(v,()=>t.toast.title),$(d,q(ut,{get when(){return t.toast.description},get children(){var A=jr();return $(A,()=>t.toast.description),K(()=>{var k,R,L;return lt(A,bt(t.descriptionClass,w(),(k=t.classes)==null?void 0:k.description,(L=(R=t.toast)==null?void 0:R.classes)==null?void 0:L.description))}),A}}),null),K(()=>{var A,k,R;return lt(v,bt((A=t.classes)==null?void 0:A.title,(R=(k=t.toast)==null?void 0:k.classes)==null?void 0:R.title))}),d})(),q(ut,{get when(){return t.toast.cancel},get children(){var d=Sr();return d.$$click=()=>{var v;Y(),(v=t.toast.cancel)!=null&&v.onClick&&t.toast.cancel.onClick()},$(d,()=>t.toast.cancel.label),K(v=>{var R,L,H;var A=t.toast.cancelButtonStyle||t.cancelButtonStyle,k=bt((R=t.classes)==null?void 0:R.cancelButton,(H=(L=t.toast)==null?void 0:L.classes)==null?void 0:H.cancelButton);return v.e=Lt(d,A,v.e),k!==v.t&&lt(d,v.t=k),v},{e:void 0,t:void 0}),d}}),q(ut,{get when(){return t.toast.action},get children(){var d=xr();return d.$$click=v=>{var A;(A=t.toast.action)==null||A.onClick(v),!v.defaultPrevented&&Y()},$(d,()=>t.toast.action.label),K(v=>{var R,L,H;var A=t.toast.actionButtonStyle||t.actionButtonStyle,k=bt((R=t.classes)==null?void 0:R.actionButton,(H=(L=t.toast)==null?void 0:L.classes)==null?void 0:H.actionButton);return v.e=Lt(d,A,v.e),k!==v.t&&lt(d,v.t=k),v},{e:void 0,t:void 0}),d}})]},get children(){return t.toast.jsx||t.toast.title}}),null),K(d=>{var Se,xe,Ee,Ae,Te,Ce,Ie;var v=t.toast.important?"assertive":"polite",A=bt(t.class,j(),(Se=t.classes)==null?void 0:Se.toast,(Ee=(xe=t.toast)==null?void 0:xe.classes)==null?void 0:Ee.toast,(Ae=t.classes)==null?void 0:Ae.default,(Te=t.classes)==null?void 0:Te[b()],(Ie=(Ce=t.toast)==null?void 0:Ce.classes)==null?void 0:Ie[b()]),k=!(t.toast.jsx||t.toast.unstyled||t.unstyled),R=e(),L=!!t.toast.promise,H=i(),Zt=h(),Jt=X()[0],ct=X()[1],pe=t.index,be=_(),we=r(),ye=b(),_e=T(),je=s(),ve=!!(t.expanded||t.expandByDefault&&e()),xn={"--index":t.index,"--toasts-before":t.index,"--z-index":t.toasts.length-t.index,"--offset":`${i()?u():nt()}px`,"--initial-height":t.expandByDefault?"auto":`${c()}px`,...t.style,...t.toast.style};return v!==d.e&&C(S,"aria-live",d.e=v),A!==d.t&&lt(S,d.t=A),k!==d.a&&C(S,"data-styled",d.a=k),R!==d.o&&C(S,"data-mounted",d.o=R),L!==d.i&&C(S,"data-promise",d.i=L),H!==d.n&&C(S,"data-removed",d.n=H),Zt!==d.s&&C(S,"data-visible",d.s=Zt),Jt!==d.h&&C(S,"data-y-position",d.h=Jt),ct!==d.r&&C(S,"data-x-position",d.r=ct),pe!==d.d&&C(S,"data-index",d.d=pe),be!==d.l&&C(S,"data-front",d.l=be),we!==d.u&&C(S,"data-swiping",d.u=we),ye!==d.c&&C(S,"data-type",d.c=ye),_e!==d.w&&C(S,"data-invert",d.w=_e),je!==d.m&&C(S,"data-swipe-out",d.m=je),ve!==d.f&&C(S,"data-expanded",d.f=ve),d.y=Lt(S,xn,d.y),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0}),S})()};function Ue(){if(typeof window>"u"||typeof document>"u")return"ltr";const t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var Yr=t=>{const e=Xe({position:"bottom-right",hotkey:["altKey","KeyT"],theme:"light",visibleToasts:Mr,dir:Ue()},t),[n,i]=gr({toasts:[]}),a=()=>Array.from(new Set([e.position].concat(n.toasts.filter(y=>y.position).map(y=>y.position)))),[r,o]=F([]),[s,g]=F(!1),[u,l]=F(!1);let c;const m=()=>e.hotkey.join("+").replace(/Key/g,"").replace(/Digit/g,""),[f,_]=F(null),[h,b]=F(!1),[j,w]=F(e.theme!=="system"?e.theme:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),x=y=>i("toasts",p=>p.filter(({id:E})=>E!==y.id));return At(()=>{const y=J.subscribe(p=>{if(p.dismiss){i("toasts",Me(O=>{O.forEach(V=>{V.id===p.id&&(V.delete=!0)})}));return}const E=n.toasts.findIndex(O=>O.id===p.id);if(E!==-1){i("toasts",[E],cr(p));return}i("toasts",Me(O=>{O.unshift(p)}))});ft(()=>{y()})}),rt(Et(()=>e.theme,y=>{if(y!=="system"){w(y);return}typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:p})=>{w(p?"dark":"light")})})),rt(()=>{n.toasts.length<=1&&g(!1)}),At(()=>{const y=p=>{e.hotkey.every(O=>p[O]||p.code===O)&&(g(!0),c==null||c.focus()),p.code==="Escape"&&(document.activeElement===c||c!=null&&c.contains(document.activeElement))&&g(!1)};document.addEventListener("keydown",y),ft(()=>{document.removeEventListener("keydown",y)})}),rt(Et(()=>c,y=>{y&&ft(()=>{var p;f()&&((p=f())==null||p.focus({preventScroll:!0}),_(null),b(!1))})})),q(ut,{get when(){return n.toasts.length>0},get children(){var y=Er();return $(y,q(re,{get each(){return a()},children:(p,E)=>{const[O,V]=p.split("-");return(()=>{var N=Ar();N.$$pointerup=()=>l(!1),N.$$pointerdown=()=>{l(!0)},N.addEventListener("mouseleave",()=>{u()||g(!1)}),N.$$mousemove=()=>g(!0),N.addEventListener("mouseenter",()=>g(!0)),N.addEventListener("focus",I=>{h()||(b(!0),_(I.relatedTarget))}),N.addEventListener("blur",I=>{var W;h()&&!I.currentTarget.contains(I.relatedTarget)&&(b(!1),f()&&((W=f())==null||W.focus({preventScroll:!0}),_(null)))});var X=c;return typeof X=="function"?ue(X,N):c=N,C(N,"data-y-position",O),C(N,"data-x-position",V),$(N,q(re,{get each(){return n.toasts.filter(I=>!I.position&&E()===0||I.position===p)},children:(I,W)=>q(Vr,{get index(){return W()},get icons(){return e.icons},toast:I,get duration(){var T;return((T=e.toastOptions)==null?void 0:T.duration)??t.duration},get class(){var T;return(T=e.toastOptions)==null?void 0:T.class},get classes(){var T;return(T=e.toastOptions)==null?void 0:T.classes},get cancelButtonStyle(){var T;return(T=e.toastOptions)==null?void 0:T.cancelButtonStyle},get actionButtonStyle(){var T;return(T=e.toastOptions)==null?void 0:T.actionButtonStyle},get descriptionClass(){var T;return(T=e.toastOptions)==null?void 0:T.descriptionClass},get invert(){return!!e.invert},get visibleToasts(){return e.visibleToasts},get closeButton(){return!!e.closeButton},get interacting(){return u()},get position(){return e.position},get style(){var T;return(T=e.toastOptions)==null?void 0:T.style},get unstyled(){var T;return(T=e.toastOptions)==null?void 0:T.unstyled},removeToast:x,get toasts(){return n.toasts},get heights(){return r()},setHeights:o,get expandByDefault(){return!!e.expand},get gap(){return e.gap},get expanded(){return s()},get pauseWhenPageIsHidden(){return e.pauseWhenPageIsHidden}})})),K(I=>{var Y;var W=e.dir==="auto"?Ue():e.dir,T=e.class,st=j(),nt=e.richColors,Z={"--front-toast-height":`${(Y=r()[0])==null?void 0:Y.height}px`,"--offset":typeof e.offset=="number"?`${e.offset}px`:e.offset||Fr,"--width":`${zr}px`,"--gap":`${Sn}px`,...e.style};return W!==I.e&&C(N,"dir",I.e=W),T!==I.t&&lt(N,I.t=T),st!==I.a&&C(N,"data-theme",I.a=st),nt!==I.o&&C(N,"data-rich-colors",I.o=nt),I.i=Lt(N,Z,I.i),I},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),N})()}})),K(()=>C(y,"aria-label",`Notifications ${m()}`)),y}})};/*!
 * Original code by Emil Kowalski
 * MIT Licensed, Copyright 2023 Emil Kowalski, see https://github.com/emilkowalski/sonner/blob/main/LICENSE.md for details
 *
 * Credits:
 * https://github.com/emilkowalski/sonner/blob/main/src/index.tsx
 */Ze(["pointerdown","pointerup","pointermove","click","mousemove"]);const Gr=(t,e)=>{const n=function(){const r=localStorage.getItem(t);return r!=null&&r!=="undefined"?JSON.parse(r):e}(),[i,a]=F(n);return rt(()=>{localStorage.setItem(t,JSON.stringify(i()))},[i]),[i,a]};var Kr=D('<div class="flex flex-col gap-4 pb-10"><div class="p-4 flex flex-col md:items-center "><div class="flex flex-col border border-b-0 bg-white w-fit"><div class="border-b justify-between p-2 text-lg font-bold flex"><h1>我是Galgame糕手(v2.0)<span class=remove> - 点击选择你玩过的Galgame</span><span class="ml-2 text-zinc-400 font-medium">galgame.fallenwood.net</span></h1><span class="shrink-0 whitespace-nowrap">我玩过 <!>/<!> 部Galgame</span></div></div></div><div class="flex gap-2 justify-center"><button type=button class="border rounded-md px-4 py-2 inline-flex">全选</button><button type=button class="border rounded-md px-4 py-2 inline-flex">复制图片</button><button type=button class="border rounded-md px-4 py-2 inline-flex">下载图片</button></div><div class="mt-2 text-center">历年关注最多的Galgame和部分RPG，数据来自 bgm.tv，<a href=https://github.com/fallenwood/galgame-sedai target=_blank class=underline>查看代码'),qr=D('<div class="flex border-b"><div class="bg-red-500 shrink-0 text-white flex items-center font-bold justify-center p-1 size-20 md:size-24 border-black"></div><div class="flex shrink-0">'),Xr=D('<button><span class="leading-tight w-full line-clamp-3"><img class="size-10 md:size-12 ml-auto mr-auto"></span><span class="leading-tight w-full line-clamp-3">'),Zr=D('<button type=button class="border rounded-md px-4 py-2 inline-flex">清除');const Jr=()=>{const[t,e]=Gr("selectedAnime",[]);let n;const i=async()=>(console.log("wrapper",n),n?await rr(n,{scale:2,filter(s){return!(s instanceof HTMLElement&&s.classList.contains("remove"))}}):void 0),a=async()=>{const o=await i();console.log(o),o&&await navigator.clipboard.write([new ClipboardItem({[o.type]:o})])},r=async()=>{if(!n)return;const o=await i();if(!o)return;const s=URL.createObjectURL(o),g=document.createElement("a");g.href=s,g.download="galgame-sedai.png",g.click(),URL.revokeObjectURL(s)};return(()=>{var o=Kr(),s=o.firstChild,g=s.firstChild,u=g.firstChild,l=u.firstChild,c=l.nextSibling,m=c.firstChild,f=m.nextSibling,_=f.nextSibling,h=_.nextSibling;h.nextSibling;var b=s.nextSibling,j=b.firstChild,w=j.nextSibling,x=w.nextSibling,y=n;return typeof y=="function"?ue(y,g):n=g,$(c,()=>t().length,f),$(c,()=>Object.values($t).flatMap(p=>p.map(E=>E.title).slice(0,12)).length,h),$(g,()=>Object.keys($t).map(p=>{const E=$t[p]||[];return(()=>{var O=qr(),V=O.firstChild,N=V.nextSibling;return $(V,p),$(N,()=>E.slice(0,12).map(X=>{const I=t().includes(X.title);return(()=>{var W=Xr(),T=W.firstChild,st=T.firstChild,nt=T.nextSibling;return W.$$click=()=>{e(Z=>I?Z.filter(Y=>Y!==X.title):[...Z,X.title])},lt(W,`size-20 md:size-24 border-l break-all text-center shrink-0 inline-flex flex-col items-center p-1 overflow-hidden justify-center cursor-pointer text-sm  ${I?"bg-green-500":"hover:bg-zinc-100"}`),$(nt,()=>X.title),K(Z=>{var Y=X.title,ht=`/images/${X.img}`;return Y!==Z.e&&C(W,"title",Z.e=Y),ht!==Z.t&&C(st,"src",Z.t=ht),Z},{e:void 0,t:void 0}),W})()})),O})()}),null),j.$$click=()=>{e(Object.values($t).flatMap(p=>p.map(E=>E.title).slice(0,12)))},$(b,(()=>{var p=ae(()=>t().length>0);return()=>p()&&(()=>{var E=Zr();return E.$$click=()=>{e([])},E})()})(),w),w.$$click=()=>{console.log("copy image"),Fe.promise(a(),{success:"复制成功",loading:"复制中",error(p){return`复制失败: ${p instanceof Error?p.message:"未知错误"}`}})},x.$$click=()=>{Fe.promise(r(),{success:"下载成功",loading:"下载中",error(p){return`下载失败: ${p instanceof Error?p.message:"未知错误"}`}})},o})()};Ze(["click"]);const Qr=document.getElementById("root");zn(()=>[q(Jr,{}),q(Yr,{})],Qr);
