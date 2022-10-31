export let productList = [
    {
        'idProduct': 0,
        'descricaoProduct': 'Caneta',
        'precoProduct': 2.5,
        'quantidadeProduct': 15,
    },
    {
        'idProduct': 1,
        'descricaoProduct': 'Blusa',
        'precoProduct': 54,
        'quantidadeProduct': 5,
    },
    {
        'idProduct': 2,
        'descricaoProduct': 'Mouse',
        'precoProduct': 25,
        'quantidadeProduct': 26,
    }
]

let productIndex = 0

export function nextProduct(moveToList, listInputsClass, listObjects){
    document.querySelector('#nextProduct').addEventListener('click', function(){
        productIndex = moveToList(listInputsClass, listObjects, productIndex, true)
        } 
    )
}

export function backProduct(moveToList, listInputsClass, listObjects){
    document.querySelector('#backProduct').addEventListener('click', function(){
        productIndex = moveToList(listInputsClass, listObjects, productIndex, false)
        } 
    )
}