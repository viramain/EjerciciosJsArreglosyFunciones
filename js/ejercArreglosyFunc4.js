// 1- Escribir el código de una función a la que se pasa como parámetro un número entero 
// y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.

let texto = "";
let entero = parseInt(prompt("Ingrese un numero entero: "));
enteroaCadena(entero);
document.write("RESULTADO = " + texto);

function enteroaCadena(entero) {
    if (entero % 2 == 0) {
        texto = "El número es Par";
    } else {
        texto = "El número es Impar";
    }
    return texto;
}