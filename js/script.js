var argButtonName, buttonTest;
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var buttonRock;
var buttonPaper;
var buttonScissors;
buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
   function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
	  return 'papier';
  } else if (argMoveId ==3) {  
	  return 'nożyce';
  }else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}  
  function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  }else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');	
  }else if (argPlayerMove == argComputerMove && argComputerMove == argPlayerMove) {
    printMessage('remis!');
  }else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
  playerMove = argButtonName;
//playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//console.log('wybór ruchu gracza to: ' + playerInput);
//playerMove = getMoveName(playerInput);
	console.log('ruch gracza to: ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);
  } 
// buttonTest.addEventListener('click', function(){
//    buttonClicked('Test button')
//}); 
  buttonRock.addEventListener('click',function(){
	  buttonClicked('kamień');});  
buttonPaper.addEventListener('click',function(){
	buttonClicked('papier');});
 buttonScissors.addEventListener('click',function(){
	 buttonClicked('nożyce');}); 