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
        el.boardWrapper.appendChild(board);
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
            }
        }
    };

    // Event listeners for gameboard cells
    // const boardEventListeners = (boardCells) => {
    //     console.log(boardCells);
    //     boardCells.forEach((cell) => {
    //         cell.addEventListener("click", (e) => {
    //             console.log("hey");
    //             e.target.classList.add("main__board-ship");
    //             // return boardCells;
    //         });
    //     });
    // };

    const boardEventListeners = (side) => {
        let boardCell;
        if (side === "left") {
            boardCell = document.querySelectorAll(
                ".main__board--left > .main__board-cell"
            );

            boardCell.forEach((cell) => {
                cell.addEventListener("click", (e) => {
                    e.target.classList.add("main__board-ship");
                    return boardCell;
                });
            });
        } else {
            boardCell = document.querySelectorAll(
                ".main__board--right > .main__board-cell"
            );

            boardCell.forEach((cell) => {
                cell.addEventListener("click", (e) => {
                    e.target.classList.add("main__board-ship");
                    return boardCell;
                });
            });
        }
    };

    return { renderGameboard, renderFleet, boardEventListeners };
};

export default DOM;
