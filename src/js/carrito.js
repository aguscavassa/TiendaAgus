import {loader, cardComponenteCarrito} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    loader();
    fetch('../json/productos.json').then(res => res.json()).then((data) => {
        data.anillos.forEach(e => {
            loadProductos(e);
        });
        data.cadenas.forEach(e => {
            loadProductos(e);
        });
        if (document.querySelectorAll('.card').length === 0) {
            document.querySelector('.cards-container').insertAdjacentHTML('afterbegin', `
                    <h2>No hay productos en el carro</h2>
                    <p>Ingresa a la seccion <b>Productos</b> para agregar productos al carrito.</p>
                `);
            document.getElementById('carrito-btn-container').remove();
        } else {
            document.querySelector('.main-contents').insertAdjacentHTML('afterbegin', `
                    <h2>Productos en el carrito:</h2>
                `);
        }
    });
    
});

function loadProductos(e) {
    let cant;
    if (localStorage.getItem(e.nombre)) {
        cant = localStorage.getItem(e.nombre)
        document.querySelector('.cards-container').insertAdjacentHTML('beforeend', cardComponenteCarrito(e.nombre, e.descripcion, e.imagen, e.precio, cant));
        document.getElementById(`${e.nombre}-eliminar`).addEventListener('click', () => {
            localStorage.removeItem(e.nombre);
            window.location.reload();
        });
    }
}