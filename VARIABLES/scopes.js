// Global scope
let globalVar = "I am global"; // Globally scoped

function showGlobalVar() {
  console.log(globalVar); // Accessible inside a function
}

showGlobalVar(); // Output: "I am global"
console.log(globalVar); // Output: "I am global"

// Function scope
function testFunctionScope() {
  var functionScopedVar = "I am inside a function";
  console.log(functionScopedVar); // Accessible here
}

testFunctionScope();
console.log(functionScopedVar); // Error: functionScopedVar is not defined

// Block scope
{
  let blockScopedVar = "I am block-scoped";
  const anotherBlockScopedVar = "I am also block-scoped";
  console.log(blockScopedVar); // Accessible here
}
console.log(blockScopedVar); // Error: blockScopedVar is not defined

function scopeExample() {
  if (true) {
    var varVariable = "I am function-scoped";
    let letVariable = "I am block-scoped";
    const constVariable = "I am also block-scoped";
  }
  console.log(varVariable); // Accessible
  console.log(letVariable); // Error: letVariable is not defined
  console.log(constVariable); // Error: constVariable is not defined
}
scopeExample();

// Lexical scope
function outerFunction() {
  let outerVariable = "I am outer";

  function innerFunction() {
    console.log(outerVariable); // Accessible due to lexical scoping
  }

  innerFunction();
}
outerFunction(); // Output: "I am outer"
