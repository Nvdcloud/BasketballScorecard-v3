awayScoreEl = 0 
homeScoreEl = 0

document.getElementById("homescore-el").textContent = homeScoreEl
document.getElementById("awayscore-el").textContent = awayScoreEl

let [milliseconds,seconds,minutes] = [0,0,0]
let timerRef = document.querySelector("#timerdisplay")
let int = null 

document.getElementById("start-timer").addEventListener("click", ()=> {
    if(int !== null) {
        clearInterval(int)
    } int = setInterval(displayTimer, 10)
})  

document.getElementById("pause-timer").addEventListener("click", ()=>{
    clearInterval(int);
})

function displayTimer(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;           
        }
    }


let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

timerRef.innerHTML = `${m} : ${s} : ${ms}`;
}

function home1() { 
    homeScoreEl += 1 
    document.getElementById("homescore-el").textContent = homeScoreEl
}

function home2() { 
    homeScoreEl += 2 
    document.getElementById("homescore-el").textContent = homeScoreEl
}

function home3() { 
    homeScoreEl += 3 
    document.getElementById("homescore-el").textContent = homeScoreEl
}

function away1() {
    awayScoreEl += 1 
    document.getElementById("awayscore-el").textContent = awayScoreEl
}
function away2() {
    awayScoreEl += 2 
    document.getElementById("awayscore-el").textContent = awayScoreEl
}
function away3() {
    awayScoreEl += 3 
    document.getElementById("awayscore-el").textContent = awayScoreEl
}

function newgame() {
    homeScoreEl = 0
    awayScoreEl = 0 
    document.getElementById("homescore-el").textContent = homeScoreEl
    document.getElementById("awayscore-el").textContent = awayScoreEl   
   
}

 document.getElementById("new-btn").addEventListener('click', ()=>{
        clearInterval(int);
        [milliseconds,seconds,minutes] = [0,0,0]
        timerRef.innerHTML = " 00 : 00 : 000 " 
        })