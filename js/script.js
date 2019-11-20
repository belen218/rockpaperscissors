// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var computerChoice
var userChoice;
var winner;
var randomNumber = Math.random()

$('#shoot').click(function() {
    //get user input 
    userChoice = $('#input').val()
    $('#userChoice').text(userInput)
    if (randomNumber > .666) {
        computerChoice = 'rock'
    } else if (randomNumber > .333){
      computerChoice = 'scissors'  
    }
    else {
        computerChoice = 'paper'
    }


})


// DOCUMENT READY FUNCTION BELOW

