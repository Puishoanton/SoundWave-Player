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

/***/ "./src/store/redux-persist/persistConfig.ts":
/*!**************************************************!*\
  !*** ./src/store/redux-persist/persistConfig.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   persistConfig: function() { return /* binding */ persistConfig; }\n/* harmony export */ });\n/* harmony import */ var _transforms_initialTransform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms/initialTransform */ \"./src/store/redux-persist/transforms/initialTransform.ts\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ \"./node_modules/redux-persist/lib/storage/index.js\");\n\n\nconst persistConfig = {\n    key: \"tracks\",\n    storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    version: 1,\n    transforms: [\n        _transforms_initialTransform__WEBPACK_IMPORTED_MODULE_0__.InitialStateTransfrom\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdXgtcGVyc2lzdC9wZXJzaXN0Q29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxRTtBQUN0QjtBQUV4QyxNQUFNRSxnQkFBZ0I7SUFDM0JDLEtBQUs7SUFDTEYsT0FBT0EsbUVBQUFBO0lBQ1BHLFNBQVM7SUFDVEMsWUFBWTtRQUFDTCwrRUFBcUJBO0tBQUM7QUFDckMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvcmVkdXgtcGVyc2lzdC9wZXJzaXN0Q29uZmlnLnRzPzlkZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5pdGlhbFN0YXRlVHJhbnNmcm9tIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2luaXRpYWxUcmFuc2Zvcm0nXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXHJcblxyXG5leHBvcnQgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICBrZXk6ICd0cmFja3MnLFxyXG4gIHN0b3JhZ2UsXHJcbiAgdmVyc2lvbjogMSxcclxuICB0cmFuc2Zvcm1zOiBbSW5pdGlhbFN0YXRlVHJhbnNmcm9tXSxcclxufVxyXG4iXSwibmFtZXMiOlsiSW5pdGlhbFN0YXRlVHJhbnNmcm9tIiwic3RvcmFnZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ2ZXJzaW9uIiwidHJhbnNmb3JtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/redux-persist/persistConfig.ts\n"));

/***/ }),

/***/ "./src/store/redux-persist/transforms/initialTransform.ts":
/*!****************************************************************!*\
  !*** ./src/store/redux-persist/transforms/initialTransform.ts ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InitialStateTransfrom: function() { return /* binding */ InitialStateTransfrom; }\n/* harmony export */ });\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n\nconst InitialStateTransfrom = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.createTransform)();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdXgtcGVyc2lzdC90cmFuc2Zvcm1zL2luaXRpYWxUcmFuc2Zvcm0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDK0M7QUFFeEMsTUFBTUMsd0JBQXdCRCw4REFBZUEsR0FTbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHV4LXBlcnNpc3QvdHJhbnNmb3Jtcy9pbml0aWFsVHJhbnNmb3JtLnRzPzliYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVFBsYXllciB9IGZyb20gJ0AvdHlwZXMvcGxheWVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2Zvcm0gfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IEluaXRpYWxTdGF0ZVRyYW5zZnJvbSA9IGNyZWF0ZVRyYW5zZm9ybShcclxuICAvLyAoaW5ib3VuZFN0YXRlLCBrZXkpID0+IHtcclxuICAvLyAgIGlmIChrZXkgPT09ICdwbGF5ZXJTbGljZScpIHtcclxuICAvLyAgICAgY29uc3QgcGxheWVyU3RhdGUgPSBpbmJvdW5kU3RhdGUgYXMgVFBsYXllclxyXG5cclxuICAvLyAgICAgcmV0dXJuIHsgLi4ucGxheWVyU3RhdGUsIGlzVHJhY2tQbGF5aW5nOiBmYWxzZSB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIChvdXRib3VuZFN0YXRlLCBrZXkpID0+IHt9XHJcbilcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVRyYW5zZm9ybSIsIkluaXRpYWxTdGF0ZVRyYW5zZnJvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/redux-persist/transforms/initialTransform.ts\n"));

/***/ })

});