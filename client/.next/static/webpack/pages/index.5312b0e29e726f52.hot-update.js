"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Player.tsx":
/*!***********************************!*\
  !*** ./src/components/Player.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/reducers/playerSlice */ \"./src/store/reducers/playerSlice.ts\");\n/* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Pause */ \"./node_modules/@mui/icons-material/Pause.js\");\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ \"./node_modules/@mui/icons-material/PlayArrow.js\");\n/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/VolumeUp */ \"./node_modules/@mui/icons-material/VolumeUp.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Player.module.scss */ \"./src/styles/Player.module.scss\");\n/* harmony import */ var _styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TrackProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackProgress */ \"./src/components/TrackProgress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nlet audio;\nconst Player = ()=>{\n    var _activeTrack, _activeTrack1;\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const { activeTrack, isTrackPlaying, volume, currentTime, duration, previousTrack } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.playerSlice);\n    const { tracks } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.trackSlice);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (activeTrack) {\n            if (audio) {\n                if (!isTrackPlaying) {\n                    stopTrack();\n                    return;\n                }\n                if (isTrackPlaying && currentTime !== 0 && audio.src === \"http://localhost:5000/\" + activeTrack.audio) {\n                    startTrack();\n                    return;\n                }\n                stopTrack();\n                audio = new Audio();\n                audio.src = \"http://localhost:5000/\" + activeTrack.audio;\n                audio.volume = 1;\n                audio.volume = volume / 100;\n                audio.onloadedmetadata = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setDuration)(Math.ceil(audio.duration)));\n                };\n                audio.ontimeupdate = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Math.ceil(audio.currentTime)));\n                };\n                startTrack();\n            } else {\n                audio = new Audio();\n                audio.src = \"http://localhost:5000/\" + activeTrack.audio;\n                audio.volume = 1;\n                audio.volume = volume / 100;\n                audio.onloadedmetadata = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setDuration)(Math.ceil(audio.duration)));\n                };\n                audio.ontimeupdate = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Math.ceil(audio.currentTime)));\n                };\n                startTrack();\n            }\n        } else {\n            const isTrackRemoved = tracks.some((track)=>track.audio === audio.src.replace(\"http://localhost:5000/\", \"\"));\n            if (isTrackRemoved) {\n                stopTrack();\n            }\n        }\n    }, [\n        activeTrack,\n        isTrackPlaying,\n        previousTrack\n    ]);\n    const resetAfterRemoving = ()=>{};\n    const startTrack = ()=>{\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(true));\n        return audio.play();\n    };\n    const stopTrack = ()=>{\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(false));\n        return audio.pause();\n    };\n    const changeVolume = (e)=>{\n        audio.volume = Number(e.target.value) / 100;\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setVolume)(Number(e.target.value)));\n    };\n    const changeCurrentTime = (e)=>{\n        audio.currentTime = Number(e.target.value);\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Number(e.target.value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5___default().player),\n        children: activeTrack && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                    onClick: !isTrackPlaying ? startTrack : stopTrack,\n                    children: !isTrackPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 32\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 48\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                    container: true,\n                    direction: \"column\",\n                    style: {\n                        width: 200,\n                        margin: \"0 20px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (_activeTrack = activeTrack) === null || _activeTrack === void 0 ? void 0 : _activeTrack.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                fontSize: 12,\n                                color: \"gray\"\n                            },\n                            children: (_activeTrack1 = activeTrack) === null || _activeTrack1 === void 0 ? void 0 : _activeTrack1.artist\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    current: currentTime,\n                    max: duration,\n                    onChange: changeCurrentTime\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    style: {\n                        marginLeft: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    current: volume,\n                    max: 100,\n                    onChange: changeVolume\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Player, \"yC1vxWLvSg3uB2zupJNLIfKCBNI=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWNBLENBQUMwQyxPQUFPRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBV3JDLDBFQUFhO2tCQUMxQkksNkJBQ0M7OzhCQUNFLDhEQUFDTixxREFBVUE7b0JBQUN5QyxTQUFTLENBQUNqQyxpQkFBaUJXLGFBQWFGOzhCQUNqRCxDQUFDVCwrQkFBaUIsOERBQUNYLHFFQUFTQTs7OztrREFBTSw4REFBQ0QsaUVBQUtBOzs7Ozs7Ozs7OzhCQUUzQyw4REFBQ0csK0NBQUlBO29CQUFDMkMsU0FBUztvQkFBQ0MsV0FBVTtvQkFBU0MsT0FBTzt3QkFBRUMsT0FBTzt3QkFBS0MsUUFBUTtvQkFBUzs7c0NBQ3ZFLDhEQUFDUjt1Q0FBS2hDLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYXlDLElBQUk7Ozs7OztzQ0FDdkIsOERBQUNUOzRCQUFJTSxPQUFPO2dDQUFFSSxVQUFVO2dDQUFJQyxPQUFPOzRCQUFPO3VDQUFJM0MsZ0JBQUFBLHlCQUFBQSxvQ0FBQUEsY0FBYTRDLE1BQU07Ozs7Ozs7Ozs7Ozs4QkFFbkUsOERBQUMvQyxzREFBYUE7b0JBQUNnRCxTQUFTekM7b0JBQWEwQyxLQUFLekM7b0JBQVUwQyxVQUFVaEI7Ozs7Ozs4QkFDOUQsOERBQUN2QyxvRUFBUUE7b0JBQUM4QyxPQUFPO3dCQUFFVSxZQUFZO29CQUFPOzs7Ozs7OEJBQ3RDLDhEQUFDbkQsc0RBQWFBO29CQUFDZ0QsU0FBUzFDO29CQUFRMkMsS0FBSztvQkFBS0MsVUFBVXJCOzs7Ozs7Ozs7Ozs7O0FBSzlEO0dBOUZNM0I7O1FBQ2FmLHdEQUFjQTtRQUU3QkMsd0RBQWNBO1FBQ0dBLHdEQUFjQTs7O0tBSjdCYztBQWdHTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIudHN4P2EyNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9ob29rcy9yZWR1eCdcclxuaW1wb3J0IHtcclxuICBzZXRDdXJyZW50VGltZSxcclxuICBzZXREdXJhdGlvbixcclxuICBzZXRJc1RyYWNrUGxheWluZyxcclxuICBzZXRWb2x1bWUsXHJcbn0gZnJvbSAnQC9zdG9yZS9yZWR1Y2Vycy9wbGF5ZXJTbGljZSdcclxuaW1wb3J0IHsgUGF1c2UsIFBsYXlBcnJvdywgVm9sdW1lVXAgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJ1xyXG5pbXBvcnQgeyBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUGxheWVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgVHJhY2tQcm9ncmVzcyBmcm9tICcuL1RyYWNrUHJvZ3Jlc3MnXHJcbmltcG9ydCB7IE5leHRUaHVua0Rpc3BhdGNoLCB3cmFwcGVyIH0gZnJvbSAnQC9zdG9yZSdcclxuaW1wb3J0IHsgSVRyYWNrIH0gZnJvbSAnQC90eXBlcy90cmFjaydcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcclxuXHJcbmxldCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudFxyXG5cclxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgYWN0aXZlVHJhY2ssIGlzVHJhY2tQbGF5aW5nLCB2b2x1bWUsIGN1cnJlbnRUaW1lLCBkdXJhdGlvbiwgcHJldmlvdXNUcmFjayB9ID1cclxuICAgIHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBsYXllclNsaWNlKVxyXG4gIGNvbnN0IHsgdHJhY2tzIH0gPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50cmFja1NsaWNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2ZVRyYWNrKSB7XHJcbiAgICAgIGlmIChhdWRpbykge1xyXG4gICAgICAgIGlmICghaXNUcmFja1BsYXlpbmcpIHtcclxuICAgICAgICAgIHN0b3BUcmFjaygpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaXNUcmFja1BsYXlpbmcgJiZcclxuICAgICAgICAgIGN1cnJlbnRUaW1lICE9PSAwICYmXHJcbiAgICAgICAgICBhdWRpby5zcmMgPT09ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyArIGFjdGl2ZVRyYWNrLmF1ZGlvXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzdGFydFRyYWNrKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9wVHJhY2soKVxyXG4gICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKClcclxuICAgICAgICBhdWRpby5zcmMgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycgKyBhY3RpdmVUcmFjay5hdWRpb1xyXG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IDFcclxuICAgICAgICBhdWRpby52b2x1bWUgPSB2b2x1bWUgLyAxMDBcclxuICAgICAgICBhdWRpby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0RHVyYXRpb24oTWF0aC5jZWlsKGF1ZGlvLmR1cmF0aW9uKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1ZGlvLm9udGltZXVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRUaW1lKE1hdGguY2VpbChhdWRpby5jdXJyZW50VGltZSkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFydFRyYWNrKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgICAgICAgYXVkaW8uc3JjID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nICsgYWN0aXZlVHJhY2suYXVkaW9cclxuICAgICAgICBhdWRpby52b2x1bWUgPSAxXHJcbiAgICAgICAgYXVkaW8udm9sdW1lID0gdm9sdW1lIC8gMTAwXHJcbiAgICAgICAgYXVkaW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldER1cmF0aW9uKE1hdGguY2VpbChhdWRpby5kdXJhdGlvbikpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhdWRpby5vbnRpbWV1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50VGltZShNYXRoLmNlaWwoYXVkaW8uY3VycmVudFRpbWUpKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhcnRUcmFjaygpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGlzVHJhY2tSZW1vdmVkID0gdHJhY2tzLnNvbWUoXHJcbiAgICAgICAgdHJhY2sgPT4gdHJhY2suYXVkaW8gPT09IGF1ZGlvLnNyYy5yZXBsYWNlKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvJywgJycpXHJcbiAgICAgIClcclxuICAgICAgaWYgKGlzVHJhY2tSZW1vdmVkKSB7XHJcbiAgICAgICAgc3RvcFRyYWNrKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVUcmFjaywgaXNUcmFja1BsYXlpbmcsIHByZXZpb3VzVHJhY2tdKVxyXG5cclxuICBjb25zdCByZXNldEFmdGVyUmVtb3ZpbmcgPSAoKSA9PiB7fVxyXG5cclxuICBjb25zdCBzdGFydFRyYWNrID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0SXNUcmFja1BsYXlpbmcodHJ1ZSkpXHJcbiAgICByZXR1cm4gYXVkaW8ucGxheSgpXHJcbiAgfVxyXG4gIGNvbnN0IHN0b3BUcmFjayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldElzVHJhY2tQbGF5aW5nKGZhbHNlKSlcclxuICAgIHJldHVybiBhdWRpby5wYXVzZSgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VWb2x1bWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGF1ZGlvLnZvbHVtZSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLyAxMDBcclxuICAgIGRpc3BhdGNoKHNldFZvbHVtZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlQ3VycmVudFRpbWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgZGlzcGF0Y2goc2V0Q3VycmVudFRpbWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJ9PlxyXG4gICAgICB7YWN0aXZlVHJhY2sgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXshaXNUcmFja1BsYXlpbmcgPyBzdGFydFRyYWNrIDogc3RvcFRyYWNrfT5cclxuICAgICAgICAgICAgeyFpc1RyYWNrUGxheWluZyA/IDxQbGF5QXJyb3cgLz4gOiA8UGF1c2UgLz59XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIHN0eWxlPXt7IHdpZHRoOiAyMDAsIG1hcmdpbjogJzAgMjBweCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXY+e2FjdGl2ZVRyYWNrPy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICdncmF5JyB9fT57YWN0aXZlVHJhY2s/LmFydGlzdH08L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxUcmFja1Byb2dyZXNzIGN1cnJlbnQ9e2N1cnJlbnRUaW1lfSBtYXg9e2R1cmF0aW9ufSBvbkNoYW5nZT17Y2hhbmdlQ3VycmVudFRpbWV9IC8+XHJcbiAgICAgICAgICA8Vm9sdW1lVXAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19IC8+XHJcbiAgICAgICAgICA8VHJhY2tQcm9ncmVzcyBjdXJyZW50PXt2b2x1bWV9IG1heD17MTAwfSBvbkNoYW5nZT17Y2hhbmdlVm9sdW1lfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJcclxuIl0sIm5hbWVzIjpbInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRDdXJyZW50VGltZSIsInNldER1cmF0aW9uIiwic2V0SXNUcmFja1BsYXlpbmciLCJzZXRWb2x1bWUiLCJQYXVzZSIsIlBsYXlBcnJvdyIsIlZvbHVtZVVwIiwiR3JpZCIsIkljb25CdXR0b24iLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJUcmFja1Byb2dyZXNzIiwiYXVkaW8iLCJQbGF5ZXIiLCJhY3RpdmVUcmFjayIsImRpc3BhdGNoIiwiaXNUcmFja1BsYXlpbmciLCJ2b2x1bWUiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwicHJldmlvdXNUcmFjayIsInN0YXRlIiwicGxheWVyU2xpY2UiLCJ0cmFja3MiLCJ0cmFja1NsaWNlIiwic3RvcFRyYWNrIiwic3JjIiwic3RhcnRUcmFjayIsIkF1ZGlvIiwib25sb2FkZWRtZXRhZGF0YSIsIk1hdGgiLCJjZWlsIiwib250aW1ldXBkYXRlIiwiaXNUcmFja1JlbW92ZWQiLCJzb21lIiwidHJhY2siLCJyZXBsYWNlIiwicmVzZXRBZnRlclJlbW92aW5nIiwicGxheSIsInBhdXNlIiwiY2hhbmdlVm9sdW1lIiwiZSIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlQ3VycmVudFRpbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwbGF5ZXIiLCJvbkNsaWNrIiwiY29udGFpbmVyIiwiZGlyZWN0aW9uIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsIm5hbWUiLCJmb250U2l6ZSIsImNvbG9yIiwiYXJ0aXN0IiwiY3VycmVudCIsIm1heCIsIm9uQ2hhbmdlIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Player.tsx\n"));

/***/ })

});