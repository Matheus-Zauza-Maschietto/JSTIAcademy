window.onload = function(){
    const reset = document.querySelector('#reset');
    const decrease = document.querySelector('#decrease');
    const increase = document.querySelector('#increase');
    const contador = document.querySelector('#contador');
    let contadorInterno = 0
    decrease.addEventListener('click', function(){
        contador.textContent = contadorInterno--
    });
    increase.addEventListener('click', function(){
        contador.textContent = contadorInterno++
    });
    reset.addEventListener('click', function(){
        contadorInterno = 0
        contador.textContent = 0
    });
}