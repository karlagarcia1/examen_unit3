// Hacer un script que pida el número de filas y columnas y escriba una tabla. Dentro 
// de cada una de las celdas se escribirá un número consecutivo en orden 
// descendente. Si, por ejemplo, la tabla es de 5×5, los números irán del 25 al 1. 



function crearTabla(filas, columnas) {
    let numero = filas * columnas;
    let tabla = '';
    
    for (let i = 0; i < filas; i++) {
        tabla += '<tr>'; //table row
        for (let j = 0; j < columnas; j++) {
            tabla += `<td>${numero--}</td>`;
        }
        tabla += '</tr>';
    }
    
    return `<table>${tabla}</table>`;
}