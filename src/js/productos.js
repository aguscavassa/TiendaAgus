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
    document.querySelector('main').insertAdjacentHTML('beforeend', cardComponente('Anillo1', 'Esta descripcion', '$1000'));
});

