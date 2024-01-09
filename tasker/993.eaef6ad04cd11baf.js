"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[993],{7993:(x,m,r)=>{r.r(m),r.d(m,{PollModule:()=>se});var p=r(6895),c=r(9132),d=r(5861),_=r(6599);class b extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class E extends Error{constructor(v){super("Could not get the public IP address",v),this.name="IpNotFoundError"}}const P={timeout:5e3},h={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},M=(a,v,e)=>{const l=new XMLHttpRequest;let s;const o=new Promise((u,i)=>{s=i,l.addEventListener("error",i,{once:!0}),l.addEventListener("timeout",i,{once:!0}),l.addEventListener("load",()=>{const f=l.responseText.trim();f&&_[e](f)?u(f):i()},{once:!0}),l.open("GET",a),l.timeout=v.timeout,l.send()});return o.cancel=()=>{l.abort(),s(new b)},o},w=(a,v)=>{let e;const l=(0,d.Z)(function*(){const s=[...h[a],...v.fallbackUrls??[]];let o;for(const u of s)try{return e=M(u,v,a),yield e}catch(i){if(o=i,i instanceof b)throw i}throw new E({cause:o})})();return l.cancel=()=>{e.cancel()},l},A={v4:a=>w("v4",{...P,...a}),v6:a=>w("v6",{...P,...a})};function S(){return(S=(0,d.Z)(function*(a){if(a={timeout:5e3,ipVersion:4,...a},!navigator?.onLine)return!1;const v=4===a.ipVersion?"v4":"v6";try{return yield A[v](a),!0}catch{return!1}})).apply(this,arguments)}var t=r(4650),F=r(8826),T=r(7009),J=r(164),C=r(5412),y=r(4859),$=r(7392),k=r(4006),L=r(9549),U=r(4144),D=r(4633);function B(a,v){if(1&a){const e=t.EpF();t.TgZ(0,"div",10)(1,"mat-form-field",10)(2,"mat-label"),t._uU(3,"Filtro"),t.qZA(),t.TgZ(4,"input",11),t.NdJ("ngModelChange",function(s){t.CHM(e);const o=t.oxw();return t.KtG(o.filtertext=s)}),t.qZA(),t.TgZ(5,"mat-icon",12),t._uU(6,"search"),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.filtertext)}}function I(a,v){if(1&a&&(t.TgZ(0,"mat-list-option",13),t._uU(1),t.qZA()),2&a){const e=v.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.name," ")}}function N(a,v){if(1&a){const e=t.EpF();t.TgZ(0,"div",14)(1,"button",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let Y=(()=>{class a{constructor(e,l){this.dialogRef=e,this.data=l,this.valuelst=[],this.filtertext="",this.selectedOptions=[],e.disableClose=!0}onNew(){this.dialogRef.close({new:!0})}ngOnInit(){this.valuelst=this.data.valuelst}onFilter(e){const l=this.filtertext.toUpperCase();return!!(0===l.length||e&&e.name&&e.name.toUpperCase().search(l)>=0)}onSave(){this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}static#e=this.\u0275fac=function(l){return new(l||a)(t.Y36(C.so),t.Y36(C.WI))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-select-dialog"]],decls:18,vars:6,consts:[[1,"flex","flex-col","h-full"],[1,"h-20","p-3","text-9xl","bg-violet-600","text-white"],["style","width: 100%;",4,"ngIf"],[1,"flex-1","overflow-auto"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],[2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matSuffix",""],[3,"value"],["fxFlex","",1,"flex-1"]],template:function(l,s){1&l&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.YNc(5,B,7,1,"div",2),t.TgZ(6,"div",3)(7,"mat-selection-list",4),t.NdJ("ngModelChange",function(u){return s.selectedOptions=u}),t.YNc(8,I,2,2,"mat-list-option",5),t.qZA()(),t.TgZ(9,"div",6),t.YNc(10,N,5,0,"div",7),t.TgZ(11,"button",8),t.NdJ("click",function(){return s.onDismiss()}),t.TgZ(12,"mat-icon"),t._uU(13,"close"),t.qZA()(),t._uU(14," \xa0 "),t.TgZ(15,"button",9),t.NdJ("click",function(){return s.onSave()}),t.TgZ(16,"mat-icon"),t._uU(17,"done"),t.qZA()()()()),2&l&&(t.xp6(2),t.Oqu(s.data.title),t.xp6(2),t.Oqu(s.data.description),t.xp6(1),t.Q6J("ngIf",s.data.viewfilter),t.xp6(2),t.Q6J("ngModel",s.selectedOptions),t.xp6(1),t.Q6J("ngForOf",s.valuelst),t.xp6(2),t.Q6J("ngIf",s.data.viewAdd))},dependencies:[p.sg,p.O5,y.lW,$.Hw,k.Fj,k.JJ,k.On,L.KE,L.hX,L.R9,U.Nt,D.Ub,D.vS]})}return a})(),z=(()=>{class a{constructor(e){this.dialog=e}aSelectDefault(e){let l=window.innerHeight-20;e.dgheigth=e.dgheigth||l,l=l>e.dgheigth?e.dgheigth:l;let s=window.innerWidth-20;return e.dgwidth=e.dgwidth||s,s=s>e.dgwidth?e.dgwidth:s,this.dialogRef=this.dialog.open(Y,{panelClass:"custom-dialog-container",height:l.toString()+"px",width:s.toString()+"px",data:e}),this.dialogRef.afterClosed()}static#e=this.\u0275fac=function(l){return new(l||a)(t.LFG(C.uw))};static#t=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var H=r(2419),G=r(5377),Q=r(1316),j=r(3646),V=r(2395);function X(a,v){if(1&a){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onBack())}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA()()}}function K(a,v){if(1&a){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onEndPoll())}),t._uU(1," Finalizar"),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()()}}const W=[{path:"",component:(()=>{class a{constructor(e,l,s,o,u,i,f){this.dtb=e,this.snkBar=l,this.dg=s,this.ds=o,this.nvg=u,this.sharedvar=i,this.notifServ=f,this.lchat=!1,this.goto=[],this.reset=0}ngOnInit(){var e=this;return(0,d.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack());const l=e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id).subscribe(s=>{l&&l.unsubscribe(),e.sharedvar.selPollResult=s,e.sharedvar.selPollResult.status<2&&e.OnStartPoll(),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})})()}OnStartPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.pollExecSelected.onStart&&(e.sharedvar.pollExecSelected.onStart.sendMail2&&e.sharedvar.pollExecSelected.onStart.sendMail2.length>0&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onStart.sendMail2,"","start"),e.sharedvar.selPollResult.crm=e.sharedvar.pollExecSelected.crm||!1,e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.getLocalization())),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status")})()}OnEndPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.date_end=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.getLocalization())})()}subscribeChatEvent(){var l,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(l=(0,d.Z)(function*(s){"chat"===s.collection&&s.field_id&&s.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(o){return l.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,d.Z)(function*(){const l=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=l;const s=l.length-1;return s>=0&&"W"===l[s].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[s].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,s})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){3===e.index&&this.dg.aChat({title:"Chat",dgwidth:400,value:this.sharedvar.selPollResult})}onGetData(e){var l=this;return(0,d.Z)(function*(){const s=e._btnclick_;if(s&&l.selectedPoll.schema.controls){const o=l.selectedPoll.schema.controls.find(u=>u.name===s);if(o&&o.tags)switch(o.tags.type){case"goto":const u=l.sharedvar.pollExecSelected.pollList.find(i=>i.id===o.avalue);if(u&&o.avalue&&o.avalue.length>0)return l.goto.push(o.avalue),l.updateLocalList(l.selectedPoll.values,e),void(l.selectedPoll=u);break;case"geolocation":e[s]=yield l.getLocalization(),o.sideBtn="done";break;case"picture":l.getPicture(e,o,s);break;case"draw":l.getDraw(e,o,s);break;case"appoint":l.getAppoint(e,s);break;case"costumer":l.getCostumer(e,s);break;case"product":l.getProduct(e,s)}}l.updateLocalList(l.selectedPoll.values,e)})()}getLocalization(){var e=this;return(0,d.Z)(function*(){const s=yield e.getPosition();s.lng=Math.trunc(1e4*s.lng)/1e4,s.lat=Math.trunc(1e4*s.lat)/1e4;const o=`${s.lat},${s.lng}`;return e.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),e.dtb.getLink2geo(o)})()}updateLocalList(e,l){!e||!l||(l._btnEvent_="",l._btnclick_="",this.dg.updatePropResult(e,l),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult),this.reset++)}updateValues2Save(e,l){l._btnEvent_="",l._btnclick_="",this.dg.updatePropResult(e,l)}onBack(){if(this.selectedPoll.values&&!1===this.selectedPoll.values._valid_)this.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3});else if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(l=>l.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onEndPoll(){var e=this;return(0,d.Z)(function*(){e.selectedPoll.values&&!1===e.selectedPoll.values._valid_?e.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3}):e.selectedPoll.allowEnd&&e.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,d.Z)(function*(){e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function O(a){return S.apply(this,arguments)}())?e.dtb.promiseMetaData(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult).then(function(){var l=(0,d.Z)(function*(s){s&&(e.sharedvar.pollExecSelected.pollList.forEach(o=>{e.updateValues2Save(e.sharedvar.selPollResult.values,o.values)}),yield e.OnEndPoll(),e.sharedvar.selPollResult.metaValues=[],e.sharedvar.selPollResult=yield e.dtb.CreateUpdatePollResult(e.sharedvar.selPollResult),yield e.dtb.updateStaffAsycn(e.sharedvar.staff),console.log(e.sharedvar.selPollResult),e.sharedvar.pollExecSelected&&e.sharedvar.pollExecSelected.onEnd?.sendMail2&&e.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&e.buildHtml2Pdf(),e.dtb.delFromLocalList(e.sharedvar.pollExecSelected),e.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(s){return l.apply(this,arguments)}}()):(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})}))})()}buildHtml2Pdf(){this.dg.aPollResult({schema:{},value:this.sharedvar.selPollResult,title:"Datos de la encuesta: "+this.sharedvar.selPollResult.staff_name}).subscribe(l=>{l&&this.sharedvar.pollExecSelected.onEnd&&this.sharedvar.pollExecSelected.onEnd.sendMail2&&this.dtb.notifMail(this.sharedvar.selPollResult,this.sharedvar.pollExecSelected.onEnd.sendMail2,l,"end")})}geoloc(){var e=this;return(0,d.Z)(function*(){yield e.getPosition().then(s=>{s.lng=Math.trunc(100*s.lng)/100,s.lat=Math.trunc(100*s.lat)/100})})()}getPosition(){return new Promise((e,l)=>{navigator.geolocation.getCurrentPosition(s=>{e({lng:s.coords.longitude,lat:s.coords.latitude})},s=>{l(s)})})}getPicture(e,l,s){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(i=>{i&&i.urlrute&&i.urlrute.length>0&&(e[s]=i.urlrute,e[s]=`${l.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[s]=i.urlrute,this.updateLocalList(this.selectedPoll.values,e))})}getDraw(e,l,s){this.dg.aDraw({title:"Dibujar",value:{img:this.sharedvar.selPollResult.metaValues[s]?this.sharedvar.selPollResult.metaValues[s]:l.avalue,name:"pepito"}}).subscribe(i=>{i&&i.urlrute&&i.urlrute.length>0&&(e[s]=`${l.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[s]=i.urlrute,this.updateLocalList(this.selectedPoll.values,e))})}getAppoint(e,l){var s=this;return(0,d.Z)(function*(){let o="No seleccionado",u={name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}};const i={};if(s.sharedvar.selPollResult.crm_costum_id){const n=yield s.dtb.getCMRCostumAsync(s.sharedvar.selPollResult.crm_costum_id);o=n&&n.name?n.name:o;const g=[];n?.linkup_1&&(i[n.linkup_1]={email:n.email_1||"none",phone:n.phone_1||"none"},g.push({key:n.linkup_1,value:n.linkup_1})),n?.linkup_2&&(i[n.linkup_2]={email:n.email_2||"one",phone:n.phone_2||"nonde"},g.push({key:n?.linkup_2,value:n?.linkup_2})),u.type="select",u.selectOptions=g}s.dg.aDefault({title:"Agendar",schema:{controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",default:o,validators:{required:!0}},u,{name:"task",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:s.sharedvar.selPollResult.metaValues[l],dgwidth:400,dgheigth:550}).subscribe(n=>{n&&n.datetime&&n.datetime.length>0&&(e[l]=`${n.datetime}: ${n.task||""}`,n.datetime=new Date(n.datetime).getTime(),n.phone=i[n.contact].phone||"none",n.email=i[n.contact].email||"none",s.sharedvar.selPollResult.metaValues[l]=n,s.updateLocalList(s.selectedPoll.values,e))})})()}getCostumer(e,l){const s=this.sharedvar.pollExecSelected.costumerList;s&&s.length>0&&this.onSelCtrlStaff(s,"Seleccione Cliente",e,l,"costumer")}getProduct(e,l){const s=this.sharedvar.pollExecSelected.productList;s&&s.length>0&&this.onSelCtrlStaff(s,"Seleccione Producto",e,l,"product")}onSelCtrlStaff(e,l,s,o,u){var i=this;return(0,d.Z)(function*(){const f=[];e.forEach(n=>{if(n){const g=n.split(":");f.push({selected:!1,myid:g[0],name:g[1]})}});const Z={title:l,dgwidth:450,viewfilter:!0,viewAdd:!1,valuelst:f};return yield i.ds.aSelectDefault(Z).subscribe(n=>{n&&(s[o]=n[0].name,i.updateLocalList(i.selectedPoll.values,s),"product"===u?(i.sharedvar.selPollResult.crm_prod_id=n[0].myid,i.sharedvar.selPollResult.crm_prod_name=n[0].name):(i.sharedvar.selPollResult.crm_costum_id=n[0].myid,i.sharedvar.selPollResult.crm_costum_name=n[0].name))})})()}onResultDone(e){let l={...e};return this.sharedvar.pollExecSelected.pollList.forEach(s=>{l.values={...l.values,...s.values}}),l.values&&(l.values._btnEvent_="",l.values._valid_=!0),l}static#e=this.\u0275fac=function(l){return new(l||a)(t.Y36(F.k),t.Y36(T.ux),t.Y36(J.x),t.Y36(z),t.Y36(H.$),t.Y36(G.D),t.Y36(Q.$))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-poll"]],decls:8,vars:7,consts:[[1,"flex","flex-col","h-screen","w-screen"],[3,"buttons","lchat","onClicked"],[1,"grow","px-3","pt-3","overflow-auto"],[3,"reset","jsonFormData","values","result"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","primary","mat-raised-button","",3,"click"]],template:function(l,s){1&l&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(u){return s.getClicked(u)}),t.qZA(),t.TgZ(2,"div",2)(3,"app-dynamic-form",3),t.NdJ("result",function(u){return s.onGetData(u)}),t.qZA()(),t.TgZ(4,"div",4),t.YNc(5,X,3,0,"button",5),t._uU(6," \xa0 "),t.YNc(7,K,4,0,"button",5),t.qZA()()),2&l&&(t.xp6(1),t.Q6J("buttons","000100")("lchat",s.lchat),t.xp6(2),t.Q6J("reset",s.reset)("jsonFormData",s.selectedPoll.schema)("values",s.selectedPoll.values),t.xp6(2),t.Q6J("ngIf",s.goto.length>1),t.xp6(2),t.Q6J("ngIf",s.selectedPoll.allowEnd))},dependencies:[p.O5,j.G,V.r,y.lW,$.Hw]})}return a})()}];let q=(()=>{class a{static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275mod=t.oAB({type:a});static#l=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(W),c.Bz]})}return a})();var ee=r(8471),te=r(6842),le=r(8255);let se=(()=>{class a{static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275mod=t.oAB({type:a});static#l=this.\u0275inj=t.cJS({imports:[p.ez,q,ee.O,te.N,le.Tx,y.ot,$.Ps,T.ZX]})}return a})()},4066:x=>{const m="[a-fA-F\\d:]",r=h=>h&&h.includeBoundaries?`(?:(?<=\\s|^)(?=${m})|(?<=${m})(?=\\s|$))`:"",p="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",c="[a-fA-F\\d]{1,4}",d=`\n(?:\n(?:${c}:){7}(?:${c}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${c}:){6}(?:${p}|:${c}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${c}:){5}(?::${p}|(?::${c}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${c}:){4}(?:(?::${c}){0,1}:${p}|(?::${c}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${c}:){3}(?:(?::${c}){0,2}:${p}|(?::${c}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${c}:){2}(?:(?::${c}){0,3}:${p}|(?::${c}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${c}:){1}(?:(?::${c}){0,4}:${p}|(?::${c}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${c}){0,5}:${p}|(?::${c}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),_=new RegExp(`(?:^${p}$)|(?:^${d}$)`),b=new RegExp(`^${p}$`),E=new RegExp(`^${d}$`),P=h=>h&&h.exact?_:new RegExp(`(?:${r(h)}${p}${r(h)})|(?:${r(h)}${d}${r(h)})`,"g");P.v4=h=>h&&h.exact?b:new RegExp(`${r(h)}${p}${r(h)}`,"g"),P.v6=h=>h&&h.exact?E:new RegExp(`${r(h)}${d}${r(h)}`,"g"),x.exports=P},6599:(x,m,r)=>{const p=r(4066),c=d=>p({exact:!0}).test(d);c.v4=d=>p.v4({exact:!0}).test(d),c.v6=d=>p.v6({exact:!0}).test(d),c.version=d=>c(d)?c.v4(d)?4:6:void 0,x.exports=c}}]);