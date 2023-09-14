let div = document.querySelector("div");

function subtra(){
    div.innerText -= 1;
    
    if(div.innerText === "0"){
        clearInterval(counter);
    }
}
let counter =setInterval(subtra,1000)

