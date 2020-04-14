const axios = require('axios');
const utilsFile = require('../utils/utilsFile');

const baseURL = 'https://api.codenation.dev/v1/challenge/dev-ps';

module.exports = {
    async process(request, response) {
        
        await axios.get(`${baseURL}/generate-data`, {
            params: {
                token: 'd289b23ec6de126db7aa6ceafb1bf5b5966e2be4'
            }
        }).then(async responseData => {
            const content = JSON.stringify(responseData.data);

            await utilsFile.save(content);

            return response.json(responseData.data);
        }).catch(err => {
            console.log('Error: ', err);

            return response.status(400).json({ error: err});
        });
    }
};