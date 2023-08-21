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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTrackAction: function() { return /* binding */ deleteTrackAction; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _reducers_trackSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/trackSlice */ \"./src/store/reducers/trackSlice.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nconst deleteTrackAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"track/delete\", async (id, param)=>{\n    let { rejectWithValue, dispatch } = param;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"http://localhost:5000/tracks/\" + id);\n        dispatch((0,_reducers_trackSlice__WEBPACK_IMPORTED_MODULE_0__.removeTrack)(id));\n        console.log(response.data);\n    } catch (e) {\n        dispatch((0,_reducers_trackSlice__WEBPACK_IMPORTED_MODULE_0__.fetchTracksError)(\"Error went wrong\"));\n        return rejectWithValue(e);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYXN5bmNBY3Rpb25zL2RlbGV0ZVRyYWNrLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDbUI7QUFDN0M7QUFFbEIsTUFBTUksb0JBQW9CSixrRUFBZ0JBLENBQy9DLGdCQUNBLE9BQU9LO1FBQVksRUFBRUMsZUFBZSxFQUFFQyxRQUFRLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUwsdURBQVksQ0FBQyxrQ0FBa0NFO1FBQ3RFRSxTQUFTTCxpRUFBV0EsQ0FBQ0c7UUFDckJLLFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0ksSUFBSTtJQUMzQixFQUFFLE9BQU9DLEdBQUc7UUFDVk4sU0FBU04sc0VBQWdCQSxDQUFDO1FBQzFCLE9BQU9LLGdCQUFnQk87SUFDekI7QUFDRixHQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hc3luY0FjdGlvbnMvZGVsZXRlVHJhY2sudHM/NDFjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgZmV0Y2hUcmFja3NFcnJvciwgcmVtb3ZlVHJhY2sgfSBmcm9tICcuLi9yZWR1Y2Vycy90cmFja1NsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVHJhY2tBY3Rpb24gPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gICd0cmFjay9kZWxldGUnLFxyXG4gIGFzeW5jIChpZDogc3RyaW5nLCB7IHJlamVjdFdpdGhWYWx1ZSwgZGlzcGF0Y2ggfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90cmFja3MvJyArIGlkKVxyXG4gICAgICBkaXNwYXRjaChyZW1vdmVUcmFjayhpZCkpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoVHJhY2tzRXJyb3IoJ0Vycm9yIHdlbnQgd3JvbmcnKSlcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImZldGNoVHJhY2tzRXJyb3IiLCJyZW1vdmVUcmFjayIsImF4aW9zIiwiZGVsZXRlVHJhY2tBY3Rpb24iLCJpZCIsInJlamVjdFdpdGhWYWx1ZSIsImRpc3BhdGNoIiwicmVzcG9uc2UiLCJkZWxldGUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/asyncActions/deleteTrack.ts\n"));

/***/ })

});