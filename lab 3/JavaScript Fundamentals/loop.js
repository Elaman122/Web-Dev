//task1 last loop value
let i = 3;

while (i) {
  alert( i-- );
}
//3->i=2
//2->i=1
//1->i=0

//task2: which values does the while loop show?
i = 0;
while (++i < 5) alert( i );
//1->2->3->4
i = 0;
while (i++ < 5) alert( i );
//1->2->3->4->5

//task3
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
//0->1->2->3->4

//task4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }
  //even numbers

//task5:replace for->while
i = 0;
while(i<3){
    alert( `number ${i}!` );
    i++;
}
//task6 repeat until the input is correct
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//task7 output prime numbers
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}