class Person {
    name: string;
    age: number;
    city: string = '';
    job: string = '';

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setCity(city: string): Person {
        this.city = city;
        return this; // that will allow us to chain the methods
    }

    setJob(job: string): Person {
        this.job = job;
        return this;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
        if (this.city) console.log(`I live in ${this.city}`);
        if (this.job) console.log(`I work as a ${this.job}`);
    }
}

// Example usage
const person = new Person("Alice", 25)
    .setCity("New York")
    .setJob("Developer")
    .introduce();

