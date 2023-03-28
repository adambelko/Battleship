const Gameboard = () => {
    // Create a board 10 x 10
    let board = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null));

    let fleet = [];
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
            let ship = placeShip();
            if (ship === true) {
                break;
            }
        }
    };

    // If attack is beiing targeted at same coords return fasle,
    // otherwise return true
    const receiveAttack = (x, y) => {
        if (board[x][y] === "hit") {
            return false;
        } else if (board[x][y] === "miss") {
            return false;
        } else if (board[x][y] === null) {
            board[x][y] = "miss";
            return true;
        } else {
            board[x][y].hit();
            board[x][y] = "hit";
            return true;
        }
    };

    // Determine if all ships within  a fleet have been sunk
    const allShipsSunk = () => {
        for (let i = 0; i < fleet.length; i++) {
            if (fleet[i].isSunk() === false) {
                return false;
            }
        }
        return true;
    };

    const resetBoard = () => {
        board = Array(10)
            .fill(null)
            .map(() => Array(10).fill(null));
    };

    const resetFleet = () => {
        fleet = [];
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
        resetBoard,
        resetFleet,
    };
};

export default Gameboard;
