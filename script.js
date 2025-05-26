let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = document.getElementById("result");

    if (playerChoice === computerChoice) {
        result.textContent = "It's a tie! Both chose " + playerChoice + ".";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        result.textContent = "You win! " + playerChoice + " beats " + computerChoice + ".";
    } else {
        computerScore++;
        result.textContent = "You lose! " + computerChoice + " beats " + playerChoice + ".";
    }

    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
