const arr = [1, 6, 0, 9, 30, 4, 2, 7, 40];

const arrPerson = [
    { name: 'Ti', age: 10, height: 150 },
    { name: 'Teo', age: 15, height: 120 },
    { name: 'Tun', age: 12, height: 130 },
];

console.log(arrPerson.some(e => e.age > 19))
console.log(arrPerson.some(e => e.age > 14))
