
let scoreCounter = document.querySelector("#score-counter");
let emotionTag = document.querySelector("#emotion-tag")
let comment = document.querySelector(".comment");
let incrementValue = 10;
let decrementValue = 10;


// this function switches the emoji based on the score 
function switchEmoji(currentNumber) {
    if(currentNumber < 0) {
        emotionTag.innerHTML = "&#128557;"
        comment.innerHTML = "Feeling So Sad!"
    }else if(currentNumber < 10) {
        emotionTag.innerHTML = "&#128550;"
        comment.innerHTML = "Feeling Sad!"
    }
    else if(currentNumber < 40) {
        emotionTag.innerHTML = "&#128549;"
    }else if(currentNumber > 40 && currentNumber < 60) {
        emotionTag.innerHTML = "&#129299;"
        comment.innerHTML = "Feeling Good!"
    }else if(currentNumber > 60 && currentNumber < 100) {
        emotionTag.innerHTML = "&#129325;"
        comment.innerHTML = "Feeling Awesome!"
    }else if(currentNumber > 100) {
        emotionTag.innerHTML = "&#128131;"
        comment.innerHTML = "I Am So Happy!"
    }
}


// this function increases the score by 10 
// and calls the switch emoji function 
function IncreaseScore() {
    let scoreCounterAsInt = Number(scoreCounter.innerHTML)
    scoreCounterAsInt += incrementValue
    scoreCounter.innerHTML = scoreCounterAsInt

    // the switch emoji function takes the current score count as arguement
    switchEmoji(scoreCounterAsInt)
}


// this function decrease the score by 10 
// and calls the switch emoji function 
function subtractFromNum() {
    let scoreCounterAsInt = Number(scoreCounter.innerHTML)
    scoreCounterAsInt -= decrementValue
    scoreCounter.innerHTML = scoreCounterAsInt

    // the switch emoji function takes the current score count as arguement
    switchEmoji(scoreCounterAsInt)
}




function addToNum() {
    IncreaseScore()
}

function minusFromNumber() {
    subtractFromNum()
}


