


let gameseq = [];
let userseq = [];
let Btns = ["yellow","red","green","blue"];
btn = document.querySelector("btn");
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game is started");
        user = prompt("enter your name");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
    
}
function levelUp() {
    userseq = [];
    level++;
    h3.innerText= `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randcol = Btns[randIdx];
    let randbtn = document.querySelector(`.${randcol}`);
    gameFlash(randbtn);
    gameseq.push(randcol);
    console.log(gameseq);
}

function CheckAns(idx) {
    if (userseq[idx]===gameseq[idx]){
        if (userseq.length==gameseq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h3.innerHTML = `Game over! <b>${user}</b> your score was <b>${level}</b> </br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout (function() {
            document.querySelector("body").style.backgroundColor = "#252526";
        },250);
        reset();
    }
}

function btnPress () {
    let btn = this; 
    userFlash(btn); 
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    CheckAns(userseq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}
function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}