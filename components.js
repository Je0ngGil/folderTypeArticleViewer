/*! For license information please see components.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{decode:()=>re,encode:()=>ie,format:()=>se,parse:()=>ke});var r={};t.r(r),t.d(r,{Any:()=>we,Cc:()=>ve,Cf:()=>xe,P:()=>_e,Z:()=>Ae});var o={};t.r(o),t.d(o,{arrayReplaceAt:()=>Qe,assign:()=>Je,escapeHtml:()=>lr,escapeRE:()=>dr,fromCodePoint:()=>Ke,has:()=>We,isMdAsciiPunct:()=>fr,isPunctChar:()=>pr,isSpace:()=>hr,isString:()=>Ze,isValidEntityCode:()=>Ye,isWhiteSpace:()=>ur,lib:()=>gr,normalizeReference:()=>mr,unescapeAll:()=>or,unescapeMd:()=>rr});var n={};t.r(n),t.d(n,{parseLinkDestination:()=>yr,parseLinkLabel:()=>br,parseLinkTitle:()=>kr});const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;class c{constructor(t,e,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&l.set(e,t))}return t}toString(){return this.cssText}}const d=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new c(r,t,a)},h=(t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=r.cssText,t.appendChild(e)}},u=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:p,defineProperty:f,getOwnPropertyDescriptor:m,getOwnPropertyNames:g,getOwnPropertySymbols:b,getPrototypeOf:y}=Object,k=globalThis,_=k.trustedTypes,w=_?_.emptyScript:"",v=k.reactiveElementPolyfillSupport,x=(t,e)=>t,A={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},C=(t,e)=>!p(t,e),E={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;class D extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=E){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&f(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:n}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const i=o?.call(this);n.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??E}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...g(t),...b(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:A).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:A;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r,o=!1,n){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??C)(o?n:this[t],e))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[x("elementProperties")]=new Map,D[x("finalized")]=new Map,v?.({ReactiveElement:D}),(k.reactiveElementVersions??=[]).push("2.0.0");const S=globalThis,$=S.trustedTypes,L=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,z="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,q="?"+T,R=`<${q}>`,M=document,F=()=>M.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,I=t=>O(t)||"function"==typeof t?.[Symbol.iterator],N="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,U=/>/g,H=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,Z=/"/g,G=/^(?:script|style|textarea|title)$/i,W=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),J=W(1),Q=(W(2),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),K=new WeakMap,X=M.createTreeWalker(M,129);function tt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(e):e}const et=(t,e)=>{const r=t.length-1,o=[];let n,i=2===e?"<svg>":"",s=B;for(let e=0;e<r;e++){const r=t[e];let a,l,c=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),null!==l);)d=s.lastIndex,s===B?"!--"===l[1]?s=j:void 0!==l[1]?s=U:void 0!==l[2]?(G.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=H):void 0!==l[3]&&(s=H):s===H?">"===l[0]?(s=n??B,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?H:'"'===l[3]?Z:V):s===Z||s===V?s=H:s===j||s===U?s=B:(s=H,n=void 0);const h=s===H&&t[e+1].startsWith("/>")?" ":"";i+=s===B?r+R:c>=0?(o.push(a),r.slice(0,c)+z+r.slice(c)+T+h):r+T+(-2===c?e:h)}return[tt(t,i+(t[r]||"<?>")+(2===e?"</svg>":"")),o]};class rt{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,i=0;const s=t.length-1,a=this.parts,[l,c]=et(t,e);if(this.el=rt.createElement(l,r),X.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=X.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(z)){const e=c[i++],r=o.getAttribute(t).split(T),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:s[2],strings:r,ctor:"."===s[1]?at:"?"===s[1]?lt:"@"===s[1]?ct:st}),o.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:n}),o.removeAttribute(t));if(G.test(o.tagName)){const t=o.textContent.split(T),e=t.length-1;if(e>0){o.textContent=$?$.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],F()),X.nextNode(),a.push({type:2,index:++n});o.append(t[e],F())}}}else if(8===o.nodeType)if(o.data===q)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(T,t+1));)a.push({type:7,index:n}),t+=T.length-1}n++}}static createElement(t,e){const r=M.createElement("template");return r.innerHTML=t,r}}function ot(t,e,r=t,o){if(e===Q)return e;let n=void 0!==o?r._$Co?.[o]:r._$Cl;const i=P(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),void 0===i?n=void 0:(n=new i(t),n._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(e=ot(t,n._$AS(t,e.values),n,o)),e}class nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??M).importNode(e,!0);X.currentNode=o;let n=X.nextNode(),i=0,s=0,a=r[0];for(;void 0!==a;){if(i===a.index){let e;2===a.type?e=new it(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new dt(n,this,t)),this._$AV.push(e),a=r[++s]}i!==a?.index&&(n=X.nextNode(),i++)}return X.currentNode=M,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class it{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),P(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):I(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=rt.createElement(tt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new nt(o,this),r=t.u(this.options);t.p(e),this.$(r),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new rt(t)),e}T(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new it(this.k(F()),this.k(F()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,n){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(t,e=this,r,o){const n=this.strings;let i=!1;if(void 0===n)t=ot(this,t,e,0),i=!P(t)||t!==this._$AH&&t!==Q,i&&(this._$AH=t);else{const o=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=ot(this,o[r+s],e,s),a===Q&&(a=this._$AH[s]),i||=!P(a)||a!==this._$AH[s],a===Y?t=Y:t!==Y&&(t+=(a??"")+n[s+1]),this._$AH[s]=a}i&&!o&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class at extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class lt extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class ct extends st{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){if((t=ot(this,t,e,0)??Y)===Q)return;const r=this._$AH,o=t===Y&&r!==Y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==Y&&(r===Y||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const ht={S:z,A:T,P:q,C:1,M:et,L:nt,R:I,V:ot,D:it,I:st,H:lt,N:ct,U:at,B:dt},ut=S.litHtmlPolyfillSupport;ut?.(rt,it),(S.litHtmlVersions??=[]).push("3.0.0");class pt extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=r?.renderBefore??null;o._$litPart$=n=new it(e.insertBefore(F(),t),t,void 0,r??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}pt._$litElement$=!0,pt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:pt});const ft=globalThis.litElementPolyfillSupport;ft?.({LitElement:pt}),(globalThis.litElementVersions??=[]).push("4.0.0");const mt=t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},gt={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:C},bt=(t=gt,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(void 0===i&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)};function yt(t){return(e,r)=>"object"==typeof r?bt(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}function kt(t){return yt({...t,state:!0,attribute:!1})}const _t=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,r),r);function wt(t,e){return(r,o,n)=>{const i=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:s}="object"==typeof o?r:n??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return _t(r,o,{get(){if(e){let e=t.call(this);return void 0===e&&(e=i(this),s.call(this,e)),e}return i(this)}})}return _t(r,o,{get(){return i(this)}})}}const vt=Symbol();class xt{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,e)=>{this.i=t,this.o=e})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,r){this.u=0,this.status=0,(this.p=t).addController(this);const o="object"==typeof e?e:{task:e,args:r};this._=o.task,this.v=o.args,this.j=o.argsEqual??At,this.m=o.onComplete,this.g=o.onError,this.autoRun=o.autoRun??!0,"initialValue"in o&&(this.l=o.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,r;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const o=++this.u;this.T=new AbortController;let n=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){n=!0,r=t}if(this.u===o){if(e===vt)this.status=0;else{if(!1===n){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(r)}catch{}this.status=3,this.o?.(r)}this.l=e,this.h=r}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const At=(t,e)=>t===e||t.length===e.length&&t.every(((t,r)=>!C(t,e[r])));var Ct=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let Et=class extends pt{constructor(){super(...arguments),this.icon="help-outline",this.key=""}render(){return J` <ion-icon name="${this.icon}"></ion-icon> `}};Et.styles=d`
    :host {
      position: relative;
      font-size: var(--big-font-size);

      color: var(--fifth-color);
      background-color: var(--first-color);
      border: 1px solid var(--first-color);

      border-radius: 25%;

      transition: 0.1s;
    }
    :host(:hover) {
      background-color: var(--third-color);
      color: var(--first-color);
      border: 1px solid var(--first-color);

      transform: scale(1.1);
      cursor: pointer;
    }
    :host(:active) {
      transform: scale(0.98);
      cursor: pointer;
    }

    ion-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `,Ct([yt()],Et.prototype,"icon",void 0),Ct([yt()],Et.prototype,"key",void 0),Et=Ct([mt("button-icon")],Et);const{D:Dt}=ht;class St{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const $t=(t,e)=>{const r=t._$AN;if(void 0===r)return!1;for(const t of r)t._$AO?.(e,!1),$t(t,e);return!0},Lt=t=>{let e,r;do{if(void 0===(e=t._$AM))break;r=e._$AN,r.delete(t),t=e}while(0===r?.size)},zt=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Rt(e)}};function Tt(t){void 0!==this._$AN?(Lt(this),this._$AM=t,zt(this)):this._$AM=t}function qt(t,e=!1,r=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(o))for(let t=r;t<o.length;t++)$t(o[t],!1),Lt(o[t]);else null!=o&&($t(o,!1),Lt(o));else $t(this,t)}const Rt=t=>{2==t.type&&(t._$AP??=qt,t._$AQ??=Tt)};class Mt extends St{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),zt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&($t(this,t),Lt(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const Ft=()=>new Pt;class Pt{}const Ot=new WeakMap,It=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Mt{render(t){return Y}update(t,[e]){const r=e!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),Y}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let r=Ot.get(e);void 0===r&&(r=new WeakMap,Ot.set(e,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?Ot.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});let Nt=class extends pt{constructor(){super(),this.inputRef=Ft()}activeEnter(t){"Enter"===t.key&&this.search()}activeButton(){this.search()}search(){const t=this.inputRef.value,e=t.value;t.value="",console.log(e)}render(){return J`
      <input
        type="text"
        id="searchInput"
        placeholder="검색하기"
        @keyup=${this.activeEnter}
        ${It(this.inputRef)}
        autocomplete="off"
      />
      <button-icon id="searchButton" @click=${this.activeButton}></button-icon>
    `}};Nt.styles=d`
    :host {
      display: flex;

      justify-content: space-between;
      align-items: center;

      height: 100%;
    }
    #searchInput {
      height: 80%;
      width: 10%;
      flex: 8 1;
      margin: 19px;

      color: var(--fifth-color);
      font-size: 1rem;

      border: 0;
      border-radius: 15px;
      outline: none;
      padding-left: 10px;
      background-color: var(--third-color);
    }
    #searchButton {
      flex: 2 0;
      aspect-ratio: 1;
      margin: 19px;
      font-size: 2vw;
    }
  `,Nt=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}([mt("input-search")],Nt);let Bt=class extends pt{test(t){t.currentTarget!==t.target&&console.log(t.target.getAttribute("key"))}render(){return J`
      <div id="iconContainer" @click=${this.test}>
        <Button-Icon class="iconItem" icon="caret-back-outline" key="backward"></Button-Icon>
        <Button-Icon class="iconItem" icon="home-outline" key="home"></Button-Icon>
        <Button-Icon class="iconItem" icon="caret-forward-outline" key="forward"></Button-Icon>
      </div>
      <div id="inputContainer">
        <Input-Search></Input-Search>
      </div>
    `}};Bt.styles=d`
    #iconContainer {
      display: flex;
      align-items: center;

      height: 100px;
      justify-content: space-around;
    }
    .iconItem {
      width: 20%;
      aspect-ratio: 1;
    }

    #inputContainer {
      height: 70px;
    }
  `,Bt=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}([mt("menubar-header")],Bt);var jt=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let Ut=class extends pt{render(){return J` <div id="directoryContainer">${this.docsDomElement}</div> `}};Ut.styles=d`
    :host {
      height: 100%;

      display: flex;
      flex-direction: column;
    }
    #directoryContainer {
      display: flex;
      flex-direction: column;
    }
  `,jt([yt({attribute:!1})],Ut.prototype,"docsDomElement",void 0),jt([wt("#directoryContainer")],Ut.prototype,"directoryContainer",void 0),Ut=jt([mt("menubar-body")],Ut);class Ht{constructor({name:t,type:e}){this.parent=null,this.name=t,this.type=e}registParent(t){this.parent=t}}var Vt=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let Zt=class extends pt{constructor(){super(...arguments),this.titleRef=Ft(),this.innerDirectoryRef=Ft(),this.name="폴더",this.isOpend=!1}activeFolder(){this.isOpend=!this.isOpend,this.titleRef.value?.classList.toggle("active"),this.innerDirectoryRef.value?.classList.toggle("active")}render(){return J`
      <div id="title" @click=${this.activeFolder} ${It(this.titleRef)}>
        <ion-icon name=${this.isOpend?"folder-open-outline":"folder-outline"}></ion-icon>
        <div>${this.name}</div>
      </div>
      <div id="innerDirectory" ${It(this.innerDirectoryRef)}>
        <slot>...</slot>
      </div>
    `}};Zt.styles=d`
    #title {
      border: 1px solid black;

      display: grid;
      align-items: center;

      grid-template-columns: min-content max-content;
      column-gap: 0.7rem;

      font-size: var(--normal-font-size);
      height: var(--big-font-size);
    }
    #title.active {
      color: var(--fifth-color);
      background-color: var(--third-color);
    }
    #title:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }

    #innerDirectory {
      visibility: hidden;

      opacity: 0;

      max-height: 0;
      transition: max-height 0.2s ease;
    }
    #innerDirectory.active {
      visibility: visible;
      opacity: 1;

      max-height: 1000px;
      transition: max-height 1.2s ease, opacity 0.5s ease;

      margin-left: 5%;
      padding-left: 3%;
      border-left: 2px solid var(--third-color);
    }
  `,Vt([yt()],Zt.prototype,"name",void 0),Vt([yt({attribute:!1})],Zt.prototype,"model",void 0),Vt([kt()],Zt.prototype,"isOpend",void 0),Zt=Vt([mt("menubar-directory")],Zt);class Gt extends Ht{constructor({name:t}){super({name:t,type:"directory"}),this.DirChildren=[],this.ArticleChildren=[],this.registDomElement()}registDomElement(){const t=new Zt;t.name=this.name,t.model=this,this.DirDomElement=t}registChildren(t){for(let e of t)"directory"===e.type?this.DirChildren.push(e):this.ArticleChildren.push(e);this.DirChildren.forEach((t=>t.registParent(this))),this.ArticleChildren.forEach((t=>t.registParent(this))),this.appendChildDocDomElement()}appendChildDocDomElement(){const t=this.DirChildren.map((t=>t.getDocsDomElment())),e=this.ArticleChildren.map((t=>t.getDocsDomElment()));this.DirDomElement.append(...t,...e)}getDocsDomElment(){return this.DirDomElement}unSelectAllArticles(){this.ArticleChildren.forEach((t=>t.unSelect())),this.DirChildren.forEach((t=>t.unSelectAllArticles()))}}var Wt=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let Jt=class extends pt{constructor(){super(),this.isSelect=!1}render(){return J`<div id="article" class=${this.isSelect?"selected":""}>
      <ion-icon name="document-outline"></ion-icon>
      <div>${this.name}</div>
    </div>`}};Jt.styles=d`
    #article {
      display: grid;
      grid-template-columns: min-content max-content max-content;
      column-gap: 0.7rem;
    }
    #article:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }
    #article.selected {
      color: var(--fifth-color);
      background-color: var(--first-color);
      &::after {
        content: '✔';
      }
    }
  `,Wt([yt()],Jt.prototype,"name",void 0),Wt([yt({attribute:!1})],Jt.prototype,"model",void 0),Wt([yt({attribute:!1})],Jt.prototype,"isSelect",void 0),Jt=Wt([mt("menubar-article")],Jt);class Qt extends Ht{constructor({name:t}){super({name:t,type:"article"}),this.registDomElement()}registDomElement(){const t=new Jt;t.name=this.name,t.model=this,this.articleDomElement=t}getDocsDomElment(){return this.articleDomElement}getCurrentPath(){let t=this.name,e=this.parent;for(;e;)t=e.name+"/"+t,e=e.parent;return t}select(){this.articleDomElement.isSelect=!0}unSelect(){this.articleDomElement.isSelect=!1}}class Yt{constructor(t){this.rootDirectory=this.convertToDocsItem(t)}convertToDocsItem(t){if("directory"===t.type){const e=new Gt({name:t.name}),r=t.children.map(this.convertToDocsItem.bind(this));return e.registChildren(r),e}return new Qt({name:t.name})}getRootDirElment(){return this.rootDirectory.getDocsDomElment()}addEventListenerToRootDirectory(t,e){this.getRootDirElment().addEventListener(t,e)}unSelectAllArticles(){this.rootDirectory.unSelectAllArticles()}}var Kt=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let Xt=class extends pt{constructor(){super(...arguments),this._getDataModel=new xt(this,{task:async()=>{const t=await fetch("docs-metadata.json"),e=await t.json();return this.docsModelController=new Yt(e),this.InitDocsModel(),this.docsModelController.getRootDirElment()},autoRun:!0,args:()=>[]})}InitDocsModel(){this.docsModelController.addEventListenerToRootDirectory("click",(t=>{const e=t.target.model;if("article"===e.type){const t=e.getCurrentPath(),r=new CustomEvent("requestContent",{detail:{path:t}});this.dispatchEvent(r),this.docsModelController.unSelectAllArticles(),e.select()}}))}render(){return J`
      ${this._getDataModel.render({initial:()=>J`<loding-spinner />`,pending:()=>J`<loding-spinner />`,complete:t=>J`<menubar-body .docsDomElement=${t}></menubar-body>`,error:t=>J`<p>Oops, something went wrong: ${t}</p>`})}
    `}};Xt.styles=d`
    :host {
      position: fixed;
      left: 0;
      height: 100vh;
      bottom: 0;
      width: var(--sidebar-width);

      display: flex;
      flex-direction: column;

      border: 1px solid black;

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `,Kt([kt()],Xt.prototype,"docsModelController",void 0),Xt=Kt([mt("menubar-container")],Xt);const te={};function ee(t,e){"string"!=typeof e&&(e=ee.defaultChars);const r=function(t){let e=te[t];if(e)return e;e=te[t]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);e.push(r)}for(let r=0;r<t.length;r++){const o=t.charCodeAt(r);e[o]="%"+("0"+o.toString(16).toUpperCase()).slice(-2)}return e}(e);return t.replace(/(%[a-f0-9]{2})+/gi,(function(t){let e="";for(let o=0,n=t.length;o<n;o+=3){const i=parseInt(t.slice(o+1,o+3),16);if(i<128)e+=r[i];else{if(192==(224&i)&&o+3<n){const r=parseInt(t.slice(o+4,o+6),16);if(128==(192&r)){const t=i<<6&1984|63&r;e+=t<128?"��":String.fromCharCode(t),o+=3;continue}}if(224==(240&i)&&o+6<n){const r=parseInt(t.slice(o+4,o+6),16),n=parseInt(t.slice(o+7,o+9),16);if(128==(192&r)&&128==(192&n)){const t=i<<12&61440|r<<6&4032|63&n;e+=t<2048||t>=55296&&t<=57343?"���":String.fromCharCode(t),o+=6;continue}}if(240==(248&i)&&o+9<n){const r=parseInt(t.slice(o+4,o+6),16),n=parseInt(t.slice(o+7,o+9),16),s=parseInt(t.slice(o+10,o+12),16);if(128==(192&r)&&128==(192&n)&&128==(192&s)){let t=i<<18&1835008|r<<12&258048|n<<6&4032|63&s;t<65536||t>1114111?e+="����":(t-=65536,e+=String.fromCharCode(55296+(t>>10),56320+(1023&t))),o+=9;continue}}e+="�"}}return e}))}ee.defaultChars=";/?:@&=+$,#",ee.componentChars="";const re=ee,oe={};function ne(t,e,r){"string"!=typeof e&&(r=e,e=ne.defaultChars),void 0===r&&(r=!0);const o=function(t){let e=oe[t];if(e)return e;e=oe[t]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?e.push(r):e.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let r=0;r<t.length;r++)e[t.charCodeAt(r)]=t[r];return e}(e);let n="";for(let e=0,i=t.length;e<i;e++){const s=t.charCodeAt(e);if(r&&37===s&&e+2<i&&/^[0-9a-f]{2}$/i.test(t.slice(e+1,e+3)))n+=t.slice(e,e+3),e+=2;else if(s<128)n+=o[s];else if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&e+1<i){const r=t.charCodeAt(e+1);if(r>=56320&&r<=57343){n+=encodeURIComponent(t[e]+t[e+1]),e++;continue}}n+="%EF%BF%BD"}else n+=encodeURIComponent(t[e])}return n}ne.defaultChars=";/?:@&=+$,-_.!~*'()#",ne.componentChars="-_.!~*'()";const ie=ne;function se(t){let e="";return e+=t.protocol||"",e+=t.slashes?"//":"",e+=t.auth?t.auth+"@":"",t.hostname&&-1!==t.hostname.indexOf(":")?e+="["+t.hostname+"]":e+=t.hostname||"",e+=t.port?":"+t.port:"",e+=t.pathname||"",e+=t.search||"",e+=t.hash||"",e}function ae(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const le=/^([a-z0-9.+-]+:)/i,ce=/:[0-9]*$/,de=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,he=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),ue=["'"].concat(he),pe=["%","/","?",";","#"].concat(ue),fe=["/","?","#"],me=/^[+a-z0-9A-Z_-]{0,63}$/,ge=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,be={javascript:!0,"javascript:":!0},ye={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};ae.prototype.parse=function(t,e){let r,o,n,i=t;if(i=i.trim(),!e&&1===t.split("#").length){const t=de.exec(i);if(t)return this.pathname=t[1],t[2]&&(this.search=t[2]),this}let s=le.exec(i);if(s&&(s=s[0],r=s.toLowerCase(),this.protocol=s,i=i.substr(s.length)),(e||s||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(n="//"===i.substr(0,2),!n||s&&be[s]||(i=i.substr(2),this.slashes=!0)),!be[s]&&(n||s&&!ye[s])){let t,e,r=-1;for(let t=0;t<fe.length;t++)o=i.indexOf(fe[t]),-1!==o&&(-1===r||o<r)&&(r=o);e=-1===r?i.lastIndexOf("@"):i.lastIndexOf("@",r),-1!==e&&(t=i.slice(0,e),i=i.slice(e+1),this.auth=t),r=-1;for(let t=0;t<pe.length;t++)o=i.indexOf(pe[t]),-1!==o&&(-1===r||o<r)&&(r=o);-1===r&&(r=i.length),":"===i[r-1]&&r--;const n=i.slice(0,r);i=i.slice(r),this.parseHost(n),this.hostname=this.hostname||"";const s="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!s){const t=this.hostname.split(/\./);for(let e=0,r=t.length;e<r;e++){const r=t[e];if(r&&!r.match(me)){let o="";for(let t=0,e=r.length;t<e;t++)r.charCodeAt(t)>127?o+="x":o+=r[t];if(!o.match(me)){const o=t.slice(0,e),n=t.slice(e+1),s=r.match(ge);s&&(o.push(s[1]),n.unshift(s[2])),n.length&&(i=n.join(".")+i),this.hostname=o.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),s&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=i.indexOf("#");-1!==a&&(this.hash=i.substr(a),i=i.slice(0,a));const l=i.indexOf("?");return-1!==l&&(this.search=i.substr(l),i=i.slice(0,l)),i&&(this.pathname=i),ye[r]&&this.hostname&&!this.pathname&&(this.pathname=""),this},ae.prototype.parseHost=function(t){let e=ce.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};const ke=function(t,e){if(t&&t instanceof ae)return t;const r=new ae;return r.parse(t,e),r},_e=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,we=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ve=/[\0-\x1F\x7F-\x9F]/,xe=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Ae=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Ce=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((t=>t.charCodeAt(0)))),Ee=new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((t=>t.charCodeAt(0))));var De;const Se=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),$e=null!==(De=String.fromCodePoint)&&void 0!==De?De:function(t){let e="";return t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|1023&t),e+=String.fromCharCode(t),e};var Le,ze,Te,qe,Re;function Me(t){return t>=Le.ZERO&&t<=Le.NINE}!function(t){t[t.NUM=35]="NUM",t[t.SEMI=59]="SEMI",t[t.EQUALS=61]="EQUALS",t[t.ZERO=48]="ZERO",t[t.NINE=57]="NINE",t[t.LOWER_A=97]="LOWER_A",t[t.LOWER_F=102]="LOWER_F",t[t.LOWER_X=120]="LOWER_X",t[t.LOWER_Z=122]="LOWER_Z",t[t.UPPER_A=65]="UPPER_A",t[t.UPPER_F=70]="UPPER_F",t[t.UPPER_Z=90]="UPPER_Z"}(Le||(Le={})),function(t){t[t.VALUE_LENGTH=49152]="VALUE_LENGTH",t[t.BRANCH_LENGTH=16256]="BRANCH_LENGTH",t[t.JUMP_TABLE=127]="JUMP_TABLE"}(ze||(ze={})),function(t){t[t.EntityStart=0]="EntityStart",t[t.NumericStart=1]="NumericStart",t[t.NumericDecimal=2]="NumericDecimal",t[t.NumericHex=3]="NumericHex",t[t.NamedEntity=4]="NamedEntity"}(Te||(Te={})),(Re=qe||(qe={}))[Re.Legacy=0]="Legacy",Re[Re.Strict=1]="Strict",Re[Re.Attribute=2]="Attribute";class Fe{constructor(t,e,r){this.decodeTree=t,this.emitCodePoint=e,this.errors=r,this.state=Te.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=qe.Strict}startEntity(t){this.decodeMode=t,this.state=Te.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,e){switch(this.state){case Te.EntityStart:return t.charCodeAt(e)===Le.NUM?(this.state=Te.NumericStart,this.consumed+=1,this.stateNumericStart(t,e+1)):(this.state=Te.NamedEntity,this.stateNamedEntity(t,e));case Te.NumericStart:return this.stateNumericStart(t,e);case Te.NumericDecimal:return this.stateNumericDecimal(t,e);case Te.NumericHex:return this.stateNumericHex(t,e);case Te.NamedEntity:return this.stateNamedEntity(t,e)}}stateNumericStart(t,e){return e>=t.length?-1:(32|t.charCodeAt(e))===Le.LOWER_X?(this.state=Te.NumericHex,this.consumed+=1,this.stateNumericHex(t,e+1)):(this.state=Te.NumericDecimal,this.stateNumericDecimal(t,e))}addToNumericResult(t,e,r,o){if(e!==r){const n=r-e;this.result=this.result*Math.pow(o,n)+parseInt(t.substr(e,n),o),this.consumed+=n}}stateNumericHex(t,e){const r=e;for(;e<t.length;){const n=t.charCodeAt(e);if(!(Me(n)||(o=n,o>=Le.UPPER_A&&o<=Le.UPPER_F||o>=Le.LOWER_A&&o<=Le.LOWER_F)))return this.addToNumericResult(t,r,e,16),this.emitNumericEntity(n,3);e+=1}var o;return this.addToNumericResult(t,r,e,16),-1}stateNumericDecimal(t,e){const r=e;for(;e<t.length;){const o=t.charCodeAt(e);if(!Me(o))return this.addToNumericResult(t,r,e,10),this.emitNumericEntity(o,2);e+=1}return this.addToNumericResult(t,r,e,10),-1}emitNumericEntity(t,e){var r;if(this.consumed<=e)return null===(r=this.errors)||void 0===r||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===Le.SEMI)this.consumed+=1;else if(this.decodeMode===qe.Strict)return 0;return this.emitCodePoint(function(t){var e;return t>=55296&&t<=57343||t>1114111?65533:null!==(e=Se.get(t))&&void 0!==e?e:t}(this.result),this.consumed),this.errors&&(t!==Le.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,e){const{decodeTree:r}=this;let o=r[this.treeIndex],n=(o&ze.VALUE_LENGTH)>>14;for(;e<t.length;e++,this.excess++){const s=t.charCodeAt(e);if(this.treeIndex=Oe(r,o,this.treeIndex+Math.max(1,n),s),this.treeIndex<0)return 0===this.result||this.decodeMode===qe.Attribute&&(0===n||((i=s)===Le.EQUALS||function(t){return t>=Le.UPPER_A&&t<=Le.UPPER_Z||t>=Le.LOWER_A&&t<=Le.LOWER_Z||Me(t)}(i)))?0:this.emitNotTerminatedNamedEntity();if(o=r[this.treeIndex],n=(o&ze.VALUE_LENGTH)>>14,0!==n){if(s===Le.SEMI)return this.emitNamedEntityData(this.treeIndex,n,this.consumed+this.excess);this.decodeMode!==qe.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}var i;return-1}emitNotTerminatedNamedEntity(){var t;const{result:e,decodeTree:r}=this,o=(r[e]&ze.VALUE_LENGTH)>>14;return this.emitNamedEntityData(e,o,this.consumed),null===(t=this.errors)||void 0===t||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,e,r){const{decodeTree:o}=this;return this.emitCodePoint(1===e?o[t]&~ze.VALUE_LENGTH:o[t+1],r),3===e&&this.emitCodePoint(o[t+2],r),r}end(){var t;switch(this.state){case Te.NamedEntity:return 0===this.result||this.decodeMode===qe.Attribute&&this.result!==this.treeIndex?0:this.emitNotTerminatedNamedEntity();case Te.NumericDecimal:return this.emitNumericEntity(0,2);case Te.NumericHex:return this.emitNumericEntity(0,3);case Te.NumericStart:return null===(t=this.errors)||void 0===t||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Te.EntityStart:return 0}}}function Pe(t){let e="";const r=new Fe(t,(t=>e+=$e(t)));return function(t,o){let n=0,i=0;for(;(i=t.indexOf("&",i))>=0;){e+=t.slice(n,i),r.startEntity(o);const s=r.write(t,i+1);if(s<0){n=i+r.end();break}n=i+s,i=0===s?n+1:n}const s=e+t.slice(n);return e="",s}}function Oe(t,e,r,o){const n=(e&ze.BRANCH_LENGTH)>>7,i=e&ze.JUMP_TABLE;if(0===n)return 0!==i&&o===i?r:-1;if(i){const e=o-i;return e<0||e>=n?-1:t[r+e]-1}let s=r,a=s+n-1;for(;s<=a;){const e=s+a>>>1,r=t[e];if(r<o)s=e+1;else{if(!(r>o))return t[e+n];a=e-1}}return-1}const Ie=Pe(Ce);function Ne(t,e=qe.Legacy){return Ie(t,e)}function Be(t){for(let e=1;e<t.length;e++)t[e][0]+=t[e-1][0]+1;return t}Pe(Ee),new Map(Be([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(Be([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(Be([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(Be([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]));const je=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]);function Ue(t,e){return function(r){let o,n=0,i="";for(;o=t.exec(r);)n!==o.index&&(i+=r.substring(n,o.index)),i+=e.get(o[0].charCodeAt(0)),n=o.index+1;return i+r.substring(n)}}var He,Ve;function Ze(t){return"[object String]"===function(t){return Object.prototype.toString.call(t)}(t)}String.prototype.codePointAt,Ue(/[&<>'"]/g,je),Ue(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),Ue(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]])),function(t){t[t.XML=0]="XML",t[t.HTML=1]="HTML"}(He||(He={})),function(t){t[t.UTF8=0]="UTF8",t[t.ASCII=1]="ASCII",t[t.Extensive=2]="Extensive",t[t.Attribute=3]="Attribute",t[t.Text=4]="Text"}(Ve||(Ve={}));const Ge=Object.prototype.hasOwnProperty;function We(t,e){return Ge.call(t,e)}function Je(t){return Array.prototype.slice.call(arguments,1).forEach((function(e){if(e){if("object"!=typeof e)throw new TypeError(e+"must be object");Object.keys(e).forEach((function(r){t[r]=e[r]}))}})),t}function Qe(t,e,r){return[].concat(t.slice(0,e),r,t.slice(e+1))}function Ye(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||65535==(65535&t)||65534==(65535&t)||t>=0&&t<=8||11===t||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function Ke(t){if(t>65535){const e=55296+((t-=65536)>>10),r=56320+(1023&t);return String.fromCharCode(e,r)}return String.fromCharCode(t)}const Xe=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,tr=new RegExp(Xe.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),er=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function rr(t){return t.indexOf("\\")<0?t:t.replace(Xe,"$1")}function or(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(tr,(function(t,e,r){return e||function(t,e){if(35===e.charCodeAt(0)&&er.test(e)){const r="x"===e[1].toLowerCase()?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return Ye(r)?Ke(r):t}const r=Ne(t);return r!==t?r:t}(t,r)}))}const nr=/[&<>"]/,ir=/[&<>"]/g,sr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function ar(t){return sr[t]}function lr(t){return nr.test(t)?t.replace(ir,ar):t}const cr=/[.?*+^$[\]\\(){}|-]/g;function dr(t){return t.replace(cr,"\\$&")}function hr(t){switch(t){case 9:case 32:return!0}return!1}function ur(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function pr(t){return _e.test(t)}function fr(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function mr(t){return t=t.trim().replace(/\s+/g," "),"Ṿ"==="ẞ".toLowerCase()&&(t=t.replace(/ẞ/g,"ß")),t.toLowerCase().toUpperCase()}const gr={mdurl:e,ucmicro:r};function br(t,e,r){let o,n,i,s;const a=t.posMax,l=t.pos;for(t.pos=e+1,o=1;t.pos<a;){if(i=t.src.charCodeAt(t.pos),93===i&&(o--,0===o)){n=!0;break}if(s=t.pos,t.md.inline.skipToken(t),91===i)if(s===t.pos-1)o++;else if(r)return t.pos=l,-1}let c=-1;return n&&(c=t.pos),t.pos=l,c}function yr(t,e,r){let o,n=e;const i={ok:!1,pos:0,lines:0,str:""};if(60===t.charCodeAt(n)){for(n++;n<r;){if(o=t.charCodeAt(n),10===o)return i;if(60===o)return i;if(62===o)return i.pos=n+1,i.str=or(t.slice(e+1,n)),i.ok=!0,i;92===o&&n+1<r?n+=2:n++}return i}let s=0;for(;n<r&&(o=t.charCodeAt(n),32!==o)&&!(o<32||127===o);)if(92===o&&n+1<r){if(32===t.charCodeAt(n+1))break;n+=2}else{if(40===o&&(s++,s>32))return i;if(41===o){if(0===s)break;s--}n++}return e===n||0!==s||(i.str=or(t.slice(e,n)),i.pos=n,i.ok=!0),i}function kr(t,e,r){let o,n,i=0,s=e;const a={ok:!1,pos:0,lines:0,str:""};if(s>=r)return a;if(n=t.charCodeAt(s),34!==n&&39!==n&&40!==n)return a;for(s++,40===n&&(n=41);s<r;){if(o=t.charCodeAt(s),o===n)return a.pos=s+1,a.lines=i,a.str=or(t.slice(e+1,s)),a.ok=!0,a;if(40===o&&41===n)return a;10===o?i++:92===o&&s+1<r&&(s++,10===t.charCodeAt(s)&&i++),s++}return a}const _r={};function wr(){this.rules=Je({},_r)}_r.code_inline=function(t,e,r,o,n){const i=t[e];return"<code"+n.renderAttrs(i)+">"+lr(i.content)+"</code>"},_r.code_block=function(t,e,r,o,n){const i=t[e];return"<pre"+n.renderAttrs(i)+"><code>"+lr(t[e].content)+"</code></pre>\n"},_r.fence=function(t,e,r,o,n){const i=t[e],s=i.info?or(i.info).trim():"";let a,l="",c="";if(s){const t=s.split(/(\s+)/g);l=t[0],c=t.slice(2).join("")}if(a=r.highlight&&r.highlight(i.content,l,c)||lr(i.content),0===a.indexOf("<pre"))return a+"\n";if(s){const t=i.attrIndex("class"),e=i.attrs?i.attrs.slice():[];t<0?e.push(["class",r.langPrefix+l]):(e[t]=e[t].slice(),e[t][1]+=" "+r.langPrefix+l);const o={attrs:e};return`<pre><code${n.renderAttrs(o)}>${a}</code></pre>\n`}return`<pre><code${n.renderAttrs(i)}>${a}</code></pre>\n`},_r.image=function(t,e,r,o,n){const i=t[e];return i.attrs[i.attrIndex("alt")][1]=n.renderInlineAsText(i.children,r,o),n.renderToken(t,e,r)},_r.hardbreak=function(t,e,r){return r.xhtmlOut?"<br />\n":"<br>\n"},_r.softbreak=function(t,e,r){return r.breaks?r.xhtmlOut?"<br />\n":"<br>\n":"\n"},_r.text=function(t,e){return lr(t[e].content)},_r.html_block=function(t,e){return t[e].content},_r.html_inline=function(t,e){return t[e].content},wr.prototype.renderAttrs=function(t){let e,r,o;if(!t.attrs)return"";for(o="",e=0,r=t.attrs.length;e<r;e++)o+=" "+lr(t.attrs[e][0])+'="'+lr(t.attrs[e][1])+'"';return o},wr.prototype.renderToken=function(t,e,r){const o=t[e];let n="";if(o.hidden)return"";o.block&&-1!==o.nesting&&e&&t[e-1].hidden&&(n+="\n"),n+=(-1===o.nesting?"</":"<")+o.tag,n+=this.renderAttrs(o),0===o.nesting&&r.xhtmlOut&&(n+=" /");let i=!1;if(o.block&&(i=!0,1===o.nesting&&e+1<t.length)){const r=t[e+1];("inline"===r.type||r.hidden||-1===r.nesting&&r.tag===o.tag)&&(i=!1)}return n+=i?">\n":">",n},wr.prototype.renderInline=function(t,e,r){let o="";const n=this.rules;for(let i=0,s=t.length;i<s;i++){const s=t[i].type;void 0!==n[s]?o+=n[s](t,i,e,r,this):o+=this.renderToken(t,i,e)}return o},wr.prototype.renderInlineAsText=function(t,e,r){let o="";for(let n=0,i=t.length;n<i;n++)switch(t[n].type){case"text":case"html_inline":case"html_block":o+=t[n].content;break;case"image":o+=this.renderInlineAsText(t[n].children,e,r);break;case"softbreak":case"hardbreak":o+="\n"}return o},wr.prototype.render=function(t,e,r){let o="";const n=this.rules;for(let i=0,s=t.length;i<s;i++){const s=t[i].type;"inline"===s?o+=this.renderInline(t[i].children,e,r):void 0!==n[s]?o+=n[s](t,i,e,r,this):o+=this.renderToken(t,i,e,r)}return o};const vr=wr;function xr(){this.__rules__=[],this.__cache__=null}xr.prototype.__find__=function(t){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1},xr.prototype.__compile__=function(){const t=this,e=[""];t.__rules__.forEach((function(t){t.enabled&&t.alt.forEach((function(t){e.indexOf(t)<0&&e.push(t)}))})),t.__cache__={},e.forEach((function(e){t.__cache__[e]=[],t.__rules__.forEach((function(r){r.enabled&&(e&&r.alt.indexOf(e)<0||t.__cache__[e].push(r.fn))}))}))},xr.prototype.at=function(t,e,r){const o=this.__find__(t),n=r||{};if(-1===o)throw new Error("Parser rule not found: "+t);this.__rules__[o].fn=e,this.__rules__[o].alt=n.alt||[],this.__cache__=null},xr.prototype.before=function(t,e,r,o){const n=this.__find__(t),i=o||{};if(-1===n)throw new Error("Parser rule not found: "+t);this.__rules__.splice(n,0,{name:e,enabled:!0,fn:r,alt:i.alt||[]}),this.__cache__=null},xr.prototype.after=function(t,e,r,o){const n=this.__find__(t),i=o||{};if(-1===n)throw new Error("Parser rule not found: "+t);this.__rules__.splice(n+1,0,{name:e,enabled:!0,fn:r,alt:i.alt||[]}),this.__cache__=null},xr.prototype.push=function(t,e,r){const o=r||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:o.alt||[]}),this.__cache__=null},xr.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);const r=[];return t.forEach((function(t){const o=this.__find__(t);if(o<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[o].enabled=!0,r.push(t)}),this),this.__cache__=null,r},xr.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach((function(t){t.enabled=!1})),this.enable(t,e)},xr.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);const r=[];return t.forEach((function(t){const o=this.__find__(t);if(o<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[o].enabled=!1,r.push(t)}),this),this.__cache__=null,r},xr.prototype.getRules=function(t){return null===this.__cache__&&this.__compile__(),this.__cache__[t]||[]};const Ar=xr;function Cr(t,e,r){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=r,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Cr.prototype.attrIndex=function(t){if(!this.attrs)return-1;const e=this.attrs;for(let r=0,o=e.length;r<o;r++)if(e[r][0]===t)return r;return-1},Cr.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]},Cr.prototype.attrSet=function(t,e){const r=this.attrIndex(t),o=[t,e];r<0?this.attrPush(o):this.attrs[r]=o},Cr.prototype.attrGet=function(t){const e=this.attrIndex(t);let r=null;return e>=0&&(r=this.attrs[e][1]),r},Cr.prototype.attrJoin=function(t,e){const r=this.attrIndex(t);r<0?this.attrPush([t,e]):this.attrs[r][1]=this.attrs[r][1]+" "+e};const Er=Cr;function Dr(t,e,r){this.src=t,this.env=r,this.tokens=[],this.inlineMode=!1,this.md=e}Dr.prototype.Token=Er;const Sr=Dr,$r=/\r\n?|\n/g,Lr=/\0/g;function zr(t){return/^<\/a\s*>/i.test(t)}const Tr=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,qr=/\((c|tm|r)\)/i,Rr=/\((c|tm|r)\)/gi,Mr={c:"©",r:"®",tm:"™"};function Fr(t,e){return Mr[e.toLowerCase()]}function Pr(t){let e=0;for(let r=t.length-1;r>=0;r--){const o=t[r];"text"!==o.type||e||(o.content=o.content.replace(Rr,Fr)),"link_open"===o.type&&"auto"===o.info&&e--,"link_close"===o.type&&"auto"===o.info&&e++}}function Or(t){let e=0;for(let r=t.length-1;r>=0;r--){const o=t[r];"text"!==o.type||e||Tr.test(o.content)&&(o.content=o.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/gm,"$1—").replace(/(^|\s)--(?=\s|$)/gm,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,"$1–")),"link_open"===o.type&&"auto"===o.info&&e--,"link_close"===o.type&&"auto"===o.info&&e++}}const Ir=/['"]/,Nr=/['"]/g;function Br(t,e,r){return t.slice(0,e)+r+t.slice(e+1)}function jr(t,e){let r;const o=[];for(let n=0;n<t.length;n++){const i=t[n],s=t[n].level;for(r=o.length-1;r>=0&&!(o[r].level<=s);r--);if(o.length=r+1,"text"!==i.type)continue;let a=i.content,l=0,c=a.length;t:for(;l<c;){Nr.lastIndex=l;const d=Nr.exec(a);if(!d)break;let h=!0,u=!0;l=d.index+1;const p="'"===d[0];let f=32;if(d.index-1>=0)f=a.charCodeAt(d.index-1);else for(r=n-1;r>=0&&"softbreak"!==t[r].type&&"hardbreak"!==t[r].type;r--)if(t[r].content){f=t[r].content.charCodeAt(t[r].content.length-1);break}let m=32;if(l<c)m=a.charCodeAt(l);else for(r=n+1;r<t.length&&"softbreak"!==t[r].type&&"hardbreak"!==t[r].type;r++)if(t[r].content){m=t[r].content.charCodeAt(0);break}const g=fr(f)||pr(String.fromCharCode(f)),b=fr(m)||pr(String.fromCharCode(m)),y=ur(f),k=ur(m);if(k?h=!1:b&&(y||g||(h=!1)),y?u=!1:g&&(k||b||(u=!1)),34===m&&'"'===d[0]&&f>=48&&f<=57&&(u=h=!1),h&&u&&(h=g,u=b),h||u){if(u)for(r=o.length-1;r>=0;r--){let h=o[r];if(o[r].level<s)break;if(h.single===p&&o[r].level===s){let s,u;h=o[r],p?(s=e.md.options.quotes[2],u=e.md.options.quotes[3]):(s=e.md.options.quotes[0],u=e.md.options.quotes[1]),i.content=Br(i.content,d.index,u),t[h.token].content=Br(t[h.token].content,h.pos,s),l+=u.length-1,h.token===n&&(l+=s.length-1),a=i.content,c=a.length,o.length=r;continue t}}h?o.push({token:n,pos:d.index,single:p,level:s}):u&&p&&(i.content=Br(i.content,d.index,"’"))}else p&&(i.content=Br(i.content,d.index,"’"))}}}const Ur=[["normalize",function(t){let e;e=t.src.replace($r,"\n"),e=e.replace(Lr,"�"),t.src=e}],["block",function(t){let e;t.inlineMode?(e=new t.Token("inline","",0),e.content=t.src,e.map=[0,1],e.children=[],t.tokens.push(e)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}],["inline",function(t){const e=t.tokens;for(let r=0,o=e.length;r<o;r++){const o=e[r];"inline"===o.type&&t.md.inline.parse(o.content,t.md,t.env,o.children)}}],["linkify",function(t){const e=t.tokens;var r;if(t.md.options.linkify)for(let o=0,n=e.length;o<n;o++){if("inline"!==e[o].type||!t.md.linkify.pretest(e[o].content))continue;let n=e[o].children,i=0;for(let s=n.length-1;s>=0;s--){const a=n[s];if("link_close"!==a.type){if("html_inline"===a.type&&(r=a.content,/^<a[>\s]/i.test(r)&&i>0&&i--,zr(a.content)&&i++),!(i>0)&&"text"===a.type&&t.md.linkify.test(a.content)){const r=a.content;let i=t.md.linkify.match(r);const l=[];let c=a.level,d=0;i.length>0&&0===i[0].index&&s>0&&"text_special"===n[s-1].type&&(i=i.slice(1));for(let e=0;e<i.length;e++){const o=i[e].url,n=t.md.normalizeLink(o);if(!t.md.validateLink(n))continue;let s=i[e].text;s=i[e].schema?"mailto:"!==i[e].schema||/^mailto:/i.test(s)?t.md.normalizeLinkText(s):t.md.normalizeLinkText("mailto:"+s).replace(/^mailto:/,""):t.md.normalizeLinkText("http://"+s).replace(/^http:\/\//,"");const a=i[e].index;if(a>d){const e=new t.Token("text","",0);e.content=r.slice(d,a),e.level=c,l.push(e)}const h=new t.Token("link_open","a",1);h.attrs=[["href",n]],h.level=c++,h.markup="linkify",h.info="auto",l.push(h);const u=new t.Token("text","",0);u.content=s,u.level=c,l.push(u);const p=new t.Token("link_close","a",-1);p.level=--c,p.markup="linkify",p.info="auto",l.push(p),d=i[e].lastIndex}if(d<r.length){const e=new t.Token("text","",0);e.content=r.slice(d),e.level=c,l.push(e)}e[o].children=n=Qe(n,s,l)}}else for(s--;n[s].level!==a.level&&"link_open"!==n[s].type;)s--}}}],["replacements",function(t){let e;if(t.md.options.typographer)for(e=t.tokens.length-1;e>=0;e--)"inline"===t.tokens[e].type&&(qr.test(t.tokens[e].content)&&Pr(t.tokens[e].children),Tr.test(t.tokens[e].content)&&Or(t.tokens[e].children))}],["smartquotes",function(t){if(t.md.options.typographer)for(let e=t.tokens.length-1;e>=0;e--)"inline"===t.tokens[e].type&&Ir.test(t.tokens[e].content)&&jr(t.tokens[e].children,t)}],["text_join",function(t){let e,r;const o=t.tokens,n=o.length;for(let t=0;t<n;t++){if("inline"!==o[t].type)continue;const n=o[t].children,i=n.length;for(e=0;e<i;e++)"text_special"===n[e].type&&(n[e].type="text");for(e=r=0;e<i;e++)"text"===n[e].type&&e+1<i&&"text"===n[e+1].type?n[e+1].content=n[e].content+n[e+1].content:(e!==r&&(n[r]=n[e]),r++);e!==r&&(n.length=r)}}]];function Hr(){this.ruler=new Ar;for(let t=0;t<Ur.length;t++)this.ruler.push(Ur[t][0],Ur[t][1])}Hr.prototype.process=function(t){const e=this.ruler.getRules("");for(let r=0,o=e.length;r<o;r++)e[r](t)},Hr.prototype.State=Sr;const Vr=Hr;function Zr(t,e,r,o){this.src=t,this.md=e,this.env=r,this.tokens=o,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const n=this.src;for(let t=0,e=0,r=0,o=0,i=n.length,s=!1;e<i;e++){const a=n.charCodeAt(e);if(!s){if(hr(a)){r++,9===a?o+=4-o%4:o++;continue}s=!0}10!==a&&e!==i-1||(10!==a&&e++,this.bMarks.push(t),this.eMarks.push(e),this.tShift.push(r),this.sCount.push(o),this.bsCount.push(0),s=!1,r=0,o=0,t=e+1)}this.bMarks.push(n.length),this.eMarks.push(n.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Zr.prototype.push=function(t,e,r){const o=new Er(t,e,r);return o.block=!0,r<0&&this.level--,o.level=this.level,r>0&&this.level++,this.tokens.push(o),o},Zr.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]},Zr.prototype.skipEmptyLines=function(t){for(let e=this.lineMax;t<e&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t},Zr.prototype.skipSpaces=function(t){for(let e=this.src.length;t<e&&hr(this.src.charCodeAt(t));t++);return t},Zr.prototype.skipSpacesBack=function(t,e){if(t<=e)return t;for(;t>e;)if(!hr(this.src.charCodeAt(--t)))return t+1;return t},Zr.prototype.skipChars=function(t,e){for(let r=this.src.length;t<r&&this.src.charCodeAt(t)===e;t++);return t},Zr.prototype.skipCharsBack=function(t,e,r){if(t<=r)return t;for(;t>r;)if(e!==this.src.charCodeAt(--t))return t+1;return t},Zr.prototype.getLines=function(t,e,r,o){if(t>=e)return"";const n=new Array(e-t);for(let i=0,s=t;s<e;s++,i++){let t=0;const a=this.bMarks[s];let l,c=a;for(l=s+1<e||o?this.eMarks[s]+1:this.eMarks[s];c<l&&t<r;){const e=this.src.charCodeAt(c);if(hr(e))9===e?t+=4-(t+this.bsCount[s])%4:t++;else{if(!(c-a<this.tShift[s]))break;t++}c++}n[i]=t>r?new Array(t-r+1).join(" ")+this.src.slice(c,l):this.src.slice(c,l)}return n.join("")},Zr.prototype.Token=Er;const Gr=Zr;function Wr(t,e){const r=t.bMarks[e]+t.tShift[e],o=t.eMarks[e];return t.src.slice(r,o)}function Jr(t){const e=[],r=t.length;let o=0,n=t.charCodeAt(o),i=!1,s=0,a="";for(;o<r;)124===n&&(i?(a+=t.substring(s,o-1),s=o):(e.push(a+t.substring(s,o)),a="",s=o+1)),i=92===n,o++,n=t.charCodeAt(o);return e.push(a+t.substring(s)),e}function Qr(t,e){const r=t.eMarks[e];let o=t.bMarks[e]+t.tShift[e];const n=t.src.charCodeAt(o++);return 42!==n&&45!==n&&43!==n||o<r&&!hr(t.src.charCodeAt(o))?-1:o}function Yr(t,e){const r=t.bMarks[e]+t.tShift[e],o=t.eMarks[e];let n=r;if(n+1>=o)return-1;let i=t.src.charCodeAt(n++);if(i<48||i>57)return-1;for(;;){if(n>=o)return-1;if(i=t.src.charCodeAt(n++),!(i>=48&&i<=57)){if(41===i||46===i)break;return-1}if(n-r>=10)return-1}return n<o&&(i=t.src.charCodeAt(n),!hr(i))?-1:n}const Kr="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",Xr="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",to=new RegExp("^(?:"+Kr+"|"+Xr+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),eo=new RegExp("^(?:"+Kr+"|"+Xr+")"),ro=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"].join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(eo.source+"\\s*$"),/^$/,!1]],oo=[["table",function(t,e,r,o){if(e+2>r)return!1;let n=e+1;if(t.sCount[n]<t.blkIndent)return!1;if(t.sCount[n]-t.blkIndent>=4)return!1;let i=t.bMarks[n]+t.tShift[n];if(i>=t.eMarks[n])return!1;const s=t.src.charCodeAt(i++);if(124!==s&&45!==s&&58!==s)return!1;if(i>=t.eMarks[n])return!1;const a=t.src.charCodeAt(i++);if(124!==a&&45!==a&&58!==a&&!hr(a))return!1;if(45===s&&hr(a))return!1;for(;i<t.eMarks[n];){const e=t.src.charCodeAt(i);if(124!==e&&45!==e&&58!==e&&!hr(e))return!1;i++}let l=Wr(t,e+1),c=l.split("|");const d=[];for(let t=0;t<c.length;t++){const e=c[t].trim();if(!e){if(0===t||t===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(e))return!1;58===e.charCodeAt(e.length-1)?d.push(58===e.charCodeAt(0)?"center":"right"):58===e.charCodeAt(0)?d.push("left"):d.push("")}if(l=Wr(t,e).trim(),-1===l.indexOf("|"))return!1;if(t.sCount[e]-t.blkIndent>=4)return!1;c=Jr(l),c.length&&""===c[0]&&c.shift(),c.length&&""===c[c.length-1]&&c.pop();const h=c.length;if(0===h||h!==d.length)return!1;if(o)return!0;const u=t.parentType;t.parentType="table";const p=t.md.block.ruler.getRules("blockquote"),f=[e,0];t.push("table_open","table",1).map=f,t.push("thead_open","thead",1).map=[e,e+1],t.push("tr_open","tr",1).map=[e,e+1];for(let e=0;e<c.length;e++){const r=t.push("th_open","th",1);d[e]&&(r.attrs=[["style","text-align:"+d[e]]]);const o=t.push("inline","",0);o.content=c[e].trim(),o.children=[],t.push("th_close","th",-1)}let m;for(t.push("tr_close","tr",-1),t.push("thead_close","thead",-1),n=e+2;n<r&&!(t.sCount[n]<t.blkIndent);n++){let o=!1;for(let e=0,i=p.length;e<i;e++)if(p[e](t,n,r,!0)){o=!0;break}if(o)break;if(l=Wr(t,n).trim(),!l)break;if(t.sCount[n]-t.blkIndent>=4)break;c=Jr(l),c.length&&""===c[0]&&c.shift(),c.length&&""===c[c.length-1]&&c.pop(),n===e+2&&(t.push("tbody_open","tbody",1).map=m=[e+2,0]),t.push("tr_open","tr",1).map=[n,n+1];for(let e=0;e<h;e++){const r=t.push("td_open","td",1);d[e]&&(r.attrs=[["style","text-align:"+d[e]]]);const o=t.push("inline","",0);o.content=c[e]?c[e].trim():"",o.children=[],t.push("td_close","td",-1)}t.push("tr_close","tr",-1)}return m&&(t.push("tbody_close","tbody",-1),m[1]=n),t.push("table_close","table",-1),f[1]=n,t.parentType=u,t.line=n,!0},["paragraph","reference"]],["code",function(t,e,r){if(t.sCount[e]-t.blkIndent<4)return!1;let o=e+1,n=o;for(;o<r;)if(t.isEmpty(o))o++;else{if(!(t.sCount[o]-t.blkIndent>=4))break;o++,n=o}t.line=n;const i=t.push("code_block","code",0);return i.content=t.getLines(e,n,4+t.blkIndent,!1)+"\n",i.map=[e,t.line],!0}],["fence",function(t,e,r,o){let n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;if(n+3>i)return!1;const s=t.src.charCodeAt(n);if(126!==s&&96!==s)return!1;let a=n;n=t.skipChars(n,s);let l=n-a;if(l<3)return!1;const c=t.src.slice(a,n),d=t.src.slice(n,i);if(96===s&&d.indexOf(String.fromCharCode(s))>=0)return!1;if(o)return!0;let h=e,u=!1;for(;!(h++,h>=r||(n=a=t.bMarks[h]+t.tShift[h],i=t.eMarks[h],n<i&&t.sCount[h]<t.blkIndent));)if(t.src.charCodeAt(n)===s&&!(t.sCount[h]-t.blkIndent>=4||(n=t.skipChars(n,s),n-a<l||(n=t.skipSpaces(n),n<i)))){u=!0;break}l=t.sCount[e],t.line=h+(u?1:0);const p=t.push("fence","code",0);return p.info=d,p.content=t.getLines(e+1,h,l,!0),p.markup=c,p.map=[e,t.line],!0},["paragraph","reference","blockquote","list"]],["blockquote",function(t,e,r,o){let n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];const s=t.lineMax;if(t.sCount[e]-t.blkIndent>=4)return!1;if(62!==t.src.charCodeAt(n))return!1;if(o)return!0;const a=[],l=[],c=[],d=[],h=t.md.block.ruler.getRules("blockquote"),u=t.parentType;t.parentType="blockquote";let p,f=!1;for(p=e;p<r;p++){const e=t.sCount[p]<t.blkIndent;if(n=t.bMarks[p]+t.tShift[p],i=t.eMarks[p],n>=i)break;if(62===t.src.charCodeAt(n++)&&!e){let e,r,o=t.sCount[p]+1;32===t.src.charCodeAt(n)?(n++,o++,r=!1,e=!0):9===t.src.charCodeAt(n)?(e=!0,(t.bsCount[p]+o)%4==3?(n++,o++,r=!1):r=!0):e=!1;let s=o;for(a.push(t.bMarks[p]),t.bMarks[p]=n;n<i;){const e=t.src.charCodeAt(n);if(!hr(e))break;9===e?s+=4-(s+t.bsCount[p]+(r?1:0))%4:s++,n++}f=n>=i,l.push(t.bsCount[p]),t.bsCount[p]=t.sCount[p]+1+(e?1:0),c.push(t.sCount[p]),t.sCount[p]=s-o,d.push(t.tShift[p]),t.tShift[p]=n-t.bMarks[p];continue}if(f)break;let o=!1;for(let e=0,n=h.length;e<n;e++)if(h[e](t,p,r,!0)){o=!0;break}if(o){t.lineMax=p,0!==t.blkIndent&&(a.push(t.bMarks[p]),l.push(t.bsCount[p]),d.push(t.tShift[p]),c.push(t.sCount[p]),t.sCount[p]-=t.blkIndent);break}a.push(t.bMarks[p]),l.push(t.bsCount[p]),d.push(t.tShift[p]),c.push(t.sCount[p]),t.sCount[p]=-1}const m=t.blkIndent;t.blkIndent=0;const g=t.push("blockquote_open","blockquote",1);g.markup=">";const b=[e,0];g.map=b,t.md.block.tokenize(t,e,p),t.push("blockquote_close","blockquote",-1).markup=">",t.lineMax=s,t.parentType=u,b[1]=t.line;for(let r=0;r<d.length;r++)t.bMarks[r+e]=a[r],t.tShift[r+e]=d[r],t.sCount[r+e]=c[r],t.bsCount[r+e]=l[r];return t.blkIndent=m,!0},["paragraph","reference","blockquote","list"]],["hr",function(t,e,r,o){const n=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let i=t.bMarks[e]+t.tShift[e];const s=t.src.charCodeAt(i++);if(42!==s&&45!==s&&95!==s)return!1;let a=1;for(;i<n;){const e=t.src.charCodeAt(i++);if(e!==s&&!hr(e))return!1;e===s&&a++}if(a<3)return!1;if(o)return!0;t.line=e+1;const l=t.push("hr","hr",0);return l.map=[e,t.line],l.markup=Array(a+1).join(String.fromCharCode(s)),!0},["paragraph","reference","blockquote","list"]],["list",function(t,e,r,o){let n,i,s,a,l=e,c=!0;if(t.sCount[l]-t.blkIndent>=4)return!1;if(t.listIndent>=0&&t.sCount[l]-t.listIndent>=4&&t.sCount[l]<t.blkIndent)return!1;let d,h,u,p=!1;if(o&&"paragraph"===t.parentType&&t.sCount[l]>=t.blkIndent&&(p=!0),(u=Yr(t,l))>=0){if(d=!0,s=t.bMarks[l]+t.tShift[l],h=Number(t.src.slice(s,u-1)),p&&1!==h)return!1}else{if(!((u=Qr(t,l))>=0))return!1;d=!1}if(p&&t.skipSpaces(u)>=t.eMarks[l])return!1;if(o)return!0;const f=t.src.charCodeAt(u-1),m=t.tokens.length;d?(a=t.push("ordered_list_open","ol",1),1!==h&&(a.attrs=[["start",h]])):a=t.push("bullet_list_open","ul",1);const g=[l,0];a.map=g,a.markup=String.fromCharCode(f);let b=!1;const y=t.md.block.ruler.getRules("list"),k=t.parentType;for(t.parentType="list";l<r;){i=u,n=t.eMarks[l];const e=t.sCount[l]+u-(t.bMarks[l]+t.tShift[l]);let o=e;for(;i<n;){const e=t.src.charCodeAt(i);if(9===e)o+=4-(o+t.bsCount[l])%4;else{if(32!==e)break;o++}i++}const h=i;let p;p=h>=n?1:o-e,p>4&&(p=1);const m=e+p;a=t.push("list_item_open","li",1),a.markup=String.fromCharCode(f);const g=[l,0];a.map=g,d&&(a.info=t.src.slice(s,u-1));const k=t.tight,_=t.tShift[l],w=t.sCount[l],v=t.listIndent;if(t.listIndent=t.blkIndent,t.blkIndent=m,t.tight=!0,t.tShift[l]=h-t.bMarks[l],t.sCount[l]=o,h>=n&&t.isEmpty(l+1)?t.line=Math.min(t.line+2,r):t.md.block.tokenize(t,l,r,!0),t.tight&&!b||(c=!1),b=t.line-l>1&&t.isEmpty(t.line-1),t.blkIndent=t.listIndent,t.listIndent=v,t.tShift[l]=_,t.sCount[l]=w,t.tight=k,a=t.push("list_item_close","li",-1),a.markup=String.fromCharCode(f),l=t.line,g[1]=l,l>=r)break;if(t.sCount[l]<t.blkIndent)break;if(t.sCount[l]-t.blkIndent>=4)break;let x=!1;for(let e=0,o=y.length;e<o;e++)if(y[e](t,l,r,!0)){x=!0;break}if(x)break;if(d){if(u=Yr(t,l),u<0)break;s=t.bMarks[l]+t.tShift[l]}else if(u=Qr(t,l),u<0)break;if(f!==t.src.charCodeAt(u-1))break}return a=d?t.push("ordered_list_close","ol",-1):t.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(f),g[1]=l,t.line=l,t.parentType=k,c&&function(t,e){const r=t.level+2;for(let o=e+2,n=t.tokens.length-2;o<n;o++)t.tokens[o].level===r&&"paragraph_open"===t.tokens[o].type&&(t.tokens[o+2].hidden=!0,t.tokens[o].hidden=!0,o+=2)}(t,m),!0},["paragraph","reference","blockquote"]],["reference",function(t,e,r,o){let n=0,i=t.bMarks[e]+t.tShift[e],s=t.eMarks[e],a=e+1;if(t.sCount[e]-t.blkIndent>=4)return!1;if(91!==t.src.charCodeAt(i))return!1;for(;++i<s;)if(93===t.src.charCodeAt(i)&&92!==t.src.charCodeAt(i-1)){if(i+1===s)return!1;if(58!==t.src.charCodeAt(i+1))return!1;break}const l=t.lineMax,c=t.md.block.ruler.getRules("reference"),d=t.parentType;for(t.parentType="reference";a<l&&!t.isEmpty(a);a++){if(t.sCount[a]-t.blkIndent>3)continue;if(t.sCount[a]<0)continue;let e=!1;for(let r=0,o=c.length;r<o;r++)if(c[r](t,a,l,!0)){e=!0;break}if(e)break}const h=t.getLines(e,a,t.blkIndent,!1).trim();s=h.length;let u=-1;for(i=1;i<s;i++){const t=h.charCodeAt(i);if(91===t)return!1;if(93===t){u=i;break}10===t?n++:92===t&&(i++,i<s&&10===h.charCodeAt(i)&&n++)}if(u<0||58!==h.charCodeAt(u+1))return!1;for(i=u+2;i<s;i++){const t=h.charCodeAt(i);if(10===t)n++;else if(!hr(t))break}const p=t.md.helpers.parseLinkDestination(h,i,s);if(!p.ok)return!1;const f=t.md.normalizeLink(p.str);if(!t.md.validateLink(f))return!1;i=p.pos,n+=p.lines;const m=i,g=n,b=i;for(;i<s;i++){const t=h.charCodeAt(i);if(10===t)n++;else if(!hr(t))break}const y=t.md.helpers.parseLinkTitle(h,i,s);let k;for(i<s&&b!==i&&y.ok?(k=y.str,i=y.pos,n+=y.lines):(k="",i=m,n=g);i<s&&hr(h.charCodeAt(i));)i++;if(i<s&&10!==h.charCodeAt(i)&&k)for(k="",i=m,n=g;i<s&&hr(h.charCodeAt(i));)i++;if(i<s&&10!==h.charCodeAt(i))return!1;const _=mr(h.slice(1,u));return!!_&&(o||(void 0===t.env.references&&(t.env.references={}),void 0===t.env.references[_]&&(t.env.references[_]={title:k,href:f}),t.parentType=d,t.line=e+n+1),!0)}],["html_block",function(t,e,r,o){let n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;if(!t.md.options.html)return!1;if(60!==t.src.charCodeAt(n))return!1;let s=t.src.slice(n,i),a=0;for(;a<ro.length&&!ro[a][0].test(s);a++);if(a===ro.length)return!1;if(o)return ro[a][2];let l=e+1;if(!ro[a][1].test(s))for(;l<r&&!(t.sCount[l]<t.blkIndent);l++)if(n=t.bMarks[l]+t.tShift[l],i=t.eMarks[l],s=t.src.slice(n,i),ro[a][1].test(s)){0!==s.length&&l++;break}t.line=l;const c=t.push("html_block","",0);return c.map=[e,l],c.content=t.getLines(e,l,t.blkIndent,!0),!0},["paragraph","reference","blockquote"]],["heading",function(t,e,r,o){let n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let s=t.src.charCodeAt(n);if(35!==s||n>=i)return!1;let a=1;for(s=t.src.charCodeAt(++n);35===s&&n<i&&a<=6;)a++,s=t.src.charCodeAt(++n);if(a>6||n<i&&!hr(s))return!1;if(o)return!0;i=t.skipSpacesBack(i,n);const l=t.skipCharsBack(i,35,n);l>n&&hr(t.src.charCodeAt(l-1))&&(i=l),t.line=e+1;const c=t.push("heading_open","h"+String(a),1);c.markup="########".slice(0,a),c.map=[e,t.line];const d=t.push("inline","",0);return d.content=t.src.slice(n,i).trim(),d.map=[e,t.line],d.children=[],t.push("heading_close","h"+String(a),-1).markup="########".slice(0,a),!0},["paragraph","reference","blockquote"]],["lheading",function(t,e,r){const o=t.md.block.ruler.getRules("paragraph");if(t.sCount[e]-t.blkIndent>=4)return!1;const n=t.parentType;t.parentType="paragraph";let i,s=0,a=e+1;for(;a<r&&!t.isEmpty(a);a++){if(t.sCount[a]-t.blkIndent>3)continue;if(t.sCount[a]>=t.blkIndent){let e=t.bMarks[a]+t.tShift[a];const r=t.eMarks[a];if(e<r&&(i=t.src.charCodeAt(e),(45===i||61===i)&&(e=t.skipChars(e,i),e=t.skipSpaces(e),e>=r))){s=61===i?1:2;break}}if(t.sCount[a]<0)continue;let e=!1;for(let n=0,i=o.length;n<i;n++)if(o[n](t,a,r,!0)){e=!0;break}if(e)break}if(!s)return!1;const l=t.getLines(e,a,t.blkIndent,!1).trim();t.line=a+1;const c=t.push("heading_open","h"+String(s),1);c.markup=String.fromCharCode(i),c.map=[e,t.line];const d=t.push("inline","",0);return d.content=l,d.map=[e,t.line-1],d.children=[],t.push("heading_close","h"+String(s),-1).markup=String.fromCharCode(i),t.parentType=n,!0}],["paragraph",function(t,e,r){const o=t.md.block.ruler.getRules("paragraph"),n=t.parentType;let i=e+1;for(t.parentType="paragraph";i<r&&!t.isEmpty(i);i++){if(t.sCount[i]-t.blkIndent>3)continue;if(t.sCount[i]<0)continue;let e=!1;for(let n=0,s=o.length;n<s;n++)if(o[n](t,i,r,!0)){e=!0;break}if(e)break}const s=t.getLines(e,i,t.blkIndent,!1).trim();t.line=i,t.push("paragraph_open","p",1).map=[e,t.line];const a=t.push("inline","",0);return a.content=s,a.map=[e,t.line],a.children=[],t.push("paragraph_close","p",-1),t.parentType=n,!0}]];function no(){this.ruler=new Ar;for(let t=0;t<oo.length;t++)this.ruler.push(oo[t][0],oo[t][1],{alt:(oo[t][2]||[]).slice()})}no.prototype.tokenize=function(t,e,r){const o=this.ruler.getRules(""),n=o.length,i=t.md.options.maxNesting;let s=e,a=!1;for(;s<r&&(t.line=s=t.skipEmptyLines(s),!(s>=r))&&!(t.sCount[s]<t.blkIndent);){if(t.level>=i){t.line=r;break}const e=t.line;let l=!1;for(let i=0;i<n;i++)if(l=o[i](t,s,r,!1),l){if(e>=t.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");t.tight=!a,t.isEmpty(t.line-1)&&(a=!0),s=t.line,s<r&&t.isEmpty(s)&&(a=!0,s++,t.line=s)}},no.prototype.parse=function(t,e,r,o){if(!t)return;const n=new this.State(t,e,r,o);this.tokenize(n,n.line,n.lineMax)},no.prototype.State=Gr;const io=no;function so(t,e,r,o){this.src=t,this.env=r,this.md=e,this.tokens=o,this.tokens_meta=Array(o.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}so.prototype.pushPending=function(){const t=new Er("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t},so.prototype.push=function(t,e,r){this.pending&&this.pushPending();const o=new Er(t,e,r);let n=null;return r<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),o.level=this.level,r>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],n={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(o),this.tokens_meta.push(n),o},so.prototype.scanDelims=function(t,e){let r,o,n=!0,i=!0;const s=this.posMax,a=this.src.charCodeAt(t),l=t>0?this.src.charCodeAt(t-1):32;let c=t;for(;c<s&&this.src.charCodeAt(c)===a;)c++;const d=c-t,h=c<s?this.src.charCodeAt(c):32,u=fr(l)||pr(String.fromCharCode(l)),p=fr(h)||pr(String.fromCharCode(h)),f=ur(l),m=ur(h);return m?n=!1:p&&(f||u||(n=!1)),f?i=!1:u&&(m||p||(i=!1)),e?(r=n,o=i):(r=n&&(!i||u),o=i&&(!n||p)),{can_open:r,can_close:o,length:d}},so.prototype.Token=Er;const ao=so;function lo(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}const co=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,ho=[];for(let t=0;t<256;t++)ho.push(0);function uo(t,e){let r;const o=[],n=e.length;for(let i=0;i<n;i++){const n=e[i];if(126!==n.marker)continue;if(-1===n.end)continue;const s=e[n.end];r=t.tokens[n.token],r.type="s_open",r.tag="s",r.nesting=1,r.markup="~~",r.content="",r=t.tokens[s.token],r.type="s_close",r.tag="s",r.nesting=-1,r.markup="~~",r.content="","text"===t.tokens[s.token-1].type&&"~"===t.tokens[s.token-1].content&&o.push(s.token-1)}for(;o.length;){const e=o.pop();let n=e+1;for(;n<t.tokens.length&&"s_close"===t.tokens[n].type;)n++;n--,e!==n&&(r=t.tokens[n],t.tokens[n]=t.tokens[e],t.tokens[e]=r)}}"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(t){ho[t.charCodeAt(0)]=1}));const po={tokenize:function(t,e){const r=t.pos,o=t.src.charCodeAt(r);if(e)return!1;if(126!==o)return!1;const n=t.scanDelims(t.pos,!0);let i=n.length;const s=String.fromCharCode(o);if(i<2)return!1;let a;i%2&&(a=t.push("text","",0),a.content=s,i--);for(let e=0;e<i;e+=2)a=t.push("text","",0),a.content=s+s,t.delimiters.push({marker:o,length:0,token:t.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return t.pos+=n.length,!0},postProcess:function(t){const e=t.tokens_meta,r=t.tokens_meta.length;uo(t,t.delimiters);for(let o=0;o<r;o++)e[o]&&e[o].delimiters&&uo(t,e[o].delimiters)}};function fo(t,e){for(let r=e.length-1;r>=0;r--){const o=e[r];if(95!==o.marker&&42!==o.marker)continue;if(-1===o.end)continue;const n=e[o.end],i=r>0&&e[r-1].end===o.end+1&&e[r-1].marker===o.marker&&e[r-1].token===o.token-1&&e[o.end+1].token===n.token+1,s=String.fromCharCode(o.marker),a=t.tokens[o.token];a.type=i?"strong_open":"em_open",a.tag=i?"strong":"em",a.nesting=1,a.markup=i?s+s:s,a.content="";const l=t.tokens[n.token];l.type=i?"strong_close":"em_close",l.tag=i?"strong":"em",l.nesting=-1,l.markup=i?s+s:s,l.content="",i&&(t.tokens[e[r-1].token].content="",t.tokens[e[o.end+1].token].content="",r--)}}const mo={tokenize:function(t,e){const r=t.pos,o=t.src.charCodeAt(r);if(e)return!1;if(95!==o&&42!==o)return!1;const n=t.scanDelims(t.pos,42===o);for(let e=0;e<n.length;e++)t.push("text","",0).content=String.fromCharCode(o),t.delimiters.push({marker:o,length:n.length,token:t.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return t.pos+=n.length,!0},postProcess:function(t){const e=t.tokens_meta,r=t.tokens_meta.length;fo(t,t.delimiters);for(let o=0;o<r;o++)e[o]&&e[o].delimiters&&fo(t,e[o].delimiters)}},go=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,bo=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/,yo=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,ko=/^&([a-z][a-z0-9]{1,31});/i;function _o(t){const e={},r=t.length;if(!r)return;let o=0,n=-2;const i=[];for(let s=0;s<r;s++){const r=t[s];if(i.push(0),t[o].marker===r.marker&&n===r.token-1||(o=s),n=r.token,r.length=r.length||0,!r.close)continue;e.hasOwnProperty(r.marker)||(e[r.marker]=[-1,-1,-1,-1,-1,-1]);const a=e[r.marker][(r.open?3:0)+r.length%3];let l=o-i[o]-1,c=l;for(;l>a;l-=i[l]+1){const e=t[l];if(e.marker===r.marker&&e.open&&e.end<0){let o=!1;if((e.close||r.open)&&(e.length+r.length)%3==0&&(e.length%3==0&&r.length%3==0||(o=!0)),!o){const o=l>0&&!t[l-1].open?i[l-1]+1:0;i[s]=s-l+o,i[l]=o,r.open=!1,e.end=s,e.close=!1,c=-1,n=-2;break}}}-1!==c&&(e[r.marker][(r.open?3:0)+(r.length||0)%3]=c)}}const wo=[["text",function(t,e){let r=t.pos;for(;r<t.posMax&&!lo(t.src.charCodeAt(r));)r++;return r!==t.pos&&(e||(t.pending+=t.src.slice(t.pos,r)),t.pos=r,!0)}],["linkify",function(t,e){if(!t.md.options.linkify)return!1;if(t.linkLevel>0)return!1;const r=t.pos;if(r+3>t.posMax)return!1;if(58!==t.src.charCodeAt(r))return!1;if(47!==t.src.charCodeAt(r+1))return!1;if(47!==t.src.charCodeAt(r+2))return!1;const o=t.pending.match(co);if(!o)return!1;const n=o[1],i=t.md.linkify.matchAtStart(t.src.slice(r-n.length));if(!i)return!1;let s=i.url;if(s.length<=n.length)return!1;s=s.replace(/\*+$/,"");const a=t.md.normalizeLink(s);if(!t.md.validateLink(a))return!1;if(!e){t.pending=t.pending.slice(0,-n.length);const e=t.push("link_open","a",1);e.attrs=[["href",a]],e.markup="linkify",e.info="auto",t.push("text","",0).content=t.md.normalizeLinkText(s);const r=t.push("link_close","a",-1);r.markup="linkify",r.info="auto"}return t.pos+=s.length-n.length,!0}],["newline",function(t,e){let r=t.pos;if(10!==t.src.charCodeAt(r))return!1;const o=t.pending.length-1,n=t.posMax;if(!e)if(o>=0&&32===t.pending.charCodeAt(o))if(o>=1&&32===t.pending.charCodeAt(o-1)){let e=o-1;for(;e>=1&&32===t.pending.charCodeAt(e-1);)e--;t.pending=t.pending.slice(0,e),t.push("hardbreak","br",0)}else t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0);else t.push("softbreak","br",0);for(r++;r<n&&hr(t.src.charCodeAt(r));)r++;return t.pos=r,!0}],["escape",function(t,e){let r=t.pos;const o=t.posMax;if(92!==t.src.charCodeAt(r))return!1;if(r++,r>=o)return!1;let n=t.src.charCodeAt(r);if(10===n){for(e||t.push("hardbreak","br",0),r++;r<o&&(n=t.src.charCodeAt(r),hr(n));)r++;return t.pos=r,!0}let i=t.src[r];if(n>=55296&&n<=56319&&r+1<o){const e=t.src.charCodeAt(r+1);e>=56320&&e<=57343&&(i+=t.src[r+1],r++)}const s="\\"+i;if(!e){const e=t.push("text_special","",0);n<256&&0!==ho[n]?e.content=i:e.content=s,e.markup=s,e.info="escape"}return t.pos=r+1,!0}],["backticks",function(t,e){let r=t.pos;if(96!==t.src.charCodeAt(r))return!1;const o=r;r++;const n=t.posMax;for(;r<n&&96===t.src.charCodeAt(r);)r++;const i=t.src.slice(o,r),s=i.length;if(t.backticksScanned&&(t.backticks[s]||0)<=o)return e||(t.pending+=i),t.pos+=s,!0;let a,l=r;for(;-1!==(a=t.src.indexOf("`",l));){for(l=a+1;l<n&&96===t.src.charCodeAt(l);)l++;const o=l-a;if(o===s){if(!e){const e=t.push("code_inline","code",0);e.markup=i,e.content=t.src.slice(r,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return t.pos=l,!0}t.backticks[o]=a}return t.backticksScanned=!0,e||(t.pending+=i),t.pos+=s,!0}],["strikethrough",po.tokenize],["emphasis",mo.tokenize],["link",function(t,e){let r,o,n,i,s="",a="",l=t.pos,c=!0;if(91!==t.src.charCodeAt(t.pos))return!1;const d=t.pos,h=t.posMax,u=t.pos+1,p=t.md.helpers.parseLinkLabel(t,t.pos,!0);if(p<0)return!1;let f=p+1;if(f<h&&40===t.src.charCodeAt(f)){for(c=!1,f++;f<h&&(r=t.src.charCodeAt(f),hr(r)||10===r);f++);if(f>=h)return!1;if(l=f,n=t.md.helpers.parseLinkDestination(t.src,f,t.posMax),n.ok){for(s=t.md.normalizeLink(n.str),t.md.validateLink(s)?f=n.pos:s="",l=f;f<h&&(r=t.src.charCodeAt(f),hr(r)||10===r);f++);if(n=t.md.helpers.parseLinkTitle(t.src,f,t.posMax),f<h&&l!==f&&n.ok)for(a=n.str,f=n.pos;f<h&&(r=t.src.charCodeAt(f),hr(r)||10===r);f++);}(f>=h||41!==t.src.charCodeAt(f))&&(c=!0),f++}if(c){if(void 0===t.env.references)return!1;if(f<h&&91===t.src.charCodeAt(f)?(l=f+1,f=t.md.helpers.parseLinkLabel(t,f),f>=0?o=t.src.slice(l,f++):f=p+1):f=p+1,o||(o=t.src.slice(u,p)),i=t.env.references[mr(o)],!i)return t.pos=d,!1;s=i.href,a=i.title}if(!e){t.pos=u,t.posMax=p;const e=[["href",s]];t.push("link_open","a",1).attrs=e,a&&e.push(["title",a]),t.linkLevel++,t.md.inline.tokenize(t),t.linkLevel--,t.push("link_close","a",-1)}return t.pos=f,t.posMax=h,!0}],["image",function(t,e){let r,o,n,i,s,a,l,c,d="";const h=t.pos,u=t.posMax;if(33!==t.src.charCodeAt(t.pos))return!1;if(91!==t.src.charCodeAt(t.pos+1))return!1;const p=t.pos+2,f=t.md.helpers.parseLinkLabel(t,t.pos+1,!1);if(f<0)return!1;if(i=f+1,i<u&&40===t.src.charCodeAt(i)){for(i++;i<u&&(r=t.src.charCodeAt(i),hr(r)||10===r);i++);if(i>=u)return!1;for(c=i,a=t.md.helpers.parseLinkDestination(t.src,i,t.posMax),a.ok&&(d=t.md.normalizeLink(a.str),t.md.validateLink(d)?i=a.pos:d=""),c=i;i<u&&(r=t.src.charCodeAt(i),hr(r)||10===r);i++);if(a=t.md.helpers.parseLinkTitle(t.src,i,t.posMax),i<u&&c!==i&&a.ok)for(l=a.str,i=a.pos;i<u&&(r=t.src.charCodeAt(i),hr(r)||10===r);i++);else l="";if(i>=u||41!==t.src.charCodeAt(i))return t.pos=h,!1;i++}else{if(void 0===t.env.references)return!1;if(i<u&&91===t.src.charCodeAt(i)?(c=i+1,i=t.md.helpers.parseLinkLabel(t,i),i>=0?n=t.src.slice(c,i++):i=f+1):i=f+1,n||(n=t.src.slice(p,f)),s=t.env.references[mr(n)],!s)return t.pos=h,!1;d=s.href,l=s.title}if(!e){o=t.src.slice(p,f);const e=[];t.md.inline.parse(o,t.md,t.env,e);const r=t.push("image","img",0),n=[["src",d],["alt",""]];r.attrs=n,r.children=e,r.content=o,l&&n.push(["title",l])}return t.pos=i,t.posMax=u,!0}],["autolink",function(t,e){let r=t.pos;if(60!==t.src.charCodeAt(r))return!1;const o=t.pos,n=t.posMax;for(;;){if(++r>=n)return!1;const e=t.src.charCodeAt(r);if(60===e)return!1;if(62===e)break}const i=t.src.slice(o+1,r);if(bo.test(i)){const r=t.md.normalizeLink(i);if(!t.md.validateLink(r))return!1;if(!e){const e=t.push("link_open","a",1);e.attrs=[["href",r]],e.markup="autolink",e.info="auto",t.push("text","",0).content=t.md.normalizeLinkText(i);const o=t.push("link_close","a",-1);o.markup="autolink",o.info="auto"}return t.pos+=i.length+2,!0}if(go.test(i)){const r=t.md.normalizeLink("mailto:"+i);if(!t.md.validateLink(r))return!1;if(!e){const e=t.push("link_open","a",1);e.attrs=[["href",r]],e.markup="autolink",e.info="auto",t.push("text","",0).content=t.md.normalizeLinkText(i);const o=t.push("link_close","a",-1);o.markup="autolink",o.info="auto"}return t.pos+=i.length+2,!0}return!1}],["html_inline",function(t,e){if(!t.md.options.html)return!1;const r=t.posMax,o=t.pos;if(60!==t.src.charCodeAt(o)||o+2>=r)return!1;const n=t.src.charCodeAt(o+1);if(33!==n&&63!==n&&47!==n&&!function(t){const e=32|t;return e>=97&&e<=122}(n))return!1;const i=t.src.slice(o).match(to);if(!i)return!1;if(!e){const e=t.push("html_inline","",0);e.content=i[0],s=e.content,/^<a[>\s]/i.test(s)&&t.linkLevel++,function(t){return/^<\/a\s*>/i.test(t)}(e.content)&&t.linkLevel--}var s;return t.pos+=i[0].length,!0}],["entity",function(t,e){const r=t.pos,o=t.posMax;if(38!==t.src.charCodeAt(r))return!1;if(r+1>=o)return!1;if(35===t.src.charCodeAt(r+1)){const o=t.src.slice(r).match(yo);if(o){if(!e){const e="x"===o[1][0].toLowerCase()?parseInt(o[1].slice(1),16):parseInt(o[1],10),r=t.push("text_special","",0);r.content=Ye(e)?Ke(e):Ke(65533),r.markup=o[0],r.info="entity"}return t.pos+=o[0].length,!0}}else{const o=t.src.slice(r).match(ko);if(o){const r=Ne(o[0]);if(r!==o[0]){if(!e){const e=t.push("text_special","",0);e.content=r,e.markup=o[0],e.info="entity"}return t.pos+=o[0].length,!0}}}return!1}]],vo=[["balance_pairs",function(t){const e=t.tokens_meta,r=t.tokens_meta.length;_o(t.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&_o(e[t].delimiters)}],["strikethrough",po.postProcess],["emphasis",mo.postProcess],["fragments_join",function(t){let e,r,o=0;const n=t.tokens,i=t.tokens.length;for(e=r=0;e<i;e++)n[e].nesting<0&&o--,n[e].level=o,n[e].nesting>0&&o++,"text"===n[e].type&&e+1<i&&"text"===n[e+1].type?n[e+1].content=n[e].content+n[e+1].content:(e!==r&&(n[r]=n[e]),r++);e!==r&&(n.length=r)}]];function xo(){this.ruler=new Ar;for(let t=0;t<wo.length;t++)this.ruler.push(wo[t][0],wo[t][1]);this.ruler2=new Ar;for(let t=0;t<vo.length;t++)this.ruler2.push(vo[t][0],vo[t][1])}xo.prototype.skipToken=function(t){const e=t.pos,r=this.ruler.getRules(""),o=r.length,n=t.md.options.maxNesting,i=t.cache;if(void 0!==i[e])return void(t.pos=i[e]);let s=!1;if(t.level<n){for(let n=0;n<o;n++)if(t.level++,s=r[n](t,!0),t.level--,s){if(e>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}else t.pos=t.posMax;s||t.pos++,i[e]=t.pos},xo.prototype.tokenize=function(t){const e=this.ruler.getRules(""),r=e.length,o=t.posMax,n=t.md.options.maxNesting;for(;t.pos<o;){const i=t.pos;let s=!1;if(t.level<n)for(let o=0;o<r;o++)if(s=e[o](t,!1),s){if(i>=t.pos)throw new Error("inline rule didn't increment state.pos");break}if(s){if(t.pos>=o)break}else t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()},xo.prototype.parse=function(t,e,r,o){const n=new this.State(t,e,r,o);this.tokenize(n);const i=this.ruler2.getRules(""),s=i.length;for(let t=0;t<s;t++)i[t](n)},xo.prototype.State=ao;const Ao=xo;function Co(t){return Array.prototype.slice.call(arguments,1).forEach((function(e){e&&Object.keys(e).forEach((function(r){t[r]=e[r]}))})),t}function Eo(t){return Object.prototype.toString.call(t)}function Do(t){return"[object Function]"===Eo(t)}function So(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const $o={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},Lo={"http:":{validate:function(t,e,r){const o=t.slice(e);return r.re.http||(r.re.http=new RegExp("^\\/\\/"+r.re.src_auth+r.re.src_host_port_strict+r.re.src_path,"i")),r.re.http.test(o)?o.match(r.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,r){const o=t.slice(e);return r.re.no_http||(r.re.no_http=new RegExp("^"+r.re.src_auth+"(?:localhost|(?:(?:"+r.re.src_domain+")\\.)+"+r.re.src_domain_root+")"+r.re.src_port+r.re.src_host_terminator+r.re.src_path,"i")),r.re.no_http.test(o)?e>=3&&":"===t[e-3]||e>=3&&"/"===t[e-3]?0:o.match(r.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,r){const o=t.slice(e);return r.re.mailto||(r.re.mailto=new RegExp("^"+r.re.src_email_name+"@"+r.re.src_host_strict,"i")),r.re.mailto.test(o)?o.match(r.re.mailto)[0].length:0}}},zo="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",To="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function qo(t){const e=t.re=function(t){const e={};t=t||{},e.src_Any=we.source,e.src_Cc=ve.source,e.src_Z=Ae.source,e.src_P=_e.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");return e.src_pseudo_letter="(?:(?![><｜]|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|[><｜]|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|[><｜]|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!"+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}(t.__opts__),r=t.__tlds__.slice();function o(t){return t.replace("%TLDS%",e.src_tlds)}t.onCompile(),t.__tlds_replaced__||r.push(zo),r.push(e.src_xn),e.src_tlds=r.join("|"),e.email_fuzzy=RegExp(o(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(o(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(o(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(o(e.tpl_host_fuzzy_test),"i");const n=[];function i(t,e){throw new Error('(LinkifyIt) Invalid schema "'+t+'": '+e)}t.__compiled__={},Object.keys(t.__schemas__).forEach((function(e){const r=t.__schemas__[e];if(null===r)return;const o={validate:null,link:null};if(t.__compiled__[e]=o,"[object Object]"===Eo(r))return"[object RegExp]"!==Eo(r.validate)?Do(r.validate)?o.validate=r.validate:i(e,r):o.validate=function(t){return function(e,r){const o=e.slice(r);return t.test(o)?o.match(t)[0].length:0}}(r.validate),void(Do(r.normalize)?o.normalize=r.normalize:r.normalize?i(e,r):o.normalize=function(t,e){e.normalize(t)});!function(t){return"[object String]"===Eo(t)}(r)?i(e,r):n.push(e)})),n.forEach((function(e){t.__compiled__[t.__schemas__[e]]&&(t.__compiled__[e].validate=t.__compiled__[t.__schemas__[e]].validate,t.__compiled__[e].normalize=t.__compiled__[t.__schemas__[e]].normalize)})),t.__compiled__[""]={validate:null,normalize:function(t,e){e.normalize(t)}};const s=Object.keys(t.__compiled__).filter((function(e){return e.length>0&&t.__compiled__[e]})).map(So).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+s+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+s+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),function(t){t.__index__=-1,t.__text_cache__=""}(t)}function Ro(t,e){const r=t.__index__,o=t.__last_index__,n=t.__text_cache__.slice(r,o);this.schema=t.__schema__.toLowerCase(),this.index=r+e,this.lastIndex=o+e,this.raw=n,this.text=n,this.url=n}function Mo(t,e){const r=new Ro(t,e);return t.__compiled__[r.schema].normalize(r,t),r}function Fo(t,e){if(!(this instanceof Fo))return new Fo(t,e);var r;e||(r=t,Object.keys(r||{}).reduce((function(t,e){return t||$o.hasOwnProperty(e)}),!1)&&(e=t,t={})),this.__opts__=Co({},$o,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Co({},Lo,t),this.__compiled__={},this.__tlds__=To,this.__tlds_replaced__=!1,this.re={},qo(this)}Fo.prototype.add=function(t,e){return this.__schemas__[t]=e,qo(this),this},Fo.prototype.set=function(t){return this.__opts__=Co(this.__opts__,t),this},Fo.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let e,r,o,n,i,s,a,l,c;if(this.re.schema_test.test(t))for(a=this.re.schema_search,a.lastIndex=0;null!==(e=a.exec(t));)if(n=this.testSchemaAt(t,e[2],a.lastIndex),n){this.__schema__=e[2],this.__index__=e.index+e[1].length,this.__last_index__=e.index+e[0].length+n;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=t.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&null!==(r=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(i=r.index+r[1].length,(this.__index__<0||i<this.__index__)&&(this.__schema__="",this.__index__=i,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(c=t.indexOf("@"),c>=0&&null!==(o=t.match(this.re.email_fuzzy))&&(i=o.index+o[1].length,s=o.index+o[0].length,(this.__index__<0||i<this.__index__||i===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=i,this.__last_index__=s))),this.__index__>=0},Fo.prototype.pretest=function(t){return this.re.pretest.test(t)},Fo.prototype.testSchemaAt=function(t,e,r){return this.__compiled__[e.toLowerCase()]?this.__compiled__[e.toLowerCase()].validate(t,r,this):0},Fo.prototype.match=function(t){const e=[];let r=0;this.__index__>=0&&this.__text_cache__===t&&(e.push(Mo(this,r)),r=this.__last_index__);let o=r?t.slice(r):t;for(;this.test(o);)e.push(Mo(this,r)),o=o.slice(this.__last_index__),r+=this.__last_index__;return e.length?e:null},Fo.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const e=this.re.schema_at_start.exec(t);if(!e)return null;const r=this.testSchemaAt(t,e[2],e[0].length);return r?(this.__schema__=e[2],this.__index__=e.index+e[1].length,this.__last_index__=e.index+e[0].length+r,Mo(this,0)):null},Fo.prototype.tlds=function(t,e){return t=Array.isArray(t)?t:[t],e?(this.__tlds__=this.__tlds__.concat(t).sort().filter((function(t,e,r){return t!==r[e-1]})).reverse(),qo(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,qo(this),this)},Fo.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),"mailto:"!==t.schema||/^mailto:/i.test(t.url)||(t.url="mailto:"+t.url)},Fo.prototype.onCompile=function(){};const Po=Fo,Oo=2147483647,Io=36,No=/^xn--/,Bo=/[^\0-\x7F]/,jo=/[\x2E\u3002\uFF0E\uFF61]/g,Uo={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Ho=Math.floor,Vo=String.fromCharCode;function Zo(t){throw new RangeError(Uo[t])}function Go(t,e){const r=t.split("@");let o="";r.length>1&&(o=r[0]+"@",t=r[1]);const n=function(t,e){const r=[];let o=t.length;for(;o--;)r[o]=e(t[o]);return r}((t=t.replace(jo,".")).split("."),e).join(".");return o+n}function Wo(t){const e=[];let r=0;const o=t.length;for(;r<o;){const n=t.charCodeAt(r++);if(n>=55296&&n<=56319&&r<o){const o=t.charCodeAt(r++);56320==(64512&o)?e.push(((1023&n)<<10)+(1023&o)+65536):(e.push(n),r--)}else e.push(n)}return e}const Jo=function(t,e){return t+22+75*(t<26)-((0!=e)<<5)},Qo=function(t,e,r){let o=0;for(t=r?Ho(t/700):t>>1,t+=Ho(t/e);t>455;o+=Io)t=Ho(t/35);return Ho(o+36*t/(t+38))},Yo=function(t){const e=[],r=t.length;let o=0,n=128,i=72,s=t.lastIndexOf("-");s<0&&(s=0);for(let r=0;r<s;++r)t.charCodeAt(r)>=128&&Zo("not-basic"),e.push(t.charCodeAt(r));for(let l=s>0?s+1:0;l<r;){const s=o;for(let e=1,n=Io;;n+=Io){l>=r&&Zo("invalid-input");const s=(a=t.charCodeAt(l++))>=48&&a<58?a-48+26:a>=65&&a<91?a-65:a>=97&&a<123?a-97:Io;s>=Io&&Zo("invalid-input"),s>Ho((Oo-o)/e)&&Zo("overflow"),o+=s*e;const c=n<=i?1:n>=i+26?26:n-i;if(s<c)break;const d=Io-c;e>Ho(Oo/d)&&Zo("overflow"),e*=d}const c=e.length+1;i=Qo(o-s,c,0==s),Ho(o/c)>Oo-n&&Zo("overflow"),n+=Ho(o/c),o%=c,e.splice(o++,0,n)}var a;return String.fromCodePoint(...e)},Ko=function(t){const e=[],r=(t=Wo(t)).length;let o=128,n=0,i=72;for(const r of t)r<128&&e.push(Vo(r));const s=e.length;let a=s;for(s&&e.push("-");a<r;){let r=Oo;for(const e of t)e>=o&&e<r&&(r=e);const l=a+1;r-o>Ho((Oo-n)/l)&&Zo("overflow"),n+=(r-o)*l,o=r;for(const r of t)if(r<o&&++n>Oo&&Zo("overflow"),r===o){let t=n;for(let r=Io;;r+=Io){const o=r<=i?1:r>=i+26?26:r-i;if(t<o)break;const n=t-o,s=Io-o;e.push(Vo(Jo(o+n%s,0))),t=Ho(n/s)}e.push(Vo(Jo(t,0))),i=Qo(n,l,a===s),n=0,++a}++n,++o}return e.join("")},Xo={version:"2.3.1",ucs2:{decode:Wo,encode:t=>String.fromCodePoint(...t)},decode:Yo,encode:Ko,toASCII:function(t){return Go(t,(function(t){return Bo.test(t)?"xn--"+Ko(t):t}))},toUnicode:function(t){return Go(t,(function(t){return No.test(t)?Yo(t.slice(4).toLowerCase()):t}))}},tn={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}},en=/^(vbscript|javascript|file|data):/,rn=/^data:image\/(gif|png|jpeg|webp);/;function on(t){const e=t.trim().toLowerCase();return!en.test(e)||rn.test(e)}const nn=["http:","https:","mailto:"];function sn(t){const e=ke(t,!0);if(e.hostname&&(!e.protocol||nn.indexOf(e.protocol)>=0))try{e.hostname=Xo.toASCII(e.hostname)}catch(t){}return ie(se(e))}function an(t){const e=ke(t,!0);if(e.hostname&&(!e.protocol||nn.indexOf(e.protocol)>=0))try{e.hostname=Xo.toUnicode(e.hostname)}catch(t){}return re(se(e),re.defaultChars+"%")}function ln(t,e){if(!(this instanceof ln))return new ln(t,e);e||Ze(t)||(e=t||{},t="default"),this.inline=new Ao,this.block=new io,this.core=new Vr,this.renderer=new vr,this.linkify=new Po,this.validateLink=on,this.normalizeLink=sn,this.normalizeLinkText=an,this.utils=o,this.helpers=Je({},n),this.options={},this.configure(t),e&&this.set(e)}ln.prototype.set=function(t){return Je(this.options,t),this},ln.prototype.configure=function(t){const e=this;if(Ze(t)){const e=t;if(!(t=tn[e]))throw new Error('Wrong `markdown-it` preset "'+e+'", check name')}if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach((function(r){t.components[r].rules&&e[r].ruler.enableOnly(t.components[r].rules),t.components[r].rules2&&e[r].ruler2.enableOnly(t.components[r].rules2)})),this},ln.prototype.enable=function(t,e){let r=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach((function(e){r=r.concat(this[e].ruler.enable(t,!0))}),this),r=r.concat(this.inline.ruler2.enable(t,!0));const o=t.filter((function(t){return r.indexOf(t)<0}));if(o.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+o);return this},ln.prototype.disable=function(t,e){let r=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach((function(e){r=r.concat(this[e].ruler.disable(t,!0))}),this),r=r.concat(this.inline.ruler2.disable(t,!0));const o=t.filter((function(t){return r.indexOf(t)<0}));if(o.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+o);return this},ln.prototype.use=function(t){const e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this},ln.prototype.parse=function(t,e){if("string"!=typeof t)throw new Error("Input data should be a String");const r=new this.core.State(t,this,e);return this.core.process(r),r.tokens},ln.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)},ln.prototype.parseInline=function(t,e){const r=new this.core.State(t,this,e);return r.inlineMode=!0,this.core.process(r),r.tokens},ln.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};const cn=ln,dn=d`
  @media (prefers-color-scheme: dark) {
    .markdown-body,
    [data-theme='dark'] {
      /*dark*/
      color-scheme: dark;
      --color-prettylights-syntax-comment: #8b949e;
      --color-prettylights-syntax-constant: #79c0ff;
      --color-prettylights-syntax-entity: #d2a8ff;
      --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
      --color-prettylights-syntax-entity-tag: #7ee787;
      --color-prettylights-syntax-keyword: #ff7b72;
      --color-prettylights-syntax-string: #a5d6ff;
      --color-prettylights-syntax-variable: #ffa657;
      --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
      --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
      --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
      --color-prettylights-syntax-carriage-return-text: #f0f6fc;
      --color-prettylights-syntax-carriage-return-bg: #b62324;
      --color-prettylights-syntax-string-regexp: #7ee787;
      --color-prettylights-syntax-markup-list: #f2cc60;
      --color-prettylights-syntax-markup-heading: #1f6feb;
      --color-prettylights-syntax-markup-italic: #c9d1d9;
      --color-prettylights-syntax-markup-bold: #c9d1d9;
      --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
      --color-prettylights-syntax-markup-deleted-bg: #67060c;
      --color-prettylights-syntax-markup-inserted-text: #aff5b4;
      --color-prettylights-syntax-markup-inserted-bg: #033a16;
      --color-prettylights-syntax-markup-changed-text: #ffdfb6;
      --color-prettylights-syntax-markup-changed-bg: #5a1e02;
      --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
      --color-prettylights-syntax-markup-ignored-bg: #1158c7;
      --color-prettylights-syntax-meta-diff-range: #d2a8ff;
      --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
      --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
      --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
      --color-fg-default: #e6edf3;
      --color-fg-muted: #848d97;
      --color-fg-subtle: #6e7681;
      --color-canvas-default: #0d1117;
      --color-canvas-subtle: #161b22;
      --color-border-default: #30363d;
      --color-border-muted: #21262d;
      --color-neutral-muted: rgba(110, 118, 129, 0.4);
      --color-accent-fg: #2f81f7;
      --color-accent-emphasis: #1f6feb;
      --color-success-fg: #3fb950;
      --color-success-emphasis: #238636;
      --color-attention-fg: #d29922;
      --color-attention-emphasis: #9e6a03;
      --color-attention-subtle: rgba(187, 128, 9, 0.15);
      --color-danger-fg: #f85149;
      --color-danger-emphasis: #da3633;
      --color-done-fg: #a371f7;
      --color-done-emphasis: #8957e5;
    }
  }

  @media (prefers-color-scheme: light) {
    .markdown-body,
    [data-theme='light'] {
      /*light*/
      color-scheme: light;
      --color-prettylights-syntax-comment: #57606a;
      --color-prettylights-syntax-constant: #0550ae;
      --color-prettylights-syntax-entity: #6639ba;
      --color-prettylights-syntax-storage-modifier-import: #24292f;
      --color-prettylights-syntax-entity-tag: #116329;
      --color-prettylights-syntax-keyword: #cf222e;
      --color-prettylights-syntax-string: #0a3069;
      --color-prettylights-syntax-variable: #953800;
      --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
      --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
      --color-prettylights-syntax-invalid-illegal-bg: #82071e;
      --color-prettylights-syntax-carriage-return-text: #f6f8fa;
      --color-prettylights-syntax-carriage-return-bg: #cf222e;
      --color-prettylights-syntax-string-regexp: #116329;
      --color-prettylights-syntax-markup-list: #3b2300;
      --color-prettylights-syntax-markup-heading: #0550ae;
      --color-prettylights-syntax-markup-italic: #24292f;
      --color-prettylights-syntax-markup-bold: #24292f;
      --color-prettylights-syntax-markup-deleted-text: #82071e;
      --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
      --color-prettylights-syntax-markup-inserted-text: #116329;
      --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
      --color-prettylights-syntax-markup-changed-text: #953800;
      --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
      --color-prettylights-syntax-markup-ignored-text: #eaeef2;
      --color-prettylights-syntax-markup-ignored-bg: #0550ae;
      --color-prettylights-syntax-meta-diff-range: #8250df;
      --color-prettylights-syntax-brackethighlighter-angle: #57606a;
      --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
      --color-prettylights-syntax-constant-other-reference-link: #0a3069;
      --color-fg-default: #1f2328;
      --color-fg-muted: #656d76;
      --color-fg-subtle: #6e7781;
      --color-canvas-default: #ffffff;
      --color-canvas-subtle: #f6f8fa;
      --color-border-default: #d0d7de;
      --color-border-muted: hsla(210, 18%, 87%, 1);
      --color-neutral-muted: rgba(175, 184, 193, 0.2);
      --color-accent-fg: #0969da;
      --color-accent-emphasis: #0969da;
      --color-success-fg: #1a7f37;
      --color-success-emphasis: #1f883d;
      --color-attention-fg: #9a6700;
      --color-attention-emphasis: #9a6700;
      --color-attention-subtle: #fff8c5;
      --color-danger-fg: #d1242f;
      --color-danger-emphasis: #cf222e;
      --color-done-fg: #8250df;
      --color-done-emphasis: #8250df;
    }
  }

  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .markdown-body .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }

  .markdown-body h1:hover .anchor .octicon-link:before,
  .markdown-body h2:hover .anchor .octicon-link:before,
  .markdown-body h3:hover .anchor .octicon-link:before,
  .markdown-body h4:hover .anchor .octicon-link:before,
  .markdown-body h5:hover .anchor .octicon-link:before,
  .markdown-body h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: ' ';
    display: inline-block;
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  }

  .markdown-body details,
  .markdown-body figcaption,
  .markdown-body figure {
    display: block;
  }

  .markdown-body summary {
    display: list-item;
  }

  .markdown-body [hidden] {
    display: none !important;
  }

  .markdown-body a {
    background-color: transparent;
    color: var(--color-accent-fg);
    text-decoration: none;
  }

  .markdown-body abbr[title] {
    border-bottom: none;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  .markdown-body b,
  .markdown-body strong {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  .markdown-body dfn {
    font-style: italic;
  }

  .markdown-body h1 {
    margin: 0.67em 0;
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  .markdown-body mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-fg-default);
  }

  .markdown-body small {
    font-size: 90%;
  }

  .markdown-body sub,
  .markdown-body sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  .markdown-body sub {
    bottom: -0.25em;
  }

  .markdown-body sup {
    top: -0.5em;
  }

  .markdown-body img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default);
  }

  .markdown-body code,
  .markdown-body kbd,
  .markdown-body pre,
  .markdown-body samp {
    font-family: monospace;
    font-size: 1em;
  }

  .markdown-body figure {
    margin: 1em 40px;
  }

  .markdown-body hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid var(--color-border-muted);
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0;
  }

  .markdown-body input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .markdown-body [type='button'],
  .markdown-body [type='reset'],
  .markdown-body [type='submit'] {
    -webkit-appearance: button;
    appearance: button;
  }

  .markdown-body [type='checkbox'],
  .markdown-body [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  .markdown-body [type='number']::-webkit-inner-spin-button,
  .markdown-body [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  .markdown-body [type='search']::-webkit-search-cancel-button,
  .markdown-body [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  .markdown-body ::-webkit-file-upload-button {
    -webkit-appearance: button;
    appearance: button;
    font: inherit;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body ::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1;
  }

  .markdown-body hr::before {
    display: table;
    content: '';
  }

  .markdown-body hr::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  .markdown-body td,
  .markdown-body th {
    padding: 0;
  }

  .markdown-body details summary {
    cursor: pointer;
  }

  .markdown-body details:not([open]) > *:not(summary) {
    display: none !important;
  }

  .markdown-body a:focus,
  .markdown-body [role='button']:focus,
  .markdown-body input[type='radio']:focus,
  .markdown-body input[type='checkbox']:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  .markdown-body a:focus:not(:focus-visible),
  .markdown-body [role='button']:focus:not(:focus-visible),
  .markdown-body input[type='radio']:focus:not(:focus-visible),
  .markdown-body input[type='checkbox']:focus:not(:focus-visible) {
    outline: solid 1px transparent;
  }

  .markdown-body a:focus-visible,
  .markdown-body [role='button']:focus-visible,
  .markdown-body input[type='radio']:focus-visible,
  .markdown-body input[type='checkbox']:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  .markdown-body a:not([class]):focus,
  .markdown-body a:not([class]):focus-visible,
  .markdown-body input[type='radio']:focus,
  .markdown-body input[type='radio']:focus-visible,
  .markdown-body input[type='checkbox']:focus,
  .markdown-body input[type='checkbox']:focus-visible {
    outline-offset: 0;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-neutral-muted);
    border-bottom-color: var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 1.25;
  }

  .markdown-body h2 {
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  .markdown-body h3 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1.25em;
  }

  .markdown-body h4 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1em;
  }

  .markdown-body h5 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.875em;
  }

  .markdown-body h6 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.85em;
    color: var(--color-fg-muted);
  }

  .markdown-body p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .markdown-body blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--color-fg-muted);
    border-left: 0.25em solid var(--color-border-default);
  }

  .markdown-body ul,
  .markdown-body ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  .markdown-body ol ol,
  .markdown-body ul ol {
    list-style-type: lower-roman;
  }

  .markdown-body ul ul ol,
  .markdown-body ul ol ol,
  .markdown-body ol ul ol,
  .markdown-body ol ol ol {
    list-style-type: lower-alpha;
  }

  .markdown-body dd {
    margin-left: 0;
  }

  .markdown-body tt,
  .markdown-body code,
  .markdown-body samp {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
  }

  .markdown-body pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
  }

  .markdown-body .octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
  }

  .markdown-body input::-webkit-outer-spin-button,
  .markdown-body input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body .mr-2 {
    margin-right: var(--base-size-8, 8px) !important;
  }

  .markdown-body::before {
    display: table;
    content: '';
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body > *:first-child {
    margin-top: 0 !important;
  }

  .markdown-body > *:last-child {
    margin-bottom: 0 !important;
  }

  .markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .markdown-body .absent {
    color: var(--color-danger-fg);
  }

  .markdown-body .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .markdown-body .anchor:focus {
    outline: none;
  }

  .markdown-body p,
  .markdown-body blockquote,
  .markdown-body ul,
  .markdown-body ol,
  .markdown-body dl,
  .markdown-body table,
  .markdown-body pre,
  .markdown-body details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .markdown-body blockquote > :first-child {
    margin-top: 0;
  }

  .markdown-body blockquote > :last-child {
    margin-bottom: 0;
  }

  .markdown-body h1 .octicon-link,
  .markdown-body h2 .octicon-link,
  .markdown-body h3 .octicon-link,
  .markdown-body h4 .octicon-link,
  .markdown-body h5 .octicon-link,
  .markdown-body h6 .octicon-link {
    color: var(--color-fg-default);
    vertical-align: middle;
    visibility: hidden;
  }

  .markdown-body h1:hover .anchor,
  .markdown-body h2:hover .anchor,
  .markdown-body h3:hover .anchor,
  .markdown-body h4:hover .anchor,
  .markdown-body h5:hover .anchor,
  .markdown-body h6:hover .anchor {
    text-decoration: none;
  }

  .markdown-body h1:hover .anchor .octicon-link,
  .markdown-body h2:hover .anchor .octicon-link,
  .markdown-body h3:hover .anchor .octicon-link,
  .markdown-body h4:hover .anchor .octicon-link,
  .markdown-body h5:hover .anchor .octicon-link,
  .markdown-body h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .markdown-body h1 tt,
  .markdown-body h1 code,
  .markdown-body h2 tt,
  .markdown-body h2 code,
  .markdown-body h3 tt,
  .markdown-body h3 code,
  .markdown-body h4 tt,
  .markdown-body h4 code,
  .markdown-body h5 tt,
  .markdown-body h5 code,
  .markdown-body h6 tt,
  .markdown-body h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  .markdown-body summary h1,
  .markdown-body summary h2,
  .markdown-body summary h3,
  .markdown-body summary h4,
  .markdown-body summary h5,
  .markdown-body summary h6 {
    display: inline-block;
  }

  .markdown-body summary h1 .anchor,
  .markdown-body summary h2 .anchor,
  .markdown-body summary h3 .anchor,
  .markdown-body summary h4 .anchor,
  .markdown-body summary h5 .anchor,
  .markdown-body summary h6 .anchor {
    margin-left: -40px;
  }

  .markdown-body summary h1,
  .markdown-body summary h2 {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .markdown-body ul.no-list,
  .markdown-body ol.no-list {
    padding: 0;
    list-style-type: none;
  }

  .markdown-body ol[type='a s'] {
    list-style-type: lower-alpha;
  }

  .markdown-body ol[type='A s'] {
    list-style-type: upper-alpha;
  }

  .markdown-body ol[type='i s'] {
    list-style-type: lower-roman;
  }

  .markdown-body ol[type='I s'] {
    list-style-type: upper-roman;
  }

  .markdown-body ol[type='1'] {
    list-style-type: decimal;
  }

  .markdown-body div > ol:not([type]) {
    list-style-type: decimal;
  }

  .markdown-body ul ul,
  .markdown-body ul ol,
  .markdown-body ol ol,
  .markdown-body ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body li > p {
    margin-top: 16px;
  }

  .markdown-body li + li {
    margin-top: 0.25em;
  }

  .markdown-body dl {
    padding: 0;
  }

  .markdown-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: var(--base-text-weight-semibold, 600);
  }

  .markdown-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .markdown-body table th {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  .markdown-body table th,
  .markdown-body table td {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default);
  }

  .markdown-body table td > :last-child {
    margin-bottom: 0;
  }

  .markdown-body table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted);
  }

  .markdown-body table tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle);
  }

  .markdown-body table img {
    background-color: transparent;
  }

  .markdown-body img[align='right'] {
    padding-left: 20px;
  }

  .markdown-body img[align='left'] {
    padding-right: 20px;
  }

  .markdown-body .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  .markdown-body span.frame {
    display: block;
    overflow: hidden;
  }

  .markdown-body span.frame > span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid var(--color-border-default);
  }

  .markdown-body span.frame span img {
    display: block;
    float: left;
  }

  .markdown-body span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: var(--color-fg-default);
  }

  .markdown-body span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  .markdown-body span.align-center > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center;
  }

  .markdown-body span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  .markdown-body span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  .markdown-body span.align-right > span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right;
  }

  .markdown-body span.align-right span img {
    margin: 0;
    text-align: right;
  }

  .markdown-body span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
  }

  .markdown-body span.float-left span {
    margin: 13px 0 0;
  }

  .markdown-body span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
  }

  .markdown-body span.float-right > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right;
  }

  .markdown-body code,
  .markdown-body tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: var(--color-neutral-muted);
    border-radius: 6px;
  }

  .markdown-body code br,
  .markdown-body tt br {
    display: none;
  }

  .markdown-body del code {
    text-decoration: inherit;
  }

  .markdown-body samp {
    font-size: 85%;
  }

  .markdown-body pre code {
    font-size: 100%;
  }

  .markdown-body pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .markdown-body .highlight {
    margin-bottom: 16px;
  }

  .markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .markdown-body .highlight pre,
  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    color: var(--color-fg-default);
    background-color: var(--color-canvas-subtle);
    border-radius: 6px;
  }

  .markdown-body pre code,
  .markdown-body pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .markdown-body .csv-data td,
  .markdown-body .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: 12px;
    line-height: 1;
    text-align: left;
    white-space: nowrap;
  }

  .markdown-body .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: var(--color-canvas-default);
    border: 0;
  }

  .markdown-body .csv-data tr {
    border-top: 0;
  }

  .markdown-body .csv-data th {
    font-weight: var(--base-text-weight-semibold, 600);
    background: var(--color-canvas-subtle);
    border-top: 0;
  }

  .markdown-body [data-footnote-ref]::before {
    content: '[';
  }

  .markdown-body [data-footnote-ref]::after {
    content: ']';
  }

  .markdown-body .footnotes {
    font-size: 12px;
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default);
  }

  .markdown-body .footnotes ol {
    padding-left: 16px;
  }

  .markdown-body .footnotes ol ul {
    display: inline-block;
    padding-left: 16px;
    margin-top: 16px;
  }

  .markdown-body .footnotes li {
    position: relative;
  }

  .markdown-body .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: '';
    border: 2px solid var(--color-accent-emphasis);
    border-radius: 6px;
  }

  .markdown-body .footnotes li:target {
    color: var(--color-fg-default);
  }

  .markdown-body .footnotes .data-footnote-backref g-emoji {
    font-family: monospace;
  }

  .markdown-body .pl-c {
    color: var(--color-prettylights-syntax-comment);
  }

  .markdown-body .pl-c1,
  .markdown-body .pl-s .pl-v {
    color: var(--color-prettylights-syntax-constant);
  }

  .markdown-body .pl-e,
  .markdown-body .pl-en {
    color: var(--color-prettylights-syntax-entity);
  }

  .markdown-body .pl-smi,
  .markdown-body .pl-s .pl-s1 {
    color: var(--color-prettylights-syntax-storage-modifier-import);
  }

  .markdown-body .pl-ent {
    color: var(--color-prettylights-syntax-entity-tag);
  }

  .markdown-body .pl-k {
    color: var(--color-prettylights-syntax-keyword);
  }

  .markdown-body .pl-s,
  .markdown-body .pl-pds,
  .markdown-body .pl-s .pl-pse .pl-s1,
  .markdown-body .pl-sr,
  .markdown-body .pl-sr .pl-cce,
  .markdown-body .pl-sr .pl-sre,
  .markdown-body .pl-sr .pl-sra {
    color: var(--color-prettylights-syntax-string);
  }

  .markdown-body .pl-v,
  .markdown-body .pl-smw {
    color: var(--color-prettylights-syntax-variable);
  }

  .markdown-body .pl-bu {
    color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
  }

  .markdown-body .pl-ii {
    color: var(--color-prettylights-syntax-invalid-illegal-text);
    background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
  }

  .markdown-body .pl-c2 {
    color: var(--color-prettylights-syntax-carriage-return-text);
    background-color: var(--color-prettylights-syntax-carriage-return-bg);
  }

  .markdown-body .pl-sr .pl-cce {
    font-weight: bold;
    color: var(--color-prettylights-syntax-string-regexp);
  }

  .markdown-body .pl-ml {
    color: var(--color-prettylights-syntax-markup-list);
  }

  .markdown-body .pl-mh,
  .markdown-body .pl-mh .pl-en,
  .markdown-body .pl-ms {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-heading);
  }

  .markdown-body .pl-mi {
    font-style: italic;
    color: var(--color-prettylights-syntax-markup-italic);
  }

  .markdown-body .pl-mb {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-bold);
  }

  .markdown-body .pl-md {
    color: var(--color-prettylights-syntax-markup-deleted-text);
    background-color: var(--color-prettylights-syntax-markup-deleted-bg);
  }

  .markdown-body .pl-mi1 {
    color: var(--color-prettylights-syntax-markup-inserted-text);
    background-color: var(--color-prettylights-syntax-markup-inserted-bg);
  }

  .markdown-body .pl-mc {
    color: var(--color-prettylights-syntax-markup-changed-text);
    background-color: var(--color-prettylights-syntax-markup-changed-bg);
  }

  .markdown-body .pl-mi2 {
    color: var(--color-prettylights-syntax-markup-ignored-text);
    background-color: var(--color-prettylights-syntax-markup-ignored-bg);
  }

  .markdown-body .pl-mdr {
    font-weight: bold;
    color: var(--color-prettylights-syntax-meta-diff-range);
  }

  .markdown-body .pl-ba {
    color: var(--color-prettylights-syntax-brackethighlighter-angle);
  }

  .markdown-body .pl-sg {
    color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
  }

  .markdown-body .pl-corl {
    text-decoration: underline;
    color: var(--color-prettylights-syntax-constant-other-reference-link);
  }

  .markdown-body g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
    font-style: normal !important;
    font-weight: var(--base-text-weight-normal, 400);
    line-height: 1;
    vertical-align: -0.075em;
  }

  .markdown-body g-emoji img {
    width: 1em;
    height: 1em;
  }

  .markdown-body .task-list-item {
    list-style-type: none;
  }

  .markdown-body .task-list-item label {
    font-weight: var(--base-text-weight-normal, 400);
  }

  .markdown-body .task-list-item.enabled label {
    cursor: pointer;
  }

  .markdown-body .task-list-item + .task-list-item {
    margin-top: 4px;
  }

  .markdown-body .task-list-item .handle {
    display: none;
  }

  .markdown-body .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.4em;
    vertical-align: middle;
  }

  .markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }

  .markdown-body .contains-task-list {
    position: relative;
  }

  .markdown-body .contains-task-list:hover .task-list-item-convert-container,
  .markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
    display: block;
    width: auto;
    height: 24px;
    overflow: visible;
    clip: auto;
  }

  .markdown-body ::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }

  .markdown-body .markdown-alert {
    padding: var(--base-size-8) var(--base-size-16);
    margin-bottom: 16px;
    color: inherit;
    border-left: 0.25em solid var(--color-border-default);
  }

  .markdown-body .markdown-alert > :first-child {
    margin-top: 0;
  }

  .markdown-body .markdown-alert > :last-child {
    margin-bottom: 0;
  }

  .markdown-body .markdown-alert .markdown-alert-title {
    display: flex;
    font-weight: var(--base-text-weight-medium, 500);
    align-items: center;
    line-height: 1;
  }

  .markdown-body .markdown-alert.markdown-alert-note {
    border-left-color: var(--color-accent-emphasis);
  }

  .markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
    color: var(--color-accent-fg);
  }

  .markdown-body .markdown-alert.markdown-alert-important {
    border-left-color: var(--color-done-emphasis);
  }

  .markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
    color: var(--color-done-fg);
  }

  .markdown-body .markdown-alert.markdown-alert-warning {
    border-left-color: var(--color-attention-emphasis);
  }

  .markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
    color: var(--color-attention-fg);
  }

  .markdown-body .markdown-alert.markdown-alert-tip {
    border-left-color: var(--color-success-emphasis);
  }

  .markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
    color: var(--color-success-fg);
  }

  .markdown-body .markdown-alert.markdown-alert-caution {
    border-left-color: var(--color-danger-emphasis);
  }

  .markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
    color: var(--color-danger-fg);
  }
`;var hn=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let un=class extends pt{constructor(){super(...arguments),this.HTMLText="",this.name="Basic"}updated(){this.markdownBody.innerHTML=this.HTMLText}render(){return J`<div class="markdown-body"></div>`}};un.styles=dn,hn([yt({attribute:!1})],un.prototype,"HTMLText",void 0),hn([kt()],un.prototype,"name",void 0),hn([wt("div")],un.prototype,"markdownBody",void 0),un=hn([mt("article-basicviewer")],un);const pn=d`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  html {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .splendor-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .splendor-h1,
  h2,
  .splendor-h2,
  h3,
  .splendor-h3,
  h4,
  .splendor-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .splendor-h1 {
    margin-top: 0;
    font-size: 2.998rem;
  }

  h2,
  .splendor-h2 {
    font-size: 1.827rem;
  }

  h3,
  .splendor-h3 {
    font-size: 1.499rem;
  }

  h4,
  .splendor-h4 {
    font-size: 1.214rem;
  }

  h5,
  .splendor-h5 {
    font-size: 1.121rem;
  }

  h6,
  .splendor-h6 {
    font-size: 0.88rem;
  }

  small,
  .splendor-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  @import url(http://fonts.googleapis.com/css?family=Merriweather:300italic,300);

  html {
    font-size: 18px;
    max-width: 100%;
  }

  body {
    color: #444;
    font-family: 'Merriweather', Georgia, serif;
    margin: 0;
    max-width: 100%;
  }

  /* === A bit of a gross hack so we can have bleeding divs/blockquotes. */

  p,
  *:not(div):not(img):not(body):not(html):not(li):not(blockquote):not(p) {
    margin-left: 2rem;
    max-width: 36rem;
    padding: 0.25rem;
  }

  div {
    width: 100%;
  }

  div img {
    width: 100%;
  }

  blockquote p {
    font-size: 1.2rem;
    font-style: italic;
    margin: 2rem;
    max-width: 48rem;
  }

  li {
    margin-left: 2rem;
  }

  /* Counteract the specificity of the gross *:not() chain. */

  h1 {
    padding: 4rem 0 !important;
  }

  /*  === End gross hack */

  p {
    color: #555;
    height: auto;
    line-height: 1.45;
  }

  pre,
  code {
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }

  pre {
    background-color: #fafafa;
    font-size: 0.8rem;
    overflow-x: scroll;
    padding: 1.125em;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }
`;var fn=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let mn=class extends pt{constructor(){super(...arguments),this.HTMLText="",this.name="Splendor"}updated(){this.markdownBody.innerHTML=this.HTMLText}render(){return J`<div></div>`}};mn.styles=pn,fn([yt({attribute:!1})],mn.prototype,"HTMLText",void 0),fn([kt()],mn.prototype,"name",void 0),fn([wt("div")],mn.prototype,"markdownBody",void 0),mn=fn([mt("article-splendorviewer")],mn);const gn=d`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  pre,
  code {
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }

  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: scroll;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }

  .modest-no-decoration {
    text-decoration: none;
  }

  html {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .modest-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .modest-h1,
  h2,
  .modest-h2,
  h3,
  .modest-h3,
  h4,
  .modest-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .modest-h1 {
    margin-top: 0;
    font-size: 2.998rem;
  }

  h2,
  .modest-h2 {
    font-size: 1.827rem;
  }

  h3,
  .modest-h3 {
    font-size: 1.499rem;
  }

  h4,
  .modest-h4 {
    font-size: 1.214rem;
  }

  h5,
  .modest-h5 {
    font-size: 1.121rem;
  }

  h6,
  .modest-h6 {
    font-size: 0.88rem;
  }

  small,
  .modest-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  @import url(http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);

  @import url(http://fonts.googleapis.com/css?family=Arimo:700,700italic);

  html {
    font-size: 18px;
    max-width: 100%;
  }

  body {
    color: #444;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    margin: 0 auto;
    max-width: 48rem;
    line-height: 1.45;
    padding: 0.25rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Arimo, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3 {
    border-bottom: 2px solid #fafafa;
    margin-bottom: 1.15rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  blockquote {
    border-left: 8px solid #fafafa;
    padding: 1rem;
  }

  pre,
  code {
    background-color: #fafafa;
  }
`;var bn=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let yn=class extends pt{constructor(){super(...arguments),this.HTMLText="",this.name="Modest"}updated(){this.markdownBody.innerHTML=this.HTMLText}render(){return J`<div></div>`}};yn.styles=gn,bn([yt({attribute:!1})],yn.prototype,"HTMLText",void 0),bn([kt()],yn.prototype,"name",void 0),bn([wt("div")],yn.prototype,"markdownBody",void 0),yn=bn([mt("article-modestviewer")],yn);const kn=d`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .air-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .air-h1,
  h2,
  .air-h2,
  h3,
  .air-h3,
  h4,
  .air-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .air-h1 {
    margin-top: 0;
    font-size: 2.998rem;
  }

  h2,
  .air-h2 {
    font-size: 1.827rem;
  }

  h3,
  .air-h3 {
    font-size: 1.499rem;
  }

  h4,
  .air-h4 {
    font-size: 1.214rem;
  }

  h5,
  .air-h5 {
    font-size: 1.121rem;
  }

  h6,
  .air-h6 {
    font-size: 0.88rem;
  }

  small,
  .air-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  @import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,300);

  body {
    color: #444;
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-weight: 300;
    margin: 6rem auto 1rem;
    max-width: 48rem;
    text-align: center;
  }

  img {
    margin: 0 auto;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }

  pre {
    background-color: #fafafa;
    padding: 1rem;
    text-align: left;
  }

  blockquote {
    margin: 0;
    border-left: 5px solid #7a7a7a;
    font-style: italic;
    padding: 1.33em;
    text-align: left;
  }

  ul,
  ol,
  li {
    text-align: left;
  }

  p {
    color: #777;
  }
`;var _n=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let wn=class extends pt{constructor(){super(...arguments),this.HTMLText="",this.name="Air"}updated(){this.markdownBody.innerHTML=this.HTMLText}render(){return J`<div class="markdown-body"></div>`}};wn.styles=kn,_n([yt({attribute:!1})],wn.prototype,"HTMLText",void 0),_n([kt()],wn.prototype,"name",void 0),_n([wt("div")],wn.prototype,"markdownBody",void 0),wn=_n([mt("article-airviewer")],wn);class vn{static getViewerNameList(){return vn.ViewerList.map((t=>t.name))}static getCurrentViewer(){return void 0===vn.currentViewer&&(vn.currentViewer=vn.ViewerList[0]),vn.currentViewer}static renderMarkdownToHTML(t){const e=vn.transformMarkdownToHTMLText(t);return vn.getCurrentViewer().HTMLText=e,vn.currentViewer}static transformMarkdownToHTMLText(t){return vn.markdownIt.render(t)}static registViewer(t){vn.currentViewer=t}static selectViewer(t){const e=vn.ViewerList.filter((e=>e.name===t))[0];vn.registViewer(e)}}vn.ViewerList=[new un,new mn,new yn,new wn],vn.markdownIt=cn({html:!0,linkify:!0,typographer:!0});var xn=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let An=class extends pt{constructor(){super(...arguments),this.viewerNameList=[],this.viewerListHeight=0}firstUpdated(){const t=this.viewerNameList.map((t=>{const e=document.createElement("div");return e.classList.add("item"),t===this.currentViewerName&&e.classList.add("selected"),e.innerText=t,e}));this.viewerList.append(...t),this.viewerListHeight=this.viewerList.getBoundingClientRect().height,this.viewerList.style.top=`-${this.viewerListHeight+2}px`}open(){this.toggle.classList.toggle("active"),this.toggle.classList.contains("active")?this.viewerList.style.top="0px":this.viewerList.style.top=`-${this.viewerListHeight+2}px`}selectView(t){if(!t.target.classList.contains("item"))return;[...this.viewerList.children].forEach((t=>t.classList.remove("selected")));const e=t.target;e.classList.add("selected");const r=e.innerText,o=new CustomEvent("selectedViewer",{detail:{selectedViewName:r}});this.dispatchEvent(o)}render(){return J`
      <div class="container">
        <button id="toggle" @click=${this.open}>Doc Thema</button>
        <div id="frame">
          <div id="viewerList" @click=${this.selectView}></div>
        </div>
      </div>
    `}};An.styles=d`
    .container {
      position: fixed;
      top: 20px;
      right: 20px;

      font-size: var(--small-font-size);
    }
    #toggle {
      padding: 10px;
      font-size: var(--small-font-size);

      border-radius: 10px;
      border: 1px solid var(--first-color);
    }
    #toggle:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }
    #toggle.active {
      color: var(--fifth-color);
      background-color: var(--third-color);
    }
    #frame {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    #viewerList {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      position: relative;
      flex-direction: column;
      transition: all 0.3s ease;
    }

    .item {
      margin: 2px;
      border: 1px solid var(--first-color);
      border-radius: 5px;

      text-align: center;

      cursor: pointer;
    }
    .item:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
    }
    .item.selected {
      color: var(--fifth-color);
      background-color: var(--first-color);
      &::after {
        content: ' ✔';
      }
    }
  `,xn([wt("#toggle")],An.prototype,"toggle",void 0),xn([wt("#viewerList")],An.prototype,"viewerList",void 0),xn([yt({attribute:!1})],An.prototype,"viewerNameList",void 0),xn([yt({attribute:!1})],An.prototype,"currentViewerName",void 0),xn([kt()],An.prototype,"viewerListHeight",void 0),An=xn([mt("article-viewerremocon")],An);var Cn=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let En=class extends pt{constructor(){super(...arguments),this.pathOfArticle="",this._requestArticle=new xt(this,{task:async([t])=>{const e=await fetch(t);return await e.text()},autoRun:!0,args:()=>[this.pathOfArticle]})}selectViewer(t){const e=t.detail.selectedViewName;console.log(vn.getCurrentViewer()),vn.selectViewer(e),this.requestUpdate()}render(){return J`${this._requestArticle.render({initial:()=>J`<loding-spinner />`,pending:()=>J`<loding-spinner />`,complete:t=>J`${vn.renderMarkdownToHTML(t)}`,error:t=>J`<p>Oops, something went wrong: ${t}</p>`})}
      <article-viewerremocon
        .viewerNameList=${vn.getViewerNameList()}
        .currentViewerName="${vn.getCurrentViewer().name}"
        @selectedViewer=${this.selectViewer}
      >
      </article-viewerremocon> `}};En.styles=d``,Cn([yt()],En.prototype,"pathOfArticle",void 0),En=Cn([mt("article-body")],En);var Dn=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let Sn=class extends pt{constructor(){super(...arguments),this.pathOfArticle="README.md"}renderArticleByPath(t){this.pathOfArticle=t}render(){return J`<article-body pathOfArticle=${this.pathOfArticle}></article-body>`}};Sn.styles=d`
    :host {
      display: block;
      position: relative;
      left: 0;
      margin: 20px;
    }
  `,Dn([kt()],Sn.prototype,"pathOfArticle",void 0),Sn=Dn([mt("article-container")],Sn);let $n=class extends pt{render(){return J` <div class="spinner-container">
      <div class="spinner"></div>
    </div>`}};$n.styles=d`
    :host {
      position: absolute;
      left: 50%;
      top: 50%;
    }
    .spinner-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .spinner {
      border: 8px solid rgba(0, 0, 0, 0.1);
      border-top: 8px solid var(--third-color);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,$n=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}([mt("loding-spinner")],$n)})();