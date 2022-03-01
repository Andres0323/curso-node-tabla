const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true, // hace los parametros requeridos
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
})
.check( (argv, options) => {
    if( isNaN(argv.b)) {
        throw 'La base tiene que ser un número';
    }
    return true;
})
.argv;


console.clear();

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base ] = arg3.split('=');


// console.log(base);

// const numero = 2;

crearArchivo(argv.b, argv.l)
   .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
   .catch( err => console.log(err));