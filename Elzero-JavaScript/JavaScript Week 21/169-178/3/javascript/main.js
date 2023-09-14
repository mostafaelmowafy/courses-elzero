let requestOne = new XMLHttpRequest();
requestOne.open("GET","./articles.json");
requestOne.send()



requestOne.onreadystatechange = function() {
    
    if(this.readyState === 4 && this.status === 200){
        let mainData = JSON.parse(this.responseText) 
        console.log(mainData)
        for(let x=0; x<mainData.length;x++){
            mainData[x].department = "all" 
        }
        let updatedData = JSON.stringify(mainData)
        console.log(updatedData)
    }

}

