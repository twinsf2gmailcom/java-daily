// Day 5 challenge
// Create a new codepen
// Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function

// const ul = document.querySelectorAll('ul')[0];
const li = document.getElementsByTagName('li');
// console.log(li)
let num;
let int;
let rem;

function getnum() {
    num = prompt("Please enter a number");
    console.log(num);
    num = parseFloat(num);
    console.log(num);
    if (!num) {
        getnum();  // recursion
    }
    return num;
  }
  
  function eveodd (num) {
    int = Math.round(num);
    console.log(int);
    rem = int % 2;
    console.log(rem);  
    return [int, rem];
  }

num = getnum();
[int, rem] = eveodd(num);

if (rem == 0) {
    console.log('The number ' + int + ' is even')
    li[0].innerHTML = '<p>The number ' + int + ' is even</p>';
    alert('The number ' + int + ' is even')
} else {
    console.log('The number ' + int + ' is odd')
    li[0].innerHTML = '<p>The number ' + int + ' is odd</p>';
    alert('The number ' + int + ' is odd')
};



