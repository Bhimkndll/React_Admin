(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/post/postcontroll.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/post/postcontroll.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n\r\nlabel>input[type=checkbox] + #never {\r\n\r\n background: radial-gradient(circle, transparent 40%, #bdc3c7  40%);\r\n  border-radius: 100%;\r\n  height:15px;\r\n  width:15px;\r\n    margin-top: 3px;\r\n    float: left;\r\n\r\n    cursor: pointer;\r\n    margin-left: -3px;\r\n\r\n}\r\n\r\nlabel>input[type=checkbox]:checked + #never {\r\n\r\n  background: radial-gradient(circle, transparent 40%, #f44336  40%);\r\n  border-radius: 100%;\r\n  height:15px;\r\n  width:15px;\r\n    margin-top: 3px;\r\n    float: left;\r\n\r\n    cursor: pointer;\r\n    margin-left: -3px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n#bhimkandel{\r\nmargin-left:51px;\r\nmargin-top:-1px;\r\nfont-size:15px;\r\n}\r\n\r\n.button-switch {\r\nmargin-left:0px;\r\n  font-size: 1.5em;\r\n  height:1em;\r\n  position: relative;\r\n  width: 4.5em;\r\n  float:left;\r\n  cursor:pointer;\r\n}\r\n.button-switch .lbl-off,\r\n.button-switch .lbl-on {\r\n  cursor: pointer;\r\n  display: block;\r\n  font-size:15px;\r\n  font-weight: bold;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  top:0.2em;\r\n  transition: opacity 0.25s ease-out 0.1s;\r\n  text-transform: uppercase;\r\n}\r\n.button-switch .lbl-off {\r\n  right:4.0em;\r\n}\r\n.button-switch .lbl-on {\r\n  color: #fefefe;\r\n  opacity: 0;\r\n  left: 0.4375em;\r\n}\r\n.button-switch .switch {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  height: 0;\r\n  font-size: 1em;\r\n  left: 0;\r\n  line-height: 0;\r\n  outline: none;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 0;\r\n}\r\n.button-switch .switch:before, .button-switch .switch:after {\r\n  content: '';\r\n  font-size:0.5em;\r\n  position: absolute;\r\n}\r\n.button-switch .switch:before {\r\n  border-radius: 1.25em;\r\n  background: #bdc3c7;\r\n  height: 1.875em;\r\n  left: -0.25em;\r\n  top: -0.1875em;\r\n  transition: background-color 0.25s ease-out 0.1s;\r\n  width:4.5em;\r\n    cursor:pointer;\r\n\r\n}\r\n.button-switch .switch:after {\r\n  box-shadow: 0 .0625em .375em 0 #666;\r\n  border-radius: 50%;\r\n  background: #fefefe;\r\n  height:1.5em;\r\n  transform: translate(0, 0);\r\n  transition: transform 0.25s ease-out 0.1s;\r\n  width: 1.5em;\r\n}\r\n.button-switch .switch:checked:after {\r\n  transform: translate(2.5em, 0);\r\n}\r\n.button-switch .switch:checked ~ .lbl-off {\r\n  opacity: 0;\r\n}\r\n.button-switch .switch:checked ~ .lbl-on {\r\n  opacity: 1;\r\n}\r\n.button-switch .switch#switch-orange:checked:before {\r\n  background: #e67e22;\r\n}\r\n.button-switch .switch#switch-blue:checked:before {\r\n  background:#2653d4\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/styles.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/styles.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  font-family: 'open sans', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\nthead th {\r\n  text-align: left;\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\nthead button {\r\n  border: 0;\r\n  border-radius: none;\r\n  font-family: inherit;\r\n  font-weight: 700;\r\n  font-size: inherit;\r\n  padding: 0.5em;\r\n  margin-bottom: 1px;\r\n}\r\n\r\nthead button.ascending::after {\r\n  content: '\\1F447';\r\n  display: inline-block;\r\n}\r\n\r\nthead button.descending::after {\r\n  content:'\\261D\\FE0F';\r\n  display: inline-block;\r\n}\r\n\r\ntbody td {\r\n  padding: 0.5em;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\ntbody tr:hover {\r\n  background-color: #eee;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.btn-toggle.btn-sm:before,\r\n.btn-toggle.btn-sm:after {\r\n  line-height: -0.5rem;\r\n  color: #fff;\r\n  letter-spacing: 0.75px;\r\n  left: 0.4125rem;\r\n  width: 2.325rem;\r\n}\r\n.btn-toggle.btn-sm:before {\r\n  text-align: right;\r\n}\r\n.btn-toggle.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n.btn-toggle.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n.btn-toggle.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n.btn-toggle.btn-xs:before,\r\n.btn-toggle.btn-xs:after {\r\n  display: none;\r\n}\r\n.btn-toggle:before,\r\n.btn-toggle:after {\r\n  color: #6b7381;\r\n}\r\n\r\n\r\n\r\n.btn-toggle.btn-lg.btn-sm:before,\r\n.btn-toggle.btn-lg.btn-sm:after {\r\n  line-height: 0.5rem;\r\n  color: #fff;\r\n  letter-spacing: 0.75px;\r\n  left: 0.6875rem;\r\n  width: 3.875rem;\r\n}\r\n.btn-toggle.btn-lg.btn-sm:before {\r\n  text-align: right;\r\n}\r\n.btn-toggle.btn-lg.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n.btn-toggle.btn-lg.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n.btn-toggle.btn-lg.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n.btn-toggle.btn-lg.btn-xs:before,\r\n.btn-toggle.btn-lg.btn-xs:after {\r\n  display: none;\r\n}\r\n.btn-toggle.btn-sm {\r\n  margin: 0 0.5rem;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 1.5rem;\r\n  width: 3rem;\r\n  border-radius: 1.5rem;\r\n}\r\n.btn-toggle.btn-sm:focus,\r\n.btn-toggle.btn-sm.focus,\r\n.btn-toggle.btn-sm:focus.active,\r\n.btn-toggle.btn-sm.focus.active {\r\n  outline: none;\r\n}\r\n.btn-toggle.btn-sm:before,\r\n.btn-toggle.btn-sm:after {\r\n  line-height: 1.5rem;\r\n  width: 0.5rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 0.55rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  transition: opacity 0.25s;\r\n}\r\n.btn-toggle.btn-sm:before {\r\n  content: \"Off\";\r\n  left: -0.5rem;\r\n}\r\n.btn-toggle.btn-sm:after {\r\n  content: \"On\";\r\n  right: -0.5rem;\r\n  opacity: 0.5;\r\n}\r\n.btn-toggle.btn-sm > .handle {\r\n  position: absolute;\r\n  top: 0.1875rem;\r\n  left: 0.1875rem;\r\n  width: 1.125rem;\r\n  height: 1.125rem;\r\n  border-radius: 1.125rem;\r\n  background: #fff;\r\n  transition: left 0.25s;\r\n}\r\n.btn-toggle.btn-sm.active {\r\n  transition: background-color 0.25s;\r\n}\r\n.btn-toggle.btn-sm.active > .handle {\r\n  left: 1.6875rem;\r\n  transition: left 0.25s;\r\n}\r\n.btn-toggle.btn-sm.active:before {\r\n  opacity: 0.5;\r\n}\r\n.btn-toggle.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n.btn-toggle.btn-sm.btn-sm:before,\r\n.btn-toggle.btn-sm.btn-sm:after {\r\n  line-height: -0.5rem;\r\n  color: #fff;\r\n  letter-spacing: 0.75px;\r\n  left: 0.4125rem;\r\n  width: 2.325rem;\r\n}\r\n.btn-toggle.btn-sm.btn-sm:before {\r\n  text-align: right;\r\n}\r\n.btn-toggle.btn-sm.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n.btn-toggle.btn-sm.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n.btn-toggle.btn-sm.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n.btn-toggle.btn-sm.btn-xs:before,\r\n.btn-toggle.btn-sm.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n\r\n.btn-toggle.btn-xs.btn-sm:before,\r\n.btn-toggle.btn-xs.btn-sm:after {\r\n  line-height: -1rem;\r\n  color: #fff;\r\n  letter-spacing: 0.75px;\r\n  left: 0.275rem;\r\n  width: 1.55rem;\r\n}\r\n.btn-toggle.btn-xs.btn-sm:before {\r\n  text-align: right;\r\n}\r\n.btn-toggle.btn-xs.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n.btn-toggle.btn-xs.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n.btn-toggle.btn-xs.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/Add.gif":
/*!******************************!*\
  !*** ./resources/js/Add.gif ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Add.gif?4f980ade34a3d7e71352069eca35529d";

/***/ }),

/***/ "./resources/js/Delete.gif":
/*!*********************************!*\
  !*** ./resources/js/Delete.gif ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Delete.gif?9c1ce30ba86bbcef9870a7d0ac64bb36";

/***/ }),

/***/ "./resources/js/components/Sort.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Sort.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./resources/js/components/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Sortt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sortt */ "./resources/js/components/Sortt.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ProductTable = function ProductTable(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      notes = _React$useState2[0],
      setNotes = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    id: '',
    title: '',
    category: ''
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      form = _React$useState4[0],
      setForm = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isSubmitting = _React$useState6[0],
      setIsSubmitting = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    load: 'true'
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      loading = _React$useState8[0],
      setLoad = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    bhim: ''
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      tate = _React$useState10[0],
      setState = _React$useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isActive = true;
    axios.get("/api/category").then(function (res) {
      if (isActive) {
        setState({
          bhim: res.data.categories
        });
      }
    })["catch"](function (error) {
      return console.log(error.message);
    });
    return function () {
      isActive = false;
    };
  }, []);

  var removeData = function removeData(id) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (result) {
      if (result.isConfirmed) {
        var url = "http://127.0.0.1:8000/api/category/delete/".concat(id);
        axios.get(url).then(function (res) {});
        axios.get("/api/category").then(function (res) {
          setState({
            bhim: res.data.categories
          });
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  var Editcategory = function Editcategory(id) {
    setLoad({
      load: 'true'
    });
    var url = "http://127.0.0.1:8000/api/category/edit/".concat(id);
    axios.get(url).then(function (res) {
      setForm({
        category: res.data.category.name,
        id: res.data.category.id,
        title: ''
      });
    });
  };

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    axios.post("http://127.0.0.1:8000/api/category/save/".concat(form.id), form);
    axios.get("/api/category").then(function (res) {
      setState({
        bhim: res.data.categories
      });
      setLoad({
        load: 'true'
      });
      setForm({
        category: '',
        id: '',
        title: ''
      });
    });
    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Update', 'Your file has been Update.', 'success');
  };

  var _require$useSortableD = __webpack_require__(/*! ./Sortt.js */ "./resources/js/components/Sortt.js").useSortableData(tate.bhim),
      items = _require$useSortableD.items,
      requestSort = _require$useSortableD.requestSort,
      sortConfig = _require$useSortableD.sortConfig;

  var getClassNamesFor = function getClassNamesFor(name) {
    if (!sortConfig) {
      return;
    }

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  var handleChange = function handleChange(e) {
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-info",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter"
  }, "Update "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "exampleModalCenter",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalCenterTitle",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLongTitle"
  }, "Modal title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "category",
    onChange: handleChange,
    value: form.category,
    placeholder: "Enter the Categoryname",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "sumit"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    "data-dismiss": "modal",
    onClick: handleSubmit
  }, "Save changes"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "accordion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header",
    id: "headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link",
    "data-toggle": "collapse",
    "data-target": "#collapseOne",
    "aria-expanded": "true",
    "aria-controls": "collapseOne"
  }, "Collapsible Group Item #1"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "collapseOne",
    className: "collapse ",
    "aria-labelledby": "headingOne",
    "data-parent": "#accordion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    style: {
      "float": "right"
    },
    name: "title",
    onChange: handleChange,
    value: form.title,
    placeholder: "Search.."
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    style: {
      "float": "right"
    },
    className: "fa fa-search"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-sm",
    id: "myTable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("caption", null, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('id');
    },
    className: getClassNamesFor('id')
  }, "ID")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('name');
    },
    className: getClassNamesFor('name')
  }, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('');
    },
    className: getClassNamesFor('')
  }, "Actions")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, loading.load == 'true' && items.map(function (item) {
    if (form.title !== "" && item.name.toLowerCase().indexOf(form.title.toLowerCase()) === -1) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "btn btn-info",
      "data-toggle": "modal",
      "data-target": "#exampleModalCenter",
      onClick: function onClick() {
        return Editcategory(item.id);
      }
    }, "Update "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        return removeData(item.id);
      }
    }, "Delete")));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductTable);

/***/ }),

/***/ "./resources/js/components/Sortt.js":
/*!******************************************!*\
  !*** ./resources/js/components/Sortt.js ***!
  \******************************************/
/*! exports provided: useSortableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSortableData", function() { return useSortableData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var useSortableData = function useSortableData(items) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(config),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sortConfig = _React$useState2[0],
      setSortConfig = _React$useState2[1];

  var sortedItems = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    var sortableItems = _toConsumableArray(items);

    if (sortConfig !== null) {
      sortableItems.sort(function (a, b) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }

        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  var requestSort = function requestSort(key) {
    var direction = 'ascending';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    setSortConfig({
      key: key,
      direction: direction
    });
  };

  return {
    items: sortedItems,
    requestSort: requestSort,
    sortConfig: sortConfig
  };
};

/***/ }),

/***/ "./resources/js/components/post/Check.js":
/*!***********************************************!*\
  !*** ./resources/js/components/post/Check.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Check = /*#__PURE__*/function (_React$Component) {
  _inherits(Check, _React$Component);

  var _super = _createSuper(Check);

  function Check() {
    var _this;

    _classCallCheck(this, Check);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      editorState: draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createEmpty()
    });

    _defineProperty(_assertThisInitialized(_this), "onEditorStateChange", function (editorState) {
      _this.setState({
        editorState: editorState
      });
    });

    return _this;
  }

  _createClass(Check, [{
    key: "render",
    value: function render() {
      var editorState = this.state.editorState;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
        editorState: editorState,
        wrapperClassName: "demo-wrapper",
        editorClassName: "demo-editor",
        onEditorStateChange: this.onEditorStateChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        disabled: true,
        value: draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_1__["convertToRaw"])(editorState.getCurrentContent()))
      }));
    }
  }]);

  return Check;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Check);

/***/ }),

/***/ "./resources/js/components/post/Post.js":
/*!**********************************************!*\
  !*** ./resources/js/components/post/Post.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ "./resources/js/components/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Sortt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sortt */ "./resources/js/components/Sortt.js");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Check */ "./resources/js/components/post/Check.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! draftjs-to-markdown */ "./node_modules/draftjs-to-markdown/lib/draftjs-to-markdown.js");
/* harmony import */ var draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _toker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .././toker */ "./resources/js/components/toker.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! .././Sort */ "./resources/js/components/Sort.js");
/* harmony import */ var _postcontroll_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./postcontroll.css */ "./resources/js/components/post/postcontroll.css");
/* harmony import */ var _postcontroll_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_postcontroll_css__WEBPACK_IMPORTED_MODULE_14__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var Post = function Post(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    style: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      style = _React$useState2[0],
      setStyle = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    id: '',
    slug: '',
    category: '',
    description: '',
    heading: '',
    image: '',
    cateedit: ''
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      form = _React$useState4[0],
      setForm = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    load: false
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      loading = _React$useState6[0],
      setLoad = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    editorState: ''
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      description = _React$useState8[0],
      setDesc = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    categories: [],
    tags: []
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      tate = _React$useState10[0],
      setState = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    posts: ''
  }),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      posts = _React$useState12[0],
      setPost = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    editpost: ''
  }),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      editpost = _React$useState14[0],
      setEditpost = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    update: true
  }),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      update = _React$useState16[0],
      setUpdate = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      picture = _React$useState18[0],
      setPicture = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    display: true
  }),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      showd = _React$useState20[0],
      setShowd = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    hide: false
  }),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      hiding = _React$useState22[0],
      setHide = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    tag: []
  }),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      forms = _React$useState24[0],
      setTag = _React$useState24[1];

  var _React$useState25 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    all: ''
  }),
      _React$useState26 = _slicedToArray(_React$useState25, 2),
      err = _React$useState26[0],
      setErrors = _React$useState26[1];

  var _React$useState27 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    herr: '',
    derr: '',
    ierr: '',
    serr: '',
    terr: ''
  }),
      _React$useState28 = _slicedToArray(_React$useState27, 2),
      vim = _React$useState28[0],
      setBhim = _React$useState28[1];

  var _React$useState29 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      _React$useState30 = _slicedToArray(_React$useState29, 2),
      search = _React$useState30[0],
      setSearch = _React$useState30[1];

  var numbers = [40, 70, 80, 100, 20, 200, 0, 20, 10, 15, 10, 10, 100, 210, 110, 103, 102, 101, 10];
  console.log(numbers.slice(-8, -2).reverse());

  var handlecheckd = function handlecheckd(_ref) {
    var target = _ref.target;

    var _id = parseInt(target.value, 10);

    var index = forms.tag.find(function (t) {
      return t.id === _id;
    });
    var _form = null;
    if (index === undefined) _form = {
      tag: [].concat(_toConsumableArray(forms.tag), [{
        id: _id
      }])
    };else _form = {
      tag: forms.tag.filter(function (t) {
        return t.id !== _id;
      })
    };
    setTag(_form);
    console.log(form.tag);
  };

  var Control = function Control(id) {
    console.log(id);
    var url = "/post/maincontent/".concat(id);
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get(url).then(function (res) {})["catch"](function (error) {
      return console.log(error.message);
    });
  };

  var handlecheck = function handlecheck(event) {
    console.log(event.target.value);
    var newArray = [].concat(_toConsumableArray(form.tag), [event.target.value]);

    if (form.tag.includes(event.target.value)) {
      newArray = newArray.filter(function (bhim) {
        return bhim !== event.target.value;
      });
    }

    setForm(_objectSpread(_objectSpread({}, form), {}, {
      tag: newArray
    }));
  };

  var onEditorStateChange = function onEditorStateChange(editorState) {
    setDesc({
      editorState: editorState
    });
  };

  var upload = function upload(event) {
    setPicture(event.target.files[0]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isActive = true;
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get("/post/create").then(function (res) {
      if (isActive) {
        setState(_objectSpread(_objectSpread({}, tate), {}, {
          categories: res.data.categories,
          tags: res.data.tags
        }));
        setPost({
          posts: res.data.posts
        });
        setForm(_objectSpread(_objectSpread({}, form), {}, {
          title: '',
          category: res.data.categories[0].id
        }));
        setLoad({
          load: true
        });
        console.log(posts);
        var hero = ["Batman", "Superman", "Hulk"];

        var lastHero = _.takeRight(res.data.categories, 3);

        console.log(lastHero);
      }
    })["catch"](function (error) {
      return console.log(error.message);
    });
    return function () {
      isActive = false;
    };
  }, []);

  var removeData = function removeData(id) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (result) {
      if (result.isConfirmed) {
        var url = "/post/destroy/".concat(id);
        _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get(url).then(function (res) {});
        _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get("/post/index").then(function (res) {
          setPost({
            posts: res.data.posts
          });
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  var handlecreate = function handlecreate(evt) {
    evt.preventDefault();
    setHide({
      hide: false
    });
    setShowd({
      display: true
    });
    setErrors({
      all: '',
      errall: true
    });
    setBhim({
      herr: '',
      derr: '',
      ierr: '',
      serr: '',
      terr: ''
    });
    var fd = new FormData();
    fd.append('image', picture);
    fd.append('heading', form.heading);
    fd.append('tags', form.tag);
    fd.append('category', form.category);
    fd.append('slug', form.slug);
    fd.append('description', description.editorState && draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_9___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_7__["convertToRaw"])(description.editorState.getCurrentContent())));
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].post('/post/store', fd).then(function (res) {
      _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get("/post/index").then(function (res) {
        setPost({
          posts: res.data.posts
        });
      });
      setShow(false);
      setForm({
        title: '',
        tag: '',
        heading: '',
        description: '',
        category: '',
        slug: ''
      });
      setShowd({
        display: false
      });
    })["catch"](function (error) {
      if (error.response) {
        setShow(true);
        setErrors({
          all: error.response.data.errors
        });
      }
    });
  };

  var EditPost = function EditPost(id) {
    setErrors({
      all: ''
    });
    setBhim({
      herr: '',
      derr: '',
      ierr: '',
      serr: '',
      terr: ''
    });
    setShow(true);
    setHide({
      hide: false
    });
    setShowd({
      display: true
    });
    setUpdate({
      update: true
    });
    var url = "/post/edit/".concat(id);
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get(url).then(function (res) {
      console.log(res);
      setForm({
        title: '',
        id: res.data.posts[0].id,
        category: res.data.posts[0].category_id,
        description: res.data.posts[0].description,
        heading: res.data.posts[0].heading,
        slug: res.data.posts[0].slug,
        image: res.data.posts[0].image,
        cateedit: res.data.posts[0].category_id
      });
      setTag({
        tag: res.data.posts[0].tags
      });
      setHide({
        hide: true
      });
      setDesc({
        editorState: draft_js__WEBPACK_IMPORTED_MODULE_7__["EditorState"].createWithContent(draft_js__WEBPACK_IMPORTED_MODULE_7__["ContentState"].createFromText(res.data.posts[0].description))
      });
    });
  };

  var handleSubmit = function handleSubmit(evt) {
    console.log(form.checkedItems);
    evt.preventDefault();
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].post("/post/save/".concat(form.id), form);
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get("/post").then(function (res) {
      setState({
        bhim: res.data.categories
      });
      setLoad({
        load: 'true'
      });
      setForm({
        post: '',
        id: '',
        title: ''
      });
    });
    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Update', 'Your file has been Update.', 'success');
  };

  console.log(posts.posts);

  var _require$useSortableD = __webpack_require__(/*! ../Sortt.js */ "./resources/js/components/Sortt.js").useSortableData(posts.posts),
      items = _require$useSortableD.items,
      requestSort = _require$useSortableD.requestSort,
      sortConfig = _require$useSortableD.sortConfig;

  var getClassNamesFor = function getClassNamesFor(name) {
    if (!sortConfig) {
      return;
    }

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  var handleChange = function handleChange(e) {
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var Show = function Show() {
    setDesc({
      editorState: draft_js__WEBPACK_IMPORTED_MODULE_7__["EditorState"].createWithContent(draft_js__WEBPACK_IMPORTED_MODULE_7__["ContentState"].createFromText(""))
    });
    setHide({
      hide: false
    });
    setShow(true);
    setErrors({
      all: ''
    });
    setBhim({
      herr: '',
      derr: '',
      ierr: '',
      serr: '',
      terr: ''
    });
    setPicture('');
    setShowd({
      display: true
    });
    setForm({
      category: tate.categories[0].id,
      description: '',
      heading: '',
      tag: '',
      slug: '',
      title: ''
    });
  };

  var Switch = function Switch(id, pid) {
    console.log(id);
    console.log(pid);
    var url = "/post/switch/".concat(id, "/").concat(pid);
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get(url).then(function (res) {});
  };

  var Slider = function Slider(id) {
    var url = "/post/slider/".concat(id);
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get(url).then(function (res) {})["catch"](function (error) {
      return console.log(error.message);
    });
  };

  var Carousel = function Carousel(id) {
    console.log(id);
    var url = "/post/carousel/".concat(id);
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get(url).then(function (res) {})["catch"](function (error) {
      return console.log(error.message);
    });
  };

  var handleSave = function handleSave(evt) {
    setErrors({
      all: '',
      errall: true
    });
    setBhim({
      herr: '',
      derr: '',
      ierr: '',
      serr: '',
      terr: ''
    });
    var newArr = [];
    forms.tag.forEach(function (item) {
      newArr.push(item.id);
    });
    console.log(newArr);
    evt.preventDefault();
    setHide({
      hide: true
    });
    var fd = new FormData();
    fd.append('image', picture);
    fd.append('heading', form.heading);
    fd.append('tags', newArr);
    fd.append('category', form.category);
    fd.append('slug', form.slug);
    fd.append('description', description.editorState && draftjs_to_markdown__WEBPACK_IMPORTED_MODULE_9___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_7__["convertToRaw"])(description.editorState.getCurrentContent())));
    _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].post("/post/save/".concat(form.id), fd).then(function (res) {
      setShow(false);
      _toker__WEBPACK_IMPORTED_MODULE_11__["instance"].get("/post/index").then(function (res) {
        setPost({
          posts: res.data.posts
        });
        setForm({
          title: '',
          id: '',
          tag: '',
          heading: '',
          description: '',
          category: '',
          slug: ''
        });
        setShowd({
          display: true
        });
      });
    })["catch"](function (error) {
      setShow(true);
      setErrors({
        all: error.response.data.errors,
        errall: false
      });
      console.log(error.response.data.errors);

      if (error.response) {}
    });
    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Update!', 'Your file has been deleted.', 'success');
  };

  if (err.all) {
    {
      err.all.map(function (error) {
        if (error.includes('image')) {
          vim.ierr = error.toUpperCase();
        }

        if (error.includes('heading')) {
          vim.herr = error.toUpperCase();
        }

        if (error.includes('slug')) {
          vim.serr = error.toUpperCase();
        }

        if (error.includes('description')) {
          vim.derr = error.toUpperCase();
        }

        if (error.includes('tag')) {
          vim.terr = error.toUpperCase();
        }
      });
    }
  }

  console.log(posts.posts);
  console.log(items);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../Add.gif */ "./resources/js/Add.gif"),
    onClick: Show
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    top: true,
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"].Title, null, "Modal title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"].Body, null, showd.display == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "inputEmail3",
    className: "col-sm-2 col-form-label"
  }, "Heading"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    value: form.heading,
    onChange: handleChange,
    name: "heading",
    className: "form-control",
    id: "inputstyle={style.style}Email3",
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, vim.herr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    value: form.heading,
    sssname: "heading",
    className: "form-control",
    id: "inputstyle={style.style}Email3",
    placeholder: "Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, vim.ierr))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "inputEmail3",
    className: "col-sm-2 col-form-label"
  }, "slug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "slug",
    defaultValue: form.slug,
    onChange: handleChange,
    className: "form-control",
    id: "inputstyle={style.style}Email3",
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, vim.serr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputEmail3",
    className: "col-sm-2 col-form-label"
  }, "TAG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, tate.tags.map(function (tag) {
    return hiding.hide ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      key: tag.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "tag[]",
      type: "checkbox",
      value: tag.id,
      onChange: handlecheckd,
      checked: forms.tag.find(function (t) {
        return t.id === tag.id;
      }) !== undefined
    }), tag.Tag_name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      key: tag.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "tag[]",
      type: "checkbox",
      value: tag.id,
      onChange: handlecheck
    }), tag.Tag_name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, vim.terr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "inputEmail3",
    className: "col-sm-2 col-form-label"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", _defineProperty({
    className: "form-control",
    name: "catestyle={style.style}gory",
    onChange: handleChange,
    id: "exampleFormControlSelect1"
  }, "name", "category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), tate.categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: category.id,
      selected: form.cateedit == category.id ? true : false
    }, category.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_8__["Editor"], {
    editorState: description.editorState,
    onEditorStateChange: onEditorStateChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-danger"
  }, vim.derr))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    variant: "secondary",
    onClick: handleClose
  }, "  Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    variant: "primary",
    onClick: hiding.hide ? handleSave : handlecreate
  }, "Save changes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group",
    style: {
      width: '40%',
      "float": 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "title",
    onChange: handleChange,
    value: form.title,
    className: "form-control bg-light bstyle={style.style}order-0 small",
    placeholder: "Search for...",
    "aria-label": "Search",
    "aria-describedby": "basic-addon2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search fa-sm"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-responsive-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-sm table table-bordered",
    id: "myTable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("caption", null, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('id');
    },
    className: getClassNamesFor('id')
  }, "ID")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('heading');
    },
    className: getClassNamesFor('heading')
  }, "Heading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Picture"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Slug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "ControllSlider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "name"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, loading.load === true && items.map(function (item) {
    if (item.heading.toLowerCase().indexOf(form.title.toLowerCase()) === -1 && item.category.name.toLowerCase().indexOf(form.title.toLowerCase()) === -1) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      style: {
        width: "7.5%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "bar-sm",
      src: global.link + item.image,
      alt: "pic error",
      style: {
        width: '70px',
        height: '35px'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      style: {
        width: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: item.status == 1 ? "btn btn-sm btn-secondary btn-toggle focus active" : "btn btn-sm btn-secondary btn-toggle",
      "data-toggle": "button",
      "aria-pressed": item.status == 1 ? "true" : "false",
      autoComplete: "off",
      onClick: function onClick() {
        return Switch(item.status, item.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "handle"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: "ossm",
      name: "ossm",
      hidden: true,
      defaultChecked: item.maincontent ? true : false,
      onClick: function onClick() {
        return Control(item.id);
      }
    }), item.category.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "never",
      style: {
        cursor: "pointer"
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      style: {
        width: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button-switch"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: "switch-blue",
      className: "switch",
      defaultChecked: item.carousel ? true : false,
      onClick: function onClick() {
        return Carousel(item.id);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "bhimkandel"
    }, "Carousel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button-switch"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: "switch-orange",
      className: "switch",
      defaultChecked: item.slider ? true : false,
      onClick: function onClick() {
        return Slider(item.id);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "bhimkandel"
    }, "Slider"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      "data-toggle": "modal",
      "data-target": "#exampleModalCenter",
      onClick: function onClick() {
        return EditPost(item.id);
      },
      src: __webpack_require__(/*! ../../edit.png */ "./resources/js/edit.png")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        marginLeft: '10%'
      },
      src: __webpack_require__(/*! ../../Delete.gif */ "./resources/js/Delete.gif"),
      onClick: function onClick() {
        return removeData(item.id);
      }
    })));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Small")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-5"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/components/post/postcontroll.css":
/*!*******************************************************!*\
  !*** ./resources/js/components/post/postcontroll.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./postcontroll.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/post/postcontroll.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/styles.css":
/*!********************************************!*\
  !*** ./resources/js/components/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/toker.js":
/*!******************************************!*\
  !*** ./resources/js/components/toker.js ***!
  \******************************************/
/*! exports provided: tinker, bhim, instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinker", function() { return tinker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bhim", function() { return bhim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

'';

var tinker = function tinker() {
  if (localStorage.getItem('token')) {
    return localStorage.getItem('token');
  }
};
var bhim = function bhim() {
  var names = tinker();
  return "{\n    headers: {\n      'Authorization': 'Bearer' + ".concat(names, "\n    }\n  }");
};
var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 1000,
  headers: {
    'Authorization': 'Bearer ' + tinker()
  }
});

/***/ }),

/***/ "./resources/js/edit.png":
/*!*******************************!*\
  !*** ./resources/js/edit.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/edit.png?3229a42719c738fd8b29ce3398ffab0a";

/***/ })

}]);