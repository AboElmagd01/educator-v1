export class Bond {
    private _color="#1a5fb4"
    private position: string;
    constructor(position: string) {
        this.position = position
    }
    get_entity(){
         const bond = document.createElement('a-cylinder');
            bond.setAttribute('material', "color: "+ this._color );
            bond.setAttribute('geometry', "height: 2.0; radius: 0.15")
            bond.setAttribute('rotation', '0 0 90');
            bond.setAttribute('animation', "property: position; to:"+ this.position+" ; dur: 8000; easing: easeInExpo")
            return bond;
    }
    static getNoReactionModel(){
        const text = document.createElement('a-entity');
        text.setAttribute('id', 'noReaction');
        // @ts-ignore
        text.object3D.position.set(-0.8, 1.600, 1.4);
        text.setAttribute('text-geometry',"value: No Reaction ; bevelSize: 7.77; bevelThickness: 12.46; curveSegments: 12.76; height: 0.08; size: 0.2; weight: bold");
        text.setAttribute('material',"");
        text.setAttribute('rotation', '-90 0 0');
        return text;
    }

}