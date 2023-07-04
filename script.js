const quizData=[
{
    questions: "which place is called the paradise of Nepal?",
    a: "Ilam",
    b: "Jhapa",
    c: "Kathmandu",
    d: "Biratnagar",
    correct: "a"
},{
    questions:"How old is Florin?",
    a: "10",
    b: "20",
    c: "40",
    d: "35",
    correct: 'b'
},
{
    questions:"what is the most used programming language in 2019?",
    a: "Java",
    b: "C++",
    c: "python",
    d: "Javascript",
    correct:'a'
},
{
    questions:"Who is the Presedent of Nepal?",
    a: "Balen Shah",
    b: "Puspa Kamal Dahal",
    c: "Rabi Lamichanne",
    d: "Kp Oli",
    correct:'b'
},
{
    questions: "What does HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Application Programming Interface",
    correct:'a'
}
];
const quiz=document.getElementById("quiz");
const questionE1=document.getElementById("question");
const answerEls=document.querySelectorAll(".answer");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
deselectAnswers();
const currentQuizData= quizData[currentQuiz];
questionE1.innerText=currentQuizData.questions;
a_text.innerText=currentQuizData.a;
b_text.innerText=currentQuizData.b;
c_text.innerText=currentQuizData.c;
d_text.innerText=currentQuizData.d;
}
function getSelected() {
        let answer= undefined;

      answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked=false;
    });

}
    
submitBtn.addEventListener("click",()=> {
    const answer= getSelected();
    //chedk to see the answer
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
            currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    } else{
        quiz.innerHTML=`<h2> you have answered correctly at ${score}/${quizData.length} questions.</h2>`;
    }
}
    });