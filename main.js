function setController(model){
    AFRAME.registerComponent(model+"-controller", {
        init: function () {
            this.modelVisible = false;
            // track markerFound/markerLost
            this.el.addEventListener("markerFound", () => this.modelVisible = true);
            this.el.addEventListener("markerLost", () => this.modelVisible = false);
            // grab the model reference
            document.querySelector("#"+model+ "-model").addEventListener("model-loaded", evt => {
                this.mesh = evt.detail.model;
                this.desc = document.querySelector("#"+model+"-desc").object3D;
            })


            // hammerjs input helper
            const hammertime = new Hammer(document.body);

            // scale
            // scale is tricky, because it resets
            var currentScale = 1;
            hammertime.get('pinch').set({ enable: true });
            hammertime.on("pinchstart", (ev) => {
                currentScale = this.mesh.scale.x;
                currentScaleText = this.desc.scale.x;
            })
            hammertime.on("pinchmove", (ev) => {
                if (!this.modelVisible) return;
                this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
                this.desc.scale.multiplyScalar(0).addScalar(ev.scale * currentScaleText);
            });

            // rotation
            // pan left/right for rotation
            this.isPanning = false;
            hammertime.on("panleft", () => {
                if (!this.modelVisible) return;
                this.isPanning = true
                this.mesh.rotation.y -= 4 * Math.PI / 360;
            })

            hammertime.on("panright", () => {
                if (!this.modelVisible) return;
                this.isPanning = true
                this.mesh.rotation.y += 4 * Math.PI / 360;
            })
            hammertime.on("panup", () => {
                if (!this.modelVisible) return;
                this.isPanning = true
                this.mesh.rotation.x -= 4 * Math.PI / 360;
            })

            hammertime.on("pandown", () => {
                if (!this.modelVisible) return;
                this.isPanning = true
                this.mesh.rotation.x += 4 * Math.PI / 360;
            })
            hammertime.on("panend", () => this.isPanning = false)
            hammertime.on("pancancel", () => this.isPanning = false)

            hammertime.on("swipeleft",  ({velocity}) => {
                if (!this.modelVisible) return;
                this.swipeVelocity = velocity
            })
            hammertime.on("swiperight", ({velocity}) => {
                if (!this.modelVisible) return;
                this.swipeVelocity = velocity
            })
            hammertime.on("press", () => {
                if (!this.modelVisible) return;
                this.desc.visible = this.desc.visible !== true;
            })
        },
        tick: function() {
            if (!(this.modelVisible && this.swipeVelocity &&!this.isPanning)) return;
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
    })

}