const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw new error(err);
        } else {
            console.log(`Completado`)
        }
    });

}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data');
    } catch (e) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const getListado = () => {
    try {
        listadoPorHacer = require('../db/data');
    } catch (e) {
        listadoPorHacer = [];
    }
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const borrar =  (descripcion) => {
    cargarDb();
    let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (indice >= 0) {
        if (indice > -1) {
            listadoPorHacer.splice(indice, 1);
        }
        guardarDb();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}