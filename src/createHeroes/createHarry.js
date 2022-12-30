

export function createHarry(state) {
    const hero = document.createElement('div');
    hero.classList.add('harry');
    hero.style.top = state.wizard.x + 'px';
    hero.style.left = state.wizard.y + 'px';

    return Object.create({}, {
        domElement: {
            get: () => hero
        },
        
        x: {
            get: () => parseInt(hero.style.top),
            set: value => (hero.style.top = value + 'px')
        },
        y: {
            get: () => parseInt(hero.style.left),
            set: value => (hero.style.left = value + 'px')
        }
    })
}
