"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tracks",{

/***/ "./src/components/TrackProgress.tsx":
/*!******************************************!*\
  !*** ./src/components/TrackProgress.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TrackProgress = (param)=>{\n    let { current, max, onChange } = param;\n    const hours = Math.floor(totalSeconds / 3600);\n    const minutes = Math.floor(totalSeconds % 3600 / 60);\n    const seconds = totalSeconds % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"range\",\n                min: 0,\n                max: max,\n                value: current,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackProgress.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    current,\n                    \" / \",\n                    max\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackProgress.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackProgress.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TrackProgress;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackProgress);\nvar _c;\n$RefreshReg$(_c, \"TrackProgress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFja1Byb2dyZXNzLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBUUEsTUFBTUEsZ0JBQXdDO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBRTtJQUN2RSxNQUFNQyxRQUFRQyxLQUFLQyxLQUFLLENBQUNDLGVBQWU7SUFDeEMsTUFBTUMsVUFBVUgsS0FBS0MsS0FBSyxDQUFDLGVBQWdCLE9BQVE7SUFDbkQsTUFBTUcsVUFBVUYsZUFBZTtJQUMvQixxQkFDRSw4REFBQ0c7UUFBSUMsT0FBTztZQUFFQyxTQUFTO1FBQU87OzBCQUM1Qiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVFDLEtBQUs7Z0JBQUdiLEtBQUtBO2dCQUFLYyxPQUFPZjtnQkFBU0UsVUFBVUE7Ozs7OzswQkFDaEUsOERBQUNPOztvQkFDRVQ7b0JBQVE7b0JBQUlDOzs7Ozs7Ozs7Ozs7O0FBSXJCO0tBWk1GO0FBY04sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVHJhY2tQcm9ncmVzcy50c3g/NjY0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmludGVyZmFjZSBUcmFja1Byb2dyZXNzUHJvcHMge1xyXG4gIGN1cnJlbnQ6IG51bWJlclxyXG4gIG1heDogbnVtYmVyXHJcbiAgb25DaGFuZ2U6IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBUcmFja1Byb2dyZXNzOiBGQzxUcmFja1Byb2dyZXNzUHJvcHM+ID0gKHsgY3VycmVudCwgbWF4LCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApXHJcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApXHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICA8aW5wdXQgdHlwZT0ncmFuZ2UnIG1pbj17MH0gbWF4PXttYXh9IHZhbHVlPXtjdXJyZW50fSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2N1cnJlbnR9IC8ge21heH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWNrUHJvZ3Jlc3NcclxuIl0sIm5hbWVzIjpbIlRyYWNrUHJvZ3Jlc3MiLCJjdXJyZW50IiwibWF4Iiwib25DaGFuZ2UiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsInRvdGFsU2Vjb25kcyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiaW5wdXQiLCJ0eXBlIiwibWluIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TrackProgress.tsx\n"));

/***/ })

});