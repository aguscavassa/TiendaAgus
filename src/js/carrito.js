import {loader, cardComponenteCarrito} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    loader();
    fetch('./src/json/productos.json').then(res => res.json()).then((data) => {
        data.anillos.forEach(e => {
            loadProductos(e);
        });
        data.cadenas.forEach(e => {
            loadProductos(e);
        });
        if (document.querySelectorAll('.card').length === 0) {
            document.querySelector('.cards-container').insertAdjacentHTML('afterbegin', `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <h2>No hay productos en el carro</h2>
                        <p>Ingresa a la seccion <b>Productos</b> para agregar productos al carrito.</p>
                    </div>
                `);
            document.querySelector('.carrito-btn-container').remove();
        } else {
            document.querySelector('.main-contents').insertAdjacentHTML('afterbegin', `
                    <h2>Productos en el carrito:</h2>
                `);
        }
    });
});

document.getElementById('actualizar-productos').addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(e => {
        localStorage.setItem(e.firstElementChild.nextElementSibling.innerText, e.lastElementChild.firstElementChild.value);
    });
    window.location.reload();
});

document.getElementById('comprar-productos').addEventListener('click', () => {
    alert('Se ha concretado la compra!');
    const savedTheme = localStorage.getItem('theme');
    localStorage.clear();
    localStorage.setItem('theme', savedTheme);
    window.location.reload();
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