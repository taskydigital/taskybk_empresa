"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[357],{9381:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>PollDetailComponent});var C_Users_Juan_Carlos_Documents_proyectos_tasky_tasky_supplier_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3241),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2283),src_app_shared_var_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4758),src_app_dialog_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8878),_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1359),src_app_database_service__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6655),_angular_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7087),_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5499),_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3578),_angular_material_menu__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(9347),_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(8464);const _c0=["parent"],_c1=["editControlTrigger"];function PollDetailComponent_div_0_Template(n,s){if(1&n){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"div")(1,"app-header",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("onClicked",function(c){_angular_core__WEBPACK_IMPORTED_MODULE_1__.CHM(o);const e=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oxw();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.KtG(e.getClicked(c))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()}2&n&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("buttons","11110")("nav_menu",!0))}function PollDetailComponent_div_3_Template(n,s){if(1&n){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"div",9,10)(2,"app-dynamic-form",11),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("result",function(c){_angular_core__WEBPACK_IMPORTED_MODULE_1__.CHM(o);const e=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oxw();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.KtG(e.onGetData(c))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()}if(2&n){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("jsonFormData",o.sharedvar.pollSelected.schema)("editBtn","more_horiz")}}let PollDetailComponent=(()=>{class _PollDetailComponent{constructor(n,s,o,i){this.sharedvar=n,this.dg=s,this.snkBar=o,this.dtb=i,this.full=!0,this.roundBtnClass="",this.defaPoll={controls:[{name:"welcome",label:"welcome",default:"Selecciona un Modelo",type:"header",style:"w-full",validators:{}}]}}ngOnInit(){var n=this;return(0,C_Users_Juan_Carlos_Documents_proyectos_tasky_tasky_supplier_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.Z)(function*(){let s=100;n.parentEl&&(s=n.parentEl.nativeElement.offsetLeft),n.roundBtnClass=`fixed z-90 bottom-8 left-${s} border-solid border-2 bg-white w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-violet-700 hover:bg-gray-200`})()}ngOnDestroy(){}getClicked(n){2===n.index&&this.onAddEditControl(-1)}onAddEditControl(n=-1){if(!this.sharedvar.pollSelected)return void this.snkBar.open("Seleccione un modelo.","Ok",{duration:5e3});let s;this.sharedvar.pollSelected.schema.controls||(this.sharedvar.pollSelected.schema.controls=[]),n>=0&&(s=JSON.parse(JSON.stringify(this.sharedvar.pollSelected.schema.controls[n]))),this.dg.aDinamycDialog(s).subscribe(o=>{if(o){if(!o._valid_)return void this.snkBar.open("Debe ingresar la informaci\xf3n solicitada.","Ok",{duration:5e3});let i=JSON.parse(JSON.stringify(this.sharedvar.pollSelected?.schema));const c=this.buildPollItem(o);s?i.controls[n]=c:i.controls.push(c),this.sharedvar.pollSelected&&(this.sharedvar.pollSelected.schema=i)}})}buildPollItem(item){const ctrl={name:item.name,label:item.label,type:item.type,validators:item.validators||{}};return item.default&&(ctrl.default=item.default),item.style&&(ctrl.style=item.style),item.default&&(ctrl.default=item.default),item.selectOptions&&(ctrl.selectOptions=eval(item.selectOptions)),item.totalRows&&(ctrl.totalRows=item.totalRows),item.avalue&&(ctrl.avalue=item.avalue),item.description&&(ctrl.description=item.description),item.tags&&(ctrl.tags=item.tags),item.required?ctrl.validators.required=!0:ctrl.validators.nullValidator=!0,item.sideBtn&&(ctrl.sideBtn=item.sideBtn),item.disabled&&(ctrl.disabled=item.disabled),ctrl}onGetData(n){this.result=n;const s=this.result._propName_;if(this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema.controls){const o=this.sharedvar.pollSelected.schema.controls.findIndex(i=>i.name===s);if(o>=0){this.ctrlSel=o;let i=document.getElementById("spanTrigger");i&&(i.style.display="",i.style.position="absolute",i.style.left=n._btnEvent_.pageX+5+"px",i.style.top=n._btnEvent_.pageY+5+"px",this.editControlTrigger.openMenu())}}}onGetGeneralData(n){this.dg.updatePropResult(this.sharedvar.pollSelected,n)}onEditCtrl(){this.onAddEditControl(this.ctrlSel)}onDeleteCtrl(){this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema.controls?.splice(this.ctrlSel,1)}onSwitchCtrl(){if(this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema.controls&&this.ctrlSel>0){const n=this.sharedvar.pollSelected.schema.controls[this.ctrlSel];this.sharedvar.pollSelected.schema.controls[this.ctrlSel]=this.sharedvar.pollSelected.schema.controls[this.ctrlSel-1],this.sharedvar.pollSelected.schema.controls[this.ctrlSel-1]=n}}onDupCtrl(){if(this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema.controls){const n=JSON.stringify(this.sharedvar.pollSelected.schema.controls[this.ctrlSel]);this.sharedvar.pollSelected.schema.controls.push(JSON.parse(n))}}static#_=this.\u0275fac=function n(s){return new(s||_PollDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(src_app_shared_var_service__WEBPACK_IMPORTED_MODULE_3__.D),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(src_app_dialog_service__WEBPACK_IMPORTED_MODULE_4__.x),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.ux),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(src_app_database_service__WEBPACK_IMPORTED_MODULE_6__.k))};static#_2=this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:_PollDetailComponent,selectors:[["app-poll-detail"]],viewQuery:function n(s,o){if(1&s&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Gf(_c0,5),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Gf(_c1,5)),2&s){let i;_angular_core__WEBPACK_IMPORTED_MODULE_1__.iGM(i=_angular_core__WEBPACK_IMPORTED_MODULE_1__.CRH())&&(o.parentEl=i.first),_angular_core__WEBPACK_IMPORTED_MODULE_1__.iGM(i=_angular_core__WEBPACK_IMPORTED_MODULE_1__.CRH())&&(o.editControlTrigger=i.first)}},inputs:{full:"full"},decls:25,vars:5,consts:[[4,"ngIf"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],["class","p-2 flex flex-col items-stretch",4,"ngIf"],[3,"click"],["controlEdit","matMenu"],["mat-menu-item","",3,"click"],[1,"mat-18"],[3,"buttons","nav_menu","onClicked"],[1,"p-2","flex","flex-col","items-stretch"],["parent",""],[3,"jsonFormData","editBtn","result"]],template:function n(s,o){if(1&s&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(0,PollDetailComponent_div_0_Template,2,2,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__._UZ(1,"span",1,2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(3,PollDetailComponent_div_3_Template,3,2,"div",3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(4,"button",4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return o.onAddEditControl()}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(5,"mat-icon"),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(6,"add"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(7,"mat-menu",null,5)(9,"button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return o.onEditCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(10,"mat-icon",7),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(11,"edit"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(12," Editar "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(13,"button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return o.onDeleteCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(14,"mat-icon",7),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(15,"delete"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(16," Eliminar "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(17,"button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return o.onSwitchCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(18,"mat-icon",7),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(19,"import_export"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(20," Subir una posici\xf3n "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(21,"button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return o.onDupCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(22,"mat-icon",7),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(23,"copy"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(24," Duplicar "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()),2&s){const i=_angular_core__WEBPACK_IMPORTED_MODULE_1__.MAs(8);_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngIf",o.full),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("matMenuTriggerFor",i),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngIf",o.sharedvar.pollSelected&&o.sharedvar.pollSelected.schema),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Tol(o.roundBtnClass)}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_7__.O5,_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__.r,_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.G,_angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.VK,_angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.OP,_angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.p6,_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.Hw]})}return _PollDetailComponent})()},6357:(n,s,o)=>{o.r(s),o.d(s,{PollListEditModule:()=>G});var i=o(7087),c=o(3759),e=o(2283),g=o(4758),f=o(6655),D=o(8878),p=o(1359),P=o(3578),T=o(3241),A=o(8046),M=o(6410),E=o(8464);const L=["parent"];function b(l,u){if(1&l){const t=e.EpF();e.TgZ(0,"div")(1,"app-header",8),e.NdJ("onClicked",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.getClicked(a))}),e.qZA()()}2&l&&(e.xp6(1),e.Q6J("buttons","11110")("nav_menu",!0))}function B(l,u){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.TgZ(3,"mat-icon",11),e.NdJ("click",function(){const r=e.CHM(t).index,d=e.oxw();return e.KtG(d.onAddEditPoll(r))}),e._uU(4,"edit"),e.qZA()(),e.TgZ(5,"p",12),e._uU(6),e.qZA(),e.TgZ(7,"div",13)(8,"div",14)(9,"div",15)(10,"input",16),e.NdJ("change",function(a){const d=e.CHM(t).$implicit,h=e.oxw();return e.KtG(h.setBoolStartState(d,a))}),e.qZA(),e.TgZ(11,"label",17),e._uU(12,"Inicio"),e.qZA()(),e.TgZ(13,"div",18)(14,"input",19),e.NdJ("change",function(a){const d=e.CHM(t).$implicit,h=e.oxw();return e.KtG(h.setBoolEndState(d,a))}),e.qZA(),e.TgZ(15,"label",20),e._uU(16,"Fin"),e.qZA()()(),e.TgZ(17,"div")(18,"button",21),e.NdJ("click",function(){const r=e.CHM(t).index,d=e.oxw();return e.KtG(d.onDelete(r))}),e.TgZ(19,"mat-icon"),e._uU(20,"delete"),e.qZA()(),e._uU(21," \xa0 "),e.TgZ(22,"button",22),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.onDetaill(r))}),e._uU(23," Detalle "),e.TgZ(24,"mat-icon"),e._uU(25,"east"),e.qZA()()()()()}if(2&l){const t=u.$implicit;e.xp6(2),e.hij("",t.title," "),e.xp6(4),e.Oqu(t.description),e.xp6(4),e.Q6J("checked",t.allowStart),e.xp6(4),e.Q6J("checked",t.allowEnd)}}let C=(()=>{class l{constructor(t,_,a,r,d){this.sharedvar=t,this.dtb=_,this.dg=a,this.snkBar=r,this.nvg=d,this.full=!0,this.onClicked=new e.vpe,this.roundBtnClass="",this.flexHeightClass="overflow-auto flex flex-row flex-wrap p-2 gap-2",this.formData={controls:[{name:"title",label:"Nombre del Modelo:",type:"text",style:"w-full",validators:{required:!0}},{name:"description",label:"Descripci\xf3n:",type:"textarea",style:"w-full h-36",totalRows:5,validators:{}},{name:"allowStart",label:"Iniciar",type:"checkbox",validators:{}},{name:"allowEnd",label:"Finalizar",type:"checkbox",validators:{}}]},this.formDataOnStartEnd={controls:[{name:"sendMail2",label:"Enviar a correos electr\xf3nicos:",type:"textarea",totalRows:4,style:"w-full",validators:{}},{name:"geoLoc",label:"Agregar ubicaci\xf3n",type:"checkbox",validators:{}},{name:"crm",label:"Es CRM",type:"checkbox",validators:{}},{name:"moreemail",label:"Enviar correo electr\xf3nico adicional.",type:"checkbox",validators:{}}]}}ngOnInit(){var t=this;return(0,T.Z)(function*(){let _=100;t.parentEl&&(_=t.parentEl.nativeElement.offsetLeft),t.roundBtnClass=`fixed z-90 bottom-8 left-${_} border-solid border-2 bg-white w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-violet-700 hover:bg-gray-200`,t.full||(t.flexHeightClass="w-96 flex flex-col p-2 gap-2 ")})()}getClicked(t){2===t.index&&this.onAddEditPoll()}onAddEditPoll(t=-1){let _=this.dtb.newPoll();t>=0&&(_=this.sharedvar.pollGrpExecuted.pollList[t]),this.dg.aDefault({title:"Modelo",schema:this.formData,dgwidth:300,dgheigth:450,value:_}).subscribe(r=>{if(r){if(!r._valid_)return void this.snkBar.open("Debe ingresar la informaci\xf3n solicitada.","Ok",{duration:5e3});this.dg.updatePropResult(_,r),t<0?this.sharedvar.pollGrpExecuted.pollList.push(_):this.sharedvar.pollGrpExecuted.pollList[t]=_,this.sharedvar.pollSelected=_}})}setBoolStartState(t,_){t.allowStart=_.target.checked,this.sharedvar.pollGrpExecuted.pollList.sort((a,r)=>Number(r.allowStart)-Number(a.allowStart))}setBoolEndState(t,_){t.allowEnd=_.target.checked}setBool(t){t.allowStart&&this.sharedvar.pollGrpExecuted.pollList.forEach(_=>{_.id!==t.id&&(t.allowStart=!1)})}onStarEndData(t){let _;_=t?this.sharedvar.pollGrpExecuted.onStart:this.sharedvar.pollGrpExecuted.onEnd,this.dg.aDefault({schema:this.formDataOnStartEnd,value:_,title:"Actividades autom\xe1ticas",dgwidth:350,dgheigth:475}).subscribe(r=>{r&&(t?this.sharedvar.pollGrpExecuted.onStart=r:this.sharedvar.pollGrpExecuted.onEnd=r)})}onDetaill(t){this.sharedvar.pollSelected=t,this.full&&this.nvg.onRouteDetail(`Modelo: ${t.title}`,"","polldetail",!1),this.onClicked.emit(t)}onDelete(t){this.snkBar.open(`Eliminar: ${this.sharedvar.pollGrpExecuted.pollList[t].title}.`,"Eliminar",{duration:5e3}).onAction().subscribe(_=>{this.sharedvar.pollGrpExecuted.pollList.splice(t,1),this.sharedvar.pollSelected=null})}getButtonPos(){let t=100;return this.parentEl&&(t=this.parentEl.nativeElement.offsetLeft),console.log("Element",t),`fixed z-90 bottom-8 left-${t} bg-black w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-red-500 hover:bg-gray-700`}static#e=this.\u0275fac=function(_){return new(_||l)(e.Y36(g.D),e.Y36(f.k),e.Y36(D.x),e.Y36(p.ux),e.Y36(A.$))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-poll-list"]],viewQuery:function(_,a){if(1&_&&e.Gf(L,5),2&_){let r;e.iGM(r=e.CRH())&&(a.parentEl=r.first)}},inputs:{full:"full"},outputs:{onClicked:"onClicked"},decls:20,vars:6,consts:[[4,"ngIf"],["parent",""],[1,"flex","flex-col","gap-1"],[1,"flex","items-center","justify-start","h-12","w-80","rounded-md","bg-white","p-3","shadow-lg",3,"click"],[1,"flex-1","mt-1","mb-2","font-medium","leading-tight","overflow-hidden"],["mat-stroked-button","","color","primary"],["class","h-[11rem] w-80 rounded-md bg-white p-3 shadow-lg",4,"ngFor","ngForOf"],[3,"click"],[3,"buttons","nav_menu","onClicked"],[1,"h-[11rem]","w-80","rounded-md","bg-white","p-3","shadow-lg"],[1,"mb-2","font-medium","leading-tight","overflow-hidden"],[1,"text-violet-500","ml-2",3,"click"],[1,"mb-4","h-12","pl-3","overflow-hidden"],[1,"flex","items-center","justify-start"],[1,"flex-1"],[1,"flex","items-center","mb-1"],["id","inicio","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"checked","change"],["for","inicio",1,"ml-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],[1,"flex","items-center"],["checked","","id","fin","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"checked","change"],["for","fin",1,"ml-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary",3,"click"]],template:function(_,a){1&_&&(e.YNc(0,b,2,2,"div",0),e.TgZ(1,"div",null,1)(3,"div",2)(4,"div",3),e.NdJ("click",function(){return a.onStarEndData(!0)}),e.TgZ(5,"div",4),e._uU(6,"Actividades comienzo"),e.qZA(),e.TgZ(7,"div")(8,"button",5),e._uU(9," Detalle "),e.qZA()()(),e.TgZ(10,"div",3),e.NdJ("click",function(){return a.onStarEndData(!1)}),e.TgZ(11,"div",4),e._uU(12,"Actividades Fin"),e.qZA(),e.TgZ(13,"div")(14,"button",5),e._uU(15," Detalle "),e.qZA()()(),e.YNc(16,B,26,4,"div",6),e.qZA()(),e.TgZ(17,"button",7),e.NdJ("click",function(){return a.onAddEditPoll()}),e.TgZ(18,"mat-icon"),e._uU(19,"add"),e.qZA()()),2&_&&(e.Q6J("ngIf",a.full),e.xp6(1),e.Tol(a.flexHeightClass),e.xp6(15),e.Q6J("ngForOf",a.sharedvar.pollGrpExecuted.pollList),e.xp6(1),e.Tol(a.roundBtnClass))},dependencies:[i.sg,i.O5,P.G,M.lW,E.Hw]})}return l})();var O=o(9381);function U(l,u){1&l&&e._UZ(0,"app-poll-list")}function x(l,u){if(1&l){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"app-poll-list",5),e.NdJ("onClicked",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.getClicked(a))}),e.qZA()(),e.TgZ(3,"div",6),e._UZ(4,"app-poll-detail",7),e.qZA()()}2&l&&(e.xp6(2),e.Q6J("full",!1),e.xp6(2),e.Q6J("full",!1))}const I=[{path:"",component:(()=>{class l{constructor(t,_,a,r){this.sharedvar=t,this.dtb=_,this.dg=a,this.snkBar=r,this.screenSplit=!0,this.formData={controls:[{name:"title",label:"Nombre del Modelo:",type:"text",style:"w-full",validators:{required:!0}},{name:"description",label:"Descripci\xf3n:",type:"textarea",style:"w-full h-36",totalRows:5,validators:{}},{name:"allowStart",label:"Iniciar",type:"checkbox",validators:{}},{name:"allowEnd",label:"Finalizar",type:"checkbox",validators:{}}]}}ngOnInit(){this.sharedvar.pollSelected=this.sharedvar.pollGrpExecuted.pollList.length>0?this.sharedvar.pollGrpExecuted.pollList[0]:null}getClicked(t){}onAddEditPoll(t=-1){let _=this.dtb.newPoll();t>=0&&(_=this.sharedvar.pollGrpExecuted.pollList[t]),this.dg.aDefault({title:"Modelo",schema:this.formData,dgwidth:300,dgheigth:450,value:_}).subscribe(r=>{if(r){if(!r._valid_)return void this.snkBar.open("Debe ingresar la informaci\xf3n solicitada.","Ok",{duration:5e3});this.dg.updatePropResult(_,r),t<0?this.sharedvar.pollGrpExecuted.pollList.push(_):this.sharedvar.pollGrpExecuted.pollList[t]=_}})}static#e=this.\u0275fac=function(_){return new(_||l)(e.Y36(g.D),e.Y36(f.k),e.Y36(D.x),e.Y36(p.ux))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-poll-list-edit"]],decls:3,vars:4,consts:[[3,"buttons","nav_menu","onClicked"],[4,"ngIf"],["class","flex max-h-screen",4,"ngIf"],[1,"flex","max-h-screen"],[1,"overflow-y-visible","h-screen","w-96","bg-slate-200"],[3,"full","onClicked"],[1,"overflow-y-visible","h-screen","w-3/5","p-2"],[3,"full"]],template:function(_,a){1&_&&(e.TgZ(0,"app-header",0),e.NdJ("onClicked",function(d){return a.getClicked(d)}),e.qZA(),e.YNc(1,U,1,0,"app-poll-list",1),e.YNc(2,x,5,2,"div",2)),2&_&&(e.Q6J("buttons","11010")("nav_menu",!0),e.xp6(1),e.Q6J("ngIf",!a.screenSplit),e.xp6(1),e.Q6J("ngIf",a.screenSplit))},dependencies:[i.O5,P.G,C,O.p]})}return l})()}];let R=(()=>{class l{static#e=this.\u0275fac=function(_){return new(_||l)};static#t=this.\u0275mod=e.oAB({type:l});static#_=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(I),c.Bz]})}return l})();var m=o(769),v=o(7572);const k=[{path:"",component:C}];let K=(()=>{class l{static#e=this.\u0275fac=function(_){return new(_||l)};static#t=this.\u0275mod=e.oAB({type:l});static#_=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(k),c.Bz]})}return l})();var y=o(6302);let W=(()=>{class l{static#e=this.\u0275fac=function(_){return new(_||l)};static#t=this.\u0275mod=e.oAB({type:l});static#_=this.\u0275inj=e.cJS({imports:[i.ez,K,m.O,M.ot,E.Ps,y.p9]})}return l})();const w=[{path:"",component:O.p}];let S=(()=>{class l{static#e=this.\u0275fac=function(_){return new(_||l)};static#t=this.\u0275mod=e.oAB({type:l});static#_=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(w),c.Bz]})}return l})();var Z=o(9347);let J=(()=>{class l{static#e=this.\u0275fac=function(_){return new(_||l)};static#t=this.\u0275mod=e.oAB({type:l});static#_=this.\u0275inj=e.cJS({imports:[i.ez,S,p.ZX,v.N,m.O,Z.Tx,E.Ps]})}return l})(),G=(()=>{class l{static#e=this.\u0275fac=function(_){return new(_||l)};static#t=this.\u0275mod=e.oAB({type:l});static#_=this.\u0275inj=e.cJS({imports:[i.ez,R,m.O,v.N,W,J]})}return l})()}}]);