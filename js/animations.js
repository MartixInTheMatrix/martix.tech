function wr(){
    const element = document.getElementById('pres-btn')
    let content = '01.Presentation'.split('')
    element.textContent = ''

    let i = 1;
    let interval = setInterval(()=>{
        if(i>content){
            clearInterval(interval)
        }
        console.log(element.textContent)
        element.textContent = element.textContent + content[i-1]
        i++;
    }, 1000)

}