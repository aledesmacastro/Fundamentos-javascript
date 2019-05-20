const violeta = document.getElementById('violeta');
const celeste = document.getElementById('celeste');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 10;

class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this);
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
        setTimeout(() => {
            this.agregarEventoClick();
        }, 200);
    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this);
        this.elegirColor = this.elegirColor.bind(this);
        this.toggleBtnEmpezar();
        this.nivel = 1;
        this.colores = {
            violeta,
            celeste,
            naranja,
            verde
        }
    }

    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide');
        } else {
            btnEmpezar.classList.add('hide');
        }
    }

    generarSecuencia () {
        // eslint-disable-next-line no-unused-vars
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    siguienteNivel () {
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventoClick();
    }

    transformarNumColor(numero) {
        switch (numero) {
            case 0:
                return 'violeta'
            case 1:
                return 'celeste'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    transformarColorANumber(color) {
        switch (color) {
            case 'violeta':
                return 0
            case 'celeste':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i+=1) {
            let color = this.transformarNumColor(this.secuencia[i]);
            // console.log(color);
            setTimeout(() => this.iluminarColor(color), 1000 * i);
        }
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350);
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light');
    }

    agregarEventoClick() {
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
    }

    eliminarEventosClick() {
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
    }

    elegirColor(ev) {
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.transformarColorANumber(nombreColor);
        this.iluminarColor(nombreColor);
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel+=1
            if (this.subnivel === this.nivel) {
                this.nivel+=1
                this.eliminarEventosClick();
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    this.ganoElJuego();
                } else {
                    setTimeout(this.siguienteNivel, 1500);
                }
            }
        } else {
            this.perdioElJuego();
        }
    }

    ganoElJuego() {
        // eslint-disable-next-line no-undef
        swal('Felicitaciones!','Ganaste el juego', 'success')
        .then(this.inicializar);
    }
    
    perdioElJuego() {
        // eslint-disable-next-line no-undef
        swal('Lo siento!', 'Perdiste el juego :(', 'error')
        .then(() => {
            this.eliminarEventosClick();
            this.inicializar();
        })
    }
}

// eslint-disable-next-line no-unused-vars
function empezarJuego() {
    // eslint-disable-next-line no-unused-vars
    window.juego = new Juego;
}