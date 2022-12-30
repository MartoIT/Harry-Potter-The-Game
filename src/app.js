
import { createHarry } from './createHeroes/createHarry.js'
import { createVoldemort } from './createHeroes/createVoldemort.js'
import { createClouds } from './createHeroes/clouds.js'
import { newStateHarry, newStateVoldemort, newStateClouds, newStateMagic } from './statesOfHeroes/state.js'
import { createMagic } from './createHeroes/magic.js';


const startGame = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');

startGame.addEventListener('click', gameStart);
document.addEventListener('keydown', presKeyDown);

let harry = createHarry(newStateHarry());
let voldemort = createVoldemort(newStateVoldemort());
let cloud = createClouds(newStateClouds())
let magic = createMagic(newStateMagic())


let enemies = [voldemort];
let clouds = [cloud];
let magics = [magic];

let count = 0;
let points = document.createElement('section');
points.classList.add('points')
points.textContent = count;

function gameStart(e) {
    e.preventDefault();
    startGame.classList.add('hidden');
    playScreen.classList.remove('hidden');
    playScreen.appendChild(harry.domElement);
    playScreen.appendChild(voldemort.domElement);
    playScreen.appendChild(cloud.domElement);
    playScreen.appendChild(points)
    window.requestAnimationFrame(gameLoop);
    setInterval(gravity, 400);
    setInterval(voldemortMove, 600);
    setInterval(cloudMove, 1000);
    setInterval(magicsMove, 80);
    setInterval(() => {
        const newEnemy = createVoldemort(newStateVoldemort());
        playScreen.appendChild(newEnemy.domElement);
        enemies.push(newEnemy);
    }, 1000);
    setInterval(() => {
        const newColuds = createClouds(newStateClouds());
        playScreen.appendChild(newColuds.domElement);
        clouds.push(newColuds);
    }, 2000);

}

function gameLoop() {

    window.requestAnimationFrame(gameLoop);
}

function gravity() {
    const currentX = harry.x;
    if (currentX + 20 < 1000) {
        harry.x += 20
    }

}
function voldemortMove() {
    enemies.forEach(enemy => {
        checkForCollision(harry.domElement, enemy.domElement)

        let currnet = enemy.y - 150;
        if (currnet < 10) {
            enemy.domElement.remove();
        } else {
            enemy.y -= 150;
        }

    })
}

function magicsMove() {
    magics.forEach(magic => {
        enemies.forEach(enemy => {
            let result = checkForStrike(enemy.domElement, magic.domElement)
            if (result === 'Yes') {
                enemy.domElement.remove();
                magic.domElement.remove();

            }

        })

        let current = magic.y + 100;
        if (current > 2180) {
            magic.domElement.remove();
        } else {
            magic.y += 100;
        }

    })
}

function cloudMove() {
    clouds.forEach(cloud => {
        let current = cloud.y - 40;
        if (current < 10) {
            cloud.domElement.remove()
        } else {
            cloud.y -= 40;
        }

    })

}


function checkForCollision(firstElemnt, secondElment) {
    let first = firstElemnt.getBoundingClientRect();
    let second = secondElment.getBoundingClientRect();

    if (!(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right)) {
        alert(`Game Over!!! You have ${count} point\'s won!`)
    }
}

function checkForStrike(firstElemnt, secondElment) {
    let first = firstElemnt.getBoundingClientRect();
    let second = secondElment.getBoundingClientRect();
    count++;
    points.textContent = count;
    let boolen = 'No'
    if (!(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right)) {
        boolen = 'Yes'
        return boolen;
    }
   
    return boolen;


}

function presKeyDown(e) {
    const currentKey = e.code;
    if (currentKey === 'ArrowDown') {
        const currentX = harry.x;
        if (currentX + 50 < 1000) {
            harry.x += 50
        }
    }

    if (currentKey === 'ArrowUp') {
        const currentX = harry.x
        if (currentX - 50 > 1) {
            harry.x -= 50
        }
    }

    if (currentKey === 'ArrowLeft') {
        const currentY = harry.y
        if (currentY - 50 > 1) {
            harry.y -= 50
        }

    }

    if (currentKey === 'ArrowRight') {
        const currentY = harry.y
        if (currentY + 50 < 2180) {
            harry.y += 50
        }

    }

    if (currentKey === 'Space') {
        const currentX = harry.x + 40;
        const currentY = 100 + harry.y
        const newMagic = createMagic(newStateMagic(currentX, currentY));
        playScreen.appendChild(newMagic.domElement);
        magics.push(newMagic);

    }
}
