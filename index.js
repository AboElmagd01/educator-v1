AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            el.classList.add('hidden');
        });
    }
});
const loadedModels= []
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
                });
                document.querySelector('#nacl-model').setAttribute('visible', 'true');
            }
        });
    }
});