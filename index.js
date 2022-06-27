let loadedModels= new Set();
const avaliableModels = ((model) => {
    if (model === 'clna'||model === 'nacl') {
        return 'nacl';
    }else
        return null;
});
