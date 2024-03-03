let target=document.getElementById("countel");

let count=0;
function inc() {
    count+=1;
    target.textContent=count;
}

function dec() {
    count-=1;
    target.textContent=count;
}

function rest(){
    count=0;
    target.textContent=count;
}

let saveEl=document.getElementById("save-btn");
let countptr=0;

function save() {
    countptr=count +", ";
    saveEl.textContent+=countptr;
}