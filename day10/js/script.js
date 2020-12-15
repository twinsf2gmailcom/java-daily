
document.getElementById("submit").disabled = true;

// Get the input field
var input = document.getElementById("username");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("username").click();
    
  }
});


// Get the input field
var pwd1 = document.getElementById("pwd1");
var pwd2 = document.getElementById("pwd2");
// Execute a function when the user releases a key on the keyboard
pwd1.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("pwd1").click();
    pwd1.addEventListener("click", myScript());
  }
});
// Execute a function when the user releases a key on the keyboard
pwd2.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("pwd2").click();
    pwd2.addEventListener("click", myScript());
  }
});

function myScript(num) {

  if ((pwd1.value === pwd2.value) && (input.value)) {
    document.getElementById("submit").disabled = false;
  } else{
    document.getElementById("submit").disabled = true;
    alert('Passwords dont match')
  }
}

document.getElementById('theform').onsubmit = function() {
  event.preventDefault();
  localStorage.setItem('username',input.value);
  localStorage.setItem('password',pwd1.value);
}