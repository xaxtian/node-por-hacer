const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    }).command('eliminar', 'Eliminar un elemento', {
        descripcion

    })
    .help()
    .argv;



module.exports = {
    argv
}