const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify( listadoPorHacer );

    let grabar =  fs.writeFile(`./db/data.json`, data, ( err ) =>{
        if( err ){
           throw new Error( 'No se pudo grabar ',err );
        }});

}


const cargarDB = () => {
    
    try {

        listadoPorHacer = require('../db/data.json');

        
    } catch (error) {
        listadoPorHacer = [];        
    }

}

const actualizar = ( descripcion, completado ) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if( index >= 0 ){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}


const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = ( descripcion ) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado : false
    };


    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;

}

const borrar = ( descripcion ) => {

    cargarDB();

    let encuentra = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if( encuentra >= 0 ){
        listadoPorHacer.splice( encuentra, 1 );
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}