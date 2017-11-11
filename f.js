const arr = [1, 6, 0, 9];

// const arr2 = { ...arr };
const arr2 = [1, ...arr, 10];

arr.push(100);
console.log(arr);
console.log(arr2);
