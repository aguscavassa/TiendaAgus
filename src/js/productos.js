import {cardComponente, loader} from "./main.js";

document.addEventListener('DOMContentLoaded', () => {
    loader();
    fetch('../json/productos.json').then((res) => res.json()).then((data) => {
        data.anillos.forEach(e => {
            document.getElementById('anillos-container').insertAdjacentHTML('beforeend', cardComponente(e.nombre, e.descripcion, e.imagen, e.precio));
            document.getElementById(`comprar-${e.nombre}-btn`).addEventListener('click', () => {
                let cant = document.getElementById(`${e.nombre}-cantidad`).value;
                agregarAlCarrito(e.nombre, cant);
            });
        });
        data.cadenas.forEach(e => {
            document.getElementById('cadenas-container').insertAdjacentHTML('beforeend', cardComponente(e.nombre, e.descripcion, e.imagen, e.precio));
            document.getElementById(`comprar-${e.nombre}-btn`).addEventListener('click', () => {
                let cant = document.getElementById(`${e.nombre}-cantidad`).value;
                agregarAlCarrito(e.nombre, cant);
            });
        });
    });
});

function agregarAlCarrito(nombre, cantidad) {
    localStorage.setItem(nombre, cantidad);
}

