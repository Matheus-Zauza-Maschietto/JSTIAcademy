export function moveToList(listInputsClass, listObjects, listIndex, isNext){
    if(isNext===true){
        if(listIndex+1<listObjects.length){
            listIndex+=1
            placeValue(listInputsClass, listObjects, listIndex)   
            return listIndex
        }
        alert('Fim da lista')
    }
    else if(isNext===false){
        if(listIndex>=0){
            listIndex-=1
            placeValue(listInputsClass, listObjects, listIndex)
            return listIndex
        }
        alert('Fim da lista')
    }
}

export function placeValue(listInputsClass, listObjects, listIndex,){
    for(let el of document.querySelectorAll(`.${listInputsClass}`)){
        el.value = listObjects[listIndex][el.id]
    }
}

export function cleanWindow(){
    for(let element of document.querySelectorAll('.card')){
        element.style.display = 'none'
    }
}

export function showWindow(windowId, buttonId){
    document.getElementById(buttonId).addEventListener('click', function(){
        cleanWindow()
        document.getElementById(windowId).style.display = 'flex'   
    })
}

export function closeWindow(windowId, buttonId){
    document.getElementById(buttonId).addEventListener('click', function(){
        document.getElementById(windowId).style.display = 'none'  
    })
}

