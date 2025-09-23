(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function F1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mc={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function P1(){if(j0)return _l;j0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:n,type:s,key:d,ref:c!==void 0?c:null,props:f}}return _l.Fragment=l,_l.jsx=r,_l.jsxs=r,_l}var D0;function W1(){return D0||(D0=1,mc.exports=P1()),mc.exports}var y=W1(),gc={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function I1(){if(z0)return ft;z0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function R(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,_={};function j(E,G,V){this.props=E,this.context=G,this.refs=_,this.updater=V||N}j.prototype.isReactComponent={},j.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},j.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Y(){}Y.prototype=j.prototype;function H(E,G,V){this.props=E,this.context=G,this.refs=_,this.updater=V||N}var $=H.prototype=new Y;$.constructor=H,A($,j.prototype),$.isPureReactComponent=!0;var F=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function K(E,G,V,J,nt,gt){return V=gt.ref,{$$typeof:n,type:E,key:G,ref:V!==void 0?V:null,props:gt}}function ot(E,G){return K(E.type,G,void 0,void 0,void 0,E.props)}function I(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function st(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(V){return G[V]})}var Ot=/\/+/g;function Ht(E,G){return typeof E=="object"&&E!==null&&E.key!=null?st(""+E.key):G.toString(36)}function sn(){}function un(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(sn,sn):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Zt(E,G,V,J,nt){var gt=typeof E;(gt==="undefined"||gt==="boolean")&&(E=null);var lt=!1;if(E===null)lt=!0;else switch(gt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(E.$$typeof){case n:case l:lt=!0;break;case g:return lt=E._init,Zt(lt(E._payload),G,V,J,nt)}}if(lt)return nt=nt(E),lt=J===""?"."+Ht(E,0):J,F(nt)?(V="",lt!=null&&(V=lt.replace(Ot,"$&/")+"/"),Zt(nt,G,V,"",function(ie){return ie})):nt!=null&&(I(nt)&&(nt=ot(nt,V+(nt.key==null||E&&E.key===nt.key?"":(""+nt.key).replace(Ot,"$&/")+"/")+lt)),G.push(nt)),1;lt=0;var Jt=J===""?".":J+":";if(F(E))for(var wt=0;wt<E.length;wt++)J=E[wt],gt=Jt+Ht(J,wt),lt+=Zt(J,G,V,gt,nt);else if(wt=R(E),typeof wt=="function")for(E=wt.call(E),wt=0;!(J=E.next()).done;)J=J.value,gt=Jt+Ht(J,wt++),lt+=Zt(J,G,V,gt,nt);else if(gt==="object"){if(typeof E.then=="function")return Zt(un(E),G,V,J,nt);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return lt}function L(E,G,V){if(E==null)return E;var J=[],nt=0;return Zt(E,J,"","",function(gt){return G.call(V,gt,nt++)}),J}function Z(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(V){(E._status===0||E._status===-1)&&(E._status=1,E._result=V)},function(V){(E._status===0||E._status===-1)&&(E._status=2,E._result=V)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var at=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function mt(){}return ft.Children={map:L,forEach:function(E,G,V){L(E,function(){G.apply(this,arguments)},V)},count:function(E){var G=0;return L(E,function(){G++}),G},toArray:function(E){return L(E,function(G){return G})||[]},only:function(E){if(!I(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ft.Component=j,ft.Fragment=r,ft.Profiler=c,ft.PureComponent=H,ft.StrictMode=s,ft.Suspense=v,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ft.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},ft.cache=function(E){return function(){return E.apply(null,arguments)}},ft.cloneElement=function(E,G,V){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=A({},E.props),nt=E.key,gt=void 0;if(G!=null)for(lt in G.ref!==void 0&&(gt=void 0),G.key!==void 0&&(nt=""+G.key),G)!W.call(G,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&G.ref===void 0||(J[lt]=G[lt]);var lt=arguments.length-2;if(lt===1)J.children=V;else if(1<lt){for(var Jt=Array(lt),wt=0;wt<lt;wt++)Jt[wt]=arguments[wt+2];J.children=Jt}return K(E.type,nt,void 0,void 0,gt,J)},ft.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},ft.createElement=function(E,G,V){var J,nt={},gt=null;if(G!=null)for(J in G.key!==void 0&&(gt=""+G.key),G)W.call(G,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(nt[J]=G[J]);var lt=arguments.length-2;if(lt===1)nt.children=V;else if(1<lt){for(var Jt=Array(lt),wt=0;wt<lt;wt++)Jt[wt]=arguments[wt+2];nt.children=Jt}if(E&&E.defaultProps)for(J in lt=E.defaultProps,lt)nt[J]===void 0&&(nt[J]=lt[J]);return K(E,gt,void 0,void 0,null,nt)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(E){return{$$typeof:m,render:E}},ft.isValidElement=I,ft.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:Z}},ft.memo=function(E,G){return{$$typeof:p,type:E,compare:G===void 0?null:G}},ft.startTransition=function(E){var G=X.T,V={};X.T=V;try{var J=E(),nt=X.S;nt!==null&&nt(V,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(mt,at)}catch(gt){at(gt)}finally{X.T=G}},ft.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ft.use=function(E){return X.H.use(E)},ft.useActionState=function(E,G,V){return X.H.useActionState(E,G,V)},ft.useCallback=function(E,G){return X.H.useCallback(E,G)},ft.useContext=function(E){return X.H.useContext(E)},ft.useDebugValue=function(){},ft.useDeferredValue=function(E,G){return X.H.useDeferredValue(E,G)},ft.useEffect=function(E,G,V){var J=X.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(E,G)},ft.useId=function(){return X.H.useId()},ft.useImperativeHandle=function(E,G,V){return X.H.useImperativeHandle(E,G,V)},ft.useInsertionEffect=function(E,G){return X.H.useInsertionEffect(E,G)},ft.useLayoutEffect=function(E,G){return X.H.useLayoutEffect(E,G)},ft.useMemo=function(E,G){return X.H.useMemo(E,G)},ft.useOptimistic=function(E,G){return X.H.useOptimistic(E,G)},ft.useReducer=function(E,G,V){return X.H.useReducer(E,G,V)},ft.useRef=function(E){return X.H.useRef(E)},ft.useState=function(E){return X.H.useState(E)},ft.useSyncExternalStore=function(E,G,V){return X.H.useSyncExternalStore(E,G,V)},ft.useTransition=function(){return X.H.useTransition()},ft.version="19.1.1",ft}var M0;function ff(){return M0||(M0=1,gc.exports=I1()),gc.exports}var w=ff();const rn=F1(w);var yc={exports:{}},Ul={},vc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function tb(){return _0||(_0=1,(function(n){function l(L,Z){var at=L.length;L.push(Z);t:for(;0<at;){var mt=at-1>>>1,E=L[mt];if(0<c(E,Z))L[mt]=Z,L[at]=E,at=mt;else break t}}function r(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var Z=L[0],at=L.pop();if(at!==Z){L[0]=at;t:for(var mt=0,E=L.length,G=E>>>1;mt<G;){var V=2*(mt+1)-1,J=L[V],nt=V+1,gt=L[nt];if(0>c(J,at))nt<E&&0>c(gt,J)?(L[mt]=gt,L[nt]=at,mt=nt):(L[mt]=J,L[V]=at,mt=V);else if(nt<E&&0>c(gt,at))L[mt]=gt,L[nt]=at,mt=nt;else break t}}return Z}function c(L,Z){var at=L.sortIndex-Z.sortIndex;return at!==0?at:L.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var v=[],p=[],g=1,x=null,R=3,N=!1,A=!1,_=!1,j=!1,Y=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function F(L){for(var Z=r(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=L)s(p),Z.sortIndex=Z.expirationTime,l(v,Z);else break;Z=r(p)}}function X(L){if(_=!1,F(L),!A)if(r(v)!==null)A=!0,W||(W=!0,Ht());else{var Z=r(p);Z!==null&&Zt(X,Z.startTime-L)}}var W=!1,K=-1,ot=5,I=-1;function st(){return j?!0:!(n.unstable_now()-I<ot)}function Ot(){if(j=!1,W){var L=n.unstable_now();I=L;var Z=!0;try{t:{A=!1,_&&(_=!1,H(K),K=-1),N=!0;var at=R;try{e:{for(F(L),x=r(v);x!==null&&!(x.expirationTime>L&&st());){var mt=x.callback;if(typeof mt=="function"){x.callback=null,R=x.priorityLevel;var E=mt(x.expirationTime<=L);if(L=n.unstable_now(),typeof E=="function"){x.callback=E,F(L),Z=!0;break e}x===r(v)&&s(v),F(L)}else s(v);x=r(v)}if(x!==null)Z=!0;else{var G=r(p);G!==null&&Zt(X,G.startTime-L),Z=!1}}break t}finally{x=null,R=at,N=!1}Z=void 0}}finally{Z?Ht():W=!1}}}var Ht;if(typeof $=="function")Ht=function(){$(Ot)};else if(typeof MessageChannel<"u"){var sn=new MessageChannel,un=sn.port2;sn.port1.onmessage=Ot,Ht=function(){un.postMessage(null)}}else Ht=function(){Y(Ot,0)};function Zt(L,Z){K=Y(function(){L(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_next=function(L){switch(R){case 1:case 2:case 3:var Z=3;break;default:Z=R}var at=R;R=Z;try{return L()}finally{R=at}},n.unstable_requestPaint=function(){j=!0},n.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var at=R;R=L;try{return Z()}finally{R=at}},n.unstable_scheduleCallback=function(L,Z,at){var mt=n.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?mt+at:mt):at=mt,L){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=at+E,L={id:g++,callback:Z,priorityLevel:L,startTime:at,expirationTime:E,sortIndex:-1},at>mt?(L.sortIndex=at,l(p,L),r(v)===null&&L===r(p)&&(_?(H(K),K=-1):_=!0,Zt(X,at-mt))):(L.sortIndex=E,l(v,L),A||N||(A=!0,W||(W=!0,Ht()))),L},n.unstable_shouldYield=st,n.unstable_wrapCallback=function(L){var Z=R;return function(){var at=R;R=Z;try{return L.apply(this,arguments)}finally{R=at}}}})(bc)),bc}var U0;function eb(){return U0||(U0=1,vc.exports=tb()),vc.exports}var xc={exports:{}},se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function nb(){if(N0)return se;N0=1;var n=ff();function l(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(v,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:v,containerInfo:p,implementation:g}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,se.createPortal=function(v,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return f(v,p,null,g)},se.flushSync=function(v){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,v)return v()}finally{d.T=p,s.p=g,s.d.f()}},se.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},se.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},se.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var g=p.as,x=m(g,p.crossOrigin),R=typeof p.integrity=="string"?p.integrity:void 0,N=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:R,fetchPriority:N}):g==="script"&&s.d.X(v,{crossOrigin:x,integrity:R,fetchPriority:N,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},se.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=m(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(v)},se.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=m(g,p.crossOrigin);s.d.L(v,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},se.preloadModule=function(v,p){if(typeof v=="string")if(p){var g=m(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(v)},se.requestFormReset=function(v){s.d.r(v)},se.unstable_batchedUpdates=function(v,p){return v(p)},se.useFormState=function(v,p,g){return d.H.useFormState(v,p,g)},se.useFormStatus=function(){return d.H.useHostTransitionStatus()},se.version="19.1.1",se}var B0;function ab(){if(B0)return xc.exports;B0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),xc.exports=nb(),xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function ib(){if(L0)return Ul;L0=1;var n=eb(),l=ff(),r=ab();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function v(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,i=e;;){var u=a.return;if(u===null)break;var o=u.alternate;if(o===null){if(i=u.return,i!==null){a=i;continue}break}if(u.child===o.child){for(o=u.child;o;){if(o===a)return m(u),t;if(o===i)return m(u),e;o=o.sibling}throw Error(s(188))}if(a.return!==i.return)a=u,i=o;else{for(var h=!1,b=u.child;b;){if(b===a){h=!0,a=u,i=o;break}if(b===i){h=!0,i=u,a=o;break}b=b.sibling}if(!h){for(b=o.child;b;){if(b===a){h=!0,a=o,i=u;break}if(b===i){h=!0,i=o,a=u;break}b=b.sibling}if(!h)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),$=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),Ot=Symbol.iterator;function Ht(t){return t===null||typeof t!="object"?null:(t=Ot&&t[Ot]||t["@@iterator"],typeof t=="function"?t:null)}var sn=Symbol.for("react.client.reference");function un(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===sn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case j:return"Profiler";case _:return"StrictMode";case X:return"Suspense";case W:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case $:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return e=t.displayName||null,e!==null?e:un(t.type)||"Memo";case ot:e=t._payload,t=t._init;try{return un(t(e))}catch{}}return null}var Zt=Array.isArray,L=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},mt=[],E=-1;function G(t){return{current:t}}function V(t){0>E||(t.current=mt[E],mt[E]=null,E--)}function J(t,e){E++,mt[E]=t.current,t.current=e}var nt=G(null),gt=G(null),lt=G(null),Jt=G(null);function wt(t,e){switch(J(lt,e),J(gt,t),J(nt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?a0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=a0(e),t=i0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(nt),J(nt,t)}function ie(){V(nt),V(gt),V(lt)}function aa(t){t.memoizedState!==null&&J(Jt,t);var e=nt.current,a=i0(e,t.type);e!==a&&(J(gt,t),J(nt,a))}function on(t){gt.current===t&&(V(nt),V(gt)),Jt.current===t&&(V(Jt),Cl._currentValue=at)}var De=Object.prototype.hasOwnProperty,eu=n.unstable_scheduleCallback,nu=n.unstable_cancelCallback,Cy=n.unstable_shouldYield,jy=n.unstable_requestPaint,Pe=n.unstable_now,Dy=n.unstable_getCurrentPriorityLevel,Lf=n.unstable_ImmediatePriority,qf=n.unstable_UserBlockingPriority,Pl=n.unstable_NormalPriority,zy=n.unstable_LowPriority,Hf=n.unstable_IdlePriority,My=n.log,_y=n.unstable_setDisableYieldValue,Bi=null,be=null;function jn(t){if(typeof My=="function"&&_y(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Bi,t)}catch{}}var xe=Math.clz32?Math.clz32:By,Uy=Math.log,Ny=Math.LN2;function By(t){return t>>>=0,t===0?32:31-(Uy(t)/Ny|0)|0}var Wl=256,Il=4194304;function ia(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function tr(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var u=0,o=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var b=i&134217727;return b!==0?(i=b&~o,i!==0?u=ia(i):(h&=b,h!==0?u=ia(h):a||(a=b&~t,a!==0&&(u=ia(a))))):(b=i&~o,b!==0?u=ia(b):h!==0?u=ia(h):a||(a=i&~t,a!==0&&(u=ia(a)))),u===0?0:e!==0&&e!==u&&(e&o)===0&&(o=u&-u,a=e&-e,o>=a||o===32&&(a&4194048)!==0)?e:u}function Li(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ly(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(){var t=Wl;return Wl<<=1,(Wl&4194048)===0&&(Wl=256),t}function Yf(){var t=Il;return Il<<=1,(Il&62914560)===0&&(Il=4194304),t}function au(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function qi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qy(t,e,a,i,u,o){var h=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,z=t.hiddenUpdates;for(a=h&~a;0<a;){var q=31-xe(a),Q=1<<q;b[q]=0,S[q]=-1;var M=z[q];if(M!==null)for(z[q]=null,q=0;q<M.length;q++){var U=M[q];U!==null&&(U.lane&=-536870913)}a&=~Q}i!==0&&Qf(t,i,0),o!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=o&~(h&~e))}function Qf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-xe(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&4194090}function Gf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-xe(a),u=1<<i;u&e|t[i]&e&&(t[i]|=e),a&=~u}}function iu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $f(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:E0(t.type))}function Hy(t,e){var a=Z.p;try{return Z.p=t,e()}finally{Z.p=a}}var Dn=Math.random().toString(36).slice(2),le="__reactFiber$"+Dn,de="__reactProps$"+Dn,Ma="__reactContainer$"+Dn,ru="__reactEvents$"+Dn,ky="__reactListeners$"+Dn,Yy="__reactHandles$"+Dn,Xf="__reactResources$"+Dn,Hi="__reactMarker$"+Dn;function su(t){delete t[le],delete t[de],delete t[ru],delete t[ky],delete t[Yy]}function _a(t){var e=t[le];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ma]||a[le]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=u0(t);t!==null;){if(a=t[le])return a;t=u0(t)}return e}t=a,a=t.parentNode}return null}function Ua(t){if(t=t[le]||t[Ma]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ki(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Na(t){var e=t[Xf];return e||(e=t[Xf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[Hi]=!0}var Kf=new Set,Vf={};function la(t,e){Ba(t,e),Ba(t+"Capture",e)}function Ba(t,e){for(Vf[t]=e,t=0;t<e.length;t++)Kf.add(e[t])}var Qy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zf={},Jf={};function Gy(t){return De.call(Jf,t)?!0:De.call(Zf,t)?!1:Qy.test(t)?Jf[t]=!0:(Zf[t]=!0,!1)}function er(t,e,a){if(Gy(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function nr(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function cn(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}var uu,Ff;function La(t){if(uu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||"",Ff=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uu+t+Ff}var ou=!1;function cu(t,e){if(!t||ou)return"";ou=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(U){var M=U}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(U){M=U}t.call(Q.prototype)}}else{try{throw Error()}catch(U){M=U}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(U){if(U&&M&&typeof U.stack=="string")return[U.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),h=o[0],b=o[1];if(h&&b){var S=h.split(`
`),z=b.split(`
`);for(u=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;u<z.length&&!z[u].includes("DetermineComponentFrameRoot");)u++;if(i===S.length||u===z.length)for(i=S.length-1,u=z.length-1;1<=i&&0<=u&&S[i]!==z[u];)u--;for(;1<=i&&0<=u;i--,u--)if(S[i]!==z[u]){if(i!==1||u!==1)do if(i--,u--,0>u||S[i]!==z[u]){var q=`
`+S[i].replace(" at new "," at ");return t.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",t.displayName)),q}while(1<=i&&0<=u);break}}}finally{ou=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?La(a):""}function $y(t){switch(t.tag){case 26:case 27:case 5:return La(t.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return cu(t.type,!1);case 11:return cu(t.type.render,!1);case 1:return cu(t.type,!0);case 31:return La("Activity");default:return""}}function Pf(t){try{var e="";do e+=$y(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xy(t){var e=Wf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(h){i=""+h,o.call(this,h)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ar(t){t._valueTracker||(t._valueTracker=Xy(t))}function If(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=Wf(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function ir(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ky=/[\n"\\]/g;function Me(t){return t.replace(Ky,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fu(t,e,a,i,u,o,h,b){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ze(e)):t.value!==""+ze(e)&&(t.value=""+ze(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?du(t,h,ze(e)):a!=null?du(t,h,ze(a)):i!=null&&t.removeAttribute("value"),u==null&&o!=null&&(t.defaultChecked=!!o),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ze(b):t.removeAttribute("name")}function td(t,e,a,i,u,o,h,b){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;a=a!=null?""+ze(a):"",e=e!=null?""+ze(e):a,b||e===t.value||(t.value=e),t.defaultValue=e}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=b?t.checked:!!i,t.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function du(t,e,a){e==="number"&&ir(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qa(t,e,a,i){if(t=t.options,e){e={};for(var u=0;u<a.length;u++)e["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=e.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&i&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),e=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,i&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function ed(t,e,a){if(e!=null&&(e=""+ze(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ze(a):""}function nd(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(s(92));if(Zt(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=ze(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i)}function Ha(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ad(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||Vy.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function id(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var u in e)i=e[u],e.hasOwnProperty(u)&&a[u]!==i&&ad(t,u,i)}else for(var o in e)e.hasOwnProperty(o)&&ad(t,o,e[o])}function hu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lr(t){return Jy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ka=null,Ya=null;function ld(t){var e=Ua(t);if(e&&(t=e.stateNode)){var a=t[de]||null;t:switch(t=e.stateNode,e.type){case"input":if(fu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Me(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var u=i[de]||null;if(!u)throw Error(s(90));fu(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&If(i)}break t;case"textarea":ed(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&qa(t,!!a.multiple,e,!1)}}}var gu=!1;function rd(t,e,a){if(gu)return t(e,a);gu=!0;try{var i=t(e);return i}finally{if(gu=!1,(ka!==null||Ya!==null)&&($r(),ka&&(e=ka,t=Ya,Ya=ka=null,ld(e),t)))for(e=0;e<t.length;e++)ld(t[e])}}function Yi(t,e){var a=t.stateNode;if(a===null)return null;var i=a[de]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(fn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{yu=!1}var zn=null,vu=null,rr=null;function sd(){if(rr)return rr;var t,e=vu,a=e.length,i,u="value"in zn?zn.value:zn.textContent,o=u.length;for(t=0;t<a&&e[t]===u[t];t++);var h=a-t;for(i=1;i<=h&&e[a-i]===u[o-i];i++);return rr=u.slice(t,1<i?1-i:void 0)}function sr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ur(){return!0}function ud(){return!1}function he(t){function e(a,i,u,o,h){this._reactName=a,this._targetInst=u,this.type=i,this.nativeEvent=o,this.target=h,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(o):o[b]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:ud,this.isPropagationStopped=ud,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},or=he(ra),Gi=g({},ra,{view:0,detail:0}),Fy=he(Gi),bu,xu,$i,cr=g({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(bu=t.screenX-$i.screenX,xu=t.screenY-$i.screenY):xu=bu=0,$i=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),od=he(cr),Py=g({},cr,{dataTransfer:0}),Wy=he(Py),Iy=g({},Gi,{relatedTarget:0}),Su=he(Iy),tv=g({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),ev=he(tv),nv=g({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),av=he(nv),iv=g({},ra,{data:0}),cd=he(iv),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sv[t])?!!e[t]:!1}function wu(){return uv}var ov=g({},Gi,{key:function(t){if(t.key){var e=lv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?sr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cv=he(ov),fv=g({},cr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=he(fv),dv=g({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),hv=he(dv),pv=g({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=he(pv),gv=g({},cr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yv=he(gv),vv=g({},ra,{newState:0,oldState:0}),bv=he(vv),xv=[9,13,27,32],Eu=fn&&"CompositionEvent"in window,Xi=null;fn&&"documentMode"in document&&(Xi=document.documentMode);var Sv=fn&&"TextEvent"in window&&!Xi,dd=fn&&(!Eu||Xi&&8<Xi&&11>=Xi),hd=" ",pd=!1;function md(t,e){switch(t){case"keyup":return xv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qa=!1;function wv(t,e){switch(t){case"compositionend":return gd(e);case"keypress":return e.which!==32?null:(pd=!0,hd);case"textInput":return t=e.data,t===hd&&pd?null:t;default:return null}}function Ev(t,e){if(Qa)return t==="compositionend"||!Eu&&md(t,e)?(t=sd(),rr=vu=zn=null,Qa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dd&&e.locale!=="ko"?null:e.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rv[t.type]:e==="textarea"}function vd(t,e,a,i){ka?Ya?Ya.push(i):Ya=[i]:ka=i,e=Fr(e,"onChange"),0<e.length&&(a=new or("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Ki=null,Vi=null;function Tv(t){Wp(t,0)}function fr(t){var e=ki(t);if(If(e))return t}function bd(t,e){if(t==="change")return e}var xd=!1;if(fn){var Ru;if(fn){var Tu="oninput"in document;if(!Tu){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Tu=typeof Sd.oninput=="function"}Ru=Tu}else Ru=!1;xd=Ru&&(!document.documentMode||9<document.documentMode)}function wd(){Ki&&(Ki.detachEvent("onpropertychange",Ed),Vi=Ki=null)}function Ed(t){if(t.propertyName==="value"&&fr(Vi)){var e=[];vd(e,Vi,t,mu(t)),rd(Tv,e)}}function Ov(t,e,a){t==="focusin"?(wd(),Ki=e,Vi=a,Ki.attachEvent("onpropertychange",Ed)):t==="focusout"&&wd()}function Av(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fr(Vi)}function Cv(t,e){if(t==="click")return fr(e)}function jv(t,e){if(t==="input"||t==="change")return fr(e)}function Dv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Se=typeof Object.is=="function"?Object.is:Dv;function Zi(t,e){if(Se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var u=a[i];if(!De.call(e,u)||!Se(t[u],e[u]))return!1}return!0}function Rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,e){var a=Rd(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Rd(a)}}function Od(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Od(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ad(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ir(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=ir(t.document)}return e}function Ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var zv=fn&&"documentMode"in document&&11>=document.documentMode,Ga=null,Au=null,Ji=null,Cu=!1;function Cd(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Ga==null||Ga!==ir(i)||(i=Ga,"selectionStart"in i&&Ou(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ji&&Zi(Ji,i)||(Ji=i,i=Fr(Au,"onSelect"),0<i.length&&(e=new or("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=Ga)))}function sa(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var $a={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},ju={},jd={};fn&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function ua(t){if(ju[t])return ju[t];if(!$a[t])return t;var e=$a[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in jd)return ju[t]=e[a];return t}var Dd=ua("animationend"),zd=ua("animationiteration"),Md=ua("animationstart"),Mv=ua("transitionrun"),_v=ua("transitionstart"),Uv=ua("transitioncancel"),_d=ua("transitionend"),Ud=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Ge(t,e){Ud.set(t,e),la(e,[t])}var Nd=new WeakMap;function _e(t,e){if(typeof t=="object"&&t!==null){var a=Nd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Pf(e)},Nd.set(t,e),e)}return{value:t,source:e,stack:Pf(e)}}var Ue=[],Xa=0,zu=0;function dr(){for(var t=Xa,e=zu=Xa=0;e<t;){var a=Ue[e];Ue[e++]=null;var i=Ue[e];Ue[e++]=null;var u=Ue[e];Ue[e++]=null;var o=Ue[e];if(Ue[e++]=null,i!==null&&u!==null){var h=i.pending;h===null?u.next=u:(u.next=h.next,h.next=u),i.pending=u}o!==0&&Bd(a,u,o)}}function hr(t,e,a,i){Ue[Xa++]=t,Ue[Xa++]=e,Ue[Xa++]=a,Ue[Xa++]=i,zu|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Mu(t,e,a,i){return hr(t,e,a,i),pr(t)}function Ka(t,e){return hr(t,null,null,e),pr(t)}function Bd(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var u=!1,o=t.return;o!==null;)o.childLanes|=a,i=o.alternate,i!==null&&(i.childLanes|=a),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(u=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,u&&e!==null&&(u=31-xe(a),t=o.hiddenUpdates,i=t[u],i===null?t[u]=[e]:i.push(e),e.lane=a|536870912),o):null}function pr(t){if(50<xl)throw xl=0,Ho=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Va={};function Nv(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(t,e,a,i){return new Nv(t,e,a,i)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dn(t,e){var a=t.alternate;return a===null?(a=we(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ld(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function mr(t,e,a,i,u,o){var h=0;if(i=t,typeof t=="function")_u(t)&&(h=1);else if(typeof t=="string")h=L1(t,a,nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case I:return t=we(31,a,e,u),t.elementType=I,t.lanes=o,t;case A:return oa(a.children,u,o,e);case _:h=8,u|=24;break;case j:return t=we(12,a,e,u|2),t.elementType=j,t.lanes=o,t;case X:return t=we(13,a,e,u),t.elementType=X,t.lanes=o,t;case W:return t=we(19,a,e,u),t.elementType=W,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:case $:h=10;break t;case H:h=9;break t;case F:h=11;break t;case K:h=14;break t;case ot:h=16,i=null;break t}h=29,a=Error(s(130,t===null?"null":typeof t,"")),i=null}return e=we(h,a,e,u),e.elementType=t,e.type=i,e.lanes=o,e}function oa(t,e,a,i){return t=we(7,t,i,e),t.lanes=a,t}function Uu(t,e,a){return t=we(6,t,null,e),t.lanes=a,t}function Nu(t,e,a){return e=we(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Za=[],Ja=0,gr=null,yr=0,Ne=[],Be=0,ca=null,hn=1,pn="";function fa(t,e){Za[Ja++]=yr,Za[Ja++]=gr,gr=t,yr=e}function qd(t,e,a){Ne[Be++]=hn,Ne[Be++]=pn,Ne[Be++]=ca,ca=t;var i=hn;t=pn;var u=32-xe(i)-1;i&=~(1<<u),a+=1;var o=32-xe(e)+u;if(30<o){var h=u-u%5;o=(i&(1<<h)-1).toString(32),i>>=h,u-=h,hn=1<<32-xe(e)+u|a<<u|i,pn=o+t}else hn=1<<o|a<<u|i,pn=t}function Bu(t){t.return!==null&&(fa(t,1),qd(t,1,0))}function Lu(t){for(;t===gr;)gr=Za[--Ja],Za[Ja]=null,yr=Za[--Ja],Za[Ja]=null;for(;t===ca;)ca=Ne[--Be],Ne[Be]=null,pn=Ne[--Be],Ne[Be]=null,hn=Ne[--Be],Ne[Be]=null}var ce=null,Lt=null,St=!1,da=null,We=!1,qu=Error(s(519));function ha(t){var e=Error(s(418,""));throw Wi(_e(e,t)),qu}function Hd(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[le]=t,e[de]=i,a){case"dialog":vt("cancel",e),vt("close",e);break;case"iframe":case"object":case"embed":vt("load",e);break;case"video":case"audio":for(a=0;a<wl.length;a++)vt(wl[a],e);break;case"source":vt("error",e);break;case"img":case"image":case"link":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"input":vt("invalid",e),td(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),ar(e);break;case"select":vt("invalid",e);break;case"textarea":vt("invalid",e),nd(e,i.value,i.defaultValue,i.children),ar(e)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||n0(e.textContent,a)?(i.popover!=null&&(vt("beforetoggle",e),vt("toggle",e)),i.onScroll!=null&&vt("scroll",e),i.onScrollEnd!=null&&vt("scrollend",e),i.onClick!=null&&(e.onclick=Pr),e=!0):e=!1,e||ha(t)}function kd(t){for(ce=t.return;ce;)switch(ce.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:ce=ce.return}}function Fi(t){if(t!==ce)return!1;if(!St)return kd(t),St=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ec(t.type,t.memoizedProps)),a=!a),a&&Lt&&ha(t),kd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Lt=Xe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Lt=null}}else e===27?(e=Lt,Vn(t.type)?(t=lc,lc=null,Lt=t):Lt=e):Lt=ce?Xe(t.stateNode.nextSibling):null;return!0}function Pi(){Lt=ce=null,St=!1}function Yd(){var t=da;return t!==null&&(ge===null?ge=t:ge.push.apply(ge,t),da=null),t}function Wi(t){da===null?da=[t]:da.push(t)}var Hu=G(null),pa=null,mn=null;function Mn(t,e,a){J(Hu,e._currentValue),e._currentValue=a}function gn(t){t._currentValue=Hu.current,V(Hu)}function ku(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function Yu(t,e,a,i){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var o=u.dependencies;if(o!==null){var h=u.child;o=o.firstContext;t:for(;o!==null;){var b=o;o=u;for(var S=0;S<e.length;S++)if(b.context===e[S]){o.lanes|=a,b=o.alternate,b!==null&&(b.lanes|=a),ku(o.return,a,t),i||(h=null);break t}o=b.next}}else if(u.tag===18){if(h=u.return,h===null)throw Error(s(341));h.lanes|=a,o=h.alternate,o!==null&&(o.lanes|=a),ku(h,a,t),h=null}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===t){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}}function Ii(t,e,a,i){t=null;for(var u=e,o=!1;u!==null;){if(!o){if((u.flags&524288)!==0)o=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var h=u.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var b=u.type;Se(u.pendingProps.value,h.value)||(t!==null?t.push(b):t=[b])}}else if(u===Jt.current){if(h=u.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Cl):t=[Cl])}u=u.return}t!==null&&Yu(e,t,a,i),e.flags|=262144}function vr(t){for(t=t.firstContext;t!==null;){if(!Se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ma(t){pa=t,mn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function re(t){return Qd(pa,t)}function br(t,e){return pa===null&&ma(t),Qd(t,e)}function Qd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},mn===null){if(t===null)throw Error(s(308));mn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else mn=mn.next=e;return a}var Bv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Lv=n.unstable_scheduleCallback,qv=n.unstable_NormalPriority,Xt={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new Bv,data:new Map,refCount:0}}function tl(t){t.refCount--,t.refCount===0&&Lv(qv,function(){t.controller.abort()})}var el=null,Gu=0,Fa=0,Pa=null;function Hv(t,e){if(el===null){var a=el=[];Gu=0,Fa=Ko(),Pa={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Gu++,e.then(Gd,Gd),e}function Gd(){if(--Gu===0&&el!==null){Pa!==null&&(Pa.status="fulfilled");var t=el;el=null,Fa=0,Pa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function kv(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var u=0;u<a.length;u++)(0,a[u])(e)},function(u){for(i.status="rejected",i.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),i}var $d=L.S;L.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Hv(t,e),$d!==null&&$d(t,e)};var ga=G(null);function $u(){var t=ga.current;return t!==null?t:zt.pooledCache}function xr(t,e){e===null?J(ga,ga.current):J(ga,e.pool)}function Xd(){var t=$u();return t===null?null:{parent:Xt._currentValue,pool:t}}var nl=Error(s(460)),Kd=Error(s(474)),Sr=Error(s(542)),Xu={then:function(){}};function Vd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wr(){}function Zd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(wr,wr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Fd(t),t;default:if(typeof e.status=="string")e.then(wr,wr);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=i}},function(i){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Fd(t),t}throw al=e,nl}}var al=null;function Jd(){if(al===null)throw Error(s(459));var t=al;return al=null,t}function Fd(t){if(t===nl||t===Sr)throw Error(s(483))}var _n=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Un(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Rt&2)!==0){var u=i.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),i.pending=e,e=pr(t),Bd(t,null,a),e}return hr(t,i,e,a),pr(t)}function il(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Gf(t,a)}}function Zu(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var u=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var h={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?u=o=h:o=o.next=h,a=a.next}while(a!==null);o===null?u=o=e:o=o.next=e}else u=o=e;a={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Ju=!1;function ll(){if(Ju){var t=Pa;if(t!==null)throw t}}function rl(t,e,a,i){Ju=!1;var u=t.updateQueue;_n=!1;var o=u.firstBaseUpdate,h=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var S=b,z=S.next;S.next=null,h===null?o=z:h.next=z,h=S;var q=t.alternate;q!==null&&(q=q.updateQueue,b=q.lastBaseUpdate,b!==h&&(b===null?q.firstBaseUpdate=z:b.next=z,q.lastBaseUpdate=S))}if(o!==null){var Q=u.baseState;h=0,q=z=S=null,b=o;do{var M=b.lane&-536870913,U=M!==b.lane;if(U?(bt&M)===M:(i&M)===M){M!==0&&M===Fa&&(Ju=!0),q!==null&&(q=q.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ut=t,it=b;M=e;var jt=a;switch(it.tag){case 1:if(ut=it.payload,typeof ut=="function"){Q=ut.call(jt,Q,M);break t}Q=ut;break t;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=it.payload,M=typeof ut=="function"?ut.call(jt,Q,M):ut,M==null)break t;Q=g({},Q,M);break t;case 2:_n=!0}}M=b.callback,M!==null&&(t.flags|=64,U&&(t.flags|=8192),U=u.callbacks,U===null?u.callbacks=[M]:U.push(M))}else U={lane:M,tag:b.tag,payload:b.payload,callback:b.callback,next:null},q===null?(z=q=U,S=Q):q=q.next=U,h|=M;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;U=b,b=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);q===null&&(S=Q),u.baseState=S,u.firstBaseUpdate=z,u.lastBaseUpdate=q,o===null&&(u.shared.lanes=0),Gn|=h,t.lanes=h,t.memoizedState=Q}}function Pd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Wd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pd(a[t],e)}var Wa=G(null),Er=G(0);function Id(t,e){t=En,J(Er,t),J(Wa,e),En=t|e.baseLanes}function Fu(){J(Er,En),J(Wa,Wa.current)}function Pu(){En=Er.current,V(Wa),V(Er)}var Bn=0,ht=null,At=null,Qt=null,Rr=!1,Ia=!1,ya=!1,Tr=0,sl=0,ti=null,Yv=0;function kt(){throw Error(s(321))}function Wu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Se(t[a],e[a]))return!1;return!0}function Iu(t,e,a,i,u,o){return Bn=o,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,L.H=t===null||t.memoizedState===null?Bh:Lh,ya=!1,o=a(i,u),ya=!1,Ia&&(o=eh(e,a,i,u)),th(t),o}function th(t){L.H=zr;var e=At!==null&&At.next!==null;if(Bn=0,Qt=At=ht=null,Rr=!1,sl=0,ti=null,e)throw Error(s(300));t===null||Pt||(t=t.dependencies,t!==null&&vr(t)&&(Pt=!0))}function eh(t,e,a,i){ht=t;var u=0;do{if(Ia&&(ti=null),sl=0,Ia=!1,25<=u)throw Error(s(301));if(u+=1,Qt=At=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}L.H=Zv,o=e(a,i)}while(Ia);return o}function Qv(){var t=L.H,e=t.useState()[0];return e=typeof e.then=="function"?ul(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ht.flags|=1024),e}function to(){var t=Tr!==0;return Tr=0,t}function eo(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function no(t){if(Rr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Rr=!1}Bn=0,Qt=At=ht=null,Ia=!1,sl=Tr=0,ti=null}function pe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?ht.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Gt(){if(At===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Qt===null?ht.memoizedState:Qt.next;if(e!==null)Qt=e,At=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Qt===null?ht.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(t){var e=sl;return sl+=1,ti===null&&(ti=[]),t=Zd(ti,t,e),e=ht,(Qt===null?e.memoizedState:Qt.next)===null&&(e=e.alternate,L.H=e===null||e.memoizedState===null?Bh:Lh),t}function Or(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ul(t);if(t.$$typeof===$)return re(t)}throw Error(s(438,String(t)))}function io(t){var e=null,a=ht.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ao(),ht.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=st;return e.index++,a}function yn(t,e){return typeof e=="function"?e(t):e}function Ar(t){var e=Gt();return lo(e,At,t)}function lo(t,e,a){var i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var u=t.baseQueue,o=i.pending;if(o!==null){if(u!==null){var h=u.next;u.next=o.next,o.next=h}e.baseQueue=u=o,i.pending=null}if(o=t.baseState,u===null)t.memoizedState=o;else{e=u.next;var b=h=null,S=null,z=e,q=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(bt&Q)===Q:(Bn&Q)===Q){var M=z.revertLane;if(M===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===Fa&&(q=!0);else if((Bn&M)===M){z=z.next,M===Fa&&(q=!0);continue}else Q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(b=S=Q,h=o):S=S.next=Q,ht.lanes|=M,Gn|=M;Q=z.action,ya&&a(o,Q),o=z.hasEagerState?z.eagerState:a(o,Q)}else M={lane:Q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(b=S=M,h=o):S=S.next=M,ht.lanes|=Q,Gn|=Q;z=z.next}while(z!==null&&z!==e);if(S===null?h=o:S.next=b,!Se(o,t.memoizedState)&&(Pt=!0,q&&(a=Pa,a!==null)))throw a;t.memoizedState=o,t.baseState=h,t.baseQueue=S,i.lastRenderedState=o}return u===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ro(t){var e=Gt(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var i=a.dispatch,u=a.pending,o=e.memoizedState;if(u!==null){a.pending=null;var h=u=u.next;do o=t(o,h.action),h=h.next;while(h!==u);Se(o,e.memoizedState)||(Pt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),a.lastRenderedState=o}return[o,i]}function nh(t,e,a){var i=ht,u=Gt(),o=St;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=e();var h=!Se((At||u).memoizedState,a);h&&(u.memoizedState=a,Pt=!0),u=u.queue;var b=lh.bind(null,i,u,t);if(ol(2048,8,b,[t]),u.getSnapshot!==e||h||Qt!==null&&Qt.memoizedState.tag&1){if(i.flags|=2048,ei(9,Cr(),ih.bind(null,i,u,a,e),null),zt===null)throw Error(s(349));o||(Bn&124)!==0||ah(i,e,a)}return a}function ah(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ht.updateQueue,e===null?(e=ao(),ht.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function ih(t,e,a,i){e.value=a,e.getSnapshot=i,rh(e)&&sh(t)}function lh(t,e,a){return a(function(){rh(e)&&sh(t)})}function rh(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Se(t,a)}catch{return!0}}function sh(t){var e=Ka(t,2);e!==null&&Ae(e,t,2)}function so(t){var e=pe();if(typeof t=="function"){var a=t;if(t=a(),ya){jn(!0);try{a()}finally{jn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:t},e}function uh(t,e,a,i){return t.baseState=a,lo(t,At,typeof i=="function"?i:yn)}function Gv(t,e,a,i,u){if(Dr(t))throw Error(s(485));if(t=e.action,t!==null){var o={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){o.listeners.push(h)}};L.T!==null?a(!0):o.isTransition=!1,i(o),a=e.pending,a===null?(o.next=e.pending=o,oh(e,o)):(o.next=a.next,e.pending=a.next=o)}}function oh(t,e){var a=e.action,i=e.payload,u=t.state;if(e.isTransition){var o=L.T,h={};L.T=h;try{var b=a(u,i),S=L.S;S!==null&&S(h,b),ch(t,e,b)}catch(z){uo(t,e,z)}finally{L.T=o}}else try{o=a(u,i),ch(t,e,o)}catch(z){uo(t,e,z)}}function ch(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){fh(t,e,i)},function(i){return uo(t,e,i)}):fh(t,e,a)}function fh(t,e,a){e.status="fulfilled",e.value=a,dh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,oh(t,a)))}function uo(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,dh(e),e=e.next;while(e!==i)}t.action=null}function dh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function hh(t,e){return e}function ph(t,e){if(St){var a=zt.formState;if(a!==null){t:{var i=ht;if(St){if(Lt){e:{for(var u=Lt,o=We;u.nodeType!==8;){if(!o){u=null;break e}if(u=Xe(u.nextSibling),u===null){u=null;break e}}o=u.data,u=o==="F!"||o==="F"?u:null}if(u){Lt=Xe(u.nextSibling),i=u.data==="F!";break t}}ha(i)}i=!1}i&&(e=a[0])}}return a=pe(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hh,lastRenderedState:e},a.queue=i,a=_h.bind(null,ht,i),i.dispatch=a,i=so(!1),o=po.bind(null,ht,!1,i.queue),i=pe(),u={state:e,dispatch:null,action:t,pending:null},i.queue=u,a=Gv.bind(null,ht,u,o,a),u.dispatch=a,i.memoizedState=t,[e,a,!1]}function mh(t){var e=Gt();return gh(e,At,t)}function gh(t,e,a){if(e=lo(t,e,hh)[0],t=Ar(yn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=ul(e)}catch(h){throw h===nl?Sr:h}else i=e;e=Gt();var u=e.queue,o=u.dispatch;return a!==e.memoizedState&&(ht.flags|=2048,ei(9,Cr(),$v.bind(null,u,a),null)),[i,o,t]}function $v(t,e){t.action=e}function yh(t){var e=Gt(),a=At;if(a!==null)return gh(e,a,t);Gt(),e=e.memoizedState,a=Gt();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function ei(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=ht.updateQueue,e===null&&(e=ao(),ht.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function Cr(){return{destroy:void 0,resource:void 0}}function vh(){return Gt().memoizedState}function jr(t,e,a,i){var u=pe();i=i===void 0?null:i,ht.flags|=t,u.memoizedState=ei(1|e,Cr(),a,i)}function ol(t,e,a,i){var u=Gt();i=i===void 0?null:i;var o=u.memoizedState.inst;At!==null&&i!==null&&Wu(i,At.memoizedState.deps)?u.memoizedState=ei(e,o,a,i):(ht.flags|=t,u.memoizedState=ei(1|e,o,a,i))}function bh(t,e){jr(8390656,8,t,e)}function xh(t,e){ol(2048,8,t,e)}function Sh(t,e){return ol(4,2,t,e)}function wh(t,e){return ol(4,4,t,e)}function Eh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rh(t,e,a){a=a!=null?a.concat([t]):null,ol(4,4,Eh.bind(null,e,t),a)}function oo(){}function Th(t,e){var a=Gt();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&Wu(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function Oh(t,e){var a=Gt();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&Wu(e,i[1]))return i[0];if(i=t(),ya){jn(!0);try{t()}finally{jn(!1)}}return a.memoizedState=[i,e],i}function co(t,e,a){return a===void 0||(Bn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=jp(),ht.lanes|=t,Gn|=t,a)}function Ah(t,e,a,i){return Se(a,e)?a:Wa.current!==null?(t=co(t,a,i),Se(t,e)||(Pt=!0),t):(Bn&42)===0?(Pt=!0,t.memoizedState=a):(t=jp(),ht.lanes|=t,Gn|=t,e)}function Ch(t,e,a,i,u){var o=Z.p;Z.p=o!==0&&8>o?o:8;var h=L.T,b={};L.T=b,po(t,!1,e,a);try{var S=u(),z=L.S;if(z!==null&&z(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var q=kv(S,i);cl(t,e,q,Oe(t))}else cl(t,e,i,Oe(t))}catch(Q){cl(t,e,{then:function(){},status:"rejected",reason:Q},Oe())}finally{Z.p=o,L.T=h}}function Xv(){}function fo(t,e,a,i){if(t.tag!==5)throw Error(s(476));var u=jh(t).queue;Ch(t,u,e,at,a===null?Xv:function(){return Dh(t),a(i)})}function jh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:at},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Dh(t){var e=jh(t).next.queue;cl(t,e,{},Oe())}function ho(){return re(Cl)}function zh(){return Gt().memoizedState}function Mh(){return Gt().memoizedState}function Kv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Oe();t=Un(a);var i=Nn(e,t,a);i!==null&&(Ae(i,e,a),il(i,e,a)),e={cache:Qu()},t.payload=e;return}e=e.return}}function Vv(t,e,a){var i=Oe();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Dr(t)?Uh(e,a):(a=Mu(t,e,a,i),a!==null&&(Ae(a,t,i),Nh(a,e,i)))}function _h(t,e,a){var i=Oe();cl(t,e,a,i)}function cl(t,e,a,i){var u={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dr(t))Uh(e,u);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var h=e.lastRenderedState,b=o(h,a);if(u.hasEagerState=!0,u.eagerState=b,Se(b,h))return hr(t,e,u,0),zt===null&&dr(),!1}catch{}finally{}if(a=Mu(t,e,u,i),a!==null)return Ae(a,t,i),Nh(a,e,i),!0}return!1}function po(t,e,a,i){if(i={lane:2,revertLane:Ko(),action:i,hasEagerState:!1,eagerState:null,next:null},Dr(t)){if(e)throw Error(s(479))}else e=Mu(t,a,i,2),e!==null&&Ae(e,t,2)}function Dr(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Uh(t,e){Ia=Rr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Nh(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,Gf(t,a)}}var zr={readContext:re,use:Or,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},Bh={readContext:re,use:Or,useCallback:function(t,e){return pe().memoizedState=[t,e===void 0?null:e],t},useContext:re,useEffect:bh,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,jr(4194308,4,Eh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return jr(4194308,4,t,e)},useInsertionEffect:function(t,e){jr(4,2,t,e)},useMemo:function(t,e){var a=pe();e=e===void 0?null:e;var i=t();if(ya){jn(!0);try{t()}finally{jn(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=pe();if(a!==void 0){var u=a(e);if(ya){jn(!0);try{a(e)}finally{jn(!1)}}}else u=e;return i.memoizedState=i.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},i.queue=t,t=t.dispatch=Vv.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=pe();return t={current:t},e.memoizedState=t},useState:function(t){t=so(t);var e=t.queue,a=_h.bind(null,ht,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:oo,useDeferredValue:function(t,e){var a=pe();return co(a,t,e)},useTransition:function(){var t=so(!1);return t=Ch.bind(null,ht,t.queue,!0,!1),pe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=ht,u=pe();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),zt===null)throw Error(s(349));(bt&124)!==0||ah(i,e,a)}u.memoizedState=a;var o={value:a,getSnapshot:e};return u.queue=o,bh(lh.bind(null,i,o,t),[t]),i.flags|=2048,ei(9,Cr(),ih.bind(null,i,o,a,e),null),a},useId:function(){var t=pe(),e=zt.identifierPrefix;if(St){var a=pn,i=hn;a=(i&~(1<<32-xe(i)-1)).toString(32)+a,e="«"+e+"R"+a,a=Tr++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Yv++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ho,useFormState:ph,useActionState:ph,useOptimistic:function(t){var e=pe();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=po.bind(null,ht,!0,a),a.dispatch=e,[t,e]},useMemoCache:io,useCacheRefresh:function(){return pe().memoizedState=Kv.bind(null,ht)}},Lh={readContext:re,use:Or,useCallback:Th,useContext:re,useEffect:xh,useImperativeHandle:Rh,useInsertionEffect:Sh,useLayoutEffect:wh,useMemo:Oh,useReducer:Ar,useRef:vh,useState:function(){return Ar(yn)},useDebugValue:oo,useDeferredValue:function(t,e){var a=Gt();return Ah(a,At.memoizedState,t,e)},useTransition:function(){var t=Ar(yn)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:ul(t),e]},useSyncExternalStore:nh,useId:zh,useHostTransitionStatus:ho,useFormState:mh,useActionState:mh,useOptimistic:function(t,e){var a=Gt();return uh(a,At,t,e)},useMemoCache:io,useCacheRefresh:Mh},Zv={readContext:re,use:Or,useCallback:Th,useContext:re,useEffect:xh,useImperativeHandle:Rh,useInsertionEffect:Sh,useLayoutEffect:wh,useMemo:Oh,useReducer:ro,useRef:vh,useState:function(){return ro(yn)},useDebugValue:oo,useDeferredValue:function(t,e){var a=Gt();return At===null?co(a,t,e):Ah(a,At.memoizedState,t,e)},useTransition:function(){var t=ro(yn)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:ul(t),e]},useSyncExternalStore:nh,useId:zh,useHostTransitionStatus:ho,useFormState:yh,useActionState:yh,useOptimistic:function(t,e){var a=Gt();return At!==null?uh(a,At,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:io,useCacheRefresh:Mh},ni=null,fl=0;function Mr(t){var e=fl;return fl+=1,ni===null&&(ni=[]),Zd(ni,t,e)}function dl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function _r(t,e){throw e.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function qh(t){var e=t._init;return e(t._payload)}function Hh(t){function e(C,T){if(t){var D=C.deletions;D===null?(C.deletions=[T],C.flags|=16):D.push(T)}}function a(C,T){if(!t)return null;for(;T!==null;)e(C,T),T=T.sibling;return null}function i(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function u(C,T){return C=dn(C,T),C.index=0,C.sibling=null,C}function o(C,T,D){return C.index=D,t?(D=C.alternate,D!==null?(D=D.index,D<T?(C.flags|=67108866,T):D):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function h(C){return t&&C.alternate===null&&(C.flags|=67108866),C}function b(C,T,D,k){return T===null||T.tag!==6?(T=Uu(D,C.mode,k),T.return=C,T):(T=u(T,D),T.return=C,T)}function S(C,T,D,k){var P=D.type;return P===A?q(C,T,D.props.children,k,D.key):T!==null&&(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ot&&qh(P)===T.type)?(T=u(T,D.props),dl(T,D),T.return=C,T):(T=mr(D.type,D.key,D.props,null,C.mode,k),dl(T,D),T.return=C,T)}function z(C,T,D,k){return T===null||T.tag!==4||T.stateNode.containerInfo!==D.containerInfo||T.stateNode.implementation!==D.implementation?(T=Nu(D,C.mode,k),T.return=C,T):(T=u(T,D.children||[]),T.return=C,T)}function q(C,T,D,k,P){return T===null||T.tag!==7?(T=oa(D,C.mode,k,P),T.return=C,T):(T=u(T,D),T.return=C,T)}function Q(C,T,D){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Uu(""+T,C.mode,D),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case R:return D=mr(T.type,T.key,T.props,null,C.mode,D),dl(D,T),D.return=C,D;case N:return T=Nu(T,C.mode,D),T.return=C,T;case ot:var k=T._init;return T=k(T._payload),Q(C,T,D)}if(Zt(T)||Ht(T))return T=oa(T,C.mode,D,null),T.return=C,T;if(typeof T.then=="function")return Q(C,Mr(T),D);if(T.$$typeof===$)return Q(C,br(C,T),D);_r(C,T)}return null}function M(C,T,D,k){var P=T!==null?T.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return P!==null?null:b(C,T,""+D,k);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case R:return D.key===P?S(C,T,D,k):null;case N:return D.key===P?z(C,T,D,k):null;case ot:return P=D._init,D=P(D._payload),M(C,T,D,k)}if(Zt(D)||Ht(D))return P!==null?null:q(C,T,D,k,null);if(typeof D.then=="function")return M(C,T,Mr(D),k);if(D.$$typeof===$)return M(C,T,br(C,D),k);_r(C,D)}return null}function U(C,T,D,k,P){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return C=C.get(D)||null,b(T,C,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case R:return C=C.get(k.key===null?D:k.key)||null,S(T,C,k,P);case N:return C=C.get(k.key===null?D:k.key)||null,z(T,C,k,P);case ot:var pt=k._init;return k=pt(k._payload),U(C,T,D,k,P)}if(Zt(k)||Ht(k))return C=C.get(D)||null,q(T,C,k,P,null);if(typeof k.then=="function")return U(C,T,D,Mr(k),P);if(k.$$typeof===$)return U(C,T,D,br(T,k),P);_r(T,k)}return null}function ut(C,T,D,k){for(var P=null,pt=null,tt=T,rt=T=0,It=null;tt!==null&&rt<D.length;rt++){tt.index>rt?(It=tt,tt=null):It=tt.sibling;var xt=M(C,tt,D[rt],k);if(xt===null){tt===null&&(tt=It);break}t&&tt&&xt.alternate===null&&e(C,tt),T=o(xt,T,rt),pt===null?P=xt:pt.sibling=xt,pt=xt,tt=It}if(rt===D.length)return a(C,tt),St&&fa(C,rt),P;if(tt===null){for(;rt<D.length;rt++)tt=Q(C,D[rt],k),tt!==null&&(T=o(tt,T,rt),pt===null?P=tt:pt.sibling=tt,pt=tt);return St&&fa(C,rt),P}for(tt=i(tt);rt<D.length;rt++)It=U(tt,C,rt,D[rt],k),It!==null&&(t&&It.alternate!==null&&tt.delete(It.key===null?rt:It.key),T=o(It,T,rt),pt===null?P=It:pt.sibling=It,pt=It);return t&&tt.forEach(function(Wn){return e(C,Wn)}),St&&fa(C,rt),P}function it(C,T,D,k){if(D==null)throw Error(s(151));for(var P=null,pt=null,tt=T,rt=T=0,It=null,xt=D.next();tt!==null&&!xt.done;rt++,xt=D.next()){tt.index>rt?(It=tt,tt=null):It=tt.sibling;var Wn=M(C,tt,xt.value,k);if(Wn===null){tt===null&&(tt=It);break}t&&tt&&Wn.alternate===null&&e(C,tt),T=o(Wn,T,rt),pt===null?P=Wn:pt.sibling=Wn,pt=Wn,tt=It}if(xt.done)return a(C,tt),St&&fa(C,rt),P;if(tt===null){for(;!xt.done;rt++,xt=D.next())xt=Q(C,xt.value,k),xt!==null&&(T=o(xt,T,rt),pt===null?P=xt:pt.sibling=xt,pt=xt);return St&&fa(C,rt),P}for(tt=i(tt);!xt.done;rt++,xt=D.next())xt=U(tt,C,rt,xt.value,k),xt!==null&&(t&&xt.alternate!==null&&tt.delete(xt.key===null?rt:xt.key),T=o(xt,T,rt),pt===null?P=xt:pt.sibling=xt,pt=xt);return t&&tt.forEach(function(J1){return e(C,J1)}),St&&fa(C,rt),P}function jt(C,T,D,k){if(typeof D=="object"&&D!==null&&D.type===A&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case R:t:{for(var P=D.key;T!==null;){if(T.key===P){if(P=D.type,P===A){if(T.tag===7){a(C,T.sibling),k=u(T,D.props.children),k.return=C,C=k;break t}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ot&&qh(P)===T.type){a(C,T.sibling),k=u(T,D.props),dl(k,D),k.return=C,C=k;break t}a(C,T);break}else e(C,T);T=T.sibling}D.type===A?(k=oa(D.props.children,C.mode,k,D.key),k.return=C,C=k):(k=mr(D.type,D.key,D.props,null,C.mode,k),dl(k,D),k.return=C,C=k)}return h(C);case N:t:{for(P=D.key;T!==null;){if(T.key===P)if(T.tag===4&&T.stateNode.containerInfo===D.containerInfo&&T.stateNode.implementation===D.implementation){a(C,T.sibling),k=u(T,D.children||[]),k.return=C,C=k;break t}else{a(C,T);break}else e(C,T);T=T.sibling}k=Nu(D,C.mode,k),k.return=C,C=k}return h(C);case ot:return P=D._init,D=P(D._payload),jt(C,T,D,k)}if(Zt(D))return ut(C,T,D,k);if(Ht(D)){if(P=Ht(D),typeof P!="function")throw Error(s(150));return D=P.call(D),it(C,T,D,k)}if(typeof D.then=="function")return jt(C,T,Mr(D),k);if(D.$$typeof===$)return jt(C,T,br(C,D),k);_r(C,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,T!==null&&T.tag===6?(a(C,T.sibling),k=u(T,D),k.return=C,C=k):(a(C,T),k=Uu(D,C.mode,k),k.return=C,C=k),h(C)):a(C,T)}return function(C,T,D,k){try{fl=0;var P=jt(C,T,D,k);return ni=null,P}catch(tt){if(tt===nl||tt===Sr)throw tt;var pt=we(29,tt,null,C.mode);return pt.lanes=k,pt.return=C,pt}finally{}}}var ai=Hh(!0),kh=Hh(!1),Le=G(null),Ie=null;function Ln(t){var e=t.alternate;J(Kt,Kt.current&1),J(Le,t),Ie===null&&(e===null||Wa.current!==null||e.memoizedState!==null)&&(Ie=t)}function Yh(t){if(t.tag===22){if(J(Kt,Kt.current),J(Le,t),Ie===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ie=t)}}else qn()}function qn(){J(Kt,Kt.current),J(Le,Le.current)}function vn(t){V(Le),Ie===t&&(Ie=null),V(Kt)}var Kt=G(0);function Ur(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ic(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function mo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:g({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var go={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=Oe(),u=Un(i);u.payload=e,a!=null&&(u.callback=a),e=Nn(t,u,i),e!==null&&(Ae(e,t,i),il(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=Oe(),u=Un(i);u.tag=1,u.payload=e,a!=null&&(u.callback=a),e=Nn(t,u,i),e!==null&&(Ae(e,t,i),il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Oe(),i=Un(a);i.tag=2,e!=null&&(i.callback=e),e=Nn(t,i,a),e!==null&&(Ae(e,t,a),il(e,t,a))}};function Qh(t,e,a,i,u,o,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,h):e.prototype&&e.prototype.isPureReactComponent?!Zi(a,i)||!Zi(u,o):!0}function Gh(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&go.enqueueReplaceState(e,e.state,null)}function va(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Nr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function $h(t){Nr(t)}function Xh(t){console.error(t)}function Kh(t){Nr(t)}function Br(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Vh(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yo(t,e,a){return a=Un(a),a.tag=3,a.payload={element:null},a.callback=function(){Br(t,e)},a}function Zh(t){return t=Un(t),t.tag=3,t}function Jh(t,e,a,i){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var o=i.value;t.payload=function(){return u(o)},t.callback=function(){Vh(e,a,i)}}var h=a.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){Vh(e,a,i),typeof u!="function"&&($n===null?$n=new Set([this]):$n.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Jv(t,e,a,i,u){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&Ii(e,a,u,!0),a=Le.current,a!==null){switch(a.tag){case 13:return Ie===null?Yo():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,i===Xu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Go(t,i,u)),!1;case 22:return a.flags|=65536,i===Xu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Go(t,i,u)),!1}throw Error(s(435,a.tag))}return Go(t,i,u),Yo(),!1}if(St)return e=Le.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,i!==qu&&(t=Error(s(422),{cause:i}),Wi(_e(t,a)))):(i!==qu&&(e=Error(s(423),{cause:i}),Wi(_e(e,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,i=_e(i,a),u=yo(t.stateNode,i,u),Zu(t,u),qt!==4&&(qt=2)),!1;var o=Error(s(520),{cause:i});if(o=_e(o,a),bl===null?bl=[o]:bl.push(o),qt!==4&&(qt=2),e===null)return!0;i=_e(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yo(a.stateNode,i,t),Zu(a,t),!1;case 1:if(e=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&($n===null||!$n.has(o))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zh(u),Jh(u,t,a,i),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var Fh=Error(s(461)),Pt=!1;function ee(t,e,a,i){e.child=t===null?kh(e,null,a,i):ai(e,t.child,a,i)}function Ph(t,e,a,i,u){a=a.render;var o=e.ref;if("ref"in i){var h={};for(var b in i)b!=="ref"&&(h[b]=i[b])}else h=i;return ma(e),i=Iu(t,e,a,h,o,u),b=to(),t!==null&&!Pt?(eo(t,e,u),bn(t,e,u)):(St&&b&&Bu(e),e.flags|=1,ee(t,e,i,u),e.child)}function Wh(t,e,a,i,u){if(t===null){var o=a.type;return typeof o=="function"&&!_u(o)&&o.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=o,Ih(t,e,o,i,u)):(t=mr(a.type,null,i,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!To(t,u)){var h=o.memoizedProps;if(a=a.compare,a=a!==null?a:Zi,a(h,i)&&t.ref===e.ref)return bn(t,e,u)}return e.flags|=1,t=dn(o,i),t.ref=e.ref,t.return=e,e.child=t}function Ih(t,e,a,i,u){if(t!==null){var o=t.memoizedProps;if(Zi(o,i)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=i=o,To(t,u))(t.flags&131072)!==0&&(Pt=!0);else return e.lanes=t.lanes,bn(t,e,u)}return vo(t,e,a,i,u)}function tp(t,e,a){var i=e.pendingProps,u=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if((e.flags&128)!==0){if(i=o!==null?o.baseLanes|a:a,t!==null){for(u=e.child=t.child,o=0;u!==null;)o=o|u.lanes|u.childLanes,u=u.sibling;e.childLanes=o&~i}else e.childLanes=0,e.child=null;return ep(t,e,i,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&xr(e,o!==null?o.cachePool:null),o!==null?Id(e,o):Fu(),Yh(e);else return e.lanes=e.childLanes=536870912,ep(t,e,o!==null?o.baseLanes|a:a,a)}else o!==null?(xr(e,o.cachePool),Id(e,o),qn(),e.memoizedState=null):(t!==null&&xr(e,null),Fu(),qn());return ee(t,e,u,a),e.child}function ep(t,e,a,i){var u=$u();return u=u===null?null:{parent:Xt._currentValue,pool:u},e.memoizedState={baseLanes:a,cachePool:u},t!==null&&xr(e,null),Fu(),Yh(e),t!==null&&Ii(t,e,i,!0),null}function Lr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function vo(t,e,a,i,u){return ma(e),a=Iu(t,e,a,i,void 0,u),i=to(),t!==null&&!Pt?(eo(t,e,u),bn(t,e,u)):(St&&i&&Bu(e),e.flags|=1,ee(t,e,a,u),e.child)}function np(t,e,a,i,u,o){return ma(e),e.updateQueue=null,a=eh(e,i,a,u),th(t),i=to(),t!==null&&!Pt?(eo(t,e,o),bn(t,e,o)):(St&&i&&Bu(e),e.flags|=1,ee(t,e,a,o),e.child)}function ap(t,e,a,i,u){if(ma(e),e.stateNode===null){var o=Va,h=a.contextType;typeof h=="object"&&h!==null&&(o=re(h)),o=new a(i,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=go,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=i,o.state=e.memoizedState,o.refs={},Ku(e),h=a.contextType,o.context=typeof h=="object"&&h!==null?re(h):Va,o.state=e.memoizedState,h=a.getDerivedStateFromProps,typeof h=="function"&&(mo(e,a,h,i),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(h=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),h!==o.state&&go.enqueueReplaceState(o,o.state,null),rl(e,i,o,u),ll(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){o=e.stateNode;var b=e.memoizedProps,S=va(a,b);o.props=S;var z=o.context,q=a.contextType;h=Va,typeof q=="object"&&q!==null&&(h=re(q));var Q=a.getDerivedStateFromProps;q=typeof Q=="function"||typeof o.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,q||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(b||z!==h)&&Gh(e,o,i,h),_n=!1;var M=e.memoizedState;o.state=M,rl(e,i,o,u),ll(),z=e.memoizedState,b||M!==z||_n?(typeof Q=="function"&&(mo(e,a,Q,i),z=e.memoizedState),(S=_n||Qh(e,a,S,i,M,z,h))?(q||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=z),o.props=i,o.state=z,o.context=h,i=S):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Vu(t,e),h=e.memoizedProps,q=va(a,h),o.props=q,Q=e.pendingProps,M=o.context,z=a.contextType,S=Va,typeof z=="object"&&z!==null&&(S=re(z)),b=a.getDerivedStateFromProps,(z=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h!==Q||M!==S)&&Gh(e,o,i,S),_n=!1,M=e.memoizedState,o.state=M,rl(e,i,o,u),ll();var U=e.memoizedState;h!==Q||M!==U||_n||t!==null&&t.dependencies!==null&&vr(t.dependencies)?(typeof b=="function"&&(mo(e,a,b,i),U=e.memoizedState),(q=_n||Qh(e,a,q,i,M,U,S)||t!==null&&t.dependencies!==null&&vr(t.dependencies))?(z||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,U,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,U,S)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||h===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=U),o.props=i,o.state=U,o.context=S,i=q):(typeof o.componentDidUpdate!="function"||h===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),i=!1)}return o=i,Lr(t,e),i=(e.flags&128)!==0,o||i?(o=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&i?(e.child=ai(e,t.child,null,u),e.child=ai(e,null,a,u)):ee(t,e,a,u),e.memoizedState=o.state,t=e.child):t=bn(t,e,u),t}function ip(t,e,a,i){return Pi(),e.flags|=256,ee(t,e,a,i),e.child}var bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xo(t){return{baseLanes:t,cachePool:Xd()}}function So(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=qe),t}function lp(t,e,a){var i=e.pendingProps,u=!1,o=(e.flags&128)!==0,h;if((h=o)||(h=t!==null&&t.memoizedState===null?!1:(Kt.current&2)!==0),h&&(u=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(St){if(u?Ln(e):qn(),St){var b=Lt,S;if(S=b){t:{for(S=b,b=We;S.nodeType!==8;){if(!b){b=null;break t}if(S=Xe(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:ca!==null?{id:hn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},S=we(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,ce=e,Lt=null,S=!0):S=!1}S||ha(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return ic(b)?e.lanes=32:e.lanes=536870912,null;vn(e)}return b=i.children,i=i.fallback,u?(qn(),u=e.mode,b=qr({mode:"hidden",children:b},u),i=oa(i,u,a,null),b.return=e,i.return=e,b.sibling=i,e.child=b,u=e.child,u.memoizedState=xo(a),u.childLanes=So(t,h,a),e.memoizedState=bo,i):(Ln(e),wo(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(o)e.flags&256?(Ln(e),e.flags&=-257,e=Eo(t,e,a)):e.memoizedState!==null?(qn(),e.child=t.child,e.flags|=128,e=null):(qn(),u=i.fallback,b=e.mode,i=qr({mode:"visible",children:i.children},b),u=oa(u,b,a,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,ai(e,t.child,null,a),i=e.child,i.memoizedState=xo(a),i.childLanes=So(t,h,a),e.memoizedState=bo,e=u);else if(Ln(e),ic(b)){if(h=b.nextSibling&&b.nextSibling.dataset,h)var z=h.dgst;h=z,i=Error(s(419)),i.stack="",i.digest=h,Wi({value:i,source:null,stack:null}),e=Eo(t,e,a)}else if(Pt||Ii(t,e,a,!1),h=(a&t.childLanes)!==0,Pt||h){if(h=zt,h!==null&&(i=a&-a,i=(i&42)!==0?1:iu(i),i=(i&(h.suspendedLanes|a))!==0?0:i,i!==0&&i!==S.retryLane))throw S.retryLane=i,Ka(t,i),Ae(h,t,i),Fh;b.data==="$?"||Yo(),e=Eo(t,e,a)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Lt=Xe(b.nextSibling),ce=e,St=!0,da=null,We=!1,t!==null&&(Ne[Be++]=hn,Ne[Be++]=pn,Ne[Be++]=ca,hn=t.id,pn=t.overflow,ca=e),e=wo(e,i.children),e.flags|=4096);return e}return u?(qn(),u=i.fallback,b=e.mode,S=t.child,z=S.sibling,i=dn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,z!==null?u=dn(z,u):(u=oa(u,b,a,null),u.flags|=2),u.return=e,i.return=e,i.sibling=u,e.child=i,i=u,u=e.child,b=t.child.memoizedState,b===null?b=xo(a):(S=b.cachePool,S!==null?(z=Xt._currentValue,S=S.parent!==z?{parent:z,pool:z}:S):S=Xd(),b={baseLanes:b.baseLanes|a,cachePool:S}),u.memoizedState=b,u.childLanes=So(t,h,a),e.memoizedState=bo,i):(Ln(e),a=t.child,t=a.sibling,a=dn(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=a,e.memoizedState=null,a)}function wo(t,e){return e=qr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function qr(t,e){return t=we(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Eo(t,e,a){return ai(e,t.child,null,a),t=wo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rp(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ku(t.return,e,a)}function Ro(t,e,a,i,u){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:u}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=u)}function sp(t,e,a){var i=e.pendingProps,u=i.revealOrder,o=i.tail;if(ee(t,e,i.children,a),i=Kt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,a,e);else if(t.tag===19)rp(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(J(Kt,i),u){case"forwards":for(a=e.child,u=null;a!==null;)t=a.alternate,t!==null&&Ur(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=e.child,e.child=null):(u=a.sibling,a.sibling=null),Ro(e,!1,u,a,o);break;case"backwards":for(a=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&Ur(t)===null){e.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ro(e,!0,a,null,o);break;case"together":Ro(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Ii(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=dn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=dn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function To(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&vr(t)))}function Fv(t,e,a){switch(e.tag){case 3:wt(e,e.stateNode.containerInfo),Mn(e,Xt,t.memoizedState.cache),Pi();break;case 27:case 5:aa(e);break;case 4:wt(e,e.stateNode.containerInfo);break;case 10:Mn(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ln(e),e.flags|=128,null):(a&e.child.childLanes)!==0?lp(t,e,a):(Ln(e),t=bn(t,e,a),t!==null?t.sibling:null);Ln(e);break;case 19:var u=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(Ii(t,e,a,!1),i=(a&e.childLanes)!==0),u){if(i)return sp(t,e,a);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(Kt,Kt.current),i)break;return null;case 22:case 23:return e.lanes=0,tp(t,e,a);case 24:Mn(e,Xt,t.memoizedState.cache)}return bn(t,e,a)}function up(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Pt=!0;else{if(!To(t,a)&&(e.flags&128)===0)return Pt=!1,Fv(t,e,a);Pt=(t.flags&131072)!==0}else Pt=!1,St&&(e.flags&1048576)!==0&&qd(e,yr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var i=e.elementType,u=i._init;if(i=u(i._payload),e.type=i,typeof i=="function")_u(i)?(t=va(i,t),e.tag=1,e=ap(null,e,i,t,a)):(e.tag=0,e=vo(null,e,i,t,a));else{if(i!=null){if(u=i.$$typeof,u===F){e.tag=11,e=Ph(null,e,i,t,a);break t}else if(u===K){e.tag=14,e=Wh(null,e,i,t,a);break t}}throw e=un(i)||i,Error(s(306,e,""))}}return e;case 0:return vo(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,u=va(i,e.pendingProps),ap(t,e,i,u,a);case 3:t:{if(wt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));i=e.pendingProps;var o=e.memoizedState;u=o.element,Vu(t,e),rl(e,i,null,a);var h=e.memoizedState;if(i=h.cache,Mn(e,Xt,i),i!==o.cache&&Yu(e,[Xt],a,!0),ll(),i=h.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=ip(t,e,i,a);break t}else if(i!==u){u=_e(Error(s(424)),e),Wi(u),e=ip(t,e,i,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Lt=Xe(t.firstChild),ce=e,St=!0,da=null,We=!0,a=kh(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Pi(),i===u){e=bn(t,e,a);break t}ee(t,e,i,a)}e=e.child}return e;case 26:return Lr(t,e),t===null?(a=d0(e.type,null,e.pendingProps,null))?e.memoizedState=a:St||(a=e.type,t=e.pendingProps,i=Wr(lt.current).createElement(a),i[le]=e,i[de]=t,ae(i,a,t),Ft(i),e.stateNode=i):e.memoizedState=d0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return aa(e),t===null&&St&&(i=e.stateNode=o0(e.type,e.pendingProps,lt.current),ce=e,We=!0,u=Lt,Vn(e.type)?(lc=u,Lt=Xe(i.firstChild)):Lt=u),ee(t,e,e.pendingProps.children,a),Lr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&St&&((u=i=Lt)&&(i=R1(i,e.type,e.pendingProps,We),i!==null?(e.stateNode=i,ce=e,Lt=Xe(i.firstChild),We=!1,u=!0):u=!1),u||ha(e)),aa(e),u=e.type,o=e.pendingProps,h=t!==null?t.memoizedProps:null,i=o.children,ec(u,o)?i=null:h!==null&&ec(u,h)&&(e.flags|=32),e.memoizedState!==null&&(u=Iu(t,e,Qv,null,null,a),Cl._currentValue=u),Lr(t,e),ee(t,e,i,a),e.child;case 6:return t===null&&St&&((t=a=Lt)&&(a=T1(a,e.pendingProps,We),a!==null?(e.stateNode=a,ce=e,Lt=null,t=!0):t=!1),t||ha(e)),null;case 13:return lp(t,e,a);case 4:return wt(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ai(e,null,i,a):ee(t,e,i,a),e.child;case 11:return Ph(t,e,e.type,e.pendingProps,a);case 7:return ee(t,e,e.pendingProps,a),e.child;case 8:return ee(t,e,e.pendingProps.children,a),e.child;case 12:return ee(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,Mn(e,e.type,i.value),ee(t,e,i.children,a),e.child;case 9:return u=e.type._context,i=e.pendingProps.children,ma(e),u=re(u),i=i(u),e.flags|=1,ee(t,e,i,a),e.child;case 14:return Wh(t,e,e.type,e.pendingProps,a);case 15:return Ih(t,e,e.type,e.pendingProps,a);case 19:return sp(t,e,a);case 31:return i=e.pendingProps,a=e.mode,i={mode:i.mode,children:i.children},t===null?(a=qr(i,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=dn(t.child,i),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return tp(t,e,a);case 24:return ma(e),i=re(Xt),t===null?(u=$u(),u===null&&(u=zt,o=Qu(),u.pooledCache=o,o.refCount++,o!==null&&(u.pooledCacheLanes|=a),u=o),e.memoizedState={parent:i,cache:u},Ku(e),Mn(e,Xt,u)):((t.lanes&a)!==0&&(Vu(t,e),rl(e,null,null,a),ll()),u=t.memoizedState,o=e.memoizedState,u.parent!==i?(u={parent:i,cache:i},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Mn(e,Xt,i)):(i=o.cache,Mn(e,Xt,i),i!==u.cache&&Yu(e,[Xt],a,!0))),ee(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function xn(t){t.flags|=4}function op(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!y0(e)){if(e=Le.current,e!==null&&((bt&4194048)===bt?Ie!==null:(bt&62914560)!==bt&&(bt&536870912)===0||e!==Ie))throw al=Xu,Kd;t.flags|=8192}}function Hr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Yf():536870912,t.lanes|=e,si|=e)}function hl(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags&65011712,i|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function Pv(t,e,a){var i=e.pendingProps;switch(Lu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),gn(Xt),ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fi(e)?xn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Yd())),Bt(e),null;case 26:return a=e.memoizedState,t===null?(xn(e),a!==null?(Bt(e),op(e,a)):(Bt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(xn(e),Bt(e),op(e,a)):(Bt(e),e.flags&=-16777217):(t.memoizedProps!==i&&xn(e),Bt(e),e.flags&=-16777217),null;case 27:on(e),a=lt.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(!i){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}t=nt.current,Fi(e)?Hd(e):(t=o0(u,i,a),e.stateNode=t,xn(e))}return Bt(e),null;case 5:if(on(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(!i){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}if(t=nt.current,Fi(e))Hd(e);else{switch(u=Wr(lt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?u.createElement(a,{is:i.is}):u.createElement(a)}}t[le]=e,t[de]=i;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(ae(t,a,i),a){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&xn(e)}}return Bt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&xn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(s(166));if(t=lt.current,Fi(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,u=ce,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}t[le]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||n0(t.nodeValue,a)),t||ha(e)}else t=Wr(t).createTextNode(i),t[le]=e,e.stateNode=t}return Bt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Fi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[le]=e}else Pi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),u=!1}else u=Yd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(vn(e),e):(vn(e),null)}if(vn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=i!==null,t=t!==null&&t.memoizedState!==null,a){i=e.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool);var o=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==u&&(i.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Hr(e,e.updateQueue),Bt(e),null;case 4:return ie(),t===null&&Fo(e.stateNode.containerInfo),Bt(e),null;case 10:return gn(e.type),Bt(e),null;case 19:if(V(Kt),u=e.memoizedState,u===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=u.rendering,o===null)if(i)hl(u,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ur(t),o!==null){for(e.flags|=128,hl(u,!1),t=o.updateQueue,e.updateQueue=t,Hr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Ld(a,t),a=a.sibling;return J(Kt,Kt.current&1|2),e.child}t=t.sibling}u.tail!==null&&Pe()>Qr&&(e.flags|=128,i=!0,hl(u,!1),e.lanes=4194304)}else{if(!i)if(t=Ur(o),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Hr(e,t),hl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!o.alternate&&!St)return Bt(e),null}else 2*Pe()-u.renderingStartTime>Qr&&a!==536870912&&(e.flags|=128,i=!0,hl(u,!1),e.lanes=4194304);u.isBackwards?(o.sibling=e.child,e.child=o):(t=u.last,t!==null?t.sibling=o:e.child=o,u.last=o)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Pe(),e.sibling=null,t=Kt.current,J(Kt,i?t&1|2:t&1),e):(Bt(e),null);case 22:case 23:return vn(e),Pu(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),a=e.updateQueue,a!==null&&Hr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&V(ga),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),gn(Xt),Bt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Wv(t,e){switch(Lu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gn(Xt),ie(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return on(e),null;case 13:if(vn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(Kt),null;case 4:return ie(),null;case 10:return gn(e.type),null;case 22:case 23:return vn(e),Pu(),t!==null&&V(ga),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return gn(Xt),null;case 25:return null;default:return null}}function cp(t,e){switch(Lu(e),e.tag){case 3:gn(Xt),ie();break;case 26:case 27:case 5:on(e);break;case 4:ie();break;case 13:vn(e);break;case 19:V(Kt);break;case 10:gn(e.type);break;case 22:case 23:vn(e),Pu(),t!==null&&V(ga);break;case 24:gn(Xt)}}function pl(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&t)===t){i=void 0;var o=a.create,h=a.inst;i=o(),h.destroy=i}a=a.next}while(a!==u)}}catch(b){Dt(e,e.return,b)}}function Hn(t,e,a){try{var i=e.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var o=u.next;i=o;do{if((i.tag&t)===t){var h=i.inst,b=h.destroy;if(b!==void 0){h.destroy=void 0,u=e;var S=a,z=b;try{z()}catch(q){Dt(u,S,q)}}}i=i.next}while(i!==o)}}catch(q){Dt(e,e.return,q)}}function fp(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Wd(e,a)}catch(i){Dt(t,t.return,i)}}}function dp(t,e,a){a.props=va(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){Dt(t,e,i)}}function ml(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(u){Dt(t,e,u)}}function tn(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(u){Dt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Dt(t,e,u)}else a.current=null}function hp(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(u){Dt(t,t.return,u)}}function Oo(t,e,a){try{var i=t.stateNode;b1(i,t.type,a,e),i[de]=e}catch(u){Dt(t,t.return,u)}}function pp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Vn(t.type)||t.tag===4}function Ao(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||pp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Vn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Co(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Pr));else if(i!==4&&(i===27&&Vn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Co(t,e,a),t=t.sibling;t!==null;)Co(t,e,a),t=t.sibling}function kr(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&Vn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(kr(t,e,a),t=t.sibling;t!==null;)kr(t,e,a),t=t.sibling}function mp(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);ae(e,i,a),e[le]=t,e[de]=a}catch(o){Dt(t,t.return,o)}}var Sn=!1,Yt=!1,jo=!1,gp=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function Iv(t,e){if(t=t.containerInfo,Io=is,t=Ad(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var u=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break t}var h=0,b=-1,S=-1,z=0,q=0,Q=t,M=null;e:for(;;){for(var U;Q!==a||u!==0&&Q.nodeType!==3||(b=h+u),Q!==o||i!==0&&Q.nodeType!==3||(S=h+i),Q.nodeType===3&&(h+=Q.nodeValue.length),(U=Q.firstChild)!==null;)M=Q,Q=U;for(;;){if(Q===t)break e;if(M===a&&++z===u&&(b=h),M===o&&++q===i&&(S=h),(U=Q.nextSibling)!==null)break;Q=M,M=Q.parentNode}Q=U}a=b===-1||S===-1?null:{start:b,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(tc={focusedElem:t,selectionRange:a},is=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,a=e,u=o.memoizedProps,o=o.memoizedState,i=a.stateNode;try{var ut=va(a.type,u,a.elementType===a.type);t=i.getSnapshotBeforeUpdate(ut,o),i.__reactInternalSnapshotBeforeUpdate=t}catch(it){Dt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ac(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ac(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function yp(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:kn(t,a),i&4&&pl(5,a);break;case 1:if(kn(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(h){Dt(a,a.return,h)}else{var u=va(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){Dt(a,a.return,h)}}i&64&&fp(a),i&512&&ml(a,a.return);break;case 3:if(kn(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Wd(t,e)}catch(h){Dt(a,a.return,h)}}break;case 27:e===null&&i&4&&mp(a);case 26:case 5:kn(t,a),e===null&&i&4&&hp(a),i&512&&ml(a,a.return);break;case 12:kn(t,a);break;case 13:kn(t,a),i&4&&xp(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=u1.bind(null,a),O1(t,a))));break;case 22:if(i=a.memoizedState!==null||Sn,!i){e=e!==null&&e.memoizedState!==null||Yt,u=Sn;var o=Yt;Sn=i,(Yt=e)&&!o?Yn(t,a,(a.subtreeFlags&8772)!==0):kn(t,a),Sn=u,Yt=o}break;case 30:break;default:kn(t,a)}}function vp(t){var e=t.alternate;e!==null&&(t.alternate=null,vp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&su(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ut=null,me=!1;function wn(t,e,a){for(a=a.child;a!==null;)bp(t,e,a),a=a.sibling}function bp(t,e,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 26:Yt||tn(a,e),wn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yt||tn(a,e);var i=Ut,u=me;Vn(a.type)&&(Ut=a.stateNode,me=!1),wn(t,e,a),Rl(a.stateNode),Ut=i,me=u;break;case 5:Yt||tn(a,e);case 6:if(i=Ut,u=me,Ut=null,wn(t,e,a),Ut=i,me=u,Ut!==null)if(me)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(a.stateNode)}catch(o){Dt(a,e,o)}else try{Ut.removeChild(a.stateNode)}catch(o){Dt(a,e,o)}break;case 18:Ut!==null&&(me?(t=Ut,s0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ml(t)):s0(Ut,a.stateNode));break;case 4:i=Ut,u=me,Ut=a.stateNode.containerInfo,me=!0,wn(t,e,a),Ut=i,me=u;break;case 0:case 11:case 14:case 15:Yt||Hn(2,a,e),Yt||Hn(4,a,e),wn(t,e,a);break;case 1:Yt||(tn(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&dp(a,e,i)),wn(t,e,a);break;case 21:wn(t,e,a);break;case 22:Yt=(i=Yt)||a.memoizedState!==null,wn(t,e,a),Yt=i;break;default:wn(t,e,a)}}function xp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ml(t)}catch(a){Dt(e,e.return,a)}}function t1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new gp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new gp),e;default:throw Error(s(435,t.tag))}}function Do(t,e){var a=t1(t);e.forEach(function(i){var u=o1.bind(null,t,i);a.has(i)||(a.add(i),i.then(u,u))})}function Ee(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var u=a[i],o=t,h=e,b=h;t:for(;b!==null;){switch(b.tag){case 27:if(Vn(b.type)){Ut=b.stateNode,me=!1;break t}break;case 5:Ut=b.stateNode,me=!1;break t;case 3:case 4:Ut=b.stateNode.containerInfo,me=!0;break t}b=b.return}if(Ut===null)throw Error(s(160));bp(o,h,u),Ut=null,me=!1,o=u.alternate,o!==null&&(o.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Sp(e,t),e=e.sibling}var $e=null;function Sp(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ee(e,t),Re(t),i&4&&(Hn(3,t,t.return),pl(3,t),Hn(5,t,t.return));break;case 1:Ee(e,t),Re(t),i&512&&(Yt||a===null||tn(a,a.return)),i&64&&Sn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var u=$e;if(Ee(e,t),Re(t),i&512&&(Yt||a===null||tn(a,a.return)),i&4){var o=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(i){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Hi]||o[le]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(i),u.head.insertBefore(o,u.querySelector("head > title"))),ae(o,i,a),o[le]=t,Ft(o),i=o;break t;case"link":var h=m0("link","href",u).get(i+(a.href||""));if(h){for(var b=0;b<h.length;b++)if(o=h[b],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(b,1);break e}}o=u.createElement(i),ae(o,i,a),u.head.appendChild(o);break;case"meta":if(h=m0("meta","content",u).get(i+(a.content||""))){for(b=0;b<h.length;b++)if(o=h[b],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(b,1);break e}}o=u.createElement(i),ae(o,i,a),u.head.appendChild(o);break;default:throw Error(s(468,i))}o[le]=t,Ft(o),i=o}t.stateNode=i}else g0(u,t.type,t.stateNode);else t.stateNode=p0(u,i,t.memoizedProps);else o!==i?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,i===null?g0(u,t.type,t.stateNode):p0(u,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Oo(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ee(e,t),Re(t),i&512&&(Yt||a===null||tn(a,a.return)),a!==null&&i&4&&Oo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ee(e,t),Re(t),i&512&&(Yt||a===null||tn(a,a.return)),t.flags&32){u=t.stateNode;try{Ha(u,"")}catch(U){Dt(t,t.return,U)}}i&4&&t.stateNode!=null&&(u=t.memoizedProps,Oo(t,u,a!==null?a.memoizedProps:u)),i&1024&&(jo=!0);break;case 6:if(Ee(e,t),Re(t),i&4){if(t.stateNode===null)throw Error(s(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(U){Dt(t,t.return,U)}}break;case 3:if(es=null,u=$e,$e=Ir(e.containerInfo),Ee(e,t),$e=u,Re(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(e.containerInfo)}catch(U){Dt(t,t.return,U)}jo&&(jo=!1,wp(t));break;case 4:i=$e,$e=Ir(t.stateNode.containerInfo),Ee(e,t),Re(t),$e=i;break;case 12:Ee(e,t),Re(t);break;case 13:Ee(e,t),Re(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bo=Pe()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Do(t,i)));break;case 22:u=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,z=Sn,q=Yt;if(Sn=z||u,Yt=q||S,Ee(e,t),Yt=q,Sn=z,Re(t),i&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(a===null||S||Sn||Yt||ba(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(o=S.stateNode,u)h=o.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=S.stateNode;var Q=S.memoizedProps.style,M=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;b.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(U){Dt(S,S.return,U)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=u?"":S.memoizedProps}catch(U){Dt(S,S.return,U)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Do(t,a))));break;case 19:Ee(e,t),Re(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Do(t,i)));break;case 30:break;case 21:break;default:Ee(e,t),Re(t)}}function Re(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(pp(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,o=Ao(t);kr(t,o,u);break;case 5:var h=a.stateNode;a.flags&32&&(Ha(h,""),a.flags&=-33);var b=Ao(t);kr(t,b,h);break;case 3:case 4:var S=a.stateNode.containerInfo,z=Ao(t);Co(t,z,S);break;default:throw Error(s(161))}}catch(q){Dt(t,t.return,q)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;wp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function kn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)yp(t,e.alternate,e),e=e.sibling}function ba(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Hn(4,e,e.return),ba(e);break;case 1:tn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&dp(e,e.return,a),ba(e);break;case 27:Rl(e.stateNode);case 26:case 5:tn(e,e.return),ba(e);break;case 22:e.memoizedState===null&&ba(e);break;case 30:ba(e);break;default:ba(e)}t=t.sibling}}function Yn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,u=t,o=e,h=o.flags;switch(o.tag){case 0:case 11:case 15:Yn(u,o,a),pl(4,o);break;case 1:if(Yn(u,o,a),i=o,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(z){Dt(i,i.return,z)}if(i=o,u=i.updateQueue,u!==null){var b=i.stateNode;try{var S=u.shared.hiddenCallbacks;if(S!==null)for(u.shared.hiddenCallbacks=null,u=0;u<S.length;u++)Pd(S[u],b)}catch(z){Dt(i,i.return,z)}}a&&h&64&&fp(o),ml(o,o.return);break;case 27:mp(o);case 26:case 5:Yn(u,o,a),a&&i===null&&h&4&&hp(o),ml(o,o.return);break;case 12:Yn(u,o,a);break;case 13:Yn(u,o,a),a&&h&4&&xp(u,o);break;case 22:o.memoizedState===null&&Yn(u,o,a),ml(o,o.return);break;case 30:break;default:Yn(u,o,a)}e=e.sibling}}function zo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&tl(a))}function Mo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tl(t))}function en(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ep(t,e,a,i),e=e.sibling}function Ep(t,e,a,i){var u=e.flags;switch(e.tag){case 0:case 11:case 15:en(t,e,a,i),u&2048&&pl(9,e);break;case 1:en(t,e,a,i);break;case 3:en(t,e,a,i),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tl(t)));break;case 12:if(u&2048){en(t,e,a,i),t=e.stateNode;try{var o=e.memoizedProps,h=o.id,b=o.onPostCommit;typeof b=="function"&&b(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Dt(e,e.return,S)}}else en(t,e,a,i);break;case 13:en(t,e,a,i);break;case 23:break;case 22:o=e.stateNode,h=e.alternate,e.memoizedState!==null?o._visibility&2?en(t,e,a,i):gl(t,e):o._visibility&2?en(t,e,a,i):(o._visibility|=2,ii(t,e,a,i,(e.subtreeFlags&10256)!==0)),u&2048&&zo(h,e);break;case 24:en(t,e,a,i),u&2048&&Mo(e.alternate,e);break;default:en(t,e,a,i)}}function ii(t,e,a,i,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,h=e,b=a,S=i,z=h.flags;switch(h.tag){case 0:case 11:case 15:ii(o,h,b,S,u),pl(8,h);break;case 23:break;case 22:var q=h.stateNode;h.memoizedState!==null?q._visibility&2?ii(o,h,b,S,u):gl(o,h):(q._visibility|=2,ii(o,h,b,S,u)),u&&z&2048&&zo(h.alternate,h);break;case 24:ii(o,h,b,S,u),u&&z&2048&&Mo(h.alternate,h);break;default:ii(o,h,b,S,u)}e=e.sibling}}function gl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,u=i.flags;switch(i.tag){case 22:gl(a,i),u&2048&&zo(i.alternate,i);break;case 24:gl(a,i),u&2048&&Mo(i.alternate,i);break;default:gl(a,i)}e=e.sibling}}var yl=8192;function li(t){if(t.subtreeFlags&yl)for(t=t.child;t!==null;)Rp(t),t=t.sibling}function Rp(t){switch(t.tag){case 26:li(t),t.flags&yl&&t.memoizedState!==null&&H1($e,t.memoizedState,t.memoizedProps);break;case 5:li(t);break;case 3:case 4:var e=$e;$e=Ir(t.stateNode.containerInfo),li(t),$e=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=yl,yl=16777216,li(t),yl=e):li(t));break;default:li(t)}}function Tp(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Wt=i,Ap(i,t)}Tp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Op(t),t=t.sibling}function Op(t){switch(t.tag){case 0:case 11:case 15:vl(t),t.flags&2048&&Hn(9,t,t.return);break;case 3:vl(t);break;case 12:vl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Yr(t)):vl(t);break;default:vl(t)}}function Yr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Wt=i,Ap(i,t)}Tp(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Hn(8,e,e.return),Yr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Yr(e));break;default:Yr(e)}t=t.sibling}}function Ap(t,e){for(;Wt!==null;){var a=Wt;switch(a.tag){case 0:case 11:case 15:Hn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:tl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Wt=i;else t:for(a=t;Wt!==null;){i=Wt;var u=i.sibling,o=i.return;if(vp(i),i===a){Wt=null;break t}if(u!==null){u.return=o,Wt=u;break t}Wt=o}}}var e1={getCacheForType:function(t){var e=re(Xt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},n1=typeof WeakMap=="function"?WeakMap:Map,Rt=0,zt=null,yt=null,bt=0,Tt=0,Te=null,Qn=!1,ri=!1,_o=!1,En=0,qt=0,Gn=0,xa=0,Uo=0,qe=0,si=0,bl=null,ge=null,No=!1,Bo=0,Qr=1/0,Gr=null,$n=null,ne=0,Xn=null,ui=null,oi=0,Lo=0,qo=null,Cp=null,xl=0,Ho=null;function Oe(){if((Rt&2)!==0&&bt!==0)return bt&-bt;if(L.T!==null){var t=Fa;return t!==0?t:Ko()}return $f()}function jp(){qe===0&&(qe=(bt&536870912)===0||St?kf():536870912);var t=Le.current;return t!==null&&(t.flags|=32),qe}function Ae(t,e,a){(t===zt&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)&&(ci(t,0),Kn(t,bt,qe,!1)),qi(t,a),((Rt&2)===0||t!==zt)&&(t===zt&&((Rt&2)===0&&(xa|=a),qt===4&&Kn(t,bt,qe,!1)),nn(t))}function Dp(t,e,a){if((Rt&6)!==0)throw Error(s(327));var i=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Li(t,e),u=i?l1(t,e):Qo(t,e,!0),o=i;do{if(u===0){ri&&!i&&Kn(t,e,0,!1);break}else{if(a=t.current.alternate,o&&!a1(a)){u=Qo(t,e,!1),o=!1;continue}if(u===2){if(o=e,t.errorRecoveryDisabledLanes&o)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var b=t;u=bl;var S=b.current.memoizedState.isDehydrated;if(S&&(ci(b,h).flags|=256),h=Qo(b,h,!1),h!==2){if(_o&&!S){b.errorRecoveryDisabledLanes|=o,xa|=o,u=4;break t}o=ge,ge=u,o!==null&&(ge===null?ge=o:ge.push.apply(ge,o))}u=h}if(o=!1,u!==2)continue}}if(u===1){ci(t,0),Kn(t,e,0,!0);break}t:{switch(i=t,o=u,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Kn(i,e,qe,!Qn);break t;case 2:ge=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(u=Bo+300-Pe(),10<u)){if(Kn(i,e,qe,!Qn),tr(i,0,!0)!==0)break t;i.timeoutHandle=l0(zp.bind(null,i,a,ge,Gr,No,e,qe,xa,si,Qn,o,2,-0,0),u);break t}zp(i,a,ge,Gr,No,e,qe,xa,si,Qn,o,0,-0,0)}}break}while(!0);nn(t)}function zp(t,e,a,i,u,o,h,b,S,z,q,Q,M,U){if(t.timeoutHandle=-1,Q=e.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Al={stylesheets:null,count:0,unsuspend:q1},Rp(e),Q=k1(),Q!==null)){t.cancelPendingCommit=Q(qp.bind(null,t,e,o,a,i,u,h,b,S,q,1,M,U)),Kn(t,o,h,!z);return}qp(t,e,o,a,i,u,h,b,S)}function a1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var u=a[i],o=u.getSnapshot;u=u.value;try{if(!Se(o(),u))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e,a,i){e&=~Uo,e&=~xa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var u=e;0<u;){var o=31-xe(u),h=1<<o;i[o]=-1,u&=~h}a!==0&&Qf(t,a,e)}function $r(){return(Rt&6)===0?(Sl(0),!1):!0}function ko(){if(yt!==null){if(Tt===0)var t=yt.return;else t=yt,mn=pa=null,no(t),ni=null,fl=0,t=yt;for(;t!==null;)cp(t.alternate,t),t=t.return;yt=null}}function ci(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,S1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ko(),zt=t,yt=a=dn(t.current,null),bt=e,Tt=0,Te=null,Qn=!1,ri=Li(t,e),_o=!1,si=qe=Uo=xa=Gn=qt=0,ge=bl=null,No=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var u=31-xe(i),o=1<<u;e|=t[u],i&=~o}return En=e,dr(),a}function Mp(t,e){ht=null,L.H=zr,e===nl||e===Sr?(e=Jd(),Tt=3):e===Kd?(e=Jd(),Tt=4):Tt=e===Fh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Te=e,yt===null&&(qt=1,Br(t,_e(e,t.current)))}function _p(){var t=L.H;return L.H=zr,t===null?zr:t}function Up(){var t=L.A;return L.A=e1,t}function Yo(){qt=4,Qn||(bt&4194048)!==bt&&Le.current!==null||(ri=!0),(Gn&134217727)===0&&(xa&134217727)===0||zt===null||Kn(zt,bt,qe,!1)}function Qo(t,e,a){var i=Rt;Rt|=2;var u=_p(),o=Up();(zt!==t||bt!==e)&&(Gr=null,ci(t,e)),e=!1;var h=qt;t:do try{if(Tt!==0&&yt!==null){var b=yt,S=Te;switch(Tt){case 8:ko(),h=6;break t;case 3:case 2:case 9:case 6:Le.current===null&&(e=!0);var z=Tt;if(Tt=0,Te=null,fi(t,b,S,z),a&&ri){h=0;break t}break;default:z=Tt,Tt=0,Te=null,fi(t,b,S,z)}}i1(),h=qt;break}catch(q){Mp(t,q)}while(!0);return e&&t.shellSuspendCounter++,mn=pa=null,Rt=i,L.H=u,L.A=o,yt===null&&(zt=null,bt=0,dr()),h}function i1(){for(;yt!==null;)Np(yt)}function l1(t,e){var a=Rt;Rt|=2;var i=_p(),u=Up();zt!==t||bt!==e?(Gr=null,Qr=Pe()+500,ci(t,e)):ri=Li(t,e);t:do try{if(Tt!==0&&yt!==null){e=yt;var o=Te;e:switch(Tt){case 1:Tt=0,Te=null,fi(t,e,o,1);break;case 2:case 9:if(Vd(o)){Tt=0,Te=null,Bp(e);break}e=function(){Tt!==2&&Tt!==9||zt!==t||(Tt=7),nn(t)},o.then(e,e);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:Vd(o)?(Tt=0,Te=null,Bp(e)):(Tt=0,Te=null,fi(t,e,o,7));break;case 5:var h=null;switch(yt.tag){case 26:h=yt.memoizedState;case 5:case 27:var b=yt;if(!h||y0(h)){Tt=0,Te=null;var S=b.sibling;if(S!==null)yt=S;else{var z=b.return;z!==null?(yt=z,Xr(z)):yt=null}break e}}Tt=0,Te=null,fi(t,e,o,5);break;case 6:Tt=0,Te=null,fi(t,e,o,6);break;case 8:ko(),qt=6;break t;default:throw Error(s(462))}}r1();break}catch(q){Mp(t,q)}while(!0);return mn=pa=null,L.H=i,L.A=u,Rt=a,yt!==null?0:(zt=null,bt=0,dr(),qt)}function r1(){for(;yt!==null&&!Cy();)Np(yt)}function Np(t){var e=up(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?Xr(t):yt=e}function Bp(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=np(a,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=np(a,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:no(e);default:cp(a,e),e=yt=Ld(e,En),e=up(a,e,En)}t.memoizedProps=t.pendingProps,e===null?Xr(t):yt=e}function fi(t,e,a,i){mn=pa=null,no(e),ni=null,fl=0;var u=e.return;try{if(Jv(t,u,e,a,bt)){qt=1,Br(t,_e(a,t.current)),yt=null;return}}catch(o){if(u!==null)throw yt=u,o;qt=1,Br(t,_e(a,t.current)),yt=null;return}e.flags&32768?(St||i===1?t=!0:ri||(bt&536870912)!==0?t=!1:(Qn=t=!0,(i===2||i===9||i===3||i===6)&&(i=Le.current,i!==null&&i.tag===13&&(i.flags|=16384))),Lp(e,t)):Xr(e)}function Xr(t){var e=t;do{if((e.flags&32768)!==0){Lp(e,Qn);return}t=e.return;var a=Pv(e.alternate,e,En);if(a!==null){yt=a;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);qt===0&&(qt=5)}function Lp(t,e){do{var a=Wv(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);qt=6,yt=null}function qp(t,e,a,i,u,o,h,b,S){t.cancelPendingCommit=null;do Kr();while(ne!==0);if((Rt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(o=e.lanes|e.childLanes,o|=zu,qy(t,a,o,h,b,S),t===zt&&(yt=zt=null,bt=0),ui=e,Xn=t,oi=a,Lo=o,qo=u,Cp=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,c1(Pl,function(){return Gp(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=L.T,L.T=null,u=Z.p,Z.p=2,h=Rt,Rt|=4;try{Iv(t,e,a)}finally{Rt=h,Z.p=u,L.T=i}}ne=1,Hp(),kp(),Yp()}}function Hp(){if(ne===1){ne=0;var t=Xn,e=ui,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var i=Z.p;Z.p=2;var u=Rt;Rt|=4;try{Sp(e,t);var o=tc,h=Ad(t.containerInfo),b=o.focusedElem,S=o.selectionRange;if(h!==b&&b&&b.ownerDocument&&Od(b.ownerDocument.documentElement,b)){if(S!==null&&Ou(b)){var z=S.start,q=S.end;if(q===void 0&&(q=z),"selectionStart"in b)b.selectionStart=z,b.selectionEnd=Math.min(q,b.value.length);else{var Q=b.ownerDocument||document,M=Q&&Q.defaultView||window;if(M.getSelection){var U=M.getSelection(),ut=b.textContent.length,it=Math.min(S.start,ut),jt=S.end===void 0?it:Math.min(S.end,ut);!U.extend&&it>jt&&(h=jt,jt=it,it=h);var C=Td(b,it),T=Td(b,jt);if(C&&T&&(U.rangeCount!==1||U.anchorNode!==C.node||U.anchorOffset!==C.offset||U.focusNode!==T.node||U.focusOffset!==T.offset)){var D=Q.createRange();D.setStart(C.node,C.offset),U.removeAllRanges(),it>jt?(U.addRange(D),U.extend(T.node,T.offset)):(D.setEnd(T.node,T.offset),U.addRange(D))}}}}for(Q=[],U=b;U=U.parentNode;)U.nodeType===1&&Q.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Q.length;b++){var k=Q[b];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}is=!!Io,tc=Io=null}finally{Rt=u,Z.p=i,L.T=a}}t.current=e,ne=2}}function kp(){if(ne===2){ne=0;var t=Xn,e=ui,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var i=Z.p;Z.p=2;var u=Rt;Rt|=4;try{yp(t,e.alternate,e)}finally{Rt=u,Z.p=i,L.T=a}}ne=3}}function Yp(){if(ne===4||ne===3){ne=0,jy();var t=Xn,e=ui,a=oi,i=Cp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ne=5:(ne=0,ui=Xn=null,Qp(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&($n=null),lu(a),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=L.T,u=Z.p,Z.p=2,L.T=null;try{for(var o=t.onRecoverableError,h=0;h<i.length;h++){var b=i[h];o(b.value,{componentStack:b.stack})}}finally{L.T=e,Z.p=u}}(oi&3)!==0&&Kr(),nn(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Ho?xl++:(xl=0,Ho=t):xl=0,Sl(0)}}function Qp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,tl(e)))}function Kr(t){return Hp(),kp(),Yp(),Gp()}function Gp(){if(ne!==5)return!1;var t=Xn,e=Lo;Lo=0;var a=lu(oi),i=L.T,u=Z.p;try{Z.p=32>a?32:a,L.T=null,a=qo,qo=null;var o=Xn,h=oi;if(ne=0,ui=Xn=null,oi=0,(Rt&6)!==0)throw Error(s(331));var b=Rt;if(Rt|=4,Op(o.current),Ep(o,o.current,h,a),Rt=b,Sl(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Bi,o)}catch{}return!0}finally{Z.p=u,L.T=i,Qp(t,e)}}function $p(t,e,a){e=_e(a,e),e=yo(t.stateNode,e,2),t=Nn(t,e,2),t!==null&&(qi(t,2),nn(t))}function Dt(t,e,a){if(t.tag===3)$p(t,t,a);else for(;e!==null;){if(e.tag===3){$p(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($n===null||!$n.has(i))){t=_e(a,t),a=Zh(2),i=Nn(e,a,2),i!==null&&(Jh(a,i,e,t),qi(i,2),nn(i));break}}e=e.return}}function Go(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new n1;var u=new Set;i.set(e,u)}else u=i.get(e),u===void 0&&(u=new Set,i.set(e,u));u.has(a)||(_o=!0,u.add(a),t=s1.bind(null,t,e,a),e.then(t,t))}function s1(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(bt&a)===a&&(qt===4||qt===3&&(bt&62914560)===bt&&300>Pe()-Bo?(Rt&2)===0&&ci(t,0):Uo|=a,si===bt&&(si=0)),nn(t)}function Xp(t,e){e===0&&(e=Yf()),t=Ka(t,e),t!==null&&(qi(t,e),nn(t))}function u1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Xp(t,a)}function o1(t,e){var a=0;switch(t.tag){case 13:var i=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(e),Xp(t,a)}function c1(t,e){return eu(t,e)}var Vr=null,di=null,$o=!1,Zr=!1,Xo=!1,Sa=0;function nn(t){t!==di&&t.next===null&&(di===null?Vr=di=t:di=di.next=t),Zr=!0,$o||($o=!0,d1())}function Sl(t,e){if(!Xo&&Zr){Xo=!0;do for(var a=!1,i=Vr;i!==null;){if(t!==0){var u=i.pendingLanes;if(u===0)var o=0;else{var h=i.suspendedLanes,b=i.pingedLanes;o=(1<<31-xe(42|t)+1)-1,o&=u&~(h&~b),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Jp(i,o))}else o=bt,o=tr(i,i===zt?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||Li(i,o)||(a=!0,Jp(i,o));i=i.next}while(a);Xo=!1}}function f1(){Kp()}function Kp(){Zr=$o=!1;var t=0;Sa!==0&&(x1()&&(t=Sa),Sa=0);for(var e=Pe(),a=null,i=Vr;i!==null;){var u=i.next,o=Vp(i,e);o===0?(i.next=null,a===null?Vr=u:a.next=u,u===null&&(di=a)):(a=i,(t!==0||(o&3)!==0)&&(Zr=!0)),i=u}Sl(t)}function Vp(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,u=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var h=31-xe(o),b=1<<h,S=u[h];S===-1?((b&a)===0||(b&i)!==0)&&(u[h]=Ly(b,e)):S<=e&&(t.expiredLanes|=b),o&=~b}if(e=zt,a=bt,a=tr(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&nu(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Li(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&nu(i),lu(a)){case 2:case 8:a=qf;break;case 32:a=Pl;break;case 268435456:a=Hf;break;default:a=Pl}return i=Zp.bind(null,t),a=eu(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&nu(i),t.callbackPriority=2,t.callbackNode=null,2}function Zp(t,e){if(ne!==0&&ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kr()&&t.callbackNode!==a)return null;var i=bt;return i=tr(t,t===zt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Dp(t,i,e),Vp(t,Pe()),t.callbackNode!=null&&t.callbackNode===a?Zp.bind(null,t):null)}function Jp(t,e){if(Kr())return null;Dp(t,e,!0)}function d1(){w1(function(){(Rt&6)!==0?eu(Lf,f1):Kp()})}function Ko(){return Sa===0&&(Sa=kf()),Sa}function Fp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:lr(""+t)}function Pp(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function h1(t,e,a,i,u){if(e==="submit"&&a&&a.stateNode===u){var o=Fp((u[de]||null).action),h=i.submitter;h&&(e=(e=h[de]||null)?Fp(e.formAction):h.getAttribute("formAction"),e!==null&&(o=e,h=null));var b=new or("action","action",null,i,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Sa!==0){var S=h?Pp(u,h):new FormData(u);fo(a,{pending:!0,data:S,method:u.method,action:o},null,S)}}else typeof o=="function"&&(b.preventDefault(),S=h?Pp(u,h):new FormData(u),fo(a,{pending:!0,data:S,method:u.method,action:o},o,S))},currentTarget:u}]})}}for(var Vo=0;Vo<Du.length;Vo++){var Zo=Du[Vo],p1=Zo.toLowerCase(),m1=Zo[0].toUpperCase()+Zo.slice(1);Ge(p1,"on"+m1)}Ge(Dd,"onAnimationEnd"),Ge(zd,"onAnimationIteration"),Ge(Md,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(Mv,"onTransitionRun"),Ge(_v,"onTransitionStart"),Ge(Uv,"onTransitionCancel"),Ge(_d,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),la("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),la("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),la("onBeforeInput",["compositionend","keypress","textInput","paste"]),la("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function Wp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],u=i.event;i=i.listeners;t:{var o=void 0;if(e)for(var h=i.length-1;0<=h;h--){var b=i[h],S=b.instance,z=b.currentTarget;if(b=b.listener,S!==o&&u.isPropagationStopped())break t;o=b,u.currentTarget=z;try{o(u)}catch(q){Nr(q)}u.currentTarget=null,o=S}else for(h=0;h<i.length;h++){if(b=i[h],S=b.instance,z=b.currentTarget,b=b.listener,S!==o&&u.isPropagationStopped())break t;o=b,u.currentTarget=z;try{o(u)}catch(q){Nr(q)}u.currentTarget=null,o=S}}}}function vt(t,e){var a=e[ru];a===void 0&&(a=e[ru]=new Set);var i=t+"__bubble";a.has(i)||(Ip(e,t,2,!1),a.add(i))}function Jo(t,e,a){var i=0;e&&(i|=4),Ip(a,t,i,e)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Jr]){t[Jr]=!0,Kf.forEach(function(a){a!=="selectionchange"&&(g1.has(a)||Jo(a,!1,t),Jo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jr]||(e[Jr]=!0,Jo("selectionchange",!1,e))}}function Ip(t,e,a,i){switch(E0(e)){case 2:var u=G1;break;case 8:u=$1;break;default:u=cc}a=u.bind(null,e,a,t),u=void 0,!yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),i?u!==void 0?t.addEventListener(e,a,{capture:!0,passive:u}):t.addEventListener(e,a,!0):u!==void 0?t.addEventListener(e,a,{passive:u}):t.addEventListener(e,a,!1)}function Po(t,e,a,i,u){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var b=i.stateNode.containerInfo;if(b===u)break;if(h===4)for(h=i.return;h!==null;){var S=h.tag;if((S===3||S===4)&&h.stateNode.containerInfo===u)return;h=h.return}for(;b!==null;){if(h=_a(b),h===null)return;if(S=h.tag,S===5||S===6||S===26||S===27){i=o=h;continue t}b=b.parentNode}}i=i.return}rd(function(){var z=o,q=mu(a),Q=[];t:{var M=Ud.get(t);if(M!==void 0){var U=or,ut=t;switch(t){case"keypress":if(sr(a)===0)break t;case"keydown":case"keyup":U=cv;break;case"focusin":ut="focus",U=Su;break;case"focusout":ut="blur",U=Su;break;case"beforeblur":case"afterblur":U=Su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=hv;break;case Dd:case zd:case Md:U=ev;break;case _d:U=mv;break;case"scroll":case"scrollend":U=Fy;break;case"wheel":U=yv;break;case"copy":case"cut":case"paste":U=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=fd;break;case"toggle":case"beforetoggle":U=bv}var it=(e&4)!==0,jt=!it&&(t==="scroll"||t==="scrollend"),C=it?M!==null?M+"Capture":null:M;it=[];for(var T=z,D;T!==null;){var k=T;if(D=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||D===null||C===null||(k=Yi(T,C),k!=null&&it.push(El(T,k,D))),jt)break;T=T.return}0<it.length&&(M=new U(M,ut,null,a,q),Q.push({event:M,listeners:it}))}}if((e&7)===0){t:{if(M=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",M&&a!==pu&&(ut=a.relatedTarget||a.fromElement)&&(_a(ut)||ut[Ma]))break t;if((U||M)&&(M=q.window===q?q:(M=q.ownerDocument)?M.defaultView||M.parentWindow:window,U?(ut=a.relatedTarget||a.toElement,U=z,ut=ut?_a(ut):null,ut!==null&&(jt=f(ut),it=ut.tag,ut!==jt||it!==5&&it!==27&&it!==6)&&(ut=null)):(U=null,ut=z),U!==ut)){if(it=od,k="onMouseLeave",C="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(it=fd,k="onPointerLeave",C="onPointerEnter",T="pointer"),jt=U==null?M:ki(U),D=ut==null?M:ki(ut),M=new it(k,T+"leave",U,a,q),M.target=jt,M.relatedTarget=D,k=null,_a(q)===z&&(it=new it(C,T+"enter",ut,a,q),it.target=D,it.relatedTarget=jt,k=it),jt=k,U&&ut)e:{for(it=U,C=ut,T=0,D=it;D;D=hi(D))T++;for(D=0,k=C;k;k=hi(k))D++;for(;0<T-D;)it=hi(it),T--;for(;0<D-T;)C=hi(C),D--;for(;T--;){if(it===C||C!==null&&it===C.alternate)break e;it=hi(it),C=hi(C)}it=null}else it=null;U!==null&&t0(Q,M,U,it,!1),ut!==null&&jt!==null&&t0(Q,jt,ut,it,!0)}}t:{if(M=z?ki(z):window,U=M.nodeName&&M.nodeName.toLowerCase(),U==="select"||U==="input"&&M.type==="file")var P=bd;else if(yd(M))if(xd)P=jv;else{P=Av;var pt=Ov}else U=M.nodeName,!U||U.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?z&&hu(z.elementType)&&(P=bd):P=Cv;if(P&&(P=P(t,z))){vd(Q,P,a,q);break t}pt&&pt(t,M,z),t==="focusout"&&z&&M.type==="number"&&z.memoizedProps.value!=null&&du(M,"number",M.value)}switch(pt=z?ki(z):window,t){case"focusin":(yd(pt)||pt.contentEditable==="true")&&(Ga=pt,Au=z,Ji=null);break;case"focusout":Ji=Au=Ga=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Cd(Q,a,q);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Cd(Q,a,q)}var tt;if(Eu)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Qa?md(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(dd&&a.locale!=="ko"&&(Qa||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Qa&&(tt=sd()):(zn=q,vu="value"in zn?zn.value:zn.textContent,Qa=!0)),pt=Fr(z,rt),0<pt.length&&(rt=new cd(rt,t,null,a,q),Q.push({event:rt,listeners:pt}),tt?rt.data=tt:(tt=gd(a),tt!==null&&(rt.data=tt)))),(tt=Sv?wv(t,a):Ev(t,a))&&(rt=Fr(z,"onBeforeInput"),0<rt.length&&(pt=new cd("onBeforeInput","beforeinput",null,a,q),Q.push({event:pt,listeners:rt}),pt.data=tt)),h1(Q,t,z,a,q)}Wp(Q,e)})}function El(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Fr(t,e){for(var a=e+"Capture",i=[];t!==null;){var u=t,o=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||o===null||(u=Yi(t,a),u!=null&&i.unshift(El(t,u,o)),u=Yi(t,e),u!=null&&i.push(El(t,u,o))),t.tag===3)return i;t=t.return}return[]}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function t0(t,e,a,i,u){for(var o=e._reactName,h=[];a!==null&&a!==i;){var b=a,S=b.alternate,z=b.stateNode;if(b=b.tag,S!==null&&S===i)break;b!==5&&b!==26&&b!==27||z===null||(S=z,u?(z=Yi(a,o),z!=null&&h.unshift(El(a,z,S))):u||(z=Yi(a,o),z!=null&&h.push(El(a,z,S)))),a=a.return}h.length!==0&&t.push({event:e,listeners:h})}var y1=/\r\n?/g,v1=/\u0000|\uFFFD/g;function e0(t){return(typeof t=="string"?t:""+t).replace(y1,`
`).replace(v1,"")}function n0(t,e){return e=e0(e),e0(t)===e}function Pr(){}function Ct(t,e,a,i,u,o){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Ha(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Ha(t,""+i);break;case"className":nr(t,"class",i);break;case"tabIndex":nr(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":nr(t,a,i);break;case"style":id(t,i,o);break;case"data":if(e!=="object"){nr(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=lr(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(e!=="input"&&Ct(t,e,"name",u.name,u,null),Ct(t,e,"formEncType",u.formEncType,u,null),Ct(t,e,"formMethod",u.formMethod,u,null),Ct(t,e,"formTarget",u.formTarget,u,null)):(Ct(t,e,"encType",u.encType,u,null),Ct(t,e,"method",u.method,u,null),Ct(t,e,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=lr(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=Pr);break;case"onScroll":i!=null&&vt("scroll",t);break;case"onScrollEnd":i!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=lr(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":vt("beforetoggle",t),vt("toggle",t),er(t,"popover",i);break;case"xlinkActuate":cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":er(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zy.get(a)||a,er(t,a,i))}}function Wo(t,e,a,i,u,o){switch(a){case"style":id(t,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof i=="string"?Ha(t,i):(typeof i=="number"||typeof i=="bigint")&&Ha(t,""+i);break;case"onScroll":i!=null&&vt("scroll",t);break;case"onScrollEnd":i!=null&&vt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Pr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),e=a.slice(2,u?a.length-7:void 0),o=t[de]||null,o=o!=null?o[a]:null,typeof o=="function"&&t.removeEventListener(e,o,u),typeof i=="function")){typeof o!="function"&&o!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,u);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):er(t,a,i)}}}function ae(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var i=!1,u=!1,o;for(o in a)if(a.hasOwnProperty(o)){var h=a[o];if(h!=null)switch(o){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ct(t,e,o,h,a,null)}}u&&Ct(t,e,"srcSet",a.srcSet,a,null),i&&Ct(t,e,"src",a.src,a,null);return;case"input":vt("invalid",t);var b=o=h=u=null,S=null,z=null;for(i in a)if(a.hasOwnProperty(i)){var q=a[i];if(q!=null)switch(i){case"name":u=q;break;case"type":h=q;break;case"checked":S=q;break;case"defaultChecked":z=q;break;case"value":o=q;break;case"defaultValue":b=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,e));break;default:Ct(t,e,i,q,a,null)}}td(t,o,b,S,z,h,u,!1),ar(t);return;case"select":vt("invalid",t),i=h=o=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":o=b;break;case"defaultValue":h=b;break;case"multiple":i=b;default:Ct(t,e,u,b,a,null)}e=o,a=h,t.multiple=!!i,e!=null?qa(t,!!i,e,!1):a!=null&&qa(t,!!i,a,!0);return;case"textarea":vt("invalid",t),o=u=i=null;for(h in a)if(a.hasOwnProperty(h)&&(b=a[h],b!=null))switch(h){case"value":i=b;break;case"defaultValue":u=b;break;case"children":o=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ct(t,e,h,b,a,null)}nd(t,i,u,o),ar(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(i=a[S],i!=null))switch(S){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ct(t,e,S,i,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(i=0;i<wl.length;i++)vt(wl[i],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(i=a[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ct(t,e,z,i,a,null)}return;default:if(hu(e)){for(q in a)a.hasOwnProperty(q)&&(i=a[q],i!==void 0&&Wo(t,e,q,i,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null&&Ct(t,e,b,i,a,null))}function b1(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,o=null,h=null,b=null,S=null,z=null,q=null;for(U in a){var Q=a[U];if(a.hasOwnProperty(U)&&Q!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":S=Q;default:i.hasOwnProperty(U)||Ct(t,e,U,null,i,Q)}}for(var M in i){var U=i[M];if(Q=a[M],i.hasOwnProperty(M)&&(U!=null||Q!=null))switch(M){case"type":o=U;break;case"name":u=U;break;case"checked":z=U;break;case"defaultChecked":q=U;break;case"value":h=U;break;case"defaultValue":b=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,e));break;default:U!==Q&&Ct(t,e,M,U,i,Q)}}fu(t,h,b,S,z,q,o,u);return;case"select":U=h=b=M=null;for(o in a)if(S=a[o],a.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":U=S;default:i.hasOwnProperty(o)||Ct(t,e,o,null,i,S)}for(u in i)if(o=i[u],S=a[u],i.hasOwnProperty(u)&&(o!=null||S!=null))switch(u){case"value":M=o;break;case"defaultValue":b=o;break;case"multiple":h=o;default:o!==S&&Ct(t,e,u,o,i,S)}e=b,a=h,i=U,M!=null?qa(t,!!a,M,!1):!!i!=!!a&&(e!=null?qa(t,!!a,e,!0):qa(t,!!a,a?[]:"",!1));return;case"textarea":U=M=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ct(t,e,b,null,i,u)}for(h in i)if(u=i[h],o=a[h],i.hasOwnProperty(h)&&(u!=null||o!=null))switch(h){case"value":M=u;break;case"defaultValue":U=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==o&&Ct(t,e,h,u,i,o)}ed(t,M,U);return;case"option":for(var ut in a)if(M=a[ut],a.hasOwnProperty(ut)&&M!=null&&!i.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:Ct(t,e,ut,null,i,M)}for(S in i)if(M=i[S],U=a[S],i.hasOwnProperty(S)&&M!==U&&(M!=null||U!=null))switch(S){case"selected":t.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Ct(t,e,S,M,i,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)M=a[it],a.hasOwnProperty(it)&&M!=null&&!i.hasOwnProperty(it)&&Ct(t,e,it,null,i,M);for(z in i)if(M=i[z],U=a[z],i.hasOwnProperty(z)&&M!==U&&(M!=null||U!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,e));break;default:Ct(t,e,z,M,i,U)}return;default:if(hu(e)){for(var jt in a)M=a[jt],a.hasOwnProperty(jt)&&M!==void 0&&!i.hasOwnProperty(jt)&&Wo(t,e,jt,void 0,i,M);for(q in i)M=i[q],U=a[q],!i.hasOwnProperty(q)||M===U||M===void 0&&U===void 0||Wo(t,e,q,M,i,U);return}}for(var C in a)M=a[C],a.hasOwnProperty(C)&&M!=null&&!i.hasOwnProperty(C)&&Ct(t,e,C,null,i,M);for(Q in i)M=i[Q],U=a[Q],!i.hasOwnProperty(Q)||M===U||M==null&&U==null||Ct(t,e,Q,M,i,U)}var Io=null,tc=null;function Wr(t){return t.nodeType===9?t:t.ownerDocument}function a0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nc=null;function x1(){var t=window.event;return t&&t.type==="popstate"?t===nc?!1:(nc=t,!0):(nc=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(t){return r0.resolve(null).then(t).catch(E1)}:l0;function E1(t){setTimeout(function(){throw t})}function Vn(t){return t==="head"}function s0(t,e){var a=e,i=0,u=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<i&&8>i){a=i;var h=t.ownerDocument;if(a&1&&Rl(h.documentElement),a&2&&Rl(h.body),a&4)for(a=h.head,Rl(a),h=a.firstChild;h;){var b=h.nextSibling,S=h.nodeName;h[Hi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=b}}if(u===0){t.removeChild(o),Ml(e);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:i=a.charCodeAt(0)-48;else i=0;a=o}while(a);Ml(e)}function ac(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ac(a),su(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function R1(t,e,a,i){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Hi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Xe(t.nextSibling),t===null)break}return null}function T1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Xe(t.nextSibling),t===null))return null;return t}function ic(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function O1(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var lc=null;function u0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function o0(t,e,a){switch(e=Wr(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Rl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);su(t)}var He=new Map,c0=new Set;function Ir(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Rn=Z.d;Z.d={f:A1,r:C1,D:j1,C:D1,L:z1,m:M1,X:U1,S:_1,M:N1};function A1(){var t=Rn.f(),e=$r();return t||e}function C1(t){var e=Ua(t);e!==null&&e.tag===5&&e.type==="form"?Dh(e):Rn.r(t)}var pi=typeof document>"u"?null:document;function f0(t,e,a){var i=pi;if(i&&typeof e=="string"&&e){var u=Me(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),c0.has(u)||(c0.add(u),t={rel:t,crossOrigin:a,href:e},i.querySelector(u)===null&&(e=i.createElement("link"),ae(e,"link",t),Ft(e),i.head.appendChild(e)))}}function j1(t){Rn.D(t),f0("dns-prefetch",t,null)}function D1(t,e){Rn.C(t,e),f0("preconnect",t,e)}function z1(t,e,a){Rn.L(t,e,a);var i=pi;if(i&&t&&e){var u='link[rel="preload"][as="'+Me(e)+'"]';e==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Me(a.imageSizes)+'"]')):u+='[href="'+Me(t)+'"]';var o=u;switch(e){case"style":o=mi(t);break;case"script":o=gi(t)}He.has(o)||(t=g({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),He.set(o,t),i.querySelector(u)!==null||e==="style"&&i.querySelector(Tl(o))||e==="script"&&i.querySelector(Ol(o))||(e=i.createElement("link"),ae(e,"link",t),Ft(e),i.head.appendChild(e)))}}function M1(t,e){Rn.m(t,e);var a=pi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Me(i)+'"][href="'+Me(t)+'"]',o=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=gi(t)}if(!He.has(o)&&(t=g({rel:"modulepreload",href:t},e),He.set(o,t),a.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ol(o)))return}i=a.createElement("link"),ae(i,"link",t),Ft(i),a.head.appendChild(i)}}}function _1(t,e,a){Rn.S(t,e,a);var i=pi;if(i&&t){var u=Na(i).hoistableStyles,o=mi(t);e=e||"default";var h=u.get(o);if(!h){var b={loading:0,preload:null};if(h=i.querySelector(Tl(o)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":e},a),(a=He.get(o))&&rc(t,a);var S=h=i.createElement("link");Ft(S),ae(S,"link",t),S._p=new Promise(function(z,q){S.onload=z,S.onerror=q}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ts(h,e,i)}h={type:"stylesheet",instance:h,count:1,state:b},u.set(o,h)}}}function U1(t,e){Rn.X(t,e);var a=pi;if(a&&t){var i=Na(a).hoistableScripts,u=gi(t),o=i.get(u);o||(o=a.querySelector(Ol(u)),o||(t=g({src:t,async:!0},e),(e=He.get(u))&&sc(t,e),o=a.createElement("script"),Ft(o),ae(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function N1(t,e){Rn.M(t,e);var a=pi;if(a&&t){var i=Na(a).hoistableScripts,u=gi(t),o=i.get(u);o||(o=a.querySelector(Ol(u)),o||(t=g({src:t,async:!0,type:"module"},e),(e=He.get(u))&&sc(t,e),o=a.createElement("script"),Ft(o),ae(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function d0(t,e,a,i){var u=(u=lt.current)?Ir(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=mi(a.href),a=Na(u).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mi(a.href);var o=Na(u).hoistableStyles,h=o.get(t);if(h||(u=u.ownerDocument||u,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,h),(o=u.querySelector(Tl(t)))&&!o._p&&(h.instance=o,h.state.loading=5),He.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},He.set(t,a),o||B1(u,t,a,h.state))),e&&i===null)throw Error(s(528,""));return h}if(e&&i!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=gi(a),a=Na(u).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function mi(t){return'href="'+Me(t)+'"'}function Tl(t){return'link[rel="stylesheet"]['+t+"]"}function h0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function B1(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ae(e,"link",a),Ft(e),t.head.appendChild(e))}function gi(t){return'[src="'+Me(t)+'"]'}function Ol(t){return"script[async]"+t}function p0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Me(a.href)+'"]');if(i)return e.instance=i,Ft(i),i;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Ft(i),ae(i,"style",u),ts(i,a.precedence,t),e.instance=i;case"stylesheet":u=mi(a.href);var o=t.querySelector(Tl(u));if(o)return e.state.loading|=4,e.instance=o,Ft(o),o;i=h0(a),(u=He.get(u))&&rc(i,u),o=(t.ownerDocument||t).createElement("link"),Ft(o);var h=o;return h._p=new Promise(function(b,S){h.onload=b,h.onerror=S}),ae(o,"link",i),e.state.loading|=4,ts(o,a.precedence,t),e.instance=o;case"script":return o=gi(a.src),(u=t.querySelector(Ol(o)))?(e.instance=u,Ft(u),u):(i=a,(u=He.get(o))&&(i=g({},a),sc(i,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ft(u),ae(u,"link",i),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,ts(i,a.precedence,t));return e.instance}function ts(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,o=u,h=0;h<i.length;h++){var b=i[h];if(b.dataset.precedence===e)o=b;else if(o!==u)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function rc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function sc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var es=null;function m0(t,e,a){if(es===null){var i=new Map,u=es=new Map;u.set(a,i)}else u=es,i=u.get(a),i||(i=new Map,u.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var o=a[u];if(!(o[Hi]||o[le]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var h=o.getAttribute(e)||"";h=t+h;var b=i.get(h);b?b.push(o):i.set(h,[o])}}return i}function g0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function L1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Al=null;function q1(){}function H1(t,e,a){if(Al===null)throw Error(s(475));var i=Al;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=mi(a.href),o=t.querySelector(Tl(u));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=ns.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=o,Ft(o);return}o=t.ownerDocument||t,a=h0(a),(u=He.get(u))&&rc(a,u),o=o.createElement("link"),Ft(o);var h=o;h._p=new Promise(function(b,S){h.onload=b,h.onerror=S}),ae(o,"link",a),e.instance=o}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(i.count++,e=ns.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function k1(){if(Al===null)throw Error(s(475));var t=Al;return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ns(){if(this.count--,this.count===0){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var as=null;function uc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,as=new Map,e.forEach(Y1,t),as=null,ns.call(t))}function Y1(t,e){if(!(e.state.loading&4)){var a=as.get(t);if(a)var i=a.get(null);else{a=new Map,as.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<u.length;o++){var h=u[o];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(a.set(h.dataset.precedence,h),i=h)}i&&a.set(null,i)}u=e.instance,h=u.getAttribute("data-precedence"),o=a.get(h)||i,o===i&&a.set(null,u),a.set(h,u),this.count++,i=ns.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),o?o.parentNode.insertBefore(u,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var Cl={$$typeof:$,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function Q1(t,e,a,i,u,o,h,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=o,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function v0(t,e,a,i,u,o,h,b,S,z,q,Q){return t=new Q1(t,e,a,h,b,S,z,Q),e=1,o===!0&&(e|=24),o=we(3,null,null,e),t.current=o,o.stateNode=t,e=Qu(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:i,isDehydrated:a,cache:e},Ku(o),t}function b0(t){return t?(t=Va,t):Va}function x0(t,e,a,i,u,o){u=b0(u),i.context===null?i.context=u:i.pendingContext=u,i=Un(e),i.payload={element:a},o=o===void 0?null:o,o!==null&&(i.callback=o),a=Nn(t,i,e),a!==null&&(Ae(a,t,e),il(a,t,e))}function S0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function oc(t,e){S0(t,e),(t=t.alternate)&&S0(t,e)}function w0(t){if(t.tag===13){var e=Ka(t,67108864);e!==null&&Ae(e,t,67108864),oc(t,67108864)}}var is=!0;function G1(t,e,a,i){var u=L.T;L.T=null;var o=Z.p;try{Z.p=2,cc(t,e,a,i)}finally{Z.p=o,L.T=u}}function $1(t,e,a,i){var u=L.T;L.T=null;var o=Z.p;try{Z.p=8,cc(t,e,a,i)}finally{Z.p=o,L.T=u}}function cc(t,e,a,i){if(is){var u=fc(i);if(u===null)Po(t,e,i,ls,a),R0(t,i);else if(K1(u,t,e,a,i))i.stopPropagation();else if(R0(t,i),e&4&&-1<X1.indexOf(t)){for(;u!==null;){var o=Ua(u);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var h=ia(o.pendingLanes);if(h!==0){var b=o;for(b.pendingLanes|=2,b.entangledLanes|=2;h;){var S=1<<31-xe(h);b.entanglements[1]|=S,h&=~S}nn(o),(Rt&6)===0&&(Qr=Pe()+500,Sl(0))}}break;case 13:b=Ka(o,2),b!==null&&Ae(b,o,2),$r(),oc(o,2)}if(o=fc(i),o===null&&Po(t,e,i,ls,a),o===u)break;u=o}u!==null&&i.stopPropagation()}else Po(t,e,i,null,a)}}function fc(t){return t=mu(t),dc(t)}var ls=null;function dc(t){if(ls=null,t=_a(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ls=t,null}function E0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dy()){case Lf:return 2;case qf:return 8;case Pl:case zy:return 32;case Hf:return 268435456;default:return 32}default:return 32}}var hc=!1,Zn=null,Jn=null,Fn=null,jl=new Map,Dl=new Map,Pn=[],X1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R0(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":jl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(e.pointerId)}}function zl(t,e,a,i,u,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:o,targetContainers:[u]},e!==null&&(e=Ua(e),e!==null&&w0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function K1(t,e,a,i,u){switch(e){case"focusin":return Zn=zl(Zn,t,e,a,i,u),!0;case"dragenter":return Jn=zl(Jn,t,e,a,i,u),!0;case"mouseover":return Fn=zl(Fn,t,e,a,i,u),!0;case"pointerover":var o=u.pointerId;return jl.set(o,zl(jl.get(o)||null,t,e,a,i,u)),!0;case"gotpointercapture":return o=u.pointerId,Dl.set(o,zl(Dl.get(o)||null,t,e,a,i,u)),!0}return!1}function T0(t){var e=_a(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,Hy(t.priority,function(){if(a.tag===13){var i=Oe();i=iu(i);var u=Ka(a,i);u!==null&&Ae(u,a,i),oc(a,i)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=fc(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);pu=i,a.target.dispatchEvent(i),pu=null}else return e=Ua(a),e!==null&&w0(e),t.blockedOn=a,!1;e.shift()}return!0}function O0(t,e,a){rs(t)&&a.delete(e)}function V1(){hc=!1,Zn!==null&&rs(Zn)&&(Zn=null),Jn!==null&&rs(Jn)&&(Jn=null),Fn!==null&&rs(Fn)&&(Fn=null),jl.forEach(O0),Dl.forEach(O0)}function ss(t,e){t.blockedOn===e&&(t.blockedOn=null,hc||(hc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,V1)))}var us=null;function A0(t){us!==t&&(us=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){us===t&&(us=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],u=t[e+2];if(typeof i!="function"){if(dc(i||a)===null)continue;break}var o=Ua(a);o!==null&&(t.splice(e,3),e-=3,fo(o,{pending:!0,data:u,method:a.method,action:i},i,u))}}))}function Ml(t){function e(S){return ss(S,t)}Zn!==null&&ss(Zn,t),Jn!==null&&ss(Jn,t),Fn!==null&&ss(Fn,t),jl.forEach(e),Dl.forEach(e);for(var a=0;a<Pn.length;a++){var i=Pn[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Pn.length&&(a=Pn[0],a.blockedOn===null);)T0(a),a.blockedOn===null&&Pn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var u=a[i],o=a[i+1],h=u[de]||null;if(typeof o=="function")h||A0(a);else if(h){var b=null;if(o&&o.hasAttribute("formAction")){if(u=o,h=o[de]||null)b=h.formAction;else if(dc(u)!==null)continue}else b=h.action;typeof b=="function"?a[i+1]=b:(a.splice(i,3),i-=3),A0(a)}}}function pc(t){this._internalRoot=t}os.prototype.render=pc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,i=Oe();x0(a,i,t,e,null,null)},os.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;x0(t.current,2,null,t,null,null),$r(),e[Ma]=null}};function os(t){this._internalRoot=t}os.prototype.unstable_scheduleHydration=function(t){if(t){var e=$f();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Pn.length&&e!==0&&e<Pn[a].priority;a++);Pn.splice(a,0,t),a===0&&T0(t)}};var C0=l.version;if(C0!=="19.1.1")throw Error(s(527,C0,"19.1.1"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Z1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{Bi=cs.inject(Z1),be=cs}catch{}}return Ul.createRoot=function(t,e){if(!c(t))throw Error(s(299));var a=!1,i="",u=$h,o=Xh,h=Kh,b=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=v0(t,1,!1,null,null,a,i,u,o,h,b,null),t[Ma]=e.current,Fo(t),new pc(e)},Ul.hydrateRoot=function(t,e,a){if(!c(t))throw Error(s(299));var i=!1,u="",o=$h,h=Xh,b=Kh,S=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),e=v0(t,1,!0,e,a??null,i,u,o,h,b,S,z),e.context=b0(null),a=e.current,i=Oe(),i=iu(i),u=Un(i),u.callback=null,Nn(a,u,i),a=i,e.current.lanes=a,qi(e,a),nn(e),t[Ma]=e.current,Fo(t),new os(e)},Ul.version="19.1.1",Ul}var q0;function lb(){if(q0)return yc.exports;q0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),yc.exports=ib(),yc.exports}var rb=lb();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var H0="popstate";function sb(n={}){function l(s,c){let{pathname:f,search:d,hash:m}=s.location;return Hc("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(s,c){return typeof c=="string"?c:Hl(c)}return ob(l,r,null,n)}function Nt(n,l){if(n===!1||n===null||typeof n>"u")throw new Error(l)}function Ve(n,l){if(!n){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function ub(){return Math.random().toString(36).substring(2,10)}function k0(n,l){return{usr:n.state,key:n.key,idx:l}}function Hc(n,l,r=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof l=="string"?Ai(l):l,state:r,key:l&&l.key||s||ub()}}function Hl({pathname:n="/",search:l="",hash:r=""}){return l&&l!=="?"&&(n+=l.charAt(0)==="?"?l:"?"+l),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Ai(n){let l={};if(n){let r=n.indexOf("#");r>=0&&(l.hash=n.substring(r),n=n.substring(0,r));let s=n.indexOf("?");s>=0&&(l.search=n.substring(s),n=n.substring(0,s)),n&&(l.pathname=n)}return l}function ob(n,l,r,s={}){let{window:c=document.defaultView,v5Compat:f=!1}=s,d=c.history,m="POP",v=null,p=g();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function g(){return(d.state||{idx:null}).idx}function x(){m="POP";let j=g(),Y=j==null?null:j-p;p=j,v&&v({action:m,location:_.location,delta:Y})}function R(j,Y){m="PUSH";let H=Hc(_.location,j,Y);p=g()+1;let $=k0(H,p),F=_.createHref(H);try{d.pushState($,"",F)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;c.location.assign(F)}f&&v&&v({action:m,location:_.location,delta:1})}function N(j,Y){m="REPLACE";let H=Hc(_.location,j,Y);p=g();let $=k0(H,p),F=_.createHref(H);d.replaceState($,"",F),f&&v&&v({action:m,location:_.location,delta:0})}function A(j){return cb(j)}let _={get action(){return m},get location(){return n(c,d)},listen(j){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(H0,x),v=j,()=>{c.removeEventListener(H0,x),v=null}},createHref(j){return l(c,j)},createURL:A,encodeLocation(j){let Y=A(j);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:R,replace:N,go(j){return d.go(j)}};return _}function cb(n,l=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Nt(r,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:Hl(n);return s=s.replace(/ $/,"%20"),!l&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function qm(n,l,r="/"){return fb(n,l,r,!1)}function fb(n,l,r,s){let c=typeof l=="string"?Ai(l):l,f=Cn(c.pathname||"/",r);if(f==null)return null;let d=Hm(n);db(d);let m=null;for(let v=0;m==null&&v<d.length;++v){let p=Eb(f);m=Sb(d[v],p,s)}return m}function Hm(n,l=[],r=[],s="",c=!1){let f=(d,m,v=c,p)=>{let g={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&v)return;Nt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let x=An([s,g.relativePath]),R=r.concat(g);d.children&&d.children.length>0&&(Nt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Hm(d.children,l,R,x,v)),!(d.path==null&&!d.index)&&l.push({path:x,score:bb(x,d.index),routesMeta:R})};return n.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))f(d,m);else for(let v of km(d.path))f(d,m,!0,v)}),l}function km(n){let l=n.split("/");if(l.length===0)return[];let[r,...s]=l,c=r.endsWith("?"),f=r.replace(/\?$/,"");if(s.length===0)return c?[f,""]:[f];let d=km(s.join("/")),m=[];return m.push(...d.map(v=>v===""?f:[f,v].join("/"))),c&&m.push(...d),m.map(v=>n.startsWith("/")&&v===""?"/":v)}function db(n){n.sort((l,r)=>l.score!==r.score?r.score-l.score:xb(l.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var hb=/^:[\w-]+$/,pb=3,mb=2,gb=1,yb=10,vb=-2,Y0=n=>n==="*";function bb(n,l){let r=n.split("/"),s=r.length;return r.some(Y0)&&(s+=vb),l&&(s+=mb),r.filter(c=>!Y0(c)).reduce((c,f)=>c+(hb.test(f)?pb:f===""?gb:yb),s)}function xb(n,l){return n.length===l.length&&n.slice(0,-1).every((s,c)=>s===l[c])?n[n.length-1]-l[l.length-1]:0}function Sb(n,l,r=!1){let{routesMeta:s}=n,c={},f="/",d=[];for(let m=0;m<s.length;++m){let v=s[m],p=m===s.length-1,g=f==="/"?l:l.slice(f.length)||"/",x=Cs({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},g),R=v.route;if(!x&&p&&r&&!s[s.length-1].route.index&&(x=Cs({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},g)),!x)return null;Object.assign(c,x.params),d.push({params:c,pathname:An([f,x.pathname]),pathnameBase:Ab(An([f,x.pathnameBase])),route:R}),x.pathnameBase!=="/"&&(f=An([f,x.pathnameBase]))}return d}function Cs(n,l){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,s]=wb(n.path,n.caseSensitive,n.end),c=l.match(r);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:x},R)=>{if(g==="*"){let A=m[R]||"";d=f.slice(0,f.length-A.length).replace(/(.)\/+$/,"$1")}const N=m[R];return x&&!N?p[g]=void 0:p[g]=(N||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:n}}function wb(n,l=!1,r=!0){Ve(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,v)=>(s.push({paramName:m,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),s]}function Eb(n){try{return n.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Ve(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),n}}function Cn(n,l){if(l==="/")return n;if(!n.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,s=n.charAt(r);return s&&s!=="/"?null:n.slice(r)||"/"}function Rb(n,l="/"){let{pathname:r,search:s="",hash:c=""}=typeof n=="string"?Ai(n):n;return{pathname:r?r.startsWith("/")?r:Tb(r,l):l,search:Cb(s),hash:jb(c)}}function Tb(n,l){let r=l.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function Sc(n,l,r,s){return`Cannot include a '${n}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ob(n){return n.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function df(n){let l=Ob(n);return l.map((r,s)=>s===l.length-1?r.pathname:r.pathnameBase)}function hf(n,l,r,s=!1){let c;typeof n=="string"?c=Ai(n):(c={...n},Nt(!c.pathname||!c.pathname.includes("?"),Sc("?","pathname","search",c)),Nt(!c.pathname||!c.pathname.includes("#"),Sc("#","pathname","hash",c)),Nt(!c.search||!c.search.includes("#"),Sc("#","search","hash",c)));let f=n===""||c.pathname==="",d=f?"/":c.pathname,m;if(d==null)m=r;else{let x=l.length-1;if(!s&&d.startsWith("..")){let R=d.split("/");for(;R[0]==="..";)R.shift(),x-=1;c.pathname=R.join("/")}m=x>=0?l[x]:"/"}let v=Rb(c,m),p=d&&d!=="/"&&d.endsWith("/"),g=(f||d===".")&&r.endsWith("/");return!v.pathname.endsWith("/")&&(p||g)&&(v.pathname+="/"),v}var An=n=>n.join("/").replace(/\/\/+/g,"/"),Ab=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Cb=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,jb=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Db(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ym=["POST","PUT","PATCH","DELETE"];new Set(Ym);var zb=["GET",...Ym];new Set(zb);var Ci=w.createContext(null);Ci.displayName="DataRouter";var Hs=w.createContext(null);Hs.displayName="DataRouterState";w.createContext(!1);var Qm=w.createContext({isTransitioning:!1});Qm.displayName="ViewTransition";var Mb=w.createContext(new Map);Mb.displayName="Fetchers";var _b=w.createContext(null);_b.displayName="Await";var Ze=w.createContext(null);Ze.displayName="Navigation";var Gl=w.createContext(null);Gl.displayName="Location";var Je=w.createContext({outlet:null,matches:[],isDataRoute:!1});Je.displayName="Route";var pf=w.createContext(null);pf.displayName="RouteError";function Ub(n,{relative:l}={}){Nt(ji(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=w.useContext(Ze),{hash:c,pathname:f,search:d}=$l(n,{relative:l}),m=f;return r!=="/"&&(m=f==="/"?r:An([r,f])),s.createHref({pathname:m,search:d,hash:c})}function ji(){return w.useContext(Gl)!=null}function Qe(){return Nt(ji(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Gl).location}var Gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $m(n){w.useContext(Ze).static||w.useLayoutEffect(n)}function je(){let{isDataRoute:n}=w.useContext(Je);return n?Vb():Nb()}function Nb(){Nt(ji(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(Ci),{basename:l,navigator:r}=w.useContext(Ze),{matches:s}=w.useContext(Je),{pathname:c}=Qe(),f=JSON.stringify(df(s)),d=w.useRef(!1);return $m(()=>{d.current=!0}),w.useCallback((v,p={})=>{if(Ve(d.current,Gm),!d.current)return;if(typeof v=="number"){r.go(v);return}let g=hf(v,JSON.parse(f),c,p.relative==="path");n==null&&l!=="/"&&(g.pathname=g.pathname==="/"?l:An([l,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[l,r,f,c,n])}w.createContext(null);function Xm(){let{matches:n}=w.useContext(Je),l=n[n.length-1];return l?l.params:{}}function $l(n,{relative:l}={}){let{matches:r}=w.useContext(Je),{pathname:s}=Qe(),c=JSON.stringify(df(r));return w.useMemo(()=>hf(n,JSON.parse(c),s,l==="path"),[n,c,s,l])}function Bb(n,l){return Km(n,l)}function Km(n,l,r,s,c){Nt(ji(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=w.useContext(Ze),{matches:d}=w.useContext(Je),m=d[d.length-1],v=m?m.params:{},p=m?m.pathname:"/",g=m?m.pathnameBase:"/",x=m&&m.route;{let H=x&&x.path||"";Vm(p,!x||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let R=Qe(),N;if(l){let H=typeof l=="string"?Ai(l):l;Nt(g==="/"||H.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${H.pathname}" was given in the \`location\` prop.`),N=H}else N=R;let A=N.pathname||"/",_=A;if(g!=="/"){let H=g.replace(/^\//,"").split("/");_="/"+A.replace(/^\//,"").split("/").slice(H.length).join("/")}let j=qm(n,{pathname:_});Ve(x||j!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Ve(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Yb(j&&j.map(H=>Object.assign({},H,{params:Object.assign({},v,H.params),pathname:An([g,f.encodeLocation?f.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?g:An([g,f.encodeLocation?f.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),d,r,s,c);return l&&Y?w.createElement(Gl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},Y):Y}function Lb(){let n=Kb(),l=Db(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:f},"ErrorBoundary")," or"," ",w.createElement("code",{style:f},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},l),r?w.createElement("pre",{style:c},r):null,d)}var qb=w.createElement(Lb,null),Hb=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,l){return l.location!==n.location||l.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:l.error,location:l.location,revalidation:n.revalidation||l.revalidation}}componentDidCatch(n,l){this.props.unstable_onError?this.props.unstable_onError(n,l):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?w.createElement(Je.Provider,{value:this.props.routeContext},w.createElement(pf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function kb({routeContext:n,match:l,children:r}){let s=w.useContext(Ci);return s&&s.static&&s.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=l.route.id),w.createElement(Je.Provider,{value:n},r)}function Yb(n,l=[],r=null,s=null,c=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(l.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let f=n,d=r?.errors;if(d!=null){let p=f.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);Nt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,p+1))}let m=!1,v=-1;if(r)for(let p=0;p<f.length;p++){let g=f[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(v=p),g.route.id){let{loaderData:x,errors:R}=r,N=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!R||R[g.route.id]===void 0);if(g.route.lazy||N){m=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((p,g,x)=>{let R,N=!1,A=null,_=null;r&&(R=d&&g.route.id?d[g.route.id]:void 0,A=g.route.errorElement||qb,m&&(v<0&&x===0?(Vm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,_=null):v===x&&(N=!0,_=g.route.hydrateFallbackElement||null)));let j=l.concat(f.slice(0,x+1)),Y=()=>{let H;return R?H=A:N?H=_:g.route.Component?H=w.createElement(g.route.Component,null):g.route.element?H=g.route.element:H=p,w.createElement(kb,{match:g,routeContext:{outlet:p,matches:j,isDataRoute:r!=null},children:H})};return r&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?w.createElement(Hb,{location:r.location,revalidation:r.revalidation,component:A,error:R,children:Y(),routeContext:{outlet:null,matches:j,isDataRoute:!0},unstable_onError:s}):Y()},null)}function mf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qb(n){let l=w.useContext(Ci);return Nt(l,mf(n)),l}function Gb(n){let l=w.useContext(Hs);return Nt(l,mf(n)),l}function $b(n){let l=w.useContext(Je);return Nt(l,mf(n)),l}function gf(n){let l=$b(n),r=l.matches[l.matches.length-1];return Nt(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function Xb(){return gf("useRouteId")}function Kb(){let n=w.useContext(pf),l=Gb("useRouteError"),r=gf("useRouteError");return n!==void 0?n:l.errors?.[r]}function Vb(){let{router:n}=Qb("useNavigate"),l=gf("useNavigate"),r=w.useRef(!1);return $m(()=>{r.current=!0}),w.useCallback(async(c,f={})=>{Ve(r.current,Gm),r.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:l,...f}))},[n,l])}var Q0={};function Vm(n,l,r){!l&&!Q0[n]&&(Q0[n]=!0,Ve(!1,r))}w.memo(Zb);function Zb({routes:n,future:l,state:r,unstable_onError:s}){return Km(n,void 0,r,s,l)}function Jb({to:n,replace:l,state:r,relative:s}){Nt(ji(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=w.useContext(Ze);Ve(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=w.useContext(Je),{pathname:d}=Qe(),m=je(),v=hf(n,df(f),d,s==="path"),p=JSON.stringify(v);return w.useEffect(()=>{m(JSON.parse(p),{replace:l,state:r,relative:s})},[m,p,s,l,r]),null}function Tn(n){Nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fb({basename:n="/",children:l=null,location:r,navigationType:s="POP",navigator:c,static:f=!1}){Nt(!ji(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:d,navigator:c,static:f,future:{}}),[d,c,f]);typeof r=="string"&&(r=Ai(r));let{pathname:v="/",search:p="",hash:g="",state:x=null,key:R="default"}=r,N=w.useMemo(()=>{let A=Cn(v,d);return A==null?null:{location:{pathname:A,search:p,hash:g,state:x,key:R},navigationType:s}},[d,v,p,g,x,R,s]);return Ve(N!=null,`<Router basename="${d}"> is not able to match the URL "${v}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:w.createElement(Ze.Provider,{value:m},w.createElement(Gl.Provider,{children:l,value:N}))}function Pb({children:n,location:l}){return Bb(kc(n),l)}function kc(n,l=[]){let r=[];return w.Children.forEach(n,(s,c)=>{if(!w.isValidElement(s))return;let f=[...l,c];if(s.type===w.Fragment){r.push.apply(r,kc(s.props.children,f));return}Nt(s.type===Tn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Nt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=kc(s.props.children,f)),r.push(d)}),r}var vs="get",bs="application/x-www-form-urlencoded";function ks(n){return n!=null&&typeof n.tagName=="string"}function Wb(n){return ks(n)&&n.tagName.toLowerCase()==="button"}function Ib(n){return ks(n)&&n.tagName.toLowerCase()==="form"}function tx(n){return ks(n)&&n.tagName.toLowerCase()==="input"}function ex(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function nx(n,l){return n.button===0&&(!l||l==="_self")&&!ex(n)}var fs=null;function ax(){if(fs===null)try{new FormData(document.createElement("form"),0),fs=!1}catch{fs=!0}return fs}var ix=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wc(n){return n!=null&&!ix.has(n)?(Ve(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bs}"`),null):n}function lx(n,l){let r,s,c,f,d;if(Ib(n)){let m=n.getAttribute("action");s=m?Cn(m,l):null,r=n.getAttribute("method")||vs,c=wc(n.getAttribute("enctype"))||bs,f=new FormData(n)}else if(Wb(n)||tx(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=n.getAttribute("formaction")||m.getAttribute("action");if(s=v?Cn(v,l):null,r=n.getAttribute("formmethod")||m.getAttribute("method")||vs,c=wc(n.getAttribute("formenctype"))||wc(m.getAttribute("enctype"))||bs,f=new FormData(m,n),!ax()){let{name:p,type:g,value:x}=n;if(g==="image"){let R=p?`${p}.`:"";f.append(`${R}x`,"0"),f.append(`${R}y`,"0")}else p&&f.append(p,x)}}else{if(ks(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=vs,s=null,c=bs,d=n}return f&&c==="text/plain"&&(d=f,f=void 0),{action:s,method:r.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yf(n,l){if(n===!1||n===null||typeof n>"u")throw new Error(l)}function rx(n,l,r){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${r}`:l&&Cn(s.pathname,l)==="/"?s.pathname=`${l.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function sx(n,l){if(n.id in l)return l[n.id];try{let r=await import(n.module);return l[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ux(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function ox(n,l,r){let s=await Promise.all(n.map(async c=>{let f=l.routes[c.route.id];if(f){let d=await sx(f,r);return d.links?d.links():[]}return[]}));return hx(s.flat(1).filter(ux).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function G0(n,l,r,s,c,f){let d=(v,p)=>r[p]?v.route.id!==r[p].route.id:!0,m=(v,p)=>r[p].pathname!==v.pathname||r[p].route.path?.endsWith("*")&&r[p].params["*"]!==v.params["*"];return f==="assets"?l.filter((v,p)=>d(v,p)||m(v,p)):f==="data"?l.filter((v,p)=>{let g=s.routes[v.route.id];if(!g||!g.hasLoader)return!1;if(d(v,p)||m(v,p))return!0;if(v.route.shouldRevalidate){let x=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function cx(n,l,{includeHydrateFallback:r}={}){return fx(n.map(s=>{let c=l.routes[s.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),r&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function fx(n){return[...new Set(n)]}function dx(n){let l={},r=Object.keys(n).sort();for(let s of r)l[s]=n[s];return l}function hx(n,l){let r=new Set;return new Set(l),n.reduce((s,c)=>{let f=JSON.stringify(dx(c));return r.has(f)||(r.add(f),s.push({key:f,link:c})),s},[])}function Zm(){let n=w.useContext(Ci);return yf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function px(){let n=w.useContext(Hs);return yf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var vf=w.createContext(void 0);vf.displayName="FrameworkContext";function Jm(){let n=w.useContext(vf);return yf(n,"You must render this element inside a <HydratedRouter> element"),n}function mx(n,l){let r=w.useContext(vf),[s,c]=w.useState(!1),[f,d]=w.useState(!1),{onFocus:m,onBlur:v,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=l,R=w.useRef(null);w.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let _=Y=>{Y.forEach(H=>{d(H.isIntersecting)})},j=new IntersectionObserver(_,{threshold:.5});return R.current&&j.observe(R.current),()=>{j.disconnect()}}},[n]),w.useEffect(()=>{if(s){let _=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(_)}}},[s]);let N=()=>{c(!0)},A=()=>{c(!1),d(!1)};return r?n!=="intent"?[f,R,{}]:[f,R,{onFocus:Nl(m,N),onBlur:Nl(v,A),onMouseEnter:Nl(p,N),onMouseLeave:Nl(g,A),onTouchStart:Nl(x,N)}]:[!1,R,{}]}function Nl(n,l){return r=>{n&&n(r),r.defaultPrevented||l(r)}}function gx({page:n,...l}){let{router:r}=Zm(),s=w.useMemo(()=>qm(r.routes,n,r.basename),[r.routes,n,r.basename]);return s?w.createElement(vx,{page:n,matches:s,...l}):null}function yx(n){let{manifest:l,routeModules:r}=Jm(),[s,c]=w.useState([]);return w.useEffect(()=>{let f=!1;return ox(n,l,r).then(d=>{f||c(d)}),()=>{f=!0}},[n,l,r]),s}function vx({page:n,matches:l,...r}){let s=Qe(),{manifest:c,routeModules:f}=Jm(),{basename:d}=Zm(),{loaderData:m,matches:v}=px(),p=w.useMemo(()=>G0(n,l,v,c,s,"data"),[n,l,v,c,s]),g=w.useMemo(()=>G0(n,l,v,c,s,"assets"),[n,l,v,c,s]),x=w.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let A=new Set,_=!1;if(l.forEach(Y=>{let H=c.routes[Y.route.id];!H||!H.hasLoader||(!p.some($=>$.route.id===Y.route.id)&&Y.route.id in m&&f[Y.route.id]?.shouldRevalidate||H.hasClientLoader?_=!0:A.add(Y.route.id))}),A.size===0)return[];let j=rx(n,d,"data");return _&&A.size>0&&j.searchParams.set("_routes",l.filter(Y=>A.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[j.pathname+j.search]},[d,m,s,c,p,l,n,f]),R=w.useMemo(()=>cx(g,c),[g,c]),N=yx(g);return w.createElement(w.Fragment,null,x.map(A=>w.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...r})),R.map(A=>w.createElement("link",{key:A,rel:"modulepreload",href:A,...r})),N.map(({key:A,link:_})=>w.createElement("link",{key:A,nonce:r.nonce,..._})))}function bx(...n){return l=>{n.forEach(r=>{typeof r=="function"?r(l):r!=null&&(r.current=l)})}}var Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fm&&(window.__reactRouterVersion="7.8.2")}catch{}function xx({basename:n,children:l,window:r}){let s=w.useRef();s.current==null&&(s.current=sb({window:r,v5Compat:!0}));let c=s.current,[f,d]=w.useState({action:c.action,location:c.location}),m=w.useCallback(v=>{w.startTransition(()=>d(v))},[d]);return w.useLayoutEffect(()=>c.listen(m),[c,m]),w.createElement(Fb,{basename:n,children:l,location:f.location,navigationType:f.action,navigator:c})}var Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wm=w.forwardRef(function({onClick:l,discover:r="render",prefetch:s="none",relative:c,reloadDocument:f,replace:d,state:m,target:v,to:p,preventScrollReset:g,viewTransition:x,...R},N){let{basename:A}=w.useContext(Ze),_=typeof p=="string"&&Pm.test(p),j,Y=!1;if(typeof p=="string"&&_&&(j=p,Fm))try{let I=new URL(window.location.href),st=p.startsWith("//")?new URL(I.protocol+p):new URL(p),Ot=Cn(st.pathname,A);st.origin===I.origin&&Ot!=null?p=Ot+st.search+st.hash:Y=!0}catch{Ve(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=Ub(p,{relative:c}),[$,F,X]=mx(s,R),W=Rx(p,{replace:d,state:m,target:v,preventScrollReset:g,relative:c,viewTransition:x});function K(I){l&&l(I),I.defaultPrevented||W(I)}let ot=w.createElement("a",{...R,...X,href:j||H,onClick:Y||f?l:K,ref:bx(N,F),target:v,"data-discover":!_&&r==="render"?"true":void 0});return $&&!_?w.createElement(w.Fragment,null,ot,w.createElement(gx,{page:H})):ot});Wm.displayName="Link";var Sx=w.forwardRef(function({"aria-current":l="page",caseSensitive:r=!1,className:s="",end:c=!1,style:f,to:d,viewTransition:m,children:v,...p},g){let x=$l(d,{relative:p.relative}),R=Qe(),N=w.useContext(Hs),{navigator:A,basename:_}=w.useContext(Ze),j=N!=null&&jx(x)&&m===!0,Y=A.encodeLocation?A.encodeLocation(x).pathname:x.pathname,H=R.pathname,$=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;r||(H=H.toLowerCase(),$=$?$.toLowerCase():null,Y=Y.toLowerCase()),$&&_&&($=Cn($,_)||$);const F=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let X=H===Y||!c&&H.startsWith(Y)&&H.charAt(F)==="/",W=$!=null&&($===Y||!c&&$.startsWith(Y)&&$.charAt(Y.length)==="/"),K={isActive:X,isPending:W,isTransitioning:j},ot=X?l:void 0,I;typeof s=="function"?I=s(K):I=[s,X?"active":null,W?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let st=typeof f=="function"?f(K):f;return w.createElement(Wm,{...p,"aria-current":ot,className:I,ref:g,style:st,to:d,viewTransition:m},typeof v=="function"?v(K):v)});Sx.displayName="NavLink";var wx=w.forwardRef(({discover:n="render",fetcherKey:l,navigate:r,reloadDocument:s,replace:c,state:f,method:d=vs,action:m,onSubmit:v,relative:p,preventScrollReset:g,viewTransition:x,...R},N)=>{let A=Ax(),_=Cx(m,{relative:p}),j=d.toLowerCase()==="get"?"get":"post",Y=typeof m=="string"&&Pm.test(m),H=$=>{if(v&&v($),$.defaultPrevented)return;$.preventDefault();let F=$.nativeEvent.submitter,X=F?.getAttribute("formmethod")||d;A(F||$.currentTarget,{fetcherKey:l,method:X,navigate:r,replace:c,state:f,relative:p,preventScrollReset:g,viewTransition:x})};return w.createElement("form",{ref:N,method:j,action:_,onSubmit:s?v:H,...R,"data-discover":!Y&&n==="render"?"true":void 0})});wx.displayName="Form";function Ex(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Im(n){let l=w.useContext(Ci);return Nt(l,Ex(n)),l}function Rx(n,{target:l,replace:r,state:s,preventScrollReset:c,relative:f,viewTransition:d}={}){let m=je(),v=Qe(),p=$l(n,{relative:f});return w.useCallback(g=>{if(nx(g,l)){g.preventDefault();let x=r!==void 0?r:Hl(v)===Hl(p);m(n,{replace:x,state:s,preventScrollReset:c,relative:f,viewTransition:d})}},[v,m,p,r,s,l,n,c,f,d])}var Tx=0,Ox=()=>`__${String(++Tx)}__`;function Ax(){let{router:n}=Im("useSubmit"),{basename:l}=w.useContext(Ze),r=Xb();return w.useCallback(async(s,c={})=>{let{action:f,method:d,encType:m,formData:v,body:p}=lx(s,l);if(c.navigate===!1){let g=c.fetcherKey||Ox();await n.fetch(g,r,c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:p,formMethod:c.method||d,formEncType:c.encType||m,flushSync:c.flushSync})}else await n.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:p,formMethod:c.method||d,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:r,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,l,r])}function Cx(n,{relative:l}={}){let{basename:r}=w.useContext(Ze),s=w.useContext(Je);Nt(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),f={...$l(n||".",{relative:l})},d=Qe();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),v=m.getAll("index");if(v.some(g=>g==="")){m.delete("index"),v.filter(x=>x).forEach(x=>m.append("index",x));let g=m.toString();f.search=g?`?${g}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:An([r,f.pathname])),Hl(f)}function jx(n,{relative:l}={}){let r=w.useContext(Qm);Nt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Im("useViewTransitionState"),c=$l(n,{relative:l});if(!r.isTransitioning)return!1;let f=Cn(r.currentLocation.pathname,s)||r.currentLocation.pathname,d=Cn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return Cs(c.pathname,d)!=null||Cs(c.pathname,f)!=null}const Dx="/static/img/search.svg",zx="/static/img/user.svg",Mx="/static/img/menu.svg",_x="/static/img/heart.svg";var oe=function(){return oe=Object.assign||function(l){for(var r,s=1,c=arguments.length;s<c;s++){r=arguments[s];for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&(l[f]=r[f])}return l},oe.apply(this,arguments)};function xi(n,l,r){if(r||arguments.length===2)for(var s=0,c=l.length,f;s<c;s++)(f||!(s in l))&&(f||(f=Array.prototype.slice.call(l,0,s)),f[s]=l[s]);return n.concat(f||Array.prototype.slice.call(l))}var _t="-ms-",ql="-moz-",Et="-webkit-",tg="comm",Ys="rule",bf="decl",Ux="@import",eg="@keyframes",Nx="@layer",ng=Math.abs,xf=String.fromCharCode,Yc=Object.assign;function Bx(n,l){return te(n,0)^45?(((l<<2^te(n,0))<<2^te(n,1))<<2^te(n,2))<<2^te(n,3):0}function ag(n){return n.trim()}function On(n,l){return(n=l.exec(n))?n[0]:n}function dt(n,l,r){return n.replace(l,r)}function xs(n,l,r){return n.indexOf(l,r)}function te(n,l){return n.charCodeAt(l)|0}function Si(n,l,r){return n.slice(l,r)}function ln(n){return n.length}function ig(n){return n.length}function Ll(n,l){return l.push(n),n}function Lx(n,l){return n.map(l).join("")}function $0(n,l){return n.filter(function(r){return!On(r,l)})}var Qs=1,wi=1,lg=0,Ye=0,$t=0,Di="";function Gs(n,l,r,s,c,f,d,m){return{value:n,root:l,parent:r,type:s,props:c,children:f,line:Qs,column:wi,length:d,return:"",siblings:m}}function In(n,l){return Yc(Gs("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},l)}function yi(n){for(;n.root;)n=In(n.root,{children:[n]});Ll(n,n.siblings)}function qx(){return $t}function Hx(){return $t=Ye>0?te(Di,--Ye):0,wi--,$t===10&&(wi=1,Qs--),$t}function Ke(){return $t=Ye<lg?te(Di,Ye++):0,wi++,$t===10&&(wi=1,Qs++),$t}function Ta(){return te(Di,Ye)}function Ss(){return Ye}function $s(n,l){return Si(Di,n,l)}function Qc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kx(n){return Qs=wi=1,lg=ln(Di=n),Ye=0,[]}function Yx(n){return Di="",n}function Ec(n){return ag($s(Ye-1,Gc(n===91?n+2:n===40?n+1:n)))}function Qx(n){for(;($t=Ta())&&$t<33;)Ke();return Qc(n)>2||Qc($t)>3?"":" "}function Gx(n,l){for(;--l&&Ke()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return $s(n,Ss()+(l<6&&Ta()==32&&Ke()==32))}function Gc(n){for(;Ke();)switch($t){case n:return Ye;case 34:case 39:n!==34&&n!==39&&Gc($t);break;case 40:n===41&&Gc(n);break;case 92:Ke();break}return Ye}function $x(n,l){for(;Ke()&&n+$t!==57;)if(n+$t===84&&Ta()===47)break;return"/*"+$s(l,Ye-1)+"*"+xf(n===47?n:Ke())}function Xx(n){for(;!Qc(Ta());)Ke();return $s(n,Ye)}function Kx(n){return Yx(ws("",null,null,null,[""],n=kx(n),0,[0],n))}function ws(n,l,r,s,c,f,d,m,v){for(var p=0,g=0,x=d,R=0,N=0,A=0,_=1,j=1,Y=1,H=0,$="",F=c,X=f,W=s,K=$;j;)switch(A=H,H=Ke()){case 40:if(A!=108&&te(K,x-1)==58){xs(K+=dt(Ec(H),"&","&\f"),"&\f",ng(p?m[p-1]:0))!=-1&&(Y=-1);break}case 34:case 39:case 91:K+=Ec(H);break;case 9:case 10:case 13:case 32:K+=Qx(A);break;case 92:K+=Gx(Ss()-1,7);continue;case 47:switch(Ta()){case 42:case 47:Ll(Vx($x(Ke(),Ss()),l,r,v),v);break;default:K+="/"}break;case 123*_:m[p++]=ln(K)*Y;case 125*_:case 59:case 0:switch(H){case 0:case 125:j=0;case 59+g:Y==-1&&(K=dt(K,/\f/g,"")),N>0&&ln(K)-x&&Ll(N>32?K0(K+";",s,r,x-1,v):K0(dt(K," ","")+";",s,r,x-2,v),v);break;case 59:K+=";";default:if(Ll(W=X0(K,l,r,p,g,c,m,$,F=[],X=[],x,f),f),H===123)if(g===0)ws(K,l,W,W,F,f,x,m,X);else switch(R===99&&te(K,3)===110?100:R){case 100:case 108:case 109:case 115:ws(n,W,W,s&&Ll(X0(n,W,W,0,0,c,m,$,c,F=[],x,X),X),c,X,x,m,s?F:X);break;default:ws(K,W,W,W,[""],X,0,m,X)}}p=g=N=0,_=Y=1,$=K="",x=d;break;case 58:x=1+ln(K),N=A;default:if(_<1){if(H==123)--_;else if(H==125&&_++==0&&Hx()==125)continue}switch(K+=xf(H),H*_){case 38:Y=g>0?1:(K+="\f",-1);break;case 44:m[p++]=(ln(K)-1)*Y,Y=1;break;case 64:Ta()===45&&(K+=Ec(Ke())),R=Ta(),g=x=ln($=K+=Xx(Ss())),H++;break;case 45:A===45&&ln(K)==2&&(_=0)}}return f}function X0(n,l,r,s,c,f,d,m,v,p,g,x){for(var R=c-1,N=c===0?f:[""],A=ig(N),_=0,j=0,Y=0;_<s;++_)for(var H=0,$=Si(n,R+1,R=ng(j=d[_])),F=n;H<A;++H)(F=ag(j>0?N[H]+" "+$:dt($,/&\f/g,N[H])))&&(v[Y++]=F);return Gs(n,l,r,c===0?Ys:m,v,p,g,x)}function Vx(n,l,r,s){return Gs(n,l,r,tg,xf(qx()),Si(n,2,-2),0,s)}function K0(n,l,r,s,c){return Gs(n,l,r,bf,Si(n,0,s),Si(n,s+1,-1),s,c)}function rg(n,l,r){switch(Bx(n,l)){case 5103:return Et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Et+n+n;case 4789:return ql+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Et+n+ql+n+_t+n+n;case 5936:switch(te(n,l+11)){case 114:return Et+n+_t+dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Et+n+_t+dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Et+n+_t+dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Et+n+_t+n+n;case 6165:return Et+n+_t+"flex-"+n+n;case 5187:return Et+n+dt(n,/(\w+).+(:[^]+)/,Et+"box-$1$2"+_t+"flex-$1$2")+n;case 5443:return Et+n+_t+"flex-item-"+dt(n,/flex-|-self/g,"")+(On(n,/flex-|baseline/)?"":_t+"grid-row-"+dt(n,/flex-|-self/g,""))+n;case 4675:return Et+n+_t+"flex-line-pack"+dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Et+n+_t+dt(n,"shrink","negative")+n;case 5292:return Et+n+_t+dt(n,"basis","preferred-size")+n;case 6060:return Et+"box-"+dt(n,"-grow","")+Et+n+_t+dt(n,"grow","positive")+n;case 4554:return Et+dt(n,/([^-])(transform)/g,"$1"+Et+"$2")+n;case 6187:return dt(dt(dt(n,/(zoom-|grab)/,Et+"$1"),/(image-set)/,Et+"$1"),n,"")+n;case 5495:case 3959:return dt(n,/(image-set\([^]*)/,Et+"$1$`$1");case 4968:return dt(dt(n,/(.+:)(flex-)?(.*)/,Et+"box-pack:$3"+_t+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Et+n+n;case 4200:if(!On(n,/flex-|baseline/))return _t+"grid-column-align"+Si(n,l)+n;break;case 2592:case 3360:return _t+dt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(s,c){return l=c,On(s.props,/grid-\w+-end/)})?~xs(n+(r=r[l].value),"span",0)?n:_t+dt(n,"-start","")+n+_t+"grid-row-span:"+(~xs(r,"span",0)?On(r,/\d+/):+On(r,/\d+/)-+On(n,/\d+/))+";":_t+dt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(s){return On(s.props,/grid-\w+-start/)})?n:_t+dt(dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return dt(n,/(.+)-inline(.+)/,Et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(n)-1-l>6)switch(te(n,l+1)){case 109:if(te(n,l+4)!==45)break;case 102:return dt(n,/(.+:)(.+)-([^]+)/,"$1"+Et+"$2-$3$1"+ql+(te(n,l+3)==108?"$3":"$2-$3"))+n;case 115:return~xs(n,"stretch",0)?rg(dt(n,"stretch","fill-available"),l,r)+n:n}break;case 5152:case 5920:return dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,f,d,m,v,p){return _t+c+":"+f+p+(d?_t+c+"-span:"+(m?v:+v-+f)+p:"")+n});case 4949:if(te(n,l+6)===121)return dt(n,":",":"+Et)+n;break;case 6444:switch(te(n,te(n,14)===45?18:11)){case 120:return dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Et+(te(n,14)===45?"inline-":"")+"box$3$1"+Et+"$2$3$1"+_t+"$2box$3")+n;case 100:return dt(n,":",":"+_t)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return dt(n,"scroll-","scroll-snap-")+n}return n}function js(n,l){for(var r="",s=0;s<n.length;s++)r+=l(n[s],s,n,l)||"";return r}function Zx(n,l,r,s){switch(n.type){case Nx:if(n.children.length)break;case Ux:case bf:return n.return=n.return||n.value;case tg:return"";case eg:return n.return=n.value+"{"+js(n.children,s)+"}";case Ys:if(!ln(n.value=n.props.join(",")))return""}return ln(r=js(n.children,s))?n.return=n.value+"{"+r+"}":""}function Jx(n){var l=ig(n);return function(r,s,c,f){for(var d="",m=0;m<l;m++)d+=n[m](r,s,c,f)||"";return d}}function Fx(n){return function(l){l.root||(l=l.return)&&n(l)}}function Px(n,l,r,s){if(n.length>-1&&!n.return)switch(n.type){case bf:n.return=rg(n.value,n.length,r);return;case eg:return js([In(n,{value:dt(n.value,"@","@"+Et)})],s);case Ys:if(n.length)return Lx(r=n.props,function(c){switch(On(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yi(In(n,{props:[dt(c,/:(read-\w+)/,":"+ql+"$1")]})),yi(In(n,{props:[c]})),Yc(n,{props:$0(r,s)});break;case"::placeholder":yi(In(n,{props:[dt(c,/:(plac\w+)/,":"+Et+"input-$1")]})),yi(In(n,{props:[dt(c,/:(plac\w+)/,":"+ql+"$1")]})),yi(In(n,{props:[dt(c,/:(plac\w+)/,_t+"input-$1")]})),yi(In(n,{props:[c]})),Yc(n,{props:$0(r,s)});break}return""})}}var Wx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Ei=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",sg="active",ug="data-styled-version",Xs="6.1.19",Sf=`/*!sc*/
`,Ds=typeof window<"u"&&typeof document<"u",Ix=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),tS={},Ks=Object.freeze([]),Ri=Object.freeze({});function og(n,l,r){return r===void 0&&(r=Ri),n.theme!==r.theme&&n.theme||l||r.theme}var cg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nS=/(^-|-$)/g;function V0(n){return n.replace(eS,"-").replace(nS,"")}var aS=/(a)(d)/gi,ds=52,Z0=function(n){return String.fromCharCode(n+(n>25?39:97))};function $c(n){var l,r="";for(l=Math.abs(n);l>ds;l=l/ds|0)r=Z0(l%ds)+r;return(Z0(l%ds)+r).replace(aS,"$1-$2")}var Rc,fg=5381,bi=function(n,l){for(var r=l.length;r;)n=33*n^l.charCodeAt(--r);return n},dg=function(n){return bi(fg,n)};function wf(n){return $c(dg(n)>>>0)}function iS(n){return n.displayName||n.name||"Component"}function Tc(n){return typeof n=="string"&&!0}var hg=typeof Symbol=="function"&&Symbol.for,pg=hg?Symbol.for("react.memo"):60115,lS=hg?Symbol.for("react.forward_ref"):60112,rS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uS=((Rc={})[lS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rc[pg]=mg,Rc);function J0(n){return("type"in(l=n)&&l.type.$$typeof)===pg?mg:"$$typeof"in n?uS[n.$$typeof]:rS;var l}var oS=Object.defineProperty,cS=Object.getOwnPropertyNames,F0=Object.getOwnPropertySymbols,fS=Object.getOwnPropertyDescriptor,dS=Object.getPrototypeOf,P0=Object.prototype;function gg(n,l,r){if(typeof l!="string"){if(P0){var s=dS(l);s&&s!==P0&&gg(n,s,r)}var c=cS(l);F0&&(c=c.concat(F0(l)));for(var f=J0(n),d=J0(l),m=0;m<c.length;++m){var v=c[m];if(!(v in sS||r&&r[v]||d&&v in d||f&&v in f)){var p=fS(l,v);try{oS(n,v,p)}catch{}}}}return n}function Ti(n){return typeof n=="function"}function Ef(n){return typeof n=="object"&&"styledComponentId"in n}function wa(n,l){return n&&l?"".concat(n," ").concat(l):n||l||""}function zs(n,l){if(n.length===0)return"";for(var r=n[0],s=1;s<n.length;s++)r+=n[s];return r}function kl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Xc(n,l,r){if(r===void 0&&(r=!1),!r&&!kl(n)&&!Array.isArray(n))return l;if(Array.isArray(l))for(var s=0;s<l.length;s++)n[s]=Xc(n[s],l[s]);else if(kl(l))for(var s in l)n[s]=Xc(n[s],l[s]);return n}function Rf(n,l){Object.defineProperty(n,"toString",{value:l})}function Xl(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var hS=(function(){function n(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return n.prototype.indexOfGroup=function(l){for(var r=0,s=0;s<l;s++)r+=this.groupSizes[s];return r},n.prototype.insertRules=function(l,r){if(l>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,f=c;l>=f;)if((f<<=1)<0)throw Xl(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var d=c;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(l+1),v=(d=0,r.length);d<v;d++)this.tag.insertRule(m,r[d])&&(this.groupSizes[l]++,m++)},n.prototype.clearGroup=function(l){if(l<this.length){var r=this.groupSizes[l],s=this.indexOfGroup(l),c=s+r;this.groupSizes[l]=0;for(var f=s;f<c;f++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(l){var r="";if(l>=this.length||this.groupSizes[l]===0)return r;for(var s=this.groupSizes[l],c=this.indexOfGroup(l),f=c+s,d=c;d<f;d++)r+="".concat(this.tag.getRule(d)).concat(Sf);return r},n})(),Es=new Map,Ms=new Map,Rs=1,hs=function(n){if(Es.has(n))return Es.get(n);for(;Ms.has(Rs);)Rs++;var l=Rs++;return Es.set(n,l),Ms.set(l,n),l},pS=function(n,l){Rs=l+1,Es.set(n,l),Ms.set(l,n)},mS="style[".concat(Ei,"][").concat(ug,'="').concat(Xs,'"]'),gS=new RegExp("^".concat(Ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yS=function(n,l,r){for(var s,c=r.split(","),f=0,d=c.length;f<d;f++)(s=c[f])&&n.registerName(l,s)},vS=function(n,l){for(var r,s=((r=l.textContent)!==null&&r!==void 0?r:"").split(Sf),c=[],f=0,d=s.length;f<d;f++){var m=s[f].trim();if(m){var v=m.match(gS);if(v){var p=0|parseInt(v[1],10),g=v[2];p!==0&&(pS(g,p),yS(n,g,v[3]),n.getTag().insertRules(p,c)),c.length=0}else c.push(m)}}},W0=function(n){for(var l=document.querySelectorAll(mS),r=0,s=l.length;r<s;r++){var c=l[r];c&&c.getAttribute(Ei)!==sg&&(vS(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function bS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yg=function(n){var l=document.head,r=n||l,s=document.createElement("style"),c=(function(m){var v=Array.from(m.querySelectorAll("style[".concat(Ei,"]")));return v[v.length-1]})(r),f=c!==void 0?c.nextSibling:null;s.setAttribute(Ei,sg),s.setAttribute(ug,Xs);var d=bS();return d&&s.setAttribute("nonce",d),r.insertBefore(s,f),s},xS=(function(){function n(l){this.element=yg(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,c=0,f=s.length;c<f;c++){var d=s[c];if(d.ownerNode===r)return d}throw Xl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(l,r){try{return this.sheet.insertRule(r,l),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},n.prototype.getRule=function(l){var r=this.sheet.cssRules[l];return r&&r.cssText?r.cssText:""},n})(),SS=(function(){function n(l){this.element=yg(l),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(l,r){if(l<=this.length&&l>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[l]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},n.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},n})(),wS=(function(){function n(l){this.rules=[],this.length=0}return n.prototype.insertRule=function(l,r){return l<=this.length&&(this.rules.splice(l,0,r),this.length++,!0)},n.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},n.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},n})(),I0=Ds,ES={isServer:!Ds,useCSSOMInjection:!Ix},_s=(function(){function n(l,r,s){l===void 0&&(l=Ri),r===void 0&&(r={});var c=this;this.options=oe(oe({},ES),l),this.gs=r,this.names=new Map(s),this.server=!!l.isServer,!this.server&&Ds&&I0&&(I0=!1,W0(this)),Rf(this,function(){return(function(f){for(var d=f.getTag(),m=d.length,v="",p=function(x){var R=(function(Y){return Ms.get(Y)})(x);if(R===void 0)return"continue";var N=f.names.get(R),A=d.getGroup(x);if(N===void 0||!N.size||A.length===0)return"continue";var _="".concat(Ei,".g").concat(x,'[id="').concat(R,'"]'),j="";N!==void 0&&N.forEach(function(Y){Y.length>0&&(j+="".concat(Y,","))}),v+="".concat(A).concat(_,'{content:"').concat(j,'"}').concat(Sf)},g=0;g<m;g++)p(g);return v})(c)})}return n.registerId=function(l){return hs(l)},n.prototype.rehydrate=function(){!this.server&&Ds&&W0(this)},n.prototype.reconstructWithOptions=function(l,r){return r===void 0&&(r=!0),new n(oe(oe({},this.options),l),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(r){var s=r.useCSSOMInjection,c=r.target;return r.isServer?new wS(c):s?new xS(c):new SS(c)})(this.options),new hS(l)));var l},n.prototype.hasNameForId=function(l,r){return this.names.has(l)&&this.names.get(l).has(r)},n.prototype.registerName=function(l,r){if(hs(l),this.names.has(l))this.names.get(l).add(r);else{var s=new Set;s.add(r),this.names.set(l,s)}},n.prototype.insertRules=function(l,r,s){this.registerName(l,r),this.getTag().insertRules(hs(l),s)},n.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},n.prototype.clearRules=function(l){this.getTag().clearGroup(hs(l)),this.clearNames(l)},n.prototype.clearTag=function(){this.tag=void 0},n})(),RS=/&/g,TS=/^\s*\/\/.*$/gm;function vg(n,l){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(l," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(l," ")),r.props=r.props.map(function(s){return"".concat(l," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=vg(r.children,l)),r})}function OS(n){var l,r,s,c=Ri,f=c.options,d=f===void 0?Ri:f,m=c.plugins,v=m===void 0?Ks:m,p=function(R,N,A){return A.startsWith(r)&&A.endsWith(r)&&A.replaceAll(r,"").length>0?".".concat(l):R},g=v.slice();g.push(function(R){R.type===Ys&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(RS,r).replace(s,p))}),d.prefix&&g.push(Px),g.push(Zx);var x=function(R,N,A,_){N===void 0&&(N=""),A===void 0&&(A=""),_===void 0&&(_="&"),l=_,r=N,s=new RegExp("\\".concat(r,"\\b"),"g");var j=R.replace(TS,""),Y=Kx(A||N?"".concat(A," ").concat(N," { ").concat(j," }"):j);d.namespace&&(Y=vg(Y,d.namespace));var H=[];return js(Y,Jx(g.concat(Fx(function($){return H.push($)})))),H};return x.hash=v.length?v.reduce(function(R,N){return N.name||Xl(15),bi(R,N.name)},fg).toString():"",x}var AS=new _s,Kc=OS(),bg=rn.createContext({shouldForwardProp:void 0,styleSheet:AS,stylis:Kc});bg.Consumer;rn.createContext(void 0);function Vc(){return w.useContext(bg)}var xg=(function(){function n(l,r){var s=this;this.inject=function(c,f){f===void 0&&(f=Kc);var d=s.name+f.hash;c.hasNameForId(s.id,d)||c.insertRules(s.id,d,f(s.rules,d,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=r,Rf(this,function(){throw Xl(12,String(s.name))})}return n.prototype.getName=function(l){return l===void 0&&(l=Kc),this.name+l.hash},n})(),CS=function(n){return n>="A"&&n<="Z"};function tm(n){for(var l="",r=0;r<n.length;r++){var s=n[r];if(r===1&&s==="-"&&n[0]==="-")return n;CS(s)?l+="-"+s.toLowerCase():l+=s}return l.startsWith("ms-")?"-"+l:l}var Sg=function(n){return n==null||n===!1||n===""},wg=function(n){var l,r,s=[];for(var c in n){var f=n[c];n.hasOwnProperty(c)&&!Sg(f)&&(Array.isArray(f)&&f.isCss||Ti(f)?s.push("".concat(tm(c),":"),f,";"):kl(f)?s.push.apply(s,xi(xi(["".concat(c," {")],wg(f),!1),["}"],!1)):s.push("".concat(tm(c),": ").concat((l=c,(r=f)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||l in Wx||l.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function ta(n,l,r,s){if(Sg(n))return[];if(Ef(n))return[".".concat(n.styledComponentId)];if(Ti(n)){if(!Ti(f=n)||f.prototype&&f.prototype.isReactComponent||!l)return[n];var c=n(l);return ta(c,l,r,s)}var f;return n instanceof xg?r?(n.inject(r,s),[n.getName(s)]):[n]:kl(n)?wg(n):Array.isArray(n)?Array.prototype.concat.apply(Ks,n.map(function(d){return ta(d,l,r,s)})):[n.toString()]}function Eg(n){for(var l=0;l<n.length;l+=1){var r=n[l];if(Ti(r)&&!Ef(r))return!1}return!0}var jS=dg(Xs),DS=(function(){function n(l,r,s){this.rules=l,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Eg(l),this.componentId=r,this.baseHash=bi(jS,r),this.baseStyle=s,_s.registerId(r)}return n.prototype.generateAndInjectStyles=function(l,r,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))c=wa(c,this.staticRulesId);else{var f=zs(ta(this.rules,l,r,s)),d=$c(bi(this.baseHash,f)>>>0);if(!r.hasNameForId(this.componentId,d)){var m=s(f,".".concat(d),void 0,this.componentId);r.insertRules(this.componentId,d,m)}c=wa(c,d),this.staticRulesId=d}else{for(var v=bi(this.baseHash,s.hash),p="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")p+=x;else if(x){var R=zs(ta(x,l,r,s));v=bi(v,R+g),p+=R}}if(p){var N=$c(v>>>0);r.hasNameForId(this.componentId,N)||r.insertRules(this.componentId,N,s(p,".".concat(N),void 0,this.componentId)),c=wa(c,N)}}return c},n})(),Tf=rn.createContext(void 0);Tf.Consumer;var Oc={};function zS(n,l,r){var s=Ef(n),c=n,f=!Tc(n),d=l.attrs,m=d===void 0?Ks:d,v=l.componentId,p=v===void 0?(function(F,X){var W=typeof F!="string"?"sc":V0(F);Oc[W]=(Oc[W]||0)+1;var K="".concat(W,"-").concat(wf(Xs+W+Oc[W]));return X?"".concat(X,"-").concat(K):K})(l.displayName,l.parentComponentId):v,g=l.displayName,x=g===void 0?(function(F){return Tc(F)?"styled.".concat(F):"Styled(".concat(iS(F),")")})(n):g,R=l.displayName&&l.componentId?"".concat(V0(l.displayName),"-").concat(l.componentId):l.componentId||p,N=s&&c.attrs?c.attrs.concat(m).filter(Boolean):m,A=l.shouldForwardProp;if(s&&c.shouldForwardProp){var _=c.shouldForwardProp;if(l.shouldForwardProp){var j=l.shouldForwardProp;A=function(F,X){return _(F,X)&&j(F,X)}}else A=_}var Y=new DS(r,R,s?c.componentStyle:void 0);function H(F,X){return(function(W,K,ot){var I=W.attrs,st=W.componentStyle,Ot=W.defaultProps,Ht=W.foldedComponentIds,sn=W.styledComponentId,un=W.target,Zt=rn.useContext(Tf),L=Vc(),Z=W.shouldForwardProp||L.shouldForwardProp,at=og(K,Zt,Ot)||Ri,mt=(function(gt,lt,Jt){for(var wt,ie=oe(oe({},lt),{className:void 0,theme:Jt}),aa=0;aa<gt.length;aa+=1){var on=Ti(wt=gt[aa])?wt(ie):wt;for(var De in on)ie[De]=De==="className"?wa(ie[De],on[De]):De==="style"?oe(oe({},ie[De]),on[De]):on[De]}return lt.className&&(ie.className=wa(ie.className,lt.className)),ie})(I,K,at),E=mt.as||un,G={};for(var V in mt)mt[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&mt.theme===at||(V==="forwardedAs"?G.as=mt.forwardedAs:Z&&!Z(V,E)||(G[V]=mt[V]));var J=(function(gt,lt){var Jt=Vc(),wt=gt.generateAndInjectStyles(lt,Jt.styleSheet,Jt.stylis);return wt})(st,mt),nt=wa(Ht,sn);return J&&(nt+=" "+J),mt.className&&(nt+=" "+mt.className),G[Tc(E)&&!cg.has(E)?"class":"className"]=nt,ot&&(G.ref=ot),w.createElement(E,G)})($,F,X)}H.displayName=x;var $=rn.forwardRef(H);return $.attrs=N,$.componentStyle=Y,$.displayName=x,$.shouldForwardProp=A,$.foldedComponentIds=s?wa(c.foldedComponentIds,c.styledComponentId):"",$.styledComponentId=R,$.target=s?c.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=s?(function(X){for(var W=[],K=1;K<arguments.length;K++)W[K-1]=arguments[K];for(var ot=0,I=W;ot<I.length;ot++)Xc(X,I[ot],!0);return X})({},c.defaultProps,F):F}}),Rf($,function(){return".".concat($.styledComponentId)}),f&&gg($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function em(n,l){for(var r=[n[0]],s=0,c=l.length;s<c;s+=1)r.push(l[s],n[s+1]);return r}var nm=function(n){return Object.assign(n,{isCss:!0})};function Of(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];if(Ti(n)||kl(n))return nm(ta(em(Ks,xi([n],l,!0))));var s=n;return l.length===0&&s.length===1&&typeof s[0]=="string"?ta(s):nm(ta(em(s,l)))}function Zc(n,l,r){if(r===void 0&&(r=Ri),!l)throw Xl(1,l);var s=function(c){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(l,r,Of.apply(void 0,xi([c],f,!1)))};return s.attrs=function(c){return Zc(n,l,oe(oe({},r),{attrs:Array.prototype.concat(r.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Zc(n,l,oe(oe({},r),c))},s}var Rg=function(n){return Zc(zS,n)},O=Rg;cg.forEach(function(n){O[n]=Rg(n)});var MS=(function(){function n(l,r){this.rules=l,this.componentId=r,this.isStatic=Eg(l),_s.registerId(this.componentId+1)}return n.prototype.createStyles=function(l,r,s,c){var f=c(zs(ta(this.rules,r,s,c)),""),d=this.componentId+l;s.insertRules(d,d,f)},n.prototype.removeStyles=function(l,r){r.clearRules(this.componentId+l)},n.prototype.renderStyles=function(l,r,s,c){l>2&&_s.registerId(this.componentId+l),this.removeStyles(l,s),this.createStyles(l,r,s,c)},n})();function _S(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];var s=Of.apply(void 0,xi([n],l,!1)),c="sc-global-".concat(wf(JSON.stringify(s))),f=new MS(s,c),d=function(v){var p=Vc(),g=rn.useContext(Tf),x=rn.useRef(p.styleSheet.allocateGSInstance(c)).current;return p.styleSheet.server&&m(x,v,p.styleSheet,g,p.stylis),rn.useLayoutEffect(function(){if(!p.styleSheet.server)return m(x,v,p.styleSheet,g,p.stylis),function(){return f.removeStyles(x,p.styleSheet)}},[x,v,p.styleSheet,g,p.stylis]),null};function m(v,p,g,x,R){if(f.isStatic)f.renderStyles(v,tS,g,R);else{var N=oe(oe({},p),{theme:og(p,x,d.defaultProps)});f.renderStyles(v,N,g,R)}}return rn.memo(d)}function zi(n){for(var l=[],r=1;r<arguments.length;r++)l[r-1]=arguments[r];var s=zs(Of.apply(void 0,xi([n],l,!1))),c=wf(s);return new xg(c,s)}const et={primary:"rgba(28, 118, 207, 1)",secondary:"#fafafa;",accent:"#282828",mainBlue:"rgb(34, 132, 229)",mainDeepBlue:"rgba(28, 118, 207, 1);",mainLightBlue:"#0084ffff"},US=O.nav`
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

`,NS=O.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  gap: 12px;
`,BS=O.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  gap: 48px;
`,ps=O.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,LS=O.p`
  font-size: 28px;
  font-weight: 900;
  color: ${et.primary};
  margin: 0;
  cursor: pointer;
`,ms=O.img`
  width: 24px;
  height: 24px;
`,qS=O.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 16px; /* 아이콘과 검색창 사이 간격 */
`,HS=O.input`
  width: ${n=>n.open?"600px":"0"};
  opacity: ${n=>n.open?1:0};
  padding: ${n=>n.open?"0 12px":"0"};
  height: 36px;
  border-radius: 20px;
  border: ${n=>(n.open,"none")};
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
`,Mi=O.div`
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
`,kS=O.div`
    width: 100%;
    padding: 20px;
`;O.div`
    display: flex;
    flex-direction: row;
`;O.div`
    height: 100px;
    width: 10px;
`;const Oa=O.div.withConfig({shouldForwardProp:n=>!["h","w"].includes(n)})`
  height: ${({h:n})=>n?`${n}px`:"0"};
  width: ${({w:n})=>n?`${n}px`:"0"};
`,Vs=O.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
`,YS=()=>{const n=je(),[l,r]=w.useState(!1),[s,c]=w.useState(""),f=()=>{s&&(n(`/static/SearchPage/${s}`),c(""),r(!1))},d=m=>{m.key==="Enter"&&f()};return y.jsx(Mi,{children:y.jsxs(US,{children:[y.jsx(NS,{children:y.jsx(LS,{onClick:()=>n("/static/"),children:"L.B"})}),y.jsxs(BS,{children:[y.jsxs(qS,{children:[y.jsx(HS,{type:"text",value:s,onChange:m=>c(m.target.value),placeholder:"검색어 입력 후 Enter",onKeyDown:d,open:l}),y.jsx(ps,{onClick:()=>r(m=>!m),children:y.jsx(ms,{src:Dx,alt:"search"})})]}),y.jsx(ps,{onClick:()=>n("/static/onboarding"),children:y.jsx(ms,{src:_x,alt:"heart"})}),y.jsx(ps,{onClick:()=>n("/static/My"),children:y.jsx(ms,{src:zx,alt:"my"})}),y.jsx(ps,{onClick:()=>n("/static/"),children:y.jsx(ms,{src:Mx,alt:"menu"})})]})]})})},Tg=O.div`
  position: relative;
  width: 100%;
  padding: 10px;
`,Og=O.div`
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
`,Us=O.button.withConfig({shouldForwardProp:n=>!["left"].includes(n)})`
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
  color: ${et.mainBlue};
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
`,Ag=O.div`
  padding : 0px 5px;

`,Cg=O.button`
  background: white;
  color: ${et.mainBlue};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 18px;
  border: 2.5px solid ${et.mainBlue};
  border-radius: 25px 30% 24px 52%; 
  cursor: pointer;
  transition: all 0.25s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${et.mainBlue};
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`,Oi=O.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;    /* 가운데 정렬 */
  gap: 16px;              /* 버튼 사이 간격 */
  justify-content: center;/* 화면 세로 가운데 */
  padding: 30px;
`,jg=O.div`
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
`,Dg=O.div`
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
`,QS=O.div`
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

  &:hover {
    flex: 0 0 300px;          /* hover 시 너비 증가 */
    height: 390px;            /* hover 시 높이 증가 */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }

  &:hover ${Dg} {
    transform: translateY(0);
    opacity: 1;
  }
`,GS=O.div`
  width: 100%;
  position: relative;
  padding-top: 150%; /* 1:1 비율 */
  overflow: hidden;
`,$S=O.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease;

`,XS=O.h3`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
`,KS=O.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`,VS=O.span`
  font-size: 12px;
  color: #fff;
`,ZS=O.span`
  font-size: 12px;
  color: #ddd;
`,JS=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,FS=O.span`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;function zg({product:n}){const l=je(),r=()=>{l(`/static/DetailPage/${n.movieId}`,{state:{product:n}})};return y.jsxs(QS,{onClick:r,children:[y.jsx(GS,{children:y.jsx($S,{src:n.imageLink??"",alt:n.blurayTitle??""})}),y.jsxs(Dg,{children:[y.jsx(XS,{children:n.blurayTitle}),y.jsxs(JS,{children:[y.jsxs(KS,{children:[n.price?.toLocaleString(),"원"]}),y.jsxs(VS,{children:[" 해상도 : ",n.quality]})]}),n.isLimitedEdition&&y.jsx(FS,{children:"한정판!"}),y.jsx(ZS,{children:n.siteName})]})]})}var _i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},PS={setTimeout:(n,l)=>setTimeout(n,l),clearTimeout:n=>clearTimeout(n),setInterval:(n,l)=>setInterval(n,l),clearInterval:n=>clearInterval(n)},WS=class{#t=PS;#e=!1;setTimeoutProvider(n){this.#t=n}setTimeout(n,l){return this.#t.setTimeout(n,l)}clearTimeout(n){this.#t.clearTimeout(n)}setInterval(n,l){return this.#t.setInterval(n,l)}clearInterval(n){this.#t.clearInterval(n)}},Ea=new WS;function IS(n){setTimeout(n,0)}var Ca=typeof window>"u"||"Deno"in globalThis;function fe(){}function t2(n,l){return typeof n=="function"?n(l):n}function Jc(n){return typeof n=="number"&&n>=0&&n!==1/0}function Mg(n,l){return Math.max(n+(l||0)-Date.now(),0)}function ea(n,l){return typeof n=="function"?n(l):n}function ke(n,l){return typeof n=="function"?n(l):n}function am(n,l){const{type:r="all",exact:s,fetchStatus:c,predicate:f,queryKey:d,stale:m}=n;if(d){if(s){if(l.queryHash!==Af(d,l.options))return!1}else if(!Yl(l.queryKey,d))return!1}if(r!=="all"){const v=l.isActive();if(r==="active"&&!v||r==="inactive"&&v)return!1}return!(typeof m=="boolean"&&l.isStale()!==m||c&&c!==l.state.fetchStatus||f&&!f(l))}function im(n,l){const{exact:r,status:s,predicate:c,mutationKey:f}=n;if(f){if(!l.options.mutationKey)return!1;if(r){if(ja(l.options.mutationKey)!==ja(f))return!1}else if(!Yl(l.options.mutationKey,f))return!1}return!(s&&l.state.status!==s||c&&!c(l))}function Af(n,l){return(l?.queryKeyHashFn||ja)(n)}function ja(n){return JSON.stringify(n,(l,r)=>Fc(r)?Object.keys(r).sort().reduce((s,c)=>(s[c]=r[c],s),{}):r)}function Yl(n,l){return n===l?!0:typeof n!=typeof l?!1:n&&l&&typeof n=="object"&&typeof l=="object"?Object.keys(l).every(r=>Yl(n[r],l[r])):!1}var e2=Object.prototype.hasOwnProperty;function _g(n,l){if(n===l)return n;const r=lm(n)&&lm(l);if(!r&&!(Fc(n)&&Fc(l)))return l;const c=(r?n:Object.keys(n)).length,f=r?l:Object.keys(l),d=f.length,m=r?new Array(d):{};let v=0;for(let p=0;p<d;p++){const g=r?p:f[p],x=n[g],R=l[g];if(x===R){m[g]=x,(r?p<c:e2.call(n,g))&&v++;continue}if(x===null||R===null||typeof x!="object"||typeof R!="object"){m[g]=R;continue}const N=_g(x,R);m[g]=N,N===x&&v++}return c===d&&v===c?n:m}function Ns(n,l){if(!l||Object.keys(n).length!==Object.keys(l).length)return!1;for(const r in n)if(n[r]!==l[r])return!1;return!0}function lm(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Fc(n){if(!rm(n))return!1;const l=n.constructor;if(l===void 0)return!0;const r=l.prototype;return!(!rm(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function rm(n){return Object.prototype.toString.call(n)==="[object Object]"}function n2(n){return new Promise(l=>{Ea.setTimeout(l,n)})}function Pc(n,l,r){return typeof r.structuralSharing=="function"?r.structuralSharing(n,l):r.structuralSharing!==!1?_g(n,l):l}function a2(n,l,r=0){const s=[...n,l];return r&&s.length>r?s.slice(1):s}function i2(n,l,r=0){const s=[l,...n];return r&&s.length>r?s.slice(0,-1):s}var Cf=Symbol();function Ug(n,l){return!n.queryFn&&l?.initialPromise?()=>l.initialPromise:!n.queryFn||n.queryFn===Cf?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}function Ng(n,l){return typeof n=="function"?n(...l):!!n}var l2=class extends _i{#t;#e;#n;constructor(){super(),this.#n=n=>{if(!Ca&&window.addEventListener){const l=()=>n();return window.addEventListener("visibilitychange",l,!1),()=>{window.removeEventListener("visibilitychange",l)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(n){this.#n=n,this.#e?.(),this.#e=n(l=>{typeof l=="boolean"?this.setFocused(l):this.onFocus()})}setFocused(n){this.#t!==n&&(this.#t=n,this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(l=>{l(n)})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}},jf=new l2;function Wc(){let n,l;const r=new Promise((c,f)=>{n=c,l=f});r.status="pending",r.catch(()=>{});function s(c){Object.assign(r,c),delete r.resolve,delete r.reject}return r.resolve=c=>{s({status:"fulfilled",value:c}),n(c)},r.reject=c=>{s({status:"rejected",reason:c}),l(c)},r}var r2=IS;function s2(){let n=[],l=0,r=m=>{m()},s=m=>{m()},c=r2;const f=m=>{l?n.push(m):c(()=>{r(m)})},d=()=>{const m=n;n=[],m.length&&c(()=>{s(()=>{m.forEach(v=>{r(v)})})})};return{batch:m=>{let v;l++;try{v=m()}finally{l--,l||d()}return v},batchCalls:m=>(...v)=>{f(()=>{m(...v)})},schedule:f,setNotifyFunction:m=>{r=m},setBatchNotifyFunction:m=>{s=m},setScheduler:m=>{c=m}}}var Vt=s2(),u2=class extends _i{#t=!0;#e;#n;constructor(){super(),this.#n=n=>{if(!Ca&&window.addEventListener){const l=()=>n(!0),r=()=>n(!1);return window.addEventListener("online",l,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(n){this.#n=n,this.#e?.(),this.#e=n(this.setOnline.bind(this))}setOnline(n){this.#t!==n&&(this.#t=n,this.listeners.forEach(r=>{r(n)}))}isOnline(){return this.#t}},Bs=new u2;function o2(n){return Math.min(1e3*2**n,3e4)}function Bg(n){return(n??"online")==="online"?Bs.isOnline():!0}var Ic=class extends Error{constructor(n){super("CancelledError"),this.revert=n?.revert,this.silent=n?.silent}};function Lg(n){let l=!1,r=0,s;const c=Wc(),f=()=>c.status!=="pending",d=_=>{if(!f()){const j=new Ic(_);R(j),n.onCancel?.(j)}},m=()=>{l=!0},v=()=>{l=!1},p=()=>jf.isFocused()&&(n.networkMode==="always"||Bs.isOnline())&&n.canRun(),g=()=>Bg(n.networkMode)&&n.canRun(),x=_=>{f()||(s?.(),c.resolve(_))},R=_=>{f()||(s?.(),c.reject(_))},N=()=>new Promise(_=>{s=j=>{(f()||p())&&_(j)},n.onPause?.()}).then(()=>{s=void 0,f()||n.onContinue?.()}),A=()=>{if(f())return;let _;const j=r===0?n.initialPromise:void 0;try{_=j??n.fn()}catch(Y){_=Promise.reject(Y)}Promise.resolve(_).then(x).catch(Y=>{if(f())return;const H=n.retry??(Ca?0:3),$=n.retryDelay??o2,F=typeof $=="function"?$(r,Y):$,X=H===!0||typeof H=="number"&&r<H||typeof H=="function"&&H(r,Y);if(l||!X){R(Y);return}r++,n.onFail?.(r,Y),n2(F).then(()=>p()?void 0:N()).then(()=>{l?R(Y):A()})})};return{promise:c,status:()=>c.status,cancel:d,continue:()=>(s?.(),c),cancelRetry:m,continueRetry:v,canStart:g,start:()=>(g()?A():N().then(A),c)}}var qg=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Jc(this.gcTime)&&(this.#t=Ea.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Ca?1/0:300*1e3))}clearGcTimeout(){this.#t&&(Ea.clearTimeout(this.#t),this.#t=void 0)}},c2=class extends qg{#t;#e;#n;#a;#i;#r;#s;constructor(n){super(),this.#s=!1,this.#r=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.#a=n.client,this.#n=this.#a.getQueryCache(),this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.#t=sm(this.options),this.state=n.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(n){if(this.options={...this.#r,...n},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const l=sm(this.options);l.data!==void 0&&(this.setData(l.data,{updatedAt:l.dataUpdatedAt,manual:!0}),this.#t=l)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(n,l){const r=Pc(this.state.data,n,this.options);return this.#l({data:r,type:"success",dataUpdatedAt:l?.updatedAt,manual:l?.manual}),r}setState(n,l){this.#l({type:"setState",state:n,setStateOptions:l})}cancel(n){const l=this.#i?.promise;return this.#i?.cancel(n),l?l.then(fe).catch(fe):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(n=>ke(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Cf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>ea(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!Mg(this.state.dataUpdatedAt,n)}onFocus(){this.observers.find(l=>l.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(l=>l.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(l=>l!==n),this.observers.length||(this.#i&&(this.#s?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}async fetch(n,l){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&l?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(n&&this.setOptions(n),!this.options.queryFn){const m=this.observers.find(v=>v.options.queryFn);m&&this.setOptions(m.options)}const r=new AbortController,s=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(this.#s=!0,r.signal)})},c=()=>{const m=Ug(this.options,l),p=(()=>{const g={client:this.#a,queryKey:this.queryKey,meta:this.meta};return s(g),g})();return this.#s=!1,this.options.persister?this.options.persister(m,p,this):m(p)},d=(()=>{const m={fetchOptions:l,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:c};return s(m),m})();this.options.behavior?.onFetch(d,this),this.#e=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==d.fetchOptions?.meta)&&this.#l({type:"fetch",meta:d.fetchOptions?.meta}),this.#i=Lg({initialPromise:l?.initialPromise,fn:d.fetchFn,onCancel:m=>{m instanceof Ic&&m.revert&&this.setState({...this.#e,fetchStatus:"idle"}),r.abort()},onFail:(m,v)=>{this.#l({type:"failed",failureCount:m,error:v})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0});try{const m=await this.#i.start();if(m===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(m),this.#n.config.onSuccess?.(m,this),this.#n.config.onSettled?.(m,this.state.error,this),m}catch(m){if(m instanceof Ic){if(m.silent)return this.#i.promise;if(m.revert){if(this.state.data===void 0)throw m;return this.state.data}}throw this.#l({type:"error",error:m}),this.#n.config.onError?.(m,this),this.#n.config.onSettled?.(this.state.data,m,this),m}finally{this.scheduleGc()}}#l(n){const l=r=>{switch(n.type){case"failed":return{...r,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Hg(r.data,this.options),fetchMeta:n.meta??null};case"success":const s={...r,data:n.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#e=n.manual?s:void 0,s;case"error":const c=n.error;return{...r,error:c,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...n.state}}};this.state=l(this.state),Vt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:n})})}};function Hg(n,l){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Bg(l.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function sm(n){const l=typeof n.initialData=="function"?n.initialData():n.initialData,r=l!==void 0,s=r?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:l,dataUpdateCount:0,dataUpdatedAt:r?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var kg=class extends _i{constructor(n,l){super(),this.options=l,this.#t=n,this.#l=null,this.#s=Wc(),this.bindMethods(),this.setOptions(l)}#t;#e=void 0;#n=void 0;#a=void 0;#i;#r;#s;#l;#m;#d;#h;#o;#c;#u;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),um(this.#e,this.options)?this.#f():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return tf(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return tf(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#x(),this.#S(),this.#e.removeObserver(this)}setOptions(n){const l=this.options,r=this.#e;if(this.options=this.#t.defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof ke(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#e.setOptions(this.options),l._defaulted&&!Ns(this.options,l)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const s=this.hasListeners();s&&om(this.#e,r,this.options,l)&&this.#f(),this.updateResult(),s&&(this.#e!==r||ke(this.options.enabled,this.#e)!==ke(l.enabled,this.#e)||ea(this.options.staleTime,this.#e)!==ea(l.staleTime,this.#e))&&this.#g();const c=this.#y();s&&(this.#e!==r||ke(this.options.enabled,this.#e)!==ke(l.enabled,this.#e)||c!==this.#u)&&this.#v(c)}getOptimisticResult(n){const l=this.#t.getQueryCache().build(this.#t,n),r=this.createResult(l,n);return d2(this,r)&&(this.#a=r,this.#r=this.options,this.#i=this.#e.state),r}getCurrentResult(){return this.#a}trackResult(n,l){return new Proxy(n,{get:(r,s)=>(this.trackProp(s),l?.(s),s==="promise"&&!this.options.experimental_prefetchInRender&&this.#s.status==="pending"&&this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),Reflect.get(r,s))})}trackProp(n){this.#p.add(n)}getCurrentQuery(){return this.#e}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const l=this.#t.defaultQueryOptions(n),r=this.#t.getQueryCache().build(this.#t,l);return r.fetch().then(()=>this.createResult(r,l))}fetch(n){return this.#f({...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#f(n){this.#w();let l=this.#e.fetch(this.options,n);return n?.throwOnError||(l=l.catch(fe)),l}#g(){this.#x();const n=ea(this.options.staleTime,this.#e);if(Ca||this.#a.isStale||!Jc(n))return;const r=Mg(this.#a.dataUpdatedAt,n)+1;this.#o=Ea.setTimeout(()=>{this.#a.isStale||this.updateResult()},r)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(n){this.#S(),this.#u=n,!(Ca||ke(this.options.enabled,this.#e)===!1||!Jc(this.#u)||this.#u===0)&&(this.#c=Ea.setInterval(()=>{(this.options.refetchIntervalInBackground||jf.isFocused())&&this.#f()},this.#u))}#b(){this.#g(),this.#v(this.#y())}#x(){this.#o&&(Ea.clearTimeout(this.#o),this.#o=void 0)}#S(){this.#c&&(Ea.clearInterval(this.#c),this.#c=void 0)}createResult(n,l){const r=this.#e,s=this.options,c=this.#a,f=this.#i,d=this.#r,v=n!==r?n.state:this.#n,{state:p}=n;let g={...p},x=!1,R;if(l._optimisticResults){const ot=this.hasListeners(),I=!ot&&um(n,l),st=ot&&om(n,r,l,s);(I||st)&&(g={...g,...Hg(p.data,n.options)}),l._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:N,errorUpdatedAt:A,status:_}=g;R=g.data;let j=!1;if(l.placeholderData!==void 0&&R===void 0&&_==="pending"){let ot;c?.isPlaceholderData&&l.placeholderData===d?.placeholderData?(ot=c.data,j=!0):ot=typeof l.placeholderData=="function"?l.placeholderData(this.#h?.state.data,this.#h):l.placeholderData,ot!==void 0&&(_="success",R=Pc(c?.data,ot,l),x=!0)}if(l.select&&R!==void 0&&!j)if(c&&R===f?.data&&l.select===this.#m)R=this.#d;else try{this.#m=l.select,R=l.select(R),R=Pc(c?.data,R,l),this.#d=R,this.#l=null}catch(ot){this.#l=ot}this.#l&&(N=this.#l,R=this.#d,A=Date.now(),_="error");const Y=g.fetchStatus==="fetching",H=_==="pending",$=_==="error",F=H&&Y,X=R!==void 0,K={status:_,fetchStatus:g.fetchStatus,isPending:H,isSuccess:_==="success",isError:$,isInitialLoading:F,isLoading:F,data:R,dataUpdatedAt:g.dataUpdatedAt,error:N,errorUpdatedAt:A,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>v.dataUpdateCount||g.errorUpdateCount>v.errorUpdateCount,isFetching:Y,isRefetching:Y&&!H,isLoadingError:$&&!X,isPaused:g.fetchStatus==="paused",isPlaceholderData:x,isRefetchError:$&&X,isStale:Df(n,l),refetch:this.refetch,promise:this.#s,isEnabled:ke(l.enabled,n)!==!1};if(this.options.experimental_prefetchInRender){const ot=Ot=>{K.status==="error"?Ot.reject(K.error):K.data!==void 0&&Ot.resolve(K.data)},I=()=>{const Ot=this.#s=K.promise=Wc();ot(Ot)},st=this.#s;switch(st.status){case"pending":n.queryHash===r.queryHash&&ot(st);break;case"fulfilled":(K.status==="error"||K.data!==st.value)&&I();break;case"rejected":(K.status!=="error"||K.error!==st.reason)&&I();break}}return K}updateResult(){const n=this.#a,l=this.createResult(this.#e,this.options);if(this.#i=this.#e.state,this.#r=this.options,this.#i.data!==void 0&&(this.#h=this.#e),Ns(l,n))return;this.#a=l;const r=()=>{if(!n)return!0;const{notifyOnChangeProps:s}=this.options,c=typeof s=="function"?s():s;if(c==="all"||!c&&!this.#p.size)return!0;const f=new Set(c??this.#p);return this.options.throwOnError&&f.add("error"),Object.keys(this.#a).some(d=>{const m=d;return this.#a[m]!==n[m]&&f.has(m)})};this.#E({listeners:r()})}#w(){const n=this.#t.getQueryCache().build(this.#t,this.options);if(n===this.#e)return;const l=this.#e;this.#e=n,this.#n=n.state,this.hasListeners()&&(l?.removeObserver(this),n.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#E(n){Vt.batch(()=>{n.listeners&&this.listeners.forEach(l=>{l(this.#a)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function f2(n,l){return ke(l.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&l.retryOnMount===!1)}function um(n,l){return f2(n,l)||n.state.data!==void 0&&tf(n,l,l.refetchOnMount)}function tf(n,l,r){if(ke(l.enabled,n)!==!1&&ea(l.staleTime,n)!=="static"){const s=typeof r=="function"?r(n):r;return s==="always"||s!==!1&&Df(n,l)}return!1}function om(n,l,r,s){return(n!==l||ke(s.enabled,n)===!1)&&(!r.suspense||n.state.status!=="error")&&Df(n,r)}function Df(n,l){return ke(l.enabled,n)!==!1&&n.isStaleByTime(ea(l.staleTime,n))}function d2(n,l){return!Ns(n.getCurrentResult(),l)}function cm(n){return{onFetch:(l,r)=>{const s=l.options,c=l.fetchOptions?.meta?.fetchMore?.direction,f=l.state.data?.pages||[],d=l.state.data?.pageParams||[];let m={pages:[],pageParams:[]},v=0;const p=async()=>{let g=!1;const x=A=>{Object.defineProperty(A,"signal",{enumerable:!0,get:()=>(l.signal.aborted?g=!0:l.signal.addEventListener("abort",()=>{g=!0}),l.signal)})},R=Ug(l.options,l.fetchOptions),N=async(A,_,j)=>{if(g)return Promise.reject();if(_==null&&A.pages.length)return Promise.resolve(A);const H=(()=>{const W={client:l.client,queryKey:l.queryKey,pageParam:_,direction:j?"backward":"forward",meta:l.options.meta};return x(W),W})(),$=await R(H),{maxPages:F}=l.options,X=j?i2:a2;return{pages:X(A.pages,$,F),pageParams:X(A.pageParams,_,F)}};if(c&&f.length){const A=c==="backward",_=A?h2:fm,j={pages:f,pageParams:d},Y=_(s,j);m=await N(j,Y,A)}else{const A=n??f.length;do{const _=v===0?d[0]??s.initialPageParam:fm(s,m);if(v>0&&_==null)break;m=await N(m,_),v++}while(v<A)}return m};l.options.persister?l.fetchFn=()=>l.options.persister?.(p,{client:l.client,queryKey:l.queryKey,meta:l.options.meta,signal:l.signal},r):l.fetchFn=p}}}function fm(n,{pages:l,pageParams:r}){const s=l.length-1;return l.length>0?n.getNextPageParam(l[s],l,r[s],r):void 0}function h2(n,{pages:l,pageParams:r}){return l.length>0?n.getPreviousPageParam?.(l[0],l,r[0],r):void 0}var p2=class extends qg{#t;#e;#n;constructor(n){super(),this.mutationId=n.mutationId,this.#e=n.mutationCache,this.#t=[],this.state=n.state||Yg(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){this.#t.includes(n)||(this.#t.push(n),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){this.#t=this.#t.filter(l=>l!==n),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#e.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(n){const l=()=>{this.#a({type:"continue"})};this.#n=Lg({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(c,f)=>{this.#a({type:"failed",failureCount:c,error:f})},onPause:()=>{this.#a({type:"pause"})},onContinue:l,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});const r=this.state.status==="pending",s=!this.#n.canStart();try{if(r)l();else{this.#a({type:"pending",variables:n,isPaused:s}),await this.#e.config.onMutate?.(n,this);const f=await this.options.onMutate?.(n);f!==this.state.context&&this.#a({type:"pending",context:f,variables:n,isPaused:s})}const c=await this.#n.start();return await this.#e.config.onSuccess?.(c,n,this.state.context,this),await this.options.onSuccess?.(c,n,this.state.context),await this.#e.config.onSettled?.(c,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(c,null,n,this.state.context),this.#a({type:"success",data:c}),c}catch(c){try{throw await this.#e.config.onError?.(c,n,this.state.context,this),await this.options.onError?.(c,n,this.state.context),await this.#e.config.onSettled?.(void 0,c,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,c,n,this.state.context),c}finally{this.#a({type:"error",error:c})}}finally{this.#e.runNext(this)}}#a(n){const l=r=>{switch(n.type){case"failed":return{...r,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...r,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:n.error,failureCount:r.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=l(this.state),Vt.batch(()=>{this.#t.forEach(r=>{r.onMutationUpdate(n)}),this.#e.notify({mutation:this,type:"updated",action:n})})}};function Yg(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var m2=class extends _i{constructor(n={}){super(),this.config=n,this.#t=new Set,this.#e=new Map,this.#n=0}#t;#e;#n;build(n,l,r){const s=new p2({mutationCache:this,mutationId:++this.#n,options:n.defaultMutationOptions(l),state:r});return this.add(s),s}add(n){this.#t.add(n);const l=gs(n);if(typeof l=="string"){const r=this.#e.get(l);r?r.push(n):this.#e.set(l,[n])}this.notify({type:"added",mutation:n})}remove(n){if(this.#t.delete(n)){const l=gs(n);if(typeof l=="string"){const r=this.#e.get(l);if(r)if(r.length>1){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}else r[0]===n&&this.#e.delete(l)}}this.notify({type:"removed",mutation:n})}canRun(n){const l=gs(n);if(typeof l=="string"){const s=this.#e.get(l)?.find(c=>c.state.status==="pending");return!s||s===n}else return!0}runNext(n){const l=gs(n);return typeof l=="string"?this.#e.get(l)?.find(s=>s!==n&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Vt.batch(()=>{this.#t.forEach(n=>{this.notify({type:"removed",mutation:n})}),this.#t.clear(),this.#e.clear()})}getAll(){return Array.from(this.#t)}find(n){const l={exact:!0,...n};return this.getAll().find(r=>im(l,r))}findAll(n={}){return this.getAll().filter(l=>im(n,l))}notify(n){Vt.batch(()=>{this.listeners.forEach(l=>{l(n)})})}resumePausedMutations(){const n=this.getAll().filter(l=>l.state.isPaused);return Vt.batch(()=>Promise.all(n.map(l=>l.continue().catch(fe))))}};function gs(n){return n.options.scope?.id}var g2=class extends _i{#t;#e=void 0;#n;#a;constructor(l,r){super(),this.#t=l,this.setOptions(r),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(l){const r=this.options;this.options=this.#t.defaultMutationOptions(l),Ns(this.options,r)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),r?.mutationKey&&this.options.mutationKey&&ja(r.mutationKey)!==ja(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(l){this.#i(),this.#r(l)}getCurrentResult(){return this.#e}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#r()}mutate(l,r){return this.#a=r,this.#n?.removeObserver(this),this.#n=this.#t.getMutationCache().build(this.#t,this.options),this.#n.addObserver(this),this.#n.execute(l)}#i(){const l=this.#n?.state??Yg();this.#e={...l,isPending:l.status==="pending",isSuccess:l.status==="success",isError:l.status==="error",isIdle:l.status==="idle",mutate:this.mutate,reset:this.reset}}#r(l){Vt.batch(()=>{if(this.#a&&this.hasListeners()){const r=this.#e.variables,s=this.#e.context;l?.type==="success"?(this.#a.onSuccess?.(l.data,r,s),this.#a.onSettled?.(l.data,null,r,s)):l?.type==="error"&&(this.#a.onError?.(l.error,r,s),this.#a.onSettled?.(void 0,l.error,r,s))}this.listeners.forEach(r=>{r(this.#e)})})}},y2=class extends _i{constructor(n={}){super(),this.config=n,this.#t=new Map}#t;build(n,l,r){const s=l.queryKey,c=l.queryHash??Af(s,l);let f=this.get(c);return f||(f=new c2({client:n,queryKey:s,queryHash:c,options:n.defaultQueryOptions(l),state:r,defaultOptions:n.getQueryDefaults(s)}),this.add(f)),f}add(n){this.#t.has(n.queryHash)||(this.#t.set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const l=this.#t.get(n.queryHash);l&&(n.destroy(),l===n&&this.#t.delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Vt.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return this.#t.get(n)}getAll(){return[...this.#t.values()]}find(n){const l={exact:!0,...n};return this.getAll().find(r=>am(l,r))}findAll(n={}){const l=this.getAll();return Object.keys(n).length>0?l.filter(r=>am(n,r)):l}notify(n){Vt.batch(()=>{this.listeners.forEach(l=>{l(n)})})}onFocus(){Vt.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Vt.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},v2=class{#t;#e;#n;#a;#i;#r;#s;#l;constructor(n={}){this.#t=n.queryCache||new y2,this.#e=n.mutationCache||new m2,this.#n=n.defaultOptions||{},this.#a=new Map,this.#i=new Map,this.#r=0}mount(){this.#r++,this.#r===1&&(this.#s=jf.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#t.onFocus())}),this.#l=Bs.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#r--,this.#r===0&&(this.#s?.(),this.#s=void 0,this.#l?.(),this.#l=void 0)}isFetching(n){return this.#t.findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return this.#e.findAll({...n,status:"pending"}).length}getQueryData(n){const l=this.defaultQueryOptions({queryKey:n});return this.#t.get(l.queryHash)?.state.data}ensureQueryData(n){const l=this.defaultQueryOptions(n),r=this.#t.build(this,l),s=r.state.data;return s===void 0?this.fetchQuery(n):(n.revalidateIfStale&&r.isStaleByTime(ea(l.staleTime,r))&&this.prefetchQuery(l),Promise.resolve(s))}getQueriesData(n){return this.#t.findAll(n).map(({queryKey:l,state:r})=>{const s=r.data;return[l,s]})}setQueryData(n,l,r){const s=this.defaultQueryOptions({queryKey:n}),f=this.#t.get(s.queryHash)?.state.data,d=t2(l,f);if(d!==void 0)return this.#t.build(this,s).setData(d,{...r,manual:!0})}setQueriesData(n,l,r){return Vt.batch(()=>this.#t.findAll(n).map(({queryKey:s})=>[s,this.setQueryData(s,l,r)]))}getQueryState(n){const l=this.defaultQueryOptions({queryKey:n});return this.#t.get(l.queryHash)?.state}removeQueries(n){const l=this.#t;Vt.batch(()=>{l.findAll(n).forEach(r=>{l.remove(r)})})}resetQueries(n,l){const r=this.#t;return Vt.batch(()=>(r.findAll(n).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...n},l)))}cancelQueries(n,l={}){const r={revert:!0,...l},s=Vt.batch(()=>this.#t.findAll(n).map(c=>c.cancel(r)));return Promise.all(s).then(fe).catch(fe)}invalidateQueries(n,l={}){return Vt.batch(()=>(this.#t.findAll(n).forEach(r=>{r.invalidate()}),n?.refetchType==="none"?Promise.resolve():this.refetchQueries({...n,type:n?.refetchType??n?.type??"active"},l)))}refetchQueries(n,l={}){const r={...l,cancelRefetch:l.cancelRefetch??!0},s=Vt.batch(()=>this.#t.findAll(n).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let f=c.fetch(void 0,r);return r.throwOnError||(f=f.catch(fe)),c.state.fetchStatus==="paused"?Promise.resolve():f}));return Promise.all(s).then(fe)}fetchQuery(n){const l=this.defaultQueryOptions(n);l.retry===void 0&&(l.retry=!1);const r=this.#t.build(this,l);return r.isStaleByTime(ea(l.staleTime,r))?r.fetch(l):Promise.resolve(r.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(fe).catch(fe)}fetchInfiniteQuery(n){return n.behavior=cm(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(fe).catch(fe)}ensureInfiniteQueryData(n){return n.behavior=cm(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Bs.isOnline()?this.#e.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#n}setDefaultOptions(n){this.#n=n}setQueryDefaults(n,l){this.#a.set(ja(n),{queryKey:n,defaultOptions:l})}getQueryDefaults(n){const l=[...this.#a.values()],r={};return l.forEach(s=>{Yl(n,s.queryKey)&&Object.assign(r,s.defaultOptions)}),r}setMutationDefaults(n,l){this.#i.set(ja(n),{mutationKey:n,defaultOptions:l})}getMutationDefaults(n){const l=[...this.#i.values()],r={};return l.forEach(s=>{Yl(n,s.mutationKey)&&Object.assign(r,s.defaultOptions)}),r}defaultQueryOptions(n){if(n._defaulted)return n;const l={...this.#n.queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return l.queryHash||(l.queryHash=Af(l.queryKey,l)),l.refetchOnReconnect===void 0&&(l.refetchOnReconnect=l.networkMode!=="always"),l.throwOnError===void 0&&(l.throwOnError=!!l.suspense),!l.networkMode&&l.persister&&(l.networkMode="offlineFirst"),l.queryFn===Cf&&(l.enabled=!1),l}defaultMutationOptions(n){return n?._defaulted?n:{...this.#n.mutations,...n?.mutationKey&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){this.#t.clear(),this.#e.clear()}},Qg=w.createContext(void 0),zf=n=>{const l=w.useContext(Qg);if(!l)throw new Error("No QueryClient set, use QueryClientProvider to set one");return l},b2=({client:n,children:l})=>(w.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),y.jsx(Qg.Provider,{value:n,children:l})),Gg=w.createContext(!1),x2=()=>w.useContext(Gg);Gg.Provider;function S2(){let n=!1;return{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n}}var w2=w.createContext(S2()),E2=()=>w.useContext(w2),R2=(n,l)=>{(n.suspense||n.throwOnError||n.experimental_prefetchInRender)&&(l.isReset()||(n.retryOnMount=!1))},T2=n=>{w.useEffect(()=>{n.clearReset()},[n])},O2=({result:n,errorResetBoundary:l,throwOnError:r,query:s,suspense:c})=>n.isError&&!l.isReset()&&!n.isFetching&&s&&(c&&n.data===void 0||Ng(r,[n.error,s])),A2=(n,l)=>l.state.data===void 0,C2=n=>{if(n.suspense){const r=c=>c==="static"?c:Math.max(c??1e3,1e3),s=n.staleTime;n.staleTime=typeof s=="function"?(...c)=>r(s(...c)):r(s),typeof n.gcTime=="number"&&(n.gcTime=Math.max(n.gcTime,1e3))}},j2=(n,l)=>n.isLoading&&n.isFetching&&!l,D2=(n,l)=>n?.suspense&&l.isPending,dm=(n,l,r)=>l.fetchOptimistic(n).catch(()=>{r.clearReset()});function $g(n,l,r){const s=x2(),c=E2(),f=zf(),d=f.defaultQueryOptions(n);f.getDefaultOptions().queries?._experimental_beforeQuery?.(d),d._optimisticResults=s?"isRestoring":"optimistic",C2(d),R2(d,c),T2(c);const m=!f.getQueryCache().get(d.queryHash),[v]=w.useState(()=>new l(f,d)),p=v.getOptimisticResult(d),g=!s&&n.subscribed!==!1;if(w.useSyncExternalStore(w.useCallback(x=>{const R=g?v.subscribe(Vt.batchCalls(x)):fe;return v.updateResult(),R},[v,g]),()=>v.getCurrentResult(),()=>v.getCurrentResult()),w.useEffect(()=>{v.setOptions(d)},[d,v]),D2(d,p))throw dm(d,v,c);if(O2({result:p,errorResetBoundary:c,throwOnError:d.throwOnError,query:f.getQueryCache().get(d.queryHash),suspense:d.suspense}))throw p.error;return f.getDefaultOptions().queries?._experimental_afterQuery?.(d,p),d.experimental_prefetchInRender&&!Ca&&j2(p,s)&&(m?dm(d,v,c):f.getQueryCache().get(d.queryHash)?.promise)?.catch(fe).finally(()=>{v.updateResult()}),d.notifyOnChangeProps?p:v.trackResult(p)}function Mf(n,l){return $g(n,kg)}function Zs(n,l){return $g({...n,enabled:!0,suspense:!0,throwOnError:A2,placeholderData:void 0},kg)}function z2(n,l){const r=zf(),[s]=w.useState(()=>new g2(r,n));w.useEffect(()=>{s.setOptions(n)},[s,n]);const c=w.useSyncExternalStore(w.useCallback(d=>s.subscribe(Vt.batchCalls(d)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),f=w.useCallback((d,m)=>{s.mutate(d,m).catch(fe)},[s]);if(c.error&&Ng(s.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:f,mutateAsync:c.mutate}}async function za(n,l){const r=await fetch(`/api${n}`,{headers:{"Content-Type":"application/json"},...l});if(!r.ok)throw new Error(`API 요청 실패: ${r.status}`);return r.json()}async function Xg(n){return await za(`/sales/${n}`)}async function M2(n){const l=new URLSearchParams({query:n}).toString();return await za(`/sales/search?${l}`)}async function _2(n,l,r=5){try{const s=await fetch("/api/recommendations/run",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({userId:n,topN:r})});if(!s.ok)throw new Error(`추천 API 오류: ${s.status}`);return await s.json()}catch(s){throw console.error("추천 API 호출 실패:",s),s}}async function U2(n){return await za(`/movies/${n}`)}async function Kg(n=10){return await za(`/movies/popular?limit=${n}`)}function Vg(n){return Zs({queryKey:["SearchSale",n],queryFn:()=>M2(n),staleTime:300*1e3})}function N2(n){return Zs({queryKey:["PopularSales",n],queryFn:async()=>(await Kg(n)).flatMap(s=>s.salesInfo),staleTime:300*1e3})}function B2(n=20){return Zs({queryKey:["InfinitePopularSales"],queryFn:async()=>(await Kg(100)).flatMap(s=>s.salesInfo),staleTime:300*1e3})}function L2(){const{data:n}=B2(20),[l,r]=w.useState(20),s=w.useRef(null),c=w.useMemo(()=>n.slice(0,l),[n,l]),f=d=>{if(s.current){const m=s.current.clientWidth,v=s.current.scrollLeft,p=s.current.scrollWidth-s.current.clientWidth;if(d==="right"&&v>=p-10&&l<n.length){r(g=>Math.min(g+10,n.length)),setTimeout(()=>{s.current&&s.current.scrollBy({left:m,behavior:"smooth"})},100);return}s.current.scrollBy({left:d==="right"?m:-m,behavior:"smooth"})}};return y.jsx(jg,{children:y.jsxs(Tg,{children:[y.jsx(Us,{left:!0,onClick:()=>f("left"),children:"◀"}),y.jsx(Ag,{children:y.jsx(Og,{ref:s,children:c.map(d=>y.jsx(zg,{product:d},d.id))})}),y.jsx(Us,{onClick:()=>f("right"),children:"▶"})]})})}O.div`
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
`;const ef=O.p`
  font-size: 24px;            /* 메인보다는 살짝 작은 크기 */
  font-weight: 500;            /* 적당히 강조 */
  color: ${et.mainDeepBlue};                 /* 부드러운 다크 그레이 */
  text-align: left;            /* 왼쪽 정렬 */
  margin: 0 0 16px 0;          /* 아래 여백으로 카드와 분리 */
  line-height: 1.5;            /* 읽기 좋은 줄 높이 */
  letter-spacing: 0.2px;       /* 서브 타이틀 느낌 강조 */
  padding-left : 20px
`;O.section`
  background: linear-gradient(135deg, ${et.mainBlue} 0%, ${et.mainDeepBlue} 100%);
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
`;O.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;O.h1`
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
`;O.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 32px 0;
  opacity: 0.9;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;O.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;O.div`
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
`;O.span`
  font-size: 1.5rem;
`;O.span`
  font-weight: 500;
  font-size: 0.9rem;
`;const hm=O.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${et.mainBlue}20, transparent);
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
    background: ${et.mainBlue};
    border-radius: 2px;
  }
`;O.div`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;const q2=O.div`
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
`,H2=O.div`
  position: relative;
  z-index: 10;
  height: 500px;
  width: 100vw;
  background-color: ${et.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: clip-path 0.2s ease-out;
`,k2=O.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`,Y2=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Q2=O.div`
  display: flex;
  align-items: center;
  gap: 48px;
`,Ac=O.div`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`,G2=O.h1`
  font-size: 28px;
  color: white;
  font-weight: 900;
  margin: 0;
  cursor: pointer;
`,Cc=O.img`
  width: 24px;
  height: 24px;
`,$2=O.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 48px;
  margin-top: 24px;
`,X2=O.div`
  width: 100%;
  color: white;
`,K2=O.h2`
  font-size: 40px;
  font-weight: 800;
  margin: 0 0 8px 0;
  line-height: 1.1;
`,V2=O.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0 0 16px 0;
`,Z2=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,J2=O.input`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 16px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
`,F2=O.div`
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
`,P2=O.img`
  width: 24px;
  height: 24px;
`,W2="/static/img/search_w.svg",I2="/static/img/user_w.svg",tw="/static/img/menu_w.svg",ew="/static/img/heart_w.svg",nw=()=>{const n=je(),[l,r]=w.useState(""),s=w.useRef(null),c=w.useRef({x:48,y:0}),f=w.useRef({x:48,y:0});w.useEffect(()=>{const v=x=>{const{innerWidth:R,innerHeight:N}=window,A=40+x.clientX/R*20,_=x.clientY/N*10;f.current={x:A,y:_}};window.addEventListener("mousemove",v);let p;const g=()=>{c.current.x+=(f.current.x-c.current.x)*.08,c.current.y+=(f.current.y-c.current.y)*.08,s.current&&(s.current.style.clipPath=`ellipse(100% 80% at ${c.current.x}% ${c.current.y}%)`),p=requestAnimationFrame(g)};return g(),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",v)}},[]);const d=()=>{n(`/static/SearchPage/${l}`)},m=v=>{v.key==="Enter"&&d()};return y.jsx(H2,{ref:s,children:y.jsxs(Mi,{children:[y.jsxs(k2,{children:[y.jsx(Y2,{children:y.jsx(G2,{onClick:()=>n("/static/"),children:"L.B"})}),y.jsxs(Q2,{children:[y.jsx(Ac,{onClick:()=>n("/static/onboarding"),children:y.jsx(Cc,{src:ew,alt:"heart"})}),y.jsx(Ac,{onClick:()=>n("/static/My"),children:y.jsx(Cc,{src:I2,alt:"my"})}),y.jsx(Ac,{onClick:()=>n("/static/"),children:y.jsx(Cc,{src:tw,alt:"menu"})})]})]}),y.jsx($2,{children:y.jsxs(X2,{children:[y.jsx(K2,{children:"블루레이 추천"}),y.jsx(V2,{children:"당신의 인생영화를 찾아보세요!"}),y.jsxs(Z2,{children:[y.jsx(J2,{value:l,onChange:v=>r(v.target.value),onKeyDown:m,placeholder:"상품명 검색"}),y.jsx(F2,{onClick:d,children:y.jsx(P2,{src:W2,alt:"search"})})]})]})})]})})},aw=w.createContext(null),jc={didCatch:!1,error:null};class nf extends w.Component{constructor(l){super(l),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=jc}static getDerivedStateFromError(l){return{didCatch:!0,error:l}}resetErrorBoundary(){const{error:l}=this.state;if(l!==null){for(var r,s,c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d];(r=(s=this.props).onReset)===null||r===void 0||r.call(s,{args:f,reason:"imperative-api"}),this.setState(jc)}}componentDidCatch(l,r){var s,c;(s=(c=this.props).onError)===null||s===void 0||s.call(c,l,r)}componentDidUpdate(l,r){const{didCatch:s}=this.state,{resetKeys:c}=this.props;if(s&&r.error!==null&&iw(l.resetKeys,c)){var f,d;(f=(d=this.props).onReset)===null||f===void 0||f.call(d,{next:c,prev:l.resetKeys,reason:"keys"}),this.setState(jc)}}render(){const{children:l,fallbackRender:r,FallbackComponent:s,fallback:c}=this.props,{didCatch:f,error:d}=this.state;let m=l;if(f){const v={error:d,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")m=r(v);else if(s)m=w.createElement(s,v);else if(c!==void 0)m=c;else throw d}return w.createElement(aw.Provider,{value:{didCatch:f,error:d,resetErrorBoundary:this.resetErrorBoundary}},m)}}function iw(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.length!==l.length||n.some((r,s)=>!Object.is(r,l[s]))}const pm=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  height: 100%;
  gap: 20px;
`,lw=zi`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,rw=zi`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,sw=zi`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`,uw=zi`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;O.div`
  border: 3px solid #f0f0f0;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${lw} 1s linear infinite;
`;const mm=O.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  animation: ${rw} 2s ease-in-out infinite;
`,gm=O.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`,vi=O.div`
  width: 8px;
  height: 8px;
  background-color: ${et.mainBlue};
  border-radius: 50%;
  animation: ${sw} 1.4s ease-in-out infinite;
  animation-delay: ${n=>n.$delay}s;
`,ow=O.div`
  width: 200px;
  height: 4px;
  background-color: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 10px;
`,cw=O.div`
  height: 100%;
  background: linear-gradient(90deg,${et.mainBlue},${et.mainDeepBlue},${et.mainBlue});
  background-size: 200px 100%;
  animation: ${uw} 5s linear infinite;
  width: ${n=>n.$progress}%;
  transition: width 0.3s ease;
`,Kl=({loading:n=!0,message:l="로딩 중...",showProgress:r=!1,type:s="default"})=>{const[c,f]=w.useState(0),[d,m]=w.useState(l);return w.useEffect(()=>{if(n){if(r){const v=setInterval(()=>{f(p=>p>=90?p:p+Math.random()*10)},200);return()=>clearInterval(v)}if(r){const v=["데이터를 분석하고 있어요...","맞춤 추천을 찾고 있어요...","최적의 상품을 선별하고 있어요..."];let p=0;const g=setInterval(()=>{m(v[p%v.length]),p++},3e3);return()=>clearInterval(g)}}},[n,r]),n?s==="enhanced"?y.jsxs(pm,{children:[y.jsx(mm,{children:d}),r&&y.jsx(ow,{children:y.jsx(cw,{$progress:c})}),y.jsxs(gm,{children:[y.jsx(vi,{$delay:0}),y.jsx(vi,{$delay:.2}),y.jsx(vi,{$delay:.4})]})]}):y.jsxs(pm,{children:[y.jsx(mm,{children:l}),y.jsxs(gm,{children:[y.jsx(vi,{$delay:0}),y.jsx(vi,{$delay:.2}),y.jsx(vi,{$delay:.4})]})]}):null};async function fw(n,l=5){return await za("/recommendations/run",{method:"POST",body:JSON.stringify({userId:n,topN:l}),headers:{"Content-Type":"application/json"}})}function Zg(n,l){return function(){return n.apply(l,arguments)}}const{toString:dw}=Object.prototype,{getPrototypeOf:_f}=Object,{iterator:Js,toStringTag:Jg}=Symbol,Fs=(n=>l=>{const r=dw.call(l);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Fe=n=>(n=n.toLowerCase(),l=>Fs(l)===n),Ps=n=>l=>typeof l===n,{isArray:Ui}=Array,Ql=Ps("undefined");function Vl(n){return n!==null&&!Ql(n)&&n.constructor!==null&&!Ql(n.constructor)&&ye(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Fg=Fe("ArrayBuffer");function hw(n){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(n):l=n&&n.buffer&&Fg(n.buffer),l}const pw=Ps("string"),ye=Ps("function"),Pg=Ps("number"),Zl=n=>n!==null&&typeof n=="object",mw=n=>n===!0||n===!1,Ts=n=>{if(Fs(n)!=="object")return!1;const l=_f(n);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Jg in n)&&!(Js in n)},gw=n=>{if(!Zl(n)||Vl(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},yw=Fe("Date"),vw=Fe("File"),bw=Fe("Blob"),xw=Fe("FileList"),Sw=n=>Zl(n)&&ye(n.pipe),ww=n=>{let l;return n&&(typeof FormData=="function"&&n instanceof FormData||ye(n.append)&&((l=Fs(n))==="formdata"||l==="object"&&ye(n.toString)&&n.toString()==="[object FormData]"))},Ew=Fe("URLSearchParams"),[Rw,Tw,Ow,Aw]=["ReadableStream","Request","Response","Headers"].map(Fe),Cw=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Jl(n,l,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let s,c;if(typeof n!="object"&&(n=[n]),Ui(n))for(s=0,c=n.length;s<c;s++)l.call(null,n[s],s,n);else{if(Vl(n))return;const f=r?Object.getOwnPropertyNames(n):Object.keys(n),d=f.length;let m;for(s=0;s<d;s++)m=f[s],l.call(null,n[m],m,n)}}function Wg(n,l){if(Vl(n))return null;l=l.toLowerCase();const r=Object.keys(n);let s=r.length,c;for(;s-- >0;)if(c=r[s],l===c.toLowerCase())return c;return null}const Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ig=n=>!Ql(n)&&n!==Ra;function af(){const{caseless:n}=Ig(this)&&this||{},l={},r=(s,c)=>{const f=n&&Wg(l,c)||c;Ts(l[f])&&Ts(s)?l[f]=af(l[f],s):Ts(s)?l[f]=af({},s):Ui(s)?l[f]=s.slice():l[f]=s};for(let s=0,c=arguments.length;s<c;s++)arguments[s]&&Jl(arguments[s],r);return l}const jw=(n,l,r,{allOwnKeys:s}={})=>(Jl(l,(c,f)=>{r&&ye(c)?n[f]=Zg(c,r):n[f]=c},{allOwnKeys:s}),n),Dw=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),zw=(n,l,r,s)=>{n.prototype=Object.create(l.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:l.prototype}),r&&Object.assign(n.prototype,r)},Mw=(n,l,r,s)=>{let c,f,d;const m={};if(l=l||{},n==null)return l;do{for(c=Object.getOwnPropertyNames(n),f=c.length;f-- >0;)d=c[f],(!s||s(d,n,l))&&!m[d]&&(l[d]=n[d],m[d]=!0);n=r!==!1&&_f(n)}while(n&&(!r||r(n,l))&&n!==Object.prototype);return l},_w=(n,l,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=l.length;const s=n.indexOf(l,r);return s!==-1&&s===r},Uw=n=>{if(!n)return null;if(Ui(n))return n;let l=n.length;if(!Pg(l))return null;const r=new Array(l);for(;l-- >0;)r[l]=n[l];return r},Nw=(n=>l=>n&&l instanceof n)(typeof Uint8Array<"u"&&_f(Uint8Array)),Bw=(n,l)=>{const s=(n&&n[Js]).call(n);let c;for(;(c=s.next())&&!c.done;){const f=c.value;l.call(n,f[0],f[1])}},Lw=(n,l)=>{let r;const s=[];for(;(r=n.exec(l))!==null;)s.push(r);return s},qw=Fe("HTMLFormElement"),Hw=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,c){return s.toUpperCase()+c}),ym=(({hasOwnProperty:n})=>(l,r)=>n.call(l,r))(Object.prototype),kw=Fe("RegExp"),ty=(n,l)=>{const r=Object.getOwnPropertyDescriptors(n),s={};Jl(r,(c,f)=>{let d;(d=l(c,f,n))!==!1&&(s[f]=d||c)}),Object.defineProperties(n,s)},Yw=n=>{ty(n,(l,r)=>{if(ye(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=n[r];if(ye(s)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Qw=(n,l)=>{const r={},s=c=>{c.forEach(f=>{r[f]=!0})};return Ui(n)?s(n):s(String(n).split(l)),r},Gw=()=>{},$w=(n,l)=>n!=null&&Number.isFinite(n=+n)?n:l;function Xw(n){return!!(n&&ye(n.append)&&n[Jg]==="FormData"&&n[Js])}const Kw=n=>{const l=new Array(10),r=(s,c)=>{if(Zl(s)){if(l.indexOf(s)>=0)return;if(Vl(s))return s;if(!("toJSON"in s)){l[c]=s;const f=Ui(s)?[]:{};return Jl(s,(d,m)=>{const v=r(d,c+1);!Ql(v)&&(f[m]=v)}),l[c]=void 0,f}}return s};return r(n,0)},Vw=Fe("AsyncFunction"),Zw=n=>n&&(Zl(n)||ye(n))&&ye(n.then)&&ye(n.catch),ey=((n,l)=>n?setImmediate:l?((r,s)=>(Ra.addEventListener("message",({source:c,data:f})=>{c===Ra&&f===r&&s.length&&s.shift()()},!1),c=>{s.push(c),Ra.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",ye(Ra.postMessage)),Jw=typeof queueMicrotask<"u"?queueMicrotask.bind(Ra):typeof process<"u"&&process.nextTick||ey,Fw=n=>n!=null&&ye(n[Js]),B={isArray:Ui,isArrayBuffer:Fg,isBuffer:Vl,isFormData:ww,isArrayBufferView:hw,isString:pw,isNumber:Pg,isBoolean:mw,isObject:Zl,isPlainObject:Ts,isEmptyObject:gw,isReadableStream:Rw,isRequest:Tw,isResponse:Ow,isHeaders:Aw,isUndefined:Ql,isDate:yw,isFile:vw,isBlob:bw,isRegExp:kw,isFunction:ye,isStream:Sw,isURLSearchParams:Ew,isTypedArray:Nw,isFileList:xw,forEach:Jl,merge:af,extend:jw,trim:Cw,stripBOM:Dw,inherits:zw,toFlatObject:Mw,kindOf:Fs,kindOfTest:Fe,endsWith:_w,toArray:Uw,forEachEntry:Bw,matchAll:Lw,isHTMLForm:qw,hasOwnProperty:ym,hasOwnProp:ym,reduceDescriptors:ty,freezeMethods:Yw,toObjectSet:Qw,toCamelCase:Hw,noop:Gw,toFiniteNumber:$w,findKey:Wg,global:Ra,isContextDefined:Ig,isSpecCompliantForm:Xw,toJSONObject:Kw,isAsyncFn:Vw,isThenable:Zw,setImmediate:ey,asap:Jw,isIterable:Fw};function ct(n,l,r,s,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",l&&(this.code=l),r&&(this.config=r),s&&(this.request=s),c&&(this.response=c,this.status=c.status?c.status:null)}B.inherits(ct,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const ny=ct.prototype,ay={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{ay[n]={value:n}});Object.defineProperties(ct,ay);Object.defineProperty(ny,"isAxiosError",{value:!0});ct.from=(n,l,r,s,c,f)=>{const d=Object.create(ny);return B.toFlatObject(n,d,function(v){return v!==Error.prototype},m=>m!=="isAxiosError"),ct.call(d,n.message,l,r,s,c),d.cause=n,d.name=n.name,f&&Object.assign(d,f),d};const Pw=null;function lf(n){return B.isPlainObject(n)||B.isArray(n)}function iy(n){return B.endsWith(n,"[]")?n.slice(0,-2):n}function vm(n,l,r){return n?n.concat(l).map(function(c,f){return c=iy(c),!r&&f?"["+c+"]":c}).join(r?".":""):l}function Ww(n){return B.isArray(n)&&!n.some(lf)}const Iw=B.toFlatObject(B,{},null,function(l){return/^is[A-Z]/.test(l)});function Ws(n,l,r){if(!B.isObject(n))throw new TypeError("target must be an object");l=l||new FormData,r=B.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,j){return!B.isUndefined(j[_])});const s=r.metaTokens,c=r.visitor||g,f=r.dots,d=r.indexes,v=(r.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(l);if(!B.isFunction(c))throw new TypeError("visitor must be a function");function p(A){if(A===null)return"";if(B.isDate(A))return A.toISOString();if(B.isBoolean(A))return A.toString();if(!v&&B.isBlob(A))throw new ct("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(A)||B.isTypedArray(A)?v&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function g(A,_,j){let Y=A;if(A&&!j&&typeof A=="object"){if(B.endsWith(_,"{}"))_=s?_:_.slice(0,-2),A=JSON.stringify(A);else if(B.isArray(A)&&Ww(A)||(B.isFileList(A)||B.endsWith(_,"[]"))&&(Y=B.toArray(A)))return _=iy(_),Y.forEach(function($,F){!(B.isUndefined($)||$===null)&&l.append(d===!0?vm([_],F,f):d===null?_:_+"[]",p($))}),!1}return lf(A)?!0:(l.append(vm(j,_,f),p(A)),!1)}const x=[],R=Object.assign(Iw,{defaultVisitor:g,convertValue:p,isVisitable:lf});function N(A,_){if(!B.isUndefined(A)){if(x.indexOf(A)!==-1)throw Error("Circular reference detected in "+_.join("."));x.push(A),B.forEach(A,function(Y,H){(!(B.isUndefined(Y)||Y===null)&&c.call(l,Y,B.isString(H)?H.trim():H,_,R))===!0&&N(Y,_?_.concat(H):[H])}),x.pop()}}if(!B.isObject(n))throw new TypeError("data must be an object");return N(n),l}function bm(n){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return l[s]})}function Uf(n,l){this._pairs=[],n&&Ws(n,this,l)}const ly=Uf.prototype;ly.append=function(l,r){this._pairs.push([l,r])};ly.toString=function(l){const r=l?function(s){return l.call(this,s,bm)}:bm;return this._pairs.map(function(c){return r(c[0])+"="+r(c[1])},"").join("&")};function tE(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ry(n,l,r){if(!l)return n;const s=r&&r.encode||tE;B.isFunction(r)&&(r={serialize:r});const c=r&&r.serialize;let f;if(c?f=c(l,r):f=B.isURLSearchParams(l)?l.toString():new Uf(l,r).toString(s),f){const d=n.indexOf("#");d!==-1&&(n=n.slice(0,d)),n+=(n.indexOf("?")===-1?"?":"&")+f}return n}class xm{constructor(){this.handlers=[]}use(l,r,s){return this.handlers.push({fulfilled:l,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){B.forEach(this.handlers,function(s){s!==null&&l(s)})}}const sy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},eE=typeof URLSearchParams<"u"?URLSearchParams:Uf,nE=typeof FormData<"u"?FormData:null,aE=typeof Blob<"u"?Blob:null,iE={isBrowser:!0,classes:{URLSearchParams:eE,FormData:nE,Blob:aE},protocols:["http","https","file","blob","url","data"]},Nf=typeof window<"u"&&typeof document<"u",rf=typeof navigator=="object"&&navigator||void 0,lE=Nf&&(!rf||["ReactNative","NativeScript","NS"].indexOf(rf.product)<0),rE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sE=Nf&&window.location.href||"http://localhost",uE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Nf,hasStandardBrowserEnv:lE,hasStandardBrowserWebWorkerEnv:rE,navigator:rf,origin:sE},Symbol.toStringTag,{value:"Module"})),ue={...uE,...iE};function oE(n,l){return Ws(n,new ue.classes.URLSearchParams,{visitor:function(r,s,c,f){return ue.isNode&&B.isBuffer(r)?(this.append(s,r.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...l})}function cE(n){return B.matchAll(/\w+|\[(\w*)]/g,n).map(l=>l[0]==="[]"?"":l[1]||l[0])}function fE(n){const l={},r=Object.keys(n);let s;const c=r.length;let f;for(s=0;s<c;s++)f=r[s],l[f]=n[f];return l}function uy(n){function l(r,s,c,f){let d=r[f++];if(d==="__proto__")return!0;const m=Number.isFinite(+d),v=f>=r.length;return d=!d&&B.isArray(c)?c.length:d,v?(B.hasOwnProp(c,d)?c[d]=[c[d],s]:c[d]=s,!m):((!c[d]||!B.isObject(c[d]))&&(c[d]=[]),l(r,s,c[d],f)&&B.isArray(c[d])&&(c[d]=fE(c[d])),!m)}if(B.isFormData(n)&&B.isFunction(n.entries)){const r={};return B.forEachEntry(n,(s,c)=>{l(cE(s),c,r,0)}),r}return null}function dE(n,l,r){if(B.isString(n))try{return(l||JSON.parse)(n),B.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(n)}const Fl={transitional:sy,adapter:["xhr","http","fetch"],transformRequest:[function(l,r){const s=r.getContentType()||"",c=s.indexOf("application/json")>-1,f=B.isObject(l);if(f&&B.isHTMLForm(l)&&(l=new FormData(l)),B.isFormData(l))return c?JSON.stringify(uy(l)):l;if(B.isArrayBuffer(l)||B.isBuffer(l)||B.isStream(l)||B.isFile(l)||B.isBlob(l)||B.isReadableStream(l))return l;if(B.isArrayBufferView(l))return l.buffer;if(B.isURLSearchParams(l))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let m;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return oE(l,this.formSerializer).toString();if((m=B.isFileList(l))||s.indexOf("multipart/form-data")>-1){const v=this.env&&this.env.FormData;return Ws(m?{"files[]":l}:l,v&&new v,this.formSerializer)}}return f||c?(r.setContentType("application/json",!1),dE(l)):l}],transformResponse:[function(l){const r=this.transitional||Fl.transitional,s=r&&r.forcedJSONParsing,c=this.responseType==="json";if(B.isResponse(l)||B.isReadableStream(l))return l;if(l&&B.isString(l)&&(s&&!this.responseType||c)){const d=!(r&&r.silentJSONParsing)&&c;try{return JSON.parse(l)}catch(m){if(d)throw m.name==="SyntaxError"?ct.from(m,ct.ERR_BAD_RESPONSE,this,null,this.response):m}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ue.classes.FormData,Blob:ue.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],n=>{Fl.headers[n]={}});const hE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pE=n=>{const l={};let r,s,c;return n&&n.split(`
`).forEach(function(d){c=d.indexOf(":"),r=d.substring(0,c).trim().toLowerCase(),s=d.substring(c+1).trim(),!(!r||l[r]&&hE[r])&&(r==="set-cookie"?l[r]?l[r].push(s):l[r]=[s]:l[r]=l[r]?l[r]+", "+s:s)}),l},Sm=Symbol("internals");function Bl(n){return n&&String(n).trim().toLowerCase()}function Os(n){return n===!1||n==null?n:B.isArray(n)?n.map(Os):String(n)}function mE(n){const l=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(n);)l[s[1]]=s[2];return l}const gE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Dc(n,l,r,s,c){if(B.isFunction(s))return s.call(this,l,r);if(c&&(l=r),!!B.isString(l)){if(B.isString(s))return l.indexOf(s)!==-1;if(B.isRegExp(s))return s.test(l)}}function yE(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,r,s)=>r.toUpperCase()+s)}function vE(n,l){const r=B.toCamelCase(" "+l);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+r,{value:function(c,f,d){return this[s].call(this,l,c,f,d)},configurable:!0})})}let ve=class{constructor(l){l&&this.set(l)}set(l,r,s){const c=this;function f(m,v,p){const g=Bl(v);if(!g)throw new Error("header name must be a non-empty string");const x=B.findKey(c,g);(!x||c[x]===void 0||p===!0||p===void 0&&c[x]!==!1)&&(c[x||v]=Os(m))}const d=(m,v)=>B.forEach(m,(p,g)=>f(p,g,v));if(B.isPlainObject(l)||l instanceof this.constructor)d(l,r);else if(B.isString(l)&&(l=l.trim())&&!gE(l))d(pE(l),r);else if(B.isObject(l)&&B.isIterable(l)){let m={},v,p;for(const g of l){if(!B.isArray(g))throw TypeError("Object iterator must return a key-value pair");m[p=g[0]]=(v=m[p])?B.isArray(v)?[...v,g[1]]:[v,g[1]]:g[1]}d(m,r)}else l!=null&&f(r,l,s);return this}get(l,r){if(l=Bl(l),l){const s=B.findKey(this,l);if(s){const c=this[s];if(!r)return c;if(r===!0)return mE(c);if(B.isFunction(r))return r.call(this,c,s);if(B.isRegExp(r))return r.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,r){if(l=Bl(l),l){const s=B.findKey(this,l);return!!(s&&this[s]!==void 0&&(!r||Dc(this,this[s],s,r)))}return!1}delete(l,r){const s=this;let c=!1;function f(d){if(d=Bl(d),d){const m=B.findKey(s,d);m&&(!r||Dc(s,s[m],m,r))&&(delete s[m],c=!0)}}return B.isArray(l)?l.forEach(f):f(l),c}clear(l){const r=Object.keys(this);let s=r.length,c=!1;for(;s--;){const f=r[s];(!l||Dc(this,this[f],f,l,!0))&&(delete this[f],c=!0)}return c}normalize(l){const r=this,s={};return B.forEach(this,(c,f)=>{const d=B.findKey(s,f);if(d){r[d]=Os(c),delete r[f];return}const m=l?yE(f):String(f).trim();m!==f&&delete r[f],r[m]=Os(c),s[m]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const r=Object.create(null);return B.forEach(this,(s,c)=>{s!=null&&s!==!1&&(r[c]=l&&B.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,r])=>l+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...r){const s=new this(l);return r.forEach(c=>s.set(c)),s}static accessor(l){const s=(this[Sm]=this[Sm]={accessors:{}}).accessors,c=this.prototype;function f(d){const m=Bl(d);s[m]||(vE(c,d),s[m]=!0)}return B.isArray(l)?l.forEach(f):f(l),this}};ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(ve.prototype,({value:n},l)=>{let r=l[0].toUpperCase()+l.slice(1);return{get:()=>n,set(s){this[r]=s}}});B.freezeMethods(ve);function zc(n,l){const r=this||Fl,s=l||r,c=ve.from(s.headers);let f=s.data;return B.forEach(n,function(m){f=m.call(r,f,c.normalize(),l?l.status:void 0)}),c.normalize(),f}function oy(n){return!!(n&&n.__CANCEL__)}function Ni(n,l,r){ct.call(this,n??"canceled",ct.ERR_CANCELED,l,r),this.name="CanceledError"}B.inherits(Ni,ct,{__CANCEL__:!0});function cy(n,l,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?n(r):l(new ct("Request failed with status code "+r.status,[ct.ERR_BAD_REQUEST,ct.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function bE(n){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return l&&l[1]||""}function xE(n,l){n=n||10;const r=new Array(n),s=new Array(n);let c=0,f=0,d;return l=l!==void 0?l:1e3,function(v){const p=Date.now(),g=s[f];d||(d=p),r[c]=v,s[c]=p;let x=f,R=0;for(;x!==c;)R+=r[x++],x=x%n;if(c=(c+1)%n,c===f&&(f=(f+1)%n),p-d<l)return;const N=g&&p-g;return N?Math.round(R*1e3/N):void 0}}function SE(n,l){let r=0,s=1e3/l,c,f;const d=(p,g=Date.now())=>{r=g,c=null,f&&(clearTimeout(f),f=null),n(...p)};return[(...p)=>{const g=Date.now(),x=g-r;x>=s?d(p,g):(c=p,f||(f=setTimeout(()=>{f=null,d(c)},s-x)))},()=>c&&d(c)]}const Ls=(n,l,r=3)=>{let s=0;const c=xE(50,250);return SE(f=>{const d=f.loaded,m=f.lengthComputable?f.total:void 0,v=d-s,p=c(v),g=d<=m;s=d;const x={loaded:d,total:m,progress:m?d/m:void 0,bytes:v,rate:p||void 0,estimated:p&&m&&g?(m-d)/p:void 0,event:f,lengthComputable:m!=null,[l?"download":"upload"]:!0};n(x)},r)},wm=(n,l)=>{const r=n!=null;return[s=>l[0]({lengthComputable:r,total:n,loaded:s}),l[1]]},Em=n=>(...l)=>B.asap(()=>n(...l)),wE=ue.hasStandardBrowserEnv?((n,l)=>r=>(r=new URL(r,ue.origin),n.protocol===r.protocol&&n.host===r.host&&(l||n.port===r.port)))(new URL(ue.origin),ue.navigator&&/(msie|trident)/i.test(ue.navigator.userAgent)):()=>!0,EE=ue.hasStandardBrowserEnv?{write(n,l,r,s,c,f){const d=[n+"="+encodeURIComponent(l)];B.isNumber(r)&&d.push("expires="+new Date(r).toGMTString()),B.isString(s)&&d.push("path="+s),B.isString(c)&&d.push("domain="+c),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read(n){const l=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function RE(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function TE(n,l){return l?n.replace(/\/?\/$/,"")+"/"+l.replace(/^\/+/,""):n}function fy(n,l,r){let s=!RE(l);return n&&(s||r==!1)?TE(n,l):l}const Rm=n=>n instanceof ve?{...n}:n;function Da(n,l){l=l||{};const r={};function s(p,g,x,R){return B.isPlainObject(p)&&B.isPlainObject(g)?B.merge.call({caseless:R},p,g):B.isPlainObject(g)?B.merge({},g):B.isArray(g)?g.slice():g}function c(p,g,x,R){if(B.isUndefined(g)){if(!B.isUndefined(p))return s(void 0,p,x,R)}else return s(p,g,x,R)}function f(p,g){if(!B.isUndefined(g))return s(void 0,g)}function d(p,g){if(B.isUndefined(g)){if(!B.isUndefined(p))return s(void 0,p)}else return s(void 0,g)}function m(p,g,x){if(x in l)return s(p,g);if(x in n)return s(void 0,p)}const v={url:f,method:f,data:f,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:m,headers:(p,g,x)=>c(Rm(p),Rm(g),x,!0)};return B.forEach(Object.keys({...n,...l}),function(g){const x=v[g]||c,R=x(n[g],l[g],g);B.isUndefined(R)&&x!==m||(r[g]=R)}),r}const dy=n=>{const l=Da({},n);let{data:r,withXSRFToken:s,xsrfHeaderName:c,xsrfCookieName:f,headers:d,auth:m}=l;l.headers=d=ve.from(d),l.url=ry(fy(l.baseURL,l.url,l.allowAbsoluteUrls),n.params,n.paramsSerializer),m&&d.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let v;if(B.isFormData(r)){if(ue.hasStandardBrowserEnv||ue.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((v=d.getContentType())!==!1){const[p,...g]=v?v.split(";").map(x=>x.trim()).filter(Boolean):[];d.setContentType([p||"multipart/form-data",...g].join("; "))}}if(ue.hasStandardBrowserEnv&&(s&&B.isFunction(s)&&(s=s(l)),s||s!==!1&&wE(l.url))){const p=c&&f&&EE.read(f);p&&d.set(c,p)}return l},OE=typeof XMLHttpRequest<"u",AE=OE&&function(n){return new Promise(function(r,s){const c=dy(n);let f=c.data;const d=ve.from(c.headers).normalize();let{responseType:m,onUploadProgress:v,onDownloadProgress:p}=c,g,x,R,N,A;function _(){N&&N(),A&&A(),c.cancelToken&&c.cancelToken.unsubscribe(g),c.signal&&c.signal.removeEventListener("abort",g)}let j=new XMLHttpRequest;j.open(c.method.toUpperCase(),c.url,!0),j.timeout=c.timeout;function Y(){if(!j)return;const $=ve.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),X={data:!m||m==="text"||m==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:$,config:n,request:j};cy(function(K){r(K),_()},function(K){s(K),_()},X),j=null}"onloadend"in j?j.onloadend=Y:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(Y)},j.onabort=function(){j&&(s(new ct("Request aborted",ct.ECONNABORTED,n,j)),j=null)},j.onerror=function(){s(new ct("Network Error",ct.ERR_NETWORK,n,j)),j=null},j.ontimeout=function(){let F=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const X=c.transitional||sy;c.timeoutErrorMessage&&(F=c.timeoutErrorMessage),s(new ct(F,X.clarifyTimeoutError?ct.ETIMEDOUT:ct.ECONNABORTED,n,j)),j=null},f===void 0&&d.setContentType(null),"setRequestHeader"in j&&B.forEach(d.toJSON(),function(F,X){j.setRequestHeader(X,F)}),B.isUndefined(c.withCredentials)||(j.withCredentials=!!c.withCredentials),m&&m!=="json"&&(j.responseType=c.responseType),p&&([R,A]=Ls(p,!0),j.addEventListener("progress",R)),v&&j.upload&&([x,N]=Ls(v),j.upload.addEventListener("progress",x),j.upload.addEventListener("loadend",N)),(c.cancelToken||c.signal)&&(g=$=>{j&&(s(!$||$.type?new Ni(null,n,j):$),j.abort(),j=null)},c.cancelToken&&c.cancelToken.subscribe(g),c.signal&&(c.signal.aborted?g():c.signal.addEventListener("abort",g)));const H=bE(c.url);if(H&&ue.protocols.indexOf(H)===-1){s(new ct("Unsupported protocol "+H+":",ct.ERR_BAD_REQUEST,n));return}j.send(f||null)})},CE=(n,l)=>{const{length:r}=n=n?n.filter(Boolean):[];if(l||r){let s=new AbortController,c;const f=function(p){if(!c){c=!0,m();const g=p instanceof Error?p:this.reason;s.abort(g instanceof ct?g:new Ni(g instanceof Error?g.message:g))}};let d=l&&setTimeout(()=>{d=null,f(new ct(`timeout ${l} of ms exceeded`,ct.ETIMEDOUT))},l);const m=()=>{n&&(d&&clearTimeout(d),d=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(f):p.removeEventListener("abort",f)}),n=null)};n.forEach(p=>p.addEventListener("abort",f));const{signal:v}=s;return v.unsubscribe=()=>B.asap(m),v}},jE=function*(n,l){let r=n.byteLength;if(r<l){yield n;return}let s=0,c;for(;s<r;)c=s+l,yield n.slice(s,c),s=c},DE=async function*(n,l){for await(const r of zE(n))yield*jE(r,l)},zE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const l=n.getReader();try{for(;;){const{done:r,value:s}=await l.read();if(r)break;yield s}}finally{await l.cancel()}},Tm=(n,l,r,s)=>{const c=DE(n,l);let f=0,d,m=v=>{d||(d=!0,s&&s(v))};return new ReadableStream({async pull(v){try{const{done:p,value:g}=await c.next();if(p){m(),v.close();return}let x=g.byteLength;if(r){let R=f+=x;r(R)}v.enqueue(new Uint8Array(g))}catch(p){throw m(p),p}},cancel(v){return m(v),c.return()}},{highWaterMark:2})},Is=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",hy=Is&&typeof ReadableStream=="function",ME=Is&&(typeof TextEncoder=="function"?(n=>l=>n.encode(l))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),py=(n,...l)=>{try{return!!n(...l)}catch{return!1}},_E=hy&&py(()=>{let n=!1;const l=new Request(ue.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!l}),Om=64*1024,sf=hy&&py(()=>B.isReadableStream(new Response("").body)),qs={stream:sf&&(n=>n.body)};Is&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(l=>{!qs[l]&&(qs[l]=B.isFunction(n[l])?r=>r[l]():(r,s)=>{throw new ct(`Response type '${l}' is not supported`,ct.ERR_NOT_SUPPORT,s)})})})(new Response);const UE=async n=>{if(n==null)return 0;if(B.isBlob(n))return n.size;if(B.isSpecCompliantForm(n))return(await new Request(ue.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(B.isArrayBufferView(n)||B.isArrayBuffer(n))return n.byteLength;if(B.isURLSearchParams(n)&&(n=n+""),B.isString(n))return(await ME(n)).byteLength},NE=async(n,l)=>{const r=B.toFiniteNumber(n.getContentLength());return r??UE(l)},BE=Is&&(async n=>{let{url:l,method:r,data:s,signal:c,cancelToken:f,timeout:d,onDownloadProgress:m,onUploadProgress:v,responseType:p,headers:g,withCredentials:x="same-origin",fetchOptions:R}=dy(n);p=p?(p+"").toLowerCase():"text";let N=CE([c,f&&f.toAbortSignal()],d),A;const _=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let j;try{if(v&&_E&&r!=="get"&&r!=="head"&&(j=await NE(g,s))!==0){let X=new Request(l,{method:"POST",body:s,duplex:"half"}),W;if(B.isFormData(s)&&(W=X.headers.get("content-type"))&&g.setContentType(W),X.body){const[K,ot]=wm(j,Ls(Em(v)));s=Tm(X.body,Om,K,ot)}}B.isString(x)||(x=x?"include":"omit");const Y="credentials"in Request.prototype;A=new Request(l,{...R,signal:N,method:r.toUpperCase(),headers:g.normalize().toJSON(),body:s,duplex:"half",credentials:Y?x:void 0});let H=await fetch(A,R);const $=sf&&(p==="stream"||p==="response");if(sf&&(m||$&&_)){const X={};["status","statusText","headers"].forEach(I=>{X[I]=H[I]});const W=B.toFiniteNumber(H.headers.get("content-length")),[K,ot]=m&&wm(W,Ls(Em(m),!0))||[];H=new Response(Tm(H.body,Om,K,()=>{ot&&ot(),_&&_()}),X)}p=p||"text";let F=await qs[B.findKey(qs,p)||"text"](H,n);return!$&&_&&_(),await new Promise((X,W)=>{cy(X,W,{data:F,headers:ve.from(H.headers),status:H.status,statusText:H.statusText,config:n,request:A})})}catch(Y){throw _&&_(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new ct("Network Error",ct.ERR_NETWORK,n,A),{cause:Y.cause||Y}):ct.from(Y,Y&&Y.code,n,A)}}),uf={http:Pw,xhr:AE,fetch:BE};B.forEach(uf,(n,l)=>{if(n){try{Object.defineProperty(n,"name",{value:l})}catch{}Object.defineProperty(n,"adapterName",{value:l})}});const Am=n=>`- ${n}`,LE=n=>B.isFunction(n)||n===null||n===!1,my={getAdapter:n=>{n=B.isArray(n)?n:[n];const{length:l}=n;let r,s;const c={};for(let f=0;f<l;f++){r=n[f];let d;if(s=r,!LE(r)&&(s=uf[(d=String(r)).toLowerCase()],s===void 0))throw new ct(`Unknown adapter '${d}'`);if(s)break;c[d||"#"+f]=s}if(!s){const f=Object.entries(c).map(([m,v])=>`adapter ${m} `+(v===!1?"is not supported by the environment":"is not available in the build"));let d=l?f.length>1?`since :
`+f.map(Am).join(`
`):" "+Am(f[0]):"as no adapter specified";throw new ct("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return s},adapters:uf};function Mc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Ni(null,n)}function Cm(n){return Mc(n),n.headers=ve.from(n.headers),n.data=zc.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),my.getAdapter(n.adapter||Fl.adapter)(n).then(function(s){return Mc(n),s.data=zc.call(n,n.transformResponse,s),s.headers=ve.from(s.headers),s},function(s){return oy(s)||(Mc(n),s&&s.response&&(s.response.data=zc.call(n,n.transformResponse,s.response),s.response.headers=ve.from(s.response.headers))),Promise.reject(s)})}const gy="1.11.0",tu={};["object","boolean","number","function","string","symbol"].forEach((n,l)=>{tu[n]=function(s){return typeof s===n||"a"+(l<1?"n ":" ")+n}});const jm={};tu.transitional=function(l,r,s){function c(f,d){return"[Axios v"+gy+"] Transitional option '"+f+"'"+d+(s?". "+s:"")}return(f,d,m)=>{if(l===!1)throw new ct(c(d," has been removed"+(r?" in "+r:"")),ct.ERR_DEPRECATED);return r&&!jm[d]&&(jm[d]=!0,console.warn(c(d," has been deprecated since v"+r+" and will be removed in the near future"))),l?l(f,d,m):!0}};tu.spelling=function(l){return(r,s)=>(console.warn(`${s} is likely a misspelling of ${l}`),!0)};function qE(n,l,r){if(typeof n!="object")throw new ct("options must be an object",ct.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let c=s.length;for(;c-- >0;){const f=s[c],d=l[f];if(d){const m=n[f],v=m===void 0||d(m,f,n);if(v!==!0)throw new ct("option "+f+" must be "+v,ct.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ct("Unknown option "+f,ct.ERR_BAD_OPTION)}}const As={assertOptions:qE,validators:tu},an=As.validators;let Aa=class{constructor(l){this.defaults=l||{},this.interceptors={request:new xm,response:new xm}}async request(l,r){try{return await this._request(l,r)}catch(s){if(s instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=c.stack?c.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(l,r){typeof l=="string"?(r=r||{},r.url=l):r=l||{},r=Da(this.defaults,r);const{transitional:s,paramsSerializer:c,headers:f}=r;s!==void 0&&As.assertOptions(s,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean)},!1),c!=null&&(B.isFunction(c)?r.paramsSerializer={serialize:c}:As.assertOptions(c,{encode:an.function,serialize:an.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),As.assertOptions(r,{baseUrl:an.spelling("baseURL"),withXsrfToken:an.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let d=f&&B.merge(f.common,f[r.method]);f&&B.forEach(["delete","get","head","post","put","patch","common"],A=>{delete f[A]}),r.headers=ve.concat(d,f);const m=[];let v=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(r)===!1||(v=v&&_.synchronous,m.unshift(_.fulfilled,_.rejected))});const p=[];this.interceptors.response.forEach(function(_){p.push(_.fulfilled,_.rejected)});let g,x=0,R;if(!v){const A=[Cm.bind(this),void 0];for(A.unshift(...m),A.push(...p),R=A.length,g=Promise.resolve(r);x<R;)g=g.then(A[x++],A[x++]);return g}R=m.length;let N=r;for(x=0;x<R;){const A=m[x++],_=m[x++];try{N=A(N)}catch(j){_.call(this,j);break}}try{g=Cm.call(this,N)}catch(A){return Promise.reject(A)}for(x=0,R=p.length;x<R;)g=g.then(p[x++],p[x++]);return g}getUri(l){l=Da(this.defaults,l);const r=fy(l.baseURL,l.url,l.allowAbsoluteUrls);return ry(r,l.params,l.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(l){Aa.prototype[l]=function(r,s){return this.request(Da(s||{},{method:l,url:r,data:(s||{}).data}))}});B.forEach(["post","put","patch"],function(l){function r(s){return function(f,d,m){return this.request(Da(m||{},{method:l,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:d}))}}Aa.prototype[l]=r(),Aa.prototype[l+"Form"]=r(!0)});let HE=class yy{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(f){r=f});const s=this;this.promise.then(c=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](c);s._listeners=null}),this.promise.then=c=>{let f;const d=new Promise(m=>{s.subscribe(m),f=m}).then(c);return d.cancel=function(){s.unsubscribe(f)},d},l(function(f,d,m){s.reason||(s.reason=new Ni(f,d,m),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const r=this._listeners.indexOf(l);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const l=new AbortController,r=s=>{l.abort(s)};return this.subscribe(r),l.signal.unsubscribe=()=>this.unsubscribe(r),l.signal}static source(){let l;return{token:new yy(function(c){l=c}),cancel:l}}};function kE(n){return function(r){return n.apply(null,r)}}function YE(n){return B.isObject(n)&&n.isAxiosError===!0}const of={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(of).forEach(([n,l])=>{of[l]=n});function vy(n){const l=new Aa(n),r=Zg(Aa.prototype.request,l);return B.extend(r,Aa.prototype,l,{allOwnKeys:!0}),B.extend(r,l,null,{allOwnKeys:!0}),r.create=function(c){return vy(Da(n,c))},r}const Mt=vy(Fl);Mt.Axios=Aa;Mt.CanceledError=Ni;Mt.CancelToken=HE;Mt.isCancel=oy;Mt.VERSION=gy;Mt.toFormData=Ws;Mt.AxiosError=ct;Mt.Cancel=Mt.CanceledError;Mt.all=function(l){return Promise.all(l)};Mt.spread=kE;Mt.isAxiosError=YE;Mt.mergeConfig=Da;Mt.AxiosHeaders=ve;Mt.formToJSON=n=>uy(B.isHTMLForm(n)?new FormData(n):n);Mt.getAdapter=my.getAdapter;Mt.HttpStatusCode=of;Mt.default=Mt;const{Axios:c4,AxiosError:f4,CanceledError:d4,isCancel:h4,CancelToken:p4,VERSION:m4,all:g4,Cancel:y4,isAxiosError:v4,spread:b4,toFormData:x4,AxiosHeaders:S4,HttpStatusCode:w4,formToJSON:E4,getAdapter:R4,mergeConfig:T4}=Mt,QE=Mt.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});async function GE(n,l){try{return(await QE.post("/login",{usernameOrEmail:n,password:l})).data}catch(r){throw Mt.isAxiosError(r)?new Error(r.response?.data?.message??"로그인 실패"):new Error("알수없는 에러")}}Mt.defaults.headers.common.Accept="application/json";const $E=async(n,l,r)=>{try{const{data:s}=await Mt.post("/api/signup",{username:n,email:l,password:r},{headers:{"Content-Type":"application/json"}});return s}catch(s){throw console.error("회원가입 에러:",s.response||s),s}},by=async n=>{try{const{data:l}=await Mt.get("/api/me",{headers:{Authorization:`Bearer ${n}`}});return l}catch(l){throw console.error("/me 조회 에러:",l.response||l),l}},ys="user";function XE(){const[n,l]=w.useState(null),[r,s]=w.useState(null),[c,f]=w.useState(!1),[d,m]=w.useState(null);w.useEffect(()=>{const x=localStorage.getItem(ys);if(x)try{const R=JSON.parse(x);l(R),R.accessToken&&v(R.accessToken)}catch{localStorage.removeItem(ys)}},[]);const v=w.useCallback(async x=>{try{const R=await by(x);s(R)}catch(R){console.error("사용자 정보 가져오기 실패:",R),s(null)}},[]),p=w.useCallback(async(x,R)=>{f(!0),m(null);try{const N=await GE(x,R);l(N),localStorage.setItem(ys,JSON.stringify(N)),await v(N.accessToken)}catch(N){throw new Error(N.message)}finally{f(!1)}},[v]),g=w.useCallback(()=>{l(null),s(null),localStorage.removeItem(ys)},[]);return{user:n,me:r,token:n?.accessToken||null,logIn:p,logOut:g,loading:c,error:d}}const xy=w.createContext(void 0),Sy=({children:n})=>{const l=XE();return y.jsx(xy.Provider,{value:l,children:n})},na=()=>{const n=w.useContext(xy);if(!n)throw new Error("useAuth는 <AuthProvider> 안에서 사용되어야 합니다.");return n},KE=({topN:n=5})=>{const{me:l,token:r}=na(),[s,c]=w.useState(null),[f,d]=w.useState(!1),[m,v]=w.useState(null);return w.useEffect(()=>{if(!l?.userId||!r)return;(async()=>{d(!0),v(null);try{const g=await fw(l.userId,n);g&&g.results?c(g):v("추천 데이터를 불러올 수 없습니다.")}catch{v("추천 데이터 요청 중 오류가 발생했습니다.")}finally{d(!1)}})()},[l?.userId,r,n]),!l?.userId||!r?null:f?y.jsx("div",{children:"추천 아이템 로딩 중..."}):m?y.jsx("div",{children:m}):s?y.jsxs("div",{children:[y.jsxs("h2",{children:["추천 아이템 (",s.results.length,")"]}),y.jsx("ul",{children:s.results.map((p,g)=>y.jsxs("li",{children:[y.jsx("strong",{children:p.movieTitle??"제목 없음"}),p.reason&&y.jsxs("span",{children:[" - ",p.reason]})]},g))})]}):y.jsx("div",{children:"추천 데이터가 없습니다."})},VE=async(n,l)=>{const r=[];for(const s of n.results)if(s.saleId)try{const c=await Xg(s.saleId);r.push(c)}catch(c){console.warn(`Sale ID ${s.saleId}를 가져올 수 없습니다:`,c)}return r};function ZE(n,l){return Mf({queryKey:["infiniteRecommendations",n],queryFn:async()=>{if(!n||!l)throw new Error("사용자 ID 또는 토큰이 없습니다");const r=await _2(n,l,50),s=await VE(r);return{recommendations:r,products:s}},enabled:!!n&&!!l,staleTime:300*1e3,gcTime:600*1e3})}async function JE(n,l){try{const r=await fetch("/api/reviews",{method:"POST",headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){const c=await r.text();throw new Error(`서버 에러 (${r.status}): ${c}`)}const s=r.headers.get("content-type");if(s&&s.includes("application/json")){const c=await r.text();if(c.trim())return JSON.parse(c)}return}catch(r){throw r}}async function FE(n){return await za(`/reviews?salesId=${encodeURIComponent(n)}`)}async function PE(n){return await za(`/reviews?userId=${encodeURIComponent(n)}`)}const WE=async(n,l)=>{const r=await PE(n),s=[];for(const c of r)if(c.salesId)try{const f=await Xg(c.salesId);s.push({review:c,product:f})}catch(f){console.warn(`Sale ID ${c.salesId}를 가져올 수 없습니다:`,f)}return s};function wy(n,l){return Mf({queryKey:["userReviews",n],queryFn:()=>WE(n),staleTime:120*1e3,gcTime:300*1e3,enabled:n>0&&!!l})}const IE=({userId:n,token:l})=>{const{data:r,error:s,isLoading:c}=ZE(n,l),[f,d]=w.useState(10),m=w.useRef(null),v=w.useMemo(()=>r?.products?r.products.slice(0,f):[],[r?.products,f]),p=g=>{if(m.current){const x=m.current.clientWidth,R=m.current.scrollLeft,N=m.current.scrollWidth-m.current.clientWidth;if(g==="right"&&R>=N-10&&r?.products&&f<r.products.length){d(A=>Math.min(A+5,r.products.length)),setTimeout(()=>{m.current&&m.current.scrollBy({left:x,behavior:"smooth"})},100);return}m.current.scrollBy({left:g==="right"?x:-x,behavior:"smooth"})}};if(c)return y.jsx("div",{style:{width:"100%"},children:y.jsx(Oi,{children:y.jsx(Kl,{type:"enhanced",message:"추천 상품을 불러오는 중..."})})});if(s)throw s instanceof Error?s:new Error("추천 데이터를 불러오는 중 오류가 발생했습니다.");return!r?.products||r.products.length===0?y.jsx("div",{style:{width:"100%"},children:y.jsx(Oi,{children:"추천 결과가 없습니다"})}):y.jsx(jg,{children:y.jsxs(Tg,{children:[y.jsx(Us,{left:!0,onClick:()=>p("left"),children:"◀"}),y.jsx(Ag,{children:y.jsx(Og,{ref:m,children:v.map(g=>y.jsx(zg,{product:g},g.id))})}),y.jsx(Us,{onClick:()=>p("right"),children:"▶"})]})})},tR=({userId:n,token:l})=>{const{data:r,isLoading:s}=wy(n,l),c=je();return s?y.jsx("div",{style:{width:"100%"},children:y.jsx(Oi,{children:y.jsx(Kl,{type:"enhanced",message:"리뷰 데이터를 불러오는 중..."})})}):(r?.length??0)<5?y.jsxs("div",{style:{width:"100%"},children:[y.jsx(ef,{children:"개인 추천 안내"}),y.jsxs(Oi,{children:["추천을 위해 상품 리뷰 또는 온보딩을 진행해 주세요",y.jsx(Cg,{onClick:()=>c("/static/Onboarding"),children:"Onboarding"}),y.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"(온보딩을 완료했는데도 이 메세지가 나온다면 새로고침을 눌러주세요)"})]})]}):y.jsx(IE,{userId:n,token:l})},eR=()=>{const{token:n,me:l}=na(),r=je(),s=Qe();return!n||!l?y.jsx("div",{style:{width:"100%"},children:y.jsxs(Oi,{children:["로그인하고 맞춤 추천을 받아보세요!",y.jsx(Cg,{onClick:()=>r("/static/Login",{state:{from:s.pathname}}),children:"login"})]})}):y.jsx(tR,{userId:l.userId,token:n})},nR=()=>y.jsxs(y.Fragment,{children:[y.jsx(q2,{}),y.jsx(nw,{}),y.jsx(Oa,{h:48}),y.jsxs(Mi,{children:[y.jsx("div",{style:{width:"100%"},children:y.jsx(ef,{children:"추천 상품"})}),y.jsx(nf,{fallback:y.jsx("div",{children:"상품을 불러오는중 오류가 발생했습니다"}),children:y.jsx(eR,{})}),y.jsx(hm,{}),y.jsx("div",{style:{width:"100%"},children:y.jsx(ef,{children:"인기순"})}),y.jsx(nf,{fallback:y.jsx("div",{children:"상품을 불러오는중 오류가 발생했습니다"}),children:y.jsx(w.Suspense,{fallback:y.jsx(Oi,{children:y.jsx(Kl,{type:"enhanced",message:"인기 상품을 불러오고 있어요..."})}),children:y.jsx(L2,{})})}),y.jsx(hm,{}),y.jsx(KE,{})]})]}),aR=_S`

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
    background-color: ${et.secondary};
  }


  body {
    margin: 0;

  }

  *{
    box-sizing: border-box;
    color:${et.accent};
  }

  h2{
    color:${et.primary}
  }
`,iR=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #cfcfcfff;
  position: relative;
`;O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: #cfcfcfff;
  position: relative;
  top: 0;
`;O.div`
  background: url("/chair-blur.jpg") no-repeat center;
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;const lR=O.div`
  position: relative;
  z-index: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 320px;
`,rR=O.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`,Dm=O.input`
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
    border-color: ${et.mainDeepBlue}; /* 클릭/포커스 시 강조 */
    transform: scale(0.98);
  }
`,sR=O.button`
  height: 48px;
  background-color: ${et.mainLightBlue};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0a77e5ff;
  }
`,uR=O.div`
  text-align: center;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
`,oR=O.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`,cR=O.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  color: #dcdcdc;
`;O.span`
  color: #aaa;
`;const fR=O.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;O.pre`
  background: #f4f4f4;
  border: 1px dashed #bbb;
  padding: 12px;
  border-radius: 6px;
  margin-top: 12px;
  font-size: 12px;
  white-space: pre-wrap;
`;const dR=O.form`
  display: contents;
`;O.p`
  color: #ef4444;
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  padding: 8px;
  background: #fef2f2;
  border-radius: 4px;
  border: 1px solid #fecaca;
`;const hR=zi`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;zi`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;const pR=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  animation: ${hR} 0.3s ease-out;
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
`,mR=O.div`
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
`,gR=O.div`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  word-break: break-word;
`,yR=O.button`
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
`,vR=O.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,bR=({id:n,message:l,type:r,duration:s=3e3,onClose:c})=>(w.useEffect(()=>{const f=setTimeout(()=>{c(n)},s);return()=>clearTimeout(f)},[n,s,c]),y.jsxs(pR,{$type:r,children:[y.jsxs(mR,{$type:r,children:[r==="success"&&"✓",r==="error"&&"✕",r==="warning"&&"⚠",r==="info"&&"ℹ"]}),y.jsx(gR,{children:l}),y.jsx(yR,{onClick:()=>c(n),children:"×"})]})),Ey=w.createContext(void 0),xR=({children:n})=>{const[l,r]=w.useState([]),s=w.useCallback(g=>{r(x=>x.filter(R=>R.id!==g))},[]),c=w.useCallback((g,x,R)=>{const A={id:Math.random().toString(36).substr(2,9),message:g,type:x,duration:R};r(_=>[..._,A])},[]),f=w.useCallback((g,x)=>{c(g,"success",x)},[c]),d=w.useCallback((g,x)=>{c(g,"error",x)},[c]),m=w.useCallback((g,x)=>{c(g,"warning",x)},[c]),v=w.useCallback((g,x)=>{c(g,"info",x)},[c]),p={showToast:c,showSuccess:f,showError:d,showWarning:m,showInfo:v};return y.jsxs(Ey.Provider,{value:p,children:[n,y.jsx(vR,{children:l.map(g=>y.jsx(bR,{id:g.id,message:g.message,type:g.type,duration:g.duration,onClose:s},g.id))})]})},Ry=()=>{const n=w.useContext(Ey);if(n===void 0)throw new Error("useToast must be used within a ToastProvider");return n},SR=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${et.secondary};
  position: relative;
`,Ty=O.h1`
  position: absolute;
  top: 0px;
  left: 30px;
  padding: 20px;
  font-weight: 900;
  text-align: left;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${et.mainLightBlue};
  font-size: 32px;
`,wR=O.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`,ER=O.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,_c=O.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #444;
`,Uc=O.input`
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
    border-color: ${et.mainDeepBlue}; /* 포커스 시 강조 */
  }

  &:active {
    transform: scale(0.98); /* 클릭 감각 */
  }
`,RR=O.button`
  margin-top: 25px;
  background: ${et.mainBlue};
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
`;O.div`
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({$type:n})=>n==="success"?"green":n==="error"?"red":"black"};
`;const TR=()=>{const[n,l]=w.useState(""),[r,s]=w.useState(""),[c,f]=w.useState(""),d=je(),m=Qe(),v=na(),p=Ry();w.useEffect(()=>{if(v.token&&v.me){const x=m.state?.from||"/static/";d(x,{replace:!0})}},[v.token,v.me,d,m.state]);const g=async x=>{x.preventDefault(),f("");try{await v.logIn(n,r),p.showSuccess("로그인에 성공했습니다!"),setTimeout(()=>{const R=m.state?.from||"/static/";d(R,{replace:!0})},1e3)}catch(R){console.log("에러"),console.log(R.message),p.showError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.")}};return y.jsx(Vs,{children:y.jsxs(iR,{children:[y.jsx(Ty,{onClick:()=>d("/static/"),children:"L.B"}),y.jsxs(lR,{children:[y.jsx(rR,{children:"LOGIN"}),y.jsxs(dR,{onSubmit:g,children:[y.jsx(Dm,{type:"text",placeholder:"아이디 또는 이메일",value:n,onChange:x=>l(x.target.value),required:!0}),y.jsx(Dm,{type:"password",placeholder:"비밀번호",value:r,onChange:x=>s(x.target.value),required:!0}),y.jsx(sR,{type:"submit",disabled:v.loading,children:v.loading?"로그인 중...":"로그인"})]}),y.jsxs(uR,{children:["간편하게 시작하기",y.jsx(oR,{})]}),y.jsx(cR,{children:y.jsx(fR,{onClick:()=>d("/static/Signup"),children:"회원가입"})})]})]})})};function OR(){const{logIn:n,token:l,me:r}=na(),[s,c]=w.useState("admin"),[f,d]=w.useState("admin@naver.com"),[m,v]=w.useState("password"),[p,g]=w.useState(""),[x,R]=w.useState(""),N=async()=>{g("⏳ 로그인 중..."),R("");try{await n(s,m),g("✅ 로그인 성공"),R(JSON.stringify({token:l,me:r},null,2))}catch(j){g("❌ 로그인 실패"),R(j?.message||String(j))}},A=async()=>{g("⏳ 회원가입 중..."),R("");try{const j=await $E(s,f,m);g("✅ 회원가입 성공"),R(JSON.stringify(j,null,2))}catch(j){g("❌ 회원가입 실패"),R(j?.response?.data?JSON.stringify(j.response.data,null,2):String(j))}},_=async()=>{g("⏳ /me 조회 중..."),R("");try{if(!l){g("❗ 토큰 없음. 로그인 먼저");return}const j=await by(l);g("✅ /me 성공"),R(JSON.stringify(j,null,2))}catch(j){g("❌ /me 실패"),R(j?.response?.data?JSON.stringify(j.response.data,null,2):String(j))}};return y.jsxs("div",{style:{maxWidth:420,margin:"40px auto",padding:20,border:"1px solid #e5e7eb",borderRadius:10,background:"#fff"},children:[y.jsx("h1",{children:"로그인"}),y.jsx("input",{value:s,onChange:j=>c(j.target.value),placeholder:"아이디",style:{width:"100%",padding:10,marginBottom:10}}),y.jsx("input",{value:f,onChange:j=>d(j.target.value),placeholder:"이메일",style:{width:"100%",padding:10,marginBottom:10}}),y.jsx("input",{value:m,onChange:j=>v(j.target.value),placeholder:"비밀번호",type:"password",style:{width:"100%",padding:10,marginBottom:10}}),y.jsxs("div",{style:{display:"flex",gap:8},children:[y.jsx("button",{onClick:N,style:{flex:1,padding:10,background:"#6366f1",color:"#fff"},children:"로그인"}),y.jsx("button",{onClick:A,style:{flex:1,padding:10,background:"#0ea5e9",color:"#fff"},children:"회원가입"}),y.jsx("button",{onClick:_,style:{flex:1,padding:10,background:"#0ea5e9",color:"#fff"},children:"/me 조회"})]}),y.jsx("p",{children:p}),y.jsx("pre",{style:{background:"#0b1020",color:"#d1d5db",padding:10,borderRadius:6,overflow:"auto"},children:x})]})}const AR=O.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 0;
`,CR=O.div`
  margin: 5px;
`,jR=O.div`
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
`,DR=O.div`
  flex: 0 0 120px;
  height: 160px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 0 0 100px;
    height: 140px;
  }

`,zR=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`,MR=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`,_R=O.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Nc=O.div`
  font-size: 14px;
  color: #555;
`,UR=O.span`
  font-size: 20px;
  font-weight: bold;
  color: ${et.mainDeepBlue};
`,zm=O.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: calc(100% - 40px);
  border-left: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
`,NR=O.span`
  font-size: 13px;
  color: #555;
`;O.span`
  font-size: 11px;
  color: #fff;
  background: #ef4444;
  padding: 2px 6px;
  border-radius: 4px;
`;O.span`
  img {
    height: 16px;
  }
`;function BR({product:n}){const l=je(),r=()=>{l(`/static/DetailPage/${n.movieId}`,{state:{product:n}})},s={U:"-",B:"BluRay (1080, FHD)",3:"3D-BluRay",4:"4kBluRay (UHD)"};return y.jsx(CR,{children:y.jsxs(jR,{onClick:r,children:[y.jsx(DR,{children:y.jsx(zR,{src:n.imageLink??void 0})}),y.jsxs(MR,{children:[y.jsx(_R,{children:n.blurayTitle}),y.jsxs(UR,{children:[n.price,"원"]}),y.jsx(Oa,{h:20}),y.jsxs(Nc,{children:[" 해상도 : ",s[n.quality??""]||n.quality]}),y.jsxs(Nc,{children:[" 지역 코드 : ",n.regionCode?n.regionCode:"-"]}),n.isLimitedEdition&&y.jsx(Nc,{children:"한정판!"})]}),y.jsx(zm,{}),y.jsx(zm,{children:y.jsx(NR,{children:n.siteName})})]})})}function LR(){const{keyWord:n}=Xm();if(n===void 0)return y.jsx("div",{children:"Invalid ID"});const{data:l}=Vg(n),r=l||[];return console.log(r.length),r.length===0?y.jsx("div",{children:"검색 결과가 없습니다"}):y.jsx(AR,{children:r.map(s=>y.jsx(BR,{product:s},s.id))})}function qR(){return y.jsxs(Mi,{children:[y.jsx(Oa,{h:60}),y.jsx(nf,{fallback:y.jsx("div",{children:" 오류 발생"}),children:y.jsx(w.Suspense,{fallback:y.jsx(Kl,{}),children:y.jsx(LR,{})})})]})}const HR=O.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px;
  background-color: white;
  border-radius: 20px;
  margin: 0 auto;
`,kR=O.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`,YR=O.div`
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,QR=O.div`
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
`,GR=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`,Mm=O.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a202c;
  line-height: 1.3;
`,$R=O.div`
  display: flex;
  align-items: baseline;

`,XR=O.span`
  font-size: 24px;
  font-weight: 700;
  color: ${et.mainBlue};
`,KR=O.span`
  font-size: 14px;
  color: #64748b;
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
`,Bc=O.section`
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
`,_m=O.div`
  font-size: 14px;
  color: #4a5568;
  line-height: 1.6;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;

`,VR=O.table`
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
`,ZR=O.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`,JR=O.textarea`
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
    border-color: ${et.mainBlue};
  }

  &::placeholder {
    color: #94a3b8;
  }
`,FR=O.button`
  background: white;
  color: ${et.mainBlue};
  border: none;
  padding: 10px;
  border-radius: 39% 20px 30% 36%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover {
    background: ${et.mainBlue};
    color: white;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`,PR=O.div`
  margin-bottom: 12px;
  padding: 8px;
  border-bottom: 1px solid #eee;
  border-radius: 4px;
`,WR=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,IR=O.span`
  font-weight: bold;
`,tT=O.div`
  margin-bottom: 4px;
`,eT=O.div`
  font-size: 12px;
  color: #999;
`,nT=O.div`
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #666;
`,aT=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,iT=O.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;O.span`
  font-size: 20px;
  color: ${n=>n.filled?"#fbbf24":"#e2e8f0"};
  cursor: pointer;
  transition: color 0.2s ease;
`;const lT=O.span`
  font-size: 12px;
  color: #64748b;
`;function rT(n){return Zs({queryKey:["getMovie",n],queryFn:()=>U2(n)})}function sT(n){return Mf({queryKey:["reviews","salesId",n],queryFn:()=>FE(n),staleTime:120*1e3,gcTime:300*1e3})}function Oy(){const n=zf();return z2({mutationFn:({review:l,token:r})=>JE(l,r),onSuccess:(l,r)=>{n.invalidateQueries({queryKey:["reviews","salesId",r.review.salesId]})}})}const Ay=({rating:n,size:l="medium",showScore:r=!0})=>{const c={small:"14px",medium:"16px",large:"18px"}[l],f=d=>n>=d?y.jsx("span",{style:{color:"#fbbf24",fontSize:c},children:"★"},d):n>=d-.5?y.jsxs("span",{style:{color:"#e2e8f0",fontSize:c,position:"relative",display:"inline-block"},children:["★",y.jsx("span",{style:{position:"absolute",left:"0",top:"0",width:"50%",overflow:"hidden",color:"#fbbf24"},children:"★"})]},d):y.jsx("span",{style:{color:"#e2e8f0",fontSize:c},children:"★"},d);return y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx("div",{style:{display:"flex",alignItems:"center",gap:"2px"},children:[1,2,3,4,5].map(f)}),r&&y.jsxs("span",{style:{fontSize:"11px",color:"#64748b",fontWeight:"600",background:"#f1f5f9",padding:"2px 6px",borderRadius:"6px"},children:[n.toFixed(1),"점"]})]})};function uT(){const n=Qe();je();const l=n.state?.product,{parm:r}=Xm(),{token:s,me:c}=na();if(!l)return y.jsx("div",{children:"상품 정보를 불러올 수 없습니다."});const{data:f}=rT(l.movieId??0),{data:d,isLoading:m}=sT(l.id),v=Oy(),[p,g]=w.useState(0),[x,R]=w.useState(""),N=async A=>{if(A.preventDefault(),!s){alert("로그인이 필요합니다.");return}if(p===0){alert("별점을 선택해주세요.");return}try{await v.mutateAsync({review:{salesId:l.id,rating:p,reviewComment:x||null},token:s}),alert("리뷰가 등록되었습니다!"),g(0),R("")}catch(_){let j="리뷰 등록에 실패했습니다.";_ instanceof Error&&(j+=`
에러: ${_.message}`),alert(j)}};return y.jsxs(Mi,{children:[y.jsx(Oa,{h:70}),y.jsxs(HR,{children:[y.jsxs(YR,{children:[y.jsx(QR,{children:y.jsx(kR,{src:l.imageLink??""})}),y.jsxs(GR,{children:[y.jsx(Mm,{children:l.blurayTitle}),y.jsx(Mm,{children:f.title}),y.jsx($R,{children:y.jsxs(XR,{children:[l.price,"원"]})}),y.jsx(Oa,{h:4}),y.jsx(KR,{onClick:()=>window.open(String(l.siteUrl),"_blank"),children:l.siteName})]})]}),y.jsxs(Bc,{children:[y.jsx("h2",{children:"작품 상세정보"}),y.jsx(VR,{children:y.jsxs("tbody",{children:[y.jsxs("tr",{children:[y.jsx("th",{children:"러닝타임"}),y.jsx("td",{children:f.runningTime||"-"})]}),y.jsxs("tr",{children:[y.jsx("th",{children:"감독"}),y.jsx("td",{children:f.director||"-"})]}),y.jsxs("tr",{children:[y.jsx("th",{children:"해상도"}),y.jsx("td",{children:l.quality||"-"})]}),y.jsxs("tr",{children:[y.jsx("th",{children:"지역코드"}),y.jsx("td",{children:l.regionCode||"-"})]})]})})]}),y.jsxs(Bc,{children:[y.jsx("h2",{children:"리뷰"}),s?y.jsxs(ZR,{onSubmit:N,children:[y.jsxs(aT,{children:[y.jsx("label",{style:{fontSize:"14px",fontWeight:"600"},children:"별점:"}),y.jsx(iT,{children:[1,2,3,4,5].map(A=>y.jsxs("span",{onClick:()=>{p===A?g(A-.5):(A-.5,g(A))},style:{fontSize:"20px",cursor:"pointer",transition:"all 0.2s ease",position:"relative",display:"inline-block"},children:[y.jsx("span",{style:{color:"#e2e8f0"},children:"★"}),p>=A?y.jsx("span",{style:{position:"absolute",left:"0",top:"0",color:"#fbbf24"},children:"★"}):p>=A-.5?y.jsx("span",{style:{position:"absolute",left:"0",top:"0",width:"50%",overflow:"hidden",color:"#fbbf24"},children:"★"}):null]},A))}),y.jsx(lT,{children:p>0?`${p}점`:"별점을 선택해주세요"})]}),y.jsx(JR,{placeholder:"리뷰를 작성해주세요...",value:x,onChange:A=>R(A.target.value)}),y.jsx(FR,{type:"submit",disabled:v.isPending,children:v.isPending?"등록 중...":"리뷰 등록"})]}):y.jsx(nT,{children:"리뷰를 작성하려면 로그인이 필요합니다."}),y.jsx(Oa,{h:20}),y.jsx(_m,{children:m?y.jsx("div",{children:"리뷰를 불러오는 중..."}):d&&d.length>0?y.jsx("div",{children:d.map((A,_)=>y.jsxs(PR,{children:[y.jsxs(WR,{children:[y.jsx(IR,{children:A.username||`사용자${A.userId}`}),y.jsx(Ay,{rating:A.rating||0,size:"small",showScore:!0})]}),A.reviewComment&&y.jsx(tT,{children:A.reviewComment}),y.jsx(eT,{children:A.createdAt?new Date(A.createdAt).toLocaleString("ko-KR"):""})]},_))}):"아직 등록된 리뷰가 없습니다."})]}),y.jsxs(Bc,{children:[y.jsx("h2",{children:"외부 링크"}),y.jsx(_m,{children:y.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[y.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"YES24"}),y.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"Aladin"}),y.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"Amazon JP"}),y.jsx("a",{className:"button",href:"#",target:"_blank",rel:"noopener noreferrer",children:"공식 사이트"})]})})]})]})]})}const oT=({children:n})=>{const{token:l}=na();return l?n:y.jsx(Jb,{to:"/static/Login",replace:!0})};O.header`
  padding: 20px 0;
  background: #fafafa;
`;O.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;O.a`
  color: ${et.mainDeepBlue};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${et.mainBlue};
    text-decoration: underline;
  }
`;const Lc=O.section`
  margin: 32px 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`,Um=O.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${et.mainDeepBlue};
  margin: 0 0 16px 0;
  line-height: 1.5;
  letter-spacing: 0.2px;
  padding-left: 20px;
`,cT=O.div`
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
    border-color: ${et.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`,fT=O.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${et.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  border: 2px solid ${et.mainBlue}20;
  box-shadow: 0 2px 4px rgba(28, 118, 207, 0.15);

  &:hover {
    background: ${et.mainDeepBlue};
  }
`,dT=O.div`
  flex: 1;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${et.mainDeepBlue};
    margin: 0 0 8px 0;
    line-height: 1.3;
  }
  
  .email {
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
  }
`,hT=O.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`,Nm=O.button.withConfig({shouldForwardProp:n=>!["primary"].includes(n)})`
  padding: 12px 20px;
  border: ${n=>n.primary?"none":`1px solid ${et.mainBlue}`};
  background: ${n=>n.primary?et.mainBlue:"transparent"};
  color: ${n=>n.primary?"white":et.mainBlue};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  box-shadow: ${n=>n.primary?"0 1px 2px rgba(28, 118, 207, 0.1)":"none"};

  &:hover {
    background: ${n=>n.primary?et.mainDeepBlue:et.mainBlue};
    color: white;
    box-shadow: ${n=>n.primary?"0 2px 4px rgba(28, 118, 207, 0.2)":"0 1px 2px rgba(28, 118, 207, 0.1)"};
  }
`;O.div`
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
`;O.div`
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
    border-color: ${et.mainBlue}40;
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
    color: ${et.mainBlue};
  }

  .card-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;const qc=O.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  color: #666;
  border: 1px solid #f1f5f9;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #fafafa;
    border-color: ${et.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  h3 {
    color: ${et.mainDeepBlue};
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 12px 0;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }
`,pT=O.footer`
  margin-top: 60px;
  padding: 32px 20px;
  color: #666;
  text-align: center;
  background: #fafafa;
  font-size: 14px;
  font-weight: 500;
`,mT=O.div`
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
`,gT=O.div`
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
    background: ${et.mainBlue};
    border-radius: 2px;
    transition: background 0.2s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${et.mainDeepBlue};
  }

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,Bm=O.button.withConfig({shouldForwardProp:n=>!["left"].includes(n)})`
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
  color: ${et.mainBlue};
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
`,yT=O.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 100%;
`,vT=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  transition: transform 0.3s ease;
`,bT=O.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
  border-radius: 12px 12px 0 0;
`,xT=O.div`
  padding: 16px;
  flex: 1;
`,ST=O.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1a202c;
  line-height: 1.3;
`,wT=O.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
`,ET=O.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
`,RT=O.div`
  font-size: 13px;
  color: #64748b;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,TT=O.div`
  font-size: 11px;
  color: #94a3b8;
  text-align: right;
  font-weight: 500;
  margin-top: auto;
`,OT=O.div`
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
    border-color: ${et.mainBlue}40;
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
    color: ${et.mainBlue};
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
`;O.div`
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;O.h2`
  color: #64748b;
  margin-bottom: 16px;
`;O.p`
  color: #94a3b8;
  margin-bottom: 24px;
`;const AT=O.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
`,CT=O.div`
  text-align: center;
  padding: 20px;
  color: #64748b;
`,jT=()=>{const{logOut:n,me:l,token:r}=na(),s=je(),c=w.useRef(null);l?.userId;const{data:f,isLoading:d}=wy(l?.userId||0,r||""),m=()=>{n(),s("/static/login")},v=p=>{if(c.current){const g=c.current.clientWidth;c.current.scrollBy({left:p==="right"?g:-g,behavior:"smooth"})}};return y.jsxs(Mi,{children:[y.jsx(Oa,{h:48}),y.jsxs(kS,{children:[y.jsx(Lc,{children:y.jsxs(cT,{children:[y.jsx(fT,{children:(l?.username||l?.usernameOrEmail||"사용자").charAt(0).toUpperCase()}),y.jsxs(dT,{children:[y.jsx("h1",{children:l?.username||l?.usernameOrEmail||"사용자"}),y.jsx("div",{className:"email",children:l?.email||""}),y.jsx(AT,{children:l?.role||"일반 사용자"}),y.jsxs(hT,{children:[y.jsx(Nm,{primary:!0,children:"프로필 수정"}),y.jsx(Nm,{onClick:m,children:"로그아웃"})]})]})]})}),y.jsxs(Lc,{children:[y.jsx(Um,{children:"내가 리뷰한 상품"}),d?y.jsx(qc,{children:y.jsx(CT,{children:"리뷰를 불러오는 중..."})}):f&&f.length>0?y.jsxs(mT,{children:[y.jsx(Bm,{left:!0,onClick:()=>v("left"),children:"◀"}),y.jsx(gT,{ref:c,children:f.map((p,g)=>y.jsxs(OT,{onClick:()=>s(`/static/DetailPage/${p.product.id}`,{state:{product:p.product}}),children:[y.jsxs(yT,{children:[y.jsx(vT,{src:p.product.imageLink||"",alt:p.product.blurayTitle||""}),y.jsx(bT,{})]}),y.jsxs(xT,{children:[y.jsx(ST,{children:p.product.blurayTitle}),y.jsxs(wT,{children:[y.jsx(ET,{children:"내 평점:"}),y.jsx(Ay,{rating:p.review.rating||0,size:"medium",showScore:!0})]}),p.review.reviewComment&&y.jsxs(RT,{children:['"',p.review.reviewComment,'"']}),y.jsx(TT,{children:p.review.createdAt?new Date(p.review.createdAt).toLocaleDateString("ko-KR"):""})]})]},g))}),y.jsx(Bm,{onClick:()=>v("right"),children:"▶"})]}):y.jsxs(qc,{children:[y.jsx("h3",{children:"아직 리뷰한 상품이 없습니다"}),y.jsx("p",{children:"상품에 리뷰를 남기면 여기에 표시됩니다."})]})]}),y.jsxs(Lc,{children:[y.jsx(Um,{children:"⚙️ 설정"}),y.jsxs(qc,{children:[y.jsx("h3",{children:"알림 및 선호도 설정"}),y.jsx("p",{children:"알림 설정, 추천 선호도, 개인정보 설정을 관리할 수 있습니다."})]})]})]}),y.jsx(pT,{children:"© 2025 Blu-ray Recommender"})]})},DT=()=>{const[n,l]=w.useState(""),[r,s]=w.useState(""),[c,f]=w.useState(""),[d,m]=w.useState(""),[v,p]=w.useState(""),g=je(),x=Ry(),R=async N=>{N.preventDefault(),m(""),p("");try{const A=await Mt.post("/api/signup",{username:n,email:r,password:c});x.showSuccess(A.data||"회원가입이 완료되었습니다!"),setTimeout(()=>{g("/static/Login")},2e3)}catch(A){A.response&&A.response.data?x.showError(`에러: ${A.response.data}`):x.showError("회원가입 중 오류가 발생했습니다.")}};return y.jsx(Vs,{children:y.jsxs(SR,{children:[y.jsx(Ty,{onClick:()=>g("/static/"),children:"L.B"}),y.jsx(wR,{children:"회원가입"}),y.jsxs(ER,{onSubmit:R,children:[y.jsxs(_c,{children:["사용자명",y.jsx(Uc,{type:"text",value:n,onChange:N=>l(N.target.value),required:!0})]}),y.jsxs(_c,{children:["이메일",y.jsx(Uc,{type:"email",value:r,onChange:N=>s(N.target.value),required:!0})]}),y.jsxs(_c,{children:["비밀번호",y.jsx(Uc,{type:"password",value:c,onChange:N=>f(N.target.value),required:!0})]}),y.jsx(RR,{type:"submit",children:"회원가입"})]})]})})},zT=O.div`
  padding: 2rem;
  text-align: center;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,MT=O.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${et.mainBlue};
  font-weight: 600;
`,_T=O.div`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`,UT=O.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  overflow: hidden;
  position: relative;
  background-color: white;
  border-radius: 20px;

`,NT=O.div`
  display: flex;
  gap: 24px;
  width: 200vw; /* 화면 너비의 2배로 설정 */
  animation: ${n=>n.direction==="right"?"flowRight":"flowLeft"} 60s linear infinite;
  margin-bottom: 20px;
  will-change: transform; /* GPU 가속을 위한 최적화 */
  
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
`,BT=O.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  background-color: white;
  border: 3px solid ${et.mainBlue};
  color: ${et.mainBlue};
  border-radius: 25px 38% 24px 22%;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.25s ease;
  min-width: 200px;
  
  &:hover{
    background-color: ${et.mainBlue};
    transform: translateY(-2px);
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
`,LT=O.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
`,qT=O.div`
  padding: 3rem 2rem;
  background-color: ${et.mainBlue};
  width: 100%;
  position: relative;
`,HT=O.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.1;
`,kT=O.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem 0;
  text-align: center;
`,YT=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 600px;
  margin: 0 auto 2rem;
`,QT=O.input`
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
`,GT=O.button`
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
`,$T=O.img`
  width: 24px;
  height: 24px;
`,XT=O.div`
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
`,KT=O.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1.5rem;
  text-align: center;
`,VT=O.div`
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
`,Lm=O.div`
  text-align: center;
  color: #6b7280;
  font-size: 1.2rem;
  padding: 3rem 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
  font-weight: 500;
`,Bf=O.div`
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

`,ZT=O.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
`,JT=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Bf}:hover & {
    transform: scale(1.1);
  }
`,FT=O.div`
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
`,PT=O.div`
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

  ${Bf}:hover & {
    background: linear-gradient(transparent, rgba(0, 132, 255, 0.6));
  }
`,WT=O.h3`
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
`,IT=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,t4=O.span`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`,e4=O.span`
  font-size: 12px;
  color: #e5e7eb;
  font-weight: 500;
`,n4=O.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${et.mainBlue};
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
`,cf=rn.memo(({product:n,isSelected:l,onClick:r,animationDelay:s=0})=>{const c=w.useRef(null);return w.useEffect(()=>{const f=setTimeout(()=>{c.current&&c.current.classList.add("animation-complete")},s*1e3+600);return()=>clearTimeout(f)},[s]),y.jsxs(Bf,{ref:c,isSelected:l,onClick:r,animationDelay:s,children:[y.jsxs(ZT,{children:[y.jsx(JT,{src:n.imageLink??"",alt:n.blurayTitle??""}),l&&y.jsx(FT,{})]}),y.jsxs(PT,{children:[y.jsx(WT,{children:n.blurayTitle}),y.jsxs(IT,{children:[y.jsxs(t4,{children:[n.price?.toLocaleString(),"원"]}),y.jsxs(e4,{children:["해상도: ",n.quality]})]})]}),l&&y.jsx(n4,{children:"✓"})]})});cf.displayName="OnboardingCard";const a4=()=>{const{data:n}=N2(60),[l,r]=w.useState([]),s=je(),c=Qe();w.useRef(null);const[f,d]=w.useState(!0),{token:m,me:v}=na(),p=Oy(),[g,x]=w.useState(!1),[R,N]=w.useState(""),[A,_]=w.useState(""),[j,Y]=w.useState(!1);w.useEffect(()=>{const I=setTimeout(()=>{_(R)},500);return()=>clearTimeout(I)},[R]);const{data:H}=Vg(A&&j?A:""),$=w.useMemo(()=>{if(!n||n.length===0)return[];const I=[];for(let st=0;st<n.length;st+=6)I.push(n.slice(st,st+6));return I.map((st,Ot)=>({products:[...st,...st,...st,...st,...st,...st,...st,...st],direction:Ot%2===0?"right":"left"}))},[n]),F=w.useCallback(I=>{r(st=>st.includes(I)?st.filter(Ot=>Ot!==I):st.length<5?[...st,I]:st)},[]),X=w.useCallback(()=>{if(!R.trim()){Y(!1);return}Y(!0)},[R]),W=w.useCallback(I=>{I.key==="Enter"&&X()},[X]),K=w.useCallback(I=>{N(I.target.value),I.target.value.trim()||Y(!1)},[]),ot=async()=>{if(!m||!v){alert("로그인이 필요합니다."),s("/static/Login",{state:{from:c.pathname}});return}if(l.length===0){alert("최소 1개의 영화를 선택해주세요.");return}x(!0);try{const I=l.map(st=>p.mutateAsync({review:{salesId:st,rating:5,reviewComment:null},token:m}));await Promise.all(I),console.log("리뷰 생성 완료:",l),alert("선호 영화가 등록되었습니다! 이제 맞춤 추천을 받아보세요."),s("/")}catch(I){console.error("리뷰 생성 실패:",I),alert("리뷰 생성 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{x(!1)}};return y.jsx(Vs,{children:y.jsxs(zT,{children:[y.jsx(MT,{children:"좋아하는 영화를 선택해주세요 (최대 5개)"}),y.jsxs(_T,{children:[l.length,"/5 선택됨"]}),y.jsx(UT,{children:$.map((I,st)=>y.jsx(NT,{direction:I.direction,rowIndex:st,children:I.products.map((Ot,Ht)=>y.jsx(cf,{product:Ot,isSelected:l.includes(Ot.id),onClick:()=>F(Ot.id),animationDelay:st*.6+Ht%6*.1},`${Ot.id}-${Ht}`))},st))}),y.jsxs(LT,{children:[y.jsxs(qT,{children:[y.jsx(HT,{children:"원하는 영화를 직접 검색해보세요"}),y.jsx(kT,{children:"당신의 인생영화를 찾아보세요!"}),y.jsxs(YT,{children:[y.jsx(QT,{type:"text",value:R,onChange:K,placeholder:"영화 제목을 입력하세요",onKeyDown:W}),y.jsx(GT,{onClick:X,children:y.jsx($T,{src:"/src/resource/img/search.svg",alt:"search"})})]})]}),j&&y.jsxs(XT,{children:[y.jsx(KT,{children:"검색 결과"}),H?H.length===0?y.jsx(Lm,{children:"검색 결과가 없습니다"}):y.jsx(VT,{children:H.map(I=>y.jsx(cf,{product:I,isSelected:l.includes(I.id),onClick:()=>F(I.id)},I.id))}):y.jsx(Lm,{children:"검색 중..."})]})]}),y.jsx(BT,{disabled:l.length===0||g,onClick:ot,children:g?"리뷰 생성 중...":`완료 (${l.length}/5)`})]})})};function i4(){return y.jsx(w.Suspense,{fallback:y.jsx(Vs,{children:y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#fafafa"},children:y.jsx(Kl,{type:"enhanced",message:"온보딩을 준비하고 있어요...",showProgress:!0})})}),children:y.jsx(a4,{})})}function l4(){return y.jsx(Sy,{children:y.jsx(xR,{children:y.jsxs(xx,{children:[y.jsx(aR,{}),y.jsx(YS,{}),y.jsxs(Pb,{children:[y.jsx(Tn,{path:"/static",element:y.jsx(nR,{})}),y.jsx(Tn,{path:"/static/Login",element:y.jsx(TR,{})}),y.jsx(Tn,{path:"/static/My",element:y.jsx(oT,{children:y.jsx(jT,{})})}),y.jsx(Tn,{path:"/static/LoginPage",element:y.jsx(OR,{})}),y.jsx(Tn,{path:"/static/Signup",element:y.jsx(DT,{})}),y.jsx(Tn,{path:"/static/SearchPage/:keyWord",element:y.jsx(qR,{})}),y.jsx(Tn,{path:"/static/DetailPage/:id",element:y.jsx(uT,{})}),y.jsx(Tn,{path:"/static/Onboarding",element:y.jsx(i4,{})})]})]})})})}const r4=new v2;rb.createRoot(document.getElementById("root")).render(y.jsx(w.StrictMode,{children:y.jsx(b2,{client:r4,children:y.jsx(Sy,{children:y.jsx(l4,{})})})}));
//# sourceMappingURL=index-CVe0S8uU.js.map
