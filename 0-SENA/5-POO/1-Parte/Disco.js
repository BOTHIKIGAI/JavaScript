function DiscoJuanes (nombreAlbum, numCacnciones, añoPublicacion, nombreCanciones) {
    this.nombreAlbum = nombreAlbum; // Nombre del album
    this.numCacnciones = numCacnciones; // Numero de nombreCanciones
    this.añoPublicacion = añoPublicacion; // añoPublicacion de publicación
    this.nombreCanciones = nombreCanciones; // Nombre de las principales canciones

}

const primerAlbum = new DiscoJuanes ('Fijate bien', 12, 2000, ['Ahi le va', 'Fijate bien', 'Podemos hacernos daño', 'Nada']);
//console.log(Album1);

const segundoAlbum = new DiscoJuanes ('Un dia normal', 12, 2002, ['Un dia normal', 'La paga', 'Luna', 'La noche']);
//console.log(Album2);

const tercerAlbum = new DiscoJuanes ('Mi Sangre', 12, 2004, ['Amame', 'Para tu Amor', 'La camisa negra', 'Rosario tajires']);
//console.log(Album3);