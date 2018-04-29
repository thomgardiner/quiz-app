//questions
const questionBank = [
{question: "What is the capital of Colorado?",
 options: [{id: 1, text: "Denver"}, {id: 2, text: "Boulder"}, {id: 3, text: "Texas"}, {id: 4, text: "Longmont"}],
 answer: 1,
 image: "colorado.jpeg"
},
{question: "What is the capital of Japan?",
 options: [{id: 1, text: "Kyoto"}, {id: 2, text: "Tokyo"}, {id: 3, text: "China"}, {id: 4, text: "Seoul"}],
 answer: 2,
 image: "japan.jpeg"
},
{question: "What is the capital of England?",
 options: [{id: 1, text: "Paris"}, {id: 2, text: "Los Angeles"}, {id: 3, text: "London"}, {id: 4, text: "Tokyo"}],
 answer: 3,
 image: "england.jpeg"
},
{question: "What is the capital of France?",
 options: [{id: 1, text: "Paris"}, {id: 2, text: "Los Angeles"}, {id: 3, text: "London"}, {id: 4, text: "Tokyo"}],
 answer: 1,
 image: "france.jpeg"
}
];

//variable declarations
let score = 0;
let possibleScore = questionBank.length;
let currentQuestion = 0;
let running = true;

//shuffle function
const shuffle = function(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//game over function, clears the board and displays score
const gameOver = function(){
    $('.answer-button').hide();
    $('#question').html("Your score was " + score + " out of " + possibleScore + " (" + (score / possibleScore * 100) + "%)");
    
    let gameOver = $("<div>");
    gameOver.attr("id", "game-over-message");
    gameOver.html("Click above or press a key to play again!");
    $("#question-area").append(gameOver);
    running = false;
}


//generates questions from the question bank
const generateQuestion = function(n){
    let remainingQuestions = questionBank.length - currentQuestion;
    
    $('#questions-left').html(remainingQuestions);
    if(currentQuestion < questionBank.length){
        $('#question').html('');
        $('#question').html(questionBank[n].question);
        currentQ = questionBank[n];
        for(i=1; i < questionBank[n].options.length+1; i++){
            $('#button'+ i).html(questionBank[n].options[i-1].text);
        }
       
    }
    else{
        gameOver();
    }
}


//confirms the answer matches up with the answer id
const checkAnswer = function(n){
    if(n == questionBank[currentQuestion].answer){
        score++;
        $('#score').html(score);
    }
}

//reset everything
const reset = function(){
    $("#game-over-message").remove();
    currentQuestion = 0;
    score = 0;
    $('#score').html(score);
    generateQuestion(currentQuestion);
    $(".answer-button").show();
    running = true;
}

$(document).ready(function() {

shuffle(questionBank);
generateQuestion(currentQuestion);

//keyboard logic

$('body').keypress(function(event){
    let pressed = event.key;
    if(running == true){
        if(pressed == '1'){
            checkAnswer(1);
            currentQuestion++;
            generateQuestion(currentQuestion);
        }
        else if(pressed == '2'){
            checkAnswer(2);
            currentQuestion++;
            generateQuestion(currentQuestion);
        }
        else if(pressed == '3'){
            checkAnswer(3);
            currentQuestion++;
            generateQuestion(currentQuestion);
        }
        else if(pressed == '4'){
            checkAnswer(4);
            currentQuestion++;
            generateQuestion(currentQuestion);
        }
    }
    else{
        reset();
    }
})


//button logic

$('body').on("click", ".answer-button", function(){
    if(this.id == "button1"){
        checkAnswer(1);
        currentQuestion++;
        generateQuestion(currentQuestion);

    }
    else if(this.id == "button2"){
        checkAnswer(2);
        currentQuestion++;
        generateQuestion(currentQuestion);
    }
    else if(this.id == "button3"){
        checkAnswer(3);
        currentQuestion++;
        generateQuestion(currentQuestion);
    }
    else if(this.id == "button4"){
        checkAnswer(4);
        currentQuestion++;
        generateQuestion(currentQuestion);
    }
})

$('.answer-button').hover(function(){
    let id = this.id;
    $('#' + id).addClass("selected");
}, function(){
    let id = this.id;
    $('#' + id).removeClass("selected");
});


//resets the quiz if game is over 

$('body').on("click", "#question-area", function(){
    if(running === false){
        reset();
    }
})

});