let navegacionArray = [
    {titulo: 'Inicio', link: `index.html`},
    {titulo: 'Productos', link: `productos.html`}
];

// Componente: barra de navegacion y el encabezado.
export let header = `
    <header id="header">
        <div class="titulo">
        <h2>Tienda Lux</h2>
        </div>
        <div class="logged-buttons">
            <button id="logout-btn">&#128274; Cerrar sesión</button>
            <button id="carrito-btn">🛒 Carrito</button>
        </div>
        <div class="user-buttons">
            <button class="button-theme" id="ingresar-btn">&#128275; Ingresar</button>
            <button class="button-theme" id="registro-btn">&#9997; Registrarse</button>
        </div>
        <div class="barra-navegacion-container">
            <nav class="barra-navegacion">
                <ul class="barra-navegacion-lista">
                    ${navegacionArray.map(e => {
                        return `<li><a href=${e.link}>${e.titulo}</a></li>`
                    }).join('')}
                </ul>
            </nav>
        </div>
    </header>
`;

// Componente: footer

export let footer = `
    <footer>
        <div class="columna-footer">
            <h3>Sitio creado por:</h3>
            <a>Agustín Cavassa</a>
        </div>
        <div class="columna-footer">
            <h3>Repositorio:</h3>
            <a id="github-link" href="https://github.com/aguscavassa/TiendaAgus"><img id="github-icon" src="${localStorage.getItem('theme') === "light" ? './src/img/github-mark-dark.svg' : './src/img/github-mark-white.svg'}">Tienda Agus</a>
        </div>
        <div class="columna-footer">
            <h3>Trabajo para la materia:</h3>
            <a>Aplicaciones Web 1</a>
        </div>
        <div class="columna-footer">
            <h3>Cambiar tema:</h3>
            <button id="theme-btn" class="button-theme" aria-label="Cambiar entre tema oscuro y claro">
                <span aria-hidden="true">🌓</span>
            </button>
        </div>
    </footer>
`;

// Componente: cards de los productos.

export let cardComponente = (nombre, descripcion, imagen, precio, cantidad = 1) => {
    return `
        <div class="card">
            <img src="${imagen}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <p>$${precio}</p>
            <div class="cantidad-container">
                <input id="${nombre}-cantidad" type="number" min="1" value="${cantidad}">
                <button id="comprar-${nombre}-btn">Añadir al carrito</button>
            </div>
        </div>
    `;
}

export let cardComponenteCarrito = (nombre, descripcion, imagen, precio, cantidad) => {
    return `
        <div class="card">
            <img src="${imagen}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <p>$${precio}</p>
            <div class="cantidad-container">
                <input id="${nombre}-cantidad" type="number" min="1" value="${cantidad}">
                <button id="${nombre}-eliminar">Eliminar</button>
            </div>
        </div>
    `;
}

export function loader() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', header);
    document.querySelector('body').insertAdjacentHTML('beforeend', footer);
    aplicarTheme();
    if (sessionStorage.getItem('loggedUser') != null) {
        document.querySelector('.user-buttons').remove();
        document.getElementById('logout-btn').addEventListener('click', () => {
            sessionStorage.removeItem('loggedUser');
            alert('Se ha cerrado la sesión.');
            window.location.href = './ingresar.html';
        });
        document.getElementById('carrito-btn').addEventListener('click', () => {
            window.location.href = './carrito.html';
        });
    } else {
        document.querySelector('.logged-buttons').remove();
        document.getElementById('ingresar-btn').addEventListener('click', () => {
            window.location.href = './ingresar.html';
        });
        document.getElementById('registro-btn').addEventListener('click', () => {
            window.location.href = './registro.html';
        });
    }
}

export function aplicarTheme() {
    // Tema oscuro/claro con localStorage
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }

    // Boton de cambio de tema.

    if (document.getElementById('theme-btn') != null) {
        document.getElementById('theme-btn').addEventListener('click', e => {
            const seleccion = document.documentElement.getAttribute('data-theme');
            const nuevoTema = seleccion === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nuevoTema);
            localStorage.setItem('theme', nuevoTema);
            document.getElementById('github-icon').src = nuevoTema === 'dark' ? './src/img/github-mark-white.svg' : './src/img/github-mark-dark.svg';
        });
    }
}