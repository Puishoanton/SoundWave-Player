"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tracks/[id]",{

/***/ "./src/components/Player.tsx":
/*!***********************************!*\
  !*** ./src/components/Player.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/reducers/playerSlice */ \"./src/store/reducers/playerSlice.ts\");\n/* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Pause */ \"./node_modules/@mui/icons-material/Pause.js\");\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ \"./node_modules/@mui/icons-material/PlayArrow.js\");\n/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/VolumeUp */ \"./node_modules/@mui/icons-material/VolumeUp.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Player.module.scss */ \"./src/styles/Player.module.scss\");\n/* harmony import */ var _styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TrackProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackProgress */ \"./src/components/TrackProgress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nlet audio;\nconst Player = ()=>{\n    var _activeTrack, _activeTrack1;\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const { activeTrack, isTrackPlaying, volume, currentTime, duration, previousTrack } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.playerSlice);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(123);\n        if (activeTrack) {\n            if (audio) {\n                if (!isTrackPlaying) {\n                    stopTrack();\n                    return;\n                }\n                if (isTrackPlaying && currentTime !== 0 && audio.src === \"http://localhost:5000/\" + activeTrack.audio) {\n                    startTrack();\n                    return;\n                }\n                stopTrack();\n                audio = new Audio();\n                audio.src = \"http://localhost:5000/\" + activeTrack.audio;\n                audio.volume = 1;\n                audio.volume = volume / 100;\n                audio.onloadedmetadata = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setDuration)(Math.ceil(audio.duration)));\n                };\n                audio.ontimeupdate = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Math.ceil(audio.currentTime)));\n                };\n                startTrack();\n            } else {\n                audio = new Audio();\n                audio.src = \"http://localhost:5000/\" + activeTrack.audio;\n                audio.volume = 1;\n                audio.volume = volume / 100;\n                audio.onloadedmetadata = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setDuration)(Math.ceil(audio.duration)));\n                };\n                audio.ontimeupdate = ()=>{\n                    dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Math.ceil(audio.currentTime)));\n                };\n                startTrack();\n            }\n        } else {\n            if (!activeTrack && previousTrack) {\n                stopTrack();\n            }\n        }\n    }, [\n        activeTrack,\n        isTrackPlaying,\n        previousTrack\n    ]);\n    const startTrack = ()=>{\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(true));\n        return audio.play();\n    };\n    const stopTrack = ()=>{\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(false));\n        return audio.pause();\n    };\n    const changeVolume = (e)=>{\n        audio.volume = Number(e.target.value) / 100;\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setVolume)(Number(e.target.value)));\n    };\n    const changeCurrentTime = (e)=>{\n        audio.currentTime = Number(e.target.value);\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Number(e.target.value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5___default().player),\n        children: activeTrack && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                    onClick: !isTrackPlaying ? startTrack : stopTrack,\n                    children: !isTrackPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 32\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 48\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                    container: true,\n                    direction: \"column\",\n                    style: {\n                        width: 200,\n                        margin: \"0 20px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (_activeTrack = activeTrack) === null || _activeTrack === void 0 ? void 0 : _activeTrack.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                fontSize: 12,\n                                color: \"gray\"\n                            },\n                            children: (_activeTrack1 = activeTrack) === null || _activeTrack1 === void 0 ? void 0 : _activeTrack1.artist\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    current: currentTime,\n                    max: duration,\n                    onChange: changeCurrentTime\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    style: {\n                        marginLeft: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    current: volume,\n                    max: 100,\n                    onChange: changeVolume\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Player, \"HvpNfbDl7xouGMPAvgqyscK2/6Y=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLDhEQUFDWCxxRUFBU0E7Ozs7a0RBQU0sOERBQUNELGlFQUFLQTs7Ozs7Ozs7Ozs4QkFFM0MsOERBQUNHLCtDQUFJQTtvQkFBQ3NDLFNBQVM7b0JBQUNDLFdBQVU7b0JBQVNDLE9BQU87d0JBQUVDLE9BQU87d0JBQUtDLFFBQVE7b0JBQVM7O3NDQUN2RSw4REFBQ1I7dUNBQUszQixlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFvQyxJQUFJOzs7Ozs7c0NBQ3ZCLDhEQUFDVDs0QkFBSU0sT0FBTztnQ0FBRUksVUFBVTtnQ0FBSUMsT0FBTzs0QkFBTzt1Q0FBSXRDLGdCQUFBQSx5QkFBQUEsb0NBQUFBLGNBQWF1QyxNQUFNOzs7Ozs7Ozs7Ozs7OEJBRW5FLDhEQUFDMUMsc0RBQWFBO29CQUFDMkMsU0FBU3BDO29CQUFhcUMsS0FBS3BDO29CQUFVcUMsVUFBVWhCOzs7Ozs7OEJBQzlELDhEQUFDbEMsb0VBQVFBO29CQUFDeUMsT0FBTzt3QkFBRVUsWUFBWTtvQkFBTzs7Ozs7OzhCQUN0Qyw4REFBQzlDLHNEQUFhQTtvQkFBQzJDLFNBQVNyQztvQkFBUXNDLEtBQUs7b0JBQUtDLFVBQVVyQjs7Ozs7Ozs7Ozs7OztBQUs5RDtHQXpGTXRCOztRQUNhZix3REFBY0E7UUFFN0JDLHdEQUFjQTs7O0tBSFpjO0FBMkZOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci50c3g/YTI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzL3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIHNldEN1cnJlbnRUaW1lLFxyXG4gIHNldER1cmF0aW9uLFxyXG4gIHNldElzVHJhY2tQbGF5aW5nLFxyXG4gIHNldFZvbHVtZSxcclxufSBmcm9tICdAL3N0b3JlL3JlZHVjZXJzL3BsYXllclNsaWNlJ1xyXG5pbXBvcnQgeyBQYXVzZSwgUGxheUFycm93LCBWb2x1bWVVcCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnXHJcbmltcG9ydCB7IEdyaWQsIEljb25CdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9QbGF5ZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBUcmFja1Byb2dyZXNzIGZyb20gJy4vVHJhY2tQcm9ncmVzcydcclxuaW1wb3J0IHsgTmV4dFRodW5rRGlzcGF0Y2gsIHdyYXBwZXIgfSBmcm9tICdAL3N0b3JlJ1xyXG5pbXBvcnQgeyBJVHJhY2sgfSBmcm9tICdAL3R5cGVzL3RyYWNrJ1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5cclxubGV0IGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50XHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBhY3RpdmVUcmFjaywgaXNUcmFja1BsYXlpbmcsIHZvbHVtZSwgY3VycmVudFRpbWUsIGR1cmF0aW9uLCBwcmV2aW91c1RyYWNrIH0gPVxyXG4gICAgdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGxheWVyU2xpY2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygxMjMpXHJcbiAgICBpZiAoYWN0aXZlVHJhY2spIHtcclxuICAgICAgaWYgKGF1ZGlvKSB7XHJcbiAgICAgICAgaWYgKCFpc1RyYWNrUGxheWluZykge1xyXG4gICAgICAgICAgc3RvcFRyYWNrKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBpc1RyYWNrUGxheWluZyAmJlxyXG4gICAgICAgICAgY3VycmVudFRpbWUgIT09IDAgJiZcclxuICAgICAgICAgIGF1ZGlvLnNyYyA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nICsgYWN0aXZlVHJhY2suYXVkaW9cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHN0YXJ0VHJhY2soKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3BUcmFjaygpXHJcbiAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8oKVxyXG4gICAgICAgIGF1ZGlvLnNyYyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyArIGFjdGl2ZVRyYWNrLmF1ZGlvXHJcbiAgICAgICAgYXVkaW8udm9sdW1lID0gMVxyXG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZSAvIDEwMFxyXG4gICAgICAgIGF1ZGlvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXREdXJhdGlvbihNYXRoLmNlaWwoYXVkaW8uZHVyYXRpb24pKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXVkaW8ub250aW1ldXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFRpbWUoTWF0aC5jZWlsKGF1ZGlvLmN1cnJlbnRUaW1lKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXJ0VHJhY2soKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKClcclxuICAgICAgICBhdWRpby5zcmMgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycgKyBhY3RpdmVUcmFjay5hdWRpb1xyXG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IDFcclxuICAgICAgICBhdWRpby52b2x1bWUgPSB2b2x1bWUgLyAxMDBcclxuICAgICAgICBhdWRpby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0RHVyYXRpb24oTWF0aC5jZWlsKGF1ZGlvLmR1cmF0aW9uKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1ZGlvLm9udGltZXVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRUaW1lKE1hdGguY2VpbChhdWRpby5jdXJyZW50VGltZSkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFydFRyYWNrKClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFhY3RpdmVUcmFjayAmJiBwcmV2aW91c1RyYWNrKSB7XHJcbiAgICAgICAgc3RvcFRyYWNrKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVUcmFjaywgaXNUcmFja1BsYXlpbmcsIHByZXZpb3VzVHJhY2tdKVxyXG5cclxuICBjb25zdCBzdGFydFRyYWNrID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0SXNUcmFja1BsYXlpbmcodHJ1ZSkpXHJcbiAgICByZXR1cm4gYXVkaW8ucGxheSgpXHJcbiAgfVxyXG4gIGNvbnN0IHN0b3BUcmFjayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldElzVHJhY2tQbGF5aW5nKGZhbHNlKSlcclxuICAgIHJldHVybiBhdWRpby5wYXVzZSgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VWb2x1bWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGF1ZGlvLnZvbHVtZSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLyAxMDBcclxuICAgIGRpc3BhdGNoKHNldFZvbHVtZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlQ3VycmVudFRpbWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgZGlzcGF0Y2goc2V0Q3VycmVudFRpbWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJ9PlxyXG4gICAgICB7YWN0aXZlVHJhY2sgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXshaXNUcmFja1BsYXlpbmcgPyBzdGFydFRyYWNrIDogc3RvcFRyYWNrfT5cclxuICAgICAgICAgICAgeyFpc1RyYWNrUGxheWluZyA/IDxQbGF5QXJyb3cgLz4gOiA8UGF1c2UgLz59XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIHN0eWxlPXt7IHdpZHRoOiAyMDAsIG1hcmdpbjogJzAgMjBweCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXY+e2FjdGl2ZVRyYWNrPy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICdncmF5JyB9fT57YWN0aXZlVHJhY2s/LmFydGlzdH08L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxUcmFja1Byb2dyZXNzIGN1cnJlbnQ9e2N1cnJlbnRUaW1lfSBtYXg9e2R1cmF0aW9ufSBvbkNoYW5nZT17Y2hhbmdlQ3VycmVudFRpbWV9IC8+XHJcbiAgICAgICAgICA8Vm9sdW1lVXAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19IC8+XHJcbiAgICAgICAgICA8VHJhY2tQcm9ncmVzcyBjdXJyZW50PXt2b2x1bWV9IG1heD17MTAwfSBvbkNoYW5nZT17Y2hhbmdlVm9sdW1lfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJcclxuIl0sIm5hbWVzIjpbInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRDdXJyZW50VGltZSIsInNldER1cmF0aW9uIiwic2V0SXNUcmFja1BsYXlpbmciLCJzZXRWb2x1bWUiLCJQYXVzZSIsIlBsYXlBcnJvdyIsIlZvbHVtZVVwIiwiR3JpZCIsIkljb25CdXR0b24iLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJUcmFja1Byb2dyZXNzIiwiYXVkaW8iLCJQbGF5ZXIiLCJhY3RpdmVUcmFjayIsImRpc3BhdGNoIiwiaXNUcmFja1BsYXlpbmciLCJ2b2x1bWUiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwicHJldmlvdXNUcmFjayIsInN0YXRlIiwicGxheWVyU2xpY2UiLCJjb25zb2xlIiwibG9nIiwic3RvcFRyYWNrIiwic3JjIiwic3RhcnRUcmFjayIsIkF1ZGlvIiwib25sb2FkZWRtZXRhZGF0YSIsIk1hdGgiLCJjZWlsIiwib250aW1ldXBkYXRlIiwicGxheSIsInBhdXNlIiwiY2hhbmdlVm9sdW1lIiwiZSIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlQ3VycmVudFRpbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwbGF5ZXIiLCJvbkNsaWNrIiwiY29udGFpbmVyIiwiZGlyZWN0aW9uIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsIm5hbWUiLCJmb250U2l6ZSIsImNvbG9yIiwiYXJ0aXN0IiwiY3VycmVudCIsIm1heCIsIm9uQ2hhbmdlIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Player.tsx\n"));

/***/ })

});