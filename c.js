const teo = {
    name: 'teo', 
    age: 18,
    sayHello: function() {
        // console.log('Xin chao, toi la ' + this.name + ', ' + this.age + ' tuoi.');
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi.`);
    }
}

teo.sayHello();
const { name, age } = teo;
console.log(name, age);
