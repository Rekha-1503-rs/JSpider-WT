const quizDB = [
    {
        question: "Q1: What is the full form of HTML",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2:Which of the below is the abbreviation of CSS ?",
        a: "Cascade sheets style",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "Coded Style Sheet",
        ans: "ans3"
    },
    {
        question: "Q3:The property in CSS used to change the text color of an element is",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All of the above",
        ans: "ans2"
    },
    {
        question: "Q4:The HTML attribute used to define the inline styles is",
        a: "style",
        b: "styles",
        c: "class",
        d: "None of the above",
        ans: "ans1"
    },
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')

const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer')

let questionCount = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
    answer = curAnsElem.id;
    }
   
});
return answer;
};

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
});