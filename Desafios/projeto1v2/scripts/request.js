export function getValuesToRequest(placeValues, listInputs,listInputsClass, idFocusOut, errorMessage, inputsToClean){
    let id = document.getElementById(idFocusOut)
    id.addEventListener('focusout', function(){
        
        if((Number(id.value) >= listInputs.length || Number(id.value < 0) || id.value == '' || isNaN(id.value))){
            alert(errorMessage)
            for(let input of document.getElementsByClassName(inputsToClean)){
                input.value = ''
            }
        }
        else{
            placeValues(listInputsClass, listInputs, id.value)    
        }
    })
}

export function launchRequest(listInputsProducts){
    document.getElementById('LaunchRequest').addEventListener('click', function(){
        if(!isNaN(document.querySelector('#qntProduct').value) && document.querySelector('#qntProduct').value != ''){
            let id = document.getElementById('requestIdProduct')
            let desc = document.getElementById('descricaoProduct')
            let preco = document.getElementById('precoProduct')
            let qnt = document.getElementById('qntProduct')
            

            if(listInputsProducts[id.value]['quantidadeProduct'] >= qnt.value){
                if(checkIfIsUnic(getListOfCellsFromTable(0), id.value)){
                    createTableRow(id.value, listInputsProducts[id.value]["descricaoProduct"], listInputsProducts[id.value]["precoProduct"], qnt.value)
                    document.getElementById('TotalValue').textContent = setToBrl(sum(getListOfCellsFromTable(4)))
                    alert('Item adicionado com sucesso')
                }
                else{
                    alert('Esse item já existe na lista')
                }
            }
            else{
                alert(`Não existe essa quantidade no estoque. Quantidade no estoque ${listInputsProducts[id.value]['quantidadeProduct']}`)
            }
        }
        else{
            alert('Valores invalidos')
            document.querySelector('#qntProduct').value = ''
        }
    })
}

function createTableRow(item, desc, preco, qnt){
    let row = document.querySelector('tbody').insertRow(document.querySelector('tbody').rows.length-1)
    row.insertCell(0).textContent = item
    row.insertCell(1).textContent = desc
    row.insertCell(2).textContent = preco
    row.insertCell(3).textContent = qnt
    row.insertCell(4).textContent = Number(preco*qnt)
    
}

function setToBrl(number){
    return number.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

export function sum(subPrice){
    let result = 0
    for(let price of subPrice){
        result += Number(price)
    }
    return result
}

function getListOfCellsFromTable(cell){
    let table = document.querySelector('tbody')
    let list = []
    for(let row of table.rows){
        list.push(row.cells[cell].textContent)
    }
    return list
}

function checkIfIsUnic(list, item){
    for(let itemList of list){
        if(item == itemList){
            return false
        }
    }
    return true
}
