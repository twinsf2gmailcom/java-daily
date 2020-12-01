const body = document.getElementsByTagName('body')[0];
const div  = document.createElement('div');
// div.innerHTML = 'testing';
body.appendChild(div);

const button = document.createElement('button');
// console.log(button);
button.innerHTML = 'CLick to Hide Paragraph';
body.appendChild(button);

const para = document.createElement('p');
// console.log(para);
para.innerHTML = 'day 7 challange paragraph';
body.appendChild(para);

button.addEventListener("click", function() {
    // console.log(para.visible);
    if (para.hidden == true) {
        para.hidden = false;
    } else {
        para.hidden = true;
    };
});


