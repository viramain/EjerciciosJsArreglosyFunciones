// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
// Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses = [];

for (let i = 0; i <= 11; i++) {
    switch (i) {
        case 0:
            meses[i] = "Enero";
            break;
        case 1:
            meses[i] = "Febrero";
            break;
        case 2:
            meses[i] = "Marzo";
            break;
        case 3:
            meses[i] = "Abril";
            break;
        case 4:
            meses[i] = "Mayo";
            break;
        case 5:
            meses[i] = "Junio";
            break;
        case 6:
            meses[i] = "Julio";
            break;
        case 7:
            meses[i] = "Agosto";
            break;
        case 8:
            meses[i] = "Septiembre";
            break;
        case 9:
            meses[i] = "Octubre";
            break;
        case 10:
            meses[i] = "Noviembre";
            break;
        case 11:
            meses[i] = "Diciembre";
            break;
        default:
            break;
    }
}

for (let i = 0; i <= 11; i++) {
    document.write(meses[i] + "<br>")
}