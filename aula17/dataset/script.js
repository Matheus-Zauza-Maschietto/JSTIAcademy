window.onload = function(){
    const bnt = document.querySelector('#teste');
    const txt = document.querySelector('#btn');
    btn.addEventListener('click', function (){
        if (txt.dataset.alteravel=='true'){
            txt.innerHTML = 'Nada Mais Por Aqui'
        }
        else{
            alert('Não alteravel '+txt.dataset.txt)
        }
    })
}