class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hello there my name is " + this.name);
    }
}

class Employee extends Person {
    jobTitle: string;

    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    sayMyJob() {
        super.sayHello();
        console.log("Hello there my name is " + this.name + " and I work as a " + this.jobTitle);
    }

}

const john = new Employee("John", 30, "Software Engineer");

john.sayMyJob();
// Hello there my name is John
// Hello there my name is John and I work as a Software Engineer