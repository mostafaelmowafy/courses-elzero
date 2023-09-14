let number = document.querySelector(".input");

let text = document.querySelectorAll(".input")[1];

let type = document.querySelectorAll(".input")[2];

let result = document.getElementsByClassName("results")[0];

let create = document.querySelector("[name='create']")
document.forms[0].onsubmit = function (e){
    result.innerHTML =""
    let numbervalue = +number.value; 
    console.log(numbervalue);
    let textvalue = text.value;
    console.log(textvalue);
    let typevalue = type.value;
    console.log(typevalue)
    for(i=0; i< numbervalue ; i++){
    if(typevalue === "Div"){
        let mydiv =document.createElement("div")
        let content = document.createTextNode(textvalue)
        mydiv.appendChild(content);
        mydiv.setAttribute("id" ,`id-${i+1}`)
        mydiv.setAttribute("class" ,"box")
        result.appendChild(mydiv);
        mydiv.style.cssText ="color: white; padding:20px;margin:40px; background-color:black;border-radius:5px;"
        result.style.cssText ="display:flex;flex-wrap:wrap;"
    }
    else{
        let mysection = document.createElement("section")
        let content = document.createTextNode(textvalue)
        mysection.appendChild(content);
        mysection.setAttribute("id" ,`id-${i+1}`)
        mysection.setAttribute("class" ,"box")
        result.appendChild(mysection);
        mysection.style.cssText ="color: white; padding:20px;margin:40px; background-color:orange;border-radius:5px;"
        result.style.cssText ="display:flex;flex-wrap:wrap;"
    }
}
e.preventDefault();
}

