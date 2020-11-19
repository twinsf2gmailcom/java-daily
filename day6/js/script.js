var groceryList = [];
const body = document.querySelector('body');
const button = document.createElement('button');
const ul = document.createElement('ul');

button.innerHTML = 'Add Item';
button.onclick = function() {getitem();};
// button.addEventListener('click',function() {getitem();});

body.appendChild(button);
body.appendChild(ul);

function getitem() {
    let gitem = prompt("Please enter a grocery item");
    if (!gitem) {
        gitem();  // recursion
    }
    console.log(gitem);
    groceryList.push(gitem);
    console.log(gitem);
    console.log(groceryList);
    ul.innerHTML += '<li>' + gitem + '</li>';
    return groceryList;
  };

  