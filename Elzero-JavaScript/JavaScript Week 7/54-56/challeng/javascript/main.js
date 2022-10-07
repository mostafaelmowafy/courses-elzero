let myAdmins = [ " Ahmed " , " Osama " , " Sayed " , " Stop " , " Samera " ] ;
let myEmployees = [ " Amgad " , " Samah " , " Ameer " , " Omar " , " Othman " , " Amany " , " Samia " ] ;
let counter_admin = 1;

document.write(`<div>`)
    document.write(`<h1>We Have ${myAdmins.length} Admins . </h1>`)
document.write(`</div>`)
document.write(`<hr>`)
for(let a = 0; a < myAdmins.length; a++){
    if(myAdmins[a].trim() === "Stop"){
        break ;
    }
    else{
        document.write(`<div>`)
            document.write(`<h2>The Admin For Team ${counter_admin} Is ${myAdmins[a]}  . </h2>`)
            document.write(`<h3> Team Members: </h3>`)
            let counter_employees = 1;
            for(let e = 0; e < myEmployees.length; e++){
                if(myAdmins[a][1] === myEmployees[e][1].trim()){
                    document.write(`<p>- ${counter_employees ,myEmployees[e]}   </p>`)
                }
                else{
                    continue;
                }
            }
        document.write(`</div>`)
        document.write(`<hr>`)
        counter_admin++;
    }
}