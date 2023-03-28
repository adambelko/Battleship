/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/style.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml {\\n  font-family: \\\"Secular One\\\", sans-serif;\\n  font-size: 62.5%;\\n  box-sizing: border-box;\\n  height: 100%;\\n  background: #fafafa;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: center;\\n  font-size: 3.8rem;\\n  margin-top: 2rem;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 4rem;\\n}\\n\\n.main__board-wrapper {\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 1rem;\\n  gap: 7rem;\\n}\\n.main__board-wrapper p {\\n  font-size: 3rem;\\n}\\n\\n.main__board--left-wrapper,\\n.main__board--right-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\nbutton {\\n  font-family: inherit;\\n}\\n\\n.button-wrapper {\\n  display: flex;\\n  width: 40rem;\\n  justify-content: space-around;\\n}\\n\\n.auto-place-btn,\\n.reset-btn,\\n.start-game-btn {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #bae6fd;\\n  height: 5.7rem;\\n  width: 14rem;\\n  font-size: 2.1rem;\\n  font-weight: bold;\\n  margin-top: 2rem;\\n  border: 0.3rem solid black;\\n  border-radius: 1rem;\\n  transition: all 0.2s ease-in-out;\\n}\\n.auto-place-btn:hover,\\n.reset-btn:hover,\\n.start-game-btn:hover {\\n  background-color: #95d7fb;\\n  transform: scale(1.06);\\n}\\n\\n.start-game-btn {\\n  background-color: #4ade80;\\n}\\n.start-game-btn:hover {\\n  background-color: #22c55e;\\n}\\n\\n.main__board--left,\\n.main__board--right {\\n  display: grid;\\n  grid-template-columns: repeat(10, 4rem);\\n  grid-template-rows: repeat(10, 4rem);\\n  border: 0.4rem solid #5e5e5e;\\n}\\n\\n.main__board-cell {\\n  border: 0.1rem solid #949393;\\n  background: #fafafa;\\n}\\n\\n.main__board-ship {\\n  background: #bae6fd;\\n  transition: 0.1s ease-in-out;\\n}\\n\\n.board-ship--hor-start {\\n  border-top: 0.3rem solid #272727;\\n  border-right: none;\\n  border-bottom: 0.3rem solid #272727;\\n  border-left: 0.3rem solid #272727;\\n}\\n\\n.board-ship--hor-body {\\n  border-top: 0.3rem solid #272727;\\n  border-right: none;\\n  border-bottom: 0.3rem solid #272727;\\n  border-left: none;\\n}\\n\\n.board-ship--hor-end {\\n  border-top: 0.3rem solid #272727;\\n  border-right: 0.3rem solid #272727;\\n  border-bottom: 0.3rem solid #272727;\\n  border-left: none;\\n}\\n\\n.board-ship--ver-start {\\n  border-top: 0.3rem solid #272727;\\n  border-right: 0.3rem solid #272727;\\n  border-bottom: none;\\n  border-left: 0.3rem solid #272727;\\n}\\n\\n.board-ship--ver-body {\\n  border-top: none;\\n  border-right: 0.3rem solid #272727;\\n  border-bottom: none;\\n  border-left: 0.3rem solid #272727;\\n}\\n\\n.board-ship--ver-end {\\n  border-top: none;\\n  border-right: 0.3rem solid #272727;\\n  border-bottom: 0.3rem solid #272727;\\n  border-left: 0.3rem solid #272727;\\n}\\n\\n.main__board-ship--hit {\\n  background: #f87171;\\n  transition: all 0.1s ease-in-out;\\n}\\n\\n.main__board-miss {\\n  background-color: #4ade80;\\n  transition: all 0.1s ease-in-out;\\n}\\n\\n.main__modal {\\n  display: none;\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  transition: all 0.5s ease-in-out;\\n}\\n\\n.modal-content {\\n  display: flex;\\n  flex-direction: column;\\n  font-size: 2.8rem;\\n  align-items: center;\\n  margin: 15% auto;\\n  width: fit-content;\\n  padding: 4rem;\\n  border: 0.7rem solid black;\\n  border-radius: 1rem;\\n  background-color: #ddcbcb;\\n}\\n\\n.modal-play-again-btn {\\n  font-size: 3rem;\\n  margin: 1rem;\\n  width: 80%;\\n  padding: 1rem;\\n  border: 0.3rem solid black;\\n  border-radius: 1rem;\\n  background-color: #4ade80;\\n  transition: all 0.1s ease-in-out;\\n}\\n.modal-play-again-btn:hover {\\n  background-color: #22c55e;\\n  transform: scale(1.03);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/sass/style.scss":
/*!************************************!*\
  !*** ./src/styles/sass/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/factories/game.js":
/*!***********************************!*\
  !*** ./src/app/factories/game.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/app/factories/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/app/factories/player.js\");\n/* harmony import */ var _views_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/elements.js */ \"./src/app/views/elements.js\");\n/* harmony import */ var _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/gameboardView.js */ \"./src/app/views/gameboardView.js\");\n\n\n\n\n\nconst Game = () => {\n    const boardOne = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const boardTwo = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    const playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const playerTwo = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    const renderGameboard = () => {\n        _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderGameboard(_views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].boardOne);\n        _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderGameboard(_views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].boardTwo);\n    };\n\n    const autoPlace = () => {\n        if (boardTwo.getFleet().length >= 5) return;\n        resetFleet(boardOne);\n        autoPlaceFleet(boardOne, playerOne.createFleet());\n        _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].resetFleet(_views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].boardOneCells());\n        _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderFleet(boardOne, _views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].boardOne);\n    };\n\n    const autoPlaceFleet = (board, fleet) => {\n        board.autoPlaceFleet(board, fleet);\n    };\n\n    // Check whether or not pressing auto-place and start game btn is allowed\n    const checkGameRules = () => {\n        if (boardOne.getFleet().length === 0) return false;\n        if (boardTwo.getFleet().length >= 5) return false;\n        return true;\n    };\n\n    const placeEnemyFleet = () => {\n        autoPlaceFleet(boardTwo, playerTwo.createFleet());\n        // views.renderFleet(boardTwo, el.boardTwo); // for develop only\n    };\n\n    // Event listeners for enemy (computer) gameboard cells\n    const waitForEnemyAttack = () => {\n        _views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].boardTwoCells().forEach((cell) => {\n            cell.addEventListener(\"click\", beginAttacks);\n        });\n    };\n\n    const beginAttacks = (e) => {\n        // attack boardTwo if there's no attack on same coords twice\n        if (!attackBoardTwo(e, boardTwo)) return;\n        // Computer attacks right after\n        attackBoardOne();\n        checkForWinner();\n    };\n\n    const attackBoardOne = () => {\n        const [x, y] = playerTwo.randomAttack(boardOne);\n        _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderReceivedAttackfromCoords([x, y], boardOne);\n    };\n\n    const attackBoardTwo = (e, board) => {\n        const x = e.target.dataset.x;\n        const y = e.target.dataset.y;\n        // Return false when same coords are attacked twice\n        if (!board.receiveAttack(x, y)) return false;\n        board.receiveAttack(x, y);\n        _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderReceivedAttack(e, board);\n        return true;\n    };\n\n    const checkForWinner = () => {\n        if (boardOne.allShipsSunk()) _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showWinner(\"boardTwo\", reset());\n        if (boardTwo.allShipsSunk()) _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showWinner(\"boardOne\", reset());\n    };\n\n    // Completely reset both gameboards\n    const reset = () => {\n        resetFleet(boardOne);\n        resetFleet(boardTwo);\n        _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].resetGameboard(_views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].boardOneCells());\n        _views_gameboardView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].resetGameboard(_views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].boardTwoCells());\n        _views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].boardTwoCells().forEach((cell) => {\n            cell.removeEventListener(\"click\", beginAttacks);\n        });\n    };\n\n    const resetFleet = (board) => {\n        board.resetBoard();\n        board.resetFleet();\n    };\n\n    return {\n        renderGameboard,\n        autoPlace,\n        checkGameRules,\n        placeEnemyFleet,\n        waitForEnemyAttack,\n        reset,\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/app/factories/game.js?");

/***/ }),

/***/ "./src/app/factories/gameboard.js":
/*!****************************************!*\
  !*** ./src/app/factories/gameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = () => {\n    // Create a board 10 x 10\n    let board = Array(10)\n        .fill(null)\n        .map(() => Array(10).fill(null));\n\n    let fleet = [];\n    const getBoard = () => board;\n    const getFleet = () => fleet;\n\n    const getCoords = (x, y, i, direction) => {\n        let hor;\n        let ver;\n\n        if (direction === \"hor\") {\n            hor = x + i;\n            ver = y;\n        } else {\n            hor = x;\n            ver = y + i;\n        }\n        return [hor, ver];\n    };\n\n    // Check if ship is placed within the gameboard squares\n    const checkShipPlacement = (x, y, length, direction) => {\n        if (direction === \"hor\" && x + length < 10) {\n            return true;\n        } else if (direction === \"ver\" && y + length < 10) {\n            return true;\n        } else {\n            return false;\n        }\n    };\n\n    // Check if ship collides with another ship\n    const checkShipCollision = (x, y, length, direction) => {\n        for (let i = 0; i < length; i++) {\n            const [hor, ver] = getCoords(x, y, i, direction);\n\n            if (board[hor][ver] !== null) {\n                return false;\n            }\n        }\n        return true;\n    };\n\n    // Place ship within the gameboard\n    const placeShip = (ship, x, y) => {\n        const direction = ship.getDirection();\n        const length = ship.getLength();\n        const valid1 = checkShipPlacement(x, y, length, direction);\n        if (valid1 === false) return false;\n\n        const valid2 = checkShipCollision(x, y, length, direction);\n        if (valid2 === false) return false;\n\n        for (let i = 0; i < length; i++) {\n            const [hor, ver] = getCoords(x, y, i, direction);\n            ship.coords.push([hor, ver]);\n            board[hor][ver] = ship;\n        }\n        fleet.push(ship);\n        return true;\n    };\n\n    const autoPlaceFleet = (board, fleet) => {\n        fleet.forEach((ship) => autoPlaceShip(board, ship));\n    };\n\n    const autoPlaceShip = (board, ship) => {\n        const randomInt = () => Math.floor(Math.random() * 9);\n        // Generate two random numbers and compare it agains each other to\n        // determine direction of a ship\n        if (randomInt() < randomInt()) ship.changeDirection();\n        // Keep looping till placeShip returns true\n        const placeShip = () => board.placeShip(ship, randomInt(), randomInt());\n        // eslint-disable-next-line no-constant-condition\n        while (true) {\n            let ship = placeShip();\n            if (ship === true) {\n                break;\n            }\n        }\n    };\n\n    // If attack is beiing targeted at same coords return fasle,\n    // otherwise return true\n    const receiveAttack = (x, y) => {\n        if (board[x][y] === \"hit\") {\n            return false;\n        } else if (board[x][y] === \"miss\") {\n            return false;\n        } else if (board[x][y] === null) {\n            board[x][y] = \"miss\";\n            return true;\n        } else {\n            board[x][y].hit();\n            board[x][y] = \"hit\";\n            return true;\n        }\n    };\n\n    // Determine if all ships within  a fleet have been sunk\n    const allShipsSunk = () => {\n        for (let i = 0; i < fleet.length; i++) {\n            if (fleet[i].isSunk() === false) {\n                return false;\n            }\n        }\n        return true;\n    };\n\n    const resetBoard = () => {\n        board = Array(10)\n            .fill(null)\n            .map(() => Array(10).fill(null));\n    };\n\n    const resetFleet = () => {\n        fleet = [];\n    };\n\n    return {\n        getBoard,\n        getFleet,\n        checkShipPlacement,\n        checkShipCollision,\n        placeShip,\n        autoPlaceFleet,\n        receiveAttack,\n        allShipsSunk,\n        resetBoard,\n        resetFleet,\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/app/factories/gameboard.js?");

/***/ }),

/***/ "./src/app/factories/player.js":
/*!*************************************!*\
  !*** ./src/app/factories/player.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/app/factories/ship.js\");\n\n\nconst Player = () => {\n    const createFleet = () => {\n        const fleet = [];\n        const ship1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n        const ship2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\n        const ship3 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n        const ship4 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n        const ship5 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n\n        fleet.push(ship1, ship2, ship3, ship4, ship5);\n        return fleet;\n    };\n\n    // Take a random play hitting enemy's board\n    const randomAttack = (board) => {\n        const randomInt = () => Math.floor(Math.random() * 9);\n        const coords = [];\n        let x;\n        let y;\n\n        const attack = () => {\n            x = randomInt();\n            y = randomInt();\n            return board.receiveAttack(x, y);\n        };\n\n        // eslint-disable-next-line no-constant-condition\n        while (true) {\n            let thisAttack = attack();\n            if (thisAttack) {\n                break;\n            }\n        }\n        coords.push(x, y);\n        return coords;\n    };\n\n    return { randomAttack, createFleet };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/app/factories/player.js?");

/***/ }),

/***/ "./src/app/factories/ship.js":
/*!***********************************!*\
  !*** ./src/app/factories/ship.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\n    let hitCounter = 0;\n    let direction = \"hor\";\n    const coords = [];\n\n    const getLength = () => length;\n    const getDirection = () => direction;\n\n    const changeDirection = () => {\n        return direction === \"hor\" ? (direction = \"ver\") : (direction = \"hor\");\n    };\n\n    const hit = () => {\n        hitCounter++;\n        if (isSunk === true) return isSunk;\n        return hitCounter;\n    };\n\n    const isSunk = () => (hitCounter >= length ? true : false);\n\n    return { getLength, getDirection, coords, changeDirection, hit, isSunk };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/app/factories/ship.js?");

/***/ }),

/***/ "./src/app/views/elements.js":
/*!***********************************!*\
  !*** ./src/app/views/elements.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst el = {\n    // Gameboards\n    boardOneWrapper: document.querySelector(\".main__board--left-wrapper\"),\n    boardTwoWrapper: document.querySelector(\".main__board--right-wrapper\"),\n    boardOne: document.querySelector(\".main__board--left\"),\n    boardTwo: document.querySelector(\".main__board--right\"),\n    boardOneCells() {\n        return document.querySelectorAll(\n            \".main__board--left > .main__board-cell\"\n        );\n    },\n    boardTwoCells() {\n        return document.querySelectorAll(\n            \".main__board--right > .main__board-cell\"\n        );\n    },\n    // Buttons\n    btnWrapper: document.querySelector(\".button-wrapper\"),\n    autoPlaceBtn: document.querySelector(\".auto-place-btn\"),\n    resetBtn: document.querySelector(\".reset-btn\"),\n    startGameBtn: document.querySelector(\".start-game-btn\"),\n    // Modal\n    modal: document.querySelector(\".main__modal\"),\n    modalText: document.querySelector(\".modal-text\"),\n    playAgainBtn: document.querySelector(\".modal-play-again-btn\"),\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (el);\n\n\n//# sourceURL=webpack://battleship/./src/app/views/elements.js?");

/***/ }),

/***/ "./src/app/views/gameboardView.js":
/*!****************************************!*\
  !*** ./src/app/views/gameboardView.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/app/views/elements.js\");\n\n\nconst views = (() => {\n    const renderGameboard = (board) => {\n        for (let y = 0; y < 10; y++) {\n            for (let x = 0; x < 10; x++) {\n                const cell = document.createElement(\"div\");\n                cell.className = \"main__board-cell\";\n                cell.dataset.x = x;\n                cell.dataset.y = y;\n                board.appendChild(cell);\n            }\n        }\n        if (board.classList.contains(\"main__board--left\")) {\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardOneWrapper.appendChild(board);\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardOneWrapper.appendChild(_elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].btnWrapper);\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].btnWrapper.appendChild(_elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].autoPlaceBtn);\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].btnWrapper.appendChild(_elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetBtn);\n        } else {\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardTwoWrapper.appendChild(board);\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardTwoWrapper.appendChild(_elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startGameBtn);\n        }\n    };\n\n    const getShipCell = (x, y, cells) => {\n        return document.querySelector(\n            `.${cells.className} > [data-x=\"${x}\"][data-y=\"${y}\"]`\n        );\n    };\n\n    const renderFleet = (board, cells) => {\n        const fleet = board.getFleet();\n        let shipCell;\n        for (let i = 0; i < fleet.length; i++) {\n            for (let j = 0; j < fleet[i].coords.length; j++) {\n                const [x, y] = fleet[i].coords[j];\n                shipCell = getShipCell(x, y, cells);\n                shipCell.classList.add(\"main__board-ship\");\n                renderShipBorders(fleet, i, j, shipCell);\n            }\n        }\n    };\n\n    const renderShipBorders = (fleet, i, j, shipCell) => {\n        const shipDir = fleet[i].getDirection();\n        const length = fleet[i].coords.length;\n        if (shipDir === \"hor\") {\n            if (j === 0) {\n                shipCell.classList.add(\"board-ship--hor-start\");\n            } else if (j !== length - 1) {\n                shipCell.classList.add(\"board-ship--hor-body\");\n            } else {\n                shipCell.classList.add(\"board-ship--hor-end\");\n            }\n        } else {\n            if (j === 0) {\n                shipCell.classList.add(\"board-ship--ver-start\");\n            } else if (j !== length - 1) {\n                shipCell.classList.add(\"board-ship--ver-body\");\n            } else {\n                shipCell.classList.add(\"board-ship--ver-end\");\n            }\n        }\n    };\n\n    // if ships gets sunk, render it's borders\n    const renderSunkShipBorders = (board) => {\n        const fleet = board.getFleet();\n        let x;\n        let y;\n        let shipCell;\n        for (let i = 0; i < fleet.length; i++) {\n            for (let j = 0; j < fleet[i].coords.length; j++) {\n                if (fleet[i].isSunk()) {\n                    x = fleet[i].coords[j][0];\n                    y = fleet[i].coords[j][1];\n                    shipCell = getShipCell(x, y, _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardTwo);\n                    renderShipBorders(fleet, i, j, shipCell);\n                }\n            }\n        }\n    };\n\n    const renderReceivedAttack = (e, board) => {\n        const x = e.target.dataset.x;\n        const y = e.target.dataset.y;\n        const gameboard = board.getBoard();\n        renderSunkShipBorders(board);\n        if (gameboard[x][y] === \"miss\") {\n            e.target.classList.add(\"main__board-miss\");\n        } else {\n            e.target.classList.add(\"main__board-ship--hit\");\n        }\n    };\n\n    const renderReceivedAttackfromCoords = (coords, board) => {\n        const x = coords[0];\n        const y = coords[1];\n        const gameboard = board.getBoard();\n        const cells = _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardOne;\n        const cell = document.querySelector(\n            `.${cells.className} > [data-x=\"${x}\"][data-y=\"${y}\"]`\n        );\n        if (gameboard[x][y] === \"miss\") {\n            cell.classList.add(\"main__board-miss\");\n        } else {\n            cell.classList.add(\"main__board-ship--hit\");\n        }\n    };\n\n    // Show modal announcing winner and ask if player wants to play again\n    const showWinner = (winner, reset) => {\n        _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.style.display = \"block\";\n        if (winner === \"boardOne\") {\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modalText.textContent = \"Woot! You sunk all ships!\";\n        } else {\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modalText.textContent = \"No luck today...\";\n        }\n\n        window.addEventListener(\"click\", (e) => {\n            if (e.target === _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal) _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.style.display = \"none\";\n        });\n\n        _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playAgainBtn.addEventListener(\"click\", () => {\n            reset; // game.reset()\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.style.display = \"none\";\n        });\n    };\n\n    const resetGameboard = (board) => {\n        board.forEach((cell) => {\n            cell.className = \"main__board-cell\";\n        });\n    };\n\n    const resetFleet = (board) => {\n        board.forEach((cell) => {\n            if (cell.classList.contains(\"main__board-ship\")) {\n                cell.className = \"main__board-cell\";\n            }\n        });\n    };\n\n    return {\n        renderGameboard,\n        renderFleet,\n        renderReceivedAttack,\n        renderReceivedAttackfromCoords,\n        showWinner,\n        resetGameboard,\n        resetFleet,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views);\n\n\n//# sourceURL=webpack://battleship/./src/app/views/gameboardView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/sass/style.scss */ \"./src/styles/sass/style.scss\");\n/* harmony import */ var _app_factories_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/factories/game.js */ \"./src/app/factories/game.js\");\n/* harmony import */ var _app_views_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/views/elements.js */ \"./src/app/views/elements.js\");\n\n\n\n\n(() => {\n    const game = (0,_app_factories_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    game.renderGameboard();\n\n    _app_views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].autoPlaceBtn.addEventListener(\"click\", () => {\n        game.autoPlace();\n    });\n\n    _app_views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].startGameBtn.addEventListener(\"click\", function startGame() {\n        if (!game.checkGameRules()) return;\n        game.placeEnemyFleet();\n        game.waitForEnemyAttack();\n    });\n\n    _app_views_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetBtn.addEventListener(\"click\", () => {\n        game.reset();\n    });\n})();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;