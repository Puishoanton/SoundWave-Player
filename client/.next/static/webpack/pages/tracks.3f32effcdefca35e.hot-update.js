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

/***/ "./src/store/asyncActions/deleteTrack.ts":
/*!***********************************************!*\
  !*** ./src/store/asyncActions/deleteTrack.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTrackAction: function() { return /* binding */ deleteTrackAction; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _reducers_trackSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/trackSlice */ \"./src/store/reducers/trackSlice.ts\");\n\n\nconst deleteTrackAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"track/delete\", async (id, param)=>{\n    let { rejectWithValue, dispatch } = param;\n    try {\n        // const response = await axios.delete('http://localhost:5000/tracks/' + id)\n        dispatch((0,_reducers_trackSlice__WEBPACK_IMPORTED_MODULE_0__.removeTrack)(id));\n    } catch (e) {\n        dispatch((0,_reducers_trackSlice__WEBPACK_IMPORTED_MODULE_0__.fetchTracksError)(\"Error went wrong\"));\n        return rejectWithValue(e);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYXN5bmNBY3Rpb25zL2RlbGV0ZVRyYWNrLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNtQjtBQUcvRCxNQUFNRyxvQkFBb0JILGtFQUFnQkEsQ0FDL0MsZ0JBQ0EsT0FBT0k7UUFBWSxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUM5QyxJQUFJO1FBQ0YsNEVBQTRFO1FBQzVFQSxTQUFTSixpRUFBV0EsQ0FBQ0U7SUFDdkIsRUFBRSxPQUFPRyxHQUFHO1FBQ1ZELFNBQVNMLHNFQUFnQkEsQ0FBQztRQUMxQixPQUFPSSxnQkFBZ0JFO0lBQ3pCO0FBQ0YsR0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYXN5bmNBY3Rpb25zL2RlbGV0ZVRyYWNrLnRzPzQxY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IGZldGNoVHJhY2tzRXJyb3IsIHJlbW92ZVRyYWNrIH0gZnJvbSAnLi4vcmVkdWNlcnMvdHJhY2tTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRyYWNrQWN0aW9uID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICAndHJhY2svZGVsZXRlJyxcclxuICBhc3luYyAoaWQ6IHN0cmluZywgeyByZWplY3RXaXRoVmFsdWUsIGRpc3BhdGNoIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvdHJhY2tzLycgKyBpZClcclxuICAgICAgZGlzcGF0Y2gocmVtb3ZlVHJhY2soaWQpKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkaXNwYXRjaChmZXRjaFRyYWNrc0Vycm9yKCdFcnJvciB3ZW50IHdyb25nJykpXHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZSlcclxuICAgIH1cclxuICB9XHJcbilcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJmZXRjaFRyYWNrc0Vycm9yIiwicmVtb3ZlVHJhY2siLCJkZWxldGVUcmFja0FjdGlvbiIsImlkIiwicmVqZWN0V2l0aFZhbHVlIiwiZGlzcGF0Y2giLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/asyncActions/deleteTrack.ts\n"));

/***/ })

});