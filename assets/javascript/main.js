const questionBank = [
{question: "What is the capital of Colorado?",
 options: [{id: 1, text: "Denver"}, {id: 2, text: "Boulder"}, {id: 3, text: "Texas"}, {id: 4, text: "Longmont"}],
 answer: 1
},
{question: "What is the capital of Japan?",
 options: [{id: 1, text: "Kyoto"}, {id: 2, text: "Tokyo"}, {id: 3, text: "China"}, {id: 4, text: "Seoul"}],
 answer: 2
},
{question: "What is the capital of England?",
 options: [{id: 1, text: "Paris"}, {id: 2, text: "Los Angeles"}, {id: 3, text: "London"}, {id: 4, text: "Tokyo"}],
 answer: 3
},
{question: "What is the capital of France?",
 options: [{id: 1, text: "Paris"}, {id: 2, text: "Los Angeles"}, {id: 3, text: "London"}, {id: 4, text: "Tokyo"}],
 answer: 1
}
];

let score = 0;
let currentQuestion = 0;

//shuffle function
const shuffle = function(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const gameOver = function(){
    console.log("game over");
}

const chooseAnswer = function(){
    console.log(this.question.options.id);
}


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

const checkAnswer = function(n){
    if(n == questionBank[currentQuestion].answer){
        score++;
        console.log("correct");
        $('#score').html(score);
    }
    else{
        console.log("wrong");
    }
}

$(document).ready(function() {

shuffle(questionBank);
generateQuestion(currentQuestion);

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



});