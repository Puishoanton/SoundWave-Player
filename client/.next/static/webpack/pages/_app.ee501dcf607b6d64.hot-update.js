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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchTracks: function() { return /* binding */ fetchTracks; },\n/* harmony export */   fetchTracksError: function() { return /* binding */ fetchTracksError; },\n/* harmony export */   removeTrack: function() { return /* binding */ removeTrack; },\n/* harmony export */   trackInitialState: function() { return /* binding */ trackInitialState; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst trackInitialState = {\n    tracks: [],\n    error: \"\"\n};\nconst trackSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"track\",\n    initialState: trackInitialState,\n    reducers: {\n        fetchTracksError (state, action) {\n            state.error = action.payload;\n        },\n        fetchTracks (state, action) {\n            state.tracks = action.payload;\n        },\n        removeTrack (state, action) {\n            state.tracks = state.tracks.filter((track)=>{\n                track._id !== action.payload;\n            });\n        }\n    },\n    extraReducers: {\n    }\n});\nconst { fetchTracks, fetchTracksError, removeTrack } = trackSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (trackSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvdHJhY2tTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM2RDtBQUd0RCxNQUFNQyxvQkFBZ0M7SUFBRUMsUUFBUSxFQUFFO0lBQUVDLE9BQU87QUFBRyxFQUFDO0FBRXRFLE1BQU1DLGFBQWFKLDZEQUFXQSxDQUFDO0lBQzdCSyxNQUFNO0lBQ05DLGNBQWNMO0lBQ2RNLFVBQVU7UUFDUkMsa0JBQWlCQyxLQUFLLEVBQUVDLE1BQTZCO1lBQ25ERCxNQUFNTixLQUFLLEdBQUdPLE9BQU9DLE9BQU87UUFDOUI7UUFDQUMsYUFBWUgsS0FBSyxFQUFFQyxNQUErQjtZQUNoREQsTUFBTVAsTUFBTSxHQUFHUSxPQUFPQyxPQUFPO1FBQy9CO1FBQ0FFLGFBQVlKLEtBQUssRUFBRUMsTUFBNkI7WUFDOUNELE1BQU1QLE1BQU0sR0FBR08sTUFBTVAsTUFBTSxDQUFDWSxNQUFNLENBQUNDLENBQUFBO2dCQUNqQ0EsTUFBTUMsR0FBRyxLQUFLTixPQUFPQyxPQUFPO1lBQzlCO1FBQ0Y7SUFDRjtJQUNBTSxlQUFlO0lBS2Y7QUFDRjtBQUNPLE1BQU0sRUFBRUwsV0FBVyxFQUFFSixnQkFBZ0IsRUFBRUssV0FBVyxFQUFFLEdBQUdULFdBQVdjLE9BQU87QUFDaEYsK0RBQWVkLFdBQVdlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3RyYWNrU2xpY2UudHM/OWIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVHJhY2ssIFRyYWNrU3RhdGUgfSBmcm9tICdAL3R5cGVzL3RyYWNrJ1xyXG5pbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcblxyXG5leHBvcnQgY29uc3QgdHJhY2tJbml0aWFsU3RhdGU6IFRyYWNrU3RhdGUgPSB7IHRyYWNrczogW10sIGVycm9yOiAnJyB9XHJcblxyXG5jb25zdCB0cmFja1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICd0cmFjaycsXHJcbiAgaW5pdGlhbFN0YXRlOiB0cmFja0luaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgZmV0Y2hUcmFja3NFcnJvcihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSxcclxuICAgIGZldGNoVHJhY2tzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVRyYWNrW10+KSB7XHJcbiAgICAgIHN0YXRlLnRyYWNrcyA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVHJhY2soc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgIHN0YXRlLnRyYWNrcyA9IHN0YXRlLnRyYWNrcy5maWx0ZXIodHJhY2sgPT4ge1xyXG4gICAgICAgIHRyYWNrLl9pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAvLyBbSFlEUkFURV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGFueT4pID0+IHtcclxuICAgIC8vICAgY29uc3QgdHJhY2tzID0gYWN0aW9uLnBheWxvYWQudHJhY2tTbGljZS50cmFja3NcclxuICAgIC8vICAgc3RhdGUudHJhY2tzID0gdHJhY2tzXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjb25zdCB7IGZldGNoVHJhY2tzLCBmZXRjaFRyYWNrc0Vycm9yLCByZW1vdmVUcmFjayB9ID0gdHJhY2tTbGljZS5hY3Rpb25zXHJcbmV4cG9ydCBkZWZhdWx0IHRyYWNrU2xpY2UucmVkdWNlclxyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJ0cmFja0luaXRpYWxTdGF0ZSIsInRyYWNrcyIsImVycm9yIiwidHJhY2tTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImZldGNoVHJhY2tzRXJyb3IiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmZXRjaFRyYWNrcyIsInJlbW92ZVRyYWNrIiwiZmlsdGVyIiwidHJhY2siLCJfaWQiLCJleHRyYVJlZHVjZXJzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/reducers/trackSlice.ts\n"));

/***/ })

});