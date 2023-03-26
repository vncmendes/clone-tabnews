"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/styles.js":
/*!******************************!*\
  !*** ./components/styles.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Main\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Main = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n`;\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-family: 'Dancing Script', cursive;\n\n  :first-child {\n    margin-top: 10rem;\n    padding: 0rem 5rem 0rem 5rem;\n  }\n\n  img {\n    width: 300px;\n    height: 300px;\n  }\n\n  h2 {\n    padding-top: 2rem;\n    font-size: 3rem;\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLE9BQU9ELDhEQUFVLENBQUM7Ozs7O0FBSy9CLENBQUM7QUFFTSxNQUFNRyxZQUFZSCw4REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL2NvbXBvbmVudHMvc3R5bGVzLmpzPzQ2YWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG5cbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICBwYWRkaW5nOiAwcmVtIDVyZW0gMHJlbSA1cmVtO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiTWFpbiIsImRpdiIsIkNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.ts\");\n/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles */ \"./components/styles.js\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles__WEBPACK_IMPORTED_MODULE_2__.Main, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Voc\\xea \\xe9 o el\\xe9tron que faltava no meu proton\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"e a nossa uni\\xe3o cirou o nucleo at\\xf4mico;\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"a for\\xe7a forte\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"*-*\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://cdn.pixabay.com/animation/2023/01/08/01/22/01-22-40-685_512.gif\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDUTtBQUV4QyxTQUFTRyxPQUFPO0lBQzNCLHFCQUNJLDhEQUFDRCxvREFBSUE7OzBCQUNELDhEQUFDRCx5REFBU0E7O2tDQUNOLDhEQUFDRztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUVSLDhEQUFDSix5REFBU0E7MEJBQ04sNEVBQUNLO29CQUFJQyxLQUFJOzs7Ozs7Ozs7OzswQkFFYiw4REFBQ1AsdURBQVdBOzs7Ozs7Ozs7OztBQUd4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJztcbmltcG9ydCB7IENvbnRhaW5lciwgTWFpbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGgxPlZvY8OqIMOpIG8gZWzDqXRyb24gcXVlIGZhbHRhdmEgbm8gbWV1IHByb3RvbjwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPmUgYSBub3NzYSB1bmnDo28gY2lyb3UgbyBudWNsZW8gYXTDtG1pY287PC9oMT5cbiAgICAgICAgICAgICAgICA8aDE+YSBmb3LDp2EgZm9ydGU8L2gxPlxuICAgICAgICAgICAgICAgIDxoMj4qLSo8L2gyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vYW5pbWF0aW9uLzIwMjMvMDEvMDgvMDEvMjIvMDEtMjItNDAtNjg1XzUxMi5naWZcIiAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPC9NYWluPlxuICAgIClcbn0iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJDb250YWluZXIiLCJNYWluIiwiSG9tZSIsImgxIiwiaDIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  :root {\n      --background: #f8f2f5;\n\n      --red: #E52E40;\n      --blue: #5429CC;\n      --green: #33CC95;\n\n      --blue-light: #6933FF;\n\n      --text-title: #363F5F;\n      --text-body: #969CB3;\n\n      --shape: #26262B;\n    }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    background: var(--shape);\n    -webkit-font-smoothing: antialiased;\n  }\n\n  html {\n    @media (max-width: 1080px) {\n    font-size: 93.75%;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%;\n    }\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  body, input, textarea, button { //os elementos listados tem fontes padrões e não importam automaticamente a font.\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUUvQyxNQUFNQyxjQUFjRCxnRUFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkM3QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3N0eWxlcy9nbG9iYWwudHM/MjA2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgOnJvb3Qge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjhmMmY1O1xuXG4gICAgICAtLXJlZDogI0U1MkU0MDtcbiAgICAgIC0tYmx1ZTogIzU0MjlDQztcbiAgICAgIC0tZ3JlZW46ICMzM0NDOTU7XG5cbiAgICAgIC0tYmx1ZS1saWdodDogIzY5MzNGRjtcblxuICAgICAgLS10ZXh0LXRpdGxlOiAjMzYzRjVGO1xuICAgICAgLS10ZXh0LWJvZHk6ICM5NjlDQjM7XG5cbiAgICAgIC0tc2hhcGU6ICMyNjI2MkI7XG4gICAgfVxuXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNoYXBlKTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuXG4gIGh0bWwge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgICBmb250LXNpemU6IDkzLjc1JTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogODcuNSU7XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBib2R5LCBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiB7IC8vb3MgZWxlbWVudG9zIGxpc3RhZG9zIHRlbSBmb250ZXMgcGFkcsO1ZXMgZSBuw6NvIGltcG9ydGFtIGF1dG9tYXRpY2FtZW50ZSBhIGZvbnQuXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5gIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/global.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();