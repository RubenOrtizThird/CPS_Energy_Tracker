"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[9021],{29021:(M,m,r)=>{r.r(m),r.d(m,{default:()=>v});var l=r(15861),E=(r(2189),r(12786)),i=r(8868),P=r(3749),a=r(98797),d=r(1408),c=r(89350),f=r(57618),u=r(89479),p=r(58340),D=r(41068),S=r(74155),_=r(26894),h=r(85039);class v{convertVectorFieldData(t){const s=i.Z.fromJSON(t.pixelBlock),o=(0,u.KC)(s,t.type);return Promise.resolve(null!=o?o.toJSON():null)}computeStatisticsHistograms(t){const s=i.Z.fromJSON(t.pixelBlock),o=(0,f.js)(s);return Promise.resolve(o)}decode(t){return(0,l.Z)(function*(){const s=yield(0,P.J)(t.data,t.options);return s&&s.toJSON()})()}symbolize(t){t.pixelBlock=i.Z.fromJSON(t.pixelBlock),t.extent=t.extent?_.Z.fromJSON(t.extent):null;const s=this.symbolizer.symbolize(t);return Promise.resolve(null!=s?s.toJSON():null)}updateSymbolizer(t){var s=this;return(0,l.Z)(function*(){s.symbolizer=D.Z.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===s.symbolizer?.rendererJSON.type&&(s.symbolizer.rendererJSON.histograms=t.histograms)})()}updateRasterFunction(t){var s=this;return(0,l.Z)(function*(){s.rasterFunction=(0,d.Ue)(t.rasterFunctionJSON)})()}process(t){var s=this;return(0,l.Z)(function*(){const o=s.rasterFunction.process({extent:_.Z.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(e=>null!=e?i.Z.fromJSON(e):null),primaryPixelSizes:t.primaryPixelSizes?.map(e=>null!=e?h.Z.fromJSON(e):null),primaryRasterIds:t.primaryRasterIds});return null!=o?o.toJSON():null})()}stretch(t){const s=this.symbolizer.simpleStretch(i.Z.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(s?.toJSON())}estimateStatisticsHistograms(t){const s=(0,f.Hv)(i.Z.fromJSON(t.srcPixelBlock));return Promise.resolve(s)}split(t){const s=(0,a.Vl)(i.Z.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return s&&s.forEach((o,e)=>{s.set(e,o?.toJSON())}),Promise.resolve(s)}mosaicAndTransform(t){return(0,l.Z)(function*(){const s=t.srcPixelBlocks.map(O=>O?new i.Z(O):null),o=(0,a.us)(s,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let e,n=o;return t.coefs&&(n=(0,a.Uk)(o,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(e=(0,a.Qh)(t.destDimension,t.gcsGrid),n=(0,u.xQ)(n,t.isUV?"vector-uv":"vector-magdir",e)),{pixelBlock:n?.toJSON(),localNorthDirections:e}})()}createFlowMesh(t,s){return(0,l.Z)(function*(){const o={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:e,indexData:n}=yield(0,S.GE)(t.meshType,t.simulationSettings,o,s.signal);return{result:{vertexBuffer:e.buffer,indexBuffer:n.buffer},transferList:[e.buffer,n.buffer]}})()}getProjectionOffsetGrid(t){return(0,l.Z)(function*(){const s=_.Z.fromJSON(t.projectedExtent),o=_.Z.fromJSON(t.srcBufferExtent);let e=null;t.datumTransformationSteps&&(e=new E.Z({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,c.Mk)(s.spatialReference,o.spatialReference,e))&&(yield(0,c.zD)());const n=t.rasterTransform?(0,p.c)(t.rasterTransform):null;return(0,c.Qp)({...t,projectedExtent:s,srcBufferExtent:o,datumTransformation:e,rasterTransform:n})})()}}}}]);