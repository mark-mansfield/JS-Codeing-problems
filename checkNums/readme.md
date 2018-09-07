# Check Nums
Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

Use the Parameter Testing feature in the box below to test your code with different arguments.

# First Solution
```javascript
 if (num1 > num2) {
      return 'true'
  } else if (num2 > num1) {
      return 'false'
  } else if (num1 === num2 ) {
       return '-1'
  }
  console.log(checkNums(122, 11))
```



## Alternate solution
```javascript
function CheckNums(num1,num2) {

 function checkNumsAlternate(num1, num2) {

    if (num2 === num1) {
        return '-1'
    }
    // We dont need the else if / else structure
    // We can just return the result of the comparison direct
    return (num2 > num1)

}

}
console.log(checkNumsAlternate(122, 11))
```