let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let na = mix.map(function(l){
    return isNaN(parseInt(l)) ? l : "";
}).reduce(function(lb,lc){
    return `${lb}${lc}`
});
console.log(na)