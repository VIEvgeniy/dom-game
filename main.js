/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

// TODO: write code here

console.log("start");

// const img = document.documentElement.children[1].children[0];

// img.style.cssText = "position:absolute;";
// let cellWidth = document.documentElement.clientWidth >> 2;
// let cellHeight = document.documentElement.clientHeight >> 2;
let posX = Math.round(3 * Math.random());
let posY = Math.round(3 * Math.random());
// let coordX = cellWidth * posX;
// let coordY = cellHeight * posY;
const table = document.documentElement.children[1].children[0];
table.children[posY].children[posX].children[0].style.visibility = "visible";
setInterval(() => {
  // cellWidth = document.documentElement.clientWidth >> 2;
  // cellHeight = document.documentElement.clientHeight >> 2;
  let newPosX = Math.round(3 * Math.random());
  let newPosY = Math.round(3 * Math.random());
  while (posX == newPosX && posY == newPosY) {
    if (posX == newPosX) newPosX = Math.round(3 * Math.random());
    if (posY == newPosY) newPosY = Math.round(3 * Math.random());
  }
  table.children[posY].children[posX].children[0].style.visibility = "hidden";
  table.children[newPosY].children[newPosX].children[0].style.visibility = "visible";
  posX = newPosX;
  posY = newPosY;
  // coordX = cellWidth * posX;
  // coordY = cellHeight * posY;
  // img.style.left = coordX + "px";
  // img.style.top = coordY + "px";
  // console.log("pos: ", posX, ", ", posY);
}, 500);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);



// TODO: write your code in app.js
})();

/******/ })()
;