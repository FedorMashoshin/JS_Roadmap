class Person {
    name: string;
    age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hello there my name is " + this.name);
    }
}

const john = new Person("John", 30);
const bob = new Person("Bob", 25);

john.sayHello();
bob.sayHello();