"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[4313],{93530:(Rt,Q,u)=>{function y(){return[1,0,0,0,1,0,0,0,1]}function W(x,T,tt,H,P,R,Z,et,k){return[x,T,tt,H,P,R,Z,et,k]}function Y(x,T){return new Float64Array(x,T,9)}u.d(Q,{a:()=>y,c:()=>Y,f:()=>W}),Object.freeze(Object.defineProperty({__proto__:null,clone:function X(x){return[x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8]]},create:y,createView:Y,fromValues:W},Symbol.toStringTag,{value:"Module"}))},26540:(Rt,Q,u)=>{u.d(Q,{Q:()=>Y});var y=u(57678),X=u(43029),W=u(4758);class Y{constructor(e=9,s){this._compareMinX=tt,this._compareMinY=H,this._toBBox=o=>o,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),s&&("function"==typeof s?this._toBBox=s:this._initFormat(s)),this.clear()}destroy(){this.clear(),A.prune(),D.prune(),b.prune(),z.prune()}all(e){this._all(this._data,e)}search(e,s){let o=this._data;const p=this._toBBox;if(J(e,o))for(A.clear();o;){for(let d=0,m=o.children.length;d<m;d++){const g=o.children[d],_=o.leaf?p(g):g;J(e,_)&&(o.leaf?s(g):k(e,_)?this._all(g,s):A.push(g))}o=A.pop()}}collides(e){let s=this._data;const o=this._toBBox;if(!J(e,s))return!1;for(A.clear();s;){for(let p=0,d=s.children.length;p<d;p++){const m=s.children[p],g=s.leaf?o(m):m;if(J(e,g)){if(s.leaf||k(e,g))return!0;A.push(m)}}s=A.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let o=0,p=e.length;o<p;o++)this.insert(e[o]);return this}let s=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===s.height)this._splitRoot(this._data,s);else{if(this._data.height<s.height){const o=this._data;this._data=s,s=o}this._insert(s,this._data.height-s.height-1,!0)}else this._data=s;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new f([]),this}remove(e){if(!e)return this;let s,o=this._data,p=null,d=0,m=!1;const g=this._toBBox(e);for(b.clear(),z.clear();o||b.length>0;){if(o||(o=b.pop(),p=b.data[b.length-1],d=z.pop()??0,m=!0),o.leaf&&(s=(0,y.cq)(o.children,e,o.children.length,o.indexHint),-1!==s))return o.children.splice(s,1),b.push(o),this._condense(b),this;m||o.leaf||!k(o,g)?p?(d++,o=p.children[d],m=!1):o=null:(b.push(o),z.push(d),d=0,p=o,o=o.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,s){let o=e;for(D.clear();o;){if(!0===o.leaf)for(const p of o.children)s(p);else D.pushArray(o.children);o=D.pop()??null}}_build(e,s,o,p){const d=o-s+1;let m=this._maxEntries;if(d<=m){const C=new f(e.slice(s,o+1));return S(C,this._toBBox),C}p||(p=Math.ceil(Math.log(d)/Math.log(m)),m=Math.ceil(d/m**(p-1)));const g=new c([]);g.height=p;const _=Math.ceil(d/m),E=_*Math.ceil(Math.sqrt(m));nt(e,s,o,E,this._compareMinX);for(let C=s;C<=o;C+=E){const j=Math.min(C+E-1,o);nt(e,C,j,_,this._compareMinY);for(let N=C;N<=j;N+=_){const st=Math.min(N+_-1,j);g.children.push(this._build(e,N,st,p-1))}}return S(g,this._toBBox),g}_chooseSubtree(e,s,o,p){for(;p.push(s),!0!==s.leaf&&p.length-1!==o;){let d,m=1/0,g=1/0;for(let _=0,E=s.children.length;_<E;_++){const C=s.children[_],j=P(C),N=Z(e,C)-j;N<g?(g=N,m=j<m?j:m,d=C):N===g&&j<m&&(m=j,d=C)}s=d||s.children[0]}return s}_insert(e,s,o){const d=o?e:(0,this._toBBox)(e);b.clear();const m=this._chooseSubtree(d,this._data,s,b);for(m.children.push(e),T(m,d);s>=0&&b.data[s].children.length>this._maxEntries;)this._split(b,s),s--;this._adjustParentBBoxes(d,b,s)}_split(e,s){const o=e.data[s],p=o.children.length,d=this._minEntries;this._chooseSplitAxis(o,d,p);const m=this._chooseSplitIndex(o,d,p);if(!m)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const g=o.children.splice(m,o.children.length-m),_=o.leaf?new f(g):new c(g);_.height=o.height,S(o,this._toBBox),S(_,this._toBBox),s?e.data[s-1].children.push(_):this._splitRoot(o,_)}_splitRoot(e,s){this._data=new c([e,s]),this._data.height=e.height+1,S(this._data,this._toBBox)}_chooseSplitIndex(e,s,o){let p,d,m;p=d=1/0;for(let g=s;g<=o-s;g++){const _=x(e,0,g,this._toBBox),E=x(e,g,o,this._toBBox),C=et(_,E),j=P(_)+P(E);C<p?(p=C,m=g,d=j<d?j:d):C===p&&j<d&&(d=j,m=g)}return m}_chooseSplitAxis(e,s,o){const p=e.leaf?this._compareMinX:tt,d=e.leaf?this._compareMinY:H;this._allDistMargin(e,s,o,p)<this._allDistMargin(e,s,o,d)&&e.children.sort(p)}_allDistMargin(e,s,o,p){e.children.sort(p);const d=this._toBBox,m=x(e,0,s,d),g=x(e,o-s,o,d);let _=R(m)+R(g);for(let E=s;E<o-s;E++){const C=e.children[E];T(m,e.leaf?d(C):C),_+=R(m)}for(let E=o-s-1;E>=s;E--){const C=e.children[E];T(g,e.leaf?d(C):C),_+=R(g)}return _}_adjustParentBBoxes(e,s,o){for(let p=o;p>=0;p--)T(s.data[p],e)}_condense(e){for(let s=e.length-1;s>=0;s--){const o=e.data[s];if(0===o.children.length)if(s>0){const p=e.data[s-1],d=p.children;d.splice((0,y.cq)(d,o,d.length,p.indexHint),1)}else this.clear();else S(o,this._toBBox)}}_initFormat(e){const s=["return a"," - b",";"];this._compareMinX=new Function("a","b",s.join(e[0])),this._compareMinY=new Function("a","b",s.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function S(i,e){x(i,0,i.children.length,e,i)}function x(i,e,s,o,p){p||(p=new f([])),p.minX=1/0,p.minY=1/0,p.maxX=-1/0,p.maxY=-1/0;for(let d,m=e;m<s;m++)d=i.children[m],T(p,i.leaf?o(d):d);return p}function T(i,e){i.minX=Math.min(i.minX,e.minX),i.minY=Math.min(i.minY,e.minY),i.maxX=Math.max(i.maxX,e.maxX),i.maxY=Math.max(i.maxY,e.maxY)}function tt(i,e){return i.minX-e.minX}function H(i,e){return i.minY-e.minY}function P(i){return(i.maxX-i.minX)*(i.maxY-i.minY)}function R(i){return i.maxX-i.minX+(i.maxY-i.minY)}function Z(i,e){return(Math.max(e.maxX,i.maxX)-Math.min(e.minX,i.minX))*(Math.max(e.maxY,i.maxY)-Math.min(e.minY,i.minY))}function et(i,e){const s=Math.max(i.minX,e.minX),o=Math.max(i.minY,e.minY),p=Math.min(i.maxX,e.maxX),d=Math.min(i.maxY,e.maxY);return Math.max(0,p-s)*Math.max(0,d-o)}function k(i,e){return i.minX<=e.minX&&i.minY<=e.minY&&e.maxX<=i.maxX&&e.maxY<=i.maxY}function J(i,e){return e.minX<=i.maxX&&e.minY<=i.maxY&&e.maxX>=i.minX&&e.maxY>=i.minY}function nt(i,e,s,o,p){const d=[e,s];for(;d.length;){const m=d.pop(),g=d.pop();if(m-g<=o)continue;const _=g+Math.ceil((m-g)/o/2)*o;(0,W.q)(i,_,g,m,p),d.push(g,_,_,m)}}const A=new X.Z,D=new X.Z,b=new X.Z,z=new X.Z({deallocator:void 0});class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class a extends v{constructor(){super(...arguments),this.height=1,this.indexHint=new y.SO}}class f extends a{constructor(e){super(),this.children=e,this.leaf=!0}}class c extends a{constructor(e){super(),this.children=e,this.leaf=!1}}},95150:(Rt,Q,u)=>{u.d(Q,{SR:()=>H,Ui:()=>tt});var y=u(89317),X=u(45425),W=u(43585),Y=u(54746),S=u(40637),x=u(23991),T=u(33721);function tt(v){return P(v,!0)}function H(v){return P(v,!1)}function P(v,a){if(null==v)return null;const f=v.spatialReference,c=(0,T.C5)(f),i=(0,y.AK)(v)?v.toJSON():v;if(!c)return i;const e=(0,T.sS)(f)?102100:4326,s=x.UZ[e].maxX,o=x.UZ[e].minX;if((0,S.wp)(i))return Z(i,s,o);if((0,S.aW)(i))return i.points=i.points.map(p=>Z(p,s,o)),i;if((0,S.YX)(i))return function R(v,a){if(!a)return v;const f=function et(v,a){const f=[],{ymin:c,ymax:i,xmin:e,xmax:s}=v,o=v.xmax-v.xmin,[p,d]=a.valid,{x:m,frameId:g}=k(v.xmin,a),{x:_,frameId:E}=k(v.xmax,a),C=m===_&&o>0;if(o>2*d){const j={xmin:e<s?m:_,ymin:c,xmax:d,ymax:i},N={xmin:p,ymin:c,xmax:e<s?_:m,ymax:i},st={xmin:0,ymin:c,xmax:d,ymax:i},ct={xmin:p,ymin:c,xmax:0,ymax:i},ut=[],O=[];J(j,st)&&ut.push(g),J(j,ct)&&O.push(g),J(N,st)&&ut.push(E),J(N,ct)&&O.push(E);for(let q=g+1;q<E;q++)ut.push(q),O.push(q);f.push(new D(j,[g]),new D(N,[E]),new D(st,ut),new D(ct,O))}else m>_||C?f.push(new D({xmin:m,ymin:c,xmax:d,ymax:i},[g]),new D({xmin:p,ymin:c,xmax:_,ymax:i},[E])):f.push(new D({xmin:m,ymin:c,xmax:_,ymax:i},[g]));return f}(v,a).map(c=>c.extent);return f.length<2?f[0]||v:f.length>2?(v.xmin=a.valid[0],v.xmax=a.valid[1],v):{rings:f.map(c=>[[c.xmin,c.ymin],[c.xmin,c.ymax],[c.xmax,c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]])}}(i,c);if((0,S.oU)(i)||(0,S.l9)(i)){const p=(0,W.$P)(b,i),d={xmin:p[0],ymin:p[1],xmax:p[2],ymax:p[3]},m=(0,x.XZ)(d.xmin,o)*(2*s),g=0===m?i:(0,x.Sy)(i,m);return d.xmin+=m,d.xmax+=m,d.xmax>s?A(g,s,a):d.xmin<o?A(g,o,a):g}return i}function Z(v,a,f){if(Array.isArray(v)){const c=v[0];if(c>a){const i=(0,x.XZ)(c,a);v[0]=c+i*(-2*a)}else if(c<f){const i=(0,x.XZ)(c,f);v[0]=c+i*(-2*f)}}else{const c=v.x;if(c>a){const i=(0,x.XZ)(c,a);v.x+=i*(-2*a)}else if(c<f){const i=(0,x.XZ)(c,f);v.x+=i*(-2*f)}}return v}function k(v,a){const[f,c]=a.valid,i=2*c;let e,s=0;return v>c?(e=Math.ceil(Math.abs(v-c)/i),v-=e*i,s=e):v<f&&(e=Math.ceil(Math.abs(v-f)/i),v+=e*i,s=-e),{x:v,frameId:s}}function J(v,a){const{xmin:f,ymin:c,xmax:i,ymax:e}=a;return nt(v,f,c)&&nt(v,f,e)&&nt(v,i,e)&&nt(v,i,c)}function nt(v,a,f){return a>=v.xmin&&a<=v.xmax&&f>=v.ymin&&f<=v.ymax}function A(v,a,f=!0){const c=!(0,S.l9)(v);if(c&&(0,Y.Zy)(v),f)return(new z).cut(v,a);const i=c?v.rings:v.paths,e=c?4:2,s=i.length,o=-2*a;for(let p=0;p<s;p++){const d=i[p];if(d&&d.length>=e){const m=[];for(const g of d)m.push([g[0]+o,g[1]]);i.push(m)}}return c?v.rings=i:v.paths=i,v}class D{constructor(a,f){this.extent=a,this.frameIds=f}}const b=(0,X.Ue)();class z{constructor(){this._linesIn=[],this._linesOut=[]}cut(a,f){let c;if(this._xCut=f,a.rings)this._closed=!0,c=a.rings,this._minPts=4;else{if(!a.paths)return null;this._closed=!1,c=a.paths,this._minPts=2}for(const e of c){if(!e||e.length<this._minPts)continue;let s=!0;for(const o of e)s?(this.moveTo(o),s=!1):this.lineTo(o);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),c=[];for(const e of this._linesIn)e&&e.length>=this._minPts&&c.push(e);const i=-2*this._xCut;for(const e of this._linesOut)if(e&&e.length>=this._minPts){for(const s of e)s[0]+=i;c.push(e)}return this._closed?a.rings=c:a.paths=c,a}moveTo(a){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(a[0]),this._moveTo(a[0],a[1],this._prevSide),this._prevPt=a,this._firstPt=a}lineTo(a){const f=this._side(a[0]);if(f*this._prevSide==-1){const c=this._intersect(this._prevPt,a);this._lineTo(this._xCut,c,0),this._prevSide=0,this._lineTo(a[0],a[1],f)}else this._lineTo(a[0],a[1],f);this._prevSide=f,this._prevPt=a}close(){const a=this._firstPt,f=this._prevPt;a[0]===f[0]&&a[1]===f[1]||this.lineTo(a),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(a,f,c){this._closed?(this._lineIn.push([c<=0?a:this._xCut,f]),this._lineOut.push([c>=0?a:this._xCut,f])):(c<=0&&this._lineIn.push([a,f]),c>=0&&this._lineOut.push([a,f]))}_lineTo(a,f,c){this._closed?(this._addPolyVertex(this._lineIn,c<=0?a:this._xCut,f),this._addPolyVertex(this._lineOut,c>=0?a:this._xCut,f)):c<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([a,f])):c>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([a,f])):this._prevSide<0?(this._lineIn.push([a,f]),this._lineOut.push([a,f])):this._prevSide>0&&(this._lineOut.push([a,f]),this._lineIn.push([a,f]))}_addPolyVertex(a,f,c){const i=a.length;i>1&&a[i-1][0]===f&&a[i-2][0]===f?a[i-1][1]=c:a.push([f,c])}_checkClosingPt(a){const f=a.length;f>3&&a[0][0]===this._xCut&&a[f-2][0]===this._xCut&&a[1][0]===this._xCut&&(a[0][1]=a[f-2][1],a.pop())}_side(a){return a<this._xCut?-1:a>this._xCut?1:0}_intersect(a,f){return a[1]+(this._xCut-a[0])/(f[0]-a[0])*(f[1]-a[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}},69981:(Rt,Q,u)=>{u.r(Q),u.d(Q,{default:()=>he});var y=u(50484),X=u(83944),W=u(57964),Y=u(4703),S=u(3233),x=u(80543),T=u(73018),P=(u(57678),u(14007),u(62185)),R=u(10141),Z=u(7547),et=u(95060),k=u(19855),J=u(80099),nt=u(29717),A=u(15861),D=u(66476),b=u(26517),z=u(6785),v=u(19986),f=(u(1535),u(84373)),c=u(89317),i=u(67016),e=u(73514),s=u(12933),o=u(55768),p=u(51006),d=u(93530),m=u(46033),g=u(51675),_=u(85039),E=u(5391),C=u(83821),j=u(43814),N=u(25387);let st=class extends N.j{projectOrWarn(t,n){if(null==t)return t;const{geometry:r,pending:l}=(0,C.projectOrLoad)(t,n);return l?null:l||r?r:(Y.Z.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:n}),null)}};st=(0,y._)([(0,R.j)("esri.layers.support.GeoreferenceBase")],st);const ct=st,ut=(0,d.a)(),O=(0,g.a)();let q=class extends e.Z{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};(0,y._)([(0,x.Cb)()],q.prototype,"sourcePoint",void 0),(0,y._)([(0,x.Cb)({type:_.Z})],q.prototype,"mapPoint",void 0),q=(0,y._)([(0,R.j)("esri.layers.support.ControlPoint")],q);let G=class extends((0,c.eC)(ct)){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,n){const r=j.Z.fromJSON(n.spatialReference),l=(0,d.f)(...n.coefficients,1);return t.map(h=>((0,m.s)(O,h.x,h.y),(0,s.H)(O,O,l),{sourcePoint:h,mapPoint:new _.Z({x:O[0],y:O[1],spatialReference:r})}))}writeControlPoints(t,n,r,l){if(null!=this.transform)null!=t&&U(t[0])&&(n.controlPoints=t.map(h=>{const M=h.sourcePoint;return{x:M.x,y:M.y}}),n.spatialReference=t[0].mapPoint.spatialReference.toJSON(),n.coefficients=this.transform.slice(0,8));else{const h=new W.Z("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:l?.layer,georeference:this});l?.messages?l.messages.push(h):Y.Z.getLogger(this).error(h.name,h.message)}}get coords(){if(null==this.controlPoints)return null;const t=this._updateTransform(ut);return null!=t&&U(this.controlPoints[0])?function Nt(t,n,r,l){const h=(0,g.f)(0,r),M=(0,g.f)(0,0),I=(0,g.f)(n,0),B=(0,g.f)(n,r);return(0,s.H)(h,h,t),(0,s.H)(M,M,t),(0,s.H)(I,I,t),(0,s.H)(B,B,t),new E.Z({rings:[[h,M,I,B,h]],spatialReference:l})}(t,this.width,this.height,this.controlPoints[0].mapPoint.spatialReference):null}set coords(t){if(null==this.controlPoints||!U(this.controlPoints[0]))return;const n=this.controlPoints[0].mapPoint.spatialReference;if(null==(t=this.projectOrWarn(t,n)))return;const{width:r,height:l}=this,{rings:[[h,M,I,B]]}=t,L={sourcePoint:(0,o.vW)(0,l),mapPoint:new _.Z({x:h[0],y:h[1],spatialReference:n})},w={sourcePoint:(0,o.vW)(0,0),mapPoint:new _.Z({x:M[0],y:M[1],spatialReference:n})},K={sourcePoint:(0,o.vW)(r,0),mapPoint:new _.Z({x:I[0],y:I[1],spatialReference:n})},F={sourcePoint:(0,o.vW)(r,l),mapPoint:new _.Z({x:B[0],y:B[1],spatialReference:n})};U(L)&&U(w)&&U(K)&&U(F)&&(bt(ut,L,w,K,F),this.controlPoints=this.controlPoints.map(({sourcePoint:ht})=>((0,m.s)(O,ht.x,ht.y),(0,s.H)(O,O,ut),{sourcePoint:ht,mapPoint:new _.Z({x:O[0],y:O[1],spatialReference:n})})))}get inverseTransform(){return null==this.transform?null:(0,p.d)((0,d.a)(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(null==t||null==this.transform||null==this.controlPoints||!U(this.controlPoints[0]))return null;(0,m.s)(O,t.x,t.y);const n=this.controlPoints[0].mapPoint.spatialReference;return(0,s.H)(O,O,this.transform),new _.Z({x:O[0],y:O[1],spatialReference:n})}toSource(t){if(null==t||null==this.inverseTransform||null==this.controlPoints||!U(this.controlPoints[0]))return null;const n=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),null==(t=(0,C.projectOrLoad)(t,n).geometry)?null:((0,m.s)(O,t.x,t.y),(0,s.H)(O,O,this.inverseTransform),(0,o.vW)(O[0],O[1]))}toSourceNormalized(t){const n=this.toSource(t);return null!=n&&(n.x/=this.width,n.y/=this.height),n}_updateTransform(t){const{controlPoints:n,width:r,height:l}=this;if(!(null!=n&&r>0&&l>0))return null;const[h,M,I,B]=n;if(!U(h))return null;const L=h.mapPoint.spatialReference,w=this._projectControlPoint(M,L),K=this._projectControlPoint(I,L),F=this._projectControlPoint(B,L);if(!(w.valid&&K.valid&&F.valid&&U(w.controlPoint)))return null;null==t&&(t=(0,d.a)());let ht=null;return ht=U(K.controlPoint)&&U(F.controlPoint)?bt(t,h,w.controlPoint,K.controlPoint,F.controlPoint):U(K.controlPoint)?function Wt(t,n,r,l){return at(it,rt,n),at(ot,lt,r),at(xt,yt,l),(0,m.l)(dt,it,ot,.5),(0,m.r)(dt,xt,dt,Math.PI),(0,m.l)(mt,rt,lt,.5),(0,m.r)(mt,yt,mt,Math.PI),Ct(t,it,ot,xt,dt,rt,lt,yt,mt)}(t,h,w.controlPoint,K.controlPoint):function Ut(t,n,r){return at(it,rt,n),at(ot,lt,r),(0,m.r)(xt,ot,it,It),(0,m.r)(dt,it,ot,It),(0,m.r)(yt,lt,rt,-It),(0,m.r)(mt,rt,lt,-It),Ct(t,it,ot,xt,dt,rt,lt,yt,mt)}(t,h,w.controlPoint),ht.every(ce=>0===ce)?null:ht}_projectControlPoint(t,n){if(!U(t))return{valid:!0,controlPoint:t};const{sourcePoint:r,mapPoint:l}=t,{geometry:h,pending:M}=(0,C.projectOrLoad)(l,n);return M?{valid:!1,controlPoint:null}:M||h?{valid:!0,controlPoint:{sourcePoint:r,mapPoint:h}}:(Y.Z.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:l.spatialReference,targetSpatialReference:n}),{valid:!1,controlPoint:null})}};function U(t){return null!=t?.sourcePoint&&null!=t.mapPoint}(0,y._)([(0,x.Cb)({type:[q],json:{write:{allowNull:!1,isRequired:!0}}})],G.prototype,"controlPoints",void 0),(0,y._)([(0,P.r)("controlPoints")],G.prototype,"readControlPoints",null),(0,y._)([(0,Z.c)("controlPoints")],G.prototype,"writeControlPoints",null),(0,y._)([(0,x.Cb)()],G.prototype,"coords",null),(0,y._)([(0,x.Cb)({json:{write:!0}})],G.prototype,"height",void 0),(0,y._)([(0,x.Cb)({readOnly:!0})],G.prototype,"inverseTransform",null),(0,y._)([(0,x.Cb)({readOnly:!0})],G.prototype,"transform",null),(0,y._)([(0,x.Cb)({json:{write:!0}})],G.prototype,"width",void 0),G=(0,y._)([(0,R.j)("esri.layers.support.ControlPointsGeoreference")],G);const it=(0,g.a)(),ot=(0,g.a)(),xt=(0,g.a)(),dt=(0,g.a)(),rt=(0,g.a)(),lt=(0,g.a)(),yt=(0,g.a)(),mt=(0,g.a)(),It=Math.PI/2;function at(t,n,r){(0,m.s)(t,r.sourcePoint.x,r.sourcePoint.y),(0,m.s)(n,r.mapPoint.x,r.mapPoint.y)}function bt(t,n,r,l,h){return at(it,rt,n),at(ot,lt,r),at(xt,yt,l),at(dt,mt,h),Ct(t,it,ot,xt,dt,rt,lt,yt,mt)}const At=new Array(8).fill(0),Dt=new Array(8).fill(0);function Zt(t,n,r,l,h){return t[0]=n[0],t[1]=n[1],t[2]=r[0],t[3]=r[1],t[4]=l[0],t[5]=l[1],t[6]=h[0],t[7]=h[1],t}function Ct(t,n,r,l,h,M,I,B,L){return(0,s.E)(t,Zt(At,n,r,l,h),Zt(Dt,M,I,B,L))}const Tt=G,Pt=(0,g.a)();let pt=class extends ct{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:n,bottomLeft:r,bottomRight:l}=this;if(null==t||null==n||null==r||null==l)return null;const h=t.spatialReference;return n=this.projectOrWarn(n,h),r=this.projectOrWarn(r,h),l=this.projectOrWarn(l,h),null==n||null==r||null==l?null:new E.Z({rings:[[[r.x,r.y],[t.x,t.y],[n.x,n.y],[l.x,l.y],[r.x,r.y]]],spatialReference:h})}set coords(t){const{topLeft:n}=this;if(null==n)return;const r=n.spatialReference;if(null==(t=this.projectOrWarn(t,r)))return;const{rings:[[l,h,M,I]]}=t;this.bottomLeft=new _.Z({x:l[0],y:l[1],spatialReference:r}),this.topLeft=new _.Z({x:h[0],y:h[1],spatialReference:r}),this.topRight=new _.Z({x:M[0],y:M[1],spatialReference:r}),this.bottomRight=new _.Z({x:I[0],y:I[1],spatialReference:r})}toSourceNormalized(t){const{topLeft:n,topRight:r,bottomRight:l,bottomLeft:h}=this;if(null==t||null==n||null==r||null==l||null==h)return null;const M=n.spatialReference;t=t.normalize();const I=(0,C.projectOrLoad)(t,M).geometry;if(null==I)return null;(0,m.s)(Pt,I.x,I.y);const B=(0,s.E)((0,d.a)(),[n.x,n.y,h.x,h.y,r.x,r.y,l.x,l.y],[0,0,0,1,1,0,1,1]);return(0,s.H)(Pt,Pt,B),(0,o.vW)(Pt[0],Pt[1])}};(0,y._)([(0,x.Cb)()],pt.prototype,"coords",null),(0,y._)([(0,x.Cb)({type:_.Z})],pt.prototype,"bottomLeft",void 0),(0,y._)([(0,x.Cb)({type:_.Z})],pt.prototype,"bottomRight",void 0),(0,y._)([(0,x.Cb)({type:_.Z})],pt.prototype,"topLeft",void 0),(0,y._)([(0,x.Cb)({type:_.Z})],pt.prototype,"topRight",void 0),pt=(0,y._)([(0,R.j)("esri.layers.support.CornersGeoreference")],pt);const Vt=pt;var Et=u(55117),Kt=u(52593),Ot=u(26894);let gt=class extends ct{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(null==this.extent)return null;const{xmin:t,ymin:n,xmax:r,ymax:l,spatialReference:h}=this.extent;let M;if(this.rotation){const{x:I,y:B}=this.extent.center,L=Lt(I,B,this.rotation);M=[L(t,n),L(t,l),L(r,l),L(r,n)],M.push(M[0])}else M=[[t,n],[t,l],[r,l],[r,n],[t,n]];return new E.Z({rings:[M],spatialReference:h})}set coords(t){if(null==t||null==this.extent)return;const n=this.extent.spatialReference;if(t=this.projectOrWarn(t,n),null==t?.extent)return;const{rings:[[r,l,h]],extent:{center:{x:M,y:I}}}=t,B=(0,Et.BV)(Math.PI/2-Math.atan2(l[1]-r[1],l[0]-r[0])),L=Lt(M,I,-B),[w,K]=L(r[0],r[1]),[F,ht]=L(h[0],h[1]);this.extent=new Ot.Z({xmin:w,ymin:K,xmax:F,ymax:ht,spatialReference:n}),this.rotation=B}toSourceNormalized(t){const{extent:n,rotation:r}=this;if(null==t||null==n)return null;const{xmin:l,ymin:h,xmax:M,ymax:I,center:B,spatialReference:L}=n;t=t.normalize();const w=(0,C.projectOrLoad)(t,L).geometry;if(null==w)return null;let K=w.x,F=w.y;return r&&([K,F]=Lt(B.x,B.y,-r)(K,F)),(0,o.vW)((0,Et.bA)(K,l,M,0,1),(0,Et.bA)(F,I,h,0,1))}};function Lt(t,n,r){const l=(0,Kt.t)(r),h=Math.cos(l),M=Math.sin(l);return(I,B)=>[h*(I-t)+M*(B-n)+t,h*(B-n)-M*(I-t)+n]}(0,y._)([(0,x.Cb)()],gt.prototype,"coords",null),(0,y._)([(0,x.Cb)({type:Ot.Z})],gt.prototype,"extent",void 0),(0,y._)([(0,x.Cb)({type:Number})],gt.prototype,"rotation",void 0),gt=(0,y._)([(0,R.j)("esri.layers.support.ExtentAndRotationGeoreference")],gt);const zt={key:"type",base:ct,typeMap:{"control-points":Tt,corners:Vt,"extent-and-rotation":gt}};let vt=class extends((0,f.iv)((0,c.eC)(i.Z))){constructor(t){super(t),this.georeference=null,this.opacity=1}readGeoreference(t){return Tt.fromJSON(t)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(t){const{georeference:n,contentWidth:r,contentHeight:l}=this;if(null==t||null==n||0===r||0===l)return null;const h=n.toSourceNormalized(t);return null==h?null:(h.x*=r,h.y*=l,h)}};(0,y._)([(0,x.Cb)({types:zt,json:{write:!0}})],vt.prototype,"georeference",void 0),(0,y._)([(0,P.r)("georeference")],vt.prototype,"readGeoreference",null),(0,y._)([(0,x.Cb)()],vt.prototype,"opacity",void 0),vt=(0,y._)([(0,R.j)("esri.layers.support.MediaElementBase")],vt);const St=vt;var Ft=u(79387),Mt=u(19677);let $=class extends St{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if("string"==typeof t){const n=(0,b.n$)(t).then(r=>{this._set("content",r)});this.addResolvingPromise(n)}else if(t instanceof HTMLImageElement){const n=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(n)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new W.Z("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,n,r){return(0,Mt.f)(n.url,r)}writeImage(t,n,r,l){if(null==t)return;const h=l?.portalItem,M=l?.resources;if(!h||!M)return void("string"==typeof t&&(n[r]=(0,Mt.t)(t,l)));const I="string"!=typeof t||(0,z.HK)(t)||(0,z.jc)(t)?null:t;if(I){if(null==(0,Mt.i)(I))return void(n[r]=I);const B=(0,Mt.t)(I,{...l,verifyItemRelativeUrls:l?.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Mt.M.NO);if(h&&B&&!(0,z.YP)(B))return M.toKeep.push({resource:h.resourceFromPath(B),compress:!1}),void(n[r]=B)}n[r]="<pending>",M.pendingOperations.push(function Jt(t){return jt.apply(this,arguments)}(t).then(B=>{const L=function $t(t,n){const r=(0,v.DO)(),l=`${(0,z.v_)("media",r)}.${(0,Ft.B)({type:"blob",blob:t})}`;return n.resourceFromPath(l)}(B,h);n[r]=L.itemRelativeUrl,M.toAdd.push({resource:L,content:{type:"blob",blob:B},compress:!1,finish:w=>{this.image=w.url}})}))}};(0,y._)([(0,x.Cb)()],$.prototype,"animationOptions",void 0),(0,y._)([(0,x.Cb)({readOnly:!0})],$.prototype,"content",void 0),(0,y._)([(0,x.Cb)({readOnly:!0})],$.prototype,"contentWidth",null),(0,y._)([(0,x.Cb)({readOnly:!0})],$.prototype,"contentHeight",null),(0,y._)([(0,x.Cb)({json:{name:"url",type:String}})],$.prototype,"image",void 0),(0,y._)([(0,P.r)("image",["url"])],$.prototype,"readImage",null),(0,y._)([(0,Z.c)("image")],$.prototype,"writeImage",null),(0,y._)([(0,x.Cb)({readOnly:!0,json:{name:"mediaType"}})],$.prototype,"type",void 0),$=(0,y._)([(0,R.j)("esri.layers.support.ImageElement")],$);const wt=$;function jt(){return(jt=(0,A.Z)(function*(t){return"string"==typeof t?(0,z.HK)(t)?(0,z.fw)(t):(yield(0,D.Z)(t,{responseType:"blob"})).data:new Promise(n=>function Gt(t){if(t instanceof HTMLCanvasElement)return t;const n=t instanceof HTMLImageElement?t.naturalWidth:t.width,r=t instanceof HTMLImageElement?t.naturalHeight:t.height,l=document.createElement("canvas"),h=l.getContext("2d");return l.width=n,l.height=r,t instanceof HTMLImageElement?h.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&h.putImageData(t,0,0),l}(t).toBlob(n))})).apply(this,arguments)}u(2189);var Qt=u(18626),kt=u(88278),qt=u(47868),te=u(79412),ee=u(77675),ne=u(45425),se=u(26230),ie=u(33721),oe=u(46872),re=u(46687),le=u(90984);let ft=class extends St{constructor(t){super(t),this.autoplay=!0,this.content=null,this.type="video"}load(){const t=this.video;if("string"==typeof t){const n=document.createElement("video");n.src=t,n.crossOrigin="anonymous",n.autoplay=!0,n.muted=!0,n.loop=!0,this.addResolvingPromise(this._loadVideo(n).then(()=>{this._set("content",n)}))}else t instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)})):this.addResolvingPromise(Promise.reject(new W.Z("video-element:invalid-video-type","Invalid video type",{video:t})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(t){"not-loaded"===this.loadStatus?this._set("video",t):Y.Z.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(t){return new Promise((n,r)=>{const l=(0,le.IH)(t,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?t.play().then(n,r):n()});this.addHandles(l,"canplay"),"anonymous"!==t.crossOrigin&&(t.crossOrigin="anonymous",t.src?.includes("blob:")||(t.src=t.src))})}};(0,y._)([(0,x.Cb)()],ft.prototype,"autoplay",void 0),(0,y._)([(0,x.Cb)({readOnly:!0})],ft.prototype,"content",void 0),(0,y._)([(0,x.Cb)({readOnly:!0})],ft.prototype,"contentWidth",null),(0,y._)([(0,x.Cb)({readOnly:!0})],ft.prototype,"contentHeight",null),(0,y._)([(0,x.Cb)()],ft.prototype,"video",null),ft=(0,y._)([(0,R.j)("esri.layers.support.VideoElement")],ft);const Xt=ft,Yt=X.Z.ofType({key:"type",defaultKeyValue:"image",base:St,typeMap:{image:wt,video:Xt}});let _t=class extends(i.Z.LoadableMixin((0,qt.v)(kt.Z.EventedAccessor))){constructor(t){super(t),this._index=new oe.H,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=n=>{for(const l of n.removed){const h=this._elementViewsMap.get(l);this._elementViewsMap.delete(l),this._index.delete(h),this.removeHandles(h),h.destroy(),this.notifyChange("fullExtent")}const{spatialReference:r}=this;for(const l of n.added){if(this._elementViewsMap.get(l))continue;const h=new re.L({spatialReference:r,element:l});this._elementViewsMap.set(l,h);const M=(0,ee.YP)(()=>h.coords,()=>this._updateIndexForElement(h,!1));this._updateIndexForElement(h,!0),this.addHandles(M,h)}this._elementsIndexes.clear(),this.elements.forEach((l,h)=>this._elementsIndexes.set(l,h)),this.emit("refresh")},this.elements=new Yt}load(t){var n=this;return(0,A.Z)(function*(){if((0,te.k_)(t),!n.spatialReference){const r=n.elements.find(l=>null!=l.georeference?.coords);n._set("spatialReference",r?r.georeference.coords.spatialReference:j.Z.WGS84)}return n._elementsChangedHandler({added:n.elements.items,removed:[]}),n.addHandles(n.elements.on("change",n._elementsChangedHandler)),n})()}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(t){this._set("elements",(0,Qt.Z)(t,this._get("elements"),Yt))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const t=this._index.fullBounds;return null==t?null:new Ot.Z({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:this.spatialReference})}set spatialReference(t){"not-loaded"===this.loadStatus?this._set("spatialReference",t):Y.Z.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}queryElements(t,n){var r=this;return(0,A.Z)(function*(){yield r.load(),yield(0,C.initializeProjection)(t.spatialReference,r.spatialReference,null,n);const l=(0,ie.fS)(t.spatialReference,r.spatialReference)?t:(0,C.project)(t,r.spatialReference);if(!l)return[];const h=l.normalize(),M=[];for(const I of h)r._index.forEachInBounds((0,ne.oJ)(I),({normalizedCoords:B,element:L})=>{null!=B&&(0,se.Nl)(I,B)&&M.push(L)});return M.sort((I,B)=>r._elementsIndexes.get(I)-r._elementsIndexes.get(B)),M})()}_updateIndexForElement(t,n){const r=t.normalizedBounds,l=this._index.has(t),h=null!=r;this._index.delete(t),h&&this._index.set(t,r),this.notifyChange("fullExtent"),n||(l!==h?this.emit("refresh"):this.emit("change",{element:t.element}))}};(0,y._)([(0,x.Cb)()],_t.prototype,"elements",null),(0,y._)([(0,x.Cb)({readOnly:!0})],_t.prototype,"fullExtent",null),(0,y._)([(0,x.Cb)()],_t.prototype,"spatialReference",null),_t=(0,y._)([(0,R.j)("esri.layers.support.LocalMediaElementSource")],_t);const Bt=_t;function Ht(t){return"object"==typeof t&&null!=t&&"type"in t}let V=class extends((0,k.h)((0,nt.M)((0,J.q)((0,S.R)(et.Z))))){constructor(t){super(t),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new Bt}load(t){const n=this.source;if(!n)return this.addResolvingPromise(Promise.reject(new W.Z("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const r=Ht(n)?new Bt({elements:new X.Z([n])}):n;this._set("effectiveSource",r),this.spatialReference&&(r.spatialReference=this.spatialReference);const l=r.load(t).then(()=>{this.spatialReference=r.spatialReference});return this.addResolvingPromise(l),Promise.resolve(this)}destroy(){this.effectiveSource?.destroy(),this.source?.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(t){"not-loaded"===this.loadStatus?this._set("source",t):Y.Z.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(t){return t?Array.isArray(t)?new Bt({elements:new X.Z(t)}):t instanceof X.Z?new Bt({elements:t}):t:null}readSource(t,n,r){const l="image"===n.mediaType?new wt:"video"===n.mediaType?new Xt:null;return l?.read(n,r),l}writeSource(t,n,r,l){t&&Ht(t)&&"image"===t.type?t.write(n,l):l?.messages&&l?.messages?.push(new W.Z("media-layer:unsupported-source","source must be an 'ImageElement'"))}};(0,y._)([(0,x.Cb)({readOnly:!0})],V.prototype,"effectiveSource",void 0),(0,y._)([(0,x.Cb)({type:String})],V.prototype,"copyright",void 0),(0,y._)([(0,x.Cb)({readOnly:!0})],V.prototype,"fullExtent",null),(0,y._)([(0,x.Cb)({type:["MediaLayer"]})],V.prototype,"operationalLayerType",void 0),(0,y._)([(0,x.Cb)({type:["show","hide"]})],V.prototype,"listMode",void 0),(0,y._)([(0,x.Cb)({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],V.prototype,"source",null),(0,y._)([(0,T.p)("source")],V.prototype,"castSource",null),(0,y._)([(0,P.r)("source",["url"])],V.prototype,"readSource",null),(0,y._)([(0,Z.c)("source")],V.prototype,"writeSource",null),(0,y._)([(0,x.Cb)()],V.prototype,"spatialReference",void 0),(0,y._)([(0,x.Cb)({readOnly:!0})],V.prototype,"type",void 0),V=(0,y._)([(0,R.j)("esri.layers.MediaLayer")],V);const he=V},46872:(Rt,Q,u)=>{u.d(Q,{H:()=>tt});var y=u(14007),X=u(26540),W=u(45425);const S={minX:0,minY:0,maxX:0,maxY:0};class tt{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new X.Q(9,(0,y.Z)("esri-csp-restrictions")?P=>({minX:P[0],minY:P[1],maxX:P[2],maxY:P[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const P=new Array(this._idByBounds.size);let R=0;this._idByBounds.forEach((Z,et)=>{P[R++]=et}),this._indexInvalid=!1,this._index.clear(),this._index.load(P)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(P=>this._idByBounds.has(P))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const P=(0,W.cS)();for(const R of this._boundsById.values())R&&(P[0]=Math.min(R[0],P[0]),P[1]=Math.min(R[1],P[1]),P[2]=Math.max(R[2],P[2]),P[3]=Math.max(R[3],P[3]));return P}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(P){const R=this._boundsById.get(P);this._boundsById.delete(P),R&&(this._idByBounds.delete(R),this._indexInvalid||this._index.remove(R))}forEachInBounds(P,R){this._loadIndex(),function T(H,P,R){(function x(H){S.minX=H[0],S.minY=H[1],S.maxX=H[2],S.maxY=H[3]})(P),H.search(S,R)}(this._index,P,Z=>R(this._idByBounds.get(Z)))}get(P){return this._boundsById.get(P)}has(P){return this._boundsById.has(P)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(P,R){if(!this._indexInvalid){const Z=this._boundsById.get(P);Z&&(this._index.remove(Z),this._idByBounds.delete(Z))}this._boundsById.set(P,R),R&&(this._idByBounds.set(R,P),this._indexInvalid||(this._boundsToLoad.push(R),this._boundsToLoad.length>5e4&&this._loadIndex()))}}}}]);