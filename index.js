AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            el.classList.add('hidden');
        });
    }
});

AFRAME.registerComponent('marker-handler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
            if (localStorage["loadedModel"] != null) {
                alert(localStorage['loadedModel'] , this.el.sceneEl.entity.id);
            }else
            {
                localStorage['loadedModel'] = this.el.sceneEl.entity.id;
            }
        });
    }
});