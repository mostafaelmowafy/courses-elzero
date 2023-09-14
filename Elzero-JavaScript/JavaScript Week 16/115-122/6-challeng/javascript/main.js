let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


const {title:t, age:a, available:v, skills:[,c]} = myFriends[chosen-1];
console.log(t)
console.log(a)
if(v){
    console.log("Available")
}
else{
    console.log("Not Available")
}
console.log(c)


// Write Your Code Here

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"