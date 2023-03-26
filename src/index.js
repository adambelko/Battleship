import Game from "./app/factories/game.js";
import el from "./app/views/elements.js";

(() => {
    const game = Game();

    game.renderGameboard();

    el.autoPlaceBtn.addEventListener("click", () => {
        game.autoPlace();
    });

    el.startGameBtn.addEventListener("click", () => {
        if (!game.checkGameRules()) return;
        game.placeEnemyFleet();
        game.waitForEnemyAttack();
    });

    el.resetBtn.addEventListener("click", () => {
        game.reset();
    });
})();
