let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let zl = myString[myString.length - true];

let solution = myString.split("")
.map((l) => l.replace("_" ," "))
.filter((l)=>isNaN(parseInt(l)) && !(l === zl) && !(l === ","))
.reduce((la ,lc)=>(la === lc)? `${la}` : `${la}${lc}`);


console.log(solution); // Elzero Web School

