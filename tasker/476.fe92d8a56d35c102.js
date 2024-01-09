"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[476],{1476:(f,p,a)=>{a.r(p),a.d(p,{PollModule:()=>Y});var u=a(6895),n=a(9132),r=a(5861),P=a(6599);class m extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class b extends Error{constructor(v){super("Could not get the public IP address",v),this.name="IpNotFoundError"}}const g={timeout:5e3},d={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},C=(o,v,e)=>{const t=new XMLHttpRequest;let l;const i=new Promise((h,c)=>{l=c,t.addEventListener("error",c,{once:!0}),t.addEventListener("timeout",c,{once:!0}),t.addEventListener("load",()=>{const $=t.responseText.trim();$&&P[e]($)?h($):c()},{once:!0}),t.open("GET",o),t.timeout=v.timeout,t.send()});return i.cancel=()=>{t.abort(),l(new m)},i},L=(o,v)=>{let e;const t=(0,r.Z)(function*(){const l=[...d[o],...v.fallbackUrls??[]];let i;for(const h of l)try{return e=C(h,v,o),yield e}catch(c){if(i=c,c instanceof m)throw c}throw new b({cause:i})})();return t.cancel=()=>{e.cancel()},t},S={v4:o=>L("v4",{...g,...o}),v6:o=>L("v6",{...g,...o})};function E(){return(E=(0,r.Z)(function*(o){if(o={timeout:5e3,ipVersion:4,...o},!navigator?.onLine)return!1;const v=4===o.ipVersion?"v4":"v6";try{return yield S[v](o),!0}catch{return!1}})).apply(this,arguments)}var s=a(4650),B=a(8826),R=a(7009),O=a(5475),_=a(2419),w=a(5377),D=a(1316),T=a(3646),F=a(2395),y=a(4859),k=a(7392);function z(o,v){if(1&o){const e=s.EpF();s.TgZ(0,"button",6),s.NdJ("click",function(){s.CHM(e);const l=s.oxw();return s.KtG(l.onBack())}),s.TgZ(1,"mat-icon"),s._uU(2,"arrow_back"),s.qZA()()}}function A(o,v){if(1&o){const e=s.EpF();s.TgZ(0,"button",6),s.NdJ("click",function(){s.CHM(e);const l=s.oxw();return s.KtG(l.onEndPoll())}),s._uU(1," Finalizar"),s.TgZ(2,"mat-icon"),s._uU(3,"done"),s.qZA()()}}const J=[{path:"",component:(()=>{class o{constructor(e,t,l,i,h,c){this.dtb=e,this.snkBar=t,this.dg=l,this.nvg=i,this.sharedvar=h,this.notifServ=c,this.lchat=!1,this.goto=[]}ngOnInit(){var e=this;return(0,r.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack());const t=e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id).subscribe(l=>{t&&t.unsubscribe(),e.sharedvar.selPollResult=JSON.parse(JSON.stringify(l)),e.sharedvar.selPollResult.status<2&&e.OnStartPoll(),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})})()}OnStartPoll(){var e=this;return(0,r.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=Number(Date.now()),e.sharedvar.pollExecSelected.onStart&&e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.getLocalization()),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status")})()}OnEndPoll(){var e=this;return(0,r.Z)(function*(){e.sharedvar.selPollResult.date_end=Number(Date.now()),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.getLocalization())})()}subscribeChatEvent(){var t,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(t=(0,r.Z)(function*(l){"chat"===l.collection&&l.field_id&&l.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(i){return t.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,r.Z)(function*(){const t=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=t;const l=t.length-1;return l>=0&&"W"===t[l].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[l].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,l})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){3===e.index&&this.dg.aChat({title:"Chat",dgwidth:400,value:this.sharedvar.selPollResult})}onGetData(e){var t=this;return(0,r.Z)(function*(){const l=e._btnclick_;if(l&&t.selectedPoll.schema.controls){const i=t.selectedPoll.schema.controls.find(h=>h.name===l);if(i&&i.tags)switch(i.tags.type){case"goto":const h=t.sharedvar.pollExecSelected.pollList.find(c=>c.id===i.avalue);if(h&&i.avalue&&i.avalue.length>0)return t.goto.push(i.avalue),t.updateLocalList(t.selectedPoll.values,e),void(t.selectedPoll=h);break;case"geolocation":e[l]=yield t.getLocalization(),i.sideBtn="done";break;case"picture":t.getPicture(e,i,l);break;case"draw":t.getDraw(e,i,l)}}t.updateLocalList(t.selectedPoll.values,e)})()}getLocalization(){var e=this;return(0,r.Z)(function*(){const l=yield e.getPosition();l.lng=Math.trunc(1e4*l.lng)/1e4,l.lat=Math.trunc(1e4*l.lat)/1e4;const i=`${l.lat},${l.lng}`;return e.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),e.dtb.getLink2geo(i)})()}updateLocalList(e,t){t._btnEvent_="",t._btnclick_="",this.dg.updatePropResult(e,t),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult)}updateValues2Save(e,t){t._btnEvent_="",t._btnclick_="",this.dg.updatePropResult(e,t)}onBack(){if(this.selectedPoll.values&&!1===this.selectedPoll.values._valid_)this.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3});else if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(t=>t.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onEndPoll(){var e=this;return(0,r.Z)(function*(){e.selectedPoll.values&&!1===e.selectedPoll.values._valid_?e.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3}):e.selectedPoll.allowEnd&&e.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,r.Z)(function*(){e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function Z(o){return E.apply(this,arguments)}())?e.dtb.promisePictList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult).then(function(){var t=(0,r.Z)(function*(l){l&&(e.sharedvar.pollExecSelected.pollList.forEach(i=>{e.updateValues2Save(e.sharedvar.selPollResult.values,i.values)}),yield e.OnEndPoll(),e.sharedvar.selPollResult=yield e.dtb.CreateUpdatePollResult(e.sharedvar.selPollResult),console.log(e.sharedvar.selPollResult),e.dtb.delFromLocalList(e.sharedvar.pollExecSelected),e.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(l){return t.apply(this,arguments)}}()):(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})}))})()}geoloc(){var e=this;return(0,r.Z)(function*(){yield e.getPosition().then(l=>{l.lng=Math.trunc(100*l.lng)/100,l.lat=Math.trunc(100*l.lat)/100})})()}getPosition(){return new Promise((e,t)=>{navigator.geolocation.getCurrentPosition(l=>{e({lng:l.coords.longitude,lat:l.coords.latitude})},l=>{t(l)})})}getPicture(e,t,l){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(c=>{c&&c.urlrute&&c.urlrute.length>0&&(e[l]=c.urlrute,t.sideBtn="done",this.updateLocalList(this.selectedPoll.values,e))})}getDraw(e,t,l){this.dg.aDraw({title:"Dibujar",value:{img:e[l]?e[l]:t.avalue,name:"pepito"}}).subscribe(c=>{c&&c.urlrute&&c.urlrute.length>0&&(e[l]=c.urlrute,t.sideBtn="done",this.updateLocalList(this.selectedPoll.values,e))})}onResultDone(e){let t={...e};return this.sharedvar.pollExecSelected.pollList.forEach(l=>{t.values={...t.values,...l.values}}),t.values&&(t.values._btnEvent_="",t.values._valid_=!0),t}static#e=this.\u0275fac=function(t){return new(t||o)(s.Y36(B.k),s.Y36(R.ux),s.Y36(O.x),s.Y36(_.$),s.Y36(w.D),s.Y36(D.$))};static#t=this.\u0275cmp=s.Xpm({type:o,selectors:[["app-poll"]],decls:8,vars:6,consts:[[1,"flex","flex-col","h-screen","w-screen"],[3,"buttons","lchat","onClicked"],[1,"grow","px-3","pt-3","overflow-auto"],[3,"jsonFormData","values","result"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","primary","mat-raised-button","",3,"click"]],template:function(t,l){1&t&&(s.TgZ(0,"div",0)(1,"app-header",1),s.NdJ("onClicked",function(h){return l.getClicked(h)}),s.qZA(),s.TgZ(2,"div",2)(3,"app-dynamic-form",3),s.NdJ("result",function(h){return l.onGetData(h)}),s.qZA()(),s.TgZ(4,"div",4),s.YNc(5,z,3,0,"button",5),s._uU(6," \xa0 "),s.YNc(7,A,4,0,"button",5),s.qZA()()),2&t&&(s.xp6(1),s.Q6J("buttons","000100")("lchat",l.lchat),s.xp6(2),s.Q6J("jsonFormData",l.selectedPoll.schema)("values",l.selectedPoll.values),s.xp6(2),s.Q6J("ngIf",l.goto.length>1),s.xp6(2),s.Q6J("ngIf",l.selectedPoll.allowEnd))},dependencies:[u.O5,T.G,F.r,y.lW,k.Hw]})}return o})()}];let N=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=s.oAB({type:o});static#l=this.\u0275inj=s.cJS({imports:[n.Bz.forChild(J),n.Bz]})}return o})();var M=a(8471),I=a(6842),U=a(8255);let Y=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=s.oAB({type:o});static#l=this.\u0275inj=s.cJS({imports:[u.ez,N,M.O,I.N,U.Tx,y.ot,k.Ps,R.ZX]})}return o})()},4066:f=>{const p="[a-fA-F\\d:]",a=d=>d&&d.includeBoundaries?`(?:(?<=\\s|^)(?=${p})|(?<=${p})(?=\\s|$))`:"",u="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",r=`\n(?:\n(?:${n}:){7}(?:${n}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${n}:){6}(?:${u}|:${n}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${n}:){5}(?::${u}|(?::${n}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${n}:){4}(?:(?::${n}){0,1}:${u}|(?::${n}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${n}:){3}(?:(?::${n}){0,2}:${u}|(?::${n}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${n}:){2}(?:(?::${n}){0,3}:${u}|(?::${n}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${n}:){1}(?:(?::${n}){0,4}:${u}|(?::${n}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${n}){0,5}:${u}|(?::${n}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),P=new RegExp(`(?:^${u}$)|(?:^${r}$)`),m=new RegExp(`^${u}$`),b=new RegExp(`^${r}$`),g=d=>d&&d.exact?P:new RegExp(`(?:${a(d)}${u}${a(d)})|(?:${a(d)}${r}${a(d)})`,"g");g.v4=d=>d&&d.exact?m:new RegExp(`${a(d)}${u}${a(d)}`,"g"),g.v6=d=>d&&d.exact?b:new RegExp(`${a(d)}${r}${a(d)}`,"g"),f.exports=g},6599:(f,p,a)=>{const u=a(4066),n=r=>u({exact:!0}).test(r);n.v4=r=>u.v4({exact:!0}).test(r),n.v6=r=>u.v6({exact:!0}).test(r),n.version=r=>n(r)?n.v4(r)?4:6:void 0,f.exports=n}}]);