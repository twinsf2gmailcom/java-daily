// Take Home Challenge
// Create a new codepen:
// Let's say you're a car manufacturer and need to create many cars to build your inventory
// Create a class called "car"
// Add some properties like "make", "model", "year", "color", etc
// Use your car class to construct 4 (or more) different cars
// console log your code so you can see the results!
// BONUS: Display the details for each of your cars in your HTML

class car {
    make       = 'Make';
    model      = 'Model';
    year       = null;
    cost       = null;
    color     = 'none';
    constructor(make,model,year,cost,color) {
        this.make  = make;
        this.model = model;
        this.year  = year;
        this.cost  = cost;
        this.color = color;
    }
    display () {
        const body = document.getElementsByTagName('body')[0];
        
        const ul = document.createElement('ul');
        body.appendChild(ul);
        
        const li = document.createElement('li');
        li.innerHTML = this.year + ' ' + this.make + ' ' + this.model;
        ul.appendChild(li);

        const li2 = document.createElement('li');
        li2.innerHTML = `<img width="100px" height="100px" src="https://source.unsplash.com/random/100×100/?car" alt=""></img>`;
        ul.appendChild(li2);
        
        const li3 = document.createElement('li');
        li3.innerHTML = 'Cost: $' + this.cost;
        ul.appendChild(li3);

        const li4 = document.createElement('li');
        li4.innerHTML = 'Color: ' + this.color;
        ul.appendChild(li4);

        const hr = document.createElement('hr');
        body.appendChild(hr);
        
    }
}

let car1 = new car('Buich','Skylark',1982,0,'white');
let car2 = new car('Geo','Metro',1993,5000,'blue');
let car3 = new car('Chevy','Metro',1998,7000,'gold');
let car4 = new car('Honda','Fit',2009,14000,'grey');

car1.display();
car2.display();
car3.display();
car4.display();
