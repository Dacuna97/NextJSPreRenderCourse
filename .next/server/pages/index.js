/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/diegoacuna/Documents/Courses/NextJSPreRenderCourse/pages/index.js\";\n\n\n\nfunction Home({\n  products\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n    children: products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: `/${product.id}`,\n        children: product.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, this)\n    }, product.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps(context) {\n  console.log('(Re-)Generating...');\n  const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'dummy-backend.json');\n  const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(filePath);\n  const data = JSON.parse(jsonData);\n\n  if (!data) {\n    return {\n      redirect: {\n        destination: '/no-data'\n      }\n    };\n  }\n\n  if (data.products.length === 0) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      products: data.products\n    },\n    revalidate: 10 // only matters in production to regenerate the page\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLXByZS1yZW5kZXItY291cnNlLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlUGF0aCIsInBhdGgiLCJwcm9jZXNzIiwiY3dkIiwianNvbkRhdGEiLCJmcyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwibGVuZ3RoIiwibm90Rm91bmQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBNEI7QUFDekMsc0JBQ0U7QUFBQSxjQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBY0MsT0FBRCxpQkFDWjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLElBQUdBLE9BQU8sQ0FBQ0MsRUFBRyxFQUEzQjtBQUFBLGtCQUErQkQsT0FBTyxDQUFDRTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBU0YsT0FBTyxDQUFDQyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDtBQUVNLGVBQWVFLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsZ0RBQUEsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsb0JBQWpDLENBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLDJEQUFBLENBQVlMLFFBQVosQ0FBdkI7QUFDQSxRQUFNTSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixRQUFYLENBQWI7O0FBRUEsTUFBSSxDQUFDRSxJQUFMLEVBQVc7QUFDVCxXQUFPO0FBQ0xHLGNBQVEsRUFBRTtBQUNSQyxtQkFBVyxFQUFFO0FBREw7QUFETCxLQUFQO0FBS0Q7O0FBRUQsTUFBSUosSUFBSSxDQUFDZixRQUFMLENBQWNvQixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCLFdBQU87QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBUDtBQUNEOztBQUVELFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0x0QixjQUFRLEVBQUVlLElBQUksQ0FBQ2Y7QUFEVixLQURGO0FBSUx1QixjQUFVLEVBQUUsRUFKUCxDQUlVOztBQUpWLEdBQVA7QUFNRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgPGxpIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QudGl0bGV9PC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc29sZS5sb2coJyhSZS0pR2VuZXJhdGluZy4uLicpO1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdkdW1teS1iYWNrZW5kLmpzb24nKTtcbiAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCk7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvbm8tZGF0YSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKGRhdGEucHJvZHVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgbm90Rm91bmQ6IHRydWUgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RzOiBkYXRhLnByb2R1Y3RzXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCAvLyBvbmx5IG1hdHRlcnMgaW4gcHJvZHVjdGlvbiB0byByZWdlbmVyYXRlIHRoZSBwYWdlXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("fs/promises");;

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Link");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();