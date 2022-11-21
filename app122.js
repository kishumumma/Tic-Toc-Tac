window.addEventListener("load",app);
let gameBoard=["","","","","","","","","",];

let turn=0;
let winner=false;

// create player

const player=(name)=>{
    name=name;
    return(name);
}

let playerX= player("");
let playerY=player(""); 

//initialise the app

function app()
{
    let inputFiled = document.getElementById(".input-field").focus();

    const addPlayers = document.getElementById('player-form');
    addPlayers.addEventListener("submit" , addPlayers);

    let replayButton =document.querySelector(".replay-btn");
    replayButton.addEventListener("click" , reserBoard);
}

// add players

function addPlayers(event){

    event.preventDefault();
    if(this.player1.value=== ''|| this.player2.value===''){
        alert("you must enter name for each filled");
        return;
    }

    const playerFormContainer= document.querySelector(".enter-players");
    const boardMain = document.querySelector(".hide")
}

// 3 ways of writing a function
// function Declaration  function add(a,b){
    // console.log(a+b);
//}

//Function Expression

// const add = function(a,b){
    //console.log(a+b);
//  } add(2,3);

// Arrow Function
// single line of code
//      let add=(a,b)=>a+b;
// console.log(add(3,2));

// multiline of code 
// const great=(a,b)=>{
//     if(a>b)
//     return "a is greater" ;
//     else
//     return "b is greater";
// }
