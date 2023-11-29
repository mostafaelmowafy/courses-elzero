let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area")
let submitButton = document.querySelector(".submit button")
let resultsContainer = document.querySelector(".results")
let countdownElement = document.querySelector(".countdown");

let currentIndex = 0,
rightAnswers=0,
countdownInterval;

function getQuestions(){
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            let qCount = questionsObject.length;

            // Create Bullets + Set Questions Count
            createBullets(qCount);

            // Add Question Data
            addQuestionData(questionsObject[currentIndex],qCount)

            // Click On Submit
            submitButton.onclick = ()=>{
                let theRightAnswer = questionsObject[currentIndex].right_answer;

                // Increase Index 
                currentIndex++;

                // Check Answer
                checkAnswer(theRightAnswer, qCount);

                quizArea.innerHTML = "";
                answersArea.innerHTML = "";
                addQuestionData(questionsObject[currentIndex],qCount)

                bulletsSpanContainer.innerHTML = "";
                createBullets(qCount)

                clearInterval(countdownInterval)
                countdown(30,qCount);
            }
            countdown(30,qCount);
        }
    }
    myRequest.open('GET', "../Data/html_questions.json");
    myRequest.send();
}
function createBullets(num){
    countSpan.innerHTML = num;
    for(let i=0; i<num; i++){
        let theBullet = document.createElement("span");

        if(i<=currentIndex){
            theBullet.className = "on"
        }

        bulletsSpanContainer.appendChild(theBullet);
    }
}
function addQuestionData(obj, count){
    if(currentIndex < count){

        // Creat Question Title
        let questionTitle = document.createElement("h2");
        // add title
        questionTitle.innerText = obj.title
        // Append Title to Quize Area
        quizArea.appendChild(questionTitle)

        // Creat The Answers
        for(let i=1; i<=4; i++){
            // Creat Main Answer Div
            let mainDiv = document.createElement("div")

            // Add Class To Main Div
            mainDiv.className = "answer"

            // Creat Radio Input
            let radioInput = document.createElement("input")

            // Add Type + Name + Id + Data-Attribute To Radio Input
            radioInput.type = "radio"
            radioInput.name = "question"
            radioInput.id = `answer_${i}`
            radioInput.dataset.answer = obj[`answer_${i}`]

            // Make First Option Selected
            if (i === 1) {
                radioInput.checked = true;
            }
            // Creat Label
            let theLabel = document.createElement("label")

            // Add For Attribute
            theLabel.htmlFor = `answer_${i}`

            // Creat Label Text
            
            theLabel.innerText = obj[`answer_${i}`];

            // Add Input + Label To Main Div
            mainDiv.appendChild(radioInput);
            mainDiv.appendChild(theLabel);

            // Append All Divs To Answers Area
            answersArea.appendChild(mainDiv);
        }
    }else{
        showResults(count);
    }
}
function checkAnswer(rAnswer, count){
    let answers = document.getElementsByName("question");
    let theChooseAnswer;
    for(let i=0; i<answers.length; i++){
        if(answers[i].checked){
            theChooseAnswer = answers[i].dataset.answer;
            // console.log(theChooseAnswer)
        }
    }
    if(rAnswer === theChooseAnswer){
        rightAnswers++;
        console.log("Good")
    }
}
function showResults(count){
    resultsContainer.style.display ="block"
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();
    bullets.remove();

    if(rightAnswers === count){
        resultsContainer.innerHTML = `<span class='perfect'>Perfect</span> You answer ${rightAnswers} from ${count}`
    }else if(rightAnswers > (count/2) && rightAnswers <count){
        resultsContainer.innerHTML = `<span class='Good'>Good</span> You answer ${rightAnswers} from ${count}`
    }else{
        resultsContainer.innerHTML = `<span class='bad'>Bad</span> You answer ${rightAnswers} from ${count}`
    }
}
function countdown(duration, count){
    if(currentIndex < count){
        let minutes, seconds;
        countdownInterval = setInterval(()=>{
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            countdownElement.innerHTML = `${minutes}:${seconds}`;
            if(--duration < 0){
                clearInterval(countdownInterval);
                submitButton.click();
            }
        },1000)
    }
}
getQuestions();