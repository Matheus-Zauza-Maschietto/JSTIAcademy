window.onload = function(){

    const x = document.querySelector('#eixoX')
    const y = document.querySelector('#eixoY')
    const player = document.querySelector('#player')
    let left = 0
    let top = 0
    document.onkeydown = function (e) {
        if(e.key=="ArrowRight"){
            left+=10
            player.style.left = `${left}px`
        }
        if(e.key=="ArrowLeft"){
            left-=10
            player.style.left = `${left}px`
        }
        if(e.key=="ArrowDown"){
            top+=10
            player.style.top = `${top}px`
        }
        if(e.key=="ArrowUp"){
            top-=10
            player.style.top = `${top}px`
        }
        }
        // switch (e.key){
        //     case "ArrowRight":
        //         left+=10
        //         player.style.left = `${left}px`

        //     case "ArrowLeft":
        //         left-=10
        //         player.style.left = `${left}px`

        //     case "ArrowDown":
        //         top+=10
        //         player.style.top = `${top}px`

        //     case "ArrowUp":
        //         top-=10
        //         player.style.top = `${top}px`
        //     }
        //};

    
    x.addEventListener('change', function(){
        player.style.left = x.value+'px'
        left = x.value
    })
    y.addEventListener('change', function(){
        player.style.top = y.value+'px'
        top = y.value
    })
}