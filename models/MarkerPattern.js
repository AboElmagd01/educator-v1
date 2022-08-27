class MarkerPattern extends Marker{
    constructor(id, pattern_url) {
        super(id);
        this.pattern_url = pattern_url
    }
    get_entity() {
        const marker = super.get_entity();
        marker.setAttribute('type', 'pattern');
        marker.setAttribute('preset', 'custom');
        marker.setAttribute('url', this.pattern_url);
        return marker;
    }
}