import DOM from "./app/views/gameboardView.js";
import Game from "./app/factories/game.js";
import el from "./app/views/elements.js";

(() => {
    const dom = DOM();
    const game = Game();

    dom.renderGameboard(el.boardOne);
    dom.renderGameboard(el.boardTwo);

    el.autoPlaceBtn.addEventListener("click", () => {
        if (game.boardTwo.getFleet().length >= 5) return;
        game.resetFleet(game.boardOne);
        game.autoPlaceFleet(game.boardOne, game.playerOne.createFleet());

        dom.resetFleet(el.boardOneCells());
        dom.renderFleet(game.boardOne, el.boardOne);
    });

    el.startGameBtn.addEventListener("click", () => {
        game.startGame();

        dom.startGame(game.boardTwo);
        dom.renderFleet(game.boardTwo, el.boardTwo); // for develop only
    });

    el.resetBtn.addEventListener("click", () => {
        game.resetFleet(game.boardOne);
        game.resetFleet(game.boardTwo);

        dom.resetGameboard(el.boardOneCells());
        dom.resetGameboard(el.boardTwoCells());
    });
})();
