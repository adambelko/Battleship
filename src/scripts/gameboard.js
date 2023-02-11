const Gameboard = () => {
    // Create a board 10 x 10
    let board = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null));

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

    const placeShip = (ship, x, y) => {
        const direction = ship.getDirection();
        const length = ship.getLength();
        const valid1 = checkShipCollision(x, y, length, direction);
        const valid2 = checkShipPlacement(x, y, length, direction);

        if (!valid1) return;
        if (!valid2) return;

        for (let i = 0; i < length; i++) {
            const [hor, ver] = getCoords(x, y, i, direction);
            board[hor][ver] = "ship";
        }
    };

    return { getBoard, checkShipPlacement, checkShipCollision, placeShip };
};

export default Gameboard;
