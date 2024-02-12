// postfix and prefix
let a = 1, b = 1

let c = ++a  // 2
let d = b++ // 2

console.log(c)
console.log(b)

// Assignment result

let a2 = 2

let x = 1 + (a2 *= 2); // 5

// type conversions

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

// fix the addition

let a3 = +prompt("First number?", 1);
let b3 = +prompt("Second number?", 2);

alert(a3 + b3); // 12