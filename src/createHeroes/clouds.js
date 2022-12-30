

export function createClouds(stateClouds) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.style.top = stateClouds.currentCloud.x + 'px';
    cloud.style.left = stateClouds.currentCloud.y + 'px';
    
    return Object.create({}, {
        domElement: {
            get: () => cloud
        },
        x: {
            get: () => parseInt(cloud.style.top),
            set: value => (cloud.style.top = value + 'px')
        },
        y: {
            get: () => parseInt(cloud.style.left),
            set: value => (cloud.style.left = value + 'px')
        }
    })
}
