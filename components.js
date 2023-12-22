/*! For license information please see components.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=r.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(o,t))}return t}toString(){return this.cssText}}const i=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new n(r,t,o)},a=(o,r)=>{if(e)o.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of r){const r=document.createElement("style"),n=t.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)}},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,y=globalThis,b=y.trustedTypes,u=b?b.emptyScript:"",g=y.reactiveElementPolyfillSupport,f=(t,e)=>t,k={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},w=(t,e)=>!l(t,e),v={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const i=r?.call(this);n.call(this,e),this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:k).toAttribute(e,o.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=o.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o,r=!1,n){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??w)(r?n:this[t],e))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[f("elementProperties")]=new Map,x[f("finalized")]=new Map,g?.({ReactiveElement:x}),(y.reactiveElementVersions??=[]).push("2.0.0");const $=globalThis,_=$.trustedTypes,A=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,C="?"+S,O=`<${C}>`,R=document,P=()=>R.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,M=t=>j(t)||"function"==typeof t?.[Symbol.iterator],T="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,H=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,B=/"/g,L=/^(?:script|style|textarea|title)$/i,q=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),V=q(1),G=(q(2),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),W=new WeakMap,Z=R.createTreeWalker(R,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,r=[];let n,i=2===e?"<svg>":"",a=z;for(let e=0;e<o;e++){const o=t[e];let s,l,d=-1,c=0;for(;c<o.length&&(a.lastIndex=c,l=a.exec(o),null!==l);)c=a.lastIndex,a===z?"!--"===l[1]?a=U:void 0!==l[1]?a=H:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=N):void 0!==l[3]&&(a=N):a===N?">"===l[0]?(a=n??z,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?N:'"'===l[3]?B:I):a===B||a===I?a=N:a===U||a===H?a=z:(a=N,n=void 0);const h=a===N&&t[e+1].startsWith("/>")?" ":"";i+=a===z?o+O:d>=0?(r.push(s),o.slice(0,d)+E+o.slice(d)+S+h):o+S+(-2===d?e:h)}return[J(t,i+(t[o]||"<?>")+(2===e?"</svg>":"")),r]};class X{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let n=0,i=0;const a=t.length-1,s=this.parts,[l,d]=K(t,e);if(this.el=X.createElement(l,o),Z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Z.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=d[i++],o=r.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?ot:"?"===a[1]?rt:"@"===a[1]?nt:et}),r.removeAttribute(t)}else t.startsWith(S)&&(s.push({type:6,index:n}),r.removeAttribute(t));if(L.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=_?_.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],P()),Z.nextNode(),s.push({type:2,index:++n});r.append(t[e],P())}}}else if(8===r.nodeType)if(r.data===C)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)s.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const o=R.createElement("template");return o.innerHTML=t,o}}function Q(t,e,o=t,r){if(e===G)return e;let n=void 0!==r?o._$Co?.[r]:o._$Cl;const i=D(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),void 0===i?n=void 0:(n=new i(t),n._$AT(t,o,r)),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,r)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??R).importNode(e,!0);Z.currentNode=r;let n=Z.nextNode(),i=0,a=0,s=o[0];for(;void 0!==s;){if(i===s.index){let e;2===s.type?e=new tt(n,n.nextSibling,this,t):1===s.type?e=new s.ctor(n,s.name,s.strings,this,t):6===s.type&&(e=new it(n,this,t)),this._$AV.push(e),s=o[++a]}i!==s?.index&&(n=Z.nextNode(),i++)}return Z.currentNode=R,r}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),D(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):M(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=X.createElement(J(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new Y(r,this),o=t.u(this.options);t.p(e),this.$(o),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}T(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const n of t)r===e.length?e.push(o=new tt(this.k(P()),this.k(P()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=F}_$AI(t,e=this,o,r){const n=this.strings;let i=!1;if(void 0===n)t=Q(this,t,e,0),i=!D(t)||t!==this._$AH&&t!==G,i&&(this._$AH=t);else{const r=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=Q(this,r[o+a],e,a),s===G&&(s=this._$AH[a]),i||=!D(s)||s!==this._$AH[a],s===F?t=F:t!==F&&(t+=(s??"")+n[a+1]),this._$AH[a]=s}i&&!r&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class rt extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class nt extends et{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??F)===G)return;const o=this._$AH,r=t===F&&o!==F||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==F&&(o===F||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at={S:E,A:S,P:C,C:1,M:K,L:Y,R:M,V:Q,D:tt,I:et,H:rt,N:nt,U:ot,B:it},st=$.litHtmlPolyfillSupport;st?.(X,tt),($.litHtmlVersions??=[]).push("3.0.0");class lt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const r=o?.renderBefore??e;let n=r._$litPart$;if(void 0===n){const t=o?.renderBefore??null;r._$litPart$=n=new tt(e.insertBefore(P(),t),t,void 0,o??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const dt=globalThis.litElementPolyfillSupport;dt?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.0.0");const ct=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ht={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:w},pt=(t=ht,e,o)=>{const{kind:r,metadata:n}=o;let i=globalThis.litPropertyMetadata.get(n);if(void 0===i&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(o.name,t),"accessor"===r){const{name:r}=o;return{set(o){const n=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,n,t)},init(e){return void 0!==e&&this.C(r,void 0,t),e}}}if("setter"===r){const{name:r}=o;return function(o){const n=this[r];e.call(this,o),this.requestUpdate(r,n,t)}}throw Error("Unsupported decorator location: "+r)};function mt(t){return(e,o)=>"object"==typeof o?pt(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function yt(t){return mt({...t,state:!0,attribute:!1})}const bt=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o),ut=Symbol();class gt{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,e)=>{this.i=t,this.o=e})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,o){this.u=0,this.status=0,(this.p=t).addController(this);const r="object"==typeof e?e:{task:e,args:o};this._=r.task,this.v=r.args,this.j=r.argsEqual??ft,this.m=r.onComplete,this.g=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.l=r.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,o;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const r=++this.u;this.T=new AbortController;let n=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){n=!0,o=t}if(this.u===r){if(e===ut)this.status=0;else{if(!1===n){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(o)}catch{}this.status=3,this.o?.(o)}this.l=e,this.h=o}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const ft=(t,e)=>t===e||t.length===e.length&&t.every(((t,o)=>!w(t,e[o])));var kt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let wt=class extends lt{constructor(){super(...arguments),this.icon="help-outline",this.key=""}render(){return V` <ion-icon name="${this.icon}"></ion-icon> `}};wt.styles=i`
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
  `,kt([mt()],wt.prototype,"icon",void 0),kt([mt()],wt.prototype,"key",void 0),wt=kt([ct("button-icon")],wt);const{D:vt}=at;class xt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const $t=(t,e)=>{const o=t._$AN;if(void 0===o)return!1;for(const t of o)t._$AO?.(e,!1),$t(t,e);return!0},_t=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===o?.size)},At=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Ct(e)}};function Et(t){void 0!==this._$AN?(_t(this),this._$AM=t,At(this)):this._$AM=t}function St(t,e=!1,o=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(r))for(let t=o;t<r.length;t++)$t(r[t],!1),_t(r[t]);else null!=r&&($t(r,!1),_t(r));else $t(this,t)}const Ct=t=>{2==t.type&&(t._$AP??=St,t._$AQ??=Et)};class Ot extends xt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),At(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&($t(this,t),_t(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const Rt=()=>new Pt;class Pt{}const Dt=new WeakMap,jt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ot{render(t){return F}update(t,[e]){const o=e!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),F}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let o=Dt.get(e);void 0===o&&(o=new WeakMap,Dt.set(e,o)),void 0!==o.get(this.G)&&this.G.call(this.ct,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?Dt.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});let Mt=class extends lt{constructor(){super(),this.inputRef=Rt()}activeEnter(t){"Enter"===t.key&&this.search()}activeButton(){this.search()}search(){const t=this.inputRef.value,e=t.value;t.value="",console.log(e)}render(){return V`
      <input
        type="text"
        id="searchInput"
        placeholder="검색하기"
        @keyup=${this.activeEnter}
        ${jt(this.inputRef)}
        autocomplete="off"
      />
      <button-icon id="searchButton" @click=${this.activeButton}></button-icon>
    `}};Mt.styles=i`
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
  `,Mt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([ct("input-search")],Mt);let Tt=class extends lt{test(t){t.currentTarget!==t.target&&console.log(t.target.getAttribute("key"))}render(){return V`
      <div id="iconContainer" @click=${this.test}>
        <Button-Icon class="iconItem" icon="caret-back-outline" key="backward"></Button-Icon>
        <Button-Icon class="iconItem" icon="home-outline" key="home"></Button-Icon>
        <Button-Icon class="iconItem" icon="caret-forward-outline" key="forward"></Button-Icon>
      </div>
      <div id="inputContainer">
        <Input-Search></Input-Search>
      </div>
    `}};Tt.styles=i`
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
  `,Tt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([ct("menubar-header")],Tt);var zt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Ut=class extends lt{render(){return V` <div id="directoryContainer">${this.docsDomElement}</div> `}};Ut.styles=i`
    :host {
      height: 100%;

      display: flex;
      flex-direction: column;
    }
    #directoryContainer {
      display: flex;
      flex-direction: column;
    }
  `,zt([mt({attribute:!1})],Ut.prototype,"docsDomElement",void 0),zt([(t,e,o)=>{const r=t=>t.renderRoot?.querySelector("#directoryContainer")??null;return bt(t,e,{get(){return r(this)}})}],Ut.prototype,"directoryContainer",void 0),Ut=zt([ct("menubar-body")],Ut);class Ht{constructor({name:t,type:e}){this.parent=null,this.name=t,this.type=e}registParent(t){this.parent=t}}var Nt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let It=class extends lt{constructor(){super(...arguments),this.titleRef=Rt(),this.innerDirectoryRef=Rt(),this.name="폴더",this.isOpend=!1}activeFolder(){this.isOpend=!this.isOpend,this.titleRef.value?.classList.toggle("active"),this.innerDirectoryRef.value?.classList.toggle("active")}render(){return V`
      <div id="title" @click=${this.activeFolder} ${jt(this.titleRef)}>
        <ion-icon name=${this.isOpend?"folder-open-outline":"folder-outline"}></ion-icon>
        <div>${this.name}</div>
      </div>
      <div id="innerDirectory" ${jt(this.innerDirectoryRef)}>
        <slot>...</slot>
      </div>
    `}};It.styles=i`
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
  `,Nt([mt()],It.prototype,"name",void 0),Nt([mt({attribute:!1})],It.prototype,"model",void 0),Nt([yt()],It.prototype,"isOpend",void 0),It=Nt([ct("menubar-directory")],It);class Bt extends Ht{constructor({name:t}){super({name:t,type:"directory"}),this.registDomElement()}registDomElement(){const t=new It;t.name=this.name,t.model=this,this.DirDomElement=t}registChildren(t){this.children=t,t.forEach((t=>t.registParent(this))),this.appendChildDocDomElement()}appendChildDocDomElement(){const t=this.children.map((t=>t.getDocsDomElment()));this.DirDomElement.append(...t)}getDocsDomElment(){return this.DirDomElement}}var Lt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let qt=class extends lt{render(){return V`<div id="article">
      <ion-icon name="document-outline"></ion-icon>
      <div>${this.name}</div>
    </div>`}};qt.styles=i`
    #article {
      display: grid;
      grid-template-columns: min-content max-content;
      column-gap: 0.7rem;
    }
    #article:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }
  `,Lt([mt()],qt.prototype,"name",void 0),Lt([mt({attribute:!1})],qt.prototype,"model",void 0),qt=Lt([ct("menubar-article")],qt);class Vt extends Ht{constructor({name:t}){super({name:t,type:"article"}),this.registDomElement()}registDomElement(){const t=new qt;t.name=this.name,t.model=this,this.articleDomElement=t}getDocsDomElment(){return this.articleDomElement}getCurrentPath(){let t=this.name,e=this.parent;for(;e;)t=e.name+"/"+t,e=e.parent;return t}}class Gt{constructor(t){this.rootDirectory=this.convertToDocsItem(t)}convertToDocsItem(t){if("directory"===t.type){const e=new Bt({name:t.name}),o=t.children.map(this.convertToDocsItem.bind(this));return e.registChildren(o),e}return new Vt({name:t.name})}getRootDirElment(){return this.rootDirectory.getDocsDomElment()}addEventListenerToRootDirectory(t,e){this.getRootDirElment().addEventListener(t,e)}}var Ft=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Wt=class extends lt{constructor(){super(...arguments),this._getDataModel=new gt(this,{task:async()=>{const t=await fetch("docs-metadata.json"),e=await t.json();return this.docsModelController=new Gt(e),this.InitDocsModel(),this.docsModelController.getRootDirElment()},autoRun:!0,args:()=>[]})}InitDocsModel(){this.docsModelController.addEventListenerToRootDirectory("click",(t=>{const e=t.target.model;if("article"===e.type){const t=e.getCurrentPath(),o=new CustomEvent("requestContent",{detail:{path:t}});this.dispatchEvent(o)}}))}render(){return V`
      ${this._getDataModel.render({initial:()=>V`<loding-spinner />`,pending:()=>V`<loding-spinner />`,complete:t=>V`<menubar-body .docsDomElement=${t}></menubar-body>`,error:t=>V`<p>Oops, something went wrong: ${t}</p>`})}
    `}};Wt.styles=i`
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
  `,Ft([yt()],Wt.prototype,"docsModelController",void 0),Wt=Ft([ct("menubar-container")],Wt);const Zt=i`
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
`;var Jt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Kt=class extends lt{constructor(){super(...arguments),this.markdownText="",this._requestTransformToHTML=new gt(this,{task:async([t])=>{const e=await fetch("https://api.github.com/markdown",{method:"POST",headers:{Accept:"application/vnd.github+json",Authorization:"Bearer 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"},body:JSON.stringify({text:t})});return await e.text()},args:()=>[this.markdownText]})}render(){return V`
      ${this._requestTransformToHTML.render({initial:()=>V`<loding-spinner />`,pending:()=>V`<loding-spinner />`,complete:t=>{const e=document.createElement("div");return e.classList.add("markdown-body"),e.insertAdjacentHTML("afterbegin",t),V`${e}`},error:t=>V`<p>Oops, something went wrong: ${t}</p>`})}
    `}};Kt.styles=Zt,Jt([mt({attribute:!1})],Kt.prototype,"markdownText",void 0),Kt=Jt([ct("article-githubviewer")],Kt);var Xt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Qt=class extends lt{constructor(){super(...arguments),this.pathOfArticle="",this._requestArticle=new gt(this,{task:async([t])=>{const e=await fetch(t);return await e.text()},autoRun:!0,args:()=>[this.pathOfArticle]})}render(){return V`${this._requestArticle.render({initial:()=>V`<loding-spinner />`,pending:()=>V`<loding-spinner />`,complete:t=>V`<article-GithubViewer .markdownText=${t}></article-GithubViewer> `,error:t=>V`<p>Oops, something went wrong: ${t}</p>`})}`}};Qt.styles=i``,Xt([mt()],Qt.prototype,"pathOfArticle",void 0),Qt=Xt([ct("article-body")],Qt);var Yt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let te=class extends lt{constructor(){super(...arguments),this.pathOfArticle="README.md"}renderArticleByPath(t){this.pathOfArticle=t}render(){return V`<article-body pathOfArticle=${this.pathOfArticle}></article-body>`}};te.styles=i`
    :host {
      position: absolute;
      left: 0;
      margin: 20px;
    }
  `,Yt([yt()],te.prototype,"pathOfArticle",void 0),te=Yt([ct("article-container")],te);let ee=class extends lt{render(){return V` <div class="spinner-container">
      <div class="spinner"></div>
    </div>`}};ee.styles=i`
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
  `,ee=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([ct("loding-spinner")],ee)})();