  
    
    const game = () => {
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
        const playerhand=document.querySelector(".player-hand");
        const computerhand=document.querySelector(".computer-hand");
        
        const computer_item=["rock","paper","scissors"];
        options.forEach((option)=>{
            option.addEventListener('click',function(){
                const computernumber=Math.floor(Math.random()*3);
                const computerchoice=computer_item[computernumber];
                
            });

        });
        playerHand.src = `https://github.com/DevEdwin/rock-paper-scissor/blob/master/assets/${this.textContent}.png?raw=true`;
            computerHand.src = `https://github.com/DevEdwin/rock-paper-scissor/blob/master/assets/${computerChoice}.png?raw=true`;
        


    };
    const comparehands = (playerchoice,computerchoice) =>{
        const winner = document.querySelector(".winner");
        //if statement 
        if(playerchoice===computerchoice{
            winner.textContent="it's a tie";
            return;

        }
        //rock
        if(playerchoice==='rock'){
            if(computerchoice==='scissors'){
                winner.textContent="player wins";
                return;

            }else{
                winner.textContent="computer wins";
                return;
            };
        };
        if(playerchoice==='paper'){
            if(computerchoice==='scissors'){
                winner.textContent="computer wins";
                return;

            }else{
                winner.textContent="player wins";
                return;
            };
        };

        if(playerchoice==='scissors'){
            if(computerchoice==='rock'){
                winner.textContent="player wins";
                return;

            }else{
                winner.textContent="computer wins";
                return;
            };
        };
        


    }
    startGame();
  };
  game();
  