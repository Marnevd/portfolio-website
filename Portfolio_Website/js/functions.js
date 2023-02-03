
var answers = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes", "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"];

window.onload = function() {
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var eightball = document.getElementById("eightBall");
    var question = document.getElementById("question");

    eightball.addEventListener("click", function() {
        if (question.value.length < 1) {
            alert('Enter a question!');
        } else {
            eight.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });
};

function changeImg(){
    var image = document.getElementById('imgChange');
    if (image.src.match("indian")) {
        image.src = "Images/kingdom.png";
    }
    else {
        image.src = "Images/indian.png";
    }
}

function hobbySection(number){
    var hobby1 = document.getElementById('section1');
    var hobby2 = document.getElementById('section2');
    var hobby3 = document.getElementById('section3');
    var img1 = document.getElementById('sectionImg1');
    var img2 = document.getElementById('sectionImg2');
    var img3 = document.getElementById('sectionImg3');

    if (number == '1'){
        hobby1.style.display = 'block';
        hobby2.style.display = 'none';
        hobby3.style.display = 'none';
        img1.style.display = 'block';
        img2.style.display = 'none';
        img3.style.display = 'none';
    }
    else if (number == '2'){
        hobby1.style.display = 'none';
        hobby2.style.display = 'block';
        hobby3.style.display = 'none';
        img1.style.display = 'none';
        img2.style.display = 'block';
        img3.style.display = 'none';
    }
    else if (number == 3){
        hobby1.style.display = 'none';
        hobby2.style.display = 'none';
        hobby3.style.display = 'block';
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'block';
    }
}

function activateFun(){
    var fun = document.getElementById('sectionFunContainer');

    if (fun.style.display == 'block'){
        fun.style.display = 'none';
    }
    else{
        fun.style.display = 'block';
    }
}

function loadingSwitch(){
    var body = document.getElementById('body');
    if (body.classList.contains('loading')){
        body.classList.remove('loading');
    } else {
        body.classList.add('loading');
    }
}