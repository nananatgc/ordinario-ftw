const canciones = [
    {
        artista: "Lana del rey",
        cancion: "Gods and monsters",
        genero: "Pop"
    },
    {
        artista: "Madonna",
        cancion: "Like a Virgin",
        genero: "Pop"
    },
    {
        artista: "Scorpions",
        cancion: "Still loving you",
        genero: "Rock"
    },
    {
        artista: "Depeche Mode",
        cancion: "Personal Jesus",
        genero: "Rock"
    },
    {
        artista: "The rolling stones",
        cancion: "Heaven",
        genero: "Rock"
    },
    {
        artista: "Electric Light Orchestra",
        cancion: "Strange magic",
        genero: "Rock"
    },
    {
        artista: "Ana Gabriel",
        cancion: "Ay amor",
        genero: "Pop"
    },
    {
        artista: "Lana del rey",
        cancion: "Old money",
        genero: "Pop"
    },
    {
        artista: "The Beatles",
        cancion: "Something",
        genero: "Rock"
    },
    {
        artista: "Berlin",
        cancion: "Take my breath away",
        genero: "Pop"
    }
];

const tablaMusica = document.getElementById("tablaMusica");
const filtroMusica = document.getElementById("filtroMusica");

function mostrarCanciones(lista){
    if(tablaMusica){
        tablaMusica.innerHTML = "";

        lista.forEach(cancion => {
            tablaMusica.innerHTML += `
                <tr>
                    <td>${cancion.artista}</td>
                    <td>${cancion.cancion}</td>
                    <td>${cancion.genero}</td>
                </tr>
            `;
        });
    }
}

if(tablaMusica){
    mostrarCanciones(canciones);
}

if(filtroMusica){
    filtroMusica.addEventListener("input", () => {
        const texto = filtroMusica.value.toLowerCase();

        const cancionesFiltradas = canciones.filter(cancion =>
            cancion.artista.toLowerCase().includes(texto) ||
            cancion.cancion.toLowerCase().includes(texto) ||
            cancion.genero.toLowerCase().includes(texto)
        );

        mostrarCanciones(cancionesFiltradas);
    });
}

/*comienza el bloque de peliculas*/
const peliculas = [
    {
        nombre: "Orgullo y prejuicio",
        genero: "Romance",
        opinión: "Te transporta a otra época y me parece super acertada la elección de los actores,
        Keira Knightley es la persona ideal para interpretar a personajes de época y Mr. Darcy oooh, 
        yo también quisiera un Mr. Darcy en mi vida"
    },
    {
        nombre: "Priscilla",
        genero: "Drama",
        opinión: "Aunque muchos dicen que es aburrida y monotona, creo que es exactamente lo que se busca transmitir,
        ya que nos demuestra como se sentía ella en un matrimonio en el que no tenía voz ni voto,
        y como eso fue acabando poco a poco con su voluntad y felicidad"
    },
    {
        nombre: "Top Gun",
        genero: "Acción",
        opinión: "Aunque la historia principal no es de romance a mi me encantan las escenas de romance porque,
        comienza a sonar una de mis canciones favoritas y aunque si me impresionan bastante las escenas de acrobacias, 
        con los aviones creo que no es muy lo mío y como que hay mucho romaticismo a la fuerza armada de USA"
    },
    {
        nombre: "El Gran Gatsby",
        genero: "Romance",
        opinión: "Esta película me encanta porque está ambientada en una época en la que el burlesque estaba,
        de moda aparte creo que Daysi Buchanan es un personaje algo incomprendido, amo amoooo que salga una camción,
        de Lana del rey, es una canción hermosa y disfruto mucho las escenas en las que suena"
    },
    {
        nombre: "El Cisne Negro",
        genero: "Terror psicológico",
        opinión: "Oh wow al ver esta peli siento la ansiedad y el estrés que sentía la protagonista,
        la desesperación y también lo bien que se siente al interpretar a la perfección el acto que tanto temía,
        además de que Natalie Portman es una increíble actriz, de hecho por ella me llamo Natalia"
    },
];

const tablaPeliculas = document.getElementById("tablaPeliculas");
const filtroPeliculas = document.getElementById("filtroPeliculas");

function mostrarPeliculas(lista){
    if(tablaPeliculas){
        tablaPeliculas.innerHTML = "";

        lista.forEach(pelicula => {
            tablaPeliculas.innerHTML += `
                <tr>
                    <td>${pelicula.nombre}</td>
                    <td>${pelicula.genero}</td>
                    <td>${pelicula.opinion}</td>
                </tr>
            `;
        });
    }
}

if(tablaPeliculas){
    mostrarPeliculas(peliculas);
}

if(filtroPeliculas){
    filtroPeliculas.addEventListener("input", () => {
        const texto = filtroPeliculas.value.toLowerCase();

        const peliculasFiltradas = peliculas.filter(pelicula =>
            pelicula.nombre.toLowerCase().includes(texto) ||
            pelicula.genero.toLowerCase().includes(texto) ||
            pelicula.opinion.toLowerCase().includes(texto)
        );

        mostrarPeliculas(peliculasFiltradas);
    });
}