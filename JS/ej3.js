function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

var conteoSumas = new Array(11).fill(0);

function lanzarDados() {
    for (var i = 0; i < 50; i++) {
        var dado1 = lanzarDado();
        var dado2 = lanzarDado();
        var suma = dado1 + dado2;
        conteoSumas[suma - 2]++;
    }

    var resultadosDiv = document.getElementById("resultados");

    resultadosDiv.innerHTML = "<h2>Resultados:</h2>";
    for (var i = 0; i < conteoSumas.length; i++) {
        resultadosDiv.innerHTML += "Suma " + (i + 2) + ": " + conteoSumas[i] + " veces<br>";
    }
}