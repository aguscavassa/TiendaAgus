let navegacionArray = [
    {titulo: 'Inicio', link: 'index.html'},
    {titulo: 'Productos', link: 'productos.html'}
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
            <button class="button-white" id="ingresar-btn">&#128275; Ingresar</button>
            <button class="button-white" id="registro-btn">&#9997; Registrarse</button>
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
            <a>Agustin Cavassa</a>
        </div>
        <div class="columna-footer">
            <h3>Repositorio:</h3>
            <a id="github-link" href="https://github.com/aguscavassa/TiendaAgus"><img src="../img/github-mark.svg">Tienda Agus</a>
        </div>
        <div class="columna-footer">
            <h3>Trabajo para la materia:</h3>
            <a>Aplicaciones Web 1</a>
        </div>
    </footer>
`;

// Componente: cards de los productos.

export let cardComponente = (titulo, descripcion, imagen, precio) => {
    return `
        <div class="card">
            <img src="${imagen}">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
            <p>$${precio}</p>
            <div class="cantidad-container">
                <input id="${titulo}-cantidad" type="number" min="1" value="1">
                <button id="comprar-${titulo}-btn">Añadir al carrito</button>
            </div>
        </div>
    `;
}