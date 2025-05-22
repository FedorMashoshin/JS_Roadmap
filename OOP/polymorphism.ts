// Base class
class Animal {
    constructor(protected name: string) { }

    makeSound(): void {
        console.log("Some sound");
    }
}

// Derived classes
class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Woof!`);
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

class Bird extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Tweet!`);
    }
}

// Function that demonstrates polymorphism
function animalSound(animal: Animal): void {
    animal.makeSound();
}

// Create different animals
const dog = new Dog("Rex");
const cat = new Cat("Whiskers");
const bird = new Bird("Tweety");

// Demonstrate polymorphism
console.log("Polymorphism in action:");
animalSound(dog);    // Rex says: Woof!
animalSound(cat);    // Whiskers says: Meow!
animalSound(bird);   // Tweety says: Tweet!

// Array of animals demonstrating polymorphism
const animals: Animal[] = [dog, cat, bird];
console.log("\nUsing an array of animals:");
animals.forEach(animal => animal.makeSound()); 