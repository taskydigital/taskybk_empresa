"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[770],{5770:(G,g,n)=>{n.r(g),n.d(g,{PlayPollModule:()=>O});var r=n(7087),h=n(3759),m=n(3241),y=n(1348),b=n.t(y,2),t=n(2283),C=n(4758),T=n(8046),k=n(6655),I=n(8878),v=n(1359),x=n(2249),Z=n(3578),u=n(9347),p=n(8464);function P(l,f){if(1&l){const e=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onClick(0))}),t.TgZ(1,"span")(2,"mat-icon"),t._uU(3,"delete"),t.qZA()()()}}function L(l,f){if(1&l){const e=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onClick(2))}),t.TgZ(1,"span")(2,"mat-icon"),t._uU(3,"task_alt"),t.qZA()()()}}function E(l,f){if(1&l){const e=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onClick(3))}),t.TgZ(1,"span")(2,"mat-icon"),t._uU(3,"forum"),t.qZA()()()}}const F=function(l){return{"background-color":l}};let _=(()=>{class l{constructor(){this.onClicked=new t.vpe}getLastChat(){return this.chatItem.chats&&this.chatItem.chats.length>0&&this.chatItem.chats[this.chatItem.chats.length-1].msg||"Esperando..."}getBackColor(){return this.chatItem.ended?"#C6DEFF":this.chatItem.chats&&this.chatItem.chats.length>0&&"W"===this.chatItem.chats[this.chatItem.chats.length-1].type?"white":"#ffffcc"}getPicture(){return this.chatItem.staff_picture&&this.chatItem.staff_picture.length>0?this.chatItem.staff_picture:"../assets/images/favicon.png"}onClick(e){this.onClicked.emit({chatItem:this.chatItem,cmd:e})}static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-chat"]],inputs:{chatItem:"chatItem"},outputs:{onClicked:"onClicked"},decls:18,vars:9,consts:[[1,"h-24","w-64","flex","flex-col","rounded","border","border-gray-200","p-1","shadow-sm",3,"ngStyle"],[1,"flex","flex-row"],["alt","chatItem.staff_name",1,"h-12","w-12","rounded-full","object-fill",3,"src"],[1,"flex","flex-col","items-start","px-2"],[1,"h-6","w-48","overflow-hidden","font-medium","leading-tight"],[1,"h-5","w-48","overflow-hidden","text-justify","font-thin"],[1,"h-3"],[1,"w-48","h-6","px-1","border-t","border-violet-300","flex","flex-row","gap-x-2","justify-end","text-gray-200"],["class","pt-1 hover:border-violet-500 hover:text-violet-500",3,"click",4,"ngIf"],[1,"pt-1","hover:border-violet-500","hover:text-violet-500",3,"click"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t._UZ(8,"div",6),t.TgZ(9,"div",7),t.YNc(10,P,4,0,"div",8),t._uU(11," \xa0 "),t.TgZ(12,"div",9),t.NdJ("click",function(){return i.onClick(1)}),t.TgZ(13,"span")(14,"mat-icon"),t._uU(15,"perm_identity"),t.qZA()()(),t.YNc(16,L,4,0,"div",8),t.YNc(17,E,4,0,"div",8),t.qZA()()()()),2&a&&(t.Q6J("ngStyle",t.VKq(7,F,i.getBackColor())),t.xp6(2),t.Q6J("src",i.getPicture(),t.LSH),t.xp6(3),t.Oqu(i.chatItem.staff_name),t.xp6(2),t.Oqu(i.getLastChat()),t.xp6(3),t.Q6J("ngIf",!i.chatItem.ended),t.xp6(6),t.Q6J("ngIf",i.chatItem.ended),t.xp6(1),t.Q6J("ngIf",!i.chatItem.ended))},dependencies:[r.O5,r.PC,p.Hw]})}return l})();const R=["editControlTrigger"];function A(l,f){if(1&l){const e=t.EpF();t.TgZ(0,"div")(1,"app-chat",7),t.NdJ("onClicked",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.onChatItemClicked(i))}),t.qZA()()}if(2&l){const e=f.$implicit;t.xp6(1),t.Q6J("chatItem",e)}}const w=[{path:"",component:(()=>{class l{constructor(e,a,i,s,o,d){this.sharedvar=e,this.nvg=a,this.dtb=i,this.dg=s,this.snkBar=o,this.notif=d,this.selResultId="",this.headerList=[],this.FilterResult={filter:1,status:2,pollGrp_id:"",date_ini:0,date_end:0},this.ctrlList=this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema?this.sharedvar.pollSelected.schema:{controls:[]}}ngOnInit(){this.nvg.playing=!0,this.headerList.push({name:"staff_name",label:"Tasker",type:"text",pos:"tasker"}),this.headerList.push({name:"staffId",label:"Identificaci\xf3n",type:"text",pos:"tasker"}),this.headerList.push({name:"",label:"Plataforma",type:"text",pos:"tasker"}),this.headerList.push({name:"",label:"Calificaci\xf3n",type:"number",pos:"tasker"}),this.sharedvar.pollActivity.pollList.forEach(e=>{e.schema.controls?.forEach(a=>{a.tags&&a.tags.dtbase&&this.headerList.push({name:a.name,label:a.label,type:a.tags.type,pos:"data"})})}),this.headerList.push({name:"date_ini",label:"Hora de inicio",type:"datetime-local",pos:"Info. Encuesta"}),this.headerList.push({name:"geoLocStart",label:"Geo ubicaci\xf3n inicio",type:"geolocation",pos:"Info. Encuesta"}),this.headerList.push({name:"date_end",label:"Hora final",type:"datetime-local",pos:"Info. Encuesta"}),this.headerList.push({name:"geoLocEnd",label:"Geo ubicaci\xf3n final",type:"geolocation",pos:"Info. Encuesta"}),this.FilterResult.pollGrp_id=this.sharedvar.pollActivity._id||"",this.execFilter(),this.chatSub=this.notif.dtb_notification().subscribe({next:e=>{if("chat"===e.collection&&e.field_id){const a=this.pollResultList.findIndex(i=>i._id===e.field_id);a>=0&&this.setPollResultState(a,e)}if("pollresult"===e.collection){const a=this.pollResultList.findIndex(i=>i._id===e.field_id);a>=0&&this.FilterResult.status!==e.data.status?this.pollResultList.splice(a,1):e.data&&this.sharedvar.pollActivity._id===e.data.pollGrp_id&&this.setPollResultState(a,e)}},complete(){}})}setPollResultState(e,a){var i=this;return(0,m.Z)(function*(){const s=yield i.dtb.getPollResultAsync(a.field_id),o=s.chats.length-1;s.status_date=Date.now(),i.pollResultList[e]=s,o>=0&&"T"===s.chats[o].type&&i.snkBar.open(`Mensaje de ${a.user_id}.`,"Ok",{duration:3e3})})()}getClicked(e){switch(e.index){case 1:this.filterDialog();break;case 3:let a=document.getElementById("spanTrigger");a&&(a.style.display="",a.style.position="absolute",a.style.left=e.pageX+5+"px",a.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu())}}onSend2Mobil(){navigator.clipboard.writeText(`https://epoll-cli.firebaseapp.com/?pollexec=${this.sharedvar.pollActivity.id}`).then(a=>{}).catch(a=>alert(a)),this.snkBar.open("V\xednculo copiado al portapapeles.","Ok",{duration:3e3})}onChatItemClicked(e){var a=this;return(0,m.Z)(function*(){switch(e.cmd){case 1:const i=yield a.dtb.getStaffById(e.chatItem.staff__id);a.dg.aDefault({schema:b,value:i,title:"Datos del Tasker"}).subscribe(c=>{c&&(a.dg.updatePropResult(i,c),a.dtb.setStaff(i))});break;case 2:const o=yield a.dtb.getStaffById(e.chatItem.staff__id);a.dg.aPollResult({schema:{},value:e.chatItem,title:"Datos de la encuesta: "+o.names}).subscribe(c=>{});break;case 3:a.selResultId=e.chatItem.id,a.dg.aChat({title:"Chat",dgwidth:400,value:e.chatItem||[]}).subscribe(c=>{c&&c.value.length>0&&(e.staff.chats=c.value,a.dtb.updatePollResultAsync(e.staff)),a.selResultId=""})}})()}filterDialog(){var e=this;this.dg.aDefault({schema:{controls:[{name:"filter",label:"Tipo de b\xfasqueda:",type:"select",validators:{},selectOptions:[{key:"0",value:"Todo"},{key:"1",value:"Estado por fecha"},{key:"3",value:"Todo por fecha"}]},{name:"status",label:"Estado:",type:"select",validators:{},selectOptions:[{key:"1",value:"Seleccionado"},{key:"2",value:"En proceso"},{key:"3",value:"Finalizado"},{key:"4",value:"Aprobado"},{key:"5",value:"pagado"}]},{name:"alldates",label:"desde siempre",type:"checkbox",validators:{}},{name:"date_ini_str",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end_str",label:"Fecha final:",type:"date",validators:{}}]},value:this.FilterResult,title:"Filtros",dgwidth:250,dgheigth:500}).subscribe(function(){var s=(0,m.Z)(function*(o){o&&(o.alldates?(o.date_ini=0,o.date_end=0):(o.date_ini=Date.parse(o.date_ini_str)||0,o.date_end=Date.parse(o.date_end_str)||0),e.dg.updateOnlyExistProp(e.FilterResult,o),e.execFilter())});return function(o){return s.apply(this,arguments)}}())}execFilter(){const e=this.dtb.getPollResultByFilter(this.FilterResult).subscribe({next:a=>{this.pollResultList=[],this.pollResultList=a},complete:()=>{e&&e.unsubscribe()}})}csvStream(){let e="",a="";return this.headerList.forEach(i=>{a===i.pos?e+="\t":(a=i.pos,e+=`${i.pos}\t`)}),e+="\n",this.headerList.forEach(i=>e+=`${i.label}\t`),e+="\n",this.pollResultList.forEach(i=>{e+="\n",this.headerList.forEach(s=>{"tasker"===s.pos&&(e+=i[s.name]?i[s.name]:"",e+="\t")}),this.headerList.forEach(s=>{"data"===s.pos&&(e+=i.values&&i.values[s.name]?i.values[s.name]:"",e+="\t")}),this.headerList.forEach(s=>{if("Info. Encuesta"===s.pos){if(i[s.name])if("datetime-local"===s.type){let o=Number(i[s.name]),d=new Date(o).toLocaleString();e+=d}else e+=i[s.name];else e+="";e+="\t"}}),e+="\n"}),e}jsonStream(){let e=[];const a=this.headerList.reduce((i,s)=>({...i,[s.name]:s.label}),{});return e.push(a),this.pollResultList.forEach(i=>{if(i.values){const s=[i.values];e=[...e,...s]}}),e}downloadFile(){const e=JSON.stringify(this.jsonStream());var a=this.encode(e),i=new Blob([a],{type:"application/octet-stream"}),s=URL.createObjectURL(i);window.open(s)}encode(e){for(var a=[],i=0;i<e.length;i++)a[i]=e.charCodeAt(i);return new Uint16Array(a)}downloadTable2Excel(){const e=new Blob([this.csvStream()],{type:"text/csv;charset=utf-8"});var a=URL.createObjectURL(e);window.open(a)}static#t=this.\u0275fac=function(a){return new(a||l)(t.Y36(C.D),t.Y36(T.$),t.Y36(k.k),t.Y36(I.x),t.Y36(v.ux),t.Y36(x.$))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-play-poll"]],viewQuery:function(a,i){if(1&a&&t.Gf(R,5),2&a){let s;t.iGM(s=t.CRH())&&(i.editControlTrigger=s.first)}},decls:24,vars:4,consts:[[3,"buttons","nav_menu","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"p-1","flex","flex-row","flex-wrap","gap-1"],[4,"ngFor","ngForOf"],["controlEdit","matMenu"],["mat-menu-item","",3,"click"],[3,"chatItem","onClicked"]],template:function(a,i){if(1&a&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(o){return i.getClicked(o)}),t.qZA(),t._UZ(1,"span",1,2),t.TgZ(3,"div",3),t.YNc(4,A,2,1,"div",4),t.qZA(),t.TgZ(5,"mat-menu",null,5)(7,"button",6),t.NdJ("click",function(){return i.onSend2Mobil()}),t.TgZ(8,"mat-icon"),t._uU(9,"build"),t.qZA(),t._uU(10," Ejecutar Modelo en Modo de Prueba "),t.qZA(),t._UZ(11,"hr"),t.TgZ(12,"button",6),t.NdJ("click",function(){return i.downloadFile()}),t.TgZ(13,"mat-icon"),t._uU(14,"file_download"),t.qZA(),t._uU(15," Exportar Informe a Json. "),t.qZA(),t.TgZ(16,"button",6),t.NdJ("click",function(){return i.downloadTable2Excel()}),t.TgZ(17,"mat-icon"),t._uU(18,"file_download"),t.qZA(),t._uU(19," Exportar Informe a xls. "),t.qZA(),t.TgZ(20,"button",6),t.NdJ("click",function(){return i.downloadFile()}),t.TgZ(21,"mat-icon"),t._uU(22,"insights"),t.qZA(),t._uU(23," Enviar Informe a Google Spread Sheet "),t.qZA()()),2&a){const s=t.MAs(6);t.Q6J("buttons","11010")("nav_menu",!0),t.xp6(1),t.Q6J("matMenuTriggerFor",s),t.xp6(3),t.Q6J("ngForOf",i.pollResultList)}},dependencies:[r.sg,Z.G,u.VK,u.OP,u.p6,p.Hw,_]})}return l})()}];let S=(()=>{class l{static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275mod=t.oAB({type:l});static#a=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(w),h.Bz]})}return l})();var J=n(769),U=n(7572);const M=[{path:"",component:_}];let B=(()=>{class l{static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275mod=t.oAB({type:l});static#a=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(M),h.Bz]})}return l})(),N=(()=>{class l{static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275mod=t.oAB({type:l});static#a=this.\u0275inj=t.cJS({imports:[r.ez,B,p.Ps]})}return l})(),O=(()=>{class l{static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275mod=t.oAB({type:l});static#a=this.\u0275inj=t.cJS({imports:[r.ez,S,J.O,U.N,u.Tx,p.Ps,v.ZX,N]})}return l})()}}]);