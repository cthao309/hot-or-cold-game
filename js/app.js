
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a new game ---*/
  	$(".new").click(function(){
  		window.location.reload();
  	});

  	/*--- Randomly generate number from 1 to 100 ---*/
  	var secretNum = Math.floor(Math.random()*100 + 1);		
		var strSecretNum = secretNum.toString();
	/*	console.log(secretNum);*/
  
  	/*--- "Guess" button click function ---*/		  	
  	$(".button").click(function(){

  		var guessNum = $("#userGuess").val(); //store the input as "guessNum"

  		count(secretNum);	//call "count" function

  		if(guessNum > 100)
  		{
  			alert("The number is between 0 and 100");
  		}
  		else
  		{
				direction(secretNum,guessNum);	//call "direction" function
			}
		});

});

/*--- Counter function ---*/
var counter=0;

function count(secretNum){
	
	var $numTried = $("span#count");
	counter++;
	/*console.log(counter);*/
	$numTried.html(counter);			
};

/*--- Warning the user ---*/
function direction(randomNum,guessNum){

	var message;

	var strGuessNum = guessNum.toString();
	var strSecretNum = randomNum.toString();

	$("#guessList").append("<li>" +strGuessNum+ "</li>");

	console.log("Guessed number is: " +strGuessNum +"\n"+ "Random number is: " +strSecretNum);

	switch(true)
	{
			case guessNum == randomNum:
					$message = $("h2#feedback");
					$message.html("GOOD JOB!!!");					
					break;	

			case guessNum <= randomNum:
					if(randomNum - guessNum >= 15)
					$message = $("h2#feedback");
					$message.html("GO HIGHER!!!");
					break;

			case guessNum >= randomNum:
					$message = $("h2#feedback");
					$message.html("WARMER...LOWER!!! ");
					break;			

			default :
					$message = $("h2#feedback");
					$message.html("JUST SHOOT ME!!!");
	}	

};




