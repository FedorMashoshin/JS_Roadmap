function testVar() {
  console.log(x); // undefined (hoisted, but not initialized)
  var x = 5;
  console.log(x); // 5
}

testVar();

if (5 > 2) {
  var i = 10;
}

console.log(i);

// Global scope
var y = 10;
var y = 20; // Re-declaration is allowed
console.log(y); // 20
