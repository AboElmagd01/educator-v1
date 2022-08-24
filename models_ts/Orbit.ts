import {Electron} from './Electron'
export class Orbit{
    private level: number;
    private max_electrons: number;
    constructor(level: number, max_electrons: number) {
        this.level = level;
        this.max_electrons=max_electrons;
    }
    get_entity(){
        const orbit = document.createElement('a-torus');
        orbit.setAttribute("animation","property: rotation; to: 90 0 180; loop: true; dur: 3000;easing: linear");
        orbit.setAttribute('radius', String(OrbitLength[this.level]));
        orbit.setAttribute('arc', String(360));
        orbit.setAttribute('radius-tubular', String(0.01));
        orbit.setAttribute('material', "color: #ffffff; metalness: 0.01; roughness: 1;");
        orbit.setAttribute('rotation', "90 0 0");
        orbit.setAttribute('scale', "0.98 0.98 0.75");
        for (let i = 0; i < this.max_electrons ; i++) {
            if (this.level === 0 && i===0 ){
                orbit.appendChild(new Electron(electronPositions[this.level][i]).get_entity_with_annot("Electron (-e)"))
            }else {
                orbit.appendChild(new Electron(electronPositions[this.level][i]).get_entity());
            }

        }
        return orbit;
    }
}

let electronPositions = {
    0: ['-1.99 0 0', '1.99 0 0'],
    1: ['-2.99 0 0', '2.99 0 0', '0 2.99 0', '0 -2.99 0', '-2.22 -1.94 0', '-2.22 1.94 0', '2.22 -1.94 0', '2.22 1.94 0'],
    2: ['-3.99 0 0', '3.99 0 0', '0 3.99 0', '0 -3.99 0', '-2.69 -2.94 0', '-2.69 2.94 0', '2.69 -2.94 0', '2.69 2.94 0', '3.619 -1.54 0', '3.619 1.54 0', '-3.619 -1.54 0', '-3.619 1.54 0', '-1.417 -3.74 0', '3.245 2.345 0', '-3.25 -2.38 0', '1.714 -3.60 0', '-1.416 3.703 0', '1.416 3.703 0', '-1.416 -3.703 0'],
    3: ['-4.99 0 0', '4.99 0 0', '0 4.99 0', '0 -4.99 0', '-4.056 -2.97 0', '-3.329 3.728 0', '3.63 -3.531 0', '2.793 4.08 0', '4.436 -2.27 0', '4.376 2.468 0', '-4.767 -1.64 0', '-4.4 2.195 0', '-1.907 -4.62 0', '3.626 3.406 0', '-3.188 -3.86 0', '1.774 -4.60 0', '-1.416 4.703 0', '1.416 4.703 0', '-1.416 -4.703 0'],
    4: ['-5.99 0 0', '5.99 0 0', '0 5.99 0', '0 -5.99 0', '-4.396 -4.09 0', '-4.106 4.404 0', '4.278 -4.16 0', '4.245 4.24 0', '5.183 -2.97 0', '5.647 2.045 0', '-5.083 -3.21 0', '-5.677 2.078 0', '-2.903 -5.23 0', '2.998 5.215 0', '2.997 -5.17 0', '1.834 -5.73 0', '-1.5 5.803 0', '1.504 5.792 0'],
    5: ['-6.99 0 0', '6.99 0 0', '0 6.99 0', '0 -6.99 0', '-5.418 -4.44 0', '-5.415 4.499 0', '5.347 -4.48 0', '5.352 4.544 0', '-6.208 -3.05 0', '4.245 5.345 0', '-4.25 -5.38 0', '1.714 -6.60 0', '-1.416 6.703 0', '1.416 6.703 0', '-1.416 -6.703 0'],
    6: ['-7.99 0 0', '7.99 0 0', '0 7.99 0', '0 -7.99 0', '-6.101 -5.21 0', '-6.361 4.863 0', '6.230 -5.0 0', '6.262 4.97 0', '-5.417 -7.74 0', '5.245 6.345 0', '-5.25 -6.38 0', '1.714 -7.60 0', '-1.416 7.703 0', '1.416 7.703 0', '-1.416 -7.703 0'],
}
let OrbitLength = [2,3,4,5,6,7,8]