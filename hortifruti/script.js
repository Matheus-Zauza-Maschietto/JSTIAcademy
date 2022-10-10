window.onload = function(){
    const sellItensTag = document.querySelector('#sell-list');
    const valorTotal = document.querySelector('#valorTotal');
    const buyUl = document.querySelector('#buy-list');
    // let buyLi = document.querySelectorAll('.item-to-buy')
    const sellItens = [
        {frutaNome: 'Maça', valor: 4},
        {frutaNome: 'Melão', valor: 10},
        {frutaNome: 'Laranja', valor: 4},
        {frutaNome: 'Goiaba', valor: 7},
        {frutaNome: 'Banana', valor: 5},
        {frutaNome: 'Melancia', valor: 12},
    ]

    let buyItens = []

// --------------------------------------------------------
    function createSell(lista, tagToAppend){
        for(let item of lista){
            let li = document.createElement('li');
            li.setAttribute('class', 'product-sell flex center item-to-sell');
            li.textContent = item['frutaNome']
            li.setAttribute('data-value', item['valor']);
            tagToAppend.appendChild(li);
        }
    }
    createSell(sellItens, sellItensTag);

// --------------------------------------------------------
    function buyAddItens(TagListToAddEvent, TagToAppendItem){
        TagListToAddEvent.forEach(function(item){
            item.addEventListener('click', function(){
                if(buyItens.includes(item.textContent)){
                    alert('Este item já está presente na lista');
                }
                else{
                    let li = item.cloneNode(true)
                    li.setAttribute('class', 'product-sell flex center item-to-buy');
                    deleteAddItens(li);
                    TagToAppendItem.appendChild(li);
                    //buyItens.push(li.textContent); Linha que impede de existir mais de um mesmo item na lista
                    valorTotal.textContent = sumBuyItens(document.querySelectorAll('.item-to-buy')).toLocaleString('pt-br', {style: 'currency', currency: 'brl'});
                }
            })
        })
    }
    const sellItenslist = document.querySelectorAll('.item-to-sell');
    buyAddItens(sellItenslist, buyUl)

// --------------------------------------------------------
    function deleteAddItens(item){
        item.addEventListener('click', function(){
            item.remove()
            //buyItens.splice(buyItens.indexOf(item.textContent), 1) Linha que impede de existir mais de um mesmo item na lista

            valorTotal.textContent = sumBuyItens(document.querySelectorAll('.item-to-buy')).toLocaleString('pt-br', {style: 'currency', currency: 'brl'});
        })
    }

// --------------------------------------------------------
    function sumBuyItens(listItens){
        let sumPrice = 0
        for(let elem of listItens){
            sumPrice += Number(elem.dataset.value)
        }
        return sumPrice;
    }
    
// --------------------------------------------------------
}