/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"AAAA;;;EAGE;AACF;;EAEE,2BAA2B;EAC3B,6CAA6C;EAC7C,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;AACF;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE;AACF;EACE,OAAO;EACP,WAAW;AACb;AACA;;EAEE;AACF;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;;EAEE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;AACF;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;AACf;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;;EAEE;AACF;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,wDAAwD;AAC1D;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE;AACF;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4EAA4E;AAC9E;AACA;EACE,yEAAyE;AAC3E;AACA;EACE;AACF;;EAEE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;;EAEE,WAAW;EACX,WAAW;EACX,SAAS;EACT,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE;AACF;EACE,mBAAmB;AACrB;AACA;;;EAGE,mBAAmB;AACrB;AACA;;EAEE;AACF;;EAEE,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,OAAO;EACP,WAAW;AACb;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,MAAM;EACN,UAAU;AACZ;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,SAAS;EACT,YAAY;AACd;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,QAAQ;EACR,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,UAAU;EACV,YAAY;AACd;AACA;EACE,sCAAsC;EACtC,8BAA8B;EAC9B,SAAS;EACT,WAAW;AACb","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/nouislider/dist/nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_bg_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/bg-1.jpg */ "./src/assets/bg-1.jpg");
/* harmony import */ var _assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/svg/search.svg */ "./src/assets/svg/search.svg");
/* harmony import */ var _assets_svg_search_clear_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/svg/search-clear.svg */ "./src/assets/svg/search-clear.svg");
/* harmony import */ var _assets_icons_cart_dslr_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/cart-dslr.png */ "./src/assets/icons/cart-dslr.png");
/* harmony import */ var _assets_svg_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/svg/checkbox-unchecked.svg */ "./src/assets/svg/checkbox-unchecked.svg");
/* harmony import */ var _assets_svg_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/svg/checkbox-checked.svg */ "./src/assets/svg/checkbox-checked.svg");
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_assets_bg_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_assets_svg_search_clear_svg__WEBPACK_IMPORTED_MODULE_6__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_assets_icons_cart_dslr_png__WEBPACK_IMPORTED_MODULE_7__);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_assets_svg_checkbox_unchecked_svg__WEBPACK_IMPORTED_MODULE_8__);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_assets_svg_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_9__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n}\n\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\nbody {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-feature-settings: \"pnum\" on, \"lnum\" on;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  color: #191919;\n  background: fixed no-repeat center/cover url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\ntextarea:focus, input:focus {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\np,\nul,\nol {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.hide {\n  display: none;\n}\n\n.header {\n  font-family: \"Alegreya Sans\", sans-serif;\n  position: relative;\n  z-index: 10;\n  padding: 15px 0;\n}\n\n.header__container {\n  display: flex;\n  max-width: 1720px;\n  width: 95%;\n  height: 60px;\n  align-items: center;\n  margin: auto;\n  gap: 60px;\n}\n@media screen and (max-width: 1279px) {\n  .header__container {\n    width: 96%;\n    gap: 25px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .header__container {\n    justify-content: space-between;\n    flex-wrap: wrap;\n    height: auto;\n    row-gap: 10px;\n  }\n}\n@media screen and (max-width: 539px) {\n  .header__container {\n    justify-content: space-around;\n  }\n}\n\n.navigation {\n  display: flex;\n  align-items: center;\n  width: 320px;\n  gap: 30px;\n  font-size: 36px;\n  line-height: 42px;\n}\n@media screen and (max-width: 1279px) {\n  .navigation {\n    width: auto;\n  }\n}\n\n.header__link {\n  display: flex;\n  align-items: center;\n  transition: 0.3s;\n  gap: 10px;\n}\n\n.header__link_span:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.header__icon_main {\n  height: 50px;\n  width: auto;\n}\n@media screen and (max-width: 899px) {\n  .header__icon_main {\n    display: none;\n  }\n}\n@media screen and (max-width: 767px) {\n  .header__icon_main {\n    display: block;\n  }\n}\n@media screen and (max-width: 630px) {\n  .header__icon_main {\n    display: none;\n  }\n}\n\n.header__icon {\n  height: 30px;\n  width: auto;\n}\n\n.search-container {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n}\n@media screen and (max-width: 767px) {\n  .search-container {\n    order: 4;\n    justify-content: center;\n  }\n}\n\n.shop-options__sort {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 1279px) {\n  .shop-options__sort {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 539px) {\n  .shop-options__sort {\n    order: 3;\n    align-items: center;\n    flex-direction: row;\n  }\n}\n@media screen and (max-width: 389px) {\n  .shop-options__sort {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n.shop-options__text {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-size: 22px;\n  color: #191919;\n}\n\n.shop-sort__select {\n  background: none;\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 5px;\n  font-size: 22px;\n  color: #7f7f7f;\n  border: none;\n  transition-duration: 0.4s;\n}\n@media screen and (max-width: 1279px) {\n  .shop-sort__select {\n    padding: 0;\n    font-size: 18px;\n    margin-left: -3px;\n  }\n}\n@media screen and (max-width: 539px) {\n  .shop-sort__select {\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 389px) {\n  .shop-sort__select {\n    margin-left: -3px;\n  }\n}\n\n.shop-sort__option {\n  background-color: #F2F4F5;\n}\n\n.search-field {\n  display: flex;\n  flex-grow: 1;\n  max-width: 600px;\n  height: 50px;\n  position: relative;\n}\n\n.search-box {\n  width: 100%;\n  min-width: 200px;\n  background: rgba(255, 255, 255, 0.8);\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 45px 0 20px;\n  font-size: 24px;\n  line-height: 30px;\n  color: #191919;\n  border-radius: 30px;\n  border: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: right 20px center;\n  transition: all 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n\n.with-clear {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.search-clear {\n  position: absolute;\n  right: 10px;\n  width: 40px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.cart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 60px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 48px 60px;\n  flex-shrink: 0;\n  margin-left: 20px;\n}\n\n.cart__text {\n  font-size: 24px;\n  line-height: 24px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #7f7f7f;\n  padding: 5px;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  text-align: center;\n  position: relative;\n  top: 0px;\n  left: -26px;\n}\n\n.has-items {\n  color: #F2F4F5;\n  background-color: #c00;\n}\n\n.footer {\n  position: relative;\n  z-index: 10;\n  font-family: \"Alegreya Sans\", sans-serif;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.footer__container {\n  width: 100%;\n  padding: 15px;\n  gap: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n@media screen and (max-width: 939px) {\n  .footer__container {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 767px) {\n  .footer__container {\n    flex-direction: row;\n    gap: 5px;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 359px) {\n  .footer__container {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n}\n\n.footer__text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n@media screen and (max-width: 939px) {\n  .footer__text {\n    align-items: center;\n    gap: 10px;\n  }\n}\n\n.footer__link {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  transition: 0.3s;\n}\n@media screen and (max-width: 939px) {\n  .footer__link {\n    text-align: center;\n  }\n}\n\n.footer__link:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.footer__image-RS {\n  height: 40px;\n}\n\n.footer__image-GH {\n  height: 30px;\n}\n\n.shop-page {\n  width: 100%;\n}\n\n.shop-container {\n  max-width: 1720px;\n  width: 95%;\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  grid-template-rows: min-content 1fr;\n  margin: auto;\n  gap: 15px;\n}\n@media screen and (max-width: 1279px) {\n  .shop-container {\n    width: 98%;\n  }\n}\n@media screen and (max-width: 939px) {\n  .shop-container {\n    grid-template-columns: 210px 1fr;\n    gap: 10px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-container {\n    width: 95%;\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n}\n\n.shop-left-side {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-left-side {\n    width: auto;\n    gap: 5px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-left-side {\n    margin-left: -3px;\n  }\n}\n\n.dropdown-filters {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .dropdown-filters {\n    display: flex;\n    background: rgba(255, 255, 255, 0.8);\n    border-radius: 20px;\n    width: 100%;\n    justify-content: space-between;\n    padding: 5px 15px;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  }\n}\n\n.dropdown-filters__img {\n  height: 30px;\n  transition: all 0.3s;\n}\n\n.shop-options {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n  gap: 10px;\n  justify-content: space-around;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  height: calc(100vh - 210px);\n  min-height: 630px;\n  max-height: 770px;\n  transition: all 0.4s ease;\n}\n@media screen and (max-width: 939px) {\n  .shop-options {\n    width: 210px;\n    padding: 10px;\n    height: auto;\n    min-height: auto;\n    max-height: none;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-options {\n    width: auto;\n  }\n}\n\n.shop-maker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-maker__list,\n.shop-type__list {\n  display: grid;\n  row-gap: 10px;\n  column-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n}\n@media screen and (max-width: 939px) {\n  .shop-maker__list,\n.shop-type__list {\n    grid-template-columns: 1fr;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-maker__list,\n.shop-type__list {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n.shop-maker__select {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.shop-maker__option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.shop-maker__option:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n@media screen and (max-width: 359px) {\n  .shop-maker__option {\n    font-size: 16px;\n    gap: 10px;\n  }\n}\n\n.checkbox_shop:checked + .shop-maker__option,\n.checkbox_shop:checked + .shop-options__text {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox-none:checked + .shop-maker__img {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox-none {\n  display: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.shop-maker__img {\n  height: 17px;\n}\n@media screen and (max-width: 359px) {\n  .shop-maker__img {\n    height: 14px;\n  }\n}\n\n.checkbox_shop {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  margin: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  background: no-repeat center/contain url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.checkbox_shop:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n.checkbox_shop:checked {\n  background: no-repeat center/contain url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.shop-price,\n.shop-mpix {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.slider {\n  height: 4px;\n  margin: 0 8px;\n  border: none;\n  background: #7f7f7f;\n}\n.slider .noUi-handle::before, .slider .noUi-handle::after {\n  display: none;\n}\n.slider .noUi-connect {\n  background: #c00;\n}\n.slider .noUi-handle {\n  height: 16px;\n  width: 16px;\n  top: -6px;\n  right: -8px;\n  /* half the width */\n  border-radius: 8px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n}\n.slider .noUi-handle .noUi-touch-area {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n}\n\n.slider__labels {\n  display: flex;\n  justify-content: space-between;\n}\n\n.shop-price__labels-low,\n.shop-price__labels-high,\n.shop-mpix__labels-low,\n.shop-mpix__labels-high {\n  appearance: textfield;\n  text-align: center;\n  width: 60px;\n  height: 30px;\n  border: 1px solid #999;\n  color: #303030;\n  font-size: 13px;\n  line-height: 30px;\n  outline: none;\n  padding: 0 5px;\n  border-radius: 10px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.shop-type,\n.shop-stab {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-stab__list {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-stab__list {\n    align-items: flex-start;\n    gap: 10px;\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-stab__list {\n    align-items: center;\n    flex-direction: row;\n    gap: 5%;\n  }\n}\n\n.shop-stab__option {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.shop-stab__option:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n@media screen and (max-width: 359px) {\n  .shop-stab__option {\n    font-size: 16px;\n  }\n}\n\n.shop-stock {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn_stock {\n  order: 1;\n}\n\n.shop-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-reset-filters,\n.shop-reset-storage {\n  width: 240px;\n  height: 30px;\n  align-self: center;\n  background: #F2F4F5;\n  border-radius: 30px;\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 5px;\n  font-size: 16px;\n  color: #191919;\n  border: 2px solid #7f7f7f;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n@media screen and (max-width: 939px) {\n  .shop-reset-filters,\n.shop-reset-storage {\n    width: 95%;\n  }\n}\n\n.shop-reset-filters:hover,\n.shop-reset-storage:hover {\n  border: 2px solid #c00;\n}\n\n.shop-reset-filters:active,\n.shop-reset-storage:active {\n  background: #c00;\n}\n\n.shop-goods {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  gap: 12px;\n  justify-content: flex-start;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  margin-bottom: 15px;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 2;\n}\n@media screen and (max-width: 939px) {\n  .shop-goods {\n    padding: 10px;\n    gap: 10px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-goods {\n    margin-bottom: 0px;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n  }\n}\n@media screen and (max-width: 530px) {\n  .shop-goods {\n    justify-content: space-around;\n  }\n}\n\n.modal-overlay {\n  display: none;\n  position: fixed;\n  z-index: 20;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: block;\n}\n\n.shop-popup {\n  background-color: #fefefe;\n  margin: 40vh auto;\n  padding: 15px;\n  border: 1px solid #c00;\n  border-radius: 20px;\n  width: 400px;\n  box-shadow: rgba(0, 0, 0, 0.3) 5px 10px 10px;\n  animation-name: appear;\n  animation-duration: 0.4s;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.shop-popup__button {\n  float: right;\n  width: 25px;\n  height: 25px;\n}\n.shop-popup__button:hover, .shop-popup__button:focus {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n  cursor: pointer;\n}\n\n.shop-popup__text {\n  text-align: center;\n  font-size: 24px;\n  margin: 40px 20px 25px;\n}\n\n@media screen and (max-width: 767px) {\n  .shop-options {\n    opacity: 0;\n    overflow: hidden;\n    height: 0px;\n    padding: 0;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  #dropdown-filters:checked ~ .shop-options {\n    opacity: 1;\n    height: 620px;\n    padding: 10px;\n  }\n}\n\n@keyframes slide-down {\n  from {\n    height: 0px;\n  }\n  to {\n    height: 620px;\n  }\n}\n.dropdown__text::before {\n  content: \"Показать \";\n}\n\n#dropdown-filters:checked ~ .dropdown-filters > .dropdown__text::before {\n  content: \"Скрыть \";\n}\n\n#dropdown-filters:checked ~ .dropdown-filters > .dropdown-filters__img {\n  transform: rotate(180deg);\n}\n\n.shop-card {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 10px;\n  width: 250px;\n  height: 450px;\n  justify-content: flex-start;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  transition: all 0.2s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  cursor: pointer;\n}\n.shop-card:hover {\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.15), 0px 0px 2px 0.00144px rgba(0, 0, 0, 0.12);\n}\n@media screen and (max-width: 630px) {\n  .shop-card {\n    width: 48%;\n    height: auto;\n    justify-content: space-between;\n  }\n}\n@media screen and (max-width: 430px) {\n  .shop-card {\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n\n.shop-card__name {\n  font-weight: 700;\n  line-height: 26px;\n  height: 52px;\n  font-size: 21px;\n}\n@media screen and (max-width: 630px) {\n  .shop-card__name {\n    height: auto;\n  }\n}\n@media screen and (max-width: 430px) {\n  .shop-card__name {\n    font-size: 18px;\n    line-height: 20px;\n  }\n}\n\n.shop-card__price-mp {\n  display: flex;\n}\n\n.shop-card__block {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n}\n@media screen and (max-width: 630px) {\n  .shop-card__block {\n    column-gap: 5px;\n    row-gap: 0;\n    flex-wrap: wrap;\n  }\n}\n\n.text-big {\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 31px;\n}\n@media screen and (max-width: 430px) {\n  .text-big {\n    font-size: 22px;\n    line-height: 26px;\n  }\n}\n\n.text-aux {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #7f7f7f;\n}\n@media screen and (max-width: 430px) {\n  .text-aux {\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n\n.shop-card__price-mpix,\n.shop-card__stock-cart {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n@media screen and (max-width: 630px) {\n  .shop-card__price-mpix,\n.shop-card__stock-cart {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0;\n  }\n}\n\n@media screen and (max-width: 630px) {\n  .shop-card__type-stab {\n    gap: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.text-in-stock {\n  color: #c00;\n}\n@media screen and (max-width: 630px) {\n  .text-in-stock {\n    align-self: center;\n  }\n}\n\n.text-out-of-stock {\n  color: #7f7f7f;\n}\n@media screen and (max-width: 630px) {\n  .text-out-of-stock {\n    align-self: center;\n  }\n}\n\n.text-no-cards {\n  align-self: center;\n  flex-grow: 1;\n  text-align: center;\n  font-size: 24px;\n}\n\n.shop-card__cart {\n  width: 119px;\n  height: 32px;\n  background: #191919;\n  color: rgba(255, 255, 255, 0.8);\n  border: #191919 2px solid;\n  border-radius: 8px;\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n@media screen and (max-width: 630px) {\n  .shop-card__cart {\n    width: 100%;\n    margin-top: 5px;\n  }\n}\n\n.added {\n  background: #c00;\n  border: #c00 2px solid;\n  color: #F2F4F5;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/global.scss","webpack://./src/components/sass/_global.scss","webpack://./src/components/sass/_header.scss","webpack://./src/components/sass/_footer.scss","webpack://./src/components/sass/_shop-page.scss","webpack://./src/components/sass/_shop-card.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500;700&display=swap\");\n@import 'nouislider/dist/nouislider.css';\n* {\n  box-sizing: border-box;\n}\n\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\nbody {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-feature-settings: \"pnum\" on, \"lnum\" on;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  color: #191919;\n  background: fixed no-repeat center/cover url(\"./assets/bg-1.jpg\");\n}\n\ntextarea:focus, input:focus {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\np,\nul,\nol {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.hide {\n  display: none;\n}\n\n.header {\n  font-family: \"Alegreya Sans\", sans-serif;\n  position: relative;\n  z-index: 10;\n  padding: 15px 0;\n}\n\n.header__container {\n  display: flex;\n  max-width: 1720px;\n  width: 95%;\n  height: 60px;\n  align-items: center;\n  margin: auto;\n  gap: 60px;\n}\n@media screen and (max-width: 1279px) {\n  .header__container {\n    width: 96%;\n    gap: 25px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .header__container {\n    justify-content: space-between;\n    flex-wrap: wrap;\n    height: auto;\n    row-gap: 10px;\n  }\n}\n@media screen and (max-width: 539px) {\n  .header__container {\n    justify-content: space-around;\n  }\n}\n\n.navigation {\n  display: flex;\n  align-items: center;\n  width: 320px;\n  gap: 30px;\n  font-size: 36px;\n  line-height: 42px;\n}\n@media screen and (max-width: 1279px) {\n  .navigation {\n    width: auto;\n  }\n}\n\n.header__link {\n  display: flex;\n  align-items: center;\n  transition: 0.3s;\n  gap: 10px;\n}\n\n.header__link_span:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.header__icon_main {\n  height: 50px;\n  width: auto;\n}\n@media screen and (max-width: 899px) {\n  .header__icon_main {\n    display: none;\n  }\n}\n@media screen and (max-width: 767px) {\n  .header__icon_main {\n    display: block;\n  }\n}\n@media screen and (max-width: 630px) {\n  .header__icon_main {\n    display: none;\n  }\n}\n\n.header__icon {\n  height: 30px;\n  width: auto;\n}\n\n.search-container {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n}\n@media screen and (max-width: 767px) {\n  .search-container {\n    order: 4;\n    justify-content: center;\n  }\n}\n\n.shop-options__sort {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 1279px) {\n  .shop-options__sort {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 539px) {\n  .shop-options__sort {\n    order: 3;\n    align-items: center;\n    flex-direction: row;\n  }\n}\n@media screen and (max-width: 389px) {\n  .shop-options__sort {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n.shop-options__text {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-size: 22px;\n  color: #191919;\n}\n\n.shop-sort__select {\n  background: none;\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 5px;\n  font-size: 22px;\n  color: #7f7f7f;\n  border: none;\n  transition-duration: 0.4s;\n}\n@media screen and (max-width: 1279px) {\n  .shop-sort__select {\n    padding: 0;\n    font-size: 18px;\n    margin-left: -3px;\n  }\n}\n@media screen and (max-width: 539px) {\n  .shop-sort__select {\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 389px) {\n  .shop-sort__select {\n    margin-left: -3px;\n  }\n}\n\n.shop-sort__option {\n  background-color: #F2F4F5;\n}\n\n.search-field {\n  display: flex;\n  flex-grow: 1;\n  max-width: 600px;\n  height: 50px;\n  position: relative;\n}\n\n.search-box {\n  width: 100%;\n  min-width: 200px;\n  background: rgba(255, 255, 255, 0.8);\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 45px 0 20px;\n  font-size: 24px;\n  line-height: 30px;\n  color: #191919;\n  border-radius: 30px;\n  border: none;\n  background-image: url(\"./assets/svg/search.svg\");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: right 20px center;\n  transition: all 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n\n.with-clear {\n  background-image: url(\"./assets/svg/search-clear.svg\");\n}\n\n.search-clear {\n  position: absolute;\n  right: 10px;\n  width: 40px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.cart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 60px;\n  background-image: url(\"./assets/icons/cart-dslr.png\");\n  background-size: 48px 60px;\n  flex-shrink: 0;\n  margin-left: 20px;\n}\n\n.cart__text {\n  font-size: 24px;\n  line-height: 24px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #7f7f7f;\n  padding: 5px;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  text-align: center;\n  position: relative;\n  top: 0px;\n  left: -26px;\n}\n\n.has-items {\n  color: #F2F4F5;\n  background-color: #c00;\n}\n\n.footer {\n  position: relative;\n  z-index: 10;\n  font-family: \"Alegreya Sans\", sans-serif;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.footer__container {\n  width: 100%;\n  padding: 15px;\n  gap: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n@media screen and (max-width: 939px) {\n  .footer__container {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 767px) {\n  .footer__container {\n    flex-direction: row;\n    gap: 5px;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 359px) {\n  .footer__container {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n}\n\n.footer__text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n@media screen and (max-width: 939px) {\n  .footer__text {\n    align-items: center;\n    gap: 10px;\n  }\n}\n\n.footer__link {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  transition: 0.3s;\n}\n@media screen and (max-width: 939px) {\n  .footer__link {\n    text-align: center;\n  }\n}\n\n.footer__link:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.footer__image-RS {\n  height: 40px;\n}\n\n.footer__image-GH {\n  height: 30px;\n}\n\n.shop-page {\n  width: 100%;\n}\n\n.shop-container {\n  max-width: 1720px;\n  width: 95%;\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  grid-template-rows: min-content 1fr;\n  margin: auto;\n  gap: 15px;\n}\n@media screen and (max-width: 1279px) {\n  .shop-container {\n    width: 98%;\n  }\n}\n@media screen and (max-width: 939px) {\n  .shop-container {\n    grid-template-columns: 210px 1fr;\n    gap: 10px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-container {\n    width: 95%;\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n}\n\n.shop-left-side {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-left-side {\n    width: auto;\n    gap: 5px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-left-side {\n    margin-left: -3px;\n  }\n}\n\n.dropdown-filters {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .dropdown-filters {\n    display: flex;\n    background: rgba(255, 255, 255, 0.8);\n    border-radius: 20px;\n    width: 100%;\n    justify-content: space-between;\n    padding: 5px 15px;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  }\n}\n\n.dropdown-filters__img {\n  height: 30px;\n  transition: all 0.3s;\n}\n\n.shop-options {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n  gap: 10px;\n  justify-content: space-around;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  height: calc(100vh - 210px);\n  min-height: 630px;\n  max-height: 770px;\n  transition: all 0.4s ease;\n}\n@media screen and (max-width: 939px) {\n  .shop-options {\n    width: 210px;\n    padding: 10px;\n    height: auto;\n    min-height: auto;\n    max-height: none;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-options {\n    width: auto;\n  }\n}\n\n.shop-maker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-maker__list,\n.shop-type__list {\n  display: grid;\n  row-gap: 10px;\n  column-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n}\n@media screen and (max-width: 939px) {\n  .shop-maker__list,\n.shop-type__list {\n    grid-template-columns: 1fr;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-maker__list,\n.shop-type__list {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n.shop-maker__select {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.shop-maker__option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.shop-maker__option:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n@media screen and (max-width: 359px) {\n  .shop-maker__option {\n    font-size: 16px;\n    gap: 10px;\n  }\n}\n\n.checkbox_shop:checked + .shop-maker__option,\n.checkbox_shop:checked + .shop-options__text {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox-none:checked + .shop-maker__img {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox-none {\n  display: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.shop-maker__img {\n  height: 17px;\n}\n@media screen and (max-width: 359px) {\n  .shop-maker__img {\n    height: 14px;\n  }\n}\n\n.checkbox_shop {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  margin: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  background: no-repeat center/contain url(./assets/svg/checkbox-unchecked.svg);\n}\n.checkbox_shop:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n.checkbox_shop:checked {\n  background: no-repeat center/contain url(./assets/svg/checkbox-checked.svg);\n}\n\n.shop-price,\n.shop-mpix {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.slider {\n  height: 4px;\n  margin: 0 8px;\n  border: none;\n  background: #7f7f7f;\n}\n.slider .noUi-handle::before, .slider .noUi-handle::after {\n  display: none;\n}\n.slider .noUi-connect {\n  background: #c00;\n}\n.slider .noUi-handle {\n  height: 16px;\n  width: 16px;\n  top: -6px;\n  right: -8px;\n  /* half the width */\n  border-radius: 8px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n}\n.slider .noUi-handle .noUi-touch-area {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n}\n\n.slider__labels {\n  display: flex;\n  justify-content: space-between;\n}\n\n.shop-price__labels-low,\n.shop-price__labels-high,\n.shop-mpix__labels-low,\n.shop-mpix__labels-high {\n  appearance: textfield;\n  text-align: center;\n  width: 60px;\n  height: 30px;\n  border: 1px solid #999;\n  color: #303030;\n  font-size: 13px;\n  line-height: 30px;\n  outline: none;\n  padding: 0 5px;\n  border-radius: 10px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.shop-type,\n.shop-stab {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-stab__list {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-stab__list {\n    align-items: flex-start;\n    gap: 10px;\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-stab__list {\n    align-items: center;\n    flex-direction: row;\n    gap: 5%;\n  }\n}\n\n.shop-stab__option {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.shop-stab__option:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n@media screen and (max-width: 359px) {\n  .shop-stab__option {\n    font-size: 16px;\n  }\n}\n\n.shop-stock {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn_stock {\n  order: 1;\n}\n\n.shop-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-reset-filters,\n.shop-reset-storage {\n  width: 240px;\n  height: 30px;\n  align-self: center;\n  background: #F2F4F5;\n  border-radius: 30px;\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 5px;\n  font-size: 16px;\n  color: #191919;\n  border: 2px solid #7f7f7f;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n@media screen and (max-width: 939px) {\n  .shop-reset-filters,\n.shop-reset-storage {\n    width: 95%;\n  }\n}\n\n.shop-reset-filters:hover,\n.shop-reset-storage:hover {\n  border: 2px solid #c00;\n}\n\n.shop-reset-filters:active,\n.shop-reset-storage:active {\n  background: #c00;\n}\n\n.shop-goods {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  gap: 12px;\n  justify-content: flex-start;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  margin-bottom: 15px;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 2;\n}\n@media screen and (max-width: 939px) {\n  .shop-goods {\n    padding: 10px;\n    gap: 10px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .shop-goods {\n    margin-bottom: 0px;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n  }\n}\n@media screen and (max-width: 530px) {\n  .shop-goods {\n    justify-content: space-around;\n  }\n}\n\n.modal-overlay {\n  display: none;\n  position: fixed;\n  z-index: 20;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: block;\n}\n\n.shop-popup {\n  background-color: #fefefe;\n  margin: 40vh auto;\n  padding: 15px;\n  border: 1px solid #c00;\n  border-radius: 20px;\n  width: 400px;\n  box-shadow: rgba(0, 0, 0, 0.3) 5px 10px 10px;\n  animation-name: appear;\n  animation-duration: 0.4s;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.shop-popup__button {\n  float: right;\n  width: 25px;\n  height: 25px;\n}\n.shop-popup__button:hover, .shop-popup__button:focus {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n  cursor: pointer;\n}\n\n.shop-popup__text {\n  text-align: center;\n  font-size: 24px;\n  margin: 40px 20px 25px;\n}\n\n@media screen and (max-width: 767px) {\n  .shop-options {\n    opacity: 0;\n    overflow: hidden;\n    height: 0px;\n    padding: 0;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  #dropdown-filters:checked ~ .shop-options {\n    opacity: 1;\n    height: 620px;\n    padding: 10px;\n  }\n}\n\n@keyframes slide-down {\n  from {\n    height: 0px;\n  }\n  to {\n    height: 620px;\n  }\n}\n.dropdown__text::before {\n  content: \"Показать \";\n}\n\n#dropdown-filters:checked ~ .dropdown-filters > .dropdown__text::before {\n  content: \"Скрыть \";\n}\n\n#dropdown-filters:checked ~ .dropdown-filters > .dropdown-filters__img {\n  transform: rotate(180deg);\n}\n\n.shop-card {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 10px;\n  width: 250px;\n  height: 450px;\n  justify-content: flex-start;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  transition: all 0.2s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  cursor: pointer;\n}\n.shop-card:hover {\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.15), 0px 0px 2px 0.00144px rgba(0, 0, 0, 0.12);\n}\n@media screen and (max-width: 630px) {\n  .shop-card {\n    width: 48%;\n    height: auto;\n    justify-content: space-between;\n  }\n}\n@media screen and (max-width: 430px) {\n  .shop-card {\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n\n.shop-card__name {\n  font-weight: 700;\n  line-height: 26px;\n  height: 52px;\n  font-size: 21px;\n}\n@media screen and (max-width: 630px) {\n  .shop-card__name {\n    height: auto;\n  }\n}\n@media screen and (max-width: 430px) {\n  .shop-card__name {\n    font-size: 18px;\n    line-height: 20px;\n  }\n}\n\n.shop-card__price-mp {\n  display: flex;\n}\n\n.shop-card__block {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n}\n@media screen and (max-width: 630px) {\n  .shop-card__block {\n    column-gap: 5px;\n    row-gap: 0;\n    flex-wrap: wrap;\n  }\n}\n\n.text-big {\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 31px;\n}\n@media screen and (max-width: 430px) {\n  .text-big {\n    font-size: 22px;\n    line-height: 26px;\n  }\n}\n\n.text-aux {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #7f7f7f;\n}\n@media screen and (max-width: 430px) {\n  .text-aux {\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n\n.shop-card__price-mpix,\n.shop-card__stock-cart {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n@media screen and (max-width: 630px) {\n  .shop-card__price-mpix,\n.shop-card__stock-cart {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0;\n  }\n}\n\n@media screen and (max-width: 630px) {\n  .shop-card__type-stab {\n    gap: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.text-in-stock {\n  color: #c00;\n}\n@media screen and (max-width: 630px) {\n  .text-in-stock {\n    align-self: center;\n  }\n}\n\n.text-out-of-stock {\n  color: #7f7f7f;\n}\n@media screen and (max-width: 630px) {\n  .text-out-of-stock {\n    align-self: center;\n  }\n}\n\n.text-no-cards {\n  align-self: center;\n  flex-grow: 1;\n  text-align: center;\n  font-size: 24px;\n}\n\n.shop-card__cart {\n  width: 119px;\n  height: 32px;\n  background: #191919;\n  color: rgba(255, 255, 255, 0.8);\n  border: #191919 2px solid;\n  border-radius: 8px;\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n@media screen and (max-width: 630px) {\n  .shop-card__cart {\n    width: 100%;\n    margin-top: 5px;\n  }\n}\n\n.added {\n  background: #c00;\n  border: #c00 2px solid;\n  color: #F2F4F5;\n  font-weight: 700;\n}","@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500;700&display=swap');\n// $primary-color: #fff;\n$primary-color: rgba(255,255,255,0.8);\n$accent-color: #c00;\n$accent-dark-color: #F2F4F5;\n$text-color: #191919;\n$text-secondary-color: #7f7f7f;\n$font-header: 'Alegreya Sans', sans-serif;\n$font-main: 'Alegreya Sans', sans-serif;\n$hover-effect: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n\n* {\n  box-sizing: border-box;\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\nbody {\n  font-family: $font-main;\n  font-feature-settings: 'pnum' on, 'lnum' on;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  color: $text-color;\n  background: fixed no-repeat center/cover url(\"./assets/bg-1.jpg\");\n  // background: $accent-dark-color;\n}\n\ntextarea:focus, input:focus{\n  outline: none;\n}\n\nh1,\nh2,\nh3,\np,\nul,\nol {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.hide {\n  display: none;\n}",".header {\n  // background-color: $accent-dark-color;\n  font-family: $font-header;\n  position: relative;\n  z-index: 10;\n  padding: 15px 0;\n}\n\n.header__container {\n  display: flex;\n  max-width: 1720px;\n  width: 95%;\n  height: 60px;\n  align-items: center;\n  margin: auto;\n  gap: 60px;\n\n  @media screen and (max-width: 1279px) {\n    width: 96%;\n    gap: 25px;\n  }\n\n  @media screen and (max-width: 767px) {\n    justify-content: space-between;\n    flex-wrap: wrap;\n    height: auto;\n    row-gap: 10px;\n  }\n\n  @media screen and (max-width: 539px) {\n    justify-content: space-around;\n  }\n}\n\n.navigation {\n  display: flex;\n  align-items: center;\n  width: 320px;\n  gap: 30px;\n  font-size: 36px;\n  line-height: 42px;\n\n  @media screen and (max-width: 1279px) {\n    width: auto;\n  }\n}\n\n.header__link {\n  display: flex;\n  align-items: center;\n  transition: .3s;\n  gap: 10px;\n}\n\n.header__link_span:hover {\n  filter: $hover-effect;\n}\n\n.header__icon_main {\n  height: 50px;\n  width: auto;\n\n  @media screen and (max-width: 899px) {\n    display: none;\n  }\n\n  @media screen and (max-width: 767px) {\n    display: block;\n  }\n\n  @media screen and (max-width: 630px) {\n    display: none;\n  }\n}\n\n.header__icon {\n  height: 30px;\n  width: auto;\n}\n\n.search-container {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n\n  @media screen and (max-width: 767px) {\n    order: 4;\n    justify-content: center;\n  }\n}\n\n.shop-options__sort {\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 1279px) {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  @media screen and (max-width: 539px) {\n    order: 3;\n    align-items: center;\n    flex-direction: row;\n  }\n\n  @media screen and (max-width: 389px) {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n.shop-options__text {\n  font-family: $font-header;\n  font-size: 22px;\n  color: $text-color;\n}\n\n.shop-sort__select {\n  background: none;\n  font-family: $font-main;\n  padding: 0 5px;\n  font-size: 22px;\n  color: $text-secondary-color;\n  border: none;\n  transition-duration: 0.4s;\n\n  @media screen and (max-width: 1279px) {\n    padding: 0;\n    font-size: 18px;\n    margin-left: -3px;\n  }\n\n  @media screen and (max-width: 539px) {\n    margin-left: 0;\n  }\n\n  @media screen and (max-width: 389px) {\n    margin-left: -3px;\n  }\n}\n\n.shop-sort__option {\n  background-color: $accent-dark-color;\n}\n\n.search-field {\n  display: flex;\n  flex-grow: 1;\n  max-width: 600px;\n  height: 50px;\n  position: relative;\n}\n\n.search-box {\n  width: 100%;\n  min-width: 200px;\n  background: $primary-color;\n  font-family: $font-header;\n  padding: 0 45px 0 20px;\n  font-size: 24px;\n  line-height: 30px;\n  color: $text-color;\n  border-radius: 30px;\n  border: none;\n  background-image: url(\"./assets/svg/search.svg\");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: right 20px center;\n  transition: all 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n\n.with-clear {\n  background-image: url(\"./assets/svg/search-clear.svg\");\n}\n\n.search-clear {\n  position: absolute;\n  right: 10px;\n  width: 40px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.cart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 60px;\n  background-image: url(\"./assets/icons/cart-dslr.png\");\n  background-size: 48px 60px;\n  flex-shrink: 0;\n  margin-left: 20px;\n}\n\n.cart__text {\n  font-size: 24px;\n  line-height: 24px;\n  color: $primary-color;\n  background-color: $text-secondary-color;\n  padding: 5px;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  text-align: center;\n  position: relative;\n  top: 0px;\n  left: -26px;\n}\n\n.has-items {\n  color: $accent-dark-color;\n  background-color: $accent-color;\n}",".footer {\n  position: relative;\n  z-index: 10;\n  font-family: $font-header;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.footer__container {\n  width: 100%;\n  padding: 15px;\n  gap: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: $primary-color;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n\n  @media screen and (max-width: 939px) {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n\n  @media screen and (max-width: 767px) {\n    flex-direction: row;\n    gap: 5px;\n    justify-content: space-around;\n  }\n\n  @media screen and (max-width: 359px) {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n}\n\n.footer__text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n\n  @media screen and (max-width: 939px) {\n    align-items: center;\n    gap: 10px;\n  }\n}\n\n.footer__link {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  transition: .3s;\n\n  @media screen and (max-width: 939px) {\n    text-align: center;\n  }\n}\n\n.footer__link:hover {\n  filter: $hover-effect;\n}\n\n.footer__image-RS {\n  height: 40px;\n}\n\n.footer__image-GH {\n  height: 30px;\n}","@import 'nouislider/dist/nouislider.css';\n\n.shop-page {\n  // background: $accent-dark-color;\n  width: 100%;\n}\n\n.shop-container {\n  max-width: 1720px;\n  width: 95%;\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  grid-template-rows: min-content 1fr;\n  margin: auto;\n  gap: 15px;\n\n  @media screen and (max-width: 1279px) {\n    width: 98%;\n  }\n\n  @media screen and (max-width: 939px) {\n    grid-template-columns: 210px 1fr;\n    gap: 10px;\n  }\n\n  @media screen and (max-width: 767px) {\n    width: 95%;\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n}\n\n.shop-left-side {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n\n  @media screen and (max-width: 939px) {\n    width: auto;\n    gap: 5px;\n  }\n\n  @media screen and (max-width: 767px) {\n    margin-left: -3px;\n  }\n}\n\n.dropdown-filters {\n  display: none;\n\n  @media screen and (max-width: 767px) {\n    display: flex;\n    background: $primary-color;\n    border-radius: 20px;\n    width: 100%;\n    justify-content: space-between;\n    padding: 5px 15px;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  }\n}\n\n.dropdown-filters__img {\n  height: 30px;\n  transition: all 0.3s;\n}\n\n.shop-options {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n  gap: 10px;\n  justify-content: space-around;\n  background: $primary-color;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  height: calc(100vh - 210px);\n  min-height: 630px;\n  max-height: 770px;\n  transition: all .4s ease;\n\n  @media screen and (max-width: 939px) {\n    width: 210px;\n    padding: 10px;\n    height: auto;\n    min-height: auto;\n    max-height: none;\n  }\n\n  @media screen and (max-width: 767px) {\n    width: auto;\n  }\n}\n\n.shop-maker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-maker__list,\n.shop-type__list {\n  display: grid;\n  row-gap: 10px;\n  column-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n\n  @media screen and (max-width: 939px) {\n    grid-template-columns: 1fr;\n  }\n\n  @media screen and (max-width: 767px) {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n.shop-maker__select {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.shop-maker__option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-size: 18px;\n  transition: .3s;\n  cursor: pointer;\n\n  &:hover {\n    filter: $hover-effect;\n  }\n\n  @media screen and (max-width: 359px) {\n    font-size: 16px;\n    gap: 10px;\n  }\n}\n\n.checkbox_shop:checked+.shop-maker__option,\n.checkbox_shop:checked+.shop-options__text {\n  filter: $hover-effect;\n}\n\n.checkbox-none:checked+.shop-maker__img {\n  filter: $hover-effect;\n}\n\n.checkbox-none {\n  display: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.shop-maker__img {\n  height: 17px;\n\n  @media screen and (max-width: 359px) {\n    height: 14px;\n  }\n}\n\n.checkbox_shop {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  margin: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  background: no-repeat center/contain url(./assets/svg/checkbox-unchecked.svg);\n\n  &:hover {\n    filter: $hover-effect;\n  }\n\n  &:checked {\n    background: no-repeat center/contain url(./assets/svg/checkbox-checked.svg);\n  }\n}\n\n.shop-price,\n.shop-mpix {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.slider {\n  height: 4px;\n  margin: 0 8px;\n  border: none;\n  background: $text-secondary-color;\n\n  & .noUi-handle::before,\n  & .noUi-handle::after {\n    display: none;\n  }\n\n  & .noUi-connect {\n    background: $accent-color;\n  }\n\n  & .noUi-handle {\n    height: 16px;\n    width: 16px;\n    top: -6px;\n    right: -8px;\n    /* half the width */\n    border-radius: 8px;\n    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  }\n\n  & .noUi-handle .noUi-touch-area {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    right: -10px;\n    bottom: -10px;\n    width: auto;\n    height: auto;\n    cursor: pointer;\n  }\n}\n\n.slider__labels {\n  display: flex;\n  justify-content: space-between;\n}\n\n.shop-price__labels-low,\n.shop-price__labels-high,\n.shop-mpix__labels-low,\n.shop-mpix__labels-high {\n  appearance: textfield;\n  text-align: center;\n  width: 60px;\n  height: 30px;\n  border: 1px solid #999;\n  color: #303030;\n  font-size: 13px;\n  line-height: 30px;\n  outline: none;\n  padding: 0 5px;\n  border-radius: 10px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.shop-type,\n.shop-stab {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-stab__list {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n\n  @media screen and (max-width: 939px) {\n    align-items: flex-start;\n    gap: 10px;\n    flex-direction: column;\n  }\n\n  @media screen and (max-width: 767px) {\n    align-items: center;\n    flex-direction: row;\n    gap: 5%;\n  }\n}\n\n.shop-stab__option {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 18px;\n  transition: .3s;\n  cursor: pointer;\n\n  &:hover {\n    filter: $hover-effect;\n  }\n\n  @media screen and (max-width: 359px) {\n    font-size: 16px;\n  }\n}\n\n.shop-stock {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn_stock {\n  order: 1;\n}\n\n.shop-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-reset-filters,\n.shop-reset-storage {\n  width: 240px;\n  height: 30px;\n  align-self: center;\n  background: $accent-dark-color;\n  border-radius: 30px;\n  font-family: $font-main;\n  padding: 0 5px;\n  font-size: 16px;\n  color: $text-color;\n  border: 2px solid $text-secondary-color;\n  transition-duration: 0.4s;\n  cursor: pointer;\n\n  @media screen and (max-width: 939px) {\n    width: 95%;\n  }\n}\n\n.shop-reset-filters:hover,\n.shop-reset-storage:hover {\n  border: 2px solid $accent-color;\n}\n\n.shop-reset-filters:active,\n.shop-reset-storage:active {\n  background: $accent-color;\n}\n\n.shop-goods {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  gap: 12px;\n  justify-content: flex-start;\n  background: $primary-color;\n  border-radius: 20px;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  margin-bottom: 15px;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 2;\n\n  @media screen and (max-width: 939px) {\n    padding: 10px;\n    gap: 10px;\n  }\n\n  @media screen and (max-width: 767px) {\n    margin-bottom: 0px;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n  }\n\n  @media screen and (max-width: 530px) {\n    justify-content: space-around;\n  }\n}\n\n.modal-overlay {\n  display: none;\n  position: fixed;\n  z-index: 20;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: block;\n}\n\n.shop-popup {\n  background-color: #fefefe;\n  margin: 40vh auto;\n  padding: 15px;\n  border: 1px solid $accent-color;\n  border-radius: 20px;\n  width: 400px;\n  box-shadow: rgba(0, 0, 0, 0.3) 5px 10px 10px;\n  animation-name: appear;\n  animation-duration: 0.4s\n}\n\n@keyframes appear {\n  from {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n.shop-popup__button {\n  float: right;\n  width: 25px;\n  height: 25px;\n\n  &:hover,\n  &:focus {\n    filter: $hover-effect;\n    cursor: pointer;\n  }\n}\n\n.shop-popup__text {\n  text-align: center;\n  font-size: 24px;\n  margin: 40px 20px 25px;\n}\n\n.shop-options {\n  @media screen and (max-width: 767px) {\n    opacity: 0;\n    overflow: hidden;\n    height: 0px;\n    padding: 0;\n  }\n}\n\n#dropdown-filters:checked~.shop-options {\n  @media screen and (max-width: 767px) {\n    opacity: 1;\n    height: 620px;\n    padding: 10px;\n  }\n}\n\n@keyframes slide-down {\n  from {\n    height: 0px;\n  }\n\n  to {\n    height: 620px;\n  }\n}\n\n.dropdown__text::before {\n  content: 'Показать ';\n}\n\n#dropdown-filters:checked~.dropdown-filters>.dropdown__text::before {\n  content: 'Скрыть ';\n}\n\n#dropdown-filters:checked~.dropdown-filters>.dropdown-filters__img {\n  transform: rotate(180deg);\n}",".shop-card {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 10px;\n  width: 250px;\n  height: 450px;\n  justify-content: flex-start;\n  background: $primary-color;\n  border-radius: 10px;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  transition: all 0.2s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.15), 0px 0px 2px 0.00144px rgba(0, 0, 0, 0.12);\n  }\n\n  @media screen and (max-width: 630px) {\n    width: 48%;\n    height: auto;\n    justify-content: space-between;\n  }\n\n  @media screen and (max-width: 430px) {\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n\n.shop-card__name {\n  font-weight: 700;\n  line-height: 26px;\n  height: 52px;\n  font-size: 21px;\n\n  @media screen and (max-width: 630px) {\n    height: auto;\n  }\n\n  @media screen and (max-width: 430px) {\n    font-size: 18px;\n    line-height: 20px;\n  }\n}\n\n.shop-card__price-mp {\n  display: flex;\n}\n\n.shop-card__block {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n\n  @media screen and (max-width: 630px) {\n    column-gap: 5px;\n    row-gap: 0;\n    flex-wrap: wrap;\n  }\n}\n\n.text-big {\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 31px;\n\n  @media screen and (max-width: 430px) {\n    font-size: 22px;\n    line-height: 26px;\n  }\n}\n\n.text-aux {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: $text-secondary-color;\n\n  @media screen and (max-width: 430px) {\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n\n.shop-card__price-mpix,\n.shop-card__stock-cart {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n\n  @media screen and (max-width: 630px) {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0;\n  }\n}\n\n.shop-card__type-stab {\n  @media screen and (max-width: 630px) {\n    gap: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.text-in-stock {\n  color: $accent-color;\n\n  @media screen and (max-width: 630px) {\n    align-self: center;\n  }\n}\n\n.text-out-of-stock {\n  color: $text-secondary-color;\n\n  @media screen and (max-width: 630px) {\n    align-self: center;\n  }\n}\n\n.text-no-cards {\n  align-self: center;\n  flex-grow: 1;\n  text-align: center;\n  font-size: 24px;\n}\n\n.shop-card__cart {\n  width: 119px;\n  height: 32px;\n  background: $text-color;\n  color: $primary-color;\n  border: $text-color 2px solid;\n  border-radius: 8px;\n  font-family: $font-main;\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n\n  @media screen and (max-width: 630px) {\n    width: 100%;\n    margin-top: 5px;\n  }\n}\n\n.added {\n  background: $accent-color;\n  border: $accent-color 2px solid;\n  color: $accent-dark-color;\n  font-weight: 700;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                });
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                });
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) {
                to = scope_Spectrum.getStep(to);
            }
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state =
                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips, // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize,
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports["default"] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
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
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
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
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/ts/_cart.ts":
/*!************************************!*\
  !*** ./src/components/ts/_cart.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
class Cart {
    constructor() {
        this.cartStorage = {};
        this.cartCounter = 0;
        this.modalOverlay = document.querySelector('.modal-overlay');
        this.modalButton = document.querySelector('.shop-popup__button');
        this.init();
    }
    init() {
        const cart = localStorage.getItem('cartStorage');
        if (cart) {
            this.cartStorage = JSON.parse(cart);
            this.cartCounter = Object.keys(this.cartStorage).length;
        }
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay)
                this.modalOverlay.classList.remove('visible');
        });
        this.modalButton.addEventListener('click', () => {
            this.modalOverlay.classList.remove('visible');
        });
    }
    add(name) {
        if (this.cartStorage[name]) {
            this.cartStorage[name] += 1;
        }
        else {
            this.cartStorage[name] = 1;
        }
        this.cartCounter += 1;
        localStorage.setItem('cartStorage', JSON.stringify(this.cartStorage));
    }
    remove(name) {
        if (this.cartStorage[name]) {
            this.cartStorage[name] -= 1;
            this.cartCounter -= 1;
        }
        if (this.cartStorage[name] <= 0)
            delete this.cartStorage[name];
        localStorage.setItem('cartStorage', JSON.stringify(this.cartStorage));
    }
    toggle(name) {
        if (this.cartStorage[name]) {
            delete this.cartStorage[name];
            this.cartCounter -= 1;
        }
        else if (this.cartCounter >= 20) {
            this.showModal();
            return;
        }
        else {
            this.cartStorage[name] = 1;
            this.cartCounter += 1;
        }
        localStorage.setItem('cartStorage', JSON.stringify(this.cartStorage));
    }
    clear() {
        this.cartStorage = {};
        this.cartCounter = 0;
        localStorage.removeItem('cartStorage');
    }
    showModal() {
        this.modalOverlay.classList.add('visible');
    }
}


/***/ }),

/***/ "./src/components/ts/_shop-cards.ts":
/*!******************************************!*\
  !*** ./src/components/ts/_shop-cards.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RenderCards)
/* harmony export */ });
class RenderCards {
    draw(data, cart) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('.shop-card-template');
        if (!data.length) {
            const p = document.createElement('p');
            p.textContent = 'Извините, по вашему запросу товаров нет.';
            p.classList.add('text-no-cards');
            fragment.append(p);
        }
        else {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true);
                const img = sourceClone.querySelector('.shop-card__image');
                img.src = `./images/cameras/${item.img}.jpg`;
                sourceClone.querySelector('.shop-card__name').textContent = item.name;
                sourceClone.querySelector('.shop-card__price').textContent = item.price.replace(/(\d)(?=(?:\d\d\d)+$)/g, // Replace 3 digits with themselves + no-break space
                '$1\u202f');
                sourceClone.querySelector('.shop-card__mpix').textContent = item.mpix;
                sourceClone.querySelector('.shop-card__type').textContent = item.type;
                sourceClone.querySelector('.shop-card__stab').textContent = item.stabilization;
                sourceClone.querySelector('.shop-card__stock').textContent = item.stock ? 'В наличии' : 'Под заказ';
                item.stock
                    ? sourceClone.querySelector('.shop-card__stock').classList.add('text-in-stock')
                    : sourceClone.querySelector('.shop-card__stock').classList.add('text-out-of-stock');
                sourceClone.querySelector('.shop-card__cart').textContent = cart[item.name] ? 'Выбрано!' : 'В корзину';
                cart[item.name]
                    ? sourceClone.querySelector('.shop-card__cart').classList.add('added')
                    : sourceClone.querySelector('.shop-card__cart').classList.remove('added');
                fragment.append(sourceClone);
            });
        }
        document.querySelector('.shop-goods').innerHTML = '';
        document.querySelector('.shop-goods').append(fragment);
    }
}


/***/ }),

/***/ "./src/components/ts/_shop-filter.ts":
/*!*******************************************!*\
  !*** ./src/components/ts/_shop-filter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CameraFilter)
/* harmony export */ });
class CameraFilter {
    constructor() {
        this.searchBox = document.querySelector('.search-box');
        this.makersList = document.querySelectorAll('.checkbox_shop[name="maker"]');
        this.priceSlider = document.querySelector('.shop-price__slider');
        this.mpixSlider = document.querySelector('.shop-mpix__slider');
        this.typesList = document.querySelectorAll('.checkbox_shop[name="type"]');
        this.stabList = document.querySelectorAll('.checkbox_shop[name="stab"]');
        this.stockCheck = document.querySelector('.checkbox_shop[name="stock"]');
        this.checkboxes = document.querySelectorAll('.checkbox_shop');
        this.init();
    }
    init() {
        const checkboxesChecked = JSON.parse(localStorage.getItem('checkboxes'));
        if (checkboxesChecked) {
            this.checkboxes.forEach((chbox, idx) => {
                chbox.checked = checkboxesChecked[idx];
            });
        }
        const prices = JSON.parse(localStorage.getItem('prices'));
        const mpixes = JSON.parse(localStorage.getItem('mpixes'));
        this.priceSlider.noUiSlider.set(prices);
        this.mpixSlider.noUiSlider.set(mpixes);
    }
    filterName(data) {
        if (!this.searchBox.value)
            return data;
        return data.filter((el) => el.name.toLowerCase().indexOf(this.searchBox.value.toLowerCase()) !== -1);
    }
    filterMaker(data) {
        const makers = [];
        this.makersList.forEach((chbox) => {
            if (chbox.checked)
                makers.push(chbox.value.toLowerCase());
        });
        if (!makers.length)
            return data;
        return data.filter((el) => makers.indexOf(el.manufacturer.toLowerCase()) !== -1);
    }
    filterPrice(data) {
        const prices = this.priceSlider.noUiSlider.get();
        return data.filter((el) => Number(el.price) >= prices[0] && Number(el.price) <= prices[1]);
    }
    filterMpix(data) {
        const mpixes = this.mpixSlider.noUiSlider.get();
        return data.filter((el) => Number(el.mpix) >= mpixes[0] && Number(el.mpix) <= mpixes[1]);
    }
    filterType(data) {
        const types = [];
        this.typesList.forEach((chbox) => {
            if (chbox.checked)
                types.push(chbox.value.toLowerCase());
        });
        if (!types.length)
            return data;
        return data.filter((el) => types.indexOf(el.type.toLowerCase()) !== -1);
    }
    filterStab(data) {
        const stabs = [];
        this.stabList.forEach((chbox) => {
            if (chbox.checked)
                stabs.push(chbox.value.toLowerCase());
        });
        if (!stabs.length)
            return data;
        return data.filter((el) => stabs.indexOf(el.stabilization.toLowerCase()) !== -1);
    }
    filterStock(data) {
        if (!this.stockCheck.checked)
            return data;
        return data.filter((el) => el.stock);
    }
    filtersReset() {
        this.makersList.forEach((chbox) => (chbox.checked = false));
        this.priceSlider.noUiSlider.set([0, 999999]);
        this.mpixSlider.noUiSlider.set([0, 999999]);
        this.typesList.forEach((chbox) => (chbox.checked = false));
        this.stabList.forEach((chbox) => (chbox.checked = false));
        this.stockCheck.checked = false;
        localStorage.removeItem('checkboxes');
        localStorage.removeItem('prices');
        localStorage.removeItem('mpixes');
    }
    filter(data) {
        let filteredData = data;
        filteredData = this.filterName(filteredData);
        filteredData = this.filterMaker(filteredData);
        filteredData = this.filterPrice(filteredData);
        filteredData = this.filterMpix(filteredData);
        filteredData = this.filterType(filteredData);
        filteredData = this.filterStab(filteredData);
        filteredData = this.filterStock(filteredData);
        return filteredData;
    }
}


/***/ }),

/***/ "./src/components/ts/_shop-slider.ts":
/*!*******************************************!*\
  !*** ./src/components/ts/_shop-slider.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopSlider)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Slider takes sliderQuery: class of the future slider,
 * sliderRange: array of numbers of slider's range and
 * sliderStep: minimal step of the slider.
 *
 * It will connect the slider to the sliderQuery__labels-low
 * and sliderQuery__labels-high as their input labels.
 */
class ShopSlider {
    constructor(sliderQuery, sliderRange, sliderStep) {
        this.sliderQuery = sliderQuery;
        this.sliderRange = sliderRange;
        this.sliderStep = sliderStep;
        this.start();
    }
    start() {
        this.sliderTarget = document.querySelector(`.${this.sliderQuery}__slider`);
        const sliderLabels = [
            document.querySelector(`.${this.sliderQuery}__labels-low`),
            document.querySelector(`.${this.sliderQuery}__labels-high`),
        ];
        nouislider__WEBPACK_IMPORTED_MODULE_0__.create(this.sliderTarget, {
            start: [this.sliderRange[0], this.sliderRange[1]],
            connect: true,
            range: {
                min: this.sliderRange[0],
                max: this.sliderRange[1],
            },
            step: this.sliderStep,
            format: {
                from: (formattedValue) => Number(formattedValue),
                to: (numericValue) => Math.round(numericValue),
            },
        });
        this.sliderTarget.noUiSlider.on('update', (values, handle) => (sliderLabels[handle].value = String(values[handle])));
        sliderLabels[0].addEventListener('change', () => this.sliderTarget.noUiSlider.set([sliderLabels[0].value, null]));
        sliderLabels[1].addEventListener('change', () => this.sliderTarget.noUiSlider.set([null, sliderLabels[1].value]));
    }
}


/***/ }),

/***/ "./src/components/ts/_shop-sort.ts":
/*!*****************************************!*\
  !*** ./src/components/ts/_shop-sort.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortCards)
/* harmony export */ });
class SortCards {
    constructor(query) {
        this.shopSortSelect = document.querySelector(query);
        this.init();
    }
    init() {
        const sortOrder = localStorage.getItem('sortOrder');
        if (sortOrder) {
            this.shopSortSelect.value = sortOrder;
        }
    }
    sort(data) {
        switch (this.shopSortSelect.value) {
            case 'nameAZ':
                return this.nameAZ(data);
            case 'nameZA':
                return this.nameZA(data);
            case 'priceUp':
                return this.priceUp(data);
            case 'priceDown':
                return this.priceDown(data);
            case 'mpixUp':
                return this.mpixUp(data);
            case 'mpixDown':
                return this.mpixDown(data);
        }
    }
    nameAZ(data) {
        return data.sort((a, b) => a.name.localeCompare(b.name));
    }
    nameZA(data) {
        return data.sort((a, b) => b.name.localeCompare(a.name));
    }
    priceUp(data) {
        return data.sort((a, b) => Number(a.price) - Number(b.price));
    }
    priceDown(data) {
        return data.sort((a, b) => Number(b.price) - Number(a.price));
    }
    mpixUp(data) {
        return data.sort((a, b) => Number(a.mpix) - Number(b.mpix));
    }
    mpixDown(data) {
        return data.sort((a, b) => Number(b.mpix) - Number(a.mpix));
    }
    sortReset() {
        this.shopSortSelect.value = 'nameAZ';
        localStorage.removeItem('sortOrder');
    }
}


/***/ }),

/***/ "./src/components/ts/print-selfcheck.ts":
/*!**********************************************!*\
  !*** ./src/components/ts/print-selfcheck.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printSelfcheck)
/* harmony export */ });
/* eslint-disable no-console */
function printSelfcheck() {
    console.log(`%cOnline-Store - Интернет магазин`, 'font-weight: 700; font-size: 18px');
    console.log(`https://github.com/rolling-scopes-school/tasks/blob/master/tasks/online-store/README.md\n\n`);
    console.log(`%cСамооценка:`, 'font-weight: bold;');
    console.log(`Выполнены все пункты задания.

✔️ +10 | 1. Страница с товарами содержит карточки всех товаров а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10

✔️ +10 | 2. Карточка товара содержит её изображение, название, текстом или условным значком обозначены: цена, количество мегапикселей, тип, стабилизация, есть ли товар в наличии

✔️ +20 | 3. Добавление товара в избранное (корзину)
+10 | кликая по карточке с товаром или по кнопке на ней товар можно добавлять в избранное или удалять из избранного. Карточки добавленных в избранное товаров внешне отличаются от остальных
+10 | на странице отображается количество добавленных в избранное товаров. При попытке добавить в избранное больше 20 товаров, выводится всплывающее уведомление с текстом "Извините, в корзину можно добавить не более 20 товаров."

✔️ +20 | 4. Сортировка
+ сортируются только те товары, которые в данный момент отображаются на странице
+10 | сортировка товаров по названию в возрастающем и спадающем порядке
+10 | сортировка товаров по количеству мегапикселей в возрастающем и спадающем порядке
доп | сортировка товаров по цене в возрастающем и спадающем порядке

✔️ +30 | 5. Фильтры в указанном диапазоне от и до
+10 | фильтры по количеству мегапикселей
+10 | фильтры по цене
+10 | для фильтрации в указанном диапазоне используется range slider с двумя ползунками. При перемещении ползунков отображается их текущее значение, разный цвет слайдера до и после ползунка

✔️ +30 | 6. Фильтры по значению
Выбранные фильтры выделяются стилем.
+5 | фильтры по производителю
+5 | фильтры по типу
+5 | фильтры по виду стабилизации
+5 | можно отобразить только товары в наличии
+10 | можно отфильтровать товары по нескольким фильтрам одного типа

✔️ +20 | 7. Можно отфильтровать товары по нескольким фильтрам разного типа
Для нескольких фильтров разного типа отображаются только те товары, которые соответствуют всем выбранным фильтрам.
Например, можно отобразить только товары синего цвета. Или популярные белые и красные товары выпущенные в 2000-2010 годах.
Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, "Извините, по вашему запросу товаров нет."

✔️ +20 | 8. Сброс фильтров
+10 | есть кнопка reset для сброса фильтров
Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или товары, добавленные в избранное.
После использования кнопки reset фильтры остаются работоспособными
+10 | при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к первоначальным, range slider закрашивается одним цветом

✔️ +30 | 9. Сохранение настроек в local storage
+10 | выбранные пользователем фильтры, порядок сортировки, добавленные в избранное товара сохраняются при перезагрузке страницы. Есть кнопка сброса настроек, которая очищает local storage и корзину

✔️ +30 | 10. Поиск
+2 | при открытии приложения курсор находится в поле поиска
+2 | автозаполнение поля поиска отключено (нет выпадающего списка с предыдущими запросами)
+2 | есть placeholder
+2 | в поле поиска есть крестик, позволяющий очистить поле поиска
+2 | если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в человекочитаемом формате, например "Извините, совпадений не обнаружено"
+10 | при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается
Поиск ведётся только среди товаров, которые в данный момент отображаются на странице.
+10 | если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам сортировки

✔️ доп | Дополнительный функционал на выбор
+ очень высокое качество оформления приложения + дополнительный, не указанный в задании, сложный в реализации функционал, улучшающий качество приложения, удобство пользования им:
Респонсив от 320 пикселей и выше, удобная мобильная версия сайта с возможностью скрытия панели фильтров.
`);
    console.log(`%cИтого: 220+/200 => 200`, 'font-weight: bold');
}


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const data = [
    {
        num: '1',
        name: 'Canon EOS 4000D 18-55 DC III',
        mpix: '18',
        price: '12899',
        manufacturer: 'Canon',
        type: 'зеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_4000d_18-55_dc_iii_3011c004',
        stock: true,
    },
    {
        num: '2',
        name: 'Canon EOS 5D Mark IV 24-105L IS II',
        mpix: '30',
        price: '112999',
        manufacturer: 'Canon',
        type: 'зеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_5d_mark_iv_24-105l_is_ii_usm_kit_1483c030',
        stock: true,
    },
    {
        num: '3',
        name: 'Canon EOS 2000D 18-55 DC III',
        mpix: '24',
        price: '16899',
        manufacturer: 'Canon',
        type: 'зеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_2000d_18-55_dc_iii_2728c007',
        stock: true,
    },
    {
        num: '4',
        name: 'Canon EOS 250D Kit 18-55 IS White',
        mpix: '24',
        price: '22999',
        manufacturer: 'Canon',
        type: 'зеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_250d_kit_18-55_is_white_3458c003',
        stock: false,
    },
    {
        num: '5',
        name: 'Canon EOS 6D MK II Body',
        mpix: '27',
        price: '47160',
        manufacturer: 'Canon',
        type: 'зеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_6d_mk_ii_body',
        stock: true,
    },
    {
        num: '6',
        name: 'Canon EOS 800D 18-55 IS STM Kit',
        mpix: '24',
        price: '29299',
        manufacturer: 'Canon',
        type: 'зеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_800d_18-55_is_stm_kit_1895c019',
        stock: false,
    },
    {
        num: '7',
        name: 'Canon EOS C70 Cinema Camera',
        mpix: '9',
        price: '164988',
        manufacturer: 'Canon',
        type: 'беззеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_c70_cinema_camera',
        stock: false,
    },
    {
        num: '8',
        name: 'Canon EOS M200 + 15-45 IS STM White',
        mpix: '24',
        price: '20999',
        manufacturer: 'Canon',
        type: 'компакт',
        stabilization: 'оптическая',
        img: 'canon_eos_m200_+_15-45_is_stm_white_3700c032',
        stock: false,
    },
    {
        num: '9',
        name: 'Canon EOS M50 Mk2 + 15-45 IS STM + 55-200 IS',
        mpix: '24',
        price: '36399',
        manufacturer: 'Canon',
        type: 'зеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_m50_mk2_+_15-45_is_stm_kit_white_4729c028',
        stock: false,
    },
    {
        num: '10',
        name: 'Canon EOS M6 Mark II + 15-45 IS STM + EVF Kit',
        mpix: '34',
        price: '40199',
        manufacturer: 'Canon',
        type: 'беззеркальный',
        stabilization: 'оптическая',
        img: 'canon_eos_m6_mark_ii_+_15-45_is_stm_+_evf_kit_black_3611c053',
        stock: false,
    },
    {
        num: '11',
        name: 'Canon Zoemini S ZV123 Mbk',
        mpix: '8',
        price: '6427',
        manufacturer: 'Canon',
        type: 'компакт',
        stabilization: 'нет',
        img: 'canon_zoemini_s_zv123_mbk',
        stock: false,
    },
    {
        num: '12',
        name: 'Canon Powershot G5 X Mark II Black',
        mpix: '20',
        price: '33999',
        manufacturer: 'Canon',
        type: 'компакт',
        stabilization: 'оптическая',
        img: 'canon_powershot_g5_x_mark_ii_black_3070c013',
        stock: false,
    },
    {
        num: '13',
        name: 'Canon PowerShot SX540 HS Black',
        mpix: '20',
        price: '12399',
        manufacturer: 'Canon',
        type: 'ультразум',
        stabilization: 'оптическая',
        img: 'canon_powershot_sx540_hs_black_1067c012',
        stock: true,
    },
    {
        num: '14',
        name: 'Canon PowerShot Zoom',
        mpix: '12',
        price: '12199',
        manufacturer: 'Canon',
        type: 'ультразум',
        stabilization: 'оптическая',
        img: 'canon_powershot_zoom_4838c007',
        stock: true,
    },
    {
        num: '15',
        name: 'Fujifilm Instax Mini 90 Brown EX D',
        mpix: '2',
        price: '4999',
        manufacturer: 'Fujifilm',
        type: 'компакт',
        stabilization: 'нет',
        img: 'fujifilm_instax_mini_90_brown_ex_d_16423981',
        stock: false,
    },
    {
        num: '16',
        name: 'Fujifilm Instax Mini LiPlay Blush Gold',
        mpix: '5',
        price: '5999',
        manufacturer: 'Fujifilm',
        type: 'компакт',
        stabilization: 'нет',
        img: 'fujifilm_instax_mini_liplay_blush_gold_16631849',
        stock: true,
    },
    {
        num: '17',
        name: 'Fujifilm X-S10+ XF 16-80mm F4.0 Kit Black',
        mpix: '26',
        price: '57339',
        manufacturer: 'Fujifilm',
        type: 'беззеркальный',
        stabilization: 'матричная',
        img: 'fujifilm_x-s10+_xf_16-80mm_f4_0_kit_black_16670077',
        stock: true,
    },
    {
        num: '18',
        name: 'Fujifilm X-T30 II Mirrorless Digital Camera',
        mpix: '26',
        price: '32400',
        manufacturer: 'Fujifilm',
        type: 'беззеркальный',
        stabilization: 'оптическая',
        img: 'fujifilm_x-s10+_xf_16-80mm_f4_0_kit_black_16670077',
        stock: false,
    },
    {
        num: '19',
        name: 'Fujifilm X-T4 Body Black',
        mpix: '26',
        price: '64659',
        manufacturer: 'Fujifilm',
        type: 'беззеркальный',
        stabilization: 'матричная',
        img: 'fujifilm_x-t4_body_black_16650467',
        stock: true,
    },
    {
        num: '20',
        name: 'Nikon D3500 + AF-P 18-55 Non VR',
        mpix: '24',
        price: '18256',
        manufacturer: 'Nikon',
        type: 'зеркальный',
        stabilization: 'нет',
        img: 'nikon_d3500_+_af-p_18-55_non_vr_vba550k002',
        stock: true,
    },
    {
        num: '21',
        name: 'Nikon D5600 Kit AF-P 18-55 VR',
        mpix: '24',
        price: '25499',
        manufacturer: 'Nikon',
        type: 'зеркальный',
        stabilization: 'оптическая',
        img: 'nikon_d5600_kit_af-p_18-55_vr_vba500k001',
        stock: true,
    },
    {
        num: '22',
        name: 'Nikon Z fc + 16-50 VR Kit',
        mpix: '21',
        price: '34399',
        manufacturer: 'Nikon',
        type: 'беззеркальный',
        stabilization: 'оптическая',
        img: 'nikon_z_fc_+_16-50_vr_kit_voa090k002',
        stock: false,
    },
    {
        num: '23',
        name: 'Nikon Z7 24-70 f4 Kit',
        mpix: '46',
        price: '116999',
        manufacturer: 'Nikon',
        type: 'беззеркальный',
        stabilization: 'матричная',
        img: 'nikon_z7_24-70_f4_kit_voa010k001',
        stock: false,
    },
    {
        num: '24',
        name: 'Nikon D5-b Body (CF)',
        mpix: '21',
        price: '140399',
        manufacturer: 'Nikon',
        type: 'зеркальный',
        stabilization: 'матричная',
        img: 'nikon_d5-b_body_cf_vba460be',
        stock: false,
    },
    {
        num: '25',
        name: 'Panasonic LUMIX DC-FZ82EE-K Black',
        mpix: '18',
        price: '10999',
        manufacturer: 'Panasonic',
        type: 'ультразум',
        stabilization: 'оптическая',
        img: 'panasonic_lumix_dc-fz82ee-k_black',
        stock: false,
    },
    {
        num: '26',
        name: 'Panasonic LUMIX DC-FZ10002EE',
        mpix: '21',
        price: '22999',
        manufacturer: 'Panasonic',
        type: 'компакт',
        stabilization: 'оптическая',
        img: 'panasonic_lumix_dc-fz10002ee',
        stock: false,
    },
    {
        num: '27',
        name: 'Panasonic LUMIX DC-G90MEE-K Kit 12-60mm',
        mpix: '21',
        price: '30999',
        manufacturer: 'Panasonic',
        type: 'беззеркальный',
        stabilization: 'оптическая',
        img: 'panasonic_lumix_dc-g90mee-k_kit_12-60mm_black',
        stock: true,
    },
    {
        num: '28',
        name: 'Panasonic LUMIX DC-TZ200EE-K Black',
        mpix: '20',
        price: '21999',
        manufacturer: 'Panasonic',
        type: 'компакт',
        stabilization: 'оптическая',
        img: 'panasonic_lumix_dc-tz200ee-k_black',
        stock: true,
    },
    {
        num: '29',
        name: 'Panasonic LUMIX DMC-FT30EE-A Blue',
        mpix: '16',
        price: '7499',
        manufacturer: 'Panasonic',
        type: 'компакт',
        stabilization: 'нет',
        img: 'panasonic_lumix_dmc-ft30ee-a_blue',
        stock: true,
    },
    {
        num: '30',
        name: 'Panasonic LUMIX DMC-LX15EEK',
        mpix: '20',
        price: '16999',
        manufacturer: 'Panasonic',
        type: 'компакт',
        stabilization: 'оптическая',
        img: 'panasonic_lumix_dmc-lx15eek',
        stock: true,
    },
    {
        num: '31',
        name: 'Panasonic LUMIX DMC-TZ100EEK',
        mpix: '20',
        price: '15999',
        manufacturer: 'Panasonic',
        type: 'компакт',
        stabilization: 'оптическая',
        img: 'panasonic_lumix_dmc-tz100eek',
        stock: false,
    },
    {
        num: '32',
        name: 'Sony Alpha 7M4 28-70mm Kit Black',
        mpix: '21',
        price: '30999',
        manufacturer: 'Sony',
        type: 'беззеркальный',
        stabilization: 'оптическая',
        img: 'sony_alpha_7m4_28-70mm_kit_black_ilce7m4kb_cec',
        stock: false,
    },
    {
        num: '33',
        name: 'Sony Alpha 9M2 Body Black',
        mpix: '28',
        price: '149999',
        manufacturer: 'Sony',
        type: 'беззеркальный',
        stabilization: 'оптическая',
        img: 'sony_alpha_9m2_body_black_ilce9m2b_cec',
        stock: true,
    },
    {
        num: '34',
        name: 'Sony Cyber-Shot H300 Black',
        mpix: '20',
        price: '7999',
        manufacturer: 'Sony',
        type: 'ультразум',
        stabilization: 'оптическая',
        img: 'sony_cyber-shot_h300_black_dsch300_ru3',
        stock: false,
    },
    {
        num: '35',
        name: 'Sony Cyber-Shot RX10 MkIV',
        mpix: '21',
        price: '59999',
        manufacturer: 'Sony',
        type: 'компакт',
        stabilization: 'оптическая',
        img: 'sony_cyber-shot_rx10_mkiv_dscrx10m4_ru3',
        stock: true,
    },
    {
        num: '36',
        name: 'Sony Cyber-Shot RX100 MkVA Black',
        mpix: '20',
        price: '33999',
        manufacturer: 'Sony',
        type: 'компакт',
        stabilization: 'оптическая',
        img: 'sony_cyber-shot_rx100_mkva_black_dscrx100m5a_ru3',
        stock: false,
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ }),

/***/ "./src/assets/bg-1.jpg":
/*!*****************************!*\
  !*** ./src/assets/bg-1.jpg ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = "images/e7d7ad480612fefc9f78.jpg";

/***/ }),

/***/ "./src/assets/icons/cart-dslr.png":
/*!****************************************!*\
  !*** ./src/assets/icons/cart-dslr.png ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = "images/4ce6625d78e1a53d1672.png";

/***/ }),

/***/ "./src/assets/svg/checkbox-checked.svg":
/*!*********************************************!*\
  !*** ./src/assets/svg/checkbox-checked.svg ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "images/fe4f4918f2a52ef42e73.svg";

/***/ }),

/***/ "./src/assets/svg/checkbox-unchecked.svg":
/*!***********************************************!*\
  !*** ./src/assets/svg/checkbox-unchecked.svg ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "images/70d03136d0b53a62f6cf.svg";

/***/ }),

/***/ "./src/assets/svg/search-clear.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/search-clear.svg ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "images/0ea422c5121ab81a8819.svg";

/***/ }),

/***/ "./src/assets/svg/search.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/search.svg ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = "images/41875c4be4f7a1a52bb1.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ts_shop_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ts/_shop-slider */ "./src/components/ts/_shop-slider.ts");
/* harmony import */ var _components_ts_shop_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ts/_shop-cards */ "./src/components/ts/_shop-cards.ts");
/* harmony import */ var _components_ts_shop_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ts/_shop-filter */ "./src/components/ts/_shop-filter.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.ts");
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.scss */ "./src/global.scss");
/* harmony import */ var _components_ts_shop_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ts/_shop-sort */ "./src/components/ts/_shop-sort.ts");
/* harmony import */ var _components_ts_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ts/_cart */ "./src/components/ts/_cart.ts");
/* harmony import */ var _components_ts_print_selfcheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ts/print-selfcheck */ "./src/components/ts/print-selfcheck.ts");
/* eslint-disable @typescript-eslint/no-unused-vars */








const priceSlider = new _components_ts_shop_slider__WEBPACK_IMPORTED_MODULE_0__["default"]('shop-price', [4999, 164988], 1);
const mpixSlider = new _components_ts_shop_slider__WEBPACK_IMPORTED_MODULE_0__["default"]('shop-mpix', [2, 46], 1);
const cartText = document.querySelector('.cart__text');
const cards = new _components_ts_shop_cards__WEBPACK_IMPORTED_MODULE_1__["default"]();
const sort = new _components_ts_shop_sort__WEBPACK_IMPORTED_MODULE_5__["default"]('.shop-sort__select');
const filters = new _components_ts_shop_filter__WEBPACK_IMPORTED_MODULE_2__["default"]();
const cart = new _components_ts_cart__WEBPACK_IMPORTED_MODULE_6__["default"]();
let filteredData;
// Eventlistener for sorting list
sort.shopSortSelect.addEventListener('change', () => {
    localStorage.setItem('sortOrder', sort.shopSortSelect.value);
    draw();
});
// Eventlistener for search box
const searchBox = document.querySelector('.search-box');
const searchClear = document.querySelector('.search-clear');
searchBox.addEventListener('input', () => {
    searchBox.value ? searchBox.classList.add('with-clear') : searchBox.classList.remove('with-clear');
    draw();
});
searchClear.addEventListener('click', () => {
    searchBox.value = '';
    searchBox.classList.remove('with-clear');
    searchBox.focus();
    draw();
});
// Eventlistener for filter checkboxes
const shopOptions = document.querySelector('.shop-options');
shopOptions.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('checkbox_shop')) {
        const checkboxesChecked = [];
        filters.checkboxes.forEach((chbox, idx) => {
            checkboxesChecked[idx] = chbox.checked;
        });
        localStorage.setItem('checkboxes', JSON.stringify(checkboxesChecked));
        draw();
    }
});
// Eventlistener for sliders
priceSlider.sliderTarget.noUiSlider.on('update', () => {
    draw();
});
priceSlider.sliderTarget.noUiSlider.on('set', () => {
    const prices = priceSlider.sliderTarget.noUiSlider.get();
    localStorage.setItem('prices', JSON.stringify(prices));
});
mpixSlider.sliderTarget.noUiSlider.on('update', () => {
    draw();
});
mpixSlider.sliderTarget.noUiSlider.on('set', () => {
    const mpixes = mpixSlider.sliderTarget.noUiSlider.get();
    localStorage.setItem('mpixes', JSON.stringify(mpixes));
});
// Eventlistener for filter reset button
const filterReset = document.querySelector('.shop-reset-filters');
filterReset.addEventListener('click', () => {
    filters.filtersReset();
    draw();
});
// Eventlistener for all reset button
const allReset = document.querySelector('.shop-reset-storage');
allReset.addEventListener('click', () => {
    filters.filtersReset();
    sort.sortReset();
    cart.clear();
    draw();
});
// Eventlistener for cart toggle
const shopGoods = document.querySelector('.shop-goods');
shopGoods.addEventListener('click', (e) => {
    const target = e.target.closest('.shop-card');
    if (target) {
        cart.toggle(target.children[1].innerText); //Finds name of a card
        draw();
    }
});
// Draw/redraw cards
function draw() {
    filteredData = filters.filter(_data__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const sortedData = sort.sort(filteredData);
    cards.draw(sortedData, cart.cartStorage);
    cart.cartCounter ? cartText.classList.add('has-items') : cartText.classList.remove('has-items');
    cartText.innerText = String(cart.cartCounter);
}
window.onload = _components_ts_print_selfcheck__WEBPACK_IMPORTED_MODULE_7__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJDQUEyQyxtQ0FBbUMsY0FBYyxnQkFBZ0IsR0FBRyxTQUFTLGdIQUFnSCxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxN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TUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLGFBQWEsUUFBUSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksY0FBYyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksY0FBYyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLFFBQVEsTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxhQUFhLFFBQVEsTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLFNBQVMsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLGFBQWEsYUFBYSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxXQUFXLFlBQVksUUFBUSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8s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UyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxzQ0FBc0MseUNBQXlDO0FBQy9FLGtDQUFrQyxxQ0FBcUM7QUFDdkUsbUNBQW1DLHNDQUFzQztBQUN6RSxxQkFBcUIsdUJBQXVCO0FBQzVDLHVCQUF1Qix5QkFBeUI7QUFDaEQseUJBQXlCLDJCQUEyQjtBQUNwRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHVCQUF1QiwwQkFBMEI7QUFDakQsaUNBQWlDLG9DQUFvQztBQUNyRSxxQkFBcUIsdUJBQXVCO0FBQzVDLDJCQUEyQiw4QkFBOEI7QUFDekQsc0JBQXNCLHlCQUF5QjtBQUMvQyxxQkFBcUIsd0JBQXdCO0FBQzdDLHVCQUF1QiwwQkFBMEI7QUFDakQseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNkJBQTZCO0FBQ3ZELHNCQUFzQix5QkFBeUI7QUFDL0Msd0JBQXdCLDJCQUEyQjtBQUNuRCwrQkFBK0IsaUNBQWlDO0FBQ2hFLCtCQUErQixrQ0FBa0M7QUFDakUseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNEJBQTRCO0FBQ3RELGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGdCQUFnQjtBQUNoRztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRyxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLEdBQUcsc0VBQWMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5zY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5zY3NzPzJjMjQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3RzL19jYXJ0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3RzL19zaG9wLWNhcmRzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3RzL19zaG9wLWZpbHRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy90cy9fc2hvcC1zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdHMvX3Nob3Atc29ydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy90cy9wcmludC1zZWxmY2hlY2sudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS10YXJnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktY29ubmVjdHMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5ub1VpLWNvbm5lY3QsXFxuLm5vVWktb3JpZ2luIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG59XFxuLyogT2Zmc2V0IGRpcmVjdGlvblxcbiAqL1xcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBHaXZlIG9yaWdpbnMgMCBoZWlnaHQvd2lkdGggc28gdGhleSBkb24ndCBpbnRlcmZlcmUgd2l0aCBjbGlja2luZyB0aGVcXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiB7XFxuICB0b3A6IC0xMDAlO1xcbiAgd2lkdGg6IDA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGhlaWdodDogMDtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9VaS10b3VjaC1hcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuLm5vVWktc3RhdGUtZHJhZyAqIHtcXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG4vKiBTbGlkZXIgc2l6ZSBhbmQgaGFuZGxlIHBsYWNlbWVudDtcXG4gKi9cXG4ubm9VaS1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICByaWdodDogLTE3cHg7XFxuICB0b3A6IC02cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAxOHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICByaWdodDogLTZweDtcXG4gIGJvdHRvbTogLTE3cHg7XFxufVxcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgbGVmdDogLTE3cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogU3R5bGluZztcXG4gKiBHaXZpbmcgdGhlIGNvbm5lY3QgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgY2F1c2VzIGlzc3VlcyB3aXRoIHVzaW5nIHRyYW5zZm9ybTogc2NhbGVcXG4gKi9cXG4ubm9VaS10YXJnZXQge1xcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI0YwRjBGMCwgMCAzcHggNnB4IC01cHggI0JCQjtcXG59XFxuLm5vVWktY29ubmVjdHMge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICMzRkI4QUY7XFxufVxcbi8qIEhhbmRsZXMgYW5kIGN1cnNvcnM7XFxuICovXFxuLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNFQkVCRUIsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi5ub1VpLWFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRERELCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4vKiBIYW5kbGUgc3RyaXBlcztcXG4gKi9cXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFOEU3RTY7XFxuICBsZWZ0OiAxNHB4O1xcbiAgdG9wOiA2cHg7XFxufVxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBsZWZ0OiAxN3B4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbGVmdDogNnB4O1xcbiAgdG9wOiAxNHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgdG9wOiAxN3B4O1xcbn1cXG4vKiBEaXNhYmxlZCBzdGF0ZTtcXG4gKi9cXG5bZGlzYWJsZWRdIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogI0I4QjhCODtcXG59XFxuW2Rpc2FibGVkXS5ub1VpLXRhcmdldCxcXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi8qIEJhc2U7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLFxcbi5ub1VpLXBpcHMgKiB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS1waXBzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4vKiBWYWx1ZXM7XFxuICpcXG4gKi9cXG4ubm9VaS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubm9VaS12YWx1ZS1zdWIge1xcbiAgY29sb3I6ICNjY2M7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi8qIE1hcmtpbmdzO1xcbiAqXFxuICovXFxuLm5vVWktbWFya2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNDQ0M7XFxufVxcbi5ub1VpLW1hcmtlci1zdWIge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi8qIEhvcml6b250YWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy1ob3Jpem9udGFsIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGhlaWdodDogODBweDtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG4ubm9VaS10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEyMCU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTIwJTtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDI4cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFO0FBQ0Y7O0VBRUUsMkJBQTJCO0VBQzNCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFO0FBQ0Y7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFO0FBQ0Y7RUFDRSxPQUFPO0VBQ1AsV0FBVztBQUNiO0FBQ0E7O0VBRUU7QUFDRjtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTs7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QixTQUFTO0VBQ1QsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS10YXJnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktY29ubmVjdHMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5ub1VpLWNvbm5lY3QsXFxuLm5vVWktb3JpZ2luIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG59XFxuLyogT2Zmc2V0IGRpcmVjdGlvblxcbiAqL1xcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBHaXZlIG9yaWdpbnMgMCBoZWlnaHQvd2lkdGggc28gdGhleSBkb24ndCBpbnRlcmZlcmUgd2l0aCBjbGlja2luZyB0aGVcXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiB7XFxuICB0b3A6IC0xMDAlO1xcbiAgd2lkdGg6IDA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGhlaWdodDogMDtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9VaS10b3VjaC1hcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuLm5vVWktc3RhdGUtZHJhZyAqIHtcXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG4vKiBTbGlkZXIgc2l6ZSBhbmQgaGFuZGxlIHBsYWNlbWVudDtcXG4gKi9cXG4ubm9VaS1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICByaWdodDogLTE3cHg7XFxuICB0b3A6IC02cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAxOHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICByaWdodDogLTZweDtcXG4gIGJvdHRvbTogLTE3cHg7XFxufVxcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgbGVmdDogLTE3cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogU3R5bGluZztcXG4gKiBHaXZpbmcgdGhlIGNvbm5lY3QgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgY2F1c2VzIGlzc3VlcyB3aXRoIHVzaW5nIHRyYW5zZm9ybTogc2NhbGVcXG4gKi9cXG4ubm9VaS10YXJnZXQge1xcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI0YwRjBGMCwgMCAzcHggNnB4IC01cHggI0JCQjtcXG59XFxuLm5vVWktY29ubmVjdHMge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICMzRkI4QUY7XFxufVxcbi8qIEhhbmRsZXMgYW5kIGN1cnNvcnM7XFxuICovXFxuLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNFQkVCRUIsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi5ub1VpLWFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRERELCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4vKiBIYW5kbGUgc3RyaXBlcztcXG4gKi9cXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFOEU3RTY7XFxuICBsZWZ0OiAxNHB4O1xcbiAgdG9wOiA2cHg7XFxufVxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBsZWZ0OiAxN3B4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbGVmdDogNnB4O1xcbiAgdG9wOiAxNHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgdG9wOiAxN3B4O1xcbn1cXG4vKiBEaXNhYmxlZCBzdGF0ZTtcXG4gKi9cXG5bZGlzYWJsZWRdIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogI0I4QjhCODtcXG59XFxuW2Rpc2FibGVkXS5ub1VpLXRhcmdldCxcXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi8qIEJhc2U7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLFxcbi5ub1VpLXBpcHMgKiB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS1waXBzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4vKiBWYWx1ZXM7XFxuICpcXG4gKi9cXG4ubm9VaS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubm9VaS12YWx1ZS1zdWIge1xcbiAgY29sb3I6ICNjY2M7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi8qIE1hcmtpbmdzO1xcbiAqXFxuICovXFxuLm5vVWktbWFya2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNDQ0M7XFxufVxcbi5ub1VpLW1hcmtlci1zdWIge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi8qIEhvcml6b250YWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy1ob3Jpem9udGFsIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGhlaWdodDogODBweDtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG4ubm9VaS10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEyMCU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTIwJTtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDI4cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvYmctMS5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL3NlYXJjaC5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL3NlYXJjaC1jbGVhci5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2FydC1kc2xyLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvY2hlY2tib3gtdW5jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvY2hlY2tib3gtY2hlY2tlZC5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsZWdyZXlhK1NhbnM6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJwbnVtXFxcIiBvbiwgXFxcImxudW1cXFwiIG9uO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJhY2tncm91bmQ6IGZpeGVkIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAsXFxudWwsXFxub2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuLmhlYWRlcl9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtd2lkdGg6IDE3MjBweDtcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiA2MHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5NiU7XFxuICAgIGdhcDogMjVweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzOXB4KSB7XFxuICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzIwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogNDJweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAubmF2aWdhdGlvbiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX19saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhlYWRlcl9fbGlua19zcGFuOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSg1ODk0JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTEzJSk7XFxufVxcblxcbi5oZWFkZXJfX2ljb25fbWFpbiB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcXG4gIC5oZWFkZXJfX2ljb25fbWFpbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaGVhZGVyX19pY29uX21haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIC5oZWFkZXJfX2ljb25fbWFpbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5oZWFkZXJfX2ljb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBvcmRlcjogNDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5zaG9wLW9wdGlvbnNfX3NvcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLnNob3Atb3B0aW9uc19fc29ydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzlweCkge1xcbiAgLnNob3Atb3B0aW9uc19fc29ydCB7XFxuICAgIG9yZGVyOiAzO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODlweCkge1xcbiAgLnNob3Atb3B0aW9uc19fc29ydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1vcHRpb25zX190ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxuLnNob3Atc29ydF9fc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzdmN2Y3ZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLnNob3Atc29ydF9fc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTM5cHgpIHtcXG4gIC5zaG9wLXNvcnRfX3NlbGVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODlweCkge1xcbiAgLnNob3Atc29ydF9fc2VsZWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICB9XFxufVxcblxcbi5zaG9wLXNvcnRfX29wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGNEY1O1xcbn1cXG5cXG4uc2VhcmNoLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMCA0NXB4IDAgMjBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6ICMxOTE5MTk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAyMHB4IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxufVxcblxcbi53aXRoLWNsZWFyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi5zZWFyY2gtY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDhweCA2MHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmNhcnRfX3RleHQge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmN2Y3ZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAtMjZweDtcXG59XFxuXFxuLmhhcy1pdGVtcyB7XFxuICBjb2xvcjogI0YyRjRGNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuZm9vdGVyX19jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlcl9fdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5mb290ZXJfX3RleHQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcblxcbi5mb290ZXJfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLmZvb3Rlcl9fbGluayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlcl9fbGluazpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uZm9vdGVyX19pbWFnZS1SUyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5mb290ZXJfX2ltYWdlLUdIIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNob3AtcGFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNob3AtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTcyMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5zaG9wLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5OCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxMHB4IDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNob3AtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLnNob3AtbGVmdC1zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3AtbGVmdC1zaWRlIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNob3AtbGVmdC1zaWRlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICB9XFxufVxcblxcbi5kcm9wZG93bi1maWx0ZXJzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuZHJvcGRvd24tZmlsdGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxuICB9XFxufVxcblxcbi5kcm9wZG93bi1maWx0ZXJzX19pbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5zaG9wLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDYzMHB4O1xcbiAgbWF4LWhlaWdodDogNzcwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3Atb3B0aW9ucyB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNob3Atb3B0aW9ucyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1tYWtlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3AtbWFrZXJfX2xpc3QsXFxuLnNob3AtdHlwZV9fbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMTBweDtcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1tYWtlcl9fbGlzdCxcXG4uc2hvcC10eXBlX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuc2hvcC1tYWtlcl9fbGlzdCxcXG4uc2hvcC10eXBlX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1tYWtlcl9fc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hvcC1tYWtlcl9fb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaG9wLW1ha2VyX19vcHRpb246aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcXG4gIC5zaG9wLW1ha2VyX19vcHRpb24ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLmNoZWNrYm94X3Nob3A6Y2hlY2tlZCArIC5zaG9wLW1ha2VyX19vcHRpb24sXFxuLmNoZWNrYm94X3Nob3A6Y2hlY2tlZCArIC5zaG9wLW9wdGlvbnNfX3RleHQge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuXFxuLmNoZWNrYm94LW5vbmU6Y2hlY2tlZCArIC5zaG9wLW1ha2VyX19pbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuXFxuLmNoZWNrYm94LW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zaG9wLW1ha2VyX19pbWcge1xcbiAgaGVpZ2h0OiAxN3B4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xcbiAgLnNob3AtbWFrZXJfX2ltZyB7XFxuICAgIGhlaWdodDogMTRweDtcXG4gIH1cXG59XFxuXFxuLmNoZWNrYm94X3Nob3Age1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG4uY2hlY2tib3hfc2hvcDpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG4uY2hlY2tib3hfc2hvcDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbn1cXG5cXG4uc2hvcC1wcmljZSxcXG4uc2hvcC1tcGl4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIGhlaWdodDogNHB4O1xcbiAgbWFyZ2luOiAwIDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICM3ZjdmN2Y7XFxufVxcbi5zbGlkZXIgLm5vVWktaGFuZGxlOjpiZWZvcmUsIC5zbGlkZXIgLm5vVWktaGFuZGxlOjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2xpZGVyIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogI2MwMDtcXG59XFxuLnNsaWRlciAubm9VaS1oYW5kbGUge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICB0b3A6IC02cHg7XFxuICByaWdodDogLThweDtcXG4gIC8qIGhhbGYgdGhlIHdpZHRoICovXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG59XFxuLnNsaWRlciAubm9VaS1oYW5kbGUgLm5vVWktdG91Y2gtYXJlYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMHB4O1xcbiAgbGVmdDogLTEwcHg7XFxuICByaWdodDogLTEwcHg7XFxuICBib3R0b206IC0xMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkZXJfX2xhYmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2hvcC1wcmljZV9fbGFiZWxzLWxvdyxcXG4uc2hvcC1wcmljZV9fbGFiZWxzLWhpZ2gsXFxuLnNob3AtbXBpeF9fbGFiZWxzLWxvdyxcXG4uc2hvcC1tcGl4X19sYWJlbHMtaGlnaCB7XFxuICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICBjb2xvcjogIzMwMzAzMDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2hvcC10eXBlLFxcbi5zaG9wLXN0YWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaG9wLXN0YWJfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1zdGFiX19saXN0IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5zaG9wLXN0YWJfX2xpc3Qge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDUlO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1zdGFiX19vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaG9wLXN0YWJfX29wdGlvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xcbiAgLnNob3Atc3RhYl9fb3B0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1zdG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmJ0bl9zdG9jayB7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuLnNob3AtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3AtcmVzZXQtZmlsdGVycyxcXG4uc2hvcC1yZXNldC1zdG9yYWdlIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNGMkY0RjU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMxOTE5MTk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjN2Y3ZjdmO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLXJlc2V0LWZpbHRlcnMsXFxuLnNob3AtcmVzZXQtc3RvcmFnZSB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbi5zaG9wLXJlc2V0LWZpbHRlcnM6aG92ZXIsXFxuLnNob3AtcmVzZXQtc3RvcmFnZTpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzAwO1xcbn1cXG5cXG4uc2hvcC1yZXNldC1maWx0ZXJzOmFjdGl2ZSxcXG4uc2hvcC1yZXNldC1zdG9yYWdlOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjYzAwO1xcbn1cXG5cXG4uc2hvcC1nb29kcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTJweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1nb29kcyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5zaG9wLWdvb2RzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcXG4gIC5zaG9wLWdvb2RzIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxufVxcblxcbi5tb2RhbC1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNob3AtcG9wdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogNDB2aCBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMDA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDVweCAxMHB4IDEwcHg7XFxuICBhbmltYXRpb24tbmFtZTogYXBwZWFyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNob3AtcG9wdXBfX2J1dHRvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuLnNob3AtcG9wdXBfX2J1dHRvbjpob3ZlciwgLnNob3AtcG9wdXBfX2J1dHRvbjpmb2N1cyB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hvcC1wb3B1cF9fdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW46IDQwcHggMjBweCAyNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNob3Atb3B0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgI2Ryb3Bkb3duLWZpbHRlcnM6Y2hlY2tlZCB+IC5zaG9wLW9wdGlvbnMge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDYyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xcbiAgZnJvbSB7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBoZWlnaHQ6IDYyMHB4O1xcbiAgfVxcbn1cXG4uZHJvcGRvd25fX3RleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi0J/QvtC60LDQt9Cw0YLRjCBcXFwiO1xcbn1cXG5cXG4jZHJvcGRvd24tZmlsdGVyczpjaGVja2VkIH4gLmRyb3Bkb3duLWZpbHRlcnMgPiAuZHJvcGRvd25fX3RleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi0KHQutGA0YvRgtGMIFxcXCI7XFxufVxcblxcbiNkcm9wZG93bi1maWx0ZXJzOmNoZWNrZWQgfiAuZHJvcGRvd24tZmlsdGVycyA+IC5kcm9wZG93bi1maWx0ZXJzX19pbWcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLnNob3AtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaG9wLWNhcmQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggMHB4IDJweCAwLjAwMTQ0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIC5zaG9wLWNhcmQge1xcbiAgICB3aWR0aDogNDglO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcXG4gIC5zaG9wLWNhcmQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1jYXJkX19uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG4gIGhlaWdodDogNTJweDtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIC5zaG9wLWNhcmRfX25hbWUge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAuc2hvcC1jYXJkX19uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gIH1cXG59XFxuXFxuLnNob3AtY2FyZF9fcHJpY2UtbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNob3AtY2FyZF9fYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgLnNob3AtY2FyZF9fYmxvY2sge1xcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICAgIHJvdy1nYXA6IDA7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLnRleHQtYmlnIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBsaW5lLWhlaWdodDogMzFweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcXG4gIC50ZXh0LWJpZyB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICB9XFxufVxcblxcbi50ZXh0LWF1eCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogIzdmN2Y3ZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcXG4gIC50ZXh0LWF1eCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICB9XFxufVxcblxcbi5zaG9wLWNhcmRfX3ByaWNlLW1waXgsXFxuLnNob3AtY2FyZF9fc3RvY2stY2FydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgLnNob3AtY2FyZF9fcHJpY2UtbXBpeCxcXG4uc2hvcC1jYXJkX19zdG9jay1jYXJ0IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIC5zaG9wLWNhcmRfX3R5cGUtc3RhYiB7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4udGV4dC1pbi1zdG9jayB7XFxuICBjb2xvcjogI2MwMDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIC50ZXh0LWluLXN0b2NrIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4udGV4dC1vdXQtb2Ytc3RvY2sge1xcbiAgY29sb3I6ICM3ZjdmN2Y7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAudGV4dC1vdXQtb2Ytc3RvY2sge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi50ZXh0LW5vLWNhcmRzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnNob3AtY2FyZF9fY2FydCB7XFxuICB3aWR0aDogMTE5cHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlcjogIzE5MTkxOSAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgLnNob3AtY2FyZF9fY2FydCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICB9XFxufVxcblxcbi5hZGRlZCB7XFxuICBiYWNrZ3JvdW5kOiAjYzAwO1xcbiAgYm9yZGVyOiAjYzAwIDJweCBzb2xpZDtcXG4gIGNvbG9yOiAjRjJGNEY1O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zYXNzL19nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc2Fzcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Nhc3MvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zYXNzL19zaG9wLXBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc2Fzcy9fc2hvcC1jYXJkLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDV2hCO0VBQ0Usc0JBQUE7QURQRjs7QUNVQTs7OztFQUlFLHdCQUFBO0FEUEY7O0FDVUE7RUFDRSx3Q0FmVTtFQWdCViwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQXZCVztFQXdCWCxnRkFBQTtBRFBGOztBQ1dBO0VBQ0UsYUFBQTtBRFJGOztBQ1dBOzs7Ozs7RUFNRSxTQUFBO0VBQ0EsVUFBQTtBRFJGOztBQ1dBO0VBQ0UscUJBQUE7QURSRjs7QUNXQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBRFJGOztBQ1dBO0VBQ0UsYUFBQTtBRFJGOztBRWpEQTtFQUVFLHdDREtZO0VDSlosa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRm1ERjs7QUVoREE7RUFD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Qkp2SWM7RUl3SWQseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDSnBJVTtFSXFJVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUx1MUJGO0FLcjFCRTtFQWJGO0lBY0ksV0FBQTtJQUNBLGVBQUE7RUx3MUJGO0FBQ0Y7O0FLcjFCQTtFQUNFLGdCSnRKYTtFSXVKYixzQkFBQTtFQUNBLGNKdkprQjtFSXdKbEIsZ0JBQUE7QUx3MUJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxlZ3JleWErU2Fuczp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCAnbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzJztcXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXFxcInBudW1cXFwiIG9uLCBcXFwibG51bVxcXCIgb247XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjMTkxOTE5O1xcbiAgYmFja2dyb3VuZDogZml4ZWQgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciB1cmwoXFxcIi4vYXNzZXRzL2JnLTEuanBnXFxcIik7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5wLFxcbnVsLFxcbm9sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiAxNzIwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogNjBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICB3aWR0aDogOTYlO1xcbiAgICBnYXA6IDI1cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzlweCkge1xcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLm5hdmlnYXRpb24ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXFxuLmhlYWRlcl9fbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5oZWFkZXJfX2xpbmtfc3Bhbjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uX21haW4ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XFxuICAuaGVhZGVyX19pY29uX21haW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlcl9faWNvbl9tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAuaGVhZGVyX19pY29uX21haW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX19pY29uIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgb3JkZXI6IDQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1vcHRpb25zX19zb3J0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5zaG9wLW9wdGlvbnNfX3NvcnQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTM5cHgpIHtcXG4gIC5zaG9wLW9wdGlvbnNfX3NvcnQge1xcbiAgICBvcmRlcjogMztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg5cHgpIHtcXG4gIC5zaG9wLW9wdGlvbnNfX3NvcnQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLnNob3Atb3B0aW9uc19fdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbi5zaG9wLXNvcnRfX3NlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6ICM3ZjdmN2Y7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5zaG9wLXNvcnRfX3NlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzOXB4KSB7XFxuICAuc2hvcC1zb3J0X19zZWxlY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg5cHgpIHtcXG4gIC5zaG9wLXNvcnRfX3NlbGVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1zb3J0X19vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjRGNTtcXG59XFxuXFxuLnNlYXJjaC1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaC1ib3gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAgNDVweCAwIDIwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGNvbG9yOiAjMTkxOTE5O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvc3ZnL3NlYXJjaC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAyMHB4IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxufVxcblxcbi53aXRoLWNsZWFyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvc3ZnL3NlYXJjaC1jbGVhci5zdmdcXFwiKTtcXG59XFxuXFxuLnNlYXJjaC1jbGVhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2ljb25zL2NhcnQtZHNsci5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDhweCA2MHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmNhcnRfX3RleHQge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmN2Y3ZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAtMjZweDtcXG59XFxuXFxuLmhhcy1pdGVtcyB7XFxuICBjb2xvcjogI0YyRjRGNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuZm9vdGVyX19jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlcl9fdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5mb290ZXJfX3RleHQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcblxcbi5mb290ZXJfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLmZvb3Rlcl9fbGluayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlcl9fbGluazpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uZm9vdGVyX19pbWFnZS1SUyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5mb290ZXJfX2ltYWdlLUdIIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNob3AtcGFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNob3AtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTcyMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5zaG9wLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5OCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxMHB4IDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNob3AtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLnNob3AtbGVmdC1zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3AtbGVmdC1zaWRlIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNob3AtbGVmdC1zaWRlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICB9XFxufVxcblxcbi5kcm9wZG93bi1maWx0ZXJzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuZHJvcGRvd24tZmlsdGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxuICB9XFxufVxcblxcbi5kcm9wZG93bi1maWx0ZXJzX19pbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5zaG9wLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDYzMHB4O1xcbiAgbWF4LWhlaWdodDogNzcwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3Atb3B0aW9ucyB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNob3Atb3B0aW9ucyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1tYWtlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3AtbWFrZXJfX2xpc3QsXFxuLnNob3AtdHlwZV9fbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMTBweDtcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1tYWtlcl9fbGlzdCxcXG4uc2hvcC10eXBlX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuc2hvcC1tYWtlcl9fbGlzdCxcXG4uc2hvcC10eXBlX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1tYWtlcl9fc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hvcC1tYWtlcl9fb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaG9wLW1ha2VyX19vcHRpb246aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcXG4gIC5zaG9wLW1ha2VyX19vcHRpb24ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLmNoZWNrYm94X3Nob3A6Y2hlY2tlZCArIC5zaG9wLW1ha2VyX19vcHRpb24sXFxuLmNoZWNrYm94X3Nob3A6Y2hlY2tlZCArIC5zaG9wLW9wdGlvbnNfX3RleHQge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuXFxuLmNoZWNrYm94LW5vbmU6Y2hlY2tlZCArIC5zaG9wLW1ha2VyX19pbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuXFxuLmNoZWNrYm94LW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zaG9wLW1ha2VyX19pbWcge1xcbiAgaGVpZ2h0OiAxN3B4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xcbiAgLnNob3AtbWFrZXJfX2ltZyB7XFxuICAgIGhlaWdodDogMTRweDtcXG4gIH1cXG59XFxuXFxuLmNoZWNrYm94X3Nob3Age1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoLi9hc3NldHMvc3ZnL2NoZWNrYm94LXVuY2hlY2tlZC5zdmcpO1xcbn1cXG4uY2hlY2tib3hfc2hvcDpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG4uY2hlY2tib3hfc2hvcDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoLi9hc3NldHMvc3ZnL2NoZWNrYm94LWNoZWNrZWQuc3ZnKTtcXG59XFxuXFxuLnNob3AtcHJpY2UsXFxuLnNob3AtbXBpeCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjN2Y3ZjdmO1xcbn1cXG4uc2xpZGVyIC5ub1VpLWhhbmRsZTo6YmVmb3JlLCAuc2xpZGVyIC5ub1VpLWhhbmRsZTo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNsaWRlciAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNjMDA7XFxufVxcbi5zbGlkZXIgLm5vVWktaGFuZGxlIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgdG9wOiAtNnB4O1xcbiAgcmlnaHQ6IC04cHg7XFxuICAvKiBoYWxmIHRoZSB3aWR0aCAqL1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxufVxcbi5zbGlkZXIgLm5vVWktaGFuZGxlIC5ub1VpLXRvdWNoLWFyZWEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTBweDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYm90dG9tOiAtMTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGVyX19sYWJlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNob3AtcHJpY2VfX2xhYmVscy1sb3csXFxuLnNob3AtcHJpY2VfX2xhYmVscy1oaWdoLFxcbi5zaG9wLW1waXhfX2xhYmVscy1sb3csXFxuLnNob3AtbXBpeF9fbGFiZWxzLWhpZ2gge1xcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgY29sb3I6ICMzMDMwMzA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNob3AtdHlwZSxcXG4uc2hvcC1zdGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hvcC1zdGFiX19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3Atc3RhYl9fbGlzdCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuc2hvcC1zdGFiX19saXN0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1JTtcXG4gIH1cXG59XFxuXFxuLnNob3Atc3RhYl9fb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2hvcC1zdGFiX19vcHRpb246aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcXG4gIC5zaG9wLXN0YWJfX29wdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG59XFxuXFxuLnNob3Atc3RvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5idG5fc3RvY2sge1xcbiAgb3JkZXI6IDE7XFxufVxcblxcbi5zaG9wLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaG9wLXJlc2V0LWZpbHRlcnMsXFxuLnNob3AtcmVzZXQtc3RvcmFnZSB7XFxuICB3aWR0aDogMjQwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjRjJGNEY1O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMTkxOTE5O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzdmN2Y3ZjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1yZXNldC1maWx0ZXJzLFxcbi5zaG9wLXJlc2V0LXN0b3JhZ2Uge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1yZXNldC1maWx0ZXJzOmhvdmVyLFxcbi5zaG9wLXJlc2V0LXN0b3JhZ2U6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2MwMDtcXG59XFxuXFxuLnNob3AtcmVzZXQtZmlsdGVyczphY3RpdmUsXFxuLnNob3AtcmVzZXQtc3RvcmFnZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2MwMDtcXG59XFxuXFxuLnNob3AtZ29vZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDEycHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3AtZ29vZHMge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuc2hvcC1nb29kcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XFxuICAuc2hvcC1nb29kcyB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaG9wLXBvcHVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDQwdmggYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzAwO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSA1cHggMTBweCAxMHB4O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFwcGVhcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5zaG9wLXBvcHVwX19idXR0b24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcbi5zaG9wLXBvcHVwX19idXR0b246aG92ZXIsIC5zaG9wLXBvcHVwX19idXR0b246Zm9jdXMge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNob3AtcG9wdXBfX3RleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luOiA0MHB4IDIwcHggMjVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5zaG9wLW9wdGlvbnMge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICNkcm9wZG93bi1maWx0ZXJzOmNoZWNrZWQgfiAuc2hvcC1vcHRpb25zIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiA2MjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcXG4gIGZyb20ge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgaGVpZ2h0OiA2MjBweDtcXG4gIH1cXG59XFxuLmRyb3Bkb3duX190ZXh0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcItCf0L7QutCw0LfQsNGC0YwgXFxcIjtcXG59XFxuXFxuI2Ryb3Bkb3duLWZpbHRlcnM6Y2hlY2tlZCB+IC5kcm9wZG93bi1maWx0ZXJzID4gLmRyb3Bkb3duX190ZXh0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcItCh0LrRgNGL0YLRjCBcXFwiO1xcbn1cXG5cXG4jZHJvcGRvd24tZmlsdGVyczpjaGVja2VkIH4gLmRyb3Bkb3duLWZpbHRlcnMgPiAuZHJvcGRvd24tZmlsdGVyc19faW1nIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5zaG9wLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2hvcC1jYXJkOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDBweCAycHggMC4wMDE0NHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAuc2hvcC1jYXJkIHtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAuc2hvcC1jYXJkIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG4gIH1cXG59XFxuXFxuLnNob3AtY2FyZF9fbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICBoZWlnaHQ6IDUycHg7XFxuICBmb250LXNpemU6IDIxcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAuc2hvcC1jYXJkX19uYW1lIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xcbiAgLnNob3AtY2FyZF9fbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB9XFxufVxcblxcbi5zaG9wLWNhcmRfX3ByaWNlLW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaG9wLWNhcmRfX2Jsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBnYXA6IDVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIC5zaG9wLWNhcmRfX2Jsb2NrIHtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbiAgICByb3ctZ2FwOiAwO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi50ZXh0LWJpZyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAudGV4dC1iaWcge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgfVxcbn1cXG5cXG4udGV4dC1hdXgge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgY29sb3I6ICM3ZjdmN2Y7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAudGV4dC1hdXgge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1jYXJkX19wcmljZS1tcGl4LFxcbi5zaG9wLWNhcmRfX3N0b2NrLWNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIC5zaG9wLWNhcmRfX3ByaWNlLW1waXgsXFxuLnNob3AtY2FyZF9fc3RvY2stY2FydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDA7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAuc2hvcC1jYXJkX190eXBlLXN0YWIge1xcbiAgICBnYXA6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLnRleHQtaW4tc3RvY2sge1xcbiAgY29sb3I6ICNjMDA7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAudGV4dC1pbi1zdG9jayB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLnRleHQtb3V0LW9mLXN0b2NrIHtcXG4gIGNvbG9yOiAjN2Y3ZjdmO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgLnRleHQtb3V0LW9mLXN0b2NrIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4udGV4dC1uby1jYXJkcyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5zaG9wLWNhcmRfX2NhcnQge1xcbiAgd2lkdGg6IDExOXB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZDogIzE5MTkxOTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBib3JkZXI6ICMxOTE5MTkgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIC5zaG9wLWNhcmRfX2NhcnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgfVxcbn1cXG5cXG4uYWRkZWQge1xcbiAgYmFja2dyb3VuZDogI2MwMDtcXG4gIGJvcmRlcjogI2MwMCAycHggc29saWQ7XFxuICBjb2xvcjogI0YyRjRGNTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxlZ3JleWErU2Fuczp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuLy8gJHByaW1hcnktY29sb3I6ICNmZmY7XFxuJHByaW1hcnktY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXG4kYWNjZW50LWNvbG9yOiAjYzAwO1xcbiRhY2NlbnQtZGFyay1jb2xvcjogI0YyRjRGNTtcXG4kdGV4dC1jb2xvcjogIzE5MTkxOTtcXG4kdGV4dC1zZWNvbmRhcnktY29sb3I6ICM3ZjdmN2Y7XFxuJGZvbnQtaGVhZGVyOiAnQWxlZ3JleWEgU2FucycsIHNhbnMtc2VyaWY7XFxuJGZvbnQtbWFpbjogJ0FsZWdyZXlhIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiRob3Zlci1lZmZlY3Q6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAncG51bScgb24sICdsbnVtJyBvbjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgYmFja2dyb3VuZDogZml4ZWQgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciB1cmwoXFxcIi4vYXNzZXRzL2JnLTEuanBnXFxcIik7XFxuICAvLyBiYWNrZ3JvdW5kOiAkYWNjZW50LWRhcmstY29sb3I7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAsXFxudWwsXFxub2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIixcIi5oZWFkZXIge1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1kYXJrLWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICRmb250LWhlYWRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4uaGVhZGVyX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMTcyMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDYwcHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gICAgd2lkdGg6IDk2JTtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcm93LWdhcDogMTBweDtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzOXB4KSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGdhcDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX19saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyX19saW5rX3NwYW46aG92ZXIge1xcbiAgZmlsdGVyOiAkaG92ZXItZWZmZWN0O1xcbn1cXG5cXG4uaGVhZGVyX19pY29uX21haW4ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX19pY29uIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIG9yZGVyOiA0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLnNob3Atb3B0aW9uc19fc29ydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzOXB4KSB7XFxuICAgIG9yZGVyOiAzO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg5cHgpIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbi5zaG9wLW9wdGlvbnNfX3RleHQge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LWhlYWRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG59XFxuXFxuLnNob3Atc29ydF9fc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeS1jb2xvcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzOXB4KSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg5cHgpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICB9XFxufVxcblxcbi5zaG9wLXNvcnRfX29wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWRhcmstY29sb3I7XFxufVxcblxcbi5zZWFyY2gtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICRmb250LWhlYWRlcjtcXG4gIHBhZGRpbmc6IDAgNDVweCAwIDIwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zZWFyY2guc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMjBweCBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbn1cXG5cXG4ud2l0aC1jbGVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zZWFyY2gtY2xlYXIuc3ZnXFxcIik7XFxufVxcblxcbi5zZWFyY2gtY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9pY29ucy9jYXJ0LWRzbHIucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQ4cHggNjBweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5jYXJ0X190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtc2Vjb25kYXJ5LWNvbG9yO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IC0yNnB4O1xcbn1cXG5cXG4uaGFzLWl0ZW1zIHtcXG4gIGNvbG9yOiAkYWNjZW50LWRhcmstY29sb3I7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xcbn1cIixcIi5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LWZhbWlseTogJGZvbnQtaGVhZGVyO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyX190ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyX19saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyX19saW5rOmhvdmVyIHtcXG4gIGZpbHRlcjogJGhvdmVyLWVmZmVjdDtcXG59XFxuXFxuLmZvb3Rlcl9faW1hZ2UtUlMge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uZm9vdGVyX19pbWFnZS1HSCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVwiLFwiQGltcG9ydCAnbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzJztcXG5cXG4uc2hvcC1wYWdlIHtcXG4gIC8vIGJhY2tncm91bmQ6ICRhY2NlbnQtZGFyay1jb2xvcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hvcC1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxNzIwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDE1cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjEwcHggMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1sZWZ0LXNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzUwcHg7XFxuICBnYXA6IDE1cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIH1cXG59XFxuXFxuLmRyb3Bkb3duLWZpbHRlcnMge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG4gIH1cXG59XFxuXFxuLmRyb3Bkb3duLWZpbHRlcnNfX2ltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnNob3Atb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMTBweCk7XFxuICBtaW4taGVpZ2h0OiA2MzBweDtcXG4gIG1heC1oZWlnaHQ6IDc3MHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXFxuLnNob3AtbWFrZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaG9wLW1ha2VyX19saXN0LFxcbi5zaG9wLXR5cGVfX2xpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDEwcHg7XFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxufVxcblxcbi5zaG9wLW1ha2VyX19zZWxlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaG9wLW1ha2VyX19vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGZpbHRlcjogJGhvdmVyLWVmZmVjdDtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4uY2hlY2tib3hfc2hvcDpjaGVja2VkKy5zaG9wLW1ha2VyX19vcHRpb24sXFxuLmNoZWNrYm94X3Nob3A6Y2hlY2tlZCsuc2hvcC1vcHRpb25zX190ZXh0IHtcXG4gIGZpbHRlcjogJGhvdmVyLWVmZmVjdDtcXG59XFxuXFxuLmNoZWNrYm94LW5vbmU6Y2hlY2tlZCsuc2hvcC1tYWtlcl9faW1nIHtcXG4gIGZpbHRlcjogJGhvdmVyLWVmZmVjdDtcXG59XFxuXFxuLmNoZWNrYm94LW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zaG9wLW1ha2VyX19pbWcge1xcbiAgaGVpZ2h0OiAxN3B4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgfVxcbn1cXG5cXG4uY2hlY2tib3hfc2hvcCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBtYXJnaW46IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb250YWluIHVybCguL2Fzc2V0cy9zdmcvY2hlY2tib3gtdW5jaGVja2VkLnN2Zyk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgZmlsdGVyOiAkaG92ZXItZWZmZWN0O1xcbiAgfVxcblxcbiAgJjpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb250YWluIHVybCguL2Fzc2V0cy9zdmcvY2hlY2tib3gtY2hlY2tlZC5zdmcpO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1wcmljZSxcXG4uc2hvcC1tcGl4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIGhlaWdodDogNHB4O1xcbiAgbWFyZ2luOiAwIDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICR0ZXh0LXNlY29uZGFyeS1jb2xvcjtcXG5cXG4gICYgLm5vVWktaGFuZGxlOjpiZWZvcmUsXFxuICAmIC5ub1VpLWhhbmRsZTo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgJiAubm9VaS1jb25uZWN0IHtcXG4gICAgYmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjtcXG4gIH1cXG5cXG4gICYgLm5vVWktaGFuZGxlIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICByaWdodDogLThweDtcXG4gICAgLyogaGFsZiB0aGUgd2lkdGggKi9cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gIH1cXG5cXG4gICYgLm5vVWktaGFuZGxlIC5ub1VpLXRvdWNoLWFyZWEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTEwcHg7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLnNsaWRlcl9fbGFiZWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaG9wLXByaWNlX19sYWJlbHMtbG93LFxcbi5zaG9wLXByaWNlX19sYWJlbHMtaGlnaCxcXG4uc2hvcC1tcGl4X19sYWJlbHMtbG93LFxcbi5zaG9wLW1waXhfX2xhYmVscy1oaWdoIHtcXG4gIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIGNvbG9yOiAjMzAzMDMwO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zaG9wLXR5cGUsXFxuLnNob3Atc3RhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3Atc3RhYl9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDUlO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1zdGFiX19vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBmaWx0ZXI6ICRob3Zlci1lZmZlY3Q7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxufVxcblxcbi5zaG9wLXN0b2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYnRuX3N0b2NrIHtcXG4gIG9yZGVyOiAxO1xcbn1cXG5cXG4uc2hvcC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hvcC1yZXNldC1maWx0ZXJzLFxcbi5zaG9wLXJlc2V0LXN0b3JhZ2Uge1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogJGFjY2VudC1kYXJrLWNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogJHRleHQtY29sb3I7XFxuICBib3JkZXI6IDJweCBzb2xpZCAkdGV4dC1zZWNvbmRhcnktY29sb3I7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuXFxuLnNob3AtcmVzZXQtZmlsdGVyczpob3ZlcixcXG4uc2hvcC1yZXNldC1zdG9yYWdlOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhY2NlbnQtY29sb3I7XFxufVxcblxcbi5zaG9wLXJlc2V0LWZpbHRlcnM6YWN0aXZlLFxcbi5zaG9wLXJlc2V0LXN0b3JhZ2U6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XFxufVxcblxcbi5zaG9wLWdvb2RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxMnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaG9wLXBvcHVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDQwdmggYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50LWNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSA1cHggMTBweCAxMHB4O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFwcGVhcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMFxcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxXFxuICB9XFxufVxcblxcbi5zaG9wLXBvcHVwX19idXR0b24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuXFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyB7XFxuICAgIGZpbHRlcjogJGhvdmVyLWVmZmVjdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1wb3B1cF9fdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW46IDQwcHggMjBweCAyNXB4O1xcbn1cXG5cXG4uc2hvcC1vcHRpb25zIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG4jZHJvcGRvd24tZmlsdGVyczpjaGVja2Vkfi5zaG9wLW9wdGlvbnMge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiA2MjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcXG4gIGZyb20ge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgaGVpZ2h0OiA2MjBweDtcXG4gIH1cXG59XFxuXFxuLmRyb3Bkb3duX190ZXh0OjpiZWZvcmUge1xcbiAgY29udGVudDogJ9Cf0L7QutCw0LfQsNGC0YwgJztcXG59XFxuXFxuI2Ryb3Bkb3duLWZpbHRlcnM6Y2hlY2tlZH4uZHJvcGRvd24tZmlsdGVycz4uZHJvcGRvd25fX3RleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAn0KHQutGA0YvRgtGMICc7XFxufVxcblxcbiNkcm9wZG93bi1maWx0ZXJzOmNoZWNrZWR+LmRyb3Bkb3duLWZpbHRlcnM+LmRyb3Bkb3duLWZpbHRlcnNfX2ltZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cIixcIi5zaG9wLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggMHB4IDJweCAwLjAwMTQ0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAgIHdpZHRoOiA0OCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG4gIH1cXG59XFxuXFxuLnNob3AtY2FyZF9fbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICBoZWlnaHQ6IDUycHg7XFxuICBmb250LXNpemU6IDIxcHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1jYXJkX19wcmljZS1tcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hvcC1jYXJkX19ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiA1cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICAgIHJvdy1nYXA6IDA7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLnRleHQtYmlnIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBsaW5lLWhlaWdodDogMzFweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICB9XFxufVxcblxcbi50ZXh0LWF1eCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5LWNvbG9yO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG4gIH1cXG59XFxuXFxuLnNob3AtY2FyZF9fcHJpY2UtbXBpeCxcXG4uc2hvcC1jYXJkX19zdG9jay1jYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1jYXJkX190eXBlLXN0YWIge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbi50ZXh0LWluLXN0b2NrIHtcXG4gIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4udGV4dC1vdXQtb2Ytc3RvY2sge1xcbiAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeS1jb2xvcjtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLnRleHQtbm8tY2FyZHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uc2hvcC1jYXJkX19jYXJ0IHtcXG4gIHdpZHRoOiAxMTlweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQ6ICR0ZXh0LWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgYm9yZGVyOiAkdGV4dC1jb2xvciAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICB9XFxufVxcblxcbi5hZGRlZCB7XFxuICBiYWNrZ3JvdW5kOiAkYWNjZW50LWNvbG9yO1xcbiAgYm9yZGVyOiAkYWNjZW50LWNvbG9yIDJweCBzb2xpZDtcXG4gIGNvbG9yOiAkYWNjZW50LWRhcmstY29sb3I7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLm5vVWlTbGlkZXIgPSB7fSkpO1xufSkodGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIGV4cG9ydHMuUGlwc01vZGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzTW9kZSkge1xuICAgICAgICBQaXBzTW9kZVtcIlJhbmdlXCJdID0gXCJyYW5nZVwiO1xuICAgICAgICBQaXBzTW9kZVtcIlN0ZXBzXCJdID0gXCJzdGVwc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIlBvc2l0aW9uc1wiXSA9IFwicG9zaXRpb25zXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiQ291bnRcIl0gPSBcImNvdW50XCI7XG4gICAgICAgIFBpcHNNb2RlW1wiVmFsdWVzXCJdID0gXCJ2YWx1ZXNcIjtcbiAgICB9KShleHBvcnRzLlBpcHNNb2RlIHx8IChleHBvcnRzLlBpcHNNb2RlID0ge30pKTtcbiAgICBleHBvcnRzLlBpcHNUeXBlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc1R5cGUpIHtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb25lXCJdID0gLTFdID0gXCJOb25lXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9WYWx1ZVwiXSA9IDBdID0gXCJOb1ZhbHVlXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTGFyZ2VWYWx1ZVwiXSA9IDFdID0gXCJMYXJnZVZhbHVlXCI7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiU21hbGxWYWx1ZVwiXSA9IDJdID0gXCJTbWFsbFZhbHVlXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzVHlwZSB8fCAoZXhwb3J0cy5QaXBzVHlwZSA9IHt9KSk7XG4gICAgLy9yZWdpb24gSGVscGVyIE1ldGhvZHNcbiAgICBmdW5jdGlvbiBpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkgJiYgdHlwZW9mIGVudHJ5LmZyb20gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgLy8gcGFydGlhbCBmb3JtYXR0ZXJzIG9ubHkgbmVlZCBhIHRvIGZ1bmN0aW9uIGFuZCBub3QgYSBmcm9tIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGVudHJ5LnRvID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU2V0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBCaW5kYWJsZSB2ZXJzaW9uXG4gICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIFJlbW92ZXMgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5LlxuICAgIGZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXNbYV0gPyAodGhpc1thXSA9IHRydWUpIDogZmFsc2U7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgLy8gUm91bmQgYSB2YWx1ZSB0byB0aGUgY2xvc2VzdCAndG8nLlxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QodmFsdWUsIHRvKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdG8pICogdG87XG4gICAgfVxuICAgIC8vIEN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KGVsZW0sIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgcGFnZU9mZnNldCA9IGdldFBhZ2VPZmZzZXQoZG9jKTtcbiAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNvbnRhaW5zIGxlZnQgc2Nyb2xsIGluIENocm9tZSBvbiBBbmRyb2lkLlxuICAgICAgICAvLyBJIGhhdmVuJ3QgZm91bmQgYSBmZWF0dXJlIGRldGVjdGlvbiB0aGF0IHByb3ZlcyB0aGlzLiBXb3JzdCBjYXNlXG4gICAgICAgIC8vIHNjZW5hcmlvIG9uIG1pcy1tYXRjaDogdGhlICd0YXAnIGZlYXR1cmUgb24gaG9yaXpvbnRhbCBzbGlkZXJzIGJyZWFrcy5cbiAgICAgICAgaWYgKC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgcGFnZU9mZnNldC54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZW50YXRpb24gPyByZWN0LnRvcCArIHBhZ2VPZmZzZXQueSAtIGRvY0VsZW0uY2xpZW50VG9wIDogcmVjdC5sZWZ0ICsgcGFnZU9mZnNldC54IC0gZG9jRWxlbS5jbGllbnRMZWZ0O1xuICAgIH1cbiAgICAvLyBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIG51bWVyaWNhbC5cbiAgICBmdW5jdGlvbiBpc051bWVyaWMoYSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKGEpICYmIGlzRmluaXRlKGEpO1xuICAgIH1cbiAgICAvLyBTZXRzIGEgY2xhc3MgYW5kIHJlbW92ZXMgaXQgYWZ0ZXIgW2R1cmF0aW9uXSBtcy5cbiAgICBmdW5jdGlvbiBhZGRDbGFzc0ZvcihlbGVtZW50LCBjbGFzc05hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIExpbWl0cyBhIHZhbHVlIHRvIDAgLSAxMDBcbiAgICBmdW5jdGlvbiBsaW1pdChhKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihhLCAxMDApLCAwKTtcbiAgICB9XG4gICAgLy8gV3JhcHMgYSB2YXJpYWJsZSBhcyBhbiBhcnJheSwgaWYgaXQgaXNuJ3Qgb25lIHlldC5cbiAgICAvLyBOb3RlIHRoYXQgYW4gaW5wdXQgYXJyYXkgaXMgcmV0dXJuZWQgYnkgcmVmZXJlbmNlIVxuICAgIGZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbYV07XG4gICAgfVxuICAgIC8vIENvdW50cyBkZWNpbWFsc1xuICAgIGZ1bmN0aW9uIGNvdW50RGVjaW1hbHMobnVtU3RyKSB7XG4gICAgICAgIG51bVN0ciA9IFN0cmluZyhudW1TdHIpO1xuICAgICAgICB2YXIgcGllY2VzID0gbnVtU3RyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgcmV0dXJuIHBpZWNlcy5sZW5ndGggPiAxID8gcGllY2VzWzFdLmxlbmd0aCA6IDA7XG4gICAgfVxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNhZGRfY2xhc3NcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIS9cXHMvLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNyZW1vdmVfY2xhc3NcbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIS9cXHMvLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxiKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcXFxifCQpXCIsIFwiZ2lcIiksIFwiIFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwczovL3BsYWluanMuY29tL2phdmFzY3JpcHQvYXR0cmlidXRlcy9hZGRpbmctcmVtb3ZpbmctYW5kLXRlc3RpbmctZm9yLWNsYXNzZXMtOS9cbiAgICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QgPyBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgY2xhc3NOYW1lICsgXCJcXFxcYlwiKS50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2Nyb2xsWSNOb3Rlc1xuICAgIGZ1bmN0aW9uIGdldFBhZ2VPZmZzZXQoZG9jKSB7XG4gICAgICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKGRvYy5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIjtcbiAgICAgICAgdmFyIHggPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIHZhciB5ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyB3ZSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBjb25zdGFudHMgaW5zdGVhZFxuICAgIC8vIG9mIGFjY2Vzc2luZyB3aW5kb3cuKiBhcyBzb29uIGFzIHRoZSBtb2R1bGUgbmVlZHMgaXRcbiAgICAvLyBzbyB0aGF0IHdlIGRvIG5vdCBjb21wdXRlIGFueXRoaW5nIGlmIG5vdCBuZWVkZWRcbiAgICBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGV2ZW50cyB0byBiaW5kLiBJRTExIGltcGxlbWVudHMgcG9pbnRlckV2ZW50cyB3aXRob3V0XG4gICAgICAgIC8vIGEgcHJlZml4LCB3aGljaCBicmVha3MgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBJRTEwIGltcGxlbWVudGF0aW9uLlxuICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwicG9pbnRlcmRvd25cIixcbiAgICAgICAgICAgICAgICBtb3ZlOiBcInBvaW50ZXJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcInBvaW50ZXJ1cFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiTVNQb2ludGVyRG93blwiLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIk1TUG9pbnRlck1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIk1TUG9pbnRlclVwXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBcIm1vdXNlbW92ZSB0b3VjaG1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIm1vdXNldXAgdG91Y2hlbmRcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuICAgIC8vIElzc3VlICM3ODVcbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1Bhc3NpdmUoKSB7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuQ1NTICYmIENTUy5zdXBwb3J0cyAmJiBDU1Muc3VwcG9ydHMoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFJhbmdlIENhbGN1bGF0aW9uXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIGEgc3ViLXJhbmdlIGluIHJlbGF0aW9uIHRvIGEgZnVsbCByYW5nZS5cbiAgICBmdW5jdGlvbiBzdWJSYW5nZVJhdGlvKHBhLCBwYikge1xuICAgICAgICByZXR1cm4gMTAwIC8gKHBiIC0gcGEpO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSG93IG1hbnkgcGVyY2VudCBpcyB0aGlzIHZhbHVlIG9mIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlLCBzdGFydFJhbmdlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApIC8gKHJhbmdlW3N0YXJ0UmFuZ2UgKyAxXSAtIHJhbmdlW3N0YXJ0UmFuZ2VdKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIFdoZXJlIGlzIHRoaXMgdmFsdWUgb24gdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiB0b1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmcm9tUGVyY2VudGFnZShyYW5nZSwgcmFuZ2VbMF0gPCAwID8gdmFsdWUgKyBNYXRoLmFicyhyYW5nZVswXSkgOiB2YWx1ZSAtIHJhbmdlWzBdLCAwKTtcbiAgICB9XG4gICAgLy8gKHZhbHVlKSBIb3cgbXVjaCBpcyB0aGlzIHBlcmNlbnRhZ2Ugb24gdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpIC8gMTAwICsgcmFuZ2VbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEoodmFsdWUsIGFycikge1xuICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSBhcnJbal0pIHtcbiAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gajtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIElucHV0IGEgdmFsdWUsIGZpbmQgd2hlcmUsIG9uIGEgc2NhbGUgb2YgMC0xMDAsIGl0IGFwcGxpZXMuXG4gICAgZnVuY3Rpb24gdG9TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPj0geFZhbC5zbGljZSgtMSlbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4VmFsKTtcbiAgICAgICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgICAgICByZXR1cm4gcGEgKyB0b1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sIHZhbHVlKSAvIHN1YlJhbmdlUmF0aW8ocGEsIHBiKTtcbiAgICB9XG4gICAgLy8gKHZhbHVlKSBJbnB1dCBhIHBlcmNlbnRhZ2UsIGZpbmQgd2hlcmUgaXQgaXMgb24gdGhlIHNwZWNpZmllZCByYW5nZS5cbiAgICBmdW5jdGlvbiBmcm9tU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gcmFuZ2UgZ3JvdXAgdGhhdCBmaXRzIDEwMFxuICAgICAgICBpZiAodmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4geFZhbC5zbGljZSgtMSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICAgICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgICAgICByZXR1cm4gaXNQZXJjZW50YWdlKFt2YSwgdmJdLCAodmFsdWUgLSBwYSkgKiBzdWJSYW5nZVJhdGlvKHBhLCBwYikpO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgR2V0IHRoZSBzdGVwIHRoYXQgYXBwbGllcyBhdCBhIGNlcnRhaW4gdmFsdWUuXG4gICAgZnVuY3Rpb24gZ2V0U3RlcCh4UGN0LCB4U3RlcHMsIHNuYXAsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICAgICAgdmFyIGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIGIgPSB4UGN0W2pdO1xuICAgICAgICAvLyBJZiAnc25hcCcgaXMgc2V0LCBzdGVwcyBhcmUgdXNlZCBhcyBmaXhlZCBwb2ludHMgb24gdGhlIHNsaWRlci5cbiAgICAgICAgaWYgKHNuYXApIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgcG9zaXRpb24sIGEgb3IgYi5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAtIGEgPiAoYiAtIGEpIC8gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF4U3RlcHNbaiAtIDFdKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhQY3RbaiAtIDFdICsgY2xvc2VzdCh2YWx1ZSAtIHhQY3RbaiAtIDFdLCB4U3RlcHNbaiAtIDFdKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBTcGVjdHJ1bVxuICAgIHZhciBTcGVjdHJ1bSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gU3BlY3RydW0oZW50cnksIHNuYXAsIHNpbmdsZVN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMueFBjdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54VmFsID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW3NpbmdsZVN0ZXAgfHwgZmFsc2VdO1xuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSBbZmFsc2VdO1xuICAgICAgICAgICAgdGhpcy5zbmFwID0gc25hcDtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBvcmRlcmVkID0gW107XG4gICAgICAgICAgICAvLyBNYXAgdGhlIG9iamVjdCBrZXlzIHRvIGFuIGFycmF5LlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgb3JkZXJlZC5wdXNoKFthc0FycmF5KGVudHJ5W2luZGV4XSksIGluZGV4XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNvcnQgYWxsIGVudHJpZXMgYnkgdmFsdWUgKG51bWVyaWMgc29ydCkuXG4gICAgICAgICAgICBvcmRlcmVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXVswXSAtIGJbMF1bMF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIGVudHJpZXMgdG8gc3VicmFuZ2VzLlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgb3JkZXJlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudHJ5UG9pbnQob3JkZXJlZFtpbmRleF1bMV0sIG9yZGVyZWRbaW5kZXhdWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBhY3R1YWwgc3RlcCB2YWx1ZXMuXG4gICAgICAgICAgICAvLyB4U3RlcHMgaXMgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHhQY3QgYW5kIHhWYWwuXG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IHRoaXMueFN0ZXBzLnNsaWNlKDApO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgbnVtZXJpYyBzdGVwcyB0byB0aGUgcGVyY2VudGFnZSBvZiB0aGUgc3VicmFuZ2UgdGhleSByZXByZXNlbnQuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0ZXBQb2ludChpbmRleCwgdGhpcy54TnVtU3RlcHNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzW2luZGV4XSA9IGZyb21QZXJjZW50YWdlKHRoaXMueFZhbCwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZXM7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvdmVyIHRoZSB3aG9sZSBzY2FsZSBvZiByYW5nZXMuXG4gICAgICAgIC8vIGRpcmVjdGlvbjogMCA9IGJhY2t3YXJkcyAvIDEgPSBmb3J3YXJkc1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0QWJzb2x1dGVEaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZGlzdGFuY2VzLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciB4UGN0X2luZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSByYW5nZSB3aGVyZSB0byBzdGFydCBjYWxjdWxhdGlvblxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh2YWx1ZSA+IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCA9IHRoaXMueFBjdC5sZW5ndGggLSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbG9va2luZyBiYWNrd2FyZHMgYW5kIHRoZSB2YWx1ZSBpcyBleGFjdGx5IGF0IGEgcmFuZ2Ugc2VwYXJhdG9yIHRoZW4gbG9vayBvbmUgcmFuZ2UgZnVydGhlclxuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb24gJiYgdmFsdWUgPT09IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgdmFyIHJlc3RfZmFjdG9yID0gMTtcbiAgICAgICAgICAgIHZhciByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4XTtcbiAgICAgICAgICAgIHZhciByYW5nZV9wY3QgPSAwO1xuICAgICAgICAgICAgdmFyIHJlbF9yYW5nZV9kaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICB2YXIgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdmFyIHJhbmdlX2NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdoYXQgcGFydCBvZiB0aGUgc3RhcnQgcmFuZ2UgdGhlIHZhbHVlIGlzXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHZhbHVlIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdmFsdWUpIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG8gdW50aWwgdGhlIGNvbXBsZXRlIGRpc3RhbmNlIGFjcm9zcyByYW5nZXMgaXMgY2FsY3VsYXRlZFxuICAgICAgICAgICAgd2hpbGUgKHJlc3RfcmVsX2Rpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudGFnZSBvZiB0b3RhbCByYW5nZVxuICAgICAgICAgICAgICAgIHJhbmdlX3BjdCA9IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMSArIHJhbmdlX2NvdW50ZXJdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgaWYgdGhlIG1hcmdpbiwgcGFkZGluZyBvciBsaW1pdCBpcyBsYXJnZXIgdGhlbiB0aGUgY3VycmVudCByYW5nZSBhbmQgY2FsY3VsYXRlXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvciArIDEwMCAtIHN0YXJ0X2ZhY3RvciAqIDEwMCA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBsYXJnZXIgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSB3aG9sZSByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSByYW5nZV9wY3QgKiBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3QgZmFjdG9yIG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IChyZXN0X3JlbF9kaXN0YW5jZSAtIDEwMCAqIHN0YXJ0X2ZhY3RvcikgLyBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgc3RhcnQgZmFjdG9yIHRvIDEgYXMgZm9yIG5leHQgcmFuZ2UgaXQgZG9lcyBub3QgYXBwbHkuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzbWFsbGVyIG9yIGVxdWFsIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgY2FsY3VsYXRlIHBlcmNlbnR1YWwgcGFydCBvZiB0aGF0IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9ICgoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJhbmdlX3BjdCkgLyAxMDApICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIHJlc3QgbGVmdCBhcyB0aGUgcmVzdCBmaXRzIGluIGN1cnJlbnQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgLSByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGZpcnN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1pbmltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggKyByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciArIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gbGFzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtYXhpbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoIC0gcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVzdCBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIGFic19kaXN0YW5jZV9jb3VudGVyO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUudG9TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b1N0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5mcm9tU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZ2V0U3RlcCh0aGlzLnhQY3QsIHRoaXMueFN0ZXBzLCB0aGlzLnNuYXAsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERlZmF1bHRTdGVwID0gZnVuY3Rpb24gKHZhbHVlLCBpc0Rvd24sIHNpemUpIHtcbiAgICAgICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgICAgIC8vIFdoZW4gYXQgdGhlIHRvcCBvciBzdGVwcGluZyBkb3duLCBsb29rIGF0IHRoZSBwcmV2aW91cyBzdWItcmFuZ2VcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwIHx8IChpc0Rvd24gJiYgdmFsdWUgPT09IHRoaXMueFBjdFtqIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgaiA9IE1hdGgubWF4KGogLSAxLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodGhpcy54VmFsW2pdIC0gdGhpcy54VmFsW2ogLSAxXSkgLyBzaXplO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0TmVhcmJ5U3RlcHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RlcEJlZm9yZToge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAyXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNTdGVwOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDFdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RlcEFmdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbal0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2pdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY291bnRTdGVwRGVjaW1hbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gdGhpcy54TnVtU3RlcHMubWFwKGNvdW50RGVjaW1hbHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIHN0ZXBEZWNpbWFscyk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYXNOb1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy54VmFsWzBdID09PSB0aGlzLnhWYWxbdGhpcy54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICB9O1xuICAgICAgICAvLyBPdXRzaWRlIHRlc3RpbmdcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0ZXAodGhpcy50b1N0ZXBwaW5nKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYW5kbGVFbnRyeVBvaW50ID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2U7XG4gICAgICAgICAgICAvLyBDb3ZlcnQgbWluL21heCBzeW50YXggdG8gMCBhbmQgMTAwLlxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgY29ycmVjdCBpbnB1dC5cbiAgICAgICAgICAgIGlmICghaXNOdW1lcmljKHBlcmNlbnRhZ2UpIHx8ICFpc051bWVyaWModmFsdWVbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyB2YWx1ZSBpc24ndCBudW1lcmljLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlcy5cbiAgICAgICAgICAgIHRoaXMueFBjdC5wdXNoKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgdGhpcy54VmFsLnB1c2godmFsdWVbMF0pO1xuICAgICAgICAgICAgdmFyIHZhbHVlMSA9IE51bWJlcih2YWx1ZVsxXSk7XG4gICAgICAgICAgICAvLyBOYU4gd2lsbCBldmFsdWF0ZSB0byBmYWxzZSB0b28sIGJ1dCB0byBrZWVwXG4gICAgICAgICAgICAvLyBsb2dnaW5nIGNsZWFyLCBzZXQgc3RlcCBleHBsaWNpdGx5LiBNYWtlIHN1cmVcbiAgICAgICAgICAgIC8vIG5vdCB0byBvdmVycmlkZSB0aGUgJ3N0ZXAnIHNldHRpbmcgd2l0aCBmYWxzZS5cbiAgICAgICAgICAgIGlmICghcGVyY2VudGFnZSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsdWUxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1swXSA9IHZhbHVlMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwcy5wdXNoKGlzTmFOKHZhbHVlMSkgPyBmYWxzZSA6IHZhbHVlMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwLnB1c2goMCk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYW5kbGVTdGVwUG9pbnQgPSBmdW5jdGlvbiAoaSwgbikge1xuICAgICAgICAgICAgLy8gSWdub3JlICdmYWxzZScgc3RlcHBpbmcuXG4gICAgICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnhWYWxbaV0gPT09IHRoaXMueFZhbFtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSB0aGlzLnhWYWxbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmFjdG9yIHRvIHJhbmdlIHJhdGlvXG4gICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9XG4gICAgICAgICAgICAgICAgZnJvbVBlcmNlbnRhZ2UoW3RoaXMueFZhbFtpXSwgdGhpcy54VmFsW2kgKyAxXV0sIG4sIDApIC8gc3ViUmFuZ2VSYXRpbyh0aGlzLnhQY3RbaV0sIHRoaXMueFBjdFtpICsgMV0pO1xuICAgICAgICAgICAgdmFyIHRvdGFsU3RlcHMgPSAodGhpcy54VmFsW2kgKyAxXSAtIHRoaXMueFZhbFtpXSkgLyB0aGlzLnhOdW1TdGVwc1tpXTtcbiAgICAgICAgICAgIHZhciBoaWdoZXN0U3RlcCA9IE1hdGguY2VpbChOdW1iZXIodG90YWxTdGVwcy50b0ZpeGVkKDMpKSAtIDEpO1xuICAgICAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLnhWYWxbaV0gKyB0aGlzLnhOdW1TdGVwc1tpXSAqIGhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHN0ZXA7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTcGVjdHJ1bTtcbiAgICB9KCkpO1xuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gT3B0aW9uc1xuICAgIC8qXHRFdmVyeSBpbnB1dCBvcHRpb24gaXMgdGVzdGVkIGFuZCBwYXJzZWQuIFRoaXMgd2lsbCBwcmV2ZW50XG4gICAgICAgIGVuZGxlc3MgdmFsaWRhdGlvbiBpbiBpbnRlcm5hbCBtZXRob2RzLiBUaGVzZSB0ZXN0cyBhcmVcbiAgICAgICAgc3RydWN0dXJlZCB3aXRoIGFuIGl0ZW0gZm9yIGV2ZXJ5IG9wdGlvbiBhdmFpbGFibGUuIEFuXG4gICAgICAgIG9wdGlvbiBjYW4gYmUgbWFya2VkIGFzIHJlcXVpcmVkIGJ5IHNldHRpbmcgdGhlICdyJyBmbGFnLlxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAgICAgIC0gVGhlIHByb3ZpZGVkIHZhbHVlIGZvciB0aGUgb3B0aW9uO1xuICAgICAgICAgICAgLSBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBvYmplY3Q7XG4gICAgICAgICAgICAtIFRoZSBuYW1lIGZvciB0aGUgb3B0aW9uO1xuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIHJldHVybnMgZmFsc2Ugd2hlbiBhbiBlcnJvciBpcyBkZXRlY3RlZCxcbiAgICAgICAgb3IgdHJ1ZSB3aGVuIGV2ZXJ5dGhpbmcgaXMgT0suIEl0IGNhbiBhbHNvIG1vZGlmeSB0aGUgb3B0aW9uXG4gICAgICAgIG9iamVjdCwgdG8gbWFrZSBzdXJlIGFsbCB2YWx1ZXMgY2FuIGJlIGNvcnJlY3RseSBsb29wZWQgZWxzZXdoZXJlLiAqL1xuICAgIC8vcmVnaW9uIERlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRGb3JtYXR0ZXIgPSB7XG4gICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIH0sXG4gICAgICAgIGZyb206IE51bWJlcixcbiAgICB9O1xuICAgIHZhciBjc3NDbGFzc2VzID0ge1xuICAgICAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgICAgIGJhc2U6IFwiYmFzZVwiLFxuICAgICAgICBvcmlnaW46IFwib3JpZ2luXCIsXG4gICAgICAgIGhhbmRsZTogXCJoYW5kbGVcIixcbiAgICAgICAgaGFuZGxlTG93ZXI6IFwiaGFuZGxlLWxvd2VyXCIsXG4gICAgICAgIGhhbmRsZVVwcGVyOiBcImhhbmRsZS11cHBlclwiLFxuICAgICAgICB0b3VjaEFyZWE6IFwidG91Y2gtYXJlYVwiLFxuICAgICAgICBob3Jpem9udGFsOiBcImhvcml6b250YWxcIixcbiAgICAgICAgdmVydGljYWw6IFwidmVydGljYWxcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCJiYWNrZ3JvdW5kXCIsXG4gICAgICAgIGNvbm5lY3Q6IFwiY29ubmVjdFwiLFxuICAgICAgICBjb25uZWN0czogXCJjb25uZWN0c1wiLFxuICAgICAgICBsdHI6IFwibHRyXCIsXG4gICAgICAgIHJ0bDogXCJydGxcIixcbiAgICAgICAgdGV4dERpcmVjdGlvbkx0cjogXCJ0eHQtZGlyLWx0clwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uUnRsOiBcInR4dC1kaXItcnRsXCIsXG4gICAgICAgIGRyYWdnYWJsZTogXCJkcmFnZ2FibGVcIixcbiAgICAgICAgZHJhZzogXCJzdGF0ZS1kcmFnXCIsXG4gICAgICAgIHRhcDogXCJzdGF0ZS10YXBcIixcbiAgICAgICAgYWN0aXZlOiBcImFjdGl2ZVwiLFxuICAgICAgICB0b29sdGlwOiBcInRvb2x0aXBcIixcbiAgICAgICAgcGlwczogXCJwaXBzXCIsXG4gICAgICAgIHBpcHNIb3Jpem9udGFsOiBcInBpcHMtaG9yaXpvbnRhbFwiLFxuICAgICAgICBwaXBzVmVydGljYWw6IFwicGlwcy12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXI6IFwibWFya2VyXCIsXG4gICAgICAgIG1hcmtlckhvcml6b250YWw6IFwibWFya2VyLWhvcml6b250YWxcIixcbiAgICAgICAgbWFya2VyVmVydGljYWw6IFwibWFya2VyLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlck5vcm1hbDogXCJtYXJrZXItbm9ybWFsXCIsXG4gICAgICAgIG1hcmtlckxhcmdlOiBcIm1hcmtlci1sYXJnZVwiLFxuICAgICAgICBtYXJrZXJTdWI6IFwibWFya2VyLXN1YlwiLFxuICAgICAgICB2YWx1ZTogXCJ2YWx1ZVwiLFxuICAgICAgICB2YWx1ZUhvcml6b250YWw6IFwidmFsdWUtaG9yaXpvbnRhbFwiLFxuICAgICAgICB2YWx1ZVZlcnRpY2FsOiBcInZhbHVlLXZlcnRpY2FsXCIsXG4gICAgICAgIHZhbHVlTm9ybWFsOiBcInZhbHVlLW5vcm1hbFwiLFxuICAgICAgICB2YWx1ZUxhcmdlOiBcInZhbHVlLWxhcmdlXCIsXG4gICAgICAgIHZhbHVlU3ViOiBcInZhbHVlLXN1YlwiLFxuICAgIH07XG4gICAgLy8gTmFtZXNwYWNlcyBvZiBpbnRlcm5hbCBldmVudCBsaXN0ZW5lcnNcbiAgICB2YXIgSU5URVJOQUxfRVZFTlRfTlMgPSB7XG4gICAgICAgIHRvb2x0aXBzOiBcIi5fX3Rvb2x0aXBzXCIsXG4gICAgICAgIGFyaWE6IFwiLl9fYXJpYVwiLFxuICAgIH07XG4gICAgLy9lbmRyZWdpb25cbiAgICBmdW5jdGlvbiB0ZXN0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgc3RlcCBvcHRpb24gY2FuIHN0aWxsIGJlIHVzZWQgdG8gc2V0IHN0ZXBwaW5nXG4gICAgICAgIC8vIGZvciBsaW5lYXIgc2xpZGVycy4gT3ZlcndyaXR0ZW4gaWYgc2V0IGluICdyYW5nZScuXG4gICAgICAgIHBhcnNlZC5zaW5nbGVTdGVwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRQYWdlTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZE11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZE11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRNdWx0aXBsaWVyID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZERlZmF1bHRTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmREZWZhdWx0U3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZERlZmF1bHRTdGVwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RSYW5nZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIEZpbHRlciBpbmNvcnJlY3QgaW5wdXQuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgaXMgbm90IGFuIG9iamVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2ggbWlzc2luZyBzdGFydCBvciBlbmQuXG4gICAgICAgIGlmIChlbnRyeS5taW4gPT09IHVuZGVmaW5lZCB8fCBlbnRyeS5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogTWlzc2luZyAnbWluJyBvciAnbWF4JyBpbiAncmFuZ2UnLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuc3BlY3RydW0gPSBuZXcgU3BlY3RydW0oZW50cnksIHBhcnNlZC5zbmFwIHx8IGZhbHNlLCBwYXJzZWQuc2luZ2xlU3RlcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTdGFydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgIC8vIFZhbGlkYXRlIGlucHV0LiBWYWx1ZXMgYXJlbid0IHRlc3RlZCwgYXMgdGhlIHB1YmxpYyAudmFsIG1ldGhvZFxuICAgICAgICAvLyB3aWxsIGFsd2F5cyBwcm92aWRlIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0YXJ0JyBvcHRpb24gaXMgaW5jb3JyZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB0aGUgbnVtYmVyIG9mIGhhbmRsZXMuXG4gICAgICAgIHBhcnNlZC5oYW5kbGVzID0gZW50cnkubGVuZ3RoO1xuICAgICAgICAvLyBXaGVuIHRoZSBzbGlkZXIgaXMgaW5pdGlhbGl6ZWQsIHRoZSAudmFsIG1ldGhvZCB3aWxsXG4gICAgICAgIC8vIGJlIGNhbGxlZCB3aXRoIHRoZSBzdGFydCBvcHRpb25zLlxuICAgICAgICBwYXJzZWQuc3RhcnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFNuYXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3NuYXAnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5zbmFwID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRlJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuYW5pbWF0ZSA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0aW9uRHVyYXRpb24nIG9wdGlvbiBtdXN0IGJlIGEgbnVtYmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuYW5pbWF0aW9uRHVyYXRpb24gPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENvbm5lY3QocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICB2YXIgY29ubmVjdCA9IFtmYWxzZV07XG4gICAgICAgIHZhciBpO1xuICAgICAgICAvLyBNYXAgbGVnYWN5IG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSBcImxvd2VyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW3RydWUsIGZhbHNlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbnRyeSA9PT0gXCJ1cHBlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtmYWxzZSwgdHJ1ZV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGJvb2xlYW4gb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbm5lY3QucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25uZWN0LnB1c2goZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlamVjdCBpbnZhbGlkIGlucHV0XG4gICAgICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoIHx8IGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMgKyAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY29ubmVjdCcgb3B0aW9uIGRvZXNuJ3QgbWF0Y2ggaGFuZGxlIGNvdW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbm5lY3QgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY29ubmVjdCA9IGNvbm5lY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RPcmllbnRhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBvcmllbnRhdGlvbiB0byBhbiBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeVxuICAgICAgICAvLyBhcnJheSBzZWxlY3Rpb24uXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ29yaWVudGF0aW9uJyBvcHRpb24gaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE1hcmdpbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ21hcmdpbicgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXNzdWUgIzU4MlxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubWFyZ2luID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdExpbWl0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5saW1pdCA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgICAgIGlmICghcGFyc2VkLmxpbWl0IHx8IHBhcnNlZC5oYW5kbGVzIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gaXMgb25seSBzdXBwb3J0ZWQgb24gbGluZWFyIHNsaWRlcnMgd2l0aCAyIG9yIG1vcmUgaGFuZGxlcy5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFBhZGRpbmcocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkgJiYgIShlbnRyeS5sZW5ndGggPT09IDIgfHwgaXNOdW1lcmljKGVudHJ5WzBdKSB8fCBpc051bWVyaWMoZW50cnlbMV0pKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2VudHJ5LCBlbnRyeV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gJ2dldERpc3RhbmNlJyByZXR1cm5zIGZhbHNlIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICAgICAgcGFyc2VkLnBhZGRpbmcgPSBbcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5WzBdKSwgcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5WzFdKV07XG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHBhcnNlZC5zcGVjdHJ1bS54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gbGFzdCBcInJhbmdlXCIgY2FuJ3QgY29udGFpbiBzdGVwIHNpemUgYXMgaXQgaXMgcHVyZWx5IGFuIGVuZHBvaW50LlxuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYWRkaW5nWzBdW2luZGV4XSA8IDAgfHwgcGFyc2VkLnBhZGRpbmdbMV1baW5kZXhdIDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcihzKS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvdGFsUGFkZGluZyA9IGVudHJ5WzBdICsgZW50cnlbMV07XG4gICAgICAgIHZhciBmaXJzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgIHZhciBsYXN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFtwYXJzZWQuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRvdGFsUGFkZGluZyAvIChsYXN0VmFsdWUgLSBmaXJzdFZhbHVlKSA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBub3QgZXhjZWVkIDEwMCUgb2YgdGhlIHJhbmdlLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RGlyZWN0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IGRpcmVjdGlvbiBhcyBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeSBwYXJzaW5nLlxuICAgICAgICAvLyBJbnZlcnQgY29ubmVjdGlvbiBmb3IgUlRMIHNsaWRlcnMsIHNvIHRoYXQgdGhlIHByb3BlclxuICAgICAgICAvLyBoYW5kbGVzIGdldCB0aGUgY29ubmVjdC9iYWNrZ3JvdW5kIGNsYXNzZXMuXG4gICAgICAgIHN3aXRjaCAoZW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsdHJcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJydGxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGlyID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2RpcmVjdGlvbicgb3B0aW9uIHdhcyBub3QgcmVjb2duaXplZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEJlaGF2aW91cihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5wdXQgaXMgYSBzdHJpbmcuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdiZWhhdmlvdXInIG11c3QgYmUgYSBzdHJpbmcgY29udGFpbmluZyBvcHRpb25zLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIGFueSBrZXl3b3Jkcy5cbiAgICAgICAgLy8gTm9uZSBhcmUgcmVxdWlyZWQuXG4gICAgICAgIHZhciB0YXAgPSBlbnRyeS5pbmRleE9mKFwidGFwXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnID0gZW50cnkuaW5kZXhPZihcImRyYWdcIikgPj0gMDtcbiAgICAgICAgdmFyIGZpeGVkID0gZW50cnkuaW5kZXhPZihcImZpeGVkXCIpID49IDA7XG4gICAgICAgIHZhciBzbmFwID0gZW50cnkuaW5kZXhPZihcInNuYXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGhvdmVyID0gZW50cnkuaW5kZXhPZihcImhvdmVyXCIpID49IDA7XG4gICAgICAgIHZhciB1bmNvbnN0cmFpbmVkID0gZW50cnkuaW5kZXhPZihcInVuY29uc3RyYWluZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWdBbGwgPSBlbnRyeS5pbmRleE9mKFwiZHJhZy1hbGxcIikgPj0gMDtcbiAgICAgICAgdmFyIHNtb290aFN0ZXBzID0gZW50cnkuaW5kZXhPZihcInNtb290aC1zdGVwc1wiKSA+PSAwO1xuICAgICAgICBpZiAoZml4ZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWQuaGFuZGxlcyAhPT0gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmaXhlZCcgYmVoYXZpb3VyIG11c3QgYmUgdXNlZCB3aXRoIDIgaGFuZGxlc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZSBtYXJnaW4gdG8gZW5mb3JjZSBmaXhlZCBzdGF0ZVxuICAgICAgICAgICAgdGVzdE1hcmdpbihwYXJzZWQsIHBhcnNlZC5zdGFydFsxXSAtIHBhcnNlZC5zdGFydFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuY29uc3RyYWluZWQgJiYgKHBhcnNlZC5tYXJnaW4gfHwgcGFyc2VkLmxpbWl0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3VuY29uc3RyYWluZWQnIGJlaGF2aW91ciBjYW5ub3QgYmUgdXNlZCB3aXRoIG1hcmdpbiBvciBsaW1pdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZXZlbnRzID0ge1xuICAgICAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcbiAgICAgICAgICAgIGRyYWc6IGRyYWcsXG4gICAgICAgICAgICBkcmFnQWxsOiBkcmFnQWxsLFxuICAgICAgICAgICAgc21vb3RoU3RlcHM6IHNtb290aFN0ZXBzLFxuICAgICAgICAgICAgZml4ZWQ6IGZpeGVkLFxuICAgICAgICAgICAgc25hcDogc25hcCxcbiAgICAgICAgICAgIGhvdmVyOiBob3ZlcixcbiAgICAgICAgICAgIHVuY29uc3RyYWluZWQ6IHVuY29uc3RyYWluZWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RUb29sdGlwcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGZvcm1hdHRlciBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXR0ZXIgIT09IFwiYm9vbGVhblwiICYmICFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihmb3JtYXR0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd0b29sdGlwcycgbXVzdCBiZSBwYXNzZWQgYSBmb3JtYXR0ZXIgb3IgJ2ZhbHNlJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0SGFuZGxlQXR0cmlidXRlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBhdHRyaWJ1dGVzIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmhhbmRsZUF0dHJpYnV0ZXMgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFyaWFGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FyaWFGb3JtYXQnIHJlcXVpcmVzICd0bycgbWV0aG9kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuYXJpYUZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Rm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Zvcm1hdCcgcmVxdWlyZXMgJ3RvJyBhbmQgJ2Zyb20nIG1ldGhvZHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5mb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkU3VwcG9ydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRTdXBwb3J0JyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZFN1cHBvcnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERvY3VtZW50RWxlbWVudChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYW4gYWR2YW5jZWQgb3B0aW9uLiBQYXNzZWQgdmFsdWVzIGFyZSB1c2VkIHdpdGhvdXQgdmFsaWRhdGlvbi5cbiAgICAgICAgcGFyc2VkLmRvY3VtZW50RWxlbWVudCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q3NzUHJlZml4KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIiAmJiBlbnRyeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NQcmVmaXgnIG11c3QgYmUgYSBzdHJpbmcgb3IgYGZhbHNlYC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNzc1ByZWZpeCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q3NzQ2xhc3NlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NDbGFzc2VzJyBtdXN0IGJlIGFuIG9iamVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQuY3NzUHJlZml4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzW2tleV0gPSBwYXJzZWQuY3NzUHJlZml4ICsgZW50cnlba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUZXN0IGFsbCBkZXZlbG9wZXIgc2V0dGluZ3MgYW5kIHBhcnNlIHRvIGFzc3VtcHRpb24tc2FmZSB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gdGVzdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAvLyBUbyBwcm92ZSBhIGZpeCBmb3IgIzUzNywgZnJlZXplIG9wdGlvbnMgaGVyZS5cbiAgICAgICAgLy8gSWYgdGhlIG9iamVjdCBpcyBtb2RpZmllZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gICAgICAgIC8vIE9iamVjdC5mcmVlemUob3B0aW9ucyk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgICAgICBtYXJnaW46IG51bGwsXG4gICAgICAgICAgICBsaW1pdDogbnVsbCxcbiAgICAgICAgICAgIHBhZGRpbmc6IG51bGwsXG4gICAgICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgICAgICAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFRlc3RzIGFyZSBleGVjdXRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgcHJlc2VudGVkIGhlcmUuXG4gICAgICAgIHZhciB0ZXN0cyA9IHtcbiAgICAgICAgICAgIHN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTdGVwIH0sXG4gICAgICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcCB9LFxuICAgICAgICAgICAgc3RhcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdFN0YXJ0IH0sXG4gICAgICAgICAgICBjb25uZWN0OiB7IHI6IHRydWUsIHQ6IHRlc3RDb25uZWN0IH0sXG4gICAgICAgICAgICBkaXJlY3Rpb246IHsgcjogdHJ1ZSwgdDogdGVzdERpcmVjdGlvbiB9LFxuICAgICAgICAgICAgc25hcDogeyByOiBmYWxzZSwgdDogdGVzdFNuYXAgfSxcbiAgICAgICAgICAgIGFuaW1hdGU6IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRlIH0sXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGlvbkR1cmF0aW9uIH0sXG4gICAgICAgICAgICByYW5nZTogeyByOiB0cnVlLCB0OiB0ZXN0UmFuZ2UgfSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0T3JpZW50YXRpb24gfSxcbiAgICAgICAgICAgIG1hcmdpbjogeyByOiBmYWxzZSwgdDogdGVzdE1hcmdpbiB9LFxuICAgICAgICAgICAgbGltaXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RMaW1pdCB9LFxuICAgICAgICAgICAgcGFkZGluZzogeyByOiBmYWxzZSwgdDogdGVzdFBhZGRpbmcgfSxcbiAgICAgICAgICAgIGJlaGF2aW91cjogeyByOiB0cnVlLCB0OiB0ZXN0QmVoYXZpb3VyIH0sXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0QXJpYUZvcm1hdCB9LFxuICAgICAgICAgICAgZm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0Rm9ybWF0IH0sXG4gICAgICAgICAgICB0b29sdGlwczogeyByOiBmYWxzZSwgdDogdGVzdFRvb2x0aXBzIH0sXG4gICAgICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdEtleWJvYXJkU3VwcG9ydCB9LFxuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50OiB7IHI6IGZhbHNlLCB0OiB0ZXN0RG9jdW1lbnRFbGVtZW50IH0sXG4gICAgICAgICAgICBjc3NQcmVmaXg6IHsgcjogdHJ1ZSwgdDogdGVzdENzc1ByZWZpeCB9LFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzQ2xhc3NlcyB9LFxuICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlczogeyByOiBmYWxzZSwgdDogdGVzdEhhbmRsZUF0dHJpYnV0ZXMgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY29ubmVjdDogZmFsc2UsXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibHRyXCIsXG4gICAgICAgICAgICBiZWhhdmlvdXI6IFwidGFwXCIsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHRydWUsXG4gICAgICAgICAgICBjc3NQcmVmaXg6IFwibm9VaS1cIixcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiA1LFxuICAgICAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogMTAsXG4gICAgICAgIH07XG4gICAgICAgIC8vIEFyaWFGb3JtYXQgZGVmYXVsdHMgdG8gcmVndWxhciBmb3JtYXQsIGlmIGFueS5cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0ICYmICFvcHRpb25zLmFyaWFGb3JtYXQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYXJpYUZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIC8vIFJ1biBhbGwgb3B0aW9ucyB0aHJvdWdoIGEgdGVzdGluZyBtZWNoYW5pc20gdG8gZW5zdXJlIGNvcnJlY3RcbiAgICAgICAgLy8gaW5wdXQuIEl0IHNob3VsZCBiZSBub3RlZCB0aGF0IG9wdGlvbnMgbWlnaHQgZ2V0IG1vZGlmaWVkIHRvXG4gICAgICAgIC8vIGJlIGhhbmRsZWQgcHJvcGVybHkuIEUuZy4gd3JhcHBpbmcgaW50ZWdlcnMgaW4gYXJyYXlzLlxuICAgICAgICBPYmplY3Qua2V5cyh0ZXN0cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbiBpc24ndCBzZXQsIGJ1dCBpdCBpcyByZXF1aXJlZCwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAgICBpZiAoIWlzU2V0KG9wdGlvbnNbbmFtZV0pICYmIGRlZmF1bHRzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdHNbbmFtZV0ucikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnXCIgKyBuYW1lICsgXCInIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVzdHNbbmFtZV0udChwYXJzZWQsICFpc1NldChvcHRpb25zW25hbWVdKSA/IGRlZmF1bHRzW25hbWVdIDogb3B0aW9uc1tuYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGb3J3YXJkIHBpcHMgb3B0aW9uc1xuICAgICAgICBwYXJzZWQucGlwcyA9IG9wdGlvbnMucGlwcztcbiAgICAgICAgLy8gQWxsIHJlY2VudCBicm93c2VycyBhY2NlcHQgdW5wcmVmaXhlZCB0cmFuc2Zvcm0uXG4gICAgICAgIC8vIFdlIG5lZWQgLW1zLSBmb3IgSUU5IGFuZCAtd2Via2l0LSBmb3Igb2xkZXIgQW5kcm9pZDtcbiAgICAgICAgLy8gQXNzdW1lIHVzZSBvZiAtd2Via2l0LSBpZiB1bnByZWZpeGVkIGFuZCAtbXMtIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXRyYW5zZm9ybXMyZFxuICAgICAgICB2YXIgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBtc1ByZWZpeCA9IGQuc3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG5vUHJlZml4ID0gZC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgcGFyc2VkLnRyYW5zZm9ybVJ1bGUgPSBub1ByZWZpeCA/IFwidHJhbnNmb3JtXCIgOiBtc1ByZWZpeCA/IFwibXNUcmFuc2Zvcm1cIiA6IFwid2Via2l0VHJhbnNmb3JtXCI7XG4gICAgICAgIC8vIFBpcHMgZG9uJ3QgbW92ZSwgc28gd2UgY2FuIHBsYWNlIHRoZW0gdXNpbmcgbGVmdC90b3AuXG4gICAgICAgIHZhciBzdHlsZXMgPSBbXG4gICAgICAgICAgICBbXCJsZWZ0XCIsIFwidG9wXCJdLFxuICAgICAgICAgICAgW1wicmlnaHRcIiwgXCJib3R0b21cIl0sXG4gICAgICAgIF07XG4gICAgICAgIHBhcnNlZC5zdHlsZSA9IHN0eWxlc1twYXJzZWQuZGlyXVtwYXJzZWQub3J0XTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICBmdW5jdGlvbiBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lID0gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lICYmIGdldFN1cHBvcnRzUGFzc2l2ZSgpO1xuICAgICAgICAvLyBBbGwgdmFyaWFibGVzIGxvY2FsIHRvICdzY29wZScgYXJlIHByZWZpeGVkIHdpdGggJ3Njb3BlXydcbiAgICAgICAgLy8gU2xpZGVyIERPTSBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB2YXIgc2NvcGVfQmFzZTtcbiAgICAgICAgdmFyIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgIHZhciBzY29wZV9Db25uZWN0cztcbiAgICAgICAgdmFyIHNjb3BlX1BpcHM7XG4gICAgICAgIHZhciBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgLy8gU2xpZGVyIHN0YXRlIHZhbHVlc1xuICAgICAgICB2YXIgc2NvcGVfU3BlY3RydW0gPSBvcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICB2YXIgc2NvcGVfVmFsdWVzID0gW107XG4gICAgICAgIHZhciBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0hhbmRsZU51bWJlcnMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9IDA7XG4gICAgICAgIHZhciBzY29wZV9FdmVudHMgPSB7fTtcbiAgICAgICAgLy8gRG9jdW1lbnQgTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50ID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudEVsZW1lbnQgPSBvcHRpb25zLmRvY3VtZW50RWxlbWVudCB8fCBzY29wZV9Eb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBzY29wZV9Cb2R5ID0gc2NvcGVfRG9jdW1lbnQuYm9keTtcbiAgICAgICAgLy8gRm9yIGhvcml6b250YWwgc2xpZGVycyBpbiBzdGFuZGFyZCBsdHIgZG9jdW1lbnRzLFxuICAgICAgICAvLyBtYWtlIC5ub1VpLW9yaWdpbiBvdmVyZmxvdyB0byB0aGUgbGVmdCBzbyB0aGUgZG9jdW1lbnQgZG9lc24ndCBzY3JvbGwuXG4gICAgICAgIHZhciBzY29wZV9EaXJPZmZzZXQgPSBzY29wZV9Eb2N1bWVudC5kaXIgPT09IFwicnRsXCIgfHwgb3B0aW9ucy5vcnQgPT09IDEgPyAwIDogMTAwO1xuICAgICAgICAvLyBDcmVhdGVzIGEgbm9kZSwgYWRkcyBpdCB0byB0YXJnZXQsIHJldHVybnMgdGhlIG5ldyBub2RlLlxuICAgICAgICBmdW5jdGlvbiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZhciBkaXYgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgYSBvcmlnaW4gdG8gdGhlIGJhc2VcbiAgICAgICAgZnVuY3Rpb24gYWRkT3JpZ2luKGJhc2UsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMub3JpZ2luKTtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGROb2RlVG8ob3JpZ2luLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlKTtcbiAgICAgICAgICAgIGFkZE5vZGVUbyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b3VjaEFyZWEpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIsIFN0cmluZyhoYW5kbGVOdW1iZXIpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvR2xvYmFsX2F0dHJpYnV0ZXMvdGFiaW5kZXhcbiAgICAgICAgICAgICAgICAvLyAwID0gZm9jdXNhYmxlIGFuZCByZWFjaGFibGVcbiAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzXzEgPSBvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzXzEpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc18xW2F0dHJpYnV0ZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJzbGlkZXJcIik7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1vcmllbnRhdGlvblwiLCBvcHRpb25zLm9ydCA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoYW5kbGVOdW1iZXIgPT09IG9wdGlvbnMuaGFuZGxlcyAtIDEpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluc2VydCBub2RlcyBmb3IgY29ubmVjdCBlbGVtZW50c1xuICAgICAgICBmdW5jdGlvbiBhZGRDb25uZWN0KGJhc2UsIGFkZCkge1xuICAgICAgICAgICAgaWYgKCFhZGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgaGFuZGxlcyB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgIGZ1bmN0aW9uIGFkZEVsZW1lbnRzKGNvbm5lY3RPcHRpb25zLCBiYXNlKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdEJhc2UgPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3RzKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zWzBdKSk7XG4gICAgICAgICAgICAvLyBbOjo6Ok89PT09Tz09PT1PPT09PV1cbiAgICAgICAgICAgIC8vIGNvbm5lY3RPcHRpb25zID0gWzAsIDEsIDEsIDFdXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gS2VlcCBhIGxpc3Qgb2YgYWxsIGFkZGVkIGhhbmRsZXMuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5wdXNoKGFkZE9yaWdpbihiYXNlLCBpKSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVyc1tpXSA9IGk7XG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1tpICsgMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXplIGEgc2luZ2xlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gYWRkU2xpZGVyKGFkZFRhcmdldCkge1xuICAgICAgICAgICAgLy8gQXBwbHkgY2xhc3NlcyBhbmQgZGF0YSB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmx0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ydGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub3J0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52ZXJ0aWNhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGV4dERpcmVjdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoYWRkVGFyZ2V0KS5kaXJlY3Rpb247XG4gICAgICAgICAgICBpZiAodGV4dERpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25SdGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvbkx0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmJhc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZFRvb2x0aXAoaGFuZGxlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy50b29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhoYW5kbGUuZmlyc3RDaGlsZCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvb2x0aXApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzU2xpZGVyRGlzYWJsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERpc2FibGUgdGhlIHNsaWRlciBkcmFnZ2luZyBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgIGZ1bmN0aW9uIGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU9yaWdpbi5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVUb29sdGlwcygpIHtcbiAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCh0b29sdGlwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdG9vbHRpcHMgb3B0aW9uIGlzIGEgc2hvcnRoYW5kIGZvciB1c2luZyB0aGUgJ3VwZGF0ZScgZXZlbnQuXG4gICAgICAgIGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIC8vIFRvb2x0aXBzIGFyZSBhZGRlZCB3aXRoIG9wdGlvbnMudG9vbHRpcHMgaW4gb3JpZ2luYWwgb3JkZXIuXG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IHNjb3BlX0hhbmRsZXMubWFwKGFkZFRvb2x0aXApO1xuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlX1Rvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXS50byh1bmVuY29kZWRbaGFuZGxlTnVtYmVyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0uaW5uZXJIVE1MID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhcmlhKCkge1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCwgdGFwLCBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQXJpYSBWYWx1ZXMgZm9yIGFsbCBoYW5kbGVzLCBhcyBhIGNoYW5nZSBpbiBvbmUgY2hhbmdlcyBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIHRoZSBuZXh0LlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMTAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdHRlZCB2YWx1ZSBmb3IgZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFN0cmluZyhvcHRpb25zLmFyaWFGb3JtYXQudG8odW5lbmNvZGVkW2luZGV4XSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgdG8gc2xpZGVyIHJhbmdlIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWluKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBtYXggPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWF4KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBub3cgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobm93KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1pblwiLCBtaW4pO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1heFwiLCBtYXgpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW5vd1wiLCBub3cpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRHcm91cChwaXBzKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHJhbmdlLlxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5SYW5nZSB8fCBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0ueFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuQ291bnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGlwcy52YWx1ZXMgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd2YWx1ZXMnICg+PSAyKSByZXF1aXJlZCBmb3IgbW9kZSAnY291bnQnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGl2aWRlIDAgLSAxMDAgaW4gJ2NvdW50JyBwYXJ0cy5cbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBwaXBzLnZhbHVlcyAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHNwcmVhZCA9IDEwMCAvIGludGVydmFsO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBMaXN0IHRoZXNlIHBhcnRzIGFuZCBoYXZlIHRoZW0gaGFuZGxlZCBhcyAncG9zaXRpb25zJy5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaW50ZXJ2YWwtLSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaW50ZXJ2YWxdID0gaW50ZXJ2YWwgKiBzcHJlYWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKDEwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UodmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Qb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBNYXAgYWxsIHBlcmNlbnRhZ2VzIHRvIG9uLXJhbmdlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZShwaXBzLnZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIG11c3QgYmUgc3RlcHBlZCwgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgcGVyY2VudGFnZSBmaXJzdC5cbiAgICAgICAgICAgICAgICBpZiAocGlwcy5zdGVwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBlcmNlbnRhZ2UsIGFwcGx5IHN0ZXAsIHJldHVybiB0byB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHZhbHVlKSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBjYW4gc2ltcGx5IHVzZSB0aGUgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXTsgLy8gcGlwcy5tb2RlID0gbmV2ZXJcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXBUb1JhbmdlKHZhbHVlcywgc3RlcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzdGVwcGVkID8gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVNwcmVhZChwaXBzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBzYWZlSW5jcmVtZW50KHZhbHVlLCBpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBmbG9hdGluZyBwb2ludCB2YXJpYW5jZSBieSBkcm9wcGluZyB0aGUgc21hbGxlc3QgZGVjaW1hbCBwbGFjZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcigodmFsdWUgKyBpbmNyZW1lbnQpLnRvRml4ZWQoNykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGdyb3VwID0gZ2V0R3JvdXAocGlwcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXhlcyA9IHt9O1xuICAgICAgICAgICAgdmFyIGZpcnN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB2YXIgbGFzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsW3Njb3BlX1NwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB2YXIgaWdub3JlRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVMYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcHJldlBjdCA9IDA7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBncm91cCwgc29ydCBpdCBhbmQgZmlsdGVyIGF3YXkgYWxsIGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICBncm91cCA9IHVuaXF1ZShncm91cC5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHJhbmdlIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGdyb3VwWzBdICE9PSBmaXJzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBncm91cC51bnNoaWZ0KGZpcnN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGlrZXdpc2UgZm9yIHRoZSBsYXN0IG9uZS5cbiAgICAgICAgICAgIGlmIChncm91cFtncm91cC5sZW5ndGggLSAxXSAhPT0gbGFzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGxhc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVMYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBsb3dlciArIHVwcGVyIHBvc2l0aW9ucy5cbiAgICAgICAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICB2YXIgcTtcbiAgICAgICAgICAgICAgICB2YXIgbG93ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YXIgaGlnaCA9IGdyb3VwW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BjdDtcbiAgICAgICAgICAgICAgICB2YXIgcGN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgcGN0UG9zO1xuICAgICAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNTdGVwcyA9IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcztcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHVzaW5nICdzdGVwcycgbW9kZSwgdXNlIHRoZSBwcm92aWRlZCBzdGVwcy5cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlJ2xsIHN0ZXAgb24gdG8gdGhlIG5leHQgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLnhOdW1TdGVwc1tpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSAnZnVsbCcgc3RlcC5cbiAgICAgICAgICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IGhpZ2ggLSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGhpZ2ggaXMgdW5kZWZpbmVkIHdlIGFyZSBhdCB0aGUgbGFzdCBzdWJyYW5nZS4gTWFrZSBzdXJlIGl0IGl0ZXJhdGVzIG9uY2UgKCMxMDg4KVxuICAgICAgICAgICAgICAgIGlmIChoaWdoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaCA9IGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHN0ZXAgaXNuJ3QgMCwgd2hpY2ggd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcCAoIzY1NClcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIGFsbCBzdGVwcyBpbiB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkgPSBzYWZlSW5jcmVtZW50KGksIHN0ZXApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcGVyY2VudGFnZSB2YWx1ZSBmb3IgdGhlIGN1cnJlbnQgc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBzaXplIGZvciB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIG5ld1BjdCA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcoaSk7XG4gICAgICAgICAgICAgICAgICAgIHBjdERpZmZlcmVuY2UgPSBuZXdQY3QgLSBwcmV2UGN0O1xuICAgICAgICAgICAgICAgICAgICBzdGVwcyA9IHBjdERpZmZlcmVuY2UgLyAocGlwcy5kZW5zaXR5IHx8IDEpO1xuICAgICAgICAgICAgICAgICAgICByZWFsU3RlcHMgPSBNYXRoLnJvdW5kKHN0ZXBzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyByYXRpbyByZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgcGVyY2VudGFnZS1zcGFjZSBhIHBvaW50IGluZGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGEgZGVuc2l0eSAxIHRoZSBwb2ludHMvcGVyY2VudGFnZSA9IDEuIEZvciBkZW5zaXR5IDIsIHRoYXQgcGVyY2VudGFnZSBuZWVkcyB0byBiZSByZS1kaXZpZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBSb3VuZCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgdG8gYW4gZXZlbiBudW1iZXIsIHRoZW4gZGl2aWRlIGJ5IHR3b1xuICAgICAgICAgICAgICAgICAgICAvLyB0byBzcHJlYWQgdGhlIG9mZnNldCBvbiBib3RoIHNpZGVzIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgc3RlcFNpemUgPSBwY3REaWZmZXJlbmNlIC8gcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXZpZGUgYWxsIHBvaW50cyBldmVubHksIGFkZGluZyB0aGUgY29ycmVjdCBudW1iZXIgdG8gdGhpcyBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHVwIHRvIDw9IHNvIHRoYXQgMTAwJSBnZXRzIGEgcG9pbnQsIGV2ZW50IGlmIGlnbm9yZUxhc3QgaXMgc2V0LlxuICAgICAgICAgICAgICAgICAgICBmb3IgKHEgPSAxOyBxIDw9IHJlYWxTdGVwczsgcSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmF0aW8gYmV0d2VlbiB0aGUgcm91bmRlZCB2YWx1ZSBhbmQgdGhlIGFjdHVhbCBzaXplIG1pZ2h0IGJlIH4xJSBvZmYuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0IHRoZSBwZXJjZW50YWdlIG9mZnNldCBieSB0aGUgbnVtYmVyIG9mIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyIHN1YnJhbmdlLiBkZW5zaXR5ID0gMSB3aWxsIHJlc3VsdCBpbiAxMDAgcG9pbnRzIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVsbCByYW5nZSwgMiBmb3IgNTAsIDQgZm9yIDI1LCBldGMuXG4gICAgICAgICAgICAgICAgICAgICAgICBwY3RQb3MgPSBwcmV2UGN0ICsgcSAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1twY3RQb3MudG9GaXhlZCg1KV0gPSBbc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHBjdFBvcyksIDBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB0aGUgcG9pbnQgdHlwZS5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGdyb3VwLmluZGV4T2YoaSkgPiAtMSA/IGV4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZSA6IGlzU3RlcHMgPyBleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWUgOiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZm9yY2UgdGhlICdpZ25vcmVGaXJzdCcgb3B0aW9uIGJ5IG92ZXJ3cml0aW5nIHRoZSB0eXBlIGZvciAwLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZGV4ICYmIGlnbm9yZUZpcnN0ICYmIGkgIT09IGhpZ2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGkgPT09IGhpZ2ggJiYgaWdub3JlTGFzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlICd0eXBlJyBvZiB0aGlzIHBvaW50LiAwID0gcGxhaW4sIDEgPSByZWFsIHZhbHVlLCAyID0gc3RlcCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbbmV3UGN0LnRvRml4ZWQoNSldID0gW2ksIHR5cGVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcGVyY2VudGFnZSBjb3VudC5cbiAgICAgICAgICAgICAgICAgICAgcHJldlBjdCA9IG5ld1BjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXJGdW5jLCBmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVTaXplQ2xhc3NlcyA9IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVOb3JtYWwsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUxhcmdlLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVTdWIsXG4gICAgICAgICAgICAgICAgX2EpO1xuICAgICAgICAgICAgdmFyIG1hcmtlclNpemVDbGFzc2VzID0gKF9iID0ge30sXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJOb3JtYWwsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclN1YixcbiAgICAgICAgICAgICAgICBfYik7XG4gICAgICAgICAgICB2YXIgdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlSG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlVmVydGljYWxdO1xuICAgICAgICAgICAgdmFyIG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMubWFya2VySG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclZlcnRpY2FsXTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMub3J0ID09PSAwID8gb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHNIb3Jpem9udGFsIDogb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHNWZXJ0aWNhbCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDbGFzc2VzKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gc291cmNlID09PSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWVudGF0aW9uQ2xhc3NlcyA9IGEgPyB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA6IG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcztcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZUNsYXNzZXMgPSBhID8gdmFsdWVTaXplQ2xhc3NlcyA6IG1hcmtlclNpemVDbGFzc2VzO1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgKyBcIiBcIiArIG9yaWVudGF0aW9uQ2xhc3Nlc1tvcHRpb25zLm9ydF0gKyBcIiBcIiArIHNpemVDbGFzc2VzW3R5cGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkU3ByZWFkKG9mZnNldCwgdmFsdWUsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyIGZ1bmN0aW9uLCBpZiBpdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgdHlwZSA9IGZpbHRlckZ1bmMgPyBmaWx0ZXJGdW5jKHZhbHVlLCB0eXBlKSA6IHR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuUGlwc1R5cGUuTm9uZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIG1hcmtlciBmb3IgZXZlcnkgcG9pbnRcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXIpO1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAvLyBWYWx1ZXMgYXJlIG9ubHkgYXBwZW5kZWQgZm9yIHBvaW50cyBtYXJrZWQgJzEnIG9yICcyJy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA+IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IFN0cmluZyhmb3JtYXR0ZXIudG8odmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHBlbmQgYWxsIHBvaW50cy5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwcmVhZCkuZm9yRWFjaChmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgYWRkU3ByZWFkKG9mZnNldCwgc3ByZWFkW29mZnNldF1bMF0sIHNwcmVhZFtvZmZzZXRdWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlUGlwcygpIHtcbiAgICAgICAgICAgIGlmIChzY29wZV9QaXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudChzY29wZV9QaXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9QaXBzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwaXBzKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNjY5XG4gICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgICAgICB2YXIgc3ByZWFkID0gZ2VuZXJhdGVTcHJlYWQocGlwcyk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gcGlwcy5maWx0ZXI7XG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gcGlwcy5mb3JtYXQgfHwge1xuICAgICAgICAgICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhNYXRoLnJvdW5kKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzY29wZV9QaXBzID0gc2NvcGVfVGFyZ2V0LmFwcGVuZENoaWxkKGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXIsIGZvcm1hdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1BpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hvcnRoYW5kIGZvciBiYXNlIGRpbWVuc2lvbnMuXG4gICAgICAgIGZ1bmN0aW9uIGJhc2VTaXplKCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzY29wZV9CYXNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIGFsdCA9IChcIm9mZnNldFwiICsgW1wiV2lkdGhcIiwgXCJIZWlnaHRcIl1bb3B0aW9ucy5vcnRdKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm9ydCA9PT0gMCA/IHJlY3Qud2lkdGggfHwgc2NvcGVfQmFzZVthbHRdIDogcmVjdC5oZWlnaHQgfHwgc2NvcGVfQmFzZVthbHRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXIgZm9yIGF0dGFjaGluZyBldmVudHMgdHJvdWdoIGEgcHJveHkuXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaEV2ZW50KGV2ZW50cywgZWxlbWVudCwgY2FsbGJhY2ssIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gJ2ZpbHRlcicgZXZlbnRzIHRvIHRoZSBzbGlkZXIuXG4gICAgICAgICAgICAvLyBlbGVtZW50IGlzIGEgbm9kZSwgbm90IGEgbm9kZUxpc3RcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGZpeEV2ZW50KGV2ZW50LCBkYXRhLnBhZ2VPZmZzZXQsIGRhdGEudGFyZ2V0IHx8IGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIGZpeEV2ZW50IHJldHVybnMgZmFsc2UgaWYgdGhpcyBldmVudCBoYXMgYSBkaWZmZXJlbnQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBoYW5kbGluZyAobXVsdGktKSB0b3VjaCBldmVudHM7XG4gICAgICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZG9Ob3RSZWplY3QgaXMgcGFzc2VkIGJ5IGFsbCBlbmQgZXZlbnRzIHRvIG1ha2Ugc3VyZSByZWxlYXNlZCB0b3VjaGVzXG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCByZWplY3RlZCwgbGVhdmluZyB0aGUgc2xpZGVyIFwic3R1Y2tcIiB0byB0aGUgY3Vyc29yO1xuICAgICAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIGFuIGFjdGl2ZSAndGFwJyB0cmFuc2l0aW9uIGlzIHRha2luZyBwbGFjZS5cbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzID09PSBhY3Rpb25zLnN0YXJ0ICYmIGUuYnV0dG9ucyAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9ucyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaG92ZXIgJiYgZS5idXR0b25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gJ3N1cHBvcnRzUGFzc2l2ZScgaXMgb25seSB0cnVlIGlmIGEgYnJvd3NlciBhbHNvIHN1cHBvcnRzIHRvdWNoLWFjdGlvbjogbm9uZSBpbiBDU1MuXG4gICAgICAgICAgICAgICAgLy8gaU9TIHNhZmFyaSBkb2VzIG5vdCwgc28gaXQgZG9lc24ndCBnZXQgdG8gYmVuZWZpdCBmcm9tIHBhc3NpdmUgc2Nyb2xsaW5nLiBpT1MgZG9lcyBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy8gdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb24sIGJ1dCB0aGF0IGFsbG93cyBwYW5uaW5nLCB3aGljaCBicmVha3NcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJzIGFmdGVyIHpvb21pbmcvb24gbm9uLXJlc3BvbnNpdmUgcGFnZXMuXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMzMTEyXG4gICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c1Bhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLmNhbGNQb2ludCA9IGUucG9pbnRzW29wdGlvbnMub3J0XTtcbiAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBldmVudCBoYW5kbGVyIHdpdGggdGhlIGV2ZW50IFsgYW5kIGFkZGl0aW9uYWwgZGF0YSBdLlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgLy8gQmluZCBhIGNsb3N1cmUgb24gdGhlIHRhcmdldCBmb3IgZXZlcnkgZXZlbnQgdHlwZS5cbiAgICAgICAgICAgIGV2ZW50cy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbWV0aG9kLCBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2goW2V2ZW50TmFtZSwgbWV0aG9kXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByb3ZpZGUgYSBjbGVhbiBldmVudCB3aXRoIHN0YW5kYXJkaXplZCBvZmZzZXQgdmFsdWVzLlxuICAgICAgICBmdW5jdGlvbiBmaXhFdmVudChlLCBwYWdlT2Zmc2V0LCBldmVudFRhcmdldCkge1xuICAgICAgICAgICAgLy8gRmlsdGVyIHRoZSBldmVudCB0byByZWdpc3RlciB0aGUgdHlwZSwgd2hpY2ggY2FuIGJlXG4gICAgICAgICAgICAvLyB0b3VjaCwgbW91c2Ugb3IgcG9pbnRlci4gT2Zmc2V0IGNoYW5nZXMgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gbWFkZSBvbiBhbiBldmVudCBzcGVjaWZpYyBiYXNpcy5cbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudHlwZS5pbmRleE9mKFwidG91Y2hcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgbW91c2UgPSBlLnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHBvaW50ZXIgPSBlLnR5cGUuaW5kZXhPZihcInBvaW50ZXJcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgICAgICAvLyBJRTEwIGltcGxlbWVudGVkIHBvaW50ZXIgZXZlbnRzIHdpdGggYSBwcmVmaXg7XG4gICAgICAgICAgICBpZiAoZS50eXBlLmluZGV4T2YoXCJNU1BvaW50ZXJcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVycm9uZW91cyBldmVudHMgc2VlbSB0byBiZSBwYXNzZWQgaW4gb2NjYXNpb25hbGx5IG9uIGlPUy9pUGFkT1MgYWZ0ZXIgdXNlciBmaW5pc2hlcyBpbnRlcmFjdGluZyB3aXRoXG4gICAgICAgICAgICAvLyB0aGUgc2xpZGVyLiBUaGV5IGFwcGVhciB0byBiZSBvZiB0eXBlIE1vdXNlRXZlbnQsIHlldCB0aGV5IGRvbid0IGhhdmUgdXN1YWwgcHJvcGVydGllcyBzZXQuIElnbm9yZVxuICAgICAgICAgICAgLy8gZXZlbnRzIHRoYXQgaGF2ZSBubyB0b3VjaGVzIG9yIGJ1dHRvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZW0uICgjMTA1NywgIzEwNzksICMxMDk1KVxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiAmJiAhZS5idXR0b25zICYmICFlLnRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgb25seSB0aGluZyBvbmUgaGFuZGxlIHNob3VsZCBiZSBjb25jZXJuZWQgYWJvdXQgaXMgdGhlIHRvdWNoZXMgdGhhdCBvcmlnaW5hdGVkIG9uIHRvcCBvZiBpdC5cbiAgICAgICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiBhIHRvdWNoIG9yaWdpbmF0ZWQgb24gdGhlIHRhcmdldC5cbiAgICAgICAgICAgICAgICB2YXIgaXNUb3VjaE9uVGFyZ2V0ID0gZnVuY3Rpb24gKGNoZWNrVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGNoZWNrVG91Y2gudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRhcmdldCA9PT0gZXZlbnRUYXJnZXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmNvbnRhaW5zKHRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNvbXBvc2VkICYmIGUuY29tcG9zZWRQYXRoKCkuc2hpZnQoKSA9PT0gZXZlbnRUYXJnZXQpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHRvdWNoc3RhcnQgZXZlbnRzLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBzdGlsbCBubyBtb3JlIHRoYW4gb25lXG4gICAgICAgICAgICAgICAgLy8gdG91Y2ggb24gdGhlIHRhcmdldCBzbyB3ZSBsb29rIGFtb25nc3QgYWxsIHRvdWNoZXMuXG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZS50b3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3Qgc3VwcG9ydCBtb3JlIHRoYW4gb25lIHRvdWNoIHBlciBoYW5kbGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgb3RoZXIgY2FzZXMsIGZpbmQgb24gY2hhbmdlZFRvdWNoZXMgaXMgZW5vdWdoLlxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2ggPSBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBpZiB0aGUgdGFyZ2V0IHRvdWNoIGhhcyBub3QgbW92ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2gucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaC5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdlT2Zmc2V0ID0gcGFnZU9mZnNldCB8fCBnZXRQYWdlT2Zmc2V0KHNjb3BlX0RvY3VtZW50KTtcbiAgICAgICAgICAgIGlmIChtb3VzZSB8fCBwb2ludGVyKSB7XG4gICAgICAgICAgICAgICAgeCA9IGUuY2xpZW50WCArIHBhZ2VPZmZzZXQueDtcbiAgICAgICAgICAgICAgICB5ID0gZS5jbGllbnRZICsgcGFnZU9mZnNldC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wYWdlT2Zmc2V0ID0gcGFnZU9mZnNldDtcbiAgICAgICAgICAgIGUucG9pbnRzID0gW3gsIHldO1xuICAgICAgICAgICAgZS5jdXJzb3IgPSBtb3VzZSB8fCBwb2ludGVyOyAvLyBGaXggIzQzNVxuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJhbnNsYXRlIGEgY29vcmRpbmF0ZSBpbiB0aGUgZG9jdW1lbnQgdG8gYSBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gY2FsY1BvaW50VG9QZXJjZW50YWdlKGNhbGNQb2ludCkge1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gY2FsY1BvaW50IC0gb2Zmc2V0KHNjb3BlX0Jhc2UsIG9wdGlvbnMub3J0KTtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChsb2NhdGlvbiAqIDEwMCkgLyBiYXNlU2l6ZSgpO1xuICAgICAgICAgICAgLy8gQ2xhbXAgcHJvcG9zYWwgYmV0d2VlbiAwJSBhbmQgMTAwJVxuICAgICAgICAgICAgLy8gT3V0LW9mLWJvdW5kIGNvb3JkaW5hdGVzIG1heSBvY2N1ciB3aGVuIC5ub1VpLWJhc2UgcHNldWRvLWVsZW1lbnRzXG4gICAgICAgICAgICAvLyBhcmUgdXNlZCAoZS5nLiBjb250YWluZWQgaGFuZGxlcyBmZWF0dXJlKVxuICAgICAgICAgICAgcHJvcG9zYWwgPSBsaW1pdChwcm9wb3NhbCk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBwcm9wb3NhbCA6IHByb3Bvc2FsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbmQgaGFuZGxlIGNsb3Nlc3QgdG8gYSBjZXJ0YWluIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBnZXRDbG9zZXN0SGFuZGxlKGNsaWNrZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgdmFyIHNtYWxsZXN0RGlmZmVyZW5jZSA9IDEwMDtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIERpc2FibGVkIGhhbmRsZXMgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBpZiAoaXNIYW5kbGVEaXNhYmxlZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPSBNYXRoLmFicyhoYW5kbGVQb3NpdGlvbiAtIGNsaWNrZWRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbCBzdGF0ZVxuICAgICAgICAgICAgICAgIHZhciBjbGlja0F0RWRnZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9PT0gMTAwICYmIHNtYWxsZXN0RGlmZmVyZW5jZSA9PT0gMTAwO1xuICAgICAgICAgICAgICAgIC8vIERpZmZlcmVuY2Ugd2l0aCB0aGlzIGhhbmRsZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHByZXZpb3VzbHkgY2hlY2tlZCBoYW5kbGVcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPCBzbWFsbGVzdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyQWZ0ZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPD0gc21hbGxlc3REaWZmZXJlbmNlICYmIGNsaWNrZWRQb3NpdGlvbiA+IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChpc0Nsb3NlciB8fCBpc0Nsb3NlckFmdGVyIHx8IGNsaWNrQXRFZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBzbWFsbGVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmUgJ2VuZCcgd2hlbiBhIG1vdXNlIG9yIHBlbiBsZWF2ZXMgdGhlIGRvY3VtZW50LlxuICAgICAgICBmdW5jdGlvbiBkb2N1bWVudExlYXZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkhUTUxcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIG1vdmVtZW50IG9uIGRvY3VtZW50IGZvciBoYW5kbGUgYW5kIHJhbmdlIGRyYWcuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50TW92ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gRml4ICM0OThcbiAgICAgICAgICAgIC8vIENoZWNrIHZhbHVlIG9mIC5idXR0b25zIGluICdzdGFydCcgdG8gd29yayBhcm91bmQgYSBidWcgaW4gSUUxMCBtb2JpbGUgKGRhdGEuYnV0dG9uc1Byb3BlcnR5KS5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvOTI3MDA1L21vYmlsZS1pZTEwLXdpbmRvd3MtcGhvbmUtYnV0dG9ucy1wcm9wZXJ0eS1vZi1wb2ludGVybW92ZS1ldmVudC1hbHdheXMtemVyb1xuICAgICAgICAgICAgLy8gSUU5IGhhcyAuYnV0dG9ucyBhbmQgLndoaWNoIHplcm8gb24gbW91c2Vtb3ZlLlxuICAgICAgICAgICAgLy8gRmlyZWZveCBicmVha3MgdGhlIHNwZWMgTUROIGRlZmluZXMuXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgOVwiKSA9PT0gLTEgJiYgZXZlbnQuYnV0dG9ucyA9PT0gMCAmJiBkYXRhLmJ1dHRvbnNQcm9wZXJ0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgbW92aW5nIHVwIG9yIGRvd25cbiAgICAgICAgICAgIHZhciBtb3ZlbWVudCA9IChvcHRpb25zLmRpciA/IC0xIDogMSkgKiAoZXZlbnQuY2FsY1BvaW50IC0gZGF0YS5zdGFydENhbGNQb2ludCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBtb3ZlbWVudCBpbnRvIGEgcGVyY2VudGFnZSBvZiB0aGUgc2xpZGVyIHdpZHRoL2hlaWdodFxuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKG1vdmVtZW50ICogMTAwKSAvIGRhdGEuYmFzZVNpemU7XG4gICAgICAgICAgICBtb3ZlSGFuZGxlcyhtb3ZlbWVudCA+IDAsIHByb3Bvc2FsLCBkYXRhLmxvY2F0aW9ucywgZGF0YS5oYW5kbGVOdW1iZXJzLCBkYXRhLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuYmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudCwgY2FsbCBjYWxsYmFja3MuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50RW5kKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFuZGxlIGlzIG5vIGxvbmdlciBhY3RpdmUsIHNvIHJlbW92ZSB0aGUgY2xhc3MuXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhkYXRhLmhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVbmJpbmQgdGhlIG1vdmUgYW5kIGVuZCBldmVudHMsIHdoaWNoIGFyZSBhZGRlZCBvbiAnc3RhcnQnLlxuICAgICAgICAgICAgZGF0YS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0RvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGNbMF0sIGNbMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRyYWdnaW5nIGNsYXNzLlxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJzb3Igc3R5bGVzIGFuZCB0ZXh0LXNlbGVjdGlvbiBldmVudHMgYm91bmQgdG8gdGhlIGJvZHkuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5ldmVudHMuc21vb3RoU3RlcHMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZW5kXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LlxuICAgICAgICBmdW5jdGlvbiBldmVudFN0YXJ0KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgZXZlbnQgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5zb21lKGlzSGFuZGxlRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbZGF0YS5oYW5kbGVOdW1iZXJzWzBdXTtcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBoYW5kbGVPcmlnaW4uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgaGFuZGxlIGFzICdhY3RpdmUnIHNvIGl0IGNhbiBiZSBzdHlsZWQuXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEEgZHJhZyBzaG91bGQgbmV2ZXIgcHJvcGFnYXRlIHVwIHRvIHRoZSAndGFwJyBldmVudC5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy8gUmVjb3JkIHRoZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIG1vdmUgYW5kIGVuZCBldmVudHMuXG4gICAgICAgICAgICB2YXIgbW92ZUV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50TW92ZSwge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBldmVudCB0YXJnZXQgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwcm9wYWdhdGUgdGhlIG9yaWdpbmFsIG9uZSBzbyB0aGF0IHdlIGtlZXBcbiAgICAgICAgICAgICAgICAvLyByZWx5aW5nIG9uIGl0IHRvIGV4dHJhY3QgdGFyZ2V0IHRvdWNoZXMuXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgY29ubmVjdDogZGF0YS5jb25uZWN0LFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2FsY1BvaW50OiBldmVudC5jYWxjUG9pbnQsXG4gICAgICAgICAgICAgICAgYmFzZVNpemU6IGJhc2VTaXplKCksXG4gICAgICAgICAgICAgICAgcGFnZU9mZnNldDogZXZlbnQucGFnZU9mZnNldCxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1Byb3BlcnR5OiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogc2NvcGVfTG9jYXRpb25zLnNsaWNlKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBlbmRFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMuZW5kLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50RW5kLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb3V0RXZlbnQgPSBhdHRhY2hFdmVudChcIm1vdXNlb3V0XCIsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZG9jdW1lbnRMZWF2ZSwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgcHVzaGVkIHRoZSBsaXN0ZW5lcnMgaW4gdGhlIGxpc3RlbmVyIGxpc3QgcmF0aGVyIHRoYW4gY3JlYXRpbmdcbiAgICAgICAgICAgIC8vIGEgbmV3IG9uZSBhcyBpdCBoYXMgYWxyZWFkeSBiZWVuIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaC5hcHBseShsaXN0ZW5lcnMsIG1vdmVFdmVudC5jb25jYXQoZW5kRXZlbnQsIG91dEV2ZW50KSk7XG4gICAgICAgICAgICAvLyBUZXh0IHNlbGVjdGlvbiBpc24ndCBhbiBpc3N1ZSBvbiB0b3VjaCBkZXZpY2VzLFxuICAgICAgICAgICAgLy8gc28gYWRkaW5nIGN1cnNvciBzdHlsZXMgY2FuIGJlIHNraXBwZWQuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgJ0knIGN1cnNvciBhbmQgZXh0ZW5kIHRoZSByYW5nZS1kcmFnIGN1cnNvci5cbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0KS5jdXJzb3I7XG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgdGFyZ2V0IHdpdGggYSBkcmFnZ2luZyBzdGF0ZS5cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoZW4gZHJhZ2dpbmcgdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICAgICAgLy8gSW4gbm9VaVNsaWRlciA8PSA5LjIuMCwgdGhpcyB3YXMgaGFuZGxlZCBieSBjYWxsaW5nIHByZXZlbnREZWZhdWx0IG9uIG1vdXNlL3RvdWNoIHN0YXJ0L21vdmUsXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgc2Nyb2xsIGJsb2NraW5nLiBUaGUgc2VsZWN0c3RhcnQgZXZlbnQgaXMgc3VwcG9ydGVkIGJ5IEZpcmVGb3ggc3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDUyLFxuICAgICAgICAgICAgICAgIC8vIG1lYW5pbmcgdGhlIG9ubHkgaG9sZG91dCBpcyBpT1MgU2FmYXJpLiBUaGlzIGRvZXNuJ3QgbWF0dGVyOiB0ZXh0IHNlbGVjdGlvbiBpc24ndCB0cmlnZ2VyZWQgdGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gVGhlICdjdXJzb3InIGZsYWcgaXMgZmFsc2UuXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1zZWxlY3RzdGFydFxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic3RhcnRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgY2xvc2VzdCBoYW5kbGUgdG8gdGFwcGVkIGxvY2F0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudFRhcChldmVudCkge1xuICAgICAgICAgICAgLy8gVGhlIHRhcCBldmVudCBzaG91bGRuJ3QgcHJvcGFnYXRlIHVwXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGdldENsb3Nlc3RIYW5kbGUocHJvcG9zYWwpO1xuICAgICAgICAgICAgLy8gVGFja2xlIHRoZSBjYXNlIHRoYXQgYWxsIGhhbmRsZXMgYXJlICdkaXNhYmxlZCcuXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZsYWcgdGhlIHNsaWRlciBhcyBpdCBpcyBub3cgaW4gYSB0cmFuc2l0aW9uYWwgc3RhdGUuXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRha2VzIGEgY29uZmlndXJhYmxlIGFtb3VudCBvZiBtcyAoZGVmYXVsdCAzMDApLiBSZS1lbmFibGUgdGhlIHNsaWRlciBhZnRlciB0aGF0LlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHByb3Bvc2FsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudFN0YXJ0KGV2ZW50LCB7IGhhbmRsZU51bWJlcnM6IFtoYW5kbGVOdW1iZXJdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmVzIGEgJ2hvdmVyJyBldmVudCBmb3IgYSBob3ZlcmVkIG1vdXNlL3BlbiBwb3NpdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRIb3ZlcihldmVudCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiaG92ZXJcIiA9PT0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGVfU2VsZiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGtleWRvd24gb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIC8vIERvbid0IG1vdmUgdGhlIGRvY3VtZW50IHdoZW4gcHJlc3NpbmcgYXJyb3cga2V5cyBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgZnVuY3Rpb24gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgfHwgaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhvcml6b250YWxLZXlzID0gW1wiTGVmdFwiLCBcIlJpZ2h0XCJdO1xuICAgICAgICAgICAgdmFyIHZlcnRpY2FsS2V5cyA9IFtcIkRvd25cIiwgXCJVcFwiXTtcbiAgICAgICAgICAgIHZhciBsYXJnZVN0ZXBLZXlzID0gW1wiUGFnZURvd25cIiwgXCJQYWdlVXBcIl07XG4gICAgICAgICAgICB2YXIgZWRnZUtleXMgPSBbXCJIb21lXCIsIFwiRW5kXCJdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyICYmICFvcHRpb25zLm9ydCkge1xuICAgICAgICAgICAgICAgIC8vIE9uIGFuIHJpZ2h0LXRvLWxlZnQgc2xpZGVyLCB0aGUgbGVmdCBhbmQgcmlnaHQga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLm9ydCAmJiAhb3B0aW9ucy5kaXIpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhIHRvcC10by1ib3R0b20gc2xpZGVyLCB0aGUgdXAgYW5kIGRvd24ga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGxhcmdlU3RlcEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RyaXAgXCJBcnJvd1wiIGZvciBJRSBjb21wYXRpYmlsaXR5LiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9rZXlcbiAgICAgICAgICAgIHZhciBrZXkgPSBldmVudC5rZXkucmVwbGFjZShcIkFycm93XCIsIFwiXCIpO1xuICAgICAgICAgICAgdmFyIGlzTGFyZ2VEb3duID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTGFyZ2VVcCA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1sxXTtcbiAgICAgICAgICAgIHZhciBpc0Rvd24gPSBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdIHx8IGlzTGFyZ2VEb3duO1xuICAgICAgICAgICAgdmFyIGlzVXAgPSBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdIHx8IGlzTGFyZ2VVcDtcbiAgICAgICAgICAgIHZhciBpc01pbiA9IGtleSA9PT0gZWRnZUtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNNYXggPSBrZXkgPT09IGVkZ2VLZXlzWzFdO1xuICAgICAgICAgICAgaWYgKCFpc0Rvd24gJiYgIWlzVXAgJiYgIWlzTWluICYmICFpc01heCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciB0bztcbiAgICAgICAgICAgIGlmIChpc1VwIHx8IGlzRG93bikge1xuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0Rvd24gPyAwIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHMgPSBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcCA9IHN0ZXBzW2RpcmVjdGlvbl07XG4gICAgICAgICAgICAgICAgLy8gQXQgdGhlIGVkZ2Ugb2YgYSBzbGlkZXIsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIHN0ZXAgc2V0LCB1c2UgdGhlIGRlZmF1bHQgb2YgMTAlIG9mIHRoZSBzdWItcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLmdldERlZmF1bHRTdGVwKHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCBpc0Rvd24sIG9wdGlvbnMua2V5Ym9hcmREZWZhdWx0U3RlcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0xhcmdlVXAgfHwgaXNMYXJnZURvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkUGFnZU11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgICAgICAvLyBEZWNyZW1lbnQgZm9yIGRvd24gc3RlcHNcbiAgICAgICAgICAgICAgICBzdGVwID0gKGlzRG93biA/IC0xIDogMSkgKiBzdGVwO1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gKyBzdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNNYXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFbmQga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbb3B0aW9ucy5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSG9tZSBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGV2ZW50cyB0byBzZXZlcmFsIHNsaWRlciBwYXJ0cy5cbiAgICAgICAgZnVuY3Rpb24gYmluZFNsaWRlckV2ZW50cyhiZWhhdmlvdXIpIHtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgc3RhbmRhcmQgZHJhZyBldmVudCB0byB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmICghYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIGV2ZW50cyBhcmUgb25seSBib3VuZCB0byB0aGUgdmlzdWFsIGhhbmRsZVxuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50LCBub3QgdGhlICdyZWFsJyBvcmlnaW4gZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgaGFuZGxlLmNoaWxkcmVuWzBdLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgdGFwIGV2ZW50IHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIudGFwKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgc2NvcGVfQmFzZSwgZXZlbnRUYXAsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcmUgaG92ZXIgZXZlbnRzXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmhvdmVyKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9CYXNlLCBldmVudEhvdmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgcmFuZ2UgZHJhZ2dhYmxlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29ubmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgPT09IGZhbHNlIHx8IGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUJlZm9yZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUFmdGVyID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudEhvbGRlcnMgPSBbY29ubmVjdF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVzVG9EcmFnID0gW2hhbmRsZUJlZm9yZSwgaGFuZGxlQWZ0ZXJdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyc1RvRHJhZyA9IFtpbmRleCAtIDEsIGluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoY29ubmVjdCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWdnYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIHJhbmdlIGlzIGZpeGVkLCB0aGUgZW50aXJlIHJhbmdlIGNhblxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBkcmFnZ2VkIGJ5IHRoZSBoYW5kbGVzLiBUaGUgaGFuZGxlIGluIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBvcmlnaW4gd2lsbCBwcm9wYWdhdGUgdGhlIHN0YXJ0IGV2ZW50IHVwd2FyZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGl0IG5lZWRzIHRvIGJlIGJvdW5kIG1hbnVhbGx5IG9uIHRoZSBvdGhlci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQmVmb3JlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUFmdGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXNUb0RyYWcgPSBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyc1RvRHJhZyA9IHNjb3BlX0hhbmRsZU51bWJlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBldmVudEhvbGRlciwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXM6IGhhbmRsZXNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogaGFuZGxlTnVtYmVyc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBhbiBldmVudCB0byB0aGlzIHNsaWRlciwgcG9zc2libHkgaW5jbHVkaW5nIGEgbmFtZXNwYWNlXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudChuYW1lc3BhY2VkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSA9IHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgYm91bmQgaXMgJ3VwZGF0ZSwnIGZpcmUgaXQgaW1tZWRpYXRlbHkgZm9yIGFsbCBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF0gPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLmFyaWEgfHwgbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmRvIGF0dGFjaG1lbnQgb2YgZXZlbnRcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQobmFtZXNwYWNlZEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuYW1lc3BhY2VkRXZlbnQgJiYgbmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudCA/IG5hbWVzcGFjZWRFdmVudC5zdWJzdHJpbmcoZXZlbnQubGVuZ3RoKSA6IG5hbWVzcGFjZWRFdmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoYmluZCkge1xuICAgICAgICAgICAgICAgIHZhciB0RXZlbnQgPSBiaW5kLnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICB2YXIgdE5hbWVzcGFjZSA9IGJpbmQuc3Vic3RyaW5nKHRFdmVudC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmICgoIWV2ZW50IHx8IGV2ZW50ID09PSB0RXZlbnQpICYmICghbmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBkZWxldGUgcHJvdGVjdGVkIGludGVybmFsIGV2ZW50IGlmIGludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNJbnRlcm5hbE5hbWVzcGFjZSh0TmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9FdmVudHNbYmluZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeHRlcm5hbCBldmVudCBoYW5kbGluZ1xuICAgICAgICBmdW5jdGlvbiBmaXJlRXZlbnQoZXZlbnROYW1lLCBoYW5kbGVOdW1iZXIsIHRhcCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIHNsaWRlciBwdWJsaWMgQVBJIGFzIHRoZSBzY29wZSAoJ3RoaXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdmFsdWVzIGFzIGFycmF5LCBzbyBhcmdfMVthcmdfMl0gaXMgYWx3YXlzIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGluZGV4LCAwIG9yIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbi1mb3JtYXR0ZWQgc2xpZGVyIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnQgaXMgZmlyZWQgYnkgdGFwLCB0cnVlIG9yIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXAgfHwgZmFsc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVmdCBvZmZzZXQgb2YgdGhlIGhhbmRsZSwgaW4gcmVsYXRpb24gdG8gdGhlIHNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBzbGlkZXIgcHVibGljIEFQSSB0byBhbiBhY2Nlc3NpYmxlIHBhcmFtZXRlciB3aGVuIHRoaXMgaXMgdW5hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTcGxpdCBvdXQgdGhlIGhhbmRsZSBwb3NpdGlvbmluZyBsb2dpYyBzbyB0aGUgTW92ZSBldmVudCBjYW4gdXNlIGl0LCB0b29cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tIYW5kbGVQb3NpdGlvbihyZWZlcmVuY2UsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGdldFZhbHVlLCBzbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlO1xuICAgICAgICAgICAgLy8gRm9yIHNsaWRlcnMgd2l0aCBtdWx0aXBsZSBoYW5kbGVzLCBsaW1pdCBtb3ZlbWVudCB0byB0aGUgb3RoZXIgaGFuZGxlLlxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIG1hcmdpbiBvcHRpb24gYnkgYWRkaW5nIGl0IHRvIHRoZSBoYW5kbGUgcG9zaXRpb25zLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiAhb3B0aW9ucy5ldmVudHMudW5jb25zdHJhaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLm1hcmdpbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5tYXJnaW4sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIGxpbWl0IG9wdGlvbiBoYXMgdGhlIG9wcG9zaXRlIGVmZmVjdCwgbGltaXRpbmcgaGFuZGxlcyB0byBhXG4gICAgICAgICAgICAvLyBtYXhpbXVtIGRpc3RhbmNlIGZyb20gYW5vdGhlci4gTGltaXQgbXVzdCBiZSA+IDAsIGFzIG90aGVyd2lzZVxuICAgICAgICAgICAgLy8gaGFuZGxlcyB3b3VsZCBiZSB1bm1vdmFibGUuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmIG9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5saW1pdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5saW1pdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgcGFkZGluZyBvcHRpb24ga2VlcHMgdGhlIGhhbmRsZXMgYSBjZXJ0YWluIGRpc3RhbmNlIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBlZGdlcyBvZiB0aGUgc2xpZGVyLiBQYWRkaW5nIG11c3QgYmUgPiAwLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFkZGluZykge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDAsIG9wdGlvbnMucGFkZGluZ1swXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMTAwLCBvcHRpb25zLnBhZGRpbmdbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMaW1pdCBwZXJjZW50YWdlIHRvIHRoZSAwIC0gMTAwIHJhbmdlXG4gICAgICAgICAgICB0byA9IGxpbWl0KHRvKTtcbiAgICAgICAgICAgIC8vIFJldHVybiBmYWxzZSBpZiBoYW5kbGUgY2FuJ3QgbW92ZVxuICAgICAgICAgICAgaWYgKHRvID09PSByZWZlcmVuY2VbaGFuZGxlTnVtYmVyXSAmJiAhZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlcyBzbGlkZXIgb3JpZW50YXRpb24gdG8gY3JlYXRlIENTUyBydWxlcy4gYSA9IGJhc2UgdmFsdWU7XG4gICAgICAgIGZ1bmN0aW9uIGluUnVsZU9yZGVyKHYsIGEpIHtcbiAgICAgICAgICAgIHZhciBvID0gb3B0aW9ucy5vcnQ7XG4gICAgICAgICAgICByZXR1cm4gKG8gPyBhIDogdikgKyBcIiwgXCIgKyAobyA/IHYgOiBhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlcyBoYW5kbGUocykgYnkgYSBwZXJjZW50YWdlXG4gICAgICAgIC8vIChib29sLCAlIHRvIG1vdmUsIFslIHdoZXJlIGhhbmRsZSBzdGFydGVkLCAuLi5dLCBbaW5kZXggaW4gc2NvcGVfSGFuZGxlcywgLi4uXSlcbiAgICAgICAgZnVuY3Rpb24gbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgbG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzLCBjb25uZWN0KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWxzID0gbG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBTdG9yZSBmaXJzdCBoYW5kbGUgbm93LCBzbyB3ZSBzdGlsbCBoYXZlIGl0IGluIGNhc2UgaGFuZGxlTnVtYmVycyBpcyByZXZlcnNlZFxuICAgICAgICAgICAgdmFyIGZpcnN0SGFuZGxlID0gaGFuZGxlTnVtYmVyc1swXTtcbiAgICAgICAgICAgIHZhciBzbW9vdGhTdGVwcyA9IG9wdGlvbnMuZXZlbnRzLnNtb290aFN0ZXBzO1xuICAgICAgICAgICAgdmFyIGIgPSBbIXVwd2FyZCwgdXB3YXJkXTtcbiAgICAgICAgICAgIHZhciBmID0gW3Vwd2FyZCwgIXVwd2FyZF07XG4gICAgICAgICAgICAvLyBDb3B5IGhhbmRsZU51bWJlcnMgc28gd2UgZG9uJ3QgY2hhbmdlIHRoZSBkYXRhc2V0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzID0gaGFuZGxlTnVtYmVycy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIHdoaWNoIGhhbmRsZSBpcyAnbGVhZGluZycuXG4gICAgICAgICAgICAvLyBJZiB0aGF0IG9uZSBjYW4ndCBtb3ZlIHRoZSBzZWNvbmQgY2FuJ3QgZWl0aGVyLlxuICAgICAgICAgICAgaWYgKHVwd2FyZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCAxOiBnZXQgdGhlIG1heGltdW0gcGVyY2VudGFnZSB0aGF0IGFueSBvZiB0aGUgaGFuZGxlcyBjYW4gbW92ZVxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24ocHJvcG9zYWxzLCBoYW5kbGVOdW1iZXIsIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10sIGZhbHNlLCBzbW9vdGhTdGVwcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgb25lIG9mIHRoZSBoYW5kbGVzIGNhbid0IG1vdmUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gdG8gLSBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVzaW5nIG9uZSBoYW5kbGUsIGNoZWNrIGJhY2t3YXJkIEFORCBmb3J3YXJkXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiID0gZiA9IFt0cnVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gU3RlcCAyOiBUcnkgdG8gc2V0IHRoZSBoYW5kbGVzIHdpdGggdGhlIGZvdW5kIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBsb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSwgc21vb3RoU3RlcHMpIHx8IHN0YXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTdGVwIDM6IElmIGEgaGFuZGxlIG1vdmVkLCBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgY29ubmVjdCwgdGhlbiBmaXJlIGRyYWcgZXZlbnRcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZHJhZ1wiLCBmaXJzdEhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRha2VzIGEgYmFzZSB2YWx1ZSBhbmQgYW4gb2Zmc2V0LiBUaGlzIG9mZnNldCBpcyB1c2VkIGZvciB0aGUgY29ubmVjdCBiYXIgc2l6ZS5cbiAgICAgICAgLy8gSW4gdGhlIGluaXRpYWwgZGVzaWduIGZvciB0aGlzIGZlYXR1cmUsIHRoZSBvcmlnaW4gZWxlbWVudCB3YXMgMSUgd2lkZS5cbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgYSByb3VuZGluZyBidWcgaW4gQ2hyb21lIG1ha2VzIGl0IGltcG9zc2libGUgdG8gaW1wbGVtZW50IHRoaXMgZmVhdHVyZVxuICAgICAgICAvLyBpbiB0aGlzIG1hbm5lcjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzk4MjIzXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBhIC0gYiA6IGE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzY29wZV9Mb2NhdGlvbnMgYW5kIHNjb3BlX1ZhbHVlcywgdXBkYXRlcyB2aXN1YWwgc3RhdGVcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0bykge1xuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9ucy5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSB2YWx1ZSB0byB0aGUgc2xpZGVyIHN0ZXBwaW5nL3JhbmdlLlxuICAgICAgICAgICAgc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uID0gdHJhbnNmb3JtRGlyZWN0aW9uKHRvLCAwKSAtIHNjb3BlX0Rpck9mZnNldDtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2xhdGlvbiArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID0gdHJhbnNsYXRlUnVsZTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgICAgIC8vIEhhbmRsZXMgYWZ0ZXIgdGhlIG1pZGRsZSBsYXRlciBpcyBsb3dlclxuICAgICAgICAvLyBbWzddIFs4XSAuLi4uLi4uLi4uIHwgLi4uLi4uLi4uLiBbNV0gWzRdXG4gICAgICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpciA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID4gNTAgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zdHlsZS56SW5kZXggPSBTdHJpbmcoekluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3Qgc3VnZ2VzdGVkIHZhbHVlcyBhbmQgYXBwbHkgbWFyZ2luLCBzdGVwLlxuICAgICAgICAvLyBpZiBleGFjdElucHV0IGlzIHRydWUsIGRvbid0IHJ1biBjaGVja0hhbmRsZVBvc2l0aW9uLCB0aGVuIHRoZSBoYW5kbGUgY2FuIGJlIHBsYWNlZCBpbiBiZXR3ZWVuIHN0ZXBzICgjNDM2KVxuICAgICAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgICAgIGlmICghZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGZhbHNlLCBzbW9vdGhTdGVwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0byk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHN0eWxlIGF0dHJpYnV0ZSBmb3IgY29ubmVjdCBub2Rlc1xuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb25uZWN0KGluZGV4KSB7XG4gICAgICAgICAgICAvLyBTa2lwIGNvbm5lY3RzIHNldCB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKCFzY29wZV9Db25uZWN0c1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbCA9IDA7XG4gICAgICAgICAgICB2YXIgaCA9IDEwMDtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGwgPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGggPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgdXNlIHR3byBydWxlczpcbiAgICAgICAgICAgIC8vICd0cmFuc2xhdGUnIHRvIGNoYW5nZSB0aGUgbGVmdC90b3Agb2Zmc2V0O1xuICAgICAgICAgICAgLy8gJ3NjYWxlJyB0byBjaGFuZ2UgdGhlIHdpZHRoIG9mIHRoZSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gQXMgdGhlIGVsZW1lbnQgaGFzIGEgd2lkdGggb2YgMTAwJSwgYSB0cmFuc2xhdGlvbiBvZiAxMDAlIGlzIGVxdWFsIHRvIDEwMCUgb2YgdGhlIHBhcmVudCAoLm5vVWktYmFzZSlcbiAgICAgICAgICAgIHZhciBjb25uZWN0V2lkdGggPSBoIC0gbDtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2Zvcm1EaXJlY3Rpb24obCwgY29ubmVjdFdpZHRoKSArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHZhciBzY2FsZVJ1bGUgPSBcInNjYWxlKFwiICsgaW5SdWxlT3JkZXIoY29ubmVjdFdpZHRoIC8gMTAwLCBcIjFcIikgKyBcIilcIjtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzW2luZGV4XS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID1cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVSdWxlICsgXCIgXCIgKyBzY2FsZVJ1bGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGFyc2VzIHZhbHVlIHBhc3NlZCB0byAuc2V0IG1ldGhvZC4gUmV0dXJucyBjdXJyZW50IHZhbHVlIGlmIG5vdCBwYXJzZS1hYmxlLlxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlVG9WYWx1ZSh0bywgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIHdpdGggbnVsbCBpbmRpY2F0ZXMgYW4gJ2lnbm9yZScuXG4gICAgICAgICAgICAvLyBJbnB1dHRpbmcgJ2ZhbHNlJyBpcyBpbnZhbGlkLlxuICAgICAgICAgICAgaWYgKHRvID09PSBudWxsIHx8IHRvID09PSBmYWxzZSB8fCB0byA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYSBmb3JtYXR0ZWQgbnVtYmVyIHdhcyBwYXNzZWQsIGF0dGVtcHQgdG8gZGVjb2RlIGl0LlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHRvID0gU3RyaW5nKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvID0gb3B0aW9ucy5mb3JtYXQuZnJvbSh0byk7XG4gICAgICAgICAgICBpZiAodG8gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHBhcnNpbmcgdGhlIG51bWJlciBmYWlsZWQsIHVzZSB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UgfHwgaXNOYU4odG8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldChpbnB1dCwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gYXNBcnJheShpbnB1dCk7XG4gICAgICAgICAgICB2YXIgaXNJbml0ID0gc2NvcGVfTG9jYXRpb25zWzBdID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAvLyBFdmVudCBmaXJlcyBieSBkZWZhdWx0XG4gICAgICAgICAgICBmaXJlU2V0RXZlbnQgPSBmaXJlU2V0RXZlbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaXJlU2V0RXZlbnQ7XG4gICAgICAgICAgICAvLyBBbmltYXRpb24gaXMgb3B0aW9uYWwuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGluaXRpYWwgdmFsdWVzIHdlcmUgc2V0IGJlZm9yZSB1c2luZyBhbmltYXRlZCBwbGFjZW1lbnQuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlICYmICFpc0luaXQpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyc3QgcGFzcywgd2l0aG91dCBsb29rQWhlYWQgYnV0IHdpdGggbG9va0JhY2t3YXJkLiBWYWx1ZXMgYXJlIHNldCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlc1toYW5kbGVOdW1iZXJdLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCBmYWxzZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBpID0gc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEgPyAwIDogMTtcbiAgICAgICAgICAgIC8vIFNwcmVhZCBoYW5kbGVzIGV2ZW5seSBhY3Jvc3MgdGhlIHNsaWRlciBpZiB0aGUgcmFuZ2UgaGFzIG5vIHNpemUgKG1pbj1tYXgpXG4gICAgICAgICAgICBpZiAoaXNJbml0ICYmIHNjb3BlX1NwZWN0cnVtLmhhc05vU2l6ZSgpKSB7XG4gICAgICAgICAgICAgICAgZXhhY3RJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zWzBdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGFjZV8xID0gMTAwIC8gKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IGhhbmRsZU51bWJlciAqIHNwYWNlXzE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlY29uZGFyeSBwYXNzZXMuIE5vdyB0aGF0IGFsbCBiYXNlIHZhbHVlcyBhcmUgc2V0LCBhcHBseSBjb25zdHJhaW50cy5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYWxsIGhhbmRsZXMgdG8gZW5zdXJlIGNvbnN0cmFpbnRzIGFyZSBhcHBsaWVkIGZvciB0aGUgZW50aXJlIHNsaWRlciAoSXNzdWUgIzEwMDkpXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgdHJ1ZSwgdHJ1ZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgLy8gRmlyZSB0aGUgZXZlbnQgb25seSBmb3IgaGFuZGxlcyB0aGF0IHJlY2VpdmVkIGEgbmV3IHZhbHVlLCBhcyBwZXIgIzU3OVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNbaGFuZGxlTnVtYmVyXSAhPT0gbnVsbCAmJiBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgc2xpZGVyIHRvIGluaXRpYWwgdmFsdWVzXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlUmVzZXQoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0LCBmaXJlU2V0RXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB2YWx1ZSBmb3IgYSBzaW5nbGUgaGFuZGxlXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdmFsdWUsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIG51bWVyaWMgaW5wdXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlciA9IE51bWJlcihoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKCEoaGFuZGxlTnVtYmVyID49IDAgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogaW52YWxpZCBoYW5kbGUgbnVtYmVyLCBnb3Q6IFwiICsgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb2sgYm90aCBiYWNrd2FyZCBhbmQgZm9yd2FyZCwgc2luY2Ugd2UgZG9uJ3Qgd2FudCB0aGlzIGhhbmRsZSB0byBcInB1c2hcIiBvdGhlciBoYW5kbGVzICgjOTYwKTtcbiAgICAgICAgICAgIC8vIFRoZSBleGFjdElucHV0IGFyZ3VtZW50IGNhbiBiZSB1c2VkIHRvIGlnbm9yZSBzbGlkZXIgc3RlcHBpbmcgKCM0MzYpXG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgdHJ1ZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVHZXQodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkID09PSB2b2lkIDApIHsgdW5lbmNvZGVkID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSByYXcgdmFsdWVzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1ZhbHVlcy5sZW5ndGggPT09IDEgPyBzY29wZV9WYWx1ZXNbMF0gOiBzY29wZV9WYWx1ZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byk7XG4gICAgICAgICAgICAvLyBJZiBvbmx5IG9uZSBoYW5kbGUgaXMgdXNlZCwgcmV0dXJuIGEgc2luZ2xlIHZhbHVlLlxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmVzIGNsYXNzZXMgZnJvbSB0aGUgcm9vdCBhbmQgZW1wdGllcyBpdC5cbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgbGlzdGVuZXJzXG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuY3NzQ2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdoaWxlIChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlX1RhcmdldC5yZW1vdmVDaGlsZChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgc2NvcGVfVGFyZ2V0Lm5vVWlTbGlkZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgbmVhcmJ5U3RlcHMgPSBzY29wZV9TcGVjdHJ1bS5nZXROZWFyYnlTdGVwcyhsb2NhdGlvbik7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICAgICAgdmFyIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAvLyBJZiBzbmFwcGVkLCBkaXJlY3RseSB1c2UgZGVmaW5lZCBzdGVwIHZhbHVlXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0YXJ0VmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCB2YWx1ZSBpbiB0aGlzIHN0ZXAgbW92ZXMgaW50byB0aGUgbmV4dCBzdGVwLFxuICAgICAgICAgICAgLy8gdGhlIGluY3JlbWVudCBpcyB0aGUgc3RhcnQgb2YgdGhlIG5leHQgc3RlcCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSArIGluY3JlbWVudCA+IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGJleW9uZCB0aGUgc3RhcnRpbmcgcG9pbnRcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYSBoYW5kbGUgaXMgYXQgdGhlIHN0YXJ0IG9mIGEgc3RlcCwgaXQgYWx3YXlzIHN0ZXBzIGJhY2sgaW50byB0aGUgcHJldmlvdXMgc3RlcCBmaXJzdFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLmhpZ2hlc3RTdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm93LCBpZiBhdCB0aGUgc2xpZGVyIGVkZ2VzLCB0aGVyZSBpcyBubyBpbi9kZWNyZW1lbnRcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxvY2F0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFzIHBlciAjMzkxLCB0aGUgY29tcGFyaXNvbiBmb3IgdGhlIGRlY3JlbWVudCBzdGVwIGNhbiBoYXZlIHNvbWUgcm91bmRpbmcgaXNzdWVzLlxuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHNjb3BlX1NwZWN0cnVtLmNvdW50U3RlcERlY2ltYWxzKCk7XG4gICAgICAgICAgICAvLyBSb3VuZCBwZXIgIzM5MVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gbnVsbCAmJiBpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gTnVtYmVyKGluY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlY3JlbWVudCAhPT0gbnVsbCAmJiBkZWNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gTnVtYmVyKGRlY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtkZWNyZW1lbnQsIGluY3JlbWVudF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgc2l6ZSBmb3IgdGhlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZU51bWJlcnMubWFwKGdldE5leHRTdGVwc0ZvckhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRhYmxlOiBtYXJnaW4sIGxpbWl0LCBwYWRkaW5nLCBzdGVwLCByYW5nZSwgYW5pbWF0ZSwgc25hcFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnNUb1VwZGF0ZSwgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAvLyBTcGVjdHJ1bSBpcyBjcmVhdGVkIHVzaW5nIHRoZSByYW5nZSwgc25hcCwgZGlyZWN0aW9uIGFuZCBzdGVwIG9wdGlvbnMuXG4gICAgICAgICAgICAvLyAnc25hcCcgYW5kICdzdGVwJyBjYW4gYmUgdXBkYXRlZC5cbiAgICAgICAgICAgIC8vIElmICdzbmFwJyBhbmQgJ3N0ZXAnIGFyZSBub3QgcGFzc2VkLCB0aGV5IHNob3VsZCByZW1haW4gdW5jaGFuZ2VkLlxuICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZUdldCgpO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZUFibGUgPSBbXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5cIixcbiAgICAgICAgICAgICAgICBcImxpbWl0XCIsXG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyYW5nZVwiLFxuICAgICAgICAgICAgICAgIFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwic25hcFwiLFxuICAgICAgICAgICAgICAgIFwic3RlcFwiLFxuICAgICAgICAgICAgICAgIFwiZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgXCJwaXBzXCIsXG4gICAgICAgICAgICAgICAgXCJ0b29sdGlwc1wiLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIE9ubHkgY2hhbmdlIG9wdGlvbnMgdGhhdCB3ZSdyZSBhY3R1YWxseSBwYXNzZWQgdG8gdXBkYXRlLlxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHVuZGVmaW5lZC4gbnVsbCByZW1vdmVzIHRoZSB2YWx1ZS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zW25hbWVdID0gb3B0aW9uc1RvVXBkYXRlW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gTG9hZCBuZXcgb3B0aW9ucyBpbnRvIHRoZSBzbGlkZXIgc3RhdGVcbiAgICAgICAgICAgIHVwZGF0ZUFibGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVdID0gbmV3T3B0aW9uc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjb3BlX1NwZWN0cnVtID0gbmV3T3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgICAgIC8vIExpbWl0LCBtYXJnaW4gYW5kIHBhZGRpbmcgZGVwZW5kIG9uIHRoZSBzcGVjdHJ1bSBidXQgYXJlIHN0b3JlZCBvdXRzaWRlIG9mIGl0LiAoIzY3NylcbiAgICAgICAgICAgIG9wdGlvbnMubWFyZ2luID0gbmV3T3B0aW9ucy5tYXJnaW47XG4gICAgICAgICAgICBvcHRpb25zLmxpbWl0ID0gbmV3T3B0aW9ucy5saW1pdDtcbiAgICAgICAgICAgIG9wdGlvbnMucGFkZGluZyA9IG5ld09wdGlvbnMucGFkZGluZztcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xuICAgICAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0b29sdGlwcywgcmVtb3ZlcyBleGlzdGluZy5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJbnZhbGlkYXRlIHRoZSBjdXJyZW50IHBvc2l0aW9uaW5nIHNvIHZhbHVlU2V0IGZvcmNlcyBhbiB1cGRhdGUuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIHZhbHVlU2V0KGlzU2V0KG9wdGlvbnNUb1VwZGF0ZS5zdGFydCkgPyBvcHRpb25zVG9VcGRhdGUuc3RhcnQgOiB2LCBmaXJlU2V0RXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemF0aW9uIHN0ZXBzXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU2xpZGVyKCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGVsZW1lbnQsIGluaXRpYWxpemUgSFRNTCBhbmQgc2V0IGNsYXNzZXMuXG4gICAgICAgICAgICAvLyBBZGQgaGFuZGxlcyBhbmQgY29ubmVjdCBlbGVtZW50cy5cbiAgICAgICAgICAgIHNjb3BlX0Jhc2UgPSBhZGRTbGlkZXIoc2NvcGVfVGFyZ2V0KTtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRzKG9wdGlvbnMuY29ubmVjdCwgc2NvcGVfQmFzZSk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdXNlciBldmVudHMuXG4gICAgICAgICAgICBiaW5kU2xpZGVyRXZlbnRzKG9wdGlvbnMuZXZlbnRzKTtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcHVibGljIHZhbHVlIG1ldGhvZCB0byBzZXQgdGhlIHN0YXJ0IHZhbHVlcy5cbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xuICAgICAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyaWEoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXR1cFNsaWRlcigpO1xuICAgICAgICB2YXIgc2NvcGVfU2VsZiA9IHtcbiAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICAgICAgICBzdGVwczogZ2V0TmV4dFN0ZXBzLFxuICAgICAgICAgICAgb246IGJpbmRFdmVudCxcbiAgICAgICAgICAgIG9mZjogcmVtb3ZlRXZlbnQsXG4gICAgICAgICAgICBnZXQ6IHZhbHVlR2V0LFxuICAgICAgICAgICAgc2V0OiB2YWx1ZVNldCxcbiAgICAgICAgICAgIHNldEhhbmRsZTogdmFsdWVTZXRIYW5kbGUsXG4gICAgICAgICAgICByZXNldDogdmFsdWVSZXNldCxcbiAgICAgICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIF9fbW92ZUhhbmRsZXM6IGZ1bmN0aW9uICh1cHdhcmQsIHByb3Bvc2FsLCBoYW5kbGVOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiBvcmlnaW5hbE9wdGlvbnMsXG4gICAgICAgICAgICB1cGRhdGVPcHRpb25zOiB1cGRhdGVPcHRpb25zLFxuICAgICAgICAgICAgdGFyZ2V0OiBzY29wZV9UYXJnZXQsXG4gICAgICAgICAgICByZW1vdmVQaXBzOiByZW1vdmVQaXBzLFxuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHM6IHJlbW92ZVRvb2x0aXBzLFxuICAgICAgICAgICAgZ2V0UG9zaXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRvb2x0aXBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE9yaWdpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaXBzOiBwaXBzLCAvLyBJc3N1ZSAjNTk0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzY29wZV9TZWxmO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIHN0YW5kYXJkIGluaXRpYWxpemVyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSh0YXJnZXQsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lm5vZGVOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBjcmVhdGUgcmVxdWlyZXMgYSBzaW5nbGUgZWxlbWVudCwgZ290OiBcIiArIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIHNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICAgICAgaWYgKHRhcmdldC5ub1VpU2xpZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBTbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3QgdGhlIG9wdGlvbnMgYW5kIGNyZWF0ZSB0aGUgc2xpZGVyIGVudmlyb25tZW50O1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgIHZhciBhcGkgPSBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgIHRhcmdldC5ub1VpU2xpZGVyID0gYXBpO1xuICAgICAgICByZXR1cm4gYXBpO1xuICAgIH1cbiAgICB2YXIgbm91aXNsaWRlciA9IHtcbiAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBfX3NwZWN0cnVtOiBTcGVjdHJ1bSxcbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQgY2xhc3NlcywgYWxsb3dzIGdsb2JhbCBjaGFuZ2VzLlxuICAgICAgICAvLyBVc2UgdGhlIGNzc0NsYXNzZXMgb3B0aW9uIGZvciBjaGFuZ2VzIHRvIG9uZSBzbGlkZXIuXG4gICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgIGNyZWF0ZTogaW5pdGlhbGl6ZSxcbiAgICB9O1xuXG4gICAgZXhwb3J0cy5jcmVhdGUgPSBpbml0aWFsaXplO1xuICAgIGV4cG9ydHMuY3NzQ2xhc3NlcyA9IGNzc0NsYXNzZXM7XG4gICAgZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBub3Vpc2xpZGVyO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQge1xuICBwdWJsaWMgY2FydFN0b3JhZ2U6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XG4gIHB1YmxpYyBjYXJ0Q291bnRlcjogbnVtYmVyO1xuICBwcml2YXRlIG1vZGFsT3ZlcmxheTogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgbW9kYWxCdXR0b246IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhcnRTdG9yYWdlID0ge307XG4gICAgdGhpcy5jYXJ0Q291bnRlciA9IDA7XG4gICAgdGhpcy5tb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xuICAgIHRoaXMubW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcC1wb3B1cF9fYnV0dG9uJyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGNhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydFN0b3JhZ2UnKTtcbiAgICBpZiAoY2FydCkge1xuICAgICAgdGhpcy5jYXJ0U3RvcmFnZSA9IEpTT04ucGFyc2UoY2FydCkgYXMgeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgICAgIHRoaXMuY2FydENvdW50ZXIgPSBPYmplY3Qua2V5cyh0aGlzLmNhcnRTdG9yYWdlKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5tb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLm1vZGFsT3ZlcmxheSkgdGhpcy5tb2RhbE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jYXJ0U3RvcmFnZVtuYW1lXSkge1xuICAgICAgdGhpcy5jYXJ0U3RvcmFnZVtuYW1lXSArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhcnRTdG9yYWdlW25hbWVdID0gMTtcbiAgICB9XG4gICAgdGhpcy5jYXJ0Q291bnRlciArPSAxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0U3RvcmFnZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydFN0b3JhZ2UpKTtcbiAgfVxuXG4gIHJlbW92ZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jYXJ0U3RvcmFnZVtuYW1lXSkge1xuICAgICAgdGhpcy5jYXJ0U3RvcmFnZVtuYW1lXSAtPSAxO1xuICAgICAgdGhpcy5jYXJ0Q291bnRlciAtPSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYXJ0U3RvcmFnZVtuYW1lXSA8PSAwKSBkZWxldGUgdGhpcy5jYXJ0U3RvcmFnZVtuYW1lXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydFN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnRTdG9yYWdlKSk7XG4gIH1cblxuICB0b2dnbGUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY2FydFN0b3JhZ2VbbmFtZV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNhcnRTdG9yYWdlW25hbWVdO1xuICAgICAgdGhpcy5jYXJ0Q291bnRlciAtPSAxO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jYXJ0Q291bnRlciA+PSAyMCkge1xuICAgICAgdGhpcy5zaG93TW9kYWwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0U3RvcmFnZVtuYW1lXSA9IDE7XG4gICAgICB0aGlzLmNhcnRDb3VudGVyICs9IDE7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0U3RvcmFnZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydFN0b3JhZ2UpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2FydFN0b3JhZ2UgPSB7fTtcbiAgICB0aGlzLmNhcnRDb3VudGVyID0gMDtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydFN0b3JhZ2UnKTtcbiAgfVxuXG4gIHNob3dNb2RhbCgpIHtcbiAgICB0aGlzLm1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENhbWVyYURhdGEgfSBmcm9tICcuLi8uLi9kYXRhJztcblxuaW50ZXJmYWNlIERPTURyYXcge1xuICBkcmF3KGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10sIGNhcnQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyQ2FyZHMgaW1wbGVtZW50cyBET01EcmF3IHtcbiAgZHJhdyhkYXRhOiBDYW1lcmFEYXRhLCBjYXJ0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogdm9pZCB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3Qgc291cmNlSXRlbVRlbXA6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkLXRlbXBsYXRlJyk7XG5cbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcC50ZXh0Q29udGVudCA9ICfQmNC30LLQuNC90LjRgtC1LCDQv9C+INCy0LDRiNC10LzRgyDQt9Cw0L/RgNC+0YHRgyDRgtC+0LLQsNGA0L7QsiDQvdC10YIuJztcbiAgICAgIHAuY2xhc3NMaXN0LmFkZCgndGV4dC1uby1jYXJkcycpO1xuXG4gICAgICBmcmFnbWVudC5hcHBlbmQocCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBzb3VyY2VDbG9uZSA9IHNvdXJjZUl0ZW1UZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IGltZzogSFRNTEltYWdlRWxlbWVudCA9IHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX2ltYWdlJyk7XG4gICAgICAgIGltZy5zcmMgPSBgLi9pbWFnZXMvY2FtZXJhcy8ke2l0ZW0uaW1nfS5qcGdgO1xuXG4gICAgICAgIHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX25hbWUnKS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNob3AtY2FyZF9fcHJpY2UnKS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2UucmVwbGFjZShcbiAgICAgICAgICAvKFxcZCkoPz0oPzpcXGRcXGRcXGQpKyQpL2csIC8vIFJlcGxhY2UgMyBkaWdpdHMgd2l0aCB0aGVtc2VsdmVzICsgbm8tYnJlYWsgc3BhY2VcbiAgICAgICAgICAnJDFcXHUyMDJmJ1xuICAgICAgICApO1xuICAgICAgICBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX19tcGl4JykudGV4dENvbnRlbnQgPSBpdGVtLm1waXg7XG4gICAgICAgIHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX3R5cGUnKS50ZXh0Q29udGVudCA9IGl0ZW0udHlwZTtcbiAgICAgICAgc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNob3AtY2FyZF9fc3RhYicpLnRleHRDb250ZW50ID0gaXRlbS5zdGFiaWxpemF0aW9uO1xuXG4gICAgICAgIHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX3N0b2NrJykudGV4dENvbnRlbnQgPSBpdGVtLnN0b2NrID8gJ9CSINC90LDQu9C40YfQuNC4JyA6ICfQn9C+0LQg0LfQsNC60LDQtyc7XG4gICAgICAgIGl0ZW0uc3RvY2tcbiAgICAgICAgICA/IHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX3N0b2NrJykuY2xhc3NMaXN0LmFkZCgndGV4dC1pbi1zdG9jaycpXG4gICAgICAgICAgOiBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX19zdG9jaycpLmNsYXNzTGlzdC5hZGQoJ3RleHQtb3V0LW9mLXN0b2NrJyk7XG5cbiAgICAgICAgc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNob3AtY2FyZF9fY2FydCcpLnRleHRDb250ZW50ID0gY2FydFtpdGVtLm5hbWVdID8gJ9CS0YvQsdGA0LDQvdC+IScgOiAn0JIg0LrQvtGA0LfQuNC90YMnO1xuICAgICAgICBjYXJ0W2l0ZW0ubmFtZV1cbiAgICAgICAgICA/IHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX2NhcnQnKS5jbGFzc0xpc3QuYWRkKCdhZGRlZCcpXG4gICAgICAgICAgOiBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX19jYXJ0JykuY2xhc3NMaXN0LnJlbW92ZSgnYWRkZWQnKTtcblxuICAgICAgICBmcmFnbWVudC5hcHBlbmQoc291cmNlQ2xvbmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtZ29vZHMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcC1nb29kcycpLmFwcGVuZChmcmFnbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENhbWVyYURhdGEgfSBmcm9tICcuLi8uLi9kYXRhJztcbmltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbmludGVyZmFjZSBGaWx0ZXIge1xuICBmaWx0ZXIoZGF0YTogQ2FtZXJhRGF0YSk6IENhbWVyYURhdGE7XG4gIGZpbHRlcnNSZXNldCgpOiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFGaWx0ZXIgaW1wbGVtZW50cyBGaWx0ZXIge1xuICBwcml2YXRlIHNlYXJjaEJveDogSFRNTElucHV0RWxlbWVudDtcbiAgcHJpdmF0ZSBtYWtlcnNMaXN0OiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBwcml2YXRlIHByaWNlU2xpZGVyOiBub1VpU2xpZGVyLnRhcmdldDtcbiAgcHJpdmF0ZSBtcGl4U2xpZGVyOiBub1VpU2xpZGVyLnRhcmdldDtcbiAgcHJpdmF0ZSB0eXBlc0xpc3Q6IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD47XG4gIHByaXZhdGUgc3RhYkxpc3Q6IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD47XG4gIHByaXZhdGUgc3RvY2tDaGVjazogSFRNTElucHV0RWxlbWVudDtcbiAgcHVibGljIGNoZWNrYm94ZXM6IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCcpO1xuICAgIHRoaXMubWFrZXJzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9zaG9wW25hbWU9XCJtYWtlclwiXScpO1xuICAgIHRoaXMucHJpY2VTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcC1wcmljZV9fc2xpZGVyJyk7XG4gICAgdGhpcy5tcGl4U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtbXBpeF9fc2xpZGVyJyk7XG4gICAgdGhpcy50eXBlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfc2hvcFtuYW1lPVwidHlwZVwiXScpO1xuICAgIHRoaXMuc3RhYkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfc2hvcFtuYW1lPVwic3RhYlwiXScpO1xuICAgIHRoaXMuc3RvY2tDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveF9zaG9wW25hbWU9XCJzdG9ja1wiXScpO1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9zaG9wJyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGNoZWNrYm94ZXNDaGVja2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2hlY2tib3hlcycpKSBhcyBib29sZWFuW107XG4gICAgaWYgKGNoZWNrYm94ZXNDaGVja2VkKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hib3gsIGlkeCkgPT4ge1xuICAgICAgICBjaGJveC5jaGVja2VkID0gY2hlY2tib3hlc0NoZWNrZWRbaWR4XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBwcmljZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmljZXMnKSkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICBjb25zdCBtcGl4ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtcGl4ZXMnKSkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICB0aGlzLnByaWNlU2xpZGVyLm5vVWlTbGlkZXIuc2V0KHByaWNlcyk7XG4gICAgdGhpcy5tcGl4U2xpZGVyLm5vVWlTbGlkZXIuc2V0KG1waXhlcyk7XG4gIH1cblxuICBmaWx0ZXJOYW1lKGRhdGE6IENhbWVyYURhdGEpIHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoQm94LnZhbHVlKSByZXR1cm4gZGF0YTtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGVsKSA9PiBlbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaEJveC52YWx1ZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xuICB9XG5cbiAgZmlsdGVyTWFrZXIoZGF0YTogQ2FtZXJhRGF0YSkge1xuICAgIGNvbnN0IG1ha2Vyczogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm1ha2Vyc0xpc3QuZm9yRWFjaCgoY2hib3gpID0+IHtcbiAgICAgIGlmIChjaGJveC5jaGVja2VkKSBtYWtlcnMucHVzaChjaGJveC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcbiAgICBpZiAoIW1ha2Vycy5sZW5ndGgpIHJldHVybiBkYXRhO1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigoZWwpID0+IG1ha2Vycy5pbmRleE9mKGVsLm1hbnVmYWN0dXJlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xuICB9XG5cbiAgZmlsdGVyUHJpY2UoZGF0YTogQ2FtZXJhRGF0YSkge1xuICAgIGNvbnN0IHByaWNlcyA9IHRoaXMucHJpY2VTbGlkZXIubm9VaVNsaWRlci5nZXQoKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigoZWwpID0+IE51bWJlcihlbC5wcmljZSkgPj0gcHJpY2VzWzBdICYmIE51bWJlcihlbC5wcmljZSkgPD0gcHJpY2VzWzFdKTtcbiAgfVxuXG4gIGZpbHRlck1waXgoZGF0YTogQ2FtZXJhRGF0YSkge1xuICAgIGNvbnN0IG1waXhlcyA9IHRoaXMubXBpeFNsaWRlci5ub1VpU2xpZGVyLmdldCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlbCkgPT4gTnVtYmVyKGVsLm1waXgpID49IG1waXhlc1swXSAmJiBOdW1iZXIoZWwubXBpeCkgPD0gbXBpeGVzWzFdKTtcbiAgfVxuXG4gIGZpbHRlclR5cGUoZGF0YTogQ2FtZXJhRGF0YSkge1xuICAgIGNvbnN0IHR5cGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMudHlwZXNMaXN0LmZvckVhY2goKGNoYm94KSA9PiB7XG4gICAgICBpZiAoY2hib3guY2hlY2tlZCkgdHlwZXMucHVzaChjaGJveC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcbiAgICBpZiAoIXR5cGVzLmxlbmd0aCkgcmV0dXJuIGRhdGE7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlbCkgPT4gdHlwZXMuaW5kZXhPZihlbC50eXBlLnRvTG93ZXJDYXNlKCkpICE9PSAtMSk7XG4gIH1cblxuICBmaWx0ZXJTdGFiKGRhdGE6IENhbWVyYURhdGEpIHtcbiAgICBjb25zdCBzdGFiczogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLnN0YWJMaXN0LmZvckVhY2goKGNoYm94KSA9PiB7XG4gICAgICBpZiAoY2hib3guY2hlY2tlZCkgc3RhYnMucHVzaChjaGJveC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcbiAgICBpZiAoIXN0YWJzLmxlbmd0aCkgcmV0dXJuIGRhdGE7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlbCkgPT4gc3RhYnMuaW5kZXhPZihlbC5zdGFiaWxpemF0aW9uLnRvTG93ZXJDYXNlKCkpICE9PSAtMSk7XG4gIH1cblxuICBmaWx0ZXJTdG9jayhkYXRhOiBDYW1lcmFEYXRhKSB7XG4gICAgaWYgKCF0aGlzLnN0b2NrQ2hlY2suY2hlY2tlZCkgcmV0dXJuIGRhdGE7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlbCkgPT4gZWwuc3RvY2spO1xuICB9XG5cbiAgZmlsdGVyc1Jlc2V0KCkge1xuICAgIHRoaXMubWFrZXJzTGlzdC5mb3JFYWNoKChjaGJveCkgPT4gKGNoYm94LmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMucHJpY2VTbGlkZXIubm9VaVNsaWRlci5zZXQoWzAsIDk5OTk5OV0pO1xuICAgIHRoaXMubXBpeFNsaWRlci5ub1VpU2xpZGVyLnNldChbMCwgOTk5OTk5XSk7XG4gICAgdGhpcy50eXBlc0xpc3QuZm9yRWFjaCgoY2hib3gpID0+IChjaGJveC5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLnN0YWJMaXN0LmZvckVhY2goKGNoYm94KSA9PiAoY2hib3guY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5zdG9ja0NoZWNrLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjaGVja2JveGVzJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaWNlcycpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdtcGl4ZXMnKTtcbiAgfVxuXG4gIGZpbHRlcihkYXRhOiBDYW1lcmFEYXRhKTogQ2FtZXJhRGF0YSB7XG4gICAgbGV0IGZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gICAgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJOYW1lKGZpbHRlcmVkRGF0YSk7XG4gICAgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJNYWtlcihmaWx0ZXJlZERhdGEpO1xuICAgIGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyUHJpY2UoZmlsdGVyZWREYXRhKTtcbiAgICBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlck1waXgoZmlsdGVyZWREYXRhKTtcbiAgICBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlclR5cGUoZmlsdGVyZWREYXRhKTtcbiAgICBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlclN0YWIoZmlsdGVyZWREYXRhKTtcbiAgICBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlclN0b2NrKGZpbHRlcmVkRGF0YSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcblxuaW50ZXJmYWNlIFNsaWRlciB7XG4gIHNsaWRlclF1ZXJ5OiBzdHJpbmc7XG4gIHNsaWRlclJhbmdlOiBudW1iZXJbXTtcbiAgc2xpZGVyU3RlcDogbnVtYmVyO1xuICBzbGlkZXJUYXJnZXQ6IG5vVWlTbGlkZXIudGFyZ2V0O1xuICBzdGFydDogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBTbGlkZXIgdGFrZXMgc2xpZGVyUXVlcnk6IGNsYXNzIG9mIHRoZSBmdXR1cmUgc2xpZGVyLFxuICogc2xpZGVyUmFuZ2U6IGFycmF5IG9mIG51bWJlcnMgb2Ygc2xpZGVyJ3MgcmFuZ2UgYW5kXG4gKiBzbGlkZXJTdGVwOiBtaW5pbWFsIHN0ZXAgb2YgdGhlIHNsaWRlci5cbiAqXG4gKiBJdCB3aWxsIGNvbm5lY3QgdGhlIHNsaWRlciB0byB0aGUgc2xpZGVyUXVlcnlfX2xhYmVscy1sb3dcbiAqIGFuZCBzbGlkZXJRdWVyeV9fbGFiZWxzLWhpZ2ggYXMgdGhlaXIgaW5wdXQgbGFiZWxzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wU2xpZGVyIGltcGxlbWVudHMgU2xpZGVyIHtcbiAgc2xpZGVyUXVlcnk6IHN0cmluZztcbiAgc2xpZGVyUmFuZ2U6IG51bWJlcltdO1xuICBzbGlkZXJTdGVwOiBudW1iZXI7XG4gIHNsaWRlclRhcmdldDogbm9VaVNsaWRlci50YXJnZXQ7XG5cbiAgY29uc3RydWN0b3Ioc2xpZGVyUXVlcnk6IHN0cmluZywgc2xpZGVyUmFuZ2U6IG51bWJlcltdLCBzbGlkZXJTdGVwOiBudW1iZXIpIHtcbiAgICB0aGlzLnNsaWRlclF1ZXJ5ID0gc2xpZGVyUXVlcnk7XG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IHNsaWRlclJhbmdlO1xuICAgIHRoaXMuc2xpZGVyU3RlcCA9IHNsaWRlclN0ZXA7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5zbGlkZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnNsaWRlclF1ZXJ5fV9fc2xpZGVyYCk7XG4gICAgY29uc3Qgc2xpZGVyTGFiZWxzOiBIVE1MSW5wdXRFbGVtZW50W10gPSBbXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnNsaWRlclF1ZXJ5fV9fbGFiZWxzLWxvd2ApLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5zbGlkZXJRdWVyeX1fX2xhYmVscy1oaWdoYCksXG4gICAgXTtcblxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHRoaXMuc2xpZGVyVGFyZ2V0LCB7XG4gICAgICBzdGFydDogW3RoaXMuc2xpZGVyUmFuZ2VbMF0sIHRoaXMuc2xpZGVyUmFuZ2VbMV1dLFxuICAgICAgY29ubmVjdDogdHJ1ZSxcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIG1pbjogdGhpcy5zbGlkZXJSYW5nZVswXSxcbiAgICAgICAgbWF4OiB0aGlzLnNsaWRlclJhbmdlWzFdLFxuICAgICAgfSxcbiAgICAgIHN0ZXA6IHRoaXMuc2xpZGVyU3RlcCxcbiAgICAgIGZvcm1hdDoge1xuICAgICAgICBmcm9tOiAoZm9ybWF0dGVkVmFsdWUpID0+IE51bWJlcihmb3JtYXR0ZWRWYWx1ZSksXG4gICAgICAgIHRvOiAobnVtZXJpY1ZhbHVlKSA9PiBNYXRoLnJvdW5kKG51bWVyaWNWYWx1ZSksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXJUYXJnZXQubm9VaVNsaWRlci5vbihcbiAgICAgICd1cGRhdGUnLFxuICAgICAgKHZhbHVlcywgaGFuZGxlKSA9PiAoc2xpZGVyTGFiZWxzW2hhbmRsZV0udmFsdWUgPSBTdHJpbmcodmFsdWVzW2hhbmRsZV0pKVxuICAgICk7XG4gICAgc2xpZGVyTGFiZWxzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2xpZGVyVGFyZ2V0Lm5vVWlTbGlkZXIuc2V0KFtzbGlkZXJMYWJlbHNbMF0udmFsdWUsIG51bGxdKSk7XG4gICAgc2xpZGVyTGFiZWxzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2xpZGVyVGFyZ2V0Lm5vVWlTbGlkZXIuc2V0KFtudWxsLCBzbGlkZXJMYWJlbHNbMV0udmFsdWVdKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENhbWVyYURhdGEgfSBmcm9tICcuLi8uLi9kYXRhJztcblxuaW50ZXJmYWNlIFNvcnQge1xuICBzb3J0KGRhdGE6IENhbWVyYURhdGEpOiBDYW1lcmFEYXRhO1xuICBzb3J0UmVzZXQoKTogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydENhcmRzIGltcGxlbWVudHMgU29ydCB7XG4gIHB1YmxpYyBzaG9wU29ydFNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3BTb3J0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgY29uc3Qgc29ydE9yZGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRPcmRlcicpO1xuICAgIGlmIChzb3J0T3JkZXIpIHtcbiAgICAgIHRoaXMuc2hvcFNvcnRTZWxlY3QudmFsdWUgPSBzb3J0T3JkZXI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnQoZGF0YTogQ2FtZXJhRGF0YSkge1xuICAgIHN3aXRjaCAodGhpcy5zaG9wU29ydFNlbGVjdC52YWx1ZSkge1xuICAgICAgY2FzZSAnbmFtZUFaJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZUFaKGRhdGEpO1xuICAgICAgY2FzZSAnbmFtZVpBJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVpBKGRhdGEpO1xuICAgICAgY2FzZSAncHJpY2VVcCc6XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlVXAoZGF0YSk7XG4gICAgICBjYXNlICdwcmljZURvd24nOlxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZURvd24oZGF0YSk7XG4gICAgICBjYXNlICdtcGl4VXAnOlxuICAgICAgICByZXR1cm4gdGhpcy5tcGl4VXAoZGF0YSk7XG4gICAgICBjYXNlICdtcGl4RG93bic6XG4gICAgICAgIHJldHVybiB0aGlzLm1waXhEb3duKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbmFtZUFaPFQgZXh0ZW5kcyB7IG5hbWU6IHN0cmluZyB9W10+KGRhdGE6IFQpOiBUIHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgbmFtZVpBPFQgZXh0ZW5kcyB7IG5hbWU6IHN0cmluZyB9W10+KGRhdGE6IFQpOiBUIHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBiLm5hbWUubG9jYWxlQ29tcGFyZShhLm5hbWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJpY2VVcDxUIGV4dGVuZHMgeyBwcmljZTogc3RyaW5nIH1bXT4oZGF0YTogVCk6IFQge1xuICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IE51bWJlcihhLnByaWNlKSAtIE51bWJlcihiLnByaWNlKSk7XG4gIH1cblxuICBwcml2YXRlIHByaWNlRG93bjxUIGV4dGVuZHMgeyBwcmljZTogc3RyaW5nIH1bXT4oZGF0YTogVCk6IFQge1xuICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IE51bWJlcihiLnByaWNlKSAtIE51bWJlcihhLnByaWNlKSk7XG4gIH1cblxuICBwcml2YXRlIG1waXhVcDxUIGV4dGVuZHMgeyBtcGl4OiBzdHJpbmcgfVtdPihkYXRhOiBUKTogVCB7XG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4gTnVtYmVyKGEubXBpeCkgLSBOdW1iZXIoYi5tcGl4KSk7XG4gIH1cblxuICBwcml2YXRlIG1waXhEb3duPFQgZXh0ZW5kcyB7IG1waXg6IHN0cmluZyB9W10+KGRhdGE6IFQpOiBUIHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYi5tcGl4KSAtIE51bWJlcihhLm1waXgpKTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0UmVzZXQoKSB7XG4gICAgdGhpcy5zaG9wU29ydFNlbGVjdC52YWx1ZSA9ICduYW1lQVonO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzb3J0T3JkZXInKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRTZWxmY2hlY2soKSB7XG4gIGNvbnNvbGUubG9nKGAlY09ubGluZS1TdG9yZSAtINCY0L3RgtC10YDQvdC10YIg0LzQsNCz0LDQt9C40L1gLCAnZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAxOHB4Jyk7XG4gIGNvbnNvbGUubG9nKGBodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL29ubGluZS1zdG9yZS9SRUFETUUubWRcXG5cXG5gKTtcbiAgY29uc29sZS5sb2coYCVj0KHQsNC80L7QvtGG0LXQvdC60LA6YCwgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpO1xuICBjb25zb2xlLmxvZyhg0JLRi9C/0L7Qu9C90LXQvdGLINCy0YHQtSDQv9GD0L3QutGC0Ysg0LfQsNC00LDQvdC40Y8uXG5cbuKclO+4jyArMTAgfCAxLiDQodGC0YDQsNC90LjRhtCwINGBINGC0L7QstCw0YDQsNC80Lgg0YHQvtC00LXRgNC20LjRgiDQutCw0YDRgtC+0YfQutC4INCy0YHQtdGFINGC0L7QstCw0YDQvtCyINCwINGC0LDQutC20LUg0YTQuNC70YzRgtGA0YssINGB0YLRgNC+0LrRgyDQv9C+0LjRgdC60LAsINC/0L7Qu9C1INC00LvRjyDRgdC+0YDRgtC40YDQvtCy0LrQuC4g0JLRi9C/0L7Qu9C90Y/RjtGC0YHRjyDRgtGA0LXQsdC+0LLQsNC90LjRjyDQuiDQstGR0YDRgdGC0LrQtSArMTBcblxu4pyU77iPICsxMCB8IDIuINCa0LDRgNGC0L7Rh9C60LAg0YLQvtCy0LDRgNCwINGB0L7QtNC10YDQttC40YIg0LXRkSDQuNC30L7QsdGA0LDQttC10L3QuNC1LCDQvdCw0LfQstCw0L3QuNC1LCDRgtC10LrRgdGC0L7QvCDQuNC70Lgg0YPRgdC70L7QstC90YvQvCDQt9C90LDRh9C60L7QvCDQvtCx0L7Qt9C90LDRh9C10L3Rizog0YbQtdC90LAsINC60L7Qu9C40YfQtdGB0YLQstC+INC80LXQs9Cw0L/QuNC60YHQtdC70LXQuSwg0YLQuNC/LCDRgdGC0LDQsdC40LvQuNC30LDRhtC40Y8sINC10YHRgtGMINC70Lgg0YLQvtCy0LDRgCDQsiDQvdCw0LvQuNGH0LjQuFxuXG7inJTvuI8gKzIwIHwgMy4g0JTQvtCx0LDQstC70LXQvdC40LUg0YLQvtCy0LDRgNCwINCyINC40LfQsdGA0LDQvdC90L7QtSAo0LrQvtGA0LfQuNC90YMpXG4rMTAgfCDQutC70LjQutCw0Y8g0L/QviDQutCw0YDRgtC+0YfQutC1INGBINGC0L7QstCw0YDQvtC8INC40LvQuCDQv9C+INC60L3QvtC/0LrQtSDQvdCwINC90LXQuSDRgtC+0LLQsNGAINC80L7QttC90L4g0LTQvtCx0LDQstC70Y/RgtGMINCyINC40LfQsdGA0LDQvdC90L7QtSDQuNC70Lgg0YPQtNCw0LvRj9GC0Ywg0LjQtyDQuNC30LHRgNCw0L3QvdC+0LPQvi4g0JrQsNGA0YLQvtGH0LrQuCDQtNC+0LHQsNCy0LvQtdC90L3Ri9GFINCyINC40LfQsdGA0LDQvdC90L7QtSDRgtC+0LLQsNGA0L7QsiDQstC90LXRiNC90LUg0L7RgtC70LjRh9Cw0Y7RgtGB0Y8g0L7RgiDQvtGB0YLQsNC70YzQvdGL0YVcbisxMCB8INC90LAg0YHRgtGA0LDQvdC40YbQtSDQvtGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQvtCx0LDQstC70LXQvdC90YvRhSDQsiDQuNC30LHRgNCw0L3QvdC+0LUg0YLQvtCy0LDRgNC+0LIuINCf0YDQuCDQv9C+0L/Ri9GC0LrQtSDQtNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtSDQsdC+0LvRjNGI0LUgMjAg0YLQvtCy0LDRgNC+0LIsINCy0YvQstC+0LTQuNGC0YHRjyDQstGB0L/Qu9GL0LLQsNGO0YnQtdC1INGD0LLQtdC00L7QvNC70LXQvdC40LUg0YEg0YLQtdC60YHRgtC+0LwgXCLQmNC30LLQuNC90LjRgtC1LCDQsiDQutC+0YDQt9C40L3RgyDQvNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0L3QtSDQsdC+0LvQtdC1IDIwINGC0L7QstCw0YDQvtCyLlwiXG5cbuKclO+4jyArMjAgfCA0LiDQodC+0YDRgtC40YDQvtCy0LrQsFxuKyDRgdC+0YDRgtC40YDRg9GO0YLRgdGPINGC0L7Qu9GM0LrQviDRgtC1INGC0L7QstCw0YDRiywg0LrQvtGC0L7RgNGL0LUg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDQvtGC0L7QsdGA0LDQttCw0Y7RgtGB0Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4rMTAgfCDRgdC+0YDRgtC40YDQvtCy0LrQsCDRgtC+0LLQsNGA0L7QsiDQv9C+INC90LDQt9Cy0LDQvdC40Y4g0LIg0LLQvtC30YDQsNGB0YLQsNGO0YnQtdC8INC4INGB0L/QsNC00LDRjtGJ0LXQvCDQv9C+0YDRj9C00LrQtVxuKzEwIHwg0YHQvtGA0YLQuNGA0L7QstC60LAg0YLQvtCy0LDRgNC+0LIg0L/QviDQutC+0LvQuNGH0LXRgdGC0LLRgyDQvNC10LPQsNC/0LjQutGB0LXQu9C10Lkg0LIg0LLQvtC30YDQsNGB0YLQsNGO0YnQtdC8INC4INGB0L/QsNC00LDRjtGJ0LXQvCDQv9C+0YDRj9C00LrQtVxu0LTQvtC/IHwg0YHQvtGA0YLQuNGA0L7QstC60LAg0YLQvtCy0LDRgNC+0LIg0L/QviDRhtC10L3QtSDQsiDQstC+0LfRgNCw0YHRgtCw0Y7RidC10Lwg0Lgg0YHQv9Cw0LTQsNGO0YnQtdC8INC/0L7RgNGP0LTQutC1XG5cbuKclO+4jyArMzAgfCA1LiDQpNC40LvRjNGC0YDRiyDQsiDRg9C60LDQt9Cw0L3QvdC+0Lwg0LTQuNCw0L/QsNC30L7QvdC1INC+0YIg0Lgg0LTQvlxuKzEwIHwg0YTQuNC70YzRgtGA0Ysg0L/QviDQutC+0LvQuNGH0LXRgdGC0LLRgyDQvNC10LPQsNC/0LjQutGB0LXQu9C10LlcbisxMCB8INGE0LjQu9GM0YLRgNGLINC/0L4g0YbQtdC90LVcbisxMCB8INC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuCDQsiDRg9C60LDQt9Cw0L3QvdC+0Lwg0LTQuNCw0L/QsNC30L7QvdC1INC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyByYW5nZSBzbGlkZXIg0YEg0LTQstGD0LzRjyDQv9C+0LvQt9GD0L3QutCw0LzQuC4g0J/RgNC4INC/0LXRgNC10LzQtdGJ0LXQvdC40Lgg0L/QvtC70LfRg9C90LrQvtCyINC+0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDQuNGFINGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUsINGA0LDQt9C90YvQuSDRhtCy0LXRgiDRgdC70LDQudC00LXRgNCwINC00L4g0Lgg0L/QvtGB0LvQtSDQv9C+0LvQt9GD0L3QutCwXG5cbuKclO+4jyArMzAgfCA2LiDQpNC40LvRjNGC0YDRiyDQv9C+INC30L3QsNGH0LXQvdC40Y5cbtCS0YvQsdGA0LDQvdC90YvQtSDRhNC40LvRjNGC0YDRiyDQstGL0LTQtdC70Y/RjtGC0YHRjyDRgdGC0LjQu9C10LwuXG4rNSB8INGE0LjQu9GM0YLRgNGLINC/0L4g0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Y5cbis1IHwg0YTQuNC70YzRgtGA0Ysg0L/QviDRgtC40L/Rg1xuKzUgfCDRhNC40LvRjNGC0YDRiyDQv9C+INCy0LjQtNGDINGB0YLQsNCx0LjQu9C40LfQsNGG0LjQuFxuKzUgfCDQvNC+0LbQvdC+INC+0YLQvtCx0YDQsNC30LjRgtGMINGC0L7Qu9GM0LrQviDRgtC+0LLQsNGA0Ysg0LIg0L3QsNC70LjRh9C40LhcbisxMCB8INC80L7QttC90L4g0L7RgtGE0LjQu9GM0YLRgNC+0LLQsNGC0Ywg0YLQvtCy0LDRgNGLINC/0L4g0L3QtdGB0LrQvtC70YzQutC40Lwg0YTQuNC70YzRgtGA0LDQvCDQvtC00L3QvtCz0L4g0YLQuNC/0LBcblxu4pyU77iPICsyMCB8IDcuINCc0L7QttC90L4g0L7RgtGE0LjQu9GM0YLRgNC+0LLQsNGC0Ywg0YLQvtCy0LDRgNGLINC/0L4g0L3QtdGB0LrQvtC70YzQutC40Lwg0YTQuNC70YzRgtGA0LDQvCDRgNCw0LfQvdC+0LPQviDRgtC40L/QsFxu0JTQu9GPINC90LXRgdC60L7Qu9GM0LrQuNGFINGE0LjQu9GM0YLRgNC+0LIg0YDQsNC30L3QvtCz0L4g0YLQuNC/0LAg0L7RgtC+0LHRgNCw0LbQsNGO0YLRgdGPINGC0L7Qu9GM0LrQviDRgtC1INGC0L7QstCw0YDRiywg0LrQvtGC0L7RgNGL0LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YIg0LLRgdC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C8INGE0LjQu9GM0YLRgNCw0LwuXG7QndCw0L/RgNC40LzQtdGALCDQvNC+0LbQvdC+INC+0YLQvtCx0YDQsNC30LjRgtGMINGC0L7Qu9GM0LrQviDRgtC+0LLQsNGA0Ysg0YHQuNC90LXQs9C+INGG0LLQtdGC0LAuINCY0LvQuCDQv9C+0L/Rg9C70Y/RgNC90YvQtSDQsdC10LvRi9C1INC4INC60YDQsNGB0L3Ri9C1INGC0L7QstCw0YDRiyDQstGL0L/Rg9GJ0LXQvdC90YvQtSDQsiAyMDAwLTIwMTAg0LPQvtC00LDRhS5cbtCV0YHQu9C4INGC0L7QstCw0YDQvtCyLCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40YUg0LLRgdC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C8INGE0LjQu9GM0YLRgNCw0Lwg0L3QtdGCLCDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0LLRi9Cy0L7QtNC40YLRgdGPINGD0LLQtdC00L7QvNC70LXQvdC40LUg0LIg0YfQtdC70L7QstC10LrQvtGH0LjRgtCw0LXQvNC+0Lwg0YTQvtGA0LzQsNGC0LUsINC90LDQv9GA0LjQvNC10YAsIFwi0JjQt9Cy0LjQvdC40YLQtSwg0L/QviDQstCw0YjQtdC80YMg0LfQsNC/0YDQvtGB0YMg0YLQvtCy0LDRgNC+0LIg0L3QtdGCLlwiXG5cbuKclO+4jyArMjAgfCA4LiDQodCx0YDQvtGBINGE0LjQu9GM0YLRgNC+0LJcbisxMCB8INC10YHRgtGMINC60L3QvtC/0LrQsCByZXNldCDQtNC70Y8g0YHQsdGA0L7RgdCwINGE0LjQu9GM0YLRgNC+0LJcbtCa0L3QvtC/0LrQsCByZXNldCDRgdCx0YDQsNGB0YvQstCw0LXRgiDRgtC+0LvRjNC60L4g0YTQuNC70YzRgtGA0YssINC90LUg0LLQu9C40Y/RjyDQvdCwINC/0L7RgNGP0LTQvtC6INGB0L7RgNGC0LjRgNC+0LLQutC4INC40LvQuCDRgtC+0LLQsNGA0YssINC00L7QsdCw0LLQu9C10L3QvdGL0LUg0LIg0LjQt9Cx0YDQsNC90L3QvtC1Llxu0J/QvtGB0LvQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDQutC90L7Qv9C60LggcmVzZXQg0YTQuNC70YzRgtGA0Ysg0L7RgdGC0LDRjtGC0YHRjyDRgNCw0LHQvtGC0L7RgdC/0L7RgdC+0LHQvdGL0LzQuFxuKzEwIHwg0L/RgNC4INGB0LHRgNC+0YHQtSDRhNC40LvRjNGC0YDQvtCyINC60L3QvtC/0LrQvtC5IHJlc2V0LCDQv9C+0LvQt9GD0L3QutC4IHJhbmdlIHNsaWRlciDRgdC00LLQuNCz0LDRjtGC0YHRjyDQuiDQutGA0LDRj9C8LCDQt9C90LDRh9C10L3QuNGPINC/0L7Qu9C30YPQvdC60L7QsiDQstC+0LfQstGA0LDRidCw0Y7RgtGB0Y8g0Log0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90YvQvCwgcmFuZ2Ugc2xpZGVyINC30LDQutGA0LDRiNC40LLQsNC10YLRgdGPINC+0LTQvdC40Lwg0YbQstC10YLQvtC8XG5cbuKclO+4jyArMzAgfCA5LiDQodC+0YXRgNCw0L3QtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6INCyIGxvY2FsIHN0b3JhZ2VcbisxMCB8INCy0YvQsdGA0LDQvdC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDRhNC40LvRjNGC0YDRiywg0L/QvtGA0Y/QtNC+0Log0YHQvtGA0YLQuNGA0L7QstC60LgsINC00L7QsdCw0LLQu9C10L3QvdGL0LUg0LIg0LjQt9Cx0YDQsNC90L3QvtC1INGC0L7QstCw0YDQsCDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPINC/0YDQuCDQv9C10YDQtdC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRiy4g0JXRgdGC0Ywg0LrQvdC+0L/QutCwINGB0LHRgNC+0YHQsCDQvdCw0YHRgtGA0L7QtdC6LCDQutC+0YLQvtGA0LDRjyDQvtGH0LjRidCw0LXRgiBsb2NhbCBzdG9yYWdlINC4INC60L7RgNC30LjQvdGDXG5cbuKclO+4jyArMzAgfCAxMC4g0J/QvtC40YHQulxuKzIgfCDQv9GA0Lgg0L7RgtC60YDRi9GC0LjQuCDQv9GA0LjQu9C+0LbQtdC90LjRjyDQutGD0YDRgdC+0YAg0L3QsNGF0L7QtNC40YLRgdGPINCyINC/0L7Qu9C1INC/0L7QuNGB0LrQsFxuKzIgfCDQsNCy0YLQvtC30LDQv9C+0LvQvdC10L3QuNC1INC/0L7Qu9GPINC/0L7QuNGB0LrQsCDQvtGC0LrQu9GO0YfQtdC90L4gKNC90LXRgiDQstGL0L/QsNC00LDRjtGJ0LXQs9C+INGB0L/QuNGB0LrQsCDRgSDQv9GA0LXQtNGL0LTRg9GJ0LjQvNC4INC30LDQv9GA0L7RgdCw0LzQuClcbisyIHwg0LXRgdGC0YwgcGxhY2Vob2xkZXJcbisyIHwg0LIg0L/QvtC70LUg0L/QvtC40YHQutCwINC10YHRgtGMINC60YDQtdGB0YLQuNC6LCDQv9C+0LfQstC+0LvRj9GO0YnQuNC5INC+0YfQuNGB0YLQuNGC0Ywg0L/QvtC70LUg0L/QvtC40YHQutCwXG4rMiB8INC10YHQu9C4INC90LXRgiDRgdC+0LLQv9Cw0LTQtdC90LjRjyDQv9C+0YHQu9C10LTQvtCy0LDRgtC10LvRjNC90L7RgdGC0Lgg0LHRg9C60LIg0LIg0L/QvtC40YHQutC+0LLQvtC8INC30LDQv9GA0L7RgdC1INGBINC90LDQt9Cy0LDQvdC40LXQvCDRgtC+0LLQsNGA0LAsINCy0YvQstC+0LTQuNGC0YHRjyDRg9Cy0LXQtNC+0LzQu9C10L3QuNC1INCyINGH0LXQu9C+0LLQtdC60L7Rh9C40YLQsNC10LzQvtC8INGE0L7RgNC80LDRgtC1LCDQvdCw0L/RgNC40LzQtdGAIFwi0JjQt9Cy0LjQvdC40YLQtSwg0YHQvtCy0L/QsNC00LXQvdC40Lkg0L3QtSDQvtCx0L3QsNGA0YPQttC10L3QvlwiXG4rMTAgfCDQv9GA0Lgg0LLQstC+0LTQtSDQv9C+0LjRgdC60L7QstC+0LPQviDQt9Cw0L/RgNC+0YHQsCDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0L7RgdGC0LDRjtGC0YHRjyDRgtC+0LvRjNC60L4g0YLQtSDRgtC+0LLQsNGA0YssINCyINC60L7RgtC+0YDRi9GFINC10YHRgtGMINGD0LrQsNC30LDQvdC90YvQtSDQsiDQv9C+0LjRgdC60LUg0LHRg9C60LLRiyDQsiDRg9C60LDQt9Cw0L3QvdC+0Lwg0L/QvtGA0Y/QtNC60LUuINCf0YDQuCDRjdGC0L7QvCDQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90L4sINGH0YLQvtCx0Ysg0LHRg9C60LLRiyDQsdGL0LvQuCDQsiDQvdCw0YfQsNC70LUg0YHQu9C+0LLQsC4g0KDQtdCz0LjRgdGC0YAg0YHQuNC80LLQvtC70L7QsiDQv9GA0Lgg0L/QvtC40YHQutC1INC90LUg0YPRh9C40YLRi9Cy0LDQtdGC0YHRj1xu0J/QvtC40YHQuiDQstC10LTRkdGC0YHRjyDRgtC+0LvRjNC60L4g0YHRgNC10LTQuCDRgtC+0LLQsNGA0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDQvtGC0L7QsdGA0LDQttCw0Y7RgtGB0Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1LlxuKzEwIHwg0LXRgdC70Lgg0L7Rh9C40YHRgtC40YLRjCDQv9C+0LvQtSDQv9C+0LjRgdC60LAsINC90LAg0YHRgtGA0LDQvdC40YbQtSDQvtGC0L7QsdGA0LDQttCw0Y7RgtGB0Y8g0YLQvtCy0LDRgNGLLCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40LUg0LLRgdC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C8INGE0LjQu9GM0YLRgNCw0Lwg0Lgg0L3QsNGB0YLRgNC+0LnQutCw0Lwg0YHQvtGA0YLQuNGA0L7QstC60Lhcblxu4pyU77iPINC00L7QvyB8INCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0Lkg0YTRg9C90LrRhtC40L7QvdCw0Lsg0L3QsCDQstGL0LHQvtGAXG4rINC+0YfQtdC90Ywg0LLRi9GB0L7QutC+0LUg0LrQsNGH0LXRgdGC0LLQviDQvtGE0L7RgNC80LvQtdC90LjRjyDQv9GA0LjQu9C+0LbQtdC90LjRjyArINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LksINC90LUg0YPQutCw0LfQsNC90L3Ri9C5INCyINC30LDQtNCw0L3QuNC4LCDRgdC70L7QttC90YvQuSDQsiDRgNC10LDQu9C40LfQsNGG0LjQuCDRhNGD0L3QutGG0LjQvtC90LDQuywg0YPQu9GD0YfRiNCw0Y7RidC40Lkg0LrQsNGH0LXRgdGC0LLQviDQv9GA0LjQu9C+0LbQtdC90LjRjywg0YPQtNC+0LHRgdGC0LLQviDQv9C+0LvRjNC30L7QstCw0L3QuNGPINC40Lw6XG7QoNC10YHQv9C+0L3RgdC40LIg0L7RgiAzMjAg0L/QuNC60YHQtdC70LXQuSDQuCDQstGL0YjQtSwg0YPQtNC+0LHQvdCw0Y8g0LzQvtCx0LjQu9GM0L3QsNGPINCy0LXRgNGB0LjRjyDRgdCw0LnRgtCwINGBINCy0L7Qt9C80L7QttC90L7RgdGC0YzRjiDRgdC60YDRi9GC0LjRjyDQv9Cw0L3QtdC70Lgg0YTQuNC70YzRgtGA0L7Qsi5cbmApO1xuICBjb25zb2xlLmxvZyhgJWPQmNGC0L7Qs9C+OiAyMjArLzIwMCA9PiAyMDBgLCAnZm9udC13ZWlnaHQ6IGJvbGQnKTtcbn1cbiIsImV4cG9ydCB0eXBlIENhbWVyYURhdGEgPSB7XG4gIG51bTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG1waXg6IHN0cmluZztcbiAgcHJpY2U6IHN0cmluZztcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgc3RhYmlsaXphdGlvbjogc3RyaW5nO1xuICBpbWc6IHN0cmluZztcbiAgc3RvY2s6IGJvb2xlYW47XG59W107XG5cbmNvbnN0IGRhdGE6IENhbWVyYURhdGEgPSBbXG4gIHtcbiAgICBudW06ICcxJyxcbiAgICBuYW1lOiAnQ2Fub24gRU9TIDQwMDBEIDE4LTU1IERDIElJSScsXG4gICAgbXBpeDogJzE4JyxcbiAgICBwcmljZTogJzEyODk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdDYW5vbicsXG4gICAgdHlwZTogJ9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX2Vvc180MDAwZF8xOC01NV9kY19paWlfMzAxMWMwMDQnLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMicsXG4gICAgbmFtZTogJ0Nhbm9uIEVPUyA1RCBNYXJrIElWIDI0LTEwNUwgSVMgSUknLFxuICAgIG1waXg6ICczMCcsXG4gICAgcHJpY2U6ICcxMTI5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fZW9zXzVkX21hcmtfaXZfMjQtMTA1bF9pc19paV91c21fa2l0XzE0ODNjMDMwJyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzMnLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgMjAwMEQgMTgtNTUgREMgSUlJJyxcbiAgICBtcGl4OiAnMjQnLFxuICAgIHByaWNlOiAnMTY4OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fZW9zXzIwMDBkXzE4LTU1X2RjX2lpaV8yNzI4YzAwNycsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICc0JyxcbiAgICBuYW1lOiAnQ2Fub24gRU9TIDI1MEQgS2l0IDE4LTU1IElTIFdoaXRlJyxcbiAgICBtcGl4OiAnMjQnLFxuICAgIHByaWNlOiAnMjI5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fZW9zXzI1MGRfa2l0XzE4LTU1X2lzX3doaXRlXzM0NThjMDAzJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICc1JyxcbiAgICBuYW1lOiAnQ2Fub24gRU9TIDZEIE1LIElJIEJvZHknLFxuICAgIG1waXg6ICcyNycsXG4gICAgcHJpY2U6ICc0NzE2MCcsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdjYW5vbl9lb3NfNmRfbWtfaWlfYm9keScsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICc2JyxcbiAgICBuYW1lOiAnQ2Fub24gRU9TIDgwMEQgMTgtNTUgSVMgU1RNIEtpdCcsXG4gICAgbXBpeDogJzI0JyxcbiAgICBwcmljZTogJzI5Mjk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdDYW5vbicsXG4gICAgdHlwZTogJ9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX2Vvc184MDBkXzE4LTU1X2lzX3N0bV9raXRfMTg5NWMwMTknLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzcnLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgQzcwIENpbmVtYSBDYW1lcmEnLFxuICAgIG1waXg6ICc5JyxcbiAgICBwcmljZTogJzE2NDk4OCcsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfQsdC10LfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdjYW5vbl9lb3NfYzcwX2NpbmVtYV9jYW1lcmEnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzgnLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgTTIwMCArIDE1LTQ1IElTIFNUTSBXaGl0ZScsXG4gICAgbXBpeDogJzI0JyxcbiAgICBwcmljZTogJzIwOTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdDYW5vbicsXG4gICAgdHlwZTogJ9C60L7QvNC/0LDQutGCJyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX2Vvc19tMjAwXytfMTUtNDVfaXNfc3RtX3doaXRlXzM3MDBjMDMyJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICc5JyxcbiAgICBuYW1lOiAnQ2Fub24gRU9TIE01MCBNazIgKyAxNS00NSBJUyBTVE0gKyA1NS0yMDAgSVMnLFxuICAgIG1waXg6ICcyNCcsXG4gICAgcHJpY2U6ICczNjM5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdjYW5vbl9lb3NfbTUwX21rMl8rXzE1LTQ1X2lzX3N0bV9raXRfd2hpdGVfNDcyOWMwMjgnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzEwJyxcbiAgICBuYW1lOiAnQ2Fub24gRU9TIE02IE1hcmsgSUkgKyAxNS00NSBJUyBTVE0gKyBFVkYgS2l0JyxcbiAgICBtcGl4OiAnMzQnLFxuICAgIHByaWNlOiAnNDAxOTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LHQtdC30LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fZW9zX202X21hcmtfaWlfK18xNS00NV9pc19zdG1fK19ldmZfa2l0X2JsYWNrXzM2MTFjMDUzJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICcxMScsXG4gICAgbmFtZTogJ0Nhbm9uIFpvZW1pbmkgUyBaVjEyMyBNYmsnLFxuICAgIG1waXg6ICc4JyxcbiAgICBwcmljZTogJzY0MjcnLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LrQvtC80L/QsNC60YInLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvdC10YInLFxuICAgIGltZzogJ2Nhbm9uX3pvZW1pbmlfc196djEyM19tYmsnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzEyJyxcbiAgICBuYW1lOiAnQ2Fub24gUG93ZXJzaG90IEc1IFggTWFyayBJSSBCbGFjaycsXG4gICAgbXBpeDogJzIwJyxcbiAgICBwcmljZTogJzMzOTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdDYW5vbicsXG4gICAgdHlwZTogJ9C60L7QvNC/0LDQutGCJyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX3Bvd2Vyc2hvdF9nNV94X21hcmtfaWlfYmxhY2tfMzA3MGMwMTMnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzEzJyxcbiAgICBuYW1lOiAnQ2Fub24gUG93ZXJTaG90IFNYNTQwIEhTIEJsYWNrJyxcbiAgICBtcGl4OiAnMjAnLFxuICAgIHByaWNlOiAnMTIzOTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0YPQu9GM0YLRgNCw0LfRg9C8JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX3Bvd2Vyc2hvdF9zeDU0MF9oc19ibGFja18xMDY3YzAxMicsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICcxNCcsXG4gICAgbmFtZTogJ0Nhbm9uIFBvd2VyU2hvdCBab29tJyxcbiAgICBtcGl4OiAnMTInLFxuICAgIHByaWNlOiAnMTIxOTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0YPQu9GM0YLRgNCw0LfRg9C8JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX3Bvd2Vyc2hvdF96b29tXzQ4MzhjMDA3JyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzE1JyxcbiAgICBuYW1lOiAnRnVqaWZpbG0gSW5zdGF4IE1pbmkgOTAgQnJvd24gRVggRCcsXG4gICAgbXBpeDogJzInLFxuICAgIHByaWNlOiAnNDk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnRnVqaWZpbG0nLFxuICAgIHR5cGU6ICfQutC+0LzQv9Cw0LrRgicsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C90LXRgicsXG4gICAgaW1nOiAnZnVqaWZpbG1faW5zdGF4X21pbmlfOTBfYnJvd25fZXhfZF8xNjQyMzk4MScsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMTYnLFxuICAgIG5hbWU6ICdGdWppZmlsbSBJbnN0YXggTWluaSBMaVBsYXkgQmx1c2ggR29sZCcsXG4gICAgbXBpeDogJzUnLFxuICAgIHByaWNlOiAnNTk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnRnVqaWZpbG0nLFxuICAgIHR5cGU6ICfQutC+0LzQv9Cw0LrRgicsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C90LXRgicsXG4gICAgaW1nOiAnZnVqaWZpbG1faW5zdGF4X21pbmlfbGlwbGF5X2JsdXNoX2dvbGRfMTY2MzE4NDknLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMTcnLFxuICAgIG5hbWU6ICdGdWppZmlsbSBYLVMxMCsgWEYgMTYtODBtbSBGNC4wIEtpdCBCbGFjaycsXG4gICAgbXBpeDogJzI2JyxcbiAgICBwcmljZTogJzU3MzM5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdGdWppZmlsbScsXG4gICAgdHlwZTogJ9Cx0LXQt9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0LzQsNGC0YDQuNGH0L3QsNGPJyxcbiAgICBpbWc6ICdmdWppZmlsbV94LXMxMCtfeGZfMTYtODBtbV9mNF8wX2tpdF9ibGFja18xNjY3MDA3NycsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICcxOCcsXG4gICAgbmFtZTogJ0Z1amlmaWxtIFgtVDMwIElJIE1pcnJvcmxlc3MgRGlnaXRhbCBDYW1lcmEnLFxuICAgIG1waXg6ICcyNicsXG4gICAgcHJpY2U6ICczMjQwMCcsXG4gICAgbWFudWZhY3R1cmVyOiAnRnVqaWZpbG0nLFxuICAgIHR5cGU6ICfQsdC10LfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdmdWppZmlsbV94LXMxMCtfeGZfMTYtODBtbV9mNF8wX2tpdF9ibGFja18xNjY3MDA3NycsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMTknLFxuICAgIG5hbWU6ICdGdWppZmlsbSBYLVQ0IEJvZHkgQmxhY2snLFxuICAgIG1waXg6ICcyNicsXG4gICAgcHJpY2U6ICc2NDY1OScsXG4gICAgbWFudWZhY3R1cmVyOiAnRnVqaWZpbG0nLFxuICAgIHR5cGU6ICfQsdC10LfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C80LDRgtGA0LjRh9C90LDRjycsXG4gICAgaW1nOiAnZnVqaWZpbG1feC10NF9ib2R5X2JsYWNrXzE2NjUwNDY3JyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzIwJyxcbiAgICBuYW1lOiAnTmlrb24gRDM1MDAgKyBBRi1QIDE4LTU1IE5vbiBWUicsXG4gICAgbXBpeDogJzI0JyxcbiAgICBwcmljZTogJzE4MjU2JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdOaWtvbicsXG4gICAgdHlwZTogJ9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L3QtdGCJyxcbiAgICBpbWc6ICduaWtvbl9kMzUwMF8rX2FmLXBfMTgtNTVfbm9uX3ZyX3ZiYTU1MGswMDInLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMjEnLFxuICAgIG5hbWU6ICdOaWtvbiBENTYwMCBLaXQgQUYtUCAxOC01NSBWUicsXG4gICAgbXBpeDogJzI0JyxcbiAgICBwcmljZTogJzI1NDk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdOaWtvbicsXG4gICAgdHlwZTogJ9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ25pa29uX2Q1NjAwX2tpdF9hZi1wXzE4LTU1X3ZyX3ZiYTUwMGswMDEnLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMjInLFxuICAgIG5hbWU6ICdOaWtvbiBaIGZjICsgMTYtNTAgVlIgS2l0JyxcbiAgICBtcGl4OiAnMjEnLFxuICAgIHByaWNlOiAnMzQzOTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ05pa29uJyxcbiAgICB0eXBlOiAn0LHQtdC30LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnbmlrb25fel9mY18rXzE2LTUwX3ZyX2tpdF92b2EwOTBrMDAyJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICcyMycsXG4gICAgbmFtZTogJ05pa29uIFo3IDI0LTcwIGY0IEtpdCcsXG4gICAgbXBpeDogJzQ2JyxcbiAgICBwcmljZTogJzExNjk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnTmlrb24nLFxuICAgIHR5cGU6ICfQsdC10LfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C80LDRgtGA0LjRh9C90LDRjycsXG4gICAgaW1nOiAnbmlrb25fejdfMjQtNzBfZjRfa2l0X3ZvYTAxMGswMDEnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzI0JyxcbiAgICBuYW1lOiAnTmlrb24gRDUtYiBCb2R5IChDRiknLFxuICAgIG1waXg6ICcyMScsXG4gICAgcHJpY2U6ICcxNDAzOTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ05pa29uJyxcbiAgICB0eXBlOiAn0LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvNCw0YLRgNC40YfQvdCw0Y8nLFxuICAgIGltZzogJ25pa29uX2Q1LWJfYm9keV9jZl92YmE0NjBiZScsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMjUnLFxuICAgIG5hbWU6ICdQYW5hc29uaWMgTFVNSVggREMtRlo4MkVFLUsgQmxhY2snLFxuICAgIG1waXg6ICcxOCcsXG4gICAgcHJpY2U6ICcxMDk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnUGFuYXNvbmljJyxcbiAgICB0eXBlOiAn0YPQu9GM0YLRgNCw0LfRg9C8JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ3BhbmFzb25pY19sdW1peF9kYy1mejgyZWUta19ibGFjaycsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMjYnLFxuICAgIG5hbWU6ICdQYW5hc29uaWMgTFVNSVggREMtRloxMDAwMkVFJyxcbiAgICBtcGl4OiAnMjEnLFxuICAgIHByaWNlOiAnMjI5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ1BhbmFzb25pYycsXG4gICAgdHlwZTogJ9C60L7QvNC/0LDQutGCJyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ3BhbmFzb25pY19sdW1peF9kYy1mejEwMDAyZWUnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzI3JyxcbiAgICBuYW1lOiAnUGFuYXNvbmljIExVTUlYIERDLUc5ME1FRS1LIEtpdCAxMi02MG1tJyxcbiAgICBtcGl4OiAnMjEnLFxuICAgIHByaWNlOiAnMzA5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ1BhbmFzb25pYycsXG4gICAgdHlwZTogJ9Cx0LXQt9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ3BhbmFzb25pY19sdW1peF9kYy1nOTBtZWUta19raXRfMTItNjBtbV9ibGFjaycsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICcyOCcsXG4gICAgbmFtZTogJ1BhbmFzb25pYyBMVU1JWCBEQy1UWjIwMEVFLUsgQmxhY2snLFxuICAgIG1waXg6ICcyMCcsXG4gICAgcHJpY2U6ICcyMTk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnUGFuYXNvbmljJyxcbiAgICB0eXBlOiAn0LrQvtC80L/QsNC60YInLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAncGFuYXNvbmljX2x1bWl4X2RjLXR6MjAwZWUta19ibGFjaycsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICcyOScsXG4gICAgbmFtZTogJ1BhbmFzb25pYyBMVU1JWCBETUMtRlQzMEVFLUEgQmx1ZScsXG4gICAgbXBpeDogJzE2JyxcbiAgICBwcmljZTogJzc0OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ1BhbmFzb25pYycsXG4gICAgdHlwZTogJ9C60L7QvNC/0LDQutGCJyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L3QtdGCJyxcbiAgICBpbWc6ICdwYW5hc29uaWNfbHVtaXhfZG1jLWZ0MzBlZS1hX2JsdWUnLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMzAnLFxuICAgIG5hbWU6ICdQYW5hc29uaWMgTFVNSVggRE1DLUxYMTVFRUsnLFxuICAgIG1waXg6ICcyMCcsXG4gICAgcHJpY2U6ICcxNjk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnUGFuYXNvbmljJyxcbiAgICB0eXBlOiAn0LrQvtC80L/QsNC60YInLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAncGFuYXNvbmljX2x1bWl4X2RtYy1seDE1ZWVrJyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzMxJyxcbiAgICBuYW1lOiAnUGFuYXNvbmljIExVTUlYIERNQy1UWjEwMEVFSycsXG4gICAgbXBpeDogJzIwJyxcbiAgICBwcmljZTogJzE1OTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdQYW5hc29uaWMnLFxuICAgIHR5cGU6ICfQutC+0LzQv9Cw0LrRgicsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdwYW5hc29uaWNfbHVtaXhfZG1jLXR6MTAwZWVrJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICczMicsXG4gICAgbmFtZTogJ1NvbnkgQWxwaGEgN000IDI4LTcwbW0gS2l0IEJsYWNrJyxcbiAgICBtcGl4OiAnMjEnLFxuICAgIHByaWNlOiAnMzA5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ1NvbnknLFxuICAgIHR5cGU6ICfQsdC10LfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdzb255X2FscGhhXzdtNF8yOC03MG1tX2tpdF9ibGFja19pbGNlN200a2JfY2VjJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICczMycsXG4gICAgbmFtZTogJ1NvbnkgQWxwaGEgOU0yIEJvZHkgQmxhY2snLFxuICAgIG1waXg6ICcyOCcsXG4gICAgcHJpY2U6ICcxNDk5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ1NvbnknLFxuICAgIHR5cGU6ICfQsdC10LfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdzb255X2FscGhhXzltMl9ib2R5X2JsYWNrX2lsY2U5bTJiX2NlYycsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICczNCcsXG4gICAgbmFtZTogJ1NvbnkgQ3liZXItU2hvdCBIMzAwIEJsYWNrJyxcbiAgICBtcGl4OiAnMjAnLFxuICAgIHByaWNlOiAnNzk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnU29ueScsXG4gICAgdHlwZTogJ9GD0LvRjNGC0YDQsNC30YPQvCcsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdzb255X2N5YmVyLXNob3RfaDMwMF9ibGFja19kc2NoMzAwX3J1MycsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMzUnLFxuICAgIG5hbWU6ICdTb255IEN5YmVyLVNob3QgUlgxMCBNa0lWJyxcbiAgICBtcGl4OiAnMjEnLFxuICAgIHByaWNlOiAnNTk5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ1NvbnknLFxuICAgIHR5cGU6ICfQutC+0LzQv9Cw0LrRgicsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdzb255X2N5YmVyLXNob3RfcngxMF9ta2l2X2RzY3J4MTBtNF9ydTMnLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMzYnLFxuICAgIG5hbWU6ICdTb255IEN5YmVyLVNob3QgUlgxMDAgTWtWQSBCbGFjaycsXG4gICAgbXBpeDogJzIwJyxcbiAgICBwcmljZTogJzMzOTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdTb255JyxcbiAgICB0eXBlOiAn0LrQvtC80L/QsNC60YInLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnc29ueV9jeWJlci1zaG90X3J4MTAwX21rdmFfYmxhY2tfZHNjcngxMDBtNWFfcnUzJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5cbmltcG9ydCB7IENhbWVyYURhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IFNob3BTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3RzL19zaG9wLXNsaWRlcic7XG5pbXBvcnQgUmVuZGVyQ2FyZHMgZnJvbSAnLi9jb21wb25lbnRzL3RzL19zaG9wLWNhcmRzJztcbmltcG9ydCBDYW1lcmFGaWx0ZXIgZnJvbSAnLi9jb21wb25lbnRzL3RzL19zaG9wLWZpbHRlcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuXG5pbXBvcnQgJy4vZ2xvYmFsLnNjc3MnO1xuaW1wb3J0IFNvcnRDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvdHMvX3Nob3Atc29ydCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuL2NvbXBvbmVudHMvdHMvX2NhcnQnO1xuaW1wb3J0IHByaW50U2VsZmNoZWNrIGZyb20gJy4vY29tcG9uZW50cy90cy9wcmludC1zZWxmY2hlY2snO1xuXG5jb25zdCBwcmljZVNsaWRlciA9IG5ldyBTaG9wU2xpZGVyKCdzaG9wLXByaWNlJywgWzQ5OTksIDE2NDk4OF0sIDEpO1xuY29uc3QgbXBpeFNsaWRlciA9IG5ldyBTaG9wU2xpZGVyKCdzaG9wLW1waXgnLCBbMiwgNDZdLCAxKTtcbmNvbnN0IGNhcnRUZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X190ZXh0Jyk7XG5cbmNvbnN0IGNhcmRzID0gbmV3IFJlbmRlckNhcmRzKCk7XG5jb25zdCBzb3J0ID0gbmV3IFNvcnRDYXJkcygnLnNob3Atc29ydF9fc2VsZWN0Jyk7XG5jb25zdCBmaWx0ZXJzID0gbmV3IENhbWVyYUZpbHRlcigpO1xuXG5jb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcblxubGV0IGZpbHRlcmVkRGF0YTogQ2FtZXJhRGF0YTtcblxuLy8gRXZlbnRsaXN0ZW5lciBmb3Igc29ydGluZyBsaXN0XG5zb3J0LnNob3BTb3J0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvcnRPcmRlcicsIHNvcnQuc2hvcFNvcnRTZWxlY3QudmFsdWUpO1xuICBkcmF3KCk7XG59KTtcblxuLy8gRXZlbnRsaXN0ZW5lciBmb3Igc2VhcmNoIGJveFxuY29uc3Qgc2VhcmNoQm94OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3gnKTtcbmNvbnN0IHNlYXJjaENsZWFyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jbGVhcicpO1xuc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBzZWFyY2hCb3gudmFsdWUgPyBzZWFyY2hCb3guY2xhc3NMaXN0LmFkZCgnd2l0aC1jbGVhcicpIDogc2VhcmNoQm94LmNsYXNzTGlzdC5yZW1vdmUoJ3dpdGgtY2xlYXInKTtcbiAgZHJhdygpO1xufSk7XG5zZWFyY2hDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2VhcmNoQm94LnZhbHVlID0gJyc7XG4gIHNlYXJjaEJveC5jbGFzc0xpc3QucmVtb3ZlKCd3aXRoLWNsZWFyJyk7XG4gIHNlYXJjaEJveC5mb2N1cygpO1xuICBkcmF3KCk7XG59KTtcblxuLy8gRXZlbnRsaXN0ZW5lciBmb3IgZmlsdGVyIGNoZWNrYm94ZXNcbmNvbnN0IHNob3BPcHRpb25zOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLW9wdGlvbnMnKTtcbnNob3BPcHRpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveF9zaG9wJykpIHtcbiAgICBjb25zdCBjaGVja2JveGVzQ2hlY2tlZDogYm9vbGVhbltdID0gW107XG4gICAgZmlsdGVycy5jaGVja2JveGVzLmZvckVhY2goKGNoYm94LCBpZHgpID0+IHtcbiAgICAgIGNoZWNrYm94ZXNDaGVja2VkW2lkeF0gPSBjaGJveC5jaGVja2VkO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaGVja2JveGVzJywgSlNPTi5zdHJpbmdpZnkoY2hlY2tib3hlc0NoZWNrZWQpKTtcbiAgICBkcmF3KCk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudGxpc3RlbmVyIGZvciBzbGlkZXJzXG5wcmljZVNsaWRlci5zbGlkZXJUYXJnZXQubm9VaVNsaWRlci5vbigndXBkYXRlJywgKCkgPT4ge1xuICBkcmF3KCk7XG59KTtcbnByaWNlU2xpZGVyLnNsaWRlclRhcmdldC5ub1VpU2xpZGVyLm9uKCdzZXQnLCAoKSA9PiB7XG4gIGNvbnN0IHByaWNlcyA9IHByaWNlU2xpZGVyLnNsaWRlclRhcmdldC5ub1VpU2xpZGVyLmdldCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmljZXMnLCBKU09OLnN0cmluZ2lmeShwcmljZXMpKTtcbn0pO1xuXG5tcGl4U2xpZGVyLnNsaWRlclRhcmdldC5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gIGRyYXcoKTtcbn0pO1xubXBpeFNsaWRlci5zbGlkZXJUYXJnZXQubm9VaVNsaWRlci5vbignc2V0JywgKCkgPT4ge1xuICBjb25zdCBtcGl4ZXMgPSBtcGl4U2xpZGVyLnNsaWRlclRhcmdldC5ub1VpU2xpZGVyLmdldCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtcGl4ZXMnLCBKU09OLnN0cmluZ2lmeShtcGl4ZXMpKTtcbn0pO1xuXG4vLyBFdmVudGxpc3RlbmVyIGZvciBmaWx0ZXIgcmVzZXQgYnV0dG9uXG5jb25zdCBmaWx0ZXJSZXNldDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcC1yZXNldC1maWx0ZXJzJyk7XG5maWx0ZXJSZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZmlsdGVycy5maWx0ZXJzUmVzZXQoKTtcbiAgZHJhdygpO1xufSk7XG5cbi8vIEV2ZW50bGlzdGVuZXIgZm9yIGFsbCByZXNldCBidXR0b25cbmNvbnN0IGFsbFJlc2V0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLXJlc2V0LXN0b3JhZ2UnKTtcbmFsbFJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmaWx0ZXJzLmZpbHRlcnNSZXNldCgpO1xuICBzb3J0LnNvcnRSZXNldCgpO1xuICBjYXJ0LmNsZWFyKCk7XG4gIGRyYXcoKTtcbn0pO1xuXG4vLyBFdmVudGxpc3RlbmVyIGZvciBjYXJ0IHRvZ2dsZVxuY29uc3Qgc2hvcEdvb2RzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWdvb2RzJyk7XG5zaG9wR29vZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSAoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5jbG9zZXN0KCcuc2hvcC1jYXJkJyk7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBjYXJ0LnRvZ2dsZSgoPEhUTUxFbGVtZW50PnRhcmdldC5jaGlsZHJlblsxXSkuaW5uZXJUZXh0KTsgLy9GaW5kcyBuYW1lIG9mIGEgY2FyZFxuICAgIGRyYXcoKTtcbiAgfVxufSk7XG5cbi8vIERyYXcvcmVkcmF3IGNhcmRzXG5mdW5jdGlvbiBkcmF3KCkge1xuICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJzLmZpbHRlcihkYXRhKTtcbiAgY29uc3Qgc29ydGVkRGF0YTogQ2FtZXJhRGF0YSA9IHNvcnQuc29ydChmaWx0ZXJlZERhdGEpO1xuICBjYXJkcy5kcmF3KHNvcnRlZERhdGEsIGNhcnQuY2FydFN0b3JhZ2UpO1xuXG4gIGNhcnQuY2FydENvdW50ZXIgPyBjYXJ0VGV4dC5jbGFzc0xpc3QuYWRkKCdoYXMtaXRlbXMnKSA6IGNhcnRUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1pdGVtcycpO1xuICBjYXJ0VGV4dC5pbm5lclRleHQgPSBTdHJpbmcoY2FydC5jYXJ0Q291bnRlcik7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBwcmludFNlbGZjaGVjaztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==