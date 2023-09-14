let theNumber = 100020003000;

let fR = [...new Set(theNumber.toString().split(""))].sort().slice(-length+1);
console.log(fR)