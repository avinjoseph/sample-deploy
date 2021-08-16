'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 14;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess){
        // document.querySelector('.message').textContent = 'No number!🧨🧨';
        displayMessage('No number!🧨🧨');

    }else if(guess === secretNumber){
        // document.querySelector('.message').textContent = 'Right Answer🎉🎉';

        displayMessage('Right Answer🎉🎉');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High🦺🦺' : 'Too Low🥽🥽';
            displayMessage( guess > secretNumber ? 'Too High🦺🦺' : 'Too Low🥽🥽');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = 'You Lost ☠☠☠';

            displayMessage('You Lost ☠☠☠');
            document.querySelector('.score').textContent = 0;
        }
    }
});

    // }else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too High🦺🦺';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You Lost ☠☠☠';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too Low🥽🥽';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You Lost ☠☠☠';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    


document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})