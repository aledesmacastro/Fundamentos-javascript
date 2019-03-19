/* FUNCIONES COMO PARAMETROS */
class Persona {
    constructor(nombre, apellido, estatura, ocupacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estatura = estatura;
        this.ocupacion = ocupacion;
    }

    saludar(fn) {
        var { nombre, apellido } = this
        // eslint-disable-next-line no-console
        console.log(`Hola mi nombre es ${nombre} ${apellido}.`);
        if (fn) {
            fn(nombre, apellido, false, true)
        }
    }

    myAltura () {
        var myEstatura = this.estatura * 100;
        if (myEstatura <= 155) {
            // eslint-disable-next-line no-console
            console.log(`mi estatura es ${this.estatura}, por tal motivo soy una persona bajita`);
        } else {
            // eslint-disable-next-line no-console
            console.log(`mi estatura es ${this.estatura}, por tal motivo soy una persona alta`);
        }
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, estatura) {
        super(nombre, apellido, estatura)
    }

    saludar (fn) {
        var { nombre, apellido } = this
        // eslint-disable-next-line no-console
        console.log(`Hola mi nombre es ${nombre} ${apellido} y soy un desarrollador`);
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}
class Psicologa extends Persona {
    constructor(nombre, apellido, estatura) {
        super(nombre, apellido, estatura)
    }

    saludar (fn) {
        var { nombre, apellido } = this
        // eslint-disable-next-line no-console
        console.log(`Hola mi nombre es ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido, false, true)
        }
    }
}

class Quimica extends Persona {
    constructor(nombre, apellido, estatura) {
        super(nombre, apellido, estatura)
    }

    saludar (fn) {
        var { nombre, apellido } = this
        // eslint-disable-next-line no-console
        console.log(`Hola mi nombre es ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido, false, false, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev, esPsic, esQuim) {
    // eslint-disable-next-line no-console
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        // eslint-disable-next-line no-console
        console.log(`no sabia que tambien eras desarrollador/a`);
    }
    if (esPsic) {
        // eslint-disable-next-line no-console
        console.log(`Tengo entendido que eres Psicologa`);
    }
    if (esQuim) {
        // eslint-disable-next-line no-console
        console.log(`Se que eres una excelente Quimica industrial`);
    }
}

const anibal = new Desarrollador('Anibal', 'Ledesma', 1.69, 'Desarrollador');
const angela = new Psicologa('Angela', 'Ledesma', 1.55, 'Psicologa')
const laura = new Quimica('Laura', 'Ledesma', 1.55, 'Quimica industrial')

anibal.saludar(responderSaludo);
angela.saludar(responderSaludo);
laura.saludar(responderSaludo);