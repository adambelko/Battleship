import Gameboard from "./gameboard.js";
import Player from "./player.js";
import el from "../views/elements.js";

const Game = () => {
    const boardOne = Gameboard();
    const boardTwo = Gameboard();

    const playerOne = Player();
    const playerTwo = Player();

    const autoPlaceFleet = (board, fleet) => {
        board.autoPlaceFleet(board, fleet);
    };

    const startGame = () => {
        if (boardOne.getFleet().length === 0) return;
        if (boardTwo.getFleet().length >= 5) return;
        autoPlaceFleet(boardTwo, playerTwo.createFleet());
        boardEventListeners(el.boardTwoCells());
    };

    const resetFleet = (board) => {
        board.resetBoard();
        board.resetFleet();
    };

    // Event listeners for gameboard cells
    const boardEventListeners = (boardCells) => {
        boardCells.forEach((cell) => {
            cell.addEventListener("click", attack);
        });
    };

    const attack = (e) => {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        boardTwo.receiveAttack(x, y);
        if (boardTwo.allShipsSunk()) {
            console.log("all ships sunk");
        }
    };

    return {
        autoPlaceFleet,
        startGame,
        resetFleet,
        boardOne,
        boardTwo,
        playerOne,
        playerTwo,
    };
};

export default Game;
