let input = document.querySelector(".get-repos input"),
button = document.querySelector(".get-button"),
reposData = document.querySelector(".show-data");

button.onclick = ()=>{
    getRepos();
}

// Get Repos Function
function getRepos(){
    if(input.value == "")
    {
        swal("Please Write Github Username.")
    }else{
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((response) => response.json())
        .then((repositories) =>{
            reposData.innerHTML = "";
            repositories.forEach(repo =>{
                showData(repo)
                
            })
        });
    }
}
function showData(repo){
    let mainDiv = document.createElement('div');

    let nameSpan = document.createElement('span');
    nameSpan.classList.add("nameSpan");
    nameSpan.innerHTML = `<b>Repo Name:</b> ${repo.name}`;
    mainDiv.appendChild(nameSpan);

    let desSpan = document.createElement('span');
    desSpan.classList.add("desSpan");
    desSpan.innerHTML = `<b>Description:</b> ${repo.description}`;
    mainDiv.appendChild(desSpan);
    
    let starsSpan = document.createElement('span');
    starsSpan.classList.add("starsSpan");
    starsSpan.innerHTML = `<b>Stars: </b>${repo.stargazers_count}`;
    mainDiv.appendChild(starsSpan);
    
    let repoUrl = document.createElement("a");
    repoUrl.innerHTML = "Visit";
    repoUrl.href = repo.html_url;
    repoUrl.target="_blank";
    mainDiv.appendChild(repoUrl);

    reposData.appendChild(mainDiv);
}