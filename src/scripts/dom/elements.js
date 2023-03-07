const el = {
    boardWrapper: document.querySelector(".main__board-wrapper"),
    boardOne: document.querySelector(".main__board--left"),
    boardTwo: document.querySelector(".main__board--right"),
    boardOneCells: document.querySelectorAll(
        ".main__board--left > .main__board-cell"
    ),
    boardTwoCells: document.querySelectorAll(
        ".main__board--right > .main__board-cell"
    ),
};

export default el;
