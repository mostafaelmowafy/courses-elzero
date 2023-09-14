let myCall = (apiLink)=>{
    fetch(apiLink)
    .then((data)=>{
        return data.json();
    })
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
};
myCall("./articles.json")
