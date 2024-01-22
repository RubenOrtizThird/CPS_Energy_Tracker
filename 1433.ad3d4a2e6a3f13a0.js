"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[1433],{38737:(f,d,t)=>{var p,s;t.d(d,{Y:()=>p}),(s=p||(p={}))[s.KILOBYTES=1024]="KILOBYTES",s[s.MEGABYTES=1048576]="MEGABYTES",s[s.GIGABYTES=1073741824]="GIGABYTES"},77183:(f,d,t)=>{t.r(d),t.d(d,{default:()=>F});var O,p=t(15861),s=t(50484),u=t(66476),E=t(57964),C=t(30352),S=t(3233),g=t(79412),y=t(6785),l=t(80543),B=t(73018),L=(t(57678),t(14007),t(62185)),A=t(10141),I=t(7547),P=t(43814),R=t(95060),U=t(29674),j=t(13597),W=t(71413),K=t(4257),b=t(19855),G=t(27426),x=t(80099),N=t(70509),Z=t(25836),J=t(29717),V=t(22921),v=t(89713),Y=t(8966),D=t(53715),$=t(25740);const T=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=O=class extends((0,b.h)((0,J.M)((0,V.x)((0,j.Z)((0,W.O)((0,x.q)((0,N.I)((0,K.Y)((0,S.R)((0,Z.Q)((0,U.V)((0,G.N)(R.Z))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(g.r9).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo?.spatialReference)&&P.Z.fromJSON(e)}writeSublayers(e,r,a,o){if(!this.loaded||!e)return;const n=e.slice().reverse().flatten(({sublayers:c})=>c&&c.toArray().reverse()).toArray(),_=[],h={writeSublayerStructure:!1,...o};n.forEach(c=>{const M=c.write({},h);_.push(M)}),_.some(c=>Object.keys(c).length>1)&&(r.layers=_)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl?.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>(0,y.mN)(r).path):null}fetchTile(e,r,a,o={}){const{signal:n}=o,_=this.getTileUrl(e,r,a),h={responseType:"image",signal:n,query:{...this.refreshParameters}};return(0,u.Z)(_,h).then(c=>c.data)}fetchImageBitmapTile(e,r,a,o={}){var n=this;return(0,p.Z)(function*(){const{signal:_}=o;if(n.fetchTile!==O.prototype.fetchTile){const H=yield n.fetchTile(e,r,a,o);return(0,D.V)(H,e,r,a,_)}const h=n.getTileUrl(e,r,a),c={responseType:"blob",signal:_,query:{...n.refreshParameters}},{data:M}=yield(0,u.Z)(h,c);return(0,D.V)(M,e,r,a,_)})()}getTileUrl(e,r,a){const o=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,n=(0,y.B7)({...this.parsedUrl?.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),_=this.tileServers;return`${_&&_.length?_[r%_.length]:this.parsedUrl?.path}/tile/${e}/${r}/${a}${n?"?"+n:""}`}loadAll(){return(0,C.G)(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,a)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new E.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new E.Z("tile-layer:undefined-url","layer's url is not defined");const o=(0,v.Qc)(this.parsedUrl.path);if(null!=o&&"ImageServer"===o.serverType)throw new E.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,u.Z)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,a)}).then(r=>{let a=this.url;if(r.ssl&&(a=this.url=a.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,v.M8)(a))return this._fetchServerVersion(a,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!(0,v.B5)(e))return Promise.reject();const a=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,u.Z)(a,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new E.Z("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(null==e)return null;let r;e=e.toLowerCase();for(let a=0,o=T.length;a<o;a++)if(r=T[a],r.toLowerCase().includes(e))return(0,y.hF)("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(null==e)return[];const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),a=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||a?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[m]}};(0,s._)([(0,l.Cb)({readOnly:!0})],i.prototype,"attributionDataUrl",null),(0,s._)([(0,l.Cb)({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),(0,s._)([(0,l.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.Cb)({type:Boolean})],i.prototype,"resampling",void 0),(0,s._)([(0,l.Cb)()],i.prototype,"sourceJSON",void 0),(0,s._)([(0,l.Cb)({type:P.Z})],i.prototype,"spatialReference",void 0),(0,s._)([(0,L.r)("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),(0,s._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],i.prototype,"sublayers",void 0),(0,s._)([(0,I.c)("sublayers",{layers:{type:[$.Z]}})],i.prototype,"writeSublayers",null),(0,s._)([(0,l.Cb)({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),(0,s._)([(0,l.Cb)()],i.prototype,"tileServers",null),(0,s._)([(0,B.p)("tileServers")],i.prototype,"castTileServers",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),(0,s._)([(0,l.Cb)(Y.HQ)],i.prototype,"url",void 0),i=O=(0,s._)([(0,A.j)("esri.layers.TileLayer")],i);const m=Symbol("default-fetch-tile");i.prototype.fetchTile[m]=!0;const F=i}}]);