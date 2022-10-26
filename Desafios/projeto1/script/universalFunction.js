export function cleanCardBody(cardEl){
    while (cardEl.firstChild) {
        cardEl.removeChild(cardEl.firstChild);
    }
}

export function closeCard(elementId){
    let closeCardEl = document.querySelector(elementId)
        closeCardEl.addEventListener("click", function(){
            closeCardEl.parentElement.parentElement.remove()
        })
}

export function moveAtList(listElements, listValues, index, isNext){
    if(isNext===true && index+1<listValues.length){
        index+=1
        for(let item of listElements){
            item.value = listValues[index][item.id]
        }
        return index
    }
    else if(isNext===true && index-1>=0){
        index-=1
        for(let item of listElements){
            item.value = listValues[index][item.id]
        }
        return index
    }
    else{
        alert('Fim da lista')
    }
}
