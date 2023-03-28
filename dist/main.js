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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_factories_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/factories/game.js */ \"./src/app/factories/game.js\");\n/* harmony import */ var _app_views_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/views/elements.js */ \"./src/app/views/elements.js\");\n\n\n\n(() => {\n    const game = (0,_app_factories_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    game.renderGameboard();\n\n    _app_views_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].autoPlaceBtn.addEventListener(\"click\", () => {\n        game.autoPlace();\n    });\n\n    _app_views_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startGameBtn.addEventListener(\"click\", function startGame() {\n        if (!game.checkGameRules()) return;\n        game.placeEnemyFleet();\n        game.waitForEnemyAttack();\n    });\n\n    _app_views_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetBtn.addEventListener(\"click\", () => {\n        game.reset();\n    });\n})();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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