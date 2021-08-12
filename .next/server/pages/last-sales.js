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
exports.id = "pages/last-sales";
exports.ids = ["pages/last-sales"];
exports.modules = {

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/diegoacuna/Documents/Courses/NextJSPreRenderCourse/pages/last-sales.js\";\n\n\n\nfunction LastSalesPage() {\n  const {\n    0: sales,\n    1: setSales\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); //   const [isLoading, setIsLoading] = useState(false);\n\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('https://nextjs-course-623da-default-rtdb.europe-west1.firebasedatabase.app/sales.json');\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const transformedSales = [];\n\n    if (data) {\n      Object.keys(data).forEach(key => {\n        transformedSales.push({\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      });\n      setSales(transformedSales);\n    }\n  }, [data]); //   useEffect(() => {\n  //     setIsLoading(true);\n  //     fetch('https://nextjs-course-623da-default-rtdb.europe-west1.firebasedatabase.app/sales.json')\n  //       .then((response) => response.json())\n  //       .then((data) => {\n  //         const transformedSales = [];\n  //         Object.keys(data).forEach((key) => {\n  //           transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });\n  //         });\n  //         setSales(transformedSales);\n  //         setIsLoading(false);\n  //       });\n  //   }, []);\n  //   if (isLoading) {\n  //     return <p>Loading...</p>;\n  //   }\n  //   if (!sales) {\n  //     return <p>No data yet</p>;\n  //   }\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Failed to load.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (!data || !sales) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n    children: sales.map(sale => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      children: [sale.username, \" - $\", sale.volume]\n    }, sale.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLXByZS1yZW5kZXItY291cnNlLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8wNTFkIl0sIm5hbWVzIjpbIkxhc3RTYWxlc1BhZ2UiLCJzYWxlcyIsInNldFNhbGVzIiwidXNlU3RhdGUiLCJkYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJ0cmFuc2Zvcm1lZFNhbGVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsIm1hcCIsInNhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLEVBQWxDLENBRHVCLENBRXZCOztBQUVBLFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQWtCQywwQ0FBTSxDQUM1Qix1RkFENEIsQ0FBOUI7QUFJQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7O0FBRUEsUUFBSUosSUFBSixFQUFVO0FBQ1JLLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZTixJQUFaLEVBQWtCTyxPQUFsQixDQUEyQkMsR0FBRCxJQUFTO0FBQ2pDSix3QkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0I7QUFBRUMsWUFBRSxFQUFFRixHQUFOO0FBQVdHLGtCQUFRLEVBQUVYLElBQUksQ0FBQ1EsR0FBRCxDQUFKLENBQVVHLFFBQS9CO0FBQXlDQyxnQkFBTSxFQUFFWixJQUFJLENBQUNRLEdBQUQsQ0FBSixDQUFVSTtBQUEzRCxTQUF0QjtBQUNELE9BRkQ7QUFHQWQsY0FBUSxDQUFDTSxnQkFBRCxDQUFSO0FBQ0Q7QUFDRixHQVRRLEVBU04sQ0FBQ0osSUFBRCxDQVRNLENBQVQsQ0FSdUIsQ0FtQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLE1BQUlDLEtBQUosRUFBVztBQUNULHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNELElBQUQsSUFBUyxDQUFDSCxLQUFkLEVBQXFCO0FBQ25CLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVDtBQUFBLGlCQUNHQSxJQUFJLENBQUNILFFBRFIsVUFDc0JHLElBQUksQ0FBQ0YsTUFEM0I7QUFBQSxPQUFTRSxJQUFJLENBQUNKLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRUQsK0RBQWVkLGFBQWYiLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuZnVuY3Rpb24gTGFzdFNhbGVzUGFnZSgpIHtcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZSgpO1xuICAvLyAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgICdodHRwczovL25leHRqcy1jb3Vyc2UtNjIzZGEtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9zYWxlcy5qc29uJ1xuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goeyBpZDoga2V5LCB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLCB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUgfSk7XG4gICAgICB9KTtcbiAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gIC8vICAgICBmZXRjaCgnaHR0cHM6Ly9uZXh0anMtY291cnNlLTYyM2RhLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvc2FsZXMuanNvbicpXG4gIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcblxuICAvLyAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAvLyAgICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHsgaWQ6IGtleSwgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSwgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lIH0pO1xuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xuICAvLyAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgIH0sIFtdKTtcblxuICAvLyAgIGlmIChpc0xvYWRpbmcpIHtcbiAgLy8gICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gICB9XG5cbiAgLy8gICBpZiAoIXNhbGVzKSB7XG4gIC8vICAgICByZXR1cm4gPHA+Tm8gZGF0YSB5ZXQ8L3A+O1xuICAvLyAgIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxwPkZhaWxlZCB0byBsb2FkLjwvcD47XG4gIH1cblxuICBpZiAoIWRhdGEgfHwgIXNhbGVzKSB7XG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7c2FsZXMubWFwKChzYWxlKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3NhbGUuaWR9PlxuICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtICR7c2FsZS52b2x1bWV9XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

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

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/last-sales.js"));
module.exports = __webpack_exports__;

})();