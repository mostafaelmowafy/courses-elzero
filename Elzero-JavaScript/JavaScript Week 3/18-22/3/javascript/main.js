let num = "10";

// Solution Two
console.log(+num + +num  +false); // 20

// Solution Three
console.log( num++ + --num); // 20

// Solution One
console.log(num += num); // 20

// Solution Four
console.log(num * true); // 20