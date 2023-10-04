let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log([].concat(...myArray).join(""));

let newarray = myArray.reduce(function(la,lc){
  return la.concat(lc)
},[]).join("");
console.log(newarray)
// Elzero