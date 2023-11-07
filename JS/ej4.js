function determinarParOImpar() {
    var numeroInput = document.getElementById("numero");
    var resultadoParImpar = document.getElementById("resultado");
    var numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        resultadoParImpar.textContent = "Por favor, ingresa un número válido.";
    } else if (numero % 2 === 0) {
        resultadoParImpar.textContent = "El número " + numero + " es Par.";
    } else {
        resultadoParImpar.textContent = "El número " + numero + " es Impar.";
    }
}