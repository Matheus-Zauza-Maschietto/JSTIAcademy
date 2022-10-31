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

let clientIndex = 0

export function nextClient(moveToList, listInputsClass, listObjects){
    document.querySelector('#nextClient').addEventListener('click', function(){
        clientIndex = moveToList(listInputsClass, listObjects, clientIndex, true)
        } 
    )
}

export function backClient(moveToList, listInputsClass, listObjects){
    document.querySelector('#backClient').addEventListener('click', function(){
        clientIndex = moveToList(listInputsClass, listObjects, clientIndex, false)
        } 
    )
}

export function newClient(listInputsClass, newValueFunc){
    document.querySelector('#Novo').addEventListener('click', function(){
        let objectClient = {
            'idClient': clientList.length,
            'nameClient': '',
            'dateClient': getActualDate(),
        }
        clientIndex = newValueFunc(listInputsClass, objectClient, clientList.length)
        console.log(clientIndex)
        } 
    )
}

function getActualDate(){
    let dataAtual = new Date()
    return `${dataAtual.getDay()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`
}
