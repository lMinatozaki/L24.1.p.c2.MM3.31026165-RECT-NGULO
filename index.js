/**
 * RECTÁNGULO
    Considerando que un rectángulo varía de un cuadrado sólo
    porque la altura no es igual a la base, diseñe la clase
    Cl_rectangulo que herede de Cl_cuadrado, y luego haga un
    programa que determine el área y el perímetro de un rectángulo
    (área= base * altura, perímetro= 2*base + 2*altura). 
 */

import Cl_rectangulo from './Cl_rectangulo.js';

export default class Cl_main {
  constructor() {
    const rectangulo1 = new Cl_rectangulo(4, 2);
    const rectangulo2 = new Cl_rectangulo(3, 5);

    const salida = document.getElementById('salida');
    salida.innerHTML = `
        Base del rectángulo: ${rectangulo1.base}
        <br>
        Altura: ${rectangulo1.altura}
        <br>
        Área resultante: ${rectangulo1.area()}
        <br>
        Perímetro: ${rectangulo1.perimetro()}
        <br>
        
        <br>
        Base del rectángulo: ${rectangulo2.base}
        <br>
        Altura: ${rectangulo2.altura}
        <br>
        Área resultante: ${rectangulo2.area()}
        <br>
        Perímetro: ${rectangulo2.perimetro()}
    `;
  }
}