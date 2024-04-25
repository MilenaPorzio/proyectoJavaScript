const tienda = [
    {
        nombre: "Buzo mujer",
        precio: 20000,
        stock: 30,
    },
    {
        nombre: "Buzo hombre",
        precio: 25000,
        stock: 34,
    },
    {
        nombre: "Zapatillas mujer",
        precio: 80000,
        stock: 50,
    },
    {
        nombre: "Zapatillas hombre",
        precio: 8000,
        stock: 64,
    },
    {
        nombre: "Pantalon mujer",
        precio: 40000,
        stock: 37,
    },
    {
        nombre: "Pantalon hombre",
        precio: 42000,
        stock: 79,
    },
];

let carrito = [];

const tiendaEntera = parseInt(prompt("Ingrese 1 para ver los productos de la tienda\nIngrese 2 para salir"));

if (tiendaEntera === 1) {
    console.log(tienda);
    const productosDeseados = prompt("Ingrese los nombres de los productos que quiere comprar, separados por coma sin espacios").split(",");

    productosDeseados.forEach(producto => {
        const encontrado = tienda.find(item => item.nombre === producto);
        if (encontrado && encontrado.stock > 0) {
            carrito.push(encontrado);
            encontrado.stock;
        }
    });
}
else if (tiendaEntera === 2) {
    alert("Gracias por entrar a nuestra pagina");
} else {
    alert("Elija una opcion correcta");
}

if (carrito.length > 0) {
    const opcionPago = parseInt(prompt("Si quiere abonar ingrese 1\nSi quiere seguir comprando ingrese 2"));
    if (opcionPago === 1) {
        const total = carrito.reduce((acc, el) => {
            return acc + el.precio;
        }, 0);
        console.log("Productos en el carrito:");
        console.log(carrito);
        console.log(`El total de su compra es: $${total}`);
        alert("Gracias por su compra.");
    } else if (opcionPago === 2) {
        console.log("Productos en el carrito:");
        console.log(carrito);
        alert("Continúe comprando.");
    } else {
        alert("Elija una opcion correcta");
    }
} else {
    alert("No hay productos en el carrito.");
}