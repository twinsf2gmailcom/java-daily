// https://medium.com/javascript-in-plain-english/exploring-chart-js-e3ba70b07aa4

// $.getJSON("http://data.moby.mlml.calstate.edu/htmldir2/270_seawifs_total_lwn2.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
let data;

const header = document.querySelector('header');
const section = document.querySelector('section');

// 1) To start with, we store the URL of the JSON we want to retrieve in a variable. 
// Add the following at the bottom of your JavaScript code: 
let requestURL = 'https://twinsf2gmailcom.github.io/270_seawifs_total_lwn2.json';
// 2) To create a request, we need to create a new request object instance from the 
// XMLHttpRequest constructor, using the new keyword. Add the following below your last line: 
let request = new XMLHttpRequest();
// 3) Now we need to open the request using the open() method. Add the following line
request.open('GET', requestURL);
// 4) Next, add the following two lines — here we are setting the responseType to JSON, 
// so that XHR knows that the server will be returning JSON, and that this should be 
// converted behind the scenes into a JavaScript object. Then we send the request with the send() method:
request.responseType = 'json';
request.send();
// 5) The last bit of this section involves waiting for the response to return from the server, 
// then dealing with it. Add the following code below your previous code:
request.onload = function() {
  const data = request.response;
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
}

console.log(data);
