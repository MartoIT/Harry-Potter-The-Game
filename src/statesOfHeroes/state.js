
export const stateHarry = {
    gameOver: false,
    wizard: {
        x: 50,
        y: 50,
        speed: 10,
    },
    keys: {},
}

export const stateVoldemort = {
    wizard: {
        x: coordinatesX(),
        y: coordinatesY(),
        speed: 10,
    },
    keys: {},
}


export const stateClouds = {
    currentCloud: {
        x: coordinatesX(),
        y: coordinatesY(),
        speed: 10,
    },
    keys: {},
}


function coordinatesX() {
    return Math.floor(Math.random() * (700 - 30) + 30)
}
function coordinatesY() {
    return Math.floor(Math.random() * (1800 - 1600) + 1600)
}

