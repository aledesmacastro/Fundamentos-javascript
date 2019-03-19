/* HERENCIA PROTOTIPAL */
function heredaDe(prototipoHijo, prototipoPadre) {
    // eslint-disable-next-line no-empty-function
    var fn = function() {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype= new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function persona(nombre, apellido, estatura, ocupacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.estatura = estatura;
    this.ocupacion = ocupacion;
}
persona.prototype.saludar = function () {
    // eslint-disable-next-line no-console
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}.`);
}

persona.prototype.myAltura = function () {
    var myEstatura = this.estatura * 100;
    if (myEstatura <= 155) {
        // eslint-disable-next-line no-console
        console.log(`mi estatura es ${this.estatura}, por tal motivo soy una persona bajita`);
    } else {
        // eslint-disable-next-line no-console
        console.log(`mi estatura es ${this.estatura}, por tal motivo soy una persona alta`);
    }
}

function desarrollador(nombre, apellido, estatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.estatura = estatura;
}

heredaDe(desarrollador, persona);

desarrollador.prototype.saludar = function () {
        // eslint-disable-next-line no-console
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy un desarrollador`);
}

// const anibal = new desarrollador('Anibal', 'Ledesma', 1.69);
// const angela = new persona('Angela', 'Ledesma', 1.55);

// anibal.saludar();
// angela.saludar();