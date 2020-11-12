//https://codepen.io/StephanieFlora/pen/abZPdjo

// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

var first = prompt("Please enter your first name", "");
var last = prompt("Please enter your last name", "");
console.log(`${first} is the first name you entered.`  )  
alert(last + " is the last name you entered ")


// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday
var bday = prompt("Please enter your birthdate (DD/mmm/yyy)", "");
var r = confirm("Please confirm your birthday");
if (r == true) {
  txt = `Your birthday is ${bday}!`;
} else {
  txt = "You pressed Cancel!";
}
console.log(txt)