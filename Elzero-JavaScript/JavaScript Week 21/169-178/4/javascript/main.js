let requestOne = new XMLHttpRequest();
requestOne.open("GET","./articles.json");
requestOne.send()

requestOne.onreadystatechange = function() {
    
    if(this.readyState === 4 && this.status === 200){
        let mainData = JSON.parse(this.responseText) 
        console.log(mainData)
        let mainDiv = document.createElement("div")
        mainDiv.id ="data"
        for(let x=0; x<mainData.length;x++){
            mainData[x].department = "all" ;
            let articleId = mainData[x].id ;
            let articleAuthor = mainData[x].author ;
            let articleDepartment = mainData[x].department ;
            let articleTitle = mainData[x].title ;
            let articleContent = mainData[x].content ;

            let div = document.createElement("div")
            let head =document.createElement("h1")
            head.textContent=(articleTitle)
            div.appendChild(head)

            let p1 =document.createElement("p")
            p1.innerHTML=(`Article Number ${articleId}:<br>${articleContent}`)
            div.appendChild(p1)

            let p2 =document.createElement("p")
            p2.textContent=(`Author: ${articleAuthor}`)
            div.appendChild(p2)

            let p3 =document.createElement("p")
            p3.textContent=(`Category: ${articleDepartment}`)
            div.appendChild(p3)

            mainDiv.appendChild(div)
            document.body.appendChild(mainDiv)
        }
    }

}

