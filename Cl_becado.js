import Cl_estudiante from './Cl_estudiante.js';

export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias) {
        super(nombre, acumuladoNotas, cantidadMaterias);
    }

    montoBeca() {
    const promedio = this.promedio();
        if (promedio > 15) {
            return 30;
        } else if (promedio >= 10) {
            return 20;
        } else {
            return 0;
        }
    }

    reporteBeca() {
    const monto = this.montoBeca();
        if (monto > 0) {
            return `${this.nombre} recibe una beca de $${monto}.00`;
        } else {
            return `${this.nombre} no le corresponde beca`;
        }
    }
}