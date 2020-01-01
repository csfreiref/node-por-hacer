const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendente la tarea '
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Aactualiza el estado completado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}