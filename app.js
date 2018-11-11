
const userScore=0;
const computerScore=0;
const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('computer-score');
const scoreboard_div=document.querySelector('.scoreboard');
const result_div=document.querySelector('.results');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

// returns random computer choice
function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
};

// 
function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice){
        case 'r':
        return this

        case 'p':
        return this

        case 's':
        return this
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