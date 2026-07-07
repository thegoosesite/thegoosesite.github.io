// Constants
const key = 5
const range = 26
const aCode = 65
const zCode = aCode + range
export function tokenReader(acceptedToken){
    let NewAcceptedToken = acceptedToken.toUpperCase();
    for (let i = 0; i < message.length; i++){
        let letter = message.charCodeAt(i);
        let newLetter = letter;
        if (letter >= aCode && letter <= zCode){
            newLetter += key;
            if (newLetter  >= zCode){
                newLetter -= range;
            }
        
        }
    }
    newLetter = String.fromCharCode(newLetter);
};