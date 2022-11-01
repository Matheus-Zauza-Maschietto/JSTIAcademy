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

export let productIndex = 0

let editableInputs = ['descricaoProduct', 'precoProduct', 'quantidadeProduct']

export function nextProduct(moveToList, listInputsClass, listObjects, closeFunc){
    document.querySelector('#nextProduct').addEventListener('click', function(){
        if(productIndex != productList.length){
            closeFunc(editableInputs) 
         }
        productIndex = moveToList(listInputsClass, listObjects, productIndex, true)
        } 
    )
}

export function backProduct(moveToList, listInputsClass, listObjects, closeFunc){
    document.querySelector('#backProduct').addEventListener('click', function(){
        closeFunc(editableInputs)
        productIndex = moveToList(listInputsClass, listObjects, productIndex, false)
        } 
    )
}

export function newProduct(listInputsClass, newValueFunc, openFunc){
    document.querySelector('#NovoProduct').addEventListener('click', function(){
        openFunc(editableInputs)
        let objectProduct = {
            'idProduct': productList.length,
            'descricaoProduct': '',
            'precoProduct': '',
            'quantidadeProduct': '',
        }
        productIndex = newValueFunc(listInputsClass, objectProduct, productList.length)
        } 
    )
}

export function saveProduct(saveValue, listInputsClass, listObjects){
    let object = {
        'idProduct': '',
        'descricaoProduct': '',
        'precoProduct': '',
        'quantidadeProduct': '',
    } 
    document.querySelector('#SalvarProduct').addEventListener('click', function(){
        saveValue(listInputsClass, listObjects, productIndex, object)
    })
}

export function checkTypeInputs(){
    document.querySelector('#SalvarProduct').addEventListener('outfocus', function(){
        saveValue(listInputsClass, listObjects, productIndex, object)
    })
}