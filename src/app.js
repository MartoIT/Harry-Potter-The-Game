
import { createHarry } from './createHeroes/createHarry.js'
import { createVoldemort } from './createHeroes/createVoldemort.js'
import { createClouds } from './createHeroes/clouds.js'
import { stateHarry, stateVoldemort, stateClouds } from './statesOfHeroes/state.js'

const startGame = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');
startGame.addEventListener('click', gameStart);
document.addEventListener('keydown', presKeyDown);
let harry = createHarry(stateHarry);
let voldemort = createVoldemort(stateVoldemort);
let cloud = createClouds(stateClouds)


function gameStart(e) {
    e.preventDefault();
    startGame.classList.add('hidden');
    playScreen.classList.remove('hidden');
    playScreen.appendChild(harry);
    playScreen.appendChild(voldemort);
    playScreen.appendChild(cloud);
    window.requestAnimationFrame(gameLoop);
    setInterval(gravity, 400);
    setInterval(voldemortMove, 1000);
    setInterval(cloudMove, 1000);
    
}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
}

function renderTheScreen() {
    playScreen.replaceChildren(createHarry(stateHarry), createVoldemort(stateVoldemort), createClouds(stateClouds));
}


function gravity() {
    stateHarry.wizard.x += 20
    renderTheScreen()

}

function voldemortMove() {
    stateVoldemort.wizard.y -= 20
    renderTheScreen()
}

function cloudMove() {
    stateClouds.currentCloud.y -= 20
    renderTheScreen()
}

function presKeyDown(e) {
    const currentKey = e.code;
    if (currentKey === 'ArrowDown') {
        stateHarry.wizard.x += 30;
    }

    if (currentKey === 'ArrowUp') {
        stateHarry.wizard.x -= 30;
    }

    if (currentKey === 'ArrowLeft') {
        stateHarry.wizard.y -= 30;
    }

    if (currentKey === 'ArrowRight') {
        stateHarry.wizard.y += 30;
    }
    renderTheScreen()

}



