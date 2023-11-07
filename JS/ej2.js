var ciudades = [];

while (true) {
    var ciudad = prompt("Introduce el nombre de una ciudad:");
    if (ciudad === null) {
        break;
    }
    ciudades.push(ciudad);
}

document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
document.write("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");

ciudades.push("París");

document.write("<p>Segunda ciudad: " + ciudades[1] + "</p>");

ciudades[1] = "Barcelona";

document.write("<p>Elementos del arreglo:</p>");
document.write("<ul>");
for (var i = 0; i < ciudades.length; i++) {
    document.write("<li>" + ciudades[i] + "</li>");
}
document.write("</ul>");