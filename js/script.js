//select elements and create variables
var main = document.querySelector(".main")
var music = document.querySelector(".music")//button music
var hist = document.querySelector(".history")//button history
var geography = document.querySelector(".geography")//button geography
var sport = document.querySelector(".sport")//button sport

let musicQSet = document.querySelector(".musicQ")

// var musciq = randomMusicQ(getMusicQ())

let musicQArray = getMusicQ()

var player = {
    score: 0
}


//define functions
//defining functions for the first 4 buttons
function randomMusicQ(musicQArray){
    musicQSet.innerHTML = ""

    var temp = []

    for(var i = 0; i<musicQArray.length)
}

function musicQ() {
    main.innerHTML = `
<div>
<p class = "musicQ"><b>${randomMusicQ()}</b></p>
</div>

<div>
    <button class="musicAnswerRL1">1981</button>
    <button class="musicAnswerWL1">1990</button>
</div>`

    var musicAnswerRL1 = document.querySelector(".musicAnswerRL1")
    var musicAnswerWL1 = document.querySelector(".musicAnswerWL1")

    musicAnswerRL1.addEventListener('click', function (event) {
        player.score += 10;
        main.innerHTML = `
<div>
<h3>Well Done! You just gained ${player.score} points. Keep going! Try the next Trivia</h3>
<p><b>What musician is often referred to as The Fifth Beatle?</b></p>
</div>

<div>
    <button class="musicAnswerRL2">Pete Best</button>
    <button class="musicAnswerWL2">Michael Jackson</button>
</div>`
})


    musicAnswerWL1.addEventListener('click', function (event) {
        main.innerHTML = `
<div>
<h3>:( Wrong answer!</h3>
     <p>Since you answered wrong you are redirected to another Trivia. Get the rigth answer to come back to your track</p>
<p><b>Ulysses S. Grant appears on the front of which denomination of US. currency</b></p>
</div>

<div>
    <button class="musicAnswerRL2">$50</button>
    <button class="musicAnswerWL2">$100</button>
</div>`
    })
}

function historyQ() {
    main.innerHTML = `
<div>
<p><b>Ulysses S. Grant appears on the front of which denomination of US. currency</b></p>
</div>

<div>
    <button class="historyAnswerRL1">$50</button>
    <button class="historyAnswerWL1">$100</button>
</div>`
}

function geographyQ() {
    main.innerHTML = `
<div>
<p><b>With over 35 million residents, what is the most populous city in the world?</b></p>
</div>

<div>
    <button class="geographyAnswerRL1">Tokyo</button>
    <button class="geographyAnswerWL1">Moscow</button>
</div>`
}

function sportQ() {
    main.innerHTML = `
<div>
<p><b>How many holes are there in a full round of golf?</b></p>
</div>

<div>
    <button class="sportAnswerRL1">18</button>
    <button class="sportAnswerWL1">19</button>
</div>`
}

//add event listeners and call the functions
//adding listeners for the 4 first buttons

music.addEventListener('click', function (event) {
    console.log(event)
    musicQ();
})

hist.addEventListener('click', function (event) {
    historyQ();
})

geography.addEventListener('click', function (event) {
    geographyQ();
})

sport.addEventListener('click', function (event) {
    sportQ();
})