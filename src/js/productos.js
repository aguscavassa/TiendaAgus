import {cardComponente, loader} from "./main.js";

document.addEventListener('DOMContentLoaded', () => {
    loader();
    fetch('./src/json/productos.json').then((res) => res.json()).then((data) => {
        data.anillos.forEach(e => {
            let cantTemp;
            if (localStorage.getItem(e.nombre) != null) {
                cantTemp = localStorage.getItem(e.nombre);
            } else cantTemp = e.cantidad;
            document.getElementById('anillos-container').insertAdjacentHTML('beforeend', cardComponente(e.nombre, e.descripcion, e.imagen, e.precio, cantTemp));
            document.getElementById(`comprar-${e.nombre}-btn`).addEventListener('click', () => {
                let cant = document.getElementById(`${e.nombre}-cantidad`).value;
                agregarAlCarrito(e.nombre, cant);
            });
        });
        data.cadenas.forEach(e => {
            let cantTemp;
            if (localStorage.getItem(e.nombre) != null) {
                cantTemp = localStorage.getItem(e.nombre);
            } else cantTemp = e.cantidad;
            document.getElementById('cadenas-container').insertAdjacentHTML('beforeend', cardComponente(e.nombre, e.descripcion, e.imagen, e.precio, cantTemp));
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

