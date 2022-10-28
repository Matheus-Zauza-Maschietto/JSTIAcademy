function one(){
    alert('1')
}

function two(){
    alert('2')
    alert('2')
}

function three(){
    alert('3')
    alert('3')
    alert('3')
    alert('3')
}

let obj = {
    '1': function(){alert(1), alert(1), alert(1)},
    '2': function(){alert(2), alert(2)},
    '3': function(){alert(3), alert(3), alert(3)}
}

window.onload = function(){
    for(let item of document.getElementsByClassName('btn')){
        item.addEventListener('click', function(){
            obj[item.dataset.link]()
        })
    }
    
}

function disparar(num)
{
    for(let i= 0; i < num; i++)
        alert(num);
}