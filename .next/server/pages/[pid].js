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
exports.id = "pages/[pid]";
exports.ids = ["pages/[pid]"];
exports.modules = {

/***/ "./pages/[pid].js":
/*!************************!*\
  !*** ./pages/[pid].js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/diegoacuna/Documents/Courses/NextJSPreRenderCourse/pages/[pid].js\";\n\n\n\n\nfunction ProductDetailPage({\n  product\n}) {\n  if (!product) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Loading ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: product.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\nasync function getData() {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'data', 'dummy-backend.json');\n  const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().readFile(filePath);\n  const data = JSON.parse(jsonData);\n  return data;\n}\n\nasync function getStaticProps(context) {\n  const {\n    params\n  } = context;\n  const productId = params.pid;\n  const data = await getData();\n  const product = data.products.find(product => product.id === productId);\n\n  if (!product) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      product\n    }\n  };\n}\nasync function getStaticPaths() {\n  const data = await getData();\n  const ids = data.products.map(product => product.id);\n  const pathsWithParams = ids.map(id => ({\n    params: {\n      pid: id\n    }\n  }));\n  return {\n    paths: pathsWithParams,\n    // fallback: 'blocking'\n    fallback: true // fallback: false\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLXByZS1yZW5kZXItY291cnNlLy4vcGFnZXMvW3BpZF0uanM/ODhiZCJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlsUGFnZSIsInByb2R1Y3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0RGF0YSIsImZpbGVQYXRoIiwicGF0aCIsInByb2Nlc3MiLCJjd2QiLCJqc29uRGF0YSIsImZzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInBhcmFtcyIsInByb2R1Y3RJZCIsInBpZCIsInByb2R1Y3RzIiwiZmluZCIsImlkIiwibm90Rm91bmQiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiaWRzIiwibWFwIiwicGF0aHNXaXRoUGFyYW1zIiwicGF0aHMiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCO0FBQUVDO0FBQUYsQ0FBM0IsRUFBd0M7QUFDdEMsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0UsOERBQUMsMkNBQUQ7QUFBQSw0QkFDRTtBQUFBLGdCQUFLQSxPQUFPLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSUQsT0FBTyxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUVELGVBQWVDLE9BQWYsR0FBeUI7QUFDdkIsUUFBTUMsUUFBUSxHQUFHQyxnREFBQSxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixFQUFpQyxvQkFBakMsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsMkRBQUEsQ0FBWUwsUUFBWixDQUF2QjtBQUNBLFFBQU1NLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFFBQVgsQ0FBYjtBQUVBLFNBQU9FLElBQVA7QUFDRDs7QUFFTSxlQUFlRyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QyxRQUFNO0FBQUVDO0FBQUYsTUFBYUQsT0FBbkI7QUFFQSxRQUFNRSxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsR0FBekI7QUFFQSxRQUFNUCxJQUFJLEdBQUcsTUFBTVAsT0FBTyxFQUExQjtBQUVBLFFBQU1ILE9BQU8sR0FBR1UsSUFBSSxDQUFDUSxRQUFMLENBQWNDLElBQWQsQ0FBb0JuQixPQUFELElBQWFBLE9BQU8sQ0FBQ29CLEVBQVIsS0FBZUosU0FBL0MsQ0FBaEI7O0FBRUEsTUFBSSxDQUFDaEIsT0FBTCxFQUFjO0FBQ1osV0FBTztBQUFFcUIsY0FBUSxFQUFFO0FBQVosS0FBUDtBQUNEOztBQUVELFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0x0QjtBQURLO0FBREYsR0FBUDtBQUtEO0FBRU0sZUFBZXVCLGNBQWYsR0FBZ0M7QUFDckMsUUFBTWIsSUFBSSxHQUFHLE1BQU1QLE9BQU8sRUFBMUI7QUFFQSxRQUFNcUIsR0FBRyxHQUFHZCxJQUFJLENBQUNRLFFBQUwsQ0FBY08sR0FBZCxDQUFtQnpCLE9BQUQsSUFBYUEsT0FBTyxDQUFDb0IsRUFBdkMsQ0FBWjtBQUVBLFFBQU1NLGVBQWUsR0FBR0YsR0FBRyxDQUFDQyxHQUFKLENBQVNMLEVBQUQsS0FBUztBQUFFTCxVQUFNLEVBQUU7QUFBRUUsU0FBRyxFQUFFRztBQUFQO0FBQVYsR0FBVCxDQUFSLENBQXhCO0FBRUEsU0FBTztBQUNMTyxTQUFLLEVBQUVELGVBREY7QUFFTDtBQUNBRSxZQUFRLEVBQUUsSUFITCxDQUlMOztBQUpLLEdBQVA7QUFNRDtBQUVELCtEQUFlN0IsaUJBQWYiLCJmaWxlIjoiLi9wYWdlcy9bcGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcblxuZnVuY3Rpb24gUHJvZHVjdERldGFpbFBhZ2UoeyBwcm9kdWN0IH0pIHtcbiAgaWYgKCFwcm9kdWN0KSB7XG4gICAgcmV0dXJuIDxwPkxvYWRpbmcgLi4uPC9wPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxoMT57cHJvZHVjdC50aXRsZX08L2gxPlxuICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ2R1bW15LWJhY2tlbmQuanNvbicpO1xuICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoKTtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcblxuICBjb25zdCBwcm9kdWN0SWQgPSBwYXJhbXMucGlkO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG5cbiAgY29uc3QgcHJvZHVjdCA9IGRhdGEucHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gcHJvZHVjdElkKTtcblxuICBpZiAoIXByb2R1Y3QpIHtcbiAgICByZXR1cm4geyBub3RGb3VuZDogdHJ1ZSB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdFxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgpO1xuXG4gIGNvbnN0IGlkcyA9IGRhdGEucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcblxuICBjb25zdCBwYXRoc1dpdGhQYXJhbXMgPSBpZHMubWFwKChpZCkgPT4gKHsgcGFyYW1zOiB7IHBpZDogaWQgfSB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHNXaXRoUGFyYW1zLFxuICAgIC8vIGZhbGxiYWNrOiAnYmxvY2tpbmcnXG4gICAgZmFsbGJhY2s6IHRydWVcbiAgICAvLyBmYWxsYmFjazogZmFsc2VcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[pid].js\n");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("fs/promises");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/[pid].js"));
module.exports = __webpack_exports__;

})();