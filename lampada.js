const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');
const newLamp = document.getElementById('newLamp');

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1

}

function lampOn (){
    if (!isLampBroken () ){
        lamp.src = './img/ligada.jpg';
    }
    
}

function lampOff(){
    if (!isLampBroken () ){
    lamp.src = './img/desligada.jpg';
    }

}
function lampBroken(){
    lamp.src = './img/quebrada.jpg';

}

function lampNew(){
    if (isLampBroken () ){
        lamp.src = './img/desligada.jpg';
    }   
}

function lampOnOff(){
    if (turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}



turnOnOff.addEventListener ('click', lampOnOff);
newLamp.addEventListener ('click', lampNew);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
