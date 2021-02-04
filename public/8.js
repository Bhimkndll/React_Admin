(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/search.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/search.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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

/***/ "./resources/js/components/ProductTable.js":
/*!*************************************************!*\
  !*** ./resources/js/components/ProductTable.js ***!
  \*************************************************/
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
/* harmony import */ var _search_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.css */ "./resources/js/components/search.css");
/* harmony import */ var _search_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_search_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Sortt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sortt */ "./resources/js/components/Sortt.js");
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    id: '',
    title: '',
    category: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      form = _React$useState2[0],
      setForm = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    load: 'true'
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoad = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    bhim: ''
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      tate = _React$useState6[0],
      setState = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    update: true
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      update = _React$useState8[0],
      setUpdate = _React$useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isActive = true;
    var access = localStorage.getItem('token-access');
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

  var create = function create() {
    setUpdate({
      update: false
    });
    setForm({
      category: "",
      id: "",
      title: ""
    });
  };

  var handlecreate = function handlecreate(evt) {
    evt.preventDefault();
    axios.post("http://127.0.0.1:8000/api/category/store", form);
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
    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Created', 'Created Sucessfully.', 'success');
  };

  var Editcategory = function Editcategory(id) {
    setLoad({
      load: 'true'
    });
    setUpdate({
      update: true
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../Add.gif */ "./resources/js/Add.gif"),
    onClick: function onClick() {
      return create();
    },
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    onClick: update.update ? handleSubmit : handlecreate
  }, "Save changes"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    className: "form-control bg-light border-0 small",
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
  }, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('');
    },
    className: getClassNamesFor('')
  }, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('');
    },
    className: getClassNamesFor('')
  }, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('');
    },
    className: getClassNamesFor('')
  }, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('');
    },
    className: getClassNamesFor('')
  }, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('');
    },
    className: getClassNamesFor('')
  }, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('');
    },
    className: getClassNamesFor('')
  }, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return requestSort('');
    },
    className: getClassNamesFor('')
  }, "Actions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      "data-toggle": "modal",
      "data-target": "#exampleModalCenter",
      onClick: function onClick() {
        return Editcategory(item.id);
      },
      src: __webpack_require__(/*! ../edit.png */ "./resources/js/edit.png")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        marginLeft: '10%'
      },
      src: __webpack_require__(/*! ../Delete.gif */ "./resources/js/Delete.gif"),
      onClick: function onClick() {
        return removeData(item.id);
      }
    })));
  })))));
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

/***/ "./resources/js/components/search.css":
/*!********************************************!*\
  !*** ./resources/js/components/search.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!./search.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/search.css");

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

/***/ "./resources/js/edit.png":
/*!*******************************!*\
  !*** ./resources/js/edit.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/edit.png?3229a42719c738fd8b29ce3398ffab0a";

/***/ })

}]);