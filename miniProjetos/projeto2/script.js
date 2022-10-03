window.onload = function(){
    const perguntas = document.querySelector('#perguntas');
    let ulLength = Number(document.querySelector('#perguntas').childElementCount);

    function criaPergunta(id){
        let li = document.createElement('li');
        li.setAttribute('class', 'item flex');
        li.setAttribute('data-answered', 'true')

        let div = document.createElement('div');
        div.setAttribute('class', 'ask flex');
        li.appendChild(div);
        div.appendChild(document.createElement('h1')).textContent = 'lorem ipsum dolor';

        let checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute('name', "open-close");
        checkBox.setAttribute('id', `${ulLength}`);
        checkBox.setAttribute('class', 'open-close-box');
        div.appendChild(checkBox);

        let label = document.createElement('label');
        label.setAttribute('for', `${ulLength}`);
        label.setAttribute('class', "open-close-label");
        div.appendChild(label);
        
        let answer = document.createElement('div');
        answer.setAttribute('class', "answer");
        answer.appendChild(document.createElement('p')).textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto nemo ad accusantium modi porro, deleniti animi corrupti nihil sit, ut iusto atque, dolorem tempora facere minus. Nisi atque officiis quibusdam.';
        div.appendChild(answer);

        perguntas.appendChild(li);
    }


    for(var element=0; element<3; element++){
        criaPergunta(ulLength)
        ulLength+=1
    }
}