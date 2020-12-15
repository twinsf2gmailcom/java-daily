//console.log(document.forms)

document.getElementById('theform').onsubmit = function() {
  event.preventDefault();

  // console.log('the');
  // console.log(event);
  // console.log('the the');
  // console.log(111);
  const formobj  = document.getElementById('theform');
  
  formobj.classList.add('hidden');  //Addes the hidden class to the form so it vanishes

  // console.log(formobj);
  // console.log(formobj.fname);
  // console.log(formobj.lname.Value);
  // console.log(formobj.age.Value);
  // console.log(formobj.bday.Value);
  // console.log(222);

  // document.getElementById('searchTerm').value

  const div = document.getElementsByTagName('div')[0];

  const oldul = document.getElementsByTagName('ul')[0];
  if (oldul) {
    oldul.remove();
  }
  console.log(oldul);
  console.log(222);
  const ul = document.createElement('ul');
  div.appendChild(ul);

  const li = document.createElement('li');
  li.innerHTML = 'Name: ' + formobj.fname.value + ' ' + formobj.lname.value;
  ul.appendChild(li);

  const li2 = document.createElement('li');
  li2.innerHTML = 'Age: ' + formobj.age.value + ' years old';
  ul.appendChild(li2);

  const li3 = document.createElement('li');
  li3.innerHTML = 'Birthday: ' + formobj.bday.value;
  ul.appendChild(li3);

  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    // console.log(data);
    const li4 = document.createElement('li');
    // console.log(li4);
    li4.style.listStyle = 'none';
    li4.innerHTML = '<img class="imgsize" src="' + data.message + '">';
    ul.appendChild(li4);

  }
  // Send request
  request.send();
  // console.log(request);

  // const host =  'https://www.metaweather.com/api/location/2407517/';
  // var request = new XMLHttpRequest();
  // request.open('GET',host, true);
  
  // 2407517

  const host =  'https://api.oceandrivers.com/static/resources.json/';
  


  return;
}