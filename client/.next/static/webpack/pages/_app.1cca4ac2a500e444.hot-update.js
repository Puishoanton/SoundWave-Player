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

/***/ "./src/store/redux-persist/transforms/initialTransform.ts":
/*!****************************************************************!*\
  !*** ./src/store/redux-persist/transforms/initialTransform.ts ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InitialStateTransfrom: function() { return /* binding */ InitialStateTransfrom; }\n/* harmony export */ });\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n\nconst InitialStateTransfrom = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.createTransform)((inboundState, key)=>{\n    if (key === \"playerSlice\") {\n        const playerState = inboundState;\n        return {\n            ...playerState,\n            isTrackPlaying: false\n        };\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdXgtcGVyc2lzdC90cmFuc2Zvcm1zL2luaXRpYWxUcmFuc2Zvcm0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDK0M7QUFFeEMsTUFBTUMsd0JBQXdCRCw4REFBZUEsQ0FDbEQsQ0FBQ0UsY0FBY0M7SUFDYixJQUFJQSxRQUFRLGVBQWU7UUFDekIsTUFBTUMsY0FBY0Y7UUFFcEIsT0FBTztZQUFFLEdBQUdFLFdBQVc7WUFBRUMsZ0JBQWdCO1FBQU07SUFDakQ7QUFDRixHQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9yZWR1eC1wZXJzaXN0L3RyYW5zZm9ybXMvaW5pdGlhbFRyYW5zZm9ybS50cz85YmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRQbGF5ZXIgfSBmcm9tICdAL3R5cGVzL3BsYXllcidcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNmb3JtIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuXHJcbmV4cG9ydCBjb25zdCBJbml0aWFsU3RhdGVUcmFuc2Zyb20gPSBjcmVhdGVUcmFuc2Zvcm0oXHJcbiAgKGluYm91bmRTdGF0ZSwga2V5KSA9PiB7XHJcbiAgICBpZiAoa2V5ID09PSAncGxheWVyU2xpY2UnKSB7XHJcbiAgICAgIGNvbnN0IHBsYXllclN0YXRlID0gaW5ib3VuZFN0YXRlIGFzIFRQbGF5ZXJcclxuXHJcbiAgICAgIHJldHVybiB7IC4uLnBsYXllclN0YXRlLCBpc1RyYWNrUGxheWluZzogZmFsc2UgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyAob3V0Ym91bmRTdGF0ZSwga2V5KSA9PiB7fVxyXG4pXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVUcmFuc2Zvcm0iLCJJbml0aWFsU3RhdGVUcmFuc2Zyb20iLCJpbmJvdW5kU3RhdGUiLCJrZXkiLCJwbGF5ZXJTdGF0ZSIsImlzVHJhY2tQbGF5aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/redux-persist/transforms/initialTransform.ts\n"));

/***/ })

});