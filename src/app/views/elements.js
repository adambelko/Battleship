const el = {
    // Gameboards
    boardOneWrapper: document.querySelector(".main__board--left-wrapper"),
    boardTwoWrapper: document.querySelector(".main__board--right-wrapper"),
    boardOne: document.querySelector(".main__board--left"),
    boardTwo: document.querySelector(".main__board--right"),
    boardOneCells() {
        return document.querySelectorAll(
            ".main__board--left > .main__board-cell"
        );
    },

    boardTwoCells() {
        return document.querySelectorAll(
            ".main__board--right > .main__board-cell"
        );
    },
    // Buttons
    btnWrapper: document.querySelector(".button-wrapper"),
    autoPlaceBtn: document.querySelector(".auto-place-btn"),
    resetBtn: document.querySelector(".reset-btn"),
    startGameBtn: document.querySelector(".start-game-btn"),
    // Modal
    modal: document.querySelector(".main__modal"),
    modalText: document.querySelector(".modal-text"),
    playAgainBtn: document.querySelector(".modal-play-again-btn"),
};

export default el;
