const Gameboard = () => {
    // Create a board 10 x 10
    const board = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null));

    const fleet = [];

    const getBoard = () => board;

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
        for (let i = 0; i < length; i++) {
            if (direction === "hor" && x + length < 10) {
                return true;
            } else if (direction === "ver" && y + length < 10) {
                return true;
            } else {
                return false;
            }
        }
    };

    // Check if ship collides with another ship
    const checkShipCollision = (x, y, length, direction) => {
        for (let i = 0; i < length; i++) {
            const [hor, ver] = getCoords(x, y, i, direction);

            if (board[hor][ver] !== null || board[hor][ver] !== null) {
                return false;
            }
        }
        return true;
    };

    // Place ship within the gameboard
    const placeShip = (ship, x, y) => {
        const direction = ship.getDirection();
        const length = ship.getLength();
        const valid1 = checkShipCollision(x, y, length, direction);
        const valid2 = checkShipPlacement(x, y, length, direction);

        if (!valid1) return;
        if (!valid2) return;

        for (let i = 0; i < length; i++) {
            const [hor, ver] = getCoords(x, y, i, direction);
            board[hor][ver] = ship;
        }
        fleet.push(ship);
    };

    // Determine whether or not attack hit a ship, if yes send hit() fn
    // to correct ship, otherwise record missed shot.
    const receiveAttack = (x, y) => {
        if (board[x][y] === null) {
            return (board[x][y] = "miss");
        } else if (board[x][y] === "hit") {
            return;
        } else {
            board[x][y].hit();
            return (board[x][y] = "hit");
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
        checkShipPlacement,
        checkShipCollision,
        placeShip,
        receiveAttack,
        allShipsSunk,
    };
};

export default Gameboard;
