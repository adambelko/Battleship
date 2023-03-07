import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
import Player from "./player.js";

const Game = () => {
    const boardOne = Gameboard();
    const boardTwo = Gameboard();

    const playerOne = Player(boardOne);
    const playerTwo = Player(boardTwo);

    const populateBoard = () => {
        const myShip1 = Ship(3);
        const myShip2 = Ship(4);
        boardOne.placeShip(myShip1, 0, 2);
        myShip2.changeDirection();
        boardOne.placeShip(myShip2, 4, 4);

        const enemyShip1 = Ship(3);
        const enemyShip2 = Ship(4);
        boardTwo.placeShip(enemyShip1, 3, 5);
        boardTwo.placeShip(enemyShip2, 5, 2);
    };

    return { populateBoard, boardOne, boardTwo };
};

export default Game;
