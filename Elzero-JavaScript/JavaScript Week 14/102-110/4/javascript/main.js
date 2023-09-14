let div = document.querySelector("div");

function subtra(){
    div.innerText -= 1;
    
    if(div.innerText === "0"){
        location.href ="https://elzero.org/"
    }
}
let counter =setInterval(subtra,1000)