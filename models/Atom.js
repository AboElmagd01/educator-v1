class Atom{
    radius=1;
    color="#1913cf";
    font_size=0.8;
    constructor(name) {
        this.name= name
    }
    get_entity(){
        const text = document.createElement('a-entity');
        // @ts-ignore
        text.object3D.position.set(-0.180, -0.16, 1.4);
        text.setAttribute('text-geometry',"value: "+ this.name + "; bevelSize: 7.77; bevelThickness: 12.46;" +
            " curveSegments: 12.76; height: 0.08; size: " + this.font_size +"; weight: bold");
        text.setAttribute('material',"");
        const atom = document.createElement('a-sphere');
        atom.setAttribute('radius', String(this.radius));
        atom.setAttribute('class', 'atom');
        atom.setAttribute('color', this.color);
        atom.appendChild(text);
        return atom;
    }


}