window.onload = () =>{
    hack()
    setTimeout(() =>{
        bug()
    }, 2000)

}

function hack(){
    let element = document.getElementById('code-hack')
    let content = [
    "Sending a 'Ping' request 2a91:cj09:2c3:ca70:6c1d:054a:6bb1:34ab with 32 bytes of data:",
    "Response from 2a91:cj09:2c3:ca70:6c1d:054a:6bb1:34ab: bytes=32 time=3 ms TTL=64",
    "Response from 2a91:cj09:2c3:ca70:6c1d:054a:6bb1:34ab: bytes=32 time=5 ms TTL=64",
    "Response from 2a91:cj09:2c3:ca70:6c1d:054a:6bb1:34ab: bytes=32 time=3 ms TTL=64",
    "Response from 2a91:cj09:2c3:ca70:6c1d:054a:6bb1:34ab: bytes=32 time=2 ms TTL=64",
    "Ping statistics for 2a91:cj09:2c3:ca70:6c1d:054a:6bb1:34ab:",
    "     Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)",
    "Approximate loop duration in milliseconds:",
    "     Minimum = 0ms, Maximum = 0ms, Average = 0ms"]

    let i = 1
    setInterval(()=>{
        if(i-1 == content.length){
            element.innerHTML = ''
            i=1
        }else{
            i == 1? element.innerHTML += content[i-1] : element.innerHTML += '<br>' + content[i-1]
            i++
        }
        
    }, 200)
}

function bug(){
    let bug = document.getElementById('bug')
    let arr = bug.textContent.split("")
    let classic = `Let's build something together`
    let b = ['░', '▓', '▒']
    let prev
    let i = 0
    setInterval(()=>{
        if(i >1){
            bug.textContent = classic
            i=0
        }

        prev = arr[Math.floor(Math.random()*bug.textContent.length)]
        bug.textContent = bug.textContent.replace(prev, b[Math.floor(Math.random()*b.length)])

        i++
    }, 200)
}
