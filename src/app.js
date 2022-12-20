const startGame =  document.querySelector('.start-screen');
const playScreen =  document.querySelector('.play-screen');
startGame.addEventListener('click', gameStart);
document.addEventListener('keydown', presKeyDown);

const state = {
    gameOver: false,
    wizard: {
        x: 50,
        y: 50,
        speed: 10,
    },
    keys: {},
}

function gameStart(e){
    e.preventDefault();
    startGame.classList.add('hidden'); 
    playScreen.classList.remove('hidden');
    let harry = createHero(state);
    playScreen.appendChild(harry);
    window.requestAnimationFrame(gameLoop);
}

function gameLoop(){

    window.requestAnimationFrame(gameLoop);
}

function createHero(state) {
    console.log(state.wizard.x)
    const hero = document.createElement('div');
    hero.classList.add('harry');
    hero.style.top = state.wizard.x + 'px';
    hero.style.left = state.wizard.y + 'px';
    return hero
}

function presKeyDown(e){
    const currentKey = e.code;
    if(currentKey === 'KeyS'){
        //console.log(currentKey);
       state.wizard.x += 30;
        playScreen.replaceChildren(createHero(state))
        //state = wizard.x -= 50
    }

    if(currentKey === 'KeyW'){
        //console.log(currentKey);
        state.wizard.x -= 30;
        playScreen.replaceChildren(createHero(state))
        //state = wizard.x -= 50
    }

    if(currentKey === 'KeyA'){
        //console.log(currentKey);
       state.wizard.y -= 30;
        playScreen.replaceChildren(createHero(state))
        //state = wizard.x -= 50
    }

    if(currentKey === 'KeyD'){
        //console.log(currentKey);
        state.wizard.y += 30;
        playScreen.replaceChildren(createHero(state))
        //state = wizard.x -= 50
    }
}

