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

    // Check weather or not pressing auto-place and start game btn is allowed
    const checkGameRules = () => {
        if (boardOne.getFleet().length === 0) return false;
        if (boardTwo.getFleet().length >= 5) return false;
        return true;
    };

    const placeEnemyFleet = () => {
        autoPlaceFleet(boardTwo, playerTwo.createFleet());
        // views.renderFleet(boardTwo, el.boardTwo); // for develop only
    };

    // Event listeners for enemy (computer) gameboard cells
    const waitForEnemyAttack = () => {
        el.boardTwoCells().forEach((cell) => {
            cell.addEventListener("click", beginAttacks);
        });
    };

    const beginAttacks = (e) => {
        // attack boardTwo if there's no attack on same coords twice
        if (!attackBoardTwo(e, boardTwo)) return;
        // Computer attacks right after
        attackBoardOne();
        checkForWinner();
    };

    const attackBoardOne = () => {
        const [x, y] = playerTwo.randomAttack(boardOne);
        views.renderReceivedAttackfromCoords([x, y], boardOne);
    };

    const attackBoardTwo = (e, board) => {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        // Return false when same coords attacked twice
        if (!board.receiveAttack(x, y)) return false;
        board.receiveAttack(x, y);
        views.renderReceivedAttack(e, board);
        return true;
    };

    const checkForWinner = () => {
        if (boardOne.allShipsSunk()) views.showWinner("boardTwo", reset());
        if (boardTwo.allShipsSunk()) views.showWinner("boardOne", reset());
    };

    const reset = () => {
        resetFleet(boardOne);
        resetFleet(boardTwo);

        views.resetGameboard(el.boardOneCells());
        views.resetGameboard(el.boardTwoCells());

        el.boardTwoCells().forEach((cell) => {
            cell.removeEventListener("click", beginAttacks);
        });
    };

    const resetFleet = (board) => {
        board.resetBoard();
        board.resetFleet();
    };

    return {
        renderGameboard,
        autoPlace,
        autoPlaceFleet,
        checkGameRules,
        placeEnemyFleet,
        waitForEnemyAttack,
        reset,
    };
};

export default Game;
