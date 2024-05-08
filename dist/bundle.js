/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TimeElement-lit.js":
/*!********************************!*\
  !*** ./src/TimeElement-lit.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TimeElement: () => (/* binding */ TimeElement)\n/* harmony export */ });\n/* harmony import */ var https_cdn_jsdelivr_net_gh_lit_dist_3_core_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js */ \"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_jsdelivr_net_gh_lit_dist_3_core_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_cdn_jsdelivr_net_gh_lit_dist_3_core_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _templateObject, _templateObject2;\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar TimeElement = /*#__PURE__*/function (_LitElement) {\n  function TimeElement() {\n    var _this;\n    _classCallCheck(this, TimeElement);\n    _this = _callSuper(this, TimeElement);\n    _this.hours = \"0\";\n    _this.minutes = \"00\";\n    _this.seconds = \"00\";\n    return _this;\n  }\n  _inherits(TimeElement, _LitElement);\n  return _createClass(TimeElement, [{\n    key: \"render\",\n    value: function render() {\n      return (0,https_cdn_jsdelivr_net_gh_lit_dist_3_core_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n      <div id=\\\"time_wrapper\\\">\\n        <div id=\\\"time_input\\\">\\n          <input type=\\\"number\\\" id=\\\"hours\\\" value=\", \" />\\n          <span>:</span>\\n          <input type=\\\"number\\\" id=\\\"minutes\\\" value=\", \" />\\n          <span>:</span>\\n          <input type=\\\"number\\\" id=\\\"seconds\\\" value=\", \" />\\n        </div>\\n      </div>\\n      <div id=\\\"error\\\"></div>\\n    \"])), this.hours, this.minutes, this.seconds);\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      var _event$target = event.target,\n        id = _event$target.id,\n        value = _event$target.value;\n      this[id] = value;\n    }\n  }, {\n    key: \"getTimeValues\",\n    value: function getTimeValues() {\n      return {\n        hours: this.hours,\n        minutes: this.minutes,\n        seconds: this.seconds\n      };\n    }\n  }]);\n}(https_cdn_jsdelivr_net_gh_lit_dist_3_core_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.LitElement);\n_defineProperty(TimeElement, \"styles\", (0,https_cdn_jsdelivr_net_gh_lit_dist_3_core_lit_core_min_js__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n    :host {\\n      font-family: sans-serif;\\n    }\\n\\n    #time_wrapper {\\n      width: 100%;\\n      height: 50px;\\n      position: relative;\\n      border: solid;\\n      border-color: silver;\\n      border-radius: 10px;\\n      box-shadow: inset 0px 0.6px 5px 1.4px silver;\\n    }\\n\\n    #time_input {\\n      border: 1px solid var(--inactive);\\n      width: 100%;\\n      height: 50px;\\n      color: gray;\\n      display: flex;\\n      align-items: center;\\n    }\\n\\n    input {\\n      align-self: stretch;\\n      width: 33%;\\n      border: none;\\n      border-radius: 10px;\\n      box-sizing: border-box;\\n      padding: auto 10px;\\n      text-align: center;\\n      color: #132c14;\\n      background-color: rgba(0, 0, 0, 0);\\n    }\\n\\n    label {\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: center;\\n      position: relative;\\n    }\\n\\n    .label {\\n      font-size: 0.55rem;\\n      position: absolute;\\n      top: 4.5px;\\n    }\\n\\n    input::-webkit-outer-spin-button,\\n    input::-webkit-inner-spin-button {\\n      -webkit-appearance: none;\\n      margin: 0;\\n    }\\n\\n    input[type=\\\"number\\\"] {\\n      -moz-appearance: textfield;\\n    }\\n\\n    input.invalid:focus {\\n      outline: 3px solid red;\\n    }\\n\\n    input.invalid:focus + .label {\\n      color: red;\\n    }\\n\\n    #error {\\n      position: relative;\\n      margin: 0 auto;\\n      color: red;\\n      visibility: hidden;\\n    }\\n  \"]))));\ncustomElements.define(\"time-element\", TimeElement);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://data-collection/./src/TimeElement-lit.js?");

/***/ }),

/***/ "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/TimeElement-lit.js");
/******/ 	
/******/ })()
;