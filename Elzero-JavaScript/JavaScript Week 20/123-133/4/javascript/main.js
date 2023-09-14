let myBirthdayOne = new Date(2002,0,16);
let myBirthdayTwo = new Date("2002-01-16T00:00");
let myBirthdayThree = new Date();
myBirthdayThree.setTime(0)
myBirthdayThree.setHours(0)
myBirthdayThree.setFullYear(2002,0,16)

console.log(myBirthdayOne)
console.log(myBirthdayTwo)
console.log(myBirthdayThree)

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"