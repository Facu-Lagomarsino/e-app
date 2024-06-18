// Definición de la función principal
function main() {
    // Definición de variables iniciales
    let products = [
        { name: "Camiseta", price: 25.50 },
        { name: "Pantalón", price: 35.75 },
        { name: "Medias", price: 8.99 },
        { name: "Campera", price: 59.99 },
        { name: "Shorts", price: 19.99 },
        { name: "Gorra", price: 12.50 },
        { name: "Zapatillas", price: 89.99 },
        { name: "Mochila", price: 49.99 },
        { name: "Buzo", price: 39.95 },
        { name: "Guantes", price: 15.25 }
    ];

    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        // Mostrar tabla de products antes de ordenar
        console.log("=== products antes de ordenar ===");
        seeProducts(products);

        // Ordenar products alfabéticamente por name
        products.sort((a, b) => a.name.localeCompare(b.name));

        // Mostrar tabla de products después de ordenar
        console.log("\n=== products ordenados alfabéticamente ===");
        seeProducts(products);
    });
}

// Función para mostrar la tabla de products en HTML
function seeProducts(products) {
    // Obtener el contenedor donde se mostrará la tabla
    let tableProducts = document.getElementById('table-products');

    // Limpiar el contenido previo del contenedor
    tableProducts.innerHTML = '';

    // Crear la tabla y su cabecera
    let tableHTML = '<table class="table-products">';
    tableHTML += '<tr><th>Nombre</th><th>Precio</th></tr>';

    // Iterar sobre los products para crear las filas de la tabla
    for (let product of products) {
        tableHTML += `<tr><td>${product.name}</td><td>$${product.price.toFixed(2)}</td></tr>`;
    }

    // Cerrar la tabla
    tableHTML += '</table>';

    // Agregar la tabla generada al contenedor
    tableProducts.innerHTML = tableHTML;
}

// Llamada a la función principal
main();


// Definición de la función principal
function calcular() {
    // Event listener para el botón "Calcular price"
    let calcularButton = document.getElementById('calculate-button');
    calcularButton.addEventListener('click', function() {
        // Definición de variables iniciales
        let priceproduct = parseFloat(prompt("Ingrese el precio del producto:"));
        let cantidadproduct = parseInt(prompt("Ingrese la cantidad de productos:"));

        // Validar que la cantidad de products sea mayor que 0
        if (cantidadproduct > 0) {
            // Calcular el price total antes de aplicar el descuento
            let priceTotal = priceproduct * cantidadproduct;

            // Aplicar descuento del 15%
            let descuento = priceTotal * 0.15;
            priceTotal -= descuento;

            // Mostrar el resultado final
            alert(`El precio total con descuento es: $${priceTotal.toFixed(2)}`);
        } else {
            alert("La cantidad de productos debe ser mayor que 0.");
        }
    });
}

// Llamada a la función principal al cargar el DOM
document.addEventListener('DOMContentLoaded', calcular);

