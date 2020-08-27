
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];
switch ( comando ) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        let save = porHacer.guardarDB();
        break;

    case 'listar':

    let listado = porHacer.getListado();

    for ( const tarea of listado ) {
        console.log('=========Por Hacer========'.green);
        console.log('tarea: ',tarea.descripcion);
        console.log('completado: ',tarea.completado);
        console.log('=========================='.green);
    }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion );
        console.log(borrado);
        break;

    default:
        console.log('comando no reconocido');
        break;
}