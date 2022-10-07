let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output

while(index < friends.length){
    if(typeof friends[index] === "string"){
        if(friends[index][friends.indexOf("Ahmed")] === "A"){
            
        }
        else{
            console.log(`${++counter} => ${friends[index]}`)
        }
    }
    index++;
}
"1 => Sayed"
"2 => Mahmoud"