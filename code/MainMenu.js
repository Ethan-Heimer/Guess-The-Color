const Body = document.getElementsByTagName("body")[0];
const PlayButton = document.getElementById("Play");
const Game = document.getElementById("Game");
const Menu = document.getElementById("Menu");
const Results = document.getElementById("Results");

var numberOfRounds = 10;  

SetBackgroundColor();

setInterval(SetBackgroundColor, 2000);
PlayButton.addEventListener('click', () => {
    ChangeToGame() 
    StartGame()}
    )

function SetBackgroundColor(){
    Body.style.backgroundColor = GetRandomColor();
}

function GetRandomColor(){
    var r = Math.floor(Math.random() * 128); 
    var g = Math.floor(Math.random() * 128); 
    var b = Math.floor(Math.random() * 128); 

    return Color(r+128, g+128, b+128);
}

function ChangeToGame(){
    Game.style.opacity = 1;
    Menu.style.opacity = 0; 

    PlayButton.style.display = "none";
}

function SwichGameView()
{
    Game.style.transform = "translateY(-120vh)"; 
    Results.style.transform = "translateY(-115vh)";
}

function StartGame()
{
    colorRange = CalculateRange(); 

    redInput.value = 0;
    blueInput.value = 0;
    greenInput.value = 0;

    round.AddRound = 1; 

    ChangeGuessDisplay();
    SetDisplayColor();
    
    goalHeader.textContent = `Guess the Color within ${colorRange} color values`;

    numberOfRounds--;
}

function EndGame(){
    round.SetRound=0;
    score.SetScore=0;

    varmberOfRounds = 10; 
}

function Color(r, g, b){
    return `rgb(${r},${g},${b})`;
}

