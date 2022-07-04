/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".news__container {\n  display: flex;\n  flex-direction: column;\n  max-width: 1180px;\n  width: 95vw;\n  margin: 40px auto;\n}\n\n.news__info {\n  font-weight: 700;\n  font-size: 1.7rem;\n  align-self: center;\n  color: #00009D;\n}\n\n.news__grid {\n  margin: 0 auto;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"first first second second\"\n    \"first first third fourth\";\n}\n\n@media (max-width: 864px) {\n  .news__grid {\n    grid-template-areas:\n      \"first first first first\"\n      \"second second second second\"\n      \"third third fourth fourth\";\n  }\n}\n\n.news__flex {\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.news__item-grid {\n  display: flex;\n  border-radius: 5px;\n  background: linear-gradient(358.86deg, #000000 0.9%, rgba(0, 0, 0, 0) 31.55%);\n  flex-direction: column;\n  justify-content: flex-end;\n  color: #fff;\n  text-decoration: none;\n  transition: 0.25s;\n}\n\n.news__item-grid:hover,\n.news__item-grid:focus {\n  transform: scale(1.008);\n  box-shadow: 0 0.4em 0.4em -0.2em rgba(0, 0, 157, 0.3);\n}\n\n.news__container-grid {\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.news__item-grid:first-child {\n  grid-area: first;\n  min-height: 350px;\n}\n\n.news__item-grid:nth-child(2) {\n  grid-area: second;\n  min-height: 350px;\n}\n\n.news__item-grid:nth-child(3) {\n  grid-area: third;\n  min-height: 300px;\n}\n\n.news__item-grid:nth-child(4) {\n  grid-area: fourth;\n  min-height: 300px;\n}\n\n.news__meta-date-grid {\n  background-color: rgba(0, 0, 0, 0.5);\n  font-weight: 700;\n  font-size: 0.9rem;\n  line-height: 1.1rem;\n  align-self: start;\n  padding: 0 5px;\n}\n\n.news__description-title-grid {\n  font-weight: 700;\n  font-size: 1.7rem;\n}\n\n.news__item-grid:nth-child(2) .news__description-title-grid {\n  font-size: 1.4rem;\n}\n\n.news__item-grid:nth-child(3) .news__description-title-grid,\n.news__item-grid:nth-child(4) .news__description-title-grid {\n  font-size: 1.2rem;\n}\n\n.news__description-content-grid {\n  font-weight: 400;\n  line-height: 1.2;\n}\n\n.news__item-grid:nth-child(3) .news__description-content-grid,\n.news__item-grid:nth-child(4) .news__description-content-grid {\n  display: none;\n}\n\n.news__item-flex {\n  display: flex;\n  flex: 1 0 400px;\n  background: #fafafa;\n  color: #333;\n  border-radius: 4px;\n  line-height: 1.4;\n  overflow: hidden;\n}\n\n.news__item-flex:hover .news__meta-photo-flex {\n  transform: scale(1.3) rotate(3deg);\n}\n\n.news__item-flex .news__meta-flex {\n  position: relative;\n  height: 200px;\n}\n\n.news__item-flex .news__meta-photo-flex {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.2s;\n}\n\n.news__item-flex .news__meta-details-flex,\n.news__item-flex .news__meta-details-flex ul {\n  margin: auto;\n  padding: 0;\n  list-style: none;\n}\n\n.news__item-flex .news__meta-details-flex {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -120%;\n  margin: auto;\n  transition: left 0.2s;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 0.9rem;\n}\n\n.news__item-flex .news__description-flex {\n  padding: 1rem;\n  background: #fafafa;\n  position: relative;\n  z-index: 1;\n}\n\n.news__item-flex .news__description-flex h2 {\n  line-height: 1;\n  margin: 0;\n  font-size: 1.7rem;\n}\n\n.news__item-flex .news__description-flex h3 {\n  font-size: 1rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  color: #a2a2a2;\n  margin-top: 5px;\n}\n\n.news__item-flex .news__description-flex .news__read-more-flex {\n  text-align: right;\n}\n\n.news__item-flex .news__description-flex .news__read-more-flex a {\n  color: #00009D;\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  font-weight: 800;\n}\n\n.news__item-flex .news__description-flex .news__read-more-flex a:after {\n  content: '→';\n  margin-left: -10px;\n  opacity: 0;\n  vertical-align: middle;\n  transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item-flex .news__description-flex .news__read-more-flex a:hover:after {\n  margin-left: 5px;\n  opacity: 1;\n}\n\n.news__item-flex p {\n  margin: 1rem 0 0;\n}\n\n.news__item-flex p:first-of-type {\n  margin-top: 1.25rem;\n  position: relative;\n}\n\n.news__item-flex p:first-of-type:before {\n  content: '';\n  position: absolute;\n  height: 5px;\n  background: #00009D;\n  width: 35px;\n  top: -0.75rem;\n  border-radius: 3px;\n}\n\n.news__item-flex:hover .news__meta-details-flex {\n  left: 0%;\n}\n\n@media (min-width: 640px) {\n  .news__item-flex .news__meta-flex {\n    flex-basis: 40%;\n    height: auto;\n  }\n\n  .news__item-flex .news__description-flex {\n    flex-basis: 60%;\n  }\n\n  .news__item-flex .news__description-flex:before {\n    -webkit-transform: skewX(-3deg);\n    transform: skewX(-3deg);\n    content: '';\n    background: #fafafa;\n    width: 30px;\n    position: absolute;\n    left: -10px;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n\n  .news__item-flex.alt {\n    flex-direction: row-reverse;\n  }\n\n  .news__item-flex.alt .news__description-flex:before {\n    left: inherit;\n    right: -10px;\n    -webkit-transform: skew(3deg);\n    transform: skew(3deg);\n  }\n\n  .news__item-flex.alt .news__meta-details-flex {\n    padding-left: 25px;\n  }\n}\n\n@media (max-width: 640px) {\n  .news__container {\n    margin: 10px auto;\n  }\n\n  .news__item-flex {\n    flex-direction: column;\n    flex: 0 1 auto;\n  }\n\n  .news__description-source-flex {\n    display: none;\n  }\n\n  .news__item-flex p:first-of-type::before {\n    display: none;\n  }\n\n  .news__item-grid:first-child,\n  .news__item-grid:nth-child(2) {\n    min-height: 250px;\n  }\n\n  .news__item-grid:nth-child(3),\n  .news__item-grid:nth-child(4) {\n    min-height: 200px;\n  }\n\n  .news__description-title-grid {\n    font-weight: 700;\n    font-size: 1.4rem;\n  }\n\n  .news__item-grid:nth-child(2) .news__description-title-grid {\n    font-size: 1.2rem;\n  }\n\n  .news__item-grid:nth-child(3) .news__description-title-grid,\n  .news__item-grid:nth-child(4) .news__description-title-grid {\n    font-size: 1rem;\n  }\n\n  .news__description-content-grid {\n    font-weight: 400;\n    line-height: 1.2;\n  }\n\n  .news__item-grid:nth-child(3) .news__description-content-grid,\n  .news__item-grid:nth-child(4) .news__description-content-grid {\n    display: none;\n  }\n\n  .news__item-flex .news__description-flex h2 {\n    font-size: 1.4rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/view/news/news.css"],"names":[],"mappings":"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","sourcesContent":[".news__container {\n  display: flex;\n  flex-direction: column;\n  max-width: 1180px;\n  width: 95vw;\n  margin: 40px auto;\n}\n\n.news__info {\n  font-weight: 700;\n  font-size: 1.7rem;\n  align-self: center;\n  color: #00009D;\n}\n\n.news__grid {\n  margin: 0 auto;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"first first second second\"\n    \"first first third fourth\";\n}\n\n@media (max-width: 864px) {\n  .news__grid {\n    grid-template-areas:\n      \"first first first first\"\n      \"second second second second\"\n      \"third third fourth fourth\";\n  }\n}\n\n.news__flex {\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.news__item-grid {\n  display: flex;\n  border-radius: 5px;\n  background: linear-gradient(358.86deg, #000000 0.9%, rgba(0, 0, 0, 0) 31.55%);\n  flex-direction: column;\n  justify-content: flex-end;\n  color: #fff;\n  text-decoration: none;\n  transition: 0.25s;\n}\n\n.news__item-grid:hover,\n.news__item-grid:focus {\n  transform: scale(1.008);\n  box-shadow: 0 0.4em 0.4em -0.2em rgba(0, 0, 157, 0.3);\n}\n\n.news__container-grid {\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.news__item-grid:first-child {\n  grid-area: first;\n  min-height: 350px;\n}\n\n.news__item-grid:nth-child(2) {\n  grid-area: second;\n  min-height: 350px;\n}\n\n.news__item-grid:nth-child(3) {\n  grid-area: third;\n  min-height: 300px;\n}\n\n.news__item-grid:nth-child(4) {\n  grid-area: fourth;\n  min-height: 300px;\n}\n\n.news__meta-date-grid {\n  background-color: rgba(0, 0, 0, 0.5);\n  font-weight: 700;\n  font-size: 0.9rem;\n  line-height: 1.1rem;\n  align-self: start;\n  padding: 0 5px;\n}\n\n.news__description-title-grid {\n  font-weight: 700;\n  font-size: 1.7rem;\n}\n\n.news__item-grid:nth-child(2) .news__description-title-grid {\n  font-size: 1.4rem;\n}\n\n.news__item-grid:nth-child(3) .news__description-title-grid,\n.news__item-grid:nth-child(4) .news__description-title-grid {\n  font-size: 1.2rem;\n}\n\n.news__description-content-grid {\n  font-weight: 400;\n  line-height: 1.2;\n}\n\n.news__item-grid:nth-child(3) .news__description-content-grid,\n.news__item-grid:nth-child(4) .news__description-content-grid {\n  display: none;\n}\n\n.news__item-flex {\n  display: flex;\n  flex: 1 0 400px;\n  background: #fafafa;\n  color: #333;\n  border-radius: 4px;\n  line-height: 1.4;\n  overflow: hidden;\n}\n\n.news__item-flex:hover .news__meta-photo-flex {\n  transform: scale(1.3) rotate(3deg);\n}\n\n.news__item-flex .news__meta-flex {\n  position: relative;\n  height: 200px;\n}\n\n.news__item-flex .news__meta-photo-flex {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.2s;\n}\n\n.news__item-flex .news__meta-details-flex,\n.news__item-flex .news__meta-details-flex ul {\n  margin: auto;\n  padding: 0;\n  list-style: none;\n}\n\n.news__item-flex .news__meta-details-flex {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -120%;\n  margin: auto;\n  transition: left 0.2s;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 0.9rem;\n}\n\n.news__item-flex .news__description-flex {\n  padding: 1rem;\n  background: #fafafa;\n  position: relative;\n  z-index: 1;\n}\n\n.news__item-flex .news__description-flex h2 {\n  line-height: 1;\n  margin: 0;\n  font-size: 1.7rem;\n}\n\n.news__item-flex .news__description-flex h3 {\n  font-size: 1rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  color: #a2a2a2;\n  margin-top: 5px;\n}\n\n.news__item-flex .news__description-flex .news__read-more-flex {\n  text-align: right;\n}\n\n.news__item-flex .news__description-flex .news__read-more-flex a {\n  color: #00009D;\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  font-weight: 800;\n}\n\n.news__item-flex .news__description-flex .news__read-more-flex a:after {\n  content: '→';\n  margin-left: -10px;\n  opacity: 0;\n  vertical-align: middle;\n  transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item-flex .news__description-flex .news__read-more-flex a:hover:after {\n  margin-left: 5px;\n  opacity: 1;\n}\n\n.news__item-flex p {\n  margin: 1rem 0 0;\n}\n\n.news__item-flex p:first-of-type {\n  margin-top: 1.25rem;\n  position: relative;\n}\n\n.news__item-flex p:first-of-type:before {\n  content: '';\n  position: absolute;\n  height: 5px;\n  background: #00009D;\n  width: 35px;\n  top: -0.75rem;\n  border-radius: 3px;\n}\n\n.news__item-flex:hover .news__meta-details-flex {\n  left: 0%;\n}\n\n@media (min-width: 640px) {\n  .news__item-flex .news__meta-flex {\n    flex-basis: 40%;\n    height: auto;\n  }\n\n  .news__item-flex .news__description-flex {\n    flex-basis: 60%;\n  }\n\n  .news__item-flex .news__description-flex:before {\n    -webkit-transform: skewX(-3deg);\n    transform: skewX(-3deg);\n    content: '';\n    background: #fafafa;\n    width: 30px;\n    position: absolute;\n    left: -10px;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n\n  .news__item-flex.alt {\n    flex-direction: row-reverse;\n  }\n\n  .news__item-flex.alt .news__description-flex:before {\n    left: inherit;\n    right: -10px;\n    -webkit-transform: skew(3deg);\n    transform: skew(3deg);\n  }\n\n  .news__item-flex.alt .news__meta-details-flex {\n    padding-left: 25px;\n  }\n}\n\n@media (max-width: 640px) {\n  .news__container {\n    margin: 10px auto;\n  }\n\n  .news__item-flex {\n    flex-direction: column;\n    flex: 0 1 auto;\n  }\n\n  .news__description-source-flex {\n    display: none;\n  }\n\n  .news__item-flex p:first-of-type::before {\n    display: none;\n  }\n\n  .news__item-grid:first-child,\n  .news__item-grid:nth-child(2) {\n    min-height: 250px;\n  }\n\n  .news__item-grid:nth-child(3),\n  .news__item-grid:nth-child(4) {\n    min-height: 200px;\n  }\n\n  .news__description-title-grid {\n    font-weight: 700;\n    font-size: 1.4rem;\n  }\n\n  .news__item-grid:nth-child(2) .news__description-title-grid {\n    font-size: 1.2rem;\n  }\n\n  .news__item-grid:nth-child(3) .news__description-title-grid,\n  .news__item-grid:nth-child(4) .news__description-title-grid {\n    font-size: 1rem;\n  }\n\n  .news__description-content-grid {\n    font-weight: 400;\n    line-height: 1.2;\n  }\n\n  .news__item-grid:nth-child(3) .news__description-content-grid,\n  .news__item-grid:nth-child(4) .news__description-content-grid {\n    display: none;\n  }\n\n  .news__item-flex .news__description-flex h2 {\n    font-size: 1.4rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 0.1em 1em;\n    gap: 20px;\n    height: 90px;\n    overflow: auto;\n    align-items: center;\n    scrollbar-color: #70d6ff #f0f6ff;\n    scrollbar-width: thin;\n    color: #00009D;\n    text-align: center;\n}\n\n.sources::-webkit-scrollbar {\n    width: 10px;\n}\n\n.sources::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 10px;\n}\n\n.sources::-webkit-scrollbar-thumb {\n    background: #70d6ff;\n    border-radius: 10px;\n}\n\n.sources::-webkit-scrollbar-thumb:hover {\n    background: #00009D;\n}\n\n.source__item {\n    display: flex;\n    align-items: center;\n    background: none;\n    border: 1px solid #70d6ff;\n    padding: 10px 24px;\n    border-radius: 4px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 21px;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #00009D;\n    color: #00009D;\n    box-shadow: 0 0.4em 0.4em -0.2em rgba(0, 0, 157, 0.3);\n    /* transform: translateY(-0.25em); */\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}", "",{"version":3,"sources":["webpack://./src/components/view/sources/sources.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,SAAS;IACT,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,gCAAgC;IAChC,qBAAqB;IACrB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,cAAc;IACd,qDAAqD;IACrD,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB","sourcesContent":[".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 0.1em 1em;\n    gap: 20px;\n    height: 90px;\n    overflow: auto;\n    align-items: center;\n    scrollbar-color: #70d6ff #f0f6ff;\n    scrollbar-width: thin;\n    color: #00009D;\n    text-align: center;\n}\n\n.sources::-webkit-scrollbar {\n    width: 10px;\n}\n\n.sources::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 10px;\n}\n\n.sources::-webkit-scrollbar-thumb {\n    background: #70d6ff;\n    border-radius: 10px;\n}\n\n.sources::-webkit-scrollbar-thumb:hover {\n    background: #00009D;\n}\n\n.source__item {\n    display: flex;\n    align-items: center;\n    background: none;\n    border: 1px solid #70d6ff;\n    padding: 10px 24px;\n    border-radius: 4px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 21px;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #00009D;\n    color: #00009D;\n    box-shadow: 0 0.4em 0.4em -0.2em rgba(0, 0, 157, 0.3);\n    /* transform: translateY(-0.25em); */\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_img_header_background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/img/header-background.jpg */ "./src/components/img/header-background.jpg");
/* harmony import */ var _components_img_header_logo_MadeBy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/img/header-logo-MadeBy.svg */ "./src/components/img/header-logo-MadeBy.svg");
/* harmony import */ var _components_img_header_logo_newsAPI_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/img/header-logo-newsAPI.svg */ "./src/components/img/header-logo-newsAPI.svg");
/* harmony import */ var _components_img_footer_background_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/img/footer-background.jpg */ "./src/components/img/footer-background.jpg");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_components_img_header_background_jpg__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_components_img_header_logo_MadeBy_svg__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_components_img_header_logo_newsAPI_svg__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_components_img_footer_background_jpg__WEBPACK_IMPORTED_MODULE_6__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: #000;\n  background: #fff;\n  font-family: 'Times New Roman', serif;\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\n.header {\n  background: no-repeat center/cover url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), #FFFFFF;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);\n}\n\n.header__container {\n  display: flex;\n  justify-content: space-between;\n  margin: auto;\n  max-width: 1180px;\n  width: 95vw;\n  height: 130px;\n}\n\n.header__news-logo {\n  display: flex;\n  flex-direction: column;\n  width: 580px;\n  margin: 17px 20px 0;\n}\n\n.header__news-logo_link {\n  text-decoration: none;\n}\n\n.header__news-logo_upper {\n  align-self: flex-start;\n  width: 350px;\n  background: no-repeat center/contain url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 30px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.header__news-logo_lower {\n  position: relative;\n  top: -4px;\n  align-self: flex-end;\n  width: 530px;\n  background: no-repeat center/contain url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 66px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.header__links {\n  display: flex;\n  gap: 20px;\n  padding: 0;\n}\n\n\n  .header__dropdown {\n    display: flex;\n    position: relative;\n    width: 180px;\n    height: 26px;\n    box-sizing: border-box;\n    padding: 3px 10px;\n    justify-content: space-between;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 18px;\n    border: 1px solid #00009D;\n    color: #00009D;\n    border-radius: 4px;\n  }\n\n  .header__dropdown-arrow {\n    width: 15px;\n  }\n\n  .header__dropdown-list {\n    position: absolute;\n    left: 0;\n    top: 24px;\n    margin: 0;\n    padding: 0;\n    border-radius: 4px;\n    display: none;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n    width: 100%;\n    z-index: 3;\n  }\n\n  .header__dropdown-item {\n    clear: both;\n    list-style: none;\n    display: block;\n    padding: 0 10px;\n    background: rgba(255, 255, 255, 1);\n    box-sizing: border-box;\n    margin: 0px auto;\n    line-height: 28px;\n    width: 100%;\n  }\n\n  .header__dropdown:hover,\n  .header__dropdown:focus {\n    background: rgba(255, 255, 255, 0.7);\n  }\n\n  .header__dropdown:hover>.header__dropdown-list,\n  .header__dropdown:focus>.header__dropdown-list {\n    display: block;\n    animation: fadeInRight 0.3s ease;\n    -webkit-animation: fadeInRight 0.3s ease;\n  }\n\n  .header__dropdown-item:hover,\n  .header__dropdown-item:focus {\n    background: rgba(208, 228, 240, 1);\n    cursor: pointer;\n  }\n\n  @keyframes fadeInRight {\n    0% {\n      opacity: 0;\n      transform-origin: top center;\n      transform: scaleY(0);\n    }\n\n    100% {\n      opacity: 1;\n      transform: none;\n    }\n  }\n\n  .main {\n    min-height: calc(100vh - 272px);\n  }\n\n  .footer {\n    background: no-repeat center/cover url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "), #1F1C1C;\n    display: flex;\n    padding: 20px 0;\n  }\n\n  .footer__container {\n    display: flex;\n    flex: 0 1 95vw;\n    justify-content: space-between;\n    margin: auto;\n    max-width: 1180px;\n    height: 100px;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 30px;\n    color: #fff;\n  }\n\n  .footer__RS {\n    align-self: center;\n  }\n\n  .footer__copyright {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .footer__contact {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .footer a {\n    color: #fff;\n  }\n\n  .footer a:hover {\n    color: #28AAE1;\n  }\n\n  @media (max-width: 1180px) {\n    .header__links {\n      flex-direction: column;\n      gap: 15px;\n      margin: 10px 0;\n    }\n  }\n\n  @media (max-width: 840px) {\n    .footer__container {\n      flex-wrap: wrap;\n      justify-content: space-around;\n      gap: 10px;\n      height: auto;\n    }\n\n    .footer__RS,\n    .footer__copyright,\n    .footer__contact {\n      margin: auto 20px;\n    }\n\n    .footer__copyright {\n      order: 1;\n    }\n\n    .main {\n      min-height: calc(100vh - 336px);\n    }  \n  }\n  \n  @media (max-width: 800px) {\n    .header__container {\n      flex-direction: column;\n      height: auto;\n    }\n  \n    .header__links {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      gap: 20px;\n      margin: 20px;\n    }\n\n    .main {\n      min-height: calc(100vh - 385px);\n    }  \n  }\n\n  @media (max-width: 640px) {\n    .header__news-logo {\n      width: 400px;\n    }\n\n    .header__news-logo_lower {\n      width: 430px;\n      font-size: 20px;\n      line-height: 56px;\n    }\n\n    .main {\n      min-height: calc(100vh - 375px);\n    }  \n  }\n  \n  @media (max-width: 480px) {\n    .main {\n      min-height: calc(100vh - 511px);\n    }  \n\n    .header__links {\n      flex-direction: column;\n      gap: 15px;\n      margin: 10px 20px;\n      align-items: center;\n    }\n\n    .header__container {\n      align-items: center;\n    }\n\n    .header__news-logo {\n      width: auto;\n    }\n\n    .header__news-logo_upper {\n      width: 300px;\n      font-size: 12px;\n      line-height: 22px;\n    }\n\n    .header__news-logo_lower {\n      width: 320px;\n      font-size: 16px;\n      line-height: 44px;\n    }\n  }\n", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  color: #000;\n  background: #fff;\n  font-family: 'Times New Roman', serif;\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\n.header {\n  background: no-repeat center/cover url(./components/img/header-background.jpg), #FFFFFF;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);\n}\n\n.header__container {\n  display: flex;\n  justify-content: space-between;\n  margin: auto;\n  max-width: 1180px;\n  width: 95vw;\n  height: 130px;\n}\n\n.header__news-logo {\n  display: flex;\n  flex-direction: column;\n  width: 580px;\n  margin: 17px 20px 0;\n}\n\n.header__news-logo_link {\n  text-decoration: none;\n}\n\n.header__news-logo_upper {\n  align-self: flex-start;\n  width: 350px;\n  background: no-repeat center/contain url(./components/img/header-logo-MadeBy.svg);\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 30px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.header__news-logo_lower {\n  position: relative;\n  top: -4px;\n  align-self: flex-end;\n  width: 530px;\n  background: no-repeat center/contain url(./components/img/header-logo-newsAPI.svg);\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 66px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.header__links {\n  display: flex;\n  gap: 20px;\n  padding: 0;\n}\n\n\n  .header__dropdown {\n    display: flex;\n    position: relative;\n    width: 180px;\n    height: 26px;\n    box-sizing: border-box;\n    padding: 3px 10px;\n    justify-content: space-between;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 18px;\n    border: 1px solid #00009D;\n    color: #00009D;\n    border-radius: 4px;\n  }\n\n  .header__dropdown-arrow {\n    width: 15px;\n  }\n\n  .header__dropdown-list {\n    position: absolute;\n    left: 0;\n    top: 24px;\n    margin: 0;\n    padding: 0;\n    border-radius: 4px;\n    display: none;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n    width: 100%;\n    z-index: 3;\n  }\n\n  .header__dropdown-item {\n    clear: both;\n    list-style: none;\n    display: block;\n    padding: 0 10px;\n    background: rgba(255, 255, 255, 1);\n    box-sizing: border-box;\n    margin: 0px auto;\n    line-height: 28px;\n    width: 100%;\n  }\n\n  .header__dropdown:hover,\n  .header__dropdown:focus {\n    background: rgba(255, 255, 255, 0.7);\n  }\n\n  .header__dropdown:hover>.header__dropdown-list,\n  .header__dropdown:focus>.header__dropdown-list {\n    display: block;\n    animation: fadeInRight 0.3s ease;\n    -webkit-animation: fadeInRight 0.3s ease;\n  }\n\n  .header__dropdown-item:hover,\n  .header__dropdown-item:focus {\n    background: rgba(208, 228, 240, 1);\n    cursor: pointer;\n  }\n\n  @keyframes fadeInRight {\n    0% {\n      opacity: 0;\n      transform-origin: top center;\n      transform: scaleY(0);\n    }\n\n    100% {\n      opacity: 1;\n      transform: none;\n    }\n  }\n\n  .main {\n    min-height: calc(100vh - 272px);\n  }\n\n  .footer {\n    background: no-repeat center/cover url(./components/img/footer-background.jpg), #1F1C1C;\n    display: flex;\n    padding: 20px 0;\n  }\n\n  .footer__container {\n    display: flex;\n    flex: 0 1 95vw;\n    justify-content: space-between;\n    margin: auto;\n    max-width: 1180px;\n    height: 100px;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 30px;\n    color: #fff;\n  }\n\n  .footer__RS {\n    align-self: center;\n  }\n\n  .footer__copyright {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .footer__contact {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .footer a {\n    color: #fff;\n  }\n\n  .footer a:hover {\n    color: #28AAE1;\n  }\n\n  @media (max-width: 1180px) {\n    .header__links {\n      flex-direction: column;\n      gap: 15px;\n      margin: 10px 0;\n    }\n  }\n\n  @media (max-width: 840px) {\n    .footer__container {\n      flex-wrap: wrap;\n      justify-content: space-around;\n      gap: 10px;\n      height: auto;\n    }\n\n    .footer__RS,\n    .footer__copyright,\n    .footer__contact {\n      margin: auto 20px;\n    }\n\n    .footer__copyright {\n      order: 1;\n    }\n\n    .main {\n      min-height: calc(100vh - 336px);\n    }  \n  }\n  \n  @media (max-width: 800px) {\n    .header__container {\n      flex-direction: column;\n      height: auto;\n    }\n  \n    .header__links {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      gap: 20px;\n      margin: 20px;\n    }\n\n    .main {\n      min-height: calc(100vh - 385px);\n    }  \n  }\n\n  @media (max-width: 640px) {\n    .header__news-logo {\n      width: 400px;\n    }\n\n    .header__news-logo_lower {\n      width: 430px;\n      font-size: 20px;\n      line-height: 56px;\n    }\n\n    .main {\n      min-height: calc(100vh - 375px);\n    }  \n  }\n  \n  @media (max-width: 480px) {\n    .main {\n      min-height: calc(100vh - 511px);\n    }  \n\n    .header__links {\n      flex-direction: column;\n      gap: 15px;\n      margin: 10px 20px;\n      align-items: center;\n    }\n\n    .header__container {\n      align-items: center;\n    }\n\n    .header__news-logo {\n      width: auto;\n    }\n\n    .header__news-logo_upper {\n      width: 300px;\n      font-size: 12px;\n      line-height: 22px;\n    }\n\n    .header__news-logo_lower {\n      width: 320px;\n      font-size: 16px;\n      line-height: 44px;\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/components/view/news/news.css":
/*!*******************************************!*\
  !*** ./src/components/view/news/news.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./news.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/sources/sources.css":
/*!*************************************************!*\
  !*** ./src/components/view/sources/sources.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sources.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/controller */ "./src/components/controller/controller.ts");
/* harmony import */ var _view_appView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/appView */ "./src/components/view/appView.ts");


class NewsApp {
    constructor() {
        this._controller = new _controller_controller__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._view = new _view_appView__WEBPACK_IMPORTED_MODULE_1__.AppView();
    }
    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this._controller.getNews(e, (data) => this._view.drawNews(data)));
        document.querySelector('.header__links').addEventListener('click', (e) => this.changeSource(e));
        this.accessStorage();
        this._controller.getSources(this.category, this.language, this.country, (data) => this._view.drawSources(data));
    }
    accessStorage() {
        if (localStorage.getItem('category')) {
            this.category = localStorage.getItem('category');
        }
        else {
            this.category = 'all';
            localStorage.setItem('category', 'all');
        }
        if (localStorage.getItem('language')) {
            this.language = localStorage.getItem('language');
        }
        else {
            this.language = 'en';
            localStorage.setItem('language', 'en');
        }
        if (localStorage.getItem('country')) {
            this.country = localStorage.getItem('country');
        }
        else {
            this.country = 'us';
            localStorage.setItem('country', 'us');
        }
    }
    changeSource(e) {
        const target = e.target;
        if (target.classList.contains('category')) {
            this.category = target.innerHTML.toLowerCase();
            localStorage.setItem('category', this.category);
            this._controller.getSources(this.category, this.language, this.country, (data) => this._view.drawSources(data));
        }
        if (target.classList.contains('language')) {
            this.language = target.innerHTML.toLowerCase();
            localStorage.setItem('language', this.language);
            this._controller.getSources(this.category, this.language, this.country, (data) => this._view.drawSources(data));
        }
        if (target.classList.contains('country')) {
            this.country = target.innerHTML.toLowerCase();
            localStorage.setItem('country', this.country);
            this._controller.getSources(this.category, this.language, this.country, (data) => this._view.drawSources(data));
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsApp);


/***/ }),

/***/ "./src/components/controller/appLoader.ts":
/*!************************************************!*\
  !*** ./src/components/controller/appLoader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./src/components/controller/loader.ts");

class AppLoader extends _loader__WEBPACK_IMPORTED_MODULE_0__.Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '0b493ad2690e4afcbe87fad6033fe24b', // получите свой ключ https://newsapi.org/
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLoader);


/***/ }),

/***/ "./src/components/controller/controller.ts":
/*!*************************************************!*\
  !*** ./src/components/controller/controller.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLoader */ "./src/components/controller/appLoader.ts");

class AppController extends _appLoader__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getSources(category, language, country, callback) {
        super.getResp({
            endpoint: 'sources',
            options: {
                category: category,
                language: language,
                country: country,
            },
        }, callback);
    }
    getNews(e, callback) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp({
                        endpoint: 'everything',
                        options: {
                            sources: sourceId,
                        },
                    }, callback);
                }
                return;
            }
            target = target.parentNode;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppController);


/***/ }),

/***/ "./src/components/controller/loader.ts":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum */ "./src/components/enum.ts");

class Loader {
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }
    getResp({ endpoint, options = {} }, callback = () => {
        console.error('No callback for GET response');
    }) {
        this.load('GET', endpoint, callback, options);
    }
    errorHandler(res) {
        if (!res.ok) {
            if (_enum__WEBPACK_IMPORTED_MODULE_0__.HTTPStatus[res.status])
                console.log(`Sorry, but there is ${res.status} ${_enum__WEBPACK_IMPORTED_MODULE_0__.HTTPStatus[res.status]} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }
    makeUrl(options, endpoint) {
        const urlOptions = Object.assign(Object.assign({}, this.options), options);
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key) => {
            if (urlOptions[key] && urlOptions[key] !== 'all') {
                url += `${key}=${urlOptions[key]}&`;
            }
        });
        return url.slice(0, -1);
    }
    load(method, endpoint, callback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then((res) => this.errorHandler(res))
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}


/***/ }),

/***/ "./src/components/enum.ts":
/*!********************************!*\
  !*** ./src/components/enum.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTPStatus": () => (/* binding */ HTTPStatus)
/* harmony export */ });
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["BadRequest"] = 400] = "BadRequest";
    HTTPStatus[HTTPStatus["Unauthorized"] = 401] = "Unauthorized";
    HTTPStatus[HTTPStatus["PaymentRequired"] = 402] = "PaymentRequired";
    HTTPStatus[HTTPStatus["Forbidden"] = 403] = "Forbidden";
    HTTPStatus[HTTPStatus["NotFound"] = 404] = "NotFound";
    HTTPStatus[HTTPStatus["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HTTPStatus[HTTPStatus["NotAcceptable"] = 406] = "NotAcceptable";
    HTTPStatus[HTTPStatus["ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
    HTTPStatus[HTTPStatus["RequestTimeout"] = 408] = "RequestTimeout";
    HTTPStatus[HTTPStatus["Conflict"] = 409] = "Conflict";
    HTTPStatus[HTTPStatus["Gone"] = 410] = "Gone";
    HTTPStatus[HTTPStatus["LengthRequired"] = 411] = "LengthRequired";
    HTTPStatus[HTTPStatus["PreconditionFailed"] = 412] = "PreconditionFailed";
    HTTPStatus[HTTPStatus["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    HTTPStatus[HTTPStatus["URITooLong"] = 414] = "URITooLong";
    HTTPStatus[HTTPStatus["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    HTTPStatus[HTTPStatus["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
    HTTPStatus[HTTPStatus["ExpectationFailed"] = 417] = "ExpectationFailed";
    HTTPStatus[HTTPStatus["ImATeapot"] = 418] = "ImATeapot";
    HTTPStatus[HTTPStatus["MisdirectedRequest"] = 421] = "MisdirectedRequest";
    HTTPStatus[HTTPStatus["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    HTTPStatus[HTTPStatus["Locked"] = 423] = "Locked";
    HTTPStatus[HTTPStatus["FailedDependency"] = 424] = "FailedDependency";
    HTTPStatus[HTTPStatus["UpgradeRequired"] = 426] = "UpgradeRequired";
    HTTPStatus[HTTPStatus["PreconditionRequired"] = 428] = "PreconditionRequired";
    HTTPStatus[HTTPStatus["TooManyRequests"] = 429] = "TooManyRequests";
    HTTPStatus[HTTPStatus["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    HTTPStatus[HTTPStatus["LoginTimeOut"] = 440] = "LoginTimeOut";
    HTTPStatus[HTTPStatus["RetryWith"] = 449] = "RetryWith";
    HTTPStatus[HTTPStatus["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    HTTPStatus[HTTPStatus["Internal"] = 500] = "Internal";
    HTTPStatus[HTTPStatus["NotImplemented"] = 501] = "NotImplemented";
    HTTPStatus[HTTPStatus["BadGateway"] = 502] = "BadGateway";
    HTTPStatus[HTTPStatus["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HTTPStatus[HTTPStatus["GatewayTimeout"] = 504] = "GatewayTimeout";
    HTTPStatus[HTTPStatus["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
    HTTPStatus[HTTPStatus["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    HTTPStatus[HTTPStatus["InsufficientStorage"] = 507] = "InsufficientStorage";
    HTTPStatus[HTTPStatus["LoopDetected"] = 508] = "LoopDetected";
    HTTPStatus[HTTPStatus["BandwidthLimitExceeded"] = 509] = "BandwidthLimitExceeded";
    HTTPStatus[HTTPStatus["NotExtended"] = 510] = "NotExtended";
    HTTPStatus[HTTPStatus["NetworkAuthRequired"] = 511] = "NetworkAuthRequired";
})(HTTPStatus || (HTTPStatus = {}));


/***/ }),

/***/ "./src/components/view/appView.ts":
/*!****************************************!*\
  !*** ./src/components/view/appView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppView": () => (/* binding */ AppView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news/news */ "./src/components/view/news/news.ts");
/* harmony import */ var _sources_sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources/sources */ "./src/components/view/sources/sources.ts");


class AppView {
    constructor() {
        this.news = new _news_news__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.sources = new _sources_sources__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    drawNews(data) {
        const values = (data === null || data === void 0 ? void 0 : data.articles) ? data === null || data === void 0 ? void 0 : data.articles : [];
        this.news.draw(values);
    }
    drawSources(data) {
        const values = (data === null || data === void 0 ? void 0 : data.sources) ? data === null || data === void 0 ? void 0 : data.sources : [];
        this.sources.draw(values);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppView);


/***/ }),

/***/ "./src/components/view/news/news.ts":
/*!******************************************!*\
  !*** ./src/components/view/news/news.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.css */ "./src/components/view/news/news.css");

class News {
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragmentGrid = document.createDocumentFragment();
        const fragmentFlex = document.createDocumentFragment();
        const newsItemGrid = document.querySelector('#newsItemGrid');
        const newsItemFlex = document.querySelector('#newsItemFlex');
        news.forEach((item, idx) => {
            if (idx < 4) {
                const newsClone = newsItemGrid.content.cloneNode(true);
                newsClone.querySelector('.news__item-grid').style.background = `linear-gradient(358.86deg, #000 0.9%, rgba(0, 0, 0, 0) 50%), no-repeat center/cover url(${item.urlToImage || 'images/news_placeholder.jpg'})`;
                newsClone.querySelector('.news__item-grid').setAttribute('href', item.url);
                newsClone.querySelector('.news__meta-date-grid').textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
                newsClone.querySelector('.news__description-title-grid').textContent = item.title;
                newsClone.querySelector('.news__description-content-grid').textContent = item.description;
                fragmentGrid.append(newsClone);
            }
            else {
                const newsClone = newsItemFlex.content.cloneNode(true);
                if (idx % 2)
                    newsClone.querySelector('.news__item-flex').classList.add('alt');
                newsClone.querySelector('.news__meta-photo-flex').style.backgroundImage = `url(${item.urlToImage || 'images/news_placeholder.jpg'})`;
                newsClone.querySelector('.news__meta-author-flex').textContent = item.author || item.source.name;
                newsClone.querySelector('.news__meta-date-flex').textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
                newsClone.querySelector('.news__description-title-flex').textContent = item.title;
                newsClone.querySelector('.news__description-source-flex').textContent = item.source.name;
                newsClone.querySelector('.news__description-content-flex').textContent = item.description;
                newsClone.querySelector('.news__read-more-flex a').setAttribute('href', item.url);
                fragmentFlex.append(newsClone);
            }
        });
        document.querySelector('.news__info').innerHTML = '';
        document.querySelector('.news__grid').innerHTML = '';
        document.querySelector('.news__grid').appendChild(fragmentGrid);
        document.querySelector('.news__flex').innerHTML = '';
        document.querySelector('.news__flex').appendChild(fragmentFlex);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);


/***/ }),

/***/ "./src/components/view/sources/sources.ts":
/*!************************************************!*\
  !*** ./src/components/view/sources/sources.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sources_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources.css */ "./src/components/view/sources/sources.css");

class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        document.querySelector('.sources').innerHTML = '';
        document.querySelector('.sources').append(fragment);
        if (document.querySelector('.sources').innerHTML === '')
            document.querySelector('.sources').innerHTML = `...No news sources to show for category: ${localStorage.getItem('category')}, language: ${localStorage.getItem('language')} and country: ${localStorage.getItem('country')}.`;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sources);


/***/ }),

/***/ "./src/components/img/footer-background.jpg":
/*!**************************************************!*\
  !*** ./src/components/img/footer-background.jpg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "images/6887e1359b7e28467be2.jpg";

/***/ }),

/***/ "./src/components/img/header-background.jpg":
/*!**************************************************!*\
  !*** ./src/components/img/header-background.jpg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "images/26ff62dc54b0edecbc27.jpg";

/***/ }),

/***/ "./src/components/img/header-logo-MadeBy.svg":
/*!***************************************************!*\
  !*** ./src/components/img/header-logo-MadeBy.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "images/5935b078261c1dbe94dc.svg";

/***/ }),

/***/ "./src/components/img/header-logo-newsAPI.svg":
/*!****************************************************!*\
  !*** ./src/components/img/header-logo-newsAPI.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "images/d901186b810370a39f8c.svg";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ "./src/global.css");


const app = new _components_app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJBQXVCLEtBQUssdUlBQXVJLG9CQUFvQixLQUFLLG1EQUFtRCx3QkFBd0IsS0FBSyxHQUFHLE9BQU8sb0dBQW9HLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFB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QWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlB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Y2VzIjpbIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3MiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9nbG9iYWwuY3NzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3M/ZTIwNiIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy5jc3M/NTJiMSIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvZ2xvYmFsLmNzcz9kM2JjIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvYXBwTG9hZGVyLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL2xvYWRlci50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9lbnVtLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvYXBwVmlldy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy50cyIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmV3c19fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XFxuICB3aWR0aDogOTV2dztcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcbn1cXG5cXG4ubmV3c19faW5mbyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogIzAwMDA5RDtcXG59XFxuXFxuLm5ld3NfX2dyaWQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJmaXJzdCBmaXJzdCBzZWNvbmQgc2Vjb25kXFxcIlxcbiAgICBcXFwiZmlyc3QgZmlyc3QgdGhpcmQgZm91cnRoXFxcIjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg2NHB4KSB7XFxuICAubmV3c19fZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcImZpcnN0IGZpcnN0IGZpcnN0IGZpcnN0XFxcIlxcbiAgICAgIFxcXCJzZWNvbmQgc2Vjb25kIHNlY29uZCBzZWNvbmRcXFwiXFxuICAgICAgXFxcInRoaXJkIHRoaXJkIGZvdXJ0aCBmb3VydGhcXFwiO1xcbiAgfVxcbn1cXG5cXG4ubmV3c19fZmxleCB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5uZXdzX19pdGVtLWdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTguODZkZWcsICMwMDAwMDAgMC45JSwgcmdiYSgwLCAwLCAwLCAwKSAzMS41NSUpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4ubmV3c19faXRlbS1ncmlkOmhvdmVyLFxcbi5uZXdzX19pdGVtLWdyaWQ6Zm9jdXMge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwOCk7XFxuICBib3gtc2hhZG93OiAwIDAuNGVtIDAuNGVtIC0wLjJlbSByZ2JhKDAsIDAsIDE1NywgMC4zKTtcXG59XFxuXFxuLm5ld3NfX2NvbnRhaW5lci1ncmlkIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5uZXdzX19pdGVtLWdyaWQ6Zmlyc3QtY2hpbGQge1xcbiAgZ3JpZC1hcmVhOiBmaXJzdDtcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4ubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLWFyZWE6IHNlY29uZDtcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4ubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCgzKSB7XFxuICBncmlkLWFyZWE6IHRoaXJkO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbi5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDQpIHtcXG4gIGdyaWQtYXJlYTogZm91cnRoO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbi5uZXdzX19tZXRhLWRhdGUtZ3JpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBsaW5lLWhlaWdodDogMS4xcmVtO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlLWdyaWQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4ubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCgyKSAubmV3c19fZGVzY3JpcHRpb24tdGl0bGUtZ3JpZCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoMykgLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlLWdyaWQsXFxuLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoNCkgLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlLWdyaWQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50LWdyaWQge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbi5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDMpIC5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50LWdyaWQsXFxuLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoNCkgLm5ld3NfX2Rlc2NyaXB0aW9uLWNvbnRlbnQtZ3JpZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgNDAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleDpob3ZlciAubmV3c19fbWV0YS1waG90by1mbGV4IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoM2RlZyk7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggLm5ld3NfX21ldGEtZmxleCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IC5uZXdzX19tZXRhLXBob3RvLWZsZXgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IC5uZXdzX19tZXRhLWRldGFpbHMtZmxleCxcXG4ubmV3c19faXRlbS1mbGV4IC5uZXdzX19tZXRhLWRldGFpbHMtZmxleCB1bCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fbWV0YS1kZXRhaWxzLWZsZXgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogLTEyMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnM7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IC5uZXdzX19kZXNjcmlwdGlvbi1mbGV4IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleCBoMiB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IC5uZXdzX19kZXNjcmlwdGlvbi1mbGV4IGgzIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNhMmEyYTI7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggLm5ld3NfX2Rlc2NyaXB0aW9uLWZsZXggLm5ld3NfX3JlYWQtbW9yZS1mbGV4IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IC5uZXdzX19kZXNjcmlwdGlvbi1mbGV4IC5uZXdzX19yZWFkLW1vcmUtZmxleCBhIHtcXG4gIGNvbG9yOiAjMDAwMDlEO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleCAubmV3c19fcmVhZC1tb3JlLWZsZXggYTphZnRlciB7XFxuICBjb250ZW50OiAn4oaSJztcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MsIG9wYWNpdHkgMC4zcztcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleCAubmV3c19fcmVhZC1tb3JlLWZsZXggYTpob3ZlcjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCBwIHtcXG4gIG1hcmdpbjogMXJlbSAwIDA7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggcDpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggcDpmaXJzdC1vZi10eXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZDogIzAwMDA5RDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgdG9wOiAtMC43NXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleDpob3ZlciAubmV3c19fbWV0YS1kZXRhaWxzLWZsZXgge1xcbiAgbGVmdDogMCU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fbWV0YS1mbGV4IHtcXG4gICAgZmxleC1iYXNpczogNDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAubmV3c19faXRlbS1mbGV4IC5uZXdzX19kZXNjcmlwdGlvbi1mbGV4IHtcXG4gICAgZmxleC1iYXNpczogNjAlO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleDpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICB9XFxuXFxuICAubmV3c19faXRlbS1mbGV4LmFsdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5uZXdzX19pdGVtLWZsZXguYWx0IC5uZXdzX19kZXNjcmlwdGlvbi1mbGV4OmJlZm9yZSB7XFxuICAgIGxlZnQ6IGluaGVyaXQ7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygzZGVnKTtcXG4gIH1cXG5cXG4gIC5uZXdzX19pdGVtLWZsZXguYWx0IC5uZXdzX19tZXRhLWRldGFpbHMtZmxleCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxuICAubmV3c19fY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB9XFxuXFxuICAubmV3c19faXRlbS1mbGV4IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICB9XFxuXFxuICAubmV3c19fZGVzY3JpcHRpb24tc291cmNlLWZsZXgge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZmxleCBwOmZpcnN0LW9mLXR5cGU6OmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmV3c19faXRlbS1ncmlkOmZpcnN0LWNoaWxkLFxcbiAgLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoMikge1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIC5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDMpLFxcbiAgLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoNCkge1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIH1cXG5cXG4gIC5uZXdzX19kZXNjcmlwdGlvbi10aXRsZS1ncmlkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuXFxuICAubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCgyKSAubmV3c19fZGVzY3JpcHRpb24tdGl0bGUtZ3JpZCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoMykgLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlLWdyaWQsXFxuICAubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCg0KSAubmV3c19fZGVzY3JpcHRpb24tdGl0bGUtZ3JpZCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50LWdyaWQge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoMykgLm5ld3NfX2Rlc2NyaXB0aW9uLWNvbnRlbnQtZ3JpZCxcXG4gIC5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDQpIC5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50LWdyaWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0FB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QUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5ld3NfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTE4MHB4O1xcbiAgd2lkdGg6IDk1dnc7XFxuICBtYXJnaW46IDQwcHggYXV0bztcXG59XFxuXFxuLm5ld3NfX2luZm8ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICMwMDAwOUQ7XFxufVxcblxcbi5uZXdzX19ncmlkIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiZmlyc3QgZmlyc3Qgc2Vjb25kIHNlY29uZFxcXCJcXG4gICAgXFxcImZpcnN0IGZpcnN0IHRoaXJkIGZvdXJ0aFxcXCI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NjRweCkge1xcbiAgLm5ld3NfX2dyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJmaXJzdCBmaXJzdCBmaXJzdCBmaXJzdFxcXCJcXG4gICAgICBcXFwic2Vjb25kIHNlY29uZCBzZWNvbmQgc2Vjb25kXFxcIlxcbiAgICAgIFxcXCJ0aGlyZCB0aGlyZCBmb3VydGggZm91cnRoXFxcIjtcXG4gIH1cXG59XFxuXFxuLm5ld3NfX2ZsZXgge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubmV3c19faXRlbS1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzU4Ljg2ZGVnLCAjMDAwMDAwIDAuOSUsIHJnYmEoMCwgMCwgMCwgMCkgMzEuNTUlKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZ3JpZDpob3ZlcixcXG4ubmV3c19faXRlbS1ncmlkOmZvY3VzIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDgpO1xcbiAgYm94LXNoYWRvdzogMCAwLjRlbSAwLjRlbSAtMC4yZW0gcmdiYSgwLCAwLCAxNTcsIDAuMyk7XFxufVxcblxcbi5uZXdzX19jb250YWluZXItZ3JpZCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ubmV3c19faXRlbS1ncmlkOmZpcnN0LWNoaWxkIHtcXG4gIGdyaWQtYXJlYTogZmlyc3Q7XFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1hcmVhOiBzZWNvbmQ7XFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1hcmVhOiB0aGlyZDtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCg0KSB7XFxuICBncmlkLWFyZWE6IGZvdXJ0aDtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ubmV3c19fbWV0YS1kYXRlLWdyaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5uZXdzX19kZXNjcmlwdGlvbi10aXRsZS1ncmlkIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoMikgLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlLWdyaWQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDMpIC5uZXdzX19kZXNjcmlwdGlvbi10aXRsZS1ncmlkLFxcbi5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDQpIC5uZXdzX19kZXNjcmlwdGlvbi10aXRsZS1ncmlkIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmV3c19fZGVzY3JpcHRpb24tY29udGVudC1ncmlkIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG4ubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCgzKSAubmV3c19fZGVzY3JpcHRpb24tY29udGVudC1ncmlkLFxcbi5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDQpIC5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50LWdyaWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDQwMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXg6aG92ZXIgLm5ld3NfX21ldGEtcGhvdG8tZmxleCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IC5uZXdzX19tZXRhLWZsZXgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fbWV0YS1waG90by1mbGV4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fbWV0YS1kZXRhaWxzLWZsZXgsXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fbWV0YS1kZXRhaWxzLWZsZXggdWwge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggLm5ld3NfX21ldGEtZGV0YWlscy1mbGV4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IC0xMjAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjJzO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggLm5ld3NfX2Rlc2NyaXB0aW9uLWZsZXggaDIge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleCBoMyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjYTJhMmEyO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IC5uZXdzX19kZXNjcmlwdGlvbi1mbGV4IC5uZXdzX19yZWFkLW1vcmUtZmxleCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleCAubmV3c19fcmVhZC1tb3JlLWZsZXggYSB7XFxuICBjb2xvcjogIzAwMDA5RDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggLm5ld3NfX2Rlc2NyaXB0aW9uLWZsZXggLm5ld3NfX3JlYWQtbW9yZS1mbGV4IGE6YWZ0ZXIge1xcbiAgY29udGVudDogJ+KGkic7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjNzLCBvcGFjaXR5IDAuM3M7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggLm5ld3NfX2Rlc2NyaXB0aW9uLWZsZXggLm5ld3NfX3JlYWQtbW9yZS1mbGV4IGE6aG92ZXI6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXggcCB7XFxuICBtYXJnaW46IDFyZW0gMCAwO1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3c19faXRlbS1mbGV4IHA6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQ6ICMwMDAwOUQ7XFxuICB3aWR0aDogMzVweDtcXG4gIHRvcDogLTAuNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5uZXdzX19pdGVtLWZsZXg6aG92ZXIgLm5ld3NfX21ldGEtZGV0YWlscy1mbGV4IHtcXG4gIGxlZnQ6IDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIC5uZXdzX19pdGVtLWZsZXggLm5ld3NfX21ldGEtZmxleCB7XFxuICAgIGZsZXgtYmFzaXM6IDQwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZmxleCAubmV3c19fZGVzY3JpcHRpb24tZmxleCB7XFxuICAgIGZsZXgtYmFzaXM6IDYwJTtcXG4gIH1cXG5cXG4gIC5uZXdzX19pdGVtLWZsZXggLm5ld3NfX2Rlc2NyaXB0aW9uLWZsZXg6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZmxleC5hbHQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICB9XFxuXFxuICAubmV3c19faXRlbS1mbGV4LmFsdCAubmV3c19fZGVzY3JpcHRpb24tZmxleDpiZWZvcmUge1xcbiAgICBsZWZ0OiBpbmhlcml0O1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxuICB9XFxuXFxuICAubmV3c19faXRlbS1mbGV4LmFsdCAubmV3c19fbWV0YS1kZXRhaWxzLWZsZXgge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xcbiAgLm5ld3NfX2NvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZmxleCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgfVxcblxcbiAgLm5ld3NfX2Rlc2NyaXB0aW9uLXNvdXJjZS1mbGV4IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uZXdzX19pdGVtLWZsZXggcDpmaXJzdC1vZi10eXBlOjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZ3JpZDpmaXJzdC1jaGlsZCxcXG4gIC5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICB9XFxuXFxuICAubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCgzKSxcXG4gIC5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDQpIHtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAubmV3c19fZGVzY3JpcHRpb24tdGl0bGUtZ3JpZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcblxcbiAgLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoMikgLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlLWdyaWQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDMpIC5uZXdzX19kZXNjcmlwdGlvbi10aXRsZS1ncmlkLFxcbiAgLm5ld3NfX2l0ZW0tZ3JpZDpudGgtY2hpbGQoNCkgLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlLWdyaWQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAubmV3c19fZGVzY3JpcHRpb24tY29udGVudC1ncmlkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIH1cXG5cXG4gIC5uZXdzX19pdGVtLWdyaWQ6bnRoLWNoaWxkKDMpIC5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50LWdyaWQsXFxuICAubmV3c19faXRlbS1ncmlkOm50aC1jaGlsZCg0KSAubmV3c19fZGVzY3JpcHRpb24tY29udGVudC1ncmlkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uZXdzX19pdGVtLWZsZXggLm5ld3NfX2Rlc2NyaXB0aW9uLWZsZXggaDIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNvdXJjZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiAwLjFlbSAxZW07XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjNzBkNmZmICNmMGY2ZmY7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgY29sb3I6ICMwMDAwOUQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNvdXJjZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5zb3VyY2VzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNvdXJjZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogIzcwZDZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNvdXJjZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDA5RDtcXG59XFxuXFxuLnNvdXJjZV9faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MGQ2ZmY7XFxuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbiAgICBjb2xvcjogIzcwZDZmZjtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNvdXJjZV9faXRlbTpob3ZlcixcXG4uc291cmNlX19pdGVtOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDlEO1xcbiAgICBjb2xvcjogIzAwMDA5RDtcXG4gICAgYm94LXNoYWRvdzogMCAwLjRlbSAwLjRlbSAtMC4yZW0gcmdiYSgwLCAwLCAxNTcsIDAuMyk7XFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTsgKi9cXG59XFxuXFxuLnNvdXJjZV9faXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QscURBQXFEO0lBQ3JELG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNvdXJjZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiAwLjFlbSAxZW07XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjNzBkNmZmICNmMGY2ZmY7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgY29sb3I6ICMwMDAwOUQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNvdXJjZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5zb3VyY2VzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNvdXJjZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogIzcwZDZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNvdXJjZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDA5RDtcXG59XFxuXFxuLnNvdXJjZV9faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MGQ2ZmY7XFxuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbiAgICBjb2xvcjogIzcwZDZmZjtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNvdXJjZV9faXRlbTpob3ZlcixcXG4uc291cmNlX19pdGVtOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDlEO1xcbiAgICBjb2xvcjogIzAwMDA5RDtcXG4gICAgYm94LXNoYWRvdzogMCAwLjRlbSAwLjRlbSAtMC4yZW0gcmdiYSgwLCAwLCAxNTcsIDAuMyk7XFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTsgKi9cXG59XFxuXFxuLnNvdXJjZV9faXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9jb21wb25lbnRzL2ltZy9oZWFkZXItYmFja2dyb3VuZC5qcGdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9jb21wb25lbnRzL2ltZy9oZWFkZXItbG9nby1NYWRlQnkuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4vY29tcG9uZW50cy9pbWcvaGVhZGVyLWxvZ28tbmV3c0FQSS5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi9jb21wb25lbnRzL2ltZy9mb290ZXItYmFja2dyb3VuZC5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgI0ZGRkZGRjtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XFxuICB3aWR0aDogOTV2dztcXG4gIGhlaWdodDogMTMwcHg7XFxufVxcblxcbi5oZWFkZXJfX25ld3MtbG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1ODBweDtcXG4gIG1hcmdpbjogMTdweCAyMHB4IDA7XFxufVxcblxcbi5oZWFkZXJfX25ld3MtbG9nb19saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhlYWRlcl9fbmV3cy1sb2dvX3VwcGVyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMzUwcHg7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW4gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4uaGVhZGVyX19uZXdzLWxvZ29fbG93ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtNHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogNTMwcHg7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW4gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogNjZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4uaGVhZGVyX19saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuICAuaGVhZGVyX19kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwOUQ7XFxuICAgIGNvbG9yOiAjMDAwMDlEO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyX19kcm9wZG93bi1hcnJvdyB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fZHJvcGRvd24tbGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAyNHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMztcXG4gIH1cXG5cXG4gIC5oZWFkZXJfX2Ryb3Bkb3duLWl0ZW0ge1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fZHJvcGRvd246aG92ZXIsXFxuICAuaGVhZGVyX19kcm9wZG93bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIH1cXG5cXG4gIC5oZWFkZXJfX2Ryb3Bkb3duOmhvdmVyPi5oZWFkZXJfX2Ryb3Bkb3duLWxpc3QsXFxuICAuaGVhZGVyX19kcm9wZG93bjpmb2N1cz4uaGVhZGVyX19kcm9wZG93bi1saXN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC4zcyBlYXNlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC4zcyBlYXNlO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fZHJvcGRvd24taXRlbTpob3ZlcixcXG4gIC5oZWFkZXJfX2Ryb3Bkb3duLWl0ZW06Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwgMjI4LCAyNDAsIDEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcycHgpO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSwgIzFGMUMxQztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgfVxcblxcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMCAxIDk1dnc7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDExODBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAuZm9vdGVyX19SUyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mb290ZXJfX2NvcHlyaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZm9vdGVyX19jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgLmZvb3RlciBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICMyOEFBRTE7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTE4MHB4KSB7XFxuICAgIC5oZWFkZXJfX2xpbmtzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogMTVweDtcXG4gICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAgIC5mb290ZXJfX2NvbnRhaW5lciB7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIGdhcDogMTBweDtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9fUlMsXFxuICAgIC5mb290ZXJfX2NvcHlyaWdodCxcXG4gICAgLmZvb3Rlcl9fY29udGFjdCB7XFxuICAgICAgbWFyZ2luOiBhdXRvIDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9fY29weXJpZ2h0IHtcXG4gICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMzNnB4KTtcXG4gICAgfSAgXFxuICB9XFxuICBcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICBcXG4gICAgLmhlYWRlcl9fbGlua3Mge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBnYXA6IDIwcHg7XFxuICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzg1cHgpO1xcbiAgICB9ICBcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xcbiAgICAuaGVhZGVyX19uZXdzLWxvZ28ge1xcbiAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyX19uZXdzLWxvZ29fbG93ZXIge1xcbiAgICAgIHdpZHRoOiA0MzBweDtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNzVweCk7XFxuICAgIH0gIFxcbiAgfVxcbiAgXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MTFweCk7XFxuICAgIH0gIFxcblxcbiAgICAuaGVhZGVyX19saW5rcyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDE1cHg7XFxuICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlcl9fbmV3cy1sb2dvIHtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyX19uZXdzLWxvZ29fdXBwZXIge1xcbiAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlcl9fbmV3cy1sb2dvX2xvd2VyIHtcXG4gICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgICB9XFxuICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7Ozs7RUFJRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtRkFBdUY7RUFDdkYsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLDRFQUFpRjtFQUNqRixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osNEVBQWtGO0VBQ2xGLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7RUFHRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBOztJQUVFLG9DQUFvQztFQUN0Qzs7RUFFQTs7SUFFRSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLHdDQUF3QztFQUMxQzs7RUFFQTs7SUFFRSxrQ0FBa0M7SUFDbEMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDRCQUE0QjtNQUM1QixvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSxVQUFVO01BQ1YsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsbUZBQXVGO0lBQ3ZGLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0Usc0JBQXNCO01BQ3RCLFNBQVM7TUFDVCxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGVBQWU7TUFDZiw2QkFBNkI7TUFDN0IsU0FBUztNQUNULFlBQVk7SUFDZDs7SUFFQTs7O01BR0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsUUFBUTtJQUNWOztJQUVBO01BQ0UsK0JBQStCO0lBQ2pDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLHNCQUFzQjtNQUN0QixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixTQUFTO01BQ1QsWUFBWTtJQUNkOztJQUVBO01BQ0UsK0JBQStCO0lBQ2pDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFlBQVk7TUFDWixlQUFlO01BQ2YsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsK0JBQStCO0lBQ2pDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLCtCQUErQjtJQUNqQzs7SUFFQTtNQUNFLHNCQUFzQjtNQUN0QixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLFdBQVc7SUFDYjs7SUFFQTtNQUNFLFlBQVk7TUFDWixlQUFlO01BQ2YsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsWUFBWTtNQUNaLGVBQWU7TUFDZixpQkFBaUI7SUFDbkI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKC4vY29tcG9uZW50cy9pbWcvaGVhZGVyLWJhY2tncm91bmQuanBnKSwgI0ZGRkZGRjtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XFxuICB3aWR0aDogOTV2dztcXG4gIGhlaWdodDogMTMwcHg7XFxufVxcblxcbi5oZWFkZXJfX25ld3MtbG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1ODBweDtcXG4gIG1hcmdpbjogMTdweCAyMHB4IDA7XFxufVxcblxcbi5oZWFkZXJfX25ld3MtbG9nb19saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhlYWRlcl9fbmV3cy1sb2dvX3VwcGVyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMzUwcHg7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvbnRhaW4gdXJsKC4vY29tcG9uZW50cy9pbWcvaGVhZGVyLWxvZ28tTWFkZUJ5LnN2Zyk7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLmhlYWRlcl9fbmV3cy1sb2dvX2xvd2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTRweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDUzMHB4O1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb250YWluIHVybCguL2NvbXBvbmVudHMvaW1nL2hlYWRlci1sb2dvLW5ld3NBUEkuc3ZnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogNjZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4uaGVhZGVyX19saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuICAuaGVhZGVyX19kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwOUQ7XFxuICAgIGNvbG9yOiAjMDAwMDlEO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyX19kcm9wZG93bi1hcnJvdyB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fZHJvcGRvd24tbGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAyNHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMztcXG4gIH1cXG5cXG4gIC5oZWFkZXJfX2Ryb3Bkb3duLWl0ZW0ge1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fZHJvcGRvd246aG92ZXIsXFxuICAuaGVhZGVyX19kcm9wZG93bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIH1cXG5cXG4gIC5oZWFkZXJfX2Ryb3Bkb3duOmhvdmVyPi5oZWFkZXJfX2Ryb3Bkb3duLWxpc3QsXFxuICAuaGVhZGVyX19kcm9wZG93bjpmb2N1cz4uaGVhZGVyX19kcm9wZG93bi1saXN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC4zcyBlYXNlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC4zcyBlYXNlO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fZHJvcGRvd24taXRlbTpob3ZlcixcXG4gIC5oZWFkZXJfX2Ryb3Bkb3duLWl0ZW06Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwgMjI4LCAyNDAsIDEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcycHgpO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKC4vY29tcG9uZW50cy9pbWcvZm9vdGVyLWJhY2tncm91bmQuanBnKSwgIzFGMUMxQztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgfVxcblxcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMCAxIDk1dnc7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDExODBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAuZm9vdGVyX19SUyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mb290ZXJfX2NvcHlyaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZm9vdGVyX19jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgLmZvb3RlciBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICMyOEFBRTE7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTE4MHB4KSB7XFxuICAgIC5oZWFkZXJfX2xpbmtzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogMTVweDtcXG4gICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAgIC5mb290ZXJfX2NvbnRhaW5lciB7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIGdhcDogMTBweDtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9fUlMsXFxuICAgIC5mb290ZXJfX2NvcHlyaWdodCxcXG4gICAgLmZvb3Rlcl9fY29udGFjdCB7XFxuICAgICAgbWFyZ2luOiBhdXRvIDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9fY29weXJpZ2h0IHtcXG4gICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMzNnB4KTtcXG4gICAgfSAgXFxuICB9XFxuICBcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICBcXG4gICAgLmhlYWRlcl9fbGlua3Mge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBnYXA6IDIwcHg7XFxuICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzg1cHgpO1xcbiAgICB9ICBcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xcbiAgICAuaGVhZGVyX19uZXdzLWxvZ28ge1xcbiAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyX19uZXdzLWxvZ29fbG93ZXIge1xcbiAgICAgIHdpZHRoOiA0MzBweDtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNzVweCk7XFxuICAgIH0gIFxcbiAgfVxcbiAgXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MTFweCk7XFxuICAgIH0gIFxcblxcbiAgICAuaGVhZGVyX19saW5rcyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDE1cHg7XFxuICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlcl9fbmV3cy1sb2dvIHtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyX19uZXdzLWxvZ29fdXBwZXIge1xcbiAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlcl9fbmV3cy1sb2dvX2xvd2VyIHtcXG4gICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgICB9XFxuICB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc291cmNlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XG5pbXBvcnQgeyBOZXdzRGF0YSwgU291cmNlc0RhdGEgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi4vdmlldy9hcHBWaWV3JztcblxuaW50ZXJmYWNlIEFwcCB7XG4gIGNvbnRyb2xsZXI6IEFwcENvbnRyb2xsZXI7XG4gIHZpZXc6IEFwcFZpZXc7XG4gIHN0YXJ0KCk6IHZvaWQ7XG59XG5cbmNsYXNzIE5ld3NBcHAgaW1wbGVtZW50cyBQaWNrPEFwcCwgJ3N0YXJ0Jz4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb250cm9sbGVyOiBBcHBDb250cm9sbGVyO1xuICBwcml2YXRlIHJlYWRvbmx5IF92aWV3OiBBcHBWaWV3O1xuICBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZztcbiAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBjb3VudHJ5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY29udHJvbGxlciA9IG5ldyBBcHBDb250cm9sbGVyKCk7XG4gICAgdGhpcy5fdmlldyA9IG5ldyBBcHBWaWV3KCk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5fY29udHJvbGxlci5nZXROZXdzKGUsIChkYXRhOiBOZXdzRGF0YSkgPT4gdGhpcy5fdmlldy5kcmF3TmV3cyhkYXRhKSkpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbGlua3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNoYW5nZVNvdXJjZShlKSk7XG5cbiAgICB0aGlzLmFjY2Vzc1N0b3JhZ2UoKTtcbiAgICB0aGlzLl9jb250cm9sbGVyLmdldFNvdXJjZXModGhpcy5jYXRlZ29yeSwgdGhpcy5sYW5ndWFnZSwgdGhpcy5jb3VudHJ5LCAoZGF0YTogU291cmNlc0RhdGEpID0+XG4gICAgICB0aGlzLl92aWV3LmRyYXdTb3VyY2VzKGRhdGEpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhY2Nlc3NTdG9yYWdlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcnknKSkge1xuICAgICAgdGhpcy5jYXRlZ29yeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yeScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhdGVnb3J5ID0gJ2FsbCc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcnknLCAnYWxsJyk7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpKSB7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSAnZW4nO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgJ2VuJyk7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3VudHJ5JykpIHtcbiAgICAgIHRoaXMuY291bnRyeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3VudHJ5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY291bnRyeSA9ICd1cyc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnRyeScsICd1cycpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VTb3VyY2UoZTogRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2F0ZWdvcnknKSkge1xuICAgICAgdGhpcy5jYXRlZ29yeSA9IHRhcmdldC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yeScsIHRoaXMuY2F0ZWdvcnkpO1xuICAgICAgdGhpcy5fY29udHJvbGxlci5nZXRTb3VyY2VzKHRoaXMuY2F0ZWdvcnksIHRoaXMubGFuZ3VhZ2UsIHRoaXMuY291bnRyeSwgKGRhdGE6IFNvdXJjZXNEYXRhKSA9PlxuICAgICAgICB0aGlzLl92aWV3LmRyYXdTb3VyY2VzKGRhdGEpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsYW5ndWFnZScpKSB7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gdGFyZ2V0LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgdGhpcy5sYW5ndWFnZSk7XG4gICAgICB0aGlzLl9jb250cm9sbGVyLmdldFNvdXJjZXModGhpcy5jYXRlZ29yeSwgdGhpcy5sYW5ndWFnZSwgdGhpcy5jb3VudHJ5LCAoZGF0YTogU291cmNlc0RhdGEpID0+XG4gICAgICAgIHRoaXMuX3ZpZXcuZHJhd1NvdXJjZXMoZGF0YSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50cnknKSkge1xuICAgICAgdGhpcy5jb3VudHJ5ID0gdGFyZ2V0LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdW50cnknLCB0aGlzLmNvdW50cnkpO1xuICAgICAgdGhpcy5fY29udHJvbGxlci5nZXRTb3VyY2VzKHRoaXMuY2F0ZWdvcnksIHRoaXMubGFuZ3VhZ2UsIHRoaXMuY291bnRyeSwgKGRhdGE6IFNvdXJjZXNEYXRhKSA9PlxuICAgICAgICB0aGlzLl92aWV3LmRyYXdTb3VyY2VzKGRhdGEpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzQXBwO1xuIiwiaW1wb3J0IHsgSUxvYWQsIExvYWRlciB9IGZyb20gJy4vbG9hZGVyJztcblxuY2xhc3MgQXBwTG9hZGVyIGV4dGVuZHMgTG9hZGVyIGltcGxlbWVudHMgUGFydGlhbDxJTG9hZD4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignaHR0cHM6Ly9ub2RlbmV3cy5oZXJva3VhcHAuY29tLycsIHtcbiAgICAgIGFwaUtleTogJzBiNDkzYWQyNjkwZTRhZmNiZTg3ZmFkNjAzM2ZlMjRiJywgLy8g0L/QvtC70YPRh9C40YLQtSDRgdCy0L7QuSDQutC70Y7RhyBodHRwczovL25ld3NhcGkub3JnL1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExvYWRlcjtcbiIsImltcG9ydCB7IE5ld3NEYXRhLCBTb3VyY2VzRGF0YSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBBcHBMb2FkZXIgZnJvbSAnLi9hcHBMb2FkZXInO1xuaW1wb3J0IHsgSUxvYWQgfSBmcm9tICcuL2xvYWRlcic7XG5cbmludGVyZmFjZSBDb250cm9sbGVyIGV4dGVuZHMgSUxvYWQge1xuICBnZXRTb3VyY2VzKFxuICAgIGNhdGVnb3J5OiBzdHJpbmcsXG4gICAgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgICBjb3VudHJ5OiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6ICgoZGF0YT86IFNvdXJjZXNEYXRhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZFxuICApOiB2b2lkO1xuICBnZXROZXdzKGU6IEV2ZW50LCBjYWxsYmFjazogKChkYXRhPzogTmV3c0RhdGEpID0+IHZvaWQpIHwgdW5kZWZpbmVkKTogdm9pZDtcbn1cblxuY2xhc3MgQXBwQ29udHJvbGxlciBleHRlbmRzIEFwcExvYWRlciBpbXBsZW1lbnRzIENvbnRyb2xsZXIge1xuICBnZXRTb3VyY2VzKFxuICAgIGNhdGVnb3J5OiBzdHJpbmcsXG4gICAgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgICBjb3VudHJ5OiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6ICgoZGF0YT86IFNvdXJjZXNEYXRhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlci5nZXRSZXNwKFxuICAgICAge1xuICAgICAgICBlbmRwb2ludDogJ3NvdXJjZXMnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcbiAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcbiAgfVxuXG4gIGdldE5ld3MoZTogRXZlbnQsIGNhbGxiYWNrOiAoKGRhdGE/OiBOZXdzRGF0YSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIHdoaWxlICh0YXJnZXQgIT09IG5ld3NDb250YWluZXIpIHtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzb3VyY2VfX2l0ZW0nKSkge1xuICAgICAgICBjb25zdCBzb3VyY2VJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlLWlkJyk7XG4gICAgICAgIGlmIChuZXdzQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnKSAhPT0gc291cmNlSWQpIHtcbiAgICAgICAgICBuZXdzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnLCBzb3VyY2VJZCk7XG4gICAgICAgICAgc3VwZXIuZ2V0UmVzcChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW5kcG9pbnQ6ICdldmVyeXRoaW5nJyxcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHNvdXJjZXM6IHNvdXJjZUlkLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udHJvbGxlcjtcbiIsImltcG9ydCB7IE5ld3NEYXRhLCBTb3VyY2VzRGF0YSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEhUVFBTdGF0dXMgfSBmcm9tICcuLi9lbnVtJztcblxuLyoqXG4gKiBMb2FkZXIgdGFrZXMgbGluayAoaGVyZSB0byBuZXdzQXBpKSBhbmQgYXBpS2V5IGluIG9wdGlvbnMuXG4gKiBnZXRSZXNwIGlzIHRoZSBtYWluIG1ldGhvZCB0byBkb3dubG9hZCBuZXdzLCB1c2VzIGxvYWQuXG4gKiBlcnJvckhhbmRsZXIgdGhyb3dzIDQwMSBvciA0MDQgZXJyb3JzLlxuICogbWFrZVVybCBjcmVhdGVzIFVSTCBmcm9tIGJhc2VMaW5rIGFuZCBlbmRwb2ludC5cbiAqIGxvYWQgbWV0aG9kIDEuIGNyZWF0ZSBVUkwsIDIuIENoZWNrIGZvciBlcnJvcnMsIDMuIGRvd25sb2FkcyBuZXdzLCA0LiBwcm9jZXNzIHRoZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUxvYWQge1xuICBiYXNlTGluazogc3RyaW5nO1xuICBvcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBnZXRSZXNwKGU6IHsgZW5kcG9pbnQ6IHN0cmluZzsgb3B0aW9ucz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0sIGNhbGxiYWNrOiA8VD4oZGF0YT86IFQpID0+IHZvaWQpOiB2b2lkO1xuICBlcnJvckhhbmRsZXI8VCBleHRlbmRzIFJlc3BvbnNlPihyZXM6IFQpOiBUO1xuICBtYWtlVXJsKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZGVyIGltcGxlbWVudHMgUmVhZG9ubHk8SUxvYWQ+IHtcbiAgYmFzZUxpbms6IHN0cmluZztcbiAgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICBjb25zdHJ1Y3RvcihiYXNlTGluazogc3RyaW5nLCBvcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5iYXNlTGluayA9IGJhc2VMaW5rO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXRSZXNwKFxuICAgIHsgZW5kcG9pbnQsIG9wdGlvbnMgPSB7fSB9OiB7IGVuZHBvaW50OiBzdHJpbmc7IG9wdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9LFxuICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gY2FsbGJhY2sgZm9yIEdFVCByZXNwb25zZScpO1xuICAgIH1cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkKCdHRVQnLCBlbmRwb2ludCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB9XG5cbiAgZXJyb3JIYW5kbGVyPFQgZXh0ZW5kcyBSZXNwb25zZT4ocmVzOiBUKTogVCB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChIVFRQU3RhdHVzW3Jlcy5zdGF0dXNdKVxuICAgICAgICBjb25zb2xlLmxvZyhgU29ycnksIGJ1dCB0aGVyZSBpcyAke3Jlcy5zdGF0dXN9ICR7SFRUUFN0YXR1c1tyZXMuc3RhdHVzXX0gZXJyb3I6ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICB0aHJvdyBFcnJvcihyZXMuc3RhdHVzVGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIG1ha2VVcmwob3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgZW5kcG9pbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IHVybE9wdGlvbnMgPSB7IC4uLnRoaXMub3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLmJhc2VMaW5rfSR7ZW5kcG9pbnR9P2A7XG5cbiAgICBPYmplY3Qua2V5cyh1cmxPcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICh1cmxPcHRpb25zW2tleV0gJiYgdXJsT3B0aW9uc1trZXldICE9PSAnYWxsJykge1xuICAgICAgICB1cmwgKz0gYCR7a2V5fT0ke3VybE9wdGlvbnNba2V5XX0mYDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1cmwuc2xpY2UoMCwgLTEpO1xuICB9XG5cbiAgbG9hZChtZXRob2Q6IHN0cmluZywgZW5kcG9pbnQ6IHN0cmluZywgY2FsbGJhY2s6IHsgKGRhdGE/OiBOZXdzRGF0YSB8IFNvdXJjZXNEYXRhKTogdm9pZCB9LCBvcHRpb25zID0ge30pIHtcbiAgICBmZXRjaCh0aGlzLm1ha2VVcmwob3B0aW9ucywgZW5kcG9pbnQpLCB7IG1ldGhvZCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5lcnJvckhhbmRsZXIocmVzKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YT86IE5ld3NEYXRhIHwgU291cmNlc0RhdGEpID0+IGNhbGxiYWNrKGRhdGEpKVxuICAgICAgLmNhdGNoKChlcnI/OiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEhUVFBTdGF0dXMge1xuICBCYWRSZXF1ZXN0ID0gNDAwLFxuICBVbmF1dGhvcml6ZWQsXG4gIFBheW1lbnRSZXF1aXJlZCxcbiAgRm9yYmlkZGVuLFxuICBOb3RGb3VuZCxcbiAgTWV0aG9kTm90QWxsb3dlZCxcbiAgTm90QWNjZXB0YWJsZSxcbiAgUHJveHlBdXRoUmVxdWlyZWQsXG4gIFJlcXVlc3RUaW1lb3V0LFxuICBDb25mbGljdCxcbiAgR29uZSxcbiAgTGVuZ3RoUmVxdWlyZWQsXG4gIFByZWNvbmRpdGlvbkZhaWxlZCxcbiAgUGF5bG9hZFRvb0xhcmdlLFxuICBVUklUb29Mb25nLFxuICBVbnN1cHBvcnRlZE1lZGlhVHlwZSxcbiAgUmFuZ2VOb3RTYXRpc2ZpYWJsZSxcbiAgRXhwZWN0YXRpb25GYWlsZWQsXG4gIEltQVRlYXBvdCxcbiAgTWlzZGlyZWN0ZWRSZXF1ZXN0ID0gNDIxLFxuICBVbnByb2Nlc3NhYmxlRW50aXR5LFxuICBMb2NrZWQsXG4gIEZhaWxlZERlcGVuZGVuY3ksXG4gIFVwZ3JhZGVSZXF1aXJlZCA9IDQyNixcbiAgUHJlY29uZGl0aW9uUmVxdWlyZWQgPSA0MjgsXG4gIFRvb01hbnlSZXF1ZXN0cyxcbiAgUmVxdWVzdEhlYWRlckZpZWxkc1Rvb0xhcmdlID0gNDMxLFxuICBMb2dpblRpbWVPdXQgPSA0NDAsXG4gIFJldHJ5V2l0aCA9IDQ0OSxcbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnMgPSA0NTEsXG5cbiAgSW50ZXJuYWwgPSA1MDAsXG4gIE5vdEltcGxlbWVudGVkLFxuICBCYWRHYXRld2F5LFxuICBTZXJ2aWNlVW5hdmFpbGFibGUsXG4gIEdhdGV3YXlUaW1lb3V0LFxuICBIVFRQVmVyc2lvbk5vdFN1cHBvcnRlZCxcbiAgVmFyaWFudEFsc29OZWdvdGlhdGVzLFxuICBJbnN1ZmZpY2llbnRTdG9yYWdlLFxuICBMb29wRGV0ZWN0ZWQsXG4gIEJhbmR3aWR0aExpbWl0RXhjZWVkZWQsXG4gIE5vdEV4dGVuZGVkLFxuICBOZXR3b3JrQXV0aFJlcXVpcmVkLFxufVxuIiwiaW1wb3J0IE5ld3MgZnJvbSAnLi9uZXdzL25ld3MnO1xuaW1wb3J0IFNvdXJjZXMgZnJvbSAnLi9zb3VyY2VzL3NvdXJjZXMnO1xuaW1wb3J0IHsgTmV3c0RhdGEsIFNvdXJjZXNEYXRhIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgVmlld2VyIHtcbiAgbmV3czogTmV3cztcbiAgc291cmNlczogU291cmNlcztcbiAgZHJhd05ld3MoZGF0YTogTmV3c0RhdGEpOiB2b2lkO1xuICBkcmF3U291cmNlcyhkYXRhOiBTb3VyY2VzRGF0YSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBWaWV3IGltcGxlbWVudHMgVmlld2VyIHtcbiAgbmV3czogTmV3cztcbiAgc291cmNlczogU291cmNlcztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5ld3MgPSBuZXcgTmV3cygpO1xuICAgIHRoaXMuc291cmNlcyA9IG5ldyBTb3VyY2VzKCk7XG4gIH1cblxuICBkcmF3TmV3cyhkYXRhOiBOZXdzRGF0YSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlczogTmV3c0RhdGFbJ2FydGljbGVzJ10gfCBbXSA9IGRhdGE/LmFydGljbGVzID8gZGF0YT8uYXJ0aWNsZXMgOiBbXTtcbiAgICB0aGlzLm5ld3MuZHJhdyh2YWx1ZXMpO1xuICB9XG5cbiAgZHJhd1NvdXJjZXMoZGF0YTogU291cmNlc0RhdGEpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZXM6IFNvdXJjZXNEYXRhWydzb3VyY2VzJ10gfCBbXSA9IGRhdGE/LnNvdXJjZXMgPyBkYXRhPy5zb3VyY2VzIDogW107XG4gICAgdGhpcy5zb3VyY2VzLmRyYXcodmFsdWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBWaWV3O1xuIiwiaW1wb3J0ICcuL25ld3MuY3NzJztcbmltcG9ydCB7IE5ld3NEYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgRE9NRHJhdyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG5jbGFzcyBOZXdzIGltcGxlbWVudHMgRE9NRHJhdyB7XG4gIGRyYXcoZGF0YTogTmV3c0RhdGFbJ2FydGljbGVzJ10gfCBbXSkge1xuICAgIGNvbnN0IG5ld3MgPSBkYXRhLmxlbmd0aCA+PSAxMCA/IGRhdGEuZmlsdGVyKChfaXRlbSwgaWR4KSA9PiBpZHggPCAxMCkgOiBkYXRhO1xuXG4gICAgY29uc3QgZnJhZ21lbnRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGZyYWdtZW50RmxleCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBuZXdzSXRlbUdyaWQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3c0l0ZW1HcmlkJyk7XG4gICAgY29uc3QgbmV3c0l0ZW1GbGV4OiBIVE1MVGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3NJdGVtRmxleCcpO1xuXG4gICAgbmV3cy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmIChpZHggPCA0KSB7XG4gICAgICAgIGNvbnN0IG5ld3NDbG9uZSA9IG5ld3NJdGVtR3JpZC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXG4gICAgICAgICAgJy5uZXdzX19pdGVtLWdyaWQnXG4gICAgICAgICkuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoMzU4Ljg2ZGVnLCAjMDAwIDAuOSUsIHJnYmEoMCwgMCwgMCwgMCkgNTAlKSwgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciB1cmwoJHtcbiAgICAgICAgICBpdGVtLnVybFRvSW1hZ2UgfHwgJ2ltYWdlcy9uZXdzX3BsYWNlaG9sZGVyLmpwZydcbiAgICAgICAgfSlgO1xuICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2l0ZW0tZ3JpZCcpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGl0ZW0udXJsKTtcbiAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWRhdGUtZ3JpZCcpLnRleHRDb250ZW50ID0gaXRlbS5wdWJsaXNoZWRBdFxuICAgICAgICAgIC5zbGljZSgwLCAxMClcbiAgICAgICAgICAuc3BsaXQoJy0nKVxuICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAuam9pbignLScpO1xuXG4gICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tdGl0bGUtZ3JpZCcpLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50LWdyaWQnKS50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgZnJhZ21lbnRHcmlkLmFwcGVuZChuZXdzQ2xvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3c0Nsb25lID0gbmV3c0l0ZW1GbGV4LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmIChpZHggJSAyKSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2l0ZW0tZmxleCcpLmNsYXNzTGlzdC5hZGQoJ2FsdCcpO1xuXG4gICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLm5ld3NfX21ldGEtcGhvdG8tZmxleCcpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtcbiAgICAgICAgICBpdGVtLnVybFRvSW1hZ2UgfHwgJ2ltYWdlcy9uZXdzX3BsYWNlaG9sZGVyLmpwZydcbiAgICAgICAgfSlgO1xuICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX21ldGEtYXV0aG9yLWZsZXgnKS50ZXh0Q29udGVudCA9IGl0ZW0uYXV0aG9yIHx8IGl0ZW0uc291cmNlLm5hbWU7XG4gICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbWV0YS1kYXRlLWZsZXgnKS50ZXh0Q29udGVudCA9IGl0ZW0ucHVibGlzaGVkQXRcbiAgICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgLmpvaW4oJy0nKTtcblxuICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlLWZsZXgnKS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tc291cmNlLWZsZXgnKS50ZXh0Q29udGVudCA9IGl0ZW0uc291cmNlLm5hbWU7XG4gICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tY29udGVudC1mbGV4JykudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX3JlYWQtbW9yZS1mbGV4IGEnKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpdGVtLnVybCk7XG5cbiAgICAgICAgZnJhZ21lbnRGbGV4LmFwcGVuZChuZXdzQ2xvbmUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX2luZm8nKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fZ3JpZCcpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19ncmlkJykuYXBwZW5kQ2hpbGQoZnJhZ21lbnRHcmlkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fZmxleCcpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19mbGV4JykuYXBwZW5kQ2hpbGQoZnJhZ21lbnRGbGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIiwiaW1wb3J0ICcuL3NvdXJjZXMuY3NzJztcbmltcG9ydCB7IFNvdXJjZXNEYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgRE9NRHJhdyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG5jbGFzcyBTb3VyY2VzIGltcGxlbWVudHMgRE9NRHJhdyB7XG4gIGRyYXcoZGF0YTogU291cmNlc0RhdGFbJ3NvdXJjZXMnXSB8IFtdKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3Qgc291cmNlSXRlbVRlbXA6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291cmNlSXRlbVRlbXAnKTtcblxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlQ2xvbmUgPSBzb3VyY2VJdGVtVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNvdXJjZV9faXRlbS1uYW1lJykudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc291cmNlX19pdGVtJykuc2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZS1pZCcsIGl0ZW0uaWQpO1xuXG4gICAgICBmcmFnbWVudC5hcHBlbmQoc291cmNlQ2xvbmUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZXMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpLmFwcGVuZChmcmFnbWVudCk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2VzJykuaW5uZXJIVE1MID09PSAnJylcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2VzJykuaW5uZXJIVE1MID0gYC4uLk5vIG5ld3Mgc291cmNlcyB0byBzaG93IGZvciBjYXRlZ29yeTogJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgJ2NhdGVnb3J5J1xuICAgICAgKX0sIGxhbmd1YWdlOiAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpfSBhbmQgY291bnRyeTogJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291bnRyeScpfS5gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdXJjZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTmV3c0FwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XG5pbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBOZXdzQXBwKCk7XG5hcHAuc3RhcnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==