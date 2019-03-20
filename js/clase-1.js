/* MANEJO DE ERRORES CON LOS CALLBACKS*/
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`;

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    // eslint-disable-next-line no-console
    // const onResponse = personaje => console.log(`Hola me llamo ${personaje.name}`);
    // eslint-disable-next-line no-undef
    $.get(url, opts, callback).fail(function(){
        // eslint-disable-next-line no-console
        console.log(`Sucedio un error!, no se pudo obtener el personaje ${id}`);
    })
}

// obtenerPersonaje(1, function (personaje) {
//     // eslint-disable-next-line no-console
//     console.log(`Hola me llamo ${personaje.name}`);
// })

obtenerPersonaje(1, function (personaje) {
    // eslint-disable-next-line no-console
    console.log(`Hola me llamo ${personaje.name}`);
    obtenerPersonaje(2, function(personaje) {
        // eslint-disable-next-line no-console
        console.log(`Hola me llamo ${personaje.name}`);
        obtenerPersonaje(3, function(personaje) {
            // eslint-disable-next-line no-console
            console.log(`Hola me llamo ${personaje.name}`);
            obtenerPersonaje(4, function(personaje) {
                // eslint-disable-next-line no-console
                console.log(`Hola me llamo ${personaje.name}`);
                obtenerPersonaje(5, function (personaje) {
                    // eslint-disable-next-line no-console
                    console.log(`Hola me llamo ${personaje.name}`);
                    obtenerPersonaje(6, function (personaje) {
                        // eslint-disable-next-line no-console
                        console.log(`Hola me llamo ${personaje.name}`);
                        obtenerPersonaje(7, function(personaje) {
                            // eslint-disable-next-line no-console
                            console.log(`Hola me llamo ${personaje.name}`);
                        })
                    })
                })
            })
        })
    })
})