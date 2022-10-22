import {Orbit} from "./Orbit";
import {Atom} from "./Atom";

export class Molecule {
    private name: any;
    private energy_shells: any;
    constructor(name) {
        this.name = name
        this.energy_shells=ElectronDistribution[name];
    }
    get_entity(){
        const molecule = document.createElement('a-entity');
        molecule.setAttribute('id', this.name+'-model');
        molecule.setAttribute('class', 'clickable');
        molecule.setAttribute('animation-mixer', 'loop: repeat');
        molecule.setAttribute('gesture-handler', '');
        molecule.setAttribute('scale', '0.14 0.14 0.14');
        const atom = new Atom(this.name).get_entity();
        molecule.appendChild(atom);
        let level =0;
        for (let i = 0; i < this.energy_shells.length; i++) {
            molecule.appendChild(new Orbit(i, this.energy_shells[i]).get_entity());
            level++;
        }
        return molecule
    }
}

let ElectronDistribution = {
    'H': [1], 'He':[2], 'Li':[2,1], 'Be': [2,2], 'B': [2,3], 'C': [2,4], 'N': [2,5], 'O': [2,6], 'F': [2,7], 'Ne': [2,8], 'Na': [2,8,1], 'Mg': [2,8,2], 'Al': [2,8,3], 'Si': [2,8,4], 'P': [2,8,5], 'S': [2,8,6], 'Cl': [2,8,7], 'Ar': [2,8,8], 'K': [2,8,8,1], 'Ca': [2,8,8,2], 'Sc': [2,8,9,2], 'Ti': [2,8,10,2], 'V': [2,8,11,2], 'Cr': [2,8,13,1],
    'Mn': [2,8,13,2], 'Fe': [2,8,14,2], 'Co': [2,8,15,2], 'Ni': [2,8,16,2], 'Cu': [2,8,18,1], 'Zn': [2,8,18,2], 'Ga': [2,8,18,3], 'Ge': [2,8,18,4], 'As': [2,8,18,5], 'Se': [2,8,18,6],'Br': [2,8,18,7], 'Kr': [2,8,18,8], 'Rb': [2,8,18,8,1], 'Sr': [2,8,18,8,2], 'Y': [2,8,18,9,2], 'Zr': [2,8,18,10,2], 'Nb': [2,8,18,12,1], 'Mo': [2,8,18,13,1],
    'Tc': [2,8,18,13,2], 'Ru': [2,8,18,15,1], 'Rh': [2,8,18,16,2], 'Pd': [2,8,18,18], 'Ag': [2,8,18,18,1], 'Cd': [2,8,18,18,2], 'In': [2,8,18,18,3], 'Sn': [2,8,18,18,4], 'Sb': [2,8,18,18,5], 'Te': [2,8,18,18,6], 'I': [2,8,18,18,7], 'Xe': [2,8,18,18,8], 'Cs': [2,8,18,18,8,1], 'Ba': [2,8,18,18,8,2], 'La': [2,8,18,18,9,2], 'Ce': [2,8,18,19,9,2],
    'Pr': [2,8,18,21,8,2], 'Nd': [2,8,18,22,8,2], 'Pm': [2,8,18,23,8,2], 'Sm': [2,8,18,24,8,2], 'Eu': [2,8,18,25,8,2], 'Gd': [2,8,18,25,9,2], 'Tb': [2,8,18,27,8,2], 'Dy': [2,8,18,28,8,2], 'Ho': [2,8,18,29,8,2], 'Er': [2,8,18,30,8,2], 'Tm': [2,8,18,31,8,2], 'Yb': [2,8,18,32,8,2], 'Lu': [2,8,18,32,9,2], 'Hf': [2,8,18,32,10,2], 'Ta': [2,8,18,32,11,2], 'W': [2,8,18,32,12,2],
    'Re': [2,8,18,32,13,2], 'Os': [2,8,18,32,14,2], 'Ir': [2,8,18,32,15,2], 'Pt': [2,8,18,32,17,1], 'Au': [2,8,18,32,18,1], 'Hg': [2,8,18,32,18,2], 'Tl': [2,8,18,32,18,3],
    'Pb': [2,8,18,32,18,4], 'Bi': [2,8,18,32,18,5], 'Po': [2,8,18,32,18,6], 'At': [2,8,18,32,18,7], 'Rn': [2,8,18,32,18,8], 'Fr': [2,8,18,32,18,8,1], 'Ra': [2,8,18,32,18,8,2], 'Ac': [2,8,18,32,18,9,2], 'Th': [2,8,18,32,18,10,2], 'Pa': [2,8,18,32,20,9,2], 'U': [2,8,18,32,21,9,2], 'Np': [2,8,18,32,22,9,2], 'Pu': [2,8,18,32,23,9,2],
    'Am': [2,8,18,32,24,9,2], 'Cm': [2,8,18,32,25,9,2], 'Bk': [2,8,18,32,27,8,2], 'Cf': [2,8,18,32,28,8,2], 'Es': [2,8,18,32,29,8,2], 'Fm': [2,8,18,32,30,8,2], 'Md': [2,8,18,32,31,8,2], 'No': [2,8,18,32,32,8,2], 'Lr': [2,8,18,32,32,8,3], 'Rf': [2,8,18,32,32,10,2], 'Db': [2,8,18,32,32,11,2], 'Sg': [2,8,18,32,32,12,2], 'Bh': [2,8,18,32,32,13,2],
    'Hs': [2,8,18,32,32,14,2], 'Mt': [2,8,18,32,32,15,2], 'Ds': [2,8,18,32,32,16,2], 'Rg': [2,8,18,32,32,17,2], 'Cn': [2,8,18,32,32,18,2], 'Nh': [2,8,18,32,32,18,3], 'Fl': [2,8,18,32,32,18,4], 'Mc': [2,8,18,32,32,18,5], 'Lv': [2,8,18,32,32,18,6], 'Ts': [2,8,18,32,32,18,7], 'Og': [2,8,18,32,32,18,8]}
export let ElectronsNumber = {
    'H': 1, 'He': 2, 'Li': 3, 'Be': 4, 'B': 5, 'C': 6, 'N': 7, 'O': 8, 'F': 9, 'Ne': 10, 'Na': 11, 'Mg': 12, 'Al': 13, 'Si': 14, 'P': 15, 'S': 16, 'Cl': 17, 'Ar': 18, 'K': 19, 'Ca': 20, 'Sc': 21, 'Ti': 22, 'V': 23, 'Cr': 24, 'Mn': 25, 'Fe': 26, 'Co': 27, 'Ni': 28, 'Cu': 29, 'Zn': 30, 'Ga': 31, 'Ge': 32, 'As': 33, 'Se': 34,
    'Br': 35, 'Kr': 36, 'Rb': 37, 'Sr': 38, 'Y': 39, 'Zr': 40, 'Nb': 41, 'Mo': 42, 'Tc': 43, 'Ru': 44, 'Rh': 45, 'Pd': 46, 'Ag': 47, 'Cd': 48, 'In': 49, 'Sn': 50, 'Sb': 51, 'Te': 52, 'I': 53, 'Xe': 54, 'Cs': 55, 'Ba': 56, 'La': 57, 'Ce': 58, 'Pr': 59, 'Nd': 60, 'Pm': 61, 'Sm': 62, 'Eu': 63, 'Gd': 64, 'Tb': 65, 'Dy': 66, 'Ho': 67,
    'Er': 68, 'Tm': 69, 'Yb': 70, 'Lu': 71, 'Hf': 72, 'Ta': 73, 'W': 74, 'Re': 75, 'Os': 76, 'Ir': 77, 'Pt': 78, 'Au': 79, 'Hg': 80, 'Tl': 81, 'Pb': 82, 'Bi': 83, 'Po': 84, 'At': 85, 'Rn': 86, 'Fr': 87, 'Ra': 88, 'Ac': 89, 'Th': 90, 'Pa': 91, 'U': 92, 'Np': 93, 'Pu': 94, 'Am': 95, 'Cm': 96, 'Bk': 97, 'Cf': 98, 'Es': 99, 'Fm': 100,
    'Md': 101, 'No': 102, 'Lr': 103, 'Rf': 104, 'Db': 105, 'Sg': 106, 'Bh': 107, 'Hs': 108, 'Mt': 109, 'Ds': 110, 'Rg': 111, 'Cn': 112, 'Nh': 113, 'Fl': 114, 'Mc': 115, 'Lv': 116, 'Ts': 117, 'Og': 118
}