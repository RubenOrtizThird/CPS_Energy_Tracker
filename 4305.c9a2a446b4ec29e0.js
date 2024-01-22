"use strict";(self.webpackChunkjsapi_angular_cli=self.webpackChunkjsapi_angular_cli||[]).push([[4305],{58078:(X,$,B)=>{B.d($,{C:()=>s});var n=B(60616);class s extends n.E{_afterNew(){super._afterNewApplyThemes(),this._dirty.colors=!1}_beforeChanged(){this.isDirty("colors")&&this.reset()}generateColors(){this.setPrivate("currentPass",this.getPrivate("currentPass",0)+1);const w=this.getPrivate("currentPass"),f=this.get("colors",[this.get("baseColor",n.C.fromHex(16711680))]);this.getPrivate("numColors")||this.setPrivate("numColors",f.length);const u=this.getPrivate("numColors"),D=this.get("passOptions"),a=this.get("reuse");for(let l=0;l<u;l++)if(a)f.push(f[l]);else{const x=f[l].toHSL();let H=x.h+(D.hue||0)*w;for(;H>1;)H-=1;let I=x.s+(D.saturation||0)*w;I>1&&(I=1),I<0&&(I=0);let F=x.l+(D.lightness||0)*w;for(;F>1;)F-=1;f.push(n.C.fromHSL(H,I,F))}}getIndex(w){const f=this.get("colors",[]),u=this.get("saturation");return w>=f.length?(this.generateColors(),this.getIndex(w)):null!=u?n.C.saturate(f[w],u):f[w]}next(){let w=this.getPrivate("currentStep",this.get("startIndex",0));return this.setPrivate("currentStep",w+this.get("step",1)),this.getIndex(w)}reset(){this.setPrivate("currentStep",this.get("startIndex",0)),this.setPrivate("currentPass",0)}}Object.defineProperty(s,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColorSet"}),Object.defineProperty(s,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:n.E.classNames.concat([s.className])})},89944:(X,$,B)=>{B.d($,{D:()=>N,s:()=>s});var n=B(60616);function s(w,f,u,P){w.set(f,u.get(P)),u.on(P,D=>{w.set(f,D)})}class N extends n.am{setupDefaultRules(){super.setupDefaultRules();const f=this._root.language,u=this._root.interfaceColors,P=this._root.horizontalLayout,D=this._root.verticalLayout,a=this.rule.bind(this);a("InterfaceColors").setAll({stroke:n.C.fromHex(15066597),fill:n.C.fromHex(15987699),primaryButton:n.C.fromHex(6788316),primaryButtonHover:n.C.fromHex(6779356),primaryButtonDown:n.C.fromHex(6872182),primaryButtonActive:n.C.fromHex(6872182),primaryButtonText:n.C.fromHex(16777215),primaryButtonStroke:n.C.fromHex(16777215),secondaryButton:n.C.fromHex(14277081),secondaryButtonHover:n.C.fromHex(10724259),secondaryButtonDown:n.C.fromHex(9276813),secondaryButtonActive:n.C.fromHex(15132390),secondaryButtonText:n.C.fromHex(0),secondaryButtonStroke:n.C.fromHex(16777215),grid:n.C.fromHex(0),background:n.C.fromHex(16777215),alternativeBackground:n.C.fromHex(0),text:n.C.fromHex(0),alternativeText:n.C.fromHex(16777215),disabled:n.C.fromHex(11382189),positive:n.C.fromHex(5288704),negative:n.C.fromHex(11730944)});{const l=a("ColorSet");l.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[n.C.fromHex(6797276)],step:1,reuse:!1,startIndex:0}),l.setPrivate("currentStep",0),l.setPrivate("currentPass",0)}a("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:(0,n.an)(n.ap)}),a("Component").setAll({interpolationDuration:0,interpolationEasing:(0,n.an)(n.ap)}),a("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:n.ao,tooltipY:n.ao,tooltipPosition:"fixed",isMeasured:!0}),a("Sprite").states.create("default",{visible:!0,opacity:1}),a("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1}),a("Graphics").setAll({strokeWidth:1}),a("Chart").setAll({width:n.a4,height:n.a4,interactiveChildren:!1}),a("Sprite",["horizontal","center"]).setAll({centerX:n.ao,x:n.ao}),a("Sprite",["vertical","center"]).setAll({centerY:n.ao,y:n.ao}),a("Container",["horizontal","layout"]).setAll({layout:P}),a("Container",["vertical","layout"]).setAll({layout:D}),a("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1}),a("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49}),a("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0}),a("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,strokeWidth:0,width:45,height:45}),a("LinearGradient").setAll({rotation:90}),a("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:n.a1.new(this._root,{}),layer:30,clickTarget:"itemContainer"}),a("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:P,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:f.translate("Press ENTER to toggle"),role:"checkbox"});{const l=a("Rectangle",["legend","item","background"]);l.setAll({fillOpacity:0}),s(l,"fill",u,"background")}a("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:n.ao,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18}),a("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:n.a4,height:n.a4,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});{const l=a("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});s(l,"fill",u,"disabled"),s(l,"stroke",u,"disabled")}a("Label",["legend","label"]).setAll({centerY:n.ao,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0}),s(a("Label",["legend","label"]).states.create("disabled",{}),"fill",u,"disabled"),a("Label",["legend","value","label"]).setAll({centerY:n.ao,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:n.a4,populateText:!0}),s(a("Label",["legend","value","label"]).states.create("disabled",{}),"fill",u,"disabled"),a("HeatLegend").setAll({stepCount:1}),a("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0}),a("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:n.a4,width:15}),a("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:n.a4,height:15}),a("HeatLegend",["vertical"]).setAll({height:n.a4}),a("HeatLegend",["horizontal"]).setAll({width:n.a4}),a("Label",["heatlegend","start"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}),a("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});{const l=a("Label");l.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1}),s(l,"fill",u,"text")}a("RadialLabel").setAll({textType:"regular",centerY:n.ao,centerX:n.ao,inside:!1,radius:0,baseRadius:n.a4,orientation:"auto",textAlign:"center"}),a("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8}),a("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8}),a("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});{const l=a("Tick");l.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0}),s(l,"stroke",u,"grid")}a("Bullet").setAll({locationX:.5,locationY:.5}),a("Tooltip").setAll({position:"absolute",getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:n.ao,centerY:n.ao,animationEasing:(0,n.an)(n.ap),exportable:!1}),a("Polygon").setAll({animationEasing:(0,n.an)(n.ap)}),a("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:n.C.fromHex(16777215)});{const l=a("Label",["tooltip"]);l.setAll({role:"tooltip",populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0}),s(l,"fill",u,"alternativeText")}a("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:P,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0}),a("Button").states.create("hover",{}),a("Button").states.create("down",{stateAnimationDuration:0}),a("Button").states.create("active",{});{const l=a("RoundedRectangle",["button","background"]);s(l,"fill",u,"primaryButton"),s(l,"stroke",u,"primaryButtonStroke")}s(a("RoundedRectangle",["button","background"]).states.create("hover",{}),"fill",u,"primaryButtonHover"),s(a("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0}),"fill",u,"primaryButtonDown"),s(a("RoundedRectangle",["button","background"]).states.create("active",{}),"fill",u,"primaryButtonActive"),s(a("Graphics",["button","icon"]),"stroke",u,"primaryButtonText"),s(a("Label",["button"]),"fill",u,"primaryButtonText"),a("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:n.a4,role:"button",ariaLabel:f.translate("Zoom Out"),layer:30});{const l=a("RoundedRectangle",["background","button","zoom"]);l.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),s(l,"fill",u,"primaryButton")}s(a("RoundedRectangle",["background","button","zoom"]).states.create("hover",{}),"fill",u,"primaryButtonHover"),s(a("RoundedRectangle",["background","button","zoom"]).states.create("down",{stateAnimationDuration:0}),"fill",u,"primaryButtonDown");{const l=a("Graphics",["icon","button","zoom"]);l.setAll({crisp:!0,strokeOpacity:.7,draw:x=>{x.moveTo(0,0),x.lineTo(12,0)}}),s(l,"stroke",u,"primaryButtonText")}a("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:n.ao,centerY:n.ao,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:f.translate("Use up and down arrows to move selection")});{const l=a("RoundedRectangle",["background","resize","button"]);l.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),s(l,"fill",u,"secondaryButton"),s(l,"stroke",u,"secondaryButtonStroke")}s(a("RoundedRectangle",["background","resize","button"]).states.create("hover",{}),"fill",u,"secondaryButtonHover"),s(a("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0}),"fill",u,"secondaryButtonDown");{const l=a("Graphics",["resize","button","icon"]);l.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:x=>{x.moveTo(0,.5),x.lineTo(0,12.5),x.moveTo(4,.5),x.lineTo(4,12.5)}}),s(l,"stroke",u,"secondaryButtonText")}a("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"}),a("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"}),a("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:f.translate("Play"),toggleKey:"active"});{const l=a("RoundedRectangle",["play","background"]);l.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),s(l,"fill",u,"primaryButton")}{const l=a("Graphics",["play","icon"]);l.setAll({stateAnimationDuration:0,dx:1,draw:x=>{x.moveTo(0,-5),x.lineTo(8,0),x.lineTo(0,5),x.lineTo(0,-5)}}),s(l,"fill",u,"primaryButtonText")}a("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0}),a("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:l=>{l.moveTo(-4,-5),l.lineTo(-1,-5),l.lineTo(-1,5),l.lineTo(-4,5),l.lineTo(-4,-5),l.moveTo(4,-5),l.lineTo(1,-5),l.lineTo(1,5),l.lineTo(4,5),l.lineTo(4,-5)}}),a("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:f.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});{const l=a("RoundedRectangle",["switch","background"]);l.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),s(l,"fill",u,"primaryButton")}{const l=a("Circle",["switch","icon"]);l.setAll({radius:8,centerY:0,centerX:0,dx:0}),s(l,"fill",u,"primaryButtonText")}a("Graphics",["switch","icon"]).states.create("active",{dx:16}),a("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:(0,n.an)(n.ap)}),a("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:n.a4}),a("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:n.a4}),this.rule("Button",["scrollbar"]).setAll({exportable:!1});{const l=a("RoundedRectangle",["scrollbar","main","background"]);l.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8}),s(l,"fill",u,"fill")}{const l=a("RoundedRectangle",["scrollbar","thumb"]);l.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0}),s(l,"fill",u,"secondaryButton")}s(a("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{}),"fill",u,"secondaryButtonHover"),s(a("RoundedRectangle",["scrollbar","thumb"]).states.create("down",{stateAnimationDuration:0}),"fill",u,"secondaryButtonDown"),a("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:n.ao,width:n.a4,centerX:n.ao,ariaLabel:f.translate("Use up and down arrows to move selection")}),a("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:n.ao,centerY:n.ao,height:n.a4,ariaLabel:f.translate("Use left and right arrows to move selection")});{const l=a("PointedRectangle",["axis","tooltip","background"]);l.setAll({cornerRadius:0}),s(l,"fill",u,"alternativeBackground")}a("Label",["axis","tooltip"]).setAll({role:void 0}),a("Label",["axis","tooltip","y"]).setAll({textAlign:"right"}),a("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"}),a("Label",["axis","tooltip","x"]).setAll({textAlign:"center"}),a("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"}),a("Star").setAll({spikes:5,innerRadius:5,radius:10}),a("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7}),a("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,pointerBaseWidth:0,cornerRadius:3}),a("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"}),a("SpriteResizer").setAll({rotationStep:10}),a("Container",["resizer","grip"]).states.create("hover",{});{const l=a("RoundedRectangle",["resizer","grip"]);l.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12}),s(l,"fill",u,"background"),s(l,"stroke",u,"alternativeBackground")}{const l=a("RoundedRectangle",["resizer","grip","outline"]);l.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20}),l.states.create("hover",{fillOpacity:.3}),s(l,"fill",u,"alternativeBackground")}a("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0}),a("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});{const l=a("Rectangle",["resizer","rectangle"]);l.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1}),s(l,"stroke",u,"alternativeBackground")}}}},20315:(X,$,B)=>{B.d($,{C:()=>f,D:()=>w,S:()=>U,T:()=>z,a:()=>l,c:()=>F,r:()=>a,w:()=>Q});var n=B(50484),s=B(60616);class N extends s.ax{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e)}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t)}_onSetIndex(e,t,i){this.processor&&this.processor.processRow(i),super._onSetIndex(e,t,i)}}class w extends s.aG{constructor(e,t,i){super(i),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty()}markDirty(){this.component.markDirtyValues(this)}_startAnimation(){this.component._root._addAnimation(this)}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose()}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e)}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e)}isHidden(){return!this.get("visible")}}class f extends s.a3{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new N}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1})}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef()}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll(e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,"clear"===e.type)(0,s.e)(t,i=>{i.dispose()}),t.length=0,this._onDataClear();else if("push"===e.type){const i=new w(this,e.newValue,this._makeDataItem(e.newValue));t.push(i),this.processDataItem(i)}else if("setIndex"===e.type){const i=t[e.index],r=this._makeDataItem(e.newValue);i.bullets&&0==i.bullets.length&&(i.bullets=void 0),(0,s.aa)(r).forEach(o=>{i.animate({key:o,to:r[o],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")})}),i.dataContext=e.newValue}else if("insertIndex"===e.type){const i=new w(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,i),this.processDataItem(i)}else if("removeIndex"===e.type)t[e.index].dispose(),t.splice(e.index,1);else{if("moveIndex"!==e.type)throw new Error("Unknown IStreamEvent type");{const i=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,i)}}this._afterDataChange()}))}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},(0,s.e)(this.valueFields,e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"})})),this.fields&&(this._fields=[],this._fieldsF={},(0,s.e)(this.fields,e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field")}))}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&(0,s.e)(this._valueFields,i=>{const r=this.get(this._valueFieldsF[i].fieldKey);t[i]=e[r],t[this._valueFieldsF[i].workingKey]=t[i]}),this._fields&&(0,s.e)(this._fields,i=>{const r=this.get(this._fieldsF[i]);t[i]=e[r]}),t}makeDataItem(e){let t=new w(this,void 0,e);return this.processDataItem(t),t}pushDataItem(e){const t=this.makeDataItem(e);return this._mainDataItems.push(t),t}disposeDataItem(e){}showDataItem(e,t){return(0,n.a)(this,void 0,void 0,function*(){e.set("visible",!0)})}hideDataItem(e,t){return(0,n.a)(this,void 0,void 0,function*(){e.set("visible",!1)})}_clearDirty(){super._clearDirty(),this._valuesDirty=!1}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1}this.inited=!0}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0}_markDirtyGroup(){this._dataGrouped=!1}markDirtySize(){this._sizeDirty=!0,this.markDirty()}}Object.defineProperty(f,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(f,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.a3.classNames.concat([f.className])});let P={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2629742400,year:31536e6};function D(h,e){return null==e&&(e=1),P[h]*e}function a(h,e,t,i,r,o,c){if(!c||r){let g=0;switch(r||"millisecond"==e||(g=h.getTimezoneOffset(),h.setUTCMinutes(h.getUTCMinutes()-g)),e){case"day":let m=h.getUTCDate();if(t>1){if(o){o=a(o,"day",1);let A=h.getTime()-o.getTime(),L=Math.floor(A/D("day")/t),O=D("day",L*t);h.setTime(o.getTime()+O-g*D("minute"))}}else h.setUTCDate(m);h.setUTCHours(0,0,0,0);break;case"second":let p=h.getUTCSeconds();t>1&&(p=Math.floor(p/t)*t),h.setUTCSeconds(p,0);break;case"millisecond":if(1==t)return h;let _=h.getUTCMilliseconds();_=Math.floor(_/t)*t,h.setUTCMilliseconds(_);break;case"hour":let y=h.getUTCHours();t>1&&(y=Math.floor(y/t)*t),h.setUTCHours(y,0,0,0);break;case"minute":let b=h.getUTCMinutes();t>1&&(b=Math.floor(b/t)*t),h.setUTCMinutes(b,0,0);break;case"month":let d=h.getUTCMonth();t>1&&(d=Math.floor(d/t)*t),h.setUTCMonth(d,1),h.setUTCHours(0,0,0,0);break;case"year":let v=h.getUTCFullYear();t>1&&(v=Math.floor(v/t)*t),h.setUTCFullYear(v,0,1),h.setUTCHours(0,0,0,0);break;case"week":let R=h.getUTCDate(),C=h.getUTCDay();(0,s.g)(i)||(i=1),R=C>=i?R-C+i:R-(7+C)+i,h.setUTCDate(R),h.setUTCHours(0,0,0,0)}if(!r&&"millisecond"!=e&&(h.setUTCMinutes(h.getUTCMinutes()+g),"day"==e||"week"==e||"month"==e||"year"==e)){let m=h.getTimezoneOffset();if(m!=g){let p=m-g;h.setUTCMinutes(h.getUTCMinutes()+p)}}return h}{if(isNaN(h.getTime()))return h;let g=c.offsetUTC(h),m=h.getTimezoneOffset(),p=c.parseDate(h),_=p.year,y=p.month,b=p.day,d=p.hour,v=p.minute,R=p.second,C=p.millisecond,A=p.weekday;switch(e){case"day":if(t>1&&o){o=a(o,"day",1,i,r,void 0,c);let O=h.getTime()-o.getTime(),T=Math.floor(O/D("day")/t),S=D("day",T*t);h.setTime(o.getTime()+S),p=c.parseDate(h),_=p.year,y=p.month,b=p.day}d=0,v=g-m,R=0,C=0;break;case"second":v+=g-m,t>1&&(R=Math.floor(R/t)*t),C=0;break;case"millisecond":v+=g-m,t>1&&(C=Math.floor(C/t)*t);break;case"hour":t>1&&(d=Math.floor(d/t)*t),v=g-m,R=0,C=0;break;case"minute":t>1&&(v=Math.floor(v/t)*t),v+=g-m,R=0,C=0;break;case"month":t>1&&(y=Math.floor(y/t)*t),b=1,d=0,v=g-m,R=0,C=0;break;case"year":t>1&&(_=Math.floor(_/t)*t),y=0,b=1,d=0,v=g-m,R=0,C=0;break;case"week":(0,s.g)(i)||(i=1),b=A>=i?b-A+i:b-(7+A)+i,d=0,v=g-m,R=0,C=0}let L=(h=new Date(_,y,b,d,v,R,C)).getTimezoneOffset();return L!=m&&h.setTime(h.getTime()+6e4*(m-L)),h}}class l extends f{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new s.ax}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:s.a3.new(this._root,{width:s.a4,height:s.a4,position:"absolute"})})}_afterNew(){this.valueFields.push("value"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll(e=>{if("clear"===e.type)this._handleBullets(this.dataItems);else if("push"===e.type)this._handleBullets(this.dataItems);else if("setIndex"===e.type)this._handleBullets(this.dataItems);else if("insertIndex"===e.type)this._handleBullets(this.dataItems);else if("removeIndex"===e.type)this._handleBullets(this.dataItems);else{if("moveIndex"!==e.type)throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems)}}))}_dispose(){this.bulletsContainer.dispose(),super._dispose()}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){(0,s.e)(e,t=>{const i=t.bullets;i&&((0,s.e)(i,r=>{r.dispose()}),t.bullets=void 0)}),this.markDirtyValues()}getDataItemById(e){return(0,s.aH)(this.dataItems,t=>t.get("id")==e)}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each(t=>{this._makeBullet(e,t)}))}_shouldMakeBullet(e){return!0}_makeBullet(e,t,i){const r=t(this._root,this,e);if(r){let o=r.get("sprite");o&&(o._setDataItem(e),o.setRaw("position","absolute"),this.bulletsContainer.children.push(o)),r._index=i,r.series=this,e.bullets.push(r)}return r}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const i=this.getPrivate("baseValueSeries");i&&this._disposers.push(i.onPrivate("startIndex",()=>{this.markDirtyValues()}))}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0)),this._psi==e&&this._pei==t||this._selectionAggregatesCalculated||(0===e&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let i=this.get("tooltip");i&&(i.hide(0),i.set("tooltipTarget",this))}if(this.isDirty("fill")||this.isDirty("stroke")){let i;const r=this.get("legendDataItem");if(r&&(i=r.get("markerRectangle"),i&&this.isVisible())){if(this.isDirty("stroke")){let o=this.get("stroke");i.set("stroke",o)}if(this.isDirty("fill")){let o=this.get("fill");i.set("fill",o)}}this.updateLegendMarker(void 0)}if(this.bullets.length>0){let i=this.startIndex(),r=this.endIndex();r<this.dataItems.length&&r++;for(let o=i;o<r;o++){let c=this.dataItems[o];c.bullets||this._makeBullets(c)}}}_calculateAggregates(e,t){let i=this._valueFields;if(!i)throw new Error("No value fields are set for the series.");const r={},o={},c={},g={},m={},p={},_={},y={},b={};(0,s.e)(i,d=>{r[d]=0,o[d]=0,c[d]=0}),(0,s.e)(i,d=>{let v=d+"Change",R=d+"ChangePercent",C=d+"ChangePrevious",A=d+"ChangePreviousPercent",L=d+"ChangeSelection",O=d+"ChangeSelectionPercent",T="valueY";"valueX"!=d&&"openValueX"!=d&&"lowValueX"!=d&&"highValueX"!=d||(T="valueX");const S=this.getPrivate("baseValueSeries");for(let W=e;W<t;W++){const j=this.dataItems[W];let k=j.get(d);null!=k&&(c[d]++,r[d]+=k,o[d]+=Math.abs(k),y[d]=r[d]/c[d],(g[d]>k||null==g[d])&&(g[d]=k),(m[d]<k||null==m[d])&&(m[d]=k),_[d]=k,null==p[d]&&(p[d]=k,b[d]=k,S&&(p[T]=S._getBase(T))),0===e&&(j.setRaw(v,k-p[T]),j.setRaw(R,(k-p[T])/p[T]*100)),j.setRaw(C,k-b[T]),j.setRaw(A,(k-b[T])/b[T]*100),j.setRaw(L,k-p[T]),j.setRaw(O,(k-p[T])/p[T]*100),b[d]=k)}}),(0,s.e)(i,d=>{this.setPrivate(d+"AverageSelection",y[d]),this.setPrivate(d+"CountSelection",c[d]),this.setPrivate(d+"SumSelection",r[d]),this.setPrivate(d+"AbsoluteSumSelection",o[d]),this.setPrivate(d+"LowSelection",g[d]),this.setPrivate(d+"HighSelection",m[d]),this.setPrivate(d+"OpenSelection",p[d]),this.setPrivate(d+"CloseSelection",_[d])}),0===e&&t===this.dataItems.length&&(0,s.e)(i,d=>{this.setPrivate(d+"Average",y[d]),this.setPrivate(d+"Count",c[d]),this.setPrivate(d+"Sum",r[d]),this.setPrivate(d+"AbsoluteSum",o[d]),this.setPrivate(d+"Low",g[d]),this.setPrivate(d+"High",m[d]),this.setPrivate(d+"Open",p[d]),this.setPrivate(d+"Close",_[d])})}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e=this.get("heatRules");if(this._valuesDirty&&e&&e.length>0&&(0,s.e)(e,t=>{const i=t.minValue||this.getPrivate(t.dataField+"Low")||0,r=t.maxValue||this.getPrivate(t.dataField+"High")||0;(0,s.e)(t.target._entities,o=>{const c=o.dataItem.get(t.dataField);if((0,s.g)(c))if(t.customFunction)t.customFunction.call(this,o,i,r,c);else{let g,m;g=t.logarithmic?(Math.log(c)*Math.LOG10E-Math.log(i)*Math.LOG10E)/(Math.log(r)*Math.LOG10E-Math.log(i)*Math.LOG10E):(c-i)/(r-i),!(0,s.g)(c)||(0,s.g)(g)&&Math.abs(g)!=1/0||(g=.5),(0,s.g)(t.min)?m=t.min+(t.max-t.min)*g:t.min instanceof s.C?m=s.C.interpolate(g,t.min,t.max):t.min instanceof s.Q&&(m=(0,s.aI)(g,t.min,t.max)),o.set(t.key,m)}else t.neutral&&o.set(t.key,t.neutral)})}),this.get("visible")&&this.bullets.length>0){let t=this.dataItems.length,i=this.startIndex(),r=this.endIndex();r<t&&r++,i>0&&i--;for(let o=0;o<i;o++)this._hideBullets(this.dataItems[o]);for(let o=i;o<r;o++)this._positionBullets(this.dataItems[o]);for(let o=r;o<t;o++)this._hideBullets(this.dataItems[o])}}_positionBullets(e){e.bullets&&(0,s.e)(e.bullets,t=>{this._positionBullet(t);const i=t.get("sprite");t.get("dynamic")&&(i&&(i._markDirtyKey("fill"),i.markDirtySize()),i instanceof s.a3&&i.walkChildren(r=>{r._markDirtyKey("fill"),r.markDirtySize(),r instanceof s.al&&r.text.markDirtyText()})),i instanceof s.al&&i.get("populateText")&&i.text.markDirtyText()})}_hideBullets(e){e.bullets&&(0,s.e)(e.bullets,t=>{let i=t.get("sprite");i&&i.setPrivate("visible",!1)})}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer)}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e)}disposeDataItem(e){const t=e.bullets;t&&(0,s.e)(t,i=>{i.dispose()})}_getItemReaderLabel(){return""}showDataItem(e,t){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,n.a)(this,void 0,void 0,function*(){const r=[i.showDataItem.call(this,e,t)],o=e.bullets;o&&(0,s.e)(o,c=>{r.push(c.get("sprite").show(t))}),yield Promise.all(r)})}hideDataItem(e,t){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,n.a)(this,void 0,void 0,function*(){const r=[i.hideDataItem.call(this,e,t)],o=e.bullets;o&&(0,s.e)(o,c=>{r.push(c.get("sprite").hide(t))}),yield Promise.all(r)})}_sequencedShowHide(e,t){return(0,n.a)(this,void 0,void 0,function*(){if(this.get("sequencedInterpolation"))if((0,s.g)(t)||(t=this.get("interpolationDuration",0)),t>0){const i=this.startIndex(),r=this.endIndex();yield Promise.all((0,s.x)(this.dataItems,(o,c)=>(0,n.a)(this,void 0,void 0,function*(){let g=t||0;(c<i-10||c>r+10)&&(g=0);let m=this.get("sequencedDelay",0)+g/(r-i);yield function u(h){return new Promise((e,t)=>{setTimeout(e,h)})}(m*(c-i)),e?yield this.showDataItem(o,g):yield this.hideDataItem(o,g)})))}else yield Promise.all((0,s.x)(this.dataItems,i=>e?this.showDataItem(i,0):this.hideDataItem(i,0)))})}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const i=t.get("valueLabel");if(i){const o=i.text;let c="";i._setDataItem(e),c=this.get("legendValueText",o.get("text","")),i.set("text",c),o.markDirtyText()}const r=t.get("label");if(r){const o=r.text;let c="";r._setDataItem(e),c=this.get("legendLabelText",o.get("text","")),r.set("text",c),o.markDirtyText()}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide()}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function x(h,e){for(let t=0,i=e.length;t<i;t++){const r=e[t];if(r.length>0){let o=r[0];if(o.length>0){let c=o[0];h.moveTo(c.x,c.y);for(let g=0,m=r.length;g<m;g++)H(h,r[g])}}}}function H(h,e){for(let t=0,i=e.length;t<i;t++){const r=e[t];h.lineTo(r.x,r.y)}}Object.defineProperty(l,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty(l,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:f.classNames.concat([l.className])});class I extends s.a7{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let i=e[0];this._display.moveTo(i.x,i.y),x(this._display,[[e]])}else if(t)x(this._display,t);else if(!this.get("draw")){let i=this.width(),r=this.height();this._display.moveTo(0,0),this._display.lineTo(i,r)}}}}function F(h){return function(){return h}}Object.defineProperty(I,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(I,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.a7.classNames.concat([I.className])});const V=Math.PI,G=2*V,M=1e-6,K=G-M;function Y(h){this._+=h[0];for(let e=1,t=h.length;e<t;++e)this._+=arguments[e]+h[e]}class q{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==e?Y:function Z(h){let e=Math.floor(h);if(!(e>=0))throw new Error(`invalid digits: ${h}`);if(e>15)return Y;const t=10**e;return function(i){this._+=i[0];for(let r=1,o=i.length;r<o;++r)this._+=Math.round(arguments[r]*t)/t+i[r]}}(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,i,r){this._append`Q${+e},${+t},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(e,t,i,r,o,c){this._append`C${+e},${+t},${+i},${+r},${this._x1=+o},${this._y1=+c}`}arcTo(e,t,i,r,o){if(e=+e,t=+t,i=+i,r=+r,(o=+o)<0)throw new Error(`negative radius: ${o}`);let c=this._x1,g=this._y1,m=i-e,p=r-t,_=c-e,y=g-t,b=_*_+y*y;if(null===this._x1)this._append`M${this._x1=e},${this._y1=t}`;else if(b>M)if(Math.abs(y*m-p*_)>M&&o){let d=i-c,v=r-g,R=m*m+p*p,C=d*d+v*v,A=Math.sqrt(R),L=Math.sqrt(b),O=o*Math.tan((V-Math.acos((R+b-C)/(2*A*L)))/2),T=O/L,S=O/A;Math.abs(T-1)>M&&this._append`L${e+T*_},${t+T*y}`,this._append`A${o},${o},0,0,${+(y*d>_*v)},${this._x1=e+S*m},${this._y1=t+S*p}`}else this._append`L${this._x1=e},${this._y1=t}`}arc(e,t,i,r,o,c){if(e=+e,t=+t,c=!!c,(i=+i)<0)throw new Error(`negative radius: ${i}`);let g=i*Math.cos(r),m=i*Math.sin(r),p=e+g,_=t+m,y=1^c,b=c?r-o:o-r;null===this._x1?this._append`M${p},${_}`:(Math.abs(this._x1-p)>M||Math.abs(this._y1-_)>M)&&this._append`L${p},${_}`,i&&(b<0&&(b=b%G+G),b>K?this._append`A${i},${i},0,1,${y},${e-g},${t-m}A${i},${i},0,1,${y},${this._x1=p},${this._y1=_}`:b>M&&this._append`A${i},${i},0,${+(b>=V)},${y},${this._x1=e+i*Math.cos(o)},${this._y1=t+i*Math.sin(o)}`)}rect(e,t,i,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}function Q(h){let e=3;return h.digits=function(t){if(!arguments.length)return e;if(null==t)e=null;else{const i=Math.floor(t);if(!(i>=0))throw new RangeError(`invalid digits: ${t}`);e=i}return h},()=>new q(e)}class E extends s.a3{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(s.a3.new(this._root,{width:s.a4,height:s.a4,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:s.a3.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:s.a4,height:s.a4})})}}Object.defineProperty(E,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(E,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.a3.classNames.concat([E.className])});class U extends E{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:s.a3.new(this._root,{width:s.a4,height:s.a4,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new s.as})}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll(t=>{if("clear"===t.type){(0,s.e)(t.oldValues,r=>{this._removeSeries(r)});const i=this.get("colors");i&&i.reset()}else if("push"===t.type)e.moveValue(t.newValue),this._processSeries(t.newValue);else if("setIndex"===t.type)e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("insertIndex"===t.type)e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("removeIndex"===t.type)this._removeSeries(t.oldValue);else{if("moveIndex"!==t.type)throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value)}}))}_processSeries(e){e.chart=this,e._placeBulletsContainer(this)}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer())}}Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:E.classNames.concat([U.className])});class z extends I{}Object.defineProperty(z,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(z,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:I.classNames.concat([z.className])})}}]);