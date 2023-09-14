let photo = document.getElementsByTagName("img");

for(i =0; i < photo.length; i++){
    photo[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
    photo[i].setAttribute("alt", "Elzero Logo")
    console.log(photo)
}