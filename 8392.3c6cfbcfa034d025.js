"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[8392],{28392:(ot,V,B)=>{B.r(V),B.d(V,{l:()=>vn});var z,Z,dn=B(90104),N={exports:{}};z=N,void 0!==(Z=function(){return{load:function S(W){const j=W.locateFile,f={};var t=void 0!==t?t:{};const A=(()=>{let n;return{resolve:e=>n(e),promise:new Promise(e=>n=e)}})();t.locateFile=j,t.onRuntimeInitialized=()=>{A.resolve(f)},f.Module=t,f.whenLoaded=()=>A.promise;var h,T={};for(h in t)t.hasOwnProperty(h)&&(T[h]=t[h]);var G,k,U,E,R,nn="object"==typeof window,I="function"==typeof importScripts,bn="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="";bn?(p=I?require("path").dirname(p)+"/":__dirname+"/",G=function(n,e){return E||(E=require("fs")),R||(R=require("path")),n=R.normalize(n),E.readFileSync(n,e?null:"utf8")},U=function(n){var e=G(n,!0);return e.buffer||(e=new Uint8Array(e)),function Pn(n,e){n||F("Assertion failed: "+e)}(e.buffer),e},k=function(n,e,r){E||(E=require("fs")),R||(R=require("path")),n=R.normalize(n),E.readFile(n,function(o,i){o?r(o):e(i.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),z.exports=t,process.on("uncaughtException",function(n){if(!(n instanceof $n))throw n}),process.on("unhandledRejection",F),t.inspect=function(){return"[Emscripten Module object]"}):(nn||I)&&(I?p=self.location.href:typeof document<"u"&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.lastIndexOf("/")+1):"",G=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.send(null),e.responseText},I&&(U=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),k=function(n,e,r){var o=new XMLHttpRequest;o.open("GET",n,!0),o.responseType="arraybuffer",o.onload=function(){200==o.status||0==o.status&&o.response?e(o.response):r()},o.onerror=r,o.send(null)});var An=t.print||console.log.bind(console),P=t.printErr||console.warn.bind(console);for(h in T)T.hasOwnProperty(h)&&(t[h]=T[h]);T=null;var M,X,tn=0;t.wasmBinary&&(M=t.wasmBinary),"object"!=typeof WebAssembly&&F("no native wasm support detected");var rn,H,x,m,en=!1,on=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function an(n,e,r){for(var o=e+r,i=e;n[i]&&!(i>=o);)++i;if(i-e>16&&n.subarray&&on)return on.decode(n.subarray(e,i));for(var a="";e<i;){var u=n[e++];if(128&u){var l=63&n[e++];if(192!=(224&u)){var d=63&n[e++];if((u=224==(240&u)?(15&u)<<12|l<<6|d:(7&u)<<18|l<<12|d<<6|63&n[e++])<65536)a+=String.fromCharCode(u);else{var O=u-65536;a+=String.fromCharCode(55296|O>>10,56320|1023&O)}}else a+=String.fromCharCode((31&u)<<6|l)}else a+=String.fromCharCode(u)}return a}function jn(n,e){return n%e>0&&(n+=e-n%e),n}function un(n){rn=n,t.HEAP8=new Int8Array(n),t.HEAP16=new Int16Array(n),t.HEAP32=x=new Int32Array(n),t.HEAPU8=H=new Uint8Array(n),t.HEAPU16=new Uint16Array(n),t.HEAPU32=new Uint32Array(n),t.HEAPF32=new Float32Array(n),t.HEAPF64=new Float64Array(n)}var sn=[],fn=[],cn=[],y=0,C=null;function F(n){throw t.onAbort&&t.onAbort(n),P(n+=""),en=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}t.preloadedImages={},t.preloadedAudios={};var s;function ln(n){return n.startsWith("data:application/octet-stream;base64,")}function pn(n){return n.startsWith("file://")}function mn(n){try{if(n==s&&M)return new Uint8Array(M);if(U)return U(n);throw"both async and sync fetching of the wasm failed"}catch(e){F(e)}}function Y(n){for(;n.length>0;){var e=n.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?m.get(r)():m.get(r)(e.arg):r(void 0===e.arg?null:e.arg)}else e(t)}}function Dn(n){try{return X.grow(n-rn.byteLength+65535>>>16),un(X.buffer),1}catch{}}ln(s="libtess.wasm")||(s=function _n(n){return t.locateFile?t.locateFile(n,p):p+n}(s));var q={mappings:{},buffers:[null,[],[]],printChar:function(n,e){var r=q.buffers[n];0===e||10===e?((1===n?An:P)(an(r,0)),r.length=0):r.push(e)},varargs:void 0,get:function(){return q.varargs+=4,x[q.varargs-4>>2]},getStr:function(n){return function Sn(n,e){return n?an(H,n,e):""}(n)},get64:function(n,e){return n}},Xn={h:function qn(){throw"longjmp"},l:function Ln(n,e,r){H.copyWithin(n,e,e+r)},g:function Bn(n){var e=H.length,r=2147483648;if((n>>>=0)>r)return!1;for(var o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,n+100663296),Dn(Math.min(r,jn(Math.max(n,i),65536))))return!0}return!1},f:function zn(n,e,r,o){for(var i=0,a=0;a<r;a++){for(var u=x[e+8*a>>2],l=x[e+(8*a+4)>>2],d=0;d<l;d++)q.printChar(n,H[u+d]);i+=l}return x[o>>2]=i,0},b:function Nn(){return tn},k:function Qn(n){var e=v();try{return m.get(n)()}catch(r){if(w(e),r!==r+0&&"longjmp"!==r)throw r;b(1,0)}},d:function Jn(n,e){var r=v();try{return m.get(n)(e)}catch(o){if(w(r),o!==o+0&&"longjmp"!==o)throw o;b(1,0)}},j:function Vn(n,e,r){var o=v();try{return m.get(n)(e,r)}catch(i){if(w(o),i!==i+0&&"longjmp"!==i)throw i;b(1,0)}},i:function Zn(n,e,r,o){var i=v();try{return m.get(n)(e,r,o)}catch(a){if(w(i),a!==a+0&&"longjmp"!==a)throw a;b(1,0)}},e:function Kn(n,e){var r=v();try{m.get(n)(e)}catch(o){if(w(r),o!==o+0&&"longjmp"!==o)throw o;b(1,0)}},c:function Yn(n,e,r){var o=v();try{m.get(n)(e,r)}catch(i){if(w(o),i!==i+0&&"longjmp"!==i)throw i;b(1,0)}},a:function Gn(n){!function(n){tn=n}(n)}};(function Un(){var n={a:Xn};function e(a,u){t.asm=a.exports,un((X=t.asm.m).buffer),m=t.asm.q,function xn(n){fn.unshift(n)}(t.asm.n),function On(n){if(y--,t.monitorRunDependencies&&t.monitorRunDependencies(y),0==y&&C){var e=C;C=null,e()}}()}function r(a){e(a.instance)}function o(a){return function kn(){if(!M&&(nn||I)){if("function"==typeof fetch&&!pn(s))return fetch(s,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+s+"'";return n.arrayBuffer()}).catch(function(){return mn(s)});if(k)return new Promise(function(n,e){k(s,function(r){n(new Uint8Array(r))},e)})}return Promise.resolve().then(function(){return mn(s)})}().then(function(u){return WebAssembly.instantiate(u,n)}).then(a,function(u){P("failed to asynchronously prepare wasm: "+u),F(u)})}if(function Fn(n){y++,t.monitorRunDependencies&&t.monitorRunDependencies(y)}(),t.instantiateWasm)try{return t.instantiateWasm(n,e)}catch(a){return P("Module.instantiateWasm callback failed with error: "+a),!1}(function i(){M||"function"!=typeof WebAssembly.instantiateStreaming||ln(s)||pn(s)||"function"!=typeof fetch?o(r):fetch(s,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,n).then(r,function(u){return P("wasm streaming compile failed: "+u),P("falling back to ArrayBuffer instantiation"),o(r)})})})()})(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.n).apply(null,arguments)},t._malloc=function(){return(t._malloc=t.asm.o).apply(null,arguments)},t._free=function(){return(t._free=t.asm.p).apply(null,arguments)},t._triangulate=function(){return(t._triangulate=t.asm.r).apply(null,arguments)};var L,v=t.stackSave=function(){return(v=t.stackSave=t.asm.s).apply(null,arguments)},w=t.stackRestore=function(){return(w=t.stackRestore=t.asm.t).apply(null,arguments)},b=t._setThrew=function(){return(b=t._setThrew=t.asm.u).apply(null,arguments)};function $n(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function K(n){function e(){L||(L=!0,t.calledRun=!0,en||(function In(){Y(fn)}(),t.onRuntimeInitialized&&t.onRuntimeInitialized(),function Mn(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)n=t.postRun.shift(),cn.unshift(n);var n;Y(cn)}()))}y>0||(function Tn(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)n=t.preRun.shift(),sn.unshift(n);var n;Y(sn)}(),y>0||(t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),e()},1)):e()))}if(C=function n(){L||K(),L||(C=n)},t.run=K,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();K();let J=null,g=null,_=null,D=null;const c=f.Module;let gn=0;return f.triangulate=(n,e,r)=>{J||(J=c._triangulate);let o=c.HEAPF32;const i=c.HEAP32.BYTES_PER_ELEMENT,u=o.BYTES_PER_ELEMENT;r>gn&&(gn=r,_&&(c._free(_),_=0),g&&(c._free(g),g=0)),_||(_=c._malloc(r*u)),D||(D=c._malloc(4e3*i));const l=2*r;g||(g=c._malloc(l*u)),o=c.HEAPF32,o.set(n,_/u),c.HEAP32.set(e,D/i);const d=l/2,O=J(_,D,Math.min(e.length,4e3),2,g,d);o=c.HEAPF32;const rt=o.slice(g/u,g/u+2*O),Q={};return Q.buffer=rt,Q.vertexCount=O,Q},f.whenLoaded()}}}())&&(z.exports=Z);var $=N.exports;const vn=function yn(S,W){for(var j=0;j<W.length;j++){const f=W[j];if("string"!=typeof f&&!Array.isArray(f))for(const t in f)if("default"!==t&&!(t in S)){const A=Object.getOwnPropertyDescriptor(f,t);A&&Object.defineProperty(S,t,A.get?A:{enumerable:!0,get:()=>f[t]})}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,dn.g)($)},[$])}}]);