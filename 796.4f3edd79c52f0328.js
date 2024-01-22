"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[796],{6118:(B,D,e)=>{e.d(D,{JZ:()=>d,RL:()=>M,eY:()=>T});var p=e(15861),c=e(79412),n=e(51006),f=e(71602),o=e(7077),P=e(64456),m=e(98634),g=e(99273),l=e(39237),u=e(17091),s=e(22784);function d(E){return E&&"render"in E}function M(E){const i=document.createElement("canvas");return i.width=E.width,i.height=E.height,E.render(i.getContext("2d")),i}class T extends P.s{constructor(i=null,h=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=h,this.source=i,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(i){this._height=i}get source(){return this._source}set source(i){null==i&&null==this._source||(this._source=i,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(i){this._width=i}beforeRender(i){super.beforeRender(i),this.updateTexture(i)}setSourceAsync(i,h){var r=this;return(0,p.Z)(function*(){null!=r._uploadStatus&&r._uploadStatus.controller.abort();const I=new AbortController,v=(0,c.hh)();return(0,c.$F)(h,()=>I.abort()),(0,c.$F)(I,R=>v.reject(R)),r._uploadStatus={controller:I,resolver:v},r.source=i,v.promise})()}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(i,h){i>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(i,h)}setTransform(i){const h=(0,n.g)(this.transforms.dvs),[r,I]=i.toScreenNoRotation([0,0],[this.x,this.y]),v=this.resolution/this.pixelRatio/i.resolution,R=v*this.width,x=v*this.height,t=Math.PI*this.rotation/180;(0,n.h)(h,h,(0,o.f)(r,I)),(0,n.h)(h,h,(0,o.f)(R/2,x/2)),(0,n.r)(h,h,-t),(0,n.h)(h,h,(0,o.f)(-R/2,-x/2)),(0,n.l)(h,h,(0,o.f)(R,x)),(0,n.m)(this.transforms.dvs,i.displayViewMat3,h)}setSamplingProfile(i){this._texture&&(i.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(i.samplingMode))}bind(i,h){this._texture&&i.bindTexture(this._texture,h)}updateTexture({context:i,painter:h}){var r=this;return(0,p.Z)(function*(){if(!r._textureInvalidated)return;if(r._textureInvalidated=!1,r._texture||(r._texture=r._createTexture(i)),!r.source)return void r._texture.setData(null);r._texture.resize(r._sourceWidth,r._sourceHeight);const I=function y(E){return d(E)?E instanceof m.Z?E.getRenderedRasterPixels()?.renderedRasterPixels:M(E):E}(r.source);try{if(null!=r._uploadStatus){const{controller:v,resolver:R}=r._uploadStatus,x={signal:v.signal},{width:t,height:a}=r,_=r._texture;yield h.textureUploadManager.enqueueTextureUpdate({data:I,texture:_,width:t,height:a},x),R.resolve(),r._uploadStatus=null}else r._texture.setData(I);r.ready()}catch(v){(0,c.H9)(v)}})()}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,f.c)()}}_createTexture(i){const h=this.immutable&&i.type===g.zO.WEBGL2,r=new s.X;return r.internalFormat=h?l.lP.RGBA8:l.VI.RGBA,r.wrapMode=l.e8.CLAMP_TO_EDGE,r.isImmutable=h,r.width=this._sourceWidth,r.height=this._sourceHeight,new u.x(i,r)}}},35244:(B,D,e)=>{e.d(D,{s:()=>l});var p=e(45425),c=e(71602),n=e(6118),f=e(13305);class o extends f.I{constructor(s,d,M,y,T,E,i=null){super(s,d,M,y,T,E),this.bitmap=new n.eY(i),this.bitmap.coordScale=[T,E],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(s){this.bitmap.beforeRender(s),super.beforeRender(s)}afterRender(s){this.bitmap.afterRender(s),super.afterRender(s)}set stencilRef(s){this.bitmap.stencilRef=s}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,c.c)(),tileMat3:(0,c.c)()}}setTransform(s){super.setTransform(s),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var P=e(88098),m=e(43101),g=e(75747);class l extends g.Z{get requiresDedicatedFBO(){return this.children.some(s=>"additive"===s.bitmap.blendFunction)}createTile(s){const d=this._tileInfoView.getTileBounds((0,p.Ue)(),s),M=this._tileInfoView.getTileResolution(s.level),[y,T]=this._tileInfoView.tileInfo.size;return new o(s,M,d[0],d[3],y,T)}prepareRenderPasses(s){const d=s.registerRenderPass({name:"bitmap (tile)",brushes:[P.U.bitmap],target:()=>this.children.map(M=>M.bitmap),drawPhase:m.jx.MAP});return[...super.prepareRenderPasses(s),d]}doRender(s){this.visible&&s.drawPhase===m.jx.MAP&&super.doRender(s)}}},98634:(B,D,e)=>{e.d(D,{Z:()=>p});class p{constructor(n,f,o){this.pixelBlock=n,this.extent=f,this.originalPixelBlock=o}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(n){const f=this.pixelBlock;if(null==f)return;const o=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??f});if(null==o.pixelBlock)return;o.pixelBlock.maskIsAlpha&&(o.pixelBlock.premultiplyAlpha=!0);const P=o.pixelBlock.getAsRGBA(),m=n.createImageData(o.pixelBlock.width,o.pixelBlock.height);m.data.set(P),n.putImageData(m,0,0)}getRenderedRasterPixels(){const n=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==n.pixelBlock?null:(n.pixelBlock.maskIsAlpha&&(n.pixelBlock.premultiplyAlpha=!0),{width:n.pixelBlock.width,height:n.pixelBlock.height,renderedRasterPixels:new Uint8Array(n.pixelBlock.getAsRGBA().buffer)})}}},75747:(B,D,e)=>{e.d(D,{Z:()=>m});var p=e(14007),c=e(43101),n=e(92311),f=e(58960),o=e(46356);const P=(g,l)=>g.key.level-l.key.level!=0?g.key.level-l.key.level:g.key.row-l.key.row!=0?g.key.row-l.key.row:g.key.col-l.key.col;class m extends n.Z{constructor(l){super(),this._tileInfoView=l}renderChildren(l){this.sortChildren(P),this.setStencilReference(l),super.renderChildren(l)}createRenderParams(l){const{state:u}=l,s=super.createRenderParams(l);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(u.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(u.scale),s}prepareRenderPasses(l){const u=super.prepareRenderPasses(l);return u.push(l.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:c.jx.DEBUG|c.jx.MAP|c.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,p.Z)("esri-tiles-debug")&&u.push(l.registerRenderPass({name:"tileInfo",brushes:[f.Z],drawPhase:c.jx.DEBUG,target:()=>this.children})),u}getStencilTarget(){return this.children}setStencilReference(l){let u=1;for(const s of this.children)s.stencilRef=u++}}},13305:(B,D,e)=>{e.d(D,{I:()=>f});var p=e(51006),c=e(64456),n=e(54529);class f extends c.s{constructor(P,m,g,l,u,s,d=u,M=s){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.Z(P),this.resolution=m,this.x=g,this.y=l,this.width=u,this.height=s,this.rangeX=d,this.rangeY=M}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(P){const m=this.resolution/(P.resolution*P.pixelRatio),g=this.transforms.tileMat3,[l,u]=P.toScreenNoRotation([0,0],[this.x,this.y]);(0,p.s)(g,this.width/this.rangeX*m,0,0,0,this.height/this.rangeY*m,0,l,u,1),(0,p.m)(this.transforms.dvs,P.displayViewMat3,g)}}},7514:(B,D,e)=>{e.r(D),e.d(D,{default:()=>x});var p=e(15861),c=e(50484),n=e(4703),f=e(79412),o=e(80543),l=(e(1535),e(57678),e(14007),e(10141)),u=e(33721),s=e(93114),d=e(93509),M=e(73430),y=e(6777),T=e(54529),E=e(87766),i=e(40394),h=e(50145),r=e(32126);const I=new Set([102113,102100,3857,3785,900913]),v=[0,0];let R=class extends((0,r.Z)((0,s.Y)((0,d.y)(h.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const t=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return t?(t.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=t.id),t):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){const t=this.tileMatrixSet?.tileInfo;t&&(this._tileInfoView=new y.Z(t),this._fetchQueue=new E.Z({tileInfoView:this._tileInfoView,concurrency:16,process:(a,_)=>this.fetchTile(a,_)}),this._tileStrategy=new i.Z({cachePolicy:"keep",resampling:!0,acquireTile:a=>this.acquireTile(a),releaseTile:a=>this.releaseTile(a),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.activeLayer.tileMatrixSets?.some(a=>(0,u.fS)(a.tileInfo?.spatialReference,t))??!1}doRefresh(){var t=this;return(0,p.Z)(function*(){if(t.attached){if(t.suspended)return t._tileStrategy.clear(),void t.requestUpdate();t._fetchQueue.reset(),t._tileStrategy.refresh(a=>t._updatingHandles.addPromise(t._enqueueTileFetch(a)))}})()}acquireTile(t){const a=this._bitmapView.createTile(t),_=a.bitmap;return[_.x,_.y]=this._tileInfoView.getTileCoords(v,a.key),_.resolution=this._tileInfoView.getTileResolution(a.key),[_.width,_.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(a)),this._bitmapView.addChild(a),this.requestUpdate(),a}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}fetchTile(t,a={}){var _=this;return(0,p.Z)(function*(){const O="tilemapCache"in _.layer?_.layer.tilemapCache:null,{signal:L,resamplingLevel:j=0}=a;if(!O)return _._fetchImage(t,L);const U=new T.Z(0,0,0,0);let A;try{yield O.fetchAvailabilityUpsample(t.level,t.row,t.col,U,{signal:L}),A=yield _._fetchImage(U,L)}catch(C){if((0,f.D_)(C))throw C;if(j<3){const S=_._tileInfoView.getTileParentId(t.id);if(S){const W=new T.Z(S),w=yield _.fetchTile(W,{...a,resamplingLevel:j+1});return(0,M.i)(_._tileInfoView,w,W,t)}}throw C}return(0,M.i)(_._tileInfoView,A,U,t)})()}canResume(){return super.canResume()&&null!==this.tileMatrixSet}_enqueueTileFetch(t){var a=this;return(0,p.Z)(function*(){if(!a._fetchQueue.has(t.key.id)){try{const _=yield a._fetchQueue.push(t.key);t.bitmap.source=_,t.bitmap.width=a._tileInfoView.tileInfo.size[0],t.bitmap.height=a._tileInfoView.tileInfo.size[1],t.once("attach",()=>a.requestUpdate())}catch(_){(0,f.D_)(_)||n.Z.getLogger(a).error(_)}a.requestUpdate()}})()}_fetchImage(t,a){var _=this;return(0,p.Z)(function*(){return _.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:a})})()}_getTileMatrixSetBySpatialReference(t){const a=this.view.spatialReference;if(!t.tileMatrixSets)return null;let _=t.tileMatrixSets.find(O=>(0,u.fS)(O.tileInfo?.spatialReference,a));return!_&&a.isWebMercator&&(_=t.tileMatrixSets.find(O=>I.has(O.tileInfo?.spatialReference.wkid??-1))),_}};(0,c._)([(0,o.Cb)({readOnly:!0})],R.prototype,"tileMatrixSet",null),R=(0,c._)([(0,l.j)("esri.views.2d.layers.WMTSLayerView2D")],R);const x=R},32126:(B,D,e)=>{e.d(D,{Z:()=>u});var p=e(50484),c=e(4703),n=e(79412),f=e(77675),o=e(80543),l=(e(1535),e(57678),e(14007),e(10141));const u=s=>{let d=class extends s{initialize(){this.addHandles((0,f.on)(()=>this.layer,"refresh",M=>{this.doRefresh(M.dataChanged).catch(y=>{(0,n.D_)(y)||c.Z.getLogger(this).error(y)})}),"RefreshableLayerView")}};return(0,p._)([(0,o.Cb)()],d.prototype,"layer",void 0),d=(0,p._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],d),d}}}]);