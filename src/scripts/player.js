const Player = (board) => {
    const randomPlay = () => {
        const randomInt = () => Math.floor(Math.random() * 9);
        const attack = board.receiveAttack(randomInt(), randomInt());
        if (attack === false) {
            // Return false when attack is fired on same coordinates
            return attack;
        } else {
            return attack;
        }
    };

    return { randomPlay };
};

export default Player;
