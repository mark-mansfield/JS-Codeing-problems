function checkNums(num1, num2) {

    if (num2 > num1) {
        return 'true'
    } else if (num2 < num1) {
        return 'false'
    } else if (num1 === num2) {
        return '-1'
    }

}


function checkNumsAlternate(num1, num2) {

    if (num2 === num1) {
        return '-1'
    }
    // We dont need the else if / else structure
    // We can just return the result of the comparison direct
    return (num2 > num1)

}




console.log(checkNums(122, 11))
console.log(checkNumsAlternate(122, 1234))