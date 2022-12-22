

export function createHarry(state) {
    console.log(state.wizard.x)
    const hero = document.createElement('div');
    hero.classList.add('harry');
    hero.style.top = state.wizard.x + 'px';
    hero.style.left = state.wizard.y + 'px';
    return hero
}