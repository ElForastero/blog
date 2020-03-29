(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/classcat/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/classcat/src/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cc; });
var isArray = Array.isArray

function cc(names) {
  var i
  var len
  var tmp = typeof names
  var out = ""

  if (tmp === "string" || tmp === "number") return names || ""

  if (isArray(names) && names.length > 0) {
    for (i = 0, len = names.length; i < len; i++) {
      if ((tmp = cc(names[i])) !== "") out += (out && " ") + tmp
    }
  } else {
    for (i in names) {
      if (names.hasOwnProperty(i) && names[i]) out += (out && " ") + i
    }
  }

  return out
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Avatar/Avatar.module.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/atoms/Avatar/Avatar.module.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._9105 {\n  border-radius: 50%;\n  max-width: 100%;\n}\n", "",{"version":3,"sources":["Avatar.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,eAAe;AACjB","file":"Avatar.module.css","sourcesContent":[".root {\n  border-radius: 50%;\n  max-width: 100%;\n}\n"]}]);
// Exports
exports.locals = {
	"root": "_9105"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Button/Button.module.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/atoms/Button/Button.module.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".cb17 {\n  border-radius: var(--r2);\n  background-color: var(--neutral1);\n  border: 1px dashed transparent;\n  font-size: var(--fs2);\n  padding: var(--s2) var(--s2);\n  font-weight: normal;\n  color: var(--neutral8);\n}\n\n.cb17:hover {\n  background-color: var(--neutral2);\n}\n\n.cb17:focus {\n  outline: none;\n  border-color: var(--neutral4);\n}\n\n.cb17:active {\n  border-color: var(--neutral4);\n}\n", "",{"version":3,"sources":["Button.module.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,8BAA8B;EAC9B,qBAAqB;EACrB,4BAA4B;EAC5B,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B","file":"Button.module.css","sourcesContent":[".root {\n  border-radius: var(--r2);\n  background-color: var(--neutral1);\n  border: 1px dashed transparent;\n  font-size: var(--fs2);\n  padding: var(--s2) var(--s2);\n  font-weight: normal;\n  color: var(--neutral8);\n}\n\n.root:hover {\n  background-color: var(--neutral2);\n}\n\n.root:focus {\n  outline: none;\n  border-color: var(--neutral4);\n}\n\n.root:active {\n  border-color: var(--neutral4);\n}\n"]}]);
// Exports
exports.locals = {
	"root": "cb17"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/CatalogItem/CatalogItem.module.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/atoms/CatalogItem/CatalogItem.module.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._5761 {\n  display: flex;\n  align-items: center;\n  padding: var(--s3) var(--s4);\n  border-radius: var(--r2);\n  font-size: var(--fs4);\n  line-height: 24px;\n  color: var(--neutral8);\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  border: 1px dashed transparent;\n}\n\n._5761:hover {\n  background-color: var(--neutral1);\n  color: var(--neutral10);\n}\n\n._5761:focus {\n  outline: none;\n  border-color: var(--neutral4);\n}\n\n._5761:active {\n  border-color: var(--neutral4);\n}\n\n._88e0 {\n  display: flex;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  margin-right: var(--s3);\n  font-size: 1em;\n}\n", "",{"version":3,"sources":["CatalogItem.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,4BAA4B;EAC5B,wBAAwB;EACxB,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;EACtB,qEAAqE;EACrE,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,cAAc;AAChB","file":"CatalogItem.module.css","sourcesContent":[".root {\n  display: flex;\n  align-items: center;\n  padding: var(--s3) var(--s4);\n  border-radius: var(--r2);\n  font-size: var(--fs4);\n  line-height: 24px;\n  color: var(--neutral8);\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  border: 1px dashed transparent;\n}\n\n.root:hover {\n  background-color: var(--neutral1);\n  color: var(--neutral10);\n}\n\n.root:focus {\n  outline: none;\n  border-color: var(--neutral4);\n}\n\n.root:active {\n  border-color: var(--neutral4);\n}\n\n.icon {\n  display: flex;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  margin-right: var(--s3);\n  font-size: 1em;\n}\n"]}]);
// Exports
exports.locals = {
	"root": "_5761",
	"icon": "_88e0"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Highlighter/Highlighter.module.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/atoms/Highlighter/Highlighter.module.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._7598 {\n  display: inline-block;\n  position: relative;\n}\n\n._7598::after {\n  content: '';\n  display: block;\n  border-radius: var(--r1);\n  position: absolute;\n  left: 0;\n  top: 55%;\n  height: 0.3em;\n  width: 100%;\n  z-index: -1;\n  background-color: var(--additional1);\n}\n", "",{"version":3,"sources":["Highlighter.module.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,wBAAwB;EACxB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,aAAa;EACb,WAAW;EACX,WAAW;EACX,oCAAoC;AACtC","file":"Highlighter.module.css","sourcesContent":[".root {\n  display: inline-block;\n  position: relative;\n}\n\n.root::after {\n  content: '';\n  display: block;\n  border-radius: var(--r1);\n  position: absolute;\n  left: 0;\n  top: 55%;\n  height: 0.3em;\n  width: 100%;\n  z-index: -1;\n  background-color: var(--additional1);\n}\n"]}]);
// Exports
exports.locals = {
	"root": "_7598"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Logo/Logo.module.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/atoms/Logo/Logo.module.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._5059 {\n  font-size: var(--fs6);\n  font-weight: 500;\n}\n\n.a843 {\n  margin-left: var(--s3);\n}\n", "",{"version":3,"sources":["Logo.module.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB","file":"Logo.module.css","sourcesContent":[".root {\n  font-size: var(--fs6);\n  font-weight: 500;\n}\n\n.text {\n  margin-left: var(--s3);\n}\n"]}]);
// Exports
exports.locals = {
	"root": "_5059",
	"text": "a843"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Navigation/Navigation.module.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/atoms/Navigation/Navigation.module.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._3b2f {\n  position: relative;\n}\n\n._2063 {\n  display: flex;\n  transition: all 0.3s ease-out;\n}\n\n._2063 > *:not(img):not(:last-child) {\n  margin-right: var(--s3);\n}\n\n.ffbd {\n  display: none;\n  margin-left: auto;\n}\n\n.a345 {\n  display: none;\n  align-self: flex-end;\n  margin-right: var(--s4);\n  margin-top: var(--s4);\n}\n\n.ffbd,\n.a345 {\n  color: var(--neutral10);\n}\n\n@media screen and (max-width: 768px) {\n  ._2063 {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n  }\n\n  [data-is-open='false'] ._2063 {\n    transform: translateX(-100%);\n  }\n\n  [data-is-open='true'] ._2063 {\n    transform: translateX(0);\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  }\n\n  .ffbd {\n    display: block;\n  }\n\n  .a345 {\n    display: block;\n  }\n\n  ._2063 {\n    flex-flow: column;\n    background-color: var(--neutral0);\n    z-index: 2;\n  }\n\n  ._2063 > *:not(.a345):not(.ffbd) {\n    margin: 0 !important;\n    text-align: center;\n  }\n}\n", "",{"version":3,"sources":["Navigation.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,wBAAwB;IACxB,sCAAsC;EACxC;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,iBAAiB;IACjB,iCAAiC;IACjC,UAAU;EACZ;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;AACF","file":"Navigation.module.css","sourcesContent":[".root {\n  position: relative;\n}\n\n.nav {\n  display: flex;\n  transition: all 0.3s ease-out;\n}\n\n.nav > *:not(img):not(:last-child) {\n  margin-right: var(--s3);\n}\n\n.icon {\n  display: none;\n  margin-left: auto;\n}\n\n.close {\n  display: none;\n  align-self: flex-end;\n  margin-right: var(--s4);\n  margin-top: var(--s4);\n}\n\n.icon,\n.close {\n  color: var(--neutral10);\n}\n\n@media screen and (max-width: 768px) {\n  .nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n  }\n\n  [data-is-open='false'] .nav {\n    transform: translateX(-100%);\n  }\n\n  [data-is-open='true'] .nav {\n    transform: translateX(0);\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  }\n\n  .icon {\n    display: block;\n  }\n\n  .close {\n    display: block;\n  }\n\n  .nav {\n    flex-flow: column;\n    background-color: var(--neutral0);\n    z-index: 2;\n  }\n\n  .nav > *:not(.close):not(.icon) {\n    margin: 0 !important;\n    text-align: center;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"root": "_3b2f",
	"nav": "_2063",
	"icon": "ffbd",
	"close": "a345"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/NavigationLink/NavigationLink.module.css":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/atoms/NavigationLink/NavigationLink.module.css ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._051b {\n  padding: var(--s3) var(--s3);\n  border-radius: var(--r2);\n  color: var(--neutral8);\n  text-decoration: none;\n  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;\n  border: 1px dashed transparent;\n  background-color: transparent;\n  cursor: pointer;\n  text-align: left;\n}\n\n._051b:hover {\n  color: var(--neutral10);\n  background-color: var(--neutral1);\n}\n\n._051b:focus {\n  outline: none;\n  border-color: var(--neutral4);\n}\n\n._051b:active {\n  border-color: var(--neutral4);\n}\n", "",{"version":3,"sources":["NavigationLink.module.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,wBAAwB;EACxB,sBAAsB;EACtB,qBAAqB;EACrB,+DAA+D;EAC/D,8BAA8B;EAC9B,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B","file":"NavigationLink.module.css","sourcesContent":[".root {\n  padding: var(--s3) var(--s3);\n  border-radius: var(--r2);\n  color: var(--neutral8);\n  text-decoration: none;\n  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;\n  border: 1px dashed transparent;\n  background-color: transparent;\n  cursor: pointer;\n  text-align: left;\n}\n\n.root:hover {\n  color: var(--neutral10);\n  background-color: var(--neutral1);\n}\n\n.root:focus {\n  outline: none;\n  border-color: var(--neutral4);\n}\n\n.root:active {\n  border-color: var(--neutral4);\n}\n"]}]);
// Exports
exports.locals = {
	"root": "_051b"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Typography/Typography.module.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/atoms/Typography/Typography.module.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._6b2e {\n  font-size: var(--fs6);\n  margin-top: 0;\n  margin-bottom: var(--s8);\n  font-weight: 500;\n}\n", "",{"version":3,"sources":["Typography.module.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,aAAa;EACb,wBAAwB;EACxB,gBAAgB;AAClB","file":"Typography.module.css","sourcesContent":[".heading2 {\n  font-size: var(--fs6);\n  margin-top: 0;\n  margin-bottom: var(--s8);\n  font-weight: 500;\n}\n"]}]);
// Exports
exports.locals = {
	"heading2": "_6b2e"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Articles/Articles.module.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/organisms/Articles/Articles.module.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".bc3b {\n  margin-left: var(--s6);\n}\n\n._2393 {\n  display: flex;\n  align-items: center;\n}\n", "",{"version":3,"sources":["Articles.module.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB","file":"Articles.module.css","sourcesContent":[".button {\n  margin-left: var(--s6);\n}\n\n.heading {\n  display: flex;\n  align-items: center;\n}\n"]}]);
// Exports
exports.locals = {
	"button": "bc3b",
	"heading": "_2393"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Footer/Footer.module.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/organisms/Footer/Footer.module.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".afca {\n  padding-top: var(--s12);\n  padding-bottom: var(--s6);\n\n  grid-column: span 12;\n}\n", "",{"version":3,"sources":["Footer.module.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,yBAAyB;;EAEzB,oBAAoB;AACtB","file":"Footer.module.css","sourcesContent":[".root {\n  padding-top: var(--s12);\n  padding-bottom: var(--s6);\n\n  grid-column: span 12;\n}\n"]}]);
// Exports
exports.locals = {
	"root": "afca"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Header/Header.module.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/organisms/Header/Header.module.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._0686 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: var(--s12);\n  padding-bottom: var(--s12);\n\n  grid-column: col / span 12;\n}\n\n@media screen and (max-width: 768px) {\n  ._0686 {\n    padding-top: var(--s6);\n  }\n}\n", "",{"version":3,"sources":["Header.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;EACvB,0BAA0B;;EAE1B,0BAA0B;AAC5B;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF","file":"Header.module.css","sourcesContent":[".root {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: var(--s12);\n  padding-bottom: var(--s12);\n\n  grid-column: col / span 12;\n}\n\n@media screen and (max-width: 768px) {\n  .root {\n    padding-top: var(--s6);\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"root": "_0686"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Hero/Hero.module.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/organisms/Hero/Hero.module.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".d0c0 {\n  display: flex;\n  margin-bottom: var(--s12);\n\n  grid-column: col / span 12;\n}\n\n._24fe {\n  width: 78px;\n  height: 78px;\n  margin-right: 24px;\n}\n\n._2659 {\n  font-size: var(--fs6);\n  line-height: 34px;\n  font-weight: normal;\n  margin: 0;\n}\n", "",{"version":3,"sources":["Hero.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,yBAAyB;;EAEzB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;AACX","file":"Hero.module.css","sourcesContent":[".root {\n  display: flex;\n  margin-bottom: var(--s12);\n\n  grid-column: col / span 12;\n}\n\n.avatar {\n  width: 78px;\n  height: 78px;\n  margin-right: 24px;\n}\n\n.description {\n  font-size: var(--fs6);\n  line-height: 34px;\n  font-weight: normal;\n  margin: 0;\n}\n"]}]);
// Exports
exports.locals = {
	"root": "d0c0",
	"avatar": "_24fe",
	"description": "_2659"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Tools/Tools.module.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/components/organisms/Tools/Tools.module.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".c1a3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 24px;\n}\n\n._6b25 {\n  width: 24px;\n  height: 24px;\n  margin-right: var(--fs3);\n  transition: margin .2s ease-in-out;\n}\n\n._513d {\n  display: flex;\n  align-items: center;\n  font-size: var(--fs3);\n  color: var(--neutral8);\n}\n\n._513d:hover {\n  text-decoration: underline;\n  color: var(--neutral10);\n}\n\n._513d:hover ._6b25 {\n  opacity: .8;\n}\n\n._513d:not(:last-child) {\n  margin-bottom: var(--s3);\n}\n", "",{"version":3,"sources":["Tools.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,wBAAwB;AAC1B","file":"Tools.module.css","sourcesContent":[".root {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 24px;\n}\n\n.icon {\n  width: 24px;\n  height: 24px;\n  margin-right: var(--fs3);\n  transition: margin .2s ease-in-out;\n}\n\n.item {\n  display: flex;\n  align-items: center;\n  font-size: var(--fs3);\n  color: var(--neutral8);\n}\n\n.item:hover {\n  text-decoration: underline;\n  color: var(--neutral10);\n}\n\n.item:hover .icon {\n  opacity: .8;\n}\n\n.item:not(:last-child) {\n  margin-bottom: var(--s3);\n}\n"]}]);
// Exports
exports.locals = {
	"root": "c1a3",
	"icon": "_6b25",
	"item": "_513d"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/layouts/home/Home.module.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/layouts/home/Home.module.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._90d2 {\n  max-width: 1200px;\n  margin: 0 auto;\n\n  display: grid;\n  grid-template-columns: repeat(12, [col] 1fr);\n  grid-gap: 24px;\n}\n\n@media screen and (max-width: 1200px) {\n  ._90d2 {\n    padding: 0 15px;\n  }\n}\n", "",{"version":3,"sources":["Home.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,cAAc;;EAEd,aAAa;EACb,4CAA4C;EAC5C,cAAc;AAChB;;AAEA;EACE;IACE,eAAe;EACjB;AACF","file":"Home.module.css","sourcesContent":[".root {\n  max-width: 1200px;\n  margin: 0 auto;\n\n  display: grid;\n  grid-template-columns: repeat(12, [col] 1fr);\n  grid-gap: 24px;\n}\n\n@media screen and (max-width: 1200px) {\n  .root {\n    padding: 0 15px;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"root": "_90d2"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Home.module.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/pages/Home.module.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".bcdc {\n  grid-column: span 6;\n}\n\n@media screen and (max-width: 768px) {\n  .bcdc {\n    grid-column: span 12;\n  }\n}\n", "",{"version":3,"sources":["Home.module.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,oBAAoB;EACtB;AACF","file":"Home.module.css","sourcesContent":[".section {\n  grid-column: span 6;\n}\n\n@media screen and (max-width: 768px) {\n  .section {\n    grid-column: span 12;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"section": "bcdc"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Feugenedzhumak%2Fwww%2Felforastero%2Fsrc%2Fpages%2Findex.tsx!./":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Feugenedzhumak%2Fwww%2Felforastero%2Fsrc%2Fpages%2Findex.tsx ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router.default.prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options).catch(function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react.default.cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2.default, args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2.default.events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1.default.cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1.default.createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  }).catch(function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod.default || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          }).catch(function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      }).catch(handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports.default = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances.delete(this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/img/tools/apollographql.svg":
/*!************************************************!*\
  !*** ./src/assets/img/tools/apollographql.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0xMiAtNS44MDExNmUtMDZDNS4zNzIgLTUuODAxMTZlLTA2IDAgNS4zNzI5OSAwIDEyQzAgMTguNjI4IDUuMzcyIDI0IDEyIDI0QzE4LjYyNyAyNCAyNCAxOC42MjggMjQgMTJDMjQuMDAwNSAxMC44NjkgMjMuODQxMiA5Ljc0MzUxIDIzLjUyNyA4LjY1Njk5QzIzLjQ2ODEgOC41MTM5MiAyMy4zNTYyIDguMzk5MTMgMjMuMjE0NyA4LjMzNjZDMjMuMDczMiA4LjI3NDA3IDIyLjkxMjkgOC4yNjg2MiAyMi43Njc1IDguMzIxNDFDMjIuNjIyMSA4LjM3NDE5IDIyLjUwMjYgOC40ODExMiAyMi40MzQxIDguNjE5ODZDMjIuMzY1NyA4Ljc1ODYxIDIyLjM1MzQgOC45MTg0NCAyMi40IDkuMDY1OTlIMjIuMzk4QzIyLjY2MyAxMC4wMDkgMjIuOCAxMC45OTQgMjIuOCAxMkMyMi44MDM5IDEzLjQxODkgMjIuNTI2NCAxNC44MjQ0IDIxLjk4MzQgMTYuMTM1M0MyMS40NDA1IDE3LjQ0NjIgMjAuNjQzIDE4LjYzNjQgMTkuNjM3IDE5LjYzN0MxOC42MzY0IDIwLjY0MyAxNy40NDYyIDIxLjQ0MDYgMTYuMTM1MyAyMS45ODM1QzE0LjgyNDQgMjIuNTI2NCAxMy40MTg5IDIyLjgwMzkgMTIgMjIuOEMxMC41ODExIDIyLjgwMzkgOS4xNzU1OCAyMi41MjY0IDcuODY0NjkgMjEuOTgzNEM2LjU1MzggMjEuNDQwNSA1LjM2MzYxIDIwLjY0MyA0LjM2MyAxOS42MzdDMy4zNTY5NCAxOC42MzY0IDIuNTU5MzUgMTcuNDQ2MyAyLjAxNjQyIDE2LjEzNTRDMS40NzM0OCAxNC44MjQ1IDEuMTk1OTkgMTMuNDE4OSAxLjIgMTJDMS4xOTYxIDEwLjU4MTEgMS40NzM2NCA5LjE3NTU3IDIuMDE2NTcgNy44NjQ2OUMyLjU1OTUgNi41NTM4IDMuMzU3MDMgNS4zNjM2MSA0LjM2MyA0LjM2Mjk5QzUuMzYzNTQgMy4zNTY5MyA2LjU1MzcyIDIuNTU5MzUgNy44NjQ2MyAyLjAxNjQxQzkuMTc1NTMgMS40NzM0OCAxMC41ODExIDEuMTk1OTggMTIgMS4xOTk5OUMxNC41NzYgMS4xOTk5OSAxNy4wMTMgMi4wOTU5OSAxOC45NTggMy43Mzk5OUMxOC44MzUxIDQuMDUyIDE4LjgyMjggNC4zOTY3MyAxOC45MjMzIDQuNzE2NjdDMTkuMDIzOCA1LjAzNjYyIDE5LjIzMSA1LjMxMjQ0IDE5LjUxMDIgNS40OTgxM0MxOS43ODk1IDUuNjgzODIgMjAuMTIzOSA1Ljc2ODE2IDIwLjQ1NzggNS43MzcwN0MyMC43OTE4IDUuNzA1OTkgMjEuMTA0OSA1LjU2MTM2IDIxLjM0NTEgNS4zMjczMUMyMS41ODUzIDUuMDkzMjcgMjEuNzM3OSA0Ljc4Mzk1IDIxLjc3NzYgNC40NTA5NUMyMS44MTczIDQuMTE3OTYgMjEuNzQxNyAzLjc4MTQyIDIxLjU2MzMgMy40OTc0NkMyMS4zODQ5IDMuMjEzNSAyMS4xMTQ1IDIuOTk5MyAyMC43OTczIDIuODkwNTdDMjAuNDggMi43ODE4NCAyMC4xMzUxIDIuNzg1MTcgMTkuODIgMi44OTk5OUMxNy42NDYxIDEuMDI1NzYgMTQuODcwMyAtMC4wMDM2MTQ3OCAxMiAtNS44MDExNmUtMDZaTTEwLjU2IDUuODc5OTlMNi4zNiAxNi43ODJIOC45OUw5LjY3NyAxNC45MzRIMTMuNjQ2TDEyLjkyNyAxMi44OTJIMTAuMzE0TDEyLjAxNCA4LjIwMDk5TDE1LjAzOCAxNi43ODFIMTcuNjY5TDEzLjQ3IDUuODc5OTlIMTAuNTZaIgogICAgICAgICAgICAgIGZpbGw9IiMzMTFDODciLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDAiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/img/tools/docker.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/tools/docker.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0xMy45ODMgMTEuMDc4SDE2LjEwMkMxNi4xNTEyIDExLjA3OCAxNi4xOTgzIDExLjA1ODUgMTYuMjMzMiAxMS4wMjM5QzE2LjI2OCAxMC45ODkyIDE2LjI4NzcgMTAuOTQyMiAxNi4yODggMTAuODkzVjkuMDA2MDFDMTYuMjg4IDguOTU2NjggMTYuMjY4NCA4LjkwOTM3IDE2LjIzMzUgOC44NzQ0OUMxNi4xOTg2IDguODM5NiAxNi4xNTEzIDguODIwMDEgMTYuMTAyIDguODIwMDFIMTMuOTgzQzEzLjkzMzkgOC44MjAwMSAxMy44ODY5IDguODM5NSAxMy44NTIyIDguODc0MTlDMTMuODE3NSA4LjkwODg5IDEzLjc5OCA4Ljk1NTk0IDEzLjc5OCA5LjAwNTAxVjEwLjg5M0MxMy43OTggMTAuOTk1IDEzLjg4MSAxMS4wNzggMTMuOTgzIDExLjA3OFpNMTEuMDI5IDUuNjQ4MDFIMTMuMTQ3QzEzLjE5NjMgNS42NDgwMSAxMy4yNDM2IDUuNjI4NDEgMTMuMjc4NSA1LjU5MzUzQzEzLjMxMzQgNS41NTg2NSAxMy4zMzMgNS41MTEzNCAxMy4zMzMgNS40NjIwMVYzLjU3NDAxQzEzLjMzMjcgMy41MjQ4NSAxMy4zMTMgMy40Nzc4IDEzLjI3ODIgMy40NDMxM0MxMy4yNDMzIDMuNDA4NDcgMTMuMTk2MiAzLjM4OTAxIDEzLjE0NyAzLjM4OTAxSDExLjAyOUMxMC45Nzk5IDMuMzg5MDEgMTAuOTMyOSAzLjQwODUgMTAuODk4MiAzLjQ0MzE5QzEwLjg2MzUgMy40Nzc4OSAxMC44NDQgMy41MjQ5NCAxMC44NDQgMy41NzQwMVY1LjQ2MjAxQzEwLjg0NCA1LjU2NDAxIDEwLjkyNiA1LjY0NzAxIDExLjAyOSA1LjY0NzAxVjUuNjQ4MDFaTTExLjAyOSA4LjM2MzAxSDEzLjE0N0MxMy4xOTYzIDguMzYyNzQgMTMuMjQzNCA4LjM0MzA2IDEzLjI3ODIgOC4zMDgyNEMxMy4zMTMxIDguMjczNDEgMTMuMzMyNyA4LjIyNjI2IDEzLjMzMyA4LjE3NzAxVjYuMjkwMDFDMTMuMzMyNyA2LjI0MDg1IDEzLjMxMyA2LjE5MzggMTMuMjc4MiA2LjE1OTEzQzEzLjI0MzMgNi4xMjQ0NyAxMy4xOTYyIDYuMTA1MDEgMTMuMTQ3IDYuMTA1MDFIMTEuMDI5QzEwLjk3OTkgNi4xMDUwMSAxMC45MzI5IDYuMTI0NSAxMC44OTgyIDYuMTU5MTlDMTAuODYzNSA2LjE5Mzg5IDEwLjg0NCA2LjI0MDk0IDEwLjg0NCA2LjI5MDAxVjguMTc3MDFDMTAuODQ0IDguMjc5MDEgMTAuOTI2IDguMzYyMDEgMTEuMDI5IDguMzYzMDFaTTguMDk5IDguMzYzMDFIMTAuMjE5QzEwLjI2OCA4LjM2MjQ4IDEwLjMxNDggOC4zNDI2NSAxMC4zNDkyIDguMzA3ODNDMTAuMzgzNyA4LjI3MyAxMC40MDMgOC4yMjU5OSAxMC40MDMgOC4xNzcwMVY2LjI5MDAxQzEwLjQwMyA2LjI0MDk0IDEwLjM4MzUgNi4xOTM4OSAxMC4zNDg4IDYuMTU5MTlDMTAuMzE0MSA2LjEyNDUgMTAuMjY3MSA2LjEwNTAxIDEwLjIxOCA2LjEwNTAxSDguMUM4LjA1MDk0IDYuMTA1MDEgOC4wMDM4OCA2LjEyNDUgNy45NjkxOSA2LjE1OTE5QzcuOTM0NDkgNi4xOTM4OSA3LjkxNSA2LjI0MDk0IDcuOTE1IDYuMjkwMDFWOC4xNzcwMUM3LjkxNSA4LjI3OTAxIDcuOTk4IDguMzYyMDEgOC4xIDguMzYzMDFIOC4wOTlaTTUuMTM2IDguMzYzMDFINy4yNTVDNy4zMDQxNiA4LjM2Mjc0IDcuMzUxMjEgOC4zNDMwMyA3LjM4NTg4IDguMzA4MThDNy40MjA1NCA4LjI3MzMyIDcuNDQgOC4yMjYxNyA3LjQ0IDguMTc3MDFWNi4yOTAwMUM3LjQ0IDYuMjQwOTQgNy40MjA1MSA2LjE5Mzg5IDcuMzg1ODIgNi4xNTkxOUM3LjM1MTEyIDYuMTI0NSA3LjMwNDA3IDYuMTA1MDEgNy4yNTUgNi4xMDUwMUg1LjEzNkM1LjA4Njg0IDYuMTA1MDEgNS4wMzk2OSA2LjEyNDQ3IDUuMDA0ODMgNi4xNTkxM0M0Ljk2OTk4IDYuMTkzOCA0Ljk1MDI3IDYuMjQwODUgNC45NSA2LjI5MDAxVjguMTc3MDFDNC45NSA4LjI3OTAxIDUuMDM0IDguMzYyMDEgNS4xMzYgOC4zNjMwMVpNMTEuMDI5IDExLjA3OEgxMy4xNDdDMTMuMTk2MiAxMS4wNzggMTMuMjQzMyAxMS4wNTg1IDEzLjI3ODIgMTEuMDIzOUMxMy4zMTMgMTAuOTg5MiAxMy4zMzI3IDEwLjk0MjIgMTMuMzMzIDEwLjg5M1Y5LjAwNjAxQzEzLjMzMyA4Ljk1NjY4IDEzLjMxMzQgOC45MDkzNyAxMy4yNzg1IDguODc0NDlDMTMuMjQzNiA4LjgzOTYgMTMuMTk2MyA4LjgyMDAxIDEzLjE0NyA4LjgyMDAxSDExLjAyOUMxMC45Nzk5IDguODIwMDEgMTAuOTMyOSA4LjgzOTUgMTAuODk4MiA4Ljg3NDE5QzEwLjg2MzUgOC45MDg4OSAxMC44NDQgOC45NTU5NCAxMC44NDQgOS4wMDUwMVYxMC44OTNDMTAuODQ0IDEwLjk5NSAxMC45MjYgMTEuMDc4IDExLjAyOSAxMS4wNzhaTTguMDk5IDExLjA3OEgxMC4yMTlDMTAuMjY3OSAxMS4wNzc3IDEwLjMxNDcgMTEuMDU4MSAxMC4zNDkyIDExLjAyMzVDMTAuMzgzNiAxMC45ODg4IDEwLjQwMyAxMC45NDE5IDEwLjQwMyAxMC44OTNWOS4wMDYwMUMxMC40MDMxIDguOTgxNzEgMTAuMzk4NSA4Ljk1NzYzIDEwLjM4OTMgOC45MzUxM0MxMC4zODAxIDguOTEyNjQgMTAuMzY2NiA4Ljg5MjE3IDEwLjM0OTUgOC44NzQ5QzEwLjMzMjQgOC44NTc2MyAxMC4zMTIxIDguODQzODkgMTAuMjg5NyA4LjgzNDQ3QzEwLjI2NzMgOC44MjUwNSAxMC4yNDMzIDguODIwMTQgMTAuMjE5IDguODIwMDFIOC4wOTlDOC4wNTAxMSA4LjgyMDI3IDguMDAzMzEgOC44Mzk4OCA3Ljk2ODgzIDguODc0NTVDNy45MzQzNSA4LjkwOTIxIDcuOTE1IDguOTU2MTIgNy45MTUgOS4wMDUwMVYxMC44OTNDNy45MTUgMTAuOTk1IDcuOTk4IDExLjA3OCA4LjEgMTEuMDc4SDguMDk5Wk01LjEzNiAxMS4wNzhINy4yNTVDNy4zMDQwNyAxMS4wNzggNy4zNTExMiAxMS4wNTg1IDcuMzg1ODIgMTEuMDIzOEM3LjQyMDUxIDEwLjk4OTEgNy40NCAxMC45NDIxIDcuNDQgMTAuODkzVjkuMDA2MDFDNy40NDAxMyA4Ljk4MTcxIDcuNDM1NDggOC45NTc2MyA3LjQyNjMgOC45MzUxM0M3LjQxNzEzIDguOTEyNjQgNy40MDM2MSA4Ljg5MjE3IDcuMzg2NTIgOC44NzQ5QzcuMzY5NDQgOC44NTc2MyA3LjM0OTEyIDguODQzODkgNy4zMjY3MiA4LjgzNDQ3QzcuMzA0MzMgOC44MjUwNSA3LjI4MDMgOC44MjAxNCA3LjI1NiA4LjgyMDAxSDUuMTM2QzUuMDg2NjcgOC44MjAwMSA1LjAzOTM2IDguODM5NiA1LjAwNDQ4IDguODc0NDlDNC45Njk2IDguOTA5MzcgNC45NSA4Ljk1NjY4IDQuOTUgOS4wMDYwMVYxMC44OTNDNC45NSAxMC45OTUgNS4wMzQgMTEuMDc4IDUuMTM2IDExLjA3OFpNMi4yMTYgMTEuMDc4SDQuMzM2QzQuMzg0ODkgMTEuMDc3NyA0LjQzMTY5IDExLjA1ODEgNC40NjYxNyAxMS4wMjM1QzQuNTAwNjUgMTAuOTg4OCA0LjUyIDEwLjk0MTkgNC41MiAxMC44OTNWOS4wMDYwMUM0LjUyMDEzIDguOTgxNzEgNC41MTU0OCA4Ljk1NzYzIDQuNTA2MyA4LjkzNTEzQzQuNDk3MTMgOC45MTI2NCA0LjQ4MzYxIDguODkyMTcgNC40NjY1MiA4Ljg3NDlDNC40NDk0NCA4Ljg1NzYzIDQuNDI5MTIgOC44NDM4OSA0LjQwNjcyIDguODM0NDdDNC4zODQzMyA4LjgyNTA1IDQuMzYwMyA4LjgyMDE0IDQuMzM2IDguODIwMDFIMi4yMTZDMi4xNjcxMSA4LjgyMDI3IDIuMTIwMzEgOC44Mzk4OCAyLjA4NTgzIDguODc0NTVDMi4wNTEzNSA4LjkwOTIxIDIuMDMyIDguOTU2MTIgMi4wMzIgOS4wMDUwMVYxMC44OTNDMi4wMzIgMTAuOTk1IDIuMTE0IDExLjA3OCAyLjIxNyAxMS4wNzhIMi4yMTZaTTIzLjc2MyA5Ljg5MDAxQzIzLjY5OCA5LjgzOTAxIDIzLjA5MSA5LjM4MDAxIDIxLjgwOSA5LjM4MDAxQzIxLjQ3MSA5LjM4MTAxIDIxLjEzMyA5LjQxMDAxIDIwLjc5OSA5LjQ2NzAxQzIwLjU1MSA3Ljc2NzAxIDE5LjE0NiA2LjkzNzAxIDE5LjA4MyA2LjkwMTAxTDE4LjczOSA2LjcwMjAxTDE4LjUxMyA3LjAyOTAxQzE4LjIyOSA3LjQ2NzAxIDE4LjAyMyA3Ljk1MTAxIDE3LjkwMSA4LjQ1OTAxQzE3LjY3MSA5LjQyOTAxIDE3LjgxMSAxMC4zNDEgMTguMzA0IDExLjEyQzE3LjcwOSAxMS40NTIgMTYuNzU0IDExLjUzMyAxNi41NiAxMS41NEgwLjc1MTAwMkMwLjU1MjUxNiAxMS41NDAzIDAuMzYyMjA2IDExLjYxOTEgMC4yMjE2NjggMTEuNzU5M0MwLjA4MTEzMDIgMTEuODk5NCAwLjAwMTc5NDQ4IDEyLjA4OTUgMC4wMDEwMDE3NyAxMi4yODhDLTAuMDE3NTE2NSAxMy42NzI4IDAuMjE2OTk2IDE1LjA0OTQgMC42OTMwMDIgMTYuMzVDMS4yMzggMTcuNzc4IDIuMDQ4IDE4LjgzIDMuMTAzIDE5LjQ3NEM0LjI4MyAyMC4xOTcgNi4yMDMgMjAuNjExIDguMzc4IDIwLjYxMUM5LjM2MSAyMC42MTQgMTAuMzQxIDIwLjUyNSAxMS4zMDggMjAuMzQ1QzEyLjY1MDggMjAuMDk4MyAxMy45NDMgMTkuNjI4OSAxNS4xMzEgMTguOTU2QzE2LjExMSAxOC4zODkgMTYuOTkxIDE3LjY2OCAxNy43NDEgMTYuODJDMTguOTkzIDE1LjQwMiAxOS43MzkgMTMuODIzIDIwLjI5NCAxMi40MkgyMC41MTVDMjEuODg3IDEyLjQyIDIyLjczIDExLjg3MSAyMy4xOTUgMTEuNDExQzIzLjUwNCAxMS4xMTggMjMuNzQ1IDEwLjc2MSAyMy45MDIgMTAuMzY1TDI0IDEwLjA3N0wyMy43NjMgOS44OTAwMVoiCiAgICAgICAgICAgICAgZmlsbD0iIzI0OTZFRCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMCI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/img/tools/graphql.svg":
/*!******************************************!*\
  !*** ./src/assets/img/tools/graphql.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0xNC4wNTEgMi43NTFMMTguOTg2IDUuNjAxQzE5LjgwMiA0Ljc0MiAyMS4xNTkgNC43MDggMjIuMDE4IDUuNTI0QzIyLjE2NiA1LjY2NCAyMi4yOTIgNS44MjUgMjIuMzk1IDYuMDAxQzIyLjk4NCA3LjAyOSAyMi42MjcgOC4zNCAyMS41OTkgOC45MjlDMjEuNDI1IDkuMDI5IDIxLjIzOCA5LjEwNCAyMS4wNDEgOS4xNTJWMTQuODUxQzIyLjE4NyAxNS4xMjQgMjIuODk1IDE2LjI3NCAyMi42MjEgMTcuNDJDMjIuNTczIDE3LjYyNCAyMi40OTQgMTcuODIgMjIuMzg5IDE4LjAwMUMyMS43OTcgMTkuMDI0IDIwLjQ4OCAxOS4zNzUgMTkuNDYyIDE4Ljc4M0MxOS4yNjYgMTguNjcgMTkuMDg3IDE4LjUyNCAxOC45MzYgMTguMzU0TDE0LjAzMSAyMS4xODZDMTQuNDAzIDIyLjMxIDEzLjc5MyAyMy41MjEgMTIuNjcgMjMuODkyQzEyLjQ1MyAyMy45NjMgMTIuMjI4IDI0IDEyIDI0QzEwLjgxOSAyNC4wMDEgOS44NjEgMjMuMDQ1IDkuODYgMjEuODY0QzkuODYgMjEuNjU5IDkuODg5IDIxLjQ1NCA5Ljk0OCAyMS4yNTVMNS4wMTIgMTguNDA4QzQuMTk2IDE5LjI2MiAyLjg0MSAxOS4yOTUgMS45ODYgMTguNDc4QzEuMTMyIDE3LjY2MiAxLjEgMTYuMzA3IDEuOTE2IDE1LjQ1MkMyLjE5OSAxNS4xNTUgMi41NjIgMTQuOTQ2IDIuOTYgMTQuODQ5TDIuOTYxIDkuMTVDMS44MTEgOC44NzQgMS4xMDMgNy43MTcgMS4zOCA2LjU2NkMxLjQyNyA2LjM2OCAxLjUwMyA2LjE3NyAxLjYwNCA2QzIuMTk2IDQuOTc2IDMuNTA2IDQuNjI2IDQuNTMxIDUuMjE4QzQuNzA4IDUuMzE5IDQuODcgNS40NDYgNS4wMTEgNS41OTVMOS45NDkgMi43NDVDOS42MTMgMS42MTIgMTAuMjYgMC40MjMwMDEgMTEuMzkgMC4wODgwMDA4QzExLjU4NyAwLjAyOTAwMDggMTEuNzk0IDcuODQ2MjNlLTA3IDEyIDcuODQ2MjNlLTA3QzEzLjE4MSAtMC4wMDA5OTkyMTUgMTQuMTM5IDAuOTU0MDAxIDE0LjE0IDIuMTM0QzE0LjE0MSAyLjM0MyAxNC4xMSAyLjU1MiAxNC4wNTEgMi43NTFaTTEzLjUzNiAzLjYyOEMxMy41MTcgMy42NDkgMTMuNDk5IDMuNjY3IDEzLjQ3OCAzLjY4NkwxOS45MzkgMTQuODc2QzE5Ljk2NSAxNC44NjcgMTkuOTk1IDE0Ljg2IDIwLjAyMSAxNC44NTNWOS4xNDZDMTguODc2IDguODYzIDE4LjE3OSA3LjcwNCAxOC40NjMgNi41NThDMTguNDY5IDYuNTM0IDE4LjQ3NSA2LjUwOSAxOC40ODIgNi40ODZMMTMuNTM2IDMuNjI4Wk0xMC41MjEgMy42ODdMMTAuNDYxIDMuNjI3TDUuNTE1IDYuNDc5QzUuODQyIDcuNjE0IDUuMTg4IDguNzk3IDQuMDU0IDkuMTI0QzQuMDI4IDkuMTMyIDQuMDAzIDkuMTM4IDMuOTc4IDkuMTQ1VjE0Ljg1M0w0LjA2MiAxNC44NzZMMTAuNTIzIDMuNjg2TDEwLjUyMSAzLjY4N1pNMTIuNTk3IDQuMTk0QzEyLjIwNyA0LjMwNiAxMS43OTQgNC4zMDYgMTEuNDA1IDQuMTk0TDQuOTQ1IDE1LjM4M0M1LjIzOSAxNS42NjYgNS40NDcgMTYuMDI4IDUuNTQ1IDE2LjQyNEgxOC40NTZDMTguNTUzIDE2LjAyNiAxOC43NjMgMTUuNjYzIDE5LjA1OSAxNS4zOEwxMi41OTcgNC4xOTRaTTEzLjU4MyAyMC40MjFMMTguNDk2IDE3LjU4M0MxOC40ODEgMTcuNTM2IDE4LjQ2OSAxNy40ODkgMTguNDU4IDE3LjQ0MUg1LjU0Mkw1LjUyMSAxNy41MjRMMTAuNDYgMjAuMzc2QzEwLjg0OCAxOS45NzIgMTEuMzk0IDE5LjcyMyAxMiAxOS43MjNDMTIuNjI3IDE5LjcyMyAxMy4xOSAxOS45OTIgMTMuNTgzIDIwLjQyMVoiCiAgICAgICAgICAgICAgZmlsbD0iI0UxMDA5OCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMCI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/img/tools/laravel.svg":
/*!******************************************!*\
  !*** ./src/assets/img/tools/laravel.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0yMy42NDQgNS40MzAwMUMyMy42NTMgNS40NjIwMSAyMy42NTggNS40OTUwMSAyMy42NTggNS41MjkwMVYxMC42NzlDMjMuNjU4IDEwLjgxNCAyMy41ODUgMTAuOTM5IDIzLjQ2OSAxMS4wMDVMMTkuMTQ2IDEzLjQ5NVYxOC40MjlDMTkuMTQ2IDE4LjU2NCAxOS4wNzQgMTguNjg3IDE4Ljk1OCAxOC43NTVMOS45MzEgMjMuOTVDOS45MSAyMy45NjIgOS44ODggMjMuOTcgOS44NjUgMjMuOTc3QzkuODU3IDIzLjk3OSA5Ljg0OSAyMy45ODUgOS44NDEgMjMuOTg3QzkuNzc4IDI0LjAwNSA5LjcxMSAyNC4wMDUgOS42NDkgMjMuOTg3QzkuNjM4IDIzLjk4NSA5LjYyOSAyMy45NzkgOS42MiAyMy45NzVDOS41OTkgMjMuOTY3IDkuNTc3IDIzLjk2MSA5LjU1NyAyMy45NUwwLjUzNDAwMSAxOC43NTVDMC40MTcwMDEgMTguNjg3IDAuMzQ1MDAxIDE4LjU2NCAwLjM0NTAwMSAxOC40MjlWMi45NzQwMUMwLjM0NTAwMSAyLjk0MTAxIDAuMzUwMDAxIDIuOTA4MDEgMC4zNTkwMDEgMi44NzYwMUMwLjM2MjAwMSAyLjg2NDAxIDAuMzY5MDAxIDIuODU1MDEgMC4zNzMwMDEgMi44NDQwMUMwLjM3OTAwMSAyLjgyNDAxIDAuMzg3MDAxIDIuODA0MDEgMC4zOTYwMDEgMi43ODYwMUMwLjQwMDAwMSAyLjc3MzAxIDAuNDExMDAxIDIuNzY0MDEgMC40MTkwMDEgMi43NTMwMUMwLjQzMTAwMSAyLjczNzAxIDAuNDQwMDAxIDIuNzIyMDEgMC40NTIwMDEgMi43MDgwMUMwLjQ2NDAwMSAyLjY5ODAxIDAuNDc3MDAxIDIuNjkwMDEgMC40ODkwMDEgMi42ODEwMUMwLjUwMzAwMSAyLjY2OTAxIDAuNTE2MDAxIDIuNjU3MDEgMC41MzAwMDEgMi42NDcwMUgwLjUzMTAwMUw1LjA0NCAwLjA1MDAwNTlDNS4xNTkgLTAuMDE2OTk0MSA1LjMwMyAtMC4wMTY5OTQxIDUuNDE5IDAuMDUwMDA1OUw5LjkzMSAyLjY0NzAxSDkuOTMzQzkuOTQ4IDIuNjU3MDEgOS45NiAyLjY2ODAxIDkuOTc0IDIuNjgwMDFDOS45ODYgMi42ODkwMSA5Ljk5OSAyLjY5ODAxIDEwLjAxMSAyLjcwNzAxQzEwLjAyNCAyLjcyMTAxIDEwLjAzMiAyLjczNjAxIDEwLjA0NCAyLjc1MjAxQzEwLjA1MiAyLjc2MzAxIDEwLjA2NCAyLjc3MzAxIDEwLjA2OSAyLjc4NTAxQzEwLjA4IDIuODA0MDEgMTAuMDg2IDIuODIzMDEgMTAuMDkzIDIuODQzMDFDMTAuMDk2IDIuODU0MDEgMTAuMTA0IDIuODY0MDEgMTAuMTA2IDIuODc1MDFDMTAuMTE2IDIuOTA2MDEgMTAuMTIgMi45MzkwMSAxMC4xMiAyLjk3MzAxVjEyLjYyNUwxMy44OCAxMC40NjFWNS41MjcwMUMxMy44OCA1LjQ5NDAxIDEzLjg4NSA1LjQ2MTAxIDEzLjg5NCA1LjQyOTAxQzEzLjg5NyA1LjQxODAxIDEzLjkwMyA1LjQwODAxIDEzLjkwNyA1LjM5NzAxQzEzLjkxNCA1LjM3NzAxIDEzLjkyMSA1LjM1ODAxIDEzLjkzMSA1LjMzODAxQzEzLjkzOCA1LjMyNjAxIDEzLjk0OSA1LjMxNzAxIDEzLjk1NiA1LjMwNTAxQzEzLjk2OCA1LjI5MDAxIDEzLjk3NyA1LjI3NTAxIDEzLjk4OSA1LjI2MjAxQzE0LjAwMSA1LjI1MDAxIDE0LjAxNCA1LjI0MjAxIDE0LjAyNiA1LjIzNDAxQzE0LjA0IDUuMjIzMDEgMTQuMDUyIDUuMjExMDEgMTQuMDY3IDUuMjAyMDFIMTQuMDY4TDE4LjU4MSAyLjYwNDAxQzE4LjY5NyAyLjUzNzAxIDE4Ljg0IDIuNTM3MDEgMTguOTU2IDIuNjA0MDFMMjMuNDY5IDUuMjAyMDFDMjMuNDg1IDUuMjEyMDEgMjMuNDk2IDUuMjIzMDEgMjMuNTExIDUuMjMzMDFDMjMuNTIzIDUuMjQzMDEgMjMuNTM2IDUuMjUxMDEgMjMuNTQ3IDUuMjYxMDFDMjMuNTYgNS4yNzUwMSAyMy41NjkgNS4yOTAwMSAyMy41ODEgNS4zMDUwMUMyMy41ODkgNS4zMTcwMSAyMy42IDUuMzI2MDEgMjMuNjA1IDUuMzM4MDFDMjMuNjE2IDUuMzU4MDEgMjMuNjIzIDUuMzc3MDEgMjMuNjI5IDUuMzk3MDFDMjMuNjM1IDUuNDA4MDEgMjMuNjQxIDUuNDE5MDEgMjMuNjQ0IDUuNDMwMDFaTTIyLjkwNCAxMC40NjJWNi4xNzkwMUwyMS4zMjYgNy4wODcwMUwxOS4xNDQgOC4zNDMwMVYxMi42MjZMMjIuOTA0IDEwLjQ2MlpNMTguMzkzIDE4LjIxMlYxMy45MjVMMTYuMjQ3IDE1LjE1TDEwLjEyIDE4LjY0OFYyMi45NzRMMTguMzkzIDE4LjIxMlpNMS4wOTUgMy42MjQwMVYxOC4yMTJMOS4zNjggMjIuOTc0VjE4LjY0OEw1LjA0NiAxNi4yMDNMNS4wNDQgMTYuMkg1LjA0MkM1LjAyOCAxNi4xOSA1LjAxNyAxNi4xNzkgNS4wMDIgMTYuMTY5QzQuOTkxIDE2LjE1OSA0Ljk3OCAxNi4xNTEgNC45NjcgMTYuMTQyTDQuOTY2IDE2LjE0QzQuOTUzIDE2LjEyOCA0Ljk0NSAxNi4xMTUgNC45MzUgMTYuMTAxQzQuOTI1IDE2LjA4OSA0LjkxNCAxNi4wNzggNC45MDcgMTYuMDY0SDQuOTA1QzQuODk3IDE2LjA1IDQuODkyIDE2LjAzMyA0Ljg4NSAxNi4wMTdDNC44NzkgMTYuMDAxIDQuODcxIDE1Ljk5IDQuODY3IDE1Ljk3NEM0Ljg2MyAxNS45NTYgNC44NjEgMTUuOTM3IDQuODU5IDE1LjkxN0M0Ljg1NyAxNS45MDMgNC44NTMgMTUuODkgNC44NTMgMTUuODc2VjUuNzg5MDFMMi42NzMgNC41MzIwMUwxLjA5NSAzLjYyNDAxWk01LjIzMSAwLjgxMDAwNkwxLjQ3MSAyLjk3NDAxTDUuMjMxIDUuMTM4MDFMOC45ODkgMi45NzQwMUw1LjIzMSAwLjgxMDAwNlpNNy4xODcgMTQuMzE1TDkuMzY5IDEzLjA1OVYzLjYyNDAxTDcuNzg5IDQuNTMzMDFMNS42MDcgNS43ODkwMVYxNS4yMjRMNy4xODcgMTQuMzE1Wk0xOC43NjkgMy4zNjQwMUwxNS4wMDkgNS41MjgwMUwxOC43NjkgNy42OTEwMUwyMi41MjggNS41MjcwMUwxOC43NjkgMy4zNjQwMVpNMTguMzkzIDguMzQzMDFMMTYuMjExIDcuMDg3MDFMMTQuNjMyIDYuMTc5MDFWMTAuNDYyTDE2LjgxNCAxMS43MThMMTguMzkzIDEyLjYyNlY4LjM0MzAxWk05Ljc0MyAxNy45OTdMMTUuMjU3IDE0Ljg0OUwxOC4wMTMgMTMuMjc3TDE0LjI1NiAxMS4xMTRMOS45MzIgMTMuNjAzTDUuOTkxIDE1Ljg3M0w5Ljc0MyAxNy45OTdaIgogICAgICAgICAgICAgIGZpbGw9IiNGRjJEMjAiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDAiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/img/tools/php.svg":
/*!**************************************!*\
  !*** ./src/assets/img/tools/php.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik03LjAxIDEwLjIwN0g2LjA2Nkw1LjU1MSAxMi44NTVINi4zODlDNi45NDUgMTIuODU1IDcuMzU5IDEyLjc1IDcuNjMxIDEyLjU0MUM3LjkwMyAxMi4zMzEgOC4wODYgMTEuOTgyIDguMTgxIDExLjQ5MkM4LjI3MyAxMS4wMjIgOC4yMzEgMTAuNjkgOC4wNTcgMTAuNDk3QzcuODgyIDEwLjMwNCA3LjUzNCAxMC4yMDcgNy4wMSAxMC4yMDdaTTEyIDUuNjg3OTlDNS4zNzMgNS42ODc5OSAwIDguNTEzOTkgMCAxMkMwIDE1LjQ4NiA1LjM3MyAxOC4zMTMgMTIgMTguMzEzQzE4LjYyNyAxOC4zMTMgMjQgMTUuNDg2IDI0IDEyQzI0IDguNTEzOTkgMTguNjI3IDUuNjg3OTkgMTIgNS42ODc5OVpNOC43NCAxMy4xMzlDOC40NzkgMTMuMzg5IDguMTY1IDEzLjU3NyA3LjgyMyAxMy42OUM3LjQ4NyAxMy43OTggNy4wNTggMTMuODU0IDYuNTM4IDEzLjg1NEg1LjM1N0w1LjAzIDE1LjUzNUgzLjY1Mkw0Ljg4MiA5LjIwODk5SDcuNTMyQzguMzI5IDkuMjA4OTkgOC45MSA5LjQxNzk5IDkuMjc2IDkuODM3QzkuNjQyIDEwLjI1NSA5Ljc1MiAxMC44MzkgOS42MDYgMTEuNTg5QzkuNTUwMDggMTEuODg1OCA5LjQ0NzExIDEyLjE3MTcgOS4zMDEgMTIuNDM2QzkuMTU4IDEyLjY5MSA4Ljk3MSAxMi45MjYgOC43NCAxMy4xMzlaTTEyLjc2NCAxMy44NTRMMTMuMzA3IDExLjA1NUMxMy4zNyAxMC43MzcgMTMuMzQ2IDEwLjUxOSAxMy4yMzkgMTAuNDA0QzEzLjEzMiAxMC4yODggMTIuOTAzIDEwLjIzIDEyLjU1MiAxMC4yM0gxMS40NkwxMC43NTYgMTMuODU1SDkuMzg4TDEwLjYxOCA3LjUyNzk5SDExLjk4NUwxMS42NTggOS4yMDk5OUgxMi44NzZDMTMuNjQzIDkuMjA5OTkgMTQuMTcxIDkuMzQ0IDE0LjQ2MiA5LjYxMUMxNC43NTMgOS44NzggMTQuODQgMTAuMzExIDE0LjcyNSAxMC45MUwxNC4xNTMgMTMuODU0SDEyLjc2NFpNMjAuMzYxIDExLjU4OUMyMC4zMDYgMTEuODg2IDIwLjIwMyAxMi4xNzIxIDIwLjA1NiAxMi40MzZDMTkuOTEzIDEyLjY5MSAxOS43MjYgMTIuOTI2IDE5LjQ5NSAxMy4xMzlDMTkuMjMzOSAxMy4zODgyIDE4LjkyMDcgMTMuNTc2NCAxOC41NzggMTMuNjlDMTguMjQyIDEzLjc5OCAxNy44MTMgMTMuODU0IDE3LjI5MiAxMy44NTRIMTYuMTEyTDE1Ljc4NSAxNS41MzZIMTQuNDA3TDE1LjYzNyA5LjIwOTk5SDE4LjI4NkMxOS4wODMgOS4yMDk5OSAxOS42NjQgOS40MTkgMjAuMDMgOS44MzhDMjAuMzk2IDEwLjI1NSAyMC41MDcgMTAuODM5IDIwLjM2MSAxMS41ODlaTTE3Ljc2NiAxMC4yMDdIMTYuODIzTDE2LjMwNyAxMi44NTVIMTcuMTQ1QzE3LjcwMiAxMi44NTUgMTguMTE2IDEyLjc1IDE4LjM4NyAxMi41NDFDMTguNjU5IDEyLjMzMSAxOC44NDIgMTEuOTgyIDE4LjkzOCAxMS40OTJDMTkuMDMgMTEuMDIyIDE4Ljk4NyAxMC42OSAxOC44MTMgMTAuNDk3QzE4LjYzOSAxMC4zMDQgMTguMjg5IDEwLjIwNyAxNy43NjYgMTAuMjA3WiIKICAgICAgICAgIGZpbGw9IiM3NzdCQjQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/img/tools/react.svg":
/*!****************************************!*\
  !*** ./src/assets/img/tools/react.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiA4Ljg2MUMxMS43MTkxIDguODYxIDExLjQ0MSA4LjkxNjMzIDExLjE4MTQgOS4wMjM4MkMxMC45MjE5IDkuMTMxMzIgMTAuNjg2MSA5LjI4ODg3IDEwLjQ4NzUgOS40ODc1QzEwLjI4ODkgOS42ODYxMiAxMC4xMzEzIDkuOTIxOTMgMTAuMDIzOCAxMC4xODE0QzkuOTE2MzMgMTAuNDQxIDkuODYxIDEwLjcxOTEgOS44NjEgMTFDOS44NjEgMTEuMjgwOSA5LjkxNjMzIDExLjU1OSAxMC4wMjM4IDExLjgxODZDMTAuMTMxMyAxMi4wNzgxIDEwLjI4ODkgMTIuMzEzOSAxMC40ODc1IDEyLjUxMjVDMTAuNjg2MSAxMi43MTExIDEwLjkyMTkgMTIuODY4NyAxMS4xODE0IDEyLjk3NjJDMTEuNDQxIDEzLjA4MzcgMTEuNzE5MSAxMy4xMzkgMTIgMTMuMTM5QzEyLjI4MDkgMTMuMTM5IDEyLjU1OSAxMy4wODM3IDEyLjgxODYgMTIuOTc2MkMxMy4wNzgxIDEyLjg2ODcgMTMuMzEzOSAxMi43MTExIDEzLjUxMjUgMTIuNTEyNUMxMy43MTExIDEyLjMxMzkgMTMuODY4NyAxMi4wNzgxIDEzLjk3NjIgMTEuODE4NkMxNC4wODM3IDExLjU1OSAxNC4xMzkgMTEuMjgwOSAxNC4xMzkgMTFDMTQuMTM5IDEwLjcxOTEgMTQuMDgzNyAxMC40NDEgMTMuOTc2MiAxMC4xODE0QzEzLjg2ODcgOS45MjE5MyAxMy43MTExIDkuNjg2MTIgMTMuNTEyNSA5LjQ4NzVDMTMuMzEzOSA5LjI4ODg3IDEzLjA3ODEgOS4xMzEzMiAxMi44MTg2IDkuMDIzODJDMTIuNTU5IDguOTE2MzMgMTIuMjgwOSA4Ljg2MSAxMiA4Ljg2MVpNNi4wMDggMTUuMjU1TDUuNTM2IDE1LjEzNUMyLjAxOCAxNC4yNDYgMCAxMi43MzcgMCAxMC45OTZDMCA5LjI1NSAyLjAxOCA3Ljc0NiA1LjUzNiA2Ljg1N0w2LjAwOCA2LjczOEw2LjE0MSA3LjIwNkM2LjQ5NzM4IDguNDMzNzEgNi45NTMyMiA5LjYzMDM0IDcuNTA0IDEwLjc4NEw3LjYwNSAxMC45OTdMNy41MDQgMTEuMjFDNi45NTIzMSAxMi4zNjMzIDYuNDk2NDMgMTMuNTYgNi4xNDEgMTQuNzg4TDYuMDA4IDE1LjI1NVpNNS4zMTcgNy45NUMyLjY0MyA4LjcwMSAxLjAwMiA5Ljg1IDEuMDAyIDEwLjk5NkMxLjAwMiAxMi4xNDEgMi42NDMgMTMuMjkgNS4zMTcgMTQuMDQyQzUuNjQ0MDIgMTMuMDAxOSA2LjAzODg3IDExLjk4NDQgNi40OTkgMTAuOTk2QzYuMDM4MzQgMTAuMDA3OCA1LjY0MzQ4IDguOTkwMjYgNS4zMTcgNy45NVpNMTcuOTkyIDE1LjI1NUwxNy44NTkgMTQuNzg2QzE3LjUwMyAxMy41NTg0IDE3LjA0NjggMTIuMzYyIDE2LjQ5NSAxMS4yMDlMMTYuMzk0IDEwLjk5NkwxNi40OTUgMTAuNzgzQzE3LjA0NjYgOS42Mjk1NyAxNy41MDI4IDguNDMyOSAxNy44NTkgNy4yMDVMMTcuOTkyIDYuNzM3TDE4LjQ2NSA2Ljg1NkMyMS45ODIgNy43NDUgMjQgOS4yNTQgMjQgMTAuOTk2QzI0IDEyLjczOCAyMS45ODIgMTQuMjQ2IDE4LjQ2NSAxNS4xMzVMMTcuOTkyIDE1LjI1NVpNMTcuNTAxIDEwLjk5NkMxNy45ODEgMTIuMDM1IDE4LjM3OCAxMy4wNTYgMTguNjgzIDE0LjA0MkMyMS4zNTggMTMuMjkgMjIuOTk4IDEyLjE0MSAyMi45OTggMTAuOTk2QzIyLjk5OCA5Ljg1IDIxLjM1NyA4LjcwMiAxOC42ODMgNy45NUMxOC4zNTY0IDguOTkwMjIgMTcuOTYxNiAxMC4wMDc4IDE3LjUwMSAxMC45OTZaTTUuMzEgNy45NDVMNS4xNzcgNy40NzhDNC4xODggMy45OTIgNC40ODggMS40OTQgNiAwLjYyMjAwMUM3LjQ4MyAtMC4yMzM5OTkgOS44NjQgMC43NzcgMTIuMzU5IDMuMzM4TDEyLjY5OSAzLjY4N0wxMi4zNTkgNC4wMzZDMTEuNDcyNSA0Ljk1NzYxIDEwLjY2MjQgNS45NDk4OSA5LjkzNyA3LjAwM0w5LjgwMiA3LjE5Nkw5LjU2NyA3LjIxNkM4LjI5MDkxIDcuMzE2NiA3LjAyNTA5IDcuNTIwNiA1Ljc4MiA3LjgyNkw1LjMxIDcuOTQ1Wk03LjIwNiAxLjMxNUM2LjkzOCAxLjMxNSA2LjcwMSAxLjM3MyA2LjUwMSAxLjQ4OEM1LjUwNyAyLjA2MSA1LjMzMSA0LjA1MyA2LjAxNiA2Ljc0MUM3LjA4MTY0IDYuNTAzOTMgOC4xNjE1OSA2LjMzNjU4IDkuMjQ5IDYuMjRDOS44NzY0MiA1LjM0Nzg4IDEwLjU2MTkgNC40OTgwNSAxMS4zMDEgMy42OTZDOS43NDEgMi4xNzcgOC4yNjQgMS4zMTUgNy4yMDYgMS4zMTVaTTE2Ljc5NSAyMS42NzdDMTYuNzk0IDIxLjY3NyAxNi43OTQgMjEuNjc3IDE2Ljc5NSAyMS42NzdDMTUuMzcgMjEuNjc3IDEzLjU0IDIwLjYwNCAxMS42NDEgMTguNjU0TDExLjMwMSAxOC4zMDVMMTEuNjQxIDE3Ljk1NkMxMi41MjczIDE3LjAzNDEgMTMuMzM3IDE2LjA0MTUgMTQuMDYyIDE0Ljk4OEwxNC4xOTcgMTQuNzk1TDE0LjQzMSAxNC43NzVDMTUuNzA3OCAxNC42NzUgMTYuOTc0MyAxNC40NzEzIDE4LjIxOCAxNC4xNjZMMTguNjkgMTQuMDQ3TDE4LjgyNCAxNC41MTVDMTkuODExIDE3Ljk5OSAxOS41MTIgMjAuNDk4IDE4IDIxLjM2OUMxNy42MzI3IDIxLjU3NjcgMTcuMjE2OSAyMS42ODMgMTYuNzk1IDIxLjY3N1pNMTIuNjk5IDE4LjI5NkMxNC4yNTkgMTkuODE1IDE1LjczNiAyMC42NzcgMTYuNzk0IDIwLjY3N0gxNi43OTVDMTcuMDYyIDIwLjY3NyAxNy4zIDIwLjYxOSAxNy40OTkgMjAuNTA0QzE4LjQ5MyAxOS45MzEgMTguNjcgMTcuOTM4IDE3Ljk4NCAxNS4yNUMxNi45MTgxIDE1LjQ4NzQgMTUuODM3OCAxNS42NTQ4IDE0Ljc1IDE1Ljc1MUMxNC4xMjMzIDE2LjY0MzcgMTMuNDM4MiAxNy40OTM5IDEyLjY5OSAxOC4yOTZaTTE4LjY5IDcuOTQ1TDE4LjIxOCA3LjgyNkMxNi45NzQ0IDcuNTE5NzIgMTUuNzA3OSA3LjMxNTcxIDE0LjQzMSA3LjIxNkwxNC4xOTcgNy4xOTZMMTQuMDYyIDcuMDAzQzEzLjMzNzQgNS45NDk1NiAxMi41Mjc3IDQuOTU3MjQgMTEuNjQxIDQuMDM2TDExLjMwMSAzLjY4N0wxMS42NDEgMy4zMzhDMTQuMTM1IDAuNzc4MDAxIDE2LjUxNSAtMC4yMzI5OTkgMTggMC42MjIwMDFDMTkuNTEyIDEuNDk0IDE5LjgxMiAzLjk5MiAxOC44MjQgNy40NzdMMTguNjkgNy45NDVaTTE0Ljc1IDYuMjRDMTUuODkyIDYuMzQ0IDE2Ljk3NyA2LjUxMyAxNy45ODQgNi43NDFDMTguNjcgNC4wNTMgMTguNDkzIDIuMDYxIDE3LjQ5OSAxLjQ4OEMxNi41MTEgMC45MTcwMDEgMTQuNjU0IDEuNzkyIDEyLjY5OSAzLjY5NkMxMy40Mzc3IDQuNDk4MDggMTQuMTIyOSA1LjM0NzkyIDE0Ljc1IDYuMjRaTTcuMjA2IDIxLjY3N0M2Ljc4MzggMjEuNjgzMSA2LjM2NzU2IDIxLjU3NjggNiAyMS4zNjlDNC40ODggMjAuNDk4IDQuMTg4IDE4IDUuMTc3IDE0LjUxNUw1LjMwOSAxNC4wNDdMNS43ODEgMTQuMTY2QzYuOTM2IDE0LjQ1NyA4LjIxIDE0LjY2MiA5LjU2NiAxNC43NzVMOS44MDEgMTQuNzk1TDkuOTM1IDE0Ljk4OEMxMC42NjA2IDE2LjA0MTMgMTEuNDcwNiAxNy4wMzM5IDEyLjM1NyAxNy45NTZMMTIuNjk3IDE4LjMwNUwxMi4zNTcgMTguNjU0QzEwLjQ1OSAyMC42MDQgOC42MjkgMjEuNjc3IDcuMjA2IDIxLjY3N1pNNi4wMTYgMTUuMjVDNS4zMyAxNy45MzggNS41MDcgMTkuOTMxIDYuNTAxIDIwLjUwNEM3LjQ4OCAyMS4wNjcgOS4zNDQgMjAuMTk5IDExLjMwMSAxOC4yOTZDMTAuNTYyMiAxNy40OTMzIDkuODc2NzQgMTYuNjQzMiA5LjI0OSAxNS43NTFDOC4xNjE1NCAxNS42NTQ4IDcuMDgxNTYgMTUuNDg3NSA2LjAxNiAxNS4yNVpNMTIgMTUuODc4QzExLjE3NyAxNS44NzggMTAuMzMxIDE1Ljg0MiA5LjQ4NCAxNS43NzJMOS4yNDkgMTUuNzUyTDkuMTE0IDE1LjU1OUM4LjYzNDkxIDE0Ljg3MDYgOC4xODQ1MiAxNC4xNjI3IDcuNzY0IDEzLjQzN0M3LjM0NDcyIDEyLjcxMDggNi45NTU3MiAxMS45Njc1IDYuNTk4IDExLjIwOUw2LjQ5OCAxMC45OTZMNi41OTggMTAuNzgzQzYuOTU1NjcgMTAuMDI0NSA3LjM0NDY3IDkuMjgxMjEgNy43NjQgOC41NTVDOC4xNzggNy44MzkgOC42MzMgNy4xMjUgOS4xMTQgNi40MzNMOS4yNDkgNi4yNEw5LjQ4NCA2LjIyQzExLjE1ODcgNi4wNzggMTIuODQyMyA2LjA3OCAxNC41MTcgNi4yMkwxNC43NTEgNi4yNEwxNC44ODUgNi40MzNDMTUuODQ0MiA3LjgxMDA2IDE2LjY4NjEgOS4yNjUxNyAxNy40MDIgMTAuNzgzTDE3LjUwMyAxMC45OTZMMTcuNDAyIDExLjIwOUMxNi42ODc4IDEyLjcyNzcgMTUuODQ1OCAxNC4xODMgMTQuODg1IDE1LjU1OUwxNC43NTEgMTUuNzUyTDE0LjUxNyAxNS43NzJDMTMuNjcgMTUuODQyIDEyLjgyMyAxNS44NzggMTIgMTUuODc4Wk05LjgwMyAxNC43OTRDMTEuMjgzIDE0LjkwNSAxMi43MTcgMTQuOTA1IDE0LjE5OCAxNC43OTRDMTUuMDI0OCAxMy41ODUzIDE1Ljc1ODkgMTIuMzE1NiAxNi4zOTQgMTAuOTk2QzE1Ljc2MDEgOS42NzU1OCAxNS4wMjU2IDguNDA1ODQgMTQuMTk3IDcuMTk4QzEyLjczNDQgNy4wODcgMTEuMjY1NiA3LjA4NyA5LjgwMyA3LjE5OEM4Ljk3NDA4IDguNDA1NjEgOC4yMzk1NyA5LjY3NTM4IDcuNjA2IDEwLjk5NkM4LjI0MTc2IDEyLjMxNTUgOC45NzYxOCAxMy41ODUxIDkuODAzIDE0Ljc5NFoiCiAgICAgICAgICBmaWxsPSIjNjFEQUZCIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/img/tools/redux.svg":
/*!****************************************!*\
  !*** ./src/assets/img/tools/redux.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNi42MzMgMTYuNTA0QzE3LjUwMiAxNi40MjkgMTguMTc2IDE1LjY2NCAxOC4xMzIgMTQuNzVDMTguMDg2IDEzLjgzNiAxNy4zMzcgMTMuMTAyIDE2LjQyNCAxMy4xMDJIMTYuMzYzQzE1LjQyIDEzLjEzMyAxNC42ODUgMTMuOTI2IDE0LjcxNSAxNC44NzFDMTQuNzQ1IDE1LjM1IDE0Ljk0MSAxNS43NCAxNS4yMDkgMTYuMDI0QzE0LjE2MSAxOC4wNjIgMTIuNTg4IDE5LjU2IDEwLjIwNSAyMC44MTlDOC42MDIgMjEuNjU3IDYuOTA5IDIxLjk3MyA1LjI2MSAyMS43NDhDMy44ODMgMjEuNTU0IDIuODA1IDIwLjkzOCAyLjE0NSAxOS45NUMxLjE1NyAxOC40NTEgMS4wNjcgMTYuODM0IDEuODkgMTUuMjE2QzIuNDkxIDE0LjA0NyAzLjM4OSAxMy4xOTMgMy45ODkgMTIuNzczQzMuODM5IDEyLjM4NCAzLjY1OSAxMS43MjUgMy41NjkgMTEuMjMxQy0wLjg2Njk5OSAxNC40MDggLTAuNDE1OTk5IDE4Ljc1MiAwLjkzMjAwMSAyMC44MDVDMS45MzYgMjIuMzAzIDMuOTg5IDIzLjI2MSA2LjIzNiAyMy4yNjFDNi44MzUgMjMuMjYxIDcuNDY1IDIzLjIxNyA4LjA3OSAyMy4wNjdDMTEuOTc1IDIyLjMxOCAxNC45MjYgMTkuOTgxIDE2LjYxOSAxNi41MzVMMTYuNjMzIDE2LjUwNFpNMjEuOTgxIDEyLjc1OEMxOS42NiAxMC4wMzEgMTYuMjQzIDguNTMzIDEyLjM0NyA4LjUzM0gxMS44MzdDMTEuNTg0IDcuOTc5IDExIDcuNjM0IDEwLjM0IDcuNjM0SDEwLjI5NUM5LjM1MiA3LjYzNCA4LjYxNyA4LjQ0NCA4LjY0OCA5LjM4N0M4LjY3OCAxMC4yODUgOS40NDIgMTEuMDM1IDEwLjM1NiAxMS4wMzVIMTAuNDNDMTEuMTA1IDExLjAwNSAxMS42ODkgMTAuNTg1IDExLjkyOCA5Ljk4NkgxMi40ODNDMTQuNzkyIDkuOTg2IDE2Ljk3OCAxMC42NiAxOC45NzEgMTEuOTc4QzIwLjQ5OCAxMi45ODIgMjEuNTkzIDE0LjMgMjIuMjA3IDE1Ljg3NEMyMi43NDUgMTcuMTYyIDIyLjcxNiAxOC40MjEgMjIuMTYyIDE5LjQ3MUMyMS4zMDggMjEuMTE4IDE5Ljg2OSAyMS45ODggMTcuOTY3IDIxLjk4OEMxNi43NjggMjEuOTg4IDE1LjYgMjEuNjEzIDE1IDIxLjM0NEMxNC42NDEgMjEuNjQyIDE0LjA0MSAyMi4xMzcgMTMuNjA2IDIyLjQzN0MxNC45MjQgMjMuMDM1IDE2LjI1OCAyMy4zOCAxNy41NDYgMjMuMzhDMjAuNDY4IDIzLjM4IDIyLjYzOSAyMS43MzMgMjMuNDY0IDIwLjE0NEMyNC4zNjIgMTguMzQ2IDI0LjI4OCAxNS4zMiAyMS45OTUgMTIuNzI4TDIxLjk4MSAxMi43NThaTTYuNDkgMTcuMDQyQzYuNTE5IDE3Ljk0MSA3LjI4MyAxOC42OSA4LjE5OCAxOC42OUg4LjI1OEM5LjIxNyAxOC42NiA5Ljk1MSAxNy44NjcgOS45MDYgMTYuOTIyQzkuOTA2IDE2LjAyMyA5LjEyNyAxNS4yNzUgOC4yMTMgMTUuMjc1SDguMTUyQzguMDkyIDE1LjI3NSA4LjAwMyAxNS4yNzUgNy45MjcgMTUuMzA0QzYuNjg0IDEzLjIwNiA2LjE1OSAxMC45NTggNi4zNTUgOC41MzNDNi40NzQgNi43MDUgNy4wNzQgNS4xMTYgOC4xNTIgMy43OThDOS4wNTEgMi42NzQgMTAuNzQ0IDIuMTE5IDExLjg5OCAyLjA5QzE1LjEzNCAyLjAyOSAxNi40ODMgNi4wNjEgMTYuNTg3IDcuNjY0TDE4LjA4NSA4LjExM0MxNy43NCAzLjE5OSAxNC42ODUgMC42MjEwMDIgMTEuNzYzIDAuNjIxMDAyQzkuMDIxIDAuNjIxMDAyIDYuNDkgMi42MTQgNS40NyA1LjUzNkM0LjA3NyA5LjQzMiA0Ljk5MSAxMy4xNzcgNi42OTkgMTYuMTc0QzYuNTUgMTYuMzY5IDYuNDYgMTYuNzEzIDYuNDkgMTcuMDQyWiIKICAgICAgICAgIGZpbGw9IiM3NjRBQkMiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/img/tools/typescript.svg":
/*!*********************************************!*\
  !*** ./src/assets/img/tools/typescript.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDEyVjI0SDI0VjBIMFYxMlpNMTkuMzQxIDExLjA0NEMxOS45NTEgMTEuMTk2IDIwLjQxNSAxMS40NjcgMjAuODQyIDExLjkwOUMyMS4wNjMgMTIuMTQ1IDIxLjM5MSAxMi41NzUgMjEuNDE3IDEyLjY3OUMyMS40MjUgMTIuNzA5IDIwLjM4MSAxMy40MDkgMTkuNzQ5IDEzLjgwMkMxOS43MjYgMTMuODE3IDE5LjYzNCAxMy43MTggMTkuNTMyIDEzLjU2NkMxOS4yMjIgMTMuMTE2IDE4Ljg5OSAxMi45MjIgMTguNDA0IDEyLjg4OEMxNy42NzYgMTIuODM4IDE3LjIwOCAxMy4yMTkgMTcuMjEyIDEzLjg1NUMxNy4yMDU0IDE0LjAxMTQgMTcuMjQwNiAxNC4xNjY3IDE3LjMxNCAxNC4zMDVDMTcuNDc0IDE0LjYzNiAxNy43NzIgMTQuODM1IDE4LjcwNCAxNS4yMzhDMjAuNDIzIDE1Ljk3OCAyMS4xNTggMTYuNDY1IDIxLjYxNSAxNy4xNThDMjIuMTI1IDE3LjkzMSAyMi4yNCAxOS4xNjYgMjEuODkzIDIwLjA4NEMyMS41MTMgMjEuMDgyIDIwLjU2OCAyMS43NiAxOS4yMzggMjEuOTg0QzE4LjgyNyAyMi4wNTcgMTcuODUyIDIyLjA0NiAxNy40MSAyMS45NjZDMTYuNDQ2IDIxLjc5NCAxNS41MzIgMjEuMzE4IDE0Ljk2OCAyMC42OTNDMTQuNzQ3IDIwLjQ1IDE0LjMxNiAxOS44MTMgMTQuMzQzIDE5Ljc2OEMxNC4zNTQgMTkuNzUyIDE0LjQ1MyAxOS42OTEgMTQuNTYzIDE5LjYyN0MxNC42NzEgMTkuNTY2IDE1LjA3NCAxOS4zMzMgMTUuNDU1IDE5LjExMkwxNi4xNDUgMTguNzEyTDE2LjI5IDE4LjkyNkMxNi40OTIgMTkuMjM0IDE2LjkzMyAxOS42NTcgMTcuMiAxOS43OThDMTcuOTY2IDIwLjIwMiAxOS4wMTcgMjAuMTQ1IDE5LjUzNSAxOS42OEMxOS42MzkyIDE5LjU5MjMgMTkuNzIxNiAxOS40ODE2IDE5Ljc3NTkgMTkuMzU2N0MxOS44MzAyIDE5LjIzMTggMTkuODU0OSAxOS4wOTYgMTkuODQ4IDE4Ljk2QzE5Ljg0OCAxOC42ODIgMTkuODEzIDE4LjU2IDE5LjY2OCAxOC4zNUMxOS40ODIgMTguMDg0IDE5LjEwMSAxNy44NiAxOC4wMTkgMTcuMzlDMTYuNzgxIDE2Ljg1NyAxNi4yNDggMTYuNTI2IDE1Ljc2IDE2QzE1LjQ1NTQgMTUuNjUyOSAxNS4yMzA1IDE1LjI0MzMgMTUuMTAxIDE0LjhDMTUuMDEgMTQuNDYxIDE0Ljk4NyAxMy42MTEgMTUuMDU5IDEzLjI2OUMxNS4zMTQgMTIuMDcyIDE2LjIxNyAxMS4yMzkgMTcuNTIgMTAuOTkxQzE3Ljk0MyAxMC45MTEgMTguOTI2IDEwLjk0MSAxOS4zNDEgMTEuMDQ0Wk0xMy43MDcgMTIuMDQ2TDEzLjcxNSAxMy4wMjlIMTAuNTlWMjEuOTA1SDguMzhWMTMuMDI5SDUuMjU4VjEyLjA2NUM1LjI1OCAxMS41MzEgNS4yNjkgMTEuMDg1IDUuMjg0IDExLjA3NUM1LjI5NiAxMS4wNTkgNy4xOTcgMTEuMDUxIDkuNTAxIDExLjA1NUwxMy42OTYgMTEuMDY3TDEzLjcwNyAxMi4wNDZaIgogICAgICAgICAgZmlsbD0iIzAwN0FDQyIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/img/tools/webpack.svg":
/*!******************************************!*\
  !*** ./src/assets/img/tools/webpack.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMS4wMTU3IDE4LjEyMDJMMTIuMzUxIDIzVjE5LjE5OTNMMTcuNzQ5NiAxNi4yNDI2TDIxLjAxNTYgMTguMTIwMkgyMS4wMTU3Wk0yMS42MDg0IDE3LjU4NThWNy4zODA1TDE4LjQzNzYgOS4yMDI1VjE1Ljc2MThMMjEuNjA4NCAxNy41ODU4Wk0yLjkyNTcgMTguMTIwMkwxMS41OTA0IDIzVjE5LjE5OTNMNi4xOTE4IDE2LjI0MjZMMi45MjU4IDE4LjEyMDJIMi45MjU3Wk0yLjMzMyAxNy41ODU4VjcuMzgwNUw1LjUwMzcgOS4yMDI1VjE1Ljc2MThMMi4zMzMgMTcuNTg1OFpNMi43MDQgNi43MjAyTDExLjU5MDQgMS43MTQ2VjUuMzg5NEw1Ljg5NzQgOC41MDdMNS44NTQgOC41MzE4TDIuNzA0IDYuNzIwMlpNMjEuMjM3NSA2LjcyMDJMMTIuMzUxIDEuNzE0NlY1LjM4OTRMMTguMDQ0IDguNTA3MUwxOC4wODc0IDguNTMxOUwyMS4yMzc0IDYuNzIwM0wyMS4yMzc1IDYuNzIwMlpNMTEuNTkwNSAxOC4zMzQ4TDYuMjY0MyAxNS40MTkzVjkuNjQyTDExLjU5MDMgMTIuNzA0VjE4LjMzNDhIMTEuNTkwNVpNMTIuMzUxIDE4LjMzNDhMMTcuNjc3IDE1LjQxOTNWOS42NDJMMTIuMzUxIDEyLjcwNFYxOC4zMzQ4Wk02LjYyNSA4Ljk3MzRMMTEuOTcxNyA2LjA0NTRMMTcuMzE4NSA4Ljk3MzRMMTEuOTcxNyAxMi4wNDc4TDYuNjI1IDguOTczNFoiCiAgICAgICAgICBmaWxsPSIjOERENkY5Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/img/tools/webstorm.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/tools/webstorm.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBWMjRIMjRWMEgwWk0xNy44ODkgMi44ODlDMTkuMzMzIDIuODg5IDIwLjU1NiAzLjMzMyAyMS41NTYgNC4xNjdMMjAuNDQ1IDUuODM0QzE5LjU1NiA1LjIyMyAxOC43MjMgNC44MzQgMTcuODg5IDQuODM0QzE3LjA1NSA0LjgzNCAxNi42MTEgNS4yMjMgMTYuNjExIDUuNzIzVjUuNzc5QzE2LjYxMSA2LjQ0NiAxNy4wNTUgNi42NjggMTguNzIyIDcuMTEyQzIwLjcyMiA3LjY2OCAyMS44MzMgOC4zOSAyMS44MzMgMTAuMTEyVjEwLjE2OEMyMS44MzMgMTIuMTY4IDIwLjMzMyAxMy4yNzkgMTguMjIyIDEzLjI3OUMxNi43MjIgMTMuMjIzIDE1LjIyMiAxMi42NjggMTQuMDU1IDExLjYxMkwxNS4zMzMgMTAuMDU2QzE2LjIyMiAxMC43NzggMTcuMTY2IDExLjI3OCAxOC4yNzcgMTEuMjc4QzE5LjE2NiAxMS4yNzggMTkuNjY2IDEwLjk0NSAxOS42NjYgMTAuMzM0VjEwLjI3OEMxOS42NjYgOS43MjIgMTkuMzMzIDkuNDQ1IDE3LjY2NiA5QzE1LjY2NiA4LjUgMTQuNDQ0IDcuOTQ0IDE0LjQ0NCA1Ljk0NFY1Ljg4OEMxNC40NDQgNC4wNTUgMTUuODg4IDIuODg4IDE3Ljg4OCAyLjg4OEwxNy44ODkgMi44ODlaTTEuNzc4IDMuMTExSDQuMDU2TDUuNTU2IDguODg5TDcuMjc4IDMuMTExSDguOTQ1TDEwLjYxMiA4Ljg4OUwxMi4xMTIgMy4xMTFIMTQuNDQ1TDExLjYxMiAxMy4wNTVIOS43MjNMOC4xMTIgNy4yNzdMNi40NDUgMTMuMDU1SDQuNjEyTDEuNzc5IDMuMTExSDEuNzc4Wk0yLjI3OCAxOS41SDExLjI3OFYyMUgyLjI3OFYxOS41WiIKICAgICAgICAgIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/components/atoms/Avatar/Avatar.module.css":
/*!*******************************************************!*\
  !*** ./src/components/atoms/Avatar/Avatar.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Avatar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Avatar/Avatar.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Avatar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Avatar/Avatar.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Avatar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Avatar/Avatar.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/atoms/Avatar/Avatar.tsx":
/*!************************************************!*\
  !*** ./src/components/atoms/Avatar/Avatar.tsx ***!
  \************************************************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/src/index.js");
/* harmony import */ var _Avatar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar.module.css */ "./src/components/atoms/Avatar/Avatar.module.css");
/* harmony import */ var _Avatar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Avatar_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/Avatar/Avatar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      className = _ref.className;
  return __jsx("img", {
    src: src,
    alt: "Eugene Dzhumak",
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_1__["default"])([_Avatar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.root, className]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  });
};

/***/ }),

/***/ "./src/components/atoms/Avatar/index.ts":
/*!**********************************************!*\
  !*** ./src/components/atoms/Avatar/index.ts ***!
  \**********************************************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./src/components/atoms/Avatar/Avatar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"]; });



/***/ }),

/***/ "./src/components/atoms/Button/Button.module.css":
/*!*******************************************************!*\
  !*** ./src/components/atoms/Button/Button.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Button.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Button/Button.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Button.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Button/Button.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Button.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Button/Button.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/atoms/Button/Button.tsx":
/*!************************************************!*\
  !*** ./src/components/atoms/Button/Button.tsx ***!
  \************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/src/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.module.css */ "./src/components/atoms/Button/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/Button/Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Button = function Button(_ref) {
  var href = _ref.href,
      className = _ref.className,
      children = _ref.children;
  return href ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_1__["default"])([_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.root, className]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, children)) : __jsx("button", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_1__["default"])([_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.root, className]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/components/atoms/Button/index.ts":
/*!**********************************************!*\
  !*** ./src/components/atoms/Button/index.ts ***!
  \**********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/atoms/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });



/***/ }),

/***/ "./src/components/atoms/CatalogItem/CatalogItem.module.css":
/*!*****************************************************************!*\
  !*** ./src/components/atoms/CatalogItem/CatalogItem.module.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./CatalogItem.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/CatalogItem/CatalogItem.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./CatalogItem.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/CatalogItem/CatalogItem.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./CatalogItem.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/CatalogItem/CatalogItem.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/atoms/CatalogItem/CatalogItem.tsx":
/*!**********************************************************!*\
  !*** ./src/components/atoms/CatalogItem/CatalogItem.tsx ***!
  \**********************************************************/
/*! exports provided: CatalogItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogItem", function() { return CatalogItem; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CatalogItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CatalogItem.module.css */ "./src/components/atoms/CatalogItem/CatalogItem.module.css");
/* harmony import */ var _CatalogItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CatalogItem_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/CatalogItem/CatalogItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var CatalogItem = function CatalogItem(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      _ref$external = _ref.external,
      external = _ref$external === void 0 ? false : _ref$external,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "icon", "external"]);

  return external ? // @ts-ignore
  __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: _CatalogItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    target: "_blank"
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: _CatalogItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, icon), children) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), __jsx("a", {
    className: _CatalogItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _CatalogItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, icon), children));
};

/***/ }),

/***/ "./src/components/atoms/CatalogItem/index.ts":
/*!***************************************************!*\
  !*** ./src/components/atoms/CatalogItem/index.ts ***!
  \***************************************************/
/*! exports provided: CatalogItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CatalogItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogItem */ "./src/components/atoms/CatalogItem/CatalogItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CatalogItem", function() { return _CatalogItem__WEBPACK_IMPORTED_MODULE_0__["CatalogItem"]; });



/***/ }),

/***/ "./src/components/atoms/Highlighter/Highlighter.module.css":
/*!*****************************************************************!*\
  !*** ./src/components/atoms/Highlighter/Highlighter.module.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Highlighter.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Highlighter/Highlighter.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Highlighter.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Highlighter/Highlighter.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Highlighter.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Highlighter/Highlighter.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/atoms/Highlighter/Highlighter.tsx":
/*!**********************************************************!*\
  !*** ./src/components/atoms/Highlighter/Highlighter.tsx ***!
  \**********************************************************/
/*! exports provided: Highlighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Highlighter", function() { return Highlighter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Highlighter_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Highlighter.module.css */ "./src/components/atoms/Highlighter/Highlighter.module.css");
/* harmony import */ var _Highlighter_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Highlighter_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/Highlighter/Highlighter.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Highlighter = function Highlighter(_ref) {
  var children = _ref.children;
  return __jsx("span", {
    className: _Highlighter_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, children);
};

/***/ }),

/***/ "./src/components/atoms/Highlighter/index.ts":
/*!***************************************************!*\
  !*** ./src/components/atoms/Highlighter/index.ts ***!
  \***************************************************/
/*! exports provided: Highlighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Highlighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Highlighter */ "./src/components/atoms/Highlighter/Highlighter.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Highlighter", function() { return _Highlighter__WEBPACK_IMPORTED_MODULE_0__["Highlighter"]; });



/***/ }),

/***/ "./src/components/atoms/Logo/Logo.module.css":
/*!***************************************************!*\
  !*** ./src/components/atoms/Logo/Logo.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Logo.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Logo/Logo.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Logo.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Logo/Logo.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Logo.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Logo/Logo.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/atoms/Logo/Logo.tsx":
/*!********************************************!*\
  !*** ./src/components/atoms/Logo/Logo.tsx ***!
  \********************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.module.css */ "./src/components/atoms/Logo/Logo.module.css");
/* harmony import */ var _Logo_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Logo_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/Logo/Logo.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Logo = function Logo() {
  return __jsx("div", {
    className: _Logo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, "\uD83D\uDC25", __jsx("span", {
    className: _Logo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "ElForastero"));
};

/***/ }),

/***/ "./src/components/atoms/Logo/index.ts":
/*!********************************************!*\
  !*** ./src/components/atoms/Logo/index.ts ***!
  \********************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./src/components/atoms/Logo/Logo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo__WEBPACK_IMPORTED_MODULE_0__["Logo"]; });



/***/ }),

/***/ "./src/components/atoms/Navigation/Navigation.module.css":
/*!***************************************************************!*\
  !*** ./src/components/atoms/Navigation/Navigation.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Navigation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Navigation/Navigation.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Navigation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Navigation/Navigation.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Navigation.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Navigation/Navigation.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/atoms/Navigation/Navigation.tsx":
/*!********************************************************!*\
  !*** ./src/components/atoms/Navigation/Navigation.tsx ***!
  \********************************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.module.css */ "./src/components/atoms/Navigation/Navigation.module.css");
/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/Navigation/Navigation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var menu = __webpack_require__(/*! ./assets/menu.svg?include */ "./src/components/atoms/Navigation/assets/menu.svg?include");

var x = __webpack_require__(/*! ./assets/x.svg?include */ "./src/components/atoms/Navigation/assets/x.svg?include");

var Navigation = function Navigation(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      toggle = _useState[1];

  return __jsx("div", {
    className: _Navigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    "data-is-open": isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("span", {
    role: "button",
    className: _Navigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    onClick: function onClick() {
      return toggle(true);
    },
    "aria-label": "Menu",
    dangerouslySetInnerHTML: {
      __html: menu
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("nav", {
    className: _Navigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "button",
    className: _Navigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
    onClick: function onClick() {
      return toggle(false);
    },
    "aria-label": "Menu close",
    dangerouslySetInnerHTML: {
      __html: x
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), children));
};

/***/ }),

/***/ "./src/components/atoms/Navigation/assets/menu.svg?include":
/*!*****************************************************************!*\
  !*** ./src/components/atoms/Navigation/assets/menu.svg?include ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var raw = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n     stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-menu\">\n    <line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line>\n    <line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line>\n    <line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>\n</svg>\n"; module.exports = raw; exports.default = raw;

/***/ }),

/***/ "./src/components/atoms/Navigation/assets/x.svg?include":
/*!**************************************************************!*\
  !*** ./src/components/atoms/Navigation/assets/x.svg?include ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var raw = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg>"; module.exports = raw; exports.default = raw;

/***/ }),

/***/ "./src/components/atoms/Navigation/index.ts":
/*!**************************************************!*\
  !*** ./src/components/atoms/Navigation/index.ts ***!
  \**************************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation */ "./src/components/atoms/Navigation/Navigation.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _Navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]; });



/***/ }),

/***/ "./src/components/atoms/NavigationLink/NavigationLink.module.css":
/*!***********************************************************************!*\
  !*** ./src/components/atoms/NavigationLink/NavigationLink.module.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./NavigationLink.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/NavigationLink/NavigationLink.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./NavigationLink.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/NavigationLink/NavigationLink.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./NavigationLink.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/NavigationLink/NavigationLink.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/atoms/NavigationLink/NavigationLink.tsx":
/*!****************************************************************!*\
  !*** ./src/components/atoms/NavigationLink/NavigationLink.tsx ***!
  \****************************************************************/
/*! exports provided: NavigationLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLink", function() { return NavigationLink; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/src/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavigationLink_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavigationLink.module.css */ "./src/components/atoms/NavigationLink/NavigationLink.module.css");
/* harmony import */ var _NavigationLink_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavigationLink_module_css__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/NavigationLink/NavigationLink.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





/**
 * The link used in horizontal and vertical navigations, and also in the footer.
 */
var NavigationLink = function NavigationLink(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$external = _ref.external,
      external = _ref$external === void 0 ? false : _ref$external,
      href = _ref.href,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "external", "href"]);

  return external && href ? // @ts-ignore
  __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: _NavigationLink_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.root,
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), children) : href ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: href
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx("a", {
    className: _NavigationLink_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, children)) : __jsx("button", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "button",
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_3__["default"])([_NavigationLink_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.root, className])
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), children);
};

/***/ }),

/***/ "./src/components/atoms/NavigationLink/index.ts":
/*!******************************************************!*\
  !*** ./src/components/atoms/NavigationLink/index.ts ***!
  \******************************************************/
/*! exports provided: NavigationLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationLink */ "./src/components/atoms/NavigationLink/NavigationLink.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationLink", function() { return _NavigationLink__WEBPACK_IMPORTED_MODULE_0__["NavigationLink"]; });



/***/ }),

/***/ "./src/components/atoms/ThemeSwitcher/ThemeSwitcher.tsx":
/*!**************************************************************!*\
  !*** ./src/components/atoms/ThemeSwitcher/ThemeSwitcher.tsx ***!
  \**************************************************************/
/*! exports provided: ThemeSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcher", function() { return ThemeSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/atoms/NavigationLink */ "./src/components/atoms/NavigationLink/index.ts");
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/ThemeSwitcher/ThemeSwitcher.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var STORAGE_KEY = 'theme';
var ThemeSwitcher = function ThemeSwitcher() {
  var initialRenderingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var predefinedTheme = true ? window.localStorage.getItem('theme') : undefined;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(predefinedTheme !== null && predefinedTheme !== void 0 ? predefinedTheme : 'light'),
      theme = _useState[0],
      setTheme = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      if (!initialRenderingRef.current) {
        document.body.style.transition = 'all .2s ease-in-out';
      }

      window.localStorage.setItem(STORAGE_KEY, theme);
      document.body.dataset.theme = theme;
      setTimeout(function () {
        document.body.style.removeProperty('transition');
      }, 300);
    }

    initialRenderingRef.current = false;
  }, [theme, initialRenderingRef]);

  var toggleTheme = function toggleTheme() {
    var newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return __jsx(src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["NavigationLink"], {
    onClick: toggleTheme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, theme === 'dark' ? '💡' : '🌙');
};

/***/ }),

/***/ "./src/components/atoms/ThemeSwitcher/index.ts":
/*!*****************************************************!*\
  !*** ./src/components/atoms/ThemeSwitcher/index.ts ***!
  \*****************************************************/
/*! exports provided: ThemeSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeSwitcher */ "./src/components/atoms/ThemeSwitcher/ThemeSwitcher.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcher", function() { return _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_0__["ThemeSwitcher"]; });



/***/ }),

/***/ "./src/components/atoms/Typography/Heading2.tsx":
/*!******************************************************!*\
  !*** ./src/components/atoms/Typography/Heading2.tsx ***!
  \******************************************************/
/*! exports provided: Heading2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading2", function() { return Heading2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/src/index.js");
/* harmony import */ var _Typography_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Typography.module.css */ "./src/components/atoms/Typography/Typography.module.css");
/* harmony import */ var _Typography_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Typography_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/atoms/Typography/Heading2.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Heading2 = function Heading2(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return __jsx("h2", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_1__["default"])([_Typography_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.heading2, className]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, children);
};

/***/ }),

/***/ "./src/components/atoms/Typography/Typography.module.css":
/*!***************************************************************!*\
  !*** ./src/components/atoms/Typography/Typography.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Typography.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Typography/Typography.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Typography.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Typography/Typography.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Typography.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/atoms/Typography/Typography.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/atoms/Typography/index.ts":
/*!**************************************************!*\
  !*** ./src/components/atoms/Typography/index.ts ***!
  \**************************************************/
/*! exports provided: Heading2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading2 */ "./src/components/atoms/Typography/Heading2.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading2", function() { return _Heading2__WEBPACK_IMPORTED_MODULE_0__["Heading2"]; });



/***/ }),

/***/ "./src/components/organisms/Articles/Articles.module.css":
/*!***************************************************************!*\
  !*** ./src/components/organisms/Articles/Articles.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Articles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Articles/Articles.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Articles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Articles/Articles.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Articles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Articles/Articles.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/organisms/Articles/Articles.tsx":
/*!********************************************************!*\
  !*** ./src/components/organisms/Articles/Articles.tsx ***!
  \********************************************************/
/*! exports provided: Articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articles", function() { return Articles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/atoms/Typography */ "./src/components/atoms/Typography/index.ts");
/* harmony import */ var src_components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/atoms/Button */ "./src/components/atoms/Button/index.ts");
/* harmony import */ var src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/atoms/CatalogItem */ "./src/components/atoms/CatalogItem/index.ts");
/* harmony import */ var _Articles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Articles.module.css */ "./src/components/organisms/Articles/Articles.module.css");
/* harmony import */ var _Articles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Articles_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/organisms/Articles/Articles.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Articles = function Articles(_ref) {
  var className = _ref.className,
      count = _ref.count,
      posts = _ref.posts,
      showBlogLink = _ref.showBlogLink;
  return __jsx("section", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["Heading2"], {
    className: _Articles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, "Latest articles", ' ', showBlogLink && __jsx(src_components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: _Articles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Show All")), posts.slice(0, count !== null && count !== void 0 ? count : posts.length).map(function (_ref2) {
    var slug = _ref2.slug,
        title = _ref2.title,
        cover = _ref2.cover;
    return __jsx(src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_3__["CatalogItem"], {
      key: slug,
      icon: cover,
      href: "/blog/".concat(slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, title);
  }));
};

/***/ }),

/***/ "./src/components/organisms/Articles/index.ts":
/*!****************************************************!*\
  !*** ./src/components/organisms/Articles/index.ts ***!
  \****************************************************/
/*! exports provided: Articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles */ "./src/components/organisms/Articles/Articles.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Articles", function() { return _Articles__WEBPACK_IMPORTED_MODULE_0__["Articles"]; });



/***/ }),

/***/ "./src/components/organisms/Footer/Footer.module.css":
/*!***********************************************************!*\
  !*** ./src/components/organisms/Footer/Footer.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Footer.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Footer/Footer.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Footer.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Footer/Footer.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Footer.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Footer/Footer.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/organisms/Footer/Footer.tsx":
/*!****************************************************!*\
  !*** ./src/components/organisms/Footer/Footer.tsx ***!
  \****************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/atoms/NavigationLink */ "./src/components/atoms/NavigationLink/index.ts");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.css */ "./src/components/organisms/Footer/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/organisms/Footer/Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Footer = function Footer() {
  return __jsx("footer", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["NavigationLink"], {
    href: "https://github.com/elforastero",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "GitHub"), __jsx(src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["NavigationLink"], {
    href: "https://linkedin.com/in/elforastero",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "LinkedIn"), __jsx(src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["NavigationLink"], {
    href: "https://t.me/elforastero",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "Telegram"));
};

/***/ }),

/***/ "./src/components/organisms/Footer/index.ts":
/*!**************************************************!*\
  !*** ./src/components/organisms/Footer/index.ts ***!
  \**************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/organisms/Footer/Footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });



/***/ }),

/***/ "./src/components/organisms/Header/Header.module.css":
/*!***********************************************************!*\
  !*** ./src/components/organisms/Header/Header.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Header/Header.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Header/Header.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Header/Header.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/organisms/Header/Header.tsx":
/*!****************************************************!*\
  !*** ./src/components/organisms/Header/Header.tsx ***!
  \****************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_atoms_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/atoms/Logo */ "./src/components/atoms/Logo/index.ts");
/* harmony import */ var src_components_atoms_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/atoms/Navigation */ "./src/components/atoms/Navigation/index.ts");
/* harmony import */ var src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/atoms/NavigationLink */ "./src/components/atoms/NavigationLink/index.ts");
/* harmony import */ var src_components_atoms_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/atoms/ThemeSwitcher */ "./src/components/atoms/ThemeSwitcher/index.ts");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/organisms/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/organisms/Header/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Header = function Header() {
  return __jsx("header", {
    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(src_components_atoms_Logo__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }))), __jsx(src_components_atoms_Navigation__WEBPACK_IMPORTED_MODULE_3__["Navigation"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_4__["NavigationLink"], {
    href: "/bookshelf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Bookshelf"), __jsx(src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_4__["NavigationLink"], {
    href: "https://linkedin.com/in/elforastero",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Contact"), __jsx(src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_4__["NavigationLink"], {
    href: "https://linkedin.com/in/elforastero",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "CV"), __jsx(src_components_atoms_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_5__["ThemeSwitcher"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  })));
};

/***/ }),

/***/ "./src/components/organisms/Header/index.ts":
/*!**************************************************!*\
  !*** ./src/components/organisms/Header/index.ts ***!
  \**************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/organisms/Header/Header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });



/***/ }),

/***/ "./src/components/organisms/Hero/Hero.module.css":
/*!*******************************************************!*\
  !*** ./src/components/organisms/Hero/Hero.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Hero.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Hero/Hero.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Hero.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Hero/Hero.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Hero.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Hero/Hero.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/organisms/Hero/Hero.tsx":
/*!************************************************!*\
  !*** ./src/components/organisms/Hero/Hero.tsx ***!
  \************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_atoms_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/atoms/Avatar */ "./src/components/atoms/Avatar/index.ts");
/* harmony import */ var src_components_atoms_Highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/atoms/Highlighter */ "./src/components/atoms/Highlighter/index.ts");
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero.module.css */ "./src/components/organisms/Hero/Hero.module.css");
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/organisms/Hero/Hero.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Hero = function Hero() {
  return __jsx("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(src_components_atoms_Avatar__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: __webpack_require__(/*! ./assets/eugene.jpg */ "./src/components/organisms/Hero/assets/eugene.jpg"),
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), __jsx("h1", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Hi, my name is ", __jsx(src_components_atoms_Highlighter__WEBPACK_IMPORTED_MODULE_2__["Highlighter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 22
    }
  }, "Eugene"), ". \uD83D\uDC4B", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), "I\u2019m a frontend engineer from Russia."));
};

/***/ }),

/***/ "./src/components/organisms/Hero/assets/eugene.jpg":
/*!*********************************************************!*\
  !*** ./src/components/organisms/Hero/assets/eugene.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAMgAyAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBgMFBwIBAAj/2gAIAQEAAAAA05ZQy1V4f/SeUfKfttUYA2lxl+sPOJolpQ4W9JZou/U7KvtpThhW12liI788MUVyt5c7UoI5OynrYVEMdzchSOTYOjkhaH80MuYQtBRZ7aLwNvfZoIp4TSlZNrTtALkiyxDO7nJ+8ZdOnop7GbkqoQYS2+coD88fWBvcldC/sUbnWSl9FAZjP022naJlb2QRXHArllYujKOKZ2XDlxPzHf8AiBX6ETN37Fh8W1rrjEOTCUTlUsTLf8oMrwRHL0Ply1rQzX5995xZZdEI0stdl7HMAx0dRZ36Wts7kze+eLTjnK1MxW+XyOKhX6WtUDS8JS22WrV798oNSRlFsdGuMmokwHdBm9VGHmbha/e/KzfjyaZ2NSybOyhWMovoCRmq/uGmddeSx/mil5baxV707QZaKreJx8jV/Rv02V798mYRyxTKJctrtFaLFY2nGQeep2ps8X2bLhzWJU0NsLUbM9U0V/UpCfbx1rbfF2CWo3JIi7Be0dPo2g38NcpJonfpdk8X9Ygr1hOLT+wyUzs40tPd95ldyliFsumUOVAmlVoncBVPaaIHT2K5SH9kAznbhR5H2OeHVdT+i+PPkEyZLFLZ1BNhsqaiTTVlfBZGiQRuA/pqKZMeaslFaLl01jzDR189x12Ma2ypkE03n1TPZWycfP1zSAHB2F3BJc1NQXBwFW2F38WquYHAwAnvUHdudNUTUw/3vVpKUxmr/II1cDKbxMNd+1XMBI4tpc8SHzf/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/9oACAECEAAAABQTJbDSNyRRlVwwqSyQy6GrM13DQRCqifozVdARrASmtdRL9Grlpq50M9QNOo+dlundHKmTdqQHKlb+jg4gdjsrBXMC+o8ubxPXSl3zVO32WXk+kpIPXn0mEHN0Qz5tDwrMO5XK9AvIrZBS4dGXjf/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAQFAQb/2gAIAQMQAAAANkCcWmyfJBPkk6o+yQGchEXFgfIB8623Ap13dknOvskoaBzrUrqbjTAscyhKrK1NPo08i02SnWa3btV8nN0vTt8nlExuuwMhA63p/AyMmq1GZBv73jjYyuy5UWfHPzTfYQho2SonbzTtNpxjVxDb3//EACsQAAICAgIDAAIBAwQDAAAAAAECAwQAEQUSBhMhFCIQIzEyBxUkQRZCRP/aAAgBAQABCAC5aSPq0nLRlr+xzPs9msijkWoQ91Fb+3hMQCWcuQxn0yYJpEllDRsOgOSqsilc8v6muUWQfv8Aq8RYMw8K6jx6krS6WabD9xtCZWzkizcqjgPA6tHDb3EiMsciw2fUMYkKcClRFvJqolMJPLL1uhV5OtLJPCizlhH1exAsrgx+NVkj4quwmQSSRLlgfZGWrJ2rx4/QbY+Vqv4B6PGDtlLsFIXwqOKbgabvYG55xj7A0FAEi5yB78pGRO3qqyGNn3FG2O0E7FRXkMkSkyf47w92TWe5foO85mRRyAGWXLl9OzaXbV+oYjhgE4uHP3a0kgkZY42yirGGMsF1vPMt/wC3qFQtssI6tiRyB4laq0uIigsWQ/umbG7H7m/6i75NVXloFV5ZFqlkrTTvUiaYVYIWknjVpEsShO6sp3V+wqVdD2MhzyNdXFZXYg7y43rj7MjySRIFox746qmBQJY8kK9GLV9qyBSdZ5XylR1WtHDLY6MEhW88u2CSIp37ZwdL7WY+tzMFkG7PIw2OXhjSvKrbTJVV0KtqVEkU1pC9hiLUXtgmQcfUapSrwD9v+88jgLCvMCD2IHJxH8dyKkHrrx740MaNfafXfCAQQY0WNSq+X83O98UY3dVlYzRTzMoMZt201qOe5Jou8sQX9hf9evYZ4LH+EMMS8pC6RxBdNgIORVuT/wB1nles/a9dGRszO4bD/HNrug+aOwcmQSIyGOPUKKeKZzTjAhSUTu38clZWrSsTNavXJHLvC8kvUusZbWRo/wD2UYsCDA/XPROrkI62Q6s9LkuKkFSd7flPEPBLBF4tFOklot8xEZ5rMscRbu4ChwT2P8cmvahYGMzFyMA1re9JscIxNPRC6Zv481Er1oIVTjjJJocRwUFiovc+OmJ/1bxyc7Kf+Pck0miPGLix/vY8auqpfLtcRPocLfaCtNE9+atYNZo/HwQ1jCDo6RCj9VnswRWFjnExQAS+1CdBctr2qzjGH7HPnzF66K5wTjpOv8+b2PUKKZ4vUFqU2JERV+KoGBhgcDebY5MA0TLnk8BE768e5F4reo7UJkqSBPG/yjNL7MZAx2HrhnSR/wDJdF03/jVaQKEkkXtHIMderfUZSAcQbY9eG/WWVSScBzzxB+PTlPh7hqHsCAf3I9ZGFfpxWQD6ZEPwS7UE55nTlbpaj8Zqz/7gzR2vIaEEn4Y4hhVmb37zebzeEA5Tsp6VMhKksuXv1uSJgH6EGD9dqOLPW3HssPuXuRq0IfbP5Hy78rXhc8I8PHcRSMtnyyCLQYeXwltLT5f8iESLyPk4ruVw+bAEAVfJ7kzqVvxfmcXOM8cmtUDyfq5gPHdgtR888gowFfFeTkv8aBLm8+59yIRyxwq6NGZpNcsnS9ORb5kwWfRHX5BOxZ6PJ1BLC7WOZoVoJJRznIzcjN7G4lYLfD2i7UzY4mshl8cuy+wvF45Mk4I4Xjz6jG3PcJJJPIqReL1n6qaPitdXEkEdfrAYzx88tW3LGfKKrLcjhi98dZaU0njzxT3eXngwZvBlWRWKrlGSNrE2vJJlrz3ZykzbLPXaU67r6wcsT6UDL1hvWvTwZHmblaT8euq0SNJUhk+5+BDGCc4/SyEZdrrJKxK8dGDtI4ui/WcKMpU4ibDt5Lzk6eS8i6V/IxydVKUvD8fHx1GKCPeb/mjxss0YyJAg3n+od5FtCnHUhCDvJ+dVT5gsOw7Ry93bs1yyFWT2+KeQQ8RyZmn4jlq12MzwJbhAy3yMSkRrTKqpJndHKgQWztkeWzoZJOTnN+YScRaemrw077SMAZ6VgjPAvIvzQ9OYHf8AO8SuI2BF+7XoUrNuee5LcuWuStWb807lEo147FmOIySqY1jTlrxgi6KkDybdnREXPBZy9GeAqSVAyOvCgZnla/SEzwxPy96eNiIwsaZ2/wDRnAUjPNa6T88+DiBsdb9f2RBW4Xk7HH3oZ4qfLUrFaCcC9Sz86phu1cl8h4WMEP5hy3C8nwVmCC7bDfpHUpWbH6w1OOegWkkjYB3GXpffbdsiKmHTeqL1O+eKcmIOWCMhDpsCxyUYcluRuMQJV5Kzvax3LsyEmD9Iw8ksqhCTyt383k7MyqCU1iVYEBJMYlknKeIGO5x7pM9CqM/Cr/8ARowfM5/h0r27lkAmCqUFDiRIwlsJpFVEu9zH2WOX2k7kjjZlAipTRrp7s/riMCq7I6uvC8vJZr12kVy0YYW5Pu0r2tP2aGVnALcnZEWiPIeRuRQ1owdCVGxHAAC20eSFYUneqgeKPxaRqkFk43M2Dla7LM8auc56t+VxxyrSDSe6eNUQfCoA2k0mlO3k9U46zQ9rC4jqVy+gd2ZWXWeOr7+LjGcJySgGC1JcoKCTFydALs3ubpoCcWaa5a9kvkN78nl2RYwXxGIk00yi3uELTihVYkqOQDrx6X86YwScrXSEUCrHectf6K6Kkpc7xCdfPZ1GxY0UJycFl7Gf2uleWGK1aPs9s/sSBe0ykfM8RsgQSxGaBJRsW25CEfqbHIyMVNKsg/qPPZWpXmmyN2ZnleA9lUoYiZyWqoEVnx5llnAWvKQ84zxa5+Lz1QDnh/Spn+JZm2QxRF3LFXmDaRzgCwAx4WHYg1HVo5o1hJeVik7+z+88XQHXjcpSzIuJL8GWZAN7Z0L6WJmC6zyO2fSsCU0+HtHE8R7xTWweuiUeIOyERBy0PbSkwSFWZ15xialFikImcKx0xbFX/F8mBqkYso0A1xgNNjnca5xzgW5ctQeqdXRJUlGjM8ZHTOPPpvxnEs/NFrSN8PaIHeew/FTlpBLb9aRKEQEvYdz0hjpn5IwidK8LCc7ndc9mgqZApQ/bdv8AM4bibR5TyGrxs6xFW/ZGP2JyCVBUqSj1iUE0sikq3f8ATOFhLzWJMnQmRMs1exDL1k/tK0QQljVEduFQZqtmJiJIISxGrYPGUppJIVUShpWWBj/UjlogdQ6LJGHSJY5YXWSyrR25g0XWIA5AezDVS+o8Y0/IQizYEsld0cEFFDJ63U62jTqGVgZNN2jbZUEFPyooo5Yq99Z9RzFmZxEXiIHaNyZS3fjpJYgpMF9+pw8i0fbpytt7tpIQI42f6KsZO8McIXIYbJYtC9/jKp09i7JdtCQLHoaEICAY9hT4/wAlAncnS5PWRSSUewV3H+RHMejOxIINj4286mWVUE7j4ineVrkCDrZiatOoMUv0NrjGYGxG2o0LgXuSijZo4owVHcxaAMjvzNeM6iHkl1RpLXIXbagz5XdARtZegHX8piw9licRQxPhlJf5H1ZWUzQ6PeBLMVkFJJBMpPSVtgnIHEZds7dvuKpY5N8IXI1dF7CC17UCNQbpeUtycrmWOKGeNEmFdAdvtrdozvpQhOMnXAw6hSgLnWQwvr9WiB3qpSJ/fKN2GopQSchRmAZ4pYnI1OGB7Kyx2NMJZG0fbL9OH+5xG+/BIFj7tXjMhMjMhViMLGOdStc/8lOvuCGzceszf1Cbk3/zpFHFoF/+KMlKsSVVexyvF9HVIVC7ka5B8VVksuVKAyFR2jAIz//EADYQAAIBAwIEBAQEBQUBAAAAAAECAAMRITFBEBJRYQQicYETMlKRBSAjsUJigsHRNFNykqGy/9oACAEBAAk/ALhQ6jS+SZTspUGISt5gW06Q75gHM5CAwHnRgEtFuGW4tBtDNFAh3gPLreOBfnE2dv34C5Vh+8z5ExBysKYJIGMxb3IDAQEJUHMOit04anAh0xwcgU35gBv6wW8gnyj5mgtbpvHsLXvvMMKpJjEWPNBlVmTyxfUiaMZsbEQ+o2MpqSjOV7Gf7jfvw+sGCylEEpF2VAQi6mDJsbRxoR3UjIlubIPqIdDefefMNuGvwgYczBAm4uLQktzXMPzKVt0lzgmMWFuYTc8Bk4I6yk59rfvKy03Be6sZlS7EEevD6hF+aksTnqBMLpcykEZlBK/SekphXZgzkb7RQUblb3MwN5VDi5FxpBm23DDGkBEuZgbw4trNOUXhAtcAQgKBkxwaRSygDhUV6g1GwichGhWKDvzsRKvKx6LieKpMu+xigPsRi/qIDggn2mvwkMyyAXNsXguDLvZcGDHwlv6w2Z1IBjfIgBh4bEqeDNcxiSVhyBCLg4gBEFhfAnxVpKoN1Ng/PGtuGbAt6Sv6YvCD/RmPWUeoE5Qdz8QX/wDZUPLsWA/fQyoC1vQ+kt5qVO5jsTb9+HiSKAA5VAwwnlYctoRdfyDQgzSby11EAtnMa6ctrfzA8HCclNjcypzOdTfOfWA3++kyB/CDFC97XEqIf6Df7yoPsJSUqfqsRKSi2eakeYA9xPCeJ+KUUFqRDJzCVytcqVCnDXlZ2QhcOSx4MGBIUqe24MY8wtdTGvx+gzAmZeahjCRfh8jMS3tObQESmRUiXEWUCYGB2GsGFlQ89vQ/eU3q1Frq4K0y2CN7Sg4q/GRm5qTKe+SJ0EM2UYjqjVB5DvcT/sNDGBPD6DN+HuJs3HRy4MGFAiiDgOA1EFiJVKtUamD99I1n5ME5lVWHILi3C4bqIAzKcG0WwhC1Bv1gBt8rDcTdTxYW3mpXjszr/wCXn8bngeBEPBbro0omoFUXtsCcGManiCtuRIDT+IoCk/mcDQC56w5Ag1cwQHJh1QgcHsNFUfMx6CAIg8QUpoM7ZJMOPhA+pMFgYd4cEQEkRCDFBTcQW5qfMOxEpBqooeS+lxP0jXRKtkxZibOBHc3K7kw3q0TyMT+XISqjD1Bjg4GBPrMVW5R5yep2lI2PSMy2O4lYVST5UXUw8ll5V5b2UQXbw1VyT3spWLcikuI3KLeRV/uY5VubS+JbEYL3jgG3mlaohHQ4hueUiUlINSxa3sRFJFGkMDoXJlVKaiwYuLjIjA0HqpykaEhfynBIjDnACsvdd4LqgvCS7Ek73JllHTUx6kO0dVudWNrjtKoYVaCEW0BNxNVUKfURYgg2gl5eGWLNWLAdDtftArBKnwvZBaLyOHBD5IUdzGvi7N9RP5X5agNzfcdRAL2yeszUZld1H/kbO5lRL+sp8yHVrgCHHQjWHmsbWNop+E6FGtm24MctSd25SQRvwyzG0YEgkXjgMZhlJEHBFB+Grhz/ADyurVHJY5yScky4ZTkaXjkOqfpoTsv5dNR2Ma1KjTao57CH9StUZiOhO3sMRytMa2i3BJLHflGsUBVsAo0tHtUbQakCHEXMPmp1bj0cXmph5mO5niDUps1wraj0Mrnw6A7amVArD+I5vCOa3Dbw9L+8cg7ESoHr0xqBkr0MdVZWBBYSugFRFa19LzxFP/sJ4in/ANhK6fcT8RoD+sT8UU1FZHVKbA87KcB/5YfIuBKZbq2ij3lRWZk5bLtNR+xhxewml9tZTtyi4uZ5UrJy+4yJqJ4MuL4s4n4U/J/KwYz8G8Ty/wBI/wDq0/Da6juV/wAy4e1rHaGHDNZf+K4EvmCwGWi2Uczr6QB2psLHsZTX7SmIiwAUatM1F7NuIbGoQW9BpAQuybnuYoVQMAYAnzLmIwBWHlzY+5xChO2ZrqxhsykEHoRMOyA+syYtm7Yic7bHW0HKI4FsmMUHiObG/IvAz+M+Y9hHvWamVsuQCe8XmZuWwOCbT8OqfcTwz0w6lgT24MFNO1U3+kaiG30r0iKw7D/Mx+0wRqJflLwdDjh78CeZSbEaixlhUQ+xHWU0buRKSL7CEDoBBgHCxrpQUUx66twOQYzArbTQ5gFkYO0OQYqHlUtfe0FvnHDIbyE9AIYY1gctfaNzd+xno3qIbMcfaKCQbBRggxALnrc+8GhmzwkEbjWVgy95UsOohLPb5jkw/KpMyWYk+pmZcAi4tFsDoewl+VT9zOoA9TG/Tf8AQPo0/wBxuGQdQd4OQqbMNV7EiCz2v2PccCckkehmjqPvCVamBjXI3944Dst/MLg2MGBBcHedAYYMcdyOafJbSG43SVBk25dxFZshVXYd+82JvDa12Pq3+BDZlsV9VyJqXufdZWNNd7DJgzBtysOol2oE3B3pmEWOjbGbTqRL+dRb1gIJuZ5X3EuYcNiaiGWg8zadu57TK08E9Wmlopv9Ucs5G4zB5LrzDe5mgckw3PbUmHz7n6eggzUIJ9bZlUipy3IE0ODL8p0MF1I0nmothb7djDem2ATqO3AGyoPuY2Ab5mDsZTP/ADUXHvNRkRrOBhv89pTIGzbEdjASToBkmG/iKg0+gbCMATnJldLdjKotHBCjbpvK3Jz5H9oACCD2NxqOsF6rQ3W9r9TuYf8ATeKb7OOYR+Zmyx6Q6nSajQzBEFwdRMnr1HWbGVWW9yVvYQKrctr7GPcgZIj56/5g5WtpsfSZW+sbY+5MVF7qoBON4xIU59TBgCwii8YKRAeXdyAqj1Jl/FVVwFU8tMe8pU1IQKoQWVVEa9/mY/tBbGBH/VZ6RVeoF7mH1g8jfKw1U9DOWpbVThxLpUGzYM1E2m80GBwp3z88cG33muxHURlDAKwGpZSdoCCpOVNxA9R+pNlseonzMcRwqKLEttKJqn6nNh9hKHhU7ilPEO46E2X7Dgbk7DMoM3diFA+8q01G6pdjb1g8x5lIPpe3tDreAEEaGNaov7dDEAqLqDH5rfwthvYy46gzXQQ8TntqITziZ/SK+14FLkBV9L6mZKkmq3VoQqUhr0EBWmvyr/c94OGkFl6RZdyNToB7mMpOzaoncfUZ4JKyraxqZPf3M/CPDMY4B2hzsf7Ty1F3GsQW0DjT36Q424faWFxgbwa6TTeb4h2Km2+JkglFHpBd6gIHcw3AN3bq3+BGIM5yYthbA4LGuOmgnJjSy3lCo69bWJ9BKRp7WOvD/8QALhEBAAICAQMCBAMJAAAAAAAAAQACAxEhBBAxElEgIkFhBTJxExQjMzRiY5Gx/9oACAECAQE/AL+ISh3r9ZXz2v8Alt8N/HY7EHzPWntDJ7zK/K9+d9reHsdmbm4IwpbINa8scdq+RIGvgIdrMavvPT/dCn3Z09tZKvnzMmYyHFU0fAOzsQFQJkGttMbE9RPWTwSgWx7PqR74XiYqjZWGKjwEx4aYjflnUH8W/wB3cPGtEKcR26GPgCYyn7Ota/m1ySzte9alTUpqoTAKtplyI+mptmelj5l2zaz1PjU2zBT131oZelmu9BY9plB1f38/rNk2TEmSlbjwm5i6e1/mtwQqU4PEpV9Vn3nUJ6WpNaZxHzOkprd4TqcDfDetPmtw8Rx5aitUJtn4Rit+71tc+q17WmwdB5mWom5Y5SaYVmE1QIG+IJudfT01v9zcJSpWoBoDibiyrs/RjpJmo1d9sWJtz9IaItiqys/Ef5G5iotB9EIyzpmPJXxNe0vWr5OHzHpa74vxK0DWvp4mk9pfJQOZj5CdXUtgsfcgEZuZmeZjy38JsIpYEZyupkylDR5i5HarAbIEqIBudTlcWC90XxDrf8T/ALIcy3HMzQlAMdZTzcg/8gbds0amCprcXU6/+n/VIBP/xAAsEQEAAgICAQQABAYDAAAAAAABAAIDESExEAQSQVEFIGFxEyIjNEJDUpGx/9oACAEDAQE/AKdxlvN/j9o+MQ7r+WrzOV/I13qGIfllsCdMwn8x5414O4OmfL4IE0xEjatUsz3j0xV/I+aVHUNH+MU/4ks7+CZ6brYlaexOe3xx4TT5UDbMHIPwmyBv5nsflmp7G+Soa5mYvizWpbulkhyb85TmWY2e1mTNbI66rMGrYMH6U1/0z2DYeY96hWoqGl7lNGQU4nqb3t6jLkeRuu5U0Hm1mzHmZ7aPbMdDXus6J6TN1TXHxKle4lJYCeoytKNh1K3qW1tR73Me+afXX7TT9TT9S41vaj2TJnKuq8sbN+WXT2VPqen2Jd7mOw6m8WvmXdT1mTeqfXLGeh9SY/U47XfbXkf2SU9Rgula3FZxPxPMGdrR50bhBmlBXqYrPUxuqVT6n8Y+o3bd9TNb3ZLPh6n4Vdtnx7+FIy9rWvZXvx8yxp/cgoz0+QtXXjLlKnt+Wcu2ANgluJ+Ef3dCZ8uMyWHJrX6z58UPcdczJjt3N/DMV0eHk6h6p1zTmXuqr89zhlMdt7mThZ6C7T1VLfQ/+RdqsJqYDjxfFTvelleLaZ0bmPG3dvUChwBF0SyKupiP6hqa8V54Zh68WsuS2/vUv/rYnGvtluOCHczL1AGem5yp9E0T/9k="

/***/ }),

/***/ "./src/components/organisms/Hero/index.ts":
/*!************************************************!*\
  !*** ./src/components/organisms/Hero/index.ts ***!
  \************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./src/components/organisms/Hero/Hero.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["Hero"]; });



/***/ }),

/***/ "./src/components/organisms/Projects/Projects.tsx":
/*!********************************************************!*\
  !*** ./src/components/organisms/Projects/Projects.tsx ***!
  \********************************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/atoms/Typography */ "./src/components/atoms/Typography/index.ts");
/* harmony import */ var src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/atoms/CatalogItem */ "./src/components/atoms/CatalogItem/index.ts");
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/organisms/Projects/Projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Projects = function Projects(_ref) {
  var className = _ref.className;
  return __jsx("section", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["Heading2"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Projects"), __jsx(src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_2__["CatalogItem"], {
    icon: "\u269B\uFE0F",
    href: "https://github.com/ElForastero/react-browser-extension-boilerplate",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "React Browser Extension Boilerplate"), __jsx(src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_2__["CatalogItem"], {
    icon: "\uD83C\uDDF7\uD83C\uDDFA",
    href: "https://github.com/ElForastero/Transliterate",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, "Laravel 6 Transliteration Package"), __jsx(src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_2__["CatalogItem"], {
    icon: "\uD83D\uDC46",
    href: "https://github.com/ElForastero/use-click-outside",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "use-click-outside hook with Shadow DOM support"));
};

/***/ }),

/***/ "./src/components/organisms/Projects/index.ts":
/*!****************************************************!*\
  !*** ./src/components/organisms/Projects/index.ts ***!
  \****************************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/components/organisms/Projects/Projects.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return _Projects__WEBPACK_IMPORTED_MODULE_0__["Projects"]; });



/***/ }),

/***/ "./src/components/organisms/Talks/Talks.tsx":
/*!**************************************************!*\
  !*** ./src/components/organisms/Talks/Talks.tsx ***!
  \**************************************************/
/*! exports provided: Talks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Talks", function() { return Talks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/atoms/Typography */ "./src/components/atoms/Typography/index.ts");
/* harmony import */ var src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/atoms/CatalogItem */ "./src/components/atoms/CatalogItem/index.ts");
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/organisms/Talks/Talks.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Talks = function Talks(_ref) {
  var className = _ref.className;
  return __jsx("section", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["Heading2"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Talks"), __jsx(src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_2__["CatalogItem"], {
    icon: "\uD83D\uDEF0",
    href: "https://wdmeetup.ru/wdm-5.html",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Though REST and Redux to GraphQL and Apollo"), __jsx(src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_2__["CatalogItem"], {
    icon: "\uD83D\uDC33",
    href: "https://wdmeetup.ru/wdm-2.html",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "Had a little talk about the Docker for the frontend guys"), __jsx(src_components_atoms_CatalogItem__WEBPACK_IMPORTED_MODULE_2__["CatalogItem"], {
    icon: "\uD83C\uDFCE",
    href: "https://wdmeetup.ru/wdm-1.html",
    external: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, "60 FPS \uFF0D Speed up the web"));
};

/***/ }),

/***/ "./src/components/organisms/Talks/index.ts":
/*!*************************************************!*\
  !*** ./src/components/organisms/Talks/index.ts ***!
  \*************************************************/
/*! exports provided: Talks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Talks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Talks */ "./src/components/organisms/Talks/Talks.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Talks", function() { return _Talks__WEBPACK_IMPORTED_MODULE_0__["Talks"]; });



/***/ }),

/***/ "./src/components/organisms/Tools/Tools.module.css":
/*!*********************************************************!*\
  !*** ./src/components/organisms/Tools/Tools.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Tools.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Tools/Tools.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Tools.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Tools/Tools.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/src??__nextjs_postcss!./Tools.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/organisms/Tools/Tools.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/organisms/Tools/Tools.tsx":
/*!**************************************************!*\
  !*** ./src/components/organisms/Tools/Tools.tsx ***!
  \**************************************************/
/*! exports provided: Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/atoms/Typography */ "./src/components/atoms/Typography/index.ts");
/* harmony import */ var _Tools_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tools.module.css */ "./src/components/organisms/Tools/Tools.module.css");
/* harmony import */ var _Tools_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tools_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/organisms/Tools/Tools.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var react = __webpack_require__(/*! src/assets/img/tools/react.svg */ "./src/assets/img/tools/react.svg");

var redux = __webpack_require__(/*! src/assets/img/tools/redux.svg */ "./src/assets/img/tools/redux.svg");

var graphql = __webpack_require__(/*! src/assets/img/tools/graphql.svg */ "./src/assets/img/tools/graphql.svg");

var apollo = __webpack_require__(/*! src/assets/img/tools/apollographql.svg */ "./src/assets/img/tools/apollographql.svg");

var webpack = __webpack_require__(/*! src/assets/img/tools/webpack.svg */ "./src/assets/img/tools/webpack.svg");

var webstorm = __webpack_require__(/*! src/assets/img/tools/webstorm.svg */ "./src/assets/img/tools/webstorm.svg");

var typescript = __webpack_require__(/*! src/assets/img/tools/typescript.svg */ "./src/assets/img/tools/typescript.svg");

var docker = __webpack_require__(/*! src/assets/img/tools/docker.svg */ "./src/assets/img/tools/docker.svg");

var laravel = __webpack_require__(/*! src/assets/img/tools/laravel.svg */ "./src/assets/img/tools/laravel.svg");

var php = __webpack_require__(/*! src/assets/img/tools/php.svg */ "./src/assets/img/tools/php.svg");

var tools = [{
  icon: react,
  title: 'React',
  link: 'https://reactjs.org'
}, {
  icon: redux,
  title: 'Redux',
  link: 'https://redux.js.org'
}, {
  icon: graphql,
  title: 'GraphQL',
  link: 'https://graphql.org'
}, {
  icon: apollo,
  title: 'Apollo',
  link: 'https://www.apollographql.com'
}, {
  icon: webpack,
  title: 'Webpack',
  link: 'https://webpack.js.org'
}];
var tools2 = [{
  icon: webstorm,
  title: 'WebStorm',
  link: 'https://www.jetbrains.com/webstorm'
}, {
  icon: typescript,
  title: 'TypeScript',
  link: 'https://www.typescriptlang.org'
}, {
  icon: docker,
  title: 'Docker',
  link: 'https://www.docker.com'
}, {
  icon: laravel,
  title: 'Laravel',
  link: 'https://laravel.com'
}, {
  icon: php,
  title: 'PHP',
  link: 'https://www.php.net'
}];
var Tools = function Tools(_ref) {
  var className = _ref.className;
  return __jsx("section", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, __jsx(src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["Heading2"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "Tools I\u2019m using"), __jsx("div", {
    className: _Tools_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, tools.map(function (_ref2) {
    var link = _ref2.link,
        icon = _ref2.icon,
        title = _ref2.title;
    return __jsx("a", {
      href: link,
      key: title,
      className: _Tools_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
      rel: "noopener,noreferrer",
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, __jsx("img", {
      className: _Tools_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      src: icon,
      alt: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }), title);
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, tools2.map(function (_ref3) {
    var link = _ref3.link,
        icon = _ref3.icon,
        title = _ref3.title;
    return __jsx("a", {
      href: link,
      key: title,
      className: _Tools_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
      rel: "noopener,noreferrer",
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx("img", {
      className: _Tools_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      src: icon,
      alt: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }), title);
  }))));
};

/***/ }),

/***/ "./src/components/organisms/Tools/index.ts":
/*!*************************************************!*\
  !*** ./src/components/organisms/Tools/index.ts ***!
  \*************************************************/
/*! exports provided: Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ "./src/components/organisms/Tools/Tools.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return _Tools__WEBPACK_IMPORTED_MODULE_0__["Tools"]; });



/***/ }),

/***/ "./src/layouts/home/Home.module.css":
/*!******************************************!*\
  !*** ./src/layouts/home/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/layouts/home/Home.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/layouts/home/Home.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/layouts/home/Home.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/layouts/home/Home.tsx":
/*!***********************************!*\
  !*** ./src/layouts/home/Home.tsx ***!
  \***********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_organisms_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/organisms/Header */ "./src/components/organisms/Header/index.ts");
/* harmony import */ var src_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/organisms/Footer */ "./src/components/organisms/Footer/index.ts");
/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.module.css */ "./src/layouts/home/Home.module.css");
/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/layouts/home/Home.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/**
 * Layout for Home page.
 */

var Home = function Home(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return __jsx("div", {
    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(src_components_organisms_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), children, __jsx(src_components_organisms_Footer__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/layouts/home/index.ts":
/*!***********************************!*\
  !*** ./src/layouts/home/index.ts ***!
  \***********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/layouts/home/Home.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__["Home"]; });



/***/ }),

/***/ "./src/pages/Home.module.css":
/*!***********************************!*\
  !*** ./src/pages/Home.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Home.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Home.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Home.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_layouts_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layouts/home */ "./src/layouts/home/index.ts");
/* harmony import */ var src_components_organisms_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/organisms/Hero */ "./src/components/organisms/Hero/index.ts");
/* harmony import */ var src_components_organisms_Articles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/organisms/Articles */ "./src/components/organisms/Articles/index.ts");
/* harmony import */ var src_components_organisms_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/organisms/Projects */ "./src/components/organisms/Projects/index.ts");
/* harmony import */ var src_components_organisms_Talks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/organisms/Talks */ "./src/components/organisms/Talks/index.ts");
/* harmony import */ var src_components_organisms_Tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/organisms/Tools */ "./src/components/organisms/Tools/index.ts");
/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Home.module.css */ "./src/pages/Home.module.css");
/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Home = function Home(_ref) {
  var posts = _ref.posts;
  return __jsx(src_layouts_home__WEBPACK_IMPORTED_MODULE_2__["Home"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "ElForastero")), __jsx(src_components_organisms_Hero__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx(src_components_organisms_Articles__WEBPACK_IMPORTED_MODULE_4__["Articles"], {
    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.section,
    posts: posts,
    count: 5,
    showBlogLink: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx(src_components_organisms_Projects__WEBPACK_IMPORTED_MODULE_5__["Projects"], {
    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.section,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), __jsx(src_components_organisms_Talks__WEBPACK_IMPORTED_MODULE_6__["Talks"], {
    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.section,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx(src_components_organisms_Tools__WEBPACK_IMPORTED_MODULE_7__["Tools"], {
    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.section,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 1:
/*!***************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Feugenedzhumak%2Fwww%2Felforastero%2Fsrc%2Fpages%2Findex.tsx ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Feugenedzhumak%2Fwww%2Felforastero%2Fsrc%2Fpages%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Feugenedzhumak%2Fwww%2Felforastero%2Fsrc%2Fpages%2Findex.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map