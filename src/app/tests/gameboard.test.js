/* eslint-disable no-undef */
import Gameboard from "../factories/gameboard.js";
import Ship from "../factories/ship.js";

describe("Gameboard factory", () => {
    test("Place ship horizontally", () => {
        const board = Gameboard();
        const ship = Ship(3);
        board.placeShip(ship, 0, 2);
        const gameboard = board.getBoard();
        for (let i = 0; i < ship.getLength(); i++) {
            expect(gameboard[i][2]).toEqual(ship);
        }
        expect(gameboard[0][4]).toBeNull;
    });

    test("Place ship vertically", () => {
        const board = Gameboard();
        const ship = Ship(3);
        ship.changeDirection();
        board.placeShip(ship, 3, 2);
        const gameboard = board.getBoard();
        for (let i = 2; i < ship.getLength(); i++) {
            expect(gameboard[3][i]).toEqual(ship);
        }
        expect(gameboard[3][1]).toBeNull;
        expect(gameboard[3][6]).toBeNull;
    });

    test("Check if ship is placed within the board", () => {
        const board = Gameboard();
        const ship = Ship(3);
        // checkShipPlacement(x, y, length, direction)
        expect(board.checkShipPlacement(7, 0, 3, "hor")).toBeFalsy();
        expect(board.checkShipPlacement(6, 0, 3, "hor")).toBeTruthy();
        expect(board.placeShip(ship, 7, 4)).toBeFalsy();
        expect(board.placeShip(ship, 6, 4)).toBeTruthy();
    });

    test("Check if ship collides whith another ship", () => {
        const board = Gameboard();
        const ship = Ship(4);
        board.placeShip(ship, 0, 1);
        // checkShipCollision(x, y, length, direction)
        expect(board.checkShipCollision(0, 1, 4, "hor")).toBeFalsy();
        expect(board.checkShipCollision(5, 1, 4, "hor")).toBeTruthy();
    });

    test("Check receiveAttack function conditions", () => {
        const board = Gameboard();
        const ship = Ship(3);
        board.placeShip(ship, 0, 1);
        expect(board.receiveAttack(3, 3)).toBeTruthy();
        expect(board.receiveAttack(0, 1)).toBeTruthy();
        expect(board.receiveAttack(0, 1)).toBeFalsy();
        expect(ship.isSunk()).toBeFalsy();
        expect(board.receiveAttack(1, 1));
        expect(board.receiveAttack(2, 1));
        expect(ship.isSunk()).toBeTruthy();
    });

    test("Check if all ships have been sunk", () => {
        const board = Gameboard();
        const ship1 = Ship(2);
        const ship2 = Ship(2);
        board.placeShip(ship1, 0, 1);
        board.placeShip(ship2, 0, 2);
        board.receiveAttack(0, 1);
        board.receiveAttack(1, 1);
        board.receiveAttack(0, 2);
        expect(board.allShipsSunk()).toBeFalsy();
        board.receiveAttack(1, 2);
        expect(board.allShipsSunk()).toBeTruthy();
        const ship3 = Ship(2);
        board.placeShip(ship3, 0, 3);
        expect(board.allShipsSunk()).toBeFalsy();
    });
});
