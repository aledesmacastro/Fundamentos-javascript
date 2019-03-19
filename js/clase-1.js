/* CLASES Y HERENCIA */
class persona {
    constructor(nombre, apellido, estatura, ocupacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estatura = estatura;
        this.ocupacion = ocupacion;
    }

    saludar() {
        // eslint-disable-next-line no-console
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}.`);
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


class desarrollador extends persona {
    constructor(nombre, apellido, estatura) {
        super(nombre, apellido, estatura)
        // this.nombre = nombre;
        // this.apellido = apellido;
        // this.estatura = estatura;
    }

    saludar () {
        // eslint-disable-next-line no-console
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy un desarrollador`);
    }
}

// eslint-disable-next-line no-unused-vars
const anibal = new desarrollador('Anibal', 'Ledesma', 1.69);
// eslint-disable-next-line no-unused-vars
const angela = new persona('Angela', 'Ledesma', 1.55);