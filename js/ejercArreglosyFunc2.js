// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
//  almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” 
// se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Arreglo para guardar ciudades
let ciudades = [];
let i = 0;
do {
    let ciudad = prompt("Ingrese el nombre de una Ciudad:");
    ciudades[i] = ciudad;
    i++;
} while (confirm("Desea continuar ingresando una cadena?"));
// && (ciudad != "0")

// mostrar arreglo generado
document.write("<h4>Las Ciudades Ingresadas son:</h4><br>");
for (let i = 0;
    (i < ciudades.length); i++) {
    document.write(ciudades[i] + "<br>");
}

// Mostrar la longitud del arreglo.
document.write("<hr>" + "La longitud del arreglo es: " + ciudades.length + "<br>");

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write("Item en Primera Posición: " + ciudades[0] + "<br>");
document.write("Item en Tercera Posición: " + ciudades[2] + "<br>");
document.write("Item en última Posición: " + ciudades[(ciudades.length - 1)] + "<br>");

// Añade en última posición la ciudad de París.
ciudades.push("París");

// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write("<hr>" + "Elemeto que ocupa la segunda Posición: " + ciudades[1] + "<br>");

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = "Barcelona";


// RESULTADO FINAL arreglo generado
document.write("<h4>Arreglo luego de ingresar BARCELONA en 2da posición, y PARIS al final:</h4><br>");
for (let i = 0;
    (i < ciudades.length); i++) {
    document.write(ciudades[i] + "<br>");
}