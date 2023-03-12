import DOM from "./scripts/dom/gameboardDOM.js";
import Game from "./scripts/factories/game.js";
import el from "./scripts/dom/elements.js";

const dom = DOM();
const game = Game();

dom.renderGameboard(el.boardOne);
dom.renderGameboard(el.boardTwo);

dom.renderFleet(game.boardOne, el.boardOne);
dom.renderFleet(game.boardTwo, el.boardTwo);

game.boardEventListeners(el.boardTwoCells());
dom.boardEventListeners(game.boardTwo, el.boardTwoCells());

const autoPlaceFleetEventListener = () => {
    el.autoPlaceBtn.addEventListener("click", () => {
        game.resetFleet(game.boardOne);
        // dom.resetFleet();

        game.autoPlaceFleet(game.boardOne, game.playerOne.createFleet());
        dom.renderFleet(game.boardOne, el.boardOne);
    });
};

autoPlaceFleetEventListener();
