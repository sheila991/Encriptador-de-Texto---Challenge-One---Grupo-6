function encriptar(){
    
    
    
    var frase = document.getElementById("textArea").value.toLowerCase();


    var textArea = frase.replace(/e/img, "enter");
    var textArea = textArea.replace(/o/img, "ober");
    var textArea = textArea.replace(/i/img, "imes");
    var textArea = textArea.replace(/a/img, "ai");
    var textArea = textArea.replace(/u/img, "ufat");

    document.getElementById("textoende").innerHTML = textArea;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
    document.getElementById("mensaje").style.display = "none";

}

function desencriptar(){
    
    
    var frase = document.getElementById("textArea").value.toLowerCase();

    var textArea = frase.replace(/enter/img, "e");
    var textArea = textArea.replace(/ober/img, "o");
    var textArea = textArea.replace(/imes/img, "i");
    var textArea = textArea.replace(/ai/img, "a");
    var textArea = textArea.replace(/ufat/img, "u");

    document.getElementById("textoende").innerHTML = textArea
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit"; 
}

function copy() {
    
    let contenido = document.querySelector("#textoende");
    contenido.select();
    document.execCommand("copy");
    
}

function borrar() {
    let borrar = document.getElementById("textArea", "textoende").value = "";
    borrar = document.getElementById("textoende").value = "";
    borrar = document.getElementById("mensaje").value = "show";
    document.location.reload();


}