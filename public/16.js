(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/js/components/Views/Login/Login.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Views/Login/Login.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _log_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.css */ "./resources/js/components/Views/Login/log.css");
/* harmony import */ var _log_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_log_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _Register_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Register/Register */ "./resources/js/components/Views/Register/Register.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Login = function Login(props) {
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6__["default"]();
  var link = global.link;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    all: '',
    open: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setErr = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    allemail: ''
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      emailerror = _React$useState4[0],
      setEmailerr = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    allpass: ''
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      passerror = _React$useState6[0],
      setPassworderr = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    allother: ''
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      other = _React$useState8[0],
      setOthererr = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    hide: false
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      hide = _React$useState10[0],
      setHide = _React$useState10[1];

  console.log(cookies.get('token-access')); // Pacman

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      password: '',
      email: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
      email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Required').email('Invalid email address').max(55, 'Must be 55 characters or less'),
      password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Required').min(7, 'Must be 8 characters')
    }),
    onSubmit: function onSubmit(values) {
      setErr({
        all: ''
      });
      setOthererr({
        other: ''
      });
      setPassworderr({
        allpass: ''
      });
      setEmailerr({
        allemail: ''
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/sanctum/csrf-cookie').then(function (response) {
        var res = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/login", values).then(function (res) {
          props.history.push('/admin/new');
        })["catch"](function (error) {
          console.log(error.response);

          if (error.response.data.errors) {
            setErr({
              open: true,
              all: error.response.data.errors
            });
          }

          if (error.response.data.message) {
            setOthererr({
              allother: error.response.data.message
            });
          }
        });
      });
    }
  });

  var signup = function signup() {
    var bhim = hide.hide;
    setHide({
      hide: !bhim
    });
  };

  if (error.all) {
    {
      error.all.map(function (error) {
        if (error.includes('email')) {
          emailerror.allemail = error.toUpperCase();
        }

        if (error.includes('password')) {
          passerror.allpass = error.toUpperCase();
        }
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hide.hide ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register_Register__WEBPACK_IMPORTED_MODULE_5__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "",
    className: "form",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "img/avatar.png",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, other.allother), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, emailerror.allemail), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, emailerror.allemail), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, passerror.allpass), other.allother && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uD83E\uDD14!!!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "email",
    id: "loginUser",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.email,
    required: true,
    style: {
      backgroundColor: "#80737300"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "loginUser"
  }, "User Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, formik.touched.email && formik.errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.email) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    name: "password",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.password,
    id: "loginPassword",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "loginPassword"
  }, "Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, " ", formik.touched.password && formik.errors.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.password) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Login",
    className: "submit-btn"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/admin/register",
    className: "forgot-pw"
  }, "Forgot Password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-md",
    style: {
      backgroundColor: "#42b72a",
      width: "250px",
      height: "70px",
      marginTop: "26px"
    },
    onClick: signup
  }, "SignUp")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);