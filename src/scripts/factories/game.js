import Gameboard from "./gameboard";
import Ship from "./ship";

const Game = () => {
    const boardOne = Gameboard();

    const populateBoard = () => {
        const myShip1 = Ship(3);
        const myShip2 = Ship(4);
        boardOne.placeShip(myShip1, 0, 2);
        boardOne.placeShip(myShip2, 4, 4);
    };

    return { populateBoard };
};

export default Game;
