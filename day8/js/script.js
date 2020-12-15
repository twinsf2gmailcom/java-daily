// Daily Challenge
// Create a new codepen
// Congrats, you got a new dog!
// Create an object named "dog"
// Name and describe your dog
// Add a property to your dog object called "name" and assign a name
// Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
// Let's teach it some tricks
// Give your dog a property called “speak” and assign a function that will alert “woof!”
// Add another method to teach your dog one more trick
// BONUS: Display your dog object values in HTML

class dog {
    name  = 'Babie';
    weight = '7lb';
    color = 'cream';
    tricks = ['sit','jump'];
    bark = 'woof';
    constructor(name, weight, color, tricks, bark) {
      this.name   = name;
      this.weight = weight;
      this.color  = color;
      this.tricks = tricks;
      this.bark   = bark;
    }
    speak () {
        alert(this.bark);
        console.log(111);
    }
}

obj = new dog('Babie','7lbs','cream',['sit','jump'],'woof');
  console.log(obj);

const body = document.getElementsByTagName('body')[0];
const div  = document.createElement('div');
// div.innerHTML = 'testing';
body.appendChild(div);

const para = document.createElement('p');
// console.log(para);
para.innerHTML = ['name: ' + obj.name];
body.appendChild(para);

const para1 = document.createElement('p');
para1.innerHTML = ['weight: ' + obj.weight];
body.appendChild(para1);

const para2 = document.createElement('p');
para2.innerHTML = ['tricks: ' + obj.tricks[0] + ' and ' + obj.tricks[1]];
body.appendChild(para2);

const button = document.createElement('button');
button.innerHTML = ['bark'];
body.appendChild(button);

button.addEventListener("click", function() {
    obj.speak();
});




  