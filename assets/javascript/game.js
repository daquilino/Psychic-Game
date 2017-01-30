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
		
		if (letters.indexOf(playerGuess) < 0){
			alert("Woops! Please Guess a Letter!");
			return;			
		}
		
console.log("pre: " + psychicGuess); //test code
		
		psychicGuess = (randomLetter(letters));
		
console.log("post: " + psychicGuess); //test code
		
		compare(playerGuess, psychicGuess, wins, losses, guessesMade, guessesLeft);
		
		showResults(wins, losses, guessesLeft, guessesMade);
	
	}//END document.onkeyup = function(element)


	//When passed and array; randomly chooses then returns
	// element
	function randomLetter(){
		
		if (guessesLeft === 10){
			return  letters[Math.floor(Math.random()*letters.length)];
		}
		else{
			return psychicGuess;
		}
	}// END randomLetter()


	// Logic for comparing guesses and ...
	function compare(){

		if (guessesLeft > 1){	

			if(playerGuess === psychicGuess){
				alert("You Win!!!");
				wins++;
				guessesLeft = 10;
				guessesMade = [];
			}
			else {
				guessesLeft--;
				guessesMade.push(playerGuess);
			}
		}
		else{
			alert("No More Guesses. You Lose! Try Again.");
			losses++;
			guessesLeft = 10;
			guessesMade = [];
			return;
		}	

	}// END compare()

	// Displays to screen results of game.
	function showResults() {

		var results = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your Guesses So Far: " + guessesMade + "</p>";

		document.querySelector("#results").innerHTML= results;

	}// END showResults()