// @ts-ignore
class Electron {
    constructor(position) {
        this.position = position
    }

    get_entity(){
        const electron = document.createElement('a-sphere');
        electron.setAttribute('radius', String(0.11));
        electron.setAttribute('color', "#a51d2d");
        electron.setAttribute('position', this.position);
        electron.setAttribute('scale', "1 1 1.22");
        return electron;
    }
    get_entity_with_annot(text){
        const electron = document.createElement('a-sphere');
        electron.setAttribute('radius', String(0.11));
        electron.setAttribute('color', "#a51d2d");
        electron.setAttribute('position', this.position);
        electron.setAttribute('scale', "1 1 1.22");
        const annotation = new Annotation(text).get_entity();
        electron.appendChild(annotation);
        return electron;
    }

}