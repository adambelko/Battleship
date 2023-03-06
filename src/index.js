import { boardWrapper, boardLeft, DOM } from "./scripts/dom/gameboardDOM.js";
import Game from "./scripts/factories/game.js";

const dom = DOM();
const game = Game();

dom.renderGameboard(boardLeft, boardWrapper);
game.populateBoard();
dom.renderFleet(game.boardOne);
