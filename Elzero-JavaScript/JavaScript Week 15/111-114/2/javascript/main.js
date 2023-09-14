let f_name=document.getElementById("fName");
if(window.sessionStorage.getItem("FirstName")){
    f_name.value = window.sessionStorage.FirstName;
}

let l_name=document.getElementById("lName");
if(window.sessionStorage.getItem("LasttName")){
    l_name.value = window.sessionStorage.LasttName;
}

let email=document.getElementById("email");
if(window.sessionStorage.getItem("Email")){
    email.value = window.sessionStorage.Email;
}

let select = document.querySelectorAll("#year");
if(window.sessionStorage.year){
    document.querySelector("#year").value = window.sessionStorage.year;
}


f_name.onblur = function(){
    window.sessionStorage.FirstName = this.value;
}

l_name.onblur = function(){
    window.sessionStorage.LasttName = this.value;
}

email.onblur = function(){
    window.sessionStorage.Email = this.value;
}

select.forEach((year)=>{
    year.addEventListener("change", (e)=>{
        console.log(e.target.value)
        window.sessionStorage.year = e.currentTarget.value;
    })
})
window.sessionStorage.clear()