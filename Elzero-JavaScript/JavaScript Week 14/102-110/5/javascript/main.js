let div = document.querySelector("div");

function subtra(){
    div.innerText -= 1;
    
    if(div.innerText === "5"){
        window.open("https://elzero.org/", "_blank","width=350,height=350,left=800")
    }
    else if(div.innerText === "0"){
        clearInterval(counter);
    }
}
let counter =setInterval(subtra,1000)