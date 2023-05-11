import{S as K,i as G,s as z,k as b,q as V,a as O,l as y,m as I,r as B,h as S,c as A,n as g,b as Q,D as w,H,K as X,L as Z}from"../chunks/index.3564a9d4.js";import{s as Y}from"../chunks/index.eaa444e6.js";var M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}function R(_,l){return _(l={exports:{}},l.exports),l.exports}var L=R(function(_,l){Object.defineProperty(l,"__esModule",{value:!0});var m=function(){function u(){var f=this;this.locked=new Map,this.addToLocked=function(h,v){var p=f.locked.get(h);p===void 0?v===void 0?f.locked.set(h,[]):f.locked.set(h,[v]):v!==void 0&&(p.unshift(v),f.locked.set(h,p))},this.isLocked=function(h){return f.locked.has(h)},this.lock=function(h){return new Promise(function(v,p){f.isLocked(h)?f.addToLocked(h,v):(f.addToLocked(h),v())})},this.unlock=function(h){var v=f.locked.get(h);if(v!==void 0&&v.length!==0){var p=v.pop();f.locked.set(h,v),p!==void 0&&setTimeout(p,0)}else f.locked.delete(h)}}return u.getInstance=function(){return u.instance===void 0&&(u.instance=new u),u.instance},u}();l.default=function(){return m.getInstance()}});P(L);var $=P(R(function(_,l){var m=M&&M.__awaiter||function(r,o,n,t){return new(n||(n=Promise))(function(e,s){function i(d){try{k(t.next(d))}catch(a){s(a)}}function c(d){try{k(t.throw(d))}catch(a){s(a)}}function k(d){d.done?e(d.value):new n(function(a){a(d.value)}).then(i,c)}k((t=t.apply(r,o||[])).next())})},u=M&&M.__generator||function(r,o){var n,t,e,s,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(k){return function(d){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(e=2&a[0]?t.return:a[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,a[1])).done)return e;switch(t=0,e&&(a=[2&a[0],e.value]),a[0]){case 0:case 1:e=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(e=i.trys,!((e=e.length>0&&e[e.length-1])||a[0]!==6&&a[0]!==2)){i=0;continue}if(a[0]===3&&(!e||a[1]>e[0]&&a[1]<e[3])){i.label=a[1];break}if(a[0]===6&&i.label<e[1]){i.label=e[1],e=a;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(a);break}e[2]&&i.ops.pop(),i.trys.pop();continue}a=o.call(r,i)}catch(x){a=[6,x],t=0}finally{n=e=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([k,d])}}};Object.defineProperty(l,"__esModule",{value:!0});var f="browser-tabs-lock-key";function h(r){return new Promise(function(o){return setTimeout(o,r)})}function v(r){for(var o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",t=0;t<r;t++)n+=o[Math.floor(Math.random()*o.length)];return n}var p=function(){function r(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+v(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),r.waiters===void 0&&(r.waiters=[])}return r.prototype.acquireLock=function(o,n){return n===void 0&&(n=5e3),m(this,void 0,void 0,function(){var t,e,s,i,c,k;return u(this,function(d){switch(d.label){case 0:t=Date.now()+v(4),e=Date.now()+n,s=f+"-"+o,i=window.localStorage,d.label=1;case 1:return Date.now()<e?[4,h(30)]:[3,8];case 2:return d.sent(),i.getItem(s)!==null?[3,5]:(c=this.id+"-"+o+"-"+t,[4,h(Math.floor(25*Math.random()))]);case 3:return d.sent(),i.setItem(s,JSON.stringify({id:this.id,iat:t,timeoutKey:c,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,h(30)];case 4:return d.sent(),(k=i.getItem(s))!==null&&(k=JSON.parse(k)).id===this.id&&k.iat===t?(this.acquiredIatSet.add(t),this.refreshLockWhileAcquired(s,t),[2,!0]):[3,7];case 5:return r.lockCorrector(),[4,this.waitForSomethingToChange(e)];case 6:d.sent(),d.label=7;case 7:return t=Date.now()+v(4),[3,1];case 8:return[2,!1]}})})},r.prototype.refreshLockWhileAcquired=function(o,n){return m(this,void 0,void 0,function(){var t=this;return u(this,function(e){return setTimeout(function(){return m(t,void 0,void 0,function(){var s,i;return u(this,function(c){switch(c.label){case 0:return[4,L.default().lock(n)];case 1:return c.sent(),this.acquiredIatSet.has(n)?(s=window.localStorage,(i=s.getItem(o))===null?(L.default().unlock(n),[2]):((i=JSON.parse(i)).timeRefreshed=Date.now(),s.setItem(o,JSON.stringify(i)),L.default().unlock(n),this.refreshLockWhileAcquired(o,n),[2])):(L.default().unlock(n),[2])}})})},1e3),[2]})})},r.prototype.waitForSomethingToChange=function(o){return m(this,void 0,void 0,function(){return u(this,function(n){switch(n.label){case 0:return[4,new Promise(function(t){var e=!1,s=Date.now(),i=!1;function c(){if(i||(window.removeEventListener("storage",c),r.removeFromWaiting(c),clearTimeout(k),i=!0),!e){e=!0;var d=50-(Date.now()-s);d>0?setTimeout(t,d):t()}}window.addEventListener("storage",c),r.addToWaiting(c);var k=setTimeout(c,Math.max(0,o-Date.now()))})];case 1:return n.sent(),[2]}})})},r.addToWaiting=function(o){this.removeFromWaiting(o),r.waiters!==void 0&&r.waiters.push(o)},r.removeFromWaiting=function(o){r.waiters!==void 0&&(r.waiters=r.waiters.filter(function(n){return n!==o}))},r.notifyWaiters=function(){r.waiters!==void 0&&r.waiters.slice().forEach(function(o){return o()})},r.prototype.releaseLock=function(o){return m(this,void 0,void 0,function(){return u(this,function(n){switch(n.label){case 0:return[4,this.releaseLock__private__(o)];case 1:return[2,n.sent()]}})})},r.prototype.releaseLock__private__=function(o){return m(this,void 0,void 0,function(){var n,t,e;return u(this,function(s){switch(s.label){case 0:return n=window.localStorage,t=f+"-"+o,(e=n.getItem(t))===null?[2]:(e=JSON.parse(e)).id!==this.id?[3,2]:[4,L.default().lock(e.iat)];case 1:s.sent(),this.acquiredIatSet.delete(e.iat),n.removeItem(t),L.default().unlock(e.iat),r.notifyWaiters(),s.label=2;case 2:return[2]}})})},r.lockCorrector=function(){for(var o=Date.now()-5e3,n=window.localStorage,t=Object.keys(n),e=!1,s=0;s<t.length;s++){var i=t[s];if(i.includes(f)){var c=n.getItem(i);c!==null&&((c=JSON.parse(c)).timeRefreshed===void 0&&c.timeAcquired<o||c.timeRefreshed!==void 0&&c.timeRefreshed<o)&&(n.removeItem(i),e=!0)}}e&&r.notifyWaiters()},r.waiters=void 0,r}();l.default=p})),D=R(function(_,l){var m=M&&M.__assign||function(){return m=Object.assign||function(r){for(var o,n=1,t=arguments.length;n<t;n++)for(var e in o=arguments[n])Object.prototype.hasOwnProperty.call(o,e)&&(r[e]=o[e]);return r},m.apply(this,arguments)};function u(r,o){if(!o)return"";var n="; "+r;return o===!0?n:n+"="+o}function f(r,o,n){return encodeURIComponent(r).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(o).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(t){if(typeof t.expires=="number"){var e=new Date;e.setMilliseconds(e.getMilliseconds()+864e5*t.expires),t.expires=e}return u("Expires",t.expires?t.expires.toUTCString():"")+u("Domain",t.domain)+u("Path",t.path)+u("Secure",t.secure)+u("SameSite",t.sameSite)}(n)}function h(r){for(var o={},n=r?r.split("; "):[],t=/(%[\dA-F]{2})+/gi,e=0;e<n.length;e++){var s=n[e].split("="),i=s.slice(1).join("=");i.charAt(0)==='"'&&(i=i.slice(1,-1));try{o[s[0].replace(t,decodeURIComponent)]=i.replace(t,decodeURIComponent)}catch{}}return o}function v(){return h(document.cookie)}function p(r,o,n){document.cookie=f(r,o,m({path:"/"},n))}l.__esModule=!0,l.encode=f,l.parse=h,l.getAll=v,l.get=function(r){return v()[r]},l.set=p,l.remove=function(r,o){p(r,"",m(m({},o),{expires:-1}))}});P(D),D.encode,D.parse,D.getAll;D.get;D.set;D.remove;new $;function ee(_){let l,m,u,f,h,v,p,r,o,n,t,e,s,i,c,k,d,a,x,W;return{c(){l=b("main"),m=b("div"),u=b("div"),f=b("h1"),h=V("Montem!"),v=O(),p=b("div"),r=b("div"),o=O(),n=b("div"),t=b("form"),e=b("label"),s=V("Sign in"),i=O(),c=b("input"),k=O(),d=b("input"),a=O(),x=b("div"),this.h()},l(T){l=y(T,"MAIN",{});var E=I(l);m=y(E,"DIV",{id:!0,class:!0});var F=I(m);u=y(F,"DIV",{class:!0});var U=I(u);f=y(U,"H1",{class:!0});var N=I(f);h=B(N,"Montem!"),N.forEach(S),U.forEach(S),F.forEach(S),v=A(E),p=y(E,"DIV",{class:!0});var C=I(p);r=y(C,"DIV",{id:!0,class:!0}),I(r).forEach(S),o=A(C),n=y(C,"DIV",{id:!0,class:!0});var j=I(n);t=y(j,"FORM",{class:!0});var q=I(t);e=y(q,"LABEL",{for:!0});var J=I(e);s=B(J,"Sign in"),J.forEach(S),i=A(q),c=y(q,"INPUT",{type:!0,class:!0}),k=A(q),d=y(q,"INPUT",{type:!0,class:!0}),q.forEach(S),j.forEach(S),a=A(C),x=y(C,"DIV",{id:!0,class:!0}),I(x).forEach(S),C.forEach(S),E.forEach(S),this.h()},h(){g(f,"class","h1"),g(u,"class","col d-flex justify-content-center"),g(m,"id","header"),g(m,"class","row"),g(r,"id","left-col"),g(r,"class","col-2 border"),g(e,"for",""),g(c,"type","text"),g(c,"class","rounded"),g(d,"type",""),g(d,"class","rounded"),g(t,"class",""),g(n,"id","main-col"),g(n,"class","col"),g(x,"id","right-col"),g(x,"class","col-2 border"),g(p,"class","row")},m(T,E){Q(T,l,E),w(l,m),w(m,u),w(u,f),w(f,h),w(l,v),w(l,p),w(p,r),w(p,o),w(p,n),w(n,t),w(t,e),w(e,s),w(t,i),w(t,c),w(t,k),w(t,d),w(p,a),w(p,x)},p:H,i(T){W||X(()=>{W=Z(l,Y,{axis:"x",duration:700}),W.start()})},o:H,d(T){T&&S(l)}}}class re extends K{constructor(l){super(),G(this,l,null,ee,z,{})}}export{re as default};
