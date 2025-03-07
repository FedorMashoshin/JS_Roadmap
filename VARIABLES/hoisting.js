// Function Declaration is hoisted so no error here
testFunc();

function testFunc() {
  console.log("Hello there from the test function");
}

// Function expression. Function is not hoisted, but it treated like variable declaration, so:
testFunc2(); // Reference Error

const testFunc2 = function () {
  console.log("Hello ther again!");
};

testFunc3(); // undefined

var testFunc3 = function () {
  console.log("Last hello!");
};

// Class Hoisting
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    console.log("Class instantiated!");
  }
}
