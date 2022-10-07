let num = 99; // "009"
if(num < 10){
    console.log("00" + num)
}
else if( 10 < num && num < 100){
    console.log("0" + num)
}
else{
    console.log(num)
}
// Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"