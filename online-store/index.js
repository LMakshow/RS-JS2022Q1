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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-feature-settings: \"pnum\" on, \"lnum\" on;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  color: #191919;\n  background: fixed no-repeat center/cover url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\ntextarea:focus, input:focus {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\np,\nul,\nol {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.hide {\n  display: none;\n}\n\n.header {\n  font-family: \"Alegreya Sans\", sans-serif;\n  position: relative;\n  z-index: 10;\n  padding: 15px 0;\n}\n\n.header__container {\n  display: flex;\n  max-width: 1720px;\n  width: 95%;\n  height: 60px;\n  align-items: center;\n  margin: auto;\n  gap: 60px;\n}\n@media screen and (max-width: 1279px) {\n  .header__container {\n    width: 96%;\n    gap: 25px;\n  }\n}\n\n.navigation {\n  display: flex;\n  align-items: center;\n  width: 320px;\n  gap: 30px;\n  font-size: 36px;\n  line-height: 42px;\n}\n@media screen and (max-width: 1279px) {\n  .navigation {\n    width: auto;\n  }\n}\n\n.header__link {\n  display: flex;\n  align-items: center;\n  transition: 0.3s;\n  gap: 10px;\n}\n\n.header__link_span:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.header__icon_main {\n  height: 50px;\n  width: auto;\n}\n@media screen and (max-width: 899px) {\n  .header__icon_main {\n    display: none;\n  }\n}\n\n.header__icon {\n  height: 30px;\n  width: auto;\n}\n\n.search-container {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n}\n\n.shop-options__sort {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 1279px) {\n  .shop-options__sort {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n.shop-options__text {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-size: 22px;\n  color: #191919;\n}\n\n.shop-sort__select {\n  background: none;\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 5px;\n  font-size: 22px;\n  color: #7f7f7f;\n  border: none;\n  transition-duration: 0.4s;\n}\n@media screen and (max-width: 1279px) {\n  .shop-sort__select {\n    padding: 0;\n    font-size: 18px;\n    margin-left: -3px;\n  }\n}\n\n.shop-sort__option {\n  background-color: #F2F4F5;\n}\n\n.search-field {\n  display: flex;\n  flex-grow: 1;\n  max-width: 600px;\n  height: 50px;\n  position: relative;\n}\n\n.search-box {\n  width: 100%;\n  min-width: 200px;\n  background: rgba(255, 255, 255, 0.8);\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 45px 0 20px;\n  font-size: 24px;\n  line-height: 30px;\n  color: #191919;\n  border-radius: 30px;\n  border: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: right 20px center;\n  transition: all 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n\n.with-clear {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.search-clear {\n  position: absolute;\n  right: 10px;\n  width: 40px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.cart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 60px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 48px 60px;\n  flex-shrink: 0;\n}\n\n.cart__text {\n  font-size: 24px;\n  line-height: 24px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #7f7f7f;\n  padding: 5px;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  text-align: center;\n  position: relative;\n  top: 0px;\n  left: -26px;\n}\n\n.has-items {\n  color: #F2F4F5;\n  background-color: #c00;\n}\n\n.footer {\n  position: relative;\n  z-index: 10;\n  font-family: \"Alegreya Sans\", sans-serif;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.footer__container {\n  width: 100%;\n  padding: 15px;\n  gap: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n@media screen and (max-width: 939px) {\n  .footer__container {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n}\n\n.footer__text {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n}\n@media screen and (max-width: 939px) {\n  .footer__text {\n    align-items: center;\n    gap: 10px;\n  }\n}\n\n.footer__link {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  transition: 0.3s;\n}\n@media screen and (max-width: 939px) {\n  .footer__link {\n    text-align: center;\n  }\n}\n\n.footer__link:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.footer__image-RS {\n  height: 40px;\n}\n\n.footer__image-GH {\n  height: 30px;\n}\n\n.shop-page {\n  width: 100%;\n}\n\n.shop-container {\n  max-width: 1720px;\n  width: 95%;\n  display: flex;\n  margin: auto;\n  gap: 15px;\n}\n@media screen and (max-width: 1279px) {\n  .shop-container {\n    width: 98%;\n  }\n}\n@media screen and (max-width: 939px) {\n  .shop-container {\n    gap: 10px;\n  }\n}\n\n.shop-left-side {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-left-side {\n    width: auto;\n    gap: 5px;\n  }\n}\n\n.shop-options {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n  gap: 10px;\n  justify-content: space-around;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  height: calc(100vh - 210px);\n  min-height: 630px;\n  max-height: 770px;\n}\n@media screen and (max-width: 939px) {\n  .shop-options {\n    width: 210px;\n    padding: 10px;\n    height: auto;\n    min-height: auto;\n    max-height: none;\n  }\n}\n\n.shop-maker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-maker__list,\n.shop-type__list {\n  display: grid;\n  row-gap: 10px;\n  column-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n}\n@media screen and (max-width: 939px) {\n  .shop-maker__list,\n.shop-type__list {\n    grid-template-columns: 1fr;\n  }\n}\n\n.shop-maker__select {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.shop-maker__option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.shop-maker__option:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox_shop:checked + .shop-maker__option,\n.checkbox_shop:checked + .shop-options__text {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox-none:checked + .shop-maker__img {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox-none {\n  display: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.shop-maker__img {\n  height: 17px;\n}\n\n.checkbox_shop {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  margin: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  background: no-repeat center/contain url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.checkbox_shop:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n.checkbox_shop:checked {\n  background: no-repeat center/contain url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.shop-price,\n.shop-mpix {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.slider {\n  height: 4px;\n  margin: 0 8px;\n  border: none;\n  background: #7f7f7f;\n}\n.slider .noUi-handle::before, .slider .noUi-handle::after {\n  display: none;\n}\n.slider .noUi-connect {\n  background: #c00;\n}\n.slider .noUi-handle {\n  height: 16px;\n  width: 16px;\n  top: -6px;\n  right: -8px;\n  /* half the width */\n  border-radius: 8px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n}\n.slider .noUi-handle .noUi-touch-area {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n}\n\n.slider__labels {\n  display: flex;\n  justify-content: space-between;\n}\n\n.shop-price__labels-low,\n.shop-price__labels-high,\n.shop-mpix__labels-low,\n.shop-mpix__labels-high {\n  appearance: textfield;\n  text-align: center;\n  width: 60px;\n  height: 30px;\n  border: 1px solid #999;\n  color: #303030;\n  font-size: 13px;\n  line-height: 30px;\n  outline: none;\n  padding: 0 5px;\n  border-radius: 10px;\n}\n\n.shop-type,\n.shop-stab {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-stab__list {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-stab__list {\n    align-items: flex-start;\n    gap: 10px;\n    flex-direction: column;\n  }\n}\n\n.shop-stab__option {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.shop-stab__option:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.shop-stock {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn_stock {\n  order: 1;\n}\n\n.shop-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-reset-filters,\n.shop-reset-storage {\n  width: 240px;\n  height: 30px;\n  align-self: center;\n  background: #F2F4F5;\n  border-radius: 30px;\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 5px;\n  font-size: 16px;\n  color: #191919;\n  border: 2px solid #7f7f7f;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n@media screen and (max-width: 939px) {\n  .shop-reset-filters,\n.shop-reset-storage {\n    width: 95%;\n  }\n}\n\n.shop-reset-filters:hover,\n.shop-reset-storage:hover {\n  border: 2px solid #c00;\n}\n\n.shop-reset-filters:active,\n.shop-reset-storage:active {\n  background: #c00;\n}\n\n.shop-goods {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  gap: 12px;\n  justify-content: flex-start;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  margin-bottom: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-goods {\n    padding: 10px;\n    gap: 10px;\n  }\n}\n\n.modal-overlay {\n  display: none;\n  position: fixed;\n  z-index: 20;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.visible {\n  display: block;\n}\n\n.shop-popup {\n  background-color: #fefefe;\n  margin: 40vh auto;\n  padding: 15px;\n  border: 1px solid #c00;\n  border-radius: 20px;\n  width: 400px;\n  box-shadow: rgba(0, 0, 0, 0.3) 5px 10px 10px;\n  animation-name: appear;\n  animation-duration: 0.4s;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.shop-popup__button {\n  float: right;\n  width: 25px;\n  height: 25px;\n}\n.shop-popup__button:hover, .shop-popup__button:focus {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n  cursor: pointer;\n}\n\n.shop-popup__text {\n  text-align: center;\n  font-size: 24px;\n  margin: 40px 20px 25px;\n}\n\n.shop-card {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 10px;\n  width: 250px;\n  height: 450px;\n  justify-content: flex-start;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  transition: all 0.2s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  cursor: pointer;\n}\n.shop-card:hover {\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.15), 0px 0px 2px 0.00144px rgba(0, 0, 0, 0.12);\n}\n\n.shop-card__name {\n  font-weight: 700;\n  line-height: 26px;\n  height: 52px;\n  font-size: 21px;\n}\n\n.shop-card__price-mp {\n  display: flex;\n}\n\n.shop-card__block {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n}\n\n.text-big {\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 31px;\n}\n\n.text-aux {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #7f7f7f;\n}\n\n.shop-card__price-mpix,\n.shop-card__stock-cart {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.text-in-stock {\n  color: #c00;\n}\n\n.text-out-of-stock {\n  color: #7f7f7f;\n}\n\n.text-no-cards {\n  align-self: center;\n  flex-grow: 1;\n  text-align: center;\n  font-size: 24px;\n}\n\n.shop-card__cart {\n  width: 119px;\n  height: 32px;\n  background: #191919;\n  color: rgba(255, 255, 255, 0.8);\n  border: #191919 2px solid;\n  border-radius: 8px;\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.added {\n  background: #c00;\n  border: #c00 2px solid;\n  color: #F2F4F5;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/components/sass/_global.scss","webpack://./src/global.scss","webpack://./src/components/sass/_header.scss","webpack://./src/components/sass/_footer.scss","webpack://./src/components/sass/_shop-page.scss","webpack://./src/components/sass/_shop-card.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500;700&display=swap');\n// $primary-color: #fff;\n$primary-color: rgba(255,255,255,0.8);\n$accent-color: #c00;\n$accent-dark-color: #F2F4F5;\n$text-color: #191919;\n$text-secondary-color: #7f7f7f;\n$font-header: 'Alegreya Sans', sans-serif;\n$font-main: 'Alegreya Sans', sans-serif;\n$hover-effect: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: $font-main;\n  font-feature-settings: 'pnum' on, 'lnum' on;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  color: $text-color;\n  background: fixed no-repeat center/cover url(\"./assets/bg-1.jpg\");\n  // background: $accent-dark-color;\n}\n\ntextarea:focus, input:focus{\n  outline: none;\n}\n\nh1,\nh2,\nh3,\np,\nul,\nol {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.hide {\n  display: none;\n}","@import url(\"https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500;700&display=swap\");\n@import 'nouislider/dist/nouislider.css';\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-feature-settings: \"pnum\" on, \"lnum\" on;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  color: #191919;\n  background: fixed no-repeat center/cover url(\"./assets/bg-1.jpg\");\n}\n\ntextarea:focus, input:focus {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\np,\nul,\nol {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.hide {\n  display: none;\n}\n\n.header {\n  font-family: \"Alegreya Sans\", sans-serif;\n  position: relative;\n  z-index: 10;\n  padding: 15px 0;\n}\n\n.header__container {\n  display: flex;\n  max-width: 1720px;\n  width: 95%;\n  height: 60px;\n  align-items: center;\n  margin: auto;\n  gap: 60px;\n}\n@media screen and (max-width: 1279px) {\n  .header__container {\n    width: 96%;\n    gap: 25px;\n  }\n}\n\n.navigation {\n  display: flex;\n  align-items: center;\n  width: 320px;\n  gap: 30px;\n  font-size: 36px;\n  line-height: 42px;\n}\n@media screen and (max-width: 1279px) {\n  .navigation {\n    width: auto;\n  }\n}\n\n.header__link {\n  display: flex;\n  align-items: center;\n  transition: 0.3s;\n  gap: 10px;\n}\n\n.header__link_span:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.header__icon_main {\n  height: 50px;\n  width: auto;\n}\n@media screen and (max-width: 899px) {\n  .header__icon_main {\n    display: none;\n  }\n}\n\n.header__icon {\n  height: 30px;\n  width: auto;\n}\n\n.search-container {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n}\n\n.shop-options__sort {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 1279px) {\n  .shop-options__sort {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n.shop-options__text {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-size: 22px;\n  color: #191919;\n}\n\n.shop-sort__select {\n  background: none;\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 5px;\n  font-size: 22px;\n  color: #7f7f7f;\n  border: none;\n  transition-duration: 0.4s;\n}\n@media screen and (max-width: 1279px) {\n  .shop-sort__select {\n    padding: 0;\n    font-size: 18px;\n    margin-left: -3px;\n  }\n}\n\n.shop-sort__option {\n  background-color: #F2F4F5;\n}\n\n.search-field {\n  display: flex;\n  flex-grow: 1;\n  max-width: 600px;\n  height: 50px;\n  position: relative;\n}\n\n.search-box {\n  width: 100%;\n  min-width: 200px;\n  background: rgba(255, 255, 255, 0.8);\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 45px 0 20px;\n  font-size: 24px;\n  line-height: 30px;\n  color: #191919;\n  border-radius: 30px;\n  border: none;\n  background-image: url(\"./assets/svg/search.svg\");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: right 20px center;\n  transition: all 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n\n.with-clear {\n  background-image: url(\"./assets/svg/search-clear.svg\");\n}\n\n.search-clear {\n  position: absolute;\n  right: 10px;\n  width: 40px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.cart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 60px;\n  background-image: url(\"./assets/icons/cart-dslr.png\");\n  background-size: 48px 60px;\n  flex-shrink: 0;\n}\n\n.cart__text {\n  font-size: 24px;\n  line-height: 24px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #7f7f7f;\n  padding: 5px;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  text-align: center;\n  position: relative;\n  top: 0px;\n  left: -26px;\n}\n\n.has-items {\n  color: #F2F4F5;\n  background-color: #c00;\n}\n\n.footer {\n  position: relative;\n  z-index: 10;\n  font-family: \"Alegreya Sans\", sans-serif;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.footer__container {\n  width: 100%;\n  padding: 15px;\n  gap: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n@media screen and (max-width: 939px) {\n  .footer__container {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n}\n\n.footer__text {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n}\n@media screen and (max-width: 939px) {\n  .footer__text {\n    align-items: center;\n    gap: 10px;\n  }\n}\n\n.footer__link {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  transition: 0.3s;\n}\n@media screen and (max-width: 939px) {\n  .footer__link {\n    text-align: center;\n  }\n}\n\n.footer__link:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.footer__image-RS {\n  height: 40px;\n}\n\n.footer__image-GH {\n  height: 30px;\n}\n\n.shop-page {\n  width: 100%;\n}\n\n.shop-container {\n  max-width: 1720px;\n  width: 95%;\n  display: flex;\n  margin: auto;\n  gap: 15px;\n}\n@media screen and (max-width: 1279px) {\n  .shop-container {\n    width: 98%;\n  }\n}\n@media screen and (max-width: 939px) {\n  .shop-container {\n    gap: 10px;\n  }\n}\n\n.shop-left-side {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-left-side {\n    width: auto;\n    gap: 5px;\n  }\n}\n\n.shop-options {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n  gap: 10px;\n  justify-content: space-around;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  height: calc(100vh - 210px);\n  min-height: 630px;\n  max-height: 770px;\n}\n@media screen and (max-width: 939px) {\n  .shop-options {\n    width: 210px;\n    padding: 10px;\n    height: auto;\n    min-height: auto;\n    max-height: none;\n  }\n}\n\n.shop-maker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-maker__list,\n.shop-type__list {\n  display: grid;\n  row-gap: 10px;\n  column-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n}\n@media screen and (max-width: 939px) {\n  .shop-maker__list,\n.shop-type__list {\n    grid-template-columns: 1fr;\n  }\n}\n\n.shop-maker__select {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.shop-maker__option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.shop-maker__option:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox_shop:checked + .shop-maker__option,\n.checkbox_shop:checked + .shop-options__text {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox-none:checked + .shop-maker__img {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.checkbox-none {\n  display: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.shop-maker__img {\n  height: 17px;\n}\n\n.checkbox_shop {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  margin: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  background: no-repeat center/contain url(./assets/svg/checkbox-unchecked.svg);\n}\n.checkbox_shop:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n.checkbox_shop:checked {\n  background: no-repeat center/contain url(./assets/svg/checkbox-checked.svg);\n}\n\n.shop-price,\n.shop-mpix {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.slider {\n  height: 4px;\n  margin: 0 8px;\n  border: none;\n  background: #7f7f7f;\n}\n.slider .noUi-handle::before, .slider .noUi-handle::after {\n  display: none;\n}\n.slider .noUi-connect {\n  background: #c00;\n}\n.slider .noUi-handle {\n  height: 16px;\n  width: 16px;\n  top: -6px;\n  right: -8px;\n  /* half the width */\n  border-radius: 8px;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n}\n.slider .noUi-handle .noUi-touch-area {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n}\n\n.slider__labels {\n  display: flex;\n  justify-content: space-between;\n}\n\n.shop-price__labels-low,\n.shop-price__labels-high,\n.shop-mpix__labels-low,\n.shop-mpix__labels-high {\n  appearance: textfield;\n  text-align: center;\n  width: 60px;\n  height: 30px;\n  border: 1px solid #999;\n  color: #303030;\n  font-size: 13px;\n  line-height: 30px;\n  outline: none;\n  padding: 0 5px;\n  border-radius: 10px;\n}\n\n.shop-type,\n.shop-stab {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-stab__list {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-stab__list {\n    align-items: flex-start;\n    gap: 10px;\n    flex-direction: column;\n  }\n}\n\n.shop-stab__option {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.shop-stab__option:hover {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n}\n\n.shop-stock {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn_stock {\n  order: 1;\n}\n\n.shop-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-reset-filters,\n.shop-reset-storage {\n  width: 240px;\n  height: 30px;\n  align-self: center;\n  background: #F2F4F5;\n  border-radius: 30px;\n  font-family: \"Alegreya Sans\", sans-serif;\n  padding: 0 5px;\n  font-size: 16px;\n  color: #191919;\n  border: 2px solid #7f7f7f;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n@media screen and (max-width: 939px) {\n  .shop-reset-filters,\n.shop-reset-storage {\n    width: 95%;\n  }\n}\n\n.shop-reset-filters:hover,\n.shop-reset-storage:hover {\n  border: 2px solid #c00;\n}\n\n.shop-reset-filters:active,\n.shop-reset-storage:active {\n  background: #c00;\n}\n\n.shop-goods {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  gap: 12px;\n  justify-content: flex-start;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  margin-bottom: 15px;\n}\n@media screen and (max-width: 939px) {\n  .shop-goods {\n    padding: 10px;\n    gap: 10px;\n  }\n}\n\n.modal-overlay {\n  display: none;\n  position: fixed;\n  z-index: 20;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.visible {\n  display: block;\n}\n\n.shop-popup {\n  background-color: #fefefe;\n  margin: 40vh auto;\n  padding: 15px;\n  border: 1px solid #c00;\n  border-radius: 20px;\n  width: 400px;\n  box-shadow: rgba(0, 0, 0, 0.3) 5px 10px 10px;\n  animation-name: appear;\n  animation-duration: 0.4s;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.shop-popup__button {\n  float: right;\n  width: 25px;\n  height: 25px;\n}\n.shop-popup__button:hover, .shop-popup__button:focus {\n  filter: invert(10%) sepia(93%) saturate(5894%) hue-rotate(2deg) brightness(91%) contrast(113%);\n  cursor: pointer;\n}\n\n.shop-popup__text {\n  text-align: center;\n  font-size: 24px;\n  margin: 40px 20px 25px;\n}\n\n.shop-card {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 10px;\n  width: 250px;\n  height: 450px;\n  justify-content: flex-start;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  transition: all 0.2s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  cursor: pointer;\n}\n.shop-card:hover {\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.15), 0px 0px 2px 0.00144px rgba(0, 0, 0, 0.12);\n}\n\n.shop-card__name {\n  font-weight: 700;\n  line-height: 26px;\n  height: 52px;\n  font-size: 21px;\n}\n\n.shop-card__price-mp {\n  display: flex;\n}\n\n.shop-card__block {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n}\n\n.text-big {\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 31px;\n}\n\n.text-aux {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #7f7f7f;\n}\n\n.shop-card__price-mpix,\n.shop-card__stock-cart {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.text-in-stock {\n  color: #c00;\n}\n\n.text-out-of-stock {\n  color: #7f7f7f;\n}\n\n.text-no-cards {\n  align-self: center;\n  flex-grow: 1;\n  text-align: center;\n  font-size: 24px;\n}\n\n.shop-card__cart {\n  width: 119px;\n  height: 32px;\n  background: #191919;\n  color: rgba(255, 255, 255, 0.8);\n  border: #191919 2px solid;\n  border-radius: 8px;\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.added {\n  background: #c00;\n  border: #c00 2px solid;\n  color: #F2F4F5;\n  font-weight: 700;\n}",".header {\n  // background-color: $accent-dark-color;\n  font-family: $font-header;\n  position: relative;\n  z-index: 10;\n  padding: 15px 0;\n}\n\n.header__container {\n  display: flex;\n  max-width: 1720px;\n  width: 95%;\n  height: 60px;\n  align-items: center;\n  margin: auto;\n  gap: 60px;\n\n  @media screen and (max-width: 1279px) {\n    width: 96%;\n    gap: 25px;\n  }\n}\n\n.navigation {\n  display: flex;\n  align-items: center;\n  width: 320px;\n  gap: 30px;\n  font-size: 36px;\n  line-height: 42px;\n\n  @media screen and (max-width: 1279px) {\n    width: auto;\n  }\n}\n\n.header__link {\n  display: flex;\n  align-items: center;\n  transition: .3s;\n  gap: 10px;\n}\n\n.header__link_span:hover {\n  filter: $hover-effect;\n}\n\n.header__icon_main {\n  height: 50px;\n  width: auto;\n\n  @media screen and (max-width: 899px) {\n    display: none;\n  }\n}\n\n.header__icon {\n  height: 30px;\n  width: auto;\n}\n\n.search-container {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n}\n\n.shop-options__sort {\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 1279px) {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n.shop-options__text {\n  font-family: $font-header;\n  font-size: 22px;\n  color: $text-color;\n}\n\n.shop-sort__select {\n  background: none;\n  font-family: $font-main;\n  padding: 0 5px;\n  font-size: 22px;\n  color: $text-secondary-color;\n  border: none;\n  transition-duration: 0.4s;\n\n  @media screen and (max-width: 1279px) {\n    padding: 0;\n    font-size: 18px;\n    margin-left: -3px;\n  }\n}\n\n.shop-sort__option {\n  background-color: $accent-dark-color;\n}\n\n.search-field {\n  display: flex;\n  flex-grow: 1;\n  max-width: 600px;\n  height: 50px;\n  position: relative;\n}\n\n.search-box {\n  width: 100%;\n  min-width: 200px;\n  background: $primary-color;\n  font-family: $font-header;\n  padding: 0 45px 0 20px;\n  font-size: 24px;\n  line-height: 30px;\n  color: $text-color;\n  border-radius: 30px;\n  border: none;\n  background-image: url(\"./assets/svg/search.svg\");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: right 20px center;\n  transition: all 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n}\n\n.with-clear {\n  background-image: url(\"./assets/svg/search-clear.svg\");\n}\n\n.search-clear {\n  position: absolute;\n  right: 10px;\n  width: 40px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.cart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 60px;\n  background-image: url(\"./assets/icons/cart-dslr.png\");\n  background-size: 48px 60px;\n  flex-shrink: 0;\n}\n\n.cart__text {\n  font-size: 24px;\n  line-height: 24px;\n  color: $primary-color;\n  background-color: $text-secondary-color;\n  padding: 5px;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  text-align: center;\n  position: relative;\n  top: 0px;\n  left: -26px;\n}\n\n.has-items {\n  color: $accent-dark-color;\n  background-color: $accent-color;\n}",".footer {\n  position: relative;\n  z-index: 10;\n  font-family: $font-header;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.footer__container {\n  width: 100%;\n  padding: 15px;\n  gap: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: $primary-color;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n\n  @media screen and (max-width: 939px) {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n  }\n}\n\n.footer__text {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n\n  @media screen and (max-width: 939px) {\n    align-items: center;\n    gap: 10px;\n  }\n}\n\n.footer__link {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  transition: .3s;\n\n  @media screen and (max-width: 939px) {\n    text-align: center;\n  }\n}\n\n.footer__link:hover {\n  filter: $hover-effect;\n}\n\n.footer__image-RS {\n  height: 40px;\n}\n\n.footer__image-GH {\n  height: 30px;\n}","@import 'nouislider/dist/nouislider.css';\n\n.shop-page {\n  // background: $accent-dark-color;\n  width: 100%;\n}\n\n.shop-container {\n  max-width: 1720px;\n  width: 95%;\n  display: flex;\n  margin: auto;\n  gap: 15px;\n\n  @media screen and (max-width: 1279px) {\n    width: 98%;\n  }\n\n  @media screen and (max-width: 939px) {\n    gap: 10px;\n  }\n}\n\n.shop-left-side {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n\n  @media screen and (max-width: 939px) {\n    width: auto;\n    gap: 5px;\n  }\n}\n\n.shop-options {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n  gap: 10px;\n  justify-content: space-around;\n  background: $primary-color;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  height: calc(100vh - 210px);\n  min-height: 630px;\n  max-height: 770px;\n\n  @media screen and (max-width: 939px) {\n    width: 210px;\n    padding: 10px;\n    height: auto;\n    min-height: auto;\n    max-height: none;\n  }\n}\n\n.shop-maker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-maker__list,\n.shop-type__list {\n  display: grid;\n  row-gap: 10px;\n  column-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n\n  @media screen and (max-width: 939px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.shop-maker__select {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.shop-maker__option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-size: 18px;\n  transition: .3s;\n  cursor: pointer;\n\n  &:hover {\n    filter: $hover-effect;\n  }\n}\n\n.checkbox_shop:checked+.shop-maker__option,\n.checkbox_shop:checked+.shop-options__text {\n  filter: $hover-effect;\n}\n\n.checkbox-none:checked+.shop-maker__img {\n  filter: $hover-effect;\n}\n\n.checkbox-none {\n  display: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.shop-maker__img {\n  height: 17px;\n}\n\n.checkbox_shop {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  margin: 0;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  background: no-repeat center/contain url(./assets/svg/checkbox-unchecked.svg);\n\n  &:hover {\n    filter: $hover-effect;\n  }\n\n  &:checked {\n    background: no-repeat center/contain url(./assets/svg/checkbox-checked.svg);\n  }\n}\n\n.shop-price,\n.shop-mpix {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.slider {\n  height: 4px;\n  margin: 0 8px;\n  border: none;\n  background: $text-secondary-color;\n\n  & .noUi-handle::before,\n  & .noUi-handle::after {\n    display: none;\n  }\n\n  & .noUi-connect {\n    background: $accent-color;\n  }\n\n  & .noUi-handle {\n    height: 16px;\n    width: 16px;\n    top: -6px;\n    right: -8px;\n    /* half the width */\n    border-radius: 8px;\n    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n  }\n\n  & .noUi-handle .noUi-touch-area {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    right: -10px;\n    bottom: -10px;\n    width: auto;\n    height: auto;\n    cursor: pointer;\n  }\n}\n\n.slider__labels {\n  display: flex;\n  justify-content: space-between;\n}\n\n.shop-price__labels-low,\n.shop-price__labels-high,\n.shop-mpix__labels-low,\n.shop-mpix__labels-high {\n  appearance: textfield;\n  text-align: center;\n  width: 60px;\n  height: 30px;\n  border: 1px solid #999;\n  color: #303030;\n  font-size: 13px;\n  line-height: 30px;\n  outline: none;\n  padding: 0 5px;\n  border-radius: 10px;\n}\n\n.shop-type,\n.shop-stab {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-stab__list {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n\n  @media screen and (max-width: 939px) {\n    align-items: flex-start;\n    gap: 10px;\n    flex-direction: column;\n  }\n}\n\n.shop-stab__option {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 18px;\n  transition: .3s;\n  cursor: pointer;\n\n  &:hover {\n    filter: $hover-effect;\n  }\n}\n\n.shop-stock {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn_stock {\n  order: 1;\n}\n\n.shop-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.shop-reset-filters,\n.shop-reset-storage {\n  width: 240px;\n  height: 30px;\n  align-self: center;\n  background: $accent-dark-color;\n  border-radius: 30px;\n  font-family: $font-main;\n  padding: 0 5px;\n  font-size: 16px;\n  color: $text-color;\n  border: 2px solid $text-secondary-color;\n  transition-duration: 0.4s;\n  cursor: pointer;\n\n  @media screen and (max-width: 939px) {\n    width: 95%;\n  }\n}\n\n.shop-reset-filters:hover,\n.shop-reset-storage:hover {\n  border: 2px solid $accent-color;\n}\n\n.shop-reset-filters:active,\n.shop-reset-storage:active {\n  background: $accent-color;\n}\n\n.shop-goods {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  gap: 12px;\n  justify-content: flex-start;\n  background: $primary-color;\n  border-radius: 20px;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  margin-bottom: 15px;\n\n  @media screen and (max-width: 939px) {\n    padding: 10px;\n    gap: 10px;\n  }\n}\n\n.modal-overlay {\n  display: none;\n  position: fixed;\n  z-index: 20;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.visible {\n  display: block;\n}\n\n.shop-popup {\n  background-color: #fefefe;\n  margin: 40vh auto;\n  padding: 15px;\n  border: 1px solid $accent-color;\n  border-radius: 20px;\n  width: 400px;\n  box-shadow: rgba(0, 0, 0, 0.3) 5px 10px 10px;\n  animation-name: appear;\n  animation-duration: 0.4s\n}\n\n@keyframes appear {\n  from {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n.shop-popup__button {\n  float: right;\n  width: 25px;\n  height: 25px;\n\n  &:hover,\n  &:focus {\n    filter: $hover-effect;\n    cursor: pointer;\n  }\n}\n\n.shop-popup__text {\n  text-align: center;\n  font-size: 24px;\n  margin: 40px 20px 25px;\n}",".shop-card {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 10px;\n  width: 250px;\n  height: 450px;\n  justify-content: flex-start;\n  background: $primary-color;\n  border-radius: 10px;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  transition: all 0.2s;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.09) 0px 2px 5px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0.00144px;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.15), 0px 0px 2px 0.00144px rgba(0, 0, 0, 0.12);\n  }\n}\n\n.shop-card__name {\n  font-weight: 700;\n  line-height: 26px;\n  height: 52px;\n  font-size: 21px;\n}\n\n.shop-card__price-mp {\n  display: flex;\n}\n\n.shop-card__block {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n}\n\n.text-big {\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 31px;\n}\n\n.text-aux {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: $text-secondary-color;\n}\n\n.shop-card__price-mpix,\n.shop-card__stock-cart {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.text-in-stock {\n  color: $accent-color;\n}\n\n.text-out-of-stock {\n  color: $text-secondary-color;\n}\n\n.text-no-cards {\n  align-self: center;\n  flex-grow: 1;\n  text-align: center;\n  font-size: 24px;\n}\n\n.shop-card__cart {\n  width: 119px;\n  height: 32px;\n  background: $text-color;\n  color: $primary-color;\n  border: $text-color 2px solid;\n  border-radius: 8px;\n  font-family: $font-main;\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.added {\n  background: $accent-color;\n  border: $accent-color 2px solid;\n  color: $accent-dark-color;\n  font-weight: 700;\n}"],"sourceRoot":""}]);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJDQUEyQyxtQ0FBbUMsY0FBYyxnQkFBZ0IsR0FBRyxTQUFTLGdIQUFnSCxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxN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LFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxhQUFhLFFBQVEsTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxZQUFZLGFBQWEsWUFBWSxVQUFVLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsWUFBWSxjQUFjLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxjQUFjLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxTQUFTLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFlBQVksU0FBUyxRQUFRLFVBQVUsV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFlBQVksU0FBUyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxXQUFXLFlBQVksWUFBWSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sWUFBWSxZQUFZ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QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDakNBO0FBQ0EsSUFBSSxLQUE0RDtBQUNoRSxJQUFJLENBQzJHO0FBQy9HLENBQUMsOEJBQThCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhD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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGdCQUFnQjtBQUNoRztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hHLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZ2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZ2xvYmFsLnNjc3M/MmMyNCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdHMvX2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdHMvX3Nob3AtY2FyZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdHMvX3Nob3AtZmlsdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3RzL19zaG9wLXNsaWRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy90cy9fc2hvcC1zb3J0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktdGFyZ2V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubm9VaS1jb25uZWN0LFxcbi5ub1VpLW9yaWdpbiB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxufVxcbi8qIE9mZnNldCBkaXJlY3Rpb25cXG4gKi9cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXFxuICogY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xcbiAgdG9wOiAtMTAwJTtcXG4gIHdpZHRoOiAwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLm5vVWktdG91Y2gtYXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi8qIFZlcnRpY2FsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtdmVydGljYWwge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEyMCU7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgbGVmdDogYXV0bztcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRTtBQUNGOztFQUVFLDJCQUEyQjtFQUMzQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsT0FBTztFQUNQLFdBQVc7QUFDYjtBQUNBOztFQUVFO0FBQ0Y7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7O0VBRUUsa0NBQWtDO0VBQ2xDLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7O0VBRUU7QUFDRjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHdEQUF3RDtBQUMxRDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFO0FBQ0Y7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRFQUE0RTtBQUM5RTtBQUNBO0VBQ0UseUVBQXlFO0FBQzNFO0FBQ0E7RUFDRTtBQUNGOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7OztFQUdFLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFO0FBQ0Y7O0VBRUUsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBOztFQUVFO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTs7RUFFRTtBQUNGO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRTtBQUNGO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7QUFDYjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLCtCQUErQjtBQUNqQztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0VBRUU7QUFDRjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLFVBQVU7QUFDWjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1IsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktdGFyZ2V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubm9VaS1jb25uZWN0LFxcbi5ub1VpLW9yaWdpbiB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxufVxcbi8qIE9mZnNldCBkaXJlY3Rpb25cXG4gKi9cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXFxuICogY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xcbiAgdG9wOiAtMTAwJTtcXG4gIHdpZHRoOiAwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLm5vVWktdG91Y2gtYXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi8qIFZlcnRpY2FsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtdmVydGljYWwge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEyMCU7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgbGVmdDogYXV0bztcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vYXNzZXRzL2JnLTEuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy9zZWFyY2guc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy9zZWFyY2gtY2xlYXIuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2NhcnQtZHNsci5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL2NoZWNrYm94LXVuY2hlY2tlZC5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL2NoZWNrYm94LWNoZWNrZWQuc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGVncmV5YStTYW5zOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXFxcInBudW1cXFwiIG9uLCBcXFwibG51bVxcXCIgb247XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjMTkxOTE5O1xcbiAgYmFja2dyb3VuZDogZml4ZWQgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCxcXG51bCxcXG5vbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4uaGVhZGVyX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMTcyMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDYwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDk2JTtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgfVxcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGdhcDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbi5oZWFkZXJfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyX19saW5rX3NwYW46aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuXFxuLmhlYWRlcl9faWNvbl9tYWluIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcbiAgLmhlYWRlcl9faWNvbl9tYWluIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmhlYWRlcl9faWNvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaG9wLW9wdGlvbnNfX3NvcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLnNob3Atb3B0aW9uc19fc29ydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1vcHRpb25zX190ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxuLnNob3Atc29ydF9fc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzdmN2Y3ZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLnNob3Atc29ydF9fc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIH1cXG59XFxuXFxuLnNob3Atc29ydF9fb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkY0RjU7XFxufVxcblxcbi5zZWFyY2gtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwIDQ1cHggMCAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDIwcHggY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG59XFxuXFxuLndpdGgtY2xlYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLnNlYXJjaC1jbGVhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0OHB4IDYwcHg7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmNhcnRfX3RleHQge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmN2Y3ZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAtMjZweDtcXG59XFxuXFxuLmhhcy1pdGVtcyB7XFxuICBjb2xvcjogI0YyRjRGNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuZm9vdGVyX19jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyX190ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5mb290ZXJfX3RleHQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcblxcbi5mb290ZXJfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLmZvb3Rlcl9fbGluayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlcl9fbGluazpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uZm9vdGVyX19pbWFnZS1SUyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5mb290ZXJfX2ltYWdlLUdIIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNob3AtcGFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNob3AtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTcyMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDE1cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLnNob3AtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLWNvbnRhaW5lciB7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLnNob3AtbGVmdC1zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3AtbGVmdC1zaWRlIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMTBweCk7XFxuICBtaW4taGVpZ2h0OiA2MzBweDtcXG4gIG1heC1oZWlnaHQ6IDc3MHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3Atb3B0aW9ucyB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1tYWtlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3AtbWFrZXJfX2xpc3QsXFxuLnNob3AtdHlwZV9fbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMTBweDtcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1tYWtlcl9fbGlzdCxcXG4uc2hvcC10eXBlX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcblxcbi5zaG9wLW1ha2VyX19zZWxlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaG9wLW1ha2VyX19vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNob3AtbWFrZXJfX29wdGlvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uY2hlY2tib3hfc2hvcDpjaGVja2VkICsgLnNob3AtbWFrZXJfX29wdGlvbixcXG4uY2hlY2tib3hfc2hvcDpjaGVja2VkICsgLnNob3Atb3B0aW9uc19fdGV4dCB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uY2hlY2tib3gtbm9uZTpjaGVja2VkICsgLnNob3AtbWFrZXJfX2ltZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uY2hlY2tib3gtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnNob3AtbWFrZXJfX2ltZyB7XFxuICBoZWlnaHQ6IDE3cHg7XFxufVxcblxcbi5jaGVja2JveF9zaG9wIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW4gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuLmNoZWNrYm94X3Nob3A6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuLmNoZWNrYm94X3Nob3A6Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW4gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG59XFxuXFxuLnNob3AtcHJpY2UsXFxuLnNob3AtbXBpeCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjN2Y3ZjdmO1xcbn1cXG4uc2xpZGVyIC5ub1VpLWhhbmRsZTo6YmVmb3JlLCAuc2xpZGVyIC5ub1VpLWhhbmRsZTo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNsaWRlciAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNjMDA7XFxufVxcbi5zbGlkZXIgLm5vVWktaGFuZGxlIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgdG9wOiAtNnB4O1xcbiAgcmlnaHQ6IC04cHg7XFxuICAvKiBoYWxmIHRoZSB3aWR0aCAqL1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxufVxcbi5zbGlkZXIgLm5vVWktaGFuZGxlIC5ub1VpLXRvdWNoLWFyZWEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTBweDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYm90dG9tOiAtMTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGVyX19sYWJlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNob3AtcHJpY2VfX2xhYmVscy1sb3csXFxuLnNob3AtcHJpY2VfX2xhYmVscy1oaWdoLFxcbi5zaG9wLW1waXhfX2xhYmVscy1sb3csXFxuLnNob3AtbXBpeF9fbGFiZWxzLWhpZ2gge1xcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgY29sb3I6ICMzMDMwMzA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zaG9wLXR5cGUsXFxuLnNob3Atc3RhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3Atc3RhYl9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLXN0YWJfX2xpc3Qge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1zdGFiX19vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaG9wLXN0YWJfX29wdGlvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uc2hvcC1zdG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmJ0bl9zdG9jayB7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuLnNob3AtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3AtcmVzZXQtZmlsdGVycyxcXG4uc2hvcC1yZXNldC1zdG9yYWdlIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNGMkY0RjU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMxOTE5MTk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjN2Y3ZjdmO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLXJlc2V0LWZpbHRlcnMsXFxuLnNob3AtcmVzZXQtc3RvcmFnZSB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbi5zaG9wLXJlc2V0LWZpbHRlcnM6aG92ZXIsXFxuLnNob3AtcmVzZXQtc3RvcmFnZTpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzAwO1xcbn1cXG5cXG4uc2hvcC1yZXNldC1maWx0ZXJzOmFjdGl2ZSxcXG4uc2hvcC1yZXNldC1zdG9yYWdlOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjYzAwO1xcbn1cXG5cXG4uc2hvcC1nb29kcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTJweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLWdvb2RzIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2hvcC1wb3B1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiA0MHZoIGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgNXB4IDEwcHggMTBweDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uc2hvcC1wb3B1cF9fYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4uc2hvcC1wb3B1cF9fYnV0dG9uOmhvdmVyLCAuc2hvcC1wb3B1cF9fYnV0dG9uOmZvY3VzIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSg1ODk0JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTEzJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaG9wLXBvcHVwX190ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbjogNDBweCAyMHB4IDI1cHg7XFxufVxcblxcbi5zaG9wLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2hvcC1jYXJkOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDBweCAycHggMC4wMDE0NHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcblxcbi5zaG9wLWNhcmRfX25hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgaGVpZ2h0OiA1MnB4O1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG5cXG4uc2hvcC1jYXJkX19wcmljZS1tcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hvcC1jYXJkX19ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50ZXh0LWJpZyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XFxufVxcblxcbi50ZXh0LWF1eCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogIzdmN2Y3ZjtcXG59XFxuXFxuLnNob3AtY2FyZF9fcHJpY2UtbXBpeCxcXG4uc2hvcC1jYXJkX19zdG9jay1jYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50ZXh0LWluLXN0b2NrIHtcXG4gIGNvbG9yOiAjYzAwO1xcbn1cXG5cXG4udGV4dC1vdXQtb2Ytc3RvY2sge1xcbiAgY29sb3I6ICM3ZjdmN2Y7XFxufVxcblxcbi50ZXh0LW5vLWNhcmRzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnNob3AtY2FyZF9fY2FydCB7XFxuICB3aWR0aDogMTE5cHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlcjogIzE5MTkxOSAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uYWRkZWQge1xcbiAgYmFja2dyb3VuZDogI2MwMDtcXG4gIGJvcmRlcjogI2MwMCAycHggc29saWQ7XFxuICBjb2xvcjogI0YyRjRGNTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Nhc3MvX2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Nhc3MvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zYXNzL19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc2Fzcy9fc2hvcC1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Nhc3MvX3Nob3AtY2FyZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0Usc0JBQUE7QUNSRjs7QURXQTtFQUNFLHdDQVJVO0VBU1YsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FoQlc7RUFpQlgsZ0ZBQUE7QUNSRjs7QURZQTtFQUNFLGFBQUE7QUNURjs7QURZQTs7Ozs7O0VBTUUsU0FBQTtFQUNBLFVBQUE7QUNURjs7QURZQTtFQUNFLHFCQUFBO0FDVEY7O0FEWUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNURjs7QURZQTtFQUNFLGFBQUE7QUNURjs7QUN6Q0E7RUFFRSx3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a0I7RUt5RmxCLGdCQUFBO0FKMG5CRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGVncmV5YStTYW5zOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG4vLyAkcHJpbWFyeS1jb2xvcjogI2ZmZjtcXG4kcHJpbWFyeS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcbiRhY2NlbnQtY29sb3I6ICNjMDA7XFxuJGFjY2VudC1kYXJrLWNvbG9yOiAjRjJGNEY1O1xcbiR0ZXh0LWNvbG9yOiAjMTkxOTE5O1xcbiR0ZXh0LXNlY29uZGFyeS1jb2xvcjogIzdmN2Y3ZjtcXG4kZm9udC1oZWFkZXI6ICdBbGVncmV5YSBTYW5zJywgc2Fucy1zZXJpZjtcXG4kZm9udC1tYWluOiAnQWxlZ3JleWEgU2FucycsIHNhbnMtc2VyaWY7XFxuJGhvdmVyLWVmZmVjdDogaW52ZXJ0KDEwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSg1ODk0JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTEzJSk7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAncG51bScgb24sICdsbnVtJyBvbjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgYmFja2dyb3VuZDogZml4ZWQgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciB1cmwoXFxcIi4vYXNzZXRzL2JnLTEuanBnXFxcIik7XFxuICAvLyBiYWNrZ3JvdW5kOiAkYWNjZW50LWRhcmstY29sb3I7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAsXFxudWwsXFxub2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsZWdyZXlhK1NhbnM6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgJ25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyc7XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJwbnVtXFxcIiBvbiwgXFxcImxudW1cXFwiIG9uO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJhY2tncm91bmQ6IGZpeGVkIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKFxcXCIuL2Fzc2V0cy9iZy0xLmpwZ1xcXCIpO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCxcXG51bCxcXG5vbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4uaGVhZGVyX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMTcyMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDYwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDk2JTtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgfVxcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGdhcDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbi5oZWFkZXJfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyX19saW5rX3NwYW46aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDU4OTQlKSBodWUtcm90YXRlKDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMTMlKTtcXG59XFxuXFxuLmhlYWRlcl9faWNvbl9tYWluIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcbiAgLmhlYWRlcl9faWNvbl9tYWluIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmhlYWRlcl9faWNvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaG9wLW9wdGlvbnNfX3NvcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLnNob3Atb3B0aW9uc19fc29ydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1vcHRpb25zX190ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxuLnNob3Atc29ydF9fc2VsZWN0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzdmN2Y3ZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgLnNob3Atc29ydF9fc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIH1cXG59XFxuXFxuLnNob3Atc29ydF9fb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkY0RjU7XFxufVxcblxcbi5zZWFyY2gtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwIDQ1cHggMCAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zZWFyY2guc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMjBweCBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbn1cXG5cXG4ud2l0aC1jbGVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zZWFyY2gtY2xlYXIuc3ZnXFxcIik7XFxufVxcblxcbi5zZWFyY2gtY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9pY29ucy9jYXJ0LWRzbHIucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQ4cHggNjBweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uY2FydF9fdGV4dCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IC0yNnB4O1xcbn1cXG5cXG4uaGFzLWl0ZW1zIHtcXG4gIGNvbG9yOiAjRjJGNEY1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxlZ3JleWEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uZm9vdGVyX19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5mb290ZXJfX2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5mb290ZXJfX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLmZvb3Rlcl9fdGV4dCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlcl9fbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuZm9vdGVyX19saW5rIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyX19saW5rOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSg1ODk0JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTEzJSk7XFxufVxcblxcbi5mb290ZXJfX2ltYWdlLVJTIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmZvb3Rlcl9faW1hZ2UtR0gge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2hvcC1wYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hvcC1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxNzIwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogMTVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAuc2hvcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogOTglO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgLnNob3AtY29udGFpbmVyIHtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1sZWZ0LXNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzUwcHg7XFxuICBnYXA6IDE1cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1sZWZ0LXNpZGUge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxuICB9XFxufVxcblxcbi5zaG9wLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDYzMHB4O1xcbiAgbWF4LWhlaWdodDogNzcwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAuc2hvcC1vcHRpb25zIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICB9XFxufVxcblxcbi5zaG9wLW1ha2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hvcC1tYWtlcl9fbGlzdCxcXG4uc2hvcC10eXBlX19saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByb3ctZ2FwOiAxMHB4O1xcbiAgY29sdW1uLWdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLW1ha2VyX19saXN0LFxcbi5zaG9wLXR5cGVfX2xpc3Qge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuXFxuLnNob3AtbWFrZXJfX3NlbGVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3AtbWFrZXJfX29wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2hvcC1tYWtlcl9fb3B0aW9uOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSg1ODk0JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTEzJSk7XFxufVxcblxcbi5jaGVja2JveF9zaG9wOmNoZWNrZWQgKyAuc2hvcC1tYWtlcl9fb3B0aW9uLFxcbi5jaGVja2JveF9zaG9wOmNoZWNrZWQgKyAuc2hvcC1vcHRpb25zX190ZXh0IHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSg1ODk0JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTEzJSk7XFxufVxcblxcbi5jaGVja2JveC1ub25lOmNoZWNrZWQgKyAuc2hvcC1tYWtlcl9faW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSg1ODk0JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTEzJSk7XFxufVxcblxcbi5jaGVja2JveC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc2hvcC1tYWtlcl9faW1nIHtcXG4gIGhlaWdodDogMTdweDtcXG59XFxuXFxuLmNoZWNrYm94X3Nob3Age1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoLi9hc3NldHMvc3ZnL2NoZWNrYm94LXVuY2hlY2tlZC5zdmcpO1xcbn1cXG4uY2hlY2tib3hfc2hvcDpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG4uY2hlY2tib3hfc2hvcDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoLi9hc3NldHMvc3ZnL2NoZWNrYm94LWNoZWNrZWQuc3ZnKTtcXG59XFxuXFxuLnNob3AtcHJpY2UsXFxuLnNob3AtbXBpeCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjN2Y3ZjdmO1xcbn1cXG4uc2xpZGVyIC5ub1VpLWhhbmRsZTo6YmVmb3JlLCAuc2xpZGVyIC5ub1VpLWhhbmRsZTo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNsaWRlciAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNjMDA7XFxufVxcbi5zbGlkZXIgLm5vVWktaGFuZGxlIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgdG9wOiAtNnB4O1xcbiAgcmlnaHQ6IC04cHg7XFxuICAvKiBoYWxmIHRoZSB3aWR0aCAqL1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxufVxcbi5zbGlkZXIgLm5vVWktaGFuZGxlIC5ub1VpLXRvdWNoLWFyZWEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTBweDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYm90dG9tOiAtMTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGVyX19sYWJlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNob3AtcHJpY2VfX2xhYmVscy1sb3csXFxuLnNob3AtcHJpY2VfX2xhYmVscy1oaWdoLFxcbi5zaG9wLW1waXhfX2xhYmVscy1sb3csXFxuLnNob3AtbXBpeF9fbGFiZWxzLWhpZ2gge1xcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgY29sb3I6ICMzMDMwMzA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zaG9wLXR5cGUsXFxuLnNob3Atc3RhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3Atc3RhYl9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLXN0YWJfX2xpc3Qge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1zdGFiX19vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaG9wLXN0YWJfX29wdGlvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNTg5NCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uc2hvcC1zdG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmJ0bl9zdG9jayB7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuLnNob3AtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3AtcmVzZXQtZmlsdGVycyxcXG4uc2hvcC1yZXNldC1zdG9yYWdlIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNGMkY0RjU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMxOTE5MTk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjN2Y3ZjdmO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLXJlc2V0LWZpbHRlcnMsXFxuLnNob3AtcmVzZXQtc3RvcmFnZSB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbi5zaG9wLXJlc2V0LWZpbHRlcnM6aG92ZXIsXFxuLnNob3AtcmVzZXQtc3RvcmFnZTpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzAwO1xcbn1cXG5cXG4uc2hvcC1yZXNldC1maWx0ZXJzOmFjdGl2ZSxcXG4uc2hvcC1yZXNldC1zdG9yYWdlOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjYzAwO1xcbn1cXG5cXG4uc2hvcC1nb29kcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTJweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gIC5zaG9wLWdvb2RzIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2hvcC1wb3B1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiA0MHZoIGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgNXB4IDEwcHggMTBweDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uc2hvcC1wb3B1cF9fYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4uc2hvcC1wb3B1cF9fYnV0dG9uOmhvdmVyLCAuc2hvcC1wb3B1cF9fYnV0dG9uOmZvY3VzIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSg1ODk0JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTEzJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaG9wLXBvcHVwX190ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbjogNDBweCAyMHB4IDI1cHg7XFxufVxcblxcbi5zaG9wLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2hvcC1jYXJkOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDBweCAycHggMC4wMDE0NHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcblxcbi5zaG9wLWNhcmRfX25hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgaGVpZ2h0OiA1MnB4O1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG5cXG4uc2hvcC1jYXJkX19wcmljZS1tcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hvcC1jYXJkX19ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50ZXh0LWJpZyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XFxufVxcblxcbi50ZXh0LWF1eCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogIzdmN2Y3ZjtcXG59XFxuXFxuLnNob3AtY2FyZF9fcHJpY2UtbXBpeCxcXG4uc2hvcC1jYXJkX19zdG9jay1jYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50ZXh0LWluLXN0b2NrIHtcXG4gIGNvbG9yOiAjYzAwO1xcbn1cXG5cXG4udGV4dC1vdXQtb2Ytc3RvY2sge1xcbiAgY29sb3I6ICM3ZjdmN2Y7XFxufVxcblxcbi50ZXh0LW5vLWNhcmRzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnNob3AtY2FyZF9fY2FydCB7XFxuICB3aWR0aDogMTE5cHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlcjogIzE5MTkxOSAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uYWRkZWQge1xcbiAgYmFja2dyb3VuZDogI2MwMDtcXG4gIGJvcmRlcjogI2MwMCAycHggc29saWQ7XFxuICBjb2xvcjogI0YyRjRGNTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiLFwiLmhlYWRlciB7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWRhcmstY29sb3I7XFxuICBmb250LWZhbWlseTogJGZvbnQtaGVhZGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiAxNzIwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogNjBweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xcbiAgICB3aWR0aDogOTYlO1xcbiAgICBnYXA6IDI1cHg7XFxuICB9XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbi5oZWFkZXJfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAuM3M7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5oZWFkZXJfX2xpbmtfc3Bhbjpob3ZlciB7XFxuICBmaWx0ZXI6ICRob3Zlci1lZmZlY3Q7XFxufVxcblxcbi5oZWFkZXJfX2ljb25fbWFpbiB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogYXV0bztcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5oZWFkZXJfX2ljb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2hvcC1vcHRpb25zX19zb3J0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1vcHRpb25zX190ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1oZWFkZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogJHRleHQtY29sb3I7XFxufVxcblxcbi5zaG9wLXNvcnRfX3NlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICRmb250LW1haW47XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnktY29sb3I7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICB9XFxufVxcblxcbi5zaG9wLXNvcnRfX29wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWRhcmstY29sb3I7XFxufVxcblxcbi5zZWFyY2gtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICRmb250LWhlYWRlcjtcXG4gIHBhZGRpbmc6IDAgNDVweCAwIDIwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zZWFyY2guc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMjBweCBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbn1cXG5cXG4ud2l0aC1jbGVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zZWFyY2gtY2xlYXIuc3ZnXFxcIik7XFxufVxcblxcbi5zZWFyY2gtY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9pY29ucy9jYXJ0LWRzbHIucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQ4cHggNjBweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uY2FydF9fdGV4dCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LXNlY29uZGFyeS1jb2xvcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAtMjZweDtcXG59XFxuXFxuLmhhcy1pdGVtcyB7XFxuICBjb2xvcjogJGFjY2VudC1kYXJrLWNvbG9yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcXG59XCIsXCIuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZm9udC1mYW1pbHk6ICRmb250LWhlYWRlcjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5mb290ZXJfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyX190ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlcl9fbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IC4zcztcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlcl9fbGluazpob3ZlciB7XFxuICBmaWx0ZXI6ICRob3Zlci1lZmZlY3Q7XFxufVxcblxcbi5mb290ZXJfX2ltYWdlLVJTIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmZvb3Rlcl9faW1hZ2UtR0gge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cIixcIkBpbXBvcnQgJ25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyc7XFxuXFxuLnNob3AtcGFnZSB7XFxuICAvLyBiYWNrZ3JvdW5kOiAkYWNjZW50LWRhcmstY29sb3I7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNob3AtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTcyMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDE1cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLnNob3AtbGVmdC1zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZ2FwOiAxNXB4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAycHggNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAwcHggMnB4IDAuMDAxNDRweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDYzMHB4O1xcbiAgbWF4LWhlaWdodDogNzcwcHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzlweCkge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnNob3AtbWFrZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaG9wLW1ha2VyX19saXN0LFxcbi5zaG9wLXR5cGVfX2xpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDEwcHg7XFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcblxcbi5zaG9wLW1ha2VyX19zZWxlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaG9wLW1ha2VyX19vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGZpbHRlcjogJGhvdmVyLWVmZmVjdDtcXG4gIH1cXG59XFxuXFxuLmNoZWNrYm94X3Nob3A6Y2hlY2tlZCsuc2hvcC1tYWtlcl9fb3B0aW9uLFxcbi5jaGVja2JveF9zaG9wOmNoZWNrZWQrLnNob3Atb3B0aW9uc19fdGV4dCB7XFxuICBmaWx0ZXI6ICRob3Zlci1lZmZlY3Q7XFxufVxcblxcbi5jaGVja2JveC1ub25lOmNoZWNrZWQrLnNob3AtbWFrZXJfX2ltZyB7XFxuICBmaWx0ZXI6ICRob3Zlci1lZmZlY3Q7XFxufVxcblxcbi5jaGVja2JveC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc2hvcC1tYWtlcl9faW1nIHtcXG4gIGhlaWdodDogMTdweDtcXG59XFxuXFxuLmNoZWNrYm94X3Nob3Age1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoLi9hc3NldHMvc3ZnL2NoZWNrYm94LXVuY2hlY2tlZC5zdmcpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGZpbHRlcjogJGhvdmVyLWVmZmVjdDtcXG4gIH1cXG5cXG4gICY6Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoLi9hc3NldHMvc3ZnL2NoZWNrYm94LWNoZWNrZWQuc3ZnKTtcXG4gIH1cXG59XFxuXFxuLnNob3AtcHJpY2UsXFxuLnNob3AtbXBpeCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAkdGV4dC1zZWNvbmRhcnktY29sb3I7XFxuXFxuICAmIC5ub1VpLWhhbmRsZTo6YmVmb3JlLFxcbiAgJiAubm9VaS1oYW5kbGU6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICYgLm5vVWktY29ubmVjdCB7XFxuICAgIGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XFxuICB9XFxuXFxuICAmIC5ub1VpLWhhbmRsZSB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIHRvcDogLTZweDtcXG4gICAgcmlnaHQ6IC04cHg7XFxuICAgIC8qIGhhbGYgdGhlIHdpZHRoICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICB9XFxuXFxuICAmIC5ub1VpLWhhbmRsZSAubm9VaS10b3VjaC1hcmVhIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBib3R0b206IC0xMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi5zbGlkZXJfX2xhYmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2hvcC1wcmljZV9fbGFiZWxzLWxvdyxcXG4uc2hvcC1wcmljZV9fbGFiZWxzLWhpZ2gsXFxuLnNob3AtbXBpeF9fbGFiZWxzLWxvdyxcXG4uc2hvcC1tcGl4X19sYWJlbHMtaGlnaCB7XFxuICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICBjb2xvcjogIzMwMzAzMDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNob3AtdHlwZSxcXG4uc2hvcC1zdGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hvcC1zdGFiX19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLnNob3Atc3RhYl9fb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0cmFuc2l0aW9uOiAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgZmlsdGVyOiAkaG92ZXItZWZmZWN0O1xcbiAgfVxcbn1cXG5cXG4uc2hvcC1zdG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmJ0bl9zdG9jayB7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuLnNob3AtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3AtcmVzZXQtZmlsdGVycyxcXG4uc2hvcC1yZXNldC1zdG9yYWdlIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICRhY2NlbnQtZGFyay1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgYm9yZGVyOiAycHggc29saWQgJHRleHQtc2Vjb25kYXJ5LWNvbG9yO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzOXB4KSB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbi5zaG9wLXJlc2V0LWZpbHRlcnM6aG92ZXIsXFxuLnNob3AtcmVzZXQtc3RvcmFnZTpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAkYWNjZW50LWNvbG9yO1xcbn1cXG5cXG4uc2hvcC1yZXNldC1maWx0ZXJzOmFjdGl2ZSxcXG4uc2hvcC1yZXNldC1zdG9yYWdlOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAkYWNjZW50LWNvbG9yO1xcbn1cXG5cXG4uc2hvcC1nb29kcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTJweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMnB4IDVweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMHB4IDJweCAwLjAwMTQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM5cHgpIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2hvcC1wb3B1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiA0MHZoIGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudC1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgNXB4IDEwcHggMTBweDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHNcXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDBcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMVxcbiAgfVxcbn1cXG5cXG4uc2hvcC1wb3B1cF9fYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcblxcbiAgJjpob3ZlcixcXG4gICY6Zm9jdXMge1xcbiAgICBmaWx0ZXI6ICRob3Zlci1lZmZlY3Q7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLnNob3AtcG9wdXBfX3RleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luOiA0MHB4IDIwcHggMjVweDtcXG59XCIsXCIuc2hvcC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDJweCA1cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDBweCAycHggMC4wMDE0NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDBweCAycHggMC4wMDE0NHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICB9XFxufVxcblxcbi5zaG9wLWNhcmRfX25hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgaGVpZ2h0OiA1MnB4O1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG5cXG4uc2hvcC1jYXJkX19wcmljZS1tcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hvcC1jYXJkX19ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50ZXh0LWJpZyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XFxufVxcblxcbi50ZXh0LWF1eCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4uc2hvcC1jYXJkX19wcmljZS1tcGl4LFxcbi5zaG9wLWNhcmRfX3N0b2NrLWNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRleHQtaW4tc3RvY2sge1xcbiAgY29sb3I6ICRhY2NlbnQtY29sb3I7XFxufVxcblxcbi50ZXh0LW91dC1vZi1zdG9jayB7XFxuICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4udGV4dC1uby1jYXJkcyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5zaG9wLWNhcmRfX2NhcnQge1xcbiAgd2lkdGg6IDExOXB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZDogJHRleHQtY29sb3I7XFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBib3JkZXI6ICR0ZXh0LWNvbG9yIDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uYWRkZWQge1xcbiAgYmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjtcXG4gIGJvcmRlcjogJGFjY2VudC1jb2xvciAycHggc29saWQ7XFxuICBjb2xvcjogJGFjY2VudC1kYXJrLWNvbG9yO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5ub1VpU2xpZGVyID0ge30pKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgICBleHBvcnRzLlBpcHNNb2RlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc01vZGUpIHtcbiAgICAgICAgUGlwc01vZGVbXCJSYW5nZVwiXSA9IFwicmFuZ2VcIjtcbiAgICAgICAgUGlwc01vZGVbXCJTdGVwc1wiXSA9IFwic3RlcHNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJQb3NpdGlvbnNcIl0gPSBcInBvc2l0aW9uc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIkNvdW50XCJdID0gXCJjb3VudFwiO1xuICAgICAgICBQaXBzTW9kZVtcIlZhbHVlc1wiXSA9IFwidmFsdWVzXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzTW9kZSB8fCAoZXhwb3J0cy5QaXBzTW9kZSA9IHt9KSk7XG4gICAgZXhwb3J0cy5QaXBzVHlwZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNUeXBlKSB7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9uZVwiXSA9IC0xXSA9IFwiTm9uZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vVmFsdWVcIl0gPSAwXSA9IFwiTm9WYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIkxhcmdlVmFsdWVcIl0gPSAxXSA9IFwiTGFyZ2VWYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIlNtYWxsVmFsdWVcIl0gPSAyXSA9IFwiU21hbGxWYWx1ZVwiO1xuICAgIH0pKGV4cG9ydHMuUGlwc1R5cGUgfHwgKGV4cG9ydHMuUGlwc1R5cGUgPSB7fSkpO1xuICAgIC8vcmVnaW9uIEhlbHBlciBNZXRob2RzXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICByZXR1cm4gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpICYmIHR5cGVvZiBlbnRyeS5mcm9tID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIC8vIHBhcnRpYWwgZm9ybWF0dGVycyBvbmx5IG5lZWQgYSB0byBmdW5jdGlvbiBhbmQgbm90IGEgZnJvbSBmdW5jdGlvblxuICAgICAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRyeS50byA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1NldCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQmluZGFibGUgdmVyc2lvblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBSZW1vdmVzIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheS5cbiAgICBmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzW2FdID8gKHRoaXNbYV0gPSB0cnVlKSA6IGZhbHNlO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8vIFJvdW5kIGEgdmFsdWUgdG8gdGhlIGNsb3Nlc3QgJ3RvJy5cbiAgICBmdW5jdGlvbiBjbG9zZXN0KHZhbHVlLCB0bykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRvKSAqIHRvO1xuICAgIH1cbiAgICAvLyBDdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuICAgIGZ1bmN0aW9uIG9mZnNldChlbGVtLCBvcmllbnRhdGlvbikge1xuICAgICAgICB2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHBhZ2VPZmZzZXQgPSBnZXRQYWdlT2Zmc2V0KGRvYyk7XG4gICAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjb250YWlucyBsZWZ0IHNjcm9sbCBpbiBDaHJvbWUgb24gQW5kcm9pZC5cbiAgICAgICAgLy8gSSBoYXZlbid0IGZvdW5kIGEgZmVhdHVyZSBkZXRlY3Rpb24gdGhhdCBwcm92ZXMgdGhpcy4gV29yc3QgY2FzZVxuICAgICAgICAvLyBzY2VuYXJpbyBvbiBtaXMtbWF0Y2g6IHRoZSAndGFwJyBmZWF0dXJlIG9uIGhvcml6b250YWwgc2xpZGVycyBicmVha3MuXG4gICAgICAgIGlmICgvd2Via2l0LipDaHJvbWUuKk1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHBhZ2VPZmZzZXQueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uID8gcmVjdC50b3AgKyBwYWdlT2Zmc2V0LnkgLSBkb2NFbGVtLmNsaWVudFRvcCA6IHJlY3QubGVmdCArIHBhZ2VPZmZzZXQueCAtIGRvY0VsZW0uY2xpZW50TGVmdDtcbiAgICB9XG4gICAgLy8gQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudW1lcmljYWwuXG4gICAgZnVuY3Rpb24gaXNOdW1lcmljKGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmICFpc05hTihhKSAmJiBpc0Zpbml0ZShhKTtcbiAgICB9XG4gICAgLy8gU2V0cyBhIGNsYXNzIGFuZCByZW1vdmVzIGl0IGFmdGVyIFtkdXJhdGlvbl0gbXMuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3NGb3IoZWxlbWVudCwgY2xhc3NOYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBMaW1pdHMgYSB2YWx1ZSB0byAwIC0gMTAwXG4gICAgZnVuY3Rpb24gbGltaXQoYSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oYSwgMTAwKSwgMCk7XG4gICAgfVxuICAgIC8vIFdyYXBzIGEgdmFyaWFibGUgYXMgYW4gYXJyYXksIGlmIGl0IGlzbid0IG9uZSB5ZXQuXG4gICAgLy8gTm90ZSB0aGF0IGFuIGlucHV0IGFycmF5IGlzIHJldHVybmVkIGJ5IHJlZmVyZW5jZSFcbiAgICBmdW5jdGlvbiBhc0FycmF5KGEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgPyBhIDogW2FdO1xuICAgIH1cbiAgICAvLyBDb3VudHMgZGVjaW1hbHNcbiAgICBmdW5jdGlvbiBjb3VudERlY2ltYWxzKG51bVN0cikge1xuICAgICAgICBudW1TdHIgPSBTdHJpbmcobnVtU3RyKTtcbiAgICAgICAgdmFyIHBpZWNlcyA9IG51bVN0ci5zcGxpdChcIi5cIik7XG4gICAgICAgIHJldHVybiBwaWVjZXMubGVuZ3RoID4gMSA/IHBpZWNlc1sxXS5sZW5ndGggOiAwO1xuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jYWRkX2NsYXNzXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jcmVtb3ZlX2NsYXNzXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcYnwkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L2F0dHJpYnV0ZXMvYWRkaW5nLXJlbW92aW5nLWFuZC10ZXN0aW5nLWZvci1jbGFzc2VzLTkvXG4gICAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0ID8gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOiBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGNsYXNzTmFtZSArIFwiXFxcXGJcIikudGVzdChlbC5jbGFzc05hbWUpO1xuICAgIH1cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFkjTm90ZXNcbiAgICBmdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KGRvYykge1xuICAgICAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2MuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCI7XG4gICAgICAgIHZhciB4ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICB2YXIgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gd2UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgY29uc3RhbnRzIGluc3RlYWRcbiAgICAvLyBvZiBhY2Nlc3Npbmcgd2luZG93LiogYXMgc29vbiBhcyB0aGUgbW9kdWxlIG5lZWRzIGl0XG4gICAgLy8gc28gdGhhdCB3ZSBkbyBub3QgY29tcHV0ZSBhbnl0aGluZyBpZiBub3QgbmVlZGVkXG4gICAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBldmVudHMgdG8gYmluZC4gSUUxMSBpbXBsZW1lbnRzIHBvaW50ZXJFdmVudHMgd2l0aG91dFxuICAgICAgICAvLyBhIHByZWZpeCwgd2hpY2ggYnJlYWtzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgSUUxMCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcInBvaW50ZXJkb3duXCIsXG4gICAgICAgICAgICAgICAgbW92ZTogXCJwb2ludGVybW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJwb2ludGVydXBcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIk1TUG9pbnRlckRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJNU1BvaW50ZXJNb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJNU1BvaW50ZXJVcFwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJtb3VzZW1vdmUgdG91Y2htb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJtb3VzZXVwIHRvdWNoZW5kXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbiAgICAvLyBJc3N1ZSAjNzg1XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNQYXNzaXZlKCkge1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMgJiYgQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBSYW5nZSBDYWxjdWxhdGlvblxuICAgIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiBhIHN1Yi1yYW5nZSBpbiByZWxhdGlvbiB0byBhIGZ1bGwgcmFuZ2UuXG4gICAgZnVuY3Rpb24gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpIHtcbiAgICAgICAgcmV0dXJuIDEwMCAvIChwYiAtIHBhKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEhvdyBtYW55IHBlcmNlbnQgaXMgdGhpcyB2YWx1ZSBvZiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGZyb21QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSwgc3RhcnRSYW5nZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKSAvIChyYW5nZVtzdGFydFJhbmdlICsgMV0gLSByYW5nZVtzdGFydFJhbmdlXSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBXaGVyZSBpcyB0aGlzIHZhbHVlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gdG9QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHJhbmdlWzBdIDwgMCA/IHZhbHVlICsgTWF0aC5hYnMocmFuZ2VbMF0pIDogdmFsdWUgLSByYW5nZVswXSwgMCk7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSG93IG11Y2ggaXMgdGhpcyBwZXJjZW50YWdlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSAvIDEwMCArIHJhbmdlWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRKKHZhbHVlLCBhcnIpIHtcbiAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICB3aGlsZSAodmFsdWUgPj0gYXJyW2pdKSB7XG4gICAgICAgICAgICBqICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGo7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBJbnB1dCBhIHZhbHVlLCBmaW5kIHdoZXJlLCBvbiBhIHNjYWxlIG9mIDAtMTAwLCBpdCBhcHBsaWVzLlxuICAgIGZ1bmN0aW9uIHRvU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IHhWYWwuc2xpY2UoLTEpWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFZhbCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIHBhICsgdG9QZXJjZW50YWdlKFt2YSwgdmJdLCB2YWx1ZSkgLyBzdWJSYW5nZVJhdGlvKHBhLCBwYik7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSW5wdXQgYSBwZXJjZW50YWdlLCBmaW5kIHdoZXJlIGl0IGlzIG9uIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG4gICAgZnVuY3Rpb24gZnJvbVN0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIHJhbmdlIGdyb3VwIHRoYXQgZml0cyAxMDBcbiAgICAgICAgaWYgKHZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHhWYWwuc2xpY2UoLTEpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIGlzUGVyY2VudGFnZShbdmEsIHZiXSwgKHZhbHVlIC0gcGEpICogc3ViUmFuZ2VSYXRpbyhwYSwgcGIpKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEdldCB0aGUgc3RlcCB0aGF0IGFwcGxpZXMgYXQgYSBjZXJ0YWluIHZhbHVlLlxuICAgIGZ1bmN0aW9uIGdldFN0ZXAoeFBjdCwgeFN0ZXBzLCBzbmFwLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBiID0geFBjdFtqXTtcbiAgICAgICAgLy8gSWYgJ3NuYXAnIGlzIHNldCwgc3RlcHMgYXJlIHVzZWQgYXMgZml4ZWQgcG9pbnRzIG9uIHRoZSBzbGlkZXIuXG4gICAgICAgIGlmIChzbmFwKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHBvc2l0aW9uLCBhIG9yIGIuXG4gICAgICAgICAgICBpZiAodmFsdWUgLSBhID4gKGIgLSBhKSAvIDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmICgheFN0ZXBzW2ogLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4UGN0W2ogLSAxXSArIGNsb3Nlc3QodmFsdWUgLSB4UGN0W2ogLSAxXSwgeFN0ZXBzW2ogLSAxXSk7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gU3BlY3RydW1cbiAgICB2YXIgU3BlY3RydW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFNwZWN0cnVtKGVudHJ5LCBzbmFwLCBzaW5nbGVTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnhQY3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFZhbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtzaW5nbGVTdGVwIHx8IGZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW2ZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMuc25hcCA9IHNuYXA7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgb3JkZXJlZCA9IFtdO1xuICAgICAgICAgICAgLy8gTWFwIHRoZSBvYmplY3Qga2V5cyB0byBhbiBhcnJheS5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIG9yZGVyZWQucHVzaChbYXNBcnJheShlbnRyeVtpbmRleF0pLCBpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTb3J0IGFsbCBlbnRyaWVzIGJ5IHZhbHVlIChudW1lcmljIHNvcnQpLlxuICAgICAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF1bMF0gLSBiWzBdWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBlbnRyaWVzIHRvIHN1YnJhbmdlcy5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRyeVBvaW50KG9yZGVyZWRbaW5kZXhdWzFdLCBvcmRlcmVkW2luZGV4XVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgYWN0dWFsIHN0ZXAgdmFsdWVzLlxuICAgICAgICAgICAgLy8geFN0ZXBzIGlzIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB4UGN0IGFuZCB4VmFsLlxuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSB0aGlzLnhTdGVwcy5zbGljZSgwKTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIG51bWVyaWMgc3RlcHMgdG8gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHN1YnJhbmdlIHRoZXkgcmVwcmVzZW50LlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwUG9pbnQoaW5kZXgsIHRoaXMueE51bVN0ZXBzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlc1tpbmRleF0gPSBmcm9tUGVyY2VudGFnZSh0aGlzLnhWYWwsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VzO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb3ZlciB0aGUgd2hvbGUgc2NhbGUgb2YgcmFuZ2VzLlxuICAgICAgICAvLyBkaXJlY3Rpb246IDAgPSBiYWNrd2FyZHMgLyAxID0gZm9yd2FyZHNcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldEFic29sdXRlRGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUsIGRpc3RhbmNlcywgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgeFBjdF9pbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcmFuZ2Ugd2hlcmUgdG8gc3RhcnQgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodmFsdWUgPiB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXggPSB0aGlzLnhQY3QubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGxvb2tpbmcgYmFja3dhcmRzIGFuZCB0aGUgdmFsdWUgaXMgZXhhY3RseSBhdCBhIHJhbmdlIHNlcGFyYXRvciB0aGVuIGxvb2sgb25lIHJhbmdlIGZ1cnRoZXJcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uICYmIHZhbHVlID09PSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgIHZhciByZXN0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICB2YXIgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleF07XG4gICAgICAgICAgICB2YXIgcmFuZ2VfcGN0ID0gMDtcbiAgICAgICAgICAgIHZhciByZWxfcmFuZ2VfZGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgdmFyIGFic19kaXN0YW5jZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIHZhciByYW5nZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aGF0IHBhcnQgb2YgdGhlIHN0YXJ0IHJhbmdlIHRoZSB2YWx1ZSBpc1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh2YWx1ZSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHZhbHVlKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvIHVudGlsIHRoZSBjb21wbGV0ZSBkaXN0YW5jZSBhY3Jvc3MgcmFuZ2VzIGlzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIHdoaWxlIChyZXN0X3JlbF9kaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgdG90YWwgcmFuZ2VcbiAgICAgICAgICAgICAgICByYW5nZV9wY3QgPSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDEgKyByYW5nZV9jb3VudGVyXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHRoZSBtYXJnaW4sIHBhZGRpbmcgb3IgbGltaXQgaXMgbGFyZ2VyIHRoZW4gdGhlIGN1cnJlbnQgcmFuZ2UgYW5kIGNhbGN1bGF0ZVxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3IgKyAxMDAgLSBzdGFydF9mYWN0b3IgKiAxMDAgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbGFyZ2VyIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgd2hvbGUgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gcmFuZ2VfcGN0ICogc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0IGZhY3RvciBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAocmVzdF9yZWxfZGlzdGFuY2UgLSAxMDAgKiBzdGFydF9mYWN0b3IpIC8gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHN0YXJ0IGZhY3RvciB0byAxIGFzIGZvciBuZXh0IHJhbmdlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgICAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc21hbGxlciBvciBlcXVhbCB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIGNhbGN1bGF0ZSBwZXJjZW50dWFsIHBhcnQgb2YgdGhhdCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSAoKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByYW5nZV9wY3QpIC8gMTAwKSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBObyByZXN0IGxlZnQgYXMgdGhlIHJlc3QgZml0cyBpbiBjdXJyZW50IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyIC0gcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBmaXJzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtaW5pbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoICsgcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgKyByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGxhc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWF4aW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCAtIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBhYnNfZGlzdGFuY2VfY291bnRlcjtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLnRvU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZnJvbVN0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVN0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldFN0ZXAodGhpcy54UGN0LCB0aGlzLnhTdGVwcywgdGhpcy5zbmFwLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREZWZhdWx0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSwgaXNEb3duLCBzaXplKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICAvLyBXaGVuIGF0IHRoZSB0b3Agb3Igc3RlcHBpbmcgZG93biwgbG9vayBhdCB0aGUgcHJldmlvdXMgc3ViLXJhbmdlXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDEwMCB8fCAoaXNEb3duICYmIHZhbHVlID09PSB0aGlzLnhQY3RbaiAtIDFdKSkge1xuICAgICAgICAgICAgICAgIGogPSBNYXRoLm1heChqIC0gMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueFZhbFtqXSAtIHRoaXMueFZhbFtqIC0gMV0pIC8gc2l6ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldE5lYXJieVN0ZXBzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0ZXBCZWZvcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzU3RlcDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAxXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0ZXBBZnRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbal0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2pdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvdW50U3RlcERlY2ltYWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHRoaXMueE51bVN0ZXBzLm1hcChjb3VudERlY2ltYWxzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBzdGVwRGVjaW1hbHMpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFzTm9TaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueFZhbFswXSA9PT0gdGhpcy54VmFsW3RoaXMueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gT3V0c2lkZSB0ZXN0aW5nXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlRW50cnlQb2ludCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlO1xuICAgICAgICAgICAgLy8gQ292ZXJ0IG1pbi9tYXggc3ludGF4IHRvIDAgYW5kIDEwMC5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGNvcnJlY3QgaW5wdXQuXG4gICAgICAgICAgICBpZiAoIWlzTnVtZXJpYyhwZXJjZW50YWdlKSB8fCAhaXNOdW1lcmljKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgdmFsdWUgaXNuJ3QgbnVtZXJpYy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXMuXG4gICAgICAgICAgICB0aGlzLnhQY3QucHVzaChwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHRoaXMueFZhbC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZTEgPSBOdW1iZXIodmFsdWVbMV0pO1xuICAgICAgICAgICAgLy8gTmFOIHdpbGwgZXZhbHVhdGUgdG8gZmFsc2UgdG9vLCBidXQgdG8ga2VlcFxuICAgICAgICAgICAgLy8gbG9nZ2luZyBjbGVhciwgc2V0IHN0ZXAgZXhwbGljaXRseS4gTWFrZSBzdXJlXG4gICAgICAgICAgICAvLyBub3QgdG8gb3ZlcnJpZGUgdGhlICdzdGVwJyBzZXR0aW5nIHdpdGggZmFsc2UuXG4gICAgICAgICAgICBpZiAoIXBlcmNlbnRhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbMF0gPSB2YWx1ZTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHMucHVzaChpc05hTih2YWx1ZTEpID8gZmFsc2UgOiB2YWx1ZTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlU3RlcFBvaW50ID0gZnVuY3Rpb24gKGksIG4pIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSAnZmFsc2UnIHN0ZXBwaW5nLlxuICAgICAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICBpZiAodGhpcy54VmFsW2ldID09PSB0aGlzLnhWYWxbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPSB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gdGhpcy54VmFsW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZhY3RvciB0byByYW5nZSByYXRpb1xuICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPVxuICAgICAgICAgICAgICAgIGZyb21QZXJjZW50YWdlKFt0aGlzLnhWYWxbaV0sIHRoaXMueFZhbFtpICsgMV1dLCBuLCAwKSAvIHN1YlJhbmdlUmF0aW8odGhpcy54UGN0W2ldLCB0aGlzLnhQY3RbaSArIDFdKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFN0ZXBzID0gKHRoaXMueFZhbFtpICsgMV0gLSB0aGlzLnhWYWxbaV0pIC8gdGhpcy54TnVtU3RlcHNbaV07XG4gICAgICAgICAgICB2YXIgaGlnaGVzdFN0ZXAgPSBNYXRoLmNlaWwoTnVtYmVyKHRvdGFsU3RlcHMudG9GaXhlZCgzKSkgLSAxKTtcbiAgICAgICAgICAgIHZhciBzdGVwID0gdGhpcy54VmFsW2ldICsgdGhpcy54TnVtU3RlcHNbaV0gKiBoaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSBzdGVwO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU3BlY3RydW07XG4gICAgfSgpKTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIE9wdGlvbnNcbiAgICAvKlx0RXZlcnkgaW5wdXQgb3B0aW9uIGlzIHRlc3RlZCBhbmQgcGFyc2VkLiBUaGlzIHdpbGwgcHJldmVudFxuICAgICAgICBlbmRsZXNzIHZhbGlkYXRpb24gaW4gaW50ZXJuYWwgbWV0aG9kcy4gVGhlc2UgdGVzdHMgYXJlXG4gICAgICAgIHN0cnVjdHVyZWQgd2l0aCBhbiBpdGVtIGZvciBldmVyeSBvcHRpb24gYXZhaWxhYmxlLiBBblxuICAgICAgICBvcHRpb24gY2FuIGJlIG1hcmtlZCBhcyByZXF1aXJlZCBieSBzZXR0aW5nIHRoZSAncicgZmxhZy5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgICAgICAtIFRoZSBwcm92aWRlZCB2YWx1ZSBmb3IgdGhlIG9wdGlvbjtcbiAgICAgICAgICAgIC0gQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgb2JqZWN0O1xuICAgICAgICAgICAgLSBUaGUgbmFtZSBmb3IgdGhlIG9wdGlvbjtcblxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHdoZW4gYW4gZXJyb3IgaXMgZGV0ZWN0ZWQsXG4gICAgICAgIG9yIHRydWUgd2hlbiBldmVyeXRoaW5nIGlzIE9LLiBJdCBjYW4gYWxzbyBtb2RpZnkgdGhlIG9wdGlvblxuICAgICAgICBvYmplY3QsIHRvIG1ha2Ugc3VyZSBhbGwgdmFsdWVzIGNhbiBiZSBjb3JyZWN0bHkgbG9vcGVkIGVsc2V3aGVyZS4gKi9cbiAgICAvL3JlZ2lvbiBEZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0Rm9ybWF0dGVyID0ge1xuICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICB9LFxuICAgICAgICBmcm9tOiBOdW1iZXIsXG4gICAgfTtcbiAgICB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAgICAgdGFyZ2V0OiBcInRhcmdldFwiLFxuICAgICAgICBiYXNlOiBcImJhc2VcIixcbiAgICAgICAgb3JpZ2luOiBcIm9yaWdpblwiLFxuICAgICAgICBoYW5kbGU6IFwiaGFuZGxlXCIsXG4gICAgICAgIGhhbmRsZUxvd2VyOiBcImhhbmRsZS1sb3dlclwiLFxuICAgICAgICBoYW5kbGVVcHBlcjogXCJoYW5kbGUtdXBwZXJcIixcbiAgICAgICAgdG91Y2hBcmVhOiBcInRvdWNoLWFyZWFcIixcbiAgICAgICAgaG9yaXpvbnRhbDogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICBjb25uZWN0OiBcImNvbm5lY3RcIixcbiAgICAgICAgY29ubmVjdHM6IFwiY29ubmVjdHNcIixcbiAgICAgICAgbHRyOiBcImx0clwiLFxuICAgICAgICBydGw6IFwicnRsXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25MdHI6IFwidHh0LWRpci1sdHJcIixcbiAgICAgICAgdGV4dERpcmVjdGlvblJ0bDogXCJ0eHQtZGlyLXJ0bFwiLFxuICAgICAgICBkcmFnZ2FibGU6IFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIGRyYWc6IFwic3RhdGUtZHJhZ1wiLFxuICAgICAgICB0YXA6IFwic3RhdGUtdGFwXCIsXG4gICAgICAgIGFjdGl2ZTogXCJhY3RpdmVcIixcbiAgICAgICAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG4gICAgICAgIHBpcHM6IFwicGlwc1wiLFxuICAgICAgICBwaXBzSG9yaXpvbnRhbDogXCJwaXBzLWhvcml6b250YWxcIixcbiAgICAgICAgcGlwc1ZlcnRpY2FsOiBcInBpcHMtdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyOiBcIm1hcmtlclwiLFxuICAgICAgICBtYXJrZXJIb3Jpem9udGFsOiBcIm1hcmtlci1ob3Jpem9udGFsXCIsXG4gICAgICAgIG1hcmtlclZlcnRpY2FsOiBcIm1hcmtlci12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXJOb3JtYWw6IFwibWFya2VyLW5vcm1hbFwiLFxuICAgICAgICBtYXJrZXJMYXJnZTogXCJtYXJrZXItbGFyZ2VcIixcbiAgICAgICAgbWFya2VyU3ViOiBcIm1hcmtlci1zdWJcIixcbiAgICAgICAgdmFsdWU6IFwidmFsdWVcIixcbiAgICAgICAgdmFsdWVIb3Jpem9udGFsOiBcInZhbHVlLWhvcml6b250YWxcIixcbiAgICAgICAgdmFsdWVWZXJ0aWNhbDogXCJ2YWx1ZS12ZXJ0aWNhbFwiLFxuICAgICAgICB2YWx1ZU5vcm1hbDogXCJ2YWx1ZS1ub3JtYWxcIixcbiAgICAgICAgdmFsdWVMYXJnZTogXCJ2YWx1ZS1sYXJnZVwiLFxuICAgICAgICB2YWx1ZVN1YjogXCJ2YWx1ZS1zdWJcIixcbiAgICB9O1xuICAgIC8vIE5hbWVzcGFjZXMgb2YgaW50ZXJuYWwgZXZlbnQgbGlzdGVuZXJzXG4gICAgdmFyIElOVEVSTkFMX0VWRU5UX05TID0ge1xuICAgICAgICB0b29sdGlwczogXCIuX190b29sdGlwc1wiLFxuICAgICAgICBhcmlhOiBcIi5fX2FyaWFcIixcbiAgICB9O1xuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gdGVzdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHN0ZXAgb3B0aW9uIGNhbiBzdGlsbCBiZSB1c2VkIHRvIHNldCBzdGVwcGluZ1xuICAgICAgICAvLyBmb3IgbGluZWFyIHNsaWRlcnMuIE92ZXJ3cml0dGVuIGlmIHNldCBpbiAncmFuZ2UnLlxuICAgICAgICBwYXJzZWQuc2luZ2xlU3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkUGFnZU11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRQYWdlTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkRGVmYXVsdFN0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmREZWZhdWx0U3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UmFuZ2UocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBGaWx0ZXIgaW5jb3JyZWN0IGlucHV0LlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIGlzIG5vdCBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoIG1pc3Npbmcgc3RhcnQgb3IgZW5kLlxuICAgICAgICBpZiAoZW50cnkubWluID09PSB1bmRlZmluZWQgfHwgZW50cnkubWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IE1pc3NpbmcgJ21pbicgb3IgJ21heCcgaW4gJ3JhbmdlJy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLnNwZWN0cnVtID0gbmV3IFNwZWN0cnVtKGVudHJ5LCBwYXJzZWQuc25hcCB8fCBmYWxzZSwgcGFyc2VkLnNpbmdsZVN0ZXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U3RhcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbnB1dC4gVmFsdWVzIGFyZW4ndCB0ZXN0ZWQsIGFzIHRoZSBwdWJsaWMgLnZhbCBtZXRob2RcbiAgICAgICAgLy8gd2lsbCBhbHdheXMgcHJvdmlkZSBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGFydCcgb3B0aW9uIGlzIGluY29ycmVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmUgdGhlIG51bWJlciBvZiBoYW5kbGVzLlxuICAgICAgICBwYXJzZWQuaGFuZGxlcyA9IGVudHJ5Lmxlbmd0aDtcbiAgICAgICAgLy8gV2hlbiB0aGUgc2xpZGVyIGlzIGluaXRpYWxpemVkLCB0aGUgLnZhbCBtZXRob2Qgd2lsbFxuICAgICAgICAvLyBiZSBjYWxsZWQgd2l0aCB0aGUgc3RhcnQgb3B0aW9ucy5cbiAgICAgICAgcGFyc2VkLnN0YXJ0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTbmFwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzbmFwJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuc25hcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0ZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0ZScgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLmFuaW1hdGUgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGlvbkR1cmF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGlvbkR1cmF0aW9uJyBvcHRpb24gbXVzdCBiZSBhIG51bWJlci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFuaW1hdGlvbkR1cmF0aW9uID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDb25uZWN0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGNvbm5lY3QgPSBbZmFsc2VdO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgLy8gTWFwIGxlZ2FjeSBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gXCJsb3dlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFt0cnVlLCBmYWxzZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09IFwidXBwZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbZmFsc2UsIHRydWVdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBib29sZWFuIG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29ubmVjdC5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWplY3QgaW52YWxpZCBpbnB1dFxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCB8fCBlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzICsgMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nvbm5lY3QnIG9wdGlvbiBkb2Vzbid0IG1hdGNoIGhhbmRsZSBjb3VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25uZWN0ID0gZW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNvbm5lY3QgPSBjb25uZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0T3JpZW50YXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgb3JpZW50YXRpb24gdG8gYW4gYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3lcbiAgICAgICAgLy8gYXJyYXkgc2VsZWN0aW9uLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdvcmllbnRhdGlvbicgb3B0aW9uIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RNYXJnaW4ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElzc3VlICM1ODJcbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLm1hcmdpbiA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RMaW1pdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubGltaXQgPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgICAgICBpZiAoIXBhcnNlZC5saW1pdCB8fCBwYXJzZWQuaGFuZGxlcyA8IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RQYWRkaW5nKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpICYmICEoZW50cnkubGVuZ3RoID09PSAyIHx8IGlzTnVtZXJpYyhlbnRyeVswXSkgfHwgaXNOdW1lcmljKGVudHJ5WzFdKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtlbnRyeSwgZW50cnldO1xuICAgICAgICB9XG4gICAgICAgIC8vICdnZXREaXN0YW5jZScgcmV0dXJucyBmYWxzZSBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgICAgIHBhcnNlZC5wYWRkaW5nID0gW3BhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVswXSksIHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVsxXSldO1xuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwYXJzZWQuc3BlY3RydW0ueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vIGxhc3QgXCJyYW5nZVwiIGNhbid0IGNvbnRhaW4gc3RlcCBzaXplIGFzIGl0IGlzIHB1cmVseSBhbiBlbmRwb2ludC5cbiAgICAgICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXVtpbmRleF0gPCAwIHx8IHBhcnNlZC5wYWRkaW5nWzFdW2luZGV4XSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0b3RhbFBhZGRpbmcgPSBlbnRyeVswXSArIGVudHJ5WzFdO1xuICAgICAgICB2YXIgZmlyc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICB2YXIgbGFzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbcGFyc2VkLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0b3RhbFBhZGRpbmcgLyAobGFzdFZhbHVlIC0gZmlyc3RWYWx1ZSkgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3Qgbm90IGV4Y2VlZCAxMDAlIG9mIHRoZSByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERpcmVjdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBkaXJlY3Rpb24gYXMgYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3kgcGFyc2luZy5cbiAgICAgICAgLy8gSW52ZXJ0IGNvbm5lY3Rpb24gZm9yIFJUTCBzbGlkZXJzLCBzbyB0aGF0IHRoZSBwcm9wZXJcbiAgICAgICAgLy8gaGFuZGxlcyBnZXQgdGhlIGNvbm5lY3QvYmFja2dyb3VuZCBjbGFzc2VzLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwibHRyXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicnRsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdkaXJlY3Rpb24nIG9wdGlvbiB3YXMgbm90IHJlY29nbml6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RCZWhhdmlvdXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGlucHV0IGlzIGEgc3RyaW5nLlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYmVoYXZpb3VyJyBtdXN0IGJlIGEgc3RyaW5nIGNvbnRhaW5pbmcgb3B0aW9ucy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBjb250YWlucyBhbnkga2V5d29yZHMuXG4gICAgICAgIC8vIE5vbmUgYXJlIHJlcXVpcmVkLlxuICAgICAgICB2YXIgdGFwID0gZW50cnkuaW5kZXhPZihcInRhcFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZyA9IGVudHJ5LmluZGV4T2YoXCJkcmFnXCIpID49IDA7XG4gICAgICAgIHZhciBmaXhlZCA9IGVudHJ5LmluZGV4T2YoXCJmaXhlZFwiKSA+PSAwO1xuICAgICAgICB2YXIgc25hcCA9IGVudHJ5LmluZGV4T2YoXCJzbmFwXCIpID49IDA7XG4gICAgICAgIHZhciBob3ZlciA9IGVudHJ5LmluZGV4T2YoXCJob3ZlclwiKSA+PSAwO1xuICAgICAgICB2YXIgdW5jb25zdHJhaW5lZCA9IGVudHJ5LmluZGV4T2YoXCJ1bmNvbnN0cmFpbmVkXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnQWxsID0gZW50cnkuaW5kZXhPZihcImRyYWctYWxsXCIpID49IDA7XG4gICAgICAgIHZhciBzbW9vdGhTdGVwcyA9IGVudHJ5LmluZGV4T2YoXCJzbW9vdGgtc3RlcHNcIikgPj0gMDtcbiAgICAgICAgaWYgKGZpeGVkKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLmhhbmRsZXMgIT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZml4ZWQnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVc2UgbWFyZ2luIHRvIGVuZm9yY2UgZml4ZWQgc3RhdGVcbiAgICAgICAgICAgIHRlc3RNYXJnaW4ocGFyc2VkLCBwYXJzZWQuc3RhcnRbMV0gLSBwYXJzZWQuc3RhcnRbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd1bmNvbnN0cmFpbmVkJyBiZWhhdmlvdXIgY2Fubm90IGJlIHVzZWQgd2l0aCBtYXJnaW4gb3IgbGltaXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIHRhcDogdGFwIHx8IHNuYXAsXG4gICAgICAgICAgICBkcmFnOiBkcmFnLFxuICAgICAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgICAgIHNtb290aFN0ZXBzOiBzbW9vdGhTdGVwcyxcbiAgICAgICAgICAgIGZpeGVkOiBmaXhlZCxcbiAgICAgICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgICAgICBob3ZlcjogaG92ZXIsXG4gICAgICAgICAgICB1bmNvbnN0cmFpbmVkOiB1bmNvbnN0cmFpbmVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0VG9vbHRpcHMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBmb3JtYXR0ZXIgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybWF0dGVyICE9PSBcImJvb2xlYW5cIiAmJiAhaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZm9ybWF0dGVyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndG9vbHRpcHMnIG11c3QgYmUgcGFzc2VkIGEgZm9ybWF0dGVyIG9yICdmYWxzZScuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEhhbmRsZUF0dHJpYnV0ZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgYXR0cmlidXRlcyBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5oYW5kbGVBdHRyaWJ1dGVzID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBcmlhRm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhcmlhRm9ybWF0JyByZXF1aXJlcyAndG8nIG1ldGhvZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFyaWFGb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmb3JtYXQnIHJlcXVpcmVzICd0bycgYW5kICdmcm9tJyBtZXRob2RzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFN1cHBvcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkU3VwcG9ydCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRTdXBwb3J0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REb2N1bWVudEVsZW1lbnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBUaGlzIGlzIGFuIGFkdmFuY2VkIG9wdGlvbi4gUGFzc2VkIHZhbHVlcyBhcmUgdXNlZCB3aXRob3V0IHZhbGlkYXRpb24uXG4gICAgICAgIHBhcnNlZC5kb2N1bWVudEVsZW1lbnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc1ByZWZpeChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIgJiYgZW50cnkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzUHJlZml4JyBtdXN0IGJlIGEgc3RyaW5nIG9yIGBmYWxzZWAuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jc3NQcmVmaXggPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc0NsYXNzZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzQ2xhc3NlcycgbXVzdCBiZSBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkLmNzc1ByZWZpeCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3Nlc1trZXldID0gcGFyc2VkLmNzc1ByZWZpeCArIGVudHJ5W2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGVzdCBhbGwgZGV2ZWxvcGVyIHNldHRpbmdzIGFuZCBwYXJzZSB0byBhc3N1bXB0aW9uLXNhZmUgdmFsdWVzLlxuICAgIGZ1bmN0aW9uIHRlc3RPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVG8gcHJvdmUgYSBmaXggZm9yICM1MzcsIGZyZWV6ZSBvcHRpb25zIGhlcmUuXG4gICAgICAgIC8vIElmIHRoZSBvYmplY3QgaXMgbW9kaWZpZWQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICAgICAgICAvLyBPYmplY3QuZnJlZXplKG9wdGlvbnMpO1xuICAgICAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICAgICAgbWFyZ2luOiBudWxsLFxuICAgICAgICAgICAgbGltaXQ6IG51bGwsXG4gICAgICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICAgICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICB9O1xuICAgICAgICAvLyBUZXN0cyBhcmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHByZXNlbnRlZCBoZXJlLlxuICAgICAgICB2YXIgdGVzdHMgPSB7XG4gICAgICAgICAgICBzdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U3RlcCB9LFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAgfSxcbiAgICAgICAgICAgIHN0YXJ0OiB7IHI6IHRydWUsIHQ6IHRlc3RTdGFydCB9LFxuICAgICAgICAgICAgY29ubmVjdDogeyByOiB0cnVlLCB0OiB0ZXN0Q29ubmVjdCB9LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB7IHI6IHRydWUsIHQ6IHRlc3REaXJlY3Rpb24gfSxcbiAgICAgICAgICAgIHNuYXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTbmFwIH0sXG4gICAgICAgICAgICBhbmltYXRlOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0ZSB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRpb25EdXJhdGlvbiB9LFxuICAgICAgICAgICAgcmFuZ2U6IHsgcjogdHJ1ZSwgdDogdGVzdFJhbmdlIH0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdE9yaWVudGF0aW9uIH0sXG4gICAgICAgICAgICBtYXJnaW46IHsgcjogZmFsc2UsIHQ6IHRlc3RNYXJnaW4gfSxcbiAgICAgICAgICAgIGxpbWl0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0TGltaXQgfSxcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgcjogZmFsc2UsIHQ6IHRlc3RQYWRkaW5nIH0sXG4gICAgICAgICAgICBiZWhhdmlvdXI6IHsgcjogdHJ1ZSwgdDogdGVzdEJlaGF2aW91ciB9LFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEFyaWFGb3JtYXQgfSxcbiAgICAgICAgICAgIGZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEZvcm1hdCB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHsgcjogZmFsc2UsIHQ6IHRlc3RUb29sdGlwcyB9LFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB7IHI6IHRydWUsIHQ6IHRlc3RLZXlib2FyZFN1cHBvcnQgfSxcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudDogeyByOiBmYWxzZSwgdDogdGVzdERvY3VtZW50RWxlbWVudCB9LFxuICAgICAgICAgICAgY3NzUHJlZml4OiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NQcmVmaXggfSxcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IHsgcjogdHJ1ZSwgdDogdGVzdENzc0NsYXNzZXMgfSxcbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZXM6IHsgcjogZmFsc2UsIHQ6IHRlc3RIYW5kbGVBdHRyaWJ1dGVzIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGNvbm5lY3Q6IGZhbHNlLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICAgICAgYmVoYXZpb3VyOiBcInRhcFwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxuICAgICAgICAgICAgY3NzUHJlZml4OiBcIm5vVWktXCIsXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogNSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IDEwLFxuICAgICAgICB9O1xuICAgICAgICAvLyBBcmlhRm9ybWF0IGRlZmF1bHRzIHRvIHJlZ3VsYXIgZm9ybWF0LCBpZiBhbnkuXG4gICAgICAgIGlmIChvcHRpb25zLmZvcm1hdCAmJiAhb3B0aW9ucy5hcmlhRm9ybWF0KSB7XG4gICAgICAgICAgICBvcHRpb25zLmFyaWFGb3JtYXQgPSBvcHRpb25zLmZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSdW4gYWxsIG9wdGlvbnMgdGhyb3VnaCBhIHRlc3RpbmcgbWVjaGFuaXNtIHRvIGVuc3VyZSBjb3JyZWN0XG4gICAgICAgIC8vIGlucHV0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCBvcHRpb25zIG1pZ2h0IGdldCBtb2RpZmllZCB0b1xuICAgICAgICAvLyBiZSBoYW5kbGVkIHByb3Blcmx5LiBFLmcuIHdyYXBwaW5nIGludGVnZXJzIGluIGFycmF5cy5cbiAgICAgICAgT2JqZWN0LmtleXModGVzdHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb24gaXNuJ3Qgc2V0LCBidXQgaXQgaXMgcmVxdWlyZWQsIHRocm93IGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKCFpc1NldChvcHRpb25zW25hbWVdKSAmJiBkZWZhdWx0c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RzW25hbWVdLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ1wiICsgbmFtZSArIFwiJyBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlc3RzW25hbWVdLnQocGFyc2VkLCAhaXNTZXQob3B0aW9uc1tuYW1lXSkgPyBkZWZhdWx0c1tuYW1lXSA6IG9wdGlvbnNbbmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRm9yd2FyZCBwaXBzIG9wdGlvbnNcbiAgICAgICAgcGFyc2VkLnBpcHMgPSBvcHRpb25zLnBpcHM7XG4gICAgICAgIC8vIEFsbCByZWNlbnQgYnJvd3NlcnMgYWNjZXB0IHVucHJlZml4ZWQgdHJhbnNmb3JtLlxuICAgICAgICAvLyBXZSBuZWVkIC1tcy0gZm9yIElFOSBhbmQgLXdlYmtpdC0gZm9yIG9sZGVyIEFuZHJvaWQ7XG4gICAgICAgIC8vIEFzc3VtZSB1c2Ugb2YgLXdlYmtpdC0gaWYgdW5wcmVmaXhlZCBhbmQgLW1zLSBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD10cmFuc2Zvcm1zMmRcbiAgICAgICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbXNQcmVmaXggPSBkLnN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBub1ByZWZpeCA9IGQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHBhcnNlZC50cmFuc2Zvcm1SdWxlID0gbm9QcmVmaXggPyBcInRyYW5zZm9ybVwiIDogbXNQcmVmaXggPyBcIm1zVHJhbnNmb3JtXCIgOiBcIndlYmtpdFRyYW5zZm9ybVwiO1xuICAgICAgICAvLyBQaXBzIGRvbid0IG1vdmUsIHNvIHdlIGNhbiBwbGFjZSB0aGVtIHVzaW5nIGxlZnQvdG9wLlxuICAgICAgICB2YXIgc3R5bGVzID0gW1xuICAgICAgICAgICAgW1wibGVmdFwiLCBcInRvcFwiXSxcbiAgICAgICAgICAgIFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdLFxuICAgICAgICBdO1xuICAgICAgICBwYXJzZWQuc3R5bGUgPSBzdHlsZXNbcGFyc2VkLmRpcl1bcGFyc2VkLm9ydF07XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSA9IGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSAmJiBnZXRTdXBwb3J0c1Bhc3NpdmUoKTtcbiAgICAgICAgLy8gQWxsIHZhcmlhYmxlcyBsb2NhbCB0byAnc2NvcGUnIGFyZSBwcmVmaXhlZCB3aXRoICdzY29wZV8nXG4gICAgICAgIC8vIFNsaWRlciBET00gTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX1RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdmFyIHNjb3BlX0Jhc2U7XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVzO1xuICAgICAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgICAgIHZhciBzY29wZV9QaXBzO1xuICAgICAgICB2YXIgc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICAgICAgdmFyIHNjb3BlX1NwZWN0cnVtID0gb3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgdmFyIHNjb3BlX1ZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVOdW1iZXJzID0gW107XG4gICAgICAgIHZhciBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPSAwO1xuICAgICAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgICAgIC8vIERvY3VtZW50IE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudCA9IHRhcmdldC5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnRFbGVtZW50ID0gb3B0aW9ucy5kb2N1bWVudEVsZW1lbnQgfHwgc2NvcGVfRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgc2NvcGVfQm9keSA9IHNjb3BlX0RvY3VtZW50LmJvZHk7XG4gICAgICAgIC8vIEZvciBob3Jpem9udGFsIHNsaWRlcnMgaW4gc3RhbmRhcmQgbHRyIGRvY3VtZW50cyxcbiAgICAgICAgLy8gbWFrZSAubm9VaS1vcmlnaW4gb3ZlcmZsb3cgdG8gdGhlIGxlZnQgc28gdGhlIGRvY3VtZW50IGRvZXNuJ3Qgc2Nyb2xsLlxuICAgICAgICB2YXIgc2NvcGVfRGlyT2Zmc2V0ID0gc2NvcGVfRG9jdW1lbnQuZGlyID09PSBcInJ0bFwiIHx8IG9wdGlvbnMub3J0ID09PSAxID8gMCA6IDEwMDtcbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5vZGUsIGFkZHMgaXQgdG8gdGFyZ2V0LCByZXR1cm5zIHRoZSBuZXcgbm9kZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkTm9kZVRvKGFkZFRhcmdldCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2YXIgZGl2ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGEgb3JpZ2luIHRvIHRoZSBiYXNlXG4gICAgICAgIGZ1bmN0aW9uIGFkZE9yaWdpbihiYXNlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm9yaWdpbik7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkTm9kZVRvKG9yaWdpbiwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZSk7XG4gICAgICAgICAgICBhZGROb2RlVG8oaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMudG91Y2hBcmVhKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhhbmRsZVwiLCBTdHJpbmcoaGFuZGxlTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL3RhYmluZGV4XG4gICAgICAgICAgICAgICAgLy8gMCA9IGZvY3VzYWJsZSBhbmQgcmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlc18xID0gb3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc18xKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNfMVthdHRyaWJ1dGVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwic2xpZGVyXCIpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImFyaWEtb3JpZW50YXRpb25cIiwgb3B0aW9ucy5vcnQgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlTG93ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlTnVtYmVyID09PSBvcHRpb25zLmhhbmRsZXMgLSAxKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlVXBwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbnNlcnQgbm9kZXMgZm9yIGNvbm5lY3QgZWxlbWVudHNcbiAgICAgICAgZnVuY3Rpb24gYWRkQ29ubmVjdChiYXNlLCBhZGQpIHtcbiAgICAgICAgICAgIGlmICghYWRkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGhhbmRsZXMgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICBmdW5jdGlvbiBhZGRFbGVtZW50cyhjb25uZWN0T3B0aW9ucywgYmFzZSkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3RCYXNlID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0cyk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1swXSkpO1xuICAgICAgICAgICAgLy8gWzo6OjpPPT09PU89PT09Tz09PT1dXG4gICAgICAgICAgICAvLyBjb25uZWN0T3B0aW9ucyA9IFswLCAxLCAxLCAxXVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEtlZXAgYSBsaXN0IG9mIGFsbCBhZGRlZCBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMucHVzaChhZGRPcmlnaW4oYmFzZSwgaSkpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnNbaV0gPSBpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbaSArIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhIHNpbmdsZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlcihhZGRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IGNsYXNzZXMgYW5kIGRhdGEgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5sdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMucnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9ydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmhvcml6b250YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudmVydGljYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRleHREaXJlY3Rpb24gPSBnZXRDb21wdXRlZFN0eWxlKGFkZFRhcmdldCkuZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHRleHREaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uUnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25MdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5iYXNlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRUb29sdGlwKGhhbmRsZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMudG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oaGFuZGxlLmZpcnN0Q2hpbGQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b29sdGlwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1NsaWRlckRpc2FibGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1RhcmdldC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBzbGlkZXIgZHJhZ2dpbmcgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICBmdW5jdGlvbiBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVPcmlnaW4uaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQodG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHRvb2x0aXBzIG9wdGlvbiBpcyBhIHNob3J0aGFuZCBmb3IgdXNpbmcgdGhlICd1cGRhdGUnIGV2ZW50LlxuICAgICAgICBmdW5jdGlvbiB0b29sdGlwcygpIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICAvLyBUb29sdGlwcyBhcmUgYWRkZWQgd2l0aCBvcHRpb25zLnRvb2x0aXBzIGluIG9yaWdpbmFsIG9yZGVyLlxuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBzY29wZV9IYW5kbGVzLm1hcChhZGRUb29sdGlwKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZV9Ub29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0udG8odW5lbmNvZGVkW2hhbmRsZU51bWJlcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdLmlubmVySFRNTCA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXJpYSgpIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQsIHRhcCwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEFyaWEgVmFsdWVzIGZvciBhbGwgaGFuZGxlcywgYXMgYSBjaGFuZ2UgaW4gb25lIGNoYW5nZXMgbWluIGFuZCBtYXggdmFsdWVzIGZvciB0aGUgbmV4dC5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDEwMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXR0ZWQgdmFsdWUgZm9yIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcob3B0aW9ucy5hcmlhRm9ybWF0LnRvKHVuZW5jb2RlZFtpbmRleF0pKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFwIHRvIHNsaWRlciByYW5nZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgbWluID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1pbikudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1heCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbm93ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG5vdykudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIiwgbWluKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIiwgbWF4KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIiwgbm93KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIsIHRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0R3JvdXAocGlwcykge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSByYW5nZS5cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUmFuZ2UgfHwgcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLnhWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLkNvdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpcHMudmFsdWVzIDwgMikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndmFsdWVzJyAoPj0gMikgcmVxdWlyZWQgZm9yIG1vZGUgJ2NvdW50Jy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERpdmlkZSAwIC0gMTAwIGluICdjb3VudCcgcGFydHMuXG4gICAgICAgICAgICAgICAgdmFyIGludGVydmFsID0gcGlwcy52YWx1ZXMgLSAxO1xuICAgICAgICAgICAgICAgIHZhciBzcHJlYWQgPSAxMDAgLyBpbnRlcnZhbDtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gTGlzdCB0aGVzZSBwYXJ0cyBhbmQgaGF2ZSB0aGVtIGhhbmRsZWQgYXMgJ3Bvc2l0aW9ucycuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGludGVydmFsLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ludGVydmFsXSA9IGludGVydmFsICogc3ByZWFkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCgxMDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFwIGFsbCBwZXJjZW50YWdlcyB0byBvbi1yYW5nZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UocGlwcy52YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlZhbHVlcykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBtdXN0IGJlIHN0ZXBwZWQsIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBhIHBlcmNlbnRhZ2UgZmlyc3QuXG4gICAgICAgICAgICAgICAgaWYgKHBpcHMuc3RlcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0byBwZXJjZW50YWdlLCBhcHBseSBzdGVwLCByZXR1cm4gdG8gdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAoc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2FuIHNpbXBseSB1c2UgdGhlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIHBpcHMubW9kZSA9IG5ldmVyXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFwVG9SYW5nZSh2YWx1ZXMsIHN0ZXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc3RlcHBlZCA/IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodmFsdWUpIDogdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVTcHJlYWQocGlwcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gc2FmZUluY3JlbWVudCh2YWx1ZSwgaW5jcmVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgdmFyaWFuY2UgYnkgZHJvcHBpbmcgdGhlIHNtYWxsZXN0IGRlY2ltYWwgcGxhY2VzLlxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoKHZhbHVlICsgaW5jcmVtZW50KS50b0ZpeGVkKDcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBncm91cCA9IGdldEdyb3VwKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ZXMgPSB7fTtcbiAgICAgICAgICAgIHZhciBmaXJzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgdmFyIGxhc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFtzY29wZV9TcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaWdub3JlTGFzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHByZXZQY3QgPSAwO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZ3JvdXAsIHNvcnQgaXQgYW5kIGZpbHRlciBhd2F5IGFsbCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgZ3JvdXAgPSB1bmlxdWUoZ3JvdXAuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSByYW5nZSBzdGFydHMgd2l0aCB0aGUgZmlyc3QgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChncm91cFswXSAhPT0gZmlyc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAudW5zaGlmdChmaXJzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpa2V3aXNlIGZvciB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbZ3JvdXAubGVuZ3RoIC0gMV0gIT09IGxhc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChsYXN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlTGFzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgbG93ZXIgKyB1cHBlciBwb3NpdGlvbnMuXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIHE7XG4gICAgICAgICAgICAgICAgdmFyIGxvdyA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGhpZ2ggPSBncm91cFtpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgdmFyIHBjdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIHBjdFBvcztcbiAgICAgICAgICAgICAgICB2YXIgdHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3RlcHMgPSBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHM7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB1c2luZyAnc3RlcHMnIG1vZGUsIHVzZSB0aGUgcHJvdmlkZWQgc3RlcHMuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdsbCBzdGVwIG9uIHRvIHRoZSBuZXh0IHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGlmIChpc1N0ZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS54TnVtU3RlcHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgJ2Z1bGwnIHN0ZXAuXG4gICAgICAgICAgICAgICAgaWYgKCFzdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBoaWdoIC0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBoaWdoIGlzIHVuZGVmaW5lZCB3ZSBhcmUgYXQgdGhlIGxhc3Qgc3VicmFuZ2UuIE1ha2Ugc3VyZSBpdCBpdGVyYXRlcyBvbmNlICgjMTA4OClcbiAgICAgICAgICAgICAgICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2ggPSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBzdGVwIGlzbid0IDAsIHdoaWNoIHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AgKCM2NTQpXG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRmluZCBhbGwgc3RlcHMgaW4gdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpID0gc2FmZUluY3JlbWVudChpLCBzdGVwKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHBlcmNlbnRhZ2UgdmFsdWUgZm9yIHRoZSBjdXJyZW50IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgc2l6ZSBmb3IgdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBuZXdQY3QgPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKGkpO1xuICAgICAgICAgICAgICAgICAgICBwY3REaWZmZXJlbmNlID0gbmV3UGN0IC0gcHJldlBjdDtcbiAgICAgICAgICAgICAgICAgICAgc3RlcHMgPSBwY3REaWZmZXJlbmNlIC8gKHBpcHMuZGVuc2l0eSB8fCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFN0ZXBzID0gTWF0aC5yb3VuZChzdGVwcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcmF0aW8gcmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHBlcmNlbnRhZ2Utc3BhY2UgYSBwb2ludCBpbmRpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBhIGRlbnNpdHkgMSB0aGUgcG9pbnRzL3BlcmNlbnRhZ2UgPSAxLiBGb3IgZGVuc2l0eSAyLCB0aGF0IHBlcmNlbnRhZ2UgbmVlZHMgdG8gYmUgcmUtZGl2aWRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUm91bmQgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IHRvIGFuIGV2ZW4gbnVtYmVyLCB0aGVuIGRpdmlkZSBieSB0d29cbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gc3ByZWFkIHRoZSBvZmZzZXQgb24gYm90aCBzaWRlcyBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplID0gcGN0RGlmZmVyZW5jZSAvIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2aWRlIGFsbCBwb2ludHMgZXZlbmx5LCBhZGRpbmcgdGhlIGNvcnJlY3QgbnVtYmVyIHRvIHRoaXMgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB1cCB0byA8PSBzbyB0aGF0IDEwMCUgZ2V0cyBhIHBvaW50LCBldmVudCBpZiBpZ25vcmVMYXN0IGlzIHNldC5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChxID0gMTsgcSA8PSByZWFsU3RlcHM7IHEgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJhdGlvIGJldHdlZW4gdGhlIHJvdW5kZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2l6ZSBtaWdodCBiZSB+MSUgb2ZmLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgYnkgdGhlIG51bWJlciBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlciBzdWJyYW5nZS4gZGVuc2l0eSA9IDEgd2lsbCByZXN1bHQgaW4gMTAwIHBvaW50cyBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bGwgcmFuZ2UsIDIgZm9yIDUwLCA0IGZvciAyNSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICAgICAgcGN0UG9zID0gcHJldlBjdCArIHEgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbcGN0UG9zLnRvRml4ZWQoNSldID0gW3Njb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhwY3RQb3MpLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHBvaW50IHR5cGUuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBncm91cC5pbmRleE9mKGkpID4gLTEgPyBleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWUgOiBpc1N0ZXBzID8gZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlIDogZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBFbmZvcmNlIHRoZSAnaWdub3JlRmlyc3QnIG9wdGlvbiBieSBvdmVyd3JpdGluZyB0aGUgdHlwZSBmb3IgMC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmRleCAmJiBpZ25vcmVGaXJzdCAmJiBpICE9PSBoaWdoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpID09PSBoaWdoICYmIGlnbm9yZUxhc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSAndHlwZScgb2YgdGhpcyBwb2ludC4gMCA9IHBsYWluLCAxID0gcmVhbCB2YWx1ZSwgMiA9IHN0ZXAgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW25ld1BjdC50b0ZpeGVkKDUpXSA9IFtpLCB0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHBlcmNlbnRhZ2UgY291bnQuXG4gICAgICAgICAgICAgICAgICAgIHByZXZQY3QgPSBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyRnVuYywgZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlU2l6ZUNsYXNzZXMgPSAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVMYXJnZSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlU3ViLFxuICAgICAgICAgICAgICAgIF9hKTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJTaXplQ2xhc3NlcyA9IChfYiA9IHt9LFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJTdWIsXG4gICAgICAgICAgICAgICAgX2IpO1xuICAgICAgICAgICAgdmFyIHZhbHVlT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVZlcnRpY2FsXTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLmNzc0NsYXNzZXMucGlwcyk7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLm9ydCA9PT0gMCA/IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzSG9yaXpvbnRhbCA6IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzVmVydGljYWwpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3Nlcyh0eXBlLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHNvdXJjZSA9PT0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbkNsYXNzZXMgPSBhID8gdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgOiBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNpemVDbGFzc2VzID0gYSA/IHZhbHVlU2l6ZUNsYXNzZXMgOiBtYXJrZXJTaXplQ2xhc3NlcztcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlICsgXCIgXCIgKyBvcmllbnRhdGlvbkNsYXNzZXNbb3B0aW9ucy5vcnRdICsgXCIgXCIgKyBzaXplQ2xhc3Nlc1t0eXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFNwcmVhZChvZmZzZXQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlciBmdW5jdGlvbiwgaWYgaXQgaXMgc2V0LlxuICAgICAgICAgICAgICAgIHR5cGUgPSBmaWx0ZXJGdW5jID8gZmlsdGVyRnVuYyh2YWx1ZSwgdHlwZSkgOiB0eXBlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBleHBvcnRzLlBpcHNUeXBlLk5vbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBtYXJrZXIgZm9yIGV2ZXJ5IHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyKTtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBvbmx5IGFwcGVuZGVkIGZvciBwb2ludHMgbWFya2VkICcxJyBvciAnMicuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoZm9ybWF0dGVyLnRvKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXBwZW5kIGFsbCBwb2ludHMuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcHJlYWQpLmZvckVhY2goZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGFkZFNwcmVhZChvZmZzZXQsIHNwcmVhZFtvZmZzZXRdWzBdLCBzcHJlYWRbb2Zmc2V0XVsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVBpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfUGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQoc2NvcGVfUGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfUGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGlwcyhwaXBzKSB7XG4gICAgICAgICAgICAvLyBGaXggIzY2OVxuICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgdmFyIHNwcmVhZCA9IGdlbmVyYXRlU3ByZWFkKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHBpcHMuZmlsdGVyO1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IHBpcHMuZm9ybWF0IHx8IHtcbiAgICAgICAgICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2NvcGVfUGlwcyA9IHNjb3BlX1RhcmdldC5hcHBlbmRDaGlsZChhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyLCBmb3JtYXQpKTtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9QaXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNob3J0aGFuZCBmb3IgYmFzZSBkaW1lbnNpb25zLlxuICAgICAgICBmdW5jdGlvbiBiYXNlU2l6ZSgpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2NvcGVfQmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciBhbHQgPSAoXCJvZmZzZXRcIiArIFtcIldpZHRoXCIsIFwiSGVpZ2h0XCJdW29wdGlvbnMub3J0XSk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vcnQgPT09IDAgPyByZWN0LndpZHRoIHx8IHNjb3BlX0Jhc2VbYWx0XSA6IHJlY3QuaGVpZ2h0IHx8IHNjb3BlX0Jhc2VbYWx0XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVyIGZvciBhdHRhY2hpbmcgZXZlbnRzIHRyb3VnaCBhIHByb3h5LlxuICAgICAgICBmdW5jdGlvbiBhdHRhY2hFdmVudChldmVudHMsIGVsZW1lbnQsIGNhbGxiYWNrLCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvICdmaWx0ZXInIGV2ZW50cyB0byB0aGUgc2xpZGVyLlxuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhIG5vZGUsIG5vdCBhIG5vZGVMaXN0XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBmaXhFdmVudChldmVudCwgZGF0YS5wYWdlT2Zmc2V0LCBkYXRhLnRhcmdldCB8fCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBmaXhFdmVudCByZXR1cm5zIGZhbHNlIGlmIHRoaXMgZXZlbnQgaGFzIGEgZGlmZmVyZW50IHRhcmdldFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gaGFuZGxpbmcgKG11bHRpLSkgdG91Y2ggZXZlbnRzO1xuICAgICAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvTm90UmVqZWN0IGlzIHBhc3NlZCBieSBhbGwgZW5kIGV2ZW50cyB0byBtYWtlIHN1cmUgcmVsZWFzZWQgdG91Y2hlc1xuICAgICAgICAgICAgICAgIC8vIGFyZSBub3QgcmVqZWN0ZWQsIGxlYXZpbmcgdGhlIHNsaWRlciBcInN0dWNrXCIgdG8gdGhlIGN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBhbiBhY3RpdmUgJ3RhcCcgdHJhbnNpdGlvbiBpcyB0YWtpbmcgcGxhY2UuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cyA9PT0gYWN0aW9ucy5zdGFydCAmJiBlLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhvdmVyICYmIGUuYnV0dG9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICdzdXBwb3J0c1Bhc3NpdmUnIGlzIG9ubHkgdHJ1ZSBpZiBhIGJyb3dzZXIgYWxzbyBzdXBwb3J0cyB0b3VjaC1hY3Rpb246IG5vbmUgaW4gQ1NTLlxuICAgICAgICAgICAgICAgIC8vIGlPUyBzYWZhcmkgZG9lcyBub3QsIHNvIGl0IGRvZXNuJ3QgZ2V0IHRvIGJlbmVmaXQgZnJvbSBwYXNzaXZlIHNjcm9sbGluZy4gaU9TIGRvZXMgc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uLCBidXQgdGhhdCBhbGxvd3MgcGFubmluZywgd2hpY2ggYnJlYWtzXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVycyBhZnRlciB6b29taW5nL29uIG5vbi1yZXNwb25zaXZlIHBhZ2VzLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzMzExMlxuICAgICAgICAgICAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5jYWxjUG9pbnQgPSBlLnBvaW50c1tvcHRpb25zLm9ydF07XG4gICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgZXZlbnQgaGFuZGxlciB3aXRoIHRoZSBldmVudCBbIGFuZCBhZGRpdGlvbmFsIGRhdGEgXS5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgIC8vIEJpbmQgYSBjbG9zdXJlIG9uIHRoZSB0YXJnZXQgZm9yIGV2ZXJ5IGV2ZW50IHR5cGUuXG4gICAgICAgICAgICBldmVudHMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG1ldGhvZCwgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKFtldmVudE5hbWUsIG1ldGhvZF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kcztcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm92aWRlIGEgY2xlYW4gZXZlbnQgd2l0aCBzdGFuZGFyZGl6ZWQgb2Zmc2V0IHZhbHVlcy5cbiAgICAgICAgZnVuY3Rpb24gZml4RXZlbnQoZSwgcGFnZU9mZnNldCwgZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEZpbHRlciB0aGUgZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIHR5cGUsIHdoaWNoIGNhbiBiZVxuICAgICAgICAgICAgLy8gdG91Y2gsIG1vdXNlIG9yIHBvaW50ZXIuIE9mZnNldCBjaGFuZ2VzIG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIG1hZGUgb24gYW4gZXZlbnQgc3BlY2lmaWMgYmFzaXMuXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIG1vdXNlID0gZS50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBwb2ludGVyID0gZS50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICAgICAgLy8gSUUxMCBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyB3aXRoIGEgcHJlZml4O1xuICAgICAgICAgICAgaWYgKGUudHlwZS5pbmRleE9mKFwiTVNQb2ludGVyXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFcnJvbmVvdXMgZXZlbnRzIHNlZW0gdG8gYmUgcGFzc2VkIGluIG9jY2FzaW9uYWxseSBvbiBpT1MvaVBhZE9TIGFmdGVyIHVzZXIgZmluaXNoZXMgaW50ZXJhY3Rpbmcgd2l0aFxuICAgICAgICAgICAgLy8gdGhlIHNsaWRlci4gVGhleSBhcHBlYXIgdG8gYmUgb2YgdHlwZSBNb3VzZUV2ZW50LCB5ZXQgdGhleSBkb24ndCBoYXZlIHVzdWFsIHByb3BlcnRpZXMgc2V0LiBJZ25vcmVcbiAgICAgICAgICAgIC8vIGV2ZW50cyB0aGF0IGhhdmUgbm8gdG91Y2hlcyBvciBidXR0b25zIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiAoIzEwNTcsICMxMDc5LCAjMTA5NSlcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIgJiYgIWUuYnV0dG9ucyAmJiAhZS50b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgb25lIGhhbmRsZSBzaG91bGQgYmUgY29uY2VybmVkIGFib3V0IGlzIHRoZSB0b3VjaGVzIHRoYXQgb3JpZ2luYXRlZCBvbiB0b3Agb2YgaXQuXG4gICAgICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgYSB0b3VjaCBvcmlnaW5hdGVkIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAgICAgdmFyIGlzVG91Y2hPblRhcmdldCA9IGZ1bmN0aW9uIChjaGVja1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBjaGVja1RvdWNoLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0YXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5jb250YWlucyh0YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jb21wb3NlZCAmJiBlLmNvbXBvc2VkUGF0aCgpLnNoaWZ0KCkgPT09IGV2ZW50VGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0b3VjaHN0YXJ0IGV2ZW50cywgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgc3RpbGwgbm8gbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgICAgIC8vIHRvdWNoIG9uIHRoZSB0YXJnZXQgc28gd2UgbG9vayBhbW9uZ3N0IGFsbCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUudG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IHN1cHBvcnQgbW9yZSB0aGFuIG9uZSB0b3VjaCBwZXIgaGFuZGxlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIG90aGVyIGNhc2VzLCBmaW5kIG9uIGNoYW5nZWRUb3VjaGVzIGlzIGVub3VnaC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoID0gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgaWYgdGhlIHRhcmdldCB0b3VjaCBoYXMgbm90IG1vdmVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2gucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQgfHwgZ2V0UGFnZU9mZnNldChzY29wZV9Eb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAobW91c2UgfHwgcG9pbnRlcikge1xuICAgICAgICAgICAgICAgIHggPSBlLmNsaWVudFggKyBwYWdlT2Zmc2V0Lng7XG4gICAgICAgICAgICAgICAgeSA9IGUuY2xpZW50WSArIHBhZ2VPZmZzZXQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQ7XG4gICAgICAgICAgICBlLnBvaW50cyA9IFt4LCB5XTtcbiAgICAgICAgICAgIGUuY3Vyc29yID0gbW91c2UgfHwgcG9pbnRlcjsgLy8gRml4ICM0MzVcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBhIGNvb3JkaW5hdGUgaW4gdGhlIGRvY3VtZW50IHRvIGEgcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNQb2ludFRvUGVyY2VudGFnZShjYWxjUG9pbnQpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNhbGNQb2ludCAtIG9mZnNldChzY29wZV9CYXNlLCBvcHRpb25zLm9ydCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobG9jYXRpb24gKiAxMDApIC8gYmFzZVNpemUoKTtcbiAgICAgICAgICAgIC8vIENsYW1wIHByb3Bvc2FsIGJldHdlZW4gMCUgYW5kIDEwMCVcbiAgICAgICAgICAgIC8vIE91dC1vZi1ib3VuZCBjb29yZGluYXRlcyBtYXkgb2NjdXIgd2hlbiAubm9VaS1iYXNlIHBzZXVkby1lbGVtZW50c1xuICAgICAgICAgICAgLy8gYXJlIHVzZWQgKGUuZy4gY29udGFpbmVkIGhhbmRsZXMgZmVhdHVyZSlcbiAgICAgICAgICAgIHByb3Bvc2FsID0gbGltaXQocHJvcG9zYWwpO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gcHJvcG9zYWwgOiBwcm9wb3NhbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGhhbmRsZSBjbG9zZXN0IHRvIGEgY2VydGFpbiBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2xvc2VzdEhhbmRsZShjbGlja2VkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzbWFsbGVzdERpZmZlcmVuY2UgPSAxMDA7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZmFsc2U7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlZCBoYW5kbGVzIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRGlzYWJsZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID0gTWF0aC5hYnMoaGFuZGxlUG9zaXRpb24gLSBjbGlja2VkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgICAgICB2YXIgY2xpY2tBdEVkZ2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPT09IDEwMCAmJiBzbWFsbGVzdERpZmZlcmVuY2UgPT09IDEwMDtcbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbmNlIHdpdGggdGhpcyBoYW5kbGUgaXMgc21hbGxlciB0aGFuIHRoZSBwcmV2aW91c2x5IGNoZWNrZWQgaGFuZGxlXG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDwgc21hbGxlc3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlckFmdGVyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDw9IHNtYWxsZXN0RGlmZmVyZW5jZSAmJiBjbGlja2VkUG9zaXRpb24gPiBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoaXNDbG9zZXIgfHwgaXNDbG9zZXJBZnRlciB8fCBjbGlja0F0RWRnZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgc21hbGxlc3REaWZmZXJlbmNlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlICdlbmQnIHdoZW4gYSBtb3VzZSBvciBwZW4gbGVhdmVzIHRoZSBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZG9jdW1lbnRMZWF2ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2VvdXRcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJIVE1MXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBtb3ZlbWVudCBvbiBkb2N1bWVudCBmb3IgaGFuZGxlIGFuZCByYW5nZSBkcmFnLlxuICAgICAgICBmdW5jdGlvbiBldmVudE1vdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNDk4XG4gICAgICAgICAgICAvLyBDaGVjayB2YWx1ZSBvZiAuYnV0dG9ucyBpbiAnc3RhcnQnIHRvIHdvcmsgYXJvdW5kIGEgYnVnIGluIElFMTAgbW9iaWxlIChkYXRhLmJ1dHRvbnNQcm9wZXJ0eSkuXG4gICAgICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzkyNzAwNS9tb2JpbGUtaWUxMC13aW5kb3dzLXBob25lLWJ1dHRvbnMtcHJvcGVydHktb2YtcG9pbnRlcm1vdmUtZXZlbnQtYWx3YXlzLXplcm9cbiAgICAgICAgICAgIC8vIElFOSBoYXMgLmJ1dHRvbnMgYW5kIC53aGljaCB6ZXJvIG9uIG1vdXNlbW92ZS5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggYnJlYWtzIHRoZSBzcGVjIE1ETiBkZWZpbmVzLlxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDlcIikgPT09IC0xICYmIGV2ZW50LmJ1dHRvbnMgPT09IDAgJiYgZGF0YS5idXR0b25zUHJvcGVydHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIG1vdmluZyB1cCBvciBkb3duXG4gICAgICAgICAgICB2YXIgbW92ZW1lbnQgPSAob3B0aW9ucy5kaXIgPyAtMSA6IDEpICogKGV2ZW50LmNhbGNQb2ludCAtIGRhdGEuc3RhcnRDYWxjUG9pbnQpO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgbW92ZW1lbnQgaW50byBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHNsaWRlciB3aWR0aC9oZWlnaHRcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChtb3ZlbWVudCAqIDEwMCkgLyBkYXRhLmJhc2VTaXplO1xuICAgICAgICAgICAgbW92ZUhhbmRsZXMobW92ZW1lbnQgPiAwLCBwcm9wb3NhbCwgZGF0YS5sb2NhdGlvbnMsIGRhdGEuaGFuZGxlTnVtYmVycywgZGF0YS5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQsIGNhbGwgY2FsbGJhY2tzLlxuICAgICAgICBmdW5jdGlvbiBldmVudEVuZChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhlIGhhbmRsZSBpcyBubyBsb25nZXIgYWN0aXZlLCBzbyByZW1vdmUgdGhlIGNsYXNzLlxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZGF0YS5oYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLCB3aGljaCBhcmUgYWRkZWQgb24gJ3N0YXJ0Jy5cbiAgICAgICAgICAgIGRhdGEubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Eb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjWzBdLCBjWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY3Vyc29yIHN0eWxlcyBhbmQgdGV4dC1zZWxlY3Rpb24gZXZlbnRzIGJvdW5kIHRvIHRoZSBib2R5LlxuICAgICAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXZlbnRzLnNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImVuZFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRTdGFydChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIGV2ZW50IGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMuc29tZShpc0hhbmRsZURpc2FibGVkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2RhdGEuaGFuZGxlTnVtYmVyc1swXV07XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gaGFuZGxlT3JpZ2luLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGhhbmRsZSBhcyAnYWN0aXZlJyBzbyBpdCBjYW4gYmUgc3R5bGVkLlxuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBIGRyYWcgc2hvdWxkIG5ldmVyIHByb3BhZ2F0ZSB1cCB0byB0aGUgJ3RhcCcgZXZlbnQuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLlxuICAgICAgICAgICAgdmFyIG1vdmVFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudE1vdmUsIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZXZlbnQgdGFyZ2V0IGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSBvcmlnaW5hbCBvbmUgc28gdGhhdCB3ZSBrZWVwXG4gICAgICAgICAgICAgICAgLy8gcmVseWluZyBvbiBpdCB0byBleHRyYWN0IHRhcmdldCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGRhdGEuY29ubmVjdCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBzdGFydENhbGNQb2ludDogZXZlbnQuY2FsY1BvaW50LFxuICAgICAgICAgICAgICAgIGJhc2VTaXplOiBiYXNlU2l6ZSgpLFxuICAgICAgICAgICAgICAgIHBhZ2VPZmZzZXQ6IGV2ZW50LnBhZ2VPZmZzZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNQcm9wZXJ0eTogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZW5kRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLmVuZCwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudEVuZCwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG91dEV2ZW50ID0gYXR0YWNoRXZlbnQoXCJtb3VzZW91dFwiLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50TGVhdmUsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIHB1c2hlZCB0aGUgbGlzdGVuZXJzIGluIHRoZSBsaXN0ZW5lciBsaXN0IHJhdGhlciB0aGFuIGNyZWF0aW5nXG4gICAgICAgICAgICAvLyBhIG5ldyBvbmUgYXMgaXQgaGFzIGFscmVhZHkgYmVlbiBwYXNzZWQgdG8gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2guYXBwbHkobGlzdGVuZXJzLCBtb3ZlRXZlbnQuY29uY2F0KGVuZEV2ZW50LCBvdXRFdmVudCkpO1xuICAgICAgICAgICAgLy8gVGV4dCBzZWxlY3Rpb24gaXNuJ3QgYW4gaXNzdWUgb24gdG91Y2ggZGV2aWNlcyxcbiAgICAgICAgICAgIC8vIHNvIGFkZGluZyBjdXJzb3Igc3R5bGVzIGNhbiBiZSBza2lwcGVkLlxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlICdJJyBjdXJzb3IgYW5kIGV4dGVuZCB0aGUgcmFuZ2UtZHJhZyBjdXJzb3IuXG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIHRhcmdldCB3aXRoIGEgZHJhZ2dpbmcgc3RhdGUuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0ZXh0IHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIC8vIEluIG5vVWlTbGlkZXIgPD0gOS4yLjAsIHRoaXMgd2FzIGhhbmRsZWQgYnkgY2FsbGluZyBwcmV2ZW50RGVmYXVsdCBvbiBtb3VzZS90b3VjaCBzdGFydC9tb3ZlLFxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIHNjcm9sbCBibG9ja2luZy4gVGhlIHNlbGVjdHN0YXJ0IGV2ZW50IGlzIHN1cHBvcnRlZCBieSBGaXJlRm94IHN0YXJ0aW5nIGZyb20gdmVyc2lvbiA1MixcbiAgICAgICAgICAgICAgICAvLyBtZWFuaW5nIHRoZSBvbmx5IGhvbGRvdXQgaXMgaU9TIFNhZmFyaS4gVGhpcyBkb2Vzbid0IG1hdHRlcjogdGV4dCBzZWxlY3Rpb24gaXNuJ3QgdHJpZ2dlcmVkIHRoZXJlLlxuICAgICAgICAgICAgICAgIC8vIFRoZSAnY3Vyc29yJyBmbGFnIGlzIGZhbHNlLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2VsZWN0c3RhcnRcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInN0YXJ0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGNsb3Nlc3QgaGFuZGxlIHRvIHRhcHBlZCBsb2NhdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRUYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoZSB0YXAgZXZlbnQgc2hvdWxkbid0IHByb3BhZ2F0ZSB1cFxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBnZXRDbG9zZXN0SGFuZGxlKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIC8vIFRhY2tsZSB0aGUgY2FzZSB0aGF0IGFsbCBoYW5kbGVzIGFyZSAnZGlzYWJsZWQnLlxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGbGFnIHRoZSBzbGlkZXIgYXMgaXQgaXMgbm93IGluIGEgdHJhbnNpdGlvbmFsIHN0YXRlLlxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0YWtlcyBhIGNvbmZpZ3VyYWJsZSBhbW91bnQgb2YgbXMgKGRlZmF1bHQgMzAwKS4gUmUtZW5hYmxlIHRoZSBzbGlkZXIgYWZ0ZXIgdGhhdC5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBwcm9wb3NhbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRTdGFydChldmVudCwgeyBoYW5kbGVOdW1iZXJzOiBbaGFuZGxlTnVtYmVyXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlcyBhICdob3ZlcicgZXZlbnQgZm9yIGEgaG92ZXJlZCBtb3VzZS9wZW4gcG9zaXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50SG92ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChwcm9wb3NhbCk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcImhvdmVyXCIgPT09IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlX1NlbGYsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBrZXlkb3duIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICAvLyBEb24ndCBtb3ZlIHRoZSBkb2N1bWVudCB3aGVuIHByZXNzaW5nIGFycm93IGtleXMgb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpIHx8IGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBob3Jpem9udGFsS2V5cyA9IFtcIkxlZnRcIiwgXCJSaWdodFwiXTtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNhbEtleXMgPSBbXCJEb3duXCIsIFwiVXBcIl07XG4gICAgICAgICAgICB2YXIgbGFyZ2VTdGVwS2V5cyA9IFtcIlBhZ2VEb3duXCIsIFwiUGFnZVVwXCJdO1xuICAgICAgICAgICAgdmFyIGVkZ2VLZXlzID0gW1wiSG9tZVwiLCBcIkVuZFwiXTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciAmJiAhb3B0aW9ucy5vcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhbiByaWdodC10by1sZWZ0IHNsaWRlciwgdGhlIGxlZnQgYW5kIHJpZ2h0IGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5vcnQgJiYgIW9wdGlvbnMuZGlyKSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYSB0b3AtdG8tYm90dG9tIHNsaWRlciwgdGhlIHVwIGFuZCBkb3duIGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgdmVydGljYWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBsYXJnZVN0ZXBLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0cmlwIFwiQXJyb3dcIiBmb3IgSUUgY29tcGF0aWJpbGl0eS4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5XG4gICAgICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5LnJlcGxhY2UoXCJBcnJvd1wiLCBcIlwiKTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlRG93biA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlVXAgPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMV07XG4gICAgICAgICAgICB2YXIgaXNEb3duID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSB8fCBpc0xhcmdlRG93bjtcbiAgICAgICAgICAgIHZhciBpc1VwID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMV0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1sxXSB8fCBpc0xhcmdlVXA7XG4gICAgICAgICAgICB2YXIgaXNNaW4gPSBrZXkgPT09IGVkZ2VLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTWF4ID0ga2V5ID09PSBlZGdlS2V5c1sxXTtcbiAgICAgICAgICAgIGlmICghaXNEb3duICYmICFpc1VwICYmICFpc01pbiAmJiAhaXNNYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdG87XG4gICAgICAgICAgICBpZiAoaXNVcCB8fCBpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNEb3duID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSBzdGVwc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgICAgIC8vIEF0IHRoZSBlZGdlIG9mIGEgc2xpZGVyLCBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBzdGVwIHNldCwgdXNlIHRoZSBkZWZhdWx0IG9mIDEwJSBvZiB0aGUgc3ViLXJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS5nZXREZWZhdWx0U3RlcChzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgaXNEb3duLCBvcHRpb25zLmtleWJvYXJkRGVmYXVsdFN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZVVwIHx8IGlzTGFyZ2VEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IGZvciBkb3duIHN0ZXBzXG4gICAgICAgICAgICAgICAgc3RlcCA9IChpc0Rvd24gPyAtMSA6IDEpICogc3RlcDtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdICsgc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTWF4KSB7XG4gICAgICAgICAgICAgICAgLy8gRW5kIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsW29wdGlvbnMuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhvbWUga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBldmVudHMgdG8gc2V2ZXJhbCBzbGlkZXIgcGFydHMuXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRTbGlkZXJFdmVudHMoYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHN0YW5kYXJkIGRyYWcgZXZlbnQgdG8gdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAoIWJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgYXJlIG9ubHkgYm91bmQgdG8gdGhlIHZpc3VhbCBoYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgbm90IHRoZSAncmVhbCcgb3JpZ2luIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGhhbmRsZS5jaGlsZHJlblswXSwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHRhcCBldmVudCB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLnRhcCkge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIHNjb3BlX0Jhc2UsIGV2ZW50VGFwLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJlIGhvdmVyIGV2ZW50c1xuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5ob3Zlcikge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfQmFzZSwgZXZlbnRIb3Zlciwge1xuICAgICAgICAgICAgICAgICAgICBob3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIHJhbmdlIGRyYWdnYWJsZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ID09PSBmYWxzZSB8fCBpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVCZWZvcmUgPSBzY29wZV9IYW5kbGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVBZnRlciA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRIb2xkZXJzID0gW2Nvbm5lY3RdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlc1RvRHJhZyA9IFtoYW5kbGVCZWZvcmUsIGhhbmRsZUFmdGVyXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBbaW5kZXggLSAxLCBpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKGNvbm5lY3QsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSByYW5nZSBpcyBmaXhlZCwgdGhlIGVudGlyZSByYW5nZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgZHJhZ2dlZCBieSB0aGUgaGFuZGxlcy4gVGhlIGhhbmRsZSBpbiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gb3JpZ2luIHdpbGwgcHJvcGFnYXRlIHRoZSBzdGFydCBldmVudCB1cHdhcmQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBuZWVkcyB0byBiZSBib3VuZCBtYW51YWxseSBvbiB0aGUgb3RoZXIuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUJlZm9yZS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVBZnRlci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzVG9EcmFnID0gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBzY29wZV9IYW5kbGVOdW1iZXJzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgZXZlbnRIb2xkZXIsIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzOiBoYW5kbGVzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGhhbmRsZU51bWJlcnNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggYW4gZXZlbnQgdG8gdGhpcyBzbGlkZXIsIHBvc3NpYmx5IGluY2x1ZGluZyBhIG5hbWVzcGFjZVxuICAgICAgICBmdW5jdGlvbiBiaW5kRXZlbnQobmFtZXNwYWNlZEV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gPSBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSB8fCBbXTtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGV2ZW50IGJvdW5kIGlzICd1cGRhdGUsJyBmaXJlIGl0IGltbWVkaWF0ZWx5IGZvciBhbGwgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmIChuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWxOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhIHx8IG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5kbyBhdHRhY2htZW50IG9mIGV2ZW50XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5hbWVzcGFjZWRFdmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmFtZXNwYWNlZEV2ZW50ICYmIG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnQgPyBuYW1lc3BhY2VkRXZlbnQuc3Vic3RyaW5nKGV2ZW50Lmxlbmd0aCkgOiBuYW1lc3BhY2VkRXZlbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdEV2ZW50ID0gYmluZC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgdmFyIHROYW1lc3BhY2UgPSBiaW5kLnN1YnN0cmluZyh0RXZlbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudCA9PT0gdEV2ZW50KSAmJiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZGVsZXRlIHByb3RlY3RlZCBpbnRlcm5hbCBldmVudCBpZiBpbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW50ZXJuYWxOYW1lc3BhY2UodE5hbWVzcGFjZSkgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGVfRXZlbnRzW2JpbmRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXh0ZXJuYWwgZXZlbnQgaGFuZGxpbmdcbiAgICAgICAgZnVuY3Rpb24gZmlyZUV2ZW50KGV2ZW50TmFtZSwgaGFuZGxlTnVtYmVyLCB0YXApIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUeXBlID0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzbGlkZXIgcHVibGljIEFQSSBhcyB0aGUgc2NvcGUgKCd0aGlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHZhbHVlcyBhcyBhcnJheSwgc28gYXJnXzFbYXJnXzJdIGlzIGFsd2F5cyB2YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBpbmRleCwgMCBvciAxXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW4tZm9ybWF0dGVkIHNsaWRlciB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50IGlzIGZpcmVkIGJ5IHRhcCwgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwIHx8IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlZnQgb2Zmc2V0IG9mIHRoZSBoYW5kbGUsIGluIHJlbGF0aW9uIHRvIHRoZSBzbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgdG8gYW4gYWNjZXNzaWJsZSBwYXJhbWV0ZXIgd2hlbiB0aGlzIGlzIHVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BsaXQgb3V0IHRoZSBoYW5kbGUgcG9zaXRpb25pbmcgbG9naWMgc28gdGhlIE1vdmUgZXZlbnQgY2FuIHVzZSBpdCwgdG9vXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSGFuZGxlUG9zaXRpb24ocmVmZXJlbmNlLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBnZXRWYWx1ZSwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZTtcbiAgICAgICAgICAgIC8vIEZvciBzbGlkZXJzIHdpdGggbXVsdGlwbGUgaGFuZGxlcywgbGltaXQgbW92ZW1lbnQgdG8gdGhlIG90aGVyIGhhbmRsZS5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBtYXJnaW4gb3B0aW9uIGJ5IGFkZGluZyBpdCB0byB0aGUgaGFuZGxlIHBvc2l0aW9ucy5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgIW9wdGlvbnMuZXZlbnRzLnVuY29uc3RyYWluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5tYXJnaW4sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubWFyZ2luLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBsaW1pdCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBlZmZlY3QsIGxpbWl0aW5nIGhhbmRsZXMgdG8gYVxuICAgICAgICAgICAgLy8gbWF4aW11bSBkaXN0YW5jZSBmcm9tIGFub3RoZXIuIExpbWl0IG11c3QgYmUgPiAwLCBhcyBvdGhlcndpc2VcbiAgICAgICAgICAgIC8vIGhhbmRsZXMgd291bGQgYmUgdW5tb3ZhYmxlLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubGltaXQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubGltaXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIHBhZGRpbmcgb3B0aW9uIGtlZXBzIHRoZSBoYW5kbGVzIGEgY2VydGFpbiBkaXN0YW5jZSBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gZWRnZXMgb2YgdGhlIHNsaWRlci4gUGFkZGluZyBtdXN0IGJlID4gMC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgwLCBvcHRpb25zLnBhZGRpbmdbMF0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDEwMCwgb3B0aW9ucy5wYWRkaW5nWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc21vb3RoU3RlcHMpIHtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGltaXQgcGVyY2VudGFnZSB0byB0aGUgMCAtIDEwMCByYW5nZVxuICAgICAgICAgICAgdG8gPSBsaW1pdCh0byk7XG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgaGFuZGxlIGNhbid0IG1vdmVcbiAgICAgICAgICAgIGlmICh0byA9PT0gcmVmZXJlbmNlW2hhbmRsZU51bWJlcl0gJiYgIWdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZXMgc2xpZGVyIG9yaWVudGF0aW9uIHRvIGNyZWF0ZSBDU1MgcnVsZXMuIGEgPSBiYXNlIHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBpblJ1bGVPcmRlcih2LCBhKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG9wdGlvbnMub3J0O1xuICAgICAgICAgICAgcmV0dXJuIChvID8gYSA6IHYpICsgXCIsIFwiICsgKG8gPyB2IDogYSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZXMgaGFuZGxlKHMpIGJ5IGEgcGVyY2VudGFnZVxuICAgICAgICAvLyAoYm9vbCwgJSB0byBtb3ZlLCBbJSB3aGVyZSBoYW5kbGUgc3RhcnRlZCwgLi4uXSwgW2luZGV4IGluIHNjb3BlX0hhbmRsZXMsIC4uLl0pXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIGxvY2F0aW9ucywgaGFuZGxlTnVtYmVycywgY29ubmVjdCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FscyA9IGxvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gU3RvcmUgZmlyc3QgaGFuZGxlIG5vdywgc28gd2Ugc3RpbGwgaGF2ZSBpdCBpbiBjYXNlIGhhbmRsZU51bWJlcnMgaXMgcmV2ZXJzZWRcbiAgICAgICAgICAgIHZhciBmaXJzdEhhbmRsZSA9IGhhbmRsZU51bWJlcnNbMF07XG4gICAgICAgICAgICB2YXIgc21vb3RoU3RlcHMgPSBvcHRpb25zLmV2ZW50cy5zbW9vdGhTdGVwcztcbiAgICAgICAgICAgIHZhciBiID0gWyF1cHdhcmQsIHVwd2FyZF07XG4gICAgICAgICAgICB2YXIgZiA9IFt1cHdhcmQsICF1cHdhcmRdO1xuICAgICAgICAgICAgLy8gQ29weSBoYW5kbGVOdW1iZXJzIHNvIHdlIGRvbid0IGNoYW5nZSB0aGUgZGF0YXNldFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycyA9IGhhbmRsZU51bWJlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSB3aGljaCBoYW5kbGUgaXMgJ2xlYWRpbmcnLlxuICAgICAgICAgICAgLy8gSWYgdGhhdCBvbmUgY2FuJ3QgbW92ZSB0aGUgc2Vjb25kIGNhbid0IGVpdGhlci5cbiAgICAgICAgICAgIGlmICh1cHdhcmQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgMTogZ2V0IHRoZSBtYXhpbXVtIHBlcmNlbnRhZ2UgdGhhdCBhbnkgb2YgdGhlIGhhbmRsZXMgY2FuIG1vdmVcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHByb3Bvc2FscywgaGFuZGxlTnVtYmVyLCBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIG9uZSBvZiB0aGUgaGFuZGxlcyBjYW4ndCBtb3ZlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IHRvIC0gcHJvcG9zYWxzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1c2luZyBvbmUgaGFuZGxlLCBjaGVjayBiYWNrd2FyZCBBTkQgZm9yd2FyZFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYiA9IGYgPSBbdHJ1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMjogVHJ5IHRvIHNldCB0aGUgaGFuZGxlcyB3aXRoIHRoZSBmb3VuZCBwZXJjZW50YWdlXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgIHN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgbG9jYXRpb25zW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKSB8fCBzdGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3RlcCAzOiBJZiBhIGhhbmRsZSBtb3ZlZCwgZmlyZSBldmVudHNcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGNvbm5lY3QsIHRoZW4gZmlyZSBkcmFnIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImRyYWdcIiwgZmlyc3RIYW5kbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUYWtlcyBhIGJhc2UgdmFsdWUgYW5kIGFuIG9mZnNldC4gVGhpcyBvZmZzZXQgaXMgdXNlZCBmb3IgdGhlIGNvbm5lY3QgYmFyIHNpemUuXG4gICAgICAgIC8vIEluIHRoZSBpbml0aWFsIGRlc2lnbiBmb3IgdGhpcyBmZWF0dXJlLCB0aGUgb3JpZ2luIGVsZW1lbnQgd2FzIDElIHdpZGUuXG4gICAgICAgIC8vIFVuZm9ydHVuYXRlbHksIGEgcm91bmRpbmcgYnVnIGluIENocm9tZSBtYWtlcyBpdCBpbXBvc3NpYmxlIHRvIGltcGxlbWVudCB0aGlzIGZlYXR1cmVcbiAgICAgICAgLy8gaW4gdGhpcyBtYW5uZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5ODIyM1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gYSAtIGIgOiBhO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc2NvcGVfTG9jYXRpb25zIGFuZCBzY29wZV9WYWx1ZXMsIHVwZGF0ZXMgdmlzdWFsIHN0YXRlXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvbnMuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgdmFsdWUgdG8gdGhlIHNsaWRlciBzdGVwcGluZy9yYW5nZS5cbiAgICAgICAgICAgIHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IHRyYW5zZm9ybURpcmVjdGlvbih0bywgMCkgLSBzY29wZV9EaXJPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNsYXRpb24gKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9IHRyYW5zbGF0ZVJ1bGU7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlciArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMgYmVmb3JlIHRoZSBzbGlkZXIgbWlkZGxlIGFyZSBzdGFja2VkIGxhdGVyID0gaGlnaGVyLFxuICAgICAgICAvLyBIYW5kbGVzIGFmdGVyIHRoZSBtaWRkbGUgbGF0ZXIgaXMgbG93ZXJcbiAgICAgICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgICAgICBmdW5jdGlvbiBzZXRaaW5kZXgoKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIHZhciB6SW5kZXggPSAzICsgKHNjb3BlX0hhbmRsZXMubGVuZ3RoICsgZGlyICogaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGUuekluZGV4ID0gU3RyaW5nKHpJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHN1Z2dlc3RlZCB2YWx1ZXMgYW5kIGFwcGx5IG1hcmdpbiwgc3RlcC5cbiAgICAgICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICAgICAgZnVuY3Rpb24gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGV4YWN0SW5wdXQsIHNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICBpZiAoIWV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzdHlsZSBhdHRyaWJ1dGUgZm9yIGNvbm5lY3Qgbm9kZXNcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAgICAgLy8gU2tpcCBjb25uZWN0cyBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmICghc2NvcGVfQ29ubmVjdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGwgPSAwO1xuICAgICAgICAgICAgdmFyIGggPSAxMDA7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBsID0gc2NvcGVfTG9jYXRpb25zW2luZGV4IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBoID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHVzZSB0d28gcnVsZXM6XG4gICAgICAgICAgICAvLyAndHJhbnNsYXRlJyB0byBjaGFuZ2UgdGhlIGxlZnQvdG9wIG9mZnNldDtcbiAgICAgICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcbiAgICAgICAgICAgIC8vIEFzIHRoZSBlbGVtZW50IGhhcyBhIHdpZHRoIG9mIDEwMCUsIGEgdHJhbnNsYXRpb24gb2YgMTAwJSBpcyBlcXVhbCB0byAxMDAlIG9mIHRoZSBwYXJlbnQgKC5ub1VpLWJhc2UpXG4gICAgICAgICAgICB2YXIgY29ubmVjdFdpZHRoID0gaCAtIGw7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICB2YXIgc2NhbGVSdWxlID0gXCJzY2FsZShcIiArIGluUnVsZU9yZGVyKGNvbm5lY3RXaWR0aCAvIDEwMCwgXCIxXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0c1tpbmRleF0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBhcnNlcyB2YWx1ZSBwYXNzZWQgdG8gLnNldCBtZXRob2QuIFJldHVybnMgY3VycmVudCB2YWx1ZSBpZiBub3QgcGFyc2UtYWJsZS5cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVRvVmFsdWUodG8sIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxuICAgICAgICAgICAgLy8gSW5wdXR0aW5nICdmYWxzZScgaXMgaW52YWxpZC5cbiAgICAgICAgICAgIGlmICh0byA9PT0gbnVsbCB8fCB0byA9PT0gZmFsc2UgfHwgdG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgZm9ybWF0dGVkIG51bWJlciB3YXMgcGFzc2VkLCBhdHRlbXB0IHRvIGRlY29kZSBpdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB0byA9IFN0cmluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuZm9ybWF0LmZyb20odG8pO1xuICAgICAgICAgICAgaWYgKHRvICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBwYXJzaW5nIHRoZSBudW1iZXIgZmFpbGVkLCB1c2UgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzTmFOKHRvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXQoaW5wdXQsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xuICAgICAgICAgICAgdmFyIGlzSW5pdCA9IHNjb3BlX0xvY2F0aW9uc1swXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gRXZlbnQgZmlyZXMgYnkgZGVmYXVsdFxuICAgICAgICAgICAgZmlyZVNldEV2ZW50ID0gZmlyZVNldEV2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmlyZVNldEV2ZW50O1xuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGlzIG9wdGlvbmFsLlxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbml0aWFsIHZhbHVlcyB3ZXJlIHNldCBiZWZvcmUgdXNpbmcgYW5pbWF0ZWQgcGxhY2VtZW50LlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZSAmJiAhaXNJbml0KSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcnN0IHBhc3MsIHdpdGhvdXQgbG9va0FoZWFkIGJ1dCB3aXRoIGxvb2tCYWNrd2FyZC4gVmFsdWVzIGFyZSBzZXQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZXNbaGFuZGxlTnVtYmVyXSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgZmFsc2UsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgaSA9IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICAvLyBTcHJlYWQgaGFuZGxlcyBldmVubHkgYWNyb3NzIHRoZSBzbGlkZXIgaWYgdGhlIHJhbmdlIGhhcyBubyBzaXplIChtaW49bWF4KVxuICAgICAgICAgICAgaWYgKGlzSW5pdCAmJiBzY29wZV9TcGVjdHJ1bS5oYXNOb1NpemUoKSkge1xuICAgICAgICAgICAgICAgIGV4YWN0SW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1swXSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhY2VfMSA9IDEwMCAvIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSBoYW5kbGVOdW1iZXIgKiBzcGFjZV8xO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWNvbmRhcnkgcGFzc2VzLiBOb3cgdGhhdCBhbGwgYmFzZSB2YWx1ZXMgYXJlIHNldCwgYXBwbHkgY29uc3RyYWludHMuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIGFsbCBoYW5kbGVzIHRvIGVuc3VyZSBjb25zdHJhaW50cyBhcmUgYXBwbGllZCBmb3IgdGhlIGVudGlyZSBzbGlkZXIgKElzc3VlICMxMDA5KVxuICAgICAgICAgICAgZm9yICg7IGkgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgdGhlIGV2ZW50IG9ubHkgZm9yIGhhbmRsZXMgdGhhdCByZWNlaXZlZCBhIG5ldyB2YWx1ZSwgYXMgcGVyICM1NzlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHNsaWRlciB0byBpbml0aWFsIHZhbHVlc1xuICAgICAgICBmdW5jdGlvbiB2YWx1ZVJlc2V0KGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdmFsdWUgZm9yIGEgc2luZ2xlIGhhbmRsZVxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHZhbHVlLCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBOdW1iZXIoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmICghKGhhbmRsZU51bWJlciA+PSAwICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29rIGJvdGggYmFja3dhcmQgYW5kIGZvcndhcmQsIHNpbmNlIHdlIGRvbid0IHdhbnQgdGhpcyBoYW5kbGUgdG8gXCJwdXNoXCIgb3RoZXIgaGFuZGxlcyAoIzk2MCk7XG4gICAgICAgICAgICAvLyBUaGUgZXhhY3RJbnB1dCBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBpZ25vcmUgc2xpZGVyIHN0ZXBwaW5nICgjNDM2KVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlR2V0KHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCA9PT0gdm9pZCAwKSB7IHVuZW5jb2RlZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGEgY29weSBvZiB0aGUgcmF3IHZhbHVlc1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9WYWx1ZXMubGVuZ3RoID09PSAxID8gc2NvcGVfVmFsdWVzWzBdIDogc2NvcGVfVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pO1xuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgaGFuZGxlIGlzIHVzZWQsIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgcHJvdGVjdGVkIGludGVybmFsIGxpc3RlbmVyc1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmNzc0NsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aGlsZSAoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQ2hpbGQoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIHNjb3BlX1RhcmdldC5ub1VpU2xpZGVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc25hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIG5leHQgdmFsdWUgaW4gdGhpcyBzdGVwIG1vdmVzIGludG8gdGhlIG5leHQgc3RlcCxcbiAgICAgICAgICAgIC8vIHRoZSBpbmNyZW1lbnQgaXMgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IHN0ZXAgLSB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgKyBpbmNyZW1lbnQgPiBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBiZXlvbmQgdGhlIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgaGFuZGxlIGlzIGF0IHRoZSBzdGFydCBvZiBhIHN0ZXAsIGl0IGFsd2F5cyBzdGVwcyBiYWNrIGludG8gdGhlIHByZXZpb3VzIHN0ZXAgZmlyc3RcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vdywgaWYgYXQgdGhlIHNsaWRlciBlZGdlcywgdGhlcmUgaXMgbm8gaW4vZGVjcmVtZW50XG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT09IDEwMCkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcyBwZXIgIzM5MSwgdGhlIGNvbXBhcmlzb24gZm9yIHRoZSBkZWNyZW1lbnQgc3RlcCBjYW4gaGF2ZSBzb21lIHJvdW5kaW5nIGlzc3Vlcy5cbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSBzY29wZV9TcGVjdHJ1bS5jb3VudFN0ZXBEZWNpbWFscygpO1xuICAgICAgICAgICAgLy8gUm91bmQgcGVyICMzOTFcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwgJiYgaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IE51bWJlcihpbmNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWNyZW1lbnQgIT09IG51bGwgJiYgZGVjcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IE51bWJlcihkZWNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZGVjcmVtZW50LCBpbmNyZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIHNpemUgZm9yIHRoZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwcygpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVOdW1iZXJzLm1hcChnZXROZXh0U3RlcHNGb3JIYW5kbGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0YWJsZTogbWFyZ2luLCBsaW1pdCwgcGFkZGluZywgc3RlcCwgcmFuZ2UsIGFuaW1hdGUsIHNuYXBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRpb25zVG9VcGRhdGUsIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgLy8gU3BlY3RydW0gaXMgY3JlYXRlZCB1c2luZyB0aGUgcmFuZ2UsIHNuYXAsIGRpcmVjdGlvbiBhbmQgc3RlcCBvcHRpb25zLlxuICAgICAgICAgICAgLy8gJ3NuYXAnIGFuZCAnc3RlcCcgY2FuIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICAvLyBJZiAnc25hcCcgYW5kICdzdGVwJyBhcmUgbm90IHBhc3NlZCwgdGhleSBzaG91bGQgcmVtYWluIHVuY2hhbmdlZC5cbiAgICAgICAgICAgIHZhciB2ID0gdmFsdWVHZXQoKTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVBYmxlID0gW1xuICAgICAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICAgICAgXCJsaW1pdFwiLFxuICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VcIixcbiAgICAgICAgICAgICAgICBcImFuaW1hdGVcIixcbiAgICAgICAgICAgICAgICBcInNuYXBcIixcbiAgICAgICAgICAgICAgICBcInN0ZXBcIixcbiAgICAgICAgICAgICAgICBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIFwicGlwc1wiLFxuICAgICAgICAgICAgICAgIFwidG9vbHRpcHNcIixcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cbiAgICAgICAgICAgIHVwZGF0ZUFibGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB1bmRlZmluZWQuIG51bGwgcmVtb3ZlcyB0aGUgdmFsdWUuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsT3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNUb1VwZGF0ZVtuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBuZXdPcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgICAgIC8vIExvYWQgbmV3IG9wdGlvbnMgaW50byB0aGUgc2xpZGVyIHN0YXRlXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lXSA9IG5ld09wdGlvbnNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY29wZV9TcGVjdHJ1bSA9IG5ld09wdGlvbnMuc3BlY3RydW07XG4gICAgICAgICAgICAvLyBMaW1pdCwgbWFyZ2luIGFuZCBwYWRkaW5nIGRlcGVuZCBvbiB0aGUgc3BlY3RydW0gYnV0IGFyZSBzdG9yZWQgb3V0c2lkZSBvZiBpdC4gKCM2NzcpXG4gICAgICAgICAgICBvcHRpb25zLm1hcmdpbiA9IG5ld09wdGlvbnMubWFyZ2luO1xuICAgICAgICAgICAgb3B0aW9ucy5saW1pdCA9IG5ld09wdGlvbnMubGltaXQ7XG4gICAgICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSBuZXdPcHRpb25zLnBhZGRpbmc7XG4gICAgICAgICAgICAvLyBVcGRhdGUgcGlwcywgcmVtb3ZlcyBleGlzdGluZy5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdG9vbHRpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUgY3VycmVudCBwb3NpdGlvbmluZyBzbyB2YWx1ZVNldCBmb3JjZXMgYW4gdXBkYXRlLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgICAgICB2YWx1ZVNldChpc1NldChvcHRpb25zVG9VcGRhdGUuc3RhcnQpID8gb3B0aW9uc1RvVXBkYXRlLnN0YXJ0IDogdiwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBzdGVwc1xuICAgICAgICBmdW5jdGlvbiBzZXR1cFNsaWRlcigpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBlbGVtZW50LCBpbml0aWFsaXplIEhUTUwgYW5kIHNldCBjbGFzc2VzLlxuICAgICAgICAgICAgLy8gQWRkIGhhbmRsZXMgYW5kIGNvbm5lY3QgZWxlbWVudHMuXG4gICAgICAgICAgICBzY29wZV9CYXNlID0gYWRkU2xpZGVyKHNjb3BlX1RhcmdldCk7XG4gICAgICAgICAgICBhZGRFbGVtZW50cyhvcHRpb25zLmNvbm5lY3QsIHNjb3BlX0Jhc2UpO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHVzZXIgZXZlbnRzLlxuICAgICAgICAgICAgYmluZFNsaWRlckV2ZW50cyhvcHRpb25zLmV2ZW50cyk7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHB1YmxpYyB2YWx1ZSBtZXRob2QgdG8gc2V0IHRoZSBzdGFydCB2YWx1ZXMuXG4gICAgICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmlhKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0dXBTbGlkZXIoKTtcbiAgICAgICAgdmFyIHNjb3BlX1NlbGYgPSB7XG4gICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICAgICAgc3RlcHM6IGdldE5leHRTdGVwcyxcbiAgICAgICAgICAgIG9uOiBiaW5kRXZlbnQsXG4gICAgICAgICAgICBvZmY6IHJlbW92ZUV2ZW50LFxuICAgICAgICAgICAgZ2V0OiB2YWx1ZUdldCxcbiAgICAgICAgICAgIHNldDogdmFsdWVTZXQsXG4gICAgICAgICAgICBzZXRIYW5kbGU6IHZhbHVlU2V0SGFuZGxlLFxuICAgICAgICAgICAgcmVzZXQ6IHZhbHVlUmVzZXQsXG4gICAgICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgICAgICBfX21vdmVIYW5kbGVzOiBmdW5jdGlvbiAodXB3YXJkLCBwcm9wb3NhbCwgaGFuZGxlTnVtYmVycykge1xuICAgICAgICAgICAgICAgIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogb3JpZ2luYWxPcHRpb25zLFxuICAgICAgICAgICAgdXBkYXRlT3B0aW9uczogdXBkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIHRhcmdldDogc2NvcGVfVGFyZ2V0LFxuICAgICAgICAgICAgcmVtb3ZlUGlwczogcmVtb3ZlUGlwcyxcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzOiByZW1vdmVUb29sdGlwcyxcbiAgICAgICAgICAgIGdldFBvc2l0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUb29sdGlwczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRPcmlnaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlwczogcGlwcywgLy8gSXNzdWUgIzU5NFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2NvcGVfU2VsZjtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBzdGFuZGFyZCBpbml0aWFsaXplclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBzbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAgICAgIGlmICh0YXJnZXQubm9VaVNsaWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogU2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHRoZSBvcHRpb25zIGFuZCBjcmVhdGUgdGhlIHNsaWRlciBlbnZpcm9ubWVudDtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB2YXIgYXBpID0gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB0YXJnZXQubm9VaVNsaWRlciA9IGFwaTtcbiAgICAgICAgcmV0dXJuIGFwaTtcbiAgICB9XG4gICAgdmFyIG5vdWlzbGlkZXIgPSB7XG4gICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXG4gICAgICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IGNsYXNzZXMsIGFsbG93cyBnbG9iYWwgY2hhbmdlcy5cbiAgICAgICAgLy8gVXNlIHRoZSBjc3NDbGFzc2VzIG9wdGlvbiBmb3IgY2hhbmdlcyB0byBvbmUgc2xpZGVyLlxuICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICBjcmVhdGU6IGluaXRpYWxpemUsXG4gICAgfTtcblxuICAgIGV4cG9ydHMuY3JlYXRlID0gaW5pdGlhbGl6ZTtcbiAgICBleHBvcnRzLmNzc0NsYXNzZXMgPSBjc3NDbGFzc2VzO1xuICAgIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbm91aXNsaWRlcjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IHtcbiAgcHVibGljIGNhcnRTdG9yYWdlOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9O1xuICBwdWJsaWMgY2FydENvdW50ZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBtb2RhbE92ZXJsYXk6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIG1vZGFsQnV0dG9uOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXJ0U3RvcmFnZSA9IHt9O1xuICAgIHRoaXMuY2FydENvdW50ZXIgPSAwO1xuICAgIHRoaXMubW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgICB0aGlzLm1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtcG9wdXBfX2J1dHRvbicpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBjYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRTdG9yYWdlJyk7XG4gICAgaWYgKGNhcnQpIHtcbiAgICAgIHRoaXMuY2FydFN0b3JhZ2UgPSBKU09OLnBhcnNlKGNhcnQpIGFzIHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XG4gICAgICB0aGlzLmNhcnRDb3VudGVyID0gT2JqZWN0LmtleXModGhpcy5jYXJ0U3RvcmFnZSkubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMubW9kYWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5tb2RhbE92ZXJsYXkpIHRoaXMubW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9KTtcblxuICAgIHRoaXMubW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfSk7XG4gIH1cblxuICBhZGQobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY2FydFN0b3JhZ2VbbmFtZV0pIHtcbiAgICAgIHRoaXMuY2FydFN0b3JhZ2VbbmFtZV0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0U3RvcmFnZVtuYW1lXSA9IDE7XG4gICAgfVxuICAgIHRoaXMuY2FydENvdW50ZXIgKz0gMTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydFN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnRTdG9yYWdlKSk7XG4gIH1cblxuICByZW1vdmUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY2FydFN0b3JhZ2VbbmFtZV0pIHtcbiAgICAgIHRoaXMuY2FydFN0b3JhZ2VbbmFtZV0gLT0gMTtcbiAgICAgIHRoaXMuY2FydENvdW50ZXIgLT0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FydFN0b3JhZ2VbbmFtZV0gPD0gMCkgZGVsZXRlIHRoaXMuY2FydFN0b3JhZ2VbbmFtZV07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRTdG9yYWdlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0U3RvcmFnZSkpO1xuICB9XG5cbiAgdG9nZ2xlKG5hbWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmNhcnRTdG9yYWdlW25hbWVdKSB7XG4gICAgICBkZWxldGUgdGhpcy5jYXJ0U3RvcmFnZVtuYW1lXTtcbiAgICAgIHRoaXMuY2FydENvdW50ZXIgLT0gMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2FydENvdW50ZXIgPj0gMjApIHtcbiAgICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FydFN0b3JhZ2VbbmFtZV0gPSAxO1xuICAgICAgdGhpcy5jYXJ0Q291bnRlciArPSAxO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydFN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnRTdG9yYWdlKSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNhcnRTdG9yYWdlID0ge307XG4gICAgdGhpcy5jYXJ0Q291bnRlciA9IDA7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnRTdG9yYWdlJyk7XG4gIH1cblxuICBzaG93TW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDYW1lcmFEYXRhIH0gZnJvbSAnLi4vLi4vZGF0YSc7XG5cbmludGVyZmFjZSBET01EcmF3IHtcbiAgZHJhdyhkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdLCBjYXJ0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckNhcmRzIGltcGxlbWVudHMgRE9NRHJhdyB7XG4gIGRyYXcoZGF0YTogQ2FtZXJhRGF0YSwgY2FydDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IHNvdXJjZUl0ZW1UZW1wOiBIVE1MVGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtY2FyZC10ZW1wbGF0ZScpO1xuXG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHAudGV4dENvbnRlbnQgPSAn0JjQt9Cy0LjQvdC40YLQtSwg0L/QviDQstCw0YjQtdC80YMg0LfQsNC/0YDQvtGB0YMg0YLQvtCy0LDRgNC+0LIg0L3QtdGCLic7XG4gICAgICBwLmNsYXNzTGlzdC5hZGQoJ3RleHQtbm8tY2FyZHMnKTtcblxuICAgICAgZnJhZ21lbnQuYXBwZW5kKHApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qgc291cmNlQ2xvbmUgPSBzb3VyY2VJdGVtVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBjb25zdCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX19pbWFnZScpO1xuICAgICAgICBpbWcuc3JjID0gYC4vaW1hZ2VzL2NhbWVyYXMvJHtpdGVtLmltZ30uanBnYDtcblxuICAgICAgICBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX19uYW1lJykudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgIHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX3ByaWNlJykudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlLnJlcGxhY2UoXG4gICAgICAgICAgLyhcXGQpKD89KD86XFxkXFxkXFxkKSskKS9nLCAvLyBSZXBsYWNlIDMgZGlnaXRzIHdpdGggdGhlbXNlbHZlcyArIG5vLWJyZWFrIHNwYWNlXG4gICAgICAgICAgJyQxXFx1MjAyZidcbiAgICAgICAgKTtcbiAgICAgICAgc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNob3AtY2FyZF9fbXBpeCcpLnRleHRDb250ZW50ID0gaXRlbS5tcGl4O1xuICAgICAgICBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX190eXBlJykudGV4dENvbnRlbnQgPSBpdGVtLnR5cGU7XG4gICAgICAgIHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX3N0YWInKS50ZXh0Q29udGVudCA9IGl0ZW0uc3RhYmlsaXphdGlvbjtcblxuICAgICAgICBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX19zdG9jaycpLnRleHRDb250ZW50ID0gaXRlbS5zdG9jayA/ICfQkiDQvdCw0LvQuNGH0LjQuCcgOiAn0J/QvtC0INC30LDQutCw0LcnO1xuICAgICAgICBpdGVtLnN0b2NrXG4gICAgICAgICAgPyBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX19zdG9jaycpLmNsYXNzTGlzdC5hZGQoJ3RleHQtaW4tc3RvY2snKVxuICAgICAgICAgIDogc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNob3AtY2FyZF9fc3RvY2snKS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW91dC1vZi1zdG9jaycpO1xuXG4gICAgICAgIHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWNhcmRfX2NhcnQnKS50ZXh0Q29udGVudCA9IGNhcnRbaXRlbS5uYW1lXSA/ICfQktGL0LHRgNCw0L3QviEnIDogJ9CSINC60L7RgNC30LjQvdGDJztcbiAgICAgICAgY2FydFtpdGVtLm5hbWVdXG4gICAgICAgICAgPyBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc2hvcC1jYXJkX19jYXJ0JykuY2xhc3NMaXN0LmFkZCgnYWRkZWQnKVxuICAgICAgICAgIDogc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNob3AtY2FyZF9fY2FydCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FkZGVkJyk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kKHNvdXJjZUNsb25lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWdvb2RzJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtZ29vZHMnKS5hcHBlbmQoZnJhZ21lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDYW1lcmFEYXRhIH0gZnJvbSAnLi4vLi4vZGF0YSc7XG5pbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuXG5pbnRlcmZhY2UgRmlsdGVyIHtcbiAgZmlsdGVyKGRhdGE6IENhbWVyYURhdGEpOiBDYW1lcmFEYXRhO1xuICBmaWx0ZXJzUmVzZXQoKTogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhRmlsdGVyIGltcGxlbWVudHMgRmlsdGVyIHtcbiAgcHJpdmF0ZSBzZWFyY2hCb3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHByaXZhdGUgbWFrZXJzTGlzdDogTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgcHJpdmF0ZSBwcmljZVNsaWRlcjogbm9VaVNsaWRlci50YXJnZXQ7XG4gIHByaXZhdGUgbXBpeFNsaWRlcjogbm9VaVNsaWRlci50YXJnZXQ7XG4gIHByaXZhdGUgdHlwZXNMaXN0OiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBwcml2YXRlIHN0YWJMaXN0OiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBwcml2YXRlIHN0b2NrQ2hlY2s6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHB1YmxpYyBjaGVja2JveGVzOiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3gnKTtcbiAgICB0aGlzLm1ha2Vyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfc2hvcFtuYW1lPVwibWFrZXJcIl0nKTtcbiAgICB0aGlzLnByaWNlU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtcHJpY2VfX3NsaWRlcicpO1xuICAgIHRoaXMubXBpeFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLW1waXhfX3NsaWRlcicpO1xuICAgIHRoaXMudHlwZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X3Nob3BbbmFtZT1cInR5cGVcIl0nKTtcbiAgICB0aGlzLnN0YWJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X3Nob3BbbmFtZT1cInN0YWJcIl0nKTtcbiAgICB0aGlzLnN0b2NrQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3hfc2hvcFtuYW1lPVwic3RvY2tcIl0nKTtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfc2hvcCcpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBjaGVja2JveGVzQ2hlY2tlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NoZWNrYm94ZXMnKSkgYXMgYm9vbGVhbltdO1xuICAgIGlmIChjaGVja2JveGVzQ2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goKGNoYm94LCBpZHgpID0+IHtcbiAgICAgICAgY2hib3guY2hlY2tlZCA9IGNoZWNrYm94ZXNDaGVja2VkW2lkeF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcHJpY2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJpY2VzJykpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgY29uc3QgbXBpeGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXBpeGVzJykpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgdGhpcy5wcmljZVNsaWRlci5ub1VpU2xpZGVyLnNldChwcmljZXMpO1xuICAgIHRoaXMubXBpeFNsaWRlci5ub1VpU2xpZGVyLnNldChtcGl4ZXMpO1xuICB9XG5cbiAgZmlsdGVyTmFtZShkYXRhOiBDYW1lcmFEYXRhKSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaEJveC52YWx1ZSkgcmV0dXJuIGRhdGE7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlbCkgPT4gZWwubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hCb3gudmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcbiAgfVxuXG4gIGZpbHRlck1ha2VyKGRhdGE6IENhbWVyYURhdGEpIHtcbiAgICBjb25zdCBtYWtlcnM6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5tYWtlcnNMaXN0LmZvckVhY2goKGNoYm94KSA9PiB7XG4gICAgICBpZiAoY2hib3guY2hlY2tlZCkgbWFrZXJzLnB1c2goY2hib3gudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG4gICAgaWYgKCFtYWtlcnMubGVuZ3RoKSByZXR1cm4gZGF0YTtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGVsKSA9PiBtYWtlcnMuaW5kZXhPZihlbC5tYW51ZmFjdHVyZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcbiAgfVxuXG4gIGZpbHRlclByaWNlKGRhdGE6IENhbWVyYURhdGEpIHtcbiAgICBjb25zdCBwcmljZXMgPSB0aGlzLnByaWNlU2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGVsKSA9PiBOdW1iZXIoZWwucHJpY2UpID49IHByaWNlc1swXSAmJiBOdW1iZXIoZWwucHJpY2UpIDw9IHByaWNlc1sxXSk7XG4gIH1cblxuICBmaWx0ZXJNcGl4KGRhdGE6IENhbWVyYURhdGEpIHtcbiAgICBjb25zdCBtcGl4ZXMgPSB0aGlzLm1waXhTbGlkZXIubm9VaVNsaWRlci5nZXQoKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigoZWwpID0+IE51bWJlcihlbC5tcGl4KSA+PSBtcGl4ZXNbMF0gJiYgTnVtYmVyKGVsLm1waXgpIDw9IG1waXhlc1sxXSk7XG4gIH1cblxuICBmaWx0ZXJUeXBlKGRhdGE6IENhbWVyYURhdGEpIHtcbiAgICBjb25zdCB0eXBlczogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLnR5cGVzTGlzdC5mb3JFYWNoKChjaGJveCkgPT4ge1xuICAgICAgaWYgKGNoYm94LmNoZWNrZWQpIHR5cGVzLnB1c2goY2hib3gudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG4gICAgaWYgKCF0eXBlcy5sZW5ndGgpIHJldHVybiBkYXRhO1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigoZWwpID0+IHR5cGVzLmluZGV4T2YoZWwudHlwZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xuICB9XG5cbiAgZmlsdGVyU3RhYihkYXRhOiBDYW1lcmFEYXRhKSB7XG4gICAgY29uc3Qgc3RhYnM6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5zdGFiTGlzdC5mb3JFYWNoKChjaGJveCkgPT4ge1xuICAgICAgaWYgKGNoYm94LmNoZWNrZWQpIHN0YWJzLnB1c2goY2hib3gudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG4gICAgaWYgKCFzdGFicy5sZW5ndGgpIHJldHVybiBkYXRhO1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigoZWwpID0+IHN0YWJzLmluZGV4T2YoZWwuc3RhYmlsaXphdGlvbi50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xuICB9XG5cbiAgZmlsdGVyU3RvY2soZGF0YTogQ2FtZXJhRGF0YSkge1xuICAgIGlmICghdGhpcy5zdG9ja0NoZWNrLmNoZWNrZWQpIHJldHVybiBkYXRhO1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigoZWwpID0+IGVsLnN0b2NrKTtcbiAgfVxuXG4gIGZpbHRlcnNSZXNldCgpIHtcbiAgICB0aGlzLm1ha2Vyc0xpc3QuZm9yRWFjaCgoY2hib3gpID0+IChjaGJveC5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLnByaWNlU2xpZGVyLm5vVWlTbGlkZXIuc2V0KFswLCA5OTk5OTldKTtcbiAgICB0aGlzLm1waXhTbGlkZXIubm9VaVNsaWRlci5zZXQoWzAsIDk5OTk5OV0pO1xuICAgIHRoaXMudHlwZXNMaXN0LmZvckVhY2goKGNoYm94KSA9PiAoY2hib3guY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5zdGFiTGlzdC5mb3JFYWNoKChjaGJveCkgPT4gKGNoYm94LmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuc3RvY2tDaGVjay5jaGVja2VkID0gZmFsc2U7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2hlY2tib3hlcycpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmljZXMnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXBpeGVzJyk7XG4gIH1cblxuICBmaWx0ZXIoZGF0YTogQ2FtZXJhRGF0YSk6IENhbWVyYURhdGEge1xuICAgIGxldCBmaWx0ZXJlZERhdGEgPSBkYXRhO1xuICAgIGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyTmFtZShmaWx0ZXJlZERhdGEpO1xuICAgIGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyTWFrZXIoZmlsdGVyZWREYXRhKTtcbiAgICBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlclByaWNlKGZpbHRlcmVkRGF0YSk7XG4gICAgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJNcGl4KGZpbHRlcmVkRGF0YSk7XG4gICAgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJUeXBlKGZpbHRlcmVkRGF0YSk7XG4gICAgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJTdGFiKGZpbHRlcmVkRGF0YSk7XG4gICAgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJTdG9jayhmaWx0ZXJlZERhdGEpO1xuICAgIHJldHVybiBmaWx0ZXJlZERhdGE7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XG5cbmludGVyZmFjZSBTbGlkZXIge1xuICBzbGlkZXJRdWVyeTogc3RyaW5nO1xuICBzbGlkZXJSYW5nZTogbnVtYmVyW107XG4gIHNsaWRlclN0ZXA6IG51bWJlcjtcbiAgc2xpZGVyVGFyZ2V0OiBub1VpU2xpZGVyLnRhcmdldDtcbiAgc3RhcnQ6ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogU2xpZGVyIHRha2VzIHNsaWRlclF1ZXJ5OiBjbGFzcyBvZiB0aGUgZnV0dXJlIHNsaWRlcixcbiAqIHNsaWRlclJhbmdlOiBhcnJheSBvZiBudW1iZXJzIG9mIHNsaWRlcidzIHJhbmdlIGFuZFxuICogc2xpZGVyU3RlcDogbWluaW1hbCBzdGVwIG9mIHRoZSBzbGlkZXIuXG4gKlxuICogSXQgd2lsbCBjb25uZWN0IHRoZSBzbGlkZXIgdG8gdGhlIHNsaWRlclF1ZXJ5X19sYWJlbHMtbG93XG4gKiBhbmQgc2xpZGVyUXVlcnlfX2xhYmVscy1oaWdoIGFzIHRoZWlyIGlucHV0IGxhYmVscy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFNsaWRlciBpbXBsZW1lbnRzIFNsaWRlciB7XG4gIHNsaWRlclF1ZXJ5OiBzdHJpbmc7XG4gIHNsaWRlclJhbmdlOiBudW1iZXJbXTtcbiAgc2xpZGVyU3RlcDogbnVtYmVyO1xuICBzbGlkZXJUYXJnZXQ6IG5vVWlTbGlkZXIudGFyZ2V0O1xuXG4gIGNvbnN0cnVjdG9yKHNsaWRlclF1ZXJ5OiBzdHJpbmcsIHNsaWRlclJhbmdlOiBudW1iZXJbXSwgc2xpZGVyU3RlcDogbnVtYmVyKSB7XG4gICAgdGhpcy5zbGlkZXJRdWVyeSA9IHNsaWRlclF1ZXJ5O1xuICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBzbGlkZXJSYW5nZTtcbiAgICB0aGlzLnNsaWRlclN0ZXAgPSBzbGlkZXJTdGVwO1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc2xpZGVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5zbGlkZXJRdWVyeX1fX3NsaWRlcmApO1xuICAgIGNvbnN0IHNsaWRlckxhYmVsczogSFRNTElucHV0RWxlbWVudFtdID0gW1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5zbGlkZXJRdWVyeX1fX2xhYmVscy1sb3dgKSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuc2xpZGVyUXVlcnl9X19sYWJlbHMtaGlnaGApLFxuICAgIF07XG5cbiAgICBub1VpU2xpZGVyLmNyZWF0ZSh0aGlzLnNsaWRlclRhcmdldCwge1xuICAgICAgc3RhcnQ6IFt0aGlzLnNsaWRlclJhbmdlWzBdLCB0aGlzLnNsaWRlclJhbmdlWzFdXSxcbiAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICByYW5nZToge1xuICAgICAgICBtaW46IHRoaXMuc2xpZGVyUmFuZ2VbMF0sXG4gICAgICAgIG1heDogdGhpcy5zbGlkZXJSYW5nZVsxXSxcbiAgICAgIH0sXG4gICAgICBzdGVwOiB0aGlzLnNsaWRlclN0ZXAsXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgZnJvbTogKGZvcm1hdHRlZFZhbHVlKSA9PiBOdW1iZXIoZm9ybWF0dGVkVmFsdWUpLFxuICAgICAgICB0bzogKG51bWVyaWNWYWx1ZSkgPT4gTWF0aC5yb3VuZChudW1lcmljVmFsdWUpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyVGFyZ2V0Lm5vVWlTbGlkZXIub24oXG4gICAgICAndXBkYXRlJyxcbiAgICAgICh2YWx1ZXMsIGhhbmRsZSkgPT4gKHNsaWRlckxhYmVsc1toYW5kbGVdLnZhbHVlID0gU3RyaW5nKHZhbHVlc1toYW5kbGVdKSlcbiAgICApO1xuICAgIHNsaWRlckxhYmVsc1swXS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNsaWRlclRhcmdldC5ub1VpU2xpZGVyLnNldChbc2xpZGVyTGFiZWxzWzBdLnZhbHVlLCBudWxsXSkpO1xuICAgIHNsaWRlckxhYmVsc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNsaWRlclRhcmdldC5ub1VpU2xpZGVyLnNldChbbnVsbCwgc2xpZGVyTGFiZWxzWzFdLnZhbHVlXSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDYW1lcmFEYXRhIH0gZnJvbSAnLi4vLi4vZGF0YSc7XG5cbmludGVyZmFjZSBTb3J0IHtcbiAgc29ydChkYXRhOiBDYW1lcmFEYXRhKTogQ2FtZXJhRGF0YTtcbiAgc29ydFJlc2V0KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRDYXJkcyBpbXBsZW1lbnRzIFNvcnQge1xuICBwdWJsaWMgc2hvcFNvcnRTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihxdWVyeTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaG9wU29ydFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGNvbnN0IHNvcnRPcmRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0T3JkZXInKTtcbiAgICBpZiAoc29ydE9yZGVyKSB7XG4gICAgICB0aGlzLnNob3BTb3J0U2VsZWN0LnZhbHVlID0gc29ydE9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0PFQgZXh0ZW5kcyBDYW1lcmFEYXRhPihkYXRhOiBUKTogVCB7XG4gICAgc3dpdGNoICh0aGlzLnNob3BTb3J0U2VsZWN0LnZhbHVlKSB7XG4gICAgICBjYXNlICduYW1lQVonOlxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lQVooZGF0YSk7XG4gICAgICBjYXNlICduYW1lWkEnOlxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lWkEoZGF0YSk7XG4gICAgICBjYXNlICdwcmljZVVwJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2VVcChkYXRhKTtcbiAgICAgIGNhc2UgJ3ByaWNlRG93bic6XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlRG93bihkYXRhKTtcbiAgICAgIGNhc2UgJ21waXhVcCc6XG4gICAgICAgIHJldHVybiB0aGlzLm1waXhVcChkYXRhKTtcbiAgICAgIGNhc2UgJ21waXhEb3duJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubXBpeERvd24oZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBuYW1lQVo8VCBleHRlbmRzIENhbWVyYURhdGE+KGRhdGE6IFQpOiBUIHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgbmFtZVpBPFQgZXh0ZW5kcyBDYW1lcmFEYXRhPihkYXRhOiBUKTogVCB7XG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4gYi5uYW1lLmxvY2FsZUNvbXBhcmUoYS5uYW1lKSk7XG4gIH1cblxuICBwcml2YXRlIHByaWNlVXA8VCBleHRlbmRzIENhbWVyYURhdGE+KGRhdGE6IFQpOiBUIHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYS5wcmljZSkgLSBOdW1iZXIoYi5wcmljZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmljZURvd248VCBleHRlbmRzIENhbWVyYURhdGE+KGRhdGE6IFQpOiBUIHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYi5wcmljZSkgLSBOdW1iZXIoYS5wcmljZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBtcGl4VXA8VCBleHRlbmRzIENhbWVyYURhdGE+KGRhdGE6IFQpOiBUIHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYS5tcGl4KSAtIE51bWJlcihiLm1waXgpKTtcbiAgfVxuXG4gIHByaXZhdGUgbXBpeERvd248VCBleHRlbmRzIENhbWVyYURhdGE+KGRhdGE6IFQpOiBUIHtcbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYi5tcGl4KSAtIE51bWJlcihhLm1waXgpKTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0UmVzZXQoKSB7XG4gICAgdGhpcy5zaG9wU29ydFNlbGVjdC52YWx1ZSA9ICduYW1lQVonO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzb3J0T3JkZXInKTtcbiAgfVxufVxuIiwiZXhwb3J0IHR5cGUgQ2FtZXJhRGF0YSA9IHtcbiAgbnVtOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbXBpeDogc3RyaW5nO1xuICBwcmljZTogc3RyaW5nO1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBzdGFiaWxpemF0aW9uOiBzdHJpbmc7XG4gIGltZzogc3RyaW5nO1xuICBzdG9jazogYm9vbGVhbjtcbn1bXTtcblxuY29uc3QgZGF0YTogQ2FtZXJhRGF0YSA9IFtcbiAge1xuICAgIG51bTogJzEnLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgNDAwMEQgMTgtNTUgREMgSUlJJyxcbiAgICBtcGl4OiAnMTgnLFxuICAgIHByaWNlOiAnMTI4OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fZW9zXzQwMDBkXzE4LTU1X2RjX2lpaV8zMDExYzAwNCcsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICcyJyxcbiAgICBuYW1lOiAnQ2Fub24gRU9TIDVEIE1hcmsgSVYgMjQtMTA1TCBJUyBJSScsXG4gICAgbXBpeDogJzMwJyxcbiAgICBwcmljZTogJzExMjk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdjYW5vbl9lb3NfNWRfbWFya19pdl8yNC0xMDVsX2lzX2lpX3VzbV9raXRfMTQ4M2MwMzAnLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMycsXG4gICAgbmFtZTogJ0Nhbm9uIEVPUyAyMDAwRCAxOC01NSBEQyBJSUknLFxuICAgIG1waXg6ICcyNCcsXG4gICAgcHJpY2U6ICcxNjg5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdjYW5vbl9lb3NfMjAwMGRfMTgtNTVfZGNfaWlpXzI3MjhjMDA3JyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzQnLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgMjUwRCBLaXQgMTgtNTUgSVMgV2hpdGUnLFxuICAgIG1waXg6ICcyNCcsXG4gICAgcHJpY2U6ICcyMjk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdjYW5vbl9lb3NfMjUwZF9raXRfMTgtNTVfaXNfd2hpdGVfMzQ1OGMwMDMnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzUnLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgNkQgTUsgSUkgQm9keScsXG4gICAgbXBpeDogJzI3JyxcbiAgICBwcmljZTogJzQ3MTYwJyxcbiAgICBtYW51ZmFjdHVyZXI6ICdDYW5vbicsXG4gICAgdHlwZTogJ9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX2Vvc182ZF9ta19paV9ib2R5JyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzYnLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgODAwRCAxOC01NSBJUyBTVE0gS2l0JyxcbiAgICBtcGl4OiAnMjQnLFxuICAgIHByaWNlOiAnMjkyOTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fZW9zXzgwMGRfMTgtNTVfaXNfc3RtX2tpdF8xODk1YzAxOScsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnNycsXG4gICAgbmFtZTogJ0Nhbm9uIEVPUyBDNzAgQ2luZW1hIENhbWVyYScsXG4gICAgbXBpeDogJzknLFxuICAgIHByaWNlOiAnMTY0OTg4JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdDYW5vbicsXG4gICAgdHlwZTogJ9Cx0LXQt9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX2Vvc19jNzBfY2luZW1hX2NhbWVyYScsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnOCcsXG4gICAgbmFtZTogJ0Nhbm9uIEVPUyBNMjAwICsgMTUtNDUgSVMgU1RNIFdoaXRlJyxcbiAgICBtcGl4OiAnMjQnLFxuICAgIHByaWNlOiAnMjA5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LrQvtC80L/QsNC60YInLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fZW9zX20yMDBfK18xNS00NV9pc19zdG1fd2hpdGVfMzcwMGMwMzInLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzknLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgTTUwIE1rMiArIDE1LTQ1IElTIFNUTSArIDU1LTIwMCBJUycsXG4gICAgbXBpeDogJzI0JyxcbiAgICBwcmljZTogJzM2Mzk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdDYW5vbicsXG4gICAgdHlwZTogJ9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Nhbm9uX2Vvc19tNTBfbWsyXytfMTUtNDVfaXNfc3RtX2tpdF93aGl0ZV80NzI5YzAyOCcsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMTAnLFxuICAgIG5hbWU6ICdDYW5vbiBFT1MgTTYgTWFyayBJSSArIDE1LTQ1IElTIFNUTSArIEVWRiBLaXQnLFxuICAgIG1waXg6ICczNCcsXG4gICAgcHJpY2U6ICc0MDE5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfQsdC10LfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdjYW5vbl9lb3NfbTZfbWFya19paV8rXzE1LTQ1X2lzX3N0bV8rX2V2Zl9raXRfYmxhY2tfMzYxMWMwNTMnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzExJyxcbiAgICBuYW1lOiAnQ2Fub24gWm9lbWluaSBTIFpWMTIzIE1iaycsXG4gICAgbXBpeDogJzgnLFxuICAgIHByaWNlOiAnNjQyNycsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfQutC+0LzQv9Cw0LrRgicsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C90LXRgicsXG4gICAgaW1nOiAnY2Fub25fem9lbWluaV9zX3p2MTIzX21iaycsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMTInLFxuICAgIG5hbWU6ICdDYW5vbiBQb3dlcnNob3QgRzUgWCBNYXJrIElJIEJsYWNrJyxcbiAgICBtcGl4OiAnMjAnLFxuICAgIHByaWNlOiAnMzM5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Nhbm9uJyxcbiAgICB0eXBlOiAn0LrQvtC80L/QsNC60YInLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fcG93ZXJzaG90X2c1X3hfbWFya19paV9ibGFja18zMDcwYzAxMycsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMTMnLFxuICAgIG5hbWU6ICdDYW5vbiBQb3dlclNob3QgU1g1NDAgSFMgQmxhY2snLFxuICAgIG1waXg6ICcyMCcsXG4gICAgcHJpY2U6ICcxMjM5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfRg9C70YzRgtGA0LDQt9GD0LwnLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fcG93ZXJzaG90X3N4NTQwX2hzX2JsYWNrXzEwNjdjMDEyJyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzE0JyxcbiAgICBuYW1lOiAnQ2Fub24gUG93ZXJTaG90IFpvb20nLFxuICAgIG1waXg6ICcxMicsXG4gICAgcHJpY2U6ICcxMjE5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnQ2Fub24nLFxuICAgIHR5cGU6ICfRg9C70YzRgtGA0LDQt9GD0LwnLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnY2Fub25fcG93ZXJzaG90X3pvb21fNDgzOGMwMDcnLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMTUnLFxuICAgIG5hbWU6ICdGdWppZmlsbSBJbnN0YXggTWluaSA5MCBCcm93biBFWCBEJyxcbiAgICBtcGl4OiAnMicsXG4gICAgcHJpY2U6ICc0OTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdGdWppZmlsbScsXG4gICAgdHlwZTogJ9C60L7QvNC/0LDQutGCJyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L3QtdGCJyxcbiAgICBpbWc6ICdmdWppZmlsbV9pbnN0YXhfbWluaV85MF9icm93bl9leF9kXzE2NDIzOTgxJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICcxNicsXG4gICAgbmFtZTogJ0Z1amlmaWxtIEluc3RheCBNaW5pIExpUGxheSBCbHVzaCBHb2xkJyxcbiAgICBtcGl4OiAnNScsXG4gICAgcHJpY2U6ICc1OTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdGdWppZmlsbScsXG4gICAgdHlwZTogJ9C60L7QvNC/0LDQutGCJyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L3QtdGCJyxcbiAgICBpbWc6ICdmdWppZmlsbV9pbnN0YXhfbWluaV9saXBsYXlfYmx1c2hfZ29sZF8xNjYzMTg0OScsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICcxNycsXG4gICAgbmFtZTogJ0Z1amlmaWxtIFgtUzEwKyBYRiAxNi04MG1tIEY0LjAgS2l0IEJsYWNrJyxcbiAgICBtcGl4OiAnMjYnLFxuICAgIHByaWNlOiAnNTczMzknLFxuICAgIG1hbnVmYWN0dXJlcjogJ0Z1amlmaWxtJyxcbiAgICB0eXBlOiAn0LHQtdC30LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvNCw0YLRgNC40YfQvdCw0Y8nLFxuICAgIGltZzogJ2Z1amlmaWxtX3gtczEwK194Zl8xNi04MG1tX2Y0XzBfa2l0X2JsYWNrXzE2NjcwMDc3JyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzE4JyxcbiAgICBuYW1lOiAnRnVqaWZpbG0gWC1UMzAgSUkgTWlycm9ybGVzcyBEaWdpdGFsIENhbWVyYScsXG4gICAgbXBpeDogJzI2JyxcbiAgICBwcmljZTogJzMyNDAwJyxcbiAgICBtYW51ZmFjdHVyZXI6ICdGdWppZmlsbScsXG4gICAgdHlwZTogJ9Cx0LXQt9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ2Z1amlmaWxtX3gtczEwK194Zl8xNi04MG1tX2Y0XzBfa2l0X2JsYWNrXzE2NjcwMDc3JyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICcxOScsXG4gICAgbmFtZTogJ0Z1amlmaWxtIFgtVDQgQm9keSBCbGFjaycsXG4gICAgbXBpeDogJzI2JyxcbiAgICBwcmljZTogJzY0NjU5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdGdWppZmlsbScsXG4gICAgdHlwZTogJ9Cx0LXQt9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0LzQsNGC0YDQuNGH0L3QsNGPJyxcbiAgICBpbWc6ICdmdWppZmlsbV94LXQ0X2JvZHlfYmxhY2tfMTY2NTA0NjcnLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMjAnLFxuICAgIG5hbWU6ICdOaWtvbiBEMzUwMCArIEFGLVAgMTgtNTUgTm9uIFZSJyxcbiAgICBtcGl4OiAnMjQnLFxuICAgIHByaWNlOiAnMTgyNTYnLFxuICAgIG1hbnVmYWN0dXJlcjogJ05pa29uJyxcbiAgICB0eXBlOiAn0LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvdC10YInLFxuICAgIGltZzogJ25pa29uX2QzNTAwXytfYWYtcF8xOC01NV9ub25fdnJfdmJhNTUwazAwMicsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICcyMScsXG4gICAgbmFtZTogJ05pa29uIEQ1NjAwIEtpdCBBRi1QIDE4LTU1IFZSJyxcbiAgICBtcGl4OiAnMjQnLFxuICAgIHByaWNlOiAnMjU0OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ05pa29uJyxcbiAgICB0eXBlOiAn0LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAnbmlrb25fZDU2MDBfa2l0X2FmLXBfMTgtNTVfdnJfdmJhNTAwazAwMScsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICcyMicsXG4gICAgbmFtZTogJ05pa29uIFogZmMgKyAxNi01MCBWUiBLaXQnLFxuICAgIG1waXg6ICcyMScsXG4gICAgcHJpY2U6ICczNDM5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnTmlrb24nLFxuICAgIHR5cGU6ICfQsdC10LfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICduaWtvbl96X2ZjXytfMTYtNTBfdnJfa2l0X3ZvYTA5MGswMDInLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzIzJyxcbiAgICBuYW1lOiAnTmlrb24gWjcgMjQtNzAgZjQgS2l0JyxcbiAgICBtcGl4OiAnNDYnLFxuICAgIHByaWNlOiAnMTE2OTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdOaWtvbicsXG4gICAgdHlwZTogJ9Cx0LXQt9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0LzQsNGC0YDQuNGH0L3QsNGPJyxcbiAgICBpbWc6ICduaWtvbl96N18yNC03MF9mNF9raXRfdm9hMDEwazAwMScsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMjQnLFxuICAgIG5hbWU6ICdOaWtvbiBENS1iIEJvZHkgKENGKScsXG4gICAgbXBpeDogJzIxJyxcbiAgICBwcmljZTogJzE0MDM5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnTmlrb24nLFxuICAgIHR5cGU6ICfQt9C10YDQutCw0LvRjNC90YvQuScsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C80LDRgtGA0LjRh9C90LDRjycsXG4gICAgaW1nOiAnbmlrb25fZDUtYl9ib2R5X2NmX3ZiYTQ2MGJlJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICcyNScsXG4gICAgbmFtZTogJ1BhbmFzb25pYyBMVU1JWCBEQy1GWjgyRUUtSyBCbGFjaycsXG4gICAgbXBpeDogJzE4JyxcbiAgICBwcmljZTogJzEwOTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdQYW5hc29uaWMnLFxuICAgIHR5cGU6ICfRg9C70YzRgtGA0LDQt9GD0LwnLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAncGFuYXNvbmljX2x1bWl4X2RjLWZ6ODJlZS1rX2JsYWNrJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICcyNicsXG4gICAgbmFtZTogJ1BhbmFzb25pYyBMVU1JWCBEQy1GWjEwMDAyRUUnLFxuICAgIG1waXg6ICcyMScsXG4gICAgcHJpY2U6ICcyMjk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnUGFuYXNvbmljJyxcbiAgICB0eXBlOiAn0LrQvtC80L/QsNC60YInLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAncGFuYXNvbmljX2x1bWl4X2RjLWZ6MTAwMDJlZScsXG4gICAgc3RvY2s6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMjcnLFxuICAgIG5hbWU6ICdQYW5hc29uaWMgTFVNSVggREMtRzkwTUVFLUsgS2l0IDEyLTYwbW0nLFxuICAgIG1waXg6ICcyMScsXG4gICAgcHJpY2U6ICczMDk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnUGFuYXNvbmljJyxcbiAgICB0eXBlOiAn0LHQtdC30LfQtdGA0LrQsNC70YzQvdGL0LknLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvtC/0YLQuNGH0LXRgdC60LDRjycsXG4gICAgaW1nOiAncGFuYXNvbmljX2x1bWl4X2RjLWc5MG1lZS1rX2tpdF8xMi02MG1tX2JsYWNrJyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzI4JyxcbiAgICBuYW1lOiAnUGFuYXNvbmljIExVTUlYIERDLVRaMjAwRUUtSyBCbGFjaycsXG4gICAgbXBpeDogJzIwJyxcbiAgICBwcmljZTogJzIxOTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdQYW5hc29uaWMnLFxuICAgIHR5cGU6ICfQutC+0LzQv9Cw0LrRgicsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdwYW5hc29uaWNfbHVtaXhfZGMtdHoyMDBlZS1rX2JsYWNrJyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzI5JyxcbiAgICBuYW1lOiAnUGFuYXNvbmljIExVTUlYIERNQy1GVDMwRUUtQSBCbHVlJyxcbiAgICBtcGl4OiAnMTYnLFxuICAgIHByaWNlOiAnNzQ5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnUGFuYXNvbmljJyxcbiAgICB0eXBlOiAn0LrQvtC80L/QsNC60YInLFxuICAgIHN0YWJpbGl6YXRpb246ICfQvdC10YInLFxuICAgIGltZzogJ3BhbmFzb25pY19sdW1peF9kbWMtZnQzMGVlLWFfYmx1ZScsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICczMCcsXG4gICAgbmFtZTogJ1BhbmFzb25pYyBMVU1JWCBETUMtTFgxNUVFSycsXG4gICAgbXBpeDogJzIwJyxcbiAgICBwcmljZTogJzE2OTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdQYW5hc29uaWMnLFxuICAgIHR5cGU6ICfQutC+0LzQv9Cw0LrRgicsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdwYW5hc29uaWNfbHVtaXhfZG1jLWx4MTVlZWsnLFxuICAgIHN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbnVtOiAnMzEnLFxuICAgIG5hbWU6ICdQYW5hc29uaWMgTFVNSVggRE1DLVRaMTAwRUVLJyxcbiAgICBtcGl4OiAnMjAnLFxuICAgIHByaWNlOiAnMTU5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ1BhbmFzb25pYycsXG4gICAgdHlwZTogJ9C60L7QvNC/0LDQutGCJyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ3BhbmFzb25pY19sdW1peF9kbWMtdHoxMDBlZWsnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzMyJyxcbiAgICBuYW1lOiAnU29ueSBBbHBoYSA3TTQgMjgtNzBtbSBLaXQgQmxhY2snLFxuICAgIG1waXg6ICcyMScsXG4gICAgcHJpY2U6ICczMDk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnU29ueScsXG4gICAgdHlwZTogJ9Cx0LXQt9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ3NvbnlfYWxwaGFfN200XzI4LTcwbW1fa2l0X2JsYWNrX2lsY2U3bTRrYl9jZWMnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzMzJyxcbiAgICBuYW1lOiAnU29ueSBBbHBoYSA5TTIgQm9keSBCbGFjaycsXG4gICAgbXBpeDogJzI4JyxcbiAgICBwcmljZTogJzE0OTk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnU29ueScsXG4gICAgdHlwZTogJ9Cx0LXQt9C30LXRgNC60LDQu9GM0L3Ri9C5JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ3NvbnlfYWxwaGFfOW0yX2JvZHlfYmxhY2tfaWxjZTltMmJfY2VjJyxcbiAgICBzdG9jazogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG51bTogJzM0JyxcbiAgICBuYW1lOiAnU29ueSBDeWJlci1TaG90IEgzMDAgQmxhY2snLFxuICAgIG1waXg6ICcyMCcsXG4gICAgcHJpY2U6ICc3OTk5JyxcbiAgICBtYW51ZmFjdHVyZXI6ICdTb255JyxcbiAgICB0eXBlOiAn0YPQu9GM0YLRgNCw0LfRg9C8JyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ3NvbnlfY3liZXItc2hvdF9oMzAwX2JsYWNrX2RzY2gzMDBfcnUzJyxcbiAgICBzdG9jazogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBudW06ICczNScsXG4gICAgbmFtZTogJ1NvbnkgQ3liZXItU2hvdCBSWDEwIE1rSVYnLFxuICAgIG1waXg6ICcyMScsXG4gICAgcHJpY2U6ICc1OTk5OScsXG4gICAgbWFudWZhY3R1cmVyOiAnU29ueScsXG4gICAgdHlwZTogJ9C60L7QvNC/0LDQutGCJyxcbiAgICBzdGFiaWxpemF0aW9uOiAn0L7Qv9GC0LjRh9C10YHQutCw0Y8nLFxuICAgIGltZzogJ3NvbnlfY3liZXItc2hvdF9yeDEwX21raXZfZHNjcngxMG00X3J1MycsXG4gICAgc3RvY2s6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBudW06ICczNicsXG4gICAgbmFtZTogJ1NvbnkgQ3liZXItU2hvdCBSWDEwMCBNa1ZBIEJsYWNrJyxcbiAgICBtcGl4OiAnMjAnLFxuICAgIHByaWNlOiAnMzM5OTknLFxuICAgIG1hbnVmYWN0dXJlcjogJ1NvbnknLFxuICAgIHR5cGU6ICfQutC+0LzQv9Cw0LrRgicsXG4gICAgc3RhYmlsaXphdGlvbjogJ9C+0L/RgtC40YfQtdGB0LrQsNGPJyxcbiAgICBpbWc6ICdzb255X2N5YmVyLXNob3RfcngxMDBfbWt2YV9ibGFja19kc2NyeDEwMG01YV9ydTMnLFxuICAgIHN0b2NrOiBmYWxzZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cblxuaW1wb3J0IHsgQ2FtZXJhRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgU2hvcFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvdHMvX3Nob3Atc2xpZGVyJztcbmltcG9ydCBSZW5kZXJDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvdHMvX3Nob3AtY2FyZHMnO1xuaW1wb3J0IENhbWVyYUZpbHRlciBmcm9tICcuL2NvbXBvbmVudHMvdHMvX3Nob3AtZmlsdGVyJztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5cbmltcG9ydCAnLi9nbG9iYWwuc2Nzcyc7XG5pbXBvcnQgU29ydENhcmRzIGZyb20gJy4vY29tcG9uZW50cy90cy9fc2hvcC1zb3J0JztcbmltcG9ydCBDYXJ0IGZyb20gJy4vY29tcG9uZW50cy90cy9fY2FydCc7XG5cbmNvbnN0IHByaWNlU2xpZGVyID0gbmV3IFNob3BTbGlkZXIoJ3Nob3AtcHJpY2UnLCBbNDk5OSwgMTY0OTg4XSwgMSk7XG5jb25zdCBtcGl4U2xpZGVyID0gbmV3IFNob3BTbGlkZXIoJ3Nob3AtbXBpeCcsIFsyLCA0Nl0sIDEpO1xuY29uc3QgY2FydFRleHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX3RleHQnKTtcblxuY29uc3QgY2FyZHMgPSBuZXcgUmVuZGVyQ2FyZHMoKTtcbmNvbnN0IHNvcnQgPSBuZXcgU29ydENhcmRzKCcuc2hvcC1zb3J0X19zZWxlY3QnKTtcbmNvbnN0IGZpbHRlcnMgPSBuZXcgQ2FtZXJhRmlsdGVyKCk7XG5cbmNvbnN0IGNhcnQgPSBuZXcgQ2FydCgpO1xuXG5sZXQgZmlsdGVyZWREYXRhOiBDYW1lcmFEYXRhO1xuXG4vLyBFdmVudGxpc3RlbmVyIGZvciBzb3J0aW5nIGxpc3RcbnNvcnQuc2hvcFNvcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydE9yZGVyJywgc29ydC5zaG9wU29ydFNlbGVjdC52YWx1ZSk7XG4gIGRyYXcoKTtcbn0pO1xuXG4vLyBFdmVudGxpc3RlbmVyIGZvciBzZWFyY2ggYm94XG5jb25zdCBzZWFyY2hCb3g6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCcpO1xuY29uc3Qgc2VhcmNoQ2xlYXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNsZWFyJyk7XG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gIHNlYXJjaEJveC52YWx1ZSA/IHNlYXJjaEJveC5jbGFzc0xpc3QuYWRkKCd3aXRoLWNsZWFyJykgOiBzZWFyY2hCb3guY2xhc3NMaXN0LnJlbW92ZSgnd2l0aC1jbGVhcicpO1xuICBkcmF3KCk7XG59KTtcbnNlYXJjaENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzZWFyY2hCb3gudmFsdWUgPSAnJztcbiAgc2VhcmNoQm94LmNsYXNzTGlzdC5yZW1vdmUoJ3dpdGgtY2xlYXInKTtcbiAgc2VhcmNoQm94LmZvY3VzKCk7XG4gIGRyYXcoKTtcbn0pO1xuXG4vLyBFdmVudGxpc3RlbmVyIGZvciBmaWx0ZXIgY2hlY2tib3hlc1xuY29uc3Qgc2hvcE9wdGlvbnM6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3Atb3B0aW9ucycpO1xuc2hvcE9wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94X3Nob3AnKSkge1xuICAgIGNvbnN0IGNoZWNrYm94ZXNDaGVja2VkOiBib29sZWFuW10gPSBbXTtcbiAgICBmaWx0ZXJzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hib3gsIGlkeCkgPT4ge1xuICAgICAgY2hlY2tib3hlc0NoZWNrZWRbaWR4XSA9IGNoYm94LmNoZWNrZWQ7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoZWNrYm94ZXMnLCBKU09OLnN0cmluZ2lmeShjaGVja2JveGVzQ2hlY2tlZCkpO1xuICAgIGRyYXcoKTtcbiAgfVxufSk7XG5cbi8vIEV2ZW50bGlzdGVuZXIgZm9yIHNsaWRlcnNcbnByaWNlU2xpZGVyLnNsaWRlclRhcmdldC5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gIGRyYXcoKTtcbn0pO1xucHJpY2VTbGlkZXIuc2xpZGVyVGFyZ2V0Lm5vVWlTbGlkZXIub24oJ3NldCcsICgpID0+IHtcbiAgY29uc3QgcHJpY2VzID0gcHJpY2VTbGlkZXIuc2xpZGVyVGFyZ2V0Lm5vVWlTbGlkZXIuZ2V0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaWNlcycsIEpTT04uc3RyaW5naWZ5KHByaWNlcykpO1xufSk7XG5cbm1waXhTbGlkZXIuc2xpZGVyVGFyZ2V0Lm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgZHJhdygpO1xufSk7XG5tcGl4U2xpZGVyLnNsaWRlclRhcmdldC5ub1VpU2xpZGVyLm9uKCdzZXQnLCAoKSA9PiB7XG4gIGNvbnN0IG1waXhlcyA9IG1waXhTbGlkZXIuc2xpZGVyVGFyZ2V0Lm5vVWlTbGlkZXIuZ2V0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21waXhlcycsIEpTT04uc3RyaW5naWZ5KG1waXhlcykpO1xufSk7XG5cbi8vIEV2ZW50bGlzdGVuZXIgZm9yIGZpbHRlciByZXNldCBidXR0b25cbmNvbnN0IGZpbHRlclJlc2V0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLXJlc2V0LWZpbHRlcnMnKTtcbmZpbHRlclJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmaWx0ZXJzLmZpbHRlcnNSZXNldCgpO1xuICBkcmF3KCk7XG59KTtcblxuLy8gRXZlbnRsaXN0ZW5lciBmb3IgYWxsIHJlc2V0IGJ1dHRvblxuY29uc3QgYWxsUmVzZXQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtcmVzZXQtc3RvcmFnZScpO1xuYWxsUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZpbHRlcnMuZmlsdGVyc1Jlc2V0KCk7XG4gIHNvcnQuc29ydFJlc2V0KCk7XG4gIGNhcnQuY2xlYXIoKTtcbiAgZHJhdygpO1xufSk7XG5cbi8vIEV2ZW50bGlzdGVuZXIgZm9yIGNhcnQgdG9nZ2xlXG5jb25zdCBzaG9wR29vZHM6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtZ29vZHMnKTtcbnNob3BHb29kcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9ICg8SFRNTEVsZW1lbnQ+ZS50YXJnZXQpLmNsb3Nlc3QoJy5zaG9wLWNhcmQnKTtcbiAgaWYgKHRhcmdldCkge1xuICAgIGNhcnQudG9nZ2xlKCg8SFRNTEVsZW1lbnQ+dGFyZ2V0LmNoaWxkcmVuWzFdKS5pbm5lclRleHQpOyAvL0ZpbmRzIG5hbWUgb2YgYSBjYXJkXG4gICAgZHJhdygpO1xuICB9XG59KTtcblxuLy8gRHJhdy9yZWRyYXcgY2FyZHNcbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIGZpbHRlcmVkRGF0YSA9IGZpbHRlcnMuZmlsdGVyKGRhdGEpO1xuICBjb25zdCBzb3J0ZWREYXRhOiBDYW1lcmFEYXRhID0gc29ydC5zb3J0KGZpbHRlcmVkRGF0YSk7XG4gIGNhcmRzLmRyYXcoc29ydGVkRGF0YSwgY2FydC5jYXJ0U3RvcmFnZSk7XG5cbiAgY2FydC5jYXJ0Q291bnRlciA/IGNhcnRUZXh0LmNsYXNzTGlzdC5hZGQoJ2hhcy1pdGVtcycpIDogY2FydFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWl0ZW1zJyk7XG4gIGNhcnRUZXh0LmlubmVyVGV4dCA9IFN0cmluZyhjYXJ0LmNhcnRDb3VudGVyKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==