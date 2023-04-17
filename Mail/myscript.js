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

// INCLUDES
if (accessList.includes(email)) {
  alert("Login successful!");
  console.log("Login successful!");
} else {
  alert("Access denied!");
  console.log("Access denied!");
}

// FOR
// let security = false;

// for (let i = 0; i < accessList.length; i++) {
//   if (email == accessList[i]) {
//     security = true;
//     alert("Login successful!");
//     console.log("Login successful!");
//   }
// }

// if (security == false) {
//   alert("Acess denied!");
//   console.log("Acess denied!");
// }
