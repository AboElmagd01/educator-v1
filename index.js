let loadedModels= new Set();
const avaliableModels = ((model) => {
    if (model === 'clna'||model === 'nacl') {
        return 'nacl';
    }else
        return null;
});

getElectronsNumber = {
    'H': 1, 'He': 2, 'Li': 3, 'Be': 4, 'B': 5, 'C': 6, 'N': 7, 'O': 8, 'F': 9, 'Ne': 10, 'Na': 11, 'Mg': 12, 'Al': 13, 'Si': 14, 'P': 15, 'S': 16, 'Cl': 17, 'Ar': 18, 'K': 19, 'Ca': 20, 'Sc': 21, 'Ti': 22, 'V': 23, 'Cr': 24, 'Mn': 25, 'Fe': 26, 'Co': 27, 'Ni': 28, 'Cu': 29, 'Zn': 30, 'Ga': 31, 'Ge': 32, 'As': 33, 'Se': 34,
    'Br': 35, 'Kr': 36, 'Rb': 37, 'Sr': 38, 'Y': 39, 'Zr': 40, 'Nb': 41, 'Mo': 42, 'Tc': 43, 'Ru': 44, 'Rh': 45, 'Pd': 46, 'Ag': 47, 'Cd': 48, 'In': 49, 'Sn': 50, 'Sb': 51, 'Te': 52, 'I': 53, 'Xe': 54, 'Cs': 55, 'Ba': 56, 'La': 57, 'Ce': 58, 'Pr': 59, 'Nd': 60, 'Pm': 61, 'Sm': 62, 'Eu': 63, 'Gd': 64, 'Tb': 65, 'Dy': 66, 'Ho': 67,
    'Er': 68, 'Tm': 69, 'Yb': 70, 'Lu': 71, 'Hf': 72, 'Ta': 73, 'W': 74, 'Re': 75, 'Os': 76, 'Ir': 77, 'Pt': 78, 'Au': 79, 'Hg': 80, 'Tl': 81, 'Pb': 82, 'Bi': 83, 'Po': 84, 'At': 85, 'Rn': 86, 'Fr': 87, 'Ra': 88, 'Ac': 89, 'Th': 90, 'Pa': 91, 'U': 92, 'Np': 93, 'Pu': 94, 'Am': 95, 'Cm': 96, 'Bk': 97, 'Cf': 98, 'Es': 99, 'Fm': 100,
    'Md': 101, 'No': 102, 'Lr': 103
}
getMassNumber = {
    'H': 1, 'He': 4, 'Li': 7, 'Be': 9, 'B': 11, 'C': 12, 'N': 14, 'O': 16, 'F': 19, 'Ne': 20, 'Na': 23, 'Mg': 24, 'Al': 27, 'Si': 28, 'P': 31, 'S': 32, 'Cl': 35, 'Ar': 40, 'K': 39, 'Ca': 40, 'Sc': 45, 'Ti': 48, 'V': 51, 'Cr': 52, 'Mn': 55, 'Fe': 56, 'Co': 59, 'Ni': 58, 'Cu': 63, 'Zn': 65, 'Ga': 70, 'Ge': 73, 'As': 75, 'Se': 79,
    'Br': 80, 'Kr': 84, 'Rb': 85, 'Sr': 88, 'Y': 89, 'Zr': 91, 'Nb': 92, 'Mo': 95, 'Tc': 98, 'Ru': 101, 'Rh': 102, 'Pd': 106, 'Ag': 107, 'Cd': 114, 'In': 115, 'Sn': 120, 'Sb': 121, 'Te': 128, 'I': 127, 'Xe': 132, 'Cs': 133, 'Ba': 138, 'La': 139, 'Ce': 140, 'Pr': 141, 'Nd': 142, 'Pm': 145, 'Sm': 150, 'Eu': 151, 'Gd': 158, 'Tb': 159,
    'Dy': 162, 'Ho': 165, 'Er': 166, 'Tm': 169, 'Yb': 174, 'Lu': 175, 'Hf': 180, 'Ta': 181, 'W': 184, 'Re': 187, 'Os': 192, 'Ir': 193, 'Pt': 195, 'Au': 197, 'Hg': 202, 'Tl': 205, 'Pb': 208, 'Bi': 209, 'Po': 210, 'At': 210, 'Rn': 211, 'Fr': 223, 'Ra': 226, 'Ac': 227, 'Th': 232, 'Pa': 231, 'U': 238, 'Np': 237, 'Pu': 244, 'Am': 243, 'Cm': 247,
    'Bk': 247, 'Cf': 251, 'Es': 252, 'Fm': 257, 'Md': 258, 'No': 259, 'Lr': 262
};
electronPositions = {
    0 : ['-1.99 0 0','1.99 0 0'],
    1 : ['-2.99 0 0','2.99 0 0','0 2.99 0','0 -2.99 0','-2.22 -1.94 0','-2.22 1.94 0','2.22 -1.94 0','2.22 1.94 0'],
    2 : ['-3.99 0 0','3.99 0 0','0 3.99 0','0 -3.99 0', '-2.69 -2.94 0','-2.69 2.94 0','2.69 -2.94 0','2.69 2.94 0'],
    3 : ['-4.99 0 0','4.99 0 0','0 4.99 0','0 -4.99 0', '-3.16 -3.94 0','-3.16 3.94 0','3.16 -3.94 0','3.16 3.94 0'],
}
OrbitLength = [2,3,4,5]
orbitSize= [2,8,8,8]

const generateEntity = ((model) => {
    atomicNumber = getElectronsNumber[model];
    const scene = document.querySelector('a-scene');
    scale="0.25 0.25 0.25"
    const molecule = document.createElement('a-entity');
    molecule.setAttribute('id', model[0].toLowerCase()+model.slice(1)+'-model');
    molecule.setAttribute('class', 'clickable');
    molecule.setAttribute('animation-mixer', 'loop: repeat');
    molecule.setAttribute('gesture-handler', '');
    molecule.setAttribute('scale', '0.25 0.25 0.25');
    molecule.appendChild(getAtom(model));
    let level =0;
    while (atomicNumber > 0) {
        let remaining = (atomicNumber> orbitSize[level])? orbitSize[level] : atomicNumber;
        molecule.appendChild(getOrbit(level,remaining));atomicNumber-=remaining;level++;
    }

    return molecule;
});

const getAtom = ((model) => {
    const text = document.createElement('a-entity');
    text.object3D.position.set(-0.180, -0.16, 1.25);
    text.setAttribute('text-geometry',"value: "+ model + "; bevelSize: 7.77; bevelThickness: 12.46; curveSegments: 12.76; height: 0.08; size: 0.6; weight: bold");
    text.setAttribute('material',"");
    const atom = document.createElement('a-sphere');
    let radius = 1 + getMassNumber[model]/100;
    atom.setAttribute('radius', radius);
    atom.setAttribute('class', 'atom');
    atom.setAttribute('color', "#1913cf");
    atom.appendChild(text);
    return atom;
});

const getOrbit = ((id, max) => {
    const orbit = document.createElement('a-torus');
    orbit.setAttribute("animation","property: rotation; to: 90 0 180; loop: true; dur: 3000;easing: linear");
    orbit.setAttribute('radius', OrbitLength[id]);
    orbit.setAttribute('arc', 360);
    orbit.setAttribute('radius-tubular', 0.01);
    orbit.setAttribute('material', "color: #ffffff; metalness: 0.01; roughness: 1;");
    orbit.setAttribute('rotation', "90 0 0");
    orbit.setAttribute('scale', "0.98 0.98 0.75");
    for (let i = 0; i < max ; i++) {
        if (id === 0 && i===0 ){
            orbit.appendChild(getElectronsWithAnnotation(electronPositions[id][i]))
        }else {
            orbit.appendChild(getElectron(electronPositions[id][i]));
        }

    }
    return orbit;
});
const getElectron = ((position) => {
    const electron = document.createElement('a-sphere');
    electron.setAttribute('radius', 0.11);
    electron.setAttribute('color', "#a51d2d");
    electron.setAttribute('position', position);
    electron.setAttribute('scale', "1 1 1.22");

    return electron;
});
const getElectronsWithAnnotation  = ((position) => {
    const electron = document.createElement('a-sphere');
    electron.setAttribute('radius', 0.11);
    electron.setAttribute('color', "#a51d2d");
    electron.setAttribute('position', position);
    electron.setAttribute('scale', "1 1 1.22");
    electron.appendChild(getAnnotation());
    return electron;
});

const getAnnotation= (() => {
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
    text.setAttribute('text-geometry',"value: Electron (e -ve ); bevelSize: 7.77; bevelThickness: 12.46; curveSegments: 12.76; height: 0.08; size: 0.4; weight: bold");
    text.setAttribute('material',"color: #f9f06b");
    text.setAttribute('rotation', "0 0 90");
    text.setAttribute('scale', "1 1 0.18");
    text.setAttribute('position', "-1.08582 -2.89689 -0.008");
    triangle.appendChild(text);
    annotation.appendChild(arrow);
    annotation.appendChild(triangle);
    return annotation;
});

const getMixtureModel = ((model1,model2) => {
    const m1= generateEntity(model1)
    const m2= generateEntity(model2)
    m1.setAttribute('position', '4 0 0');
    m2.setAttribute('position', '-4 0 0');
    m1.setAttribute('animation', "property: position; to: 1 0 0;; dur: 2000; easing: linear")
    m2.setAttribute('animation', "property: position; to: -1 0 0;; dur: 2000; easing: linear")
    // Adjust based on Mass number
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
    const model= document.createElement('a-entity')
    model.appendChild(m1)
    model.appendChild(m2)
    return model;
});