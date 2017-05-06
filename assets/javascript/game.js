$(document).ready(function() {

	var crystals = ['assets/images/Blue.jpg','assets/images/CrazyonCrazy.jpeg','assets/images/Skull.jpg','assets/images/Pokemon.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text('wins:' + wins);
	$('#loss').text('losses:' + losses);
	
	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.floor(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

	function newGame() {

		counter = 0;
		$('#theScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var guessingNumber = randomIntFromInterval(19,120);

		$('.value').text(guessingNumber);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#theScore').text(counter);

		    if (counter == guessingNumber){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text('wins:' + wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( counter > guessingNumber){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text('losses:' + losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});





