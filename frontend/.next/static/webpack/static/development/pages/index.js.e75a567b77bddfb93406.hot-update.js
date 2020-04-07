webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Data.js":
/*!****************************!*\
  !*** ./components/Data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scrapeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrapeContext */ "./components/scrapeContext.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table */ "./components/Table.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
var _this = undefined,
    _jsxFileName = "/Users/nico/Code/dreister_api/frontend/components/Data.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Data = function Data() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_scrapeContext__WEBPACK_IMPORTED_MODULE_1__["ScrapeContext"]),
      scrapes = _useContext.scrapes,
      fetchScrapes = _useContext.fetchScrapes,
      remainingScrapes = _useContext.remainingScrapes;

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "button",
    onClick: fetchScrapes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Refresh"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Top 100 Profiles connected to Dreister (Followers + Following) sorted by number of Followers"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, remainingScrapes, " remaining to complete the DB - Our cron is working on it!"), __jsx(_Chart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scrapes: scrapes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx(_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrapes: scrapes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ })

})
//# sourceMappingURL=index.js.e75a567b77bddfb93406.hot-update.js.map