class CustomAsset {
    constructor(name, src) {
        this.name = name;
        this.src = src;
    }
    get_entity(){
        const asset = document.createElement('a-asset-item');
        asset.setAttribute('id',this.name + "-asset");
        asset.setAttribute('src', this.src)
        return asset;
    }
}