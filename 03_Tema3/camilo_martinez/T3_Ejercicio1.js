/**
 * Funcion 1
 * 
 * Calculo de la letra del DNI (documento de identidad) español
 * 
 * La letra del DNI se obtiene mediante la siguiente funcion matematica
 * - Obtener el resto de la division entera del numero de DNI y el numero 23. 
 * - El resto de esa division se asocia con una letra concreta, segun un array de letras.
 * 
 * Se pide{
 * }
 * Debe comprobar que el numero recibido sea mayor que 0 y menor y menor que 99999999. Si no es asi, se devuelve 'null'
 * ;Crear una funcion obtenerLetraDni que reciba como argumento el numero del DNI y devuelva el numero con su letra asociada.
 * Pse uedes usar el siguiente array de letras
 * 
 * Ejemplo{
 * } obtenerLetraDni(50487965) -> 50487965K
*/;
function obtenerLetraDni(dni) {
    var letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    resto = dni % 23;
    console.log('resto = ' + resto);
    console.log('letra= ' + letra[resto]);
    letra = letra[resto];
    return dni + letra;
}

var dni = 1020777352;

console.log('respuesta=' + obtenerLetraDni(dni));

/**
 * Funcion 2
 * 
 * Numeros pares e impares
 * 
 * Se pide{
 * }
 * El argumento es un numero entero
 * ;Crear una funcion esPar que devuelva 'true' si el numero recibido es par o 'false' en caso contrario.
 * se 
 * Ejemplo{
 * } esPar(4) -> true
; */
var numero = 9;
let esPar = (numero) => {
    return numero % 2 === 0 ? true : false;
}
console.log(esPar(numero));

/**
 * Funcion 3
 * 
 * Cadenas de texto
 * 
 * Se pide{
 * }
 * El argumento es una cadena (String);
 * Crear una funcion formatStr que elimine todos los espacios de una cadena recibida 
 * como argumento y que muestre en mayuscula las consonantes de la cadena 
 * (cualquier otro caracter se queda como esta)
 * se 
 * Ejemplo{
 * } formatStr("Esto es un Ejemplo") -> "ESToeSuNEJeMPLo"
; */

var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
var texto ="        esto    es   UnaPruebA   "
var nuevotexto=[];
function foramtStr(texto){
    for(let i of texto){
        if (i=== ' '){
            delete(texto[i]);
        }else if(consonants.includes(i)){
            
            nuevotexto.push(i.toUpperCase());
        }
        else{
            nuevotexto.push(i);
        }
    }
    nuevotexto = nuevotexto.join('');
    return nuevotexto
}

console.log(foramtStr(texto));

/**
 * Funcion 3
 * 
 * Palindromos
 * 
 * Se pide{
 * }
 * Una cadena es palindroma si se lee igual de derecha a izquierda y de izquierda a derecha, sin tener en cuenta los espacios.
 * ;Crear una funcion esPalindromo que devuelva 'true' si la cadena pasada como argumento es palindroma, 'false' en caso contrario
 * Ese l argumento es una cadena (String)
 * 
 * Ejemplo{
 * } esPalindromo("Dabale arroz a la zorra el abad") -> true

; */

var normal =[];
var text = 'oracionsinsentido';
var esPalindormoR = false;
var reverse = text.reverse();

function esPalindromo(text){
    let frase = text.toLowerCase();
    for (i of frase){
        if(frase[i]=== reverse[i]){
            esPalindormoR=true;
        }
    console.log(esPalindormoR);
}
}
esPalindromo(text);