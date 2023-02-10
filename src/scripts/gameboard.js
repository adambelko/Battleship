// import Ship from "./ship.js";

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

    const placeShip = (ship, x, y) => {
        const direction = ship.getDirection();

        for (let i = 0; i < ship.getLength(); i++) {
            const [hor, ver] = getCoords(x, y, i, direction);
            board[hor][ver] = "ship";
        }
    };

    return { getBoard, placeShip };
};

export default Gameboard;
