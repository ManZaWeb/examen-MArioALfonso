import { mostrarResultado } from "./main.js";

export class Vehiculo{
    #marca;
    #modelo;
    #anoFabricacion;
    #cilindrada;

    constructor(marca, modelo, anoFabricacion, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#anoFabricacion = anoFabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        const msg = `<p>Vehiculo de la marca: ${this.#marca}</p>
        <p>Modelo: ${this.#modelo}</p>
        <p>Año de Fabricación: ${this.#anoFabricacion}</p>
        <p>Cilindrada: ${this.#cilindrada}</p>
        `
        mostrarResultado(`<p>${msg}</p>`);
    }

    acelerar(velocidad){
        const text =`<p>El coche acelero hasta los ${velocidad} km/h</p>`
        mostrarResultado(text)
    }

    arrancar(){
        const text =`<p>El coche arrancó: BRUM, BRUMM...</p>`
        mostrarResultado(text)

    }

    frenar(){
        const text =`<p>El coche frenó en seco o en mojado</p>`
        mostrarResultado(text)

    }

    get Marca(){
        return this.#marca;
    }

    set Marca(x){
        this.#marca = x;
    }

    get Modelo(){
        return this.#modelo;
    }

    set Modelo(x){
        this.#modelo = x;
    }

    get AñoFabricacion(){
        return this.#anoFabricacion;
    }

    set AñoFabricacion(x){
        this.#anoFabricacion = x;
    }

    get Cilindrada(){
        return this.#cilindrada;
    }

    set Cilindrada(x){
        this.#cilindrada = x;
    }
}