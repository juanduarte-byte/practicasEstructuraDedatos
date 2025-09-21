// Función recursiva que aplica el Algoritmo de Euclides
function mcd(a, b) {
    // Caso Base: Si el segundo número es 0, el MCD es el primero.
    if (b === 0) {
        return a;
    }
    // Caso Recursivo: Llamamos a la función con b y el residuo de a/b.
    return mcd(b, a % b);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el primer número entero: ', (num1_str) => {
    rl.question('Ingresa el segundo número entero: ', (num2_str) => {
        const num1 = parseInt(num1_str);
        const num2 = parseInt(num2_str);

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Ambos valores deben ser números enteros.');
        } else {
            // Aseguramos que los números sean positivos para el algoritmo
            const resultado = mcd(Math.abs(num1), Math.abs(num2));
            console.log(`\nEl Máximo Común Divisor (MCD) de ${num1} y ${num2} es: ${resultado}`);
        }
        
        rl.close();
    });
});