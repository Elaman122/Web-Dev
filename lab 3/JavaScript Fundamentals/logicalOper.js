//task1:
alert(null || 2 || undefined); //2

//task2
alert(alert(1) || 2 || alert(3)); //1->2

//task3
alert(1 && null && 2); //null

//task4
alert(alert(1) && alert(2)); //1->undefined

//task5
alert(null || (2 && 3) || 4); // &&->3=>3

//task6
if (age >= 14 && age <= 90) {
  alert(age);
}

//task7
if (!(age >= 14 && age <= 90)) {
  alert(age);
}
if (age < 14 || age > 90) {
  alert(age);
}

//task8
if (-1 || 0) alert("first"); // -1||0->-1 it runs,true
if (-1 && 0) alert("second"); //-1&&0->0 false, it doesn't run
if (null || (-1 && 1)) alert("third"); //-1&&1->1=>1

//task9: Checking login
let user_Name = prompt("Who's there?", "");

if (user_Name === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (user_Name === "" || user_Name === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
