export let requests = []

export let requestObjetc ={
    "idClient": "",
    "nameClient": "",
    "idProduct":"",
    "descricaoProduct": "",
    "precoProduct": "",
    "qntProduct": ""
}

function createTR(nameProduct, valueProduct, idProduct, qntProduct, tableTag){
    let tr = document.createElement('tr')
        let th = document.createElement('td')
        th.textContent = idProduct
    tr.appendChild(th)
        th = document.createElement('td')
        th.textContent = nameProduct
    tr.appendChild(th)
        th = document.createElement('td')
        th.textContent = valueProduct
    tr.appendChild(th)
        th = document.createElement('td')
        th.textContent = qntProduct
    tr.appendChild(th)
        th = document.createElement('td')
        th.textContent = qntProduct*valueProduct
    tr.appendChild(th)
    tableTag.appendChild(tr)
    

        
}

export function addRequest(tableTag, clientList, productList){
    const addRequestButton = document.querySelector('#launch')
    addRequestButton.addEventListener('click', function(){
        let idClient = document.querySelector('#clientIdentifierRequest')
        let idProduct = document.querySelector('#product-request-id')
        let qntProduct = document.querySelector('#product-request-qnt')

        createTR(productList[idProduct.value]['descricao'], productList[idProduct.value]['preco'], idProduct.value, qntProduct.value, tableTag)
    })
    


}

export function selectClientById(clientList){
    let idClient = document.querySelector('#clientIdentifierRequest')
    idClient.addEventListener('focusout', function(){
        try{
            let nameClient = document.querySelector('#clientNameRequest')
            nameClient.value = clientList[idClient.value]['nome']
        }
        catch{
            alert("Nenhum cliente foi encontrado com esse id")
            idClient.value = ''
        }
    })
}

export function selectProductById(productList){
    let idProduct = document.querySelector('#product-request-id')
    idProduct.addEventListener('focusout', function(){
        try{
            let nameProduct = document.querySelector('#product-request-name')
            let valueProduct = document.querySelector('#product-request-value')
            nameProduct.value = productList[idProduct.value]['descricao']
            let preco = Number(productList[idProduct.value]['preco'])
            valueProduct.value = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        }
        catch{
            alert("Nenhum produto foi encontrado com esse id")
            idClient.value = ''
        }
    })
}



// export function setInitialRequestValue(clientBackup){
//     let nameClient = document.querySelector('#clientNameRequest')
//     let idClient = document.querySelector('#clientIdentifierRequest')
//     let nameProduct = document.querySelector('#product-request-name')
//     let valueProduct = document.querySelector('#product-request-value')
//     let idProduct = document.querySelector('#product-request-id')
//     let qntProduct = document.querySelector('#product-request-id')

//     idClient.value = clientBackup['idClient']
//     nameClient.value = clientBackup['nameClient']
//     idProduct.value = clientBackup['idProduct']
//     nameProduct.value = clientBackup['descricaoProduct']
//     valueProduct.value = clientBackup['precoProduct']
//     qntProduct.value = clientBackup['qntProduct']
    
    
// }

export function CreateRequestCard(bodyDiv){
    let divMae = document.createElement('div')
    divMae.classList.add("cardRequest")
    divMae.classList.add("flex")
    divMae.classList.add("column")

        let divHeader = document.createElement('div')
        divHeader.setAttribute('id', 'header-request')
        divHeader.classList.add('flex')
        
            let h2 = document.createElement('h2')
            h2.textContent='Pedidos'
        divHeader.appendChild(h2)

            let spanClose = document.createElement('span')
            spanClose.setAttribute("id", "closeCard")
            spanClose.textContent='X'
        divHeader.appendChild(spanClose)

    divMae.appendChild(divHeader)

        let label = document.createElement('label')
        label.setAttribute("for", "clientIdentifierRequest")
        label.setAttribute("class", "flex column card-request-label")
        label.textContent = "Código do Cliente"
            let input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","clientIdentifierRequest")
            input.setAttribute("id","clientIdentifierRequest")
        label.appendChild(input)
        divMae.appendChild(label)

        label = document.createElement('label')
        label.setAttribute("class", "flex column card-request-label")
        label.textContent = "Cliente"
            input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("id","clientNameRequest")
            input.setAttribute('disabled', '')
        label.appendChild(input)
        divMae.appendChild(label)   

        label = document.createElement('label')
        label.setAttribute("for", "product-request-id")
        label.setAttribute("class", "flex column cardRequestLabel")
        label.textContent = "Localizar produto"

            let div = document.createElement('div')
            div.setAttribute('class', 'request flex')

                input = document.createElement('input')
                input.setAttribute("type","text")
                input.setAttribute("name","product-request-id")
                input.setAttribute("id","product-request-id")
                input.setAttribute('class', 'product-request-input')
                input.setAttribute('placeholder', 'ID')
            div.appendChild(input)
                
                input = document.createElement('input')
                input.setAttribute("type","text")
                input.setAttribute("name","product-request-name")
                input.setAttribute("id","product-request-name")
                input.setAttribute('class', 'product-request-input deactivated')
                input.setAttribute('disabled', '')
            div.appendChild(input)

                input = document.createElement('input')
                input.setAttribute("type","text")
                input.setAttribute("name","product-request-value")
                input.setAttribute("id","product-request-value")
                input.setAttribute('class', 'product-request-input deactivated')
                input.setAttribute('disabled', '')
            div.appendChild(input)

                input = document.createElement('input')
                input.setAttribute("type","text")
                input.setAttribute("name","product-request-qnt")
                input.setAttribute("id","product-request-qnt")
                input.setAttribute('class', 'product-request-input')
                input.setAttribute('placeholder', 'Quantidade')
            div.appendChild(input)

                let btn = document.createElement('input')
                btn.setAttribute("type","button")
                btn.setAttribute("value","Lançar no pedido")
                btn.setAttribute("id","launch")
            div.appendChild(btn)

        label.appendChild(div)
    divMae.appendChild(label)

        div = document.createElement('div')
        div.setAttribute('id', 'itens-request-div')
            let span = document.createElement('span')
            span.textContent = 'Itens do Pedido'
            div.appendChild(span)

            let table = document.createElement('table')
            table.setAttribute('id', 'table')
                let thead = document.createElement('thead')
                    let tr = document.createElement('tr')
                        let th = document.createElement('th')
                        th.textContent = 'Item'
                    tr.appendChild(th)

                        th = document.createElement('th')
                        th.textContent = 'Descrição'
                    tr.appendChild(th)

                        th = document.createElement('th')
                        th.textContent = 'Preço'
                    tr.appendChild(th)

                        th = document.createElement('th')
                        th.textContent = 'Qtd'
                    tr.appendChild(th)

                        th = document.createElement('th')
                        th.textContent = 'Sub Total'
                    tr.appendChild(th)

                thead.appendChild(tr)
            table.appendChild(thead)

                let tbody = document.createElement('tbody')
                btn.setAttribute("id","tbody")
            table.append(tbody)


                let tfoot = th = document.createElement('tfoot')
                    tr = document.createElement('tr')
                        th = document.createElement('th')
                        th.setAttribute('colspan', '4')
                        th.setAttribute('rowspan', '2')
                        th.setAttribute('class', 'tableOcupation')
                    tr.appendChild(th)    
                        th = document.createElement('th')
                        th.textContent = 'Valor total'
                    tr.appendChild(th)  
                tfoot.appendChild(tr)
                    tr = document.createElement('tr')
                        th = document.createElement('th')
                        th.textContent = ''
                        th.setAttribute('id', "totalValue")
                    tr.appendChild(th)
                tfoot.appendChild(tr)

            table.appendChild(tfoot)
        div.appendChild(table)
    divMae.append(div)
    bodyDiv.appendChild(divMae)
}