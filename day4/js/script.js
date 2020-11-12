//https://codepen.io/StephanieFlora/pen/MWeZyVw?editors=0010
// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number


function getnum(whichnum) {
    let numx = prompt('Enter a number' + String(whichnum) + ':','0');
    let intx = parseInt(numx);
    if (!intx) {
      getnum();  // recursion
    }
    return intx
  }
  
  let int1 = getnum(1);
  let int2 = getnum(2);
  
  if (int1 > int2) {
    alert('The larger number is ' + int1 + ' of the two numbers ' + int1 + ' & ' + int2 );
  } else if (int1 === int2) {
     alert(int1 + ' and ' + int2 + ' are equal'  + ' of the two numbers ' + int1 + ' & ' + int2 );
  } else {
     alert('The larger number is ' + int2  + ' of the two numbers ' + int1 + ' & ' + int2 );
  }
  
  
  
  /*
  let num1 = prompt('Enter a number:','0');
  if (isNaN(num1)) {
    alert('You did not input a number');
    num1 = prompt('Enter a number:','0');
  }
  
  let num2 = prompt('Enter a second number:','0');
  if (isNaN(num2)) {
    alert('You did not input a number');
    num2 = prompt('Enter a number:','0');
  }
  let int1 = parseInt(num1);
  let int2 = parseInt(num2);
  if (int1 > int2) {
    alert('The larger number is ' + int1)
  } else if (int1 === int2){
     alert(int1 + ' and ' + int2 ' are equal')
  } else {
     alert('The larger number is ' + int2)
  }
  //
  const comp = int1 > int2 ? int1 : int2;
  alert(comp)
  */
  
  
  
  // ------------ TAKE HOME CHALLENGE ------------
  // Add an edge case to your daily challenge code
  // Check if the user input anything other than a number
  // If so, prompt the user again to input a number
  