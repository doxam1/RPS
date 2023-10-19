let compAnswerGlobal;
let compAnswerGlobalString;
function getComputerChoice () {
    let answers = ['paper', 'scissors', 'rock'];
    compAnswer = Math.floor(Math.random() * answers.length)
    compAnswerGlobal = +compAnswer;
    if (compAnswer == 0) {
        compAnswerGlobalString = ('paper');
        console.log ('comp choose paper');
    } else if (compAnswer == 1) {
        console.log ('comp choose scissors');
        compAnswerGlobalString = ('scissors');
    } else {
        console.log ('comp choose rock');
        compAnswerGlobalString = ('rock')
    }
}
const playerImg = document.querySelector('.img');
playerImg.innerHTML = '<img src="./rock.png" width="60px">'
const userAnswerSelect = document.querySelector('.userAnswer');

const userAnswerSelectOptions = document.querySelector('select');
userAnswerSelectOptions.addEventListener('click', changePlayerImg);

function changePlayerImg() {
if (userAnswerSelectOptions.value == 'rock'){
    playerImg.innerHTML = '<img src="./rock.png" width="60px">';
 } else if (userAnswerSelectOptions.value == 'scissors'){
    playerImg.innerHTML = '<img src="./scissors.png" width="60px">';
 } else playerImg.innerHTML = '<img src="./paper.png" width="60px">';
};

const compAnswerImg = document.querySelector('.compImg');
// userAnswerSelectOptions.addEventListener('change', changeCompImg);

function changeCompImg() {
    if (compAnswerGlobalString == 'rock'){
        compAnswerImg.innerHTML = '<img src="./rock.png" width="60px">';
     } else if (compAnswerGlobalString == 'scissors'){
        compAnswerImg.innerHTML = '<img src="./scissors.png" width="60px">';
     } else compAnswerImg.innerHTML = '<img src="./paper.png" width="60px">';
    };


function playerSelection () {
    userAnswer = userAnswerSelect.value;
    if (userAnswer == 1 || userAnswer.toLowerCase() == 'paper'|| userAnswer == 2 || userAnswer.toLowerCase() == 'rock' ||
    userAnswer == 3 || userAnswer.toLowerCase() == 'scissors') {
        if (userAnswer == 1 || userAnswer.toLowerCase() == 'rock') {
            userAnswerGlobal = +2;
            userAnswerGlobalString = 'rock';
            console.log('you choose rock');
        } else if (userAnswer == 2 || userAnswer.toLowerCase() == 'paper') {
            userAnswerGlobalString = 'paper';
            userAnswerGlobal = +0;
            console.log('you choose paper')
        } else if (userAnswer == 3 || userAnswer.toLowerCase() == 'scissors') {
            userAnswerGlobal = +1;
            userAnswerGlobalString = 'scissors';
            console.log('you choose scissors');
        }
    } else {
        confirm ('sorry, you didn\'t choose 1,2 or 3, try again?') ? playerSelection():
        location.reload();
    }}


let compWin = 0;
let playerWin = 0;
let drawResult = 0;
function playRound () {
    playerSelection();
    getComputerChoice();
    if (
    (userAnswer == 'rock' && compAnswerGlobal == 1) ||
    (userAnswer == 'scissors' && compAnswerGlobal == 0) ||
    (userAnswer == 'paper' && compAnswerGlobal == 2)) { 
    alert ('You Win! ' + userAnswerGlobalString + ' is stronger then ' + compAnswerGlobalString);
    playerWin = ++playerWin;
    console.log ('player wins this round')
    document.getElementById('playerResult').innerHTML = playerWin;
    } else if    
    (compAnswerGlobalString == userAnswer) { 
    alert ('It\'s a tie! you both choose ' + compAnswerGlobalString);
    drawResult = ++drawResult;
    document.getElementById('drawResult').textContent = drawResult;
    userAnswerGlobalString = 'break';
    console.log ('this round is a tie')
    } else if ((compAnswerGlobal == 2 && userAnswer == 'scissors') ||
    (compAnswerGlobal == 1 && userAnswer == 'paper') ||
    (compAnswerGlobal == 0 && userAnswer == 'rock')) {
    alert ('you lose! ' + compAnswerGlobalString + ' is stronger then ' + userAnswer);
    compWin = ++compWin;
    document.getElementById('compResult').textContent = compWin;
    console.log('computer wins this round')
    userAnswerGlobalString = 'break';
    }
    changeCompImg()
    
}

// show game scores.
function showResults() {
    document.getElementById('compResult').innerHTML = compWin;
    document.getElementById('playerResult').innerHTML = playerWin;
    document.querySelector(".drawResult").textContent = drawResult;
    
}



function playFiveRounds () {
    playRound();
    if (compWin+playerWin+drawResult == 5) {
        const userControls = document.querySelectorAll('.userControls')
        userControls[1].setAttribute('style', 'display:none')
        userControls[0].setAttribute('style', 'display:none')
        userControls[2].setAttribute('style', 'display:none')
        const endResult = document.querySelector('.endResult');
        endResult.textContent = 'Thank you for playing!'
        const playAgain = document.createElement('button');
        playAgain.textContent = 'play again';
        endResult.appendChild(playAgain);
        showEndResults();
        playAgain.onclick = function() {
            location.reload();  
        }


    }

}

const results = document.querySelector('#results')
function showEndResults () {
    if (compWin > playerWin) {
        // alert ('Sorry you lose! try again. \n\rthe results: ' + compWin + ':' + playerWin);
        results.textContent = 'Sorry you lose! try again. \n\rthe results: ' + compWin + ':' + playerWin;
    } else if (playerWin > compWin) {
        // alert ('You won! \r\nthe results: ' + playerWin + ':' + compWin);
        results.textContent = 'You won! \r\nthe results: ' + playerWin + ':' + compWin;
    } else {   
        // alert ('it\'s a tie! \r\nthe results: ' + playerWin + ':' + compWin);
        results.textContent = 'It\'s a tie! \r\nthe results: ' + playerWin + ':' + compWin;
    }
}
