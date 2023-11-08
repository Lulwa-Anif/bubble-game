function makeBubble() {
var clutter="";
for(var i=1;i<=102;i++) {
    rn=Math.floor(Math.random()*10);  //math.random->gives random number between 0 & 1 thats why we we multiply by 10 ...and math.floor -> gives int value it cut the number after decimal
    clutter += `<div class="bubble">${rn}</div>`; // in backtick the ${} syntex replace the value of variable
}
document.querySelector(".pbtm").innerHTML=clutter;
}

var timer=60;
function runtimer() {
    inttimer=setInterval(function() { //setinterval-> after every 1 second it run the function
        if(timer>0) {
            timer--;
            document.querySelector("#timerval").textContent=timer; //textcontent means -> it only return the text of given div
        }
        else {
            clearInterval(inttimer);
            document.querySelector(".pbtm").innerHTML="<h1>Game Over</h1>";
           
        }
     
    },1000)
}
var hitRandom=0;
function getNewHit() {
    hitRandom=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitRandom;
}

var score=0;
function increaseScore() {
    score=score+10;
    document.querySelector("#scoreval").textContent=score;
      
}


function getnumber() {
    document.querySelector(".pbtm").addEventListener("click",function(dets) {
        bubbleval=Number(dets.target.textContent);
        if(hitRandom==bubbleval) {
            increaseScore();
            getNewHit();
        }
    })

}

makeBubble();
runtimer();

getNewHit();
getnumber();
