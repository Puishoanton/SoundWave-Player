"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeStore: function() { return /* binding */ makeStore; },\n/* harmony export */   wrapper: function() { return /* binding */ wrapper; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({\n    reducer: _reducers__WEBPACK_IMPORTED_MODULE_1__.persistedReducer\n});\nconst makeStore = ()=>{\n    return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(makeStore);\n // middleware: getDefaultMiddleware =>\n //   getDefaultMiddleware({\n //     serializableCheck: {\n //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],\n //     },\n //   }),\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0Y7QUFDckI7QUFDTDtBQUd4RCxNQUFNRyxRQUFRSCxnRUFBY0EsQ0FBQztJQUMzQkksU0FBU0YsdURBQWdCQTtBQUUzQjtBQUVPLE1BQU1HLFlBQXlDO0lBQ3BELE9BQU9GO0FBQ1QsRUFBQztBQUtNLE1BQU1HLFVBQVVMLGlFQUFhQSxDQUFtQkksV0FBVTtDQUdqRSxzQ0FBc0M7Q0FDdEMsMkJBQTJCO0NBQzNCLDJCQUEyQjtDQUMzQiw2RUFBNkU7Q0FDN0UsU0FBUztDQUNULFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2luZGV4LnRzP2NlZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55QWN0aW9uLCBTdG9yZSwgVGh1bmtEaXNwYXRjaCwgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBNYWtlU3RvcmUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSwgcGVyc2lzdGVkUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMnXHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgLy8gbWlkZGxld2FyZTogW3RodW5rXSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmU6IE1ha2VTdG9yZTxTdG9yZTxSb290U3RhdGU+PiA9ICgpID0+IHtcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gQXBwU3RvcmVbJ2Rpc3BhdGNoJ11cclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxTdG9yZTxSb290U3RhdGU+PihtYWtlU3RvcmUpXHJcblxyXG5leHBvcnQgdHlwZSBOZXh0VGh1bmtEaXNwYXRjaCA9IFRodW5rRGlzcGF0Y2g8Um9vdFN0YXRlLCB2b2lkLCBBbnlBY3Rpb24+XHJcbi8vIG1pZGRsZXdhcmU6IGdldERlZmF1bHRNaWRkbGV3YXJlID0+XHJcbi8vICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xyXG4vLyAgICAgc2VyaWFsaXphYmxlQ2hlY2s6IHtcclxuLy8gICAgICAgaWdub3JlZEFjdGlvbnM6IFtGTFVTSCwgUkVIWURSQVRFLCBQQVVTRSwgUEVSU0lTVCwgUFVSR0UsIFJFR0lTVEVSXSxcclxuLy8gICAgIH0sXHJcbi8vICAgfSksXHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwibWFrZVN0b3JlIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/index.ts\n"));

/***/ })

});