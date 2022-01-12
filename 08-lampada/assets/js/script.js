const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

const isLampBroken = lamp.src.indexOf('quebrada') > -1;

function turnOnLamp() {
    if(!isLampBroken) {
        lamp.src = 'assets/img/ligada.jpg';
    }
}

function turnOffLamp() {
    if(!isLampBroken) {
        lamp.src = 'assets/img/desligada.jpg';
        turnOnOff.textContent = 'Acender';
    }
}

function lampBroken() {
    lamp.src = 'assets/img/quebrada.jpg';
}

function turnOnOffLamp () {
    if (turnOnOff.textContent === 'Acender') {
        turnOnLamp();
        turnOnOff.textContent = 'Desligar';
    } else {
        turnOffLamp();
        turnOnOff.textContent = 'Acender';
    }
}

turnOnOff.addEventListener('click', turnOnOffLamp);

lamp.addEventListener('mouseover', turnOnLamp);
lamp.addEventListener('mouseleave', turnOffLamp);
lamp.addEventListener ('dblclick', lampBroken);