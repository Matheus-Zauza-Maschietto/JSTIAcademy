window.onload = function(){
    const asks = document.querySelector('#perguntas');
    const addAskBtn = document.querySelector('#send-request')
    const tittleAsk = document.querySelector('#tittle-ask')
    const newAskText = document.querySelector('#new-ask')
    let ulLength = Number(document.querySelector('#perguntas').childElementCount);
    
    
    let listaAnswaerAsk = [];
    let askId = 0;
    function createAskObject(){

    };

    function createAsk(id, titulo, pergunta){
        titulo = titulo.trim()
        pergunta = pergunta.trim()

        if(titulo!='' && pergunta != ''){
            let li = document.createElement('li');
            li.setAttribute('class', 'item flex');
            
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
            
            let askBody = document.createElement('div');
            askBody.setAttribute('class', "asks-body");
            askBody.appendChild(document.createElement('p')).textContent = pergunta;
            div.appendChild(askBody);
            
            let answersBody = document.createElement('div');
            
            askBody.appendChild(answersBody)

            asks.appendChild(li);
        }
        else{
            alert('O campo "Titulo da pergunta" e "Pergunta" devem estar preenchidos')
        }
    }

    function createAnswers(objetctDaddy){
        objetctDaddy

    }

    addAskBtn.addEventListener('click', function(){
        createAsk(ulLength, tittleAsk.value, newAskText.value);
        ulLength += 1;
        newAskText.value = ''
        tittleAsk.value = ''
    })


    


}