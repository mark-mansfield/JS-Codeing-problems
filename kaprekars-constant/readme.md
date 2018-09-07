# Kaprekars Constant

Using the JavaScript language, have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits.

Your program should perform the following routine on the number:

Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number)

and subtract the smaller number from the bigger number

Then repeat the previous step.

Your program should return the number of times this routine must be performed until 6174 is reached.


For example: if num is 3524 your program should return 3 because of the following steps:
(1) 5432 - 2345 = 3087,
(2) 8730 - 0378 = 8352,
(3) 8532 - 2358 = 6174.


# First solution

```javascript
function KaprekarsConstant(num) {

    let numString = num.toString()
    // fill out 4 digit number as a string
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

console.log(`This routine ran ${KaprekarsConstant(3524)} times before it ended `)
```

## Alternate solution
Broken out into functions
this uses a nested ternary opraetor comparison to build the 4 digit string number

```javascript
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
```



```javascript
// alternate way of building four digit string i dont lioke it because it is harder to follow,
// and uses more variables, but shows a little more of my understanding about  String.prototype properties

const buildFourDigitString = (num) => {
    let digit = '0'
    let numString = num.toString()
    let zerosCount = 4 - numString.split('').length
    let fourDigits = ''
    zerosCount > 0 ?
        fourDigits = digit.repeat(zerosCount) + numString:
        fourDigits = numString
    return fourDigits
}
```