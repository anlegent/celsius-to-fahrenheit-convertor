// 1
let celciusPrompt = prompt("please input a value in celsius");

let convert = 32 + (9 / 5) * celciusPrompt;

console.log(celciusPrompt);
console.log(convert);

// 2
let number1 = 5;
let number2 = 10;
let number3 = 15;

let calculate = number1 + number2 + number3;
console.log(calculate);

// 3
let hourPrompt = prompt(" please input hours");

let secondsPerHour = hourPrompt * 60 * 60;
console.log(secondsPerHour);

// 4
let age1 = prompt("please input a valid age");
let nationality1 = prompt("please input a valid nationality");

if (age1 >= 18) {
  console.log("age valide");
} else {
  console.log("age non valide");
}
if (nationality1 == "French") {
  console.log("nationalité valide");
} else {
  console.log("nationalité non valide");
}

// 5

let age = prompt("age");
if (age <= 3) {
  console.log("gratuit");
} else if (age <= 15) {
  console.log("reduit");
} else if (age <= 25) {
  console.log("plein tarif");
} else {
  console.log("please input a correct age");
}
