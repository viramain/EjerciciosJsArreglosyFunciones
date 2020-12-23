// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
//  la creación de la tabla debe ser realizada con una función y mostrar solo
//  los resultados del 1 al 10 del número elegido por el usuario.

let nrotabla = parseInt(prompt("Ingrese el número para generar tabla de multiplicar: "));
gentabla(nrotabla);

function gentabla(nrotabla) {
    for (i = 1; i <= 10; i++) {
        document.write(nrotabla + " x " + i + " = " + (nrotabla * i) + "<br>")
    }
    return
}