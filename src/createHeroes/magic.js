
export function createMagic(stateMagic) {
    const magic = document.createElement('div');
    magic.classList.add('magic');
    magic.style.top = stateMagic.currentMagic.x + 'px';
    magic.style.left = stateMagic.currentMagic.y + 'px';

    return Object.create({}, {
        domElement: {
            get: () => magic
        },
        x: {
            get: () => parseInt(magic.style.top),
            set: value => (magic.style.top = value + 'px')
        },
        y: {
            get: () => parseInt(magic.style.left),
            set: value => (magic.style.left = value + 'px')
        }
    })
}
