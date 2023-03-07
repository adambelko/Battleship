const boardWrapper = document.querySelector(".main__board-wrapper");
const boardOneEl = document.querySelector(".main__board--left");
const boardTwoEl = document.querySelector(".main__board--right");

const DOM = () => {
    const renderGameboard = (board, parent) => {
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                const cell = document.createElement("div");
                cell.className = "main__board-cell";
                cell.dataset.x = x;
                cell.dataset.y = y;
                board.appendChild(cell);
            }
        }
        parent.appendChild(board);
    };

    const renderFleet = (board, num) => {
        const fleet = board.getFleet();
        let boardCell;
        for (let i = 0; i < fleet.length; i++) {
            for (let j = 0; j < fleet[i].coords.length; j++) {
                const [x, y] = fleet[i].coords[j];
                if (num === "left") {
                    boardCell = document.querySelector(
                        `.main__board--left > [data-x="${x}"][data-y="${y}"]`
                    );
                } else {
                    boardCell = document.querySelector(
                        `.main__board--right > [data-x="${x}"][data-y="${y}"]`
                    );
                }
                boardCell.classList.add("main__board-ship");
            }
        }
    };

    return { renderGameboard, renderFleet };
};

export { boardWrapper, boardOneEl, boardTwoEl, DOM };
