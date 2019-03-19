/* CALLBACKS*/
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`;
const opts = { crossDomain: true };

// eslint-disable-next-line no-console
const onResponse = personaje => console.log(`Hola me llamo ${personaje.name}`);

// eslint-disable-next-line no-undef
$.get(lukeUrl, opts, onResponse);