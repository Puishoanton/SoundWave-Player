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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   persistConfig: function() { return /* binding */ persistConfig; }\n/* harmony export */ });\n/* harmony import */ var _transforms_stateTransfrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms/stateTransfrom */ \"./src/store/redux-persist/transforms/stateTransfrom.ts\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ \"./node_modules/redux-persist/lib/storage/index.js\");\n\n\nconst persistConfig = {\n    key: \"tracks\",\n    storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    version: 1,\n    transforms: [\n        _transforms_stateTransfrom__WEBPACK_IMPORTED_MODULE_0__.stateTransfrom\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdXgtcGVyc2lzdC9wZXJzaXN0Q29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0RDtBQUNiO0FBRXhDLE1BQU1FLGdCQUFnQjtJQUMzQkMsS0FBSztJQUNMRixPQUFPQSxtRUFBQUE7SUFDUEcsU0FBUztJQUNUQyxZQUFZO1FBQUNMLHNFQUFjQTtLQUFDO0FBQzlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHV4LXBlcnNpc3QvcGVyc2lzdENvbmZpZy50cz85ZGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0YXRlVHJhbnNmcm9tIH0gZnJvbSAnLi90cmFuc2Zvcm1zL3N0YXRlVHJhbnNmcm9tJ1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiAndHJhY2tzJyxcclxuICBzdG9yYWdlLFxyXG4gIHZlcnNpb246IDEsXHJcbiAgdHJhbnNmb3JtczogW3N0YXRlVHJhbnNmcm9tXSxcclxufVxyXG4iXSwibmFtZXMiOlsic3RhdGVUcmFuc2Zyb20iLCJzdG9yYWdlIiwicGVyc2lzdENvbmZpZyIsImtleSIsInZlcnNpb24iLCJ0cmFuc2Zvcm1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/redux-persist/persistConfig.ts\n"));

/***/ }),

/***/ "./src/store/redux-persist/transforms/stateTransfrom.ts":
/*!**************************************************************!*\
  !*** ./src/store/redux-persist/transforms/stateTransfrom.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stateTransfrom: function() { return /* binding */ stateTransfrom; }\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n\n\nconst stateTransfrom = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.createTransform)((inboundState, key)=>{\n    return inboundState;\n}, (outboundState, key)=>{\n    _store__WEBPACK_IMPORTED_MODULE_0__.persistor.persist();\n    return outboundState;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdXgtcGVyc2lzdC90cmFuc2Zvcm1zL3N0YXRlVHJhbnNmcm9tLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUNZO0FBRXhDLE1BQU1FLGlCQUFpQkQsOERBQWVBLENBQzNDLENBQUNFLGNBQWNDO0lBQ2IsT0FBT0Q7QUFDVCxHQUNBLENBQUNFLGVBQWVEO0lBQ2RKLDZDQUFTQSxDQUFDTSxPQUFPO0lBQ2pCLE9BQU9EO0FBQ1QsR0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvcmVkdXgtcGVyc2lzdC90cmFuc2Zvcm1zL3N0YXRlVHJhbnNmcm9tLnRzPzg1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVyc2lzdG9yIH0gZnJvbSAnQC9zdG9yZSdcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNmb3JtIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuXHJcbmV4cG9ydCBjb25zdCBzdGF0ZVRyYW5zZnJvbSA9IGNyZWF0ZVRyYW5zZm9ybShcclxuICAoaW5ib3VuZFN0YXRlLCBrZXkpID0+IHtcclxuICAgIHJldHVybiBpbmJvdW5kU3RhdGVcclxuICB9LFxyXG4gIChvdXRib3VuZFN0YXRlLCBrZXkpID0+IHtcclxuICAgIHBlcnNpc3Rvci5wZXJzaXN0KClcclxuICAgIHJldHVybiBvdXRib3VuZFN0YXRlXHJcbiAgfVxyXG4pXHJcbiJdLCJuYW1lcyI6WyJwZXJzaXN0b3IiLCJjcmVhdGVUcmFuc2Zvcm0iLCJzdGF0ZVRyYW5zZnJvbSIsImluYm91bmRTdGF0ZSIsImtleSIsIm91dGJvdW5kU3RhdGUiLCJwZXJzaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/redux-persist/transforms/stateTransfrom.ts\n"));

/***/ })

});