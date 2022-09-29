window.onload = function(){
    const v1 = document.querySelector('#sum1');
    const v2 = document.querySelector('#sum2');
    const result = document.querySelector('#result');
    const reset = document.querySelector('#reset');


    v2.addEventListener('blur', function(){
        let value1 = Number(v1.value)
        let value2 = Number(v2.value)
        console.log(value1)
        if (isNaN(value1)===false && isNaN(value2)===false){
            result.value = value1+value2
        }
        else{
            v1.value = ''
            v2.value = ''
            result.value = ''
            alert('O que foi digitado não é considerado um numero valido')
        }
        
    })
    reset.addEventListener('click', function(){
        v1.value = ''
        v2.value = ''
        result.value = ''
    })

}