function calcularPerimetro() {
    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var resultadoPerimetro = document.getElementById("resultado");

    if (isNaN(ladoA) || isNaN(ladoB)) {
        resultadoPerimetro.textContent = "Por favor, ingresa valores válidos para los lados.";
    } else {
        var perimetro = 2 * (ladoA + ladoB);
        resultadoPerimetro.textContent = "El perímetro del rectángulo es: " + perimetro;
    }
}