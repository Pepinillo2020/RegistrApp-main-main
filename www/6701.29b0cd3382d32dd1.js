"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6701],{6701:(P,u,r)=>{r.r(u),r.d(u,{HomePageModule:()=>C});var h=r(177),a=r(4742),d=r(4341),c=r(1671),g=r(467),i=r(9969),t=r(3953);let m=(()=>{class e{constructor(){this.user=null}setUser(n){this.user=n,localStorage.setItem("user",n)}getUser(){return this.user||localStorage.getItem("user")}clearUser(){this.user=null,localStorage.removeItem("user")}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var f=r(671);const p=[{path:"",component:(()=>{class e{constructor(n,o,s,l){this.router=n,this.alertController=o,this.userService=s,this.authService=l,this.username="",this.router.navigate(["home/paginasProfes/tab-prof"])}segmentChanged(n){console.log(n.detail.value),this.router.navigate(["home/"+n.detail.value])}ngOnInit(){this.authService.isAuthenticated()||this.router.navigate(["login"])}registerAttendance(){var n=this;return(0,g.A)(function*(){yield(yield n.alertController.create({header:"Asistencia Registrada",message:"Tu asistencia ha sido registrada con \xe9xito.",buttons:["OK"]})).present()})()}cerrarSesion(){var n=this;return(0,g.A)(function*(){n.userService.clearUser(),yield n.router.navigate(["/login"])})()}static#t=this.\u0275fac=function(o){return new(o||e)(t.rXU(c.Ix),t.rXU(a.hG),t.rXU(m),t.rXU(f.u))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-home"]],decls:12,vars:1,consts:[[1,"header"],[2,"text-align","center"],[3,"click"],[2,"align-content","center"]],template:function(o,s){1&o&&(t.j41(0,"ion-content")(1,"ion-header",0),t.EFF(2," RegistrApp "),t.k0s(),t.j41(3,"h1",1),t.EFF(4),t.k0s(),t.j41(5,"div",1)(6,"ion-button",2),t.bIt("click",function(){return s.registerAttendance()}),t.EFF(7,"Registrar Asistencia"),t.k0s()(),t.j41(8,"footer")(9,"div",3)(10,"ion-button",2),t.bIt("click",function(){return s.cerrarSesion()}),t.EFF(11,"Cerrar sesi\xf3n"),t.k0s()()()()),2&o&&(t.R7$(4),t.SpI("Bienvenido ",s.username,""))},dependencies:[a.Jm,a.W9,a.eU],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-button[_ngcontent-%COMP%]{--background: #3880ff;--color: white;--box-shadow: 0px 4px 6px rgba(0, 0, 0, .2);transition:transform .3s,box-shadow .3s}ion-button[_ngcontent-%COMP%]:hover{transform:scale(1.05);--box-shadow: 0px 6px 8px rgba(0, 0, 0, .3)}ion-button[_ngcontent-%COMP%]:active{transform:scale(.98);--box-shadow: 0px 2px 4px rgba(0, 0, 0, .2)}div[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.header[_ngcontent-%COMP%]{text-align:center;font-size:200%;font-weight:700;margin-bottom:20px}"],data:{animation:[(0,i.hZ)("fadeInOut",[(0,i.wk)("void",(0,i.iF)({opacity:0})),(0,i.kY)("void => *",[(0,i.i0)(500)]),(0,i.kY)("* => void",[(0,i.i0)(300)])])]}})}return e})()}];let v=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[c.iI.forChild(p),c.iI]})}return e})(),C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[h.MD,d.YN,a.bv,v]})}return e})()}}]);