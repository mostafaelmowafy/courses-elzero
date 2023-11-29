let theInput = document.getElementById('the-input'),
allSpans = document.querySelectorAll(".buttons span"),
results = document.querySelector(".results span");


allSpans.forEach(span =>{
    span.addEventListener("click",(e)=>{
        if(e.target.classList.contains("check-item")){
            console.log("check-item")
            checkItem();
        }
        if(e.target.classList.contains("add-item")){
            console.log("add-item")
            addItem();
        }
        if(e.target.classList.contains("delete-item")){
            console.log("delete-item")
            deleteItem();
        }
        if(e.target.classList.contains("show-items")){
            console.log("show-items")
            showItem();
        }
    });
});

function showEmptyMessage(){
    results.innerHTML="Input Can Not Be Empty";
}

function checkItem(){
    if(theInput.value !== ""){
        if(localStorage.getItem(theInput.value)){
            results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;
        }else{results.innerHTML=`No Local Storage Item With The Name <span>${theInput.value}</span>`}
    }else{showEmptyMessage();}
}

function addItem(){
    if(theInput.value !== ""){
        localStorage.setItem(theInput.value, "Added!");
        results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
    }else{showEmptyMessage();}
}

function deleteItem(){
    if(theInput.value !== ""){
        if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Deleted`;
        }else{results.innerHTML=`No Local Storage Item With The Name <span>${theInput.value}</span>`}
    }else{showEmptyMessage();}
}

function showItem(){
    if(localStorage.length){
        results.innerHTML = '';
        for(let[key,value] of Object.entries(localStorage)){
            results.innerHTML += `<span class="keys">${key}</span>`;
        }
    }else{results.innerHTML = `Local Storage Is Empty`;}
}
