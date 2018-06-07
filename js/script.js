//select elements and create variables
var main = document.querySelector(".main")
var music = document.querySelector(".music")//button music
var hist = document.querySelector(".history")//button history
var geography = document.querySelector(".geography")//button geography
var sport = document.querySelector(".sport")//button sport

// let musicQSet = document.querySelector(".musicQ")
// var musciq = randomMusicQ(getMusicQ())

var musicQArray = getMusicQ()
var historyQArray = getHistoryQ()
var geographyQArray = getGeographyQ()
var sportQArray = getSportQ()

// console.log(musicQArray)

var player = {
    score: 0
}

//define functions
//defining random functions
function randomMusicQ(musicQArray){
    
    let random = Math.floor(Math.random() * musicQArray.length)
    return musicQArray.splice(random, 1)
}

function randomHistoryQ(historyQArray){
    
    let random = Math.floor(Math.random() * historyQArray.length)
    return historyQArray.splice(random, 1)
}

function randomGeogrphyQ(geographyQArray){
    
    let random = Math.floor(Math.random() * geographyQArray.length)
    return geographyQArray.splice(random, 1)
}

function randomSportQ(sportQArray){
    
    let random = Math.floor(Math.random() * sportQArray.length)
    return sportQArray.splice(random, 1)
}

// function randomTopics (arraysOfTopics){
//     let random = Math.floor(Math.random() * arraysOfTopics.length)
//     return arraysOfTopics.splice(random, 1)
// }

// let rTopics = randomTopics(arraysOfTopics)

//defining executer functions

function musicQ(){
    main.innerHTML = `
        <div>
        <p class = "musicQ"><b>${randomMusicQ(musicQArray)}</b></p>
        </div>
        `
        var ans = document.querySelector(".musicq").id
        var buttons = document.querySelector(".musicq").dataset
        console.log(buttons)
        Object.keys(buttons).forEach(function(button, i){
            var b = document.createElement("button")
            b.textContent = buttons[button]
            b.addEventListener("click", function(e){
                console.log(ans)
                if(answersMusic()[ans] === i){
                    musicQ()
                } else {
                    // window.alert(":( Sorry but you answered wrong! Try to anwser correctly to come back to your favorite topic")
                    // let arraysOfTopics = [historyQArray, geographyQArray, sportQArray]
                    // console.log(arraysOfTopics)
                    // for (let i = 0; i < arraysOfTopics.length; i++){
                    //     if(rTopics === arraysOfTopics[i]){
                    //         let index = arraysOfTopics[i]
                    //         con.log(index)
                    //         return arrayOfFunctions[index]
                        }
                    

                
            })
            main.appendChild(b)
        })
            
}

let h = historyQ()
let g = geographyQ()
let s = sportQ()

let arrayOfFunctions = [h,g,s]

function historyQ() {
    main.innerHTML = `
        <div>
        <p class = "historyQ"><b>${randomHistoryQ(historyQArray)}</b></p>
        </div>
        `
        var ans = document.querySelector(".historyq").id
        var buttons = document.querySelector(".historyq").dataset
        console.log(buttons)
        Object.keys(buttons).forEach(function(button, i){
            var b = document.createElement("button")
            b.textContent = buttons[button]
            b.addEventListener("click", function(e){
                console.log(ans)
                if(answersHistory()[ans] === i){
                    historyQ()
                } else {
                    console.log("You are wrong loser!!!")
                }
            })
            main.appendChild(b)
        })
}

function geographyQ() {
    main.innerHTML = `
    <div>
    <p class = "geographyQ"><b>${randomGeogrphyQ(geographyQArray)}</b></p>
    </div>
    `
    var ans = document.querySelector(".geographyq").id
    var buttons = document.querySelector(".geographyq").dataset
    console.log(buttons)
    Object.keys(buttons).forEach(function(button, i){
        var b = document.createElement("button")
        b.textContent = buttons[button]
        b.addEventListener("click", function(e){
            console.log(ans)
            if(answersGeography()[ans] === i){
                geographyQ()
            } else {
                console.log("You are wrong loser!!!")
            }
        })
        main.appendChild(b)
    })
}

function sportQ() {
    main.innerHTML = `
    <div>
    <p class = "sportQ"><b>${randomSportQ(sportQArray)}</b></p>
    </div>
    `
    var ans = document.querySelector(".sportq").id
    var buttons = document.querySelector(".sportq").dataset
    console.log(buttons)
    Object.keys(buttons).forEach(function(button, i){
        var b = document.createElement("button")
        b.textContent = buttons[button]
        b.addEventListener("click", function(e){
            console.log(ans)
            if(answersSport()[ans] === i){
                sportQ()
            } else {
                console.log("You are wrong loser!!!")
            }
        })
        main.appendChild(b)
    })
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