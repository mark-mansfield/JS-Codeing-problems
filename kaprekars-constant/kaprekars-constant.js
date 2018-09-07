function KaprekarsConstant(num) {

    let numString = num.toString()
    if (num < 9) {
        //  add three 0's
        numString = '000' + numString
        console.log(numString)

    } else if (num > 9 && num < 100) {
        // add two 0's
        numString = '00' + numString
    } else if (num > 99 && num < 1000) {
        // add one zero
        numString = '0' + numString

    }
    // convert 4 digit number string into and array of string numbers
    let array = numString.split('')

    // set the end case
    let subtractedTotal = 0

    // we need to return this
    counter = 0

    while (subtractedTotal !== 6174) {
        const descending = Number.parseInt([...array]
            .sort((a, b) => {
                return b - a
            })
            .join(''))
        const ascending = Number.parseInt([...array]
            .sort((a, b) => {
                return a - b
            })
            .join(''))

        //?  which is bigger subtract smallest from largest
        //  expecting 3087 from input 3452
        descending > ascending ? subtractedTotal = descending - ascending : subtractedTotal = ascending - descending

        // turn it back into a string and pop it into the array for the next iteration of the squence
        array = subtractedTotal.toString().split('')
        counter++
    }
    return counter
}

function kaprekarsConstantRefactored(num) {

    // set the end case
    let subtractedTotal = 0

    // we need to return this
    counter = 0

    const numString = buildFourDigitString(num)

    // convert 4 digit number string into and array of string numbers
    let array = numString.split('')

    while (subtractedTotal !== 6174) {
        const descending = sortOrder('b-a', array)
        const ascending = sortOrder('a-b', array)
        descending > ascending ? subtractedTotal = descending - ascending :
        subtractedTotal = ascending - descending
        array = subtractedTotal.toString().split('')
        counter++
    }
    return counter
}

const sortOrder = (exp,array) => {
    return Number.parseInt([...array]
        .sort((a, b) => {
            return eval(exp)
        })
        .join(''))
}



// I prefer this way of solving the 4 digit string over the following solution
const buildFourDigitString = (num) => {
    let numString = num.toString()
    num < 9 ? numString = '000' + numString :
        num > 9 && num < 100 ?
        numString = '00' + numString :
        num > 100 && num < 1000 ?
        numString = '0' + numString :
        numString = numString
    return numString
}

//  alternate way of building four digit string i dont lioke it because it is harder to follow,
// and uses more variables, but shows a little more of my understanding about String.prototype properties

// const buildFourDigitString = (num) => {
//     let digit = '0'
//     let numString = num.toString()
//     let zerosCount = 4 - numString.split('').length
//     let fourDigits = ''
//     zerosCount > 0 ?
//         fourDigits = digit.repeat(zerosCount) + numString:
//         fourDigits = numString
//     return fourDigits
// }

console.log(`This routine ran ${KaprekarsConstant(456)} times before it ended `)
console.log(`This routine ran ${kaprekarsConstantRefactored(456)} times before it ended `)