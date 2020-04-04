webpackHotUpdate("static/development/pages/en/bookshelf.js",{

/***/ "./src/components/organisms/Genres/Genres.tsx":
/*!****************************************************!*\
  !*** ./src/components/organisms/Genres/Genres.tsx ***!
  \****************************************************/
/*! exports provided: Genres */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genres", function() { return Genres; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/src/index.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_context_BookshelfContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/context/BookshelfContext */ "./src/components/context/BookshelfContext/index.ts");
/* harmony import */ var src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/atoms/NavigationLink */ "./src/components/atoms/NavigationLink/index.ts");
/* harmony import */ var src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/atoms/Typography */ "./src/components/atoms/Typography/index.ts");
/* harmony import */ var _Genres_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Genres.module.css */ "./src/components/organisms/Genres/Genres.module.css");
/* harmony import */ var _Genres_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Genres_module_css__WEBPACK_IMPORTED_MODULE_8__);



var _this = undefined,
    _jsxFileName = "/Users/eugenedzhumak/www/elforastero/src/components/organisms/Genres/Genres.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["genres"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var cross = __webpack_require__(/*! ./assets/x-circle.svg?include */ "./src/components/organisms/Genres/assets/x-circle.svg?include");

var Genres = function Genres(_ref) {
  var books = _ref.books;

  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()(),
      t = _useTranslation.t;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(src_components_context_BookshelfContext__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      filters = _useContext[0],
      dispatch = _useContext[1];

  var genres = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var nonUnique = books.reduce(function (acc, _ref2) {
      var genres = _ref2.genres;
      return acc.concat(genres);
    }, []);
    return Array.from(new Set(nonUnique));
  }, [books]);
  return __jsx("div", {
    className: _Genres_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(src_components_atoms_Typography__WEBPACK_IMPORTED_MODULE_7__["Heading2"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, t(_templateObject())), __jsx("nav", {
    className: _Genres_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, genres.map(function (genre) {
    var _cc;

    var isActive = genre === filters.genre;
    return __jsx(src_components_atoms_NavigationLink__WEBPACK_IMPORTED_MODULE_6__["NavigationLink"], {
      key: genre,
      className: Object(classcat__WEBPACK_IMPORTED_MODULE_3__["default"])((_cc = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cc, _Genres_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.item, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cc, _Genres_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.active, genre === filters.genre), _cc)),
      onClick: function onClick() {
        return dispatch({
          type: src_components_context_BookshelfContext__WEBPACK_IMPORTED_MODULE_5__["FILTER_BY_GENRE"],
          payload: isActive ? null : genre
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, t("books:genres.".concat(genre)), isActive && __jsx("span", {
      className: _Genres_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.close,
      dangerouslySetInnerHTML: {
        __html: cross
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }));
  })));
};

/***/ }),

/***/ "./src/locales/en/bookshelf.json":
/*!***************************************!*\
  !*** ./src/locales/en/bookshelf.json ***!
  \***************************************/
/*! exports provided: heading, genres, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"heading\":\"My Bookshelf\",\"genres\":\"Genres\"}");

/***/ })

})
//# sourceMappingURL=bookshelf.js.a68332125b524caf5a43.hot-update.js.map