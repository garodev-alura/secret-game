let randomNumber = 0;
let tryUser = 0;
let randomNumbers = [];
let opportunities = 10;

function valueUserVerify(){
    let userValue = parseInt(document.getElementById('userValue').value);

    if(userValue === randomNumber){
        assignTextToElment('p', `Acertaste el número en ${tryUser} ${(tryUser === 1)?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        assignTextToElment('p', `El número es ${randomNumber > userValue?'Mayor':'Menor'}`);
        tryUser++;
        cleanBox();
    }
}

function assignTextToElment(element, text){
    let selector = document.querySelector(element);
    selector.innerHTML = text;
}

function generateRandomNumber(){
    let randomNumber = parseInt(Math.floor(Math.random()*opportunities)+1);

    //Ya estan sorteados todos los números posibles
    if (randomNumbers.length === opportunities){
        assignTextToElment('p', `Ya se sortearon todos los números`);
        return;
    }

    //Ya esta incluido en la lista
    if (randomNumbers.includes(randomNumber)){
        generateRandomNumber();
    }
    else{
        randomNumbers.push(randomNumber);
        return randomNumber;
    }
}

function cleanBox(){
    document.querySelector('#userValue').value = '';
}

function init(){
    assignTextToElment('p', `Indica el número del 1 al ${opportunities}`);
    assignTextToElment('h1', 'Juego del número secreto');
    randomNumber = generateRandomNumber();
    tryUser = 1;
    console.log(randomNumber);
}



function resetGame(){
    cleanBox();
    init();
}

init();

