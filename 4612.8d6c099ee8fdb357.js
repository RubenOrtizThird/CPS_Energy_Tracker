"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[4612],{93530:(ct,w,R)=>{function Y(){return[1,0,0,0,1,0,0,0,1]}function I(K,D,X,z,V,H,$,k,ot){return[K,D,X,z,V,H,$,k,ot]}function Z(K,D){return new Float64Array(K,D,9)}R.d(w,{a:()=>Y,c:()=>Z,f:()=>I}),Object.freeze(Object.defineProperty({__proto__:null,clone:function U(K){return[K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7],K[8]]},create:Y,createView:Z,fromValues:I},Symbol.toStringTag,{value:"Module"}))},89568:(ct,w,R)=>{function Y(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function U(D){return[D[0],D[1],D[2],D[3],D[4],D[5],D[6],D[7],D[8],D[9],D[10],D[11],D[12],D[13],D[14],D[15]]}function Z(D,X){return new Float64Array(D,X,16)}R.d(w,{I:()=>S,a:()=>Y,b:()=>U,c:()=>Z});const S=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:S,clone:U,create:Y,createView:Z,fromValues:function I(D,X,z,V,H,$,k,ot,tt,Tt,W,C,x,et,Ut,gt){return[D,X,z,V,H,$,k,ot,tt,Tt,W,C,x,et,Ut,gt]}},Symbol.toStringTag,{value:"Module"}))},7577:(ct,w,R)=>{function Y(){return[0,0,0,1]}function U(D){return[D[0],D[1],D[2],D[3]]}function Z(D,X){return new Float64Array(D,X,4)}R.d(w,{I:()=>S,a:()=>Y,b:()=>U,c:()=>Z});const S=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:S,clone:U,create:Y,createView:Z,fromValues:function I(D,X,z,V){return[D,X,z,V]}},Symbol.toStringTag,{value:"Module"}))},6671:(ct,w,R)=>{R.d(w,{a:()=>Ot,c:()=>tt,g:()=>pt,h:()=>C,j:()=>Kt,n:()=>zt}),R(14007);var U=R(4703),I=R(55117),Z=R(60838),S=R(43589),K=R(8554),D=R(70993),X=R(79516),z=R(52593),V=R(48621),H=R(69349),$=R(4267),k=R(65119);const ot=tt();function tt(){return(0,X.c)()}const Tt=D.e,W=D.e;function C(T,v=tt()){return(0,D.c)(v,T)}function Ot(T){return T[3]}function pt(T){return T}function vt(T,v,P){if(null==v||!Bt(T,v,St))return!1;let{t0:L,t1:y}=St;if((L<0||y<L&&y>0)&&(L=y),L<0)return!1;if(P){const{origin:b,direction:J}=v;P[0]=b[0]+J[0]*L,P[1]=b[1]+J[1]*L,P[2]=b[2]+J[2]*L}return!0}const St={t0:0,t1:0};function Bt(T,v,P){const{origin:L,direction:y}=v,b=jt;b[0]=L[0]-T[0],b[1]=L[1]-T[1],b[2]=L[2]-T[2];const J=y[0]*y[0]+y[1]*y[1]+y[2]*y[2];if(0===J)return!1;const nt=2*(y[0]*b[0]+y[1]*b[1]+y[2]*b[2]),at=nt*nt-4*J*(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]-T[3]*T[3]);if(at<0)return!1;const Lt=Math.sqrt(at);return P.t0=(-nt-Lt)/(2*J),P.t1=(-nt+Lt)/(2*J),!0}const jt=(0,K.c)();function Kt(T,v){return vt(T,v,null)}function yt(T,v,P){const L=k.WM.get(),y=k.MP.get();(0,S.b)(L,v.origin,v.direction);const b=Ot(T);(0,S.b)(P,L,v.origin),(0,S.i)(P,P,1/(0,S.l)(P)*b);const J=It(T,v.origin),nt=(0,$.EU)(v.origin,P);return(0,Z.c)(y,nt+J,L),(0,S.e)(P,P,y),P}function bt(T,v,P){const L=(0,S.f)(k.WM.get(),v,T),y=(0,S.i)(k.WM.get(),L,T[3]/(0,S.l)(L));return(0,S.g)(P,y,T)}function It(T,v){const P=(0,S.f)(k.WM.get(),v,T),L=(0,S.l)(P),y=Ot(T),b=y+Math.abs(y-L);return(0,I.ZF)(y/b)}const st=(0,K.c)();function ut(T,v,P,L){const y=(0,S.f)(st,v,T);switch(P){case V.R.X:{const b=(0,I.jE)(y,st)[2];return(0,S.s)(L,-Math.sin(b),Math.cos(b),0)}case V.R.Y:{const b=(0,I.jE)(y,st),J=b[1],nt=b[2],at=Math.sin(J);return(0,S.s)(L,-at*Math.cos(nt),-at*Math.sin(nt),Math.cos(J))}case V.R.Z:return(0,S.n)(L,y);default:return}}function At(T,v){const P=(0,S.f)(Ft,v,T);return(0,S.l)(P)-T[3]}function zt(T,v){const P=(0,S.a)(T,v),L=Ot(T);return P<=L*L}const Ft=(0,K.c)(),wt=tt();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ot,altitudeAt:At,angleToSilhouette:It,axisAt:ut,clear:function Ut(T){T[0]=T[1]=T[2]=T[3]=0},closestPoint:function Dt(T,v,P){return vt(T,v,P)?P:((0,H.JI)(v,T,P),bt(T,P,P))},closestPointOnSilhouette:yt,containsPoint:zt,copy:C,create:tt,distanceToSilhouette:function Yt(T,v){const P=(0,S.f)(k.WM.get(),v,T),L=(0,S.m)(P);return Math.sqrt(Math.abs(L-T[3]*T[3]))},elevate:function ht(T,v,P){return T!==P&&(0,S.c)(P,T),P[3]=T[3]+v,P},equals:W,exactEquals:Tt,fromCenterAndRadius:function x(T,v){return(0,X.f)(T[0],T[1],T[2],v)},fromRadius:function gt(T,v){return T[0]=T[1]=T[2]=0,T[3]=v,T},fromValues:function lt(T,v,P,L){return(0,X.f)(T,v,P,L)},getCenter:pt,getRadius:Ot,intersectLine:function Gt(T,v,P){const L=(0,H.zk)(v,P);if(!Bt(T,L,St))return[];const{origin:y,direction:b}=L,{t0:J,t1:nt}=St,at=Lt=>{const Wt=(0,K.c)();return(0,S.q)(Wt,y,b,Lt),bt(T,Wt,Wt)};return Math.abs(J-nt)<(0,z.g)()?[at(J)]:[at(J),at(nt)]},intersectRay:vt,intersectRayClosestSilhouette:function xt(T,v,P){if(vt(T,v,P))return P;const L=yt(T,v,k.WM.get());return(0,S.g)(P,v.origin,(0,S.i)(k.WM.get(),v.direction,(0,S.o)(v.origin,L)/(0,S.l)(v.direction))),P},intersectsRay:Kt,projectPoint:bt,setAltitudeAt:function Pt(T,v,P,L){const y=At(T,v),b=ut(T,v,V.R.Z,Ft),J=(0,S.i)(Ft,b,P-y);return(0,S.g)(L,v,J)},setExtent:function Rt(T,v,P){return U.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),T===P?P:C(T,P)},tmpSphere:wt,union:function Xt(T,v,P=tt()){const L=(0,S.o)(T,v),y=T[3],b=v[3];return L+b<y?((0,D.c)(P,T),P):L+y<b?((0,D.c)(P,v),P):((0,S.p)(P,T,v,(L+b-y)/(2*L)),P[3]=(L+y+b)/2,P)},wrap:function et(T){return T}},Symbol.toStringTag,{value:"Module"}))},38737:(ct,w,R)=>{var Y,U;R.d(w,{Y:()=>Y}),(U=Y||(Y={}))[U.KILOBYTES=1024]="KILOBYTES",U[U.MEGABYTES=1048576]="MEGABYTES",U[U.GIGABYTES=1073741824]="GIGABYTES"},16573:(ct,w,R)=>{R.d(w,{x:()=>U});var Y=R(38119);class U{constructor(S){this._allocator=S,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,Y.Y)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const S=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*I);this._items.length=Math.min(S,this._items.length),this._itemsPtr=0}_grow(){for(let S=0;S<Math.max(8,Math.min(this._items.length,I));S++)this._items.push(this._allocator())}}const I=1024},59287:(ct,w,R)=>{R.d(w,{Ue:()=>Rt,zu:()=>Dt,mJ:()=>qt}),R(55117);var U=R(43589),I=R(8554);R(70993),R(52593);function Rt(_=Ct){return[_[0],_[1],_[2],_[3]]}function Dt(_,l,O,A=0,d=Math.floor(O*(1/3)),F=Math.floor(O*(2/3))){if(O<3)return!1;l(It,A);let B=d,G=!1;for(;B<O-1&&!G;)l(st,B),B++,G=!(0,U.h)(It,st);if(!G)return!1;for(B=Math.max(B,F),G=!1;B<O&&!G;)l(ut,B),B++,(0,U.f)(At,It,st),(0,U.n)(At,At),(0,U.f)(Pt,st,ut),(0,U.n)(Pt,Pt),G=!(0,U.h)(It,ut)&&!(0,U.h)(st,ut)&&Math.abs((0,U.j)(At,Pt))<Yt;return G?(function yt(_,l,O,A=Rt()){const d=O[0]-l[0],F=O[1]-l[1],B=O[2]-l[2],G=_[0]-l[0],Q=_[1]-l[1],q=_[2]-l[2],rt=F*q-B*Q,Mt=B*G-d*q,_t=d*Q-F*G,it=rt*rt+Mt*Mt+_t*_t,Et=Math.abs(it-1)>1e-5&&it>1e-12?1/Math.sqrt(it):1;A[0]=rt*Et,A[1]=Mt*Et,A[2]=_t*Et,A[3]=-(A[0]*_[0]+A[1]*_[1]+A[2]*_[2])}(It,st,ut,_),!0):(0!==A||1!==d||2!==F)&&Dt(_,l,O,0,1,2)}R(6671),R(4267),R(65119),(0,I.c)(),(0,I.c)(),(0,I.c)(),(0,I.c)(),(0,I.c)();const Yt=.99619469809,It=(0,I.c)(),st=(0,I.c)(),ut=(0,I.c)(),At=(0,I.c)(),Pt=(0,I.c)();function qt(_){return _}(0,I.c)();const Ct=[0,0,1,0];var ft,_;(_=ft||(ft={}))[_.NONE=0]="NONE",_[_.CLAMP=1]="CLAMP",_[_.INFINITE_MIN=4]="INFINITE_MIN",_[_.INFINITE_MAX=8]="INFINITE_MAX"},69349:(ct,w,R)=>{R.d(w,{JI:()=>tt,Ue:()=>K,re:()=>z,zk:()=>H}),R(57678);var U=R(16573),I=R(43589),Z=R(8554);function K(W){return W?D((0,Z.g)(W.origin),(0,Z.g)(W.direction)):D((0,Z.c)(),(0,Z.c)())}function D(W,C){return{origin:W,direction:C}}function z(W,C){const x=Tt.get();return x.origin=W,x.direction=C,x}function H(W,C,x=K()){return(0,I.c)(x.origin,W),(0,I.f)(x.direction,C,W),x}function tt(W,C,x){const et=(0,I.j)(W.direction,(0,I.f)(x,C,W.origin));return(0,I.g)(x,W.origin,(0,I.i)(x,W.direction,et)),x}R(65119);const Tt=new U.x(()=>K())},4267:(ct,w,R)=>{R.d(w,{EU:()=>K});var Y=R(55117),U=R(43589),I=R(8554);function K(V,H){const $=(0,U.j)(V,H)/((0,U.l)(V)*(0,U.l)(H));return-(0,Y.ZF)($)}(0,I.c)(),(0,I.c)()},65119:(ct,w,R)=>{R.d(w,{MP:()=>tt,WM:()=>$});var Y=R(38737),U=R(38119),I=R(93530),Z=R(89568),S=R(7577),K=R(51675),D=R(8554),X=R(79516);class z{constructor(C,x,et){this._itemByteSize=C,this._itemCreate=x,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(et/this._itemByteSize)}get(){0===this._itemsPtr&&(0,U.Y)(()=>this._reset());const C=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=C;){const x=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let et=0;et<this._itemsPerBuffer;++et)this._items.push(this._itemCreate(x,et*this._itemByteSize));this._buffers.push(x)}return this._items[this._itemsPtr++]}_reset(){const C=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>C;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(C=V){return new z(16,K.c,C)}static createVec3f64(C=V){return new z(24,D.a,C)}static createVec4f64(C=V){return new z(32,X.a,C)}static createMat3f64(C=V){return new z(72,I.c,C)}static createMat4f64(C=V){return new z(128,Z.c,C)}static createQuatf64(C=V){return new z(32,S.c,C)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const V=4*Y.Y.KILOBYTES,$=(z.createVec2f64(),z.createVec3f64()),tt=(z.createVec4f64(),z.createMat3f64(),z.createMat4f64());z.createQuatf64()},55362:(ct,w,R)=>{var Y,I;R.d(w,{T:()=>Y}),(I=Y||(Y={})).POSITION="position",I.NORMAL="normal",I.NORMALCOMPRESSED="normalCompressed",I.UV0="uv0",I.AUXPOS1="auxpos1",I.AUXPOS2="auxpos2",I.COLOR="color",I.SYMBOLCOLOR="symbolColor",I.SIZE="size",I.TANGENT="tangent",I.OFFSET="offset",I.PERSPECTIVEDIVIDE="perspectiveDivide",I.SUBDIVISIONFACTOR="subdivisionFactor",I.COLORFEATUREATTRIBUTE="colorFeatureAttribute",I.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",I.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",I.DISTANCETOSTART="distanceToStart",I.UVMAPSPACE="uvMapSpace",I.BOUNDINGRECT="boundingRect",I.UVREGION="uvRegion",I.PROFILERIGHT="profileRight",I.PROFILEUP="profileUp",I.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",I.FEATUREVALUE="featureValue",I.INSTANCEMODELORIGINHI="instanceModelOriginHi",I.INSTANCEMODELORIGINLO="instanceModelOriginLo",I.INSTANCEMODEL="instanceModel",I.INSTANCEMODELNORMAL="instanceModelNormal",I.INSTANCECOLOR="instanceColor",I.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",I.LOCALTRANSFORM="localTransform",I.GLOBALTRANSFORM="globalTransform",I.BOUNDINGSPHERE="boundingSphere",I.MODELORIGIN="modelOrigin",I.MODELSCALEFACTORS="modelScaleFactors",I.FEATUREATTRIBUTE="featureAttribute",I.STATE="state",I.LODLEVEL="lodLevel",I.POSITION0="position0",I.POSITION1="position1",I.NORMALA="normalA",I.NORMALB="normalB",I.COMPONENTINDEX="componentIndex",I.VARIANTOFFSET="variantOffset",I.VARIANTSTROKE="variantStroke",I.VARIANTEXTENSION="variantExtension",I.SIDENESS="sideness",I.START="start",I.END="end",I.UP="up",I.EXTRUDE="extrude",I.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",I.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}}]);