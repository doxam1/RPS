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
let userAnswer;
let userAnswerGlobal;
let userAnswerGlobalString;
function playerSelection () {
    userAnswer = prompt('please choose:\r\n 1. rock 2. paper 3.scissors - \r\nenter number or text:');
    if (userAnswer === null || userAnswer === undefined || userAnswer === "") {
        userAnswerGlobalString == 'break';
        confirm ('sorry, you didn\'t choose 1,2 or 3, try again?') ? playerSelection():
        location.reload(true);
    } else if (userAnswer == 1 || userAnswer.toLowerCase() == 'paper'|| userAnswer == 2 || userAnswer.toLowerCase() == 'rock' ||
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
        } else {
        confirm ('sorry, you didn\'t choose 1,2 or 3, try again?') ? playerSelection():
        location.reload();
    }
}
}

let compWin = 0;
let playerWin = 0;
let drawResult = 0;
function playRound () {
    playerSelection();
    getComputerChoice();
    console.log(compAnswerGlobal, userAnswerGlobal);
    if (userAnswerGlobalString == 'break') {
        showEndResults();
        showResults();
    }
    else if (
    (userAnswerGlobal == 2 && compAnswerGlobal == 1) ||
    (userAnswerGlobal == 1 && compAnswerGlobal == 0) ||
    (userAnswerGlobal == 0 && compAnswerGlobal == 2)) { 
    alert ('You Win! ' + userAnswerGlobalString + ' is stronger then ' + compAnswerGlobalString);
    playerWin = ++playerWin;
    console.log ('player wins this round')
    userAnswerGlobalString = 'break';
    // document.getElementById('playerResult').innerHTML = playerWin;
    } else if    
    (compAnswerGlobalString == userAnswerGlobalString) { 
    alert ('It\'s a tie! you both choose ' + compAnswerGlobalString);
    drawResult = ++drawResult;
    userAnswerGlobalString = 'break';
    console.log ('this round is a tie')
    } else if ((compAnswerGlobal == 2 && userAnswerGlobal == 1) ||
    (compAnswerGlobal == 1 && userAnswerGlobal == 0) ||
    (compAnswerGlobal == 0 && userAnswerGlobal == 2)) {
    alert ('you lose! ' + compAnswerGlobalString + ' is stronger then ' + userAnswerGlobalString);
    compWin = ++compWin;
    console.log('computer wins this round')
    userAnswerGlobalString = 'break';
    // document.getElementById('compResult').innerHTML = compWin;
    }
}

// show game scores.
function showResults() {
    document.getElementById('compResult').innerHTML = compWin;
    document.getElementById('playerResult').innerHTML = playerWin;
    document.querySelector(".drawResult").textContent = drawResult;
    // compResult.innerText = compWin;
    // playerResult.innerText = playerWin;
}



function playFiveRounds () {
    let results = document.getElementById('results');
    let i=0;
    while (i < 5) {
        //i'm doing it like that because otherwise it doesn't work like i want in chrome. (but works when using firefox)
        if (i==0) confirm ('let\'s play five rounds, ok?') ?  playRound() : i=5;
        if (i==1) confirm ('next round?') ? playRound() : i=5;
        if (i==2) confirm ('next round?') ? playRound() : i=5;
        if (i==3) confirm ('next round?') ? playRound() : i=5;
        if (i==4) confirm ('next round?') ? playRound() : i=5;
        showResults();
        i = ++i;
    }
    // for (let i = 0; i < 5; ++i) {
    //     playRound();        
    //     showResults();        
    // }
    showEndResults();
}

function showEndResults () {
    showResults();
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
    compWin = 0;
    playerWin = 0;
    drawResult = 0;
}
