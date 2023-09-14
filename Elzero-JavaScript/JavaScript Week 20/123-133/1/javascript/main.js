let sdate = new Date();
let myBirthday = new Date("2002 1 16");
let dif = sdate - myBirthday ;

let dateSeconds = parseInt(dif /1000) ;
console.log(`${dateSeconds} Seconds`);

let dateMinutes = parseInt(dateSeconds /60) ;
console.log(`${dateMinutes} Minutes`);

let dateHours = parseInt(dateMinutes /60);
console.log(`${dateHours} Hours`);

let dateDays = parseInt(dateHours /24) ;
console.log(`${dateDays} Days`);

let dateMonths = parseInt(dateDays /30) ;
console.log(`${dateMonths} Months`);

let dateYears = parseInt(dateMonths /12) ;
console.log(`${dateYears} Years`);

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"