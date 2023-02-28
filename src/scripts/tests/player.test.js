/* eslint-disable no-undef */
import Gameboard from "../gameboard.js";
import Ship from "../ship.js";
import Player from "../player.js";

describe("Player factory", () => {
    test("Random attack on enemy without attacking twice same coords", () => {
        const board = Gameboard();
        const enemy = Player(board);
        const ship = Ship(5);
        board.placeShip(ship, 2, 3);
        const attack = () => enemy.randomPlay();
        while (attack === "null" || attack === false) {
            expect(attack).toBeTruthy;
        }
    });
});
