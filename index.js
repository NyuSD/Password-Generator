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
 * Function to take string of lowercase letters and change some to uppercase at random
 */
function randomUpperCase(password) {
    let newPassword = '';
    for (let i = 0; i < password.length; i++) {
        if (Math.random() < 0.5) {
            newPassword += password[i].toUpperCase();
        } else {
            newPassword += password[i];
        }
    }
    return newPassword;
}

/**
 * Parse the command line arguments
 */

function handleArgs(args) {
    let upperCase = false;
    for (let i = 0; i < args.length; i++) {
       switch (args[i]) {
           case '--length':
                if (i + 1 < args.length && !isNaN(args[i + 1])) {
                    passwordLength = parseInt(args[i + 1]);
                    i++; 
                } else {
                    console.error(`Error: Invalid value for --length. Please provide a number.`);
                    printHelp();
                    process.exit(1);
                }
                break;
            case '--upper':
                upperCase = true;
                break;           
           case '--help':
               printHelp();
               break;
           default:
               console.error(`Unknown argument: ${args[i]}`);
               printHelp();
               process.exit(1);
            }
       }
    let password = generatePassword();
    if (upperCase) {
        password = randomUpperCase(password);
    }
    console.log(password);
}
    


/**
 * Help message
 */

function printHelp() {
    console.log(`
Usage: QAP1 [options]

Options:
  --length [number]        Set the number of characters for the password (default: 8)
  --help                   Show this help message
  --upper                  Include uppercase letters in the password

Example:
    QAP1 --Length 12
  `);
}

handleArgs(args);