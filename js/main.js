

let menor = 0;
let mayor = 1000000;
let media = 500000;

const montoTotal = parseInt(prompt("Ingrese el monto total"));
console.log(montoTotal);

if (montoTotal < 500000) {
    console.log("Puede hacerlo en cuotas sin interes");
}
else if (montoTotal > 500000) {
    console.log("Se le ve a generar un interes del 15%");
}

const cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));

while (cantidadDeCuotas == 0 || cantidadDeCuotas < 1){
    console.log("La cantidad de cuotas ingresada no es válida.");
    cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));
}

console.log("El monto de las cuotas es " + (montoTotal / cantidadDeCuotas));
