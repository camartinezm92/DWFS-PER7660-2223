const ImageHandler = require('./ImageHandler.js')


let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);


/**
 * Ejemplo de construccion de una imagen
 */
function ejemplo() {

    let outputPath = 'output/ejemplo.jpg';
    let pixeles = [];
    let filas = 2;
    let columnas = 2;
    for (let i = 0; i < filas; i++) {
        let nuevaFila = [];
        console.log("Fila: " + i);
        for (let j = 0; j < columnas; j++) {
            console.log("Columna:" + j)
            let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
            if ((i + j) % 2 === 0) { // Si la suma de la fila y la columna es par....
                pixel = [255, 255, 255];
            }
            console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j)
            nuevaFila.push(pixel);
        }
        console.log(nuevaFila)
        pixeles.push(nuevaFila);
    }
    console.log(pixeles);
    handler.savePixels(pixeles, outputPath, filas, columnas);
}

/**
 * Esta función debe transformar una imagen en escala de rojos.
 *
 * Una forma de conseguirlo es simplemente poner los canales G y B a 0 para cada pixel.
 */
function redConverter() {
    let outputPath = './output/tucan_red.jpg';
    let pixels = handler.getPixels();
    //Aqui tu codigo
    for (let i = 0; i < pixels.length; i++) {
        console.log("red " + i +" to "+pixels.length);
        for (let j = 0; j < pixels[i].length; j++) {
            pixels[i][j][1] = 0;
            pixels[i][j][2] = 0;
        }
    }
    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 * 
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
    let outputPath = 'output/tucan_green.jpg';
    let pixels = handler.getPixels();
    
    for (let i = 0; i < pixels.length; i++) {
        console.log("green " + i +" to "+pixels.length);
        for (let j = 0; j < pixels[i].length; j++) {
            pixels[i][j][0] = 0;
            pixels[i][j][2] = 0;
        }
    }

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
    let outputPath = 'output/tucan_blue.jpg';
    let pixels = handler.getPixels();

    for (let i = 0; i < pixels.length; i++) {
        console.log("blue " + i +" to "+pixels.length);
        for (let j = 0; j < pixels[i].length; j++) {
            // Colocamos en cero los canales rojo y verde
            pixels[i][j][0] = 0;
            pixels[i][j][1] = 0;
        }
    }

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en escala de grises.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * asignarle a cada canal de RGB esa media.
 *
 * Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y por lo tanto
 * lo debemos transformar en el pixel [140, 140, 140].
 */
function greyConverter() {
    let outputPath = 'output/tucan_grey.jpg';
    let pixels = handler.getPixels();

    for (let i = 0; i < pixels.length; i++) {
        console.log("gray " + i +" to "+pixels.length);
        for (let c = 0; c < pixels[i].length; c++) {
            let media = (pixels[i][c][0] + pixels[i][c][1] + pixels[i][c][2]) / 3
            pixels[i][c] = [media, media, media];
        }
    }

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
    let outputPath = 'output/tucan_black_and_white.jpg';
    let pixels = handler.getPixels();

    for (let x = 0; x < pixels.length; x++) {
        console.log("BW " + x +" to "+pixels.length);
        for (let y = 0; y < pixels[x].length; y++) {
            const media = (pixels[x][y][0] + pixels[x][y][1] + pixels[x][y][2]) / 3;
            const valor = media < 128 ? [0, 0, 0] : [255, 255, 255];
            pixels[x][y] = valor;
        }
    }

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
    let outputPath = 'output/tucan_scale_down.jpg';
    let pixels = handler.getPixels();
    let nuevaImagen = [];

    pixels.forEach((fila, indexFila) => {
        console.log("scale " + indexFila +" to "+pixels.length);
        if (indexFila % 2 === 0) {
            let nuevaFila = [];
            fila.forEach((pixel, indexColumna) => {
                if (indexColumna % 2 === 0) {
                    nuevaFila.push(pixel);
                }
            });
            nuevaImagen.push(nuevaFila);
        }
    });

    handler.savePixels(nuevaImagen, outputPath, handler.getShape()[0] / 2, handler.getShape()[1] / 2);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
    let outputPath = 'output/tucan_dimed.jpg';
    let pixels = handler.getPixels();
    pixels.forEach(fila => {
        fila.forEach(pixel => {
            pixel[0] = pixel[0] / dimFactor;
            pixel[1] = pixel[1] / dimFactor;
            pixel[2] = pixel[2] / dimFactor;
        });
    });
    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
    let outputPath = 'output/tucan_inverse.jpg';
    let pixels = handler.getPixels();

    for (let i = 0; i < pixels.length; i++) {
        console.log("invert " + i +" to "+pixels.length);
        for (let j = 0; j < pixels[i].length; j++) {
            pixels[i][j][0] = 255 - pixels[i][j][0];
            pixels[i][j][1] = 255 - pixels[i][j][1];
            pixels[i][j][2] = 255 - pixels[i][j][2];
        }
    }

    handler.savePixels(pixels, outputPath);
}

/**
 * merge - Junta dos imagenes con cierto factor de fusion
 * Se entrega implementado, para tomar como ejemplo
 * @param alphaFirst
 * @param alphaSecond
 */
function merge(alphaFirst, alphaSecond) {
    let catHandler = new ImageHandler('input/cat.jpg');
    let dogHandler = new ImageHandler('input/dog.jpg');
    let outputPath = 'output/merged.jpg';

    let catPixels = catHandler.getPixels();
    let dogPixels = dogHandler.getPixels();

    let pixels = [];


    for (let indiceFila = 0; indiceFila < catPixels.length; indiceFila++) {
        console.log("merge " + indiceFila +" to "+pixels.length);
        let fila = [];
        for (let indiceColumna = 0; indiceColumna < catPixels[indiceFila].length; indiceColumna++) {
            let pixelPerro = dogPixels[indiceFila][indiceColumna];
            let pixelGato = catPixels[indiceFila][indiceColumna];
            let nuevoPixel = [pixelPerro[0] * alphaFirst + pixelGato[0] * alphaSecond,
            pixelPerro[1] * alphaFirst + pixelGato[1] * alphaSecond,
            pixelPerro[2] * alphaFirst + pixelGato[2] * alphaSecond]
            fila.push(nuevoPixel);
        }
        pixels.push(fila);
    }

    dogHandler.savePixels(pixels, outputPath);
}


/**
 * Programa de prueba
 * NO DEBES MODIFICAR ESTAS LÍNEAS DE CÓDIGO
 *
 * Ejecuta el archivo actividad.js tal como se indica en el archivo Readme.md
 * En la carpeta output/ apareceran los resultados para cada uno de los casos
 *
 *     Ejecutar ejemplo: 0
 *     Conversor a rojos: 1
 *     Conversor a verdes: 2
 *     Conversor a azules: 3
 *     Conversor a grises: 4
 *     Conversor blanco y negro: 5
 *     Redimensionar: 6
 *     Reducir brillo: 7
 *     Negativo: 8
 *     Fusion de imagenes: 9
 */


/*let optionN = 0;
let optionN = 1;
let optionN = 2;
let optionN = 3;
let optionN = 4;
let optionN = 5;
let optionN = 6;
let optionN = 7;
*/
let optionN = 8;
/*
let optionN = 9;
*/

switch (optionN) {
    case 1: redConverter(); break;
    case 2: greenConverter(); break;
    case 3: blueConverter(); break;
    case 4: greyConverter(); break;
    case 5: blackAndWhiteConverter(); break;
    case 6: scaleDown(); break;
    case 7: dimBrightness(2); break;
    case 8: invertColors(); break;
    case 9: merge(0.3, 0.7); break;
    default: ejemplo();
}
