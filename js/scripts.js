	var gameState = 'notStarted', //started // ended

				player = {
					name: '',
					score: 0 
				},
				
				computer = {
					score: 0
				};
	var newGameElem = document.getElementById('js-newGameElement');
		pickElem = document.getElementById('js-playerPickElement');
		resultsElem = document.getElementById('js-resultsTableElement');

	
	function setGameElements() {
		switch(gameState) {
			case 'started':
					newGameElem.style.display = 'none';
					pickElem.style.display = 'block';
					resultsElem.style.display = 'block';
				break;
			case 'ended':
					newGameBtn.innerText = 'Try again?';
			case 'notStarted':
			default:
					newGameElem.style.display = 'block';
					pickElem.style.display = 'none';
					resultsElem.style.display = 'none';
		}
	}
		setGameElements();

		newGameBtn = document.getElementById('js-newGameButton');
		newGameBtn.addEventListener('click', newGame);
		playerNameElem = document.getElementById('js-playerName');
		playerPointsElem = document.getElementById('js-playerPoints');
		computerPointsElem = document.getElementById('js-computerPoints');
		
		function newGame() {
			player.name = prompt('What is Your name?')
			playerNameElem.innerHTML = player.name;
			
			if (player.name) {
				player.score = computer.score = 0;
				gameState = 'started';
				setGameElements();
			}

			var playerPickElem = document.getElementById('js-playerPick');
				computerPickElem = document.getElementById('js-computerPick');
				playerResultElem = document.getElementById('js-playerResult');
				computerResultElem = document.getElementById('js-computerResult');
				rockPick = document.getElementById('js-playerPick_rock');
				paperPick = document.getElementById('js-playerPick_paper');
				scissorsPick = document.getElementById('js-playerPick_scissors');
				rockPick.addEventListener('click', function() { playerPick('rock') });
				paperPick.addEventListener('click', function() { playerPick('paper') });
				scissorsPick.addEventListener('click', function() { playerPick('scissors') });

			function playerPick(playerPick) {
			
				var computerPick = getComputerPick();
			
					playerPickElem.innerHTML = playerPick;
					computerPickElem.innerHTML = computerPick;
					checkRoundWinner(playerPick, computerPick);
					endGame();
				}

			
			function getComputerPick() {
					var possiblePicks = ['rock', 'paper', 'scissors'];
					return possiblePicks[Math.floor(Math.random()*3)];
			}

			function checkRoundWinner(playerPick, computerPick) {
				
				playerResultElem.innerHTML = computerResultElem.innerHTML = '';
				
				var winnerIs = 'player';

				if (playerPick == computerPick) {
					winnerIs = 'none'; // remis
				} else if (
					(computerPick == 'rock' &&  playerPick == 'scissors') ||
					(computerPick == 'scissors' &&  playerPick == 'paper') ||
					(computerPick == 'paper' &&  playerPick == 'rock')) {

						winnerIs = 'computer';
				}

				if (winnerIs == 'player') {
					playerResultElem.innerHTML = "WIN!";
					player.score++;
				} else if (winnerIs == 'computer') {
						computerResultElem.innerHTML = "WIN!";
					computer.score++;
					}

				function setGamePoints() {
					playerPointsElem.innerHTML = player.score;
					computerPointsElem.innerHTML = computer.score;
				}
				setGamePoints();
			}

			function endGame(){
				if (player.score == 10 || computer.score == 10) {
					gameState='ended';
					setGameElements();
				}

			}
}


