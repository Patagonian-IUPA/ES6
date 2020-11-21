// Ejercicio 1 Arrow funtions

//  Transformar las siguiente funciones en funciones flecha (Arrow Functions)

// Ej: 

function generarNumeroRandom() {
    const numeroRandom = Math.ceil(Math.random() * 10);

    /* 
    Math.ceil(Math.random() * 9); genera un numer entero del 1 al 10
    
    Usando Math.floor se redondea el numero generado por la funcion 
    Math.random() hacia abajo. Ej

    Math.floor(Math.random() * 10); va a generar un numero random de 0 a 9  
    */

    return numeroRandom;
}

console.log(generarNumeroRandom());

/* Solucion ejercico 1 */

/* Fin Solucion ejercico 1 */

// Ejercicio 2

function generarNumeroRandomEntre(desde, hasta) {
    const numeroRandom = Math.floor(Math.random() * (hasta - (desde - 1))) + desde;
    /* Si quieren piensen como funciona esta funcion */
    return numeroRandom;
}

console.log(generarNumeroRandomEntre(-1, 5));

/* Solucion ejercico 2 */

/* Fin Solucion ejercico 2 */

// Ejercicio 3

function decirHola() {
    return 'Hola';
}

console.log(decirHola());

/* Solucion ejercico 3 */

/* Fin Solucion ejercico 3 */

// Ejercicio 4
const nombre = function() {
    const nombre = 'Emi';
    return nombre;
}

console.log(nombre());
/* Solucion ejercico 4 */

/* Fin Solucion ejercico 4 */

// Ejercicio 5

const perro = {
    ladrar: function() {
        return 'Guau!!';
    }
}
console.log(perro.ladrar());

/* Solucion ejercico 5 */

/* Fin Solucion ejercico 5 */


// Ejercicio 6

const gato = {
    caminar: function(edad) {
        if (edad > 10) {
            return 'Lento';
        }
        return 'Rapido';
    }
}

console.log(gato.caminar(3));
console.log(gato.caminar(13));

/* Solucion ejercico 6 */

/* Fin Solucion ejercico 6 */

// Ejercicio 7
const pez = {
    medioSupervivencia: 'Agua',
    dondeVivo: function() {
        return this.medioSupervivencia;
    }
}

console.log(pez.dondeVivo());

/* Solucion ejercico 7 */

/* Fin Solucion ejercico 7 */