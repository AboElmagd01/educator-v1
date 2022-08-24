import {Molecule} from "./Molecule";
import {Bond} from "./Bond";

class Compound{
    private first_element: Molecule;
    private second_element: Molecule;

    constructor(first_element: Molecule, second_element: Molecule) {
        this.first_element = first_element;
        this.second_element = second_element;
    }
    get_entity(){
        const m1= this.first_element.get_entity()
        const m2= this.second_element.get_entity()
        //Structure
        m1.setAttribute('position', '7 0 0');
        m2.setAttribute('position', '-7 0 0');
        m1.setAttribute('scale', '0.6 0.6 0.6');
        m2.setAttribute('scale', '0.6 0.6 0.6');
        // Animation
        m1.setAttribute('animation', "property: position; to: 3 0 0;; dur: 2000; easing: linear")
        m2.setAttribute('animation', "property: position; to: -2 0 0;; dur: 2000; easing: linear")
        m1.querySelector('.atom').setAttribute('animation', "property: position; to:-2 0 0; dur: 6000; easing: easeInExpo")
        m2.querySelector('.atom').setAttribute('animation', "property: position; to:4.2 0 0; dur: 6000; easing: easeInExpo")
        m1.querySelectorAll('a-torus').forEach(function(e){
            e.setAttribute('animation', "property: rotation; to: 90 0 180; loop: true; dur: 5000; easing: linear")
            e.setAttribute('animation__2', "property: visible; from: true; to: false; dur: 9999999999999999991")
        })
        m2.querySelectorAll('a-torus').forEach(function(e){
            e.setAttribute('animation', "property: rotation; to: 90 0 180; loop: true; dur: 5000; easing: linear")
            e.setAttribute('animation__2', "property: visible; from: true; to: false; dur: 9999999999999999991")
        })
        //Output
        const model= document.createElement('a-entity')
        model.appendChild(m1)
        model.appendChild(m2)
        return model;
    }
    get_triple_entity(third_element: Molecule){
        const model= this.get_entity();
        //Adjusting Previous elements
        model.children[0].setAttribute('position', '10 0 0');
        model.children[1].setAttribute('position', '-10 0 0');
        model.children[0].setAttribute('animation', "property: position; to: 3 0 0;; dur: 2000; easing: linear");
        model.children[1].setAttribute('animation', "property: position; to: -3 0 0;; dur: 2000; easing: linear");
        model.children[0].querySelector('.atom').setAttribute('animation', "property: position; to:-2 0 0; dur: 6000; easing: easeInExpo");
        model.children[1].querySelector('.atom').setAttribute('animation', "property: position; to:2 0 0; dur: 6000; easing: easeInExpo");
        //Adding third Element
        const m3= third_element.get_entity();
        m3.querySelector('.atom').appendChild(new Bond("2 0 0").get_entity());
        m3.querySelector('.atom').appendChild(new Bond("-2 0 0").get_entity());
        m3.setAttribute('position', '0 0 0');
        m3.setAttribute('scale', '0.6 0.6 0.6');
        //Animation
        m3.setAttribute('animation', "property: position; to: 0 0 0;; dur: 2000; easing: linear")
        m3.querySelector('.atom').setAttribute('animation', "property: position; to:0 0 0; dur: 6000; easing: easeInExpo")
        m3.querySelectorAll('a-torus').forEach(function(e){
                e.setAttribute('animation', "property: rotation; to: 90 0 180; loop: true; dur: 5000; easing: linear")
                e.setAttribute('animation__2', "property: visible; from: true; to: false; dur: 9999999999999999991")
            }
        )
        model.appendChild(m3)
        return model;
    }
    static from_name(first: string, second:string, third: string=''){
        if(third==='')
            return new Compound(new Molecule(first), new Molecule(second)).get_entity()
        return new Compound(new Molecule(first), new Molecule(second)).get_triple_entity(new Molecule(third))
    }
}
