function testLet() {
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 5;
  console.log(a); // 5
}
testLet();

// Block scope
if (true) {
  let b = 10;
  console.log(b); // 10
}
console.log(b); // ReferenceError: b is not defined

// Re-declaration not allowed
let c = 15;
let c = 20; // SyntaxError: Identifier 'c' has already been declared
