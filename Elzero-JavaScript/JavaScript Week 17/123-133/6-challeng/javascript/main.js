// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

let sizeOfNumber = chars.filter(function(e){
    if(typeof(e) === "number"){
        return e
    }
}).length

chars.sort()
// console.log() ;
console.log(chars.copyWithin(0,sizeOfNumber ,sizeOfNumber*2))
