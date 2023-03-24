import Ship from "./ship.js";

const Player = () => {
    const createFleet = () => {
        const fleet = [];
        const ship1 = Ship(5);
        const ship2 = Ship(4);
        const ship3 = Ship(3);
        const ship4 = Ship(3);
        const ship5 = Ship(2);

        fleet.push(ship1, ship2, ship3, ship4, ship5);
        return fleet;
    };

    // Take a random play hitting enemy board
    // shooting same coords twice not allowed
    const randomAttack = (board) => {
        const randomInt = () => Math.floor(Math.random() * 9);
        const attack = board.receiveAttack(randomInt(), randomInt());
        // Return false when attack is fired on same coordinates
        return attack === false ? false : true;
    };

    return { randomAttack, createFleet };
};

export default Player;
