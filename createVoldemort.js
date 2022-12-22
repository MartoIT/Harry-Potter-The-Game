
export function createVoldemort(stateVoldemort) {
    
    const villain = document.createElement('div');
    villain.classList.add('voldemort');
    villain.style.top = stateVoldemort.wizard.x + 'px';
    villain.style.left = stateVoldemort.wizard.y + 'px';
    
    return villain;
}