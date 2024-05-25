/*const celulares = [
    {nombre: 'iPhone 13 pro max', precio: 680},
    {nombre: 'iPhone 14', precio: 700},
    {nombre: 'iPhone 14 pro', precio: 750},
    {nombre: 'iPhone 14 pro max', precio: 800},
    {nombre: 'iPhone 15', precio: 900},
    {nombre: 'iPhone 15 pro max', precio: 1100},
    {nombre: 'Samsung Zflip', precio: 500},
    {nombre: 'Samsung S21', precio: 700},
    {nombre: 'Samsung S22', precio: 900},
    {nombre: 'Samsung S23', precio: 1200},
    
]

const precioMaximo800 = celulares.filter(celulares => celulares.precio <= 800);
console.log (precioMaximo800);

function normalizarNombre(nombre) {
    return nombre.toLowerCase().trim();
}

const celularBuscado = prompt("¿Qué celular desea buscar?").toLowerCase().trim();

const celularesFiltrados = celulares.filter (celular => normalizarNombre(celular.nombre).includes(normalizarNombre(celularBuscado)));

if (celularesFiltrados.length === 1)
    {
        const celularEncontrado = celularesFiltrados[0];
        alert (`Nombre: ${celularEncontrado.nombre}, Precio: ${celularEncontrado.precio}`);
    }
    else if (celularesFiltrados.length > 1)  
        {
            let resultado = "Se encontraron varios celulares: \n";
            celularesFiltrados.forEach(celulares => {
            resultado += `Nombre: ${celulares.nombre}, Precio: ${celulares.precio} \n`;               
            });
            alert (resultado);
        }
        
        else 
            {
                alert ("No se encontraron celulares");
            }
*/

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button'); //selecciona el boton
    const searchInput = document.getElementById('search-input'); //selecciona el input
    const resultsContainer = document.getElementById('results-container'); 

        function ejecutarBusqueda() {
            const query = searchInput.value;
            if (query) {
                resultsContainer.textContent = `Resultados de la búsqueda: ${query}`;
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
});



