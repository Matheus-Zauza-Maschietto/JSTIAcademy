export let clientList = [
    {
        'idClient': '0',
        'nameClient': 'Junior',
        'dateClient': '10/02/2004',
    },
    {
        'idClient': '1',
        'nameClient': 'Armando',
        'dateClient': '26/03/2013',
    },
    {
        'idClient': '2',
        'nameClient': 'Michele',
        'dateClient': '08/07/1999',
    },
    {
        'idClient': '3',
        'nameClient': 'Ana lucia',
        'dateClient': '05/11/2009',
    },
    {
        'idClient': '4',
        'nameClient': 'Junior',
        'dateClient': '17/05/2016',
    },
]

let clientIndex = 0

export function nextClient(moveToList, listInputsClass, listObjects, listIndex){
    document.querySelector('#nextClient').addEventListener('click', function(){
        console.log(clientIndex)
        clientIndex = moveToList(listInputsClass, listObjects, clientIndex, true)
        } 
    )
}
