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