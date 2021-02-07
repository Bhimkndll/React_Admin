(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Login/log.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Views/Login/log.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: url('') no-repeat center;\r\n  background-size: cover;\r\n  font-family: sans-serif;\r\n}\r\n.login-wrapper {\r\n  height: 100vh;\r\n  width: 123vw;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  width:75%;\r\n  max-width: 380px;\r\n  padding: 80px 40px 40px;\r\n  background: rgba(0,0,0,0.7);\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  box-shadow: 0 15px 25px rgba(0,0,0,0.5);\r\n      margin-left: -120px\r\n\r\n}\r\n.form::before {\r\n  content:'';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 50%;\r\n  height: 100%;\r\n  background: rgba(255,255,255, 0.08);\r\n  transform: skewX(-26deg);\r\n  transform-origin: bottom left;\r\n  border-radius: 10px;\r\n  pointer-events: none;\r\n}\r\n.form img {\r\n  position: absolute;\r\n  top: -50px;\r\n  left: calc(50% - 50px);\r\n  width: 100px;\r\n  background: rgba(255,255,255, 0.8);\r\n  border-radius: 50%;\r\n}\r\n.form h2 {\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  margin-bottom: 2rem;\r\n  color: #ff652f;\r\n}\r\n.form .input-group {\r\n  position: relative;\r\n}\r\n.form .input-group input {\r\n  width: 100%;\r\n  padding: 10px 0;\r\n  font-size: 1rem;\r\n  letter-spacing: 1px;\r\n  margin-bottom: 30px;\r\n  border: none;\r\n  border-bottom: 1px solid #fff;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: inherit;\r\n}\r\n.form .input-group label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 4px 0;\r\n  font-size: 1rem;\r\n  pointer-events: none;\r\n  transition: .3s ease-out;\r\n}\r\n.form .input-group input:focus + label,\r\n.form .input-group input:valid + label {\r\n  transform: translateY(-18px);\r\n  color: #ff652f;\r\n  font-size: .8rem;\r\n}\r\n.submit-btn {\r\n  display: block;\r\n  margin-left: auto;\r\n  border: none;\r\n  outline: none;\r\n  background: #ff652f;\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n.forgot-pw {\r\n  color: inherit;\r\n}\r\n\r\n#forgot-pw {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 0;\r\n  z-index: 1;\r\n  background: #fff;\r\n  opacity: 0;\r\n  transition: 0.6s;\r\n}\r\n#forgot-pw:target {\r\n  height: 100%;\r\n  opacity: 1;\r\n}\r\n.close {\r\n  position: absolute;\r\n  right: 1.5rem;\r\n  top: 0.5rem;\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n.adjust{\r\n  margin-top:-1em;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Views/Login/log.css":
/*!*****************************************************!*\
  !*** ./resources/js/components/Views/Login/log.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./log.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Login/log.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Views/Register/Register.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Views/Register/Register.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_log_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Login/log.css */ "./resources/js/components/Views/Login/log.css");
/* harmony import */ var _Login_log_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login_log_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Register = function Register() {
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
    other: ''
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      othersuccess = _React$useState10[0],
      setOther = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    name: '',
    lname: ''
  }),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      name = _React$useState12[0],
      setName = _React$useState12[1];

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      name: '',
      lastname: '',
      password: '',
      email: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
      name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Required').min(4, 'Must be 4 characters').max(150, 'Must not exceed 150 characters'),
      lastname: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Required').min(3, 'Must be 3 characters').max(120, 'Must not exceed 120 characters'),
      email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Required').email('Invalid email address').max(55, 'Must be 55 characters or less'),
      password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Required').min(7, 'Must be 8 characters')
    }),
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;
      console.log("bhim");
      setErr({
        all: ''
      });
      setOther({
        other: ''
      });
      setOthererr({
        allother: ''
      });
      setPassworderr({
        allpass: ''
      });
      setEmailerr({
        allemail: ''
      });
      setName({
        name: '',
        lname: ''
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/sanctum/csrf-cookie').then(function (response) {
        var res = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/signup", values).then(function (res) {
          setOther({
            other: "Hi!" + res.data.user + "." + res.data.success
          });
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

  if (error.all) {
    {
      error.all.map(function (error) {
        if (error.includes('email')) {
          emailerror.allemail = error.toUpperCase();
        }

        if (error.includes('password')) {
          passerror.allpass = error.toUpperCase();
        }

        if (error.includes('firstname')) {
          name.name = error.toUpperCase();
        }

        if (error.includes('lastname')) {
          name.lname = error.toUpperCase();
        }
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, name.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, name.lname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-success"
  }, othersuccess.other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, passerror.allpass), other.allother && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uD83E\uDD14!!!"), error.all && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uD83D\uDE2B!!!!"), othersuccess.other && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uD83E\uDD17!!!!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "name",
    id: "loginUser",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.firstname,
    required: true,
    style: {
      backgroundColor: "#80737300"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "loginUser"
  }, "First Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, formik.touched.firstname && formik.errors.firstname ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.firstname) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "lastname",
    id: "loginUser",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.lastname,
    required: true,
    style: {
      backgroundColor: "#80737300"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "loginUser"
  }, "Last Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, formik.touched.lastname && formik.errors.lastname ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.lastname) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#forgot-pw",
    className: "forgot-pw"
  }, "Forgot Password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "forgot-pw"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "",
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "close"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Reset Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "email"
  }, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Submit",
    className: "submit-btn"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

}]);