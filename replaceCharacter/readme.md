# Replace Chars

Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.

Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).

Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.


Sample Test Cases
Input:"hello*3"

Output:"Ifmmp*3"


Input:"fun times!"

Output:"gvO Ujnft!"

## First Solution

```javascript
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
```