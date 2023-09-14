let vprompt = prompt("Print Number From – To");

let numbers = vprompt.split("-");

if(numbers[0] > numbers[1]){
    for(;numbers[0] >= numbers[1];numbers[1]++){
            document.write(`<br> ${numbers[1]}`);
        }
}
else{
    for(;numbers[0] <= numbers[1];numbers[0]++){
        document.write(`<br> ${numbers[0]}`);
    }
}

