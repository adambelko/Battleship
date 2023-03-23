import DOM from "./app/views/gameboardView.js";
import Game from "./app/factories/game.js";
import el from "./app/views/elements.js";

const dom = DOM();
const game = Game();

dom.renderGameboard(el.boardOne);
dom.renderGameboard(el.boardTwo);

const startGame = () => {
    el.startGameBtn.addEventListener("click", () => {
        game.startGame();
        dom.startGame(game.boardTwo);
        dom.renderFleet(game.boardTwo, el.boardTwo); // for develop only
    });
};

const autoPlaceFleetEventListener = () => {
    el.autoPlaceBtn.addEventListener("click", () => {
        game.resetFleet(game.boardOne);
        dom.resetFleet();

        game.autoPlaceFleet(game.boardOne, game.playerOne.createFleet());
        dom.renderFleet(game.boardOne, el.boardOne);
    });
};

autoPlaceFleetEventListener();
startGame();
