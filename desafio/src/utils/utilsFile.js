const fs = require('fs');

const filePath = './files/answer.json';

module.exports = {
    save(content) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, content, (err) => {
                if (err) reject(err);
                
                resolve();
            });
        });
    },

    getContent() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) reject(err);

                resolve(JSON.parse(data));
            });
        });
    }

};