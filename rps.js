let compAnswerGlobal;
function getComputerChoice () {
    let answers = ['papper', 'scissors', 'rock'];
    compAnswer = Math.floor(Math.random() * answers.length)
    compAnswerGlobal = answer;
    if (answer == 0) {
        console.log ('papper');
    } else if (answer == 1) {
        console.log ('scissors');
    } else {
        console.log ('rock');
    }
}
let userAnswerGlobal;
function playerSelection () {
    let answers = ['papper', 'scissors', 'rock'];
    userAnswer = prompt('please choose: 1. rock 2. paper 3.scissors : ')
    if (userAnswer == 1 || userAnswer == 2 || userAnswer == 3) {
        if (userAnswer == 1) {
            userAnswerGlobal = 2;
            console.log('you choose rock')
        } else if (userAnswer == 2) {
            userAnswerGlobal = 0;
            console.log('you choose papper')
        } else {
            userAnswerGlobal = 1;
            console.log('you choose scissors')
        }
    }
    else {
        console.log ('sorry, you didn\'t choose 1,2 or 3, try again!');
        playerSelection();
    }
}

