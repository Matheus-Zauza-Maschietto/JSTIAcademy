export function getValuesToRequest(placeValues, listInputs,listInputsClass, idFocusOut, errorMessage){
    let id = document.getElementById(idFocusOut)
    id.addEventListener('focusout', function(){
        if(Number(id.value) >= listInputs.length || Number(id.value < 0)){
            alert(errorMessage)
        }
        else{
            placeValues(listInputsClass, listInputs, id.value)    
        }
    })
}

export function launchRequest(){

}

export function createTableRow(){
    
}

export function sum(subPrice){
    let result = 0
    for(let price of subPrice){
        result += price
    }
    return result
}