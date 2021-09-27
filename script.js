'use strict'

let secretNumber =Math.trunc(Math.random()* 20) +1;
let score=20;
let highscore=0;
const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // When there is no input
    if(!guess){
        // console.log(document.querySelector('.message').textContent='No number 😈');
        displayMessage('No number 😈');
    }
    /// When player wins
    else if(guess === secretNumber){
    //    document.querySelector('.message').textContent='Correct number 🤗'
    displayMessage('Correct number 🤗');
       document.querySelector('.number').textContent = secretNumber;
       document.querySelector('body').style.backgroundColor='#60b347'
       document.querySelector('.number').style.width = '30rem'
       if(score>highscore){
           highscore=score;
           document.querySelector('.highscore').textContent=score;
       }
      
    }else if(guess !== secretNumber){
        if(score>1)
       {
        // document.querySelector('.message').textContent=guess>secretNumber ?'📉 Too High':'📈 Too Low';
        displayMessage(guess>secretNumber ?'📉 Too High':'📈 Too Low')
        score--;
        document.querySelector('.score').textContent = score;
       }else{
            // document.querySelector('.message').textContent='🧨 You lost the Game';
            displayMessage('🧨 You lost the Game');
            score--;
            document.querySelector('.score').textContent = 0;  
       }
        
        /// When guess is too high
    // }else if(guess > secretNumber){
    //     if(score>1)
    //    {
    //     document.querySelector('.message').textContent='📈 Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //    }
    //    else{
    //     document.querySelector('.message').textContent='🧨 You lost the Game'
    //     score--;
    //     document.querySelector('.score').textContent = 0;
    //    }
    //    /// When guess is too low
    // }else if(guess < secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='📉 Too Low'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent='🧨 You lost the Game'
    //     score--;
    //     document.querySelector('.score').textContent = 0;
    //     }
       
    }
})

/* Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem) */

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15rem';
})

/// Refactoring : It means without changing the code how it works and to eliminate code or remove the duplicate code.