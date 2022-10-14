
export function autenticator(){
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
        
        let UserInput = usuario.value
        let passwordInput = senha.value

        autenticado = false
        for(let item of users){
            if(item["user"] == UserInput.trim() && item["senha"] == passwordInput.trim()){
                autenticado = true 
                window.location.href = './panel.html'
            }
        }
        if(autenticado === false){
            alert("Usuário ou senha errados")
        }
    })
}