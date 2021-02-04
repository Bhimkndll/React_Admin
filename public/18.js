(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/components/admin/fotter/Fotter.js":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/fotter/Fotter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Fotter = function Fotter() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      picture = _React$useState2[0],
      setPicture = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    mailus: '',
    callus: '',
    image: '',
    subscribe: '',
    shortdesc: '',
    findus: '',
    id: ''
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      form = _React$useState4[0],
      setForm = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    load: true
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      load = _React$useState6[0],
      setLoad = _React$useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isActive = true;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/fotter/data").then(function (res) {
      if (isActive) {
        setForm({
          id: res.data.fotter.id,
          callus: res.data.fotter.callus,
          mailus: res.data.fotter.mailus,
          shortdesc: res.data.fotter.shortdesc,
          image: res.data.fotter.image,
          findus: res.data.fotter.findus,
          subscribe: res.data.fotter.subscribe
        });
      }
    })["catch"](function (error) {
      return console.log(error.message);
    });
    return function () {
      isActive = false;
    };
  }, []);

  var upload = function upload(event) {
    setPicture(event.target.files[0]);
  };

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    enableReinitialize: true,
    initialValues: {
      callus: form.callus,
      mailus: form.mailus,
      shortdesc: form.shortdesc,
      subscribe: form.subscribe,
      findus: form.findus
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
      callus: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Required').max(14, 'Must be 50 characters or less'),
      mailus: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Required').email('Invalid email address').max(30, 'Must be 8 characters'),
      shortdesc: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Required').max(100, 'Must be 50 characters or less'),
      subscribe: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Required').max(55, 'Must be 50 characters or less'),
      findus: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Required').max(40, 'Must be 50 characters or less')
    }),
    onSubmit: function onSubmit(values) {
      var fd = new FormData();
      fd.append('image', picture);
      fd.append('callus', values.callus);
      fd.append('mailus', values.mailus);
      fd.append('shortdesc', values.shortdesc);
      fd.append('subscribe', values.subscribe);
      fd.append('findus', values.findus);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/sanctum/csrf-cookie').then(function (response) {
        var res = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/fotter/".concat(form.id), fd).then(function (res) {
          props.history.push('/admin/new');
        })["catch"](function (error) {
          console.log(error.response);

          if (error.response.data.errors) {}

          if (error.response.data.message) {}
        });
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "exampleInputEmail1"
  }, "FindUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _defineProperty({
    type: "text",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter Findus",
    name: "findus",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: form.findus
  }, "value", formik.values.findus)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, " ", formik.touched.findus && formik.errors.findus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.findus) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Mail US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "mailus",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter Mail Us",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.mailus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, " ", formik.touched.mailus && formik.errors.mailus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.mailus) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Subscribe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "subscribe",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "subscribe",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.subscribe
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, " ", formik.touched.subscribe && formik.errors.subscribe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.subscribe) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Call US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "callus",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.callus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, " ", formik.touched.callus && formik.errors.callus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.callus) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Shortdesc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "shortdesc",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter Desc",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.shortdesc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "adjust text-danger"
  }, " ", formik.touched.shortdesc && formik.errors.shortdesc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formik.errors.shortdesc) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "inputEmail3",
    className: "col-sm-2 col-form-label"
  }, "Images"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    name: "picture[]",
    label: "Product Picture",
    onChange: upload,
    multiple: true,
    style: {
      width: '71%'
    }
  }), picture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "picture type: ", picture.type, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded float-right",
    src: URL.createObjectURL(picture),
    alt: picture.name,
    style: {
      width: '25%',
      height: '10%',
      marginTop: '-10%'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    className: "btn btn-info",
    values: "Submit"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Fotter);

/***/ })

}]);