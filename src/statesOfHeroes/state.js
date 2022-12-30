
export const newStateHarry = () => ({
    gameOver: false,
    wizard: {
        x: 50,
        y: 50,
        speed: 10,
    },
    keys: {},
})

export const newStateVoldemort = () => ({
    wizard: {
        x: coordinatesX(),
        y: coordinatesY(),
        speed: 10,
    },
    keys: {},
})


export const newStateClouds = () => ({
    currentCloud: {
        x: coordinatesX(),
        y: coordinatesY(),
        speed: 10,
    },
    keys: {},
})

export const newStateMagic = (x, y) => ({
    currentMagic: {
        x,
        y
       
    }
    
})

export function coordinatesX() {
    return Math.floor(Math.random() * (700 - 30) + 30)
}
export function coordinatesY() {
    return Math.floor(Math.random() * (1800 - 1600) + 1600)
}

