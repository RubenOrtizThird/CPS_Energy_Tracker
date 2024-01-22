"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[2772],{81390:(R,M,t)=>{t.d(M,{L:()=>n});var r=t(15861),P=t(6661);class n{constructor(){this._serviceMetadatas=new Map}fetchServiceMetadata(m,S){var E=this;return(0,r.Z)(function*(){const p=E._serviceMetadatas.get(m);if(p)return p;const O=yield(0,P.T)(m,S);return E._serviceMetadatas.set(m,O),O})()}}},63724:(R,M,t)=>{t.d(M,{w:()=>O});var r=t(15861),P=t(26152),n=t(66476),a=t(57964),m=t(79412),S=t(89713),E=t(61018),p=t(27835);function O(o,c){return C.apply(this,arguments)}function C(){return C=(0,r.Z)(function*(o,c){const y=(0,S.Qc)(o);if(!y)throw new a.Z("invalid-url","Invalid scene service url");const i={...c,sceneServerUrl:y.url.path,layerId:y.sublayer??void 0};if(i.sceneLayerItem??=(yield function D(o){return u.apply(this,arguments)}(i)),null==i.sceneLayerItem)return g(i.sceneServerUrl.replace("/SceneServer","/FeatureServer"),i);const h=yield function A(o){return B.apply(this,arguments)}(i);if(!h?.url)throw new a.Z("related-service-not-found","Could not find feature service through portal item relationship");const K=yield g(h.url,i);return K.portalItem=h,K}),C.apply(this,arguments)}function u(){return u=(0,r.Z)(function*(o){const c=(yield l(o)).serviceItemId;if(!c)return null;const y=new p.default({id:c,apiKey:o.apiKey}),i=yield function I(o){return Z.apply(this,arguments)}(o);null!=i&&(y.portal=new E.Z({url:i}));try{return y.load({signal:o.signal})}catch(h){return(0,m.r9)(h),null}}),u.apply(this,arguments)}function l(o){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(function*(o){if(o.rootDocument)return o.rootDocument;const c={query:{f:"json",token:o.apiKey},responseType:"json",signal:o.signal};try{const y=yield(0,n.Z)(o.sceneServerUrl,c);o.rootDocument=y.data}catch{o.rootDocument={}}return o.rootDocument})).apply(this,arguments)}function Z(){return(Z=(0,r.Z)(function*(o){const c=P.id?.findServerInfo(o.sceneServerUrl);if(c?.owningSystemUrl)return c.owningSystemUrl;const y=o.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const i=(yield(0,n.Z)(y,{query:{f:"json"},responseType:"json",signal:o.signal})).data.owningSystemUrl;if(i)return i}catch(i){(0,m.r9)(i)}return null})).apply(this,arguments)}function g(o,c){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(function*(o,c){const y=(0,S.Qc)(o);if(!y)throw new a.Z("invalid-feature-service-url","Invalid feature service url");const i=y.url.path,h=c.layerId;if(null==h)return{serverUrl:i};const K=l(c),G=j=>(0,n.Z)(i,{query:{f:"json"},responseType:"json",authMode:j,signal:c.signal}),$=G("anonymous").catch(()=>G("no-prompt")),[V,Q]=yield Promise.all([$,K]),F=Q?.layers,N=V.data&&V.data.layers;if(!Array.isArray(N))throw new Error("expected layers array");if(Array.isArray(F)){for(let j=0;j<Math.min(F.length,N.length);j++)if(F[j].id===h)return{serverUrl:i,layerId:N[j].id}}else if(null!=h&&h<N.length)return{serverUrl:i,layerId:N[h].id};throw new Error("could not find matching associated sublayer")})).apply(this,arguments)}function B(){return(B=(0,r.Z)(function*({sceneLayerItem:o,signal:c}){if(!o)return null;try{const y=(yield o.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:c})).find(h=>"Feature Service"===h.type)||null;if(!y)return null;const i=new p.default({portal:y.portal,id:y.id});return yield i.load(),i}catch(y){return(0,m.r9)(y),null}})).apply(this,arguments)}},79936:(R,M,t)=>{t.d(M,{T:()=>P});var r=t(15861);const P={BingMapsLayer:(n=(0,r.Z)(function*(){return(yield t.e(4499).then(t.bind(t,84499))).default}),function(){return n.apply(this,arguments)}),BuildingSceneLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8866),t.e(4612),t.e(9893),t.e(9269),t.e(3080)]).then(t.bind(t,23080))).default});return function(){return n.apply(this,arguments)}}(),CSVLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(257).then(t.bind(t,90257))).default});return function(){return n.apply(this,arguments)}}(),DimensionLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(9645)]).then(t.bind(t,59645))).default});return function(){return n.apply(this,arguments)}}(),ElevationLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(1753)]).then(t.bind(t,86069))).default});return function(){return n.apply(this,arguments)}}(),FeatureLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.resolve().then(t.bind(t,90373))).default});return function(){return n.apply(this,arguments)}}(),GeoJSONLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(59).then(t.bind(t,80059))).default});return function(){return n.apply(this,arguments)}}(),GeoRSSLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(9050).then(t.bind(t,39050))).default});return function(){return n.apply(this,arguments)}}(),GroupLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(782).then(t.bind(t,50782))).default});return function(){return n.apply(this,arguments)}}(),ImageryLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(842),t.e(2784),t.e(6062),t.e(3338),t.e(5318),t.e(2861)]).then(t.bind(t,72861))).default});return function(){return n.apply(this,arguments)}}(),ImageryTileLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(6062),t.e(9350),t.e(3338),t.e(3287),t.e(5318),t.e(8592),t.e(8505)]).then(t.bind(t,34208))).default});return function(){return n.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8866),t.e(8592),t.e(4092)]).then(t.bind(t,74092))).default});return function(){return n.apply(this,arguments)}}(),KMLLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(2858)]).then(t.bind(t,22858))).default});return function(){return n.apply(this,arguments)}}(),LineOfSightLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(6625)]).then(t.bind(t,17551))).default});return function(){return n.apply(this,arguments)}}(),LinkChartLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(842),t.e(3866),t.e(5904),t.e(1518),t.e(6518),t.e(2166),t.e(8592),t.e(9900)]).then(t.bind(t,49900))).default});return function(){return n.apply(this,arguments)}}(),MapImageLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(842),t.e(2784),t.e(9351),t.e(7803)]).then(t.bind(t,37803))).default});return function(){return n.apply(this,arguments)}}(),MapNotesLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(8191)]).then(t.bind(t,18191))).default});return function(){return n.apply(this,arguments)}}(),MediaLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(4313)]).then(t.bind(t,69981))).default});return function(){return n.apply(this,arguments)}}(),OGCFeatureLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(842),t.e(2871),t.e(7960)]).then(t.bind(t,36019))).default});return function(){return n.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(4930)]).then(t.bind(t,22439))).default});return function(){return n.apply(this,arguments)}}(),OrientedImageryLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(617).then(t.bind(t,60617))).default});return function(){return n.apply(this,arguments)}}(),PointCloudLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8866),t.e(8592),t.e(265)]).then(t.bind(t,70265))).default});return function(){return n.apply(this,arguments)}}(),RouteLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(3301),t.e(5607)]).then(t.bind(t,25607))).default});return function(){return n.apply(this,arguments)}}(),SceneLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8866),t.e(4612),t.e(9893),t.e(9269),t.e(8592),t.e(724)]).then(t.bind(t,20724))).default});return function(){return n.apply(this,arguments)}}(),StreamLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(7157).then(t.bind(t,7157))).default});return function(){return n.apply(this,arguments)}}(),SubtypeGroupLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(6663).then(t.bind(t,46663))).default});return function(){return n.apply(this,arguments)}}(),TileLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(842),t.e(2784),t.e(9351),t.e(8592),t.e(1433)]).then(t.bind(t,77183))).default});return function(){return n.apply(this,arguments)}}(),UnknownLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(4850).then(t.bind(t,84850))).default});return function(){return n.apply(this,arguments)}}(),UnsupportedLayer:function(){var n=(0,r.Z)(function*(){return(yield t.e(4680).then(t.bind(t,60842))).default});return function(){return n.apply(this,arguments)}}(),VectorTileLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(7917),t.e(4433),t.e(8592),t.e(8622)]).then(t.bind(t,62003))).default});return function(){return n.apply(this,arguments)}}(),VoxelLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8866),t.e(8592),t.e(4691)]).then(t.bind(t,4691))).default});return function(){return n.apply(this,arguments)}}(),WFSLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(1970),t.e(6562)]).then(t.bind(t,18504))).default});return function(){return n.apply(this,arguments)}}(),WMSLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(616)]).then(t.bind(t,10616))).default});return function(){return n.apply(this,arguments)}}(),WMTSLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(7179)]).then(t.bind(t,67179))).default});return function(){return n.apply(this,arguments)}}(),WebTileLayer:function(){var n=(0,r.Z)(function*(){return(yield Promise.all([t.e(8592),t.e(3715)]).then(t.bind(t,54556))).default});return function(){return n.apply(this,arguments)}}()};var n},46011:(R,M,t)=>{t.d(M,{$O:()=>a,CD:()=>C,Ok:()=>S,Q4:()=>E,XX:()=>p,_Y:()=>O,bS:()=>n});var r=t(15861),P=t(63724);function n(u){const l={id:u.id,name:u.name};return"Oriented Imagery Layer"===u.type&&(l.layerType="OrientedImageryLayer"),l}function a(u,l,d){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(function*(u,l,d){if(null==u?.layers||null==u?.tables){const I=yield d.fetchServiceMetadata(l);(u=u||{}).layers=u.layers||I?.layers?.map(n),u.tables=u.tables||I?.tables?.map(n)}return u})).apply(this,arguments)}function S(u){const l=u.layers;if(l?.length)return l[0].id;const d=u.tables;return d?.length?d[0].id:null}function E(u){return(u?.layers?.length??0)+(u?.tables?.length??0)}function p(u){const l=[];return u?.layers?.forEach(d=>{"SubtypeGroupLayer"===d.layerType&&l.push(d.id)}),l}function O(u){return u?.layers?.filter(({layerType:l})=>"OrientedImageryLayer"===l).map(({id:l})=>l)}function C(u,l,d){return D.apply(this,arguments)}function D(){return(D=(0,r.Z)(function*(u,l,d){if(!u?.url)return l??{};if(l??={},!l.layers){const g=yield d.fetchServiceMetadata(u.url);l.layers=g.layers?.map(n)}const{serverUrl:I,portalItem:Z}=yield(0,P.w)(u.url,{sceneLayerItem:u}).catch(()=>({serverUrl:null,portalItem:null}));if(null==I)return l.tables=[],l;if(!l.tables&&Z){const g=yield Z.fetchData();if(g?.tables)l.tables=g.tables.map(n);else{const x=yield d.fetchServiceMetadata(I);l.tables=x?.tables?.map(n)}}if(l.tables)for(const g of l.tables)g.url=`${I}/${g.id}`;return l})).apply(this,arguments)}},82772:(R,M,t)=>{t.r(M),t.d(M,{fromItem:()=>C,selectLayerClassPath:()=>d});var r=t(15861),P=t(57964),n=t(63724),a=t(81390),m=t(85971),S=t(79936),E=t(27835),p=t(46011),O=t(50318);function C(e){return D.apply(this,arguments)}function D(){return D=(0,r.Z)(function*(e){!e.portalItem||e.portalItem instanceof E.default||(e={...e,portalItem:new E.default(e.portalItem)});const s=yield function u(e){return l.apply(this,arguments)}(e.portalItem);return new s.constructor({portalItem:e.portalItem,...s.properties})}),D.apply(this,arguments)}function l(){return l=(0,r.Z)(function*(e){yield e.load();const s=new a.L;return function Z(e){return g.apply(this,arguments)}(yield d(e,s))}),l.apply(this,arguments)}function d(e,s){return I.apply(this,arguments)}function I(){return I=(0,r.Z)(function*(e,s){switch(e.type){case"Map Service":return function x(e,s){return A.apply(this,arguments)}(e,s);case"Feature Service":return function B(e,s){return o.apply(this,arguments)}(e,s);case"Feature Collection":return function i(e){return h.apply(this,arguments)}(e);case"Scene Service":return function c(e,s){return y.apply(this,arguments)}(e,s);case"Image Service":return function K(e,s){return G.apply(this,arguments)}(e,s);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new P.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}),I.apply(this,arguments)}function g(){return(g=(0,r.Z)(function*(e){const f=S.T[e.className];return{constructor:yield f(),properties:e.properties}})).apply(this,arguments)}function A(){return A=(0,r.Z)(function*(e,s){return(yield function _(e,s){return X.apply(this,arguments)}(e,s))?{className:"TileLayer"}:{className:"MapImageLayer"}}),A.apply(this,arguments)}function o(){return(o=(0,r.Z)(function*(e,s){const f=yield b(e,s);if("object"==typeof f){const L={};return null!=f.id&&(L.layerId=f.id),{className:f.className||"FeatureLayer",properties:L}}return{className:"GroupLayer"}})).apply(this,arguments)}function y(){return(y=(0,r.Z)(function*(e,s){const f=yield b(e,s,(0,r.Z)(function*(){try{if(!e.url)return[];const{serverUrl:L}=yield(0,n.w)(e.url,{sceneLayerItem:e});return(yield s.fetchServiceMetadata(L))?.tables??[]}catch{return[]}}));if("object"==typeof f){const L={};let v;if(null!=f.id?(L.layerId=f.id,v=`${e.url}/layers/${f.id}`):v=e.url,e.typeKeywords?.length)for(const U of Object.keys(m.fb))if(e.typeKeywords.includes(U))return{className:m.fb[U]};const W=yield s.fetchServiceMetadata(v);return{className:m.fb[W?.layerType]||"SceneLayer",properties:L}}return!1===f&&"Voxel"===(yield s.fetchServiceMetadata(e.url))?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"}})).apply(this,arguments)}function h(){return(h=(0,r.Z)(function*(e){yield e.load();const s=(0,O._$)(e,"Map Notes"),f=(0,O._$)(e,"Markup");if(s||f)return{className:"MapNotesLayer"};if((0,O._$)(e,"Route Layer"))return{className:"RouteLayer"};const L=yield e.fetchData();return 1===(0,p.Q4)(L)?{className:"FeatureLayer"}:{className:"GroupLayer"}})).apply(this,arguments)}function G(){return(G=(0,r.Z)(function*(e,s){yield e.load();const f=e.typeKeywords?.map(H=>H.toLowerCase())??[];if(f.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(f.includes("tiled imagery"))return{className:"ImageryTileLayer"};const L=yield e.fetchData(),v=L?.layerType;if("ArcGISTiledImageServiceLayer"===v)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===v)return{className:"ImageryLayer"};const W=yield s.fetchServiceMetadata(e.url),U=W.cacheType?.toLowerCase(),T=W.capabilities?.toLowerCase().includes("tilesonly");return"map"===U||T?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}})).apply(this,arguments)}function X(){return(X=(0,r.Z)(function*(e,s){return(yield s.fetchServiceMetadata(e.url)).tileInfo})).apply(this,arguments)}function b(e,s,f){return Y.apply(this,arguments)}function Y(){return(Y=(0,r.Z)(function*(e,s,f){const L=e.url;if(!L||/\/\d+$/.test(L))return{};yield e.load();let v=yield e.fetchData();if("Feature Service"===e.type){const U=yield(0,p.$O)(v,L,s),T=z(U);if("object"==typeof T){const H=(0,p.XX)(U),tt=(0,p._Y)(U);T.className=null!=T.id&&H.includes(T.id)?"SubtypeGroupLayer":null!=T.id&&tt?.includes(T.id)?"OrientedImageryLayer":"FeatureLayer"}return T}if("Scene Service"===e.type&&(v=yield(0,p.CD)(e,v,s)),(0,p.Q4)(v)>0)return z(v);const W=yield s.fetchServiceMetadata(L);return f&&(W.tables=yield f()),z(W)})).apply(this,arguments)}function z(e){return 1===(0,p.Q4)(e)&&{id:(0,p.Ok)(e)}}},6661:(R,M,t)=>{t.d(M,{T:()=>n});var r=t(15861),P=t(66476);function n(m,S){return a.apply(this,arguments)}function a(){return(a=(0,r.Z)(function*(m,S){const{data:E}=yield(0,P.Z)(m,{responseType:"json",query:{f:"json",...S?.customParameters,token:S?.apiKey}});return E})).apply(this,arguments)}}}]);