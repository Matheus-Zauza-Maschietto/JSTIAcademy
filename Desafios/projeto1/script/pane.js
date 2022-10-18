import {CreateClientCard, moveClientList, clients, setInitialClientValue, cleanAndOpenToAddClient, cleanAndCloseToAddClient, addNewClient } from './clients.js'
import {cleanBodyCard, closeCard} from './universalFunction.js'

window.onload = function(){

    const toClient = document.querySelector('#toClient')
    const toProduct = document.querySelector('#toProducts')
    const cardTable = document.querySelector('#interfaceBody')
    let cardExist = false

    toClient.addEventListener('click', function(){
        cleanBodyCard(cardTable)
        cardExist = CreateClientCard(cardTable)
        
        let isAddingNewClient = false
        let actualId = 0
        let idInput = document.querySelector("#identifier")
        let nomeInput = document.querySelector("#name")
        let dataInput = document.querySelector("#date")

        setInitialClientValue(idInput, nomeInput, dataInput, clients)


        let backClient = document.querySelector("#backClient")
        backClient.addEventListener('click', function(){
            cleanAndCloseToAddClient(nomeInput, dataInput)
            isAddingNewClient = false
            actualId = moveClientList(idInput, nomeInput, dataInput, clients, actualId, false)
        })
            let nextClient = document.querySelector("#nextClient")
        nextClient.addEventListener('click', function(){
            cleanAndCloseToAddClient(nomeInput, dataInput)
            isAddingNewClient = false
            actualId = moveClientList(idInput, nomeInput, dataInput, clients, actualId, true) 
        })


        let newClient = document.querySelector("#Novo")
        newClient.addEventListener('click', function(){
            isAddingNewClient = true
            cleanAndOpenToAddClient(idInput, nomeInput, dataInput, clients)
            actualId = clients.length
        })
        let saveClient = document.querySelector('#Salvar')
        saveClient.addEventListener('click', function(){
            addNewClient(idInput, nomeInput, dataInput, clients, isAddingNewClient)
            cleanAndCloseToAddClient(nomeInput, dataInput)
            actualId = 0
        })


        let closeCardEl = document.querySelector("#closeCard")
        closeCardEl.addEventListener("click", function(){
            cardExist = closeCard(closeCardEl.parentElement.parentElement, cardExist, "A tela de clientes já está aberta")
            actualId = 0
        })
        
        
    }
    )
    
    toProduct.addEventListener('click', function(){
        
    })
}