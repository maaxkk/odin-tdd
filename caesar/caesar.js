
const punct = ['(', ')', '!', '?', '#', '.', ',', ';', ':', '-']
function caesarCipher(str, shift){
    let finalString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[^A-Za-z]/)) {
            finalString += str[i]
        } else {
            let address = str[i].charCodeAt(0)
            if (65 <= address && address <= 90 && address+shift > 90){
                address = address - 26
            }
            if (97 <= address && address <= 122 && address+shift > 122){
                address = address - 26
            }
            finalString += String.fromCharCode(address + shift)
        }
    }
    return finalString
}

module.exports = caesarCipher