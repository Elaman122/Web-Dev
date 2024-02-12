function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
}

function checkAge2(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

function min(a, b) {
    if(a > b) return a;
    if(a < b) return b;
    return 0;
}


function Pow(a, n) {
    let res = 0;
    for(let i = 1; i <= n; ++i) {
        res *= a; 
    }

    return a;
}