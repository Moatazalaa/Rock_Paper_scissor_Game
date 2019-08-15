//start game function
const Game = () => {
        let pScore = 0;
        let cScore = 0;
      
        //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
    //play the game
    const playMatch = () =>{
        const options=document.querySelectorAll(".options button");
        const playerHand=document.querySelector(".player-hand");
        const computerHand=document.querySelector(".computer-hand");
        const Hands=document.querySelectorAll(".hands img");
        Hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation='';
            });
        })
        
        const computerOptions=["rock" , "paper" , "scissors" ];
        options.forEach(option => {
            option.addEventListener("click",function(){
                const computerNumber=Math.floor(Math.random() * 3);
                const computerChoice=computerOptions[computerNumber];
                setTimeout(() => {
                    compareHands(this.textContent,computerChoice);
                playerHand.src = `https://github.com/DevEdwin/rock-paper-scissor/blob/master/assets/${this.textContent}.png?raw=true`;
                computerHand.src = `https://github.com/DevEdwin/rock-paper-scissor/blob/master/assets/${computerChoice}.png?raw=true`;
                    
                },2000);
                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";
            });

        });
        
        
    };
const updateScore =() =>{
    const playerScore=document.querySelector(".player-score p");
    const computerScore=document.querySelector(".computer-score p");
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;

};
const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };
    startGame();
    playMatch();
    
    
  };
  Game();
  