"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[902],{8902:(U,l,s)=>{s.r(l),s.d(l,{AppointListModule:()=>L});var d=s(6895),f=s(9132),u=s(5861),t=s(4650),g=s(5377),h=s(7009),A=s(8826),x=s(164),C=s(9496),m=s(7392),_=s(3646);function y(n,v){if(1&n&&(t.TgZ(0,"div",10)(1,"div")(2,"strong"),t._uU(3,"Contacto:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"div")(6,"strong"),t._uU(7,"Correo:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"div")(10,"strong"),t._uU(11,"Tel\xe9fono:"),t.qZA(),t._uU(12),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(4),t.hij(" ",e.contact,""),t.xp6(4),t.hij(" ",e.email,""),t.xp6(4),t.hij(" ",e.phone,"")}}function Z(n,v){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"div",5),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"mat-icon",6),t.NdJ("click",function(){const o=t.CHM(e).index,a=t.oxw();return t.KtG(a.onEditAppoint(o))}),t._uU(7,"edit"),t.qZA(),t.TgZ(8,"mat-icon",6),t.NdJ("click",function(){const o=t.CHM(e).index,a=t.oxw();return t.KtG(a.onDelAppoint(o))}),t._uU(9,"delete_otuline"),t.qZA(),t.TgZ(10,"mat-icon",6),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.onAddGoogleCalendar(o))}),t._uU(11,"calendar_month"),t.qZA(),t._uU(12," \xa0 "),t.TgZ(13,"mat-icon",6),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.onchangefull(o))}),t._uU(14),t.qZA()(),t.TgZ(15,"div",7),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.buildHtml2Pdf(o.pollresult_id))}),t._uU(16),t.qZA(),t.TgZ(17,"div",8),t._uU(18),t.qZA()(),t.YNc(19,y,13,3,"div",9),t.qZA()}if(2&n){const e=v.$implicit,i=t.oxw();t.xp6(4),t.Oqu(t.xi3(5,5,e.datetime,"MMM dd, yyyy hh:mm a")),t.xp6(10),t.Oqu(i.getAppIcon(e)),t.xp6(2),t.Oqu(e.costumer),t.xp6(2),t.Oqu(e.task),t.xp6(1),t.Q6J("ngIf",e.full)}}const k=[{path:"",component:(()=>{class n{constructor(e,i,r,o,a){this.sharedvar=e,this.snkBar=i,this.dtb=r,this.dg=o,this.htm2pdf=a,e.staff.appoint&&(e.staff.appoint=e.staff.appoint.sort(function(c,p){return c.datetime-p.datetime}))}ngOnInit(){if(!this.sharedvar.staff.appoint)return;let e=new Date,i=0;for(;i<this.sharedvar.staff.appoint.length;)e>new Date(this.sharedvar.staff.appoint[i].datetime)?this.sharedvar.staff.appoint.splice(i,1):i++;this.dtb.updateStaffAsync(this.sharedvar.staff)}getClicked(e){}onchangefull(e){e.full=!e.full}onAddGoogleCalendar(e){alert(`Agregar a google calendar ${e.costumer}`)}getAppIcon(e){return e.full?"expand_less":"expand_more"}onDelAppoint(e){!this.sharedvar.staff.appoint||0===this.sharedvar.staff.appoint.length||this.snkBar.open("Eliminar item de la agenda?.","Ok",{duration:5e3}).onAction().subscribe(i=>{this.sharedvar.staff.appoint?.splice(e,1),this.dtb.updateStaffAsync(this.sharedvar.staff)})}onEditAppoint(e){var i=this;if(!this.sharedvar.staff.appoint||!this.sharedvar.staff.appoint[e])return;let o="Editar agenda: ";this.sharedvar.staff.appoint&&this.sharedvar.staff.appoint[e].costumer&&(o+=this.sharedvar.staff.appoint[e].costumer),this.dg.aDefault({schema:{controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"task",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:this.sharedvar.staff.appoint[e],title:o,dgwidth:400,dgheigth:400}).subscribe(function(){var c=(0,u.Z)(function*(p){p&&i.sharedvar.staff.appoint&&(i.sharedvar.staff.appoint[e].datetime=p.datetime,i.sharedvar.staff.appoint[e].task=p.task,i.dtb.updateStaffAsync(i.sharedvar.staff))});return function(p){return c.apply(this,arguments)}}())}buildHtml2Pdf(e){var i=this;return(0,u.Z)(function*(){if(void 0===e)return;const r=yield i.dtb.getPollResultAsync(e);i.htm2pdf.buildHtml2Pdf(r,null)})()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(g.D),t.Y36(h.ux),t.Y36(A.k),t.Y36(x.x),t.Y36(C.Q))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-appoint-list"]],decls:3,vars:2,consts:[[3,"buttons","onClicked"],[1,"overflow-auto","p-2","gap-y-2"],[4,"ngFor","ngForOf"],[1,"h-24","items-center","border-b","border-gray-300"],[1,"flex","flex-row","mt-1","gap-1","text-sky-600"],[1,"flex-1"],[1,"hover:text-violet-500",3,"click"],[3,"click"],[1,"ml-2","h-16","text-sm","text-gray-500","overflow-hidden"],["class","ml-1 p-1 bg-slate-100 text-sm text-gray-500 border-b border-gray-300",4,"ngIf"],[1,"ml-1","p-1","bg-slate-100","text-sm","text-gray-500","border-b","border-gray-300"]],template:function(i,r){1&i&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(a){return r.getClicked(a)}),t.qZA(),t.TgZ(1,"div",1),t.YNc(2,Z,20,8,"div",2),t.qZA()),2&i&&(t.Q6J("buttons","100000"),t.xp6(2),t.Q6J("ngForOf",r.sharedvar.staff.appoint))},dependencies:[d.sg,d.O5,m.Hw,_.G,d.uU]})}return n})()}];let T=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(k),f.Bz]})}return n})();var b=s(8471);let L=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[d.ez,T,m.Ps,b.O,h.ZX]})}return n})()}}]);