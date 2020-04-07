module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nico/Code/dreister_api/frontend/components/Chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Example extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const maxFollowers = 50000;
    const minFollowers = 5000;
    const dataFiltered = this.props.scrapes.filter(element => element.nbFollowers < maxFollowers && element.nbFollowers > minFollowers);
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, "Intersting follower chart(inferior to ", maxFollowers, " and superior to ", minFollowers, ")"), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
      width: 1000,
      height: 300,
      data: dataFiltered,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "instagramId",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
      domain: ['dataMin', 'dataMax'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      type: "monotone",
      dataKey: "nbFollowers",
      fill: "#8884d8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    })));
  }

}

/***/ }),

/***/ "./components/Data.js":
/*!****************************!*\
  !*** ./components/Data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scrapeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrapeContext */ "./components/scrapeContext.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table */ "./components/Table.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
var _jsxFileName = "/Users/nico/Code/dreister_api/frontend/components/Data.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Data = () => {
  const {
    scrapes,
    fetchScrapes,
    remainingScrapes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_scrapeContext__WEBPACK_IMPORTED_MODULE_1__["ScrapeContext"]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "button",
    onClick: fetchScrapes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Refresh"), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Top 100 Profiles connected to Dreister (Followers + Following) sorted by number of Followers"), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, remainingScrapes, " remaining to complete the DB - Our cron is working on it!"), __jsx(_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrapes: scrapes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx(_Chart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scrapes: scrapes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scrapeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrapeContext */ "./components/scrapeContext.js");
var _jsxFileName = "/Users/nico/Code/dreister_api/frontend/components/Page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //custom hook!

function useRemainingScrapes() {
  const {
    0: remainingScrapes,
    1: setRemainingScrapes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // Use effect accept only a function as parameter

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    (async () => {
      const res = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:3000/api/ramaining-scrapes');
      const data = await res.json();
      setRemainingScrapes(data);
    })();
  }, []);
  return remainingScrapes;
} //custom hook!


function useScrapes() {
  const {
    0: scrapes,
    1: setScrapes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    instagramId: '',
    nbFollowers: 0
  }]); // fetch

  async function fetchScrapes() {
    const res = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:3000/api/top100');
    const data = await res.json();
    setScrapes(data);
  } // Use effect accept only a function as parameter


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchScrapes();
  }, []);
  return {
    scrapes,
    fetchScrapes
  };
}

const Page = ({
  children
}) => {
  const {
    scrapes,
    fetchScrapes
  } = useScrapes();
  const remainingScrapes = useRemainingScrapes();
  return __jsx(_scrapeContext__WEBPACK_IMPORTED_MODULE_2__["ScrapeProvider"], {
    value: {
      scrapes,
      fetchScrapes,
      remainingScrapes
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nico/Code/dreister_api/frontend/components/Table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Table = ({
  scrapes
}) => {
  return __jsx("table", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 6
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 8
    }
  }, __jsx("th", {
    style: {
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, "Index"), __jsx("th", {
    style: {
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }, "InstagramId"), __jsx("th", {
    style: {
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }, "Name"), __jsx("th", {
    style: {
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }, "Number of followers"), __jsx("th", {
    style: {
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }, "This profile is following Dreister"))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, scrapes.map((scrape, index) => __jsx("tr", {
    key: scrape.instagramId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }, __jsx("td", {
    style: {
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  }, index + 1), __jsx("td", {
    style: {
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  }, scrape.instagramId), __jsx("td", {
    style: {
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, scrape.name), __jsx("td", {
    style: {
      textAlign: 'right',
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: scrape.nbFollowers,
    displayType: 'text',
    thousandSeparator: ' ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 59
    }
  })), __jsx("td", {
    style: {
      textAlign: 'right',
      padding: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, scrape.isFollowingDreister ? 'YES' : 'NO')))));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/scrapeContext.js":
/*!*************************************!*\
  !*** ./components/scrapeContext.js ***!
  \*************************************/
/*! exports provided: ScrapeContext, ScrapeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapeContext", function() { return ScrapeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapeProvider", function() { return ScrapeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ScrapeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const ScrapeProvider = ScrapeContext.Provider;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Data */ "./components/Data.js");
var _jsxFileName = "/Users/nico/Code/dreister_api/frontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Home = () => {
  return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "Home Page"), __jsx(_components_Data__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nico/Code/dreister_api/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map