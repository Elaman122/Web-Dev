function pow(a, n) {
    let res = 0;
    for(let i = 1; i <= n; i++) {
        res = res * a;
    }

    return res;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
    alert(`Power ${n} is not supported,
      please enter an integer number greater than zero`);
  } else {
    alert( pow(x, n) );
}