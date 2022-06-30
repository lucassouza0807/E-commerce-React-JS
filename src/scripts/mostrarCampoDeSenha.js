function mostrarCampoDeSenha() {
    let checkDeMostarSenha = document.getElementById("check");
    let inputSenha = document.getElementById("senha");
    let confirmaoSenha = document.getElementById("conf_senha");

    switch (checkDeMostarSenha.checked) {
        case true:
            inputSenha.type = "text";
            confirmaoSenha.type = "text";
            break;

        case false:
            inputSenha.type = "password";
            confirmaoSenha.type = "password";
            break;

        case undefined:
            console.log("?");
            break;
    }


}

export default mostrarCampoDeSenha;