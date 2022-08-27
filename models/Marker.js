class Marker {
    constructor(id) {
        this.id = id;
    }
    get_entity(){
        const marker = document.createElement('a-marker');
        marker.setAttribute('id', this.id+"-marker");
        marker.setAttribute('raycaster', 'objects: .clickable');
        marker.setAttribute('emitevents', 'true');
        marker.setAttribute('cursor', 'fuse: false; rayOrigin: mouse;');
        return marker;
    }
}