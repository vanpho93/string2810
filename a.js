const arr = [1, 6, 0, 9, 30, 4, 2, 7, 40];

const arrPerson = [
    { name: 'Ti', age: 10, height: 150 },
    { name: 'Teo', age: 15, height: 120 },
    { name: 'Tun', age: 12, height: 130 },
]

// console.log(arr.sort((a, b) => a - b));
// console.log(arrPerson.sort((a, b) => a.age - b.age));
// console.log(arrPerson.sort((a, b) => a.height - b.height));
// console.log(arr.reduce((a, b) => a + b))
// console.log(arrPerson.reduce((a, b) => a.age + b.age))
console.log(arrPerson.map(e => e.age).reduce((a, b) => a + b))
