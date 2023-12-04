import { Vehiculo } from "./vehiculo.js";

export class AutomovilDeportivo extends Vehiculo{
    #potenciaMotor;

constructor(marca, modelo, añoFabricacion, cilindrada, potenciaMotor){
    this.#super = super;
    this.#potenciaMotor = potenciaMotor;
}

activarModoDeportivo(){
    let text =`<p>El modo deportivi ha sido activado</p>`
        mostrarResultado(text)
}
}