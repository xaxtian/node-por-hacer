const fs = require('fs');

let listadoPorHacer = [];


const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const saveDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    });
}

const crear = (desc) => {
    cargarDb();
    listadoPorHacer = listadoPorHacer.length === 0 ? [] : listadoPorHacer;
    let porHacer = {
        desc,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    saveDb();
    return porHacer;
}

const getListado = () => {
    return require('../db/data.json');
}

const actualizar = (desc, completado) => {
    cargarDb();
    const ndx = listadoPorHacer.findIndex(current => current.desc === desc);
    if (ndx >= 0) {
        listadoPorHacer[ndx].completado = completado;
        saveDb();
        return true;
    } else {
        return false;
    }
}

const eliminar = (desc, completado) => {
    cargarDb();
    const ndx = listadoPorHacer.findIndex(current => current.desc === desc);
    if (ndx >= 0) {
        listadoPorHacer.splice(ndx, 1);
        saveDb();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}