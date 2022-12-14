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
        if(listIndex-1>=0){
            listIndex-=1
            placeValue(listInputsClass, listObjects, listIndex)
            return listIndex
        }
        alert('Fim da lista')
    }
    return listIndex
}

export function placeValue(listInputsClass, listObjects, listIndex,){
    for(let el of document.getElementsByClassName(listInputsClass)){
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

export function saveValue(listInputsClass, listObjects, listIndex, objectModule){
    if(listObjects.length == listIndex){
        for(let el of document.querySelectorAll(`.${listInputsClass}`)){
            objectModule[el.id] = el.value
        }
        listObjects.push(objectModule)
        alert('Cadastro adicionado com sucesso')
    }
    else{
        alert("Click em adicionar para poder adicionar um novo cadastro")
    }

}

export function newValue(listInputsClass, objectModule, index){
    for(let el of document.querySelectorAll(`.${listInputsClass}`)){
        el.value = objectModule[el.id]
    }
    return index
}

export function openInputs(listOfIdsToOpen){
    for(let item of listOfIdsToOpen){
        document.getElementById(item).removeAttribute('readonly')
    }
}

export function closeInputs(listOfIdsToOpen){
    for(let item of listOfIdsToOpen){
        document.getElementById(item).setAttribute('readonly','')
    }
}
