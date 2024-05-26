/*! For license information please see bundle.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MyLibrary=e():t.MyLibrary=e()}(self,(()=>(()=>{"use strict";var t={910:(t,e,n)=>{n.d(e,{A:()=>u});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,".container {\n  font-size: 14px;\n  position: fixed;\n  z-index: 10;\n}\n\n.bottom-right {\n  bottom: 1rem;\n  right: 1rem;\n  animation: toast-in-right 0.7s;\n}\n\n.bottom-left {\n  bottom: 1rem;\n  left: 1rem;\n  animation: toast-in-left 0.7s;\n}\n\n.top-left {\n  top: 1rem;\n  left: 1rem;\n  animation: toast-in-left 0.7s;\n}\n\n.top-right {\n  top: 1rem;\n  right: 1rem;\n  animation: toast-in-right 0.7s;\n}\n\n.top-center {\n  top: 1rem;\n  left: 50%;\n  right: 50%;\n  transform: translateX(-50%);\n  animation: toast-in-center-top 0.7s;\n}\n\n.bottom-center {\n  bottom: 1rem;\n  left: 50%;\n  right: 50%;\n  transform: translateX(-50%);\n  animation: toast-in-center-bottom 0.7s;\n}\n\n.notification {\n  margin-bottom: 1rem;\n  border-radius: 4px;\n  color: #000;\n  backdrop-filter: blur(8px);\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  background-color: rgba(229, 231, 235, 0.75);\n  opacity: 0.9;\n  transition: 0.3s ease-in-out;\n}\n\n.notification:hover {\n  box-shadow: 0 0 12px #fff;\n  opacity: 1;\n}\n\n.notification .content {\n  display: flex;\n  align-items: start;\n  width: 75%;\n}\n\n.notification .content img {\n  width: 50px;\n  height: 50px;\n  margin: 0 5px;\n}\n\n.toast {\n  min-height: 50px;\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  border-radius: 12px;\n  width: 300px;\n  padding: 10px;\n}\n\n.time {\n  color: #000;\n  margin: 0 !important;\n  font-weight: bold;\n}\n\n.title {\n  font-weight: 700;\n  font-size: 16px;\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 6px;\n}\n\n.description {\n  margin: 0;\n  text-align: left;\n}\n\n@keyframes toast-in-right {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@keyframes toast-in-left {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@keyframes toast-in-center-top {\n  from {\n    opacity: 0;\n    transform: translateY(-100%) translateX(-50%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) translateX(-50%);\n  }\n}\n\n@keyframes toast-in-center-bottom {\n  from {\n    opacity: 0;\n    transform: translateY(100%) translateX(-50%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) translateX(-50%);\n  }\n}\n",""]);const u=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},287:(t,e)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function v(t,e,n){this.props=t,this.context=e,this.refs=b,this.updater=n||d}function h(){}function g(t,e,n){this.props=t,this.context=e,this.refs=b,this.updater=n||d}v.prototype.isReactComponent={},v.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},h.prototype=v.prototype;var S=g.prototype=new h;S.constructor=g,y(S,v.prototype),S.isPureReactComponent=!0;var x=Array.isArray,_=Object.prototype.hasOwnProperty,w={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(t,e,r){var o,a={},i=null,u=null;if(null!=e)for(o in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(i=""+e.key),e)_.call(e,o)&&!E.hasOwnProperty(o)&&(a[o]=e[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:t,key:i,ref:u,props:a,_owner:w.current}}function O(t){return"object"==typeof t&&null!==t&&t.$$typeof===n}var P=/\/+/g;function k(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function C(t,e,o,a,i){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=t),t=""===a?"."+k(c,0):a,x(i)?(o="",null!=t&&(o=t.replace(P,"$&/")+"/"),C(i,e,o,"",(function(t){return t}))):null!=i&&(O(i)&&(i=function(t,e){return{$$typeof:n,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+t)),e.push(i)),1;if(c=0,a=""===a?".":a+":",x(t))for(var s=0;s<t.length;s++){var l=a+k(u=t[s],s);c+=C(u,e,o,l,i)}else if(l=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=m&&t[m]||t["@@iterator"])?t:null}(t),"function"==typeof l)for(t=l.call(t),s=0;!(u=t.next()).done;)c+=C(u=u.value,e,o,l=a+k(u,s++),i);else if("object"===u)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function A(t,e,n){if(null==t)return t;var r=[],o=0;return C(t,r,"","",(function(t){return e.call(n,t,o++)})),r}function R(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var $={current:null},I={transition:null},T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};function M(){throw Error("act(...) is not supported in production builds of React.")}e.Children={map:A,forEach:function(t,e,n){A(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return A(t,(function(){e++})),e},toArray:function(t){return A(t,(function(t){return t}))||[]},only:function(t){if(!O(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=v,e.Fragment=o,e.Profiler=i,e.PureComponent=g,e.StrictMode=a,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,e.act=M,e.cloneElement=function(t,e,r){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=y({},t.props),a=t.key,i=t.ref,u=t._owner;if(null!=e){if(void 0!==e.ref&&(i=e.ref,u=w.current),void 0!==e.key&&(a=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(s in e)_.call(e,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===e[s]&&void 0!==c?c[s]:e[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:t.type,key:a,ref:i,props:o,_owner:u}},e.createContext=function(t){return(t={$$typeof:c,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:t},t.Consumer=t},e.createElement=j,e.createFactory=function(t){var e=j.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:s,render:t}},e.isValidElement=O,e.lazy=function(t){return{$$typeof:p,_payload:{_status:-1,_result:t},_init:R}},e.memo=function(t,e){return{$$typeof:f,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=I.transition;I.transition={};try{t()}finally{I.transition=e}},e.unstable_act=M,e.useCallback=function(t,e){return $.current.useCallback(t,e)},e.useContext=function(t){return $.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return $.current.useDeferredValue(t)},e.useEffect=function(t,e){return $.current.useEffect(t,e)},e.useId=function(){return $.current.useId()},e.useImperativeHandle=function(t,e,n){return $.current.useImperativeHandle(t,e,n)},e.useInsertionEffect=function(t,e){return $.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return $.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return $.current.useMemo(t,e)},e.useReducer=function(t,e,n){return $.current.useReducer(t,e,n)},e.useRef=function(t){return $.current.useRef(t)},e.useState=function(t){return $.current.useState(t)},e.useSyncExternalStore=function(t,e,n){return $.current.useSyncExternalStore(t,e,n)},e.useTransition=function(){return $.current.useTransition()},e.version="18.3.1"},540:(t,e,n)=>{t.exports=n(287)},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],u=0;u<t.length;u++){var c=t[u],s=r.base?c[0]+r.base:c[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=n(f),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var d=o(m,r);r.byIndex=u,e.splice(u,0,{identifier:f,updater:d,references:1})}i.push(f)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var u=n(a[i]);e[u].references--}for(var c=r(t,o),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},159:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0;var r={};return(()=>{n.r(r),n.d(r,{default:()=>O,toast:()=>g});var t=n(540),e=n(72),o=n.n(e),a=n(825),i=n.n(a),u=n(659),c=n.n(u),s=n(56),l=n.n(s),f=n(159),p=n.n(f),m=n(113),d=n.n(m),y=n(910),b={};b.styleTagTransform=d(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(y.A,b),y.A&&y.A.locals&&y.A.locals;const v=function(e){var n=e.toasts,r=e.settoasts,o=e.position,a=(0,t.useCallback)((function(t){var e=n.filter((function(e){return e.id!==t}));r(e)}),[n,r]);return(0,t.useEffect)((function(){var t,e,r=setInterval((function(){n.length&&a(n[0].id)}),n.length&&null!==(t=null===(e=n[0])||void 0===e?void 0:e.duration)&&void 0!==t?t:3e3);return function(){clearInterval(r)}}),[n,a]),t.createElement("div",{className:"container ".concat(null!=o?o:"top-right")},n.map((function(e,n){return t.createElement("div",{className:"notification toast ".concat(null!=o?o:"top-right"),key:n},t.createElement("div",{className:"content"},e.imagePath&&t.createElement("img",{alt:"snackbar",src:e.imagePath}),t.createElement("div",null,t.createElement("p",{className:"title"},e.title),t.createElement("p",{className:"description"},e.description))),t.createElement("p",{className:"time"},e.time))})))};var h,g={trigger:function(t){var e=t.description,n=t.imagePath;!function(t){h?h(t):console.error("Toast container is not initialized yet.")}({title:t.title,time:t.time,description:e,imagePath:n})}};function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=S(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==S(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(t,e){if(t){if("string"==typeof t)return j(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,e):void 0}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}const O=function(e){var n,r,o=e.position,a=(n=(0,t.useState)([]),r=2,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,u=[],c=!0,s=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return u}}(n,r)||E(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];return(0,t.useEffect)((function(){var t;t=function(t){u((function(e){return[].concat(function(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||E(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),[_(_({},t),{},{id:e.length})])}))},h=t}),[]),t.createElement(v,{toasts:i,position:o,settoasts:u})}})(),r})()));