let output = document.querySelector(".result");
let input = document.querySelector("[name='dollar']");

input.onchange = function(){
    let inputnumber = input.value;
    let Egyptian = (inputnumber * 15.6).toFixed(2);
    output.innerHTML= ` ${inputnumber} USD Dollar = ${Egyptian} Egyptian Pound`
}


