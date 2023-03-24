import el from "./elements.js";

const DOM = () => {
    const gameLoop = (boardOne, boardTwo) => {
        let counter = 3;
        if (counter % 2 == 0) {
            receiveAttack(boardOne, el.boardTwoCells());
            counter++;
        } else {
            receiveAttack(boardTwo, el.boardTwoCells());
            counter++;
        }
    };

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
            el.boardOneWrapper.appendChild(el.btnWrapper);
            el.btnWrapper.appendChild(el.autoPlaceBtn);
            el.btnWrapper.appendChild(el.resetBtn);
        } else {
            el.boardTwoWrapper.appendChild(board);
            el.boardTwoWrapper.appendChild(el.startGameBtn);
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

    // Event listener for receiving attacks
    const receiveAttack = (board, boardCells) => {
        boardCells.forEach((cell) => {
            cell.addEventListener("click", (e) =>
                renderReceivedAttack(e, board)
            );
        });
    };

    const renderReceivedAttack = (e, board) => {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        const gameboard = board.getBoard();
        if (gameboard[x][y] === "miss") {
            e.target.classList.add("main__board-miss");
        } else {
            e.target.classList.add("main__board-ship--hit");
        }
    };

    const resetGameboard = (board) => {
        board.forEach((cell) => {
            cell.className = "main__board-cell";
        });
    };

    const resetFleet = (board) => {
        board.forEach((cell) => {
            if (cell.classList.contains("main__board-ship")) {
                cell.className = "main__board-cell";
            }
        });
    };

    return {
        gameLoop,
        renderGameboard,
        renderFleet,
        receiveAttack,
        resetGameboard,
        resetFleet,
    };
};

export default DOM;
