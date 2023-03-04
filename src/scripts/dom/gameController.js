const boardWrapper = document.querySelector(".main__board-wrapper");
const boardLeft = document.querySelector(".main__board--left");
// const boardRight = document.querySelector(".main__board--right");

const renderGameBoard = (board, parent) => {
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        cell.className = "board-cell";
        board.appendChild(cell);
    }
    parent.appendChild(board);
};

const test = () => {
    renderGameBoard(boardLeft, boardWrapper);
};
export default test;
