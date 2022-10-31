import {clientList, nextClient, backClient, newClient} from './client.js'
import {productList, nextProduct, backProduct} from './product.js'
import {} from './request.js'
import {moveToList, cleanWindow, showWindow, closeWindow, placeValue, saveValue, newValue} from './universal.js'

//universal functions
cleanWindow()
let clientIndex = 0

// ------------------------------------------------------------------------------------------------------------
// Client
showWindow('client-screen', 'client')
closeWindow('client-screen', "closeCardClient")
placeValue('clientInputs', clientList, 0)
nextClient(moveToList, 'clientInputs', clientList)
backClient(moveToList, 'clientInputs', clientList)
newClient('clientInputs', newValue)

// ------------------------------------------------------------------------------------------------------------
// Product
showWindow('product-screen', 'product')
closeWindow('product-screen', "closeCardProduct")
placeValue('productInputs', productList, 0)
nextProduct(moveToList, 'productInputs', productList)
backProduct(moveToList, 'productInputs', productList)

// ------------------------------------------------------------------------------------------------------------
// request
showWindow('request-screen', 'request')
closeWindow('request-screen', "closeCardRequest")


// ------------------------------------------------------------------------------------------------------------