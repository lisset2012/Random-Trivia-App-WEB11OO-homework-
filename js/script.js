//select elements and create variables
var main = document.querySelector(".main")
var music = document.querySelector(".music")//button music
var history = document.querySelector(".history")//button history
var geography = document.querySelector(".geography")//button geography
var sport = document.querySelector(".sport")//button sport


//define functions
//defining functions for the first 4 buttons

function musicQ() {
    main.innerHTML = `
<div>
<p><b>In what year did Pink FLoyd perform his first concert of The Wall</b></p>
</div>

<div>
    <button class="answerr">1981</button>
    <button class="answerw">1990</button>
</div>`
}

function historyQ() {
    main.innerHTML = `
<div>
<p><b>Ulysses S. Grant appears on the front of which denomination of US. currency</b></p>
</div>

<div>
    <button class="answerr">$50</button>
    <button class="answerw">$100</button>
</div>`
}

function geographyQ() {
    main.innerHTML = `
<div>
<p><b>With over 35 million residents, what is the most populous city in the world?</b></p>
</div>

<div>
    <button class="answerr">Tokyo</button>
    <button class="answerw">Moscow</button>
</div>`
}

function sportQ() {
    main.innerHTML = `
<div>
<p><b>How many holes are there in a full round of golf?</b></p>
</div>

<div>
    <button class="answerr">18</button>
    <button class="answerw">19</button>
</div>`
}

//add event listeners and call the functions
//adding listeners for the 4 first buttons

music.addEventListener('click', function (event){
    musicQ();
})

history.addEventListener('click', function (event){
    historyQ();
})

geography.addEventListener('click', function (event){
    geographyQ();
})

sport.addEventListener('click', function (event){
    sportQ();
})