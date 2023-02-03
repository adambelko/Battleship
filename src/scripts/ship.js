const Ship = (length) => {
    let hitNum = 0;

    const hit = () => {
        return hitNum++;
    };

    const isSunk = () => (length >= hitNum ? true : false);

    return { hit, isSunk };
};

export default Ship;
