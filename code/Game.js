const colorDisplay = document.getElementById("display");
const guessDisplay = document.getElementById("guessDisplay");
const guessButton = document.getElementById("guessButton");

const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");

const scoreEL = document.getElementById("score");
const r_scoreEl = document.getElementById("scoreReport");
const roundEl = document.getElementById("round");

const goalHeader = document.getElementById("G_header");

var randomR = 0; 
var randomG = 0;
var randomB = 0;

var colorRange=0;

const MaxScore = 250;

const score =
{
   _score: 0,

   set AddScore(value){
    this._score += value;
    scoreEL.textContent = `Score: ${this._score}`;
    r_scoreEl.textContent = `Score: ${value} / ${MaxScore}`
   },

   set SetScore(value){
    this._score = value;
    scoreEL.textContent = `Score: ${value}`;
    r_scoreEl.textContent = `Score: ${value}`;
   }
}

const round = 
{
    _round: 0,

    set AddRound(value)
    {
        this._round += value; 
        this._setUi(this._round);
    },

    set SetRound(value)
    {
        this._round = value; 
        this._setUi(this._round);
    },

    _setUi: (value) => {
        roundEl.textContent = `Round: ${value} / 10`;

        if(value <= 0){
            roundEl.style.display = "none";
        }
        else{
            roundEl.style.display = "block";
        }
    }
}

round.SetRound=0;

redInput.oninput = ChangeGuessDisplay;
greenInput.oninput = ChangeGuessDisplay;
blueInput.oninput = ChangeGuessDisplay;

guessButton.onclick = () => {
    SetResults();
    SwichGameView();
    Guess(colorRange);
};
 
function SetDisplayColor(){
    randomR = Math.floor(Math.random() * 256); 
    randomG = Math.floor(Math.random() * 256); 
    randomB = Math.floor(Math.random() * 256); 

    colorDisplay.style.backgroundColor = Color(randomR, randomG, randomB);

    console.log(Color(randomR, randomG, randomB));
}    

function ChangeGuessDisplay(){
    var r = redInput.value;
    var g = greenInput.value;
    var b = blueInput.value; 

    guessDisplay.style.backgroundColor = Color(r, g, b);
}


function Guess(range)
{
    var lowR = Math.floor(randomR - range/2);
    var highR = Math.floor(randomR + range/2);

    var lowG = Math.floor(randomG - range/2);
    var highG = Math.floor(randomG + range/2);

    var lowB = Math.floor(randomB - range/2);
    var highB = Math.floor(randomB + range/2);

    var guessR = GetGuessChannel(1);
    var guessG = GetGuessChannel(2);
    var guessB = GetGuessChannel(3);

    var isRedGood = (guessR > lowR && guessR < highR);
    var isGreenGood = (guessG > lowG && guessG < highG);
    var isBlueGood = (guessB > lowB && guessB < highB);

    score.AddScore = CalculateScore(MaxScore);

    if(numberOfRounds > 0){
        r_RestartButton.onclick = StartNewRound;
        r_RestartButton.textContent = "Start New Round";
    }
    else{
        r_RestartButton.onclick = GoToMenu;
        r_RestartButton.textContent = "Go To Menu";
    }
}

function GetGuessChannel(channel){
    switch(channel){
        case 1:
            return Number(redInput.value);

        case 2:
            return Number(greenInput.value);

        case 3:
            return Number(blueInput.value);
    }
}

function CalculateScore(baseScore)
{ 
    var randomAverage = (randomG + randomR + randomB)/3
    var guessAverage = (GetGuessChannel(1) + GetGuessChannel(2) + GetGuessChannel(3))/3

    var scoreMult = randomAverage > guessAverage ? guessAverage/randomAverage : randomAverage/guessAverage;
    var score = Math.floor(baseScore * scoreMult);

    return score >= 0 ? score : 0;
}

function CalculateRange()
{
    var baseRange = 150;
    var roundsTilZero = 20; 
     
    var subRangeBy = (baseRange/roundsTilZero);

    var range = Math.floor(baseRange - (subRangeBy * (round._round)));

    return range;
}


