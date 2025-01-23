const process = require('process');
const args = process.argv.slice(2);

let passwordLength = 8;
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


/**
 * Parse the command line arguments
 */

function handleArgs(args) {
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--Length') {
            passwordLength = parseInt(args[i + 1]);
            i++;
        } else {
            printHelp();
            process.exit(1);
        }
    }
    console.log(generatePassword());
}
    


/**
 * Help message
 */

function printHelp() {
    console.log(`
Usage: QAP1 [options]

Options:
  --Length [number]        Set the number of characters for the password (default: 8)

Example:
    QAP1 --Length 12
  `);
}

handleArgs(args);