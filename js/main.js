document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
    const items = document.querySelectorAll('.item');

    function ejecutarBusqueda() {
        const query = searchInput.value.toLowerCase();
        let resultadosEncontrados = false;

        items.forEach(item => {
            item.style.display = 'block';
            const itemName = item.getAttribute('data-name').toLowerCase().trim();
            if (itemName.includes(query)) {
                item.style.display = 'block';
                resultadosEncontrados = true;
            } else {
                item.style.display = 'none';
            }
        });

        if (query) {
            resultsContainer.textContent = resultadosEncontrados ? `Resultados de la búsqueda: ${query}` : 'No se encontraron resultados.';
        } else {
            resultsContainer.textContent = 'Por favor, ingrese un término de búsqueda.';
        }
    }

    searchButton.addEventListener('click', ejecutarBusqueda);
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            ejecutarBusqueda();
        }
    });

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function añadirAlCarrito(itemName, itemPrice) {
        const item = { name: itemName, price: itemPrice };
        carrito.push(item);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`${itemName} ha sido añadido al carrito.`);
    }

    const añadirAlCarritoBotones = document.querySelectorAll('.agregar-carrito');
    añadirAlCarritoBotones.forEach(button => {
        button.addEventListener('click', function(event) {
            const item = event.target.closest('.item');
            const itemName = item.getAttribute('data-name');
            const itemPrice = item.querySelector('p').textContent;
            añadirAlCarrito(itemName, itemPrice);
        });
    });
});



