// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
//  luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

let ladomenor = parseInt(prompt("Ingrese lado menor del Rectangulo: "));
let ladomayor = parseInt(prompt("Ingrese lado mayor del Rectangulo: "));
let perimetro = 0;

function perimetroRec(ladomenor, ladomayor) {
    perimetro = 2 * (ladomenor + ladomayor);
    return perimetro;
}

perimetroRec(ladomenor, ladomayor);
document.write("El perímetro del Rectangulo es: " + perimetro);