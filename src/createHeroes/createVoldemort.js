
export function createVoldemort(stateVoldemort) {
    const villain = document.createElement('div');
    villain.classList.add('voldemort');
    villain.style.top = stateVoldemort.wizard.x + 'px';
    villain.style.left = stateVoldemort.wizard.y + 'px';

    return Object.create({}, {
        domElement: {
            get: () => villain
        },
        x: {
            get: () => parseInt(villain.style.top),
            set: value => (villain.style.top = value + 'px')
        },
        y: {
            get: () => parseInt(villain.style.left),
            set: value => (villain.style.left = value + 'px')
        }
    })
}
