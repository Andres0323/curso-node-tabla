const fs = require('fs'); // importo paquete

const crearArchivo = async ( base = 5, listar = false ) => {
    try {
    let salida = '';

    for(let i = 1; i < 11; i++) {
        // Se almacena sin mostrar
        salida += `${base} x ${i} = ${base * i}\n`
    }

    // De esta manera lista el resultado segun la bandera de listar
    if(listar) {
        console.log('======================');
        console.log(`   Tabla del ${base}  `);
        console.log('======================');

        console.log(salida); // Se muestra resultado
    }

    // De esta manera podemos crear un archivo o script

    // fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
    //     if (err) throw err;

    //     console.log(`tabla-${base}.txt Creada correctamente`);
    // })

    await fs.writeFileSync( `./salida/tabla-${base}.txt`, salida ); // si sucede error se debe meter en try y cacth

    // console.log(`tabla-${base}.txt Creada correctamente`);

    return `Archivo ${base} Creado`
    } catch (e) {
        throw e;
    }
}

// De esta manera exporto la funcion
module.exports = {
    crearArchivo
}