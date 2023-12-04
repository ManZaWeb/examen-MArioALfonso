import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";


let resultadoContainer = document.createElement("div")
document.body.appendChild(resultadoContainer)


export function mostrarResultado(text){
    
    resultadoContainer.innerHTML += `<p>${text}</p>`
}

const vehiculo1 = new Vehiculo("BMW", "CLK", "Rojo", 1992, "2400cc");

mostrarResultado('Vehiculo')
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

const vehiculoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    AnoFabricacion: vehiculo1.AnoFabricacion,
    cilindrada: vehiculo1.cilindrada
}

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));
console.log(localStorage.getItem("vehiculo"))

const deportivo1 = new AutomovilDeportivo("Ferrari", "Spider", "amarillo", 2020, "4000cc", 500);
mostrarResultado("Deportivo")
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();

const deportivoObject = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    AnoFabricacion: deportivo1.AnoFabricacion,
    cilindrada: deportivo1.cilindrada,
    potenciaMotor : deportivo1.potenciaMotor
}

localStorage.setItem("deportivo", JSON.stringify(deportivoObject));
console.log(localStorage.getItem("deportivo"))

localStorage.removeItem(deportivo1.marca)
localStorage.removeItem(deportivo1.color)


//localStorage.clear()