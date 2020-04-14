const crypto = require('crypto');

module.exports = {
    decipher(encrypted, number) {
        let deciphered = '';
    
        for (let i = 0; i < encrypted.length; i++) {
            const code = encrypted.charCodeAt(i);            
            let letter = '';
    
            if (code >= 97 && code <= 122) {
    
                if (code - number < 97) {
                    letter = String.fromCharCode(code - number + 122 - 97 + 1);
                } else {
                    letter = String.fromCharCode(code - number);
                }
    
            } else {
                letter = encrypted[i];
            }
    
            deciphered += letter;
        }
    
        return deciphered;
    },

    encrypt(deciphered) {
        const hash = crypto.createHash('sha1');
    
        hash.update(deciphered);
    
        return hash.digest('hex');
    }
};