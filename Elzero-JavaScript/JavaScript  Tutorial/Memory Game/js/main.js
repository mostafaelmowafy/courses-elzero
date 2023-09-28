let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);
let orderArray = Array.from(Array(blocks.length).keys());
var userName;
var s1,s2,m1,m2;
var triesElement;
window.onload = ()=>{
    var start = document.getElementById('start');
    start.play()
}
const userArray = [];
function myGame(){
    userName = prompt("What's Your Name?");
    
    if(userName == null || userName == ""){
        document.querySelector(".name span").innerHTML = "Unknown";
    }else{
        document.querySelector(".name span").innerHTML= userName;
    }
    document.querySelector(".control-buttons").remove();
    document.getElementById('start').pause();
    blocks.forEach(block => {
        block.classList.remove('has-match');
    });
    
    time()
};

document.querySelector(".control-buttons span").onclick =function (){myGame()}
function time(){
    s1=0;
    s2=0;
    m1=2;
    m2=0;
    document.getElementById('game').play();
    let time = document.querySelector('.time span')
    var intervalId;
    intervalId = setInterval(()=>{
        time.innerHTML = `${m2}${m1}:${s2}${s1}`
        let hasMatch = blocks.filter(f=> f.classList.contains('has-match'));
        if(hasMatch.length == blocks.length){
            window.clearInterval(intervalId)
        }
        console.log(hasMatch)
        if(s1==0 && s2==0){
            if(m1==0){
                if(m2==0){
                    window.clearInterval(intervalId);
                    var timeOut = document.createElement("div");
                    timeOut.className = 'control-buttons'
                    var waring = document.createElement("span");
                    var textnode = document.createTextNode('Time Up!');
                    waring.appendChild(textnode)
                    timeOut.appendChild(waring)

                    var Again = document.createElement("button");
                    Again.className = 'again'
                    
                    var againText = document.createTextNode('Play Again');
                    Again.appendChild(againText)
                    timeOut.appendChild(Again)
                    document.body.appendChild(timeOut)
                    Again.onclick = function (){myGame()}
                    document.getElementById('end').play();
                    document.getElementById('game').pause();
                }else{--m2;m1=9}
            }else{m1=m1-1;s2=5;s1=9}
        }else if(s1==0){
            --s2
            s1=9
        }
        else{
            --s1
        }
    },1000)
}

shuffle(orderArray)
blocks.forEach((block,index)=>{
    block.style.order = orderArray[index]
    block.addEventListener('click',()=>{
        flipBlock(block);
    })
})
function flipBlock (selectedBlock){
    var duration = `${m2}${1 - m1}:${5 - s2}${9 - s1}`
    selectedBlock.classList.add('is-flipped')
    let allFlipped = blocks.filter(f=> f.classList.contains('is-flipped'))
    if(allFlipped.length === 2){
        stopClicking();
        checkMatchedBlocks(allFlipped[0], allFlipped[1]);
    }
    let hasMatch = blocks.filter(f=> f.classList.contains('has-match'));
    if(hasMatch.length == blocks.length){
        var timeOut = document.createElement("div");
        timeOut.className = 'control-buttons'
        var Winner = document.createElement("p");
        Winner.className = 'winner'
        var WinnerText = document.createTextNode(`Congratulation ${userName} ,You win in ${duration}`);
        Winner.appendChild(WinnerText)
        timeOut.appendChild(Winner)
        document.body.appendChild(timeOut)
        
        var Again = document.createElement("button");
        Again.className = 'again'
        var againText = document.createTextNode('Play Again');
        Again.appendChild(againText)
        timeOut.appendChild(Again)
        document.body.appendChild(timeOut)
        Again.onclick = function (){myGame()}
        
        var results = document.querySelector("table");
        var content = `<tr> <td>${userName}</td> <td>${duration}</td> <td> ${triesElement.innerHTML} </td> </tr>`;
        results.innerHTML += content;
        document.body.appendChild(results);
    }
}
function stopClicking(){
    blocksContainer.classList.add('no-clicking');
    setTimeout(()=>{
        blocksContainer.classList.remove('no-clicking');
    },duration)
}
function checkMatchedBlocks(firstBlock, secondBlock) {

    triesElement = document.querySelector('.tries span');

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById('success').play();

    } else {

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        }, duration);

        document.getElementById('fail').play();

    }

}
function shuffle (array){
    let current = array.length,
    temp,
    randomIndex ;
    while(--current > -1) {
        randomIndex = Math.floor(Math.random() * (current + 1));
        temp = array[current];
        array[current]=array[randomIndex];
        array[randomIndex] =temp;
    }
    return array;
}
