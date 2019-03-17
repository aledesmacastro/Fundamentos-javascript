/* global*/
const KG = 0.2;
const DIAS_DEL_ANIO = 365;

var anibal = {
    nombre: 'Anibal',
    apellido: 'Ledesma',
    edad: 33,
    ocupacion: 'Front End',
    peso: 84
}
var laura = {
    nombre: 'Laura',
    apellido: 'Ledesma',
    edad: 20,
    ocupacion: 'Tecnóloga en quimica',
    peso: 50
}

var angela = {
    nombre: 'Angela',
    apellido: 'Ledesma',
    edad: 32,
    ocupacion: 'Psicologa',
    peso: 70
}
const aumentarPeso = persona => persona.peso += KG;
const disminuyePeso = persona => persona.peso -= KG;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
var dias = 0;
function validaMeta(persona) {
    const META = persona.peso - 3;
    while (persona.peso > META) {
        // eslint-disable-next-line no-debugger
        // debugger
        if (comeMucho()) {
            aumentarPeso(persona)
        }
        if(realizaDeporte()) {
            disminuyePeso(persona)
        }
        dias += 1;
    }
    if (dias > DIAS_DEL_ANIO) {
        // eslint-disable-next-line no-console
        console.log(`${persona.nombre} ${persona.apellido} logro su meta despues de ${dias} días ahora su peso es ${persona.peso.toFixed(1)}, aunque sobrepaso el año :(`)
    } else {
        // eslint-disable-next-line no-console
        console.log(`${persona.nombre} ${persona.apellido} logro su meta despues de ${dias} días ahora su peso es ${persona.peso.toFixed(1)} y no superó el año :)`)
    }
}
validaMeta(anibal);
validaMeta(angela);
validaMeta(laura);