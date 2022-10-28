import {clientList, clientIndex, nextClient} from './client.js'
import {productList} from './product.js'
import {} from './request.js'
import {moveToList, cleanWindow, showWindow, closeWindow, placeValue} from './universal.js'

//universal functions
cleanWindow()


// ------------------------------------------------------------------------------------------------------------
// Client
showWindow('client-screen', 'client')
closeWindow('client-screen', "closeCardClient")
placeValue('clientInputs', clientList, 0)
moveToList('clientInputs', clientList, clientIndex)
nextClient(moveToList, 'clientInputs', clientList, clientIndex, true)

// ------------------------------------------------------------------------------------------------------------
// Product
showWindow('product-screen', 'product')
closeWindow('product-screen', "closeCardProduct")
placeValue('productInputs', productList, 0)
moveToList()

// ------------------------------------------------------------------------------------------------------------
// request
showWindow('request-screen', 'request')
closeWindow('request-screen', "closeCardRequest")


// ------------------------------------------------------------------------------------------------------------