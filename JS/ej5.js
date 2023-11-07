function determinarCasoDeTexto() {
    var textoInput = document.getElementById("texto");
    var resultadoCaso = document.getElementById("resultado");
    var texto = textoInput.value;

    if (!/[a-zA-Z]/.test(texto)) {
        resultadoCaso.textContent = "La cadena no contiene letras.";
    }
    else if (/^[A-Z]+$/.test(texto)) {
        resultadoCaso.textContent = "La cadena está formada solo por letras mayúsculas.";
    }
    else if (/^[a-z]+$/.test(texto)) {
        resultadoCaso.textContent = "La cadena está formada solo por letras minúsculas.";
    }
    else {
        resultadoCaso.textContent = "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}