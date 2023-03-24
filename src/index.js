import Game from "./app/factories/game.js";
import el from "./app/views/elements.js";

(() => {
    const game = Game();

    game.renderGameboard();

    el.autoPlaceBtn.addEventListener("click", () => {
        game.autoPlace();
    });

    el.startGameBtn.addEventListener("click", () => {
        game.placeEnemyFleet();
        game.gameLoop();
    });

    el.resetBtn.addEventListener("click", () => {
        game.reset();
    });
})();
