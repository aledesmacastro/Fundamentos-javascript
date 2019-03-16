/* global*/
const MAYORIA_DE_EDAD = 21;
var anibal = {
    nombre: 'Anibal',
    apellido: 'Ledesma',
    edad: 33,
    ocupacion: 'Front End'
}
var laura = {
    nombre: 'Laura',
    apellido: 'Ledesma',
    edad: 20,
    ocupacion: 'Tecnóloga en quimica'
}

var angela = {
    nombre: 'Angela',
    apellido: 'Ledesma',
    edad: 32,
    ocupacion: 'Psicologa'
}

// function imprimirDatosPersona({nombre}) {
//     console.log(nombre);
// }

// function imprimirDatosPersona(persona) {
//     console.log(persona.nombre);
// }

// function mayoriaDeEdad({edad}) {
//     return edad >= MAYORIA_DE_EDAD;
// }

// var mayoriaDeEdad = function ({edad}) {
//     return edad >= MAYORIA_DE_EDAD;
// }

// const mayoriaDeEdad = ({edad}) => {
//     return edad >= MAYORIA_DE_EDAD;
// }

// const mayoriaDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

const mayoriaDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;


function imprimirDatosPersona(persona) {
    if (mayoriaDeEdad(persona)) {
        // eslint-disable-next-line no-console
        console.log(`${persona.nombre} ${persona.apellido} es ${persona.ocupacion}, tiene ${persona.edad} años y es mayor de edad`);
    } else {
        // eslint-disable-next-line no-console
        console.log(`${persona.nombre} ${persona.apellido} es ${persona.ocupacion}, tiene ${persona.edad} años y es menor de edad`);
    }
}

function permitirAcceso(persona) {
    if (!mayoriaDeEdad(persona)) {
        // eslint-disable-next-line no-console
        console.log(`${persona.nombre} ¡su acceso ha sido denegado!`);
    } else {
        // eslint-disable-next-line no-console
        console.log(`${persona.nombre} tiene ¡Acceso!`);
    }
}
imprimirDatosPersona(anibal);
imprimirDatosPersona(laura);
imprimirDatosPersona(angela);
permitirAcceso(laura);
permitirAcceso(angela);