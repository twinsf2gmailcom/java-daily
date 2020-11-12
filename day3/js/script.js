var score = 0;
const gameName = "Hit me";
let isPaused;

function addPoint() {
    // debugger;
    score += 1;
}

// refactored ---------------------------------------
function createMole() {
    const gameView = document.querySelector('#game-view');
    gameView.innerHTML = `<div style="top: ${getRandNum()}px; left: ${getRandNum()}px"><p style="text-align:center;" onclick="addPoint()">score<br>${score}</p></div>`;
}

// function createMole() {
//     const body = document.querySelector('body');
//     // const mole = `<div onclick="addPoint()">
//     const mole = `<div style="top: ${getRandNum()}px; left: ${getRandNum()}px">
//         <p style="text-align:center;">${gameName}</p>
//     </div>`;
//     body.innerHTML = mole;
//     // console.log(mole);
// }

// refactored ---------------------------------------
function getRandNum() {
    return Math.ceil(Math.random()*600);
};
// function getRandNum() {
//     const randNum = Math.random()*600;
//     const randInt = Math.ceil(randNum);
//     console.log(randInt);
//     return randInt;
// };

// refactored ---------------------------------------
setInterval (function() { 
    if (!isPaused) {
        createMole();   
    }
} , 1000 );
// setInterval (function() { 
//     if (isPaused) {

//     } else {
//         createMole();   
//     }
    
// } ,1000 );

setTimeout (function() { 
    isPaused = true;   
} ,1000*5 );  // 12 seconds = 1000*12

// addPoint();
// console.log(`addPoint new score is ${score}` );
// addPoint();
// console.log(`addPoint new score is ${score}` );
// addPoint();
// console.log(`addPoint new score is ${score}` );

// console.log(score)

//createMole();

