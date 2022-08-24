
let availableModels = ['HO','HCl','SO','FeS','NaCl','TiO','SiO','MgO','KCl','CaCl','NaOH','MgCl','HS'];
let loadedModels= [];
const getAvailable = ((m1,m2) => {
    for (let available of availableModels ){
        if(available === (m1 + m2) || available === (m2 + m1)){
            return available;
        }
    }
});


const getModel = (name) => {
    switch (name) {
        case 'HO':return Compound.from_name('H','H','O')
        case 'HCl': return   Compound.from_name('H','Cl')
        case 'SO':  return Compound.from_name('O','O')
        case 'FeS': return Compound.from_name('Fe','S')
        case 'NaCl':return  Compound.from_name('Na','Cl')
        case 'TiO': return Compound.from_name('O','O')
        case 'SiO': return Compound.from_name('O','O')
        case 'MgO': return  Compound.from_name('Mg','O')
        case 'KCl': return  Compound.from_name('K','Cl')
        case 'CaCl':return  Compound.from_name('Ca','Cl')
        case 'NaOH':return  Compound.from_name('Na','OH')
        case 'MgCl':return  Compound.from_name('Cl','Cl')
        case 'HS':  return Compound.from_name('S','S')
    }
}