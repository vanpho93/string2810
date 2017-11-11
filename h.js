console.log(x);
const a = this;
const teo = {
    name: 'teo', 
    age: 18,
    sayHello: function() {
        console.log(this === a);
        // console.log('Xin chao, toi la ' + this.name + ', ' + this.age + ' tuoi.');
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi.`);
    }
}

teo.sayHello();
