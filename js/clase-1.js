/* global*/
// var anibal = {
//     nombre: 'Anibal',
//     apellido: 'Ledesma',
//     edad: 33,
//     ocupacion: 'Front End',
//     peso: 84
// }
// var laura = {
//     nombre: 'Laura',
//     apellido: 'Ledesma',
//     edad: 20,
//     ocupacion: 'Tecnóloga en quimica',
//     peso: 50
// }
// var angela = {
//     nombre: 'Angela',
//     apellido: 'Ledesma',
//     edad: 32,
//     ocupacion: 'Psicologa',
//     peso: 70
// }


var contador = 0;
const llueve = () => Math.random() < 0.25;

do {
    contador += 1;
} while (!llueve());
if (contador > 1) {
    // eslint-disable-next-line no-console
    console.log(`Fuí a ver si llovia ${contador} veces`)
} else {
    // eslint-disable-next-line no-console
    console.log(`Fuí a ver si llovia ${contador} vez`)
}