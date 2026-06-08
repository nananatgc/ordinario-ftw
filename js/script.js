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

if(tablaMusica){

    canciones.forEach(cancion => {

        tablaMusica.innerHTML += `
        <tr>
            <td>${cancion.artista}</td>
            <td>${cancion.cancion}</td>
            <td>${cancion.genero}</td>
        </tr>
        `;

    });

}