window.onload = function(){
    let btn = document.querySelector('#btn');
    let lista = document.querySelector('#lista');
    let listaItens = ['onibus', 'motocicleta', 'onibus'];
    btn.addEventListener('click', function(){
        for(item of listaItens){
            let listItem = document.createElement('li')
            listItem.textContent = item;
            lista.appendChild(listItem);
        }
    })
}