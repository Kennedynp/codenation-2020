const utilsFile = require('../utils/utilsFile');
const utilsCryptography = require('../utils/utilsCryptography');

module.exports = {
    async process(request, response) {

        const dataJSON = await utilsFile.getContent();

        const deciphered = utilsCryptography.decipher(dataJSON.cifrado, dataJSON.numero_casas);
        
        dataJSON['decifrado'] = deciphered;
    
        const resume = utilsCryptography.encrypt(deciphered);
    
        dataJSON['resumo_criptografico'] = resume;

        const newContent = JSON.stringify(dataJSON);

        await utilsFile.save(newContent);

        return response.json(dataJSON);
    }
};