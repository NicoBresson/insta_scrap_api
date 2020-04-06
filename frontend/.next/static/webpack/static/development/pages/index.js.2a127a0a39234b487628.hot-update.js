webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scrapeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrapeContext */ "./components/scrapeContext.js");


var _this = undefined,
    _jsxFileName = "/Users/nico/Code/dreister_api/frontend/components/Page.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //custom hook!

function useScrapes() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    id: 'toto'
  }]),
      scrapes = _useState[0],
      setScrapes = _useState[1]; // Use effect accept only a function as parameter


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    (function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('Mounting or Updating');
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(node_fetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000/api/profiles'));

            case 3:
              res = _context.sent;
              // const data = await res.json()
              // console.log(data)
              setScrapes(data[0]);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    })();
  }, []);
  return scrapes;
}

var Page = function Page(_ref) {
  var children = _ref.children;
  var scrapes = useScrapes();
  return __jsx(_scrapeContext__WEBPACK_IMPORTED_MODULE_3__["ScrapeProvider"], {
    value: {
      scrapes: scrapes
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.2a127a0a39234b487628.hot-update.js.map