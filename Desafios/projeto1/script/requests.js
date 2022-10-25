export let requests = []

export let saveLastData = {"idClient": "",
                            "nameClient": "",
                            "idProduct":"",
                            "descricaoProduct": "",
                            "precoProduct": "",
                            "qntProduct": ""}


function createTR(nameProduct, valueProduct, idProduct, qntProduct, tableTag){
    let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.textContent = idProduct
    tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = nameProduct
    tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = Number(valueProduct).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = qntProduct
    tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = (qntProduct*valueProduct).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    tr.appendChild(td)
    tableTag.appendChild(tr)
    

        
}

function sumItens(list){
    let sum = 0
    for(let item of list){
        sum += Number(item['precoProduct'])*Number(item['qntProduct'])
    }
    return sum
    
}

export function addRequest(tableTag, requestList, clientList, productList){
    const addRequestButton = document.querySelector('#launchRequest')
    addRequestButton.addEventListener('click', function(){
        let idClient = document.querySelector('#clientIdentifierRequest')
        let idProduct = document.querySelector('#product-request-id')
        let qntProduct = document.querySelector('#product-request-qnt')

        try{
          if (parseInt(qntProduct.value) <= productList[idProduct.value]['quantidade']){
            let alreadyHasAdded = false
            
            for(let item of requestList){
                if(item['idProduct'] == idProduct.value){
                    alreadyHasAdded = true
                    break
                }
            }
            if(alreadyHasAdded === false){
                requestList.push({
                    "idClient": idClient.value,
                    "nameClient": clientList[idClient.value]['nome'],
                    "idProduct": idProduct.value,
                    "descricaoProduct": productList[idProduct.value]['descricao'],
                    "precoProduct": productList[idProduct.value]['preco'],
                    "qntProduct": (qntProduct.value).trim()
                })
                createTR(productList[idProduct.value]['descricao'], productList[idProduct.value]['preco'], idProduct.value, qntProduct.value.trim(), tableTag)
                let value = sumItens(requestList)
                document.querySelector('#totalValue').textContent = value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            }
            else{
                alert('Esse item já foi adicionado ao pedido')
            }
            }
        else{
            alert('Não é possivel selecionar essa quantidade')
        }
        }
        catch{
            alert("Foi digitado um valor invalido, por favor tente novamente")
        }
        
        
    })
}

export function selectClientById(clientList){
    
    let idClient = document.querySelector('#clientIdentifierRequest')
    idClient.addEventListener('focusout', function(){
        try{
            let nameClient = document.querySelector('#clientNameRequest')
            nameClient.value = clientList[idClient.value]['nome']
            saveLastData['idClient'] = idClient.value
            saveLastData['nameClient'] = nameClient.value
        }
        catch{
            if((idClient.value).trim() != ''){
                alert("Nenhum cliente foi encontrado com esse id")
                idClient.value = ''
                document.querySelector('#clientNameRequest').value = ''
            }
            else{
                idClient.value = ''
                document.querySelector('#clientNameRequest').value = ''
            }
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
            if((idProduct.value).trim() != ""){
                alert("Nenhum produto foi encontrado com esse id")
                idProduct.value = ''
                document.querySelector('#product-request-name').value = ''
                document.querySelector('#product-request-value').value = ''
            }
            else{
                idProduct.value = ''
            }
        }
    })
}

export function CreateRequestCard(bodyDiv, requestList, lastUpdate){
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
            input.value = lastUpdate['idClient']
        label.appendChild(input)
        divMae.appendChild(label)

        label = document.createElement('label')
        label.setAttribute("class", "flex column card-request-label")
        label.textContent = "Cliente"
            input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("id","clientNameRequest")
            input.setAttribute('disabled', '')
            input.value = lastUpdate['nameClient']
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
                input.value = lastUpdate['idProduct']
            div.appendChild(input)
                
                input = document.createElement('input')
                input.setAttribute("type","text")
                input.setAttribute("name","product-request-name")
                input.setAttribute("id","product-request-name")
                input.setAttribute('class', 'product-request-input deactivated')
                input.setAttribute('disabled', '')
                input.value = lastUpdate['descricaoProduct']
            div.appendChild(input)

                input = document.createElement('input')
                input.setAttribute("type","text")
                input.setAttribute("name","product-request-value")
                input.setAttribute("id","product-request-value")
                input.setAttribute('class', 'product-request-input deactivated')
                input.setAttribute('disabled', '')
                input.value = lastUpdate['precoProduct']
            div.appendChild(input)

                input = document.createElement('input')
                input.setAttribute("type","text")
                input.setAttribute("name","product-request-qnt")
                input.setAttribute("id","product-request-qnt")
                input.setAttribute('class', 'product-request-input')
                input.setAttribute('placeholder', 'Quantidade')
                input.value = lastUpdate['qntProduct']
            div.appendChild(input)

                let btn = document.createElement('input')
                btn.setAttribute("type","button")
                btn.setAttribute("value","Lançar no pedido")
                btn.setAttribute("id","launchRequest")
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
                tbody.setAttribute("id","tbody")
                
                for(let item of requestList){
                    tr = document.createElement('tr')
                        let td = document.createElement('td')
                        td.textContent = item['idProduct']
                    tr.appendChild(td)
                        td = document.createElement('td')
                        td.textContent = item['descricaoProduct']
                    tr.appendChild(td)
                        td = document.createElement('td')
                        let preco = Number(item['precoProduct'])
                        td.textContent = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    tr.appendChild(td)
                        td = document.createElement('td')
                        td.textContent = item['qntProduct']
                    tr.appendChild(td)
                        td = document.createElement('td')
                        td.textContent = (item['precoProduct']*item['qntProduct']).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    tr.appendChild(td)
                    tbody.appendChild(tr)
                }
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
                        th.textContent = sumItens(requestList).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        th.setAttribute('id', "totalValue")
                    tr.appendChild(th)
                tfoot.appendChild(tr)

            table.appendChild(tfoot)
        div.appendChild(table)
    divMae.append(div)
    bodyDiv.appendChild(divMae)
}