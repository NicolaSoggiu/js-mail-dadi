// EXCERCISE MAIL
let email = prompt("Enter your email to verify access");
console.log(email);

// ARRAY
const accessList = [
  "nicola.soggiu@gmail.com",
  "mario.rossi@gmail.com",
  "paolo.verdi@gmail.com",
  "alessandro.conte@gmail.com",
  "filippo.rinascente@gmail.com",
];
console.log(accessList);

if (accessList.includes(email)) {
  alert("Login successful!");
  console.log("Login successful!");
} else {
  alert("Access denied!");
  console.log("Access denied!");
}
