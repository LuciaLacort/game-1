'use strict';

const bnt = document.querySelector('.js-btn');
const options = document.querySelector('.js-options');
const info = document.querySelector('.js-info');
const playerPoints = document.querySelector('.js-player-points');
const computerPoints = document.querySelector('.js-computer-points');
const resetBtn = document.querySelector('.js-reset');
const winner = document.querySelector('.js-winner');
const container = document.querySelector('.js-container');


//3.Creamos la función que nos da un número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//4.Guardamos ese número en una variable ya que lo vamos a necesitar para darle equivalencias, según el númer que genere, será el movimiento piedra, papel o tijera de la computadora.

function getRandomMove(){
    const randomNumber = getRandomNumber(9);
    console.log(randomNumber);
    if(randomNumber <= 3){
        return 'rock';
    } else if(randomNumber >= 7){
        return 'paper';
    } else {
        return 'scissors';
    }
    }

//5.Comparamos el resultado de la computadora con el de la usuaria y pintamos en pantalla Empate, has perdido o has ganado. Antes de comparar necesitamos sabér qué vamos a comparar, entonces llamamos a las variables  que serán el movimiento del ordenador y el movimiento de la usuaria.

//6.egún el resultado sea empate, has perdido o has ganado, se suma una puntuación a la computadora y otra al jugador

let computer = 0;
let player = 0;   

function compareMoves(){
    const playerMove = options.value;
    const computerMove = getRandomMove();
    if(playerMove === 'default'){
        info.innerHTML = 'Debes elegir una opción';
    } else if(playerMove === computerMove){
        info.innerHTML = 'Empate';
        computer++
        player++
    }
    else if (
        (playerMove === 'rock' && computerMove === 'paper') ||
        (playerMove === 'scissors' && computerMove === 'rock') ||
        (playerMove === 'paper' && computerMove === 'scissors')
        ){
        info.innerHTML = 'Has perdido';
        computer +=2; 
    } else {
        info.innerHTML = 'Has ganado'
        player += 2;
    };

    playerPoints.innerHTML = player;
    computerPoints.innerHTML = computer;
}


//2.Dentro de ese handle clicl tenemos que llamar a varias funciones 

//7.Al llegar a 10 movimientos, se lanza el mensaje de quien ha ganado, desaparece el botón jugar, aparece el boton reset y si se pulsa todo vuelve a cero


let contador = 0;

function handleClick(event){
    event.preventDefault()
    compareMoves();
    contador++
    if(contador === 20){
        bnt.classList.add('hidden');
        resetBtn.classList.remove('hidden');
        if(computer > player){
            winner.innerHTML = 'Ha ganado el ordenador';
        } else if(computer < player){
            winner.innerHTML = 
            'FELICIDADES, <br> ¡HAS GANADO! <BR> <a href="regalo.html">PINCHA AQUÍ PARA IR A POR TU REGALO DEL DÍA DE LA MADRE</a>';
        
        }else{
            winner.innerHTML = 'Empate';
        }
    }
    console.log(contador)
}


//1.Al hacer click en el botón "jugar", se tiene que ejecutar una función

bnt.addEventListener('click', handleClick);

function reset(){
    contador = 0;
    bnt.classList.remove('hidden');
    resetBtn.classList.add('hidden');
    playerPoints.innerHTML = 0;
    computerPoints.innerHTML = 0;
    info.innerHTML = '¡Vamos a jugar!';
    computer = 0;
    player = 0;
    options.value  = 'default';
    winner.innerHTML = '¿QUIÉN SERÁ LA GANADORA?';
}

resetBtn.addEventListener('click', reset);







