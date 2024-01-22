"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[1583],{62209:(fe,te,v)=>{v.d(te,{Z:()=>f});class f{constructor(M=[],N=[],W=!1){this.lengths=M??[],this.coords=N??[],this.hasIndeterminateRingOrder=W}static fromRect(M){const[N,W,R,y]=M,K=R-N,Z=y-W;return new f([5],[N,W,K,0,0,Z,-K,0,0,-Z])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((M,N)=>M+N)}forEachVertex(M){let N=0;this.lengths.length||M(this.coords[0],this.coords[1]);for(let W=0;W<this.lengths.length;W++){const R=this.lengths[W];for(let y=0;y<R;y++)M(this.coords[2*(y+N)],this.coords[2*(y+N)+1]);N+=R}}clone(M){return M?(M.set(this.coords),new f(this.lengths.slice(),M,this.hasIndeterminateRingOrder)):new f(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},29340:(fe,te,v)=>{v.d(te,{Z:()=>K});var f=v(55117),u=v(84176),M=v(52793),N=v(43818),W=v(43248),R=v(25896);class K{constructor(t){this._resourceManager=t,this._lazyRasterizationCanvas=null}dispose(){this._lazyRasterizationCanvas=null}get _rasterizationCanvas(){return null==this._lazyRasterizationCanvas&&(this._lazyRasterizationCanvas=document.createElement("canvas"),this._lazyRasterizationCanvas.getContext("2d",{willReadFrequently:!0})),this._lazyRasterizationCanvas}rasterizeJSONResource(t,c,s){if("simple-fill"===t.type||"esriSFS"===t.type){const[p,_,H]=(0,M.Y)(this._rasterizationCanvas,t.style,c);return{size:[_,H],image:new Uint32Array(p.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:(0,f.fp)(Math.ceil(c))}}if("simple-line"===t.type||"esriSLS"===t.type||"line"===t.type&&t.dashTemplate){let p,_;if("simple-line"===t.type||"esriSLS"===t.type)switch(p=(0,u.U1)(t.style,t.cap),t.cap){case"butt":_="Butt";break;case"square":_="Square";break;default:_="Round"}else p=t.dashTemplate,_=t.cim.capStyle;const[H,ne,G]=(0,M.m)(p,_);return{size:[ne,G],image:new Uint32Array(H.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let b,A=null,E=null,g=1;if("simple-marker"===t.type||"esriSMS"===t.type||"line-marker"===t.type?(b=u.B$.fromSimpleMarker(t),E=(0,W.Fp)(b)):t.cim&&"CIMHatchFill"===t.cim.type?(b=u.B$.fromCIMHatchFill(t.cim,c),A=new N.Z(b.frame.xmin,-b.frame.ymax,b.frame.xmax-b.frame.xmin,b.frame.ymax-b.frame.ymin),g=c):t.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===t.cim.markerPlacement.type?(b=u.B$.fromCIMInsidePolygon(t.cim),A=new N.Z(b.frame.xmin,-b.frame.ymax,b.frame.xmax-b.frame.xmin,b.frame.ymax-b.frame.ymin)):(b=t.cim,t.avoidSDFRasterization||(E=(0,W.Fp)(b))),E&&!s){const[p,_,H]=(0,W.RL)(E);return p?{size:[_,H],image:new Uint32Array(p.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:g}:null}const[Y,h,P,B,J]=u.B$.rasterize(this._rasterizationCanvas,b,A,this._resourceManager,!s);return Y?{size:[h,P],image:new Uint32Array(Y.buffer),sdf:!1,simplePattern:!1,anchorX:B,anchorY:J}:null}rasterizeImageResource(t,c,s,b){this._rasterizationCanvas.width=t,this._rasterizationCanvas.height=c;const A=this._rasterizationCanvas.getContext("2d");s instanceof ImageData?A.putImageData(s,0,0):(s.setAttribute("width",`${t}px`),s.setAttribute("height",`${c}px`),A.drawImage(s,0,0,t,c));const E=A.getImageData(0,0,t,c),g=new Uint8Array(E.data);if(b)for(const p of b)if(p&&p.oldColor&&4===p.oldColor.length&&p.newColor&&4===p.newColor.length){const[_,H,ne,G]=p.oldColor,[ue,oe,ce,se]=p.newColor;if(_===ue&&H===oe&&ne===ce&&G===se)continue;for(let q=0;q<g.length;q+=4)_===g[q]&&H===g[q+1]&&ne===g[q+2]&&G===g[q+3]&&(g[q]=ue,g[q+1]=oe,g[q+2]=ce,g[q+3]=se)}let Y;for(let p=0;p<g.length;p+=4)Y=g[p+3]/255,g[p]=g[p]*Y,g[p+1]=g[p+1]*Y,g[p+2]=g[p+2]*Y;let h=g,P=t,B=c;const J=512;if(P>=J||B>=J){const p=P/B;p>1?(P=J,B=Math.round(J/p)):(B=J,P=Math.round(J*p)),h=new Uint8Array(4*P*B);const _=new Uint8ClampedArray(h.buffer);(0,R.TT)(g,t,c,_,P,B,!1)}return{size:[P,B],image:new Uint32Array(h.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},11196:(fe,te,v)=>{var f,u,M,N,W,R,y,K,Z,t,c,s,b,A,E,g,Y,h,P,B,J,p,_,H,ne,G,ue,oe,ce,se,q,he,F,n,r,l,a,i,o,d,m,L,U,I,C,w,D,z,k,x,T,j,S,$,O,V,Q,ee,le,ae,X,e;v.d(te,{$y:()=>p,AH:()=>u,CS:()=>D,DD:()=>K,Dd:()=>ce,Em:()=>J,JS:()=>C,Ky:()=>Z,Lh:()=>z,Qb:()=>Q,RL:()=>f,RS:()=>le,TF:()=>B,Tx:()=>W,UR:()=>Y,UX:()=>V,bj:()=>w,eZ:()=>y,id:()=>ne,kP:()=>l,of:()=>c,r4:()=>d,sj:()=>a,v2:()=>M,zQ:()=>oe,zV:()=>g}),(e=f||(f={}))[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN",function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(u||(u={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(M||(M={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(N||(N={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(W||(W={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(R||(R={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(y||(y={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(K||(K={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(Z||(Z={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(t||(t={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(c||(c={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(s||(s={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(b||(b={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(A||(A={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(E||(E={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(g||(g={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(Y||(Y={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(h||(h={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(P||(P={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(B||(B={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(J||(J={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(p||(p={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(_||(_={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(H||(H={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(ne||(ne={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(G||(G={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(ue||(ue={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(oe||(oe={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(ce||(ce={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(se||(se={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(q||(q={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(he||(he={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(F||(F={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(n||(n={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(r||(r={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(l||(l={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(a||(a={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(i||(i={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(o||(o={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(d||(d={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(m||(m={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(L||(L={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(U||(U={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(I||(I={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(C||(C={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(w||(w={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(D||(D={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(z||(z={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(k||(k={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(x||(x={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(T||(T={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(j||(j={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(S||(S={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}($||($={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(O||(O={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(V||(V={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(Q||(Q={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(ee||(ee={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(le||(le={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ae||(ae={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(X||(X={}))},52793:(fe,te,v)=>{v.d(te,{Y:()=>N,m:()=>W});var f=v(11462),u=v(55117);const M=R=>"vertical"===R||"horizontal"===R||"cross"===R||"esriSFSCross"===R||"esriSFSVertical"===R||"esriSFSHorizontal"===R;function N(R,y,K){const Z=(0,u.fp)(Math.ceil(K)),t=M(y)?8*Z:16*Z,c=2*Z;R.width=t,R.height=t;const s=R.getContext("2d");s.strokeStyle="#FFFFFF",s.lineWidth=Z,s.beginPath(),"vertical"!==y&&"cross"!==y&&"esriSFSCross"!==y&&"esriSFSVertical"!==y||(s.moveTo(t/2,-c),s.lineTo(t/2,t+c)),"horizontal"!==y&&"cross"!==y&&"esriSFSCross"!==y&&"esriSFSHorizontal"!==y||(s.moveTo(-c,t/2),s.lineTo(t+c,t/2)),"forward-diagonal"!==y&&"diagonal-cross"!==y&&"esriSFSDiagonalCross"!==y&&"esriSFSForwardDiagonal"!==y||(s.moveTo(-c,-c),s.lineTo(t+c,t+c),s.moveTo(t-c,-c),s.lineTo(t+c,c),s.moveTo(-c,t-c),s.lineTo(c,t+c)),"backward-diagonal"!==y&&"diagonal-cross"!==y&&"esriSFSBackwardDiagonal"!==y&&"esriSFSDiagonalCross"!==y||(s.moveTo(t+c,-c),s.lineTo(-c,t+c),s.moveTo(c,-c),s.lineTo(-c,c),s.moveTo(t+c,t-c),s.lineTo(t-c,t+c)),s.stroke();const b=s.getImageData(0,0,R.width,R.height),A=new Uint8Array(b.data);let E;for(let g=0;g<A.length;g+=4)E=A[g+3]/255,A[g]=A[g]*E,A[g+1]=A[g+1]*E,A[g+2]=A[g+2]*E;return[A,R.width,R.height]}function W(R,y){const K="Butt"===y,Z="Square"===y,t=!K&&!Z;R.length%2==1&&(R=[...R,...R]);const c=15.5;let b=0;for(const _ of R)b+=_;const A=Math.round(b*c),E=new Float32Array(31*A),g=7.75;let Y=0,h=0,P=.5,B=!0;for(const _ of R){for(Y=h,h+=_*c;P<=h;){let H=.5;for(;H<31;){const ne=(H-.5)*A+P-.5,G=t?(H-c)*(H-c):Math.abs(H-c);E[ne]=B?K?Math.max(Math.max(Y+g-P,G),Math.max(P-h+g,G)):G:t?Math.min((P-Y)*(P-Y)+G,(P-h)*(P-h)+G):Z?Math.min(Math.max(P-Y,G),Math.max(h-P,G)):Math.min(Math.max(P-Y+g,G),Math.max(h+g-P,G)),H++}P++}B=!B}const J=E.length,p=new Uint8Array(4*J);for(let _=0;_<J;++_){const H=(t?Math.sqrt(E[_]):E[_])/c;(0,f.I)(H,p,4*_)}return[p,A,31]}},42074:(fe,te,v)=>{v.r(te),v.d(te,{previewCIMSymbol:()=>q});var f=v(15861),u=v(55768),M=v(84176),N=v(66599),W=v(66476),R=v(79412),y=v(90693),K=v(51571),Z=v(72710),t=v(29340),c=v(63419),s=v(25896),b=v(52830),A=v(94970);const E=F=>F?.scaleFactor?F.scaleFactor:1;var B=v(86336),J=v(36232);const p=new class Y{constructor(n,r){this._spatialReference=n,this._avoidSDF=r,this._resourceCache=new Map,this._lazyImageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new c.Z,this._cimResourceManager=new K.Z,this._rasterizer=new t.Z(this._cimResourceManager)}get _imageDataCanvas(){return this._lazyImageDataCanvas??=document.createElement("canvas"),this._lazyImageDataCanvas}get _imageDataContext(){return this._imageDataCanvas.getContext("2d",{willReadFrequently:!0})}get resourceManager(){return this._cimResourceManager}rasterizeCIMSymbolAsync(n,r,l,a,i,o,d,m,L){var U=this;return(0,f.Z)(function*(){if(!n)return null;const{data:I}=n;if(!I||"CIMSymbolReference"!==I.type||!I.symbol)return null;const{symbol:C}=I;o||(o=(0,s.JW)(C));const w=yield M.E0.resolveSymbolOverrides(I,r,U._spatialReference,i,o,d,m),D=U._imageDataCanvas,z=U._cimResourceManager,k=[];M.B$.fetchResources(w,z,k),M.B$.fetchFonts(w,z,k),k.length>0&&(yield Promise.all(k));const{width:x,height:T}=l,j=function h(F,n,r,l){const i=-n/2+1,o=n/2-1,d=r/2-1,m=-r/2+1;switch(F){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[i,0],[0,0],[o,0]]]};default:return"legend"===l?{rings:[[[i,d],[o,0],[o,m],[i,m],[i,d]]]}:{rings:[[[i,d],[o,d],[o,m],[i,m],[i,d]]]}}}(o,x,T,a),S=M.B$.getEnvelope(w,j,z);if(!S)return null;const $=1.3333333333333333*(window.devicePixelRatio||1);let O=1,V=0,Q=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let X=1;S.width>x&&(X=x/S.width);let e=1;S.height>T&&(e=T/S.height),"preview"===a&&(S.width<x&&(X=x/S.width),S.height<T&&(e=T/S.height)),O=Math.min(X,e),V=S.x+S.width/2,Q=S.y+S.height/2}break;case"CIMLineSymbol":{(L||S.height>T)&&(O=T/S.height),Q=S.y+S.height/2;const X=S.x*O+x/2,e=(S.x+S.width)*O+x/2,{paths:ie}=j;ie[0][0][0]-=X/O,ie[0][2][0]-=(e-x)/O}break;case"CIMPolygonSymbol":{V=S.x+S.width/2,Q=S.y+S.height/2;const X=S.x*O+x/2,e=(S.x+S.width)*O+x/2,ie=S.y*O+T/2,de=(S.y+S.height)*O+T/2,{rings:re}=j;X<0&&(re[0][0][0]-=X,re[0][3][0]-=X,re[0][4][0]-=X),ie<0&&(re[0][0][1]+=ie,re[0][1][1]+=ie,re[0][4][1]+=ie),e>x&&(re[0][1][0]-=e-x,re[0][2][0]-=e-x),de>T&&(re[0][2][1]+=de-T,re[0][3][1]+=de-T)}}D.width=x*$,D.height=T*$,D.width+=2,D.height+=2;const le=U._imageDataContext,ae=Z.zA.createIdentity();return ae.translate(-V,-Q),ae.scale(O*$,-O*$),ae.translate(x*$/2+1,T*$/2+1),le.clearRect(0,0,D.width,D.height),new Z.cD(le,z,ae,!0).drawSymbol(w,j),le.getImageData(0,0,D.width,D.height)})()}analyzeCIMSymbol3D(n,r,l,a,i){var o=this;return(0,f.Z)(function*(){const d=[],m=r?{geometryType:a,spatialReference:o._spatialReference,fields:r}:null,L=[];M.B$.fetchFonts(n.data.symbol,o._cimResourceManager,L),yield Promise.all(L);const U=new y._(o._cimResourceManager,m);let I;yield U.analyzeSymbolReference(n.data,o._avoidSDF,d),(0,R.k_)(i);for(const C of d)"CIMPictureMarker"!==C.cim.type&&"CIMPictureFill"!==C.cim.type&&"CIMPictureStroke"!==C.cim.type||(I||(I=[]),I.push(o._fetchPictureMarkerResource(C,i))),l&&"text"===C.type&&"string"==typeof C.text&&C.text.includes("[")&&(C.text=(0,s.Qs)(l,C.text,C.cim.textCase));return I&&(yield Promise.all(I)),d})()}rasterizeCIMSymbol3D(n,r,l,a,i,o){const d=[];for(const m of n){a&&"function"==typeof a.scaleFactor&&(a.scaleFactor=a.scaleFactor(r,i,o));const L=this._getRasterizedResource(m,r,l,a,i,o);if(!L)continue;let U=0,I=L.anchorX||0,C=L.anchorY||0,w=!1,D=0,z=0;if("esriGeometryPoint"===l){const k=E(a);if(D=(0,s.hf)(m.offsetX,r,i,o)*k||0,z=(0,s.hf)(m.offsetY,r,i,o)*k||0,"marker"===m.type)U=(0,s.hf)(m.rotation,r,i,o)||0,w=m.rotateClockwise??!1;else if("text"===m.type){if(U=(0,s.hf)(m.angle,r,i,o)||0,void 0!==m.horizontalAlignment)switch(m.horizontalAlignment){case"left":I=-.5;break;case"right":I=.5;break;default:I=0}if(void 0!==m.verticalAlignment)switch(m.verticalAlignment){case"top":C=.5;break;case"bottom":C=-.5;break;case"baseline":C=-.25;break;default:C=0}}}null!=L&&d.push({angle:U,rotateClockWise:w,anchorX:I,anchorY:C,offsetX:D,offsetY:z,rasterizedResource:L})}return this.getSymbolImage(d)}getSymbolImage(n){const r=document.createElement("canvas"),l=r.getContext("2d");let a=0,i=0,o=0,d=0;const m=[];for(let C=0;C<n.length;C++){const w=n[C],D=w.rasterizedResource;if(!D)continue;const z=D.size,k=w.offsetX,x=w.offsetY,T=w.anchorX,j=w.anchorY,S=w.rotateClockWise||!1;let $=w.angle,O=(0,u.F2)(k)-z[0]*(.5+T),V=(0,u.F2)(x)-z[1]*(.5+j),Q=O+z[0],ee=V+z[1];if($){S&&($=-$);const X=Math.sin($*Math.PI/180),e=Math.cos($*Math.PI/180),ie=O*e-V*X,de=O*X+V*e,re=O*e-ee*X,me=O*X+ee*e,ge=Q*e-ee*X,pe=Q*X+ee*e,ye=Q*e-V*X,Ce=Q*X+V*e;O=Math.min(ie,re,ge,ye),V=Math.min(de,me,pe,Ce),Q=Math.max(ie,re,ge,ye),ee=Math.max(de,me,pe,Ce)}a=O<a?O:a,i=V<i?V:i,o=Q>o?Q:o,d=ee>d?ee:d;const le=l.createImageData(D.size[0],D.size[1]);le.data.set(new Uint8ClampedArray(D.image.buffer)),m.push({offsetX:k,offsetY:x,rotateClockwise:S,angle:$,rasterizedImage:le,anchorX:T,anchorY:j})}r.width=o-a,r.height=d-i;const L=-a,U=d;for(let C=0;C<m.length;C++){const w=m[C],D=this._imageDataToCanvas(w.rasterizedImage),x=L-w.rasterizedImage.width*(.5+w.anchorX),T=U-w.rasterizedImage.height*(.5-w.anchorY);if(w.angle){const j=(360-w.angle)*Math.PI/180;l.save(),l.translate((0,u.F2)(w.offsetX),-(0,u.F2)(w.offsetY)),l.translate(L,U),l.rotate(j),l.translate(-L,-U),l.drawImage(D,x,T),l.restore()}else l.drawImage(D,x+(0,u.F2)(w.offsetX),T-(0,u.F2)(w.offsetY))}const I=new A.e({x:L/r.width-.5,y:U/r.height-.5});return{imageData:0!==r.width&&0!==r.height?l.getImageData(0,0,r.width,r.height):l.createImageData(1,1),anchorPosition:I}}_fetchPictureMarkerResource(n,r){var l=this;return(0,f.Z)(function*(){const a=n.materialHash;if(!l._pictureMarkerCache.get(a)){const i=(yield(0,W.Z)(n.cim.url,{responseType:"image",signal:r?.signal})).data;l._pictureMarkerCache.set(a,i)}})()}_imageDataToCanvas(n){const r=this._imageDataCanvas,l=this._imageDataContext;return r.width=n.width,r.height=n.height,l.putImageData(n,0,0),r}_imageTo32Array(n,r,l,a){const i=this._imageDataCanvas,o=this._imageDataContext;if(i.width=r,i.height=l,o.drawImage(n,0,0,r,l),a){o.save();const d=new N.Z(a);o.fillStyle=d.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,r,l),o.globalCompositeOperation="destination-atop",o.drawImage(n,0,0,r,l),o.restore()}return new Uint32Array(o.getImageData(0,0,r,l).data.buffer)}_getRasterizedResource(n,r,l,a,i,o){let d,m,L;if("text"===n.type)return this._rasterizeTextResource(n,r,a,i,o);({analyzedCIM:d,hash:m}=function P(F,n,r,l){let a,i;return"function"==typeof F.materialHash?(a=(0,F.materialHash)(n,r,l),i=(0,y.S)(F.cim,F.materialOverrides)):(a=F.materialHash,i=F.cim),{analyzedCIM:i,hash:a}}(n,r,i,o));const C=E(a);if("CIMPictureMarker"===n.cim.type){const z=(0,s.hf)(n.size,r,i,o)*C,{image:k,width:x,height:T}=this._getPictureResource(n,z,(0,s.hf)(n.color,r,i,o));return L={image:k,size:[x,T],sdf:!1,simplePattern:!1,anchorX:n.anchorPoint?n.anchorPoint.x:0,anchorY:n.anchorPoint?n.anchorPoint.y:0},L}(0,b.FW)(d,C,{preserveOutlineWidth:!1});const w=d;m+=l,a&&(m+=JSON.stringify(a));const D=this._resourceCache;return D.has(m)?D.get(m):(L=this._rasterizer.rasterizeJSONResource({cim:w,type:n.type,url:n.url,mosaicHash:m,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),D.set(m,L),L)}_rasterizeTextResource(n,r,l,a,i){const o=E(l),d=(0,s.hf)(n.text,r,a,i);if(!d||0===d.length)return null;const m=n.cim,L=(0,s.hf)(m?.fontFamilyName||n.fontName,r,a,i),U=(0,s.hf)(m?.font?.style||n.style,r,a,i),I=(0,s.hf)(m?.font?.weight||n.weight,r,a,i),C=(0,s.hf)(m?.font?.decoration||n.decoration,r,a,i),w=(0,s.hf)(n.size,r,a,i)*o,D=(0,s.hf)(n.horizontalAlignment,r,a,i),z=(0,s.hf)(n.verticalAlignment,r,a,i),k=(0,s.nn)((0,s.hf)(n.color,r,a,i)),x=(0,s.nn)((0,s.hf)(n.outlineColor,r,a,i)),T=(0,s.hf)(n.outlineSize,r,a,i),j=null!=n.backgroundColor?(0,s.nn)(n.backgroundColor):null,S=null!=n.borderLineColor?(0,s.nn)(n.borderLineColor):null,$=null!=n.borderLineWidth?n.borderLineWidth:null;return this._textRasterizer.rasterizeText(d,{color:k,size:w,horizontalAlignment:D,verticalAlignment:z,font:{family:L,style:U,weight:I,decoration:C},halo:{size:T||0,color:x,style:U},backgroundColor:j,borderLine:null!=S&&null!=$?{color:S,size:$}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF})}_getPictureResource(n,r,l){const a=this._pictureMarkerCache.get(n.materialHash);if(!a)return null;const i=a.height/a.width,o=r?i>1?(0,u.F2)(r):(0,u.F2)(r)/i:a.width,d=r?i>1?(0,u.F2)(r)*i:(0,u.F2)(r):a.height;return{image:this._imageTo32Array(a,o,d,l),width:o,height:d}}}(null,!0),_=(0,u.Wz)(B.b_.size),H=(0,u.Wz)(B.b_.maxSize),ne=(0,u.Wz)(B.b_.lineWidth),G=1;function oe(){return oe=(0,f.Z)(function*(F,n,r){const l=n?.size;let a=null!=l&&"object"==typeof l&&"width"in l?l.width:l,i=null!=l&&"object"==typeof l&&"height"in l?l.height:l;if(null==a||null==i)if("esriGeometryPolygon"===r)a=_,i=_;else{const o=yield function ce(F,n,r){return se.apply(this,arguments)}(F,n,r);o&&(a=o.width,i=o.height),"esriGeometryPolyline"===r&&(a=ne),a=null!=a&&isFinite(a)?Math.min(a,H):_,i=null!=i&&isFinite(i)?Math.max(Math.min(i,H),G):_}return"legend"===n.style&&"esriGeometryPolyline"===r&&(a=ne),{width:a,height:i}}),oe.apply(this,arguments)}function se(){return(se=(0,f.Z)(function*(F,n,r){const{feature:l,fieldMap:a,viewParams:i}=n.cimOptions||n,o=yield M.E0.resolveSymbolOverrides(F.data,l,null,a,r,null,i);if(!o)return null;(F=F.clone()).data={type:"CIMSymbolReference",symbol:o},F.data.primitiveOverrides=void 0;const d=[];return M.B$.fetchResources(o,p.resourceManager,d),M.B$.fetchFonts(o,p.resourceManager,d),d.length>0&&(yield Promise.all(d)),M.B$.getEnvelope(o,null,p.resourceManager)})).apply(this,arguments)}function q(F){return he.apply(this,arguments)}function he(){return he=(0,f.Z)(function*(F,n={}){const{node:r,opacity:l,symbolConfig:a}=n,i=null!=a&&"object"==typeof a&&"isSquareFill"in a&&a.isSquareFill,o=n.cimOptions||n,d=o.geometryType||(0,s.JW)(F?.data?.symbol),m=yield function ue(F,n,r){return oe.apply(this,arguments)}(F,n,d),{feature:L,fieldMap:U}=o,I=i||"esriGeometryPolygon"!==d?"preview":"legend",C=yield p.rasterizeCIMSymbolAsync(F,L,m,I,U,d,null,o.viewParams,o.allowScalingUp);if(!C)return null;const{width:w,height:D}=C,z=document.createElement("canvas");z.width=w,z.height=D,z.getContext("2d").putImageData(C,0,0);const k=(0,u.F2)(m.width),x=(0,u.F2)(m.height),T=new Image(k,x);T.src=z.toDataURL(),T.ariaLabel=n.ariaLabel??null,T.alt=n.ariaLabel??"",null!=l&&(T.style.opacity=`${l}`);let j=T;return null!=n.effectView&&(j=(0,J.wh)([[{shape:{type:"image",x:0,y:0,width:k,height:x,src:T.src},fill:null,stroke:null,offset:[0,0]}]],[k,x],{effectView:n.effectView,ariaLabel:n.ariaLabel})),r&&j&&r.appendChild(j),j}),he.apply(this,arguments)}},13948:(fe,te,v)=>{var f,u,t;function M(t){switch(t){case"left":return f.Left;case"right":return f.Right;case"center":return f.Center}}function N(t){switch(t){case"top":return u.Top;case"middle":return u.Center;case"baseline":return u.Baseline;case"bottom":return u.Bottom}}function W(t){switch(t){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[f.Right,u.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[f.Center,u.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[f.Left,u.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[f.Right,u.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[f.Center,u.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[f.Left,u.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[f.Right,u.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[f.Center,u.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[f.Left,u.Top];default:return console.debug(`Found invalid placement type ${t}`),[f.Center,u.Center]}}function R(t){switch(t){case f.Right:return-1;case f.Center:return 0;case f.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${t}`),0}}function y(t){switch(t){case u.Top:return 1;case u.Center:return 0;case u.Bottom:case u.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${t}`),0}}function K(t){switch(t){case"left":return f.Left;case"right":return f.Right;case"center":return f.Center}}function Z(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}v.d(te,{Hd:()=>K,M7:()=>f,NS:()=>Z,TR:()=>u,b7:()=>N,g:()=>R,kH:()=>M,qv:()=>W,tf:()=>y}),(t=f||(f={}))[t.Left=-1]="Left",t[t.Center=0]="Center",t[t.Right=1]="Right",function(t){t[t.Top=1]="Top",t[t.Center=0]="Center",t[t.Bottom=-1]="Bottom",t[t.Baseline=2]="Baseline"}(u||(u={}))},99657:(fe,te,v)=>{v.d(te,{$6:()=>Ce,$y:()=>r,BB:()=>x,Cj:()=>ie,FM:()=>Fe,Fn:()=>z,GS:()=>Me,Ib:()=>q,Im:()=>l,JS:()=>me,KA:()=>ge,Kg:()=>t,Kt:()=>ce,NG:()=>De,NS:()=>k,Of:()=>m,Pp:()=>E,S:()=>I,SQ:()=>pe,Sf:()=>d,T3:()=>e,U8:()=>C,Ux:()=>Re,Uz:()=>_e,Vo:()=>ee,WD:()=>we,Wq:()=>Pe,XO:()=>he,XT:()=>G,Zt:()=>o,_E:()=>Q,ad:()=>s,av:()=>Te,b7:()=>ue,dD:()=>V,do:()=>$,g3:()=>T,gV:()=>be,gr:()=>R,i9:()=>y,iD:()=>ne,j9:()=>U,jS:()=>F,k9:()=>N,kU:()=>j,mb:()=>w,nY:()=>O,o2:()=>a,oh:()=>c,pZ:()=>Se,pb:()=>i,qu:()=>X,rL:()=>ve,s4:()=>ae,tg:()=>n,uk:()=>Y,vk:()=>L,wJ:()=>se,x_:()=>g,yc:()=>ye,zE:()=>xe});var f=v(14007);const N=1e-30,R=4294967295,y=512,t=128,c=511,s=16777216,E=8,g=10,Y=29,ne=24,G=8,ue={metrics:{width:15,height:17,left:0,top:-7,advance:14}},ce=0,se=0,q=0,he=1,F=2,n=3,r=4,l=5,a=6,i=12,o=5,d=6,m=5,L=6,U=0,I=1,C=2,w=3,z=4,k=2,x=1,T=2,j=4,$=1.05,O=(0,f.Z)("featurelayer-force-marker-text-draw-order")?.5:3,V=5,Q=6,ee=1.15,ae=2,X=128-2*ae,e=8,ie=500,me=10,ge=1024,pe=2,ye=0,Ce=1,Se=4,ve=8,Me=16,Pe=4,we=1,Re=4,Te=8,be=32,xe=64,_e=128,De=4,Fe=2},10264:(fe,te,v)=>{v.d(te,{Au:()=>s,Jz:()=>E,UJ:()=>A});const f=new Float32Array(1);function s(h){return[255&h,(65280&h)>>>8,(16711680&h)>>>16,(4278190080&h)>>>24]}function A(h,P){return 65535&h|P<<16}function E(h,P,B,J){return 255&h|(255&P)<<8|(255&B)<<16|J<<24}new Uint32Array(f.buffer)}}]);