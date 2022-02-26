function wr(){
    const element = document.getElementById('pres-btn')
    let content = '01.Presentation'
    element.textContent = ''

    let i = 1;
    let interval = setInterval(()=>{
        if(i>content){
            clearInterval(interval)
        }
        element.textContent = element.textContent + content[i-1]
        i++;
    }, 1000)

}