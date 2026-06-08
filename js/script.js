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
        opinion: `Te transporta a otra época y me parece super acertada la elección de los actores,
        Keira Knightley es la persona ideal para interpretar a personajes de época y Mr. Darcy oooh, 
        yo también quisiera un Mr. Darcy en mi vida`
    },
    {
        nombre: "Priscilla",
        genero: "Drama",
        opinion: `Aunque muchos dicen que es aburrida y monotona, creo que es exactamente lo que se busca transmitir,
        ya que nos demuestra como se sentía ella en un matrimonio en el que no tenía voz ni voto,
        y como eso fue acabando poco a poco con su voluntad y felicidad`
    },
    {
        nombre: "Top Gun",
        genero: "Acción",
        opinion: `Aunque la historia principal no es de romance a mi me encantan las escenas de romance porque,
        comienza a sonar una de mis canciones favoritas y aunque si me impresionan bastante las escenas de acrobacias, 
        con los aviones creo que no es muy lo mío y como que hay mucho romaticismo a la fuerza armada de USA`
    },
    {
        nombre: "El Gran Gatsby",
        genero: "Romance",
        opinion: `Esta película me encanta porque está ambientada en una época en la que el burlesque estaba,
        de moda aparte creo que Daysi Buchanan es un personaje algo incomprendido, amo amoooo que salga una camción,
        de Lana del rey, es una canción hermosa y disfruto mucho las escenas en las que suena`
    },
    {
        nombre: "El Cisne Negro",
        genero: "Terror psicológico",
        opinion: `Oh wow al ver esta peli siento la ansiedad y el estrés que sentía la protagonista,
        la desesperación y también lo bien que se siente al interpretar a la perfección el acto que tanto temía,
        además de que Natalie Portman es una increíble actriz, de hecho por ella me llamo Natalia`
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

/*comienza el bloque de viajes*/
const viajes = [

    {
        destino: "Oaxaca",
        tipo: "Visitado",
        razon: "Es mi estado natal y tiene lugares hermosos, me encanta la comida"
    },

    {
        destino: "Ciudad de México",
        tipo: "Visitado",
        razon: "Me gusta la arquitectura y la variedad cultural"
    },

    {
        destino: "París",
        tipo: "Soñado",
        razon: "Quiero conocer el Palacio de Fontainebleau"
    },

    {
        destino: "Japón",
        tipo: "Soñado",
        razon: "Quiero ver las flores de cerezo"
    },

    {
        destino: "Italia",
        tipo: "Soñado",
        razon: "Quiero ir al lago de Como"
    }

];

const tablaViajes = document.getElementById("tablaViajes");
const filtroViajes = document.getElementById("filtroViajes");

function mostrarViajes(lista){

    if(tablaViajes){

        tablaViajes.innerHTML = "";

        lista.forEach(viaje => {

            tablaViajes.innerHTML += `
                <tr>
                    <td>${viaje.destino}</td>
                    <td>${viaje.tipo}</td>
                    <td>${viaje.razon}</td>
                </tr>
            `;

        });

    }

}

if(tablaViajes){
    mostrarViajes(viajes);
}

if(filtroViajes){

    filtroViajes.addEventListener("input", () => {

        const texto = filtroViajes.value.toLowerCase();

        const viajesFiltrados = viajes.filter(viaje =>

            viaje.destino.toLowerCase().includes(texto) ||
            viaje.tipo.toLowerCase().includes(texto) ||
            viaje.razon.toLowerCase().includes(texto)

        );

        mostrarViajes(viajesFiltrados);

    });

}
/* comienza el bloque de frases de galleta de la fortuna*/
const frases = [
    "Camaron que se duerme no llega temprano a la escuela 🦐",
    "Si comprate esa ropita bonita que te gustó💖",
    "Tu futuro está siendo construido hoy 🌸",
    "Lana del rey haría eso??🎀",
    "Si quisiera, seguramente lo haría💕",
    "De vez en cuando las estrellas se alinean",
    "La paciencia jamás será un defecto 🎀"
];

const btnFrase = document.getElementById("btnFrase");
const fraseAzar = document.getElementById("fraseMotivacional");

if(btnFrase){
    btnFrase.addEventListener("click", () => {
        const aleatoria = Math.floor(Math.random() * frases.length);
        fraseAzar.textContent = frases[aleatoria];
    });
}
