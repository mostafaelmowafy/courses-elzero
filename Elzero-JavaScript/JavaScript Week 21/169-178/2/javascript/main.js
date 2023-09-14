let requestOne = new XMLHttpRequest();
requestOne.open("GET","./articles.json");
requestOne.send()


requestOne.onloadend =function(){
    console.log("Data Loaded")
}

requestOne.onreadystatechange = function() {
    
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText)
    }
}


