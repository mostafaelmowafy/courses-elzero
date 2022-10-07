let a = 10;

(a < 10) 
? console.log(10)
: (a >= 10 && a <= 40) 
? console.log("10 to 40")
: (a > 40)
? console.log("> 40")
: console.log("Unknown")


let st = "Elzero Web School";

if ((st.length*2).toString() === "34") {
    console.log("Good");
}

if (st[st.indexOf("W")].toLowerCase() === "w") {
    console.log("Good");
}

if (st.slice(0,6) !== "string") {
    console.log("Good");
}

if (typeof(Number(st)) === "number") {
    console.log("Good");
}
else{
    console.log("xxxxxxxxxxxxx")
}
if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}