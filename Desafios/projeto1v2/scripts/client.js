export let clientList = [
    {
        'idClient': '0',
        'nameClient': 'Junior',
        'dateClient': '10/2/2004',
    },
    {
        'idClient': '1',
        'nameClient': 'Armando',
        'dateClient': '26/3/2013',
    },
    {
        'idClient': '2',
        'nameClient': 'Michele',
        'dateClient': '8/7/1999',
    }
]

export let clientIndex = 0

let editableInputs = ['nameClient']

export function nextClient(moveToList, listInputsClass, listObjects, closeFunc){
    document.querySelector('#nextClient').addEventListener('click', function(){
        if(clientIndex != clientList.length){
           closeFunc(editableInputs) 
        }
        clientIndex = moveToList(listInputsClass, listObjects, clientIndex, true)
        } 
    )
}

export function backClient(moveToList, listInputsClass, listObjects, closeFunc){
    document.querySelector('#backClient').addEventListener('click', function(){
        closeFunc(editableInputs)
        clientIndex = moveToList(listInputsClass, listObjects, clientIndex, false)
        } 
    )
}

export function newClient(listInputsClass, newValueFunc, openFunc){
    document.querySelector('#Novo').addEventListener('click', function(){
        openFunc(editableInputs)
        let objectClient = {
            'idClient': clientList.length,
            'nameClient': '',
            'dateClient': getActualDate(),
        }
        clientIndex = newValueFunc(listInputsClass, objectClient, clientList.length)
        } 
    )
}

export function saveClient(saveValue, listInputsClass, listObjects){
    let object = {
        'idClient': '',
        'nameClient': '',
        'dateClient': '',
    } 
    document.querySelector('#Salvar').addEventListener('click', function(){
        saveValue(listInputsClass, listObjects, clientIndex, object)
    })
}

function getActualDate(){
    let dataAtual = new Date()
    return `${dataAtual.getDay()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`
}

