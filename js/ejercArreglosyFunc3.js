// 3- Escribir un script que simule el lanzamiento de dos dados. 
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno 
// de los lanzamientos de los dados. 
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
//  repitiendo 50 veces esta operación.


// math.random() devuelve valores entre 0 y 0.99999. la multiplico por 6 para que de valores hasta 5,
// y le sumo 1 para que sean valores entre 1 y 6

let arraySuma = []
for (let i = 0; i < 50; i++) {
    let dado1 = parseInt(6 * Math.random() + 1);
    let dado2 = parseInt(6 * Math.random() + 1);
    arraySuma[i] = dado1 + dado2;
}

// muestra array con resultado de las sumas de los dados
document.write("<h4>Sumas de los dados:</h4><br>");
for (let i = 0;
    (i < arraySuma.length - 1); i++) {
    document.write(arraySuma[i] + "<br>");
}




// let dado2 = parseInt(6 * math.random() + 1);
// if ((dado1 > 0 && dado1 <= 6) && (dado2 > 0 && dado2 <= 6)) {
//     document.write("OK" + "<br>")
// } else {
//     document.write("MAL" + "<br>")
// }

// function tiradaDado(){
//     var dado6caras = parseInt(6*Math.random()+1);
//     return dado6caras;
// }

// for(i=1;i<=1000;i++){
//     tirada = tiradaDado();
//     switch(tirada){
//         case 1:
//             a++;
//             break;
//         case 2:
//             b++;
//             break;
//         case 3:
//             c++;
//             break;
//         case 4:
//             d++;
//             break;
//         case 5:
//             e++;
//             break;
//         case 6:
//             f++;
//             break;
//     }
// }