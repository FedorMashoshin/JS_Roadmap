const x = 10;
x = 20; // TypeError: Assignment to constant variable

// Object mutation
const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed
console.log(obj.name); // Bob
obj = { test: 123 }; // Not Allowed

// Array mutation
const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]

// Block scope
if (true) {
  const y = 30;
  console.log(y); // 30
}
console.log(y); // ReferenceError: y is not defined
