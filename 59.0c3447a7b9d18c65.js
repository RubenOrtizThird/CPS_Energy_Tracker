"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[59],{80059:(b,f,r)=>{r.r(f),r.d(f,{default:()=>mt});var y=r(15861),o=r(50484),C=(r(2189),r(62691)),E=(r(36699),r(15212),r(53722),r(82752),r(28999),r(38748),r(50923),r(42212),r(91963),r(41007)),g=r(3233),J=r(79412),L=r(6785),i=r(80543),z=(r(1535),r(57678),r(14007)),M=r(10141),A=r(31709),H=r(95060),U=r(57964),W=r(67016),Q=r(4703),V=r(36885),K=r(60324),Y=r(93792),B=r(26894),X=r(5391);let m=class extends W.Z{constructor(){var t;super(...arguments),t=this,this.type="geojson",this.refresh=(0,J.Ds)(function(){var e=(0,y.Z)(function*(s){yield t.load();const{extent:a,timeExtent:p}=yield t._connection.invoke("refresh",s);return t.sourceJSON.extent=a,p&&(t.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),{dataChanged:!0,updates:{extent:t.sourceJSON.extent,timeInfo:t.sourceJSON.timeInfo}}});return function(s){return e.apply(this,arguments)}}())}load(t){return this.addResolvingPromise(this._startWorker(null!=t?t.signal:null)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(s=>Y.Z.fromJSON(s))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(s=>({count:s.count,extent:B.Z.fromJSON(s.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new U.Z("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,s=[],a=[],p=[];if(t.addFeatures)for(const l of t.addFeatures)s.push(this._serializeFeature(l));if(t.deleteFeatures)for(const l of t.deleteFeatures)"objectId"in l&&null!=l.objectId?a.push(l.objectId):"attributes"in l&&null!=l.attributes[e]&&a.push(l.attributes[e]);if(t.updateFeatures)for(const l of t.updateFeatures)p.push(this._serializeFeature(l));return this._connection.invoke("applyEdits",{adds:s,updates:p,deletes:a}).then(({extent:l,timeExtent:c,featureEditResults:v})=>(this.sourceJSON.extent=l,c&&(this.sourceJSON.timeInfo.timeExtent=[c.start,c.end]),this._createEditsResult(v)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new U.Z("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,s=this._geometryForSerialization(t);return s?{geometry:s.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return null==e?null:"mesh"===e.type||"extent"===e.type?X.Z.fromExtent(e.extent):e}_startWorker(t){var e=this;return(0,y.Z)(function*(){e._connection=yield(0,V.bA)("GeoJSONSourceWorker",{strategy:(0,z.Z)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:e});const{fields:s,spatialReference:a,hasZ:p,geometryType:l,objectIdField:c,url:v,timeInfo:$,customParameters:vt}=e.layer,ft="defaults"===e.layer.originOf("spatialReference"),gt={url:v,customParameters:vt,fields:s&&s.map(I=>I.toJSON()),geometryType:A.M.toJSON(l),hasZ:p,objectIdField:c,timeInfo:$?$.toJSON():null,spatialReference:ft?null:a&&a.toJSON()},O=yield e._connection.invoke("load",gt,{signal:t});for(const I of O.warnings)Q.Z.getLogger(e.layer).warn("#load()",`$${I.message} (title: '${e.layer.title||"no title"}', id: '${e.layer.id??"no id"}')`,{warning:I});O.featureErrors.length&&Q.Z.getLogger(e.layer).warn("#load()",`Encountered ${O.featureErrors.length} validation errors while loading features. (title: '${e.layer.title||"no title"}', id: '${e.layer.id??"no id"}')`,{errors:O.featureErrors}),e.sourceJSON=O.layerDefinition,e.capabilities=(0,K.MS)(e.sourceJSON.hasZ,!0)})()}};(0,o._)([(0,i.Cb)()],m.prototype,"capabilities",void 0),(0,o._)([(0,i.Cb)()],m.prototype,"type",void 0),(0,o._)([(0,i.Cb)({constructOnly:!0})],m.prototype,"layer",void 0),(0,o._)([(0,i.Cb)()],m.prototype,"sourceJSON",void 0),m=(0,o._)([(0,M.j)("esri.layers.graphics.sources.GeoJSONSource")],m);var w=r(19855),q=r(27426),k=r(12621),_=r(96159),tt=r(80099),et=r(52496),rt=r(70509),st=r(25836),ot=r(29717),it=r(12522),h=r(8966),nt=r(30457),at=r(50243),lt=r(81247),ut=r(27969),R=r(85295),pt=r(40591),dt=r(75421),S=r(91866),yt=r(33331),ht=r(764),G=r(43814);const ct=(0,ut.v)();let n=class extends((0,et.c)((0,q.N)((0,_.M)((0,k.b)((0,w.h)((0,it.n)((0,ot.M)((0,st.Q)((0,tt.q)((0,rt.I)((0,g.R)(H.Z)))))))))))){constructor(t){super(t),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new m({layer:this}),this.spatialReference=G.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){this.source?.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(J.r9).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,R.YN)(this.renderer,this.fieldsIndex),(0,R.UF)(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,L.mN)(this.url):null}set renderer(t){(0,R.YN)(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=(0,L.mN)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}applyEdits(t,e){var s=this;return(0,y.Z)(function*(){const{applyEdits:a}=yield r.e(8592).then(r.bind(r,52334));yield s.load();const p=yield a(s,s.source,t,e);return s.read({extent:s.source.sourceJSON.extent,timeInfo:s.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),p})()}on(t,e){return super.on(t,e)}createPopupTemplate(t){return(0,yt.eZ)(this,t)}createQuery(){const t=new S.Z,e=this.capabilities?.data;t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:a}=this;return t.timeExtent=null!=s&&null!=a?a.offset(-s.value,s.unit):a||null,t}getFieldDomain(t,e){let s,a=!1;const p=e?.feature,l=p?.attributes,c=this.typeIdField&&l?.[this.typeIdField];return null!=c&&this.types&&(a=this.types.some(v=>v.id==c&&(s=v.domains&&v.domains[t],s&&"inherited"===s.type&&(s=this._getLayerDomain(t)),!0))),a||s||(s=this._getLayerDomain(t)),s}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(S.Z.from(t)||this.createQuery(),e)).then(s=>{if(s?.features)for(const a of s.features)a.layer=a.sourceLayer=this;return s})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(S.Z.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(S.Z.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(S.Z.from(t)||this.createQuery(),e))}hasDataChanged(){var t=this;return(0,y.Z)(function*(){try{const{dataChanged:e,updates:s}=yield t.source.refresh(t.customParameters);return null!=s&&t.read(s,{origin:"service",url:t.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1})()}_getLayerDomain(t){if(!this.fields)return null;let e=null;return this.fields.some(s=>(s.name===t&&(e=s.domain),!!e)),e}};(0,o._)([(0,i.Cb)({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"capabilities",null),(0,o._)([(0,i.Cb)({type:String})],n.prototype,"copyright",void 0),(0,o._)([(0,i.Cb)({readOnly:!0})],n.prototype,"createQueryVersion",null),(0,o._)([(0,i.Cb)((0,ht.mi)("dateFieldsTimeReference"))],n.prototype,"dateFieldsTimeZone",void 0),(0,o._)([(0,i.Cb)({readOnly:!0})],n.prototype,"defaultPopupTemplate",null),(0,o._)([(0,i.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],n.prototype,"definitionExpression",void 0),(0,o._)([(0,i.Cb)({type:String})],n.prototype,"displayField",void 0),(0,o._)([(0,i.Cb)({type:Boolean})],n.prototype,"editingEnabled",void 0),(0,o._)([(0,i.Cb)(h.PV)],n.prototype,"elevationInfo",void 0),(0,o._)([(0,i.Cb)({type:[lt.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],n.prototype,"fields",void 0),(0,o._)([(0,i.Cb)(ct.fieldsIndex)],n.prototype,"fieldsIndex",void 0),(0,o._)([(0,i.Cb)({type:B.Z,json:{name:"extent"}})],n.prototype,"fullExtent",void 0),(0,o._)([(0,i.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:A.M.read}}})],n.prototype,"geometryType",void 0),(0,o._)([(0,i.Cb)({type:Boolean})],n.prototype,"hasZ",void 0),(0,o._)([(0,i.Cb)(h.id)],n.prototype,"id",void 0),(0,o._)([(0,i.Cb)({type:Boolean,readOnly:!0})],n.prototype,"isTable",null),(0,o._)([(0,i.Cb)(h.iR)],n.prototype,"labelsVisible",void 0),(0,o._)([(0,i.Cb)({type:[pt.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:dt.r},write:!0}})],n.prototype,"labelingInfo",void 0),(0,o._)([(0,i.Cb)(h.rn)],n.prototype,"legendEnabled",void 0),(0,o._)([(0,i.Cb)({type:["show","hide"]})],n.prototype,"listMode",void 0),(0,o._)([(0,i.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],n.prototype,"objectIdField",void 0),(0,o._)([(0,i.Cb)(h.Oh)],n.prototype,"opacity",void 0),(0,o._)([(0,i.Cb)({type:["GeoJSON"]})],n.prototype,"operationalLayerType",void 0),(0,o._)([(0,i.Cb)({readOnly:!0})],n.prototype,"parsedUrl",null),(0,o._)([(0,i.Cb)(h.C_)],n.prototype,"popupEnabled",void 0),(0,o._)([(0,i.Cb)({type:C.Z,json:{name:"popupInfo",write:!0}})],n.prototype,"popupTemplate",void 0),(0,o._)([(0,i.Cb)({types:E.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:E.o}}}})],n.prototype,"renderer",null),(0,o._)([(0,i.Cb)(h.YI)],n.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,i.Cb)({readOnly:!0})],n.prototype,"source",void 0),(0,o._)([(0,i.Cb)({type:G.Z})],n.prototype,"spatialReference",void 0),(0,o._)([(0,i.Cb)({type:[nt.Z]})],n.prototype,"templates",void 0),(0,o._)([(0,i.Cb)()],n.prototype,"title",void 0),(0,o._)([(0,i.Cb)({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),(0,o._)([(0,i.Cb)({type:String,readOnly:!0})],n.prototype,"typeIdField",void 0),(0,o._)([(0,i.Cb)({type:[at.Z]})],n.prototype,"types",void 0),(0,o._)([(0,i.Cb)(h.HQ)],n.prototype,"url",null),n=(0,o._)([(0,M.j)("esri.layers.GeoJSONLayer")],n);const mt=n},85559:(b,f,r)=>{r.d(f,{g:()=>y});const y={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},60324:(b,f,r)=>{r.d(f,{Dm:()=>N,Hq:()=>T,MS:()=>D,bU:()=>P});var y=r(14007),o=r(34222),x=r(85559),C=r(19579);function P(u){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===u||"esriGeometryMultipoint"===u?C.I4:"esriGeometryPolyline"===u?C.ET:C.lF}}}const Z=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let j=1;function N(u,d){if((0,y.Z)("esri-csp-restrictions"))return()=>({[d]:null,...u});try{let F=`this.${d} = null;`;for(const g in u)F+=`this${Z.test(g)?`.${g}`:`["${g}"]`} = ${JSON.stringify(u[g])};`;const E=new Function(`\n      return class AttributesClass$${j++} {\n        constructor() {\n          ${F};\n        }\n      }\n    `)();return()=>new E}catch{return()=>({[d]:null,...u})}}function T(u={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(u)}}]}function D(u,d){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:u},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:d,supportsDelete:d,supportsEditing:d,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:d,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:x.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:d,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);