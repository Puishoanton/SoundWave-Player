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

/***/ "./src/pages/tracks/index.tsx":
/*!************************************!*\
  !*** ./src/pages/tracks/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TrackList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TrackList */ \"./src/components/TrackList.tsx\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/MainLayout */ \"./src/layouts/MainLayout.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Tracks = ()=>{\n    _s();\n    const { tracks, error } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.trackSlice);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n            container: true,\n            justifyContent: \"center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                style: {\n                    width: 900\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        p: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            container: true,\n                            justifyContent: \"space-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Track list\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/tracks/create\"),\n                                    children: \"Create track\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TrackList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        tracks: tracks\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\pages\\\\tracks\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tracks, \"XsL7jfNlrimE/0fXcgvJWSn9yws=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Tracks;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tracks);\nvar _c;\n$RefreshReg$(_c, \"Tracks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdHJhY2tzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNBO0FBQ0Q7QUFFVTtBQUN2QjtBQUloQyxNQUFNUSxTQUFTOztJQUNiLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1QsNERBQWNBLENBQUNVLENBQUFBLFFBQVNBLE1BQU1DLFVBQVU7SUFFbEUsSUFBSUYsT0FBTztRQUNULHFCQUNFLDhEQUFDUiwyREFBVUE7c0JBQ1QsNEVBQUNXOzBCQUFJSDs7Ozs7Ozs7Ozs7SUFHWDtJQUVBLHFCQUNFLDhEQUFDUiwyREFBVUE7a0JBQ1QsNEVBQUNJLCtDQUFJQTtZQUFDUSxTQUFTO1lBQUNDLGdCQUFlO3NCQUM3Qiw0RUFBQ1YsK0NBQUlBO2dCQUFDVyxPQUFPO29CQUFFQyxPQUFPO2dCQUFJOztrQ0FDeEIsOERBQUNkLDhDQUFHQTt3QkFBQ2UsR0FBRztrQ0FDTiw0RUFBQ1osK0NBQUlBOzRCQUFDUSxTQUFTOzRCQUFDQyxnQkFBZTs7OENBQzdCLDhEQUFDRjs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDVCxpREFBTUE7b0NBQUNlLFNBQVMsSUFBTVosdURBQVcsQ0FBQzs4Q0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUcxRCw4REFBQ1AsNkRBQVNBO3dCQUFDUyxRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtHQTFCTUQ7O1FBQ3NCUCx3REFBY0E7OztLQURwQ087O0FBNEJOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90cmFja3MvaW5kZXgudHN4PzVmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWNrTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvVHJhY2tMaXN0J1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MvcmVkdXgnXHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9NYWluTGF5b3V0J1xyXG5pbXBvcnQgeyBmZXRjaFRyYWNrc0FjdGlvbiB9IGZyb20gJ0Avc3RvcmUvYXN5bmNBY3Rpb25zL2dldFRyYWNrc0FjdGlvbidcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBOZXh0VGh1bmtEaXNwYXRjaCwgd3JhcHBlciB9IGZyb20gJy4uLy4uL3N0b3JlJ1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5cclxuY29uc3QgVHJhY2tzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdHJhY2tzLCBlcnJvciB9ID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudHJhY2tTbGljZSlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICA8aDE+e2Vycm9yfTwvaDE+XHJcbiAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkxheW91dD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnlDb250ZW50PSdjZW50ZXInPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiA5MDAgfX0+XHJcbiAgICAgICAgICA8Qm94IHA9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgIDxoMT5UcmFjayBsaXN0PC9oMT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdHJhY2tzL2NyZWF0ZScpfT5DcmVhdGUgdHJhY2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8VHJhY2tMaXN0IHRyYWNrcz17dHJhY2tzfSAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tzXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICBzdG9yZSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoIGFzIE5leHRUaHVua0Rpc3BhdGNoXHJcbiAgICBjb25zb2xlLmxvZygnb2JqZWN0Jyk7XHJcbiAgICBhd2FpdCBkaXNwYXRjaChmZXRjaFRyYWNrc0FjdGlvbigpKVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9XHJcbiAgfVxyXG4pXHJcbiJdLCJuYW1lcyI6WyJUcmFja0xpc3QiLCJ1c2VBcHBTZWxlY3RvciIsIk1haW5MYXlvdXQiLCJCb3giLCJCdXR0b24iLCJDYXJkIiwiR3JpZCIsInJvdXRlciIsIlRyYWNrcyIsInRyYWNrcyIsImVycm9yIiwic3RhdGUiLCJ0cmFja1NsaWNlIiwiaDEiLCJjb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsInN0eWxlIiwid2lkdGgiLCJwIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tracks/index.tsx\n"));

/***/ })

});