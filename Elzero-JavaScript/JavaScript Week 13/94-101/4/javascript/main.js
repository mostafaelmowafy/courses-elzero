let one = document.querySelector(".one");
let two = document.querySelector(".two");
let textone = one.innerHTML;
let texttwo = two.innerHTML;
let attrione = one.getAttribute("title");
let attritwo = two.getAttribute("title");
let parent = document.getElementsByTagName("div");
let numbertwo = parent.length;

one.innerText = texttwo
two.innerText = `${textone} ${numbertwo}`

one.setAttribute("title" ,attritwo);
two.setAttribute("title" ,attrione);
console.log();