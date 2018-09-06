
# Simple Adding
Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num.

For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.

For the test cases, the parameter num will be any number from 1 to 1000.

```
function simpleAdding(num) {

    let total = 0
    for (let i = num; i > 0; i--) {
        total = i + total
    }

    return total;
}

console.log(simpleAdding(4))
```

## Alternate solution

```
function simpleAddingAlt(num) {

    // create an array sequence and add 1 to num because we are starting from zero
    const array = Array.from(Array(num+1).keys())

    //  use a reducer that executes a custom function on each item of the array returning a final single result
    //  total is an accumulator and is remembered across each iteration.
    //  current value is the value of the element being processed

    const reducer = (total, currentValue) => total + currentValue
    return array.reduce(reducer)
}
```