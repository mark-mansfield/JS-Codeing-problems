

function alphabetSoupAlt(str) {

    // make a sortable object
    const array = str.split('')
    // sort it , turn back to a string, retunr all of that.
    return array.sort().join('')

}

function alphabetSoup(str) {
    const array = str.split('')

    // an object to contain the sorted results
    const sorted = []

    // itertaive approach - longhand
    for( let i = 1; i < array.length-1; i++){

        //  comapares current element with the previous
        //  compares the strings by lexographical order
        if (array[i] > array[i-1]){
            sorted.push(array[i])
        } else if (array[i-1]> array[i]) {
            sorted.push(array[i-1])
        }

    }
    return array.sort().join('')

}
console.log(alphabetSoup('gfedcba'))
console.log(alphabetSoupAlt('gfedcba'))

