const a = { name: 'Pho', age: 10 };

// const b = a;
const b = { ...a, height: 160, name: 'P Nguyen' }; // spread operator

a.age = 11;
console.log(a);
console.log(b);

const c = { name: 'Khoa', password: '123', age: 10 };

delete c.password;
// c.password = undefined;

console.log(c);
// const d = { name: c.name, age: c.age }
