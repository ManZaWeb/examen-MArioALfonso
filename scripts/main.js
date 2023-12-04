import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

let resultadoContainer = document.createElement("div")
document.body.appendChild(resultadoContainer)


export function mostrarResultado(text){
    
    resultadoContainer.innerHTML += `<p>${text}</p>`
}

const vehiculo1 = new Vehiculo("BMW", "CLK", "Rojo", 1992, "2400cc");

vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

const vehiculo1Object = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    AnoFabricacion: vehiculo1.AnoFabricacion,
    cilindrada: vehiculo1.cilindrada
}

localStorage.setItem("vehiculo", JSON.stringify(vehiculo1Object));
console.log(localStorage.getItem("vehiculo"))