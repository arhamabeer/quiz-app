var quizQuestions = [
    {
        question : "Which is the part of the computer system that one can physically touch?",
        right : "hardware",
        options : [
            "data",
            "operating systems",
            "hardware",
            "software"
        ]
    },
    {
        question : "IC chips used in computers are usually made of:",
        right : "Silicon",
        options : [
            "Lead",
            "Silicon",
            "Chromium",
            "Gold"
        ]
    },
    {
        question : "Which of the following is not an example of an Operating System?",
        right : "Microsoft Office XP",
        options : [
            "Windows 98",
            "BSD Unix",
            "Microsoft Office XP",
            "Red Hat Linux"
        ]
    },
    {
        question : "One Gigabyte is approximately equal is:",
        right : "1000,000,000 bytes",
        options : [
            "1000,000 bytes",
            "1000,000,000 bytes",
            "1000,000,000,000 bytes",
            "None of these"
        ]
    },
    {
        question : "Which of the following is not an input device?",
        right : "VDU",
        options : [
            "Mouse",
            "Light pen",
            "Keyboard",
            "VDU"
        ]
    },
    
]

var quesLen = quizQuestions.length -1;
var questionCount = 0;
var score = 0;

function showQues(e){
    var ques = document.getElementById('question');
    ques.innerHTML = quizQuestions[e].question;
    var opt = document.getElementsByClassName('opt')
    for(var i = 0; i< opt.length ; i++){
        opt[i].textContent = quizQuestions[e].options[i];
    }
}



function avtiveClass(e){
    removeActice();
    e.classList.add('active')
}

function removeActice(){
    var active = document.getElementsByClassName('active')
    for(var i = 0 ; i < active.length ; i++){
        active[i].classList.remove('active')
    }
}


function result(e){
    var active = document.getElementsByClassName('active')
    if(active[0].innerHTML == quizQuestions[e].right){
        score++;
    }
    console.log(score);
}



function nextQues(){
    if(questionCount === quesLen){
        var main = document.getElementById('main');
        main.style.display = 'none'
        var res = document.getElementById('result_div');
        res.style.display = "block"
        
        var scc = document.getElementById('score') 
        scc.innerHTML = score;
        
        var res = document.getElementById('res')
        if(score < 3 ){
            res.innerHTML = "<b> You are FAILED </b>"
        }
        else{
            res.innerHTML = "<b> You are PASSED </b>"
        }
    }
     
    result(questionCount)
    questionCount++;
    var nextBtn = document.getElementById('nextBtn');
    showQues(questionCount);
    removeActice();
}

