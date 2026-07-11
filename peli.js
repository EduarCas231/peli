let generoActual = 'mujer';

function toggleGenero() {
  const btn = document.getElementById('btnGenero');
  if (generoActual === 'mujer') {
    generoActual = 'hombre';
    btn.textContent = '\u2642 Hombre';
    btn.classList.add('hombre');
    document.body.classList.remove('mujer');
  } else {
    generoActual = 'mujer';
    btn.textContent = '\u2640 Mujer';
    btn.classList.remove('hombre');
    document.body.classList.add('mujer');
  }
}

document.body.classList.add('mujer');

const peliculas = [
  { titulo: "Avengers: Endgame",              genero: "Acción",          anio: 2019, calificacion: 8.4 },
  { titulo: "The Dark Knight",                genero: "Acción",          anio: 2008, calificacion: 9.0 },
  { titulo: "Interstellar",                   genero: "Ciencia Ficción", anio: 2014, calificacion: 8.6 },
  { titulo: "The Matrix",                     genero: "Ciencia Ficción", anio: 1999, calificacion: 8.7 },
  { titulo: "Inception",                      genero: "Ciencia Ficción", anio: 2010, calificacion: 8.8 },
  { titulo: "The Shining",                    genero: "Terror",          anio: 1980, calificacion: 8.4 },
  { titulo: "Get Out",                        genero: "Terror",          anio: 2017, calificacion: 7.7 },
  { titulo: "The Godfather",                  genero: "Drama",           anio: 1972, calificacion: 9.2 },
  { titulo: "Forrest Gump",                   genero: "Drama",           anio: 1994, calificacion: 8.8 },
  { titulo: "The Pursuit of Happyness",       genero: "Drama",           anio: 2006, calificacion: 8.0 },
  { titulo: "The Hangover",                   genero: "Comedia",         anio: 2009, calificacion: 7.7 },
  { titulo: "Superbad",                       genero: "Comedia",         anio: 2007, calificacion: 7.6 },
  { titulo: "Toy Story",                      genero: "Animación",       anio: 1995, calificacion: 8.3 },
  { titulo: "Spider-Man: Into the Spider-Verse", genero: "Animación",    anio: 2018, calificacion: 8.4 },
  { titulo: "Coco",                           genero: "Animación",       anio: 2017, calificacion: 8.4 },
];

function renderCards(lista) {
  const contenedor = document.getElementById("resultados");
  if (lista.length === 0) {
    contenedor.innerHTML = `<p class="sin-resultados">No se encontraron peliculas con esos filtros.</p>`;
    return;
  }
  contenedor.innerHTML = lista.map(p => `
    <div class="card">
      <h3>${p.titulo}</h3>
      <p>${p.genero} | ${p.anio}</p>
      <p class="calif">${p.calificacion} / 10</p>
    </div>
  `).join("");
}

function recomendar() {
  const genero = document.getElementById("genero").value;
  const anio   = parseInt(document.getElementById("anio").value) || 0;
  const calif  = parseFloat(document.getElementById("calificacion").value) || 0;

  const resultado = peliculas.filter(p =>
    (!genero || p.genero === genero) &&
    p.anio >= anio &&
    p.calificacion >= calif
  );

  renderCards(resultado);
}

function verGeneros() {
  const generos = [...new Set(peliculas.map(p => p.genero))].join(", ");
  alert("Generos disponibles: " + generos);
}

renderCards(peliculas);
