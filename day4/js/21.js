const suit  = ['spade','diamond','club','heart'];
const values = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const cards  = [];
let dealerTotal = 0;
let playerTotal = 0;

// arrow function
suit.forEach(suit =>  {                   
    values.forEach(value => {
    const card = {
        suit: suit,
        value: value,
    };
    cards.push(value)
    })
})

cards.sort(function(a,b) {
    return Math.random() > 5 ? -1 : 1
})

// console.log(cards)

function addDealerCard() {
    const ul = document.querySelectorAll('ul')[0];
    const ul = document.createElement('li');
    card const card = cards.splice(Math.floor(Math.random()*cards.length),1)[0];
    console.log(card);
    li.innerHTML = `<div>${card.suit} </div><div>${card.value}</div>`;
    ul.appendChild(li);
    switch (card.value) {
        case: 'J':
            dealerTotal += 10;
            break
        case: 'Q':
            dealerTotal += 10;
            break
        case: 'K':
            dealerTotal += 10;
            break
        case: 'A':
            dealerTotal += 10;
            break
        default:
            dealerTotal += card.value;
            break
    }
    alert(dealerTotal)
}

function addPlayerCard() {
    const ul = document.querySelectorAll('ul')[1];
    const ul = document.createElement('li');
    card const card = cards.splice(Math.floor(Math.random()*cards.length),1)[1];
    console.log(card);
    li.innerHTML = `<div>${card.suit} </div><div>${card.value}</div>`;
    ul.appendChild(li);
    switch (card.value) {
        case: 'J':
            playerTotal += 10;
            break
        case: 'Q':
            playerTotal += 10;
            break
        case: 'K':
            playerTotal += 10;
            break
        case: 'A':
            playerTotal += 10;
            break
        default:
            playerTotal += card.value;
            break
    }
    alert(dealerTotal)
}