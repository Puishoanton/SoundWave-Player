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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/reducers/playerSlice */ \"./src/store/reducers/playerSlice.ts\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Pause */ \"./node_modules/@mui/icons-material/Pause.js\");\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ \"./node_modules/@mui/icons-material/PlayArrow.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/TrackItem.module.scss */ \"./src/styles/TrackItem.module.scss\");\n/* harmony import */ var _styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_asyncActions_deleteTrack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/asyncActions/deleteTrack */ \"./src/store/asyncActions/deleteTrack.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst TrackItem = (param)=>{\n    let { track } = param;\n    var _activeTrack;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const { previousTrack, isTrackPlaying, activeTrack } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.playerSlice);\n    const chooseTrack = ()=>{\n        var _previousTrack;\n        if (track._id !== ((_previousTrack = previousTrack) === null || _previousTrack === void 0 ? void 0 : _previousTrack._id)) {\n            dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setActiveTrack)(track));\n            dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(true));\n            dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setPreviousTrack)(track));\n        } else {\n            dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(!isTrackPlaying));\n        }\n    };\n    const deleteTrackhandler = (e)=>{\n        e.stopPropagation();\n        (0,_store_asyncActions_deleteTrack__WEBPACK_IMPORTED_MODULE_5__.deleteTrackAction)(track._id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n        className: (_styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default().track),\n        onClick: ()=>router.push(\"/tracks/\".concat(track._id)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                onClick: (e)=>{\n                    e.stopPropagation();\n                    chooseTrack();\n                },\n                children: ((_activeTrack = activeTrack) === null || _activeTrack === void 0 ? void 0 : _activeTrack._id) !== track._id || !isTrackPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 62\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 78\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"http://localhost:5000/\" + track.picture,\n                alt: \"Track picture\",\n                width: 70,\n                height: 70\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                container: true,\n                direction: \"column\",\n                className: (_styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: track.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: track.artist\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                className: (_styles_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"delete\"]),\n                onClick: deleteTrackhandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\TrackItem.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TrackItem, \"3AQ+iBONvt29a+q45prM1aqqzfM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = TrackItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackItem);\nvar _c;\n$RefreshReg$(_c, \"TrackItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFja0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNvQztBQUVwQztBQUFBO0FBQUE7QUFDUjtBQUN4QjtBQUNTO0FBRWE7QUFDZ0I7QUFNcEUsTUFBTWUsWUFBZ0M7UUFBQyxFQUFFQyxLQUFLLEVBQUU7UUEyQnZDQzs7SUExQlAsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLFdBQVduQiw0REFBY0E7SUFDL0IsTUFBTSxFQUFFb0IsYUFBYSxFQUFFQyxjQUFjLEVBQUVKLFdBQVcsRUFBRSxHQUFHaEIsNERBQWNBLENBQUNxQixDQUFBQSxRQUFTQSxNQUFNQyxXQUFXO0lBRWhHLE1BQU1DLGNBQWM7WUFDQUo7UUFBbEIsSUFBSUosTUFBTVMsR0FBRyxPQUFLTCxpQkFBQUEsMkJBQUFBLHFDQUFBQSxlQUFlSyxHQUFHLEdBQUU7WUFDcENOLFNBQVNqQiwyRUFBY0EsQ0FBQ2M7WUFDeEJHLFNBQVNoQiw4RUFBaUJBLENBQUM7WUFDM0JnQixTQUFTZiw2RUFBZ0JBLENBQUNZO1FBQzVCLE9BQU87WUFDTEcsU0FBU2hCLDhFQUFpQkEsQ0FBQyxDQUFDa0I7UUFDOUI7SUFDRjtJQUVBLE1BQU1LLHFCQUFxQixDQUFDQztRQUMxQkEsRUFBRUMsZUFBZTtRQUNqQmQsa0ZBQWlCQSxDQUFDRSxNQUFNUyxHQUFHO0lBQzdCO0lBRUEscUJBQ0UsOERBQUNqQiwrQ0FBSUE7UUFBQ3FCLFdBQVdoQiw0RUFBWTtRQUFFaUIsU0FBUyxJQUFNWixPQUFPYSxJQUFJLENBQUMsV0FBcUIsT0FBVmYsTUFBTVMsR0FBRzs7MEJBQzVFLDhEQUFDZixxREFBVUE7Z0JBQ1RvQixTQUFTSCxDQUFBQTtvQkFDUEEsRUFBRUMsZUFBZTtvQkFDakJKO2dCQUNGOzBCQUNDUCxFQUFBQSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFRLEdBQUcsTUFBS1QsTUFBTVMsR0FBRyxJQUFJLENBQUNKLCtCQUFpQiw4REFBQ2QscUVBQVNBOzs7OzhDQUFNLDhEQUFDRCxpRUFBS0E7Ozs7Ozs7Ozs7MEJBRTdFLDhEQUFDSyxtREFBS0E7Z0JBQ0pxQixLQUFLLDJCQUEyQmhCLE1BQU1pQixPQUFPO2dCQUM3Q0MsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDM0IsK0NBQUlBO2dCQUFDNEIsU0FBUztnQkFBQ0MsV0FBVztnQkFBVVQsV0FBV2hCLDRFQUFZOztrQ0FDMUQsOERBQUMyQjtrQ0FBSXhCLE1BQU15QixJQUFJOzs7Ozs7a0NBQ2YsOERBQUNDO2tDQUFJMUIsTUFBTTJCLE1BQU07Ozs7Ozs7Ozs7OzswQkFFbkIsOERBQUNqQyxxREFBVUE7Z0JBQUNtQixXQUFXaEIsZ0ZBQWE7Z0JBQUVpQixTQUFTSjswQkFDN0MsNEVBQUNyQixtRUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjtHQTVDTVU7O1FBQ1dILGtEQUFTQTtRQUNQWix3REFBY0E7UUFDd0JDLHdEQUFjQTs7O0tBSGpFYztBQThDTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UcmFja0l0ZW0udHN4PzAyMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9ob29rcy9yZWR1eCdcclxuaW1wb3J0IHsgc2V0QWN0aXZlVHJhY2ssIHNldElzVHJhY2tQbGF5aW5nLCBzZXRQcmV2aW91c1RyYWNrIH0gZnJvbSAnQC9zdG9yZS9yZWR1Y2Vycy9wbGF5ZXJTbGljZSdcclxuaW1wb3J0IHsgSVRyYWNrIH0gZnJvbSAnQC90eXBlcy90cmFjaydcclxuaW1wb3J0IHsgRGVsZXRlLCBQYXVzZSwgUGxheUFycm93IH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCdcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVHJhY2tJdGVtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBkZWxldGVUcmFja0FjdGlvbiB9IGZyb20gJ0Avc3RvcmUvYXN5bmNBY3Rpb25zL2RlbGV0ZVRyYWNrJ1xyXG5cclxuaW50ZXJmYWNlIFRyYWNrSXRlbVByb3BzIHtcclxuICB0cmFjazogSVRyYWNrXHJcbn1cclxuXHJcbmNvbnN0IFRyYWNrSXRlbTogRkM8VHJhY2tJdGVtUHJvcHM+ID0gKHsgdHJhY2sgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBwcmV2aW91c1RyYWNrLCBpc1RyYWNrUGxheWluZywgYWN0aXZlVHJhY2sgfSA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBsYXllclNsaWNlKVxyXG5cclxuICBjb25zdCBjaG9vc2VUcmFjayA9ICgpID0+IHtcclxuICAgIGlmICh0cmFjay5faWQgIT09IHByZXZpb3VzVHJhY2s/Ll9pZCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRBY3RpdmVUcmFjayh0cmFjaykpXHJcbiAgICAgIGRpc3BhdGNoKHNldElzVHJhY2tQbGF5aW5nKHRydWUpKVxyXG4gICAgICBkaXNwYXRjaChzZXRQcmV2aW91c1RyYWNrKHRyYWNrKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldElzVHJhY2tQbGF5aW5nKCFpc1RyYWNrUGxheWluZykpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVUcmFja2hhbmRsZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGRlbGV0ZVRyYWNrQWN0aW9uKHRyYWNrLl9pZClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy50cmFja30gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC90cmFja3MvJHt0cmFjay5faWR9YCl9PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgY2hvb3NlVHJhY2soKVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHthY3RpdmVUcmFjaz8uX2lkICE9PSB0cmFjay5faWQgfHwgIWlzVHJhY2tQbGF5aW5nID8gPFBsYXlBcnJvdyAvPiA6IDxQYXVzZSAvPn1cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9eydodHRwOi8vbG9jYWxob3N0OjUwMDAvJyArIHRyYWNrLnBpY3R1cmV9XHJcbiAgICAgICAgYWx0PSdUcmFjayBwaWN0dXJlJ1xyXG4gICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAvPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPXsnY29sdW1uJ30gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgIDxoMj57dHJhY2submFtZX08L2gyPlxyXG4gICAgICAgIDxoMz57dHJhY2suYXJ0aXN0fTwvaDM+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBvbkNsaWNrPXtkZWxldGVUcmFja2hhbmRsZXJ9PlxyXG4gICAgICAgIDxEZWxldGUgLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tJdGVtXHJcbiJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0QWN0aXZlVHJhY2siLCJzZXRJc1RyYWNrUGxheWluZyIsInNldFByZXZpb3VzVHJhY2siLCJEZWxldGUiLCJQYXVzZSIsIlBsYXlBcnJvdyIsIkNhcmQiLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIkltYWdlIiwidXNlUm91dGVyIiwic3R5bGVzIiwiZGVsZXRlVHJhY2tBY3Rpb24iLCJUcmFja0l0ZW0iLCJ0cmFjayIsImFjdGl2ZVRyYWNrIiwicm91dGVyIiwiZGlzcGF0Y2giLCJwcmV2aW91c1RyYWNrIiwiaXNUcmFja1BsYXlpbmciLCJzdGF0ZSIsInBsYXllclNsaWNlIiwiY2hvb3NlVHJhY2siLCJfaWQiLCJkZWxldGVUcmFja2hhbmRsZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsInB1c2giLCJzcmMiLCJwaWN0dXJlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250YWluZXIiLCJkaXJlY3Rpb24iLCJ0aXRsZSIsImgyIiwibmFtZSIsImgzIiwiYXJ0aXN0IiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TrackItem.tsx\n"));

/***/ })

});