import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";


export class AutomovilDeportivo extends Vehiculo{
    #potenciaMotor;

constructor(marca, modelo, añoFabricacion, cilindrada, potenciaMotor){
    super(marca, modelo, cilindrada, añoFabricacion);
    this.#potenciaMotor = potenciaMotor;
}

activarModoDeportivo(){
    const text =`<p>El modo deportivo ha sido activado</p>`
        mostrarResultado(text)
}

get PotenciaMotor(){
    return this.#potenciaMotor;
}

setPotenciaMotor(x){
    this.#potenciaMotor = x;
}
}