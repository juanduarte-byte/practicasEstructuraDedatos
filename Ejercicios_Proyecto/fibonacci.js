// La función recursiva para calcular el número de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Módulo de Node.js para leer la entrada del usuario
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuántos números de la serie Fibonacci quieres ver? ', (answer) => {
    // Convierte la respuesta de texto a número entero
    const cantidadDeNumeros = parseInt(answer);

    if (isNaN(cantidadDeNumeros) || cantidadDeNumeros <= 0) {
        console.log('Por favor, ingresa un número entero y positivo.');
    } else {
        console.log(`\nSerie de Fibonacci (primeros ${cantidadDeNumeros} números):`);
        
        let resultado = '';
        for (let i = 0; i < cantidadDeNumeros; i++) {
            resultado += fibonacci(i) + " ";
        }
        console.log(resultado.trim());
    }

    // Cierra la interfaz para que el programa termine
    rl.close();
});