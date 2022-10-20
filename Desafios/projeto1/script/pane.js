import {CreateClientCard, moveClientList, clients, setInitialClientValue, cleanAndOpenToAddClient,cleanAndCloseToAddClient, addNewClient } from './clients.js'
import {cleanCardBody, closeCard} from './universalFunction.js'
import {CreateProductCard, products, setInitialProductValue, moveProductList, cleanAndCloseToAddProduct, cleanAndOpenToAddProduct, addNewProduct} from './products.js'

window.onload = function(){

    const toClient = document.querySelector('#toClient')
    const toProduct = document.querySelector('#toProducts')
    const cardTable = document.querySelector('#interfaceBody')
    let cardExist = false
    let actualIdClient = 0
    let actualIdProduct = 0

    toClient.addEventListener('click', function(){
        // CHECK IF INIT VALUE IN VALUE RANGE
        if(actualIdProduct == products.length){
            actualIdProduct = products.length-1
        }
        // CLEAN BODY
        cleanCardBody(cardTable)

        // CREATE CARD
        cardExist = CreateClientCard(cardTable)
        
        let isAddingNewClient = false
        let idInput = document.querySelector("#identifier")
        let nomeInput = document.querySelector("#name")
        let dataInput = document.querySelector("#date")

        // SET INIT VALUE
        setInitialClientValue(idInput, nomeInput, dataInput, clients, actualIdClient)

        //BACK
        let backClient = document.querySelector("#backClient")
        backClient.addEventListener('click', function(){
            isAddingNewClient = false
            actualIdClient = moveClientList(idInput, nomeInput, dataInput, clients, actualIdClient, false)
        })
        //NEXT
        let nextClient = document.querySelector("#nextClient")
        nextClient.addEventListener('click', function(){
            isAddingNewClient = false
            actualIdClient = moveClientList(idInput, nomeInput, dataInput, clients, actualIdClient, true) 
        })

        // ADD
        let newClient = document.querySelector("#Novo")
        newClient.addEventListener('click', function(){
            isAddingNewClient = true
            cleanAndOpenToAddClient(idInput, nomeInput, dataInput, clients)
            actualIdClient = clients.length
        })
        
        // SAVE
        let saveClient = document.querySelector('#Salvar')
        saveClient.addEventListener('click', function(){
            addNewClient(idInput, nomeInput, dataInput, clients, isAddingNewClient)
            cleanAndCloseToAddClient(nomeInput, dataInput)
        })

        // CLOSE
        let closeCardEl = document.querySelector("#closeCard")
        closeCardEl.addEventListener("click", function(){
            cardExist = closeCard(closeCardEl.parentElement.parentElement, cardExist, "A tela de clientes já está aberta")
        })
        
        
    }
    )
    
    toProduct.addEventListener('click', function(){
        // CHECK IF INIT VALUE IN VALUE RANGE
        if(actualIdClient == clients.length){
            actualIdClient = clients.length-1
        }

        // CLEAN BODY
        cleanCardBody(cardTable)

        // CREATE CARD
        cardExist = CreateProductCard(cardTable)
        
        let isAddingNewProduct = false
        let idProductInput = document.querySelector('#productIdentifier')
        let descricaoInput = document.querySelector('#descricao')
        let precoInput = document.querySelector('#preco')
        let quantidadeInput = document.querySelector('#qnt')

        // SET INIT VALUE
        setInitialProductValue(idProductInput, descricaoInput, precoInput, quantidadeInput, products, actualIdProduct)
        
        //BACK
        let backProduct = document.querySelector("#backProduct")
            backProduct.addEventListener('click', function(){
                isAddingNewProduct = false
                actualIdProduct = moveProductList(idProductInput, descricaoInput, precoInput, quantidadeInput, products, actualIdProduct, false)
        })
        // NEXT
        let nextProduct = document.querySelector("#nextProduct")
            nextProduct.addEventListener('click', function(){
                isAddingNewProduct = false
                actualIdProduct = moveProductList(idProductInput, descricaoInput, precoInput, quantidadeInput, products, actualIdProduct, true)
        })

        //ADD
        let newProduct = document.querySelector("#productNovo")
        newProduct.addEventListener('click', function(){
            isAddingNewProduct = true
            cleanAndOpenToAddProduct(idProductInput, descricaoInput, precoInput, quantidadeInput, products)
            actualIdProduct = products.length
        })

        // SAVE
        let saveProduct = document.querySelector('#productSalvar')
        saveProduct.addEventListener('click', function(){
            addNewProduct(idProductInput, descricaoInput, precoInput, quantidadeInput, products, isAddingNewProduct)
            cleanAndCloseToAddProduct(descricaoInput, precoInput, quantidadeInput)
        })

        // CLOSE
        let closeCardEl = document.querySelector("#closeCard")
        closeCardEl.addEventListener("click", function(){
        cardExist = closeCard(closeCardEl.parentElement.parentElement, cardExist, "A tela de produtos já está aberta")
        })

    })
}