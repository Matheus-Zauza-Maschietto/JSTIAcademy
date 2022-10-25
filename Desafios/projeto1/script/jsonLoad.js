export function ValidarLogin() {
    fetch('./json/infos.json')
        .then((response) => response.json())
        .then(function(data) {

            try {
                return data["users"]
            } catch (erro) {
                alert("Deu ruim, tente novamente");
            }
        })

}