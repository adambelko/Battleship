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

    // Take a random play hitting enemy's board
    const randomAttack = (board) => {
        const randomInt = () => Math.floor(Math.random() * 9);
        const coords = [];
        let x;
        let y;

        const attack = () => {
            x = randomInt();
            y = randomInt();
            return board.receiveAttack(x, y);
        };

        // eslint-disable-next-line no-constant-condition
        while (true) {
            let thisAttack = attack();
            if (thisAttack) {
                break;
            }
        }
        coords.push(x, y);
        return coords;
    };

    return { randomAttack, createFleet };
};

export default Player;
