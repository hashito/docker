module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/hashito/git/docker/next.js/003/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //import document, { Html, Head, Main, NextScript } from 'next/document'\n\nconst bodyPix = __webpack_require__(/*! @tensorflow-models/body-pix */ \"@tensorflow-models/body-pix\");\n\nasync function loadAndPredict() {\n  const img = document.getElementById('image');\n  const net = await bodyPix.load();\n  /**\n   * One of (see documentation below):\n   *   - net.segmentPerson\n   *   - net.segmentPersonParts\n   *   - net.segmentMultiPerson\n   *   - net.segmentMultiPersonParts\n   * See documentation below for details on each method.\n    */\n\n  const segmentation = await net.segmentPerson(img);\n  console.log(segmentation);\n}\n\nloadAndPredict();\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return __jsx(\"html\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 8\n    }\n  }, __jsx(\"head\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 1\n    }\n  }, __jsx(\"script\", {\n    src: \"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 3\n    }\n  }), __jsx(\"script\", {\n    src: \"https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 3\n    }\n  })), __jsx(\"body\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 1\n    }\n  }, __jsx(\"img\", {\n    id: \"image\",\n    src: \"images/person.jpg\",\n    crossOrigin: \"anonymous\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 3\n    }\n  })), __jsx(\"script\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 1\n    }\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJib2R5UGl4IiwicmVxdWlyZSIsImxvYWRBbmRQcmVkaWN0IiwiaW1nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5ldCIsImxvYWQiLCJzZWdtZW50YXRpb24iLCJzZWdtZW50UGVyc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FDQTs7QUFDQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsZ0VBQUQsQ0FBdkI7O0FBR0EsZUFBZUMsY0FBZixHQUFnQztBQUM1QixRQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1OLE9BQU8sQ0FBQ08sSUFBUixFQUFsQjtBQUVGO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsUUFBTUMsWUFBWSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csYUFBSixDQUFrQk4sR0FBbEIsQ0FBM0I7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVlILFlBQVo7QUFDRDs7QUFDRE4sY0FBYztBQUdDLHFFQUFNO0FBQ3JCLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE9BQUcsRUFBQyxtREFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFRLE9BQUcsRUFBQyw4REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FETyxFQU1QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLE9BQUcsRUFBQyxtQkFBcEI7QUFBd0MsZUFBVyxFQUFDLFdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5PLEVBU1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRPLENBQVA7QUFhQyxDQWREIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9pbXBvcnQgZG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5jb25zdCBib2R5UGl4ID0gcmVxdWlyZSgnQHRlbnNvcmZsb3ctbW9kZWxzL2JvZHktcGl4Jyk7XG5cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEFuZFByZWRpY3QoKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlJyk7XG4gICAgY29uc3QgbmV0ID0gYXdhaXQgYm9keVBpeC5sb2FkKC8qKiBvcHRpb25hbCBhcmd1bWVudHMsIHNlZSBiZWxvdyAqKi8pO1xuXG4gIC8qKlxuICAgKiBPbmUgb2YgKHNlZSBkb2N1bWVudGF0aW9uIGJlbG93KTpcbiAgICogICAtIG5ldC5zZWdtZW50UGVyc29uXG4gICAqICAgLSBuZXQuc2VnbWVudFBlcnNvblBhcnRzXG4gICAqICAgLSBuZXQuc2VnbWVudE11bHRpUGVyc29uXG4gICAqICAgLSBuZXQuc2VnbWVudE11bHRpUGVyc29uUGFydHNcbiAgICogU2VlIGRvY3VtZW50YXRpb24gYmVsb3cgZm9yIGRldGFpbHMgb24gZWFjaCBtZXRob2QuXG4gICAgKi9cbiAgY29uc3Qgc2VnbWVudGF0aW9uID0gYXdhaXQgbmV0LnNlZ21lbnRQZXJzb24oaW1nKTtcbiAgY29uc29sZS5sb2coc2VnbWVudGF0aW9uKTtcbn1cbmxvYWRBbmRQcmVkaWN0KCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xucmV0dXJuIDxodG1sPlxuPGhlYWQ+XG4gIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AdGVuc29yZmxvdy90ZmpzQDEuMlwiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHRlbnNvcmZsb3ctbW9kZWxzL2JvZHktcGl4QDIuMFwiPjwvc2NyaXB0PlxuPC9oZWFkPlxuXG48Ym9keT5cbiAgPGltZyBpZD0naW1hZ2UnIHNyYz0naW1hZ2VzL3BlcnNvbi5qcGcnIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnLz5cbjwvYm9keT5cbjxzY3JpcHQ+XG48L3NjcmlwdD5cbjwvaHRtbD5cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@tensorflow-models/body-pix":
/*!**********************************************!*\
  !*** external "@tensorflow-models/body-pix" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@tensorflow-models/body-pix\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy1tb2RlbHMvYm9keS1waXhcIj8wNzFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkB0ZW5zb3JmbG93LW1vZGVscy9ib2R5LXBpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0ZW5zb3JmbG93LW1vZGVscy9ib2R5LXBpeFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@tensorflow-models/body-pix\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });