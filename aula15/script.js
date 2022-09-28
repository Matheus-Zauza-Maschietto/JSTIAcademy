window.onload=function(){
    alert("sad");
    const btn = document.getElementById('btn');
    const txtBox = document.querySelector('#txtBox');
    const caixa = document.querySelector('#box')

    btn.addEventListener('click', function(){
        alert('assad');
        caixa.innerHTML += ' '+txtBox.value+' ';
    })
}