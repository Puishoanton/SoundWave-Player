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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InitialStateTransfrom: function() { return /* binding */ InitialStateTransfrom; }\n/* harmony export */ });\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n/* harmony import */ var _store_reducers_trackSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/reducers/trackSlice */ \"./src/store/reducers/trackSlice.ts\");\n\n\nconst InitialStateTransfrom = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.createTransform)((inboundState, key)=>{\n    console.log(key);\n    if (key === \"trackSlice\") {\n        if (inboundState === _store_reducers_trackSlice__WEBPACK_IMPORTED_MODULE_1__.trackInitialState) {\n            // chatGPT тут напиши свою логіку\n            console.log(_store_reducers_trackSlice__WEBPACK_IMPORTED_MODULE_1__.trackInitialState);\n        }\n    }\n    return;\n}, (outboundState, key)=>{\n    // convert mySet back to a Set.\n    if (key === \"trackSlice\") {\n        // chatGPT тут напиши свою логіку\n        console.log(outboundState);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdXgtcGVyc2lzdC90cmFuc2Zvcm1zL2luaXRpYWxUcmFuc2Zvcm0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBQ2dCO0FBSXhELE1BQU1FLHdCQUF3QkYsOERBQWVBLENBQ2xELENBQUNHLGNBQWNDO0lBQ2JDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixJQUFJQSxRQUFRLGNBQWM7UUFDeEIsSUFBSUQsaUJBQWlCRix5RUFBaUJBLEVBQUU7WUFDdEMsaUNBQWlDO1lBQ2pDSSxRQUFRQyxHQUFHLENBQUNMLHlFQUFpQkE7UUFDL0I7SUFDRjtJQUNBO0FBQ0YsR0FDQSxDQUFDTSxlQUFlSDtJQUNkLCtCQUErQjtJQUMvQixJQUFJQSxRQUFRLGNBQWM7UUFDeEIsaUNBQWlDO1FBQ2pDQyxRQUFRQyxHQUFHLENBQUNDO0lBQ2Q7QUFDRixHQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9yZWR1eC1wZXJzaXN0L3RyYW5zZm9ybXMvaW5pdGlhbFRyYW5zZm9ybS50cz85YmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyYW5zZm9ybSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCB7IHRyYWNrSW5pdGlhbFN0YXRlIH0gZnJvbSAnQC9zdG9yZS9yZWR1Y2Vycy90cmFja1NsaWNlJ1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAL3N0b3JlL3JlZHVjZXJzJ1xyXG5pbXBvcnQgeyBUcmFja1N0YXRlIH0gZnJvbSAnQC90eXBlcy90cmFjaydcclxuXHJcbmV4cG9ydCBjb25zdCBJbml0aWFsU3RhdGVUcmFuc2Zyb20gPSBjcmVhdGVUcmFuc2Zvcm0oXHJcbiAgKGluYm91bmRTdGF0ZSwga2V5KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICBpZiAoa2V5ID09PSAndHJhY2tTbGljZScpIHtcclxuICAgICAgaWYgKGluYm91bmRTdGF0ZSA9PT0gdHJhY2tJbml0aWFsU3RhdGUpIHtcclxuICAgICAgICAvLyBjaGF0R1BUINGC0YPRgiDQvdCw0L/QuNGI0Lgg0YHQstC+0Y4g0LvQvtCz0ZbQutGDXHJcbiAgICAgICAgY29uc29sZS5sb2codHJhY2tJbml0aWFsU3RhdGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVyblxyXG4gIH0sXHJcbiAgKG91dGJvdW5kU3RhdGUsIGtleSkgPT4ge1xyXG4gICAgLy8gY29udmVydCBteVNldCBiYWNrIHRvIGEgU2V0LlxyXG4gICAgaWYgKGtleSA9PT0gJ3RyYWNrU2xpY2UnKSB7XHJcbiAgICAgIC8vIGNoYXRHUFQg0YLRg9GCINC90LDQv9C40YjQuCDRgdCy0L7RjiDQu9C+0LPRltC60YNcclxuICAgICAgY29uc29sZS5sb2cob3V0Ym91bmRTdGF0ZSlcclxuICAgIH1cclxuICB9XHJcbilcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVRyYW5zZm9ybSIsInRyYWNrSW5pdGlhbFN0YXRlIiwiSW5pdGlhbFN0YXRlVHJhbnNmcm9tIiwiaW5ib3VuZFN0YXRlIiwia2V5IiwiY29uc29sZSIsImxvZyIsIm91dGJvdW5kU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/redux-persist/transforms/initialTransform.ts\n"));

/***/ })

});