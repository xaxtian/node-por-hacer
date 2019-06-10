const argv = require("./config/yargs.js").argv;
const porHacer = require('./por-hacer/por-hacer.js');
const colors = require('colors');

console.log(argv);

let commando = argv._[0];


switch (commando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==========Tarea por hacer========'.green);
            console.log(tarea.desc);
            console.log('Estado: ', tarea.completado);
            console.log('================================='.green)
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let eliminado = porHacer.eliminar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log('comando no encontrado');
        break;
}