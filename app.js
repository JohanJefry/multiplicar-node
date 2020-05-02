const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let conando = argv._[0];

switch (conando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo2 => console.log(`archivo ccreado:`, colors.green(archivo2)))
            .catch(console.log);
        break;
    default:
        console.log('comando no reonocido');
}

// console.log('limite', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1];