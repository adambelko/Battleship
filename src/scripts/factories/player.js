const Player = (board) => {
    // Take a random play hitting enemy board
    // shooting same coords twice not allowed
    const randomPlay = () => {
        const randomInt = () => Math.floor(Math.random() * 9);
        const attack = board.receiveAttack(randomInt(), randomInt());
        // Return false when attack is fired on same coordinates
        return attack === false ? attack : attack;
    };

    return { randomPlay };
};

export default Player;
