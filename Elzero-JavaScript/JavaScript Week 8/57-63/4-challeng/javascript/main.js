function checkStatus(a, b, c) {
    let x = [a ,b ,c].sort();
    if(x[2] === true && typeof x[1] === "string"){
        console.log(`Hello ${x[1]}, Your Age Is ${x[0]}, You Are Available For Hire`)
    }
    else if(x[1] === true && typeof x[2] === "string"){
        console.log(`Hello ${x[2]}, Your Age Is ${x[0]}, You Are Available For Hire`)
    }
    else{
        console.log(`Hello ${x[1]}, Your Age Is ${x[0]}, You Are Not Available For Hire`)
    }
    
}
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
