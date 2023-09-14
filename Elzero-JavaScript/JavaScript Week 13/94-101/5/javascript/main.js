let photo = document.getElementsByTagName("img");

for(i =0; i < photo.length; i++){
    if(photo[i].hasAttribute("alt")){
        photo[i].setAttribute("alt", "Old")
    }
    else{
        photo[i].setAttribute("alt", "Elzero New")
    }
    
    
}