(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function P1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mc={exports:{}},Ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function W1(){if(O0)return Ul;O0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:n,type:s,key:d,ref:c!==void 0?c:null,props:f}}return Ul.Fragment=l,Ul.jsx=r,Ul.jsxs=r,Ul}var A0;function I1(){return A0||(A0=1,mc.exports=W1()),mc.exports}var y=I1(),gc={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function tb(){if(C0)return ft;C0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function R(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,D={};function C(E,G,V){this.props=E,this.context=G,this.refs=D,this.updater=V||_}C.prototype.isReactComponent={},C.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},C.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function k(){}k.prototype=C.prototype;function L(E,G,V){this.props=E,this.context=G,this.refs=D,this.updater=V||_}var $=L.prototype=new k;$.constructor=L,T($,C.prototype),$.isPureReactComponent=!0;var F=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function K(E,G,V,J,et,yt){return V=yt.ref,{$$typeof:n,type:E,key:G,ref:V!==void 0?V:null,props:yt}}function ut(E,G){return K(E.type,G,void 0,void 0,void 0,E.props)}function mt(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function st(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(V){return G[V]})}var ot=/\/+/g;function Dt(E,G){return typeof E=="object"&&E!==null&&E.key!=null?st(""+E.key):G.toString(36)}function De(){}function un(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(De,De):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Zt(E,G,V,J,et){var yt=typeof E;(yt==="undefined"||yt==="boolean")&&(E=null);var it=!1;if(E===null)it=!0;else switch(yt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(E.$$typeof){case n:case l:it=!0;break;case g:return it=E._init,Zt(it(E._payload),G,V,J,et)}}if(it)return et=et(E),it=J===""?"."+Dt(E,0):J,F(et)?(V="",it!=null&&(V=it.replace(ot,"$&/")+"/"),Zt(et,G,V,"",function(ie){return ie})):et!=null&&(mt(et)&&(et=ut(et,V+(et.key==null||E&&E.key===et.key?"":(""+et.key).replace(ot,"$&/")+"/")+it)),G.push(et)),1;it=0;var Jt=J===""?".":J+":";if(F(E))for(var Et=0;Et<E.length;Et++)J=E[Et],yt=Jt+Dt(J,Et),it+=Zt(J,G,V,yt,et);else if(Et=R(E),typeof Et=="function")for(E=Et.call(E),Et=0;!(J=E.next()).done;)J=J.value,yt=Jt+Dt(J,Et++),it+=Zt(J,G,V,yt,et);else if(yt==="object"){if(typeof E.then=="function")return Zt(un(E),G,V,J,et);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return it}function q(E,G,V){if(E==null)return E;var J=[],et=0;return Zt(E,J,"","",function(yt){return G.call(V,yt,et++)}),J}function Z(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(V){(E._status===0||E._status===-1)&&(E._status=1,E._result=V)},function(V){(E._status===0||E._status===-1)&&(E._status=2,E._result=V)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var nt=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function gt(){}return ft.Children={map:q,forEach:function(E,G,V){q(E,function(){G.apply(this,arguments)},V)},count:function(E){var G=0;return q(E,function(){G++}),G},toArray:function(E){return q(E,function(G){return G})||[]},only:function(E){if(!mt(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ft.Component=C,ft.Fragment=r,ft.Profiler=c,ft.PureComponent=L,ft.StrictMode=s,ft.Suspense=v,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ft.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},ft.cache=function(E){return function(){return E.apply(null,arguments)}},ft.cloneElement=function(E,G,V){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=T({},E.props),et=E.key,yt=void 0;if(G!=null)for(it in G.ref!==void 0&&(yt=void 0),G.key!==void 0&&(et=""+G.key),G)!P.call(G,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&G.ref===void 0||(J[it]=G[it]);var it=arguments.length-2;if(it===1)J.children=V;else if(1<it){for(var Jt=Array(it),Et=0;Et<it;Et++)Jt[Et]=arguments[Et+2];J.children=Jt}return K(E.type,et,void 0,void 0,yt,J)},ft.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},ft.createElement=function(E,G,V){var J,et={},yt=null;if(G!=null)for(J in G.key!==void 0&&(yt=""+G.key),G)P.call(G,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(et[J]=G[J]);var it=arguments.length-2;if(it===1)et.children=V;else if(1<it){for(var Jt=Array(it),Et=0;Et<it;Et++)Jt[Et]=arguments[Et+2];et.children=Jt}if(E&&E.defaultProps)for(J in it=E.defaultProps,it)et[J]===void 0&&(et[J]=it[J]);return K(E,yt,void 0,void 0,null,et)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(E){return{$$typeof:m,render:E}},ft.isValidElement=mt,ft.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:Z}},ft.memo=function(E,G){return{$$typeof:p,type:E,compare:G===void 0?null:G}},ft.startTransition=function(E){var G=X.T,V={};X.T=V;try{var J=E(),et=X.S;et!==null&&et(V,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(gt,nt)}catch(yt){nt(yt)}finally{X.T=G}},ft.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ft.use=function(E){return X.H.use(E)},ft.useActionState=function(E,G,V){return X.H.useActionState(E,G,V)},ft.useCallback=function(E,G){return X.H.useCallback(E,G)},ft.useContext=function(E){return X.H.useContext(E)},ft.useDebugValue=function(){},ft.useDeferredValue=function(E,G){return X.H.useDeferredValue(E,G)},ft.useEffect=function(E,G,V){var J=X.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(E,G)},ft.useId=function(){return X.H.useId()},ft.useImperativeHandle=function(E,G,V){return X.H.useImperativeHandle(E,G,V)},ft.useInsertionEffect=function(E,G){return X.H.useInsertionEffect(E,G)},ft.useLayoutEffect=function(E,G){return X.H.useLayoutEffect(E,G)},ft.useMemo=function(E,G){return X.H.useMemo(E,G)},ft.useOptimistic=function(E,G){return X.H.useOptimistic(E,G)},ft.useReducer=function(E,G,V){return X.H.useReducer(E,G,V)},ft.useRef=function(E){return X.H.useRef(E)},ft.useState=function(E){return X.H.useState(E)},ft.useSyncExternalStore=function(E,G,V){return X.H.useSyncExternalStore(E,G,V)},ft.useTransition=function(){return X.H.useTransition()},ft.version="19.1.1",ft}var j0;function uf(){return j0||(j0=1,gc.exports=tb()),gc.exports}var w=uf();const sn=P1(w);var yc={exports:{}},Nl={},vc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function eb(){return D0||(D0=1,(function(n){function l(q,Z){var nt=q.length;q.push(Z);t:for(;0<nt;){var gt=nt-1>>>1,E=q[gt];if(0<c(E,Z))q[gt]=Z,q[nt]=E,nt=gt;else break t}}function r(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var Z=q[0],nt=q.pop();if(nt!==Z){q[0]=nt;t:for(var gt=0,E=q.length,G=E>>>1;gt<G;){var V=2*(gt+1)-1,J=q[V],et=V+1,yt=q[et];if(0>c(J,nt))et<E&&0>c(yt,J)?(q[gt]=yt,q[et]=nt,gt=et):(q[gt]=J,q[V]=nt,gt=V);else if(et<E&&0>c(yt,nt))q[gt]=yt,q[et]=nt,gt=et;else break t}}return Z}function c(q,Z){var nt=q.sortIndex-Z.sortIndex;return nt!==0?nt:q.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var v=[],p=[],g=1,x=null,R=3,_=!1,T=!1,D=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function F(q){for(var Z=r(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=q)s(p),Z.sortIndex=Z.expirationTime,l(v,Z);else break;Z=r(p)}}function X(q){if(D=!1,F(q),!T)if(r(v)!==null)T=!0,P||(P=!0,Dt());else{var Z=r(p);Z!==null&&Zt(X,Z.startTime-q)}}var P=!1,K=-1,ut=5,mt=-1;function st(){return C?!0:!(n.unstable_now()-mt<ut)}function ot(){if(C=!1,P){var q=n.unstable_now();mt=q;var Z=!0;try{t:{T=!1,D&&(D=!1,L(K),K=-1),_=!0;var nt=R;try{e:{for(F(q),x=r(v);x!==null&&!(x.expirationTime>q&&st());){var gt=x.callback;if(typeof gt=="function"){x.callback=null,R=x.priorityLevel;var E=gt(x.expirationTime<=q);if(q=n.unstable_now(),typeof E=="function"){x.callback=E,F(q),Z=!0;break e}x===r(v)&&s(v),F(q)}else s(v);x=r(v)}if(x!==null)Z=!0;else{var G=r(p);G!==null&&Zt(X,G.startTime-q),Z=!1}}break t}finally{x=null,R=nt,_=!1}Z=void 0}}finally{Z?Dt():P=!1}}}var Dt;if(typeof $=="function")Dt=function(){$(ot)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,un=De.port2;De.port1.onmessage=ot,Dt=function(){un.postMessage(null)}}else Dt=function(){k(ot,0)};function Zt(q,Z){K=k(function(){q(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ut=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_next=function(q){switch(R){case 1:case 2:case 3:var Z=3;break;default:Z=R}var nt=R;R=Z;try{return q()}finally{R=nt}},n.unstable_requestPaint=function(){C=!0},n.unstable_runWithPriority=function(q,Z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var nt=R;R=q;try{return Z()}finally{R=nt}},n.unstable_scheduleCallback=function(q,Z,nt){var gt=n.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?gt+nt:gt):nt=gt,q){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=nt+E,q={id:g++,callback:Z,priorityLevel:q,startTime:nt,expirationTime:E,sortIndex:-1},nt>gt?(q.sortIndex=nt,l(p,q),r(v)===null&&q===r(p)&&(D?(L(K),K=-1):D=!0,Zt(X,nt-gt))):(q.sortIndex=E,l(v,q),T||_||(T=!0,P||(P=!0,Dt()))),q},n.unstable_shouldYield=st,n.unstable_wrapCallback=function(q){var Z=R;return function(){var nt=R;R=Z;try{return q.apply(this,arguments)}finally{R=nt}}}})(bc)),bc}var z0;function nb(){return z0||(z0=1,vc.exports=eb()),vc.exports}var xc={exports:{}},se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function ab(){if(M0)return se;M0=1;var n=uf();function l(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(v,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:v,containerInfo:p,implementation:g}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,se.createPortal=function(v,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return f(v,p,null,g)},se.flushSync=function(v){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,v)return v()}finally{d.T=p,s.p=g,s.d.f()}},se.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},se.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},se.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var g=p.as,x=m(g,p.crossOrigin),R=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:R,fetchPriority:_}):g==="script"&&s.d.X(v,{crossOrigin:x,integrity:R,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},se.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=m(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(v)},se.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=m(g,p.crossOrigin);s.d.L(v,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},se.preloadModule=function(v,p){if(typeof v=="string")if(p){var g=m(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(v)},se.requestFormReset=function(v){s.d.r(v)},se.unstable_batchedUpdates=function(v,p){return v(p)},se.useFormState=function(v,p,g){return d.H.useFormState(v,p,g)},se.useFormStatus=function(){return d.H.useHostTransitionStatus()},se.version="19.1.1",se}var _0;function ib(){if(_0)return xc.exports;_0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),xc.exports=ab(),xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function lb(){if(U0)return Nl;U0=1;var n=nb(),l=uf(),r=ib();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function v(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,i=e;;){var u=a.return;if(u===null)break;var o=u.alternate;if(o===null){if(i=u.return,i!==null){a=i;continue}break}if(u.child===o.child){for(o=u.child;o;){if(o===a)return m(u),t;if(o===i)return m(u),e;o=o.sibling}throw Error(s(188))}if(a.return!==i.return)a=u,i=o;else{for(var h=!1,b=u.child;b;){if(b===a){h=!0,a=u,i=o;break}if(b===i){h=!0,i=u,a=o;break}b=b.sibling}if(!h){for(b=o.child;b;){if(b===a){h=!0,a=o,i=u;break}if(b===i){h=!0,i=o,a=u;break}b=b.sibling}if(!h)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),$=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),mt=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function Dt(t){return t===null||typeof t!="object"?null:(t=ot&&t[ot]||t["@@iterator"],typeof t=="function"?t:null)}var De=Symbol.for("react.client.reference");function un(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===De?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case C:return"Profiler";case D:return"StrictMode";case X:return"Suspense";case P:return"SuspenseList";case mt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case _:return"Portal";case $:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return e=t.displayName||null,e!==null?e:un(t.type)||"Memo";case ut:e=t._payload,t=t._init;try{return un(t(e))}catch{}}return null}var Zt=Array.isArray,q=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},gt=[],E=-1;function G(t){return{current:t}}function V(t){0>E||(t.current=gt[E],gt[E]=null,E--)}function J(t,e){E++,gt[E]=t.current,t.current=e}var et=G(null),yt=G(null),it=G(null),Jt=G(null);function Et(t,e){switch(J(it,e),J(yt,t),J(et,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?t0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=t0(e),t=e0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(et),J(et,t)}function ie(){V(et),V(yt),V(it)}function na(t){t.memoizedState!==null&&J(Jt,t);var e=et.current,a=e0(e,t.type);e!==a&&(J(yt,t),J(et,a))}function on(t){yt.current===t&&(V(et),V(yt)),Jt.current===t&&(V(Jt),jl._currentValue=nt)}var ze=Object.prototype.hasOwnProperty,eu=n.unstable_scheduleCallback,nu=n.unstable_cancelCallback,jy=n.unstable_shouldYield,Dy=n.unstable_requestPaint,We=n.unstable_now,zy=n.unstable_getCurrentPriorityLevel,Uf=n.unstable_ImmediatePriority,Nf=n.unstable_UserBlockingPriority,Il=n.unstable_NormalPriority,My=n.unstable_LowPriority,Bf=n.unstable_IdlePriority,_y=n.log,Uy=n.unstable_setDisableYieldValue,Li=null,be=null;function jn(t){if(typeof _y=="function"&&Uy(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Li,t)}catch{}}var xe=Math.clz32?Math.clz32:Ly,Ny=Math.log,By=Math.LN2;function Ly(t){return t>>>=0,t===0?32:31-(Ny(t)/By|0)|0}var tr=256,er=4194304;function aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function nr(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var u=0,o=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var b=i&134217727;return b!==0?(i=b&~o,i!==0?u=aa(i):(h&=b,h!==0?u=aa(h):a||(a=b&~t,a!==0&&(u=aa(a))))):(b=i&~o,b!==0?u=aa(b):h!==0?u=aa(h):a||(a=i&~t,a!==0&&(u=aa(a)))),u===0?0:e!==0&&e!==u&&(e&o)===0&&(o=u&-u,a=e&-e,o>=a||o===32&&(a&4194048)!==0)?e:u}function qi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qy(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lf(){var t=tr;return tr<<=1,(tr&4194048)===0&&(tr=256),t}function qf(){var t=er;return er<<=1,(er&62914560)===0&&(er=4194304),t}function au(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Hi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hy(t,e,a,i,u,o){var h=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,M=t.hiddenUpdates;for(a=h&~a;0<a;){var H=31-xe(a),Q=1<<H;b[H]=0,S[H]=-1;var U=M[H];if(U!==null)for(M[H]=null,H=0;H<U.length;H++){var N=U[H];N!==null&&(N.lane&=-536870913)}a&=~Q}i!==0&&Hf(t,i,0),o!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=o&~(h&~e))}function Hf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-xe(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&4194090}function kf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-xe(a),u=1<<i;u&e|t[i]&e&&(t[i]|=e),a&=~u}}function iu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yf(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:x0(t.type))}function ky(t,e){var a=Z.p;try{return Z.p=t,e()}finally{Z.p=a}}var Dn=Math.random().toString(36).slice(2),le="__reactFiber$"+Dn,de="__reactProps$"+Dn,za="__reactContainer$"+Dn,ru="__reactEvents$"+Dn,Yy="__reactListeners$"+Dn,Qy="__reactHandles$"+Dn,Qf="__reactResources$"+Dn,ki="__reactMarker$"+Dn;function su(t){delete t[le],delete t[de],delete t[ru],delete t[Yy],delete t[Qy]}function Ma(t){var e=t[le];if(e)return e;for(var a=t.parentNode;a;){if(e=a[za]||a[le]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=l0(t);t!==null;){if(a=t[le])return a;t=l0(t)}return e}t=a,a=t.parentNode}return null}function _a(t){if(t=t[le]||t[za]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Yi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Ua(t){var e=t[Qf];return e||(e=t[Qf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[ki]=!0}var Gf=new Set,$f={};function ia(t,e){Na(t,e),Na(t+"Capture",e)}function Na(t,e){for($f[t]=e,t=0;t<e.length;t++)Gf.add(e[t])}var Gy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xf={},Kf={};function $y(t){return ze.call(Kf,t)?!0:ze.call(Xf,t)?!1:Gy.test(t)?Kf[t]=!0:(Xf[t]=!0,!1)}function ar(t,e,a){if($y(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function ir(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function cn(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}var uu,Vf;function Ba(t){if(uu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||"",Vf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uu+t+Vf}var ou=!1;function cu(t,e){if(!t||ou)return"";ou=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(N){var U=N}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(N){U=N}t.call(Q.prototype)}}else{try{throw Error()}catch(N){U=N}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(N){if(N&&U&&typeof N.stack=="string")return[N.stack,U.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),h=o[0],b=o[1];if(h&&b){var S=h.split(`
`),M=b.split(`
`);for(u=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;u<M.length&&!M[u].includes("DetermineComponentFrameRoot");)u++;if(i===S.length||u===M.length)for(i=S.length-1,u=M.length-1;1<=i&&0<=u&&S[i]!==M[u];)u--;for(;1<=i&&0<=u;i--,u--)if(S[i]!==M[u]){if(i!==1||u!==1)do if(i--,u--,0>u||S[i]!==M[u]){var H=`
`+S[i].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=i&&0<=u);break}}}finally{ou=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ba(a):""}function Xy(t){switch(t.tag){case 26:case 27:case 5:return Ba(t.type);case 16:return Ba("Lazy");case 13:return Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 15:return cu(t.type,!1);case 11:return cu(t.type.render,!1);case 1:return cu(t.type,!0);case 31:return Ba("Activity");default:return""}}function Zf(t){try{var e="";do e+=Xy(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ky(t){var e=Jf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(h){i=""+h,o.call(this,h)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lr(t){t._valueTracker||(t._valueTracker=Ky(t))}function Ff(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=Jf(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function rr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vy=/[\n"\\]/g;function _e(t){return t.replace(Vy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fu(t,e,a,i,u,o,h,b){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Me(e)):t.value!==""+Me(e)&&(t.value=""+Me(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?du(t,h,Me(e)):a!=null?du(t,h,Me(a)):i!=null&&t.removeAttribute("value"),u==null&&o!=null&&(t.defaultChecked=!!o),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Me(b):t.removeAttribute("name")}function Pf(t,e,a,i,u,o,h,b){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;a=a!=null?""+Me(a):"",e=e!=null?""+Me(e):a,b||e===t.value||(t.value=e),t.defaultValue=e}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=b?t.checked:!!i,t.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function du(t,e,a){e==="number"&&rr(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function La(t,e,a,i){if(t=t.options,e){e={};for(var u=0;u<a.length;u++)e["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=e.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&i&&(t[a].defaultSelected=!0)}else{for(a=""+Me(a),e=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,i&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Wf(t,e,a){if(e!=null&&(e=""+Me(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Me(a):""}function If(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(s(92));if(Zt(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=Me(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i)}function qa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function td(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||Zy.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ed(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var u in e)i=e[u],e.hasOwnProperty(u)&&a[u]!==i&&td(t,u,i)}else for(var o in e)e.hasOwnProperty(o)&&td(t,o,e[o])}function hu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sr(t){return Fy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,ka=null;function nd(t){var e=_a(t);if(e&&(t=e.stateNode)){var a=t[de]||null;t:switch(t=e.stateNode,e.type){case"input":if(fu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var u=i[de]||null;if(!u)throw Error(s(90));fu(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&Ff(i)}break t;case"textarea":Wf(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&La(t,!!a.multiple,e,!1)}}}var gu=!1;function ad(t,e,a){if(gu)return t(e,a);gu=!0;try{var i=t(e);return i}finally{if(gu=!1,(Ha!==null||ka!==null)&&(Kr(),Ha&&(e=Ha,t=ka,ka=Ha=null,nd(e),t)))for(e=0;e<t.length;e++)nd(t[e])}}function Qi(t,e){var a=t.stateNode;if(a===null)return null;var i=a[de]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(fn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{yu=!1}var zn=null,vu=null,ur=null;function id(){if(ur)return ur;var t,e=vu,a=e.length,i,u="value"in zn?zn.value:zn.textContent,o=u.length;for(t=0;t<a&&e[t]===u[t];t++);var h=a-t;for(i=1;i<=h&&e[a-i]===u[o-i];i++);return ur=u.slice(t,1<i?1-i:void 0)}function or(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cr(){return!0}function ld(){return!1}function he(t){function e(a,i,u,o,h){this._reactName=a,this._targetInst=u,this.type=i,this.nativeEvent=o,this.target=h,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(o):o[b]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:ld,this.isPropagationStopped=ld,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=he(la),$i=g({},la,{view:0,detail:0}),Py=he($i),bu,xu,Xi,dr=g({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xi&&(Xi&&t.type==="mousemove"?(bu=t.screenX-Xi.screenX,xu=t.screenY-Xi.screenY):xu=bu=0,Xi=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),rd=he(dr),Wy=g({},dr,{dataTransfer:0}),Iy=he(Wy),tv=g({},$i,{relatedTarget:0}),Su=he(tv),ev=g({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=he(ev),av=g({},la,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=he(av),lv=g({},la,{data:0}),sd=he(lv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uv[t])?!!e[t]:!1}function wu(){return ov}var cv=g({},$i,{key:function(t){if(t.key){var e=rv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=or(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?or(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?or(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fv=he(cv),dv=g({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=he(dv),hv=g({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),pv=he(hv),mv=g({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=he(mv),yv=g({},dr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=he(yv),bv=g({},la,{newState:0,oldState:0}),xv=he(bv),Sv=[9,13,27,32],Eu=fn&&"CompositionEvent"in window,Ki=null;fn&&"documentMode"in document&&(Ki=document.documentMode);var wv=fn&&"TextEvent"in window&&!Ki,od=fn&&(!Eu||Ki&&8<Ki&&11>=Ki),cd=" ",fd=!1;function dd(t,e){switch(t){case"keyup":return Sv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ya=!1;function Ev(t,e){switch(t){case"compositionend":return hd(e);case"keypress":return e.which!==32?null:(fd=!0,cd);case"textInput":return t=e.data,t===cd&&fd?null:t;default:return null}}function Rv(t,e){if(Ya)return t==="compositionend"||!Eu&&dd(t,e)?(t=id(),ur=vu=zn=null,Ya=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return od&&e.locale!=="ko"?null:e.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tv[t.type]:e==="textarea"}function md(t,e,a,i){Ha?ka?ka.push(i):ka=[i]:Ha=i,e=Wr(e,"onChange"),0<e.length&&(a=new fr("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Vi=null,Zi=null;function Ov(t){Jp(t,0)}function hr(t){var e=Yi(t);if(Ff(e))return t}function gd(t,e){if(t==="change")return e}var yd=!1;if(fn){var Ru;if(fn){var Tu="oninput"in document;if(!Tu){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),Tu=typeof vd.oninput=="function"}Ru=Tu}else Ru=!1;yd=Ru&&(!document.documentMode||9<document.documentMode)}function bd(){Vi&&(Vi.detachEvent("onpropertychange",xd),Zi=Vi=null)}function xd(t){if(t.propertyName==="value"&&hr(Zi)){var e=[];md(e,Zi,t,mu(t)),ad(Ov,e)}}function Av(t,e,a){t==="focusin"?(bd(),Vi=e,Zi=a,Vi.attachEvent("onpropertychange",xd)):t==="focusout"&&bd()}function Cv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hr(Zi)}function jv(t,e){if(t==="click")return hr(e)}function Dv(t,e){if(t==="input"||t==="change")return hr(e)}function zv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Se=typeof Object.is=="function"?Object.is:zv;function Ji(t,e){if(Se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var u=a[i];if(!ze.call(e,u)||!Se(t[u],e[u]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,e){var a=Sd(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sd(a)}}function Ed(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ed(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=rr(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=rr(t.document)}return e}function Ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Mv=fn&&"documentMode"in document&&11>=document.documentMode,Qa=null,Au=null,Fi=null,Cu=!1;function Td(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Qa==null||Qa!==rr(i)||(i=Qa,"selectionStart"in i&&Ou(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fi&&Ji(Fi,i)||(Fi=i,i=Wr(Au,"onSelect"),0<i.length&&(e=new fr("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=Qa)))}function ra(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ga={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},ju={},Od={};fn&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function sa(t){if(ju[t])return ju[t];if(!Ga[t])return t;var e=Ga[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Od)return ju[t]=e[a];return t}var Ad=sa("animationend"),Cd=sa("animationiteration"),jd=sa("animationstart"),_v=sa("transitionrun"),Uv=sa("transitionstart"),Nv=sa("transitioncancel"),Dd=sa("transitionend"),zd=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function $e(t,e){zd.set(t,e),ia(e,[t])}var Md=new WeakMap;function Ue(t,e){if(typeof t=="object"&&t!==null){var a=Md.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Zf(e)},Md.set(t,e),e)}return{value:t,source:e,stack:Zf(e)}}var Ne=[],$a=0,zu=0;function pr(){for(var t=$a,e=zu=$a=0;e<t;){var a=Ne[e];Ne[e++]=null;var i=Ne[e];Ne[e++]=null;var u=Ne[e];Ne[e++]=null;var o=Ne[e];if(Ne[e++]=null,i!==null&&u!==null){var h=i.pending;h===null?u.next=u:(u.next=h.next,h.next=u),i.pending=u}o!==0&&_d(a,u,o)}}function mr(t,e,a,i){Ne[$a++]=t,Ne[$a++]=e,Ne[$a++]=a,Ne[$a++]=i,zu|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Mu(t,e,a,i){return mr(t,e,a,i),gr(t)}function Xa(t,e){return mr(t,null,null,e),gr(t)}function _d(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var u=!1,o=t.return;o!==null;)o.childLanes|=a,i=o.alternate,i!==null&&(i.childLanes|=a),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(u=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,u&&e!==null&&(u=31-xe(a),t=o.hiddenUpdates,i=t[u],i===null?t[u]=[e]:i.push(e),e.lane=a|536870912),o):null}function gr(t){if(50<Sl)throw Sl=0,Ho=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ka={};function Bv(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(t,e,a,i){return new Bv(t,e,a,i)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dn(t,e){var a=t.alternate;return a===null?(a=we(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ud(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function yr(t,e,a,i,u,o){var h=0;if(i=t,typeof t=="function")_u(t)&&(h=1);else if(typeof t=="string")h=q1(t,a,et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case mt:return t=we(31,a,e,u),t.elementType=mt,t.lanes=o,t;case T:return ua(a.children,u,o,e);case D:h=8,u|=24;break;case C:return t=we(12,a,e,u|2),t.elementType=C,t.lanes=o,t;case X:return t=we(13,a,e,u),t.elementType=X,t.lanes=o,t;case P:return t=we(19,a,e,u),t.elementType=P,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:case $:h=10;break t;case L:h=9;break t;case F:h=11;break t;case K:h=14;break t;case ut:h=16,i=null;break t}h=29,a=Error(s(130,t===null?"null":typeof t,"")),i=null}return e=we(h,a,e,u),e.elementType=t,e.type=i,e.lanes=o,e}function ua(t,e,a,i){return t=we(7,t,i,e),t.lanes=a,t}function Uu(t,e,a){return t=we(6,t,null,e),t.lanes=a,t}function Nu(t,e,a){return e=we(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Va=[],Za=0,vr=null,br=0,Be=[],Le=0,oa=null,hn=1,pn="";function ca(t,e){Va[Za++]=br,Va[Za++]=vr,vr=t,br=e}function Nd(t,e,a){Be[Le++]=hn,Be[Le++]=pn,Be[Le++]=oa,oa=t;var i=hn;t=pn;var u=32-xe(i)-1;i&=~(1<<u),a+=1;var o=32-xe(e)+u;if(30<o){var h=u-u%5;o=(i&(1<<h)-1).toString(32),i>>=h,u-=h,hn=1<<32-xe(e)+u|a<<u|i,pn=o+t}else hn=1<<o|a<<u|i,pn=t}function Bu(t){t.return!==null&&(ca(t,1),Nd(t,1,0))}function Lu(t){for(;t===vr;)vr=Va[--Za],Va[Za]=null,br=Va[--Za],Va[Za]=null;for(;t===oa;)oa=Be[--Le],Be[Le]=null,pn=Be[--Le],Be[Le]=null,hn=Be[--Le],Be[Le]=null}var ce=null,qt=null,wt=!1,fa=null,Ie=!1,qu=Error(s(519));function da(t){var e=Error(s(418,""));throw Ii(Ue(e,t)),qu}function Bd(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[le]=t,e[de]=i,a){case"dialog":bt("cancel",e),bt("close",e);break;case"iframe":case"object":case"embed":bt("load",e);break;case"video":case"audio":for(a=0;a<El.length;a++)bt(El[a],e);break;case"source":bt("error",e);break;case"img":case"image":case"link":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"input":bt("invalid",e),Pf(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),lr(e);break;case"select":bt("invalid",e);break;case"textarea":bt("invalid",e),If(e,i.value,i.defaultValue,i.children),lr(e)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||Ip(e.textContent,a)?(i.popover!=null&&(bt("beforetoggle",e),bt("toggle",e)),i.onScroll!=null&&bt("scroll",e),i.onScrollEnd!=null&&bt("scrollend",e),i.onClick!=null&&(e.onclick=Ir),e=!0):e=!1,e||da(t)}function Ld(t){for(ce=t.return;ce;)switch(ce.tag){case 5:case 13:Ie=!1;return;case 27:case 3:Ie=!0;return;default:ce=ce.return}}function Pi(t){if(t!==ce)return!1;if(!wt)return Ld(t),wt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ec(t.type,t.memoizedProps)),a=!a),a&&qt&&da(t),Ld(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){qt=Ke(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}qt=null}}else e===27?(e=qt,Vn(t.type)?(t=lc,lc=null,qt=t):qt=e):qt=ce?Ke(t.stateNode.nextSibling):null;return!0}function Wi(){qt=ce=null,wt=!1}function qd(){var t=fa;return t!==null&&(ge===null?ge=t:ge.push.apply(ge,t),fa=null),t}function Ii(t){fa===null?fa=[t]:fa.push(t)}var Hu=G(null),ha=null,mn=null;function Mn(t,e,a){J(Hu,e._currentValue),e._currentValue=a}function gn(t){t._currentValue=Hu.current,V(Hu)}function ku(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function Yu(t,e,a,i){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var o=u.dependencies;if(o!==null){var h=u.child;o=o.firstContext;t:for(;o!==null;){var b=o;o=u;for(var S=0;S<e.length;S++)if(b.context===e[S]){o.lanes|=a,b=o.alternate,b!==null&&(b.lanes|=a),ku(o.return,a,t),i||(h=null);break t}o=b.next}}else if(u.tag===18){if(h=u.return,h===null)throw Error(s(341));h.lanes|=a,o=h.alternate,o!==null&&(o.lanes|=a),ku(h,a,t),h=null}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===t){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}}function tl(t,e,a,i){t=null;for(var u=e,o=!1;u!==null;){if(!o){if((u.flags&524288)!==0)o=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var h=u.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var b=u.type;Se(u.pendingProps.value,h.value)||(t!==null?t.push(b):t=[b])}}else if(u===Jt.current){if(h=u.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(jl):t=[jl])}u=u.return}t!==null&&Yu(e,t,a,i),e.flags|=262144}function xr(t){for(t=t.firstContext;t!==null;){if(!Se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pa(t){ha=t,mn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function re(t){return Hd(ha,t)}function Sr(t,e){return ha===null&&pa(t),Hd(t,e)}function Hd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},mn===null){if(t===null)throw Error(s(308));mn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else mn=mn.next=e;return a}var Lv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},qv=n.unstable_scheduleCallback,Hv=n.unstable_NormalPriority,Xt={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new Lv,data:new Map,refCount:0}}function el(t){t.refCount--,t.refCount===0&&qv(Hv,function(){t.controller.abort()})}var nl=null,Gu=0,Ja=0,Fa=null;function kv(t,e){if(nl===null){var a=nl=[];Gu=0,Ja=Ko(),Fa={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Gu++,e.then(kd,kd),e}function kd(){if(--Gu===0&&nl!==null){Fa!==null&&(Fa.status="fulfilled");var t=nl;nl=null,Ja=0,Fa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Yv(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var u=0;u<a.length;u++)(0,a[u])(e)},function(u){for(i.status="rejected",i.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),i}var Yd=q.S;q.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&kv(t,e),Yd!==null&&Yd(t,e)};var ma=G(null);function $u(){var t=ma.current;return t!==null?t:Mt.pooledCache}function wr(t,e){e===null?J(ma,ma.current):J(ma,e.pool)}function Qd(){var t=$u();return t===null?null:{parent:Xt._currentValue,pool:t}}var al=Error(s(460)),Gd=Error(s(474)),Er=Error(s(542)),Xu={then:function(){}};function $d(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rr(){}function Xd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Rr,Rr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Vd(t),t;default:if(typeof e.status=="string")e.then(Rr,Rr);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=i}},function(i){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Vd(t),t}throw il=e,al}}var il=null;function Kd(){if(il===null)throw Error(s(459));var t=il;return il=null,t}function Vd(t){if(t===al||t===Er)throw Error(s(483))}var _n=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Un(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Tt&2)!==0){var u=i.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),i.pending=e,e=gr(t),_d(t,null,a),e}return mr(t,i,e,a),gr(t)}function ll(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,kf(t,a)}}function Zu(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var u=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var h={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?u=o=h:o=o.next=h,a=a.next}while(a!==null);o===null?u=o=e:o=o.next=e}else u=o=e;a={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Ju=!1;function rl(){if(Ju){var t=Fa;if(t!==null)throw t}}function sl(t,e,a,i){Ju=!1;var u=t.updateQueue;_n=!1;var o=u.firstBaseUpdate,h=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var S=b,M=S.next;S.next=null,h===null?o=M:h.next=M,h=S;var H=t.alternate;H!==null&&(H=H.updateQueue,b=H.lastBaseUpdate,b!==h&&(b===null?H.firstBaseUpdate=M:b.next=M,H.lastBaseUpdate=S))}if(o!==null){var Q=u.baseState;h=0,H=M=S=null,b=o;do{var U=b.lane&-536870913,N=U!==b.lane;if(N?(xt&U)===U:(i&U)===U){U!==0&&U===Ja&&(Ju=!0),H!==null&&(H=H.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var rt=t,at=b;U=e;var jt=a;switch(at.tag){case 1:if(rt=at.payload,typeof rt=="function"){Q=rt.call(jt,Q,U);break t}Q=rt;break t;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=at.payload,U=typeof rt=="function"?rt.call(jt,Q,U):rt,U==null)break t;Q=g({},Q,U);break t;case 2:_n=!0}}U=b.callback,U!==null&&(t.flags|=64,N&&(t.flags|=8192),N=u.callbacks,N===null?u.callbacks=[U]:N.push(U))}else N={lane:U,tag:b.tag,payload:b.payload,callback:b.callback,next:null},H===null?(M=H=N,S=Q):H=H.next=N,h|=U;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;N=b,b=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);H===null&&(S=Q),u.baseState=S,u.firstBaseUpdate=M,u.lastBaseUpdate=H,o===null&&(u.shared.lanes=0),Gn|=h,t.lanes=h,t.memoizedState=Q}}function Zd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Jd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zd(a[t],e)}var Pa=G(null),Tr=G(0);function Fd(t,e){t=En,J(Tr,t),J(Pa,e),En=t|e.baseLanes}function Fu(){J(Tr,En),J(Pa,Pa.current)}function Pu(){En=Tr.current,V(Pa),V(Tr)}var Bn=0,ht=null,At=null,Qt=null,Or=!1,Wa=!1,ga=!1,Ar=0,ul=0,Ia=null,Qv=0;function kt(){throw Error(s(321))}function Wu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Se(t[a],e[a]))return!1;return!0}function Iu(t,e,a,i,u,o){return Bn=o,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,q.H=t===null||t.memoizedState===null?_h:Uh,ga=!1,o=a(i,u),ga=!1,Wa&&(o=Wd(e,a,i,u)),Pd(t),o}function Pd(t){q.H=_r;var e=At!==null&&At.next!==null;if(Bn=0,Qt=At=ht=null,Or=!1,ul=0,Ia=null,e)throw Error(s(300));t===null||Pt||(t=t.dependencies,t!==null&&xr(t)&&(Pt=!0))}function Wd(t,e,a,i){ht=t;var u=0;do{if(Wa&&(Ia=null),ul=0,Wa=!1,25<=u)throw Error(s(301));if(u+=1,Qt=At=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}q.H=Jv,o=e(a,i)}while(Wa);return o}function Gv(){var t=q.H,e=t.useState()[0];return e=typeof e.then=="function"?ol(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ht.flags|=1024),e}function to(){var t=Ar!==0;return Ar=0,t}function eo(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function no(t){if(Or){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Or=!1}Bn=0,Qt=At=ht=null,Wa=!1,ul=Ar=0,Ia=null}function pe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?ht.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Gt(){if(At===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Qt===null?ht.memoizedState:Qt.next;if(e!==null)Qt=e,At=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Qt===null?ht.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(t){var e=ul;return ul+=1,Ia===null&&(Ia=[]),t=Xd(Ia,t,e),e=ht,(Qt===null?e.memoizedState:Qt.next)===null&&(e=e.alternate,q.H=e===null||e.memoizedState===null?_h:Uh),t}function Cr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ol(t);if(t.$$typeof===$)return re(t)}throw Error(s(438,String(t)))}function io(t){var e=null,a=ht.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ao(),ht.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=st;return e.index++,a}function yn(t,e){return typeof e=="function"?e(t):e}function jr(t){var e=Gt();return lo(e,At,t)}function lo(t,e,a){var i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var u=t.baseQueue,o=i.pending;if(o!==null){if(u!==null){var h=u.next;u.next=o.next,o.next=h}e.baseQueue=u=o,i.pending=null}if(o=t.baseState,u===null)t.memoizedState=o;else{e=u.next;var b=h=null,S=null,M=e,H=!1;do{var Q=M.lane&-536870913;if(Q!==M.lane?(xt&Q)===Q:(Bn&Q)===Q){var U=M.revertLane;if(U===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Q===Ja&&(H=!0);else if((Bn&U)===U){M=M.next,U===Ja&&(H=!0);continue}else Q={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(b=S=Q,h=o):S=S.next=Q,ht.lanes|=U,Gn|=U;Q=M.action,ga&&a(o,Q),o=M.hasEagerState?M.eagerState:a(o,Q)}else U={lane:Q,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(b=S=U,h=o):S=S.next=U,ht.lanes|=Q,Gn|=Q;M=M.next}while(M!==null&&M!==e);if(S===null?h=o:S.next=b,!Se(o,t.memoizedState)&&(Pt=!0,H&&(a=Fa,a!==null)))throw a;t.memoizedState=o,t.baseState=h,t.baseQueue=S,i.lastRenderedState=o}return u===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ro(t){var e=Gt(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var i=a.dispatch,u=a.pending,o=e.memoizedState;if(u!==null){a.pending=null;var h=u=u.next;do o=t(o,h.action),h=h.next;while(h!==u);Se(o,e.memoizedState)||(Pt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),a.lastRenderedState=o}return[o,i]}function Id(t,e,a){var i=ht,u=Gt(),o=wt;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=e();var h=!Se((At||u).memoizedState,a);h&&(u.memoizedState=a,Pt=!0),u=u.queue;var b=nh.bind(null,i,u,t);if(cl(2048,8,b,[t]),u.getSnapshot!==e||h||Qt!==null&&Qt.memoizedState.tag&1){if(i.flags|=2048,ti(9,Dr(),eh.bind(null,i,u,a,e),null),Mt===null)throw Error(s(349));o||(Bn&124)!==0||th(i,e,a)}return a}function th(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ht.updateQueue,e===null?(e=ao(),ht.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function eh(t,e,a,i){e.value=a,e.getSnapshot=i,ah(e)&&ih(t)}function nh(t,e,a){return a(function(){ah(e)&&ih(t)})}function ah(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Se(t,a)}catch{return!0}}function ih(t){var e=Xa(t,2);e!==null&&Ae(e,t,2)}function so(t){var e=pe();if(typeof t=="function"){var a=t;if(t=a(),ga){jn(!0);try{a()}finally{jn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:t},e}function lh(t,e,a,i){return t.baseState=a,lo(t,At,typeof i=="function"?i:yn)}function $v(t,e,a,i,u){if(Mr(t))throw Error(s(485));if(t=e.action,t!==null){var o={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){o.listeners.push(h)}};q.T!==null?a(!0):o.isTransition=!1,i(o),a=e.pending,a===null?(o.next=e.pending=o,rh(e,o)):(o.next=a.next,e.pending=a.next=o)}}function rh(t,e){var a=e.action,i=e.payload,u=t.state;if(e.isTransition){var o=q.T,h={};q.T=h;try{var b=a(u,i),S=q.S;S!==null&&S(h,b),sh(t,e,b)}catch(M){uo(t,e,M)}finally{q.T=o}}else try{o=a(u,i),sh(t,e,o)}catch(M){uo(t,e,M)}}function sh(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){uh(t,e,i)},function(i){return uo(t,e,i)}):uh(t,e,a)}function uh(t,e,a){e.status="fulfilled",e.value=a,oh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,rh(t,a)))}function uo(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,oh(e),e=e.next;while(e!==i)}t.action=null}function oh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ch(t,e){return e}function fh(t,e){if(wt){var a=Mt.formState;if(a!==null){t:{var i=ht;if(wt){if(qt){e:{for(var u=qt,o=Ie;u.nodeType!==8;){if(!o){u=null;break e}if(u=Ke(u.nextSibling),u===null){u=null;break e}}o=u.data,u=o==="F!"||o==="F"?u:null}if(u){qt=Ke(u.nextSibling),i=u.data==="F!";break t}}da(i)}i=!1}i&&(e=a[0])}}return a=pe(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ch,lastRenderedState:e},a.queue=i,a=Dh.bind(null,ht,i),i.dispatch=a,i=so(!1),o=po.bind(null,ht,!1,i.queue),i=pe(),u={state:e,dispatch:null,action:t,pending:null},i.queue=u,a=$v.bind(null,ht,u,o,a),u.dispatch=a,i.memoizedState=t,[e,a,!1]}function dh(t){var e=Gt();return hh(e,At,t)}function hh(t,e,a){if(e=lo(t,e,ch)[0],t=jr(yn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=ol(e)}catch(h){throw h===al?Er:h}else i=e;e=Gt();var u=e.queue,o=u.dispatch;return a!==e.memoizedState&&(ht.flags|=2048,ti(9,Dr(),Xv.bind(null,u,a),null)),[i,o,t]}function Xv(t,e){t.action=e}function ph(t){var e=Gt(),a=At;if(a!==null)return hh(e,a,t);Gt(),e=e.memoizedState,a=Gt();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function ti(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=ht.updateQueue,e===null&&(e=ao(),ht.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function Dr(){return{destroy:void 0,resource:void 0}}function mh(){return Gt().memoizedState}function zr(t,e,a,i){var u=pe();i=i===void 0?null:i,ht.flags|=t,u.memoizedState=ti(1|e,Dr(),a,i)}function cl(t,e,a,i){var u=Gt();i=i===void 0?null:i;var o=u.memoizedState.inst;At!==null&&i!==null&&Wu(i,At.memoizedState.deps)?u.memoizedState=ti(e,o,a,i):(ht.flags|=t,u.memoizedState=ti(1|e,o,a,i))}function gh(t,e){zr(8390656,8,t,e)}function yh(t,e){cl(2048,8,t,e)}function vh(t,e){return cl(4,2,t,e)}function bh(t,e){return cl(4,4,t,e)}function xh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sh(t,e,a){a=a!=null?a.concat([t]):null,cl(4,4,xh.bind(null,e,t),a)}function oo(){}function wh(t,e){var a=Gt();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&Wu(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function Eh(t,e){var a=Gt();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&Wu(e,i[1]))return i[0];if(i=t(),ga){jn(!0);try{t()}finally{jn(!1)}}return a.memoizedState=[i,e],i}function co(t,e,a){return a===void 0||(Bn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Op(),ht.lanes|=t,Gn|=t,a)}function Rh(t,e,a,i){return Se(a,e)?a:Pa.current!==null?(t=co(t,a,i),Se(t,e)||(Pt=!0),t):(Bn&42)===0?(Pt=!0,t.memoizedState=a):(t=Op(),ht.lanes|=t,Gn|=t,e)}function Th(t,e,a,i,u){var o=Z.p;Z.p=o!==0&&8>o?o:8;var h=q.T,b={};q.T=b,po(t,!1,e,a);try{var S=u(),M=q.S;if(M!==null&&M(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=Yv(S,i);fl(t,e,H,Oe(t))}else fl(t,e,i,Oe(t))}catch(Q){fl(t,e,{then:function(){},status:"rejected",reason:Q},Oe())}finally{Z.p=o,q.T=h}}function Kv(){}function fo(t,e,a,i){if(t.tag!==5)throw Error(s(476));var u=Oh(t).queue;Th(t,u,e,nt,a===null?Kv:function(){return Ah(t),a(i)})}function Oh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:nt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ah(t){var e=Oh(t).next.queue;fl(t,e,{},Oe())}function ho(){return re(jl)}function Ch(){return Gt().memoizedState}function jh(){return Gt().memoizedState}function Vv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Oe();t=Un(a);var i=Nn(e,t,a);i!==null&&(Ae(i,e,a),ll(i,e,a)),e={cache:Qu()},t.payload=e;return}e=e.return}}function Zv(t,e,a){var i=Oe();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Mr(t)?zh(e,a):(a=Mu(t,e,a,i),a!==null&&(Ae(a,t,i),Mh(a,e,i)))}function Dh(t,e,a){var i=Oe();fl(t,e,a,i)}function fl(t,e,a,i){var u={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mr(t))zh(e,u);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var h=e.lastRenderedState,b=o(h,a);if(u.hasEagerState=!0,u.eagerState=b,Se(b,h))return mr(t,e,u,0),Mt===null&&pr(),!1}catch{}finally{}if(a=Mu(t,e,u,i),a!==null)return Ae(a,t,i),Mh(a,e,i),!0}return!1}function po(t,e,a,i){if(i={lane:2,revertLane:Ko(),action:i,hasEagerState:!1,eagerState:null,next:null},Mr(t)){if(e)throw Error(s(479))}else e=Mu(t,a,i,2),e!==null&&Ae(e,t,2)}function Mr(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function zh(t,e){Wa=Or=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Mh(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,kf(t,a)}}var _r={readContext:re,use:Cr,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},_h={readContext:re,use:Cr,useCallback:function(t,e){return pe().memoizedState=[t,e===void 0?null:e],t},useContext:re,useEffect:gh,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,zr(4194308,4,xh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return zr(4194308,4,t,e)},useInsertionEffect:function(t,e){zr(4,2,t,e)},useMemo:function(t,e){var a=pe();e=e===void 0?null:e;var i=t();if(ga){jn(!0);try{t()}finally{jn(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=pe();if(a!==void 0){var u=a(e);if(ga){jn(!0);try{a(e)}finally{jn(!1)}}}else u=e;return i.memoizedState=i.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},i.queue=t,t=t.dispatch=Zv.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=pe();return t={current:t},e.memoizedState=t},useState:function(t){t=so(t);var e=t.queue,a=Dh.bind(null,ht,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:oo,useDeferredValue:function(t,e){var a=pe();return co(a,t,e)},useTransition:function(){var t=so(!1);return t=Th.bind(null,ht,t.queue,!0,!1),pe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=ht,u=pe();if(wt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),Mt===null)throw Error(s(349));(xt&124)!==0||th(i,e,a)}u.memoizedState=a;var o={value:a,getSnapshot:e};return u.queue=o,gh(nh.bind(null,i,o,t),[t]),i.flags|=2048,ti(9,Dr(),eh.bind(null,i,o,a,e),null),a},useId:function(){var t=pe(),e=Mt.identifierPrefix;if(wt){var a=pn,i=hn;a=(i&~(1<<32-xe(i)-1)).toString(32)+a,e="«"+e+"R"+a,a=Ar++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Qv++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ho,useFormState:fh,useActionState:fh,useOptimistic:function(t){var e=pe();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=po.bind(null,ht,!0,a),a.dispatch=e,[t,e]},useMemoCache:io,useCacheRefresh:function(){return pe().memoizedState=Vv.bind(null,ht)}},Uh={readContext:re,use:Cr,useCallback:wh,useContext:re,useEffect:yh,useImperativeHandle:Sh,useInsertionEffect:vh,useLayoutEffect:bh,useMemo:Eh,useReducer:jr,useRef:mh,useState:function(){return jr(yn)},useDebugValue:oo,useDeferredValue:function(t,e){var a=Gt();return Rh(a,At.memoizedState,t,e)},useTransition:function(){var t=jr(yn)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:ol(t),e]},useSyncExternalStore:Id,useId:Ch,useHostTransitionStatus:ho,useFormState:dh,useActionState:dh,useOptimistic:function(t,e){var a=Gt();return lh(a,At,t,e)},useMemoCache:io,useCacheRefresh:jh},Jv={readContext:re,use:Cr,useCallback:wh,useContext:re,useEffect:yh,useImperativeHandle:Sh,useInsertionEffect:vh,useLayoutEffect:bh,useMemo:Eh,useReducer:ro,useRef:mh,useState:function(){return ro(yn)},useDebugValue:oo,useDeferredValue:function(t,e){var a=Gt();return At===null?co(a,t,e):Rh(a,At.memoizedState,t,e)},useTransition:function(){var t=ro(yn)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:ol(t),e]},useSyncExternalStore:Id,useId:Ch,useHostTransitionStatus:ho,useFormState:ph,useActionState:ph,useOptimistic:function(t,e){var a=Gt();return At!==null?lh(a,At,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:io,useCacheRefresh:jh},ei=null,dl=0;function Ur(t){var e=dl;return dl+=1,ei===null&&(ei=[]),Xd(ei,t,e)}function hl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Nr(t,e){throw e.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nh(t){var e=t._init;return e(t._payload)}function Bh(t){function e(j,O){if(t){var z=j.deletions;z===null?(j.deletions=[O],j.flags|=16):z.push(O)}}function a(j,O){if(!t)return null;for(;O!==null;)e(j,O),O=O.sibling;return null}function i(j){for(var O=new Map;j!==null;)j.key!==null?O.set(j.key,j):O.set(j.index,j),j=j.sibling;return O}function u(j,O){return j=dn(j,O),j.index=0,j.sibling=null,j}function o(j,O,z){return j.index=z,t?(z=j.alternate,z!==null?(z=z.index,z<O?(j.flags|=67108866,O):z):(j.flags|=67108866,O)):(j.flags|=1048576,O)}function h(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function b(j,O,z,Y){return O===null||O.tag!==6?(O=Uu(z,j.mode,Y),O.return=j,O):(O=u(O,z),O.return=j,O)}function S(j,O,z,Y){var W=z.type;return W===T?H(j,O,z.props.children,Y,z.key):O!==null&&(O.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ut&&Nh(W)===O.type)?(O=u(O,z.props),hl(O,z),O.return=j,O):(O=yr(z.type,z.key,z.props,null,j.mode,Y),hl(O,z),O.return=j,O)}function M(j,O,z,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Nu(z,j.mode,Y),O.return=j,O):(O=u(O,z.children||[]),O.return=j,O)}function H(j,O,z,Y,W){return O===null||O.tag!==7?(O=ua(z,j.mode,Y,W),O.return=j,O):(O=u(O,z),O.return=j,O)}function Q(j,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Uu(""+O,j.mode,z),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case R:return z=yr(O.type,O.key,O.props,null,j.mode,z),hl(z,O),z.return=j,z;case _:return O=Nu(O,j.mode,z),O.return=j,O;case ut:var Y=O._init;return O=Y(O._payload),Q(j,O,z)}if(Zt(O)||Dt(O))return O=ua(O,j.mode,z,null),O.return=j,O;if(typeof O.then=="function")return Q(j,Ur(O),z);if(O.$$typeof===$)return Q(j,Sr(j,O),z);Nr(j,O)}return null}function U(j,O,z,Y){var W=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return W!==null?null:b(j,O,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case R:return z.key===W?S(j,O,z,Y):null;case _:return z.key===W?M(j,O,z,Y):null;case ut:return W=z._init,z=W(z._payload),U(j,O,z,Y)}if(Zt(z)||Dt(z))return W!==null?null:H(j,O,z,Y,null);if(typeof z.then=="function")return U(j,O,Ur(z),Y);if(z.$$typeof===$)return U(j,O,Sr(j,z),Y);Nr(j,z)}return null}function N(j,O,z,Y,W){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return j=j.get(z)||null,b(O,j,""+Y,W);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case R:return j=j.get(Y.key===null?z:Y.key)||null,S(O,j,Y,W);case _:return j=j.get(Y.key===null?z:Y.key)||null,M(O,j,Y,W);case ut:var pt=Y._init;return Y=pt(Y._payload),N(j,O,z,Y,W)}if(Zt(Y)||Dt(Y))return j=j.get(z)||null,H(O,j,Y,W,null);if(typeof Y.then=="function")return N(j,O,z,Ur(Y),W);if(Y.$$typeof===$)return N(j,O,z,Sr(O,Y),W);Nr(O,Y)}return null}function rt(j,O,z,Y){for(var W=null,pt=null,I=O,lt=O=0,It=null;I!==null&&lt<z.length;lt++){I.index>lt?(It=I,I=null):It=I.sibling;var St=U(j,I,z[lt],Y);if(St===null){I===null&&(I=It);break}t&&I&&St.alternate===null&&e(j,I),O=o(St,O,lt),pt===null?W=St:pt.sibling=St,pt=St,I=It}if(lt===z.length)return a(j,I),wt&&ca(j,lt),W;if(I===null){for(;lt<z.length;lt++)I=Q(j,z[lt],Y),I!==null&&(O=o(I,O,lt),pt===null?W=I:pt.sibling=I,pt=I);return wt&&ca(j,lt),W}for(I=i(I);lt<z.length;lt++)It=N(I,j,lt,z[lt],Y),It!==null&&(t&&It.alternate!==null&&I.delete(It.key===null?lt:It.key),O=o(It,O,lt),pt===null?W=It:pt.sibling=It,pt=It);return t&&I.forEach(function(Wn){return e(j,Wn)}),wt&&ca(j,lt),W}function at(j,O,z,Y){if(z==null)throw Error(s(151));for(var W=null,pt=null,I=O,lt=O=0,It=null,St=z.next();I!==null&&!St.done;lt++,St=z.next()){I.index>lt?(It=I,I=null):It=I.sibling;var Wn=U(j,I,St.value,Y);if(Wn===null){I===null&&(I=It);break}t&&I&&Wn.alternate===null&&e(j,I),O=o(Wn,O,lt),pt===null?W=Wn:pt.sibling=Wn,pt=Wn,I=It}if(St.done)return a(j,I),wt&&ca(j,lt),W;if(I===null){for(;!St.done;lt++,St=z.next())St=Q(j,St.value,Y),St!==null&&(O=o(St,O,lt),pt===null?W=St:pt.sibling=St,pt=St);return wt&&ca(j,lt),W}for(I=i(I);!St.done;lt++,St=z.next())St=N(I,j,lt,St.value,Y),St!==null&&(t&&St.alternate!==null&&I.delete(St.key===null?lt:St.key),O=o(St,O,lt),pt===null?W=St:pt.sibling=St,pt=St);return t&&I.forEach(function(F1){return e(j,F1)}),wt&&ca(j,lt),W}function jt(j,O,z,Y){if(typeof z=="object"&&z!==null&&z.type===T&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case R:t:{for(var W=z.key;O!==null;){if(O.key===W){if(W=z.type,W===T){if(O.tag===7){a(j,O.sibling),Y=u(O,z.props.children),Y.return=j,j=Y;break t}}else if(O.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ut&&Nh(W)===O.type){a(j,O.sibling),Y=u(O,z.props),hl(Y,z),Y.return=j,j=Y;break t}a(j,O);break}else e(j,O);O=O.sibling}z.type===T?(Y=ua(z.props.children,j.mode,Y,z.key),Y.return=j,j=Y):(Y=yr(z.type,z.key,z.props,null,j.mode,Y),hl(Y,z),Y.return=j,j=Y)}return h(j);case _:t:{for(W=z.key;O!==null;){if(O.key===W)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){a(j,O.sibling),Y=u(O,z.children||[]),Y.return=j,j=Y;break t}else{a(j,O);break}else e(j,O);O=O.sibling}Y=Nu(z,j.mode,Y),Y.return=j,j=Y}return h(j);case ut:return W=z._init,z=W(z._payload),jt(j,O,z,Y)}if(Zt(z))return rt(j,O,z,Y);if(Dt(z)){if(W=Dt(z),typeof W!="function")throw Error(s(150));return z=W.call(z),at(j,O,z,Y)}if(typeof z.then=="function")return jt(j,O,Ur(z),Y);if(z.$$typeof===$)return jt(j,O,Sr(j,z),Y);Nr(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(a(j,O.sibling),Y=u(O,z),Y.return=j,j=Y):(a(j,O),Y=Uu(z,j.mode,Y),Y.return=j,j=Y),h(j)):a(j,O)}return function(j,O,z,Y){try{dl=0;var W=jt(j,O,z,Y);return ei=null,W}catch(I){if(I===al||I===Er)throw I;var pt=we(29,I,null,j.mode);return pt.lanes=Y,pt.return=j,pt}finally{}}}var ni=Bh(!0),Lh=Bh(!1),qe=G(null),tn=null;function Ln(t){var e=t.alternate;J(Kt,Kt.current&1),J(qe,t),tn===null&&(e===null||Pa.current!==null||e.memoizedState!==null)&&(tn=t)}function qh(t){if(t.tag===22){if(J(Kt,Kt.current),J(qe,t),tn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(tn=t)}}else qn()}function qn(){J(Kt,Kt.current),J(qe,qe.current)}function vn(t){V(qe),tn===t&&(tn=null),V(Kt)}var Kt=G(0);function Br(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ic(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function mo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:g({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var go={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=Oe(),u=Un(i);u.payload=e,a!=null&&(u.callback=a),e=Nn(t,u,i),e!==null&&(Ae(e,t,i),ll(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=Oe(),u=Un(i);u.tag=1,u.payload=e,a!=null&&(u.callback=a),e=Nn(t,u,i),e!==null&&(Ae(e,t,i),ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Oe(),i=Un(a);i.tag=2,e!=null&&(i.callback=e),e=Nn(t,i,a),e!==null&&(Ae(e,t,a),ll(e,t,a))}};function Hh(t,e,a,i,u,o,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,h):e.prototype&&e.prototype.isPureReactComponent?!Ji(a,i)||!Ji(u,o):!0}function kh(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&go.enqueueReplaceState(e,e.state,null)}function ya(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Lr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Yh(t){Lr(t)}function Qh(t){console.error(t)}function Gh(t){Lr(t)}function qr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function $h(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yo(t,e,a){return a=Un(a),a.tag=3,a.payload={element:null},a.callback=function(){qr(t,e)},a}function Xh(t){return t=Un(t),t.tag=3,t}function Kh(t,e,a,i){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var o=i.value;t.payload=function(){return u(o)},t.callback=function(){$h(e,a,i)}}var h=a.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){$h(e,a,i),typeof u!="function"&&($n===null?$n=new Set([this]):$n.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Fv(t,e,a,i,u){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&tl(e,a,u,!0),a=qe.current,a!==null){switch(a.tag){case 13:return tn===null?Yo():a.alternate===null&&Ht===0&&(Ht=3),a.flags&=-257,a.flags|=65536,a.lanes=u,i===Xu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Go(t,i,u)),!1;case 22:return a.flags|=65536,i===Xu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Go(t,i,u)),!1}throw Error(s(435,a.tag))}return Go(t,i,u),Yo(),!1}if(wt)return e=qe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,i!==qu&&(t=Error(s(422),{cause:i}),Ii(Ue(t,a)))):(i!==qu&&(e=Error(s(423),{cause:i}),Ii(Ue(e,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,i=Ue(i,a),u=yo(t.stateNode,i,u),Zu(t,u),Ht!==4&&(Ht=2)),!1;var o=Error(s(520),{cause:i});if(o=Ue(o,a),xl===null?xl=[o]:xl.push(o),Ht!==4&&(Ht=2),e===null)return!0;i=Ue(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yo(a.stateNode,i,t),Zu(a,t),!1;case 1:if(e=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&($n===null||!$n.has(o))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xh(u),Kh(u,t,a,i),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var Vh=Error(s(461)),Pt=!1;function ee(t,e,a,i){e.child=t===null?Lh(e,null,a,i):ni(e,t.child,a,i)}function Zh(t,e,a,i,u){a=a.render;var o=e.ref;if("ref"in i){var h={};for(var b in i)b!=="ref"&&(h[b]=i[b])}else h=i;return pa(e),i=Iu(t,e,a,h,o,u),b=to(),t!==null&&!Pt?(eo(t,e,u),bn(t,e,u)):(wt&&b&&Bu(e),e.flags|=1,ee(t,e,i,u),e.child)}function Jh(t,e,a,i,u){if(t===null){var o=a.type;return typeof o=="function"&&!_u(o)&&o.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=o,Fh(t,e,o,i,u)):(t=yr(a.type,null,i,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!To(t,u)){var h=o.memoizedProps;if(a=a.compare,a=a!==null?a:Ji,a(h,i)&&t.ref===e.ref)return bn(t,e,u)}return e.flags|=1,t=dn(o,i),t.ref=e.ref,t.return=e,e.child=t}function Fh(t,e,a,i,u){if(t!==null){var o=t.memoizedProps;if(Ji(o,i)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=i=o,To(t,u))(t.flags&131072)!==0&&(Pt=!0);else return e.lanes=t.lanes,bn(t,e,u)}return vo(t,e,a,i,u)}function Ph(t,e,a){var i=e.pendingProps,u=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if((e.flags&128)!==0){if(i=o!==null?o.baseLanes|a:a,t!==null){for(u=e.child=t.child,o=0;u!==null;)o=o|u.lanes|u.childLanes,u=u.sibling;e.childLanes=o&~i}else e.childLanes=0,e.child=null;return Wh(t,e,i,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&wr(e,o!==null?o.cachePool:null),o!==null?Fd(e,o):Fu(),qh(e);else return e.lanes=e.childLanes=536870912,Wh(t,e,o!==null?o.baseLanes|a:a,a)}else o!==null?(wr(e,o.cachePool),Fd(e,o),qn(),e.memoizedState=null):(t!==null&&wr(e,null),Fu(),qn());return ee(t,e,u,a),e.child}function Wh(t,e,a,i){var u=$u();return u=u===null?null:{parent:Xt._currentValue,pool:u},e.memoizedState={baseLanes:a,cachePool:u},t!==null&&wr(e,null),Fu(),qh(e),t!==null&&tl(t,e,i,!0),null}function Hr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function vo(t,e,a,i,u){return pa(e),a=Iu(t,e,a,i,void 0,u),i=to(),t!==null&&!Pt?(eo(t,e,u),bn(t,e,u)):(wt&&i&&Bu(e),e.flags|=1,ee(t,e,a,u),e.child)}function Ih(t,e,a,i,u,o){return pa(e),e.updateQueue=null,a=Wd(e,i,a,u),Pd(t),i=to(),t!==null&&!Pt?(eo(t,e,o),bn(t,e,o)):(wt&&i&&Bu(e),e.flags|=1,ee(t,e,a,o),e.child)}function tp(t,e,a,i,u){if(pa(e),e.stateNode===null){var o=Ka,h=a.contextType;typeof h=="object"&&h!==null&&(o=re(h)),o=new a(i,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=go,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=i,o.state=e.memoizedState,o.refs={},Ku(e),h=a.contextType,o.context=typeof h=="object"&&h!==null?re(h):Ka,o.state=e.memoizedState,h=a.getDerivedStateFromProps,typeof h=="function"&&(mo(e,a,h,i),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(h=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),h!==o.state&&go.enqueueReplaceState(o,o.state,null),sl(e,i,o,u),rl(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){o=e.stateNode;var b=e.memoizedProps,S=ya(a,b);o.props=S;var M=o.context,H=a.contextType;h=Ka,typeof H=="object"&&H!==null&&(h=re(H));var Q=a.getDerivedStateFromProps;H=typeof Q=="function"||typeof o.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,H||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(b||M!==h)&&kh(e,o,i,h),_n=!1;var U=e.memoizedState;o.state=U,sl(e,i,o,u),rl(),M=e.memoizedState,b||U!==M||_n?(typeof Q=="function"&&(mo(e,a,Q,i),M=e.memoizedState),(S=_n||Hh(e,a,S,i,U,M,h))?(H||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=M),o.props=i,o.state=M,o.context=h,i=S):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Vu(t,e),h=e.memoizedProps,H=ya(a,h),o.props=H,Q=e.pendingProps,U=o.context,M=a.contextType,S=Ka,typeof M=="object"&&M!==null&&(S=re(M)),b=a.getDerivedStateFromProps,(M=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h!==Q||U!==S)&&kh(e,o,i,S),_n=!1,U=e.memoizedState,o.state=U,sl(e,i,o,u),rl();var N=e.memoizedState;h!==Q||U!==N||_n||t!==null&&t.dependencies!==null&&xr(t.dependencies)?(typeof b=="function"&&(mo(e,a,b,i),N=e.memoizedState),(H=_n||Hh(e,a,H,i,U,N,S)||t!==null&&t.dependencies!==null&&xr(t.dependencies))?(M||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,N,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,N,S)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=N),o.props=i,o.state=N,o.context=S,i=H):(typeof o.componentDidUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&U===t.memoizedState||(e.flags|=1024),i=!1)}return o=i,Hr(t,e),i=(e.flags&128)!==0,o||i?(o=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&i?(e.child=ni(e,t.child,null,u),e.child=ni(e,null,a,u)):ee(t,e,a,u),e.memoizedState=o.state,t=e.child):t=bn(t,e,u),t}function ep(t,e,a,i){return Wi(),e.flags|=256,ee(t,e,a,i),e.child}var bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xo(t){return{baseLanes:t,cachePool:Qd()}}function So(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=He),t}function np(t,e,a){var i=e.pendingProps,u=!1,o=(e.flags&128)!==0,h;if((h=o)||(h=t!==null&&t.memoizedState===null?!1:(Kt.current&2)!==0),h&&(u=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(wt){if(u?Ln(e):qn(),wt){var b=qt,S;if(S=b){t:{for(S=b,b=Ie;S.nodeType!==8;){if(!b){b=null;break t}if(S=Ke(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:oa!==null?{id:hn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},S=we(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,ce=e,qt=null,S=!0):S=!1}S||da(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return ic(b)?e.lanes=32:e.lanes=536870912,null;vn(e)}return b=i.children,i=i.fallback,u?(qn(),u=e.mode,b=kr({mode:"hidden",children:b},u),i=ua(i,u,a,null),b.return=e,i.return=e,b.sibling=i,e.child=b,u=e.child,u.memoizedState=xo(a),u.childLanes=So(t,h,a),e.memoizedState=bo,i):(Ln(e),wo(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(o)e.flags&256?(Ln(e),e.flags&=-257,e=Eo(t,e,a)):e.memoizedState!==null?(qn(),e.child=t.child,e.flags|=128,e=null):(qn(),u=i.fallback,b=e.mode,i=kr({mode:"visible",children:i.children},b),u=ua(u,b,a,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,ni(e,t.child,null,a),i=e.child,i.memoizedState=xo(a),i.childLanes=So(t,h,a),e.memoizedState=bo,e=u);else if(Ln(e),ic(b)){if(h=b.nextSibling&&b.nextSibling.dataset,h)var M=h.dgst;h=M,i=Error(s(419)),i.stack="",i.digest=h,Ii({value:i,source:null,stack:null}),e=Eo(t,e,a)}else if(Pt||tl(t,e,a,!1),h=(a&t.childLanes)!==0,Pt||h){if(h=Mt,h!==null&&(i=a&-a,i=(i&42)!==0?1:iu(i),i=(i&(h.suspendedLanes|a))!==0?0:i,i!==0&&i!==S.retryLane))throw S.retryLane=i,Xa(t,i),Ae(h,t,i),Vh;b.data==="$?"||Yo(),e=Eo(t,e,a)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,qt=Ke(b.nextSibling),ce=e,wt=!0,fa=null,Ie=!1,t!==null&&(Be[Le++]=hn,Be[Le++]=pn,Be[Le++]=oa,hn=t.id,pn=t.overflow,oa=e),e=wo(e,i.children),e.flags|=4096);return e}return u?(qn(),u=i.fallback,b=e.mode,S=t.child,M=S.sibling,i=dn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,M!==null?u=dn(M,u):(u=ua(u,b,a,null),u.flags|=2),u.return=e,i.return=e,i.sibling=u,e.child=i,i=u,u=e.child,b=t.child.memoizedState,b===null?b=xo(a):(S=b.cachePool,S!==null?(M=Xt._currentValue,S=S.parent!==M?{parent:M,pool:M}:S):S=Qd(),b={baseLanes:b.baseLanes|a,cachePool:S}),u.memoizedState=b,u.childLanes=So(t,h,a),e.memoizedState=bo,i):(Ln(e),a=t.child,t=a.sibling,a=dn(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=a,e.memoizedState=null,a)}function wo(t,e){return e=kr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function kr(t,e){return t=we(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Eo(t,e,a){return ni(e,t.child,null,a),t=wo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ap(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ku(t.return,e,a)}function Ro(t,e,a,i,u){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:u}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=u)}function ip(t,e,a){var i=e.pendingProps,u=i.revealOrder,o=i.tail;if(ee(t,e,i.children,a),i=Kt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,a,e);else if(t.tag===19)ap(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(J(Kt,i),u){case"forwards":for(a=e.child,u=null;a!==null;)t=a.alternate,t!==null&&Br(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=e.child,e.child=null):(u=a.sibling,a.sibling=null),Ro(e,!1,u,a,o);break;case"backwards":for(a=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&Br(t)===null){e.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ro(e,!0,a,null,o);break;case"together":Ro(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(tl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=dn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=dn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function To(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&xr(t)))}function Pv(t,e,a){switch(e.tag){case 3:Et(e,e.stateNode.containerInfo),Mn(e,Xt,t.memoizedState.cache),Wi();break;case 27:case 5:na(e);break;case 4:Et(e,e.stateNode.containerInfo);break;case 10:Mn(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ln(e),e.flags|=128,null):(a&e.child.childLanes)!==0?np(t,e,a):(Ln(e),t=bn(t,e,a),t!==null?t.sibling:null);Ln(e);break;case 19:var u=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(tl(t,e,a,!1),i=(a&e.childLanes)!==0),u){if(i)return ip(t,e,a);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(Kt,Kt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ph(t,e,a);case 24:Mn(e,Xt,t.memoizedState.cache)}return bn(t,e,a)}function lp(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Pt=!0;else{if(!To(t,a)&&(e.flags&128)===0)return Pt=!1,Pv(t,e,a);Pt=(t.flags&131072)!==0}else Pt=!1,wt&&(e.flags&1048576)!==0&&Nd(e,br,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var i=e.elementType,u=i._init;if(i=u(i._payload),e.type=i,typeof i=="function")_u(i)?(t=ya(i,t),e.tag=1,e=tp(null,e,i,t,a)):(e.tag=0,e=vo(null,e,i,t,a));else{if(i!=null){if(u=i.$$typeof,u===F){e.tag=11,e=Zh(null,e,i,t,a);break t}else if(u===K){e.tag=14,e=Jh(null,e,i,t,a);break t}}throw e=un(i)||i,Error(s(306,e,""))}}return e;case 0:return vo(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,u=ya(i,e.pendingProps),tp(t,e,i,u,a);case 3:t:{if(Et(e,e.stateNode.containerInfo),t===null)throw Error(s(387));i=e.pendingProps;var o=e.memoizedState;u=o.element,Vu(t,e),sl(e,i,null,a);var h=e.memoizedState;if(i=h.cache,Mn(e,Xt,i),i!==o.cache&&Yu(e,[Xt],a,!0),rl(),i=h.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=ep(t,e,i,a);break t}else if(i!==u){u=Ue(Error(s(424)),e),Ii(u),e=ep(t,e,i,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qt=Ke(t.firstChild),ce=e,wt=!0,fa=null,Ie=!0,a=Lh(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Wi(),i===u){e=bn(t,e,a);break t}ee(t,e,i,a)}e=e.child}return e;case 26:return Hr(t,e),t===null?(a=o0(e.type,null,e.pendingProps,null))?e.memoizedState=a:wt||(a=e.type,t=e.pendingProps,i=ts(it.current).createElement(a),i[le]=e,i[de]=t,ae(i,a,t),Ft(i),e.stateNode=i):e.memoizedState=o0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return na(e),t===null&&wt&&(i=e.stateNode=r0(e.type,e.pendingProps,it.current),ce=e,Ie=!0,u=qt,Vn(e.type)?(lc=u,qt=Ke(i.firstChild)):qt=u),ee(t,e,e.pendingProps.children,a),Hr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&wt&&((u=i=qt)&&(i=T1(i,e.type,e.pendingProps,Ie),i!==null?(e.stateNode=i,ce=e,qt=Ke(i.firstChild),Ie=!1,u=!0):u=!1),u||da(e)),na(e),u=e.type,o=e.pendingProps,h=t!==null?t.memoizedProps:null,i=o.children,ec(u,o)?i=null:h!==null&&ec(u,h)&&(e.flags|=32),e.memoizedState!==null&&(u=Iu(t,e,Gv,null,null,a),jl._currentValue=u),Hr(t,e),ee(t,e,i,a),e.child;case 6:return t===null&&wt&&((t=a=qt)&&(a=O1(a,e.pendingProps,Ie),a!==null?(e.stateNode=a,ce=e,qt=null,t=!0):t=!1),t||da(e)),null;case 13:return np(t,e,a);case 4:return Et(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ni(e,null,i,a):ee(t,e,i,a),e.child;case 11:return Zh(t,e,e.type,e.pendingProps,a);case 7:return ee(t,e,e.pendingProps,a),e.child;case 8:return ee(t,e,e.pendingProps.children,a),e.child;case 12:return ee(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,Mn(e,e.type,i.value),ee(t,e,i.children,a),e.child;case 9:return u=e.type._context,i=e.pendingProps.children,pa(e),u=re(u),i=i(u),e.flags|=1,ee(t,e,i,a),e.child;case 14:return Jh(t,e,e.type,e.pendingProps,a);case 15:return Fh(t,e,e.type,e.pendingProps,a);case 19:return ip(t,e,a);case 31:return i=e.pendingProps,a=e.mode,i={mode:i.mode,children:i.children},t===null?(a=kr(i,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=dn(t.child,i),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return Ph(t,e,a);case 24:return pa(e),i=re(Xt),t===null?(u=$u(),u===null&&(u=Mt,o=Qu(),u.pooledCache=o,o.refCount++,o!==null&&(u.pooledCacheLanes|=a),u=o),e.memoizedState={parent:i,cache:u},Ku(e),Mn(e,Xt,u)):((t.lanes&a)!==0&&(Vu(t,e),sl(e,null,null,a),rl()),u=t.memoizedState,o=e.memoizedState,u.parent!==i?(u={parent:i,cache:i},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Mn(e,Xt,i)):(i=o.cache,Mn(e,Xt,i),i!==u.cache&&Yu(e,[Xt],a,!0))),ee(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function xn(t){t.flags|=4}function rp(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!p0(e)){if(e=qe.current,e!==null&&((xt&4194048)===xt?tn!==null:(xt&62914560)!==xt&&(xt&536870912)===0||e!==tn))throw il=Xu,Gd;t.flags|=8192}}function Yr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?qf():536870912,t.lanes|=e,ri|=e)}function pl(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags&65011712,i|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function Wv(t,e,a){var i=e.pendingProps;switch(Lu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return Lt(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),gn(Xt),ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Pi(e)?xn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qd())),Lt(e),null;case 26:return a=e.memoizedState,t===null?(xn(e),a!==null?(Lt(e),rp(e,a)):(Lt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(xn(e),Lt(e),rp(e,a)):(Lt(e),e.flags&=-16777217):(t.memoizedProps!==i&&xn(e),Lt(e),e.flags&=-16777217),null;case 27:on(e),a=it.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(!i){if(e.stateNode===null)throw Error(s(166));return Lt(e),null}t=et.current,Pi(e)?Bd(e):(t=r0(u,i,a),e.stateNode=t,xn(e))}return Lt(e),null;case 5:if(on(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(!i){if(e.stateNode===null)throw Error(s(166));return Lt(e),null}if(t=et.current,Pi(e))Bd(e);else{switch(u=ts(it.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?u.createElement(a,{is:i.is}):u.createElement(a)}}t[le]=e,t[de]=i;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(ae(t,a,i),a){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&xn(e)}}return Lt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(s(166));if(t=it.current,Pi(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,u=ce,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}t[le]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Ip(t.nodeValue,a)),t||da(e)}else t=ts(t).createTextNode(i),t[le]=e,e.stateNode=t}return Lt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Pi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[le]=e}else Wi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Lt(e),u=!1}else u=qd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(vn(e),e):(vn(e),null)}if(vn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=i!==null,t=t!==null&&t.memoizedState!==null,a){i=e.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool);var o=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==u&&(i.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Yr(e,e.updateQueue),Lt(e),null;case 4:return ie(),t===null&&Fo(e.stateNode.containerInfo),Lt(e),null;case 10:return gn(e.type),Lt(e),null;case 19:if(V(Kt),u=e.memoizedState,u===null)return Lt(e),null;if(i=(e.flags&128)!==0,o=u.rendering,o===null)if(i)pl(u,!1);else{if(Ht!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Br(t),o!==null){for(e.flags|=128,pl(u,!1),t=o.updateQueue,e.updateQueue=t,Yr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Ud(a,t),a=a.sibling;return J(Kt,Kt.current&1|2),e.child}t=t.sibling}u.tail!==null&&We()>$r&&(e.flags|=128,i=!0,pl(u,!1),e.lanes=4194304)}else{if(!i)if(t=Br(o),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Yr(e,t),pl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!o.alternate&&!wt)return Lt(e),null}else 2*We()-u.renderingStartTime>$r&&a!==536870912&&(e.flags|=128,i=!0,pl(u,!1),e.lanes=4194304);u.isBackwards?(o.sibling=e.child,e.child=o):(t=u.last,t!==null?t.sibling=o:e.child=o,u.last=o)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=We(),e.sibling=null,t=Kt.current,J(Kt,i?t&1|2:t&1),e):(Lt(e),null);case 22:case 23:return vn(e),Pu(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),a=e.updateQueue,a!==null&&Yr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&V(ma),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),gn(Xt),Lt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Iv(t,e){switch(Lu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gn(Xt),ie(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return on(e),null;case 13:if(vn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(Kt),null;case 4:return ie(),null;case 10:return gn(e.type),null;case 22:case 23:return vn(e),Pu(),t!==null&&V(ma),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return gn(Xt),null;case 25:return null;default:return null}}function sp(t,e){switch(Lu(e),e.tag){case 3:gn(Xt),ie();break;case 26:case 27:case 5:on(e);break;case 4:ie();break;case 13:vn(e);break;case 19:V(Kt);break;case 10:gn(e.type);break;case 22:case 23:vn(e),Pu(),t!==null&&V(ma);break;case 24:gn(Xt)}}function ml(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&t)===t){i=void 0;var o=a.create,h=a.inst;i=o(),h.destroy=i}a=a.next}while(a!==u)}}catch(b){zt(e,e.return,b)}}function Hn(t,e,a){try{var i=e.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var o=u.next;i=o;do{if((i.tag&t)===t){var h=i.inst,b=h.destroy;if(b!==void 0){h.destroy=void 0,u=e;var S=a,M=b;try{M()}catch(H){zt(u,S,H)}}}i=i.next}while(i!==o)}}catch(H){zt(e,e.return,H)}}function up(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Jd(e,a)}catch(i){zt(t,t.return,i)}}}function op(t,e,a){a.props=ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){zt(t,e,i)}}function gl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(u){zt(t,e,u)}}function en(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(u){zt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,e,u)}else a.current=null}function cp(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Oo(t,e,a){try{var i=t.stateNode;x1(i,t.type,a,e),i[de]=e}catch(u){zt(t,t.return,u)}}function fp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Vn(t.type)||t.tag===4}function Ao(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||fp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Vn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Co(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Ir));else if(i!==4&&(i===27&&Vn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Co(t,e,a),t=t.sibling;t!==null;)Co(t,e,a),t=t.sibling}function Qr(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&Vn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Qr(t,e,a),t=t.sibling;t!==null;)Qr(t,e,a),t=t.sibling}function dp(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);ae(e,i,a),e[le]=t,e[de]=a}catch(o){zt(t,t.return,o)}}var Sn=!1,Yt=!1,jo=!1,hp=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function t1(t,e){if(t=t.containerInfo,Io=rs,t=Rd(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var u=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break t}var h=0,b=-1,S=-1,M=0,H=0,Q=t,U=null;e:for(;;){for(var N;Q!==a||u!==0&&Q.nodeType!==3||(b=h+u),Q!==o||i!==0&&Q.nodeType!==3||(S=h+i),Q.nodeType===3&&(h+=Q.nodeValue.length),(N=Q.firstChild)!==null;)U=Q,Q=N;for(;;){if(Q===t)break e;if(U===a&&++M===u&&(b=h),U===o&&++H===i&&(S=h),(N=Q.nextSibling)!==null)break;Q=U,U=Q.parentNode}Q=N}a=b===-1||S===-1?null:{start:b,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(tc={focusedElem:t,selectionRange:a},rs=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,a=e,u=o.memoizedProps,o=o.memoizedState,i=a.stateNode;try{var rt=ya(a.type,u,a.elementType===a.type);t=i.getSnapshotBeforeUpdate(rt,o),i.__reactInternalSnapshotBeforeUpdate=t}catch(at){zt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ac(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ac(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function pp(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:kn(t,a),i&4&&ml(5,a);break;case 1:if(kn(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(h){zt(a,a.return,h)}else{var u=ya(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){zt(a,a.return,h)}}i&64&&up(a),i&512&&gl(a,a.return);break;case 3:if(kn(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Jd(t,e)}catch(h){zt(a,a.return,h)}}break;case 27:e===null&&i&4&&dp(a);case 26:case 5:kn(t,a),e===null&&i&4&&cp(a),i&512&&gl(a,a.return);break;case 12:kn(t,a);break;case 13:kn(t,a),i&4&&yp(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=o1.bind(null,a),A1(t,a))));break;case 22:if(i=a.memoizedState!==null||Sn,!i){e=e!==null&&e.memoizedState!==null||Yt,u=Sn;var o=Yt;Sn=i,(Yt=e)&&!o?Yn(t,a,(a.subtreeFlags&8772)!==0):kn(t,a),Sn=u,Yt=o}break;case 30:break;default:kn(t,a)}}function mp(t){var e=t.alternate;e!==null&&(t.alternate=null,mp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&su(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,me=!1;function wn(t,e,a){for(a=a.child;a!==null;)gp(t,e,a),a=a.sibling}function gp(t,e,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Li,a)}catch{}switch(a.tag){case 26:Yt||en(a,e),wn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yt||en(a,e);var i=Nt,u=me;Vn(a.type)&&(Nt=a.stateNode,me=!1),wn(t,e,a),Tl(a.stateNode),Nt=i,me=u;break;case 5:Yt||en(a,e);case 6:if(i=Nt,u=me,Nt=null,wn(t,e,a),Nt=i,me=u,Nt!==null)if(me)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(a.stateNode)}catch(o){zt(a,e,o)}else try{Nt.removeChild(a.stateNode)}catch(o){zt(a,e,o)}break;case 18:Nt!==null&&(me?(t=Nt,i0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_l(t)):i0(Nt,a.stateNode));break;case 4:i=Nt,u=me,Nt=a.stateNode.containerInfo,me=!0,wn(t,e,a),Nt=i,me=u;break;case 0:case 11:case 14:case 15:Yt||Hn(2,a,e),Yt||Hn(4,a,e),wn(t,e,a);break;case 1:Yt||(en(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&op(a,e,i)),wn(t,e,a);break;case 21:wn(t,e,a);break;case 22:Yt=(i=Yt)||a.memoizedState!==null,wn(t,e,a),Yt=i;break;default:wn(t,e,a)}}function yp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_l(t)}catch(a){zt(e,e.return,a)}}function e1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new hp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new hp),e;default:throw Error(s(435,t.tag))}}function Do(t,e){var a=e1(t);e.forEach(function(i){var u=c1.bind(null,t,i);a.has(i)||(a.add(i),i.then(u,u))})}function Ee(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var u=a[i],o=t,h=e,b=h;t:for(;b!==null;){switch(b.tag){case 27:if(Vn(b.type)){Nt=b.stateNode,me=!1;break t}break;case 5:Nt=b.stateNode,me=!1;break t;case 3:case 4:Nt=b.stateNode.containerInfo,me=!0;break t}b=b.return}if(Nt===null)throw Error(s(160));gp(o,h,u),Nt=null,me=!1,o=u.alternate,o!==null&&(o.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)vp(e,t),e=e.sibling}var Xe=null;function vp(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ee(e,t),Re(t),i&4&&(Hn(3,t,t.return),ml(3,t),Hn(5,t,t.return));break;case 1:Ee(e,t),Re(t),i&512&&(Yt||a===null||en(a,a.return)),i&64&&Sn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var u=Xe;if(Ee(e,t),Re(t),i&512&&(Yt||a===null||en(a,a.return)),i&4){var o=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(i){case"title":o=u.getElementsByTagName("title")[0],(!o||o[ki]||o[le]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(i),u.head.insertBefore(o,u.querySelector("head > title"))),ae(o,i,a),o[le]=t,Ft(o),i=o;break t;case"link":var h=d0("link","href",u).get(i+(a.href||""));if(h){for(var b=0;b<h.length;b++)if(o=h[b],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(b,1);break e}}o=u.createElement(i),ae(o,i,a),u.head.appendChild(o);break;case"meta":if(h=d0("meta","content",u).get(i+(a.content||""))){for(b=0;b<h.length;b++)if(o=h[b],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(b,1);break e}}o=u.createElement(i),ae(o,i,a),u.head.appendChild(o);break;default:throw Error(s(468,i))}o[le]=t,Ft(o),i=o}t.stateNode=i}else h0(u,t.type,t.stateNode);else t.stateNode=f0(u,i,t.memoizedProps);else o!==i?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,i===null?h0(u,t.type,t.stateNode):f0(u,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Oo(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ee(e,t),Re(t),i&512&&(Yt||a===null||en(a,a.return)),a!==null&&i&4&&Oo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ee(e,t),Re(t),i&512&&(Yt||a===null||en(a,a.return)),t.flags&32){u=t.stateNode;try{qa(u,"")}catch(N){zt(t,t.return,N)}}i&4&&t.stateNode!=null&&(u=t.memoizedProps,Oo(t,u,a!==null?a.memoizedProps:u)),i&1024&&(jo=!0);break;case 6:if(Ee(e,t),Re(t),i&4){if(t.stateNode===null)throw Error(s(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(N){zt(t,t.return,N)}}break;case 3:if(as=null,u=Xe,Xe=es(e.containerInfo),Ee(e,t),Xe=u,Re(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(e.containerInfo)}catch(N){zt(t,t.return,N)}jo&&(jo=!1,bp(t));break;case 4:i=Xe,Xe=es(t.stateNode.containerInfo),Ee(e,t),Re(t),Xe=i;break;case 12:Ee(e,t),Re(t);break;case 13:Ee(e,t),Re(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bo=We()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Do(t,i)));break;case 22:u=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,M=Sn,H=Yt;if(Sn=M||u,Yt=H||S,Ee(e,t),Yt=H,Sn=M,Re(t),i&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(a===null||S||Sn||Yt||va(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(o=S.stateNode,u)h=o.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=S.stateNode;var Q=S.memoizedProps.style,U=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;b.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(N){zt(S,S.return,N)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=u?"":S.memoizedProps}catch(N){zt(S,S.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Do(t,a))));break;case 19:Ee(e,t),Re(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Do(t,i)));break;case 30:break;case 21:break;default:Ee(e,t),Re(t)}}function Re(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(fp(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,o=Ao(t);Qr(t,o,u);break;case 5:var h=a.stateNode;a.flags&32&&(qa(h,""),a.flags&=-33);var b=Ao(t);Qr(t,b,h);break;case 3:case 4:var S=a.stateNode.containerInfo,M=Ao(t);Co(t,M,S);break;default:throw Error(s(161))}}catch(H){zt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;bp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function kn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)pp(t,e.alternate,e),e=e.sibling}function va(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Hn(4,e,e.return),va(e);break;case 1:en(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&op(e,e.return,a),va(e);break;case 27:Tl(e.stateNode);case 26:case 5:en(e,e.return),va(e);break;case 22:e.memoizedState===null&&va(e);break;case 30:va(e);break;default:va(e)}t=t.sibling}}function Yn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,u=t,o=e,h=o.flags;switch(o.tag){case 0:case 11:case 15:Yn(u,o,a),ml(4,o);break;case 1:if(Yn(u,o,a),i=o,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(M){zt(i,i.return,M)}if(i=o,u=i.updateQueue,u!==null){var b=i.stateNode;try{var S=u.shared.hiddenCallbacks;if(S!==null)for(u.shared.hiddenCallbacks=null,u=0;u<S.length;u++)Zd(S[u],b)}catch(M){zt(i,i.return,M)}}a&&h&64&&up(o),gl(o,o.return);break;case 27:dp(o);case 26:case 5:Yn(u,o,a),a&&i===null&&h&4&&cp(o),gl(o,o.return);break;case 12:Yn(u,o,a);break;case 13:Yn(u,o,a),a&&h&4&&yp(u,o);break;case 22:o.memoizedState===null&&Yn(u,o,a),gl(o,o.return);break;case 30:break;default:Yn(u,o,a)}e=e.sibling}}function zo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&el(a))}function Mo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&el(t))}function nn(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xp(t,e,a,i),e=e.sibling}function xp(t,e,a,i){var u=e.flags;switch(e.tag){case 0:case 11:case 15:nn(t,e,a,i),u&2048&&ml(9,e);break;case 1:nn(t,e,a,i);break;case 3:nn(t,e,a,i),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&el(t)));break;case 12:if(u&2048){nn(t,e,a,i),t=e.stateNode;try{var o=e.memoizedProps,h=o.id,b=o.onPostCommit;typeof b=="function"&&b(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){zt(e,e.return,S)}}else nn(t,e,a,i);break;case 13:nn(t,e,a,i);break;case 23:break;case 22:o=e.stateNode,h=e.alternate,e.memoizedState!==null?o._visibility&2?nn(t,e,a,i):yl(t,e):o._visibility&2?nn(t,e,a,i):(o._visibility|=2,ai(t,e,a,i,(e.subtreeFlags&10256)!==0)),u&2048&&zo(h,e);break;case 24:nn(t,e,a,i),u&2048&&Mo(e.alternate,e);break;default:nn(t,e,a,i)}}function ai(t,e,a,i,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,h=e,b=a,S=i,M=h.flags;switch(h.tag){case 0:case 11:case 15:ai(o,h,b,S,u),ml(8,h);break;case 23:break;case 22:var H=h.stateNode;h.memoizedState!==null?H._visibility&2?ai(o,h,b,S,u):yl(o,h):(H._visibility|=2,ai(o,h,b,S,u)),u&&M&2048&&zo(h.alternate,h);break;case 24:ai(o,h,b,S,u),u&&M&2048&&Mo(h.alternate,h);break;default:ai(o,h,b,S,u)}e=e.sibling}}function yl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,u=i.flags;switch(i.tag){case 22:yl(a,i),u&2048&&zo(i.alternate,i);break;case 24:yl(a,i),u&2048&&Mo(i.alternate,i);break;default:yl(a,i)}e=e.sibling}}var vl=8192;function ii(t){if(t.subtreeFlags&vl)for(t=t.child;t!==null;)Sp(t),t=t.sibling}function Sp(t){switch(t.tag){case 26:ii(t),t.flags&vl&&t.memoizedState!==null&&k1(Xe,t.memoizedState,t.memoizedProps);break;case 5:ii(t);break;case 3:case 4:var e=Xe;Xe=es(t.stateNode.containerInfo),ii(t),Xe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=vl,vl=16777216,ii(t),vl=e):ii(t));break;default:ii(t)}}function wp(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function bl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Wt=i,Rp(i,t)}wp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ep(t),t=t.sibling}function Ep(t){switch(t.tag){case 0:case 11:case 15:bl(t),t.flags&2048&&Hn(9,t,t.return);break;case 3:bl(t);break;case 12:bl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Gr(t)):bl(t);break;default:bl(t)}}function Gr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Wt=i,Rp(i,t)}wp(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Hn(8,e,e.return),Gr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Gr(e));break;default:Gr(e)}t=t.sibling}}function Rp(t,e){for(;Wt!==null;){var a=Wt;switch(a.tag){case 0:case 11:case 15:Hn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:el(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Wt=i;else t:for(a=t;Wt!==null;){i=Wt;var u=i.sibling,o=i.return;if(mp(i),i===a){Wt=null;break t}if(u!==null){u.return=o,Wt=u;break t}Wt=o}}}var n1={getCacheForType:function(t){var e=re(Xt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},a1=typeof WeakMap=="function"?WeakMap:Map,Tt=0,Mt=null,vt=null,xt=0,Ot=0,Te=null,Qn=!1,li=!1,_o=!1,En=0,Ht=0,Gn=0,ba=0,Uo=0,He=0,ri=0,xl=null,ge=null,No=!1,Bo=0,$r=1/0,Xr=null,$n=null,ne=0,Xn=null,si=null,ui=0,Lo=0,qo=null,Tp=null,Sl=0,Ho=null;function Oe(){if((Tt&2)!==0&&xt!==0)return xt&-xt;if(q.T!==null){var t=Ja;return t!==0?t:Ko()}return Yf()}function Op(){He===0&&(He=(xt&536870912)===0||wt?Lf():536870912);var t=qe.current;return t!==null&&(t.flags|=32),He}function Ae(t,e,a){(t===Mt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(oi(t,0),Kn(t,xt,He,!1)),Hi(t,a),((Tt&2)===0||t!==Mt)&&(t===Mt&&((Tt&2)===0&&(ba|=a),Ht===4&&Kn(t,xt,He,!1)),an(t))}function Ap(t,e,a){if((Tt&6)!==0)throw Error(s(327));var i=!a&&(e&124)===0&&(e&t.expiredLanes)===0||qi(t,e),u=i?r1(t,e):Qo(t,e,!0),o=i;do{if(u===0){li&&!i&&Kn(t,e,0,!1);break}else{if(a=t.current.alternate,o&&!i1(a)){u=Qo(t,e,!1),o=!1;continue}if(u===2){if(o=e,t.errorRecoveryDisabledLanes&o)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var b=t;u=xl;var S=b.current.memoizedState.isDehydrated;if(S&&(oi(b,h).flags|=256),h=Qo(b,h,!1),h!==2){if(_o&&!S){b.errorRecoveryDisabledLanes|=o,ba|=o,u=4;break t}o=ge,ge=u,o!==null&&(ge===null?ge=o:ge.push.apply(ge,o))}u=h}if(o=!1,u!==2)continue}}if(u===1){oi(t,0),Kn(t,e,0,!0);break}t:{switch(i=t,o=u,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Kn(i,e,He,!Qn);break t;case 2:ge=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(u=Bo+300-We(),10<u)){if(Kn(i,e,He,!Qn),nr(i,0,!0)!==0)break t;i.timeoutHandle=n0(Cp.bind(null,i,a,ge,Xr,No,e,He,ba,ri,Qn,o,2,-0,0),u);break t}Cp(i,a,ge,Xr,No,e,He,ba,ri,Qn,o,0,-0,0)}}break}while(!0);an(t)}function Cp(t,e,a,i,u,o,h,b,S,M,H,Q,U,N){if(t.timeoutHandle=-1,Q=e.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Cl={stylesheets:null,count:0,unsuspend:H1},Sp(e),Q=Y1(),Q!==null)){t.cancelPendingCommit=Q(Np.bind(null,t,e,o,a,i,u,h,b,S,H,1,U,N)),Kn(t,o,h,!M);return}Np(t,e,o,a,i,u,h,b,S)}function i1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var u=a[i],o=u.getSnapshot;u=u.value;try{if(!Se(o(),u))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e,a,i){e&=~Uo,e&=~ba,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var u=e;0<u;){var o=31-xe(u),h=1<<o;i[o]=-1,u&=~h}a!==0&&Hf(t,a,e)}function Kr(){return(Tt&6)===0?(wl(0),!1):!0}function ko(){if(vt!==null){if(Ot===0)var t=vt.return;else t=vt,mn=ha=null,no(t),ei=null,dl=0,t=vt;for(;t!==null;)sp(t.alternate,t),t=t.return;vt=null}}function oi(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,w1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ko(),Mt=t,vt=a=dn(t.current,null),xt=e,Ot=0,Te=null,Qn=!1,li=qi(t,e),_o=!1,ri=He=Uo=ba=Gn=Ht=0,ge=xl=null,No=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var u=31-xe(i),o=1<<u;e|=t[u],i&=~o}return En=e,pr(),a}function jp(t,e){ht=null,q.H=_r,e===al||e===Er?(e=Kd(),Ot=3):e===Gd?(e=Kd(),Ot=4):Ot=e===Vh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Te=e,vt===null&&(Ht=1,qr(t,Ue(e,t.current)))}function Dp(){var t=q.H;return q.H=_r,t===null?_r:t}function zp(){var t=q.A;return q.A=n1,t}function Yo(){Ht=4,Qn||(xt&4194048)!==xt&&qe.current!==null||(li=!0),(Gn&134217727)===0&&(ba&134217727)===0||Mt===null||Kn(Mt,xt,He,!1)}function Qo(t,e,a){var i=Tt;Tt|=2;var u=Dp(),o=zp();(Mt!==t||xt!==e)&&(Xr=null,oi(t,e)),e=!1;var h=Ht;t:do try{if(Ot!==0&&vt!==null){var b=vt,S=Te;switch(Ot){case 8:ko(),h=6;break t;case 3:case 2:case 9:case 6:qe.current===null&&(e=!0);var M=Ot;if(Ot=0,Te=null,ci(t,b,S,M),a&&li){h=0;break t}break;default:M=Ot,Ot=0,Te=null,ci(t,b,S,M)}}l1(),h=Ht;break}catch(H){jp(t,H)}while(!0);return e&&t.shellSuspendCounter++,mn=ha=null,Tt=i,q.H=u,q.A=o,vt===null&&(Mt=null,xt=0,pr()),h}function l1(){for(;vt!==null;)Mp(vt)}function r1(t,e){var a=Tt;Tt|=2;var i=Dp(),u=zp();Mt!==t||xt!==e?(Xr=null,$r=We()+500,oi(t,e)):li=qi(t,e);t:do try{if(Ot!==0&&vt!==null){e=vt;var o=Te;e:switch(Ot){case 1:Ot=0,Te=null,ci(t,e,o,1);break;case 2:case 9:if($d(o)){Ot=0,Te=null,_p(e);break}e=function(){Ot!==2&&Ot!==9||Mt!==t||(Ot=7),an(t)},o.then(e,e);break t;case 3:Ot=7;break t;case 4:Ot=5;break t;case 7:$d(o)?(Ot=0,Te=null,_p(e)):(Ot=0,Te=null,ci(t,e,o,7));break;case 5:var h=null;switch(vt.tag){case 26:h=vt.memoizedState;case 5:case 27:var b=vt;if(!h||p0(h)){Ot=0,Te=null;var S=b.sibling;if(S!==null)vt=S;else{var M=b.return;M!==null?(vt=M,Vr(M)):vt=null}break e}}Ot=0,Te=null,ci(t,e,o,5);break;case 6:Ot=0,Te=null,ci(t,e,o,6);break;case 8:ko(),Ht=6;break t;default:throw Error(s(462))}}s1();break}catch(H){jp(t,H)}while(!0);return mn=ha=null,q.H=i,q.A=u,Tt=a,vt!==null?0:(Mt=null,xt=0,pr(),Ht)}function s1(){for(;vt!==null&&!jy();)Mp(vt)}function Mp(t){var e=lp(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?Vr(t):vt=e}function _p(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Ih(a,e,e.pendingProps,e.type,void 0,xt);break;case 11:e=Ih(a,e,e.pendingProps,e.type.render,e.ref,xt);break;case 5:no(e);default:sp(a,e),e=vt=Ud(e,En),e=lp(a,e,En)}t.memoizedProps=t.pendingProps,e===null?Vr(t):vt=e}function ci(t,e,a,i){mn=ha=null,no(e),ei=null,dl=0;var u=e.return;try{if(Fv(t,u,e,a,xt)){Ht=1,qr(t,Ue(a,t.current)),vt=null;return}}catch(o){if(u!==null)throw vt=u,o;Ht=1,qr(t,Ue(a,t.current)),vt=null;return}e.flags&32768?(wt||i===1?t=!0:li||(xt&536870912)!==0?t=!1:(Qn=t=!0,(i===2||i===9||i===3||i===6)&&(i=qe.current,i!==null&&i.tag===13&&(i.flags|=16384))),Up(e,t)):Vr(e)}function Vr(t){var e=t;do{if((e.flags&32768)!==0){Up(e,Qn);return}t=e.return;var a=Wv(e.alternate,e,En);if(a!==null){vt=a;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);Ht===0&&(Ht=5)}function Up(t,e){do{var a=Iv(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);Ht=6,vt=null}function Np(t,e,a,i,u,o,h,b,S){t.cancelPendingCommit=null;do Zr();while(ne!==0);if((Tt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(o=e.lanes|e.childLanes,o|=zu,Hy(t,a,o,h,b,S),t===Mt&&(vt=Mt=null,xt=0),si=e,Xn=t,ui=a,Lo=o,qo=u,Tp=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,f1(Il,function(){return kp(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=q.T,q.T=null,u=Z.p,Z.p=2,h=Tt,Tt|=4;try{t1(t,e,a)}finally{Tt=h,Z.p=u,q.T=i}}ne=1,Bp(),Lp(),qp()}}function Bp(){if(ne===1){ne=0;var t=Xn,e=si,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var i=Z.p;Z.p=2;var u=Tt;Tt|=4;try{vp(e,t);var o=tc,h=Rd(t.containerInfo),b=o.focusedElem,S=o.selectionRange;if(h!==b&&b&&b.ownerDocument&&Ed(b.ownerDocument.documentElement,b)){if(S!==null&&Ou(b)){var M=S.start,H=S.end;if(H===void 0&&(H=M),"selectionStart"in b)b.selectionStart=M,b.selectionEnd=Math.min(H,b.value.length);else{var Q=b.ownerDocument||document,U=Q&&Q.defaultView||window;if(U.getSelection){var N=U.getSelection(),rt=b.textContent.length,at=Math.min(S.start,rt),jt=S.end===void 0?at:Math.min(S.end,rt);!N.extend&&at>jt&&(h=jt,jt=at,at=h);var j=wd(b,at),O=wd(b,jt);if(j&&O&&(N.rangeCount!==1||N.anchorNode!==j.node||N.anchorOffset!==j.offset||N.focusNode!==O.node||N.focusOffset!==O.offset)){var z=Q.createRange();z.setStart(j.node,j.offset),N.removeAllRanges(),at>jt?(N.addRange(z),N.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),N.addRange(z))}}}}for(Q=[],N=b;N=N.parentNode;)N.nodeType===1&&Q.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Q.length;b++){var Y=Q[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}rs=!!Io,tc=Io=null}finally{Tt=u,Z.p=i,q.T=a}}t.current=e,ne=2}}function Lp(){if(ne===2){ne=0;var t=Xn,e=si,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var i=Z.p;Z.p=2;var u=Tt;Tt|=4;try{pp(t,e.alternate,e)}finally{Tt=u,Z.p=i,q.T=a}}ne=3}}function qp(){if(ne===4||ne===3){ne=0,Dy();var t=Xn,e=si,a=ui,i=Tp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ne=5:(ne=0,si=Xn=null,Hp(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&($n=null),lu(a),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Li,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=q.T,u=Z.p,Z.p=2,q.T=null;try{for(var o=t.onRecoverableError,h=0;h<i.length;h++){var b=i[h];o(b.value,{componentStack:b.stack})}}finally{q.T=e,Z.p=u}}(ui&3)!==0&&Zr(),an(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Ho?Sl++:(Sl=0,Ho=t):Sl=0,wl(0)}}function Hp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,el(e)))}function Zr(t){return Bp(),Lp(),qp(),kp()}function kp(){if(ne!==5)return!1;var t=Xn,e=Lo;Lo=0;var a=lu(ui),i=q.T,u=Z.p;try{Z.p=32>a?32:a,q.T=null,a=qo,qo=null;var o=Xn,h=ui;if(ne=0,si=Xn=null,ui=0,(Tt&6)!==0)throw Error(s(331));var b=Tt;if(Tt|=4,Ep(o.current),xp(o,o.current,h,a),Tt=b,wl(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Li,o)}catch{}return!0}finally{Z.p=u,q.T=i,Hp(t,e)}}function Yp(t,e,a){e=Ue(a,e),e=yo(t.stateNode,e,2),t=Nn(t,e,2),t!==null&&(Hi(t,2),an(t))}function zt(t,e,a){if(t.tag===3)Yp(t,t,a);else for(;e!==null;){if(e.tag===3){Yp(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($n===null||!$n.has(i))){t=Ue(a,t),a=Xh(2),i=Nn(e,a,2),i!==null&&(Kh(a,i,e,t),Hi(i,2),an(i));break}}e=e.return}}function Go(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new a1;var u=new Set;i.set(e,u)}else u=i.get(e),u===void 0&&(u=new Set,i.set(e,u));u.has(a)||(_o=!0,u.add(a),t=u1.bind(null,t,e,a),e.then(t,t))}function u1(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Mt===t&&(xt&a)===a&&(Ht===4||Ht===3&&(xt&62914560)===xt&&300>We()-Bo?(Tt&2)===0&&oi(t,0):Uo|=a,ri===xt&&(ri=0)),an(t)}function Qp(t,e){e===0&&(e=qf()),t=Xa(t,e),t!==null&&(Hi(t,e),an(t))}function o1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Qp(t,a)}function c1(t,e){var a=0;switch(t.tag){case 13:var i=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(e),Qp(t,a)}function f1(t,e){return eu(t,e)}var Jr=null,fi=null,$o=!1,Fr=!1,Xo=!1,xa=0;function an(t){t!==fi&&t.next===null&&(fi===null?Jr=fi=t:fi=fi.next=t),Fr=!0,$o||($o=!0,h1())}function wl(t,e){if(!Xo&&Fr){Xo=!0;do for(var a=!1,i=Jr;i!==null;){if(t!==0){var u=i.pendingLanes;if(u===0)var o=0;else{var h=i.suspendedLanes,b=i.pingedLanes;o=(1<<31-xe(42|t)+1)-1,o&=u&~(h&~b),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Kp(i,o))}else o=xt,o=nr(i,i===Mt?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||qi(i,o)||(a=!0,Kp(i,o));i=i.next}while(a);Xo=!1}}function d1(){Gp()}function Gp(){Fr=$o=!1;var t=0;xa!==0&&(S1()&&(t=xa),xa=0);for(var e=We(),a=null,i=Jr;i!==null;){var u=i.next,o=$p(i,e);o===0?(i.next=null,a===null?Jr=u:a.next=u,u===null&&(fi=a)):(a=i,(t!==0||(o&3)!==0)&&(Fr=!0)),i=u}wl(t)}function $p(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,u=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var h=31-xe(o),b=1<<h,S=u[h];S===-1?((b&a)===0||(b&i)!==0)&&(u[h]=qy(b,e)):S<=e&&(t.expiredLanes|=b),o&=~b}if(e=Mt,a=xt,a=nr(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&nu(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||qi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&nu(i),lu(a)){case 2:case 8:a=Nf;break;case 32:a=Il;break;case 268435456:a=Bf;break;default:a=Il}return i=Xp.bind(null,t),a=eu(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&nu(i),t.callbackPriority=2,t.callbackNode=null,2}function Xp(t,e){if(ne!==0&&ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var i=xt;return i=nr(t,t===Mt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Ap(t,i,e),$p(t,We()),t.callbackNode!=null&&t.callbackNode===a?Xp.bind(null,t):null)}function Kp(t,e){if(Zr())return null;Ap(t,e,!0)}function h1(){E1(function(){(Tt&6)!==0?eu(Uf,d1):Gp()})}function Ko(){return xa===0&&(xa=Lf()),xa}function Vp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sr(""+t)}function Zp(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function p1(t,e,a,i,u){if(e==="submit"&&a&&a.stateNode===u){var o=Vp((u[de]||null).action),h=i.submitter;h&&(e=(e=h[de]||null)?Vp(e.formAction):h.getAttribute("formAction"),e!==null&&(o=e,h=null));var b=new fr("action","action",null,i,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(xa!==0){var S=h?Zp(u,h):new FormData(u);fo(a,{pending:!0,data:S,method:u.method,action:o},null,S)}}else typeof o=="function"&&(b.preventDefault(),S=h?Zp(u,h):new FormData(u),fo(a,{pending:!0,data:S,method:u.method,action:o},o,S))},currentTarget:u}]})}}for(var Vo=0;Vo<Du.length;Vo++){var Zo=Du[Vo],m1=Zo.toLowerCase(),g1=Zo[0].toUpperCase()+Zo.slice(1);$e(m1,"on"+g1)}$e(Ad,"onAnimationEnd"),$e(Cd,"onAnimationIteration"),$e(jd,"onAnimationStart"),$e("dblclick","onDoubleClick"),$e("focusin","onFocus"),$e("focusout","onBlur"),$e(_v,"onTransitionRun"),$e(Uv,"onTransitionStart"),$e(Nv,"onTransitionCancel"),$e(Dd,"onTransitionEnd"),Na("onMouseEnter",["mouseout","mouseover"]),Na("onMouseLeave",["mouseout","mouseover"]),Na("onPointerEnter",["pointerout","pointerover"]),Na("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function Jp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],u=i.event;i=i.listeners;t:{var o=void 0;if(e)for(var h=i.length-1;0<=h;h--){var b=i[h],S=b.instance,M=b.currentTarget;if(b=b.listener,S!==o&&u.isPropagationStopped())break t;o=b,u.currentTarget=M;try{o(u)}catch(H){Lr(H)}u.currentTarget=null,o=S}else for(h=0;h<i.length;h++){if(b=i[h],S=b.instance,M=b.currentTarget,b=b.listener,S!==o&&u.isPropagationStopped())break t;o=b,u.currentTarget=M;try{o(u)}catch(H){Lr(H)}u.currentTarget=null,o=S}}}}function bt(t,e){var a=e[ru];a===void 0&&(a=e[ru]=new Set);var i=t+"__bubble";a.has(i)||(Fp(e,t,2,!1),a.add(i))}function Jo(t,e,a){var i=0;e&&(i|=4),Fp(a,t,i,e)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Pr]){t[Pr]=!0,Gf.forEach(function(a){a!=="selectionchange"&&(y1.has(a)||Jo(a,!1,t),Jo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pr]||(e[Pr]=!0,Jo("selectionchange",!1,e))}}function Fp(t,e,a,i){switch(x0(e)){case 2:var u=$1;break;case 8:u=X1;break;default:u=cc}a=u.bind(null,e,a,t),u=void 0,!yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),i?u!==void 0?t.addEventListener(e,a,{capture:!0,passive:u}):t.addEventListener(e,a,!0):u!==void 0?t.addEventListener(e,a,{passive:u}):t.addEventListener(e,a,!1)}function Po(t,e,a,i,u){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var b=i.stateNode.containerInfo;if(b===u)break;if(h===4)for(h=i.return;h!==null;){var S=h.tag;if((S===3||S===4)&&h.stateNode.containerInfo===u)return;h=h.return}for(;b!==null;){if(h=Ma(b),h===null)return;if(S=h.tag,S===5||S===6||S===26||S===27){i=o=h;continue t}b=b.parentNode}}i=i.return}ad(function(){var M=o,H=mu(a),Q=[];t:{var U=zd.get(t);if(U!==void 0){var N=fr,rt=t;switch(t){case"keypress":if(or(a)===0)break t;case"keydown":case"keyup":N=fv;break;case"focusin":rt="focus",N=Su;break;case"focusout":rt="blur",N=Su;break;case"beforeblur":case"afterblur":N=Su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=pv;break;case Ad:case Cd:case jd:N=nv;break;case Dd:N=gv;break;case"scroll":case"scrollend":N=Py;break;case"wheel":N=vv;break;case"copy":case"cut":case"paste":N=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ud;break;case"toggle":case"beforetoggle":N=xv}var at=(e&4)!==0,jt=!at&&(t==="scroll"||t==="scrollend"),j=at?U!==null?U+"Capture":null:U;at=[];for(var O=M,z;O!==null;){var Y=O;if(z=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||z===null||j===null||(Y=Qi(O,j),Y!=null&&at.push(Rl(O,Y,z))),jt)break;O=O.return}0<at.length&&(U=new N(U,rt,null,a,H),Q.push({event:U,listeners:at}))}}if((e&7)===0){t:{if(U=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",U&&a!==pu&&(rt=a.relatedTarget||a.fromElement)&&(Ma(rt)||rt[za]))break t;if((N||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,N?(rt=a.relatedTarget||a.toElement,N=M,rt=rt?Ma(rt):null,rt!==null&&(jt=f(rt),at=rt.tag,rt!==jt||at!==5&&at!==27&&at!==6)&&(rt=null)):(N=null,rt=M),N!==rt)){if(at=rd,Y="onMouseLeave",j="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(at=ud,Y="onPointerLeave",j="onPointerEnter",O="pointer"),jt=N==null?U:Yi(N),z=rt==null?U:Yi(rt),U=new at(Y,O+"leave",N,a,H),U.target=jt,U.relatedTarget=z,Y=null,Ma(H)===M&&(at=new at(j,O+"enter",rt,a,H),at.target=z,at.relatedTarget=jt,Y=at),jt=Y,N&&rt)e:{for(at=N,j=rt,O=0,z=at;z;z=di(z))O++;for(z=0,Y=j;Y;Y=di(Y))z++;for(;0<O-z;)at=di(at),O--;for(;0<z-O;)j=di(j),z--;for(;O--;){if(at===j||j!==null&&at===j.alternate)break e;at=di(at),j=di(j)}at=null}else at=null;N!==null&&Pp(Q,U,N,at,!1),rt!==null&&jt!==null&&Pp(Q,jt,rt,at,!0)}}t:{if(U=M?Yi(M):window,N=U.nodeName&&U.nodeName.toLowerCase(),N==="select"||N==="input"&&U.type==="file")var W=gd;else if(pd(U))if(yd)W=Dv;else{W=Cv;var pt=Av}else N=U.nodeName,!N||N.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?M&&hu(M.elementType)&&(W=gd):W=jv;if(W&&(W=W(t,M))){md(Q,W,a,H);break t}pt&&pt(t,U,M),t==="focusout"&&M&&U.type==="number"&&M.memoizedProps.value!=null&&du(U,"number",U.value)}switch(pt=M?Yi(M):window,t){case"focusin":(pd(pt)||pt.contentEditable==="true")&&(Qa=pt,Au=M,Fi=null);break;case"focusout":Fi=Au=Qa=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Td(Q,a,H);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":Td(Q,a,H)}var I;if(Eu)t:{switch(t){case"compositionstart":var lt="onCompositionStart";break t;case"compositionend":lt="onCompositionEnd";break t;case"compositionupdate":lt="onCompositionUpdate";break t}lt=void 0}else Ya?dd(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(od&&a.locale!=="ko"&&(Ya||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Ya&&(I=id()):(zn=H,vu="value"in zn?zn.value:zn.textContent,Ya=!0)),pt=Wr(M,lt),0<pt.length&&(lt=new sd(lt,t,null,a,H),Q.push({event:lt,listeners:pt}),I?lt.data=I:(I=hd(a),I!==null&&(lt.data=I)))),(I=wv?Ev(t,a):Rv(t,a))&&(lt=Wr(M,"onBeforeInput"),0<lt.length&&(pt=new sd("onBeforeInput","beforeinput",null,a,H),Q.push({event:pt,listeners:lt}),pt.data=I)),p1(Q,t,M,a,H)}Jp(Q,e)})}function Rl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Wr(t,e){for(var a=e+"Capture",i=[];t!==null;){var u=t,o=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||o===null||(u=Qi(t,a),u!=null&&i.unshift(Rl(t,u,o)),u=Qi(t,e),u!=null&&i.push(Rl(t,u,o))),t.tag===3)return i;t=t.return}return[]}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pp(t,e,a,i,u){for(var o=e._reactName,h=[];a!==null&&a!==i;){var b=a,S=b.alternate,M=b.stateNode;if(b=b.tag,S!==null&&S===i)break;b!==5&&b!==26&&b!==27||M===null||(S=M,u?(M=Qi(a,o),M!=null&&h.unshift(Rl(a,M,S))):u||(M=Qi(a,o),M!=null&&h.push(Rl(a,M,S)))),a=a.return}h.length!==0&&t.push({event:e,listeners:h})}var v1=/\r\n?/g,b1=/\u0000|\uFFFD/g;function Wp(t){return(typeof t=="string"?t:""+t).replace(v1,`
`).replace(b1,"")}function Ip(t,e){return e=Wp(e),Wp(t)===e}function Ir(){}function Ct(t,e,a,i,u,o){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||qa(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&qa(t,""+i);break;case"className":ir(t,"class",i);break;case"tabIndex":ir(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ir(t,a,i);break;case"style":ed(t,i,o);break;case"data":if(e!=="object"){ir(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=sr(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(e!=="input"&&Ct(t,e,"name",u.name,u,null),Ct(t,e,"formEncType",u.formEncType,u,null),Ct(t,e,"formMethod",u.formMethod,u,null),Ct(t,e,"formTarget",u.formTarget,u,null)):(Ct(t,e,"encType",u.encType,u,null),Ct(t,e,"method",u.method,u,null),Ct(t,e,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=sr(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=Ir);break;case"onScroll":i!=null&&bt("scroll",t);break;case"onScrollEnd":i!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=sr(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":bt("beforetoggle",t),bt("toggle",t),ar(t,"popover",i);break;case"xlinkActuate":cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ar(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jy.get(a)||a,ar(t,a,i))}}function Wo(t,e,a,i,u,o){switch(a){case"style":ed(t,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof i=="string"?qa(t,i):(typeof i=="number"||typeof i=="bigint")&&qa(t,""+i);break;case"onScroll":i!=null&&bt("scroll",t);break;case"onScrollEnd":i!=null&&bt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$f.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),e=a.slice(2,u?a.length-7:void 0),o=t[de]||null,o=o!=null?o[a]:null,typeof o=="function"&&t.removeEventListener(e,o,u),typeof i=="function")){typeof o!="function"&&o!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,u);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):ar(t,a,i)}}}function ae(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var i=!1,u=!1,o;for(o in a)if(a.hasOwnProperty(o)){var h=a[o];if(h!=null)switch(o){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ct(t,e,o,h,a,null)}}u&&Ct(t,e,"srcSet",a.srcSet,a,null),i&&Ct(t,e,"src",a.src,a,null);return;case"input":bt("invalid",t);var b=o=h=u=null,S=null,M=null;for(i in a)if(a.hasOwnProperty(i)){var H=a[i];if(H!=null)switch(i){case"name":u=H;break;case"type":h=H;break;case"checked":S=H;break;case"defaultChecked":M=H;break;case"value":o=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,e));break;default:Ct(t,e,i,H,a,null)}}Pf(t,o,b,S,M,h,u,!1),lr(t);return;case"select":bt("invalid",t),i=h=o=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":o=b;break;case"defaultValue":h=b;break;case"multiple":i=b;default:Ct(t,e,u,b,a,null)}e=o,a=h,t.multiple=!!i,e!=null?La(t,!!i,e,!1):a!=null&&La(t,!!i,a,!0);return;case"textarea":bt("invalid",t),o=u=i=null;for(h in a)if(a.hasOwnProperty(h)&&(b=a[h],b!=null))switch(h){case"value":i=b;break;case"defaultValue":u=b;break;case"children":o=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ct(t,e,h,b,a,null)}If(t,i,u,o),lr(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(i=a[S],i!=null))switch(S){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ct(t,e,S,i,a,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(i=0;i<El.length;i++)bt(El[i],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(i=a[M],i!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ct(t,e,M,i,a,null)}return;default:if(hu(e)){for(H in a)a.hasOwnProperty(H)&&(i=a[H],i!==void 0&&Wo(t,e,H,i,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null&&Ct(t,e,b,i,a,null))}function x1(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,o=null,h=null,b=null,S=null,M=null,H=null;for(N in a){var Q=a[N];if(a.hasOwnProperty(N)&&Q!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=Q;default:i.hasOwnProperty(N)||Ct(t,e,N,null,i,Q)}}for(var U in i){var N=i[U];if(Q=a[U],i.hasOwnProperty(U)&&(N!=null||Q!=null))switch(U){case"type":o=N;break;case"name":u=N;break;case"checked":M=N;break;case"defaultChecked":H=N;break;case"value":h=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:N!==Q&&Ct(t,e,U,N,i,Q)}}fu(t,h,b,S,M,H,o,u);return;case"select":N=h=b=U=null;for(o in a)if(S=a[o],a.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":N=S;default:i.hasOwnProperty(o)||Ct(t,e,o,null,i,S)}for(u in i)if(o=i[u],S=a[u],i.hasOwnProperty(u)&&(o!=null||S!=null))switch(u){case"value":U=o;break;case"defaultValue":b=o;break;case"multiple":h=o;default:o!==S&&Ct(t,e,u,o,i,S)}e=b,a=h,i=N,U!=null?La(t,!!a,U,!1):!!i!=!!a&&(e!=null?La(t,!!a,e,!0):La(t,!!a,a?[]:"",!1));return;case"textarea":N=U=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ct(t,e,b,null,i,u)}for(h in i)if(u=i[h],o=a[h],i.hasOwnProperty(h)&&(u!=null||o!=null))switch(h){case"value":U=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==o&&Ct(t,e,h,u,i,o)}Wf(t,U,N);return;case"option":for(var rt in a)if(U=a[rt],a.hasOwnProperty(rt)&&U!=null&&!i.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:Ct(t,e,rt,null,i,U)}for(S in i)if(U=i[S],N=a[S],i.hasOwnProperty(S)&&U!==N&&(U!=null||N!=null))switch(S){case"selected":t.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:Ct(t,e,S,U,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)U=a[at],a.hasOwnProperty(at)&&U!=null&&!i.hasOwnProperty(at)&&Ct(t,e,at,null,i,U);for(M in i)if(U=i[M],N=a[M],i.hasOwnProperty(M)&&U!==N&&(U!=null||N!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,e));break;default:Ct(t,e,M,U,i,N)}return;default:if(hu(e)){for(var jt in a)U=a[jt],a.hasOwnProperty(jt)&&U!==void 0&&!i.hasOwnProperty(jt)&&Wo(t,e,jt,void 0,i,U);for(H in i)U=i[H],N=a[H],!i.hasOwnProperty(H)||U===N||U===void 0&&N===void 0||Wo(t,e,H,U,i,N);return}}for(var j in a)U=a[j],a.hasOwnProperty(j)&&U!=null&&!i.hasOwnProperty(j)&&Ct(t,e,j,null,i,U);for(Q in i)U=i[Q],N=a[Q],!i.hasOwnProperty(Q)||U===N||U==null&&N==null||Ct(t,e,Q,U,i,N)}var Io=null,tc=null;function ts(t){return t.nodeType===9?t:t.ownerDocument}function t0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nc=null;function S1(){var t=window.event;return t&&t.type==="popstate"?t===nc?!1:(nc=t,!0):(nc=null,!1)}var n0=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,E1=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(t){return a0.resolve(null).then(t).catch(R1)}:n0;function R1(t){setTimeout(function(){throw t})}function Vn(t){return t==="head"}function i0(t,e){var a=e,i=0,u=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<i&&8>i){a=i;var h=t.ownerDocument;if(a&1&&Tl(h.documentElement),a&2&&Tl(h.body),a&4)for(a=h.head,Tl(a),h=a.firstChild;h;){var b=h.nextSibling,S=h.nodeName;h[ki]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=b}}if(u===0){t.removeChild(o),_l(e);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:i=a.charCodeAt(0)-48;else i=0;a=o}while(a);_l(e)}function ac(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ac(a),su(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function T1(t,e,a,i){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[ki])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Ke(t.nextSibling),t===null)break}return null}function O1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ke(t.nextSibling),t===null))return null;return t}function ic(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function A1(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Ke(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var lc=null;function l0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function r0(t,e,a){switch(e=ts(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Tl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);su(t)}var ke=new Map,s0=new Set;function es(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Rn=Z.d;Z.d={f:C1,r:j1,D:D1,C:z1,L:M1,m:_1,X:N1,S:U1,M:B1};function C1(){var t=Rn.f(),e=Kr();return t||e}function j1(t){var e=_a(t);e!==null&&e.tag===5&&e.type==="form"?Ah(e):Rn.r(t)}var hi=typeof document>"u"?null:document;function u0(t,e,a){var i=hi;if(i&&typeof e=="string"&&e){var u=_e(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),s0.has(u)||(s0.add(u),t={rel:t,crossOrigin:a,href:e},i.querySelector(u)===null&&(e=i.createElement("link"),ae(e,"link",t),Ft(e),i.head.appendChild(e)))}}function D1(t){Rn.D(t),u0("dns-prefetch",t,null)}function z1(t,e){Rn.C(t,e),u0("preconnect",t,e)}function M1(t,e,a){Rn.L(t,e,a);var i=hi;if(i&&t&&e){var u='link[rel="preload"][as="'+_e(e)+'"]';e==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_e(a.imageSizes)+'"]')):u+='[href="'+_e(t)+'"]';var o=u;switch(e){case"style":o=pi(t);break;case"script":o=mi(t)}ke.has(o)||(t=g({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ke.set(o,t),i.querySelector(u)!==null||e==="style"&&i.querySelector(Ol(o))||e==="script"&&i.querySelector(Al(o))||(e=i.createElement("link"),ae(e,"link",t),Ft(e),i.head.appendChild(e)))}}function _1(t,e){Rn.m(t,e);var a=hi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+_e(i)+'"][href="'+_e(t)+'"]',o=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=mi(t)}if(!ke.has(o)&&(t=g({rel:"modulepreload",href:t},e),ke.set(o,t),a.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Al(o)))return}i=a.createElement("link"),ae(i,"link",t),Ft(i),a.head.appendChild(i)}}}function U1(t,e,a){Rn.S(t,e,a);var i=hi;if(i&&t){var u=Ua(i).hoistableStyles,o=pi(t);e=e||"default";var h=u.get(o);if(!h){var b={loading:0,preload:null};if(h=i.querySelector(Ol(o)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ke.get(o))&&rc(t,a);var S=h=i.createElement("link");Ft(S),ae(S,"link",t),S._p=new Promise(function(M,H){S.onload=M,S.onerror=H}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ns(h,e,i)}h={type:"stylesheet",instance:h,count:1,state:b},u.set(o,h)}}}function N1(t,e){Rn.X(t,e);var a=hi;if(a&&t){var i=Ua(a).hoistableScripts,u=mi(t),o=i.get(u);o||(o=a.querySelector(Al(u)),o||(t=g({src:t,async:!0},e),(e=ke.get(u))&&sc(t,e),o=a.createElement("script"),Ft(o),ae(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function B1(t,e){Rn.M(t,e);var a=hi;if(a&&t){var i=Ua(a).hoistableScripts,u=mi(t),o=i.get(u);o||(o=a.querySelector(Al(u)),o||(t=g({src:t,async:!0,type:"module"},e),(e=ke.get(u))&&sc(t,e),o=a.createElement("script"),Ft(o),ae(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function o0(t,e,a,i){var u=(u=it.current)?es(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=pi(a.href),a=Ua(u).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pi(a.href);var o=Ua(u).hoistableStyles,h=o.get(t);if(h||(u=u.ownerDocument||u,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,h),(o=u.querySelector(Ol(t)))&&!o._p&&(h.instance=o,h.state.loading=5),ke.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ke.set(t,a),o||L1(u,t,a,h.state))),e&&i===null)throw Error(s(528,""));return h}if(e&&i!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=mi(a),a=Ua(u).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pi(t){return'href="'+_e(t)+'"'}function Ol(t){return'link[rel="stylesheet"]['+t+"]"}function c0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function L1(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ae(e,"link",a),Ft(e),t.head.appendChild(e))}function mi(t){return'[src="'+_e(t)+'"]'}function Al(t){return"script[async]"+t}function f0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(i)return e.instance=i,Ft(i),i;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Ft(i),ae(i,"style",u),ns(i,a.precedence,t),e.instance=i;case"stylesheet":u=pi(a.href);var o=t.querySelector(Ol(u));if(o)return e.state.loading|=4,e.instance=o,Ft(o),o;i=c0(a),(u=ke.get(u))&&rc(i,u),o=(t.ownerDocument||t).createElement("link"),Ft(o);var h=o;return h._p=new Promise(function(b,S){h.onload=b,h.onerror=S}),ae(o,"link",i),e.state.loading|=4,ns(o,a.precedence,t),e.instance=o;case"script":return o=mi(a.src),(u=t.querySelector(Al(o)))?(e.instance=u,Ft(u),u):(i=a,(u=ke.get(o))&&(i=g({},a),sc(i,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ft(u),ae(u,"link",i),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,ns(i,a.precedence,t));return e.instance}function ns(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,o=u,h=0;h<i.length;h++){var b=i[h];if(b.dataset.precedence===e)o=b;else if(o!==u)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function rc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function sc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var as=null;function d0(t,e,a){if(as===null){var i=new Map,u=as=new Map;u.set(a,i)}else u=as,i=u.get(a),i||(i=new Map,u.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var o=a[u];if(!(o[ki]||o[le]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var h=o.getAttribute(e)||"";h=t+h;var b=i.get(h);b?b.push(o):i.set(h,[o])}}return i}function h0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function q1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function p0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Cl=null;function H1(){}function k1(t,e,a){if(Cl===null)throw Error(s(475));var i=Cl;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=pi(a.href),o=t.querySelector(Ol(u));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=is.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=o,Ft(o);return}o=t.ownerDocument||t,a=c0(a),(u=ke.get(u))&&rc(a,u),o=o.createElement("link"),Ft(o);var h=o;h._p=new Promise(function(b,S){h.onload=b,h.onerror=S}),ae(o,"link",a),e.instance=o}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(i.count++,e=is.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function Y1(){if(Cl===null)throw Error(s(475));var t=Cl;return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function is(){if(this.count--,this.count===0){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ls=null;function uc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ls=new Map,e.forEach(Q1,t),ls=null,is.call(t))}function Q1(t,e){if(!(e.state.loading&4)){var a=ls.get(t);if(a)var i=a.get(null);else{a=new Map,ls.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<u.length;o++){var h=u[o];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(a.set(h.dataset.precedence,h),i=h)}i&&a.set(null,i)}u=e.instance,h=u.getAttribute("data-precedence"),o=a.get(h)||i,o===i&&a.set(null,u),a.set(h,u),this.count++,i=is.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),o?o.parentNode.insertBefore(u,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var jl={$$typeof:$,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function G1(t,e,a,i,u,o,h,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=o,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function m0(t,e,a,i,u,o,h,b,S,M,H,Q){return t=new G1(t,e,a,h,b,S,M,Q),e=1,o===!0&&(e|=24),o=we(3,null,null,e),t.current=o,o.stateNode=t,e=Qu(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:i,isDehydrated:a,cache:e},Ku(o),t}function g0(t){return t?(t=Ka,t):Ka}function y0(t,e,a,i,u,o){u=g0(u),i.context===null?i.context=u:i.pendingContext=u,i=Un(e),i.payload={element:a},o=o===void 0?null:o,o!==null&&(i.callback=o),a=Nn(t,i,e),a!==null&&(Ae(a,t,e),ll(a,t,e))}function v0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function oc(t,e){v0(t,e),(t=t.alternate)&&v0(t,e)}function b0(t){if(t.tag===13){var e=Xa(t,67108864);e!==null&&Ae(e,t,67108864),oc(t,67108864)}}var rs=!0;function $1(t,e,a,i){var u=q.T;q.T=null;var o=Z.p;try{Z.p=2,cc(t,e,a,i)}finally{Z.p=o,q.T=u}}function X1(t,e,a,i){var u=q.T;q.T=null;var o=Z.p;try{Z.p=8,cc(t,e,a,i)}finally{Z.p=o,q.T=u}}function cc(t,e,a,i){if(rs){var u=fc(i);if(u===null)Po(t,e,i,ss,a),S0(t,i);else if(V1(u,t,e,a,i))i.stopPropagation();else if(S0(t,i),e&4&&-1<K1.indexOf(t)){for(;u!==null;){var o=_a(u);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var h=aa(o.pendingLanes);if(h!==0){var b=o;for(b.pendingLanes|=2,b.entangledLanes|=2;h;){var S=1<<31-xe(h);b.entanglements[1]|=S,h&=~S}an(o),(Tt&6)===0&&($r=We()+500,wl(0))}}break;case 13:b=Xa(o,2),b!==null&&Ae(b,o,2),Kr(),oc(o,2)}if(o=fc(i),o===null&&Po(t,e,i,ss,a),o===u)break;u=o}u!==null&&i.stopPropagation()}else Po(t,e,i,null,a)}}function fc(t){return t=mu(t),dc(t)}var ss=null;function dc(t){if(ss=null,t=Ma(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ss=t,null}function x0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zy()){case Uf:return 2;case Nf:return 8;case Il:case My:return 32;case Bf:return 268435456;default:return 32}default:return 32}}var hc=!1,Zn=null,Jn=null,Fn=null,Dl=new Map,zl=new Map,Pn=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S0(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Dl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(e.pointerId)}}function Ml(t,e,a,i,u,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:o,targetContainers:[u]},e!==null&&(e=_a(e),e!==null&&b0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function V1(t,e,a,i,u){switch(e){case"focusin":return Zn=Ml(Zn,t,e,a,i,u),!0;case"dragenter":return Jn=Ml(Jn,t,e,a,i,u),!0;case"mouseover":return Fn=Ml(Fn,t,e,a,i,u),!0;case"pointerover":var o=u.pointerId;return Dl.set(o,Ml(Dl.get(o)||null,t,e,a,i,u)),!0;case"gotpointercapture":return o=u.pointerId,zl.set(o,Ml(zl.get(o)||null,t,e,a,i,u)),!0}return!1}function w0(t){var e=Ma(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,ky(t.priority,function(){if(a.tag===13){var i=Oe();i=iu(i);var u=Xa(a,i);u!==null&&Ae(u,a,i),oc(a,i)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function us(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=fc(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);pu=i,a.target.dispatchEvent(i),pu=null}else return e=_a(a),e!==null&&b0(e),t.blockedOn=a,!1;e.shift()}return!0}function E0(t,e,a){us(t)&&a.delete(e)}function Z1(){hc=!1,Zn!==null&&us(Zn)&&(Zn=null),Jn!==null&&us(Jn)&&(Jn=null),Fn!==null&&us(Fn)&&(Fn=null),Dl.forEach(E0),zl.forEach(E0)}function os(t,e){t.blockedOn===e&&(t.blockedOn=null,hc||(hc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Z1)))}var cs=null;function R0(t){cs!==t&&(cs=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){cs===t&&(cs=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],u=t[e+2];if(typeof i!="function"){if(dc(i||a)===null)continue;break}var o=_a(a);o!==null&&(t.splice(e,3),e-=3,fo(o,{pending:!0,data:u,method:a.method,action:i},i,u))}}))}function _l(t){function e(S){return os(S,t)}Zn!==null&&os(Zn,t),Jn!==null&&os(Jn,t),Fn!==null&&os(Fn,t),Dl.forEach(e),zl.forEach(e);for(var a=0;a<Pn.length;a++){var i=Pn[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Pn.length&&(a=Pn[0],a.blockedOn===null);)w0(a),a.blockedOn===null&&Pn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var u=a[i],o=a[i+1],h=u[de]||null;if(typeof o=="function")h||R0(a);else if(h){var b=null;if(o&&o.hasAttribute("formAction")){if(u=o,h=o[de]||null)b=h.formAction;else if(dc(u)!==null)continue}else b=h.action;typeof b=="function"?a[i+1]=b:(a.splice(i,3),i-=3),R0(a)}}}function pc(t){this._internalRoot=t}fs.prototype.render=pc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,i=Oe();y0(a,i,t,e,null,null)},fs.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;y0(t.current,2,null,t,null,null),Kr(),e[za]=null}};function fs(t){this._internalRoot=t}fs.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Pn.length&&e!==0&&e<Pn[a].priority;a++);Pn.splice(a,0,t),a===0&&w0(t)}};var T0=l.version;if(T0!=="19.1.1")throw Error(s(527,T0,"19.1.1"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var J1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{Li=ds.inject(J1),be=ds}catch{}}return Nl.createRoot=function(t,e){if(!c(t))throw Error(s(299));var a=!1,i="",u=Yh,o=Qh,h=Gh,b=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=m0(t,1,!1,null,null,a,i,u,o,h,b,null),t[za]=e.current,Fo(t),new pc(e)},Nl.hydrateRoot=function(t,e,a){if(!c(t))throw Error(s(299));var i=!1,u="",o=Yh,h=Qh,b=Gh,S=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),e=m0(t,1,!0,e,a??null,i,u,o,h,b,S,M),e.context=g0(null),a=e.current,i=Oe(),i=iu(i),u=Un(i),u.callback=null,Nn(a,u,i),a=i,e.current.lanes=a,Hi(e,a),an(e),t[za]=e.current,Fo(t),new fs(e)},Nl.version="19.1.1",Nl}var N0;function rb(){if(N0)return yc.exports;N0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),yc.exports=lb(),yc.exports}var sb=rb();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var B0="popstate";function ub(n={}){function l(s,c){let{pathname:f,search:d,hash:m}=s.location;return Lc("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(s,c){return typeof c=="string"?c:kl(c)}return cb(l,r,null,n)}function Bt(n,l){if(n===!1||n===null||typeof n>"u")throw new Error(l)}function Ze(n,l){if(!n){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function L0(n,l){return{usr:n.state,key:n.key,idx:l}}function Lc(n,l,r=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof l=="string"?Oi(l):l,state:r,key:l&&l.key||s||ob()}}function kl({pathname:n="/",search:l="",hash:r=""}){return l&&l!=="?"&&(n+=l.charAt(0)==="?"?l:"?"+l),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Oi(n){let l={};if(n){let r=n.indexOf("#");r>=0&&(l.hash=n.substring(r),n=n.substring(0,r));let s=n.indexOf("?");s>=0&&(l.search=n.substring(s),n=n.substring(0,s)),n&&(l.pathname=n)}return l}function cb(n,l,r,s={}){let{window:c=document.defaultView,v5Compat:f=!1}=s,d=c.history,m="POP",v=null,p=g();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function g(){return(d.state||{idx:null}).idx}function x(){m="POP";let C=g(),k=C==null?null:C-p;p=C,v&&v({action:m,location:D.location,delta:k})}function R(C,k){m="PUSH";let L=Lc(D.location,C,k);p=g()+1;let $=L0(L,p),F=D.createHref(L);try{d.pushState($,"",F)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;c.location.assign(F)}f&&v&&v({action:m,location:D.location,delta:1})}function _(C,k){m="REPLACE";let L=Lc(D.location,C,k);p=g();let $=L0(L,p),F=D.createHref(L);d.replaceState($,"",F),f&&v&&v({action:m,location:D.location,delta:0})}function T(C){return fb(C)}let D={get action(){return m},get location(){return n(c,d)},listen(C){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(B0,x),v=C,()=>{c.removeEventListener(B0,x),v=null}},createHref(C){return l(c,C)},createURL:T,encodeLocation(C){let k=T(C);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:R,replace:_,go(C){return d.go(C)}};return D}function fb(n,l=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Bt(r,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:kl(n);return s=s.replace(/ $/,"%20"),!l&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function km(n,l,r="/"){return db(n,l,r,!1)}function db(n,l,r,s){let c=typeof l=="string"?Oi(l):l,f=Cn(c.pathname||"/",r);if(f==null)return null;let d=Ym(n);hb(d);let m=null;for(let v=0;m==null&&v<d.length;++v){let p=Rb(f);m=wb(d[v],p,s)}return m}function Ym(n,l=[],r=[],s="",c=!1){let f=(d,m,v=c,p)=>{let g={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&v)return;Bt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let x=An([s,g.relativePath]),R=r.concat(g);d.children&&d.children.length>0&&(Bt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Ym(d.children,l,R,x,v)),!(d.path==null&&!d.index)&&l.push({path:x,score:xb(x,d.index),routesMeta:R})};return n.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))f(d,m);else for(let v of Qm(d.path))f(d,m,!0,v)}),l}function Qm(n){let l=n.split("/");if(l.length===0)return[];let[r,...s]=l,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(s.length===0)return c?[f,""]:[f];let d=Qm(s.join("/")),m=[];return m.push(...d.map(v=>v===""?f:[f,v].join("/"))),c&&m.push(...d),m.map(v=>n.startsWith("/")&&v===""?"/":v)}function hb(n){n.sort((l,r)=>l.score!==r.score?r.score-l.score:Sb(l.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var pb=/^:[\w-]+$/,mb=3,gb=2,yb=1,vb=10,bb=-2,q0=n=>n==="*";function xb(n,l){let r=n.split("/"),s=r.length;return r.some(q0)&&(s+=bb),l&&(s+=gb),r.filter(c=>!q0(c)).reduce((c,f)=>c+(pb.test(f)?mb:f===""?yb:vb),s)}function Sb(n,l){return n.length===l.length&&n.slice(0,-1).every((s,c)=>s===l[c])?n[n.length-1]-l[l.length-1]:0}function wb(n,l,r=!1){let{routesMeta:s}=n,c={},f="/",d=[];for(let m=0;m<s.length;++m){let v=s[m],p=m===s.length-1,g=f==="/"?l:l.slice(f.length)||"/",x=Cs({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},g),R=v.route;if(!x&&p&&r&&!s[s.length-1].route.index&&(x=Cs({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},g)),!x)return null;Object.assign(c,x.params),d.push({params:c,pathname:An([f,x.pathname]),pathnameBase:Cb(An([f,x.pathnameBase])),route:R}),x.pathnameBase!=="/"&&(f=An([f,x.pathnameBase]))}return d}function Cs(n,l){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,s]=Eb(n.path,n.caseSensitive,n.end),c=l.match(r);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:x},R)=>{if(g==="*"){let T=m[R]||"";d=f.slice(0,f.length-T.length).replace(/(.)\/+$/,"$1")}const _=m[R];return x&&!_?p[g]=void 0:p[g]=(_||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:n}}function Eb(n,l=!1,r=!0){Ze(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,v)=>(s.push({paramName:m,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),s]}function Rb(n){try{return n.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Ze(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),n}}function Cn(n,l){if(l==="/")return n;if(!n.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,s=n.charAt(r);return s&&s!=="/"?null:n.slice(r)||"/"}function Tb(n,l="/"){let{pathname:r,search:s="",hash:c=""}=typeof n=="string"?Oi(n):n;return{pathname:r?r.startsWith("/")?r:Ob(r,l):l,search:jb(s),hash:Db(c)}}function Ob(n,l){let r=l.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Sc(n,l,r,s){return`Cannot include a '${n}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ab(n){return n.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function of(n){let l=Ab(n);return l.map((r,s)=>s===l.length-1?r.pathname:r.pathnameBase)}function cf(n,l,r,s=!1){let c;typeof n=="string"?c=Oi(n):(c={...n},Bt(!c.pathname||!c.pathname.includes("?"),Sc("?","pathname","search",c)),Bt(!c.pathname||!c.pathname.includes("#"),Sc("#","pathname","hash",c)),Bt(!c.search||!c.search.includes("#"),Sc("#","search","hash",c)));let f=n===""||c.pathname==="",d=f?"/":c.pathname,m;if(d==null)m=r;else{let x=l.length-1;if(!s&&d.startsWith("..")){let R=d.split("/");for(;R[0]==="..";)R.shift(),x-=1;c.pathname=R.join("/")}m=x>=0?l[x]:"/"}let v=Tb(c,m),p=d&&d!=="/"&&d.endsWith("/"),g=(f||d===".")&&r.endsWith("/");return!v.pathname.endsWith("/")&&(p||g)&&(v.pathname+="/"),v}var An=n=>n.join("/").replace(/\/\/+/g,"/"),Cb=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),jb=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Db=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function zb(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Gm=["POST","PUT","PATCH","DELETE"];new Set(Gm);var Mb=["GET",...Gm];new Set(Mb);var Ai=w.createContext(null);Ai.displayName="DataRouter";var Hs=w.createContext(null);Hs.displayName="DataRouterState";w.createContext(!1);var $m=w.createContext({isTransitioning:!1});$m.displayName="ViewTransition";var _b=w.createContext(new Map);_b.displayName="Fetchers";var Ub=w.createContext(null);Ub.displayName="Await";var Je=w.createContext(null);Je.displayName="Navigation";var $l=w.createContext(null);$l.displayName="Location";var Fe=w.createContext({outlet:null,matches:[],isDataRoute:!1});Fe.displayName="Route";var ff=w.createContext(null);ff.displayName="RouteError";function Nb(n,{relative:l}={}){Bt(Ci(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=w.useContext(Je),{hash:c,pathname:f,search:d}=Xl(n,{relative:l}),m=f;return r!=="/"&&(m=f==="/"?r:An([r,f])),s.createHref({pathname:m,search:d,hash:c})}function Ci(){return w.useContext($l)!=null}function Ge(){return Bt(Ci(),"useLocation() may be used only in the context of a <Router> component."),w.useContext($l).location}var Xm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Km(n){w.useContext(Je).static||w.useLayoutEffect(n)}function je(){let{isDataRoute:n}=w.useContext(Fe);return n?Zb():Bb()}function Bb(){Bt(Ci(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(Ai),{basename:l,navigator:r}=w.useContext(Je),{matches:s}=w.useContext(Fe),{pathname:c}=Ge(),f=JSON.stringify(of(s)),d=w.useRef(!1);return Km(()=>{d.current=!0}),w.useCallback((v,p={})=>{if(Ze(d.current,Xm),!d.current)return;if(typeof v=="number"){r.go(v);return}let g=cf(v,JSON.parse(f),c,p.relative==="path");n==null&&l!=="/"&&(g.pathname=g.pathname==="/"?l:An([l,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[l,r,f,c,n])}w.createContext(null);function Vm(){let{matches:n}=w.useContext(Fe),l=n[n.length-1];return l?l.params:{}}function Xl(n,{relative:l}={}){let{matches:r}=w.useContext(Fe),{pathname:s}=Ge(),c=JSON.stringify(of(r));return w.useMemo(()=>cf(n,JSON.parse(c),s,l==="path"),[n,c,s,l])}function Lb(n,l){return Zm(n,l)}function Zm(n,l,r,s,c){Bt(Ci(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=w.useContext(Je),{matches:d}=w.useContext(Fe),m=d[d.length-1],v=m?m.params:{},p=m?m.pathname:"/",g=m?m.pathnameBase:"/",x=m&&m.route;{let L=x&&x.path||"";Jm(p,!x||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let R=Ge(),_;if(l){let L=typeof l=="string"?Oi(l):l;Bt(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),_=L}else _=R;let T=_.pathname||"/",D=T;if(g!=="/"){let L=g.replace(/^\//,"").split("/");D="/"+T.replace(/^\//,"").split("/").slice(L.length).join("/")}let C=km(n,{pathname:D});Ze(x||C!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Ze(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Qb(C&&C.map(L=>Object.assign({},L,{params:Object.assign({},v,L.params),pathname:An([g,f.encodeLocation?f.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:An([g,f.encodeLocation?f.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),d,r,s,c);return l&&k?w.createElement($l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},k):k}function qb(){let n=Vb(),l=zb(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:f},"ErrorBoundary")," or"," ",w.createElement("code",{style:f},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},l),r?w.createElement("pre",{style:c},r):null,d)}var Hb=w.createElement(qb,null),kb=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,l){return l.location!==n.location||l.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:l.error,location:l.location,revalidation:n.revalidation||l.revalidation}}componentDidCatch(n,l){this.props.unstable_onError?this.props.unstable_onError(n,l):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?w.createElement(Fe.Provider,{value:this.props.routeContext},w.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Yb({routeContext:n,match:l,children:r}){let s=w.useContext(Ai);return s&&s.static&&s.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=l.route.id),w.createElement(Fe.Provider,{value:n},r)}function Qb(n,l=[],r=null,s=null,c=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(l.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let f=n,d=r?.errors;if(d!=null){let p=f.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);Bt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,p+1))}let m=!1,v=-1;if(r)for(let p=0;p<f.length;p++){let g=f[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(v=p),g.route.id){let{loaderData:x,errors:R}=r,_=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!R||R[g.route.id]===void 0);if(g.route.lazy||_){m=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((p,g,x)=>{let R,_=!1,T=null,D=null;r&&(R=d&&g.route.id?d[g.route.id]:void 0,T=g.route.errorElement||Hb,m&&(v<0&&x===0?(Jm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,D=null):v===x&&(_=!0,D=g.route.hydrateFallbackElement||null)));let C=l.concat(f.slice(0,x+1)),k=()=>{let L;return R?L=T:_?L=D:g.route.Component?L=w.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=p,w.createElement(Yb,{match:g,routeContext:{outlet:p,matches:C,isDataRoute:r!=null},children:L})};return r&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?w.createElement(kb,{location:r.location,revalidation:r.revalidation,component:T,error:R,children:k(),routeContext:{outlet:null,matches:C,isDataRoute:!0},unstable_onError:s}):k()},null)}function df(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gb(n){let l=w.useContext(Ai);return Bt(l,df(n)),l}function $b(n){let l=w.useContext(Hs);return Bt(l,df(n)),l}function Xb(n){let l=w.useContext(Fe);return Bt(l,df(n)),l}function hf(n){let l=Xb(n),r=l.matches[l.matches.length-1];return Bt(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function Kb(){return hf("useRouteId")}function Vb(){let n=w.useContext(ff),l=$b("useRouteError"),r=hf("useRouteError");return n!==void 0?n:l.errors?.[r]}function Zb(){let{router:n}=Gb("useNavigate"),l=hf("useNavigate"),r=w.useRef(!1);return Km(()=>{r.current=!0}),w.useCallback(async(c,f={})=>{Ze(r.current,Xm),r.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:l,...f}))},[n,l])}var H0={};function Jm(n,l,r){!l&&!H0[n]&&(H0[n]=!0,Ze(!1,r))}w.memo(Jb);function Jb({routes:n,future:l,state:r,unstable_onError:s}){return Zm(n,void 0,r,s,l)}function Fb({to:n,replace:l,state:r,relative:s}){Bt(Ci(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=w.useContext(Je);Ze(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=w.useContext(Fe),{pathname:d}=Ge(),m=je(),v=cf(n,of(f),d,s==="path"),p=JSON.stringify(v);return w.useEffect(()=>{m(JSON.parse(p),{replace:l,state:r,relative:s})},[m,p,s,l,r]),null}function Tn(n){Bt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Pb({basename:n="/",children:l=null,location:r,navigationType:s="POP",navigator:c,static:f=!1}){Bt(!Ci(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:d,navigator:c,static:f,future:{}}),[d,c,f]);typeof r=="string"&&(r=Oi(r));let{pathname:v="/",search:p="",hash:g="",state:x=null,key:R="default"}=r,_=w.useMemo(()=>{let T=Cn(v,d);return T==null?null:{location:{pathname:T,search:p,hash:g,state:x,key:R},navigationType:s}},[d,v,p,g,x,R,s]);return Ze(_!=null,`<Router basename="${d}"> is not able to match the URL "${v}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:w.createElement(Je.Provider,{value:m},w.createElement($l.Provider,{children:l,value:_}))}function Wb({children:n,location:l}){return Lb(qc(n),l)}function qc(n,l=[]){let r=[];return w.Children.forEach(n,(s,c)=>{if(!w.isValidElement(s))return;let f=[...l,c];if(s.type===w.Fragment){r.push.apply(r,qc(s.props.children,f));return}Bt(s.type===Tn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Bt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=qc(s.props.children,f)),r.push(d)}),r}var vs="get",bs="application/x-www-form-urlencoded";function ks(n){return n!=null&&typeof n.tagName=="string"}function Ib(n){return ks(n)&&n.tagName.toLowerCase()==="button"}function tx(n){return ks(n)&&n.tagName.toLowerCase()==="form"}function ex(n){return ks(n)&&n.tagName.toLowerCase()==="input"}function nx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ax(n,l){return n.button===0&&(!l||l==="_self")&&!nx(n)}var hs=null;function ix(){if(hs===null)try{new FormData(document.createElement("form"),0),hs=!1}catch{hs=!0}return hs}var lx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wc(n){return n!=null&&!lx.has(n)?(Ze(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bs}"`),null):n}function rx(n,l){let r,s,c,f,d;if(tx(n)){let m=n.getAttribute("action");s=m?Cn(m,l):null,r=n.getAttribute("method")||vs,c=wc(n.getAttribute("enctype"))||bs,f=new FormData(n)}else if(Ib(n)||ex(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=n.getAttribute("formaction")||m.getAttribute("action");if(s=v?Cn(v,l):null,r=n.getAttribute("formmethod")||m.getAttribute("method")||vs,c=wc(n.getAttribute("formenctype"))||wc(m.getAttribute("enctype"))||bs,f=new FormData(m,n),!ix()){let{name:p,type:g,value:x}=n;if(g==="image"){let R=p?`${p}.`:"";f.append(`${R}x`,"0"),f.append(`${R}y`,"0")}else p&&f.append(p,x)}}else{if(ks(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=vs,s=null,c=bs,d=n}return f&&c==="text/plain"&&(d=f,f=void 0),{action:s,method:r.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pf(n,l){if(n===!1||n===null||typeof n>"u")throw new Error(l)}function sx(n,l,r){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${r}`:l&&Cn(s.pathname,l)==="/"?s.pathname=`${l.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function ux(n,l){if(n.id in l)return l[n.id];try{let r=await import(n.module);return l[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ox(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function cx(n,l,r){let s=await Promise.all(n.map(async c=>{let f=l.routes[c.route.id];if(f){let d=await ux(f,r);return d.links?d.links():[]}return[]}));return px(s.flat(1).filter(ox).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function k0(n,l,r,s,c,f){let d=(v,p)=>r[p]?v.route.id!==r[p].route.id:!0,m=(v,p)=>r[p].pathname!==v.pathname||r[p].route.path?.endsWith("*")&&r[p].params["*"]!==v.params["*"];return f==="assets"?l.filter((v,p)=>d(v,p)||m(v,p)):f==="data"?l.filter((v,p)=>{let g=s.routes[v.route.id];if(!g||!g.hasLoader)return!1;if(d(v,p)||m(v,p))return!0;if(v.route.shouldRevalidate){let x=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function fx(n,l,{includeHydrateFallback:r}={}){return dx(n.map(s=>{let c=l.routes[s.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function dx(n){return[...new Set(n)]}function hx(n){let l={},r=Object.keys(n).sort();for(let s of r)l[s]=n[s];return l}function px(n,l){let r=new Set;return new Set(l),n.reduce((s,c)=>{let f=JSON.stringify(hx(c));return r.has(f)||(r.add(f),s.push({key:f,link:c})),s},[])}function Fm(){let n=w.useContext(Ai);return pf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function mx(){let n=w.useContext(Hs);return pf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var mf=w.createContext(void 0);mf.displayName="FrameworkContext";function Pm(){let n=w.useContext(mf);return pf(n,"You must render this element inside a <HydratedRouter> element"),n}function gx(n,l){let r=w.useContext(mf),[s,c]=w.useState(!1),[f,d]=w.useState(!1),{onFocus:m,onBlur:v,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=l,R=w.useRef(null);w.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let D=k=>{k.forEach(L=>{d(L.isIntersecting)})},C=new IntersectionObserver(D,{threshold:.5});return R.current&&C.observe(R.current),()=>{C.disconnect()}}},[n]),w.useEffect(()=>{if(s){let D=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(D)}}},[s]);let _=()=>{c(!0)},T=()=>{c(!1),d(!1)};return r?n!=="intent"?[f,R,{}]:[f,R,{onFocus:Bl(m,_),onBlur:Bl(v,T),onMouseEnter:Bl(p,_),onMouseLeave:Bl(g,T),onTouchStart:Bl(x,_)}]:[!1,R,{}]}function Bl(n,l){return r=>{n&&n(r),r.defaultPrevented||l(r)}}function yx({page:n,...l}){let{router:r}=Fm(),s=w.useMemo(()=>km(r.routes,n,r.basename),[r.routes,n,r.basename]);return s?w.createElement(bx,{page:n,matches:s,...l}):null}function vx(n){let{manifest:l,routeModules:r}=Pm(),[s,c]=w.useState([]);return w.useEffect(()=>{let f=!1;return cx(n,l,r).then(d=>{f||c(d)}),()=>{f=!0}},[n,l,r]),s}function bx({page:n,matches:l,...r}){let s=Ge(),{manifest:c,routeModules:f}=Pm(),{basename:d}=Fm(),{loaderData:m,matches:v}=mx(),p=w.useMemo(()=>k0(n,l,v,c,s,"data"),[n,l,v,c,s]),g=w.useMemo(()=>k0(n,l,v,c,s,"assets"),[n,l,v,c,s]),x=w.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let T=new Set,D=!1;if(l.forEach(k=>{let L=c.routes[k.route.id];!L||!L.hasLoader||(!p.some($=>$.route.id===k.route.id)&&k.route.id in m&&f[k.route.id]?.shouldRevalidate||L.hasClientLoader?D=!0:T.add(k.route.id))}),T.size===0)return[];let C=sx(n,d,"data");return D&&T.size>0&&C.searchParams.set("_routes",l.filter(k=>T.has(k.route.id)).map(k=>k.route.id).join(",")),[C.pathname+C.search]},[d,m,s,c,p,l,n,f]),R=w.useMemo(()=>fx(g,c),[g,c]),_=vx(g);return w.createElement(w.Fragment,null,x.map(T=>w.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...r})),R.map(T=>w.createElement("link",{key:T,rel:"modulepreload",href:T,...r})),_.map(({key:T,link:D})=>w.createElement("link",{key:T,nonce:r.nonce,...D})))}function xx(...n){return l=>{n.forEach(r=>{typeof r=="function"?r(l):r!=null&&(r.current=l)})}}var Wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wm&&(window.__reactRouterVersion="7.8.2")}catch{}function Sx({basename:n,children:l,window:r}){let s=w.useRef();s.current==null&&(s.current=ub({window:r,v5Compat:!0}));let c=s.current,[f,d]=w.useState({action:c.action,location:c.location}),m=w.useCallback(v=>{w.startTransition(()=>d(v))},[d]);return w.useLayoutEffect(()=>c.listen(m),[c,m]),w.createElement(Pb,{basename:n,children:l,location:f.location,navigationType:f.action,navigator:c})}var Im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tg=w.forwardRef(function({onClick:l,discover:r="render",prefetch:s="none",relative:c,reloadDocument:f,replace:d,state:m,target:v,to:p,preventScrollReset:g,viewTransition:x,...R},_){let{basename:T}=w.useContext(Je),D=typeof p=="string"&&Im.test(p),C,k=!1;if(typeof p=="string"&&D&&(C=p,Wm))try{let mt=new URL(window.location.href),st=p.startsWith("//")?new URL(mt.protocol+p):new URL(p),ot=Cn(st.pathname,T);st.origin===mt.origin&&ot!=null?p=ot+st.search+st.hash:k=!0}catch{Ze(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Nb(p,{relative:c}),[$,F,X]=gx(s,R),P=Tx(p,{replace:d,state:m,target:v,preventScrollReset:g,relative:c,viewTransition:x});function K(mt){l&&l(mt),mt.defaultPrevented||P(mt)}let ut=w.createElement("a",{...R,...X,href:C||L,onClick:k||f?l:K,ref:xx(_,F),target:v,"data-discover":!D&&r==="render"?"true":void 0});return $&&!D?w.createElement(w.Fragment,null,ut,w.createElement(yx,{page:L})):ut});tg.displayName="Link";var wx=w.forwardRef(function({"aria-current":l="page",caseSensitive:r=!1,className:s="",end:c=!1,style:f,to:d,viewTransition:m,children:v,...p},g){let x=Xl(d,{relative:p.relative}),R=Ge(),_=w.useContext(Hs),{navigator:T,basename:D}=w.useContext(Je),C=_!=null&&Dx(x)&&m===!0,k=T.encodeLocation?T.encodeLocation(x).pathname:x.pathname,L=R.pathname,$=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(L=L.toLowerCase(),$=$?$.toLowerCase():null,k=k.toLowerCase()),$&&D&&($=Cn($,D)||$);const F=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let X=L===k||!c&&L.startsWith(k)&&L.charAt(F)==="/",P=$!=null&&($===k||!c&&$.startsWith(k)&&$.charAt(k.length)==="/"),K={isActive:X,isPending:P,isTransitioning:C},ut=X?l:void 0,mt;typeof s=="function"?mt=s(K):mt=[s,X?"active":null,P?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let st=typeof f=="function"?f(K):f;return w.createElement(tg,{...p,"aria-current":ut,className:mt,ref:g,style:st,to:d,viewTransition:m},typeof v=="function"?v(K):v)});wx.displayName="NavLink";var Ex=w.forwardRef(({discover:n="render",fetcherKey:l,navigate:r,reloadDocument:s,replace:c,state:f,method:d=vs,action:m,onSubmit:v,relative:p,preventScrollReset:g,viewTransition:x,...R},_)=>{let T=Cx(),D=jx(m,{relative:p}),C=d.toLowerCase()==="get"?"get":"post",k=typeof m=="string"&&Im.test(m),L=$=>{if(v&&v($),$.defaultPrevented)return;$.preventDefault();let F=$.nativeEvent.submitter,X=F?.getAttribute("formmethod")||d;T(F||$.currentTarget,{fetcherKey:l,method:X,navigate:r,replace:c,state:f,relative:p,preventScrollReset:g,viewTransition:x})};return w.createElement("form",{ref:_,method:C,action:D,onSubmit:s?v:L,...R,"data-discover":!k&&n==="render"?"true":void 0})});Ex.displayName="Form";function Rx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eg(n){let l=w.useContext(Ai);return Bt(l,Rx(n)),l}function Tx(n,{target:l,replace:r,state:s,preventScrollReset:c,relative:f,viewTransition:d}={}){let m=je(),v=Ge(),p=Xl(n,{relative:f});return w.useCallback(g=>{if(ax(g,l)){g.preventDefault();let x=r!==void 0?r:kl(v)===kl(p);m(n,{replace:x,state:s,preventScrollReset:c,relative:f,viewTransition:d})}},[v,m,p,r,s,l,n,c,f,d])}var Ox=0,Ax=()=>`__${String(++Ox)}__`;function Cx(){let{router:n}=eg("useSubmit"),{basename:l}=w.useContext(Je),r=Kb();return w.useCallback(async(s,c={})=>{let{action:f,method:d,encType:m,formData:v,body:p}=rx(s,l);if(c.navigate===!1){let g=c.fetcherKey||Ax();await n.fetch(g,r,c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:p,formMethod:c.method||d,formEncType:c.encType||m,flushSync:c.flushSync})}else await n.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:p,formMethod:c.method||d,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:r,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,l,r])}function jx(n,{relative:l}={}){let{basename:r}=w.useContext(Je),s=w.useContext(Fe);Bt(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),f={...Xl(n||".",{relative:l})},d=Ge();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),v=m.getAll("index");if(v.some(g=>g==="")){m.delete("index"),v.filter(x=>x).forEach(x=>m.append("index",x));let g=m.toString();f.search=g?`?${g}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:An([r,f.pathname])),kl(f)}function Dx(n,{relative:l}={}){let r=w.useContext($m);Bt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=eg("useViewTransitionState"),c=Xl(n,{relative:l});if(!r.isTransitioning)return!1;let f=Cn(r.currentLocation.pathname,s)||r.currentLocation.pathname,d=Cn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return Cs(c.pathname,d)!=null||Cs(c.pathname,f)!=null}const zx="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%239e9e9e'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-search'%3e%3ccircle%20cx='11'%20cy='11'%20r='8'%3e%3c/circle%3e%3cline%20x1='21'%20y1='21'%20x2='16.65'%20y2='16.65'%3e%3c/line%3e%3c/svg%3e",Mx="/static/img/user.svg",_x="/static/img/menu.svg";var oe=function(){return oe=Object.assign||function(l){for(var r,s=1,c=arguments.length;s<c;s++){r=arguments[s];for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&(l[f]=r[f])}return l},oe.apply(this,arguments)};function bi(n,l,r){if(r||arguments.length===2)for(var s=0,c=l.length,f;s<c;s++)(f||!(s in l))&&(f||(f=Array.prototype.slice.call(l,0,s)),f[s]=l[s]);return n.concat(f||Array.prototype.slice.call(l))}var Ut="-ms-",Hl="-moz-",Rt="-webkit-",ng="comm",Ys="rule",gf="decl",Ux="@import",ag="@keyframes",Nx="@layer",ig=Math.abs,yf=String.fromCharCode,Hc=Object.assign;function Bx(n,l){return te(n,0)^45?(((l<<2^te(n,0))<<2^te(n,1))<<2^te(n,2))<<2^te(n,3):0}function lg(n){return n.trim()}function On(n,l){return(n=l.exec(n))?n[0]:n}function dt(n,l,r){return n.replace(l,r)}function xs(n,l,r){return n.indexOf(l,r)}function te(n,l){return n.charCodeAt(l)|0}function xi(n,l,r){return n.slice(l,r)}function rn(n){return n.length}function rg(n){return n.length}function ql(n,l){return l.push(n),n}function Lx(n,l){return n.map(l).join("")}function Y0(n,l){return n.filter(function(r){return!On(r,l)})}var Qs=1,Si=1,sg=0,Qe=0,$t=0,ji="";function Gs(n,l,r,s,c,f,d,m){return{value:n,root:l,parent:r,type:s,props:c,children:f,line:Qs,column:Si,length:d,return:"",siblings:m}}function In(n,l){return Hc(Gs("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},l)}function gi(n){for(;n.root;)n=In(n.root,{children:[n]});ql(n,n.siblings)}function qx(){return $t}function Hx(){return $t=Qe>0?te(ji,--Qe):0,Si--,$t===10&&(Si=1,Qs--),$t}function Ve(){return $t=Qe<sg?te(ji,Qe++):0,Si++,$t===10&&(Si=1,Qs++),$t}function Ra(){return te(ji,Qe)}function Ss(){return Qe}function $s(n,l){return xi(ji,n,l)}function kc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kx(n){return Qs=Si=1,sg=rn(ji=n),Qe=0,[]}function Yx(n){return ji="",n}function Ec(n){return lg($s(Qe-1,Yc(n===91?n+2:n===40?n+1:n)))}function Qx(n){for(;($t=Ra())&&$t<33;)Ve();return kc(n)>2||kc($t)>3?"":" "}function Gx(n,l){for(;--l&&Ve()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return $s(n,Ss()+(l<6&&Ra()==32&&Ve()==32))}function Yc(n){for(;Ve();)switch($t){case n:return Qe;case 34:case 39:n!==34&&n!==39&&Yc($t);break;case 40:n===41&&Yc(n);break;case 92:Ve();break}return Qe}function $x(n,l){for(;Ve()&&n+$t!==57;)if(n+$t===84&&Ra()===47)break;return"/*"+$s(l,Qe-1)+"*"+yf(n===47?n:Ve())}function Xx(n){for(;!kc(Ra());)Ve();return $s(n,Qe)}function Kx(n){return Yx(ws("",null,null,null,[""],n=kx(n),0,[0],n))}function ws(n,l,r,s,c,f,d,m,v){for(var p=0,g=0,x=d,R=0,_=0,T=0,D=1,C=1,k=1,L=0,$="",F=c,X=f,P=s,K=$;C;)switch(T=L,L=Ve()){case 40:if(T!=108&&te(K,x-1)==58){xs(K+=dt(Ec(L),"&","&\f"),"&\f",ig(p?m[p-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:K+=Ec(L);break;case 9:case 10:case 13:case 32:K+=Qx(T);break;case 92:K+=Gx(Ss()-1,7);continue;case 47:switch(Ra()){case 42:case 47:ql(Vx($x(Ve(),Ss()),l,r,v),v);break;default:K+="/"}break;case 123*D:m[p++]=rn(K)*k;case 125*D:case 59:case 0:switch(L){case 0:case 125:C=0;case 59+g:k==-1&&(K=dt(K,/\f/g,"")),_>0&&rn(K)-x&&ql(_>32?G0(K+";",s,r,x-1,v):G0(dt(K," ","")+";",s,r,x-2,v),v);break;case 59:K+=";";default:if(ql(P=Q0(K,l,r,p,g,c,m,$,F=[],X=[],x,f),f),L===123)if(g===0)ws(K,l,P,P,F,f,x,m,X);else switch(R===99&&te(K,3)===110?100:R){case 100:case 108:case 109:case 115:ws(n,P,P,s&&ql(Q0(n,P,P,0,0,c,m,$,c,F=[],x,X),X),c,X,x,m,s?F:X);break;default:ws(K,P,P,P,[""],X,0,m,X)}}p=g=_=0,D=k=1,$=K="",x=d;break;case 58:x=1+rn(K),_=T;default:if(D<1){if(L==123)--D;else if(L==125&&D++==0&&Hx()==125)continue}switch(K+=yf(L),L*D){case 38:k=g>0?1:(K+="\f",-1);break;case 44:m[p++]=(rn(K)-1)*k,k=1;break;case 64:Ra()===45&&(K+=Ec(Ve())),R=Ra(),g=x=rn($=K+=Xx(Ss())),L++;break;case 45:T===45&&rn(K)==2&&(D=0)}}return f}function Q0(n,l,r,s,c,f,d,m,v,p,g,x){for(var R=c-1,_=c===0?f:[""],T=rg(_),D=0,C=0,k=0;D<s;++D)for(var L=0,$=xi(n,R+1,R=ig(C=d[D])),F=n;L<T;++L)(F=lg(C>0?_[L]+" "+$:dt($,/&\f/g,_[L])))&&(v[k++]=F);return Gs(n,l,r,c===0?Ys:m,v,p,g,x)}function Vx(n,l,r,s){return Gs(n,l,r,ng,yf(qx()),xi(n,2,-2),0,s)}function G0(n,l,r,s,c){return Gs(n,l,r,gf,xi(n,0,s),xi(n,s+1,-1),s,c)}function ug(n,l,r){switch(Bx(n,l)){case 5103:return Rt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Rt+n+n;case 4789:return Hl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Rt+n+Hl+n+Ut+n+n;case 5936:switch(te(n,l+11)){case 114:return Rt+n+Ut+dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Rt+n+Ut+dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Rt+n+Ut+dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Rt+n+Ut+n+n;case 6165:return Rt+n+Ut+"flex-"+n+n;case 5187:return Rt+n+dt(n,/(\w+).+(:[^]+)/,Rt+"box-$1$2"+Ut+"flex-$1$2")+n;case 5443:return Rt+n+Ut+"flex-item-"+dt(n,/flex-|-self/g,"")+(On(n,/flex-|baseline/)?"":Ut+"grid-row-"+dt(n,/flex-|-self/g,""))+n;case 4675:return Rt+n+Ut+"flex-line-pack"+dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Rt+n+Ut+dt(n,"shrink","negative")+n;case 5292:return Rt+n+Ut+dt(n,"basis","preferred-size")+n;case 6060:return Rt+"box-"+dt(n,"-grow","")+Rt+n+Ut+dt(n,"grow","positive")+n;case 4554:return Rt+dt(n,/([^-])(transform)/g,"$1"+Rt+"$2")+n;case 6187:return dt(dt(dt(n,/(zoom-|grab)/,Rt+"$1"),/(image-set)/,Rt+"$1"),n,"")+n;case 5495:case 3959:return dt(n,/(image-set\([^]*)/,Rt+"$1$`$1");case 4968:return dt(dt(n,/(.+:)(flex-)?(.*)/,Rt+"box-pack:$3"+Ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Rt+n+n;case 4200:if(!On(n,/flex-|baseline/))return Ut+"grid-column-align"+xi(n,l)+n;break;case 2592:case 3360:return Ut+dt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(s,c){return l=c,On(s.props,/grid-\w+-end/)})?~xs(n+(r=r[l].value),"span",0)?n:Ut+dt(n,"-start","")+n+Ut+"grid-row-span:"+(~xs(r,"span",0)?On(r,/\d+/):+On(r,/\d+/)-+On(n,/\d+/))+";":Ut+dt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(s){return On(s.props,/grid-\w+-start/)})?n:Ut+dt(dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return dt(n,/(.+)-inline(.+)/,Rt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(n)-1-l>6)switch(te(n,l+1)){case 109:if(te(n,l+4)!==45)break;case 102:return dt(n,/(.+:)(.+)-([^]+)/,"$1"+Rt+"$2-$3$1"+Hl+(te(n,l+3)==108?"$3":"$2-$3"))+n;case 115:return~xs(n,"stretch",0)?ug(dt(n,"stretch","fill-available"),l,r)+n:n}break;case 5152:case 5920:return dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,f,d,m,v,p){return Ut+c+":"+f+p+(d?Ut+c+"-span:"+(m?v:+v-+f)+p:"")+n});case 4949:if(te(n,l+6)===121)return dt(n,":",":"+Rt)+n;break;case 6444:switch(te(n,te(n,14)===45?18:11)){case 120:return dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Rt+(te(n,14)===45?"inline-":"")+"box$3$1"+Rt+"$2$3$1"+Ut+"$2box$3")+n;case 100:return dt(n,":",":"+Ut)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return dt(n,"scroll-","scroll-snap-")+n}return n}function js(n,l){for(var r="",s=0;s<n.length;s++)r+=l(n[s],s,n,l)||"";return r}function Zx(n,l,r,s){switch(n.type){case Nx:if(n.children.length)break;case Ux:case gf:return n.return=n.return||n.value;case ng:return"";case ag:return n.return=n.value+"{"+js(n.children,s)+"}";case Ys:if(!rn(n.value=n.props.join(",")))return""}return rn(r=js(n.children,s))?n.return=n.value+"{"+r+"}":""}function Jx(n){var l=rg(n);return function(r,s,c,f){for(var d="",m=0;m<l;m++)d+=n[m](r,s,c,f)||"";return d}}function Fx(n){return function(l){l.root||(l=l.return)&&n(l)}}function Px(n,l,r,s){if(n.length>-1&&!n.return)switch(n.type){case gf:n.return=ug(n.value,n.length,r);return;case ag:return js([In(n,{value:dt(n.value,"@","@"+Rt)})],s);case Ys:if(n.length)return Lx(r=n.props,function(c){switch(On(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gi(In(n,{props:[dt(c,/:(read-\w+)/,":"+Hl+"$1")]})),gi(In(n,{props:[c]})),Hc(n,{props:Y0(r,s)});break;case"::placeholder":gi(In(n,{props:[dt(c,/:(plac\w+)/,":"+Rt+"input-$1")]})),gi(In(n,{props:[dt(c,/:(plac\w+)/,":"+Hl+"$1")]})),gi(In(n,{props:[dt(c,/:(plac\w+)/,Ut+"input-$1")]})),gi(In(n,{props:[c]})),Hc(n,{props:Y0(r,s)});break}return""})}}var Wx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},wi=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",og="active",cg="data-styled-version",Xs="6.1.19",vf=`/*!sc*/
`,Ds=typeof window<"u"&&typeof document<"u",Ix=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),tS={},Ks=Object.freeze([]),Ei=Object.freeze({});function fg(n,l,r){return r===void 0&&(r=Ei),n.theme!==r.theme&&n.theme||l||r.theme}var dg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nS=/(^-|-$)/g;function $0(n){return n.replace(eS,"-").replace(nS,"")}var aS=/(a)(d)/gi,ps=52,X0=function(n){return String.fromCharCode(n+(n>25?39:97))};function Qc(n){var l,r="";for(l=Math.abs(n);l>ps;l=l/ps|0)r=X0(l%ps)+r;return(X0(l%ps)+r).replace(aS,"$1-$2")}var Rc,hg=5381,vi=function(n,l){for(var r=l.length;r;)n=33*n^l.charCodeAt(--r);return n},pg=function(n){return vi(hg,n)};function bf(n){return Qc(pg(n)>>>0)}function iS(n){return n.displayName||n.name||"Component"}function Tc(n){return typeof n=="string"&&!0}var mg=typeof Symbol=="function"&&Symbol.for,gg=mg?Symbol.for("react.memo"):60115,lS=mg?Symbol.for("react.forward_ref"):60112,rS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uS=((Rc={})[lS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rc[gg]=yg,Rc);function K0(n){return("type"in(l=n)&&l.type.$$typeof)===gg?yg:"$$typeof"in n?uS[n.$$typeof]:rS;var l}var oS=Object.defineProperty,cS=Object.getOwnPropertyNames,V0=Object.getOwnPropertySymbols,fS=Object.getOwnPropertyDescriptor,dS=Object.getPrototypeOf,Z0=Object.prototype;function vg(n,l,r){if(typeof l!="string"){if(Z0){var s=dS(l);s&&s!==Z0&&vg(n,s,r)}var c=cS(l);V0&&(c=c.concat(V0(l)));for(var f=K0(n),d=K0(l),m=0;m<c.length;++m){var v=c[m];if(!(v in sS||r&&r[v]||d&&v in d||f&&v in f)){var p=fS(l,v);try{oS(n,v,p)}catch{}}}}return n}function Ri(n){return typeof n=="function"}function xf(n){return typeof n=="object"&&"styledComponentId"in n}function Sa(n,l){return n&&l?"".concat(n," ").concat(l):n||l||""}function zs(n,l){if(n.length===0)return"";for(var r=n[0],s=1;s<n.length;s++)r+=n[s];return r}function Yl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Gc(n,l,r){if(r===void 0&&(r=!1),!r&&!Yl(n)&&!Array.isArray(n))return l;if(Array.isArray(l))for(var s=0;s<l.length;s++)n[s]=Gc(n[s],l[s]);else if(Yl(l))for(var s in l)n[s]=Gc(n[s],l[s]);return n}function Sf(n,l){Object.defineProperty(n,"toString",{value:l})}function Kl(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var hS=(function(){function n(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return n.prototype.indexOfGroup=function(l){for(var r=0,s=0;s<l;s++)r+=this.groupSizes[s];return r},n.prototype.insertRules=function(l,r){if(l>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,f=c;l>=f;)if((f<<=1)<0)throw Kl(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var d=c;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(l+1),v=(d=0,r.length);d<v;d++)this.tag.insertRule(m,r[d])&&(this.groupSizes[l]++,m++)},n.prototype.clearGroup=function(l){if(l<this.length){var r=this.groupSizes[l],s=this.indexOfGroup(l),c=s+r;this.groupSizes[l]=0;for(var f=s;f<c;f++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(l){var r="";if(l>=this.length||this.groupSizes[l]===0)return r;for(var s=this.groupSizes[l],c=this.indexOfGroup(l),f=c+s,d=c;d<f;d++)r+="".concat(this.tag.getRule(d)).concat(vf);return r},n})(),Es=new Map,Ms=new Map,Rs=1,ms=function(n){if(Es.has(n))return Es.get(n);for(;Ms.has(Rs);)Rs++;var l=Rs++;return Es.set(n,l),Ms.set(l,n),l},pS=function(n,l){Rs=l+1,Es.set(n,l),Ms.set(l,n)},mS="style[".concat(wi,"][").concat(cg,'="').concat(Xs,'"]'),gS=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yS=function(n,l,r){for(var s,c=r.split(","),f=0,d=c.length;f<d;f++)(s=c[f])&&n.registerName(l,s)},vS=function(n,l){for(var r,s=((r=l.textContent)!==null&&r!==void 0?r:"").split(vf),c=[],f=0,d=s.length;f<d;f++){var m=s[f].trim();if(m){var v=m.match(gS);if(v){var p=0|parseInt(v[1],10),g=v[2];p!==0&&(pS(g,p),yS(n,g,v[3]),n.getTag().insertRules(p,c)),c.length=0}else c.push(m)}}},J0=function(n){for(var l=document.querySelectorAll(mS),r=0,s=l.length;r<s;r++){var c=l[r];c&&c.getAttribute(wi)!==og&&(vS(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function bS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bg=function(n){var l=document.head,r=n||l,s=document.createElement("style"),c=(function(m){var v=Array.from(m.querySelectorAll("style[".concat(wi,"]")));return v[v.length-1]})(r),f=c!==void 0?c.nextSibling:null;s.setAttribute(wi,og),s.setAttribute(cg,Xs);var d=bS();return d&&s.setAttribute("nonce",d),r.insertBefore(s,f),s},xS=(function(){function n(l){this.element=bg(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,c=0,f=s.length;c<f;c++){var d=s[c];if(d.ownerNode===r)return d}throw Kl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(l,r){try{return this.sheet.insertRule(r,l),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},n.prototype.getRule=function(l){var r=this.sheet.cssRules[l];return r&&r.cssText?r.cssText:""},n})(),SS=(function(){function n(l){this.element=bg(l),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(l,r){if(l<=this.length&&l>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[l]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},n.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},n})(),wS=(function(){function n(l){this.rules=[],this.length=0}return n.prototype.insertRule=function(l,r){return l<=this.length&&(this.rules.splice(l,0,r),this.length++,!0)},n.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},n.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},n})(),F0=Ds,ES={isServer:!Ds,useCSSOMInjection:!Ix},_s=(function(){function n(l,r,s){l===void 0&&(l=Ei),r===void 0&&(r={});var c=this;this.options=oe(oe({},ES),l),this.gs=r,this.names=new Map(s),this.server=!!l.isServer,!this.server&&Ds&&F0&&(F0=!1,J0(this)),Sf(this,function(){return(function(f){for(var d=f.getTag(),m=d.length,v="",p=function(x){var R=(function(k){return Ms.get(k)})(x);if(R===void 0)return"continue";var _=f.names.get(R),T=d.getGroup(x);if(_===void 0||!_.size||T.length===0)return"continue";var D="".concat(wi,".g").concat(x,'[id="').concat(R,'"]'),C="";_!==void 0&&_.forEach(function(k){k.length>0&&(C+="".concat(k,","))}),v+="".concat(T).concat(D,'{content:"').concat(C,'"}').concat(vf)},g=0;g<m;g++)p(g);return v})(c)})}return n.registerId=function(l){return ms(l)},n.prototype.rehydrate=function(){!this.server&&Ds&&J0(this)},n.prototype.reconstructWithOptions=function(l,r){return r===void 0&&(r=!0),new n(oe(oe({},this.options),l),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(r){var s=r.useCSSOMInjection,c=r.target;return r.isServer?new wS(c):s?new xS(c):new SS(c)})(this.options),new hS(l)));var l},n.prototype.hasNameForId=function(l,r){return this.names.has(l)&&this.names.get(l).has(r)},n.prototype.registerName=function(l,r){if(ms(l),this.names.has(l))this.names.get(l).add(r);else{var s=new Set;s.add(r),this.names.set(l,s)}},n.prototype.insertRules=function(l,r,s){this.registerName(l,r),this.getTag().insertRules(ms(l),s)},n.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},n.prototype.clearRules=function(l){this.getTag().clearGroup(ms(l)),this.clearNames(l)},n.prototype.clearTag=function(){this.tag=void 0},n})(),RS=/&/g,TS=/^\s*\/\/.*$/gm;function xg(n,l){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(l," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(l," ")),r.props=r.props.map(function(s){return"".concat(l," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=xg(r.children,l)),r})}function OS(n){var l,r,s,c=Ei,f=c.options,d=f===void 0?Ei:f,m=c.plugins,v=m===void 0?Ks:m,p=function(R,_,T){return T.startsWith(r)&&T.endsWith(r)&&T.replaceAll(r,"").length>0?".".concat(l):R},g=v.slice();g.push(function(R){R.type===Ys&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(RS,r).replace(s,p))}),d.prefix&&g.push(Px),g.push(Zx);var x=function(R,_,T,D){_===void 0&&(_=""),T===void 0&&(T=""),D===void 0&&(D="&"),l=D,r=_,s=new RegExp("\\".concat(r,"\\b"),"g");var C=R.replace(TS,""),k=Kx(T||_?"".concat(T," ").concat(_," { ").concat(C," }"):C);d.namespace&&(k=xg(k,d.namespace));var L=[];return js(k,Jx(g.concat(Fx(function($){return L.push($)})))),L};return x.hash=v.length?v.reduce(function(R,_){return _.name||Kl(15),vi(R,_.name)},hg).toString():"",x}var AS=new _s,$c=OS(),Sg=sn.createContext({shouldForwardProp:void 0,styleSheet:AS,stylis:$c});Sg.Consumer;sn.createContext(void 0);function Xc(){return w.useContext(Sg)}var wg=(function(){function n(l,r){var s=this;this.inject=function(c,f){f===void 0&&(f=$c);var d=s.name+f.hash;c.hasNameForId(s.id,d)||c.insertRules(s.id,d,f(s.rules,d,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=r,Sf(this,function(){throw Kl(12,String(s.name))})}return n.prototype.getName=function(l){return l===void 0&&(l=$c),this.name+l.hash},n})(),CS=function(n){return n>="A"&&n<="Z"};function P0(n){for(var l="",r=0;r<n.length;r++){var s=n[r];if(r===1&&s==="-"&&n[0]==="-")return n;CS(s)?l+="-"+s.toLowerCase():l+=s}return l.startsWith("ms-")?"-"+l:l}var Eg=function(n){return n==null||n===!1||n===""},Rg=function(n){var l,r,s=[];for(var c in n){var f=n[c];n.hasOwnProperty(c)&&!Eg(f)&&(Array.isArray(f)&&f.isCss||Ri(f)?s.push("".concat(P0(c),":"),f,";"):Yl(f)?s.push.apply(s,bi(bi(["".concat(c," {")],Rg(f),!1),["}"],!1)):s.push("".concat(P0(c),": ").concat((l=c,(r=f)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||l in Wx||l.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function ta(n,l,r,s){if(Eg(n))return[];if(xf(n))return[".".concat(n.styledComponentId)];if(Ri(n)){if(!Ri(f=n)||f.prototype&&f.prototype.isReactComponent||!l)return[n];var c=n(l);return ta(c,l,r,s)}var f;return n instanceof wg?r?(n.inject(r,s),[n.getName(s)]):[n]:Yl(n)?Rg(n):Array.isArray(n)?Array.prototype.concat.apply(Ks,n.map(function(d){return ta(d,l,r,s)})):[n.toString()]}function Tg(n){for(var l=0;l<n.length;l+=1){var r=n[l];if(Ri(r)&&!xf(r))return!1}return!0}var jS=pg(Xs),DS=(function(){function n(l,r,s){this.rules=l,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Tg(l),this.componentId=r,this.baseHash=vi(jS,r),this.baseStyle=s,_s.registerId(r)}return n.prototype.generateAndInjectStyles=function(l,r,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))c=Sa(c,this.staticRulesId);else{var f=zs(ta(this.rules,l,r,s)),d=Qc(vi(this.baseHash,f)>>>0);if(!r.hasNameForId(this.componentId,d)){var m=s(f,".".concat(d),void 0,this.componentId);r.insertRules(this.componentId,d,m)}c=Sa(c,d),this.staticRulesId=d}else{for(var v=vi(this.baseHash,s.hash),p="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")p+=x;else if(x){var R=zs(ta(x,l,r,s));v=vi(v,R+g),p+=R}}if(p){var _=Qc(v>>>0);r.hasNameForId(this.componentId,_)||r.insertRules(this.componentId,_,s(p,".".concat(_),void 0,this.componentId)),c=Sa(c,_)}}return c},n})(),wf=sn.createContext(void 0);wf.Consumer;var Oc={};function zS(n,l,r){var s=xf(n),c=n,f=!Tc(n),d=l.attrs,m=d===void 0?Ks:d,v=l.componentId,p=v===void 0?(function(F,X){var P=typeof F!="string"?"sc":$0(F);Oc[P]=(Oc[P]||0)+1;var K="".concat(P,"-").concat(bf(Xs+P+Oc[P]));return X?"".concat(X,"-").concat(K):K})(l.displayName,l.parentComponentId):v,g=l.displayName,x=g===void 0?(function(F){return Tc(F)?"styled.".concat(F):"Styled(".concat(iS(F),")")})(n):g,R=l.displayName&&l.componentId?"".concat($0(l.displayName),"-").concat(l.componentId):l.componentId||p,_=s&&c.attrs?c.attrs.concat(m).filter(Boolean):m,T=l.shouldForwardProp;if(s&&c.shouldForwardProp){var D=c.shouldForwardProp;if(l.shouldForwardProp){var C=l.shouldForwardProp;T=function(F,X){return D(F,X)&&C(F,X)}}else T=D}var k=new DS(r,R,s?c.componentStyle:void 0);function L(F,X){return(function(P,K,ut){var mt=P.attrs,st=P.componentStyle,ot=P.defaultProps,Dt=P.foldedComponentIds,De=P.styledComponentId,un=P.target,Zt=sn.useContext(wf),q=Xc(),Z=P.shouldForwardProp||q.shouldForwardProp,nt=fg(K,Zt,ot)||Ei,gt=(function(yt,it,Jt){for(var Et,ie=oe(oe({},it),{className:void 0,theme:Jt}),na=0;na<yt.length;na+=1){var on=Ri(Et=yt[na])?Et(ie):Et;for(var ze in on)ie[ze]=ze==="className"?Sa(ie[ze],on[ze]):ze==="style"?oe(oe({},ie[ze]),on[ze]):on[ze]}return it.className&&(ie.className=Sa(ie.className,it.className)),ie})(mt,K,nt),E=gt.as||un,G={};for(var V in gt)gt[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&gt.theme===nt||(V==="forwardedAs"?G.as=gt.forwardedAs:Z&&!Z(V,E)||(G[V]=gt[V]));var J=(function(yt,it){var Jt=Xc(),Et=yt.generateAndInjectStyles(it,Jt.styleSheet,Jt.stylis);return Et})(st,gt),et=Sa(Dt,De);return J&&(et+=" "+J),gt.className&&(et+=" "+gt.className),G[Tc(E)&&!dg.has(E)?"class":"className"]=et,ut&&(G.ref=ut),w.createElement(E,G)})($,F,X)}L.displayName=x;var $=sn.forwardRef(L);return $.attrs=_,$.componentStyle=k,$.displayName=x,$.shouldForwardProp=T,$.foldedComponentIds=s?Sa(c.foldedComponentIds,c.styledComponentId):"",$.styledComponentId=R,$.target=s?c.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=s?(function(X){for(var P=[],K=1;K<arguments.length;K++)P[K-1]=arguments[K];for(var ut=0,mt=P;ut<mt.length;ut++)Gc(X,mt[ut],!0);return X})({},c.defaultProps,F):F}}),Sf($,function(){return".".concat($.styledComponentId)}),f&&vg($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function W0(n,l){for(var r=[n[0]],s=0,c=l.length;s<c;s+=1)r.push(l[s],n[s+1]);return r}var I0=function(n){return Object.assign(n,{isCss:!0})};function Ef(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];if(Ri(n)||Yl(n))return I0(ta(W0(Ks,bi([n],l,!0))));var s=n;return l.length===0&&s.length===1&&typeof s[0]=="string"?ta(s):I0(ta(W0(s,l)))}function Kc(n,l,r){if(r===void 0&&(r=Ei),!l)throw Kl(1,l);var s=function(c){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(l,r,Ef.apply(void 0,bi([c],f,!1)))};return s.attrs=function(c){return Kc(n,l,oe(oe({},r),{attrs:Array.prototype.concat(r.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Kc(n,l,oe(oe({},r),c))},s}var Og=function(n){return Kc(zS,n)},A=Og;dg.forEach(function(n){A[n]=Og(n)});var MS=(function(){function n(l,r){this.rules=l,this.componentId=r,this.isStatic=Tg(l),_s.registerId(this.componentId+1)}return n.prototype.createStyles=function(l,r,s,c){var f=c(zs(ta(this.rules,r,s,c)),""),d=this.componentId+l;s.insertRules(d,d,f)},n.prototype.removeStyles=function(l,r){r.clearRules(this.componentId+l)},n.prototype.renderStyles=function(l,r,s,c){l>2&&_s.registerId(this.componentId+l),this.removeStyles(l,s),this.createStyles(l,r,s,c)},n})();function _S(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];var s=Ef.apply(void 0,bi([n],l,!1)),c="sc-global-".concat(bf(JSON.stringify(s))),f=new MS(s,c),d=function(v){var p=Xc(),g=sn.useContext(wf),x=sn.useRef(p.styleSheet.allocateGSInstance(c)).current;return p.styleSheet.server&&m(x,v,p.styleSheet,g,p.stylis),sn.useLayoutEffect(function(){if(!p.styleSheet.server)return m(x,v,p.styleSheet,g,p.stylis),function(){return f.removeStyles(x,p.styleSheet)}},[x,v,p.styleSheet,g,p.stylis]),null};function m(v,p,g,x,R){if(f.isStatic)f.renderStyles(v,tS,g,R);else{var _=oe(oe({},p),{theme:fg(p,x,d.defaultProps)});f.renderStyles(v,_,g,R)}}return sn.memo(d)}function Di(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];var s=zs(Ef.apply(void 0,bi([n],l,!1))),c=bf(s);return new wg(c,s)}const tt={primary:"rgba(28, 118, 207, 1)",secondary:"#fafafa;",accent:"#282828",mainBlue:"rgb(34, 132, 229)",mainDeepBlue:"rgba(28, 118, 207, 1);",mainLightBlue:"#0084ffff"},US=A.nav`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #fafafaf5;

`,NS=A.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  gap: 12px;
`,BS=A.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  gap: 48px;
`,Ac=A.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,LS=A.p`
  font-size: 28px;
  font-weight: 900;
  color: ${tt.primary};
  margin: 0;
  cursor: pointer;
`,Cc=A.img`
  width: 24px;
  height: 24px;
`,qS=A.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 16px; /* 아이콘과 검색창 사이 간격 */
`,HS=A.input`
  width: ${n=>n.open?"600px":"0"};
  opacity: ${n=>n.open?1:0};
  padding: ${n=>n.open?"0 12px":"0"};
  height: 36px;
  border-radius: 20px;
  border: ${n=>(n.open,"none")};
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
   box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
`,kS=A.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 1000;
  min-width: 180px;
  margin-top: 8px;
  animation: dropdownFadeIn 0.2s ease-out;
  
  @keyframes dropdownFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,tm=A.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
    color: ${tt.mainBlue};
  }
  
  &:active {
    background-color: #e9ecef;
  }
`,zi=A.div`
    margin: 0 auto;
    width: auto;
    display: flex;
    flex-direction: column;
    place-items: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 320px;
    max-width: 1280px;
`,YS=A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(28, 118, 207, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(28, 118, 207, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(28, 118, 207, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
`,QS=A.div`
    width: 100%;
    padding: 20px;
`;A.div`
    display: flex;
    flex-direction: row;
`;A.div`
    height: 100px;
    width: 10px;
`;const Ta=A.div.withConfig({shouldForwardProp:n=>!["h","w"].includes(n)})`
  height: ${({h:n})=>n?`${n}px`:"0"};
  width: ${({w:n})=>n?`${n}px`:"0"};
`,Vs=A.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
`,Mi=A.footer`
  margin-top: 60px;
  padding: 32px 20px;
  color: #666;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  z-index: 1;
`,GS=Di`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;Di`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;const $S=A.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  animation: ${GS} 0.3s ease-out;
  min-width: 300px;
  max-width: 400px;
  position: relative;
  overflow: hidden;

  ${({$type:n})=>{switch(n){case"success":return`
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          color: white;
          border-left: 4px solid #2E7D32;
        `;case"error":return`
          background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
          color: white;
          border-left: 4px solid #c62828;
        `;case"warning":return`
          background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
          color: white;
          border-left: 4px solid #ef6c00;
        `;case"info":return`
          background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
          color: white;
          border-left: 4px solid #1565C0;
        `;default:return`
          background: linear-gradient(135deg, #666 0%, #555 100%);
          color: white;
          border-left: 4px solid #444;
        `}}}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
  }
`,XS=A.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
`,KS=A.div`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  word-break: break-word;
`,VS=A.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background: rgba(255, 255, 255, 0.3);
  }
`,ZS=A.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,JS=({id:n,message:l,type:r,duration:s=3e3,onClose:c})=>(w.useEffect(()=>{const f=setTimeout(()=>{c(n)},s);return()=>clearTimeout(f)},[n,s,c]),y.jsxs($S,{$type:r,children:[y.jsxs(XS,{$type:r,children:[r==="success"&&"✓",r==="error"&&"✕",r==="warning"&&"⚠",r==="info"&&"ℹ"]}),y.jsx(KS,{children:l}),y.jsx(VS,{onClick:()=>c(n),children:"×"})]})),Ag=w.createContext(void 0),FS=({children:n})=>{const[l,r]=w.useState([]),s=w.useCallback(g=>{r(x=>x.filter(R=>R.id!==g))},[]),c=w.useCallback((g,x,R)=>{const T={id:Math.random().toString(36).substr(2,9),message:g,type:x,duration:R};r(D=>[...D,T])},[]),f=w.useCallback((g,x)=>{c(g,"success",x)},[c]),d=w.useCallback((g,x)=>{c(g,"error",x)},[c]),m=w.useCallback((g,x)=>{c(g,"warning",x)},[c]),v=w.useCallback((g,x)=>{c(g,"info",x)},[c]),p={showToast:c,showSuccess:f,showError:d,showWarning:m,showInfo:v};return y.jsxs(Ag.Provider,{value:p,children:[n,y.jsx(ZS,{children:l.map(g=>y.jsx(JS,{id:g.id,message:g.message,type:g.type,duration:g.duration,onClose:s},g.id))})]})},Vl=()=>{const n=w.useContext(Ag);if(n===void 0)throw new Error("useToast must be used within a ToastProvider");return n},PS=()=>{const n=je(),[l,r]=w.useState(!1),[s,c]=w.useState(""),[f,d]=w.useState(!1),m=w.useRef(null),{showToast:v}=Vl(),p=()=>{s&&(n(`/static/SearchPage/${s}`),c(""),r(!1))},g=T=>{T.key==="Enter"&&p()},x=()=>{d(T=>!T)},R=async()=>{const T="hcan1223@pusan.ac.kr";try{await navigator.clipboard.writeText(T),v("이메일 주소가 클립보드에 복사되었습니다","success")}catch{v(`버그 제보 이메일: ${T}`,"info")}d(!1)},_=()=>{window.open("https://github.com/patkrdj/Capstone","_blank"),d(!1)};return w.useEffect(()=>{const T=D=>{m.current&&!m.current.contains(D.target)&&d(!1)};return f&&document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[f]),y.jsx(zi,{children:y.jsxs(US,{children:[y.jsx(NS,{children:y.jsx(LS,{onClick:()=>n("/static/"),children:"L.B"})}),y.jsxs(BS,{children:[y.jsxs(qS,{children:[y.jsx(HS,{type:"text",value:s,onChange:T=>c(T.target.value),placeholder:"검색어 입력 후 Enter",onKeyDown:g,open:l}),y.jsx(Ac,{onClick:()=>r(T=>!T),children:y.jsx(Cc,{src:zx,alt:"search"})})]}),y.jsx(Ac,{onClick:()=>n("/static/My"),children:y.jsx(Cc,{src:Mx,alt:"my"})}),y.jsxs(Ac,{ref:m,onClick:x,style:{position:"relative"},children:[y.jsx(Cc,{src:_x,alt:"menu"}),f&&y.jsxs(kS,{children:[y.jsx(tm,{onClick:R,children:"버그 제보하기"}),y.jsx(tm,{onClick:_,children:"깃허브 페이지"})]})]})]})]})})},Cg=A.div`
  position: relative;
  width: 100%;
  padding: 10px;
`,jg=A.div`
  display: flex;               /* 한 줄로 나열 */
  gap: 32px;                   /* 카드 사이 간격 */
  overflow-x: auto;            /* 가로 스크롤 */
  scroll-behavior: smooth;     /* 부드럽게 이동 */
  flex-direction: row; /* 기본값 */
  align-items: center;     /* 세로 가운데 */
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`,Us=A.button.withConfig({shouldForwardProp:n=>!["left"].includes(n)})`
  position: absolute;
  top: 0;
  bottom: 0;
  ${n=>n.left?"left: 0;":"right: 0;"}
  width: 50px;
  background: linear-gradient(90deg, ${n=>n.left?"rgba(28, 118, 207, 0.1)":"transparent"}, ${n=>n.left?"transparent":"rgba(28, 118, 207, 0.1)"});
  border: none;
  cursor: pointer;
  font-size: 20px;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  color: ${tt.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  &:hover {
    background: linear-gradient(90deg, ${n=>n.left?"rgba(28, 118, 207, 0.2)":"transparent"}, ${n=>n.left?"transparent":"rgba(28, 118, 207, 0.2)"});
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(28, 118, 207, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`,Dg=A.div`
  padding : 0px 5px;

`,zg=A.button`
  background: white;
  color: ${tt.mainBlue};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 18px;
  border: 2.5px solid ${tt.mainBlue};
  border-radius: 25px 30% 24px 52%; 
  cursor: pointer;
  transition: all 0.25s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${tt.mainBlue};
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`,Ti=A.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;    /* 가운데 정렬 */
  gap: 16px;              /* 버튼 사이 간격 */
  justify-content: center;/* 화면 세로 가운데 */
  padding: 30px;
`,Mg=A.div`
  background-color: white;
  margin-bottom: 24px;
  width: 100%;
  height: 332px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {
    height: 432px;
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    transform: translateY(-4px);
    
    &::before {
      left: 100%;
    }
  }
`,_g=A.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 132, 255, 0.6);
  color: #fff;
  padding: 20px 12px 12px 12px;
  box-sizing: border-box;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;

  mask-image: linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
`,WS=A.div`
  flex: 0 0 220px;            /* 기본 너비 */
  height: 300px;              /* 기본 높이 */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  user-select: none;          /* 드래그 시 텍스트 선택 방지 */

  &:hover {
    flex: 0 0 300px;          /* hover 시 너비 증가 */
    height: 390px;            /* hover 시 높이 증가 */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }

  &:hover ${_g} {
    transform: translateY(0);
    opacity: 1;
  }
`,IS=A.div`
  width: 100%;
  position: relative;
  padding-top: 150%; /* 1:1 비율 */
  overflow: hidden;
`,t2=A.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease;

`,e2=A.h3`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
`,n2=A.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`,a2=A.span`
  font-size: 12px;
  color: #fff;
`,i2=A.span`
  font-size: 12px;
  color: #ddd;
`,l2=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,r2=A.span`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;function Ug({product:n}){const l=je(),r=()=>{l(`/static/DetailPage/${n.movieId}`,{state:{product:n}})};return y.jsxs(WS,{onClick:r,children:[y.jsx(IS,{children:y.jsx(t2,{src:n.imageLink??"",alt:n.blurayTitle??""})}),y.jsxs(_g,{children:[y.jsx(e2,{children:n.blurayTitle}),y.jsxs(l2,{children:[y.jsxs(n2,{children:[n.price?.toLocaleString(),"원"]}),y.jsxs(a2,{children:[" 해상도 : ",n.quality]})]}),n.isLimitedEdition&&y.jsx(r2,{children:"한정판!"}),y.jsx(i2,{children:n.siteName})]})]})}var _i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},s2={setTimeout:(n,l)=>setTimeout(n,l),clearTimeout:n=>clearTimeout(n),setInterval:(n,l)=>setInterval(n,l),clearInterval:n=>clearInterval(n)},u2=class{#t=s2;#e=!1;setTimeoutProvider(n){this.#t=n}setTimeout(n,l){return this.#t.setTimeout(n,l)}clearTimeout(n){this.#t.clearTimeout(n)}setInterval(n,l){return this.#t.setInterval(n,l)}clearInterval(n){this.#t.clearInterval(n)}},wa=new u2;function o2(n){setTimeout(n,0)}var Aa=typeof window>"u"||"Deno"in globalThis;function fe(){}function c2(n,l){return typeof n=="function"?n(l):n}function Vc(n){return typeof n=="number"&&n>=0&&n!==1/0}function Ng(n,l){return Math.max(n+(l||0)-Date.now(),0)}function ea(n,l){return typeof n=="function"?n(l):n}function Ye(n,l){return typeof n=="function"?n(l):n}function em(n,l){const{type:r="all",exact:s,fetchStatus:c,predicate:f,queryKey:d,stale:m}=n;if(d){if(s){if(l.queryHash!==Rf(d,l.options))return!1}else if(!Ql(l.queryKey,d))return!1}if(r!=="all"){const v=l.isActive();if(r==="active"&&!v||r==="inactive"&&v)return!1}return!(typeof m=="boolean"&&l.isStale()!==m||c&&c!==l.state.fetchStatus||f&&!f(l))}function nm(n,l){const{exact:r,status:s,predicate:c,mutationKey:f}=n;if(f){if(!l.options.mutationKey)return!1;if(r){if(Ca(l.options.mutationKey)!==Ca(f))return!1}else if(!Ql(l.options.mutationKey,f))return!1}return!(s&&l.state.status!==s||c&&!c(l))}function Rf(n,l){return(l?.queryKeyHashFn||Ca)(n)}function Ca(n){return JSON.stringify(n,(l,r)=>Zc(r)?Object.keys(r).sort().reduce((s,c)=>(s[c]=r[c],s),{}):r)}function Ql(n,l){return n===l?!0:typeof n!=typeof l?!1:n&&l&&typeof n=="object"&&typeof l=="object"?Object.keys(l).every(r=>Ql(n[r],l[r])):!1}var f2=Object.prototype.hasOwnProperty;function Bg(n,l){if(n===l)return n;const r=am(n)&&am(l);if(!r&&!(Zc(n)&&Zc(l)))return l;const c=(r?n:Object.keys(n)).length,f=r?l:Object.keys(l),d=f.length,m=r?new Array(d):{};let v=0;for(let p=0;p<d;p++){const g=r?p:f[p],x=n[g],R=l[g];if(x===R){m[g]=x,(r?p<c:f2.call(n,g))&&v++;continue}if(x===null||R===null||typeof x!="object"||typeof R!="object"){m[g]=R;continue}const _=Bg(x,R);m[g]=_,_===x&&v++}return c===d&&v===c?n:m}function Ns(n,l){if(!l||Object.keys(n).length!==Object.keys(l).length)return!1;for(const r in n)if(n[r]!==l[r])return!1;return!0}function am(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Zc(n){if(!im(n))return!1;const l=n.constructor;if(l===void 0)return!0;const r=l.prototype;return!(!im(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function im(n){return Object.prototype.toString.call(n)==="[object Object]"}function d2(n){return new Promise(l=>{wa.setTimeout(l,n)})}function Jc(n,l,r){return typeof r.structuralSharing=="function"?r.structuralSharing(n,l):r.structuralSharing!==!1?Bg(n,l):l}function h2(n,l,r=0){const s=[...n,l];return r&&s.length>r?s.slice(1):s}function p2(n,l,r=0){const s=[l,...n];return r&&s.length>r?s.slice(0,-1):s}var Tf=Symbol();function Lg(n,l){return!n.queryFn&&l?.initialPromise?()=>l.initialPromise:!n.queryFn||n.queryFn===Tf?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}function qg(n,l){return typeof n=="function"?n(...l):!!n}var m2=class extends _i{#t;#e;#n;constructor(){super(),this.#n=n=>{if(!Aa&&window.addEventListener){const l=()=>n();return window.addEventListener("visibilitychange",l,!1),()=>{window.removeEventListener("visibilitychange",l)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(n){this.#n=n,this.#e?.(),this.#e=n(l=>{typeof l=="boolean"?this.setFocused(l):this.onFocus()})}setFocused(n){this.#t!==n&&(this.#t=n,this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(l=>{l(n)})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}},Of=new m2;function Fc(){let n,l;const r=new Promise((c,f)=>{n=c,l=f});r.status="pending",r.catch(()=>{});function s(c){Object.assign(r,c),delete r.resolve,delete r.reject}return r.resolve=c=>{s({status:"fulfilled",value:c}),n(c)},r.reject=c=>{s({status:"rejected",reason:c}),l(c)},r}var g2=o2;function y2(){let n=[],l=0,r=m=>{m()},s=m=>{m()},c=g2;const f=m=>{l?n.push(m):c(()=>{r(m)})},d=()=>{const m=n;n=[],m.length&&c(()=>{s(()=>{m.forEach(v=>{r(v)})})})};return{batch:m=>{let v;l++;try{v=m()}finally{l--,l||d()}return v},batchCalls:m=>(...v)=>{f(()=>{m(...v)})},schedule:f,setNotifyFunction:m=>{r=m},setBatchNotifyFunction:m=>{s=m},setScheduler:m=>{c=m}}}var Vt=y2(),v2=class extends _i{#t=!0;#e;#n;constructor(){super(),this.#n=n=>{if(!Aa&&window.addEventListener){const l=()=>n(!0),r=()=>n(!1);return window.addEventListener("online",l,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(n){this.#n=n,this.#e?.(),this.#e=n(this.setOnline.bind(this))}setOnline(n){this.#t!==n&&(this.#t=n,this.listeners.forEach(r=>{r(n)}))}isOnline(){return this.#t}},Bs=new v2;function b2(n){return Math.min(1e3*2**n,3e4)}function Hg(n){return(n??"online")==="online"?Bs.isOnline():!0}var Pc=class extends Error{constructor(n){super("CancelledError"),this.revert=n?.revert,this.silent=n?.silent}};function kg(n){let l=!1,r=0,s;const c=Fc(),f=()=>c.status!=="pending",d=D=>{if(!f()){const C=new Pc(D);R(C),n.onCancel?.(C)}},m=()=>{l=!0},v=()=>{l=!1},p=()=>Of.isFocused()&&(n.networkMode==="always"||Bs.isOnline())&&n.canRun(),g=()=>Hg(n.networkMode)&&n.canRun(),x=D=>{f()||(s?.(),c.resolve(D))},R=D=>{f()||(s?.(),c.reject(D))},_=()=>new Promise(D=>{s=C=>{(f()||p())&&D(C)},n.onPause?.()}).then(()=>{s=void 0,f()||n.onContinue?.()}),T=()=>{if(f())return;let D;const C=r===0?n.initialPromise:void 0;try{D=C??n.fn()}catch(k){D=Promise.reject(k)}Promise.resolve(D).then(x).catch(k=>{if(f())return;const L=n.retry??(Aa?0:3),$=n.retryDelay??b2,F=typeof $=="function"?$(r,k):$,X=L===!0||typeof L=="number"&&r<L||typeof L=="function"&&L(r,k);if(l||!X){R(k);return}r++,n.onFail?.(r,k),d2(F).then(()=>p()?void 0:_()).then(()=>{l?R(k):T()})})};return{promise:c,status:()=>c.status,cancel:d,continue:()=>(s?.(),c),cancelRetry:m,continueRetry:v,canStart:g,start:()=>(g()?T():_().then(T),c)}}var Yg=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Vc(this.gcTime)&&(this.#t=wa.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Aa?1/0:300*1e3))}clearGcTimeout(){this.#t&&(wa.clearTimeout(this.#t),this.#t=void 0)}},x2=class extends Yg{#t;#e;#n;#a;#i;#r;#s;constructor(n){super(),this.#s=!1,this.#r=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.#a=n.client,this.#n=this.#a.getQueryCache(),this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.#t=lm(this.options),this.state=n.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(n){if(this.options={...this.#r,...n},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const l=lm(this.options);l.data!==void 0&&(this.setData(l.data,{updatedAt:l.dataUpdatedAt,manual:!0}),this.#t=l)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(n,l){const r=Jc(this.state.data,n,this.options);return this.#l({data:r,type:"success",dataUpdatedAt:l?.updatedAt,manual:l?.manual}),r}setState(n,l){this.#l({type:"setState",state:n,setStateOptions:l})}cancel(n){const l=this.#i?.promise;return this.#i?.cancel(n),l?l.then(fe).catch(fe):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(n=>Ye(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Tf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>ea(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!Ng(this.state.dataUpdatedAt,n)}onFocus(){this.observers.find(l=>l.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(l=>l.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(l=>l!==n),this.observers.length||(this.#i&&(this.#s?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}async fetch(n,l){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&l?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(n&&this.setOptions(n),!this.options.queryFn){const m=this.observers.find(v=>v.options.queryFn);m&&this.setOptions(m.options)}const r=new AbortController,s=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(this.#s=!0,r.signal)})},c=()=>{const m=Lg(this.options,l),p=(()=>{const g={client:this.#a,queryKey:this.queryKey,meta:this.meta};return s(g),g})();return this.#s=!1,this.options.persister?this.options.persister(m,p,this):m(p)},d=(()=>{const m={fetchOptions:l,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:c};return s(m),m})();this.options.behavior?.onFetch(d,this),this.#e=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==d.fetchOptions?.meta)&&this.#l({type:"fetch",meta:d.fetchOptions?.meta}),this.#i=kg({initialPromise:l?.initialPromise,fn:d.fetchFn,onCancel:m=>{m instanceof Pc&&m.revert&&this.setState({...this.#e,fetchStatus:"idle"}),r.abort()},onFail:(m,v)=>{this.#l({type:"failed",failureCount:m,error:v})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0});try{const m=await this.#i.start();if(m===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(m),this.#n.config.onSuccess?.(m,this),this.#n.config.onSettled?.(m,this.state.error,this),m}catch(m){if(m instanceof Pc){if(m.silent)return this.#i.promise;if(m.revert){if(this.state.data===void 0)throw m;return this.state.data}}throw this.#l({type:"error",error:m}),this.#n.config.onError?.(m,this),this.#n.config.onSettled?.(this.state.data,m,this),m}finally{this.scheduleGc()}}#l(n){const l=r=>{switch(n.type){case"failed":return{...r,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Qg(r.data,this.options),fetchMeta:n.meta??null};case"success":const s={...r,data:n.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#e=n.manual?s:void 0,s;case"error":const c=n.error;return{...r,error:c,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...n.state}}};this.state=l(this.state),Vt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:n})})}};function Qg(n,l){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Hg(l.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function lm(n){const l=typeof n.initialData=="function"?n.initialData():n.initialData,r=l!==void 0,s=r?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:l,dataUpdateCount:0,dataUpdatedAt:r?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var Gg=class extends _i{constructor(n,l){super(),this.options=l,this.#t=n,this.#l=null,this.#s=Fc(),this.bindMethods(),this.setOptions(l)}#t;#e=void 0;#n=void 0;#a=void 0;#i;#r;#s;#l;#m;#d;#h;#o;#c;#u;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),rm(this.#e,this.options)?this.#f():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Wc(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Wc(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#x(),this.#S(),this.#e.removeObserver(this)}setOptions(n){const l=this.options,r=this.#e;if(this.options=this.#t.defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Ye(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#e.setOptions(this.options),l._defaulted&&!Ns(this.options,l)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const s=this.hasListeners();s&&sm(this.#e,r,this.options,l)&&this.#f(),this.updateResult(),s&&(this.#e!==r||Ye(this.options.enabled,this.#e)!==Ye(l.enabled,this.#e)||ea(this.options.staleTime,this.#e)!==ea(l.staleTime,this.#e))&&this.#g();const c=this.#y();s&&(this.#e!==r||Ye(this.options.enabled,this.#e)!==Ye(l.enabled,this.#e)||c!==this.#u)&&this.#v(c)}getOptimisticResult(n){const l=this.#t.getQueryCache().build(this.#t,n),r=this.createResult(l,n);return w2(this,r)&&(this.#a=r,this.#r=this.options,this.#i=this.#e.state),r}getCurrentResult(){return this.#a}trackResult(n,l){return new Proxy(n,{get:(r,s)=>(this.trackProp(s),l?.(s),s==="promise"&&!this.options.experimental_prefetchInRender&&this.#s.status==="pending"&&this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),Reflect.get(r,s))})}trackProp(n){this.#p.add(n)}getCurrentQuery(){return this.#e}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const l=this.#t.defaultQueryOptions(n),r=this.#t.getQueryCache().build(this.#t,l);return r.fetch().then(()=>this.createResult(r,l))}fetch(n){return this.#f({...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#f(n){this.#w();let l=this.#e.fetch(this.options,n);return n?.throwOnError||(l=l.catch(fe)),l}#g(){this.#x();const n=ea(this.options.staleTime,this.#e);if(Aa||this.#a.isStale||!Vc(n))return;const r=Ng(this.#a.dataUpdatedAt,n)+1;this.#o=wa.setTimeout(()=>{this.#a.isStale||this.updateResult()},r)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(n){this.#S(),this.#u=n,!(Aa||Ye(this.options.enabled,this.#e)===!1||!Vc(this.#u)||this.#u===0)&&(this.#c=wa.setInterval(()=>{(this.options.refetchIntervalInBackground||Of.isFocused())&&this.#f()},this.#u))}#b(){this.#g(),this.#v(this.#y())}#x(){this.#o&&(wa.clearTimeout(this.#o),this.#o=void 0)}#S(){this.#c&&(wa.clearInterval(this.#c),this.#c=void 0)}createResult(n,l){const r=this.#e,s=this.options,c=this.#a,f=this.#i,d=this.#r,v=n!==r?n.state:this.#n,{state:p}=n;let g={...p},x=!1,R;if(l._optimisticResults){const ut=this.hasListeners(),mt=!ut&&rm(n,l),st=ut&&sm(n,r,l,s);(mt||st)&&(g={...g,...Qg(p.data,n.options)}),l._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:_,errorUpdatedAt:T,status:D}=g;R=g.data;let C=!1;if(l.placeholderData!==void 0&&R===void 0&&D==="pending"){let ut;c?.isPlaceholderData&&l.placeholderData===d?.placeholderData?(ut=c.data,C=!0):ut=typeof l.placeholderData=="function"?l.placeholderData(this.#h?.state.data,this.#h):l.placeholderData,ut!==void 0&&(D="success",R=Jc(c?.data,ut,l),x=!0)}if(l.select&&R!==void 0&&!C)if(c&&R===f?.data&&l.select===this.#m)R=this.#d;else try{this.#m=l.select,R=l.select(R),R=Jc(c?.data,R,l),this.#d=R,this.#l=null}catch(ut){this.#l=ut}this.#l&&(_=this.#l,R=this.#d,T=Date.now(),D="error");const k=g.fetchStatus==="fetching",L=D==="pending",$=D==="error",F=L&&k,X=R!==void 0,K={status:D,fetchStatus:g.fetchStatus,isPending:L,isSuccess:D==="success",isError:$,isInitialLoading:F,isLoading:F,data:R,dataUpdatedAt:g.dataUpdatedAt,error:_,errorUpdatedAt:T,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>v.dataUpdateCount||g.errorUpdateCount>v.errorUpdateCount,isFetching:k,isRefetching:k&&!L,isLoadingError:$&&!X,isPaused:g.fetchStatus==="paused",isPlaceholderData:x,isRefetchError:$&&X,isStale:Af(n,l),refetch:this.refetch,promise:this.#s,isEnabled:Ye(l.enabled,n)!==!1};if(this.options.experimental_prefetchInRender){const ut=ot=>{K.status==="error"?ot.reject(K.error):K.data!==void 0&&ot.resolve(K.data)},mt=()=>{const ot=this.#s=K.promise=Fc();ut(ot)},st=this.#s;switch(st.status){case"pending":n.queryHash===r.queryHash&&ut(st);break;case"fulfilled":(K.status==="error"||K.data!==st.value)&&mt();break;case"rejected":(K.status!=="error"||K.error!==st.reason)&&mt();break}}return K}updateResult(){const n=this.#a,l=this.createResult(this.#e,this.options);if(this.#i=this.#e.state,this.#r=this.options,this.#i.data!==void 0&&(this.#h=this.#e),Ns(l,n))return;this.#a=l;const r=()=>{if(!n)return!0;const{notifyOnChangeProps:s}=this.options,c=typeof s=="function"?s():s;if(c==="all"||!c&&!this.#p.size)return!0;const f=new Set(c??this.#p);return this.options.throwOnError&&f.add("error"),Object.keys(this.#a).some(d=>{const m=d;return this.#a[m]!==n[m]&&f.has(m)})};this.#E({listeners:r()})}#w(){const n=this.#t.getQueryCache().build(this.#t,this.options);if(n===this.#e)return;const l=this.#e;this.#e=n,this.#n=n.state,this.hasListeners()&&(l?.removeObserver(this),n.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#E(n){Vt.batch(()=>{n.listeners&&this.listeners.forEach(l=>{l(this.#a)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function S2(n,l){return Ye(l.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&l.retryOnMount===!1)}function rm(n,l){return S2(n,l)||n.state.data!==void 0&&Wc(n,l,l.refetchOnMount)}function Wc(n,l,r){if(Ye(l.enabled,n)!==!1&&ea(l.staleTime,n)!=="static"){const s=typeof r=="function"?r(n):r;return s==="always"||s!==!1&&Af(n,l)}return!1}function sm(n,l,r,s){return(n!==l||Ye(s.enabled,n)===!1)&&(!r.suspense||n.state.status!=="error")&&Af(n,r)}function Af(n,l){return Ye(l.enabled,n)!==!1&&n.isStaleByTime(ea(l.staleTime,n))}function w2(n,l){return!Ns(n.getCurrentResult(),l)}function um(n){return{onFetch:(l,r)=>{const s=l.options,c=l.fetchOptions?.meta?.fetchMore?.direction,f=l.state.data?.pages||[],d=l.state.data?.pageParams||[];let m={pages:[],pageParams:[]},v=0;const p=async()=>{let g=!1;const x=T=>{Object.defineProperty(T,"signal",{enumerable:!0,get:()=>(l.signal.aborted?g=!0:l.signal.addEventListener("abort",()=>{g=!0}),l.signal)})},R=Lg(l.options,l.fetchOptions),_=async(T,D,C)=>{if(g)return Promise.reject();if(D==null&&T.pages.length)return Promise.resolve(T);const L=(()=>{const P={client:l.client,queryKey:l.queryKey,pageParam:D,direction:C?"backward":"forward",meta:l.options.meta};return x(P),P})(),$=await R(L),{maxPages:F}=l.options,X=C?p2:h2;return{pages:X(T.pages,$,F),pageParams:X(T.pageParams,D,F)}};if(c&&f.length){const T=c==="backward",D=T?E2:om,C={pages:f,pageParams:d},k=D(s,C);m=await _(C,k,T)}else{const T=n??f.length;do{const D=v===0?d[0]??s.initialPageParam:om(s,m);if(v>0&&D==null)break;m=await _(m,D),v++}while(v<T)}return m};l.options.persister?l.fetchFn=()=>l.options.persister?.(p,{client:l.client,queryKey:l.queryKey,meta:l.options.meta,signal:l.signal},r):l.fetchFn=p}}}function om(n,{pages:l,pageParams:r}){const s=l.length-1;return l.length>0?n.getNextPageParam(l[s],l,r[s],r):void 0}function E2(n,{pages:l,pageParams:r}){return l.length>0?n.getPreviousPageParam?.(l[0],l,r[0],r):void 0}var R2=class extends Yg{#t;#e;#n;constructor(n){super(),this.mutationId=n.mutationId,this.#e=n.mutationCache,this.#t=[],this.state=n.state||$g(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){this.#t.includes(n)||(this.#t.push(n),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){this.#t=this.#t.filter(l=>l!==n),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#e.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(n){const l=()=>{this.#a({type:"continue"})};this.#n=kg({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(c,f)=>{this.#a({type:"failed",failureCount:c,error:f})},onPause:()=>{this.#a({type:"pause"})},onContinue:l,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});const r=this.state.status==="pending",s=!this.#n.canStart();try{if(r)l();else{this.#a({type:"pending",variables:n,isPaused:s}),await this.#e.config.onMutate?.(n,this);const f=await this.options.onMutate?.(n);f!==this.state.context&&this.#a({type:"pending",context:f,variables:n,isPaused:s})}const c=await this.#n.start();return await this.#e.config.onSuccess?.(c,n,this.state.context,this),await this.options.onSuccess?.(c,n,this.state.context),await this.#e.config.onSettled?.(c,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(c,null,n,this.state.context),this.#a({type:"success",data:c}),c}catch(c){try{throw await this.#e.config.onError?.(c,n,this.state.context,this),await this.options.onError?.(c,n,this.state.context),await this.#e.config.onSettled?.(void 0,c,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,c,n,this.state.context),c}finally{this.#a({type:"error",error:c})}}finally{this.#e.runNext(this)}}#a(n){const l=r=>{switch(n.type){case"failed":return{...r,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...r,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:n.error,failureCount:r.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=l(this.state),Vt.batch(()=>{this.#t.forEach(r=>{r.onMutationUpdate(n)}),this.#e.notify({mutation:this,type:"updated",action:n})})}};function $g(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var T2=class extends _i{constructor(n={}){super(),this.config=n,this.#t=new Set,this.#e=new Map,this.#n=0}#t;#e;#n;build(n,l,r){const s=new R2({mutationCache:this,mutationId:++this.#n,options:n.defaultMutationOptions(l),state:r});return this.add(s),s}add(n){this.#t.add(n);const l=gs(n);if(typeof l=="string"){const r=this.#e.get(l);r?r.push(n):this.#e.set(l,[n])}this.notify({type:"added",mutation:n})}remove(n){if(this.#t.delete(n)){const l=gs(n);if(typeof l=="string"){const r=this.#e.get(l);if(r)if(r.length>1){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}else r[0]===n&&this.#e.delete(l)}}this.notify({type:"removed",mutation:n})}canRun(n){const l=gs(n);if(typeof l=="string"){const s=this.#e.get(l)?.find(c=>c.state.status==="pending");return!s||s===n}else return!0}runNext(n){const l=gs(n);return typeof l=="string"?this.#e.get(l)?.find(s=>s!==n&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Vt.batch(()=>{this.#t.forEach(n=>{this.notify({type:"removed",mutation:n})}),this.#t.clear(),this.#e.clear()})}getAll(){return Array.from(this.#t)}find(n){const l={exact:!0,...n};return this.getAll().find(r=>nm(l,r))}findAll(n={}){return this.getAll().filter(l=>nm(n,l))}notify(n){Vt.batch(()=>{this.listeners.forEach(l=>{l(n)})})}resumePausedMutations(){const n=this.getAll().filter(l=>l.state.isPaused);return Vt.batch(()=>Promise.all(n.map(l=>l.continue().catch(fe))))}};function gs(n){return n.options.scope?.id}var O2=class extends _i{#t;#e=void 0;#n;#a;constructor(l,r){super(),this.#t=l,this.setOptions(r),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(l){const r=this.options;this.options=this.#t.defaultMutationOptions(l),Ns(this.options,r)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),r?.mutationKey&&this.options.mutationKey&&Ca(r.mutationKey)!==Ca(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(l){this.#i(),this.#r(l)}getCurrentResult(){return this.#e}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#r()}mutate(l,r){return this.#a=r,this.#n?.removeObserver(this),this.#n=this.#t.getMutationCache().build(this.#t,this.options),this.#n.addObserver(this),this.#n.execute(l)}#i(){const l=this.#n?.state??$g();this.#e={...l,isPending:l.status==="pending",isSuccess:l.status==="success",isError:l.status==="error",isIdle:l.status==="idle",mutate:this.mutate,reset:this.reset}}#r(l){Vt.batch(()=>{if(this.#a&&this.hasListeners()){const r=this.#e.variables,s=this.#e.context;l?.type==="success"?(this.#a.onSuccess?.(l.data,r,s),this.#a.onSettled?.(l.data,null,r,s)):l?.type==="error"&&(this.#a.onError?.(l.error,r,s),this.#a.onSettled?.(void 0,l.error,r,s))}this.listeners.forEach(r=>{r(this.#e)})})}},A2=class extends _i{constructor(n={}){super(),this.config=n,this.#t=new Map}#t;build(n,l,r){const s=l.queryKey,c=l.queryHash??Rf(s,l);let f=this.get(c);return f||(f=new x2({client:n,queryKey:s,queryHash:c,options:n.defaultQueryOptions(l),state:r,defaultOptions:n.getQueryDefaults(s)}),this.add(f)),f}add(n){this.#t.has(n.queryHash)||(this.#t.set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const l=this.#t.get(n.queryHash);l&&(n.destroy(),l===n&&this.#t.delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Vt.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return this.#t.get(n)}getAll(){return[...this.#t.values()]}find(n){const l={exact:!0,...n};return this.getAll().find(r=>em(l,r))}findAll(n={}){const l=this.getAll();return Object.keys(n).length>0?l.filter(r=>em(n,r)):l}notify(n){Vt.batch(()=>{this.listeners.forEach(l=>{l(n)})})}onFocus(){Vt.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Vt.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},C2=class{#t;#e;#n;#a;#i;#r;#s;#l;constructor(n={}){this.#t=n.queryCache||new A2,this.#e=n.mutationCache||new T2,this.#n=n.defaultOptions||{},this.#a=new Map,this.#i=new Map,this.#r=0}mount(){this.#r++,this.#r===1&&(this.#s=Of.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#t.onFocus())}),this.#l=Bs.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#r--,this.#r===0&&(this.#s?.(),this.#s=void 0,this.#l?.(),this.#l=void 0)}isFetching(n){return this.#t.findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return this.#e.findAll({...n,status:"pending"}).length}getQueryData(n){const l=this.defaultQueryOptions({queryKey:n});return this.#t.get(l.queryHash)?.state.data}ensureQueryData(n){const l=this.defaultQueryOptions(n),r=this.#t.build(this,l),s=r.state.data;return s===void 0?this.fetchQuery(n):(n.revalidateIfStale&&r.isStaleByTime(ea(l.staleTime,r))&&this.prefetchQuery(l),Promise.resolve(s))}getQueriesData(n){return this.#t.findAll(n).map(({queryKey:l,state:r})=>{const s=r.data;return[l,s]})}setQueryData(n,l,r){const s=this.defaultQueryOptions({queryKey:n}),f=this.#t.get(s.queryHash)?.state.data,d=c2(l,f);if(d!==void 0)return this.#t.build(this,s).setData(d,{...r,manual:!0})}setQueriesData(n,l,r){return Vt.batch(()=>this.#t.findAll(n).map(({queryKey:s})=>[s,this.setQueryData(s,l,r)]))}getQueryState(n){const l=this.defaultQueryOptions({queryKey:n});return this.#t.get(l.queryHash)?.state}removeQueries(n){const l=this.#t;Vt.batch(()=>{l.findAll(n).forEach(r=>{l.remove(r)})})}resetQueries(n,l){const r=this.#t;return Vt.batch(()=>(r.findAll(n).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...n},l)))}cancelQueries(n,l={}){const r={revert:!0,...l},s=Vt.batch(()=>this.#t.findAll(n).map(c=>c.cancel(r)));return Promise.all(s).then(fe).catch(fe)}invalidateQueries(n,l={}){return Vt.batch(()=>(this.#t.findAll(n).forEach(r=>{r.invalidate()}),n?.refetchType==="none"?Promise.resolve():this.refetchQueries({...n,type:n?.refetchType??n?.type??"active"},l)))}refetchQueries(n,l={}){const r={...l,cancelRefetch:l.cancelRefetch??!0},s=Vt.batch(()=>this.#t.findAll(n).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let f=c.fetch(void 0,r);return r.throwOnError||(f=f.catch(fe)),c.state.fetchStatus==="paused"?Promise.resolve():f}));return Promise.all(s).then(fe)}fetchQuery(n){const l=this.defaultQueryOptions(n);l.retry===void 0&&(l.retry=!1);const r=this.#t.build(this,l);return r.isStaleByTime(ea(l.staleTime,r))?r.fetch(l):Promise.resolve(r.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(fe).catch(fe)}fetchInfiniteQuery(n){return n.behavior=um(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(fe).catch(fe)}ensureInfiniteQueryData(n){return n.behavior=um(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Bs.isOnline()?this.#e.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#n}setDefaultOptions(n){this.#n=n}setQueryDefaults(n,l){this.#a.set(Ca(n),{queryKey:n,defaultOptions:l})}getQueryDefaults(n){const l=[...this.#a.values()],r={};return l.forEach(s=>{Ql(n,s.queryKey)&&Object.assign(r,s.defaultOptions)}),r}setMutationDefaults(n,l){this.#i.set(Ca(n),{mutationKey:n,defaultOptions:l})}getMutationDefaults(n){const l=[...this.#i.values()],r={};return l.forEach(s=>{Ql(n,s.mutationKey)&&Object.assign(r,s.defaultOptions)}),r}defaultQueryOptions(n){if(n._defaulted)return n;const l={...this.#n.queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return l.queryHash||(l.queryHash=Rf(l.queryKey,l)),l.refetchOnReconnect===void 0&&(l.refetchOnReconnect=l.networkMode!=="always"),l.throwOnError===void 0&&(l.throwOnError=!!l.suspense),!l.networkMode&&l.persister&&(l.networkMode="offlineFirst"),l.queryFn===Tf&&(l.enabled=!1),l}defaultMutationOptions(n){return n?._defaulted?n:{...this.#n.mutations,...n?.mutationKey&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){this.#t.clear(),this.#e.clear()}},Xg=w.createContext(void 0),Cf=n=>{const l=w.useContext(Xg);if(!l)throw new Error("No QueryClient set, use QueryClientProvider to set one");return l},j2=({client:n,children:l})=>(w.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),y.jsx(Xg.Provider,{value:n,children:l})),Kg=w.createContext(!1),D2=()=>w.useContext(Kg);Kg.Provider;function z2(){let n=!1;return{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n}}var M2=w.createContext(z2()),_2=()=>w.useContext(M2),U2=(n,l)=>{(n.suspense||n.throwOnError||n.experimental_prefetchInRender)&&(l.isReset()||(n.retryOnMount=!1))},N2=n=>{w.useEffect(()=>{n.clearReset()},[n])},B2=({result:n,errorResetBoundary:l,throwOnError:r,query:s,suspense:c})=>n.isError&&!l.isReset()&&!n.isFetching&&s&&(c&&n.data===void 0||qg(r,[n.error,s])),L2=(n,l)=>l.state.data===void 0,q2=n=>{if(n.suspense){const r=c=>c==="static"?c:Math.max(c??1e3,1e3),s=n.staleTime;n.staleTime=typeof s=="function"?(...c)=>r(s(...c)):r(s),typeof n.gcTime=="number"&&(n.gcTime=Math.max(n.gcTime,1e3))}},H2=(n,l)=>n.isLoading&&n.isFetching&&!l,k2=(n,l)=>n?.suspense&&l.isPending,cm=(n,l,r)=>l.fetchOptimistic(n).catch(()=>{r.clearReset()});function Vg(n,l,r){const s=D2(),c=_2(),f=Cf(),d=f.defaultQueryOptions(n);f.getDefaultOptions().queries?._experimental_beforeQuery?.(d),d._optimisticResults=s?"isRestoring":"optimistic",q2(d),U2(d,c),N2(c);const m=!f.getQueryCache().get(d.queryHash),[v]=w.useState(()=>new l(f,d)),p=v.getOptimisticResult(d),g=!s&&n.subscribed!==!1;if(w.useSyncExternalStore(w.useCallback(x=>{const R=g?v.subscribe(Vt.batchCalls(x)):fe;return v.updateResult(),R},[v,g]),()=>v.getCurrentResult(),()=>v.getCurrentResult()),w.useEffect(()=>{v.setOptions(d)},[d,v]),k2(d,p))throw cm(d,v,c);if(B2({result:p,errorResetBoundary:c,throwOnError:d.throwOnError,query:f.getQueryCache().get(d.queryHash),suspense:d.suspense}))throw p.error;return f.getDefaultOptions().queries?._experimental_afterQuery?.(d,p),d.experimental_prefetchInRender&&!Aa&&H2(p,s)&&(m?cm(d,v,c):f.getQueryCache().get(d.queryHash)?.promise)?.catch(fe).finally(()=>{v.updateResult()}),d.notifyOnChangeProps?p:v.trackResult(p)}function jf(n,l){return Vg(n,Gg)}function Zs(n,l){return Vg({...n,enabled:!0,suspense:!0,throwOnError:L2,placeholderData:void 0},Gg)}function Y2(n,l){const r=Cf(),[s]=w.useState(()=>new O2(r,n));w.useEffect(()=>{s.setOptions(n)},[s,n]);const c=w.useSyncExternalStore(w.useCallback(d=>s.subscribe(Vt.batchCalls(d)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),f=w.useCallback((d,m)=>{s.mutate(d,m).catch(fe)},[s]);if(c.error&&qg(s.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:f,mutateAsync:c.mutate}}async function Ui(n,l){const r=await fetch(`/api${n}`,{headers:{"Content-Type":"application/json"},...l});if(!r.ok)throw new Error(`API 요청 실패: ${r.status}`);return r.json()}async function Zg(n){return await Ui(`/sales/${n}`)}async function Q2(n){const l=new URLSearchParams({query:n}).toString();return await Ui(`/sales/search?${l}`)}async function G2(n,l,r=5){try{const s=await fetch("/api/recommendations/run",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({userId:n,topN:r})});if(!s.ok)throw new Error(`추천 API 오류: ${s.status}`);return await s.json()}catch(s){throw console.error("추천 API 호출 실패:",s),s}}async function $2(n){return await Ui(`/movies/${n}`)}async function Jg(n=10){return await Ui(`/movies/popular?limit=${n}`)}function Fg(n){return Zs({queryKey:["SearchSale",n],queryFn:()=>Q2(n),staleTime:300*1e3})}function X2(n){return Zs({queryKey:["PopularSales",n],queryFn:async()=>(await Jg(n)).flatMap(s=>s.salesInfo),staleTime:300*1e3})}function K2(n=20){return Zs({queryKey:["InfinitePopularSales"],queryFn:async()=>(await Jg(100)).flatMap(s=>s.salesInfo),staleTime:300*1e3})}function V2(){const{data:n}=K2(20),[l,r]=w.useState(20),s=w.useRef(null),c=w.useMemo(()=>n.slice(0,l),[n,l]),f=d=>{if(s.current){const m=s.current.clientWidth,v=s.current.scrollLeft,p=s.current.scrollWidth-s.current.clientWidth;if(d==="right"&&v>=p-10&&l<n.length){r(g=>Math.min(g+10,n.length)),setTimeout(()=>{s.current&&s.current.scrollBy({left:m,behavior:"smooth"})},100);return}s.current.scrollBy({left:d==="right"?m:-m,behavior:"smooth"})}};return y.jsx(Mg,{children:y.jsxs(Cg,{children:[y.jsx(Us,{left:!0,onClick:()=>f("left"),children:"◀"}),y.jsx(Dg,{children:y.jsx(jg,{ref:s,children:c.map(d=>y.jsx(Ug,{product:d},d.id))})}),y.jsx(Us,{onClick:()=>f("right"),children:"▶"})]})})}A.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
  gap: 24px; /* 카드 사이 간격 */
  width: 100%;
  max-width: 1200px; /* 가운데 정렬 시 안정감 */
  margin: 0 auto; /* 가운데 정렬 */
  padding: 20px 16px; /* 양 옆 패딩 */

  /* 반응형 간격 조정 */
  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;const fm=A.p`
  font-size: 24px;            /* 메인보다는 살짝 작은 크기 */
  font-weight: 500;            /* 적당히 강조 */
  color: ${tt.mainDeepBlue};                 /* 부드러운 다크 그레이 */
  text-align: left;            /* 왼쪽 정렬 */
  margin: 0 0 16px 0;          /* 아래 여백으로 카드와 분리 */
  line-height: 1.5;            /* 읽기 좋은 줄 높이 */
  letter-spacing: 0.2px;       /* 서브 타이틀 느낌 강조 */
  padding-left : 20px
`;A.section`
  background: linear-gradient(135deg, ${tt.mainBlue} 0%, ${tt.mainDeepBlue} 100%);
  color: white;
  padding: 60px 20px;
  margin: 0 0 40px 0;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;A.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;A.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;A.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 32px 0;
  opacity: 0.9;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;A.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;A.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 20px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;A.span`
  font-size: 1.5rem;
`;A.span`
  font-weight: 500;
  font-size: 0.9rem;
`;const dm=A.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${tt.mainBlue}20, transparent);
  margin: 40px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${tt.mainBlue};
    border-radius: 2px;
  }
`;A.div`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;const Z2=A.div`
  position: relative;
  z-index: 10;
  height: 500px;
  width: 100vw;
  background-color: ${tt.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: clip-path 0.2s ease-out;
`,J2=A.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`,F2=A.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,P2=A.div`
  display: flex;
  align-items: center;
  gap: 48px;
`,hm=A.div`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,W2=A.h1`
  font-size: 28px;
  color: white;
  font-weight: 900;
  margin: 0;
  cursor: pointer;
`,pm=A.img`
  width: 24px;
  height: 24px;
`,I2=A.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 48px;
  margin-top: 24px;
`,tw=A.div`
  width: 100%;
  color: white;
`,ew=A.h2`
  font-size: 40px;
  font-weight: 800;
  margin: 0 0 8px 0;
  line-height: 1.1;
`,nw=A.p`
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin: 0 0 16px 0;
`,aw=A.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,iw=A.input`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 16px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
`,lw=A.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`,rw=A.img`
  width: 24px;
  height: 24px;
`,sw=A.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 1000;
  min-width: 180px;
  margin-top: 8px;
  animation: dropdownFadeIn 0.2s ease-out;
  
  @keyframes dropdownFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,mm=A.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
    color: ${tt.mainBlue};
  }
  
  &:active {
    background-color: #e9ecef;
  }
`,uw="/static/img/search_w.svg",ow="/static/img/user_w.svg",cw="/static/img/menu_w.svg",fw=()=>{const n=je(),[l,r]=w.useState(""),[s,c]=w.useState(!1),f=w.useRef(null),d=w.useRef(null),{showToast:m}=Vl(),v=w.useRef({x:48,y:0}),p=w.useRef({x:48,y:0});w.useEffect(()=>{const D=L=>{const{innerWidth:$,innerHeight:F}=window,X=40+L.clientX/$*20,P=L.clientY/F*10;p.current={x:X,y:P}};window.addEventListener("mousemove",D);let C;const k=()=>{v.current.x+=(p.current.x-v.current.x)*.08,v.current.y+=(p.current.y-v.current.y)*.08,f.current&&(f.current.style.clipPath=`ellipse(100% 80% at ${v.current.x}% ${v.current.y}%)`),C=requestAnimationFrame(k)};return k(),()=>{cancelAnimationFrame(C),window.removeEventListener("mousemove",D)}},[]);const g=()=>{n(`/static/SearchPage/${l}`)},x=D=>{D.key==="Enter"&&g()},R=()=>{c(D=>!D)},_=async()=>{const D="hcan1223@pusan.ac.kr";try{await navigator.clipboard.writeText(D),m("이메일 주소가 클립보드에 복사되었습니다","success")}catch{m(`버그 제보 이메일: ${D}`,"info")}c(!1)},T=()=>{window.open("https://github.com/patkrdj/Capstone","_blank"),c(!1)};return w.useEffect(()=>{const D=C=>{d.current&&!d.current.contains(C.target)&&c(!1)};return s&&document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}},[s]),y.jsx(Z2,{ref:f,children:y.jsxs(zi,{children:[y.jsxs(J2,{children:[y.jsx(F2,{children:y.jsx(W2,{onClick:()=>n("/static/"),children:"L.B"})}),y.jsxs(P2,{children:[y.jsx(hm,{onClick:()=>n("/static/My"),children:y.jsx(pm,{src:ow,alt:"my"})}),y.jsxs(hm,{ref:d,onClick:R,style:{position:"relative"},children:[y.jsx(pm,{src:cw,alt:"menu"}),s&&y.jsxs(sw,{children:[y.jsx(mm,{onClick:_,children:"버그 제보하기"}),y.jsx(mm,{onClick:T,children:"깃허브 페이지"})]})]})]})]}),y.jsx(I2,{children:y.jsxs(tw,{children:[y.jsx(ew,{children:"블루레이 추천"}),y.jsx(nw,{children:"당신의 인생영화를 찾아보세요!"}),y.jsxs(aw,{children:[y.jsx(iw,{value:l,onChange:D=>r(D.target.value),onKeyDown:x,placeholder:"상품명 검색"}),y.jsx(lw,{onClick:g,children:y.jsx(rw,{src:uw,alt:"search"})})]})]})})]})})},dw=w.createContext(null),jc={didCatch:!1,error:null};class Ic extends w.Component{constructor(l){super(l),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=jc}static getDerivedStateFromError(l){return{didCatch:!0,error:l}}resetErrorBoundary(){const{error:l}=this.state;if(l!==null){for(var r,s,c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d];(r=(s=this.props).onReset)===null||r===void 0||r.call(s,{args:f,reason:"imperative-api"}),this.setState(jc)}}componentDidCatch(l,r){var s,c;(s=(c=this.props).onError)===null||s===void 0||s.call(c,l,r)}componentDidUpdate(l,r){const{didCatch:s}=this.state,{resetKeys:c}=this.props;if(s&&r.error!==null&&hw(l.resetKeys,c)){var f,d;(f=(d=this.props).onReset)===null||f===void 0||f.call(d,{next:c,prev:l.resetKeys,reason:"keys"}),this.setState(jc)}}render(){const{children:l,fallbackRender:r,FallbackComponent:s,fallback:c}=this.props,{didCatch:f,error:d}=this.state;let m=l;if(f){const v={error:d,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")m=r(v);else if(s)m=w.createElement(s,v);else if(c!==void 0)m=c;else throw d}return w.createElement(dw.Provider,{value:{didCatch:f,error:d,resetErrorBoundary:this.resetErrorBoundary}},m)}}function hw(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.length!==l.length||n.some((r,s)=>!Object.is(r,l[s]))}const gm=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  height: 100%;
  gap: 20px;
`,pw=Di`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,mw=Di`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,gw=Di`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`,yw=Di`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;A.div`
  border: 3px solid #f0f0f0;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${pw} 1s linear infinite;
`;const ym=A.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  animation: ${mw} 2s ease-in-out infinite;
`,vm=A.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`,yi=A.div`
  width: 8px;
  height: 8px;
  background-color: ${tt.mainBlue};
  border-radius: 50%;
  animation: ${gw} 1.4s ease-in-out infinite;
  animation-delay: ${n=>n.$delay}s;
`,vw=A.div`
  width: 200px;
  height: 4px;
  background-color: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 10px;
`,bw=A.div`
  height: 100%;
  background: linear-gradient(90deg,${tt.mainBlue},${tt.mainDeepBlue},${tt.mainBlue});
  background-size: 200px 100%;
  animation: ${yw} 5s linear infinite;
  width: ${n=>n.$progress}%;
  transition: width 0.3s ease;
`,Zl=({loading:n=!0,message:l="로딩 중...",showProgress:r=!1,type:s="default"})=>{const[c,f]=w.useState(0),[d,m]=w.useState(l);return w.useEffect(()=>{if(n){if(r){const v=setInterval(()=>{f(p=>p>=90?p:p+Math.random()*10)},200);return()=>clearInterval(v)}if(r){const v=["데이터를 분석하고 있어요...","맞춤 추천을 찾고 있어요...","최적의 상품을 선별하고 있어요..."];let p=0;const g=setInterval(()=>{m(v[p%v.length]),p++},3e3);return()=>clearInterval(g)}}},[n,r]),n?s==="enhanced"?y.jsxs(gm,{children:[y.jsx(ym,{children:d}),r&&y.jsx(vw,{children:y.jsx(bw,{$progress:c})}),y.jsxs(vm,{children:[y.jsx(yi,{$delay:0}),y.jsx(yi,{$delay:.2}),y.jsx(yi,{$delay:.4})]})]}):y.jsxs(gm,{children:[y.jsx(ym,{children:l}),y.jsxs(vm,{children:[y.jsx(yi,{$delay:0}),y.jsx(yi,{$delay:.2}),y.jsx(yi,{$delay:.4})]})]}):null};function Pg(n,l){return function(){return n.apply(l,arguments)}}const{toString:xw}=Object.prototype,{getPrototypeOf:Df}=Object,{iterator:Js,toStringTag:Wg}=Symbol,Fs=(n=>l=>{const r=xw.call(l);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Pe=n=>(n=n.toLowerCase(),l=>Fs(l)===n),Ps=n=>l=>typeof l===n,{isArray:Ni}=Array,Gl=Ps("undefined");function Jl(n){return n!==null&&!Gl(n)&&n.constructor!==null&&!Gl(n.constructor)&&ye(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Ig=Pe("ArrayBuffer");function Sw(n){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(n):l=n&&n.buffer&&Ig(n.buffer),l}const ww=Ps("string"),ye=Ps("function"),ty=Ps("number"),Fl=n=>n!==null&&typeof n=="object",Ew=n=>n===!0||n===!1,Ts=n=>{if(Fs(n)!=="object")return!1;const l=Df(n);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Wg in n)&&!(Js in n)},Rw=n=>{if(!Fl(n)||Jl(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},Tw=Pe("Date"),Ow=Pe("File"),Aw=Pe("Blob"),Cw=Pe("FileList"),jw=n=>Fl(n)&&ye(n.pipe),Dw=n=>{let l;return n&&(typeof FormData=="function"&&n instanceof FormData||ye(n.append)&&((l=Fs(n))==="formdata"||l==="object"&&ye(n.toString)&&n.toString()==="[object FormData]"))},zw=Pe("URLSearchParams"),[Mw,_w,Uw,Nw]=["ReadableStream","Request","Response","Headers"].map(Pe),Bw=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Pl(n,l,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let s,c;if(typeof n!="object"&&(n=[n]),Ni(n))for(s=0,c=n.length;s<c;s++)l.call(null,n[s],s,n);else{if(Jl(n))return;const f=r?Object.getOwnPropertyNames(n):Object.keys(n),d=f.length;let m;for(s=0;s<d;s++)m=f[s],l.call(null,n[m],m,n)}}function ey(n,l){if(Jl(n))return null;l=l.toLowerCase();const r=Object.keys(n);let s=r.length,c;for(;s-- >0;)if(c=r[s],l===c.toLowerCase())return c;return null}const Ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ny=n=>!Gl(n)&&n!==Ea;function tf(){const{caseless:n}=ny(this)&&this||{},l={},r=(s,c)=>{const f=n&&ey(l,c)||c;Ts(l[f])&&Ts(s)?l[f]=tf(l[f],s):Ts(s)?l[f]=tf({},s):Ni(s)?l[f]=s.slice():l[f]=s};for(let s=0,c=arguments.length;s<c;s++)arguments[s]&&Pl(arguments[s],r);return l}const Lw=(n,l,r,{allOwnKeys:s}={})=>(Pl(l,(c,f)=>{r&&ye(c)?n[f]=Pg(c,r):n[f]=c},{allOwnKeys:s}),n),qw=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Hw=(n,l,r,s)=>{n.prototype=Object.create(l.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:l.prototype}),r&&Object.assign(n.prototype,r)},kw=(n,l,r,s)=>{let c,f,d;const m={};if(l=l||{},n==null)return l;do{for(c=Object.getOwnPropertyNames(n),f=c.length;f-- >0;)d=c[f],(!s||s(d,n,l))&&!m[d]&&(l[d]=n[d],m[d]=!0);n=r!==!1&&Df(n)}while(n&&(!r||r(n,l))&&n!==Object.prototype);return l},Yw=(n,l,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=l.length;const s=n.indexOf(l,r);return s!==-1&&s===r},Qw=n=>{if(!n)return null;if(Ni(n))return n;let l=n.length;if(!ty(l))return null;const r=new Array(l);for(;l-- >0;)r[l]=n[l];return r},Gw=(n=>l=>n&&l instanceof n)(typeof Uint8Array<"u"&&Df(Uint8Array)),$w=(n,l)=>{const s=(n&&n[Js]).call(n);let c;for(;(c=s.next())&&!c.done;){const f=c.value;l.call(n,f[0],f[1])}},Xw=(n,l)=>{let r;const s=[];for(;(r=n.exec(l))!==null;)s.push(r);return s},Kw=Pe("HTMLFormElement"),Vw=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,c){return s.toUpperCase()+c}),bm=(({hasOwnProperty:n})=>(l,r)=>n.call(l,r))(Object.prototype),Zw=Pe("RegExp"),ay=(n,l)=>{const r=Object.getOwnPropertyDescriptors(n),s={};Pl(r,(c,f)=>{let d;(d=l(c,f,n))!==!1&&(s[f]=d||c)}),Object.defineProperties(n,s)},Jw=n=>{ay(n,(l,r)=>{if(ye(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=n[r];if(ye(s)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Fw=(n,l)=>{const r={},s=c=>{c.forEach(f=>{r[f]=!0})};return Ni(n)?s(n):s(String(n).split(l)),r},Pw=()=>{},Ww=(n,l)=>n!=null&&Number.isFinite(n=+n)?n:l;function Iw(n){return!!(n&&ye(n.append)&&n[Wg]==="FormData"&&n[Js])}const tE=n=>{const l=new Array(10),r=(s,c)=>{if(Fl(s)){if(l.indexOf(s)>=0)return;if(Jl(s))return s;if(!("toJSON"in s)){l[c]=s;const f=Ni(s)?[]:{};return Pl(s,(d,m)=>{const v=r(d,c+1);!Gl(v)&&(f[m]=v)}),l[c]=void 0,f}}return s};return r(n,0)},eE=Pe("AsyncFunction"),nE=n=>n&&(Fl(n)||ye(n))&&ye(n.then)&&ye(n.catch),iy=((n,l)=>n?setImmediate:l?((r,s)=>(Ea.addEventListener("message",({source:c,data:f})=>{c===Ea&&f===r&&s.length&&s.shift()()},!1),c=>{s.push(c),Ea.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",ye(Ea.postMessage)),aE=typeof queueMicrotask<"u"?queueMicrotask.bind(Ea):typeof process<"u"&&process.nextTick||iy,iE=n=>n!=null&&ye(n[Js]),B={isArray:Ni,isArrayBuffer:Ig,isBuffer:Jl,isFormData:Dw,isArrayBufferView:Sw,isString:ww,isNumber:ty,isBoolean:Ew,isObject:Fl,isPlainObject:Ts,isEmptyObject:Rw,isReadableStream:Mw,isRequest:_w,isResponse:Uw,isHeaders:Nw,isUndefined:Gl,isDate:Tw,isFile:Ow,isBlob:Aw,isRegExp:Zw,isFunction:ye,isStream:jw,isURLSearchParams:zw,isTypedArray:Gw,isFileList:Cw,forEach:Pl,merge:tf,extend:Lw,trim:Bw,stripBOM:qw,inherits:Hw,toFlatObject:kw,kindOf:Fs,kindOfTest:Pe,endsWith:Yw,toArray:Qw,forEachEntry:$w,matchAll:Xw,isHTMLForm:Kw,hasOwnProperty:bm,hasOwnProp:bm,reduceDescriptors:ay,freezeMethods:Jw,toObjectSet:Fw,toCamelCase:Vw,noop:Pw,toFiniteNumber:Ww,findKey:ey,global:Ea,isContextDefined:ny,isSpecCompliantForm:Iw,toJSONObject:tE,isAsyncFn:eE,isThenable:nE,setImmediate:iy,asap:aE,isIterable:iE};function ct(n,l,r,s,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",l&&(this.code=l),r&&(this.config=r),s&&(this.request=s),c&&(this.response=c,this.status=c.status?c.status:null)}B.inherits(ct,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const ly=ct.prototype,ry={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{ry[n]={value:n}});Object.defineProperties(ct,ry);Object.defineProperty(ly,"isAxiosError",{value:!0});ct.from=(n,l,r,s,c,f)=>{const d=Object.create(ly);return B.toFlatObject(n,d,function(v){return v!==Error.prototype},m=>m!=="isAxiosError"),ct.call(d,n.message,l,r,s,c),d.cause=n,d.name=n.name,f&&Object.assign(d,f),d};const lE=null;function ef(n){return B.isPlainObject(n)||B.isArray(n)}function sy(n){return B.endsWith(n,"[]")?n.slice(0,-2):n}function xm(n,l,r){return n?n.concat(l).map(function(c,f){return c=sy(c),!r&&f?"["+c+"]":c}).join(r?".":""):l}function rE(n){return B.isArray(n)&&!n.some(ef)}const sE=B.toFlatObject(B,{},null,function(l){return/^is[A-Z]/.test(l)});function Ws(n,l,r){if(!B.isObject(n))throw new TypeError("target must be an object");l=l||new FormData,r=B.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(D,C){return!B.isUndefined(C[D])});const s=r.metaTokens,c=r.visitor||g,f=r.dots,d=r.indexes,v=(r.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(l);if(!B.isFunction(c))throw new TypeError("visitor must be a function");function p(T){if(T===null)return"";if(B.isDate(T))return T.toISOString();if(B.isBoolean(T))return T.toString();if(!v&&B.isBlob(T))throw new ct("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(T)||B.isTypedArray(T)?v&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function g(T,D,C){let k=T;if(T&&!C&&typeof T=="object"){if(B.endsWith(D,"{}"))D=s?D:D.slice(0,-2),T=JSON.stringify(T);else if(B.isArray(T)&&rE(T)||(B.isFileList(T)||B.endsWith(D,"[]"))&&(k=B.toArray(T)))return D=sy(D),k.forEach(function($,F){!(B.isUndefined($)||$===null)&&l.append(d===!0?xm([D],F,f):d===null?D:D+"[]",p($))}),!1}return ef(T)?!0:(l.append(xm(C,D,f),p(T)),!1)}const x=[],R=Object.assign(sE,{defaultVisitor:g,convertValue:p,isVisitable:ef});function _(T,D){if(!B.isUndefined(T)){if(x.indexOf(T)!==-1)throw Error("Circular reference detected in "+D.join("."));x.push(T),B.forEach(T,function(k,L){(!(B.isUndefined(k)||k===null)&&c.call(l,k,B.isString(L)?L.trim():L,D,R))===!0&&_(k,D?D.concat(L):[L])}),x.pop()}}if(!B.isObject(n))throw new TypeError("data must be an object");return _(n),l}function Sm(n){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return l[s]})}function zf(n,l){this._pairs=[],n&&Ws(n,this,l)}const uy=zf.prototype;uy.append=function(l,r){this._pairs.push([l,r])};uy.toString=function(l){const r=l?function(s){return l.call(this,s,Sm)}:Sm;return this._pairs.map(function(c){return r(c[0])+"="+r(c[1])},"").join("&")};function uE(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oy(n,l,r){if(!l)return n;const s=r&&r.encode||uE;B.isFunction(r)&&(r={serialize:r});const c=r&&r.serialize;let f;if(c?f=c(l,r):f=B.isURLSearchParams(l)?l.toString():new zf(l,r).toString(s),f){const d=n.indexOf("#");d!==-1&&(n=n.slice(0,d)),n+=(n.indexOf("?")===-1?"?":"&")+f}return n}class wm{constructor(){this.handlers=[]}use(l,r,s){return this.handlers.push({fulfilled:l,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){B.forEach(this.handlers,function(s){s!==null&&l(s)})}}const cy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oE=typeof URLSearchParams<"u"?URLSearchParams:zf,cE=typeof FormData<"u"?FormData:null,fE=typeof Blob<"u"?Blob:null,dE={isBrowser:!0,classes:{URLSearchParams:oE,FormData:cE,Blob:fE},protocols:["http","https","file","blob","url","data"]},Mf=typeof window<"u"&&typeof document<"u",nf=typeof navigator=="object"&&navigator||void 0,hE=Mf&&(!nf||["ReactNative","NativeScript","NS"].indexOf(nf.product)<0),pE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mE=Mf&&window.location.href||"http://localhost",gE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Mf,hasStandardBrowserEnv:hE,hasStandardBrowserWebWorkerEnv:pE,navigator:nf,origin:mE},Symbol.toStringTag,{value:"Module"})),ue={...gE,...dE};function yE(n,l){return Ws(n,new ue.classes.URLSearchParams,{visitor:function(r,s,c,f){return ue.isNode&&B.isBuffer(r)?(this.append(s,r.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...l})}function vE(n){return B.matchAll(/\w+|\[(\w*)]/g,n).map(l=>l[0]==="[]"?"":l[1]||l[0])}function bE(n){const l={},r=Object.keys(n);let s;const c=r.length;let f;for(s=0;s<c;s++)f=r[s],l[f]=n[f];return l}function fy(n){function l(r,s,c,f){let d=r[f++];if(d==="__proto__")return!0;const m=Number.isFinite(+d),v=f>=r.length;return d=!d&&B.isArray(c)?c.length:d,v?(B.hasOwnProp(c,d)?c[d]=[c[d],s]:c[d]=s,!m):((!c[d]||!B.isObject(c[d]))&&(c[d]=[]),l(r,s,c[d],f)&&B.isArray(c[d])&&(c[d]=bE(c[d])),!m)}if(B.isFormData(n)&&B.isFunction(n.entries)){const r={};return B.forEachEntry(n,(s,c)=>{l(vE(s),c,r,0)}),r}return null}function xE(n,l,r){if(B.isString(n))try{return(l||JSON.parse)(n),B.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(n)}const Wl={transitional:cy,adapter:["xhr","http","fetch"],transformRequest:[function(l,r){const s=r.getContentType()||"",c=s.indexOf("application/json")>-1,f=B.isObject(l);if(f&&B.isHTMLForm(l)&&(l=new FormData(l)),B.isFormData(l))return c?JSON.stringify(fy(l)):l;if(B.isArrayBuffer(l)||B.isBuffer(l)||B.isStream(l)||B.isFile(l)||B.isBlob(l)||B.isReadableStream(l))return l;if(B.isArrayBufferView(l))return l.buffer;if(B.isURLSearchParams(l))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let m;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return yE(l,this.formSerializer).toString();if((m=B.isFileList(l))||s.indexOf("multipart/form-data")>-1){const v=this.env&&this.env.FormData;return Ws(m?{"files[]":l}:l,v&&new v,this.formSerializer)}}return f||c?(r.setContentType("application/json",!1),xE(l)):l}],transformResponse:[function(l){const r=this.transitional||Wl.transitional,s=r&&r.forcedJSONParsing,c=this.responseType==="json";if(B.isResponse(l)||B.isReadableStream(l))return l;if(l&&B.isString(l)&&(s&&!this.responseType||c)){const d=!(r&&r.silentJSONParsing)&&c;try{return JSON.parse(l)}catch(m){if(d)throw m.name==="SyntaxError"?ct.from(m,ct.ERR_BAD_RESPONSE,this,null,this.response):m}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ue.classes.FormData,Blob:ue.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],n=>{Wl.headers[n]={}});const SE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wE=n=>{const l={};let r,s,c;return n&&n.split(`
`).forEach(function(d){c=d.indexOf(":"),r=d.substring(0,c).trim().toLowerCase(),s=d.substring(c+1).trim(),!(!r||l[r]&&SE[r])&&(r==="set-cookie"?l[r]?l[r].push(s):l[r]=[s]:l[r]=l[r]?l[r]+", "+s:s)}),l},Em=Symbol("internals");function Ll(n){return n&&String(n).trim().toLowerCase()}function Os(n){return n===!1||n==null?n:B.isArray(n)?n.map(Os):String(n)}function EE(n){const l=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(n);)l[s[1]]=s[2];return l}const RE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Dc(n,l,r,s,c){if(B.isFunction(s))return s.call(this,l,r);if(c&&(l=r),!!B.isString(l)){if(B.isString(s))return l.indexOf(s)!==-1;if(B.isRegExp(s))return s.test(l)}}function TE(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,r,s)=>r.toUpperCase()+s)}function OE(n,l){const r=B.toCamelCase(" "+l);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+r,{value:function(c,f,d){return this[s].call(this,l,c,f,d)},configurable:!0})})}let ve=class{constructor(l){l&&this.set(l)}set(l,r,s){const c=this;function f(m,v,p){const g=Ll(v);if(!g)throw new Error("header name must be a non-empty string");const x=B.findKey(c,g);(!x||c[x]===void 0||p===!0||p===void 0&&c[x]!==!1)&&(c[x||v]=Os(m))}const d=(m,v)=>B.forEach(m,(p,g)=>f(p,g,v));if(B.isPlainObject(l)||l instanceof this.constructor)d(l,r);else if(B.isString(l)&&(l=l.trim())&&!RE(l))d(wE(l),r);else if(B.isObject(l)&&B.isIterable(l)){let m={},v,p;for(const g of l){if(!B.isArray(g))throw TypeError("Object iterator must return a key-value pair");m[p=g[0]]=(v=m[p])?B.isArray(v)?[...v,g[1]]:[v,g[1]]:g[1]}d(m,r)}else l!=null&&f(r,l,s);return this}get(l,r){if(l=Ll(l),l){const s=B.findKey(this,l);if(s){const c=this[s];if(!r)return c;if(r===!0)return EE(c);if(B.isFunction(r))return r.call(this,c,s);if(B.isRegExp(r))return r.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,r){if(l=Ll(l),l){const s=B.findKey(this,l);return!!(s&&this[s]!==void 0&&(!r||Dc(this,this[s],s,r)))}return!1}delete(l,r){const s=this;let c=!1;function f(d){if(d=Ll(d),d){const m=B.findKey(s,d);m&&(!r||Dc(s,s[m],m,r))&&(delete s[m],c=!0)}}return B.isArray(l)?l.forEach(f):f(l),c}clear(l){const r=Object.keys(this);let s=r.length,c=!1;for(;s--;){const f=r[s];(!l||Dc(this,this[f],f,l,!0))&&(delete this[f],c=!0)}return c}normalize(l){const r=this,s={};return B.forEach(this,(c,f)=>{const d=B.findKey(s,f);if(d){r[d]=Os(c),delete r[f];return}const m=l?TE(f):String(f).trim();m!==f&&delete r[f],r[m]=Os(c),s[m]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const r=Object.create(null);return B.forEach(this,(s,c)=>{s!=null&&s!==!1&&(r[c]=l&&B.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,r])=>l+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...r){const s=new this(l);return r.forEach(c=>s.set(c)),s}static accessor(l){const s=(this[Em]=this[Em]={accessors:{}}).accessors,c=this.prototype;function f(d){const m=Ll(d);s[m]||(OE(c,d),s[m]=!0)}return B.isArray(l)?l.forEach(f):f(l),this}};ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(ve.prototype,({value:n},l)=>{let r=l[0].toUpperCase()+l.slice(1);return{get:()=>n,set(s){this[r]=s}}});B.freezeMethods(ve);function zc(n,l){const r=this||Wl,s=l||r,c=ve.from(s.headers);let f=s.data;return B.forEach(n,function(m){f=m.call(r,f,c.normalize(),l?l.status:void 0)}),c.normalize(),f}function dy(n){return!!(n&&n.__CANCEL__)}function Bi(n,l,r){ct.call(this,n??"canceled",ct.ERR_CANCELED,l,r),this.name="CanceledError"}B.inherits(Bi,ct,{__CANCEL__:!0});function hy(n,l,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?n(r):l(new ct("Request failed with status code "+r.status,[ct.ERR_BAD_REQUEST,ct.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function AE(n){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return l&&l[1]||""}function CE(n,l){n=n||10;const r=new Array(n),s=new Array(n);let c=0,f=0,d;return l=l!==void 0?l:1e3,function(v){const p=Date.now(),g=s[f];d||(d=p),r[c]=v,s[c]=p;let x=f,R=0;for(;x!==c;)R+=r[x++],x=x%n;if(c=(c+1)%n,c===f&&(f=(f+1)%n),p-d<l)return;const _=g&&p-g;return _?Math.round(R*1e3/_):void 0}}function jE(n,l){let r=0,s=1e3/l,c,f;const d=(p,g=Date.now())=>{r=g,c=null,f&&(clearTimeout(f),f=null),n(...p)};return[(...p)=>{const g=Date.now(),x=g-r;x>=s?d(p,g):(c=p,f||(f=setTimeout(()=>{f=null,d(c)},s-x)))},()=>c&&d(c)]}const Ls=(n,l,r=3)=>{let s=0;const c=CE(50,250);return jE(f=>{const d=f.loaded,m=f.lengthComputable?f.total:void 0,v=d-s,p=c(v),g=d<=m;s=d;const x={loaded:d,total:m,progress:m?d/m:void 0,bytes:v,rate:p||void 0,estimated:p&&m&&g?(m-d)/p:void 0,event:f,lengthComputable:m!=null,[l?"download":"upload"]:!0};n(x)},r)},Rm=(n,l)=>{const r=n!=null;return[s=>l[0]({lengthComputable:r,total:n,loaded:s}),l[1]]},Tm=n=>(...l)=>B.asap(()=>n(...l)),DE=ue.hasStandardBrowserEnv?((n,l)=>r=>(r=new URL(r,ue.origin),n.protocol===r.protocol&&n.host===r.host&&(l||n.port===r.port)))(new URL(ue.origin),ue.navigator&&/(msie|trident)/i.test(ue.navigator.userAgent)):()=>!0,zE=ue.hasStandardBrowserEnv?{write(n,l,r,s,c,f){const d=[n+"="+encodeURIComponent(l)];B.isNumber(r)&&d.push("expires="+new Date(r).toGMTString()),B.isString(s)&&d.push("path="+s),B.isString(c)&&d.push("domain="+c),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read(n){const l=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ME(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function _E(n,l){return l?n.replace(/\/?\/$/,"")+"/"+l.replace(/^\/+/,""):n}function py(n,l,r){let s=!ME(l);return n&&(s||r==!1)?_E(n,l):l}const Om=n=>n instanceof ve?{...n}:n;function ja(n,l){l=l||{};const r={};function s(p,g,x,R){return B.isPlainObject(p)&&B.isPlainObject(g)?B.merge.call({caseless:R},p,g):B.isPlainObject(g)?B.merge({},g):B.isArray(g)?g.slice():g}function c(p,g,x,R){if(B.isUndefined(g)){if(!B.isUndefined(p))return s(void 0,p,x,R)}else return s(p,g,x,R)}function f(p,g){if(!B.isUndefined(g))return s(void 0,g)}function d(p,g){if(B.isUndefined(g)){if(!B.isUndefined(p))return s(void 0,p)}else return s(void 0,g)}function m(p,g,x){if(x in l)return s(p,g);if(x in n)return s(void 0,p)}const v={url:f,method:f,data:f,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:m,headers:(p,g,x)=>c(Om(p),Om(g),x,!0)};return B.forEach(Object.keys({...n,...l}),function(g){const x=v[g]||c,R=x(n[g],l[g],g);B.isUndefined(R)&&x!==m||(r[g]=R)}),r}const my=n=>{const l=ja({},n);let{data:r,withXSRFToken:s,xsrfHeaderName:c,xsrfCookieName:f,headers:d,auth:m}=l;l.headers=d=ve.from(d),l.url=oy(py(l.baseURL,l.url,l.allowAbsoluteUrls),n.params,n.paramsSerializer),m&&d.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let v;if(B.isFormData(r)){if(ue.hasStandardBrowserEnv||ue.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((v=d.getContentType())!==!1){const[p,...g]=v?v.split(";").map(x=>x.trim()).filter(Boolean):[];d.setContentType([p||"multipart/form-data",...g].join("; "))}}if(ue.hasStandardBrowserEnv&&(s&&B.isFunction(s)&&(s=s(l)),s||s!==!1&&DE(l.url))){const p=c&&f&&zE.read(f);p&&d.set(c,p)}return l},UE=typeof XMLHttpRequest<"u",NE=UE&&function(n){return new Promise(function(r,s){const c=my(n);let f=c.data;const d=ve.from(c.headers).normalize();let{responseType:m,onUploadProgress:v,onDownloadProgress:p}=c,g,x,R,_,T;function D(){_&&_(),T&&T(),c.cancelToken&&c.cancelToken.unsubscribe(g),c.signal&&c.signal.removeEventListener("abort",g)}let C=new XMLHttpRequest;C.open(c.method.toUpperCase(),c.url,!0),C.timeout=c.timeout;function k(){if(!C)return;const $=ve.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),X={data:!m||m==="text"||m==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:$,config:n,request:C};hy(function(K){r(K),D()},function(K){s(K),D()},X),C=null}"onloadend"in C?C.onloadend=k:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(k)},C.onabort=function(){C&&(s(new ct("Request aborted",ct.ECONNABORTED,n,C)),C=null)},C.onerror=function(){s(new ct("Network Error",ct.ERR_NETWORK,n,C)),C=null},C.ontimeout=function(){let F=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const X=c.transitional||cy;c.timeoutErrorMessage&&(F=c.timeoutErrorMessage),s(new ct(F,X.clarifyTimeoutError?ct.ETIMEDOUT:ct.ECONNABORTED,n,C)),C=null},f===void 0&&d.setContentType(null),"setRequestHeader"in C&&B.forEach(d.toJSON(),function(F,X){C.setRequestHeader(X,F)}),B.isUndefined(c.withCredentials)||(C.withCredentials=!!c.withCredentials),m&&m!=="json"&&(C.responseType=c.responseType),p&&([R,T]=Ls(p,!0),C.addEventListener("progress",R)),v&&C.upload&&([x,_]=Ls(v),C.upload.addEventListener("progress",x),C.upload.addEventListener("loadend",_)),(c.cancelToken||c.signal)&&(g=$=>{C&&(s(!$||$.type?new Bi(null,n,C):$),C.abort(),C=null)},c.cancelToken&&c.cancelToken.subscribe(g),c.signal&&(c.signal.aborted?g():c.signal.addEventListener("abort",g)));const L=AE(c.url);if(L&&ue.protocols.indexOf(L)===-1){s(new ct("Unsupported protocol "+L+":",ct.ERR_BAD_REQUEST,n));return}C.send(f||null)})},BE=(n,l)=>{const{length:r}=n=n?n.filter(Boolean):[];if(l||r){let s=new AbortController,c;const f=function(p){if(!c){c=!0,m();const g=p instanceof Error?p:this.reason;s.abort(g instanceof ct?g:new Bi(g instanceof Error?g.message:g))}};let d=l&&setTimeout(()=>{d=null,f(new ct(`timeout ${l} of ms exceeded`,ct.ETIMEDOUT))},l);const m=()=>{n&&(d&&clearTimeout(d),d=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(f):p.removeEventListener("abort",f)}),n=null)};n.forEach(p=>p.addEventListener("abort",f));const{signal:v}=s;return v.unsubscribe=()=>B.asap(m),v}},LE=function*(n,l){let r=n.byteLength;if(r<l){yield n;return}let s=0,c;for(;s<r;)c=s+l,yield n.slice(s,c),s=c},qE=async function*(n,l){for await(const r of HE(n))yield*LE(r,l)},HE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const l=n.getReader();try{for(;;){const{done:r,value:s}=await l.read();if(r)break;yield s}}finally{await l.cancel()}},Am=(n,l,r,s)=>{const c=qE(n,l);let f=0,d,m=v=>{d||(d=!0,s&&s(v))};return new ReadableStream({async pull(v){try{const{done:p,value:g}=await c.next();if(p){m(),v.close();return}let x=g.byteLength;if(r){let R=f+=x;r(R)}v.enqueue(new Uint8Array(g))}catch(p){throw m(p),p}},cancel(v){return m(v),c.return()}},{highWaterMark:2})},Is=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",gy=Is&&typeof ReadableStream=="function",kE=Is&&(typeof TextEncoder=="function"?(n=>l=>n.encode(l))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),yy=(n,...l)=>{try{return!!n(...l)}catch{return!1}},YE=gy&&yy(()=>{let n=!1;const l=new Request(ue.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!l}),Cm=64*1024,af=gy&&yy(()=>B.isReadableStream(new Response("").body)),qs={stream:af&&(n=>n.body)};Is&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(l=>{!qs[l]&&(qs[l]=B.isFunction(n[l])?r=>r[l]():(r,s)=>{throw new ct(`Response type '${l}' is not supported`,ct.ERR_NOT_SUPPORT,s)})})})(new Response);const QE=async n=>{if(n==null)return 0;if(B.isBlob(n))return n.size;if(B.isSpecCompliantForm(n))return(await new Request(ue.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(B.isArrayBufferView(n)||B.isArrayBuffer(n))return n.byteLength;if(B.isURLSearchParams(n)&&(n=n+""),B.isString(n))return(await kE(n)).byteLength},GE=async(n,l)=>{const r=B.toFiniteNumber(n.getContentLength());return r??QE(l)},$E=Is&&(async n=>{let{url:l,method:r,data:s,signal:c,cancelToken:f,timeout:d,onDownloadProgress:m,onUploadProgress:v,responseType:p,headers:g,withCredentials:x="same-origin",fetchOptions:R}=my(n);p=p?(p+"").toLowerCase():"text";let _=BE([c,f&&f.toAbortSignal()],d),T;const D=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let C;try{if(v&&YE&&r!=="get"&&r!=="head"&&(C=await GE(g,s))!==0){let X=new Request(l,{method:"POST",body:s,duplex:"half"}),P;if(B.isFormData(s)&&(P=X.headers.get("content-type"))&&g.setContentType(P),X.body){const[K,ut]=Rm(C,Ls(Tm(v)));s=Am(X.body,Cm,K,ut)}}B.isString(x)||(x=x?"include":"omit");const k="credentials"in Request.prototype;T=new Request(l,{...R,signal:_,method:r.toUpperCase(),headers:g.normalize().toJSON(),body:s,duplex:"half",credentials:k?x:void 0});let L=await fetch(T,R);const $=af&&(p==="stream"||p==="response");if(af&&(m||$&&D)){const X={};["status","statusText","headers"].forEach(mt=>{X[mt]=L[mt]});const P=B.toFiniteNumber(L.headers.get("content-length")),[K,ut]=m&&Rm(P,Ls(Tm(m),!0))||[];L=new Response(Am(L.body,Cm,K,()=>{ut&&ut(),D&&D()}),X)}p=p||"text";let F=await qs[B.findKey(qs,p)||"text"](L,n);return!$&&D&&D(),await new Promise((X,P)=>{hy(X,P,{data:F,headers:ve.from(L.headers),status:L.status,statusText:L.statusText,config:n,request:T})})}catch(k){throw D&&D(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new ct("Network Error",ct.ERR_NETWORK,n,T),{cause:k.cause||k}):ct.from(k,k&&k.code,n,T)}}),lf={http:lE,xhr:NE,fetch:$E};B.forEach(lf,(n,l)=>{if(n){try{Object.defineProperty(n,"name",{value:l})}catch{}Object.defineProperty(n,"adapterName",{value:l})}});const jm=n=>`- ${n}`,XE=n=>B.isFunction(n)||n===null||n===!1,vy={getAdapter:n=>{n=B.isArray(n)?n:[n];const{length:l}=n;let r,s;const c={};for(let f=0;f<l;f++){r=n[f];let d;if(s=r,!XE(r)&&(s=lf[(d=String(r)).toLowerCase()],s===void 0))throw new ct(`Unknown adapter '${d}'`);if(s)break;c[d||"#"+f]=s}if(!s){const f=Object.entries(c).map(([m,v])=>`adapter ${m} `+(v===!1?"is not supported by the environment":"is not available in the build"));let d=l?f.length>1?`since :
`+f.map(jm).join(`
`):" "+jm(f[0]):"as no adapter specified";throw new ct("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return s},adapters:lf};function Mc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Bi(null,n)}function Dm(n){return Mc(n),n.headers=ve.from(n.headers),n.data=zc.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),vy.getAdapter(n.adapter||Wl.adapter)(n).then(function(s){return Mc(n),s.data=zc.call(n,n.transformResponse,s),s.headers=ve.from(s.headers),s},function(s){return dy(s)||(Mc(n),s&&s.response&&(s.response.data=zc.call(n,n.transformResponse,s.response),s.response.headers=ve.from(s.response.headers))),Promise.reject(s)})}const by="1.11.0",tu={};["object","boolean","number","function","string","symbol"].forEach((n,l)=>{tu[n]=function(s){return typeof s===n||"a"+(l<1?"n ":" ")+n}});const zm={};tu.transitional=function(l,r,s){function c(f,d){return"[Axios v"+by+"] Transitional option '"+f+"'"+d+(s?". "+s:"")}return(f,d,m)=>{if(l===!1)throw new ct(c(d," has been removed"+(r?" in "+r:"")),ct.ERR_DEPRECATED);return r&&!zm[d]&&(zm[d]=!0,console.warn(c(d," has been deprecated since v"+r+" and will be removed in the near future"))),l?l(f,d,m):!0}};tu.spelling=function(l){return(r,s)=>(console.warn(`${s} is likely a misspelling of ${l}`),!0)};function KE(n,l,r){if(typeof n!="object")throw new ct("options must be an object",ct.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let c=s.length;for(;c-- >0;){const f=s[c],d=l[f];if(d){const m=n[f],v=m===void 0||d(m,f,n);if(v!==!0)throw new ct("option "+f+" must be "+v,ct.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ct("Unknown option "+f,ct.ERR_BAD_OPTION)}}const As={assertOptions:KE,validators:tu},ln=As.validators;let Oa=class{constructor(l){this.defaults=l||{},this.interceptors={request:new wm,response:new wm}}async request(l,r){try{return await this._request(l,r)}catch(s){if(s instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=c.stack?c.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(l,r){typeof l=="string"?(r=r||{},r.url=l):r=l||{},r=ja(this.defaults,r);const{transitional:s,paramsSerializer:c,headers:f}=r;s!==void 0&&As.assertOptions(s,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),c!=null&&(B.isFunction(c)?r.paramsSerializer={serialize:c}:As.assertOptions(c,{encode:ln.function,serialize:ln.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),As.assertOptions(r,{baseUrl:ln.spelling("baseURL"),withXsrfToken:ln.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let d=f&&B.merge(f.common,f[r.method]);f&&B.forEach(["delete","get","head","post","put","patch","common"],T=>{delete f[T]}),r.headers=ve.concat(d,f);const m=[];let v=!0;this.interceptors.request.forEach(function(D){typeof D.runWhen=="function"&&D.runWhen(r)===!1||(v=v&&D.synchronous,m.unshift(D.fulfilled,D.rejected))});const p=[];this.interceptors.response.forEach(function(D){p.push(D.fulfilled,D.rejected)});let g,x=0,R;if(!v){const T=[Dm.bind(this),void 0];for(T.unshift(...m),T.push(...p),R=T.length,g=Promise.resolve(r);x<R;)g=g.then(T[x++],T[x++]);return g}R=m.length;let _=r;for(x=0;x<R;){const T=m[x++],D=m[x++];try{_=T(_)}catch(C){D.call(this,C);break}}try{g=Dm.call(this,_)}catch(T){return Promise.reject(T)}for(x=0,R=p.length;x<R;)g=g.then(p[x++],p[x++]);return g}getUri(l){l=ja(this.defaults,l);const r=py(l.baseURL,l.url,l.allowAbsoluteUrls);return oy(r,l.params,l.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(l){Oa.prototype[l]=function(r,s){return this.request(ja(s||{},{method:l,url:r,data:(s||{}).data}))}});B.forEach(["post","put","patch"],function(l){function r(s){return function(f,d,m){return this.request(ja(m||{},{method:l,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:d}))}}Oa.prototype[l]=r(),Oa.prototype[l+"Form"]=r(!0)});let VE=class xy{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(f){r=f});const s=this;this.promise.then(c=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](c);s._listeners=null}),this.promise.then=c=>{let f;const d=new Promise(m=>{s.subscribe(m),f=m}).then(c);return d.cancel=function(){s.unsubscribe(f)},d},l(function(f,d,m){s.reason||(s.reason=new Bi(f,d,m),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const r=this._listeners.indexOf(l);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const l=new AbortController,r=s=>{l.abort(s)};return this.subscribe(r),l.signal.unsubscribe=()=>this.unsubscribe(r),l.signal}static source(){let l;return{token:new xy(function(c){l=c}),cancel:l}}};function ZE(n){return function(r){return n.apply(null,r)}}function JE(n){return B.isObject(n)&&n.isAxiosError===!0}const rf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rf).forEach(([n,l])=>{rf[l]=n});function Sy(n){const l=new Oa(n),r=Pg(Oa.prototype.request,l);return B.extend(r,Oa.prototype,l,{allOwnKeys:!0}),B.extend(r,l,null,{allOwnKeys:!0}),r.create=function(c){return Sy(ja(n,c))},r}const _t=Sy(Wl);_t.Axios=Oa;_t.CanceledError=Bi;_t.CancelToken=VE;_t.isCancel=dy;_t.VERSION=by;_t.toFormData=Ws;_t.AxiosError=ct;_t.Cancel=_t.CanceledError;_t.all=function(l){return Promise.all(l)};_t.spread=ZE;_t.isAxiosError=JE;_t.mergeConfig=ja;_t.AxiosHeaders=ve;_t.formToJSON=n=>fy(B.isHTMLForm(n)?new FormData(n):n);_t.getAdapter=vy.getAdapter;_t.HttpStatusCode=rf;_t.default=_t;const{Axios:o4,AxiosError:c4,CanceledError:f4,isCancel:d4,CancelToken:h4,VERSION:p4,all:m4,Cancel:g4,isAxiosError:y4,spread:v4,toFormData:b4,AxiosHeaders:x4,HttpStatusCode:S4,formToJSON:w4,getAdapter:E4,mergeConfig:R4}=_t,FE=_t.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});async function PE(n,l){try{return(await FE.post("/login",{usernameOrEmail:n,password:l})).data}catch(r){throw _t.isAxiosError(r)?new Error(r.response?.data?.message??"로그인 실패"):new Error("알수없는 에러")}}_t.defaults.headers.common.Accept="application/json";const WE=async(n,l,r)=>{try{const{data:s}=await _t.post("/api/signup",{username:n,email:l,password:r},{headers:{"Content-Type":"application/json"}});return s}catch(s){throw console.error("회원가입 에러:",s.response||s),s}},wy=async n=>{try{const{data:l}=await _t.get("/api/me",{headers:{Authorization:`Bearer ${n}`}});return l}catch(l){throw console.error("/me 조회 에러:",l.response||l),l}},ys="user";function IE(){const[n,l]=w.useState(null),[r,s]=w.useState(null),[c,f]=w.useState(!1),[d,m]=w.useState(null);w.useEffect(()=>{const x=localStorage.getItem(ys);if(x)try{const R=JSON.parse(x);l(R),R.accessToken&&v(R.accessToken)}catch{localStorage.removeItem(ys)}},[]);const v=w.useCallback(async x=>{try{const R=await wy(x);s(R)}catch(R){console.error("사용자 정보 가져오기 실패:",R),s(null)}},[]),p=w.useCallback(async(x,R)=>{f(!0),m(null);try{const _=await PE(x,R);l(_),localStorage.setItem(ys,JSON.stringify(_)),await v(_.accessToken)}catch(_){throw new Error(_.message)}finally{f(!1)}},[v]),g=w.useCallback(()=>{l(null),s(null),localStorage.removeItem(ys)},[]);return{user:n,me:r,token:n?.accessToken||null,logIn:p,logOut:g,loading:c,error:d}}const Ey=w.createContext(void 0),Ry=({children:n})=>{const l=IE();return y.jsx(Ey.Provider,{value:l,children:n})},Da=()=>{const n=w.useContext(Ey);if(!n)throw new Error("useAuth는 <AuthProvider> 안에서 사용되어야 합니다.");return n},tR=async(n,l)=>{const r=[];for(const s of n.results)if(s.saleId)try{const c=await Zg(s.saleId);r.push(c)}catch(c){console.warn(`Sale ID ${s.saleId}를 가져올 수 없습니다:`,c)}return r};function eR(n,l){return jf({queryKey:["infiniteRecommendations",n],queryFn:async()=>{if(!n||!l)throw new Error("사용자 ID 또는 토큰이 없습니다");const r=await G2(n,l,50),s=await tR(r);return{recommendations:r,products:s}},enabled:!!n&&!!l,staleTime:300*1e3,gcTime:600*1e3})}async function nR(n,l){try{const r=await fetch("/api/reviews",{method:"POST",headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){const c=await r.text();throw new Error(`서버 에러 (${r.status}): ${c}`)}const s=r.headers.get("content-type");if(s&&s.includes("application/json")){const c=await r.text();if(c.trim())return JSON.parse(c)}return}catch(r){throw r}}async function aR(n){return await Ui(`/reviews?salesId=${encodeURIComponent(n)}`)}async function iR(n){return await Ui(`/reviews?userId=${encodeURIComponent(n)}`)}const lR=async(n,l)=>{const r=await iR(n),s=[];for(const c of r)if(c.salesId)try{const f=await Zg(c.salesId);s.push({review:c,product:f})}catch(f){console.warn(`Sale ID ${c.salesId}를 가져올 수 없습니다:`,f)}return s};function Ty(n,l){return jf({queryKey:["userReviews",n],queryFn:()=>lR(n),staleTime:120*1e3,gcTime:300*1e3,enabled:n>0&&!!l})}const rR=({userId:n,token:l})=>{const{data:r,error:s,isLoading:c}=eR(n,l),[f,d]=w.useState(10),m=w.useRef(null),v=w.useMemo(()=>r?.products?r.products.slice(0,f):[],[r?.products,f]),p=g=>{if(m.current){const x=m.current.clientWidth,R=m.current.scrollLeft,_=m.current.scrollWidth-m.current.clientWidth;if(g==="right"&&R>=_-10&&r?.products&&f<r.products.length){d(T=>Math.min(T+5,r.products.length)),setTimeout(()=>{m.current&&m.current.scrollBy({left:x,behavior:"smooth"})},100);return}m.current.scrollBy({left:g==="right"?x:-x,behavior:"smooth"})}};if(c)return y.jsx("div",{style:{width:"100%"},children:y.jsx(Ti,{children:y.jsx(Zl,{type:"enhanced",message:"추천 상품을 불러오는 중..."})})});if(s)throw s instanceof Error?s:new Error("추천 데이터를 불러오는 중 오류가 발생했습니다.");return!r?.products||r.products.length===0?y.jsx("div",{style:{width:"100%"},children:y.jsx(Ti,{children:"추천 결과가 없습니다"})}):y.jsx(Mg,{children:y.jsxs(Cg,{children:[y.jsx(Us,{left:!0,onClick:()=>p("left"),children:"◀"}),y.jsx(Dg,{children:y.jsx(jg,{ref:m,children:v.map(g=>y.jsx(Ug,{product:g},g.id))})}),y.jsx(Us,{onClick:()=>p("right"),children:"▶"})]})})},sR=({userId:n,token:l})=>{const{data:r,isLoading:s}=Ty(n,l),c=je();return s?y.jsx("div",{style:{width:"100%"},children:y.jsx(Ti,{children:y.jsx(Zl,{type:"enhanced",message:"리뷰 데이터를 불러오는 중..."})})}):(r?.length??0)<5?y.jsx("div",{style:{width:"100%"},children:y.jsxs(Ti,{children:["추천을 위해 상품 리뷰 또는 온보딩을 진행해 주세요",y.jsx(zg,{onClick:()=>c("/static/Onboarding"),children:"Onboarding"}),y.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"(온보딩을 완료했는데도 이 메세지가 나온다면 새로고침을 눌러주세요)"})]})}):y.jsx(rR,{userId:n,token:l})},uR=()=>{const{token:n,me:l}=Da(),r=je(),s=Ge();return!n||!l?y.jsx("div",{style:{width:"100%"},children:y.jsxs(Ti,{children:["로그인하고 맞춤 추천을 받아보세요!",y.jsx(zg,{onClick:()=>r("/static/Login",{state:{from:s.pathname}}),children:"login"})]})}):y.jsx(sR,{userId:l.userId,token:n})},oR=()=>y.jsxs(y.Fragment,{children:[y.jsx(YS,{}),y.jsx(fw,{}),y.jsx(Ta,{h:48}),y.jsxs(zi,{children:[y.jsx("div",{style:{width:"100%"},children:y.jsx(fm,{children:"추천 상품"})}),y.jsx(Ic,{fallback:y.jsx("div",{children:"상품을 불러오는중 오류가 발생했습니다"}),children:y.jsx(uR,{})}),y.jsx(dm,{}),y.jsx("div",{style:{width:"100%"},children:y.jsx(fm,{children:"인기순"})}),y.jsx(Ic,{fallback:y.jsx("div",{children:"상품을 불러오는중 오류가 발생했습니다"}),children:y.jsx(w.Suspense,{fallback:y.jsx(Ti,{children:y.jsx(Zl,{type:"enhanced",message:"인기 상품을 불러오고 있어요..."})}),children:y.jsx(V2,{})})}),y.jsx(dm,{})]}),y.jsx(Mi,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]}),cR=_S`

  @font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-1Thin.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-2ExtraLight.woff2') format('woff2');
      font-weight: 200;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-3Light.woff2') format('woff2');
      font-weight: 300;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2');
      font-weight: 400;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2');
      font-weight: 500;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2') format('woff2');
      font-weight: 600;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2');
      font-weight: 700;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
      font-weight: 800;
      font-display: swap;
  }

  @font-face {
      font-family: 'Paperozi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-9Black.woff2') format('woff2');
      font-weight: 900;
      font-display: swap;
  }

  :root {
    font-family: 'Paperozi', sans-serif;
    background-color: ${tt.secondary};
  }


  body {
    margin: 0;

  }

  *{
    box-sizing: border-box;
    color:${tt.accent};
  }

  h2{
    color:${tt.primary}
  }
`,fR=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #cfcfcfff;
  position: relative;
`;A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: #cfcfcfff;
  position: relative;
  top: 0;
`;A.div`
  background: url("/chair-blur.jpg") no-repeat center;
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;const dR=A.div`
  position: relative;
  z-index: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 320px;
`,hR=A.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`,Mm=A.input`
  height: 45px;
  border: 2px solid rgba(0, 60, 120, 0); /* 기본은 투명 */
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid rgba(0, 60, 120, 0.3); /* 부드럽게 나타남 */
  }

  &:focus {
    outline: none; /* 포커스 기본 테두리 제거 */
    border-color: ${tt.mainDeepBlue}; /* 클릭/포커스 시 강조 */
    transform: scale(0.98);
  }
`,pR=A.button`
  height: 48px;
  background-color: ${tt.mainLightBlue};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0a77e5ff;
  }
`,mR=A.div`
  text-align: center;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
`,gR=A.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`,yR=A.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  color: #dcdcdc;
`;A.span`
  color: #aaa;
`;const vR=A.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;A.pre`
  background: #f4f4f4;
  border: 1px dashed #bbb;
  padding: 12px;
  border-radius: 6px;
  margin-top: 12px;
  font-size: 12px;
  white-space: pre-wrap;
`;const bR=A.form`
  display: contents;
`;A.p`
  color: #ef4444;
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  padding: 8px;
  background: #fef2f2;
  border-radius: 4px;
  border: 1px solid #fecaca;
`;const xR=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${tt.secondary};
  position: relative;
`,Oy=A.h1`
  position: absolute;
  top: 0px;
  left: 30px;
  padding: 20px;
  font-weight: 900;
  text-align: left;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${tt.mainLightBlue};
  font-size: 32px;
`,SR=A.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`,wR=A.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,_c=A.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #444;
`,Uc=A.input`
  margin-top: 6px;
  min-width: 350px;
  height: 45px;
  padding: 0 12px;
  font-size: 14px;
  background-color: #e7e7e7ff;
  border: 2px solid rgba(0, 60, 120, 0); /* 기본은 투명 */
  border-radius: 4px;
  margin-bottom: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(0, 60, 120, 0.3);
  }

  &:focus {
    outline: none;
    border-color: ${tt.mainDeepBlue}; /* 포커스 시 강조 */
  }

  &:active {
    transform: scale(0.98); /* 클릭 감각 */
  }
`,ER=A.button`
  margin-top: 25px;
  background: ${tt.mainBlue};
  color: white;
  font-size: 14px;
  height: 45px;
  border: none;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #2675d0ff;
  }
`;A.div`
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({$type:n})=>n==="success"?"green":n==="error"?"red":"black"};
`;const RR=()=>{const[n,l]=w.useState(""),[r,s]=w.useState(""),[c,f]=w.useState(""),d=je(),m=Ge(),v=Da(),p=Vl();w.useEffect(()=>{if(v.token&&v.me){const x=m.state?.from||"/static/";d(x,{replace:!0})}},[v.token,v.me,d,m.state]);const g=async x=>{x.preventDefault(),f("");try{await v.logIn(n,r),p.showSuccess("로그인에 성공했습니다!"),setTimeout(()=>{const R=m.state?.from||"/static/";d(R,{replace:!0})},1e3)}catch(R){console.log("에러"),console.log(R.message),p.showError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.")}};return y.jsx(Vs,{children:y.jsxs(fR,{children:[y.jsx(Oy,{onClick:()=>d("/static/"),children:"L.B"}),y.jsxs(dR,{children:[y.jsx(hR,{children:"LOGIN"}),y.jsxs(bR,{onSubmit:g,children:[y.jsx(Mm,{type:"text",placeholder:"아이디 또는 이메일",value:n,onChange:x=>l(x.target.value),required:!0}),y.jsx(Mm,{type:"password",placeholder:"비밀번호",value:r,onChange:x=>s(x.target.value),required:!0}),y.jsx(pR,{type:"submit",disabled:v.loading,children:v.loading?"로그인 중...":"로그인"})]}),y.jsxs(mR,{children:["간편하게 시작하기",y.jsx(gR,{})]}),y.jsx(yR,{children:y.jsx(vR,{onClick:()=>d("/static/Signup"),children:"회원가입"})})]})]})})};function TR(){const{logIn:n,token:l,me:r}=Da(),[s,c]=w.useState("admin"),[f,d]=w.useState("admin@naver.com"),[m,v]=w.useState("password"),[p,g]=w.useState(""),[x,R]=w.useState(""),_=async()=>{g("⏳ 로그인 중..."),R("");try{await n(s,m),g("✅ 로그인 성공"),R(JSON.stringify({token:l,me:r},null,2))}catch(C){g("❌ 로그인 실패"),R(C?.message||String(C))}},T=async()=>{g("⏳ 회원가입 중..."),R("");try{const C=await WE(s,f,m);g("✅ 회원가입 성공"),R(JSON.stringify(C,null,2))}catch(C){g("❌ 회원가입 실패"),R(C?.response?.data?JSON.stringify(C.response.data,null,2):String(C))}},D=async()=>{g("⏳ /me 조회 중..."),R("");try{if(!l){g("❗ 토큰 없음. 로그인 먼저");return}const C=await wy(l);g("✅ /me 성공"),R(JSON.stringify(C,null,2))}catch(C){g("❌ /me 실패"),R(C?.response?.data?JSON.stringify(C.response.data,null,2):String(C))}};return y.jsxs("div",{style:{maxWidth:420,margin:"40px auto",padding:20,border:"1px solid #e5e7eb",borderRadius:10,background:"#fff"},children:[y.jsx("h1",{children:"로그인"}),y.jsx("input",{value:s,onChange:C=>c(C.target.value),placeholder:"아이디",style:{width:"100%",padding:10,marginBottom:10}}),y.jsx("input",{value:f,onChange:C=>d(C.target.value),placeholder:"이메일",style:{width:"100%",padding:10,marginBottom:10}}),y.jsx("input",{value:m,onChange:C=>v(C.target.value),placeholder:"비밀번호",type:"password",style:{width:"100%",padding:10,marginBottom:10}}),y.jsxs("div",{style:{display:"flex",gap:8},children:[y.jsx("button",{onClick:_,style:{flex:1,padding:10,background:"#6366f1",color:"#fff"},children:"로그인"}),y.jsx("button",{onClick:T,style:{flex:1,padding:10,background:"#0ea5e9",color:"#fff"},children:"회원가입"}),y.jsx("button",{onClick:D,style:{flex:1,padding:10,background:"#0ea5e9",color:"#fff"},children:"/me 조회"})]}),y.jsx("p",{children:p}),y.jsx("pre",{style:{background:"#0b1020",color:"#d1d5db",padding:10,borderRadius:6,overflow:"auto"},children:x})]})}const OR=A.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 0;
`,AR=A.div`
  margin: 5px;
`,CR=A.div`
  display: flex;
  align-items: flex-start;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 16px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #f8fafc;
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`,jR=A.div`
  flex: 0 0 120px;
  height: 160px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 0 0 100px;
    height: 140px;
  }

`,DR=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`,zR=A.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`,MR=A.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Nc=A.div`
  font-size: 14px;
  color: #555;
`,_R=A.span`
  font-size: 20px;
  font-weight: bold;
  color: ${tt.mainDeepBlue};
`,_m=A.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: calc(100% - 40px);
  border-left: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
`,UR=A.span`
  font-size: 13px;
  color: #555;
`;A.span`
  font-size: 11px;
  color: #fff;
  background: #ef4444;
  padding: 2px 6px;
  border-radius: 4px;
`;A.span`
  img {
    height: 16px;
  }
`;function NR({product:n}){const l=je(),r=()=>{l(`/static/DetailPage/${n.movieId}`,{state:{product:n}})},s={U:"-",B:"BluRay (1080, FHD)",3:"3D-BluRay",4:"4kBluRay (UHD)"};return y.jsx(AR,{children:y.jsxs(CR,{onClick:r,children:[y.jsx(jR,{children:y.jsx(DR,{src:n.imageLink??void 0})}),y.jsxs(zR,{children:[y.jsx(MR,{children:n.blurayTitle}),y.jsxs(_R,{children:[n.price,"원"]}),y.jsx(Ta,{h:20}),y.jsxs(Nc,{children:[" 해상도 : ",s[n.quality??""]||n.quality]}),y.jsxs(Nc,{children:[" 지역 코드 : ",n.regionCode?n.regionCode:"-"]}),n.isLimitedEdition&&y.jsx(Nc,{children:"한정판!"})]}),y.jsx(_m,{}),y.jsx(_m,{children:y.jsx(UR,{children:n.siteName})})]})})}function BR(){const{keyWord:n}=Vm();if(n===void 0)return y.jsx("div",{children:"Invalid ID"});const{data:l}=Fg(n),r=l||[];return console.log(r.length),r.length===0?y.jsx("div",{children:"검색 결과가 없습니다"}):y.jsx(OR,{children:r.map(s=>y.jsx(NR,{product:s},s.id))})}function LR(){return y.jsxs(y.Fragment,{children:[y.jsxs(zi,{children:[y.jsx(Ta,{h:60}),y.jsx(Ic,{fallback:y.jsx("div",{children:" 오류 발생"}),children:y.jsx(w.Suspense,{fallback:y.jsx(Zl,{}),children:y.jsx(BR,{})})})]}),y.jsx(Mi,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})}const qR=A.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px;
  background-color: white;
  border-radius: 20px;
  margin: 0 auto;
`,HR=A.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`,kR=A.div`
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,YR=A.div`
  width: 400px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`,QR=A.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`,Um=A.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a202c;
  line-height: 1.3;
`,GR=A.div`
  display: flex;
  align-items: baseline;

`,$R=A.span`
  font-size: 24px;
  font-weight: 700;
  color: ${tt.mainBlue};
`,XR=A.span`
  font-size: 14px;
  color: #64748b;
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
`,Bc=A.section`
  padding: 40px 0;
  border-top: 1px solid #e2e8f0;

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #1a202c;
    letter-spacing: 0.2px;
    padding-left: 20px;
  }
`,Nm=A.div`
  font-size: 14px;
  color: #4a5568;
  line-height: 1.6;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;

`,KR=A.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;

  th {
    width: 140px;
    text-align:center;
    padding: 16px 20px;
    font-weight: 600;
    font-size: 14px;
    color: #374151;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
  }

  td {
    padding: 16px 20px;
    font-size: 14px;
    color: #4a5568;
    border-bottom: 1px solid #f1f5f9;
    
    &:last-child {
      border-bottom: none;
    }
  }
`,VR=A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`,ZR=A.textarea`
  resize: none;
  min-height: 100px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  line-height: 1.6;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${tt.mainBlue};
  }

  &::placeholder {
    color: #94a3b8;
  }
`,JR=A.button`
  background: white;
  color: ${tt.mainBlue};
  border: none;
  padding: 10px;
  border-radius: 39% 20px 30% 36%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover {
    background: ${tt.mainBlue};
    color: white;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`,FR=A.div`
  margin-bottom: 12px;
  padding: 8px;
  border-bottom: 1px solid #eee;
  border-radius: 4px;
`,PR=A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,WR=A.span`
  font-weight: bold;
`,IR=A.div`
  margin-bottom: 4px;
`,tT=A.div`
  font-size: 12px;
  color: #999;
`,eT=A.div`
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #666;
`,nT=A.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,aT=A.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;A.span`
  font-size: 20px;
  color: ${n=>n.filled?"#fbbf24":"#e2e8f0"};
  cursor: pointer;
  transition: color 0.2s ease;
`;const iT=A.span`
  font-size: 12px;
  color: #64748b;
`;function lT(n){return Zs({queryKey:["getMovie",n],queryFn:()=>$2(n)})}function rT(n){return jf({queryKey:["reviews","salesId",n],queryFn:()=>aR(n),staleTime:120*1e3,gcTime:300*1e3})}function Ay(){const n=Cf();return Y2({mutationFn:({review:l,token:r})=>nR(l,r),onSuccess:(l,r)=>{n.invalidateQueries({queryKey:["reviews","salesId",r.review.salesId]})}})}const Cy=({rating:n,size:l="medium",showScore:r=!0})=>{const c={small:"14px",medium:"16px",large:"18px"}[l],f=d=>n>=d?y.jsx("span",{style:{color:"#fbbf24",fontSize:c},children:"★"},d):n>=d-.5?y.jsxs("span",{style:{color:"#e2e8f0",fontSize:c,position:"relative",display:"inline-block"},children:["★",y.jsx("span",{style:{position:"absolute",left:"0",top:"0",width:"50%",overflow:"hidden",color:"#fbbf24"},children:"★"})]},d):y.jsx("span",{style:{color:"#e2e8f0",fontSize:c},children:"★"},d);return y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx("div",{style:{display:"flex",alignItems:"center",gap:"2px"},children:[1,2,3,4,5].map(f)}),r&&y.jsxs("span",{style:{fontSize:"11px",color:"#64748b",fontWeight:"600",background:"#f1f5f9",padding:"2px 6px",borderRadius:"6px"},children:[n.toFixed(1),"점"]})]})};function sT(){const n=Ge();je();const l=n.state?.product,{parm:r}=Vm(),{token:s,me:c}=Da();if(!l)return y.jsx("div",{children:"상품 정보를 불러올 수 없습니다."});const{data:f}=lT(l.movieId??0),{data:d,isLoading:m}=rT(l.id),v=Ay(),[p,g]=w.useState(0),[x,R]=w.useState(""),_=async T=>{if(T.preventDefault(),!s){alert("로그인이 필요합니다.");return}if(p===0){alert("별점을 선택해주세요.");return}try{await v.mutateAsync({review:{salesId:l.id,rating:p,reviewComment:x||null},token:s}),alert("리뷰가 등록되었습니다!"),g(0),R("")}catch(D){let C="리뷰 등록에 실패했습니다.";D instanceof Error&&(C+=`
에러: ${D.message}`),alert(C)}};return y.jsxs(y.Fragment,{children:[y.jsxs(zi,{children:[y.jsx(Ta,{h:70}),y.jsxs(qR,{children:[y.jsxs(kR,{children:[y.jsx(YR,{children:y.jsx(HR,{src:l.imageLink??""})}),y.jsxs(QR,{children:[y.jsx(Um,{children:l.blurayTitle}),y.jsx(Um,{children:f.title}),y.jsx(GR,{children:y.jsxs($R,{children:[l.price,"원"]})}),y.jsx(Ta,{h:4}),y.jsx(XR,{onClick:()=>window.open(String(l.siteUrl),"_blank"),children:l.siteName})]})]}),y.jsxs(Bc,{children:[y.jsx("h2",{children:"작품 상세정보"}),y.jsx(KR,{children:y.jsxs("tbody",{children:[y.jsxs("tr",{children:[y.jsx("th",{children:"러닝타임"}),y.jsx("td",{children:f.runningTime||"-"})]}),y.jsxs("tr",{children:[y.jsx("th",{children:"감독"}),y.jsx("td",{children:f.director||"-"})]}),y.jsxs("tr",{children:[y.jsx("th",{children:"해상도"}),y.jsx("td",{children:l.quality||"-"})]}),y.jsxs("tr",{children:[y.jsx("th",{children:"지역코드"}),y.jsx("td",{children:l.regionCode||"-"})]})]})})]}),y.jsxs(Bc,{children:[y.jsx("h2",{children:"리뷰"}),s?y.jsxs(VR,{onSubmit:_,children:[y.jsxs(nT,{children:[y.jsx("label",{style:{fontSize:"14px",fontWeight:"600"},children:"별점:"}),y.jsx(aT,{children:[1,2,3,4,5].map(T=>y.jsxs("span",{onClick:()=>{p===T?g(T-.5):(T-.5,g(T))},style:{fontSize:"20px",cursor:"pointer",transition:"all 0.2s ease",position:"relative",display:"inline-block"},children:[y.jsx("span",{style:{color:"#e2e8f0"},children:"★"}),p>=T?y.jsx("span",{style:{position:"absolute",left:"0",top:"0",color:"#fbbf24"},children:"★"}):p>=T-.5?y.jsx("span",{style:{position:"absolute",left:"0",top:"0",width:"50%",overflow:"hidden",color:"#fbbf24"},children:"★"}):null]},T))}),y.jsx(iT,{children:p>0?`${p}점`:"별점을 선택해주세요"})]}),y.jsx(ZR,{placeholder:"리뷰를 작성해주세요...",value:x,onChange:T=>R(T.target.value)}),y.jsx(JR,{type:"submit",disabled:v.isPending,children:v.isPending?"등록 중...":"리뷰 등록"})]}):y.jsx(eT,{children:"리뷰를 작성하려면 로그인이 필요합니다."}),y.jsx(Ta,{h:20}),y.jsx(Nm,{children:m?y.jsx("div",{children:"리뷰를 불러오는 중..."}):d&&d.length>0?y.jsx("div",{children:d.map((T,D)=>y.jsxs(FR,{children:[y.jsxs(PR,{children:[y.jsx(WR,{children:T.username||`사용자${T.userId}`}),y.jsx(Cy,{rating:T.rating||0,size:"small",showScore:!0})]}),T.reviewComment&&y.jsx(IR,{children:T.reviewComment}),y.jsx(tT,{children:T.createdAt?new Date(T.createdAt).toLocaleString("ko-KR"):""})]},D))}):"아직 등록된 리뷰가 없습니다."})]}),y.jsxs(Bc,{children:[y.jsx("h2",{children:"외부 링크"}),y.jsx(Nm,{children:y.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[y.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"YES24"}),y.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"Aladin"}),y.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"Amazon JP"}),y.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"공식 사이트"})]})})]})]})]}),y.jsx(Mi,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})}const uT=({children:n})=>{const{token:l}=Da();return l?n:y.jsx(Fb,{to:"/static/Login",replace:!0})};A.header`
  padding: 20px 0;
  background: #fafafa;
`;A.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;A.a`
  color: ${tt.mainDeepBlue};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${tt.mainBlue};
    text-decoration: underline;
  }
`;const Bm=A.section`
  margin: 32px 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`,oT=A.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${tt.mainDeepBlue};
  margin: 0 0 16px 0;
  line-height: 1.5;
  letter-spacing: 0.2px;
  padding-left: 20px;
`,cT=A.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background: #fafafa;
    border-color: ${tt.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`,fT=A.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${tt.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  border: 2px solid ${tt.mainBlue}20;
  box-shadow: 0 2px 4px rgba(28, 118, 207, 0.15);

  &:hover {
    background: ${tt.mainDeepBlue};
  }
`,dT=A.div`
  flex: 1;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${tt.mainDeepBlue};
    margin: 0 0 8px 0;
    line-height: 1.3;
  }
  
  .email {
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
  }
`,hT=A.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`,pT=A.button`
  padding: 12px 20px;
  border: 2px solid ${tt.mainBlue};
  background: ${tt.mainBlue};
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: ${tt.mainBlue};
  }
`;A.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px;

  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;A.div`
  background: #fff;
  border-radius: 12px;
  height: 360px;
  display: flex;
  flex-direction: column;
  color: #666;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    border-color: ${tt.mainBlue}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    
    .card-image img {
      transform: scale(1.05);
    }
  }

  .card-image {
    flex-shrink: 0;
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-icon {
    font-size: 32px;
    margin-bottom: 8px;
    color: ${tt.mainBlue};
  }

  .card-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;const Lm=A.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  color: #666;
  border: 1px solid #f1f5f9;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #fafafa;
    border-color: ${tt.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  h3 {
    color: ${tt.mainDeepBlue};
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 12px 0;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }
`,mT=A.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
`,gT=A.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /* 작은 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    height: 2px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${tt.mainBlue};
    border-radius: 2px;
    transition: background 0.2s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${tt.mainDeepBlue};
  }

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,qm=A.button.withConfig({shouldForwardProp:n=>!["left"].includes(n)})`
  position: absolute;
  top: 0;
  bottom: 0;
  ${n=>n.left?"left: 0;":"right: 0;"}
  width: 50px;
  background: linear-gradient(90deg, ${n=>n.left?"rgba(28, 118, 207, 0.1)":"transparent"}, ${n=>n.left?"transparent":"rgba(28, 118, 207, 0.1)"});
  border: none;
  cursor: pointer;
  font-size: 20px;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  color: ${tt.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  &:hover {
    background: linear-gradient(90deg, ${n=>n.left?"rgba(28, 118, 207, 0.2)":"transparent"}, ${n=>n.left?"transparent":"rgba(28, 118, 207, 0.2)"});
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(28, 118, 207, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`,yT=A.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 100%;
`,vT=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  transition: transform 0.3s ease;
`,bT=A.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
  border-radius: 12px 12px 0 0;
`,xT=A.div`
  padding: 16px;
  flex: 1;
`,ST=A.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1a202c;
  line-height: 1.3;
`,wT=A.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
`,ET=A.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
`,RT=A.div`
  font-size: 13px;
  color: #64748b;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,TT=A.div`
  font-size: 11px;
  color: #94a3b8;
  text-align: right;
  font-weight: 500;
  margin-top: auto;
`,OT=A.div`
  background: #fff;
  border-radius: 12px;
  height: 360px;
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  color: #666;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${tt.mainBlue}40;
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    
    &::before {
      left: 100%;
    }
    
    .card-image img {
      transform: scale(1.05);
    }
  }

  .card-image {
    flex-shrink: 0;
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-icon {
    font-size: 32px;
    margin-bottom: 8px;
    color: ${tt.mainBlue};
  }

  .card-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 320px;
    
    .card-image {
      height: 160px;
    }
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 300px;
    
    .card-image {
      height: 140px;
    }
  }
`;A.div`
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;A.h2`
  color: #64748b;
  margin-bottom: 16px;
`;A.p`
  color: #94a3b8;
  margin-bottom: 24px;
`;const AT=A.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
`,CT=A.div`
  text-align: center;
  padding: 20px;
  color: #64748b;
`,jT=()=>{const{logOut:n,me:l,token:r}=Da(),s=je(),c=w.useRef(null);l?.userId;const{data:f,isLoading:d}=Ty(l?.userId||0,r||""),m=()=>{n(),s("/static/login")},v=p=>{if(c.current){const g=c.current.clientWidth;c.current.scrollBy({left:p==="right"?g:-g,behavior:"smooth"})}};return y.jsxs(y.Fragment,{children:[y.jsxs(zi,{children:[y.jsx(Ta,{h:48}),y.jsxs(QS,{children:[y.jsx(Bm,{children:y.jsxs(cT,{children:[y.jsx(fT,{children:(l?.username||l?.usernameOrEmail||"사용자").charAt(0).toUpperCase()}),y.jsxs(dT,{children:[y.jsx("h1",{children:l?.username||l?.usernameOrEmail||"사용자"}),y.jsx("div",{className:"email",children:l?.email||""}),y.jsx(AT,{children:l?.role||"일반 사용자"}),y.jsx(hT,{children:y.jsx(pT,{onClick:m,children:"로그아웃"})})]})]})}),y.jsxs(Bm,{children:[y.jsx(oT,{children:"내가 리뷰한 상품"}),d?y.jsx(Lm,{children:y.jsx(CT,{children:"리뷰를 불러오는 중..."})}):f&&f.length>0?y.jsxs(mT,{children:[y.jsx(qm,{left:!0,onClick:()=>v("left"),children:"◀"}),y.jsx(gT,{ref:c,children:f.map((p,g)=>y.jsxs(OT,{onClick:()=>s(`/static/DetailPage/${p.product.id}`,{state:{product:p.product}}),children:[y.jsxs(yT,{children:[y.jsx(vT,{src:p.product.imageLink||"",alt:p.product.blurayTitle||""}),y.jsx(bT,{})]}),y.jsxs(xT,{children:[y.jsx(ST,{children:p.product.blurayTitle}),y.jsxs(wT,{children:[y.jsx(ET,{children:"내 평점:"}),y.jsx(Cy,{rating:p.review.rating||0,size:"medium",showScore:!0})]}),p.review.reviewComment&&y.jsxs(RT,{children:['"',p.review.reviewComment,'"']}),y.jsx(TT,{children:p.review.createdAt?new Date(p.review.createdAt).toLocaleDateString("ko-KR"):""})]})]},g))}),y.jsx(qm,{onClick:()=>v("right"),children:"▶"})]}):y.jsxs(Lm,{children:[y.jsx("h3",{children:"아직 리뷰한 상품이 없습니다"}),y.jsx("p",{children:"상품에 리뷰를 남기면 여기에 표시됩니다."})]})]})]})]}),y.jsx(Mi,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})},DT=()=>{const[n,l]=w.useState(""),[r,s]=w.useState(""),[c,f]=w.useState(""),[d,m]=w.useState(""),[v,p]=w.useState(""),g=je(),x=Vl(),R=async _=>{_.preventDefault(),m(""),p("");try{const T=await _t.post("/api/signup",{username:n,email:r,password:c});x.showSuccess(T.data||"회원가입이 완료되었습니다!"),setTimeout(()=>{g("/static/Login")},2e3)}catch(T){T.response&&T.response.data?x.showError(`에러: ${T.response.data}`):x.showError("회원가입 중 오류가 발생했습니다.")}};return y.jsxs(Vs,{children:[y.jsxs(xR,{children:[y.jsx(Oy,{onClick:()=>g("/static/"),children:"L.B"}),y.jsx(SR,{children:"회원가입"}),y.jsxs(wR,{onSubmit:R,children:[y.jsxs(_c,{children:["사용자명",y.jsx(Uc,{type:"text",value:n,onChange:_=>l(_.target.value),required:!0})]}),y.jsxs(_c,{children:["이메일",y.jsx(Uc,{type:"email",value:r,onChange:_=>s(_.target.value),required:!0})]}),y.jsxs(_c,{children:["비밀번호",y.jsx(Uc,{type:"password",value:c,onChange:_=>f(_.target.value),required:!0})]}),y.jsx(ER,{type:"submit",children:"회원가입"})]})]}),y.jsx(Mi,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})},zT=A.div`
  padding: 2rem;
  text-align: center;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,MT=A.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${tt.mainBlue};
  font-weight: 600;
`,_T=A.div`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`,UT=A.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  overflow: hidden;
  position: relative;
  background-color: white;
  border-radius: 20px;
`,NT=A.div`
  display: flex;
  gap: 24px;
  width: 200vw; /* 화면 너비의 2배로 설정 */
  animation: ${n=>n.direction==="right"?"flowRight":"flowLeft"} 60s linear infinite;
  margin-bottom: 20px;
  will-change: transform; /* GPU 가속을 위한 최적화 */
  transition: animation-play-state 0.3s ease;
  
  /* 호버 시 애니메이션 일시정지 */
  &:hover {
    animation-play-state: paused;
  }
  
  @keyframes flowRight {
    0% {
      transform: translate3d(-100vw, 0, 0);
    }
    100% {
      transform: translate3d(0vw, 0, 0);
    }
  }
  
  @keyframes flowLeft {
    0% {
      transform: translate3d(0vw, 0, 0);
    }
    100% {
      transform: translate3d(-100vw, 0, 0);
    }
  }
`,BT=A.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  background-color: white;
  border: 3px solid ${tt.mainBlue};
  color: ${tt.mainBlue};
  border-radius: 25px 38% 24px 22%;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.25s ease;
  min-width: 200px;
  
  &:hover{
    background-color: ${tt.mainBlue};
    color: white;
    border:none;
  }
  
  
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    color: white;
    border:none;
  }
`,LT=A.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
`,qT=A.div`
  padding: 3rem 2rem;
  background-color: ${tt.mainBlue};
  width: 100%;
  position: relative;
`,HT=A.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.1;
`,kT=A.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem 0;
  text-align: center;
`,YT=A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 600px;
  margin: 0 auto 2rem;
`,QT=A.input`
  flex: 1;
  height: 48px;
  padding: 0 20px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 1rem;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
  
  &::placeholder {
    color: #9ca3af;
  }
`,GT=A.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;A.img`
  width: 24px;
  height: 24px;
`;const $T=A.div`
  padding: 2rem;
  background: white;
  width: 100%;
  animation: searchSectionFadeIn 0.6s ease-out;
  
  @keyframes searchSectionFadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,XT=A.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1.5rem;
  text-align: center;
`,KT=A.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
  justify-items: center;
  max-width: 900px;
  margin: 0 auto;
  
  /* 검색 결과 등장 애니메이션 */
  animation: searchResultsFadeIn 0.8s ease-out;
  
  @keyframes searchResultsFadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Hm=A.div`
  text-align: center;
  color: #6b7280;
  font-size: 1.2rem;
  padding: 3rem 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
  font-weight: 500;
`,_f=A.div`
  position: relative;
  width: 200px;
  height: 300px;
  background: #a2535370;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;

  /* 초기 상태 */
  opacity: 0;
  transform: translateY(30px) scale(0.8);

  /* 등장 애니메이션 */
  animation: cardSlideIn 0.8s ease-out forwards;
  animation-delay: ${n=>n.animationDelay}s;

  /* 애니메이션 완료 후 선택 상태 적용 */
  &.animation-complete {
    transform: ${n=>n.isSelected?"scale(0.95)":"scale(1)"};
    opacity: ${n=>n.isSelected?"0.8":"1"};
  }

  &:hover {
    transform: ${n=>n.isSelected?"translateY(-6px) scale(0.95)":"translateY(-8px) scale(1.05)"};
    z-index: 10;
    opacity: 1;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: ${n=>n.isSelected?"translateY(-4px) scale(0.9)":"translateY(-4px) scale(0.95)"};
    transition: all 0.1s ease;
  }

  @keyframes cardSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.8);
    }
    50% {
      opacity: 0.7;
      transform: translateY(-10px) scale(1.05);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

`,VT=A.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
`,ZT=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${_f}:hover & {
    transform: scale(1.1);
  }
`,JT=A.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(79, 70, 229, 0.1);
  z-index: 1;
  animation: overlayFadeIn 0.3s ease-out;
  
  @keyframes overlayFadeIn {
    0% {
      opacity: 0;
      background: rgba(79, 70, 229, 0);
    }
    100% {
      opacity: 1;
      background: rgba(79, 70, 229, 0.1);
    }
  }
`,FT=A.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: transparent;
  border-radius: 0 0 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  transition: all 0.3s ease;

  ${_f}:hover & {
    background: linear-gradient(transparent, rgba(0, 132, 255, 0.6));
  }
`,PT=A.h3`
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,WT=A.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,IT=A.span`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`,t4=A.span`
  font-size: 12px;
  color: #e5e7eb;
  font-weight: 500;
`,e4=A.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${tt.mainBlue};
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  animation: checkmarkAppear 0.3s ease-out;
  
  @keyframes checkmarkAppear {
    0% {
      transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.2) rotate(22deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }
`,sf=sn.memo(({product:n,isSelected:l,onClick:r,animationDelay:s=0})=>{const c=w.useRef(null);return w.useEffect(()=>{const f=setTimeout(()=>{c.current&&c.current.classList.add("animation-complete")},s*1e3+600);return()=>clearTimeout(f)},[s]),y.jsxs(_f,{ref:c,isSelected:l,onClick:r,animationDelay:s,children:[y.jsxs(VT,{children:[y.jsx(ZT,{src:n.imageLink??"",alt:n.blurayTitle??""}),l&&y.jsx(JT,{})]}),y.jsxs(FT,{children:[y.jsx(PT,{children:n.blurayTitle}),y.jsxs(WT,{children:[y.jsxs(IT,{children:[n.price?.toLocaleString(),"원"]}),y.jsxs(t4,{children:["해상도: ",n.quality]})]})]}),l&&y.jsx(e4,{children:"✓"})]})});sf.displayName="OnboardingCard";const n4=()=>{const{data:n}=X2(60),[l,r]=w.useState([]),s=je(),c=Ge();w.useRef(null);const[f,d]=w.useState(!0),{token:m,me:v}=Da(),p=Ay(),[g,x]=w.useState(!1),{showToast:R}=Vl(),[_,T]=w.useState(""),[D,C]=w.useState(""),[k,L]=w.useState(!1);w.useEffect(()=>{const st=setTimeout(()=>{C(_)},500);return()=>clearTimeout(st)},[_]);const{data:$}=Fg(D&&k?D:""),F=w.useMemo(()=>{if(!n||n.length===0)return[];const st=[];for(let ot=0;ot<n.length;ot+=6)st.push(n.slice(ot,ot+6));return st.map((ot,Dt)=>({products:[...ot,...ot,...ot,...ot,...ot,...ot,...ot,...ot],direction:Dt%2===0?"right":"left"}))},[n]),X=w.useCallback(st=>{r(ot=>ot.includes(st)?ot.filter(Dt=>Dt!==st):ot.length<5?[...ot,st]:ot)},[]),P=w.useCallback(()=>{if(!_.trim()){L(!1);return}L(!0)},[_]),K=w.useCallback(st=>{st.key==="Enter"&&P()},[P]),ut=w.useCallback(st=>{T(st.target.value),st.target.value.trim()||L(!1)},[]),mt=async()=>{if(!m||!v){R("로그인이 필요합니다.","error"),s("/static/Login",{state:{from:c.pathname}});return}if(l.length<5){R("최소 5개의 영화를 선택해주세요.","warning");return}x(!0);try{const st=l.map(ot=>p.mutateAsync({review:{salesId:ot,rating:5,reviewComment:null},token:m}));await Promise.all(st),R("선호 영화가 등록되었습니다! 이제 맞춤 추천을 받아보세요.","success"),s("/static")}catch{R("리뷰 생성 중 오류가 발생했습니다. 다시 시도해주세요.","error")}finally{x(!1)}};return y.jsxs(Vs,{children:[y.jsxs(zT,{children:[y.jsx(MT,{children:"좋아하는 영화를 선택해주세요 (최소 5개)"}),y.jsxs(_T,{children:[l.length,"/5 선택됨"]}),y.jsx(UT,{children:F.map((st,ot)=>y.jsx(NT,{direction:st.direction,rowIndex:ot,children:st.products.map((Dt,De)=>y.jsx(sf,{product:Dt,isSelected:l.includes(Dt.id),onClick:()=>X(Dt.id),animationDelay:ot*.6+De%6*.1},`${Dt.id}-${De}`))},ot))}),y.jsxs(LT,{children:[y.jsxs(qT,{children:[y.jsx(HT,{children:"원하는 영화를 직접 검색해보세요"}),y.jsx(kT,{children:"당신의 인생영화를 찾아보세요!"}),y.jsxs(YT,{children:[y.jsx(QT,{type:"text",value:_,onChange:ut,placeholder:"영화 제목을 입력하세요",onKeyDown:K}),y.jsx(GT,{onClick:P})]})]}),k&&y.jsxs($T,{children:[y.jsx(XT,{children:"검색 결과"}),$?$.length===0?y.jsx(Hm,{children:"검색 결과가 없습니다"}):y.jsx(KT,{children:$.map(st=>y.jsx(sf,{product:st,isSelected:l.includes(st.id),onClick:()=>X(st.id)},st.id))}):y.jsx(Hm,{children:"검색 중..."})]})]}),y.jsx(BT,{disabled:l.length<5||g,onClick:mt,children:g?"리뷰 생성 중...":`완료 (${l.length}/5)`})]}),y.jsx(Mi,{children:"© 2025 pusan national university capstone project Blu-ray Recommender"})]})};function a4(){return y.jsx(w.Suspense,{fallback:y.jsx(Vs,{children:y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#fafafa"},children:y.jsx(Zl,{type:"enhanced",message:"온보딩을 준비하고 있어요...",showProgress:!0})})}),children:y.jsx(n4,{})})}function i4(){return y.jsx(Ry,{children:y.jsx(FS,{children:y.jsxs(Sx,{children:[y.jsx(cR,{}),y.jsx(PS,{}),y.jsxs(Wb,{children:[y.jsx(Tn,{path:"/static",element:y.jsx(oR,{})}),y.jsx(Tn,{path:"/static/Login",element:y.jsx(RR,{})}),y.jsx(Tn,{path:"/static/My",element:y.jsx(uT,{children:y.jsx(jT,{})})}),y.jsx(Tn,{path:"/static/LoginPage",element:y.jsx(TR,{})}),y.jsx(Tn,{path:"/static/Signup",element:y.jsx(DT,{})}),y.jsx(Tn,{path:"/static/SearchPage/:keyWord",element:y.jsx(LR,{})}),y.jsx(Tn,{path:"/static/DetailPage/:id",element:y.jsx(sT,{})}),y.jsx(Tn,{path:"/static/Onboarding",element:y.jsx(a4,{})})]})]})})})}const l4=new C2;sb.createRoot(document.getElementById("root")).render(y.jsx(w.StrictMode,{children:y.jsx(j2,{client:l4,children:y.jsx(Ry,{children:y.jsx(i4,{})})})}));
//# sourceMappingURL=index-BWoGfCyN.js.map
