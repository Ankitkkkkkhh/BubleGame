let makrBubble=()=>{
    var Clutter=" ";

    for(let i=1 ; i<=147; i++){
        rn=Math.floor(Math.random()*10);
        Clutter+= `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = Clutter
    
}




var Timer=60;
function runTimer (){ //sir code
    let Timeinterval= setInterval(function(){ 
        if (Timer>0) {
          Timer--;
          document.querySelector("#TimerVal").textContent=Timer //bt this run in memory
        }else{
            clearInterval(Timeinterval)//stop this timer 
            document.querySelector("#pbtm").innerHTML=`<h1>Game over your Score is :${score} <br> Good try play again</h1>`
        }   
    },1000)
    }


var Hitrn = 0;
function getNewHitVal(){
    Hitrn= Math.floor(Math.random()*10)
    document.querySelector("#Hitval").textContent = Hitrn
}

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#ScoreVal").textContent = score
}

document.querySelector("#pbtm")
.addEventListener("click",function(deats){
 var clickdNum = Number(deats.target.textContent)
 if (clickdNum===Hitrn) {
    increaseScore();
    makrBubble();
    getNewHitVal();
 }
})


// Add event listener to the reload button

setTimeout(() => {
    let a= document.getElementById('reloadButton')  
        location.reload();       
}, 65000);




makrBubble()
getNewHitVal()
runTimer()



// innerText

//  var Timer=6;
// function runTimer (){ //my code
//     setInterval(function(){ //this fun not asign variable
//         if (Timer===0) {
//           Timer=60
//         }
        
//         Timer--
//         document.querySelector("#TimerVal").textContent=Timer
//     },1000)
//     }