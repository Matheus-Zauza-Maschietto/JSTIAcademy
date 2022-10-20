let request = []

function CreateRequestCard(bodyDiv){
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
            div.appendChild(btn)

        label.appendChild(div)
    divMae.appendChild(label)

        div = document.createElement('div')
        div.setAttribute('id', 'itens-request-div')
            let span = document.createElement('span')
            span.textContent = 'Itens do Pedido'
            div.appendChild(span)

            let table = document.createElement('table')
                let thead = document.createElement('thead')
                    let tr = document.createElement('tr')
                        let th = document.createElement('tr')
                        th.textContent = 'Item'
                    tr.appendChild(th)

                        th = document.createElement('tr')
                        th.textContent = 'Descrição'
                    tr.appendChild(th)

                        th = document.createElement('tr')
                        th.textContent = 'Preço'
                    tr.appendChild(th)

                        th = document.createElement('tr')
                        th.textContent = 'Qtd'
                    tr.appendChild(th)

                        th = document.createElement('tr')
                        th.textContent = 'Sub Total'
                    tr.appendChild(th)

                thead.appendChild(tr)
            table.appendChild(thead)


            let tfoot = th = document.createElement('tfoot')
                tr = document.createElement('tr')
                    th = document.createElement('tr')
                    th.setAttribute('colspan', '4')
                    th.setAttribute('rowspan', '2')
                    th.setAttribute('class', 'tableOcupation')
                tr.appendChild(th)    
                    th = document.createElement('tr')
                    th.textContent('Valor total')
                
            tfoot.appendChild(tr)
                tr = document.createElement('tr')


}