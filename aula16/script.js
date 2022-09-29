window.onload = function(){
    const ulPai =  document.querySelectorAll("#pai");
    ulPai.forEach(function(lista){
        lista.addEventListener('click', function(elemento){
            alert(elemento.target.textContent);
        })
    })
}