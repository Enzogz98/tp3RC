document.addEventListener("DOMContentLoaded", function () {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var mesesList = document.getElementById("meses-list");
    var botonMostrar = document.getElementById("mostrar-lista");

    function mostrarLista() {
        mesesList.innerHTML = '';

        for (var i = 0; i < meses.length; i++) {
            var li = document.createElement("li");
            li.textContent = meses[i];
            mesesList.appendChild(li);
        }
    }

    botonMostrar.addEventListener("click", mostrarLista);
});
