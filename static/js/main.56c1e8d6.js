/*! For license information please see main.56c1e8d6.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},173:(e,t,n)=>{e.exports=n(497)()},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,h(b,v.prototype),b.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,i={},o=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!C.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===i[a]&&(i[a]=l[a]);return{$$typeof:n,type:e,key:o,ref:s,props:i,_owner:S.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,i,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===i?"."+z(l,0):i,k(o)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),T(o,t,a,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(l=0,i=""===i?".":i+":",k(e))for(var c=0;c<e.length;c++){var u=i+z(s=e[c],c);l+=T(s,t,a,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=T(s=s.value,t,a,u=i+z(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function N(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},L={transition:null},M={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:N,forEach:function(e,t,n){N(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=o,t.PureComponent=x,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.act=I,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),i=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)w.call(t,c)&&!C.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,n))c<a&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<a&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,b(e),!h)if(null!==r(c))h=!0,L(w);else{var t=r(u);null!==t&&M(k,t.startTime-e)}}function w(e,n){h=!1,g&&(g=!1,y(j),j=-1),m=!0;var i=f;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!T());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var s=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&a(c),b(n)}else a(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&M(k,d.startTime-n),l=!1}return l}finally{p=null,f=i,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,C=!1,E=null,j=-1,P=5,z=-1;function T(){return!(t.unstable_now()-z<P)}function N(){if(null!==E){var e=t.unstable_now();z=e;var n=!0;try{n=E(!0,e)}finally{n?S():(C=!1,E=null)}}else C=!1}if("function"===typeof x)S=function(){x(N)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,O=A.port2;A.port1.onmessage=N,S=function(){O.postMessage(null)}}else S=function(){v(N,0)};function L(e){E=e,C||(C=!0,S())}function M(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,L(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>o?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(y(j),j=-1):g=!0,M(k,i-o))):(e.sortIndex=s,n(c,e),h||m||(h=!0,L(w))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},497:(e,t,n)=>{"use strict";var r=n(218);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(m,e)||!d.call(f,e)&&(p.test(e)?m[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),P=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var M=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=M&&e[M]||e["@@iterator"])?e:null}var R,D=Object.assign;function _(e){if(void 0===R)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||""}return"\n"+R+e}var F=!1;function B(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(1!==o||1!==s)do{if(o--,0>--s||a[o]!==i[s]){var l="\n"+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_(e):""}function V(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function $(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case w:return"Portal";case E:return"Profiler";case C:return"StrictMode";case T:return"Suspense";case N:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:$(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return $(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ie(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(fe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var we=null,Se=null,Ce=null;function Ee(e){if(e=xa(e)){if("function"!==typeof we)throw Error(i(280));var t=e.stateNode;t&&(t=ka(t),we(e.stateNode,e.type,t))}}function je(e){Se?Ce?Ce.push(e):Ce=[e]:Se=e}function Pe(){if(Se){var e=Se,t=Ce;if(Ce=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function ze(e,t){return e(t)}function Te(){}var Ne=!1;function Ae(e,t,n){if(Ne)return e(t,n);Ne=!0;try{return ze(e,t,n)}finally{Ne=!1,(null!==Se||null!==Ce)&&(Te(),Pe())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=ka(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Le=!1;if(u)try{var Me={};Object.defineProperty(Me,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,Me)}catch(ue){Le=!1}function Ie(e,t,n,r,a,i,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Re=!1,De=null,_e=!1,Fe=null,Be={onError:function(e){Re=!0,De=e}};function Ve(e,t,n,r,a,i,o,s,l){Re=!1,De=null,Ie.apply(Be,arguments)}function $e(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if($e(e)!==e)throw Error(i(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=$e(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return We(a),e;if(o===r)return We(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,qe=a.unstable_cancelCallback,Ge=a.unstable_shouldYield,Xe=a.unstable_requestPaint,Qe=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~a;0!==s?r=dt(s):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,wt,St,Ct,Et,jt=!1,Pt=[],zt=null,Tt=null,Nt=null,At=new Map,Ot=new Map,Lt=[],Mt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function It(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":At.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Rt(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=xa(t))&&wt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Dt(e){var t=ya(e.target);if(null!==t){var n=$e(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Et(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function _t(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xa(n))&&wt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Ft(e,t,n){_t(e)&&n.delete(t)}function Bt(){jt=!1,null!==zt&&_t(zt)&&(zt=null),null!==Tt&&_t(Tt)&&(Tt=null),null!==Nt&&_t(Nt)&&(Nt=null),At.forEach(Ft),Ot.forEach(Ft)}function Vt(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bt)))}function $t(e){function t(t){return Vt(t,e)}if(0<Pt.length){Vt(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Vt(zt,e),null!==Tt&&Vt(Tt,e),null!==Nt&&Vt(Nt,e),At.forEach(t),Ot.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)Dt(n),null===n.blockedOn&&Lt.shift()}var Ut=b.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var a=xt,i=Ut.transition;Ut.transition=null;try{xt=1,Kt(e,t,n,r)}finally{xt=a,Ut.transition=i}}function Yt(e,t,n,r){var a=xt,i=Ut.transition;Ut.transition=null;try{xt=4,Kt(e,t,n,r)}finally{xt=a,Ut.transition=i}}function Kt(e,t,n,r){if(Wt){var a=Gt(e,t,n,r);if(null===a)Wr(e,t,r,qt,n),It(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return zt=Rt(zt,e,t,n,r,a),!0;case"dragenter":return Tt=Rt(Tt,e,t,n,r,a),!0;case"mouseover":return Nt=Rt(Nt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return At.set(i,Rt(At.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ot.set(i,Rt(Ot.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(It(e,r),4&t&&-1<Mt.indexOf(e)){for(;null!==a;){var i=xa(a);if(null!==i&&kt(i),null===(i=Gt(e,t,n,r))&&Wr(e,t,r,qt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var qt=null;function Gt(e,t,n,r){if(qt=null,null!==(e=ya(e=ke(r))))if(null===(t=$e(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in Qt?Qt.value:Qt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=D({},cn,{view:0,detail:0}),pn=an(dn),fn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),mn=an(fn),hn=an(D({},fn,{dataTransfer:0})),gn=an(D({},dn,{relatedTarget:0})),vn=an(D({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=D({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=an(yn),bn=an(D({},cn,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return Cn}var jn=D({},dn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(jn),zn=an(D({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=an(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Nn=an(D({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),An=D({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(An),Ln=[9,13,27,32],Mn=u&&"CompositionEvent"in window,In=null;u&&"documentMode"in document&&(In=document.documentMode);var Rn=u&&"TextEvent"in window&&!In,Dn=u&&(!Mn||In&&8<In&&11>=In),_n=String.fromCharCode(32),Fn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var $n=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Hn(e,t,n,r){je(r),0<(t=Yr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function qn(e){_r(e,0)}function Gn(e){if(K(ba(e)))return e}function Xn(e,t){if("change"===e)return t}var Qn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];Hn(t,Kn,e,ke(e)),Ae(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function ir(e,t){if("click"===e)return Gn(t)}function or(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!sr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=ur(n,i);var o=ur(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==q(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Sr={},Cr={};function Er(e){if(Sr[e])return Sr[e];if(!wr[e])return e;var t,n=wr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return Sr[e]=n[t];return e}u&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);var jr=Er("animationend"),Pr=Er("animationiteration"),zr=Er("animationstart"),Tr=Er("transitionend"),Nr=new Map,Ar="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Nr.set(e,t),l(t,[e])}for(var Lr=0;Lr<Ar.length;Lr++){var Mr=Ar[Lr];Or(Mr.toLowerCase(),"on"+(Mr[0].toUpperCase()+Mr.slice(1)))}Or(jr,"onAnimationEnd"),Or(Pr,"onAnimationIteration"),Or(zr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Tr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,s,l,c){if(Ve.apply(this,arguments),Re){if(!Re)throw Error(i(198));var u=De;Re=!1,De=null,_e||(_e=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function _r(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Dr(a,s,c),i=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Dr(a,s,c),i=l}}}if(_e)throw e=Fe,_e=!1,Fe=null,e}function Fr(e,t){var n=t[ha];void 0===n&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Vr]){e[Vr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Rr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vr]||(t[Vr]=!0,Br("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(Xt(t)){case 1:var a=Ht;break;case 4:a=Yt;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===a||8===s.nodeType&&s.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===a||8===l.nodeType&&l.parentNode===a))return;o=o.return}for(;null!==s;){if(null===(o=ya(s)))return;if(5===(l=o.tag)||6===l){r=i=o;continue e}s=s.parentNode}}r=r.return}Ae((function(){var r=i,a=ke(n),o=[];e:{var s=Nr.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Pn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Tn;break;case jr:case Pr:case zr:l=vn;break;case Tr:l=Nn;break;case"scroll":l=pn;break;case"wheel":l=On;break;case"copy":case"cut":case"paste":l=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=zn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,m=r;null!==m;){var h=(f=m).stateNode;if(5===f.tag&&null!==h&&(f=h,null!==p&&(null!=(h=Oe(m,p))&&u.push(Hr(m,h,f)))),d)break;m=m.return}0<u.length&&(s=new l(s,c,null,n,a),o.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!ya(c)&&!c[ma])&&(l||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?ya(c):null)&&(c!==(d=$e(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=mn,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(u=zn,h="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==l?s:ba(l),f=null==c?s:ba(c),(s=new u(h,m+"leave",l,n,a)).target=d,s.relatedTarget=f,h=null,ya(a)===r&&((u=new u(p,m+"enter",c,n,a)).target=f,u.relatedTarget=d,h=u),d=h,l&&c)e:{for(p=c,m=0,f=u=l;f;f=Kr(f))m++;for(f=0,h=p;h;h=Kr(h))f++;for(;0<m-f;)u=Kr(u),m--;for(;0<f-m;)p=Kr(p),f--;for(;m--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==l&&qr(o,s,l,u,!1),null!==c&&null!==d&&qr(o,d,c,u,!0)}if("select"===(l=(s=r?ba(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Xn;else if(Wn(s))if(Qn)g=or;else{g=ar;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ir);switch(g&&(g=g(e,r))?Hn(o,g,n,a):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?ba(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(o,n,a);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":br(o,n,a)}var y;if(Mn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else $n?Bn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Dn&&"ko"!==n.locale&&($n||"onCompositionStart"!==x?"onCompositionEnd"===x&&$n&&(y=en()):(Jt="value"in(Qt=a)?Qt.value:Qt.textContent,$n=!0)),0<(v=Yr(r,x)).length&&(x=new bn(x,e,null,n,a),o.push({event:x,listeners:v}),y?x.data=y:null!==(y=Vn(n))&&(x.data=y))),(y=Rn?function(e,t){switch(e){case"compositionend":return Vn(t);case"keypress":return 32!==t.which?null:(Fn=!0,_n);case"textInput":return(e=t.data)===_n&&Fn?null:e;default:return null}}(e,n):function(e,t){if($n)return"compositionend"===e||!Mn&&Bn(e,t)?(e=en(),Zt=Jt=Qt=null,$n=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(a=new bn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}_r(o,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Oe(e,n))&&r.unshift(Hr(e,i,a)),null!=(i=Oe(e,t))&&r.push(Hr(e,i,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,a?null!=(l=Oe(n,i))&&o.unshift(Hr(n,l,s)):a||null!=(l=Oe(n,i))&&o.push(Hr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(i(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(sa)}:ra;function sa(e){setTimeout((function(){throw e}))}function la(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void $t(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);$t(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),pa="__reactFiber$"+da,fa="__reactProps$"+da,ma="__reactContainer$"+da,ha="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[pa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[pa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ua(e);null!==e;){if(n=e[pa])return n;e=ua(e)}return t}n=(e=n).parentNode}return null}function xa(e){return!(e=e[pa]||e[ma])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ba(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ka(e){return e[fa]||null}var wa=[],Sa=-1;function Ca(e){return{current:e}}function Ea(e){0>Sa||(e.current=wa[Sa],wa[Sa]=null,Sa--)}function ja(e,t){Sa++,wa[Sa]=e.current,e.current=t}var Pa={},za=Ca(Pa),Ta=Ca(!1),Na=Pa;function Aa(e,t){var n=e.type.contextTypes;if(!n)return Pa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function La(){Ea(Ta),Ea(za)}function Ma(e,t,n){if(za.current!==Pa)throw Error(i(168));ja(za,t),ja(Ta,n)}function Ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,U(e)||"Unknown",a));return D({},n,r)}function Ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pa,Na=za.current,ja(za,e),ja(Ta,Ta.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Ia(e,t,Na),r.__reactInternalMemoizedMergedChildContext=e,Ea(Ta),Ea(za),ja(za,e)):Ea(Ta),ja(Ta,n)}var _a=null,Fa=!1,Ba=!1;function Va(e){null===_a?_a=[e]:_a.push(e)}function $a(){if(!Ba&&null!==_a){Ba=!0;var e=0,t=xt;try{var n=_a;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}_a=null,Fa=!1}catch(a){throw null!==_a&&(_a=_a.slice(e+1)),Ke(Ze,$a),a}finally{xt=t,Ba=!1}}return null}var Ua=[],Wa=0,Ha=null,Ya=0,Ka=[],qa=0,Ga=null,Xa=1,Qa="";function Ja(e,t){Ua[Wa++]=Ya,Ua[Wa++]=Ha,Ha=e,Ya=t}function Za(e,t,n){Ka[qa++]=Xa,Ka[qa++]=Qa,Ka[qa++]=Ga,Ga=e;var r=Xa;e=Qa;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Xa=1<<32-ot(t)+a|n<<a|r,Qa=i+e}else Xa=1<<i|n<<a|r,Qa=e}function ei(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function ti(e){for(;e===Ha;)Ha=Ua[--Wa],Ua[Wa]=null,Ya=Ua[--Wa],Ua[Wa]=null;for(;e===Ga;)Ga=Ka[--qa],Ka[qa]=null,Qa=Ka[--qa],Ka[qa]=null,Xa=Ka[--qa],Ka[qa]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Ac(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function si(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ga?{id:Xa,overflow:Qa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ac(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function li(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ai){var t=ri;if(t){var n=t;if(!si(e,t)){if(li(e))throw Error(i(418));t=ca(n.nextSibling);var r=ni;t&&si(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(li(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ui(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ui(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(li(e))throw pi(),Error(i(418));for(;t;)oi(e,t),t=ca(t.nextSibling)}if(ui(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ca(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ca(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=ri;e;)e=ca(e.nextSibling)}function fi(){ri=ni=null,ai=!1}function mi(e){null===ii?ii=[e]:ii.push(e)}var hi=b.ReactCurrentBatchConfig;function gi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yi(e){return(0,e._init)(e._payload)}function xi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Lc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Dc(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===O&&yi(i)===t.type)?((r=a(t,n.props)).ref=gi(e,t,n),r.return=e,r):((r=Mc(n.type,n.key,n.props,null,e.mode,r)).ref=gi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=_c(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Ic(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Dc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Mc(t.type,t.key,t.props,null,e.mode,n)).ref=gi(e,null,t),n.return=e,n;case w:return(t=_c(t,e.mode,n)).return=e,t;case O:return p(e,(0,t._init)(t._payload),n)}if(te(t)||I(t))return(t=Ic(t,e.mode,n,null)).return=e,t;vi(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?c(e,t,n,r):null;case w:return n.key===a?u(e,t,n,r):null;case O:return f(e,t,(a=n._init)(n._payload),r)}if(te(n)||I(n))return null!==a?null:d(e,t,n,r,null);vi(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||I(r))return d(t,e=e.get(n)||null,r,a,null);vi(t,r)}return null}function h(a,i,s,l){for(var c=null,u=null,d=i,h=i=0,g=null;null!==d&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var v=f(a,d,s[h],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),i=o(v,i,h),null===u?c=v:u.sibling=v,u=v,d=g}if(h===s.length)return n(a,d),ai&&Ja(a,h),c;if(null===d){for(;h<s.length;h++)null!==(d=p(a,s[h],l))&&(i=o(d,i,h),null===u?c=d:u.sibling=d,u=d);return ai&&Ja(a,h),c}for(d=r(a,d);h<s.length;h++)null!==(g=m(d,a,h,s[h],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),i=o(g,i,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(a,e)})),ai&&Ja(a,h),c}function g(a,s,l,c){var u=I(l);if("function"!==typeof u)throw Error(i(150));if(null==(l=u.call(l)))throw Error(i(151));for(var d=u=null,h=s,g=s=0,v=null,y=l.next();null!==h&&!y.done;g++,y=l.next()){h.index>g?(v=h,h=null):v=h.sibling;var x=f(a,h,y.value,c);if(null===x){null===h&&(h=v);break}e&&h&&null===x.alternate&&t(a,h),s=o(x,s,g),null===d?u=x:d.sibling=x,d=x,h=v}if(y.done)return n(a,h),ai&&Ja(a,g),u;if(null===h){for(;!y.done;g++,y=l.next())null!==(y=p(a,y.value,c))&&(s=o(y,s,g),null===d?u=y:d.sibling=y,d=y);return ai&&Ja(a,g),u}for(h=r(a,h);!y.done;g++,y=l.next())null!==(y=m(h,a,g,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),s=o(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&h.forEach((function(e){return t(a,e)})),ai&&Ja(a,g),u}return function e(r,i,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case k:e:{for(var c=o.key,u=i;null!==u;){if(u.key===c){if((c=o.type)===S){if(7===u.tag){n(r,u.sibling),(i=a(u,o.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===O&&yi(c)===u.type){n(r,u.sibling),(i=a(u,o.props)).ref=gi(r,u,o),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===S?((i=Ic(o.props.children,r.mode,l,o.key)).return=r,r=i):((l=Mc(o.type,o.key,o.props,null,r.mode,l)).ref=gi(r,i,o),l.return=r,r=l)}return s(r);case w:e:{for(u=o.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=_c(o,r.mode,l)).return=r,r=i}return s(r);case O:return e(r,i,(u=o._init)(o._payload),l)}if(te(o))return h(r,i,o,l);if(I(o))return g(r,i,o,l);vi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Dc(o,r.mode,l)).return=r,r=i),s(r)):n(r,i)}}var bi=xi(!0),ki=xi(!1),wi=Ca(null),Si=null,Ci=null,Ei=null;function ji(){Ei=Ci=Si=null}function Pi(e){var t=wi.current;Ea(wi),e._currentValue=t}function zi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ti(e,t){Si=e,Ei=Ci=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function Ni(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},null===Ci){if(null===Si)throw Error(i(308));Ci=e,Si.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Ai=null;function Oi(e){null===Ai?Ai=[e]:Ai.push(e)}function Li(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Oi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Mi(e,r)}function Mi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ii=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Di(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _i(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zl)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Mi(e,n)}return null===(a=r.interleaved)?(t.next=t,Oi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Mi(e,n)}function Bi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Vi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $i(e,t,n,r){var a=e.updateQueue;Ii=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(null!==s){a.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?i=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=a.baseState;for(o=0,u=c=l=null,s=i;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,h=s;switch(p=t,f=n,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(f,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=h.payload)?m.call(f,d,p):m)||void 0===p)break e;d=D({},d,p);break e;case 2:Ii=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=a.effects)?a.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=p;if(null===(s=s.next)){if(null===(s=a.shared.pending))break;s=(p=s).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}if(null===u&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Rl|=o,e.lanes=o,e.memoizedState=d}}function Ui(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var Wi={},Hi=Ca(Wi),Yi=Ca(Wi),Ki=Ca(Wi);function qi(e){if(e===Wi)throw Error(i(174));return e}function Gi(e,t){switch(ja(Ki,t),ja(Yi,e),ja(Hi,Wi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Hi),ja(Hi,t)}function Xi(){Ea(Hi),Ea(Yi),Ea(Ki)}function Qi(e){qi(Ki.current);var t=qi(Hi.current),n=le(t,e.type);t!==n&&(ja(Yi,e),ja(Hi,n))}function Ji(e){Yi.current===e&&(Ea(Hi),Ea(Yi))}var Zi=Ca(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=b.ReactCurrentDispatcher,ao=b.ReactCurrentBatchConfig,io=0,oo=null,so=null,lo=null,co=!1,uo=!1,po=0,fo=0;function mo(){throw Error(i(321))}function ho(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:es,e=n(r,a),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(i(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,a)}while(uo)}if(ro.current=Jo,t=null!==so&&null!==so.next,io=0,lo=so=oo=null,co=!1,t)throw Error(i(300));return e}function vo(){var e=0!==po;return po=0,e}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function xo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(i(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function bo(e,t){return"function"===typeof t?t(e):t}function ko(e){var t=xo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=so,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((io&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,oo.lanes|=d,Rl|=d}u=u.next}while(null!==u&&u!==o);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(xs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Rl|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wo(e){var t=xo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var s=a=a.next;do{o=e(o,s.action),s=s.next}while(s!==a);sr(o,t.memoizedState)||(xs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function Co(e,t){var n=oo,r=xo(),a=t(),o=!sr(r.memoizedState,a);if(o&&(r.memoizedState=a,xs=!0),r=r.queue,Ro(Po.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,Ao(9,jo.bind(null,n,r,a,t),void 0,null),null===Tl)throw Error(i(349));0!==(30&io)||Eo(n,t,a)}return a}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function jo(e,t,n,r){t.value=n,t.getSnapshot=r,zo(t)&&To(e)}function Po(e,t,n){return n((function(){zo(t)&&To(e)}))}function zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function To(e){var t=Mi(e,1);null!==t&&nc(t,e,1,-1)}function No(e){var t=yo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=qo.bind(null,oo,e),[t.memoizedState,e]}function Ao(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oo(){return xo().memoizedState}function Lo(e,t,n,r){var a=yo();oo.flags|=e,a.memoizedState=Ao(1|t,n,void 0,void 0===r?null:r)}function Mo(e,t,n,r){var a=xo();r=void 0===r?null:r;var i=void 0;if(null!==so){var o=so.memoizedState;if(i=o.destroy,null!==r&&ho(r,o.deps))return void(a.memoizedState=Ao(t,n,i,r))}oo.flags|=e,a.memoizedState=Ao(1|t,n,i,r)}function Io(e,t){return Lo(8390656,8,e,t)}function Ro(e,t){return Mo(2048,8,e,t)}function Do(e,t){return Mo(4,2,e,t)}function _o(e,t){return Mo(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Mo(4,4,Fo.bind(null,t,e),n)}function Vo(){}function $o(e,t){var n=xo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uo(e,t){var n=xo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wo(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=n):(sr(n,t)||(n=ht(),oo.lanes|=n,Rl|=n,e.baseState=!0),t)}function Ho(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{xt=n,ao.transition=r}}function Yo(){return xo().memoizedState}function Ko(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))Xo(t,n);else if(null!==(n=Li(e,t,n,r))){nc(n,e,r,ec()),Qo(n,t,r)}}function qo(e,t,n){var r=tc(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Xo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(a.next=a,Oi(t)):(a.next=l.next,l.next=a),void(t.interleaved=a)}}catch(c){}null!==(n=Li(e,t,a,r))&&(nc(n,e,r,a=ec()),Qo(n,t,r))}}function Go(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Xo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Jo={readContext:Ni,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},Zo={readContext:Ni,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:Ni,useEffect:Io,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Lo(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=yo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:No,useDebugValue:Vo,useDeferredValue:function(e){return yo().memoizedState=e},useTransition:function(){var e=No(!1),t=e[0];return e=Ho.bind(null,e[1]),yo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=yo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Tl)throw Error(i(349));0!==(30&io)||Eo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Io(Po.bind(null,r,o,e),[e]),r.flags|=2048,Ao(9,jo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yo(),t=Tl.identifierPrefix;if(ai){var n=Qa;t=":"+t+"R"+(n=(Xa&~(1<<32-ot(Xa)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ni,useCallback:$o,useContext:Ni,useEffect:Ro,useImperativeHandle:Bo,useInsertionEffect:Do,useLayoutEffect:_o,useMemo:Uo,useReducer:ko,useRef:Oo,useState:function(){return ko(bo)},useDebugValue:Vo,useDeferredValue:function(e){return Wo(xo(),so.memoizedState,e)},useTransition:function(){return[ko(bo)[0],xo().memoizedState]},useMutableSource:So,useSyncExternalStore:Co,useId:Yo,unstable_isNewReconciler:!1},ts={readContext:Ni,useCallback:$o,useContext:Ni,useEffect:Ro,useImperativeHandle:Bo,useInsertionEffect:Do,useLayoutEffect:_o,useMemo:Uo,useReducer:wo,useRef:Oo,useState:function(){return wo(bo)},useDebugValue:Vo,useDeferredValue:function(e){var t=xo();return null===so?t.memoizedState=e:Wo(t,so.memoizedState,e)},useTransition:function(){return[wo(bo)[0],xo().memoizedState]},useMutableSource:So,useSyncExternalStore:Co,useId:Yo,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var as={isMounted:function(e){return!!(e=e._reactInternals)&&$e(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=_i(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nc(t,e,a,r),Bi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=_i(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nc(t,e,a,r),Bi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),a=_i(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Fi(e,a,r))&&(nc(t,e,r,n),Bi(t,e,r))}};function is(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(a,i))}function os(e,t,n){var r=!1,a=Pa,i=t.contextType;return"object"===typeof i&&null!==i?i=Ni(i):(a=Oa(t)?Na:za.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Aa(e,a):Pa),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=as,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&as.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ri(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Ni(i):(i=Oa(t)?Na:za.current,a.context=Aa(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rs(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&as.enqueueReplaceState(a,a.state,null),$i(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=V(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=_i(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hl=r),ds(0,t)},n}function ms(e,t,n){(n=_i(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){ds(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=_i(-1,1)).tag=2,Fi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var ys=b.ReactCurrentOwner,xs=!1;function bs(e,t,n,r){t.child=null===e?ki(t,null,n,r):bi(t,e.child,n,r)}function ks(e,t,n,r,a){n=n.render;var i=t.ref;return Ti(t,a),r=go(e,t,n,r,i,a),n=vo(),null===e||xs?(ai&&n&&ei(t),t.flags|=1,bs(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ws(e,t,a))}function ws(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Oc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Mc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ss(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return Ws(e,t,a)}return t.flags|=1,(e=Lc(i,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref){if(xs=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Ws(e,t,a);0!==(131072&e.flags)&&(xs=!0)}}return js(e,t,n,r,a)}function Cs(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ja(Ll,Ol),Ol|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ja(Ll,Ol),Ol|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,ja(Ll,Ol),Ol|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,ja(Ll,Ol),Ol|=r;return bs(e,t,a,n),t.child}function Es(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,n,r,a){var i=Oa(n)?Na:za.current;return i=Aa(t,i),Ti(t,a),n=go(e,t,n,r,i,a),r=vo(),null===e||xs?(ai&&r&&ei(t),t.flags|=1,bs(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ws(e,t,a))}function Ps(e,t,n,r,a){if(Oa(n)){var i=!0;Ra(t)}else i=!1;if(Ti(t,a),null===t.stateNode)Us(e,t),os(t,n,r),ls(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ni(c):c=Aa(t,c=Oa(n)?Na:za.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,o,r,c),Ii=!1;var p=t.memoizedState;o.state=p,$i(t,r,o,a),l=t.memoizedState,s!==r||p!==l||Ta.current||Ii?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Ii||is(t,n,s,r,p,l,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Di(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),o.props=c,d=t.pendingProps,p=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ni(l):l=Aa(t,l=Oa(n)?Na:za.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,o,r,l),Ii=!1,p=t.memoizedState,o.state=p,$i(t,r,o,a);var m=t.memoizedState;s!==d||p!==m||Ta.current||Ii?("function"===typeof f&&(rs(t,n,f,r),m=t.memoizedState),(c=Ii||is(t,n,c,r,p,m,l)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,m,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,m,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return zs(e,t,n,r,i,a)}function zs(e,t,n,r,a,i){Es(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Da(t,n,!1),Ws(e,t,i);r=t.stateNode,ys.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=bi(t,e.child,null,i),t.child=bi(t,null,s,i)):bs(e,t,s,i),t.memoizedState=r.state,a&&Da(t,n,!0),t.child}function Ts(e){var t=e.stateNode;t.pendingContext?Ma(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(0,t.context,!1),Gi(e,t.containerInfo)}function Ns(e,t,n,r,a){return fi(),mi(a),t.flags|=256,bs(e,t,n,r),t.child}var As,Os,Ls,Ms,Is={dehydrated:null,treeContext:null,retryLane:0};function Rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,n){var r,a=t.pendingProps,o=Zi.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),ja(Zi,1&o),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=a.children,e=a.fallback,s?(a=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&a)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Rc(l,a,0,null),e=Ic(e,a,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Rs(n),t.memoizedState=Is,e):_s(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,s){if(n)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,r=us(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Rc({mode:"visible",children:r.children},a,0,null),(o=Ic(o,a,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&bi(t,e.child,null,s),t.child.memoizedState=Rs(s),t.memoizedState=Is,o);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var l=r.dgst;return r=l,Fs(e,t,s,r=us(o=Error(i(419)),r,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(r=Tl)){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|s))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Mi(e,a),nc(r,e,a,-1))}return hc(),Fs(e,t,s,r=us(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Pc.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ca(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Ka[qa++]=Xa,Ka[qa++]=Qa,Ka[qa++]=Ga,Xa=e.id,Qa=e.overflow,Ga=t),t=_s(t,r.children),t.flags|=4096,t)}(e,t,l,a,r,o,n);if(s){s=a.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&l)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Lc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Lc(r,s):(s=Ic(s,l,n,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,l=null===(l=e.child.memoizedState)?Rs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Is,a}return e=(s=e.child).sibling,a=Lc(s,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function _s(e,t){return(t=Rc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&mi(r),bi(t,e.child,null,n),(e=_s(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zi(e.return,t,n)}function Vs(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function $s(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=Zi.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bs(e,n,t);else if(19===e.tag)Bs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ja(Zi,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Vs(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Vs(t,!0,n,null,i);break;case"together":Vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Rl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Lc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hs(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return Oa(t.type)&&La(),Ys(t),null;case 3:return r=t.stateNode,Xi(),Ea(Ta),Ea(za),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(oc(ii),ii=null))),Os(e,t),Ys(t),null;case 5:Ji(t);var a=qi(Ki.current);if(n=t.type,null!==e&&null!=t.stateNode)Ls(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ys(t),null}if(e=qi(Hi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pa]=t,r[fa]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Ir.length;a++)Fr(Ir[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":X(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ae(r,o),Fr("invalid",r)}for(var l in ye(n,o),a=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),a=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),a=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fr("scroll",r)}switch(n){case"input":Y(r),Z(r,o,!0);break;case"textarea":Y(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pa]=t,e[fa]=r,As(e,t,!1,!1),t.stateNode=e;e:{switch(l=xe(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ir.length;a++)Fr(Ir[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":X(e,r),a=G(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=D({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(o in ye(n,a),c=a)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?ge(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Fr("scroll",e):null!=u&&x(e,o,u,l))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)Ms(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=qi(Ki.current),qi(Hi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[pa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pa]=t,t.stateNode=r}return Ys(t),null;case 13:if(Ea(Zi),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))pi(),fi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[pa]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),o=!1}else null!==ii&&(oc(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Zi.current)?0===Ml&&(Ml=3):hc())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return Xi(),Os(e,t),null===e&&$r(t.stateNode.containerInfo),Ys(t),null;case 10:return Pi(t.type._context),Ys(t),null;case 19:if(Ea(Zi),null===(o=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Hs(o,!1);else{if(0!==Ml||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Hs(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ja(Zi,1&Zi.current|2),t.child}e=e.sibling}null!==o.tail&&Qe()>$l&&(t.flags|=128,r=!0,Hs(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hs(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ai)return Ys(t),null}else 2*Qe()-o.renderingStartTime>$l&&1073741824!==n&&(t.flags|=128,r=!0,Hs(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Qe(),t.sibling=null,n=Zi.current,ja(Zi,r?1&n|2:1&n),t):(Ys(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ol)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function qs(e,t){switch(ti(t),t.tag){case 1:return Oa(t.type)&&La(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xi(),Ea(Ta),Ea(za),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ji(t),null;case 13:if(Ea(Zi),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(Zi),null;case 4:return Xi(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}As=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Os=function(){},Ls=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,qi(Hi.current);var i,o=null;switch(n){case"input":a=G(e,a),r=G(e,r),o=[];break;case"select":a=D({},a,{value:void 0}),r=D({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ye(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Ms=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,Xs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Cc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&el(t,n,i)}a=a.next}while(a!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function il(e){var t=e.alternate;null!==t&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[fa],delete t[ha],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(s){}switch(n.tag){case 5:Xs||Zs(n,t);case 6:var r=ul,a=dl;ul=null,pl(e,t,n),dl=a,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?la(e.parentNode,n):1===e.nodeType&&la(e,n),$t(e)):la(ul,n.stateNode));break;case 4:r=ul,a=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=a;break;case 0:case 11:case 14:case 15:if(!Xs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&el(n,t,o),a=a.next}while(a!==r)}pl(e,t,n);break;case 1:if(!Xs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Cc(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Xs=(r=Xs)||null!==n.memoizedState,pl(e,t,n),Xs=r):pl(e,t,n);break;default:pl(e,t,n)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qs),t.forEach((function(t){var r=zc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function hl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(i(160));fl(o,s,a),ul=null,dl=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(u){Cc(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hl(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Cc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Cc(e,e.return,g)}}break;case 1:hl(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(hl(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(g){Cc(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&Q(a,o),xe(l,s);var u=xe(l,o);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(a,p):"dangerouslySetInnerHTML"===d?de(a,p):"children"===d?pe(a,p):x(a,d,p,u)}switch(l){case"input":J(a,o);break;case"textarea":ie(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;null!=m?ne(a,!!o.multiple,m,!1):f!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[fa]=o}catch(g){Cc(e,e.return,g)}}break;case 6:if(hl(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){Cc(e,e.return,g)}}break;case 3:if(hl(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$t(t.containerInfo)}catch(g){Cc(e,e.return,g)}break;case 4:default:hl(t,e),vl(e);break;case 13:hl(t,e),vl(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Vl=Qe())),4&r&&ml(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xs=(u=Xs)||d,hl(t,e),Xs=u):hl(t,e),vl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(p=Js=d;null!==Js;){switch(m=(f=Js).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:Zs(f,f.return);var h=f.stateNode;if("function"===typeof h.componentWillUnmount){r=f,n=f.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Cc(r,n,g)}}break;case 5:Zs(f,f.return);break;case 22:if(null!==f.memoizedState){kl(p);continue}}null!==m?(m.return=f,Js=m):kl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{a=p.stateNode,u?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=he("display",s))}catch(g){Cc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Cc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hl(t,e),vl(e),4&r&&ml(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(pe(a,""),r.flags&=-33),cl(e,sl(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(i(161))}}catch(s){Cc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Js=e,xl(e,t,n)}function xl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var a=Js,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Gs;if(!o){var s=a.alternate,l=null!==s&&null!==s.memoizedState||Xs;s=Gs;var c=Xs;if(Gs=o,(Xs=l)&&!c)for(Js=a;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?wl(a):null!==l?(l.return=o,Js=l):wl(a);for(;null!==i;)Js=i,xl(i,t,n),i=i.sibling;Js=a,Gs=s,Xs=c}bl(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Js=i):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xs)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ui(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ui(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&$t(p)}}}break;default:throw Error(i(163))}Xs||512&t.flags&&al(t)}catch(f){Cc(t,t.return,f)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Cc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(l){Cc(t,a,l)}}var i=t.return;try{al(t)}catch(l){Cc(t,i,l)}break;case 5:var o=t.return;try{al(t)}catch(l){Cc(t,o,l)}}}catch(l){Cc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,Cl=Math.ceil,El=b.ReactCurrentDispatcher,jl=b.ReactCurrentOwner,Pl=b.ReactCurrentBatchConfig,zl=0,Tl=null,Nl=null,Al=0,Ol=0,Ll=Ca(0),Ml=0,Il=null,Rl=0,Dl=0,_l=0,Fl=null,Bl=null,Vl=0,$l=1/0,Ul=null,Wl=!1,Hl=null,Yl=null,Kl=!1,ql=null,Gl=0,Xl=0,Ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&zl)?Qe():-1!==Jl?Jl:Jl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&zl)&&0!==Al?Al&-Al:null!==hi.transition?(0===Zl&&(Zl=ht()),Zl):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nc(e,t,n,r){if(50<Xl)throw Xl=0,Ql=null,Error(i(185));vt(e,n,r),0!==(2&zl)&&e===Tl||(e===Tl&&(0===(2&zl)&&(Dl|=n),4===Ml&&sc(e,Al)),rc(e,r),1===n&&0===zl&&0===(1&t.mode)&&($l=Qe()+500,Fa&&$a()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),s=1<<o,l=a[o];-1===l?0!==(s&n)&&0===(s&r)||(a[o]=ft(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=pt(e,e===Tl?Al:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){Fa=!0,Va(e)}(lc.bind(null,e)):Va(lc.bind(null,e)),oa((function(){0===(6&zl)&&$a()})),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Tc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Jl=-1,Zl=0,0!==(6&zl))throw Error(i(327));var n=e.callbackNode;if(wc()&&e.callbackNode!==n)return null;var r=pt(e,e===Tl?Al:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var a=zl;zl|=2;var o=mc();for(Tl===e&&Al===t||(Ul=null,$l=Qe()+500,pc(e,t));;)try{yc();break}catch(l){fc(e,l)}ji(),El.current=o,zl=a,null!==Nl?t=0:(Tl=null,Al=0,t=Ml)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(r=a,t=ic(e,a))),1===t)throw n=Il,pc(e,0),sc(e,r),rc(e,Qe()),n;if(6===t)sc(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!sr(i(),a))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gc(e,r))&&(0!==(o=mt(e))&&(r=o,t=ic(e,o))),1===t))throw n=Il,pc(e,0),sc(e,r),rc(e,Qe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:kc(e,Bl,Ul);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Vl+500-Qe())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(kc.bind(null,e,Bl,Ul),t);break}kc(e,Bl,Ul);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>a&&(a=s),r&=~o}if(r=a,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cl(r/1960))-r)){e.timeoutHandle=ra(kc.bind(null,e,Bl,Ul),r);break}kc(e,Bl,Ul);break;default:throw Error(i(329))}}}return rc(e,Qe()),e.callbackNode===n?ac.bind(null,e):null}function ic(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Bl,Bl=n,null!==t&&oc(t)),e}function oc(e){null===Bl?Bl=e:Bl.push.apply(Bl,e)}function sc(e,t){for(t&=~_l,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&zl))throw Error(i(327));wc();var t=pt(e,0);if(0===(1&t))return rc(e,Qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Il,pc(e,0),sc(e,t),rc(e,Qe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kc(e,Bl,Ul),rc(e,Qe()),null}function cc(e,t){var n=zl;zl|=1;try{return e(t)}finally{0===(zl=n)&&($l=Qe()+500,Fa&&$a())}}function uc(e){null!==ql&&0===ql.tag&&0===(6&zl)&&wc();var t=zl;zl|=1;var n=Pl.transition,r=xt;try{if(Pl.transition=null,xt=1,e)return e()}finally{xt=r,Pl.transition=n,0===(6&(zl=t))&&$a()}}function dc(){Ol=Ll.current,Ea(Ll)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Nl)for(n=Nl.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&La();break;case 3:Xi(),Ea(Ta),Ea(za),no();break;case 5:Ji(r);break;case 4:Xi();break;case 13:case 19:Ea(Zi);break;case 10:Pi(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Tl=e,Nl=e=Lc(e.current,null),Al=Ol=t,Ml=0,Il=null,_l=Dl=Rl=0,Bl=Fl=null,null!==Ai){for(t=0;t<Ai.length;t++)if(null!==(r=(n=Ai[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ai=null}return e}function fc(e,t){for(;;){var n=Nl;try{if(ji(),ro.current=Jo,co){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}co=!1}if(io=0,lo=so=oo=null,uo=!1,po=0,jl.current=null,null===n||null===n.return){Ml=1,Il=t,Nl=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Al,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gs(s);if(null!==m){m.flags&=-257,vs(m,s,l,0,t),1&m.mode&&hs(o,u,t),c=u;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(c),t.updateQueue=g}else h.add(c);break e}if(0===(1&t)){hs(o,u,t),hc();break e}c=Error(i(426))}else if(ai&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),mi(cs(c,l));break e}}o=c=cs(c,l),4!==Ml&&(Ml=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Vi(o,fs(0,c,t));break e;case 1:l=c;var y=o.type,x=o.stateNode;if(0===(128&o.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Yl||!Yl.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t,Vi(o,ms(o,l,t));break e}}o=o.return}while(null!==o)}bc(n)}catch(b){t=b,Nl===n&&null!==n&&(Nl=n=n.return);continue}break}}function mc(){var e=El.current;return El.current=Jo,null===e?Jo:e}function hc(){0!==Ml&&3!==Ml&&2!==Ml||(Ml=4),null===Tl||0===(268435455&Rl)&&0===(268435455&Dl)||sc(Tl,Al)}function gc(e,t){var n=zl;zl|=2;var r=mc();for(Tl===e&&Al===t||(Ul=null,pc(e,t));;)try{vc();break}catch(a){fc(e,a)}if(ji(),zl=n,El.current=r,null!==Nl)throw Error(i(261));return Tl=null,Al=0,Ml}function vc(){for(;null!==Nl;)xc(Nl)}function yc(){for(;null!==Nl&&!Ge();)xc(Nl)}function xc(e){var t=Sl(e.alternate,e,Ol);e.memoizedProps=e.pendingProps,null===t?bc(e):Nl=t,jl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,Ol)))return void(Nl=n)}else{if(null!==(n=qs(n,t)))return n.flags&=32767,void(Nl=n);if(null===e)return Ml=6,void(Nl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Nl=t);Nl=t=e}while(null!==t);0===Ml&&(Ml=5)}function kc(e,t,n){var r=xt,a=Pl.transition;try{Pl.transition=null,xt=1,function(e,t,n,r){do{wc()}while(null!==ql);if(0!==(6&zl))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===Tl&&(Nl=Tl=null,Al=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,Tc(tt,(function(){return wc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Pl.transition,Pl.transition=null;var s=xt;xt=1;var l=zl;zl|=4,jl.current=null,function(e,t){if(ea=Wt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(k){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==a&&3!==p.nodeType||(l=s+a),p!==o||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===a&&(l=s),f===o&&++d===r&&(c=s),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(k){Cc(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}h=tl,tl=!1}(e,n),gl(n,e),mr(ta),Wt=!!ea,ta=ea=null,e.current=n,yl(n,e,a),Xe(),zl=l,xt=s,Pl.transition=o}else e.current=n;if(Kl&&(Kl=!1,ql=e,Gl=a),o=e.pendingLanes,0===o&&(Yl=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Gl)&&0!==e.tag&&wc(),o=e.pendingLanes,0!==(1&o)?e===Ql?Xl++:(Xl=0,Ql=e):Xl=0,$a()}(e,t,n,r)}finally{Pl.transition=a,xt=r}return null}function wc(){if(null!==ql){var e=bt(Gl),t=Pl.transition,n=xt;try{if(Pl.transition=null,xt=16>e?16:e,null===ql)var r=!1;else{if(e=ql,ql=null,Gl=0,0!==(6&zl))throw Error(i(331));var a=zl;for(zl|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,o)}var p=d.child;if(null!==p)p.return=d,Js=p;else for(;null!==Js;){var f=(d=Js).sibling,m=d.return;if(il(d),d===u){Js=null;break}if(null!==f){f.return=m,Js=f;break}Js=m}}}var h=o.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Js=y;break e}Js=o.return}}var x=e.current;for(Js=x;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=x;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(w){Cc(l,l.return,w)}if(l===s){Js=null;break e}var k=l.sibling;if(null!==k){k.return=l.return,Js=k;break e}Js=l.return}}if(zl=a,$a(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(w){}r=!0}return r}finally{xt=n,Pl.transition=t}}return!1}function Sc(e,t,n){e=Fi(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function Cc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Fi(t,e=ms(t,e=cs(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Tl===e&&(Al&n)===n&&(4===Ml||3===Ml&&(130023424&Al)===Al&&500>Qe()-Vl?pc(e,0):_l|=n),rc(e,t)}function jc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Mi(e,t))&&(vt(e,t,n),rc(e,n))}function Pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),jc(e,n)}function zc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),jc(e,n)}function Tc(e,t){return Ke(e,t)}function Nc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ac(e,t,n,r){return new Nc(e,t,n,r)}function Oc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lc(e,t){var n=e.alternate;return null===n?((n=Ac(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mc(e,t,n,r,a,o){var s=2;if(r=e,"function"===typeof e)Oc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Ic(n.children,a,o,t);case C:s=8,a|=8;break;case E:return(e=Ac(12,n,t,2|a)).elementType=E,e.lanes=o,e;case T:return(e=Ac(13,n,t,a)).elementType=T,e.lanes=o,e;case N:return(e=Ac(19,n,t,a)).elementType=N,e.lanes=o,e;case L:return Rc(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:s=10;break e;case P:s=9;break e;case z:s=11;break e;case A:s=14;break e;case O:s=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Ac(s,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Ic(e,t,n,r){return(e=Ac(7,e,r,t)).lanes=n,e}function Rc(e,t,n,r){return(e=Ac(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Dc(e,t,n){return(e=Ac(6,e,null,t)).lanes=n,e}function _c(e,t,n){return(t=Ac(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,a,i,o,s,l){return e=new Fc(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Ac(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(i),e}function Vc(e){if(!e)return Pa;e:{if($e(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Oa(n))return Ia(e,n,t)}return t}function $c(e,t,n,r,a,i,o,s,l){return(e=Bc(n,r,!0,e,0,i,0,s,l)).context=Vc(null),n=e.current,(i=_i(r=ec(),a=tc(n))).callback=void 0!==t&&null!==t?t:null,Fi(n,i,a),e.current.lanes=a,vt(e,a,r),rc(e,r),e}function Uc(e,t,n,r){var a=t.current,i=ec(),o=tc(a);return n=Vc(n),null===t.context?t.context=n:t.pendingContext=n,(t=_i(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fi(a,t,o))&&(nc(e,a,o,i),Bi(e,a,o)),o}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ta.current)xs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xs=!1,function(e,t,n){switch(t.tag){case 3:Ts(t),fi();break;case 5:Qi(t);break;case 1:Oa(t.type)&&Ra(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ja(wi,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ja(Zi,1&Zi.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ds(e,t,n):(ja(Zi,1&Zi.current),null!==(e=Ws(e,t,n))?e.sibling:null);ja(Zi,1&Zi.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return $s(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),ja(Zi,Zi.current),r)break;return null;case 22:case 23:return t.lanes=0,Cs(e,t,n)}return Ws(e,t,n)}(e,t,n);xs=0!==(131072&e.flags)}else xs=!1,ai&&0!==(1048576&t.flags)&&Za(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Us(e,t),e=t.pendingProps;var a=Aa(t,za.current);Ti(t,n),a=go(null,t,r,e,a,n);var o=vo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(o=!0,Ra(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Ri(t),a.updater=as,t.stateNode=a,a._reactInternals=t,ls(t,r,e,n),t=zs(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),bs(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Oc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===A)return 14}return 2}(r),e=ns(r,e),a){case 0:t=js(null,t,r,e,n);break e;case 1:t=Ps(null,t,r,e,n);break e;case 11:t=ks(null,t,r,e,n);break e;case 14:t=ws(null,t,r,ns(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,js(e,t,r,a=t.elementType===r?a:ns(r,a),n);case 1:return r=t.type,a=t.pendingProps,Ps(e,t,r,a=t.elementType===r?a:ns(r,a),n);case 3:e:{if(Ts(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Di(e,t),$i(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ns(e,t,r,n,a=cs(Error(i(423)),t));break e}if(r!==a){t=Ns(e,t,r,n,a=cs(Error(i(424)),t));break e}for(ri=ca(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=ki(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fi(),r===a){t=Ws(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Qi(t),null===e&&ci(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,s=a.children,na(r,a)?s=null:null!==o&&na(r,o)&&(t.flags|=32),Es(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Ds(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=bi(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,ks(e,t,r,a=t.elementType===r?a:ns(r,a),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,ja(wi,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===a.children&&!Ta.current){t=Ws(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=_i(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),zi(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(i(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),zi(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}bs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Ti(t,n),r=r(a=Ni(a)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return a=ns(r=t.type,t.pendingProps),ws(e,t,r,a=ns(r.type,a),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ns(r,a),Us(e,t),t.tag=1,Oa(r)?(e=!0,Ra(t)):e=!1,Ti(t,n),os(t,r,a),ls(t,r,a,n),zs(null,t,r,!0,e,n);case 19:return $s(e,t,n);case 22:return Cs(e,t,n)}throw Error(i(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function qc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var s=a;a=function(){var e=Wc(o);s.call(e)}}Uc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=Wc(o);i.call(e)}}var o=$c(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[ma]=o.current,$r(8===e.nodeType?e.parentNode:e),uc(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var s=r;r=function(){var e=Wc(l);s.call(e)}}var l=Bc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[ma]=l.current,$r(8===e.nodeType?e.parentNode:e),uc((function(){Uc(t,l,n,r)})),l}(n,t,e,a,r);return Wc(o)}Gc.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Uc(e,t,null,null)},Gc.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Uc(null,e,null,null)})),t[ma]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&Dt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Qe()),0===(6&zl)&&($l=Qe()+500,$a()))}break;case 13:uc((function(){var t=Mi(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Yc(e,1)}},wt=function(e){if(13===e.tag){var t=Mi(e,134217728);if(null!==t)nc(t,e,134217728,ec());Yc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Mi(e,t);if(null!==n)nc(n,e,t,ec());Yc(e,t)}},Ct=function(){return xt},Et=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},we=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ka(r);if(!a)throw Error(i(90));K(r),J(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=cc,Te=uc;var eu={usingClientEntryPoint:!1,Events:[xa,ba,ka,je,Pe,cc]},tu={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{at=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:w,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xc(e))throw Error(i(299));var n=!1,r="",a=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Bc(e,1,!1,null,0,n,0,r,a),e[ma]=t.current,$r(8===e.nodeType?e.parentNode:e),new qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Qc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",s=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=$c(t,null,e,1,null!=n?n:null,a,0,o,s),e[ma]=t.current,$r(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Gc(t)},t.render=function(e,t,n){if(!Qc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ma]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var i=n(324),o=n.n(i),s="-ms-",l="-moz-",c="-webkit-",u="comm",d="rule",p="decl",f="@keyframes",m=Math.abs,h=String.fromCharCode,g=Object.assign;function v(e){return e.trim()}function y(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function k(e,t){return 0|e.charCodeAt(t)}function w(e,t,n){return e.slice(t,n)}function S(e){return e.length}function C(e){return e.length}function E(e,t){return t.push(e),e}function j(e,t){return e.filter((function(e){return!y(e,t)}))}var P=1,z=1,T=0,N=0,A=0,O="";function L(e,t,n,r,a,i,o,s){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:P,column:z,length:o,return:"",siblings:s}}function M(e,t){return g(L("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function I(e){for(;e.root;)e=M(e.root,{children:[e]});E(e,e.siblings)}function R(){return A=N>0?k(O,--N):0,z--,10===A&&(z=1,P--),A}function D(){return A=N<T?k(O,N++):0,z++,10===A&&(z=1,P++),A}function _(){return k(O,N)}function F(){return N}function B(e,t){return w(O,e,t)}function V(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $(e){return P=z=1,T=S(O=e),N=0,[]}function U(e){return O="",e}function W(e){return v(B(N-1,K(91===e?e+2:40===e?e+1:e)))}function H(e){for(;(A=_())&&A<33;)D();return V(e)>2||V(A)>3?"":" "}function Y(e,t){for(;--t&&D()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return B(e,F()+(t<6&&32==_()&&32==D()))}function K(e){for(;D();)switch(A){case e:return N;case 34:case 39:34!==e&&39!==e&&K(A);break;case 40:41===e&&K(e);break;case 92:D()}return N}function q(e,t){for(;D()&&e+A!==57&&(e+A!==84||47!==_()););return"/*"+B(t,N-1)+"*"+h(47===e?e:D())}function G(e){for(;!V(_());)D();return B(e,N)}function X(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Q(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case u:return"";case f:return e.return=e.value+"{"+X(e.children,r)+"}";case d:if(!S(e.value=e.props.join(",")))return""}return S(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e,t,n){switch(function(e,t){return 45^k(e,0)?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+l+e+s+e+e;case 5936:switch(k(e,t+11)){case 114:return c+e+s+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+s+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+s+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+s+e+e;case 6165:return c+e+s+"flex-"+e+e;case 5187:return c+e+x(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+s+"flex-$1$2")+e;case 5443:return c+e+s+"flex-item-"+x(e,/flex-|-self/g,"")+(y(e,/flex-|baseline/)?"":s+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return c+e+s+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+s+x(e,"shrink","negative")+e;case 5292:return c+e+s+x(e,"basis","preferred-size")+e;case 6060:return c+"box-"+x(e,"-grow","")+c+e+s+x(e,"grow","positive")+e;case 4554:return c+x(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!y(e,/flex-|baseline/))return s+"grid-column-align"+w(e,t)+e;break;case 2592:case 3360:return s+x(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,y(e.props,/grid-\w+-end/)}))?~b(e+(n=n[t].value),"span",0)?e:s+x(e,"-start","")+e+s+"grid-row-span:"+(~b(n,"span",0)?y(n,/\d+/):+y(n,/\d+/)-+y(e,/\d+/))+";":s+x(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return y(e.props,/grid-\w+-start/)}))?e:s+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(k(e,t+1)){case 109:if(45!==k(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+l+(108==k(e,t+3)?"$3":"$2-$3"))+e;case 115:return~b(e,"stretch",0)?J(x(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,l){return s+n+":"+r+l+(a?s+n+"-span:"+(i?o:+o-+r)+l:"")+e}));case 4949:if(121===k(e,t+6))return x(e,":",":"+c)+e;break;case 6444:switch(k(e,45===k(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===k(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+s+"$2box$3")+e;case 100:return x(e,":",":"+s)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function Z(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=J(e.value,e.length,n));case f:return X([M(e,{value:x(e.value,"@","@"+c)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(y(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":I(M(e,{props:[x(t,/:(read-\w+)/,":-moz-$1")]})),I(M(e,{props:[t]})),g(e,{props:j(n,r)});break;case"::placeholder":I(M(e,{props:[x(t,/:(plac\w+)/,":"+c+"input-$1")]})),I(M(e,{props:[x(t,/:(plac\w+)/,":-moz-$1")]})),I(M(e,{props:[x(t,/:(plac\w+)/,s+"input-$1")]})),I(M(e,{props:[t]})),g(e,{props:j(n,r)})}return""}))}}function ee(e){return U(te("",null,null,null,[""],e=$(e),0,[0],e))}function te(e,t,n,r,a,i,o,s,l){for(var c=0,u=0,d=o,p=0,f=0,g=0,v=1,y=1,w=1,C=0,j="",P=a,z=i,T=r,N=j;y;)switch(g=C,C=D()){case 40:if(108!=g&&58==k(N,d-1)){-1!=b(N+=x(W(C),"&","&\f"),"&\f",m(c?s[c-1]:0))&&(w=-1);break}case 34:case 39:case 91:N+=W(C);break;case 9:case 10:case 13:case 32:N+=H(g);break;case 92:N+=Y(F()-1,7);continue;case 47:switch(_()){case 42:case 47:E(re(q(D(),F()),t,n,l),l);break;default:N+="/"}break;case 123*v:s[c++]=S(N)*w;case 125*v:case 59:case 0:switch(C){case 0:case 125:y=0;case 59+u:-1==w&&(N=x(N,/\f/g,"")),f>0&&S(N)-d&&E(f>32?ae(N+";",r,n,d-1,l):ae(x(N," ","")+";",r,n,d-2,l),l);break;case 59:N+=";";default:if(E(T=ne(N,t,n,c,u,a,s,j,P=[],z=[],d,i),i),123===C)if(0===u)te(N,t,T,T,P,i,d,s,z);else switch(99===p&&110===k(N,3)?100:p){case 100:case 108:case 109:case 115:te(e,T,T,r&&E(ne(e,T,T,0,0,a,s,j,a,P=[],d,z),z),a,z,d,s,r?P:z);break;default:te(N,T,T,T,[""],z,0,s,z)}}c=u=f=0,v=w=1,j=N="",d=o;break;case 58:d=1+S(N),f=g;default:if(v<1)if(123==C)--v;else if(125==C&&0==v++&&125==R())continue;switch(N+=h(C),C*v){case 38:w=u>0?1:(N+="\f",-1);break;case 44:s[c++]=(S(N)-1)*w,w=1;break;case 64:45===_()&&(N+=W(D())),p=_(),u=d=S(j=N+=G(F())),C++;break;case 45:45===g&&2==S(N)&&(v=0)}}return i}function ne(e,t,n,r,a,i,o,s,l,c,u,p){for(var f=a-1,h=0===a?i:[""],g=C(h),y=0,b=0,k=0;y<r;++y)for(var S=0,E=w(e,f+1,f=m(b=o[y])),j=e;S<g;++S)(j=v(b>0?h[S]+" "+E:x(E,/&\f/g,h[S])))&&(l[k++]=j);return L(e,t,n,0===a?d:s,l,c,u,p)}function re(e,t,n,r){return L(e,t,n,u,h(A),w(e,2,-2),0,r)}function ae(e,t,n,r,a){return L(e,t,n,p,w(e,0,r),w(e,r+1,-1),r,a)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",se="active",le="data-styled-version",ce="6.1.15",ue="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Ai-To-Do-List",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),fe={},me=(new Set,Object.freeze([])),he=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=he),e.theme!==n.theme&&e.theme||t||n.theme}var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ye=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xe=/(^-|-$)/g;function be(e){return e.replace(ye,"-").replace(xe,"")}var ke=/(a)(d)/gi,we=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=we(t%52)+n;return(we(t%52)+n).replace(ke,"$1-$2")}var Ce,Ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},je=function(e){return Ee(5381,e)};function Pe(e){return Se(je(e)>>>0)}function ze(e){return e.displayName||e.name||"Component"}function Te(e){return"string"==typeof e&&!0}var Ne="function"==typeof Symbol&&Symbol.for,Ae=Ne?Symbol.for("react.memo"):60115,Oe=Ne?Symbol.for("react.forward_ref"):60112,Le={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ie={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Re=((Ce={})[Oe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ce[Ae]=Ie,Ce);function De(e){return("type"in(t=e)&&t.type.$$typeof)===Ae?Ie:"$$typeof"in e?Re[e.$$typeof]:Le;var t}var _e=Object.defineProperty,Fe=Object.getOwnPropertyNames,Be=Object.getOwnPropertySymbols,Ve=Object.getOwnPropertyDescriptor,$e=Object.getPrototypeOf,Ue=Object.prototype;function We(e,t,n){if("string"!=typeof t){if(Ue){var r=$e(t);r&&r!==Ue&&We(e,r,n)}var a=Fe(t);Be&&(a=a.concat(Be(t)));for(var i=De(e),o=De(t),s=0;s<a.length;++s){var l=a[s];if(!(l in Me||n&&n[l]||o&&l in o||i&&l in i)){var c=Ve(t,l);try{_e(e,l,c)}catch(e){}}}}return e}function He(e){return"function"==typeof e}function Ye(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qe(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ge(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,n){if(void 0===n&&(n=!1),!n&&!Ge(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xe(e[r],t[r]);else if(Ge(t))for(var r in t)e[r]=Xe(e[r],t[r]);return e}function Qe(e,t){Object.defineProperty(e,"toString",{value:t})}function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Je(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(ue);return t},e}(),et=new Map,tt=new Map,nt=1,rt=function(e){if(et.has(e))return et.get(e);for(;tt.has(nt);)nt++;var t=nt++;return et.set(e,t),tt.set(t,e),t},at=function(e,t){nt=t+1,et.set(e,t),tt.set(t,e)},it="style[".concat(oe,"][").concat(le,'="').concat(ce,'"]'),ot=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),st=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},lt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ue),a=[],i=0,o=r.length;i<o;i++){var s=r[i].trim();if(s){var l=s.match(ot);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(at(u,c),st(e,u,l[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(s)}}},ct=function(e){for(var t=document.querySelectorAll(it),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(oe)!==se&&(lt(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ut(){return n.nc}var dt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(oe,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(oe,se),r.setAttribute(le,ce);var o=ut();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},pt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=de,gt={isServer:!de,useCSSOMInjection:!pe},vt=function(){function e(e,t,n){void 0===e&&(e=he),void 0===t&&(t={});var a=this;this.options=r(r({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&ht&&(ht=!1,ct(this)),Qe(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return tt.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var s="".concat(oe,".g").concat(n,'[id="').concat(a,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(ue)},i=0;i<n;i++)a(i);return r}(a)}))}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&de&&ct(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new mt(n):t?new pt(n):new ft(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yt=/&/g,xt=/^\s*\/\/.*$/gm;function bt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=bt(e.children,t)),e}))}function kt(e){var t,n,r,a=void 0===e?he:e,i=a.options,o=void 0===i?he:i,s=a.plugins,l=void 0===s?me:s,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(yt,n).replace(r,c))})),o.prefix&&u.push(Z),u.push(Q);var p=function(e,a,i,s){void 0===a&&(a=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(xt,""),c=ee(i||a?"".concat(i," ").concat(a," { ").concat(l," }"):l);o.namespace&&(c=bt(c,o.namespace));var d,p=[];return X(c,function(e){var t=C(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return p.hash=l.length?l.reduce((function(e,t){return t.name||Je(15),Ee(e,t.name)}),5381).toString():"",p}var wt=new vt,St=kt(),Ct=e.createContext({shouldForwardProp:void 0,styleSheet:wt,stylis:St}),Et=(Ct.Consumer,e.createContext(void 0));function jt(){return(0,e.useContext)(Ct)}function Pt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=jt().styleSheet,s=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),l=(0,e.useMemo)((function(){return kt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){o()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var c=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:l}}),[t.shouldForwardProp,s,l]);return e.createElement(Ct.Provider,{value:c},e.createElement(Et.Provider,{value:l},t.children))}var zt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Qe(this,(function(){throw Je(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),Tt=function(e){return e>="A"&&e<="Z"};function Nt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Tt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var At=function(e){return null==e||!1===e||""===e},Ot=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!At(o)&&(Array.isArray(o)&&o.isCss||He(o)?r.push("".concat(Nt(i),":"),o,";"):Ge(o)?r.push.apply(r,a(a(["".concat(i," {")],Ot(o),!1),["}"],!1)):r.push("".concat(Nt(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ie||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Lt(e,t,n,r){return At(e)?[]:Ye(e)?[".".concat(e.styledComponentId)]:He(e)?!He(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Lt(e(t),t,n,r):e instanceof zt?n?(e.inject(n,r),[e.getName(r)]):[e]:Ge(e)?Ot(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map((function(e){return Lt(e,t,n,r)}))):[e.toString()];var a}function Mt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(He(n)&&!Ye(n))return!1}return!0}var It=je(ce),Rt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Mt(e),this.componentId=t,this.baseHash=Ee(It,t),this.baseStyle=n,vt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ke(r,this.staticRulesId);else{var a=qe(Lt(this.rules,e,t,n)),i=Se(Ee(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Ke(r,i),this.staticRulesId=i}else{for(var s=Ee(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=qe(Lt(u,e,t,n));s=Ee(s,d+c),l+=d}}if(l){var p=Se(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Ke(r,p)}}return r},e}(),Dt=e.createContext(void 0);Dt.Consumer;function _t(t){var n=e.useContext(Dt),a=(0,e.useMemo)((function(){return function(e,t){if(!e)throw Je(14);if(He(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Je(8);return t?r(r({},t),e):e}(t.theme,n)}),[t.theme,n]);return t.children?e.createElement(Dt.Provider,{value:a},t.children):null}var Ft={};new Set;function Bt(t,n,a){var i=Ye(t),o=t,s=!Te(t),l=n.attrs,c=void 0===l?me:l,u=n.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":be(e);Ft[n]=(Ft[n]||0)+1;var r="".concat(n,"-").concat(Pe(ce+n+Ft[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,p=n.displayName,f=void 0===p?function(e){return Te(e)?"styled.".concat(e):"Styled(".concat(ze(e),")")}(t):p,m=n.displayName&&n.componentId?"".concat(be(n.displayName),"-").concat(n.componentId):n.componentId||d,h=i&&o.attrs?o.attrs.concat(c).filter(Boolean):c,g=n.shouldForwardProp;if(i&&o.shouldForwardProp){var v=o.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var x=new Rt(a,m,i?o.componentStyle:void 0);function b(t,n){return function(t,n,a){var i=t.attrs,o=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Dt),p=jt(),f=t.shouldForwardProp||p.shouldForwardProp,m=ge(n,d,s)||he,h=function(e,t,n){for(var a,i=r(r({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var s=He(a=e[o])?a(i):a;for(var l in s)i[l]="className"===l?Ke(i[l],s[l]):"style"===l?r(r({},i[l]),s[l]):s[l]}return t.className&&(i.className=Ke(i.className,t.className)),i}(i,n,m),g=h.as||u,v={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===m||("forwardedAs"===y?v.as=h.forwardedAs:f&&!f(y,g)||(v[y]=h[y]));var x=function(e,t){var n=jt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=Ke(l,c);return x&&(b+=" "+x),h.className&&(b+=" "+h.className),v[Te(g)&&!ve.has(g)?"class":"className"]=b,a&&(v.ref=a),(0,e.createElement)(g,v)}(k,t,n)}b.displayName=f;var k=e.forwardRef(b);return k.attrs=h,k.componentStyle=x,k.displayName=f,k.shouldForwardProp=g,k.foldedComponentIds=i?Ke(o.foldedComponentIds,o.styledComponentId):"",k.styledComponentId=m,k.target=i?o.target:t,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Xe(e,a[r],!0);return e}({},o.defaultProps,e):e}}),Qe(k,(function(){return".".concat(k.styledComponentId)})),s&&We(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function Vt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var $t=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(He(e)||Ge(e))return $t(Lt(Vt(me,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Lt(r):$t(Lt(Vt(r,t)))}function Wt(e,t,n){if(void 0===n&&(n=he),!t)throw Je(1,t);var i=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Ut.apply(void 0,a([r],i,!1)))};return i.attrs=function(a){return Wt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Wt(e,t,r(r({},n),a))},i}var Ht=function(e){return Wt(Bt,e)},Yt=Ht;ve.forEach((function(e){Yt[e]=Ht(e)}));var Kt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Mt(e),vt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(qe(Lt(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&vt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ut(),r=qe([n&&'nonce="'.concat(n,'"'),"".concat(oe,'="true"'),"".concat(le,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Je(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Je(2);var a=t.instance.toString();if(!a)return[];var i=((n={})[oe]="",n[le]=ce,n.dangerouslySetInnerHTML={__html:a},n),o=ut();return o&&(i.nonce=o),[e.createElement("style",r({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new vt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Je(2);return e.createElement(Pt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Je(3)}})(),"__sc-".concat(oe,"__");const qt=(function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=Ut.apply(void 0,a([t],n,!1)),s="sc-global-".concat(Pe(JSON.stringify(o))),l=new Kt(o,s),c=function(t){var n=jt(),r=e.useContext(Dt),a=e.useRef(n.styleSheet.allocateGSInstance(s)).current;return n.styleSheet.server&&u(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return u(a,t,n.styleSheet,r,n.stylis),function(){return l.removeStyles(a,n.styleSheet)}}),[a,t,n.styleSheet,r,n.stylis]),null};function u(e,t,n,a,i){if(l.isStatic)l.renderStyles(e,fe,n,i);else{var o=r(r({},t),{theme:ge(t,a,c.defaultProps)});l.renderStyles(e,o,n,i)}}return e.memo(c)})`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600&display=swap');
  
  :root {
    /* Spalvos */
    --primary-red: ${e=>e.theme.primaryColor};
    --primary-yellow: ${e=>e.theme.secondaryColor};
    --text-color: ${e=>e.theme.textColor};
    --background-color: ${e=>e.theme.backgroundColor};
    --card-background: ${e=>e.theme.cardBackground};
    --border-color: ${e=>e.theme.borderColor};
    --input-background: ${e=>e.theme.inputBackground};
    --completed-color: ${e=>e.theme.completedColor};
    --button-text: ${e=>e.theme.buttonText};
    --subtask-text-color: ${e=>e.theme.subtaskTextColor};
    --light-text-color: ${e=>e.theme.lightTextColor};
    
    /* Atstumai */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* Šriftų dydžiai */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-size-xxl: 2rem;
    
    /* Konteinerio dydžiai */
    --container-sm: 576px;
    --container-md: 768px;
    --container-lg: 992px;
    --container-xl: 1200px;
    
    /* Animacijos */
    --animation-speed-slow: 0.5s;
    --animation-speed-normal: 0.3s;
    --animation-speed-fast: 0.15s;
    
    /* Šešėliai */
    --shadow-sm: 3px 3px 0px rgba(0, 0, 0, 0.2);
    --shadow-md: 5px 5px 0px rgba(0, 0, 0, 0.25);
    --shadow-lg: 8px 8px 0px rgba(0, 0, 0, 0.3);
    
    /* Perėjimai */
    --transition-bounce: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    --transition-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-sharp: cubic-bezier(0.19, 1, 0.22, 1);
    
    /* Mobilieji dydžiai */
    @media (max-width: 768px) {
      --spacing-xl: 1.75rem;
      --spacing-lg: 1.25rem;
      --spacing-md: 0.75rem;
      
      --font-size-xxl: 1.75rem;
      --font-size-xl: 1.25rem;
      --font-size-lg: 1.1rem;
    }
    
    @media (max-width: 480px) {
      --spacing-xl: 1.5rem;
      --spacing-lg: 1rem;
      --spacing-md: 0.5rem;
      
      --font-size-xxl: 1.5rem;
      --font-size-xl: 1.1rem;
      --font-size-lg: 1rem;
      
      /* Mažiau intensyvios animacijos mobiliajame */
      --animation-speed-slow: 0.4s;
      --animation-speed-normal: 0.25s;
      --animation-speed-fast: 0.1s;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Oswald', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  /* Animacijos apibrėžimai */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInFromBottom {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideInFromLeft {
    from { transform: translateX(-30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInFromRight {
    from { transform: translateX(30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  /* Animacijos klasės */
  .animate-fade-in {
    animation: fadeIn var(--animation-speed-normal) var(--transition-smooth) forwards;
  }
  
  .animate-slide-up {
    animation: slideInFromBottom var(--animation-speed-normal) var(--transition-smooth) forwards;
  }
  
  .animate-slide-left {
    animation: slideInFromLeft var(--animation-speed-normal) var(--transition-smooth) forwards;
  }
  
  .animate-slide-right {
    animation: slideInFromRight var(--animation-speed-normal) var(--transition-smooth) forwards;
  }
  
  .animate-pulse {
    animation: pulse 2s var(--transition-bounce) infinite;
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  /* Staggered animacija vaikams */
  .stagger-children > * {
    opacity: 0;
  }
  
  .stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-children > *:nth-child(5) { animation-delay: 0.5s; }
  
  /* Scrollbar stilius */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--background-color);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--primary-yellow);
    border-radius: 0;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-red);
  }
  
  /* Padidinta pritaikytas animacijoms */
  button, a {
    transition: all var(--animation-speed-fast) var(--transition-smooth);
  }
  
  input, textarea, select {
    transition: border-color var(--animation-speed-fast) var(--transition-smooth), 
                box-shadow var(--animation-speed-fast) var(--transition-smooth);
  }
  
  /* Paslėpti užrašai nuo ekrano skaitytuvų, bet matomi vizualiai */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* React transition group papildomi stiliai */
  .page-transition-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  .page-transition-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity var(--animation-speed-normal), 
                transform var(--animation-speed-normal) var(--transition-smooth);
  }
  
  .page-transition-exit {
    opacity: 1;
    transform: translateX(0);
  }
  
  .page-transition-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: opacity var(--animation-speed-normal), 
                transform var(--animation-speed-normal) var(--transition-smooth);
  }
  
  /* Sumažinti animacijas, jei vartotojas pasirinko sumažinti judėjimą */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    
    .animate-fade-in,
    .animate-slide-up,
    .animate-slide-left,
    .animate-slide-right,
    .animate-pulse,
    .animate-spin,
    .stagger-children > * {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
    
    .page-transition-enter,
    .page-transition-enter-active,
    .page-transition-exit,
    .page-transition-exit-active {
      transform: none !important;
      transition: none !important;
    }
  }
`,Gt=qt,Xt=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Qt=(0,e.createContext)({}),Jt=(0,e.createContext)(null),Zt="undefined"!==typeof document,en=Zt?e.useLayoutEffect:e.useEffect,tn=(0,e.createContext)({strict:!1}),nn=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),rn="data-"+nn("framerAppearId");function an(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function on(e){return"string"===typeof e||Array.isArray(e)}function sn(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const ln=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cn=["initial",...ln];function un(e){return sn(e.animate)||cn.some((t=>on(e[t])))}function dn(e){return Boolean(un(e)||e.variants)}function pn(t){const{initial:n,animate:r}=function(e,t){if(un(e)){const{initial:t,animate:n}=e;return{initial:!1===t||on(t)?t:void 0,animate:on(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Qt));return(0,e.useMemo)((()=>({initial:n,animate:r})),[fn(n),fn(r)])}function fn(e){return Array.isArray(e)?e.join(" "):e}const mn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},hn={};for(const n in mn)hn[n]={isEnabled:e=>mn[n].some((t=>!!e[t]))};const gn=(0,e.createContext)({}),vn=(0,e.createContext)({}),yn=Symbol.for("motionComponentSymbol");function xn(t){let{preloadedFeatures:n,createVisualElement:r,useRender:a,useVisualState:i,Component:o}=t;n&&function(e){for(const t in e)hn[t]={...hn[t],...e[t]}}(n);const s=(0,e.forwardRef)((function(t,s){let l;const c={...(0,e.useContext)(Xt),...t,layoutId:bn(t)},{isStatic:u}=c,d=pn(t),p=i(t,u);if(!u&&Zt){d.visualElement=function(t,n,r,a){const{visualElement:i}=(0,e.useContext)(Qt),o=(0,e.useContext)(tn),s=(0,e.useContext)(Jt),l=(0,e.useContext)(Xt).reducedMotion,c=(0,e.useRef)();a=a||o.renderer,!c.current&&a&&(c.current=a(t,{visualState:n,parent:i,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const u=c.current;(0,e.useInsertionEffect)((()=>{u&&u.update(r,s)}));const d=(0,e.useRef)(Boolean(r[rn]&&!window.HandoffComplete));return en((()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())})),(0,e.useEffect)((()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))})),u}(o,p,c,r);const t=(0,e.useContext)(vn),a=(0,e.useContext)(tn).strict;d.visualElement&&(l=d.visualElement.loadFeatures(c,a,n,t))}return e.createElement(Qt.Provider,{value:d},l&&d.visualElement?e.createElement(l,{visualElement:d.visualElement,...c}):null,a(o,t,function(t,n,r){return(0,e.useCallback)((e=>{e&&t.mount&&t.mount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):an(r)&&(r.current=e))}),[n])}(p,d.visualElement,s),p,u,d.visualElement))}));return s[yn]=o,s}function bn(t){let{layoutId:n}=t;const r=(0,e.useContext)(gn).id;return r&&void 0!==n?r+"-"+n:n}function kn(e){function t(t){return xn(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const wn=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Sn(e){return"string"===typeof e&&!e.includes("-")&&!!(wn.indexOf(e)>-1||/[A-Z]/.test(e))}const Cn={};const En=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jn=new Set(En);function Pn(e,t){let{layout:n,layoutId:r}=t;return jn.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Cn[e]||"opacity"===e)}const zn=e=>Boolean(e&&e.getVelocity),Tn={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Nn=En.length;const An=e=>t=>"string"===typeof t&&t.startsWith(e),On=An("--"),Ln=An("var(--"),Mn=(e,t)=>t&&"number"===typeof e?t.transform(e):e,In=(e,t,n)=>Math.min(Math.max(n,e),t),Rn={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Dn={...Rn,transform:e=>In(0,1,e)},_n={...Rn,default:1},Fn=e=>Math.round(1e5*e)/1e5,Bn=/(-)?([\d]*\.?[\d])+/g,Vn=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,$n=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Un(e){return"string"===typeof e}const Wn=e=>({test:t=>Un(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Hn=Wn("deg"),Yn=Wn("%"),Kn=Wn("px"),qn=Wn("vh"),Gn=Wn("vw"),Xn={...Yn,parse:e=>Yn.parse(e)/100,transform:e=>Yn.transform(100*e)},Qn={...Rn,transform:Math.round},Jn={borderWidth:Kn,borderTopWidth:Kn,borderRightWidth:Kn,borderBottomWidth:Kn,borderLeftWidth:Kn,borderRadius:Kn,radius:Kn,borderTopLeftRadius:Kn,borderTopRightRadius:Kn,borderBottomRightRadius:Kn,borderBottomLeftRadius:Kn,width:Kn,maxWidth:Kn,height:Kn,maxHeight:Kn,size:Kn,top:Kn,right:Kn,bottom:Kn,left:Kn,padding:Kn,paddingTop:Kn,paddingRight:Kn,paddingBottom:Kn,paddingLeft:Kn,margin:Kn,marginTop:Kn,marginRight:Kn,marginBottom:Kn,marginLeft:Kn,rotate:Hn,rotateX:Hn,rotateY:Hn,rotateZ:Hn,scale:_n,scaleX:_n,scaleY:_n,scaleZ:_n,skew:Hn,skewX:Hn,skewY:Hn,distance:Kn,translateX:Kn,translateY:Kn,translateZ:Kn,x:Kn,y:Kn,z:Kn,perspective:Kn,transformPerspective:Kn,opacity:Dn,originX:Xn,originY:Xn,originZ:Kn,zIndex:Qn,fillOpacity:Dn,strokeOpacity:Dn,numOctaves:Qn};function Zn(e,t,n,r){const{style:a,vars:i,transform:o,transformOrigin:s}=e;let l=!1,c=!1,u=!0;for(const d in t){const e=t[d];if(On(d)){i[d]=e;continue}const n=Jn[d],r=Mn(e,n);if(jn.has(d)){if(l=!0,o[d]=r,!u)continue;e!==(n.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,s[d]=r):a[d]=r}if(t.transform||(l||r?a.transform=function(e,t,n,r){let{enableHardwareAcceleration:a=!0,allowTransformNone:i=!0}=t,o="";for(let s=0;s<Nn;s++){const t=En[s];void 0!==e[t]&&(o+=`${Tn[t]||t}(${e[t]}) `)}return a&&!e.z&&(o+="translateZ(0)"),o=o.trim(),r?o=r(e,n?"":o):i&&n&&(o="none"),o}(e.transform,n,u,r):a.transform&&(a.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;a.transformOrigin=`${e} ${t} ${n}`}}const er=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tr(e,t,n){for(const r in t)zn(t[r])||Pn(r,n)||(e[r]=t[r])}function nr(t,n,r){const a={};return tr(a,t.style||{},t),Object.assign(a,function(t,n,r){let{transformTemplate:a}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Zn(e,n,{enableHardwareAcceleration:!r},a),Object.assign({},e.vars,e.style)}),[n])}(t,n,r)),t.transformValues?t.transformValues(a):a}function rr(e,t,n){const r={},a=nr(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=a,r}const ar=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ir(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ar.has(e)}let or=e=>!ir(e);try{(sr=require("@emotion/is-prop-valid").default)&&(or=e=>e.startsWith("on")?!ir(e):sr(e))}catch(zg){}var sr;function lr(e,t,n){return"string"===typeof e?e:Kn.transform(t+n*e)}const cr={offset:"stroke-dashoffset",array:"stroke-dasharray"},ur={offset:"strokeDashoffset",array:"strokeDasharray"};function dr(e,t,n,r,a){let{attrX:i,attrY:o,attrScale:s,originX:l,originY:c,pathLength:u,pathSpacing:d=1,pathOffset:p=0,...f}=t;if(Zn(e,f,n,a),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:m,style:h,dimensions:g}=e;m.transform&&(g&&(h.transform=m.transform),delete m.transform),g&&(void 0!==l||void 0!==c||h.transform)&&(h.transformOrigin=function(e,t,n){return`${lr(t,e.x,e.width)} ${lr(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==i&&(m.x=i),void 0!==o&&(m.y=o),void 0!==s&&(m.scale=s),void 0!==u&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const i=a?cr:ur;e[i.offset]=Kn.transform(-r);const o=Kn.transform(t),s=Kn.transform(n);e[i.array]=`${o} ${s}`}(m,u,d,p,!1)}const pr=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),fr=e=>"string"===typeof e&&"svg"===e.toLowerCase();function mr(t,n,r,a){const i=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return dr(e,n,{enableHardwareAcceleration:!1},fr(a),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};tr(e,t.style,t),i.style={...e,...i.style}}return i}function hr(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,a,i,o)=>{let{latestValues:s}=i;const l=(Sn(n)?mr:rr)(r,s,o,n),c=function(e,t,n){const r={};for(const a in e)"values"===a&&"object"===typeof e.values||(or(a)||!0===n&&ir(a)||!t&&!ir(a)||e.draggable&&a.startsWith("onDrag"))&&(r[a]=e[a]);return r}(r,"string"===typeof n,t),u={...c,...l,ref:a},{children:d}=r,p=(0,e.useMemo)((()=>zn(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:p})}}function gr(e,t,n,r){let{style:a,vars:i}=t;Object.assign(e.style,a,r&&r.getProjectionStyles(n));for(const o in i)e.style.setProperty(o,i[o])}const vr=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function yr(e,t,n,r){gr(e,t,void 0,r);for(const a in t.attrs)e.setAttribute(vr.has(a)?a:nn(a),t.attrs[a])}function xr(e,t){const{style:n}=e,r={};for(const a in n)(zn(n[a])||t.style&&zn(t.style[a])||Pn(a,e))&&(r[a]=n[a]);return r}function br(e,t){const n=xr(e,t);for(const r in e)if(zn(e[r])||zn(t[r])){n[-1!==En.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function kr(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,a)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,a)),t}function wr(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const Sr=e=>Array.isArray(e),Cr=e=>Sr(e)?e[e.length-1]||0:e;function Er(e){const t=zn(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const jr=t=>(n,r)=>{const a=(0,e.useContext)(Qt),i=(0,e.useContext)(Jt),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:a,createRenderState:i,onMount:o}=e;const s={latestValues:Pr(t,n,r,a),renderState:i()};return o&&(s.mount=e=>o(t,e,s)),s}(t,n,a,i);return r?o():wr(o)};function Pr(e,t,n,r){const a={},i=r(e,{});for(const p in i)a[p]=Er(i[p]);let{initial:o,animate:s}=e;const l=un(e),c=dn(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!sn(d)){(Array.isArray(d)?d:[d]).forEach((t=>{const n=kr(e,t);if(!n)return;const{transitionEnd:r,transition:i,...o}=n;for(const e in o){let t=o[e];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(a[e]=t)}for(const e in r)a[e]=r[e]}))}return a}const zr=e=>e;class Tr{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const Nr=["prepare","read","update","preRender","render","postRender"];const{schedule:Ar,cancel:Or,state:Lr,steps:Mr}=function(e,t){let n=!1,r=!0;const a={delta:0,timestamp:0,isProcessing:!1},i=Nr.reduce(((e,t)=>(e[t]=function(e){let t=new Tr,n=new Tr,r=0,a=!1,i=!1;const o=new WeakSet,s={schedule:function(e){const i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&a,s=i?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),s.add(e)&&i&&a&&(r=t.order.length),e},cancel:e=>{n.remove(e),o.delete(e)},process:l=>{if(a)i=!0;else{if(a=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),o.has(r)&&(s.schedule(r),e())}a=!1,i&&(i=!1,s.process(l))}}};return s}((()=>n=!0)),e)),{}),o=e=>i[e].process(a),s=()=>{const i=performance.now();n=!1,a.delta=r?1e3/60:Math.max(Math.min(i-a.timestamp,40),1),a.timestamp=i,a.isProcessing=!0,Nr.forEach(o),a.isProcessing=!1,n&&t&&(r=!1,e(s))},l=Nr.reduce(((t,o)=>{const l=i[o];return t[o]=function(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,a.isProcessing||e(s)),l.schedule(t,i,o)},t}),{});return{schedule:l,cancel:e=>Nr.forEach((t=>i[t].cancel(e))),state:a,steps:i}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:zr,!0),Ir={useVisualState:jr({scrapeMotionValuesFromProps:br,createRenderState:pr,onMount:(e,t,n)=>{let{renderState:r,latestValues:a}=n;Ar.read((()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){r.dimensions={x:0,y:0,width:0,height:0}}})),Ar.render((()=>{dr(r,a,{enableHardwareAcceleration:!1},fr(t.tagName),e.transformTemplate),yr(t,r)}))}})},Rr={useVisualState:jr({scrapeMotionValuesFromProps:xr,createRenderState:er})};function Dr(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const _r=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function Fr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function Br(e,t,n,r){return Dr(e,t,(e=>t=>_r(t)&&e(t,Fr(t)))(n),r)}const Vr=(e,t)=>n=>t(e(n)),$r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Vr)};function Ur(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const Wr=Ur("dragHorizontal"),Hr=Ur("dragVertical");function Yr(e){let t=!1;if("y"===e)t=Hr();else if("x"===e)t=Wr();else{const e=Wr(),n=Hr();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Kr(){const e=Yr(!0);return!e||(e(),!1)}class qr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Gr(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return Br(e.current,n,((n,a)=>{if("touch"===n.pointerType||Kr())return;const i=e.getProps();e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",t),i[r]&&Ar.update((()=>i[r](n,a)))}),{passive:!e.getProps()[r]})}const Xr=(e,t)=>!!t&&(e===t||Xr(e,t.parentElement));function Qr(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Fr(n))}const Jr=new WeakMap,Zr=new WeakMap,ea=e=>{const t=Jr.get(e.target);t&&t(e)},ta=e=>{e.forEach(ea)};function na(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Zr.has(r)||Zr.set(r,{});const a=Zr.get(r),i=JSON.stringify(n);return a[i]||(a[i]=new IntersectionObserver(ta,{root:t,...n})),a[i]}(t);return Jr.set(e,n),r.observe(e),()=>{Jr.delete(e),r.unobserve(e)}}const ra={some:0,all:1};const aa={inView:{Feature:class extends qr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:a}=e,i={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:ra[r]};return na(this.node.current,i,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,a&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),i=t?n:r;i&&i(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends qr{constructor(){super(...arguments),this.removeStartListeners=zr,this.removeEndListeners=zr,this.removeAccessibleListeners=zr,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=Br(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:a}=this.node.getProps();Ar.update((()=>{a||Xr(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)}))}),{passive:!(n.onTap||n.onPointerUp)}),a=Br(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=$r(r,a),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=Dr(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=Dr(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&Qr("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&Ar.update((()=>n(e,t)))}))})),Qr("down",((e,t)=>{this.startPress(e,t)}))})),t=Dr(this.node.current,"blur",(()=>{this.isPressing&&Qr("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=$r(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&Ar.update((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Kr()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&Ar.update((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=Br(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=Dr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=$r(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends qr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$r(Dr(this.node.current,"focus",(()=>this.onFocus())),Dr(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends qr{mount(){this.unmount=$r(Gr(this.node,!0),Gr(this.node,!1))}unmount(){}}}};function ia(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function oa(e,t,n){const r=e.getProps();return kr(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.getVelocity())),t}(e))}let sa=zr,la=zr;const ca=e=>1e3*e,ua=e=>e/1e3,da=!1,pa=e=>Array.isArray(e)&&"number"===typeof e[0];function fa(e){return Boolean(!e||"string"===typeof e&&ha[e]||pa(e)||Array.isArray(e)&&e.every(fa))}const ma=e=>{let[t,n,r,a]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${a})`},ha={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ma([0,.65,.55,1]),circOut:ma([.55,0,1,.45]),backIn:ma([.31,.01,.66,-.59]),backOut:ma([.33,1.53,.69,.99])};function ga(e){if(e)return pa(e)?ma(e):Array.isArray(e)?e.map(ga):ha[e]}const va=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function ya(e,t,n,r){if(e===t&&n===r)return zr;const a=t=>function(e,t,n,r,a){let i,o,s=0;do{o=t+(n-t)/2,i=va(o,r,a)-e,i>0?n=o:t=o}while(Math.abs(i)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:va(a(e),t,r)}const xa=ya(.42,0,1,1),ba=ya(0,0,.58,1),ka=ya(.42,0,.58,1),wa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Sa=e=>t=>1-e(1-t),Ca=e=>1-Math.sin(Math.acos(e)),Ea=Sa(Ca),ja=wa(Ca),Pa=ya(.33,1.53,.69,.99),za=Sa(Pa),Ta=wa(za),Na={linear:zr,easeIn:xa,easeInOut:ka,easeOut:ba,circIn:Ca,circInOut:ja,circOut:Ea,backIn:za,backInOut:Ta,backOut:Pa,anticipate:e=>(e*=2)<1?.5*za(e):.5*(2-Math.pow(2,-10*(e-1)))},Aa=e=>{if(Array.isArray(e)){la(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,a]=e;return ya(t,n,r,a)}return"string"===typeof e?(la(void 0!==Na[e],`Invalid easing type '${e}'`),Na[e]):e},Oa=(e,t)=>n=>Boolean(Un(n)&&$n.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),La=(e,t,n)=>r=>{if(!Un(r))return r;const[a,i,o,s]=r.match(Bn);return{[e]:parseFloat(a),[t]:parseFloat(i),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},Ma={...Rn,transform:e=>Math.round((e=>In(0,255,e))(e))},Ia={test:Oa("rgb","red"),parse:La("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:a=1}=e;return"rgba("+Ma.transform(t)+", "+Ma.transform(n)+", "+Ma.transform(r)+", "+Fn(Dn.transform(a))+")"}};const Ra={test:Oa("#"),parse:function(e){let t="",n="",r="",a="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),a=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),a=e.substring(4,5),t+=t,n+=n,r+=r,a+=a),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:a?parseInt(a,16)/255:1}},transform:Ia.transform},Da={test:Oa("hsl","hue"),parse:La("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:a=1}=e;return"hsla("+Math.round(t)+", "+Yn.transform(Fn(n))+", "+Yn.transform(Fn(r))+", "+Fn(Dn.transform(a))+")"}},_a={test:e=>Ia.test(e)||Ra.test(e)||Da.test(e),parse:e=>Ia.test(e)?Ia.parse(e):Da.test(e)?Da.parse(e):Ra.parse(e),transform:e=>Un(e)?e:e.hasOwnProperty("red")?Ia.transform(e):Da.transform(e)},Fa=(e,t,n)=>-n*e+n*t+e;function Ba(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const Va=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},$a=[Ra,Ia,Da];function Ua(e){const t=(e=>$a.find((t=>t.test(e))))(e);la(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===Da&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:a}=e;t/=360,n/=100,r/=100;let i=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,a=2*r-e;i=Ba(a,e,t+1/3),o=Ba(a,e,t),s=Ba(a,e,t-1/3)}else i=o=s=r;return{red:Math.round(255*i),green:Math.round(255*o),blue:Math.round(255*s),alpha:a}}(n)),n}const Wa=(e,t)=>{const n=Ua(e),r=Ua(t),a={...n};return e=>(a.red=Va(n.red,r.red,e),a.green=Va(n.green,r.green,e),a.blue=Va(n.blue,r.blue,e),a.alpha=Fa(n.alpha,r.alpha,e),Ia.transform(a))};const Ha={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:zr},Ya={regex:Vn,countKey:"Colors",token:"${c}",parse:_a.parse},Ka={regex:Bn,countKey:"Numbers",token:"${n}",parse:Rn.parse};function qa(e,t){let{regex:n,countKey:r,token:a,parse:i}=t;const o=e.tokenised.match(n);o&&(e["num"+r]=o.length,e.tokenised=e.tokenised.replace(n,a),e.values.push(...o.map(i)))}function Ga(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&qa(n,Ha),qa(n,Ya),qa(n,Ka),n}function Xa(e){return Ga(e).values}function Qa(e){const{values:t,numColors:n,numVars:r,tokenised:a}=Ga(e),i=t.length;return e=>{let t=a;for(let a=0;a<i;a++)t=a<r?t.replace(Ha.token,e[a]):a<r+n?t.replace(Ya.token,_a.transform(e[a])):t.replace(Ka.token,Fn(e[a]));return t}}const Ja=e=>"number"===typeof e?0:e;const Za={test:function(e){var t,n;return isNaN(e)&&Un(e)&&((null===(t=e.match(Bn))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(Vn))||void 0===n?void 0:n.length)||0)>0},parse:Xa,createTransformer:Qa,getAnimatableNone:function(e){const t=Xa(e);return Qa(e)(t.map(Ja))}},ei=(e,t)=>n=>`${n>0?t:e}`;function ti(e,t){return"number"===typeof e?n=>Fa(e,t,n):_a.test(e)?Wa(e,t):e.startsWith("var(")?ei(e,t):ai(e,t)}const ni=(e,t)=>{const n=[...e],r=n.length,a=e.map(((e,n)=>ti(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=a[t](e);return n}},ri=(e,t)=>{const n={...e,...t},r={};for(const a in n)void 0!==e[a]&&void 0!==t[a]&&(r[a]=ti(e[a],t[a]));return e=>{for(const t in r)n[t]=r[t](e);return n}},ai=(e,t)=>{const n=Za.createTransformer(t),r=Ga(e),a=Ga(t);return r.numVars===a.numVars&&r.numColors===a.numColors&&r.numNumbers>=a.numNumbers?$r(ni(r.values,a.values),n):(sa(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),ei(e,t))},ii=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},oi=(e,t)=>n=>Fa(e,t,n);function si(e,t,n){const r=[],a=n||function(e){return"number"===typeof e?oi:"string"===typeof e?_a.test(e)?Wa:ai:Array.isArray(e)?ni:"object"===typeof e?ri:oi}(e[0]),i=e.length-1;for(let o=0;o<i;o++){let n=a(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||zr:t;n=$r(e,n)}r.push(n)}return r}function li(e,t){let{clamp:n=!0,ease:r,mixer:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=e.length;if(la(i===t.length,"Both input and output ranges must be the same length"),1===i)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=si(t,r,a),s=o.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=ii(e[n],e[n+1],t);return o[n](r)};return n?t=>l(In(e[0],e[i-1],t)):l}function ci(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const a=ii(0,t,r);e.push(Fa(n,1,a))}}(t,e.length-1),t}function ui(e){let{duration:t=300,keyframes:n,times:r,ease:a="easeInOut"}=e;const i=(e=>Array.isArray(e)&&"number"!==typeof e[0])(a)?a.map(Aa):Aa(a),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:ci(n),t),l=li(s,n,{ease:Array.isArray(i)?i:(c=n,u=i,c.map((()=>u||ka)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}function di(e,t){return t?e*(1e3/t):0}function pi(e,t,n){const r=Math.max(t-5,0);return di(n-e(r),t-r)}const fi=.001;function mi(e){let t,n,{duration:r=800,bounce:a=.25,velocity:i=0,mass:o=1}=e;sa(r<=ca(10),"Spring duration must be 10 seconds or less");let s=1-a;s=In(.05,1,s),r=In(.01,10,ua(r)),s<1?(t=e=>{const t=e*s,n=t*r,a=t-i,o=gi(e,s),l=Math.exp(-n);return fi-a/o*l},n=e=>{const n=e*s*r,a=n*i+i,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=gi(Math.pow(e,2),s);return(-t(e)+fi>0?-1:1)*((a-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-i)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(i-e)));const l=function(e,t,n){let r=n;for(let a=1;a<hi;a++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=ca(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const hi=12;function gi(e,t){return e*Math.sqrt(1-t*t)}const vi=["duration","bounce"],yi=["stiffness","damping","mass"];function xi(e,t){return t.some((t=>void 0!==e[t]))}function bi(e){let{keyframes:t,restDelta:n,restSpeed:r,...a}=e;const i=t[0],o=t[t.length-1],s={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!xi(e,yi)&&xi(e,vi)){const n=mi(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...a,velocity:-ua(a.velocity||0)}),m=p||0,h=c/(2*Math.sqrt(l*u)),g=o-i,v=ua(Math.sqrt(l/u)),y=Math.abs(g)<5;let x;if(r||(r=y?.01:2),n||(n=y?.005:.5),h<1){const e=gi(v,h);x=t=>{const n=Math.exp(-h*v*t);return o-n*((m+h*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===h)x=e=>o-Math.exp(-v*e)*(g+(m+v*g)*e);else{const e=v*Math.sqrt(h*h-1);x=t=>{const n=Math.exp(-h*v*t),r=Math.min(e*t,300);return o-n*((m+h*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:f&&d||null,next:e=>{const t=x(e);if(f)s.done=e>=d;else{let a=m;0!==e&&(a=h<1?pi(x,e,t):0);const i=Math.abs(a)<=r,l=Math.abs(o-t)<=n;s.done=i&&l}return s.value=s.done?o:t,s}}}function ki(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:a=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],f={done:!1,value:p},m=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let h=r*n;const g=p+h,v=void 0===s?g:s(g);v!==g&&(h=v-p);const y=e=>-h*Math.exp(-e/a),x=e=>v+y(e),b=e=>{const t=y(e),n=x(e);f.done=Math.abs(t)<=u,f.value=f.done?v:n};let k,w;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(f.value)&&(k=e,w=bi({keyframes:[f.value,m(f.value)],velocity:pi(x,e,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return w||void 0!==k||(t=!0,b(e),S(e)),void 0!==k&&e>k?w.next(e-k):(!t&&b(e),f)}}}const wi=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>Ar.update(t,!0),stop:()=>Or(t),now:()=>Lr.isProcessing?Lr.timestamp:performance.now()}};function Si(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const Ci={decay:ki,inertia:ki,tween:ui,keyframes:ui,spring:bi};function Ei(e){let t,n,{autoplay:r=!0,delay:a=0,driver:i=wi,keyframes:o,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",onPlay:d,onStop:p,onComplete:f,onUpdate:m,...h}=e,g=1,v=!1;const y=()=>{n=new Promise((e=>{t=e}))};let x;y();const b=Ci[s]||ui;let k;b!==ui&&"number"!==typeof o[0]&&(k=li([0,100],o,{clamp:!1}),o=[0,100]);const w=b({...h,keyframes:o});let S;"mirror"===u&&(S=b({...h,keyframes:[...o].reverse(),velocity:-(h.velocity||0)}));let C="idle",E=null,j=null,P=null;null===w.calculatedDuration&&l&&(w.calculatedDuration=Si(w));const{calculatedDuration:z}=w;let T=1/0,N=1/0;null!==z&&(T=z+c,N=T*(l+1)-c);let A=0;const O=e=>{if(null===j)return;g>0&&(j=Math.min(j,e)),g<0&&(j=Math.min(e-N/g,j)),A=null!==E?E:Math.round(e-j)*g;const t=A-a*(g>=0?1:-1),n=g>=0?t<0:t>N;A=Math.max(t,0),"finished"===C&&null===E&&(A=N);let r=A,i=w;if(l){const e=Math.min(A,N)/T;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===u?(n=1-n,c&&(n-=c/T)):"mirror"===u&&(i=S)),r=In(0,1,n)*T}const s=n?{done:!1,value:o[0]}:i.next(r);k&&(s.value=k(s.value));let{done:d}=s;n||null===z||(d=g>=0?A>=N:A<=0);const p=null===E&&("finished"===C||"running"===C&&d);return m&&m(s.value),p&&I(),s},L=()=>{x&&x.stop(),x=void 0},M=()=>{C="idle",L(),t(),y(),j=P=null},I=()=>{C="finished",f&&f(),L(),t()},R=()=>{if(v)return;x||(x=i(O));const e=x.now();d&&d(),null!==E?j=e-E:j&&"finished"!==C||(j=e),"finished"===C&&y(),P=j,E=null,C="running",x.start()};r&&R();const D={then:(e,t)=>n.then(e,t),get time(){return ua(A)},set time(e){e=ca(e),A=e,null===E&&x&&0!==g?j=x.now()-e/g:E=e},get duration(){const e=null===w.calculatedDuration?Si(w):w.calculatedDuration;return ua(e)},get speed(){return g},set speed(e){e!==g&&x&&(g=e,D.time=ua(A))},get state(){return C},play:R,pause:()=>{C="paused",E=A},stop:()=>{v=!0,"idle"!==C&&(C="idle",p&&p(),M())},cancel:()=>{null!==P&&O(P),M()},complete:()=>{C="finished"},sample:e=>(j=0,O(e))};return D}const ji=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Pi=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function zi(e,t,n){let{onUpdate:r,onComplete:a,...i}=n;if(!(ji()&&Pi.has(t)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type))return!1;let o,s,l=!1,c=!1;const u=()=>{s=new Promise((e=>{o=e}))};u();let{keyframes:d,duration:p=300,ease:f,times:m}=i;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!fa(t.ease))(t,i)){const e=Ei({...i,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;m=void 0,d=n,p=r-10,f="linear"}const h=function(e,t,n){let{delay:r=0,duration:a,repeat:i=0,repeatType:o="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const u=ga(s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:a,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:i+1,direction:"reverse"===o?"alternate":"normal"})}(e.owner.current,t,d,{...i,duration:p,ease:f,times:m}),g=()=>{c=!1,h.cancel()},v=()=>{c=!0,Ar.update(g),o(),u()};h.onfinish=()=>{c||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,i)),a&&a(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(h.timeline=e,h.onfinish=null,zr),get time(){return ua(h.currentTime||0)},set time(e){h.currentTime=ca(e)},get speed(){return h.playbackRate},set speed(e){h.playbackRate=e},get duration(){return ua(p)},play:()=>{l||(h.play(),Or(g))},pause:()=>h.pause(),stop:()=>{if(l=!0,"idle"===h.playState)return;const{currentTime:t}=h;if(t){const n=Ei({...i,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}v()},complete:()=>{c||h.finish()},cancel:v}}const Ti={type:"spring",stiffness:500,damping:25,restSpeed:10},Ni={type:"keyframes",duration:.8},Ai={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Oi=(e,t)=>{let{keyframes:n}=t;return n.length>2?Ni:jn.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Ti:Ai},Li=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!Za.test(t)&&"0"!==t||t.startsWith("url("))),Mi=new Set(["brightness","contrast","saturate","opacity"]);function Ii(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Bn)||[];if(!r)return e;const a=n.replace(r,"");let i=Mi.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+a+")"}const Ri=/([a-z-]*)\(.*?\)/g,Di={...Za,getAnimatableNone:e=>{const t=e.match(Ri);return t?t.map(Ii).join(" "):e}},_i={...Jn,color:_a,backgroundColor:_a,outlineColor:_a,fill:_a,stroke:_a,borderColor:_a,borderTopColor:_a,borderRightColor:_a,borderBottomColor:_a,borderLeftColor:_a,filter:Di,WebkitFilter:Di},Fi=e=>_i[e];function Bi(e,t){let n=Fi(e);return n!==Di&&(n=Za),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Vi=e=>/^0[^.\s]+$/.test(e);function $i(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||Vi(e):void 0}function Ui(e,t){return e[t]||e.default||e}const Wi=!1,Hi=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return a=>{const i=Ui(r,e)||{},o=i.delay||r.delay||0;let{elapsed:s=0}=r;s-=ca(o);const l=function(e,t,n,r){const a=Li(t,n);let i;i=Array.isArray(n)?[...n]:[null,n];const o=void 0!==r.from?r.from:e.get();let s;const l=[];for(let c=0;c<i.length;c++)null===i[c]&&(i[c]=0===c?o:i[c-1]),$i(i[c])&&l.push(c),"string"===typeof i[c]&&"none"!==i[c]&&"0"!==i[c]&&(s=i[c]);if(a&&l.length&&s)for(let c=0;c<l.length;c++)i[l[c]]=Bi(t,s);return i}(t,e,n,i),c=l[0],u=l[l.length-1],d=Li(e,c),p=Li(e,u);sa(d===p,`You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);let f={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-s,onUpdate:e=>{t.set(e),i.onUpdate&&i.onUpdate(e)},onComplete:()=>{a(),i.onComplete&&i.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:a,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length}(i)||(f={...f,...Oi(e,f)}),f.duration&&(f.duration=ca(f.duration)),f.repeatDelay&&(f.repeatDelay=ca(f.repeatDelay)),!d||!p||da||!1===i.type||Wi)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:a}=e;const i=()=>(r&&r(t[t.length-1]),a&&a(),{time:0,speed:1,duration:0,play:zr,pause:zr,stop:zr,then:e=>(e(),Promise.resolve()),cancel:zr,complete:zr});return n?Ei({keyframes:[0,1],duration:0,delay:n,onComplete:i}):i()}(da?{...f,delay:0}:f);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=zi(t,e,f);if(n)return n}return Ei(f)}};function Yi(e){return Boolean(zn(e)&&e.add)}const Ki=e=>/^\-?\d*\.?\d+$/.test(e);function qi(e,t){-1===e.indexOf(t)&&e.push(t)}function Gi(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Xi{constructor(){this.subscriptions=[]}add(e){return qi(this.subscriptions,e),()=>Gi(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let a=0;a<r;a++){const r=this.subscriptions[a];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Qi={current:void 0};class Ji{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:a}=Lr;t.lastUpdated!==a&&(t.timeDelta=r,t.lastUpdated=a,Ar.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>Ar.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Xi);const n=this.events[e].add(t);return"change"===e?()=>{n(),Ar.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Qi.current&&Qi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?di(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zi(e,t){return new Ji(e,t)}const eo=e=>t=>t.test(e),to=[Rn,Kn,Yn,Hn,Gn,qn,{test:e=>"auto"===e,parse:e=>e}],no=e=>to.find(eo(e)),ro=[...to,_a,Za],ao=e=>ro.find(eo(e));function io(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Zi(n))}function oo(e,t){const n=oa(e,t);let{transitionEnd:r={},transition:a={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const o in i){io(e,o,Cr(i[o]))}}function so(e,t){if(!t)return;return(t[e]||t.default||t).from}function lo(e,t){let{protectedKeys:n,needsAnimating:r}=e;const a=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,a}function co(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function uo(e,t){let{delay:n=0,transitionOverride:r,type:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:i=e.getDefaultTransition(),transitionEnd:o,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const c=[],u=a&&e.animationState&&e.animationState.getState()[a];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||u&&lo(u,d))continue;const a={delay:n,elapsed:0,...Ui(i||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[rn];if(n){const e=window.HandoffAppearAnimations(n,d,t,Ar);null!==e&&(a.elapsed=e,a.isHandoff=!0)}}let o=!a.isHandoff&&!co(t,r);if("spring"===a.type&&(t.getVelocity()||a.velocity)&&(o=!1),t.animation&&(o=!1),o)continue;t.start(Hi(d,t,r,e.shouldReduceMotion&&jn.has(d)?{type:!1}:a));const p=t.animation;Yi(l)&&(l.add(d),p.then((()=>l.remove(d)))),c.push(p)}return o&&Promise.all(c).then((()=>{o&&oo(e,o)})),c}function po(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=oa(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(a=n.transitionOverride);const i=r?()=>Promise.all(uo(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:o,staggerDirection:s}=a;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===a?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(fo).forEach(((e,r)=>{e.notify("AnimationStart",t),o.push(po(e,t,{...i,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,i+r,o,s,n)}:()=>Promise.resolve(),{when:s}=a;if(s){const[e,t]="beforeChildren"===s?[i,o]:[o,i];return e().then((()=>t()))}return Promise.all([i(),o(n.delay)])}function fo(e,t){return e.sortNodePosition(t)}const mo=[...ln].reverse(),ho=ln.length;function go(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const a=t.map((t=>po(e,t,r)));n=Promise.all(a)}else if("string"===typeof t)n=po(e,t,r);else{const a="function"===typeof t?oa(e,t,r.custom):t;n=Promise.all(uo(e,a,r))}return n.then((()=>e.notify("AnimationComplete",t)))}(e,n,r)})))}function vo(e){let t=go(e);const n={animate:xo(!0),whileInView:xo(),whileHover:xo(),whileTap:xo(),whileDrag:xo(),whileFocus:xo(),exit:xo()};let r=!0;const a=(t,n)=>{const r=oa(e,n);if(r){const{transition:e,transitionEnd:n,...a}=r;t={...t,...a,...n}}return t};function i(i,o){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],u=new Set;let d={},p=1/0;for(let t=0;t<ho;t++){const f=mo[t],m=n[f],h=void 0!==s[f]?s[f]:l[f],g=on(h),v=f===o?m.isActive:null;!1===v&&(p=t);let y=h===l[f]&&h!==s[f]&&g;if(y&&r&&e.manuallyAnimateOnMount&&(y=!1),m.protectedKeys={...d},!m.isActive&&null===v||!h&&!m.prevProp||sn(h)||"boolean"===typeof h)continue;let x=yo(m.prevProp,h)||f===o&&m.isActive&&!y&&g||t>p&&g,b=!1;const k=Array.isArray(h)?h:[h];let w=k.reduce(a,{});!1===v&&(w={});const{prevResolvedValues:S={}}=m,C={...S,...w},E=e=>{x=!0,u.has(e)&&(b=!0,u.delete(e)),m.needsAnimating[e]=!0};for(const e in C){const t=w[e],n=S[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Sr(t)&&Sr(n)?!ia(t,n):t!==n,r?void 0!==t?E(e):u.add(e):void 0!==t&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=w,m.isActive&&(d={...d,...w}),r&&e.blockInitialAnimation&&(x=!1),!x||y&&!b||c.push(...k.map((e=>({animation:e,options:{type:f,...i}}))))}if(u.size){const t={};u.forEach((n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)})),c.push({animation:t})}let f=Boolean(c.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(f=!1),r=!1,f?t(c):Promise.resolve()}return{animateChanges:i,setActive:function(t,r,a){var o;if(n[t].isActive===r)return Promise.resolve();null===(o=e.variantChildren)||void 0===o||o.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const s=i(a,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function yo(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!ia(t,e)}function xo(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let bo=0;const ko={animation:{Feature:class extends qr{constructor(e){super(e),e.animationState||(e.animationState=vo(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),sn(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends qr{constructor(){super(...arguments),this.id=bo++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const a=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&a.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},wo=(e,t)=>Math.abs(e-t);class So{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:a=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=jo(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=wo(e.x,t.x),r=wo(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:a}=Lr;this.history.push({...r,timestamp:a});const{onStart:i,onMove:o}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Co(t,this.transformPagePoint),Ar.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:a}=this.handlers;if(this.dragSnapToOrigin&&a&&a(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const i=jo("pointercancel"===e.type?this.lastMoveEventInfo:Co(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,i),r&&r(e,i)},!_r(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const i=Co(Fr(e),this.transformPagePoint),{point:o}=i,{timestamp:s}=Lr;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,jo(i,this.history)),this.removeListeners=$r(Br(this.contextWindow,"pointermove",this.handlePointerMove),Br(this.contextWindow,"pointerup",this.handlePointerUp),Br(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Or(this.updatePoint)}}function Co(e,t){return t?{point:t(e.point)}:e}function Eo(e,t){return{x:e.x-t.x,y:e.y-t.y}}function jo(e,t){let{point:n}=e;return{point:n,delta:Eo(n,zo(t)),offset:Eo(n,Po(t)),velocity:To(t,.1)}}function Po(e){return e[0]}function zo(e){return e[e.length-1]}function To(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const a=zo(e);for(;n>=0&&(r=e[n],!(a.timestamp-r.timestamp>ca(t)));)n--;if(!r)return{x:0,y:0};const i=ua(a.timestamp-r.timestamp);if(0===i)return{x:0,y:0};const o={x:(a.x-r.x)/i,y:(a.y-r.y)/i};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function No(e){return e.max-e.min}function Ao(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function Oo(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Fa(t.min,t.max,e.origin),e.scale=No(n)/No(t),(Ao(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Fa(n.min,n.max,e.origin)-e.originPoint,(Ao(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Lo(e,t,n,r){Oo(e.x,t.x,n.x,r?r.originX:void 0),Oo(e.y,t.y,n.y,r?r.originY:void 0)}function Mo(e,t,n){e.min=n.min+t.min,e.max=e.min+No(t)}function Io(e,t,n){e.min=t.min-n.min,e.max=e.min+No(t)}function Ro(e,t,n){Io(e.x,t.x,n.x),Io(e.y,t.y,n.y)}function Do(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function _o(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Fo=.35;function Bo(e,t,n){return{min:Vo(e,t),max:Vo(e,n)}}function Vo(e,t){return"number"===typeof e?e:e[t]||0}function $o(e){return[e("x"),e("y")]}function Uo(e){let{top:t,left:n,right:r,bottom:a}=e;return{x:{min:n,max:r},y:{min:t,max:a}}}function Wo(e){return void 0===e||1===e}function Ho(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Wo(t)||!Wo(n)||!Wo(r)}function Yo(e){return Ho(e)||Ko(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Ko(e){return qo(e.x)||qo(e.y)}function qo(e){return e&&"0%"!==e}function Go(e,t,n){return n+t*(e-n)}function Xo(e,t,n,r,a){return void 0!==a&&(e=Go(e,a,r)),Go(e,n,r)+t}function Qo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;e.min=Xo(e.min,t,n,r,a),e.max=Xo(e.max,t,n,r,a)}function Jo(e,t){let{x:n,y:r}=t;Qo(e.x,n.translate,n.scale,n.originPoint),Qo(e.y,r.translate,r.scale,r.originPoint)}function Zo(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function es(e,t){e.min=e.min+t,e.max=e.max+t}function ts(e,t,n){let[r,a,i]=n;const o=void 0!==t[i]?t[i]:.5,s=Fa(e.min,e.max,o);Qo(e,t[r],t[a],s,t.scale)}const ns=["x","scaleX","originX"],rs=["y","scaleY","originY"];function as(e,t){ts(e.x,t,ns),ts(e.y,t,rs)}function is(e,t){return Uo(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const os=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},ss=new WeakMap;class ls{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new So(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Fr(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:a}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Yr(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$o((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Yn.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=No(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),a&&Ar.update((()=>a(e,t)),!1,!0);const{animationState:i}=this.visualElement;i&&i.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:a,onDrag:i}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&a&&a(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),i&&i(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>$o((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:os(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:a}=this.getProps();a&&Ar.update((()=>a(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!cs(e,r,this.currentDirection))return;const a=this.getAxisMotionValue(e);let i=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(i=function(e,t,n){let{min:r,max:a}=t;return void 0!==r&&e<r?e=n?Fa(r,e,n.min):Math.max(e,r):void 0!==a&&e>a&&(e=n?Fa(a,e,n.max):Math.min(e,a)),e}(i,this.constraints[e],this.elastic[e])),a.set(i)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,a=this.constraints;t&&an(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:a,right:i}=t;return{x:Do(e.x,r,i),y:Do(e.y,n,a)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fo;return!1===e?e=0:!0===e&&(e=Fo),{x:Bo(e,"left","right"),y:Bo(e,"top","bottom")}}(n),a!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&$o((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!an(e))return!1;const n=e.current;la(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const a=function(e,t,n){const r=is(e,n),{scroll:a}=t;return a&&(es(r.x,a.offset.x),es(r.y,a.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let i=function(e,t){return{x:_o(e.x,t.x),y:_o(e.y,t.y)}}(r.layout.layoutBox,a);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(i));this.hasMutatedConstraints=!!e,e&&(i=Uo(e))}return i}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=$o((o=>{if(!cs(o,t,this.currentDirection))return;let l=s&&s[o]||{};i&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...a,...l};return this.startAxisValueAnimation(o,d)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(Hi(e,n,0,t))}stopAnimation(){$o((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){$o((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){$o((t=>{const{drag:n}=this.getProps();if(!cs(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,a=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:i}=r.layout.layoutBox[t];a.set(e[t]-Fa(n,i,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!an(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};$o((e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=No(e),a=No(t);return a>r?n=ii(t.min,t.max-r,e.min):r>a&&(n=ii(e.min,e.max-a,t.min)),In(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),$o((t=>{if(!cs(t,e,null))return;const n=this.getAxisMotionValue(t),{min:a,max:i}=this.constraints[t];n.set(Fa(a,i,r[t]))}))}addListeners(){if(!this.visualElement.current)return;ss.set(this.visualElement,this);const e=Br(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();an(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const a=Dr(window,"resize",(()=>this.scalePositionWithinConstraints())),i=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&($o((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{a(),e(),r(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:a=!1,dragElastic:i=Fo,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:a,dragElastic:i,dragMomentum:o}}}function cs(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const us=e=>(t,n)=>{e&&Ar.update((()=>e(t,n)))};const ds={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ps(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const fs={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Kn.test(e))return e;e=parseFloat(e)}return`${ps(e,t.target.x)}% ${ps(e,t.target.y)}%`}},ms={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const a=e,i=Za.parse(e);if(i.length>5)return a;const o=Za.createTransformer(e),s="number"!==typeof i[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;i[0+s]/=l,i[1+s]/=c;const u=Fa(l,c,.5);return"number"===typeof i[2+s]&&(i[2+s]/=u),"number"===typeof i[3+s]&&(i[3+s]/=u),o(i)}};class hs extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:a}=e;var i;i=vs,Object.assign(Cn,i),a&&(t.group&&t.group.add(a),n&&n.register&&r&&n.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",(()=>{this.safeToRemove()})),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),ds.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:a}=this.props,i=n.projection;return i?(i.isPresent=a,r||e.layoutDependency!==t||void 0===t?i.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?i.promote():i.relegate()||Ar.postRender((()=>{const e=i.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function gs(t){const[n,r]=function(){const t=(0,e.useContext)(Jt);if(null===t)return[!0,null];const{isPresent:n,onExitComplete:r,register:a}=t,i=(0,e.useId)();return(0,e.useEffect)((()=>a(i)),[]),!n&&r?[!1,()=>r&&r(i)]:[!0]}(),a=(0,e.useContext)(gn);return e.createElement(hs,{...t,layoutGroup:a,switchLayoutGroup:(0,e.useContext)(vn),isPresent:n,safeToRemove:r})}const vs={borderRadius:{...fs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fs,borderTopRightRadius:fs,borderBottomLeftRadius:fs,borderBottomRightRadius:fs,boxShadow:ms},ys=["TopLeft","TopRight","BottomLeft","BottomRight"],xs=ys.length,bs=e=>"string"===typeof e?parseFloat(e):e,ks=e=>"number"===typeof e||Kn.test(e);function ws(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Ss=Es(0,.5,Ea),Cs=Es(.5,.95,zr);function Es(e,t,n){return r=>r<e?0:r>t?1:n(ii(e,t,r))}function js(e,t){e.min=t.min,e.max=t.max}function Ps(e,t){js(e.x,t.x),js(e.y,t.y)}function zs(e,t,n,r,a){return e=Go(e-=t,1/n,r),void 0!==a&&(e=Go(e,1/a,r)),e}function Ts(e,t,n,r,a){let[i,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Yn.test(t)&&(t=parseFloat(t),t=Fa(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=Fa(i.min,i.max,r);e===i&&(s-=t),e.min=zs(e.min,t,n,s,a),e.max=zs(e.max,t,n,s,a)}(e,t[i],t[o],t[s],t.scale,r,a)}const Ns=["x","scaleX","originX"],As=["y","scaleY","originY"];function Os(e,t,n,r){Ts(e.x,t,Ns,n?n.x:void 0,r?r.x:void 0),Ts(e.y,t,As,n?n.y:void 0,r?r.y:void 0)}function Ls(e){return 0===e.translate&&1===e.scale}function Ms(e){return Ls(e.x)&&Ls(e.y)}function Is(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Rs(e){return No(e.x)/No(e.y)}class Ds{constructor(){this.members=[]}add(e){qi(this.members,e),e.scheduleRender()}remove(e){if(Gi(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function _s(e,t,n){let r="";const a=e.x.translate/t.x,i=e.y.translate/t.y;if((a||i)&&(r=`translate3d(${a}px, ${i}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:a}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),a&&(r+=`rotateY(${a}deg) `)}const o=e.x.scale*t.x,s=e.y.scale*t.y;return 1===o&&1===s||(r+=`scale(${o}, ${s})`),r||"none"}const Fs=(e,t)=>e.depth-t.depth;class Bs{constructor(){this.children=[],this.isDirty=!1}add(e){qi(this.children,e),this.isDirty=!0}remove(e){Gi(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Fs),this.isDirty=!1,this.children.forEach(e)}}const Vs=["","X","Y","Z"],$s={visibility:"hidden"};let Us=0;const Ws={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Hs(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:a,resetTransform:i}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=Us++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{var e;this.projectionUpdateScheduled=!1,Ws.totalNodes=Ws.resolvedTargetDeltas=Ws.recalculatedProjection=0,this.nodes.forEach(qs),this.nodes.forEach(tl),this.nodes.forEach(nl),this.nodes.forEach(Gs),e=Ws,window.MotionDebug&&window.MotionDebug.record(e)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Bs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Xi),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:a,layout:i,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||a)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=a=>{let{timestamp:i}=a;const o=i-n;o>=t&&(Or(r),e(o-t))};return Ar.read(r,!0),()=>Or(r)}(r,250),ds.hasAnimatedSinceResize&&(ds.hasAnimatedSinceResize=!1,this.nodes.forEach(el))}))}a&&this.root.registerSharedNode(a,this),!1!==this.options.animate&&o&&(a||i)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:a}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const i=this.options.transition||o.getDefaultTransition()||ll,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!Is(this.targetLayout,a)||r,u=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...Ui(i,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||el(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=a}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Or(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rl),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let a=0;a<this.path.length;a++){const e=this.path[a];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Qs);this.isUpdating||this.nodes.forEach(Js),this.isUpdating=!1,this.nodes.forEach(Zs),this.nodes.forEach(Ys),this.nodes.forEach(Ks),this.clearAllSnapshots();const e=performance.now();Lr.delta=In(0,1e3/60,e-Lr.timestamp),Lr.timestamp=e,Lr.isProcessing=!0,Mr.update.process(Lr),Mr.preRender.process(Lr),Mr.render.process(Lr),Lr.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(Xs),this.sharedNodes.forEach(al)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ar.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ar.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:a(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!Ms(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,a=r!==this.prevTransformTemplateValue;e&&(t||Yo(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),dl((r=n).x),dl(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(es(t.x,n.offset.x),es(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Ps(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:a,options:i}=r;if(r!==this.root&&a&&i.layoutScroll){if(a.isRoot){Ps(t,e);const{scroll:n}=this.root;n&&(es(t.x,-n.offset.x),es(t.y,-n.offset.y))}es(t.x,a.offset.x),es(t.y,a.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Ps(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&as(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Yo(e.latestValues)&&as(n,e.latestValues)}return Yo(this.latestValues)&&as(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Ps(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Yo(e.latestValues))continue;Ho(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Ps(r,e.measurePageBox()),Os(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Yo(this.latestValues)&&Os(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Lr.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:a,layoutId:i}=this.options;if(this.layout&&(a||i)){if(this.resolvedRelativeTargetAt=Lr.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Ro(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Ps(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,Mo(o.x,s.x,l.x),Mo(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Ps(this.target,this.layout.layoutBox),Jo(this.target,this.targetDelta)):Ps(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Ro(this.relativeTargetOrigin,this.target,e.target),Ps(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ws.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Ho(this.parent.latestValues)&&!Ko(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===Lr.timestamp&&(r=!1),r)return;const{layout:a,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!a&&!i)return;Ps(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=n.length;if(!a)return;let i,o;t.x=t.y=1;for(let s=0;s<a;s++){i=n[s],o=i.projectionDelta;const a=i.instance;a&&a.style&&"contents"===a.style.display||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&as(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Jo(e,o)),r&&Yo(i.latestValues)&&as(e,i.latestValues))}t.x=Zo(t.x),t.y=Zo(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;Lo(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=_s(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===o&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Ws.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},a={...this.latestValues},i={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(sl));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;il(i.x,e.x,n),il(i.y,e.y,n),this.setTargetDelta(i),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ro(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){ol(e.x,t.x,n.x,r),ol(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Ps(d,this.relativeTarget)),s&&(this.animationValues=a,function(e,t,n,r,a,i){a?(e.opacity=Fa(0,void 0!==n.opacity?n.opacity:1,Ss(r)),e.opacityExit=Fa(void 0!==t.opacity?t.opacity:1,0,Cs(r))):i&&(e.opacity=Fa(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let o=0;o<xs;o++){const a=`border${ys[o]}Radius`;let i=ws(t,a),s=ws(n,a);void 0===i&&void 0===s||(i||(i=0),s||(s=0),0===i||0===s||ks(i)===ks(s)?(e[a]=Math.max(Fa(bs(i),bs(s),r),0),(Yn.test(s)||Yn.test(i))&&(e[a]+="%")):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=Fa(t.rotate||0,n.rotate||0,r))}(a,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Or(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ar.update((()=>{ds.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=zn(e)?e:Zi(e);return r.start(Hi("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:a}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&pl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=No(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=No(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Ps(t,n),as(t,a),Lo(this.projectionDeltaWithTransform,this.layoutCorrected,t,a)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Ds);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let a=0;a<Vs.length;a++){const t="rotate"+Vs[a];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const a in r)e.setStaticValue(a,r[a]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return $s;const r={visibility:""},a=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=Er(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=a?a(this.latestValues,""):"none",r;const i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Er(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Yo(this.latestValues)&&(t.transform=a?a({},""):"none",this.hasProjected=!1),t}const o=i.animationValues||i.latestValues;this.applyTransformsToTarget(),r.transform=_s(this.projectionDeltaWithTransform,this.treeScale,o),a&&(r.transform=a(o,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,i.animationValues?r.opacity=i===this?null!==(n=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:r.opacity=i===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const c in Cn){if(void 0===o[c])continue;const{correct:e,applyTo:t}=Cn[c],n="none"===r.transform?o[c]:e(o[c],i);if(t){const e=t.length;for(let a=0;a<e;a++)r[t[a]]=n}else r[c]=n}return this.options.layoutId&&(r.pointerEvents=i===this?Er(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(Qs),this.root.sharedNodes.clear()}}}function Ys(e){e.updateLayout()}function Ks(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:a}=e.options,i=n.source!==e.layout.source;"size"===a?$o((e=>{const r=i?n.measuredBox[e]:n.layoutBox[e],a=No(r);r.min=t[e].min,r.max=r.min+a})):pl(a,n.layoutBox,t)&&$o((r=>{const a=i?n.measuredBox[r]:n.layoutBox[r],o=No(t[r]);a.max=a.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Lo(o,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};i?Lo(s,e.applyTransform(r,!0),n.measuredBox):Lo(s,t,n.layoutBox);const l=!Ms(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:a,layout:i}=r;if(a&&i){const o={x:{min:0,max:0},y:{min:0,max:0}};Ro(o,n.layoutBox,a.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Ro(s,t,i.layoutBox),Is(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function qs(e){Ws.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Gs(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Xs(e){e.clearSnapshot()}function Qs(e){e.clearMeasurements()}function Js(e){e.isLayoutDirty=!1}function Zs(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function el(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function tl(e){e.resolveTargetDelta()}function nl(e){e.calcProjection()}function rl(e){e.resetRotation()}function al(e){e.removeLeadSnapshot()}function il(e,t,n){e.translate=Fa(t.translate,0,n),e.scale=Fa(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ol(e,t,n,r){e.min=Fa(t.min,n.min,r),e.max=Fa(t.max,n.max,r)}function sl(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const ll={duration:.45,ease:[.4,0,.1,1]},cl=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),ul=cl("applewebkit/")&&!cl("chrome/")?Math.round:zr;function dl(e){e.min=ul(e.min),e.max=ul(e.max)}function pl(e,t,n){return"position"===e||"preserve-aspect"===e&&!Ao(Rs(t),Rs(n),.2)}const fl=Hs({attachResizeListener:(e,t)=>Dr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ml={current:void 0},hl=Hs({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ml.current){const e=new fl({});e.mount(window),e.setOptions({layoutScroll:!0}),ml.current=e}return ml.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),gl={pan:{Feature:class extends qr{constructor(){super(...arguments),this.removePointerDownListener=zr}onPointerDown(e){this.session=new So(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:os(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:us(e),onStart:us(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&Ar.update((()=>r(e,t)))}}}mount(){this.removePointerDownListener=Br(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends qr{constructor(e){super(e),this.removeGroupControls=zr,this.removeListeners=zr,this.controls=new ls(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zr}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:hl,MeasureLayout:gs}},vl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function yl(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;la(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,a]=function(e){const t=vl.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const e=i.trim();return Ki(e)?parseFloat(e):e}return Ln(a)?yl(a,t,n+1):a}const xl=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),bl=e=>xl.has(e),kl=e=>e===Rn||e===Kn,wl=(e,t)=>parseFloat(e.split(", ")[t]),Sl=(e,t)=>(n,r)=>{let{transform:a}=r;if("none"===a||!a)return 0;const i=a.match(/^matrix3d\((.+)\)$/);if(i)return wl(i[1],t);{const t=a.match(/^matrix\((.+)\)$/);return t?wl(t[1],e):0}},Cl=new Set(["x","y","z"]),El=En.filter((e=>!Cl.has(e)));const jl={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:a="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(a)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:a="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(a)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:Sl(4,13),y:Sl(5,14)};jl.translateX=jl.x,jl.translateY=jl.y;const Pl=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const a=Object.keys(t).filter(bl);let i=[],o=!1;const s=[];if(a.forEach((a=>{const l=e.getValue(a);if(!e.hasValue(a))return;let c=n[a],u=no(c);const d=t[a];let p;if(Sr(d)){const e=d.length,t=null===d[0]?1:0;c=d[t],u=no(c);for(let n=t;n<e&&null!==d[n];n++)p?la(no(d[n])===p,"All keyframes must be of the same type"):(p=no(d[n]),la(p===u||kl(u)&&kl(p),"Keyframes must be of the same dimension as the current value"))}else p=no(d);if(u!==p)if(kl(u)&&kl(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[a]=parseFloat(d):Array.isArray(d)&&p===Kn&&(t[a]=d.map(parseFloat))}else(null===u||void 0===u?void 0:u.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===d)?0===c?l.set(p.transform(c)):t[a]=u.transform(d):(o||(i=function(e){const t=[];return El.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),o=!0),s.push(a),r[a]=void 0!==r[a]?r[a]:t[a],l.jump(d))})),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,a=((e,t,n)=>{const r=t.measureViewportBox(),a=t.current,i=getComputedStyle(a),{display:o}=i,s={};"none"===o&&t.setStaticValue("display",e.display||"block"),n.forEach((e=>{s[e]=jl[e](r,i)})),t.render();const l=t.measureViewportBox();return n.forEach((n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=jl[n](l,i)})),e})(t,e,s);return i.length&&i.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),e.render(),Zt&&null!==n&&window.scrollTo({top:n}),{target:a,transitionEnd:r}}return{target:t,transitionEnd:r}};function zl(e,t,n,r){return(e=>Object.keys(e).some(bl))(t)?Pl(e,t,n,r):{target:t,transitionEnd:r}}const Tl=(e,t,n,r)=>{const a=function(e,t,n){let{...r}=t;const a=e.current;if(!(a instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach((e=>{const t=e.get();if(!Ln(t))return;const n=yl(t,a);n&&e.set(n)}));for(const i in r){const e=r[i];if(!Ln(e))continue;const t=yl(e,a);t&&(r[i]=t,n||(n={}),void 0===n[i]&&(n[i]=e))}return{target:r,transitionEnd:n}}(e,t,r);return zl(e,t=a.target,n,r=a.transitionEnd)},Nl={current:null},Al={current:!1};const Ol=new WeakMap,Ll=Object.keys(hn),Ml=Ll.length,Il=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Rl=cn.length;class Dl{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:a,visualState:i}=e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ar.render(this.render,!1,!0);const{latestValues:s,renderState:l}=i;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=a,this.options=o,this.isControllingVariants=un(n),this.isVariantNode=dn(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const e=u[d];void 0!==s[d]&&zn(e)&&(e.set(s[d],!1),Yi(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,Ol.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Al.current||function(){if(Al.current=!0,Zt)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Nl.current=e.matches;e.addListener(t),t()}else Nl.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Nl.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ol.delete(this.current),this.projection&&this.projection.unmount(),Or(this.notifyUpdate),Or(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=jn.has(e),r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Ar.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)})),a=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{r(),a()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let a,i,{children:o,...s}=e;for(let l=0;l<Ml;l++){const e=Ll[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:o}=hn[e];r&&(a=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),o&&(i=o))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:i,layoutScroll:o,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||i&&an(i),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:o,layoutRoot:l})}return i}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Il.length;n++){const t=Il[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const a in t){const i=t[a],o=n[a];if(zn(i))e.addValue(a,i),Yi(r)&&r.add(a);else if(zn(o))e.addValue(a,Zi(i,{owner:e})),Yi(r)&&r.remove(a);else if(o!==i)if(e.hasValue(a)){const t=e.getValue(a);!t.hasAnimated&&t.set(i)}else{const t=e.getStaticValue(a);e.addValue(a,Zi(void 0!==t?t:i,{owner:e}))}}for(const a in n)void 0===t[a]&&e.removeValue(a);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<Rl;t++){const n=cn[t],r=this.props[n];(on(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Zi(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=kr(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const a=this.getBaseTargetFromProps(this.props,e);return void 0===a||zn(a)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:a}on(e,t){return this.events[e]||(this.events[e]=new Xi),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class _l extends Dl{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:a,...i}=e,{transformValues:o}=t,s=function(e,t,n){const r={};for(const a in e){const e=so(a,t);if(void 0!==e)r[a]=e;else{const e=n.getValue(a);e&&(r[a]=e.get())}}return r}(i,r||{},this);if(o&&(a&&(a=o(a)),i&&(i=o(i)),s&&(s=o(s))),n){!function(e,t,n){var r,a;const i=Object.keys(t).filter((t=>!e.hasValue(t))),o=i.length;if(o)for(let s=0;s<o;s++){const o=i[s],l=t[o];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(a=null!==(r=n[o])&&void 0!==r?r:e.readValue(o))&&void 0!==a?a:t[o]),void 0!==c&&null!==c&&("string"===typeof c&&(Ki(c)||Vi(c))?c=parseFloat(c):!ao(c)&&Za.test(l)&&(c=Bi(o,l)),e.addValue(o,Zi(c,{owner:e})),void 0===n[o]&&(n[o]=c),null!==c&&e.setBaseTarget(o,c))}}(this,i,s);const e=Tl(this,i,s,a);a=e.transitionEnd,i=e.target}return{transition:r,transitionEnd:a,...i}}}class Fl extends _l{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(jn.has(t)){const e=Fi(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),a=(On(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof a?a.trim():a}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return is(e,n)}build(e,t,n,r){Zn(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return xr(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;zn(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,n,r){gr(e,t,n,r)}}class Bl extends _l{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(jn.has(t)){const e=Fi(t);return e&&e.default||0}return t=vr.has(t)?t:nn(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return br(e,t)}build(e,t,n,r){dr(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){yr(e,t,0,r)}mount(e){this.isSVGTag=fr(e.tagName),super.mount(e)}}const Vl=(e,t)=>Sn(e)?new Bl(t,{enableHardwareAcceleration:!1}):new Fl(t,{enableHardwareAcceleration:!0}),$l={...ko,...aa,...gl,...{layout:{ProjectionNode:hl,MeasureLayout:gs}}},Ul=kn(((e,t)=>function(e,t,n,r){let{forwardMotionProps:a=!1}=t;return{...Sn(e)?Ir:Rr,preloadedFeatures:n,useRender:hr(a),createVisualElement:r,Component:e}}(e,t,$l,Vl)));var Wl=n(579);Yt.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--card-background);
  box-shadow: 0 4px 0 var(--primary-red);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-yellow), var(--primary-red), var(--primary-yellow));
    z-index: 5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% -20%, rgba(178, 34, 34, 0.1), transparent 70%);
    z-index: 1;
    pointer-events: none;
  }
`,Yt(Ul.h1)`
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
  color: var(--primary-yellow);
  text-shadow: 4px 4px 0px var(--primary-red);
  letter-spacing: 3px;
  margin: 0;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,Yt(Ul.p)`
  font-family: 'Oswald', sans-serif;
  font-size: var(--text-medium);
  color: var(--secondary-cream);
  margin: 0;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`;function Hl(){const t=(0,e.useRef)(!1);return en((()=>(t.current=!0,()=>{t.current=!1})),[]),t}class Yl extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Kl(t){let{children:n,isPresent:r}=t;const a=(0,e.useId)(),i=(0,e.useRef)(null),o=(0,e.useRef)({width:0,height:0,top:0,left:0});return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:s}=o.current;if(r||!i.current||!e||!t)return;i.current.dataset.motionPopId=a;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[r]),e.createElement(Yl,{isPresent:r,childRef:i,sizeRef:o},e.cloneElement(n,{ref:i}))}const ql=t=>{let{children:n,initial:r,isPresent:a,onExitComplete:i,custom:o,presenceAffectsLayout:s,mode:l}=t;const c=wr(Gl),u=(0,e.useId)(),d=(0,e.useMemo)((()=>({id:u,initial:r,isPresent:a,custom:o,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;i&&i()},register:e=>(c.set(e,!1),()=>c.delete(e))})),s?void 0:[a]);return(0,e.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[a]),e.useEffect((()=>{!a&&!c.size&&i&&i()}),[a]),"popLayout"===l&&(n=e.createElement(Kl,{isPresent:a},n)),e.createElement(Jt.Provider,{value:d},n)};function Gl(){return new Map}const Xl=e=>e.key||"";const Ql=t=>{let{children:n,custom:r,initial:a=!0,onExitComplete:i,exitBeforeEnter:o,presenceAffectsLayout:s=!0,mode:l="sync"}=t;la(!o,"Replace exitBeforeEnter with mode='wait'");const c=(0,e.useContext)(gn).forceRender||function(){const t=Hl(),[n,r]=(0,e.useState)(0),a=(0,e.useCallback)((()=>{t.current&&r(n+1)}),[n]);return[(0,e.useCallback)((()=>Ar.postRender(a)),[a]),n]}()[0],u=Hl(),d=function(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}(n);let p=d;const f=(0,e.useRef)(new Map).current,m=(0,e.useRef)(p),h=(0,e.useRef)(new Map).current,g=(0,e.useRef)(!0);var v;if(en((()=>{g.current=!1,function(e,t){e.forEach((e=>{const n=Xl(e);t.set(n,e)}))}(d,h),m.current=p})),v=()=>{g.current=!0,h.clear(),f.clear()},(0,e.useEffect)((()=>()=>v()),[]),g.current)return e.createElement(e.Fragment,null,p.map((t=>e.createElement(ql,{key:Xl(t),isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:s,mode:l},t))));p=[...p];const y=m.current.map(Xl),x=d.map(Xl),b=y.length;for(let e=0;e<b;e++){const t=y[e];-1!==x.indexOf(t)||f.has(t)||f.set(t,void 0)}return"wait"===l&&f.size&&(p=[]),f.forEach(((t,n)=>{if(-1!==x.indexOf(n))return;const a=h.get(n);if(!a)return;const o=y.indexOf(n);let g=t;if(!g){const t=()=>{f.delete(n);const e=Array.from(h.keys()).filter((e=>!x.includes(e)));if(e.forEach((e=>h.delete(e))),m.current=d.filter((t=>{const r=Xl(t);return r===n||e.includes(r)})),!f.size){if(!1===u.current)return;c(),i&&i()}};g=e.createElement(ql,{key:Xl(a),isPresent:!1,onExitComplete:t,custom:r,presenceAffectsLayout:s,mode:l},a),f.set(n,g)}p.splice(o,0,g)})),p=p.map((t=>{const n=t.key;return f.has(n)?t:e.createElement(ql,{key:Xl(t),isPresent:!0,presenceAffectsLayout:s,mode:l},t)})),e.createElement(e.Fragment,null,f.size?p:p.map((t=>(0,e.cloneElement)(t))))},Jl={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let Zl;const ec=new Uint8Array(16);function tc(){if(!Zl&&(Zl="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Zl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Zl(ec)}const nc=[];for(let n=0;n<256;++n)nc.push((n+256).toString(16).slice(1));function rc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return nc[e[t+0]]+nc[e[t+1]]+nc[e[t+2]]+nc[e[t+3]]+"-"+nc[e[t+4]]+nc[e[t+5]]+"-"+nc[e[t+6]]+nc[e[t+7]]+"-"+nc[e[t+8]]+nc[e[t+9]]+"-"+nc[e[t+10]]+nc[e[t+11]]+nc[e[t+12]]+nc[e[t+13]]+nc[e[t+14]]+nc[e[t+15]]}const ac=function(e,t,n){if(Jl.randomUUID&&!t&&!e)return Jl.randomUUID();const r=(e=e||{}).random||(e.rng||tc)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return rc(r)};function ic(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function sc(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oc(Object(n),!0).forEach((function(t){ic(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oc(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const lc=()=>{};let cc={},uc={},dc=null,pc={mark:lc,measure:lc};try{"undefined"!==typeof window&&(cc=window),"undefined"!==typeof document&&(uc=document),"undefined"!==typeof MutationObserver&&(dc=MutationObserver),"undefined"!==typeof performance&&(pc=performance)}catch(Tg){}const{userAgent:fc=""}=cc.navigator||{},mc=cc,hc=uc,gc=dc,vc=pc,yc=(mc.document,!!hc.documentElement&&!!hc.head&&"function"===typeof hc.addEventListener&&"function"===typeof hc.createElement),xc=~fc.indexOf("MSIE")||~fc.indexOf("Trident/");var bc={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},kc=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],wc="classic",Sc="duotone",Cc=[wc,Sc,"sharp","sharp-duotone"],Ec=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),jc=["fak","fa-kit","fakd","fa-kit-duotone"],Pc={fak:"kit","fa-kit":"kit"},zc={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},Tc=["fak","fakd"],Nc={kit:"fak"},Ac={"kit-duotone":"fakd"},Oc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Lc=["fak","fa-kit","fakd","fa-kit-duotone"],Mc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ic=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Rc=[1,2,3,4,5,6,7,8,9,10],Dc=Rc.concat([11,12,13,14,15,16,17,18,19,20]),_c=[...Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Oc.GROUP,Oc.SWAP_OPACITY,Oc.PRIMARY,Oc.SECONDARY].concat(Rc.map((e=>"".concat(e,"x")))).concat(Dc.map((e=>"w-".concat(e))));const Fc="___FONT_AWESOME___",Bc=16,Vc="svg-inline--fa",$c="data-fa-i2svg",Uc="data-fa-pseudo-element",Wc="data-prefix",Hc="data-icon",Yc="fontawesome-i2svg",Kc=["HTML","HEAD","STYLE","SCRIPT"],qc=(()=>{try{return!0}catch(e){return!1}})();function Gc(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[wc]})}const Xc=sc({},bc);Xc[wc]=sc(sc(sc(sc({},{"fa-duotone":"duotone"}),bc[wc]),Pc),zc);const Qc=Gc(Xc),Jc=sc({},{classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}});Jc[wc]=sc(sc(sc(sc({},{duotone:"fad"}),Jc[wc]),Nc),Ac);const Zc=Gc(Jc),eu=sc({},Mc);eu[wc]=sc(sc({},eu[wc]),{fak:"fa-kit"});const tu=Gc(eu),nu=sc({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}});nu[wc]=sc(sc({},nu[wc]),{"fa-kit":"fak"});Gc(nu);const ru=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,au="fa-layers-text",iu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ou=(Gc(sc({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}})),["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"]),su={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lu=["kit",..._c],cu=mc.FontAwesomeConfig||{};if(hc&&"function"===typeof hc.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((e=>{let[t,n]=e;const r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=hc.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t));void 0!==r&&null!==r&&(cu[n]=r)}))}const uu={styleDefault:"solid",familyDefault:wc,cssPrefix:"fa",replacementClass:Vc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};cu.familyPrefix&&(cu.cssPrefix=cu.familyPrefix);const du=sc(sc({},uu),cu);du.autoReplaceSvg||(du.observeMutations=!1);const pu={};Object.keys(uu).forEach((e=>{Object.defineProperty(pu,e,{enumerable:!0,set:function(t){du[e]=t,fu.forEach((e=>e(pu)))},get:function(){return du[e]}})})),Object.defineProperty(pu,"familyPrefix",{enumerable:!0,set:function(e){du.cssPrefix=e,fu.forEach((e=>e(pu)))},get:function(){return du.cssPrefix}}),mc.FontAwesomeConfig=pu;const fu=[];const mu=Bc,hu={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gu(){let e=12,t="";for(;e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function vu(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function yu(e){return e.classList?vu(e.classList):(e.getAttribute("class")||"").split(" ").filter((e=>e))}function xu(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bu(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";")),"")}function ku(e){return e.size!==hu.size||e.x!==hu.x||e.y!==hu.y||e.rotate!==hu.rotate||e.flipX||e.flipY}function wu(){const e="fa",t=Vc,n=pu.cssPrefix,r=pu.replacementClass;let a=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Su=!1;function Cu(){pu.autoAddCss&&!Su&&(!function(e){if(!e||!yc)return;const t=hc.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=hc.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const e=n[a],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(r=e)}hc.head.insertBefore(t,r)}(wu()),Su=!0)}var Eu={mixout:()=>({dom:{css:wu,insertCss:Cu}}),hooks:()=>({beforeDOMElementCreation(){Cu()},beforeI2svg(){Cu()}})};const ju=mc||{};ju[Fc]||(ju[Fc]={}),ju[Fc].styles||(ju[Fc].styles={}),ju[Fc].hooks||(ju[Fc].hooks={}),ju[Fc].shims||(ju[Fc].shims=[]);var Pu=ju[Fc];const zu=[],Tu=function(){hc.removeEventListener("DOMContentLoaded",Tu),Nu=1,zu.map((e=>e()))};let Nu=!1;function Au(e){const{tag:t,attributes:n={},children:r=[]}=e;return"string"===typeof e?xu(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,'="').concat(xu(e[n]),'" ')),"").trim()}(n),">").concat(r.map(Au).join(""),"</").concat(t,">")}function Ou(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}yc&&(Nu=(hc.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(hc.readyState),Nu||hc.addEventListener("DOMContentLoaded",Tu));var Lu=function(e,t,n,r){var a,i,o,s=Object.keys(e),l=s.length,c=void 0!==r?function(e,t){return function(n,r,a,i){return e.call(t,n,r,a,i)}}(t,r):t;for(void 0===n?(a=1,o=e[s[0]]):(a=0,o=n);a<l;a++)o=c(o,e[i=s[a]],i,e);return o};function Mu(e){const t=function(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const r=e.charCodeAt(n++);56320==(64512&r)?t.push(((1023&a)<<10)+(1023&r)+65536):(t.push(a),n--)}else t.push(a)}return t}(e);return 1===t.length?t[0].toString(16):null}function Iu(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function Ru(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{skipHooks:r=!1}=n,a=Iu(t);"function"!==typeof Pu.hooks.addPack||r?Pu.styles[e]=sc(sc({},Pu.styles[e]||{}),a):Pu.hooks.addPack(e,Iu(t)),"fas"===e&&Ru("fa",t)}const{styles:Du,shims:_u}=Pu,Fu=Object.keys(tu),Bu=Fu.reduce(((e,t)=>(e[t]=Object.keys(tu[t]),e)),{});let Vu=null,$u={},Uu={},Wu={},Hu={},Yu={};function Ku(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r!==e||""===a||(i=a,~lu.indexOf(i))?null:a;var i}const qu=()=>{const e=e=>Lu(Du,((t,n,r)=>(t[r]=Lu(n,e,{}),t)),{});$u=e(((e,t,n)=>{if(t[3]&&(e[t[3]]=n),t[2]){t[2].filter((e=>"number"===typeof e)).forEach((t=>{e[t.toString(16)]=n}))}return e})),Uu=e(((e,t,n)=>{if(e[n]=n,t[2]){t[2].filter((e=>"string"===typeof e)).forEach((t=>{e[t]=n}))}return e})),Yu=e(((e,t,n)=>{const r=t[2];return e[n]=n,r.forEach((t=>{e[t]=n})),e}));const t="far"in Du||pu.autoFetchSvg,n=Lu(_u,((e,n)=>{const r=n[0];let a=n[1];const i=n[2];return"far"!==a||t||(a="fas"),"string"===typeof r&&(e.names[r]={prefix:a,iconName:i}),"number"===typeof r&&(e.unicodes[r.toString(16)]={prefix:a,iconName:i}),e}),{names:{},unicodes:{}});Wu=n.names,Hu=n.unicodes,Vu=ed(pu.styleDefault,{family:pu.familyDefault})};var Gu;function Xu(e,t){return($u[e]||{})[t]}function Qu(e,t){return(Yu[e]||{})[t]}function Ju(e){return Wu[e]||{prefix:null,iconName:null}}function Zu(){return Vu}Gu=e=>{Vu=ed(e.styleDefault,{family:pu.familyDefault})},fu.push(Gu),qu();function ed(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{family:n=wc}=t,r=Qc[n][e];if(n===Sc&&!e)return"fad";const a=Zc[n][e]||Zc[n][r],i=e in Pu.styles?e:null;return a||i||null}function td(e){return e.sort().filter(((e,t,n)=>n.indexOf(e)===t))}function nd(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Ic.concat(Lc),i=td(e.filter((e=>a.includes(e)))),o=td(e.filter((e=>!Ic.includes(e)))),s=i.filter((e=>(r=e,!kc.includes(e)))),[l=null]=s,c=function(e){let t=wc;const n=Fu.reduce(((e,t)=>(e[t]="".concat(pu.cssPrefix,"-").concat(t),e)),{});return Cc.forEach((r=>{(e.includes(n[r])||e.some((e=>Bu[r].includes(e))))&&(t=r)})),t}(i),u=sc(sc({},function(e){let t=[],n=null;return e.forEach((e=>{const r=Ku(pu.cssPrefix,e);r?n=r:e&&t.push(e)})),{iconName:n,rest:t}}(o)),{},{prefix:ed(l,{family:c})});return sc(sc(sc({},u),function(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,s=n===Sc,l=t.includes("fa-duotone")||t.includes("fad"),c="duotone"===o.familyDefault,u="fad"===r.prefix||"fa-duotone"===r.prefix;!s&&(l||c||u)&&(r.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab");if(!r.prefix&&rd.includes(n)){if(Object.keys(i).find((e=>ad.includes(e)))||o.autoFetchSvg){const e=Ec.get(n).defaultShortPrefixId;r.prefix=e,r.iconName=Qu(r.prefix,r.iconName)||r.iconName}}"fa"!==r.prefix&&"fa"!==a||(r.prefix=Zu()||"fas");return r}({values:e,family:c,styles:Du,config:pu,canonical:u,givenPrefix:r})),function(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i="fa"===t?Ju(a):{},o=Qu(r,a);a=i.iconName||o||a,r=i.prefix||r,"far"!==r||Du.far||!Du.fas||pu.autoFetchSvg||(r="fas");return{prefix:r,iconName:a}}(n,r,u))}const rd=Cc.filter((e=>e!==wc||e!==Sc)),ad=Object.keys(Mc).filter((e=>e!==wc)).map((e=>Object.keys(Mc[e]))).flat();let id=[],od={};const sd={},ld=Object.keys(sd);function cd(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(od[e]||[]).forEach((e=>{t=e.apply(null,[t,...r])})),t}function ud(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(od[e]||[]).forEach((e=>{e.apply(null,n)}))}function dd(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return sd[e]?sd[e].apply(null,t):void 0}function pd(e){"fa"===e.prefix&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Zu();if(t)return t=Qu(n,t)||t,Ou(fd.definitions,n,t)||Ou(Pu.styles,n,t)}const fd=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach((e=>{this.definitions[e]=sc(sc({},this.definitions[e]||{}),r[e]),Ru(e,r[e]);const t=tu[wc][e];t&&Ru(t,r[e]),qu()}))}reset(){this.definitions={}}_pullDefinitions(e,t){const n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((t=>{const{prefix:r,iconName:a,icon:i}=n[t],o=i[2];e[r]||(e[r]={}),o.length>0&&o.forEach((t=>{"string"===typeof t&&(e[r][t]=i)})),e[r][a]=i})),e}},md={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return yc?(ud("beforeI2svg",e),dd("pseudoElements2svg",e),dd("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;var n;!1===pu.autoReplaceSvg&&(pu.autoReplaceSvg=!0),pu.observeMutations=!0,n=()=>{vd({autoReplaceSvgRoot:t}),ud("watch",e)},yc&&(Nu?setTimeout(n,0):zu.push(n))}},hd={icon:e=>{if(null===e)return null;if("object"===typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Qu(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=ed(e[0]);return{prefix:n,iconName:Qu(n,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(pu.cssPrefix,"-"))>-1||e.match(ru))){const t=nd(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Zu(),iconName:Qu(t.prefix,t.iconName)||t.iconName}}if("string"===typeof e){const t=Zu();return{prefix:t,iconName:Qu(t,e)||e}}}},gd={noAuto:()=>{pu.autoReplaceSvg=!1,pu.observeMutations=!1,ud("noAuto")},config:pu,dom:md,parse:hd,library:fd,findIconDefinition:pd,toHtml:Au},vd=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t=hc}=e;(Object.keys(Pu.styles).length>0||pu.autoFetchSvg)&&yc&&pu.autoReplaceSvg&&gd.dom.i2svg({node:t})};function yd(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((e=>Au(e)))}}),Object.defineProperty(e,"node",{get:function(){if(!yc)return;const t=hc.createElement("div");return t.innerHTML=e.html,t.children}}),e}function xd(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:l,titleId:c,extra:u,watchable:d=!1}=e,{width:p,height:f}=n.found?n:t,m=Tc.includes(r),h=[pu.replacementClass,a?"".concat(pu.cssPrefix,"-").concat(a):""].filter((e=>-1===u.classes.indexOf(e))).filter((e=>""!==e||!!e)).concat(u.classes).join(" ");let g={children:[],attributes:sc(sc({},u.attributes),{},{"data-prefix":r,"data-icon":a,class:h,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(f)})};const v=m&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/f*16*.0625,"em")}:{};d&&(g.attributes[$c]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||gu())},children:[s]}),delete g.attributes.title);const y=sc(sc({},g),{},{prefix:r,iconName:a,main:t,mask:n,maskId:l,transform:i,symbol:o,styles:sc(sc({},v),u.styles)}),{children:x,attributes:b}=n.found&&t.found?dd("generateAbstractMask",y)||{children:[],attributes:{}}:dd("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=x,y.attributes=b,o?function(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=!0===i?"".concat(t,"-").concat(pu.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:sc(sc({},a),{},{id:o}),children:r}]}]}(y):function(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(ku(o)&&n.found&&!r.found){const{width:e,height:t}=n,r={x:e/t/2,y:.5};a.style=bu(sc(sc({},i),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(y)}function bd(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,l=sc(sc(sc({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(l[$c]="");const c=sc({},o.styles);ku(a)&&(c.transform=function(e){let{transform:t,width:n=Bc,height:r=Bc,startCentered:a=!1}=e,i="";return i+=a&&xc?"translate(".concat(t.x/mu-n/2,"em, ").concat(t.y/mu-r/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/mu,"em), calc(-50% + ").concat(t.y/mu,"em)) "):"translate(".concat(t.x/mu,"em, ").concat(t.y/mu,"em) "),i+="scale(".concat(t.size/mu*(t.flipX?-1:1),", ").concat(t.size/mu*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const u=bu(c);u.length>0&&(l.style=u);const d=[];return d.push({tag:"span",attributes:l,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}const{styles:kd}=Pu;function wd(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return a=Array.isArray(r)?{tag:"g",attributes:{class:"".concat(pu.cssPrefix,"-").concat(su.GROUP)},children:[{tag:"path",attributes:{class:"".concat(pu.cssPrefix,"-").concat(su.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(pu.cssPrefix,"-").concat(su.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Sd={found:!1,width:512,height:512};function Cd(e,t){let n=t;return"fa"===t&&null!==pu.styleDefault&&(t=Zu()),new Promise(((r,a)=>{if("fa"===n){const n=Ju(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&kd[t]&&kd[t][e]){return r(wd(kd[t][e]))}!function(e,t){qc||pu.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r(sc(sc({},Sd),{},{icon:pu.showMissingIcons&&e&&dd("missingIconAbstract")||{}}))}))}const Ed=()=>{},jd=pu.measurePerformance&&vc&&vc.mark&&vc.measure?vc:{mark:Ed,measure:Ed},Pd='FA "6.7.2"',zd=e=>{jd.mark("".concat(Pd," ").concat(e," ends")),jd.measure("".concat(Pd," ").concat(e),"".concat(Pd," ").concat(e," begins"),"".concat(Pd," ").concat(e," ends"))};var Td=e=>(jd.mark("".concat(Pd," ").concat(e," begins")),()=>zd(e));const Nd=()=>{};function Ad(e){return"string"===typeof(e.getAttribute?e.getAttribute($c):null)}function Od(e){return hc.createElementNS("http://www.w3.org/2000/svg",e)}function Ld(e){return hc.createElement(e)}function Md(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ceFn:n=("svg"===e.tag?Od:Ld)}=t;if("string"===typeof e)return hc.createTextNode(e);const r=n(e.tag);Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])}));return(e.children||[]).forEach((function(e){r.appendChild(Md(e,{ceFn:n}))})),r}const Id={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach((e=>{t.parentNode.insertBefore(Md(e),t)})),null===t.getAttribute($c)&&pu.keepOriginalSource){let e=hc.createComment(function(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~yu(t).indexOf(pu.replacementClass))return Id.replace(e);const r=new RegExp("".concat(pu.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const e=n[0].attributes.class.split(" ").reduce(((e,t)=>(t===pu.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e)),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const a=n.map((e=>Au(e))).join("\n");t.setAttribute($c,""),t.innerHTML=a}};function Rd(e){e()}function Dd(e,t){const n="function"===typeof t?t:Nd;if(0===e.length)n();else{let t=Rd;"async"===pu.mutateApproach&&(t=mc.requestAnimationFrame||Rd),t((()=>{const t=!0===pu.autoReplaceSvg?Id.replace:Id[pu.autoReplaceSvg]||Id.replace,r=Td("mutate");e.map(t),r(),n()}))}}let _d=!1;function Fd(){_d=!0}function Bd(){_d=!1}let Vd=null;function $d(e){if(!gc)return;if(!pu.observeMutations)return;const{treeCallback:t=Nd,nodeCallback:n=Nd,pseudoElementsCallback:r=Nd,observeMutationsRoot:a=hc}=e;Vd=new gc((e=>{if(_d)return;const a=Zu();vu(e).forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0&&!Ad(e.addedNodes[0])&&(pu.searchPseudoElements&&r(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&pu.searchPseudoElements&&r(e.target.parentNode),"attributes"===e.type&&Ad(e.target)&&~ou.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(Wc):null,n=e.getAttribute?e.getAttribute(Hc):null;return t&&n}(e.target)){const{prefix:t,iconName:n}=nd(yu(e.target));e.target.setAttribute(Wc,t||a),n&&e.target.setAttribute(Hc,n)}else(function(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(pu.replacementClass)})(e.target)&&n(e.target)}))})),yc&&Vd.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ud(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"";let a=nd(yu(e));return a.prefix||(a.prefix=Zu()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=function(e,t){return(Uu[e]||{})[t]}(a.prefix,e.innerText)||Xu(a.prefix,Mu(e.innerText))),!a.iconName&&pu.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Wd(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Ud(e),i=function(e){const t=vu(e.attributes).reduce(((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e)),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return pu.autoA11y&&(n?t["aria-labelledby"]="".concat(pu.replacementClass,"-title-").concat(r||gu()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),o=cd("parseNodeAttributes",{},e);let s=t.styleParser?function(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce(((e,t)=>{const n=t.split(":"),r=n[0],a=n.slice(1);return r&&a.length>0&&(e[r]=a.join(":").trim()),e}),{})),n}(e):[];return sc({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:hu,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}const{styles:Hd}=Pu;function Yd(e){const t="nest"===pu.autoReplaceSvg?Wd(e,{styleParser:!1}):Wd(e);return~t.extra.classes.indexOf(au)?dd("generateLayersText",e,t):dd("generateSvgReplacementMutation",e,t)}function Kd(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!yc)return Promise.resolve();const n=hc.documentElement.classList,r=e=>n.add("".concat(Yc,"-").concat(e)),a=e=>n.remove("".concat(Yc,"-").concat(e)),i=pu.autoFetchSvg?[...jc,...Ic]:kc.concat(Object.keys(Hd));i.includes("fa")||i.push("fa");const o=[".".concat(au,":not([").concat($c,"])")].concat(i.map((e=>".".concat(e,":not([").concat($c,"])")))).join(", ");if(0===o.length)return Promise.resolve();let s=[];try{s=vu(e.querySelectorAll(o))}catch(u){}if(!(s.length>0))return Promise.resolve();r("pending"),a("complete");const l=Td("onTree"),c=s.reduce(((e,t)=>{try{const n=Yd(t);n&&e.push(n)}catch(u){qc||"MissingIcon"===u.name&&console.error(u)}return e}),[]);return new Promise(((e,n)=>{Promise.all(c).then((n=>{Dd(n,(()=>{r("active"),r("complete"),a("pending"),"function"===typeof t&&t(),l(),e()}))})).catch((e=>{l(),n(e)}))}))}function qd(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Yd(e).then((e=>{e&&Dd([e],t)}))}function Gd(e){return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(t||{}).icon?t:pd(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:pd(a||{})),e(r,sc(sc({},n),{},{mask:a}))}}const Xd=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=hu,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:c={},styles:u={}}=t;if(!e)return;const{prefix:d,iconName:p,icon:f}=e;return yd(sc({type:"icon"},e),(()=>(ud("beforeDOMElementCreation",{iconDefinition:e,params:t}),pu.autoA11y&&(o?c["aria-labelledby"]="".concat(pu.replacementClass,"-title-").concat(s||gu()):(c["aria-hidden"]="true",c.focusable="false")),xd({icons:{main:wd(f),mask:a?wd(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:sc(sc({},hu),n),symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:u,classes:l}}))))};var Qd={mixout:()=>({icon:Gd(Xd)}),hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=Kd,e.nodeCallback=qd,e)}),provides(e){e.i2svg=function(e){const{node:t=hc,callback:n=()=>{}}=e;return Kd(t,n)},e.generateSvgReplacementMutation=function(e,t){const{iconName:n,title:r,titleId:a,prefix:i,transform:o,symbol:s,mask:l,maskId:c,extra:u}=t;return new Promise(((t,d)=>{Promise.all([Cd(n,i),l.iconName?Cd(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((l=>{let[d,p]=l;t([e,xd({icons:{main:d,mask:p},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,title:r,titleId:a,extra:u,watchable:!0})])})).catch(d)}))},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:a,styles:i}=e;const o=bu(i);let s;return o.length>0&&(n.style=o),ku(a)&&(s=dd("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Jd={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{classes:n=[]}=t;return yd({type:"layer"},(()=>{ud("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e((e=>{Array.isArray(e)?e.map((e=>{r=r.concat(e.abstract)})):r=r.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(pu.cssPrefix,"-layers"),...n].join(" ")},children:r}]}))}})},Zd={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return yd({type:"counter",content:e},(()=>(ud("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:n,extra:r}=e,a=sc(sc(sc({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=bu(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(pu.cssPrefix,"-layers-counter"),...r]}}))))}})},ep={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=hu,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return yd({type:"text",content:e},(()=>(ud("beforeDOMElementCreation",{content:e,params:t}),bd({content:e,transform:sc(sc({},hu),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(pu.cssPrefix,"-layers-text"),...a]}}))))}}),provides(e){e.generateLayersText=function(e,t){const{title:n,transform:r,extra:a}=t;let i=null,o=null;if(xc){const t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();i=n.width/t,o=n.height/t}return pu.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,bd({content:e.innerHTML,width:i,height:o,transform:r,title:n,extra:a,watchable:!0})])}}};const tp=new RegExp('"',"ug"),np=[1105920,1112319],rp=sc(sc(sc(sc({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),ap=Object.keys(rp).reduce(((e,t)=>(e[t.toLowerCase()]=rp[t],e)),{}),ip=Object.keys(ap).reduce(((e,t)=>{const n=ap[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e}),{});function op(e,t){const n="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(((r,a)=>{if(null!==e.getAttribute(n))return r();const i=vu(e.children).filter((e=>e.getAttribute(Uc)===t))[0],o=mc.getComputedStyle(e,t),s=o.getPropertyValue("font-family"),l=s.match(iu),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),r();if(l&&"none"!==u&&""!==u){const u=o.getPropertyValue("content");let d=function(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(ap[n]||{})[a]||ip[n]}(s,c);const{value:p,isSecondary:f}=function(e){const t=e.replace(tp,""),n=function(e,t){const n=e.length;let r,a=e.charCodeAt(t);return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?1024*(a-55296)+r-56320+65536:a}(t,0),r=n>=np[0]&&n<=np[1],a=2===t.length&&t[0]===t[1];return{value:Mu(a?t[0]:t),isSecondary:r||a}}(u),m=l[0].startsWith("FontAwesome");let h=Xu(d,p),g=h;if(m){const e=function(e){const t=Hu[e],n=Xu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(p);e.iconName&&e.prefix&&(h=e.iconName,d=e.prefix)}if(!h||f||i&&i.getAttribute(Wc)===d&&i.getAttribute(Hc)===g)r();else{e.setAttribute(n,g),i&&e.removeChild(i);const o={iconName:null,title:null,titleId:null,prefix:null,transform:hu,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:s}=o;s.attributes[Uc]=t,Cd(h,d).then((a=>{const i=xd(sc(sc({},o),{},{icons:{main:a,mask:{prefix:null,iconName:null,rest:[]}},prefix:d,iconName:g,extra:s,watchable:!0})),l=hc.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=i.map((e=>Au(e))).join("\n"),e.removeAttribute(n),r()})).catch(a)}}else r()}))}function sp(e){return Promise.all([op(e,"::before"),op(e,"::after")])}function lp(e){return e.parentNode!==document.head&&!~Kc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Uc)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function cp(e){if(yc)return new Promise(((t,n)=>{const r=vu(e.querySelectorAll("*")).filter(lp).map(sp),a=Td("searchPseudoElements");Fd(),Promise.all(r).then((()=>{a(),Bd(),t()})).catch((()=>{a(),Bd(),n()}))}))}var up={hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=cp,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=hc}=e;pu.searchPseudoElements&&cp(t)}}};let dp=!1;var pp={mixout:()=>({dom:{unwatch(){Fd(),dp=!0}}}),hooks:()=>({bootstrap(){$d(cd("mutationObserverCallbacks",{}))},noAuto(){Vd&&Vd.disconnect()},watch(e){const{observeMutationsRoot:t}=e;dp?Bd():$d(cd("mutationObserverCallbacks",{observeMutationsRoot:t}))}})};const fp=e=>e.toLowerCase().split(" ").reduce(((e,t)=>{const n=t.toLowerCase().split("-"),r=n[0];let a=n.slice(1).join("-");if(r&&"h"===a)return e.flipX=!0,e;if(r&&"v"===a)return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(r){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});var mp={mixout:()=>({parse:{transform:e=>fp(e)}}),hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=fp(n)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:a}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(o," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(a/2*-1," -256)")}};return{tag:"g",attributes:sc({},c.outer),children:[{tag:"g",attributes:sc({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:sc(sc({},t.icon.attributes),c.path)}]}]}}}};const hp={x:0,y:0,width:"100%",height:"100%"};function gp(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var vp={hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?nd(n.split(" ").map((e=>e.trim()))):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=Zu()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:a,maskId:i,transform:o}=e;const{width:s,icon:l}=r,{width:c,icon:u}=a,d=function(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:o,containerWidth:c,iconWidth:s}),p={tag:"rect",attributes:sc(sc({},hp),{},{fill:"white"})},f=l.children?{children:l.children.map(gp)}:{},m={tag:"g",attributes:sc({},d.inner),children:[gp(sc({tag:l.tag,attributes:sc(sc({},l.attributes),d.path)},f))]},h={tag:"g",attributes:sc({},d.outer),children:[m]},g="mask-".concat(i||gu()),v="clip-".concat(i||gu()),y={tag:"mask",attributes:sc(sc({},hp),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,h]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(b=u,"g"===b.tag?b.children:[b])},y]};var b;return t.push(x,{tag:"rect",attributes:sc({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(g,")")},hp)}),{children:t,attributes:n}}}},yp={provides(e){let t=!1;mc.matchMedia&&(t=mc.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:sc(sc({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=sc(sc({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:sc(sc({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:sc(sc({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:sc(sc({},a),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:sc(sc({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:sc(sc({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:sc(sc({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:sc(sc({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},xp={hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}})};!function(e,t){let{mixoutsTo:n}=t;id=e,od={},Object.keys(sd).forEach((e=>{-1===ld.indexOf(e)&&delete sd[e]})),id.forEach((e=>{const t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((e=>{"function"===typeof t[e]&&(n[e]=t[e]),"object"===typeof t[e]&&Object.keys(t[e]).forEach((r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){const t=e.hooks();Object.keys(t).forEach((e=>{od[e]||(od[e]=[]),od[e].push(t[e])}))}e.provides&&e.provides(sd)}))}([Eu,Qd,Jd,Zd,ep,up,pp,mp,vp,yp,xp],{mixoutsTo:gd});const bp=gd.parse,kp=gd.icon;var wp=n(173),Sp=n.n(wp);function Cp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ep(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Cp(Object(n),!0).forEach((function(t){Pp(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cp(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function jp(e){return jp="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jp(e)}function Pp(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zp(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Tp(e){return function(e){if(Array.isArray(e))return Np(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return Np(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Np(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Np(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ap(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var Op=["style"];var Lp=!1;try{Lp=!0}catch(Tg){}function Mp(e){return e&&"object"===jp(e)&&e.prefix&&e.iconName&&e.icon?e:bp.icon?bp.icon(e):null===e?null:e&&"object"===jp(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function Ip(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Pp({},e,t):{}}var Rp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Dp=e.forwardRef((function(e,t){var n=Ep(Ep({},Rp),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,u=Mp(r),d=Ip("classes",[].concat(Tp(function(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,p=e.fixedWidth,f=e.inverse,m=e.border,h=e.listItem,g=e.flip,v=e.size,y=e.rotation,x=e.pull,b=(Pp(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":f,"fa-border":m,"fa-li":h,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(v),"undefined"!==typeof v&&null!==v),Pp(t,"fa-rotate-".concat(y),"undefined"!==typeof y&&null!==y&&0!==y),Pp(t,"fa-pull-".concat(x),"undefined"!==typeof x&&null!==x),Pp(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map((function(e){return b[e]?e:null})).filter((function(e){return e}))}(n)),Tp((o||"").split(" ")))),p=Ip("transform","string"===typeof n.transform?bp.transform(n.transform):n.transform),f=Ip("mask",Mp(a)),m=kp(u,Ep(Ep(Ep(Ep({},d),p),f),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!m)return function(){var e;!Lp&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var h=m.abstract,g={ref:t};return Object.keys(n).forEach((function(e){Rp.hasOwnProperty(e)||(g[e]=n[e])})),_p(h[0],g)}));Dp.displayName="FontAwesomeIcon",Dp.propTypes={beat:Sp().bool,border:Sp().bool,beatFade:Sp().bool,bounce:Sp().bool,className:Sp().string,fade:Sp().bool,flash:Sp().bool,mask:Sp().oneOfType([Sp().object,Sp().array,Sp().string]),maskId:Sp().string,fixedWidth:Sp().bool,inverse:Sp().bool,flip:Sp().oneOf([!0,!1,"horizontal","vertical","both"]),icon:Sp().oneOfType([Sp().object,Sp().array,Sp().string]),listItem:Sp().bool,pull:Sp().oneOf(["right","left"]),pulse:Sp().bool,rotation:Sp().oneOf([0,90,180,270]),shake:Sp().bool,size:Sp().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Sp().bool,spinPulse:Sp().bool,spinReverse:Sp().bool,symbol:Sp().oneOfType([Sp().bool,Sp().string]),title:Sp().string,titleId:Sp().string,transform:Sp().oneOfType([Sp().string,Sp().object]),swapOpacity:Sp().bool};var _p=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=Ap(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[a]=i,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[Ap(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,l=zp(r,Op);return i.attrs.style=Ep(Ep({},i.attrs.style),s),t.apply(void 0,[n.tag,Ep(Ep({},i.attrs),l)].concat(Tp(a)))}.bind(null,e.createElement);const Fp={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM160 128l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L192 96c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0z"]},Bp={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},Vp={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},$p=Vp,Up={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Wp={prefix:"fas",iconName:"stopwatch",icon:[448,512,[9201],"f2f2","M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6L256 64l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L224 0 176 0zm72 192l0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-128c0-13.3 10.7-24 24-24s24 10.7 24 24z"]},Hp={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Yp={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Kp={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},qp={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Gp={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Xp=Gp,Qp={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"]},Jp={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Zp=Jp,ef={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},tf={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},nf={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},rf={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},af=rf,of={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},sf={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},lf=sf,cf={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},uf={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},df=uf,pf={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ff=pf,mf={prefix:"fas",iconName:"calendar-check",icon:[448,512,[],"f274","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"]},hf={prefix:"fas",iconName:"rectangle-list",icon:[576,512,["list-alt"],"f022","M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0z"]},gf=hf,vf={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},yf={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},xf={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},bf={prefix:"fas",iconName:"medal",icon:[512,512,[127941],"f5a2","M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"]},kf={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},wf={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Sf={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Cf=Sf,Ef={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},jf={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},Pf={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},zf=Pf,Tf={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Nf={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Af=Nf,Of={prefix:"fas",iconName:"trophy",icon:[576,512,[127942],"f091","M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"]},Lf={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},Mf={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"]},If={prefix:"fas",iconName:"wand-magic",icon:[512,512,["magic"],"f0d0","M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z"]},Rf=If,Df={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},_f={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Ff={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Bf=Ff,Vf={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};const $f=async e=>{console.log("Generating subtasks for:",e);try{console.log("Sending task breakdown request for:",e);const a=await fetch("https://text.pollinations.ai/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:'J\u016bs esate PAGRINDINIS produktyvumo ekspertas, specializuojantis u\u017eduo\u010di\u0173 suskaidyme \u012f TOBULUS, \u012fgyvendinamus \u017eingsnius, kurie \u012eVEIKIA ATID\u0116LIOJIM\u0104.\n\nMISIJA: Bet kokiai u\u017eduo\u010diai pateikti 3-5 ai\u0161kius, konkre\u010dius \u017eingsnius, kurie atspindi IDEAL\u0172 b\u016bd\u0105 j\u0105 atlikti, \u012fveikiant atid\u0117liojim\u0105. Kiekvienas \u017eingsnis tur\u0117t\u0173 tur\u0117ti tiksl\u0173 laiko \u012fvertinim\u0105.\n\nANTI-ATID\u0116LIOJIMO AKCENTAI:\n- Suskaidykite u\u017eduotis \u012f itin ma\u017eus, konkre\u010dius \u017eingsnius, kuri\u0173 kiekvienas u\u017etrunka 5-15 minu\u010di\u0173\n- Kiekvienas \u017eingsnis turi b\u016bti toks ai\u0161kus ir konkretus, kad pa\u0161alint\u0173 sprendimo paraly\u017ei\u0173\n- \u012etraukite ai\u0161kius pradinius ta\u0161kus, ma\u017einan\u010dius energij\u0105, reikaling\u0105 prad\u0117ti\n- Prid\u0117kite motyvacijos element\u0173, pavyzd\u017eiui, "Nustatykite 25 minu\u010di\u0173 laikmat\u012f ir dirbkite be trukd\u017ei\u0173"\n- Nam\u0173 darbams ir mokymosi u\u017eduotims b\u016bkite itin konkret\u016bs: puslapi\u0173 numeriai, klausim\u0173 intervalai ar konkret\u016bs rezultatai\n- Kiekvienam \u017eingsniui nurodykite real\u0173 laiko \u012fvertinim\u0105 (minut\u0117mis)\n\n\u017dINGSNI\u0172 K\u016aRIMO TAISYKL\u0116S:\n1. Kiekvienas \u017eingsnis PRIVALO b\u016bti konkretus, specifinis ir nedelsiant \u012fgyvendinamas (JOKI\u0172 neai\u0161ki\u0172 \u017eingsni\u0173)\n2. Naudokite tiksli\u0105, tiesiogin\u0119 kalb\u0105, sutelkt\u0105 \u012f TIKSLIAI tai, k\u0105 reikia daryti\n3. I\u0161d\u0117stykite \u017eingsnius logi\u0161kiausia nuoseklia tvarka maksimaliam efektyvumui\n4. Prad\u0117kite kiekvien\u0105 \u017eingsn\u012f stipriu veiksmo veiksma\u017eod\u017eiu (Sukurti, Para\u0161yti, I\u0161spr\u0119sti, Tyrin\u0117ti ir t.t.)\n5. Pritaikykite \u017eingsnius su ypatingu tikslumu specifinei u\u017eduo\u010diai ir kontekstui\n6. Sud\u0117tingus \u017eingsnius suskaidykite \u012f paprastesnius - kiekvienas \u017eingsnis tur\u0117t\u0173 b\u016bti VIENAS ai\u0161kus veiksmas\n7. \u012etraukite konkre\u010dius \u012frankius, metodus ar i\u0161teklius, kai tai aktualu\n8. Venkite pernelyg bendr\u0173 \u017eingsni\u0173 - b\u016bkite kuo detalesni ir konkretesni\n9. SVARBIAUSIA: Kiekvienam \u017eingsniui nurodykite real\u0173 laiko \u012fvertinim\u0105 minut\u0117mis, atsi\u017evelgiant \u012f jo sud\u0117tingum\u0105\n\nPATEIKITE ATSAKYM\u0104 KAIP JSON MASYVO FORMATO \u017dINGSNIUS:\n[\n  {"text": "Pirmas \u017eingsnis su konkre\u010diu veiksmu", "timeEstimate": 15},\n  {"text": "Antras \u017eingsnis su konkre\u010diu veiksmu", "timeEstimate": 25},\n  {"text": "Tre\u010dias \u017eingsnis su konkre\u010diu veiksmu", "timeEstimate": 20}\n]\n\nI\u0160SKIRTINI\u0172 U\u017dDUO\u010cI\u0172 SKAIDYMO PAVYZD\u017dIAI SU LAIKO \u012eVERTINIMAIS:\n\nU\u017eduotis: "Redaguoti vestuvi\u0173 vaizdo \u012fra\u0161\u0105"\n\u017dingsniai: [\n  {"text": "Importuoti ir organizuoti vis\u0105 filmuot\u0105 med\u017eiag\u0105 \u012f aplankus (ceremonija, vakar\u0117lis, kalbos ir t.t.)", "timeEstimate": 30},\n  {"text": "Sukurti pagrindini\u0173 moment\u0173 chronologin\u012f juodra\u0161t\u012f", "timeEstimate": 45},\n  {"text": "Redaguoti ceremonijos vaizdus, pasirenkant geriausius kadrus ir skland\u017eius per\u0117jimus", "timeEstimate": 60},\n  {"text": "Redaguoti vakar\u0117lio akcentus ir sinchronizuoti su 2-3 muzikos takeliais", "timeEstimate": 90},\n  {"text": "Atlikti spalv\u0173 korekcij\u0105 ir prid\u0117ti galutinius teksto u\u017era\u0161us bei efektus", "timeEstimate": 45}\n]\n\nU\u017eduotis: "Atlikti matematikos nam\u0173 darbus"\n\u017dingsniai: [\n  {"text": "Surinkti visas reikalingas priemones (vadov\u0117l\u012f, s\u0105siuvin\u012f, skai\u010diuotuv\u0105) ir paruo\u0161ti \u0161vari\u0105 darbo viet\u0105 su vandeniu ir u\u017ekand\u017eiu \u0161alia", "timeEstimate": 10},\n  {"text": "Nustatyti 25 minu\u010di\u0173 laikmat\u012f ir i\u0161spr\u0119sti 1-5 u\u017edavinius, i\u0161ra\u0161ant kiekvien\u0105 \u017eingsn\u012f pilnai", "timeEstimate": 25},\n  {"text": "Padaryti 5 minu\u010di\u0173 pertrauk\u0105, tada i\u0161spr\u0119sti 6-10 u\u017edavinius taikant t\u0105 pat\u012f koncentruot\u0105 metod\u0105", "timeEstimate": 30},\n  {"text": "Patikrinti visus atsakymus pagal vadov\u0117lio gal\u0105 arba perskai\u010diuojant kiekvien\u0105 u\u017edavin\u012f", "timeEstimate": 15},\n  {"text": "Sudaryti s\u0105ra\u0161\u0105 koncepcij\u0173, su kuriomis tur\u0117jote sunkum\u0173, kad gal\u0117tum\u0117te per\u017ei\u016br\u0117ti ar paklausti per kit\u0105 pamok\u0105", "timeEstimate": 10}\n]\n\nAtkreipkite d\u0117mes\u012f, kad j\u016bs\u0173 \u017eingsniai turi b\u016bti konkret\u016bs, veiksmingi ir tiesiogiai pad\u0117ti \u012fveikti atid\u0117liojim\u0105. Gr\u0105\u017einkite tik JSON masyv\u0105 su objektais.'},{role:"user",content:`Suskaidykite \u0161i\u0105 u\u017eduot\u012f \u012f 3-5 konkre\u010dius, \u012fgyvendinamus \u017eingsnius su laiko \u012fvertinimais: "${e}"\n\nPateikite tik JSON masyvo formato atsakym\u0105 su objektais, kur "text" yra konkretus \u017eingsnis, o "timeEstimate" yra jo laiko \u012fvertinimas minut\u0117mis. Pavyzd\u017eiui:\n[\n  {"text": "Pirmas \u017eingsnis", "timeEstimate": 15},\n  {"text": "Antras \u017eingsnis", "timeEstimate": 20}\n]`}],model:"openai"})});if(!a.ok)throw console.error(`API request failed with status ${a.status}`),new Error(`API request failed with status ${a.status}`);const i=await a.text();console.log("Raw API response:",i);const o=/\[\s*{[\s\S]*}\s*\]/,s=i.match(o);if(s)try{const e=JSON.parse(s[0]);if(console.log("Successfully parsed JSON:",e),Array.isArray(e)&&e.length>0)return e}catch(t){console.error("Error parsing JSON from match:",t)}try{const e=JSON.parse(i);if(console.log("Parsed complete response as JSON:",e),e&&e.subtasks&&Array.isArray(e.subtasks))return e.subtasks;if(Array.isArray(e))return e.length>0&&(e[0].text||e[0].timeEstimate)?e:e.map((e=>"string"===typeof e?{text:e,timeEstimate:Uf(e)}:e))}catch(n){console.error("Error parsing as direct JSON:",n)}console.log("Fallback to text processing");const l=i.split(/\n/).filter((e=>e.trim().length>0)),c=/^(\d+[\.\)]\s*|\*\s+|[-\u2022]\s+)(.+)/,u=[];for(const e of l){const t=e.match(c);if(t){const e=t[2].trim(),n=e.match(/\((\d+)\s*min(utes)?\)/i),r=n?parseInt(n[1]):Uf(e);u.push({text:e.replace(/\s*\(\d+\s*min(utes)?\)/i,""),timeEstimate:r})}}if(u.length>0)return console.log("Found subtasks through text processing:",u),u;console.log("Falling back to default subtasks");try{console.log("Trying a second approach with a more structured prompt");const n=await fetch("https://text.pollinations.ai/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:'J\u016bs esate funkcija, kuri generuoja u\u017eduoties \u017eingsnius.\n  \nINPUT FORMAT:\n- task_description: u\u017eduoties apra\u0161ymas\n  \nOUTPUT FORMAT:\n[\n  {"text": "pirmas \u017eingsnis", "timeEstimate": 15},\n  {"text": "antras \u017eingsnis", "timeEstimate": 20},\n  {"text": "tre\u010dias \u017eingsnis", "timeEstimate": 30}\n]\n\nRULES:\n1. Sugeneruok 3-5 \u017eingsnius u\u017eduo\u010diai\n2. Kiekvienas \u017eingsnis turi tur\u0117ti ai\u0161k\u0173 veiksm\u0105\n3. Priskirk realisti\u0161kus laiko \u012fvertinimus minut\u0117mis\n4. Gr\u0105\u017eink tik JSON masyv\u0105 be joki\u0173 papildom\u0173 paai\u0161kinim\u0173 ar teksto\n5. U\u017etikrink, kad JSON masyvas b\u016bt\u0173 teisingas'},{role:"user",content:`{"task_description": "${e}"}`}],model:"openai"})});if(!n.ok)throw new Error("Second API request failed");const r=await n.text();console.log("Second approach response:",r);try{const e=JSON.parse(r);if(Array.isArray(e)&&e.length>0)return e.map((t=>{if("object"===typeof t&&null!==t){const n="number"===typeof t.timeEstimate?t.timeEstimate:Uf(t.text||"");return{text:t.text||`\u017dingsnis ${e.indexOf(t)+1}`,timeEstimate:n}}return{text:String(t),timeEstimate:15}}))}catch(t){console.error("Error parsing second approach JSON:",t);const e=r.match(/\[\s*{[\s\S]*}\s*\]/);if(e)try{const t=JSON.parse(e[0]);if(Array.isArray(t)&&t.length>0)return t}catch(Tg){console.error("Failed to parse extracted JSON from second approach")}}}catch(r){console.error("Second attempt also failed:",r)}throw new Error("Could not parse task breakdown, using defaults")}catch(a){console.error("Error generating task breakdown:",a);const t=e.toLowerCase();return(t.includes("edit")||t.includes("redaguoti"))&&(t.includes("video")||t.includes("film")||t.includes("footage")||t.includes("vaizdo")||t.includes("filmas")||t.includes("\u012fra\u0161\u0105"))?[{text:"Importuoti ir sutvarkyti vis\u0105 vaizdo med\u017eiag\u0105 \u012f ai\u0161kiai pa\u017eym\u0117tus aplankus (pagal scen\u0105/\u012fvyk\u012f)",timeEstimate:30},{text:"Per\u017ei\u016br\u0117ti vis\u0105 filmuot\u0105 med\u017eiag\u0105 ir pasirinkti geriausius klipus, pa\u017eymint prad\u017eios/pabaigos ta\u0161kus",timeEstimate:45},{text:"Sukurti pradin\u012f pagrindin\u0117s sekos monta\u017e\u0105 su baziniais per\u0117jimais",timeEstimate:60},{text:"Prid\u0117ti muzikos takelius ir sinchronizuoti su pagrindiniais momentais vaizdo \u012fra\u0161e",timeEstimate:40},{text:"Pritaikyti spalv\u0173 korekcij\u0105, efektus ir eksportuoti galutin\u012f vaizdo \u012fra\u0161\u0105",timeEstimate:50}]:t.includes("homework")||t.includes("assignment")||t.includes("nam\u0173 darbai")||t.includes("u\u017eduotis")?[{text:"Paruo\u0161ti darbo viet\u0105: surinkti visas reikalingas priemones, pa\u0161alinti trukd\u017eius, pasiruo\u0161ti vandens/u\u017ekand\u012f",timeEstimate:10},{text:"Suskirstyti u\u017eduot\u012f \u012f ma\u017eas dalis (1-5 u\u017edaviniai, 1-3 puslapiai ir t.t.)",timeEstimate:15},{text:"Nustatyti 25 minu\u010di\u0173 laikmat\u012f ir dirbti su pirma dalimi visi\u0161koje koncentracijoje",timeEstimate:25},{text:"Padaryti 5 minu\u010di\u0173 pertrauk\u0105, tada t\u0119sti su kita dalimi",timeEstimate:30},{text:"Atid\u017eiai per\u017ei\u016br\u0117ti savo darb\u0105 ir pa\u017eym\u0117ti vietas, kur reikia pagalbos",timeEstimate:20}]:t.includes("study")||t.includes("exam")||t.includes("test")||t.includes("mokytis")||t.includes("egzaminas")||t.includes("testas")?[{text:"Sukurti specifin\u012f mokymosi plan\u0105, i\u0161vardijant visas temas pagal sud\u0117tingum\u0105",timeEstimate:20},{text:"Paruo\u0161ti aplink\u0105 be trukd\u017ei\u0173 su visomis reikalingomis priemon\u0117mis",timeEstimate:15},{text:"Mokytis vienos temos 25 minutes, naudojant aktyvius metodus (atminties korteles, praktines u\u017eduotis)",timeEstimate:25},{text:"Padaryti 5 minu\u010di\u0173 pertrauk\u0105, tada patikrinti save, k\u0105 tik k\u0105 i\u0161mokote",timeEstimate:15},{text:"Pereiti prie kitos temos ir pakartoti proces\u0105, trumpai per\u017ei\u016brint ankstesnes temas",timeEstimate:30}]:t.includes("write")||t.includes("essay")||t.includes("paper")||t.includes("ra\u0161yti")||t.includes("ra\u0161inys")||t.includes("darbas")?[{text:"Sukurti detal\u0173 plan\u0105 su pagrindiniais punktais ir juos pagrind\u017eian\u010diomis detal\u0117mis",timeEstimate:25},{text:"Nustatyti 20 minu\u010di\u0173 laikmat\u012f ir para\u0161yti tik \u012f\u017eangin\u0119 pastraip\u0105",timeEstimate:20},{text:"Ra\u0161yti kiekvien\u0105 pagrindin\u0119 pastraip\u0105 po vien\u0105, darant trumpas pertraukas tarp j\u0173",timeEstimate:40},{text:"U\u017ebaigti i\u0161vad\u0105, sutelkiant d\u0117mes\u012f tik \u012f pagrindini\u0173 punkt\u0173 apibendrinim\u0105",timeEstimate:15},{text:"Redaguoti vis\u0105 dokument\u0105 d\u0117l ai\u0161kumo, gramatikos ir ri\u0161lumo",timeEstimate:30}]:t.includes("clean")||t.includes("organize")||t.includes("tidy")||t.includes("valyti")||t.includes("organizuoti")||t.includes("tvarkyti")?[{text:"Nustatyti 10 minu\u010di\u0173 laikmat\u012f ir greitai pa\u0161alinti visas akivaizd\u017eias \u0161iuk\u0161les ir nereikalingus daiktus",timeEstimate:10},{text:"Susitelkti \u012f vien\u0105 ma\u017e\u0105 viet\u0105 (stal\u0105, lentyn\u0105, stal\u010di\u0173) vienu metu",timeEstimate:15},{text:'Sur\u016b\u0161iuoti daiktus \u012f "pasilikti", "atiduoti" ir "i\u0161mesti" kr\u016bvas, per daug negalvojant',timeEstimate:20},{text:"Kruop\u0161\u010diai nuvalyti pavir\u0161ius, pradedant nuo vir\u0161aus iki apa\u010dios",timeEstimate:25},{text:"Logi\u0161kai sutvarkyti likusius daiktus, da\u017eniausiai naudojamus padedant lengviausiai prieinamose vietose",timeEstimate:15}]:t.includes("read")||t.includes("book")||t.includes("chapter")||t.includes("skaityti")||t.includes("knyga")||t.includes("skyrius")?[{text:"Rasti patogi\u0105, be trukd\u017ei\u0173 viet\u0105 su geru ap\u0161vietimu",timeEstimate:10},{text:"Nustatyti 25 minu\u010di\u0173 laikmat\u012f sutelktam skaitymui (be telefono ar socialini\u0173 tinkl\u0173)",timeEstimate:25},{text:"Daryti u\u017era\u0161us apie pagrindinius punktus arba naudoti lipnias pastabas svarbi\u0173 viet\u0173 \u017eym\u0117jimui",timeEstimate:20},{text:"Po kiekvieno skyriaus para\u0161yti 2-3 sakini\u0173 santrauk\u0105 savo \u017eod\u017eiais",timeEstimate:15},{text:"Padaryti 5 minu\u010di\u0173 pertrauk\u0105, tada t\u0119sti su kitu skyriumi",timeEstimate:30}]:t.includes("present")||t.includes("presentation")||t.includes("speech")||t.includes("pristatyti")||t.includes("pristatymas")||t.includes("kalba")?[{text:"Sukurti detal\u0173 plan\u0105 su pagrindiniais punktais ir juos pagrind\u017eian\u010diais \u012frodymais",timeEstimate:30},{text:"Parengti vizualinius elementus ar skaidres su minimaliu tekstu ir tinkamais paveiksl\u0117liais",timeEstimate:45},{text:"Repetuoti pristatym\u0105 vien\u0105 kart\u0105 iki galo nesustojant",timeEstimate:15},{text:"\u012era\u0161yti save ir pa\u017eym\u0117ti tobulintinas sritis (ai\u0161kumas, tempas, gestai)",timeEstimate:20},{text:"Repetuoti dar 3 kartus, sutelkiant d\u0117mes\u012f \u012f skland\u017eius per\u0117jimus ir laiko valdym\u0105",timeEstimate:30}]:[{text:`Suskaidyti "${e}" \u012f 3-5 ma\u017eas, pasiekiamas dalis`,timeEstimate:15},{text:"Paruo\u0161ti aplink\u0105: pa\u0161alinti trukd\u017eius ir surinkti visas reikalingas priemones",timeEstimate:10},{text:"Nustatyti 25 minu\u010di\u0173 laikmat\u012f ir dirbti su pirma dalimi visi\u0161koje koncentracijoje",timeEstimate:25},{text:"Padaryti 5 minu\u010di\u0173 pertrauk\u0105, tada t\u0119sti su kita dalimi",timeEstimate:30},{text:"Per\u017ei\u016br\u0117ti savo progres\u0105 ir pakoreguoti plan\u0105, jei reikia",timeEstimate:15}]}},Uf=e=>{if(!e)return 15;const t=e.toLowerCase(),n=t.match(/(\d+)[ -]*(minute|min|hour|hr|minut|val)/);if(n)return n[2].startsWith("hour")||n[2].startsWith("hr")||n[2].startsWith("val")?60*parseInt(n[1],10):parseInt(n[1],10);const r=t.split(/\s+/).length,a=.5*r;if(t.includes("research")||t.includes("find")||t.includes("look up")||t.includes("search")||t.includes("tyrin\u0117")||t.includes("ie\u0161ko")||t.includes("rasti")||t.includes("paie\u0161ka"))return t.includes("in-depth")||t.includes("detailed")||t.includes("comprehensive")||t.includes("i\u0161sam")||t.includes("detal\u0173")||t.includes("nuodug")?Math.max(45,a):Math.max(20,Math.min(45,a));if(t.includes("write")||t.includes("create")||t.includes("draft")||t.includes("compose")||t.includes("ra\u0161y")||t.includes("kur")||t.includes("juodra\u0161")||t.includes("komponuo"))return t.includes("outline")||t.includes("brief")||t.includes("plan")||t.includes("trump")?Math.max(15,Math.min(30,a)):t.includes("essay")||t.includes("report")||t.includes("paper")||t.includes("ra\u0161i")||t.includes("ataska")||t.includes("darb")?Math.max(45,1.5*a):Math.max(30,a);if((t.includes("timer")||t.includes("laikmat"))&&t.match(/\d+/)){const e=t.match(/(\d+)[ -]*(minute|min|hour|hr|minut|val)/);if(e)return e[2].startsWith("hour")||e[2].startsWith("hr")||e[2].startsWith("val")?60*parseInt(e[1],10):parseInt(e[1],10)}const i=t.match(/(\d+)\s*(items|questions|problems|pages|slides|sections|element\u0173|klausim\u0173|u\u017edavini\u0173|puslapi\u0173|skaidri\u0173|dali\u0173)/);if(i){const e=parseInt(i[1],10);switch(i[2].toLowerCase()){case"questions":case"problems":case"klausim\u0173":case"u\u017edavini\u0173":return Math.max(15,3*e);case"pages":case"puslapi\u0173":return Math.max(15,4*e);case"slides":case"skaidri\u0173":return Math.max(20,5*e);case"sections":case"dali\u0173":return Math.max(30,10*e);default:return Math.max(15,2*e)}}return Math.max(15,Math.min(45,1.5*r))},Wf=async e=>{console.log("Estimating time for:",e);try{const n=await fetch("https://text.pollinations.ai/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:"J\u016bs esate produktyvumo ekspertas, specializuojantis u\u017eduo\u010di\u0173 laiko \u012fvertinime su akcentu \u012f anti-atid\u0117liojim\u0105. \n  Bet kokiai u\u017eduo\u010diai \u012fvertinkite, kiek minu\u010di\u0173 u\u017etrukt\u0173 j\u0105 u\u017ebaigti.\n  \n  Svarbios gair\u0117s:\n  1. Nam\u0173 darb\u0173 ar mokymosi u\u017eduotims \u012fskai\u010diuokite pasiruo\u0161imo laik\u0105, pertrauk\u0173 laik\u0105 ir per\u017ei\u016bros laik\u0105\n  2. Ra\u0161ymo u\u017eduotims skirkite 30 minu\u010di\u0173 vienam puslapiui teksto\n  3. Skaitymo u\u017eduotims numatykite 5 minutes vienam puslapiui bei papildom\u0105 laik\u0105 u\u017era\u0161ams\n  4. Prid\u0117kite 15-20% laiko atsarg\u0105, atsi\u017evelgiant \u012f galimus trukd\u017eius ir atid\u0117liojim\u0105\n  5. Atsi\u017evelkite \u012f u\u017eduoties sud\u0117tingum\u0105 ir apimt\u012f\n  \n  Pateikite tik skai\u010di\u0173, nurodant\u012f minutes."},{role:"user",content:`\u012evertinkite laik\u0105 minut\u0117mis \u0161iai u\u017eduo\u010diai, atsi\u017evelgiant \u012f pertraukas, pasiruo\u0161im\u0105 ir galim\u0105 atid\u0117liojim\u0105: "${e}"`}],model:"openai"})});if(!n.ok)throw new Error(`API request failed with status ${n.status}`);const r=await n.text();console.log("Time estimation response:",r);try{const e=JSON.parse(r);let t="";t="string"===typeof e?e:e.choices&&e.choices[0]&&e.choices[0].message?e.choices[0].message.content:e.content?e.content:JSON.stringify(e);const n=t.match(/\d+/);if(n)return Math.ceil(1.2*parseInt(n[0],10))}catch(t){console.log("Time estimation response is not JSON, using raw text instead")}const a=r.match(/\d+/);if(!a)return Hf(e);const i=parseInt(a[0],10);return Math.ceil(1.2*i)}catch(n){return console.error("Error estimating task time:",n),Hf(e)}},Hf=e=>{const t=e.toLowerCase(),n=e.split(/\s+/).length;if(t.includes("homework")||t.includes("assignment")||t.includes("nam\u0173 darb")||t.includes("u\u017eduotis"))return 60;if(t.includes("study")||t.includes("learn")||t.includes("mokytis")||t.includes("studijuoti"))return 90;if(t.includes("write")||t.includes("essay")||t.includes("ra\u0161yti")||t.includes("ra\u0161inys"))return 120;if(t.includes("read")||t.includes("book")||t.includes("skaityti")||t.includes("knyg"))return 75;{const e=t.includes("research")||t.includes("tyrin\u0117ti")||t.includes("write")||t.includes("ra\u0161yti")||t.includes("create")||t.includes("kurti")?1.5:1;return Math.ceil(Math.max(30,5*n*e*1.2))}},Yf=Yt.div`
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-xl);
  background-color: var(--card-background);
  border-radius: 0;
  border: 2px solid var(--primary-yellow);
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    padding: var(--spacing-md);
    border-width: 1px;
  }
`,Kf=Yt.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.2rem;
  color: var(--primary-yellow);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  text-shadow: 2px 2px 0px var(--primary-red);
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
  }
`,qf=Yt.div`
  margin-bottom: var(--spacing-lg);
  
  label {
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
    color: var(--primary-yellow);
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-md);
    
    label {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: var(--spacing-sm);
    
    label {
      font-size: 1rem;
    }
  }
`,Gf=Yt.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid var(--primary-yellow);
  border-radius: 0;
  background-color: var(--input-background);
  color: var(--text-color);
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--primary-red);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  }
  
  &::placeholder {
    color: var(--subtask-text-color);
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.95rem;
    border-width: 1px;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`,Xf=(Yt.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`,Yt.div`
  flex: 1;
  
  label {
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
    color: var(--primary-yellow);
    letter-spacing: 1px;
  }
  
  input {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid var(--primary-yellow);
    border-radius: 0;
    background-color: var(--input-background);
    color: var(--text-color);
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
    
    &:focus {
      outline: none;
      border-color: var(--primary-red);
      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
    }
    
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
      -webkit-appearance: none;
      margin: 0;
    }
  }
  
  @media (max-width: 768px) {
    label {
      font-size: 1.1rem;
    }
    
    input {
      padding: 0.7rem;
      font-size: 0.95rem;
      border-width: 1px;
      box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
    }
  }
  
  @media (max-width: 480px) {
    label {
      font-size: 1rem;
    }
    
    input {
      padding: 0.6rem;
      font-size: 0.9rem;
    }
  }
`,Yt(Ul.button)`
  width: 100%;
  padding: 1rem;
  background-color: var(--primary-yellow);
  color: var(--text-color);
  border: none;
  border-radius: 0;
  cursor: pointer;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-left: 5px solid var(--primary-red);
  margin-top: var(--spacing-lg);
  
  &:hover {
    background-color: var(--primary-red);
    color: white;
    transform: translateY(-3px);
    box-shadow: 7px 7px 0px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 1.2rem;
    margin-top: var(--spacing-md);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
    border-left-width: 4px;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 1.1rem;
    margin-top: var(--spacing-sm);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
    border-left-width: 3px;
  }
`),Qf=Yt.div`
  margin-top: var(--spacing-sm);
  font-size: 0.85rem;
  color: var(--subtask-text-color);
  font-style: italic;
  
  strong {
    color: var(--primary-yellow);
    font-weight: normal;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Jf=(Yt.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Yt.div`
  position: relative;
  
  input {
    width: 100%;
    padding: 1.2rem 9rem 1.2rem 1.2rem;
    font-size: 1.2rem;
    font-family: 'Oswald', sans-serif;
    background-color: var(--card-background);
    border: 3px solid var(--primary-yellow);
    color: var(--text-color);
    border-radius: 0;
    
    &:focus {
      outline: none;
      border-color: var(--primary-red);
      box-shadow: 5px 5px 0px rgba(178, 34, 34, 0.3);
    }
    
    &::placeholder {
      color: rgba(255, 253, 208, 0.5);
      font-family: 'Oswald', sans-serif;
      letter-spacing: 0.5px;
    }
  }

  .magic-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--primary-red);
    border: 2px solid var(--primary-yellow);
    color: var(--primary-yellow);
    cursor: pointer;
    padding: 8px 10px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    border-radius: 0;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: var(--primary-yellow);
      color: var(--primary-red);
      border-color: var(--primary-red);
      transform: translateY(-50%) scale(1.05);
      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
    }
    
    &:active {
      transform: translateY(-50%) scale(1);
      box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    }
    
    .icon-text {
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 1px;
    }
  }
`,Yt(Ul.button)`
  background-color: var(--primary-red);
  color: var(--primary-yellow);
  padding: 1rem 2rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem;
  letter-spacing: 2px;
  border: 2px solid var(--primary-yellow);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
  align-self: flex-end;
  border-radius: 0;
  
  &:hover {
    background-color: var(--primary-yellow);
    color: var(--primary-red);
    border-color: var(--primary-red);
    box-shadow: 7px 7px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.5;
  }
`,Yt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: var(--primary-yellow);
  font-family: 'Bebas Neue', sans-serif;
  background-color: rgba(178, 34, 34, 0.2);
  padding: 0.5rem 1rem;
  border-left: 4px solid var(--primary-yellow);
  letter-spacing: 1px;
  
  svg {
    font-size: 1.2rem;
  }
`,Yt.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 1rem 0;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-yellow);
  border-radius: 0;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
`,Yt.li`
  padding: 1rem;
  background-color: var(--card-background);
  margin-bottom: 1rem;
  border-left: 4px solid var(--primary-red);
  color: var(--text-color);
  font-family: 'Oswald', sans-serif;
  display: flex;
  align-items: baseline;
  border-radius: 0;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  position: relative;
  
  span:first-child {
    color: var(--primary-yellow);
    font-weight: bold;
    margin-right: 0.75rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.3rem;
    min-width: 1.5rem;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
  }
`,Yt.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--primary-yellow);
  color: black;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 0;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    font-size: 0.75rem;
  }
`,Yt(Ul.div)`
  text-align: center;
  padding: 2rem;
  color: var(--primary-yellow);
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-yellow);
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, var(--primary-red), var(--primary-yellow), var(--primary-red));
    animation: loadingBar 2s linear infinite;
  }
  
  @keyframes loadingBar {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  p {
    margin-top: 1rem;
    font-size: 1.1rem;
  }
`),Zf=Yt.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    
    &.active {
      opacity: 1;
    }
    
    .step-icon {
      background: var(--primary-red);
      color: var(--primary-yellow);
      width: 40px;
      height: 40px;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
      border: 2px solid var(--primary-yellow);
      
      svg {
        font-size: 1.2rem;
      }
    }
    
    .step-text {
      font-size: 0.9rem;
      white-space: nowrap;
    }
  }
  
  .connector {
    width: 30px;
    height: 2px;
    background-color: var(--primary-yellow);
    margin-top: 20px;
  }
`,em=(Yt(Ul.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
  
  .success-content {
    background-color: var(--primary-red);
    color: var(--primary-yellow);
    padding: 2rem;
    border: 3px solid var(--primary-yellow);
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    
    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    h3 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      letter-spacing: 2px;
    }
    
    p {
      font-family: 'Oswald', sans-serif;
    }
  }
`,Yt(Ul.div)`
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px solid var(--primary-yellow);
  border-left: 6px solid var(--primary-red);
`),tm=Yt.div`
  display: flex;
  gap: 10px;
  margin-bottom: var(--spacing-md);
  
  input {
    flex: 1;
    padding: 0.8rem;
    border: 2px solid var(--primary-yellow);
    border-radius: 0;
    background-color: var(--input-background);
    color: var(--text-color);
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
  }
  
  button {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    border: none;
    padding: 0.5rem 1rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    
    &:hover {
      background-color: var(--primary-red);
      color: white;
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    
    button {
      align-self: flex-end;
    }
  }
`,nm=Yt.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  
  label {
    color: var(--primary-yellow);
    font-family: 'Bebas Neue', sans-serif;
  }
  
  input {
    width: 60px;
    padding: 0.4rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    margin-left: 0;
    margin-top: 5px;
  }
`,rm=Yt.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.1);
  padding: var(--spacing-md);
  border-left: 4px solid var(--primary-yellow);
  
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    font-size: 1.1rem;
    letter-spacing: 1px;
    user-select: none;
  }
  
  .ai-icon {
    color: var(--primary-red);
    font-size: 1.3rem;
  }
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  
  .ai-description {
    margin-left: 28px;
    margin-top: 5px;
    font-size: 0.85rem;
    color: var(--subtask-text-color);
    font-style: italic;
  }
`,am=(Yt.div`
  display: flex;
  gap: 10px;
  margin-top: var(--spacing-md);
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Yt(Ul.button)`
  padding: 0.75rem 1.5rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 0;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
  
  &.primary {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    border: none;
    border-left: 4px solid var(--primary-red);
  }
  
  &.secondary {
    background-color: transparent;
    color: var(--primary-yellow);
    border: 2px solid var(--primary-yellow);
  }
`),im=Yt.button`
  background: var(--primary-red);
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  
  &:hover {
    background: darkred;
  }
`,om=t=>{let{addTask:n,onTaskAdded:r}=t;const[a,i]=(0,e.useState)(""),[o,s]=(0,e.useState)([]),[l,c]=(0,e.useState)(null),[u,d]=(0,e.useState)(!1),[p,f]=(0,e.useState)(null),[m,h]=(0,e.useState)(!1),[g,v]=(0,e.useState)(!0),[y,x]=(0,e.useState)(0),[b,k]=(0,e.useState)(!1),[w,S]=(0,e.useState)("Kuriami u\u017eduoties \u017eingsniai..."),[C,E]=(0,e.useState)(""),[j,P]=(0,e.useState)(10),[z,T]=(0,e.useState)(!1);(0,e.useEffect)((()=>{""===a.trim()&&(s([]),c(null),f(null),h(!1),T(!1))}),[a]),(0,e.useEffect)((()=>{if(!u)return;const e=["Analizuojama u\u017eduotis...","Kuriami optimal\u016bs \u017eingsniai...","Skai\u010diuojamas laikas u\u017eduo\u010diai...","Baigiama formuoti..."];let t=0;const n=setInterval((()=>{t=(t+1)%e.length,x(t),S(e[t])}),2e3);return()=>clearInterval(n)}),[u]);const N=async()=>{if(""!==a.trim()){d(!0),f(null),h(!0),x(0);try{const[e,t]=await Promise.all([$f(a),Wf(a)]);if(console.log("Received subtasks:",e),console.log("Received time estimate:",t),!e||0===e.length)throw new Error("Couldn't generate subtasks from the API response");const n=e.map((e=>"string"===typeof e?{text:e,timeEstimate:O(e)}:e));s(n),c(t)}catch(p){console.error("Error generating task info:",p),f(p.message||"Failed to generate task breakdown. Try a more specific description.")}finally{d(!1)}}},A=()=>{if(""===C.trim())return;const e={text:C.trim(),timeEstimate:parseInt(j)||10};s([...o,e]),E(""),c(null!==l?l+e.timeEstimate:e.timeEstimate)},O=e=>{const t=e.split(/\s+/).length;return Math.max(10,Math.min(30,2*t))},L={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0}};return(0,Wl.jsxs)(Yf,{as:Ul.div,variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,when:"beforeChildren",staggerChildren:.1}}},initial:"hidden",animate:"visible",children:[(0,Wl.jsx)(Kf,{as:Ul.h2,variants:L,children:"Prid\u0117ti nauj\u0105 u\u017eduot\u012f"}),(0,Wl.jsx)(Ul.div,{variants:L,children:(0,Wl.jsxs)(qf,{children:[(0,Wl.jsx)("label",{htmlFor:"taskInput",children:"U\u017eduoties apra\u0161ymas:"}),(0,Wl.jsx)(Gf,{id:"taskInput",type:"text",placeholder:"\u012eveskite u\u017eduoties pavadinim\u0105 ar detalesn\u012f apra\u0161ym\u0105...",value:a,onChange:e=>{i(e.target.value)},onKeyDown:async e=>{"Tab"===e.key&&""!==a.trim()&&g&&(e.preventDefault(),await N())}}),(0,Wl.jsx)(Qf,{children:"\u012eveskite u\u017eduoties pavadinim\u0105. Galite prid\u0117ti u\u017eduot\u012f su arba be \u017eingsni\u0173."})]})}),(0,Wl.jsx)(Ul.div,{variants:L,children:(0,Wl.jsxs)(rm,{children:[(0,Wl.jsxs)("label",{htmlFor:"useAI",children:[(0,Wl.jsx)("input",{id:"useAI",type:"checkbox",checked:g,onChange:e=>v(e.target.checked)}),(0,Wl.jsx)(Dp,{icon:Mf,className:"ai-icon"}),"Naudoti DI \u017eingsni\u0173 ir laiko generavimui"]}),(0,Wl.jsx)("div",{className:"ai-description",children:"DI automati\u0161kai sukurs \u017eingsnius j\u016bs\u0173 u\u017eduo\u010diai ir apskai\u010diuos laik\u0105, reikaling\u0105 jai atlikti"})]})}),(0,Wl.jsxs)(Ql,{mode:"wait",children:[u&&(0,Wl.jsxs)(Jf,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.5},children:[(0,Wl.jsx)(Dp,{icon:Lf,spin:!0,size:"2x"}),(0,Wl.jsx)("p",{children:w}),(0,Wl.jsxs)(Zf,{children:[(0,Wl.jsxs)("div",{className:"step "+(y>=0?"active":""),children:[(0,Wl.jsx)("div",{className:"step-icon",children:(0,Wl.jsx)(Dp,{icon:y>0?_f:Rf})}),(0,Wl.jsx)("div",{className:"step-text",children:"Analiz\u0117"})]}),(0,Wl.jsx)("div",{className:"connector"}),(0,Wl.jsxs)("div",{className:"step "+(y>=1?"active":""),children:[(0,Wl.jsx)("div",{className:"step-icon",children:(0,Wl.jsx)(Dp,{icon:y>1?_f:Bp})}),(0,Wl.jsx)("div",{className:"step-text",children:"\u017dingsniai"})]}),(0,Wl.jsx)("div",{className:"connector"}),(0,Wl.jsxs)("div",{className:"step "+(y>=2?"active":""),children:[(0,Wl.jsx)("div",{className:"step-icon",children:(0,Wl.jsx)(Dp,{icon:y>2?_f:Wp})}),(0,Wl.jsx)("div",{className:"step-text",children:"Laikas"})]}),(0,Wl.jsx)("div",{className:"connector"}),(0,Wl.jsxs)("div",{className:"step "+(y>=3?"active":""),children:[(0,Wl.jsx)("div",{className:"step-icon",children:(0,Wl.jsx)(Dp,{icon:tf})}),(0,Wl.jsx)("div",{className:"step-text",children:"U\u017eduotis"})]})]})]}),p&&(0,Wl.jsxs)(Ul.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{backgroundColor:"rgba(255, 0, 0, 0.1)",padding:"15px",marginTop:"20px",marginBottom:"20px",borderLeft:"5px solid #ff0000",display:"flex",alignItems:"center",gap:"15px"},children:[(0,Wl.jsx)(Dp,{icon:Bf,style:{color:"#ff0000",fontSize:"1.5rem"}}),(0,Wl.jsxs)("div",{style:{flex:1},children:[(0,Wl.jsx)("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:"Klaida generuojant \u017eingsnius"}),(0,Wl.jsx)("div",{children:p})]}),(0,Wl.jsxs)("button",{onClick:async()=>{await N()},style:{backgroundColor:"var(--primary-yellow)",color:"var(--text-color)",border:"none",padding:"8px 15px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[(0,Wl.jsx)(Dp,{icon:Zp}),(0,Wl.jsx)("span",{children:"Bandyti dar kart\u0105"})]})]}),!u&&!p&&o.length>0&&(0,Wl.jsxs)(Ul.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.5},children:[(0,Wl.jsxs)("h3",{style:{color:"var(--primary-yellow)",marginBottom:"15px",fontFamily:"'Bebas Neue', sans-serif",fontSize:"1.5rem",borderBottom:"2px solid var(--primary-red)",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"10px"},children:[(0,Wl.jsx)(Dp,{icon:jf}),"U\u017eduoties \u017eingsniai:"]}),(0,Wl.jsxs)("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.05)",padding:"15px",marginBottom:"20px",border:"1px solid var(--primary-yellow)"},children:[(0,Wl.jsx)(Ql,{children:o.map(((e,t)=>(0,Wl.jsxs)(Ul.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{delay:.1*t},style:{display:"flex",alignItems:"center",marginBottom:"10px",padding:"10px",backgroundColor:"rgba(217, 164, 4, 0.1)",borderLeft:"3px solid var(--primary-yellow)",position:"relative"},children:[(0,Wl.jsxs)("div",{style:{marginRight:"15px",color:"var(--primary-yellow)",fontFamily:"'Bebas Neue', sans-serif",fontSize:"1.2rem",minWidth:"25px",textAlign:"center"},children:[t+1,"."]}),(0,Wl.jsx)("div",{style:{flex:1},children:"string"===typeof e?e:e.text}),(0,Wl.jsxs)("div",{style:{backgroundColor:"var(--primary-yellow)",color:"var(--text-color)",padding:"5px 10px",fontSize:"0.9rem",fontFamily:"'Bebas Neue', sans-serif",display:"flex",alignItems:"center",gap:"5px"},children:[(0,Wl.jsx)(Dp,{icon:vf}),"string"===typeof e?O(e):e.timeEstimate," min"]}),(0,Wl.jsx)(im,{onClick:()=>(e=>{const t=o[e],n=o.filter(((t,n)=>n!==e));s(n),null!==l&&t.timeEstimate&&c(Math.max(0,l-t.timeEstimate))})(t),title:"Pa\u0161alinti \u017eingsn\u012f",children:(0,Wl.jsx)(Dp,{icon:Af})})]},t)))}),l>0&&(0,Wl.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"rgba(0, 0, 0, 0.1)",borderLeft:"3px solid var(--primary-red)",display:"flex",alignItems:"center",gap:"10px",color:"var(--primary-yellow)",fontFamily:"'Bebas Neue', sans-serif",fontSize:"1.1rem"},children:[(0,Wl.jsx)(Dp,{icon:vf}),"Bendras u\u017eduoties laikas: ",l," min"]})]})]})]}),!u&&a&&(0,Wl.jsx)(Ul.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:z?(0,Wl.jsxs)(em,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[(0,Wl.jsxs)("h4",{style:{color:"var(--primary-yellow)",marginBottom:"10px",fontFamily:"'Bebas Neue', sans-serif",fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px"},children:[(0,Wl.jsx)(Dp,{icon:of}),"Prid\u0117ti savo \u017eingsn\u012f"]}),(0,Wl.jsxs)(tm,{children:[(0,Wl.jsx)("input",{type:"text",placeholder:"\u012eveskite \u017eingsnio apra\u0161ym\u0105...",value:C,onChange:e=>E(e.target.value),onKeyDown:e=>{"Enter"===e.key&&A()}}),(0,Wl.jsxs)(nm,{children:[(0,Wl.jsx)("label",{htmlFor:"timeInput",children:"Laikas (min):"}),(0,Wl.jsx)("input",{id:"timeInput",type:"number",min:"1",max:"120",value:j,onChange:e=>P(parseInt(e.target.value)||10)})]}),(0,Wl.jsxs)("button",{onClick:A,children:[(0,Wl.jsx)(Dp,{icon:Tf}),(0,Wl.jsx)("span",{children:"Prid\u0117ti"})]})]})]}):(0,Wl.jsxs)(am,{className:"secondary",onClick:()=>T(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,Wl.jsx)(Dp,{icon:Tf}),"Prid\u0117ti savo \u017eingsn\u012f"]})}),(0,Wl.jsx)(Ql,{mode:"wait",children:b?(0,Wl.jsxs)(Ul.div,{variants:{hidden:{scale:.8,opacity:0},visible:{scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:15}},exit:{scale:1.2,opacity:0,transition:{duration:.3}}},initial:"hidden",animate:"visible",exit:"exit",className:"success-animation",children:[(0,Wl.jsx)("h3",{children:"U\u017eduotis s\u0117kmingai prid\u0117ta!"}),(0,Wl.jsx)("p",{children:"Dabar galite j\u0105 matyti savo u\u017eduo\u010di\u0173 s\u0105ra\u0161e."})]}):(0,Wl.jsx)(Xf,{onClick:async e=>{if(e.preventDefault(),!a.trim())return;let t=o,d=l;if(g&&0===o.length&&!u&&!m)return void await N();0===o.length&&(t=[{text:`Atlikti: ${a}`,timeEstimate:30}],d=30);const p={id:ac(),text:a,subtasks:t,subtasksCompleted:Array(t.length).fill(!1),estimatedMinutes:d>0?d:30,completed:!1,createdAt:(new Date).toISOString()};n(p),k(!0),setTimeout((()=>{k(!1),i(""),s([]),c(0),v(!0),T(!1),r&&r()}),1500)},whileHover:{scale:1.02},whileTap:{scale:.98},disabled:u||!a.trim(),children:g&&0===o.length&&!p?(0,Wl.jsxs)(Wl.Fragment,{children:[(0,Wl.jsx)(Dp,{icon:Rf,style:{marginRight:"10px"}}),"Generuoti u\u017eduot\u012f su \u017eingsniais"]}):(0,Wl.jsxs)(Wl.Fragment,{children:[(0,Wl.jsx)(Dp,{icon:Tf,style:{marginRight:"10px"}}),o.length>0?"Prid\u0117ti u\u017eduot\u012f su \u017eingsniais":"Prid\u0117ti paprast\u0105 u\u017eduot\u012f"]})})})]})},sm=()=>((()=>{if(!localStorage.getItem("userData")){const e={level:1,experience:0,tasksCompleted:0,subtasksCompleted:0,timeSpentMinutes:0,streak:0,lastTaskDate:null,rewards:[],completedTaskIds:[],completedSubtaskIds:[]};localStorage.setItem("userData",JSON.stringify(e))}const e=JSON.parse(localStorage.getItem("userData"));e.completedTaskIds||(e.completedTaskIds=[]),e.completedSubtaskIds||(e.completedSubtaskIds=[]),e.rewards||(e.rewards=[]),localStorage.setItem("userData",JSON.stringify(e))})(),JSON.parse(localStorage.getItem("userData"))),lm=e=>{localStorage.setItem("userData",JSON.stringify(e))},cm=()=>{const e=sm();return{level:e.level,experience:e.experience,tasksCompleted:e.tasksCompleted,subtasksCompleted:e.subtasksCompleted,timeSpentMinutes:e.timeSpentMinutes,streak:e.streak,lastActivity:e.lastTaskDate}},um=function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||cm().level;return Math.floor(100*Math.pow(1.5,e-1))},dm=[{id:"first_task",name:"Pirmasis \u017eingsnis",description:"U\u017ebaig\u0117te savo pirm\u0105j\u0105 u\u017eduot\u012f!",icon:"\ud83c\udfc6",condition:e=>1===e.tasksCompleted},{id:"five_tasks",name:"Produktyvumo meistras",description:"U\u017ebaig\u0117te 5 u\u017eduotis. Puiku!",icon:"\u2b50",condition:e=>5===e.tasksCompleted},{id:"ten_tasks",name:"U\u017eduo\u010di\u0173 specialistas",description:"U\u017ebaig\u0117te 10 u\u017eduo\u010di\u0173. \u012esp\u016bdinga!",icon:"\ud83c\udf1f",condition:e=>10===e.tasksCompleted},{id:"level_5",name:"Auk\u0161tasis lygis",description:"Pasiek\u0117te 5 lyg\u012f. Toliau tik geriau!",icon:"\ud83c\udf96\ufe0f",condition:e=>5===e.level},{id:"level_10",name:"Produktyvumo \u010dempionas",description:"Pasiek\u0117te 10 lyg\u012f. Esate tikras profesionalas!",icon:"\ud83d\udc51",condition:e=>10===e.level},{id:"streak_3",name:"Ritmo palaikytojas",description:"I\u0161laik\u0117te 3 dien\u0173 u\u017eduo\u010di\u0173 atlikimo serij\u0105. Taip laikykite!",icon:"\ud83d\udd25",condition:e=>3===e.streak},{id:"streak_7",name:"Savait\u0117s \u017evaig\u017ed\u0117",description:"I\u0161laik\u0117te 7 dien\u0173 u\u017eduo\u010di\u0173 atlikimo serij\u0105!",icon:"\ud83c\udf08",condition:e=>7===e.streak},{id:"subtasks_50",name:"\u017dingsni\u0173 meistras",description:"U\u017ebaig\u0117te 50 \u017eingsni\u0173. Smulk\u016bs \u017eingsniai veda \u012f did\u017eius pasiekimus!",icon:"\ud83d\udeb6",condition:e=>e.subtasksCompleted>=50}],pm=e=>{const t=[];return dm.forEach((n=>{!e.rewards.includes(n.id)&&n.condition(e)&&(e.rewards.push(n.id),t.push(n))})),t},fm=()=>sm().rewards.map((e=>{const t=dm.find((t=>t.id===e));return t||{id:e,name:"Ne\u017einomas apdovanojimas",description:"",icon:"\u2753"}})),mm=e=>{const t=sm();if(t.completedTaskIds.includes(e.id))return null;let n=50;if(n+=5*(e.subtasks?e.subtasks.length:1),e.timeSpent&&(n+=2*Math.round(e.timeSpent/5)),t.experience+=n,t.tasksCompleted+=1,t.lastTaskDate=(new Date).toISOString(),e.timeSpent&&(t.timeSpentMinutes+=Math.round(e.timeSpent)),e.subtasks&&e.subtasksCompleted){const n=e.subtasksCompleted.filter(Boolean).length;t.subtasksCompleted+=n}gm(t);const r=t.level;vm(t),t.completedTaskIds.push(e.id);const a=pm(t);return lm(t),{xpGained:n,newLevel:t.level,levelUp:t.level>r,newRewards:a}},hm=(e,t,n)=>{const r=sm(),a=`${e}_${t}`;if(r.completedSubtaskIds.includes(a))return null;let i=10;i+=Math.min(10,Math.floor(n.length/50)),r.experience+=i,r.subtasksCompleted+=1,r.lastTaskDate=(new Date).toISOString(),r.completedSubtaskIds.push(a);const o=r.level;vm(r);const s=pm(r);return lm(r),{xpGained:i,newLevel:r.level,levelUp:r.level>o,newRewards:s}},gm=e=>{const t=new Date,n=e.lastTaskDate?new Date(e.lastTaskDate):null;if(n){const r=Math.floor((t-n)/864e5);0===r||(1===r?(e.streak+=1,e.experience+=20):e.streak=1)}else e.streak=1},vm=e=>{for(;e.experience>=um(e.level);)e.level+=1},ym=Yt(Ul.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: var(--spacing-md);
`,xm=Yt(Ul.div)`
  background-color: var(--card-background);
  max-width: 800px;
  width: 90%;
  border-radius: 0;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.3);
  border: 3px solid var(--primary-yellow);
  border-left: 10px solid var(--primary-red);
  overflow: auto;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`,bm=Yt.div`
  background-color: var(--primary-yellow);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    color: var(--text-color);
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    font-size: 2rem;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 15px;
    
    svg {
      color: var(--primary-red);
      font-size: 1.6rem;
      filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.2));
    }
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    
    h2 {
      font-size: 1.6rem;
    }
  }
`,km=Yt.button`
  background: none;
  border: none;
  color: var(--primary-red);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`,wm=Yt.div`
  padding: var(--spacing-lg);
  flex: 1;
  overflow-y: auto;
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`,Sm=Yt.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: var(--primary-red);
  color: var(--primary-yellow);
  padding: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1.5px;
  border-radius: 0;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  
  &::before {
    content: 'Laikmatis';
    position: absolute;
    top: -10px;
    left: 15px;
    background-color: var(--primary-yellow);
    color: var(--primary-red);
    padding: 0 10px;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  
  .timer-display {
    font-size: 3rem;
    margin-right: auto;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  
  .timer-controls {
    display: flex;
    gap: 12px;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    
    .timer-display {
      text-align: center;
      margin-right: 0;
      margin-bottom: 15px;
    }
    
    .timer-controls {
      justify-content: center;
    }
  }
`,Cm=Yt.button`
  background-color: var(--primary-yellow);
  color: var(--text-color);
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 0;
  transition: all 0.2s ease;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
  }
  
  &.stop {
    background-color: #ff3b30;
    color: white;
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
`,Em=Yt.div`
  margin-top: var(--spacing-lg);
  
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    margin-bottom: 20px;
    font-size: 1.5rem;
    letter-spacing: 1.2px;
    display: flex;
    align-items: center;
    gap: 12px;
    
    svg {
      color: var(--primary-red);
      font-size: 1.3rem;
    }
  }
`,jm=Yt.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-md);
  background-color: ${e=>e.$completed?"rgba(0, 200, 0, 0.1)":"rgba(0, 0, 0, 0.05)"};
  margin-bottom: var(--spacing-sm);
  border-left: 5px solid ${e=>e.$completed?"var(--completed-color)":"var(--primary-yellow)"};
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateX(3px);
    background-color: ${e=>e.$completed?"rgba(0, 200, 0, 0.15)":"rgba(0, 0, 0, 0.08)"};
  }
  
  .subtask-checkbox {
    color: ${e=>e.$completed?"var(--completed-color)":"var(--primary-yellow)"};
    font-size: 1.6rem;
    margin-right: 15px;
    cursor: pointer;
    min-width: 24px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
  
  .subtask-text {
    flex: 1;
    text-decoration: ${e=>e.$completed?"line-through":"none"};
    color: ${e=>e.$completed?"var(--subtask-text-color)":"var(--text-color)"};
    transition: all 0.3s ease;
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    line-height: 1.3;
  }
  
  .subtask-time {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    padding: 5px 10px;
    font-size: 0.95rem;
    font-family: 'Bebas Neue', sans-serif;
    display: flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.8px;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    
    svg {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    
    .subtask-checkbox {
      font-size: 1.4rem;
      margin-right: 10px;
    }
    
    .subtask-time {
      font-size: 0.85rem;
      padding: 4px 8px;
    }
  }
`,Pm=Yt.div`
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 0;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  border-left: 5px solid var(--primary-yellow);
  
  .completion-title {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    font-size: 1.6rem;
    margin-bottom: var(--spacing-sm);
    letter-spacing: 1px;
    text-align: center;
    
    svg {
      margin-right: 10px;
      color: var(--primary-red);
    }
  }
  
  .progress-container {
    background-color: rgba(0, 0, 0, 0.1);
    height: 18px;
    margin: var(--spacing-md) 0;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  
  .progress-bar {
    height: 100%;
    background-color: var(--primary-yellow);
    transition: width 0.8s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent 25%,
        rgba(255, 255, 255, 0.2) 25%,
        rgba(255, 255, 255, 0.2) 50%,
        transparent 50%,
        transparent 75%,
        rgba(255, 255, 255, 0.2) 75%
      );
      background-size: 30px 30px;
      animation: move 2s linear infinite;
      
      @keyframes move {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 60px 0;
        }
      }
    }
  }
  
  .completion-stats {
    display: flex;
    justify-content: space-between;
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    font-size: 1.1rem;
    margin-bottom: var(--spacing-md);
    letter-spacing: 0.8px;
    
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`,zm=Yt(Ul.button)`
  background-color: var(--completed-color);
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: var(--spacing-lg) auto;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  
  svg {
    font-size: 1.4rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.2));
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: var(--spacing-sm) var(--spacing-md);
  }
`,Tm=e=>{const t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`},Nm=t=>{let{task:n,isOpen:r,onClose:a,onTaskComplete:i,toggleSubtask:o}=t;const[s,l]=(0,e.useState)(0),[c,u]=(0,e.useState)(!1),d=(0,e.useRef)(null),[p,f]=(0,e.useState)((null===n||void 0===n?void 0:n.subtasksCompleted)||[]),[m,h]=(0,e.useState)(!1);(0,e.useEffect)((()=>{var e;n&&(f(n.subtasksCompleted||Array((null===(e=n.subtasks)||void 0===e?void 0:e.length)||0).fill(!1)),l(0),u(!1),clearInterval(d.current))}),[n]),(0,e.useEffect)((()=>(c?d.current=setInterval((()=>{l((e=>e+1))}),1e3):clearInterval(d.current),()=>clearInterval(d.current))),[c]);if(!n||!r)return null;const g=(()=>{if(null===n||void 0===n||!n.subtasks||0===n.subtasks.length)return p[0]?100:0;const e=p.filter(Boolean).length;return Math.round(e/n.subtasks.length*100)})(),v=n.subtasks&&n.subtasks.length>0?p.every(Boolean):p[0];return(0,Wl.jsx)(Ql,{mode:"wait",children:r&&(0,Wl.jsx)(ym,{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},onClick:a,children:(0,Wl.jsxs)(xm,{variants:{hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:400,damping:30}},exit:{y:50,opacity:0}},onClick:e=>e.stopPropagation(),children:[(0,Wl.jsxs)(bm,{children:[(0,Wl.jsxs)("h2",{children:[(0,Wl.jsx)(Dp,{icon:wf}),n.text]}),(0,Wl.jsx)(km,{onClick:a,children:(0,Wl.jsx)(Dp,{icon:Af})})]}),(0,Wl.jsxs)(wm,{children:[(0,Wl.jsxs)(Sm,{children:[(0,Wl.jsxs)("div",{className:"timer-display",children:[(0,Wl.jsx)(Dp,{icon:vf,style:{marginRight:"15px"}}),Tm(s)]}),(0,Wl.jsxs)("div",{className:"timer-controls",children:[(0,Wl.jsx)(Cm,{onClick:()=>{u((e=>!e))},children:(0,Wl.jsx)(Dp,{icon:c?Qp:wf})}),(0,Wl.jsx)(Cm,{onClick:()=>{u(!1),clearInterval(d.current),l(0)},className:"stop",children:(0,Wl.jsx)(Dp,{icon:yf})})]})]}),(0,Wl.jsxs)(Em,{children:[(0,Wl.jsxs)("h3",{children:[(0,Wl.jsx)(Dp,{icon:Xp}),"U\u017eduoties \u017eingsniai:"]}),n.subtasks&&n.subtasks.map(((e,t)=>(0,Wl.jsxs)(jm,{$completed:p[t],as:Ul.div,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},children:[(0,Wl.jsx)(Dp,{icon:p[t]?Xp:nf,className:"subtask-checkbox",onClick:()=>(e=>{const t=[...p];t[e]=!t[e],f(t),o&&(o(n.id,e),t.every(Boolean)&&h(!0))})(t)}),(0,Wl.jsx)("span",{className:"subtask-text",children:"string"===typeof e?e:e.text}),(0,Wl.jsxs)("span",{className:"subtask-time",children:[(0,Wl.jsx)(Dp,{icon:vf}),"string"===typeof e?"10":e.timeEstimate," min"]})]},t)))]}),(0,Wl.jsxs)(Pm,{children:[(0,Wl.jsxs)("div",{className:"completion-title",children:[(0,Wl.jsx)(Dp,{icon:Of}),"U\u017eduoties progresas"]}),(0,Wl.jsxs)("div",{className:"completion-stats",children:[(0,Wl.jsxs)("span",{children:[(0,Wl.jsx)(Dp,{icon:Xp}),n.subtasks?p.filter(Boolean).length:p[0]?1:0," i\u0161 ",n.subtasks?n.subtasks.length:1," \u017eingsni\u0173"]}),(0,Wl.jsxs)("span",{children:[(0,Wl.jsx)(Dp,{icon:Wp}),Tm(s)," laikas"]})]}),(0,Wl.jsx)("div",{className:"progress-container",children:(0,Wl.jsx)("div",{className:"progress-bar",style:{width:`${g}%`}})}),(0,Wl.jsx)(Ql,{children:m&&(0,Wl.jsxs)(Ul.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},style:{backgroundColor:"rgba(0, 200, 0, 0.1)",padding:"15px",marginTop:"15px",borderLeft:"5px solid var(--completed-color)",color:"var(--completed-color)",fontFamily:"'Bebas Neue', sans-serif",display:"flex",alignItems:"center",gap:"10px",fontSize:"1.2rem",letterSpacing:"0.8px",boxShadow:"3px 3px 0 rgba(0, 0, 0, 0.1)"},children:[(0,Wl.jsx)(Dp,{icon:mf,size:"lg"}),(0,Wl.jsx)("span",{children:"Puiku! Visi \u017eingsniai u\u017ebaigti. Galite pa\u017eym\u0117ti u\u017eduot\u012f kaip atlikt\u0105."})]})})]}),(0,Wl.jsxs)(zm,{onClick:()=>{u(!1),clearInterval(d.current);const e={...n,subtasksCompleted:p,timeSpent:Math.max(s/60,1),completed:!0};i&&i(e),a()},whileHover:{scale:1.05},whileTap:{scale:.95},disabled:!v,children:[(0,Wl.jsx)(Dp,{icon:_f}),"U\u017ebaigti u\u017eduot\u012f"]})]})]})})})},Am=Yt(Ul.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: var(--spacing-md);
`,Om=Yt(Ul.div)`
  background-color: var(--card-background);
  max-width: 500px;
  width: 100%;
  border-radius: 0;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.3);
  border: 3px solid var(--primary-yellow);
  border-left: 10px solid var(--primary-red);
  position: relative;
  overflow: hidden;
`,Lm=Yt.div`
  background-color: var(--primary-yellow);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    color: var(--text-color);
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    font-size: 1.8rem;
    letter-spacing: 1px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 15px;
    
    svg {
      color: var(--primary-red);
    }
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    
    h2 {
      font-size: 1.4rem;
    }
  }
`,Mm=Yt.button`
  background: none;
  border: none;
  color: var(--primary-red);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`,Im=Yt.div`
  padding: var(--spacing-lg);
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`,Rm=Yt(Ul.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: var(--spacing-md);
  border-left: 5px solid var(--primary-yellow);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .reward-icon {
    font-size: 2.5rem;
    
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  
  .reward-details {
    flex: 1;
  }
  
  .reward-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem;
    color: var(--primary-red);
    margin-bottom: 5px;
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  
  .reward-description {
    color: var(--subtask-text-color);
    font-size: 0.9rem;
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`,Dm=Yt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`,_m=Yt(Ul.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${e=>e.color};
  opacity: 0.8;
  transform-origin: center;
`,Fm=e=>{let{rewards:t,onClose:n}=e;const r=["#FFD700","#FF4500","#FF8C00","#FF6347","#FFA500"],a=(()=>{const e=[];for(let t=0;t<50;t++)e.push({id:t,x:100*Math.random(),y:-20,size:10*Math.random()+5,color:r[Math.floor(Math.random()*r.length)],rotation:360*Math.random()});return e})(),i={hidden:{x:-50,opacity:0},visible:e=>({x:0,opacity:1,transition:{delay:.2*e,type:"spring",stiffness:300,damping:20}})},o={initial:e=>({x:`${e.x}%`,y:"-10%",rotate:0,scale:0}),animate:e=>({x:[`${e.x}%`,e.x-20+40*Math.random()+"%",e.x-40+80*Math.random()+"%"],y:["0%","50%","100%"],rotate:[0,e.rotation,2*e.rotation],scale:[0,1,.5],transition:{duration:2.5+2*Math.random(),ease:"easeOut",delay:.5*Math.random()}})};return(0,Wl.jsx)(Ql,{mode:"wait",children:(0,Wl.jsx)(Am,{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},onClick:n,children:(0,Wl.jsxs)(Om,{variants:{hidden:{y:100,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:20}},exit:{y:100,opacity:0}},onClick:e=>e.stopPropagation(),children:[(0,Wl.jsx)(Dm,{children:a.map((e=>(0,Wl.jsx)(_m,{color:e.color,style:{width:e.size,height:e.size},custom:e,variants:o,initial:"initial",animate:"animate"},e.id)))}),(0,Wl.jsxs)(Lm,{children:[(0,Wl.jsxs)("h2",{children:[(0,Wl.jsx)(Dp,{icon:Of}),"Nauji apdovanojimai!"]}),(0,Wl.jsx)(Mm,{onClick:n,children:(0,Wl.jsx)(Dp,{icon:Af})})]}),(0,Wl.jsx)(Im,{children:t.map(((e,t)=>(0,Wl.jsxs)(Rm,{custom:t,initial:"hidden",animate:"visible",variants:i,children:[(0,Wl.jsx)("div",{className:"reward-icon",children:e.icon}),(0,Wl.jsxs)("div",{className:"reward-details",children:[(0,Wl.jsx)("div",{className:"reward-name",children:e.name}),(0,Wl.jsx)("div",{className:"reward-description",children:e.description})]})]},e.id)))})]})})})},Bm=async(e,t)=>{try{if(!e.subtasks||0===e.subtasks.length)return{suggestion:"\u0160iai u\u017eduo\u010diai n\u0117ra nustatyt\u0173 \u017eingsni\u0173. Galite j\u0105 tiesiog pa\u017eym\u0117ti kaip atlikt\u0105.",resources:[]};const n=e.subtasks[t],r=`Pad\u0117k man atlikti \u0161\u012f u\u017eduoties \u017eingsn\u012f: "${"string"===typeof n?n:n.text}". \n    U\u017eduoties kontekstas: "${e.text}". \n    Pra\u0161au pateikti:\n    1. Trump\u0105 paai\u0161kinim\u0105, kaip atlikti \u0161\u012f \u017eingsn\u012f (ne daugiau 3 sakini\u0173)\n    2. Bent 2 konkre\u010dius veiksmus, kuriuos galiu atlikti\n    3. Jei \u012fmanoma, nuorod\u0105 \u012f nauding\u0105 \u0161altin\u012f`,a=await fetch(`https://text.pollinations.ai/${encodeURIComponent(r)}?model=openai&private=true`);if(!a.ok)throw new Error("API atsakymo klaida: "+a.status);const i=await a.text(),o=/(https?:\/\/[^\s]+)/g,s=i.match(o)||[];return{suggestion:i.replace(o,"").trim(),resources:s}}catch(n){return console.error("Klaida gaunant AI pasi\u016blymus:",n),{suggestion:"Nepavyko gauti pasi\u016blym\u0173. Bandykite v\u0117liau arba atlikite \u017eingsn\u012f savaranki\u0161kai.",resources:[]}}},Vm=async e=>{try{const t=`Analizuok \u0161i\u0105 u\u017eduot\u012f: "${e.text}".\n    \n    Pateik 3 trumpus patarimus, kaip efektyviai atlikti \u0161i\u0105 u\u017eduot\u012f. \n    Kiekvienas patarimas turi b\u016bti ne ilgesnis nei 15 \u017eod\u017ei\u0173.`,n=await fetch(`https://text.pollinations.ai/${encodeURIComponent(t)}?model=openai&private=true`);if(!n.ok)throw new Error("API atsakymo klaida: "+n.status);let r=(await n.text()).split(/\d+\.\s+|\n+/).filter((e=>e.trim().length>0));return 0===r.length&&(r=["Suskirstyk u\u017eduot\u012f \u012f ma\u017eesnius \u017eingsnius ir atlik juos po vien\u0105."]),r}catch(t){return console.error("Klaida gaunant u\u017eduoties patarimus:",t),["Suskirstyk u\u017eduot\u012f \u012f ma\u017eesnius \u017eingsnius ir atlik juos po vien\u0105.","Nustatyk konkret\u0173 laik\u0105 u\u017eduo\u010diai atlikti ir laikykis jo.","Pa\u0161alink trukd\u017eius ir susitelk \u012f u\u017eduot\u012f."]}},$m=Yt(Ul.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: var(--spacing-md);
`,Um=Yt(Ul.div)`
  background-color: var(--card-background);
  max-width: 600px;
  width: 90%;
  border-radius: 0;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.3);
  border: 3px solid var(--primary-blue);
  border-left: 10px solid var(--primary-blue);
  overflow: auto;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`,Wm=Yt.div`
  background-color: var(--primary-blue);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    font-size: 2rem;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    gap: 15px;
    
    svg {
      color: var(--primary-yellow);
      font-size: 1.6rem;
      filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.3));
    }
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    
    h2 {
      font-size: 1.6rem;
    }
  }
`,Hm=Yt.button`
  background-color: var(--primary-red);
  border: 2px solid white;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #ff3b30;
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
  }
  
  svg {
    font-size: 1.1rem;
  }
`,Ym=Yt.div`
  padding: var(--spacing-lg);
  flex: 1;
  overflow-y: auto;
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`,Km=Yt.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-left: 5px solid var(--primary-yellow);
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::before {
    content: 'Dabartinis žingsnis';
    position: absolute;
    top: -10px;
    left: 15px;
    background-color: var(--primary-yellow);
    color: var(--text-color);
    padding: 2px 10px;
    font-size: 1rem;
    letter-spacing: 1px;
    font-family: 'Bebas Neue', sans-serif;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }
  
  p {
    margin: 0;
    font-family: 'Oswald', sans-serif;
    color: var(--text-color);
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.05);
    border-left: 3px solid var(--primary-blue);
  }
`,qm=Yt.div`
  margin-top: var(--spacing-lg);
`,Gm=Yt.h3`
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-blue);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  letter-spacing: 1.2px;
  margin-bottom: 15px;
  
  svg {
    color: var(--primary-yellow);
    font-size: 1.3rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.1));
  }
`,Xm=Yt.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: var(--spacing-md);
  border-left: 5px solid var(--primary-yellow);
  margin-bottom: var(--spacing-md);
  font-family: 'Oswald', sans-serif;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  
  p {
    margin: 0 0 var(--spacing-sm) 0;
    line-height: 1.6;
    font-size: 1.05rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`,Qm=Yt.div`
  margin-top: var(--spacing-md);
`,Jm=Yt.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: var(--spacing-sm);
  color: var(--primary-blue);
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  transition: all 0.3s ease;
  border-left: 3px solid var(--primary-yellow);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  font-size: 1.05rem;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transform: translateX(3px);
    border-left: 5px solid var(--primary-yellow);
  }
  
  svg {
    color: var(--primary-yellow);
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  
  .resource-title {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .resource-domain {
    color: #555;
    font-size: 0.9rem;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 2px 6px;
    border-radius: 3px;
  }
`,Zm=Yt.div`
  margin-top: var(--spacing-lg);
`,eh=Yt.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: var(--spacing-sm);
  font-family: 'Oswald', sans-serif;
  border-left: 3px solid var(--primary-yellow);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    transform: translateX(3px);
  }
  
  svg {
    color: var(--primary-yellow);
    margin-top: 3px;
    font-size: 1.1rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
  }
  
  p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.5;
  }
`,th=Yt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  
  svg {
    color: var(--primary-blue);
    font-size: 3rem;
    animation: spin 1s linear infinite;
    filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.1));
  }
  
  p {
    margin-top: var(--spacing-md);
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-blue);
    font-size: 1.4rem;
    letter-spacing: 1px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,nh=Yt.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: var(--spacing-md);
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 5px solid #ff3b30;
  margin-bottom: var(--spacing-md);
  font-family: 'Oswald', sans-serif;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  
  svg {
    color: #ff3b30;
    font-size: 1.3rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
  }
  
  p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.5;
  }
`,rh=Yt.button`
  background-color: var(--primary-blue);
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: var(--spacing-md);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: var(--primary-blue-dark);
    transform: translateY(-3px);
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
    box-shadow: none;
  }
  
  svg {
    font-size: 1.2rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.2));
  }
`,ah=Yt.textarea`
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--primary-blue);
  border-radius: 0;
  font-family: 'Oswald', sans-serif;
  margin-top: var(--spacing-sm);
  resize: vertical;
  min-height: 120px;
  font-size: 1.05rem;
  line-height: 1.5;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-yellow);
    box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.2);
  }
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`,ih=Yt.div`
  background-color: rgba(0, 100, 255, 0.1);
  padding: 10px 15px;
  border-left: 3px solid var(--primary-blue);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.95rem;
  color: #555;
  
  svg {
    color: var(--primary-blue);
  }
`,oh=(Yt.div`
  position: relative;
  margin-bottom: var(--spacing-md);
  
  textarea {
    width: 100%;
    padding: var(--spacing-md);
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    line-height: 1.4;
    border: 2px solid var(--primary-blue);
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    resize: vertical;
    min-height: 100px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-yellow);
    }
  }
  
  .edit-controls {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
`,Yt.button`
  background-color: var(--primary-blue);
  color: white;
  border: none;
  padding: 8px 16px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
  }
  
  &.save {
    background-color: var(--accent-green);
  }
  
  &.cancel {
    background-color: var(--primary-red);
  }
`,Yt.div`
  background-color: rgba(255, 59, 48, 0.1);
  padding: var(--spacing-sm);
  margin-top: 5px;
  font-size: 0.9rem;
  color: #ff3b30;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: #ff3b30;
  }
`),sh=e=>{try{return new URL(e),!0}catch(me){return!1}},lh=e=>{try{return new URL(e).hostname}catch(me){return e}},ch=t=>{var n;let{task:r,subtaskIndex:a,isOpen:i,onClose:o}=t;const[s,l]=(0,e.useState)(!0),[c,u]=(0,e.useState)(""),[d,p]=(0,e.useState)([]),[f,m]=(0,e.useState)([]),[h,g]=(0,e.useState)(""),[v,y]=(0,e.useState)(""),[x,b]=(0,e.useState)(!1),[k,w]=(0,e.useState)(!1),[S,C]=(0,e.useState)({});(0,e.useEffect)((()=>{i&&r&&r.subtasks&&r.subtasks[a]&&(E(),g(""),C({}))}),[i,r,a]);const E=async()=>{l(!0),g("");try{const e=await Bm(r,a);u(e.suggestion);const t=(e.resources||[]).filter((e=>"string"===typeof e)).map((e=>e.startsWith("http://")||e.startsWith("https://")?e:`https://${e}`)).filter((e=>sh(e)));p(t);const n=await Vm(r);m(Array.isArray(n)?n:[]),l(!1)}catch(h){console.error("Klaida gaunant AI pagalb\u0105:",h),g("Nepavyko gauti AI pagalbos. Bandykite v\u0117liau."),l(!1)}};if(!i)return null;const j=null===r||void 0===r||null===(n=r.subtasks)||void 0===n?void 0:n[a];j&&("string"===typeof j||j.text);return(0,Wl.jsx)(Ql,{mode:"wait",children:i&&(0,Wl.jsx)($m,{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},onClick:o,children:(0,Wl.jsxs)(Um,{variants:{hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:400,damping:30}},exit:{y:50,opacity:0}},onClick:e=>e.stopPropagation(),children:[(0,Wl.jsxs)(Wm,{children:[(0,Wl.jsxs)("h2",{children:[(0,Wl.jsx)(Dp,{icon:Mf}),"AI Pagalbininkas"]}),(0,Wl.jsxs)(Hm,{onClick:o,children:[(0,Wl.jsx)(Dp,{icon:Af}),"U\u017edaryti"]})]}),(0,Wl.jsxs)(Ym,{children:[r&&r.subtasks&&r.subtasks[a]?(0,Wl.jsx)(Km,{children:(0,Wl.jsx)("p",{children:"string"===typeof r.subtasks[a]?r.subtasks[a]:r.subtasks[a].text})}):(0,Wl.jsxs)(nh,{children:[(0,Wl.jsx)(Dp,{icon:Bf}),(0,Wl.jsx)("p",{children:"Nepavyko rasti \u017eingsnio informacijos."})]}),h&&(0,Wl.jsxs)(nh,{children:[(0,Wl.jsx)(Dp,{icon:Bf}),(0,Wl.jsx)("p",{children:h})]}),s?(0,Wl.jsxs)(th,{children:[(0,Wl.jsx)(Dp,{icon:Lf}),(0,Wl.jsx)("p",{children:"Generuojami pasi\u016blymai..."})]}):(0,Wl.jsxs)(Wl.Fragment,{children:[(0,Wl.jsxs)(qm,{children:[(0,Wl.jsxs)(Gm,{children:[(0,Wl.jsx)(Dp,{icon:Bp}),"AI pasi\u016blymai"]}),(0,Wl.jsx)(Xm,{children:c.split("\n").filter((e=>""!==e.trim())).map(((e,t)=>(0,Wl.jsx)("p",{children:e},t)))})]}),d.length>0&&(0,Wl.jsxs)(Qm,{children:[(0,Wl.jsxs)(Gm,{children:[(0,Wl.jsx)(Dp,{icon:kf}),"Naudingi \u0161altiniai"]}),d.map(((e,t)=>(0,Wl.jsxs)("div",{children:[(0,Wl.jsxs)(Jm,{href:e,target:"_blank",rel:"noopener noreferrer",onClick:n=>{n.preventDefault(),(async(e,t)=>{try{const n=await fetch(e);n.ok||C((e=>({...e,[t]:`\u0160is \u0161altinis nepasiekiamas (${n.status}). Bandykite v\u0117liau arba ie\u0161kokite alternatyvi\u0173 \u0161altini\u0173.`})))}catch(h){C((e=>({...e,[t]:"Nepavyko pasiekti \u0161altinio. Patikrinkite savo interneto ry\u0161\u012f arba bandykite v\u0117liau."})))}})(e,t),window.open(e,"_blank")},children:[(0,Wl.jsx)(Dp,{icon:df}),(0,Wl.jsx)("span",{className:"resource-title",children:e.length>40?e.substring(0,40)+"...":e}),(0,Wl.jsx)("span",{className:"resource-domain",children:lh(e)})]}),S[t]&&(0,Wl.jsxs)(oh,{children:[(0,Wl.jsx)(Dp,{icon:Bf}),S[t]]})]},t)))]}),f.length>0&&(0,Wl.jsxs)(Zm,{children:[(0,Wl.jsxs)(Gm,{children:[(0,Wl.jsx)(Dp,{icon:Bp}),"Patarimai"]}),f.map(((e,t)=>(0,Wl.jsxs)(eh,{children:[(0,Wl.jsx)(Dp,{icon:Bp}),(0,Wl.jsx)("p",{children:e})]},t)))]}),(0,Wl.jsxs)("div",{style:{marginTop:"var(--spacing-lg)",backgroundColor:"rgba(0, 0, 0, 0.03)",padding:"var(--spacing-md)",borderLeft:"5px solid var(--primary-blue)",boxShadow:"3px 3px 0 rgba(0, 0, 0, 0.1)"},children:[(0,Wl.jsxs)(Gm,{children:[(0,Wl.jsx)(Dp,{icon:af}),"Turite klausim\u0173?"]}),(0,Wl.jsx)(ah,{placeholder:"U\u017eduokite klausim\u0105 apie \u0161\u012f \u017eingsn\u012f...",value:v,onChange:e=>y(e.target.value),onFocus:()=>w(!0),onBlur:()=>w(!1)}),(0,Wl.jsx)(Ql,{children:k&&(0,Wl.jsx)(Ul.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:(0,Wl.jsxs)(ih,{children:[(0,Wl.jsx)(Dp,{icon:ff}),"U\u017eduokite konkret\u0173 klausim\u0105 apie \u0161\u012f \u017eingsn\u012f. Kuo ai\u0161kesnis klausimas, tuo tikslesnis atsakymas."]})})}),(0,Wl.jsx)(rh,{onClick:async()=>{if(v.trim()){b(!0),g("");try{const e="string"===typeof r.subtasks[a]?r.subtasks[a]:r.subtasks[a].text,t=`Task: "${r.text}". Current subtask: "${e}". Question: ${v}`;let n,i;try{if(n=await fetch("https://text.pollinations.ai/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:"You are a helpful AI assistant specializing in task management and productivity."},{role:"user",content:t}],model:"openai",temperature:.7,stream:!1})}),!n.ok)throw new Error(`API error: ${n.status}`);i=await n.json(),u(i.choices[0].message.content)}catch(h){if(console.warn("OpenAI endpoint failed, trying fallback API:",h),n=await fetch("https://text.pollinations.ai/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t,model:"mistral",private:!0})}),!n.ok)throw new Error(`API error: ${n.status}`);i=await n.text(),u(i)}const o="string"===typeof i?i:i.choices&&i.choices[0].message?i.choices[0].message.content:JSON.stringify(i),s=/(https?:\/\/[^\s]+)/g,l=(o.match(s)||[]).filter((e=>sh(e))).map((e=>e.replace(/[.,;:!?)]$/,""))).filter((e=>{try{return new URL(e),!0}catch{return!1}})).map((e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e));p(l),b(!1),y("")}catch(h){console.error("Error asking question:",h),g(`Nepavyko gauti atsakymo: ${h.message}. Bandykite v\u0117liau arba u\u017eduokite kit\u0105 klausim\u0105.`),b(!1)}}},disabled:x||!v.trim(),children:x?(0,Wl.jsxs)(Wl.Fragment,{children:[(0,Wl.jsx)(Dp,{icon:Lf,className:"fa-spin"}),"Siun\u010diama..."]}):(0,Wl.jsxs)(Wl.Fragment,{children:[(0,Wl.jsx)(Dp,{icon:Cf}),"Klausti AI"]})})]})]})]})]})})})},uh=Yt.div`
  display: flex;
  gap: 12px;
  margin-top: var(--spacing-md);
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,dh=Yt.button`
  background-color: ${e=>e.$primary?"var(--primary-red)":e.$warning?"#ff3b30":e.$edit?"var(--primary-yellow)":"var(--primary-blue)"};
  color: ${e=>e.$edit?"var(--text-color)":"white"};
  border: none;
  padding: 10px 18px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1.2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  transition: all 0.2s ease;
  text-shadow: ${e=>e.$edit?"none":"1px 1px 0px rgba(0, 0, 0, 0.2)"};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.25);
    background-color: ${e=>e.$edit?"var(--primary-yellow)":e.$warning?"#ff2b20":e.$primary?"var(--primary-red)":"var(--primary-blue)"};
    filter: brightness(1.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  
  svg {
    font-size: 1.2rem;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 8px 12px;
  }
`,ph=Yt(dh)`
  padding: 8px 12px;
  font-size: 0.95rem;
  font-weight: bold;
  
  &.ai-help {
    background-color: #4A90E2;
    color: white;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
    
    &:hover {
      background-color: #3A80D2;
      box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 6px 10px;
  }
`,fh=Yt.h4`
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-yellow);
  margin-bottom: 15px;
  margin-top: 20px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--primary-red);
  }
`,mh=Yt.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--primary-yellow);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    transform: translateX(2px);
  }
`,hh=Yt.div`
  cursor: pointer;
  color: ${e=>e.$completed?"var(--completed-color)":"var(--primary-yellow)"};
  font-size: 1.2rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.15);
  }
`,gh=Yt.div`
  flex: 1;
  font-family: 'Oswald', sans-serif;
  font-size: 1.05rem;
  line-height: 1.3;
  text-decoration: ${e=>e.$completed?"line-through":"none"};
  color: ${e=>e.$completed?"var(--subtask-text-color)":"var(--text-color)"};
  transition: all 0.3s ease;
`,vh=Yt.div`
  background-color: var(--primary-yellow);
  color: var(--text-color);
  padding: 4px 10px;
  font-size: 0.9rem;
  font-family: 'Bebas Neue', sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.5px;
  border-radius: 0;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 0.85rem;
  }
`,yh=Yt(Ul.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 59, 48, 0.95);
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  p {
    margin: 0;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    svg {
      font-size: 1.3rem;
    }
  }
  
  .confirm-buttons {
    display: flex;
    gap: 8px;
  }
  
  button {
    border: none;
    padding: 5px 12px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    
    &.confirm {
      background-color: white;
      color: #ff3b30;
    }
    
    &.cancel {
      background-color: transparent;
      color: white;
      border: 1px solid white;
    }
  }
`,xh=Yt.div`
  width: 100%;
  position: relative;
  
  textarea {
    width: 100%;
    padding: 10px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.05rem;
    line-height: 1.3;
    border: 2px solid var(--primary-yellow);
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    resize: vertical;
    min-height: 60px;
    margin-bottom: 10px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-blue);
    }
  }
  
  .edit-controls {
    display: flex;
    gap: 10px;
  }
`,bh=Yt.div`
  margin-top: var(--spacing-md);
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 5px solid var(--primary-yellow);
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
`,kh=Yt.h4`
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-blue);
  margin-bottom: 15px;
  font-size: 1.3rem;
  letter-spacing: 1.2px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: var(--primary-yellow);
  }
`,wh=Yt.div`
  margin-bottom: 15px;
  
  .subtask-number {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-blue);
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.05rem;
    line-height: 1.3;
    border: 2px solid var(--primary-yellow);
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    resize: vertical;
    min-height: 60px;
    margin-bottom: 5px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-blue);
    }
  }
`,Sh=Yt.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`,Ch=t=>{let{task:n,onTaskComplete:r,onTaskEdit:a,onTaskDelete:i,onToggleSubtask:o}=t;const[s,l]=(0,e.useState)(!1),[c,u]=(0,e.useState)(0),[d,p]=(0,e.useState)(!1),[f,m]=(0,e.useState)(null),[h,g]=(0,e.useState)(""),[v,y]=(0,e.useState)(!1),[x,b]=(0,e.useState)([]),k=()=>{if(null!==f&&h.trim()){const e={...n};"string"===typeof e.subtasks[f]?e.subtasks[f]=h:e.subtasks[f]={...e.subtasks[f],text:h},a&&a(e),m(null),g("")}},w=()=>{m(null),g("")};return(0,Wl.jsxs)(Wl.Fragment,{children:[(0,Wl.jsxs)("div",{style:{position:"relative"},children:[(0,Wl.jsx)(Ql,{children:d&&(0,Wl.jsxs)(yh,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},children:[(0,Wl.jsxs)("p",{children:[(0,Wl.jsx)(Dp,{icon:Bf}),"Ar tikrai norite i\u0161trinti \u0161i\u0105 u\u017eduot\u012f?"]}),(0,Wl.jsxs)("div",{className:"confirm-buttons",children:[(0,Wl.jsx)("button",{className:"confirm",onClick:()=>{i&&i(n.id),p(!1)},children:"Taip, i\u0161trinti"}),(0,Wl.jsx)("button",{className:"cancel",onClick:()=>p(!1),children:"At\u0161aukti"})]})]})}),(0,Wl.jsxs)(uh,{children:[(0,Wl.jsxs)(dh,{$edit:!0,onClick:()=>{if(n.subtasks&&n.subtasks.length>0){const e=n.subtasks.map((e=>"string"===typeof e?e:e.text));b(e),y(!0)}else a&&a(n)},children:[(0,Wl.jsx)(Dp,{icon:$p}),"Redaguoti"]}),(0,Wl.jsxs)(dh,{$warning:!0,onClick:()=>{p(!0)},children:[(0,Wl.jsx)(Dp,{icon:cf}),"I\u0161trinti"]})]})]}),v?(0,Wl.jsxs)(bh,{children:[(0,Wl.jsxs)(kh,{children:[(0,Wl.jsx)(Dp,{icon:$p}),"Redaguoti visus \u017eingsnius"]}),x.map(((e,t)=>(0,Wl.jsxs)(wh,{children:[(0,Wl.jsxs)("div",{className:"subtask-number",children:["\u017dingsnis ",t+1]}),(0,Wl.jsx)("textarea",{value:e,onChange:e=>((e,t)=>{const n=[...x];n[e]=t,b(n)})(t,e.target.value),placeholder:"\u012eveskite \u017eingsnio tekst\u0105..."})]},t))),(0,Wl.jsxs)(Sh,{children:[(0,Wl.jsxs)(dh,{onClick:()=>{const e={...n};e.subtasks=n.subtasks.map(((e,t)=>"string"===typeof e?x[t]:{...e,text:x[t]})),a&&a(e),y(!1),b([])},style:{backgroundColor:"var(--completed-color)"},children:[(0,Wl.jsx)(Dp,{icon:lf}),"I\u0161saugoti visus"]}),(0,Wl.jsxs)(dh,{onClick:()=>{y(!1),b([])},style:{backgroundColor:"var(--primary-red)"},children:[(0,Wl.jsx)(Dp,{icon:Af}),"At\u0161aukti"]})]})]}):n.subtasks&&n.subtasks.length>0&&(0,Wl.jsxs)("div",{style:{marginTop:"var(--spacing-md)"},children:[(0,Wl.jsxs)(fh,{children:[(0,Wl.jsx)(Dp,{icon:zf||gf}),"U\u017eduoties \u017eingsniai:"]}),n.subtasks.map(((e,t)=>(0,Wl.jsx)(mh,{children:f===t?(0,Wl.jsxs)(xh,{children:[(0,Wl.jsx)("textarea",{value:h,onChange:e=>g(e.target.value),placeholder:"\u012eveskite \u017eingsnio tekst\u0105..."}),(0,Wl.jsxs)("div",{className:"edit-controls",children:[(0,Wl.jsxs)(ph,{onClick:k,style:{backgroundColor:"var(--completed-color)"},children:[(0,Wl.jsx)(Dp,{icon:lf}),"I\u0161saugoti"]}),(0,Wl.jsxs)(ph,{onClick:w,style:{backgroundColor:"var(--primary-red)"},children:[(0,Wl.jsx)(Dp,{icon:Af}),"At\u0161aukti"]})]})]}):(0,Wl.jsxs)(Wl.Fragment,{children:[(0,Wl.jsx)(hh,{$completed:n.subtasksCompleted&&n.subtasksCompleted[t],onClick:()=>o(n.id,t),children:(0,Wl.jsx)(Dp,{icon:n.subtasksCompleted&&n.subtasksCompleted[t]?Xp:nf})}),(0,Wl.jsx)(gh,{$completed:n.subtasksCompleted&&n.subtasksCompleted[t],children:"string"===typeof e?e:e.text}),(0,Wl.jsxs)(vh,{children:[(0,Wl.jsx)(Dp,{icon:vf}),"string"===typeof e?"10":e.timeEstimate," min"]}),(0,Wl.jsxs)(ph,{className:"ai-help",onClick:()=>function(){u(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0),l(!0)}(t),children:[(0,Wl.jsx)(Dp,{icon:Mf}),"AI pagalba"]})]})},t)))]}),(0,Wl.jsx)(ch,{task:n,subtaskIndex:c,isOpen:s,onClose:()=>l(!1)})]})},Eh=Yt.div`
  margin-top: var(--spacing-lg);
`,jh=Yt.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px dashed var(--primary-yellow);
  
  .icon {
    font-size: 3rem;
    color: var(--primary-yellow);
    opacity: 0.5;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: var(--primary-yellow);
    margin-bottom: 1rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
  }
  
  p {
    color: var(--subtask-text-color);
    font-family: 'Oswald', sans-serif;
  }
`,Ph=Yt.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.2rem;
  color: var(--primary-yellow);
  margin-bottom: var(--spacing-md);
  text-align: center;
  text-shadow: 2px 2px 0px var(--primary-red);
  letter-spacing: 1px;
  border-bottom: 2px solid var(--primary-red);
  padding-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  .task-count {
    background-color: var(--primary-red);
    color: var(--primary-yellow);
    padding: 0.25rem 0.75rem;
    font-size: 1.2rem;
    border-radius: 0;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    
    .task-count {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    
    .task-count {
      font-size: 0.9rem;
    }
  }
`,zh=Yt(Ul.div)`
  background-color: var(--card-background);
  margin-bottom: var(--spacing-md);
  border-radius: 0;
  padding: var(--spacing-md);
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  border: 2px solid var(--primary-yellow);
  border-left: 6px solid var(--primary-red);
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 20px 0;
    border-color: transparent var(--primary-yellow) transparent transparent;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.25);
  }
  
  &.completed {
    border-color: var(--completed-color);
    border-left-color: var(--completed-color);
    
    &::after {
      border-color: transparent var(--completed-color) transparent transparent;
    }
  }
  
  &.new-task {
    animation: highlight 2s ease-in-out;
    
    @keyframes highlight {
      0%, 100% {
        background-color: var(--card-background);
      }
      50% {
        background-color: var(--newTaskHighlight);
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
    
    &::after {
      border-width: 0 15px 15px 0;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 12px;
    border-width: 1px;
    border-left-width: 4px;
    
    &::after {
      border-width: 0 12px 12px 0;
    }
  }
`,Th=Yt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`,Nh=Yt.div`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Bebas Neue', sans-serif;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 12px;
  
  .completed-icon {
    color: var(--completed-color);
  }
  
  .incomplete-icon {
    color: var(--primary-yellow);
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,Ah=Yt.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,Oh=Yt.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-yellow);
  font-size: 0.9rem;
`,Lh=Yt.div`
  color: var(--primary-yellow);
  cursor: pointer;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
`,Mh=(Yt.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
  }
`,Yt.div`
  display: flex;
  gap: 10px;
  margin-top: var(--spacing-sm);
`,Yt.button`
  background-color: ${e=>e.$primary?"var(--primary-red)":"var(--primary-blue)"};
  color: white;
  border: none;
  padding: 8px 15px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  
  svg {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
`,Yt.button`
  background: transparent;
  border: none;
  color: var(--primary-yellow);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Bebas Neue', sans-serif;
  padding: 5px 0;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--primary-red);
  }
  
  svg {
    transition: transform 0.3s ease;
    transform: ${e=>e.$expanded?"rotate(180deg)":"rotate(0)"};
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Yt(Ul.div)`
  background-color: rgba(0, 0, 0, 0.05);
  margin-top: var(--spacing-sm);
  padding: var(--spacing-sm);
  border-left: 3px solid var(--primary-yellow);
  overflow: hidden;
`),Ih=(Yt.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,Yt.li`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  .subtask-checkbox {
    margin-right: 10px;
    font-size: 1.1rem;
    color: ${e=>e.$completed?"var(--completed-color)":"var(--primary-yellow)"};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    margin-top: 2px;
    
    &:hover {
      transform: scale(1.2);
    }
  }
  
  .subtask-text {
    flex: 1;
    font-size: 0.95rem;
    color: ${e=>e.$completed?"var(--subtask-text-color)":"var(--text-color)"};
    text-decoration: ${e=>e.$completed?"line-through":"none"};
    opacity: ${e=>e.$completed?.7:1};
    transition: all 0.3s ease;
  }
  
  .subtask-time {
    font-size: 0.85rem;
    color: var(--primary-yellow);
    padding: 2px 6px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0;
    margin-left: 10px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 5px;
    
    svg {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 6px 0;
    
    .subtask-checkbox {
      font-size: 1rem;
    }
    
    .subtask-text {
      font-size: 0.85rem;
    }
    
    .subtask-time {
      font-size: 0.75rem;
    }
  }
`,Yt.div`
  margin-top: var(--spacing-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-sm);
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  
  .time-info {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-yellow);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }
  
  .progress-info {
    font-size: 0.9rem;
    color: var(--subtask-text-color);
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    
    .time-info {
      font-size: 0.9rem;
    }
    
    .progress-info {
      font-size: 0.8rem;
    }
  }
`,Yt(Ul.div)`
  background-color: var(--primary-yellow);
  color: var(--text-color);
  padding: var(--spacing-md);
  border-radius: 0;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-left: 6px solid var(--primary-red);
  max-width: 100%;
  
  .xp-icon {
    font-size: 1.8rem;
    color: var(--primary-red);
    margin-right: var(--spacing-md);
    animation: pulse 1.5s infinite;
  }
  
  .xp-content {
    flex: 1;
  }
  
  .xp-value {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--primary-red);
    margin-bottom: 5px;
  }
  
  .xp-task {
    font-size: 0.9rem;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-sm);
    
    .xp-icon {
      font-size: 1.5rem;
      margin-right: var(--spacing-sm);
    }
    
    .xp-value {
      font-size: 1.2rem;
    }
    
    .xp-task {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    .xp-icon {
      font-size: 1.3rem;
    }
    
    .xp-value {
      font-size: 1.1rem;
    }
  }
`),Rh=(Yt.span`
  background-color: var(--completed-color);
  color: white;
  font-size: 0.8rem;
  padding: 3px 8px;
  border-radius: 0;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  
  svg {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 2px 6px;
    
    svg {
      font-size: 0.6rem;
    }
  }
`,Yt(Ul.div)`
  background-color: var(--grey-light);
  color: var(--text-color);
  padding: var(--spacing-md);
  border-radius: 0;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-left: 6px solid var(--grey-dark);
  max-width: 100%;
  
  .info-icon {
    font-size: 1.8rem;
    color: var(--grey-dark);
    margin-right: var(--spacing-md);
  }
  
  .info-content {
    flex: 1;
  }
  
  .info-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--grey-dark);
    margin-bottom: 5px;
  }
  
  .info-message {
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-sm);
    
    .info-icon {
      font-size: 1.5rem;
      margin-right: var(--spacing-sm);
    }
    
    .info-title {
      font-size: 1.1rem;
    }
    
    .info-message {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    .info-icon {
      font-size: 1.3rem;
    }
    
    .info-title {
      font-size: 1rem;
    }
  }
`),Dh=(Yt.span`
  background-color: var(--grey-light);
  color: var(--grey-dark);
  font-size: 0.8rem;
  padding: 3px 8px;
  border-radius: 0;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  
  svg {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 2px 6px;
    
    svg {
      font-size: 0.6rem;
    }
  }
`,Yt.span`
  background-color: var(--grey-light);
  color: var(--grey-dark);
  font-size: 0.7rem;
  padding: 2px 5px;
  margin-left: 8px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 1px 4px;
  }
`,t=>{let{tasks:n,onTaskComplete:r,onTaskDelete:a,onTaskEdit:i,onToggleSubtask:o}=t;const[s,l]=(0,e.useState)({}),[c,u]=(0,e.useState)(null),[d,p]=(0,e.useState)(!1),[f,m]=(0,e.useState)([]),[h,g]=(0,e.useState)(null),[v,y]=(0,e.useState)(null),[x,b]=(0,e.useState)(null),[k,w]=(0,e.useState)(!1),[S,C]=(0,e.useState)(!1),[E,j]=(0,e.useState)(null),[P,z]=(0,e.useState)(0);(0,e.useEffect)((()=>{if(v){const e=setTimeout((()=>{y(null)}),5e3);return()=>clearTimeout(e)}}),[v]),(0,e.useEffect)((()=>{if(x){const e=setTimeout((()=>{b(null)}),3e3);return()=>clearTimeout(e)}}),[x]);const T=[...n].sort(((e,t)=>e.completed&&!t.completed?1:!e.completed&&t.completed?-1:new Date(t.createdAt)-new Date(e.createdAt))),N=e=>(0,Wl.jsxs)(zh,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},layout:!0,children:[(0,Wl.jsxs)(Th,{onClick:()=>{return t=e.id,void l((e=>({...e,[t]:!e[t]})));var t},children:[(0,Wl.jsxs)(Nh,{children:[e.completed?(0,Wl.jsx)(Dp,{icon:Xp,className:"completed-icon"}):(0,Wl.jsx)(Dp,{icon:nf,className:"incomplete-icon"}),e.text]}),(0,Wl.jsxs)(Ah,{children:[e.estimatedTime&&(0,Wl.jsxs)(Oh,{children:[(0,Wl.jsx)(Dp,{icon:vf}),e.estimatedTime," min"]}),(0,Wl.jsx)(Lh,{children:(0,Wl.jsx)(Dp,{icon:s[e.id]?Up:Ef})})]})]}),(0,Wl.jsx)(Ql,{mode:"wait",children:s[e.id]&&(0,Wl.jsx)(Mh,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:(0,Wl.jsx)(Ch,{task:e,onTaskComplete:r,onTaskEdit:i,onTaskDelete:a,onToggleSubtask:o})})})]},e.id);return 0===n.length?(0,Wl.jsxs)(jh,{children:[(0,Wl.jsx)(Dp,{icon:gf,className:"icon"}),(0,Wl.jsx)("h3",{children:"Dar neturite u\u017eduo\u010di\u0173"}),(0,Wl.jsx)("p",{children:"Prid\u0117kite nauj\u0105 u\u017eduot\u012f, kad gal\u0117tum\u0117te prad\u0117ti sekti savo produktyvum\u0105"})]}):(0,Wl.jsxs)(Eh,{as:Ul.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.1}}},initial:"hidden",animate:"visible",children:[(0,Wl.jsxs)(Ph,{children:[(0,Wl.jsx)(Dp,{icon:gf}),"U\u017eduo\u010di\u0173 s\u0105ra\u0161as",(0,Wl.jsx)("span",{className:"task-count",children:n.length})]}),(0,Wl.jsx)(Ql,{mode:"wait",children:x&&(0,Wl.jsxs)(Rh,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},exit:{opacity:0,y:-50},transition:{type:"spring",stiffness:300,damping:15},children:[(0,Wl.jsx)("div",{className:"info-icon",children:(0,Wl.jsx)(Dp,{icon:ff})}),(0,Wl.jsxs)("div",{className:"info-content",children:[(0,Wl.jsxs)("div",{className:"info-title",children:[x.isSubtask?"\u017dingsnis jau buvo u\u017ebaigtas:":"U\u017eduotis jau buvo u\u017ebaigta:"," ",x.taskName]}),(0,Wl.jsx)("div",{className:"info-message",children:x.message})]})]})}),(0,Wl.jsx)(Ql,{mode:"wait",children:v&&(0,Wl.jsxs)(Ih,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},exit:{opacity:0,y:-50},transition:{type:"spring",stiffness:300,damping:15},children:[(0,Wl.jsx)("div",{className:"xp-icon",children:(0,Wl.jsx)(Dp,{icon:Yp})}),(0,Wl.jsxs)("div",{className:"xp-content",children:[(0,Wl.jsxs)("div",{className:"xp-value",children:["+",v.xp," XP"]}),(0,Wl.jsxs)("div",{className:"xp-task",children:[v.isSubtask?"\u017dingsnis u\u017ebaigtas:":"U\u017eduotis u\u017ebaigta:"," ",v.taskName]})]})]})}),(0,Wl.jsx)(Ql,{mode:"wait",children:T.map((e=>N(e)))}),d&&(0,Wl.jsx)(Fm,{rewards:f,onClose:()=>{p(!1),m([])}}),(0,Wl.jsx)(Nm,{task:E,isOpen:k,onClose:()=>w(!1),onTaskComplete:e=>{o&&o(e.id)},toggleSubtask:(e,t)=>{console.log(`Toggled subtask ${t} for task ${e}`)}}),(0,Wl.jsx)(ch,{task:E,subtaskIndex:P,isOpen:S,onClose:()=>C(!1)})]})}),_h=Yt.div`
  background-color: var(--card-background);
  border-radius: 0;
  margin: var(--spacing-md) 0;
  padding: var(--spacing-lg);
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow: visible;
  border: 2px solid var(--primary-yellow);
  border-left: 6px solid var(--primary-red);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 25px 25px 0;
    border-color: transparent var(--primary-yellow) transparent transparent;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    margin: var(--spacing-md) 0;
    padding: var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    margin: var(--spacing-sm) 0;
    padding: var(--spacing-sm);
    border-width: 1px;
    border-left-width: 4px;
    
    &::after {
      border-width: 0 20px 20px 0;
    }
  }
`,Fh=Yt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
`,Bh=Yt.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  flex: 1;
  
  @media (max-width: 480px) {
    width: 100%;
    gap: 10px;
  }
`,Vh=Yt.div`
  background: var(--primary-red);
  color: var(--primary-yellow);
  font-weight: bold;
  width: 60px;
  height: 60px;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-family: 'Bebas Neue', sans-serif;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  border: 2px solid var(--primary-yellow);
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 22px;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
    border-width: 1px;
  }
`,$h=Yt.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Uh=Yt.h3`
  margin: 0;
  font-size: 1.3rem;
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-yellow);
  letter-spacing: 1px;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,Wh=Yt.div`
  width: 100%;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
  margin-top: 8px;
  overflow: hidden;
  border: 1px solid var(--primary-yellow);
  
  @media (max-width: 480px) {
    height: 8px;
    margin-top: 6px;
  }
`,Hh=Yt.div`
  height: 100%;
  width: ${e=>e.$progress}%;
  background: var(--primary-yellow);
  border-radius: 0;
  transition: width 0.5s ease;
`,Yh=Yt.div`
  font-size: 12px;
  margin-top: 3px;
  color: var(--light-text-color);
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,Kh=Yt.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-yellow);
  gap: 8px;
  font-weight: 500;
  user-select: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1px;
  background: var(--primary-red);
  padding: 8px 15px;
  border: 2px solid var(--primary-yellow);
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  min-width: 140px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 6px 12px;
    min-width: 120px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    font-size: 0.9rem;
    padding: 5px 10px;
    border-width: 1px;
  }
`,qh=Yt(Ul.div)`
  margin-top: var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-top: var(--spacing-md);
  }
`,Gh=Yt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
  border-left: 4px solid var(--primary-yellow);
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    font-size: 24px;
    margin-bottom: 10px;
    color: var(--primary-yellow);
  }
  
  .stat-label {
    font-size: 14px;
    color: var(--light-text-color);
    text-align: center;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    
    svg {
      font-size: 20px;
      margin-bottom: 8px;
    }
    
    .stat-label {
      font-size: 12px;
    }
    
    .stat-value {
      font-size: 20px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    
    svg {
      font-size: 18px;
      margin-bottom: 0;
      margin-right: 10px;
    }
    
    .stat-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
    }
    
    .stat-label {
      margin-bottom: 2px;
    }
    
    .stat-value {
      font-size: 18px;
    }
  }
`,Xh=Yt.div`
  margin-top: var(--spacing-xl);
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    margin-top: var(--spacing-md);
  }
`,Qh=Yt.h4`
  margin: 0 0 var(--spacing-lg) 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4rem;
  color: var(--primary-yellow);
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-red);
  
  svg {
    color: var(--primary-yellow);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 8px;
    margin-bottom: var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    gap: 6px;
    padding-bottom: 6px;
  }
`,Jh=Yt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,Zh=Yt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
  transition: all 0.2s ease;
  border-left: 4px solid var(--primary-yellow);
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
  }
  
  .reward-icon {
    font-size: 28px;
    margin-bottom: 12px;
    color: var(--primary-yellow);
  }
  
  .reward-name {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
    margin-bottom: 8px;
    color: var(--primary-yellow);
    letter-spacing: 1px;
  }
  
  .reward-desc {
    font-size: 13px;
    text-align: center;
    color: var(--light-text-color);
    font-family: 'Oswald', sans-serif;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    
    .reward-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }
    
    .reward-name {
      font-size: 14px;
      margin-bottom: 5px;
    }
    
    .reward-desc {
      font-size: 12px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    flex-direction: row;
    align-items: center;
    text-align: left;
    
    .reward-icon {
      font-size: 22px;
      margin-bottom: 0;
      margin-right: 12px;
    }
    
    .reward-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
    }
    
    .reward-name {
      margin-bottom: 3px;
    }
    
    .reward-desc {
      text-align: left;
    }
  }
`,eg=()=>{const[t,n]=(0,e.useState)(!1),[r,a]=(0,e.useState)(cm()),[i,o]=(0,e.useState)(fm());(0,e.useEffect)((()=>{t&&(a(cm()),o(fm()))}),[t]),(0,e.useEffect)((()=>{if(!t)return;const e=setInterval((()=>{a(cm()),o(fm())}),3e4);return()=>clearInterval(e)}),[t]);const s=(()=>{const e=cm(),t=um(e.level-1)||0,n=um(e.level),r=e.experience-t,a=n-t;return Math.min(100,Math.floor(r/a*100))})(),l=um();return(0,Wl.jsxs)(_h,{children:[(0,Wl.jsxs)(Fh,{children:[(0,Wl.jsxs)(Bh,{children:[(0,Wl.jsx)(Vh,{children:r.level}),(0,Wl.jsxs)($h,{children:[(0,Wl.jsxs)(Uh,{children:["Produktyvumo lygis: ",r.level]}),(0,Wl.jsx)(Wh,{children:(0,Wl.jsx)(Hh,{$progress:s})}),(0,Wl.jsxs)(Yh,{children:[r.experience," XP \u2022 Iki kito lygio: ",l," XP"]})]})]}),(0,Wl.jsxs)(Kh,{onClick:()=>{n(!t)},children:[t?"Sutraukti":"I\u0161pl\u0117sti",(0,Wl.jsx)(Dp,{icon:t?Up:Ef,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}})]})]}),(0,Wl.jsx)(Ql,{mode:"wait",children:t&&(0,Wl.jsxs)(Ul.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},style:{overflow:"hidden"},children:[(0,Wl.jsxs)(qh,{children:[(0,Wl.jsxs)(Gh,{children:[(0,Wl.jsx)(Dp,{icon:Pf}),(0,Wl.jsxs)("div",{className:"stat-info",children:[(0,Wl.jsx)("span",{className:"stat-label",children:"U\u017ebaigtos u\u017eduotys"}),(0,Wl.jsx)("span",{className:"stat-value",children:r.tasksCompleted})]})]}),(0,Wl.jsxs)(Gh,{children:[(0,Wl.jsx)(Dp,{icon:Kp}),(0,Wl.jsxs)("div",{className:"stat-info",children:[(0,Wl.jsx)("span",{className:"stat-label",children:"Dien\u0173 serija"}),(0,Wl.jsx)("span",{className:"stat-value",children:r.streak})]})]}),(0,Wl.jsxs)(Gh,{children:[(0,Wl.jsx)(Dp,{icon:vf}),(0,Wl.jsxs)("div",{className:"stat-info",children:[(0,Wl.jsx)("span",{className:"stat-label",children:"Praleista laiko"}),(0,Wl.jsxs)("span",{className:"stat-value",children:[Math.floor(r.timeSpentMinutes/60),"h ",r.timeSpentMinutes%60,"m"]})]})]}),(0,Wl.jsxs)(Gh,{children:[(0,Wl.jsx)(Dp,{icon:mf}),(0,Wl.jsxs)("div",{className:"stat-info",children:[(0,Wl.jsx)("span",{className:"stat-label",children:"\u017dingsniai atlikti"}),(0,Wl.jsx)("span",{className:"stat-value",children:r.subtasksCompleted})]})]})]}),i.length>0&&(0,Wl.jsxs)(Xh,{children:[(0,Wl.jsxs)(Qh,{children:[(0,Wl.jsx)(Dp,{icon:Of}),"Apdovanojimai (",i.length,")"]}),(0,Wl.jsx)(Jh,{children:i.map((e=>(0,Wl.jsxs)(Zh,{children:[(0,Wl.jsx)("span",{className:"reward-icon",children:e.icon}),(0,Wl.jsxs)("div",{className:"reward-info",children:[(0,Wl.jsx)("div",{className:"reward-name",children:e.name}),(0,Wl.jsx)("div",{className:"reward-desc",children:e.description})]})]},e.id)))})]})]})})]})},tg={primaryColor:"#B22222",secondaryColor:"#D9A404",textColor:"#111",backgroundColor:"#F5F5DC",cardBackground:"#FFFEFA",borderColor:"#D9A404",inputBackground:"#FAFAFA",completedColor:"#4CAF50",buttonText:"#F5F5DC",subtaskTextColor:"#666",lightTextColor:"#666",successColor:"#4CAF50",errorColor:"#B22222",loadingColor:"#D9A404",highlightColor:"#FFE066",notificationColor:"#B22222",newTaskHighlight:"rgba(217, 164, 4, 0.15)",progressColor:{low:"#B22222",medium:"#D9A404",high:"#4CAF50"},overlayBackground:"rgba(0, 0, 0, 0.7)",modalBackground:"#FFFEFA",levelColors:{bronze:"#cd7f32",silver:"#c0c0c0",gold:"#d4af37",platinum:"#e5e4e2",diamond:"#b9f2ff"}},ng={primaryColor:"#B22222",secondaryColor:"#F7D02C",textColor:"#F5F5F5",backgroundColor:"#121212",cardBackground:"#1E1E1E",borderColor:"#F7D02C",inputBackground:"#2D2D2D",completedColor:"#4CAF50",buttonText:"#F5F5F5",subtaskTextColor:"#B0B0B0",lightTextColor:"#A0A0A0",successColor:"#4CAF50",errorColor:"#B22222",loadingColor:"#F7D02C",highlightColor:"#FFE066",notificationColor:"#B22222",newTaskHighlight:"rgba(247, 208, 44, 0.15)",progressColor:{low:"#B22222",medium:"#F7D02C",high:"#4CAF50"},overlayBackground:"rgba(0, 0, 0, 0.85)",modalBackground:"#1E1E1E",levelColors:{bronze:"#cd7f32",silver:"#c0c0c0",gold:"#d4af37",platinum:"#e5e4e2",diamond:"#b9f2ff"}},rg="aichat_history",ag=Yt(Ul.div)`
  background-color: var(--card-background);
  border-radius: 0;
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  border-left: 6px solid var(--primary-red);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-yellow), var(--primary-red), var(--primary-yellow));
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`,ig=Yt.div`
  margin-bottom: var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .title-section {
    h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.8rem;
      color: var(--primary-yellow);
      text-shadow: 2px 2px 0 var(--primary-red);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    p {
      color: var(--subtask-text-color);
      font-family: 'Oswald', sans-serif;
      margin-top: var(--spacing-xs);
    }
  }
  
  .action-buttons {
    display: flex;
    gap: 10px;
  }
`,og=Yt.button.withConfig({shouldForwardProp:e=>"$danger"!==e})`
  background-color: ${e=>e.$danger?"var(--primary-red)":"rgba(0, 0, 0, 0.1)"};
  color: ${e=>e.$danger?"var(--primary-yellow)":"var(--subtask-text-color)"};
  border: 1px solid ${e=>e.$danger?"var(--primary-red)":"var(--border-color)"};
  padding: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$danger?"var(--primary-red)":"var(--primary-yellow)"};
    color: var(--text-color);
    transform: translateY(-2px);
  }
`,sg=Yt.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-yellow);
  }
`,lg=Yt(Ul.div).withConfig({shouldForwardProp:e=>"$isUser"!==e})`
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-radius: 0;
  display: flex;
  gap: var(--spacing-md);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .message-icon {
    width: 36px;
    height: 36px;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background-color: ${e=>e.$isUser?"var(--primary-red)":"var(--primary-yellow)"};
    color: ${e=>e.$isUser?"var(--primary-yellow)":"var(--text-color)"};
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  .message-content {
    flex: 1;
    
    .message-text {
      background-color: ${e=>e.$isUser?"rgba(178, 34, 34, 0.05)":"rgba(247, 208, 44, 0.05)"};
      padding: var(--spacing-md);
      border-left: 3px solid ${e=>e.$isUser?"var(--primary-red)":"var(--primary-yellow)"};
      white-space: pre-line;
    }
    
    .message-meta {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 4px;
      font-size: var(--font-size-xs);
      color: var(--light-text-color);
      
      .message-time {
        text-align: right;
      }
    }
  }
`,cg=Yt.div`
  display: flex;
  gap: var(--spacing-sm);
  
  input {
    flex: 1;
    padding: 12px var(--spacing-md);
    border: 2px solid var(--border-color);
    background-color: var(--input-background);
    color: var(--text-color);
    font-family: 'Oswald', sans-serif;
    
    &:focus {
      outline: none;
      border-color: var(--primary-yellow);
    }
  }
  
  button {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    border: none;
    padding: 0 var(--spacing-md);
    font-family: 'Bebas Neue', sans-serif;
    font-size: var(--font-size-md);
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
    
    &:hover {
      background-color: var(--primary-red);
      color: var(--primary-yellow);
      transform: translateY(-2px);
      box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }
`,ug=Yt.div`
  margin-top: var(--spacing-md);
  
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: var(--font-size-md);
    color: var(--primary-yellow);
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .queries {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }
  
  button {
    background-color: rgba(247, 208, 44, 0.1);
    border: 1px solid var(--primary-yellow);
    color: var(--text-color);
    padding: 8px var(--spacing-md);
    font-family: 'Oswald', sans-serif;
    font-size: var(--font-size-sm);
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--primary-yellow);
      color: var(--text-color);
    }
  }
`,dg=Yt.div`
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--subtask-text-color);
  
  svg {
    font-size: 3rem;
    color: var(--primary-yellow);
    margin-bottom: var(--spacing-md);
    opacity: 0.6;
  }
  
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem;
    color: var(--primary-yellow);
    margin-bottom: var(--spacing-md);
  }
  
  p {
    margin-bottom: var(--spacing-md);
  }
`,pg={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}},exit:{opacity:0,y:-20,transition:{duration:.3}}},fg={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.3}},exit:{opacity:0,transition:{duration:.2}}},mg=["Gerai, klausyk. \u0160tai k\u0105 tau pasakysiu...","Tiesiai \u0161viesiai, be jokio \u0161\u016bdo...","Matai, problema yra tokia...","Leisk man i\u0161siai\u0161kinti \u0161it\u0105 reikal\u0105...","Klausyk atid\u017eiai, nes tai svarbu...","Yra du b\u016bdai \u012f tai pa\u017ei\u016br\u0117ti...","\u0160tai kaip a\u0161 tai matau...","Tai ne \u0161iaip atsakymas, tai planas...","Turi suprasti vien\u0105 dalyk\u0105..."],hg=()=>{const[t,n]=(0,e.useState)((()=>{const e=localStorage.getItem(rg);if(!e)return d();try{return JSON.parse(e)}catch(Tg){return console.error("Klaida nuskaitant pokalbi\u0173 istorij\u0105:",Tg),d()}})),[r,a]=(0,e.useState)(""),[i,o]=(0,e.useState)(!1),[s,l]=(0,e.useState)(!1),c=(0,e.useRef)(null),u=(0,e.useRef)(null);function d(){return[{id:"welcome",text:"Sveiki, \u010dia D\u017eiuljeta - tavo produktyvumo konsultant\u0117 su tarantini\u0161ka energija. Esu \u010dia, kad pad\u0117\u010diau tau susitvarkyti su u\u017eduotimis taip efektyviai, kad tai atrodyt\u0173 kaip veiksmo filmas! Sakyk, kuo galiu pad\u0117ti?",sender:"ai",timestamp:(new Date).toISOString()}]}(0,e.useEffect)((()=>{localStorage.setItem(rg,JSON.stringify(t))}),[t]),(0,e.useEffect)((()=>{p()}),[t]),(0,e.useEffect)((()=>()=>{u.current&&u.current.abort()}),[]);const p=()=>{var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},f=async()=>{if(!r.trim()||i)return;const e={id:`user-${Date.now()}`,text:r.trim(),sender:"user",timestamp:(new Date).toISOString()};n((t=>[...t,e])),a(""),o(!0);const s=`ai-${Date.now()}`,c={id:s,text:"",sender:"ai",timestamp:(new Date).toISOString()};n((e=>[...e,c]));const d=t.slice(-10).map((e=>({role:"user"===e.sender?"user":"assistant",content:e.text})));d.push({role:"user",content:e.text}),u.current&&u.current.abort(),u.current=new AbortController;const f=u.current.signal;try{l(!0);const e=await fetch("https://text.pollinations.ai/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:d,model:"openai-large",stream:!0,private:!0,system:"Tu esi D\u017eiuljeta, asistent\u0117, kuri kalba tarantini\u0161kuoju stilium - dr\u0105siai, tiesiai \u0161viesiai, kartais su \u012fdomiais posakiais. Tu esi produktyvumo ekspert\u0117, kuri m\u0117gsta kino filmus ir padedi \u017emon\u0117ms efektyviai atlikti u\u017eduotis. Vengk ilg\u0173 \u012f\u017eang\u0173, eik tiesiai prie esm\u0117s. B\u016bk draugi\u0161ka, bet u\u017etikrinta. Venkite pilk\u0173, nuobod\u017ei\u0173 atsakym\u0173 - b\u016bk asmenyb\u0117! Kai klientas u\u017eduoda klausim\u0105, atsakyk tiksliai, ai\u0161kiai. Nekalb\u0117k abstrak\u010diai - duok konkre\u010di\u0173 pavyzd\u017ei\u0173 ir metod\u0173."}),signal:f});if(!e.ok)throw new Error("API response error: "+e.status);const t=e.body.getReader(),r=new TextDecoder;let a=!1,i="";const o=Math.random()>.4;o&&(i=mg[Math.floor(Math.random()*mg.length)],a=!0);let c=o?`${i}\n\n`:"";for(;;){const{done:e,value:a}=await t.read();if(e)break;const i=r.decode(a,{stream:!0}).split("\n");for(const t of i)if(t.startsWith("data: ")){const e=t.slice(6);if("[DONE]"===e)continue;try{const t=JSON.parse(e);if(t.choices&&t.choices[0]&&t.choices[0].delta&&t.choices[0].delta.content){const e=t.choices[0].delta.content;c+=e,n((e=>e.map((e=>e.id===s?{...e,text:c}:e)))),p()}}catch(Tg){console.error("Error parsing JSON:",Tg)}}}}catch(m){"AbortError"!==m.name&&(console.error("Error getting AI response:",m),n((e=>e.map((e=>e.id===s?{...e,text:"Atsipra\u0161au, \u012fvyko klaida bandant gauti atsakym\u0105. Pra\u0161ome bandyti v\u0117liau."}:e)))))}finally{o(!1),l(!1),u.current=null}};return(0,Wl.jsxs)(ag,{variants:pg,initial:"hidden",animate:"visible",exit:"exit",children:[(0,Wl.jsxs)(ig,{children:[(0,Wl.jsxs)("div",{className:"title-section",children:[(0,Wl.jsxs)("h2",{children:[(0,Wl.jsx)(Dp,{icon:Fp})," Produktyvo AI Chatas"]}),(0,Wl.jsx)("p",{children:"D\u017eiuljeta - tavo asmenin\u0117 tarantini\u0161ko stiliaus produktyvumo konsultant\u0117"})]}),(0,Wl.jsx)("div",{className:"action-buttons",children:(0,Wl.jsx)(og,{title:"I\u0161valyti pokalb\u012f",$danger:!0,onClick:()=>{window.confirm("Ar tikrai norite i\u0161trinti vis\u0105 pokalbio istorij\u0105?")&&n(d())},children:(0,Wl.jsx)(Dp,{icon:cf})})})]}),(0,Wl.jsxs)(sg,{children:[0===t.length?(0,Wl.jsxs)(dg,{children:[(0,Wl.jsx)(Dp,{icon:Fp}),(0,Wl.jsx)("h3",{children:"Prad\u0117k pokalb\u012f su D\u017eiuljeta"}),(0,Wl.jsx)("p",{children:"U\u017eduok klausim\u0105 apie produktyvum\u0105, u\u017eduo\u010di\u0173 planavim\u0105 ar laiko valdym\u0105."})]}):(0,Wl.jsx)(Ql,{children:t.map((e=>{return(0,Wl.jsxs)(lg,{$isUser:"user"===e.sender,variants:fg,initial:"hidden",animate:"visible",exit:"exit",children:[(0,Wl.jsx)("div",{className:"message-icon",children:(0,Wl.jsx)(Dp,{icon:"user"===e.sender?Hp:Fp})}),(0,Wl.jsxs)("div",{className:"message-content",children:[(0,Wl.jsxs)("div",{className:"message-text",children:[e.text,e.id===t[t.length-1].id&&"ai"===e.sender&&s&&(0,Wl.jsx)("span",{className:"cursor",children:"|"})]}),(0,Wl.jsx)("div",{className:"message-meta",children:(0,Wl.jsx)("div",{className:"message-time",children:(n=e.timestamp,new Date(n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))})})]})]},e.id);var n}))}),(0,Wl.jsx)("div",{ref:c})]}),(0,Wl.jsxs)(cg,{children:[(0,Wl.jsx)("input",{type:"text",placeholder:"Paklauskite D\u017eiuljetos apie produktyvum\u0105...",value:r,onChange:e=>{a(e.target.value)},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),f())},disabled:i}),(0,Wl.jsx)("button",{onClick:f,disabled:i||!r.trim(),children:i?(0,Wl.jsx)(Dp,{icon:Lf,spin:!0}):(0,Wl.jsx)(Dp,{icon:Vf})})]}),(0,Wl.jsxs)(ug,{children:[(0,Wl.jsxs)("h3",{children:[(0,Wl.jsx)(Dp,{icon:Bp})," Si\u016blomi klausimai:"]}),(0,Wl.jsx)("div",{className:"queries",children:["Kaip efektyviai suskirstyti didel\u0119 u\u017eduot\u012f?","Patarimai darbui i\u0161 nam\u0173","Kaip kovoti su prokrastinacija?","Fokusavimo technikos","Kaip planuoti darbo dien\u0105?","Pomodoro metodo pritaikymas"].map(((e,t)=>(0,Wl.jsx)("button",{onClick:()=>(e=>{a(e)})(e),children:e},t)))})]})]})},gg=Yt.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--primary-red);
  color: var(--primary-yellow);
  border: 2px solid var(--primary-yellow);
  border-radius: 0;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
    border-width: 1px;
  }
`,vg=Yt.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  transition: all 0.3s ease;
`,yg=Yt.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  flex: 1;
  position: relative;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`,xg=Yt.h1`
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem;
  margin: var(--spacing-md) 0 var(--spacing-lg);
  color: var(--primary-yellow);
  text-shadow: 4px 4px 0px var(--primary-red);
  letter-spacing: 3px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-yellow), var(--primary-red), var(--primary-yellow));
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin: var(--spacing-sm) 0 var(--spacing-md);
    letter-spacing: 2px;
    
    &::after {
      height: 3px;
      bottom: -8px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    letter-spacing: 1.5px;
    
    &::after {
      height: 2px;
      bottom: -6px;
    }
  }
`,bg=Yt.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-md);
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }
`,kg=Yt.button.withConfig({shouldForwardProp:e=>"$active"!==e})`
  background-color: ${e=>e.$active?"var(--primary-red)":"var(--primary-yellow)"};
  color: ${e=>e.$active?"var(--primary-yellow)":"var(--text-color)"};
  border: none;
  padding: 10px 20px;
  border-radius: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  border-left: ${e=>e.$active?"5px solid var(--primary-yellow)":"3px solid var(--primary-red)"};
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: ${e=>(e.$active,"var(--primary-red)")};
    color: ${e=>(e.$active,"var(--primary-yellow)")};
    transform: translateY(-3px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
    flex: 1;
    text-align: center;
    min-width: 120px;
  }
`,wg=Yt.div`
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px solid var(--primary-yellow);
  border-left: 6px solid var(--primary-red);
  
  h2 {
    color: var(--primary-yellow);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    margin-bottom: var(--spacing-md);
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
  
  p {
    color: var(--subtask-text-color);
    margin-bottom: var(--spacing-md);
    font-family: 'Oswald', sans-serif;
    line-height: 1.6;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    
    li {
      padding: var(--spacing-sm) 0;
      border-bottom: 1px dashed var(--border-color);
      display: flex;
      align-items: center;
      
      &:last-child {
        border-bottom: none;
      }
      
      svg {
        color: var(--primary-yellow);
        margin-right: var(--spacing-sm);
      }
    }
  }
  
  @media (max-width: 768px) {
    margin: var(--spacing-lg) 0;
    padding: var(--spacing-md);
    
    h2 {
      font-size: 1.6rem;
    }
  }
  
  @media (max-width: 480px) {
    margin: var(--spacing-md) 0;
    padding: var(--spacing-sm);
    
    h2 {
      font-size: 1.4rem;
    }
  }
`,Sg=Yt(Ul.div)`
  width: 100%;
`,Cg=Yt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Eg=Yt.div`
  display: flex;
  margin-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--primary-yellow);
`,jg=Yt.button.withConfig({shouldForwardProp:e=>"$active"!==e})`
  background-color: ${e=>e.$active?"var(--primary-yellow)":"transparent"};
  color: ${e=>e.$active?"var(--text-color)":"var(--subtask-text-color)"};
  border: none;
  padding: 10px 20px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 3px solid transparent;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: rgba(247, 208, 44, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${e=>e.$active?"var(--primary-red)":"transparent"};
  }
  
  .badge {
    background-color: var(--primary-red);
    color: var(--primary-yellow);
    font-size: 0.8rem;
    padding: 2px 6px;
    border-radius: 0;
    margin-left: 4px;
  }
`;const Pg=function(){const[t,n]=(0,e.useState)((()=>"light"===localStorage.getItem("theme")?"light":"dark")),[r,a]=(0,e.useState)((()=>{const e=localStorage.getItem("tasks");return e?JSON.parse(e):[]})),[i,o]=(0,e.useState)("create"),[s,l]=(0,e.useState)("list"),[c,u]=(0,e.useState)(null),[d,p]=(0,e.useState)(null),[f,m]=(0,e.useState)([]),[h,g]=(0,e.useState)(!1);(0,e.useEffect)((()=>{localStorage.setItem("tasks",JSON.stringify(r))}),[r]);const v=e=>{a((t=>t.filter((t=>t.id!==e))))},y=(e,t)=>{const n=r.map((n=>{if(n.id===e){const r=n.subtasksCompleted||Array(n.subtasks.length).fill(!1),a=[...r];if(a[t]=!a[t],!r[t]){const r="string"===typeof n.subtasks[t]?n.subtasks[t]:n.subtasks[t].text,a=hm(e,t,r);a&&a.newRewards&&a.newRewards.length>0&&(m(a.newRewards),g(!0))}const i=a.every(Boolean);let o=n.completed;if(i&&!n.completed){o=!0;const e=mm({...n,completed:!0});e&&e.newRewards&&e.newRewards.length>0&&(m(e.newRewards),g(!0))}return{...n,subtasksCompleted:a,completed:o}}return n}));a(n),S(n)},x=e=>{const t=mm(e),n=r.map((t=>t.id===e.id?e:t));a(n),S(n),t&&t.newRewards&&t.newRewards.length>0&&(m(t.newRewards),g(!0))},b=e=>{p(e)},k={initial:{opacity:0,x:"-100%"},in:{opacity:1,x:0},out:{opacity:0,x:"100%"}},w={type:"tween",ease:"anticipate",duration:.5},S=e=>{localStorage.setItem("tasks",JSON.stringify(e))};return(0,Wl.jsxs)(_t,{theme:"light"===t?tg:ng,children:[(0,Wl.jsx)(Gt,{}),(0,Wl.jsxs)(vg,{children:[(0,Wl.jsx)(gg,{onClick:()=>{const e="light"===t?"dark":"light";n(e),localStorage.setItem("theme",e)},children:(0,Wl.jsx)(Dp,{icon:"light"===t?Df:xf})}),(0,Wl.jsxs)(yg,{children:[(0,Wl.jsx)("div",{style:{textAlign:"center"},children:(0,Wl.jsx)(xg,{children:"Produktyvumo \u012erankis"})}),(0,Wl.jsxs)(bg,{children:[(0,Wl.jsxs)(kg,{$active:"create"===i,onClick:()=>o("create"),children:[(0,Wl.jsx)(Dp,{icon:Tf,style:{marginRight:"8px"}}),"Sukurti u\u017eduot\u012f"]}),(0,Wl.jsxs)(kg,{$active:"tasks"===i,onClick:()=>{o("tasks"),"list"!==s&&"chat"!==s&&l("list")},children:[(0,Wl.jsx)(Dp,{icon:jf,style:{marginRight:"8px"}}),"U\u017eduo\u010di\u0173 valdymas ",r.length>0&&`(${r.length})`]}),(0,Wl.jsxs)(kg,{$active:"stats"===i,onClick:()=>o("stats"),children:[(0,Wl.jsx)(Dp,{icon:ef,style:{marginRight:"8px"}}),"Statistika"]}),(0,Wl.jsxs)(kg,{$active:"rewards"===i,onClick:()=>o("rewards"),children:[(0,Wl.jsx)(Dp,{icon:Of,style:{marginRight:"8px"}}),"Apdovanojimai"]})]}),(0,Wl.jsx)(eg,{}),(0,Wl.jsxs)(Ql,{mode:"wait",children:["create"===i&&(0,Wl.jsxs)(Sg,{initial:"initial",animate:"in",exit:"out",variants:k,transition:w,children:[(0,Wl.jsx)(om,{addTask:e=>{u(e),a((t=>[...t,e])),setTimeout((()=>{o("tasks"),l("list")}),500)},onTaskAdded:()=>o("tasks")}),(0,Wl.jsxs)(wg,{children:[(0,Wl.jsx)("h2",{children:"Apie Produktyvumo \u012erank\u012f"}),(0,Wl.jsx)("p",{children:"\u0160is \u012frankis sukurtas pad\u0117ti jums \u012fveikti atid\u0117liojim\u0105 ir tapti produktyvesniu. Naudodami \u0161\u012f \u012frank\u012f, j\u016bs galite:"}),(0,Wl.jsxs)("ul",{children:[(0,Wl.jsxs)("li",{children:[(0,Wl.jsx)(Dp,{icon:Xp}),"Skaidyti kompleksines u\u017eduotis \u012f ma\u017eesnius, lengviau \u012fveikiamus \u017eingsnius"]}),(0,Wl.jsxs)("li",{children:[(0,Wl.jsx)(Dp,{icon:Xp}),"Sekti savo pa\u017eang\u0105 ir matyti savo produktyvumo statistik\u0105"]}),(0,Wl.jsxs)("li",{children:[(0,Wl.jsx)(Dp,{icon:Xp}),"Gauti apdovanojimus u\u017e u\u017ebaigtas u\u017eduotis ir pasiekimus"]}),(0,Wl.jsxs)("li",{children:[(0,Wl.jsx)(Dp,{icon:Xp}),"Atrakinti naujus lygius ir funkcijas did\u0117jant j\u016bs\u0173 produktyvumui"]})]}),(0,Wl.jsx)("p",{children:"Prad\u0117kite \u012fvesdami nauj\u0105 u\u017eduot\u012f vir\u0161uje ir leiskite m\u016bs\u0173 dirbtiniam intelektui pasi\u016blyti konkre\u010dius \u017eingsnius bei laiko estimacijas kiekvienai u\u017eduo\u010diai."})]})]},"create"),"tasks"===i&&(0,Wl.jsx)(Sg,{initial:"initial",animate:"in",exit:"out",variants:k,transition:w,children:(0,Wl.jsxs)(Cg,{children:[(0,Wl.jsxs)(Eg,{children:[(0,Wl.jsxs)(jg,{$active:"list"===s,onClick:()=>l("list"),children:[(0,Wl.jsx)(Dp,{icon:jf}),"U\u017eduo\u010di\u0173 s\u0105ra\u0161as",r.length>0&&(0,Wl.jsx)("span",{className:"badge",children:r.length})]}),(0,Wl.jsxs)(jg,{$active:"chat"===s,onClick:()=>l("chat"),children:[(0,Wl.jsx)(Dp,{icon:Fp}),"D\u017eiuljeta AI"]})]}),"list"===s&&(0,Wl.jsx)(Dh,{tasks:r,onTaskComplete:x,onTaskDelete:v,onTaskEdit:b,onToggleSubtask:y}),"chat"===s&&(0,Wl.jsx)(hg,{})]})},"tasks"),"stats"===i&&(0,Wl.jsx)(Sg,{initial:"initial",animate:"in",exit:"out",variants:k,transition:w,children:(0,Wl.jsxs)("div",{children:[(0,Wl.jsx)("h2",{style:{color:"var(--primary-yellow)",textAlign:"center",margin:"2rem 0",fontFamily:"'Bebas Neue', sans-serif",textShadow:"2px 2px 0px var(--primary-red)"},children:"I\u0161sami statistika"}),(0,Wl.jsxs)("div",{style:{textAlign:"center",padding:"2rem",backgroundColor:"rgba(0, 0, 0, 0.05)",border:"2px dashed var(--primary-yellow)"},children:[(0,Wl.jsx)(Dp,{icon:qp,style:{fontSize:"3rem",color:"var(--primary-yellow)",marginBottom:"1rem"}}),(0,Wl.jsx)("p",{style:{color:"var(--subtask-text-color)"},children:"I\u0161samios statistikos funkcija bus prieinama netrukus!"})]})]})},"stats"),"rewards"===i&&(0,Wl.jsx)(Sg,{initial:"initial",animate:"in",exit:"out",variants:k,transition:w,children:(0,Wl.jsxs)("div",{children:[(0,Wl.jsx)("h2",{style:{color:"var(--primary-yellow)",textAlign:"center",margin:"2rem 0",fontFamily:"'Bebas Neue', sans-serif",textShadow:"2px 2px 0px var(--primary-red)"},children:"Visi apdovanojimai"}),(0,Wl.jsxs)("div",{style:{textAlign:"center",padding:"2rem",backgroundColor:"rgba(0, 0, 0, 0.05)",border:"2px dashed var(--primary-yellow)"},children:[(0,Wl.jsx)(Dp,{icon:bf,style:{fontSize:"3rem",color:"var(--primary-yellow)",marginBottom:"1rem"}}),(0,Wl.jsx)("p",{style:{color:"var(--subtask-text-color)"},children:"I\u0161sami apdovanojim\u0173 per\u017ei\u016bra bus prieinama netrukus!"})]})]})},"rewards")]})]}),h&&f.length>0&&(0,Wl.jsx)(Fm,{rewards:f,onClose:()=>g(!1)})]}),(0,Wl.jsx)(Ql,{children:d&&d.showTaskStartModal&&(0,Wl.jsx)(Nm,{task:d,isOpen:!0,onClose:()=>{const e=r.map((e=>e.id===d.id?{...e,showTaskStartModal:!1}:e));a(e),p(null)},onTaskComplete:x,toggleSubtask:y})}),(0,Wl.jsx)(Ql,{children:d&&d.showAIHelpModal&&(0,Wl.jsx)(ch,{task:d,subtaskIndex:d.currentSubtaskIndex||0,isOpen:!0,onClose:()=>{const e=r.map((e=>e.id===d.id?{...e,showAIHelpModal:!1}:e));a(e),p(null)}})})]})};t.createRoot(document.getElementById("root")).render((0,Wl.jsx)(e.StrictMode,{children:(0,Wl.jsx)(Pg,{})}))})()})();
//# sourceMappingURL=main.56c1e8d6.js.map