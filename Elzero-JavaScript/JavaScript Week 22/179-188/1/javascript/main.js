let myCall = (apiLink)=>{
    return new Promise((resolve, reject)=>{
        let myRequest = new XMLHttpRequest();
        myRequest.open("GET",apiLink);
        myRequest.send();
        myRequest.onload = function (){
            if(this.readyState === 4 && this.status === 200){
                resolve (JSON.parse(this.responseText));
            }
            else{
                reject(Error("No Data Found"))
            };
            
        };
    });
};
myCall("./articles.json")
    .then((result) => {
        result.length = 5;
        for(let x=0; x<result.length; x++){
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            h3.textContent = result[x].title;
            let p = document.createElement("p");
            p.textContent = result[x].description ;
            div.appendChild(h3)
            div.appendChild(p)
            document.body.appendChild(div)
        };
    })
    // .then((result) => console.log(result[0].name))
    // .catch((rej) => console.log(rej));
