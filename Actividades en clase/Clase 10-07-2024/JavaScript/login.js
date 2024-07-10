function validar() {
    let nombre = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contra").value;

    if (nombre === "josue" && contrasenia === "1234") {
        alert("Bienvenido al sistema")
        window.location.href = "datos.html";
    }else{
        document.getElementById('error-message').innerText = "Inserte correctamente sus datos";
        return false;
    } 

}