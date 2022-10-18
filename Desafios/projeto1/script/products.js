


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