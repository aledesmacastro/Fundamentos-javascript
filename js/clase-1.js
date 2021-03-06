/* Async-await: LO ÚLTIMO EN ASINCRONISMO*/
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

async function obtenerLosPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        // eslint-disable-next-line no-console  
        console.table(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerLosPersonajes()