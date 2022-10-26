import {CreateClientCard, moveClientList, clients, setInitialClientValue, cleanAndOpenToAddClient,cleanAndCloseToAddClient, addNewClient, clientIndex } from './clients.js'
import {cleanCardBody, closeCard} from './universalFunction.js'
import {CreateProductCard, products, setInitialProductValue, moveProductList, cleanAndCloseToAddProduct, cleanAndOpenToAddProduct, addNewProduct} from './products.js'
import {CreateRequestCard, requests, selectClientById, selectProductById, addRequest, saveLastData} from './requests.js'


window.onload = function(){
    const toClient = document.querySelector('#toClient')
    const toProduct = document.querySelector('#toProducts')
    const toRequest = document.querySelector('#toRequest')
    const cardTable = document.querySelector('#interfaceBody')
    let actualIdClient = 0
    let actualIdProduct = 0

    toClient.addEventListener('click', function(){
        // CHECK IF INIT VALUE IN VALUE RANGE
        if(actualIdClient == clients.length){
            actualIdClient = clients.length-1
        }
        
        // CLEAN BODY
        cleanCardBody(cardTable)

        // CREATE CARD
        CreateClientCard(cardTable)
        
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
            actualIdClient = cleanAndOpenToAddClient(idInput, nomeInput, dataInput, clients)
        })
        
        // SAVE
        let saveClient = document.querySelector('#Salvar')
        saveClient.addEventListener('click', function(){
            addNewClient(idInput, nomeInput, dataInput, clients, isAddingNewClient)
            cleanAndCloseToAddClient(nomeInput, dataInput)
        })

        // CLOSE
        closeCard('#closeCard')
        
        
    })
    
    toProduct.addEventListener('click', function(){
        // CHECK IF INIT VALUE IN VALUE RANGE
        if(actualIdProduct == products.length){
            actualIdProduct = products.length-1
        }
        

        // CLEAN BODY
        cleanCardBody(cardTable)

        // CREATE CARD
        CreateProductCard(cardTable)
        
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
            actualIdProduct = cleanAndOpenToAddProduct(idProductInput, descricaoInput, precoInput, quantidadeInput, products)
        })

        // SAVE
        let saveProduct = document.querySelector('#productSalvar')
        saveProduct.addEventListener('click', function(){
            addNewProduct(idProductInput, descricaoInput, precoInput, quantidadeInput, products, isAddingNewProduct)
            cleanAndCloseToAddProduct(descricaoInput, precoInput, quantidadeInput)
        })

        // CLOSE
        closeCard('#closeCard')

    })
    toRequest.addEventListener('click', function(){
        // CLEAN BODY
        cleanCardBody(cardTable)

        // CREATE CARD
        CreateRequestCard(cardTable, requests, )

        // SELECT CLIENT NAME
        selectClientById(clients)

        // SELECT PRODUCT NAME
        selectProductById(products)

        // ADD ITEM AT TABLE
        addRequest(document.querySelector('#tbody'), requests, clients, products)

        // CLOSE
        closeCard('#closeCard')
    })  
}