let dateNow = new Date();
dateNow.setDate(0)
console.log(dateNow);

let months =["January","February","March","April","May","June","July ","August","September","October","November","December"]
let lastMonth = months[dateNow.getMonth()] ;
let lastDay = dateNow.getDate()
console.log(`Previous Month Is ${lastMonth} And Last Day Is ${lastDay}`)
// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"