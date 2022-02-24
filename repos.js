
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}
function loadRepos(){
    let reposArray = httpGet('https://api.github.com/users/MARTIXINTHEMATRIX/repos?per_page=6')
    console.log(reposArray)
    console.log(reposArray[0])
    for(let i =1; i<=6; i++){
        document.getElementById('h'+i).innerText = reposArray[i-1].name
        document.getElementById('h'+i).href = reposArray[i-1].svn_url
        document.getElementById('p'+i).innerText = reposArray[i-1].description

    }
}
window.onload = ()=>{
    loadRepos()
}
