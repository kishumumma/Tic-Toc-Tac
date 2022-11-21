const box =document.getElementById('container');
const arr =[];
let forwardMove="X";



function gameDraw(){
    let val = true;
    arr.forEach(({state})=>{
        if(state == "") 
        val = false;

    });

    return val;
};

function Over(info){
    document.getElementById("won").innerHTML=info;
    box.style.display="none";
    document.getElementById("gOver").style.display="block";
}

function Won(){
    const row =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

for(let i=0;i < row.length ;i++){

    const [ x,y,z]= row[i];

    if(
        arr[x].state !=="" &&
        arr[x].state === arr[y].state &&
        arr[x].state=== arr[z].state
    )
    {
        return true;
    }
}
return false;
}

class SquareArr{
    constructor(ele ,ind){
        this.ele=ele;
        this.ind=ind;
        this.state="";
    }

    whenClicked(){
        this.state=forwardMove;
        this.ele.classList.remove("notCLicked");
        this.ele.onclick= function() {

            return false;
        };

        this.ele.querySelector("p").innerText=this.state;
        if(Won()) return Over("The Winner of the game is " + this.state);
        if(gameDraw()) return Over("the game is draw");

        forwardMove =="X" ? (forwardMove="0"):(forwardMove="X");
    }
}

for(let i=0; i < 9; i++){
    const div = document.createElement("div");
    div.classList.add("squ" , "notcclicked");
    const squ = new SquareArr(div,i);
    div.onclick= function(){
        squ.whenClicked();
    };

    div.appendChild(document.createElement("p"));
    box.appendChild(div);
    arr.push(squ);


}