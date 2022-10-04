window.onload = function(){
    const asks = document.querySelector('#perguntas');
    const addAnswerBtn = document.querySelector('#send-request')
    const tittleAsk = document.querySelector('#tittle-ask')
    const newAsk = document.querySelector('#new-ask')
    let ulLength = Number(document.querySelector('#perguntas').childElementCount);

    function criaPergunta(id, titulo, pergunta){
        titulo = titulo.trim()
        pergunta = pergunta.trim()
        if(titulo!='' && pergunta != ''){
            let li = document.createElement('li');
            li.setAttribute('class', 'item flex');
            li.setAttribute('data-answered', 'true')
            
            let div = document.createElement('div');
            div.setAttribute('class', 'ask flex');
            li.appendChild(div);
            div.appendChild(document.createElement('h2')).textContent = titulo;

            let checkBox = document.createElement('input');
            checkBox.setAttribute("type", "checkbox");
            checkBox.setAttribute('name', "open-close");
            checkBox.setAttribute('id', `${id}`);
            checkBox.setAttribute('class', 'open-close-box');
            div.appendChild(checkBox);

            let label = document.createElement('label');
            label.setAttribute('for', `${id}`);
            label.setAttribute('class', "open-close-label");
            div.appendChild(label);
            
            let answer = document.createElement('div');
            answer.setAttribute('class', "answer");
            answer.appendChild(document.createElement('p')).textContent = pergunta;
            div.appendChild(answer);
            asks.appendChild(li);
        }
        else{
            alert('O campo "Titulo da pergunta" e "Pergunta" devem estar preenchidos')
        }
    }

    addAnswerBtn.addEventListener('click', function(){
        criaPergunta(ulLength, tittleAsk.value, newAsk.value);
        ulLength += 1;
        newAsk.value = ''
        tittleAsk.value = ''
    });


    for(var element=0; element<3; element++){
        criaPergunta(ulLength, 'lorem ipsum dolor', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto nemo ad accusantium modi porro, deleniti animi corrupti nihil sit, ut iusto atque, dolorem tempora facere minus. Nisi atque officiis quibusdam.')
        ulLength+=1
    }


}