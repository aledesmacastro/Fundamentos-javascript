/* MANEJANDO EL ORDEN Y EL ASINCRONISMO DE JAVASCRIPT*/
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`;

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    // eslint-disable-next-line no-console
    // const onResponse = personaje => console.log(`Hola me llamo ${personaje.name}`);
    // eslint-disable-next-line no-undef
    $.get(url, opts, function (personaje) {
         // eslint-disable-next-line no-console
        console.log(`Hola me llamo ${personaje.name}`);

        if(callback) {
            callback();
        }
    });
}
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6)
                })
            })
        })
    })
})