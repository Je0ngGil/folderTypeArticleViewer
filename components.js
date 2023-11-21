/*! For license information please see components.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},n=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:a,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,$=f.trustedTypes,_=$?$.emptyScript:"",v=f.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&a(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??m)(s?r:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[g("elementProperties")]=new Map,A[g("finalized")]=new Map,v?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.0.0");const E=globalThis,x=E.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,P="?"+C,O=`<${P}>`,R=document,U=()=>R.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T=t=>N(t)||"function"==typeof t?.[Symbol.iterator],j="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,I=/>/g,D=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,z=/"/g,L=/^(?:script|style|textarea|title)$/i,G=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),W=G(1),V=(G(2),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),q=new WeakMap,J=R.createTreeWalker(R,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=M;for(let e=0;e<i;e++){const i=t[e];let c,l,a=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===M?"!--"===l[1]?n=H:void 0!==l[1]?n=I:void 0!==l[2]?(L.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=r??M,a=-1):void 0===l[1]?a=-2:(a=n.lastIndex-l[2].length,c=l[1],n=void 0===l[3]?D:'"'===l[3]?z:B):n===z||n===B?n=D:n===H||n===I?n=M:(n=D,r=void 0);const d=n===D&&t[e+1].startsWith("/>")?" ":"";o+=n===M?i+O:a>=0?(s.push(c),i.slice(0,a)+w+i.slice(a)+C+d):i+C+(-2===a?e:d)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,c=this.parts,[l,a]=Z(t,e);if(this.el=Q.createElement(l,i),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&c.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(w)){const e=a[o++],i=s.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);c.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?it:"?"===n[1]?st:"@"===n[1]?rt:et}),s.removeAttribute(t)}else t.startsWith(C)&&(c.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),J.nextNode(),c.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===P)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)c.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===V)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=k(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),o=0,n=0,c=i[0];for(;void 0!==c;){if(o===c.index){let e;2===c.type?e=new tt(r,r.nextSibling,this,t):1===c.type?e=new c.ctor(r,c.name,c.strings,this,t):6===c.type&&(e=new ot(r,this,t)),this._$AV.push(e),c=i[++n]}o!==c?.index&&(r=J.nextNode(),o++)}return J.currentNode=R,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),k(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):T(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Q(t)),e}T(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new tt(this.k(U()),this.k(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const s=t;let n,c;for(t=r[0],n=0;n<r.length-1;n++)c=X(this,s[i+n],e,n),c===V&&(c=this._$AH[n]),o||=!k(c)||c!==this._$AH[n],c===F?t=F:t!==F&&(t+=(c??"")+r[n+1]),this._$AH[n]=c}o&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class rt extends et{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??F)===V)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt={S:w,A:C,P,C:1,M:Z,L:Y,R:T,V:X,D:tt,I:et,H:st,N:rt,U:it,B:ot},ct=E.litHtmlPolyfillSupport;ct?.(Q,tt),(E.litHtmlVersions??=[]).push("3.0.0");class lt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new tt(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.0.0");const ht=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m},pt=(t=dt,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function ut(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var ft=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let $t=class extends lt{constructor(){super(...arguments),this.icon="help-outline",this.key=""}render(){return W` <ion-icon name="${this.icon}"></ion-icon> `}};$t.styles=o`
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
  `,ft([ut()],$t.prototype,"icon",void 0),ft([ut()],$t.prototype,"key",void 0),$t=ft([ht("button-icon")],$t);const{D:_t}=nt;class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const gt=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),gt(t,e);return!0},yt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},mt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Et(e)}};function bt(t){void 0!==this._$AN?(yt(this),this._$AM=t,mt(this)):this._$AM=t}function At(t,e=!1,i=0){const s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)gt(s[t],!1),yt(s[t]);else null!=s&&(gt(s,!1),yt(s));else gt(this,t)}const Et=t=>{2==t.type&&(t._$AP??=At,t._$AQ??=bt)};class xt extends vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),mt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(gt(this,t),yt(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const St=()=>new wt;class wt{}const Ct=new WeakMap,Pt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends xt{render(t){return F}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),F}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let i=Ct.get(e);void 0===i&&(i=new WeakMap,Ct.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ct,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?Ct.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});let Ot=class extends lt{constructor(){super(),this.inputRef=St()}activeEnter(t){"Enter"===t.key&&this.search()}activeButton(){this.search()}search(){const t=this.inputRef.value,e=t.value;t.value="",console.log(e)}render(){return W`
      <input
        type="text"
        id="searchInput"
        placeholder="검색하기"
        @keyup=${this.activeEnter}
        ${Pt(this.inputRef)}
        autocomplete="off"
      />
      <button-icon id="searchButton" @click=${this.activeButton}></button-icon>
    `}};Ot.styles=o`
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
  `,Ot=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([ht("input-search")],Ot);let Rt=class extends lt{test(t){t.currentTarget!==t.target&&console.log(t.target.getAttribute("key"))}render(){return W`
      <div id="iconContainer" @click=${this.test}>
        <Button-Icon class="iconItem" icon="caret-back-outline" key="backward"></Button-Icon>
        <Button-Icon class="iconItem" icon="home-outline" key="home"></Button-Icon>
        <Button-Icon class="iconItem" icon="caret-forward-outline" key="forward"></Button-Icon>
      </div>
      <div id="inputContainer">
        <Input-Search></Input-Search>
      </div>
    `}};Rt.styles=o`
    :host {
      border: 2px dashed #f0ea3f;
    }

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
  `,Rt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([ht("menubar-header")],Rt);let Ut=class extends lt{render(){return W`<ion-icon name="folder-outline"></ion-icon>`}};Ut.styles=o`
    :host {
      border: 1px solid red;
    }
  `,Ut=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([ht("button-folder")],Ut);let kt=class extends lt{constructor(){super()}render(){return W`나는 컨텐츠`}};kt.styles=o`
    :host {
      border: 1px solid blue;
    }
  `,kt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([ht("button-content")],kt);var Nt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Tt=class extends lt{constructor(){super(...arguments),this.titleRef=St(),this.innerFolerRef=St(),this.folderName="폴더",this.isOpend=!1}activeFolder(){this.isOpend=!this.isOpend,this.titleRef.value?.classList.toggle("active"),this.innerFolerRef.value?.classList.toggle("active")}render(){return W`
      <div id="title" @click=${this.activeFolder} ${Pt(this.titleRef)}>
        <ion-icon name=${this.isOpend?"folder-open-outline":"folder-outline"}></ion-icon>
        <div>${this.folderName}</div>
      </div>
      <div id="innerFolder" ${Pt(this.innerFolerRef)}>
        <slot>...</slot>
      </div>
    `}};Tt.styles=o`
    #title {
      border: 1px dashed black;

      display: grid;
      grid-template-columns: min-content max-content;
      column-gap: 0.7rem;

      font-size: var(--normal-font-size);
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

    #innerFolder {
      visibility: hidden;

      opacity: 0;

      max-height: 0;
      transition: max-height 0.2s ease;
    }
    #innerFolder.active {
      visibility: visible;
      opacity: 1;

      max-height: 1000px;
      transition: max-height 1.2s ease, opacity 0.5s ease;

      margin-left: 5%;
      padding-left: 3%;
      border-left: 2px solid var(--third-color);
    }
  `,Nt([ut()],Tt.prototype,"folderName",void 0),Nt([ut({state:!0,attribute:!1})],Tt.prototype,"isOpend",void 0),Tt=Nt([ht("menubar-folder")],Tt);let jt=class extends lt{render(){return W`<div id="content">
      <ion-icon name="document-outline"></ion-icon>
      <div>컨텐츠 이름</div>
    </div>`}};jt.styles=o`
    #content {
      border: 1px dashed black;

      display: grid;
      grid-template-columns: min-content max-content;
      column-gap: 0.7rem;
    }
    #content:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }
  `,jt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([ht("menubar-content")],jt);let Mt=class extends lt{render(){return W`
      <div id="folderContainer">
        <menubar-folder>
          <menubar-folder><menubar-folder></menubar-folder><menubar-content></menubar-content> </menubar-folder>
          <menubar-folder><menubar-content></menubar-content></menubar-folder>
          <menubar-folder></menubar-folder>
        </menubar-folder>
        <menubar-folder>
          <menubar-content></menubar-content>
        </menubar-folder>
      </div>
    `}};Mt.styles=o`
    :host {
      border: 2px dashed #f0863f;

      height: 100%;

      display: flex;
      flex-direction: column;
    }
    #folderContainer {
      display: flex;
      flex-direction: column;
    }
  `,Mt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([ht("menubar-body")],Mt);var Ht=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let It=class extends lt{constructor(){super(...arguments),this.button="BTN"}render(){return W`
      <menubar-header></menubar-header>
      <menubar-body></menubar-body>
    `}};It.styles=o`
    :host {
      position: fixed;
      left: 0;
      height: 100vh;
      bottom: 0;
      width: var(--sidebar-width);

      display: flex;
      flex-direction: column;

      border: 2px solid red;
    }
  `,Ht([ut()],It.prototype,"button",void 0),It=Ht([ht("menubar-main")],It)})();