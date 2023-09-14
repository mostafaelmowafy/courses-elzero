let back = document.querySelector("form");

// Check for localStorage

let col = document.querySelectorAll("#colors");
if (window.localStorage.getItem("color")){
    back.style.backgroundColor = window.localStorage.getItem("color");
    document.querySelector("#colors").value = window.localStorage.getItem("color");
}

let font = document.querySelectorAll("#fonts");
if (window.localStorage.getItem("font")){
    back.style.fontFamily = window.localStorage.getItem("font")
    document.querySelector("#fonts").value = window.localStorage.getItem("font")
}

let size = document.querySelectorAll("#size");
if (window.localStorage.getItem("size")){
    back.style.fontSize = window.localStorage.getItem("size")+"px";
    document.querySelector("#size").value = window.localStorage.getItem("size");
}
// End check


font.forEach((option) => {
    option.addEventListener("change", (e) => {
        console.log(e.currentTarget.value)
        window.localStorage.setItem("font", e.currentTarget.value)
        // add font
        back.style.fontFamily = e.currentTarget.value;
    });
});

// window.localStorage.clear()



col.forEach((option) => {
    
    option.addEventListener("click", (e) => {
        window.localStorage.setItem("color", e.currentTarget.value);
        // add color
        back.style.backgroundColor = e.currentTarget.value
    });
});


size.forEach((option) => {
    option.addEventListener("click",(e) =>{
        window.localStorage.setItem("size", e.currentTarget.value)
        // add size
        back.style.fontSize = e.currentTarget.value+"px"
    });
});
// window.localStorage.clear()




