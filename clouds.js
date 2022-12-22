

export function createClouds(stateClouds) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.style.top = stateClouds.currentCloud.x + 'px';
    cloud.style.left = stateClouds.currentCloud.y + 'px';
    return cloud;
}