var menu = document.getElementById('menu')
var button = document.getElementById('button')
var navbar = document.getElementById('navbar')

function Menu(){
    if(menu.style.display === 'initial'){
        menu.style.display = 'none'
        navbar.style.display = 'initial'
        button.className = 'fa fa-bars'
    }else if(menu.style.display === 'none'){
        menu.style.display = 'initial'
        navbar.style.display = 'none'
        button.className = 'fa fa-x'
    }
}

window.onload = ()=>{
    menu.style.display = 'none'  
}