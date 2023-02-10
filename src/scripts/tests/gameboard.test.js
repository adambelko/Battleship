/* eslint-disable no-undef */
import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe("Gameboard factory", () => {
    test("Place ship horizontally", () => {
        const player = Gameboard();
        const myShip = Ship(4);
        player.placeShip(myShip, 0, 2);
        const shipPos = player.getBoard();
        for (let i = 0; i < myShip.getLength(); i++) {
            expect(shipPos[i][2]).toBe("ship");
        }
        expect(shipPos[0][4]).toBe(null);
    });

    test("Place ship vertically", () => {
        const player = Gameboard();
        const myShip = Ship(3);
        myShip.changeDirection();
        player.placeShip(myShip, 3, 2);
        const shipPos = player.getBoard();
        for (let i = 2; i < myShip.getLength(); i++) {
            expect(shipPos[3][i]).toBe("ship");
        }
        expect(shipPos[3][1]).toBe(null);
        expect(shipPos[3][6]).toBe(null);
    });
});
