AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            this.setAttribute('display', 'none');
        });
    }
});