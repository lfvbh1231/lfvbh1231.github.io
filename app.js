let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColar = '#ffffff';
tg.MainButton.colar = '#2cab37';

let item = 0;

let bth1 = document.getElementById('button1');
let bth2 = document.getElementById('button2');
let bth3 = document.getElementById('button3');
let bth4 = document.getElementById('button4');
let bth5 = document.getElementById('button5');
let bth6 = document.getElementById('button6');

bth1.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('Вы выбрали товар 1');
        item += 1;
        tg.MainButton.show();
    }
});
bth2.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('Вы выбрали товар 2');
        item += 1;
        tg.MainButton.show();
    }
});
bth3.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('Вы выбрали товар 3');
        item += 1;
        tg.MainButton.show();
    }
});
bth4.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('Вы выбрали товар 4');
        item += 1;
        tg.MainButton.show();
    }
});
bth5.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('Вы выбрали товар 5');
        item += 1;
        tg.MainButton.show();
    }
});
bth6.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('Вы выбрали товар 6');
        item += 1;
        tg.MainButton.show();
    }
});



Telegram.WebApp.onEvent('mainButtonClicked', function() {
    tg.sendData(item);
});


let usercard =document.getElementById('usercard');
let p =document.createElement('p');

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);


