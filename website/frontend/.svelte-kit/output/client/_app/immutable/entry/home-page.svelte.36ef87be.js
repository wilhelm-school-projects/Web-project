import{S as st,i as rt,s as nt,k as i,a as w,y as Q,l as d,m as u,c as D,z as W,h as l,n as e,b as S,G as a,A as X,g as Y,d as Z,P as Nt,B as tt,o as ft,q as O,r as j,H as q,J as wt,K as kt,N as et,L as Bt,O as At}from"../chunks/index.c5e23121.js";import{B as Ot,a as jt,G as Tt}from"../chunks/Game.1a3533f3.js";import{s as Mt}from"../chunks/index.eaa444e6.js";import{a as Ct,g as at}from"../chunks/stores.b7a5f5bd.js";function Lt(g,t){let n=document.getElementById(g);n==null&&console.log("Trying to fuse attributes to "+g+", but it is null or undifined!");for(const[s,r]of Object.entries(t))n==null||n.setAttribute(s,r)}function Ht(g){let t=document.getElementById(g);document.getElementsByClassName("modal-backdrop")[0].remove(),t.style.display="none"}function Dt(g,t,n){const s=g.slice();return s[3]=t[n],s[5]=n,s}function Vt(g){let t,n=g[1][g[5]]+"",s;return{c(){t=i("a"),s=O(n),this.h()},l(r){t=d(r,"A",{id:!0,class:!0,href:!0});var o=u(t);s=j(o,n),o.forEach(l),this.h()},h(){e(t,"id","anchor-"+g[3]),e(t,"class","col text-center btn btn-outline-secondary svelte-1d4vcpx"),e(t,"href",g[3])},m(r,o){S(r,t,o),a(t,s)},p:q,d(r){r&&l(t)}}}function Pt(g){let t,n,s,r,o=g[0],v=[];for(let f=0;f<o.length;f+=1)v[f]=Vt(Dt(g,o,f));return s=new Ot({}),{c(){t=i("nav");for(let f=0;f<v.length;f+=1)v[f].c();n=w(),Q(s.$$.fragment),this.h()},l(f){t=d(f,"NAV",{id:!0,class:!0});var m=u(t);for(let c=0;c<v.length;c+=1)v[c].l(m);n=D(m),W(s.$$.fragment,m),m.forEach(l),this.h()},h(){e(t,"id","bottom-navbar"),e(t,"class","navbar fixed-bottom row padding-bottom justify-content-center d-flex svelte-1d4vcpx")},m(f,m){S(f,t,m);for(let c=0;c<v.length;c+=1)v[c]&&v[c].m(t,null);a(t,n),X(s,t,null),r=!0},p(f,[m]){if(m&3){o=f[0];let c;for(c=0;c<o.length;c+=1){const b=Dt(f,o,c);v[c]?v[c].p(b,m):(v[c]=Vt(b),v[c].c(),v[c].m(t,n))}for(;c<v.length;c+=1)v[c].d(1);v.length=o.length}},i(f){r||(Y(s.$$.fragment,f),r=!0)},o(f){Z(s.$$.fragment,f),r=!1},d(f){f&&l(t),Nt(v,f),tt(s)}}}function qt(g){let t=["/home",""],n=["Settings","I am bored"];function s(){let r={"data-bs-toggle":"modal","data-bs-target":"#modal-game-type"},o="anchor-"+t.at(1);Lt(o,r)}return ft(s),[t,n]}class Ft extends st{constructor(t){super(),rt(this,t,qt,Pt,nt,{})}}function Gt(g){let t,n,s,r,o,v,f,m,c,b,p,h,y,A,_;return{c(){t=i("main"),n=i("div"),s=i("form"),r=i("div"),o=i("label"),v=O("Canvas Name"),f=w(),m=i("input"),c=w(),b=i("div"),p=i("div"),h=i("a"),y=O("Connect"),this.h()},l(E){t=d(E,"MAIN",{});var V=u(t);n=d(V,"DIV",{class:!0});var x=u(n);s=d(x,"FORM",{class:!0,action:!0});var $=u(s);r=d($,"DIV",{class:!0});var I=u(r);o=d(I,"LABEL",{class:!0,for:!0});var T=u(o);v=j(T,"Canvas Name"),T.forEach(l),f=D(I),m=d(I,"INPUT",{class:!0,type:!0}),I.forEach(l),c=D($),b=d($,"DIV",{class:!0});var C=u(b);p=d(C,"DIV",{class:!0});var k=u(p);h=d(k,"A",{id:!0,class:!0,href:!0});var H=u(h);y=j(H,"Connect"),H.forEach(l),k.forEach(l),C.forEach(l),$.forEach(l),x.forEach(l),V.forEach(l),this.h()},h(){e(o,"class","col"),e(o,"for",""),e(m,"class","col rounded"),e(m,"type","text"),e(r,"class","row"),e(h,"id","anchor-game-client"),e(h,"class","col text-center btn btn-outline-secondary"),e(h,"href",""),e(p,"class","col d-flex justify-content-center"),e(b,"class","row"),e(s,"class","row"),e(s,"action",""),e(n,"class","row d-flex justify-content-center")},m(E,V){S(E,t,V),a(t,n),a(n,s),a(s,r),a(r,o),a(o,v),a(r,f),a(r,m),wt(m,g[0]),a(s,c),a(s,b),a(b,p),a(p,h),a(h,y),A||(_=kt(m,"input",g[1]),A=!0)},p(E,[V]){V&1&&m.value!==E[0]&&wt(m,E[0])},i:q,o:q,d(E){E&&l(t),A=!1,_()}}}let Rt="/game/client";function St(g,t,n){let s="",r,o=!0,v=et(Ct);ft(()=>{let m=document.getElementById("anchor-game-client");m==null||m.addEventListener("click",async c=>{if(c.target===null)throw Error("event is null");if(o){if(Ht("modal-game-type"),at.set(new jt("game-canvas",s,v)),r=et(at),!await r.canvasExists()){console.log("Couldn't connect to canvas");return}o=!1,c.target.click();return}c.target.href=Rt})});function f(){s=this.value,n(0,s)}return[s,f]}class Ut extends st{constructor(t){super(),rt(this,t,St,Gt,nt,{})}}function zt(g){let t,n,s,r,o,v,f,m,c,b,p,h,y,A;return{c(){t=i("main"),n=i("div"),s=i("form"),r=i("div"),o=i("h2"),v=O("Here goes canvas name input."),f=w(),m=i("p"),c=O("Feature coming soon... prob not"),b=w(),p=i("div"),h=i("div"),y=i("a"),A=O("Host"),this.h()},l(_){t=d(_,"MAIN",{});var E=u(t);n=d(E,"DIV",{class:!0});var V=u(n);s=d(V,"FORM",{class:!0,action:!0});var x=u(s);r=d(x,"DIV",{class:!0});var $=u(r);o=d($,"H2",{class:!0});var I=u(o);v=j(I,"Here goes canvas name input."),I.forEach(l),f=D($),m=d($,"P",{class:!0});var T=u(m);c=j(T,"Feature coming soon... prob not"),T.forEach(l),$.forEach(l),b=D(x),p=d(x,"DIV",{class:!0});var C=u(p);h=d(C,"DIV",{class:!0});var k=u(h);y=d(k,"A",{id:!0,class:!0,href:!0});var H=u(y);A=j(H,"Host"),H.forEach(l),k.forEach(l),C.forEach(l),x.forEach(l),V.forEach(l),E.forEach(l),this.h()},h(){e(o,"class",""),e(m,"class","text-secondary"),e(r,"class","row"),e(y,"id","anchor-game-host"),e(y,"class","col text-center btn btn-outline-secondary"),e(y,"href",""),e(h,"class","col d-flex justify-content-center"),e(p,"class","row"),e(s,"class","row"),e(s,"action",""),e(n,"class","row d-flex justify-content-center")},m(_,E){S(_,t,E),a(t,n),a(n,s),a(s,r),a(r,o),a(o,v),a(r,f),a(r,m),a(m,c),a(s,b),a(s,p),a(p,h),a(h,y),a(y,A)},p:q,i:q,o:q,d(_){_&&l(t)}}}let Jt="/game/host";function Kt(g){let t,n=!0,s=et(Ct);return ft(()=>{let r=document.getElementById("anchor-game-host");r==null||r.addEventListener("click",async o=>{if(o.target===null)throw Error("event is null");if(n){if(at.set(new Tt("game-canvas",s)),t=et(at),!await t.initiateCanvas()){console.log("Canvas couldn't be initiated");return}Ht("modal-game-type"),n=!1,o.target.click();return}o.target.href=Jt})}),[]}class Qt extends st{constructor(t){super(),rt(this,t,Kt,zt,nt,{})}}function Wt(g){let t,n,s,r,o,v,f,m,c,b,p,h,y,A,_,E,V,x,$,I,T,C,k,H,ot,R,lt,L,F,ct,it,G,U,dt,P,ut,z;return I=new Qt({}),H=new Ut({}),P=new Ft({}),{c(){t=i("main"),n=i("div"),s=i("div"),r=i("div"),o=i("div"),v=i("h5"),f=O("Open drawing pane"),m=w(),c=i("button"),b=w(),p=i("div"),h=i("button"),y=O("Host"),A=w(),_=i("button"),E=O("Connect"),V=w(),x=i("div"),$=i("div"),Q(I.$$.fragment),T=w(),C=i("div"),k=i("div"),Q(H.$$.fragment),ot=w(),R=i("div"),lt=w(),L=i("div"),F=i("p"),ct=O("ipsumquam ducimus"),it=w(),G=i("div"),U=i("div"),dt=w(),Q(P.$$.fragment),this.h()},l(N){t=d(N,"MAIN",{class:!0});var B=u(t);n=d(B,"DIV",{id:!0,class:!0,tabindex:!0});var vt=u(n);s=d(vt,"DIV",{class:!0});var mt=u(s);r=d(mt,"DIV",{class:!0});var M=u(r);o=d(M,"DIV",{class:!0});var J=u(o);v=d(J,"H5",{class:!0});var ht=u(v);f=j(ht,"Open drawing pane"),ht.forEach(l),m=D(J),c=d(J,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"aria-label":!0}),u(c).forEach(l),J.forEach(l),b=D(M),p=d(M,"DIV",{class:!0});var K=u(p);h=d(K,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var gt=u(h);y=j(gt,"Host"),gt.forEach(l),A=D(K),_=d(K,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var pt=u(_);E=j(pt,"Connect"),pt.forEach(l),K.forEach(l),V=D(M),x=d(M,"DIV",{class:!0,id:!0});var _t=u(x);$=d(_t,"DIV",{class:!0});var bt=u($);W(I.$$.fragment,bt),bt.forEach(l),_t.forEach(l),T=D(M),C=d(M,"DIV",{class:!0,id:!0});var Et=u(C);k=d(Et,"DIV",{class:!0});var yt=u(k);W(H.$$.fragment,yt),yt.forEach(l),Et.forEach(l),M.forEach(l),mt.forEach(l),vt.forEach(l),ot=D(B),R=d(B,"DIV",{class:!0}),u(R).forEach(l),lt=D(B),L=d(B,"DIV",{id:!0,class:!0});var $t=u(L);F=d($t,"P",{class:!0});var xt=u(F);ct=j(xt,"ipsumquam ducimus"),xt.forEach(l),$t.forEach(l),it=D(B),G=d(B,"DIV",{class:!0});var It=u(G);U=d(It,"DIV",{}),u(U).forEach(l),It.forEach(l),dt=D(B),W(P.$$.fragment,B),B.forEach(l),this.h()},h(){e(v,"class","modal-title"),e(c,"type","button"),e(c,"class","btn-close"),e(c,"data-bs-dismiss","modal"),e(c,"aria-label","Close"),e(o,"class","modal-header"),e(h,"class","col btn btn-primary"),e(h,"type","button"),e(h,"data-bs-toggle","collapse"),e(h,"data-bs-target","#connector-host"),e(h,"aria-expanded","false"),e(h,"aria-controls","connector-host"),e(_,"class","col btn btn-primary"),e(_,"type","button"),e(_,"data-bs-toggle","collapse"),e(_,"data-bs-target","#connector-client"),e(_,"aria-expanded","false"),e(_,"aria-controls","connector-client"),e(p,"class","modal-body row"),e($,"class","card card-body d-flex justify-content-center"),e(x,"class","collapse"),e(x,"id","connector-host"),e(k,"class","card card-body"),e(C,"class","collapse"),e(C,"id","connector-client"),e(r,"class","modal-content"),e(s,"class","modal-dialog"),e(n,"id","modal-game-type"),e(n,"class","modal"),e(n,"tabindex","-1"),e(R,"class","col-1 border bg-danger"),e(F,"class","display-2"),e(L,"id","content"),e(L,"class","col bg-info text-white"),e(G,"class","col-1 border bg-danger"),e(t,"class","row d-flex justify-content-center text-info")},m(N,B){S(N,t,B),a(t,n),a(n,s),a(s,r),a(r,o),a(o,v),a(v,f),a(o,m),a(o,c),a(r,b),a(r,p),a(p,h),a(h,y),a(p,A),a(p,_),a(_,E),a(r,V),a(r,x),a(x,$),X(I,$,null),a(r,T),a(r,C),a(C,k),X(H,k,null),a(t,ot),a(t,R),a(t,lt),a(t,L),a(L,F),a(F,ct),a(t,it),a(t,G),a(G,U),a(t,dt),X(P,t,null),z=!0},p:q,i(N){z||(Y(I.$$.fragment,N),Y(H.$$.fragment,N),Y(P.$$.fragment,N),ut||Bt(()=>{ut=At(t,Mt,{axis:"x",duration:700}),ut.start()}),z=!0)},o(N){Z(I.$$.fragment,N),Z(H.$$.fragment,N),Z(P.$$.fragment,N),z=!1},d(N){N&&l(t),tt(I),tt(H),tt(P)}}}class ee extends st{constructor(t){super(),rt(this,t,null,Wt,nt,{})}}export{ee as default};
