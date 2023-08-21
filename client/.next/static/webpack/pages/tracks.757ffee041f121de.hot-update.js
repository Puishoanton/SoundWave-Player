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

/***/ "./src/components/TrackItem.tsx":
/*!**************************************!*\
  !*** ./src/components/TrackItem.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/reducers/playerSlice */ \"./src/store/reducers/playerSlice.ts\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Pause */ \"./node_modules/@mui/icons-material/Pause.js\");\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ \"./node_modules/@mui/icons-material/PlayArrow.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/TrackItem.module.scss */ \"./src/styles/TrackItem.module.scss\");\n/* harmony import */ var _styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_asyncActions_deleteTrack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/asyncActions/deleteTrack */ \"./src/store/asyncActions/deleteTrack.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst TrackItem = (param)=>{\n    let { track } = param;\n    var _activeTrack;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const { previousTrack, isTrackPlaying, activeTrack } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.playerSlice);\n    const chooseTrack = ()=>{\n        var _previousTrack;\n        if (track._id !== ((_previousTrack = previousTrack) === null || _previousTrack === void 0 ? void 0 : _previousTrack._id)) {\n            dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setActiveTrack)(track));\n            dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(true));\n            dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setPreviousTrack)(track));\n        } else {\n            dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(!isTrackPlaying));\n        }\n    };\n    const deleteTrackhandler = (e)=>{\n        e.stopPropagation()((0,_store_asyncActions_deleteTrack__WEBPACK_IMPORTED_MODULE_5__.deleteTrackAction)(track._id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n        className: (_styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default().track),\n        onClick: ()=>router.push(\"/tracks/\".concat(track._id)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                onClick: (e)=>{\n                    e.stopPropagation();\n                    chooseTrack();\n                },\n                children: ((_activeTrack = activeTrack) === null || _activeTrack === void 0 ? void 0 : _activeTrack._id) !== track._id || !isTrackPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 62\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 78\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"http://localhost:5000/\" + track.picture,\n                alt: \"Track picture\",\n                width: 70,\n                height: 70\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                container: true,\n                direction: \"column\",\n                className: (_styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: track.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: track.artist\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                className: (_styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"delete\"]),\n                onClick: deleteTrackhandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TrackItem, \"3AQ+iBONvt29a+q45prM1aqqzfM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = TrackItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackItem);\nvar _c;\n$RefreshReg$(_c, \"TrackItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFja0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNvQztBQUVwQztBQUFBO0FBQUE7QUFDUjtBQUN4QjtBQUNTO0FBRWE7QUFDZ0I7QUFNcEUsTUFBTWUsWUFBZ0M7UUFBQyxFQUFFQyxLQUFLLEVBQUU7UUEwQnZDQzs7SUF6QlAsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLFdBQVduQiw0REFBY0E7SUFDL0IsTUFBTSxFQUFFb0IsYUFBYSxFQUFFQyxjQUFjLEVBQUVKLFdBQVcsRUFBRSxHQUFHaEIsNERBQWNBLENBQUNxQixDQUFBQSxRQUFTQSxNQUFNQyxXQUFXO0lBRWhHLE1BQU1DLGNBQWM7WUFDQUo7UUFBbEIsSUFBSUosTUFBTVMsR0FBRyxPQUFLTCxpQkFBQUEsMkJBQUFBLHFDQUFBQSxlQUFlSyxHQUFHLEdBQUU7WUFDcENOLFNBQVNqQiwyRUFBY0EsQ0FBQ2M7WUFDeEJHLFNBQVNoQiw4RUFBaUJBLENBQUM7WUFDM0JnQixTQUFTZiw2RUFBZ0JBLENBQUNZO1FBQzVCLE9BQU87WUFDTEcsU0FBU2hCLDhFQUFpQkEsQ0FBQyxDQUFDa0I7UUFDOUI7SUFDRjtJQUVBLE1BQU1LLHFCQUFxQixDQUFDQztRQUMxQkEsRUFBRUMsZUFBZSxHQUFHZCxrRkFBaUJBLENBQUNFLE1BQU1TLEdBQUc7SUFDakQ7SUFFQSxxQkFDRSw4REFBQ2pCLCtDQUFJQTtRQUFDcUIsV0FBV2hCLDRFQUFZO1FBQUVpQixTQUFTLElBQU1aLE9BQU9hLElBQUksQ0FBQyxXQUFxQixPQUFWZixNQUFNUyxHQUFHOzswQkFDNUUsOERBQUNmLHFEQUFVQTtnQkFDVG9CLFNBQVNILENBQUFBO29CQUNQQSxFQUFFQyxlQUFlO29CQUNqQko7Z0JBQ0Y7MEJBQ0NQLEVBQUFBLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYVEsR0FBRyxNQUFLVCxNQUFNUyxHQUFHLElBQUksQ0FBQ0osK0JBQWlCLDhEQUFDZCxxRUFBU0E7Ozs7OENBQU0sOERBQUNELGlFQUFLQTs7Ozs7Ozs7OzswQkFFN0UsOERBQUNLLG1EQUFLQTtnQkFDSnFCLEtBQUssMkJBQTJCaEIsTUFBTWlCLE9BQU87Z0JBQzdDQyxLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFROzs7Ozs7MEJBRVYsOERBQUMzQiwrQ0FBSUE7Z0JBQUM0QixTQUFTO2dCQUFDQyxXQUFXO2dCQUFVVCxXQUFXaEIsNEVBQVk7O2tDQUMxRCw4REFBQzJCO2tDQUFJeEIsTUFBTXlCLElBQUk7Ozs7OztrQ0FDZiw4REFBQ0M7a0NBQUkxQixNQUFNMkIsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUVuQiw4REFBQ2pDLHFEQUFVQTtnQkFBQ21CLFdBQVdoQixnRkFBYTtnQkFBRWlCLFNBQVNKOzBCQUM3Qyw0RUFBQ3JCLG1FQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO0dBM0NNVTs7UUFDV0gsa0RBQVNBO1FBQ1BaLHdEQUFjQTtRQUN3QkMsd0RBQWNBOzs7S0FIakVjO0FBNkNOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYWNrSXRlbS50c3g/MDIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzL3JlZHV4J1xyXG5pbXBvcnQgeyBzZXRBY3RpdmVUcmFjaywgc2V0SXNUcmFja1BsYXlpbmcsIHNldFByZXZpb3VzVHJhY2sgfSBmcm9tICdAL3N0b3JlL3JlZHVjZXJzL3BsYXllclNsaWNlJ1xyXG5pbXBvcnQgeyBJVHJhY2sgfSBmcm9tICdAL3R5cGVzL3RyYWNrJ1xyXG5pbXBvcnQgeyBEZWxldGUsIFBhdXNlLCBQbGF5QXJyb3cgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJ1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9UcmFja0l0ZW0ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGRlbGV0ZVRyYWNrQWN0aW9uIH0gZnJvbSAnQC9zdG9yZS9hc3luY0FjdGlvbnMvZGVsZXRlVHJhY2snXHJcblxyXG5pbnRlcmZhY2UgVHJhY2tJdGVtUHJvcHMge1xyXG4gIHRyYWNrOiBJVHJhY2tcclxufVxyXG5cclxuY29uc3QgVHJhY2tJdGVtOiBGQzxUcmFja0l0ZW1Qcm9wcz4gPSAoeyB0cmFjayB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICBjb25zdCB7IHByZXZpb3VzVHJhY2ssIGlzVHJhY2tQbGF5aW5nLCBhY3RpdmVUcmFjayB9ID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGxheWVyU2xpY2UpXHJcblxyXG4gIGNvbnN0IGNob29zZVRyYWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHRyYWNrLl9pZCAhPT0gcHJldmlvdXNUcmFjaz8uX2lkKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRyYWNrKHRyYWNrKSlcclxuICAgICAgZGlzcGF0Y2goc2V0SXNUcmFja1BsYXlpbmcodHJ1ZSkpXHJcbiAgICAgIGRpc3BhdGNoKHNldFByZXZpb3VzVHJhY2sodHJhY2spKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goc2V0SXNUcmFja1BsYXlpbmcoIWlzVHJhY2tQbGF5aW5nKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRyYWNraGFuZGxlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKShkZWxldGVUcmFja0FjdGlvbih0cmFjay5faWQpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3RyYWNrcy8ke3RyYWNrLl9pZH1gKX0+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICBjaG9vc2VUcmFjaygpXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAge2FjdGl2ZVRyYWNrPy5faWQgIT09IHRyYWNrLl9pZCB8fCAhaXNUcmFja1BsYXlpbmcgPyA8UGxheUFycm93IC8+IDogPFBhdXNlIC8+fVxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17J2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nICsgdHJhY2sucGljdHVyZX1cclxuICAgICAgICBhbHQ9J1RyYWNrIHBpY3R1cmUnXHJcbiAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249eydjb2x1bW4nfSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgPGgyPnt0cmFjay5uYW1lfTwvaDI+XHJcbiAgICAgICAgPGgzPnt0cmFjay5hcnRpc3R9PC9oMz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9IG9uQ2xpY2s9e2RlbGV0ZVRyYWNraGFuZGxlcn0+XHJcbiAgICAgICAgPERlbGV0ZSAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFja0l0ZW1cclxuIl0sIm5hbWVzIjpbInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRBY3RpdmVUcmFjayIsInNldElzVHJhY2tQbGF5aW5nIiwic2V0UHJldmlvdXNUcmFjayIsIkRlbGV0ZSIsIlBhdXNlIiwiUGxheUFycm93IiwiQ2FyZCIsIkdyaWQiLCJJY29uQnV0dG9uIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJkZWxldGVUcmFja0FjdGlvbiIsIlRyYWNrSXRlbSIsInRyYWNrIiwiYWN0aXZlVHJhY2siLCJyb3V0ZXIiLCJkaXNwYXRjaCIsInByZXZpb3VzVHJhY2siLCJpc1RyYWNrUGxheWluZyIsInN0YXRlIiwicGxheWVyU2xpY2UiLCJjaG9vc2VUcmFjayIsIl9pZCIsImRlbGV0ZVRyYWNraGFuZGxlciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRhaW5lciIsImRpcmVjdGlvbiIsInRpdGxlIiwiaDIiLCJuYW1lIiwiaDMiLCJhcnRpc3QiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TrackItem.tsx\n"));

/***/ })

});