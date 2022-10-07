let start = 0;
let swappedName = "elZerO";
let edit=[];

for(;start < swappedName.length; start++){
    if(swappedName[start]===swappedName[start].toUpperCase()){
        
        swappedName[start] =swappedName[start].toLowerCase()
        edit.push(swappedName[start].toLowerCase())
        console.log(swappedName[start].toLowerCase())
    }
    else{
        
        swappedName[start] =swappedName[start].toUpperCase()
        edit.push(swappedName[start].toUpperCase())
        console.log(swappedName[start].toUpperCase())
    }
    
}
console.log(edit.join(""))
// Output
"ELzERo"