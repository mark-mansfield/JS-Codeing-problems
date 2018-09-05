function simpleAdding(num) {

    let total = 0
    for (let i = num; i > 0; i--) {
        total = i + total
    }

    return total;
}

console.log(simpleAdding(4))