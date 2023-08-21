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

/***/ "./src/components/Player.tsx":
/*!***********************************!*\
  !*** ./src/components/Player.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/reducers/playerSlice */ \"./src/store/reducers/playerSlice.ts\");\n/* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Pause */ \"./node_modules/@mui/icons-material/Pause.js\");\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ \"./node_modules/@mui/icons-material/PlayArrow.js\");\n/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/VolumeUp */ \"./node_modules/@mui/icons-material/VolumeUp.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Player.module.scss */ \"./src/styles/Player.module.scss\");\n/* harmony import */ var _styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TrackProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackProgress */ \"./src/components/TrackProgress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nlet audio;\nconst Player = ()=>{\n    var _activeTrack, _activeTrack1;\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const { activeTrack, isTrackPlaying, volume, currentTime, duration, previousTrack } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.playerSlice);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (activeTrack) {\n            if (audio) {\n                if (!isTrackPlaying) {\n                    stopTrack();\n                    return;\n                }\n                if (isTrackPlaying && currentTime !== 0 && audio.src === \"http://localhost:5000/\" + activeTrack.audio) {\n                    startTrack();\n                    return;\n                }\n                stopTrack();\n                audio = new Audio();\n                audio.src = \"http://localhost:5000/\" + activeTrack.audio;\n                audio.volume = 1;\n                audio.volume = volume / 100;\n                audio.onloadedmetadata = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setDuration)(Math.ceil(audio.duration)));\n                };\n                audio.ontimeupdate = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Math.ceil(audio.currentTime)));\n                };\n                startTrack();\n            } else {\n                audio = new Audio();\n                audio.src = \"http://localhost:5000/\" + activeTrack.audio;\n                audio.volume = 1;\n                audio.volume = volume / 100;\n                audio.onloadedmetadata = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setDuration)(Math.ceil(audio.duration)));\n                };\n                audio.ontimeupdate = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Math.ceil(audio.currentTime)));\n                };\n                startTrack();\n            }\n        } else {}\n    }, [\n        activeTrack,\n        isTrackPlaying,\n        previousTrack\n    ]);\n    const resetAfterRemoving = ()=>{};\n    const startTrack = ()=>{\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(true));\n        return audio.play();\n    };\n    const stopTrack = ()=>{\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(false));\n        return audio.pause();\n    };\n    const changeVolume = (e)=>{\n        audio.volume = Number(e.target.value) / 100;\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setVolume)(Number(e.target.value)));\n    };\n    const changeCurrentTime = (e)=>{\n        audio.currentTime = Number(e.target.value);\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Number(e.target.value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5___default().player),\n        children: activeTrack && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                    onClick: !isTrackPlaying ? startTrack : stopTrack,\n                    children: !isTrackPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 32\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 48\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                    container: true,\n                    direction: \"column\",\n                    style: {\n                        width: 200,\n                        margin: \"0 20px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (_activeTrack = activeTrack) === null || _activeTrack === void 0 ? void 0 : _activeTrack.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                fontSize: 12,\n                                color: \"gray\"\n                            },\n                            children: (_activeTrack1 = activeTrack) === null || _activeTrack1 === void 0 ? void 0 : _activeTrack1.artist\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    current: currentTime,\n                    max: duration,\n                    onChange: changeCurrentTime\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    style: {\n                        marginLeft: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    current: volume,\n                    max: 100,\n                    onChange: changeVolume\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Player, \"HvpNfbDl7xouGMPAvgqyscK2/6Y=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzhCQUUzQyw4REFBQ0csK0NBQUlBO29CQUFDcUMsU0FBUztvQkFBQ0MsV0FBVTtvQkFBU0MsT0FBTzt3QkFBRUMsT0FBTzt3QkFBS0MsUUFBUTtvQkFBUzs7c0NBQ3ZFLDhEQUFDUjt1Q0FBSzFCLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYW1DLElBQUk7Ozs7OztzQ0FDdkIsOERBQUNUOzRCQUFJTSxPQUFPO2dDQUFFSSxVQUFVO2dDQUFJQyxPQUFPOzRCQUFPO3VDQUFJckMsZ0JBQUFBLHlCQUFBQSxvQ0FBQUEsY0FBYXNDLE1BQU07Ozs7Ozs7Ozs7Ozs4QkFFbkUsOERBQUN6QyxzREFBYUE7b0JBQUMwQyxTQUFTbkM7b0JBQWFvQyxLQUFLbkM7b0JBQVVvQyxVQUFVaEI7Ozs7Ozs4QkFDOUQsOERBQUNqQyxvRUFBUUE7b0JBQUN3QyxPQUFPO3dCQUFFVSxZQUFZO29CQUFPOzs7Ozs7OEJBQ3RDLDhEQUFDN0Msc0RBQWFBO29CQUFDMEMsU0FBU3BDO29CQUFRcUMsS0FBSztvQkFBS0MsVUFBVXJCOzs7Ozs7Ozs7Ozs7O0FBSzlEO0dBdkZNckI7O1FBQ2FmLHdEQUFjQTtRQUU3QkMsd0RBQWNBOzs7S0FIWmM7QUF5Rk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyLnRzeD9hMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MvcmVkdXgnXHJcbmltcG9ydCB7XHJcbiAgc2V0Q3VycmVudFRpbWUsXHJcbiAgc2V0RHVyYXRpb24sXHJcbiAgc2V0SXNUcmFja1BsYXlpbmcsXHJcbiAgc2V0Vm9sdW1lLFxyXG59IGZyb20gJ0Avc3RvcmUvcmVkdWNlcnMvcGxheWVyU2xpY2UnXHJcbmltcG9ydCB7IFBhdXNlLCBQbGF5QXJyb3csIFZvbHVtZVVwIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCdcclxuaW1wb3J0IHsgR3JpZCwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1BsYXllci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFRyYWNrUHJvZ3Jlc3MgZnJvbSAnLi9UcmFja1Byb2dyZXNzJ1xyXG5pbXBvcnQgeyBOZXh0VGh1bmtEaXNwYXRjaCwgd3JhcHBlciB9IGZyb20gJ0Avc3RvcmUnXHJcbmltcG9ydCB7IElUcmFjayB9IGZyb20gJ0AvdHlwZXMvdHJhY2snXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXHJcblxyXG5sZXQgYXVkaW86IEhUTUxBdWRpb0VsZW1lbnRcclxuXHJcbmNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICBjb25zdCB7IGFjdGl2ZVRyYWNrLCBpc1RyYWNrUGxheWluZywgdm9sdW1lLCBjdXJyZW50VGltZSwgZHVyYXRpb24sIHByZXZpb3VzVHJhY2sgfSA9XHJcbiAgICB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wbGF5ZXJTbGljZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmVUcmFjaykge1xyXG4gICAgICBpZiAoYXVkaW8pIHtcclxuICAgICAgICBpZiAoIWlzVHJhY2tQbGF5aW5nKSB7XHJcbiAgICAgICAgICBzdG9wVHJhY2soKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGlzVHJhY2tQbGF5aW5nICYmXHJcbiAgICAgICAgICBjdXJyZW50VGltZSAhPT0gMCAmJlxyXG4gICAgICAgICAgYXVkaW8uc3JjID09PSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycgKyBhY3RpdmVUcmFjay5hdWRpb1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3RhcnRUcmFjaygpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcFRyYWNrKClcclxuICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgICAgICAgYXVkaW8uc3JjID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nICsgYWN0aXZlVHJhY2suYXVkaW9cclxuICAgICAgICBhdWRpby52b2x1bWUgPSAxXHJcbiAgICAgICAgYXVkaW8udm9sdW1lID0gdm9sdW1lIC8gMTAwXHJcbiAgICAgICAgYXVkaW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldER1cmF0aW9uKE1hdGguY2VpbChhdWRpby5kdXJhdGlvbikpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhdWRpby5vbnRpbWV1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50VGltZShNYXRoLmNlaWwoYXVkaW8uY3VycmVudFRpbWUpKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhcnRUcmFjaygpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8oKVxyXG4gICAgICAgIGF1ZGlvLnNyYyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyArIGFjdGl2ZVRyYWNrLmF1ZGlvXHJcbiAgICAgICAgYXVkaW8udm9sdW1lID0gMVxyXG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZSAvIDEwMFxyXG4gICAgICAgIGF1ZGlvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXREdXJhdGlvbihNYXRoLmNlaWwoYXVkaW8uZHVyYXRpb24pKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXVkaW8ub250aW1ldXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFRpbWUoTWF0aC5jZWlsKGF1ZGlvLmN1cnJlbnRUaW1lKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXJ0VHJhY2soKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVUcmFjaywgaXNUcmFja1BsYXlpbmcsIHByZXZpb3VzVHJhY2tdKVxyXG5cclxuICBjb25zdCByZXNldEFmdGVyUmVtb3ZpbmcgPSAoKSA9PiB7fVxyXG5cclxuICBjb25zdCBzdGFydFRyYWNrID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0SXNUcmFja1BsYXlpbmcodHJ1ZSkpXHJcbiAgICByZXR1cm4gYXVkaW8ucGxheSgpXHJcbiAgfVxyXG4gIGNvbnN0IHN0b3BUcmFjayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldElzVHJhY2tQbGF5aW5nKGZhbHNlKSlcclxuICAgIHJldHVybiBhdWRpby5wYXVzZSgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VWb2x1bWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGF1ZGlvLnZvbHVtZSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLyAxMDBcclxuICAgIGRpc3BhdGNoKHNldFZvbHVtZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlQ3VycmVudFRpbWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgZGlzcGF0Y2goc2V0Q3VycmVudFRpbWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJ9PlxyXG4gICAgICB7YWN0aXZlVHJhY2sgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXshaXNUcmFja1BsYXlpbmcgPyBzdGFydFRyYWNrIDogc3RvcFRyYWNrfT5cclxuICAgICAgICAgICAgeyFpc1RyYWNrUGxheWluZyA/IDxQbGF5QXJyb3cgLz4gOiA8UGF1c2UgLz59XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIHN0eWxlPXt7IHdpZHRoOiAyMDAsIG1hcmdpbjogJzAgMjBweCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXY+e2FjdGl2ZVRyYWNrPy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICdncmF5JyB9fT57YWN0aXZlVHJhY2s/LmFydGlzdH08L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxUcmFja1Byb2dyZXNzIGN1cnJlbnQ9e2N1cnJlbnRUaW1lfSBtYXg9e2R1cmF0aW9ufSBvbkNoYW5nZT17Y2hhbmdlQ3VycmVudFRpbWV9IC8+XHJcbiAgICAgICAgICA8Vm9sdW1lVXAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19IC8+XHJcbiAgICAgICAgICA8VHJhY2tQcm9ncmVzcyBjdXJyZW50PXt2b2x1bWV9IG1heD17MTAwfSBvbkNoYW5nZT17Y2hhbmdlVm9sdW1lfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJcclxuIl0sIm5hbWVzIjpbInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRDdXJyZW50VGltZSIsInNldER1cmF0aW9uIiwic2V0SXNUcmFja1BsYXlpbmciLCJzZXRWb2x1bWUiLCJQYXVzZSIsIlBsYXlBcnJvdyIsIlZvbHVtZVVwIiwiR3JpZCIsIkljb25CdXR0b24iLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJUcmFja1Byb2dyZXNzIiwiYXVkaW8iLCJQbGF5ZXIiLCJhY3RpdmVUcmFjayIsImRpc3BhdGNoIiwiaXNUcmFja1BsYXlpbmciLCJ2b2x1bWUiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwicHJldmlvdXNUcmFjayIsInN0YXRlIiwicGxheWVyU2xpY2UiLCJzdG9wVHJhY2siLCJzcmMiLCJzdGFydFRyYWNrIiwiQXVkaW8iLCJvbmxvYWRlZG1ldGFkYXRhIiwiTWF0aCIsImNlaWwiLCJvbnRpbWV1cGRhdGUiLCJyZXNldEFmdGVyUmVtb3ZpbmciLCJwbGF5IiwicGF1c2UiLCJjaGFuZ2VWb2x1bWUiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJjaGFuZ2VDdXJyZW50VGltZSIsImRpdiIsImNsYXNzTmFtZSIsInBsYXllciIsIm9uQ2xpY2siLCJjb250YWluZXIiLCJkaXJlY3Rpb24iLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luIiwibmFtZSIsImZvbnRTaXplIiwiY29sb3IiLCJhcnRpc3QiLCJjdXJyZW50IiwibWF4Iiwib25DaGFuZ2UiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player.tsx\n"));

/***/ })

});