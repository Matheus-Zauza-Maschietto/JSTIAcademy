
export let clients = [
        {"id": 0, "nome": "João Gustavo", "dataCadastro": "10/02/2004"},
        {"id": 1, "nome": "Mario1", "dataCadastro": "06/05/2019"},
        {"id": 2, "nome": "Mario2", "dataCadastro": "06/05/2019"},
        {"id": 3, "nome": "Mario3", "dataCadastro": "06/05/2019"},
        {"id": 4, "nome": "Mario4", "dataCadastro": "06/05/2019"},
        ]

export function setClientValue(id, idPlace, namePlace, dataPlace){

    if(id!==clients.length){
        namePlace.setAttribute('reandoly', '')
        dataPlace.setAttribute('reandoly', '')
        idPlace.value = clients[id]["id"]
        namePlace.value = clients[id]["nome"]
        dataPlace.value = clients[id]["dataCadastro"]
    }
    else{
        namePlace.removeAttribute('readonly')
        dataPlace.removeAttribute('readonly')
        namePlace.value = ''
        dataPlace.value = ''
        idPlace.value = clients.length
    }
}

export function passClientRegister(){
    let nextClient = document.querySelector("#nextClient")
    let backClient = document.querySelector("#backClient")
    let idInput = document.querySelector("#identifier")
    let nomeInput = document.querySelector("#name")
    let dataInput = document.querySelector("#date")
    let newClient = document.querySelector("#Novo")
    let actualId = 0
    setClientValue(actualId, idInput, nomeInput, dataInput)

    nextClient.addEventListener('click', function(){
        if(actualId < clients.length-1){
            actualId++
        }
        else{
            actualId = actualId
            alert("Fim da lista")
        }
        setClientValue(actualId, idInput, nomeInput, dataInput)
        return actualId
    })
    backClient.addEventListener('click', function(){
        if(actualId > 0){
            actualId--
        }
        else{   
            actualId = 0
            alert("Fim da lista")
        }
        setClientValue(actualId, idInput, nomeInput, dataInput)
        return actualId
    })

    let closeCard = document.querySelector("#closeCard")
    closeCard.addEventListener("click", function(){
        closeCard.parentElement.parentElement.remove()
        bodyHasCard = false
    })
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
        label.textContent = "Nome"
            input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","date")
            input.setAttribute("id","date")
            input.setAttribute("dateformat", "d M y")
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
            divButtons.appendChild(btn)

            btn = document.createElement('input')
            btn.setAttribute("type","button")
            btn.setAttribute("value","Salvar")
        divButtons.appendChild(btn)
        divMae.appendChild(divButtons)

    bodyDiv.appendChild(divMae)
}


function createPassItemInteraction(){

}