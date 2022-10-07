function specialMix(...data) {
    let result = 0 ;
    for(let s = 0; s < data.length; s++){
        let num = parseInt(data[s]) ;
        
        if(Number.isInteger(num ) === false){
            num = 0;
        }
        else {
            result += num;
        }
    }
    if(result === 0){
        return "All Is Strings"
    }
    else{return result}
    
    
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
