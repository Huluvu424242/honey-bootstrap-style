let t=!1;const e="undefined"!=typeof window?window:{},n=e.document||{head:{}},l={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},s=t=>Promise.resolve(t),o={},r=t=>"object"==(t=typeof t)||"function"===t,a=(t,e,...n)=>{let l=null,s=!1,o=!1,a=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!r(l))&&(l+=""),s&&o?a[a.length-1].o+=l:a.push(s?c(null,l):l),o=s)};i(n);const u=c(t,null);return u.i=e,a.length>0&&(u.u=a),u},c=(t,e)=>({t:0,$:t,o:e,m:null,u:null,i:null}),i={},u=(t,e,n,l,s,o)=>{if(n!==l){let a=L(t,e);e.toLowerCase();{const c=r(l);if((a||c&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?a=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!a||4&o||s)&&!c&&t.setAttribute(e,l=!0===l?"":l)}}},$=(t,e,n,l)=>{const s=11===e.m.nodeType&&e.m.host?e.m.host:e.m,r=t&&t.i||o,a=e.i||o;for(l in a)u(s,l,r[l],a[l],n,e.t)},f=(t,e,l)=>{let s,o,r=e.u[l],a=0;if(s=r.m=n.createElement(r.$),$(null,r,!1),r.u)for(a=0;a<r.u.length;++a)o=f(t,r,a),o&&s.appendChild(o);return s},d=(t,e)=>{const n=t.p,l=t.h||c(null,null),s=(t=>t&&t.$===i)(e)?e:a(null,null,e);s.$=null,s.t|=4,t.h=s,s.m=l.m=n,((t,e)=>{const n=e.m=t.m,l=e.u;$(t,e,!1),null!==l&&((t,e,n,l,s,o)=>{let r,a=t;for(;s<=o;++s)l[s]&&(r=f(null,n,s),r&&(l[s].m=r,a.insertBefore(r,null)))})(n,0,e,l,0,l.length-1)})(l,s)},m=(t,e)=>{e&&!t.g&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.g=e)))},y=t=>{if(!(4&t.t))return m(t,t.v),V((()=>p(t)));t.t|=512},p=t=>{const e=t.M;return v(void 0,(()=>h(t,e)))},h=async(t,e)=>{const n=t.p,l=n["s-rc"];w(t,e),l&&(l.map((t=>t())),n["s-rc"]=void 0);{const e=n["s-p"],l=()=>b(t);0===e.length?l():(Promise.all(e).then(l),t.t|=4,e.length=0)}},w=(t,e)=>{try{e=e.render(),t.t|=2,d(t,e)}catch(e){R(e,t.p)}return null},b=t=>{const e=t.p,n=t.v;64&t.t||(t.t|=64,M(e),t.j(e),n||g()),t.g&&(t.g(),t.g=void 0),512&t.t&&N((()=>y(t))),t.t&=-517},g=()=>{M(n.documentElement),N((()=>(t=>{const e=l.ce("appload",{detail:{namespace:"honey-boostrap-style"}});return t.dispatchEvent(e),e})(e)))},v=(t,e)=>t&&t.then?t.then(e):e(),M=t=>t.classList.add("hydrated"),j=(t,s={})=>{const o=[],r=s.exclude||[],a=e.customElements,c=n.head,i=c.querySelector("meta[charset]"),u=n.createElement("style"),$=[];let f,d=!0;Object.assign(l,s),l.l=new URL(s.resourcesUrl||"./",n.baseURI).href,t.map((t=>t[1].map((e=>{const n={t:e[0],k:e[1],P:e[2],C:e[3]},s=n.k,c=class extends HTMLElement{constructor(t){super(t),E(t=this,n)}connectedCallback(){f&&(clearTimeout(f),f=null),d?$.push(this):l.jmp((()=>(t=>{if(0==(1&l.t)){const e=x(t),n=e.L,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){m(e,e.v=n);break}}(async(t,e,n,l,s)=>{if(0==(32&e.t)){if(e.t|=32,(s=U(n)).then){const t=()=>{};s=await s,t()}const t=()=>{};try{new s(e)}catch(t){R(t)}t()}const o=e.v,r=()=>y(e);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){l.jmp((()=>{}))}componentOnReady(){return x(this).R}};n.T=t[0],r.includes(s)||a.get(s)||(o.push(s),a.define(s,c))})))),u.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),c.insertBefore(u,i?i.nextSibling:c.firstChild),d=!1,$.length?$.map((t=>t.connectedCallback())):l.jmp((()=>f=setTimeout(g,30)))},k=t=>{const n=new URL(t,l.l);return n.origin!==e.location.origin?n.href:n.pathname},P=new WeakMap,x=t=>P.get(t),C=(t,e)=>P.set(e.M=t,e),E=(t,e)=>{const n={t:0,p:t,L:e,U:new Map};return n.R=new Promise((t=>n.j=t)),t["s-p"]=[],t["s-rc"]=[],P.set(t,n)},L=(t,e)=>e in t,R=(t,e)=>(0,console.error)(t,e),T=new Map,U=t=>{const e=t.k.replace(/-/g,"_"),n=t.T,l=T.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(T.set(n,t),t[e])),R)},A=[],O=[],q=(e,n)=>s=>{e.push(s),t||(t=!0,n&&4&l.t?N(H):l.raf(H))},F=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){R(t)}t.length=0},H=()=>{F(A),F(O),(t=A.length>0)&&l.raf(H)},N=t=>s().then(t),V=q(O,!0);export{j as b,k as g,a as h,s as p,C as r}