document.addEventListener('DOMContentLoaded', function() {
    const carritoItems = document.getElementById('items-carrito');
    const totalPrecio = document.getElementById('precio-total');
    const reiniciarCarritoBoton = document.getElementById('reiniciar-carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function displayCart() {
        carritoItems.innerHTML = '';
        let totalPrice = 0;

        carrito.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            carritoItems.appendChild(listItem);

            const price = parseFloat(item.price.replace('USD', ''));
            totalPrice += price;
        });

        totalPrecio.textContent = `Precio Total: ${totalPrice} USD`;
    }

    function reiniciarCarrito() {
        localStorage.removeItem('carrito');
        carrito.length = 0;
        displayCart();
        alert('El carrito ha sido reiniciado');
    }

    reiniciarCarritoBoton.addEventListener('click', reiniciarCarrito);

    displayCart();
});
