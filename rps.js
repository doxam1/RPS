let compAnswerGlobal;
let compAnswerGlobalString;
function getComputerChoice () {
    let answers = ['papper', 'scissors', 'rock'];
    compAnswer = Math.floor(Math.random() * answers.length)
    compAnswerGlobal = +compAnswer;
    if (compAnswer == 0) {
        compAnswerGlobalString = ('papper');
        console.log ('comp choose papper');
    } else if (compAnswer == 1) {
        console.log ('comp choose scissors');
        compAnswerGlobalString = ('scissors');
    } else {
        console.log ('comp choose rock');
        compAnswerGlobalString = ('rock')
    }
}
let userAnswerGlobal;
let userAnswerGlobalString;
function playerSelection () {
    let answers = ['papper', 'scissors', 'rock'];
    userAnswer = prompt('please choose: 1. rock 2. paper 3.scissors : ')
    if (userAnswer == 1 || userAnswer == 2 || userAnswer == 3) {
        if (userAnswer == 1) {
            userAnswerGlobal = +2;
            userAnswerGlobalString = 'rock';
            console.log('you choose rock')
        } else if (userAnswer == 2) {
            userAnswerGlobalString = 'papper';
            userAnswerGlobal = +0;
            console.log('you choose papper')
        } else {
            userAnswerGlobal = +1;
            userAnswerGlobalString = 'scissors';
            console.log('you choose scissors');
        }
    }
    else {
        console.log ('sorry, you didn\'t choose 1,2 or 3, try again!');
        playerSelection();
    }
}
function playRound () {
    playerSelection();
    getComputerChoice();
    console.log(compAnswerGlobal, userAnswerGlobal);
    (userAnswerGlobal == 2 && compAnswerGlobal == 1) ||
    (userAnswerGlobal == 1 && compAnswerGlobal == 0) ||
    (userAnswerGlobal == 0 && compAnswerGlobal == 2) ?
    console.log ('You Win! ' + userAnswerGlobalString + ' is stronger then ' + compAnswerGlobalString) :
    (compAnswerGlobalString == userAnswerGlobalString) ? 
    console.log ('It\'s a tie! you both choose ' + compAnswerGlobalString) :
    console.log ('you lose! ' + compAnswerGlobalString + ' is stronger then ' + userAnswerGlobalString);

    // if (parseInt(compAnswerGlobal) > parseInt(userAnswerGlobal)) {
    //     console.log ('you lose! ' + compAnswerGlobalString + ' is stronger then ' + userAnswerGlobalString);
    // } else if (parseInt(userAnswerGlobal) > parseInt(compAnswerGlobal)) {
    //     console.log ('You Win! ' + userAnswerGlobalString + ' is stronger then ' + compAnswerGlobalString);
    // } else {
    //     console.log ('It\'s a tie! you both choose ' + compAnswerGlobalString);
    // }
}


// need to fix the winning algo, rock always wins right now.
// shoud be rock win scissors, scissors wins papper, papper wins rock, 




