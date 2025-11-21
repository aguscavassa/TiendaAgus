import { aplicarTheme } from "./main.js";

document.addEventListener('DOMContentLoaded', aplicarTheme());

document.getElementById('return-btn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `index.html`;
});

const loginForm = document.getElementById('login-form');
const registroForm = document.getElementById('registro-form');

if (loginForm != null) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(loginForm);
        sessionStorage.setItem('loggedUser', formData.get('email'));
        alert('Logeado correctamente!');
        window.location.href = `index.html`;
    });
}

if (registroForm != null) {
    registroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(registroForm);
        sessionStorage.setItem('loggedUser', formData.get('email'));
        alert('Registrado correctamente!');
        window.location.href = `index.html`;
    });
}