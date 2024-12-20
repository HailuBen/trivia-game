//      ~ PSEUDOCODE & EXPLANATIONS ~ 

//  ~?~ What do I want the user to see when entering the site?
    //  The user will see the homepage that will display the first question with its possible answers which will be a random selection from the array of questions.

//  ~?~ What will the user do when entering the site?
    //  The user will be prompted by a message appearing around the game container element to select an option (being one of the answer buttons). They will press one of the buttons, or press the help icon that will explain the game, similar to a the Wordle question mark help button/tab

//  ~?~ What will happen after the user selects an answer button?
    //  The game will confirm that the user selected the correct choice (click your answer button again to confirm or select another answer button to change, if they select another button, do same loop) 
    //  Then run the game logic; 
        //  if the user has selected the incorrect option, highlight the answer they have chosen RED and play incorrect sfx.  
        //  else if the user has selected the correct answer, highlight their answer as GREEN
        //  (Do not highlight the correct answer in the incorrect case, this will make the user want to attempt the quiz again) 

// Import the questions object from questions.js file
import { questions } from './questions.js'

const questionContainerElement = document.querySelector('.question-container');
const questionElement = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answer-button');
let counter=0;

function loadQuestion(){
    //Variable to hold random question based on questions in questions.js array object
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    //Update question class to hold random questions
    questionElement.textContent = randomQuestion.question;
    //Sort the answers in a random/shuffled order
    const shuffledAnswers = randomQuestion.answers.sort(() => Math.random() - 0.5);
    //Declare variable to hold correct/incorrect result


    //Sets each shuffled button answer 
    answerButtons.forEach((button, index) => { 
        const answerSpan = button.querySelector('.answer-span'); answerSpan.textContent = shuffledAnswers[index].text;
        button.addEventListener('click', () => { 
            const isCorrect = shuffledAnswers[index].correct; 
            console.log(answerSpan.textContent + ": " + isCorrect);
            if (isCorrect){
                startGame();
            }else{
                resetGame();
            }
        }); 
    });
}
loadQuestion();

function resetGame(){
    alert("Incorrect.");
}

function startGame(){
    alert("Correct!");
    // Start counting score/money, start timer, etc.
}

