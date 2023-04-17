// EXCERCISE MAIL
// let email = prompt("Enter your email to verify access");
// console.log(email);

// // ARRAY
// const accessList = [
//   "nicola.soggiu@gmail.com",
//   "mario.rossi@gmail.com",
//   "paolo.verdi@gmail.com",
//   "alessandro.conte@gmail.com",
//   "filippo.rinascente@gmail.com",
// ];
// console.log(accessList);

// if (email == "nicola.soggiu@gmail.com") {
//   alert("Login successful!");
//   console.log("Login successful!");
// } else {
//   alert("Access denied!");
//   console.log("Access denied!");
// }

// EXCERCISE DICE

let firstNumber = Math.floor(Math.random() * (6 - 1 + 1));
let secondNumber = Math.floor(Math.random() * (6 - 1 + 1));

if (firstNumber > secondNumber) {
  alert(firstNumber + " " + "User win!");
  console.log("User win!");
} else if (secondNumber > firstNumber) {
  alert(secondNumber + " " + "Computer win!");
  console.log("Computer win!");
} else {
  alert("It's a draw");
}
