/*! For license information please see components.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},n=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",y=f.reactiveElementPolyfillSupport,$=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!a(t,e),A={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??_)(s?r:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[$("elementProperties")]=new Map,b[$("finalized")]=new Map,y?.({ReactiveElement:b}),(f.reactiveElementVersions??=[]).push("2.0.0");const E=globalThis,w=E.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,P="?"+S,R=`<${P}>`,D=document,O=()=>D.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T=t=>U(t)||"function"==typeof t?.[Symbol.iterator],j="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,H=/>/g,I=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,B=/"/g,L=/^(?:script|style|textarea|title)$/i,G=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=G(1),V=(G(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),F=new WeakMap,J=D.createTreeWalker(D,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=M;for(let e=0;e<i;e++){const i=t[e];let c,a,h=-1,l=0;for(;l<i.length&&(n.lastIndex=l,a=n.exec(i),null!==a);)l=n.lastIndex,n===M?"!--"===a[1]?n=N:void 0!==a[1]?n=H:void 0!==a[2]?(L.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=I):void 0!==a[3]&&(n=I):n===I?">"===a[0]?(n=r??M,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,c=a[1],n=void 0===a[3]?I:'"'===a[3]?B:z):n===B||n===z?n=I:n===N||n===H?n=M:(n=I,r=void 0);const d=n===I&&t[e+1].startsWith("/>")?" ":"";o+=n===M?i+R:h>=0?(s.push(c),i.slice(0,h)+C+i.slice(h)+S+d):i+S+(-2===h?e:d)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,c=this.parts,[a,h]=Z(t,e);if(this.el=Q.createElement(a,i),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&c.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=h[o++],i=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);c.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?it:"?"===n[1]?st:"@"===n[1]?rt:et}),s.removeAttribute(t)}else t.startsWith(S)&&(c.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),J.nextNode(),c.push({type:2,index:++r});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===P)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)c.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=D.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===V)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=k(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??D).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),o=0,n=0,c=i[0];for(;void 0!==c;){if(o===c.index){let e;2===c.type?e=new tt(r,r.nextSibling,this,t):1===c.type?e=new c.ctor(r,c.name,c.strings,this,t):6===c.type&&(e=new ot(r,this,t)),this._$AV.push(e),c=i[++n]}o!==c?.index&&(r=J.nextNode(),o++)}return J.currentNode=D,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),k(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):T(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(D.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Q(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new tt(this.k(O()),this.k(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const s=t;let n,c;for(t=r[0],n=0;n<r.length-1;n++)c=X(this,s[i+n],e,n),c===V&&(c=this._$AH[n]),o||=!k(c)||c!==this._$AH[n],c===W?t=W:t!==W&&(t+=(c??"")+r[n+1]),this._$AH[n]=c}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class rt extends et{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??W)===V)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt={S:C,A:S,P,C:1,M:Z,L:Y,R:T,V:X,D:tt,I:et,H:st,N:rt,U:it,B:ot},ct=E.litHtmlPolyfillSupport;ct?.(Q,tt),(E.litHtmlVersions??=[]).push("3.0.0");class at extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new tt(e.insertBefore(O(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.0");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},dt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_},pt=(t=dt,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function ut(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ft(t){return ut({...t,state:!0,attribute:!1})}const mt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i),gt=Symbol();class yt{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,e)=>{this.i=t,this.o=e})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,i){this.u=0,this.status=0,(this.p=t).addController(this);const s="object"==typeof e?e:{task:e,args:i};this._=s.task,this.v=s.args,this.j=s.argsEqual??$t,this.m=s.onComplete,this.g=s.onError,this.autoRun=s.autoRun??!0,"initialValue"in s&&(this.l=s.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,i;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const s=++this.u;this.T=new AbortController;let r=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){r=!0,i=t}if(this.u===s){if(e===gt)this.status=0;else{if(!1===r){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(i)}catch{}this.status=3,this.o?.(i)}this.l=e,this.h=i}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const $t=(t,e)=>t===e||t.length===e.length&&t.every(((t,i)=>!_(t,e[i])));var vt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let _t=class extends at{constructor(){super(...arguments),this.icon="help-outline",this.key=""}render(){return q` <ion-icon name="${this.icon}"></ion-icon> `}};_t.styles=o`
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
  `,vt([ut()],_t.prototype,"icon",void 0),vt([ut()],_t.prototype,"key",void 0),_t=vt([lt("button-icon")],_t);const{D:At}=nt;class bt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Et=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),Et(t,e);return!0},wt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},xt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Pt(e)}};function Ct(t){void 0!==this._$AN?(wt(this),this._$AM=t,xt(this)):this._$AM=t}function St(t,e=!1,i=0){const s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)Et(s[t],!1),wt(s[t]);else null!=s&&(Et(s,!1),wt(s));else Et(this,t)}const Pt=t=>{2==t.type&&(t._$AP??=St,t._$AQ??=Ct)};class Rt extends bt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),xt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Et(this,t),wt(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const Dt=()=>new Ot;class Ot{}const kt=new WeakMap,Ut=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Rt{render(t){return W}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),W}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let i=kt.get(e);void 0===i&&(i=new WeakMap,kt.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ct,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?kt.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});let Tt=class extends at{constructor(){super(),this.inputRef=Dt()}activeEnter(t){"Enter"===t.key&&this.search()}activeButton(){this.search()}search(){const t=this.inputRef.value,e=t.value;t.value="",console.log(e)}render(){return q`
      <input
        type="text"
        id="searchInput"
        placeholder="검색하기"
        @keyup=${this.activeEnter}
        ${Ut(this.inputRef)}
        autocomplete="off"
      />
      <button-icon id="searchButton" @click=${this.activeButton}></button-icon>
    `}};Tt.styles=o`
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
  `,Tt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([lt("input-search")],Tt);let jt=class extends at{test(t){t.currentTarget!==t.target&&console.log(t.target.getAttribute("key"))}render(){return q`
      <div id="iconContainer" @click=${this.test}>
        <Button-Icon class="iconItem" icon="caret-back-outline" key="backward"></Button-Icon>
        <Button-Icon class="iconItem" icon="home-outline" key="home"></Button-Icon>
        <Button-Icon class="iconItem" icon="caret-forward-outline" key="forward"></Button-Icon>
      </div>
      <div id="inputContainer">
        <Input-Search></Input-Search>
      </div>
    `}};jt.styles=o`
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
  `,jt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([lt("menubar-header")],jt);var Mt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Nt=class extends at{render(){return q` <div id="directoryContainer">${this.docsDomElement}</div> `}};Nt.styles=o`
    :host {
      height: 100%;

      display: flex;
      flex-direction: column;
    }
    #directoryContainer {
      display: flex;
      flex-direction: column;
    }
  `,Mt([ut({attribute:!1})],Nt.prototype,"docsDomElement",void 0),Mt([(t,e,i)=>{const s=t=>t.renderRoot?.querySelector("#directoryContainer")??null;return mt(t,e,{get(){return s(this)}})}],Nt.prototype,"directoryContainer",void 0),Nt=Mt([lt("menubar-body")],Nt);class Ht{constructor({name:t,type:e}){this.parent=null,this.name=t,this.type=e}registParent(t){this.parent=t}}var It=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let zt=class extends at{constructor(){super(...arguments),this.titleRef=Dt(),this.innerDirectoryRef=Dt(),this.name="폴더",this.isOpend=!1}activeFolder(){this.isOpend=!this.isOpend,this.titleRef.value?.classList.toggle("active"),this.innerDirectoryRef.value?.classList.toggle("active")}render(){return q`
      <div id="title" @click=${this.activeFolder} ${Ut(this.titleRef)}>
        <ion-icon name=${this.isOpend?"folder-open-outline":"folder-outline"}></ion-icon>
        <div>${this.name}</div>
      </div>
      <div id="innerDirectory" ${Ut(this.innerDirectoryRef)}>
        <slot>...</slot>
      </div>
    `}};zt.styles=o`
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
  `,It([ut()],zt.prototype,"name",void 0),It([ut({attribute:!1})],zt.prototype,"model",void 0),It([ft()],zt.prototype,"isOpend",void 0),zt=It([lt("menubar-directory")],zt);class Bt extends Ht{constructor({name:t}){super({name:t,type:"directory"}),this.registDomElement()}registDomElement(){const t=new zt;t.name=this.name,t.model=this,this.DirDomElement=t}registChildren(t){this.children=t,t.forEach((t=>t.registParent(this))),this.appendChildDocDomElement()}appendChildDocDomElement(){const t=this.children.map((t=>t.getDocsDomElment()));this.DirDomElement.append(...t)}getDocsDomElment(){return this.DirDomElement}}var Lt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Gt=class extends at{render(){return q`<div id="article">
      <ion-icon name="document-outline"></ion-icon>
      <div>${this.name}</div>
    </div>`}};Gt.styles=o`
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
  `,Lt([ut()],Gt.prototype,"name",void 0),Lt([ut({attribute:!1})],Gt.prototype,"model",void 0),Gt=Lt([lt("menubar-article")],Gt);class qt extends Ht{constructor({name:t}){super({name:t,type:"article"}),this.registDomElement()}registDomElement(){const t=new Gt;t.name=this.name,t.model=this,this.articleDomElement=t}getDocsDomElment(){return this.articleDomElement}getCurrentPath(){let t=this.name,e=this.parent;for(;e;)t=e.name+"/"+t,e=e.parent;return t}}class Vt{constructor(t){this.rootDirectory=this.convertToDocsItem(t)}convertToDocsItem(t){if("directory"===t.type){const e=new Bt({name:t.name}),i=t.children.map(this.convertToDocsItem.bind(this));return e.registChildren(i),e}return new qt({name:t.name})}getRootDirElment(){return this.rootDirectory.getDocsDomElment()}addEventListenerToRootDirectory(t,e){this.getRootDirElment().addEventListener(t,e)}}var Wt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Ft=class extends at{constructor(){super(...arguments),this._getDataModel=new yt(this,{task:async()=>{await new Promise((t=>setTimeout(t,500)));const t=await fetch("docs-metadata.json"),e=await t.json();return this.docsModelController=new Vt(e),this.InitDocsModel(),this.docsModelController.getRootDirElment()},autoRun:!0,args:()=>[]})}InitDocsModel(){this.docsModelController.addEventListenerToRootDirectory("click",(t=>{const e=t.target.model;if("article"===e.type){const t=e.getCurrentPath();console.log(t)}}))}render(){return q`
      ${this._getDataModel.render({initial:()=>q`<loding-spinner />`,pending:()=>q`<loding-spinner />`,complete:t=>q`<menubar-body .docsDomElement=${t}></menubar-body>`,error:t=>q`<p>Oops, something went wrong: ${t}</p>`})}
    `}};Ft.styles=o`
    :host {
      position: fixed;
      left: 0;
      height: 100vh;
      bottom: 0;
      width: var(--sidebar-width);

      display: flex;
      flex-direction: column;

      border: 1px solid black;
    }
  `,Wt([ft()],Ft.prototype,"docsModelController",void 0),Ft=Wt([lt("menubar-container")],Ft);let Jt=class extends at{render(){return q`<h1>아티클 메인</h1>`}};Jt.styles=o`
    :host {
      border: 1px solid red;
      width: 100%;
      height: 100%;
    }
  `,Jt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([lt("article-container")],Jt);let Kt=class extends at{render(){return q` <div class="spinner-container">
      <div class="spinner"></div>
    </div>`}};Kt.styles=o`
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
  `,Kt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([lt("loding-spinner")],Kt)})();