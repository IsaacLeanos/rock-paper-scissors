
let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('computer-score');
const scoreboard_div=document.querySelector('.scoreboard');
const result_p=document.querySelector('.results>p');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

// returns random computer choice
function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
};

// converts users choice ('r' , 'p' , 's') to full word
function convertToWord(letter){
    if(letter==='r')return 'Rock';
    if(letter==='p')return 'Paper';
    if(letter==='s')return 'Scissors';
};

// Increase user scoreboard upon winning & displays results
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML=`${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🔥`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('green-glow');
    },500);
};

// Increase computer scoreboard upon winning & displays results
function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose 😕`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('red-glow');
    },500);
};

function draw(userChoice,computerChoice){
    result_p.innerHTML='It\s a draw.';
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('grey-glow');
    },500);
};

// calls win , loss, draw
function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice,computerChoice);
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,computerChoice);
            break;
        
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,computerChoice);
            break;
    }
};

function main(){
    rock_div.addEventListener('click',function(){
        game('r')
    });
    paper_div.addEventListener('click',function(){
        game('p')
    });
    scissors_div.addEventListener('click',function(){
        game('s')
    });
    
}


main();