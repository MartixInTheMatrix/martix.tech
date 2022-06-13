var current = 1
function addCurrent(){
    if(current >= 4){
        current = 1
    }else{
        current++
    }
}
function rmCurrent(){
    if(current <= 1){
        current = 4
    }else{
        current--
    }
}

function slide(num){
    for(let i=1; i<=4; i++){
        document.getElementById(i).className.replace("active", "hidden")
        document.getElementById(i).style.display = "none"

    }
    num == 1? addCurrent() : num == -1? rmCurrent() : false
    document.getElementById(current).style.display = "initial"
}
