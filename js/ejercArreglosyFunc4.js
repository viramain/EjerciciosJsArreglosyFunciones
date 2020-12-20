// 1- Escribir el código de una función a la que se pasa como parámetro un número entero 
// y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.


function enteroaCadena(entero) {
    if (entero % 2 == 0) {
        let tipo = "El número es Par"
    } else {
        let tipo = "El número es Impar"
    }
    return tipo;
}

let entero = parent(prompt("Ingrese un numero entero: "));
enteroaCadena(entero);
document.write(tipo);