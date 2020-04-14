const request = require('request');
const fs = require('fs');

const axios = require('axios');
const FormData = require('form-data');
const path = require('path');
const fetch = require('node-fetch');

const pathGET = 'generate-data?token=d289b23ec6de126db7aa6ceafb1bf5b5966e2be4';

/*
request(`${hostname}${pathGET}`, (err, res, body) => {
    console.log(body);

    fs.writeFile("./files/answer.json", body, (err) => {
        
        if(err){
            return console.log(err);
        }
        
        console.log('Arquivo criado');
    });

});

fs.readFile('./files/answer.json', 'utf8', (err, data) => {

    const dataJSON = JSON.parse(data);
    const decifrado = decifrar(dataJSON.cifrado, dataJSON.numero_casas);

    dataJSON['decifrado'] = decifrado;

    const resumo = criptografar(decifrado);

    dataJSON['resumo_criptografico'] = resumo;


    fs.writeFile('./files/answer.json', JSON.stringify(dataJSON), err => {

        if (err) {
            return console.log(err);
        }

        console.log('Arquivo alterado e salvo');
    });

});

*/
/*
const pathPOST = '/v1/challenge/dev-ps/submit-solution';

async function enviarDesafio() {

    try {
        const jsonFile = path.resolve(__dirname, '../..', 'files', 'answer.json');
        const formdata = FormData();
        
        formdata.append('answer', fs.createReadStream(jsonFile));

        await axios.post(`${hostname}${pathPOST}`, formdata, {
            headers: formdata.getHeaders(),
            params: {
                token: 'd289b23ec6de126db7aa6ceafb1bf5b5966e2be4',
            },
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));

    } catch (error) {
        console.log('Erro post desafio!');
        console.log(error);
    }

    const jsonFile = path.resolve(__dirname, '..', 'files', 'answer.json');

    const formData = new FormData();
    formData.append('answer', fs.createReadStream(jsonFile));

    const requestConfig = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    axios.post(`${hostname}${pathPOST}`, formData, requestConfig)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));*/

    /*fetch(`${hostname}${pathPOST}`, {
        method: 'post',
        body:    formData,
        headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

}

enviarDesafio();*/
