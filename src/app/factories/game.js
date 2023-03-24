import Gameboard from "./gameboard.js";
import Player from "./player.js";
import el from "../views/elements.js";
import views from "../views/gameboardView.js";

const Game = () => {
    const boardOne = Gameboard();
    const boardTwo = Gameboard();

    const playerOne = Player();
    const playerTwo = Player();

    const renderGameboard = () => {
        views.renderGameboard(el.boardOne);
        views.renderGameboard(el.boardTwo);
    };

    const autoPlace = () => {
        if (boardTwo.getFleet().length >= 5) return;
        resetFleet(boardOne);
        autoPlaceFleet(boardOne, playerOne.createFleet());
        views.resetFleet(el.boardOneCells());
        views.renderFleet(boardOne, el.boardOne);
    };

    const autoPlaceFleet = (board, fleet) => {
        board.autoPlaceFleet(board, fleet);
    };

    const placeEnemyFleet = () => {
        if (boardOne.getFleet().length === 0) return;
        if (boardTwo.getFleet().length >= 5) return;
        autoPlaceFleet(boardTwo, playerTwo.createFleet());
        views.renderFleet(boardTwo, el.boardTwo); // for develop only
    };

    const gameLoop = () => {
        if (boardOne.allShipsSunk()) return console.log("player two win");
        if (boardTwo.allShipsSunk()) return console.log("player one win");

        waitForEnemyAttack(boardTwo, el.boardTwoCells());
    };

    // Event listeners for enemy (computer) gameboard cells
    const waitForEnemyAttack = (board, boardCells) => {
        boardCells.forEach((cell) => {
            cell.addEventListener("click", (e) => {
                attack(e, board);
                views.renderReceivedAttack(e, board);
            });
        });
    };

    const attack = (e, board) => {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        board.receiveAttack(x, y);
        if (board.allShipsSunk()) {
            console.log("all ships sunk");
        }
    };

    const reset = () => {
        resetFleet(boardOne);
        resetFleet(boardTwo);

        views.resetGameboard(el.boardOneCells());
        views.resetGameboard(el.boardTwoCells());
    };

    const resetFleet = (board) => {
        board.resetBoard();
        board.resetFleet();
    };

    return {
        renderGameboard,
        autoPlace,
        autoPlaceFleet,
        placeEnemyFleet,
        reset,
        gameLoop,
    };
};

export default Game;
