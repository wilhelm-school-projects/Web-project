import{S as et,i as at,s as st,k as n,q as M,a as D,l,m as r,r as U,h as o,c as V,n as t,b as ot,D as e,M as J,N as Q,H as S,O as It,y as _t,z as bt,A as gt,g as Et,K as xt,d as yt,B as $t,L as Ct}from"../chunks/index.089c19c2.js";import{s as Dt}from"../chunks/index.eaa444e6.js";import{c as wt}from"../chunks/NavbarHome.svelte_svelte_type_style_lang.154594c1.js";import{j as k}from"../chunks/singletons.0c74be2c.js";k.disable_scroll_handling;k.goto;k.invalidate;k.invalidateAll;k.preload_data;k.preload_code;k.before_navigate;k.after_navigate;class Vt{establishCanvas(a){return console.log("(Host) Establishing canvas with backend: "+a),!0}navigateTo(a){console.log("(Host) Navigating to "+a),wt("modal-game-type"),window.location.href=a}}class Tt{connectToCanvas(a){return console.log("(Client) connecting to "+a),!0}navigateTo(a){console.log("(Client)Navigating to: "+a),wt("modal-game-type"),window.location.href=a}}function Nt($){let a,u,c,s,i,h,T,v,E,p,f,d,N,H,_;return{c(){a=n("main"),u=n("div"),c=n("form"),s=n("div"),i=n("label"),h=M("Host Email"),T=D(),v=n("input"),E=D(),p=n("div"),f=n("div"),d=n("button"),N=M("Connect"),this.h()},l(m){a=l(m,"MAIN",{});var b=r(a);u=l(b,"DIV",{class:!0});var I=r(u);c=l(I,"FORM",{class:!0,action:!0});var y=r(c);s=l(y,"DIV",{class:!0});var g=r(s);i=l(g,"LABEL",{class:!0,for:!0});var j=r(i);h=U(j,"Host Email"),j.forEach(o),T=V(g),v=l(g,"INPUT",{class:!0,type:!0}),g.forEach(o),E=V(y),p=l(y,"DIV",{class:!0});var w=r(p);f=l(w,"DIV",{class:!0});var C=r(f);d=l(C,"BUTTON",{class:!0});var x=r(d);N=U(x,"Connect"),x.forEach(o),C.forEach(o),w.forEach(o),y.forEach(o),I.forEach(o),b.forEach(o),this.h()},h(){t(i,"class","col"),t(i,"for",""),t(v,"class","col rounded"),t(v,"type","text"),t(s,"class","row"),t(d,"class","row col text-center btn btn-outline-secondary"),t(f,"class","col d-flex justify-content-center"),t(p,"class","row"),t(c,"class","row"),t(c,"action",""),t(u,"class","row d-flex justify-content-center")},m(m,b){ot(m,a,b),e(a,u),e(u,c),e(c,s),e(s,i),e(i,h),e(s,T),e(s,v),J(v,$[0]),e(c,E),e(c,p),e(p,f),e(f,d),e(d,N),H||(_=[Q(v,"input",$[2]),Q(d,"click",$[1])],H=!0)},p(m,[b]){b&1&&v.value!==m[0]&&J(v,m[0])},i:S,o:S,d(m){m&&o(a),H=!1,It(_)}}}let Ht="/game/client";function Ot($,a,u){let c=new Tt,s="";function i(){c.connectToCanvas(s)?c.navigateTo(Ht):console.log("Canvas does not exist")}function h(){s=this.value,u(0,s)}return[s,i,h]}class Bt extends et{constructor(a){super(),at(this,a,Ot,Nt,st,{})}}function jt($){let a,u,c,s,i,h,T,v,E,p,f,d,N,H,_;return{c(){a=n("main"),u=n("div"),c=n("form"),s=n("div"),i=n("label"),h=M("Canvas Name"),T=D(),v=n("input"),E=D(),p=n("div"),f=n("div"),d=n("button"),N=M("Start Hosting"),this.h()},l(m){a=l(m,"MAIN",{});var b=r(a);u=l(b,"DIV",{class:!0});var I=r(u);c=l(I,"FORM",{class:!0,action:!0});var y=r(c);s=l(y,"DIV",{class:!0});var g=r(s);i=l(g,"LABEL",{class:!0,for:!0});var j=r(i);h=U(j,"Canvas Name"),j.forEach(o),T=V(g),v=l(g,"INPUT",{class:!0,type:!0}),g.forEach(o),E=V(y),p=l(y,"DIV",{class:!0});var w=r(p);f=l(w,"DIV",{class:!0});var C=r(f);d=l(C,"BUTTON",{class:!0});var x=r(d);N=U(x,"Start Hosting"),x.forEach(o),C.forEach(o),w.forEach(o),y.forEach(o),I.forEach(o),b.forEach(o),this.h()},h(){t(i,"class","col"),t(i,"for",""),t(v,"class","col rounded"),t(v,"type","text"),t(s,"class","row"),t(d,"class","row col text-center btn btn-outline-secondary"),t(f,"class","col d-flex justify-content-center"),t(p,"class","row"),t(c,"class","row"),t(c,"action",""),t(u,"class","row d-flex justify-content-center")},m(m,b){ot(m,a,b),e(a,u),e(u,c),e(c,s),e(s,i),e(i,h),e(s,T),e(s,v),J(v,$[0]),e(c,E),e(c,p),e(p,f),e(f,d),e(d,N),H||(_=[Q(v,"input",$[2]),Q(d,"click",$[1])],H=!0)},p(m,[b]){b&1&&v.value!==m[0]&&J(v,m[0])},i:S,o:S,d(m){m&&o(a),H=!1,It(_)}}}let At="/game/host";function Mt($,a,u){let c=new Vt,s="";function i(){c.establishCanvas(s)?c.navigateTo(At):console.log("Canvas already exists")}function h(){s=this.value,u(0,s)}return[s,i,h]}class Ut extends et{constructor(a){super(),at(this,a,Mt,jt,st,{})}}function kt($){let a,u,c,s,i,h,T,v,E,p,f,d,N,H,_,m,b,I,y,g,j,w,C,x,W,R,X,L,q,Y,Z,P,F,tt,z;return g=new Ut({}),x=new Bt({}),{c(){a=n("main"),u=n("div"),c=n("div"),s=n("div"),i=n("div"),h=n("h5"),T=M("Open drawing pane"),v=D(),E=n("button"),p=D(),f=n("div"),d=n("button"),N=M("Host"),H=D(),_=n("button"),m=M("Connect"),b=D(),I=n("div"),y=n("div"),_t(g.$$.fragment),j=D(),w=n("div"),C=n("div"),_t(x.$$.fragment),W=D(),R=n("div"),X=D(),L=n("div"),q=n("p"),Y=M("ipsumquam ducimus"),Z=D(),P=n("div"),F=n("div"),this.h()},l(O){a=l(O,"MAIN",{class:!0});var B=r(a);u=l(B,"DIV",{id:!0,class:!0,tabindex:!0});var nt=r(u);c=l(nt,"DIV",{class:!0});var lt=r(c);s=l(lt,"DIV",{class:!0});var A=r(s);i=l(A,"DIV",{class:!0});var K=r(i);h=l(K,"H5",{class:!0});var rt=r(h);T=U(rt,"Open drawing pane"),rt.forEach(o),v=V(K),E=l(K,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"aria-label":!0}),r(E).forEach(o),K.forEach(o),p=V(A),f=l(A,"DIV",{class:!0});var G=r(f);d=l(G,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var ct=r(d);N=U(ct,"Host"),ct.forEach(o),H=V(G),_=l(G,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var it=r(_);m=U(it,"Connect"),it.forEach(o),G.forEach(o),b=V(A),I=l(A,"DIV",{class:!0,id:!0});var dt=r(I);y=l(dt,"DIV",{class:!0});var ut=r(y);bt(g.$$.fragment,ut),ut.forEach(o),dt.forEach(o),j=V(A),w=l(A,"DIV",{class:!0,id:!0});var vt=r(w);C=l(vt,"DIV",{class:!0});var ft=r(C);bt(x.$$.fragment,ft),ft.forEach(o),vt.forEach(o),A.forEach(o),lt.forEach(o),nt.forEach(o),W=V(B),R=l(B,"DIV",{class:!0}),r(R).forEach(o),X=V(B),L=l(B,"DIV",{id:!0,class:!0});var mt=r(L);q=l(mt,"P",{class:!0});var ht=r(q);Y=U(ht,"ipsumquam ducimus"),ht.forEach(o),mt.forEach(o),Z=V(B),P=l(B,"DIV",{class:!0});var pt=r(P);F=l(pt,"DIV",{}),r(F).forEach(o),pt.forEach(o),B.forEach(o),this.h()},h(){t(h,"class","modal-title"),t(E,"type","button"),t(E,"class","btn-close"),t(E,"data-bs-dismiss","modal"),t(E,"aria-label","Close"),t(i,"class","modal-header"),t(d,"class","col btn btn-primary"),t(d,"type","button"),t(d,"data-bs-toggle","collapse"),t(d,"data-bs-target","#connector-host"),t(d,"aria-expanded","false"),t(d,"aria-controls","connector-host"),t(_,"class","col btn btn-primary"),t(_,"type","button"),t(_,"data-bs-toggle","collapse"),t(_,"data-bs-target","#connector-client"),t(_,"aria-expanded","false"),t(_,"aria-controls","connector-client"),t(f,"class","modal-body row"),t(y,"class","card card-body d-flex justify-content-center"),t(I,"class","collapse"),t(I,"id","connector-host"),t(C,"class","card card-body"),t(w,"class","collapse"),t(w,"id","connector-client"),t(s,"class","modal-content"),t(c,"class","modal-dialog"),t(u,"id","modal-game-type"),t(u,"class","modal"),t(u,"tabindex","-1"),t(R,"class","col-1 border bg-danger"),t(q,"class","display-2"),t(L,"id","content"),t(L,"class","col bg-info text-white"),t(P,"class","col-1 border bg-danger"),t(a,"class","row d-flex justify-content-center text-info")},m(O,B){ot(O,a,B),e(a,u),e(u,c),e(c,s),e(s,i),e(i,h),e(h,T),e(i,v),e(i,E),e(s,p),e(s,f),e(f,d),e(d,N),e(f,H),e(f,_),e(_,m),e(s,b),e(s,I),e(I,y),gt(g,y,null),e(s,j),e(s,w),e(w,C),gt(x,C,null),e(a,W),e(a,R),e(a,X),e(a,L),e(L,q),e(q,Y),e(a,Z),e(a,P),e(P,F),z=!0},p:S,i(O){z||(Et(g.$$.fragment,O),Et(x.$$.fragment,O),tt||xt(()=>{tt=Ct(a,Dt,{axis:"x",duration:700}),tt.start()}),z=!0)},o(O){yt(g.$$.fragment,O),yt(x.$$.fragment,O),z=!1},d(O){O&&o(a),$t(g),$t(x)}}}class St extends et{constructor(a){super(),at(this,a,null,kt,st,{})}}export{St as default};