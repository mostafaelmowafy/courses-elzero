let theName = "Elzero";

let fiA = [...theName.split("")];
console.log(fiA);

let sA = Array.from(theName);
console.log(sA);

let tA = new Array(...theName.split(""));
console.log(tA);

let foA = Array.of(...theName.split(""));
console.log(foA);

let fifA = theName.split("");
console.log(fifA);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']