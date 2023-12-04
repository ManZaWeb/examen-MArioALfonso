export class Vehiculo{
    #marca;
    #modelo;
    #añoFabricacion;
    #cilindrada;

    constructor(marca, modelo, añoFabricacion, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#añoFabricacion = añoFabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        let text = `<p>Vehiculo de la marca: ${this.#marca}</p>
        <p>Modelo: ${this.#modelo}</p>
        <p>Año de Fabricación: ${this.#añoFabricacion}</p>
        <p>Cilindrada: ${this.#cilindrada}</p>
        `
        mostrarResultado(text)
    }

    acelerar(velocidad){
        let text =`<p>El coche acelero hasta los ${velocidad} km/h</p>`
        mostrarResultado(text)
    }

    arrancar(){
        let text =`<p>El coche arrancó: BRUM, BRUMM...</p>`
        mostrarResultado(text)

    }

    frenar(){
        let text =`<p>El coche frenó en seco o en mojado</p>`
        mostrarResultado(text)

    }
}