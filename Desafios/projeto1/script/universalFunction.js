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


