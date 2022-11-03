import {clientList, nextClient, backClient, newClient, saveClient} from './client.js'
import {productList, nextProduct, backProduct, newProduct, saveProduct} from './product.js'
import {getValuesToRequest, launchRequest} from './request.js'
import {moveToList, cleanWindow, showWindow, closeWindow, placeValue, saveValue, newValue, closeInputs, openInputs} from './universal.js'
import {logout} from './logout.js'

//universal functions
cleanWindow()

// ------------------------------------------------------------------------------------------------------------
// Client
showWindow('client-screen', 'client')
closeWindow('client-screen', "closeCardClient")
placeValue('clientInputs', clientList, 0)
nextClient(moveToList, 'clientInputs', clientList, closeInputs)
backClient(moveToList, 'clientInputs', clientList, closeInputs)
newClient('clientInputs', newValue, openInputs)
saveClient(saveValue, 'clientInputs', clientList)

// ------------------------------------------------------------------------------------------------------------
// Product
showWindow('product-screen', 'product')
closeWindow('product-screen', "closeCardProduct")
placeValue('productInputs', productList, 0)
nextProduct(moveToList, 'productInputs', productList, closeInputs)
backProduct(moveToList, 'productInputs', productList, closeInputs)
newProduct('productInputs', newValue, openInputs)
saveProduct(saveValue, 'productInputs', productList, ['precoProduct', 'quantidadeProduct'])

// ------------------------------------------------------------------------------------------------------------
// request
showWindow('request-screen', 'request')
closeWindow('request-screen', "closeCardRequest")
getValuesToRequest(placeValue, clientList,'clientRequest', 'idClientRequest', 'Cliente não encontrado', 'inputsRequestClient')
getValuesToRequest(placeValue, productList,'productRequest', 'requestIdProduct', 'Produto não encontrado', 'inputRequestProduct')
launchRequest(productList)



// ------------------------------------------------------------------------------------------------------------
// logout
logout()
