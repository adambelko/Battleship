import {
    boardWrapper,
    boardOneEl,
    boardTwoEl,
    DOM,
} from "./scripts/dom/gameboardDOM.js";
import Game from "./scripts/factories/game.js";

const dom = DOM();
const game = Game();

dom.renderGameboard(boardOneEl, boardWrapper);
dom.renderGameboard(boardTwoEl, boardWrapper);
game.populateBoard();
dom.renderFleet(game.boardOne, "left");
dom.renderFleet(game.boardTwo, "right");
