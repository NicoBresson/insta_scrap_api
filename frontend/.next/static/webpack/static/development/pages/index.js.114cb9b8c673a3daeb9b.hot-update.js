webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");





var _jsxFileName = "/Users/nico/Code/dreister_api/frontend/components/Chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var data = [{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  uv: 2000,
  pv: 9800,
  amt: 2290
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100
}];

var Example = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Example, _PureComponent);

  var _super = _createSuper(Example);

  function Example() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Example);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Example, [{
    key: "render",
    value: function render() {
      return __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["LineChart"], {
        width: 500,
        height: 300,
        data: data,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
        dataKey: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        type: "monotone",
        dataKey: "pv",
        stroke: "#8884d8",
        activeDot: {
          r: 8
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        type: "monotone",
        dataKey: "uv",
        stroke: "#82ca9d",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=index.js.114cb9b8c673a3daeb9b.hot-update.js.map