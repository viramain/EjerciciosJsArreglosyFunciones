// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa 
// como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena 
// está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function mayMin(texto) {
    if (texto == texto.toUpperCase()) {
        resultado = "El texto ingresado está formada sólo por mayúsculas";
    } else if (texto == texto.toLowerCase()) {
        resultado = "El texto ingresado está formada sólo por minúsculas";
    } else {
        resultado = "El texto ingresado está formada por mayúsculas y minúsculas";
    }
    return resultado;
}

let texto = prompt("Ingrese una Cadena de Texto: ");
mayMin(texto);
document.write(resultado);