import { header, footer, cardComponente} from "./main.js";

document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('body').insertAdjacentHTML('afterbegin', header);
    document.querySelector('body').insertAdjacentHTML('beforeend', footer);
    document.getElementById('ingresar-btn').addEventListener('click', () => {
        window.location.href = './ingresar.html';
    });
    document.getElementById('registro-btn').addEventListener('click', () => {
        window.location.href = './registro.html';
    });
    document.getElementById('logout-btn').addEventListener('click', () => {
        alert('Se ha cerrado la sesión.');
        window.location.href = './ingresar.html';
    });

    fetch('../json/productos.json').then((res) => res.json()).then((data) => {
        data.anillos.forEach(e => {
            document.getElementById('anillos-container').insertAdjacentHTML('beforeend', cardComponente(e.nombre, e.descripcion, e.imagen, e.precio));
        });
        data.cadenas.forEach(e => {
            document.getElementById('cadenas-container').insertAdjacentHTML('beforeend', cardComponente(e.nombre, e.descripcion, e.imagen, e.precio));
        });
    });
});

