/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bin/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/Preloader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Easings.js":
/*!***************************!*\
  !*** ./src/js/Easings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mnf/core/stage */ \"./src/js/mnf/core/stage.js\");\n\n\nfunction Easings() {\n  this.updating = false;\n  this.iterationCount = 0;\n  this.tweens = [];\n}\n\nEasings.prototype.killTweensOf = function (obj) {\n  for (var i = 0; i < this.tweens.length; i++) {\n    var t = this.tweens[i]; // same object ?\n\n    if (t.obj === obj && t.obj.id === obj.id) {\n      // t.delete = true;\n      t = null;\n      this.tweens.splice(i, 1);\n      i--;\n    }\n  }\n};\n\nEasings.prototype.to = function (obj, duration, vars, test) {\n  var tween = {\n    delete: false,\n    currentIteration: 0,\n    isArray: false,\n    obj: obj,\n    vars: vars,\n    delay: vars.delay * 60 || 0,\n    isDelayed: vars.delay && vars.delay > 0 ? true : false,\n    duration: duration * 60,\n    ease: vars.ease || this.easeLinear\n  };\n\n  if (obj instanceof Array) {\n    tween.isArray = true;\n    var varToTween = [];\n\n    for (var v in vars) {\n      if (v !== \"delay\" && v !== \"duration\" && !this.isFunction(vars[v])) {\n        var object = {\n          var: v,\n          toValue: vars[v]\n        };\n        var values = [];\n\n        for (var i = 0; i < obj.length; i++) {\n          values.push(obj[i]);\n        }\n\n        object.value = values;\n        varToTween.push(object);\n      }\n    }\n  } else {\n    var varToTween = [];\n\n    for (var v in vars) {\n      if (v !== \"delay\" && v !== \"duration\" && !this.isFunction(vars[v]) && v !== \"forceTween\") {\n        for (var i = 0; i < this.tweens.length; i++) {\n          var t = this.tweens[i]; // same object ?\n\n          if (t.obj === obj) {\n            for (var k = 0; k < t.props.length; k++) {\n              var variableToTween = t.props[k];\n\n              if (variableToTween.var === v && (tween.delay === 0 || tween.vars.forceTween)) {\n                // tween the same variable ?\n                t.delete = true;\n                this.tweens.splice(i, 1);\n                i--; // t.props.splice(k, 1);\n                // k--;\n              }\n            }\n          }\n        }\n\n        varToTween.push({\n          var: v,\n          value: obj[v],\n          toValue: vars[v]\n        });\n      }\n    }\n  }\n\n  tween.props = varToTween; // if(!obj.tweens){\n  //   obj.tweens = [\n  //     tween\n  //   ]\n  // }\n  // else {\n  //   obj.tweens.push(tween);\n  // }\n\n  this.tweens.push(tween);\n\n  if (!this.updating) {\n    this.updating = true;\n  }\n};\n\nEasings.prototype.isFunction = function (obj) {\n  return !!(obj && obj.constructor && obj.call && obj.apply);\n};\n\nEasings.prototype.updateArray = function (tween) {\n  var o = tween;\n\n  if (o.delay > 0) {\n    o.delay--;\n  } else {\n    for (var i = 0; i < o.obj.length; i++) {\n      var currentValue = o.obj[i];\n      o.obj[i] = o.ease(o.currentIteration, o.props[0].value[i], o.props[0].toValue[i] - o.props[0].value[i], o.duration);\n    }\n\n    o.currentIteration++; //\n\n    if (o.currentIteration > o.duration) {\n      if (o.vars.onComplete) {\n        o.vars.onComplete();\n      }\n\n      o.delete = true;\n    }\n  }\n};\n\nEasings.prototype.update = function () {\n  if (!this.updating) {\n    return;\n  }\n\n  for (var i = 0; i < this.tweens.length; i++) {\n    var o = this.tweens[i];\n\n    if (o.isArray) {\n      this.updateArray(o);\n    } else {\n      if (o.isDelayed) {\n        if (o.delay > 0) {\n          o.delay -= 1; // do something here\n        } else if (o.delay <= 0) {\n          o.isDelayed = false;\n\n          for (var k = 0; k < o.props.length; k++) {\n            var e = o.props[k];\n            e.value = o.obj[e.var];\n          }\n        }\n      } else {\n        for (var k = 0; k < o.props.length; k++) {\n          var e = o.props[k];\n          o.obj[e.var] = o.ease(o.currentIteration, e.value, e.toValue - e.value, o.duration);\n        }\n\n        if (o.vars.onUpdate) {\n          o.vars.onUpdate.apply(this, o.vars.onUpdateParams);\n        }\n\n        o.currentIteration += 1; // do something here\n\n        if (o.currentIteration > o.duration) {\n          if (o.vars.onComplete) {\n            o.vars.onComplete.apply(this, o.vars.onCompleteParams);\n          }\n\n          o.delete = true;\n        }\n      }\n    }\n  }\n\n  for (var i = 0; i < this.tweens.length; i++) {\n    var o = this.tweens[i];\n\n    if (o.delete) {\n      o = null;\n      this.tweens.splice(i, 1);\n      i--;\n    }\n  }\n\n  if (this.tweens.length === 0) {\n    this.updating = false;\n  }\n};\n\nEasings.prototype.easeLinear = function (t, b, c, d) {\n  t /= d;\n  return c * t + b;\n};\n\nEasings.prototype.easeInSine = function (t, b, c, d) {\n  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;\n};\n\nEasings.prototype.easeOutSine = function (t, b, c, d) {\n  return c * Math.sin(t / d * (Math.PI / 2)) + b;\n};\n\nEasings.prototype.easeInExpo = function (t, b, c, d) {\n  return c * Math.pow(2, 10 * (t / d - 1)) + b;\n};\n\nEasings.prototype.elasticOutSoft = function (t, b, c, d) {\n  var s = 1.0158;\n  var p = 0;\n  var a = c;\n  if (t == 0) return b;\n  if ((t /= d) == 1) return b + c;\n  if (!p) p = d * .3;\n\n  if (a < Math.abs(c)) {\n    a = c;\n    var s = p / 4;\n  } else var s = p / (2 * Math.PI) * Math.asin(c / a);\n\n  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;\n};\n\nEasings.prototype.easeOutBack = function (t, b, c, d) {\n  // if (s == undefined) s = 1.70158;\n  var s = 1.70158;\n  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;\n};\n\nEasings.prototype.easeOutBackSoft = function (t, b, c, d) {\n  // if (s == undefined) s = 1.70158;\n  var s = 1.30158;\n  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;\n};\n\nEasings.prototype.elasticOut = function (t, b, c, d) {\n  var s = 1.70158;\n  var p = 0;\n  var a = c;\n  if (t == 0) return b;\n  if ((t /= d) == 1) return b + c;\n  if (!p) p = d * .3;\n\n  if (a < Math.abs(c)) {\n    a = c;\n    var s = p / 4;\n  } else var s = p / (2 * Math.PI) * Math.asin(c / a);\n\n  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;\n};\n\nEasings.prototype.easeInCubic = function (t, b, c, d) {\n  t /= d;\n  return c * t * t * t + b;\n};\n\nEasings.prototype.easeOutCubic = function (t, b, c, d) {\n  t /= d;\n  t--;\n  return c * (t * t * t + 1) + b;\n};\n\nEasings.prototype.easeInOutSine = function (t, b, c, d) {\n  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;\n};\n\nEasings.prototype.easeInBack = function (x, t, b, c, d, s) {\n  if (s == undefined) s = 1.70158;\n  return c * (t /= d) * t * ((s + 1) * t - s) + b;\n};\n\nEasings.prototype.easeInOutExpo = function (t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;\n  t--;\n  return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;\n};\n\nEasings.prototype.easeInOutQuint = function (t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * t * t * t * t * t + b;\n  t -= 2;\n  return c / 2 * (t * t * t * t * t + 2) + b;\n};\n\nEasings.prototype.easeInOutCirc = function (t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;\n  t -= 2;\n  return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;\n};\n\nEasings.prototype.easeOutCirc = function (t, b, c, d) {\n  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;\n};\n\nconst instance = new Easings();\nmnf_core_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onUpdate.add(dt => {\n  instance.update(dt);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvRWFzaW5ncy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9FYXNpbmdzLmpzP2EwMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YWdlIGZyb20gJ21uZi9jb3JlL3N0YWdlJ1xuXG5mdW5jdGlvbiBFYXNpbmdzKClcbntcblx0dGhpcy51cGRhdGluZyA9IGZhbHNlXG5cdHRoaXMuaXRlcmF0aW9uQ291bnQgPSAwXG5cdHRoaXMudHdlZW5zID0gW11cbn1cblxuRWFzaW5ncy5wcm90b3R5cGUua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ob2JqKXtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnR3ZWVucy5sZW5ndGg7IGkrKykge1xuXHR2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuXHQvLyBzYW1lIG9iamVjdCA/XG5cdGlmKHQub2JqPT09IG9iaiAmJiB0Lm9iai5pZCA9PT0gb2JqLmlkKXtcblx0XHQvLyB0LmRlbGV0ZSA9IHRydWU7XG5cdFx0dCA9IG51bGw7XG5cdFx0dGhpcy50d2VlbnMuc3BsaWNlKGksIDEpO1xuXHRcdGktLTtcblx0fVxuXHR9XG59O1xuXG5FYXNpbmdzLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKG9iaiwgZHVyYXRpb24sIHZhcnMsIHRlc3Qpe1xuXHR2YXIgdHdlZW4gPSB7XG5cdGRlbGV0ZTogZmFsc2UsXG5cdGN1cnJlbnRJdGVyYXRpb246IDAsXG5cdGlzQXJyYXk6IGZhbHNlLFxuXHRvYmo6IG9iaixcblx0dmFyczogdmFycyxcblx0ZGVsYXk6IHZhcnMuZGVsYXkgKiA2MCB8fCAwLFxuXHRpc0RlbGF5ZWQ6ICh2YXJzLmRlbGF5ICYmIHZhcnMuZGVsYXkgPiAwKSA/ICB0cnVlOiBmYWxzZSxcblx0ZHVyYXRpb246IGR1cmF0aW9uICogNjAsXG5cdGVhc2U6IHZhcnMuZWFzZSB8fCB0aGlzLmVhc2VMaW5lYXJcblx0fVxuXG5cdGlmKG9iaiBpbnN0YW5jZW9mIEFycmF5KXtcblxuXHR0d2Vlbi5pc0FycmF5ID0gdHJ1ZTtcblxuXHR2YXIgdmFyVG9Ud2VlbiA9IFtdO1xuXHRmb3IgKHZhciB2IGluIHZhcnMpIHtcblx0XHRpZih2ICE9PSBcImRlbGF5XCIgJiYgdiAhPT0gXCJkdXJhdGlvblwiICYmICF0aGlzLmlzRnVuY3Rpb24odmFyc1t2XSkpe1xuXG5cdFx0dmFyIG9iamVjdCA9IHtcblx0XHRcdHZhcjogdixcblx0XHRcdHRvVmFsdWU6IHZhcnNbdl1cblx0XHR9XG5cblx0XHR2YXIgdmFsdWVzID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhbHVlcy5wdXNoKG9ialtpXSk7XG5cdFx0fVxuXHRcdG9iamVjdC52YWx1ZSA9IHZhbHVlcztcblxuXHRcdHZhclRvVHdlZW4ucHVzaChvYmplY3QpO1xuXHRcdH1cblx0fVxuXHR9XG5cdGVsc2Uge1xuXHR2YXIgdmFyVG9Ud2VlbiA9IFtdO1xuXG5cdGZvciAodmFyIHYgaW4gdmFycykge1xuXHRcdGlmKHYgIT09IFwiZGVsYXlcIiAmJiB2ICE9PSBcImR1cmF0aW9uXCIgJiYgIXRoaXMuaXNGdW5jdGlvbih2YXJzW3ZdKSAmJiB2ICE9PSBcImZvcmNlVHdlZW5cIil7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHdlZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuXG5cdFx0XHQvLyBzYW1lIG9iamVjdCA/XG5cdFx0XHRpZih0Lm9iaiA9PT0gb2JqKXtcblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgdC5wcm9wcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHR2YXIgdmFyaWFibGVUb1R3ZWVuID0gdC5wcm9wc1trXTtcblx0XHRcdFx0aWYodmFyaWFibGVUb1R3ZWVuLnZhciA9PT0gdiAmJiAodHdlZW4uZGVsYXkgPT09IDAgfHwgdHdlZW4udmFycy5mb3JjZVR3ZWVuKSl7IC8vIHR3ZWVuIHRoZSBzYW1lIHZhcmlhYmxlID9cblx0XHRcdFx0dC5kZWxldGUgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnR3ZWVucy5zcGxpY2UoaSwgMSk7XG5cblx0XHRcdFx0aS0tO1xuXHRcdFx0XHQvLyB0LnByb3BzLnNwbGljZShrLCAxKTtcblx0XHRcdFx0Ly8gay0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyVG9Ud2Vlbi5wdXNoKHtcblx0XHRcdHZhcjogdixcblx0XHRcdHZhbHVlOiBvYmpbdl0sXG5cdFx0XHR0b1ZhbHVlOiB2YXJzW3ZdXG5cdFx0fSk7XG5cdFx0fVxuXHR9XG5cdH1cblxuXHR0d2Vlbi5wcm9wcyA9IHZhclRvVHdlZW47XG5cblx0Ly8gaWYoIW9iai50d2VlbnMpe1xuXHQvLyAgIG9iai50d2VlbnMgPSBbXG5cdC8vICAgICB0d2VlblxuXHQvLyAgIF1cblx0Ly8gfVxuXHQvLyBlbHNlIHtcblx0Ly8gICBvYmoudHdlZW5zLnB1c2godHdlZW4pO1xuXHQvLyB9XG5cblx0dGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG5cdGlmKCF0aGlzLnVwZGF0aW5nKSB7XG5cdHRoaXMudXBkYXRpbmcgPSB0cnVlXG5cdH1cblxufTtcblxuRWFzaW5ncy5wcm90b3R5cGUuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuXHRyZXR1cm4gISEob2JqICYmIG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY2FsbCAmJiBvYmouYXBwbHkpO1xufTtcblxuRWFzaW5ncy5wcm90b3R5cGUudXBkYXRlQXJyYXkgPSBmdW5jdGlvbih0d2Vlbil7XG5cdHZhciBvID0gdHdlZW47XG5cblx0aWYoby5kZWxheSA+IDApe1xuXHRvLmRlbGF5LS07XG5cdH1cblx0ZWxzZSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgby5vYmoubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY3VycmVudFZhbHVlID0gby5vYmpbaV07XG5cblx0XHRvLm9ialtpXSA9IG8uZWFzZShvLmN1cnJlbnRJdGVyYXRpb24sIG8ucHJvcHNbMF0udmFsdWVbaV0sIG8ucHJvcHNbMF0udG9WYWx1ZVtpXSAtIG8ucHJvcHNbMF0udmFsdWVbaV0sIG8uZHVyYXRpb24pO1xuXHR9XG5cdG8uY3VycmVudEl0ZXJhdGlvbisrO1xuXHQvL1xuXHRpZihvLmN1cnJlbnRJdGVyYXRpb24gPiBvLmR1cmF0aW9uKXtcblx0XHRpZihvLnZhcnMub25Db21wbGV0ZSl7XG5cdFx0by52YXJzLm9uQ29tcGxldGUoKTtcblx0XHR9XG5cdFx0by5kZWxldGUgPSB0cnVlO1xuXHR9XG5cdH1cbn07XG5cbkVhc2luZ3MucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblxuXHRpZighdGhpcy51cGRhdGluZykge1xuXHRyZXR1cm47XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnR3ZWVucy5sZW5ndGg7IGkrKykge1xuXHR2YXIgbyA9IHRoaXMudHdlZW5zW2ldO1xuXG5cdGlmKG8uaXNBcnJheSl7XG5cdFx0dGhpcy51cGRhdGVBcnJheShvKTtcblx0fVxuXHRlbHNlIHtcblx0XHRpZihvLmlzRGVsYXllZCl7XG5cblx0XHRpZihvLmRlbGF5ID4gMCl7XG5cdFx0XHRvLmRlbGF5IC09IDE7Ly8gZG8gc29tZXRoaW5nIGhlcmVcblx0XHR9XG5cdFx0ZWxzZSBpZihvLmRlbGF5IDw9IDApe1xuXHRcdFx0by5pc0RlbGF5ZWQgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgby5wcm9wcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0dmFyIGUgPSBvLnByb3BzW2tdO1xuXHRcdFx0ZS52YWx1ZSA9IG8ub2JqW2UudmFyXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdGZvciAodmFyIGsgPSAwOyBrIDwgby5wcm9wcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0dmFyIGUgPSBvLnByb3BzW2tdO1xuXG5cdFx0XHRvLm9ialtlLnZhcl0gPSBvLmVhc2Uoby5jdXJyZW50SXRlcmF0aW9uLCBlLnZhbHVlLCBlLnRvVmFsdWUgLSBlLnZhbHVlLCBvLmR1cmF0aW9uKTtcblx0XHR9XG5cblx0XHRpZihvLnZhcnMub25VcGRhdGUpe1xuXHRcdFx0by52YXJzLm9uVXBkYXRlLmFwcGx5KHRoaXMsIG8udmFycy5vblVwZGF0ZVBhcmFtcyk7XG5cdFx0fVxuXG5cdFx0by5jdXJyZW50SXRlcmF0aW9uICs9IDE7Ly8gZG8gc29tZXRoaW5nIGhlcmVcblx0XHRpZihvLmN1cnJlbnRJdGVyYXRpb24gPiBvLmR1cmF0aW9uKXtcblx0XHRcdGlmKG8udmFycy5vbkNvbXBsZXRlKXtcblx0XHRcdG8udmFycy5vbkNvbXBsZXRlLmFwcGx5KHRoaXMsIG8udmFycy5vbkNvbXBsZXRlUGFyYW1zKTtcblx0XHRcdH1cblx0XHRcdG8uZGVsZXRlID0gdHJ1ZTtcblx0XHR9XG5cdFx0fVxuXHR9XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHdlZW5zLmxlbmd0aDsgaSsrKSB7XG5cdHZhciBvID0gdGhpcy50d2VlbnNbaV07XG5cdGlmKG8uZGVsZXRlKXtcblx0XHRvID0gbnVsbDtcblx0XHR0aGlzLnR3ZWVucy5zcGxpY2UoaSwgMSk7XG5cdFx0aS0tO1xuXHR9XG5cdH1cblxuXHRpZih0aGlzLnR3ZWVucy5sZW5ndGggPT09IDApIHtcblx0dGhpcy51cGRhdGluZyA9IGZhbHNlO1xuXHR9XG59O1xuXG5FYXNpbmdzLnByb3RvdHlwZS5lYXNlTGluZWFyID0gZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHR0IC89IGQ7XG5cdHJldHVybiBjKnQgKyBiO1xufTtcblxuRWFzaW5ncy5wcm90b3R5cGUuZWFzZUluU2luZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIC1jICogTWF0aC5jb3ModC9kICogKE1hdGguUEkvMikpICsgYyArIGI7XG5cdH07XG5cbkVhc2luZ3MucHJvdG90eXBlLmVhc2VPdXRTaW5lID0gZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRyZXR1cm4gYyAqIE1hdGguc2luKHQvZCAqIChNYXRoLlBJLzIpKSArIGI7XG59O1xuXG5FYXNpbmdzLnByb3RvdHlwZS5lYXNlSW5FeHBvID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcblx0cmV0dXJuIGMgKiBNYXRoLnBvdyggMiwgMTAgKiAodC9kIC0gMSkgKSArIGI7XG59O1xuXG5FYXNpbmdzLnByb3RvdHlwZS5lbGFzdGljT3V0U29mdCA9IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0dmFyIHM9MS4wMTU4O3ZhciBwPTA7dmFyIGE9Yztcblx0aWYgKHQ9PTApIHJldHVybiBiOyAgaWYgKCh0Lz1kKT09MSkgcmV0dXJuIGIrYzsgIGlmICghcCkgcD1kKi4zO1xuXHRpZiAoYSA8IE1hdGguYWJzKGMpKSB7IGE9YzsgdmFyIHM9cC80OyB9XG5cdGVsc2UgdmFyIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luIChjL2EpO1xuXHRyZXR1cm4gYSpNYXRoLnBvdygyLC0xMCp0KSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSArIGMgKyBiO1xufVxuXG5FYXNpbmdzLnByb3RvdHlwZS5lYXNlT3V0QmFjayA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XG5cdFx0Ly8gaWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcblx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cdFx0cmV0dXJuIGMqKCh0PXQvZC0xKSp0KigocysxKSp0ICsgcykgKyAxKSArIGI7XG59O1xuXG5FYXNpbmdzLnByb3RvdHlwZS5lYXNlT3V0QmFja1NvZnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xuXHRcdC8vIGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG5cdFx0dmFyIHMgPSAxLjMwMTU4O1xuXHRcdHJldHVybiBjKigodD10L2QtMSkqdCooKHMrMSkqdCArIHMpICsgMSkgKyBiO1xufTtcblxuRWFzaW5ncy5wcm90b3R5cGUuZWxhc3RpY091dCA9IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0dmFyIHM9MS43MDE1ODt2YXIgcD0wO3ZhciBhPWM7XG5cdGlmICh0PT0wKSByZXR1cm4gYjsgIGlmICgodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZiAoIXApIHA9ZCouMztcblx0aWYgKGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHZhciBzPXAvNDsgfVxuXHRlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcblx0cmV0dXJuIGEqTWF0aC5wb3coMiwtMTAqdCkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkgKyBjICsgYjtcbn1cblxuRWFzaW5ncy5wcm90b3R5cGUuZWFzZUluQ3ViaWMgPSBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdHQgLz0gZDtcblx0cmV0dXJuIGMqdCp0KnQgKyBiO1xufTtcblxuRWFzaW5ncy5wcm90b3R5cGUuZWFzZU91dEN1YmljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcblx0dCAvPSBkO1xuXHR0LS07XG5cdHJldHVybiBjKih0KnQqdCArIDEpICsgYjtcbn07XG5cbkVhc2luZ3MucHJvdG90eXBlLmVhc2VJbk91dFNpbmUgPSBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xuXHRyZXR1cm4gLWMvMiAqIChNYXRoLmNvcyhNYXRoLlBJKnQvZCkgLSAxKSArIGI7XG59O1xuXG5FYXNpbmdzLnByb3RvdHlwZS5lYXNlSW5CYWNrID0gZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQsIHMpIHtcblx0aWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcblx0XHRyZXR1cm4gYyoodC89ZCkqdCooKHMrMSkqdCAtIHMpICsgYjtcblx0fTtcblxuRWFzaW5ncy5wcm90b3R5cGUuZWFzZUluT3V0RXhwbyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XG5cdHQgLz0gZC8yO1xuXHRpZiAodCA8IDEpIHJldHVybiBjLzIgKiBNYXRoLnBvdyggMiwgMTAgKiAodCAtIDEpICkgKyBiO1xuXHR0LS07XG5cdHJldHVybiBjLzIgKiAoIC1NYXRoLnBvdyggMiwgLTEwICogdCkgKyAyICkgKyBiO1xufTtcblxuRWFzaW5ncy5wcm90b3R5cGUuZWFzZUluT3V0UXVpbnQgPSBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdHQgLz0gZC8yO1xuXHRpZiAodCA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCp0ICsgYjtcblx0dCAtPSAyO1xuXHRyZXR1cm4gYy8yKih0KnQqdCp0KnQgKyAyKSArIGI7XG59O1xuXG5FYXNpbmdzLnByb3RvdHlwZS5lYXNlSW5PdXRDaXJjID0gZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHR0IC89IGQvMjtcblx0aWYgKHQgPCAxKSByZXR1cm4gLWMvMiAqIChNYXRoLnNxcnQoMSAtIHQqdCkgLSAxKSArIGI7XG5cdHQgLT0gMjtcblx0cmV0dXJuIGMvMiAqIChNYXRoLnNxcnQoMSAtIHQqdCkgKyAxKSArIGI7XG59O1xuXG5FYXNpbmdzLnByb3RvdHlwZS5lYXNlT3V0Q2lyYyA9IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0cmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0PXQvZC0xKSp0KSArIGI7XG59O1xuXG5jb25zdCBpbnN0YW5jZSA9IG5ldyBFYXNpbmdzKClcbnN0YWdlLm9uVXBkYXRlLmFkZCggKGR0KT0+e1xuXHRpbnN0YW5jZS51cGRhdGUoZHQpXG59IClcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Easings.js\n");

/***/ }),

/***/ "./src/js/LoaderAnimation2D.js":
/*!*************************************!*\
  !*** ./src/js/LoaderAnimation2D.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoaderAnimation2D; });\n/* harmony import */ var mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mnf/core/stage */ \"./src/js/mnf/core/stage.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst SIZE = 300;\nclass LoaderAnimation2D {\n  constructor() {\n    _defineProperty(this, \"update\", dt => {\n      if (dt > 25) {\n        return;\n      }\n\n      this.delay -= dt;\n\n      if (this.delay > 0) {\n        return;\n      }\n\n      if (!this.added) {\n        this.added = true;\n        document.body.appendChild(this.canvas);\n      }\n\n      this.ctx.clearRect(0, 0, SIZE, SIZE);\n      this.ctx.globalAlpha = this.lines[0].opacity;\n\n      for (let line of this.lines) {\n        line.angle += 0.1;\n\n        if (this.isOpen) {\n          line.opacity += (1 - line.opacity) * 0.1;\n        } else {\n          line.radius += (150 - line.radius) * .15;\n          line.opacity += (0 - line.opacity) * .2;\n        }\n      }\n\n      if (!this.isOpen && this.lines[0].opacity < 0.001) {\n        this.dispose();\n      }\n\n      this.draw();\n    });\n\n    _defineProperty(this, \"dispose\", () => {\n      this.ctx.clearRect(0, 0, SIZE, SIZE);\n\n      if (this.added) {\n        setTimeout(() => {\n          document.body.removeChild(this.canvas);\n        }, 200);\n      }\n\n      mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onUpdate.remove(this.update);\n    });\n\n    this.canvas = document.createElement('canvas');\n    this.canvas.height = SIZE;\n    this.canvas.width = SIZE;\n    this.canvas.style.transform = 'translate(-50%,-50%)';\n    this.canvas.style.position = 'absolute';\n    this.canvas.style.left = '50%';\n    this.canvas.style.top = '50%';\n    this.canvas.style.zIndex = 10000;\n    this.isOpen = true;\n    this.delay = 200;\n    this.added = false;\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.lines = [{\n      radius: 60,\n      length: 0.7,\n      angle: 0,\n      opacity: 0\n    }, {\n      radius: 60,\n      length: 0.7,\n      angle: Math.PI,\n      opacity: 0\n    }];\n    mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onUpdate.add(this.update);\n  }\n\n  draw() {\n    let s2 = SIZE / 2;\n    this.ctx.clearRect(0, 0, SIZE, SIZE);\n\n    for (let line of this.lines) {\n      let step = line.length / 16;\n      let angle = line.angle;\n      this.ctx.strokeStyle = 'white';\n      this.ctx.beginPath();\n\n      for (let i = 0; i < 16; i++) {\n        this.ctx.moveTo(Math.cos(angle) * line.radius + s2, Math.sin(angle) * line.radius + s2);\n        angle += step;\n        this.ctx.lineTo(Math.cos(angle) * line.radius + s2, Math.sin(angle) * line.radius + s2);\n      }\n\n      this.ctx.stroke();\n    }\n  }\n\n  stop() {\n    this.isOpen = false;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTG9hZGVyQW5pbWF0aW9uMkQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvTG9hZGVyQW5pbWF0aW9uMkQuanM/YmI4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhZ2UgZnJvbSAnbW5mL2NvcmUvc3RhZ2UnXG5jb25zdCBTSVpFID0gMzAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlckFuaW1hdGlvbjJEIHtcblx0XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IFNJWkVcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IFNJWkVcblxuXHRcdHRoaXMuY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwtNTAlKSdcblx0XHR0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcblx0XHR0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gJzUwJSdcblx0XHR0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnNTAlJ1xuXHRcdHRoaXMuY2FudmFzLnN0eWxlLnpJbmRleCA9IDEwMDAwXG5cdFx0dGhpcy5pc09wZW4gPSB0cnVlXG5cblx0XHR0aGlzLmRlbGF5ID0gMjAwXG5cdFx0dGhpcy5hZGRlZCA9IGZhbHNlXG5cdFx0XG5cdFx0dGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcblx0XHR0aGlzLmxpbmVzID0gW1xuXHRcdFx0e3JhZGl1czo2MCwgbGVuZ3RoOjAuNywgYW5nbGU6MCxvcGFjaXR5OjB9LFxuXHRcdFx0e3JhZGl1czo2MCwgbGVuZ3RoOjAuNywgYW5nbGU6TWF0aC5QSSxvcGFjaXR5OjB9XG5cdFx0XVxuXHRcdHN0YWdlLm9uVXBkYXRlLmFkZCh0aGlzLnVwZGF0ZSlcblx0fVxuXG5cdGRyYXcoKXtcblx0XHRsZXQgczIgPSBTSVpFLzJcblx0XHR0aGlzLmN0eC5jbGVhclJlY3QoMCwwLFNJWkUsU0laRSlcblx0XHRmb3IobGV0IGxpbmUgb2YgdGhpcy5saW5lcyl7XG5cdFx0XHRsZXQgc3RlcCA9IGxpbmUubGVuZ3RoLzE2XG5cdFx0XHRsZXQgYW5nbGUgPSBsaW5lLmFuZ2xlXG5cdFx0XHR0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKVxuXHRcdFx0Zm9yKGxldCBpPTA7IGk8IDE2OyBpKyspe1xuXHRcdFx0XHR0aGlzLmN0eC5tb3ZlVG8oIE1hdGguY29zKGFuZ2xlKSpsaW5lLnJhZGl1cytzMiwgTWF0aC5zaW4oYW5nbGUpKmxpbmUucmFkaXVzK3MyIClcblx0XHRcdFx0YW5nbGUrPXN0ZXBcblx0XHRcdFx0dGhpcy5jdHgubGluZVRvKCBNYXRoLmNvcyhhbmdsZSkqbGluZS5yYWRpdXMrczIsIE1hdGguc2luKGFuZ2xlKSpsaW5lLnJhZGl1cytzMiApXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN0eC5zdHJva2UoKVxuXHRcdH1cblxuXHR9XG5cblx0dXBkYXRlPShkdCk9Pntcblx0XHRpZihkdD4yNSl7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0dGhpcy5kZWxheS09ZHQ7XG5cdFx0aWYodGhpcy5kZWxheT4wKXtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZighdGhpcy5hZGRlZCl7XG5cdFx0XHR0aGlzLmFkZGVkID0gdHJ1ZVxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcdFx0XHRcblx0XHR9XG5cdFx0dGhpcy5jdHguY2xlYXJSZWN0KDAsMCxTSVpFLFNJWkUpXG5cdFx0dGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmxpbmVzWzBdLm9wYWNpdHlcblxuXHRcdGZvcihsZXQgbGluZSBvZiB0aGlzLmxpbmVzKXtcblx0XHRcdGxpbmUuYW5nbGUrPTAuMVxuXHRcdFx0aWYodGhpcy5pc09wZW4pe1xuXHRcdFx0XHRsaW5lLm9wYWNpdHkrPSgxLWxpbmUub3BhY2l0eSkqMC4xXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaW5lLnJhZGl1cys9KDE1MC1saW5lLnJhZGl1cykqLjE1XG5cdFx0XHRcdGxpbmUub3BhY2l0eSs9KDAtbGluZS5vcGFjaXR5KSouMlxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZighdGhpcy5pc09wZW4gJiYgdGhpcy5saW5lc1swXS5vcGFjaXR5PDAuMDAxKXtcblx0XHRcdHRoaXMuZGlzcG9zZSgpXG5cdFx0fVxuXHRcdHRoaXMuZHJhdygpXG5cdH1cblxuXHRzdG9wKCl7XG5cdFx0dGhpcy5pc09wZW4gPSBmYWxzZVxuXHR9XG5cblx0ZGlzcG9zZT0oKT0+e1xuXHRcdHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsU0laRSxTSVpFKVxuXHRcdGlmKHRoaXMuYWRkZWQpe1xuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY2FudmFzKVxuXHRcdFx0fSwyMDApXG5cdFx0fVxuXHRcdHN0YWdlLm9uVXBkYXRlLnJlbW92ZSh0aGlzLnVwZGF0ZSlcblx0fVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBdEVBO0FBNEVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFuRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUE1RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/LoaderAnimation2D.js\n");

/***/ }),

/***/ "./src/js/Preloader.js":
/*!*****************************!*\
  !*** ./src/js/Preloader.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mnf/core/stage */ \"./src/js/mnf/core/stage.js\");\n/* harmony import */ var LoaderAnimation2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! LoaderAnimation2D */ \"./src/js/LoaderAnimation2D.js\");\n/* harmony import */ var Easings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Easings */ \"./src/js/Easings.js\");\n// Start here\n// import CSS3DRenderer from 'THREE.CSS3DRenderer.js'\n\n\n\nlet stageCSS = null;\nlet Ressources = null;\nlet Main = null;\nlet main = null;\n\nclass Preloader {\n  constructor() {\n    let c = \"\t,--.\\n\";\n    c += \"\t()   \\\\ \\n\";\n    c += \"\t /    \\\\ \\n\";\n    c += \"   _/______\\\\_\\n\";\n    c += \"  (__________)\\n\";\n    c += \"  (/  @  @  \\)\\n\";\n    c += \"  (`._,()._,')\\n\";\n    c += \"  (  `-'`-'  )\\n\";\n    c += \"   \\\\        / \\n\";\n    c += \"\t\\\\,,,,,,/  \\n\";\n    console.log(c);\n    console.log(`%cWelcome to the real world.\\n`, 'background: #F66; color: #FFF');\n    this.loader2d = new LoaderAnimation2D__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.loadCSS3D();\n  }\n\n  loadCSS3D() {\n    Promise.all(/*! require.ensure */[__webpack_require__.e(0), __webpack_require__.e(7)]).then((() => {\n      this.loader2d.stop();\n      stageCSS = __webpack_require__(/*! stageCSS */ \"./src/js/stageCSS.js\").default;\n      Ressources = __webpack_require__(/*! Ressources */ \"./src/js/Ressources.js\").default;\n      Ressources.onLoad.add(() => {\n        this.playCSS3D();\n        this.loadMain();\n      });\n      Ressources.load(['./img/logo-full.svg', './img/bg2.jpg']);\n    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n  }\n\n  playCSS3D() {\n    stageCSS.activate = true;\n  }\n\n  loadMain() {\n    Promise.all(/*! require.ensure */[__webpack_require__.e(6), __webpack_require__.e(4)]).then((() => {\n      Main = __webpack_require__(/*! Main */ \"./src/js/Main.js\").default;\n      main = new Main();\n    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Preloader());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvUHJlbG9hZGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1ByZWxvYWRlci5qcz81OThhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0YXJ0IGhlcmVcbi8vIGltcG9ydCBDU1MzRFJlbmRlcmVyIGZyb20gJ1RIUkVFLkNTUzNEUmVuZGVyZXIuanMnXG5pbXBvcnQgc3RhZ2UgZnJvbSAnbW5mL2NvcmUvc3RhZ2UnXG5pbXBvcnQgTG9hZGVyQW5pbWF0aW9uMkQgZnJvbSAnTG9hZGVyQW5pbWF0aW9uMkQnXG5pbXBvcnQgRWFzaW5ncyBmcm9tIFwiRWFzaW5nc1wiXG5cbmxldCBzdGFnZUNTUyA9IG51bGxcbmxldCBSZXNzb3VyY2VzID0gbnVsbFxubGV0IE1haW4gPSBudWxsXG5sZXQgbWFpbiA9IG51bGxcblxuY2xhc3MgUHJlbG9hZGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGMgPSBcIlx0LC0tLlxcblwiIFxuXHRcdGMrPVx0XHRcIlx0KCkgICBcXFxcIFxcblwiXG5cdFx0Yys9XHRcdFwiXHQgLyAgICBcXFxcIFxcblwiXG5cdFx0Yys9XHRcdFwiICAgXy9fX19fX19cXFxcX1xcblwiXG5cdFx0Yys9XHRcdFwiICAoX19fX19fX19fXylcXG5cIlxuXHRcdGMrPVx0XHRcIiAgKC8gIEAgIEAgIFxcKVxcblwiXG5cdFx0Yys9XHRcdFwiICAoYC5fLCgpLl8sJylcXG5cIlxuXHRcdGMrPVx0XHRcIiAgKCAgYC0nYC0nICApXFxuXCJcblx0XHRjKz1cdFx0XCIgICBcXFxcICAgICAgICAvIFxcblwiXG5cdFx0Yys9XHRcdFwiXHRcXFxcLCwsLCwsLyAgXFxuXCJcblx0XHRjb25zb2xlLmxvZyhjKVxuXHRcdGNvbnNvbGUubG9nKGAlY1dlbGNvbWUgdG8gdGhlIHJlYWwgd29ybGQuXFxuYCwgJ2JhY2tncm91bmQ6ICNGNjY7IGNvbG9yOiAjRkZGJylcblxuXHRcdHRoaXMubG9hZGVyMmQgPSBuZXcgTG9hZGVyQW5pbWF0aW9uMkQoKVxuXHRcdHRoaXMubG9hZENTUzNEKClcblx0fVxuXG5cdGxvYWRDU1MzRCgpe1xuXHRcdHJlcXVpcmUuZW5zdXJlKFsnc3RhZ2VDU1MnLCdSZXNzb3VyY2VzJ10sKCk9Pntcblx0XHRcdHRoaXMubG9hZGVyMmQuc3RvcCgpXG5cdFx0XHRzdGFnZUNTUyA9IHJlcXVpcmUoICdzdGFnZUNTUycgKS5kZWZhdWx0XG5cdFx0XHRSZXNzb3VyY2VzID0gcmVxdWlyZSggJ1Jlc3NvdXJjZXMnICkuZGVmYXVsdFxuXHRcdFx0UmVzc291cmNlcy5vbkxvYWQuYWRkKCgpPT57XG5cdFx0XHRcdHRoaXMucGxheUNTUzNEKClcblx0XHRcdFx0dGhpcy5sb2FkTWFpbigpXG5cdFx0XHR9KVxuXHRcdFx0UmVzc291cmNlcy5sb2FkKFtcblx0XHRcdFx0Jy4vaW1nL2xvZ28tZnVsbC5zdmcnLFxuXHRcdFx0XHQnLi9pbWcvYmcyLmpwZydcblx0XHRcdF0pXG5cdFx0fSlcblx0fVxuXG5cdHBsYXlDU1MzRCgpe1xuXHRcdHN0YWdlQ1NTLmFjdGl2YXRlID0gdHJ1ZVxuXHR9XG5cblx0bG9hZE1haW4oKXtcblx0XHRyZXF1aXJlLmVuc3VyZShbJ01haW4nXSwoKT0+e1xuXHRcdFx0TWFpbiA9IHJlcXVpcmUoICdNYWluJyApLmRlZmF1bHRcblx0XHRcdG1haW4gPSBuZXcgTWFpbigpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJlbG9hZGVyKClcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTtBQUNBO0FBOENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Preloader.js\n");

/***/ }),

/***/ "./src/js/mnf/core/stage.js":
/*!**********************************!*\
  !*** ./src/js/mnf/core/stage.js ***!
  \**********************************/
/*! exports provided: default, stage, StageClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stage\", function() { return stage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StageClass\", function() { return StageClass; });\n/* harmony import */ var mnf_utils_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mnf/utils/now */ \"./src/js/mnf/utils/now.js\");\n/* harmony import */ var mnf_events_Signal2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mnf/events/Signal2 */ \"./src/js/mnf/events/Signal2.js\");\n/* harmony import */ var mnf_utils_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mnf/utils/timeout */ \"./src/js/mnf/utils/timeout.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass StageClass {\n  constructor() {\n    let andInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n    _defineProperty(this, \"onResizeWithDelay\", () => {\n      if (this.tiId) {\n        Object(mnf_utils_timeout__WEBPACK_IMPORTED_MODULE_2__[\"clear\"])(this.tiId);\n      }\n\n      this.tiId = Object(mnf_utils_timeout__WEBPACK_IMPORTED_MODULE_2__[\"timeout\"])(this.onResizeWithoutDelay, 32);\n    });\n\n    _defineProperty(this, \"onResizeWithoutDelay\", () => {\n      this.width = window.innerWidth;\n      this.height = window.innerHeight;\n      this.onResize.dispatch();\n    });\n\n    _defineProperty(this, \"update\", () => {\n      let t = Object(mnf_utils_now__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      let dt = t - this.lastTime;\n      this.lastTime = t;\n      requestAnimationFrame(this.update);\n\n      if (this.skipActivated && dt > this.skipLimit || this.pause) {\n        return;\n      }\n\n      this.onUpdate.dispatch(dt);\n    });\n\n    this.skipLimit = 32;\n    this.skipActivated = false;\n    this.pause = false;\n    this.lastTime = Object(mnf_utils_now__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    this.tiId = null;\n    this.width = 0;\n    this.height = 0;\n    this.pixelRatio = window.devicePixelRatio;\n    this.onResize = new mnf_events_Signal2__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.onUpdate = new mnf_events_Signal2__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n    if (andInit) {\n      this.init();\n    }\n  }\n\n  init() {\n    let andDispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    window.addEventListener(\"resize\", this.onResizeWithDelay, false);\n    window.addEventListener(\"orientationchange\", this.onResizeWithDelay, false);\n\n    if (andDispatch) {\n      this.onResizeWithoutDelay();\n    }\n\n    requestAnimationFrame(this.update);\n  }\n\n  forceResize() {\n    let withDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n    if (withDelay) {\n      this.onResizeWithDelay();\n      return;\n    }\n\n    this.onResizeWithoutDelay();\n  }\n\n}\n\nconst stage = new StageClass();\n/* harmony default export */ __webpack_exports__[\"default\"] = (stage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW5mL2NvcmUvc3RhZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW5mL2NvcmUvc3RhZ2UuanM/MWQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm93IGZyb20gJ21uZi91dGlscy9ub3cnXG5pbXBvcnQgU2lnbmFsIGZyb20gJ21uZi9ldmVudHMvU2lnbmFsMidcbmltcG9ydCB7IGNsZWFyIGFzIGNsZWFyVGltZW91dCwgdGltZW91dCB9IGZyb20gJ21uZi91dGlscy90aW1lb3V0J1xuXG5jbGFzcyBTdGFnZUNsYXNzIHtcblxuXHRjb25zdHJ1Y3RvciggYW5kSW5pdCA9IHRydWUgKSB7XG5cblx0XHR0aGlzLnNraXBMaW1pdCA9IDMyXG5cdFx0dGhpcy5za2lwQWN0aXZhdGVkICA9IGZhbHNlXG5cdFx0dGhpcy5wYXVzZSA9IGZhbHNlXG5cdFx0dGhpcy5sYXN0VGltZSA9IG5vdygpXG5cdFx0dGhpcy50aUlkID0gbnVsbFxuXHRcdHRoaXMud2lkdGggPSAwXG5cdFx0dGhpcy5oZWlnaHQgPSAwXG5cdFx0dGhpcy5waXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW9cblx0XHR0aGlzLm9uUmVzaXplID0gbmV3IFNpZ25hbCgpXG5cdFx0dGhpcy5vblVwZGF0ZSA9IG5ldyBTaWduYWwoKVxuXG5cdFx0aWYoIGFuZEluaXQgKSB7XG5cdFx0XHR0aGlzLmluaXQoKVxuXHRcdH1cblx0fVxuXG5cdGluaXQoIGFuZERpc3BhdGNoID0gdHJ1ZSApIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZVdpdGhEZWxheSwgZmFsc2UgKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcIm9yaWVudGF0aW9uY2hhbmdlXCIsIHRoaXMub25SZXNpemVXaXRoRGVsYXksIGZhbHNlIClcblxuXHRcdGlmKCBhbmREaXNwYXRjaCApIHtcblx0XHRcdHRoaXMub25SZXNpemVXaXRob3V0RGVsYXkoKVxuXHRcdH1cblxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy51cGRhdGUgKVxuXHR9XG5cblx0b25SZXNpemVXaXRoRGVsYXkgPSAoKSA9PiB7XG5cdFx0aWYoIHRoaXMudGlJZCApIHtcblx0XHRcdGNsZWFyVGltZW91dCggdGhpcy50aUlkIClcblx0XHR9XG5cdFx0dGhpcy50aUlkID0gdGltZW91dCggdGhpcy5vblJlc2l6ZVdpdGhvdXREZWxheSwgMzIgKVxuXHR9XG5cblx0b25SZXNpemVXaXRob3V0RGVsYXkgPSAoKSA9PiB7XG5cdFx0dGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHR0aGlzLm9uUmVzaXplLmRpc3BhdGNoKClcblx0fVxuXG5cdGZvcmNlUmVzaXplKCB3aXRoRGVsYXkgPSBmYWxzZSApIHtcblx0XHRpZiggd2l0aERlbGF5ICkge1xuXHRcdFx0dGhpcy5vblJlc2l6ZVdpdGhEZWxheSgpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0dGhpcy5vblJlc2l6ZVdpdGhvdXREZWxheSgpXG5cdH1cblxuXHR1cGRhdGUgPSAoKSA9PiB7XG5cdFx0bGV0IHQgPSBub3coKVxuXHRcdGxldCBkdCA9IHQgLSB0aGlzLmxhc3RUaW1lXG5cdFx0dGhpcy5sYXN0VGltZSA9IHRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMudXBkYXRlIClcblx0XHRpZiggKHRoaXMuc2tpcEFjdGl2YXRlZCAmJiBkdCA+IHRoaXMuc2tpcExpbWl0KSB8fCB0aGlzLnBhdXNlKXtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHR0aGlzLm9uVXBkYXRlLmRpc3BhdGNoKCBkdCApXG5cdH1cbn1cblxuY29uc3Qgc3RhZ2UgPSBuZXcgU3RhZ2VDbGFzcygpXG5leHBvcnQgZGVmYXVsdCBzdGFnZVxuZXhwb3J0IHtzdGFnZSwgU3RhZ2VDbGFzc31cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFuQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUExREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBbkRBO0FBQ0E7QUErREE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/mnf/core/stage.js\n");

/***/ }),

/***/ "./src/js/mnf/events/Signal2.js":
/*!**************************************!*\
  !*** ./src/js/mnf/events/Signal2.js ***!
  \**************************************/
/*! exports provided: default, Signal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Signal\", function() { return Signal2; });\nclass Signal2 {\n  constructor() {\n    this.listeners = [];\n    this.listenersOnce = [];\n  }\n\n  add(listener) {\n    this.listeners.push(listener);\n  }\n\n  remove(listener) {\n    const idx = this.listeners.indexOf(listener);\n\n    if (idx != -1) {\n      this.listeners.splice(idx, 1);\n    }\n  }\n\n  addOnce(listener) {\n    this.listenersOnce.push(listener);\n  }\n\n  dispatch(params) {\n    if (this.listenersOnce.length > 0) {\n      for (let i = this.listenersOnce.length - 1; i > -1; i--) {\n        this.listenersOnce[i](params);\n      }\n\n      this.listenersOnce = [];\n    }\n\n    for (let i = this.listeners.length - 1; i > -1; i--) {\n      this.listeners[i](params);\n    }\n  }\n\n  removeAll() {\n    this.listeners = [];\n    this.listenersOnce = [];\n  }\n\n  dispose() {\n    this.listeners = null;\n    this.listenersOnce = null;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signal2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW5mL2V2ZW50cy9TaWduYWwyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21uZi9ldmVudHMvU2lnbmFsMi5qcz8zYWMzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNpZ25hbDIge1xuXG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5saXN0ZW5lcnMgPSBbXVxuXHRcdHRoaXMubGlzdGVuZXJzT25jZSA9IFtdXG5cdH1cblxuXHRhZGQobGlzdGVuZXIpe1xuXHRcdHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG5cdH1cblxuXHRyZW1vdmUobGlzdGVuZXIpe1xuXHRcdGNvbnN0IGlkeCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG5cdFx0aWYoaWR4IT0tMSl7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zcGxpY2UoaWR4LDEpXG5cdFx0fVxuXHR9XG5cblx0YWRkT25jZShsaXN0ZW5lcil7XG5cdFx0dGhpcy5saXN0ZW5lcnNPbmNlLnB1c2gobGlzdGVuZXIpXG5cdH1cblxuXHRkaXNwYXRjaChwYXJhbXMpe1xuXHRcdGlmKHRoaXMubGlzdGVuZXJzT25jZS5sZW5ndGg+MCl7XG5cdFx0XHRmb3IobGV0IGkgPSB0aGlzLmxpc3RlbmVyc09uY2UubGVuZ3RoLTE7IGk+LTE7IGktLSl7XG5cdFx0XHRcdHRoaXMubGlzdGVuZXJzT25jZVtpXShwYXJhbXMpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3RlbmVyc09uY2UgPSBbXVxuXHRcdH1cblx0XHRmb3IobGV0IGkgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGgtMTsgaT4tMTsgaS0tKXtcblx0XHRcdHRoaXMubGlzdGVuZXJzW2ldKHBhcmFtcylcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVBbGwoKXtcblx0XHR0aGlzLmxpc3RlbmVycyA9IFtdXG5cdFx0dGhpcy5saXN0ZW5lcnNPbmNlID0gW11cblx0fVxuXG5cdGRpc3Bvc2UoKXtcblx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGxcblx0XHR0aGlzLmxpc3RlbmVyc09uY2UgPSBudWxsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsMiBcbmV4cG9ydCB7U2lnbmFsMiBhcyBTaWduYWx9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQUNBO0FBNENBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/mnf/events/Signal2.js\n");

/***/ }),

/***/ "./src/js/mnf/utils/now.js":
/*!*********************************!*\
  !*** ./src/js/mnf/utils/now.js ***!
  \*********************************/
/*! exports provided: default, now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"now\", function() { return now; });\nlet now;\n\nif (window && window.performance) {\n  now = () => {\n    return performance.now();\n  };\n} else {\n  now = () => {\n    return date.now();\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (now);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW5mL3V0aWxzL25vdy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tbmYvdXRpbHMvbm93LmpzPzNlMzMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG5vd1xuaWYoIHdpbmRvdyAmJiB3aW5kb3cucGVyZm9ybWFuY2UgKXtcblx0bm93ID0gKCk9PntyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9XG59IGVsc2V7XG5cdG5vdyA9ICgpPT57cmV0dXJuIGRhdGUubm93KCl9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5vd1xuZXhwb3J0IHtub3d9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/mnf/utils/now.js\n");

/***/ }),

/***/ "./src/js/mnf/utils/timeout.js":
/*!*************************************!*\
  !*** ./src/js/mnf/utils/timeout.js ***!
  \*************************************/
/*! exports provided: default, clear, pause, resume, timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear\", function() { return clear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pause\", function() { return pause; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resume\", function() { return resume; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeout\", function() { return timeout; });\n/* harmony import */ var mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mnf/core/stage */ \"./src/js/mnf/core/stage.js\");\n\n\nfunction timeout(fn, delay) {\n  let f = dt => {\n    delay -= dt;\n\n    if (delay <= 0) {\n      fn.call();\n      mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onUpdate.remove(f);\n    }\n  };\n\n  mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onUpdate.add(f);\n  return f;\n}\n\nfunction pause(f) {\n  mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onUpdate.remove(f);\n}\n\nfunction resume(f) {\n  mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onUpdate.add(f);\n}\n\nfunction clear(f) {\n  mnf_core_stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onUpdate.remove(f);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (timeout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW5mL3V0aWxzL3RpbWVvdXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW5mL3V0aWxzL3RpbWVvdXQuanM/NDlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhZ2UgZnJvbSAnbW5mL2NvcmUvc3RhZ2UnXG5cbmZ1bmN0aW9uIHRpbWVvdXQoIGZuLCBkZWxheSApIHtcblx0bGV0IGYgPSAoZHQpPT57XG5cdFx0ZGVsYXkgLT0gZHRcblx0XHRpZiggZGVsYXkgPD0gMCApe1xuXHRcdFx0Zm4uY2FsbCgpXG5cdFx0XHRzdGFnZS5vblVwZGF0ZS5yZW1vdmUoZilcblx0XHR9XG5cdH1cblx0c3RhZ2Uub25VcGRhdGUuYWRkKGYpXG5cdHJldHVybiBmXG59XG5cbmZ1bmN0aW9uIHBhdXNlKCBmICkge1xuXHRzdGFnZS5vblVwZGF0ZS5yZW1vdmUoIGYgKVxufVxuXG5mdW5jdGlvbiByZXN1bWUoIGYgKSB7XG5cdHN0YWdlLm9uVXBkYXRlLmFkZCggZiApXG59XG5cbmZ1bmN0aW9uIGNsZWFyKCBmICkge1xuXHRzdGFnZS5vblVwZGF0ZS5yZW1vdmUoIGYgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lb3V0XG5leHBvcnQgeyBjbGVhciwgcGF1c2UsIHJlc3VtZSwgdGltZW91dCB9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/mnf/utils/timeout.js\n");

/***/ })

/******/ });