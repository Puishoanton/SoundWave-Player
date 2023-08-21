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

/***/ "./src/store/reducers/trackSlice.ts":
/*!******************************************!*\
  !*** ./src/store/reducers/trackSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchTracks: function() { return /* binding */ fetchTracks; },\n/* harmony export */   fetchTracksError: function() { return /* binding */ fetchTracksError; },\n/* harmony export */   removeTrack: function() { return /* binding */ removeTrack; },\n/* harmony export */   trackInitialState: function() { return /* binding */ trackInitialState; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\nconst trackInitialState = {\n    tracks: [],\n    error: \"\"\n};\nconst trackSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"track\",\n    initialState: trackInitialState,\n    reducers: {\n        fetchTracksError (state, action) {\n            state.error = action.payload;\n        },\n        fetchTracks (state, action) {\n            state.tracks = action.payload;\n        },\n        removeTrack (state, action) {\n            // state.tracks = state.tracks.filter(track => {\n            //   track._id !== action.payload\n            // })\n            state.tracks.forEach((e)=>console.log(e));\n        }\n    },\n    extraReducers: {\n        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE]: (state, action)=>{\n            const tracks = action.payload.trackSlice.tracks;\n            state.tracks = tracks;\n        }\n    }\n});\nconst { fetchTracks, fetchTracksError, removeTrack } = trackSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (trackSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvdHJhY2tTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDNkQ7QUFDakI7QUFFckMsTUFBTUUsb0JBQWdDO0lBQUVDLFFBQVEsRUFBRTtJQUFFQyxPQUFPO0FBQUcsRUFBQztBQUV0RSxNQUFNQyxhQUFhTCw2REFBV0EsQ0FBQztJQUM3Qk0sTUFBTTtJQUNOQyxjQUFjTDtJQUNkTSxVQUFVO1FBQ1JDLGtCQUFpQkMsS0FBSyxFQUFFQyxNQUE2QjtZQUNuREQsTUFBTU4sS0FBSyxHQUFHTyxPQUFPQyxPQUFPO1FBQzlCO1FBQ0FDLGFBQVlILEtBQUssRUFBRUMsTUFBK0I7WUFDaERELE1BQU1QLE1BQU0sR0FBR1EsT0FBT0MsT0FBTztRQUMvQjtRQUNBRSxhQUFZSixLQUFLLEVBQUVDLE1BQTZCO1lBQzlDLGdEQUFnRDtZQUNoRCxpQ0FBaUM7WUFDakMsS0FBSztZQUVMRCxNQUFNUCxNQUFNLENBQUNZLE9BQU8sQ0FBQ0MsQ0FBQUEsSUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtRQUN4QztJQUNGO0lBQ0FHLGVBQWU7UUFDYixDQUFDbEIsdURBQU9BLENBQUMsRUFBRSxDQUFDUyxPQUFPQztZQUNqQixNQUFNUixTQUFTUSxPQUFPQyxPQUFPLENBQUNQLFVBQVUsQ0FBQ0YsTUFBTTtZQUMvQ08sTUFBTVAsTUFBTSxHQUFHQTtRQUNqQjtJQUNGO0FBQ0Y7QUFDTyxNQUFNLEVBQUVVLFdBQVcsRUFBRUosZ0JBQWdCLEVBQUVLLFdBQVcsRUFBRSxHQUFHVCxXQUFXZSxPQUFPO0FBQ2hGLCtEQUFlZixXQUFXZ0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvcmVkdWNlcnMvdHJhY2tTbGljZS50cz85YjE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUcmFjaywgVHJhY2tTdGF0ZSB9IGZyb20gJ0AvdHlwZXMvdHJhY2snXHJcbmltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFja0luaXRpYWxTdGF0ZTogVHJhY2tTdGF0ZSA9IHsgdHJhY2tzOiBbXSwgZXJyb3I6ICcnIH1cclxuXHJcbmNvbnN0IHRyYWNrU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3RyYWNrJyxcclxuICBpbml0aWFsU3RhdGU6IHRyYWNrSW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBmZXRjaFRyYWNrc0Vycm9yKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hUcmFja3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJVHJhY2tbXT4pIHtcclxuICAgICAgc3RhdGUudHJhY2tzID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgICByZW1vdmVUcmFjayhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgLy8gc3RhdGUudHJhY2tzID0gc3RhdGUudHJhY2tzLmZpbHRlcih0cmFjayA9PiB7XHJcbiAgICAgIC8vICAgdHJhY2suX2lkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAvLyB9KVxyXG5cclxuICAgICAgc3RhdGUudHJhY2tzLmZvckVhY2goZSA9PiBjb25zb2xlLmxvZyhlKSlcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbSFlEUkFURV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGFueT4pID0+IHtcclxuICAgICAgY29uc3QgdHJhY2tzID0gYWN0aW9uLnBheWxvYWQudHJhY2tTbGljZS50cmFja3NcclxuICAgICAgc3RhdGUudHJhY2tzID0gdHJhY2tzXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjb25zdCB7IGZldGNoVHJhY2tzLCBmZXRjaFRyYWNrc0Vycm9yLCByZW1vdmVUcmFjayB9ID0gdHJhY2tTbGljZS5hY3Rpb25zXHJcbmV4cG9ydCBkZWZhdWx0IHRyYWNrU2xpY2UucmVkdWNlclxyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJIWURSQVRFIiwidHJhY2tJbml0aWFsU3RhdGUiLCJ0cmFja3MiLCJlcnJvciIsInRyYWNrU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJmZXRjaFRyYWNrc0Vycm9yIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmV0Y2hUcmFja3MiLCJyZW1vdmVUcmFjayIsImZvckVhY2giLCJlIiwiY29uc29sZSIsImxvZyIsImV4dHJhUmVkdWNlcnMiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/trackSlice.ts\n"));

/***/ })

});