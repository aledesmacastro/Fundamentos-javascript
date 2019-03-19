/* HACIENDO MULTIPLES REQUEST*/
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`;

// eslint-disable-next-line no-console
const onResponse = personaje => console.log(`Hola me llamo ${personaje.name}`);
function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    // eslint-disable-next-line no-undef
    $.get(url, opts, onResponse);
}
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);
obtenerPersonaje(5);