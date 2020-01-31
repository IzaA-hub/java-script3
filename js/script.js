
let computerMove, playerMove, randomNumber;

let	buttonTest = document.getElementById('button-test');
let	buttonRock = document.getElementById('button-rock');
let	buttonPaper = document.getElementById('button-paper');
let	buttonScissors = document.getElementById('button-scissors');

const buttonClicked = (argButtonName) => {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
};

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId === 1) {
        return 'kamień';
    } else if (argMoveId === 2) {
        return 'papier';
    } else if (argMoveId === 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove === 'papier' && argComputerMove === 'kamień') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove === 'nożyce' && argComputerMove === 'papier') {
        printMessage('Wygrywasz!');
    }else if (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') {
        printMessage('Wygrywasz!');
    }else if (argPlayerMove === argComputerMove && argComputerMove === argPlayerMove) {
        printMessage('remis!');
    }else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonRock.addEventListener('click',function(){
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click',function(){
    buttonClicked('papier');
});
buttonScissors.addEventListener('click',function(){
    buttonClicked('nożyce');
});