/*alert("Hola que hace");
alert("waos soy programador...")
alert("bye bye ")*/

console.log(Document)
function CambiarTexto(){
    let parrafo = document.getElementById("texto_mensaje")
    parrafo.textContent = "WAOSSS"
}

function CambioT(){
    var parrafo = document.getElementById("p1")
    parrafo.textContent = "Mucho lore tiene html "
    parrafo.style.color="purple"
    parrafo.style.fontSize = "50px"
}

function UnirTitulo(){
    let ti11 = document.getElementById("ti1").textContent;
    let ti22 = document.getElementById("ti2").textContent;
        alert(ti11.innerText + " " + ti22.innerText);
    let UnirTitulo = document.getElementById("tituloUnido");
    UnirTitulo.textContent = ti11 + " " + ti22;

}

function 
unirRecuadros() {
  let recuadro1 = document.getElementById("t1").value;
  let recuadro2 = document.getElementById("t2").value;
  let recuadroUnido = recuadro1 + " "+ recuadro2;
  document.getElementById("t3").value = recuadroUnido;
}