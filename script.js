const box = document.getElementById('box');

const answer = document.querySelectorAll('.answer');
const submit = document.getElementById('submit');

const question = document.getElementById("questions");

const Data =
[
    {
    question: "Which Sharingan User Uses Tsukoyomi Genjutus?",

    c: "Madara Uchiha",
    d: "Sasuke Uchiha",
    a: "Itachi Uchiha",
    b: "Kakashi Uchiha",
    correct: "a"
},
{
    question: "Who is known  Copy Ninja and Uses Thousand Jutsu?",

        a:  "Itachi Uchiha",
        b: "Naruto Uzumaki",
        c: "Kakashi Hatake",
        d: "Minato Namekaze",
        correct: "c",
},
{
    question: "In Attack On Titan, how do the main characters battle against the Titans?",

        a: "With magic spells",
        b: "With giant robots",
        c: "with Omni-Directional Mobility Gear",
        d: "With laser guns",
        correct: "c",
},

{
    question: "Who is Kira in 'Death Note anime?",

        a: "L lawliet",
        b: "ryuk",
        c: "Misa Amane",
        d: "Light Yagami",

        correct: "d",
},

{
    question: "Who is the main Character of FullMetal Alchemist anime?",

    a: "Vicous",
    b: "Roy Mustang",
    c: "Edward Elric",
    d: "Van Hohenheim",

    correct: "c",
},

]
 
const a_text = document.getElementById('atext');

    const b_text = document.getElementById('btext');
    const c_text = document.getElementById('ctext');
    const d_text = document.getElementById('dtext');


    let currentquestion = 0;
    let score = 0;

    function loadQuiz  (){
        deslcet();

        const CurrentQuiz = Data[currentquestion];

        question.innerText = CurrentQuiz.question;

        a_text.innerText = CurrentQuiz.a;

        b_text.innerText = CurrentQuiz.b;
        c_text.innerText = CurrentQuiz.c;
        d_text.innerText = CurrentQuiz.d;




    };

    function deslcet(){
        answer.forEach(answer => 
            answer.checked = false
        )
    };
const getSelected = ()=>{
    const checkedAnswer = Array.from(answer).find(answer =>
        answer.checked);

        return checkedAnswer  ? checkedAnswer.id :undefined;
};


function LoadQuestion (){
    const selectedanswer = getSelected();

    if(selectedanswer && selectedanswer === Data[currentquestion].correct){
        score ++;
    }

    currentquestion++;

    if (currentquestion < Data.length){
        loadQuiz();
    }

    else{
            box.innerHTML = `<div id="result"><h2> Your Answer is ${score} / ${Data.length} question are correct </h2>
            
             <button onclick="window.location.reload()" id="restart"> Restart Quiz </button> </div>`;
    }
};

submit.addEventListener('click', LoadQuestion);

loadQuiz();