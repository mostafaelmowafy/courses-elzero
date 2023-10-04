let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let num = numsAndStrings.filter(function(l){
    return !isNaN(parseInt(l))
}).map(function(l){
    return -l
})
console.log(num)
// [-1, -10, 10, 20, -5, -3]
