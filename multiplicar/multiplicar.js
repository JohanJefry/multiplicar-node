const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        return 'No es un numero';
    }


    console.log('===================================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('===================================='.green);
    let data = '';
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
        // data += `${base} * ${i} = ${base * i} \n`;
    }

}

let crearArchivo = async(base, limite = 10) => {
    if (!Number(base)) {
        return 'No es un numero';
    }

    let data = '';

    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }

    //const data = new Uint8Array(Buffer.from('Hello Node.js'));

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

        try {
            console.log(`tabla-${base}-al-${limite}.txt`);
            return `tabla-${base}-al-${limite}.txt`;
        } catch (err) {
            throw err;
        }

    });


}

module.exports = {
    crearArchivo,
    listarTabla
}