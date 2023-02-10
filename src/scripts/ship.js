const Ship = (length) => {
    let hitCounter = 0;
    let direction = "hor";

    const getLength = () => length;

    const getDirection = () => direction;

    const changeDirection = () => {
        return direction === "hor" ? (direction = "ver") : (direction = "hor");
    };

    const hit = () => hitCounter++;

    const isSunk = () => (length >= hitCounter ? true : false);

    return { getLength, getDirection, changeDirection, hit, isSunk };
};

export default Ship;
