class Marker {
    constructor(id, barcode_value) {
        this.id = id;
        this.barcode_value = barcode_value
    }
    get_entity(){
        const marker = document.createElement('a-marker');
        marker.setAttribute('id', this.id+"-marker");
        marker.setAttribute('type', 'barcode');
        marker.setAttribute('value', String(this.barcode_value));
        marker.setAttribute('raycaster', 'objects: .clickable');
        marker.setAttribute('emitevents', 'true');
        marker.setAttribute('cursor', 'fuse: false; rayOrigin: mouse;');
        return marker;
    }
}