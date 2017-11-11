function add(a, ...params) { // rest parameter
    return params.reduce((a, b) => a + b);
}

console.log(add(4, 5, 6, 1))
