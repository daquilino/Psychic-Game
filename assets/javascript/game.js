/*  Douglas Aquilino       February 04, 2017   */
/*  RCB - "Psychic-Game" Homework #3           */
/*                game.js                      */


var wins = 0;
var losses = 0;
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var guessesLeft = 10;
var guessesMade = [];
var playerGuess = "";
var psychicGuess = "";

	
	document.onkeyup = function(element){

		playerGuess = event.key.toLowerCase();
		
		psychicGuess = (randomLetter(letters));
		compare(playerGuess, psychicGuess, wins, losses, guessesMade, guessesLeft)
		showResults()
	
	}//END document.onkeyup = function(element)


	//When passed and array; randomly chooses then returns
	// element
	function randomLetter(){
		return  letters[Math.floor(Math.random()*letters.length)]
	}// END randomLetter()


	
	// Logic for comparing guesses and ...
	function compare(){

		if(playerGuess === psychicGuess){
			wins++;
			guessesLeft = 10;
			guessesMade = [];
		}
		else{
			losses++;
			guessesLeft--;
			guessesMade.push(playerGuess);

		}


	}// END compare()

	// Displays to screen reults of game.
	function showResults() {

		var results = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses: " + guesses + "</p>" + "<p>Your guesses so far: " + guessesMade + "</p>";

		document.querySelector("#results").innerHTML= results;


	}// END showResults()