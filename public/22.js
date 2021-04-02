(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./resources/js/components/Tag/Tagcr.js":
/*!**********************************************!*\
  !*** ./resources/js/components/Tag/Tagcr.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ "./resources/js/components/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Sortt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sortt */ "./resources/js/components/Sortt.js");
/* harmony import */ var _toker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././toker */ "./resources/js/components/toker.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Tagcr = function Tagcr(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    id: '',
    title: '',
    tag: ''
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
    tags: ''
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
    _toker__WEBPACK_IMPORTED_MODULE_6__["instance"].get("/tag").then(function (res) {
      if (isActive) {
        setState({
          tags: res.data.categories
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
        var url = "/tag/delete/".concat(id);
        _toker__WEBPACK_IMPORTED_MODULE_6__["instance"].get(url).then(function (res) {});
        _toker__WEBPACK_IMPORTED_MODULE_6__["instance"].get("/tag").then(function (res) {
          setState({
            tags: res.data.categories
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
      tag: "",
      id: "",
      title: ""
    });
  };

  var handlecreate = function handlecreate(evt) {
    evt.preventDefault();
    _toker__WEBPACK_IMPORTED_MODULE_6__["instance"].post("/tag/store", form);
    _toker__WEBPACK_IMPORTED_MODULE_6__["instance"].get("/tag").then(function (res) {
      setState({
        tags: res.data.categories
      });
      setLoad({
        load: 'true'
      });
      setForm({
        tag: '',
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
    var url = "/tag/edit/".concat(id);
    _toker__WEBPACK_IMPORTED_MODULE_6__["instance"].get(url).then(function (res) {
      setForm({
        tag: res.data.tag.Tag_name,
        id: res.data.tag.id,
        title: ''
      });
    });
  };

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    _toker__WEBPACK_IMPORTED_MODULE_6__["instance"].post("/tag/save/".concat(form.id), form);
    _toker__WEBPACK_IMPORTED_MODULE_6__["instance"].get("/tag").then(function (res) {
      setState({
        tags: res.data.categories
      });
      setLoad({
        load: 'true'
      });
      setForm({
        tag: '',
        id: '',
        title: ''
      });
    });
    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Update', 'Your file has been Update.', 'success');
  };

  var _require$useSortableD = __webpack_require__(/*! ../Sortt.js */ "./resources/js/components/Sortt.js").useSortableData(tate.tags),
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
    src: __webpack_require__(/*! ../../Add.gif */ "./resources/js/Add.gif"),
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
    name: "tag",
    onChange: handleChange,
    value: form.tag,
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
      return requestSort('Tag_name');
    },
    className: getClassNamesFor('Tag_name')
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
    if (form.title !== "" && item.Tag_name.toLowerCase().indexOf(form.title.toLowerCase()) === -1) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.Tag_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      "data-toggle": "modal",
      "data-target": "#exampleModalCenter",
      onClick: function onClick() {
        return Editcategory(item.id);
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
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tagcr);

/***/ })

}]);