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
            if (localStorage["loaded Model"]) {
                alert(localStorage['loaded Model'] , this.el.sceneEl.id);
            }else
            {
                localStorage['loaded Model'] = this.el.sceneEl.id;
            }
        });
    }
});