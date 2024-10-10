/**
 * ESTUDIANTE-A
    El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
    Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
    Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a
    15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca.
    Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un
    estudiante y reporte el monto de la beca, o si no le corresponde beca. 
 */

import Cl_becado from './Cl_becado.js';

export default class Cl_main {
    constructor() {
        const estudiante1 = new Cl_becado('Mary', 132, 8);
        const estudiante2 = new Cl_becado('Alirio', 315, 35);

        const salida = document.getElementById('salida');
        salida.innerHTML = `
            Nombre del estudiante: ${estudiante1.nombre}
            <br>
            Acumulado de notas: ${estudiante1.acumuladoNotas}
            <br>
            Cantidad de materias: ${estudiante1.cantidadMaterias}
            <br>
            Nota promedio: ${estudiante1.promedio().toFixed(2)}
            <br>
            ${estudiante1.reporteBeca()}
            <br>
            
            <br>
            Nombre del estudiante: ${estudiante2.nombre}
            <br>
            Acumulado de notas: ${estudiante2.acumuladoNotas}
            <br>
            Cantidad de materias: ${estudiante2.cantidadMaterias}
            <br>
            Nota promedio: ${estudiante2.promedio().toFixed(2)}
            <br>
            ${estudiante2.reporteBeca()}
        `;
    }
}