const a = 'x';
console.log('Start database');

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

class Person {}

// module.exports = add;
module.exports = { add, sub, Person };
// module.exports = Person