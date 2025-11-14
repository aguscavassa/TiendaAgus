
document.getElementById('return-btn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './index.html';
});

const loginForm = document.getElementById('login-form');
const registroForm = document.getElementById('registro-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Logeado correctamente!');
    window.location.href = './index.html';
});

registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registrado correctamente!');
    window.location.href = './index.html';
});