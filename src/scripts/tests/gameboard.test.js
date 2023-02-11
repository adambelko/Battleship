/* eslint-disable no-undef */
import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe("Gameboard factory", () => {
    test("Place ship horizontally", () => {
        const board = Gameboard();
        const myShip = Ship(3);
        board.placeShip(myShip, 0, 2);
        const shipPos = board.getBoard();
        for (let i = 0; i < myShip.getLength(); i++) {
            expect(shipPos[i][2]).toBe("ship");
        }
        expect(shipPos[0][4]).toBe(null);
    });

    test("Place ship vertically", () => {
        const board = Gameboard();
        const myShip = Ship(3);
        myShip.changeDirection();
        board.placeShip(myShip, 3, 2);
        const shipPos = board.getBoard();
        for (let i = 2; i < myShip.getLength(); i++) {
            expect(shipPos[3][i]).toBe("ship");
        }
        expect(shipPos[3][1]).toBe(null);
        expect(shipPos[3][6]).toBe(null);
    });

    test("Check if ship is placed within the board", () => {
        const board = Gameboard();
        // checkShipPlacement(x, y, length, direction)
        expect(board.checkShipPlacement(7, 0, 3, "hor")).toBeFalsy();
        expect(board.checkShipPlacement(6, 0, 3, "hor")).toBeTruthy();
    });

    test("Check if ship collides whith another ship", () => {
        const board = Gameboard();
        const myShip = Ship(4);
        board.placeShip(myShip, 0, 1);
        // checkShipPlacement(x, y, length, direction)
        expect(board.checkShipCollision(0, 1, 4, "hor")).toBeFalsy();
        expect(board.checkShipCollision(5, 1, 4, "hor")).toBeTruthy();
    });
});
