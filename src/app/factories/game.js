import Gameboard from "./gameboard.js";
import Player from "./player.js";

const Game = () => {
    const boardOne = Gameboard();
    const boardTwo = Gameboard();

    const playerOne = Player();
    const playerTwo = Player();

    const autoPlaceFleet = (board, fleet) => {
        boardOne.autoPlaceFleet(board, fleet);
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
        resetFleet,
        boardEventListeners,
        boardOne,
        boardTwo,
        playerOne,
    };
};

export default Game;
