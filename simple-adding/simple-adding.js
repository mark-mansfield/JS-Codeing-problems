function simpleAdding(num) {

    let total = 0

    // count down from num to 0 performing addition on each pass through
    for (let i = num; i > 0; i--) {
        total = i + total
    }

    return total;
}

function simpleAddingAlt(num) {

    // create an array sequence and add 1 to num because we are starting from zero
    const array = Array.from(Array(num+1).keys())

    //  use a reducer that executes a custom function on each item of the array returning a final result
    //  total is an accumulator and is remembered across each iteration.
    //  current value is the value of the element being processed

    const reducer = (total, currentValue) => total + currentValue
    return array.reduce(reducer)
}
console.log(simpleAddingAlt(4))