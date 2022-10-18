
export function cleanBodyCard(cardEl){
    while (cardEl.firstChild) {
        cardEl.removeChild(cardEl.firstChild);
    }
}

export function closeCard(MotherDiv, cardExists, alreadyExistsErrorMsg){
    if(cardExists===true){
        MotherDiv.remove()
        return false
    }
    else{
        alert(alreadyExistsErrorMsg)
        return true
    }
}