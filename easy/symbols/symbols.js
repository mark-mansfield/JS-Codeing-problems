function simpleSymbols(str) {

    //  this is an array and string based approach
    //  the solution does simple edge case test on the string

    // edge case
    if (!str.match(/[a-z]/i)) {
        console.log('no letters found')
        return false
    }

    // the solution uses an array to test teh remaining edge cases
    const array = str.split('')
    // edge case
    if (!array) {
        console.log('empty string')
        return false
    }

    // regex without global flag because we use it on a string of just one character
    const regex = /[a-z]/


    // edge case
    if (array[0] === ' ' || array[0] !== '+' || array[array.length - 1] !== '+') {
        return false
    }

    //  loop though array
    for (let i = 0; i < array.length - 1; i++) {
        //  use match() with our regex patter to check if the current item is a character
        if (array[i].match(regex)) {
            //  if we have a character we need to look back one step and foward one step
            //  I chose here to use an array so i could easily use the array index notation
            if (array[i - 1] !== '+' || array[i + 1] !== '+') {
                return false
            }
        }
    }

    return true;

}

function refactoredSimpleSymbols(str) {

    // this is a string based approach
    if (!str.match(/[a-z]/i) || str.length === 0 || str === ' ') {
        return false
    }

    if (str.charAt(0) !== '+' || str.charAt(str.length-1) !== '+') {
        return false
    }

    //  we need a counter
    let index = 0
    for(let char of str){
        //  character check
        if (char.match(/[a-z]/)) {
            // I chose  chartAt() with an counter  to get values from the string
            if (str.charAt(index - 1) !== '+' || str.charAt(index + 1) !== '+') {
                return false
            }
        }
        // otherwise our checks will always check the first item of the string
        index ++
    }
    return true;
}


console.log(simpleSymbols('+d+=3=+s+'))
console.log(refactoredSimpleSymbols('+d+=3=+s+'))