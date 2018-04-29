const questionBank = [
{question: "What is the capital of Colorado?",
 options: [{id: 1, text: "Denver"}, {id: 2, text: "Boulder"}, {id: 3, text: "Texas"}, {id: 4, text: "Longmont"}],
 answer: 1
},
{question: "What is the capital of Japan?",
 options: [{id: 1, text: "Tokyo"}, {id: 2, text: "Kyoto"}, {id: 3, text: "China"}, {id: 4, text: "Seoul"}],
 answer: 1
},
];

let score = 0;
let currentQuestion = 0;
let currentQ = null;
let answer = null;
let remainingQuestions = questionBank.length;

const gameOver = function(){
    console.log("game over");
}

const chooseAnswer = function(){
    console.log(this.question.options.id);
}


const generateQuestion = function(n){
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
    return console.log("you selected answer " + n);
}

$(document).ready(function() {

generateQuestion(currentQuestion);

$('body').on("click", ".answer-button", function(){
    if(this.id == "button1"){
       console.log("hey-1");
       checkAnswer(1);
       currentQuestion++;
       generateQuestion(currentQuestion);
    }
    else if(this.id == "button2"){
       console.log("hey-1");
       checkAnswer(2);
       currentQuestion++;
       generateQuestion(currentQuestion);
    }
    else if(this.id == "button3"){
       console.log("hey-1");
       checkAnswer(3);
       currentQuestion++;
       generateQuestion(currentQuestion);
    }
    else if(this.id == "button4"){
       console.log("hey-1");
       checkAnswer(4);
       currentQuestion++;
       generateQuestion(currentQuestion);
    }


})



});