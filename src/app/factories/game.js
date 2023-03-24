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
        // waitForEnemyAttack(el.boardTwoCells());

        // gameLoop();
    };

    const gameLoop = () => {
        if (boardOne.allShipsSunk()) return console.log("player two win");
        if (boardTwo.allShipsSunk()) return console.log("player one win");

        let counter = 3;
        if (counter % 2 == 0) {
            waitForEnemyAttack(boardOne, el.boardOneCells());
            counter++;
        } else {
            waitForEnemyAttack(boardTwo, el.boardTwoCells());
            counter++;
        }
    };

    // Event listeners for gameboard cells
    const waitForEnemyAttack = (board, boardCells) => {
        boardCells.forEach((cell) => {
            cell.addEventListener("click", (e) => attack(e, board));
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

    const resetFleet = (board) => {
        board.resetBoard();
        board.resetFleet();
    };

    return {
        autoPlaceFleet,
        startGame,
        resetFleet,
        gameLoop,
        boardOne,
        boardTwo,
        playerOne,
        playerTwo,
    };
};

export default Game;
