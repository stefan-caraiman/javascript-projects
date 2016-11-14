var x = 1; // this is a comment
let y = 2;
const pi = 3.14; // constant read-only
/*
multiline comment example
*/
console.log(x);

if (y >= 3){
    console.log("Bigger");
} else {
    console.log("Smaller");
}

var arr = [];

if (true) {
  var x = 5;
  }
  console.log(x);  // x is 5


if (true) {
  let y = 5;
  }
  console.log(y);  // ReferenceError: y is not defined


// Function hoisting example



/* Function declaration */

foo(); // "bar"

function foo() {
  console.log("bar");
  }


  /* Function expression */

  baz(); // TypeError: baz is not a function

  var baz = function() {
    console.log("bar2");
    };


