class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
}
}

function obtenerProductos() {
    const productosCarrito = JSON.parse(localStorage.getItem("productos"));
    if (productosCarrito) {
        carrito = productosCarrito;
    }
    renderizarCarrito(carrito);
}

function guardarProductos() {
    const json = JSON.stringify(carrito);
    localStorage.setItem("productos", json);
}

function modificarCantidadProductos(productosCarrito, cantidad) {
    const agregarProductosCarrito = carrito.findIndex((el) => {
        return el.nombre === productosCarrito.nombre;
    });
    carrito[productosCarrito].cantidad = (productosCarrito !== -1) && cantidad;
    renderizarCarrito(carrito);
    guardarProductos();
}

function renderizarCarrito(carrito) {
    tbodyCarrito.innerHTML = "";

    for (const producto of carrito) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${producto.nombre}</td>
            <td>$${producto.precio}</td>`;

        const inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.placeholder = "Cantidad";
        inputCantidad.value = producto.cantidad;
        inputCantidad.addEventListener("change", () => {
            const cantidad = parseInt(inputCantidad.value);
            modificarCantidadProductos(producto, cantidad);
        });

        const tdTotal = document.createElement("td");
        tdTotal.innerText = `$${productosCarrito.precio * productosCarrito.cantidad}`;


        const buttonBorrar = document.createElement("button");
        buttonBorrar.innerText = "BORRAR";

        buttonBorrar.addEventListener("click", () => {
            eliminarDelCarrito(producto);
        });

        tr.append(inputCantidad, tdTotal, buttonBorrar);

        tbodyCarrito.append(tr);
    }
}

function eliminarDelCarrito(producto) {
    const agregarProductosCarrito = carrito.findIndex((el) => {
        return el.nombre === producto.nombre;
    });
    carrito.splice(agregarProductosCarrito, 1);
    renderizarCarrito(carrito);
    guardarProductos();
}

function agregarProductosAlCarrito(producto, cantidad) {
    const agregarProductosCarrito = carrito.findIndex((el) => {
        return el.nombre === producto.nombre;
    });
    (indiceProductoCarrito === -1) ? carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
    }) : carrito[indiceProductoCarrito].cantidad += cantidad;

    renderizarCarrito(carrito);
    guardarProductos();
}

function renderizarProductos(productos) {
    contenedor.innerHTML = "";

    for (const producto of productos) {
        const { nombre, precio } = productoCarrito;
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${nombre}</td>
            <td>$${precio}</td>`;

        const input = document.createElement("input");
        input.placeholder = "Cantidad";
        input.type = "number";

        const button = document.createElement("button");
        button.innerText = "Agregar";

        button.addEventListener("click", () => {
            const cantidad = parseInt(input.value);
            agregarProductosAlCarrito(producto, cantidad);
        });

        div.append(input, button);
        contenedor.append(div);
    }
}

const contenedor = document.getElementById("contenedor");
const tbodyCarrito = document.getElementById("carrito");

const productos = [
    new Producto("Buzo Mujer", 20000, 30),
    new Producto("Buzo Hombre", 25000, 34),
    new Producto("Zapatillas Mujer", 80000, 50),
    new Producto("Zapatillas Hombre", 8000, 64),
    new Producto("Pantalon Mujer", 40000, 37),
    new Producto("Pantalon Hombre", 42000, 79)
];

let carrito = [];

const bienvenida = parseInt(prompt("Bienvenido/a a nuestra tienda\nPara comprar ingrese 1\nPara salir ingrese 2"));

if (bienvenida === 1) {
    console.log("Gracias por elegirnos, ojalá encuentre lo que busca")
}
else if (bienvenida === 2) {
    alert("Gracias por entrar a nuestra página");
} else {
    alert("Elija una opción correcta");
}

renderizarProductos(productos);



