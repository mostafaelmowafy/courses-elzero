function calculate(firstNum = "", secondNum ="", operation ="add") {
    let result;
    if( firstNum === ""){
        document.write(`<h2>"First Number Not Found"</h2>`);
    }
    else if(secondNum === ""){
        document.write(`<h2>"Secound Number Not Found"</h2>`);
    }
    else{
        switch (operation){
            case 'add' :
                result = firstNum + secondNum;
                break;
            case 'subtract' :
                result = firstNum - secondNum;
                break;
            case 'multiply' :
                result = firstNum * secondNum;
                break;
    }
    document.write(`<h2>The Result Is ${result} </h2>`)
    }
    
    
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600