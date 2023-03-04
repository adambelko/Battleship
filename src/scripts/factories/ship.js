const Ship = (length) => {
    let hitCounter = 0;
    let direction = "hor";

    const getLength = () => length;

    const getDirection = () => direction;

    const changeDirection = () => {
        return direction === "hor" ? (direction = "ver") : (direction = "hor");
    };

    const hit = () => {
        hitCounter++;
        if (isSunk === true) return isSunk;
        return hitCounter;
    };

    const isSunk = () => (hitCounter >= length ? true : false);

    return { getLength, getDirection, changeDirection, hit, isSunk };
};

export default Ship;
