	var gameState = 'notStarted', //started // ended

				player = {
					name: '',
					score: 0 
				},
				
				computer = {
					score: 0
				};
	var newGameElem = document.getElementById('js-newGameElement');
	var	pickElem = document.getElementById('js-playerPickElement');
	var	resultsElem = document.getElementById('js-resultsTableElement');

	
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
	var	playerNameElem = document.getElementById('js-playerName');
	var	playerPointsElem = document.getElementById('js-playerPoints');
	var	computerPointsElem = document.getElementById('js-computerPoints');
		
		function newGame() {
			player.name = prompt('What is Your name?')
			playerNameElem.innerHTML = player.name;
			
			if (player.name) {
				player.score = computer.score = 0;
				gameState = 'started';
				setGameElements();
				setGamePoints();
			}
		}

			var playerPickElem = document.getElementById('js-playerPick');
			var	computerPickElem = document.getElementById('js-computerPick');
			var	playerResultElem = document.getElementById('js-playerResult');
			var	computerResultElem = document.getElementById('js-computerResult');
			var	rockPick = document.getElementById('js-playerPick_rock');
			var	paperPick = document.getElementById('js-playerPick_paper');
			var	scissorsPick = document.getElementById('js-playerPick_scissors');
				rockPick.addEventListener('click', function() { playerPick('rock') });
				paperPick.addEventListener('click', function() { playerPick('paper') });
				scissorsPick.addEventListener('click', function() { playerPick('scissors') });

			function playerPick(playerPick) {
			
				var computerPick = getComputerPick();
			
					playerPickElem.innerHTML = playerPick;
					computerPickElem.innerHTML = computerPick;
					checkRoundWinner(playerPick, computerPick);
					
			}
			
			function getComputerPick() {
			var possiblePicks = ['rock', 'paper', 'scissors'];
				return possiblePicks[Math.floor(Math.random()*3)];
			}

			function setGamePoints() {
				playerPointsElem.innerHTML = player.score;
				computerPointsElem.innerHTML = computer.score;
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
				setGamePoints();	
				endGame();	
			
				function endGame(){
					if (player.score == 10 || computer.score == 10) {
						gameState='ended';
						setGameElements();
					}
				}
			}



