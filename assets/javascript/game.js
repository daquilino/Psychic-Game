/*  Douglas Aquilino       February 04, 2017   */
/*  RCB - "Psychic-Game" Homework #3           */
/*                game.js                      */

	// Global Variable Declarations
	var wins = 0;
	var losses = 0;
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	var guessesLeft = 10;
	var guessesMade = [];
	var playerGuess = "";
	var psychicGuess = "";

	//==============================================================
	
	// Event Handler. Monitors for 'key up'.
	// Assigns playerGuess that key.		
	// Error checks key is a letter.
	// Assigns psychicGuess random letter via randomLetter()
	// Calls compare() for game logic.
	// Calls showResults to display game results to player.
	document.onkeyup = function(element){
		
		playerGuess = event.key.toUpperCase();
		
		// checks if key pressed is a letter.
		if (letters.indexOf(playerGuess) < 0){
			alert("Woops! Please Guess a Letter!");
			return 0;			
		}
		
		psychicGuess = randomLetter();
		
		compare();
		
		showResults();
	
	}//END document.onkeyup = function(element)

	//==============================================================
	
	//Checks if new game (i.e. guessesLeft = 10).
	//If so returns random letter from letters[].
	//If not returns current psychicGuess value. 
	function randomLetter(){
		
		if (guessesLeft === 10){
			return  letters[Math.floor(Math.random()*letters.length)];
		}
		else{
			return psychicGuess;
		}
	}// END randomLetter()

	//==============================================================
	
	// Compares playerGuess to psychicGuess.
	// If true displays win alert, increments 'Wins', and resets game.
	// If false decrements 'Guesses Left'. Then checks if still more
	// guesses availible.  If yes pushes guess to "Your Guesses So Far".
	// If not alerts you lose, increments 'Losses', and resets game.	
	function compare(){

		if(playerGuess === psychicGuess){
			winAlert();
			wins++;
			resetGame();
		}
		else {
			guessesLeft--;		
			
			if(guessesLeft === 0){

				alert("You Lose! My Letter Was: " + "'"+  psychicGuess + "'" + " Try Again.");			
				losses++;
				resetGame();
			}
			else{
				guessesMade.push(playerGuess);
			}
		}
	
	}// END compare()	
	
	//==============================================================
	
	// Displays results of game to page.
	function showResults() {

		var results = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your Guesses So Far: " + guessesMade + "</p>";

		document.querySelector("#results").innerHTML= results;

	}// END showResults()
	
	//==============================================================
	
	//Displays a random win alert message.
	function winAlert(){
		
		var message = ["Now order me a pizza.  WITH YOUR MIND!!!",
			"Can you pick me up a Powerball ticket?",
			"You, Me, Vegas!!!"	]; 
		
		var randMessage = message[Math.floor(Math.random()*message.length)];

		alert("Your Psychic! " +  randMessage);
	
	}//END winAlert()

	//==============================================================

	//Resets game by setting 'Guesses Left' to ten and
	//clearing 'Your Guesses So Far: '.  
	function resetGame(){
		
		guessesLeft = 10;
		guessesMade = [];

	}//END resetGame()