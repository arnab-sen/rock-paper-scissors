function computerPlay() {
  /*CPU AI, currently just returns a selection at random*/
  var choices = ["paper", "scissors", "rock"];
  var choice = choices[Math.floor(Math.random() * 3)];

  return choice;
}

function userPlay() {
  /*Returns the user's selection */
  var choice = "";
  var validChoice = true;
  var promptMessage = "Choose between paper, scissors, and rock:";
  do {
    choice = prompt(promptMessage).toLowerCase();
    promptMessage = "Invalid input. Choose between paper, scissors, or rock:";
    
    if (!(choice == "paper" | choice == "scissors" | choice == "rock")) {
    validChoice = false;
    } else {validChoice = true;}
  } while (validChoice == false);
   
  return choice;
}

function playRound(userSelection, computerSelection) {
/* Determines the current round's winner*/
  console.log(userSelection, computerSelection);

  var roundChoices = `Player 1 picked ${userSelection} and player 2 picked ${computerSelection}.`;
  var weaknesses = {"paper" : "scissors",
                    "rock" : "paper",
                    "scissors" : "rock"}
  if (userSelection == computerSelection) {
    alert(`Draw! Both players chose ${userSelection}`);
  } else if (computerSelection == weaknesses[userSelection]) {
    alert(roundChoices + " Player 2 wins!");
  } else {
    alert(roundChoices + " Player 1 wins!");
  }
}

while (true) {
  /* Main loop; cancel dialogue box to quit*/
  var p1 = userPlay();
  var cpu = computerPlay();
  playRound(p1, cpu);
}
