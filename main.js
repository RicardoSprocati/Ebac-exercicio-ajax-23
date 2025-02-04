document.addEventListener('DOMContentLoaded',function(){
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repositorios = document.getElementById('repositorios');
    const follower = document.getElementById('follower');
    const following = document.getElementById('following');
    const link = document.getElementById('link');


    fetch('https://api.github.com/users/RicardoSprocati')
        .then(function(resultado){
        return resultado.json();
        })
        .then(function(json){
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repositorios.innerText = json.public_repos;
            follower.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
})