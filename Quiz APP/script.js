const quizDB=[
    {
        question:"Q1:What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hypertext Makeup Language",
        c:"Hypertext Making Language",
        d:"Hypertext MarkUp Language",
        ans:"ans4"
    },

    {
        question:"Q2:What is the full form of CSS?",
        a:"Cascading style sheets",
        b:"Cascading style sheed",
        c:"Cascading style style",
        d:"Cascading style shift",
        ans:"ans1"
    },

    {
        question:"Q3:What is the full form of HTTP?",
        a:"Hypertext test protocol",
        b:"Hypertext textform protocol",
        c:"Hypertext transfer protocol",
        d:"Hypertext test product",
        ans:"ans3"
    },

    {
        question:"Q4:What is the full form of JSON?",
        a:"javascript object notice",
        b:"javascript object notation",
        c:"javascript option notation",
        d:"javascript object notify",
        ans:"ans2"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answers');

const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;
const loadQuestion=()=>{
    question.innerText=quizDB[questionCount].question;
    option1.innerText=quizDB[questionCount].a;
    option2.innerText=quizDB[questionCount].b;
    option3.innerText=quizDB[questionCount].c;
    option4.innerText=quizDB[questionCount].d;

}

loadQuestion();

const getCheckAnswer=()=>{
       let answer;

       answers.forEach((currElem)=>{
           if(currElem.checked)
           {
               answer=currElem.id;
           }
           
       })
       return answer;
}

const deselectAll=()=>{
    answers.forEach((currElem)=>currElem.checked=false);
}

submit.addEventListener('click',()=>{
  const checkAnswer=getCheckAnswer();
  console.log(checkAnswer);
  if(checkAnswer===quizDB[questionCount].ans)
  {
      score++;
  };

  questionCount++;

  deselectAll();

  if(questionCount<quizDB.length)
  {
      loadQuestion();
  }
  else
  {
      showScore.innerHTML=`
      <h3>You Scored ${score}/${quizDB.length}</h3>
      <button class="btn" onclick="location.reload()">PLAY AGAIN</button>
      `;

      showScore.classList.remove('scoreArea');
  }


});
