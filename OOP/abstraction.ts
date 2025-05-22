// Abstract class that defines the contract
abstract class Shape {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    // Abstract method that must be implemented by subclasses
    abstract getArea(): number;

    // Concrete method that can be used by all subclasses
    getColor(): string {
        return this.color;
    }
}

// Concrete class implementing the abstract class
class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    // Implementation of the abstract method
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Another concrete class
class Square extends Shape {
    private side: number;

    constructor(color: string, side: number) {
        super(color);
        this.side = side;
    }

    // Implementation of the abstract method
    getArea(): number {
        return this.side * this.side;
    }
}

// Usage
const circle = new Circle("red", 5);
const square = new Square("blue", 4);

console.log(`Circle area: ${circle.getArea()}`); // 78.5
console.log(`Square area: ${square.getArea()}`); // 16
console.log(`Circle color: ${circle.getColor()}`); // red