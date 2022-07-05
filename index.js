let loadedModels= [];
const getAvailable = ((m1,m2) => {
    for (let available of availableModels ){
        if(available === (m1 + m2) || available === (m2 + m1)){
            return available;
        }
    }
});
let availableModels = ['HO','HCl','SO','FeS','NaCl','TiO','SiO','MgO','KCl','CaCl','NaOH','MgCl','HS'];

const getModel = (model) => {
    switch (model) {
      case 'HO':return getTripleModel('H','H','O')
      case 'HCl': return   getMixtureModel('H','Cl')
      case 'SO':  return getTripleModel('O','O','S')
      case 'FeS': return getMixtureModel('Fe','S')
      case 'NaCl':return  getMixtureModel('Na','Cl')
      case 'TiO': return getTripleModel('O','O','Ti')
      case 'SiO': return getTripleModel('O','O','Si')
      case 'MgO': return  getMixtureModel('Mg','O')
      case 'KCl': return  getMixtureModel('K','Cl')
      case 'CaCl':return  getMixtureModel('Ca','Cl')
      case 'NaOH':return  getMixtureModel('Na','OH')
      case 'MgCl':return  getTripleModel('Cl','Cl','Mg')
      case 'HS':  return getTripleModel('S','S','H')
    }
}

getElectronsNumber = {
    'H': 1, 'He': 2, 'Li': 3, 'Be': 4, 'B': 5, 'C': 6, 'N': 7, 'O': 8, 'F': 9, 'Ne': 10, 'Na': 11, 'Mg': 12, 'Al': 13, 'Si': 14, 'P': 15, 'S': 16, 'Cl': 17, 'Ar': 18, 'K': 19, 'Ca': 20, 'Sc': 21, 'Ti': 22, 'V': 23, 'Cr': 24, 'Mn': 25, 'Fe': 26, 'Co': 27, 'Ni': 28, 'Cu': 29, 'Zn': 30, 'Ga': 31, 'Ge': 32, 'As': 33, 'Se': 34,
    'Br': 35, 'Kr': 36, 'Rb': 37, 'Sr': 38, 'Y': 39, 'Zr': 40, 'Nb': 41, 'Mo': 42, 'Tc': 43, 'Ru': 44, 'Rh': 45, 'Pd': 46, 'Ag': 47, 'Cd': 48, 'In': 49, 'Sn': 50, 'Sb': 51, 'Te': 52, 'I': 53, 'Xe': 54, 'Cs': 55, 'Ba': 56, 'La': 57, 'Ce': 58, 'Pr': 59, 'Nd': 60, 'Pm': 61, 'Sm': 62, 'Eu': 63, 'Gd': 64, 'Tb': 65, 'Dy': 66, 'Ho': 67,
    'Er': 68, 'Tm': 69, 'Yb': 70, 'Lu': 71, 'Hf': 72, 'Ta': 73, 'W': 74, 'Re': 75, 'Os': 76, 'Ir': 77, 'Pt': 78, 'Au': 79, 'Hg': 80, 'Tl': 81, 'Pb': 82, 'Bi': 83, 'Po': 84, 'At': 85, 'Rn': 86, 'Fr': 87, 'Ra': 88, 'Ac': 89, 'Th': 90, 'Pa': 91, 'U': 92, 'Np': 93, 'Pu': 94, 'Am': 95, 'Cm': 96, 'Bk': 97, 'Cf': 98, 'Es': 99, 'Fm': 100,
    'Md': 101, 'No': 102, 'Lr': 103, 'Rf': 104, 'Db': 105, 'Sg': 106, 'Bh': 107, 'Hs': 108, 'Mt': 109, 'Ds': 110, 'Rg': 111, 'Cn': 112, 'Nh': 113, 'Fl': 114, 'Mc': 115, 'Lv': 116, 'Ts': 117, 'Og': 118
}
getElectronDistribution = {
    'H': [1], 'He':[2], 'Li':[2,1], 'Be': [2,2], 'B': [2,3], 'C': [2,4], 'N': [2,5], 'O': [2,6], 'F': [2,7], 'Ne': [2,8], 'Na': [2,8,1], 'Mg': [2,8,2], 'Al': [2,8,3], 'Si': [2,8,4], 'P': [2,8,5], 'S': [2,8,6], 'Cl': [2,8,7], 'Ar': [2,8,8], 'K': [2,8,8,1], 'Ca': [2,8,8,2], 'Sc': [2,8,9,2], 'Ti': [2,8,10,2], 'V': [2,8,11,2], 'Cr': [2,8,13,1],
    'Mn': [2,8,13,2], 'Fe': [2,8,14,2], 'Co': [2,8,15,2], 'Ni': [2,8,16,2], 'Cu': [2,8,18,1], 'Zn': [2,8,18,2], 'Ga': [2,8,18,3], 'Ge': [2,8,18,4], 'As': [2,8,18,5], 'Se': [2,8,18,6],'Br': [2,8,18,7], 'Kr': [2,8,18,8], 'Rb': [2,8,18,8,1], 'Sr': [2,8,18,8,2], 'Y': [2,8,18,9,2], 'Zr': [2,8,18,10,2], 'Nb': [2,8,18,12,1], 'Mo': [2,8,18,13,1],
    'Tc': [2,8,18,13,2], 'Ru': [2,8,18,15,1], 'Rh': [2,8,18,16,2], 'Pd': [2,8,18,18], 'Ag': [2,8,18,18,1], 'Cd': [2,8,18,18,2], 'In': [2,8,18,18,3], 'Sn': [2,8,18,18,4], 'Sb': [2,8,18,18,5], 'Te': [2,8,18,18,6], 'I': [2,8,18,18,7], 'Xe': [2,8,18,18,8], 'Cs': [2,8,18,18,8,1], 'Ba': [2,8,18,18,8,2], 'La': [2,8,18,18,9,2], 'Ce': [2,8,18,19,9,2],
    'Pr': [2,8,18,21,8,2], 'Nd': [2,8,18,22,8,2], 'Pm': [2,8,18,23,8,2], 'Sm': [2,8,18,24,8,2], 'Eu': [2,8,18,25,8,2], 'Gd': [2,8,18,25,9,2], 'Tb': [2,8,18,27,8,2], 'Dy': [2,8,18,28,8,2], 'Ho': [2,8,18,29,8,2], 'Er': [2,8,18,30,8,2], 'Tm': [2,8,18,31,8,2], 'Yb': [2,8,18,32,8,2], 'Lu': [2,8,18,32,9,2], 'Hf': [2,8,18,32,10,2], 'Ta': [2,8,18,32,11,2], 'W': [2,8,18,32,12,2],
    'Re': [2,8,18,32,13,2], 'Os': [2,8,18,32,14,2], 'Ir': [2,8,18,32,15,2], 'Pt': [2,8,18,32,17,1], 'Au': [2,8,18,32,18,1], 'Hg': [2,8,18,32,18,2], 'Tl': [2,8,18,32,18,3],
    'Pb': [2,8,18,32,18,4], 'Bi': [2,8,18,32,18,5], 'Po': [2,8,18,32,18,6], 'At': [2,8,18,32,18,7], 'Rn': [2,8,18,32,18,8], 'Fr': [2,8,18,32,18,8,1], 'Ra': [2,8,18,32,18,8,2], 'Ac': [2,8,18,32,18,9,2], 'Th': [2,8,18,32,18,10,2], 'Pa': [2,8,18,32,20,9,2], 'U': [2,8,18,32,21,9,2], 'Np': [2,8,18,32,22,9,2], 'Pu': [2,8,18,32,23,9,2],
    'Am': [2,8,18,32,24,9,2], 'Cm': [2,8,18,32,25,9,2], 'Bk': [2,8,18,32,27,8,2], 'Cf': [2,8,18,32,28,8,2], 'Es': [2,8,18,32,29,8,2], 'Fm': [2,8,18,32,30,8,2], 'Md': [2,8,18,32,31,8,2], 'No': [2,8,18,32,32,8,2], 'Lr': [2,8,18,32,32,8,3], 'Rf': [2,8,18,32,32,10,2], 'Db': [2,8,18,32,32,11,2], 'Sg': [2,8,18,32,32,12,2], 'Bh': [2,8,18,32,32,13,2],
    'Hs': [2,8,18,32,32,14,2], 'Mt': [2,8,18,32,32,15,2], 'Ds': [2,8,18,32,32,16,2], 'Rg': [2,8,18,32,32,17,2], 'Cn': [2,8,18,32,32,18,2], 'Nh': [2,8,18,32,32,18,3], 'Fl': [2,8,18,32,32,18,4], 'Mc': [2,8,18,32,32,18,5], 'Lv': [2,8,18,32,32,18,6], 'Ts': [2,8,18,32,32,18,7], 'Og': [2,8,18,32,32,18,8]}


getMassNumber = {
    'H': 1, 'He': 4, 'Li': 7, 'Be': 9, 'B': 11, 'C': 12, 'N': 14, 'O': 16, 'F': 19, 'Ne': 20, 'Na': 23, 'Mg': 24, 'Al': 27, 'Si': 28, 'P': 31, 'S': 32, 'Cl': 35, 'Ar': 40, 'K': 39, 'Ca': 40, 'Sc': 45, 'Ti': 48, 'V': 51, 'Cr': 52, 'Mn': 55, 'Fe': 56, 'Co': 59, 'Ni': 58, 'Cu': 63, 'Zn': 65, 'Ga': 70, 'Ge': 73, 'As': 75, 'Se': 79,
    'Br': 80, 'Kr': 84, 'Rb': 85, 'Sr': 88, 'Y': 89, 'Zr': 91, 'Nb': 92, 'Mo': 95, 'Tc': 98, 'Ru': 101, 'Rh': 102, 'Pd': 106, 'Ag': 107, 'Cd': 114, 'In': 115, 'Sn': 120, 'Sb': 121, 'Te': 128, 'I': 127, 'Xe': 132, 'Cs': 133, 'Ba': 138, 'La': 139, 'Ce': 140, 'Pr': 141, 'Nd': 142, 'Pm': 145, 'Sm': 150, 'Eu': 151, 'Gd': 158, 'Tb': 159,
    'Dy': 162, 'Ho': 165, 'Er': 166, 'Tm': 169, 'Yb': 174, 'Lu': 175, 'Hf': 180, 'Ta': 181, 'W': 184, 'Re': 187, 'Os': 192, 'Ir': 193, 'Pt': 195, 'Au': 197, 'Hg': 202, 'Tl': 205, 'Pb': 208, 'Bi': 209, 'Po': 210, 'At': 210, 'Rn': 211, 'Fr': 223, 'Ra': 226, 'Ac': 227, 'Th': 232, 'Pa': 231, 'U': 238, 'Np': 237, 'Pu': 244, 'Am': 243, 'Cm': 247,
    'Bk': 247, 'Cf': 251, 'Es': 252, 'Fm': 257, 'Md': 258, 'No': 259, 'Lr': 262, 'Rf': 261, 'Db': 262, 'Sg': 266, 'Bh': 264, 'Hs': 269, 'Mt': 268, 'Ds': 271, 'Rg': 272, 'Cn': 285, 'Nh': 284, 'Fl': 289, 'Mc': 288, 'Lv': 293, 'Ts': 294, 'Og': 294
};
electronPositions = {
    0: ['-1.99 0 0', '1.99 0 0'],
    1: ['-2.99 0 0', '2.99 0 0', '0 2.99 0', '0 -2.99 0', '-2.22 -1.94 0', '-2.22 1.94 0', '2.22 -1.94 0', '2.22 1.94 0'],
    2: ['-3.99 0 0', '3.99 0 0', '0 3.99 0', '0 -3.99 0', '-2.69 -2.94 0', '-2.69 2.94 0', '2.69 -2.94 0', '2.69 2.94 0', '3.619 -1.54 0', '3.619 1.54 0', '-3.619 -1.54 0', '-3.619 1.54 0', '-1.417 -3.74 0', '3.245 2.345 0', '-3.25 -2.38 0', '1.714 -3.60 0', '-1.416 3.703 0', '1.416 3.703 0', '-1.416 -3.703 0'],
    3: ['-4.99 0 0', '4.99 0 0', '0 4.99 0', '0 -4.99 0', '-4.056 -2.97 0', '-3.329 3.728 0', '3.63 -3.531 0', '2.793 4.08 0', '4.436 -2.27 0', '4.376 2.468 0', '-4.767 -1.64 0', '-4.4 2.195 0', '-1.907 -4.62 0', '3.626 3.406 0', '-3.188 -3.86 0', '1.774 -4.60 0', '-1.416 4.703 0', '1.416 4.703 0', '-1.416 -4.703 0'],
    4: ['-5.99 0 0', '5.99 0 0', '0 5.99 0', '0 -5.99 0', '-4.396 -4.09 0', '-4.106 4.404 0', '4.278 -4.16 0', '4.245 4.24 0', '5.183 -2.97 0', '5.647 2.045 0', '-5.083 -3.21 0', '-5.677 2.078 0', '-2.903 -5.23 0', '2.998 5.215 0', '2.997 -5.17 0', '1.834 -5.73 0', '-1.5 5.803 0', '1.504 5.792 0'],
    5: ['-6.99 0 0', '6.99 0 0', '0 6.99 0', '0 -6.99 0', '-5.418 -4.44 0', '-5.415 4.499 0', '5.347 -4.48 0', '5.352 4.544 0', '-6.208 -3.05 0', '4.245 5.345 0', '-4.25 -5.38 0', '1.714 -6.60 0', '-1.416 6.703 0', '1.416 6.703 0', '-1.416 -6.703 0'],
    6: ['-7.99 0 0', '7.99 0 0', '0 7.99 0', '0 -7.99 0', '-6.101 -5.21 0', '-6.361 4.863 0', '6.230 -5.0 0', '6.262 4.97 0', '-5.417 -7.74 0', '5.245 6.345 0', '-5.25 -6.38 0', '1.714 -7.60 0', '-1.416 7.703 0', '1.416 7.703 0', '-1.416 -7.703 0'],
}
OrbitLength = [2,3,4,5,6,7,8]
orbitSize= [2,8,8,8]

const generateEntity = ((model) => {
    atomicNumber = getElectronsNumber[model];
    let EnergyShells = getElectronDistribution[model];
    const molecule = document.createElement('a-entity');
    molecule.setAttribute('id', model+'-model');
    molecule.setAttribute('class', 'clickable');
    molecule.setAttribute('animation-mixer', 'loop: repeat');
    molecule.setAttribute('gesture-handler', '');
    molecule.setAttribute('scale', '0.14 0.14 0.14');
    molecule.appendChild(getAtom(model));
    let level =0;
    for (let i = 0; i < EnergyShells.length; i++) {
        molecule.appendChild(getOrbit(i,EnergyShells[i]));
        level++;
    }
    // while (atomicNumber > 0) {
    //     let remaining = (atomicNumber> orbitSize[level])? orbitSize[level] : atomicNumber;
    //     molecule.appendChild(getOrbit(level,remaining));atomicNumber-=remaining;level++;
    // }

    return molecule;
});

const getAtom = ((model) => {
    const text = document.createElement('a-entity');
    text.object3D.position.set(-0.180, -0.16, 1.4);
    text.setAttribute('text-geometry',"value: "+ model + "; bevelSize: 7.77; bevelThickness: 12.46; curveSegments: 12.76; height: 0.08; size: 0.8; weight: bold");
    text.setAttribute('material',"");
    const atom = document.createElement('a-sphere');
    let radius = 1 ;
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
    m1.setAttribute('position', '7 0 0');
    m2.setAttribute('position', '-7 0 0');
    m1.setAttribute('scale', '0.6 0.6 0.6');
    m2.setAttribute('scale', '0.6 0.6 0.6');
    m1.setAttribute('animation', "property: position; to: 3 0 0;; dur: 2000; easing: linear")
    m2.setAttribute('animation', "property: position; to: -2 0 0;; dur: 2000; easing: linear")
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

const getTripleModel = ((model1,model2,model3) => {
    const model=getMixtureModel(model1,model2);
    model.children[0].setAttribute('position', '10 0 0');
    model.children[1].setAttribute('position', '-10 0 0');
    model.children[0].setAttribute('animation', "property: position; to: 3 0 0;; dur: 2000; easing: linear");
    model.children[1].setAttribute('animation', "property: position; to: -3 0 0;; dur: 2000; easing: linear");
    model.children[0].querySelector('.atom').setAttribute('animation', "property: position; to:-2 0 0; dur: 6000; easing: easeInExpo");
    model.children[1].querySelector('.atom').setAttribute('animation', "property: position; to:2 0 0; dur: 6000; easing: easeInExpo");
    const m3= generateEntity(model3)
    m3.querySelector('.atom').appendChild(getBondModel("2 0 0"));
    m3.querySelector('.atom').appendChild(getBondModel("-2 0 0"));
    m3.setAttribute('position', '0 0 0');
    m3.setAttribute('scale', '0.6 0.6 0.6');
    m3.setAttribute('animation', "property: position; to: 0 0 0;; dur: 2000; easing: linear")
    m3.querySelector('.atom').setAttribute('animation', "property: position; to:0 0 0; dur: 6000; easing: easeInExpo")
    m3.querySelectorAll('a-torus').forEach(function(e){
        e.setAttribute('animation', "property: rotation; to: 90 0 180; loop: true; dur: 5000; easing: linear")
        e.setAttribute('animation__2', "property: visible; from: true; to: false; dur: 9999999999999999991")
    }
    )
    model.appendChild(m3)
    return model;
});

const getBondModel = ((position) => {
    const bond = document.createElement('a-cylinder');
    bond.setAttribute('material', "color:  #1a5fb4");
    bond.setAttribute('geometry', "height: 2.0; radius: 0.15")
    bond.setAttribute('rotation', '0 0 90');
    bond.setAttribute('animation', "property: position; to:"+ position+" ; dur: 8000; easing: easeInExpo")
    return bond;
})
const getNoReactionModel = () => {
    const text = document.createElement('a-entity');
    text.setAttribute('id', 'noReaction');
    text.object3D.position.set(-0.8, 1.600, 1.4);
    text.setAttribute('text-geometry',"value: No Reaction ; bevelSize: 7.77; bevelThickness: 12.46; curveSegments: 12.76; height: 0.08; size: 0.2; weight: bold");
    text.setAttribute('material',"");
    text.setAttribute('rotation', '-90 0 0');
    return text;
}