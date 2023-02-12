/* eslint-disable no-undef */
import Ship from "../ship";

describe("Ship factory", () => {
    test("hit function", () => {
        const ship = Ship(3);
        ship.hit();
        expect(ship.hit()).toBe(2);
        expect(ship.hit()).toBe(3);
        expect(ship.hit()).toBeTruthy();
    });

    test("isSunk function", () => {
        const ship = Ship(3);
        ship.hit();
        expect(ship.isSunk()).toBeFalsy();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });
});
