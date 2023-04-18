// EXCERCISE DICE

let firstNumber = Math.floor(Math.random() * 6) + 1;
let secondNumber = Math.floor(Math.random() * 6) + 1;

if (firstNumber > secondNumber) {
  alert(firstNumber + " " + "User win!");
  console.log("User win!");
} else if (secondNumber > firstNumber) {
  alert(secondNumber + " " + "Computer win!");
  console.log("Computer win!");
} else {
  alert("It's a draw");
}
