function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John", 30);
const bob = new Person("Bob", 25);

john.sayHello();
bob.sayHello();

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

console.log(Person.prototype.isPrototypeOf(john)); // true

console.log(Object.getPrototypeOf(john) === Person.prototype); // true