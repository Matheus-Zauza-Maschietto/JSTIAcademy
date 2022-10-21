export let products = [
    {"id": 0, "descricao": "Caneta", "preco": "1", "quantidade": "86"},
    {"id": 1, "descricao": "Lapis", "preco": "0.5", "quantidade": "50"},
    {"id": 2, "descricao": "Caneca", "preco": "5", "quantidade": "12"},
    {"id": 3, "descricao": "Fone de Ouvido", "preco": "20", "quantidade": "7"},
    {"id": 4, "descricao": "Monior", "preco": "440", "quantidade": "1"},
    ]


export function moveProductList(idEl, descricaoEl, precoEl, qntEl, productList, actualProduct, nextProduct){
    console.log()
    cleanAndCloseToAddProduct(descricaoEl, precoEl, qntEl)
    if(actualProduct+1 >= productList.length && nextProduct === true){
        alert('Fim da lista de produtos')
    }
    else if(actualProduct-1 <= -1 && nextProduct === false){
        console.log(actualProduct)
        alert('Fim da lista de produtos')
    }
    else{
        if(nextProduct===true){
            actualProduct++
        }
        else{
            actualProduct--
        }
        idEl.value = productList[actualProduct]['id']
        descricaoEl.value = productList[actualProduct]['descricao']
        precoEl.value = productList[actualProduct]['preco']  
        qntEl.value = productList[actualProduct]['quantidade']
    }
    return actualProduct
}

export function addNewProduct(idEl, descricaoEl, precoEl, qntEl, productList, isAdding){
    if(isAdding===true){

        if(descricaoEl.value.trim() != "" && precoEl.value.trim() != "" && qntEl.value.trim() != ""){

            if(!isNaN(Number(precoEl.value)) && !isNaN(Number(qntEl.value))){
                productList.push({"id": idEl.value, "nome": descricaoEl.value.trim(), "descricao": descricaoEl.value.trim(), "preco": precoEl.value.trim(), "quantidade": qntEl.value.trim()})
                alert(`O cadastro de ${descricaoEl.value} foi adicionado com sucesso !`)
                
            }
            else{
                alert("Os campos 'preço' e 'quantidade' so podem conter valores numericos")
            }

        }
        else{
            alert("Nenhum campo pode ser deixado em branco")
        }
    }

    else{
        alert('Primeiro clique em "novo" para salvar um novo produto')
    }
}

export function setInitialProductValue(idEl, descricaoEl, precoEl, qntEl, productList, value){
    idEl.value = productList[value]["id"]
    descricaoEl.value = productList[value]["descricao"]
    precoEl.value = productList[value]["preco"]
    qntEl.value  = productList[value]["quantidade"]
}

export function cleanAndCloseToAddProduct(descricaoEl, precoEl, qntEl){
    descricaoEl.setAttribute('readonly', '')
    precoEl.setAttribute('readonly', '')
    qntEl.setAttribute('readonly', '')
}

export function cleanAndOpenToAddProduct(idEl, descricaoEl, precoEl, qntEl, productList){
    idEl.value = productList.length
    descricaoEl.value = ''
    precoEl.value = ''
    qntEl.value = ''
    descricaoEl.removeAttribute('readonly', '')
    precoEl.removeAttribute('readonly', '')
    qntEl.removeAttribute('readonly', '')
    return productList.length
}

export function CreateProductCard(bodyDiv){
    let divMae = document.createElement('div')
    divMae.classList.add("cardProduct")

        let divHeader = document.createElement('div')
        divHeader.setAttribute('id', 'header-product')
        divHeader.classList.add('flex')
        
            let h2 = document.createElement('h2')
            h2.textContent='Produtos'
            divHeader.appendChild(h2)

            let spanClose = document.createElement('span')
            spanClose.setAttribute("id", "closeCard")
            spanClose.textContent='X'
            divHeader.appendChild(spanClose)

    divMae.appendChild(divHeader)

        let label = document.createElement('label')
        label.setAttribute("for", "productIdentifier")
        label.setAttribute("class", "flex column cardProductLabel")
        label.textContent = "Código"
            let input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","productIdentifier")
            input.setAttribute("id","productIdentifier")
            input.setAttribute("readonly", "")
        label.appendChild(input)
        divMae.appendChild(label)

        label = document.createElement('label')
        label.setAttribute("for", "descricao")
        label.setAttribute("class", "flex column cardProductLabel")
        label.textContent = "Descrição"
            input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","descricao")
            input.setAttribute("id","descricao")
            input.setAttribute("readonly", "")
        label.appendChild(input)
        divMae.appendChild(label)

        label = document.createElement('label')
        label.setAttribute("for", "preco")
        label.setAttribute("class", "flex column cardProductLabel")
        label.textContent = "Preço"
            input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","preco")
            input.setAttribute("id","preco")
            input.setAttribute("readonly", "")
        label.appendChild(input)
        divMae.appendChild(label)

        label = document.createElement('label')
        label.setAttribute("for", "qnt")
        label.setAttribute("class", "flex column cardProductLabel")
        label.textContent = "Quantidade"
            input = document.createElement('input')
            input.setAttribute("type","text")
            input.setAttribute("name","qnt")
            input.setAttribute("id","qnt")
            input.setAttribute("readonly", "")
        label.appendChild(input)
        divMae.appendChild(label)
        
        let divButtons = document.createElement('div')
        divButtons.setAttribute("class", "flex productButtons")

            let divGoBack = document.createElement('div')
                let btn = document.createElement('input')
                btn.setAttribute("type","button")
                btn.setAttribute("value","<")
                btn.setAttribute("id","backProduct")
                divGoBack.appendChild(btn)

                btn = document.createElement('input')
                btn.setAttribute("type","button")
                btn.setAttribute("id","nextProduct")
                btn.setAttribute("value",">")
                divGoBack.appendChild(btn)
            divButtons.appendChild(divGoBack)
            
                btn = document.createElement('input')
                btn.setAttribute("type","button")
                btn.setAttribute("value","Novo")
                btn.setAttribute("id","productNovo")
            divButtons.appendChild(btn)

                btn = document.createElement('input')
                btn.setAttribute("type","button")
                btn.setAttribute("value","Salvar")
                btn.setAttribute("id","productSalvar")
            divButtons.appendChild(btn)

        divMae.appendChild(divButtons)

    bodyDiv.appendChild(divMae)
}