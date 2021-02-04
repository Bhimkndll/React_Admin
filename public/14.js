(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/components/user/User.js":
/*!**********************************************!*\
  !*** ./resources/js/components/user/User.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var User = function User(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    follows: []
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      follow = _React$useState2[0],
      setFollow = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    users: ''
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      form = _React$useState4[0],
      setForm = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    load: false,
    icon: false
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      loading = _React$useState6[0],
      setLoad = _React$useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isActive = true;
    axios.get("/api/follow").then(function (res) {
      if (isActive) {
        console.log(res);
        setForm({
          users: res.data.users
        });
        var result = res.data.friends.map(function (friend) {
          return friend.self_id;
        });
        setFollow({
          follows: result
        });
        setLoad({
          load: true
        });
      }
    })["catch"](function (error) {
      return console.log(error.message);
    });
    return function () {
      isActive = false;
    };
  }, []);

  var Friend = function Friend(id) {
    console.log(id);
    axios.post("/api/follow/".concat(id)).then(function (res) {
      setLoad({
        icon: true
      });
      axios.get("/api/follow").then(function (res) {
        var result = res.data.friends.map(function (friend) {
          return friend.self_id;
        });
        setFollow({
          follows: result
        });
        setLoad({
          load: true,
          icon: false
        });
      });
    });
  };

  localStorage.setItem("lastname", "bhimkandel");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "First"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Follow"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, loading.icon == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontSize: "30px",
      textAlign: "center",
      marginTop: "20%"
    }
  }, "\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Followed"), "\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D\uD83D\uDE0D"), loading.load == false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontSize: "30px",
      textAlign: "center",
      marginTop: "20%"
    }
  }, "\uD83C\uDF64\uD83C\uDF64\uD83C\uDF64", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Loading....."), "\uD83C\uDF64\uD83C\uDF64\uD83C\uDF64\uD83C\uDF64"), loading.load == true && form.users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, user.name), follow.follows.includes(user.id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../../fri.png */ "./resources/js/fri.png")
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../../follo.png */ "./resources/js/follo.png"),
      onClick: function onClick() {
        return Friend(user.id);
      }
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./resources/js/follo.png":
/*!********************************!*\
  !*** ./resources/js/follo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/follo.png?24224f7fb43649a2795e94829ddb4765";

/***/ }),

/***/ "./resources/js/fri.png":
/*!******************************!*\
  !*** ./resources/js/fri.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/fri.png?ad3035ee2ce68d17ecc990f7cdbfe9ad";

/***/ })

}]);