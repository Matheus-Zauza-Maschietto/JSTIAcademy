import {autenticator} from './autentication.js'

window.onload = function(){
    fetch('./json/infos.json')
        .then((response) => response.json())
        .then(function(data) {
            try {
                const login = document.querySelector("#login")
                const usuario = document.querySelector('#usuario')
                const senha = document.querySelector("#senha")

                login.addEventListener('click', function(){
                    let autenticado = false
                    for(let item of data["users"]){
                        if(item["user"] == usuario.value.trim() && item["senha"] == senha.value.trim()){
                        autenticado = true 
                        window.location.href = './panel.html'
                    }
                    }
                    if(autenticado === false){
                        alert("Usuário ou senha incorretos")
                    }
                })
            } catch (erro) {
                alert("Deu ruim, tente novamente");
            }
    })
    }

    
    
