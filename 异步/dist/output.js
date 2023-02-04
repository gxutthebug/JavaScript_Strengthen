/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _microtask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microtask.js */ \"./src/microtask.js\");\n/* harmony import */ var _microtask_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microtask_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://asynchronization/./src/index.js?");

/***/ }),

/***/ "./src/microtask.js":
/*!**************************!*\
  !*** ./src/microtask.js ***!
  \**************************/
/***/ (() => {

eval("/*JS引擎是单线程的，直白来说就是一个时间点下JS引擎只能去做一件事情，而Java这种多线程语言，可以同时做几件事情。\r\nJS做的任务分为同步和异步两种，所谓 \"异步\"，简单说就是一个任务不是连续完成的，先执行第一段，等做好了准备，再回\r\n过头执行第二段，第二段也被叫做回调；同步则是连贯完成的。像读取文件、网络请求这种任务属于异步任务：\r\n花费时间很长，但中间的操作不需要JS引擎自己完成，它只用等别人准备好了，把数据给他，他再继续执行回调部分。\r\n */\r\n\r\n// 微任务\r\nconsole.log(\"111\")\r\n\r\nsetTimeout(() =>{\r\n    console.log(\"222\")\r\n},0)\r\n\r\nPromise.resolve(\"333\").\r\nthen( value => {\r\n  console.log(value) \r\n})\r\n\r\nPromise.resolve(\"444\").\r\nthen( value => {\r\n  console.log(value) \r\n})\r\n\r\nPromise.resolve(\"555\").\r\nthen( value => {\r\n  console.log(value) \r\n})\r\n\r\nconsole.log('777')\r\n\r\n//console.log('---------------------------------------------------------------------------------------------------------------------')\r\n\r\nPromise.resolve().then(()=>{\r\n    console.log('第一个回调函数：微任务1')  \r\n    setTimeout(()=>{\r\n      console.log('第三个回调函数：宏任务2')\r\n    },0)\r\n  })\r\n  setTimeout(()=>{\r\n    console.log('第二个回调函数：宏任务1')\r\n    Promise.resolve().then(()=>{\r\n      console.log('第四个回调函数：微任务2')   \r\n    })\r\n  },0)\r\n  \r\n\n\n//# sourceURL=webpack://asynchronization/./src/microtask.js?");

/***/ })

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;