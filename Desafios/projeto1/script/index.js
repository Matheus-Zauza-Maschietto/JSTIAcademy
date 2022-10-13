window.onload = function(){
    const login = document.querySelector("#login")
    const usuario = document.querySelector('#usuario')
    const senha = document.querySelector("#senha")
    let autenticado = false
    let users = [
        {"user": "matheus", "senha": "12345"},
        {"user": "andre", "senha": "666"},
        {"user": "miriam", "senha": "12345"}
    ]

    login.addEventListener('click', function(){
        autenticado = false
        for(item of users){
            if(item["user"] == usuario.value && item["senha"] == senha.value){
                autenticado = true 
                   
            }
        }
        if(autenticado === false){
            alert("Usuário ou senha errados")
        }
    })

}