var time = 60 ;
document.querySelector("#timer").textContent = time;
var score = 0 ; 
document.querySelector("#scrval").textContent = score;
var hitnum = 0 ;

function makeBubble(){

    var clutter = "" ;
    for (var i = 1 ; i <= 136 ; i ++ )
    {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector("#pbtm").innerHTML= clutter;
}

function runTimer() {

    var timer = setInterval(function(){
        if (time>0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER !!</h1>`
            clearInterval(timer)
        }

        },1000)
}

function hitNum() {
    hitnum = Math.floor(Math.random()*10)
    document.querySelector('#hitnum').textContent = hitnum;
}

function increaseScore() {

    score += 10
    document.querySelector("#scrval").textContent = score;
}
function start() {
    
    document.querySelector("#pbtm")
    .addEventListener("click",function (dets) {
        var comp = Number(dets.target.textContent)
        if (hitnum === comp) {
            increaseScore();
            makeBubble();
            hitNum();
        }
        else{
            hitNum();
            makeBubble();
        }
        
    })    
}

start();
hitNum();
runTimer();
makeBubble();