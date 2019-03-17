/* global*/
var anibal = {
    nombre: 'Anibal',
    apellido: 'Ledesma',
    edad: 33,
    ocupacion: 'Front End',
    peso: 84,
    altura: 1.69,
    cantidadLibros: 15
}
var laura = {
    nombre: 'Laura',
    apellido: 'Ledesma',
    edad: 20,
    ocupacion: 'Tecnóloga en quimica',
    peso: 50,
    altura: 1.58,
    cantidadLibros: 10
}
var angela = {
    nombre: 'Angela',
    apellido: 'Ledesma',
    edad: 32,
    ocupacion: 'Psicologa',
    peso: 60,
    altura: 1.57,
    cantidadLibros: 5
}
var juan = {
    nombre: 'Juan Carlos',
    apellido: 'Ledesma',
    edad: 21,
    ocupacion: 'Barbero',
    peso: 65,
    altura: 1.75,
    cantidadLibros: 20
}

var personas = [anibal, angela, laura, juan];
const esAlta = ({altura}) => altura > 1.68;
const esBaja = ({altura}) => altura < 1.58;

for (let index = 0; index < personas.length; index+=1) {
    var persona = personas[index];
    // eslint-disable-next-line no-console
    console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)}`);
}

var pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
});

var totalLibros = (cont, {cantidadLibros}) => cont + cantidadLibros;

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
var cantidadTotalLibros = personas.reduce(totalLibros, 0);

var personasCms = personas.map(pasarAlturaACms)
// eslint-disable-next-line no-console
console.log(personasAltas);
// eslint-disable-next-line no-console
console.log(personasBajas);
// eslint-disable-next-line no-console
console.log(personasCms);
// eslint-disable-next-line no-console
console.log(cantidadTotalLibros);
