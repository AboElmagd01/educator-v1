class CustomModel {
    constructor(name, scale) {
        this.name = name
        this.scale = scale
    }
    get_entity(){
        const model = document.createElement('a-entity');
        model.setAttribute('id',this.name + "-model")
        model.setAttribute('scale', this.scale)
        model.setAttribute('animation-mixer', "loop: repeat")
        model.setAttribute('gltf-model', "#"+this.name + "-asset" )
        model.setAttribute('class' ,"clickable" )
        model.setAttribute('gesture-handler', '');
        return model;
    }
}