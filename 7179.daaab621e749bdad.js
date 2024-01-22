"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[7179,3715],{67179:(ce,J,n)=>{n.r(J),n.d(J,{default:()=>qe});var q,L=n(15861),a=n(50484),E=n(66476),b=n(57678),S=n(83944),I=n(57964),A=n(34222),B=n(3233),U=n(71763),F=n(79412),M=n(77675),j=n(6785),u=n(80543),K=(n(1535),n(62185)),X=n(10141),we=n(7547),$=n(26894),Me=n(95060),Ce=n(54556),Ie=n(19855),Te=n(80099),Le=n(70509),Ee=n(25836),be=n(29717),de=n(53715),k=n(30220),Pe=n(58296),Oe=n(1340),_=n(89317);n(14007);let H=q=class extends _.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new q;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,a._)([(0,u.Cb)({type:$.Z,json:{read:{source:"fullExtent"}}})],H.prototype,"fullExtent",void 0),(0,a._)([(0,u.Cb)({type:String,json:{read:{source:"id"}}})],H.prototype,"id",void 0),(0,a._)([(0,u.Cb)({type:k.Z,json:{read:{source:"tileInfo"}}})],H.prototype,"tileInfo",void 0),H=q=(0,a._)([(0,X.j)("esri.layer.support.TileMatrixSet")],H);const Re=H;var ee;let V=ee=class extends _.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new ee;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,a._)([(0,u.Cb)({json:{read:{source:"id"}}})],V.prototype,"id",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"title"}}})],V.prototype,"title",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"abstract"}}})],V.prototype,"description",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"legendUrl"}}})],V.prototype,"legendUrl",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"isDefault"}}})],V.prototype,"isDefault",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"keywords"}}})],V.prototype,"keywords",void 0),V=ee=(0,a._)([(0,X.j)("esri.layer.support.WMTSStyle")],V);const Ae=V;var te;let v=te=class extends _.wq{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?$.Z.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map(r=>$.Z.fromJSON(r)):t.tileMatrixSets?.map(r=>$.Z.fromJSON(r.fullExtent)).filter(r=>r)??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.at(0)?.id??""),e}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new te;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent?.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles?.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,a._)([(0,u.Cb)()],v.prototype,"description",void 0),(0,a._)([(0,u.Cb)()],v.prototype,"fullExtent",void 0),(0,a._)([(0,K.r)("fullExtent",["fullExtent"])],v.prototype,"readFullExtent",null),(0,a._)([(0,u.Cb)({readOnly:!0})],v.prototype,"fullExtents",void 0),(0,a._)([(0,K.r)("fullExtents",["fullExtents","tileMatrixSets"])],v.prototype,"readFullExtents",null),(0,a._)([(0,u.Cb)()],v.prototype,"id",void 0),(0,a._)([(0,u.Cb)()],v.prototype,"imageFormat",null),(0,a._)([(0,u.Cb)({json:{read:{source:"formats"}}})],v.prototype,"imageFormats",void 0),(0,a._)([(0,u.Cb)()],v.prototype,"layer",void 0),(0,a._)([(0,u.Cb)()],v.prototype,"parent",void 0),(0,a._)([(0,u.Cb)()],v.prototype,"styleId",null),(0,a._)([(0,u.Cb)({type:S.Z.ofType(Ae),json:{read:{source:"styles"}}})],v.prototype,"styles",void 0),(0,a._)([(0,u.Cb)({json:{write:{ignoreOrigin:!0}}})],v.prototype,"title",void 0),(0,a._)([(0,u.Cb)()],v.prototype,"tileMatrixSetId",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],v.prototype,"tileMatrixSet",null),(0,a._)([(0,u.Cb)({type:S.Z.ofType(Re),json:{read:{source:"tileMatrixSets"}}})],v.prototype,"tileMatrixSets",void 0),v=te=(0,a._)([(0,X.j)("esri.layers.support.WMTSSublayer")],v);const Y=v;var Ue=n(82921),Fe=n(85039),re=n(74359),ie=n(74623),me=n(85401),je=n(8321);const ye=90.71428571428571;function he(e){const t=e.replaceAll(/ows:/gi,"");if(!g("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new I.Z("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function se(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(se(i)&&i.nodeName===e)return i}return null}function N(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];se(s)&&s.nodeName===e&&r.push(s)}return r}function G(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];se(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(b.pC)}function h(e,t){return e.split(">").forEach(r=>{t&&(t=g(r,t))}),t&&t.textContent}function z(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(o=>{if(o.nodeName.includes(e)){const l=g(t,o),c=l?.textContent;if(c===r||r.split(":")&&r.split(":")[1]===c)return s=o,!0}return!1}),s}function fe(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=N("ResourceURL",i),o=N("Dimension",i);let l,c,p,y;return o.length&&(l=h("Identifier",o[0]),c=G("Default",o[0])||G("Value",o[0])),o.length>1&&(p=h("Identifier",o[1]),y=G("Default",o[1])||G("Value",o[1])),e.dimensionMap.set(t,{dimensions:c,dimensions2:y}),s.forEach(f=>{let d=f.getAttribute("template");if("tile"===f.getAttribute("resourceType")){if(l&&c.length)if(d.includes("{"+l+"}"))d=d.replace("{"+l+"}","{dimensionValue}");else{const x=d.toLowerCase().indexOf("{"+l.toLowerCase()+"}");x>-1&&(d=d.substring(0,x)+"{dimensionValue}"+d.substring(x+l.length+2))}if(p&&y.length)if(d.includes("{"+p+"}"))d=d.replace("{"+p+"}","{dimensionValue2}");else{const x=d.toLowerCase().indexOf("{"+p.toLowerCase()+"}");x>-1&&(d=d.substring(0,x)+"{dimensionValue2}"+d.substring(x+p.length+2))}r.push({template:d,format:f.getAttribute("format"),resourceType:"tile"})}}),r}function Ke(e){const t=g("WGS84BoundingBox",e),r=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function $e(e){const t=[];return(0,me.h)(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=le(i),o=i.includes("epsg")&&(0,ie.A)(s.wkid);let l,c,p,y;(0,me.h)(r,{LowerCorner:f=>{[l,c]=f.textContent.split(" ").map(d=>Number.parseFloat(d)),o&&([l,c]=[c,l])},UpperCorner:f=>{[p,y]=f.textContent.split(" ").map(d=>Number.parseFloat(d)),o&&([p,y]=[y,p])}}),t.push({xmin:l,ymin:c,xmax:p,ymax:y,spatialReference:s})}}),t}function Ge(e,t){return N("Style",e).map(r=>{const i=g("LegendURL",r),s=g("Keywords",r),o=s?G("Keyword",s):[];let l=i&&i.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:h("Abstract",r),id:h("Identifier",r),isDefault:"true"===r.getAttribute("isDefault"),keywords:o,legendUrl:l,title:h("Title",r)}})}function Je(e,t,r){return N("TileMatrixSetLink",t).map(i=>function He(e,t,r){const i=g("TileMatrixSet",t).textContent,s=G("TileMatrix",t),o=r.find(T=>{const P=g("Identifier",T),D=P?.textContent;return!!(D===i||i.split(":")&&i.split(":")[1]===D)}),l=g("TileMatrixSetLimits",t),c=l&&N("TileMatrixLimits",l),p=new Map;if(c?.length)for(const T of c){const P=g("TileMatrix",T).textContent,D=+g("MinTileRow",T).textContent,ae=+g("MaxTileRow",T).textContent,ne=+g("MinTileCol",T).textContent,ue=+g("MaxTileCol",T).textContent;p.set(P,{minCol:ne,maxCol:ue,minRow:D,maxRow:ae})}const y=h("SupportedCRS",o).toLowerCase(),f=function Ye(e,t){return ge(g("TileMatrix",e),t)}(o,y),d=f.spatialReference,x=g("TileMatrix",o),O=[parseInt(h("TileWidth",x),10),parseInt(h("TileHeight",x),10)],C=[];s.length?s.forEach((T,P)=>{const D=z("TileMatrix","Identifier",T,o);C.push(ve(D,y,P,i,p))}):N("TileMatrix",o).forEach((T,P)=>{C.push(ve(T,y,P,i,p))});const w=function ze(e,t,r,i,s){const o=g("BoundingBox",t);let l,c,p,y,f,d;if(o&&(l=h("LowerCorner",o).split(" "),c=h("UpperCorner",o).split(" ")),l&&l.length>1&&c&&c.length>1)p=parseFloat(l[0]),f=parseFloat(l[1]),y=parseFloat(c[0]),d=parseFloat(c[1]);else{const x=g("TileMatrix",t),O=parseInt(h("MatrixWidth",x),10),C=parseInt(h("MatrixHeight",x),10);p=r.x,d=r.y,y=p+O*i[0]*s.resolution,f=d-C*i[1]*s.resolution}return function Qe(e,t,r){return"1.0.0"===e&&(0,ie.A)(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new $.Z(f,p,d,y,r.spatialReference):new $.Z(p,f,y,d,r.spatialReference)}(e,o,f,O,C[0]).toJSON(),W=new k.Z({dpi:96,spatialReference:d,size:O,origin:f,lods:C}).toJSON();return{id:i,fullExtent:w,tileInfo:W}}(e,i,r))}function le(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function Xe(e){return e.includes("crs84")||e.includes("crs:84")?Q.CRS84:e.includes("crs83")||e.includes("crs:83")?Q.CRS83:e.includes("crs27")||e.includes("crs:27")?Q.CRS27:null}(e);return null!=r&&(t=r),{wkid:t}}function ge(e,t){const r=le(t),[i,s]=h("TopLeftCorner",e).split(" ").map(l=>parseFloat(l)),o=t.includes("epsg")&&(0,ie.A)(r.wkid);return new Fe.Z(o?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}var Q,e,oe;function ve(e,t,r,i,s){const o=le(t),l=h("Identifier",e);let c=parseFloat(h("ScaleDenominator",e));const p=xe(o.wkid,c,i);c*=96/ye;const y=+h("MatrixWidth",e),f=+h("MatrixHeight",e),{maxCol:d=y-1,maxRow:x=f-1,minCol:O=0,minRow:C=0}=s.get(l)??{},{x:w,y:W}=ge(e,t);return new je.Z({cols:[O,d],level:r,levelValue:l,origin:[w,W],scale:c,resolution:p,rows:[C,x]})}function xe(e,t,r){let i;return i=re.Z.hasOwnProperty(""+e)?re.Z.values[re.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,Ue.e8)(e).metersPerDegree,7*t/25e3/i}(e=Q||(Q={}))[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27";const Se={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ke=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let m=oe=class extends((0,Ie.h)((0,Ee.Q)((0,be.M)((0,Te.q)((0,Le.I)((0,B.R)(Me.Z))))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,M.YP)(()=>this.activeLayer,(t,r)=>{r&&!this.sublayers?.includes(r)&&(r.layer=null,r.parent=null),t&&(t.layer=this,t.parent=this)},M.Z_),(0,M.on)(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this,t.parent=this},M.Z_),(0,M.on)(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null,t.parent=null},M.Z_),(0,M.YP)(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null,i.parent=null;if(t)for(const i of t)i.layer=this,i.parent=this},M.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(F.r9).then(()=>this._fetchService(e)).catch(t=>{throw(0,F.r9)(t),new I.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new Y);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,o=i?.layerIdentifier;let l=null;const c=i?.tileMatrixSet;c&&(Array.isArray(c)?c.length&&(l=c[0]):l=c);const p=s?.format,y=s?.style;return new Y({id:o,imageFormat:p,styleId:y,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const o=(0,U.hS)("tileMatrixSet.tileInfo",s);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function _e(e,t){return e.map(r=>{const i=new Y;return i.read(r,t),i})}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map(e=>e.tileInfo?.spatialReference).toArray().filter(b.pC)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new Pe.Z(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r?.tileInfo,s=e.fullExtent,o=new Oe.B({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new Ce.default({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:o})}fetchTile(e,t,r,i={}){var s=this;return(0,L.Z)(function*(){const{signal:o}=i,l=s.getTileUrl(e,t,r),{data:c}=yield(0,E.Z)(l,{responseType:"image",signal:o});return c})()}fetchImageBitmapTile(e,t,r,i={}){var s=this;return(0,L.Z)(function*(){const{signal:o}=i;if(s.fetchTile!==oe.prototype.fetchTile){const p=yield s.fetchTile(e,t,r,i);return(0,de.V)(p,e,t,r,o)}const l=s.getTileUrl(e,t,r),{data:c}=yield(0,E.Z)(l,{responseType:"blob",signal:o});return(0,de.V)(c,e,t,r,o)})()}findSublayerById(e){return this.sublayers?.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=i?.tileInfo?.lods[e],o=s?s.levelValue||`${s.level}`:`${e}`;let l=this.resourceInfo?"":function We(e,t,r,i,s,o,l,c){const p=function De(e,t,r){const i=fe(e,t),s=i?.filter(o=>o.format===r);return(s?.length?s:i)??[]}(e,t,i);if(!(p?.length>0))return"";const{dimensionMap:y}=e,f=y.get(t).dimensions?.[0],d=y.get(t).dimensions2?.[0];return p[l%p.length].template.replaceAll(/\{Style\}/gi,s??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,o).replaceAll(/\{TileRow\}/gi,""+l).replaceAll(/\{TileCol\}/gi,""+c).replaceAll(/\{dimensionValue\}/gi,f).replaceAll(/\{dimensionValue2\}/gi,d)}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,o).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=function Be(e,t,r,i){const{dimensionMap:s}=e,o=fe(e,t);let l="";if(o&&o.length>0){const c=s.get(t).dimensions?.[0],p=s.get(t).dimensions2?.[0];l=o[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,-4)),l=l.replaceAll(/\{Style\}/gi,i),l=l.replaceAll(/\{TileMatrixSet\}/gi,r),l=l.replaceAll(/\{TileMatrix\}/gi,"{level}"),l=l.replaceAll(/\{TileRow\}/gi,"{row}"),l=l.replaceAll(/\{TileCol\}/gi,"{col}"),l=l.replaceAll(/\{dimensionValue\}/gi,c),l=l.replaceAll(/\{dimensionValue2\}/gi,p)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return Se[r.toLowerCase()]&&(s=Se[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}_fetchService(e){var t=this;return(0,L.Z)(function*(){let r;if(t.resourceInfo)"KVP"===t.resourceInfo.serviceMode&&(t.url+=t.url.includes("?")?"":"?"),r={ssl:!1,data:t.resourceInfo};else try{r=yield t._getCapabilities(t.serviceMode,e),he(r.data)}catch{const i="KVP"===t.serviceMode?"RESTful":"KVP";try{r=yield t._getCapabilities(i,e),he(r.data),t.serviceMode=i}catch(s){throw new I.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:s})}}r.data=t.resourceInfo?function Ze(e){return e.layers.forEach(t=>{t.tileMatrixSets?.forEach(r=>{const i=r.tileInfo;i&&96!==i.dpi&&(i.lods?.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=xe(i.spatialReference?.wkid,s.scale*ye/96,r.id)}),i.dpi=96)})}),e}(r.data):function Ve(e,t){e=e.replaceAll(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,o=g("Contents",r);if(!o)throw new I.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const l=g("OperationsMetadata",r),c=l?.querySelector("[name='GetTile']"),p=c?.getElementsByTagName("Get"),y=p&&Array.prototype.slice.call(p),f=t.url?.indexOf("https"),d=void 0!==f&&f>-1;let x,O,C=t.serviceMode,w=t?.url;y?.length&&y.some(Z=>{const R=g("Constraint",Z);return!R||z("AllowedValues","Value",C,R)?(w=Z.attributes[0].nodeValue,!0):(!R||z("AllowedValues","Value","RESTful",R)||z("AllowedValues","Value","REST",R)?O=Z.attributes[0].nodeValue:R&&!z("AllowedValues","Value","KVP",R)||(x=Z.attributes[0].nodeValue),!1)}),!w&&(O?(w=O,C="RESTful"):x?(w=x,C="KVP"):w=g("ServiceMetadataURL",r)?.getAttribute("xlink:href"));const W=w.indexOf("1.0.0/");-1===W&&"RESTful"===C?w+="/":W>-1&&(w=w.substring(0,W)),"KVP"===C&&(w+=W>-1?"":"?"),d&&(w=w.replace(/^http:/i,"https:"));const T=h("ServiceIdentification>ServiceTypeVersion",r),P=h("ServiceIdentification>AccessConstraints",r),D=P&&/^none$/i.test(P)?null:P,ae=N("Layer",o),ne=N("TileMatrixSet",o),ue=ae.map(Z=>{const R=h("Identifier",Z);return i.set(R,Z),function Ne(e,t,r,i,s){const o=h("Abstract",t),l=G("Format",t);return{id:e,fullExtent:Ke(t),fullExtents:$e(t),description:o,formats:l,styles:Ge(t,i),title:h("Title",t),tileMatrixSets:Je(s,t,r)}}(R,Z,ne,d,T)});return{copyright:D,dimensionMap:s,layerMap:i,layers:ue,serviceMode:C,tileUrl:w}}(r.data,{serviceMode:t.serviceMode,url:t.url}),r.data&&t.read(r.data,{origin:"service"})})()}_getCapabilities(e,t){var r=this;return(0,L.Z)(function*(){const i=r._getCapabilitiesUrl(e);return yield(0,E.Z)(i,{...t,responseType:"text"})})()}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find(i=>i.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,A.d9)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,j.mN)(e),i={...r.query,...t},s=(0,j.B7)(i);return""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=(0,j.mN)(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const r=`/${this.version}/WMTSCapabilities.xml`,i=new RegExp(r,"i");t=t.replace(i,""),t+=r;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,j.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?(0,A.d9)(e):{},i.forEach(s=>{e.hasOwnProperty(s)||ke.has(s)||(e[s]=r[s])}))}return e}};(0,a._)([(0,u.Cb)()],m.prototype,"dimensionMap",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"layerMap",void 0),(0,a._)([(0,u.Cb)({type:Y,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],m.prototype,"activeLayer",void 0),(0,a._)([(0,K.r)("service","activeLayer",["layers"])],m.prototype,"readActiveLayerFromService",null),(0,a._)([(0,K.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],m.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,a._)([(0,we.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:k.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],m.prototype,"writeActiveLayer",null),(0,a._)([(0,u.Cb)({type:String,value:"",json:{write:!0}})],m.prototype,"copyright",void 0),(0,a._)([(0,u.Cb)({type:["show","hide"]})],m.prototype,"listMode",void 0),(0,a._)([(0,u.Cb)({json:{read:!0,write:!0}})],m.prototype,"blendMode",void 0),(0,a._)([(0,u.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],m.prototype,"customParameters",void 0),(0,a._)([(0,K.r)(["portal-item","web-document"],"customParameters")],m.prototype,"readCustomParameters",null),(0,a._)([(0,u.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],m.prototype,"customLayerParameters",void 0),(0,a._)([(0,u.Cb)({type:$.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],m.prototype,"fullExtent",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"fullExtents",null),(0,a._)([(0,u.Cb)({type:["WebTiledLayer"]})],m.prototype,"operationalLayerType",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"resourceInfo",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"serviceMode",void 0),(0,a._)([(0,K.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],m.prototype,"readServiceMode",null),(0,a._)([(0,u.Cb)({type:S.Z.ofType(Y)})],m.prototype,"sublayers",void 0),(0,a._)([(0,K.r)("service","sublayers",["layers"])],m.prototype,"readSublayersFromService",null),(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"supportedSpatialReferences",null),(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"tilemapCache",null),(0,a._)([(0,u.Cb)({json:{read:{source:"title"}}})],m.prototype,"title",null),(0,a._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],m.prototype,"type",void 0),(0,a._)([(0,u.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],m.prototype,"url",null),(0,a._)([(0,u.Cb)()],m.prototype,"version",void 0),m=oe=(0,a._)([(0,X.j)("esri.layers.WMTSLayer")],m);const qe=m},85401:(ce,J,n)=>{function L(E,b){if(E&&b)for(const S of E.children)if(S.localName in b){const I=b[S.localName];if("function"==typeof I){const A=I(S);A&&L(S,A)}else L(S,I)}}function*a(E,b){for(const S of E.children)if(S.localName in b){const I=b[S.localName];"function"==typeof I?yield I(S):yield*a(S,I)}}n.d(J,{H:()=>a,h:()=>L})},53715:(ce,J,n)=>{n.d(J,{V:()=>I,g:()=>b});var L=n(15861),a=n(57964),E=n(79412);function b(B,U,F){return S.apply(this,arguments)}function S(){return(S=(0,L.Z)(function*(B,U,F){let M;try{M=yield createImageBitmap(B)}catch(j){throw new a.Z("request:server",`Unable to load ${U}`,{url:U,error:j})}return(0,E.k_)(F),M})).apply(this,arguments)}function I(B,U,F,M,j){return A.apply(this,arguments)}function A(){return(A=(0,L.Z)(function*(B,U,F,M,j){let u;try{u=yield createImageBitmap(B)}catch(pe){throw new a.Z("request:server",`Unable to load tile ${U}/${F}/${M}`,{error:pe,level:U,row:F,col:M})}return(0,E.k_)(j),u})).apply(this,arguments)}}}]);