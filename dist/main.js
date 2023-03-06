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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_dom_gameboardDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/dom/gameboardDOM.js */ \"./src/scripts/dom/gameboardDOM.js\");\n/* harmony import */ var _scripts_factories_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/factories/game.js */ \"./src/scripts/factories/game.js\");\n\n\n\nconst dom = (0,_scripts_dom_gameboardDOM_js__WEBPACK_IMPORTED_MODULE_0__.DOM)();\nconst game = (0,_scripts_factories_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\ndom.renderGameboard(_scripts_dom_gameboardDOM_js__WEBPACK_IMPORTED_MODULE_0__.boardLeft, _scripts_dom_gameboardDOM_js__WEBPACK_IMPORTED_MODULE_0__.boardWrapper);\ngame.populateBoard();\ndom.renderFleet(game.boardOne);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/dom/gameboardDOM.js":
/*!*****************************************!*\
  !*** ./src/scripts/dom/gameboardDOM.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOM\": () => (/* binding */ DOM),\n/* harmony export */   \"boardLeft\": () => (/* binding */ boardLeft),\n/* harmony export */   \"boardWrapper\": () => (/* binding */ boardWrapper)\n/* harmony export */ });\nconst boardWrapper = document.querySelector(\".main__board-wrapper\");\nconst boardLeft = document.querySelector(\".main__board--left\");\n// const boardRight = document.querySelector(\".main__board--right\");\n// const boardLeftCells = document.querySelectorAll(\".main__board-cell\");\n\nconst DOM = () => {\n    const renderGameboard = (board, parent) => {\n        for (let y = 0; y < 10; y++) {\n            for (let x = 0; x < 10; x++) {\n                const cell = document.createElement(\"div\");\n                cell.className = \"main__board-cell\";\n                cell.dataset.x = x;\n                cell.dataset.y = y;\n                board.appendChild(cell);\n            }\n        }\n        parent.appendChild(board);\n    };\n\n    const renderFleet = (board) => {\n        const fleet = board.getFleet();\n        let boardCell;\n        for (let i = 0; i < fleet.length; i++) {\n            for (let j = 0; j < fleet[i].coords.length; j++) {\n                const [x, y] = fleet[i].coords[j];\n                boardCell = document.querySelector(\n                    `[data-x=\"${x}\"][data-y=\"${y}\"]`\n                );\n                boardCell.classList.add(\"main__board-ship\");\n            }\n        }\n    };\n\n    return { renderGameboard, renderFleet };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/dom/gameboardDOM.js?");

/***/ }),

/***/ "./src/scripts/factories/game.js":
/*!***************************************!*\
  !*** ./src/scripts/factories/game.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/scripts/factories/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/scripts/factories/ship.js\");\n\n\n\nconst Game = () => {\n    const boardOne = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const myShip1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3);\n    const myShip2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(4);\n\n    const populateBoard = () => {\n        boardOne.placeShip(myShip1, 0, 2);\n        myShip2.changeDirection();\n        boardOne.placeShip(myShip2, 4, 4);\n    };\n\n    return { populateBoard, boardOne };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/factories/game.js?");

/***/ }),

/***/ "./src/scripts/factories/gameboard.js":
/*!********************************************!*\
  !*** ./src/scripts/factories/gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = () => {\n    // Create a board 10 x 10\n    const board = Array(10)\n        .fill(null)\n        .map(() => Array(10).fill(null));\n\n    const fleet = [];\n\n    const getBoard = () => board;\n    const getFleet = () => fleet;\n\n    const getCoords = (x, y, i, direction) => {\n        let hor;\n        let ver;\n\n        if (direction === \"hor\") {\n            hor = x + i;\n            ver = y;\n        } else {\n            hor = x;\n            ver = y + i;\n        }\n        return [hor, ver];\n    };\n\n    // Check if ship is placed within the gameboard squares\n    const checkShipPlacement = (x, y, length, direction) => {\n        for (let i = 0; i < length; i++) {\n            if (direction === \"hor\" && x + length < 10) {\n                return true;\n            } else if (direction === \"ver\" && y + length < 10) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n    };\n\n    // Check if ship collides with another ship\n    const checkShipCollision = (x, y, length, direction) => {\n        for (let i = 0; i < length; i++) {\n            const [hor, ver] = getCoords(x, y, i, direction);\n\n            if (board[hor][ver] !== null || board[hor][ver] !== null) {\n                return false;\n            }\n        }\n        return true;\n    };\n\n    // Place ship within the gameboard\n    const placeShip = (ship, x, y) => {\n        const direction = ship.getDirection();\n        const length = ship.getLength();\n        const valid1 = checkShipCollision(x, y, length, direction);\n        const valid2 = checkShipPlacement(x, y, length, direction);\n\n        if (!valid1) return;\n        if (!valid2) return;\n\n        for (let i = 0; i < length; i++) {\n            const [hor, ver] = getCoords(x, y, i, direction);\n            ship.coords.push([hor, ver]);\n            board[hor][ver] = ship;\n        }\n        fleet.push(ship);\n    };\n\n    // Determine whether or not attack hit a ship, if yes send hit() fn\n    // to correct ship, otherwise record missed shot.\n    const receiveAttack = (x, y) => {\n        if (board[x][y] === null) {\n            return (board[x][y] = \"miss\");\n        } else if (board[x][y] === \"hit\") {\n            return false;\n        } else {\n            board[x][y].hit();\n            board[x][y] = \"hit\";\n            return true;\n        }\n    };\n\n    // Call isSunk() function on each ship and determine wheter or not all ships\n    // been sunk\n    const allShipsSunk = () => {\n        for (let i = 0; i < fleet.length; i++) {\n            if (fleet[i].isSunk() === false) {\n                return false;\n            }\n        }\n        return true;\n    };\n\n    return {\n        getBoard,\n        getFleet,\n        checkShipPlacement,\n        checkShipCollision,\n        placeShip,\n        receiveAttack,\n        allShipsSunk,\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/factories/gameboard.js?");

/***/ }),

/***/ "./src/scripts/factories/ship.js":
/*!***************************************!*\
  !*** ./src/scripts/factories/ship.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\n    let hitCounter = 0;\n    let direction = \"hor\";\n    const coords = [];\n\n    const getLength = () => length;\n    const getDirection = () => direction;\n\n    const changeDirection = () => {\n        return direction === \"hor\" ? (direction = \"ver\") : (direction = \"hor\");\n    };\n\n    const hit = () => {\n        hitCounter++;\n        if (isSunk === true) return isSunk;\n        return hitCounter;\n    };\n\n    const isSunk = () => (hitCounter >= length ? true : false);\n\n    return { getLength, getDirection, coords, changeDirection, hit, isSunk };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/factories/ship.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;