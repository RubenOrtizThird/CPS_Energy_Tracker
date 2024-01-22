"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[2102],{75948:(x,D,o)=>{o.d(D,{H:()=>n,c:()=>s,d:()=>F,f:()=>g,r:()=>b,s:()=>E});var v=o(12115),C=o(55369);const u="hidden-form-input";function l(e){return"checked"in e}const d=new WeakMap,f=new WeakSet;function E(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function b(e){e.formEl?.reset()}function s(e){const{el:t,value:r}=e,a=g(e);if(!a||function _(e,t){if((0,v.c)(t.parentElement,"[form]"))return!0;const a="calciteInternalFormComponentRegister";let c=!1;return e.addEventListener(a,h=>{c=h.composedPath().some(i=>f.has(i)),h.stopPropagation()},{once:!0}),t.dispatchEvent(new CustomEvent(a,{bubbles:!0,composed:!0})),c}(a,t))return;e.formEl=a,e.defaultValue=r,l(e)&&(e.defaultChecked=e.checked);const c=(e.onFormReset||I).bind(e);a.addEventListener("reset",c),d.set(e.el,c),f.add(t)}function g(e){const{el:t,form:r}=e;return r?(0,v.q)(t,{id:r}):(0,v.c)(t,"form")}function I(){l(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function F(e){const{el:t,formEl:r}=e;if(!r)return;const a=d.get(t);r.removeEventListener("reset",a),d.delete(t),e.formEl=null,f.delete(t)}const k=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},P=e=>e.removeEventListener("change",k);function A(e,t,r){const{defaultValue:a,disabled:c,form:h,name:i,required:M}=e;t.defaultValue=a,t.disabled=c,t.name=i,t.required=M,t.tabIndex=-1,h?t.setAttribute("form",h):t.removeAttribute("form"),l(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?r||"on":""):t.value=r||"",e.syncHiddenFormInput?.(t)}const n=({component:e})=>(function w(e){const{el:t,formEl:r,name:a,value:c}=e,{ownerDocument:h}=t,i=t.querySelectorAll(`input[slot="${u}"]`);if(!r||!a)return void i.forEach(m=>{P(m),m.remove()});const M=Array.isArray(c)?c:[c],y=[],p=new Set;let W;i.forEach(m=>{const L=M.find(R=>R==m.value);null!=L?(p.add(L),A(e,m,L)):y.push(m)}),M.forEach(m=>{if(p.has(m))return;let L=y.pop();L||(L=h.createElement("input"),L.slot=u),W||(W=h.createDocumentFragment()),W.append(L),L.addEventListener("change",k),A(e,L,m)}),W&&t.append(W),y.forEach(m=>{P(m),m.remove()})}(e),(0,C.h)("slot",{name:u}))},44025:(x,D,o)=>{o.d(D,{c:()=>w,d:()=>A,u:()=>g});var v=o(55369);const l=/firefox/i.test(function u(){if(!v.Z5.isBrowser)return"";const n=function C(){return navigator.userAgentData}();return n?.brands?n.brands.map(({brand:e,version:t})=>`${e}/${t}`).join(" "):navigator.userAgent}()),d=l?new WeakMap:null;function f(){const{disabled:n}=this;n||HTMLElement.prototype.click.call(this)}function _(n){const e=n.target;if(l&&!d.get(e))return;const{disabled:t}=e;t&&n.preventDefault()}const E=["mousedown","mouseup","click"];function b(n){if(l&&!d.get(n.target))return;const{disabled:e}=n.target;e&&(n.stopImmediatePropagation(),n.preventDefault())}const s={capture:!0};function g(n,e=!1){if(n.disabled)return n.el.setAttribute("tabindex","-1"),n.el.setAttribute("aria-disabled","true"),n.el.contains(document.activeElement)&&document.activeElement.blur(),void I(n);k(n),"function"==typeof e?n.el.setAttribute("tabindex",e.call(n)?"0":"-1"):!0===e?n.el.setAttribute("tabindex","0"):!1===e&&n.el.removeAttribute("tabindex"),n.el.removeAttribute("aria-disabled")}function I(n){n.el.click=f,function F(n){n&&(n.addEventListener("pointerdown",_,s),E.forEach(e=>n.addEventListener(e,b,s)))}(l?O(n):n.el)}function O(n){return d.get(n.el)}function k(n){delete n.el.click,function P(n){n&&(n.removeEventListener("pointerdown",_,s),E.forEach(e=>n.removeEventListener(e,b,s)))}(l?O(n):n.el)}function w(n){n.disabled&&l&&(d.set(n.el,n.el.parentElement||n.el),I(n))}function A(n){l&&(d.delete(n.el),k(n))}},89489:(x,D,o)=>{o.d(D,{a:()=>l,c:()=>F,d:()=>O,g:()=>P,l:()=>u});var v=o(12115);const C="calciteInternalLabelClick",u="calciteInternalLabelConnected",l="calciteInternalLabelDisconnected",d="calcite-label",f=new WeakMap,_=new WeakMap,E=new WeakMap,b=new WeakMap,s=new WeakSet,g=e=>{const{id:t}=e,r=t&&(0,v.q)(e,{selector:`${d}[for="${t}"]`});if(r)return r;const a=(0,v.c)(e,d);return!a||function I(e,t){let r;const a="custom-element-ancestor-check",c=i=>{i.stopImmediatePropagation();const M=i.composedPath();r=M.slice(M.indexOf(t),M.indexOf(e))};return e.addEventListener(a,c,{once:!0}),t.dispatchEvent(new CustomEvent(a,{composed:!0,bubbles:!0})),e.removeEventListener(a,c),r.filter(i=>i!==t&&i!==e).filter(i=>i.tagName?.includes("-")).length>0}(a,e)?null:a};function F(e){const t=g(e.el);if(_.has(t)&&t===e.labelEl||!t&&s.has(e))return;const r=n.bind(e);if(t){e.labelEl=t;const a=f.get(t)||[];a.push(e),f.set(t,a.sort(k)),_.has(e.labelEl)||(_.set(e.labelEl,w),e.labelEl.addEventListener(C,w)),s.delete(e),document.removeEventListener(u,E.get(e)),b.set(e,r),document.addEventListener(l,r)}else s.has(e)||(r(),document.removeEventListener(l,b.get(e)))}function O(e){if(s.delete(e),document.removeEventListener(u,E.get(e)),document.removeEventListener(l,b.get(e)),E.delete(e),b.delete(e),!e.labelEl)return;const t=f.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(C,_.get(e.labelEl)),_.delete(e.labelEl)),f.set(e.labelEl,t.filter(r=>r!==e).sort(k)),e.labelEl=null}function k(e,t){return(0,v.y)(e.el,t.el)?-1:1}function P(e){return e.label||e.labelEl?.textContent?.trim()||""}function w(e){const t=e.detail.sourceEvent.target,r=f.get(this),a=r.find(i=>i.el===t);if(r.includes(a))return;const h=r[0];h.disabled||h.onLabelClick(e)}function A(){s.has(this)&&F(this)}function n(){s.add(this);const e=E.get(this)||A.bind(this);E.set(this,e),document.addEventListener(u,e)}},31858:(x,D,o)=>{o.d(D,{a:()=>d,c:()=>E,s:()=>f});var v=o(15861),C=o(55369);const u=new WeakMap,l=new WeakMap;function d(s){l.set(s,new Promise(g=>u.set(s,g)))}function f(s){u.get(s)()}function E(s){return b.apply(this,arguments)}function b(){return(b=(0,v.Z)(function*(s){if(yield function _(s){return l.get(s)}(s),C.Z5.isBrowser)return(0,C.xE)(s),new Promise(g=>requestAnimationFrame(()=>g()))})).apply(this,arguments)}}}]);