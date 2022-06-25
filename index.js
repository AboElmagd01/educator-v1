
const loadedModels= []
// fetch('./data.json')
//     .then(response => response.json())
//     .then(json => {
//         json.forEach(item => {
//             const assest = document.createElement('a-asset-item');
//             assest.setAttribute('src', item.src);
//             assest.setAttribute('id', item.name+'-asset');
//             document.querySelector('a-assets').appendChild(assest);
//             const marker = document.createElement('a-marker');
//             marker.setAttribute('id', item.name+'-marker');
//             marker.setAttribute('type', 'pattern');
//             marker.setAttribute('preset', 'custom');
//             marker.setAttribute('url', item.pattern);
//             // marker.setAttribute('raycaster',"objects: .clickable");
//             marker.setAttribute('emitevents', `true`);
//             // marker.setAttribute('cursor', `fuse: false;rayOrigin: mouse`);
//             const model = document.createElement('a-entity');
//             model.setAttribute('gltf-model', item.name+'-asset');
//             model.setAttribute('scale', item.scale);
//             model.setAttribute('id', item.name+'-model');
//             model.setAttribute('animation-mixer', 'loop: repeat');
//             model.setAttribute('class', 'clickable');
//             model.setAttribute('gesture-handler', '');
//             marker.append(model);
//             document.querySelector('a-scene').append(marker);
//     }
//     )})
AFRAME.registerComponent('marker-handler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', function (evt) {
            if (loadedModels.indexOf(evt.target.id) === -1) {
                loadedModels.push(evt.target.id)
            }
            if (loadedModels.length === 2) {
                loadedModels.forEach(model => {
                    let x = document.querySelector('#' + model.replace('marker', 'model'));
                    x.setAttribute('visible', 'false');
                    x.append('<a-entity id="na-model" scale="0.25 0.25 0.25" animation-mixer="loop: repeat" gltf-model="#nacl-asset" class="clickable" gesture-handler</a-entity>');
                });
                document.querySelector('#na-model').setAttribute('visible', 'true');
            }
        });
        this.el.sceneEl.addEventListener('markerLost', function (evt) {
            if (loadedModels.length>=1){
                loadedModels.forEach(model => {
                    let x = document.querySelector('#' + model.replace('marker', 'model'));
                        x.setAttribute('visible', 'true');
                });
            }
            if (loadedModels.indexOf(evt.target.id) !== -1) {
                loadedModels.splice(loadedModels.indexOf(evt.target.id), 1)
            }
        });
    }
});
