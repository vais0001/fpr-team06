function Lu(i,e){return function(){return i.apply(e,arguments)}}const{toString:cd}=Object.prototype,{getPrototypeOf:Bo}=Object,Os=(i=>e=>{const t=cd.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),hn=i=>(i=i.toLowerCase(),e=>Os(e)===i),Bs=i=>e=>typeof e===i,{isArray:Zi}=Array,Rr=Bs("undefined");function ud(i){return i!==null&&!Rr(i)&&i.constructor!==null&&!Rr(i.constructor)&&Wt(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Pu=hn("ArrayBuffer");function hd(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Pu(i.buffer),e}const fd=Bs("string"),Wt=Bs("function"),Du=Bs("number"),ks=i=>i!==null&&typeof i=="object",dd=i=>i===!0||i===!1,Ms=i=>{if(Os(i)!=="object")return!1;const e=Bo(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},pd=hn("Date"),md=hn("File"),gd=hn("Blob"),_d=hn("FileList"),vd=i=>ks(i)&&Wt(i.pipe),xd=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||Wt(i.append)&&((e=Os(i))==="formdata"||e==="object"&&Wt(i.toString)&&i.toString()==="[object FormData]"))},yd=hn("URLSearchParams"),Md=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Or(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let n,r;if(typeof i!="object"&&(i=[i]),Zi(i))for(n=0,r=i.length;n<r;n++)e.call(null,i[n],n,i);else{const s=t?Object.getOwnPropertyNames(i):Object.keys(i),a=s.length;let o;for(n=0;n<a;n++)o=s[n],e.call(null,i[o],o,i)}}function Iu(i,e){e=e.toLowerCase();const t=Object.keys(i);let n=t.length,r;for(;n-- >0;)if(r=t[n],e===r.toLowerCase())return r;return null}const Uu=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Nu=i=>!Rr(i)&&i!==Uu;function ro(){const{caseless:i}=Nu(this)&&this||{},e={},t=(n,r)=>{const s=i&&Iu(e,r)||r;Ms(e[s])&&Ms(n)?e[s]=ro(e[s],n):Ms(n)?e[s]=ro({},n):Zi(n)?e[s]=n.slice():e[s]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&Or(arguments[n],t);return e}const Ed=(i,e,t,{allOwnKeys:n}={})=>(Or(e,(r,s)=>{t&&Wt(r)?i[s]=Lu(r,t):i[s]=r},{allOwnKeys:n}),i),Sd=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),bd=(i,e,t,n)=>{i.prototype=Object.create(e.prototype,n),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},Td=(i,e,t,n)=>{let r,s,a;const o={};if(e=e||{},i==null)return e;do{for(r=Object.getOwnPropertyNames(i),s=r.length;s-- >0;)a=r[s],(!n||n(a,i,e))&&!o[a]&&(e[a]=i[a],o[a]=!0);i=t!==!1&&Bo(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},wd=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const n=i.indexOf(e,t);return n!==-1&&n===t},Ad=i=>{if(!i)return null;if(Zi(i))return i;let e=i.length;if(!Du(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},Rd=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Bo(Uint8Array)),Cd=(i,e)=>{const n=(i&&i[Symbol.iterator]).call(i);let r;for(;(r=n.next())&&!r.done;){const s=r.value;e.call(i,s[0],s[1])}},Ld=(i,e)=>{let t;const n=[];for(;(t=i.exec(e))!==null;)n.push(t);return n},Pd=hn("HTMLFormElement"),Dd=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,r){return n.toUpperCase()+r}),Tl=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),Id=hn("RegExp"),Fu=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),n={};Or(t,(r,s)=>{e(r,s,i)!==!1&&(n[s]=r)}),Object.defineProperties(i,n)},Ud=i=>{Fu(i,(e,t)=>{if(Wt(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=i[t];if(Wt(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Nd=(i,e)=>{const t={},n=r=>{r.forEach(s=>{t[s]=!0})};return Zi(i)?n(i):n(String(i).split(e)),t},Fd=()=>{},Od=(i,e)=>(i=+i,Number.isFinite(i)?i:e),ha="abcdefghijklmnopqrstuvwxyz",wl="0123456789",Ou={DIGIT:wl,ALPHA:ha,ALPHA_DIGIT:ha+ha.toUpperCase()+wl},Bd=(i=16,e=Ou.ALPHA_DIGIT)=>{let t="";const{length:n}=e;for(;i--;)t+=e[Math.random()*n|0];return t};function kd(i){return!!(i&&Wt(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const zd=i=>{const e=new Array(10),t=(n,r)=>{if(ks(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[r]=n;const s=Zi(n)?[]:{};return Or(n,(a,o)=>{const l=t(a,r+1);!Rr(l)&&(s[o]=l)}),e[r]=void 0,s}}return n};return t(i,0)},Hd=hn("AsyncFunction"),Vd=i=>i&&(ks(i)||Wt(i))&&Wt(i.then)&&Wt(i.catch),K={isArray:Zi,isArrayBuffer:Pu,isBuffer:ud,isFormData:xd,isArrayBufferView:hd,isString:fd,isNumber:Du,isBoolean:dd,isObject:ks,isPlainObject:Ms,isUndefined:Rr,isDate:pd,isFile:md,isBlob:gd,isRegExp:Id,isFunction:Wt,isStream:vd,isURLSearchParams:yd,isTypedArray:Rd,isFileList:_d,forEach:Or,merge:ro,extend:Ed,trim:Md,stripBOM:Sd,inherits:bd,toFlatObject:Td,kindOf:Os,kindOfTest:hn,endsWith:wd,toArray:Ad,forEachEntry:Cd,matchAll:Ld,isHTMLForm:Pd,hasOwnProperty:Tl,hasOwnProp:Tl,reduceDescriptors:Fu,freezeMethods:Ud,toObjectSet:Nd,toCamelCase:Dd,noop:Fd,toFiniteNumber:Od,findKey:Iu,global:Uu,isContextDefined:Nu,ALPHABET:Ou,generateString:Bd,isSpecCompliantForm:kd,toJSONObject:zd,isAsyncFn:Hd,isThenable:Vd};function Ve(i,e,t,n,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),r&&(this.response=r)}K.inherits(Ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Bu=Ve.prototype,ku={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{ku[i]={value:i}});Object.defineProperties(Ve,ku);Object.defineProperty(Bu,"isAxiosError",{value:!0});Ve.from=(i,e,t,n,r,s)=>{const a=Object.create(Bu);return K.toFlatObject(i,a,function(l){return l!==Error.prototype},o=>o!=="isAxiosError"),Ve.call(a,i.message,e,t,n,r),a.cause=i,a.name=i.name,s&&Object.assign(a,s),a};const Gd=null;function so(i){return K.isPlainObject(i)||K.isArray(i)}function zu(i){return K.endsWith(i,"[]")?i.slice(0,-2):i}function Al(i,e,t){return i?i.concat(e).map(function(r,s){return r=zu(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function Wd(i){return K.isArray(i)&&!i.some(so)}const Xd=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function zs(i,e,t){if(!K.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=K.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,m){return!K.isUndefined(m[_])});const n=t.metaTokens,r=t.visitor||u,s=t.dots,a=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(e);if(!K.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(K.isDate(g))return g.toISOString();if(!l&&K.isBlob(g))throw new Ve("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(g)||K.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,m){let d=g;if(g&&!m&&typeof g=="object"){if(K.endsWith(_,"{}"))_=n?_:_.slice(0,-2),g=JSON.stringify(g);else if(K.isArray(g)&&Wd(g)||(K.isFileList(g)||K.endsWith(_,"[]"))&&(d=K.toArray(g)))return _=zu(_),d.forEach(function(x,T){!(K.isUndefined(x)||x===null)&&e.append(a===!0?Al([_],T,s):a===null?_:_+"[]",c(x))}),!1}return so(g)?!0:(e.append(Al(m,_,s),c(g)),!1)}const h=[],f=Object.assign(Xd,{defaultVisitor:u,convertValue:c,isVisitable:so});function p(g,_){if(!K.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));h.push(g),K.forEach(g,function(d,M){(!(K.isUndefined(d)||d===null)&&r.call(e,d,K.isString(M)?M.trim():M,_,f))===!0&&p(d,_?_.concat(M):[M])}),h.pop()}}if(!K.isObject(i))throw new TypeError("data must be an object");return p(i),e}function Rl(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function ko(i,e){this._pairs=[],i&&zs(i,this,e)}const Hu=ko.prototype;Hu.append=function(e,t){this._pairs.push([e,t])};Hu.toString=function(e){const t=e?function(n){return e.call(this,n,Rl)}:Rl;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function jd(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vu(i,e,t){if(!e)return i;const n=t&&t.encode||jd,r=t&&t.serialize;let s;if(r?s=r(e,t):s=K.isURLSearchParams(e)?e.toString():new ko(e,t).toString(n),s){const a=i.indexOf("#");a!==-1&&(i=i.slice(0,a)),i+=(i.indexOf("?")===-1?"?":"&")+s}return i}class qd{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,function(n){n!==null&&e(n)})}}const Cl=qd,Gu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Yd=typeof URLSearchParams<"u"?URLSearchParams:ko,Kd=typeof FormData<"u"?FormData:null,$d=typeof Blob<"u"?Blob:null,Zd=(()=>{let i;return typeof navigator<"u"&&((i=navigator.product)==="ReactNative"||i==="NativeScript"||i==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Jd=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ln={isBrowser:!0,classes:{URLSearchParams:Yd,FormData:Kd,Blob:$d},isStandardBrowserEnv:Zd,isStandardBrowserWebWorkerEnv:Jd,protocols:["http","https","file","blob","url","data"]};function Qd(i,e){return zs(i,new ln.classes.URLSearchParams,Object.assign({visitor:function(t,n,r,s){return ln.isNode&&K.isBuffer(t)?(this.append(n,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function ep(i){return K.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function tp(i){const e={},t=Object.keys(i);let n;const r=t.length;let s;for(n=0;n<r;n++)s=t[n],e[s]=i[s];return e}function Wu(i){function e(t,n,r,s){let a=t[s++];const o=Number.isFinite(+a),l=s>=t.length;return a=!a&&K.isArray(r)?r.length:a,l?(K.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!K.isObject(r[a]))&&(r[a]=[]),e(t,n,r[a],s)&&K.isArray(r[a])&&(r[a]=tp(r[a])),!o)}if(K.isFormData(i)&&K.isFunction(i.entries)){const t={};return K.forEachEntry(i,(n,r)=>{e(ep(n),r,t,0)}),t}return null}const np={"Content-Type":void 0};function ip(i,e,t){if(K.isString(i))try{return(e||JSON.parse)(i),K.trim(i)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(i)}const Hs={transitional:Gu,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=K.isObject(e);if(s&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return r&&r?JSON.stringify(Wu(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Qd(e,this.formSerializer).toString();if((o=K.isFileList(e))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return zs(o?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),ip(e)):e}],transformResponse:[function(e){const t=this.transitional||Hs.transitional,n=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&K.isString(e)&&(n&&!this.responseType||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?Ve.from(o,Ve.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ln.classes.FormData,Blob:ln.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};K.forEach(["delete","get","head"],function(e){Hs.headers[e]={}});K.forEach(["post","put","patch"],function(e){Hs.headers[e]=K.merge(np)});const zo=Hs,rp=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sp=i=>{const e={};let t,n,r;return i&&i.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),n=a.substring(r+1).trim(),!(!t||e[t]&&rp[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},Ll=Symbol("internals");function or(i){return i&&String(i).trim().toLowerCase()}function Es(i){return i===!1||i==null?i:K.isArray(i)?i.map(Es):String(i)}function ap(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(i);)e[n[1]]=n[2];return e}const op=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function fa(i,e,t,n,r){if(K.isFunction(n))return n.call(this,e,t);if(r&&(e=t),!!K.isString(e)){if(K.isString(n))return e.indexOf(n)!==-1;if(K.isRegExp(n))return n.test(e)}}function lp(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function cp(i,e){const t=K.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(i,n+t,{value:function(r,s,a){return this[n].call(this,e,r,s,a)},configurable:!0})})}class Vs{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function s(o,l,c){const u=or(l);if(!u)throw new Error("header name must be a non-empty string");const h=K.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=Es(o))}const a=(o,l)=>K.forEach(o,(c,u)=>s(c,u,l));return K.isPlainObject(e)||e instanceof this.constructor?a(e,t):K.isString(e)&&(e=e.trim())&&!op(e)?a(sp(e),t):e!=null&&s(t,e,n),this}get(e,t){if(e=or(e),e){const n=K.findKey(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return ap(r);if(K.isFunction(t))return t.call(this,r,n);if(K.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=or(e),e){const n=K.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||fa(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let r=!1;function s(a){if(a=or(a),a){const o=K.findKey(n,a);o&&(!t||fa(n,n[o],o,t))&&(delete n[o],r=!0)}}return K.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const s=t[n];(!e||fa(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,n={};return K.forEach(this,(r,s)=>{const a=K.findKey(n,s);if(a){t[a]=Es(r),delete t[s];return}const o=e?lp(s):String(s).trim();o!==s&&delete t[s],t[o]=Es(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return K.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&K.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(r=>n.set(r)),n}static accessor(e){const n=(this[Ll]=this[Ll]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=or(a);n[o]||(cp(r,a),n[o]=!0)}return K.isArray(e)?e.forEach(s):s(e),this}}Vs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.freezeMethods(Vs.prototype);K.freezeMethods(Vs);const Sn=Vs;function da(i,e){const t=this||zo,n=e||t,r=Sn.from(n.headers);let s=n.data;return K.forEach(i,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Xu(i){return!!(i&&i.__CANCEL__)}function Br(i,e,t){Ve.call(this,i??"canceled",Ve.ERR_CANCELED,e,t),this.name="CanceledError"}K.inherits(Br,Ve,{__CANCEL__:!0});function up(i,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?i(t):e(new Ve("Request failed with status code "+t.status,[Ve.ERR_BAD_REQUEST,Ve.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const hp=ln.isStandardBrowserEnv?function(){return{write:function(t,n,r,s,a,o){const l=[];l.push(t+"="+encodeURIComponent(n)),K.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),K.isString(s)&&l.push("path="+s),K.isString(a)&&l.push("domain="+a),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){const n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function fp(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function dp(i,e){return e?i.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):i}function ju(i,e){return i&&!fp(e)?dp(i,e):e}const pp=ln.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(s){let a=s;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(a){const o=K.isString(a)?r(a):a;return o.protocol===n.protocol&&o.host===n.host}}():function(){return function(){return!0}}();function mp(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function gp(i,e){i=i||10;const t=new Array(i),n=new Array(i);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=n[s];a||(a=c),t[r]=l,n[r]=c;let h=s,f=0;for(;h!==r;)f+=t[h++],h=h%i;if(r=(r+1)%i,r===s&&(s=(s+1)%i),c-a<e)return;const p=u&&c-u;return p?Math.round(f*1e3/p):void 0}}function Pl(i,e){let t=0;const n=gp(50,250);return r=>{const s=r.loaded,a=r.lengthComputable?r.total:void 0,o=s-t,l=n(o),c=s<=a;t=s;const u={loaded:s,total:a,progress:a?s/a:void 0,bytes:o,rate:l||void 0,estimated:l&&a&&c?(a-s)/l:void 0,event:r};u[e?"download":"upload"]=!0,i(u)}}const _p=typeof XMLHttpRequest<"u",vp=_p&&function(i){return new Promise(function(t,n){let r=i.data;const s=Sn.from(i.headers).normalize(),a=i.responseType;let o;function l(){i.cancelToken&&i.cancelToken.unsubscribe(o),i.signal&&i.signal.removeEventListener("abort",o)}K.isFormData(r)&&(ln.isStandardBrowserEnv||ln.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(i.auth){const p=i.auth.username||"",g=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+g))}const u=ju(i.baseURL,i.url);c.open(i.method.toUpperCase(),Vu(u,i.params,i.paramsSerializer),!0),c.timeout=i.timeout;function h(){if(!c)return;const p=Sn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),_={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:p,config:i,request:c};up(function(d){t(d),l()},function(d){n(d),l()},_),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(n(new Ve("Request aborted",Ve.ECONNABORTED,i,c)),c=null)},c.onerror=function(){n(new Ve("Network Error",Ve.ERR_NETWORK,i,c)),c=null},c.ontimeout=function(){let g=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const _=i.transitional||Gu;i.timeoutErrorMessage&&(g=i.timeoutErrorMessage),n(new Ve(g,_.clarifyTimeoutError?Ve.ETIMEDOUT:Ve.ECONNABORTED,i,c)),c=null},ln.isStandardBrowserEnv){const p=(i.withCredentials||pp(u))&&i.xsrfCookieName&&hp.read(i.xsrfCookieName);p&&s.set(i.xsrfHeaderName,p)}r===void 0&&s.setContentType(null),"setRequestHeader"in c&&K.forEach(s.toJSON(),function(g,_){c.setRequestHeader(_,g)}),K.isUndefined(i.withCredentials)||(c.withCredentials=!!i.withCredentials),a&&a!=="json"&&(c.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&c.addEventListener("progress",Pl(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Pl(i.onUploadProgress)),(i.cancelToken||i.signal)&&(o=p=>{c&&(n(!p||p.type?new Br(null,i,c):p),c.abort(),c=null)},i.cancelToken&&i.cancelToken.subscribe(o),i.signal&&(i.signal.aborted?o():i.signal.addEventListener("abort",o)));const f=mp(u);if(f&&ln.protocols.indexOf(f)===-1){n(new Ve("Unsupported protocol "+f+":",Ve.ERR_BAD_REQUEST,i));return}c.send(r||null)})},Ss={http:Gd,xhr:vp};K.forEach(Ss,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const xp={getAdapter:i=>{i=K.isArray(i)?i:[i];const{length:e}=i;let t,n;for(let r=0;r<e&&(t=i[r],!(n=K.isString(t)?Ss[t.toLowerCase()]:t));r++);if(!n)throw n===!1?new Ve(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(K.hasOwnProp(Ss,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!K.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:Ss};function pa(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Br(null,i)}function Dl(i){return pa(i),i.headers=Sn.from(i.headers),i.data=da.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),xp.getAdapter(i.adapter||zo.adapter)(i).then(function(n){return pa(i),n.data=da.call(i,i.transformResponse,n),n.headers=Sn.from(n.headers),n},function(n){return Xu(n)||(pa(i),n&&n.response&&(n.response.data=da.call(i,i.transformResponse,n.response),n.response.headers=Sn.from(n.response.headers))),Promise.reject(n)})}const Il=i=>i instanceof Sn?i.toJSON():i;function Gi(i,e){e=e||{};const t={};function n(c,u,h){return K.isPlainObject(c)&&K.isPlainObject(u)?K.merge.call({caseless:h},c,u):K.isPlainObject(u)?K.merge({},u):K.isArray(u)?u.slice():u}function r(c,u,h){if(K.isUndefined(u)){if(!K.isUndefined(c))return n(void 0,c,h)}else return n(c,u,h)}function s(c,u){if(!K.isUndefined(u))return n(void 0,u)}function a(c,u){if(K.isUndefined(u)){if(!K.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function o(c,u,h){if(h in e)return n(c,u);if(h in i)return n(void 0,c)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(c,u)=>r(Il(c),Il(u),!0)};return K.forEach(Object.keys(Object.assign({},i,e)),function(u){const h=l[u]||r,f=h(i[u],e[u],u);K.isUndefined(f)&&h!==o||(t[u]=f)}),t}const qu="1.4.0",Ho={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Ho[i]=function(n){return typeof n===i||"a"+(e<1?"n ":" ")+i}});const Ul={};Ho.transitional=function(e,t,n){function r(s,a){return"[Axios v"+qu+"] Transitional option '"+s+"'"+a+(n?". "+n:"")}return(s,a,o)=>{if(e===!1)throw new Ve(r(a," has been removed"+(t?" in "+t:"")),Ve.ERR_DEPRECATED);return t&&!Ul[a]&&(Ul[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};function yp(i,e,t){if(typeof i!="object")throw new Ve("options must be an object",Ve.ERR_BAD_OPTION_VALUE);const n=Object.keys(i);let r=n.length;for(;r-- >0;){const s=n[r],a=e[s];if(a){const o=i[s],l=o===void 0||a(o,s,i);if(l!==!0)throw new Ve("option "+s+" must be "+l,Ve.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Ve("Unknown option "+s,Ve.ERR_BAD_OPTION)}}const ao={assertOptions:yp,validators:Ho},wn=ao.validators;class As{constructor(e){this.defaults=e,this.interceptors={request:new Cl,response:new Cl}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Gi(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:s}=t;n!==void 0&&ao.assertOptions(n,{silentJSONParsing:wn.transitional(wn.boolean),forcedJSONParsing:wn.transitional(wn.boolean),clarifyTimeoutError:wn.transitional(wn.boolean)},!1),r!=null&&(K.isFunction(r)?t.paramsSerializer={serialize:r}:ao.assertOptions(r,{encode:wn.function,serialize:wn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a;a=s&&K.merge(s.common,s[t.method]),a&&K.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),t.headers=Sn.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(t)===!1||(l=l&&_.synchronous,o.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,h=0,f;if(!l){const g=[Dl.bind(this),void 0];for(g.unshift.apply(g,o),g.push.apply(g,c),f=g.length,u=Promise.resolve(t);h<f;)u=u.then(g[h++],g[h++]);return u}f=o.length;let p=t;for(h=0;h<f;){const g=o[h++],_=o[h++];try{p=g(p)}catch(m){_.call(this,m);break}}try{u=Dl.call(this,p)}catch(g){return Promise.reject(g)}for(h=0,f=c.length;h<f;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=Gi(this.defaults,e);const t=ju(e.baseURL,e.url);return Vu(t,e.params,e.paramsSerializer)}}K.forEach(["delete","get","head","options"],function(e){As.prototype[e]=function(t,n){return this.request(Gi(n||{},{method:e,url:t,data:(n||{}).data}))}});K.forEach(["post","put","patch"],function(e){function t(n){return function(s,a,o){return this.request(Gi(o||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}As.prototype[e]=t(),As.prototype[e+"Form"]=t(!0)});const bs=As;class Vo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const n=this;this.promise.then(r=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](r);n._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{n.subscribe(o),s=o}).then(r);return a.cancel=function(){n.unsubscribe(s)},a},e(function(s,a,o){n.reason||(n.reason=new Br(s,a,o),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Vo(function(r){e=r}),cancel:e}}}const Mp=Vo;function Ep(i){return function(t){return i.apply(null,t)}}function Sp(i){return K.isObject(i)&&i.isAxiosError===!0}const oo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oo).forEach(([i,e])=>{oo[e]=i});const bp=oo;function Yu(i){const e=new bs(i),t=Lu(bs.prototype.request,e);return K.extend(t,bs.prototype,e,{allOwnKeys:!0}),K.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Yu(Gi(i,r))},t}const ut=Yu(zo);ut.Axios=bs;ut.CanceledError=Br;ut.CancelToken=Mp;ut.isCancel=Xu;ut.VERSION=qu;ut.toFormData=zs;ut.AxiosError=Ve;ut.Cancel=ut.CanceledError;ut.all=function(e){return Promise.all(e)};ut.spread=Ep;ut.isAxiosError=Sp;ut.mergeConfig=Gi;ut.AxiosHeaders=Sn;ut.formToJSON=i=>Wu(K.isHTMLForm(i)?new FormData(i):i);ut.HttpStatusCode=bp;ut.default=ut;const Tp=ut;window.axios=Tp;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var lo=!1,co=!1,ni=[],uo=-1;function wp(i){Ap(i)}function Ap(i){ni.includes(i)||ni.push(i),Rp()}function Ku(i){let e=ni.indexOf(i);e!==-1&&e>uo&&ni.splice(e,1)}function Rp(){!co&&!lo&&(lo=!0,queueMicrotask(Cp))}function Cp(){lo=!1,co=!0;for(let i=0;i<ni.length;i++)ni[i](),uo=i;ni.length=0,uo=-1,co=!1}var Ji,Qi,kr,$u,ho=!0;function Lp(i){ho=!1,i(),ho=!0}function Pp(i){Ji=i.reactive,kr=i.release,Qi=e=>i.effect(e,{scheduler:t=>{ho?wp(t):t()}}),$u=i.raw}function Nl(i){Qi=i}function Dp(i){let e=()=>{};return[n=>{let r=Qi(n);return i._x_effects||(i._x_effects=new Set,i._x_runEffects=()=>{i._x_effects.forEach(s=>s())}),i._x_effects.add(r),e=()=>{r!==void 0&&(i._x_effects.delete(r),kr(r))},r},()=>{e()}]}var Zu=[],Ju=[],Qu=[];function Ip(i){Qu.push(i)}function eh(i,e){typeof e=="function"?(i._x_cleanups||(i._x_cleanups=[]),i._x_cleanups.push(e)):(e=i,Ju.push(e))}function Up(i){Zu.push(i)}function Np(i,e,t){i._x_attributeCleanups||(i._x_attributeCleanups={}),i._x_attributeCleanups[e]||(i._x_attributeCleanups[e]=[]),i._x_attributeCleanups[e].push(t)}function th(i,e){i._x_attributeCleanups&&Object.entries(i._x_attributeCleanups).forEach(([t,n])=>{(e===void 0||e.includes(t))&&(n.forEach(r=>r()),delete i._x_attributeCleanups[t])})}var Go=new MutationObserver(qo),Wo=!1;function Xo(){Go.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Wo=!0}function nh(){Fp(),Go.disconnect(),Wo=!1}var yr=[],ma=!1;function Fp(){yr=yr.concat(Go.takeRecords()),yr.length&&!ma&&(ma=!0,queueMicrotask(()=>{Op(),ma=!1}))}function Op(){qo(yr),yr.length=0}function gt(i){if(!Wo)return i();nh();let e=i();return Xo(),e}var jo=!1,Rs=[];function Bp(){jo=!0}function kp(){jo=!1,qo(Rs),Rs=[]}function qo(i){if(jo){Rs=Rs.concat(i);return}let e=[],t=[],n=new Map,r=new Map;for(let s=0;s<i.length;s++)if(!i[s].target._x_ignoreMutationObserver&&(i[s].type==="childList"&&(i[s].addedNodes.forEach(a=>a.nodeType===1&&e.push(a)),i[s].removedNodes.forEach(a=>a.nodeType===1&&t.push(a))),i[s].type==="attributes")){let a=i[s].target,o=i[s].attributeName,l=i[s].oldValue,c=()=>{n.has(a)||n.set(a,[]),n.get(a).push({name:o,value:a.getAttribute(o)})},u=()=>{r.has(a)||r.set(a,[]),r.get(a).push(o)};a.hasAttribute(o)&&l===null?c():a.hasAttribute(o)?(u(),c()):u()}r.forEach((s,a)=>{th(a,s)}),n.forEach((s,a)=>{Zu.forEach(o=>o(a,s))});for(let s of t)if(!e.includes(s)&&(Ju.forEach(a=>a(s)),s._x_cleanups))for(;s._x_cleanups.length;)s._x_cleanups.pop()();e.forEach(s=>{s._x_ignoreSelf=!0,s._x_ignore=!0});for(let s of e)t.includes(s)||s.isConnected&&(delete s._x_ignoreSelf,delete s._x_ignore,Qu.forEach(a=>a(s)),s._x_ignore=!0,s._x_ignoreSelf=!0);e.forEach(s=>{delete s._x_ignoreSelf,delete s._x_ignore}),e=null,t=null,n=null,r=null}function ih(i){return Hr(Wi(i))}function zr(i,e,t){return i._x_dataStack=[e,...Wi(t||i)],()=>{i._x_dataStack=i._x_dataStack.filter(n=>n!==e)}}function Wi(i){return i._x_dataStack?i._x_dataStack:typeof ShadowRoot=="function"&&i instanceof ShadowRoot?Wi(i.host):i.parentNode?Wi(i.parentNode):[]}function Hr(i){let e=new Proxy({},{ownKeys:()=>Array.from(new Set(i.flatMap(t=>Object.keys(t)))),has:(t,n)=>i.some(r=>r.hasOwnProperty(n)),get:(t,n)=>(i.find(r=>{if(r.hasOwnProperty(n)){let s=Object.getOwnPropertyDescriptor(r,n);if(s.get&&s.get._x_alreadyBound||s.set&&s.set._x_alreadyBound)return!0;if((s.get||s.set)&&s.enumerable){let a=s.get,o=s.set,l=s;a=a&&a.bind(e),o=o&&o.bind(e),a&&(a._x_alreadyBound=!0),o&&(o._x_alreadyBound=!0),Object.defineProperty(r,n,{...l,get:a,set:o})}return!0}return!1})||{})[n],set:(t,n,r)=>{let s=i.find(a=>a.hasOwnProperty(n));return s?s[n]=r:i[i.length-1][n]=r,!0}});return e}function rh(i){let e=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,t=(n,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([s,{value:a,enumerable:o}])=>{if(o===!1||a===void 0)return;let l=r===""?s:`${r}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?n[s]=a.initialize(i,l,s):e(a)&&a!==n&&!(a instanceof Element)&&t(a,l)})};return t(i)}function sh(i,e=()=>{}){let t={initialValue:void 0,_x_interceptor:!0,initialize(n,r,s){return i(this.initialValue,()=>zp(n,r),a=>fo(n,r,a),r,s)}};return e(t),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let r=t.initialize.bind(t);t.initialize=(s,a,o)=>{let l=n.initialize(s,a,o);return t.initialValue=l,r(s,a,o)}}else t.initialValue=n;return t}}function zp(i,e){return e.split(".").reduce((t,n)=>t[n],i)}function fo(i,e,t){if(typeof e=="string"&&(e=e.split(".")),e.length===1)i[e[0]]=t;else{if(e.length===0)throw error;return i[e[0]]||(i[e[0]]={}),fo(i[e[0]],e.slice(1),t)}}var ah={};function tn(i,e){ah[i]=e}function po(i,e){return Object.entries(ah).forEach(([t,n])=>{let r=null;function s(){if(r)return r;{let[a,o]=hh(e);return r={interceptor:sh,...a},eh(e,o),r}}Object.defineProperty(i,`$${t}`,{get(){return n(e,s())},enumerable:!1})}),i}function Hp(i,e,t,...n){try{return t(...n)}catch(r){Cr(r,i,e)}}function Cr(i,e,t=void 0){Object.assign(i,{el:e,expression:t}),console.warn(`Alpine Expression Error: ${i.message}

${t?'Expression: "'+t+`"

`:""}`,e),setTimeout(()=>{throw i},0)}var Ts=!0;function Vp(i){let e=Ts;Ts=!1,i(),Ts=e}function ki(i,e,t={}){let n;return Rt(i,e)(r=>n=r,t),n}function Rt(...i){return oh(...i)}var oh=lh;function Gp(i){oh=i}function lh(i,e){let t={};po(t,i);let n=[t,...Wi(i)],r=typeof e=="function"?Wp(n,e):jp(n,e,i);return Hp.bind(null,i,e,r)}function Wp(i,e){return(t=()=>{},{scope:n={},params:r=[]}={})=>{let s=e.apply(Hr([n,...i]),r);Cs(t,s)}}var ga={};function Xp(i,e){if(ga[i])return ga[i];let t=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(i)||/^(let|const)\s/.test(i)?`(async()=>{ ${i} })()`:i,s=(()=>{try{return new t(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`)}catch(a){return Cr(a,e,i),Promise.resolve()}})();return ga[i]=s,s}function jp(i,e,t){let n=Xp(e,t);return(r=()=>{},{scope:s={},params:a=[]}={})=>{n.result=void 0,n.finished=!1;let o=Hr([s,...i]);if(typeof n=="function"){let l=n(n,o).catch(c=>Cr(c,t,e));n.finished?(Cs(r,n.result,o,a,t),n.result=void 0):l.then(c=>{Cs(r,c,o,a,t)}).catch(c=>Cr(c,t,e)).finally(()=>n.result=void 0)}}}function Cs(i,e,t,n,r){if(Ts&&typeof e=="function"){let s=e.apply(t,n);s instanceof Promise?s.then(a=>Cs(i,a,t,n)).catch(a=>Cr(a,r,e)):i(s)}else typeof e=="object"&&e instanceof Promise?e.then(s=>i(s)):i(e)}var Yo="x-";function er(i=""){return Yo+i}function qp(i){Yo=i}var mo={};function ct(i,e){return mo[i]=e,{before(t){if(!mo[t]){console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");return}const n=Qn.indexOf(t);Qn.splice(n>=0?n:Qn.indexOf("DEFAULT"),0,i)}}}function Ko(i,e,t){if(e=Array.from(e),i._x_virtualDirectives){let s=Object.entries(i._x_virtualDirectives).map(([o,l])=>({name:o,value:l})),a=ch(s);s=s.map(o=>a.find(l=>l.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),e=e.concat(s)}let n={};return e.map(ph((s,a)=>n[s]=a)).filter(gh).map($p(n,t)).sort(Zp).map(s=>Kp(i,s))}function ch(i){return Array.from(i).map(ph()).filter(e=>!gh(e))}var go=!1,vr=new Map,uh=Symbol();function Yp(i){go=!0;let e=Symbol();uh=e,vr.set(e,[]);let t=()=>{for(;vr.get(e).length;)vr.get(e).shift()();vr.delete(e)},n=()=>{go=!1,t()};i(t),n()}function hh(i){let e=[],t=o=>e.push(o),[n,r]=Dp(i);return e.push(r),[{Alpine:Gr,effect:n,cleanup:t,evaluateLater:Rt.bind(Rt,i),evaluate:ki.bind(ki,i)},()=>e.forEach(o=>o())]}function Kp(i,e){let t=()=>{},n=mo[e.type]||t,[r,s]=hh(i);Np(i,e.original,s);let a=()=>{i._x_ignore||i._x_ignoreSelf||(n.inline&&n.inline(i,e,r),n=n.bind(n,i,e,r),go?vr.get(uh).push(n):n())};return a.runCleanups=s,a}var fh=(i,e)=>({name:t,value:n})=>(t.startsWith(i)&&(t=t.replace(i,e)),{name:t,value:n}),dh=i=>i;function ph(i=()=>{}){return({name:e,value:t})=>{let{name:n,value:r}=mh.reduce((s,a)=>a(s),{name:e,value:t});return n!==e&&i(n,e),{name:n,value:r}}}var mh=[];function $o(i){mh.push(i)}function gh({name:i}){return _h().test(i)}var _h=()=>new RegExp(`^${Yo}([^:^.]+)\\b`);function $p(i,e){return({name:t,value:n})=>{let r=t.match(_h()),s=t.match(/:([a-zA-Z0-9\-:]+)/),a=t.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],o=e||i[t]||t;return{type:r?r[1]:null,value:s?s[1]:null,modifiers:a.map(l=>l.replace(".","")),expression:n,original:o}}}var _o="DEFAULT",Qn=["ignore","ref","data","id","bind","init","for","model","modelable","transition","show","if",_o,"teleport"];function Zp(i,e){let t=Qn.indexOf(i.type)===-1?_o:i.type,n=Qn.indexOf(e.type)===-1?_o:e.type;return Qn.indexOf(t)-Qn.indexOf(n)}function Mr(i,e,t={}){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))}function On(i,e){if(typeof ShadowRoot=="function"&&i instanceof ShadowRoot){Array.from(i.children).forEach(r=>On(r,e));return}let t=!1;if(e(i,()=>t=!0),t)return;let n=i.firstElementChild;for(;n;)On(n,e),n=n.nextElementSibling}function Bn(i,...e){console.warn(`Alpine Warning: ${i}`,...e)}var Fl=!1;function Jp(){Fl&&Bn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Fl=!0,document.body||Bn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Mr(document,"alpine:init"),Mr(document,"alpine:initializing"),Xo(),Ip(e=>kn(e,On)),eh(e=>bh(e)),Up((e,t)=>{Ko(e,t).forEach(n=>n())});let i=e=>!Gs(e.parentElement,!0);Array.from(document.querySelectorAll(yh())).filter(i).forEach(e=>{kn(e)}),Mr(document,"alpine:initialized")}var Zo=[],vh=[];function xh(){return Zo.map(i=>i())}function yh(){return Zo.concat(vh).map(i=>i())}function Mh(i){Zo.push(i)}function Eh(i){vh.push(i)}function Gs(i,e=!1){return Ws(i,t=>{if((e?yh():xh()).some(r=>t.matches(r)))return!0})}function Ws(i,e){if(i){if(e(i))return i;if(i._x_teleportBack&&(i=i._x_teleportBack),!!i.parentElement)return Ws(i.parentElement,e)}}function Qp(i){return xh().some(e=>i.matches(e))}var Sh=[];function em(i){Sh.push(i)}function kn(i,e=On,t=()=>{}){Yp(()=>{e(i,(n,r)=>{t(n,r),Sh.forEach(s=>s(n,r)),Ko(n,n.attributes).forEach(s=>s()),n._x_ignore&&r()})})}function bh(i){On(i,e=>th(e))}var vo=[],Jo=!1;function Qo(i=()=>{}){return queueMicrotask(()=>{Jo||setTimeout(()=>{xo()})}),new Promise(e=>{vo.push(()=>{i(),e()})})}function xo(){for(Jo=!1;vo.length;)vo.shift()()}function tm(){Jo=!0}function el(i,e){return Array.isArray(e)?Ol(i,e.join(" ")):typeof e=="object"&&e!==null?nm(i,e):typeof e=="function"?el(i,e()):Ol(i,e)}function Ol(i,e){let t=r=>r.split(" ").filter(s=>!i.classList.contains(s)).filter(Boolean),n=r=>(i.classList.add(...r),()=>{i.classList.remove(...r)});return e=e===!0?e="":e||"",n(t(e))}function nm(i,e){let t=o=>o.split(" ").filter(Boolean),n=Object.entries(e).flatMap(([o,l])=>l?t(o):!1).filter(Boolean),r=Object.entries(e).flatMap(([o,l])=>l?!1:t(o)).filter(Boolean),s=[],a=[];return r.forEach(o=>{i.classList.contains(o)&&(i.classList.remove(o),a.push(o))}),n.forEach(o=>{i.classList.contains(o)||(i.classList.add(o),s.push(o))}),()=>{a.forEach(o=>i.classList.add(o)),s.forEach(o=>i.classList.remove(o))}}function Xs(i,e){return typeof e=="object"&&e!==null?im(i,e):rm(i,e)}function im(i,e){let t={};return Object.entries(e).forEach(([n,r])=>{t[n]=i.style[n],n.startsWith("--")||(n=sm(n)),i.style.setProperty(n,r)}),setTimeout(()=>{i.style.length===0&&i.removeAttribute("style")}),()=>{Xs(i,t)}}function rm(i,e){let t=i.getAttribute("style",e);return i.setAttribute("style",e),()=>{i.setAttribute("style",t||"")}}function sm(i){return i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function yo(i,e=()=>{}){let t=!1;return function(){t?e.apply(this,arguments):(t=!0,i.apply(this,arguments))}}ct("transition",(i,{value:e,modifiers:t,expression:n},{evaluate:r})=>{typeof n=="function"&&(n=r(n)),n!==!1&&(!n||typeof n=="boolean"?om(i,t,e):am(i,n,e))});function am(i,e,t){Th(i,el,""),{enter:r=>{i._x_transition.enter.during=r},"enter-start":r=>{i._x_transition.enter.start=r},"enter-end":r=>{i._x_transition.enter.end=r},leave:r=>{i._x_transition.leave.during=r},"leave-start":r=>{i._x_transition.leave.start=r},"leave-end":r=>{i._x_transition.leave.end=r}}[t](e)}function om(i,e,t){Th(i,Xs);let n=!e.includes("in")&&!e.includes("out")&&!t,r=n||e.includes("in")||["enter"].includes(t),s=n||e.includes("out")||["leave"].includes(t);e.includes("in")&&!n&&(e=e.filter((d,M)=>M<e.indexOf("out"))),e.includes("out")&&!n&&(e=e.filter((d,M)=>M>e.indexOf("out")));let a=!e.includes("opacity")&&!e.includes("scale"),o=a||e.includes("opacity"),l=a||e.includes("scale"),c=o?0:1,u=l?lr(e,"scale",95)/100:1,h=lr(e,"delay",0)/1e3,f=lr(e,"origin","center"),p="opacity, transform",g=lr(e,"duration",150)/1e3,_=lr(e,"duration",75)/1e3,m="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(i._x_transition.enter.during={transformOrigin:f,transitionDelay:`${h}s`,transitionProperty:p,transitionDuration:`${g}s`,transitionTimingFunction:m},i._x_transition.enter.start={opacity:c,transform:`scale(${u})`},i._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(i._x_transition.leave.during={transformOrigin:f,transitionDelay:`${h}s`,transitionProperty:p,transitionDuration:`${_}s`,transitionTimingFunction:m},i._x_transition.leave.start={opacity:1,transform:"scale(1)"},i._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function Th(i,e,t={}){i._x_transition||(i._x_transition={enter:{during:t,start:t,end:t},leave:{during:t,start:t,end:t},in(n=()=>{},r=()=>{}){Mo(i,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,r)},out(n=()=>{},r=()=>{}){Mo(i,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(i,e,t,n){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>r(t);if(e){i._x_transition&&(i._x_transition.enter||i._x_transition.leave)?i._x_transition.enter&&(Object.entries(i._x_transition.enter.during).length||Object.entries(i._x_transition.enter.start).length||Object.entries(i._x_transition.enter.end).length)?i._x_transition.in(t):s():i._x_transition?i._x_transition.in(t):s();return}i._x_hidePromise=i._x_transition?new Promise((a,o)=>{i._x_transition.out(()=>{},()=>a(n)),i._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let a=wh(i);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(i)):r(()=>{let o=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(o)]).then(([u])=>u());return delete l._x_hidePromise,delete l._x_hideChildren,c};o(i).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function wh(i){let e=i.parentNode;if(e)return e._x_hidePromise?e:wh(e)}function Mo(i,e,{during:t,start:n,end:r}={},s=()=>{},a=()=>{}){if(i._x_transitioning&&i._x_transitioning.cancel(),Object.keys(t).length===0&&Object.keys(n).length===0&&Object.keys(r).length===0){s(),a();return}let o,l,c;lm(i,{start(){o=e(i,n)},during(){l=e(i,t)},before:s,end(){o(),c=e(i,r)},after:a,cleanup(){l(),c()}})}function lm(i,e){let t,n,r,s=yo(()=>{gt(()=>{t=!0,n||e.before(),r||(e.end(),xo()),e.after(),i.isConnected&&e.cleanup(),delete i._x_transitioning})});i._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:yo(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},gt(()=>{e.start(),e.during()}),tm(),requestAnimationFrame(()=>{if(t)return;let a=Number(getComputedStyle(i).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,o=Number(getComputedStyle(i).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(i).animationDuration.replace("s",""))*1e3),gt(()=>{e.before()}),n=!0,requestAnimationFrame(()=>{t||(gt(()=>{e.end()}),xo(),setTimeout(i._x_transitioning.finish,a+o),r=!0)})})}function lr(i,e,t){if(i.indexOf(e)===-1)return t;const n=i[i.indexOf(e)+1];if(!n||e==="scale"&&isNaN(n))return t;if(e==="duration"||e==="delay"){let r=n.match(/([0-9]+)ms/);if(r)return r[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(i[i.indexOf(e)+2])?[n,i[i.indexOf(e)+2]].join(" "):n}var Lr=!1;function Vr(i,e=()=>{}){return(...t)=>Lr?e(...t):i(...t)}function cm(i){return(...e)=>Lr&&i(...e)}function um(i,e){e._x_dataStack||(e._x_dataStack=i._x_dataStack),Lr=!0,fm(()=>{hm(e)}),Lr=!1}function hm(i){let e=!1;kn(i,(n,r)=>{On(n,(s,a)=>{if(e&&Qp(s))return a();e=!0,r(s,a)})})}function fm(i){let e=Qi;Nl((t,n)=>{let r=e(t);return kr(r),()=>{}}),i(),Nl(e)}function Ah(i,e,t,n=[]){switch(i._x_bindings||(i._x_bindings=Ji({})),i._x_bindings[e]=t,e=n.includes("camel")?ym(e):e,e){case"value":dm(i,t);break;case"style":mm(i,t);break;case"class":pm(i,t);break;case"selected":case"checked":gm(i,e,t);break;default:Rh(i,e,t);break}}function dm(i,e){if(i.type==="radio")i.attributes.value===void 0&&(i.value=e),window.fromModel&&(i.checked=Bl(i.value,e));else if(i.type==="checkbox")Number.isInteger(e)?i.value=e:!Number.isInteger(e)&&!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?i.value=String(e):Array.isArray(e)?i.checked=e.some(t=>Bl(t,i.value)):i.checked=!!e;else if(i.tagName==="SELECT")xm(i,e);else{if(i.value===e)return;i.value=e}}function pm(i,e){i._x_undoAddedClasses&&i._x_undoAddedClasses(),i._x_undoAddedClasses=el(i,e)}function mm(i,e){i._x_undoAddedStyles&&i._x_undoAddedStyles(),i._x_undoAddedStyles=Xs(i,e)}function gm(i,e,t){Rh(i,e,t),vm(i,e,t)}function Rh(i,e,t){[null,void 0,!1].includes(t)&&Mm(e)?i.removeAttribute(e):(Ch(e)&&(t=e),_m(i,e,t))}function _m(i,e,t){i.getAttribute(e)!=t&&i.setAttribute(e,t)}function vm(i,e,t){i[e]!==t&&(i[e]=t)}function xm(i,e){const t=[].concat(e).map(n=>n+"");Array.from(i.options).forEach(n=>{n.selected=t.includes(n.value)})}function ym(i){return i.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function Bl(i,e){return i==e}function Ch(i){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(i)}function Mm(i){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(i)}function Em(i,e,t){if(i._x_bindings&&i._x_bindings[e]!==void 0)return i._x_bindings[e];let n=i.getAttribute(e);return n===null?typeof t=="function"?t():t:n===""?!0:Ch(e)?!![e,"true"].includes(n):n}function Lh(i,e){var t;return function(){var n=this,r=arguments,s=function(){t=null,i.apply(n,r)};clearTimeout(t),t=setTimeout(s,e)}}function Ph(i,e){let t;return function(){let n=this,r=arguments;t||(i.apply(n,r),t=!0,setTimeout(()=>t=!1,e))}}function Sm(i){(Array.isArray(i)?i:[i]).forEach(t=>t(Gr))}var Kn={},kl=!1;function bm(i,e){if(kl||(Kn=Ji(Kn),kl=!0),e===void 0)return Kn[i];Kn[i]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&Kn[i].init(),rh(Kn[i])}function Tm(){return Kn}var Dh={};function wm(i,e){let t=typeof e!="function"?()=>e:e;i instanceof Element?Ih(i,t()):Dh[i]=t}function Am(i){return Object.entries(Dh).forEach(([e,t])=>{Object.defineProperty(i,e,{get(){return(...n)=>t(...n)}})}),i}function Ih(i,e,t){let n=[];for(;n.length;)n.pop()();let r=Object.entries(e).map(([a,o])=>({name:a,value:o})),s=ch(r);r=r.map(a=>s.find(o=>o.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),Ko(i,r,t).map(a=>{n.push(a.runCleanups),a()})}var Uh={};function Rm(i,e){Uh[i]=e}function Cm(i,e){return Object.entries(Uh).forEach(([t,n])=>{Object.defineProperty(i,t,{get(){return(...r)=>n.bind(e)(...r)},enumerable:!1})}),i}var Lm={get reactive(){return Ji},get release(){return kr},get effect(){return Qi},get raw(){return $u},version:"3.12.2",flushAndStopDeferringMutations:kp,dontAutoEvaluateFunctions:Vp,disableEffectScheduling:Lp,startObservingMutations:Xo,stopObservingMutations:nh,setReactivityEngine:Pp,closestDataStack:Wi,skipDuringClone:Vr,onlyDuringClone:cm,addRootSelector:Mh,addInitSelector:Eh,addScopeToNode:zr,deferMutations:Bp,mapAttributes:$o,evaluateLater:Rt,interceptInit:em,setEvaluator:Gp,mergeProxies:Hr,findClosest:Ws,closestRoot:Gs,destroyTree:bh,interceptor:sh,transition:Mo,setStyles:Xs,mutateDom:gt,directive:ct,throttle:Ph,debounce:Lh,evaluate:ki,initTree:kn,nextTick:Qo,prefixed:er,prefix:qp,plugin:Sm,magic:tn,store:bm,start:Jp,clone:um,bound:Em,$data:ih,walk:On,data:Rm,bind:wm},Gr=Lm;function Pm(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}var Dm=Object.freeze({}),Nh=Object.assign,Im=Object.prototype.hasOwnProperty,js=(i,e)=>Im.call(i,e),ii=Array.isArray,Er=i=>Fh(i)==="[object Map]",Um=i=>typeof i=="string",tl=i=>typeof i=="symbol",qs=i=>i!==null&&typeof i=="object",Nm=Object.prototype.toString,Fh=i=>Nm.call(i),Oh=i=>Fh(i).slice(8,-1),nl=i=>Um(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Fm=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Om=Fm(i=>i.charAt(0).toUpperCase()+i.slice(1)),Bh=(i,e)=>i!==e&&(i===i||e===e),Eo=new WeakMap,cr=[],sn,ri=Symbol("iterate"),So=Symbol("Map key iterate");function Bm(i){return i&&i._isEffect===!0}function km(i,e=Dm){Bm(i)&&(i=i.raw);const t=Vm(i,e);return e.lazy||t(),t}function zm(i){i.active&&(kh(i),i.options.onStop&&i.options.onStop(),i.active=!1)}var Hm=0;function Vm(i,e){const t=function(){if(!t.active)return i();if(!cr.includes(t)){kh(t);try{return Wm(),cr.push(t),sn=t,i()}finally{cr.pop(),zh(),sn=cr[cr.length-1]}}};return t.id=Hm++,t.allowRecurse=!!e.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=i,t.deps=[],t.options=e,t}function kh(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}var Xi=!0,il=[];function Gm(){il.push(Xi),Xi=!1}function Wm(){il.push(Xi),Xi=!0}function zh(){const i=il.pop();Xi=i===void 0?!0:i}function en(i,e,t){if(!Xi||sn===void 0)return;let n=Eo.get(i);n||Eo.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=new Set),r.has(sn)||(r.add(sn),sn.deps.push(r),sn.options.onTrack&&sn.options.onTrack({effect:sn,target:i,type:e,key:t}))}function zn(i,e,t,n,r,s){const a=Eo.get(i);if(!a)return;const o=new Set,l=u=>{u&&u.forEach(h=>{(h!==sn||h.allowRecurse)&&o.add(h)})};if(e==="clear")a.forEach(l);else if(t==="length"&&ii(i))a.forEach((u,h)=>{(h==="length"||h>=n)&&l(u)});else switch(t!==void 0&&l(a.get(t)),e){case"add":ii(i)?nl(t)&&l(a.get("length")):(l(a.get(ri)),Er(i)&&l(a.get(So)));break;case"delete":ii(i)||(l(a.get(ri)),Er(i)&&l(a.get(So)));break;case"set":Er(i)&&l(a.get(ri));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:i,key:t,type:e,newValue:n,oldValue:r,oldTarget:s}),u.options.scheduler?u.options.scheduler(u):u()};o.forEach(c)}var Xm=Pm("__proto__,__v_isRef,__isVue"),Hh=new Set(Object.getOwnPropertyNames(Symbol).map(i=>Symbol[i]).filter(tl)),jm=Ys(),qm=Ys(!1,!0),Ym=Ys(!0),Km=Ys(!0,!0),Ls={};["includes","indexOf","lastIndexOf"].forEach(i=>{const e=Array.prototype[i];Ls[i]=function(...t){const n=Je(this);for(let s=0,a=this.length;s<a;s++)en(n,"get",s+"");const r=e.apply(n,t);return r===-1||r===!1?e.apply(n,t.map(Je)):r}});["push","pop","shift","unshift","splice"].forEach(i=>{const e=Array.prototype[i];Ls[i]=function(...t){Gm();const n=e.apply(this,t);return zh(),n}});function Ys(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_raw"&&s===(i?e?sg:nf:e?rg:tf).get(n))return n;const a=ii(n);if(!i&&a&&js(Ls,r))return Reflect.get(Ls,r,s);const o=Reflect.get(n,r,s);return(tl(r)?Hh.has(r):Xm(r))||(i||en(n,"get",r),e)?o:bo(o)?!a||!nl(r)?o.value:o:qs(o)?i?rf(o):ol(o):o}}var $m=Vh(),Zm=Vh(!0);function Vh(i=!1){return function(t,n,r,s){let a=t[n];if(!i&&(r=Je(r),a=Je(a),!ii(t)&&bo(a)&&!bo(r)))return a.value=r,!0;const o=ii(t)&&nl(n)?Number(n)<t.length:js(t,n),l=Reflect.set(t,n,r,s);return t===Je(s)&&(o?Bh(r,a)&&zn(t,"set",n,r,a):zn(t,"add",n,r)),l}}function Jm(i,e){const t=js(i,e),n=i[e],r=Reflect.deleteProperty(i,e);return r&&t&&zn(i,"delete",e,void 0,n),r}function Qm(i,e){const t=Reflect.has(i,e);return(!tl(e)||!Hh.has(e))&&en(i,"has",e),t}function eg(i){return en(i,"iterate",ii(i)?"length":ri),Reflect.ownKeys(i)}var Gh={get:jm,set:$m,deleteProperty:Jm,has:Qm,ownKeys:eg},Wh={get:Ym,set(i,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,i),!0},deleteProperty(i,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,i),!0}};Nh({},Gh,{get:qm,set:Zm});Nh({},Wh,{get:Km});var rl=i=>qs(i)?ol(i):i,sl=i=>qs(i)?rf(i):i,al=i=>i,Ks=i=>Reflect.getPrototypeOf(i);function $s(i,e,t=!1,n=!1){i=i.__v_raw;const r=Je(i),s=Je(e);e!==s&&!t&&en(r,"get",e),!t&&en(r,"get",s);const{has:a}=Ks(r),o=n?al:t?sl:rl;if(a.call(r,e))return o(i.get(e));if(a.call(r,s))return o(i.get(s));i!==r&&i.get(e)}function Zs(i,e=!1){const t=this.__v_raw,n=Je(t),r=Je(i);return i!==r&&!e&&en(n,"has",i),!e&&en(n,"has",r),i===r?t.has(i):t.has(i)||t.has(r)}function Js(i,e=!1){return i=i.__v_raw,!e&&en(Je(i),"iterate",ri),Reflect.get(i,"size",i)}function Xh(i){i=Je(i);const e=Je(this);return Ks(e).has.call(e,i)||(e.add(i),zn(e,"add",i,i)),this}function jh(i,e){e=Je(e);const t=Je(this),{has:n,get:r}=Ks(t);let s=n.call(t,i);s?ef(t,n,i):(i=Je(i),s=n.call(t,i));const a=r.call(t,i);return t.set(i,e),s?Bh(e,a)&&zn(t,"set",i,e,a):zn(t,"add",i,e),this}function qh(i){const e=Je(this),{has:t,get:n}=Ks(e);let r=t.call(e,i);r?ef(e,t,i):(i=Je(i),r=t.call(e,i));const s=n?n.call(e,i):void 0,a=e.delete(i);return r&&zn(e,"delete",i,void 0,s),a}function Yh(){const i=Je(this),e=i.size!==0,t=Er(i)?new Map(i):new Set(i),n=i.clear();return e&&zn(i,"clear",void 0,void 0,t),n}function Qs(i,e){return function(n,r){const s=this,a=s.__v_raw,o=Je(a),l=e?al:i?sl:rl;return!i&&en(o,"iterate",ri),a.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Yr(i,e,t){return function(...n){const r=this.__v_raw,s=Je(r),a=Er(s),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=r[i](...n),u=t?al:e?sl:rl;return!e&&en(s,"iterate",l?So:ri),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function In(i){return function(...e){{const t=e[0]?`on key "${e[0]}" `:"";console.warn(`${Om(i)} operation ${t}failed: target is readonly.`,Je(this))}return i==="delete"?!1:this}}var Kh={get(i){return $s(this,i)},get size(){return Js(this)},has:Zs,add:Xh,set:jh,delete:qh,clear:Yh,forEach:Qs(!1,!1)},$h={get(i){return $s(this,i,!1,!0)},get size(){return Js(this)},has:Zs,add:Xh,set:jh,delete:qh,clear:Yh,forEach:Qs(!1,!0)},Zh={get(i){return $s(this,i,!0)},get size(){return Js(this,!0)},has(i){return Zs.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Qs(!0,!1)},Jh={get(i){return $s(this,i,!0,!0)},get size(){return Js(this,!0)},has(i){return Zs.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Qs(!0,!0)},tg=["keys","values","entries",Symbol.iterator];tg.forEach(i=>{Kh[i]=Yr(i,!1,!1),Zh[i]=Yr(i,!0,!1),$h[i]=Yr(i,!1,!0),Jh[i]=Yr(i,!0,!0)});function Qh(i,e){const t=e?i?Jh:$h:i?Zh:Kh;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(js(t,r)&&r in n?t:n,r,s)}var ng={get:Qh(!1,!1)},ig={get:Qh(!0,!1)};function ef(i,e,t){const n=Je(t);if(n!==t&&e.call(i,n)){const r=Oh(i);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var tf=new WeakMap,rg=new WeakMap,nf=new WeakMap,sg=new WeakMap;function ag(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function og(i){return i.__v_skip||!Object.isExtensible(i)?0:ag(Oh(i))}function ol(i){return i&&i.__v_isReadonly?i:sf(i,!1,Gh,ng,tf)}function rf(i){return sf(i,!0,Wh,ig,nf)}function sf(i,e,t,n,r){if(!qs(i))return console.warn(`value cannot be made reactive: ${String(i)}`),i;if(i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const a=og(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return r.set(i,o),o}function Je(i){return i&&Je(i.__v_raw)||i}function bo(i){return!!(i&&i.__v_isRef===!0)}tn("nextTick",()=>Qo);tn("dispatch",i=>Mr.bind(Mr,i));tn("watch",(i,{evaluateLater:e,effect:t})=>(n,r)=>{let s=e(n),a=!0,o,l=t(()=>s(c=>{JSON.stringify(c),a?o=c:queueMicrotask(()=>{r(c,o),o=c}),a=!1}));i._x_effects.delete(l)});tn("store",Tm);tn("data",i=>ih(i));tn("root",i=>Gs(i));tn("refs",i=>(i._x_refs_proxy||(i._x_refs_proxy=Hr(lg(i))),i._x_refs_proxy));function lg(i){let e=[],t=i;for(;t;)t._x_refs&&e.push(t._x_refs),t=t.parentNode;return e}var _a={};function af(i){return _a[i]||(_a[i]=0),++_a[i]}function cg(i,e){return Ws(i,t=>{if(t._x_ids&&t._x_ids[e])return!0})}function ug(i,e){i._x_ids||(i._x_ids={}),i._x_ids[e]||(i._x_ids[e]=af(e))}tn("id",i=>(e,t=null)=>{let n=cg(i,e),r=n?n._x_ids[e]:af(e);return t?`${e}-${r}-${t}`:`${e}-${r}`});tn("el",i=>i);of("Focus","focus","focus");of("Persist","persist","persist");function of(i,e,t){tn(e,n=>Bn(`You can't use [$${directiveName}] without first installing the "${i}" plugin here: https://alpinejs.dev/plugins/${t}`,n))}function hg({get:i,set:e},{get:t,set:n}){let r=!0,s,a,o=Qi(()=>{let l,c;r?(l=i(),n(l),c=t(),r=!1):(l=i(),c=t(),a=JSON.stringify(l),JSON.stringify(c),a!==s?(c=t(),n(l),c=l):(e(c),l=c)),s=JSON.stringify(l),JSON.stringify(c)});return()=>{kr(o)}}ct("modelable",(i,{expression:e},{effect:t,evaluateLater:n,cleanup:r})=>{let s=n(e),a=()=>{let u;return s(h=>u=h),u},o=n(`${e} = __placeholder`),l=u=>o(()=>{},{scope:{__placeholder:u}}),c=a();l(c),queueMicrotask(()=>{if(!i._x_model)return;i._x_removeModelListeners.default();let u=i._x_model.get,h=i._x_model.set,f=hg({get(){return u()},set(p){h(p)}},{get(){return a()},set(p){l(p)}});r(f)})});var fg=document.createElement("div");ct("teleport",(i,{modifiers:e,expression:t},{cleanup:n})=>{i.tagName.toLowerCase()!=="template"&&Bn("x-teleport can only be used on a <template> tag",i);let r=Vr(()=>document.querySelector(t),()=>fg)();r||Bn(`Cannot find x-teleport element for selector: "${t}"`);let s=i.content.cloneNode(!0).firstElementChild;i._x_teleport=s,s._x_teleportBack=i,i._x_forwardEvents&&i._x_forwardEvents.forEach(a=>{s.addEventListener(a,o=>{o.stopPropagation(),i.dispatchEvent(new o.constructor(o.type,o))})}),zr(s,{},i),gt(()=>{e.includes("prepend")?r.parentNode.insertBefore(s,r):e.includes("append")?r.parentNode.insertBefore(s,r.nextSibling):r.appendChild(s),kn(s),s._x_ignore=!0}),n(()=>s.remove())});var lf=()=>{};lf.inline=(i,{modifiers:e},{cleanup:t})=>{e.includes("self")?i._x_ignoreSelf=!0:i._x_ignore=!0,t(()=>{e.includes("self")?delete i._x_ignoreSelf:delete i._x_ignore})};ct("ignore",lf);ct("effect",(i,{expression:e},{effect:t})=>t(Rt(i,e)));function To(i,e,t,n){let r=i,s=l=>n(l),a={},o=(l,c)=>u=>c(l,u);if(t.includes("dot")&&(e=dg(e)),t.includes("camel")&&(e=pg(e)),t.includes("passive")&&(a.passive=!0),t.includes("capture")&&(a.capture=!0),t.includes("window")&&(r=window),t.includes("document")&&(r=document),t.includes("debounce")){let l=t[t.indexOf("debounce")+1]||"invalid-wait",c=Ps(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Lh(s,c)}if(t.includes("throttle")){let l=t[t.indexOf("throttle")+1]||"invalid-wait",c=Ps(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Ph(s,c)}return t.includes("prevent")&&(s=o(s,(l,c)=>{c.preventDefault(),l(c)})),t.includes("stop")&&(s=o(s,(l,c)=>{c.stopPropagation(),l(c)})),t.includes("self")&&(s=o(s,(l,c)=>{c.target===i&&l(c)})),(t.includes("away")||t.includes("outside"))&&(r=document,s=o(s,(l,c)=>{i.contains(c.target)||c.target.isConnected!==!1&&(i.offsetWidth<1&&i.offsetHeight<1||i._x_isShown!==!1&&l(c))})),t.includes("once")&&(s=o(s,(l,c)=>{l(c),r.removeEventListener(e,s,a)})),s=o(s,(l,c)=>{gg(e)&&_g(c,t)||l(c)}),r.addEventListener(e,s,a),()=>{r.removeEventListener(e,s,a)}}function dg(i){return i.replace(/-/g,".")}function pg(i){return i.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function Ps(i){return!Array.isArray(i)&&!isNaN(i)}function mg(i){return[" ","_"].includes(i)?i:i.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function gg(i){return["keydown","keyup"].includes(i)}function _g(i,e){let t=e.filter(s=>!["window","document","prevent","stop","once","capture"].includes(s));if(t.includes("debounce")){let s=t.indexOf("debounce");t.splice(s,Ps((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.includes("throttle")){let s=t.indexOf("throttle");t.splice(s,Ps((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.length===0||t.length===1&&zl(i.key).includes(t[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(s=>t.includes(s));return t=t.filter(s=>!r.includes(s)),!(r.length>0&&r.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),i[`${a}Key`])).length===r.length&&zl(i.key).includes(t[0]))}function zl(i){if(!i)return[];i=mg(i);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"=",minus:"-",underscore:"_"};return e[i]=i,Object.keys(e).map(t=>{if(e[t]===i)return t}).filter(t=>t)}ct("model",(i,{modifiers:e,expression:t},{effect:n,cleanup:r})=>{let s=i;e.includes("parent")&&(s=i.parentNode);let a=Rt(s,t),o;typeof t=="string"?o=Rt(s,`${t} = __placeholder`):typeof t=="function"&&typeof t()=="string"?o=Rt(s,`${t()} = __placeholder`):o=()=>{};let l=()=>{let f;return a(p=>f=p),Hl(f)?f.get():f},c=f=>{let p;a(g=>p=g),Hl(p)?p.set(f):o(()=>{},{scope:{__placeholder:f}})};typeof t=="string"&&i.type==="radio"&&gt(()=>{i.hasAttribute("name")||i.setAttribute("name",t)});var u=i.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(i.type)||e.includes("lazy")?"change":"input";let h=Lr?()=>{}:To(i,u,e,f=>{c(vg(i,e,f,l()))});if(e.includes("fill")&&[null,""].includes(l())&&i.dispatchEvent(new Event(u,{})),i._x_removeModelListeners||(i._x_removeModelListeners={}),i._x_removeModelListeners.default=h,r(()=>i._x_removeModelListeners.default()),i.form){let f=To(i.form,"reset",[],p=>{Qo(()=>i._x_model&&i._x_model.set(i.value))});r(()=>f())}i._x_model={get(){return l()},set(f){c(f)}},i._x_forceModelUpdate=f=>{f=f===void 0?l():f,f===void 0&&typeof t=="string"&&t.match(/\./)&&(f=""),window.fromModel=!0,gt(()=>Ah(i,"value",f)),delete window.fromModel},n(()=>{let f=l();e.includes("unintrusive")&&document.activeElement.isSameNode(i)||i._x_forceModelUpdate(f)})});function vg(i,e,t,n){return gt(()=>{if(t instanceof CustomEvent&&t.detail!==void 0)return t.detail??t.target.value;if(i.type==="checkbox")if(Array.isArray(n)){let r=e.includes("number")?va(t.target.value):t.target.value;return t.target.checked?n.concat([r]):n.filter(s=>!xg(s,r))}else return t.target.checked;else{if(i.tagName.toLowerCase()==="select"&&i.multiple)return e.includes("number")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return va(s)}):Array.from(t.target.selectedOptions).map(r=>r.value||r.text);{let r=t.target.value;return e.includes("number")?va(r):e.includes("trim")?r.trim():r}}})}function va(i){let e=i?parseFloat(i):null;return yg(e)?e:i}function xg(i,e){return i==e}function yg(i){return!Array.isArray(i)&&!isNaN(i)}function Hl(i){return i!==null&&typeof i=="object"&&typeof i.get=="function"&&typeof i.set=="function"}ct("cloak",i=>queueMicrotask(()=>gt(()=>i.removeAttribute(er("cloak")))));Eh(()=>`[${er("init")}]`);ct("init",Vr((i,{expression:e},{evaluate:t})=>typeof e=="string"?!!e.trim()&&t(e,{},!1):t(e,{},!1)));ct("text",(i,{expression:e},{effect:t,evaluateLater:n})=>{let r=n(e);t(()=>{r(s=>{gt(()=>{i.textContent=s})})})});ct("html",(i,{expression:e},{effect:t,evaluateLater:n})=>{let r=n(e);t(()=>{r(s=>{gt(()=>{i.innerHTML=s,i._x_ignoreSelf=!0,kn(i),delete i._x_ignoreSelf})})})});$o(fh(":",dh(er("bind:"))));ct("bind",(i,{value:e,modifiers:t,expression:n,original:r},{effect:s})=>{if(!e){let o={};Am(o),Rt(i,n)(c=>{Ih(i,c,r)},{scope:o});return}if(e==="key")return Mg(i,n);let a=Rt(i,n);s(()=>a(o=>{o===void 0&&typeof n=="string"&&n.match(/\./)&&(o=""),gt(()=>Ah(i,e,o,t))}))});function Mg(i,e){i._x_keyExpression=e}Mh(()=>`[${er("data")}]`);ct("data",Vr((i,{expression:e},{cleanup:t})=>{e=e===""?"{}":e;let n={};po(n,i);let r={};Cm(r,n);let s=ki(i,e,{scope:r});(s===void 0||s===!0)&&(s={}),po(s,i);let a=Ji(s);rh(a);let o=zr(i,a);a.init&&ki(i,a.init),t(()=>{a.destroy&&ki(i,a.destroy),o()})}));ct("show",(i,{modifiers:e,expression:t},{effect:n})=>{let r=Rt(i,t);i._x_doHide||(i._x_doHide=()=>{gt(()=>{i.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),i._x_doShow||(i._x_doShow=()=>{gt(()=>{i.style.length===1&&i.style.display==="none"?i.removeAttribute("style"):i.style.removeProperty("display")})});let s=()=>{i._x_doHide(),i._x_isShown=!1},a=()=>{i._x_doShow(),i._x_isShown=!0},o=()=>setTimeout(a),l=yo(h=>h?a():s(),h=>{typeof i._x_toggleAndCascadeWithTransitions=="function"?i._x_toggleAndCascadeWithTransitions(i,h,a,s):h?o():s()}),c,u=!0;n(()=>r(h=>{!u&&h===c||(e.includes("immediate")&&(h?o():s()),l(h),c=h,u=!1)}))});ct("for",(i,{expression:e},{effect:t,cleanup:n})=>{let r=Sg(e),s=Rt(i,r.items),a=Rt(i,i._x_keyExpression||"index");i._x_prevKeys=[],i._x_lookup={},t(()=>Eg(i,r,s,a)),n(()=>{Object.values(i._x_lookup).forEach(o=>o.remove()),delete i._x_prevKeys,delete i._x_lookup})});function Eg(i,e,t,n){let r=a=>typeof a=="object"&&!Array.isArray(a),s=i;t(a=>{bg(a)&&a>=0&&(a=Array.from(Array(a).keys(),m=>m+1)),a===void 0&&(a=[]);let o=i._x_lookup,l=i._x_prevKeys,c=[],u=[];if(r(a))a=Object.entries(a).map(([m,d])=>{let M=Vl(e,d,m,a);n(x=>u.push(x),{scope:{index:m,...M}}),c.push(M)});else for(let m=0;m<a.length;m++){let d=Vl(e,a[m],m,a);n(M=>u.push(M),{scope:{index:m,...d}}),c.push(d)}let h=[],f=[],p=[],g=[];for(let m=0;m<l.length;m++){let d=l[m];u.indexOf(d)===-1&&p.push(d)}l=l.filter(m=>!p.includes(m));let _="template";for(let m=0;m<u.length;m++){let d=u[m],M=l.indexOf(d);if(M===-1)l.splice(m,0,d),h.push([_,m]);else if(M!==m){let x=l.splice(m,1)[0],T=l.splice(M-1,1)[0];l.splice(m,0,T),l.splice(M,0,x),f.push([x,T])}else g.push(d);_=d}for(let m=0;m<p.length;m++){let d=p[m];o[d]._x_effects&&o[d]._x_effects.forEach(Ku),o[d].remove(),o[d]=null,delete o[d]}for(let m=0;m<f.length;m++){let[d,M]=f[m],x=o[d],T=o[M],E=document.createElement("div");gt(()=>{T||Bn('x-for ":key" is undefined or invalid',s),T.after(E),x.after(T),T._x_currentIfEl&&T.after(T._x_currentIfEl),E.before(x),x._x_currentIfEl&&x.after(x._x_currentIfEl),E.remove()}),T._x_refreshXForScope(c[u.indexOf(M)])}for(let m=0;m<h.length;m++){let[d,M]=h[m],x=d==="template"?s:o[d];x._x_currentIfEl&&(x=x._x_currentIfEl);let T=c[M],E=u[M],A=document.importNode(s.content,!0).firstElementChild,D=Ji(T);zr(A,D,s),A._x_refreshXForScope=O=>{Object.entries(O).forEach(([v,b])=>{D[v]=b})},gt(()=>{x.after(A),kn(A)}),typeof E=="object"&&Bn("x-for key cannot be an object, it must be a string or an integer",s),o[E]=A}for(let m=0;m<g.length;m++)o[g[m]]._x_refreshXForScope(c[u.indexOf(g[m])]);s._x_prevKeys=u})}function Sg(i){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,t=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,r=i.match(n);if(!r)return;let s={};s.items=r[2].trim();let a=r[1].replace(t,"").trim(),o=a.match(e);return o?(s.item=a.replace(e,"").trim(),s.index=o[1].trim(),o[2]&&(s.collection=o[2].trim())):s.item=a,s}function Vl(i,e,t,n){let r={};return/^\[.*\]$/.test(i.item)&&Array.isArray(e)?i.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{r[a]=e[o]}):/^\{.*\}$/.test(i.item)&&!Array.isArray(e)&&typeof e=="object"?i.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{r[a]=e[a]}):r[i.item]=e,i.index&&(r[i.index]=t),i.collection&&(r[i.collection]=n),r}function bg(i){return!Array.isArray(i)&&!isNaN(i)}function cf(){}cf.inline=(i,{expression:e},{cleanup:t})=>{let n=Gs(i);n._x_refs||(n._x_refs={}),n._x_refs[e]=i,t(()=>delete n._x_refs[e])};ct("ref",cf);ct("if",(i,{expression:e},{effect:t,cleanup:n})=>{let r=Rt(i,e),s=()=>{if(i._x_currentIfEl)return i._x_currentIfEl;let o=i.content.cloneNode(!0).firstElementChild;return zr(o,{},i),gt(()=>{i.after(o),kn(o)}),i._x_currentIfEl=o,i._x_undoIf=()=>{On(o,l=>{l._x_effects&&l._x_effects.forEach(Ku)}),o.remove(),delete i._x_currentIfEl},o},a=()=>{i._x_undoIf&&(i._x_undoIf(),delete i._x_undoIf)};t(()=>r(o=>{o?s():a()})),n(()=>i._x_undoIf&&i._x_undoIf())});ct("id",(i,{expression:e},{evaluate:t})=>{t(e).forEach(r=>ug(i,r))});$o(fh("@",dh(er("on:"))));ct("on",Vr((i,{value:e,modifiers:t,expression:n},{cleanup:r})=>{let s=n?Rt(i,n):()=>{};i.tagName.toLowerCase()==="template"&&(i._x_forwardEvents||(i._x_forwardEvents=[]),i._x_forwardEvents.includes(e)||i._x_forwardEvents.push(e));let a=To(i,e,t,o=>{s(()=>{},{scope:{$event:o},params:[o]})});r(()=>a())}));ea("Collapse","collapse","collapse");ea("Intersect","intersect","intersect");ea("Focus","trap","focus");ea("Mask","mask","mask");function ea(i,e,t){ct(e,n=>Bn(`You can't use [x-${e}] without first installing the "${i}" plugin here: https://alpinejs.dev/plugins/${t}`,n))}Gr.setEvaluator(lh);Gr.setReactivityEngine({reactive:ol,effect:km,release:zm,raw:Je});var Tg=Gr,uf=Tg;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="152",fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wg=0,Gl=1,Ag=2,hf=1,Rg=2,yn=3,Hn=0,Pt=1,Mn=2,Fn=0,zi=1,Wl=2,Xl=3,jl=4,Cg=5,Fi=100,Lg=101,Pg=102,ql=103,Yl=104,Dg=200,Ig=201,Ug=202,Ng=203,ff=204,df=205,Fg=206,Og=207,Bg=208,kg=209,zg=210,Hg=0,Vg=1,Gg=2,wo=3,Wg=4,Xg=5,jg=6,qg=7,ta=0,Yg=1,Kg=2,bn=0,$g=1,Zg=2,Jg=3,Qg=4,e_=5,pf=300,ji=301,qi=302,Ds=303,Ao=304,na=306,Pr=1e3,Nt=1001,Ro=1002,_t=1003,Kl=1004,xa=1005,Bt=1006,t_=1007,Dr=1008,li=1009,n_=1010,i_=1011,mf=1012,r_=1013,ei=1014,Un=1015,Ir=1016,s_=1017,a_=1018,Hi=1020,o_=1021,zt=1023,l_=1024,c_=1025,si=1026,Yi=1027,u_=1028,h_=1029,f_=1030,d_=1031,p_=1033,ya=33776,Ma=33777,Ea=33778,Sa=33779,$l=35840,Zl=35841,Jl=35842,Ql=35843,m_=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,ac=37812,oc=37813,lc=37814,cc=37815,uc=37816,hc=37817,fc=37818,dc=37819,pc=37820,mc=37821,ba=36492,g_=36283,gc=36284,_c=36285,vc=36286,Is=2300,Us=2301,Ta=2302,xc=2400,yc=2401,Mc=2402,__=2500,gf=3e3,ai=3001,v_=3200,x_=3201,cl=0,y_=1,oi="",Ce="srgb",un="srgb-linear",_f="display-p3",wa=7680,M_=519,Co=35044,Ec="300 es",Lo=1035;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const Sr=Math.PI/180,Ki=180/Math.PI;function Jt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function ul(i,e){return(i%e+e)%e}function E_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function S_(i,e,t){return i!==e?(t-i)/(e-i):0}function br(i,e,t){return(1-t)*i+t*e}function b_(i,e,t,n){return br(i,e,1-Math.exp(-t*n))}function T_(i,e=1){return e-Math.abs(ul(i,e*2)-e)}function w_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function A_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function R_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function C_(i,e){return i+Math.random()*(e-i)}function L_(i){return i*(.5-Math.random())}function P_(i){i!==void 0&&(Sc=i);let e=Sc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function D_(i){return i*Sr}function I_(i){return i*Ki}function Po(i){return(i&i-1)===0&&i!==0}function vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function U_(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const on={DEG2RAD:Sr,RAD2DEG:Ki,generateUUID:Jt,clamp:mt,euclideanModulo:ul,mapLinear:E_,inverseLerp:S_,lerp:br,damp:b_,pingpong:T_,smoothstep:w_,smootherstep:A_,randInt:R_,randFloat:C_,randFloatSpread:L_,seededRandom:P_,degToRad:D_,radToDeg:I_,isPowerOfTwo:Po,ceilPowerOfTwo:vf,floorPowerOfTwo:xf,setQuaternionFromProperEuler:U_,normalize:Ke,denormalize:En};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],M=r[1],x=r[4],T=r[7],E=r[2],A=r[5],D=r[8];return s[0]=a*_+o*M+l*E,s[3]=a*m+o*x+l*A,s[6]=a*d+o*T+l*D,s[1]=c*_+u*M+h*E,s[4]=c*m+u*x+h*A,s[7]=c*d+u*T+h*D,s[2]=f*_+p*M+g*E,s[5]=f*m+p*x+g*A,s[8]=f*d+p*T+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new ze;function yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const bc={};function Tr(i){i in bc||(bc[i]=!0,console.warn(i))}function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const N_=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),F_=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function O_(i){return i.convertSRGBToLinear().applyMatrix3(F_)}function B_(i){return i.applyMatrix3(N_).convertLinearToSRGB()}const k_={[un]:i=>i,[Ce]:i=>i.convertSRGBToLinear(),[_f]:O_},z_={[un]:i=>i,[Ce]:i=>i.convertLinearToSRGB(),[_f]:B_},qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return un},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=k_[e],r=z_[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let pi;class Mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=Ur("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ef{constructor(e=null){this.isSource=!0,this.uuid=Jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ca(r[a].image)):s.push(Ca(r[a]))}else s=Ca(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H_=0;class vt extends hi{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Nt,r=Nt,s=Bt,a=Dr,o=zt,l=li,c=vt.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Jt(),this.name="",this.source=new Ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ai?Ce:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pr:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pr:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?ai:gf}set encoding(e){Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ai?Ce:oi}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=pf;vt.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,t=0,n=0,r=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(p+1)/2,E=(d+1)/2,A=(u+f)/4,D=(h+_)/4,O=(g+m)/4;return x>T&&x>E?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=D/n):T>E?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=A/r,s=O/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=D/s,r=O/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ci extends hi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?Ce:oi),this.texture=new vt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ef(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sf extends vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class V_ extends vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,d*M);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const T=o*M;if(l=l*m+f*T,c=c*m+p*T,u=u*m+g*T,h=h*m+_*T,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,h=l*r+s*n-a*t,f=-s*t-a*n-o*r;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new L,Tc=new Vt;class tr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),mi.copy(e.boundingBox),mi.applyMatrix4(e.matrixWorld),this.union(mi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)pn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(pn)}else r.boundingBox===null&&r.computeBoundingBox(),mi.copy(r.boundingBox),mi.applyMatrix4(e.matrixWorld),this.union(mi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Kr.subVectors(this.max,ur),gi.subVectors(e.a,ur),_i.subVectors(e.b,ur),vi.subVectors(e.c,ur),An.subVectors(_i,gi),Rn.subVectors(vi,_i),jn.subVectors(gi,vi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-jn.z,jn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,jn.z,0,-jn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-jn.y,jn.x,0];return!Pa(t,gi,_i,vi,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,gi,_i,vi,Kr))?!1:($r.crossVectors(An,Rn),t=[$r.x,$r.y,$r.z],Pa(t,gi,_i,vi,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new L,new L,new L,new L,new L,new L,new L,new L],pn=new L,mi=new tr,gi=new L,_i=new L,vi=new L,An=new L,Rn=new L,jn=new L,ur=new L,Kr=new L,$r=new L,qn=new L;function Pa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){qn.fromArray(i,s);const o=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const G_=new tr,hr=new L,Da=new L;class Wr{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):G_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(hr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Da)),this.expandByPoint(hr.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new L,Ia=new L,Zr=new L,Cn=new L,Ua=new L,Jr=new L,Na=new L;class hl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ia.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Ia);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Cn.dot(this.direction),l=-Cn.dot(Zr),c=Cn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ia).addScaledVector(Zr,f),p}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){Ua.subVectors(t,e),Jr.subVectors(n,e),Na.crossVectors(Ua,Jr);let a=this.direction.dot(Na),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(Jr.crossVectors(Cn,Jr));if(l<0)return null;const c=o*this.direction.dot(Ua.cross(Cn));if(c<0||l+c>a)return null;const u=-o*Cn.dot(Na);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,X_)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Ln.crossVectors(n,It),Ln.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Ln.crossVectors(n,It)),Ln.normalize(),Qr.crossVectors(It,Ln),r[0]=Ln.x,r[4]=Qr.x,r[8]=It.x,r[1]=Ln.y,r[5]=Qr.y,r[9]=It.y,r[2]=Ln.z,r[6]=Qr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],x=n[7],T=n[11],E=n[15],A=r[0],D=r[4],O=r[8],v=r[12],b=r[1],V=r[5],X=r[9],I=r[13],F=r[2],H=r[6],Q=r[10],j=r[14],B=r[3],te=r[7],W=r[11],ge=r[15];return s[0]=a*A+o*b+l*F+c*B,s[4]=a*D+o*V+l*H+c*te,s[8]=a*O+o*X+l*Q+c*W,s[12]=a*v+o*I+l*j+c*ge,s[1]=u*A+h*b+f*F+p*B,s[5]=u*D+h*V+f*H+p*te,s[9]=u*O+h*X+f*Q+p*W,s[13]=u*v+h*I+f*j+p*ge,s[2]=g*A+_*b+m*F+d*B,s[6]=g*D+_*V+m*H+d*te,s[10]=g*O+_*X+m*Q+d*W,s[14]=g*v+_*I+m*j+d*ge,s[3]=M*A+x*b+T*F+E*B,s[7]=M*D+x*V+T*H+E*te,s[11]=M*O+x*X+T*Q+E*W,s[15]=M*v+x*I+T*j+E*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*p-n*l*p)+_*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],M=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,x=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,T=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,E=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,A=t*M+n*x+r*T+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=M*D,e[1]=(_*f*s-h*m*s-_*r*p+n*m*p+h*r*d-n*f*d)*D,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*d+n*l*d)*D,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*p-n*l*p)*D,e[4]=x*D,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*D,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*d-t*l*d)*D,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*p+t*l*p)*D,e[8]=T*D,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*d-t*h*d)*D,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*d+t*o*d)*D,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*D,e[12]=E*D,e[13]=(u*_*r-g*h*r+g*n*f-t*_*f-u*n*m+t*h*m)*D,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*D,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,M=l*c,x=l*u,T=l*h,E=n.x,A=n.y,D=n.z;return r[0]=(1-(_+d))*E,r[1]=(p+T)*E,r[2]=(g-x)*E,r[3]=0,r[4]=(p-T)*A,r[5]=(1-(f+d))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+x)*D,r[9]=(m-M)*D,r[10]=(1-(f+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=xi.set(r[0],r[1],r[2]).length();const a=xi.set(r[4],r[5],r[6]).length(),o=xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const c=1/s,u=1/a,h=1/o;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),h=(t+e)*l,f=(n+r)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new L,Yt=new Se,W_=new L(0,0,0),X_=new L(1,1,1),Ln=new L,Qr=new L,It=new L,wc=new Se,Ac=new Vt;class Gt{constructor(e=0,t=0,n=0,r=Gt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gt.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j_=0;const Rc=new L,yi=new Vt,gn=new Se,es=new L,fr=new L,q_=new L,Y_=new Vt,Cc=new L(1,0,0),Lc=new L(0,1,0),Pc=new L(0,0,1),K_={type:"added"},Dc={type:"removed"};class Qe extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const e=new L,t=new Gt,n=new Vt,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new ze}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(fr,es,this.up):gn.lookAt(es,fr,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(gn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(K_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Dc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Qe.DEFAULT_UP=new L(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new L,_n=new L,Fa=new L,vn=new L,Mi=new L,Ei=new L,Ic=new L,Oa=new L,Ba=new L,ka=new L;let ts=!1;class kt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),_n.subVectors(n,t),Fa.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(_n),l=Kt.dot(Fa),c=_n.dot(_n),u=_n.dot(Fa),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,r,s,a,o,l){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,vn),l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),_n.subVectors(e,t),Kt.cross(_n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Kt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Mi.subVectors(r,n),Ei.subVectors(s,n),Oa.subVectors(e,n);const l=Mi.dot(Oa),c=Ei.dot(Oa);if(l<=0&&c<=0)return t.copy(n);Ba.subVectors(e,r);const u=Mi.dot(Ba),h=Ei.dot(Ba);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Mi,a);ka.subVectors(e,s);const p=Mi.dot(ka),g=Ei.dot(ka);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ei,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ic.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Ic,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(Mi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $_=0;class Vn extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Jt(),this.name="",this.type="Material",this.blending=zi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ff,this.blendDst=df,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={h:0,s:0,l:0},ns={h:0,s:0,l:0};function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ce){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=ul(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=za(a,s,e+1/3),this.g=za(a,s,e),this.b=za(a,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ce){const n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ce){return qt.fromWorkingColorSpace(Et.copy(this),e),Math.round(mt(Et.r*255,0,255))*65536+Math.round(mt(Et.g*255,0,255))*256+Math.round(mt(Et.b*255,0,255))}getHexString(e=Ce){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Ce){qt.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==Ce?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=n,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(ns);const n=br($t.h,ns.h,t),r=br($t.s,ns.s,t),s=br($t.l,ns.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Le;Le.NAMES=bf;class Tf extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new L,is=new we;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Co,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Co&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class dl extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wf extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Z_=0;const Ot=new Se,Ha=new Qe,Si=new L,Ut=new tr,dr=new tr,pt=new L;class Xt extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?wf:dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ut.min,dr.min),Ut.expandByPoint(pt),pt.addVectors(Ut.max,dr.max),Ut.expandByPoint(pt)):(Ut.expandByPoint(dr.min),Ut.expandByPoint(dr.max))}Ut.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pt.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),pt.add(Si)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new L,u[b]=new L;const h=new L,f=new L,p=new L,g=new we,_=new we,m=new we,d=new L,M=new L;function x(b,V,X){h.fromArray(r,b*3),f.fromArray(r,V*3),p.fromArray(r,X*3),g.fromArray(a,b*2),_.fromArray(a,V*2),m.fromArray(a,X*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(I),M.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),c[b].add(d),c[V].add(d),c[X].add(d),u[b].add(M),u[V].add(M),u[X].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,V=T.length;b<V;++b){const X=T[b],I=X.start,F=X.count;for(let H=I,Q=I+F;H<Q;H+=3)x(n[H+0],n[H+1],n[H+2])}const E=new L,A=new L,D=new L,O=new L;function v(b){D.fromArray(s,b*3),O.copy(D);const V=c[b];E.copy(V),E.sub(D.multiplyScalar(D.dot(V))).normalize(),A.crossVectors(O,V);const I=A.dot(u[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=I}for(let b=0,V=T.length;b<V;++b){const X=T[b],I=X.start,F=X.count;for(let H=I,Q=I+F;H<Q;H+=3)v(n[H+0]),v(n[H+1]),v(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new Se,rn=new hl,rs=new Wr,Nc=new L,bi=new L,Ti=new L,wi=new L,Va=new L,ss=new L,as=new we,os=new we,ls=new we,Fc=new L,Oc=new L,Bc=new L,cs=new L,us=new L;class cn extends Qe{constructor(e=new Xt,t=new Tf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Va.fromBufferAttribute(h,e),a?ss.addScaledVector(Va,u):ss.addScaledVector(Va.sub(t),u))}t.add(ss)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),rn.copy(e.ray).recast(e.near),!(rs.containsPoint(rn.origin)===!1&&(rn.intersectSphere(rs,Nc)===null||rn.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Uc.copy(s).invert(),rn.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[_.materialIndex],d=Math.max(_.start,f.start),M=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let x=d,T=M;x<T;x+=3){const E=a.getX(x),A=a.getX(x+1),D=a.getX(x+2);n=hs(this,m,e,rn,l,c,u,E,A,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const d=a.getX(_),M=a.getX(_+1),x=a.getX(_+2);n=hs(this,s,e,rn,l,c,u,d,M,x),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[_.materialIndex],d=Math.max(_.start,f.start),M=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let x=d,T=M;x<T;x+=3){const E=x,A=x+1,D=x+2;n=hs(this,m,e,rn,l,c,u,E,A,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const d=_,M=_+1,x=_+2;n=hs(this,s,e,rn,l,c,u,d,M,x),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function J_(i,e,t,n,r,s,a,o){let l;if(e.side===Pt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Hn,o),l===null)return null;us.copy(o),us.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(us);return c<t.near||c>t.far?null:{distance:c,point:us.clone(),object:i}}function hs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,bi),i.getVertexPosition(l,Ti),i.getVertexPosition(c,wi);const u=J_(i,e,t,n,bi,Ti,wi,cs);if(u){r&&(as.fromBufferAttribute(r,o),os.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,c),u.uv=kt.getInterpolation(cs,bi,Ti,wi,as,os,ls,new we)),s&&(as.fromBufferAttribute(s,o),os.fromBufferAttribute(s,l),ls.fromBufferAttribute(s,c),u.uv1=kt.getInterpolation(cs,bi,Ti,wi,as,os,ls,new we),u.uv2=u.uv1),a&&(Fc.fromBufferAttribute(a,o),Oc.fromBufferAttribute(a,l),Bc.fromBufferAttribute(a,c),u.normal=kt.getInterpolation(cs,bi,Ti,wi,Fc,Oc,Bc,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};kt.getNormal(bi,Ti,wi,h.normal),u.face=h}return u}class Xr extends Xt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function g(_,m,d,M,x,T,E,A,D,O,v){const b=T/D,V=E/O,X=T/2,I=E/2,F=A/2,H=D+1,Q=O+1;let j=0,B=0;const te=new L;for(let W=0;W<Q;W++){const ge=W*V-I;for(let ne=0;ne<H;ne++){const k=ne*b-X;te[_]=k*M,te[m]=ge*x,te[d]=F,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[d]=A>0?1:-1,u.push(te.x,te.y,te.z),h.push(ne/D),h.push(1-W/O),j+=1}}for(let W=0;W<O;W++)for(let ge=0;ge<D;ge++){const ne=f+ge+H*W,k=f+ge+H*(W+1),J=f+(ge+1)+H*(W+1),oe=f+(ge+1)+H*W;l.push(ne,k,oe),l.push(k,J,oe),B+=6}o.addGroup(p,B,v),p+=B,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=$i(i[t]);for(const r in n)e[r]=n[r]}return e}function Q_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Af(i){return i.getRenderTarget()===null?i.outputColorSpace:un}const e0={clone:$i,merge:wt};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rf extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends Rf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,Ri=1;class i0 extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new At(Ai,Ri,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new At(Ai,Ri,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new At(Ai,Ri,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new At(Ai,Ri,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new At(Ai,Ri,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new At(Ai,Ri,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Cf extends vt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r0 extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ai?Ce:oi),this.texture=new Cf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xr(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Fn});s.uniforms.tEquirect.value=t;const a=new cn(r,s),o=t.minFilter;return t.minFilter===Dr&&(t.minFilter=Bt),new i0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ga=new L,s0=new L,a0=new ze;class $n{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ga.subVectors(n,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||a0.getNormalMatrix(e),r=this.coplanarPoint(Ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Wr,fs=new L;class pl{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],_=n[11],m=n[12],d=n[13],M=n[14],x=n[15];return t[0].setComponents(o-r,h-l,_-f,x-m).normalize(),t[1].setComponents(o+r,h+l,_+f,x+m).normalize(),t[2].setComponents(o+s,h+c,_+p,x+d).normalize(),t[3].setComponents(o-s,h-c,_-p,x-d).normalize(),t[4].setComponents(o-a,h-u,_-g,x-M).normalize(),t[5].setComponents(o+a,h+u,_+g,x+M).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function o0(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ml extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*f-a;for(let x=0;x<c;x++){const T=x*h-s;g.push(T,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const x=M+c*d,T=M+c*(d+1),E=M+1+c*(d+1),A=M+1+c*d;p.push(x,T,A),p.push(T,E,A)}this.setIndex(p),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0="vec3 transformed = vec3( position );",m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,iv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ov=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hv=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_v=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$v=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ex=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:l0,alphamap_pars_fragment:c0,alphatest_fragment:u0,alphatest_pars_fragment:h0,aomap_fragment:f0,aomap_pars_fragment:d0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:_0,bumpmap_pars_fragment:v0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:E0,color_fragment:S0,color_pars_fragment:b0,color_pars_vertex:T0,color_vertex:w0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:L0,displacementmap_vertex:P0,emissivemap_fragment:D0,emissivemap_pars_fragment:I0,encodings_fragment:U0,encodings_pars_fragment:N0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:Z0,envmap_vertex:z0,fog_vertex:H0,fog_pars_vertex:V0,fog_fragment:G0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_fragment:j0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:K0,lights_pars_begin:$0,lights_toon_fragment:J0,lights_toon_pars_fragment:Q0,lights_phong_fragment:ev,lights_phong_pars_fragment:tv,lights_physical_fragment:nv,lights_physical_pars_fragment:iv,lights_fragment_begin:rv,lights_fragment_maps:sv,lights_fragment_end:av,logdepthbuf_fragment:ov,logdepthbuf_pars_fragment:lv,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:uv,map_fragment:hv,map_pars_fragment:fv,map_particle_fragment:dv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphcolor_vertex:_v,morphnormal_vertex:vv,morphtarget_pars_vertex:xv,morphtarget_vertex:yv,normal_fragment_begin:Mv,normal_fragment_maps:Ev,normal_pars_fragment:Sv,normal_pars_vertex:bv,normal_vertex:Tv,normalmap_pars_fragment:wv,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:Lv,output_fragment:Pv,packing:Dv,premultiplied_alpha_fragment:Iv,project_vertex:Uv,dithering_fragment:Nv,dithering_pars_fragment:Fv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:zv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Vv,skinbase_vertex:Gv,skinning_pars_vertex:Wv,skinning_vertex:Xv,skinnormal_vertex:jv,specularmap_fragment:qv,specularmap_pars_fragment:Yv,tonemapping_fragment:Kv,tonemapping_pars_fragment:$v,transmission_fragment:Zv,transmission_pars_fragment:Jv,uv_pars_fragment:Qv,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:nx,background_vert:ix,background_frag:rx,backgroundCube_vert:sx,backgroundCube_frag:ax,cube_vert:ox,cube_frag:lx,depth_vert:cx,depth_frag:ux,distanceRGBA_vert:hx,distanceRGBA_frag:fx,equirect_vert:dx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:vx,meshlambert_vert:xx,meshlambert_frag:yx,meshmatcap_vert:Mx,meshmatcap_frag:Ex,meshnormal_vert:Sx,meshnormal_frag:bx,meshphong_vert:Tx,meshphong_frag:wx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Lx,points_vert:Px,points_frag:Dx,shadow_vert:Ix,shadow_frag:Ux,sprite_vert:Nx,sprite_frag:Fx},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}}},an={basic:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:wt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:wt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:wt([ce.points,ce.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:wt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:wt([ce.common,ce.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:wt([ce.sprite,ce.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:wt([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:wt([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};an.physical={uniforms:wt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const ds={r:0,b:0,g:0};function Ox(i,e,t,n,r,s,a){const o=new Le(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let M=!1,x=d.isScene===!0?d.background:null;switch(x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),M=!0),i.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),M=!0;break}(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===na)?(u===void 0&&(u=new cn(new Xr(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:$i(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Ce,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new cn(new ml(2,2),new ui({name:"BackgroundMaterial",uniforms:$i(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(ds,Af(i)),n.buffers.color.setClear(ds.r,ds.g,ds.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Bx(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(F,H,Q,j,B){let te=!1;if(a){const W=_(j,Q,H);c!==W&&(c=W,p(c.object)),te=d(F,j,Q,B),te&&M(F,j,Q,B)}else{const W=H.wireframe===!0;(c.geometry!==j.id||c.program!==Q.id||c.wireframe!==W)&&(c.geometry=j.id,c.program=Q.id,c.wireframe=W,te=!0)}B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,O(F,H,Q,j),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,H,Q){const j=Q.wireframe===!0;let B=o[F.id];B===void 0&&(B={},o[F.id]=B);let te=B[H.id];te===void 0&&(te={},B[H.id]=te);let W=te[j];return W===void 0&&(W=m(f()),te[j]=W),W}function m(F){const H=[],Q=[],j=[];for(let B=0;B<r;B++)H[B]=0,Q[B]=0,j[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:j,object:F,attributes:{},index:null}}function d(F,H,Q,j){const B=c.attributes,te=H.attributes;let W=0;const ge=Q.getAttributes();for(const ne in ge)if(ge[ne].location>=0){const J=B[ne];let oe=te[ne];if(oe===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;W++}return c.attributesNum!==W||c.index!==j}function M(F,H,Q,j){const B={},te=H.attributes;let W=0;const ge=Q.getAttributes();for(const ne in ge)if(ge[ne].location>=0){let J=te[ne];J===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&(J=F.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),B[ne]=oe,W++}c.attributes=B,c.attributesNum=W,c.index=j}function x(){const F=c.newAttributes;for(let H=0,Q=F.length;H<Q;H++)F[H]=0}function T(F){E(F,0)}function E(F,H){const Q=c.newAttributes,j=c.enabledAttributes,B=c.attributeDivisors;Q[F]=1,j[F]===0&&(i.enableVertexAttribArray(F),j[F]=1),B[F]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),B[F]=H)}function A(){const F=c.newAttributes,H=c.enabledAttributes;for(let Q=0,j=H.length;Q<j;Q++)H[Q]!==F[Q]&&(i.disableVertexAttribArray(Q),H[Q]=0)}function D(F,H,Q,j,B,te){n.isWebGL2===!0&&(Q===i.INT||Q===i.UNSIGNED_INT)?i.vertexAttribIPointer(F,H,Q,B,te):i.vertexAttribPointer(F,H,Q,j,B,te)}function O(F,H,Q,j){if(n.isWebGL2===!1&&(F.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const B=j.attributes,te=Q.getAttributes(),W=H.defaultAttributeValues;for(const ge in te){const ne=te[ge];if(ne.location>=0){let k=B[ge];if(k===void 0&&(ge==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),ge==="instanceColor"&&F.instanceColor&&(k=F.instanceColor)),k!==void 0){const J=k.normalized,oe=k.itemSize,le=t.get(k);if(le===void 0)continue;const C=le.buffer,me=le.type,be=le.bytesPerElement;if(k.isInterleavedBufferAttribute){const ae=k.data,ye=ae.stride,Be=k.offset;if(ae.isInstancedInterleavedBuffer){for(let Me=0;Me<ne.locationSize;Me++)E(ne.location+Me,ae.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Me=0;Me<ne.locationSize;Me++)T(ne.location+Me);i.bindBuffer(i.ARRAY_BUFFER,C);for(let Me=0;Me<ne.locationSize;Me++)D(ne.location+Me,oe/ne.locationSize,me,J,ye*be,(Be+oe/ne.locationSize*Me)*be)}else{if(k.isInstancedBufferAttribute){for(let ae=0;ae<ne.locationSize;ae++)E(ne.location+ae,k.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ae=0;ae<ne.locationSize;ae++)T(ne.location+ae);i.bindBuffer(i.ARRAY_BUFFER,C);for(let ae=0;ae<ne.locationSize;ae++)D(ne.location+ae,oe/ne.locationSize,me,J,oe*be,oe/ne.locationSize*ae*be)}}else if(W!==void 0){const J=W[ge];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(ne.location,J);break;case 3:i.vertexAttrib3fv(ne.location,J);break;case 4:i.vertexAttrib4fv(ne.location,J);break;default:i.vertexAttrib1fv(ne.location,J)}}}}A()}function v(){X();for(const F in o){const H=o[F];for(const Q in H){const j=H[Q];for(const B in j)g(j[B].object),delete j[B];delete H[Q]}delete o[F]}}function b(F){if(o[F.id]===void 0)return;const H=o[F.id];for(const Q in H){const j=H[Q];for(const B in j)g(j[B].object),delete j[B];delete H[Q]}delete o[F.id]}function V(F){for(const H in o){const Q=o[H];if(Q[F.id]===void 0)continue;const j=Q[F.id];for(const B in j)g(j[B].object),delete j[B];delete Q[F.id]}}function X(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:T,disableUnusedAttributes:A}}function kx(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function zx(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,T=a||e.has("OES_texture_float"),E=x&&T,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:A}}function Hx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new $n,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,x=M*4;let T=d.clippingState||null;l.value=T,T=u(g,f,x,p);for(let E=0;E!==x;++E)T[E]=t[E];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,T=p;x!==_;++x,T+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vx(i){let e=new WeakMap;function t(a,o){return o===Ds?a.mapping=ji:o===Ao&&(a.mapping=qi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ds||o===Ao)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new r0(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class gl extends Rf{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=4,kc=[.125,.215,.35,.446,.526,.582],Jn=20,Wa=new gl,zc=new Le;let Xa=null;const Zn=(1+Math.sqrt(5))/2,Ci=1/Zn,Hc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Zn,Ci),new L(0,Zn,-Ci),new L(Ci,0,Zn),new L(-Ci,0,Zn),new L(Zn,Ci,0),new L(-Zn,Ci,0)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa),e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ir,format:zt,colorSpace:un,depthBuffer:!1},r=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gx(s)),this._blurMaterial=Wx(s,e,t)}return r}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,r){const o=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zc),u.toneMapping=bn,u.autoClear=!1;const p=new Tf({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new cn(new Xr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(zc),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;ps(r,M*x,d>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ji||e.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hc[(r-1)%Hc.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new cn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Jn;m>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const d=[];let M=0;for(let D=0;D<Jn;++D){const O=D/_,v=Math.exp(-O*O/2);d.push(v),D===0?M+=v:D<m&&(M+=2*v)}for(let D=0;D<d.length;D++)d[D]=d[D]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const T=this._sizeLods[r],E=3*T*(r>x-Oi?r-x+Oi:0),A=4*(this._cubeSize-T);ps(t,E,A,3*T,2*T),l.setRenderTarget(t),l.render(h,Wa)}}function Gx(i){const e=[],t=[],n=[];let r=i;const s=i-Oi+1+kc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Oi?l=kc[a-i+Oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),x=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let A=0;A<p;A++){const D=A%3*2/3-1,O=A>2?0:-1,v=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];M.set(v,_*g*A),x.set(f,m*g*A);const b=[A,A,A,A,A,A];T.set(b,d*g*A)}const E=new Xt;E.setAttribute("position",new Qt(M,_)),E.setAttribute("uv",new Qt(x,m)),E.setAttribute("faceIndex",new Qt(T,d)),e.push(E),r>Oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(i,e,t){const n=new ci(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Wx(i,e,t){const n=new Float32Array(Jn),r=new L(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Wc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Xc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ds||l===Ao,u=l===ji||l===qi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Vc(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Vc(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function qx(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let x=0,T=M.length;x<T;x+=3){const E=M[x+0],A=M[x+1],D=M[x+2];f.push(E,A,A,D,D,E)}}else{const M=g.array;_=g.version;for(let x=0,T=M.length/3-1;x<T;x+=3){const E=x+0,A=x+1,D=x+2;f.push(E,A,A,D,D,E)}}const m=new(yf(f)?wf:dl)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Yx(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,o,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,f*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Kx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $x(i,e){return i[0]-e[0]}function Zx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Jx(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Xe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let H=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),T===!0&&(v=2),E===!0&&(v=3);let b=u.attributes.position.count*v,V=1;b>e.maxTextureSize&&(V=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const X=new Float32Array(b*V*4*_),I=new Sf(X,b,V,_);I.type=Un,I.needsUpdate=!0;const F=v*4;for(let Q=0;Q<_;Q++){const j=A[Q],B=D[Q],te=O[Q],W=b*V*4*Q;for(let ge=0;ge<j.count;ge++){const ne=ge*F;x===!0&&(a.fromBufferAttribute(j,ge),X[W+ne+0]=a.x,X[W+ne+1]=a.y,X[W+ne+2]=a.z,X[W+ne+3]=0),T===!0&&(a.fromBufferAttribute(B,ge),X[W+ne+4]=a.x,X[W+ne+5]=a.y,X[W+ne+6]=a.z,X[W+ne+7]=0),E===!0&&(a.fromBufferAttribute(te,ge),X[W+ne+8]=a.x,X[W+ne+9]=a.y,X[W+ne+10]=a.z,X[W+ne+11]=te.itemSize===4?a.w:1)}}m={count:_,texture:I,size:new we(b,V)},s.set(u,m),u.addEventListener("dispose",H)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const M=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];n[u.id]=_}for(let T=0;T<g;T++){const E=_[T];E[0]=T,E[1]=f[T]}_.sort(Zx);for(let T=0;T<8;T++)T<g&&_[T][1]?(o[T][0]=_[T][0],o[T][1]=_[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort($x);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let M=0;for(let T=0;T<8;T++){const E=o[T],A=E[0],D=E[1];A!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+T)!==m[A]&&u.setAttribute("morphTarget"+T,m[A]),d&&u.getAttribute("morphNormal"+T)!==d[A]&&u.setAttribute("morphNormal"+T,d[A]),r[T]=D,M+=D):(m&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),d&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Qx(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER)),h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Pf=new vt,Df=new Sf,If=new V_,Uf=new Cf,jc=[],qc=[],Yc=new Float32Array(16),Kc=new Float32Array(9),$c=new Float32Array(4);function nr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=jc[r];if(s===void 0&&(s=new Float32Array(r),jc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ia(i,e){let t=qc[e];t===void 0&&(t=new Int32Array(e),qc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ey(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function ry(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),ft(t,n)}}function sy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),ft(t,n)}}function ay(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),ft(t,n)}}function oy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function hy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function my(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Pf,r)}function gy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||If,r)}function _y(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Uf,r)}function vy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Df,r)}function xy(i){switch(i){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return ry;case 35675:return sy;case 35676:return ay;case 5124:case 35670:return oy;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return uy;case 5125:return hy;case 36294:return fy;case 36295:return dy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return vy}}function yy(i,e){i.uniform1fv(this.addr,e)}function My(i,e){const t=nr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ey(i,e){const t=nr(e,this.size,3);i.uniform3fv(this.addr,t)}function Sy(i,e){const t=nr(e,this.size,4);i.uniform4fv(this.addr,t)}function by(i,e){const t=nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ty(i,e){const t=nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wy(i,e){const t=nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ay(i,e){i.uniform1iv(this.addr,e)}function Ry(i,e){i.uniform2iv(this.addr,e)}function Cy(i,e){i.uniform3iv(this.addr,e)}function Ly(i,e){i.uniform4iv(this.addr,e)}function Py(i,e){i.uniform1uiv(this.addr,e)}function Dy(i,e){i.uniform2uiv(this.addr,e)}function Iy(i,e){i.uniform3uiv(this.addr,e)}function Uy(i,e){i.uniform4uiv(this.addr,e)}function Ny(i,e,t){const n=this.cache,r=e.length,s=ia(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Pf,s[a])}function Fy(i,e,t){const n=this.cache,r=e.length,s=ia(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||If,s[a])}function Oy(i,e,t){const n=this.cache,r=e.length,s=ia(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Uf,s[a])}function By(i,e,t){const n=this.cache,r=e.length,s=ia(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Df,s[a])}function ky(i){switch(i){case 5126:return yy;case 35664:return My;case 35665:return Ey;case 35666:return Sy;case 35674:return by;case 35675:return Ty;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Ly;case 5125:return Py;case 36294:return Dy;case 36295:return Iy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return By}}class zy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=xy(t.type)}}class Hy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ky(t.type)}}class Vy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Zc(i,e){i.seq.push(e),i.map[e.id]=e}function Gy(i,e,t){const n=i.name,r=n.length;for(ja.lastIndex=0;;){const s=ja.exec(n),a=ja.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zc(t,c===void 0?new zy(o,i,e):new Hy(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Vy(o),Zc(t,h)),t=h}}}class ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Gy(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Jc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Wy=0;function Xy(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function jy(i){switch(i){case un:return["Linear","( value )"];case Ce:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Qc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Xy(i.getShaderSource(e),a)}else return r}function qy(i,e){const t=jy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Yy(i,e){let t;switch(e){case $g:t="Linear";break;case Zg:t="Reinhard";break;case Jg:t="OptimizedCineon";break;case Qg:t="ACESFilmic";break;case e_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ky(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function $y(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xr(i){return i!==""}function eu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(Jy,Qy)}function Qy(i,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Do(t)}const eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(i){return i.replace(eM,tM)}function tM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function iu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function iM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case qi:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function sM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ta:e="ENVMAP_BLENDING_MULTIPLY";break;case Yg:e="ENVMAP_BLENDING_MIX";break;case Kg:e="ENVMAP_BLENDING_ADD";break}return e}function aM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oM(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nM(t),c=iM(t),u=rM(t),h=sM(t),f=aM(t),p=t.isWebGL2?"":Ky(t),g=$y(s),_=r.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(xr).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(xr).join(`
`),d.length>0&&(d+=`
`)):(m=[iu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),d=[p,iu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==bn?Yy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,qy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=Do(a),a=eu(a,t),a=tu(a,t),o=Do(o),o=eu(o,t),o=tu(o,t),a=nu(a),o=nu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=M+m+a,T=M+d+o,E=Jc(r,r.VERTEX_SHADER,x),A=Jc(r,r.FRAGMENT_SHADER,T);if(r.attachShader(_,E),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const v=r.getProgramInfoLog(_).trim(),b=r.getShaderInfoLog(E).trim(),V=r.getShaderInfoLog(A).trim();let X=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,E,A);else{const F=Qc(r,E,"vertex"),H=Qc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+F+`
`+H)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(b===""||V==="")&&(I=!1);I&&(this.diagnostics={runnable:X,programLog:v,vertexShader:{log:b,prefix:m},fragmentShader:{log:V,prefix:d}})}r.deleteShader(E),r.deleteShader(A);let D;this.getUniforms=function(){return D===void 0&&(D=new ws(r,_)),D};let O;return this.getAttributes=function(){return O===void 0&&(O=Zy(r,_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Wy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let lM=0;class cM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uM(e),t.set(e,n)),n}}class uM{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}}function hM(i,e,t,n,r,s,a){const o=new fl,l=new cM,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,b,V,X,I){const F=X.fog,H=I.geometry,Q=v.isMeshStandardMaterial?X.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||Q),B=j&&j.mapping===na?j.image.height:null,te=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const W=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ge=W!==void 0?W.length:0;let ne=0;H.morphAttributes.position!==void 0&&(ne=1),H.morphAttributes.normal!==void 0&&(ne=2),H.morphAttributes.color!==void 0&&(ne=3);let k,J,oe,le;if(te){const qe=an[te];k=qe.vertexShader,J=qe.fragmentShader}else k=v.vertexShader,J=v.fragmentShader,l.update(v),oe=l.getVertexShaderID(v),le=l.getFragmentShaderID(v);const C=i.getRenderTarget(),me=I.isInstancedMesh===!0,be=!!v.map,ae=!!v.matcap,ye=!!j,Be=!!v.aoMap,Me=!!v.lightMap,Pe=!!v.bumpMap,tt=!!v.normalMap,et=!!v.displacementMap,at=!!v.emissiveMap,nt=!!v.metalnessMap,Ge=!!v.roughnessMap,$e=v.clearcoat>0,xt=v.iridescence>0,w=v.sheen>0,y=v.transmission>0,G=$e&&!!v.clearcoatMap,ie=$e&&!!v.clearcoatNormalMap,se=$e&&!!v.clearcoatRoughnessMap,ue=xt&&!!v.iridescenceMap,R=xt&&!!v.iridescenceThicknessMap,ee=w&&!!v.sheenColorMap,z=w&&!!v.sheenRoughnessMap,he=!!v.specularMap,pe=!!v.specularColorMap,ve=!!v.specularIntensityMap,fe=y&&!!v.transmissionMap,_e=y&&!!v.thicknessMap,Ae=!!v.gradientMap,Ue=!!v.alphaMap,it=v.alphaTest>0,P=!!v.extensions,q=!!H.attributes.uv1,re=!!H.attributes.uv2,de=!!H.attributes.uv3;return{isWebGL2:u,shaderID:te,shaderName:v.type,vertexShader:k,fragmentShader:J,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:me,instancingColor:me&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:C===null?i.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:un,map:be,matcap:ae,envMap:ye,envMapMode:ye&&j.mapping,envMapCubeUVHeight:B,aoMap:Be,lightMap:Me,bumpMap:Pe,normalMap:tt,displacementMap:f&&et,emissiveMap:at,normalMapObjectSpace:tt&&v.normalMapType===y_,normalMapTangentSpace:tt&&v.normalMapType===cl,metalnessMap:nt,roughnessMap:Ge,clearcoat:$e,clearcoatMap:G,clearcoatNormalMap:ie,clearcoatRoughnessMap:se,iridescence:xt,iridescenceMap:ue,iridescenceThicknessMap:R,sheen:w,sheenColorMap:ee,sheenRoughnessMap:z,specularMap:he,specularColorMap:pe,specularIntensityMap:ve,transmission:y,transmissionMap:fe,thicknessMap:_e,gradientMap:Ae,opaque:v.transparent===!1&&v.blending===zi,alphaMap:Ue,alphaTest:it,combine:v.combine,mapUv:be&&_(v.map.channel),aoMapUv:Be&&_(v.aoMap.channel),lightMapUv:Me&&_(v.lightMap.channel),bumpMapUv:Pe&&_(v.bumpMap.channel),normalMapUv:tt&&_(v.normalMap.channel),displacementMapUv:et&&_(v.displacementMap.channel),emissiveMapUv:at&&_(v.emissiveMap.channel),metalnessMapUv:nt&&_(v.metalnessMap.channel),roughnessMapUv:Ge&&_(v.roughnessMap.channel),clearcoatMapUv:G&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:R&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:z&&_(v.sheenRoughnessMap.channel),specularMapUv:he&&_(v.specularMap.channel),specularColorMapUv:pe&&_(v.specularColorMap.channel),specularIntensityMapUv:ve&&_(v.specularIntensityMap.channel),transmissionMapUv:fe&&_(v.transmissionMap.channel),thicknessMapUv:_e&&_(v.thicknessMap.channel),alphaMapUv:Ue&&_(v.alphaMap.channel),vertexTangents:tt&&!!H.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:q,vertexUv2s:re,vertexUv3s:de,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(be||Ue),fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:bn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===Pt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:P&&v.extensions.derivatives===!0,extensionFragDepth:P&&v.extensions.fragDepth===!0,extensionDrawBuffers:P&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:P&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)b.push(V),b.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(M(b,v),x(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),v.push(o.mask)}function T(v){const b=g[v.type];let V;if(b){const X=an[b];V=e0.clone(X.uniforms)}else V=v.uniforms;return V}function E(v,b){let V;for(let X=0,I=c.length;X<I;X++){const F=c[X];if(F.cacheKey===b){V=F,++V.usedTimes;break}}return V===void 0&&(V=new oM(i,b,v,s),c.push(V)),V}function A(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function D(v){l.remove(v)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:E,releaseProgram:A,releaseShaderCache:D,programs:c,dispose:O}}function fM(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function dM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ru(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function su(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||dM),n.length>1&&n.sort(f||ru),r.length>1&&r.sort(f||ru)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function pM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new su,i.set(n,[a])):r>=s.length?(a=new su,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function gM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _M=0;function vM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xM(i,e){const t=new mM,n=gM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,a=new Se,o=new Se;function l(u,h){let f=0,p=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let _=0,m=0,d=0,M=0,x=0,T=0,E=0,A=0,D=0,O=0;u.sort(vM);const v=h===!0?Math.PI:1;for(let V=0,X=u.length;V<X;V++){const I=u[V],F=I.color,H=I.intensity,Q=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*H*v,p+=F.g*H*v,g+=F.b*H*v;else if(I.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(I.sh.coefficients[B],H);else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const te=I.shadow,W=n.get(I);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,r.directionalShadow[_]=W,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=I.shadow.matrix,T++}r.directional[_]=B,_++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(F).multiplyScalar(H*v),B.distance=Q,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,r.spot[d]=B;const te=I.shadow;if(I.map&&(r.spotLightMap[D]=I.map,D++,te.updateMatrices(I),I.castShadow&&O++),r.spotLightMatrix[d]=te.matrix,I.castShadow){const W=n.get(I);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,r.spotShadow[d]=W,r.spotShadowMap[d]=j,A++}d++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(F).multiplyScalar(H),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=B,M++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*v),B.distance=I.distance,B.decay=I.decay,I.castShadow){const te=I.shadow,W=n.get(I);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,r.pointShadow[m]=W,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=I.shadow.matrix,E++}r.point[m]=B,m++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(H*v),B.groundColor.copy(I.groundColor).multiplyScalar(H*v),r.hemi[x]=B,x++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==d||b.rectAreaLength!==M||b.hemiLength!==x||b.numDirectionalShadows!==T||b.numPointShadows!==E||b.numSpotShadows!==A||b.numSpotMaps!==D)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=M,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+D-O,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=O,b.directionalLength=_,b.pointLength=m,b.spotLength=d,b.rectAreaLength=M,b.hemiLength=x,b.numDirectionalShadows=T,b.numPointShadows=E,b.numSpotShadows=A,b.numSpotMaps=D,r.version=_M++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const T=u[M];if(T.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),f++}else if(T.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(T.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(d),o.identity(),a.copy(T.matrixWorld),a.premultiply(d),o.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function au(i,e){const t=new xM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yM(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new au(i,e),t.set(s,[l])):a>=o.length?(l=new au(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class MM extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EM extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TM(i,e,t){let n=new pl;const r=new we,s=new we,a=new Xe,o=new MM({depthPacking:x_}),l=new EM,c={},u=t.maxTextureSize,h={[Hn]:Pt,[Pt]:Hn,[Mn]:Mn},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:SM,fragmentShader:bM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new cn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let d=this.type;this.render=function(E,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const O=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Fn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=d!==yn&&this.type===yn,I=d===yn&&this.type!==yn;for(let F=0,H=E.length;F<H;F++){const Q=E[F],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const B=j.getFrameExtents();if(r.multiply(B),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,j.mapSize.y=s.y)),j.map===null||X===!0||I===!0){const W=this.type!==yn?{minFilter:_t,magFilter:_t}:{};j.map!==null&&j.map.dispose(),j.map=new ci(r.x,r.y,W),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const te=j.getViewportCount();for(let W=0;W<te;W++){const ge=j.getViewport(W);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),V.viewport(a),j.updateMatrices(Q,W),n=j.getFrustum(),T(A,D,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===yn&&M(j,D),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(O,v,b)};function M(E,A){const D=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ci(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,D,p,_,null)}function x(E,A,D,O){let v=null;const b=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)v=b;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=v.uuid,X=A.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let F=I[X];F===void 0&&(F=v.clone(),I[X]=F),v=F}if(v.visible=A.visible,v.wireframe=A.wireframe,O===yn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=i.properties.get(v);V.light=D}return v}function T(E,A,D,O,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===yn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const X=e.update(E),I=E.material;if(Array.isArray(I)){const F=X.groups;for(let H=0,Q=F.length;H<Q;H++){const j=F[H],B=I[j.materialIndex];if(B&&B.visible){const te=x(E,B,O,v);i.renderBufferDirect(D,null,X,te,E,j)}}}else if(I.visible){const F=x(E,I,O,v);i.renderBufferDirect(D,null,X,F,E,null)}}const V=E.children;for(let X=0,I=V.length;X<I;X++)T(V[X],A,D,O,v)}}function wM(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const q=new Xe;let re=null;const de=new Xe(0,0,0,0);return{setMask:function(xe){re!==xe&&!P&&(i.colorMask(xe,xe,xe,xe),re=xe)},setLocked:function(xe){P=xe},setClear:function(xe,qe,Ye,yt,Tn){Tn===!0&&(xe*=yt,qe*=yt,Ye*=yt),q.set(xe,qe,Ye,yt),de.equals(q)===!1&&(i.clearColor(xe,qe,Ye,yt),de.copy(q))},reset:function(){P=!1,re=null,de.set(-1,0,0,0)}}}function s(){let P=!1,q=null,re=null,de=null;return{setTest:function(xe){xe?C(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(xe){q!==xe&&!P&&(i.depthMask(xe),q=xe)},setFunc:function(xe){if(re!==xe){switch(xe){case Hg:i.depthFunc(i.NEVER);break;case Vg:i.depthFunc(i.ALWAYS);break;case Gg:i.depthFunc(i.LESS);break;case wo:i.depthFunc(i.LEQUAL);break;case Wg:i.depthFunc(i.EQUAL);break;case Xg:i.depthFunc(i.GEQUAL);break;case jg:i.depthFunc(i.GREATER);break;case qg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=xe}},setLocked:function(xe){P=xe},setClear:function(xe){de!==xe&&(i.clearDepth(xe),de=xe)},reset:function(){P=!1,q=null,re=null,de=null}}}function a(){let P=!1,q=null,re=null,de=null,xe=null,qe=null,Ye=null,yt=null,Tn=null;return{setTest:function(rt){P||(rt?C(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(rt){q!==rt&&!P&&(i.stencilMask(rt),q=rt)},setFunc:function(rt,Ft,nn){(re!==rt||de!==Ft||xe!==nn)&&(i.stencilFunc(rt,Ft,nn),re=rt,de=Ft,xe=nn)},setOp:function(rt,Ft,nn){(qe!==rt||Ye!==Ft||yt!==nn)&&(i.stencilOp(rt,Ft,nn),qe=rt,Ye=Ft,yt=nn)},setLocked:function(rt){P=rt},setClear:function(rt){Tn!==rt&&(i.clearStencil(rt),Tn=rt)},reset:function(){P=!1,q=null,re=null,de=null,xe=null,qe=null,Ye=null,yt=null,Tn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,x=null,T=null,E=null,A=null,D=null,O=null,v=!1,b=null,V=null,X=null,I=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,j=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),Q=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Q=j>=2);let te=null,W={};const ge=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),k=new Xe().fromArray(ge),J=new Xe().fromArray(ne);function oe(P,q,re,de){const xe=new Uint8Array(4),qe=i.createTexture();i.bindTexture(P,qe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<re;Ye++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(q,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(q+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return qe}const le={};le[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),C(i.DEPTH_TEST),l.setFunc(wo),et(!1),at(Gl),C(i.CULL_FACE),Pe(Fn);function C(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function me(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function be(P,q){return p[P]!==q?(i.bindFramebuffer(P,q),p[P]=q,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=q),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=q)),!0):!1}function ae(P,q){let re=_,de=!1;if(P)if(re=g.get(q),re===void 0&&(re=[],g.set(q,re)),P.isWebGLMultipleRenderTargets){const xe=P.texture;if(re.length!==xe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Ye=xe.length;qe<Ye;qe++)re[qe]=i.COLOR_ATTACHMENT0+qe;re.length=xe.length,de=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,de=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,de=!0);de&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function ye(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const Be={[Fi]:i.FUNC_ADD,[Lg]:i.FUNC_SUBTRACT,[Pg]:i.FUNC_REVERSE_SUBTRACT};if(n)Be[ql]=i.MIN,Be[Yl]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Be[ql]=P.MIN_EXT,Be[Yl]=P.MAX_EXT)}const Me={[Dg]:i.ZERO,[Ig]:i.ONE,[Ug]:i.SRC_COLOR,[ff]:i.SRC_ALPHA,[zg]:i.SRC_ALPHA_SATURATE,[Bg]:i.DST_COLOR,[Fg]:i.DST_ALPHA,[Ng]:i.ONE_MINUS_SRC_COLOR,[df]:i.ONE_MINUS_SRC_ALPHA,[kg]:i.ONE_MINUS_DST_COLOR,[Og]:i.ONE_MINUS_DST_ALPHA};function Pe(P,q,re,de,xe,qe,Ye,yt){if(P===Fn){d===!0&&(me(i.BLEND),d=!1);return}if(d===!1&&(C(i.BLEND),d=!0),P!==Cg){if(P!==M||yt!==v){if((x!==Fi||A!==Fi)&&(i.blendEquation(i.FUNC_ADD),x=Fi,A=Fi),yt)switch(P){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,E=null,D=null,O=null,M=P,v=yt}return}xe=xe||q,qe=qe||re,Ye=Ye||de,(q!==x||xe!==A)&&(i.blendEquationSeparate(Be[q],Be[xe]),x=q,A=xe),(re!==T||de!==E||qe!==D||Ye!==O)&&(i.blendFuncSeparate(Me[re],Me[de],Me[qe],Me[Ye]),T=re,E=de,D=qe,O=Ye),M=P,v=!1}function tt(P,q){P.side===Mn?me(i.CULL_FACE):C(i.CULL_FACE);let re=P.side===Pt;q&&(re=!re),et(re),P.blending===zi&&P.transparent===!1?Pe(Fn):Pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const de=P.stencilWrite;c.setTest(de),de&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function at(P){P!==wg?(C(i.CULL_FACE),P!==V&&(P===Gl?i.cullFace(i.BACK):P===Ag?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),V=P}function nt(P){P!==X&&(Q&&i.lineWidth(P),X=P)}function Ge(P,q,re){P?(C(i.POLYGON_OFFSET_FILL),(I!==q||F!==re)&&(i.polygonOffset(q,re),I=q,F=re)):me(i.POLYGON_OFFSET_FILL)}function $e(P){P?C(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function xt(P){P===void 0&&(P=i.TEXTURE0+H-1),te!==P&&(i.activeTexture(P),te=P)}function w(P,q,re){re===void 0&&(te===null?re=i.TEXTURE0+H-1:re=te);let de=W[re];de===void 0&&(de={type:void 0,texture:void 0},W[re]=de),(de.type!==P||de.texture!==q)&&(te!==re&&(i.activeTexture(re),te=re),i.bindTexture(P,q||le[P]),de.type=P,de.texture=q)}function y(){const P=W[te];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function G(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(P){k.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),k.copy(P))}function _e(P){J.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function Ae(P,q){let re=h.get(q);re===void 0&&(re=new WeakMap,h.set(q,re));let de=re.get(P);de===void 0&&(de=i.getUniformBlockIndex(q,P.name),re.set(P,de))}function Ue(P,q){const de=h.get(q).get(P);u.get(q)!==de&&(i.uniformBlockBinding(q,de,P.__bindingPointIndex),u.set(q,de))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},te=null,W={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,x=null,T=null,E=null,A=null,D=null,O=null,v=!1,b=null,V=null,X=null,I=null,F=null,k.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:C,disable:me,bindFramebuffer:be,drawBuffers:ae,useProgram:ye,setBlending:Pe,setMaterial:tt,setFlipSided:et,setCullFace:at,setLineWidth:nt,setPolygonOffset:Ge,setScissorTest:$e,activeTexture:xt,bindTexture:w,unbindTexture:y,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:pe,texImage3D:ve,updateUBOMapping:Ae,uniformBlockBinding:Ue,texStorage2D:z,texStorage3D:he,texSubImage2D:se,texSubImage3D:ue,compressedTexSubImage2D:R,compressedTexSubImage3D:ee,scissor:fe,viewport:_e,reset:it}}function AM(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,y){return d?new OffscreenCanvas(w,y):Ur("canvas")}function x(w,y,G,ie){let se=1;if((w.width>ie||w.height>ie)&&(se=ie/Math.max(w.width,w.height)),se<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ue=y?xf:Math.floor,R=ue(se*w.width),ee=ue(se*w.height);_===void 0&&(_=M(R,ee));const z=G?M(R,ee):_;return z.width=R,z.height=ee,z.getContext("2d").drawImage(w,0,0,R,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+R+"x"+ee+")."),z}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function T(w){return Po(w.width)&&Po(w.height)}function E(w){return o?!1:w.wrapS!==Nt||w.wrapT!==Nt||w.minFilter!==_t&&w.minFilter!==Bt}function A(w,y){return w.generateMipmaps&&y&&w.minFilter!==_t&&w.minFilter!==Bt}function D(w){i.generateMipmap(w)}function O(w,y,G,ie,se=!1){if(o===!1)return y;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue=y;return y===i.RED&&(G===i.FLOAT&&(ue=i.R32F),G===i.HALF_FLOAT&&(ue=i.R16F),G===i.UNSIGNED_BYTE&&(ue=i.R8)),y===i.RG&&(G===i.FLOAT&&(ue=i.RG32F),G===i.HALF_FLOAT&&(ue=i.RG16F),G===i.UNSIGNED_BYTE&&(ue=i.RG8)),y===i.RGBA&&(G===i.FLOAT&&(ue=i.RGBA32F),G===i.HALF_FLOAT&&(ue=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ue=ie===Ce&&se===!1?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)),(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function v(w,y,G){return A(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==_t&&w.minFilter!==Bt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function b(w){return w===_t||w===Kl||w===xa?i.NEAREST:i.LINEAR}function V(w){const y=w.target;y.removeEventListener("dispose",V),I(y),y.isVideoTexture&&g.delete(y)}function X(w){const y=w.target;y.removeEventListener("dispose",X),H(y)}function I(w){const y=n.get(w);if(y.__webglInit===void 0)return;const G=w.source,ie=m.get(G);if(ie){const se=ie[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&F(w),Object.keys(ie).length===0&&m.delete(G)}n.remove(w)}function F(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const G=w.source,ie=m.get(G);delete ie[y.__cacheKey],a.memory.textures--}function H(w){const y=w.texture,G=n.get(w),ie=n.get(y);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)i.deleteFramebuffer(G.__webglFramebuffer[se]),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[se]);else{if(i.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let se=0;se<G.__webglColorRenderbuffer.length;se++)G.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[se]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let se=0,ue=y.length;se<ue;se++){const R=n.get(y[se]);R.__webglTexture&&(i.deleteTexture(R.__webglTexture),a.memory.textures--),n.remove(y[se])}n.remove(y),n.remove(w)}let Q=0;function j(){Q=0}function B(){const w=Q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Q+=1,w}function te(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function W(w,y){const G=n.get(w);if(w.isVideoTexture&&$e(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(G,w,y);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function ge(w,y){const G=n.get(w);if(w.version>0&&G.__version!==w.version){me(G,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function ne(w,y){const G=n.get(w);if(w.version>0&&G.__version!==w.version){me(G,w,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function k(w,y){const G=n.get(w);if(w.version>0&&G.__version!==w.version){be(G,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const J={[Pr]:i.REPEAT,[Nt]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},oe={[_t]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[t_]:i.LINEAR_MIPMAP_NEAREST,[Dr]:i.LINEAR_MIPMAP_LINEAR};function le(w,y,G){if(G?(i.texParameteri(w,i.TEXTURE_WRAP_S,J[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,J[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,J[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[y.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Nt||y.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,b(y.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==_t&&y.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===_t||y.minFilter!==xa&&y.minFilter!==Dr||y.type===Un&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function C(w,y){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",V));const ie=y.source;let se=m.get(ie);se===void 0&&(se={},m.set(ie,se));const ue=te(y);if(ue!==w.__cacheKey){se[ue]===void 0&&(se[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),se[ue].usedTimes++;const R=se[w.__cacheKey];R!==void 0&&(se[w.__cacheKey].usedTimes--,R.usedTimes===0&&F(y)),w.__cacheKey=ue,w.__webglTexture=se[ue].texture}return G}function me(w,y,G){let ie=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ie=i.TEXTURE_3D);const se=C(w,y),ue=y.source;t.bindTexture(ie,w.__webglTexture,i.TEXTURE0+G);const R=n.get(ue);if(ue.version!==R.__version||se===!0){t.activeTexture(i.TEXTURE0+G),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ee=E(y)&&T(y.image)===!1;let z=x(y.image,ee,!1,u);z=xt(y,z);const he=T(z)||o,pe=s.convert(y.format,y.colorSpace);let ve=s.convert(y.type),fe=O(y.internalFormat,pe,ve,y.colorSpace);le(ie,y,he);let _e;const Ae=y.mipmaps,Ue=o&&y.isVideoTexture!==!0,it=R.__version===void 0||se===!0,P=v(y,z,he);if(y.isDepthTexture)fe=i.DEPTH_COMPONENT,o?y.type===Un?fe=i.DEPTH_COMPONENT32F:y.type===ei?fe=i.DEPTH_COMPONENT24:y.type===Hi?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:y.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===si&&fe===i.DEPTH_COMPONENT&&y.type!==mf&&y.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ei,ve=s.convert(y.type)),y.format===Yi&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,y.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Hi,ve=s.convert(y.type))),it&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,fe,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,fe,z.width,z.height,0,pe,ve,null));else if(y.isDataTexture)if(Ae.length>0&&he){Ue&&it&&t.texStorage2D(i.TEXTURE_2D,P,fe,Ae[0].width,Ae[0].height);for(let q=0,re=Ae.length;q<re;q++)_e=Ae[q],Ue?t.texSubImage2D(i.TEXTURE_2D,q,0,0,_e.width,_e.height,pe,ve,_e.data):t.texImage2D(i.TEXTURE_2D,q,fe,_e.width,_e.height,0,pe,ve,_e.data);y.generateMipmaps=!1}else Ue?(it&&t.texStorage2D(i.TEXTURE_2D,P,fe,z.width,z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,pe,ve,z.data)):t.texImage2D(i.TEXTURE_2D,0,fe,z.width,z.height,0,pe,ve,z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,P,fe,Ae[0].width,Ae[0].height,z.depth);for(let q=0,re=Ae.length;q<re;q++)_e=Ae[q],y.format!==zt?pe!==null?Ue?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,_e.width,_e.height,z.depth,pe,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,fe,_e.width,_e.height,z.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,_e.width,_e.height,z.depth,pe,ve,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,fe,_e.width,_e.height,z.depth,0,pe,ve,_e.data)}else{Ue&&it&&t.texStorage2D(i.TEXTURE_2D,P,fe,Ae[0].width,Ae[0].height);for(let q=0,re=Ae.length;q<re;q++)_e=Ae[q],y.format!==zt?pe!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,q,fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(i.TEXTURE_2D,q,0,0,_e.width,_e.height,pe,ve,_e.data):t.texImage2D(i.TEXTURE_2D,q,fe,_e.width,_e.height,0,pe,ve,_e.data)}else if(y.isDataArrayTexture)Ue?(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,P,fe,z.width,z.height,z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,pe,ve,z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,z.width,z.height,z.depth,0,pe,ve,z.data);else if(y.isData3DTexture)Ue?(it&&t.texStorage3D(i.TEXTURE_3D,P,fe,z.width,z.height,z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,pe,ve,z.data)):t.texImage3D(i.TEXTURE_3D,0,fe,z.width,z.height,z.depth,0,pe,ve,z.data);else if(y.isFramebufferTexture){if(it)if(Ue)t.texStorage2D(i.TEXTURE_2D,P,fe,z.width,z.height);else{let q=z.width,re=z.height;for(let de=0;de<P;de++)t.texImage2D(i.TEXTURE_2D,de,fe,q,re,0,pe,ve,null),q>>=1,re>>=1}}else if(Ae.length>0&&he){Ue&&it&&t.texStorage2D(i.TEXTURE_2D,P,fe,Ae[0].width,Ae[0].height);for(let q=0,re=Ae.length;q<re;q++)_e=Ae[q],Ue?t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe,ve,_e):t.texImage2D(i.TEXTURE_2D,q,fe,pe,ve,_e);y.generateMipmaps=!1}else Ue?(it&&t.texStorage2D(i.TEXTURE_2D,P,fe,z.width,z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,ve,z)):t.texImage2D(i.TEXTURE_2D,0,fe,pe,ve,z);A(y,he)&&D(ie),R.__version=ue.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function be(w,y,G){if(y.image.length!==6)return;const ie=C(w,y),se=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);const ue=n.get(se);if(se.version!==ue.__version||ie===!0){t.activeTexture(i.TEXTURE0+G),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const R=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,z=[];for(let q=0;q<6;q++)!R&&!ee?z[q]=x(y.image[q],!1,!0,c):z[q]=ee?y.image[q].image:y.image[q],z[q]=xt(y,z[q]);const he=z[0],pe=T(he)||o,ve=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),_e=O(y.internalFormat,ve,fe,y.colorSpace),Ae=o&&y.isVideoTexture!==!0,Ue=ue.__version===void 0||ie===!0;let it=v(y,he,pe);le(i.TEXTURE_CUBE_MAP,y,pe);let P;if(R){Ae&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,it,_e,he.width,he.height);for(let q=0;q<6;q++){P=z[q].mipmaps;for(let re=0;re<P.length;re++){const de=P[re];y.format!==zt?ve!==null?Ae?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,de.width,de.height,ve,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,de.width,de.height,ve,fe,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,_e,de.width,de.height,0,ve,fe,de.data)}}}else{P=y.mipmaps,Ae&&Ue&&(P.length>0&&it++,t.texStorage2D(i.TEXTURE_CUBE_MAP,it,_e,z[0].width,z[0].height));for(let q=0;q<6;q++)if(ee){Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,z[q].width,z[q].height,ve,fe,z[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,_e,z[q].width,z[q].height,0,ve,fe,z[q].data);for(let re=0;re<P.length;re++){const xe=P[re].image[q].image;Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,xe.width,xe.height,ve,fe,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,_e,xe.width,xe.height,0,ve,fe,xe.data)}}else{Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ve,fe,z[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,_e,ve,fe,z[q]);for(let re=0;re<P.length;re++){const de=P[re];Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,ve,fe,de.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,_e,ve,fe,de.image[q])}}}A(y,pe)&&D(i.TEXTURE_CUBE_MAP),ue.__version=se.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ae(w,y,G,ie,se){const ue=s.convert(G.format,G.colorSpace),R=s.convert(G.type),ee=O(G.internalFormat,ue,R,G.colorSpace);n.get(y).__hasExternalTextures||(se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,0,ee,y.width,y.height,y.depth,0,ue,R,null):t.texImage2D(se,0,ee,y.width,y.height,0,ue,R,null)),t.bindFramebuffer(i.FRAMEBUFFER,w),Ge(y)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,se,n.get(G).__webglTexture,0,nt(y)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,se,n.get(G).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let ie=i.DEPTH_COMPONENT16;if(G||Ge(y)){const se=y.depthTexture;se&&se.isDepthTexture&&(se.type===Un?ie=i.DEPTH_COMPONENT32F:se.type===ei&&(ie=i.DEPTH_COMPONENT24));const ue=nt(y);Ge(y)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ie,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ie,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const ie=nt(y);G&&Ge(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,y.width,y.height):Ge(y)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const ie=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let se=0;se<ie.length;se++){const ue=ie[se],R=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),z=O(ue.internalFormat,R,ee,ue.colorSpace),he=nt(y);G&&Ge(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,z,y.width,y.height):Ge(y)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,z,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const ie=n.get(y.depthTexture).__webglTexture,se=nt(y);if(y.depthTexture.format===si)Ge(y)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(y.depthTexture.format===Yi)Ge(y)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Me(w){const y=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Be(y.__webglFramebuffer,w)}else if(G){y.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ie]),y.__webglDepthbuffer[ie]=i.createRenderbuffer(),ye(y.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),ye(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(w,y,G){const ie=n.get(w);y!==void 0&&ae(ie.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),G!==void 0&&Me(w)}function tt(w){const y=w.texture,G=n.get(w),ie=n.get(y);w.addEventListener("dispose",X),w.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=y.version,a.memory.textures++);const se=w.isWebGLCubeRenderTarget===!0,ue=w.isWebGLMultipleRenderTargets===!0,R=T(w)||o;if(se){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)G.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(G.__webglFramebuffer=i.createFramebuffer(),ue)if(r.drawBuffers){const ee=w.texture;for(let z=0,he=ee.length;z<he;z++){const pe=n.get(ee[z]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Ge(w)===!1){const ee=ue?y:[y];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let z=0;z<ee.length;z++){const he=ee[z];G.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[z]);const pe=s.convert(he.format,he.colorSpace),ve=s.convert(he.type),fe=O(he.internalFormat,pe,ve,he.colorSpace,w.isXRRenderTarget===!0),_e=nt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,fe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,G.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),le(i.TEXTURE_CUBE_MAP,y,R);for(let ee=0;ee<6;ee++)ae(G.__webglFramebuffer[ee],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee);A(y,R)&&D(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const ee=w.texture;for(let z=0,he=ee.length;z<he;z++){const pe=ee[z],ve=n.get(pe);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),le(i.TEXTURE_2D,pe,R),ae(G.__webglFramebuffer,w,pe,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D),A(pe,R)&&D(i.TEXTURE_2D)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ee=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,ie.__webglTexture),le(ee,y,R),ae(G.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ee),A(y,R)&&D(ee),t.unbindTexture()}w.depthBuffer&&Me(w)}function et(w){const y=T(w)||o,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0,se=G.length;ie<se;ie++){const ue=G[ie];if(A(ue,y)){const R=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ee=n.get(ue).__webglTexture;t.bindTexture(R,ee),D(R),t.unbindTexture()}}}function at(w){if(o&&w.samples>0&&Ge(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,ie=w.height;let se=i.COLOR_BUFFER_BIT;const ue=[],R=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=n.get(w),z=w.isWebGLMultipleRenderTargets===!0;if(z)for(let he=0;he<y.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let he=0;he<y.length;he++){ue.push(i.COLOR_ATTACHMENT0+he),w.depthBuffer&&ue.push(R);const pe=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(pe===!1&&(w.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),z&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ee.__webglColorRenderbuffer[he]),pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[R]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])),z){const ve=n.get(y[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,G,ie,0,0,G,ie,se,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let he=0;he<y.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ee.__webglColorRenderbuffer[he]);const pe=n.get(y[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function nt(w){return Math.min(h,w.samples)}function Ge(w){const y=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $e(w){const y=a.render.frame;g.get(w)!==y&&(g.set(w,y),w.update())}function xt(w,y){const G=w.colorSpace,ie=w.format,se=w.type;return w.isCompressedTexture===!0||w.format===Lo||G!==un&&G!==oi&&(G===Ce?o===!1?e.has("EXT_sRGB")===!0&&ie===zt?(w.format=Lo,w.minFilter=Bt,w.generateMipmaps=!1):y=Mf.sRGBToLinear(y):(ie!==zt||se!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}this.allocateTextureUnit=B,this.resetTextureUnits=j,this.setTexture2D=W,this.setTexture2DArray=ge,this.setTexture3D=ne,this.setTextureCube=k,this.rebindTextures=Pe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ge}function RM(i,e,t){const n=t.isWebGL2;function r(s,a=oi){let o;if(s===li)return i.UNSIGNED_BYTE;if(s===s_)return i.UNSIGNED_SHORT_4_4_4_4;if(s===a_)return i.UNSIGNED_SHORT_5_5_5_1;if(s===n_)return i.BYTE;if(s===i_)return i.SHORT;if(s===mf)return i.UNSIGNED_SHORT;if(s===r_)return i.INT;if(s===ei)return i.UNSIGNED_INT;if(s===Un)return i.FLOAT;if(s===Ir)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===o_)return i.ALPHA;if(s===zt)return i.RGBA;if(s===l_)return i.LUMINANCE;if(s===c_)return i.LUMINANCE_ALPHA;if(s===si)return i.DEPTH_COMPONENT;if(s===Yi)return i.DEPTH_STENCIL;if(s===Lo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===u_)return i.RED;if(s===h_)return i.RED_INTEGER;if(s===f_)return i.RG;if(s===d_)return i.RG_INTEGER;if(s===p_)return i.RGBA_INTEGER;if(s===ya||s===Ma||s===Ea||s===Sa)if(a===Ce)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ya)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ya)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ea)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$l||s===Zl||s===Jl||s===Ql)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ql)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===m_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ec||s===tc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ec)return a===Ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===tc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nc||s===ic||s===rc||s===sc||s===ac||s===oc||s===lc||s===cc||s===uc||s===hc||s===fc||s===dc||s===pc||s===mc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ic)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ac)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mc)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ba)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ba)return a===Ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===g_||s===gc||s===_c||s===vc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ba)return o.COMPRESSED_RED_RGTC1_EXT;if(s===gc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_c)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class CM extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LM={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class PM extends vt{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:si,u!==si&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===si&&(n=ei),n===void 0&&u===Yi&&(n=Hi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1}}class DM extends hi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const M=[],x=[],T=new Set,E=new Map,A=new At;A.layers.enable(1),A.viewport=new Xe;const D=new At;D.layers.enable(2),D.viewport=new Xe;const O=[A,D],v=new CM;v.layers.enable(1),v.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=M[k];return J===void 0&&(J=new qa,M[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=M[k];return J===void 0&&(J=new qa,M[k]=J),J.getGripSpace()},this.getHand=function(k){let J=M[k];return J===void 0&&(J=new qa,M[k]=J),J.getHandSpace()};function X(k){const J=x.indexOf(k.inputSource);if(J===-1)return;const oe=M[J];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||a),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function I(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",F);for(let k=0;k<M.length;k++){const J=x[k];J!==null&&(x[k]=null,M[k].disconnect(J))}b=null,V=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",I),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:p}),d=new ci(p.framebufferWidth,p.framebufferHeight,{format:zt,type:li,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,oe=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Yi:si,oe=_.stencil?Hi:ei);const C={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(C),r.updateRenderState({layers:[f]}),d=new ci(f.textureWidth,f.textureHeight,{format:zt,type:li,depthTexture:new PM(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const me=e.properties.get(d);me.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(k){for(let J=0;J<k.removed.length;J++){const oe=k.removed[J],le=x.indexOf(oe);le>=0&&(x[le]=null,M[le].disconnect(oe))}for(let J=0;J<k.added.length;J++){const oe=k.added[J];let le=x.indexOf(oe);if(le===-1){for(let me=0;me<M.length;me++)if(me>=x.length){x.push(oe),le=me;break}else if(x[me]===null){x[me]=oe,le=me;break}if(le===-1)break}const C=M[le];C&&C.connect(oe)}}const H=new L,Q=new L;function j(k,J,oe){H.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(oe.matrixWorld);const le=H.distanceTo(Q),C=J.projectionMatrix.elements,me=oe.projectionMatrix.elements,be=C[14]/(C[10]-1),ae=C[14]/(C[10]+1),ye=(C[9]+1)/C[5],Be=(C[9]-1)/C[5],Me=(C[8]-1)/C[0],Pe=(me[8]+1)/me[0],tt=be*Me,et=be*Pe,at=le/(-Me+Pe),nt=at*-Me;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(nt),k.translateZ(at),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Ge=be+at,$e=ae+at,xt=tt-nt,w=et+(le-nt),y=ye*ae/$e*Ge,G=Be*ae/$e*Ge;k.projectionMatrix.makePerspective(xt,w,y,G,Ge,$e),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function B(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;v.near=D.near=A.near=k.near,v.far=D.far=A.far=k.far,(b!==v.near||V!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,V=v.far);const J=k.parent,oe=v.cameras;B(v,J);for(let le=0;le<oe.length;le++)B(oe[le],J);oe.length===2?j(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),te(k,v,J)};function te(k,J,oe){oe===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const le=k.children;for(let C=0,me=le.length;C<me;C++)le[C].updateMatrixWorld(!0);k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ki*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.getPlanes=function(){return T};let W=null;function ge(k,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let le=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let C=0;C<oe.length;C++){const me=oe[C];let be=null;if(p!==null)be=p.getViewport(me);else{const ye=h.getViewSubImage(f,me);be=ye.viewport,C===0&&(e.setRenderTargetTextures(d,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(d))}let ae=O[C];ae===void 0&&(ae=new At,ae.layers.enable(C),ae.viewport=new Xe,O[C]=ae),ae.matrix.fromArray(me.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(me.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(be.x,be.y,be.width,be.height),C===0&&(v.matrix.copy(ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(ae)}}for(let oe=0;oe<M.length;oe++){const le=x[oe],C=M[oe];le!==null&&C!==void 0&&C.update(le,J,c||a)}if(W&&W(k,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let oe=null;for(const le of T)J.detectedPlanes.has(le)||(oe===null&&(oe=[]),oe.push(le));if(oe!==null)for(const le of oe)T.delete(le),E.delete(le),n.dispatchEvent({type:"planeremoved",data:le});for(const le of J.detectedPlanes)if(!T.has(le))T.add(le),E.set(le,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:le});else{const C=E.get(le);le.lastChangedTime>C&&(E.set(le,le.lastChangedTime),n.dispatchEvent({type:"planechanged",data:le}))}}g=null}const ne=new Lf;ne.setAnimationLoop(ge),this.setAnimationLoop=function(k){W=k},this.dispose=function(){}}}function IM(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Af(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,x,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function UM(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const T=x.program;n.uniformBlockBinding(M,T)}function c(M,x){let T=r[M.id];T===void 0&&(g(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(M,E);const A=e.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const x=h();M.__bindingPointIndex=x;const T=i.createBuffer(),E=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=r[M.id],T=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,D=T.length;A<D;A++){const O=T[A];if(p(O,A,E)===!0){const v=O.__offset,b=Array.isArray(O.value)?O.value:[O.value];let V=0;for(let X=0;X<b.length;X++){const I=b[X],F=_(I);typeof I=="number"?(O.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,v+V,O.__data)):I.isMatrix3?(O.__data[0]=I.elements[0],O.__data[1]=I.elements[1],O.__data[2]=I.elements[2],O.__data[3]=I.elements[0],O.__data[4]=I.elements[3],O.__data[5]=I.elements[4],O.__data[6]=I.elements[5],O.__data[7]=I.elements[0],O.__data[8]=I.elements[6],O.__data[9]=I.elements[7],O.__data[10]=I.elements[8],O.__data[11]=I.elements[0]):(I.toArray(O.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,v,O.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,T){const E=M.value;if(T[x]===void 0){if(typeof E=="number")T[x]=E;else{const A=Array.isArray(E)?E:[E],D=[];for(let O=0;O<A.length;O++)D.push(A[O].clone());T[x]=D}return!0}else if(typeof E=="number"){if(T[x]!==E)return T[x]=E,!0}else{const A=Array.isArray(T[x])?T[x]:[T[x]],D=Array.isArray(E)?E:[E];for(let O=0;O<A.length;O++){const v=A[O];if(v.equals(D[O])===!1)return v.copy(D[O]),!0}}return!1}function g(M){const x=M.uniforms;let T=0;const E=16;let A=0;for(let D=0,O=x.length;D<O;D++){const v=x[D],b={boundary:0,storage:0},V=Array.isArray(v.value)?v.value:[v.value];for(let X=0,I=V.length;X<I;X++){const F=V[X],H=_(F);b.boundary+=H.boundary,b.storage+=H.storage}if(v.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=T,D>0){A=T%E;const X=E-A;A!==0&&X-b.boundary<0&&(T+=E-A,v.__offset=T)}T+=b.storage}return A=T%E,A>0&&(T+=E-A),M.__size=T,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}function NM(){const i=Ur("canvas");return i.style.display="block",i}class Nf{constructor(e={}){const{canvas:t=NM(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ce,this.useLegacyLights=!0,this.toneMapping=bn,this.toneMappingExposure=1;const d=this;let M=!1,x=0,T=0,E=null,A=-1,D=null;const O=new Xe,v=new Xe;let b=null,V=t.width,X=t.height,I=1,F=null,H=null;const Q=new Xe(0,0,V,X),j=new Xe(0,0,V,X);let B=!1;const te=new pl;let W=!1,ge=!1,ne=null;const k=new Se,J=new L,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return E===null?I:1}let C=n;function me(S,N){for(let Y=0;Y<S.length;Y++){const U=S[Y],Z=t.getContext(U,N);if(Z!==null)return Z}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ll}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),C===null){const N=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&N.shift(),C=me(N,S),C===null)throw me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let be,ae,ye,Be,Me,Pe,tt,et,at,nt,Ge,$e,xt,w,y,G,ie,se,ue,R,ee,z,he,pe;function ve(){be=new jx(C),ae=new zx(C,be,e),be.init(ae),z=new RM(C,be,ae),ye=new wM(C,be,ae),Be=new Kx(C),Me=new fM,Pe=new AM(C,be,ye,Me,ae,z,Be),tt=new Vx(d),et=new Xx(d),at=new o0(C,ae),he=new Bx(C,be,at,ae),nt=new qx(C,at,Be,he),Ge=new Qx(C,nt,at,Be),ue=new Jx(C,ae,Pe),G=new Hx(Me),$e=new hM(d,tt,et,be,ae,he,G),xt=new IM(d,Me),w=new pM,y=new yM(be,ae),se=new Ox(d,tt,et,ye,Ge,f,l),ie=new TM(d,Ge,ae),pe=new UM(C,Be,ae,ye),R=new kx(C,be,Be,ae),ee=new Yx(C,be,Be,ae),Be.programs=$e.programs,d.capabilities=ae,d.extensions=be,d.properties=Me,d.renderLists=w,d.shadowMap=ie,d.state=ye,d.info=Be}ve();const fe=new DM(d,C);this.xr=fe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(S){S!==void 0&&(I=S,this.setSize(V,X,!1))},this.getSize=function(S){return S.set(V,X)},this.setSize=function(S,N,Y=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,X=N,t.width=Math.floor(S*I),t.height=Math.floor(N*I),Y===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(V*I,X*I).floor()},this.setDrawingBufferSize=function(S,N,Y){V=S,X=N,I=Y,t.width=Math.floor(S*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(Q)},this.setViewport=function(S,N,Y,U){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,N,Y,U),ye.viewport(O.copy(Q).multiplyScalar(I).floor())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,N,Y,U){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,N,Y,U),ye.scissor(v.copy(j).multiplyScalar(I).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(S){ye.setScissorTest(B=S)},this.setOpaqueSort=function(S){F=S},this.setTransparentSort=function(S){H=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(S=!0,N=!0,Y=!0){let U=0;S&&(U|=C.COLOR_BUFFER_BIT),N&&(U|=C.DEPTH_BUFFER_BIT),Y&&(U|=C.STENCIL_BUFFER_BIT),C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),w.dispose(),y.dispose(),Me.dispose(),tt.dispose(),et.dispose(),Ge.dispose(),he.dispose(),pe.dispose(),$e.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",xe),fe.removeEventListener("sessionend",qe),ne&&(ne.dispose(),ne=null),Ye.stop()};function _e(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=Be.autoReset,N=ie.enabled,Y=ie.autoUpdate,U=ie.needsUpdate,Z=ie.type;ve(),Be.autoReset=S,ie.enabled=N,ie.autoUpdate=Y,ie.needsUpdate=U,ie.type=Z}function Ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function it(S){const N=S.target;N.removeEventListener("dispose",it),P(N)}function P(S){q(S),Me.remove(S)}function q(S){const N=Me.get(S).programs;N!==void 0&&(N.forEach(function(Y){$e.releaseProgram(Y)}),S.isShaderMaterial&&$e.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,Y,U,Z,Ee){N===null&&(N=oe);const Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Re=sd(S,N,Y,U,Z);ye.setMaterial(U,Te);let De=Y.index,Ne=1;U.wireframe===!0&&(De=nt.getWireframeAttribute(Y),Ne=2);const Fe=Y.drawRange,ke=Y.attributes.position;let je=Fe.start*Ne,St=(Fe.start+Fe.count)*Ne;Ee!==null&&(je=Math.max(je,Ee.start*Ne),St=Math.min(St,(Ee.start+Ee.count)*Ne)),De!==null?(je=Math.max(je,0),St=Math.min(St,De.count)):ke!=null&&(je=Math.max(je,0),St=Math.min(St,ke.count));const jt=St-je;if(jt<0||jt===1/0)return;he.setup(Z,U,Re,Y,De);let Gn,ot=R;if(De!==null&&(Gn=at.get(De),ot=ee,ot.setIndex(Gn)),Z.isMesh)U.wireframe===!0?(ye.setLineWidth(U.wireframeLinewidth*le()),ot.setMode(C.LINES)):ot.setMode(C.TRIANGLES);else if(Z.isLine){let He=U.linewidth;He===void 0&&(He=1),ye.setLineWidth(He*le()),Z.isLineSegments?ot.setMode(C.LINES):Z.isLineLoop?ot.setMode(C.LINE_LOOP):ot.setMode(C.LINE_STRIP)}else Z.isPoints?ot.setMode(C.POINTS):Z.isSprite&&ot.setMode(C.TRIANGLES);if(Z.isInstancedMesh)ot.renderInstances(je,jt,Z.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,oa=Math.min(Y.instanceCount,He);ot.renderInstances(je,jt,oa)}else ot.render(je,jt)},this.compile=function(S,N){function Y(U,Z,Ee){U.transparent===!0&&U.side===Mn&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,qr(U,Z,Ee),U.side=Hn,U.needsUpdate=!0,qr(U,Z,Ee),U.side=Mn):qr(U,Z,Ee)}g=y.get(S),g.init(),m.push(g),S.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(d.useLegacyLights),S.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let Ee=0;Ee<Z.length;Ee++){const Te=Z[Ee];Y(Te,S,U)}else Y(Z,S,U)}),m.pop(),g=null};let re=null;function de(S){re&&re(S)}function xe(){Ye.stop()}function qe(){Ye.start()}const Ye=new Lf;Ye.setAnimationLoop(de),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(S){re=S,fe.setAnimationLoop(S),S===null?Ye.stop():Ye.start()},fe.addEventListener("sessionstart",xe),fe.addEventListener("sessionend",qe),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(d,S,N,E),g=y.get(S,m.length),g.init(),m.push(g),k.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(k),ge=this.localClippingEnabled,W=G.init(this.clippingPlanes,ge),p=w.get(S,_.length),p.init(),_.push(p),yt(S,N,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(F,H),W===!0&&G.beginShadows();const Y=g.state.shadowsArray;if(ie.render(Y,S,N),W===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(p,S),g.setupLights(d.useLegacyLights),N.isArrayCamera){const U=N.cameras;for(let Z=0,Ee=U.length;Z<Ee;Z++){const Te=U[Z];Tn(p,S,Te,Te.viewport)}}else Tn(p,S,N);E!==null&&(Pe.updateMultisampleRenderTarget(E),Pe.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(d,S,N),he.resetDefaultState(),A=-1,D=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function yt(S,N,Y,U){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){U&&J.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);const Te=Ge.update(S),Re=S.material;Re.visible&&p.push(S,Te,Re,Y,J.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||te.intersectsObject(S))){S.isSkinnedMesh&&S.skeleton.frame!==Be.render.frame&&(S.skeleton.update(),S.skeleton.frame=Be.render.frame);const Te=Ge.update(S),Re=S.material;if(U&&(Te.boundingSphere===null&&Te.computeBoundingSphere(),J.copy(Te.boundingSphere.center).applyMatrix4(S.matrixWorld).applyMatrix4(k)),Array.isArray(Re)){const De=Te.groups;for(let Ne=0,Fe=De.length;Ne<Fe;Ne++){const ke=De[Ne],je=Re[ke.materialIndex];je&&je.visible&&p.push(S,Te,je,Y,J.z,ke)}}else Re.visible&&p.push(S,Te,Re,Y,J.z,null)}}const Ee=S.children;for(let Te=0,Re=Ee.length;Te<Re;Te++)yt(Ee[Te],N,Y,U)}function Tn(S,N,Y,U){const Z=S.opaque,Ee=S.transmissive,Te=S.transparent;g.setupLightsView(Y),W===!0&&G.setGlobalState(d.clippingPlanes,Y),Ee.length>0&&rt(Z,Ee,N,Y),U&&ye.viewport(O.copy(U)),Z.length>0&&Ft(Z,N,Y),Ee.length>0&&Ft(Ee,N,Y),Te.length>0&&Ft(Te,N,Y),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function rt(S,N,Y,U){if(ne===null){const Re=ae.isWebGL2;ne=new ci(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Ir:li,minFilter:Dr,samples:Re&&o===!0?4:0})}const Z=d.getRenderTarget();d.setRenderTarget(ne),d.clear();const Ee=d.toneMapping;d.toneMapping=bn,Ft(S,Y,U),Pe.updateMultisampleRenderTarget(ne),Pe.updateRenderTargetMipmap(ne);let Te=!1;for(let Re=0,De=N.length;Re<De;Re++){const Ne=N[Re],Fe=Ne.object,ke=Ne.geometry,je=Ne.material,St=Ne.group;if(je.side===Mn&&Fe.layers.test(U.layers)){const jt=je.side;je.side=Pt,je.needsUpdate=!0,nn(Fe,Y,U,ke,je,St),je.side=jt,je.needsUpdate=!0,Te=!0}}Te===!0&&(Pe.updateMultisampleRenderTarget(ne),Pe.updateRenderTargetMipmap(ne)),d.setRenderTarget(Z),d.toneMapping=Ee}function Ft(S,N,Y){const U=N.isScene===!0?N.overrideMaterial:null;for(let Z=0,Ee=S.length;Z<Ee;Z++){const Te=S[Z],Re=Te.object,De=Te.geometry,Ne=U===null?Te.material:U,Fe=Te.group;Re.layers.test(Y.layers)&&nn(Re,N,Y,De,Ne,Fe)}}function nn(S,N,Y,U,Z,Ee){S.onBeforeRender(d,N,Y,U,Z,Ee),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(d,N,Y,U,S,Ee),Z.transparent===!0&&Z.side===Mn&&Z.forceSinglePass===!1?(Z.side=Pt,Z.needsUpdate=!0,d.renderBufferDirect(Y,N,U,Z,S,Ee),Z.side=Hn,Z.needsUpdate=!0,d.renderBufferDirect(Y,N,U,Z,S,Ee),Z.side=Mn):d.renderBufferDirect(Y,N,U,Z,S,Ee),S.onAfterRender(d,N,Y,U,Z,Ee)}function qr(S,N,Y){N.isScene!==!0&&(N=oe);const U=Me.get(S),Z=g.state.lights,Ee=g.state.shadowsArray,Te=Z.state.version,Re=$e.getParameters(S,Z.state,Ee,N,Y),De=$e.getProgramCacheKey(Re);let Ne=U.programs;U.environment=S.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(S.isMeshStandardMaterial?et:tt).get(S.envMap||U.environment),Ne===void 0&&(S.addEventListener("dispose",it),Ne=new Map,U.programs=Ne);let Fe=Ne.get(De);if(Fe!==void 0){if(U.currentProgram===Fe&&U.lightsStateVersion===Te)return El(S,Re),Fe}else Re.uniforms=$e.getUniforms(S),S.onBuild(Y,Re,d),S.onBeforeCompile(Re,d),Fe=$e.acquireProgram(Re,De),Ne.set(De,Fe),U.uniforms=Re.uniforms;const ke=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=G.uniform),El(S,Re),U.needsLights=od(S),U.lightsStateVersion=Te,U.needsLights&&(ke.ambientLightColor.value=Z.state.ambient,ke.lightProbe.value=Z.state.probe,ke.directionalLights.value=Z.state.directional,ke.directionalLightShadows.value=Z.state.directionalShadow,ke.spotLights.value=Z.state.spot,ke.spotLightShadows.value=Z.state.spotShadow,ke.rectAreaLights.value=Z.state.rectArea,ke.ltc_1.value=Z.state.rectAreaLTC1,ke.ltc_2.value=Z.state.rectAreaLTC2,ke.pointLights.value=Z.state.point,ke.pointLightShadows.value=Z.state.pointShadow,ke.hemisphereLights.value=Z.state.hemi,ke.directionalShadowMap.value=Z.state.directionalShadowMap,ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ke.spotShadowMap.value=Z.state.spotShadowMap,ke.spotLightMatrix.value=Z.state.spotLightMatrix,ke.spotLightMap.value=Z.state.spotLightMap,ke.pointShadowMap.value=Z.state.pointShadowMap,ke.pointShadowMatrix.value=Z.state.pointShadowMatrix);const je=Fe.getUniforms(),St=ws.seqWithValue(je.seq,ke);return U.currentProgram=Fe,U.uniformsList=St,Fe}function El(S,N){const Y=Me.get(S);Y.outputColorSpace=N.outputColorSpace,Y.instancing=N.instancing,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function sd(S,N,Y,U,Z){N.isScene!==!0&&(N=oe),Pe.resetTextureUnits();const Ee=N.fog,Te=U.isMeshStandardMaterial?N.environment:null,Re=E===null?d.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:un,De=(U.isMeshStandardMaterial?et:tt).get(U.envMap||Te),Ne=U.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!U.normalMap&&!!Y.attributes.tangent,ke=!!Y.morphAttributes.position,je=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color,jt=U.toneMapped?d.toneMapping:bn,Gn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=Gn!==void 0?Gn.length:0,He=Me.get(U),oa=g.state.lights;if(W===!0&&(ge===!0||S!==D)){const Dt=S===D&&U.id===A;G.setState(U,S,Dt)}let dt=!1;U.version===He.__version?(He.needsLights&&He.lightsStateVersion!==oa.state.version||He.outputColorSpace!==Re||Z.isInstancedMesh&&He.instancing===!1||!Z.isInstancedMesh&&He.instancing===!0||Z.isSkinnedMesh&&He.skinning===!1||!Z.isSkinnedMesh&&He.skinning===!0||He.envMap!==De||U.fog===!0&&He.fog!==Ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==G.numPlanes||He.numIntersection!==G.numIntersection)||He.vertexAlphas!==Ne||He.vertexTangents!==Fe||He.morphTargets!==ke||He.morphNormals!==je||He.morphColors!==St||He.toneMapping!==jt||ae.isWebGL2===!0&&He.morphTargetsCount!==ot)&&(dt=!0):(dt=!0,He.__version=U.version);let Wn=He.currentProgram;dt===!0&&(Wn=qr(U,N,Z));let Sl=!1,ar=!1,la=!1;const bt=Wn.getUniforms(),Xn=He.uniforms;if(ye.useProgram(Wn.program)&&(Sl=!0,ar=!0,la=!0),U.id!==A&&(A=U.id,ar=!0),Sl||D!==S){if(bt.setValue(C,"projectionMatrix",S.projectionMatrix),ae.logarithmicDepthBuffer&&bt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),D!==S&&(D=S,ar=!0,la=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Dt=bt.map.cameraPosition;Dt!==void 0&&Dt.setValue(C,J.setFromMatrixPosition(S.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&bt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&bt.setValue(C,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){bt.setOptional(C,Z,"bindMatrix"),bt.setOptional(C,Z,"bindMatrixInverse");const Dt=Z.skeleton;Dt&&(ae.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),bt.setValue(C,"boneTexture",Dt.boneTexture,Pe),bt.setValue(C,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ca=Y.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&ae.isWebGL2===!0)&&ue.update(Z,Y,Wn),(ar||He.receiveShadow!==Z.receiveShadow)&&(He.receiveShadow=Z.receiveShadow,bt.setValue(C,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Xn.envMap.value=De,Xn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ar&&(bt.setValue(C,"toneMappingExposure",d.toneMappingExposure),He.needsLights&&ad(Xn,la),Ee&&U.fog===!0&&xt.refreshFogUniforms(Xn,Ee),xt.refreshMaterialUniforms(Xn,U,I,X,ne),ws.upload(C,He.uniformsList,Xn,Pe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ws.upload(C,He.uniformsList,Xn,Pe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&bt.setValue(C,"center",Z.center),bt.setValue(C,"modelViewMatrix",Z.modelViewMatrix),bt.setValue(C,"normalMatrix",Z.normalMatrix),bt.setValue(C,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Dt=U.uniformsGroups;for(let ua=0,ld=Dt.length;ua<ld;ua++)if(ae.isWebGL2){const bl=Dt[ua];pe.update(bl,Wn),pe.bind(bl,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function ad(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function od(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,N,Y){Me.get(S.texture).__webglTexture=N,Me.get(S.depthTexture).__webglTexture=Y;const U=Me.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=Y===void 0,U.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){const Y=Me.get(S);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,Y=0){E=S,x=N,T=Y;let U=!0,Z=null,Ee=!1,Te=!1;if(S){const De=Me.get(S);De.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(C.FRAMEBUFFER,null),U=!1):De.__webglFramebuffer===void 0?Pe.setupRenderTarget(S):De.__hasExternalTextures&&Pe.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);const Fe=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=Fe[N],Ee=!0):ae.isWebGL2&&S.samples>0&&Pe.useMultisampledRTT(S)===!1?Z=Me.get(S).__webglMultisampledFramebuffer:Z=Fe,O.copy(S.viewport),v.copy(S.scissor),b=S.scissorTest}else O.copy(Q).multiplyScalar(I).floor(),v.copy(j).multiplyScalar(I).floor(),b=B;if(ye.bindFramebuffer(C.FRAMEBUFFER,Z)&&ae.drawBuffers&&U&&ye.drawBuffers(S,Z),ye.viewport(O),ye.scissor(v),ye.setScissorTest(b),Ee){const De=Me.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,De.__webglTexture,Y)}else if(Te){const De=Me.get(S.texture),Ne=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,De.__webglTexture,Y||0,Ne)}A=-1},this.readRenderTargetPixels=function(S,N,Y,U,Z,Ee,Te){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){ye.bindFramebuffer(C.FRAMEBUFFER,Re);try{const De=S.texture,Ne=De.format,Fe=De.type;if(Ne!==zt&&z.convert(Ne)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Ir&&(be.has("EXT_color_buffer_half_float")||ae.isWebGL2&&be.has("EXT_color_buffer_float"));if(Fe!==li&&z.convert(Fe)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Un&&(ae.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-U&&Y>=0&&Y<=S.height-Z&&C.readPixels(N,Y,U,Z,z.convert(Ne),z.convert(Fe),Ee)}finally{const De=E!==null?Me.get(E).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(S,N,Y=0){const U=Math.pow(2,-Y),Z=Math.floor(N.image.width*U),Ee=Math.floor(N.image.height*U);Pe.setTexture2D(N,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,S.x,S.y,Z,Ee),ye.unbindTexture()},this.copyTextureToTexture=function(S,N,Y,U=0){const Z=N.image.width,Ee=N.image.height,Te=z.convert(Y.format),Re=z.convert(Y.type);Pe.setTexture2D(Y,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Y.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,Y.unpackAlignment),N.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,S.x,S.y,Z,Ee,Te,Re,N.image.data):N.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Te,N.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,U,S.x,S.y,Te,Re,N.image),U===0&&Y.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,N,Y,U,Z=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=S.max.x-S.min.x+1,Te=S.max.y-S.min.y+1,Re=S.max.z-S.min.z+1,De=z.convert(U.format),Ne=z.convert(U.type);let Fe;if(U.isData3DTexture)Pe.setTexture3D(U,0),Fe=C.TEXTURE_3D;else if(U.isDataArrayTexture)Pe.setTexture2DArray(U,0),Fe=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const ke=C.getParameter(C.UNPACK_ROW_LENGTH),je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),St=C.getParameter(C.UNPACK_SKIP_PIXELS),jt=C.getParameter(C.UNPACK_SKIP_ROWS),Gn=C.getParameter(C.UNPACK_SKIP_IMAGES),ot=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ot.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,S.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,S.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,S.min.z),Y.isDataTexture||Y.isData3DTexture?C.texSubImage3D(Fe,Z,N.x,N.y,N.z,Ee,Te,Re,De,Ne,ot.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Fe,Z,N.x,N.y,N.z,Ee,Te,Re,De,ot.data)):C.texSubImage3D(Fe,Z,N.x,N.y,N.z,Ee,Te,Re,De,Ne,ot),C.pixelStorei(C.UNPACK_ROW_LENGTH,ke),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,St),C.pixelStorei(C.UNPACK_SKIP_ROWS,jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Gn),Z===0&&U.generateMipmaps&&C.generateMipmap(Fe),ye.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Pe.setTextureCube(S,0):S.isData3DTexture?Pe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Pe.setTexture2DArray(S,0):Pe.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){x=0,T=0,E=null,ye.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?ai:gf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ai?Ce:un}}class FM extends Nf{}FM.prototype.isWebGL1Renderer=!0;class OM extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class BM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Co,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tt=new L;class Ns{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ns(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ff extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Li;const pr=new L,Pi=new L,Di=new L,Ii=new we,mr=new we,Of=new Se,ms=new L,gr=new L,gs=new L,ou=new we,Ya=new we,lu=new we;class kM extends Qe{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new Xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new BM(t,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new Ns(n,3,0,!1)),Li.setAttribute("uv",new Ns(n,2,3,!1))}this.geometry=Li,this.material=e!==void 0?e:new Ff,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),Of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Di.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;_s(ms.set(-.5,-.5,0),Di,a,Pi,r,s),_s(gr.set(.5,-.5,0),Di,a,Pi,r,s),_s(gs.set(.5,.5,0),Di,a,Pi,r,s),ou.set(0,0),Ya.set(1,0),lu.set(1,1);let o=e.ray.intersectTriangle(ms,gr,gs,!1,pr);if(o===null&&(_s(gr.set(-.5,.5,0),Di,a,Pi,r,s),Ya.set(0,1),o=e.ray.intersectTriangle(ms,gs,gr,!1,pr),o===null))return;const l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:kt.getInterpolation(pr,ms,gr,gs,ou,Ya,lu,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _s(i,e,t,n,r,s){Ii.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(mr.x=s*Ii.x-r*Ii.y,mr.y=r*Ii.x+s*Ii.y):mr.copy(Ii),i.copy(e),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(Of)}const cu=new L,uu=new Xe,hu=new Xe,zM=new L,fu=new Se,Ui=new L;class HM extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ui.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ui),this.boundingBox.expandByPoint(Ui)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ui.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ui),this.boundingSphere.expandByPoint(Ui)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;uu.fromBufferAttribute(r.attributes.skinIndex,e),hu.fromBufferAttribute(r.attributes.skinWeight,e),cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=hu.getComponent(s);if(a!==0){const o=uu.getComponent(s);fu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zM.copy(cu).applyMatrix4(fu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Io extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class VM extends vt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=_t,u=_t,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=new Se,GM=new Se;class vl{constructor(e=[],t=[]){this.uuid=Jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Se;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:GM;du.multiplyMatrices(o,t[s]),du.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=vf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new VM(t,e,e,zt,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Io),this.bones.push(a),this.boneInverses.push(new Se().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Bf extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new L,mu=new L,gu=new Se,Ka=new hl,vs=new Wr;class WM extends Qe{constructor(e=new Xt,t=new Bf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)pu.fromBufferAttribute(t,r-1),mu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;gu.copy(r).invert(),Ka.copy(e.ray).applyMatrix4(gu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,f=new L,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let x=d,T=M-1;x<T;x+=p){const E=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,A),Ka.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let x=d,T=M-1;x<T;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ka.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class XM{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(a-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new we:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],a=[],o=new L,l=new Se;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(mt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(mt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $a extends Vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jM extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Pn(i,e,t){return kf(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function xs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qM(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function _u(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function zf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class ra{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class YM extends ra{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case yc:s=e,o=2*t-n;break;case Mc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yc:a=e,l=2*n-t;break;case Mc:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,T=p*m-p*_;for(let E=0;E!==o;++E)s[E]=d*a[u+E]+M*a[c+E]+x*a[l+E]+T*a[h+E];return s}}class KM extends ra{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class $M extends ra{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class fn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $M(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new KM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new YM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Pn(n,s,a),this.values=Pn(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&kf(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Pn(this.times),t=Pn(this.values),n=this.getValueSize(),r=this.getInterpolation()===Ta,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Pn(e,0,a),this.values=Pn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Pn(this.times,0),t=Pn(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Us;class ir extends fn{}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Is;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Hf extends fn{}Hf.prototype.ValueTypeName="color";class Nr extends fn{}Nr.prototype.ValueTypeName="number";class ZM extends ra{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Vt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class rr extends fn{InterpolantFactoryMethodLinear(e){return new ZM(this.times,this.values,this.getValueSize(),e)}}rr.prototype.ValueTypeName="quaternion";rr.prototype.DefaultInterpolation=Us;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends fn{}sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Is;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends fn{}Fr.prototype.ValueTypeName="vector";class JM{constructor(e,t=-1,n,r=__){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(eE(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(fn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=qM(l);l=_u(l,1,u),c=_u(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Nr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,_){if(p.length!==0){const m=[],d=[];zf(p,m,d,g),m.length!==0&&_.push(new h(f,m,d))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let M=0;M!==f[g].morphTargets.length;++M){const x=f[g];m.push(x.time),d.push(x.morphTarget===_?1:0)}r.push(new Nr(".morphTargetInfluence["+_+"]",m,d))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(Fr,p+".position",f,"pos",r),n(rr,p+".quaternion",f,"rot",r),n(Fr,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function QM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Fr;case"color":return Hf;case"quaternion":return rr;case"bool":case"boolean":return ir;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function eE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=QM(i.type);if(i.times===void 0){const t=[],n=[];zf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Fs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class tE{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const nE=new tE;class sa{constructor(e){this.manager=e!==void 0?e:nE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const xn={};class iE extends Error{constructor(e,t){super(e),this.response=t}}class rE extends sa{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:r});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){M();function M(){h.read().then(({done:x,value:T})=>{if(x)d.close();else{_+=T.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,D=u.length;A<D;A++){const O=u[A];O.onProgress&&O.onProgress(E)}d.enqueue(T),M()}})}}});return new Response(m)}else throw new iE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Fs.add(e,c);const u=xn[e];delete xn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=xn[e];if(u===void 0)throw this.manager.itemError(e),c;delete xn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sE extends sa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Fs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ur("img");function l(){u(),Fs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Vf extends sa{constructor(e){super(e)}load(e,t,n,r){const s=new vt,a=new sE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class aa extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Za=new Se,vu=new L,xu=new L;class xl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(vu),xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xu),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class aE extends xl{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ki*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class oE extends aa{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new aE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yu=new Se,_r=new L,Ja=new L;class lE extends xl{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),Ja.copy(n.position),Ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ja),n.updateMatrixWorld(),r.makeTranslation(-_r.x,-_r.y,-_r.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}}class Uo extends aa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new lE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cE extends xl{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uE extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new cE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gf extends aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hE{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const yl="\\[\\]\\.:\\/",fE=new RegExp("["+yl+"]","g"),Ml="[^"+yl+"]",dE="[^"+yl.replace("\\.","")+"]",pE=/((?:WC+[\/:])*)/.source.replace("WC",Ml),mE=/(WCOD+)?/.source.replace("WCOD",dE),gE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),_E=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),vE=new RegExp("^"+pE+mE+gE+_E+"$"),xE=["material","materials","bones","map"];class yE{constructor(e,t,n){const r=n||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class We{constructor(e,t,n){this.path=t,this.parsedPath=n||We.parseTrackName(t),this.node=We.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new We.Composite(e,t,n):new We(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fE,"")}static parseTrackName(e){const t=vE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);xE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=We.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=yE;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ME{constructor(e,t,n=0,r=1/0){this.ray=new hl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return No(e,this,n,t),n.sort(Mu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)No(e[r],this,n,t);return n.sort(Mu),n}}function Mu(i,e){return i.distance-e.distance}function No(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)No(r[s],e,t,!0)}}class Eu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const Su={type:"change"},Qa={type:"start"},bu={type:"end"};class EE extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",$e),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",$e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Su),n.update(),s=r.NONE},this.update=function(){const R=new L,ee=new Vt().setFromUnitVectors(e.up,new L(0,1,0)),z=ee.clone().invert(),he=new L,pe=new Vt,ve=2*Math.PI;return function(){const _e=n.object.position;R.copy(_e).sub(n.target),R.applyQuaternion(ee),o.setFromVector3(R),n.autoRotate&&s===r.NONE&&v(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ae=n.minAzimuthAngle,Ue=n.maxAzimuthAngle;return isFinite(Ae)&&isFinite(Ue)&&(Ae<-Math.PI?Ae+=ve:Ae>Math.PI&&(Ae-=ve),Ue<-Math.PI?Ue+=ve:Ue>Math.PI&&(Ue-=ve),Ae<=Ue?o.theta=Math.max(Ae,Math.min(Ue,o.theta)):o.theta=o.theta>(Ae+Ue)/2?Math.max(Ae,o.theta):Math.min(Ue,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(o),R.applyQuaternion(z),_e.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||he.distanceToSquared(n.object.position)>a||8*(1-pe.dot(n.object.quaternion))>a?(n.dispatchEvent(Su),he.copy(n.object.position),pe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",y),n.domElement.removeEventListener("pointerdown",Pe),n.domElement.removeEventListener("pointercancel",et),n.domElement.removeEventListener("wheel",Ge),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",et),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",$e),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Eu,l=new Eu;let c=1;const u=new L;let h=!1;const f=new we,p=new we,g=new we,_=new we,m=new we,d=new we,M=new we,x=new we,T=new we,E=[],A={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function O(){return Math.pow(.95,n.zoomSpeed)}function v(R){l.theta-=R}function b(R){l.phi-=R}const V=function(){const R=new L;return function(z,he){R.setFromMatrixColumn(he,0),R.multiplyScalar(-z),u.add(R)}}(),X=function(){const R=new L;return function(z,he){n.screenSpacePanning===!0?R.setFromMatrixColumn(he,1):(R.setFromMatrixColumn(he,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(z),u.add(R)}}(),I=function(){const R=new L;return function(z,he){const pe=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;R.copy(ve).sub(n.target);let fe=R.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),V(2*z*fe/pe.clientHeight,n.object.matrix),X(2*he*fe/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(z*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),X(he*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(R){f.set(R.clientX,R.clientY)}function j(R){M.set(R.clientX,R.clientY)}function B(R){_.set(R.clientX,R.clientY)}function te(R){p.set(R.clientX,R.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;v(2*Math.PI*g.x/ee.clientHeight),b(2*Math.PI*g.y/ee.clientHeight),f.copy(p),n.update()}function W(R){x.set(R.clientX,R.clientY),T.subVectors(x,M),T.y>0?F(O()):T.y<0&&H(O()),M.copy(x),n.update()}function ge(R){m.set(R.clientX,R.clientY),d.subVectors(m,_).multiplyScalar(n.panSpeed),I(d.x,d.y),_.copy(m),n.update()}function ne(R){R.deltaY<0?H(O()):R.deltaY>0&&F(O()),n.update()}function k(R){let ee=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?v(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?v(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),ee=!0;break}ee&&(R.preventDefault(),n.update())}function J(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const R=.5*(E[0].pageX+E[1].pageX),ee=.5*(E[0].pageY+E[1].pageY);f.set(R,ee)}}function oe(){if(E.length===1)_.set(E[0].pageX,E[0].pageY);else{const R=.5*(E[0].pageX+E[1].pageX),ee=.5*(E[0].pageY+E[1].pageY);_.set(R,ee)}}function le(){const R=E[0].pageX-E[1].pageX,ee=E[0].pageY-E[1].pageY,z=Math.sqrt(R*R+ee*ee);M.set(0,z)}function C(){n.enableZoom&&le(),n.enablePan&&oe()}function me(){n.enableZoom&&le(),n.enableRotate&&J()}function be(R){if(E.length==1)p.set(R.pageX,R.pageY);else{const z=ue(R),he=.5*(R.pageX+z.x),pe=.5*(R.pageY+z.y);p.set(he,pe)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;v(2*Math.PI*g.x/ee.clientHeight),b(2*Math.PI*g.y/ee.clientHeight),f.copy(p)}function ae(R){if(E.length===1)m.set(R.pageX,R.pageY);else{const ee=ue(R),z=.5*(R.pageX+ee.x),he=.5*(R.pageY+ee.y);m.set(z,he)}d.subVectors(m,_).multiplyScalar(n.panSpeed),I(d.x,d.y),_.copy(m)}function ye(R){const ee=ue(R),z=R.pageX-ee.x,he=R.pageY-ee.y,pe=Math.sqrt(z*z+he*he);x.set(0,pe),T.set(0,Math.pow(x.y/M.y,n.zoomSpeed)),F(T.y),M.copy(x)}function Be(R){n.enableZoom&&ye(R),n.enablePan&&ae(R)}function Me(R){n.enableZoom&&ye(R),n.enableRotate&&be(R)}function Pe(R){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",tt),n.domElement.addEventListener("pointerup",et)),G(R),R.pointerType==="touch"?xt(R):at(R))}function tt(R){n.enabled!==!1&&(R.pointerType==="touch"?w(R):nt(R))}function et(R){ie(R),E.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",et)),n.dispatchEvent(bu),s=r.NONE}function at(R){let ee;switch(R.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case fi.DOLLY:if(n.enableZoom===!1)return;j(R),s=r.DOLLY;break;case fi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;B(R),s=r.PAN}else{if(n.enableRotate===!1)return;Q(R),s=r.ROTATE}break;case fi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;Q(R),s=r.ROTATE}else{if(n.enablePan===!1)return;B(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Qa)}function nt(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;te(R);break;case r.DOLLY:if(n.enableZoom===!1)return;W(R);break;case r.PAN:if(n.enablePan===!1)return;ge(R);break}}function Ge(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(Qa),ne(R),n.dispatchEvent(bu))}function $e(R){n.enabled===!1||n.enablePan===!1||k(R)}function xt(R){switch(se(R),E.length){case 1:switch(n.touches.ONE){case di.ROTATE:if(n.enableRotate===!1)return;J(),s=r.TOUCH_ROTATE;break;case di.PAN:if(n.enablePan===!1)return;oe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;C(),s=r.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Qa)}function w(R){switch(se(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ae(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(R),n.update();break;default:s=r.NONE}}function y(R){n.enabled!==!1&&R.preventDefault()}function G(R){E.push(R)}function ie(R){delete A[R.pointerId];for(let ee=0;ee<E.length;ee++)if(E[ee].pointerId==R.pointerId){E.splice(ee,1);return}}function se(R){let ee=A[R.pointerId];ee===void 0&&(ee=new we,A[R.pointerId]=ee),ee.set(R.pageX,R.pageY)}function ue(R){const ee=R.pointerId===E[0].pointerId?E[1]:E[0];return A[ee.pointerId]}n.domElement.addEventListener("contextmenu",y),n.domElement.addEventListener("pointerdown",Pe),n.domElement.addEventListener("pointercancel",et),n.domElement.addEventListener("wheel",Ge,{passive:!1}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Tu=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(Tu(""))}catch{Tu=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Ht=Uint8Array,Nn=Uint16Array,Fo=Uint32Array,Wf=new Ht([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xf=new Ht([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),SE=new Ht([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),jf=function(i,e){for(var t=new Nn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Fo(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},qf=jf(Wf,2),Yf=qf[0],bE=qf[1];Yf[28]=258,bE[258]=28;var TE=jf(Xf,0),wE=TE[0],Oo=new Nn(32768);for(var Ze=0;Ze<32768;++Ze){var Dn=(Ze&43690)>>>1|(Ze&21845)<<1;Dn=(Dn&52428)>>>2|(Dn&13107)<<2,Dn=(Dn&61680)>>>4|(Dn&3855)<<4,Oo[Ze]=((Dn&65280)>>>8|(Dn&255)<<8)>>>1}var wr=function(i,e,t){for(var n=i.length,r=0,s=new Nn(e);r<n;++r)++s[i[r]-1];var a=new Nn(e);for(r=0;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new Nn(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Oo[h]>>>l]=c}else for(o=new Nn(n),r=0;r<n;++r)i[r]&&(o[r]=Oo[a[i[r]-1]++]>>>15-i[r]);return o},jr=new Ht(288);for(var Ze=0;Ze<144;++Ze)jr[Ze]=8;for(var Ze=144;Ze<256;++Ze)jr[Ze]=9;for(var Ze=256;Ze<280;++Ze)jr[Ze]=7;for(var Ze=280;Ze<288;++Ze)jr[Ze]=8;var Kf=new Ht(32);for(var Ze=0;Ze<32;++Ze)Kf[Ze]=5;var AE=wr(jr,9,1),RE=wr(Kf,5,1),eo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Zt=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},to=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},CE=function(i){return(i/8|0)+(i&7&&1)},LE=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof Nn?Nn:i instanceof Fo?Fo:Ht)(t-e);return n.set(i.subarray(e,t)),n},PE=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new Ht(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new Ht(n*3));var a=function(le){var C=e.length;if(le>C){var me=new Ht(Math.max(C*2,le));me.set(e),e=me}},o=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,p=t.n,g=n*8;do{if(!u){t.f=o=Zt(i,l,1);var _=Zt(i,l+1,3);if(l+=3,_)if(_==1)u=AE,h=RE,f=9,p=5;else if(_==2){var x=Zt(i,l,31)+257,T=Zt(i,l+10,15)+4,E=x+Zt(i,l+5,31)+1;l+=14;for(var A=new Ht(E),D=new Ht(19),O=0;O<T;++O)D[SE[O]]=Zt(i,l+O*3,7);l+=T*3;for(var v=eo(D),b=(1<<v)-1,V=wr(D,v,1),O=0;O<E;){var X=V[Zt(i,l,b)];l+=X&15;var m=X>>>4;if(m<16)A[O++]=m;else{var I=0,F=0;for(m==16?(F=3+Zt(i,l,3),l+=2,I=A[O-1]):m==17?(F=3+Zt(i,l,7),l+=3):m==18&&(F=11+Zt(i,l,127),l+=7);F--;)A[O++]=I}}var H=A.subarray(0,x),Q=A.subarray(x);f=eo(H),p=eo(Q),u=wr(H,f,1),h=wr(Q,p,1)}else throw"invalid block type";else{var m=CE(l)+4,d=i[m-4]|i[m-3]<<8,M=m+d;if(M>n){if(s)throw"unexpected EOF";break}r&&a(c+d),e.set(i.subarray(m,M),c),t.b=c+=d,t.p=l=M*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&a(c+131072);for(var j=(1<<f)-1,B=(1<<p)-1,te=l;;te=l){var I=u[to(i,l)&j],W=I>>>4;if(l+=I&15,l>g){if(s)throw"unexpected EOF";break}if(!I)throw"invalid length/literal";if(W<256)e[c++]=W;else if(W==256){te=l,u=null;break}else{var ge=W-254;if(W>264){var O=W-257,ne=Wf[O];ge=Zt(i,l,(1<<ne)-1)+Yf[O],l+=ne}var k=h[to(i,l)&B],J=k>>>4;if(!k)throw"invalid distance";l+=k&15;var Q=wE[J];if(J>3){var ne=Xf[J];Q+=to(i,l)&(1<<ne)-1,l+=ne}if(l>g){if(s)throw"unexpected EOF";break}r&&a(c+131072);for(var oe=c+ge;c<oe;c+=4)e[c]=e[c-Q],e[c+1]=e[c+1-Q],e[c+2]=e[c+2-Q],e[c+3]=e[c+3-Q];c=oe}}t.l=u,t.p=te,t.b=c,u&&(o=1,t.m=f,t.d=h,t.n=p)}while(!o);return c==e.length?e:LE(e,0,c)},DE=new Ht(0),IE=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function UE(i,e){return PE((IE(i),i.subarray(2,-4)),e)}var NE=typeof TextDecoder<"u"&&new TextDecoder,FE=0;try{NE.decode(DE,{stream:!0}),FE=1}catch{}function $f(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,a=Math.floor((r+s)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?s=a:r=a,a=Math.floor((r+s)/2);return a}function OE(i,e,t,n){const r=[],s=[],a=[];r[0]=1;for(let o=1;o<=t;++o){s[o]=e-n[i+1-o],a[o]=n[i+o]-e;let l=0;for(let c=0;c<o;++c){const u=a[c+1],h=s[o-c],f=r[c]/(u+h);r[c]=l+u*f,l=h*f}r[o]=l}return r}function BE(i,e,t,n){const r=$f(i,n,e),s=OE(r,n,i,e),a=new Xe(0,0,0,0);for(let o=0;o<=i;++o){const l=t[r-i+o],c=s[o],u=l.w*c;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*c}return a}function kE(i,e,t,n,r){const s=[];for(let h=0;h<=t;++h)s[h]=0;const a=[];for(let h=0;h<=n;++h)a[h]=s.slice(0);const o=[];for(let h=0;h<=t;++h)o[h]=s.slice(0);o[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[i+1-h],c[h]=r[i+h]-e;let f=0;for(let p=0;p<h;++p){const g=c[p+1],_=l[h-p];o[h][p]=g+_;const m=o[p][h-1]/o[h][p];o[p][h]=f+g*m,f=_*m}o[h][h]=f}for(let h=0;h<=t;++h)a[0][h]=o[h][t];for(let h=0;h<=t;++h){let f=0,p=1;const g=[];for(let _=0;_<=t;++_)g[_]=s.slice(0);g[0][0]=1;for(let _=1;_<=n;++_){let m=0;const d=h-_,M=t-_;h>=_&&(g[p][0]=g[f][0]/o[M+1][d],m=g[p][0]*o[d][M]);const x=d>=-1?1:-d,T=h-1<=M?_-1:t-h;for(let A=x;A<=T;++A)g[p][A]=(g[f][A]-g[f][A-1])/o[M+1][d+A],m+=g[p][A]*o[d+A][M];h<=M&&(g[p][_]=-g[f][_-1]/o[M+1][h],m+=g[p][_]*o[h][M]),a[_][h]=m;const E=f;f=p,p=E}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)a[h][f]*=u;u*=t-h}return a}function zE(i,e,t,n,r){const s=r<i?r:i,a=[],o=$f(i,n,e),l=kE(o,n,i,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=s;++u){const h=c[o-i].clone().multiplyScalar(l[u][0]);for(let f=1;f<=i;++f)h.add(c[o-i+f].clone().multiplyScalar(l[u][f]));a[u]=h}for(let u=s+1;u<=r+1;++u)a[u]=new Xe(0,0,0);return a}function HE(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function VE(i){const e=i.length,t=[],n=[];for(let s=0;s<e;++s){const a=i[s];t[s]=new L(a.x,a.y,a.z),n[s]=a.w}const r=[];for(let s=0;s<e;++s){const a=t[s].clone();for(let o=1;o<=s;++o)a.sub(r[s-o].clone().multiplyScalar(HE(s,o)*n[o]));r[s]=a.divideScalar(n[0])}return r}function GE(i,e,t,n,r){const s=zE(i,e,t,n,r);return VE(s)}class WE extends XM{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new Xe(o.x,o.y,o.z,o.w)}}getPoint(e,t=new L){const n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=BE(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new L){const n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=GE(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}}let Oe,st,Ct;class XE extends sa{constructor(e){super(e)}load(e,t,n,r){const s=this,a=s.path===""?hE.extractUrlBase(e):s.path,o=new rE(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(ZE(e))Oe=new $E().parse(e);else{const r=ed(e);if(!JE(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Au(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Au(r));Oe=new KE().parse(r)}const n=new Vf(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new jE(n,this.manager).parse(Oe)}}class jE{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){st=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new qE().parse(r);return this.parseScene(r,s,n),Ct}parseConnections(){const e=new Map;return"Connections"in Oe&&Oe.Connections.connections.forEach(function(n){const r=n[0],s=n[1],a=n[2];e.has(r)||e.set(r,{parents:[],children:[]});const o={ID:s,relationship:a};e.get(r).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:a};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Oe.Objects){const n=Oe.Objects.Video;for(const r in n){const s=n[r],a=parseInt(r);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){const o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){const c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Oe.Objects){const n=Oe.Objects.Texture;for(const r in n){const s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,a=r!==void 0?r.value:0,o=s!==void 0?s.value:0;if(n.wrapS=a===0?Pr:Nt,n.wrapT=o===0?Pr:Nt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const r=this.textureLoader.path,s=st.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new vt):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new vt):a=this.textureLoader.load(n);return this.textureLoader.setPath(r),a}parseMaterials(e){const t=new Map;if("Material"in Oe.Objects){const n=Oe.Objects.Material;for(const r in n){const s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const n=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!st.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(s.toLowerCase()){case"phong":o=new $a;break;case"lambert":o=new jM;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new $a;break}return o.setValues(a),o.name=r,o}parseParameters(e,t,n){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Le().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Le().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Le().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Le().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Le().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Le().fromArray(e.SpecularColor.value).convertSRGBToLinear());const s=this;return st.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":r.bumpMap=s.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,a.ID),r.map!==void 0&&(r.map.colorSpace=Ce);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,a.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,a.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=Ce);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,a.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,a.ID),r.envMap!==void 0&&(r.envMap.mapping=Ds,r.envMap.colorSpace=Ce);break;case"SpecularColor":r.specularMap=s.getTexture(t,a.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=Ce);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,a.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),r}getTexture(e,t){return"LayeredTexture"in Oe.Objects&&t in Oe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=st.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Oe.Objects){const n=Oe.Objects.Deformer;for(const r in n){const s=n[r],a=st.get(parseInt(r));if(s.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=r,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[r]=o}else if(s.attrType==="BlendShape"){const o={id:r};o.rawTargets=this.parseMorphTargets(a,n),o.id=r,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const a={ID:r.ID,indices:[],weights:[],transformLink:new Se().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],a=t[s.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=st.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Ct=new Bi;const r=this.parseModels(e.skeletons,t,n),s=Oe.Objects.Model,a=this;r.forEach(function(l){const c=s[l.ID];a.setLookAtProperties(l,c),st.get(l.ID).parents.forEach(function(h){const f=r.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&Ct.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),Ct.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Jf(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new YE().parse();Ct.children.length===1&&Ct.children[0].isGroup&&(Ct.children[0].animations=o,Ct=Ct.children[0]),Ct.animations=o}parseModels(e,t,n){const r=new Map,s=Oe.Objects.Model;for(const a in s){const o=parseInt(a),l=s[a],c=st.get(o);let u=this.buildSkeleton(c,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Io;break;case"Null":default:u=new Bi;break}u.name=l.attrName?We.sanitizeNodeName(l.attrName):"",u.ID=o}this.getTransformData(u,l),r.set(o,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,u){if(c.ID===a.ID){const h=s;s=new Io,s.matrixWorld.copy(c.transformLink),s.name=r?We.sanitizeNodeName(r):"",s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){const s=Oe.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new Qe;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new At(u,c,s,a),h!==null&&t.setFocalLength(h);break;case 1:t=new gl(-o/2,o/2,l/2,-l/2,s,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new Qe;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){const s=Oe.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new Qe;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Le().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Uo(s,a,o,l);break;case 1:t=new uE(s,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=on.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=on.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new oE(s,a,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Uo(s,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new $a({color:13421772}),o.push(a)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new HM(s,a),r.normalizeSkinWeights()):r=new cn(s,a),r}createCurve(e,t){const n=e.children.reduce(function(s,a){return t.has(a.ID)&&(s=t.get(a.ID)),s},null),r=new Bf({color:3342591,linewidth:1});return new WM(n,r)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Qf(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&st.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=Oe.Objects.Model[r.ID];if("Lcl_Translation"in s){const a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Ct.add(e.target)):e.lookAt(new L().fromArray(a))}}})}bindSkeleton(e,t,n){const r=this.parsePoseNodes();for(const s in e){const a=e[s];st.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;st.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new vl(a.bones),r[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Oe.Objects){const t=Oe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Se().fromArray(s.Matrix.a)}):e[r.Node]=new Se().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Oe&&"AmbientColor"in Oe.GlobalSettings){const e=Oe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){const s=new Le(t,n,r).convertSRGBToLinear();Ct.add(new Gf(s,1))}}}}class qE{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Oe.Objects){const n=Oe.Objects.Geometry;for(const r in n){const s=st.get(parseInt(r)),a=this.parseGeometry(s,n[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const r=n.skeletons,s=[],a=e.parents.map(function(h){return Oe.Objects.Model[h.ID]});if(a.length===0)return;const o=e.children.reduce(function(h,f){return r[f.ID]!==void 0&&(h=r[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Qf(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Jf(c);return this.genGeometry(t,o,s,u)}genGeometry(e,t,n,r){const s=new Xt;e.attrName&&(s.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new Lt(o.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new Lt(o.colors,3)),t&&(s.setAttribute("skinIndex",new dl(o.weightsIndices,4)),s.setAttribute("skinWeight",new Lt(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){const c=new ze().getNormalMatrix(r),u=new Lt(o.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;s.setAttribute(h,new Lt(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(h,f){h!==c&&(s.addGroup(u,f-u,c),c=h,u=f)}),s.groups.length>0){const h=s.groups[s.groups.length-1],f=h.start+h.count;f!==o.materialIndex.length&&s.addGroup(f,o.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:s,weight:r.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,r=0,s=!1,a=[],o=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(p,g){let _,m=!1;p<0&&(p=p^-1,m=!0);let d=[],M=[];if(a.push(p*3,p*3+1,p*3+2),e.color){const x=ys(g,n,p,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(x){M.push(x.weight),d.push(x.id)}),M.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],T=[0,0,0,0];M.forEach(function(E,A){let D=E,O=d[A];T.forEach(function(v,b,V){if(D>v){V[b]=D,D=v;const X=x[b];x[b]=O,O=X}})}),d=x,M=T}for(;M.length<4;)M.push(0),d.push(0);for(let x=0;x<4;++x)u.push(M[x]),h.push(d[x])}if(e.normal){const x=ys(g,n,p,e.normal);o.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=ys(g,n,p,e.material)[0],_<0&&(f.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(x,T){const E=ys(g,n,p,x);c[T]===void 0&&(c[T]=[]),c[T].push(E[0]),c[T].push(E[1])}),r++,m&&(r>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,a,_,o,l,c,u,h,r),n++,r=0,a=[],o=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,r,s,a,o,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(h-1)*3]),e.colors.push(a[(h-1)*3+1]),e.colors.push(a[(h-1)*3+2]),e.colors.push(a[h*3]),e.colors.push(a[h*3+1]),e.colors.push(a[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(f,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(o[p][0]),e.uvs[p].push(o[p][1]),e.uvs[p].push(o[p][(h-1)*2]),e.uvs[p].push(o[p][(h-1)*2+1]),e.uvs[p].push(o[p][h*2]),e.uvs[p].push(o[p][h*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Oe.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,o.name)})})}genMorphGeometry(e,t,n,r,s){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const _=l[g]*3;u[_]=o[g*3],u[_+1]=o[g*3+1],u[_+2]=o[g*3+2]}const h={vertexIndices:a,vertexPositions:u},f=this.genBuffers(h),p=new Lt(f.vertex,3);p.name=s||n.attrName,p.applyMatrix4(r),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a;let s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let a=0,o=new Le;a<r.length;a+=4)o.fromArray(r,a).convertSRGBToLinear().toArray(r,a);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const r=e.Materials.a,s=[];for(let a=0;a<r.length;++a)s.push(a);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Xt;const n=t-1,r=e.KnotVector.a,s=[],a=e.Points.a;for(let h=0,f=a.length;h<f;h+=4)s.push(new Xe().fromArray(a,h));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=n,l=r.length-1-o;for(let h=0;h<n;++h)s.push(s[h])}const u=new WE(n,r,s,o,l).getPoints(s.length*12);return new Xt().setFromPoints(u)}}class YE{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Oe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Oe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Oe.Objects.AnimationCurve;for(const n in t){const r={id:t[n].id,times:t[n].KeyTime.a.map(QE),values:t[n].KeyValueFloat.a},s=st.get(r.id);if(s!==void 0){const a=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=r:o.match(/Y/)?e.get(a).curves.y=r:o.match(/Z/)?e.get(a).curves.z=r:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=r)}}}parseAnimationLayers(e){const t=Oe.Objects.AnimationLayer,n=new Map;for(const r in t){const s=[],a=st.get(parseInt(r));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=st.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=Oe.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:f.attrName?We.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Ct.traverse(function(g){g.ID===f.id&&(p.transform=g.matrix,g.userData.transformData&&(p.eulerOrder=g.userData.transformData.eulerOrder))}),p.transform||(p.transform=new Se),"PreRotation"in f&&(p.preRotation=f.PreRotation.value),"PostRotation"in f&&(p.postRotation=f.PostRotation.value),s[c]=p}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=st.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID,f=st.get(h).parents[0].ID,p=st.get(f).parents[0].ID,g=st.get(p).parents[0].ID,_=Oe.Objects.Model[g],m={modelName:_.attrName?We.sanitizeNodeName(_.attrName):"",morphName:Oe.Objects.Deformer[h].attrName};s[c]=m}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){const t=Oe.Objects.AnimationStack,n={};for(const r in t){const s=st.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new JM(e.name,-1,t)}generateTracks(e){const t=[];let n=new L,r=new Vt,s=new L;if(e.transform&&e.transform.decompose(n,r,s),n=n.toArray(),r=new Gt().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,r){const s=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(s,t,n);return new Fr(e+"."+r,s,a)}generateRotationTrack(e,t,n,r,s,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(on.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(on.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(on.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);r!==void 0&&(r=r.map(on.degToRad),r.push(a),r=new Gt().fromArray(r),r=new Vt().setFromEuler(r)),s!==void 0&&(s=s.map(on.degToRad),s.push(a),s=new Gt().fromArray(s),s=new Vt().setFromEuler(s).invert());const c=new Vt,u=new Gt,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],a),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(h,f/3*4);return new rr(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=Ct.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Nr(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){const a=t[s];a!==r&&(t[n]=a,r=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const r=n,s=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const u=t.x.values[a];s.push(u),r[0]=u}else s.push(r[0]);if(o!==-1){const u=t.y.values[o];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],r=e.values[t]-n,s=Math.abs(r);if(s>=180){const a=s/180,o=r/a;let l=n+o;const c=e.times[t-1],h=(e.times[t]-c)/a;let f=c+h;const p=[],g=[];for(;f<e.times[t];)p.push(f),f+=h,g.push(l),l+=o;e.times=Ru(e.times,t,p),e.values=Ru(e.values,t,g)}}}}class KE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Zf,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){const a=r.match(/^[\s\t]*;/),o=r.match(/^[\s\t]*$/);if(a||o)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in o?(n==="PoseNode"?o.PoseNode.push(s):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=s)):typeof a.id=="number"?(o[n]={},o[n][a.id]=s):n!=="Properties70"&&(n==="PoseNode"?o[n]=[s]:o[n]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",s=[c,u],tS(s,h),a[r]===void 0&&(a[r]=[])}r==="Node"&&(a.id=s),r in a&&Array.isArray(a[r])?a[r].push(s):r!=="a"?a[r]=s:a.a=s,this.setCurrentProp(a,r),r==="a"&&s.slice(-1)!==","&&(a.a=io(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=io(t.a))}parseNodeSpecialProperty(e,t,n){const r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],a=r[1],o=r[2],l=r[3];let c=r[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=io(c);break}this.getPrevNode()[s]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class $E{parse(e){const t=new wu(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const r=new Zf;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(r===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(o,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){const r=[];n.propertyList.forEach(function(s,a){a!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const o=UE(new Uint8Array(e.getArrayBuffer(a))),l=new wu(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class wu{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}}class Zf{add(e,t){this[e]=t}}function ZE(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===ed(i,0,e.length)}function JE(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(r){const s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function Au(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function QE(i){return i/46186158e3}const eS=[];function ys(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);const s=r*n.dataSize,a=s+n.dataSize;return nS(eS,n.buffer,s,a)}const no=new Gt,Ni=new L;function Jf(i){const e=new Se,t=new Se,n=new Se,r=new Se,s=new Se,a=new Se,o=new Se,l=new Se,c=new Se,u=new Se,h=new Se,f=new Se,p=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(Ni.fromArray(i.translation)),i.preRotation){const b=i.preRotation.map(on.degToRad);b.push(i.eulerOrder||Gt.DEFAULT_ORDER),t.makeRotationFromEuler(no.fromArray(b))}if(i.rotation){const b=i.rotation.map(on.degToRad);b.push(i.eulerOrder||Gt.DEFAULT_ORDER),n.makeRotationFromEuler(no.fromArray(b))}if(i.postRotation){const b=i.postRotation.map(on.degToRad);b.push(i.eulerOrder||Gt.DEFAULT_ORDER),r.makeRotationFromEuler(no.fromArray(b)),r.invert()}i.scale&&s.scale(Ni.fromArray(i.scale)),i.scalingOffset&&o.setPosition(Ni.fromArray(i.scalingOffset)),i.scalingPivot&&a.setPosition(Ni.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(Ni.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(Ni.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const g=t.clone().multiply(n).multiply(r),_=new Se;_.extractRotation(u);const m=new Se;m.copyPosition(u);const d=m.clone().invert().multiply(u),M=_.clone().invert().multiply(d),x=s,T=new Se;if(p===0)T.copy(_).multiply(g).multiply(M).multiply(x);else if(p===1)T.copy(_).multiply(M).multiply(g).multiply(x);else{const V=new Se().scale(new L().setFromMatrixScale(h)).clone().invert(),X=M.clone().multiply(V);T.copy(_).multiply(g).multiply(X).multiply(x)}const E=c.clone().invert(),A=a.clone().invert();let D=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(E).multiply(o).multiply(a).multiply(s).multiply(A);const O=new Se().copyPosition(D),v=u.clone().multiply(O);return f.copyPosition(v),D=f.clone().multiply(T),D.premultiply(u.invert()),D}function Qf(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function io(i){return i.split(",").map(function(t){return parseFloat(t)})}function ed(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function tS(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function nS(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}function Ru(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}window.Alpine=uf;uf.start();function Cu(i){document.cookie="mode="+i}const ti=new Nf;ti.setSize(window.innerWidth,window.innerHeight);ti.setClearColor("#A3ABBD");function td(i){ti.setClearColor(i)}function iS(){Ar==="dark"&&(document.getElementById("checkbox").checked=!0),document.querySelector(".check").addEventListener("click",()=>{document.getElementById("checkbox").checked?(Cu("light"),id()):(Cu("dark"),nd()),console.log(document.getElementById("checkbox").checked)})}function nd(){document.documentElement.classList.add("dark"),document.getElementById("jrczImage").src="images/jrcz-transparent-white.png",document.getElementById("button-light1").className="button-dark",document.getElementById("button-light2").className="button-dark",document.getElementById("button-light3").className="button-dark",document.getElementById("button-light4").className="button-dark",document.querySelector(".widget-light").className="widget-dark",document.querySelector(".weather-status").style.color="#fff",td("#0E1A2B")}function id(){document.documentElement.classList.remove("dark"),document.getElementById("jrczImage").src="images/jrcz-transparent.png",document.getElementById("button-light1").className="button-light",document.getElementById("button-light2").className="button-light",document.getElementById("button-light3").className="button-light",document.getElementById("button-light4").className="button-light",document.querySelector(".widget-dark").className="widget-light",document.querySelector(".weather-status").style.color="black",td("#A3ABBD")}function rd(i){let e=i+"=",n=decodeURIComponent(document.cookie).split(";");for(let r=0;r<n.length;r++){let s=n[r];for(;s.charAt(0)===" ";)s=s.substring(1);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return""}const Ar=rd("mode");console.log(Ar);window.onload=function(){const i=window.location.href;i.includes("rooms")&&(rS(),console.log(Ar)),i.includes("model")&&(sS(),console.log("test")),i.includes("dashboard")&&console.log(Ar),rd("mode"),iS(),Ar==="dark"?(document.documentElement.classList.add("dark"),nd()):(document.documentElement.classList.remove("dark"),id())};function rS(){const i=JSON.parse(document.getElementById("world-map").dataset.maps),e=document.getElementById("tableBody");document.querySelectorAll(".roomContainer").forEach(t=>{t.addEventListener("click",function(){if(t.lastChild.id==="roomButtonsContainer"&&t.lastChild.remove(),e.innerHTML="",event.target.id==="roomName"){const o=document.getElementById("roomNameTable");o.className="text-2xl text-white font-bold dark:hover:text-white visible",o.innerHTML=i[event.target.parentNode.id-1].name;let l="";i[event.target.parentNode.id-1].room_time.forEach(c=>{l+=`<tr>
                     <td>${c.id}</td>
                     <td>${c.time}</td>
                     <td>${c.co2}</td>
                     <td>${c.temperature}</td>
                     <td>${c.outside_temperature}</td>
                     <td>${c.booked}</td>
                     </tr>`}),e.innerHTML=l}const n=document.createElement("div");n.id="roomButtonsContainer",n.className="flex flex-row justify-center absolute",n.style.marginLeft="-65px",t.appendChild(n);const r=document.createElement("button");r.id="editButton",r.className="hover:bg-red-700 text-white font-bold py-2 px-4 rounded",r.innerHTML="Edit",r.type="submit",n.appendChild(r),r.addEventListener("click",function(){const o=document.getElementById("editForm");o.action=`/rooms/${event.target.parentNode.parentNode.id}/edit`,o.submit()});const s=document.createElement("button");s.id="revertButton",s.className="hover:bg-red-700 text-white font-bold py-2 px-4 rounded",s.innerHTML="Revert",s.type="submit",n.appendChild(s),s.addEventListener("click",function(){document.getElementById("set_room_destroy").value=event.target.parentNode.parentNode.id,document.getElementById("destroyForm").submit()});const a=document.createElement("button");a.id="importButton",a.className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",a.innerHTML="Import",a.type="submit",a.addEventListener("click",function(){if(document.getElementById("set_room").value=event.target.parentNode.parentNode.id,document.getElementById("room_times").value!=="")document.getElementById("importForm").submit();else{const o=document.getElementById("errorContainer");o.innerHTML="";const l=document.createElement("p");l.className="text-red-600",l.innerHTML="* Please select a file",o.appendChild(l)}}),n.appendChild(a),t.addEventListener("mouseleave",function(){a.remove(),s.remove(),r.remove(),t.firstChild.className="text-2xl text-gray-500 font-bold dark:hover:text-white"})})}),document.querySelectorAll(".addContainer").forEach(t=>{t.addEventListener("click",function(){document.location.href=`/rooms/create?floor=${event.target.id}`})})}function sS(){document.getElementById("model").appendChild(ti.domElement);const i=new OM,e=new Uo;e.position.set(.8,2e3,1),i.add(e);const t=new Gf;i.add(t);const n=new At(75,window.innerWidth/window.innerHeight,.1,8e3);n.position.set(-2500,2e3,1500),n.updateProjectionMatrix();const r=new EE(n,ti.domElement);r.enableDamping=!0,r.target.set(0,1,0),r.minDistance=2500,r.maxDistance=4500,r.minPolarAngle=0,r.maxPolarAngle=Math.PI*.35;const s=new ME,a=new we,o=new XE;o.load("3D-models/0_floor.fbx",b=>{i.add(b),m(0),d(0),h(0),b.name="LoadedFloor"}),document.querySelectorAll(".button").forEach(b=>{b.addEventListener("click",c,!1)});function c(){M("LoadedFloor"),m(parseInt(this.value)),d(parseInt(this.value)),h(parseInt(this.value)),o.load(`3D-models/${this.value}_floor.fbx`,b=>{i.add(b),console.log(this.value),b.name="LoadedFloor"})}let u=[];function h(b){switch(x(u.length),u=[],b){case 0:A("RC021",-1300,400,-170),A("RC020",-1e3,400,-1500),A("RC017",100,400,-1300),A("RC023",400,400,-600),A("RC016",1250,400,-1e3),A("RC011",1250,400,750);break;case 1:A("RC102",500,850,1700),A("RC103",1250,850,1500),A("RC104",1250,850,500),A("RC108",-50,850,-600);break;case 2:A("RC213",-700,1300,50),A("RC214",-850,1300,800),A("RC201",-1e3,1300,1700),A("RC202",250,1300,1900),A("RC203",975,1300,1900),A("RC204",1350,1300,1900),A("RC205",1700,1300,1900),A("RC211",-150,1300,-1100),A("RC210",800,1300,-1100);break;case 3:A("RC301",-1100,1700,1800),A("RC304",250,1700,1800),A("RC305",1300,1700,1800),A("RC318",-900,1700,1150),A("RC317",-650,1700,650),A("RC316",-650,1700,100),A("RC315",-550,1700,-250),A("RC309",650,1700,-1050);break}}let f=null;function p(b){let V=null;a.x=b.clientX/window.innerWidth*2-1,a.y=-(b.clientY/window.innerHeight)*2+1,s.setFromCamera(a,n);let X=s.intersectObjects(Object.values(u)),I=[],F=[],H=[],Q=[],j=[],B=0,te="day",W=288;X.length>0&&($.ajax({url:"/model-data/"+X[0].object.customIndex,type:"GET"}).done(function(ge){V=ge;let ne=X[0].object.customIndex,k=[],J=[],oe=[],le=[],C=[];if(V!==null)for(let me=0;me<V.length;me++)V[me].name===ne&&(k.push(V[me].temperature),J.push(V[me].co2),oe.push(V[me].time),le.push(V[me].outside_temperature),V[me].booked===0||V[me].booked===null?C.push(null):C.push(V[me].booked));I=k.reverse(),F=J.reverse(),H=oe.reverse(),Q=le.reverse(),j=C.reverse(),g(B,W,I,F,H,Q,j),$("#myModal").modal("show")}),document.getElementById("myModalLabel").innerHTML=X[0].object.customIndex,document.getElementById("weekButton").addEventListener("click",function(){te="week",W=2016,B=0,g(B,W,I,F,H,Q,j)}),document.getElementById("dayButton").addEventListener("click",function(){te="day",W=288,B=0,g(B,W,I,F,H,Q,j)}),document.getElementById("hourButton").addEventListener("click",function(){te="hour",W=12,B=0,g(B,W,I,F,H,Q,j)}),document.getElementById("backData").addEventListener("click",function(){switch(te){case"week":B+=2016,W=B+2016;break;case"day":B+=288,W=B+288;break;case"hour":B+=12,W=B+12;break}g(B,W,I,F,H,Q,j)}),document.getElementById("nextData").addEventListener("click",function(){switch(te){case"week":B-=2016,W=B+2016;break;case"day":B-=288,W=B+288;break;case"hour":B-=12,W=B+12;break}g(B,W,I,F,H,Q,j)}))}function g(b,V,X,I,F,H,Q){let j=X.slice(b,V),B=I.slice(b,V),te=F.slice(b,V),W=H.slice(b,V),ge=Q.slice(b,V),ne="",k=j.reverse(),J=B.reverse(),oe=te.reverse(),le=W.reverse(),C=ge.reverse();document.getElementById("highTemp").innerHTML=Math.max(...j).toString(),document.getElementById("lowTemp").innerHTML=Math.min(...j).toString(),document.getElementById("highCo2").innerHTML=Math.max(...B).toString(),document.getElementById("lowCo2").innerHTML=Math.min(...B).toString();const me=document.getElementById("roomsContainer");if(me.innerHTML="",j.length===0)document.getElementById("errorData").innerHTML="No data available";else{document.getElementById("errorData").innerHTML="";for(let ae=0;ae<k.length;ae+=12)if((k[ae]-le[ae]>3||k[ae]>=21)&&C[ae]===null&&J[ae]<450){const ye=document.createElement("div");ye.id="roomContainer",ye.className="bg-red-600 rounded p-1",me.appendChild(ye);const Be=document.createElement("div");Be.id="roomTime",Be.className="text-white",Be.innerHTML=new Date(oe[ae]).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),ye.appendChild(Be)}}switch(V){case 2016:ne="day";break;case 288:ne="hour";break;case 12:ne="minute";break}f&&f.destroy();const be=document.getElementById("myChartTemp");f=new Chart(be,{type:"line",data:{labels:oe,datasets:[{label:"Room Temp",data:k,borderWidth:1,yAxisID:"y",borderColor:"rgb(0,33,255)",backgroundColor:"rgba(0,33,255,0.1)"},{label:"Room CO2",data:J,borderWidth:1,yAxisID:"y1",borderColor:"rgb(255,173,0)",backgroundColor:"rgba(255,173,0,0.1)"},{label:"Outside Temp",data:le,borderWidth:1,yAxisID:"y",borderColor:"rgb(47,196,83)",backgroundColor:"rgb(47,196,83,0.1)"},{label:"Bookings",data:C,borderWidth:1,yAxisID:"y3",borderColor:"rgb(243,86,2)",backgroundColor:"rgb(243,86,2,0.1)"}]},options:{responsive:!0,scales:{x:{type:"time",time:{unit:ne,displayFormats:{hour:"MMMM dd HH:mm",minute:"MMMM dd HH:mm",day:"MMMM dd HH:mm"}},ticks:{source:"labels"}},y:{display:!0,position:"right",beginAtZero:!0,min:0,max:35,ticks:{stepSize:2}},y1:{display:!0,position:"left",beginAtZero:!0,min:200,max:900,ticks:{stepSize:100}},y3:{display:!1,position:"left",beginAtZero:!0,min:-10,max:10,ticks:{stepSize:1}}},plugins:{zoom:{zoom:{wheel:{enabled:!0},pinch:{enabled:!0},pan:{enabled:!0,mode:"xy"},mode:"xy"},limits:{x:{min:"original",max:"original"},y:{min:"original",max:"original"}}}}}})}function _(b){a.x=b.clientX/window.innerWidth*2-1,a.y=-(b.clientY/window.innerHeight)*2+1,s.setFromCamera(a,n),s.intersectObjects(Object.values(u)).length>0?document.body.style.cursor="pointer":document.body.style.cursor="auto"}window.addEventListener("click",p,!1),window.addEventListener("mousemove",_,!1);function m(b){switch(b){case 0:n.position.set(-2500,2500,1500),n.updateProjectionMatrix();break;case 1:n.position.set(-2e3,4e3,1500),n.updateProjectionMatrix();break;case 2:n.position.set(-2500,4e3,3500),n.updateProjectionMatrix();break;case 3:n.position.set(-3e3,5e3,1500),n.updateProjectionMatrix();break}}function d(b){switch(b){case 0:r.minDistance=2500,r.maxDistance=4e3,r.minPolarAngle=0,r.maxPolarAngle=Math.PI*.35;break;case 1:r.minDistance=3e3,r.maxDistance=4500,r.minPolarAngle=0,r.maxPolarAngle=Math.PI*.35;break;case 2:r.minDistance=3500,r.maxDistance=5e3,r.minPolarAngle=0,r.maxPolarAngle=Math.PI*.35;break;case 3:r.minDistance=3500,r.maxDistance=5e3,r.minPolarAngle=0,r.maxPolarAngle=Math.PI*.3;break}}function M(b){let V=i.getObjectByName(b);i.remove(V),v()}function x(b){let V=0;for(;V<=b;){let X=i.getObjectByName("room");i.remove(X),v(),V++}}const T=new Vf().load("images/temperature-normal.png"),E=new Ff({map:T,color:16777215});function A(b,V,X,I){const F=new kM(E);F.scale.set(100,200,1),F.position.set(V,X,I),F.customIndex=b,F.name="room",u.push(F),i.add(F)}window.addEventListener("resize",D,!1);function D(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),ti.setSize(window.innerWidth,window.innerHeight),v()}function O(){requestAnimationFrame(O),r.update(),v()}function v(){ti.render(i,n)}O()}
