export class Vehiculo{
    #marca;
    #modelo;
    #anoFabricacion;
    #cilindrada;

    constructor(marca, modelo, añoFabricacion, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#anoFabricacion = anoFabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        let text = `<p>Vehiculo de la marca: ${this.#marca}</p>
        <p>Modelo: ${this.#modelo}</p>
        <p>Año de Fabricación: ${this.#anoFabricacion}</p>
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

    getMarca(){
        return this.#marca;
    }

    setMarca(x){
        this.#marca = x;
    }

    getModelo(){
        return this.#modelo;
    }

    setModelo(x){
        this.#modelo = x;
    }

    getAñoFabricacion(){
        return this.#anoFabricacion;
    }

    setAñoFabricacion(x){
        this.#anoFabricacion = x;
    }

    getCilindrada(){
        return this.#cilindrada;
    }

    setCilindrada(x){
        this.#cilindrada = x;
    }
}