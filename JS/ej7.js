function mostrarTablaMultiplicar() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabla = document.getElementById("tabla");
    
    if (isNaN(numero)) {
        tabla.textContent = "Por favor, ingresa un número válido.";
    } else {
        var resultado = "";
        for (var i = 1; i <= 10; i++) {
            resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
        }
        tabla.innerHTML = resultado;
    }
}