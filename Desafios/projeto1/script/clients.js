export let clients = [
        {"id": 0, "nome": "João Gustavo", "dataCadastro": "10/02/2004"},
        {"id": 1, "nome": "Mario1", "dataCadastro": "06/05/2019"},
        {"id": 2, "nome": "Mario2", "dataCadastro": "14/02/2012"},
        {"id": 3, "nome": "Mario3", "dataCadastro": "18/04/2015"},
        {"id": 4, "nome": "Mario4", "dataCadastro": "01/08/2019"},
        ]


export function cleanBodyCard(cardEl){
    while (cardEl.firstChild) {
        cardEl.removeChild(cardEl.firstChild);
    }
}

export function closeCard(MotherDiv, cardExists, alreadyExistsErrorMsg){
    if(cardExists===true){
        MotherDiv.remove()
        return false
    }
    else{
        alert(alreadyExistsErrorMsg)
        return true
    }
}    

export function setInitialClientValue(idEl, nameEl, dataCadastroEl, clientList){
    idEl.value = clientList[0]["id"]
    nameEl.value = clientList[0]["nome"]
    dataCadastroEl.value = clientList[0]["dataCadastro"]
}

export function moveClientList(idEl, nameEl, dataCadastroEl, clientList, actualClient, nextClient){
    console.log(actualClient)
    if(actualClient+1 >= clientList.length && nextClient === true){
        alert('Fim da lista de clientes')
    }
    else if(actualClient-1 <= -1 && nextClient === false){
        alert('Fim da lista de clientes')
    }
    else{
        if(nextClient===true){
            actualClient++
        }
        else{
            actualClient--
        }
        idEl.value = clientList[actualClient]['id']
        nameEl.value = clientList[actualClient]['nome']
        dataCadastroEl.value = clientList[actualClient]['dataCadastro']  
    }
    return actualClient
}

export function cleanAndCloseToAddClient(nameEl){
    nameEl.setAttribute('readonly', '')
}

export function cleanAndOpenToAddClient(idEl, nameEl, dataCadastroEl, clientList){
    idEl.value = clientList.length
    nameEl.value = ''
    nameEl.removeAttribute('readonly', '')
    dataCadastroEl.value = getData()
}

export function addNewClient(idEl, nameEl, dataCadastro, clientList, isAdding){
    if(isAdding===true){
        if(nameEl.value.trim() != ""){
            console.log()
            clientList.push({"id": idEl.value, "nome": nameEl.value.trim(), "dataCadastro": dataCadastro.value})
            alert(`O cadastro de ${nameEl.value} foi adicionado com sucesso !`)
            setInitialClientValue(idEl, nameEl, dataCadastro, clientList)
        }
        else{
            alert("Nenhum campo pode ser deixado em branco")
        }
    }
    else{
        alert('Primeiro clique em "novo" para salvar um novo cliente')
    }
}

function getData(){
    let data = new Date()
    return data.toLocaleString('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'})
}

export function CreateClientCard(bodyDiv){
    let divMae = document.createElement('div')
    divMae.classList.add("cardClientes")

        let divHeader = document.createElement('div')
        divHeader.setAttribute('id', 'header')
        divHeader.classList.add('flex')
        
            let h2 = document.createElement('h2')
            h2.textContent='Clientes'
            divHeader.appendChild(h2)

            let spanClose = document.createElement('span')
            spanClose.setAttribute("id", "closeCard")
            spanClose.textContent='X'
            divHeader.appendChild(spanClose)

    divMae.appendChild(divHeader)

        let label = document.createElement('label')
        label.setAttribute("for", "identifier")
        label.setAttribute("class", "flex column cardClientLabel")
        label.textContent = "Código"
            let input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","identifier")
            input.setAttribute("id","identifier")
            input.setAttribute("readonly", "")
        label.appendChild(input)
        divMae.appendChild(label)

        label = document.createElement('label')
        label.setAttribute("for", "name")
        label.setAttribute("class", "flex column cardClientLabel")
        label.textContent = "Nome"
            input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","name")
            input.setAttribute("id","name")
            input.setAttribute("readonly", "")
        label.appendChild(input)
        divMae.appendChild(label)

        label = document.createElement('label')
        label.setAttribute("for", "date")
        label.setAttribute("class", "flex column cardClientLabel")
        label.textContent = "Data de Cadastro"
            input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","date")
            input.setAttribute("id","date")
            input.setAttribute("readonly", "")
        label.appendChild(input)
        divMae.appendChild(label)
        
        let divButtons = document.createElement('div')
        divButtons.setAttribute("class", "flex clientButtons")

            let divGoBack = document.createElement('div')
                let btn = document.createElement('input')
                btn.setAttribute("type","button")
                btn.setAttribute("value","<")
                btn.setAttribute("id","backClient")
                divGoBack.appendChild(btn)

                btn = document.createElement('input')
                btn.setAttribute("type","button")
                btn.setAttribute("id","nextClient")
                btn.setAttribute("value",">")
                divGoBack.appendChild(btn)
        divButtons.appendChild(divGoBack)
        
            btn = document.createElement('input')
            btn.setAttribute("type","button")
            btn.setAttribute("value","Novo")
            btn.setAttribute("id","Novo")
        divButtons.appendChild(btn)

            btn = document.createElement('input')
            btn.setAttribute("type","button")
            btn.setAttribute("value","Salvar")
            btn.setAttribute("id","Salvar")
        divButtons.appendChild(btn)

        divMae.appendChild(divButtons)

    bodyDiv.appendChild(divMae)
    return true
}
