
function showTime() {
    const date = new Date();
    // console.log(date)
    const monthS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    document.querySelector('#day').innerHTML   = ` ${date.getDate()} `;
    document.querySelector('#month').innerHTML = ` ${monthS[date.getMonth()]} `;
    document.querySelector('#year').innerHTML  = ` ${date.getFullYear()} `;
    document.querySelector('#hour').innerHTML  = ` ${String(date.getHours()).padStart(2, '0')} `;
    document.querySelector('#mins').innerHTML  = ` ${String(date.getMinutes()).padStart(2, '0')} `;
    document.querySelector('#secs').innerHTML  = ` ${String(date.getSeconds()).padStart(2, '0')} `;

    if (date.getHours() > 19) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}

setInterval(showTime,1000);

