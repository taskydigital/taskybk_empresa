"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[145],{1145:(Y,b,s)=>{s.r(b),s.d(b,{ActivityReportModule:()=>I});var u=s(7087),d=s(3759),m=s(3241),t=s(2283),A=s(4758),Z=s(6806),x=s(6510),M=s(3578),p=s(9347),v=s(8464),h=s(3279);const k=["chart"];function C(i,f){if(1&i&&(t.TgZ(0,"div",1),t._UZ(1,"apx-chart",2),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("series",e.chartOptions.series)("chart",e.chartOptions.chart)("xaxis",e.chartOptions.xaxis)("fill",e.chartOptions.fill)("dataLabels",e.chartOptions.dataLabels)("title",e.chartOptions.title)("yaxis",e.chartOptions.yaxis)}}let _=(()=>{class i{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.chunk="M",this.onSelect=new t.vpe,this.chartOptions={series:[{name:"Bubble1",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble3",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble4",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chart:{height:350,type:"bubble"},dataLabels:{enabled:!1},fill:{opacity:.8},title:{text:"Simple Bubble Chart"},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70}}}generateData(e,a,n){for(var o=0,l=[];o<a;){var T=Math.floor(750*Math.random())+1,g=Math.floor(Math.random()*(n.max-n.min+1))+n.min,c=Math.floor(61*Math.random())+15;l.push([T,g,c]),o++}return l}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-bubble"]],viewQuery:function(a,n){if(1&a&&t.Gf(k,5),2&a){let o;t.iGM(o=t.CRH())&&(n.chart=o.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype",chunk:"chunk"},outputs:{onSelect:"onSelect"},decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","xaxis","fill","dataLabels","title","yaxis"]],template:function(a,n){1&a&&t.YNc(0,C,2,7,"div",0),2&a&&t.Q6J("ngIf",n.data&&n.data.length>0)},dependencies:[u.O5,h.x]})}return i})();const D=["editControlTrigger"];function F(i,f){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function U(i,f){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function B(i,f){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}const G=[{path:"",component:(()=>{class i{constructor(e,a,n){this.sharedvar=e,this.dtb=a,this.dg=n,this.graphtypeName="",this.chunk="D"}ngOnInit(){var e=this;return(0,m.Z)(function*(){const a=new Date,n=a.setHours(0,0,0,0),o=a.setHours(23,59,59,999);e.localFilter={crm:"F",staff__id:[],pollGrpData:[],costumers:[],products:[],products_name_sel:[],date_ini:n,date_end:o}})()}getTitleText(){return"header titulo"}getClicked(e){switch(e.index){case 1:this.filterDialog();break;case 3:let a=document.getElementById("spanTrigger");a&&(a.style.display="",a.style.position="absolute",a.style.left=e.pageX+5+"px",a.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu())}}filterDialog(){var e=this;return(0,m.Z)(function*(){e.sharedvar.wait=!0;let a=[],n=[];(yield e.dtb.getStaffByFilterAsync({queryType:3,active:!0,stars:0,rol:"K"})).forEach(c=>{a.push({key:c._id,value:`${c.names||c.email} ${c.second_names||""}`})}),(yield e.dtb.getPollGrpActiveAsync()).forEach(c=>{"index"!==c.id&&n.push({key:c._id,value:c.name})}),e.dg.aDefault({schema:{controls:[{name:"pollGrpData",label:"Modelos:",type:"select",style:"w-full",validators:{required:!0},selectOptions:n},{name:"staff__id",label:"Taskers:",type:"multiselect",style:"w-full",placeholder:"Asignados a \xe9sta modelo",validators:{},selectOptions:a},{name:"date_ini",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end",label:"Fecha final:",type:"date",validators:{}}]},title:"Filtros",dgheigth:500,dgwidth:550,value:e.localFilter}).subscribe(function(){var c=(0,m.Z)(function*(r){if(e.sharedvar.wait=!1,r){if(r.alldates)r.date_ini=0,r.date_end=0;else{let y=new Date(r.date_ini);r.date_ini=y.setHours(0,0,0,0),y=new Date(r.date_end),y.setHours(23,59,59,999)}e.localFilter={crm:"F",staff__id:r.staff__id,pollGrpData:r.pollGrpData,costumers:r.costumers,products:r.products,date_ini:r.date_ini,date_end:r.date_end,products_name_sel:[]},e.dataList=yield e.dtb.getPollGrpAnaliticAsync(e.localFilter),console.log(e.dataList)}});return function(r){return c.apply(this,arguments)}}())})()}BuildModelList(e){}object2Map(e){return new Map(Object.entries(e))}setTimechunk(e){this.chunk=e}getTimechunk(){switch(this.chunk){case"D":return"d\xedas";case"M":return"meses";case"Y":return"a\xf1os"}return""}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(A.D),t.Y36(Z.k),t.Y36(x.x))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-activity-report"]],viewQuery:function(a,n){if(1&a&&t.Gf(D,5),2&a){let o;t.iGM(o=t.CRH())&&(n.editControlTrigger=o.first)}},decls:48,vars:10,consts:[[3,"buttons","nav_menu","bar_text","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[3,"data"],["controlEdit","matMenu"],["mat-menu-item","",3,"matMenuTriggerFor"],["color","primary"],[1,"mt-1","text-violet-500","text-lg","font-medium"],["mat-menu-item","",3,"click"],[4,"ngIf"],["mat-menu-item",""],[1,"ml-1","mt-1","text-violet-500","text-lg","font-medium"],[1,"ml-3"],["graphtype","matMenu"]],template:function(a,n){if(1&a&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(l){return n.getClicked(l)}),t.qZA(),t._UZ(1,"span",1,2)(3,"app-bubble",3),t.TgZ(4,"mat-menu",null,4)(6,"button",5)(7,"mat-icon",6),t._uU(8,"trending_up"),t.qZA(),t.TgZ(9,"span",7),t._uU(10),t.qZA()(),t.TgZ(11,"h2",7)(12,"mat-icon"),t._uU(13,"percent"),t.qZA(),t._uU(14,"\xa0Porcentajes por:"),t.qZA(),t.TgZ(15,"button",8),t.NdJ("click",function(){return n.setTimechunk("D")}),t.YNc(16,F,2,0,"mat-icon",9),t._uU(17," D\xedas "),t.qZA(),t.TgZ(18,"button",8),t.NdJ("click",function(){return n.setTimechunk("M")}),t.YNc(19,U,2,0,"mat-icon",9),t._uU(20," Meses "),t.qZA(),t.TgZ(21,"button",8),t.NdJ("click",function(){return n.setTimechunk("Y")}),t.YNc(22,B,2,0,"mat-icon",9),t._uU(23," A\xf1os "),t.qZA(),t._UZ(24,"hr"),t.TgZ(25,"h2",7)(26,"mat-icon"),t._uU(27,"trending_up"),t.qZA(),t._uU(28,"\xa0Inteligencia Artificial "),t.qZA(),t.TgZ(29,"div")(30,"button",10),t._uU(31," An\xe1lisis con soporte de IA "),t.qZA()(),t._UZ(32,"hr"),t.TgZ(33,"h2",11)(34,"mat-icon"),t._uU(35,"file_download"),t.qZA(),t._uU(36,"\xa0Exportar"),t.qZA(),t.TgZ(37,"div",12)(38,"button",10),t._uU(39," Exportar Informe a csv. "),t.qZA(),t.TgZ(40,"button",10),t._uU(41," Enviar Informe a Google Spread Sheet "),t.qZA()()(),t.TgZ(42,"mat-menu",null,13)(44,"button",10),t._uU(45," Linea de tiempo discriminado "),t.qZA(),t.TgZ(46,"button",10),t._uU(47," Linea de tiempo apilado "),t.qZA()()),2&a){const o=t.MAs(5),l=t.MAs(43);t.Q6J("buttons","11010")("nav_menu",!1)("bar_text",n.getTitleText()),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(2),t.Q6J("data",n.dataList),t.xp6(3),t.Q6J("matMenuTriggerFor",l),t.xp6(4),t.Oqu(n.graphtypeName),t.xp6(6),t.Q6J("ngIf","D"===n.chunk),t.xp6(3),t.Q6J("ngIf","M"===n.chunk),t.xp6(3),t.Q6J("ngIf","Y"===n.chunk)}},dependencies:[u.O5,M.G,p.VK,p.OP,p.p6,v.Hw,_]})}return i})()}];let R=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(G),d.Bz]})}return i})();var w=s(769),J=s(1359);const L=[{path:"",component:_}];let O=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(L),d.Bz]})}return i})(),Q=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[u.ez,O,h.X]})}return i})(),I=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[u.ez,R,w.O,J.ZX,h.X,p.Tx,v.Ps,Q]})}return i})()}}]);