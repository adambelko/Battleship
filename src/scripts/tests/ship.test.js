/* eslint-disable no-undef */
import Ship from "../ship";

describe("Ship factory", () => {
    const myShip = Ship(4);

    beforeAll(() => {
        myShip.hit();
        myShip.hit();
        myShip.hit();
    });

    test("Hit function", () => {
        expect(myShip.hit()).toEqual(3);
    });

    test("isSunk function", () => {
        expect(myShip.isSunk()).toBeTruthy();
    });
});
