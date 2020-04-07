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

function useRemainingScrapes() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      remainingScrapes = _useState[0],
      setRemainingScrapes = _useState[1]; // Use effect accept only a function as parameter


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    (function _callee() {
      var res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(node_fetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000/api/ramaining-scrapes'));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 5:
              data = _context.sent;
              setRemainingScrapes(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    })();
  }, []);
  return remainingScrapes;
} //custom hook!


function useScrapes() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    instagramId: ''
  }]),
      scrapes = _useState2[0],
      setScrapes = _useState2[1]; // fetch


  function fetchScrapes() {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchScrapes$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(node_fetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000/api/top100'));

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 5:
            data = _context2.sent;
            setScrapes(data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  } // Use effect accept only a function as parameter


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchScrapes();
  }, []);
  return {
    scrapes: scrapes,
    fetchScrapes: fetchScrapes
  };
}

var Page = function Page(_ref) {
  var children = _ref.children;

  var _useScrapes = useScrapes(),
      scrapes = _useScrapes.scrapes,
      fetchScrapes = _useScrapes.fetchScrapes;

  var remainingScrapes = useRemainingScrapes();
  return __jsx(_scrapeContext__WEBPACK_IMPORTED_MODULE_3__["ScrapeProvider"], {
    value: {
      scrapes: scrapes,
      fetchScrapes: fetchScrapes,
      remainingScrapes: remainingScrapes
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.deaacf0178307a083ba4.hot-update.js.map