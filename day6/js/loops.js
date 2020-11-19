const body = document.querySelector('body');

function addTopics(topic,listOfItems) {
    let createul = `<h1>${topic}</h1>
    <ul>`;
    for (let point of listOfItems) {
        createul += `<li>${point}</li>`;
    }
    createul += `</ul>`;
    return createul;
}

body.innerHTML += addTopics('Header',['dog','cat','horse']);
body.innerHTML += addTopics('Header2',['dog2','cat2','horse2']);
body.innerHTML += addTopics('Header3',['dog3','cat3','horse3']);