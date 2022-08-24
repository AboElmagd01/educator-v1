export class Atom{
    private _radius=1;
    private _color="#1913cf";
    private _font_size=0.8;
    private name: string;
    constructor(name: string) {
        this.name= name
    }
    get_entity(){
        const text = document.createElement('a-entity');
        // @ts-ignore
        text.object3D.position.set(-0.180, -0.16, 1.4);
        text.setAttribute('text-geometry',"value: "+ this.name + "; bevelSize: 7.77; bevelThickness: 12.46;" +
            " curveSegments: 12.76; height: 0.08; size: " + this._font_size +"; weight: bold");
        text.setAttribute('material',"");
        const atom = document.createElement('a-sphere');
        atom.setAttribute('radius', String(this._radius));
        atom.setAttribute('class', 'atom');
        atom.setAttribute('color', this._color);
        atom.appendChild(text);
        return atom;
    }


}