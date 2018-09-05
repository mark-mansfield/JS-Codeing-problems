# Letter Capitalize
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.

Words will be separated by only one space.

Input:"hello world"

Output:"Hello World"

```
function LetterCapitalize(str) {

    const arr = str.split('')
    let capitalisedWords = arr[0].toUpperCase()


    for (let i = 1; i < arr.length; i++) {

        if (arr[i-1] === ' '){
            let char = arr[i].toUpperCase()
            capitalisedWords += char
        } else {
            capitalisedWords += arr[i]
        }

    }
    // code goes here
    return capitalisedWords;

}

console.log(LetterCapitalize('hello you big blue world !!!'))


```
