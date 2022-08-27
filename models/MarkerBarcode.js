class MarkerBarcode extends Marker{
    constructor(id, barcode_value) {
        super(id);
        this.barcode_value = barcode_value
    }
    get_entity(){
        const marker = super.get_entity();
        marker.setAttribute('type', 'barcode');
        marker.setAttribute('value', String(this.barcode_value));
        return marker;
    }
}