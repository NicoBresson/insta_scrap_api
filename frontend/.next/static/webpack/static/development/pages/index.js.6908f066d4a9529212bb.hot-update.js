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
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _scrapeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrapeContext */ "./components/scrapeContext.js");
var _this = undefined,
    _jsxFileName = "/Users/nico/Code/dreister_api/frontend/components/Data.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Data = function Data() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_scrapeContext__WEBPACK_IMPORTED_MODULE_2__["ScrapeContext"]),
      scrapes = _useContext.scrapes;

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "Top 100 Profiles sorted by number of Followers"), __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, " style=", {
    padding: 5
  }, "Index"), __jsx("th", {
    style: {
      padding: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "InstagramId"), __jsx("th", {
    style: {
      padding: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Name"), __jsx("th", {
    style: {
      padding: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Number of followers"), __jsx("th", {
    style: {
      padding: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Dreister Follower?"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, scrapes.map(function (scrape, index) {
    return __jsx("tr", {
      key: scrape.instagramId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx("td", {
      style: {
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, index + 1), __jsx("td", {
      style: {
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, scrape.instagramId), __jsx("td", {
      style: {
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, scrape.name), __jsx("td", {
      style: {
        textAlign: 'right',
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: scrape.nbFollowers,
      displayType: 'text',
      thousandSeparator: ' ',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 56
      }
    })), __jsx("td", {
      style: {
        textAlign: 'right',
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, scrape.isFollowingDreister ? 'YES' : 'NO'));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ })

})
//# sourceMappingURL=index.js.6908f066d4a9529212bb.hot-update.js.map