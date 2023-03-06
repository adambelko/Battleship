import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

const Game = () => {
    const boardOne = Gameboard();
    const myShip1 = Ship(3);
    const myShip2 = Ship(4);

    const populateBoard = () => {
        boardOne.placeShip(myShip1, 0, 2);
        myShip2.changeDirection();
        boardOne.placeShip(myShip2, 4, 4);
    };

    return { populateBoard, boardOne };
};

export default Game;
