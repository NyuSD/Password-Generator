const process = require('process');
const args = process.argv.slice(2);

const passwordLength = 8
/**
 * Generates a random password of lower case letters only
 */
function generatePassword() {
    const avaliableChars = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * avaliableChars.length);
        password += avaliableChars[randomIndex];
    }
    return password;
}

console.log (generatePassword());