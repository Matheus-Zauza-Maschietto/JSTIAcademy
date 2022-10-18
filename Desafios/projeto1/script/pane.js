import {CreateClientCard, passClientRegister} from './clients.js'

window.onload = function(){
    
    const toClient = document.querySelector('#toClient')
    const cardTable = document.querySelector('#interfaceBody')
    let bodyHasCard = false
    let actualId = 0

    toClient.addEventListener('click', function(){
        
        if (bodyHasCard===false){
            CreateClientCard(cardTable)
            bodyHasCard = true
            actualId = passClientRegister()
            
        }
    })
}