"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tracks/create",{

/***/ "./src/components/Player.tsx":
/*!***********************************!*\
  !*** ./src/components/Player.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/reducers/playerSlice */ \"./src/store/reducers/playerSlice.ts\");\n/* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Pause */ \"./node_modules/@mui/icons-material/Pause.js\");\n/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/PlayArrow */ \"./node_modules/@mui/icons-material/PlayArrow.js\");\n/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/VolumeUp */ \"./node_modules/@mui/icons-material/VolumeUp.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Player.module.scss */ \"./src/styles/Player.module.scss\");\n/* harmony import */ var _styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TrackProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackProgress */ \"./src/components/TrackProgress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nlet audio;\nconst Player = ()=>{\n    var _activeTrack, _activeTrack1;\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const { activeTrack, isTrackPlaying, volume, currentTime, duration, previousTrack } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.playerSlice);\n    const { tracks } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.trackSlice);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // if (activeTrack) {\n        if (audio) {\n            var _activeTrack, _activeTrack1;\n            const isTrackRemoved = tracks.some((track)=>console.log(track.audio === audio.src.replace(\"http://localhost:5000/\", \"\")));\n            if (isTrackRemoved) {\n                stopTrack();\n            }\n            if (!isTrackPlaying) {\n                stopTrack();\n                return;\n            }\n            if (isTrackPlaying && currentTime !== 0 && audio.src === \"http://localhost:5000/\" + ((_activeTrack = activeTrack) === null || _activeTrack === void 0 ? void 0 : _activeTrack.audio)) {\n                startTrack();\n                return;\n            }\n            stopTrack();\n            audio = new Audio();\n            audio.src = \"http://localhost:5000/\" + ((_activeTrack1 = activeTrack) === null || _activeTrack1 === void 0 ? void 0 : _activeTrack1.audio);\n            audio.volume = 1;\n            audio.volume = volume / 100;\n            audio.onloadedmetadata = ()=>{\n                dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setDuration)(Math.ceil(audio.duration)));\n            };\n            audio.ontimeupdate = ()=>{\n                dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Math.ceil(audio.currentTime)));\n            };\n            startTrack();\n        } else {\n            var _activeTrack2;\n            audio = new Audio();\n            audio.src = \"http://localhost:5000/\" + ((_activeTrack2 = activeTrack) === null || _activeTrack2 === void 0 ? void 0 : _activeTrack2.audio);\n            audio.volume = 1;\n            audio.volume = volume / 100;\n            audio.onloadedmetadata = ()=>{\n                dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setDuration)(Math.ceil(audio.duration)));\n            };\n            audio.ontimeupdate = ()=>{\n                dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Math.ceil(audio.currentTime)));\n            };\n            startTrack();\n        // }\n        }\n    // else {\n    // const isTrackRemoved = tracks.some(track => console.log(track.audio === audio.src))\n    // if (isTrackRemoved) {\n    //   stopTrack()\n    // }\n    // }\n    }, [\n        activeTrack,\n        isTrackPlaying,\n        previousTrack\n    ]);\n    const resetAfterRemoving = ()=>{};\n    const startTrack = ()=>{\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(true));\n        return audio.play();\n    };\n    const stopTrack = ()=>{\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setIsTrackPlaying)(false));\n        return audio.pause();\n    };\n    const changeVolume = (e)=>{\n        audio.volume = Number(e.target.value) / 100;\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setVolume)(Number(e.target.value)));\n    };\n    const changeCurrentTime = (e)=>{\n        audio.currentTime = Number(e.target.value);\n        dispatch((0,_store_reducers_playerSlice__WEBPACK_IMPORTED_MODULE_2__.setCurrentTime)(Number(e.target.value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Player_module_scss__WEBPACK_IMPORTED_MODULE_5___default().player),\n        children: activeTrack && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                    onClick: !isTrackPlaying ? startTrack : stopTrack,\n                    children: !isTrackPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 32\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 48\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                    container: true,\n                    direction: \"column\",\n                    style: {\n                        width: 200,\n                        margin: \"0 20px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (_activeTrack = activeTrack) === null || _activeTrack === void 0 ? void 0 : _activeTrack.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                fontSize: 12,\n                                color: \"gray\"\n                            },\n                            children: (_activeTrack1 = activeTrack) === null || _activeTrack1 === void 0 ? void 0 : _activeTrack1.artist\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    current: currentTime,\n                    max: duration,\n                    onChange: changeCurrentTime\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    style: {\n                        marginLeft: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackProgress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    current: volume,\n                    max: 100,\n                    onChange: changeVolume\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anton\\\\OneDrive\\\\Робочий стіл\\\\course\\\\06_music_player\\\\client\\\\src\\\\components\\\\Player.tsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Player, \"yC1vxWLvSg3uB2zupJNLIfKCBNI=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0JjO0FBcUdOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci50c3g/YTI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzL3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIHNldEN1cnJlbnRUaW1lLFxyXG4gIHNldER1cmF0aW9uLFxyXG4gIHNldElzVHJhY2tQbGF5aW5nLFxyXG4gIHNldFZvbHVtZSxcclxufSBmcm9tICdAL3N0b3JlL3JlZHVjZXJzL3BsYXllclNsaWNlJ1xyXG5pbXBvcnQgeyBQYXVzZSwgUGxheUFycm93LCBWb2x1bWVVcCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnXHJcbmltcG9ydCB7IEdyaWQsIEljb25CdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9QbGF5ZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBUcmFja1Byb2dyZXNzIGZyb20gJy4vVHJhY2tQcm9ncmVzcydcclxuaW1wb3J0IHsgTmV4dFRodW5rRGlzcGF0Y2gsIHdyYXBwZXIgfSBmcm9tICdAL3N0b3JlJ1xyXG5pbXBvcnQgeyBJVHJhY2sgfSBmcm9tICdAL3R5cGVzL3RyYWNrJ1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5cclxubGV0IGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50XHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBhY3RpdmVUcmFjaywgaXNUcmFja1BsYXlpbmcsIHZvbHVtZSwgY3VycmVudFRpbWUsIGR1cmF0aW9uLCBwcmV2aW91c1RyYWNrIH0gPVxyXG4gICAgdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGxheWVyU2xpY2UpXHJcbiAgY29uc3QgeyB0cmFja3MgfSA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnRyYWNrU2xpY2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpZiAoYWN0aXZlVHJhY2spIHtcclxuICAgIGlmIChhdWRpbykge1xyXG4gICAgICBjb25zdCBpc1RyYWNrUmVtb3ZlZCA9IHRyYWNrcy5zb21lKHRyYWNrID0+XHJcbiAgICAgICAgY29uc29sZS5sb2codHJhY2suYXVkaW8gPT09IGF1ZGlvLnNyYy5yZXBsYWNlKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvJywgJycpKVxyXG4gICAgICApXHJcbiAgICAgIGlmIChpc1RyYWNrUmVtb3ZlZCkge1xyXG4gICAgICAgIHN0b3BUcmFjaygpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc1RyYWNrUGxheWluZykge1xyXG4gICAgICAgIHN0b3BUcmFjaygpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlzVHJhY2tQbGF5aW5nICYmXHJcbiAgICAgICAgY3VycmVudFRpbWUgIT09IDAgJiZcclxuICAgICAgICBhdWRpby5zcmMgPT09ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyArIGFjdGl2ZVRyYWNrPy5hdWRpb1xyXG4gICAgICApIHtcclxuICAgICAgICBzdGFydFRyYWNrKClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBzdG9wVHJhY2soKVxyXG4gICAgICBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgICAgIGF1ZGlvLnNyYyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJyArIGFjdGl2ZVRyYWNrPy5hdWRpb1xyXG4gICAgICBhdWRpby52b2x1bWUgPSAxXHJcbiAgICAgIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZSAvIDEwMFxyXG4gICAgICBhdWRpby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldER1cmF0aW9uKE1hdGguY2VpbChhdWRpby5kdXJhdGlvbikpKVxyXG4gICAgICB9XHJcbiAgICAgIGF1ZGlvLm9udGltZXVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50VGltZShNYXRoLmNlaWwoYXVkaW8uY3VycmVudFRpbWUpKSlcclxuICAgICAgfVxyXG4gICAgICBzdGFydFRyYWNrKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKClcclxuICAgICAgYXVkaW8uc3JjID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nICsgYWN0aXZlVHJhY2s/LmF1ZGlvXHJcbiAgICAgIGF1ZGlvLnZvbHVtZSA9IDFcclxuICAgICAgYXVkaW8udm9sdW1lID0gdm9sdW1lIC8gMTAwXHJcbiAgICAgIGF1ZGlvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0RHVyYXRpb24oTWF0aC5jZWlsKGF1ZGlvLmR1cmF0aW9uKSkpXHJcbiAgICAgIH1cclxuICAgICAgYXVkaW8ub250aW1ldXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRUaW1lKE1hdGguY2VpbChhdWRpby5jdXJyZW50VGltZSkpKVxyXG4gICAgICB9XHJcbiAgICAgIHN0YXJ0VHJhY2soKVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vIGNvbnN0IGlzVHJhY2tSZW1vdmVkID0gdHJhY2tzLnNvbWUodHJhY2sgPT4gY29uc29sZS5sb2codHJhY2suYXVkaW8gPT09IGF1ZGlvLnNyYykpXHJcbiAgICAvLyBpZiAoaXNUcmFja1JlbW92ZWQpIHtcclxuICAgIC8vICAgc3RvcFRyYWNrKClcclxuICAgIC8vIH1cclxuICAgIC8vIH1cclxuICB9LCBbYWN0aXZlVHJhY2ssIGlzVHJhY2tQbGF5aW5nLCBwcmV2aW91c1RyYWNrXSlcclxuXHJcbiAgY29uc3QgcmVzZXRBZnRlclJlbW92aW5nID0gKCkgPT4ge31cclxuXHJcbiAgY29uc3Qgc3RhcnRUcmFjayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldElzVHJhY2tQbGF5aW5nKHRydWUpKVxyXG4gICAgcmV0dXJuIGF1ZGlvLnBsYXkoKVxyXG4gIH1cclxuICBjb25zdCBzdG9wVHJhY2sgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRJc1RyYWNrUGxheWluZyhmYWxzZSkpXHJcbiAgICByZXR1cm4gYXVkaW8ucGF1c2UoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlVm9sdW1lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBhdWRpby52b2x1bWUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC8gMTAwXHJcbiAgICBkaXNwYXRjaChzZXRWb2x1bWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZUN1cnJlbnRUaW1lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSlcclxuICAgIGRpc3BhdGNoKHNldEN1cnJlbnRUaW1lKE51bWJlcihlLnRhcmdldC52YWx1ZSkpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyfT5cclxuICAgICAge2FjdGl2ZVRyYWNrICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17IWlzVHJhY2tQbGF5aW5nID8gc3RhcnRUcmFjayA6IHN0b3BUcmFja30+XHJcbiAgICAgICAgICAgIHshaXNUcmFja1BsYXlpbmcgPyA8UGxheUFycm93IC8+IDogPFBhdXNlIC8+fVxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBzdHlsZT17eyB3aWR0aDogMjAwLCBtYXJnaW46ICcwIDIwcHgnIH19PlxyXG4gICAgICAgICAgICA8ZGl2PnthY3RpdmVUcmFjaz8ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAnZ3JheScgfX0+e2FjdGl2ZVRyYWNrPy5hcnRpc3R9PC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8VHJhY2tQcm9ncmVzcyBjdXJyZW50PXtjdXJyZW50VGltZX0gbWF4PXtkdXJhdGlvbn0gb25DaGFuZ2U9e2NoYW5nZUN1cnJlbnRUaW1lfSAvPlxyXG4gICAgICAgICAgPFZvbHVtZVVwIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fSAvPlxyXG4gICAgICAgICAgPFRyYWNrUHJvZ3Jlc3MgY3VycmVudD17dm9sdW1lfSBtYXg9ezEwMH0gb25DaGFuZ2U9e2NoYW5nZVZvbHVtZX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXHJcbiJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0Q3VycmVudFRpbWUiLCJzZXREdXJhdGlvbiIsInNldElzVHJhY2tQbGF5aW5nIiwic2V0Vm9sdW1lIiwiUGF1c2UiLCJQbGF5QXJyb3ciLCJWb2x1bWVVcCIsIkdyaWQiLCJJY29uQnV0dG9uIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiVHJhY2tQcm9ncmVzcyIsImF1ZGlvIiwiUGxheWVyIiwiYWN0aXZlVHJhY2siLCJkaXNwYXRjaCIsImlzVHJhY2tQbGF5aW5nIiwidm9sdW1lIiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInByZXZpb3VzVHJhY2siLCJzdGF0ZSIsInBsYXllclNsaWNlIiwidHJhY2tzIiwidHJhY2tTbGljZSIsImlzVHJhY2tSZW1vdmVkIiwic29tZSIsInRyYWNrIiwiY29uc29sZSIsImxvZyIsInNyYyIsInJlcGxhY2UiLCJzdG9wVHJhY2siLCJzdGFydFRyYWNrIiwiQXVkaW8iLCJvbmxvYWRlZG1ldGFkYXRhIiwiTWF0aCIsImNlaWwiLCJvbnRpbWV1cGRhdGUiLCJyZXNldEFmdGVyUmVtb3ZpbmciLCJwbGF5IiwicGF1c2UiLCJjaGFuZ2VWb2x1bWUiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJjaGFuZ2VDdXJyZW50VGltZSIsImRpdiIsImNsYXNzTmFtZSIsInBsYXllciIsIm9uQ2xpY2siLCJjb250YWluZXIiLCJkaXJlY3Rpb24iLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luIiwibmFtZSIsImZvbnRTaXplIiwiY29sb3IiLCJhcnRpc3QiLCJjdXJyZW50IiwibWF4Iiwib25DaGFuZ2UiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player.tsx\n"));

/***/ })

});