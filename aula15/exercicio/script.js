window.onload=function(){
    const btn = document.querySelector('#btnInput');
    const outBox = document.querySelector('#outBox');
    const inputBox = document.querySelector('#input');
    btn.addEventListener('click', function (){
        let elementoInput = Number(inputBox.value)

        if(elementoInput <= 10 && elementoInput >= 1 && isNaN(elementoInput)===false){
            let txt = ''
            for(let i=1; i<=10; i++){
                txt += `${elementoInput}x${i}=${elementoInput*i} <br>`
            }
            outBox.innerHTML = txt;
        }   
        else{
            alert("Digite um numero de 1 a 10");
        }
    })

}