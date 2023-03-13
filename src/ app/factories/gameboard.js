const Gameboard = () => {
    // Create a board 10 x 10
    const board = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null));

    const fleet = [];

    const getBoard = () => board;
    const getFleet = () => fleet;

    const getCoords = (x, y, i, direction) => {
        let hor;
        let ver;

        if (direction === "hor") {
            hor = x + i;
            ver = y;
        } else {
            hor = x;
            ver = y + i;
        }
        return [hor, ver];
    };

    // Check if ship is placed within the gameboard squares
    const checkShipPlacement = (x, y, length, direction) => {
        if (direction === "hor" && x + length < 10) {
            return true;
        } else if (direction === "ver" && y + length < 10) {
            return true;
        } else {
            return false;
        }
    };

    // Check if ship collides with another ship
    const checkShipCollision = (x, y, length, direction) => {
        for (let i = 0; i < length; i++) {
            const [hor, ver] = getCoords(x, y, i, direction);

            if (board[hor][ver] !== null) {
                return false;
            }
        }
        return true;
    };

    // Place ship within the gameboard
    const placeShip = (ship, x, y) => {
        const direction = ship.getDirection();
        const length = ship.getLength();

        const valid1 = checkShipPlacement(x, y, length, direction);
        if (valid1 === false) return false;

        const valid2 = checkShipCollision(x, y, length, direction);
        if (valid2 === false) return false;

        for (let i = 0; i < length; i++) {
            const [hor, ver] = getCoords(x, y, i, direction);
            ship.coords.push([hor, ver]);
            board[hor][ver] = ship;
        }
        fleet.push(ship);
        return true;
    };

    const autoPlaceFleet = (board, fleet) => {
        fleet.forEach((ship) => autoPlaceShip(board, ship));
    };

    const autoPlaceShip = (board, ship) => {
        const randomInt = () => Math.floor(Math.random() * 9);
        // Generate two random numbers and compare it agains each other to
        // determine direction of a ship
        if (randomInt() < randomInt()) ship.changeDirection();
        // Keep looping till placeShip returns true
        const placeShip = () => board.placeShip(ship, randomInt(), randomInt());
        // eslint-disable-next-line no-constant-condition
        while (true) {
            let x = placeShip();
            if (x === true) {
                x;
                break;
            }
        }
    };

    // Determine whether or not attack hit a ship, if yes send hit() fn
    // to correct ship, otherwise record missed shot.
    const receiveAttack = (x, y) => {
        if (board[x][y] === null) {
            return (board[x][y] = "miss");
        } else if (board[x][y] === "hit") {
            return false;
        } else {
            board[x][y].hit();
            board[x][y] = "hit";
            return true;
        }
    };

    // Call isSunk() function on each ship and determine wheter or not all ships
    // been sunk
    const allShipsSunk = () => {
        for (let i = 0; i < fleet.length; i++) {
            if (fleet[i].isSunk() === false) {
                return false;
            }
        }
        return true;
    };

    return {
        getBoard,
        getFleet,
        checkShipPlacement,
        checkShipCollision,
        placeShip,
        autoPlaceFleet,
        receiveAttack,
        allShipsSunk,
    };
};

export default Gameboard;
