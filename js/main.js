document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button'); //selecciona el boton
    const searchInput = document.getElementById('search-input'); //selecciona el input
    const resultsContainer = document.getElementById('results-container'); 
    const items = document.querySelectorAll('.item'); //para seleccionar todos los "item"

        function ejecutarBusqueda() {
            const query = searchInput.value.toLowerCase();
            let resultadosEncontrados = false;

            items.forEach (item => {
                item.style.display = 'block'; //para que se vuelvan a mostrar los items ocultados
                const itemName = item.getAttribute('data-name').toLowerCase().trim();
                if (itemName.includes(query)) {
                    item.computedStyleMap.display = 'block'; //muestra el item
                    resultadosEncontrados =  true;
                }
                else {
                    item.style.display = 'none'; //oculta el item
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
        
        
        const agregarCarrito = document.getElementById('agregar-carrito');

        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.lenght === 0) {
            agregarCarrito.innerHTML = '<p>El carrito esta vacio<p>'
        }




});



