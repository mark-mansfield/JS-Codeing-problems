function LetterChanges(str) {

    // code goes here
    let changedString = ''

    // replace every letter with next one in the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    const vowels = ['a','e', 'i', 'o','u']
    for (let character of str) {
        if (character === ' ') {
            changedString += ' '
        }
        else if (!character.match(/[a-z]/i)) {
            changedString += character
        } else if (character.match(/[1-9]/i)) {
            changedString += character
        }  else {
            let index = alphabet.findIndex(char => char === character)
            vowels.findIndex(char => char === alphabet[index+1]) > -1 ?
            changedString += alphabet[index+1].toUpperCase() :
            changedString += alphabet[index+1]
        }

    }
    return changedString
}


// inputs  : 'Hi my name is mark'
// outputs : 'Ij nz Obnf nbsl'
console.log(LetterChanges('Hi my name is mark!6 @ > ~ -={}[]~~~~~&****+'))