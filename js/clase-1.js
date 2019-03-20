/* PROMESAS ENCADENADAS*/
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`;

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        // eslint-disable-next-line no-undef
        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })
}

function onError(id) {
    // eslint-disable-next-line no-console
    console.log(`Sucedio un error al obtener el personaje  ${id}`);
}

obtenerPersonaje(1).then(personaje => {
    // eslint-disable-next-line no-console
    console.log(`Hola me llamo ${personaje.name} y soy el personaje 1`);
    return obtenerPersonaje(2)
}).then(personaje2 => {
    // eslint-disable-next-line no-console
    console.log(`Hola me llamo ${personaje2.name} y soy el personaje 2`);
    return obtenerPersonaje(3)
}).then(personaje3 => {
    // eslint-disable-next-line no-console
    console.log(`Hola me llamo ${personaje3.name} y soy el personaje 3`);
    return obtenerPersonaje(4)
}).then(personaje4 => {
    // eslint-disable-next-line no-console
    console.log(`Hola me llamo ${personaje4.name} y soy el personaje 4`);
    return obtenerPersonaje(5)
}).then(personaje5 => {
    // eslint-disable-next-line no-console
    console.log(`Hola me llamo ${personaje5.name} y soy el personaje 5`);
})
.catch((onError))