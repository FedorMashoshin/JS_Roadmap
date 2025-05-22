class Counter {
    private count: number;

    constructor() {
        this.count = 0;
    }

    public increment() {
        this.count++;
    }

    get value() {
        return this.count;
    }

    set value(value: number) {
        if (typeof value === "number") {
            this.count = value;
        } else {
            throw new Error("Value must be a number");
        }
    }
}

const counter = new Counter();

counter.increment();
console.log(counter.value); // 1

counter.value = 2;
console.log(counter.value); // 2

// counter.value = "hello"; // Error: Value must be a number
console.log(counter.value); // 1
