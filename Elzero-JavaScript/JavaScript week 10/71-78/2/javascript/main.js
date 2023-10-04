let myString = "EElllzzzzzzzeroo";
let r =[...new Set(myString)] 
let na = r.filter(function(l){
    return  l
}).join("")
console.log(na)
// Elzero