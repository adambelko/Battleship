import el from "./elements.js";

const DOM = () => {
    const renderGameboard = (board) => {
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                const cell = document.createElement("div");
                cell.className = "main__board-cell";
                cell.dataset.x = x;
                cell.dataset.y = y;
                board.appendChild(cell);
            }
        }
        if (board.classList.contains("main__board--left")) {
            el.boardOneWrapper.appendChild(board);
            el.boardOneWrapper.appendChild(el.autoPlaceBtn);
        } else {
            el.boardTwoWrapper.appendChild(board);
        }
    };

    const renderFleet = (board, cells) => {
        const fleet = board.getFleet();
        let shipCell;
        for (let i = 0; i < fleet.length; i++) {
            for (let j = 0; j < fleet[i].coords.length; j++) {
                const [x, y] = fleet[i].coords[j];
                shipCell = document.querySelector(
                    `.${cells.className} > [data-x="${x}"][data-y="${y}"]`
                );
                shipCell.classList.add("main__board-ship");
                renderShipBorders(fleet, i, j, shipCell);
            }
        }
    };

    const renderShipBorders = (fleet, i, j, shipCell) => {
        const shipDir = fleet[i].getDirection();
        const length = fleet[i].coords.length;
        if (shipDir === "hor") {
            if (j === 0) {
                shipCell.classList.add("board-ship--hor-start");
            } else if (j !== length - 1) {
                shipCell.classList.add("board-ship--hor-body");
            } else {
                shipCell.classList.add("board-ship--hor-end");
            }
            // vertical direction
        } else {
            if (j === 0) {
                shipCell.classList.add("board-ship--ver-start");
            } else if (j !== length - 1) {
                shipCell.classList.add("board-ship--ver-body");
            } else {
                shipCell.classList.add("board-ship--ver-end");
            }
        }
    };

    const resetFleet = () => {
        const cells = el.boardOneCells();
        cells.forEach((cell) => {
            if (cell.classList.contains("main__board-ship")) {
                cell.className = "main__board-cell";
            }
        });
    };

    // Change background of gameboard cells after attack is received
    const boardEventListeners = (board, boardCells) => {
        boardCells.forEach((cell) => {
            cell.addEventListener("click", (e) => changeBoardCellBg(e, board));
        });
    };

    const changeBoardCellBg = (e, board) => {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        const gameboard = board.getBoard();
        if (gameboard[x][y] === "miss") {
            e.target.classList.add("main__board-miss");
        } else {
            e.target.classList.add("main__board-ship--hit");
        }
    };

    return { renderGameboard, renderFleet, resetFleet, boardEventListeners };
};

export default DOM;
