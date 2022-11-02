const r_RandomColorDisplay = document.getElementById("r_display");
const r_GuessColorDisplay = document.getElementById("r_guessDisplay");
const r_RandomColorText = document.getElementById("r_randomColorText");
const r_GuessColorText = document.getElementById("r_guessColorText");
const r_ResultHeader = document.getElementById("r_resultHeader");

const r_RestartButton = document.getElementById("restartButton");

function SetResults()
{
    var rColor = Color(randomR, randomG, randomB);
    var gColor = Color(GetGuessChannel(1), GetGuessChannel(2), GetGuessChannel(3));

    r_RandomColorDisplay.style.backgroundColor = rColor;
    r_GuessColorDisplay.style.backgroundColor = gColor;

    r_RandomColorText.textContent = rColor;
    r_GuessColorText.textContent = gColor;

    r_ResultHeader.textContent = `Guess the Color within ${colorRange} color values`;


}

function StartNewRound()
{
    TransitionToGuess();

    StartGame();
}

function GoToMenu()
{
    TransitionToGuess();
    SwitchMenu();
    EndGame();
}

function SwitchMenu()
{
    Game.style.opacity = 0;
    Menu.style.opacity = 1; 

    PlayButton.style.display = "block";
}

function TransitionToGuess(){
    Game.style.transform = "translateY(-35vh)"; 
    Results.style.transform = "translateY(0px)";
}

