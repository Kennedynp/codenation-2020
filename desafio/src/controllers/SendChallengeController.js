const axios = require('axios');
const FormData = require('form-data');
const path = require('path');
const fs = require('fs');

const baseURL = 'https://api.codenation.dev/v1/challenge/dev-ps';

module.exports = {
    async process(request, response) {
        
        try {
            const jsonFile = path.resolve(__dirname, '../..', 'files', 'answer.json');
            const formdata = FormData();
            
            formdata.append('answer', fs.createReadStream(jsonFile));
    
            const responseSubmit = await axios.post(`${baseURL}/submit-solution`, formdata, {
                headers: formdata.getHeaders(),
                params: {
                    token: 'd289b23ec6de126db7aa6ceafb1bf5b5966e2be4'
                },
            });

            return response.json(responseSubmit.data);
                
        } catch (error) {
            return response.status(400).json({error: error});
        }
    }
};