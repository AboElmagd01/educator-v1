class Annotation {
    font_size=0.4;
    font_weight="bold";
    constructor(text) {
        this.text = text
    }
    get_entity(){
        const annotation = document.createElement('a-entity');
        const arrow = document.createElement('a-box');
        arrow.setAttribute('position', "0.022 0.423 -1.351");
        arrow.setAttribute('material', "color: #f6d32d");
        arrow.setAttribute('geometry', "height: 1.04");
        arrow.setAttribute('scale', "0.04 0.02 2.89");
        arrow.setAttribute('rotation', "20 0 -0.24");
        const triangle = document.createElement('a-triangle');
        triangle.setAttribute('position', "0.02361 0.89273 -2.68543");
        triangle.setAttribute('material', "color: #f6d32d");
        triangle.setAttribute('scale', "0.39 0.26 4.21");
        triangle.setAttribute('rotation', "0 90 180");

        const text = document.createElement('a-entity');
        text.setAttribute('text-geometry',"value: "+ this.text +" ; bevelSize: 7.77; bevelThickness: 12.46; " +
            "curveSegments: 12.76; height: 0.08; size: "+ this.font_size +"; weight: "+ this.font_weight);
        text.setAttribute('material',"color: #f9f06b");
        text.setAttribute('rotation', "0 0 90");
        text.setAttribute('scale', "1 1 0.18");
        text.setAttribute('position', "-1.08582 -2.89689 -0.008");
        triangle.appendChild(text);
        annotation.appendChild(arrow);
        annotation.appendChild(triangle);
        return annotation;
    }


}