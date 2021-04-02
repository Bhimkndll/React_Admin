(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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
/*export const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer '+tinker()}
});
*/

var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: 'https://peaceful-earth-77113.herokuapp.com/api/',
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