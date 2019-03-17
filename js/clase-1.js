/* global*/
var signo = prompt('Cual es tu signo?');

if (signo.length > 0 && signo !== null) {
    signo = signo.toLowerCase();
    switch (signo) {
        case 'aries':
            // eslint-disable-next-line no-console
            console.log('Podrá sentir que las cosas no salen como usted las planeó y terminar irritado.Deberá moderar su temperamento y verá que, de a poco, las cosas mejorarán.');
            break
        case 'tauro':
            // eslint-disable-next-line no-console
            console.log('Entienda que no es momento para que se proponga grandes logros, sepa que lo ideal sería ir resolviendo de a poco las pequeñas cuestiones pendientes.');
            break;
        case 'géminis':
        case 'geminis':
            // eslint-disable-next-line no-console
            console.log('En este día, podría enfrentarse con situaciones difíciles que le exigirán al máximo su atención. Sea paciente y antes de actuar piense bien los movimientos.');
            break
        case 'cancer':
        case 'cáncer':
            // eslint-disable-next-line no-console
            console.log('Aunque le duela en el alma, sepa que tendrá que rechazar ese proyecto que le ofrecieron hace días. No es un buen momento para invertir todo su capital.');
            break
        case 'leo':
            // eslint-disable-next-line no-console
            console.log('Intente sincerarse con usted mismo. Debería aprender a reconocer sus comportamientos erróneos y buscarle la solución a cada una de las situación.');
            break
        case 'virgo':
            // eslint-disable-next-line no-console
            console.log('Sepa que teniendo una postura más dinámica, podrá conquistar nuevas oportunidades y dejar atrás una etapa que fue poco satisfactoria para usted.');
            break
        case 'libra':
            // eslint-disable-next-line no-console
            console.log('Entienda que el rencor no es un buen consejero en la vida. Sepa que debe actuar sin que el sentimiento oscurezca su razón. Actúe de forma prudente.');
            break
        case 'escorpio':
            // eslint-disable-next-line no-console
            console.log('En este día, deberá extremar su paciencia al máximo. Sepa que no debe desesperarse si hoy siente que las obligaciones lo superan más de lo habitual.');
            break
        case 'sagitario':
            // eslint-disable-next-line no-console
            console.log('Aunque no se sienta totalmente feliz, procure que la melancolía no lo atrape en estos momentos. Modifique el estilo de su vida y todo mejorará pronto.');
            break
        case 'capricornio':
            // eslint-disable-next-line no-console
            console.log('En este día, deberá hablar menos y escuchar más. De esta manera, mejorará la comunicación y aprenderá a mantener un mejor vínculo con los demás.');
            break
        case 'acuario':
            // eslint-disable-next-line no-console
            console.log('Sepa que hoy su dinamismo y energía estarán en alza durante la jornada. Aproveche, ya que podrá poner en marcha todos los proyectos postergados.');
            break
        case 'picis':
            // eslint-disable-next-line no-console
            console.log('Comprenda que muchas veces es bueno realizar un balance en la vida. Aprenda de los errores cometidos para poder mejorar las cosas y no cometerlos nuevamente.');
            break
        
        default:
        // eslint-disable-next-line no-console
        console.log('No es un signo zodiacal válido');
        break;
    }
} else {
    // eslint-disable-next-line no-console
    console.log('Debes ingresar el nombre de tu signo zodiacal');
}
